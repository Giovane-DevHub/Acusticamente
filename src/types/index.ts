// Tipagens centrais da aplicação Acusticamente

export type UserRole = 'admin' | 'professor' | 'atendente';

export type AppFormScreen = 'home' | 'agenda' | 'alunos' | 'planos' | 'auditoria' | 'configuracoes' | 'financeiro' | 'relatorios';

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

export interface FinanceiroPermissions {
  acesso: boolean;
  cadastrar: boolean;
  alterar: boolean;
  excluir: boolean;
}

export interface RelatoriosPermissions {
  acesso: boolean;
  gerar: boolean;
}

export interface UserPermissions {
  alunos: AlunosPermissions;
  agenda: AgendaPermissions;
  planos: PlanosPermissions;
  home: HomePermissions;
  auditoria: AuditoriaPermissions;
  configuracoes: ConfiguracoesPermissions;
  financeiro: FinanceiroPermissions;
  relatorios: RelatoriosPermissions;
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

export type MusicalLevel = 'iniciante' | 'basico' | 'intermediario' | 'avancado';

export interface Student {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  dataNascimento?: string;
  instrumentoPrincipal?: string;
  nivelMusical?: MusicalLevel;
  responsavelNome?: string;
  responsavelTelefone?: string;
  responsavelParentesco?: string;
  planoId: string;
  moduloAtual?: string;
  saldoReposicoes?: number;
  valorMensalidade?: number;
  diaVencimento?: number;
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

export type AppointmentStatus =
  | 'agendado'
  | 'concluido'
  | 'falta_justificada'
  | 'falta_injustificada'
  | 'cancelado';

export type AppointmentType = 'regular' | 'reposicao';

export interface Appointment {
  id: string;
  titulo: string;
  alunoId: string;
  planoId?: string;
  moduloId?: string;
  data: string; // YYYY-MM-DD
  horaInicio: string; // HH:mm
  horaFim: string; // HH:mm
  status: AppointmentStatus;
  tipoAula?: AppointmentType;
  justificativaFalta?: string;
  aulaOriginalId?: string;
  aulaReposicaoId?: string;
  observacoes?: string;
  criadoEm: string;
}

export type PaymentStatus = 'pago' | 'pendente' | 'atrasado';
export type PaymentMethod = 'pix' | 'dinheiro' | 'cartao_credito' | 'cartao_debito' | 'boleto' | 'transferencia';

export interface Payment {
  id: string;
  alunoId: string;
  descricao: string; // Ex: Mensalidade Setembro/2026, Matrícula
  mesReferencia?: string; // YYYY-MM
  valor: number;
  dataVencimento: string; // YYYY-MM-DD
  dataPagamento?: string; // YYYY-MM-DD
  status: PaymentStatus;
  formaPagamento?: PaymentMethod;
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
  | 'financeiro'
  | 'relatorios'
  | 'auditoria'
  | 'configuracoes';

export interface SystemSettings {
  nomeEscola: string;
  nomeClinica?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  cnpj?: string;
  inscricaoEstadual?: string;
  telefoneContato: string;
  emailContato: string;
  website?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  mongoUri: string;
  mongoDatabase: string;
  mongoStatus: 'conectado' | 'desconectado' | 'simulado';
  notificacoesAtivas: boolean;
}
