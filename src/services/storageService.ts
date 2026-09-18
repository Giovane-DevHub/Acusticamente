import { User, Student, TeachingPlan, Appointment, SystemSettings, Payment, PaymentStatus, PaymentMethod } from '../types';
import { auditService } from './auditService';

const USERS_KEY = 'acusticamente_users';
const STUDENTS_KEY = 'acusticamente_students';
const PLANS_KEY = 'acusticamente_plans';
const APPOINTMENTS_KEY = 'acusticamente_appointments';
const SETTINGS_KEY = 'acusticamente_settings';
const PAYMENTS_KEY = 'acusticamente_payments';

class StorageService {
  private users: User[] = [];
  private students: Student[] = [];
  private plans: TeachingPlan[] = [];
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
    logotipoCustomizado: ''
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
            financeiro: { acesso: false, cadastrar: false, alterar: false, excluir: false },
            relatorios: { acesso: true, gerar: true },
            home: { acesso: true },
            auditoria: { acesso: false },
            configuracoes: { acesso: false, alterar: false }
          },
          isSistema: false,
          criadoEm: new Date().toISOString()
        }
      ];
      this.saveUsers();
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
          valor: 260,
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
          valor: 280,
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
          valor: 320,
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
      this.savePlans();
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
      this.saveStudents();
    }

    // 4. Compromissos / Agenda das Aulas
    const savedAppointments = localStorage.getItem(APPOINTMENTS_KEY);
    if (savedAppointments) {
      this.appointments = JSON.parse(savedAppointments);
    } else {
      this.appointments = [];
      this.saveAppointments();
    }

    // 5. Configurações
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }

    // 6. Pagamentos & Mensalidades (Financeiro)
    const savedPayments = localStorage.getItem(PAYMENTS_KEY);
    if (savedPayments) {
      this.payments = JSON.parse(savedPayments);
    } else {
      this.payments = [];
      this.savePayments();
    }

    // Auto-sanitização para assegurar 100% de foco em Escola de Música
    if (this.settings.nomeClinica && this.settings.nomeClinica.includes('Terapêutico')) {
      this.settings.nomeEscola = 'Acusticamente - Escola de Música';
      this.settings.nomeClinica = 'Acusticamente - Escola de Música';
      this.saveSettings();
    }
    if (!this.settings.nomeEscola) {
      this.settings.nomeEscola = this.settings.nomeClinica || 'Acusticamente - Escola de Música';
      this.saveSettings();
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
    this.savePlans();
    this.students.forEach(s => {
      if (s.observacoes?.includes('implante')) {
        s.moduloAtual = 'Módulo 1: Primeiros Acordes e Levadas';
        s.observacoes = 'Iniciando estudos no violão popular.';
      }
    });
    this.saveStudents();
    this.appointments.forEach(a => {
      if (a.titulo?.includes('Auditivo')) {
        a.titulo = 'Aula Prática de Violão';
        a.observacoes = 'Praticar transição entre acordes maiores.';
      }
    });
    this.saveAppointments();
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
        this.students = cloud.students;
        localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students));
      }

      if (Array.isArray(cloud.payments)) {
        this.payments = cloud.payments;
        localStorage.setItem(PAYMENTS_KEY, JSON.stringify(this.payments));
      }

      if (Array.isArray(cloud.appointments)) {
        this.appointments = cloud.appointments;
        localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments));
      }

      if (Array.isArray(cloud.plans)) {
        this.plans = cloud.plans;
        localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans));
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

  // Salvamentos internos com replicação na nuvem
  private saveUsers() { 
    localStorage.setItem(USERS_KEY, JSON.stringify(this.users)); 
    this.pushToCloud('users', 'replace_all', this.users);
  }
  private saveStudents() { 
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students)); 
    this.pushToCloud('students', 'replace_all', this.students);
  }
  private savePlans() { 
    localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans)); 
    this.pushToCloud('plans', 'replace_all', this.plans);
  }
  private saveAppointments() { 
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments)); 
    this.pushToCloud('appointments', 'replace_all', this.appointments);
  }
  private savePayments() { 
    localStorage.setItem(PAYMENTS_KEY, JSON.stringify(this.payments)); 
    this.pushToCloud('payments', 'replace_all', this.payments);
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

  public addStudent(data: Omit<Student, 'id' | 'criadoEm'>, currentUserName: string): Student {
    const newStudent: Student = {
      ...data,
      id: 'aluno_' + Date.now(),
      criadoEm: new Date().toISOString()
    };
    this.students.push(newStudent);
    this.saveStudents();

    auditService.log({
      tela: 'Cadastro de Alunos',
      acao: 'Criação de Aluno',
      usuarioNome: currentUserName,
      detalhes: `Aluno "${newStudent.nome}" cadastrado com status ${newStudent.status}.`
    });

    return newStudent;
  }

  public updateStudent(id: string, updates: Partial<Student>, currentUserName: string): Student {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Aluno não encontrado.');

    const oldStudent = this.students[index];
    this.students[index] = { ...oldStudent, ...updates };
    this.saveStudents();

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
    this.appointments[index] = { ...oldApp, ...updates };
    this.saveAppointments();

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
    const app = this.updateAppointment(
      appointmentId,
      { status, justificativaFalta: justificativa?.trim() || undefined },
      currentUserName
    );

    const student = this.students.find(s => s.id === app.alunoId);
    let novoSaldo = student?.saldoReposicoes || 0;

    if (justificada && student) {
      novoSaldo = (student.saldoReposicoes || 0) + 1;
      student.saldoReposicoes = novoSaldo;
      this.saveStudents();

      auditService.log({
        tela: 'Agenda',
        acao: 'Falta Justificada Registrada',
        usuarioNome: currentUserName,
        detalhes: `Falta justificada para o aluno "${student.nome}" na aula "${app.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${novoSaldo}. Motivo: ${justificativa || 'Não especificado'}`
      });
    } else if (!justificada && student) {
      auditService.log({
        tela: 'Agenda',
        acao: 'Falta Injustificada Registrada',
        usuarioNome: currentUserName,
        detalhes: `Falta sem aviso/injustificada para o aluno "${student.nome}" na aula "${app.titulo}". Nenhum crédito de reposição gerado.`
      });
    }

    return { appointment: app, saldoReposicoes: novoSaldo };
  }

  // Agendamento de Reposição (vinculada ou avulsa, deduzindo crédito se houver)
  public agendarReposicao(
    data: Omit<Appointment, 'id' | 'criadoEm' | 'tipoAula'>,
    aulaOriginalId: string | undefined,
    currentUserName: string
  ): Appointment {
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

    // Abate 1 crédito de reposição do aluno (se tiver créditos)
    const student = this.students.find(s => s.id === newApp.alunoId);
    if (student && typeof student.saldoReposicoes === 'number' && student.saldoReposicoes > 0) {
      student.saldoReposicoes -= 1;
      this.saveStudents();
      auditService.log({
        tela: 'Agenda',
        acao: 'Aula de Reposição Agendada',
        usuarioNome: currentUserName,
        detalhes: `Reposição agendada para "${student.nome}". 1 crédito abatido. Saldo restante: ${student.saldoReposicoes}.`
      });
    }

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
