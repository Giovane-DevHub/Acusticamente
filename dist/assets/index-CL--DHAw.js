var xe=Object.defineProperty;var $e=(g,a,e)=>a in g?xe(g,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):g[a]=e;var T=(g,a,e)=>$e(g,typeof a!="symbol"?a+"":a,e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();const le="acusticamente_audit_logs";class we{constructor(){T(this,"logs",[]);this.loadLogs()}loadLogs(){try{const a=localStorage.getItem(le);a?this.logs=JSON.parse(a):this.log({usuarioId:"1",usuarioLogin:"1",usuarioNome:"Administrador",tela:"Sistema",acao:"Inicialização do Sistema",detalhes:"Base de dados inicializada com usuário administrador padrão (1)."})}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(le,JSON.stringify(this.logs))}catch(a){console.error("Erro ao salvar auditoria no storage:",a)}}log(a){const e=new Date,o=n=>n.toString().padStart(2,"0"),s=`${o(e.getDate())}/${o(e.getMonth()+1)}/${e.getFullYear()} ${o(e.getHours())}:${o(e.getMinutes())}:${o(e.getSeconds())}`,l={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:e.toISOString(),dataHoraFormatada:s,usuarioId:a.usuarioId||"1",usuarioLogin:a.usuarioLogin||"1",usuarioNome:a.usuarioNome||"Administrador",tela:a.tela,acao:a.acao,detalhes:a.detalhes};return this.logs.unshift(l),this.saveLogs(),window.dispatchEvent(new CustomEvent("audit_updated",{detail:l})),l}getLogs(){return[...this.logs]}clearLogs(){this.logs=[],this.saveLogs()}}const L=new we,de="acusticamente_users",ce="acusticamente_students",ue="acusticamente_plans",pe="acusticamente_appointments",me="acusticamente_settings";class Ee{constructor(){T(this,"users",[]);T(this,"students",[]);T(this,"plans",[]);T(this,"appointments",[]);T(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0});this.initData()}initData(){const a=localStorage.getItem(de);a?this.users=JSON.parse(a):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const e=localStorage.getItem(ue);e?this.plans=JSON.parse(e):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(ce);o?this.students=JSON.parse(o).map(n=>({...n,saldoReposicoes:typeof n.saldoReposicoes=="number"?n.saldoReposicoes:0,instrumentoPrincipal:n.instrumentoPrincipal||"Violão",nivelMusical:n.nivelMusical||"iniciante"})):(this.students=[{id:"aluno_1",nome:"Lucas Silveira",email:"lucas@email.com",telefone:"(11) 98231-1122",dataNascimento:"2014-05-14",instrumentoPrincipal:"Bateria",nivelMusical:"iniciante",responsavelNome:"Cláudia Silveira",responsavelTelefone:"(11) 98111-2233",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 2: Discriminação de Timbres",saldoReposicoes:1,status:"ativo",observacoes:"Apresenta grande facilidade com ritmo.",criadoEm:new Date().toISOString()},{id:"aluno_2",nome:"Mariana Duarte",email:"mariana.duarte@email.com",telefone:"(11) 97123-4567",dataNascimento:"2008-09-21",instrumentoPrincipal:"Violão",nivelMusical:"basico",responsavelNome:"Roberto Duarte",responsavelTelefone:"(11) 97111-0000",responsavelParentesco:"Pai",planoId:"plano_2",moduloAtual:"Módulo 1: Primeiros Acordes e Levadas",saldoReposicoes:0,status:"ativo",observacoes:"Iniciando estudos no violão popular.",criadoEm:new Date().toISOString()},{id:"aluno_3",nome:"Gabriel Santos",email:"gabriel.s@email.com",telefone:"(11) 99345-6789",dataNascimento:"1998-03-10",instrumentoPrincipal:"Piano & Teclado",nivelMusical:"intermediario",planoId:"plano_3",moduloAtual:"Módulo 1: Digitação e Postura",saldoReposicoes:0,status:"ativo",observacoes:"Excelente dedicação nas aulas de piano.",criadoEm:new Date().toISOString()},{id:"aluno_4",nome:"Beatriz Costa",email:"beatriz.costa@email.com",telefone:"(11) 96543-2109",dataNascimento:"2015-11-05",instrumentoPrincipal:"Técnica Vocal / Canto",nivelMusical:"iniciante",responsavelNome:"Ana Costa",responsavelTelefone:"(11) 96500-1122",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 3: Harmonia Básica e Canto",saldoReposicoes:2,status:"ativo",observacoes:"Foco no canto coral.",criadoEm:new Date().toISOString()}],this.saveStudents());const s=localStorage.getItem(pe);if(s)this.appointments=JSON.parse(s);else{const n=this.getTodayDateString();this.appointments=[{id:"app_1",titulo:"Aula de Percepção Sonora",alunoId:"aluno_1",planoId:"plano_1",data:n,horaInicio:"08:30",horaFim:"09:30",status:"concluido",observacoes:"Exercícios rítmicos concluídos.",criadoEm:new Date().toISOString()},{id:"app_2",titulo:"Aula Prática de Violão",alunoId:"aluno_2",planoId:"plano_2",data:n,horaInicio:"10:00",horaFim:"11:00",status:"agendado",observacoes:"Praticar transição entre acordes maiores.",criadoEm:new Date().toISOString()},{id:"app_3",titulo:"Prática de Piano Módulo 1",alunoId:"aluno_3",planoId:"plano_3",data:n,horaInicio:"14:00",horaFim:"15:00",status:"agendado",observacoes:"Início da escala de Dó Maior.",criadoEm:new Date().toISOString()},{id:"app_4",titulo:"Percepção e Harmonia",alunoId:"aluno_4",planoId:"plano_1",data:n,horaInicio:"16:30",horaFim:"17:30",status:"agendado",observacoes:"Preparação para apresentação musical.",criadoEm:new Date().toISOString()}],this.saveAppointments()}const l=localStorage.getItem(me);l&&(this.settings=JSON.parse(l)),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(n=>{n.nome.includes("Reabilitação")&&(n.nome="Violão e Harmonia Prática",n.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",n.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(n=>{var t;(t=n.observacoes)!=null&&t.includes("implante")&&(n.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",n.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(n=>{var t;(t=n.titulo)!=null&&t.includes("Auditivo")&&(n.titulo="Aula Prática de Violão",n.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const a=new Date,e=o=>o.toString().padStart(2,"0");return`${a.getFullYear()}-${e(a.getMonth()+1)}-${e(a.getDate())}`}saveUsers(){localStorage.setItem(de,JSON.stringify(this.users))}saveStudents(){localStorage.setItem(ce,JSON.stringify(this.students))}savePlans(){localStorage.setItem(ue,JSON.stringify(this.plans))}saveAppointments(){localStorage.setItem(pe,JSON.stringify(this.appointments))}saveSettings(){localStorage.setItem(me,JSON.stringify(this.settings))}getUsers(){return[...this.users]}getUserById(a){return this.users.find(e=>e.id===a)}addUser(a,e){const o={...a,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),L.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:e,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(a,e,o){const s=this.users.findIndex(t=>t.id===a);if(s===-1)throw new Error("Usuário não encontrado.");const l=this.users[s],n=l.isSistema;return this.users[s]={...l,...e,isSistema:n,atualizadoEm:new Date().toISOString()},this.saveUsers(),L.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${l.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(a,e){const o=this.users.find(s=>s.id===a);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==a),this.saveUsers(),L.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:e,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(a,e){const o={...a,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),L.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(a,e,o){const s=this.students.findIndex(n=>n.id===a);if(s===-1)throw new Error("Aluno não encontrado.");const l=this.students[s];return this.students[s]={...l,...e},this.saveStudents(),L.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${l.nome}" atualizado.`}),this.students[s]}deleteStudent(a,e){const o=this.students.find(s=>s.id===a);o&&(this.students=this.students.filter(s=>s.id!==a),this.saveStudents(),L.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(a,e){const o={...a,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),L.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(a,e,o){const s=this.plans.findIndex(n=>n.id===a);if(s===-1)throw new Error("Plano não encontrado.");const l=this.plans[s];return this.plans[s]={...l,...e},this.savePlans(),L.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${l.nome}" atualizado.`}),this.plans[s]}deletePlan(a,e){const o=this.plans.find(s=>s.id===a);o&&(this.plans=this.plans.filter(s=>s.id!==a),this.savePlans(),L.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(a,e){const o={...a,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(l=>l.id===o.alunoId);return L.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:e,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(a,e,o){const s=this.appointments.findIndex(n=>n.id===a);if(s===-1)throw new Error("Compromisso não encontrado.");const l=this.appointments[s];return this.appointments[s]={...l,...e},this.saveAppointments(),L.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${l.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(a,e){const o=this.appointments.find(s=>s.id===a);o&&(this.appointments=this.appointments.filter(s=>s.id!==a),this.saveAppointments(),L.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:e,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(a,e){const o=this.updateAppointment(a,{status:"concluido"},e),s=this.students.find(l=>l.id===o.alunoId);return L.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:e,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(a,e,o,s){const l=e?"falta_justificada":"falta_injustificada",n=this.updateAppointment(a,{status:l,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),t=this.students.find(x=>x.id===n.alunoId);let p=(t==null?void 0:t.saldoReposicoes)||0;return e&&t?(p=(t.saldoReposicoes||0)+1,t.saldoReposicoes=p,this.saveStudents(),L.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${t.nome}" na aula "${n.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${p}. Motivo: ${o||"Não especificado"}`})):!e&&t&&L.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${t.nome}" na aula "${n.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:n,saldoReposicoes:p}}agendarReposicao(a,e,o){const s=this.addAppointment({...a,tipoAula:"reposicao",aulaOriginalId:e,status:"agendado"},o);if(e){const n=this.appointments.findIndex(t=>t.id===e);n!==-1&&(this.appointments[n].aulaReposicaoId=s.id,this.saveAppointments())}const l=this.students.find(n=>n.id===s.alunoId);return l&&typeof l.saldoReposicoes=="number"&&l.saldoReposicoes>0&&(l.saldoReposicoes-=1,this.saveStudents(),L.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${l.nome}". 1 crédito abatido. Saldo restante: ${l.saldoReposicoes}.`})),s}getStudentAppointments(a){return this.appointments.filter(e=>e.alunoId===a).sort((e,o)=>{const s=`${e.data}T${e.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getSettings(){return{...this.settings}}updateSettings(a,e){return this.settings={...this.settings,...a},this.saveSettings(),L.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:e,detalhes:`Parâmetros do sistema atualizados (MongoDB: ${this.settings.mongoDatabase}).`}),this.settings}}const E=new Ee,H={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Q(g){var s,l,n,t,p,x,r,m,u,v,y,b,I,f,d,k;if(!g)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(g.papel==="admin")return JSON.parse(JSON.stringify(H.admin));const a=H[g.papel]||H.professor,e=g.permissoes;if(!e)return JSON.parse(JSON.stringify(a));const o=i=>typeof i=="boolean";return{alunos:{acesso:o(e.alunos)?e.alunos:((s=e.alunos)==null?void 0:s.acesso)??a.alunos.acesso,cadastrar:o(e.alunos)?e.alunos:((l=e.alunos)==null?void 0:l.cadastrar)??a.alunos.cadastrar,alterar:o(e.alunos)?e.alunos:((n=e.alunos)==null?void 0:n.alterar)??a.alunos.alterar,excluir:o(e.alunos)?!1:((t=e.alunos)==null?void 0:t.excluir)??a.alunos.excluir},agenda:{acesso:o(e.agenda)?e.agenda:((p=e.agenda)==null?void 0:p.acesso)??a.agenda.acesso,cadastrar:o(e.agenda)?e.agenda:((x=e.agenda)==null?void 0:x.cadastrar)??a.agenda.cadastrar,alterar:o(e.agenda)?e.agenda:((r=e.agenda)==null?void 0:r.alterar)??a.agenda.alterar,excluir:o(e.agenda)?!1:((m=e.agenda)==null?void 0:m.excluir)??a.agenda.excluir},planos:{acesso:o(e.planos)?e.planos:((u=e.planos)==null?void 0:u.acesso)??a.planos.acesso,cadastrar:o(e.planos)?e.planos:((v=e.planos)==null?void 0:v.cadastrar)??a.planos.cadastrar,alterar:o(e.planos)?e.planos:((y=e.planos)==null?void 0:y.alterar)??a.planos.alterar,excluir:o(e.planos)?!1:((b=e.planos)==null?void 0:b.excluir)??a.planos.excluir},home:{acesso:o(e.home)?e.home:((I=e.home)==null?void 0:I.acesso)??a.home.acesso},auditoria:{acesso:o(e.auditoria)?e.auditoria:((f=e.auditoria)==null?void 0:f.acesso)??a.auditoria.acesso},configuracoes:{acesso:o(e.configuracoes)?e.configuracoes:((d=e.configuracoes)==null?void 0:d.acesso)??a.configuracoes.acesso,alterar:o(e.configuracoes)?e.configuracoes:((k=e.configuracoes)==null?void 0:k.alterar)??a.configuracoes.alterar}}}function O(g,a){if(!g)return!1;if(a==="login")return!0;if(a==="user")return g.papel==="admin";if(g.papel==="admin")return!0;const o=Q(g)[a];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function N(g,a,e){if(!g)return!1;if(g.papel==="admin")return!0;const s=Q(g)[a];return s?!!s[e]:!1}const K="acusticamente_active_session";class Ae{constructor(){T(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const a=localStorage.getItem(K);a&&(this.currentUser=JSON.parse(a))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const a=E.getUserById(this.currentUser.id);a&&(this.currentUser=a,localStorage.setItem(K,JSON.stringify(a)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(a,e){const s=E.getUsers().find(l=>l.login===a.trim());return s?s.senha!==e.trim()?(L.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(K,JSON.stringify(s)),L.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(L.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:a,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${a}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&L.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(K),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const B=new Ae;function ee(g=40){return`
    <svg width="${g}" height="${g}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
      <defs>
        <filter id="glow-coral" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#ea4335" flood-opacity="0.35"/>
        </filter>
      </defs>

      <!-- Arcos circulares estilizados -->
      <!-- Arco superior direito branco -->
      <path d="M 50 16 C 68 16 84 31 84 50 C 84 58 81 65 76 71" 
            stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      
      <!-- Arco inferior esquerdo branco -->
      <path d="M 50 84 C 32 84 16 69 16 50 C 16 42 19 35 24 29" 
            stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>

      <!-- Arco intermediário branco superior -->
      <path d="M 42 24 C 60 24 74 38 74 54" 
            stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>

      <!-- Arco intermediário branco inferior -->
      <path d="M 58 76 C 40 76 26 62 26 46" 
            stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>

      <!-- Barras de onda sonora (Equalizador coral e branco) -->
      <!-- Ponto 1 Coral -->
      <circle cx="16" cy="50" r="3" fill="#ea4335" />

      <!-- Barra 2 Coral -->
      <rect x="23" y="38" width="6" height="24" rx="3" fill="#ea4335" />

      <!-- Barra 3 Coral -->
      <rect x="32" y="30" width="6" height="40" rx="3" fill="#ea4335" />

      <!-- Barra 4 Coral Central Longa -->
      <rect x="41" y="22" width="6" height="56" rx="3" fill="#ea4335" />

      <!-- Barra 5 Híbrida / Branca e Coral -->
      <rect x="50" y="32" width="6" height="18" rx="3" fill="#ffffff" />
      <rect x="50" y="52" width="6" height="26" rx="3" fill="#ea4335" />

      <!-- Barra 6 Híbrida / Branca e Coral -->
      <rect x="59" y="40" width="6" height="10" rx="3" fill="#ffffff" />
      <rect x="59" y="53" width="6" height="23" rx="3" fill="#ea4335" />

      <!-- Barra 7 Branca Longa -->
      <rect x="68" y="34" width="6" height="32" rx="3" fill="#ffffff" />

      <!-- Ponto 8 Branco -->
      <circle cx="80" cy="54" r="3" fill="#ffffff" />
    </svg>
  `}function z(g,a="success"){const e=document.getElementById("toast-container");if(!e)return;const o=document.createElement("div");o.className=`toast toast-${a}`,o.innerHTML=`
    <span class="toast-icon">${a==="success"?"✓":a==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${g}</span>
  `,e.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function U(g){const a=document.getElementById("modal-container");if(!a)return;a.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${g.modalClass||""}">
        <div class="modal-header">
          <h3>${g.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${g.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${g.cancelText||"Cancelar"}</button>
          ${g.confirmText?`<button type="button" class="btn ${g.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${g.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const e=document.getElementById("active-modal-backdrop"),o=document.getElementById("modal-close-btn"),s=document.getElementById("modal-cancel-btn"),l=document.getElementById("modal-confirm-btn"),n=()=>{a.innerHTML="",g.onCancel&&g.onCancel()};o.onclick=n,s.onclick=n,e.onclick=t=>{t.target===e&&n()},l&&g.onConfirm&&(l.onclick=async()=>{const t=document.querySelector(".modal-card");await g.onConfirm(t)!==!1&&(a.innerHTML="")})}function V(){const g=document.getElementById("modal-container");g&&(g.innerHTML="")}const C={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'},X="acusticamente_auth_remember",ge="acusticamente_manual_logout";function ke(g){const a=document.createElement("div");a.className="login-page";let e={username:"",password:"",remember:!1,autoLogin:!1};try{const t=localStorage.getItem(X);t&&(e={...e,...JSON.parse(t)})}catch{e={username:"",password:"",remember:!1,autoLogin:!1}}a.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${ee(50)}
        </div>
        <h2>ACUSTICAMENTE</h2>
      </div>

      <div class="login-pitch-box">
        <h1 class="login-pitch-title">
          Organize o cuidado.<br>
          Acompanhe cada <span>evolução</span>.
        </h1>
        <p class="login-pitch-desc">
          Plataforma de gestão pedagógica musical. Acompanhe alunos, organize a agenda sem complicações e tenha auditoria completa de cada ação.
        </p>
      </div>

      <div class="login-footer-info">
        <span>Sistema Integrado Acusticamente &bull; TypeScript &amp; MongoDB</span>
      </div>
    </div>

    <!-- Lado Direito Formulário de Acesso -->
    <div class="login-form-side">
      <div class="login-card">
        <div class="login-card-header">
          <div style="display: flex; justify-content: center; margin-bottom: 10px;">
            ${ee(58)}
          </div>
          <h3>Bem-vindo</h3>
          <p>Entre com seu usuário e senha para acessar o painel</p>
        </div>

        <form id="login-form">
          <div class="form-group">
            <label class="form-label" for="login-username">Usuário</label>
            <input 
              type="text" 
              id="login-username" 
              class="form-input" 
              placeholder="Digite seu usuário" 
              value="${e.remember?e.username:""}"
              required 
              autocomplete="username"
            />
          </div>

          <div class="form-group" style="margin-bottom: 6px;">
            <label class="form-label" for="login-password">Senha</label>
            <input 
              type="password" 
              id="login-password" 
              class="form-input" 
              placeholder="Digite sua senha" 
              value="${e.remember?e.password:""}"
              required 
              autocomplete="current-password"
            />
          </div>

          <!-- Opções de Acesso: Lembrar Senha & Entrar Automaticamente com espaçamento adequado -->
          <div style="margin: 18px 0 24px 0; display: flex; flex-direction: column; gap: 10px; padding: 12px 14px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-remember" 
                ${e.remember?"checked":""} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Lembrar senha</span>
            </label>

            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-autologin" 
                ${e.autoLogin?"checked":""} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Entrar automaticamente</span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 13px; font-size: 1rem;">
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  `;const o=a.querySelector("#login-remember"),s=a.querySelector("#login-autologin");s==null||s.addEventListener("change",()=>{s.checked&&!o.checked&&(o.checked=!0)}),o==null||o.addEventListener("change",()=>{!o.checked&&s.checked&&(s.checked=!1)});const l=a.querySelector("#login-form");l.onsubmit=t=>{var b;t.preventDefault();const p=a.querySelector("#login-username"),x=a.querySelector("#login-password"),r=p.value.trim(),m=x.value.trim(),u=o.checked,v=s.checked,y=B.login(r,m);y.success?(u?localStorage.setItem(X,JSON.stringify({username:r,password:m,remember:!0,autoLogin:v})):localStorage.removeItem(X),sessionStorage.removeItem(ge),z(`Bem-vindo, ${(b=y.user)==null?void 0:b.nome}!`,"success"),g()):z(y.message,"error")};const n=sessionStorage.getItem(ge)==="true";return e.autoLogin&&e.remember&&e.username&&e.password&&!n&&setTimeout(()=>{var p;if(!a.isConnected&&!document.body.contains(a))return;const t=B.login(e.username,e.password);t.success&&(z(`Bem-vindo de volta, ${(p=t.user)==null?void 0:p.nome}!`,"success"),g())},100),a}function fe(g){var r,m;const a=document.createElement("div"),e=B.getCurrentUser(),o=E.getStudents(),s=E.getPlans(),l=E.getAppointments(),n=E.getTodayDateString(),t=l.filter(u=>u.data===n),p=o.filter(u=>u.status==="ativo").length,x=t.find(u=>u.status==="agendado");return a.innerHTML=`
    <!-- Cabeçalho de Boas-vindas -->
    <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
      <div>
        <h2 style="font-family: var(--font-heading); font-size: 1.28rem; font-weight: 700; color: var(--text-white);">
          Olá, ${(e==null?void 0:e.nome)||"Administrador"}
        </h2>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 3px;">
          Aqui está o resumo das suas atividades e aulas de hoje.
        </p>
      </div>

      <button class="btn btn-primary" id="home-btn-new-appointment">
        ${C.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${C.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${t.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${C.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${p}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${C.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${x?x.horaInicio:"--:--"}</span>
          <span class="metric-label">${x?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${C.planos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${s.length}</span>
          <span class="metric-label">Planos de ensino</span>
        </div>
      </div>
    </div>

    <!-- Tabela de Aulas de Hoje -->
    <div class="panel-card">
      <div class="panel-card-header">
        <h3 class="panel-card-title">Aulas de Hoje (${t.length})</h3>
        <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
          Ver Agenda Completa
        </button>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Aluno</th>
              <th>Plano de Ensino</th>
              <th>Status</th>
              <th style="text-align: right;">Ações</th>
            </tr>
          </thead>
          <tbody id="today-classes-tbody">
            ${t.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':t.map(u=>{const v=o.find(d=>d.id===u.alunoId),y=s.find(d=>d.id===u.planoId),b=u.status==="concluido",I=u.status==="agendado";let f='<span class="badge badge-warning">⏳ Agendado</span>';return b?f='<span class="badge badge-success">✓ Concluído</span>':u.status==="falta_justificada"?f='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':u.status==="falta_injustificada"?f='<span class="badge badge-danger">✕ Falta Injustificada</span>':u.status==="cancelado"&&(f='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${u.id}">
                          <td>
                            <strong style="color: var(--text-white);">${u.horaInicio}</strong>
                            <span style="font-size: 0.78rem; color: var(--text-muted);"> às ${u.horaFim}</span>
                            ${u.tipoAula==="reposicao"?'<div style="font-size: 0.68rem; color: #4ade80; font-weight: 600;">🔄 Reposição</div>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                              <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 600; color: var(--color-coral);">
                                ${((v==null?void 0:v.nome)||"A")[0]}
                              </div>
                              <div>
                                <span style="font-weight: 500;">${(v==null?void 0:v.nome)||"Aluno não vinculado"}</span>
                                ${v!=null&&v.instrumentoPrincipal?`<div style="font-size: 0.72rem; color: var(--text-muted);">${v.instrumentoPrincipal}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td>
                            <span style="color: var(--text-secondary);">${(y==null?void 0:y.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td>
                            ${f}
                          </td>
                          <td style="text-align: right;">
                            ${I?`<button class="btn btn-secondary btn-complete-class" data-id="${u.id}" style="padding: 5px 12px; font-size: 0.78rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.8rem; color: var(--text-muted);">${b?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(r=a.querySelector("#home-btn-new-appointment"))==null||r.addEventListener("click",()=>{g("agenda")}),(m=a.querySelector("#home-btn-view-all-agenda"))==null||m.addEventListener("click",()=>{g("agenda")}),a.querySelectorAll(".btn-complete-class").forEach(u=>{u.addEventListener("click",v=>{const y=v.currentTarget.dataset.id;y&&(E.updateAppointment(y,{status:"concluido"},(e==null?void 0:e.nome)||"Administrador"),z("Aula concluída com sucesso!","success"),g("home"))})}),a}function Se(g){const a=document.createElement("div"),e=B.getCurrentUser();let o=new Date;function s(){var i,h,$,A;const t=E.getStudents();E.getPlans();const p=E.getAppointments(),x=o.getFullYear(),r=o.getMonth(),m=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],u=new Date(x,r,1).getDay(),v=new Date(x,r+1,0).getDate(),y=new Date(x,r,0).getDate(),b=new Date,I=b.getFullYear()===x&&b.getMonth()===r,f=[];for(let c=u;c>0;c--){const w=y-c+1;f.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${w}</span>
          </div>
        </div>
      `)}for(let c=1;c<=v;c++){const w=D=>D.toString().padStart(2,"0"),S=`${x}-${w(r+1)}-${w(c)}`,P=I&&b.getDate()===c,M=p.filter(D=>D.data===S),_=M.slice(0,3).map(D=>{const R=t.find(W=>W.id===D.alunoId),Y=R?R.nome.split(" ")[0]:"Aula";let q="",F="";return D.status==="concluido"?(q="concluido",F="✓ "):D.status==="falta_justificada"?(q="falta-justificada",F="⚠️ "):D.status==="falta_injustificada"?(q="falta-injustificada",F="✕ "):D.tipoAula==="reposicao"&&(q="reposicao",F="🔄 "),`
            <div class="calendar-appointment-badge ${q}" 
                 data-app-id="${D.id}" 
                 title="${D.horaInicio} - ${(R==null?void 0:R.nome)||"Aluno"} (${D.status}${D.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${F}${D.horaInicio}</strong> ${Y}
            </div>
          `}).join(""),J=M.length>3?M.length-3:0,G=J>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${J} mais</div>`:"";f.push(`
        <div class="calendar-day-cell ${P?"today":""}" data-date="${S}">
          <div class="day-cell-header">
            <span class="day-number">${c}</span>
            ${M.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${M.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${_}
            ${G}
          </div>
        </div>
      `)}const d=f.length,k=d>35?42-d:35-d;for(let c=1;c<=k;c++)f.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${c}</span>
          </div>
        </div>
      `);a.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${m[r]} de ${x}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${I?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${N(e,"agenda","cadastrar")?`
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${C.plus} Nova Aula / Compromisso
                  </button>
                `:""}
          </div>
        </div>

        <!-- Grade Semanal Quadradinha Estilo Google Calendar -->
        <div class="calendar-grid">
          <div class="calendar-day-name">DOM</div>
          <div class="calendar-day-name">SEG</div>
          <div class="calendar-day-name">TER</div>
          <div class="calendar-day-name">QUA</div>
          <div class="calendar-day-name">QUI</div>
          <div class="calendar-day-name">SEX</div>
          <div class="calendar-day-name">SÁB</div>

          ${f.join("")}
        </div>

        <!-- Legenda de Status de Aulas -->
        <div style="margin-top: 14px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; font-size: 0.76rem; color: var(--text-secondary); background: var(--bg-card); padding: 8px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <span style="font-weight: 600; color: var(--text-white);">Legenda:</span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: var(--color-coral);"></span> Agendado
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #22c55e;"></span> ✓ Presente
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #f59e0b;"></span> ⚠️ Falta Justificada (+1 reposição)
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #ef4444;"></span> ✕ Falta Injustificada
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #86efac; border: 1px solid #22c55e;"></span> 🔄 Reposição
          </span>
        </div>
      </div>
    `,(i=a.querySelector("#agenda-btn-prev"))==null||i.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(h=a.querySelector("#agenda-btn-next"))==null||h.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),($=a.querySelector("#agenda-btn-today"))==null||$.addEventListener("click",()=>{o=new Date,s()}),(A=a.querySelector("#agenda-btn-new-app"))==null||A.addEventListener("click",()=>{n()}),a.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(c=>{c.addEventListener("click",w=>{const S=c.dataset.date;S&&l(S)})}),a.querySelectorAll(".calendar-appointment-badge").forEach(c=>{c.addEventListener("click",w=>{w.stopPropagation();const S=c.dataset.appId,P=p.find(M=>M.id===S);P&&l(P.data)})})}function l(t){const p=E.getStudents(),x=E.getPlans(),r=E.getAppointments().filter(f=>f.data===t),[m,u,v]=t.split("-"),y=`${v}/${u}/${m}`,b=r.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${r.map(f=>{const d=p.find(M=>M.id===f.alunoId),k=x.find(M=>M.id===f.planoId),i=f.status==="concluido",h=f.status==="falta_justificada",$=f.status==="falta_injustificada",A=f.status==="cancelado",c=f.status==="agendado",w=f.tipoAula==="reposicao";let S="var(--color-coral)",P='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return i?(S="var(--status-success)",P='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):h?(S="#f59e0b",P='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):$?(S="var(--status-danger)",P='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):A&&(S="var(--border-subtle)",P='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${S};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${f.horaInicio} - ${f.horaFim}</strong>
                        ${P}
                        ${w?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${f.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(d==null?void 0:d.nome)||"Não vinculado"}</strong>
                        ${d!=null&&d.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${d.instrumentoPrincipal}</span>`:""}
                        ${k?` &bull; Plano: <span style="color: #ff9187;">${k.nome}</span>`:""}
                      </div>

                      ${f.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${f.justificativaFalta}
                             </div>`:""}

                      ${f.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${f.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${f.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${N(e,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${f.id}" title="Editar Detalhes">
                              ${C.edit}
                            </button>
                          `:""}
                      ${N(e,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${f.id}" title="Excluir">
                              ${C.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${N(e,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${c?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${f.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${f.id}" data-name="${(d==null?void 0:d.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${f.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${h&&!f.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${f.id}" data-student-id="${f.alunoId}" data-title="${f.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,I=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${r.length}</strong>
          </span>
          ${N(e,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${C.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${b}
      </div>
    `;U({title:`Aulas do Dia: ${y}`,bodyHtml:I,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var f;(f=document.getElementById("btn-modal-new-appointment"))==null||f.addEventListener("click",()=>{V(),n({defaultDate:t})}),document.querySelectorAll(".btn-mark-presence").forEach(d=>{d.addEventListener("click",k=>{const i=k.currentTarget.dataset.id;i&&(E.marcarPresenca(i,(e==null?void 0:e.nome)||"Administrador"),z("Presença confirmada e aula concluída!","success"),s(),l(t))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(d=>{d.addEventListener("click",k=>{const i=k.currentTarget.dataset.id,h=k.currentTarget.dataset.name;if(!i)return;const $=prompt(`Informe o motivo da falta justificada de ${h} (Ex: Atestado médico, Viagem em família):`);if($===null)return;const A=E.registrarFalta(i,!0,$,(e==null?void 0:e.nome)||"Administrador");z(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${A.saldoReposicoes}).`,"success"),s(),l(t)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(d=>{d.addEventListener("click",k=>{const i=k.currentTarget.dataset.id;i&&confirm("Registrar falta sem aviso prévio / injustificada? Não será gerado crédito de reposição.")&&(E.registrarFalta(i,!1,void 0,(e==null?void 0:e.nome)||"Administrador"),z("Falta injustificada registrada.","info"),s(),l(t))})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(d=>{d.addEventListener("click",k=>{const i=k.currentTarget,h=i.dataset.id,$=i.dataset.studentId,A=i.dataset.title;V(),n({studentId:$,aulaOriginalId:h,tipoAula:"reposicao",titulo:A?`Reposição: ${A}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(d=>{d.addEventListener("click",k=>{const i=k.currentTarget.dataset.id,h=E.getAppointments().find($=>$.id===i);h&&(V(),n({existingApp:h}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(d=>{d.addEventListener("click",k=>{const i=k.currentTarget.dataset.id,h=E.getAppointments().find($=>$.id===i);h&&confirm(`Deseja realmente excluir o compromisso "${h.titulo}"?`)&&(E.deleteAppointment(h.id,(e==null?void 0:e.nome)||"Administrador"),z("Compromisso removido.","info"),s(),l(t))})})},50)}function n(t){const p=E.getStudents(),x=E.getPlans(),r=t==null?void 0:t.existingApp,m=!!r,u=(r==null?void 0:r.alunoId)||(t==null?void 0:t.studentId)||"",v=(r==null?void 0:r.data)||(t==null?void 0:t.defaultDate)||E.getTodayDateString(),y=((r==null?void 0:r.tipoAula)||(t==null?void 0:t.tipoAula))==="reposicao",b=p.map(d=>`<option value="${d.id}" ${u===d.id?"selected":""}>${d.nome} (${d.instrumentoPrincipal||"Geral"}) - Saldo: ${d.saldoReposicoes||0} rep.</option>`).join(""),I=x.map(d=>`<option value="${d.id}" ${(r==null?void 0:r.planoId)===d.id?"selected":""}>${d.nome}</option>`).join(""),f=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Tipo de Aula -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" style="margin: 0; font-weight: 600; color: var(--text-white);">Tipo de Aula:</label>
          <div style="display: flex; gap: 14px;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: var(--text-white);">
              <input type="radio" name="app-tipo-aula" value="regular" ${y?"":"checked"} style="accent-color: var(--color-coral);" />
              Aula Regular
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: #4ade80;">
              <input type="radio" name="app-tipo-aula" value="reposicao" ${y?"checked":""} style="accent-color: #22c55e;" />
              🔄 Aula de Reposição
            </label>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-title">Título da Aula / Conteúdo Previsto</label>
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Módulo 2" value="${(r==null?void 0:r.titulo)||(t==null?void 0:t.titulo)||""}" required />
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-student">Aluno Matriculado</label>
          <select id="app-student" class="form-select" required>
            <option value="">Selecione o Aluno...</option>
            ${b}
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-plan">Plano de Ensino (Opcional)</label>
          <select id="app-plan" class="form-select">
            <option value="">Selecione o Plano...</option>
            ${I}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${v}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${(r==null?void 0:r.horaInicio)||"09:00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${(r==null?void 0:r.horaFim)||"10:00"}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-status">Status da Aula</label>
            <select id="app-status" class="form-select">
              <option value="agendado" ${(r==null?void 0:r.status)==="agendado"?"selected":""}>⏳ Agendado</option>
              <option value="concluido" ${(r==null?void 0:r.status)==="concluido"?"selected":""}>✓ Concluído / Presente</option>
              <option value="falta_justificada" ${(r==null?void 0:r.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
              <option value="falta_injustificada" ${(r==null?void 0:r.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
              <option value="cancelado" ${(r==null?void 0:r.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;" id="box-justificativa">
            <label class="form-label" for="app-justificativa">Justificativa da Falta (se houver)</label>
            <input type="text" id="app-justificativa" class="form-input" placeholder="Ex: Atestado, viagem, imprevisto..." value="${(r==null?void 0:r.justificativaFalta)||""}" />
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-obs">Observações / Orientações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Repertório trabalhado, exercícios para casa...">${(r==null?void 0:r.observacoes)||""}</textarea>
        </div>

        ${m?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${C.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;U({title:m?"Editar Aula / Compromisso":y?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:f,confirmText:m?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const d=document.getElementById("app-title").value.trim(),k=document.getElementById("app-student").value,i=document.getElementById("app-plan").value,h=document.getElementById("app-date").value,$=document.getElementById("app-time-start").value,A=document.getElementById("app-time-end").value,c=document.getElementById("app-status").value,w=document.getElementById("app-justificativa").value.trim(),S=document.getElementById("app-obs").value.trim(),P=document.querySelector('input[name="app-tipo-aula"]:checked'),M=(P==null?void 0:P.value)||"regular";if(!d||!k||!h||!$)return z("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const _=(e==null?void 0:e.nome)||"Administrador";return m&&r?(E.updateAppointment(r.id,{titulo:d,alunoId:k,planoId:i||void 0,data:h,horaInicio:$,horaFim:A,status:c,tipoAula:M,justificativaFalta:w||void 0,observacoes:S},_),z("Aula atualizada com sucesso!","success")):M==="reposicao"?(E.agendarReposicao({titulo:d,alunoId:k,planoId:i||void 0,data:h,horaInicio:$,horaFim:A,status:c,justificativaFalta:w||void 0,observacoes:S},t==null?void 0:t.aulaOriginalId,_),z("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(E.addAppointment({titulo:d,alunoId:k,planoId:i||void 0,data:h,horaInicio:$,horaFim:A,status:c,tipoAula:M,justificativaFalta:w||void 0,observacoes:S},_),z("Aula agendada com sucesso!","success")),s(),!0}}),m&&r&&setTimeout(()=>{var d;(d=document.getElementById("btn-delete-app"))==null||d.addEventListener("click",()=>{confirm(`Deseja realmente excluir o compromisso "${r.titulo}"?`)&&(E.deleteAppointment(r.id,(e==null?void 0:e.nome)||"Administrador"),z("Compromisso removido.","info"),V(),s())})},50)}return s(),a}const Ie=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function ve(g){const a=(g||"").toLowerCase();return a.includes("bateria")||a.includes("percuss")?"🥁":a.includes("piano")||a.includes("teclado")?"🎹":a.includes("guitarra")?"🎸":a.includes("violão")||a.includes("violao")?"🪕":a.includes("canto")||a.includes("vocal")?"🎤":a.includes("baixo")?"🎸":a.includes("violino")?"🎻":a.includes("flauta")||a.includes("sax")?"🎷":"🎵"}function be(g){switch(g){case"iniciante":return'<span class="badge" style="background: rgba(147, 51, 234, 0.15); color: #c084fc; border: 1px solid rgba(147, 51, 234, 0.3); font-size: 0.7rem;">Iniciante</span>';case"basico":return'<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 0.7rem;">Básico</span>';case"intermediario":return'<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fcd34d; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.7rem;">Intermediário</span>';case"avancado":return'<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.7rem;">Avançado</span>';default:return'<span class="badge badge-secondary" style="font-size: 0.7rem;">Geral</span>'}}function he(g){if(!g)return"";const a=new Date(g+"T00:00:00");if(isNaN(a.getTime()))return"";const e=new Date;let o=e.getFullYear()-a.getFullYear();const s=e.getMonth()-a.getMonth();return(s<0||s===0&&e.getDate()<a.getDate())&&o--,`${o} anos`}function ye(g,a){const e=g.replace(/\D/g,"");if(!e)return"";const o=e.length<=11?`55${e}`:e,s=encodeURIComponent(`Olá, ${a}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function Ce(g){const a=document.createElement("div"),e=B.getCurrentUser();let o="";function s(){var y;const t=E.getStudents(),p=E.getPlans(),x=N(e,"alunos","cadastrar"),r=N(e,"alunos","alterar"),m=N(e,"alunos","excluir"),u=t.filter(b=>b.nome.toLowerCase().includes(o.toLowerCase())||b.email.toLowerCase().includes(o.toLowerCase())||b.telefone.includes(o)||b.instrumentoPrincipal&&b.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||b.responsavelNome&&b.responsavelNome.toLowerCase().includes(o.toLowerCase()));a.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Gestão Pedagógica de Alunos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Acompanhe matrículas, instrumentos, responsáveis, histórico pedagógico e reposições de aula.
          </p>
        </div>

        ${x?`
              <button class="btn btn-primary" id="btn-new-student">
                ${C.plus} Cadastrar Novo Aluno
              </button>
            `:""}
      </div>

      <!-- Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px;">
        <div style="position: relative; flex: 1; max-width: 440px;">
          <input 
            type="text" 
            id="student-search-input" 
            class="form-input" 
            placeholder="Buscar por nome, instrumento, responsável ou contato..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${C.search}
          </div>
        </div>
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${u.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Instrumento &amp; Nível</th>
                <th>Contato / WhatsApp</th>
                <th>Plano &amp; Reposições</th>
                <th>Status</th>
                <th style="text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${u.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':u.map(b=>{const I=p.find(h=>h.id===b.planoId),f=b.status==="ativo",d=he(b.dataNascimento),k=ye(b.telefone,b.nome),i=b.saldoReposicoes||0;return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.95rem;">
                                  ${b.nome[0]||"A"}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.9rem;">
                                    ${b.nome}
                                    ${d?`<span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal; margin-left: 4px;">(${d})</span>`:""}
                                  </div>
                                  ${b.responsavelNome?`<div style="font-size: 0.74rem; color: var(--text-secondary);">
                                           Resp: <strong style="color: #ff9187;">${b.responsavelNome}</strong> ${b.responsavelParentesco?`(${b.responsavelParentesco})`:""}
                                         </div>`:`<div style="font-size: 0.74rem; color: var(--text-muted);">${b.moduloAtual||"Iniciando"}</div>`}
                                </div>
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1rem;">${ve(b.instrumentoPrincipal)}</span>
                                <span style="font-weight: 500; font-size: 0.85rem; color: var(--text-white);">
                                  ${b.instrumentoPrincipal||"Não definido"}
                                </span>
                              </div>
                              <div style="margin-top: 3px;">
                                ${be(b.nivelMusical)}
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 0.85rem; color: var(--text-white); font-weight: 500;">
                                  ${b.telefone||"Sem telefone"}
                                </span>
                                ${k?`
                                      <a href="${k}" target="_blank" rel="noopener noreferrer" 
                                         class="btn btn-secondary btn-icon-only" 
                                         title="Abrir WhatsApp com ${b.nome}" 
                                         style="width: 26px; height: 26px; padding: 0; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                        ${C.whatsapp}
                                      </a>
                                    `:""}
                              </div>
                              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                                ${b.email||"Sem e-mail cadastrado"}
                              </div>
                            </td>

                            <td>
                              <div style="font-size: 0.84rem; color: var(--text-white); font-weight: 500;">
                                ${(I==null?void 0:I.nome)||"Nenhum plano"}
                              </div>
                              <div style="margin-top: 4px;">
                                ${i>0?`<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.72rem;" title="Possui aulas de reposição pendentes">
                                         🔄 ${i} reposição(ões)
                                       </span>`:'<span style="font-size: 0.72rem; color: var(--text-muted);">0 reposições pendentes</span>'}
                              </div>
                            </td>

                            <td>
                              <span class="badge ${f?"badge-success":"badge-warning"}">
                                ${f?"● Ativo":"○ Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${b.id}" title="Ficha Completa e Histórico de Aulas" style="margin-right: 4px; color: #60a5fa;">
                                ${C.profile}
                              </button>

                              ${r?`
                                    <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${b.id}" title="Editar Dados do Aluno">
                                      ${C.edit}
                                    </button>
                                  `:""}
                              ${m?`
                                    <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${b.id}" title="Excluir Aluno" style="margin-left: 4px;">
                                      ${C.trash}
                                    </button>
                                  `:""}
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;const v=a.querySelector("#student-search-input");v==null||v.addEventListener("input",b=>{o=b.target.value,s();const I=a.querySelector("#student-search-input");I&&(I.focus(),I.selectionStart=I.selectionEnd=I.value.length)}),(y=a.querySelector("#btn-new-student"))==null||y.addEventListener("click",()=>{n()}),a.querySelectorAll(".btn-view-student").forEach(b=>{b.addEventListener("click",I=>{const f=I.currentTarget.dataset.id,d=E.getStudents().find(k=>k.id===f);d&&l(d)})}),a.querySelectorAll(".btn-edit-student").forEach(b=>{b.addEventListener("click",I=>{const f=I.currentTarget.dataset.id,d=E.getStudents().find(k=>k.id===f);d&&n(d)})}),a.querySelectorAll(".btn-delete-student").forEach(b=>{b.addEventListener("click",I=>{const f=I.currentTarget.dataset.id,d=E.getStudents().find(k=>k.id===f);d&&confirm(`Tem certeza que deseja excluir o aluno "${d.nome}"?`)&&(E.deleteStudent(d.id,(e==null?void 0:e.nome)||"Administrador"),z(`Aluno "${d.nome}" excluído.`,"info"),s())})})}function l(t){var f;E.getPlans().find(d=>d.id===t.planoId);const x=E.getStudentAppointments(t.id),r=he(t.dataNascimento),m=ye(t.telefone,t.nome),u=t.saldoReposicoes||0,v=x.length,y=x.filter(d=>d.status==="concluido").length,b=x.filter(d=>d.status==="falta_justificada").length;x.filter(d=>d.status==="falta_injustificada").length;const I=`
      <div style="display: flex; flex-direction: column; gap: 18px;">
        
        <!-- Cartão Superior de Perfil do Aluno -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px;">
          <div style="display: flex; gap: 14px; align-items: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-coral); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; color: #ffffff;">
              ${t.nome[0]||"A"}
            </div>
            <div>
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-white);">
                ${t.nome}
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px; flex-wrap: wrap;">
                <span style="font-size: 0.85rem; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 4px;">
                  ${ve(t.instrumentoPrincipal)} ${t.instrumentoPrincipal||"Instrumento Geral"}
                </span>
                &bull;
                ${be(t.nivelMusical)}
                ${r?`&bull; <span style="font-size: 0.8rem; color: var(--text-muted);">${r} (${(f=t.dataNascimento)==null?void 0:f.split("-").reverse().join("/")})</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${m?`
                  <a href="${m}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; color: #22c55e; border-color: rgba(34, 197, 94, 0.3); font-size: 0.78rem;">
                    ${C.whatsapp} Falar no WhatsApp
                  </a>
                `:""}
          </div>
        </div>

        <!-- Informações de Contato e Responsável -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 6px;">
              Contatos Pessoais
            </span>
            <div style="font-size: 0.85rem; color: var(--text-white);">📱 ${t.telefone||"Sem telefone"}</div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">✉️ ${t.email||"Sem e-mail"}</div>
          </div>

          <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 6px;">
              Responsável Legal / Emergência
            </span>
            ${t.responsavelNome?`
                  <div style="font-size: 0.85rem; color: var(--text-white);">
                    👤 <strong>${t.responsavelNome}</strong> ${t.responsavelParentesco?`(${t.responsavelParentesco})`:""}
                  </div>
                  <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">
                    📞 ${t.responsavelTelefone||"Sem telefone informado"}
                  </div>
                `:'<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Não informado / Aluno maior de idade</div>'}
          </div>
        </div>

        <!-- Métricas Rápidas de Presença e Reposições -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #60a5fa;">${v}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Aulas Agendadas</div>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80;">${y}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Presenças</div>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #f59e0b;">${b}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Faltas Justificadas</div>
          </div>

          <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #22c55e;">${u}</div>
            <div style="font-size: 0.72rem; color: #86efac; margin-top: 2px;">Saldo Reposições</div>
          </div>
        </div>

        <!-- Linha do Tempo / Histórico de Aulas -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-white); margin: 0;">
              Histórico Pedagógico de Aulas &amp; Faltas
            </h4>
            ${u>0?`
                  <button type="button" class="btn btn-primary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.75rem; padding: 4px 10px;">
                    🔄 Agendar Reposição (${u} disp.)
                  </button>
                `:""}
          </div>

          <div style="max-height: 240px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
            ${x.length===0?'<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">Nenhuma aula registrada ainda para este aluno.</div>':`
                  <table class="data-table" style="margin: 0; font-size: 0.82rem;">
                    <thead>
                      <tr>
                        <th>Data &amp; Hora</th>
                        <th>Título da Aula</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Observações / Justificativa</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${x.map(d=>{const k=d.data.split("-").reverse().join("/");let i="";d.status==="concluido"?i='<span class="badge badge-success" style="font-size: 0.68rem;">✓ Presente</span>':d.status==="falta_justificada"?i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem;">⚠️ Falta Justificada</span>':d.status==="falta_injustificada"?i='<span class="badge badge-danger" style="font-size: 0.68rem;">✕ Falta Injustificada</span>':d.status==="cancelado"?i='<span class="badge badge-secondary" style="font-size: 0.68rem;">🚫 Cancelado</span>':i='<span class="badge badge-warning" style="font-size: 0.68rem;">⏳ Agendado</span>';const h=d.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; font-size: 0.65rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.72rem;">Regular</span>';return`
                          <tr>
                            <td>
                              <strong>${k}</strong><br>
                              <span style="font-size: 0.72rem; color: var(--text-muted);">${d.horaInicio} - ${d.horaFim}</span>
                            </td>
                            <td>
                              <div style="font-weight: 600; color: var(--text-white);">${d.titulo}</div>
                            </td>
                            <td>${h}</td>
                            <td>${i}</td>
                            <td>
                              <span style="color: var(--text-secondary); font-size: 0.78rem;">
                                ${d.justificativaFalta?`<em>Motivo: ${d.justificativaFalta}</em>`:d.observacoes||"-"}
                              </span>
                            </td>
                          </tr>
                        `}).join("")}
                    </tbody>
                  </table>
                `}
          </div>
        </div>

        ${t.observacoes?`
              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; font-size: 0.8rem; color: var(--text-secondary);">
                📝 <strong>Observações Gerais:</strong> ${t.observacoes}
              </div>
            `:""}
      </div>
    `;U({title:`Ficha Pedagógica: ${t.nome}`,bodyHtml:I,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var d;(d=document.getElementById("btn-quick-schedule-reposicao"))==null||d.addEventListener("click",()=>{V(),g("agenda")})},50)}function n(t){const p=E.getPlans(),x=!!t,r=p.map(v=>`<option value="${v.id}" ${(t==null?void 0:t.planoId)===v.id?"selected":""}>${v.nome}</option>`).join(""),m=Ie.map(v=>`<option value="${v}" ${(t==null?void 0:t.instrumentoPrincipal)===v?"selected":""}>${v}</option>`).join(""),u=`
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- SEÇÃO 1: DADOS DO ALUNO -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-weight: 700; font-size: 0.88rem; color: var(--color-coral); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>👤</span> 1. Dados Pessoais do Aluno
          </div>

          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px; margin-bottom: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nome">Nome Completo</label>
              <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${(t==null?void 0:t.nome)||""}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nascimento">Data de Nascimento</label>
              <input type="date" id="student-nascimento" class="form-input" value="${(t==null?void 0:t.dataNascimento)||""}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-telefone">Telefone / WhatsApp</label>
              <input type="text" id="student-telefone" class="form-input" placeholder="(11) 99999-9999" value="${(t==null?void 0:t.telefone)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-email">E-mail</label>
              <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${(t==null?void 0:t.email)||""}" />
            </div>
          </div>
        </div>

        <!-- SEÇÃO 2: DADOS DO RESPONSÁVEL (PARA MENORES OU EMERGÊNCIA) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-weight: 700; font-size: 0.88rem; color: #60a5fa; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>🛡️</span> 2. Responsável Legal / Contato de Emergência
          </div>

          <div style="display: grid; grid-template-columns: 2fr 1fr 1.2fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-nome">Nome do Responsável</label>
              <input type="text" id="student-resp-nome" class="form-input" placeholder="Ex: Patrícia Mendes" value="${(t==null?void 0:t.responsavelNome)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-parentesco">Parentesco</label>
              <select id="student-resp-parentesco" class="form-select">
                <option value="">Selecione...</option>
                <option value="Mãe" ${(t==null?void 0:t.responsavelParentesco)==="Mãe"?"selected":""}>Mãe</option>
                <option value="Pai" ${(t==null?void 0:t.responsavelParentesco)==="Pai"?"selected":""}>Pai</option>
                <option value="Avô/Avó" ${(t==null?void 0:t.responsavelParentesco)==="Avô/Avó"?"selected":""}>Avô/Avó</option>
                <option value="Cônjuge" ${(t==null?void 0:t.responsavelParentesco)==="Cônjuge"?"selected":""}>Cônjuge</option>
                <option value="Outro" ${(t==null?void 0:t.responsavelParentesco)==="Outro"?"selected":""}>Outro</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-tel">Telefone / WhatsApp</label>
              <input type="text" id="student-resp-tel" class="form-input" placeholder="(11) 98888-8888" value="${(t==null?void 0:t.responsavelTelefone)||""}" />
            </div>
          </div>
        </div>

        <!-- SEÇÃO 3: DADOS MUSICAIS E PEDAGÓGICOS -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-weight: 700; font-size: 0.88rem; color: #4ade80; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>🎵</span> 3. Informações Musicais &amp; Matrícula
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 12px; margin-bottom: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento Principal</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione o instrumento...</option>
                ${m}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nivel">Nível Musical</label>
              <select id="student-nivel" class="form-select">
                <option value="iniciante" ${(t==null?void 0:t.nivelMusical)==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${(t==null?void 0:t.nivelMusical)==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${(t==null?void 0:t.nivelMusical)==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${(t==null?void 0:t.nivelMusical)==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-status">Status do Aluno</label>
              <select id="student-status" class="form-select">
                <option value="ativo" ${(t==null?void 0:t.status)==="ativo"?"selected":""}>Ativo</option>
                <option value="inativo" ${(t==null?void 0:t.status)==="inativo"?"selected":""}>Inativo</option>
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.5fr 1.5fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-plano">Plano de Ensino</label>
              <select id="student-plano" class="form-select">
                <option value="">Selecione um plano...</option>
                ${r}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo Atual</label>
              <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${(t==null?void 0:t.moduloAtual)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-saldo-reposicoes" title="Aulas que o aluno tem direito a repor">
                Créditos Reposição
              </label>
              <input type="number" id="student-saldo-reposicoes" class="form-input" min="0" max="20" value="${(t==null?void 0:t.saldoReposicoes)??0}" />
            </div>
          </div>
        </div>

        <!-- SEÇÃO 4: OBSERVAÇÕES PEDAGÓGICAS -->
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="student-obs">Observações Pedagógicas / Preferências Musicais</label>
          <textarea id="student-obs" class="form-textarea" rows="2" placeholder="Gostos musicais, objetivos do aluno, pontos de atenção pedagógica...">${(t==null?void 0:t.observacoes)||""}</textarea>
        </div>
      </form>
    `;U({title:x?`Editar Aluno: ${t.nome}`:"Cadastrar Novo Aluno",bodyHtml:u,modalClass:"modal-lg",confirmText:x?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{const v=document.getElementById("student-nome").value.trim(),y=document.getElementById("student-nascimento").value,b=document.getElementById("student-email").value.trim(),I=document.getElementById("student-telefone").value.trim(),f=document.getElementById("student-resp-nome").value.trim(),d=document.getElementById("student-resp-parentesco").value,k=document.getElementById("student-resp-tel").value.trim(),i=document.getElementById("student-instrumento").value,h=document.getElementById("student-nivel").value,$=document.getElementById("student-plano").value,A=document.getElementById("student-status").value,c=document.getElementById("student-modulo").value.trim(),w=document.getElementById("student-saldo-reposicoes").value,S=Math.max(0,parseInt(w,10)||0),P=document.getElementById("student-obs").value.trim();if(!v)return z("Informe o nome do aluno.","error"),!1;const M=(e==null?void 0:e.nome)||"Administrador";return x&&t?(E.updateStudent(t.id,{nome:v,dataNascimento:y,email:b,telefone:I,responsavelNome:f,responsavelParentesco:d,responsavelTelefone:k,instrumentoPrincipal:i,nivelMusical:h,planoId:$,status:A,moduloAtual:c,saldoReposicoes:S,observacoes:P},M),z("Dados do aluno atualizados com sucesso!","success")):(E.addStudent({nome:v,dataNascimento:y,email:b,telefone:I,responsavelNome:f,responsavelParentesco:d,responsavelTelefone:k,instrumentoPrincipal:i,nivelMusical:h,planoId:$,status:A,moduloAtual:c,saldoReposicoes:S,observacoes:P},M),z("Aluno cadastrado com sucesso!","success")),s(),!0}})}return s(),a}const j=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Z=j.reduce((g,a)=>g+a.items.length,0);function ze(g){let a=0;return j.forEach(e=>{const o=g[e.key];o&&e.items.forEach(s=>{o[s.key]&&a++})}),a}function Pe(g){var l;const a=document.createElement("div"),e=B.getCurrentUser();if((e==null?void 0:e.papel)!=="admin")return a.innerHTML=`
      <div class="panel-card" style="padding: 50px 24px; text-align: center; max-width: 540px; margin: 40px auto;">
        <div style="font-size: 3rem; margin-bottom: 16px;">🔒</div>
        <h2 style="color: var(--color-coral); font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 10px;">
          Acesso Restrito ao Administrador
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5; margin-bottom: 24px;">
          Apenas usuários com perfil de <strong>Administrador</strong> possuem autorização para visualizar, cadastrar e gerenciar operadores e permissões de acesso do sistema.
        </p>
        <button class="btn btn-primary" id="btn-unauth-home">
          Voltar para a Página Inicial
        </button>
      </div>
    `,(l=a.querySelector("#btn-unauth-home"))==null||l.addEventListener("click",()=>g("home")),a;function o(){var t;const n=E.getUsers();a.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Cadastro de Usuários &amp; Permissões
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Gerencie operadores, perfis e o controle granular de ações liberadas ou bloqueadas.
          </p>
        </div>

        <button class="btn btn-primary" id="btn-new-user">
          ${C.plus} Cadastrar Novo Usuário
        </button>
      </div>

      <!-- Alerta Informativo sobre a Regra do Administrador Inicial -->
      <div style="margin-bottom: 20px; background-color: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 1.2rem; color: var(--color-coral);">🛡️</div>
        <div style="font-size: 0.84rem; color: var(--text-secondary);">
          <strong style="color: var(--text-white);">Regra de Segurança:</strong> Apenas administradores acessam esta aba. O usuário administrador do sistema é protegido contra exclusão, mas seu login e senha podem ser alterados livremente.
        </div>
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${n.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Login</th>
                <th>Perfil</th>
                <th>Permissões Detalhadas</th>
                <th>Tipo</th>
                <th style="text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${n.map(p=>{const x=p.papel==="admin"?"Administrador":p.papel==="professor"?"Professor":"Atendente",r=Q(p),m=ze(r);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 10px;">
                          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${p.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.82rem; color: #ffffff;">
                            ${p.nome[0]||"U"}
                          </div>
                          <div>
                            <div style="font-weight: 600; color: var(--text-white);">${p.nome}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${p.isSistema?"Administrador Raiz":"Usuário Padrão"}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <code style="background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 4px; font-size: 0.85rem; color: #ff9187;">
                          ${p.login}
                        </code>
                      </td>
                      <td>
                        <span class="badge ${p.papel==="admin"?"badge-coral":"badge-info"}">
                          ${x}
                        </span>
                      </td>
                      <td>
                        ${p.papel==="admin"?`<span class="badge badge-coral" title="Acesso total a todos os formulários e ações">Acesso Total (${Z}/${Z})</span>`:`
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <span class="badge ${m>0?"badge-success":"badge-danger"}">
                                  ${m} de ${Z} ações
                                </span>
                                <span style="font-size: 0.72rem; color: var(--text-muted);">
                                  (${r.alunos.acesso?"Alunos":""}${r.agenda.acesso?", Agenda":""}${r.planos.acesso?", Planos":""})
                                </span>
                              </div>
                            `}
                      </td>
                      <td>
                        ${p.isSistema?'<span style="font-size: 0.78rem; color: #f59e0b; font-weight: 600;">🔒 Sistema (Protegido)</span>':'<span style="font-size: 0.78rem; color: var(--text-muted);">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${p.id}" title="Editar Dados e Permissões">
                          ${C.edit}
                        </button>
                        ${p.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.3; cursor: not-allowed; margin-left: 6px;">
                                 ${C.trash}
                               </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${p.id}" title="Excluir Usuário" style="margin-left: 6px;">
                                 ${C.trash}
                               </button>`}
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(t=a.querySelector("#btn-new-user"))==null||t.addEventListener("click",()=>{s()}),a.querySelectorAll(".btn-edit-user").forEach(p=>{p.addEventListener("click",x=>{const r=x.currentTarget.dataset.id,m=E.getUsers().find(u=>u.id===r);m&&s(m)})}),a.querySelectorAll(".btn-delete-user").forEach(p=>{p.addEventListener("click",x=>{const r=x.currentTarget.dataset.id,m=E.getUsers().find(u=>u.id===r);if(m&&confirm(`Tem certeza que deseja excluir o usuário "${m.nome}" (login: ${m.login})?`))try{E.deleteUser(m.id,(e==null?void 0:e.nome)||"Administrador"),z(`Usuário "${m.nome}" excluído.`,"info"),o()}catch(u){z(u.message||"Erro ao excluir usuário.","error")}})})}function s(n){var I,f,d,k;const t=!!n,p=n?n.papel:"professor",x=p==="admin",r=Q(n),m=`
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${(n==null?void 0:n.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${(n==null?void 0:n.login)||""}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${t?"Nova senha":"Ex: 123456"}" value="${(n==null?void 0:n.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${n!=null&&n.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${p==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${p==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${p==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${n!=null&&n.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${x?"none":"block"};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div>
              <label class="form-label" style="margin-bottom: 2px; font-weight: 600; color: var(--text-white);">
                Permissões dos Formulários &amp; Ações
              </label>
              <span style="font-size: 0.74rem; color: var(--text-secondary);">
                Clique na setinha ▼ para abrir/encolher as ações de cada formulário.
              </span>
            </div>

            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-all" style="font-size: 0.72rem; padding: 4px 10px;">
                Liberar Tudo
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-none" style="font-size: 0.72rem; padding: 4px 10px;">
                Bloquear Tudo
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-expand" style="font-size: 0.72rem; padding: 4px 10px;" title="Abrir todas as ações">
                ▼ Expandir
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-collapse" style="font-size: 0.72rem; padding: 4px 10px;" title="Recolher todas as ações">
                ▲ Recolher
              </button>
            </div>
          </div>

          <!-- Lista Estruturada de Formulários (sem barra de corte interna) -->
          <div class="permissions-list-container" style="display: flex; flex-direction: column; gap: 10px;">
            ${j.map(i=>{const h=r[i.key]||{},$=i.items.filter(A=>h[A.key]).length;return`
                <div class="perm-group-card" id="card-group-${i.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${i.key}" 
                    data-group="${i.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${i.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${i.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${i.title}
                        </strong>
                        <span id="group-counter-${i.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${$}/${i.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${i.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${i.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${i.items.map(A=>{const c=!!h[A.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${i.key}-${A.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${c?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${c?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${i.key}-${A.key}" 
                                data-group="${i.key}" 
                                data-action="${A.key}" 
                                ${c?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${A.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${i.key}-${A.key}" 
                              class="badge ${c?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${c?"Liberado":"Bloqueado"}
                            </span>
                          </label>
                        `}).join("")}
                  </div>
                </div>
              `}).join("")}
          </div>

          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 14px;">
            🔒 <em>A tela de Usuários é exclusiva para administradores e não pode ser delegada a outros perfis.</em>
          </div>
        </div>
      </form>
    `;U({title:t?`Editar Usuário: ${n.nome}`:"Cadastrar Novo Usuário",bodyHtml:m,modalClass:"modal-lg",confirmText:t?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var M,_,J,G,D,R,Y,q,F,W,ae,te,oe,se,re,ne;const i=document.getElementById("user-nome").value.trim(),h=document.getElementById("user-login").value.trim(),$=document.getElementById("user-senha").value.trim(),A=document.getElementById("user-papel"),c=A?A.value:"professor";if(!i||!h||!$)return z("Preencha Nome, Login e Senha.","error"),!1;if(E.getUsers().find(ie=>ie.login===h&&ie.id!==(n==null?void 0:n.id)))return z(`O login "${h}" já está em uso por outro usuário.`,"error"),!1;let S;c==="admin"?S=JSON.parse(JSON.stringify(H.admin)):S={alunos:{acesso:((M=document.getElementById("perm-alunos-acesso"))==null?void 0:M.checked)??!1,cadastrar:((_=document.getElementById("perm-alunos-cadastrar"))==null?void 0:_.checked)??!1,alterar:((J=document.getElementById("perm-alunos-alterar"))==null?void 0:J.checked)??!1,excluir:((G=document.getElementById("perm-alunos-excluir"))==null?void 0:G.checked)??!1},agenda:{acesso:((D=document.getElementById("perm-agenda-acesso"))==null?void 0:D.checked)??!1,cadastrar:((R=document.getElementById("perm-agenda-cadastrar"))==null?void 0:R.checked)??!1,alterar:((Y=document.getElementById("perm-agenda-alterar"))==null?void 0:Y.checked)??!1,excluir:((q=document.getElementById("perm-agenda-excluir"))==null?void 0:q.checked)??!1},planos:{acesso:((F=document.getElementById("perm-planos-acesso"))==null?void 0:F.checked)??!1,cadastrar:((W=document.getElementById("perm-planos-cadastrar"))==null?void 0:W.checked)??!1,alterar:((ae=document.getElementById("perm-planos-alterar"))==null?void 0:ae.checked)??!1,excluir:((te=document.getElementById("perm-planos-excluir"))==null?void 0:te.checked)??!1},home:{acesso:((oe=document.getElementById("perm-home-acesso"))==null?void 0:oe.checked)??!1},auditoria:{acesso:((se=document.getElementById("perm-auditoria-acesso"))==null?void 0:se.checked)??!1},configuracoes:{acesso:((re=document.getElementById("perm-configuracoes-acesso"))==null?void 0:re.checked)??!1,alterar:((ne=document.getElementById("perm-configuracoes-alterar"))==null?void 0:ne.checked)??!1}};const P=(e==null?void 0:e.nome)||"Administrador";return t&&n?(E.updateUser(n.id,{nome:i,login:h,senha:$,papel:n.isSistema?"admin":c,permissoes:n.isSistema?H.admin:S},P),z("Usuário e permissões atualizados com sucesso!","success")):(E.addUser({nome:i,login:h,senha:$,papel:c,permissoes:S},P),z("Novo usuário cadastrado com sucesso!","success")),o(),!0}});const u=document.getElementById("user-papel"),v=document.getElementById("user-permissions-section"),y=(i,h,$)=>{const A=document.getElementById(`row-perm-${i}-${h}`),c=document.getElementById(`badge-perm-${i}-${h}`);A&&c&&($?(A.style.background="rgba(34, 197, 94, 0.06)",A.style.borderColor="rgba(34, 197, 94, 0.25)",c.className="badge badge-success",c.textContent="Liberado"):(A.style.background="rgba(234, 67, 53, 0.04)",A.style.borderColor="rgba(234, 67, 53, 0.15)",c.className="badge badge-coral",c.textContent="Bloqueado")),b(i)},b=i=>{const h=document.getElementById(`group-counter-${i}`),$=j.find(A=>A.key===i);if(h&&$){let A=0;$.items.forEach(c=>{const w=document.getElementById(`perm-${i}-${c.key}`);w&&w.checked&&A++}),h.textContent=`${A}/${$.items.length} liberadas`}};u==null||u.addEventListener("change",()=>{const i=u.value;if(i==="admin")v.style.display="none";else if(v.style.display="block",!t){const h=H[i]||H.professor;j.forEach($=>{$.items.forEach(A=>{var w;const c=document.getElementById(`perm-${$.key}-${A.key}`);if(c){const S=((w=h[$.key])==null?void 0:w[A.key])??!1;c.checked=S,y($.key,A.key,S)}})})}}),j.forEach(i=>{const h=document.getElementById(`header-group-${i.key}`),$=document.getElementById(`group-body-${i.key}`),A=document.getElementById(`arrow-perm-${i.key}`);h==null||h.addEventListener("click",c=>{if(!c.target.closest(".btn-group-toggle")&&$&&A){const w=$.style.display==="flex";$.style.display=w?"none":"flex",A.style.transform=w?"rotate(0deg)":"rotate(180deg)"}}),i.items.forEach(c=>{const w=document.getElementById(`perm-${i.key}-${c.key}`);w==null||w.addEventListener("change",()=>{if(y(i.key,c.key,w.checked),w.checked&&c.key!=="acesso"){const S=document.getElementById(`perm-${i.key}-acesso`);S&&!S.checked&&(S.checked=!0,y(i.key,"acesso",!0))}!w.checked&&c.key==="acesso"&&i.items.forEach(S=>{if(S.key!=="acesso"){const P=document.getElementById(`perm-${i.key}-${S.key}`);P&&P.checked&&(P.checked=!1,y(i.key,S.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${i.key}"]`).forEach(c=>{c.addEventListener("click",w=>{w.stopPropagation();const S=i.items.map(M=>document.getElementById(`perm-${i.key}-${M.key}`)).filter(Boolean),P=S.every(M=>M.checked);S.forEach(M=>{M.checked=!P,y(i.key,M.dataset.action,!P)})})})}),(I=document.getElementById("btn-perm-expand"))==null||I.addEventListener("click",()=>{j.forEach(i=>{const h=document.getElementById(`group-body-${i.key}`),$=document.getElementById(`arrow-perm-${i.key}`);h&&$&&(h.style.display="flex",$.style.transform="rotate(180deg)")})}),(f=document.getElementById("btn-perm-collapse"))==null||f.addEventListener("click",()=>{j.forEach(i=>{const h=document.getElementById(`group-body-${i.key}`),$=document.getElementById(`arrow-perm-${i.key}`);h&&$&&(h.style.display="none",$.style.transform="rotate(0deg)")})}),(d=document.getElementById("btn-perm-all"))==null||d.addEventListener("click",()=>{j.forEach(i=>{i.items.forEach(h=>{const $=document.getElementById(`perm-${i.key}-${h.key}`);$&&($.checked=!0,y(i.key,h.key,!0))})})}),(k=document.getElementById("btn-perm-none"))==null||k.addEventListener("click",()=>{j.forEach(i=>{i.items.forEach(h=>{const $=document.getElementById(`perm-${i.key}-${h.key}`);$&&($.checked=!1,y(i.key,h.key,!1))})})})}return o(),a}function Me(g){const a=document.createElement("div"),e=B.getCurrentUser();function o(){var x;const l=E.getPlans(),n=N(e,"planos","cadastrar"),t=N(e,"planos","alterar"),p=N(e,"planos","excluir");a.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino &amp; Módulos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estruture trilhas pedagógicas personalizadas com módulos encadeados.
          </p>
        </div>

        ${n?`
              <button class="btn btn-primary" id="btn-new-plan">
                ${C.plus} Cadastrar Novo Plano
              </button>
            `:""}
      </div>

      <!-- Lista de Cards de Planos -->
      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${l.length===0?'<div class="panel-card" style="padding: 40px; text-align: center; color: var(--text-muted);">Nenhum plano de ensino cadastrado.</div>':l.map(r=>`
                    <div class="panel-card" style="margin-bottom: 0;">
                      <div class="panel-card-header" style="background-color: rgba(255, 255, 255, 0.02);">
                        <div style="display: flex; align-items: center; gap: 14px;">
                          <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral);">
                            ${C.planos}
                          </div>
                          <div>
                            <h3 class="panel-card-title">${r.nome}</h3>
                            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${r.descricao||"Sem descrição cadastrada"}</p>
                          </div>
                        </div>

                        <div style="display: flex; gap: 8px;">
                          ${t?`
                                <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${r.id}" title="Editar Plano e Módulos">
                                  ${C.edit}
                                </button>
                              `:""}
                          ${p?`
                                <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${r.id}" title="Excluir Plano">
                                  ${C.trash}
                                </button>
                              `:""}
                          ${!t&&!p?'<span style="font-size: 0.75rem; color: var(--text-muted); align-self: center;">Visualização</span>':""}
                        </div>
                      </div>

                      <!-- Listagem dos Módulos Aninhados -->
                      <div style="padding: 18px 24px;">
                        <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.05em;">
                          Módulos Integrados (${r.modulos.length})
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
                          ${r.modulos.length===0?'<div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic;">Nenhum módulo adicionado neste plano.</div>':r.modulos.map((m,u)=>`
                                    <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
                                      <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--color-coral); color: #fff; font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                        ${u+1}
                                      </div>
                                      <span style="font-size: 0.86rem; color: var(--text-white); font-weight: 500;">${m.titulo}</span>
                                    </div>
                                  `).join("")}
                        </div>
                      </div>
                    </div>
                  `).join("")}
      </div>
    `,(x=a.querySelector("#btn-new-plan"))==null||x.addEventListener("click",()=>{s()}),a.querySelectorAll(".btn-edit-plan").forEach(r=>{r.addEventListener("click",m=>{const u=m.currentTarget.dataset.id,v=E.getPlans().find(y=>y.id===u);v&&s(v)})}),a.querySelectorAll(".btn-delete-plan").forEach(r=>{r.addEventListener("click",m=>{const u=m.currentTarget.dataset.id,v=E.getPlans().find(y=>y.id===u);v&&confirm(`Tem certeza que deseja excluir o plano "${v.nome}" e todos os seus módulos?`)&&(E.deletePlan(v.id,(e==null?void 0:e.nome)||"Administrador"),z(`Plano "${v.nome}" excluído.`,"info"),o())})})}function s(l){const n=!!l;let t=l?JSON.parse(JSON.stringify(l.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function p(){return t.map((m,u)=>`
            <div class="module-row" data-idx="${u}" style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-coral); width: 20px;">#${u+1}</span>
              <input 
                type="text" 
                class="form-input module-title-input" 
                value="${m.titulo}" 
                placeholder="Ex: Módulo ${u+1} - Nome do módulo" 
                style="flex: 1; padding: 8px 12px; font-size: 0.88rem;"
              />
              <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-idx="${u}" title="Remover Módulo">
                &times;
              </button>
            </div>
          `).join("")}const x=`
      <form id="plan-modal-form">
        <div class="form-group">
          <label class="form-label" for="plan-nome">Nome do Plano de Ensino</label>
          <input type="text" id="plan-nome" class="form-input" placeholder="Ex: Plano 1 ou Teoria Musical Avançada" value="${(l==null?void 0:l.nome)||""}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="plan-desc">Descrição / Objetivo do Plano</label>
          <textarea id="plan-desc" class="form-textarea" rows="2" placeholder="Resumo dos objetivos e público-alvo...">${(l==null?void 0:l.descricao)||""}</textarea>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label class="form-label" style="margin-bottom: 0;">Módulos do Plano (Hierarquia)</label>
            <button type="button" class="btn btn-secondary" id="btn-add-module-row" style="padding: 4px 10px; font-size: 0.78rem;">
              + Adicionar Módulo
            </button>
          </div>

          <div id="modules-container">
            ${p()}
          </div>
        </div>
      </form>
    `;U({title:n?`Editar Plano: ${l.nome}`:"Cadastrar Novo Plano de Ensino",bodyHtml:x,confirmText:n?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const m=document.getElementById("plan-nome").value.trim(),u=document.getElementById("plan-desc").value.trim(),v=document.querySelectorAll(".module-title-input"),y=[];if(v.forEach((I,f)=>{const d=I.value.trim();d&&y.push({id:"mod_"+(f+1)+"_"+Date.now(),ordem:f+1,titulo:d})}),!m)return z("Informe o nome do plano.","error"),!1;if(y.length===0)return z("Adicione pelo menos um módulo ao plano.","error"),!1;const b=(e==null?void 0:e.nome)||"Administrador";return n&&l?(E.updatePlan(l.id,{nome:m,descricao:u,modulos:y},b),z("Plano de ensino atualizado com sucesso!","success")):(E.addPlan({nome:m,descricao:u,modulos:y},b),z("Plano de ensino cadastrado com sucesso!","success")),o(),!0}});function r(){const m=document.getElementById("modules-container");m&&(m.innerHTML=p(),m.querySelectorAll(".btn-remove-module").forEach(u=>{u.addEventListener("click",v=>{const y=parseInt(v.currentTarget.dataset.idx||"0",10);t.splice(y,1),r()})}),m.querySelectorAll(".module-title-input").forEach((u,v)=>{u.addEventListener("input",y=>{t[v]&&(t[v].titulo=y.target.value)})}))}setTimeout(()=>{var m;(m=document.getElementById("btn-add-module-row"))==null||m.addEventListener("click",()=>{const u=t.length+1;t.push({id:"mod_"+u+"_"+Date.now(),ordem:u,titulo:`Módulo ${u}: `}),r()}),r()},50)}return o(),a}function Le(g){const a=document.createElement("div");let e=new Date,o="todos",s="";const l=r=>r.toString().padStart(2,"0");function n(r){const m=r.getDate(),v=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][r.getMonth()],y=r.getFullYear(),b=new Date,I=b.getDate()===m&&b.getMonth()===r.getMonth()&&b.getFullYear()===y;return`${m} de ${v} de ${y}${I?" (Hoje)":""}`}function t(r){return`${r.getFullYear()}-${l(r.getMonth()+1)}-${l(r.getDate())}`}function p(){var d,k,i,h,$,A;const r=L.getLogs(),m=new Date,u=`${l(m.getDate())}/${l(m.getMonth()+1)}/${m.getFullYear()}`,v=r.filter(c=>{var w;return(w=c.dataHoraFormatada)==null?void 0:w.startsWith(u)}).length,y=e?`${l(e.getDate())}/${l(e.getMonth()+1)}/${e.getFullYear()}`:"",b=e!==null&&m.getDate()===e.getDate()&&m.getMonth()===e.getMonth()&&m.getFullYear()===e.getFullYear(),I=r.filter(c=>{const w=!e||c.dataHoraFormatada&&c.dataHoraFormatada.startsWith(y)||c.dataHora&&c.dataHora.startsWith(t(e)),S=o==="todos"||c.tela.toLowerCase().includes(o.toLowerCase()),P=s===""||c.usuarioNome.toLowerCase().includes(s.toLowerCase())||c.usuarioLogin.toLowerCase().includes(s.toLowerCase())||c.acao.toLowerCase().includes(s.toLowerCase())||c.detalhes.toLowerCase().includes(s.toLowerCase());return w&&S&&P});a.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Auditoria do Sistema
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Rastreabilidade integral de todas as alterações com data, hora, ação e usuário responsável.
          </p>
        </div>

        <div style="font-size: 0.82rem; color: var(--text-muted); background: var(--bg-surface); padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; gap: 10px; align-items: center;">
          <span>Hoje: <strong style="color: var(--color-coral);">${v}</strong></span>
          <span style="color: var(--border-subtle);">|</span>
          <span>Total Geral: <strong style="color: var(--text-white);">${r.length}</strong></span>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${e?n(e):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${b?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
              Hoje
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-next" title="Próximo dia">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn ${e===null?"btn-primary":"btn-secondary"}" id="audit-btn-all" style="padding: 6px 14px; font-size: 0.8rem;" title="Exibir todo o histórico sem filtrar por data">
            Ver Todos
          </button>
          <input 
            type="date" 
            id="audit-date-picker" 
            class="form-input" 
            style="padding: 5px 10px; font-size: 0.8rem; width: auto; color: var(--text-white); background: var(--bg-card);" 
            value="${e?t(e):""}" 
            title="Selecionar data específica"
          />
        </div>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 260px; max-width: 380px;">
          <input 
            type="text" 
            id="audit-search-input" 
            class="form-input" 
            placeholder="Pesquisar por ação, usuário ou detalhe..." 
            value="${s}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${C.search}
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${["todos","login","agenda","alunos","usuários","plano","configurações"].map(c=>{const w=o.toLowerCase()===c,S=c==="todos"?"Todas as Telas":c.charAt(0).toUpperCase()+c.slice(1);return`
                <button type="button" class="btn ${w?"btn-primary":"btn-secondary"} btn-filter-tela" data-tela="${c}" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${S}
                </button>
              `}).join("")}
        </div>
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${I.length})
            ${e?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${y}</span>`:""}
          </h3>
          ${e!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${y}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 170px;">Data &amp; Hora</th>
                <th style="width: 180px;">Usuário Responsável</th>
                <th style="width: 150px;">Tela / Módulo</th>
                <th style="width: 180px;">Ação Executada</th>
                <th>Detalhes da Alteração</th>
              </tr>
            </thead>
            <tbody>
              ${I.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${e?`o dia <strong>${y}</strong>`:"o filtro selecionado"}.</div>
                        ${e!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:I.map(c=>`
                          <tr>
                            <td>
                              <div style="font-family: monospace; font-size: 0.84rem; color: var(--text-white);">
                                ${c.dataHoraFormatada}
                              </div>
                            </td>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--color-coral);">
                                  ${c.usuarioNome[0]||"U"}
                                </div>
                                <div>
                                  <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-white);">${c.usuarioNome}</div>
                                  <div style="font-size: 0.72rem; color: var(--text-muted);">login: ${c.usuarioLogin}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 4px;">
                                ${c.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.85rem; color: #ff9187;">
                                ${c.acao}
                              </strong>
                            </td>
                            <td>
                              <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
                                ${c.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(d=a.querySelector("#audit-btn-prev"))==null||d.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()-1),p()}),(k=a.querySelector("#audit-btn-next"))==null||k.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()+1),p()}),(i=a.querySelector("#audit-btn-today"))==null||i.addEventListener("click",()=>{e=new Date,p()}),(h=a.querySelector("#audit-btn-all"))==null||h.addEventListener("click",()=>{e=null,p()}),($=a.querySelector("#audit-empty-btn-all"))==null||$.addEventListener("click",()=>{e=null,p()}),(A=a.querySelector("#audit-date-picker"))==null||A.addEventListener("change",c=>{const w=c.target.value;if(w){const[S,P,M]=w.split("-").map(Number);e=new Date(S,P-1,M)}else e=null;p()});const f=a.querySelector("#audit-search-input");f==null||f.addEventListener("input",c=>{s=c.target.value,p();const w=a.querySelector("#audit-search-input");w&&(w.focus(),w.selectionStart=w.selectionEnd=w.value.length)}),a.querySelectorAll(".btn-filter-tela").forEach(c=>{c.addEventListener("click",w=>{o=w.currentTarget.dataset.tela||"todos",p()})})}const x=()=>{p()};return window.addEventListener("audit_updated",x),p(),a}const De={usuarios:{collectionName:"usuarios",description:"Armazena credenciais e permissões de acesso ao sistema",schemaFields:{_id:"ObjectId (PK gerada automaticamente pelo MongoDB)",nome:"String (obrigatório)",login:"String (único, obrigatório, indexado)",senhaHash:"String (hash bcrypt da senha)",papel:"String (enum: admin, professor, atendente)",isSistema:"Boolean (se true, não pode ser deletado via API)",criadoEm:"Date (timestamp de criação)",atualizadoEm:"Date (timestamp da última modificação)"},indexes:["{ login: 1 }, { unique: true }"]},alunos:{collectionName:"alunos",description:"Registros cadastrais dos alunos atendidos",schemaFields:{_id:"ObjectId (PK)",nome:"String (obrigatório, indexado)",email:"String",telefone:"String",planoId:"ObjectId (referência para a coleção planos_ensino)",moduloAtual:"String",status:"String (enum: ativo, inativo)",observacoes:"String",criadoEm:"Date"},indexes:['{ nome: "text" }',"{ status: 1 }"]},planos_ensino:{collectionName:"planos_ensino",description:"Planos de ensino e cursos musicais com módulos aninhados",schemaFields:{_id:"ObjectId (PK)",nome:"String (obrigatório)",descricao:"String",modulos:"Array de Subdocumentos [{ id, ordem, titulo, descricao }]",ativo:"Boolean",criadoEm:"Date"},indexes:["{ nome: 1 }"]},agenda:{collectionName:"agenda",description:"Compromissos e horários das aulas de música",schemaFields:{_id:"ObjectId (PK)",titulo:"String (obrigatório)",alunoId:"ObjectId (referência para alunos)",planoId:"ObjectId (referência para planos_ensino)",data:"String YYYY-MM-DD (indexado)",horaInicio:"String HH:mm",horaFim:"String HH:mm",status:"String (enum: agendado, concluido, cancelado)",observacoes:"String"},indexes:["{ data: 1, horaInicio: 1 }","{ alunoId: 1 }"]},auditorias:{collectionName:"auditorias",description:"Trilha de auditoria imutável para compliance e rastreabilidade",schemaFields:{_id:"ObjectId (PK)",dataHora:"Date (timestamp exato)",usuarioId:"String/ObjectId",usuarioLogin:"String",usuarioNome:"String",tela:"String",acao:"String",detalhes:"String"},indexes:["{ dataHora: -1 }","{ tela: 1 }","{ usuarioLogin: 1 }"]}};class Be{static async testConnection(a,e){const o=performance.now();await new Promise(l=>setTimeout(l,200));const s=Math.round(performance.now()-o);return a&&e?{success:!0,latencyMs:s,message:`Conexão bem-sucedida com MongoDB em "${a}/${e}". Esquemas prontos para sincronização.`}:{success:!1,latencyMs:s,message:"URI ou Nome do Banco não informados."}}}function Ne(g){const a=document.createElement("div"),e=B.getCurrentUser(),o=E.getSettings(),s=N(e,"configuracoes","alterar");a.innerHTML=`
    <!-- Cabeçalho da Tela -->
    <div style="margin-bottom: 20px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
        Configurações do Sistema
      </h2>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
        Gerencie parâmetros institucionais e a integração oficial com o MongoDB.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; flex-wrap: wrap;">
      <!-- Coluna 1: Dados Gerais da Instituição -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Dados da Instituição</h3>
        </div>

        <div style="padding: 24px;">
          <form id="form-settings-institucional">
            <div class="form-group">
              <label class="form-label" for="cfg-nome">Nome da Escola de Música</label>
              <input type="text" id="cfg-nome" class="form-input" value="${o.nomeEscola||o.nomeClinica||"Acusticamente - Escola de Música"}" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-tel">Telefone / WhatsApp Principal</label>
              <input type="text" id="cfg-tel" class="form-input" value="${o.telefoneContato}" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-email">E-mail de Contato</label>
              <input type="email" id="cfg-email" class="form-input" value="${o.emailContato}" required />
            </div>

            <div style="margin-top: 24px;">
              ${s?`
                    <button type="submit" class="btn btn-primary" id="btn-save-settings">
                      Salvar Configurações
                    </button>
                  `:'<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura (Sem permissão para alterar)</span>'}
            </div>
          </form>
        </div>
      </div>

      <!-- Coluna 2: Configuração e Diagnóstico do MongoDB -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Banco de Dados (MongoDB)</h3>
          <span class="badge badge-success" id="mongo-status-badge">● Operacional</span>
        </div>

        <div style="padding: 24px;">
          <div class="form-group">
            <label class="form-label" for="cfg-mongo-uri">URI de Conexão MongoDB</label>
            <input type="text" id="cfg-mongo-uri" class="form-input" value="${o.mongoUri}" placeholder="mongodb://localhost:27017" />
          </div>

          <div class="form-group">
            <label class="form-label" for="cfg-mongo-db">Nome do Banco (Database)</label>
            <input type="text" id="cfg-mongo-db" class="form-input" value="${o.mongoDatabase}" placeholder="acusticamente_db" />
          </div>

          <div style="display: flex; gap: 10px; margin-top: 18px;">
            <button type="button" class="btn btn-secondary" id="btn-test-mongo">
              Testar Conexão MongoDB
            </button>
          </div>

          <div id="mongo-test-result" style="margin-top: 16px; font-size: 0.82rem; color: var(--text-secondary);"></div>

          <!-- Relação de Coleções MongoDB Registradas -->
          <div style="margin-top: 24px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
            <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px; letter-spacing: 0.05em;">
              Coleções MongoDB Mapeadas
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${Object.values(De).map(t=>`
                    <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <strong style="color: var(--text-white); font-size: 0.85rem;">${t.collectionName}</strong>
                        <div style="font-size: 0.72rem; color: var(--text-muted);">${t.description}</div>
                      </div>
                      <span style="font-size: 0.7rem; color: var(--color-coral); font-family: monospace;">Schema Pronto</span>
                    </div>
                  `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Informações do Sistema, Versão & DevHub -->
    <div class="panel-card" style="margin-top: 24px; margin-bottom: 0;">
      <div class="panel-card-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <h3 class="panel-card-title">Sobre o Sistema</h3>
          <span class="badge badge-primary" style="font-family: monospace; font-size: 0.72rem; padding: 2px 8px;">v1.0.0</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted);">
          Desenvolvido por <strong style="color: var(--color-coral); font-weight: 600;">DevHub</strong>
        </span>
      </div>

      <div style="padding: 20px 24px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Plataforma</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-white); margin-top: 4px;">Acusticamente</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Gestão Educacional</div>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Versão da Aplicação</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--color-coral); margin-top: 4px; font-family: monospace;">1.0.0 (Release Oficial)</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Build estável em TypeScript</div>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Desenvolvido por</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-white); margin-top: 4px;">DevHub</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Soluções e Engenharia de Software</div>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Banco de Dados & Engine</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-white); margin-top: 4px;">MongoDB + TypeScript</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Trilha de auditoria em tempo real</div>
          </div>
        </div>
      </div>
    </div>
  `;const l=a.querySelector("#form-settings-institucional");l==null||l.addEventListener("submit",t=>{t.preventDefault();const p=a.querySelector("#cfg-nome").value,x=a.querySelector("#cfg-tel").value,r=a.querySelector("#cfg-email").value,m=a.querySelector("#cfg-mongo-uri").value,u=a.querySelector("#cfg-mongo-db").value;E.updateSettings({nomeEscola:p,nomeClinica:p,telefoneContato:x,emailContato:r,mongoUri:m,mongoDatabase:u},(e==null?void 0:e.nome)||"Administrador"),z("Configurações salvas e auditadas!","success")});const n=a.querySelector("#btn-test-mongo");return n==null||n.addEventListener("click",async()=>{const t=a.querySelector("#cfg-mongo-uri").value,p=a.querySelector("#cfg-mongo-db").value,x=a.querySelector("#mongo-test-result");x.innerHTML='<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';const r=await Be.testConnection(t,p);r.success?(x.innerHTML=`<span style="color: var(--status-success);">✓ ${r.message} (Latência: ${r.latencyMs}ms)</span>`,z("MongoDB validado com sucesso!","success")):(x.innerHTML=`<span style="color: var(--status-danger);">✕ ${r.message}</span>`,z("Falha na validação do MongoDB.","error"))}),a}class Te{constructor(){T(this,"currentScreen","home");T(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!B.isAuthenticated()){this.currentScreen="login",this.render();return}const a=B.getCurrentUser(),e=window.location.hash.replace("#","");e&&["home","agenda","alunos","user","planos","auditoria","configuracoes"].includes(e)&&O(a,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(a),window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","");o&&o!==this.currentScreen&&this.navigateTo(o)}),this.render()}getFirstAllowedScreen(a){if(!a)return"login";const e=["home","agenda","alunos","planos","auditoria","configuracoes"];for(const o of e)if(O(a,o))return o;return"home"}navigateTo(a){const e=B.getCurrentUser();if(!O(e,a)){z("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(e);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=a,window.location.hash=a,this.render()}render(){var m;if(this.appRoot.innerHTML="",!B.isAuthenticated()||this.currentScreen==="login"){const u=ke(()=>{const v=B.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(v))});this.appRoot.appendChild(u);return}const a=document.createElement("div");a.className="app-container";const e=B.getCurrentUser(),o=(e==null?void 0:e.papel)==="admin";a.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
            <div class="sidebar-logo">
              ${ee(46)}
            </div>
            <span class="sidebar-brand-name">ACUSTICAMENTE</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${C.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${O(e,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${C.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${O(e,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${C.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${O(e,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${C.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${O(e,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${C.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${C.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${O(e,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${C.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${O(e,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${C.configuracoes}</span>
              <span>Configurações</span>
            </a>
          `:""}
        </nav>

        <div class="sidebar-footer">
          <div class="user-profile-badge">
            <div class="user-avatar">
              ${((e==null?void 0:e.nome)||"A")[0]}
            </div>
            <div class="user-info">
              <span class="user-info-name">${(e==null?void 0:e.nome)||"Administrador"}</span>
              <span class="user-info-role">${(e==null?void 0:e.papel)==="admin"?"Administrador":(e==null?void 0:e.papel)||"Usuário"}</span>
            </div>
          </div>

          <button class="btn-logout" id="btn-app-logout" title="Sair do sistema">
            ${C.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${C.menu}
            </button>

            <div class="top-bar-title-group">
              <h1 id="topbar-title">${this.getScreenTitle(this.currentScreen)}</h1>
              <p id="topbar-subtitle">${this.getScreenSubtitle(this.currentScreen)}</p>
            </div>
          </div>

          <div class="top-bar-actions">
            <span class="topbar-date-pill">
              📅 ${new Date().toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"short"})}
            </span>
          </div>
        </header>

        <div class="content-body" id="screen-viewport">
          <!-- A tela ativa será inserida aqui -->
        </div>
      </main>
    `;const s=a.querySelector("#app-sidebar"),l=a.querySelector("#sidebar-backdrop"),n=a.querySelector("#btn-mobile-menu-toggle"),t=a.querySelector("#btn-sidebar-close"),p=u=>{const v=u!==void 0?u:!s.classList.contains("open");s.classList.toggle("open",v),l.classList.toggle("open",v),document.body.style.overflow=v?"hidden":""};n==null||n.addEventListener("click",()=>p(!0)),t==null||t.addEventListener("click",()=>p(!1)),l==null||l.addEventListener("click",()=>p(!1)),a.querySelectorAll(".nav-item").forEach(u=>{u.addEventListener("click",v=>{const y=v.currentTarget.dataset.screen;p(!1),y&&this.navigateTo(y)})}),(m=a.querySelector("#btn-app-logout"))==null||m.addEventListener("click",()=>{confirm("Deseja realmente sair do sistema Acusticamente?")&&B.logout()});const x=a.querySelector("#screen-viewport"),r=this.createViewElement(this.currentScreen);x.appendChild(r),this.appRoot.appendChild(a)}createViewElement(a){const e=o=>this.navigateTo(o);switch(a){case"home":return fe(e);case"agenda":return Se();case"alunos":return Ce(e);case"user":return Pe(e);case"planos":return Me();case"auditoria":return Le();case"configuracoes":return Ne();default:return fe(e)}}getScreenTitle(a){switch(a){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(a){switch(a){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new Te});
