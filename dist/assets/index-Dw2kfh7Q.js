var _e=Object.defineProperty;var Ve=(E,e,t)=>e in E?_e(E,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):E[e]=t;var le=(E,e,t)=>Ve(E,typeof e!="symbol"?e+"":e,t);import{E as Te,a as De}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const S of l.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&o(S)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const Be="acusticamente_audit_logs";class He{constructor(){le(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Be);e?this.logs=JSON.parse(e):this.log({usuarioId:"1",usuarioLogin:"1",usuarioNome:"Administrador",tela:"Sistema",acao:"Inicialização do Sistema",detalhes:"Base de dados inicializada com usuário administrador padrão (1)."})}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Be,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,o=S=>S.toString().padStart(2,"0"),s=`${o(t.getDate())}/${o(t.getMonth()+1)}/${t.getFullYear()} ${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`,l={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(l),this.saveLogs(),window.dispatchEvent(new CustomEvent("audit_updated",{detail:l})),l}getLogs(){return[...this.logs]}clearLogs(){this.logs=[],this.saveLogs()}}const U=new He,ke="acusticamente_users",we="acusticamente_students",Ie="acusticamente_plans",$e="acusticamente_appointments",ze="acusticamente_settings",Ee="acusticamente_payments";class Ue{constructor(){le(this,"users",[]);le(this,"students",[]);le(this,"plans",[]);le(this,"appointments",[]);le(this,"payments",[]);le(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",website:"www.acusticamente.com.br",cep:"01310-100",logradouro:"Avenida Paulista",numero:"1000",complemento:"Conjunto 42",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});this.initData()}initData(){const e=localStorage.getItem(ke);e?this.users=JSON.parse(e).map(a=>{var P,g;return{...a,permissoes:{...a.permissoes,financeiro:((P=a.permissoes)==null?void 0:P.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((g=a.permissoes)==null?void 0:g.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Ie);t?this.plans=JSON.parse(t):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(we);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[{id:"aluno_1",nome:"Lucas Silveira",email:"lucas@email.com",telefone:"(11) 98231-1122",dataNascimento:"2014-05-14",instrumentoPrincipal:"Bateria",nivelMusical:"iniciante",responsavelNome:"Cláudia Silveira",responsavelTelefone:"(11) 98111-2233",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 2: Discriminação de Timbres",saldoReposicoes:1,valorMensalidade:280,diaVencimento:10,status:"ativo",observacoes:"Apresenta grande facilidade com ritmo.",criadoEm:new Date().toISOString()},{id:"aluno_2",nome:"Mariana Duarte",email:"mariana.duarte@email.com",telefone:"(11) 97123-4567",dataNascimento:"2008-09-21",instrumentoPrincipal:"Violão",nivelMusical:"basico",responsavelNome:"Roberto Duarte",responsavelTelefone:"(11) 97111-0000",responsavelParentesco:"Pai",planoId:"plano_2",moduloAtual:"Módulo 1: Primeiros Acordes e Levadas",saldoReposicoes:0,valorMensalidade:260,diaVencimento:20,status:"ativo",observacoes:"Iniciando estudos no violão popular.",criadoEm:new Date().toISOString()},{id:"aluno_3",nome:"Gabriel Santos",email:"gabriel.s@email.com",telefone:"(11) 99345-6789",dataNascimento:"1998-03-10",instrumentoPrincipal:"Piano & Teclado",nivelMusical:"intermediario",planoId:"plano_3",moduloAtual:"Módulo 1: Digitação e Postura",saldoReposicoes:0,valorMensalidade:320,diaVencimento:10,status:"ativo",observacoes:"Excelente dedicação nas aulas de piano.",criadoEm:new Date().toISOString()},{id:"aluno_4",nome:"Beatriz Costa",email:"beatriz.costa@email.com",telefone:"(11) 96543-2109",dataNascimento:"2015-11-05",instrumentoPrincipal:"Técnica Vocal / Canto",nivelMusical:"iniciante",responsavelNome:"Ana Costa",responsavelTelefone:"(11) 96500-1122",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 3: Harmonia Básica e Canto",saldoReposicoes:2,valorMensalidade:250,diaVencimento:5,status:"ativo",observacoes:"Foco no canto coral.",criadoEm:new Date().toISOString()}],this.saveStudents());const s=localStorage.getItem($e);if(s)this.appointments=JSON.parse(s);else{const a=this.getTodayDateString();this.appointments=[{id:"app_1",titulo:"Aula de Percepção Sonora",alunoId:"aluno_1",planoId:"plano_1",data:a,horaInicio:"08:30",horaFim:"09:30",status:"concluido",observacoes:"Exercícios rítmicos concluídos.",criadoEm:new Date().toISOString()},{id:"app_2",titulo:"Aula Prática de Violão",alunoId:"aluno_2",planoId:"plano_2",data:a,horaInicio:"10:00",horaFim:"11:00",status:"agendado",observacoes:"Praticar transição entre acordes maiores.",criadoEm:new Date().toISOString()},{id:"app_3",titulo:"Prática de Piano Módulo 1",alunoId:"aluno_3",planoId:"plano_3",data:a,horaInicio:"14:00",horaFim:"15:00",status:"agendado",observacoes:"Início da escala de Dó Maior.",criadoEm:new Date().toISOString()},{id:"app_4",titulo:"Percepção e Harmonia",alunoId:"aluno_4",planoId:"plano_1",data:a,horaInicio:"16:30",horaFim:"17:30",status:"agendado",observacoes:"Preparação para apresentação musical.",criadoEm:new Date().toISOString()}],this.saveAppointments()}const l=localStorage.getItem(ze);l&&(this.settings=JSON.parse(l));const S=localStorage.getItem(Ee);S?this.payments=JSON.parse(S):(this.payments=[{id:"pag_1",alunoId:"aluno_1",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:280,dataVencimento:"2026-08-10",dataPagamento:"2026-08-08",formaPagamento:"pix",status:"pago",observacoes:"Pago pontualmente via Chave Pix",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_2",alunoId:"aluno_1",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:280,dataVencimento:"2026-09-10",status:"atrasado",observacoes:"Venceu dia 10 e aguarda regularização",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_3",alunoId:"aluno_2",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:260,dataVencimento:"2026-09-20",status:"pendente",observacoes:"A vencer no dia 20",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_4",alunoId:"aluno_3",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:320,dataVencimento:"2026-09-10",dataPagamento:"2026-09-10",formaPagamento:"cartao_credito",status:"pago",observacoes:"Pago no balcão da escola",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_5",alunoId:"aluno_4",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:250,dataVencimento:"2026-08-05",dataPagamento:"2026-08-05",formaPagamento:"dinheiro",status:"pago",observacoes:"Comprovante emitido",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_6",alunoId:"aluno_4",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:250,dataVencimento:"2026-09-05",status:"atrasado",observacoes:"Mensalidade vencida dia 05",criadoEm:"2026-09-01T10:00:00.000Z"}],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(a=>{var P;(P=a.observacoes)!=null&&P.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var P;(P=a.titulo)!=null&&P.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=o=>o.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}async pushToCloud(e,t,o){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:o})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return!1;const t=await e.json();if(!t.success||!t.data)return!1;const o=t.data;return Array.isArray(o.students)&&o.students.length>0&&(this.students=o.students,localStorage.setItem(we,JSON.stringify(this.students))),Array.isArray(o.payments)&&o.payments.length>0&&(this.payments=o.payments,localStorage.setItem(Ee,JSON.stringify(this.payments))),Array.isArray(o.appointments)&&o.appointments.length>0&&(this.appointments=o.appointments,localStorage.setItem($e,JSON.stringify(this.appointments))),Array.isArray(o.plans)&&o.plans.length>0&&(this.plans=o.plans,localStorage.setItem(Ie,JSON.stringify(this.plans))),Array.isArray(o.users)&&o.users.length>0&&(this.users=o.users,localStorage.setItem(ke,JSON.stringify(this.users))),o.settings&&(this.settings={...this.settings,...o.settings},localStorage.setItem(ze,JSON.stringify(this.settings))),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],localStorage.setItem(we,JSON.stringify([])),localStorage.setItem(Ee,JSON.stringify([])),localStorage.setItem($e,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),U.log({tela:"Configurações",acao:"Zerar Cadastros de Teste",usuarioNome:e,detalhes:"Todos os alunos, aulas e lançamentos financeiros foram zerados para entrega do sistema."}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(ke,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(we,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Ie,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem($e,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Ee,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}saveSettings(){localStorage.setItem(ze,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const o={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(e,t,o){const s=this.users.findIndex(a=>a.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const l=this.users[s],S=l.isSistema;return this.users[s]={...l,...t,isSistema:S,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${l.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const o=this.users.find(s=>s.id===e);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(e,t){const o={...e,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(e,t,o){const s=this.students.findIndex(S=>S.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const l=this.students[s];return this.students[s]={...l,...t},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${l.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const o=this.students.find(s=>s.id===e);o&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const o={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(e,t,o){const s=this.plans.findIndex(S=>S.id===e);if(s===-1)throw new Error("Plano não encontrado.");const l=this.plans[s];return this.plans[s]={...l,...t},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${l.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const o=this.plans.find(s=>s.id===e);o&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(e,t){const o={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(e,t,o){const s=this.appointments.findIndex(S=>S.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const l=this.appointments[s];return this.appointments[s]={...l,...t},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${l.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const o=this.appointments.find(s=>s.id===e);o&&(this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(e,t){const o=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(e,t,o,s){const l=t?"falta_justificada":"falta_injustificada",S=this.updateAppointment(e,{status:l,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(g=>g.id===S.alunoId);let P=(a==null?void 0:a.saldoReposicoes)||0;return t&&a?(P=(a.saldoReposicoes||0)+1,a.saldoReposicoes=P,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${S.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${P}. Motivo: ${o||"Não especificado"}`})):!t&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${S.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:S,saldoReposicoes:P}}agendarReposicao(e,t,o){const s=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},o);if(t){const S=this.appointments.findIndex(a=>a.id===t);S!==-1&&(this.appointments[S].aulaReposicaoId=s.id,this.saveAppointments())}const l=this.students.find(S=>S.id===s.alunoId);return l&&typeof l.saldoReposicoes=="number"&&l.saldoReposicoes>0&&(l.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${l.nome}". 1 crédito abatido. Saldo restante: ${l.saldoReposicoes}.`})),s}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,o)=>{const s=`${t.data}T${t.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<e&&(o.status="atrasado",t=!0)}),t&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(o=>o.alunoId===e&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<t))}addPayment(e,t){const o=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<o&&(s="atrasado");const l={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(l),this.savePayments();const S=this.students.find(a=>a.id===l.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${l.descricao}" (R$ ${l.valor.toFixed(2)}) cadastrado para o aluno "${(S==null?void 0:S.nome)||"N/A"}" com vencimento em ${l.dataVencimento}.`}),l}darBaixaPayment(e,t,o,s,l){const S=this.payments.findIndex(c=>c.id===e);if(S===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[S],P=a.status;a.status="pago",a.dataPagamento=t,a.formaPagamento=o,l!==void 0&&(a.observacoes=l.trim()?l.trim():a.observacoes),this.savePayments();const g=this.students.find(c=>c.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(g==null?void 0:g.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${t} (Status anterior: ${P}).`}),a}updatePayment(e,t,o){const s=this.payments.findIndex(c=>c.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const l=this.getTodayDateString();let S=t.status||this.payments[s].status;const a=t.dataVencimento||this.payments[s].dataVencimento;S==="pendente"&&a<l&&(S="atrasado"),this.payments[s]={...this.payments[s],...t,status:S},this.savePayments();const P=this.payments[s],g=this.students.find(c=>c.id===P.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${P.descricao}" do aluno "${(g==null?void 0:g.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const o=this.payments.find(l=>l.id===e);if(!o)return;this.payments=this.payments.filter(l=>l.id!==e),this.savePayments();const s=this.students.find(l=>l.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,o){const s=A=>A.toString().padStart(2,"0"),l=`${e}-${s(t)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||l,P=this.students.filter(A=>A.status==="ativo");let g=0,c=0;return P.forEach(A=>{if(this.payments.some(f=>f.alunoId===A.id&&(f.mesReferencia===l||f.dataVencimento.startsWith(l)))){c++;return}const r=A.diaVencimento||10,p=new Date(e,t,0).getDate(),w=Math.min(r,p),b=`${e}-${s(t)}-${s(w)}`,i=typeof A.valorMensalidade=="number"&&A.valorMensalidade>0?A.valorMensalidade:280;this.addPayment({alunoId:A.id,descricao:`Mensalidade ${a}/${e}`,mesReferencia:l,valor:i,dataVencimento:b,status:"pendente",observacoes:`Gerado automaticamente para o plano ${A.moduloAtual||A.instrumentoPrincipal||"Música"}`},o),g++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${e}: ${g} mensalidade(s) criada(s) e ${c} já existente(s) pulada(s).`}),{criadas:g,puladas:c}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const k=new Ue,ge={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Ae(E){var s,l,S,a,P,g,c,A,M,r,p,w,b,i,f,v,I,u,C,L,n,m,$,d,y,F,V,_;if(!E)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(E.papel==="admin")return JSON.parse(JSON.stringify(ge.admin));const e=ge[E.papel]||ge.professor,t=E.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const o=z=>typeof z=="boolean";return{alunos:{acesso:o(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:o(t.alunos)?t.alunos:((l=t.alunos)==null?void 0:l.cadastrar)??e.alunos.cadastrar,alterar:o(t.alunos)?t.alunos:((S=t.alunos)==null?void 0:S.alterar)??e.alunos.alterar,excluir:o(t.alunos)?!1:((a=t.alunos)==null?void 0:a.excluir)??e.alunos.excluir},agenda:{acesso:o(t.agenda)?t.agenda:((P=t.agenda)==null?void 0:P.acesso)??e.agenda.acesso,cadastrar:o(t.agenda)?t.agenda:((g=t.agenda)==null?void 0:g.cadastrar)??e.agenda.cadastrar,alterar:o(t.agenda)?t.agenda:((c=t.agenda)==null?void 0:c.alterar)??e.agenda.alterar,excluir:o(t.agenda)?!1:((A=t.agenda)==null?void 0:A.excluir)??e.agenda.excluir},planos:{acesso:o(t.planos)?t.planos:((M=t.planos)==null?void 0:M.acesso)??e.planos.acesso,cadastrar:o(t.planos)?t.planos:((r=t.planos)==null?void 0:r.cadastrar)??e.planos.cadastrar,alterar:o(t.planos)?t.planos:((p=t.planos)==null?void 0:p.alterar)??e.planos.alterar,excluir:o(t.planos)?!1:((w=t.planos)==null?void 0:w.excluir)??e.planos.excluir},home:{acesso:o(t.home)?t.home:((b=t.home)==null?void 0:b.acesso)??e.home.acesso},financeiro:{acesso:o(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.acesso)??((f=e.financeiro)==null?void 0:f.acesso)??!1,cadastrar:o(t.financeiro)?t.financeiro:((v=t.financeiro)==null?void 0:v.cadastrar)??((I=e.financeiro)==null?void 0:I.cadastrar)??!1,alterar:o(t.financeiro)?t.financeiro:((u=t.financeiro)==null?void 0:u.alterar)??((C=e.financeiro)==null?void 0:C.alterar)??!1,excluir:o(t.financeiro)?!1:((L=t.financeiro)==null?void 0:L.excluir)??((n=e.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(t.relatorios)?t.relatorios:((m=t.relatorios)==null?void 0:m.acesso)??(($=e.relatorios)==null?void 0:$.acesso)??!0,gerar:o(t.relatorios)?t.relatorios:((d=t.relatorios)==null?void 0:d.gerar)??((y=e.relatorios)==null?void 0:y.gerar)??!0},auditoria:{acesso:o(t.auditoria)?t.auditoria:((F=t.auditoria)==null?void 0:F.acesso)??e.auditoria.acesso},configuracoes:{acesso:o(t.configuracoes)?t.configuracoes:((V=t.configuracoes)==null?void 0:V.acesso)??e.configuracoes.acesso,alterar:o(t.configuracoes)?t.configuracoes:((_=t.configuracoes)==null?void 0:_.alterar)??e.configuracoes.alterar}}}function de(E,e){if(!E)return!1;if(e==="login")return!0;if(e==="user")return E.papel==="admin";if(E.papel==="admin"||E.isSistema)return!0;const o=Ae(E)[e];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function Z(E,e,t){if(!E)return!1;if(E.papel==="admin")return!0;const s=Ae(E)[e];return s?!!s[t]:!1}const Se="acusticamente_active_session";class Je{constructor(){le(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(Se);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=k.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(Se,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=k.getUsers().find(l=>l.login===e.trim());return s?s.senha!==t.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Se,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Se),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const Y=new Je;function Ge(E=40){return`
    <svg width="${E}" height="${E}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function ue(E,e=40){return E&&E.trim()!==""?`<img src="${E}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:Ge(e)}function B(E,e="success"){const t=document.getElementById("toast-container");if(!t)return;const o=document.createElement("div");o.className=`toast toast-${e}`,o.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${E}</span>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function ie(E){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${E.modalClass||""}">
        <div class="modal-header">
          <h3>${E.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${E.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${E.cancelText||"Cancelar"}</button>
          ${E.confirmText?`<button type="button" class="btn ${E.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${E.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const t=document.getElementById("active-modal-backdrop"),o=document.getElementById("modal-close-btn"),s=document.getElementById("modal-cancel-btn"),l=document.getElementById("modal-confirm-btn"),S=()=>{e.innerHTML="",E.onCancel&&E.onCancel()};o.onclick=S,s.onclick=S,t.onclick=a=>{a.target===t&&S()},l&&E.onConfirm&&(l.onclick=async()=>{const a=document.querySelector(".modal-card");await E.onConfirm(a)!==!1&&(e.innerHTML="")})}function ve(){const E=document.getElementById("modal-container");E&&(E.innerHTML="")}function fe(E){ie({title:E.title||"Confirmar Exclusão",bodyHtml:`
      <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
          ⚠️
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
            ${E.message}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Esta operação não poderá ser desfeita.
          </div>
        </div>
      </div>
    `,confirmText:E.confirmText||"Excluir Definitivamente",confirmBtnClass:E.confirmBtnClass||"btn-danger",onConfirm:()=>(E.onConfirm(),!0)})}const R={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},Le="acusticamente_auth_remember",Fe="acusticamente_manual_logout";function Ye(E){const e=document.createElement("div");e.className="login-page";const t=k.getSettings(),o=t.nomeMenu||t.nomeFantasia||"Acusticamente";let s={username:"",password:"",remember:!1,autoLogin:!1};try{const g=localStorage.getItem(Le);g&&(s={...s,...JSON.parse(g)})}catch{s={username:"",password:"",remember:!1,autoLogin:!1}}e.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${ue(t.logotipoCustomizado,50)}
        </div>
        <h2>${o}</h2>
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
            ${ue(t.logotipoCustomizado,58)}
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
              value="${s.remember?s.username:""}"
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
              value="${s.remember?s.password:""}"
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
                ${s.remember?"checked":""} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Lembrar senha</span>
            </label>

            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-autologin" 
                ${s.autoLogin?"checked":""} 
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
  `;const l=e.querySelector("#login-remember"),S=e.querySelector("#login-autologin");S==null||S.addEventListener("change",()=>{S.checked&&!l.checked&&(l.checked=!0)}),l==null||l.addEventListener("change",()=>{!l.checked&&S.checked&&(S.checked=!1)});const a=e.querySelector("#login-form");a.onsubmit=g=>{var i;g.preventDefault();const c=e.querySelector("#login-username"),A=e.querySelector("#login-password"),M=c.value.trim(),r=A.value.trim(),p=l.checked,w=S.checked,b=Y.login(M,r);b.success?(p?localStorage.setItem(Le,JSON.stringify({username:M,password:r,remember:!0,autoLogin:w})):localStorage.removeItem(Le),sessionStorage.removeItem(Fe),B(`Bem-vindo, ${(i=b.user)==null?void 0:i.nome}!`,"success"),E()):B(b.message,"error")};const P=sessionStorage.getItem(Fe)==="true";return s.autoLogin&&s.remember&&s.username&&s.password&&!P&&setTimeout(()=>{var c;if(!e.isConnected&&!document.body.contains(e))return;const g=Y.login(s.username,s.password);g.success&&(B(`Bem-vindo de volta, ${(c=g.user)==null?void 0:c.nome}!`,"success"),E())},100),e}function Ne(E){var c,A;const e=document.createElement("div"),t=Y.getCurrentUser(),o=k.getStudents(),s=k.getPlans(),l=k.getAppointments(),S=k.getTodayDateString(),a=l.filter(M=>M.data===S),P=o.filter(M=>M.status==="ativo").length,g=a.find(M=>M.status==="agendado");return e.innerHTML=`
    <!-- Cabeçalho de Boas-vindas -->
    <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
      <div>
        <h2 style="font-family: var(--font-heading); font-size: 1.28rem; font-weight: 700; color: var(--text-white);">
          Olá, ${(t==null?void 0:t.nome)||"Administrador"}
        </h2>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 3px;">
          Aqui está o resumo das suas atividades e aulas de hoje.
        </p>
      </div>

      <button class="btn btn-primary" id="home-btn-new-appointment">
        ${R.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${R.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${a.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${R.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${P}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${R.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${g?g.horaInicio:"--:--"}</span>
          <span class="metric-label">${g?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${R.planos}
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
        <h3 class="panel-card-title">Aulas de Hoje (${a.length})</h3>
        <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
          Ver Agenda Completa
        </button>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="min-width: 100px;">Horário</th>
              <th>Aluno</th>
              <th class="col-hide-md">Plano de Ensino</th>
              <th class="col-hide-sm">Status</th>
              <th style="width: 100px; text-align: right;">Ações</th>
            </tr>
          </thead>
          <tbody id="today-classes-tbody">
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(M=>{const r=o.find(f=>f.id===M.alunoId),p=s.find(f=>f.id===M.planoId),w=M.status==="concluido",b=M.status==="agendado";let i='<span class="badge badge-warning">⏳ Agendado</span>';return w?i='<span class="badge badge-success">✓ Concluído</span>':M.status==="falta_justificada"?i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':M.status==="falta_injustificada"?i='<span class="badge badge-danger">✕ Falta Injustificada</span>':M.status==="cancelado"&&(i='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${M.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${M.horaInicio} - ${M.horaFim}</strong>
                            ${M.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                ${((r==null?void 0:r.nome)||"A")[0]}
                              </div>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${(r==null?void 0:r.nome)||"Aluno não vinculado"}
                              </span>
                            </div>
                          </td>
                          <td class="col-hide-md" style="white-space: nowrap;">
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(p==null?void 0:p.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${i}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${b?`<button class="btn btn-secondary btn-complete-class" data-id="${M.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${w?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(c=e.querySelector("#home-btn-new-appointment"))==null||c.addEventListener("click",()=>{E("agenda")}),(A=e.querySelector("#home-btn-view-all-agenda"))==null||A.addEventListener("click",()=>{E("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(M=>{M.addEventListener("click",r=>{const p=r.currentTarget.dataset.id;p&&(k.updateAppointment(p,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),B("Aula concluída com sucesso!","success"),E("home"))})}),e}function We(E){const e=document.createElement("div"),t=Y.getCurrentUser();let o=new Date;function s(){var I,u,C,L;const a=k.getStudents();k.getPlans();const P=k.getAppointments(),g=o.getFullYear(),c=o.getMonth(),A=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],M=new Date(g,c,1).getDay(),r=new Date(g,c+1,0).getDate(),p=new Date(g,c,0).getDate(),w=new Date,b=w.getFullYear()===g&&w.getMonth()===c,i=[];for(let n=M;n>0;n--){const m=p-n+1;i.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${m}</span>
          </div>
        </div>
      `)}for(let n=1;n<=r;n++){const m=z=>z.toString().padStart(2,"0"),$=`${g}-${m(c+1)}-${m(n)}`,d=b&&w.getDate()===n,y=P.filter(z=>z.data===$),F=y.slice(0,3).map(z=>{const h=a.find(O=>O.id===z.alunoId),T=h?h.nome.split(" ")[0]:"Aula";let D="",q="";return z.status==="concluido"?(D="concluido",q="✓ "):z.status==="falta_justificada"?(D="falta-justificada",q="⚠️ "):z.status==="falta_injustificada"?(D="falta-injustificada",q="✕ "):z.tipoAula==="reposicao"&&(D="reposicao",q="🔄 "),`
            <div class="calendar-appointment-badge ${D}" 
                 data-app-id="${z.id}" 
                 title="${z.horaInicio} - ${(h==null?void 0:h.nome)||"Aluno"} (${z.status}${z.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${q}${z.horaInicio}</strong> ${T}
            </div>
          `}).join(""),V=y.length>3?y.length-3:0,_=V>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${V} mais</div>`:"";i.push(`
        <div class="calendar-day-cell ${d?"today":""}" data-date="${$}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${y.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${y.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${F}
            ${_}
          </div>
        </div>
      `)}const f=i.length,v=f>35?42-f:35-f;for(let n=1;n<=v;n++)i.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
          </div>
        </div>
      `);e.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${A[c]} de ${g}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${b?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${Z(t,"agenda","cadastrar")?`
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${R.plus} Nova Aula / Compromisso
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

          ${i.join("")}
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
    `,(I=e.querySelector("#agenda-btn-prev"))==null||I.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(u=e.querySelector("#agenda-btn-next"))==null||u.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(C=e.querySelector("#agenda-btn-today"))==null||C.addEventListener("click",()=>{o=new Date,s()}),(L=e.querySelector("#agenda-btn-new-app"))==null||L.addEventListener("click",()=>{S()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",m=>{const $=n.dataset.date;$&&l($)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",m=>{m.stopPropagation();const $=n.dataset.appId,d=P.find(y=>y.id===$);d&&l(d.data)})})}function l(a){const P=k.getStudents(),g=k.getPlans(),c=k.getAppointments().filter(i=>i.data===a),[A,M,r]=a.split("-"),p=`${r}/${M}/${A}`,w=c.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${c.map(i=>{const f=P.find(y=>y.id===i.alunoId),v=g.find(y=>y.id===i.planoId),I=i.status==="concluido",u=i.status==="falta_justificada",C=i.status==="falta_injustificada",L=i.status==="cancelado",n=i.status==="agendado",m=i.tipoAula==="reposicao";let $="var(--color-coral)",d='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return I?($="var(--status-success)",d='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):u?($="#f59e0b",d='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):C?($="var(--status-danger)",d='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):L&&($="var(--border-subtle)",d='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${$};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${i.horaInicio} - ${i.horaFim}</strong>
                        ${d}
                        ${m?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${i.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(f==null?void 0:f.nome)||"Não vinculado"}</strong>
                        ${f!=null&&f.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${f.instrumentoPrincipal}</span>`:""}
                        ${v?` &bull; Plano: <span style="color: #ff9187;">${v.nome}</span>`:""}
                      </div>

                      ${i.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${i.justificativaFalta}
                             </div>`:""}

                      ${i.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${i.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${i.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${Z(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${i.id}" title="Editar Detalhes">
                              ${R.edit}
                            </button>
                          `:""}
                      ${Z(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${i.id}" title="Excluir">
                              ${R.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${Z(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${n?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${i.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${i.id}" data-name="${(f==null?void 0:f.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${i.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${u&&!i.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${i.id}" data-student-id="${i.alunoId}" data-title="${i.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,b=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${c.length}</strong>
          </span>
          ${Z(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${R.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${w}
      </div>
    `;ie({title:`Aulas do Dia: ${p}`,bodyHtml:b,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var i;(i=document.getElementById("btn-modal-new-appointment"))==null||i.addEventListener("click",()=>{ve(),S({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(f=>{f.addEventListener("click",v=>{const I=v.currentTarget.dataset.id;I&&(k.marcarPresenca(I,(t==null?void 0:t.nome)||"Administrador"),B("Presença confirmada e aula concluída!","success"),s(),l(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(f=>{f.addEventListener("click",v=>{const I=v.currentTarget.dataset.id,u=v.currentTarget.dataset.name;if(!I)return;const C=prompt(`Informe o motivo da falta justificada de ${u} (Ex: Atestado médico, Viagem em família):`);if(C===null)return;const L=k.registrarFalta(I,!0,C,(t==null?void 0:t.nome)||"Administrador");B(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${L.saldoReposicoes}).`,"success"),s(),l(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(f=>{f.addEventListener("click",v=>{const I=v.currentTarget.dataset.id;I&&fe({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{k.registrarFalta(I,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),B("Falta injustificada registrada.","info"),s(),l(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(f=>{f.addEventListener("click",v=>{const I=v.currentTarget,u=I.dataset.id,C=I.dataset.studentId,L=I.dataset.title;ve(),S({studentId:C,aulaOriginalId:u,tipoAula:"reposicao",titulo:L?`Reposição: ${L}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(f=>{f.addEventListener("click",v=>{const I=v.currentTarget.dataset.id,u=k.getAppointments().find(C=>C.id===I);u&&(ve(),S({existingApp:u}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(f=>{f.addEventListener("click",v=>{const I=v.currentTarget.dataset.id,u=k.getAppointments().find(C=>C.id===I);u&&fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${u.titulo}</strong>"?`,onConfirm:()=>{k.deleteAppointment(u.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),s(),l(a)}})})})},50)}function S(a){const P=k.getStudents(),g=k.getPlans(),c=a==null?void 0:a.existingApp,A=!!c,M=(c==null?void 0:c.alunoId)||(a==null?void 0:a.studentId)||"",r=(c==null?void 0:c.data)||(a==null?void 0:a.defaultDate)||k.getTodayDateString(),p=((c==null?void 0:c.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",w=P.map(f=>`<option value="${f.id}" ${M===f.id?"selected":""}>${f.nome} (${f.instrumentoPrincipal||"Geral"}) - Saldo: ${f.saldoReposicoes||0} rep.</option>`).join(""),b=g.map(f=>`<option value="${f.id}" ${(c==null?void 0:c.planoId)===f.id?"selected":""}>${f.nome}</option>`).join(""),i=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Tipo de Aula -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" style="margin: 0; font-weight: 600; color: var(--text-white);">Tipo de Aula:</label>
          <div style="display: flex; gap: 14px;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: var(--text-white);">
              <input type="radio" name="app-tipo-aula" value="regular" ${p?"":"checked"} style="accent-color: var(--color-coral);" />
              Aula Regular
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: #4ade80;">
              <input type="radio" name="app-tipo-aula" value="reposicao" ${p?"checked":""} style="accent-color: #22c55e;" />
              🔄 Aula de Reposição
            </label>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-title">Título da Aula / Conteúdo Previsto</label>
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Módulo 2" value="${(c==null?void 0:c.titulo)||(a==null?void 0:a.titulo)||""}" required />
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-student">Aluno Matriculado</label>
          <select id="app-student" class="form-select" required>
            <option value="">Selecione o Aluno...</option>
            ${w}
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-plan">Plano de Ensino (Opcional)</label>
          <select id="app-plan" class="form-select">
            <option value="">Selecione o Plano...</option>
            ${b}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${r}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${(c==null?void 0:c.horaInicio)||"09:00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${(c==null?void 0:c.horaFim)||"10:00"}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-status">Status da Aula</label>
            <select id="app-status" class="form-select">
              <option value="agendado" ${(c==null?void 0:c.status)==="agendado"?"selected":""}>⏳ Agendado</option>
              <option value="concluido" ${(c==null?void 0:c.status)==="concluido"?"selected":""}>✓ Concluído / Presente</option>
              <option value="falta_justificada" ${(c==null?void 0:c.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
              <option value="falta_injustificada" ${(c==null?void 0:c.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
              <option value="cancelado" ${(c==null?void 0:c.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;" id="box-justificativa">
            <label class="form-label" for="app-justificativa">Justificativa da Falta (se houver)</label>
            <input type="text" id="app-justificativa" class="form-input" placeholder="Ex: Atestado, viagem, imprevisto..." value="${(c==null?void 0:c.justificativaFalta)||""}" />
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-obs">Observações / Orientações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Repertório trabalhado, exercícios para casa...">${(c==null?void 0:c.observacoes)||""}</textarea>
        </div>

        ${A?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${R.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;ie({title:A?"Editar Aula / Compromisso":p?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:i,confirmText:A?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const f=document.getElementById("app-title").value.trim(),v=document.getElementById("app-student").value,I=document.getElementById("app-plan").value,u=document.getElementById("app-date").value,C=document.getElementById("app-time-start").value,L=document.getElementById("app-time-end").value,n=document.getElementById("app-status").value,m=document.getElementById("app-justificativa").value.trim(),$=document.getElementById("app-obs").value.trim(),d=document.querySelector('input[name="app-tipo-aula"]:checked'),y=(d==null?void 0:d.value)||"regular";if(!f||!v||!u||!C)return B("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const F=(t==null?void 0:t.nome)||"Administrador";return A&&c?(k.updateAppointment(c.id,{titulo:f,alunoId:v,planoId:I||void 0,data:u,horaInicio:C,horaFim:L,status:n,tipoAula:y,justificativaFalta:m||void 0,observacoes:$},F),B("Aula atualizada com sucesso!","success")):y==="reposicao"?(k.agendarReposicao({titulo:f,alunoId:v,planoId:I||void 0,data:u,horaInicio:C,horaFim:L,status:n,justificativaFalta:m||void 0,observacoes:$},a==null?void 0:a.aulaOriginalId,F),B("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(k.addAppointment({titulo:f,alunoId:v,planoId:I||void 0,data:u,horaInicio:C,horaFim:L,status:n,tipoAula:y,justificativaFalta:m||void 0,observacoes:$},F),B("Aula agendada com sucesso!","success")),s(),!0}}),A&&c&&setTimeout(()=>{var f;(f=document.getElementById("btn-delete-app"))==null||f.addEventListener("click",()=>{fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${c.titulo}</strong>"?`,onConfirm:()=>{k.deleteAppointment(c.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),ve(),s()}})})},50)}return s(),e}const Ze=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function Re(E){const e=(E||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function Xe(E){if(!E)return"";const e=new Date(E+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,`${o} anos`}function Qe(E,e){const t=E.replace(/\D/g,"");if(!t)return"";const o=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function je(E,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
    <div id="receipt-print-area" style="background: #ffffff; color: #111827; padding: 24px; border-radius: 8px; font-family: 'Segoe UI', system-ui, sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #e5e7eb; padding-bottom: 14px; margin-bottom: 16px;">
        <div>
          <h2 style="margin: 0; font-size: 1.25rem; color: #111827; font-weight: 800; letter-spacing: -0.5px;">ACUSTICAMENTE</h2>
          <p style="margin: 2px 0 0; font-size: 0.78rem; color: #4b5563;">Escola de Música &amp; Centro Pedagógico</p>
          <p style="margin: 2px 0 0; font-size: 0.72rem; color: #9ca3af;">Telefone: (11) 98765-4321 &bull; São Paulo - SP</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.72rem; font-weight: 700; color: #4b5563; text-transform: uppercase;">Comprovante de Pagamento</div>
          <div style="font-size: 1.15rem; font-weight: 800; color: #059669; margin-top: 2px;">QUITADO ✓</div>
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${E.id.toUpperCase()}</div>
        </div>
      </div>

      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; margin-bottom: 16px; font-size: 0.84rem; line-height: 1.5;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div><span style="color: #6b7280;">Aluno(a):</span> <strong>${e.nome}</strong></div>
          <div><span style="color: #6b7280;">Instrumento:</span> <strong>${e.instrumentoPrincipal||"Música Geral"}</strong></div>
          <div><span style="color: #6b7280;">Responsável:</span> <strong>${e.responsavelNome||"O Próprio Aluno"}</strong></div>
          <div><span style="color: #6b7280;">Contato:</span> <strong>${e.telefone||"-"}</strong></div>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 0.84rem;">
        <thead>
          <tr style="background: #f3f4f6; text-align: left;">
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb;">Descrição</th>
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb;">Vencimento</th>
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb;">Data do Pagamento</th>
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">Valor Recebido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <strong>${E.descricao}</strong>
              ${E.observacoes?`<br><small style="color: #6b7280;">${E.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${E.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${E.dataPagamento?E.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${E.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${E.formaPagamento?t[E.formaPagamento]||E.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${E.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;ie({title:`Recibo de Pagamento: ${E.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function Ke(E){const e=document.createElement("div"),t=Y.getCurrentUser();let o="";function s(){var p,w;const a=k.getStudents(),P=k.getPlans(),g=Z(t,"alunos","cadastrar"),c=Z(t,"alunos","alterar"),A=Z(t,"alunos","excluir"),M=a.filter(b=>b.nome.toLowerCase().includes(o.toLowerCase())||b.email.toLowerCase().includes(o.toLowerCase())||b.telefone.includes(o)||b.instrumentoPrincipal&&b.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||b.responsavelNome&&b.responsavelNome.toLowerCase().includes(o.toLowerCase()));e.innerHTML=`
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

        ${g?`
              <button class="btn btn-primary" id="btn-new-student">
                ${R.plus} Cadastrar Novo Aluno
              </button>
            `:""}
      </div>

      <!-- Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px; align-items: center;">
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
            ${R.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${M.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 160px;">Aluno</th>
                <th class="col-hide-md" style="width: 180px;">Instrumento</th>
                <th class="col-hide-sm" style="width: 160px;">Contato</th>
                <th class="col-hide-sm" style="width: 180px;">Plano de Ensino</th>
                <th class="col-hide-xs" style="width: 120px;">Status</th>
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${M.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':M.map(b=>{const i=P.find(v=>v.id===b.planoId),f=b.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${b.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${b.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${Re(b.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${b.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${b.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${(i==null?void 0:i.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${f?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${f?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${b.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${R.profile}
                                </button>
                                ${c?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${b.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${R.edit}
                                      </button>
                                    `:""}
                                ${A?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${b.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${R.trash}
                                      </button>
                                    `:""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;const r=e.querySelector("#student-search-input");r==null||r.addEventListener("input",b=>{o=b.target.value,s();const i=e.querySelector("#student-search-input");i&&(i.focus(),i.selectionStart=i.selectionEnd=i.value.length)}),(p=e.querySelector("#btn-clear-search"))==null||p.addEventListener("click",()=>{o="",s()}),(w=e.querySelector("#btn-new-student"))==null||w.addEventListener("click",()=>{S()}),e.querySelectorAll(".btn-view-student").forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.id,v=k.getStudents().find(I=>I.id===f);v&&l(v)})}),e.querySelectorAll(".btn-edit-student").forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.id,v=k.getStudents().find(I=>I.id===f);v&&S(v)})}),e.querySelectorAll(".btn-delete-student").forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.id,v=k.getStudents().find(I=>I.id===f);v&&fe({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${v.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{k.deleteStudent(v.id,(t==null?void 0:t.nome)||"Administrador"),B(`Aluno "${v.nome}" excluído.`,"info"),s()}})})})}function l(a){k.getPlans().find(n=>n.id===a.planoId);const g=k.getStudentAppointments(a.id),c=k.getStudentPayments(a.id),A=Xe(a.dataNascimento),M=Qe(a.telefone,a.nome),r=a.saldoReposicoes||0,p=k.isStudentOverdue(a.id),w=a.status==="ativo",b=Z(t,"financeiro","alterar"),i=g.length,f=g.filter(n=>n.status==="concluido").length,v=g.filter(n=>n.status==="falta_justificada").length,I=g.filter(n=>n.status==="falta_injustificada").length,u=c.filter(n=>n.status==="pago").reduce((n,m)=>n+m.valor,0),C=c.filter(n=>n.status!=="pago").reduce((n,m)=>n+m.valor,0),L=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Cartão Superior do Aluno (Visual Clean & Organizado) -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(234, 67, 53, 0.15); border: 1px solid rgba(234, 67, 53, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 700; color: var(--color-coral);">
              ${a.nome[0]||"A"}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.02rem; font-weight: 700; color: var(--text-white);">${a.nome}</span>
                <span class="badge ${w?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${w?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${Re(a.instrumentoPrincipal)} ${a.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${a.nivelMusical?a.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${A?`&bull; <span style="color: var(--text-muted);">${A}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${M?`
                  <a href="${M}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
                    ${R.whatsapp} WhatsApp
                  </a>
                `:""}
          </div>
        </div>

        <!-- Seletor de Abas Padronizado em Pílula -->
        <div class="app-tabs-wrapper" style="margin-bottom: 4px;">
          <div class="app-tabs-row cols-2">
            <button type="button" class="app-tab-pill active" id="btn-tab-pedagogico">
              <span class="app-tab-pill-dot"></span>
              <span>Pedagógico &amp; Aulas</span>
            </button>
            <button type="button" class="app-tab-pill" id="btn-tab-financeiro">
              <span class="app-tab-pill-dot"></span>
              <span>Histórico Financeiro</span>
              ${p?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${c.length}</span>`}
            </button>
          </div>
        </div>

        <!-- CONTEÚDO DA ABA 1: PEDAGÓGICO -->
        <div id="panel-tab-pedagogico" style="display: flex; flex-direction: column; gap: 12px;">
          
          <!-- Contatos & Responsável em Grid Limpo -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px;">
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 2px;">
                Contato Pessoal
              </span>
              <div style="font-size: 0.8rem; color: var(--text-white);">${a.telefone||"Sem telefone"}</div>
              <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 1px;">${a.email||"Sem e-mail"}</div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px;">
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 2px;">
                Responsável Legal
              </span>
              ${a.responsavelNome?`
                    <div style="font-size: 0.8rem; color: var(--text-white);">
                      ${a.responsavelNome} ${a.responsavelParentesco?`<span style="color: var(--text-muted); font-size: 0.72rem;">(${a.responsavelParentesco})</span>`:""}
                    </div>
                    <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 1px;">
                      ${a.responsavelTelefone||"Sem telefone"}
                    </div>
                  `:'<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 2px;">Aluno independente</div>'}
            </div>
          </div>

          <!-- Métricas Pedagógicas em Barra Sóbria -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${i}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${f}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${v+I}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${r}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Reposições</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${g.length})
              </span>
              ${r>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${r})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${g.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
                    <table class="data-table" style="margin: 0; font-size: 0.78rem;">
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Aula</th>
                          <th class="col-hide-sm">Tipo</th>
                          <th>Status</th>
                          <th class="col-hide-sm">Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${g.map(n=>{const m=n.data.split("-").reverse().join("/");let $="";n.status==="concluido"?$='<span class="badge badge-success" style="font-size: 0.62rem;">Presente</span>':n.status==="falta_justificada"?$='<span class="badge badge-warning" style="font-size: 0.62rem;">Falta Just.</span>':n.status==="falta_injustificada"?$='<span class="badge badge-danger" style="font-size: 0.62rem;">Falta</span>':n.status==="cancelado"?$='<span class="badge badge-secondary" style="font-size: 0.62rem;">Cancelado</span>':$='<span class="badge badge-secondary" style="font-size: 0.62rem;">Agendado</span>';const d=n.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong>${m}</strong>
                                <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 4px;">${n.horaInicio}</span>
                              </td>
                              <td><div style="color: var(--text-white); font-weight: 500;">${n.titulo}</div></td>
                              <td class="col-hide-sm">${d}</td>
                              <td>${$}</td>
                              <td class="col-hide-sm">
                                <span style="color: var(--text-secondary); font-size: 0.72rem;">
                                  ${n.justificativaFalta||n.observacoes||"-"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
                      </tbody>
                    </table>
                  `}
            </div>
          </div>

          ${a.observacoes?`
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.75rem; color: var(--text-secondary);">
                  <strong style="color: var(--text-white);">Obs:</strong> ${a.observacoes}
                </div>
              `:""}
        </div>

        <!-- CONTEÚDO DA ABA 2: FINANCEIRO -->
        <div id="panel-tab-financeiro" style="display: none; flex-direction: column; gap: 12px;">
          <!-- Status Sucinto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.8rem; color: var(--text-white);">
              ${p?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted);">
              Vencimento todo dia ${a.diaVencimento??10}
            </span>
          </div>

          <!-- Resumo Financeiro Sucinto -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white); margin-top: 1px;">
                R$ ${(a.valorMensalidade??280).toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Total Pago</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80; margin-top: 1px;">
                R$ ${u.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${C>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${C.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${c.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${c.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
                    <table class="data-table" style="margin: 0; font-size: 0.78rem;">
                      <thead>
                        <tr>
                          <th>Descrição</th>
                          <th class="col-hide-sm">Vencimento</th>
                          <th>Valor</th>
                          <th>Status</th>
                          <th class="col-hide-sm">Pagamento</th>
                          <th style="text-align: right;">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${c.map(n=>{const m=n.status==="pago",$=n.status==="atrasado";let d="";return m?d='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':$?d='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':d='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${n.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${n.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${n.valor.toFixed(2)}</td>
                              <td>${d}</td>
                              <td class="col-hide-sm">${n.dataPagamento?n.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${m?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${n.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:b?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${n.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                          Baixar
                                        </button>
                                      `:""}
                              </td>
                            </tr>
                          `}).join("")}
                      </tbody>
                    </table>
                  `}
            </div>
          </div>
        </div>

      </div>
    `;ie({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:L,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var y;const n=document.getElementById("btn-tab-pedagogico"),m=document.getElementById("btn-tab-financeiro"),$=document.getElementById("panel-tab-pedagogico"),d=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),m==null||m.classList.remove("active"),$&&($.style.display="flex"),d&&(d.style.display="none")}),m==null||m.addEventListener("click",()=>{m.classList.add("active"),n==null||n.classList.remove("active"),d&&(d.style.display="flex"),$&&($.style.display="none")}),(y=document.getElementById("btn-quick-schedule-reposicao"))==null||y.addEventListener("click",()=>{ve(),E("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(F=>{F.addEventListener("click",V=>{const _=V.currentTarget.dataset.id,z=c.find(h=>h.id===_);z&&je(z,a)})}),document.querySelectorAll(".btn-pay-now").forEach(F=>{F.addEventListener("click",V=>{const _=V.currentTarget.dataset.id,z=c.find(D=>D.id===_);if(!z)return;const h=k.getTodayDateString(),T=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${z.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${z.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${z.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${a.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${h}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-forma">Forma de Pagamento</label>
                <select id="baixa-forma" class="form-select" required>
                  <option value="pix">PIX Instantâneo</option>
                  <option value="dinheiro">Dinheiro em Espécie</option>
                  <option value="cartao_credito">Cartão de Crédito</option>
                  <option value="cartao_debito">Cartão de Débito</option>
                  <option value="boleto">Boleto Bancário</option>
                  <option value="transferencia">Transferência Bancária</option>
                </select>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-obs">Observações do Recebimento (Opcional)</label>
                <input type="text" id="baixa-obs" class="form-input" placeholder="Ex: Pago com comprovante via WhatsApp" />
              </div>
            </div>
          `;ie({title:`Dar Baixa: ${z.descricao}`,bodyHtml:T,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const D=document.getElementById("baixa-data").value,q=document.getElementById("baixa-forma").value,O=document.getElementById("baixa-obs").value;if(!D)return B("Informe a data de recebimento.","error"),!1;const G=(t==null?void 0:t.nome)||"Administrador";k.darBaixaPayment(z.id,D,q,G,O),B(`Baixa de R$ ${z.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const K=k.getStudents().find(J=>J.id===a.id)||a;return l(K),setTimeout(()=>{var J;(J=document.getElementById("btn-tab-financeiro"))==null||J.click()},50),!0}})})})},50)}function S(a){const P=k.getPlans(),g=!!a,c=a?k.getStudentPayments(a.id):[],A=P.map(p=>`<option value="${p.id}" ${(a==null?void 0:a.planoId)===p.id?"selected":""}>${p.nome}</option>`).join(""),M=Ze.map(p=>`<option value="${p}" ${(a==null?void 0:a.instrumentoPrincipal)===p?"selected":""}>${p}</option>`).join(""),r=`
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Seletor de Abas Organizado em 2 Níveis -->
        <div class="student-modal-tabs-wrapper">
          <div class="student-modal-tabs-row row-top">
            <button type="button" class="student-tab-pill btn-form-tab active" data-tab="tab-pessoal">
              <span class="student-tab-pill-dot"></span>
              <span>Pessoal</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-resp">
              <span class="student-tab-pill-dot"></span>
              <span>Responsável</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-musica">
              <span class="student-tab-pill-dot"></span>
              <span>Pedagógico</span>
            </button>
          </div>

          <div class="student-modal-tabs-row row-bottom">
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-financeiro">
              <span class="student-tab-pill-dot"></span>
              <span>Mensalidades</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-obs">
              <span class="student-tab-pill-dot"></span>
              <span>Observações</span>
            </button>
          </div>
        </div>

        <!-- PAINEL 1: DADOS PESSOAIS -->
        <div id="form-panel-tab-pessoal" class="form-tab-panel" style="display: flex; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-nome">Nome Completo do Aluno</label>
            <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${(a==null?void 0:a.nome)||""}" required />
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-telefone">Telefone / WhatsApp</label>
            <input type="text" id="student-telefone" class="form-input" placeholder="(11) 99999-9999" value="${(a==null?void 0:a.telefone)||""}" />
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-nascimento">Data de Nascimento</label>
            <input type="date" id="student-nascimento" class="form-input" value="${(a==null?void 0:a.dataNascimento)||""}" />
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-email">E-mail</label>
            <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${(a==null?void 0:a.email)||""}" />
          </div>
        </div>

        <!-- PAINEL 2: DADOS DO RESPONSÁVEL -->
        <div id="form-panel-tab-resp" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-nome">Nome do Responsável</label>
            <input type="text" id="student-resp-nome" class="form-input" placeholder="Ex: Patrícia Mendes" value="${(a==null?void 0:a.responsavelNome)||""}" />
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-parentesco">Parentesco</label>
            <select id="student-resp-parentesco" class="form-select">
              <option value="">Selecione...</option>
              <option value="Mãe" ${(a==null?void 0:a.responsavelParentesco)==="Mãe"?"selected":""}>Mãe</option>
              <option value="Pai" ${(a==null?void 0:a.responsavelParentesco)==="Pai"?"selected":""}>Pai</option>
              <option value="Avô/Avó" ${(a==null?void 0:a.responsavelParentesco)==="Avô/Avó"?"selected":""}>Avô/Avó</option>
              <option value="Cônjuge" ${(a==null?void 0:a.responsavelParentesco)==="Cônjuge"?"selected":""}>Cônjuge</option>
              <option value="Outro" ${(a==null?void 0:a.responsavelParentesco)==="Outro"?"selected":""}>Outro</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-tel">Telefone / WhatsApp do Responsável</label>
            <input type="text" id="student-resp-tel" class="form-input" placeholder="(11) 98888-8888" value="${(a==null?void 0:a.responsavelTelefone)||""}" />
          </div>

          <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">
            * Obrigatório para alunos menores de 18 anos ou para contato de emergência.
          </p>
        </div>

        <!-- PAINEL 3: DADOS MUSICAIS E PEDAGÓGICOS -->
        <div id="form-panel-tab-musica" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-instrumento">Instrumento Principal</label>
            <select id="student-instrumento" class="form-select">
              <option value="">Selecione...</option>
              ${M}
            </select>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-nivel">Nível Musical</label>
            <select id="student-nivel" class="form-select">
              <option value="iniciante" ${(a==null?void 0:a.nivelMusical)==="iniciante"?"selected":""}>Iniciante</option>
              <option value="basico" ${(a==null?void 0:a.nivelMusical)==="basico"?"selected":""}>Básico</option>
              <option value="intermediario" ${(a==null?void 0:a.nivelMusical)==="intermediario"?"selected":""}>Intermediário</option>
              <option value="avancado" ${(a==null?void 0:a.nivelMusical)==="avancado"?"selected":""}>Avançado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-status">Status da Matrícula</label>
            <select id="student-status" class="form-select">
              <option value="ativo" ${(a==null?void 0:a.status)==="ativo"?"selected":""}>Ativo</option>
              <option value="inativo" ${(a==null?void 0:a.status)==="inativo"?"selected":""}>Inativo</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-plano">Plano de Ensino</label>
            <select id="student-plano" class="form-select">
              <option value="">Selecione um plano...</option>
              ${A}
            </select>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-modulo">Módulo Atual</label>
            <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${(a==null?void 0:a.moduloAtual)||""}" />
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-saldo-reposicoes" title="Aulas que o aluno tem direito a repor">
              Créditos de Reposição
            </label>
            <input type="number" id="student-saldo-reposicoes" class="form-input" min="0" max="20" value="${(a==null?void 0:a.saldoReposicoes)??0}" />
          </div>
        </div>

        <!-- PAINEL 4: MENSALIDADE E FINANCEIRO -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; flex-direction: column; gap: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #fbbf24; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Parâmetros da Mensalidade
            </div>

            <div class="form-group" style="margin: 0; width: 100%;">
              <label class="form-label" for="student-valor-mensalidade">Valor da Mensalidade (R$)</label>
              <input type="number" id="student-valor-mensalidade" class="form-input" min="0" step="10" placeholder="280.00" value="${(a==null?void 0:a.valorMensalidade)??280}" required />
            </div>

            <div class="form-group" style="margin: 0; width: 100%;">
              <label class="form-label" for="student-dia-vencimento">Dia de Vencimento Padrão</label>
              <input type="number" id="student-dia-vencimento" class="form-input" min="1" max="31" placeholder="10" value="${(a==null?void 0:a.diaVencimento)??10}" required />
            </div>

            <div style="font-size: 0.74rem; color: var(--text-secondary); line-height: 1.3;">
              ℹ️ Estes valores são a base para geração das cobranças de mensalidade e controle de pontualidade.
            </div>
          </div>

          <!-- Grid Pequena: Histórico Financeiro do Aluno -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-white); display: flex; align-items: center; gap: 6px;">
                <span>📋</span> Histórico Financeiro
              </span>
              ${c.length>0?`<span style="font-size: 0.72rem; color: var(--text-muted);">${c.length} lançamento(s)</span>`:""}
            </div>

            <div style="max-height: 155px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${a?c.length===0?'<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado para este aluno.</div>':`
                    <table class="data-table" style="margin: 0; font-size: 0.76rem; width: 100%;">
                      <thead>
                        <tr style="background: rgba(0, 0, 0, 0.25); position: sticky; top: 0; z-index: 1;">
                          <th style="padding: 6px 10px;">Valor</th>
                          <th style="padding: 6px 10px;">Data Vencimento</th>
                          <th class="col-hide-sm" style="padding: 6px 10px;">Data Pagamento</th>
                          <th style="padding: 6px 10px; text-align: center;">Situação</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${c.map(p=>{const w=p.dataVencimento.split("-").reverse().join("/"),b=p.dataPagamento?p.dataPagamento.split("-").reverse().join("/"):"-";let i="";return p.status==="pago"?i='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':p.status==="atrasado"?i='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':i='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${p.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${w}</td>
                              <td class="col-hide-sm" style="padding: 6px 10px; color: ${p.dataPagamento?"var(--text-white)":"var(--text-muted)"};">${b}</td>
                              <td style="padding: 6px 10px; text-align: center;">${i}</td>
                            </tr>
                          `}).join("")}
                      </tbody>
                    </table>
                  `:'<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">O histórico financeiro estará disponível após o cadastro do aluno.</div>'}
            </div>
          </div>
        </div>

        <!-- PAINEL 5: OBSERVAÇÕES -->
        <div id="form-panel-tab-obs" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="student-obs">Observações Pedagógicas / Preferências Musicais</label>
            <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Gostos musicais, objetivos do aluno, pontos de atenção pedagógica...">${(a==null?void 0:a.observacoes)||""}</textarea>
          </div>
        </div>
      </form>
    `;ie({title:g?`Editar Aluno: ${a.nome}`:"Cadastrar Novo Aluno",bodyHtml:r,modalClass:"modal-lg",confirmText:g?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var T,D;const p=document.getElementById("student-nome").value.trim(),w=document.getElementById("student-nascimento").value,b=document.getElementById("student-email").value.trim(),i=document.getElementById("student-telefone").value.trim(),f=document.getElementById("student-resp-nome").value.trim(),v=document.getElementById("student-resp-parentesco").value,I=document.getElementById("student-resp-tel").value.trim(),u=document.getElementById("student-instrumento").value,C=document.getElementById("student-nivel").value,L=document.getElementById("student-plano").value,n=document.getElementById("student-status").value,m=document.getElementById("student-modulo").value.trim(),$=document.getElementById("student-saldo-reposicoes").value,d=Math.max(0,parseInt($,10)||0),y=(T=document.getElementById("student-valor-mensalidade"))==null?void 0:T.value,F=Math.max(0,parseFloat(y)||280),V=(D=document.getElementById("student-dia-vencimento"))==null?void 0:D.value,_=Math.min(31,Math.max(1,parseInt(V,10)||10)),z=document.getElementById("student-obs").value.trim();if(!p)return B("Informe o nome do aluno.","error"),!1;const h=(t==null?void 0:t.nome)||"Administrador";return g&&a?(k.updateStudent(a.id,{nome:p,dataNascimento:w,email:b,telefone:i,responsavelNome:f,responsavelParentesco:v,responsavelTelefone:I,instrumentoPrincipal:u,nivelMusical:C,planoId:L,status:n,moduloAtual:m,saldoReposicoes:d,valorMensalidade:F,diaVencimento:_,observacoes:z},h),B("Dados do aluno atualizados com sucesso!","success")):(k.addStudent({nome:p,dataNascimento:w,email:b,telefone:i,responsavelNome:f,responsavelParentesco:v,responsavelTelefone:I,instrumentoPrincipal:u,nivelMusical:C,planoId:L,status:n,moduloAtual:m,saldoReposicoes:d,valorMensalidade:F,diaVencimento:_,observacoes:z},h),B("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const p=document.querySelectorAll(".btn-form-tab"),w=document.querySelectorAll(".form-tab-panel");p.forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.tab;p.forEach(v=>{v.classList.remove("active")}),i.currentTarget.classList.add("active"),w.forEach(v=>{v.style.display=v.id===`form-panel-${f}`?"flex":"none"})})})},50)}return s(),e}const pe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],qe=pe.reduce((E,e)=>E+e.items.length,0);function et(E){let e=0;return pe.forEach(t=>{const o=E[t.key];o&&t.items.forEach(s=>{o[s.key]&&e++})}),e}function tt(E){var S;const e=document.createElement("div"),t=Y.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(S=e.querySelector("#btn-unauth-home"))==null||S.addEventListener("click",()=>E("home")),e;let o="";function s(){var A,M;const a=k.getUsers(),P=o.toLowerCase(),g=a.filter(r=>r.nome.toLowerCase().includes(P)||r.login.toLowerCase().includes(P)||r.papel.toLowerCase().includes(P));e.innerHTML=`
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

        <button class="btn btn-primary" id="btn-new-user" style="display: flex; align-items: center; gap: 6px;">
          ${R.plus} Cadastrar Novo Usuário
        </button>
      </div>

      <!-- Alerta Informativo sobre a Regra do Administrador Inicial -->
      <div style="margin-bottom: 16px; background-color: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-md); padding: 12px 16px; display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 1.2rem; color: var(--color-coral);">🛡️</div>
        <div style="font-size: 0.82rem; color: var(--text-secondary);">
          <strong style="color: var(--text-white);">Regra de Segurança:</strong> Apenas administradores acessam esta aba. O usuário administrador do sistema é protegido contra exclusão, mas seu login e senha podem ser alterados livremente.
        </div>
      </div>

      <!-- Barra de Filtro / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="user-search-input" 
            class="form-input" 
            placeholder="Buscar por nome, login ou perfil..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${R.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${g.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Nome</th>
                <th class="col-hide-sm">Login</th>
                <th class="col-hide-xs">Perfil</th>
                <th class="col-hide-md">Permissões Detalhadas</th>
                <th class="col-hide-sm">Tipo</th>
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${g.map(r=>{const p=r.papel==="admin"?"Administrador":r.papel==="professor"?"Professor":"Atendente",w=Ae(r),b=et(w);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${r.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${r.nome[0]||"U"}
                          </div>
                          <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${r.nome}
                          </span>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${r.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${r.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${p}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${r.papel==="admin"?"badge-coral":b>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${r.papel==="admin"?`Acesso Total (${qe})`:`${b} de ${qe} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${r.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${r.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${R.edit}
                          </button>
                          ${r.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${R.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${r.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
                                   ${R.trash}
                                 </button>`}
                        </div>
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(A=e.querySelector("#btn-new-user"))==null||A.addEventListener("click",()=>{l()});const c=e.querySelector("#user-search-input");c&&c.addEventListener("input",r=>{o=r.target.value,s();const p=e.querySelector("#user-search-input");p&&(p.focus(),p.setSelectionRange(p.value.length,p.value.length))}),(M=e.querySelector("#btn-clear-search"))==null||M.addEventListener("click",()=>{o="",s()}),e.querySelectorAll(".btn-edit-user").forEach(r=>{r.addEventListener("click",p=>{const w=p.currentTarget.dataset.id,b=k.getUsers().find(i=>i.id===w);b&&l(b)})}),e.querySelectorAll(".btn-delete-user").forEach(r=>{r.addEventListener("click",p=>{const w=p.currentTarget.dataset.id,b=k.getUsers().find(i=>i.id===w);b&&fe({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${b.nome}</strong>" (login: <code>${b.login}</code>)?`,onConfirm:()=>{try{k.deleteUser(b.id,(t==null?void 0:t.nome)||"Administrador"),B(`Usuário "${b.nome}" excluído.`,"info"),s()}catch(i){B(i.message||"Erro ao excluir usuário.","error")}}})})})}function l(a){var i,f,v,I;const P=!!a,g=a?a.papel:"professor",c=g==="admin",A=Ae(a),M=`
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${(a==null?void 0:a.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${(a==null?void 0:a.login)||""}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${P?"Nova senha":"Ex: 123456"}" value="${(a==null?void 0:a.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${a!=null&&a.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${g==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${g==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${g==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${a!=null&&a.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${c?"none":"block"};">
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
            ${pe.map(u=>{const C=A[u.key]||{},L=u.items.filter(n=>C[n.key]).length;return`
                <div class="perm-group-card" id="card-group-${u.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${u.key}" 
                    data-group="${u.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${u.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${u.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${u.title}
                        </strong>
                        <span id="group-counter-${u.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${L}/${u.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${u.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${u.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${u.items.map(n=>{const m=!!C[n.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${u.key}-${n.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${m?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${m?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${u.key}-${n.key}" 
                                data-group="${u.key}" 
                                data-action="${n.key}" 
                                ${m?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${n.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${u.key}-${n.key}" 
                              class="badge ${m?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${m?"Liberado":"Bloqueado"}
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
    `;ie({title:P?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:M,modalClass:"modal-lg",confirmText:P?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var F,V,_,z,h,T,D,q,O,G,K,J,Q,W,oe,ee,se,te,j,ne,X,me;const u=document.getElementById("user-nome").value.trim(),C=document.getElementById("user-login").value.trim(),L=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),m=n?n.value:"professor";if(!u||!C||!L)return B("Preencha Nome, Login e Senha.","error"),!1;if(k.getUsers().find(N=>N.login===C&&N.id!==(a==null?void 0:a.id)))return B(`O login "${C}" já está em uso por outro usuário.`,"error"),!1;let d;m==="admin"?d=JSON.parse(JSON.stringify(ge.admin)):d={alunos:{acesso:((F=document.getElementById("perm-alunos-acesso"))==null?void 0:F.checked)??!1,cadastrar:((V=document.getElementById("perm-alunos-cadastrar"))==null?void 0:V.checked)??!1,alterar:((_=document.getElementById("perm-alunos-alterar"))==null?void 0:_.checked)??!1,excluir:((z=document.getElementById("perm-alunos-excluir"))==null?void 0:z.checked)??!1},agenda:{acesso:((h=document.getElementById("perm-agenda-acesso"))==null?void 0:h.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((q=document.getElementById("perm-agenda-excluir"))==null?void 0:q.checked)??!1},planos:{acesso:((O=document.getElementById("perm-planos-acesso"))==null?void 0:O.checked)??!1,cadastrar:((G=document.getElementById("perm-planos-cadastrar"))==null?void 0:G.checked)??!1,alterar:((K=document.getElementById("perm-planos-alterar"))==null?void 0:K.checked)??!1,excluir:((J=document.getElementById("perm-planos-excluir"))==null?void 0:J.checked)??!1},financeiro:{acesso:((Q=document.getElementById("perm-financeiro-acesso"))==null?void 0:Q.checked)??!1,cadastrar:((W=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:W.checked)??!1,alterar:((oe=document.getElementById("perm-financeiro-alterar"))==null?void 0:oe.checked)??!1,excluir:((ee=document.getElementById("perm-financeiro-excluir"))==null?void 0:ee.checked)??!1},relatorios:{acesso:((se=document.getElementById("perm-relatorios-acesso"))==null?void 0:se.checked)??!1,gerar:((te=document.getElementById("perm-relatorios-gerar"))==null?void 0:te.checked)??!1},home:{acesso:((j=document.getElementById("perm-home-acesso"))==null?void 0:j.checked)??!1},auditoria:{acesso:((ne=document.getElementById("perm-auditoria-acesso"))==null?void 0:ne.checked)??!1},configuracoes:{acesso:((X=document.getElementById("perm-configuracoes-acesso"))==null?void 0:X.checked)??!1,alterar:((me=document.getElementById("perm-configuracoes-alterar"))==null?void 0:me.checked)??!1}};const y=(t==null?void 0:t.nome)||"Administrador";return P&&a?(k.updateUser(a.id,{nome:u,login:C,senha:L,papel:a.isSistema?"admin":m,permissoes:a.isSistema?ge.admin:d},y),B("Usuário e permissões atualizados com sucesso!","success")):(k.addUser({nome:u,login:C,senha:L,papel:m,permissoes:d},y),B("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const r=document.getElementById("user-papel"),p=document.getElementById("user-permissions-section"),w=(u,C,L)=>{const n=document.getElementById(`row-perm-${u}-${C}`),m=document.getElementById(`badge-perm-${u}-${C}`);n&&m&&(L?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",m.className="badge badge-success",m.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",m.className="badge badge-coral",m.textContent="Bloqueado")),b(u)},b=u=>{const C=document.getElementById(`group-counter-${u}`),L=pe.find(n=>n.key===u);if(C&&L){let n=0;L.items.forEach(m=>{const $=document.getElementById(`perm-${u}-${m.key}`);$&&$.checked&&n++}),C.textContent=`${n}/${L.items.length} liberadas`}};r==null||r.addEventListener("change",()=>{const u=r.value;if(u==="admin")p.style.display="none";else if(p.style.display="block",!P){const C=ge[u]||ge.professor;pe.forEach(L=>{L.items.forEach(n=>{var $;const m=document.getElementById(`perm-${L.key}-${n.key}`);if(m){const d=(($=C[L.key])==null?void 0:$[n.key])??!1;m.checked=d,w(L.key,n.key,d)}})})}}),pe.forEach(u=>{const C=document.getElementById(`header-group-${u.key}`),L=document.getElementById(`group-body-${u.key}`),n=document.getElementById(`arrow-perm-${u.key}`);C==null||C.addEventListener("click",m=>{if(!m.target.closest(".btn-group-toggle")&&L&&n){const $=L.style.display==="flex";L.style.display=$?"none":"flex",n.style.transform=$?"rotate(0deg)":"rotate(180deg)"}}),u.items.forEach(m=>{const $=document.getElementById(`perm-${u.key}-${m.key}`);$==null||$.addEventListener("change",()=>{if(w(u.key,m.key,$.checked),$.checked&&m.key!=="acesso"){const d=document.getElementById(`perm-${u.key}-acesso`);d&&!d.checked&&(d.checked=!0,w(u.key,"acesso",!0))}!$.checked&&m.key==="acesso"&&u.items.forEach(d=>{if(d.key!=="acesso"){const y=document.getElementById(`perm-${u.key}-${d.key}`);y&&y.checked&&(y.checked=!1,w(u.key,d.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${u.key}"]`).forEach(m=>{m.addEventListener("click",$=>{$.stopPropagation();const d=u.items.map(F=>document.getElementById(`perm-${u.key}-${F.key}`)).filter(Boolean),y=d.every(F=>F.checked);d.forEach(F=>{F.checked=!y,w(u.key,F.dataset.action,!y)})})})}),(i=document.getElementById("btn-perm-expand"))==null||i.addEventListener("click",()=>{pe.forEach(u=>{const C=document.getElementById(`group-body-${u.key}`),L=document.getElementById(`arrow-perm-${u.key}`);C&&L&&(C.style.display="flex",L.style.transform="rotate(180deg)")})}),(f=document.getElementById("btn-perm-collapse"))==null||f.addEventListener("click",()=>{pe.forEach(u=>{const C=document.getElementById(`group-body-${u.key}`),L=document.getElementById(`arrow-perm-${u.key}`);C&&L&&(C.style.display="none",L.style.transform="rotate(0deg)")})}),(v=document.getElementById("btn-perm-all"))==null||v.addEventListener("click",()=>{pe.forEach(u=>{u.items.forEach(C=>{const L=document.getElementById(`perm-${u.key}-${C.key}`);L&&(L.checked=!0,w(u.key,C.key,!0))})})}),(I=document.getElementById("btn-perm-none"))==null||I.addEventListener("click",()=>{pe.forEach(u=>{u.items.forEach(C=>{const L=document.getElementById(`perm-${u.key}-${C.key}`);L&&(L.checked=!1,w(u.key,C.key,!1))})})})}return s(),e}function at(E){const e=document.createElement("div"),t=Y.getCurrentUser();let o="";const s=Z(t,"planos","cadastrar"),l=Z(t,"planos","alterar"),S=Z(t,"planos","excluir");function a(){var M,r;const c=k.getPlans().filter(p=>{const w=o.toLowerCase();return p.nome.toLowerCase().includes(w)||p.descricao&&p.descricao.toLowerCase().includes(w)});e.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino &amp; Módulos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estrutura pedagógica padronizada com módulos encadeados.
          </p>
        </div>

        ${s?`
              <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                ${R.plus} Cadastrar Novo Plano
              </button>
            `:""}
      </div>

      <!-- Barra de Filtro / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="plan-search-input" 
            class="form-input" 
            placeholder="Buscar por nome ou objetivo..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${R.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Grid Padronizada em Tabela (1 linha por registro) -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Cadastrados (${c.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Plano de Ensino</th>
                <th class="col-hide-md">Descrição / Objetivo Curricular</th>
                <th class="col-hide-sm" style="width: 130px; text-align: center;">Módulos</th>
                <th class="col-hide-sm" style="width: 120px;">Cadastro</th>
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${c.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${o?"Nenhum plano encontrado para o termo pesquisado.":"Nenhum plano de ensino cadastrado."}
                      </td>
                    </tr>
                  `:c.map(p=>{const w=p.criadoEm?new Date(p.criadoEm).toLocaleDateString("pt-BR"):"-";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${R.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${p.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${p.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição cadastrada</span>'}
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                ${p.modulos.length} ${p.modulos.length===1?"módulo":"módulos"}
                              </span>
                            </td>
                            <td class="col-hide-sm" style="font-size: 0.8rem; color: var(--text-muted);">
                              ${w}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${l?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${p.id}" title="Editar Plano e Módulos">
                                        ${R.edit}
                                      </button>
                                    `:""}
                                ${S?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${p.id}" title="Excluir Plano">
                                        ${R.trash}
                                      </button>
                                    `:""}
                                ${!l&&!S?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(M=e.querySelector("#btn-new-plan"))==null||M.addEventListener("click",()=>{P()});const A=e.querySelector("#plan-search-input");A&&A.addEventListener("input",p=>{o=p.target.value,a();const w=e.querySelector("#plan-search-input");w&&(w.focus(),w.setSelectionRange(w.value.length,w.value.length))}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{o="",a()}),e.querySelectorAll(".btn-edit-plan").forEach(p=>{p.addEventListener("click",w=>{const b=w.currentTarget.dataset.id,i=k.getPlans().find(f=>f.id===b);i&&P(i)})}),e.querySelectorAll(".btn-delete-plan").forEach(p=>{p.addEventListener("click",w=>{const b=w.currentTarget.dataset.id,i=k.getPlans().find(f=>f.id===b);i&&fe({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${i.nome}</strong>" e todos os seus <strong>${i.modulos.length} módulos</strong> vinculados?`,onConfirm:()=>{k.deletePlan(i.id,(t==null?void 0:t.nome)||"Administrador"),B(`Plano "${i.nome}" excluído.`,"info"),a()}})})})}function P(g){const c=!!g;let A=g?JSON.parse(JSON.stringify(g.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function M(){return A.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `:A.map((b,i)=>`
            <div class="module-card-item" data-idx="${i}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 10px; display: flex; align-items: center; gap: 10px; transition: border-color 0.15s ease;">
              <!-- Badge de Ordem Numérica -->
              <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                ${String(i+1).padStart(2,"0")}
              </div>

              <!-- Input Editável In-Place -->
              <input 
                type="text" 
                class="module-title-input" 
                data-idx="${i}" 
                value="${b.titulo}" 
                placeholder="Título do módulo..." 
                style="flex: 1; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
              />

              <!-- Ações: Subir, Descer, Excluir -->
              <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-up" 
                  data-idx="${i}" 
                  title="Mover para Cima" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${i===0?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                >
                  ▲
                </button>
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-down" 
                  data-idx="${i}" 
                  title="Mover para Baixo" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${i===A.length-1?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                >
                  ▼
                </button>
                <button 
                  type="button" 
                  class="btn btn-danger btn-icon-only btn-remove-module" 
                  data-idx="${i}" 
                  title="Excluir Módulo" 
                  style="width: 26px; height: 26px; padding: 0; display: flex; align-items: center; justify-content: center; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                >
                  ${R.trash}
                </button>
              </div>
            </div>
          `).join("")}const r=`
      <form id="plan-modal-form" style="display: flex; flex-direction: column; gap: 12px;">
        
        <!-- 1. Identificação Básica do Plano (Compacto em 2 Colunas) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-coral); letter-spacing: 0.05em; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
            <span>🎼</span> Informações do Plano Pedagógico
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-nome" style="font-size: 0.78rem;">Nome do Plano *</label>
              <input 
                type="text" 
                id="plan-nome" 
                class="form-input" 
                placeholder="Ex: Violão Popular" 
                value="${(g==null?void 0:g.nome)||""}" 
                required 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-desc" style="font-size: 0.78rem;">Foco / Descrição Curricular</label>
              <input 
                type="text" 
                id="plan-desc" 
                class="form-input" 
                placeholder="Ex: Do nível iniciante à prática de repertório" 
                value="${(g==null?void 0:g.descricao)||""}" 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>
          </div>
        </div>

        <!-- 2. Trilha e Sequência de Módulos (Design Enxuto e Intuitivo) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.84rem; font-weight: 700; color: var(--text-white);">📚 Trilha de Módulos</span>
              <span id="modules-counter-badge" class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 8px;">
                ${A.length} ${A.length===1?"módulo":"módulos"}
              </span>
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted);">
              Use ▲ ▼ para reordenar &bull; Edite diretamente no campo
            </span>
          </div>

          <!-- Barra de Inserção Rápida de Módulo -->
          <div style="display: flex; gap: 8px; margin-bottom: 10px;">
            <input 
              type="text" 
              id="quick-add-module-input" 
              class="form-input" 
              placeholder="Digite o título do módulo e pressione Enter (ex: Módulo 3: Escalas e Acordes)..." 
              style="flex: 1; padding: 7px 12px; font-size: 0.82rem;"
            />
            <button 
              type="button" 
              class="btn btn-primary btn-sm" 
              id="btn-quick-add-module" 
              style="display: flex; align-items: center; gap: 4px; font-size: 0.78rem; padding: 7px 14px; white-space: nowrap;"
            >
              ${R.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Container de Lista de Módulos (Scroll Suave e Altura Controlada) -->
          <div 
            id="modules-list-container" 
            style="max-height: 210px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${M()}
          </div>
        </div>

      </form>
    `;ie({title:c?`Editar Plano: ${g.nome}`:"Cadastrar Plano & Trilha de Ensino",bodyHtml:r,modalClass:"modal-lg",confirmText:c?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const b=document.getElementById("plan-nome").value.trim(),i=document.getElementById("plan-desc").value.trim(),f=A.map((I,u)=>({id:I.id||"mod_"+(u+1)+"_"+Date.now(),ordem:u+1,titulo:I.titulo.trim()})).filter(I=>I.titulo.length>0);if(!b)return B("Informe o nome do plano de ensino.","error"),!1;if(f.length===0)return B("Adicione pelo menos um módulo à trilha pedagógica.","error"),!1;const v=(t==null?void 0:t.nome)||"Administrador";return c&&g?(k.updatePlan(g.id,{nome:b,descricao:i,modulos:f},v),B("Plano e módulos atualizados com sucesso!","success")):(k.addPlan({nome:b,descricao:i,modulos:f},v),B("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function p(){const b=document.getElementById("modules-list-container"),i=document.getElementById("modules-counter-badge");b&&(i&&(i.textContent=`${A.length} ${A.length===1?"módulo":"módulos"}`),b.innerHTML=M(),b.querySelectorAll(".module-title-input").forEach(f=>{f.addEventListener("input",v=>{const I=parseInt(v.target.getAttribute("data-idx")||"0",10);A[I]&&(A[I].titulo=v.target.value)})}),b.querySelectorAll(".btn-move-up:not([disabled])").forEach(f=>{f.addEventListener("click",v=>{const I=parseInt(v.currentTarget.getAttribute("data-idx")||"0",10);if(I>0){const u=A[I];A[I]=A[I-1],A[I-1]=u,A.forEach((C,L)=>C.ordem=L+1),p()}})}),b.querySelectorAll(".btn-move-down:not([disabled])").forEach(f=>{f.addEventListener("click",v=>{const I=parseInt(v.currentTarget.getAttribute("data-idx")||"0",10);if(I<A.length-1){const u=A[I];A[I]=A[I+1],A[I+1]=u,A.forEach((C,L)=>C.ordem=L+1),p()}})}),b.querySelectorAll(".btn-remove-module").forEach(f=>{f.addEventListener("click",v=>{const I=parseInt(v.currentTarget.getAttribute("data-idx")||"0",10);A.splice(I,1),A.forEach((u,C)=>u.ordem=C+1),p()})}))}function w(){const b=document.getElementById("quick-add-module-input");if(!b)return;const i=b.value.trim();if(!i){B("Digite o nome do módulo para adicionar.","info"),b.focus();return}const f=A.length+1;A.push({id:"mod_"+f+"_"+Date.now(),ordem:f,titulo:i}),b.value="",p(),b.focus();const v=document.getElementById("modules-list-container");v&&(v.scrollTop=v.scrollHeight)}setTimeout(()=>{const b=document.getElementById("btn-quick-add-module"),i=document.getElementById("quick-add-module-input");b==null||b.addEventListener("click",()=>{w()}),i==null||i.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),w())}),p()},50)}return a(),e}function ot(E){const e=document.createElement("div"),t=Y.getCurrentUser();let o="",s="todos",l=new Date;const S=Z(t,"financeiro","cadastrar"),a=Z(t,"financeiro","alterar"),P=Z(t,"financeiro","excluir");function g(){var m,$,d,y,F,V,_,z;const r=k.getPayments(),p=k.getStudents(),w=new Date,b=l!==null&&w.getMonth()===l.getMonth()&&w.getFullYear()===l.getFullYear(),i=l?`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`:"",f=r.filter(h=>h.status==="pago").reduce((h,T)=>h+T.valor,0),v=r.filter(h=>h.status==="pendente").reduce((h,T)=>h+T.valor,0),I=r.filter(h=>h.status==="atrasado").reduce((h,T)=>h+T.valor,0),u=p.filter(h=>h.status==="ativo"&&k.isStudentOverdue(h.id)),C=r.filter(h=>{const T=p.find(J=>J.id===h.alunoId),D=T?T.nome.toLowerCase():"",q=h.descricao.toLowerCase(),O=D.includes(o.toLowerCase())||q.includes(o.toLowerCase())||h.mesReferencia&&h.mesReferencia.includes(o),G=s==="todos"||h.status===s,K=!i||h.mesReferencia===i||h.dataVencimento.startsWith(i);return O&&G&&K});e.innerHTML=`
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
            <span>💰</span> Gestão Financeira &amp; Mensalidades
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Controle de mensalidades, recebimentos, baixas manuais, emissão de recibos e inadimplência.
          </p>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${S?`
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${R.plus} Novo Lançamento
                </button>
              `:""}
        </div>
      </div>

      <!-- Cards de Métricas e KPIs -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="panel-card" style="padding: 16px; border-left: 4px solid #22c55e;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Total Recebido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #4ade80; margin-top: 4px;">
            R$ ${f.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(h=>h.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${v.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(h=>h.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${I.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(h=>h.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${u.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${p.filter(h=>h.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${u.length===0?"✓ 100% em dia":"Requer acompanhamento"}
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Período (Mês) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${l?`Mensalidade / ${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`:"Todas as Mensalidades"}
          </h3>
          
          <div class="calendar-nav-buttons" style="display: flex; gap: 4px;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="fin-btn-prev-month" title="Mês anterior" style="width: 28px; height: 28px; padding: 0;">
              ◀
            </button>
            <button type="button" class="btn ${b?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
              Mês Atual
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="fin-btn-next-month" title="Próximo mês" style="width: 28px; height: 28px; padding: 0;">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn ${l===null?"btn-primary":"btn-secondary"}" id="fin-btn-all-months" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os lançamentos sem filtrar por mês">
            Ver Todos
          </button>
        </div>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 260px;">
          <input 
            type="text" 
            id="fin-search-input" 
            class="form-input" 
            placeholder="Buscar por aluno ou descrição..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${R.search}
          </div>
        </div>

        ${o?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-fin-search">Limpar</button>':""}

        <div style="min-width: 150px;">
          <select id="fin-status-filter" class="form-select">
            <option value="todos" ${s==="todos"?"selected":""}>Todos os Status</option>
            <option value="pago" ${s==="pago"?"selected":""}>✓ Pagos</option>
            <option value="pendente" ${s==="pendente"?"selected":""}>⏳ Pendentes</option>
            <option value="atrasado" ${s==="atrasado"?"selected":""}>⚠️ Atrasados</option>
          </select>
        </div>

        ${s!=="todos"?`
              <button type="button" class="btn btn-secondary btn-sm" id="btn-limpar-status" title="Limpar filtro de status">
                ✕ Todos os Status
              </button>
            `:""}
      </div>

      <!-- Tabela Principal de Pagamentos -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Lançamentos Financeiros (${C.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Aluno</th>
                <th class="col-hide-md">Descrição / Referência</th>
                <th class="col-hide-sm" style="width: 140px;">Vencimento</th>
                <th style="width: 110px;">Valor</th>
                <th class="col-hide-xs" style="width: 110px;">Status</th>
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${C.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':C.map(h=>{const T=p.find(G=>G.id===h.alunoId),D=h.status==="pago",q=h.status==="atrasado";let O="";return D?O='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':q?O='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':O='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${T!=null&&T.nome?T.nome[0]:"?"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${(T==null?void 0:T.nome)||"Aluno não identificado"}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${h.descricao}${h.mesReferencia?` / ${h.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${q?"#f87171":"var(--text-white)"}; font-weight: ${q?"700":"normal"};">
                                ${h.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${h.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${O}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!D&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${h.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${R.check}
                                      </button>
                                    `:""}

                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${h.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${h.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${R.edit}
                                      </button>
                                    `:""}

                                ${P?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${h.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${R.trash}
                                      </button>
                                    `:""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(m=e.querySelector("#fin-btn-prev-month"))==null||m.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()-1,1),g()}),($=e.querySelector("#fin-btn-next-month"))==null||$.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()+1,1),g()}),(d=e.querySelector("#fin-btn-current-month"))==null||d.addEventListener("click",()=>{l=new Date,g()}),(y=e.querySelector("#fin-btn-all-months"))==null||y.addEventListener("click",()=>{l=null,g()});const L=e.querySelector("#fin-search-input");L==null||L.addEventListener("input",h=>{o=h.target.value,g();const T=e.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(F=e.querySelector("#btn-clear-fin-search"))==null||F.addEventListener("click",()=>{o="",g()});const n=e.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,g()}),(V=e.querySelector("#btn-limpar-status"))==null||V.addEventListener("click",()=>{s="todos",g()}),(_=e.querySelector("#btn-gerar-lote"))==null||_.addEventListener("click",()=>{A()}),(z=e.querySelector("#btn-novo-lancamento"))==null||z.addEventListener("click",()=>{M()}),e.querySelectorAll(".btn-action-baixa").forEach(h=>{h.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(O=>O.id===D);q&&c(q)})}),e.querySelectorAll(".btn-action-recibo").forEach(h=>{h.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(O=>O.id===D);if(q){const O=p.find(G=>G.id===q.alunoId);O&&je(q,O)}})}),e.querySelectorAll(".btn-action-edit").forEach(h=>{h.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(O=>O.id===D);q&&M(q)})}),e.querySelectorAll(".btn-action-delete").forEach(h=>{h.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(O=>O.id===D);q&&fe({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${q.descricao}</strong>" no valor de <strong>R$ ${q.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{k.deletePayment(q.id,(t==null?void 0:t.nome)||"Administrador"),B("Lançamento excluído com sucesso!","info"),g()}})})})}function c(r){const p=k.getStudents().find(i=>i.id===r.alunoId),w=k.getTodayDateString(),b=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${r.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${r.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(p==null?void 0:p.nome)||"N/A"}</strong> &bull; Vencimento: ${r.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${w}" required />
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-forma">Forma de Pagamento</label>
          <select id="modal-baixa-forma" class="form-select" required>
            <option value="pix">PIX Instantâneo</option>
            <option value="dinheiro">Dinheiro em Espécie</option>
            <option value="cartao_credito">Cartão de Crédito</option>
            <option value="cartao_debito">Cartão de Débito</option>
            <option value="boleto">Boleto Bancário</option>
            <option value="transferencia">Transferência Bancária</option>
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-obs">Observações do Recebimento (Opcional)</label>
          <input type="text" id="modal-baixa-obs" class="form-input" placeholder="Ex: Comprovante arquivado / Pago no balcão" />
        </div>
      </div>
    `;ie({title:"Confirmar Baixa de Pagamento",bodyHtml:b,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const i=document.getElementById("modal-baixa-data").value,f=document.getElementById("modal-baixa-forma").value,v=document.getElementById("modal-baixa-obs").value;return i?(k.darBaixaPayment(r.id,i,f,(t==null?void 0:t.nome)||"Administrador",v),B(`Baixa efetuada com sucesso! R$ ${r.valor.toFixed(2)} recebido.`,"success"),g(),!0):(B("Informe a data de recebimento.","error"),!1)}})}function A(){const r=new Date,p=r.getFullYear(),w=r.getMonth()+1,b=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); padding: 12px; font-size: 0.84rem; color: var(--text-white); line-height: 1.4;">
          ℹ️ <strong>Como funciona a geração em lote:</strong>
          <p style="margin: 4px 0 0; color: var(--text-secondary); font-size: 0.78rem;">
            O sistema percorre todos os <strong>alunos com status Ativo</strong> e gera a mensalidade correspondente ao mês selecionado, utilizando o valor e dia de vencimento cadastrados na ficha de cada aluno.
            Alunos que já possuem cobrança neste mês não serão duplicados.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-ano">Ano</label>
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${p}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${w===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${w===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${w===3?"selected":""}>03 - Março</option>
              <option value="4" ${w===4?"selected":""}>04 - Abril</option>
              <option value="5" ${w===5?"selected":""}>05 - Maio</option>
              <option value="6" ${w===6?"selected":""}>06 - Junho</option>
              <option value="7" ${w===7?"selected":""}>07 - Julho</option>
              <option value="8" ${w===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${w===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${w===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${w===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${w===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;ie({title:"Gerar Mensalidades em Lote",bodyHtml:b,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const i=parseInt(document.getElementById("lote-ano").value,10),f=parseInt(document.getElementById("lote-mes").value,10);if(!i||!f)return B("Selecione ano e mês válidos.","error"),!1;const v=k.gerarMensalidadesMes(i,f,(t==null?void 0:t.nome)||"Administrador");return v.criadas===0&&v.puladas>0?B(`Todas as ${v.puladas} mensalidades deste mês já estavam criadas!`,"info"):B(`Sucesso: ${v.criadas} mensalidade(s) gerada(s)! (${v.puladas} já existentes puladas)`,"success"),g(),!0}})}function M(r){const p=!!r,w=k.getStudents(),b=k.getTodayDateString(),i=w.map(v=>`<option value="${v.id}" ${(r==null?void 0:r.alunoId)===v.id?"selected":""}>${v.nome} (${v.instrumentoPrincipal||"Geral"})</option>`).join(""),f=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${p?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${i}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(r==null?void 0:r.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (YYYY-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" value="${(r==null?void 0:r.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="number" id="pay-valor" class="form-input" min="0" step="5" placeholder="280.00" value="${(r==null?void 0:r.valor)??280}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(r==null?void 0:r.dataVencimento)||b}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(r==null?void 0:r.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(r==null?void 0:r.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(r==null?void 0:r.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(r==null?void 0:r.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="dinheiro" ${(r==null?void 0:r.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="cartao_credito" ${(r==null?void 0:r.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(r==null?void 0:r.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="boleto" ${(r==null?void 0:r.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(r==null?void 0:r.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações Adicionais</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(r==null?void 0:r.observacoes)||""}" />
        </div>
      </form>
    `;ie({title:p?`Editar Lançamento: ${r.descricao}`:"Novo Lançamento Financeiro",bodyHtml:f,modalClass:"modal-md",confirmText:p?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const v=p&&r?r.alunoId:document.getElementById("pay-aluno").value,I=document.getElementById("pay-desc").value.trim(),u=document.getElementById("pay-mes").value.trim()||void 0,C=document.getElementById("pay-valor").value,L=parseFloat(C)||0,n=document.getElementById("pay-vencimento").value,m=document.getElementById("pay-status").value,$=document.getElementById("pay-forma").value||void 0,d=document.getElementById("pay-obs").value.trim()||void 0;if(!v)return B("Selecione um aluno.","error"),!1;if(!I)return B("Informe a descrição do lançamento.","error"),!1;if(L<=0)return B("Informe um valor válido maior que zero.","error"),!1;if(!n)return B("Informe a data de vencimento.","error"),!1;const y=(t==null?void 0:t.nome)||"Administrador";return p&&r?(k.updatePayment(r.id,{descricao:I,mesReferencia:u,valor:L,dataVencimento:n,status:m,formaPagamento:$,dataPagamento:m==="pago"?r.dataPagamento||b:void 0,observacoes:d},y),B("Lançamento atualizado com sucesso!","success")):(k.addPayment({alunoId:v,descricao:I,mesReferencia:u,valor:L,dataVencimento:n,status:m,formaPagamento:$,dataPagamento:m==="pago"?b:void 0,observacoes:d},y),B("Novo lançamento cadastrado com sucesso!","success")),g(),!0}}),p||setTimeout(()=>{const v=document.getElementById("pay-aluno");v==null||v.addEventListener("change",()=>{const I=w.find(u=>u.id===v.value);if(I){const u=document.getElementById("pay-valor");u&&typeof I.valorMensalidade=="number"&&(u.value=I.valorMensalidade.toString())}})},50)}return g(),e}function st(E){const e=document.createElement("div"),t=Y.getCurrentUser(),o=Z(t,"relatorios","gerar");let s="alunos",l="todos",S="todos",a="todos",P="todos",g="todos",c="nome_asc",A="",M="",r="",p="",w="todos",b="todos",i="todos",f="vencimento_asc";function v(){var Q,W,oe,ee,se,te,j,ne,X,me,N,ae,ce,be,ye,he,xe,Me,Pe;const n=k.getSettings(),m=k.getStudents(),$=k.getPlans(),d=k.getPayments(),y=Array.from(new Set(m.map(x=>x.instrumentoPrincipal).filter(Boolean))).sort();let F=m.filter(x=>{if(l!=="todos"&&x.status!==l||S!=="todos"&&x.instrumentoPrincipal!==S||a!=="todos"&&x.nivelMusical!==a||P!=="todos"&&x.planoId!==P)return!1;if(g!=="todos"){const H=k.isStudentOverdue(x.id);if(g==="em_dia"&&H||g==="atrasado"&&!H)return!1}return!0});F.sort((x,H)=>c==="nome_asc"?x.nome.localeCompare(H.nome):c==="nome_desc"?H.nome.localeCompare(x.nome):c==="data_desc"?(H.criadoEm||"").localeCompare(x.criadoEm||""):c==="data_asc"?(x.criadoEm||"").localeCompare(H.criadoEm||""):0);const V=F.length,_=F.filter(x=>x.status==="ativo").length,z=F.filter(x=>x.status==="inativo").length,h=F.filter(x=>k.isStudentOverdue(x.id)).length,T=new Date().toISOString().slice(0,10);let D=d.filter(x=>{if(A&&x.dataVencimento<A||M&&x.dataVencimento>M)return!1;const H=x.mesReferencia||x.dataVencimento.slice(0,7);if(r&&H<r||p&&H>p||b!=="todos"&&x.alunoId!==b||i!=="todos"&&x.formaPagamento!==i)return!1;const re=x.status!=="pago"&&x.dataVencimento<T;return!(w==="pago"&&x.status!=="pago"||w==="pendente"&&(x.status==="pago"||re)||w==="atrasado"&&!re)});const q=new Map(m.map(x=>[x.id,x.nome]));D.sort((x,H)=>{if(f==="vencimento_asc")return x.dataVencimento.localeCompare(H.dataVencimento);if(f==="vencimento_desc")return H.dataVencimento.localeCompare(x.dataVencimento);if(f==="valor_desc")return H.valor-x.valor;if(f==="aluno_asc"){const re=q.get(x.alunoId)||"",Ce=q.get(H.alunoId)||"";return re.localeCompare(Ce)}return 0});const O=D.length,G=D.reduce((x,H)=>x+H.valor,0),K=D.filter(x=>x.status==="pago").reduce((x,H)=>x+H.valor,0),J=D.filter(x=>x.status!=="pago").reduce((x,H)=>x+H.valor,0);e.innerHTML=`
      <!-- Cabeçalho do Módulo -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-white);">
            Módulo de Relatórios Gerenciais
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Filtros avançados e geração direta em PDF com cabeçalho institucional e dados das configurações.
          </p>
        </div>

        <div style="display: flex; gap: 10px;">
          ${o?`
                <button class="btn btn-primary" id="btn-gerar-pdf" style="font-size: 0.82rem; padding: 8px 18px; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                  <span>📄</span> Imprimir / Exportar PDF
                </button>
              `:'<span style="font-size: 0.78rem; color: var(--text-muted); align-self: center;">🔒 Sem permissão para emissão</span>'}
        </div>
      </div>

      <!-- Seletor de Abas Padronizado em Pílula -->
      <div class="app-tabs-wrapper" style="margin-bottom: 16px;">
        <div class="app-tabs-row cols-2">
          <button 
            type="button" 
            class="app-tab-pill ${s==="alunos"?"active":""}" 
            id="btn-tab-rel-alunos"
          >
            <span class="app-tab-pill-dot"></span>
            <span>👥 Relatório de Alunos</span>
          </button>

          <button 
            type="button" 
            class="app-tab-pill ${s==="financeiro"?"active":""}" 
            id="btn-tab-rel-financeiro"
          >
            <span class="app-tab-pill-dot"></span>
            <span>💰 Relatório Financeiro</span>
          </button>
        </div>
      </div>

      <!-- ========================================================
           CONTEÚDO DA ABA: RELATÓRIO DE ALUNOS
           ======================================================== -->
      <div id="tab-rel-alunos" style="display: ${s==="alunos"?"block":"none"};">
        <!-- Painel de Filtros: Alunos -->
        <div class="panel-card" style="margin-bottom: 16px; padding: 16px 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white); text-transform: uppercase; letter-spacing: 0.04em;">
              Filtros de Pesquisa de Alunos
            </span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-limpar-filtros-alunos" style="font-size: 0.72rem; padding: 3px 10px;">
              Limpar Filtros
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; align-items: flex-end;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Aluno</label>
              <select id="filtro-aluno-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${l==="todos"?"selected":""}>Todos os Status</option>
                <option value="ativo" ${l==="ativo"?"selected":""}>Somente Ativos</option>
                <option value="inativo" ${l==="inativo"?"selected":""}>Somente Inativos</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Instrumento</label>
              <select id="filtro-aluno-instrumento" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${S==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${y.map(x=>`<option value="${x}" ${S===x?"selected":""}>${x}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Nível Musical</label>
              <select id="filtro-aluno-nivel" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${a==="todos"?"selected":""}>Todos os Níveis</option>
                <option value="iniciante" ${a==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${a==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${a==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${a==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Plano de Ensino</label>
              <select id="filtro-aluno-plano" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${P==="todos"?"selected":""}>Todos os Planos</option>
                ${$.map(x=>`<option value="${x.id}" ${P===x.id?"selected":""}>${x.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Situação Financeira</label>
              <select id="filtro-aluno-financeiro" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${g==="todos"?"selected":""}>Todos</option>
                <option value="em_dia" ${g==="em_dia"?"selected":""}>Em Dia</option>
                <option value="atrasado" ${g==="atrasado"?"selected":""}>Com Mensalidade em Atraso</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-aluno-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="nome_asc" ${c==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${c==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${c==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${c==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores de Alunos (2 em cima, 2 em baixo) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Localizado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${V}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${_}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${z}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${h}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${F.length} registros)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="min-width: 140px;">Aluno</th>
                  <th class="col-hide-md" style="width: 170px;">Instrumento</th>
                  <th class="col-hide-sm" style="width: 130px;">Contato</th>
                  <th class="col-hide-sm" style="width: 160px;">Plano</th>
                  <th class="col-hide-xs" style="width: 100px;">Status</th>
                  <th style="width: 120px;">Mensalidade</th>
                </tr>
              </thead>
              <tbody>
                ${F.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':F.map(x=>{const H=$.find(Oe=>Oe.id===x.planoId),re=x.status==="ativo",Ce=k.isStudentOverdue(x.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${x.nome}</td>
                              <td class="col-hide-md">${x.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${x.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${re?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${re?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${Ce?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ========================================================
           CONTEÚDO DA ABA: RELATÓRIO FINANCEIRO
           ======================================================== -->
      <div id="tab-rel-financeiro" style="display: ${s==="financeiro"?"block":"none"};">
        <!-- Painel de Filtros: Financeiro -->
        <div class="panel-card" style="margin-bottom: 16px; padding: 16px 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white); text-transform: uppercase; letter-spacing: 0.04em;">
              Filtros de Pesquisa Financeira
            </span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-limpar-filtros-fin" style="font-size: 0.72rem; padding: 3px 10px;">
              Limpar Filtros
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; align-items: flex-end;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento De</label>
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${A}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${M}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${r}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${p}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Lançamento</label>
              <select id="filtro-fin-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${w==="todos"?"selected":""}>Todos os Status</option>
                <option value="pago" ${w==="pago"?"selected":""}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${w==="pendente"?"selected":""}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${w==="atrasado"?"selected":""}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${b==="todos"?"selected":""}>Todos os Alunos</option>
                ${m.map(x=>`<option value="${x.id}" ${b===x.id?"selected":""}>${x.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${i==="todos"?"selected":""}>Todas as Formas</option>
                <option value="pix" ${i==="pix"?"selected":""}>PIX</option>
                <option value="cartao_credito" ${i==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
                <option value="cartao_debito" ${i==="cartao_debito"?"selected":""}>Cartão de Débito</option>
                <option value="boleto" ${i==="boleto"?"selected":""}>Boleto</option>
                <option value="dinheiro" ${i==="dinheiro"?"selected":""}>Dinheiro</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-fin-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="vencimento_asc" ${f==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${f==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${f==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${f==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores Financeiros (2 em cima, 2 em baixo) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Registros</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${O}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Geral</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${G.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Recebido / Quitado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${K.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Pendente / Atrasado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">R$ ${J.toFixed(2)}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Financeiro -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório Financeiro (${D.length} lançamentos)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="min-width: 140px;">Aluno</th>
                  <th class="col-hide-md" style="width: 180px;">Descrição</th>
                  <th class="col-hide-sm" style="width: 130px;">Vencimento</th>
                  <th style="width: 110px;">Valor</th>
                  <th class="col-hide-xs" style="width: 100px;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${D.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':D.map(x=>{const H=x.status==="pago",re=!H&&x.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${q.get(x.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${x.descricao}${x.mesReferencia?` / ${x.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${x.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${x.valor.toFixed(2)}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${H?"badge-success":re?"badge-coral":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${H?"Pago":re?"Atrasado":"Pendente"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,(Q=e.querySelector("#btn-tab-rel-alunos"))==null||Q.addEventListener("click",()=>{s="alunos",v()}),(W=e.querySelector("#btn-tab-rel-financeiro"))==null||W.addEventListener("click",()=>{s="financeiro",v()}),(oe=e.querySelector("#filtro-aluno-status"))==null||oe.addEventListener("change",x=>{l=x.target.value,v()}),(ee=e.querySelector("#filtro-aluno-instrumento"))==null||ee.addEventListener("change",x=>{S=x.target.value,v()}),(se=e.querySelector("#filtro-aluno-nivel"))==null||se.addEventListener("change",x=>{a=x.target.value,v()}),(te=e.querySelector("#filtro-aluno-plano"))==null||te.addEventListener("change",x=>{P=x.target.value,v()}),(j=e.querySelector("#filtro-aluno-financeiro"))==null||j.addEventListener("change",x=>{g=x.target.value,v()}),(ne=e.querySelector("#filtro-aluno-ordem"))==null||ne.addEventListener("change",x=>{c=x.target.value,v()}),(X=e.querySelector("#btn-limpar-filtros-alunos"))==null||X.addEventListener("click",()=>{l="todos",S="todos",a="todos",P="todos",g="todos",c="nome_asc",v()}),(me=e.querySelector("#filtro-fin-dataini"))==null||me.addEventListener("change",x=>{A=x.target.value,v()}),(N=e.querySelector("#filtro-fin-datafim"))==null||N.addEventListener("change",x=>{M=x.target.value,v()}),(ae=e.querySelector("#filtro-fin-mesref-ini"))==null||ae.addEventListener("change",x=>{r=x.target.value,v()}),(ce=e.querySelector("#filtro-fin-mesref-fim"))==null||ce.addEventListener("change",x=>{p=x.target.value,v()}),(be=e.querySelector("#filtro-fin-status"))==null||be.addEventListener("change",x=>{w=x.target.value,v()}),(ye=e.querySelector("#filtro-fin-aluno"))==null||ye.addEventListener("change",x=>{b=x.target.value,v()}),(he=e.querySelector("#filtro-fin-metodo"))==null||he.addEventListener("change",x=>{i=x.target.value,v()}),(xe=e.querySelector("#filtro-fin-ordem"))==null||xe.addEventListener("change",x=>{f=x.target.value,v()}),(Me=e.querySelector("#btn-limpar-filtros-fin"))==null||Me.addEventListener("click",()=>{A="",M="",r="",p="",w="todos",b="todos",i="todos",f="vencimento_asc",v()}),(Pe=e.querySelector("#btn-gerar-pdf"))==null||Pe.addEventListener("click",async()=>{if(!o){B("Você não possui permissão para emitir relatórios.","error");return}const x=e.querySelector("#btn-gerar-pdf"),H=x?x.innerHTML:"";x&&(x.disabled=!0,x.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await C(n,F,$):await L(n,D,m,{mesIni:r,mesFim:p}),B("PDF gerado com sucesso!","success")}catch(re){console.error("Erro ao gerar PDF:",re),B("Ocorreu um erro ao gerar o documento PDF.","error")}finally{x&&(x.disabled=!1,x.innerHTML=H)}})}function I(n){return new Promise(m=>{if(n&&n.trim()!==""){const $=new Image;$.crossOrigin="Anonymous",$.onload=()=>{try{const d=document.createElement("canvas");d.width=160,d.height=160;const y=d.getContext("2d");if(!y){m(n);return}const F=24;y.fillStyle="#ffffff",y.beginPath(),y.moveTo(F,0),y.lineTo(160-F,0),y.quadraticCurveTo(160,0,160,F),y.lineTo(160,160-F),y.quadraticCurveTo(160,160,160-F,160),y.lineTo(F,160),y.quadraticCurveTo(0,160,0,160-F),y.lineTo(0,F),y.quadraticCurveTo(0,0,F,0),y.closePath(),y.fill();const V=12,_=160-V*2,z=160-V*2;let h=_,T=z;const D=$.width/$.height;D>1?T=_/D:h=z*D;const q=V+(_-h)/2,O=V+(z-T)/2;y.drawImage($,q,O,h,T),m(d.toDataURL("image/png"))}catch{m(n)}},$.onerror=()=>{u().then(m)},$.src=n;return}u().then(m)})}function u(){return new Promise(n=>{try{const m=document.createElement("canvas");m.width=160,m.height=160;const $=m.getContext("2d");if(!$){n("");return}const d=32;$.fillStyle="#181c2b",$.beginPath(),$.moveTo(d,0),$.lineTo(160-d,0),$.quadraticCurveTo(160,0,160,d),$.lineTo(160,160-d),$.quadraticCurveTo(160,160,160-d,160),$.lineTo(d,160),$.quadraticCurveTo(0,160,0,160-d),$.lineTo(0,d),$.quadraticCurveTo(0,0,d,0),$.closePath(),$.fill(),$.lineWidth=3,$.strokeStyle="#2d3748",$.stroke();const y=new Image,F=`
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path d="M 50 16 C 68 16 84 31 84 50 C 84 58 81 65 76 71" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 50 84 C 32 84 16 69 16 50 C 16 42 19 35 24 29" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 42 24 C 60 24 74 38 74 54" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M 58 76 C 40 76 26 62 26 46" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
            <circle cx="16" cy="50" r="3" fill="#ea4335" />
            <rect x="23" y="38" width="6" height="24" rx="3" fill="#ea4335" />
            <rect x="32" y="30" width="6" height="40" rx="3" fill="#ea4335" />
            <rect x="41" y="22" width="6" height="56" rx="3" fill="#ea4335" />
            <rect x="50" y="32" width="6" height="18" rx="3" fill="#ffffff" />
            <rect x="50" y="52" width="6" height="26" rx="3" fill="#ea4335" />
            <rect x="59" y="40" width="6" height="10" rx="3" fill="#ffffff" />
            <rect x="59" y="53" width="6" height="23" rx="3" fill="#ea4335" />
            <rect x="68" y="34" width="6" height="32" rx="3" fill="#ffffff" />
            <circle cx="80" cy="54" r="3" fill="#ffffff" />
          </svg>
        `,V=new Blob([F],{type:"image/svg+xml;charset=utf-8"}),_=URL.createObjectURL(V);y.onload=()=>{$.drawImage(y,20,20,120,120),URL.revokeObjectURL(_),n(m.toDataURL("image/png"))},y.onerror=()=>{URL.revokeObjectURL(_),n("")},y.src=_}catch{n("")}})}async function C(n,m,$){const d=new Te({orientation:"portrait",unit:"mm",format:"a4"}),y=new Date().toLocaleString("pt-BR"),F=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",V=n.razaoSocial||"Acusticamente Ensino Musical Ltda",_=n.cnpj?`CNPJ: ${n.cnpj}`:"",z=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),h=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),T=await I(n.logotipoCustomizado);T&&d.addImage(T,"PNG",14,12,17,17);const D=T?35:14;d.setFont("helvetica","bold"),d.setFontSize(13),d.setTextColor(15,23,42),d.text(F,D,17),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(71,85,105),d.text([V,_].filter(Boolean).join(" • "),D,21.5),d.setFontSize(7.5),d.setTextColor(100,116,139),h&&d.text(h,D,25.5),z&&d.text(z,D,h?29.5:25.5),d.setFont("helvetica","bold"),d.setFontSize(12),d.setTextColor(217,72,59),d.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(100,116,139),d.text(`Emissão: ${y}`,196,22,{align:"right"}),d.text(`Total: ${m.length} aluno(s)`,196,26.5,{align:"right"}),d.setDrawColor(203,213,225),d.setLineWidth(.4),d.line(14,33,196,33);const q=m.filter(j=>j.status==="ativo").length,O=m.filter(j=>j.status==="inativo").length,G=m.filter(j=>k.isStudentOverdue(j.id)).length,K=[{label:"TOTAL DE ALUNOS",value:`${m.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${q}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${O}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${G}`,color:[220,38,38]}],J=43,Q=12,W=36;K.forEach((j,ne)=>{const X=14+ne*(J+3);d.setFillColor(248,250,252),d.roundedRect(X,W,J,Q,1.5,1.5,"F"),d.setDrawColor(226,232,240),d.roundedRect(X,W,J,Q,1.5,1.5,"S"),d.setFont("helvetica","bold"),d.setFontSize(6.5),d.setTextColor(100,116,139),d.text(j.label,X+3,W+4),d.setFontSize(10.5),d.setTextColor(j.color[0],j.color[1],j.color[2]),d.text(j.value,X+3,W+9.5)});const oe=m.map((j,ne)=>{const X=$.find(ae=>ae.id===j.planoId),me=j.status==="ativo",N=k.isStudentOverdue(j.id);return[(ne+1).toString(),j.nome,j.instrumentoPrincipal||"Música Geral",j.telefone||"-",(X==null?void 0:X.nome)||"-",me?"Ativo":"Inativo",N?"Atrasado":"Em dia"]});De(d,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:oe.length>0?oe:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:j=>{j.section==="body"&&(j.column.index===5&&(j.cell.raw==="Ativo"?(j.cell.styles.textColor=[22,163,74],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[202,138,4]),j.column.index===6&&(j.cell.raw==="Atrasado"?(j.cell.styles.textColor=[220,38,38],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[22,163,74]))}});const ee=d.internal.getNumberOfPages();for(let j=1;j<=ee;j++)d.setPage(j),d.setDrawColor(226,232,240),d.setLineWidth(.3),d.line(14,287,196,287),d.setFont("helvetica","normal"),d.setFontSize(7),d.setTextColor(148,163,184),d.text(`${F} • Sistema de Gestão Escolar & Pedagógica`,14,292),d.text(`Página ${j} de ${ee}`,196,292,{align:"right"});const se=d.output("blob"),te=URL.createObjectURL(se);window.open(te,"_blank")}async function L(n,m,$,d){const y=new Te({orientation:"portrait",unit:"mm",format:"a4"}),F=new Map($.map(N=>[N.id,N.nome])),V=new Date().toLocaleString("pt-BR"),_=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",z=n.razaoSocial||"Acusticamente Ensino Musical Ltda",h=n.cnpj?`CNPJ: ${n.cnpj}`:"",T=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),D=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),q=new Date().toISOString().slice(0,10),O=m.reduce((N,ae)=>N+ae.valor,0),G=m.filter(N=>N.status==="pago").reduce((N,ae)=>N+ae.valor,0),K=m.filter(N=>N.status!=="pago").reduce((N,ae)=>N+ae.valor,0),J=await I(n.logotipoCustomizado);J&&y.addImage(J,"PNG",14,12,17,17);const Q=J?35:14;y.setFont("helvetica","bold"),y.setFontSize(13),y.setTextColor(15,23,42),y.text(_,Q,17),y.setFont("helvetica","normal"),y.setFontSize(8),y.setTextColor(71,85,105),y.text([z,h].filter(Boolean).join(" • "),Q,21.5),y.setFontSize(7.5),y.setTextColor(100,116,139),D&&y.text(D,Q,25.5),T&&y.text(T,Q,D?29.5:25.5),y.setFont("helvetica","bold"),y.setFontSize(12),y.setTextColor(5,150,105),y.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),y.setFont("helvetica","normal"),y.setFontSize(8),y.setTextColor(100,116,139),y.text(`Emissão: ${V}`,196,22,{align:"right"});let W=`Total: ${m.length} registro(s)`;d!=null&&d.mesIni&&(d!=null&&d.mesFim)?W=`Ref: ${d.mesIni} a ${d.mesFim} • ${m.length} reg.`:d!=null&&d.mesIni?W=`Ref: a partir de ${d.mesIni} • ${m.length} reg.`:d!=null&&d.mesFim&&(W=`Ref: até ${d.mesFim} • ${m.length} reg.`),y.text(W,196,26.5,{align:"right"}),y.setDrawColor(203,213,225),y.setLineWidth(.4),y.line(14,33,196,33);const oe=[{label:"LANÇAMENTOS",value:`${m.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${O.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${G.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${K.toFixed(2)}`,color:[220,38,38]}],ee=43,se=12,te=36;oe.forEach((N,ae)=>{const ce=14+ae*(ee+3);y.setFillColor(248,250,252),y.roundedRect(ce,te,ee,se,1.5,1.5,"F"),y.setDrawColor(226,232,240),y.roundedRect(ce,te,ee,se,1.5,1.5,"S"),y.setFont("helvetica","bold"),y.setFontSize(6.5),y.setTextColor(100,116,139),y.text(N.label,ce+3,te+4),y.setFontSize(10),y.setTextColor(N.color[0],N.color[1],N.color[2]),y.text(N.value,ce+3,te+9.5)});const j=m.map((N,ae)=>{const ce=N.status==="pago",be=!ce&&N.dataVencimento<q,ye=ce?"Pago":be?"Atrasado":"Pendente",he=N.descricao+(N.mesReferencia?` / ${N.mesReferencia}`:""),xe=N.dataVencimento.split("-").reverse().join("/");return[(ae+1).toString(),F.get(N.alunoId)||"Aluno",he,xe,`R$ ${N.valor.toFixed(2)}`,ye]});De(y,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:j.length>0?j:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:N=>{N.section==="body"&&N.column.index===5&&(N.cell.raw==="Pago"?(N.cell.styles.textColor=[22,163,74],N.cell.styles.fontStyle="bold"):N.cell.raw==="Atrasado"?(N.cell.styles.textColor=[220,38,38],N.cell.styles.fontStyle="bold"):N.cell.styles.textColor=[202,138,4])}});const ne=y.internal.getNumberOfPages();for(let N=1;N<=ne;N++)y.setPage(N),y.setDrawColor(226,232,240),y.setLineWidth(.3),y.line(14,287,196,287),y.setFont("helvetica","normal"),y.setFontSize(7),y.setTextColor(148,163,184),y.text(`${_} • Gestão Financeira & Escolar`,14,292),y.text(`Página ${N} de ${ne}`,196,292,{align:"right"});const X=y.output("blob"),me=URL.createObjectURL(X);window.open(me,"_blank")}return v(),e}function nt(E){const e=document.createElement("div");let t=new Date,o="";const s=g=>g.toString().padStart(2,"0");function l(g){const c=g.getDate(),M=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][g.getMonth()],r=g.getFullYear(),p=new Date,w=p.getDate()===c&&p.getMonth()===g.getMonth()&&p.getFullYear()===r;return`${c} de ${M} de ${r}${w?" (Hoje)":""}`}function S(g){return`${g.getFullYear()}-${s(g.getMonth()+1)}-${s(g.getDate())}`}function a(){var i,f,v,I,u,C,L;const g=U.getLogs(),c=new Date,A=`${s(c.getDate())}/${s(c.getMonth()+1)}/${c.getFullYear()}`,M=g.filter(n=>{var m;return(m=n.dataHoraFormatada)==null?void 0:m.startsWith(A)}).length,r=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",p=t!==null&&c.getDate()===t.getDate()&&c.getMonth()===t.getMonth()&&c.getFullYear()===t.getFullYear(),w=g.filter(n=>{const m=!t||n.dataHoraFormatada&&n.dataHoraFormatada.startsWith(r)||n.dataHora&&n.dataHora.startsWith(S(t)),$=o===""||n.tela.toLowerCase().includes(o.toLowerCase())||n.usuarioNome.toLowerCase().includes(o.toLowerCase())||n.usuarioLogin.toLowerCase().includes(o.toLowerCase())||n.acao.toLowerCase().includes(o.toLowerCase())||n.detalhes.toLowerCase().includes(o.toLowerCase());return m&&$});e.innerHTML=`
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

        <div style="font-size: 0.82rem; color: var(--text-muted); background: var(--bg-surface); padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 6px;">
          <span>Registros de Hoje: <strong style="color: var(--color-coral);">${M}</strong></span>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${t?l(t):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${p?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
              Hoje
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-next" title="Próximo dia">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn ${t===null?"btn-primary":"btn-secondary"}" id="audit-btn-all" style="padding: 6px 14px; font-size: 0.8rem;" title="Exibir todo o histórico sem filtrar por data">
            Ver Todos
          </button>
          <input 
            type="date" 
            id="audit-date-picker" 
            class="form-input" 
            style="padding: 5px 10px; font-size: 0.8rem; width: auto; color: var(--text-white); background: var(--bg-card);" 
            value="${t?S(t):""}" 
            title="Selecionar data específica"
          />
        </div>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 440px;">
          <input 
            type="text" 
            id="audit-search-input" 
            class="form-input" 
            placeholder="Pesquisar por tela, ação, usuário ou detalhe..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${R.search}
          </div>
        </div>
        ${o?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${w.length})
            ${t?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${r}</span>`:""}
          </h3>
          ${t!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${r}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 120px;">Data &amp; Hora</th>
                <th class="col-hide-sm" style="width: 180px;">Usuário Responsável</th>
                <th class="col-hide-md" style="width: 130px;">Tela / Módulo</th>
                <th>Ação Executada</th>
                <th class="col-hide-sm">Detalhes da Alteração</th>
              </tr>
            </thead>
            <tbody>
              ${w.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${r}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:w.map(n=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${n.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${n.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${n.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${n.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${n.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${n.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${n.detalhes}">
                                ${n.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(i=e.querySelector("#audit-btn-prev"))==null||i.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),a()}),(f=e.querySelector("#audit-btn-next"))==null||f.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),a()}),(v=e.querySelector("#audit-btn-today"))==null||v.addEventListener("click",()=>{t=new Date,a()}),(I=e.querySelector("#audit-btn-all"))==null||I.addEventListener("click",()=>{t=null,a()}),(u=e.querySelector("#audit-empty-btn-all"))==null||u.addEventListener("click",()=>{t=null,a()}),(C=e.querySelector("#audit-date-picker"))==null||C.addEventListener("change",n=>{const m=n.target.value;if(m){const[$,d,y]=m.split("-").map(Number);t=new Date($,d-1,y)}else t=null;a()});const b=e.querySelector("#audit-search-input");b==null||b.addEventListener("input",n=>{o=n.target.value,a();const m=e.querySelector("#audit-search-input");m&&(m.focus(),m.selectionStart=m.selectionEnd=m.value.length)}),(L=e.querySelector("#btn-clear-audit-search"))==null||L.addEventListener("click",()=>{o="",a()})}const P=()=>{a()};return window.addEventListener("audit_updated",P),a(),e}class rt{static async testConnection(e,t){const o=performance.now();await new Promise(l=>setTimeout(l,200));const s=Math.round(performance.now()-o);return e&&t?{success:!0,latencyMs:s,message:`Conexão bem-sucedida com MongoDB em "${e}/${t}". Esquemas prontos para sincronização.`}:{success:!1,latencyMs:s,message:"URI ou Nome do Banco não informados."}}}function it(E){var V,_;const e=document.createElement("div"),t=Y.getCurrentUser(),o=k.getSettings(),s=Z(t,"configuracoes","alterar");e.innerHTML=`
    <!-- Cabeçalho da Tela -->
    <div style="margin-bottom: 20px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
        Configurações do Sistema
      </h2>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
        Gerencie as preferências gerais, logotipo da instituição, dados cadastrais e banco de dados.
      </p>
    </div>

    <!-- Seletor de Abas Padronizado em Pílulas -->
    <div class="app-tabs-wrapper" style="margin-bottom: 16px;">
      <div class="app-tabs-row cols-3">
        <button 
          type="button" 
          class="app-tab-pill active" 
          id="btn-tab-instituicao" 
          data-tab="instituicao"
        >
          <span class="app-tab-pill-dot"></span>
          <span>🏢 Dados da Instituição</span>
        </button>

        <button 
          type="button" 
          class="app-tab-pill" 
          id="btn-tab-gerais" 
          data-tab="gerais"
        >
          <span class="app-tab-pill-dot"></span>
          <span>⚙️ Configurações Gerais</span>
        </button>

        <button 
          type="button" 
          class="app-tab-pill" 
          id="btn-tab-mongo" 
          data-tab="mongo"
        >
          <span class="app-tab-pill-dot"></span>
          <span>🍃 Banco de Dados (MongoDB)</span>
        </button>
      </div>
    </div>

    <!-- Painel de Conteúdo das Abas -->
    <div class="panel-card" style="margin-bottom: 16px;">
      <!-- CONTEÚDO DA ABA 1: DADOS DA INSTITUIÇÃO -->
      <div id="tab-content-instituicao" style="padding: 20px 24px; display: block;">
        <form id="form-settings-institucional">
          <!-- Identificação & Contato -->
          <div style="margin-bottom: 16px;">
            <div style="display: flex; gap: 14px; margin-bottom: 12px; flex-wrap: wrap;">
              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 240px;">
                <label class="form-label" for="cfg-fantasia" style="font-size: 0.75rem;">Nome Fantasia</label>
                <input 
                  type="text" 
                  id="cfg-fantasia" 
                  class="form-input" 
                  value="${o.nomeFantasia||o.nomeEscola||"Acusticamente Escola de Música"}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 240px;">
                <label class="form-label" for="cfg-razao" style="font-size: 0.75rem;">Razão Social</label>
                <input 
                  type="text" 
                  id="cfg-razao" 
                  class="form-input" 
                  value="${o.razaoSocial||"Acusticamente Ensino Musical Ltda"}" 
                />
              </div>
            </div>

            <div style="display: flex; gap: 14px; align-items: flex-end; flex-wrap: wrap;">
              <div class="form-group" style="margin-bottom: 0; width: 175px;">
                <label class="form-label" for="cfg-cnpj" style="font-size: 0.75rem;">CNPJ</label>
                <input 
                  type="text" 
                  id="cfg-cnpj" 
                  class="form-input" 
                  placeholder="00.000.000/0001-00" 
                  maxlength="18"
                  value="${o.cnpj||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 145px;">
                <label class="form-label" for="cfg-ie" style="font-size: 0.75rem;">Inscrição Estadual</label>
                <input 
                  type="text" 
                  id="cfg-ie" 
                  class="form-input" 
                  placeholder="Isento ou nº"
                  value="${o.inscricaoEstadual||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 150px;">
                <label class="form-label" for="cfg-tel" style="font-size: 0.75rem;">Telefone / WhatsApp</label>
                <input 
                  type="text" 
                  id="cfg-tel" 
                  class="form-input" 
                  placeholder="(11) 98765-4321"
                  value="${o.telefoneContato}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1.2; min-width: 180px;">
                <label class="form-label" for="cfg-email" style="font-size: 0.75rem;">E-mail de Contato</label>
                <input 
                  type="email" 
                  id="cfg-email" 
                  class="form-input" 
                  value="${o.emailContato}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 160px;">
                <label class="form-label" for="cfg-site" style="font-size: 0.75rem;">Website</label>
                <input 
                  type="text" 
                  id="cfg-site" 
                  class="form-input" 
                  placeholder="www.escola.com.br" 
                  value="${o.website||""}" 
                />
              </div>
            </div>
          </div>

          <!-- Endereço -->
          <div style="margin-bottom: 18px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
            <div style="display: flex; gap: 14px; margin-bottom: 12px; align-items: flex-end; flex-wrap: wrap;">
              <div class="form-group" style="margin-bottom: 0; width: 115px;">
                <label class="form-label" for="cfg-cep" style="font-size: 0.75rem;">CEP</label>
                <input 
                  type="text" 
                  id="cfg-cep" 
                  class="form-input" 
                  placeholder="00000-000" 
                  maxlength="9"
                  value="${o.cep||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label class="form-label" for="cfg-logradouro" style="font-size: 0.75rem;">Logradouro / Rua</label>
                <input 
                  type="text" 
                  id="cfg-logradouro" 
                  class="form-input" 
                  placeholder="Rua, Av, Alameda..."
                  value="${o.logradouro||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 85px;">
                <label class="form-label" for="cfg-numero" style="font-size: 0.75rem;">Número</label>
                <input 
                  type="text" 
                  id="cfg-numero" 
                  class="form-input" 
                  placeholder="123"
                  value="${o.numero||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 160px;">
                <label class="form-label" for="cfg-complemento" style="font-size: 0.75rem;">Complemento</label>
                <input 
                  type="text" 
                  id="cfg-complemento" 
                  class="form-input" 
                  placeholder="Sala, Bloco, Apto..."
                  value="${o.complemento||""}" 
                />
              </div>
            </div>

            <div style="display: flex; gap: 14px; align-items: flex-end; flex-wrap: wrap;">
              <div class="form-group" style="margin-bottom: 0; width: 220px;">
                <label class="form-label" for="cfg-bairro" style="font-size: 0.75rem;">Bairro</label>
                <input 
                  type="text" 
                  id="cfg-bairro" 
                  class="form-input" 
                  value="${o.bairro||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 180px;">
                <label class="form-label" for="cfg-cidade" style="font-size: 0.75rem;">Cidade</label>
                <input 
                  type="text" 
                  id="cfg-cidade" 
                  class="form-input" 
                  value="${o.cidade||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 55px;">
                <label class="form-label" for="cfg-uf" style="font-size: 0.75rem; text-align: center;">UF</label>
                <input 
                  type="text" 
                  id="cfg-uf" 
                  class="form-input" 
                  maxlength="2" 
                  style="text-transform: uppercase; text-align: center; padding-left: 0; padding-right: 0;" 
                  placeholder="SP" 
                  value="${o.estado||""}" 
                />
              </div>
            </div>
          </div>

          <!-- Ação Salvar -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; display: flex; justify-content: flex-start;">
            ${s?`
                  <button type="submit" class="btn btn-primary" id="btn-save-settings" style="padding: 8px 22px; font-weight: 600; font-size: 0.85rem;">
                    Salvar Dados da Instituição
                  </button>
                `:'<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura (Sem permissão para alterar)</span>'}
          </div>
        </form>
      </div>

      <!-- CONTEÚDO DA ABA 2: CONFIGURAÇÕES GERAIS -->
      <div id="tab-content-gerais" style="padding: 20px 24px; display: none;">
        <form id="form-settings-gerais">
          <!-- Nome no Menu Lateral -->
          <div style="margin-bottom: 18px; max-width: 440px;">
            <label class="form-label" for="cfg-menu-name" style="font-size: 0.78rem; font-weight: 600;">Nome no Menu Lateral</label>
            <input 
              type="text" 
              id="cfg-menu-name" 
              class="form-input" 
              value="${o.nomeMenu||"Acusticamente"}" 
              placeholder="Ex: Acusticamente"
              maxlength="32"
              required 
            />
          </div>

          <!-- Divisor -->
          <div style="border-top: 1px solid var(--border-subtle); margin: 18px 0;"></div>

          <!-- Logotipo da Instituição -->
          <div style="margin-bottom: 20px;">
            <label class="form-label" style="font-size: 0.78rem; font-weight: 600; margin-bottom: 12px; display: block;">Logotipo (Menu &amp; Relatórios)</label>

            <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start;">
              <!-- Coluna 1: No Menu + Botão Selecionar Imagem -->
              <div style="width: 160px; display: flex; flex-direction: column; gap: 8px;">
                <div style="background: #11141e; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; text-align: center; box-sizing: border-box;">
                  <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); display: block; margin-bottom: 6px;">
                    No Menu
                  </span>
                  <div id="preview-logo-menu" style="width: 44px; height: 44px; margin: 0 auto 6px auto; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.04); border-radius: 6px; border: 1px dashed rgba(255,255,255,0.15); overflow: hidden;">
                    ${ue(o.logotipoCustomizado,40)}
                  </div>
                  <span id="preview-menu-brand-name" style="font-family: var(--font-heading); font-size: 0.74rem; font-weight: 700; color: var(--text-white); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${o.nomeMenu||"Acusticamente"}
                  </span>
                </div>

                <button 
                  type="button" 
                  class="btn btn-primary" 
                  id="btn-upload-logo"
                  style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.78rem; padding: 8px 10px; box-sizing: border-box;"
                >
                  <span>📁</span> Selecionar Imagem
                </button>
              </div>

              <!-- Coluna 2: No Relatório + Botão Restaurar Padrão -->
              <div style="width: 160px; display: flex; flex-direction: column; gap: 8px;">
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 12px 14px; text-align: center; box-sizing: border-box;">
                  <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 6px;">
                    No Relatório
                  </span>
                  <div id="preview-logo-report" style="width: 44px; height: 44px; margin: 0 auto 6px auto; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 6px; border: 1px dashed #cbd5e1; overflow: hidden;">
                    ${ue(o.logotipoCustomizado,40)}
                  </div>
                  <span id="preview-report-brand-name" style="font-family: sans-serif; font-size: 0.74rem; font-weight: 700; color: #0f172a; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${o.nomeMenu||"Acusticamente"}
                  </span>
                </div>

                <button 
                  type="button" 
                  class="btn btn-secondary" 
                  id="btn-reset-logo"
                  style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.78rem; padding: 8px 10px; box-sizing: border-box; color: ${o.logotipoCustomizado?"#ef4444":"var(--text-muted)"};"
                  ${o.logotipoCustomizado?"":"disabled"}
                >
                  <span>🗑️</span> Restaurar Padrão
                </button>
              </div>
            </div>

            <input type="file" id="input-logo-file" accept="image/png, image/jpeg, image/webp, image/svg+xml" style="display: none;" />
            <div id="logo-feedback-msg" style="font-size: 0.74rem; margin-top: 8px; display: none;"></div>
          </div>

          <!-- Ação Salvar Configurações Gerais -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; display: flex; justify-content: flex-start;">
            ${s?`
                  <button type="submit" class="btn btn-primary" id="btn-save-gerais" style="padding: 8px 22px; font-weight: 600; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                    <span>💾</span> Salvar Configurações Gerais
                  </button>
                `:'<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura</span>'}
          </div>
        </form>
      </div>

      <!-- CONTEÚDO DA ABA 3: BANCO DE DADOS (MONGODB) -->
      <div id="tab-content-mongo" style="padding: 24px; display: none;">
        <div style="max-width: 580px;">
          <h4 style="font-size: 0.84rem; font-weight: 700; color: var(--text-white); margin: 0 0 14px 0;">
            Parâmetros de Conexão com o Banco de Dados
          </h4>

          <form id="form-settings-mongo">
            <div class="form-group">
              <label class="form-label" for="cfg-mongo-uri">URI de Conexão MongoDB</label>
              <input 
                type="text" 
                id="cfg-mongo-uri" 
                class="form-input" 
                value="${o.mongoUri}" 
                placeholder="mongodb://localhost:27017" 
                required 
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-mongo-db">Nome do Banco (Database)</label>
              <input 
                type="text" 
                id="cfg-mongo-db" 
                class="form-input" 
                value="${o.mongoDatabase}" 
                placeholder="acusticamente_db" 
                required 
              />
            </div>

            <div style="display: flex; gap: 12px; margin-top: 20px; align-items: center; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary" id="btn-test-mongo">
                Testar Conexão MongoDB
              </button>

              ${s?`
                    <button type="submit" class="btn btn-primary" id="btn-save-mongo">
                      Salvar Conexão do Banco
                    </button>
                  `:""}
            </div>

            <div id="mongo-test-result" style="margin-top: 16px; font-size: 0.82rem;"></div>
          </form>

          <!-- Sincronização em Nuvem & Entrega Limpa -->
          <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
            <h5 style="font-size: 0.82rem; font-weight: 700; color: var(--text-white); margin: 0 0 6px 0;">
              Sincronização em Nuvem &amp; Entrega do Sistema
            </h5>
            <p style="font-size: 0.74rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
              O sistema sincroniza automaticamente com o MongoDB Atlas na Vercel para celular e PC. Quando terminar seus testes, utilize o botão abaixo para deixar o sistema totalmente zerado para o seu cliente.
            </p>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary btn-sm" id="btn-force-sync-cloud" style="font-size: 0.76rem; padding: 6px 14px;">
                🔄 Sincronizar Agora
              </button>

              ${s?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-reset-clean-system" style="font-size: 0.76rem; padding: 6px 14px; color: #ef4444; border-color: rgba(239, 68, 68, 0.4);">
                      🗑️ Zerar Cadastros de Teste (Entrega Limpa)
                    </button>
                  `:""}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Linha Fina com Informações do Sistema -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-size: 0.74rem; color: var(--text-secondary);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-weight: 700; color: var(--text-white); display: flex; align-items: center; gap: 5px;">
          <span>🎵</span> Acusticamente
        </span>
        <span class="badge badge-primary" style="font-family: monospace; font-size: 0.68rem; padding: 1px 6px;">v1.0.0</span>
      </div>

      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Desenvolvido por <strong style="color: var(--color-coral); font-weight: 600;">DevHub</strong></span>
      </div>
    </div>
  `;const l=e.querySelector("#btn-tab-gerais"),S=e.querySelector("#btn-tab-instituicao"),a=e.querySelector("#btn-tab-mongo"),P=e.querySelector("#tab-content-gerais"),g=e.querySelector("#tab-content-instituicao"),c=e.querySelector("#tab-content-mongo");function A(z,h){z&&(h?z.classList.add("active"):z.classList.remove("active"))}function M(z){P.style.display=z==="gerais"?"block":"none",g.style.display=z==="instituicao"?"block":"none",c.style.display=z==="mongo"?"block":"none",A(l,z==="gerais"),A(S,z==="instituicao"),A(a,z==="mongo")}l==null||l.addEventListener("click",()=>M("gerais")),S==null||S.addEventListener("click",()=>M("instituicao")),a==null||a.addEventListener("click",()=>M("mongo"));let r=o.logotipoCustomizado||"";const p=e.querySelector("#cfg-menu-name"),w=e.querySelector("#preview-menu-brand-name"),b=e.querySelector("#preview-report-brand-name"),i=e.querySelector("#preview-logo-menu"),f=e.querySelector("#preview-logo-report"),v=e.querySelector("#input-logo-file"),I=e.querySelector("#btn-upload-logo"),u=e.querySelector("#btn-reset-logo"),C=e.querySelector("#logo-feedback-msg");p==null||p.addEventListener("input",()=>{const z=p.value.trim()||"Acusticamente";w&&(w.textContent=z),b&&(b.textContent=z)}),I==null||I.addEventListener("click",()=>{v==null||v.click()}),v==null||v.addEventListener("change",z=>{const h=z.target.files;if(!h||h.length===0)return;const T=h[0];if(!T.type.startsWith("image/")){B("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(T.size>3*1024*1024){B("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const D=new FileReader;D.onload=q=>{var O;r=((O=q.target)==null?void 0:O.result)||"",i&&(i.innerHTML=ue(r,40)),f&&(f.innerHTML=ue(r,40)),u&&(u.disabled=!1,u.style.color="#ef4444"),C&&(C.style.display="block",C.style.color="var(--status-success)",C.textContent="Imagem carregada no preview. Clique em Salvar."),B("Logotipo carregado na pré-visualização!","info")},D.onerror=()=>{B("Erro ao processar o arquivo de imagem.","error")},D.readAsDataURL(T)}),u==null||u.addEventListener("click",()=>{r="",v&&(v.value=""),i&&(i.innerHTML=ue("",40)),f&&(f.innerHTML=ue("",40)),u&&(u.disabled=!0,u.style.color="var(--text-muted)"),C&&(C.style.display="block",C.style.color="var(--color-coral)",C.textContent="Logotipo padrão no preview. Clique em Salvar."),B("Logotipo padrão restaurado no preview.","info")});const L=e.querySelector("#form-settings-gerais");L==null||L.addEventListener("submit",z=>{z.preventDefault();const h=p.value.trim()||"Acusticamente";k.updateSettings({nomeMenu:h,logotipoCustomizado:r},(t==null?void 0:t.nome)||"Administrador"),C&&(C.style.display="none"),B("Configurações gerais salvas com sucesso!","success")});const n=e.querySelector("#cfg-cnpj");n==null||n.addEventListener("input",z=>{let h=z.target.value.replace(/\D/g,"").slice(0,14);h.length>12?h=h.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):h.length>8?h=h.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):h.length>5?h=h.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):h.length>2&&(h=h.replace(/^(\d{2})(\d{1,3})$/,"$1.$2")),z.target.value=h});const m=e.querySelector("#cfg-cep");m==null||m.addEventListener("input",z=>{let h=z.target.value.replace(/\D/g,"").slice(0,8);h.length>5&&(h=h.replace(/^(\d{5})(\d{1,3})$/,"$1-$2")),z.target.value=h});const $=e.querySelector("#cfg-uf");$==null||$.addEventListener("input",z=>{z.target.value=z.target.value.toUpperCase().slice(0,2)});const d=e.querySelector("#form-settings-institucional");d==null||d.addEventListener("submit",z=>{z.preventDefault();const h=e.querySelector("#cfg-fantasia").value,T=e.querySelector("#cfg-razao").value,D=e.querySelector("#cfg-cnpj").value,q=e.querySelector("#cfg-ie").value,O=e.querySelector("#cfg-tel").value,G=e.querySelector("#cfg-email").value,K=e.querySelector("#cfg-site").value,J=e.querySelector("#cfg-cep").value,Q=e.querySelector("#cfg-logradouro").value,W=e.querySelector("#cfg-numero").value,oe=e.querySelector("#cfg-complemento").value,ee=e.querySelector("#cfg-bairro").value,se=e.querySelector("#cfg-cidade").value,te=e.querySelector("#cfg-uf").value.toUpperCase();k.updateSettings({nomeEscola:h,nomeClinica:h,nomeFantasia:h,razaoSocial:T,cnpj:D,inscricaoEstadual:q,telefoneContato:O,emailContato:G,website:K,cep:J,logradouro:Q,numero:W,complemento:oe,bairro:ee,cidade:se,estado:te},(t==null?void 0:t.nome)||"Administrador"),B("Dados da instituição salvos com sucesso!","success")});const y=e.querySelector("#form-settings-mongo");y==null||y.addEventListener("submit",z=>{z.preventDefault();const h=e.querySelector("#cfg-mongo-uri").value,T=e.querySelector("#cfg-mongo-db").value;k.updateSettings({mongoUri:h,mongoDatabase:T},(t==null?void 0:t.nome)||"Administrador"),B("Configurações do MongoDB salvas com sucesso!","success")});const F=e.querySelector("#btn-test-mongo");return F==null||F.addEventListener("click",async()=>{const z=e.querySelector("#cfg-mongo-uri").value,h=e.querySelector("#cfg-mongo-db").value,T=e.querySelector("#mongo-test-result");T.innerHTML='<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';const D=await rt.testConnection(z,h);D.success?(T.innerHTML=`<span style="color: var(--status-success);">✓ ${D.message} (Latência: ${D.latencyMs}ms)</span>`,B("MongoDB validado com sucesso!","success")):(T.innerHTML=`<span style="color: var(--status-danger);">✕ ${D.message}</span>`,B("Falha na validação do MongoDB.","error"))}),(V=e.querySelector("#btn-force-sync-cloud"))==null||V.addEventListener("click",async()=>{B("Sincronizando com o MongoDB Atlas...","info"),await k.syncWithCloud()?B("Dados sincronizados com o MongoDB na nuvem!","success"):B("Conectado à nuvem. Dados locais em conformidade.","info")}),(_=e.querySelector("#btn-reset-clean-system"))==null||_.addEventListener("click",()=>{fe({title:"Zerar Cadastros para Entrega",message:"Tem certeza que deseja apagar <strong>todos os alunos, aulas e lançamentos financeiros de teste</strong>? Esta ação deixará o banco de dados e o sistema 100% zerados e prontos para o cliente final.",confirmText:"Sim, Zerar Tudo",confirmBtnClass:"btn-danger",onConfirm:async()=>{await k.resetCleanDatabase((t==null?void 0:t.nome)||"Administrador"),B("Sistema zerado com sucesso! Pronto para entrega ao cliente.","success"),E("alunos")}})}),e}class lt{constructor(){le(this,"currentScreen","home");le(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!Y.isAuthenticated()){this.currentScreen="login",this.render();return}const e=Y.getCurrentUser(),t=window.location.hash.replace("#","");t&&["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(t)&&de(e,t)?this.currentScreen=t:this.currentScreen=this.getFirstAllowedScreen(e),window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","");o&&o!==this.currentScreen&&this.navigateTo(o)}),window.addEventListener("app-settings-updated",()=>{const o=k.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const l=document.querySelector(".sidebar-logo");l&&(l.innerHTML=ue(o.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{Y.isAuthenticated()&&this.currentScreen!=="login"&&this.render()}),k.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of t)if(de(e,o))return o;return"home"}navigateTo(e){const t=Y.getCurrentUser();if(!de(t,e)){B("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(t);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),k.syncWithCloud()}render(){var r;if(this.appRoot.innerHTML="",!Y.isAuthenticated()||this.currentScreen==="login"){const p=Ye(()=>{const w=Y.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(w))});this.appRoot.appendChild(p);return}const e=document.createElement("div");e.className="app-container";const t=Y.getCurrentUser(),o=(t==null?void 0:t.papel)==="admin",s=k.getSettings(),l=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${ue(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${R.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${de(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${R.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${de(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${R.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${de(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${R.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${de(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${R.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${de(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${R.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${de(t,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${R.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${R.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${de(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${R.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${de(t,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${R.configuracoes}</span>
              <span>Configurações</span>
            </a>
          `:""}
        </nav>

        <div class="sidebar-footer">
          <div class="user-profile-badge">
            <div class="user-avatar">
              ${((t==null?void 0:t.nome)||"A")[0]}
            </div>
            <div class="user-info">
              <span class="user-info-name">${(t==null?void 0:t.nome)||"Administrador"}</span>
              <span class="user-info-role">${(t==null?void 0:t.papel)==="admin"?"Administrador":(t==null?void 0:t.papel)||"Usuário"}</span>
            </div>
          </div>

          <button class="btn-logout" id="btn-app-logout" title="Sair do sistema">
            ${R.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${R.menu}
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
    `;const S=e.querySelector("#app-sidebar"),a=e.querySelector("#sidebar-backdrop"),P=e.querySelector("#btn-mobile-menu-toggle"),g=e.querySelector("#btn-sidebar-close"),c=p=>{const w=p!==void 0?p:!S.classList.contains("open");S.classList.toggle("open",w),a.classList.toggle("open",w),document.body.style.overflow=w?"hidden":""};P==null||P.addEventListener("click",()=>c(!0)),g==null||g.addEventListener("click",()=>c(!1)),a==null||a.addEventListener("click",()=>c(!1)),e.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",w=>{const b=w.currentTarget.dataset.screen;c(!1),b&&this.navigateTo(b)})}),(r=e.querySelector("#btn-app-logout"))==null||r.addEventListener("click",()=>{fe({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{Y.logout()}})});const A=e.querySelector("#screen-viewport"),M=this.createViewElement(this.currentScreen);A.appendChild(M),this.appRoot.appendChild(e)}createViewElement(e){const t=o=>this.navigateTo(o);switch(e){case"home":return Ne(t);case"agenda":return We();case"alunos":return Ke(t);case"user":return tt(t);case"planos":return at();case"financeiro":return ot();case"relatorios":return st();case"auditoria":return nt();case"configuracoes":return it(t);default:return Ne(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new lt});
