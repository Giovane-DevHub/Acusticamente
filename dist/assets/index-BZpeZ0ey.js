var ke=Object.defineProperty;var Se=(y,t,e)=>t in y?ke(y,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):y[t]=e;var U=(y,t,e)=>Se(y,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const w of l.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();const me="acusticamente_audit_logs";class Ie{constructor(){U(this,"logs",[]);this.loadLogs()}loadLogs(){try{const t=localStorage.getItem(me);t?this.logs=JSON.parse(t):this.log({usuarioId:"1",usuarioLogin:"1",usuarioNome:"Administrador",tela:"Sistema",acao:"Inicialização do Sistema",detalhes:"Base de dados inicializada com usuário administrador padrão (1)."})}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(me,JSON.stringify(this.logs))}catch(t){console.error("Erro ao salvar auditoria no storage:",t)}}log(t){const e=new Date,o=w=>w.toString().padStart(2,"0"),s=`${o(e.getDate())}/${o(e.getMonth()+1)}/${e.getFullYear()} ${o(e.getHours())}:${o(e.getMinutes())}:${o(e.getSeconds())}`,l={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:e.toISOString(),dataHoraFormatada:s,usuarioId:t.usuarioId||"1",usuarioLogin:t.usuarioLogin||"1",usuarioNome:t.usuarioNome||"Administrador",tela:t.tela,acao:t.acao,detalhes:t.detalhes};return this.logs.unshift(l),this.saveLogs(),window.dispatchEvent(new CustomEvent("audit_updated",{detail:l})),l}getLogs(){return[...this.logs]}clearLogs(){this.logs=[],this.saveLogs()}}const q=new Ie,fe="acusticamente_users",ge="acusticamente_students",ve="acusticamente_plans",be="acusticamente_appointments",ye="acusticamente_settings",he="acusticamente_payments";class Ce{constructor(){U(this,"users",[]);U(this,"students",[]);U(this,"plans",[]);U(this,"appointments",[]);U(this,"payments",[]);U(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",website:"www.acusticamente.com.br",cep:"01310-100",logradouro:"Avenida Paulista",numero:"1000",complemento:"Conjunto 42",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0});this.initData()}initData(){const t=localStorage.getItem(fe);t?this.users=JSON.parse(t).map(a=>{var S;return{...a,permissoes:{...a.permissoes,financeiro:((S=a.permissoes)==null?void 0:S.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1})}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const e=localStorage.getItem(ve);e?this.plans=JSON.parse(e):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(ge);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[{id:"aluno_1",nome:"Lucas Silveira",email:"lucas@email.com",telefone:"(11) 98231-1122",dataNascimento:"2014-05-14",instrumentoPrincipal:"Bateria",nivelMusical:"iniciante",responsavelNome:"Cláudia Silveira",responsavelTelefone:"(11) 98111-2233",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 2: Discriminação de Timbres",saldoReposicoes:1,valorMensalidade:280,diaVencimento:10,status:"ativo",observacoes:"Apresenta grande facilidade com ritmo.",criadoEm:new Date().toISOString()},{id:"aluno_2",nome:"Mariana Duarte",email:"mariana.duarte@email.com",telefone:"(11) 97123-4567",dataNascimento:"2008-09-21",instrumentoPrincipal:"Violão",nivelMusical:"basico",responsavelNome:"Roberto Duarte",responsavelTelefone:"(11) 97111-0000",responsavelParentesco:"Pai",planoId:"plano_2",moduloAtual:"Módulo 1: Primeiros Acordes e Levadas",saldoReposicoes:0,valorMensalidade:260,diaVencimento:20,status:"ativo",observacoes:"Iniciando estudos no violão popular.",criadoEm:new Date().toISOString()},{id:"aluno_3",nome:"Gabriel Santos",email:"gabriel.s@email.com",telefone:"(11) 99345-6789",dataNascimento:"1998-03-10",instrumentoPrincipal:"Piano & Teclado",nivelMusical:"intermediario",planoId:"plano_3",moduloAtual:"Módulo 1: Digitação e Postura",saldoReposicoes:0,valorMensalidade:320,diaVencimento:10,status:"ativo",observacoes:"Excelente dedicação nas aulas de piano.",criadoEm:new Date().toISOString()},{id:"aluno_4",nome:"Beatriz Costa",email:"beatriz.costa@email.com",telefone:"(11) 96543-2109",dataNascimento:"2015-11-05",instrumentoPrincipal:"Técnica Vocal / Canto",nivelMusical:"iniciante",responsavelNome:"Ana Costa",responsavelTelefone:"(11) 96500-1122",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 3: Harmonia Básica e Canto",saldoReposicoes:2,valorMensalidade:250,diaVencimento:5,status:"ativo",observacoes:"Foco no canto coral.",criadoEm:new Date().toISOString()}],this.saveStudents());const s=localStorage.getItem(be);if(s)this.appointments=JSON.parse(s);else{const a=this.getTodayDateString();this.appointments=[{id:"app_1",titulo:"Aula de Percepção Sonora",alunoId:"aluno_1",planoId:"plano_1",data:a,horaInicio:"08:30",horaFim:"09:30",status:"concluido",observacoes:"Exercícios rítmicos concluídos.",criadoEm:new Date().toISOString()},{id:"app_2",titulo:"Aula Prática de Violão",alunoId:"aluno_2",planoId:"plano_2",data:a,horaInicio:"10:00",horaFim:"11:00",status:"agendado",observacoes:"Praticar transição entre acordes maiores.",criadoEm:new Date().toISOString()},{id:"app_3",titulo:"Prática de Piano Módulo 1",alunoId:"aluno_3",planoId:"plano_3",data:a,horaInicio:"14:00",horaFim:"15:00",status:"agendado",observacoes:"Início da escala de Dó Maior.",criadoEm:new Date().toISOString()},{id:"app_4",titulo:"Percepção e Harmonia",alunoId:"aluno_4",planoId:"plano_1",data:a,horaInicio:"16:30",horaFim:"17:30",status:"agendado",observacoes:"Preparação para apresentação musical.",criadoEm:new Date().toISOString()}],this.saveAppointments()}const l=localStorage.getItem(ye);l&&(this.settings=JSON.parse(l));const w=localStorage.getItem(he);w?this.payments=JSON.parse(w):(this.payments=[{id:"pag_1",alunoId:"aluno_1",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:280,dataVencimento:"2026-08-10",dataPagamento:"2026-08-08",formaPagamento:"pix",status:"pago",observacoes:"Pago pontualmente via Chave Pix",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_2",alunoId:"aluno_1",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:280,dataVencimento:"2026-09-10",status:"atrasado",observacoes:"Venceu dia 10 e aguarda regularização",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_3",alunoId:"aluno_2",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:260,dataVencimento:"2026-09-20",status:"pendente",observacoes:"A vencer no dia 20",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_4",alunoId:"aluno_3",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:320,dataVencimento:"2026-09-10",dataPagamento:"2026-09-10",formaPagamento:"cartao_credito",status:"pago",observacoes:"Pago no balcão da escola",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_5",alunoId:"aluno_4",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:250,dataVencimento:"2026-08-05",dataPagamento:"2026-08-05",formaPagamento:"dinheiro",status:"pago",observacoes:"Comprovante emitido",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_6",alunoId:"aluno_4",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:250,dataVencimento:"2026-09-05",status:"atrasado",observacoes:"Mensalidade vencida dia 05",criadoEm:"2026-09-01T10:00:00.000Z"}],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(a=>{var S;(S=a.observacoes)!=null&&S.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var S;(S=a.titulo)!=null&&S.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const t=new Date,e=o=>o.toString().padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}saveUsers(){localStorage.setItem(fe,JSON.stringify(this.users))}saveStudents(){localStorage.setItem(ge,JSON.stringify(this.students))}savePlans(){localStorage.setItem(ve,JSON.stringify(this.plans))}saveAppointments(){localStorage.setItem(be,JSON.stringify(this.appointments))}savePayments(){localStorage.setItem(he,JSON.stringify(this.payments))}saveSettings(){localStorage.setItem(ye,JSON.stringify(this.settings))}getUsers(){return[...this.users]}getUserById(t){return this.users.find(e=>e.id===t)}addUser(t,e){const o={...t,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),q.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:e,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(t,e,o){const s=this.users.findIndex(a=>a.id===t);if(s===-1)throw new Error("Usuário não encontrado.");const l=this.users[s],w=l.isSistema;return this.users[s]={...l,...e,isSistema:w,atualizadoEm:new Date().toISOString()},this.saveUsers(),q.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${l.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(t,e){const o=this.users.find(s=>s.id===t);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==t),this.saveUsers(),q.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:e,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(t,e){const o={...t,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),q.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(t,e,o){const s=this.students.findIndex(w=>w.id===t);if(s===-1)throw new Error("Aluno não encontrado.");const l=this.students[s];return this.students[s]={...l,...e},this.saveStudents(),q.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${l.nome}" atualizado.`}),this.students[s]}deleteStudent(t,e){const o=this.students.find(s=>s.id===t);o&&(this.students=this.students.filter(s=>s.id!==t),this.saveStudents(),q.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(t,e){const o={...t,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),q.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(t,e,o){const s=this.plans.findIndex(w=>w.id===t);if(s===-1)throw new Error("Plano não encontrado.");const l=this.plans[s];return this.plans[s]={...l,...e},this.savePlans(),q.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${l.nome}" atualizado.`}),this.plans[s]}deletePlan(t,e){const o=this.plans.find(s=>s.id===t);o&&(this.plans=this.plans.filter(s=>s.id!==t),this.savePlans(),q.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(t,e){const o={...t,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(l=>l.id===o.alunoId);return q.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:e,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(t,e,o){const s=this.appointments.findIndex(w=>w.id===t);if(s===-1)throw new Error("Compromisso não encontrado.");const l=this.appointments[s];return this.appointments[s]={...l,...e},this.saveAppointments(),q.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${l.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(t,e){const o=this.appointments.find(s=>s.id===t);o&&(this.appointments=this.appointments.filter(s=>s.id!==t),this.saveAppointments(),q.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:e,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(t,e){const o=this.updateAppointment(t,{status:"concluido"},e),s=this.students.find(l=>l.id===o.alunoId);return q.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:e,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(t,e,o,s){const l=e?"falta_justificada":"falta_injustificada",w=this.updateAppointment(t,{status:l,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(v=>v.id===w.alunoId);let S=(a==null?void 0:a.saldoReposicoes)||0;return e&&a?(S=(a.saldoReposicoes||0)+1,a.saldoReposicoes=S,this.saveStudents(),q.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${w.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${S}. Motivo: ${o||"Não especificado"}`})):!e&&a&&q.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${w.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:w,saldoReposicoes:S}}agendarReposicao(t,e,o){const s=this.addAppointment({...t,tipoAula:"reposicao",aulaOriginalId:e,status:"agendado"},o);if(e){const w=this.appointments.findIndex(a=>a.id===e);w!==-1&&(this.appointments[w].aulaReposicaoId=s.id,this.saveAppointments())}const l=this.students.find(w=>w.id===s.alunoId);return l&&typeof l.saldoReposicoes=="number"&&l.saldoReposicoes>0&&(l.saldoReposicoes-=1,this.saveStudents(),q.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${l.nome}". 1 crédito abatido. Saldo restante: ${l.saldoReposicoes}.`})),s}getStudentAppointments(t){return this.appointments.filter(e=>e.alunoId===t).sort((e,o)=>{const s=`${e.data}T${e.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const t=this.getTodayDateString();let e=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<t&&(o.status="atrasado",e=!0)}),e&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(t){return this.getPayments().filter(e=>e.alunoId===t)}isStudentOverdue(t){const e=this.getTodayDateString();return this.payments.some(o=>o.alunoId===t&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<e))}addPayment(t,e){const o=this.getTodayDateString();let s=t.status;s==="pendente"&&t.dataVencimento<o&&(s="atrasado");const l={...t,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(l),this.savePayments();const w=this.students.find(a=>a.id===l.alunoId);return q.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:e,detalhes:`Lançamento "${l.descricao}" (R$ ${l.valor.toFixed(2)}) cadastrado para o aluno "${(w==null?void 0:w.nome)||"N/A"}" com vencimento em ${l.dataVencimento}.`}),l}darBaixaPayment(t,e,o,s,l){const w=this.payments.findIndex(d=>d.id===t);if(w===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[w],S=a.status;a.status="pago",a.dataPagamento=e,a.formaPagamento=o,l!==void 0&&(a.observacoes=l.trim()?l.trim():a.observacoes),this.savePayments();const v=this.students.find(d=>d.id===a.alunoId);return q.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(v==null?void 0:v.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${e} (Status anterior: ${S}).`}),a}updatePayment(t,e,o){const s=this.payments.findIndex(d=>d.id===t);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const l=this.getTodayDateString();let w=e.status||this.payments[s].status;const a=e.dataVencimento||this.payments[s].dataVencimento;w==="pendente"&&a<l&&(w="atrasado"),this.payments[s]={...this.payments[s],...e,status:w},this.savePayments();const S=this.payments[s],v=this.students.find(d=>d.id===S.alunoId);return q.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${S.descricao}" do aluno "${(v==null?void 0:v.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(t,e){const o=this.payments.find(l=>l.id===t);if(!o)return;this.payments=this.payments.filter(l=>l.id!==t),this.savePayments();const s=this.students.find(l=>l.id===o.alunoId);q.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:e,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(t,e,o){const s=x=>x.toString().padStart(2,"0"),l=`${t}-${s(e)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e-1]||l,S=this.students.filter(x=>x.status==="ativo");let v=0,d=0;return S.forEach(x=>{if(this.payments.some(i=>i.alunoId===x.id&&(i.mesReferencia===l||i.dataVencimento.startsWith(l)))){d++;return}const n=x.diaVencimento||10,c=new Date(t,e,0).getDate(),b=Math.min(n,c),f=`${t}-${s(e)}-${s(b)}`,r=typeof x.valorMensalidade=="number"&&x.valorMensalidade>0?x.valorMensalidade:280;this.addPayment({alunoId:x.id,descricao:`Mensalidade ${a}/${t}`,mesReferencia:l,valor:r,dataVencimento:f,status:"pendente",observacoes:`Gerado automaticamente para o plano ${x.moduloAtual||x.instrumentoPrincipal||"Música"}`},o),v++}),q.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${t}: ${v} mensalidade(s) criada(s) e ${d} já existente(s) pulada(s).`}),{criadas:v,puladas:d}}getSettings(){return{...this.settings}}updateSettings(t,e){return this.settings={...this.settings,...t},this.saveSettings(),q.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:e,detalhes:`Parâmetros do sistema atualizados (MongoDB: ${this.settings.mongoDatabase}).`}),this.settings}}const A=new Ce,K={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function te(y){var s,l,w,a,S,v,d,x,k,n,c,b,f,r,i,g,$,p,E,u,m,h,C,z;if(!y)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(y.papel==="admin")return JSON.parse(JSON.stringify(K.admin));const t=K[y.papel]||K.professor,e=y.permissoes;if(!e)return JSON.parse(JSON.stringify(t));const o=D=>typeof D=="boolean";return{alunos:{acesso:o(e.alunos)?e.alunos:((s=e.alunos)==null?void 0:s.acesso)??t.alunos.acesso,cadastrar:o(e.alunos)?e.alunos:((l=e.alunos)==null?void 0:l.cadastrar)??t.alunos.cadastrar,alterar:o(e.alunos)?e.alunos:((w=e.alunos)==null?void 0:w.alterar)??t.alunos.alterar,excluir:o(e.alunos)?!1:((a=e.alunos)==null?void 0:a.excluir)??t.alunos.excluir},agenda:{acesso:o(e.agenda)?e.agenda:((S=e.agenda)==null?void 0:S.acesso)??t.agenda.acesso,cadastrar:o(e.agenda)?e.agenda:((v=e.agenda)==null?void 0:v.cadastrar)??t.agenda.cadastrar,alterar:o(e.agenda)?e.agenda:((d=e.agenda)==null?void 0:d.alterar)??t.agenda.alterar,excluir:o(e.agenda)?!1:((x=e.agenda)==null?void 0:x.excluir)??t.agenda.excluir},planos:{acesso:o(e.planos)?e.planos:((k=e.planos)==null?void 0:k.acesso)??t.planos.acesso,cadastrar:o(e.planos)?e.planos:((n=e.planos)==null?void 0:n.cadastrar)??t.planos.cadastrar,alterar:o(e.planos)?e.planos:((c=e.planos)==null?void 0:c.alterar)??t.planos.alterar,excluir:o(e.planos)?!1:((b=e.planos)==null?void 0:b.excluir)??t.planos.excluir},home:{acesso:o(e.home)?e.home:((f=e.home)==null?void 0:f.acesso)??t.home.acesso},financeiro:{acesso:o(e.financeiro)?e.financeiro:((r=e.financeiro)==null?void 0:r.acesso)??((i=t.financeiro)==null?void 0:i.acesso)??!1,cadastrar:o(e.financeiro)?e.financeiro:((g=e.financeiro)==null?void 0:g.cadastrar)??(($=t.financeiro)==null?void 0:$.cadastrar)??!1,alterar:o(e.financeiro)?e.financeiro:((p=e.financeiro)==null?void 0:p.alterar)??((E=t.financeiro)==null?void 0:E.alterar)??!1,excluir:o(e.financeiro)?!1:((u=e.financeiro)==null?void 0:u.excluir)??((m=t.financeiro)==null?void 0:m.excluir)??!1},auditoria:{acesso:o(e.auditoria)?e.auditoria:((h=e.auditoria)==null?void 0:h.acesso)??t.auditoria.acesso},configuracoes:{acesso:o(e.configuracoes)?e.configuracoes:((C=e.configuracoes)==null?void 0:C.acesso)??t.configuracoes.acesso,alterar:o(e.configuracoes)?e.configuracoes:((z=e.configuracoes)==null?void 0:z.alterar)??t.configuracoes.alterar}}}function Y(y,t){if(!y)return!1;if(t==="login")return!0;if(t==="user")return y.papel==="admin";if(y.papel==="admin")return!0;const o=te(y)[t];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function V(y,t,e){if(!y)return!1;if(y.papel==="admin")return!0;const s=te(y)[t];return s?!!s[e]:!1}const ee="acusticamente_active_session";class ze{constructor(){U(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const t=localStorage.getItem(ee);t&&(this.currentUser=JSON.parse(t))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const t=A.getUserById(this.currentUser.id);t&&(this.currentUser=t,localStorage.setItem(ee,JSON.stringify(t)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(t,e){const s=A.getUsers().find(l=>l.login===t.trim());return s?s.senha!==e.trim()?(q.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(ee,JSON.stringify(s)),q.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(q.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:t,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${t}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&q.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(ee),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const _=new ze;function oe(y=40){return`
    <svg width="${y}" height="${y}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function M(y,t="success"){const e=document.getElementById("toast-container");if(!e)return;const o=document.createElement("div");o.className=`toast toast-${t}`,o.innerHTML=`
    <span class="toast-icon">${t==="success"?"✓":t==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${y}</span>
  `,e.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function H(y){const t=document.getElementById("modal-container");if(!t)return;t.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${y.modalClass||""}">
        <div class="modal-header">
          <h3>${y.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${y.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${y.cancelText||"Cancelar"}</button>
          ${y.confirmText?`<button type="button" class="btn ${y.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${y.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const e=document.getElementById("active-modal-backdrop"),o=document.getElementById("modal-close-btn"),s=document.getElementById("modal-cancel-btn"),l=document.getElementById("modal-confirm-btn"),w=()=>{t.innerHTML="",y.onCancel&&y.onCancel()};o.onclick=w,s.onclick=w,e.onclick=a=>{a.target===e&&w()},l&&y.onConfirm&&(l.onclick=async()=>{const a=document.querySelector(".modal-card");await y.onConfirm(a)!==!1&&(t.innerHTML="")})}function Q(){const y=document.getElementById("modal-container");y&&(y.innerHTML="")}function Z(y){H({title:y.title||"Confirmar Exclusão",bodyHtml:`
      <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
          ⚠️
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
            ${y.message}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Esta operação não poderá ser desfeita.
          </div>
        </div>
      </div>
    `,confirmText:y.confirmText||"Excluir Definitivamente",confirmBtnClass:y.confirmBtnClass||"btn-danger",onConfirm:()=>(y.onConfirm(),!0)})}const L={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'},ae="acusticamente_auth_remember",xe="acusticamente_manual_logout";function Me(y){const t=document.createElement("div");t.className="login-page";let e={username:"",password:"",remember:!1,autoLogin:!1};try{const a=localStorage.getItem(ae);a&&(e={...e,...JSON.parse(a)})}catch{e={username:"",password:"",remember:!1,autoLogin:!1}}t.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${oe(50)}
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
            ${oe(58)}
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
  `;const o=t.querySelector("#login-remember"),s=t.querySelector("#login-autologin");s==null||s.addEventListener("change",()=>{s.checked&&!o.checked&&(o.checked=!0)}),o==null||o.addEventListener("change",()=>{!o.checked&&s.checked&&(s.checked=!1)});const l=t.querySelector("#login-form");l.onsubmit=a=>{var b;a.preventDefault();const S=t.querySelector("#login-username"),v=t.querySelector("#login-password"),d=S.value.trim(),x=v.value.trim(),k=o.checked,n=s.checked,c=_.login(d,x);c.success?(k?localStorage.setItem(ae,JSON.stringify({username:d,password:x,remember:!0,autoLogin:n})):localStorage.removeItem(ae),sessionStorage.removeItem(xe),M(`Bem-vindo, ${(b=c.user)==null?void 0:b.nome}!`,"success"),y()):M(c.message,"error")};const w=sessionStorage.getItem(xe)==="true";return e.autoLogin&&e.remember&&e.username&&e.password&&!w&&setTimeout(()=>{var S;if(!t.isConnected&&!document.body.contains(t))return;const a=_.login(e.username,e.password);a.success&&(M(`Bem-vindo de volta, ${(S=a.user)==null?void 0:S.nome}!`,"success"),y())},100),t}function $e(y){var d,x;const t=document.createElement("div"),e=_.getCurrentUser(),o=A.getStudents(),s=A.getPlans(),l=A.getAppointments(),w=A.getTodayDateString(),a=l.filter(k=>k.data===w),S=o.filter(k=>k.status==="ativo").length,v=a.find(k=>k.status==="agendado");return t.innerHTML=`
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
        ${L.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${L.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${a.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${L.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${S}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${L.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${v?v.horaInicio:"--:--"}</span>
          <span class="metric-label">${v?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${L.planos}
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
              <th>Horário</th>
              <th>Aluno</th>
              <th>Plano de Ensino</th>
              <th>Status</th>
              <th style="text-align: right;">Ações</th>
            </tr>
          </thead>
          <tbody id="today-classes-tbody">
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(k=>{const n=o.find(i=>i.id===k.alunoId),c=s.find(i=>i.id===k.planoId),b=k.status==="concluido",f=k.status==="agendado";let r='<span class="badge badge-warning">⏳ Agendado</span>';return b?r='<span class="badge badge-success">✓ Concluído</span>':k.status==="falta_justificada"?r='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':k.status==="falta_injustificada"?r='<span class="badge badge-danger">✕ Falta Injustificada</span>':k.status==="cancelado"&&(r='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${k.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${k.horaInicio} - ${k.horaFim}</strong>
                            ${k.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                              <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                ${((n==null?void 0:n.nome)||"A")[0]}
                              </div>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem;">
                                ${(n==null?void 0:n.nome)||"Aluno não vinculado"}
                              </span>
                            </div>
                          </td>
                          <td style="white-space: nowrap;">
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(c==null?void 0:c.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td style="white-space: nowrap;">
                            ${r}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${f?`<button class="btn btn-secondary btn-complete-class" data-id="${k.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${b?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(d=t.querySelector("#home-btn-new-appointment"))==null||d.addEventListener("click",()=>{y("agenda")}),(x=t.querySelector("#home-btn-view-all-agenda"))==null||x.addEventListener("click",()=>{y("agenda")}),t.querySelectorAll(".btn-complete-class").forEach(k=>{k.addEventListener("click",n=>{const c=n.currentTarget.dataset.id;c&&(A.updateAppointment(c,{status:"concluido"},(e==null?void 0:e.nome)||"Administrador"),M("Aula concluída com sucesso!","success"),y("home"))})}),t}function Le(y){const t=document.createElement("div"),e=_.getCurrentUser();let o=new Date;function s(){var $,p,E,u;const a=A.getStudents();A.getPlans();const S=A.getAppointments(),v=o.getFullYear(),d=o.getMonth(),x=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],k=new Date(v,d,1).getDay(),n=new Date(v,d+1,0).getDate(),c=new Date(v,d,0).getDate(),b=new Date,f=b.getFullYear()===v&&b.getMonth()===d,r=[];for(let m=k;m>0;m--){const h=c-m+1;r.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${h}</span>
          </div>
        </div>
      `)}for(let m=1;m<=n;m++){const h=N=>N.toString().padStart(2,"0"),C=`${v}-${h(d+1)}-${h(m)}`,z=f&&b.getDate()===m,D=S.filter(N=>N.data===C),T=D.slice(0,3).map(N=>{const I=a.find(F=>F.id===N.alunoId),P=I?I.nome.split(" ")[0]:"Aula";let j="",B="";return N.status==="concluido"?(j="concluido",B="✓ "):N.status==="falta_justificada"?(j="falta-justificada",B="⚠️ "):N.status==="falta_injustificada"?(j="falta-injustificada",B="✕ "):N.tipoAula==="reposicao"&&(j="reposicao",B="🔄 "),`
            <div class="calendar-appointment-badge ${j}" 
                 data-app-id="${N.id}" 
                 title="${N.horaInicio} - ${(I==null?void 0:I.nome)||"Aluno"} (${N.status}${N.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${B}${N.horaInicio}</strong> ${P}
            </div>
          `}).join(""),O=D.length>3?D.length-3:0,R=O>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${O} mais</div>`:"";r.push(`
        <div class="calendar-day-cell ${z?"today":""}" data-date="${C}">
          <div class="day-cell-header">
            <span class="day-number">${m}</span>
            ${D.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${D.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${T}
            ${R}
          </div>
        </div>
      `)}const i=r.length,g=i>35?42-i:35-i;for(let m=1;m<=g;m++)r.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${m}</span>
          </div>
        </div>
      `);t.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${x[d]} de ${v}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${f?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${V(e,"agenda","cadastrar")?`
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${L.plus} Nova Aula / Compromisso
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

          ${r.join("")}
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
    `,($=t.querySelector("#agenda-btn-prev"))==null||$.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(p=t.querySelector("#agenda-btn-next"))==null||p.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(E=t.querySelector("#agenda-btn-today"))==null||E.addEventListener("click",()=>{o=new Date,s()}),(u=t.querySelector("#agenda-btn-new-app"))==null||u.addEventListener("click",()=>{w()}),t.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(m=>{m.addEventListener("click",h=>{const C=m.dataset.date;C&&l(C)})}),t.querySelectorAll(".calendar-appointment-badge").forEach(m=>{m.addEventListener("click",h=>{h.stopPropagation();const C=m.dataset.appId,z=S.find(D=>D.id===C);z&&l(z.data)})})}function l(a){const S=A.getStudents(),v=A.getPlans(),d=A.getAppointments().filter(r=>r.data===a),[x,k,n]=a.split("-"),c=`${n}/${k}/${x}`,b=d.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${d.map(r=>{const i=S.find(D=>D.id===r.alunoId),g=v.find(D=>D.id===r.planoId),$=r.status==="concluido",p=r.status==="falta_justificada",E=r.status==="falta_injustificada",u=r.status==="cancelado",m=r.status==="agendado",h=r.tipoAula==="reposicao";let C="var(--color-coral)",z='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return $?(C="var(--status-success)",z='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):p?(C="#f59e0b",z='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):E?(C="var(--status-danger)",z='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):u&&(C="var(--border-subtle)",z='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${C};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${r.horaInicio} - ${r.horaFim}</strong>
                        ${z}
                        ${h?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${r.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(i==null?void 0:i.nome)||"Não vinculado"}</strong>
                        ${i!=null&&i.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${i.instrumentoPrincipal}</span>`:""}
                        ${g?` &bull; Plano: <span style="color: #ff9187;">${g.nome}</span>`:""}
                      </div>

                      ${r.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${r.justificativaFalta}
                             </div>`:""}

                      ${r.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${r.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${r.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${V(e,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${r.id}" title="Editar Detalhes">
                              ${L.edit}
                            </button>
                          `:""}
                      ${V(e,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${r.id}" title="Excluir">
                              ${L.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${V(e,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${m?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${r.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${r.id}" data-name="${(i==null?void 0:i.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${r.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${p&&!r.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${r.id}" data-student-id="${r.alunoId}" data-title="${r.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,f=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${d.length}</strong>
          </span>
          ${V(e,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${L.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${b}
      </div>
    `;H({title:`Aulas do Dia: ${c}`,bodyHtml:f,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var r;(r=document.getElementById("btn-modal-new-appointment"))==null||r.addEventListener("click",()=>{Q(),w({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(i=>{i.addEventListener("click",g=>{const $=g.currentTarget.dataset.id;$&&(A.marcarPresenca($,(e==null?void 0:e.nome)||"Administrador"),M("Presença confirmada e aula concluída!","success"),s(),l(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(i=>{i.addEventListener("click",g=>{const $=g.currentTarget.dataset.id,p=g.currentTarget.dataset.name;if(!$)return;const E=prompt(`Informe o motivo da falta justificada de ${p} (Ex: Atestado médico, Viagem em família):`);if(E===null)return;const u=A.registrarFalta($,!0,E,(e==null?void 0:e.nome)||"Administrador");M(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${u.saldoReposicoes}).`,"success"),s(),l(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(i=>{i.addEventListener("click",g=>{const $=g.currentTarget.dataset.id;$&&Z({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{A.registrarFalta($,!1,void 0,(e==null?void 0:e.nome)||"Administrador"),M("Falta injustificada registrada.","info"),s(),l(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(i=>{i.addEventListener("click",g=>{const $=g.currentTarget,p=$.dataset.id,E=$.dataset.studentId,u=$.dataset.title;Q(),w({studentId:E,aulaOriginalId:p,tipoAula:"reposicao",titulo:u?`Reposição: ${u}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(i=>{i.addEventListener("click",g=>{const $=g.currentTarget.dataset.id,p=A.getAppointments().find(E=>E.id===$);p&&(Q(),w({existingApp:p}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(i=>{i.addEventListener("click",g=>{const $=g.currentTarget.dataset.id,p=A.getAppointments().find(E=>E.id===$);p&&Z({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${p.titulo}</strong>"?`,onConfirm:()=>{A.deleteAppointment(p.id,(e==null?void 0:e.nome)||"Administrador"),M("Compromisso removido.","info"),s(),l(a)}})})})},50)}function w(a){const S=A.getStudents(),v=A.getPlans(),d=a==null?void 0:a.existingApp,x=!!d,k=(d==null?void 0:d.alunoId)||(a==null?void 0:a.studentId)||"",n=(d==null?void 0:d.data)||(a==null?void 0:a.defaultDate)||A.getTodayDateString(),c=((d==null?void 0:d.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",b=S.map(i=>`<option value="${i.id}" ${k===i.id?"selected":""}>${i.nome} (${i.instrumentoPrincipal||"Geral"}) - Saldo: ${i.saldoReposicoes||0} rep.</option>`).join(""),f=v.map(i=>`<option value="${i.id}" ${(d==null?void 0:d.planoId)===i.id?"selected":""}>${i.nome}</option>`).join(""),r=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Tipo de Aula -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" style="margin: 0; font-weight: 600; color: var(--text-white);">Tipo de Aula:</label>
          <div style="display: flex; gap: 14px;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: var(--text-white);">
              <input type="radio" name="app-tipo-aula" value="regular" ${c?"":"checked"} style="accent-color: var(--color-coral);" />
              Aula Regular
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: #4ade80;">
              <input type="radio" name="app-tipo-aula" value="reposicao" ${c?"checked":""} style="accent-color: #22c55e;" />
              🔄 Aula de Reposição
            </label>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-title">Título da Aula / Conteúdo Previsto</label>
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Módulo 2" value="${(d==null?void 0:d.titulo)||(a==null?void 0:a.titulo)||""}" required />
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
            ${f}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${n}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${(d==null?void 0:d.horaInicio)||"09:00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${(d==null?void 0:d.horaFim)||"10:00"}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-status">Status da Aula</label>
            <select id="app-status" class="form-select">
              <option value="agendado" ${(d==null?void 0:d.status)==="agendado"?"selected":""}>⏳ Agendado</option>
              <option value="concluido" ${(d==null?void 0:d.status)==="concluido"?"selected":""}>✓ Concluído / Presente</option>
              <option value="falta_justificada" ${(d==null?void 0:d.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
              <option value="falta_injustificada" ${(d==null?void 0:d.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
              <option value="cancelado" ${(d==null?void 0:d.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;" id="box-justificativa">
            <label class="form-label" for="app-justificativa">Justificativa da Falta (se houver)</label>
            <input type="text" id="app-justificativa" class="form-input" placeholder="Ex: Atestado, viagem, imprevisto..." value="${(d==null?void 0:d.justificativaFalta)||""}" />
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-obs">Observações / Orientações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Repertório trabalhado, exercícios para casa...">${(d==null?void 0:d.observacoes)||""}</textarea>
        </div>

        ${x?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${L.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;H({title:x?"Editar Aula / Compromisso":c?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:r,confirmText:x?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const i=document.getElementById("app-title").value.trim(),g=document.getElementById("app-student").value,$=document.getElementById("app-plan").value,p=document.getElementById("app-date").value,E=document.getElementById("app-time-start").value,u=document.getElementById("app-time-end").value,m=document.getElementById("app-status").value,h=document.getElementById("app-justificativa").value.trim(),C=document.getElementById("app-obs").value.trim(),z=document.querySelector('input[name="app-tipo-aula"]:checked'),D=(z==null?void 0:z.value)||"regular";if(!i||!g||!p||!E)return M("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const T=(e==null?void 0:e.nome)||"Administrador";return x&&d?(A.updateAppointment(d.id,{titulo:i,alunoId:g,planoId:$||void 0,data:p,horaInicio:E,horaFim:u,status:m,tipoAula:D,justificativaFalta:h||void 0,observacoes:C},T),M("Aula atualizada com sucesso!","success")):D==="reposicao"?(A.agendarReposicao({titulo:i,alunoId:g,planoId:$||void 0,data:p,horaInicio:E,horaFim:u,status:m,justificativaFalta:h||void 0,observacoes:C},a==null?void 0:a.aulaOriginalId,T),M("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(A.addAppointment({titulo:i,alunoId:g,planoId:$||void 0,data:p,horaInicio:E,horaFim:u,status:m,tipoAula:D,justificativaFalta:h||void 0,observacoes:C},T),M("Aula agendada com sucesso!","success")),s(),!0}}),x&&d&&setTimeout(()=>{var i;(i=document.getElementById("btn-delete-app"))==null||i.addEventListener("click",()=>{Z({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${d.titulo}</strong>"?`,onConfirm:()=>{A.deleteAppointment(d.id,(e==null?void 0:e.nome)||"Administrador"),M("Compromisso removido.","info"),Q(),s()}})})},50)}return s(),t}const De=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function we(y){const t=(y||"").toLowerCase();return t.includes("bateria")||t.includes("percuss")?"🥁":t.includes("piano")||t.includes("teclado")?"🎹":t.includes("guitarra")?"🎸":t.includes("violão")||t.includes("violao")?"🪕":t.includes("canto")||t.includes("vocal")?"🎤":t.includes("baixo")?"🎸":t.includes("violino")?"🎻":t.includes("flauta")||t.includes("sax")?"🎷":"🎵"}function Pe(y){switch(y){case"iniciante":return'<span class="badge" style="background: rgba(147, 51, 234, 0.15); color: #c084fc; border: 1px solid rgba(147, 51, 234, 0.3); font-size: 0.7rem;">Iniciante</span>';case"basico":return'<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 0.7rem;">Básico</span>';case"intermediario":return'<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fcd34d; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.7rem;">Intermediário</span>';case"avancado":return'<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.7rem;">Avançado</span>';default:return'<span class="badge badge-secondary" style="font-size: 0.7rem;">Geral</span>'}}function Be(y){if(!y)return"";const t=new Date(y+"T00:00:00");if(isNaN(t.getTime()))return"";const e=new Date;let o=e.getFullYear()-t.getFullYear();const s=e.getMonth()-t.getMonth();return(s<0||s===0&&e.getDate()<t.getDate())&&o--,`${o} anos`}function Te(y,t){const e=y.replace(/\D/g,"");if(!e)return"";const o=e.length<=11?`55${e}`:e,s=encodeURIComponent(`Olá, ${t}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function Ae(y,t){const e={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${y.id.toUpperCase()}</div>
        </div>
      </div>

      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; margin-bottom: 16px; font-size: 0.84rem; line-height: 1.5;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div><span style="color: #6b7280;">Aluno(a):</span> <strong>${t.nome}</strong></div>
          <div><span style="color: #6b7280;">Instrumento:</span> <strong>${t.instrumentoPrincipal||"Música Geral"}</strong></div>
          <div><span style="color: #6b7280;">Responsável:</span> <strong>${t.responsavelNome||"O Próprio Aluno"}</strong></div>
          <div><span style="color: #6b7280;">Contato:</span> <strong>${t.telefone||"-"}</strong></div>
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
              <strong>${y.descricao}</strong>
              ${y.observacoes?`<br><small style="color: #6b7280;">${y.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${y.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${y.dataPagamento?y.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${y.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${y.formaPagamento?e[y.formaPagamento]||y.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${y.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;H({title:`Recibo de Pagamento: ${y.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function Ne(y){const t=document.createElement("div"),e=_.getCurrentUser();let o="";function s(){var c,b;const a=A.getStudents(),S=A.getPlans(),v=V(e,"alunos","cadastrar"),d=V(e,"alunos","alterar"),x=V(e,"alunos","excluir"),k=a.filter(f=>f.nome.toLowerCase().includes(o.toLowerCase())||f.email.toLowerCase().includes(o.toLowerCase())||f.telefone.includes(o)||f.instrumentoPrincipal&&f.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||f.responsavelNome&&f.responsavelNome.toLowerCase().includes(o.toLowerCase()));t.innerHTML=`
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

        ${v?`
              <button class="btn btn-primary" id="btn-new-student">
                ${L.plus} Cadastrar Novo Aluno
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
            ${L.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${k.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 220px;">Aluno</th>
                <th style="width: 180px;">Instrumento</th>
                <th style="width: 160px;">Contato</th>
                <th style="width: 180px;">Plano de Ensino</th>
                <th style="width: 120px;">Status</th>
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${k.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':k.map(f=>{const r=S.find(g=>g.id===f.planoId),i=f.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${f.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                  ${f.nome}
                                </span>
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${we(f.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${f.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${f.telefone||"-"}
                              </span>
                            </td>

                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${(r==null?void 0:r.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                            </td>

                            <td>
                              <span class="badge ${i?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${i?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${f.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${L.profile}
                                </button>
                                ${d?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${f.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${L.edit}
                                      </button>
                                    `:""}
                                ${x?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${f.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${L.trash}
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
    `;const n=t.querySelector("#student-search-input");n==null||n.addEventListener("input",f=>{o=f.target.value,s();const r=t.querySelector("#student-search-input");r&&(r.focus(),r.selectionStart=r.selectionEnd=r.value.length)}),(c=t.querySelector("#btn-clear-search"))==null||c.addEventListener("click",()=>{o="",s()}),(b=t.querySelector("#btn-new-student"))==null||b.addEventListener("click",()=>{w()}),t.querySelectorAll(".btn-view-student").forEach(f=>{f.addEventListener("click",r=>{const i=r.currentTarget.dataset.id,g=A.getStudents().find($=>$.id===i);g&&l(g)})}),t.querySelectorAll(".btn-edit-student").forEach(f=>{f.addEventListener("click",r=>{const i=r.currentTarget.dataset.id,g=A.getStudents().find($=>$.id===i);g&&w(g)})}),t.querySelectorAll(".btn-delete-student").forEach(f=>{f.addEventListener("click",r=>{const i=r.currentTarget.dataset.id,g=A.getStudents().find($=>$.id===i);g&&Z({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${g.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{A.deleteStudent(g.id,(e==null?void 0:e.nome)||"Administrador"),M(`Aluno "${g.nome}" excluído.`,"info"),s()}})})})}function l(a){A.getPlans().find(u=>u.id===a.planoId);const v=A.getStudentAppointments(a.id),d=A.getStudentPayments(a.id),x=Be(a.dataNascimento),k=Te(a.telefone,a.nome),n=a.saldoReposicoes||0,c=A.isStudentOverdue(a.id),b=a.status==="ativo",f=V(e,"financeiro","alterar"),r=v.length,i=v.filter(u=>u.status==="concluido").length,g=v.filter(u=>u.status==="falta_justificada").length;v.filter(u=>u.status==="falta_injustificada").length;const $=d.filter(u=>u.status==="pago").reduce((u,m)=>u+m.valor,0),p=d.filter(u=>u.status!=="pago").reduce((u,m)=>u+m.valor,0),E=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Cartão Superior de Perfil do Aluno -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--color-coral); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; color: #ffffff;">
              ${a.nome[0]||"A"}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${a.nome}</span>
                <span class="badge ${b?"badge-success":"badge-warning"}" style="font-size: 0.65rem;">
                  ${b?"● Ativo":"○ Inativo"}
                </span>
                ${b?c?'<span class="badge badge-coral" style="font-size: 0.65rem; font-weight: 700;">⚠️ Inadimplente</span>':'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">✓ Mensalidade em dia</span>':""}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px; flex-wrap: wrap; font-size: 0.8rem; color: var(--text-secondary);">
                <span>${we(a.instrumentoPrincipal)} ${a.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                ${Pe(a.nivelMusical)}
                ${x?`&bull; <span style="color: var(--text-muted);">${x}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${k?`
                  <a href="${k}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; color: #22c55e; border-color: rgba(34, 197, 94, 0.3); font-size: 0.75rem; padding: 4px 10px;">
                    ${L.whatsapp} WhatsApp
                  </a>
                `:""}
          </div>
        </div>

        <!-- Seletor de Abas da Ficha do Aluno -->
        <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
          <button type="button" class="btn btn-sm btn-profile-tab active" id="btn-tab-pedagogico" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            🎓 Pedagógico &amp; Aulas
          </button>
          <button type="button" class="btn btn-sm btn-profile-tab btn-secondary" id="btn-tab-financeiro" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            💰 Histórico Financeiro
            ${c?'<span class="badge badge-coral" style="font-size: 0.65rem; padding: 1px 5px;">Atrasado</span>':`<span class="badge" style="background: rgba(34, 197, 94, 0.2); color: #4ade80; font-size: 0.65rem; padding: 1px 5px;">${d.length}</span>`}
          </button>
        </div>

        <!-- CONTEÚDO DA ABA 1: PEDAGÓGICO -->
        <div id="panel-tab-pedagogico" style="display: flex; flex-direction: column; gap: 14px;">
          <!-- Informações de Contato e Responsável -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px;">
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
                Contatos Pessoais
              </span>
              <div style="font-size: 0.82rem; color: var(--text-white);">📱 ${a.telefone||"Sem telefone"}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">✉️ ${a.email||"Sem e-mail"}</div>
            </div>

            <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px;">
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
                Responsável Legal / Emergência
              </span>
              ${a.responsavelNome?`
                    <div style="font-size: 0.82rem; color: var(--text-white);">
                      👤 <strong>${a.responsavelNome}</strong> ${a.responsavelParentesco?`(${a.responsavelParentesco})`:""}
                    </div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      📞 ${a.responsavelTelefone||"Sem telefone informado"}
                    </div>
                  `:'<div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">Não informado / Aluno maior de idade</div>'}
            </div>
          </div>

          <!-- Métricas Rápidas de Presença e Reposições -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #60a5fa;">${r}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Aulas Agendadas</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #4ade80;">${i}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Presenças</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #f59e0b;">${g}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Faltas Justificadas</div>
            </div>

            <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #22c55e;">${n}</div>
              <div style="font-size: 0.7rem; color: #86efac; margin-top: 2px;">Saldo Reposições</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-white); margin: 0;">
                Histórico Pedagógico de Aulas &amp; Faltas
              </h4>
              ${n>0?`
                    <button type="button" class="btn btn-primary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.72rem; padding: 3px 8px;">
                      🔄 Agendar Reposição (${n} disp.)
                    </button>
                  `:""}
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${v.length===0?'<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">Nenhuma aula registrada ainda para este aluno.</div>':`
                    <table class="data-table" style="margin: 0; font-size: 0.8rem;">
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
                        ${v.map(u=>{const m=u.data.split("-").reverse().join("/");let h="";u.status==="concluido"?h='<span class="badge badge-success" style="font-size: 0.65rem;">✓ Presente</span>':u.status==="falta_justificada"?h='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.65rem;">⚠️ Falta Just.</span>':u.status==="falta_injustificada"?h='<span class="badge badge-danger" style="font-size: 0.65rem;">✕ Injustificada</span>':u.status==="cancelado"?h='<span class="badge badge-secondary" style="font-size: 0.65rem;">🚫 Cancelado</span>':h='<span class="badge badge-warning" style="font-size: 0.65rem;">⏳ Agendado</span>';const C=u.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; font-size: 0.65rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td>
                                <strong>${m}</strong><br>
                                <span style="font-size: 0.7rem; color: var(--text-muted);">${u.horaInicio} - ${u.horaFim}</span>
                              </td>
                              <td>
                                <div style="font-weight: 600; color: var(--text-white);">${u.titulo}</div>
                              </td>
                              <td>${C}</td>
                              <td>${h}</td>
                              <td>
                                <span style="color: var(--text-secondary); font-size: 0.75rem;">
                                  ${u.justificativaFalta?`<em>Motivo: ${u.justificativaFalta}</em>`:u.observacoes||"-"}
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
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.78rem; color: var(--text-secondary);">
                  📝 <strong>Observações:</strong> ${a.observacoes}
                </div>
              `:""}
        </div>

        <!-- CONTEÚDO DA ABA 2: FINANCEIRO -->
        <div id="panel-tab-financeiro" style="display: none; flex-direction: column; gap: 14px;">
          <!-- Card de Alerta de Situação Financeira -->
          ${c?`
                <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.3); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="font-weight: 700; color: #f87171; font-size: 0.88rem;">⚠️ Mensalidade em Atraso</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      Este aluno possui pagamentos com vencimento expirado que aguardam regularização.
                    </div>
                  </div>
                  <span class="badge badge-coral" style="font-size: 0.75rem;">Pendente</span>
                </div>
              `:`
                <div style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="font-weight: 700; color: #4ade80; font-size: 0.88rem;">✓ Situação Financeira Regularizada</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      Não constam mensalidades em atraso para este aluno.
                    </div>
                  </div>
                  <span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.75rem;">Em Dia</span>
                </div>
              `}

          <!-- Resumo Financeiro do Aluno -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade Padrão</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: #fbbf24; margin-top: 2px;">
                R$ ${(a.valorMensalidade??280).toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">Vence todo dia ${a.diaVencimento??10}</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Total Já Pago</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: #4ade80; margin-top: 2px;">
                R$ ${$.toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${d.filter(u=>u.status==="pago").length} mensalidade(s)</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Total em Aberto</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: ${p>0?"#f87171":"var(--text-white)"}; margin-top: 2px;">
                R$ ${p.toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${d.filter(u=>u.status!=="pago").length} pendente(s)</div>
            </div>
          </div>

          <!-- Tabela de Lançamentos Financeiros do Aluno -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-white); margin: 0;">
                Histórico de Mensalidades &amp; Pagamentos (${d.length})
              </h4>
            </div>

            <div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${d.length===0?'<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">Nenhum lançamento financeiro registrado para este aluno ainda.</div>':`
                    <table class="data-table" style="margin: 0; font-size: 0.8rem;">
                      <thead>
                        <tr>
                          <th>Descrição</th>
                          <th>Vencimento</th>
                          <th>Valor</th>
                          <th>Status</th>
                          <th>Data Pagto</th>
                          <th style="text-align: right;">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${d.map(u=>{const m=u.status==="pago",h=u.status==="atrasado";let C="";return m?C='<span class="badge badge-success" style="font-size: 0.65rem;">✓ Pago</span>':h?C='<span class="badge badge-coral" style="font-size: 0.65rem; font-weight: 700;">⚠️ Atrasado</span>':C='<span class="badge badge-warning" style="font-size: 0.65rem;">⏳ Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${u.descricao}</strong>
                                ${u.formaPagamento?`<span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 6px;">(${u.formaPagamento.toUpperCase()})</span>`:""}
                              </td>
                              <td>${u.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${u.valor.toFixed(2)}</td>
                              <td>${C}</td>
                              <td>${u.dataPagamento?u.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${m?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${u.id}" style="font-size: 0.72rem; padding: 2px 8px;" title="Ver e imprimir recibo">
                                        🖨️ Recibo
                                      </button>
                                    `:f?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${u.id}" style="font-size: 0.72rem; padding: 2px 8px; background: #059669; border-color: #059669;" title="Dar baixa no pagamento">
                                          ✓ Dar Baixa
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
    `;H({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:E,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var z;const u=document.getElementById("btn-tab-pedagogico"),m=document.getElementById("btn-tab-financeiro"),h=document.getElementById("panel-tab-pedagogico"),C=document.getElementById("panel-tab-financeiro");u==null||u.addEventListener("click",()=>{u.className="btn btn-sm btn-profile-tab active",m==null||m.classList.add("btn-secondary"),m==null||m.classList.remove("active"),h&&(h.style.display="flex"),C&&(C.style.display="none")}),m==null||m.addEventListener("click",()=>{m.className="btn btn-sm btn-profile-tab active",u==null||u.classList.add("btn-secondary"),u==null||u.classList.remove("active"),C&&(C.style.display="flex"),h&&(h.style.display="none")}),(z=document.getElementById("btn-quick-schedule-reposicao"))==null||z.addEventListener("click",()=>{Q(),y("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(D=>{D.addEventListener("click",T=>{const O=T.currentTarget.dataset.id,R=d.find(N=>N.id===O);R&&Ae(R,a)})}),document.querySelectorAll(".btn-pay-now").forEach(D=>{D.addEventListener("click",T=>{const O=T.currentTarget.dataset.id,R=d.find(P=>P.id===O);if(!R)return;const N=A.getTodayDateString(),I=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${R.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${R.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${R.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${a.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${N}" required />
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
          `;H({title:`Dar Baixa: ${R.descricao}`,bodyHtml:I,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const P=document.getElementById("baixa-data").value,j=document.getElementById("baixa-forma").value,B=document.getElementById("baixa-obs").value;if(!P)return M("Informe a data de recebimento.","error"),!1;const F=(e==null?void 0:e.nome)||"Administrador";A.darBaixaPayment(R.id,P,j,F,B),M(`Baixa de R$ ${R.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const J=A.getStudents().find(W=>W.id===a.id)||a;return l(J),setTimeout(()=>{var W;(W=document.getElementById("btn-tab-financeiro"))==null||W.click()},50),!0}})})})},50)}function w(a){const S=A.getPlans(),v=!!a,d=a?A.getStudentPayments(a.id):[],x=S.map(c=>`<option value="${c.id}" ${(a==null?void 0:a.planoId)===c.id?"selected":""}>${c.nome}</option>`).join(""),k=De.map(c=>`<option value="${c}" ${(a==null?void 0:a.instrumentoPrincipal)===c?"selected":""}>${c}</option>`).join(""),n=`
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Seletor de Abas do Formulário (Evita rolagem longa) -->
        <div style="display: flex; gap: 6px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px; overflow-x: auto;">
          <button type="button" class="btn btn-sm btn-form-tab active" data-tab="tab-pessoal" style="font-size: 0.78rem;">
            👤 1. Dados Pessoais
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-resp" style="font-size: 0.78rem;">
            🛡️ 2. Responsável
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-musica" style="font-size: 0.78rem;">
            🎵 3. Música &amp; Plano
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-financeiro" style="font-size: 0.78rem;">
            💰 4. Mensalidade
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-obs" style="font-size: 0.78rem;">
            📝 5. Observações
          </button>
        </div>

        <!-- PAINEL 1: DADOS PESSOAIS -->
        <div id="form-panel-tab-pessoal" class="form-tab-panel" style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nome">Nome Completo do Aluno</label>
              <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${(a==null?void 0:a.nome)||""}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nascimento">Data de Nascimento</label>
              <input type="date" id="student-nascimento" class="form-input" value="${(a==null?void 0:a.dataNascimento)||""}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-telefone">Telefone / WhatsApp</label>
              <input type="text" id="student-telefone" class="form-input" placeholder="(11) 99999-9999" value="${(a==null?void 0:a.telefone)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-email">E-mail</label>
              <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${(a==null?void 0:a.email)||""}" />
            </div>
          </div>
        </div>

        <!-- PAINEL 2: DADOS DO RESPONSÁVEL -->
        <div id="form-panel-tab-resp" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 2fr 1fr 1.2fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-nome">Nome do Responsável</label>
              <input type="text" id="student-resp-nome" class="form-input" placeholder="Ex: Patrícia Mendes" value="${(a==null?void 0:a.responsavelNome)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
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

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-tel">Telefone / WhatsApp</label>
              <input type="text" id="student-resp-tel" class="form-input" placeholder="(11) 98888-8888" value="${(a==null?void 0:a.responsavelTelefone)||""}" />
            </div>
          </div>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">
            * Obrigatório para alunos menores de 18 anos ou para contato de emergência.
          </p>
        </div>

        <!-- PAINEL 3: DADOS MUSICAIS E PEDAGÓGICOS -->
        <div id="form-panel-tab-musica" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento Principal</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione...</option>
                ${k}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nivel">Nível Musical</label>
              <select id="student-nivel" class="form-select">
                <option value="iniciante" ${(a==null?void 0:a.nivelMusical)==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${(a==null?void 0:a.nivelMusical)==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${(a==null?void 0:a.nivelMusical)==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${(a==null?void 0:a.nivelMusical)==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-status">Status da Matrícula</label>
              <select id="student-status" class="form-select">
                <option value="ativo" ${(a==null?void 0:a.status)==="ativo"?"selected":""}>Ativo</option>
                <option value="inativo" ${(a==null?void 0:a.status)==="inativo"?"selected":""}>Inativo</option>
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.5fr 1.5fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-plano">Plano de Ensino</label>
              <select id="student-plano" class="form-select">
                <option value="">Selecione um plano...</option>
                ${x}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo Atual</label>
              <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${(a==null?void 0:a.moduloAtual)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-saldo-reposicoes" title="Aulas que o aluno tem direito a repor">
                Créditos Reposição
              </label>
              <input type="number" id="student-saldo-reposicoes" class="form-input" min="0" max="20" value="${(a==null?void 0:a.saldoReposicoes)??0}" />
            </div>
          </div>
        </div>

        <!-- PAINEL 4: MENSALIDADE E FINANCEIRO -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #fbbf24; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Parâmetros da Mensalidade
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Valor da Mensalidade (R$)</label>
                <input type="number" id="student-valor-mensalidade" class="form-input" min="0" step="10" placeholder="280.00" value="${(a==null?void 0:a.valorMensalidade)??280}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia de Vencimento Padrão</label>
                <input type="number" id="student-dia-vencimento" class="form-input" min="1" max="31" placeholder="10" value="${(a==null?void 0:a.diaVencimento)??10}" required />
              </div>
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
              ${d.length>0?`<span style="font-size: 0.72rem; color: var(--text-muted);">${d.length} lançamento(s)</span>`:""}
            </div>

            <div style="max-height: 155px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${a?d.length===0?'<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado para este aluno.</div>':`
                    <table class="data-table" style="margin: 0; font-size: 0.76rem; width: 100%;">
                      <thead>
                        <tr style="background: rgba(0, 0, 0, 0.25); position: sticky; top: 0; z-index: 1;">
                          <th style="padding: 6px 10px;">Valor</th>
                          <th style="padding: 6px 10px;">Data Vencimento</th>
                          <th style="padding: 6px 10px;">Data Pagamento</th>
                          <th style="padding: 6px 10px; text-align: center;">Situação</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${d.map(c=>{const b=c.dataVencimento.split("-").reverse().join("/"),f=c.dataPagamento?c.dataPagamento.split("-").reverse().join("/"):"-";let r="";return c.status==="pago"?r='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':c.status==="atrasado"?r='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':r='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${c.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${b}</td>
                              <td style="padding: 6px 10px; color: ${c.dataPagamento?"var(--text-white)":"var(--text-muted)"};">${f}</td>
                              <td style="padding: 6px 10px; text-align: center;">${r}</td>
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
    `;H({title:v?`Editar Aluno: ${a.nome}`:"Cadastrar Novo Aluno",bodyHtml:n,modalClass:"modal-lg",confirmText:v?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var P,j;const c=document.getElementById("student-nome").value.trim(),b=document.getElementById("student-nascimento").value,f=document.getElementById("student-email").value.trim(),r=document.getElementById("student-telefone").value.trim(),i=document.getElementById("student-resp-nome").value.trim(),g=document.getElementById("student-resp-parentesco").value,$=document.getElementById("student-resp-tel").value.trim(),p=document.getElementById("student-instrumento").value,E=document.getElementById("student-nivel").value,u=document.getElementById("student-plano").value,m=document.getElementById("student-status").value,h=document.getElementById("student-modulo").value.trim(),C=document.getElementById("student-saldo-reposicoes").value,z=Math.max(0,parseInt(C,10)||0),D=(P=document.getElementById("student-valor-mensalidade"))==null?void 0:P.value,T=Math.max(0,parseFloat(D)||280),O=(j=document.getElementById("student-dia-vencimento"))==null?void 0:j.value,R=Math.min(31,Math.max(1,parseInt(O,10)||10)),N=document.getElementById("student-obs").value.trim();if(!c)return M("Informe o nome do aluno.","error"),!1;const I=(e==null?void 0:e.nome)||"Administrador";return v&&a?(A.updateStudent(a.id,{nome:c,dataNascimento:b,email:f,telefone:r,responsavelNome:i,responsavelParentesco:g,responsavelTelefone:$,instrumentoPrincipal:p,nivelMusical:E,planoId:u,status:m,moduloAtual:h,saldoReposicoes:z,valorMensalidade:T,diaVencimento:R,observacoes:N},I),M("Dados do aluno atualizados com sucesso!","success")):(A.addStudent({nome:c,dataNascimento:b,email:f,telefone:r,responsavelNome:i,responsavelParentesco:g,responsavelTelefone:$,instrumentoPrincipal:p,nivelMusical:E,planoId:u,status:m,moduloAtual:h,saldoReposicoes:z,valorMensalidade:T,diaVencimento:R,observacoes:N},I),M("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const c=document.querySelectorAll(".btn-form-tab"),b=document.querySelectorAll(".form-tab-panel");c.forEach(f=>{f.addEventListener("click",r=>{const i=r.currentTarget.dataset.tab;c.forEach(g=>{g.classList.add("btn-secondary"),g.classList.remove("active")}),r.currentTarget.classList.remove("btn-secondary"),r.currentTarget.classList.add("active"),b.forEach(g=>{g.style.display=g.id===`form-panel-${i}`?"flex":"none"})})})},50)}return s(),t}const G=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Ee=G.reduce((y,t)=>y+t.items.length,0);function je(y){let t=0;return G.forEach(e=>{const o=y[e.key];o&&e.items.forEach(s=>{o[s.key]&&t++})}),t}function qe(y){var w;const t=document.createElement("div"),e=_.getCurrentUser();if((e==null?void 0:e.papel)!=="admin")return t.innerHTML=`
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
    `,(w=t.querySelector("#btn-unauth-home"))==null||w.addEventListener("click",()=>y("home")),t;let o="";function s(){var x,k;const a=A.getUsers(),S=o.toLowerCase(),v=a.filter(n=>n.nome.toLowerCase().includes(S)||n.login.toLowerCase().includes(S)||n.papel.toLowerCase().includes(S));t.innerHTML=`
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
          ${L.plus} Cadastrar Novo Usuário
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
            ${L.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${v.length})</h3>
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
              ${v.map(n=>{const c=n.papel==="admin"?"Administrador":n.papel==="professor"?"Professor":"Atendente",b=te(n),f=je(b);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${n.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${n.nome[0]||"U"}
                          </div>
                          <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem;">
                            ${n.nome}
                          </span>
                        </div>
                      </td>
                      <td>
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${n.login}
                        </code>
                      </td>
                      <td>
                        <span class="badge ${n.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${c}
                        </span>
                      </td>
                      <td>
                        <span class="badge ${n.papel==="admin"?"badge-coral":f>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${n.papel==="admin"?`Acesso Total (${Ee})`:`${f} de ${Ee} ações`}
                        </span>
                      </td>
                      <td>
                        ${n.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${n.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${L.edit}
                          </button>
                          ${n.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${L.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${n.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
                                   ${L.trash}
                                 </button>`}
                        </div>
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(x=t.querySelector("#btn-new-user"))==null||x.addEventListener("click",()=>{l()});const d=t.querySelector("#user-search-input");d&&d.addEventListener("input",n=>{o=n.target.value,s();const c=t.querySelector("#user-search-input");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),(k=t.querySelector("#btn-clear-search"))==null||k.addEventListener("click",()=>{o="",s()}),t.querySelectorAll(".btn-edit-user").forEach(n=>{n.addEventListener("click",c=>{const b=c.currentTarget.dataset.id,f=A.getUsers().find(r=>r.id===b);f&&l(f)})}),t.querySelectorAll(".btn-delete-user").forEach(n=>{n.addEventListener("click",c=>{const b=c.currentTarget.dataset.id,f=A.getUsers().find(r=>r.id===b);f&&Z({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${f.nome}</strong>" (login: <code>${f.login}</code>)?`,onConfirm:()=>{try{A.deleteUser(f.id,(e==null?void 0:e.nome)||"Administrador"),M(`Usuário "${f.nome}" excluído.`,"info"),s()}catch(r){M(r.message||"Erro ao excluir usuário.","error")}}})})})}function l(a){var r,i,g,$;const S=!!a,v=a?a.papel:"professor",d=v==="admin",x=te(a),k=`
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
            <input type="password" id="user-senha" class="form-input" placeholder="${S?"Nova senha":"Ex: 123456"}" value="${(a==null?void 0:a.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${a!=null&&a.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${v==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${v==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${v==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${a!=null&&a.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${d?"none":"block"};">
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
            ${G.map(p=>{const E=x[p.key]||{},u=p.items.filter(m=>E[m.key]).length;return`
                <div class="perm-group-card" id="card-group-${p.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${p.key}" 
                    data-group="${p.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${p.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${p.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${p.title}
                        </strong>
                        <span id="group-counter-${p.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${u}/${p.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${p.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${p.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${p.items.map(m=>{const h=!!E[m.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${p.key}-${m.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${h?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${h?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${p.key}-${m.key}" 
                                data-group="${p.key}" 
                                data-action="${m.key}" 
                                ${h?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${m.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${p.key}-${m.key}" 
                              class="badge ${h?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${h?"Liberado":"Bloqueado"}
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
    `;H({title:S?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:k,modalClass:"modal-lg",confirmText:S?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var T,O,R,N,I,P,j,B,F,J,W,X,se,ne,re,ie,le,de,ce,ue;const p=document.getElementById("user-nome").value.trim(),E=document.getElementById("user-login").value.trim(),u=document.getElementById("user-senha").value.trim(),m=document.getElementById("user-papel"),h=m?m.value:"professor";if(!p||!E||!u)return M("Preencha Nome, Login e Senha.","error"),!1;if(A.getUsers().find(pe=>pe.login===E&&pe.id!==(a==null?void 0:a.id)))return M(`O login "${E}" já está em uso por outro usuário.`,"error"),!1;let z;h==="admin"?z=JSON.parse(JSON.stringify(K.admin)):z={alunos:{acesso:((T=document.getElementById("perm-alunos-acesso"))==null?void 0:T.checked)??!1,cadastrar:((O=document.getElementById("perm-alunos-cadastrar"))==null?void 0:O.checked)??!1,alterar:((R=document.getElementById("perm-alunos-alterar"))==null?void 0:R.checked)??!1,excluir:((N=document.getElementById("perm-alunos-excluir"))==null?void 0:N.checked)??!1},agenda:{acesso:((I=document.getElementById("perm-agenda-acesso"))==null?void 0:I.checked)??!1,cadastrar:((P=document.getElementById("perm-agenda-cadastrar"))==null?void 0:P.checked)??!1,alterar:((j=document.getElementById("perm-agenda-alterar"))==null?void 0:j.checked)??!1,excluir:((B=document.getElementById("perm-agenda-excluir"))==null?void 0:B.checked)??!1},planos:{acesso:((F=document.getElementById("perm-planos-acesso"))==null?void 0:F.checked)??!1,cadastrar:((J=document.getElementById("perm-planos-cadastrar"))==null?void 0:J.checked)??!1,alterar:((W=document.getElementById("perm-planos-alterar"))==null?void 0:W.checked)??!1,excluir:((X=document.getElementById("perm-planos-excluir"))==null?void 0:X.checked)??!1},financeiro:{acesso:((se=document.getElementById("perm-financeiro-acesso"))==null?void 0:se.checked)??!1,cadastrar:((ne=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:ne.checked)??!1,alterar:((re=document.getElementById("perm-financeiro-alterar"))==null?void 0:re.checked)??!1,excluir:((ie=document.getElementById("perm-financeiro-excluir"))==null?void 0:ie.checked)??!1},home:{acesso:((le=document.getElementById("perm-home-acesso"))==null?void 0:le.checked)??!1},auditoria:{acesso:((de=document.getElementById("perm-auditoria-acesso"))==null?void 0:de.checked)??!1},configuracoes:{acesso:((ce=document.getElementById("perm-configuracoes-acesso"))==null?void 0:ce.checked)??!1,alterar:((ue=document.getElementById("perm-configuracoes-alterar"))==null?void 0:ue.checked)??!1}};const D=(e==null?void 0:e.nome)||"Administrador";return S&&a?(A.updateUser(a.id,{nome:p,login:E,senha:u,papel:a.isSistema?"admin":h,permissoes:a.isSistema?K.admin:z},D),M("Usuário e permissões atualizados com sucesso!","success")):(A.addUser({nome:p,login:E,senha:u,papel:h,permissoes:z},D),M("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const n=document.getElementById("user-papel"),c=document.getElementById("user-permissions-section"),b=(p,E,u)=>{const m=document.getElementById(`row-perm-${p}-${E}`),h=document.getElementById(`badge-perm-${p}-${E}`);m&&h&&(u?(m.style.background="rgba(34, 197, 94, 0.06)",m.style.borderColor="rgba(34, 197, 94, 0.25)",h.className="badge badge-success",h.textContent="Liberado"):(m.style.background="rgba(234, 67, 53, 0.04)",m.style.borderColor="rgba(234, 67, 53, 0.15)",h.className="badge badge-coral",h.textContent="Bloqueado")),f(p)},f=p=>{const E=document.getElementById(`group-counter-${p}`),u=G.find(m=>m.key===p);if(E&&u){let m=0;u.items.forEach(h=>{const C=document.getElementById(`perm-${p}-${h.key}`);C&&C.checked&&m++}),E.textContent=`${m}/${u.items.length} liberadas`}};n==null||n.addEventListener("change",()=>{const p=n.value;if(p==="admin")c.style.display="none";else if(c.style.display="block",!S){const E=K[p]||K.professor;G.forEach(u=>{u.items.forEach(m=>{var C;const h=document.getElementById(`perm-${u.key}-${m.key}`);if(h){const z=((C=E[u.key])==null?void 0:C[m.key])??!1;h.checked=z,b(u.key,m.key,z)}})})}}),G.forEach(p=>{const E=document.getElementById(`header-group-${p.key}`),u=document.getElementById(`group-body-${p.key}`),m=document.getElementById(`arrow-perm-${p.key}`);E==null||E.addEventListener("click",h=>{if(!h.target.closest(".btn-group-toggle")&&u&&m){const C=u.style.display==="flex";u.style.display=C?"none":"flex",m.style.transform=C?"rotate(0deg)":"rotate(180deg)"}}),p.items.forEach(h=>{const C=document.getElementById(`perm-${p.key}-${h.key}`);C==null||C.addEventListener("change",()=>{if(b(p.key,h.key,C.checked),C.checked&&h.key!=="acesso"){const z=document.getElementById(`perm-${p.key}-acesso`);z&&!z.checked&&(z.checked=!0,b(p.key,"acesso",!0))}!C.checked&&h.key==="acesso"&&p.items.forEach(z=>{if(z.key!=="acesso"){const D=document.getElementById(`perm-${p.key}-${z.key}`);D&&D.checked&&(D.checked=!1,b(p.key,z.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${p.key}"]`).forEach(h=>{h.addEventListener("click",C=>{C.stopPropagation();const z=p.items.map(T=>document.getElementById(`perm-${p.key}-${T.key}`)).filter(Boolean),D=z.every(T=>T.checked);z.forEach(T=>{T.checked=!D,b(p.key,T.dataset.action,!D)})})})}),(r=document.getElementById("btn-perm-expand"))==null||r.addEventListener("click",()=>{G.forEach(p=>{const E=document.getElementById(`group-body-${p.key}`),u=document.getElementById(`arrow-perm-${p.key}`);E&&u&&(E.style.display="flex",u.style.transform="rotate(180deg)")})}),(i=document.getElementById("btn-perm-collapse"))==null||i.addEventListener("click",()=>{G.forEach(p=>{const E=document.getElementById(`group-body-${p.key}`),u=document.getElementById(`arrow-perm-${p.key}`);E&&u&&(E.style.display="none",u.style.transform="rotate(0deg)")})}),(g=document.getElementById("btn-perm-all"))==null||g.addEventListener("click",()=>{G.forEach(p=>{p.items.forEach(E=>{const u=document.getElementById(`perm-${p.key}-${E.key}`);u&&(u.checked=!0,b(p.key,E.key,!0))})})}),($=document.getElementById("btn-perm-none"))==null||$.addEventListener("click",()=>{G.forEach(p=>{p.items.forEach(E=>{const u=document.getElementById(`perm-${p.key}-${E.key}`);u&&(u.checked=!1,b(p.key,E.key,!1))})})})}return s(),t}function Fe(y){const t=document.createElement("div"),e=_.getCurrentUser();let o="";const s=V(e,"planos","cadastrar"),l=V(e,"planos","alterar"),w=V(e,"planos","excluir");function a(){var k,n;const d=A.getPlans().filter(c=>{const b=o.toLowerCase();return c.nome.toLowerCase().includes(b)||c.descricao&&c.descricao.toLowerCase().includes(b)});t.innerHTML=`
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
                ${L.plus} Cadastrar Novo Plano
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
            ${L.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Grid Padronizada em Tabela (1 linha por registro) -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Cadastrados (${d.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 260px;">Plano de Ensino</th>
                <th>Descrição / Objetivo Curricular</th>
                <th style="width: 140px; text-align: center;">Módulos</th>
                <th style="width: 130px;">Cadastro</th>
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${d.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${o?"Nenhum plano encontrado para o termo pesquisado.":"Nenhum plano de ensino cadastrado."}
                      </td>
                    </tr>
                  `:d.map(c=>{const b=c.criadoEm?new Date(c.criadoEm).toLocaleDateString("pt-BR"):"-";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${L.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${c.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${c.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição cadastrada</span>'}
                            </td>
                            <td style="text-align: center;">
                              <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                ${c.modulos.length} ${c.modulos.length===1?"módulo":"módulos"}
                              </span>
                            </td>
                            <td style="font-size: 0.8rem; color: var(--text-muted);">
                              ${b}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${l?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${c.id}" title="Editar Plano e Módulos">
                                        ${L.edit}
                                      </button>
                                    `:""}
                                ${w?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${c.id}" title="Excluir Plano">
                                        ${L.trash}
                                      </button>
                                    `:""}
                                ${!l&&!w?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(k=t.querySelector("#btn-new-plan"))==null||k.addEventListener("click",()=>{S()});const x=t.querySelector("#plan-search-input");x&&x.addEventListener("input",c=>{o=c.target.value,a();const b=t.querySelector("#plan-search-input");b&&(b.focus(),b.setSelectionRange(b.value.length,b.value.length))}),(n=t.querySelector("#btn-clear-search"))==null||n.addEventListener("click",()=>{o="",a()}),t.querySelectorAll(".btn-edit-plan").forEach(c=>{c.addEventListener("click",b=>{const f=b.currentTarget.dataset.id,r=A.getPlans().find(i=>i.id===f);r&&S(r)})}),t.querySelectorAll(".btn-delete-plan").forEach(c=>{c.addEventListener("click",b=>{const f=b.currentTarget.dataset.id,r=A.getPlans().find(i=>i.id===f);r&&Z({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${r.nome}</strong>" e todos os seus <strong>${r.modulos.length} módulos</strong> vinculados?`,onConfirm:()=>{A.deletePlan(r.id,(e==null?void 0:e.nome)||"Administrador"),M(`Plano "${r.nome}" excluído.`,"info"),a()}})})})}function S(v){const d=!!v;let x=v?JSON.parse(JSON.stringify(v.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function k(){return x.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `:x.map((f,r)=>`
            <div class="module-card-item" data-idx="${r}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 10px; display: flex; align-items: center; gap: 10px; transition: border-color 0.15s ease;">
              <!-- Badge de Ordem Numérica -->
              <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                ${String(r+1).padStart(2,"0")}
              </div>

              <!-- Input Editável In-Place -->
              <input 
                type="text" 
                class="module-title-input" 
                data-idx="${r}" 
                value="${f.titulo}" 
                placeholder="Título do módulo..." 
                style="flex: 1; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
              />

              <!-- Ações: Subir, Descer, Excluir -->
              <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-up" 
                  data-idx="${r}" 
                  title="Mover para Cima" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${r===0?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                >
                  ▲
                </button>
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-down" 
                  data-idx="${r}" 
                  title="Mover para Baixo" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${r===x.length-1?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                >
                  ▼
                </button>
                <button 
                  type="button" 
                  class="btn btn-danger btn-icon-only btn-remove-module" 
                  data-idx="${r}" 
                  title="Excluir Módulo" 
                  style="width: 26px; height: 26px; padding: 0; display: flex; align-items: center; justify-content: center; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                >
                  ${L.trash}
                </button>
              </div>
            </div>
          `).join("")}const n=`
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
                value="${(v==null?void 0:v.nome)||""}" 
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
                value="${(v==null?void 0:v.descricao)||""}" 
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
                ${x.length} ${x.length===1?"módulo":"módulos"}
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
              ${L.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Container de Lista de Módulos (Scroll Suave e Altura Controlada) -->
          <div 
            id="modules-list-container" 
            style="max-height: 210px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${k()}
          </div>
        </div>

      </form>
    `;H({title:d?`Editar Plano: ${v.nome}`:"Cadastrar Plano & Trilha de Ensino",bodyHtml:n,modalClass:"modal-lg",confirmText:d?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const f=document.getElementById("plan-nome").value.trim(),r=document.getElementById("plan-desc").value.trim(),i=x.map(($,p)=>({id:$.id||"mod_"+(p+1)+"_"+Date.now(),ordem:p+1,titulo:$.titulo.trim()})).filter($=>$.titulo.length>0);if(!f)return M("Informe o nome do plano de ensino.","error"),!1;if(i.length===0)return M("Adicione pelo menos um módulo à trilha pedagógica.","error"),!1;const g=(e==null?void 0:e.nome)||"Administrador";return d&&v?(A.updatePlan(v.id,{nome:f,descricao:r,modulos:i},g),M("Plano e módulos atualizados com sucesso!","success")):(A.addPlan({nome:f,descricao:r,modulos:i},g),M("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function c(){const f=document.getElementById("modules-list-container"),r=document.getElementById("modules-counter-badge");f&&(r&&(r.textContent=`${x.length} ${x.length===1?"módulo":"módulos"}`),f.innerHTML=k(),f.querySelectorAll(".module-title-input").forEach(i=>{i.addEventListener("input",g=>{const $=parseInt(g.target.getAttribute("data-idx")||"0",10);x[$]&&(x[$].titulo=g.target.value)})}),f.querySelectorAll(".btn-move-up:not([disabled])").forEach(i=>{i.addEventListener("click",g=>{const $=parseInt(g.currentTarget.getAttribute("data-idx")||"0",10);if($>0){const p=x[$];x[$]=x[$-1],x[$-1]=p,x.forEach((E,u)=>E.ordem=u+1),c()}})}),f.querySelectorAll(".btn-move-down:not([disabled])").forEach(i=>{i.addEventListener("click",g=>{const $=parseInt(g.currentTarget.getAttribute("data-idx")||"0",10);if($<x.length-1){const p=x[$];x[$]=x[$+1],x[$+1]=p,x.forEach((E,u)=>E.ordem=u+1),c()}})}),f.querySelectorAll(".btn-remove-module").forEach(i=>{i.addEventListener("click",g=>{const $=parseInt(g.currentTarget.getAttribute("data-idx")||"0",10);x.splice($,1),x.forEach((p,E)=>p.ordem=E+1),c()})}))}function b(){const f=document.getElementById("quick-add-module-input");if(!f)return;const r=f.value.trim();if(!r){M("Digite o nome do módulo para adicionar.","info"),f.focus();return}const i=x.length+1;x.push({id:"mod_"+i+"_"+Date.now(),ordem:i,titulo:r}),f.value="",c(),f.focus();const g=document.getElementById("modules-list-container");g&&(g.scrollTop=g.scrollHeight)}setTimeout(()=>{const f=document.getElementById("btn-quick-add-module"),r=document.getElementById("quick-add-module-input");f==null||f.addEventListener("click",()=>{b()}),r==null||r.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),b())}),c()},50)}return a(),t}function Re(y){const t=document.createElement("div"),e=_.getCurrentUser();let o="",s="todos",l=new Date;const w=V(e,"financeiro","cadastrar"),a=V(e,"financeiro","alterar"),S=V(e,"financeiro","excluir");function v(){var h,C,z,D,T,O,R,N;const n=A.getPayments(),c=A.getStudents(),b=new Date,f=l!==null&&b.getMonth()===l.getMonth()&&b.getFullYear()===l.getFullYear(),r=l?`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`:"",i=n.filter(I=>I.status==="pago").reduce((I,P)=>I+P.valor,0),g=n.filter(I=>I.status==="pendente").reduce((I,P)=>I+P.valor,0),$=n.filter(I=>I.status==="atrasado").reduce((I,P)=>I+P.valor,0),p=c.filter(I=>I.status==="ativo"&&A.isStudentOverdue(I.id)),E=n.filter(I=>{const P=c.find(X=>X.id===I.alunoId),j=P?P.nome.toLowerCase():"",B=I.descricao.toLowerCase(),F=j.includes(o.toLowerCase())||B.includes(o.toLowerCase())||I.mesReferencia&&I.mesReferencia.includes(o),J=s==="todos"||I.status===s,W=!r||I.mesReferencia===r||I.dataVencimento.startsWith(r);return F&&J&&W});t.innerHTML=`
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
          ${w?`
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${L.plus} Novo Lançamento
                </button>
              `:""}
        </div>
      </div>

      <!-- Cards de Métricas e KPIs -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="panel-card" style="padding: 16px; border-left: 4px solid #22c55e;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Total Recebido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #4ade80; margin-top: 4px;">
            R$ ${i.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(I=>I.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${g.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(I=>I.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${$.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(I=>I.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${p.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${c.filter(I=>I.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${p.length===0?"✓ 100% em dia":"Requer acompanhamento"}
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
            <button type="button" class="btn ${f?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
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
            ${L.search}
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${E.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 260px;">Aluno</th>
                <th>Descrição / Referência</th>
                <th style="width: 150px;">Vencimento</th>
                <th style="width: 140px;">Valor</th>
                <th style="width: 140px;">Status</th>
                <th style="width: 150px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${E.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':E.map(I=>{const P=c.find(J=>J.id===I.alunoId),j=I.status==="pago",B=I.status==="atrasado";let F="";return j?F='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':B?F='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':F='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${P!=null&&P.nome?P.nome[0]:"?"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem;">
                                  ${(P==null?void 0:P.nome)||"Aluno não identificado"}
                                </span>
                              </div>
                            </td>

                            <td>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${I.descricao}${I.mesReferencia?` / ${I.mesReferencia}`:""}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${B?"#f87171":"var(--text-white)"}; font-weight: ${B?"700":"normal"};">
                                ${I.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${I.valor.toFixed(2)}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">${F}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!j&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${I.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${L.check}
                                      </button>
                                    `:""}

                                ${j?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${I.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${I.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${L.edit}
                                      </button>
                                    `:""}

                                ${S?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${I.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${L.trash}
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
    `,(h=t.querySelector("#fin-btn-prev-month"))==null||h.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()-1,1),v()}),(C=t.querySelector("#fin-btn-next-month"))==null||C.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()+1,1),v()}),(z=t.querySelector("#fin-btn-current-month"))==null||z.addEventListener("click",()=>{l=new Date,v()}),(D=t.querySelector("#fin-btn-all-months"))==null||D.addEventListener("click",()=>{l=null,v()});const u=t.querySelector("#fin-search-input");u==null||u.addEventListener("input",I=>{o=I.target.value,v();const P=t.querySelector("#fin-search-input");P&&(P.focus(),P.selectionStart=P.selectionEnd=P.value.length)}),(T=t.querySelector("#btn-clear-fin-search"))==null||T.addEventListener("click",()=>{o="",v()});const m=t.querySelector("#fin-status-filter");m==null||m.addEventListener("change",()=>{s=m.value,v()}),(O=t.querySelector("#btn-limpar-status"))==null||O.addEventListener("click",()=>{s="todos",v()}),(R=t.querySelector("#btn-gerar-lote"))==null||R.addEventListener("click",()=>{x()}),(N=t.querySelector("#btn-novo-lancamento"))==null||N.addEventListener("click",()=>{k()}),t.querySelectorAll(".btn-action-baixa").forEach(I=>{I.addEventListener("click",P=>{const j=P.currentTarget.dataset.id,B=n.find(F=>F.id===j);B&&d(B)})}),t.querySelectorAll(".btn-action-recibo").forEach(I=>{I.addEventListener("click",P=>{const j=P.currentTarget.dataset.id,B=n.find(F=>F.id===j);if(B){const F=c.find(J=>J.id===B.alunoId);F&&Ae(B,F)}})}),t.querySelectorAll(".btn-action-edit").forEach(I=>{I.addEventListener("click",P=>{const j=P.currentTarget.dataset.id,B=n.find(F=>F.id===j);B&&k(B)})}),t.querySelectorAll(".btn-action-delete").forEach(I=>{I.addEventListener("click",P=>{const j=P.currentTarget.dataset.id,B=n.find(F=>F.id===j);B&&Z({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${B.descricao}</strong>" no valor de <strong>R$ ${B.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{A.deletePayment(B.id,(e==null?void 0:e.nome)||"Administrador"),M("Lançamento excluído com sucesso!","info"),v()}})})})}function d(n){const c=A.getStudents().find(r=>r.id===n.alunoId),b=A.getTodayDateString(),f=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${n.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${n.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(c==null?void 0:c.nome)||"N/A"}</strong> &bull; Vencimento: ${n.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${b}" required />
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
    `;H({title:"Confirmar Baixa de Pagamento",bodyHtml:f,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const r=document.getElementById("modal-baixa-data").value,i=document.getElementById("modal-baixa-forma").value,g=document.getElementById("modal-baixa-obs").value;return r?(A.darBaixaPayment(n.id,r,i,(e==null?void 0:e.nome)||"Administrador",g),M(`Baixa efetuada com sucesso! R$ ${n.valor.toFixed(2)} recebido.`,"success"),v(),!0):(M("Informe a data de recebimento.","error"),!1)}})}function x(){const n=new Date,c=n.getFullYear(),b=n.getMonth()+1,f=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${c}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${b===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${b===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${b===3?"selected":""}>03 - Março</option>
              <option value="4" ${b===4?"selected":""}>04 - Abril</option>
              <option value="5" ${b===5?"selected":""}>05 - Maio</option>
              <option value="6" ${b===6?"selected":""}>06 - Junho</option>
              <option value="7" ${b===7?"selected":""}>07 - Julho</option>
              <option value="8" ${b===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${b===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${b===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${b===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${b===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;H({title:"Gerar Mensalidades em Lote",bodyHtml:f,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const r=parseInt(document.getElementById("lote-ano").value,10),i=parseInt(document.getElementById("lote-mes").value,10);if(!r||!i)return M("Selecione ano e mês válidos.","error"),!1;const g=A.gerarMensalidadesMes(r,i,(e==null?void 0:e.nome)||"Administrador");return g.criadas===0&&g.puladas>0?M(`Todas as ${g.puladas} mensalidades deste mês já estavam criadas!`,"info"):M(`Sucesso: ${g.criadas} mensalidade(s) gerada(s)! (${g.puladas} já existentes puladas)`,"success"),v(),!0}})}function k(n){const c=!!n,b=A.getStudents(),f=A.getTodayDateString(),r=b.map(g=>`<option value="${g.id}" ${(n==null?void 0:n.alunoId)===g.id?"selected":""}>${g.nome} (${g.instrumentoPrincipal||"Geral"})</option>`).join(""),i=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${c?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${r}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(n==null?void 0:n.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (YYYY-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" value="${(n==null?void 0:n.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="number" id="pay-valor" class="form-input" min="0" step="5" placeholder="280.00" value="${(n==null?void 0:n.valor)??280}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(n==null?void 0:n.dataVencimento)||f}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(n==null?void 0:n.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(n==null?void 0:n.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(n==null?void 0:n.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(n==null?void 0:n.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="dinheiro" ${(n==null?void 0:n.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="cartao_credito" ${(n==null?void 0:n.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(n==null?void 0:n.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="boleto" ${(n==null?void 0:n.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(n==null?void 0:n.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações Adicionais</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(n==null?void 0:n.observacoes)||""}" />
        </div>
      </form>
    `;H({title:c?`Editar Lançamento: ${n.descricao}`:"Novo Lançamento Financeiro",bodyHtml:i,modalClass:"modal-md",confirmText:c?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const g=c&&n?n.alunoId:document.getElementById("pay-aluno").value,$=document.getElementById("pay-desc").value.trim(),p=document.getElementById("pay-mes").value.trim()||void 0,E=document.getElementById("pay-valor").value,u=parseFloat(E)||0,m=document.getElementById("pay-vencimento").value,h=document.getElementById("pay-status").value,C=document.getElementById("pay-forma").value||void 0,z=document.getElementById("pay-obs").value.trim()||void 0;if(!g)return M("Selecione um aluno.","error"),!1;if(!$)return M("Informe a descrição do lançamento.","error"),!1;if(u<=0)return M("Informe um valor válido maior que zero.","error"),!1;if(!m)return M("Informe a data de vencimento.","error"),!1;const D=(e==null?void 0:e.nome)||"Administrador";return c&&n?(A.updatePayment(n.id,{descricao:$,mesReferencia:p,valor:u,dataVencimento:m,status:h,formaPagamento:C,dataPagamento:h==="pago"?n.dataPagamento||f:void 0,observacoes:z},D),M("Lançamento atualizado com sucesso!","success")):(A.addPayment({alunoId:g,descricao:$,mesReferencia:p,valor:u,dataVencimento:m,status:h,formaPagamento:C,dataPagamento:h==="pago"?f:void 0,observacoes:z},D),M("Novo lançamento cadastrado com sucesso!","success")),v(),!0}}),c||setTimeout(()=>{const g=document.getElementById("pay-aluno");g==null||g.addEventListener("change",()=>{const $=b.find(p=>p.id===g.value);if($){const p=document.getElementById("pay-valor");p&&typeof $.valorMensalidade=="number"&&(p.value=$.valorMensalidade.toString())}})},50)}return v(),t}function Oe(y){const t=document.createElement("div");let e=new Date,o="";const s=v=>v.toString().padStart(2,"0");function l(v){const d=v.getDate(),k=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][v.getMonth()],n=v.getFullYear(),c=new Date,b=c.getDate()===d&&c.getMonth()===v.getMonth()&&c.getFullYear()===n;return`${d} de ${k} de ${n}${b?" (Hoje)":""}`}function w(v){return`${v.getFullYear()}-${s(v.getMonth()+1)}-${s(v.getDate())}`}function a(){var r,i,g,$,p,E,u;const v=q.getLogs(),d=new Date,x=`${s(d.getDate())}/${s(d.getMonth()+1)}/${d.getFullYear()}`,k=v.filter(m=>{var h;return(h=m.dataHoraFormatada)==null?void 0:h.startsWith(x)}).length,n=e?`${s(e.getDate())}/${s(e.getMonth()+1)}/${e.getFullYear()}`:"",c=e!==null&&d.getDate()===e.getDate()&&d.getMonth()===e.getMonth()&&d.getFullYear()===e.getFullYear(),b=v.filter(m=>{const h=!e||m.dataHoraFormatada&&m.dataHoraFormatada.startsWith(n)||m.dataHora&&m.dataHora.startsWith(w(e)),C=o===""||m.tela.toLowerCase().includes(o.toLowerCase())||m.usuarioNome.toLowerCase().includes(o.toLowerCase())||m.usuarioLogin.toLowerCase().includes(o.toLowerCase())||m.acao.toLowerCase().includes(o.toLowerCase())||m.detalhes.toLowerCase().includes(o.toLowerCase());return h&&C});t.innerHTML=`
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
          <span>Registros de Hoje: <strong style="color: var(--color-coral);">${k}</strong></span>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${e?l(e):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${c?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${e?w(e):""}" 
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
            ${L.search}
          </div>
        </div>
        ${o?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${b.length})
            ${e?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${n}</span>`:""}
          </h3>
          ${e!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${n}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
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
              ${b.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${e?`o dia <strong>${n}</strong>`:"o filtro selecionado"}.</div>
                        ${e!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:b.map(m=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${m.dataHoraFormatada}
                              </span>
                            </td>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${m.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${m.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${m.usuarioLogin})</span>
                              </div>
                            </td>
                            <td>
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${m.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                                ${m.acao}
                              </strong>
                            </td>
                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${m.detalhes}">
                                ${m.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(r=t.querySelector("#audit-btn-prev"))==null||r.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()-1),a()}),(i=t.querySelector("#audit-btn-next"))==null||i.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()+1),a()}),(g=t.querySelector("#audit-btn-today"))==null||g.addEventListener("click",()=>{e=new Date,a()}),($=t.querySelector("#audit-btn-all"))==null||$.addEventListener("click",()=>{e=null,a()}),(p=t.querySelector("#audit-empty-btn-all"))==null||p.addEventListener("click",()=>{e=null,a()}),(E=t.querySelector("#audit-date-picker"))==null||E.addEventListener("change",m=>{const h=m.target.value;if(h){const[C,z,D]=h.split("-").map(Number);e=new Date(C,z-1,D)}else e=null;a()});const f=t.querySelector("#audit-search-input");f==null||f.addEventListener("input",m=>{o=m.target.value,a();const h=t.querySelector("#audit-search-input");h&&(h.focus(),h.selectionStart=h.selectionEnd=h.value.length)}),(u=t.querySelector("#btn-clear-audit-search"))==null||u.addEventListener("click",()=>{o="",a()})}const S=()=>{a()};return window.addEventListener("audit_updated",S),a(),t}class _e{static async testConnection(t,e){const o=performance.now();await new Promise(l=>setTimeout(l,200));const s=Math.round(performance.now()-o);return t&&e?{success:!0,latencyMs:s,message:`Conexão bem-sucedida com MongoDB em "${t}/${e}". Esquemas prontos para sincronização.`}:{success:!1,latencyMs:s,message:"URI ou Nome do Banco não informados."}}}function Ve(y){const t=document.createElement("div"),e=_.getCurrentUser(),o=A.getSettings(),s=V(e,"configuracoes","alterar");t.innerHTML=`
    <!-- Cabeçalho da Tela -->
    <div style="margin-bottom: 20px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
        Configurações do Sistema
      </h2>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
        Gerencie os dados cadastrais da instituição e os parâmetros do banco de dados.
      </p>
    </div>

    <!-- Seletor de Abas com Contraste Nítido -->
    <div style="display: flex; gap: 10px; margin-bottom: 16px;">
      <button 
        type="button" 
        class="btn-cfg-tab active" 
        id="btn-tab-instituicao" 
        data-tab="instituicao" 
        style="display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 0.88rem; padding: 10px 20px; border-radius: var(--radius-md); background: var(--color-coral); color: #ffffff; border: 1px solid var(--color-coral); cursor: pointer; transition: all 0.15s ease;"
      >
        <span>🏢</span> Dados da Instituição
      </button>

      <button 
        type="button" 
        class="btn-cfg-tab" 
        id="btn-tab-mongo" 
        data-tab="mongo" 
        style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.88rem; padding: 10px 20px; border-radius: var(--radius-md); background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border-subtle); cursor: pointer; transition: all 0.15s ease;"
      >
        <span>🍃</span> Banco de Dados (MongoDB)
        <span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">● Operacional</span>
      </button>
    </div>

    <!-- Painel de Conteúdo das Abas -->
    <div class="panel-card" style="margin-bottom: 16px;">
      <!-- CONTEÚDO DA ABA 1: DADOS DA INSTITUIÇÃO -->
      <div id="tab-content-instituicao" style="padding: 20px 24px;">
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

      <!-- CONTEÚDO DA ABA 2: BANCO DE DADOS (MONGODB) -->
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
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 0.78rem; color: var(--text-secondary);">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-weight: 700; color: var(--text-white); display: flex; align-items: center; gap: 6px;">
          <span>🎵</span> Acusticamente
        </span>
        <span class="badge badge-primary" style="font-family: monospace; font-size: 0.7rem; padding: 2px 7px;">v1.0.0</span>
        <span style="color: var(--border-subtle);">|</span>
        <span>Gestão Educacional &amp; Escolar</span>
      </div>

      <div style="display: flex; align-items: center; gap: 14px;">
        <span>Engine: <code style="color: #ff9187; background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">MongoDB + TypeScript</code></span>
        <span style="color: var(--border-subtle);">|</span>
        <span>Desenvolvido por <strong style="color: var(--color-coral); font-weight: 600;">DevHub</strong></span>
      </div>
    </div>
  `;const l=t.querySelector("#btn-tab-instituicao"),w=t.querySelector("#btn-tab-mongo"),a=t.querySelector("#tab-content-instituicao"),S=t.querySelector("#tab-content-mongo");function v(r,i){r.style.background="var(--color-coral)",r.style.color="#ffffff",r.style.borderColor="var(--color-coral)",r.style.fontWeight="700",i.style.background="var(--bg-surface)",i.style.color="var(--text-secondary)",i.style.borderColor="var(--border-subtle)",i.style.fontWeight="600"}function d(r){r==="instituicao"?(a.style.display="block",S.style.display="none",v(l,w)):(a.style.display="none",S.style.display="block",v(w,l))}l==null||l.addEventListener("click",()=>d("instituicao")),w==null||w.addEventListener("click",()=>d("mongo"));const x=t.querySelector("#cfg-cnpj");x==null||x.addEventListener("input",r=>{let i=r.target.value.replace(/\D/g,"").slice(0,14);i.length>12?i=i.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):i.length>8?i=i.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):i.length>5?i=i.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):i.length>2&&(i=i.replace(/^(\d{2})(\d{1,3})$/,"$1.$2")),r.target.value=i});const k=t.querySelector("#cfg-cep");k==null||k.addEventListener("input",r=>{let i=r.target.value.replace(/\D/g,"").slice(0,8);i.length>5&&(i=i.replace(/^(\d{5})(\d{1,3})$/,"$1-$2")),r.target.value=i});const n=t.querySelector("#cfg-uf");n==null||n.addEventListener("input",r=>{r.target.value=r.target.value.toUpperCase().slice(0,2)});const c=t.querySelector("#form-settings-institucional");c==null||c.addEventListener("submit",r=>{r.preventDefault();const i=t.querySelector("#cfg-fantasia").value,g=t.querySelector("#cfg-razao").value,$=t.querySelector("#cfg-cnpj").value,p=t.querySelector("#cfg-ie").value,E=t.querySelector("#cfg-tel").value,u=t.querySelector("#cfg-email").value,m=t.querySelector("#cfg-site").value,h=t.querySelector("#cfg-cep").value,C=t.querySelector("#cfg-logradouro").value,z=t.querySelector("#cfg-numero").value,D=t.querySelector("#cfg-complemento").value,T=t.querySelector("#cfg-bairro").value,O=t.querySelector("#cfg-cidade").value,R=t.querySelector("#cfg-uf").value.toUpperCase();A.updateSettings({nomeEscola:i,nomeClinica:i,nomeFantasia:i,razaoSocial:g,cnpj:$,inscricaoEstadual:p,telefoneContato:E,emailContato:u,website:m,cep:h,logradouro:C,numero:z,complemento:D,bairro:T,cidade:O,estado:R},(e==null?void 0:e.nome)||"Administrador"),M("Dados da instituição salvos com sucesso!","success")});const b=t.querySelector("#form-settings-mongo");b==null||b.addEventListener("submit",r=>{r.preventDefault();const i=t.querySelector("#cfg-mongo-uri").value,g=t.querySelector("#cfg-mongo-db").value;A.updateSettings({mongoUri:i,mongoDatabase:g},(e==null?void 0:e.nome)||"Administrador"),M("Configurações do MongoDB salvas com sucesso!","success")});const f=t.querySelector("#btn-test-mongo");return f==null||f.addEventListener("click",async()=>{const r=t.querySelector("#cfg-mongo-uri").value,i=t.querySelector("#cfg-mongo-db").value,g=t.querySelector("#mongo-test-result");g.innerHTML='<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';const $=await _e.testConnection(r,i);$.success?(g.innerHTML=`<span style="color: var(--status-success);">✓ ${$.message} (Latência: ${$.latencyMs}ms)</span>`,M("MongoDB validado com sucesso!","success")):(g.innerHTML=`<span style="color: var(--status-danger);">✕ ${$.message}</span>`,M("Falha na validação do MongoDB.","error"))}),t}class He{constructor(){U(this,"currentScreen","home");U(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!_.isAuthenticated()){this.currentScreen="login",this.render();return}const t=_.getCurrentUser(),e=window.location.hash.replace("#","");e&&["home","agenda","alunos","planos","financeiro","user","auditoria","configuracoes"].includes(e)&&Y(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t),window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","");o&&o!==this.currentScreen&&this.navigateTo(o)}),this.render()}getFirstAllowedScreen(t){if(!t)return"login";const e=["home","agenda","alunos","planos","financeiro","auditoria","configuracoes"];for(const o of e)if(Y(t,o))return o;return"home"}navigateTo(t){const e=_.getCurrentUser();if(!Y(e,t)){M("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(e);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=t,window.location.hash=t,this.render()}render(){var x;if(this.appRoot.innerHTML="",!_.isAuthenticated()||this.currentScreen==="login"){const k=Me(()=>{const n=_.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(n))});this.appRoot.appendChild(k);return}const t=document.createElement("div");t.className="app-container";const e=_.getCurrentUser(),o=(e==null?void 0:e.papel)==="admin";t.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
            <div class="sidebar-logo">
              ${oe(46)}
            </div>
            <span class="sidebar-brand-name">ACUSTICAMENTE</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${L.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${Y(e,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${L.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${Y(e,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${L.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${Y(e,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${L.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${Y(e,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${L.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${Y(e,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${L.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${L.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${Y(e,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${L.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${Y(e,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${L.configuracoes}</span>
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
            ${L.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${L.menu}
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
    `;const s=t.querySelector("#app-sidebar"),l=t.querySelector("#sidebar-backdrop"),w=t.querySelector("#btn-mobile-menu-toggle"),a=t.querySelector("#btn-sidebar-close"),S=k=>{const n=k!==void 0?k:!s.classList.contains("open");s.classList.toggle("open",n),l.classList.toggle("open",n),document.body.style.overflow=n?"hidden":""};w==null||w.addEventListener("click",()=>S(!0)),a==null||a.addEventListener("click",()=>S(!1)),l==null||l.addEventListener("click",()=>S(!1)),t.querySelectorAll(".nav-item").forEach(k=>{k.addEventListener("click",n=>{const c=n.currentTarget.dataset.screen;S(!1),c&&this.navigateTo(c)})}),(x=t.querySelector("#btn-app-logout"))==null||x.addEventListener("click",()=>{Z({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{_.logout()}})});const v=t.querySelector("#screen-viewport"),d=this.createViewElement(this.currentScreen);v.appendChild(d),this.appRoot.appendChild(t)}createViewElement(t){const e=o=>this.navigateTo(o);switch(t){case"home":return $e(e);case"agenda":return Le();case"alunos":return Ne(e);case"user":return qe(e);case"planos":return Fe();case"financeiro":return Re();case"auditoria":return Oe();case"configuracoes":return Ve();default:return $e(e)}}getScreenTitle(t){switch(t){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(t){switch(t){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new He});
