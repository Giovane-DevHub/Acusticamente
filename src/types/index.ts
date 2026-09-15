// Tipagens centrais da aplicação Acusticamente

export type UserRole = 'admin' | 'professor' | 'atendente';

export type AppFormScreen = 'home' | 'agenda' | 'alunos' | 'planos' | 'auditoria' | 'configuracoes';

export interface AlunosPermissions {
  acesso: boolean;
  cadastrar: boolean;
  alterar: boolean;
  excluir: boolean;
}

export interface AgendaPermissions {
  acesso: boolean;
  cadastrar: boolean;
  alterar: boolean;
  excluir: boolean;
}

export interface PlanosPermissions {
  acesso: boolean;
  cadastrar: boolean;
  alterar: boolean;
  excluir: boolean;
}

export interface HomePermissions {
  acesso: boolean;
}

export interface AuditoriaPermissions {
  acesso: boolean;
}

export interface ConfiguracoesPermissions {
  acesso: boolean;
  alterar: boolean;
}

export interface UserPermissions {
  alunos: AlunosPermissions;
  agenda: AgendaPermissions;
  planos: PlanosPermissions;
  home: HomePermissions;
  auditoria: AuditoriaPermissions;
  configuracoes: ConfiguracoesPermissions;
}

export interface User {
  id: string;
  nome: string;
  login: string;
  senha?: string;
  papel: UserRole;
  permissoes?: UserPermissions;
  isSistema: boolean; // Usuário 1: não pode ser apagado, mas pode ter login e senha alterados
  criadoEm: string;
  atualizadoEm?: string;
}

export interface Student {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  planoId: string;
  moduloAtual?: string;
  status: 'ativo' | 'inativo';
  observacoes?: string;
  criadoEm: string;
}

export interface PlanModule {
  id: string;
  ordem: number;
  titulo: string;
  descricao?: string;
}

export interface TeachingPlan {
  id: string;
  nome: string;
  descricao: string;
  modulos: PlanModule[];
  criadoEm: string;
}

export interface Appointment {
  id: string;
  titulo: string;
  alunoId: string;
  planoId?: string;
  moduloId?: string;
  data: string; // YYYY-MM-DD
  horaInicio: string; // HH:mm
  horaFim: string; // HH:mm
  status: 'agendado' | 'concluido' | 'cancelado';
  observacoes?: string;
  criadoEm: string;
}

export interface AuditLog {
  id: string;
  dataHora: string; // ISO string
  dataHoraFormatada: string;
  usuarioId: string;
  usuarioLogin: string;
  usuarioNome: string;
  tela: string;
  acao: string;
  detalhes: string;
}

export type AppScreen =
  | 'login'
  | 'home'
  | 'agenda'
  | 'alunos'
  | 'user'
  | 'planos'
  | 'auditoria'
  | 'configuracoes';

export interface SystemSettings {
  nomeEscola: string;
  nomeClinica?: string;
  telefoneContato: string;
  emailContato: string;
  mongoUri: string;
  mongoDatabase: string;
  mongoStatus: 'conectado' | 'desconectado' | 'simulado';
  notificacoesAtivas: boolean;
}
