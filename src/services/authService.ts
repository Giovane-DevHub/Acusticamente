import { User, UserRole, UserPermissions, AppScreen } from '../types';
import { storageService } from './storageService';
import { auditService } from './auditService';

export const DEFAULT_PERMISSIONS_BY_ROLE: Record<UserRole, UserPermissions> = {
  admin: {
    alunos: { acesso: true, cadastrar: true, alterar: true, excluir: true },
    agenda: { acesso: true, cadastrar: true, alterar: true, excluir: true },
    planos: { acesso: true, cadastrar: true, alterar: true, excluir: true },
    home: { acesso: true },
    auditoria: { acesso: true },
    configuracoes: { acesso: true, alterar: true }
  },
  professor: {
    alunos: { acesso: true, cadastrar: true, alterar: true, excluir: false },
    agenda: { acesso: true, cadastrar: true, alterar: true, excluir: false },
    planos: { acesso: true, cadastrar: false, alterar: false, excluir: false },
    home: { acesso: true },
    auditoria: { acesso: false },
    configuracoes: { acesso: false, alterar: false }
  },
  atendente: {
    alunos: { acesso: true, cadastrar: true, alterar: true, excluir: false },
    agenda: { acesso: true, cadastrar: true, alterar: true, excluir: false },
    planos: { acesso: false, cadastrar: false, alterar: false, excluir: false },
    home: { acesso: true },
    auditoria: { acesso: false },
    configuracoes: { acesso: false, alterar: false }
  }
};

export function getUserPermissions(user?: User | null): UserPermissions {
  if (!user) {
    return {
      alunos: { acesso: false, cadastrar: false, alterar: false, excluir: false },
      agenda: { acesso: false, cadastrar: false, alterar: false, excluir: false },
      planos: { acesso: false, cadastrar: false, alterar: false, excluir: false },
      home: { acesso: false },
      auditoria: { acesso: false },
      configuracoes: { acesso: false, alterar: false }
    };
  }

  if (user.papel === 'admin') {
    return JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS_BY_ROLE.admin));
  }

  const defaults = DEFAULT_PERMISSIONS_BY_ROLE[user.papel] || DEFAULT_PERMISSIONS_BY_ROLE.professor;
  const raw = user.permissoes as any;

  if (!raw) {
    return JSON.parse(JSON.stringify(defaults));
  }

  const isOldBool = (val: any) => typeof val === 'boolean';

  return {
    alunos: {
      acesso: isOldBool(raw.alunos) ? raw.alunos : (raw.alunos?.acesso ?? defaults.alunos.acesso),
      cadastrar: isOldBool(raw.alunos) ? raw.alunos : (raw.alunos?.cadastrar ?? defaults.alunos.cadastrar),
      alterar: isOldBool(raw.alunos) ? raw.alunos : (raw.alunos?.alterar ?? defaults.alunos.alterar),
      excluir: isOldBool(raw.alunos) ? false : (raw.alunos?.excluir ?? defaults.alunos.excluir)
    },
    agenda: {
      acesso: isOldBool(raw.agenda) ? raw.agenda : (raw.agenda?.acesso ?? defaults.agenda.acesso),
      cadastrar: isOldBool(raw.agenda) ? raw.agenda : (raw.agenda?.cadastrar ?? defaults.agenda.cadastrar),
      alterar: isOldBool(raw.agenda) ? raw.agenda : (raw.agenda?.alterar ?? defaults.agenda.alterar),
      excluir: isOldBool(raw.agenda) ? false : (raw.agenda?.excluir ?? defaults.agenda.excluir)
    },
    planos: {
      acesso: isOldBool(raw.planos) ? raw.planos : (raw.planos?.acesso ?? defaults.planos.acesso),
      cadastrar: isOldBool(raw.planos) ? raw.planos : (raw.planos?.cadastrar ?? defaults.planos.cadastrar),
      alterar: isOldBool(raw.planos) ? raw.planos : (raw.planos?.alterar ?? defaults.planos.alterar),
      excluir: isOldBool(raw.planos) ? false : (raw.planos?.excluir ?? defaults.planos.excluir)
    },
    home: {
      acesso: isOldBool(raw.home) ? raw.home : (raw.home?.acesso ?? defaults.home.acesso)
    },
    auditoria: {
      acesso: isOldBool(raw.auditoria) ? raw.auditoria : (raw.auditoria?.acesso ?? defaults.auditoria.acesso)
    },
    configuracoes: {
      acesso: isOldBool(raw.configuracoes) ? raw.configuracoes : (raw.configuracoes?.acesso ?? defaults.configuracoes.acesso),
      alterar: isOldBool(raw.configuracoes) ? raw.configuracoes : (raw.configuracoes?.alterar ?? defaults.configuracoes.alterar)
    }
  };
}

export function hasPermission(user: User | null | undefined, screen: AppScreen): boolean {
  if (!user) return false;
  if (screen === 'login') return true;
  // Apenas administradores têm acesso à aba/tela de usuários
  if (screen === 'user') return user.papel === 'admin';
  if (user.papel === 'admin') return true;

  const perms = getUserPermissions(user);
  const screenPerm = perms[screen as keyof UserPermissions];
  if (screenPerm && typeof screenPerm === 'object' && 'acesso' in screenPerm) {
    return !!screenPerm.acesso;
  }
  return false;
}

export function hasActionPermission(
  user: User | null | undefined,
  module: keyof UserPermissions,
  action: string
): boolean {
  if (!user) return false;
  if (user.papel === 'admin') return true;

  const perms = getUserPermissions(user);
  const mod = perms[module] as unknown as Record<string, boolean> | undefined;
  if (!mod) return false;
  return !!mod[action];
}

const SESSION_KEY = 'acusticamente_active_session';

class AuthService {
  private currentUser: User | null = null;

  constructor() {
    this.restoreSession();
  }

  private restoreSession(): void {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) {
        this.currentUser = JSON.parse(saved);
      }
    } catch (e) {
      this.currentUser = null;
    }
  }

  public getCurrentUser(): User | null {
    if (this.currentUser) {
      const fresh = storageService.getUserById(this.currentUser.id);
      if (fresh) {
        this.currentUser = fresh;
        localStorage.setItem(SESSION_KEY, JSON.stringify(fresh));
      }
    }
    return this.currentUser;
  }

  public isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  public login(login: string, senha: string): { success: boolean; message: string; user?: User } {
    const users = storageService.getUsers();
    
    // Busca usuário pelo login
    const foundUser = users.find(u => u.login === login.trim());

    if (!foundUser) {
      auditService.log({
        tela: 'Login',
        acao: 'Tentativa de Login Falha',
        usuarioLogin: login,
        usuarioNome: 'Desconhecido',
        detalhes: `Tentativa de login frustrada com o usuário "${login}" (usuário não encontrado).`
      });
      return { success: false, message: 'Usuário ou senha incorretos.' };
    }

    // Verifica a senha
    if (foundUser.senha !== senha.trim()) {
      auditService.log({
        tela: 'Login',
        acao: 'Tentativa de Login Falha',
        usuarioId: foundUser.id,
        usuarioLogin: foundUser.login,
        usuarioNome: foundUser.nome,
        detalhes: `Senha incorreta informada para o usuário "${foundUser.login}".`
      });
      return { success: false, message: 'Usuário ou senha incorretos.' };
    }

    // Login com sucesso
    this.currentUser = foundUser;
    localStorage.setItem(SESSION_KEY, JSON.stringify(foundUser));

    auditService.log({
      tela: 'Login',
      acao: 'Autenticação com Sucesso',
      usuarioId: foundUser.id,
      usuarioLogin: foundUser.login,
      usuarioNome: foundUser.nome,
      detalhes: `Usuário "${foundUser.nome}" realizou login no sistema.`
    });

    return { success: true, message: 'Login realizado com sucesso!', user: foundUser };
  }

  public logout(): void {
    if (this.currentUser) {
      auditService.log({
        tela: 'Sistema',
        acao: 'Logout',
        usuarioId: this.currentUser.id,
        usuarioLogin: this.currentUser.login,
        usuarioNome: this.currentUser.nome,
        detalhes: `Usuário "${this.currentUser.nome}" encerrou a sessão.`
      });
    }

    this.currentUser = null;
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.setItem('acusticamente_manual_logout', 'true');
    window.location.reload();
  }
}

export const authService = new AuthService();
