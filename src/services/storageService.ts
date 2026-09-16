import { User, Student, TeachingPlan, Appointment, SystemSettings } from '../types';
import { auditService } from './auditService';

const USERS_KEY = 'acusticamente_users';
const STUDENTS_KEY = 'acusticamente_students';
const PLANS_KEY = 'acusticamente_plans';
const APPOINTMENTS_KEY = 'acusticamente_appointments';
const SETTINGS_KEY = 'acusticamente_settings';

class StorageService {
  private users: User[] = [];
  private students: Student[] = [];
  private plans: TeachingPlan[] = [];
  private appointments: Appointment[] = [];
  private settings: SystemSettings = {
    nomeEscola: 'Acusticamente - Escola de Música',
    nomeClinica: 'Acusticamente - Escola de Música',
    telefoneContato: '(11) 98765-4321',
    emailContato: 'contato@acusticamente.com.br',
    mongoUri: 'mongodb://localhost:27017',
    mongoDatabase: 'acusticamente_db',
    mongoStatus: 'simulado',
    notificacoesAtivas: true
  };

  constructor() {
    this.initData();
  }

  private initData(): void {
    // 1. Usuários
    const savedUsers = localStorage.getItem(USERS_KEY);
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
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

    // 2. Planos de Ensino de Música com módulos aninhados
    const savedPlans = localStorage.getItem(PLANS_KEY);
    if (savedPlans) {
      this.plans = JSON.parse(savedPlans);
    } else {
      this.plans = [
        {
          id: 'plano_1',
          nome: 'Percepção e Musicalização',
          descricao: 'Desenvolvimento do ouvido musical, ritmo e afinação básica.',
          criadoEm: new Date().toISOString(),
          modulos: [
            { id: 'mod_1_1', ordem: 1, titulo: 'Módulo 1: Consciência Sonora e Pulsação' },
            { id: 'mod_1_2', ordem: 2, titulo: 'Módulo 2: Discriminação de Timbres e Alturas' },
            { id: 'mod_1_3', ordem: 3, titulo: 'Módulo 3: Harmonia Básica e Canto' }
          ]
        },
        {
          id: 'plano_2',
          nome: 'Violão e Harmonia Prática',
          descricao: 'Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.',
          criadoEm: new Date().toISOString(),
          modulos: [
            { id: 'mod_2_1', ordem: 1, titulo: 'Módulo 1: Primeiros Acordes e Levadas' },
            { id: 'mod_2_2', ordem: 2, titulo: 'Módulo 2: Dedilhados e Transição de Acordes' },
            { id: 'mod_2_3', ordem: 3, titulo: 'Módulo 3: Escalas e Harmonia Prática' }
          ]
        },
        {
          id: 'plano_3',
          nome: 'Prática de Instrumento - Piano & Teclado',
          descricao: 'Estudo prático postural, leitura de partituras e repertório.',
          criadoEm: new Date().toISOString(),
          modulos: [
            { id: 'mod_3_1', ordem: 1, titulo: 'Módulo 1: Digitação e Postura' },
            { id: 'mod_3_2', ordem: 2, titulo: 'Módulo 2: Leitura Rítmica e Clave de Sol' },
            { id: 'mod_3_3', ordem: 3, titulo: 'Módulo 3: Repertório Clássico e Popular' }
          ]
        }
      ];
      this.savePlans();
    }

    // 3. Alunos
    // 3. Alunos
    const savedStudents = localStorage.getItem(STUDENTS_KEY);
    if (savedStudents) {
      this.students = JSON.parse(savedStudents).map((s: any) => ({
        ...s,
        saldoReposicoes: typeof s.saldoReposicoes === 'number' ? s.saldoReposicoes : 0,
        instrumentoPrincipal: s.instrumentoPrincipal || 'Violão',
        nivelMusical: s.nivelMusical || 'iniciante'
      }));
    } else {
      this.students = [
        {
          id: 'aluno_1',
          nome: 'Lucas Silveira',
          email: 'lucas@email.com',
          telefone: '(11) 98231-1122',
          dataNascimento: '2014-05-14',
          instrumentoPrincipal: 'Bateria',
          nivelMusical: 'iniciante',
          responsavelNome: 'Cláudia Silveira',
          responsavelTelefone: '(11) 98111-2233',
          responsavelParentesco: 'Mãe',
          planoId: 'plano_1',
          moduloAtual: 'Módulo 2: Discriminação de Timbres',
          saldoReposicoes: 1,
          status: 'ativo',
          observacoes: 'Apresenta grande facilidade com ritmo.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'aluno_2',
          nome: 'Mariana Duarte',
          email: 'mariana.duarte@email.com',
          telefone: '(11) 97123-4567',
          dataNascimento: '2008-09-21',
          instrumentoPrincipal: 'Violão',
          nivelMusical: 'basico',
          responsavelNome: 'Roberto Duarte',
          responsavelTelefone: '(11) 97111-0000',
          responsavelParentesco: 'Pai',
          planoId: 'plano_2',
          moduloAtual: 'Módulo 1: Primeiros Acordes e Levadas',
          saldoReposicoes: 0,
          status: 'ativo',
          observacoes: 'Iniciando estudos no violão popular.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'aluno_3',
          nome: 'Gabriel Santos',
          email: 'gabriel.s@email.com',
          telefone: '(11) 99345-6789',
          dataNascimento: '1998-03-10',
          instrumentoPrincipal: 'Piano & Teclado',
          nivelMusical: 'intermediario',
          planoId: 'plano_3',
          moduloAtual: 'Módulo 1: Digitação e Postura',
          saldoReposicoes: 0,
          status: 'ativo',
          observacoes: 'Excelente dedicação nas aulas de piano.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'aluno_4',
          nome: 'Beatriz Costa',
          email: 'beatriz.costa@email.com',
          telefone: '(11) 96543-2109',
          dataNascimento: '2015-11-05',
          instrumentoPrincipal: 'Técnica Vocal / Canto',
          nivelMusical: 'iniciante',
          responsavelNome: 'Ana Costa',
          responsavelTelefone: '(11) 96500-1122',
          responsavelParentesco: 'Mãe',
          planoId: 'plano_1',
          moduloAtual: 'Módulo 3: Harmonia Básica e Canto',
          saldoReposicoes: 2,
          status: 'ativo',
          observacoes: 'Foco no canto coral.',
          criadoEm: new Date().toISOString()
        }
      ];
      this.saveStudents();
    }

    // 4. Compromissos / Agenda das Aulas
    const savedAppointments = localStorage.getItem(APPOINTMENTS_KEY);
    if (savedAppointments) {
      this.appointments = JSON.parse(savedAppointments);
    } else {
      const todayStr = this.getTodayDateString();
      this.appointments = [
        {
          id: 'app_1',
          titulo: 'Aula de Percepção Sonora',
          alunoId: 'aluno_1',
          planoId: 'plano_1',
          data: todayStr,
          horaInicio: '08:30',
          horaFim: '09:30',
          status: 'concluido',
          observacoes: 'Exercícios rítmicos concluídos.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'app_2',
          titulo: 'Aula Prática de Violão',
          alunoId: 'aluno_2',
          planoId: 'plano_2',
          data: todayStr,
          horaInicio: '10:00',
          horaFim: '11:00',
          status: 'agendado',
          observacoes: 'Praticar transição entre acordes maiores.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'app_3',
          titulo: 'Prática de Piano Módulo 1',
          alunoId: 'aluno_3',
          planoId: 'plano_3',
          data: todayStr,
          horaInicio: '14:00',
          horaFim: '15:00',
          status: 'agendado',
          observacoes: 'Início da escala de Dó Maior.',
          criadoEm: new Date().toISOString()
        },
        {
          id: 'app_4',
          titulo: 'Percepção e Harmonia',
          alunoId: 'aluno_4',
          planoId: 'plano_1',
          data: todayStr,
          horaInicio: '16:30',
          horaFim: '17:30',
          status: 'agendado',
          observacoes: 'Preparação para apresentação musical.',
          criadoEm: new Date().toISOString()
        }
      ];
      this.saveAppointments();
    }

    // 5. Configurações
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
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
          { id: 'mod_2_1', ordem: 1, titulo: 'Módulo 1: Primeiros Acordes e Levadas' },
          { id: 'mod_2_2', ordem: 2, titulo: 'Módulo 2: Dedilhados e Transição de Acordes' },
          { id: 'mod_2_3', ordem: 3, titulo: 'Módulo 3: Escalas e Harmonia Prática' }
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

  // Salvamentos internos
  private saveUsers() { localStorage.setItem(USERS_KEY, JSON.stringify(this.users)); }
  private saveStudents() { localStorage.setItem(STUDENTS_KEY, JSON.stringify(this.students)); }
  private savePlans() { localStorage.setItem(PLANS_KEY, JSON.stringify(this.plans)); }
  private saveAppointments() { localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(this.appointments)); }
  private saveSettings() { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); }

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

  // ===================== CONFIGURAÇÕES =====================
  public getSettings(): SystemSettings {
    return { ...this.settings };
  }

  public updateSettings(updates: Partial<SystemSettings>, currentUserName: string): SystemSettings {
    this.settings = { ...this.settings, ...updates };
    this.saveSettings();

    auditService.log({
      tela: 'Configurações',
      acao: 'Alteração de Configurações',
      usuarioNome: currentUserName,
      detalhes: `Parâmetros do sistema atualizados (MongoDB: ${this.settings.mongoDatabase}).`
    });

    return this.settings;
  }
}

export const storageService = new StorageService();
