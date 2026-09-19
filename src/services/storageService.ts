import { User, Student, TeachingPlan, PaymentPlan, Appointment, SystemSettings, Payment, PaymentStatus, PaymentMethod } from '../types';
import { auditService } from './auditService';

const USERS_KEY = 'acusticamente_users';
const STUDENTS_KEY = 'acusticamente_students';
const PLANS_KEY = 'acusticamente_plans';
const PAYMENT_PLANS_KEY = 'acusticamente_payment_plans';
const APPOINTMENTS_KEY = 'acusticamente_appointments';
const SETTINGS_KEY = 'acusticamente_settings';
const PAYMENTS_KEY = 'acusticamente_payments';

class StorageService {
  private users: User[] = [];
  private students: Student[] = [];
  private plans: TeachingPlan[] = [];
  private paymentPlans: PaymentPlan[] = [];
  private appointments: Appointment[] = [];
  private payments: Payment[] = [];
  private settings: SystemSettings = {
    nomeEscola: 'Acusticamente - Escola de Música',
    nomeClinica: 'Acusticamente - Escola de Música',
    razaoSocial: 'Acusticamente Ensino Musical Ltda',
    nomeFantasia: 'Acusticamente Escola de Música',
    cnpj: '12.345.678/0001-90',
    inscricaoEstadual: '123.456.789.110',
    telefoneContato: '(51) 98189-8802',
    emailContato: 'contato@acusticamente.com.br',
    website: 'https://www.instagram.com/acusticamente.rs',
    cep: '94060-001',
    logradouro: 'Av. Dorival Cândido Luz de Oliveira',
    numero: '5564',
    complemento: '',
    bairro: 'Santa Fe',
    cidade: 'Gravataí',
    estado: 'RS',
    mongoUri: 'mongodb://localhost:27017',
    mongoDatabase: 'acusticamente_db',
    mongoStatus: 'simulado',
    notificacoesAtivas: true,
    nomeMenu: 'Acusticamente',
    logotipoCustomizado: '',
    msgAniversarioAluno: 'Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Que seu novo ciclo seja repleto de realizações, saúde, alegria e muita música! Parabéns pelo seu dia! 🎶✨',
    msgAniversarioProfessor: 'Olá, Prof. {nome}! 🎂🎉 Toda a equipe da Acusticamente te deseja um Feliz Aniversário! Muito obrigado por sua dedicação musical e talento. Que você tenha um ano repleto de sucesso e realizações! 🎶✨',
    msgAniversarioAdmin: 'Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Muito sucesso, liderança, saúde e grandes conquistas neste novo ciclo! Parabéns! 🎶✨'
  };

  constructor() {
    this.initData();
  }

  private initData(): void {
    // 1. Usuários
    const savedUsers = localStorage.getItem(USERS_KEY);
    if (savedUsers) {
      this.users = JSON.parse(savedUsers).map((u: any) => ({
        ...u,
        permissoes: {
          ...u.permissoes,
          planosPagamento: u.permissoes?.planosPagamento || (
            u.papel === 'admin'
              ? { acesso: true, cadastrar: true, alterar: true, excluir: true }
              : u.papel === 'atendente'
              ? { acesso: true, cadastrar: true, alterar: true, excluir: false }
              : { acesso: false, cadastrar: false, alterar: false, excluir: false }
          ),
          financeiro: u.permissoes?.financeiro || (
            u.papel === 'admin'
              ? { acesso: true, cadastrar: true, alterar: true, excluir: true }
              : u.papel === 'atendente'
              ? { acesso: true, cadastrar: true, alterar: true, excluir: false }
              : { acesso: false, cadastrar: false, alterar: false, excluir: false }
          ),
          relatorios: u.permissoes?.relatorios || {
            acesso: true,
            gerar: true
          }
        }
      }));
    } else {
      // Usuário administrador inicial obrigatório: login 1, senha 1
      this.users = [
        {
          id: 'user_1',
          nome: 'Administrador',
          login: '1',
          senha: '1',
          papel: 'admin',
          permissoes: {
            alunos: { acesso: true, cadastrar: true, alterar: true, excluir: true },
            agenda: { acesso: true, cadastrar: true, alterar: true, excluir: true },
            planos: { acesso: true, cadastrar: true, alterar: true, excluir: true },
            planosPagamento: { acesso: true, cadastrar: true, alterar: true, excluir: true },
            financeiro: { acesso: true, cadastrar: true, alterar: true, excluir: true },
            relatorios: { acesso: true, gerar: true },
            home: { acesso: true },
            auditoria: { acesso: true },
            configuracoes: { acesso: true, alterar: true }
          },
          isSistema: true,
          criadoEm: new Date().toISOString()
        },
        {
          id: 'user_2',
          nome: 'Prof. Carlos Eduardo',
          login: 'carlos',
          senha: '123',
          papel: 'professor',
          permissoes: {
            alunos: { acesso: true, cadastrar: true, alterar: true, excluir: false },
            agenda: { acesso: true, cadastrar: true, alterar: true, excluir: false },
            planos: { acesso: true, cadastrar: false, alterar: false, excluir: false },
            planosPagamento: { acesso: false, cadastrar: false, alterar: false, excluir: false },
            financeiro: { acesso: false, cadastrar: false, alterar: false, excluir: false },
            relatorios: { acesso: true, gerar: true },
            home: { acesso: true },
            auditoria: { acesso: false },
            configuracoes: { acesso: false, alterar: false }
          },
          isSistema: false,
          dataNascimento: '1992-09-24',
          criadoEm: new Date().toISOString()
        }
      ];
      localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
    }

    // 2. Planos de Ensino de Música com módulos e aulas aninhadas
    const savedPlans = localStorage.getItem(PLANS_KEY);
    if (savedPlans) {
      try {
        const parsed = JSON.parse(savedPlans);
        this.plans = parsed.map((p: any) => ({
          ...p,
          valor: typeof p.valor === 'number' ? p.valor : 280,
          modulos: (p.modulos || []).map((m: any, mIdx: number) => ({
            ...m,
            aulas: Array.isArray(m.aulas) && m.aulas.length > 0 ? m.aulas : [
              { id: `aul_${m.id || mIdx + 1}_1`, ordem: 1, titulo: `Aula 1: Fundamentos e Introdução` },
              { id: `aul_${m.id || mIdx + 1}_2`, ordem: 2, titulo: `Aula 2: Desenvolvimento Prático` },
              { id: `aul_${m.id || mIdx + 1}_3`, ordem: 3, titulo: `Aula 3: Exercícios de Fixação` },
              { id: `aul_${m.id || mIdx + 1}_4`, ordem: 4, titulo: `Aula 4: Revisão e Repertório` }
            ]
          }))
        }));
      } catch (e) {
        this.plans = [];
      }
    } else {
      this.plans = [
        {
          id: 'plano_1',
          nome: 'Percepção e Musicalização',
          descricao: 'Desenvolvimento do ouvido musical, ritmo e afinação básica.',
          criadoEm: new Date().toISOString(),
          modulos: [
            {
              id: 'mod_1_1',
              ordem: 1,
              titulo: 'Módulo 1: Consciência Sonora e Pulsação',
              aulas: [
                { id: 'aul_1_1_1', ordem: 1, titulo: 'Aula 1: Exploração Sonora e Alturas' },
                { id: 'aul_1_1_2', ordem: 2, titulo: 'Aula 2: Pulso, Tempo e Ritmo Corporal' },
                { id: 'aul_1_1_3', ordem: 3, titulo: 'Aula 3: Dinâmica e Intensidade' },
                { id: 'aul_1_1_4', ordem: 4, titulo: 'Aula 4: Jogos Musicais e Percepção' }
              ]
            },
            {
              id: 'mod_1_2',
              ordem: 2,
              titulo: 'Módulo 2: Discriminação de Timbres e Alturas',
              aulas: [
                { id: 'aul_1_2_1', ordem: 1, titulo: 'Aula 1: Família dos Instrumentos' },
                { id: 'aul_1_2_2', ordem: 2, titulo: 'Aula 2: Escuta Ativa e Melodia' },
                { id: 'aul_1_2_3', ordem: 3, titulo: 'Aula 3: Canto Coletivo e Afinação' }
              ]
            },
            {
              id: 'mod_1_3',
              ordem: 3,
              titulo: 'Módulo 3: Harmonia Básica e Canto',
              aulas: [
                { id: 'aul_1_3_1', ordem: 1, titulo: 'Aula 1: Estruturas Harmônicas Iniciais' },
                { id: 'aul_1_3_2', ordem: 2, titulo: 'Aula 2: Solfejo Rítmico' },
                { id: 'aul_1_3_3', ordem: 3, titulo: 'Aula 3: Apresentação Pedagógica' }
              ]
            }
          ]
        },
        {
          id: 'plano_2',
          nome: 'Violão e Harmonia Prática',
          descricao: 'Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.',
          criadoEm: new Date().toISOString(),
          modulos: [
            {
              id: 'mod_2_1',
              ordem: 1,
              titulo: 'Módulo 1: Primeiros Acordes e Levadas',
              aulas: [
                { id: 'aul_2_1_1', ordem: 1, titulo: 'Aula 1: Postura, Afinação e Mão Direita' },
                { id: 'aul_2_1_2', ordem: 2, titulo: 'Aula 2: Acordes Maiores Básicos (E, A, D)' },
                { id: 'aul_2_1_3', ordem: 3, titulo: 'Aula 3: Levada Pop/Rock e Troca de Acordes' },
                { id: 'aul_2_1_4', ordem: 4, titulo: 'Aula 4: Primeira Música Completa' }
              ]
            },
            {
              id: 'mod_2_2',
              ordem: 2,
              titulo: 'Módulo 2: Dedilhados e Transição de Acordes',
              aulas: [
                { id: 'aul_2_2_1', ordem: 1, titulo: 'Aula 1: Padrões de Dedilhado (P-I-M-A)' },
                { id: 'aul_2_2_2', ordem: 2, titulo: 'Aula 2: Acordes Menores e com Sétima' },
                { id: 'aul_2_2_3', ordem: 3, titulo: 'Aula 3: Repertório com Dedilhado' }
              ]
            },
            {
              id: 'mod_2_3',
              ordem: 3,
              titulo: 'Módulo 3: Escalas e Harmonia Prática',
              aulas: [
                { id: 'aul_2_3_1', ordem: 1, titulo: 'Aula 1: Escala Pentatônica no Braço' },
                { id: 'aul_2_3_2', ordem: 2, titulo: 'Aula 2: Pestanas sem Esforço Excesso' },
                { id: 'aul_2_3_3', ordem: 3, titulo: 'Aula 3: Aplicação de Solos e Improviso' }
              ]
            }
          ]
        },
        {
          id: 'plano_3',
          nome: 'Prática de Instrumento - Piano & Teclado',
          descricao: 'Estudo prático postural, leitura de partituras e repertório.',
          criadoEm: new Date().toISOString(),
          modulos: [
            {
              id: 'mod_3_1',
              ordem: 1,
              titulo: 'Módulo 1: Digitação e Postura',
              aulas: [
                { id: 'aul_3_1_1', ordem: 1, titulo: 'Aula 1: Postura ao Teclado e Numeração dos Dedos' },
                { id: 'aul_3_1_2', ordem: 2, titulo: 'Aula 2: Localização das Notas e Escala de Dó Maior' },
                { id: 'aul_3_1_3', ordem: 3, titulo: 'Aula 3: Exercícios de Hanon para Independência' }
              ]
            },
            {
              id: 'mod_3_2',
              ordem: 2,
              titulo: 'Módulo 2: Leitura Rítmica e Clave de Sol',
              aulas: [
                { id: 'aul_3_2_1', ordem: 1, titulo: 'Aula 1: Leitura na Clave de Sol e Fá Básica' },
                { id: 'aul_3_2_2', ordem: 2, titulo: 'Aula 2: Coordenação Bimanual' },
                { id: 'aul_3_2_3', ordem: 3, titulo: 'Aula 3: Pequenas Peças ao Piano' }
              ]
            },
            {
              id: 'mod_3_3',
              ordem: 3,
              titulo: 'Módulo 3: Repertório Clássico e Popular',
              aulas: [
                { id: 'aul_3_3_1', ordem: 1, titulo: 'Aula 1: Acompanhamento em Cifras e Acordes' },
                { id: 'aul_3_3_2', ordem: 2, titulo: 'Aula 2: Dinâmica e Pedal de Sustentação' },
                { id: 'aul_3_3_3', ordem: 3, titulo: 'Aula 3: Montagem de Repertório Escolhido' }
              ]
            }
          ]
        }
      ];
      localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans));
    }

    // 2.1. Planos de Pagamento (Cobranças, Modalidades, Ciclos e Desconto 20%)
    const savedPaymentPlans = localStorage.getItem(PAYMENT_PLANS_KEY);
    if (savedPaymentPlans) {
      try {
        this.paymentPlans = JSON.parse(savedPaymentPlans);
      } catch {
        this.paymentPlans = [];
      }
    }
    if (!this.paymentPlans || this.paymentPlans.length === 0) {
      this.paymentPlans = [
        {
          id: 'pp_ind_mensal',
          nome: 'Individual - Mensal',
          modalidade: 'individual',
          periodicidade: 'mensal',
          valorMensal: 280,
          descontoSegundaMatricula: 20,
          ativo: true,
          descricao: 'Aulas individuais semanais com renovação mensal.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'pp_ind_trimestral',
          nome: 'Individual - Trimestral',
          modalidade: 'individual',
          periodicidade: 'trimestral',
          valorMensal: 250,
          descontoSegundaMatricula: 20,
          ativo: true,
          descricao: 'Plano individual com fidelidade trimestral e valor promocional.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'pp_ind_semestral',
          nome: 'Individual - Semestral',
          modalidade: 'individual',
          periodicidade: 'semestral',
          valorMensal: 230,
          descontoSegundaMatricula: 20,
          ativo: true,
          descricao: 'Plano individual semestral com máxima economia.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'pp_turma_mensal',
          nome: 'Turma - Mensal',
          modalidade: 'turma',
          periodicidade: 'mensal',
          valorMensal: 190,
          descontoSegundaMatricula: 20,
          ativo: true,
          descricao: 'Aulas em pequenos grupos (turmas) com renovação mensal.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'pp_turma_trimestral',
          nome: 'Turma - Trimestral',
          modalidade: 'turma',
          periodicidade: 'trimestral',
          valorMensal: 170,
          descontoSegundaMatricula: 20,
          ativo: true,
          descricao: 'Aulas em turma com fidelidade trimestral.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'pp_turma_semestral',
          nome: 'Turma - Semestral',
          modalidade: 'turma',
          periodicidade: 'semestral',
          valorMensal: 150,
          descontoSegundaMatricula: 20,
          ativo: true,
          descricao: 'Aulas em turma com fidelidade semestral.',
          criadoEm: new Date().toISOString()
        }
      ];
      localStorage.setItem(PAYMENT_PLANS_KEY, JSON.stringify(this.paymentPlans));
    }

    // 3. Alunos
    const savedStudents = localStorage.getItem(STUDENTS_KEY);
    if (savedStudents) {
      this.students = JSON.parse(savedStudents).map((s: any) => ({
        ...s,
        saldoReposicoes: typeof s.saldoReposicoes === 'number' ? s.saldoReposicoes : 0,
        instrumentoPrincipal: s.instrumentoPrincipal || 'Violão',
        nivelMusical: s.nivelMusical || 'iniciante',
        valorMensalidade: typeof s.valorMensalidade === 'number' ? s.valorMensalidade : 280,
        diaVencimento: typeof s.diaVencimento === 'number' ? s.diaVencimento : 10
      }));
    } else {
      this.students = [];
      localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students));
    }

    // 4. Compromissos / Agenda das Aulas
    const savedAppointments = localStorage.getItem(APPOINTMENTS_KEY);
    if (savedAppointments) {
      this.appointments = JSON.parse(savedAppointments);
    } else {
      this.appointments = [];
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments));
    }

    // 5. Configurações
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
    }

    // 6. Pagamentos & Mensalidades (Financeiro)
    const savedPayments = localStorage.getItem(PAYMENTS_KEY);
    if (savedPayments) {
      this.payments = JSON.parse(savedPayments);
    } else {
      this.payments = [];
      localStorage.setItem(PAYMENTS_KEY, JSON.stringify(this.payments));
    }

    // Auto-sanitização para assegurar 100% de foco em Escola de Música
    if (this.settings.nomeClinica && this.settings.nomeClinica.includes('Terapêutico')) {
      this.settings.nomeEscola = 'Acusticamente - Escola de Música';
      this.settings.nomeClinica = 'Acusticamente - Escola de Música';
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    }
    if (!this.settings.nomeEscola) {
      this.settings.nomeEscola = this.settings.nomeClinica || 'Acusticamente - Escola de Música';
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    }
    this.plans.forEach(p => {
      if (p.nome.includes('Reabilitação')) {
        p.nome = 'Violão e Harmonia Prática';
        p.descricao = 'Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.';
        p.modulos = [
          { id: 'mod_2_1', ordem: 1, titulo: 'Módulo 1: Primeiros Acordes e Levadas', aulas: [] },
          { id: 'mod_2_2', ordem: 2, titulo: 'Módulo 2: Dedilhados e Transição de Acordes', aulas: [] },
          { id: 'mod_2_3', ordem: 3, titulo: 'Módulo 3: Escalas e Harmonia Prática', aulas: [] }
        ];
      }
    });
    localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans));
    this.students.forEach(s => {
      if (s.observacoes?.includes('implante')) {
        s.moduloAtual = 'Módulo 1: Primeiros Acordes e Levadas';
        s.observacoes = 'Iniciando estudos no violão popular.';
      }
    });
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students));
    this.appointments.forEach(a => {
      if (a.titulo?.includes('Auditivo')) {
        a.titulo = 'Aula Prática de Violão';
        a.observacoes = 'Praticar transição entre acordes maiores.';
      }
    });
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments));
  }

  public getTodayDateString(): string {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  public cloudStatus: 'connected' | 'fallback' | 'checking' = 'checking';

  public getCloudStatus(): 'connected' | 'fallback' | 'checking' {
    return this.cloudStatus;
  }

  // ===================== SINCRONIZAÇÃO EM NUVEM (MONGODB) =====================
  public async pushToCloud(collection: string, action: string, data: any): Promise<void> {
    try {
      if (typeof window === 'undefined') return;
      await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection, action, data })
      });
    } catch {
      // Falhas de conexão em segundo plano não bloqueiam o uso offline
    }
  }

  public async syncWithCloud(): Promise<boolean> {
    try {
      if (typeof window === 'undefined') return false;
      const res = await fetch('/api/sync');
      if (!res.ok) {
        this.cloudStatus = 'fallback';
        window.dispatchEvent(new CustomEvent('acusticamente:cloud-status-changed', { detail: 'fallback' }));
        return false;
      }
      const json = await res.json();
      if (!json.success || !json.data) {
        this.cloudStatus = 'fallback';
        window.dispatchEvent(new CustomEvent('acusticamente:cloud-status-changed', { detail: 'fallback' }));
        return false;
      }

      this.cloudStatus = 'connected';
      window.dispatchEvent(new CustomEvent('acusticamente:cloud-status-changed', { detail: 'connected' }));

      const cloud = json.data;

      if (Array.isArray(cloud.students)) {
        if (cloud.students.length > 0) {
          this.students = cloud.students;
          localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students));
        } else if (this.students.length > 0) {
          // PROTEÇÃO: se a nuvem estiver vazia mas existirem alunos locais,
          // não apaga os locais! Sobe os dados locais para a nuvem para restaurar.
          for (const s of this.students) {
            this.pushToCloud('students', 'upsert', s);
          }
        }
      }

      if (Array.isArray(cloud.payments)) {
        if (cloud.payments.length > 0) {
          this.payments = cloud.payments;
          localStorage.setItem(PAYMENTS_KEY, JSON.stringify(this.payments));
        } else if (this.payments.length > 0) {
          for (const p of this.payments) {
            this.pushToCloud('payments', 'upsert', p);
          }
        }
      }

      if (Array.isArray(cloud.appointments)) {
        if (cloud.appointments.length > 0) {
          this.appointments = cloud.appointments;
          localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments));
        } else if (this.appointments.length > 0) {
          for (const a of this.appointments) {
            this.pushToCloud('appointments', 'upsert', a);
          }
        }
      }

      if (Array.isArray(cloud.plans)) {
        if (cloud.plans.length > 0) {
          this.plans = cloud.plans;
          localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans));
        } else if (this.plans.length > 0) {
          for (const pl of this.plans) {
            this.pushToCloud('plans', 'upsert', pl);
          }
        }
      }

      if (Array.isArray(cloud.users) && cloud.users.length > 0) {
        this.users = cloud.users;
        localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
      }

      if (cloud.settings) {
        this.settings = { ...this.settings, ...cloud.settings };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
      }

      if (Array.isArray(cloud.audit)) {
        if (cloud.audit.length === 0) {
          auditService.clearLocalOnly();
        } else {
          auditService.setLogs(cloud.audit);
        }
      }

      // Notifica o frontend para recarregar com os dados da nuvem
      window.dispatchEvent(new CustomEvent('acusticamente:data-synced'));
      return true;
    } catch {
      this.cloudStatus = 'fallback';
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('acusticamente:cloud-status-changed', { detail: 'fallback' }));
      }
      return false;
    }
  }

  // Ação para o usuário zerar todos os cadastros de teste e entregar o sistema limpo ao cliente
  public async resetCleanDatabase(currentUserName: string): Promise<void> {
    this.students = [];
    this.payments = [];
    this.appointments = [];
    this.plans = [];

    localStorage.setItem(STUDENTS_KEY, JSON.stringify([]));
    localStorage.setItem(PAYMENTS_KEY, JSON.stringify([]));
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify([]));
    localStorage.setItem(PLANS_KEY, JSON.stringify([]));

    await this.pushToCloud('all', 'reset_clean', {});
    await auditService.clearLogs();

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('acusticamente:data-synced'));
    }
  }

  // Salvamentos internos com replicação na nuvem (protegidos contra envio vazio)
  private saveUsers() { 
    localStorage.setItem(USERS_KEY, JSON.stringify(this.users)); 
    if (this.users.length > 0) {
      this.pushToCloud('users', 'replace_all', this.users);
    }
  }
  private saveStudents() { 
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students)); 
    // SEGURANÇA MÁXIMA: NUNCA envia replace_all se a lista for vazia!
    if (this.students.length > 0) {
      this.pushToCloud('students', 'replace_all', this.students);
    }
  }
  private savePlans() { 
    localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans)); 
    if (this.plans.length > 0) {
      this.pushToCloud('plans', 'replace_all', this.plans);
    }
  }
  private saveAppointments() { 
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments)); 
    if (this.appointments.length > 0) {
      this.pushToCloud('appointments', 'replace_all', this.appointments);
    }
  }
  private savePayments() { 
    localStorage.setItem(PAYMENTS_KEY, JSON.stringify(this.payments)); 
    if (this.payments.length > 0) {
      this.pushToCloud('payments', 'replace_all', this.payments);
    }
  }
  private savePaymentPlans() {
    localStorage.setItem(PAYMENT_PLANS_KEY, JSON.stringify(this.paymentPlans));
    if (this.paymentPlans.length > 0) {
      this.pushToCloud('payment_plans', 'replace_all', this.paymentPlans);
    }
  }
  private saveSettings() { 
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); 
    this.pushToCloud('settings', 'upsert', this.settings);
  }

  // ===================== USUÁRIOS =====================
  public getUsers(): User[] {
    return [...this.users];
  }

  public getUserById(id: string): User | undefined {
    return this.users.find(u => u.id === id);
  }

  public addUser(user: Omit<User, 'id' | 'isSistema' | 'criadoEm'>, currentUserName: string): User {
    const newUser: User = {
      ...user,
      id: 'user_' + Date.now(),
      isSistema: false,
      criadoEm: new Date().toISOString()
    };
    this.users.push(newUser);
    this.saveUsers();

    auditService.log({
      tela: 'Cadastro de Usuários',
      acao: 'Criação de Usuário',
      usuarioNome: currentUserName,
      detalhes: `Criado usuário "${newUser.nome}" (login: ${newUser.login}, papel: ${newUser.papel})`
    });

    return newUser;
  }

  public updateUser(id: string, updates: Partial<User>, currentUserName: string): User {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new Error('Usuário não encontrado.');

    const oldUser = this.users[index];
    const isSistema = oldUser.isSistema;

    // Se for o usuário do sistema (login 1), mantém isSistema como true
    this.users[index] = {
      ...oldUser,
      ...updates,
      isSistema,
      atualizadoEm: new Date().toISOString()
    };
    this.saveUsers();

    auditService.log({
      tela: 'Cadastro de Usuários',
      acao: 'Atualização de Usuário',
      usuarioNome: currentUserName,
      detalhes: `Usuário "${oldUser.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`
    });

    return this.users[index];
  }

  public deleteUser(id: string, currentUserName: string): void {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new Error('Usuário não encontrado.');

    if (user.isSistema) {
      throw new Error('O usuário administrador do sistema (login 1) não pode ser excluído.');
    }

    this.users = this.users.filter(u => u.id !== id);
    this.saveUsers();

    auditService.log({
      tela: 'Cadastro de Usuários',
      acao: 'Exclusão de Usuário',
      usuarioNome: currentUserName,
      detalhes: `Usuário "${user.nome}" (login: ${user.login}) foi removido.`
    });
  }

  // ===================== ALUNOS =====================
  public getStudents(): Student[] {
    return [...this.students];
  }

  public getStudentById(id: string): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  public addStudent(data: Omit<Student, 'id' | 'criadoEm'>, currentUserName: string): Student {
    const newStudent: Student = {
      ...data,
      id: 'aluno_' + Date.now(),
      // Créditos de remarcação iniciam obrigatoriamente zerados (não permite inserção manual)
      saldoReposicoes: 0,
      criadoEm: new Date().toISOString()
    };
    this.students.push(newStudent);
    this.saveStudents();
    this.pushToCloud('students', 'upsert', newStudent);

    auditService.log({
      tela: 'Cadastro de Alunos',
      acao: 'Criação de Aluno',
      usuarioNome: currentUserName,
      detalhes: `Aluno "${newStudent.nome}" cadastrado com status ${newStudent.status}. Saldo de remarcação inicial: 0.`
    });

    return newStudent;
  }

  public updateStudent(id: string, updates: Partial<Student>, currentUserName: string): Student {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Aluno não encontrado.');

    const oldStudent = this.students[index];
    // Garante que o saldo de reposições não seja alterado manualmente por edição cadastral
    const safeUpdates = { ...updates };
    delete safeUpdates.saldoReposicoes;

    this.students[index] = {
      ...oldStudent,
      ...safeUpdates,
      saldoReposicoes: oldStudent.saldoReposicoes ?? 0
    };
    this.saveStudents();
    this.pushToCloud('students', 'upsert', this.students[index]);

    auditService.log({
      tela: 'Cadastro de Alunos',
      acao: 'Atualização de Aluno',
      usuarioNome: currentUserName,
      detalhes: `Aluno "${oldStudent.nome}" atualizado.`
    });

    return this.students[index];
  }

  public deleteStudent(id: string, currentUserName: string): void {
    const student = this.students.find(s => s.id === id);
    if (!student) return;

    this.students = this.students.filter(s => s.id !== id);
    this.saveStudents();
    this.pushToCloud('students', 'delete', { id });

    auditService.log({
      tela: 'Cadastro de Alunos',
      acao: 'Exclusão de Aluno',
      usuarioNome: currentUserName,
      detalhes: `Aluno "${student.nome}" foi removido do sistema.`
    });
  }

  // ===================== PLANOS DE ENSINO =====================
  public getPlans(): TeachingPlan[] {
    return [...this.plans];
  }

  public addPlan(data: Omit<TeachingPlan, 'id' | 'criadoEm'>, currentUserName: string): TeachingPlan {
    const newPlan: TeachingPlan = {
      ...data,
      id: 'plano_' + Date.now(),
      criadoEm: new Date().toISOString()
    };
    this.plans.push(newPlan);
    this.savePlans();

    auditService.log({
      tela: 'Plano de Ensino',
      acao: 'Criação de Plano',
      usuarioNome: currentUserName,
      detalhes: `Plano "${newPlan.nome}" criado com ${newPlan.modulos.length} módulos.`
    });

    return newPlan;
  }

  public updatePlan(id: string, updates: Partial<TeachingPlan>, currentUserName: string): TeachingPlan {
    const index = this.plans.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Plano não encontrado.');

    const oldPlan = this.plans[index];
    this.plans[index] = { ...oldPlan, ...updates };
    this.savePlans();

    auditService.log({
      tela: 'Plano de Ensino',
      acao: 'Atualização de Plano',
      usuarioNome: currentUserName,
      detalhes: `Plano "${oldPlan.nome}" atualizado.`
    });

    return this.plans[index];
  }

  public deletePlan(id: string, currentUserName: string): void {
    const plan = this.plans.find(p => p.id === id);
    if (!plan) return;

    this.plans = this.plans.filter(p => p.id !== id);
    this.savePlans();

    auditService.log({
      tela: 'Plano de Ensino',
      acao: 'Exclusão de Plano',
      usuarioNome: currentUserName,
      detalhes: `Plano "${plan.nome}" foi excluído.`
    });
  }

  // ===================== PLANOS DE PAGAMENTO =====================
  public getPaymentPlans(): PaymentPlan[] {
    return [...this.paymentPlans];
  }

  public getPaymentPlanById(id: string): PaymentPlan | undefined {
    return this.paymentPlans.find(p => p.id === id);
  }

  public addPaymentPlan(data: Omit<PaymentPlan, 'id' | 'criadoEm'>, currentUserName: string): PaymentPlan {
    const newPlan: PaymentPlan = {
      ...data,
      id: 'pp_' + Date.now(),
      criadoEm: new Date().toISOString()
    };
    this.paymentPlans.push(newPlan);
    this.savePaymentPlans();

    auditService.log({
      tela: 'Planos de Pagamento',
      acao: 'Criação de Plano de Pagamento',
      usuarioNome: currentUserName,
      detalhes: `Plano "${newPlan.nome}" criado (Modalidade: ${newPlan.modalidade}, Ciclo: ${newPlan.periodicidade}, R$ ${newPlan.valorMensal}).`
    });

    return newPlan;
  }

  public updatePaymentPlan(id: string, updates: Partial<PaymentPlan>, currentUserName: string): PaymentPlan {
    const index = this.paymentPlans.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Plano de pagamento não encontrado.');

    const oldPlan = this.paymentPlans[index];
    this.paymentPlans[index] = { ...oldPlan, ...updates };
    this.savePaymentPlans();

    auditService.log({
      tela: 'Planos de Pagamento',
      acao: 'Atualização de Plano de Pagamento',
      usuarioNome: currentUserName,
      detalhes: `Plano de pagamento "${oldPlan.nome}" atualizado.`
    });

    return this.paymentPlans[index];
  }

  public deletePaymentPlan(id: string, currentUserName: string): void {
    const plan = this.paymentPlans.find(p => p.id === id);
    if (!plan) return;

    this.paymentPlans = this.paymentPlans.filter(p => p.id !== id);
    this.savePaymentPlans();

    auditService.log({
      tela: 'Planos de Pagamento',
      acao: 'Exclusão de Plano de Pagamento',
      usuarioNome: currentUserName,
      detalhes: `Plano de pagamento "${plan.nome}" foi excluído.`
    });
  }

  // Cálculo automático da mensalidade com base no plano de pagamento e desconto de 2ª matrícula (20%)
  public calcularMensalidadeAluno(planoPagamentoId?: string, isSegundaMatricula?: boolean): {
    valorBase: number;
    descontoPercentual: number;
    valorDesconto: number;
    valorFinal: number;
  } {
    const plan = this.paymentPlans.find(p => p.id === planoPagamentoId);
    const valorBase = plan ? plan.valorMensal : 280;
    const descontoPercentual = isSegundaMatricula ? (plan?.descontoSegundaMatricula ?? 20) : 0;
    const valorDesconto = descontoPercentual > 0 ? (valorBase * descontoPercentual) / 100 : 0;
    const valorFinal = Math.max(0, valorBase - valorDesconto);

    return {
      valorBase,
      descontoPercentual,
      valorDesconto,
      valorFinal
    };
  }

  // ===================== AGENDA / COMPROMISSOS =====================
  public getAppointments(): Appointment[] {
    return [...this.appointments];
  }

  public addAppointment(data: Omit<Appointment, 'id' | 'criadoEm'>, currentUserName: string): Appointment {
    const newApp: Appointment = {
      ...data,
      id: 'app_' + Date.now(),
      criadoEm: new Date().toISOString()
    };
    this.appointments.push(newApp);
    this.saveAppointments();

    const student = this.students.find(s => s.id === newApp.alunoId);
    auditService.log({
      tela: 'Agenda',
      acao: 'Novo Compromisso',
      usuarioNome: currentUserName,
      detalhes: `Agendado compromisso "${newApp.titulo}" para aluno ${student?.nome || 'N/A'} em ${newApp.data} às ${newApp.horaInicio}.`
    });

    return newApp;
  }

  public updateAppointment(id: string, updates: Partial<Appointment>, currentUserName: string): Appointment {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index === -1) throw new Error('Compromisso não encontrado.');

    const oldApp = this.appointments[index];
    const oldStatus = oldApp.status;
    const newStatus = updates.status !== undefined ? updates.status : oldApp.status;

    this.appointments[index] = { ...oldApp, ...updates };
    this.saveAppointments();

    const student = this.students.find(s => s.id === (updates.alunoId || oldApp.alunoId));

    // Gestão 100% AUTOMÁTICA dos créditos de remarcação através de eventos de status
    if (student) {
      // 1. Mudança para Falta Justificada: ganha +1 crédito automático
      if (oldStatus !== 'falta_justificada' && newStatus === 'falta_justificada') {
        student.saldoReposicoes = (student.saldoReposicoes || 0) + 1;
        this.saveStudents();
        auditService.log({
          tela: 'Agenda',
          acao: 'Crédito de Remarcação Automático (+1)',
          usuarioNome: currentUserName,
          detalhes: `Status da aula "${oldApp.titulo}" alterado para Falta Justificada. +1 crédito gerado para "${student.nome}". Saldo atual: ${student.saldoReposicoes}.`
        });
      }
      // 2. Desfez Falta Justificada para outro status: estorna -1 crédito automático
      else if (oldStatus === 'falta_justificada' && newStatus !== 'falta_justificada') {
        student.saldoReposicoes = Math.max(0, (student.saldoReposicoes || 0) - 1);
        this.saveStudents();
        auditService.log({
          tela: 'Agenda',
          acao: 'Estorno de Crédito de Remarcação (-1)',
          usuarioNome: currentUserName,
          detalhes: `Falta justificada na aula "${oldApp.titulo}" alterada para "${newStatus}". 1 crédito estornado de "${student.nome}". Saldo atual: ${student.saldoReposicoes}.`
        });
      }

      // 3. Aula de Reposição cancelada: devolve crédito (+1) ao aluno
      const isReposicao = (updates.tipoAula || oldApp.tipoAula) === 'reposicao';
      if (isReposicao) {
        if (oldStatus !== 'cancelado' && newStatus === 'cancelado') {
          student.saldoReposicoes = (student.saldoReposicoes || 0) + 1;
          this.saveStudents();
          auditService.log({
            tela: 'Agenda',
            acao: 'Estorno por Cancelamento de Reposição (+1)',
            usuarioNome: currentUserName,
            detalhes: `Reposição cancelada para "${student.nome}". 1 crédito devolvido ao saldo. Saldo atual: ${student.saldoReposicoes}.`
          });
        } else if (oldStatus === 'cancelado' && newStatus === 'agendado') {
          student.saldoReposicoes = Math.max(0, (student.saldoReposicoes || 0) - 1);
          this.saveStudents();
          auditService.log({
            tela: 'Agenda',
            acao: 'Consumo por Reativação de Reposição (-1)',
            usuarioNome: currentUserName,
            detalhes: `Reposição reativada para "${student.nome}". 1 crédito consumido. Saldo atual: ${student.saldoReposicoes}.`
          });
        }
      }
    }

    auditService.log({
      tela: 'Agenda',
      acao: 'Atualização de Compromisso',
      usuarioNome: currentUserName,
      detalhes: `Compromisso "${oldApp.titulo}" atualizado (status: ${this.appointments[index].status}).`
    });

    return this.appointments[index];
  }

  public deleteAppointment(id: string, currentUserName: string): void {
    const app = this.appointments.find(a => a.id === id);
    if (!app) return;

    // Se for aula de reposição que não foi concluída, estorna automaticamente +1 crédito de volta ao aluno
    if (app.tipoAula === 'reposicao' && app.status !== 'concluido') {
      const student = this.students.find(s => s.id === app.alunoId);
      if (student) {
        student.saldoReposicoes = (student.saldoReposicoes || 0) + 1;
        this.saveStudents();
        auditService.log({
          tela: 'Agenda',
          acao: 'Estorno Automático de Crédito (+1)',
          usuarioNome: currentUserName,
          detalhes: `Aula de reposição excluída para "${student.nome}". 1 crédito estornado automaticamente ao saldo. Saldo atual: ${student.saldoReposicoes}.`
        });
      }
    }

    this.appointments = this.appointments.filter(a => a.id !== id);
    this.saveAppointments();

    auditService.log({
      tela: 'Agenda',
      acao: 'Cancelamento/Exclusão de Compromisso',
      usuarioNome: currentUserName,
      detalhes: `Compromisso "${app.titulo}" removido da agenda.`
    });
  }

  // Presença e Conclusão de Aula
  public marcarPresenca(appointmentId: string, currentUserName: string): Appointment {
    const app = this.updateAppointment(appointmentId, { status: 'concluido' }, currentUserName);
    const student = this.students.find(s => s.id === app.alunoId);
    auditService.log({
      tela: 'Agenda',
      acao: 'Presença Confirmada',
      usuarioNome: currentUserName,
      detalhes: `Presença confirmada para o aluno "${student?.nome || 'N/A'}" na aula "${app.titulo}".`
    });
    return app;
  }

  // Registro de Falta com geração automática de saldo para Falta Justificada
  public registrarFalta(
    appointmentId: string,
    justificada: boolean,
    justificativa: string | undefined,
    currentUserName: string
  ): { appointment: Appointment; saldoReposicoes: number } {
    const status = justificada ? 'falta_justificada' : 'falta_injustificada';
    // updateAppointment já cuida do acréscimo automático no saldoReposicoes do aluno
    const app = this.updateAppointment(
      appointmentId,
      { status, justificativaFalta: justificativa?.trim() || undefined },
      currentUserName
    );

    const student = this.students.find(s => s.id === app.alunoId);
    const novoSaldo = student?.saldoReposicoes || 0;

    return { appointment: app, saldoReposicoes: novoSaldo };
  }

  // Agendamento de Reposição (validando saldo automático do aluno)
  public agendarReposicao(
    data: Omit<Appointment, 'id' | 'criadoEm' | 'tipoAula'>,
    aulaOriginalId: string | undefined,
    currentUserName: string
  ): Appointment {
    const student = this.students.find(s => s.id === data.alunoId);
    if (!student || typeof student.saldoReposicoes !== 'number' || student.saldoReposicoes <= 0) {
      throw new Error(`O aluno "${student?.nome || 'selecionado'}" não possui créditos de remarcação disponíveis para agendar reposição.`);
    }

    const newApp = this.addAppointment(
      {
        ...data,
        tipoAula: 'reposicao',
        aulaOriginalId,
        status: 'agendado'
      },
      currentUserName
    );

    // Se houver aula original, vincula a referência da reposição
    if (aulaOriginalId) {
      const origIndex = this.appointments.findIndex(a => a.id === aulaOriginalId);
      if (origIndex !== -1) {
        this.appointments[origIndex].aulaReposicaoId = newApp.id;
        this.saveAppointments();
      }
    }

    // Abate 1 crédito de reposição automaticamente
    student.saldoReposicoes -= 1;
    this.saveStudents();
    auditService.log({
      tela: 'Agenda',
      acao: 'Aula de Reposição Agendada (-1 Crédito)',
      usuarioNome: currentUserName,
      detalhes: `Reposição agendada para "${student.nome}". 1 crédito abatido automaticamente. Saldo restante: ${student.saldoReposicoes}.`
    });

    return newApp;
  }

  // Geração Automática de Aulas Regulares a partir do Plano Pedagógico
  public generateAppointmentsFromPlan(
    studentId: string,
    planoId: string,
    dataInicio: string,
    horaInicio: string,
    horaFim: string,
    currentUserName: string
  ): Appointment[] {
    const student = this.students.find(s => s.id === studentId);
    const plan = this.plans.find(p => p.id === planoId);
    if (!student || !plan) return [];

    const allLessons: { moduloId: string; moduloTitulo: string; aulaTitulo: string; aulaId: string }[] = [];
    (plan.modulos || []).forEach(mod => {
      (mod.aulas || []).forEach(aul => {
        allLessons.push({
          moduloId: mod.id,
          moduloTitulo: mod.titulo,
          aulaTitulo: aul.titulo,
          aulaId: aul.id
        });
      });
    });

    if (allLessons.length === 0) return [];

    const created: Appointment[] = [];
    let currentDate = new Date(dataInicio + 'T12:00:00');

    allLessons.forEach((item, idx) => {
      const pad = (n: number) => n.toString().padStart(2, '0');
      const dateStr = `${currentDate.getFullYear()}-${pad(currentDate.getMonth() + 1)}-${pad(currentDate.getDate())}`;

      const appointment: Appointment = {
        id: `app_${Date.now()}_${idx}_${Math.random().toString(36).substr(2, 4)}`,
        alunoId: student.id,
        planoId: plan.id,
        moduloId: item.moduloId,
        aulaId: item.aulaId,
        titulo: `${item.aulaTitulo}`,
        data: dateStr,
        horaInicio,
        horaFim,
        status: 'agendado',
        tipoAula: 'regular',
        observacoes: `${plan.nome} • ${item.moduloTitulo}`,
        criadoEm: new Date().toISOString()
      };

      this.appointments.push(appointment);
      created.push(appointment);

      // Próxima aula na semana seguinte (+7 dias)
      currentDate.setDate(currentDate.getDate() + 7);
    });

    this.saveAppointments();

    auditService.log({
      tela: 'Agenda',
      acao: 'Geração de Aulas por Plano',
      usuarioNome: currentUserName,
      detalhes: `Geradas ${created.length} aulas regulares para "${student.nome}" com base no plano "${plan.nome}".`
    });

    return created;
  }

  // Histórico de Aulas de um Aluno
  public getStudentAppointments(studentId: string): Appointment[] {
    return this.appointments
      .filter(a => a.alunoId === studentId)
      .sort((a, b) => {
        const dateA = `${a.data}T${a.horaInicio}`;
        const dateB = `${b.data}T${b.horaInicio}`;
        return dateB.localeCompare(dateA);
      });
  }

  // Exclusão em lote de todos os agendamentos de um aluno
  public deleteStudentAppointments(studentId: string, currentUserName: string): number {
    const student = this.students.find(s => s.id === studentId);
    const studentName = student ? student.nome : 'Aluno';
    const toDelete = this.appointments.filter(a => a.alunoId === studentId);
    const count = toDelete.length;

    this.appointments = this.appointments.filter(a => a.alunoId !== studentId);
    this.saveAppointments();
    this.pushToCloud('appointments', 'delete_by_student', { studentId });

    auditService.log({
      tela: 'Cadastro de Alunos',
      acao: 'Exclusão de Agendamentos',
      usuarioNome: currentUserName,
      detalhes: count > 0
        ? `Todos os ${count} agendamento(s) do aluno "${studentName}" foram excluídos do sistema.`
        : `Tentativa de exclusão de agendamentos para o aluno "${studentName}" (nenhum agendamento ativo encontrado).`
    });

    return count;
  }

  // ===================== FINANCEIRO / PAGAMENTOS =====================
  public getPayments(): Payment[] {
    const todayStr = this.getTodayDateString();
    let changed = false;

    // Atualiza dinamicamente status entre pendente e atrasado conforme vencimento atual
    this.payments.forEach(p => {
      if (p.status !== 'pago') {
        const correctStatus: PaymentStatus = p.dataVencimento < todayStr ? 'atrasado' : 'pendente';
        if (p.status !== correctStatus) {
          p.status = correctStatus;
          changed = true;
        }
      }
    });

    if (changed) {
      this.savePayments();
    }

    return [...this.payments].sort((a, b) => b.dataVencimento.localeCompare(a.dataVencimento));
  }

  public getStudentPayments(studentId: string): Payment[] {
    return this.getPayments().filter(p => p.alunoId === studentId);
  }

  // Verifica se o aluno está ativo e possui pendências financeiras atrasadas
  public isStudentOverdue(studentId: string): boolean {
    const todayStr = this.getTodayDateString();
    return this.payments.some(p => 
      p.alunoId === studentId && 
      (p.status === 'atrasado' || (p.status === 'pendente' && p.dataVencimento < todayStr))
    );
  }

  public addPayment(data: Omit<Payment, 'id' | 'criadoEm'>, currentUserName: string): Payment {
    const todayStr = this.getTodayDateString();
    let calculatedStatus = data.status;
    if (calculatedStatus === 'pendente' && data.dataVencimento < todayStr) {
      calculatedStatus = 'atrasado';
    }

    const newPayment: Payment = {
      ...data,
      status: calculatedStatus,
      id: `pag_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      criadoEm: new Date().toISOString()
    };

    this.payments.push(newPayment);
    this.savePayments();

    const student = this.students.find(s => s.id === newPayment.alunoId);
    auditService.log({
      tela: 'Financeiro',
      acao: 'Cadastro de Pagamento/Mensalidade',
      usuarioNome: currentUserName,
      detalhes: `Lançamento "${newPayment.descricao}" (R$ ${newPayment.valor.toFixed(2)}) cadastrado para o aluno "${student?.nome || 'N/A'}" com vencimento em ${newPayment.dataVencimento}.`
    });

    return newPayment;
  }

  public darBaixaPayment(
    paymentId: string,
    dataPagamento: string,
    formaPagamento: PaymentMethod,
    currentUserName: string,
    observacoes?: string
  ): Payment {
    const index = this.payments.findIndex(p => p.id === paymentId);
    if (index === -1) throw new Error('Lançamento financeiro não encontrado');

    const payment = this.payments[index];
    const prevStatus = payment.status;
    payment.status = 'pago';
    payment.dataPagamento = dataPagamento;
    payment.formaPagamento = formaPagamento;
    if (observacoes !== undefined) {
      payment.observacoes = observacoes.trim() ? observacoes.trim() : payment.observacoes;
    }

    this.savePayments();

    const student = this.students.find(s => s.id === payment.alunoId);
    auditService.log({
      tela: 'Financeiro',
      acao: 'Baixa de Mensalidade',
      usuarioNome: currentUserName,
      detalhes: `Baixa efetuada para "${payment.descricao}" de "${student?.nome || 'N/A'}". Valor R$ ${payment.valor.toFixed(2)} recebido via ${formaPagamento.toUpperCase()} em ${dataPagamento} (Status anterior: ${prevStatus}).`
    });

    return payment;
  }

  public updatePayment(id: string, updates: Partial<Payment>, currentUserName: string): Payment {
    const index = this.payments.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Lançamento financeiro não encontrado');

    const todayStr = this.getTodayDateString();
    let updatedStatus = updates.status || this.payments[index].status;
    const vencimento = updates.dataVencimento || this.payments[index].dataVencimento;

    // Se o pagamento não estiver pago, recalcula dinamicamente com base no vencimento
    if (updatedStatus !== 'pago') {
      updatedStatus = vencimento < todayStr ? 'atrasado' : 'pendente';
    }

    this.payments[index] = {
      ...this.payments[index],
      ...updates,
      status: updatedStatus
    };

    this.savePayments();

    const p = this.payments[index];
    const student = this.students.find(s => s.id === p.alunoId);
    auditService.log({
      tela: 'Financeiro',
      acao: 'Alteração de Lançamento',
      usuarioNome: currentUserName,
      detalhes: `Lançamento financeiro "${p.descricao}" do aluno "${student?.nome || 'N/A'}" atualizado.`
    });

    return this.payments[index];
  }

  public deletePayment(id: string, currentUserName: string): void {
    const p = this.payments.find(item => item.id === id);
    if (!p) return;

    this.payments = this.payments.filter(item => item.id !== id);
    this.savePayments();

    const student = this.students.find(s => s.id === p.alunoId);
    auditService.log({
      tela: 'Financeiro',
      acao: 'Exclusão de Lançamento',
      usuarioNome: currentUserName,
      detalhes: `Lançamento "${p.descricao}" no valor de R$ ${p.valor.toFixed(2)} do aluno "${student?.nome || 'N/A'}" foi excluído.`
    });
  }

  // Gera mensalidades em lote para todos os alunos ativos que ainda não têm lançamento no mês
  public gerarMensalidadesMes(ano: number, mes: number, currentUserName: string): { criadas: number; puladas: number } {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const mesReferencia = `${ano}-${pad(mes)}`;
    const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const nomeMes = nomesMeses[mes - 1] || mesReferencia;

    const alunosAtivos = this.students.filter(s => s.status === 'ativo');
    let criadas = 0;
    let puladas = 0;

    alunosAtivos.forEach(student => {
      // Verifica se já existe mensalidade para este aluno com o mesmo mesReferencia ou data de vencimento correspondente
      const jaExiste = this.payments.some(p => 
        p.alunoId === student.id && (p.mesReferencia === mesReferencia || p.dataVencimento.startsWith(mesReferencia))
      );

      if (jaExiste) {
        puladas++;
        return;
      }

      const diaVenc = student.diaVencimento || 10;
      // Trata limite de dias do mês (ex: dia 31 em mês de 30 dias)
      const ultimoDiaMes = new Date(ano, mes, 0).getDate();
      const diaAjustado = Math.min(diaVenc, ultimoDiaMes);
      const dataVencimento = `${ano}-${pad(mes)}-${pad(diaAjustado)}`;
      const valor = typeof student.valorMensalidade === 'number' && student.valorMensalidade > 0 ? student.valorMensalidade : 280;

      this.addPayment({
        alunoId: student.id,
        descricao: `Mensalidade ${nomeMes}/${ano}`,
        mesReferencia,
        valor,
        dataVencimento,
        status: 'pendente',
        observacoes: `Gerado automaticamente para o plano ${student.moduloAtual || student.instrumentoPrincipal || 'Música'}`
      }, currentUserName);

      criadas++;
    });

    auditService.log({
      tela: 'Financeiro',
      acao: 'Geração de Mensalidades em Lote',
      usuarioNome: currentUserName,
      detalhes: `Geração em lote para ${nomeMes}/${ano}: ${criadas} mensalidade(s) criada(s) e ${puladas} já existente(s) pulada(s).`
    });

    return { criadas, puladas };
  }

  // ===================== CONFIGURAÇÕES =====================
  public getSettings(): SystemSettings {
    return { ...this.settings };
  }

  public updateSettings(updates: Partial<SystemSettings>, currentUserName: string): SystemSettings {
    this.settings = { ...this.settings, ...updates };
    this.saveSettings();

    // Notifica toda a aplicação sobre atualização visual (menu, logotipos, etc.)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app-settings-updated', { detail: this.getSettings() }));
    }

    auditService.log({
      tela: 'Configurações',
      acao: 'Alteração de Configurações',
      usuarioNome: currentUserName,
      detalhes: `Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu || 'Padrão'}, Logo: ${this.settings.logotipoCustomizado ? 'Personalizado' : 'Padrão'}).`
    });

    return this.settings;
  }
}

export const storageService = new StorageService();
