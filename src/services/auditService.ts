import { AuditLog } from '../types';

const AUDIT_STORAGE_KEY = 'acusticamente_audit_logs';

class AuditService {
  private logs: AuditLog[] = [];

  constructor() {
    this.loadLogs();
  }

  private loadLogs(): void {
    try {
      const saved = localStorage.getItem(AUDIT_STORAGE_KEY);
      if (saved) {
        this.logs = JSON.parse(saved);
      } else {
        this.logs = [];
      }
    } catch (e) {
      this.logs = [];
    }
  }

  private saveLogs(): void {
    try {
      localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(this.logs));
    } catch (e) {
      console.error('Erro ao salvar auditoria no storage:', e);
    }
  }

  public log(params: {
    usuarioId?: string;
    usuarioLogin?: string;
    usuarioNome?: string;
    tela: string;
    acao: string;
    detalhes: string;
  }): AuditLog {
    const now = new Date();
    
    // Formatação amigável: DD/MM/AAAA HH:mm:ss
    const pad = (n: number) => n.toString().padStart(2, '0');
    const dataHoraFormatada = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    const newLog: AuditLog = {
      id: 'audit_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      dataHora: now.toISOString(),
      dataHoraFormatada,
      usuarioId: params.usuarioId || '1',
      usuarioLogin: params.usuarioLogin || '1',
      usuarioNome: params.usuarioNome || 'Administrador',
      tela: params.tela,
      acao: params.acao,
      detalhes: params.detalhes
    };

    // Insere no início para ordem decrescente (mais recentes primeiro)
    this.logs.unshift(newLog);
    this.saveLogs();

    // Replica log em segundo plano para o MongoDB Atlas se disponível
    if (typeof window !== 'undefined') {
      fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection: 'auditorias', action: 'upsert', data: newLog })
      }).catch(() => {});
    }

    // Notifica ouvintes caso a tela de auditoria esteja aberta
    window.dispatchEvent(new CustomEvent('audit_updated', { detail: newLog }));
    return newLog;
  }

  public getLogs(): AuditLog[] {
    return [...this.logs];
  }

  public setLogs(logs: AuditLog[]): void {
    this.logs = logs;
    this.saveLogs();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('audit_updated'));
    }
  }

  public clearLocalOnly(): void {
    this.logs = [];
    this.saveLogs();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('audit_updated'));
    }
  }

  public async clearLogs(): Promise<void> {
    this.logs = [];
    this.saveLogs();

    try {
      if (typeof window !== 'undefined') {
        await fetch('/api/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ collection: 'auditorias', action: 'clear_audit' })
        });
      }
    } catch {
      // Ignora erro em offline
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('audit_updated'));
    }
  }
}

export const auditService = new AuditService();
