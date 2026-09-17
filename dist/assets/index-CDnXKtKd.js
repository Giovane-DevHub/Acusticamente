var _e=Object.defineProperty;var Ve=(w,e,t)=>e in w?_e(w,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[e]=t;var ie=(w,e,t)=>Ve(w,typeof e!="symbol"?e+"":e,t);import{E as Ce,a as Ie}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const A of l.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&o(A)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const ze="acusticamente_audit_logs";class He{constructor(){ie(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(ze);e?this.logs=JSON.parse(e):this.log({usuarioId:"1",usuarioLogin:"1",usuarioNome:"Administrador",tela:"Sistema",acao:"Inicialização do Sistema",detalhes:"Base de dados inicializada com usuário administrador padrão (1)."})}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(ze,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,o=A=>A.toString().padStart(2,"0"),s=`${o(t.getDate())}/${o(t.getMonth()+1)}/${t.getFullYear()} ${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`,l={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(l),this.saveLogs(),window.dispatchEvent(new CustomEvent("audit_updated",{detail:l})),l}getLogs(){return[...this.logs]}clearLogs(){this.logs=[],this.saveLogs()}}const U=new He,Le="acusticamente_users",Me="acusticamente_students",Pe="acusticamente_plans",Te="acusticamente_appointments",De="acusticamente_settings",Be="acusticamente_payments";class Ue{constructor(){ie(this,"users",[]);ie(this,"students",[]);ie(this,"plans",[]);ie(this,"appointments",[]);ie(this,"payments",[]);ie(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",website:"www.acusticamente.com.br",cep:"01310-100",logradouro:"Avenida Paulista",numero:"1000",complemento:"Conjunto 42",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});this.initData()}initData(){const e=localStorage.getItem(Le);e?this.users=JSON.parse(e).map(a=>{var M,g;return{...a,permissoes:{...a.permissoes,financeiro:((M=a.permissoes)==null?void 0:M.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((g=a.permissoes)==null?void 0:g.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Pe);t?this.plans=JSON.parse(t):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(Me);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[{id:"aluno_1",nome:"Lucas Silveira",email:"lucas@email.com",telefone:"(11) 98231-1122",dataNascimento:"2014-05-14",instrumentoPrincipal:"Bateria",nivelMusical:"iniciante",responsavelNome:"Cláudia Silveira",responsavelTelefone:"(11) 98111-2233",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 2: Discriminação de Timbres",saldoReposicoes:1,valorMensalidade:280,diaVencimento:10,status:"ativo",observacoes:"Apresenta grande facilidade com ritmo.",criadoEm:new Date().toISOString()},{id:"aluno_2",nome:"Mariana Duarte",email:"mariana.duarte@email.com",telefone:"(11) 97123-4567",dataNascimento:"2008-09-21",instrumentoPrincipal:"Violão",nivelMusical:"basico",responsavelNome:"Roberto Duarte",responsavelTelefone:"(11) 97111-0000",responsavelParentesco:"Pai",planoId:"plano_2",moduloAtual:"Módulo 1: Primeiros Acordes e Levadas",saldoReposicoes:0,valorMensalidade:260,diaVencimento:20,status:"ativo",observacoes:"Iniciando estudos no violão popular.",criadoEm:new Date().toISOString()},{id:"aluno_3",nome:"Gabriel Santos",email:"gabriel.s@email.com",telefone:"(11) 99345-6789",dataNascimento:"1998-03-10",instrumentoPrincipal:"Piano & Teclado",nivelMusical:"intermediario",planoId:"plano_3",moduloAtual:"Módulo 1: Digitação e Postura",saldoReposicoes:0,valorMensalidade:320,diaVencimento:10,status:"ativo",observacoes:"Excelente dedicação nas aulas de piano.",criadoEm:new Date().toISOString()},{id:"aluno_4",nome:"Beatriz Costa",email:"beatriz.costa@email.com",telefone:"(11) 96543-2109",dataNascimento:"2015-11-05",instrumentoPrincipal:"Técnica Vocal / Canto",nivelMusical:"iniciante",responsavelNome:"Ana Costa",responsavelTelefone:"(11) 96500-1122",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 3: Harmonia Básica e Canto",saldoReposicoes:2,valorMensalidade:250,diaVencimento:5,status:"ativo",observacoes:"Foco no canto coral.",criadoEm:new Date().toISOString()}],this.saveStudents());const s=localStorage.getItem(Te);if(s)this.appointments=JSON.parse(s);else{const a=this.getTodayDateString();this.appointments=[{id:"app_1",titulo:"Aula de Percepção Sonora",alunoId:"aluno_1",planoId:"plano_1",data:a,horaInicio:"08:30",horaFim:"09:30",status:"concluido",observacoes:"Exercícios rítmicos concluídos.",criadoEm:new Date().toISOString()},{id:"app_2",titulo:"Aula Prática de Violão",alunoId:"aluno_2",planoId:"plano_2",data:a,horaInicio:"10:00",horaFim:"11:00",status:"agendado",observacoes:"Praticar transição entre acordes maiores.",criadoEm:new Date().toISOString()},{id:"app_3",titulo:"Prática de Piano Módulo 1",alunoId:"aluno_3",planoId:"plano_3",data:a,horaInicio:"14:00",horaFim:"15:00",status:"agendado",observacoes:"Início da escala de Dó Maior.",criadoEm:new Date().toISOString()},{id:"app_4",titulo:"Percepção e Harmonia",alunoId:"aluno_4",planoId:"plano_1",data:a,horaInicio:"16:30",horaFim:"17:30",status:"agendado",observacoes:"Preparação para apresentação musical.",criadoEm:new Date().toISOString()}],this.saveAppointments()}const l=localStorage.getItem(De);l&&(this.settings=JSON.parse(l));const A=localStorage.getItem(Be);A?this.payments=JSON.parse(A):(this.payments=[{id:"pag_1",alunoId:"aluno_1",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:280,dataVencimento:"2026-08-10",dataPagamento:"2026-08-08",formaPagamento:"pix",status:"pago",observacoes:"Pago pontualmente via Chave Pix",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_2",alunoId:"aluno_1",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:280,dataVencimento:"2026-09-10",status:"atrasado",observacoes:"Venceu dia 10 e aguarda regularização",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_3",alunoId:"aluno_2",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:260,dataVencimento:"2026-09-20",status:"pendente",observacoes:"A vencer no dia 20",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_4",alunoId:"aluno_3",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:320,dataVencimento:"2026-09-10",dataPagamento:"2026-09-10",formaPagamento:"cartao_credito",status:"pago",observacoes:"Pago no balcão da escola",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_5",alunoId:"aluno_4",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:250,dataVencimento:"2026-08-05",dataPagamento:"2026-08-05",formaPagamento:"dinheiro",status:"pago",observacoes:"Comprovante emitido",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_6",alunoId:"aluno_4",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:250,dataVencimento:"2026-09-05",status:"atrasado",observacoes:"Mensalidade vencida dia 05",criadoEm:"2026-09-01T10:00:00.000Z"}],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(a=>{var M;(M=a.observacoes)!=null&&M.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var M;(M=a.titulo)!=null&&M.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=o=>o.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}saveUsers(){localStorage.setItem(Le,JSON.stringify(this.users))}saveStudents(){localStorage.setItem(Me,JSON.stringify(this.students))}savePlans(){localStorage.setItem(Pe,JSON.stringify(this.plans))}saveAppointments(){localStorage.setItem(Te,JSON.stringify(this.appointments))}savePayments(){localStorage.setItem(Be,JSON.stringify(this.payments))}saveSettings(){localStorage.setItem(De,JSON.stringify(this.settings))}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const o={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(e,t,o){const s=this.users.findIndex(a=>a.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const l=this.users[s],A=l.isSistema;return this.users[s]={...l,...t,isSistema:A,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${l.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const o=this.users.find(s=>s.id===e);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(e,t){const o={...e,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(e,t,o){const s=this.students.findIndex(A=>A.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const l=this.students[s];return this.students[s]={...l,...t},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${l.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const o=this.students.find(s=>s.id===e);o&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const o={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(e,t,o){const s=this.plans.findIndex(A=>A.id===e);if(s===-1)throw new Error("Plano não encontrado.");const l=this.plans[s];return this.plans[s]={...l,...t},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${l.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const o=this.plans.find(s=>s.id===e);o&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(e,t){const o={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(e,t,o){const s=this.appointments.findIndex(A=>A.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const l=this.appointments[s];return this.appointments[s]={...l,...t},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${l.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const o=this.appointments.find(s=>s.id===e);o&&(this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(e,t){const o=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(e,t,o,s){const l=t?"falta_justificada":"falta_injustificada",A=this.updateAppointment(e,{status:l,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(g=>g.id===A.alunoId);let M=(a==null?void 0:a.saldoReposicoes)||0;return t&&a?(M=(a.saldoReposicoes||0)+1,a.saldoReposicoes=M,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${A.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${M}. Motivo: ${o||"Não especificado"}`})):!t&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${A.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:A,saldoReposicoes:M}}agendarReposicao(e,t,o){const s=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},o);if(t){const A=this.appointments.findIndex(a=>a.id===t);A!==-1&&(this.appointments[A].aulaReposicaoId=s.id,this.saveAppointments())}const l=this.students.find(A=>A.id===s.alunoId);return l&&typeof l.saldoReposicoes=="number"&&l.saldoReposicoes>0&&(l.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${l.nome}". 1 crédito abatido. Saldo restante: ${l.saldoReposicoes}.`})),s}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,o)=>{const s=`${t.data}T${t.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<e&&(o.status="atrasado",t=!0)}),t&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(o=>o.alunoId===e&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<t))}addPayment(e,t){const o=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<o&&(s="atrasado");const l={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(l),this.savePayments();const A=this.students.find(a=>a.id===l.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${l.descricao}" (R$ ${l.valor.toFixed(2)}) cadastrado para o aluno "${(A==null?void 0:A.nome)||"N/A"}" com vencimento em ${l.dataVencimento}.`}),l}darBaixaPayment(e,t,o,s,l){const A=this.payments.findIndex(c=>c.id===e);if(A===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[A],M=a.status;a.status="pago",a.dataPagamento=t,a.formaPagamento=o,l!==void 0&&(a.observacoes=l.trim()?l.trim():a.observacoes),this.savePayments();const g=this.students.find(c=>c.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(g==null?void 0:g.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${t} (Status anterior: ${M}).`}),a}updatePayment(e,t,o){const s=this.payments.findIndex(c=>c.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const l=this.getTodayDateString();let A=t.status||this.payments[s].status;const a=t.dataVencimento||this.payments[s].dataVencimento;A==="pendente"&&a<l&&(A="atrasado"),this.payments[s]={...this.payments[s],...t,status:A},this.savePayments();const M=this.payments[s],g=this.students.find(c=>c.id===M.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${M.descricao}" do aluno "${(g==null?void 0:g.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const o=this.payments.find(l=>l.id===e);if(!o)return;this.payments=this.payments.filter(l=>l.id!==e),this.savePayments();const s=this.students.find(l=>l.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,o){const s=S=>S.toString().padStart(2,"0"),l=`${e}-${s(t)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||l,M=this.students.filter(S=>S.status==="ativo");let g=0,c=0;return M.forEach(S=>{if(this.payments.some(f=>f.alunoId===S.id&&(f.mesReferencia===l||f.dataVencimento.startsWith(l)))){c++;return}const r=S.diaVencimento||10,p=new Date(e,t,0).getDate(),x=Math.min(r,p),b=`${e}-${s(t)}-${s(x)}`,i=typeof S.valorMensalidade=="number"&&S.valorMensalidade>0?S.valorMensalidade:280;this.addPayment({alunoId:S.id,descricao:`Mensalidade ${a}/${e}`,mesReferencia:l,valor:i,dataVencimento:b,status:"pendente",observacoes:`Gerado automaticamente para o plano ${S.moduloAtual||S.instrumentoPrincipal||"Música"}`},o),g++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${e}: ${g} mensalidade(s) criada(s) e ${c} já existente(s) pulada(s).`}),{criadas:g,puladas:c}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const I=new Ue,ge={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function we(w){var s,l,A,a,M,g,c,S,L,r,p,x,b,i,f,v,C,u,k,z,n,m,$,d,y,D,T,P;if(!w)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(w.papel==="admin")return JSON.parse(JSON.stringify(ge.admin));const e=ge[w.papel]||ge.professor,t=w.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const o=B=>typeof B=="boolean";return{alunos:{acesso:o(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:o(t.alunos)?t.alunos:((l=t.alunos)==null?void 0:l.cadastrar)??e.alunos.cadastrar,alterar:o(t.alunos)?t.alunos:((A=t.alunos)==null?void 0:A.alterar)??e.alunos.alterar,excluir:o(t.alunos)?!1:((a=t.alunos)==null?void 0:a.excluir)??e.alunos.excluir},agenda:{acesso:o(t.agenda)?t.agenda:((M=t.agenda)==null?void 0:M.acesso)??e.agenda.acesso,cadastrar:o(t.agenda)?t.agenda:((g=t.agenda)==null?void 0:g.cadastrar)??e.agenda.cadastrar,alterar:o(t.agenda)?t.agenda:((c=t.agenda)==null?void 0:c.alterar)??e.agenda.alterar,excluir:o(t.agenda)?!1:((S=t.agenda)==null?void 0:S.excluir)??e.agenda.excluir},planos:{acesso:o(t.planos)?t.planos:((L=t.planos)==null?void 0:L.acesso)??e.planos.acesso,cadastrar:o(t.planos)?t.planos:((r=t.planos)==null?void 0:r.cadastrar)??e.planos.cadastrar,alterar:o(t.planos)?t.planos:((p=t.planos)==null?void 0:p.alterar)??e.planos.alterar,excluir:o(t.planos)?!1:((x=t.planos)==null?void 0:x.excluir)??e.planos.excluir},home:{acesso:o(t.home)?t.home:((b=t.home)==null?void 0:b.acesso)??e.home.acesso},financeiro:{acesso:o(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.acesso)??((f=e.financeiro)==null?void 0:f.acesso)??!1,cadastrar:o(t.financeiro)?t.financeiro:((v=t.financeiro)==null?void 0:v.cadastrar)??((C=e.financeiro)==null?void 0:C.cadastrar)??!1,alterar:o(t.financeiro)?t.financeiro:((u=t.financeiro)==null?void 0:u.alterar)??((k=e.financeiro)==null?void 0:k.alterar)??!1,excluir:o(t.financeiro)?!1:((z=t.financeiro)==null?void 0:z.excluir)??((n=e.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(t.relatorios)?t.relatorios:((m=t.relatorios)==null?void 0:m.acesso)??(($=e.relatorios)==null?void 0:$.acesso)??!0,gerar:o(t.relatorios)?t.relatorios:((d=t.relatorios)==null?void 0:d.gerar)??((y=e.relatorios)==null?void 0:y.gerar)??!0},auditoria:{acesso:o(t.auditoria)?t.auditoria:((D=t.auditoria)==null?void 0:D.acesso)??e.auditoria.acesso},configuracoes:{acesso:o(t.configuracoes)?t.configuracoes:((T=t.configuracoes)==null?void 0:T.acesso)??e.configuracoes.acesso,alterar:o(t.configuracoes)?t.configuracoes:((P=t.configuracoes)==null?void 0:P.alterar)??e.configuracoes.alterar}}}function le(w,e){if(!w)return!1;if(e==="login")return!0;if(e==="user")return w.papel==="admin";if(w.papel==="admin"||w.isSistema)return!0;const o=we(w)[e];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function Z(w,e,t){if(!w)return!1;if(w.papel==="admin")return!0;const s=we(w)[e];return s?!!s[t]:!1}const $e="acusticamente_active_session";class Ge{constructor(){ie(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem($e);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=I.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem($e,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=I.getUsers().find(l=>l.login===e.trim());return s?s.senha!==t.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem($e,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem($e),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const W=new Ge;function Je(w=40){return`
    <svg width="${w}" height="${w}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function ue(w,e=40){return w&&w.trim()!==""?`<img src="${w}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:Je(e)}function R(w,e="success"){const t=document.getElementById("toast-container");if(!t)return;const o=document.createElement("div");o.className=`toast toast-${e}`,o.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${w}</span>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function re(w){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${w.modalClass||""}">
        <div class="modal-header">
          <h3>${w.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${w.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${w.cancelText||"Cancelar"}</button>
          ${w.confirmText?`<button type="button" class="btn ${w.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${w.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const t=document.getElementById("active-modal-backdrop"),o=document.getElementById("modal-close-btn"),s=document.getElementById("modal-cancel-btn"),l=document.getElementById("modal-confirm-btn"),A=()=>{e.innerHTML="",w.onCancel&&w.onCancel()};o.onclick=A,s.onclick=A,t.onclick=a=>{a.target===t&&A()},l&&w.onConfirm&&(l.onclick=async()=>{const a=document.querySelector(".modal-card");await w.onConfirm(a)!==!1&&(e.innerHTML="")})}function ve(){const w=document.getElementById("modal-container");w&&(w.innerHTML="")}function fe(w){re({title:w.title||"Confirmar Exclusão",bodyHtml:`
      <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
          ⚠️
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
            ${w.message}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Esta operação não poderá ser desfeita.
          </div>
        </div>
      </div>
    `,confirmText:w.confirmText||"Excluir Definitivamente",confirmBtnClass:w.confirmBtnClass||"btn-danger",onConfirm:()=>(w.onConfirm(),!0)})}const j={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},Ae="acusticamente_auth_remember",Fe="acusticamente_manual_logout";function Ye(w){const e=document.createElement("div");e.className="login-page";const t=I.getSettings(),o=t.nomeMenu||t.nomeFantasia||"Acusticamente";let s={username:"",password:"",remember:!1,autoLogin:!1};try{const g=localStorage.getItem(Ae);g&&(s={...s,...JSON.parse(g)})}catch{s={username:"",password:"",remember:!1,autoLogin:!1}}e.innerHTML=`
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
  `;const l=e.querySelector("#login-remember"),A=e.querySelector("#login-autologin");A==null||A.addEventListener("change",()=>{A.checked&&!l.checked&&(l.checked=!0)}),l==null||l.addEventListener("change",()=>{!l.checked&&A.checked&&(A.checked=!1)});const a=e.querySelector("#login-form");a.onsubmit=g=>{var i;g.preventDefault();const c=e.querySelector("#login-username"),S=e.querySelector("#login-password"),L=c.value.trim(),r=S.value.trim(),p=l.checked,x=A.checked,b=W.login(L,r);b.success?(p?localStorage.setItem(Ae,JSON.stringify({username:L,password:r,remember:!0,autoLogin:x})):localStorage.removeItem(Ae),sessionStorage.removeItem(Fe),R(`Bem-vindo, ${(i=b.user)==null?void 0:i.nome}!`,"success"),w()):R(b.message,"error")};const M=sessionStorage.getItem(Fe)==="true";return s.autoLogin&&s.remember&&s.username&&s.password&&!M&&setTimeout(()=>{var c;if(!e.isConnected&&!document.body.contains(e))return;const g=W.login(s.username,s.password);g.success&&(R(`Bem-vindo de volta, ${(c=g.user)==null?void 0:c.nome}!`,"success"),w())},100),e}function Ne(w){var c,S;const e=document.createElement("div"),t=W.getCurrentUser(),o=I.getStudents(),s=I.getPlans(),l=I.getAppointments(),A=I.getTodayDateString(),a=l.filter(L=>L.data===A),M=o.filter(L=>L.status==="ativo").length,g=a.find(L=>L.status==="agendado");return e.innerHTML=`
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
        ${j.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${j.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${a.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${j.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${M}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${j.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${g?g.horaInicio:"--:--"}</span>
          <span class="metric-label">${g?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${j.planos}
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
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(L=>{const r=o.find(f=>f.id===L.alunoId),p=s.find(f=>f.id===L.planoId),x=L.status==="concluido",b=L.status==="agendado";let i='<span class="badge badge-warning">⏳ Agendado</span>';return x?i='<span class="badge badge-success">✓ Concluído</span>':L.status==="falta_justificada"?i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':L.status==="falta_injustificada"?i='<span class="badge badge-danger">✕ Falta Injustificada</span>':L.status==="cancelado"&&(i='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${L.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${L.horaInicio} - ${L.horaFim}</strong>
                            ${L.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
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
                            ${b?`<button class="btn btn-secondary btn-complete-class" data-id="${L.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${x?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(c=e.querySelector("#home-btn-new-appointment"))==null||c.addEventListener("click",()=>{w("agenda")}),(S=e.querySelector("#home-btn-view-all-agenda"))==null||S.addEventListener("click",()=>{w("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(L=>{L.addEventListener("click",r=>{const p=r.currentTarget.dataset.id;p&&(I.updateAppointment(p,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),R("Aula concluída com sucesso!","success"),w("home"))})}),e}function We(w){const e=document.createElement("div"),t=W.getCurrentUser();let o=new Date;function s(){var C,u,k,z;const a=I.getStudents();I.getPlans();const M=I.getAppointments(),g=o.getFullYear(),c=o.getMonth(),S=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],L=new Date(g,c,1).getDay(),r=new Date(g,c+1,0).getDate(),p=new Date(g,c,0).getDate(),x=new Date,b=x.getFullYear()===g&&x.getMonth()===c,i=[];for(let n=L;n>0;n--){const m=p-n+1;i.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${m}</span>
          </div>
        </div>
      `)}for(let n=1;n<=r;n++){const m=B=>B.toString().padStart(2,"0"),$=`${g}-${m(c+1)}-${m(n)}`,d=b&&x.getDate()===n,y=M.filter(B=>B.data===$),D=y.slice(0,3).map(B=>{const E=a.find(V=>V.id===B.alunoId),F=E?E.nome.split(" ")[0]:"Aula";let N="",_="";return B.status==="concluido"?(N="concluido",_="✓ "):B.status==="falta_justificada"?(N="falta-justificada",_="⚠️ "):B.status==="falta_injustificada"?(N="falta-injustificada",_="✕ "):B.tipoAula==="reposicao"&&(N="reposicao",_="🔄 "),`
            <div class="calendar-appointment-badge ${N}" 
                 data-app-id="${B.id}" 
                 title="${B.horaInicio} - ${(E==null?void 0:E.nome)||"Aluno"} (${B.status}${B.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${_}${B.horaInicio}</strong> ${F}
            </div>
          `}).join(""),T=y.length>3?y.length-3:0,P=T>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${T} mais</div>`:"";i.push(`
        <div class="calendar-day-cell ${d?"today":""}" data-date="${$}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${y.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${y.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${D}
            ${P}
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
            <h2 class="calendar-month-title">${S[c]} de ${g}</h2>
            
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
                    ${j.plus} Nova Aula / Compromisso
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
    `,(C=e.querySelector("#agenda-btn-prev"))==null||C.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(u=e.querySelector("#agenda-btn-next"))==null||u.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(k=e.querySelector("#agenda-btn-today"))==null||k.addEventListener("click",()=>{o=new Date,s()}),(z=e.querySelector("#agenda-btn-new-app"))==null||z.addEventListener("click",()=>{A()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",m=>{const $=n.dataset.date;$&&l($)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",m=>{m.stopPropagation();const $=n.dataset.appId,d=M.find(y=>y.id===$);d&&l(d.data)})})}function l(a){const M=I.getStudents(),g=I.getPlans(),c=I.getAppointments().filter(i=>i.data===a),[S,L,r]=a.split("-"),p=`${r}/${L}/${S}`,x=c.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${c.map(i=>{const f=M.find(y=>y.id===i.alunoId),v=g.find(y=>y.id===i.planoId),C=i.status==="concluido",u=i.status==="falta_justificada",k=i.status==="falta_injustificada",z=i.status==="cancelado",n=i.status==="agendado",m=i.tipoAula==="reposicao";let $="var(--color-coral)",d='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return C?($="var(--status-success)",d='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):u?($="#f59e0b",d='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):k?($="var(--status-danger)",d='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):z&&($="var(--border-subtle)",d='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
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
                              ${j.edit}
                            </button>
                          `:""}
                      ${Z(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${i.id}" title="Excluir">
                              ${j.trash}
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
                  ${j.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${x}
      </div>
    `;re({title:`Aulas do Dia: ${p}`,bodyHtml:b,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var i;(i=document.getElementById("btn-modal-new-appointment"))==null||i.addEventListener("click",()=>{ve(),A({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(f=>{f.addEventListener("click",v=>{const C=v.currentTarget.dataset.id;C&&(I.marcarPresenca(C,(t==null?void 0:t.nome)||"Administrador"),R("Presença confirmada e aula concluída!","success"),s(),l(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(f=>{f.addEventListener("click",v=>{const C=v.currentTarget.dataset.id,u=v.currentTarget.dataset.name;if(!C)return;const k=prompt(`Informe o motivo da falta justificada de ${u} (Ex: Atestado médico, Viagem em família):`);if(k===null)return;const z=I.registrarFalta(C,!0,k,(t==null?void 0:t.nome)||"Administrador");R(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${z.saldoReposicoes}).`,"success"),s(),l(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(f=>{f.addEventListener("click",v=>{const C=v.currentTarget.dataset.id;C&&fe({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{I.registrarFalta(C,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),R("Falta injustificada registrada.","info"),s(),l(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(f=>{f.addEventListener("click",v=>{const C=v.currentTarget,u=C.dataset.id,k=C.dataset.studentId,z=C.dataset.title;ve(),A({studentId:k,aulaOriginalId:u,tipoAula:"reposicao",titulo:z?`Reposição: ${z}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(f=>{f.addEventListener("click",v=>{const C=v.currentTarget.dataset.id,u=I.getAppointments().find(k=>k.id===C);u&&(ve(),A({existingApp:u}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(f=>{f.addEventListener("click",v=>{const C=v.currentTarget.dataset.id,u=I.getAppointments().find(k=>k.id===C);u&&fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${u.titulo}</strong>"?`,onConfirm:()=>{I.deleteAppointment(u.id,(t==null?void 0:t.nome)||"Administrador"),R("Compromisso removido.","info"),s(),l(a)}})})})},50)}function A(a){const M=I.getStudents(),g=I.getPlans(),c=a==null?void 0:a.existingApp,S=!!c,L=(c==null?void 0:c.alunoId)||(a==null?void 0:a.studentId)||"",r=(c==null?void 0:c.data)||(a==null?void 0:a.defaultDate)||I.getTodayDateString(),p=((c==null?void 0:c.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",x=M.map(f=>`<option value="${f.id}" ${L===f.id?"selected":""}>${f.nome} (${f.instrumentoPrincipal||"Geral"}) - Saldo: ${f.saldoReposicoes||0} rep.</option>`).join(""),b=g.map(f=>`<option value="${f.id}" ${(c==null?void 0:c.planoId)===f.id?"selected":""}>${f.nome}</option>`).join(""),i=`
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
            ${x}
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

        ${S?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${j.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;re({title:S?"Editar Aula / Compromisso":p?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:i,confirmText:S?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const f=document.getElementById("app-title").value.trim(),v=document.getElementById("app-student").value,C=document.getElementById("app-plan").value,u=document.getElementById("app-date").value,k=document.getElementById("app-time-start").value,z=document.getElementById("app-time-end").value,n=document.getElementById("app-status").value,m=document.getElementById("app-justificativa").value.trim(),$=document.getElementById("app-obs").value.trim(),d=document.querySelector('input[name="app-tipo-aula"]:checked'),y=(d==null?void 0:d.value)||"regular";if(!f||!v||!u||!k)return R("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const D=(t==null?void 0:t.nome)||"Administrador";return S&&c?(I.updateAppointment(c.id,{titulo:f,alunoId:v,planoId:C||void 0,data:u,horaInicio:k,horaFim:z,status:n,tipoAula:y,justificativaFalta:m||void 0,observacoes:$},D),R("Aula atualizada com sucesso!","success")):y==="reposicao"?(I.agendarReposicao({titulo:f,alunoId:v,planoId:C||void 0,data:u,horaInicio:k,horaFim:z,status:n,justificativaFalta:m||void 0,observacoes:$},a==null?void 0:a.aulaOriginalId,D),R("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(I.addAppointment({titulo:f,alunoId:v,planoId:C||void 0,data:u,horaInicio:k,horaFim:z,status:n,tipoAula:y,justificativaFalta:m||void 0,observacoes:$},D),R("Aula agendada com sucesso!","success")),s(),!0}}),S&&c&&setTimeout(()=>{var f;(f=document.getElementById("btn-delete-app"))==null||f.addEventListener("click",()=>{fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${c.titulo}</strong>"?`,onConfirm:()=>{I.deleteAppointment(c.id,(t==null?void 0:t.nome)||"Administrador"),R("Compromisso removido.","info"),ve(),s()}})})},50)}return s(),e}const Ze=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function Re(w){const e=(w||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function Xe(w){if(!w)return"";const e=new Date(w+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,`${o} anos`}function Qe(w,e){const t=w.replace(/\D/g,"");if(!t)return"";const o=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function je(w,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${w.id.toUpperCase()}</div>
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
              <strong>${w.descricao}</strong>
              ${w.observacoes?`<br><small style="color: #6b7280;">${w.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${w.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${w.dataPagamento?w.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${w.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${w.formaPagamento?t[w.formaPagamento]||w.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${w.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;re({title:`Recibo de Pagamento: ${w.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function Ke(w){const e=document.createElement("div"),t=W.getCurrentUser();let o="";function s(){var p,x;const a=I.getStudents(),M=I.getPlans(),g=Z(t,"alunos","cadastrar"),c=Z(t,"alunos","alterar"),S=Z(t,"alunos","excluir"),L=a.filter(b=>b.nome.toLowerCase().includes(o.toLowerCase())||b.email.toLowerCase().includes(o.toLowerCase())||b.telefone.includes(o)||b.instrumentoPrincipal&&b.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||b.responsavelNome&&b.responsavelNome.toLowerCase().includes(o.toLowerCase()));e.innerHTML=`
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
                ${j.plus} Cadastrar Novo Aluno
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
            ${j.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${L.length})</h3>
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
              ${L.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':L.map(b=>{const i=M.find(v=>v.id===b.planoId),f=b.status==="ativo";return`
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
                                  ${j.profile}
                                </button>
                                ${c?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${b.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${S?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${b.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${j.trash}
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
    `;const r=e.querySelector("#student-search-input");r==null||r.addEventListener("input",b=>{o=b.target.value,s();const i=e.querySelector("#student-search-input");i&&(i.focus(),i.selectionStart=i.selectionEnd=i.value.length)}),(p=e.querySelector("#btn-clear-search"))==null||p.addEventListener("click",()=>{o="",s()}),(x=e.querySelector("#btn-new-student"))==null||x.addEventListener("click",()=>{A()}),e.querySelectorAll(".btn-view-student").forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.id,v=I.getStudents().find(C=>C.id===f);v&&l(v)})}),e.querySelectorAll(".btn-edit-student").forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.id,v=I.getStudents().find(C=>C.id===f);v&&A(v)})}),e.querySelectorAll(".btn-delete-student").forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.id,v=I.getStudents().find(C=>C.id===f);v&&fe({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${v.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{I.deleteStudent(v.id,(t==null?void 0:t.nome)||"Administrador"),R(`Aluno "${v.nome}" excluído.`,"info"),s()}})})})}function l(a){I.getPlans().find(n=>n.id===a.planoId);const g=I.getStudentAppointments(a.id),c=I.getStudentPayments(a.id),S=Xe(a.dataNascimento),L=Qe(a.telefone,a.nome),r=a.saldoReposicoes||0,p=I.isStudentOverdue(a.id),x=a.status==="ativo",b=Z(t,"financeiro","alterar"),i=g.length,f=g.filter(n=>n.status==="concluido").length,v=g.filter(n=>n.status==="falta_justificada").length,C=g.filter(n=>n.status==="falta_injustificada").length,u=c.filter(n=>n.status==="pago").reduce((n,m)=>n+m.valor,0),k=c.filter(n=>n.status!=="pago").reduce((n,m)=>n+m.valor,0),z=`
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
                <span class="badge ${x?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${x?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${Re(a.instrumentoPrincipal)} ${a.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${a.nivelMusical?a.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${S?`&bull; <span style="color: var(--text-muted);">${S}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${L?`
                  <a href="${L}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
                    ${j.whatsapp} WhatsApp
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
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${v+C}</div>
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
              <div style="font-size: 1.05rem; font-weight: 700; color: ${k>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${k.toFixed(2)}
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
    `;re({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:z,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var y;const n=document.getElementById("btn-tab-pedagogico"),m=document.getElementById("btn-tab-financeiro"),$=document.getElementById("panel-tab-pedagogico"),d=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),m==null||m.classList.remove("active"),$&&($.style.display="flex"),d&&(d.style.display="none")}),m==null||m.addEventListener("click",()=>{m.classList.add("active"),n==null||n.classList.remove("active"),d&&(d.style.display="flex"),$&&($.style.display="none")}),(y=document.getElementById("btn-quick-schedule-reposicao"))==null||y.addEventListener("click",()=>{ve(),w("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(D=>{D.addEventListener("click",T=>{const P=T.currentTarget.dataset.id,B=c.find(E=>E.id===P);B&&je(B,a)})}),document.querySelectorAll(".btn-pay-now").forEach(D=>{D.addEventListener("click",T=>{const P=T.currentTarget.dataset.id,B=c.find(N=>N.id===P);if(!B)return;const E=I.getTodayDateString(),F=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${B.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${B.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${B.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${a.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${E}" required />
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
          `;re({title:`Dar Baixa: ${B.descricao}`,bodyHtml:F,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const N=document.getElementById("baixa-data").value,_=document.getElementById("baixa-forma").value,V=document.getElementById("baixa-obs").value;if(!N)return R("Informe a data de recebimento.","error"),!1;const J=(t==null?void 0:t.nome)||"Administrador";I.darBaixaPayment(B.id,N,_,J,V),R(`Baixa de R$ ${B.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const K=I.getStudents().find(G=>G.id===a.id)||a;return l(K),setTimeout(()=>{var G;(G=document.getElementById("btn-tab-financeiro"))==null||G.click()},50),!0}})})})},50)}function A(a){const M=I.getPlans(),g=!!a,c=a?I.getStudentPayments(a.id):[],S=M.map(p=>`<option value="${p.id}" ${(a==null?void 0:a.planoId)===p.id?"selected":""}>${p.nome}</option>`).join(""),L=Ze.map(p=>`<option value="${p}" ${(a==null?void 0:a.instrumentoPrincipal)===p?"selected":""}>${p}</option>`).join(""),r=`
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
              ${L}
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
              ${S}
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
                        ${c.map(p=>{const x=p.dataVencimento.split("-").reverse().join("/"),b=p.dataPagamento?p.dataPagamento.split("-").reverse().join("/"):"-";let i="";return p.status==="pago"?i='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':p.status==="atrasado"?i='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':i='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${p.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${x}</td>
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
    `;re({title:g?`Editar Aluno: ${a.nome}`:"Cadastrar Novo Aluno",bodyHtml:r,modalClass:"modal-lg",confirmText:g?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var F,N;const p=document.getElementById("student-nome").value.trim(),x=document.getElementById("student-nascimento").value,b=document.getElementById("student-email").value.trim(),i=document.getElementById("student-telefone").value.trim(),f=document.getElementById("student-resp-nome").value.trim(),v=document.getElementById("student-resp-parentesco").value,C=document.getElementById("student-resp-tel").value.trim(),u=document.getElementById("student-instrumento").value,k=document.getElementById("student-nivel").value,z=document.getElementById("student-plano").value,n=document.getElementById("student-status").value,m=document.getElementById("student-modulo").value.trim(),$=document.getElementById("student-saldo-reposicoes").value,d=Math.max(0,parseInt($,10)||0),y=(F=document.getElementById("student-valor-mensalidade"))==null?void 0:F.value,D=Math.max(0,parseFloat(y)||280),T=(N=document.getElementById("student-dia-vencimento"))==null?void 0:N.value,P=Math.min(31,Math.max(1,parseInt(T,10)||10)),B=document.getElementById("student-obs").value.trim();if(!p)return R("Informe o nome do aluno.","error"),!1;const E=(t==null?void 0:t.nome)||"Administrador";return g&&a?(I.updateStudent(a.id,{nome:p,dataNascimento:x,email:b,telefone:i,responsavelNome:f,responsavelParentesco:v,responsavelTelefone:C,instrumentoPrincipal:u,nivelMusical:k,planoId:z,status:n,moduloAtual:m,saldoReposicoes:d,valorMensalidade:D,diaVencimento:P,observacoes:B},E),R("Dados do aluno atualizados com sucesso!","success")):(I.addStudent({nome:p,dataNascimento:x,email:b,telefone:i,responsavelNome:f,responsavelParentesco:v,responsavelTelefone:C,instrumentoPrincipal:u,nivelMusical:k,planoId:z,status:n,moduloAtual:m,saldoReposicoes:d,valorMensalidade:D,diaVencimento:P,observacoes:B},E),R("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const p=document.querySelectorAll(".btn-form-tab"),x=document.querySelectorAll(".form-tab-panel");p.forEach(b=>{b.addEventListener("click",i=>{const f=i.currentTarget.dataset.tab;p.forEach(v=>{v.classList.remove("active")}),i.currentTarget.classList.add("active"),x.forEach(v=>{v.style.display=v.id===`form-panel-${f}`?"flex":"none"})})})},50)}return s(),e}const pe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],qe=pe.reduce((w,e)=>w+e.items.length,0);function et(w){let e=0;return pe.forEach(t=>{const o=w[t.key];o&&t.items.forEach(s=>{o[s.key]&&e++})}),e}function tt(w){var A;const e=document.createElement("div"),t=W.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(A=e.querySelector("#btn-unauth-home"))==null||A.addEventListener("click",()=>w("home")),e;let o="";function s(){var S,L;const a=I.getUsers(),M=o.toLowerCase(),g=a.filter(r=>r.nome.toLowerCase().includes(M)||r.login.toLowerCase().includes(M)||r.papel.toLowerCase().includes(M));e.innerHTML=`
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
          ${j.plus} Cadastrar Novo Usuário
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
            ${j.search}
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
              ${g.map(r=>{const p=r.papel==="admin"?"Administrador":r.papel==="professor"?"Professor":"Atendente",x=we(r),b=et(x);return`
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
                            ${j.edit}
                          </button>
                          ${r.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${j.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${r.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
                                   ${j.trash}
                                 </button>`}
                        </div>
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(S=e.querySelector("#btn-new-user"))==null||S.addEventListener("click",()=>{l()});const c=e.querySelector("#user-search-input");c&&c.addEventListener("input",r=>{o=r.target.value,s();const p=e.querySelector("#user-search-input");p&&(p.focus(),p.setSelectionRange(p.value.length,p.value.length))}),(L=e.querySelector("#btn-clear-search"))==null||L.addEventListener("click",()=>{o="",s()}),e.querySelectorAll(".btn-edit-user").forEach(r=>{r.addEventListener("click",p=>{const x=p.currentTarget.dataset.id,b=I.getUsers().find(i=>i.id===x);b&&l(b)})}),e.querySelectorAll(".btn-delete-user").forEach(r=>{r.addEventListener("click",p=>{const x=p.currentTarget.dataset.id,b=I.getUsers().find(i=>i.id===x);b&&fe({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${b.nome}</strong>" (login: <code>${b.login}</code>)?`,onConfirm:()=>{try{I.deleteUser(b.id,(t==null?void 0:t.nome)||"Administrador"),R(`Usuário "${b.nome}" excluído.`,"info"),s()}catch(i){R(i.message||"Erro ao excluir usuário.","error")}}})})})}function l(a){var i,f,v,C;const M=!!a,g=a?a.papel:"professor",c=g==="admin",S=we(a),L=`
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
            <input type="password" id="user-senha" class="form-input" placeholder="${M?"Nova senha":"Ex: 123456"}" value="${(a==null?void 0:a.senha)||""}" required />
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
            ${pe.map(u=>{const k=S[u.key]||{},z=u.items.filter(n=>k[n.key]).length;return`
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
                          ${z}/${u.items.length} liberadas
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
                    ${u.items.map(n=>{const m=!!k[n.key];return`
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
    `;re({title:M?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:L,modalClass:"modal-lg",confirmText:M?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var D,T,P,B,E,F,N,_,V,J,K,G,Q,Y,ae,ee,de,oe,O,se,X,me;const u=document.getElementById("user-nome").value.trim(),k=document.getElementById("user-login").value.trim(),z=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),m=n?n.value:"professor";if(!u||!k||!z)return R("Preencha Nome, Login e Senha.","error"),!1;if(I.getUsers().find(q=>q.login===k&&q.id!==(a==null?void 0:a.id)))return R(`O login "${k}" já está em uso por outro usuário.`,"error"),!1;let d;m==="admin"?d=JSON.parse(JSON.stringify(ge.admin)):d={alunos:{acesso:((D=document.getElementById("perm-alunos-acesso"))==null?void 0:D.checked)??!1,cadastrar:((T=document.getElementById("perm-alunos-cadastrar"))==null?void 0:T.checked)??!1,alterar:((P=document.getElementById("perm-alunos-alterar"))==null?void 0:P.checked)??!1,excluir:((B=document.getElementById("perm-alunos-excluir"))==null?void 0:B.checked)??!1},agenda:{acesso:((E=document.getElementById("perm-agenda-acesso"))==null?void 0:E.checked)??!1,cadastrar:((F=document.getElementById("perm-agenda-cadastrar"))==null?void 0:F.checked)??!1,alterar:((N=document.getElementById("perm-agenda-alterar"))==null?void 0:N.checked)??!1,excluir:((_=document.getElementById("perm-agenda-excluir"))==null?void 0:_.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((J=document.getElementById("perm-planos-cadastrar"))==null?void 0:J.checked)??!1,alterar:((K=document.getElementById("perm-planos-alterar"))==null?void 0:K.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((Q=document.getElementById("perm-financeiro-acesso"))==null?void 0:Q.checked)??!1,cadastrar:((Y=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:Y.checked)??!1,alterar:((ae=document.getElementById("perm-financeiro-alterar"))==null?void 0:ae.checked)??!1,excluir:((ee=document.getElementById("perm-financeiro-excluir"))==null?void 0:ee.checked)??!1},relatorios:{acesso:((de=document.getElementById("perm-relatorios-acesso"))==null?void 0:de.checked)??!1,gerar:((oe=document.getElementById("perm-relatorios-gerar"))==null?void 0:oe.checked)??!1},home:{acesso:((O=document.getElementById("perm-home-acesso"))==null?void 0:O.checked)??!1},auditoria:{acesso:((se=document.getElementById("perm-auditoria-acesso"))==null?void 0:se.checked)??!1},configuracoes:{acesso:((X=document.getElementById("perm-configuracoes-acesso"))==null?void 0:X.checked)??!1,alterar:((me=document.getElementById("perm-configuracoes-alterar"))==null?void 0:me.checked)??!1}};const y=(t==null?void 0:t.nome)||"Administrador";return M&&a?(I.updateUser(a.id,{nome:u,login:k,senha:z,papel:a.isSistema?"admin":m,permissoes:a.isSistema?ge.admin:d},y),R("Usuário e permissões atualizados com sucesso!","success")):(I.addUser({nome:u,login:k,senha:z,papel:m,permissoes:d},y),R("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const r=document.getElementById("user-papel"),p=document.getElementById("user-permissions-section"),x=(u,k,z)=>{const n=document.getElementById(`row-perm-${u}-${k}`),m=document.getElementById(`badge-perm-${u}-${k}`);n&&m&&(z?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",m.className="badge badge-success",m.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",m.className="badge badge-coral",m.textContent="Bloqueado")),b(u)},b=u=>{const k=document.getElementById(`group-counter-${u}`),z=pe.find(n=>n.key===u);if(k&&z){let n=0;z.items.forEach(m=>{const $=document.getElementById(`perm-${u}-${m.key}`);$&&$.checked&&n++}),k.textContent=`${n}/${z.items.length} liberadas`}};r==null||r.addEventListener("change",()=>{const u=r.value;if(u==="admin")p.style.display="none";else if(p.style.display="block",!M){const k=ge[u]||ge.professor;pe.forEach(z=>{z.items.forEach(n=>{var $;const m=document.getElementById(`perm-${z.key}-${n.key}`);if(m){const d=(($=k[z.key])==null?void 0:$[n.key])??!1;m.checked=d,x(z.key,n.key,d)}})})}}),pe.forEach(u=>{const k=document.getElementById(`header-group-${u.key}`),z=document.getElementById(`group-body-${u.key}`),n=document.getElementById(`arrow-perm-${u.key}`);k==null||k.addEventListener("click",m=>{if(!m.target.closest(".btn-group-toggle")&&z&&n){const $=z.style.display==="flex";z.style.display=$?"none":"flex",n.style.transform=$?"rotate(0deg)":"rotate(180deg)"}}),u.items.forEach(m=>{const $=document.getElementById(`perm-${u.key}-${m.key}`);$==null||$.addEventListener("change",()=>{if(x(u.key,m.key,$.checked),$.checked&&m.key!=="acesso"){const d=document.getElementById(`perm-${u.key}-acesso`);d&&!d.checked&&(d.checked=!0,x(u.key,"acesso",!0))}!$.checked&&m.key==="acesso"&&u.items.forEach(d=>{if(d.key!=="acesso"){const y=document.getElementById(`perm-${u.key}-${d.key}`);y&&y.checked&&(y.checked=!1,x(u.key,d.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${u.key}"]`).forEach(m=>{m.addEventListener("click",$=>{$.stopPropagation();const d=u.items.map(D=>document.getElementById(`perm-${u.key}-${D.key}`)).filter(Boolean),y=d.every(D=>D.checked);d.forEach(D=>{D.checked=!y,x(u.key,D.dataset.action,!y)})})})}),(i=document.getElementById("btn-perm-expand"))==null||i.addEventListener("click",()=>{pe.forEach(u=>{const k=document.getElementById(`group-body-${u.key}`),z=document.getElementById(`arrow-perm-${u.key}`);k&&z&&(k.style.display="flex",z.style.transform="rotate(180deg)")})}),(f=document.getElementById("btn-perm-collapse"))==null||f.addEventListener("click",()=>{pe.forEach(u=>{const k=document.getElementById(`group-body-${u.key}`),z=document.getElementById(`arrow-perm-${u.key}`);k&&z&&(k.style.display="none",z.style.transform="rotate(0deg)")})}),(v=document.getElementById("btn-perm-all"))==null||v.addEventListener("click",()=>{pe.forEach(u=>{u.items.forEach(k=>{const z=document.getElementById(`perm-${u.key}-${k.key}`);z&&(z.checked=!0,x(u.key,k.key,!0))})})}),(C=document.getElementById("btn-perm-none"))==null||C.addEventListener("click",()=>{pe.forEach(u=>{u.items.forEach(k=>{const z=document.getElementById(`perm-${u.key}-${k.key}`);z&&(z.checked=!1,x(u.key,k.key,!1))})})})}return s(),e}function at(w){const e=document.createElement("div"),t=W.getCurrentUser();let o="";const s=Z(t,"planos","cadastrar"),l=Z(t,"planos","alterar"),A=Z(t,"planos","excluir");function a(){var L,r;const c=I.getPlans().filter(p=>{const x=o.toLowerCase();return p.nome.toLowerCase().includes(x)||p.descricao&&p.descricao.toLowerCase().includes(x)});e.innerHTML=`
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
                ${j.plus} Cadastrar Novo Plano
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
            ${j.search}
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
                  `:c.map(p=>{const x=p.criadoEm?new Date(p.criadoEm).toLocaleDateString("pt-BR"):"-";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${j.planos}
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
                              ${x}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${l?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${p.id}" title="Editar Plano e Módulos">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${A?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${p.id}" title="Excluir Plano">
                                        ${j.trash}
                                      </button>
                                    `:""}
                                ${!l&&!A?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(L=e.querySelector("#btn-new-plan"))==null||L.addEventListener("click",()=>{M()});const S=e.querySelector("#plan-search-input");S&&S.addEventListener("input",p=>{o=p.target.value,a();const x=e.querySelector("#plan-search-input");x&&(x.focus(),x.setSelectionRange(x.value.length,x.value.length))}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{o="",a()}),e.querySelectorAll(".btn-edit-plan").forEach(p=>{p.addEventListener("click",x=>{const b=x.currentTarget.dataset.id,i=I.getPlans().find(f=>f.id===b);i&&M(i)})}),e.querySelectorAll(".btn-delete-plan").forEach(p=>{p.addEventListener("click",x=>{const b=x.currentTarget.dataset.id,i=I.getPlans().find(f=>f.id===b);i&&fe({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${i.nome}</strong>" e todos os seus <strong>${i.modulos.length} módulos</strong> vinculados?`,onConfirm:()=>{I.deletePlan(i.id,(t==null?void 0:t.nome)||"Administrador"),R(`Plano "${i.nome}" excluído.`,"info"),a()}})})})}function M(g){const c=!!g;let S=g?JSON.parse(JSON.stringify(g.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function L(){return S.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `:S.map((b,i)=>`
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
                  ${i===S.length-1?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
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
                  ${j.trash}
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
                ${S.length} ${S.length===1?"módulo":"módulos"}
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
              ${j.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Container de Lista de Módulos (Scroll Suave e Altura Controlada) -->
          <div 
            id="modules-list-container" 
            style="max-height: 210px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${L()}
          </div>
        </div>

      </form>
    `;re({title:c?`Editar Plano: ${g.nome}`:"Cadastrar Plano & Trilha de Ensino",bodyHtml:r,modalClass:"modal-lg",confirmText:c?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const b=document.getElementById("plan-nome").value.trim(),i=document.getElementById("plan-desc").value.trim(),f=S.map((C,u)=>({id:C.id||"mod_"+(u+1)+"_"+Date.now(),ordem:u+1,titulo:C.titulo.trim()})).filter(C=>C.titulo.length>0);if(!b)return R("Informe o nome do plano de ensino.","error"),!1;if(f.length===0)return R("Adicione pelo menos um módulo à trilha pedagógica.","error"),!1;const v=(t==null?void 0:t.nome)||"Administrador";return c&&g?(I.updatePlan(g.id,{nome:b,descricao:i,modulos:f},v),R("Plano e módulos atualizados com sucesso!","success")):(I.addPlan({nome:b,descricao:i,modulos:f},v),R("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function p(){const b=document.getElementById("modules-list-container"),i=document.getElementById("modules-counter-badge");b&&(i&&(i.textContent=`${S.length} ${S.length===1?"módulo":"módulos"}`),b.innerHTML=L(),b.querySelectorAll(".module-title-input").forEach(f=>{f.addEventListener("input",v=>{const C=parseInt(v.target.getAttribute("data-idx")||"0",10);S[C]&&(S[C].titulo=v.target.value)})}),b.querySelectorAll(".btn-move-up:not([disabled])").forEach(f=>{f.addEventListener("click",v=>{const C=parseInt(v.currentTarget.getAttribute("data-idx")||"0",10);if(C>0){const u=S[C];S[C]=S[C-1],S[C-1]=u,S.forEach((k,z)=>k.ordem=z+1),p()}})}),b.querySelectorAll(".btn-move-down:not([disabled])").forEach(f=>{f.addEventListener("click",v=>{const C=parseInt(v.currentTarget.getAttribute("data-idx")||"0",10);if(C<S.length-1){const u=S[C];S[C]=S[C+1],S[C+1]=u,S.forEach((k,z)=>k.ordem=z+1),p()}})}),b.querySelectorAll(".btn-remove-module").forEach(f=>{f.addEventListener("click",v=>{const C=parseInt(v.currentTarget.getAttribute("data-idx")||"0",10);S.splice(C,1),S.forEach((u,k)=>u.ordem=k+1),p()})}))}function x(){const b=document.getElementById("quick-add-module-input");if(!b)return;const i=b.value.trim();if(!i){R("Digite o nome do módulo para adicionar.","info"),b.focus();return}const f=S.length+1;S.push({id:"mod_"+f+"_"+Date.now(),ordem:f,titulo:i}),b.value="",p(),b.focus();const v=document.getElementById("modules-list-container");v&&(v.scrollTop=v.scrollHeight)}setTimeout(()=>{const b=document.getElementById("btn-quick-add-module"),i=document.getElementById("quick-add-module-input");b==null||b.addEventListener("click",()=>{x()}),i==null||i.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),x())}),p()},50)}return a(),e}function ot(w){const e=document.createElement("div"),t=W.getCurrentUser();let o="",s="todos",l=new Date;const A=Z(t,"financeiro","cadastrar"),a=Z(t,"financeiro","alterar"),M=Z(t,"financeiro","excluir");function g(){var m,$,d,y,D,T,P,B;const r=I.getPayments(),p=I.getStudents(),x=new Date,b=l!==null&&x.getMonth()===l.getMonth()&&x.getFullYear()===l.getFullYear(),i=l?`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`:"",f=r.filter(E=>E.status==="pago").reduce((E,F)=>E+F.valor,0),v=r.filter(E=>E.status==="pendente").reduce((E,F)=>E+F.valor,0),C=r.filter(E=>E.status==="atrasado").reduce((E,F)=>E+F.valor,0),u=p.filter(E=>E.status==="ativo"&&I.isStudentOverdue(E.id)),k=r.filter(E=>{const F=p.find(G=>G.id===E.alunoId),N=F?F.nome.toLowerCase():"",_=E.descricao.toLowerCase(),V=N.includes(o.toLowerCase())||_.includes(o.toLowerCase())||E.mesReferencia&&E.mesReferencia.includes(o),J=s==="todos"||E.status===s,K=!i||E.mesReferencia===i||E.dataVencimento.startsWith(i);return V&&J&&K});e.innerHTML=`
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
          ${A?`
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${j.plus} Novo Lançamento
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
            ${r.filter(E=>E.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${v.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(E=>E.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${C.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(E=>E.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${u.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${p.filter(E=>E.status==="ativo").length} ativos</span>
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
            ${j.search}
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${k.length})</h3>
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
              ${k.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':k.map(E=>{const F=p.find(J=>J.id===E.alunoId),N=E.status==="pago",_=E.status==="atrasado";let V="";return N?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':_?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${F!=null&&F.nome?F.nome[0]:"?"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${(F==null?void 0:F.nome)||"Aluno não identificado"}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${E.descricao}${E.mesReferencia?` / ${E.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${_?"#f87171":"var(--text-white)"}; font-weight: ${_?"700":"normal"};">
                                ${E.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${E.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!N&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${E.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${j.check}
                                      </button>
                                    `:""}

                                ${N?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${E.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${E.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${j.edit}
                                      </button>
                                    `:""}

                                ${M?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${E.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${j.trash}
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
    `,(m=e.querySelector("#fin-btn-prev-month"))==null||m.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()-1,1),g()}),($=e.querySelector("#fin-btn-next-month"))==null||$.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()+1,1),g()}),(d=e.querySelector("#fin-btn-current-month"))==null||d.addEventListener("click",()=>{l=new Date,g()}),(y=e.querySelector("#fin-btn-all-months"))==null||y.addEventListener("click",()=>{l=null,g()});const z=e.querySelector("#fin-search-input");z==null||z.addEventListener("input",E=>{o=E.target.value,g();const F=e.querySelector("#fin-search-input");F&&(F.focus(),F.selectionStart=F.selectionEnd=F.value.length)}),(D=e.querySelector("#btn-clear-fin-search"))==null||D.addEventListener("click",()=>{o="",g()});const n=e.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,g()}),(T=e.querySelector("#btn-limpar-status"))==null||T.addEventListener("click",()=>{s="todos",g()}),(P=e.querySelector("#btn-gerar-lote"))==null||P.addEventListener("click",()=>{S()}),(B=e.querySelector("#btn-novo-lancamento"))==null||B.addEventListener("click",()=>{L()}),e.querySelectorAll(".btn-action-baixa").forEach(E=>{E.addEventListener("click",F=>{const N=F.currentTarget.dataset.id,_=r.find(V=>V.id===N);_&&c(_)})}),e.querySelectorAll(".btn-action-recibo").forEach(E=>{E.addEventListener("click",F=>{const N=F.currentTarget.dataset.id,_=r.find(V=>V.id===N);if(_){const V=p.find(J=>J.id===_.alunoId);V&&je(_,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(E=>{E.addEventListener("click",F=>{const N=F.currentTarget.dataset.id,_=r.find(V=>V.id===N);_&&L(_)})}),e.querySelectorAll(".btn-action-delete").forEach(E=>{E.addEventListener("click",F=>{const N=F.currentTarget.dataset.id,_=r.find(V=>V.id===N);_&&fe({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${_.descricao}</strong>" no valor de <strong>R$ ${_.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{I.deletePayment(_.id,(t==null?void 0:t.nome)||"Administrador"),R("Lançamento excluído com sucesso!","info"),g()}})})})}function c(r){const p=I.getStudents().find(i=>i.id===r.alunoId),x=I.getTodayDateString(),b=`
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
          <input type="date" id="modal-baixa-data" class="form-input" value="${x}" required />
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
    `;re({title:"Confirmar Baixa de Pagamento",bodyHtml:b,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const i=document.getElementById("modal-baixa-data").value,f=document.getElementById("modal-baixa-forma").value,v=document.getElementById("modal-baixa-obs").value;return i?(I.darBaixaPayment(r.id,i,f,(t==null?void 0:t.nome)||"Administrador",v),R(`Baixa efetuada com sucesso! R$ ${r.valor.toFixed(2)} recebido.`,"success"),g(),!0):(R("Informe a data de recebimento.","error"),!1)}})}function S(){const r=new Date,p=r.getFullYear(),x=r.getMonth()+1,b=`
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
              <option value="1" ${x===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${x===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${x===3?"selected":""}>03 - Março</option>
              <option value="4" ${x===4?"selected":""}>04 - Abril</option>
              <option value="5" ${x===5?"selected":""}>05 - Maio</option>
              <option value="6" ${x===6?"selected":""}>06 - Junho</option>
              <option value="7" ${x===7?"selected":""}>07 - Julho</option>
              <option value="8" ${x===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${x===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${x===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${x===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${x===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;re({title:"Gerar Mensalidades em Lote",bodyHtml:b,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const i=parseInt(document.getElementById("lote-ano").value,10),f=parseInt(document.getElementById("lote-mes").value,10);if(!i||!f)return R("Selecione ano e mês válidos.","error"),!1;const v=I.gerarMensalidadesMes(i,f,(t==null?void 0:t.nome)||"Administrador");return v.criadas===0&&v.puladas>0?R(`Todas as ${v.puladas} mensalidades deste mês já estavam criadas!`,"info"):R(`Sucesso: ${v.criadas} mensalidade(s) gerada(s)! (${v.puladas} já existentes puladas)`,"success"),g(),!0}})}function L(r){const p=!!r,x=I.getStudents(),b=I.getTodayDateString(),i=x.map(v=>`<option value="${v.id}" ${(r==null?void 0:r.alunoId)===v.id?"selected":""}>${v.nome} (${v.instrumentoPrincipal||"Geral"})</option>`).join(""),f=`
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
    `;re({title:p?`Editar Lançamento: ${r.descricao}`:"Novo Lançamento Financeiro",bodyHtml:f,modalClass:"modal-md",confirmText:p?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const v=p&&r?r.alunoId:document.getElementById("pay-aluno").value,C=document.getElementById("pay-desc").value.trim(),u=document.getElementById("pay-mes").value.trim()||void 0,k=document.getElementById("pay-valor").value,z=parseFloat(k)||0,n=document.getElementById("pay-vencimento").value,m=document.getElementById("pay-status").value,$=document.getElementById("pay-forma").value||void 0,d=document.getElementById("pay-obs").value.trim()||void 0;if(!v)return R("Selecione um aluno.","error"),!1;if(!C)return R("Informe a descrição do lançamento.","error"),!1;if(z<=0)return R("Informe um valor válido maior que zero.","error"),!1;if(!n)return R("Informe a data de vencimento.","error"),!1;const y=(t==null?void 0:t.nome)||"Administrador";return p&&r?(I.updatePayment(r.id,{descricao:C,mesReferencia:u,valor:z,dataVencimento:n,status:m,formaPagamento:$,dataPagamento:m==="pago"?r.dataPagamento||b:void 0,observacoes:d},y),R("Lançamento atualizado com sucesso!","success")):(I.addPayment({alunoId:v,descricao:C,mesReferencia:u,valor:z,dataVencimento:n,status:m,formaPagamento:$,dataPagamento:m==="pago"?b:void 0,observacoes:d},y),R("Novo lançamento cadastrado com sucesso!","success")),g(),!0}}),p||setTimeout(()=>{const v=document.getElementById("pay-aluno");v==null||v.addEventListener("change",()=>{const C=x.find(u=>u.id===v.value);if(C){const u=document.getElementById("pay-valor");u&&typeof C.valorMensalidade=="number"&&(u.value=C.valorMensalidade.toString())}})},50)}return g(),e}function st(w){const e=document.createElement("div"),t=W.getCurrentUser(),o=Z(t,"relatorios","gerar");let s="alunos",l="todos",A="todos",a="todos",M="todos",g="todos",c="nome_asc",S="",L="",r="",p="",x="todos",b="todos",i="todos",f="vencimento_asc";function v(){var Q,Y,ae,ee,de,oe,O,se,X,me,q,te,ce,be,ye,he,xe,Se,ke;const n=I.getSettings(),m=I.getStudents(),$=I.getPlans(),d=I.getPayments(),y=Array.from(new Set(m.map(h=>h.instrumentoPrincipal).filter(Boolean))).sort();let D=m.filter(h=>{if(l!=="todos"&&h.status!==l||A!=="todos"&&h.instrumentoPrincipal!==A||a!=="todos"&&h.nivelMusical!==a||M!=="todos"&&h.planoId!==M)return!1;if(g!=="todos"){const H=I.isStudentOverdue(h.id);if(g==="em_dia"&&H||g==="atrasado"&&!H)return!1}return!0});D.sort((h,H)=>c==="nome_asc"?h.nome.localeCompare(H.nome):c==="nome_desc"?H.nome.localeCompare(h.nome):c==="data_desc"?(H.criadoEm||"").localeCompare(h.criadoEm||""):c==="data_asc"?(h.criadoEm||"").localeCompare(H.criadoEm||""):0);const T=D.length,P=D.filter(h=>h.status==="ativo").length,B=D.filter(h=>h.status==="inativo").length,E=D.filter(h=>I.isStudentOverdue(h.id)).length,F=new Date().toISOString().slice(0,10);let N=d.filter(h=>{if(S&&h.dataVencimento<S||L&&h.dataVencimento>L)return!1;const H=h.mesReferencia||h.dataVencimento.slice(0,7);if(r&&H<r||p&&H>p||b!=="todos"&&h.alunoId!==b||i!=="todos"&&h.formaPagamento!==i)return!1;const ne=h.status!=="pago"&&h.dataVencimento<F;return!(x==="pago"&&h.status!=="pago"||x==="pendente"&&(h.status==="pago"||ne)||x==="atrasado"&&!ne)});const _=new Map(m.map(h=>[h.id,h.nome]));N.sort((h,H)=>{if(f==="vencimento_asc")return h.dataVencimento.localeCompare(H.dataVencimento);if(f==="vencimento_desc")return H.dataVencimento.localeCompare(h.dataVencimento);if(f==="valor_desc")return H.valor-h.valor;if(f==="aluno_asc"){const ne=_.get(h.alunoId)||"",Ee=_.get(H.alunoId)||"";return ne.localeCompare(Ee)}return 0});const V=N.length,J=N.reduce((h,H)=>h+H.valor,0),K=N.filter(h=>h.status==="pago").reduce((h,H)=>h+H.valor,0),G=N.filter(h=>h.status!=="pago").reduce((h,H)=>h+H.valor,0);e.innerHTML=`
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
                <option value="todos" ${A==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${y.map(h=>`<option value="${h}" ${A===h?"selected":""}>${h}</option>`).join("")}
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
                <option value="todos" ${M==="todos"?"selected":""}>Todos os Planos</option>
                ${$.map(h=>`<option value="${h.id}" ${M===h.id?"selected":""}>${h.nome}</option>`).join("")}
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${T}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${P}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${B}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${E}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${D.length} registros)
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
                ${D.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':D.map(h=>{const H=$.find(Oe=>Oe.id===h.planoId),ne=h.status==="ativo",Ee=I.isStudentOverdue(h.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${h.nome}</td>
                              <td class="col-hide-md">${h.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${h.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${ne?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${ne?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${Ee?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${S}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${L}" />
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
                <option value="todos" ${x==="todos"?"selected":""}>Todos os Status</option>
                <option value="pago" ${x==="pago"?"selected":""}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${x==="pendente"?"selected":""}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${x==="atrasado"?"selected":""}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${b==="todos"?"selected":""}>Todos os Alunos</option>
                ${m.map(h=>`<option value="${h.id}" ${b===h.id?"selected":""}>${h.nome}</option>`).join("")}
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${V}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Geral</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${J.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Recebido / Quitado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${K.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Pendente / Atrasado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">R$ ${G.toFixed(2)}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Financeiro -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório Financeiro (${N.length} lançamentos)
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
                ${N.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':N.map(h=>{const H=h.status==="pago",ne=!H&&h.dataVencimento<F;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${_.get(h.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${h.descricao}${h.mesReferencia?` / ${h.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${h.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${h.valor.toFixed(2)}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${H?"badge-success":ne?"badge-coral":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${H?"Pago":ne?"Atrasado":"Pendente"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,(Q=e.querySelector("#btn-tab-rel-alunos"))==null||Q.addEventListener("click",()=>{s="alunos",v()}),(Y=e.querySelector("#btn-tab-rel-financeiro"))==null||Y.addEventListener("click",()=>{s="financeiro",v()}),(ae=e.querySelector("#filtro-aluno-status"))==null||ae.addEventListener("change",h=>{l=h.target.value,v()}),(ee=e.querySelector("#filtro-aluno-instrumento"))==null||ee.addEventListener("change",h=>{A=h.target.value,v()}),(de=e.querySelector("#filtro-aluno-nivel"))==null||de.addEventListener("change",h=>{a=h.target.value,v()}),(oe=e.querySelector("#filtro-aluno-plano"))==null||oe.addEventListener("change",h=>{M=h.target.value,v()}),(O=e.querySelector("#filtro-aluno-financeiro"))==null||O.addEventListener("change",h=>{g=h.target.value,v()}),(se=e.querySelector("#filtro-aluno-ordem"))==null||se.addEventListener("change",h=>{c=h.target.value,v()}),(X=e.querySelector("#btn-limpar-filtros-alunos"))==null||X.addEventListener("click",()=>{l="todos",A="todos",a="todos",M="todos",g="todos",c="nome_asc",v()}),(me=e.querySelector("#filtro-fin-dataini"))==null||me.addEventListener("change",h=>{S=h.target.value,v()}),(q=e.querySelector("#filtro-fin-datafim"))==null||q.addEventListener("change",h=>{L=h.target.value,v()}),(te=e.querySelector("#filtro-fin-mesref-ini"))==null||te.addEventListener("change",h=>{r=h.target.value,v()}),(ce=e.querySelector("#filtro-fin-mesref-fim"))==null||ce.addEventListener("change",h=>{p=h.target.value,v()}),(be=e.querySelector("#filtro-fin-status"))==null||be.addEventListener("change",h=>{x=h.target.value,v()}),(ye=e.querySelector("#filtro-fin-aluno"))==null||ye.addEventListener("change",h=>{b=h.target.value,v()}),(he=e.querySelector("#filtro-fin-metodo"))==null||he.addEventListener("change",h=>{i=h.target.value,v()}),(xe=e.querySelector("#filtro-fin-ordem"))==null||xe.addEventListener("change",h=>{f=h.target.value,v()}),(Se=e.querySelector("#btn-limpar-filtros-fin"))==null||Se.addEventListener("click",()=>{S="",L="",r="",p="",x="todos",b="todos",i="todos",f="vencimento_asc",v()}),(ke=e.querySelector("#btn-gerar-pdf"))==null||ke.addEventListener("click",async()=>{if(!o){R("Você não possui permissão para emitir relatórios.","error");return}const h=e.querySelector("#btn-gerar-pdf"),H=h?h.innerHTML:"";h&&(h.disabled=!0,h.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await k(n,D,$):await z(n,N,m,{mesIni:r,mesFim:p}),R("PDF gerado com sucesso!","success")}catch(ne){console.error("Erro ao gerar PDF:",ne),R("Ocorreu um erro ao gerar o documento PDF.","error")}finally{h&&(h.disabled=!1,h.innerHTML=H)}})}function C(n){return new Promise(m=>{if(n&&n.trim()!==""){const $=new Image;$.crossOrigin="Anonymous",$.onload=()=>{try{const d=document.createElement("canvas");d.width=160,d.height=160;const y=d.getContext("2d");if(!y){m(n);return}const D=24;y.fillStyle="#ffffff",y.beginPath(),y.moveTo(D,0),y.lineTo(160-D,0),y.quadraticCurveTo(160,0,160,D),y.lineTo(160,160-D),y.quadraticCurveTo(160,160,160-D,160),y.lineTo(D,160),y.quadraticCurveTo(0,160,0,160-D),y.lineTo(0,D),y.quadraticCurveTo(0,0,D,0),y.closePath(),y.fill();const T=12,P=160-T*2,B=160-T*2;let E=P,F=B;const N=$.width/$.height;N>1?F=P/N:E=B*N;const _=T+(P-E)/2,V=T+(B-F)/2;y.drawImage($,_,V,E,F),m(d.toDataURL("image/png"))}catch{m(n)}},$.onerror=()=>{u().then(m)},$.src=n;return}u().then(m)})}function u(){return new Promise(n=>{try{const m=document.createElement("canvas");m.width=160,m.height=160;const $=m.getContext("2d");if(!$){n("");return}const d=32;$.fillStyle="#181c2b",$.beginPath(),$.moveTo(d,0),$.lineTo(160-d,0),$.quadraticCurveTo(160,0,160,d),$.lineTo(160,160-d),$.quadraticCurveTo(160,160,160-d,160),$.lineTo(d,160),$.quadraticCurveTo(0,160,0,160-d),$.lineTo(0,d),$.quadraticCurveTo(0,0,d,0),$.closePath(),$.fill(),$.lineWidth=3,$.strokeStyle="#2d3748",$.stroke();const y=new Image,D=`
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
        `,T=new Blob([D],{type:"image/svg+xml;charset=utf-8"}),P=URL.createObjectURL(T);y.onload=()=>{$.drawImage(y,20,20,120,120),URL.revokeObjectURL(P),n(m.toDataURL("image/png"))},y.onerror=()=>{URL.revokeObjectURL(P),n("")},y.src=P}catch{n("")}})}async function k(n,m,$){const d=new Ce({orientation:"portrait",unit:"mm",format:"a4"}),y=new Date().toLocaleString("pt-BR"),D=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",T=n.razaoSocial||"Acusticamente Ensino Musical Ltda",P=n.cnpj?`CNPJ: ${n.cnpj}`:"",B=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),E=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),F=await C(n.logotipoCustomizado);F&&d.addImage(F,"PNG",14,12,17,17);const N=F?35:14;d.setFont("helvetica","bold"),d.setFontSize(13),d.setTextColor(15,23,42),d.text(D,N,17),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(71,85,105),d.text([T,P].filter(Boolean).join(" • "),N,21.5),d.setFontSize(7.5),d.setTextColor(100,116,139),E&&d.text(E,N,25.5),B&&d.text(B,N,E?29.5:25.5),d.setFont("helvetica","bold"),d.setFontSize(12),d.setTextColor(217,72,59),d.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(100,116,139),d.text(`Emissão: ${y}`,196,22,{align:"right"}),d.text(`Total: ${m.length} aluno(s)`,196,26.5,{align:"right"}),d.setDrawColor(203,213,225),d.setLineWidth(.4),d.line(14,33,196,33);const _=m.filter(O=>O.status==="ativo").length,V=m.filter(O=>O.status==="inativo").length,J=m.filter(O=>I.isStudentOverdue(O.id)).length,K=[{label:"TOTAL DE ALUNOS",value:`${m.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${_}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${J}`,color:[220,38,38]}],G=43,Q=12,Y=36;K.forEach((O,se)=>{const X=14+se*(G+3);d.setFillColor(248,250,252),d.roundedRect(X,Y,G,Q,1.5,1.5,"F"),d.setDrawColor(226,232,240),d.roundedRect(X,Y,G,Q,1.5,1.5,"S"),d.setFont("helvetica","bold"),d.setFontSize(6.5),d.setTextColor(100,116,139),d.text(O.label,X+3,Y+4),d.setFontSize(10.5),d.setTextColor(O.color[0],O.color[1],O.color[2]),d.text(O.value,X+3,Y+9.5)});const ae=m.map((O,se)=>{const X=$.find(te=>te.id===O.planoId),me=O.status==="ativo",q=I.isStudentOverdue(O.id);return[(se+1).toString(),O.nome,O.instrumentoPrincipal||"Música Geral",O.telefone||"-",(X==null?void 0:X.nome)||"-",me?"Ativo":"Inativo",q?"Atrasado":"Em dia"]});Ie(d,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:ae.length>0?ae:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:O=>{O.section==="body"&&(O.column.index===5&&(O.cell.raw==="Ativo"?(O.cell.styles.textColor=[22,163,74],O.cell.styles.fontStyle="bold"):O.cell.styles.textColor=[202,138,4]),O.column.index===6&&(O.cell.raw==="Atrasado"?(O.cell.styles.textColor=[220,38,38],O.cell.styles.fontStyle="bold"):O.cell.styles.textColor=[22,163,74]))}});const ee=d.internal.getNumberOfPages();for(let O=1;O<=ee;O++)d.setPage(O),d.setDrawColor(226,232,240),d.setLineWidth(.3),d.line(14,287,196,287),d.setFont("helvetica","normal"),d.setFontSize(7),d.setTextColor(148,163,184),d.text(`${D} • Sistema de Gestão Escolar & Pedagógica`,14,292),d.text(`Página ${O} de ${ee}`,196,292,{align:"right"});const de=d.output("blob"),oe=URL.createObjectURL(de);window.open(oe,"_blank")}async function z(n,m,$,d){const y=new Ce({orientation:"portrait",unit:"mm",format:"a4"}),D=new Map($.map(q=>[q.id,q.nome])),T=new Date().toLocaleString("pt-BR"),P=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",B=n.razaoSocial||"Acusticamente Ensino Musical Ltda",E=n.cnpj?`CNPJ: ${n.cnpj}`:"",F=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),N=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),_=new Date().toISOString().slice(0,10),V=m.reduce((q,te)=>q+te.valor,0),J=m.filter(q=>q.status==="pago").reduce((q,te)=>q+te.valor,0),K=m.filter(q=>q.status!=="pago").reduce((q,te)=>q+te.valor,0),G=await C(n.logotipoCustomizado);G&&y.addImage(G,"PNG",14,12,17,17);const Q=G?35:14;y.setFont("helvetica","bold"),y.setFontSize(13),y.setTextColor(15,23,42),y.text(P,Q,17),y.setFont("helvetica","normal"),y.setFontSize(8),y.setTextColor(71,85,105),y.text([B,E].filter(Boolean).join(" • "),Q,21.5),y.setFontSize(7.5),y.setTextColor(100,116,139),N&&y.text(N,Q,25.5),F&&y.text(F,Q,N?29.5:25.5),y.setFont("helvetica","bold"),y.setFontSize(12),y.setTextColor(5,150,105),y.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),y.setFont("helvetica","normal"),y.setFontSize(8),y.setTextColor(100,116,139),y.text(`Emissão: ${T}`,196,22,{align:"right"});let Y=`Total: ${m.length} registro(s)`;d!=null&&d.mesIni&&(d!=null&&d.mesFim)?Y=`Ref: ${d.mesIni} a ${d.mesFim} • ${m.length} reg.`:d!=null&&d.mesIni?Y=`Ref: a partir de ${d.mesIni} • ${m.length} reg.`:d!=null&&d.mesFim&&(Y=`Ref: até ${d.mesFim} • ${m.length} reg.`),y.text(Y,196,26.5,{align:"right"}),y.setDrawColor(203,213,225),y.setLineWidth(.4),y.line(14,33,196,33);const ae=[{label:"LANÇAMENTOS",value:`${m.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${J.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${K.toFixed(2)}`,color:[220,38,38]}],ee=43,de=12,oe=36;ae.forEach((q,te)=>{const ce=14+te*(ee+3);y.setFillColor(248,250,252),y.roundedRect(ce,oe,ee,de,1.5,1.5,"F"),y.setDrawColor(226,232,240),y.roundedRect(ce,oe,ee,de,1.5,1.5,"S"),y.setFont("helvetica","bold"),y.setFontSize(6.5),y.setTextColor(100,116,139),y.text(q.label,ce+3,oe+4),y.setFontSize(10),y.setTextColor(q.color[0],q.color[1],q.color[2]),y.text(q.value,ce+3,oe+9.5)});const O=m.map((q,te)=>{const ce=q.status==="pago",be=!ce&&q.dataVencimento<_,ye=ce?"Pago":be?"Atrasado":"Pendente",he=q.descricao+(q.mesReferencia?` / ${q.mesReferencia}`:""),xe=q.dataVencimento.split("-").reverse().join("/");return[(te+1).toString(),D.get(q.alunoId)||"Aluno",he,xe,`R$ ${q.valor.toFixed(2)}`,ye]});Ie(y,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:O.length>0?O:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:q=>{q.section==="body"&&q.column.index===5&&(q.cell.raw==="Pago"?(q.cell.styles.textColor=[22,163,74],q.cell.styles.fontStyle="bold"):q.cell.raw==="Atrasado"?(q.cell.styles.textColor=[220,38,38],q.cell.styles.fontStyle="bold"):q.cell.styles.textColor=[202,138,4])}});const se=y.internal.getNumberOfPages();for(let q=1;q<=se;q++)y.setPage(q),y.setDrawColor(226,232,240),y.setLineWidth(.3),y.line(14,287,196,287),y.setFont("helvetica","normal"),y.setFontSize(7),y.setTextColor(148,163,184),y.text(`${P} • Gestão Financeira & Escolar`,14,292),y.text(`Página ${q} de ${se}`,196,292,{align:"right"});const X=y.output("blob"),me=URL.createObjectURL(X);window.open(me,"_blank")}return v(),e}function nt(w){const e=document.createElement("div");let t=new Date,o="";const s=g=>g.toString().padStart(2,"0");function l(g){const c=g.getDate(),L=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][g.getMonth()],r=g.getFullYear(),p=new Date,x=p.getDate()===c&&p.getMonth()===g.getMonth()&&p.getFullYear()===r;return`${c} de ${L} de ${r}${x?" (Hoje)":""}`}function A(g){return`${g.getFullYear()}-${s(g.getMonth()+1)}-${s(g.getDate())}`}function a(){var i,f,v,C,u,k,z;const g=U.getLogs(),c=new Date,S=`${s(c.getDate())}/${s(c.getMonth()+1)}/${c.getFullYear()}`,L=g.filter(n=>{var m;return(m=n.dataHoraFormatada)==null?void 0:m.startsWith(S)}).length,r=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",p=t!==null&&c.getDate()===t.getDate()&&c.getMonth()===t.getMonth()&&c.getFullYear()===t.getFullYear(),x=g.filter(n=>{const m=!t||n.dataHoraFormatada&&n.dataHoraFormatada.startsWith(r)||n.dataHora&&n.dataHora.startsWith(A(t)),$=o===""||n.tela.toLowerCase().includes(o.toLowerCase())||n.usuarioNome.toLowerCase().includes(o.toLowerCase())||n.usuarioLogin.toLowerCase().includes(o.toLowerCase())||n.acao.toLowerCase().includes(o.toLowerCase())||n.detalhes.toLowerCase().includes(o.toLowerCase());return m&&$});e.innerHTML=`
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
          <span>Registros de Hoje: <strong style="color: var(--color-coral);">${L}</strong></span>
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
            value="${t?A(t):""}" 
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
            ${j.search}
          </div>
        </div>
        ${o?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${x.length})
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
              ${x.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${r}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:x.map(n=>`
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
    `,(i=e.querySelector("#audit-btn-prev"))==null||i.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),a()}),(f=e.querySelector("#audit-btn-next"))==null||f.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),a()}),(v=e.querySelector("#audit-btn-today"))==null||v.addEventListener("click",()=>{t=new Date,a()}),(C=e.querySelector("#audit-btn-all"))==null||C.addEventListener("click",()=>{t=null,a()}),(u=e.querySelector("#audit-empty-btn-all"))==null||u.addEventListener("click",()=>{t=null,a()}),(k=e.querySelector("#audit-date-picker"))==null||k.addEventListener("change",n=>{const m=n.target.value;if(m){const[$,d,y]=m.split("-").map(Number);t=new Date($,d-1,y)}else t=null;a()});const b=e.querySelector("#audit-search-input");b==null||b.addEventListener("input",n=>{o=n.target.value,a();const m=e.querySelector("#audit-search-input");m&&(m.focus(),m.selectionStart=m.selectionEnd=m.value.length)}),(z=e.querySelector("#btn-clear-audit-search"))==null||z.addEventListener("click",()=>{o="",a()})}const M=()=>{a()};return window.addEventListener("audit_updated",M),a(),e}class rt{static async testConnection(e,t){const o=performance.now();await new Promise(l=>setTimeout(l,200));const s=Math.round(performance.now()-o);return e&&t?{success:!0,latencyMs:s,message:`Conexão bem-sucedida com MongoDB em "${e}/${t}". Esquemas prontos para sincronização.`}:{success:!1,latencyMs:s,message:"URI ou Nome do Banco não informados."}}}function it(w){const e=document.createElement("div"),t=W.getCurrentUser(),o=I.getSettings(),s=Z(t,"configuracoes","alterar");e.innerHTML=`
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
  `;const l=e.querySelector("#btn-tab-gerais"),A=e.querySelector("#btn-tab-instituicao"),a=e.querySelector("#btn-tab-mongo"),M=e.querySelector("#tab-content-gerais"),g=e.querySelector("#tab-content-instituicao"),c=e.querySelector("#tab-content-mongo");function S(T,P){T&&(P?T.classList.add("active"):T.classList.remove("active"))}function L(T){M.style.display=T==="gerais"?"block":"none",g.style.display=T==="instituicao"?"block":"none",c.style.display=T==="mongo"?"block":"none",S(l,T==="gerais"),S(A,T==="instituicao"),S(a,T==="mongo")}l==null||l.addEventListener("click",()=>L("gerais")),A==null||A.addEventListener("click",()=>L("instituicao")),a==null||a.addEventListener("click",()=>L("mongo"));let r=o.logotipoCustomizado||"";const p=e.querySelector("#cfg-menu-name"),x=e.querySelector("#preview-menu-brand-name"),b=e.querySelector("#preview-report-brand-name"),i=e.querySelector("#preview-logo-menu"),f=e.querySelector("#preview-logo-report"),v=e.querySelector("#input-logo-file"),C=e.querySelector("#btn-upload-logo"),u=e.querySelector("#btn-reset-logo"),k=e.querySelector("#logo-feedback-msg");p==null||p.addEventListener("input",()=>{const T=p.value.trim()||"Acusticamente";x&&(x.textContent=T),b&&(b.textContent=T)}),C==null||C.addEventListener("click",()=>{v==null||v.click()}),v==null||v.addEventListener("change",T=>{const P=T.target.files;if(!P||P.length===0)return;const B=P[0];if(!B.type.startsWith("image/")){R("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(B.size>3*1024*1024){R("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const E=new FileReader;E.onload=F=>{var N;r=((N=F.target)==null?void 0:N.result)||"",i&&(i.innerHTML=ue(r,40)),f&&(f.innerHTML=ue(r,40)),u&&(u.disabled=!1,u.style.color="#ef4444"),k&&(k.style.display="block",k.style.color="var(--status-success)",k.textContent="Imagem carregada no preview. Clique em Salvar."),R("Logotipo carregado na pré-visualização!","info")},E.onerror=()=>{R("Erro ao processar o arquivo de imagem.","error")},E.readAsDataURL(B)}),u==null||u.addEventListener("click",()=>{r="",v&&(v.value=""),i&&(i.innerHTML=ue("",40)),f&&(f.innerHTML=ue("",40)),u&&(u.disabled=!0,u.style.color="var(--text-muted)"),k&&(k.style.display="block",k.style.color="var(--color-coral)",k.textContent="Logotipo padrão no preview. Clique em Salvar."),R("Logotipo padrão restaurado no preview.","info")});const z=e.querySelector("#form-settings-gerais");z==null||z.addEventListener("submit",T=>{T.preventDefault();const P=p.value.trim()||"Acusticamente";I.updateSettings({nomeMenu:P,logotipoCustomizado:r},(t==null?void 0:t.nome)||"Administrador"),k&&(k.style.display="none"),R("Configurações gerais salvas com sucesso!","success")});const n=e.querySelector("#cfg-cnpj");n==null||n.addEventListener("input",T=>{let P=T.target.value.replace(/\D/g,"").slice(0,14);P.length>12?P=P.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):P.length>8?P=P.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):P.length>5?P=P.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):P.length>2&&(P=P.replace(/^(\d{2})(\d{1,3})$/,"$1.$2")),T.target.value=P});const m=e.querySelector("#cfg-cep");m==null||m.addEventListener("input",T=>{let P=T.target.value.replace(/\D/g,"").slice(0,8);P.length>5&&(P=P.replace(/^(\d{5})(\d{1,3})$/,"$1-$2")),T.target.value=P});const $=e.querySelector("#cfg-uf");$==null||$.addEventListener("input",T=>{T.target.value=T.target.value.toUpperCase().slice(0,2)});const d=e.querySelector("#form-settings-institucional");d==null||d.addEventListener("submit",T=>{T.preventDefault();const P=e.querySelector("#cfg-fantasia").value,B=e.querySelector("#cfg-razao").value,E=e.querySelector("#cfg-cnpj").value,F=e.querySelector("#cfg-ie").value,N=e.querySelector("#cfg-tel").value,_=e.querySelector("#cfg-email").value,V=e.querySelector("#cfg-site").value,J=e.querySelector("#cfg-cep").value,K=e.querySelector("#cfg-logradouro").value,G=e.querySelector("#cfg-numero").value,Q=e.querySelector("#cfg-complemento").value,Y=e.querySelector("#cfg-bairro").value,ae=e.querySelector("#cfg-cidade").value,ee=e.querySelector("#cfg-uf").value.toUpperCase();I.updateSettings({nomeEscola:P,nomeClinica:P,nomeFantasia:P,razaoSocial:B,cnpj:E,inscricaoEstadual:F,telefoneContato:N,emailContato:_,website:V,cep:J,logradouro:K,numero:G,complemento:Q,bairro:Y,cidade:ae,estado:ee},(t==null?void 0:t.nome)||"Administrador"),R("Dados da instituição salvos com sucesso!","success")});const y=e.querySelector("#form-settings-mongo");y==null||y.addEventListener("submit",T=>{T.preventDefault();const P=e.querySelector("#cfg-mongo-uri").value,B=e.querySelector("#cfg-mongo-db").value;I.updateSettings({mongoUri:P,mongoDatabase:B},(t==null?void 0:t.nome)||"Administrador"),R("Configurações do MongoDB salvas com sucesso!","success")});const D=e.querySelector("#btn-test-mongo");return D==null||D.addEventListener("click",async()=>{const T=e.querySelector("#cfg-mongo-uri").value,P=e.querySelector("#cfg-mongo-db").value,B=e.querySelector("#mongo-test-result");B.innerHTML='<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';const E=await rt.testConnection(T,P);E.success?(B.innerHTML=`<span style="color: var(--status-success);">✓ ${E.message} (Latência: ${E.latencyMs}ms)</span>`,R("MongoDB validado com sucesso!","success")):(B.innerHTML=`<span style="color: var(--status-danger);">✕ ${E.message}</span>`,R("Falha na validação do MongoDB.","error"))}),e}class lt{constructor(){ie(this,"currentScreen","home");ie(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!W.isAuthenticated()){this.currentScreen="login",this.render();return}const e=W.getCurrentUser(),t=window.location.hash.replace("#","");t&&["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(t)&&le(e,t)?this.currentScreen=t:this.currentScreen=this.getFirstAllowedScreen(e),window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","");o&&o!==this.currentScreen&&this.navigateTo(o)}),window.addEventListener("app-settings-updated",()=>{const o=I.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const l=document.querySelector(".sidebar-logo");l&&(l.innerHTML=ue(o.logotipoCustomizado,46))}),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of t)if(le(e,o))return o;return"home"}navigateTo(e){const t=W.getCurrentUser();if(!le(t,e)){R("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(t);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=e,window.location.hash=e,this.render()}render(){var r;if(this.appRoot.innerHTML="",!W.isAuthenticated()||this.currentScreen==="login"){const p=Ye(()=>{const x=W.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(x))});this.appRoot.appendChild(p);return}const e=document.createElement("div");e.className="app-container";const t=W.getCurrentUser(),o=(t==null?void 0:t.papel)==="admin",s=I.getSettings(),l=s.nomeMenu||"Acusticamente";e.innerHTML=`
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
            ${j.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${le(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${j.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${le(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${j.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${le(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${j.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${le(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${j.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${le(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${j.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${le(t,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${j.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${j.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${le(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${j.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${le(t,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${j.configuracoes}</span>
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
            ${j.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${j.menu}
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
    `;const A=e.querySelector("#app-sidebar"),a=e.querySelector("#sidebar-backdrop"),M=e.querySelector("#btn-mobile-menu-toggle"),g=e.querySelector("#btn-sidebar-close"),c=p=>{const x=p!==void 0?p:!A.classList.contains("open");A.classList.toggle("open",x),a.classList.toggle("open",x),document.body.style.overflow=x?"hidden":""};M==null||M.addEventListener("click",()=>c(!0)),g==null||g.addEventListener("click",()=>c(!1)),a==null||a.addEventListener("click",()=>c(!1)),e.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",x=>{const b=x.currentTarget.dataset.screen;c(!1),b&&this.navigateTo(b)})}),(r=e.querySelector("#btn-app-logout"))==null||r.addEventListener("click",()=>{fe({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{W.logout()}})});const S=e.querySelector("#screen-viewport"),L=this.createViewElement(this.currentScreen);S.appendChild(L),this.appRoot.appendChild(e)}createViewElement(e){const t=o=>this.navigateTo(o);switch(e){case"home":return Ne(t);case"agenda":return We();case"alunos":return Ke(t);case"user":return tt(t);case"planos":return at();case"financeiro":return ot();case"relatorios":return st();case"auditoria":return nt();case"configuracoes":return it();default:return Ne(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new lt});
