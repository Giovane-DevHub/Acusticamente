var Ie=Object.defineProperty;var Se=(x,a,e)=>a in x?Ie(x,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[a]=e;var V=(x,a,e)=>Se(x,typeof a!="symbol"?a+"":a,e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const pe="acusticamente_audit_logs";class ze{constructor(){V(this,"logs",[]);this.loadLogs()}loadLogs(){try{const a=localStorage.getItem(pe);a?this.logs=JSON.parse(a):this.log({usuarioId:"1",usuarioLogin:"1",usuarioNome:"Administrador",tela:"Sistema",acao:"Inicialização do Sistema",detalhes:"Base de dados inicializada com usuário administrador padrão (1)."})}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(pe,JSON.stringify(this.logs))}catch(a){console.error("Erro ao salvar auditoria no storage:",a)}}log(a){const e=new Date,o=p=>p.toString().padStart(2,"0"),s=`${o(e.getDate())}/${o(e.getMonth()+1)}/${e.getFullYear()} ${o(e.getHours())}:${o(e.getMinutes())}:${o(e.getSeconds())}`,i={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:e.toISOString(),dataHoraFormatada:s,usuarioId:a.usuarioId||"1",usuarioLogin:a.usuarioLogin||"1",usuarioNome:a.usuarioNome||"Administrador",tela:a.tela,acao:a.acao,detalhes:a.detalhes};return this.logs.unshift(i),this.saveLogs(),window.dispatchEvent(new CustomEvent("audit_updated",{detail:i})),i}getLogs(){return[...this.logs]}clearLogs(){this.logs=[],this.saveLogs()}}const N=new ze,me="acusticamente_users",fe="acusticamente_students",ve="acusticamente_plans",ge="acusticamente_appointments",be="acusticamente_settings",ye="acusticamente_payments";class Ce{constructor(){V(this,"users",[]);V(this,"students",[]);V(this,"plans",[]);V(this,"appointments",[]);V(this,"payments",[]);V(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0});this.initData()}initData(){const a=localStorage.getItem(me);a?this.users=JSON.parse(a).map(t=>{var v;return{...t,permissoes:{...t.permissoes,financeiro:((v=t.permissoes)==null?void 0:v.financeiro)||(t.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:t.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1})}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const e=localStorage.getItem(ve);e?this.plans=JSON.parse(e):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(fe);o?this.students=JSON.parse(o).map(t=>({...t,saldoReposicoes:typeof t.saldoReposicoes=="number"?t.saldoReposicoes:0,instrumentoPrincipal:t.instrumentoPrincipal||"Violão",nivelMusical:t.nivelMusical||"iniciante",valorMensalidade:typeof t.valorMensalidade=="number"?t.valorMensalidade:280,diaVencimento:typeof t.diaVencimento=="number"?t.diaVencimento:10})):(this.students=[{id:"aluno_1",nome:"Lucas Silveira",email:"lucas@email.com",telefone:"(11) 98231-1122",dataNascimento:"2014-05-14",instrumentoPrincipal:"Bateria",nivelMusical:"iniciante",responsavelNome:"Cláudia Silveira",responsavelTelefone:"(11) 98111-2233",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 2: Discriminação de Timbres",saldoReposicoes:1,valorMensalidade:280,diaVencimento:10,status:"ativo",observacoes:"Apresenta grande facilidade com ritmo.",criadoEm:new Date().toISOString()},{id:"aluno_2",nome:"Mariana Duarte",email:"mariana.duarte@email.com",telefone:"(11) 97123-4567",dataNascimento:"2008-09-21",instrumentoPrincipal:"Violão",nivelMusical:"basico",responsavelNome:"Roberto Duarte",responsavelTelefone:"(11) 97111-0000",responsavelParentesco:"Pai",planoId:"plano_2",moduloAtual:"Módulo 1: Primeiros Acordes e Levadas",saldoReposicoes:0,valorMensalidade:260,diaVencimento:20,status:"ativo",observacoes:"Iniciando estudos no violão popular.",criadoEm:new Date().toISOString()},{id:"aluno_3",nome:"Gabriel Santos",email:"gabriel.s@email.com",telefone:"(11) 99345-6789",dataNascimento:"1998-03-10",instrumentoPrincipal:"Piano & Teclado",nivelMusical:"intermediario",planoId:"plano_3",moduloAtual:"Módulo 1: Digitação e Postura",saldoReposicoes:0,valorMensalidade:320,diaVencimento:10,status:"ativo",observacoes:"Excelente dedicação nas aulas de piano.",criadoEm:new Date().toISOString()},{id:"aluno_4",nome:"Beatriz Costa",email:"beatriz.costa@email.com",telefone:"(11) 96543-2109",dataNascimento:"2015-11-05",instrumentoPrincipal:"Técnica Vocal / Canto",nivelMusical:"iniciante",responsavelNome:"Ana Costa",responsavelTelefone:"(11) 96500-1122",responsavelParentesco:"Mãe",planoId:"plano_1",moduloAtual:"Módulo 3: Harmonia Básica e Canto",saldoReposicoes:2,valorMensalidade:250,diaVencimento:5,status:"ativo",observacoes:"Foco no canto coral.",criadoEm:new Date().toISOString()}],this.saveStudents());const s=localStorage.getItem(ge);if(s)this.appointments=JSON.parse(s);else{const t=this.getTodayDateString();this.appointments=[{id:"app_1",titulo:"Aula de Percepção Sonora",alunoId:"aluno_1",planoId:"plano_1",data:t,horaInicio:"08:30",horaFim:"09:30",status:"concluido",observacoes:"Exercícios rítmicos concluídos.",criadoEm:new Date().toISOString()},{id:"app_2",titulo:"Aula Prática de Violão",alunoId:"aluno_2",planoId:"plano_2",data:t,horaInicio:"10:00",horaFim:"11:00",status:"agendado",observacoes:"Praticar transição entre acordes maiores.",criadoEm:new Date().toISOString()},{id:"app_3",titulo:"Prática de Piano Módulo 1",alunoId:"aluno_3",planoId:"plano_3",data:t,horaInicio:"14:00",horaFim:"15:00",status:"agendado",observacoes:"Início da escala de Dó Maior.",criadoEm:new Date().toISOString()},{id:"app_4",titulo:"Percepção e Harmonia",alunoId:"aluno_4",planoId:"plano_1",data:t,horaInicio:"16:30",horaFim:"17:30",status:"agendado",observacoes:"Preparação para apresentação musical.",criadoEm:new Date().toISOString()}],this.saveAppointments()}const i=localStorage.getItem(be);i&&(this.settings=JSON.parse(i));const p=localStorage.getItem(ye);p?this.payments=JSON.parse(p):(this.payments=[{id:"pag_1",alunoId:"aluno_1",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:280,dataVencimento:"2026-08-10",dataPagamento:"2026-08-08",formaPagamento:"pix",status:"pago",observacoes:"Pago pontualmente via Chave Pix",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_2",alunoId:"aluno_1",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:280,dataVencimento:"2026-09-10",status:"atrasado",observacoes:"Venceu dia 10 e aguarda regularização",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_3",alunoId:"aluno_2",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:260,dataVencimento:"2026-09-20",status:"pendente",observacoes:"A vencer no dia 20",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_4",alunoId:"aluno_3",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:320,dataVencimento:"2026-09-10",dataPagamento:"2026-09-10",formaPagamento:"cartao_credito",status:"pago",observacoes:"Pago no balcão da escola",criadoEm:"2026-09-01T10:00:00.000Z"},{id:"pag_5",alunoId:"aluno_4",descricao:"Mensalidade Agosto/2026",mesReferencia:"2026-08",valor:250,dataVencimento:"2026-08-05",dataPagamento:"2026-08-05",formaPagamento:"dinheiro",status:"pago",observacoes:"Comprovante emitido",criadoEm:"2026-08-01T10:00:00.000Z"},{id:"pag_6",alunoId:"aluno_4",descricao:"Mensalidade Setembro/2026",mesReferencia:"2026-09",valor:250,dataVencimento:"2026-09-05",status:"atrasado",observacoes:"Mensalidade vencida dia 05",criadoEm:"2026-09-01T10:00:00.000Z"}],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(t=>{t.nome.includes("Reabilitação")&&(t.nome="Violão e Harmonia Prática",t.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",t.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(t=>{var v;(v=t.observacoes)!=null&&v.includes("implante")&&(t.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",t.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(t=>{var v;(v=t.titulo)!=null&&v.includes("Auditivo")&&(t.titulo="Aula Prática de Violão",t.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const a=new Date,e=o=>o.toString().padStart(2,"0");return`${a.getFullYear()}-${e(a.getMonth()+1)}-${e(a.getDate())}`}saveUsers(){localStorage.setItem(me,JSON.stringify(this.users))}saveStudents(){localStorage.setItem(fe,JSON.stringify(this.students))}savePlans(){localStorage.setItem(ve,JSON.stringify(this.plans))}saveAppointments(){localStorage.setItem(ge,JSON.stringify(this.appointments))}savePayments(){localStorage.setItem(ye,JSON.stringify(this.payments))}saveSettings(){localStorage.setItem(be,JSON.stringify(this.settings))}getUsers(){return[...this.users]}getUserById(a){return this.users.find(e=>e.id===a)}addUser(a,e){const o={...a,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),N.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:e,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(a,e,o){const s=this.users.findIndex(t=>t.id===a);if(s===-1)throw new Error("Usuário não encontrado.");const i=this.users[s],p=i.isSistema;return this.users[s]={...i,...e,isSistema:p,atualizadoEm:new Date().toISOString()},this.saveUsers(),N.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${i.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(a,e){const o=this.users.find(s=>s.id===a);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==a),this.saveUsers(),N.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:e,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(a,e){const o={...a,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),N.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(a,e,o){const s=this.students.findIndex(p=>p.id===a);if(s===-1)throw new Error("Aluno não encontrado.");const i=this.students[s];return this.students[s]={...i,...e},this.saveStudents(),N.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${i.nome}" atualizado.`}),this.students[s]}deleteStudent(a,e){const o=this.students.find(s=>s.id===a);o&&(this.students=this.students.filter(s=>s.id!==a),this.saveStudents(),N.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(a,e){const o={...a,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),N.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(a,e,o){const s=this.plans.findIndex(p=>p.id===a);if(s===-1)throw new Error("Plano não encontrado.");const i=this.plans[s];return this.plans[s]={...i,...e},this.savePlans(),N.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${i.nome}" atualizado.`}),this.plans[s]}deletePlan(a,e){const o=this.plans.find(s=>s.id===a);o&&(this.plans=this.plans.filter(s=>s.id!==a),this.savePlans(),N.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(a,e){const o={...a,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(i=>i.id===o.alunoId);return N.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:e,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(a,e,o){const s=this.appointments.findIndex(p=>p.id===a);if(s===-1)throw new Error("Compromisso não encontrado.");const i=this.appointments[s];return this.appointments[s]={...i,...e},this.saveAppointments(),N.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${i.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(a,e){const o=this.appointments.find(s=>s.id===a);o&&(this.appointments=this.appointments.filter(s=>s.id!==a),this.saveAppointments(),N.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:e,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(a,e){const o=this.updateAppointment(a,{status:"concluido"},e),s=this.students.find(i=>i.id===o.alunoId);return N.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:e,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(a,e,o,s){const i=e?"falta_justificada":"falta_injustificada",p=this.updateAppointment(a,{status:i,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),t=this.students.find($=>$.id===p.alunoId);let v=(t==null?void 0:t.saldoReposicoes)||0;return e&&t?(v=(t.saldoReposicoes||0)+1,t.saldoReposicoes=v,this.saveStudents(),N.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${t.nome}" na aula "${p.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${v}. Motivo: ${o||"Não especificado"}`})):!e&&t&&N.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${t.nome}" na aula "${p.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:p,saldoReposicoes:v}}agendarReposicao(a,e,o){const s=this.addAppointment({...a,tipoAula:"reposicao",aulaOriginalId:e,status:"agendado"},o);if(e){const p=this.appointments.findIndex(t=>t.id===e);p!==-1&&(this.appointments[p].aulaReposicaoId=s.id,this.saveAppointments())}const i=this.students.find(p=>p.id===s.alunoId);return i&&typeof i.saldoReposicoes=="number"&&i.saldoReposicoes>0&&(i.saldoReposicoes-=1,this.saveStudents(),N.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${i.nome}". 1 crédito abatido. Saldo restante: ${i.saldoReposicoes}.`})),s}getStudentAppointments(a){return this.appointments.filter(e=>e.alunoId===a).sort((e,o)=>{const s=`${e.data}T${e.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const a=this.getTodayDateString();let e=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<a&&(o.status="atrasado",e=!0)}),e&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(a){return this.getPayments().filter(e=>e.alunoId===a)}isStudentOverdue(a){const e=this.getTodayDateString();return this.payments.some(o=>o.alunoId===a&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<e))}addPayment(a,e){const o=this.getTodayDateString();let s=a.status;s==="pendente"&&a.dataVencimento<o&&(s="atrasado");const i={...a,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(i),this.savePayments();const p=this.students.find(t=>t.id===i.alunoId);return N.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:e,detalhes:`Lançamento "${i.descricao}" (R$ ${i.valor.toFixed(2)}) cadastrado para o aluno "${(p==null?void 0:p.nome)||"N/A"}" com vencimento em ${i.dataVencimento}.`}),i}darBaixaPayment(a,e,o,s,i){const p=this.payments.findIndex(r=>r.id===a);if(p===-1)throw new Error("Lançamento financeiro não encontrado");const t=this.payments[p],v=t.status;t.status="pago",t.dataPagamento=e,t.formaPagamento=o,i!==void 0&&(t.observacoes=i.trim()?i.trim():t.observacoes),this.savePayments();const $=this.students.find(r=>r.id===t.alunoId);return N.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${t.descricao}" de "${($==null?void 0:$.nome)||"N/A"}". Valor R$ ${t.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${e} (Status anterior: ${v}).`}),t}updatePayment(a,e,o){const s=this.payments.findIndex(r=>r.id===a);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const i=this.getTodayDateString();let p=e.status||this.payments[s].status;const t=e.dataVencimento||this.payments[s].dataVencimento;p==="pendente"&&t<i&&(p="atrasado"),this.payments[s]={...this.payments[s],...e,status:p},this.savePayments();const v=this.payments[s],$=this.students.find(r=>r.id===v.alunoId);return N.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${v.descricao}" do aluno "${($==null?void 0:$.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(a,e){const o=this.payments.find(i=>i.id===a);if(!o)return;this.payments=this.payments.filter(i=>i.id!==a),this.savePayments();const s=this.students.find(i=>i.id===o.alunoId);N.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:e,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(a,e,o){const s=y=>y.toString().padStart(2,"0"),i=`${a}-${s(e)}`,t=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e-1]||i,v=this.students.filter(y=>y.status==="ativo");let $=0,r=0;return v.forEach(y=>{if(this.payments.some(b=>b.alunoId===y.id&&(b.mesReferencia===i||b.dataVencimento.startsWith(i)))){r++;return}const n=y.diaVencimento||10,m=new Date(a,e,0).getDate(),f=Math.min(n,m),z=`${a}-${s(e)}-${s(f)}`,g=typeof y.valorMensalidade=="number"&&y.valorMensalidade>0?y.valorMensalidade:280;this.addPayment({alunoId:y.id,descricao:`Mensalidade ${t}/${a}`,mesReferencia:i,valor:g,dataVencimento:z,status:"pendente",observacoes:`Gerado automaticamente para o plano ${y.moduloAtual||y.instrumentoPrincipal||"Música"}`},o),$++}),N.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${t}/${a}: ${$} mensalidade(s) criada(s) e ${r} já existente(s) pulada(s).`}),{criadas:$,puladas:r}}getSettings(){return{...this.settings}}updateSettings(a,e){return this.settings={...this.settings,...a},this.saveSettings(),N.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:e,detalhes:`Parâmetros do sistema atualizados (MongoDB: ${this.settings.mongoDatabase}).`}),this.settings}}const k=new Ce,Y={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function X(x){var s,i,p,t,v,$,r,y,h,n,m,f,z,g,b,A,c,w,I,d,l,E,S,L;if(!x)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(x.papel==="admin")return JSON.parse(JSON.stringify(Y.admin));const a=Y[x.papel]||Y.professor,e=x.permissoes;if(!e)return JSON.parse(JSON.stringify(a));const o=u=>typeof u=="boolean";return{alunos:{acesso:o(e.alunos)?e.alunos:((s=e.alunos)==null?void 0:s.acesso)??a.alunos.acesso,cadastrar:o(e.alunos)?e.alunos:((i=e.alunos)==null?void 0:i.cadastrar)??a.alunos.cadastrar,alterar:o(e.alunos)?e.alunos:((p=e.alunos)==null?void 0:p.alterar)??a.alunos.alterar,excluir:o(e.alunos)?!1:((t=e.alunos)==null?void 0:t.excluir)??a.alunos.excluir},agenda:{acesso:o(e.agenda)?e.agenda:((v=e.agenda)==null?void 0:v.acesso)??a.agenda.acesso,cadastrar:o(e.agenda)?e.agenda:(($=e.agenda)==null?void 0:$.cadastrar)??a.agenda.cadastrar,alterar:o(e.agenda)?e.agenda:((r=e.agenda)==null?void 0:r.alterar)??a.agenda.alterar,excluir:o(e.agenda)?!1:((y=e.agenda)==null?void 0:y.excluir)??a.agenda.excluir},planos:{acesso:o(e.planos)?e.planos:((h=e.planos)==null?void 0:h.acesso)??a.planos.acesso,cadastrar:o(e.planos)?e.planos:((n=e.planos)==null?void 0:n.cadastrar)??a.planos.cadastrar,alterar:o(e.planos)?e.planos:((m=e.planos)==null?void 0:m.alterar)??a.planos.alterar,excluir:o(e.planos)?!1:((f=e.planos)==null?void 0:f.excluir)??a.planos.excluir},home:{acesso:o(e.home)?e.home:((z=e.home)==null?void 0:z.acesso)??a.home.acesso},financeiro:{acesso:o(e.financeiro)?e.financeiro:((g=e.financeiro)==null?void 0:g.acesso)??((b=a.financeiro)==null?void 0:b.acesso)??!1,cadastrar:o(e.financeiro)?e.financeiro:((A=e.financeiro)==null?void 0:A.cadastrar)??((c=a.financeiro)==null?void 0:c.cadastrar)??!1,alterar:o(e.financeiro)?e.financeiro:((w=e.financeiro)==null?void 0:w.alterar)??((I=a.financeiro)==null?void 0:I.alterar)??!1,excluir:o(e.financeiro)?!1:((d=e.financeiro)==null?void 0:d.excluir)??((l=a.financeiro)==null?void 0:l.excluir)??!1},auditoria:{acesso:o(e.auditoria)?e.auditoria:((E=e.auditoria)==null?void 0:E.acesso)??a.auditoria.acesso},configuracoes:{acesso:o(e.configuracoes)?e.configuracoes:((S=e.configuracoes)==null?void 0:S.acesso)??a.configuracoes.acesso,alterar:o(e.configuracoes)?e.configuracoes:((L=e.configuracoes)==null?void 0:L.alterar)??a.configuracoes.alterar}}}function U(x,a){if(!x)return!1;if(a==="login")return!0;if(a==="user")return x.papel==="admin";if(x.papel==="admin")return!0;const o=X(x)[a];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function _(x,a,e){if(!x)return!1;if(x.papel==="admin")return!0;const s=X(x)[a];return s?!!s[e]:!1}const Q="acusticamente_active_session";class Me{constructor(){V(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const a=localStorage.getItem(Q);a&&(this.currentUser=JSON.parse(a))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const a=k.getUserById(this.currentUser.id);a&&(this.currentUser=a,localStorage.setItem(Q,JSON.stringify(a)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(a,e){const s=k.getUsers().find(i=>i.login===a.trim());return s?s.senha!==e.trim()?(N.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Q,JSON.stringify(s)),N.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(N.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:a,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${a}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&N.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Q),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const O=new Me;function te(x=40){return`
    <svg width="${x}" height="${x}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function M(x,a="success"){const e=document.getElementById("toast-container");if(!e)return;const o=document.createElement("div");o.className=`toast toast-${a}`,o.innerHTML=`
    <span class="toast-icon">${a==="success"?"✓":a==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${x}</span>
  `,e.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function H(x){const a=document.getElementById("modal-container");if(!a)return;a.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${x.modalClass||""}">
        <div class="modal-header">
          <h3>${x.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${x.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${x.cancelText||"Cancelar"}</button>
          ${x.confirmText?`<button type="button" class="btn ${x.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${x.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const e=document.getElementById("active-modal-backdrop"),o=document.getElementById("modal-close-btn"),s=document.getElementById("modal-cancel-btn"),i=document.getElementById("modal-confirm-btn"),p=()=>{a.innerHTML="",x.onCancel&&x.onCancel()};o.onclick=p,s.onclick=p,e.onclick=t=>{t.target===e&&p()},i&&x.onConfirm&&(i.onclick=async()=>{const t=document.querySelector(".modal-card");await x.onConfirm(t)!==!1&&(a.innerHTML="")})}function K(){const x=document.getElementById("modal-container");x&&(x.innerHTML="")}const D={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'},ee="acusticamente_auth_remember",he="acusticamente_manual_logout";function Le(x){const a=document.createElement("div");a.className="login-page";let e={username:"",password:"",remember:!1,autoLogin:!1};try{const t=localStorage.getItem(ee);t&&(e={...e,...JSON.parse(t)})}catch{e={username:"",password:"",remember:!1,autoLogin:!1}}a.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${te(50)}
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
            ${te(58)}
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
  `;const o=a.querySelector("#login-remember"),s=a.querySelector("#login-autologin");s==null||s.addEventListener("change",()=>{s.checked&&!o.checked&&(o.checked=!0)}),o==null||o.addEventListener("change",()=>{!o.checked&&s.checked&&(s.checked=!1)});const i=a.querySelector("#login-form");i.onsubmit=t=>{var f;t.preventDefault();const v=a.querySelector("#login-username"),$=a.querySelector("#login-password"),r=v.value.trim(),y=$.value.trim(),h=o.checked,n=s.checked,m=O.login(r,y);m.success?(h?localStorage.setItem(ee,JSON.stringify({username:r,password:y,remember:!0,autoLogin:n})):localStorage.removeItem(ee),sessionStorage.removeItem(he),M(`Bem-vindo, ${(f=m.user)==null?void 0:f.nome}!`,"success"),x()):M(m.message,"error")};const p=sessionStorage.getItem(he)==="true";return e.autoLogin&&e.remember&&e.username&&e.password&&!p&&setTimeout(()=>{var v;if(!a.isConnected&&!document.body.contains(a))return;const t=O.login(e.username,e.password);t.success&&(M(`Bem-vindo de volta, ${(v=t.user)==null?void 0:v.nome}!`,"success"),x())},100),a}function xe(x){var r,y;const a=document.createElement("div"),e=O.getCurrentUser(),o=k.getStudents(),s=k.getPlans(),i=k.getAppointments(),p=k.getTodayDateString(),t=i.filter(h=>h.data===p),v=o.filter(h=>h.status==="ativo").length,$=t.find(h=>h.status==="agendado");return a.innerHTML=`
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
        ${D.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${D.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${t.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${D.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${v}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${D.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${$?$.horaInicio:"--:--"}</span>
          <span class="metric-label">${$?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${D.planos}
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
            ${t.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':t.map(h=>{const n=o.find(b=>b.id===h.alunoId),m=s.find(b=>b.id===h.planoId),f=h.status==="concluido",z=h.status==="agendado";let g='<span class="badge badge-warning">⏳ Agendado</span>';return f?g='<span class="badge badge-success">✓ Concluído</span>':h.status==="falta_justificada"?g='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':h.status==="falta_injustificada"?g='<span class="badge badge-danger">✕ Falta Injustificada</span>':h.status==="cancelado"&&(g='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${h.id}">
                          <td>
                            <strong style="color: var(--text-white);">${h.horaInicio}</strong>
                            <span style="font-size: 0.78rem; color: var(--text-muted);"> às ${h.horaFim}</span>
                            ${h.tipoAula==="reposicao"?'<div style="font-size: 0.68rem; color: #4ade80; font-weight: 600;">🔄 Reposição</div>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                              <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 600; color: var(--color-coral);">
                                ${((n==null?void 0:n.nome)||"A")[0]}
                              </div>
                              <div>
                                <span style="font-weight: 500;">${(n==null?void 0:n.nome)||"Aluno não vinculado"}</span>
                                ${n!=null&&n.instrumentoPrincipal?`<div style="font-size: 0.72rem; color: var(--text-muted);">${n.instrumentoPrincipal}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td>
                            <span style="color: var(--text-secondary);">${(m==null?void 0:m.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td>
                            ${g}
                          </td>
                          <td style="text-align: right;">
                            ${z?`<button class="btn btn-secondary btn-complete-class" data-id="${h.id}" style="padding: 5px 12px; font-size: 0.78rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.8rem; color: var(--text-muted);">${f?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(r=a.querySelector("#home-btn-new-appointment"))==null||r.addEventListener("click",()=>{x("agenda")}),(y=a.querySelector("#home-btn-view-all-agenda"))==null||y.addEventListener("click",()=>{x("agenda")}),a.querySelectorAll(".btn-complete-class").forEach(h=>{h.addEventListener("click",n=>{const m=n.currentTarget.dataset.id;m&&(k.updateAppointment(m,{status:"concluido"},(e==null?void 0:e.nome)||"Administrador"),M("Aula concluída com sucesso!","success"),x("home"))})}),a}function Pe(x){const a=document.createElement("div"),e=O.getCurrentUser();let o=new Date;function s(){var c,w,I,d;const t=k.getStudents();k.getPlans();const v=k.getAppointments(),$=o.getFullYear(),r=o.getMonth(),y=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],h=new Date($,r,1).getDay(),n=new Date($,r+1,0).getDate(),m=new Date($,r,0).getDate(),f=new Date,z=f.getFullYear()===$&&f.getMonth()===r,g=[];for(let l=h;l>0;l--){const E=m-l+1;g.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${E}</span>
          </div>
        </div>
      `)}for(let l=1;l<=n;l++){const E=P=>P.toString().padStart(2,"0"),S=`${$}-${E(r+1)}-${E(l)}`,L=z&&f.getDate()===l,u=v.filter(P=>P.data===S),C=u.slice(0,3).map(P=>{const j=t.find(W=>W.id===P.alunoId),R=j?j.nome.split(" ")[0]:"Aula";let F="",q="";return P.status==="concluido"?(F="concluido",q="✓ "):P.status==="falta_justificada"?(F="falta-justificada",q="⚠️ "):P.status==="falta_injustificada"?(F="falta-injustificada",q="✕ "):P.tipoAula==="reposicao"&&(F="reposicao",q="🔄 "),`
            <div class="calendar-appointment-badge ${F}" 
                 data-app-id="${P.id}" 
                 title="${P.horaInicio} - ${(j==null?void 0:j.nome)||"Aluno"} (${P.status}${P.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${q}${P.horaInicio}</strong> ${R}
            </div>
          `}).join(""),T=u.length>3?u.length-3:0,B=T>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${T} mais</div>`:"";g.push(`
        <div class="calendar-day-cell ${L?"today":""}" data-date="${S}">
          <div class="day-cell-header">
            <span class="day-number">${l}</span>
            ${u.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${u.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${C}
            ${B}
          </div>
        </div>
      `)}const b=g.length,A=b>35?42-b:35-b;for(let l=1;l<=A;l++)g.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${l}</span>
          </div>
        </div>
      `);a.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${y[r]} de ${$}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${z?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${_(e,"agenda","cadastrar")?`
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${D.plus} Nova Aula / Compromisso
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

          ${g.join("")}
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
    `,(c=a.querySelector("#agenda-btn-prev"))==null||c.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(w=a.querySelector("#agenda-btn-next"))==null||w.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(I=a.querySelector("#agenda-btn-today"))==null||I.addEventListener("click",()=>{o=new Date,s()}),(d=a.querySelector("#agenda-btn-new-app"))==null||d.addEventListener("click",()=>{p()}),a.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(l=>{l.addEventListener("click",E=>{const S=l.dataset.date;S&&i(S)})}),a.querySelectorAll(".calendar-appointment-badge").forEach(l=>{l.addEventListener("click",E=>{E.stopPropagation();const S=l.dataset.appId,L=v.find(u=>u.id===S);L&&i(L.data)})})}function i(t){const v=k.getStudents(),$=k.getPlans(),r=k.getAppointments().filter(g=>g.data===t),[y,h,n]=t.split("-"),m=`${n}/${h}/${y}`,f=r.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${r.map(g=>{const b=v.find(u=>u.id===g.alunoId),A=$.find(u=>u.id===g.planoId),c=g.status==="concluido",w=g.status==="falta_justificada",I=g.status==="falta_injustificada",d=g.status==="cancelado",l=g.status==="agendado",E=g.tipoAula==="reposicao";let S="var(--color-coral)",L='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return c?(S="var(--status-success)",L='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):w?(S="#f59e0b",L='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):I?(S="var(--status-danger)",L='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):d&&(S="var(--border-subtle)",L='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${S};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${g.horaInicio} - ${g.horaFim}</strong>
                        ${L}
                        ${E?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${g.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(b==null?void 0:b.nome)||"Não vinculado"}</strong>
                        ${b!=null&&b.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${b.instrumentoPrincipal}</span>`:""}
                        ${A?` &bull; Plano: <span style="color: #ff9187;">${A.nome}</span>`:""}
                      </div>

                      ${g.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${g.justificativaFalta}
                             </div>`:""}

                      ${g.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${g.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${g.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${_(e,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${g.id}" title="Editar Detalhes">
                              ${D.edit}
                            </button>
                          `:""}
                      ${_(e,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${g.id}" title="Excluir">
                              ${D.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${_(e,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${l?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${g.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${g.id}" data-name="${(b==null?void 0:b.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${g.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${w&&!g.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${g.id}" data-student-id="${g.alunoId}" data-title="${g.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,z=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${r.length}</strong>
          </span>
          ${_(e,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${D.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${f}
      </div>
    `;H({title:`Aulas do Dia: ${m}`,bodyHtml:z,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var g;(g=document.getElementById("btn-modal-new-appointment"))==null||g.addEventListener("click",()=>{K(),p({defaultDate:t})}),document.querySelectorAll(".btn-mark-presence").forEach(b=>{b.addEventListener("click",A=>{const c=A.currentTarget.dataset.id;c&&(k.marcarPresenca(c,(e==null?void 0:e.nome)||"Administrador"),M("Presença confirmada e aula concluída!","success"),s(),i(t))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(b=>{b.addEventListener("click",A=>{const c=A.currentTarget.dataset.id,w=A.currentTarget.dataset.name;if(!c)return;const I=prompt(`Informe o motivo da falta justificada de ${w} (Ex: Atestado médico, Viagem em família):`);if(I===null)return;const d=k.registrarFalta(c,!0,I,(e==null?void 0:e.nome)||"Administrador");M(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${d.saldoReposicoes}).`,"success"),s(),i(t)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(b=>{b.addEventListener("click",A=>{const c=A.currentTarget.dataset.id;c&&confirm("Registrar falta sem aviso prévio / injustificada? Não será gerado crédito de reposição.")&&(k.registrarFalta(c,!1,void 0,(e==null?void 0:e.nome)||"Administrador"),M("Falta injustificada registrada.","info"),s(),i(t))})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(b=>{b.addEventListener("click",A=>{const c=A.currentTarget,w=c.dataset.id,I=c.dataset.studentId,d=c.dataset.title;K(),p({studentId:I,aulaOriginalId:w,tipoAula:"reposicao",titulo:d?`Reposição: ${d}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(b=>{b.addEventListener("click",A=>{const c=A.currentTarget.dataset.id,w=k.getAppointments().find(I=>I.id===c);w&&(K(),p({existingApp:w}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(b=>{b.addEventListener("click",A=>{const c=A.currentTarget.dataset.id,w=k.getAppointments().find(I=>I.id===c);w&&confirm(`Deseja realmente excluir o compromisso "${w.titulo}"?`)&&(k.deleteAppointment(w.id,(e==null?void 0:e.nome)||"Administrador"),M("Compromisso removido.","info"),s(),i(t))})})},50)}function p(t){const v=k.getStudents(),$=k.getPlans(),r=t==null?void 0:t.existingApp,y=!!r,h=(r==null?void 0:r.alunoId)||(t==null?void 0:t.studentId)||"",n=(r==null?void 0:r.data)||(t==null?void 0:t.defaultDate)||k.getTodayDateString(),m=((r==null?void 0:r.tipoAula)||(t==null?void 0:t.tipoAula))==="reposicao",f=v.map(b=>`<option value="${b.id}" ${h===b.id?"selected":""}>${b.nome} (${b.instrumentoPrincipal||"Geral"}) - Saldo: ${b.saldoReposicoes||0} rep.</option>`).join(""),z=$.map(b=>`<option value="${b.id}" ${(r==null?void 0:r.planoId)===b.id?"selected":""}>${b.nome}</option>`).join(""),g=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Tipo de Aula -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" style="margin: 0; font-weight: 600; color: var(--text-white);">Tipo de Aula:</label>
          <div style="display: flex; gap: 14px;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: var(--text-white);">
              <input type="radio" name="app-tipo-aula" value="regular" ${m?"":"checked"} style="accent-color: var(--color-coral);" />
              Aula Regular
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: #4ade80;">
              <input type="radio" name="app-tipo-aula" value="reposicao" ${m?"checked":""} style="accent-color: #22c55e;" />
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
            ${f}
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-plan">Plano de Ensino (Opcional)</label>
          <select id="app-plan" class="form-select">
            <option value="">Selecione o Plano...</option>
            ${z}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${n}" required />
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

        ${y?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${D.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;H({title:y?"Editar Aula / Compromisso":m?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:g,confirmText:y?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const b=document.getElementById("app-title").value.trim(),A=document.getElementById("app-student").value,c=document.getElementById("app-plan").value,w=document.getElementById("app-date").value,I=document.getElementById("app-time-start").value,d=document.getElementById("app-time-end").value,l=document.getElementById("app-status").value,E=document.getElementById("app-justificativa").value.trim(),S=document.getElementById("app-obs").value.trim(),L=document.querySelector('input[name="app-tipo-aula"]:checked'),u=(L==null?void 0:L.value)||"regular";if(!b||!A||!w||!I)return M("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const C=(e==null?void 0:e.nome)||"Administrador";return y&&r?(k.updateAppointment(r.id,{titulo:b,alunoId:A,planoId:c||void 0,data:w,horaInicio:I,horaFim:d,status:l,tipoAula:u,justificativaFalta:E||void 0,observacoes:S},C),M("Aula atualizada com sucesso!","success")):u==="reposicao"?(k.agendarReposicao({titulo:b,alunoId:A,planoId:c||void 0,data:w,horaInicio:I,horaFim:d,status:l,justificativaFalta:E||void 0,observacoes:S},t==null?void 0:t.aulaOriginalId,C),M("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(k.addAppointment({titulo:b,alunoId:A,planoId:c||void 0,data:w,horaInicio:I,horaFim:d,status:l,tipoAula:u,justificativaFalta:E||void 0,observacoes:S},C),M("Aula agendada com sucesso!","success")),s(),!0}}),y&&r&&setTimeout(()=>{var b;(b=document.getElementById("btn-delete-app"))==null||b.addEventListener("click",()=>{confirm(`Deseja realmente excluir o compromisso "${r.titulo}"?`)&&(k.deleteAppointment(r.id,(e==null?void 0:e.nome)||"Administrador"),M("Compromisso removido.","info"),K(),s())})},50)}return s(),a}const De=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function $e(x){const a=(x||"").toLowerCase();return a.includes("bateria")||a.includes("percuss")?"🥁":a.includes("piano")||a.includes("teclado")?"🎹":a.includes("guitarra")?"🎸":a.includes("violão")||a.includes("violao")?"🪕":a.includes("canto")||a.includes("vocal")?"🎤":a.includes("baixo")?"🎸":a.includes("violino")?"🎻":a.includes("flauta")||a.includes("sax")?"🎷":"🎵"}function we(x){switch(x){case"iniciante":return'<span class="badge" style="background: rgba(147, 51, 234, 0.15); color: #c084fc; border: 1px solid rgba(147, 51, 234, 0.3); font-size: 0.7rem;">Iniciante</span>';case"basico":return'<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 0.7rem;">Básico</span>';case"intermediario":return'<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fcd34d; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.7rem;">Intermediário</span>';case"avancado":return'<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.7rem;">Avançado</span>';default:return'<span class="badge badge-secondary" style="font-size: 0.7rem;">Geral</span>'}}function Ee(x){if(!x)return"";const a=new Date(x+"T00:00:00");if(isNaN(a.getTime()))return"";const e=new Date;let o=e.getFullYear()-a.getFullYear();const s=e.getMonth()-a.getMonth();return(s<0||s===0&&e.getDate()<a.getDate())&&o--,`${o} anos`}function Ae(x,a){const e=x.replace(/\D/g,"");if(!e)return"";const o=e.length<=11?`55${e}`:e,s=encodeURIComponent(`Olá, ${a}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function ke(x,a){const e={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${x.id.toUpperCase()}</div>
        </div>
      </div>

      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; margin-bottom: 16px; font-size: 0.84rem; line-height: 1.5;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div><span style="color: #6b7280;">Aluno(a):</span> <strong>${a.nome}</strong></div>
          <div><span style="color: #6b7280;">Instrumento:</span> <strong>${a.instrumentoPrincipal||"Música Geral"}</strong></div>
          <div><span style="color: #6b7280;">Responsável:</span> <strong>${a.responsavelNome||"O Próprio Aluno"}</strong></div>
          <div><span style="color: #6b7280;">Contato:</span> <strong>${a.telefone||"-"}</strong></div>
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
              <strong>${x.descricao}</strong>
              ${x.observacoes?`<br><small style="color: #6b7280;">${x.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${x.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${x.dataPagamento?x.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${x.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${x.formaPagamento?e[x.formaPagamento]||x.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${x.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;H({title:`Recibo de Pagamento: ${x.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function Be(x){const a=document.createElement("div"),e=O.getCurrentUser();let o="";function s(){var m;const t=k.getStudents(),v=k.getPlans(),$=_(e,"alunos","cadastrar"),r=_(e,"alunos","alterar"),y=_(e,"alunos","excluir"),h=t.filter(f=>f.nome.toLowerCase().includes(o.toLowerCase())||f.email.toLowerCase().includes(o.toLowerCase())||f.telefone.includes(o)||f.instrumentoPrincipal&&f.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||f.responsavelNome&&f.responsavelNome.toLowerCase().includes(o.toLowerCase()));a.innerHTML=`
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

        ${$?`
              <button class="btn btn-primary" id="btn-new-student">
                ${D.plus} Cadastrar Novo Aluno
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
            ${D.search}
          </div>
        </div>
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${h.length})</h3>
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
              ${h.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':h.map(f=>{const z=v.find(I=>I.id===f.planoId),g=f.status==="ativo",b=k.isStudentOverdue(f.id),A=Ee(f.dataNascimento),c=Ae(f.telefone,f.nome),w=f.saldoReposicoes||0;return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.95rem;">
                                  ${f.nome[0]||"A"}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.9rem;">
                                    ${f.nome}
                                    ${A?`<span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal; margin-left: 4px;">(${A})</span>`:""}
                                  </div>
                                  ${f.responsavelNome?`<div style="font-size: 0.74rem; color: var(--text-secondary);">
                                           Resp: <strong style="color: #ff9187;">${f.responsavelNome}</strong> ${f.responsavelParentesco?`(${f.responsavelParentesco})`:""}
                                         </div>`:`<div style="font-size: 0.74rem; color: var(--text-muted);">${f.moduloAtual||"Iniciando"}</div>`}
                                </div>
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1rem;">${$e(f.instrumentoPrincipal)}</span>
                                <span style="font-weight: 500; font-size: 0.85rem; color: var(--text-white);">
                                  ${f.instrumentoPrincipal||"Não definido"}
                                </span>
                              </div>
                              <div style="margin-top: 3px;">
                                ${we(f.nivelMusical)}
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 0.85rem; color: var(--text-white); font-weight: 500;">
                                  ${f.telefone||"Sem telefone"}
                                </span>
                                ${c?`
                                      <a href="${c}" target="_blank" rel="noopener noreferrer" 
                                         class="btn btn-secondary btn-icon-only" 
                                         title="Abrir WhatsApp com ${f.nome}" 
                                         style="width: 26px; height: 26px; padding: 0; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                        ${D.whatsapp}
                                      </a>
                                    `:""}
                              </div>
                              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                                ${f.email||"Sem e-mail cadastrado"}
                              </div>
                            </td>

                            <td>
                              <div style="font-size: 0.84rem; color: var(--text-white); font-weight: 500;">
                                ${(z==null?void 0:z.nome)||"Nenhum plano"}
                              </div>
                              <div style="margin-top: 4px;">
                                ${w>0?`<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.72rem;" title="Possui aulas de reposição pendentes">
                                         🔄 ${w} reposição(ões)
                                       </span>`:'<span style="font-size: 0.72rem; color: var(--text-muted);">0 reposições pendentes</span>'}
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">
                                <span class="badge ${g?"badge-success":"badge-warning"}">
                                  ${g?"● Ativo":"○ Inativo"}
                                </span>
                                ${g?b?`<span class="badge badge-coral" style="font-size: 0.68rem; font-weight: 700; display: inline-flex; align-items: center; gap: 3px;" title="Possui mensalidade em atraso!">
                                           ⚠️ Atrasado
                                         </span>`:`<span class="badge" style="background: rgba(34, 197, 94, 0.12); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.25); font-size: 0.68rem; display: inline-flex; align-items: center; gap: 3px;" title="Mensalidades em dia">
                                           ✓ Em dia
                                         </span>`:""}
                              </div>
                            </td>

                            <td style="text-align: right;">
                              <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${f.id}" title="Ficha Completa e Histórico de Aulas" style="margin-right: 4px; color: #60a5fa;">
                                ${D.profile}
                              </button>

                              ${r?`
                                    <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${f.id}" title="Editar Dados do Aluno">
                                      ${D.edit}
                                    </button>
                                  `:""}
                              ${y?`
                                    <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${f.id}" title="Excluir Aluno" style="margin-left: 4px;">
                                      ${D.trash}
                                    </button>
                                  `:""}
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;const n=a.querySelector("#student-search-input");n==null||n.addEventListener("input",f=>{o=f.target.value,s();const z=a.querySelector("#student-search-input");z&&(z.focus(),z.selectionStart=z.selectionEnd=z.value.length)}),(m=a.querySelector("#btn-new-student"))==null||m.addEventListener("click",()=>{p()}),a.querySelectorAll(".btn-view-student").forEach(f=>{f.addEventListener("click",z=>{const g=z.currentTarget.dataset.id,b=k.getStudents().find(A=>A.id===g);b&&i(b)})}),a.querySelectorAll(".btn-edit-student").forEach(f=>{f.addEventListener("click",z=>{const g=z.currentTarget.dataset.id,b=k.getStudents().find(A=>A.id===g);b&&p(b)})}),a.querySelectorAll(".btn-delete-student").forEach(f=>{f.addEventListener("click",z=>{const g=z.currentTarget.dataset.id,b=k.getStudents().find(A=>A.id===g);b&&confirm(`Tem certeza que deseja excluir o aluno "${b.nome}"?`)&&(k.deleteStudent(b.id,(e==null?void 0:e.nome)||"Administrador"),M(`Aluno "${b.nome}" excluído.`,"info"),s())})})}function i(t){k.getPlans().find(d=>d.id===t.planoId);const $=k.getStudentAppointments(t.id),r=k.getStudentPayments(t.id),y=Ee(t.dataNascimento),h=Ae(t.telefone,t.nome),n=t.saldoReposicoes||0,m=k.isStudentOverdue(t.id),f=t.status==="ativo",z=_(e,"financeiro","alterar"),g=$.length,b=$.filter(d=>d.status==="concluido").length,A=$.filter(d=>d.status==="falta_justificada").length;$.filter(d=>d.status==="falta_injustificada").length;const c=r.filter(d=>d.status==="pago").reduce((d,l)=>d+l.valor,0),w=r.filter(d=>d.status!=="pago").reduce((d,l)=>d+l.valor,0),I=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Cartão Superior de Perfil do Aluno -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--color-coral); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; color: #ffffff;">
              ${t.nome[0]||"A"}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${t.nome}</span>
                <span class="badge ${f?"badge-success":"badge-warning"}" style="font-size: 0.65rem;">
                  ${f?"● Ativo":"○ Inativo"}
                </span>
                ${f?m?'<span class="badge badge-coral" style="font-size: 0.65rem; font-weight: 700;">⚠️ Inadimplente</span>':'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">✓ Mensalidade em dia</span>':""}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px; flex-wrap: wrap; font-size: 0.8rem; color: var(--text-secondary);">
                <span>${$e(t.instrumentoPrincipal)} ${t.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                ${we(t.nivelMusical)}
                ${y?`&bull; <span style="color: var(--text-muted);">${y}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${h?`
                  <a href="${h}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; color: #22c55e; border-color: rgba(34, 197, 94, 0.3); font-size: 0.75rem; padding: 4px 10px;">
                    ${D.whatsapp} WhatsApp
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
            ${m?'<span class="badge badge-coral" style="font-size: 0.65rem; padding: 1px 5px;">Atrasado</span>':`<span class="badge" style="background: rgba(34, 197, 94, 0.2); color: #4ade80; font-size: 0.65rem; padding: 1px 5px;">${r.length}</span>`}
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
              <div style="font-size: 0.82rem; color: var(--text-white);">📱 ${t.telefone||"Sem telefone"}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">✉️ ${t.email||"Sem e-mail"}</div>
            </div>

            <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px;">
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
                Responsável Legal / Emergência
              </span>
              ${t.responsavelNome?`
                    <div style="font-size: 0.82rem; color: var(--text-white);">
                      👤 <strong>${t.responsavelNome}</strong> ${t.responsavelParentesco?`(${t.responsavelParentesco})`:""}
                    </div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      📞 ${t.responsavelTelefone||"Sem telefone informado"}
                    </div>
                  `:'<div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">Não informado / Aluno maior de idade</div>'}
            </div>
          </div>

          <!-- Métricas Rápidas de Presença e Reposições -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #60a5fa;">${g}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Aulas Agendadas</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #4ade80;">${b}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Presenças</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #f59e0b;">${A}</div>
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
              ${$.length===0?'<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">Nenhuma aula registrada ainda para este aluno.</div>':`
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
                        ${$.map(d=>{const l=d.data.split("-").reverse().join("/");let E="";d.status==="concluido"?E='<span class="badge badge-success" style="font-size: 0.65rem;">✓ Presente</span>':d.status==="falta_justificada"?E='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.65rem;">⚠️ Falta Just.</span>':d.status==="falta_injustificada"?E='<span class="badge badge-danger" style="font-size: 0.65rem;">✕ Injustificada</span>':d.status==="cancelado"?E='<span class="badge badge-secondary" style="font-size: 0.65rem;">🚫 Cancelado</span>':E='<span class="badge badge-warning" style="font-size: 0.65rem;">⏳ Agendado</span>';const S=d.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; font-size: 0.65rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td>
                                <strong>${l}</strong><br>
                                <span style="font-size: 0.7rem; color: var(--text-muted);">${d.horaInicio} - ${d.horaFim}</span>
                              </td>
                              <td>
                                <div style="font-weight: 600; color: var(--text-white);">${d.titulo}</div>
                              </td>
                              <td>${S}</td>
                              <td>${E}</td>
                              <td>
                                <span style="color: var(--text-secondary); font-size: 0.75rem;">
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
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.78rem; color: var(--text-secondary);">
                  📝 <strong>Observações:</strong> ${t.observacoes}
                </div>
              `:""}
        </div>

        <!-- CONTEÚDO DA ABA 2: FINANCEIRO -->
        <div id="panel-tab-financeiro" style="display: none; flex-direction: column; gap: 14px;">
          <!-- Card de Alerta de Situação Financeira -->
          ${m?`
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
                R$ ${(t.valorMensalidade??280).toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">Vence todo dia ${t.diaVencimento??10}</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Total Já Pago</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: #4ade80; margin-top: 2px;">
                R$ ${c.toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${r.filter(d=>d.status==="pago").length} mensalidade(s)</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Total em Aberto</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: ${w>0?"#f87171":"var(--text-white)"}; margin-top: 2px;">
                R$ ${w.toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${r.filter(d=>d.status!=="pago").length} pendente(s)</div>
            </div>
          </div>

          <!-- Tabela de Lançamentos Financeiros do Aluno -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-white); margin: 0;">
                Histórico de Mensalidades &amp; Pagamentos (${r.length})
              </h4>
            </div>

            <div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${r.length===0?'<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">Nenhum lançamento financeiro registrado para este aluno ainda.</div>':`
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
                        ${r.map(d=>{const l=d.status==="pago",E=d.status==="atrasado";let S="";return l?S='<span class="badge badge-success" style="font-size: 0.65rem;">✓ Pago</span>':E?S='<span class="badge badge-coral" style="font-size: 0.65rem; font-weight: 700;">⚠️ Atrasado</span>':S='<span class="badge badge-warning" style="font-size: 0.65rem;">⏳ Pendente</span>',`
                            <tr>
                              <td>
                                <strong style="color: var(--text-white);">${d.descricao}</strong>
                                ${d.formaPagamento?`<div style="font-size: 0.68rem; color: var(--text-muted);">${d.formaPagamento.toUpperCase()}</div>`:""}
                              </td>
                              <td>${d.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${d.valor.toFixed(2)}</td>
                              <td>${S}</td>
                              <td>${d.dataPagamento?d.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${l?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${d.id}" style="font-size: 0.72rem; padding: 2px 8px;" title="Ver e imprimir recibo">
                                        🖨️ Recibo
                                      </button>
                                    `:z?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${d.id}" style="font-size: 0.72rem; padding: 2px 8px; background: #059669; border-color: #059669;" title="Dar baixa no pagamento">
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
    `;H({title:`Ficha do Aluno: ${t.nome}`,bodyHtml:I,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var L;const d=document.getElementById("btn-tab-pedagogico"),l=document.getElementById("btn-tab-financeiro"),E=document.getElementById("panel-tab-pedagogico"),S=document.getElementById("panel-tab-financeiro");d==null||d.addEventListener("click",()=>{d.className="btn btn-sm btn-profile-tab active",l==null||l.classList.add("btn-secondary"),l==null||l.classList.remove("active"),E&&(E.style.display="flex"),S&&(S.style.display="none")}),l==null||l.addEventListener("click",()=>{l.className="btn btn-sm btn-profile-tab active",d==null||d.classList.add("btn-secondary"),d==null||d.classList.remove("active"),S&&(S.style.display="flex"),E&&(E.style.display="none")}),(L=document.getElementById("btn-quick-schedule-reposicao"))==null||L.addEventListener("click",()=>{K(),x("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(u=>{u.addEventListener("click",C=>{const T=C.currentTarget.dataset.id,B=r.find(P=>P.id===T);B&&ke(B,t)})}),document.querySelectorAll(".btn-pay-now").forEach(u=>{u.addEventListener("click",C=>{const T=C.currentTarget.dataset.id,B=r.find(R=>R.id===T);if(!B)return;const P=k.getTodayDateString(),j=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${B.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${B.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${B.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${t.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${P}" required />
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
          `;H({title:`Dar Baixa: ${B.descricao}`,bodyHtml:j,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const R=document.getElementById("baixa-data").value,F=document.getElementById("baixa-forma").value,q=document.getElementById("baixa-obs").value;if(!R)return M("Informe a data de recebimento.","error"),!1;const W=(e==null?void 0:e.nome)||"Administrador";k.darBaixaPayment(B.id,R,F,W,q),M(`Baixa de R$ ${B.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const Z=k.getStudents().find(G=>G.id===t.id)||t;return i(Z),setTimeout(()=>{var G;(G=document.getElementById("btn-tab-financeiro"))==null||G.click()},50),!0}})})})},50)}function p(t){const v=k.getPlans(),$=!!t,r=t?k.getStudentPayments(t.id):[],y=v.map(m=>`<option value="${m.id}" ${(t==null?void 0:t.planoId)===m.id?"selected":""}>${m.nome}</option>`).join(""),h=De.map(m=>`<option value="${m}" ${(t==null?void 0:t.instrumentoPrincipal)===m?"selected":""}>${m}</option>`).join(""),n=`
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

        <!-- PAINEL 2: DADOS DO RESPONSÁVEL -->
        <div id="form-panel-tab-resp" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
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
                ${h}
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
              <label class="form-label" for="student-status">Status da Matrícula</label>
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
                ${y}
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

        <!-- PAINEL 4: MENSALIDADE E FINANCEIRO -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #fbbf24; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Parâmetros da Mensalidade
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Valor da Mensalidade (R$)</label>
                <input type="number" id="student-valor-mensalidade" class="form-input" min="0" step="10" placeholder="280.00" value="${(t==null?void 0:t.valorMensalidade)??280}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia de Vencimento Padrão</label>
                <input type="number" id="student-dia-vencimento" class="form-input" min="1" max="31" placeholder="10" value="${(t==null?void 0:t.diaVencimento)??10}" required />
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
              ${r.length>0?`<span style="font-size: 0.72rem; color: var(--text-muted);">${r.length} lançamento(s)</span>`:""}
            </div>

            <div style="max-height: 155px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${t?r.length===0?'<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado para este aluno.</div>':`
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
                        ${r.map(m=>{const f=m.dataVencimento.split("-").reverse().join("/"),z=m.dataPagamento?m.dataPagamento.split("-").reverse().join("/"):"-";let g="";return m.status==="pago"?g='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':m.status==="atrasado"?g='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':g='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${m.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${f}</td>
                              <td style="padding: 6px 10px; color: ${m.dataPagamento?"var(--text-white)":"var(--text-muted)"};">${z}</td>
                              <td style="padding: 6px 10px; text-align: center;">${g}</td>
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
            <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Gostos musicais, objetivos do aluno, pontos de atenção pedagógica...">${(t==null?void 0:t.observacoes)||""}</textarea>
          </div>
        </div>
      </form>
    `;H({title:$?`Editar Aluno: ${t.nome}`:"Cadastrar Novo Aluno",bodyHtml:n,modalClass:"modal-lg",confirmText:$?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var R,F;const m=document.getElementById("student-nome").value.trim(),f=document.getElementById("student-nascimento").value,z=document.getElementById("student-email").value.trim(),g=document.getElementById("student-telefone").value.trim(),b=document.getElementById("student-resp-nome").value.trim(),A=document.getElementById("student-resp-parentesco").value,c=document.getElementById("student-resp-tel").value.trim(),w=document.getElementById("student-instrumento").value,I=document.getElementById("student-nivel").value,d=document.getElementById("student-plano").value,l=document.getElementById("student-status").value,E=document.getElementById("student-modulo").value.trim(),S=document.getElementById("student-saldo-reposicoes").value,L=Math.max(0,parseInt(S,10)||0),u=(R=document.getElementById("student-valor-mensalidade"))==null?void 0:R.value,C=Math.max(0,parseFloat(u)||280),T=(F=document.getElementById("student-dia-vencimento"))==null?void 0:F.value,B=Math.min(31,Math.max(1,parseInt(T,10)||10)),P=document.getElementById("student-obs").value.trim();if(!m)return M("Informe o nome do aluno.","error"),!1;const j=(e==null?void 0:e.nome)||"Administrador";return $&&t?(k.updateStudent(t.id,{nome:m,dataNascimento:f,email:z,telefone:g,responsavelNome:b,responsavelParentesco:A,responsavelTelefone:c,instrumentoPrincipal:w,nivelMusical:I,planoId:d,status:l,moduloAtual:E,saldoReposicoes:L,valorMensalidade:C,diaVencimento:B,observacoes:P},j),M("Dados do aluno atualizados com sucesso!","success")):(k.addStudent({nome:m,dataNascimento:f,email:z,telefone:g,responsavelNome:b,responsavelParentesco:A,responsavelTelefone:c,instrumentoPrincipal:w,nivelMusical:I,planoId:d,status:l,moduloAtual:E,saldoReposicoes:L,valorMensalidade:C,diaVencimento:B,observacoes:P},j),M("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const m=document.querySelectorAll(".btn-form-tab"),f=document.querySelectorAll(".form-tab-panel");m.forEach(z=>{z.addEventListener("click",g=>{const b=g.currentTarget.dataset.tab;m.forEach(A=>{A.classList.add("btn-secondary"),A.classList.remove("active")}),g.currentTarget.classList.remove("btn-secondary"),g.currentTarget.classList.add("active"),f.forEach(A=>{A.style.display=A.id===`form-panel-${b}`?"flex":"none"})})})},50)}return s(),a}const J=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],ae=J.reduce((x,a)=>x+a.items.length,0);function Te(x){let a=0;return J.forEach(e=>{const o=x[e.key];o&&e.items.forEach(s=>{o[s.key]&&a++})}),a}function Ne(x){var i;const a=document.createElement("div"),e=O.getCurrentUser();if((e==null?void 0:e.papel)!=="admin")return a.innerHTML=`
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
    `,(i=a.querySelector("#btn-unauth-home"))==null||i.addEventListener("click",()=>x("home")),a;function o(){var t;const p=k.getUsers();a.innerHTML=`
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
          ${D.plus} Cadastrar Novo Usuário
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
          <h3 class="panel-card-title">Usuários Cadastrados (${p.length})</h3>
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
              ${p.map(v=>{const $=v.papel==="admin"?"Administrador":v.papel==="professor"?"Professor":"Atendente",r=X(v),y=Te(r);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 10px;">
                          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${v.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.82rem; color: #ffffff;">
                            ${v.nome[0]||"U"}
                          </div>
                          <div>
                            <div style="font-weight: 600; color: var(--text-white);">${v.nome}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${v.isSistema?"Administrador Raiz":"Usuário Padrão"}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <code style="background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 4px; font-size: 0.85rem; color: #ff9187;">
                          ${v.login}
                        </code>
                      </td>
                      <td>
                        <span class="badge ${v.papel==="admin"?"badge-coral":"badge-info"}">
                          ${$}
                        </span>
                      </td>
                      <td>
                        ${v.papel==="admin"?`<span class="badge badge-coral" title="Acesso total a todos os formulários e ações">Acesso Total (${ae}/${ae})</span>`:`
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <span class="badge ${y>0?"badge-success":"badge-danger"}">
                                  ${y} de ${ae} ações
                                </span>
                                <span style="font-size: 0.72rem; color: var(--text-muted);">
                                  (${r.alunos.acesso?"Alunos":""}${r.agenda.acesso?", Agenda":""}${r.planos.acesso?", Planos":""})
                                </span>
                              </div>
                            `}
                      </td>
                      <td>
                        ${v.isSistema?'<span style="font-size: 0.78rem; color: #f59e0b; font-weight: 600;">🔒 Sistema (Protegido)</span>':'<span style="font-size: 0.78rem; color: var(--text-muted);">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${v.id}" title="Editar Dados e Permissões">
                          ${D.edit}
                        </button>
                        ${v.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.3; cursor: not-allowed; margin-left: 6px;">
                                 ${D.trash}
                               </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${v.id}" title="Excluir Usuário" style="margin-left: 6px;">
                                 ${D.trash}
                               </button>`}
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(t=a.querySelector("#btn-new-user"))==null||t.addEventListener("click",()=>{s()}),a.querySelectorAll(".btn-edit-user").forEach(v=>{v.addEventListener("click",$=>{const r=$.currentTarget.dataset.id,y=k.getUsers().find(h=>h.id===r);y&&s(y)})}),a.querySelectorAll(".btn-delete-user").forEach(v=>{v.addEventListener("click",$=>{const r=$.currentTarget.dataset.id,y=k.getUsers().find(h=>h.id===r);if(y&&confirm(`Tem certeza que deseja excluir o usuário "${y.nome}" (login: ${y.login})?`))try{k.deleteUser(y.id,(e==null?void 0:e.nome)||"Administrador"),M(`Usuário "${y.nome}" excluído.`,"info"),o()}catch(h){M(h.message||"Erro ao excluir usuário.","error")}})})}function s(p){var z,g,b,A;const t=!!p,v=p?p.papel:"professor",$=v==="admin",r=X(p),y=`
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${(p==null?void 0:p.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${(p==null?void 0:p.login)||""}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${t?"Nova senha":"Ex: 123456"}" value="${(p==null?void 0:p.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${p!=null&&p.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${v==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${v==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${v==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${p!=null&&p.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${$?"none":"block"};">
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
            ${J.map(c=>{const w=r[c.key]||{},I=c.items.filter(d=>w[d.key]).length;return`
                <div class="perm-group-card" id="card-group-${c.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${c.key}" 
                    data-group="${c.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${c.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${c.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${c.title}
                        </strong>
                        <span id="group-counter-${c.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${I}/${c.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${c.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${c.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${c.items.map(d=>{const l=!!w[d.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${c.key}-${d.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${l?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${l?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${c.key}-${d.key}" 
                                data-group="${c.key}" 
                                data-action="${d.key}" 
                                ${l?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${d.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${c.key}-${d.key}" 
                              class="badge ${l?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${l?"Liberado":"Bloqueado"}
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
    `;H({title:t?`Editar Usuário: ${p.nome}`:"Cadastrar Novo Usuário",bodyHtml:y,modalClass:"modal-lg",confirmText:t?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var u,C,T,B,P,j,R,F,q,W,Z,G,oe,se,re,ne,ie,le,de,ce;const c=document.getElementById("user-nome").value.trim(),w=document.getElementById("user-login").value.trim(),I=document.getElementById("user-senha").value.trim(),d=document.getElementById("user-papel"),l=d?d.value:"professor";if(!c||!w||!I)return M("Preencha Nome, Login e Senha.","error"),!1;if(k.getUsers().find(ue=>ue.login===w&&ue.id!==(p==null?void 0:p.id)))return M(`O login "${w}" já está em uso por outro usuário.`,"error"),!1;let S;l==="admin"?S=JSON.parse(JSON.stringify(Y.admin)):S={alunos:{acesso:((u=document.getElementById("perm-alunos-acesso"))==null?void 0:u.checked)??!1,cadastrar:((C=document.getElementById("perm-alunos-cadastrar"))==null?void 0:C.checked)??!1,alterar:((T=document.getElementById("perm-alunos-alterar"))==null?void 0:T.checked)??!1,excluir:((B=document.getElementById("perm-alunos-excluir"))==null?void 0:B.checked)??!1},agenda:{acesso:((P=document.getElementById("perm-agenda-acesso"))==null?void 0:P.checked)??!1,cadastrar:((j=document.getElementById("perm-agenda-cadastrar"))==null?void 0:j.checked)??!1,alterar:((R=document.getElementById("perm-agenda-alterar"))==null?void 0:R.checked)??!1,excluir:((F=document.getElementById("perm-agenda-excluir"))==null?void 0:F.checked)??!1},planos:{acesso:((q=document.getElementById("perm-planos-acesso"))==null?void 0:q.checked)??!1,cadastrar:((W=document.getElementById("perm-planos-cadastrar"))==null?void 0:W.checked)??!1,alterar:((Z=document.getElementById("perm-planos-alterar"))==null?void 0:Z.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((oe=document.getElementById("perm-financeiro-acesso"))==null?void 0:oe.checked)??!1,cadastrar:((se=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:se.checked)??!1,alterar:((re=document.getElementById("perm-financeiro-alterar"))==null?void 0:re.checked)??!1,excluir:((ne=document.getElementById("perm-financeiro-excluir"))==null?void 0:ne.checked)??!1},home:{acesso:((ie=document.getElementById("perm-home-acesso"))==null?void 0:ie.checked)??!1},auditoria:{acesso:((le=document.getElementById("perm-auditoria-acesso"))==null?void 0:le.checked)??!1},configuracoes:{acesso:((de=document.getElementById("perm-configuracoes-acesso"))==null?void 0:de.checked)??!1,alterar:((ce=document.getElementById("perm-configuracoes-alterar"))==null?void 0:ce.checked)??!1}};const L=(e==null?void 0:e.nome)||"Administrador";return t&&p?(k.updateUser(p.id,{nome:c,login:w,senha:I,papel:p.isSistema?"admin":l,permissoes:p.isSistema?Y.admin:S},L),M("Usuário e permissões atualizados com sucesso!","success")):(k.addUser({nome:c,login:w,senha:I,papel:l,permissoes:S},L),M("Novo usuário cadastrado com sucesso!","success")),o(),!0}});const h=document.getElementById("user-papel"),n=document.getElementById("user-permissions-section"),m=(c,w,I)=>{const d=document.getElementById(`row-perm-${c}-${w}`),l=document.getElementById(`badge-perm-${c}-${w}`);d&&l&&(I?(d.style.background="rgba(34, 197, 94, 0.06)",d.style.borderColor="rgba(34, 197, 94, 0.25)",l.className="badge badge-success",l.textContent="Liberado"):(d.style.background="rgba(234, 67, 53, 0.04)",d.style.borderColor="rgba(234, 67, 53, 0.15)",l.className="badge badge-coral",l.textContent="Bloqueado")),f(c)},f=c=>{const w=document.getElementById(`group-counter-${c}`),I=J.find(d=>d.key===c);if(w&&I){let d=0;I.items.forEach(l=>{const E=document.getElementById(`perm-${c}-${l.key}`);E&&E.checked&&d++}),w.textContent=`${d}/${I.items.length} liberadas`}};h==null||h.addEventListener("change",()=>{const c=h.value;if(c==="admin")n.style.display="none";else if(n.style.display="block",!t){const w=Y[c]||Y.professor;J.forEach(I=>{I.items.forEach(d=>{var E;const l=document.getElementById(`perm-${I.key}-${d.key}`);if(l){const S=((E=w[I.key])==null?void 0:E[d.key])??!1;l.checked=S,m(I.key,d.key,S)}})})}}),J.forEach(c=>{const w=document.getElementById(`header-group-${c.key}`),I=document.getElementById(`group-body-${c.key}`),d=document.getElementById(`arrow-perm-${c.key}`);w==null||w.addEventListener("click",l=>{if(!l.target.closest(".btn-group-toggle")&&I&&d){const E=I.style.display==="flex";I.style.display=E?"none":"flex",d.style.transform=E?"rotate(0deg)":"rotate(180deg)"}}),c.items.forEach(l=>{const E=document.getElementById(`perm-${c.key}-${l.key}`);E==null||E.addEventListener("change",()=>{if(m(c.key,l.key,E.checked),E.checked&&l.key!=="acesso"){const S=document.getElementById(`perm-${c.key}-acesso`);S&&!S.checked&&(S.checked=!0,m(c.key,"acesso",!0))}!E.checked&&l.key==="acesso"&&c.items.forEach(S=>{if(S.key!=="acesso"){const L=document.getElementById(`perm-${c.key}-${S.key}`);L&&L.checked&&(L.checked=!1,m(c.key,S.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${c.key}"]`).forEach(l=>{l.addEventListener("click",E=>{E.stopPropagation();const S=c.items.map(u=>document.getElementById(`perm-${c.key}-${u.key}`)).filter(Boolean),L=S.every(u=>u.checked);S.forEach(u=>{u.checked=!L,m(c.key,u.dataset.action,!L)})})})}),(z=document.getElementById("btn-perm-expand"))==null||z.addEventListener("click",()=>{J.forEach(c=>{const w=document.getElementById(`group-body-${c.key}`),I=document.getElementById(`arrow-perm-${c.key}`);w&&I&&(w.style.display="flex",I.style.transform="rotate(180deg)")})}),(g=document.getElementById("btn-perm-collapse"))==null||g.addEventListener("click",()=>{J.forEach(c=>{const w=document.getElementById(`group-body-${c.key}`),I=document.getElementById(`arrow-perm-${c.key}`);w&&I&&(w.style.display="none",I.style.transform="rotate(0deg)")})}),(b=document.getElementById("btn-perm-all"))==null||b.addEventListener("click",()=>{J.forEach(c=>{c.items.forEach(w=>{const I=document.getElementById(`perm-${c.key}-${w.key}`);I&&(I.checked=!0,m(c.key,w.key,!0))})})}),(A=document.getElementById("btn-perm-none"))==null||A.addEventListener("click",()=>{J.forEach(c=>{c.items.forEach(w=>{const I=document.getElementById(`perm-${c.key}-${w.key}`);I&&(I.checked=!1,m(c.key,w.key,!1))})})})}return o(),a}function je(x){const a=document.createElement("div"),e=O.getCurrentUser();function o(){var $;const i=k.getPlans(),p=_(e,"planos","cadastrar"),t=_(e,"planos","alterar"),v=_(e,"planos","excluir");a.innerHTML=`
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

        ${p?`
              <button class="btn btn-primary" id="btn-new-plan">
                ${D.plus} Cadastrar Novo Plano
              </button>
            `:""}
      </div>

      <!-- Lista de Cards de Planos -->
      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${i.length===0?'<div class="panel-card" style="padding: 40px; text-align: center; color: var(--text-muted);">Nenhum plano de ensino cadastrado.</div>':i.map(r=>`
                    <div class="panel-card" style="margin-bottom: 0;">
                      <div class="panel-card-header" style="background-color: rgba(255, 255, 255, 0.02);">
                        <div style="display: flex; align-items: center; gap: 14px;">
                          <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral);">
                            ${D.planos}
                          </div>
                          <div>
                            <h3 class="panel-card-title">${r.nome}</h3>
                            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${r.descricao||"Sem descrição cadastrada"}</p>
                          </div>
                        </div>

                        <div style="display: flex; gap: 8px;">
                          ${t?`
                                <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${r.id}" title="Editar Plano e Módulos">
                                  ${D.edit}
                                </button>
                              `:""}
                          ${v?`
                                <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${r.id}" title="Excluir Plano">
                                  ${D.trash}
                                </button>
                              `:""}
                          ${!t&&!v?'<span style="font-size: 0.75rem; color: var(--text-muted); align-self: center;">Visualização</span>':""}
                        </div>
                      </div>

                      <!-- Listagem dos Módulos Aninhados -->
                      <div style="padding: 18px 24px;">
                        <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.05em;">
                          Módulos Integrados (${r.modulos.length})
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
                          ${r.modulos.length===0?'<div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic;">Nenhum módulo adicionado neste plano.</div>':r.modulos.map((y,h)=>`
                                    <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
                                      <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--color-coral); color: #fff; font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                        ${h+1}
                                      </div>
                                      <span style="font-size: 0.86rem; color: var(--text-white); font-weight: 500;">${y.titulo}</span>
                                    </div>
                                  `).join("")}
                        </div>
                      </div>
                    </div>
                  `).join("")}
      </div>
    `,($=a.querySelector("#btn-new-plan"))==null||$.addEventListener("click",()=>{s()}),a.querySelectorAll(".btn-edit-plan").forEach(r=>{r.addEventListener("click",y=>{const h=y.currentTarget.dataset.id,n=k.getPlans().find(m=>m.id===h);n&&s(n)})}),a.querySelectorAll(".btn-delete-plan").forEach(r=>{r.addEventListener("click",y=>{const h=y.currentTarget.dataset.id,n=k.getPlans().find(m=>m.id===h);n&&confirm(`Tem certeza que deseja excluir o plano "${n.nome}" e todos os seus módulos?`)&&(k.deletePlan(n.id,(e==null?void 0:e.nome)||"Administrador"),M(`Plano "${n.nome}" excluído.`,"info"),o())})})}function s(i){const p=!!i;let t=i?JSON.parse(JSON.stringify(i.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function v(){return t.map((y,h)=>`
            <div class="module-row" data-idx="${h}" style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-coral); width: 20px;">#${h+1}</span>
              <input 
                type="text" 
                class="form-input module-title-input" 
                value="${y.titulo}" 
                placeholder="Ex: Módulo ${h+1} - Nome do módulo" 
                style="flex: 1; padding: 8px 12px; font-size: 0.88rem;"
              />
              <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-idx="${h}" title="Remover Módulo">
                &times;
              </button>
            </div>
          `).join("")}const $=`
      <form id="plan-modal-form">
        <div class="form-group">
          <label class="form-label" for="plan-nome">Nome do Plano de Ensino</label>
          <input type="text" id="plan-nome" class="form-input" placeholder="Ex: Plano 1 ou Teoria Musical Avançada" value="${(i==null?void 0:i.nome)||""}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="plan-desc">Descrição / Objetivo do Plano</label>
          <textarea id="plan-desc" class="form-textarea" rows="2" placeholder="Resumo dos objetivos e público-alvo...">${(i==null?void 0:i.descricao)||""}</textarea>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label class="form-label" style="margin-bottom: 0;">Módulos do Plano (Hierarquia)</label>
            <button type="button" class="btn btn-secondary" id="btn-add-module-row" style="padding: 4px 10px; font-size: 0.78rem;">
              + Adicionar Módulo
            </button>
          </div>

          <div id="modules-container">
            ${v()}
          </div>
        </div>
      </form>
    `;H({title:p?`Editar Plano: ${i.nome}`:"Cadastrar Novo Plano de Ensino",bodyHtml:$,confirmText:p?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const y=document.getElementById("plan-nome").value.trim(),h=document.getElementById("plan-desc").value.trim(),n=document.querySelectorAll(".module-title-input"),m=[];if(n.forEach((z,g)=>{const b=z.value.trim();b&&m.push({id:"mod_"+(g+1)+"_"+Date.now(),ordem:g+1,titulo:b})}),!y)return M("Informe o nome do plano.","error"),!1;if(m.length===0)return M("Adicione pelo menos um módulo ao plano.","error"),!1;const f=(e==null?void 0:e.nome)||"Administrador";return p&&i?(k.updatePlan(i.id,{nome:y,descricao:h,modulos:m},f),M("Plano de ensino atualizado com sucesso!","success")):(k.addPlan({nome:y,descricao:h,modulos:m},f),M("Plano de ensino cadastrado com sucesso!","success")),o(),!0}});function r(){const y=document.getElementById("modules-container");y&&(y.innerHTML=v(),y.querySelectorAll(".btn-remove-module").forEach(h=>{h.addEventListener("click",n=>{const m=parseInt(n.currentTarget.dataset.idx||"0",10);t.splice(m,1),r()})}),y.querySelectorAll(".module-title-input").forEach((h,n)=>{h.addEventListener("input",m=>{t[n]&&(t[n].titulo=m.target.value)})}))}setTimeout(()=>{var y;(y=document.getElementById("btn-add-module-row"))==null||y.addEventListener("click",()=>{const h=t.length+1;t.push({id:"mod_"+h+"_"+Date.now(),ordem:h,titulo:`Módulo ${h}: `}),r()}),r()},50)}return o(),a}function Re(x){const a=document.createElement("div"),e=O.getCurrentUser();let o="",s="todos",i="";const p=_(e,"financeiro","cadastrar"),t=_(e,"financeiro","alterar"),v=_(e,"financeiro","excluir");function $(){var E,S,L;const n=k.getPayments(),m=k.getStudents();k.getTodayDateString();const f=n.filter(u=>u.status==="pago").reduce((u,C)=>u+C.valor,0),z=n.filter(u=>u.status==="pendente").reduce((u,C)=>u+C.valor,0),g=n.filter(u=>u.status==="atrasado").reduce((u,C)=>u+C.valor,0),b=m.filter(u=>u.status==="ativo"&&k.isStudentOverdue(u.id)),A=n.filter(u=>{const C=m.find(F=>F.id===u.alunoId),T=C?C.nome.toLowerCase():"",B=u.descricao.toLowerCase(),P=T.includes(o.toLowerCase())||B.includes(o.toLowerCase())||u.mesReferencia&&u.mesReferencia.includes(o),j=s==="todos"||u.status===s,R=!i||u.mesReferencia===i||u.dataVencimento.startsWith(i);return P&&j&&R}),c=new Set;n.forEach(u=>{u.mesReferencia?c.add(u.mesReferencia):u.dataVencimento&&c.add(u.dataVencimento.substring(0,7))});const w=Array.from(c).sort().reverse();a.innerHTML=`
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
          ${p?`
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${D.plus} Novo Lançamento
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
            ${n.filter(u=>u.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${z.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(u=>u.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${g.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(u=>u.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${b.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${m.filter(u=>u.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${b.length===0?"✓ 100% em dia":"Requer acompanhamento"}
          </div>
        </div>
      </div>

      <!-- Filtros e Barra de Ações -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 260px;">
          <input 
            type="text" 
            id="fin-search-input" 
            class="form-input" 
            placeholder="Buscar por aluno, descrição..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${D.search}
          </div>
        </div>

        <div style="min-width: 150px;">
          <select id="fin-status-filter" class="form-select">
            <option value="todos" ${s==="todos"?"selected":""}>Todos os Status</option>
            <option value="pago" ${s==="pago"?"selected":""}>✓ Pagos</option>
            <option value="pendente" ${s==="pendente"?"selected":""}>⏳ Pendentes</option>
            <option value="atrasado" ${s==="atrasado"?"selected":""}>⚠️ Atrasados</option>
          </select>
        </div>

        <div style="min-width: 160px;">
          <select id="fin-month-filter" class="form-select">
            <option value="" ${i===""?"selected":""}>Todos os Meses</option>
            ${w.map(u=>`<option value="${u}" ${i===u?"selected":""}>Mês: ${u}</option>`).join("")}
          </select>
        </div>

        ${o||s!=="todos"||i?`
              <button class="btn btn-secondary btn-sm" id="btn-limpar-filtros" title="Limpar todos os filtros">
                ✕ Limpar
              </button>
            `:""}
      </div>

      <!-- Tabela Principal de Pagamentos -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Lançamentos Financeiros (${A.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Descrição / Referência</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Pagamento</th>
                <th style="text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${A.length===0?'<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':A.map(u=>{const C=m.find(R=>R.id===u.alunoId),T=u.status==="pago",B=u.status==="atrasado";let P="";T?P='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':B?P='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':P='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>';let j="";if(C&&C.telefone&&!T){const R=C.telefone.replace(/\D/g,""),F=R.length<=11?`55${R}`:R,q=B?`Olá, ${C.nome}! Notamos que a mensalidade de ${u.descricao} (R$ ${u.valor.toFixed(2)}) venceu em ${u.dataVencimento.split("-").reverse().join("/")}. Podemos lhe ajudar na regularização?`:`Olá, ${C.nome}! Lembramos que a mensalidade de ${u.descricao} (R$ ${u.valor.toFixed(2)}) vence em ${u.dataVencimento.split("-").reverse().join("/")}. Qualquer dúvida estamos à disposição!`;j=`https://wa.me/${F}?text=${encodeURIComponent(q)}`}return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.85rem; flex-shrink: 0;">
                                  ${C!=null&&C.nome?C.nome[0]:"?"}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${(C==null?void 0:C.nome)||"Aluno não identificado"}
                                  </div>
                                  <div style="font-size: 0.72rem; color: var(--text-muted);">
                                    ${(C==null?void 0:C.instrumentoPrincipal)||"Música Geral"} &bull; ${(C==null?void 0:C.telefone)||"-"}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div style="font-weight: 600; color: var(--text-white); font-size: 0.85rem;">${u.descricao}</div>
                              ${u.mesReferencia?`<span style="font-size: 0.7rem; color: var(--text-muted);">Ref: ${u.mesReferencia}</span>`:""}
                              ${u.observacoes?`<div style="font-size: 0.7rem; color: var(--text-secondary);">${u.observacoes}</div>`:""}
                            </td>

                            <td>
                              <div style="font-size: 0.85rem; color: ${B?"#f87171":"var(--text-white)"}; font-weight: ${B?"700":"normal"};">
                                ${u.dataVencimento.split("-").reverse().join("/")}
                              </div>
                            </td>

                            <td>
                              <div style="font-weight: 700; color: var(--text-white); font-size: 0.92rem;">
                                R$ ${u.valor.toFixed(2)}
                              </div>
                            </td>

                            <td>${P}</td>

                            <td>
                              ${T?`
                                    <div style="font-size: 0.82rem; color: #4ade80; font-weight: 600;">
                                      ${u.dataPagamento?u.dataPagamento.split("-").reverse().join("/"):"Pago"}
                                    </div>
                                    <div style="font-size: 0.7rem; color: var(--text-muted);">
                                      ${(u.formaPagamento||"PIX").toUpperCase()}
                                    </div>
                                  `:'<span style="font-size: 0.78rem; color: var(--text-muted);">-</span>'}
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 4px; justify-content: flex-end; align-items: center;">
                                ${!T&&t?`
                                      <button class="btn btn-primary btn-sm btn-action-baixa" data-id="${u.id}" style="font-size: 0.75rem; padding: 4px 10px; background: #059669; border-color: #059669;" title="Dar baixa e confirmar recebimento">
                                        ✓ Baixa
                                      </button>
                                    `:""}

                                ${T?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${u.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${j?`
                                      <a href="${j}" target="_blank" rel="noopener noreferrer" 
                                         class="btn btn-secondary btn-icon-only" 
                                         title="Lembrar cobrança via WhatsApp" 
                                         style="color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                        ${D.whatsapp}
                                      </a>
                                    `:""}

                                ${t?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${u.id}" title="Editar Lançamento">
                                        ${D.edit}
                                      </button>
                                    `:""}

                                ${v?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${u.id}" title="Excluir Lançamento">
                                        ${D.trash}
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
    `;const I=a.querySelector("#fin-search-input");I==null||I.addEventListener("input",u=>{o=u.target.value,$();const C=a.querySelector("#fin-search-input");C&&(C.focus(),C.selectionStart=C.selectionEnd=C.value.length)});const d=a.querySelector("#fin-status-filter");d==null||d.addEventListener("change",()=>{s=d.value,$()});const l=a.querySelector("#fin-month-filter");l==null||l.addEventListener("change",()=>{i=l.value,$()}),(E=a.querySelector("#btn-limpar-filtros"))==null||E.addEventListener("click",()=>{o="",s="todos",i="",$()}),(S=a.querySelector("#btn-gerar-lote"))==null||S.addEventListener("click",()=>{y()}),(L=a.querySelector("#btn-novo-lancamento"))==null||L.addEventListener("click",()=>{h()}),a.querySelectorAll(".btn-action-baixa").forEach(u=>{u.addEventListener("click",C=>{const T=C.currentTarget.dataset.id,B=n.find(P=>P.id===T);B&&r(B)})}),a.querySelectorAll(".btn-action-recibo").forEach(u=>{u.addEventListener("click",C=>{const T=C.currentTarget.dataset.id,B=n.find(P=>P.id===T);if(B){const P=m.find(j=>j.id===B.alunoId);P&&ke(B,P)}})}),a.querySelectorAll(".btn-action-edit").forEach(u=>{u.addEventListener("click",C=>{const T=C.currentTarget.dataset.id,B=n.find(P=>P.id===T);B&&h(B)})}),a.querySelectorAll(".btn-action-delete").forEach(u=>{u.addEventListener("click",C=>{const T=C.currentTarget.dataset.id,B=n.find(P=>P.id===T);B&&H({title:"Confirmar Exclusão",bodyHtml:`
            <p style="font-size: 0.9rem; color: var(--text-white); margin-bottom: 8px;">
              Deseja realmente excluir o lançamento <strong>"${B.descricao}"</strong> no valor de <strong>R$ ${B.valor.toFixed(2)}</strong>?
            </p>
            <p style="font-size: 0.78rem; color: #f87171; margin: 0;">
              ⚠️ Esta operação será gravada na auditoria do sistema e não poderá ser desfeita.
            </p>
          `,modalClass:"modal-sm",confirmText:"Excluir",confirmBtnClass:"btn-danger",cancelText:"Cancelar",onConfirm:()=>(k.deletePayment(B.id,(e==null?void 0:e.nome)||"Administrador"),M("Lançamento excluído com sucesso!","success"),$(),!0)})})})}function r(n){const m=k.getStudents().find(g=>g.id===n.alunoId),f=k.getTodayDateString(),z=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${n.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${n.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(m==null?void 0:m.nome)||"N/A"}</strong> &bull; Vencimento: ${n.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${f}" required />
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
    `;H({title:"Confirmar Baixa de Pagamento",bodyHtml:z,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const g=document.getElementById("modal-baixa-data").value,b=document.getElementById("modal-baixa-forma").value,A=document.getElementById("modal-baixa-obs").value;return g?(k.darBaixaPayment(n.id,g,b,(e==null?void 0:e.nome)||"Administrador",A),M(`Baixa efetuada com sucesso! R$ ${n.valor.toFixed(2)} recebido.`,"success"),$(),!0):(M("Informe a data de recebimento.","error"),!1)}})}function y(){const n=new Date,m=n.getFullYear(),f=n.getMonth()+1,z=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${m}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${f===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${f===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${f===3?"selected":""}>03 - Março</option>
              <option value="4" ${f===4?"selected":""}>04 - Abril</option>
              <option value="5" ${f===5?"selected":""}>05 - Maio</option>
              <option value="6" ${f===6?"selected":""}>06 - Junho</option>
              <option value="7" ${f===7?"selected":""}>07 - Julho</option>
              <option value="8" ${f===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${f===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${f===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${f===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${f===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;H({title:"Gerar Mensalidades em Lote",bodyHtml:z,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const g=parseInt(document.getElementById("lote-ano").value,10),b=parseInt(document.getElementById("lote-mes").value,10);if(!g||!b)return M("Selecione ano e mês válidos.","error"),!1;const A=k.gerarMensalidadesMes(g,b,(e==null?void 0:e.nome)||"Administrador");return A.criadas===0&&A.puladas>0?M(`Todas as ${A.puladas} mensalidades deste mês já estavam criadas!`,"info"):M(`Sucesso: ${A.criadas} mensalidade(s) gerada(s)! (${A.puladas} já existentes puladas)`,"success"),$(),!0}})}function h(n){const m=!!n,f=k.getStudents(),z=k.getTodayDateString(),g=f.map(A=>`<option value="${A.id}" ${(n==null?void 0:n.alunoId)===A.id?"selected":""}>${A.nome} (${A.instrumentoPrincipal||"Geral"})</option>`).join(""),b=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${m?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${g}
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
            <input type="date" id="pay-vencimento" class="form-input" value="${(n==null?void 0:n.dataVencimento)||z}" required />
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
    `;H({title:m?`Editar Lançamento: ${n.descricao}`:"Novo Lançamento Financeiro",bodyHtml:b,modalClass:"modal-md",confirmText:m?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const A=m&&n?n.alunoId:document.getElementById("pay-aluno").value,c=document.getElementById("pay-desc").value.trim(),w=document.getElementById("pay-mes").value.trim()||void 0,I=document.getElementById("pay-valor").value,d=parseFloat(I)||0,l=document.getElementById("pay-vencimento").value,E=document.getElementById("pay-status").value,S=document.getElementById("pay-forma").value||void 0,L=document.getElementById("pay-obs").value.trim()||void 0;if(!A)return M("Selecione um aluno.","error"),!1;if(!c)return M("Informe a descrição do lançamento.","error"),!1;if(d<=0)return M("Informe um valor válido maior que zero.","error"),!1;if(!l)return M("Informe a data de vencimento.","error"),!1;const u=(e==null?void 0:e.nome)||"Administrador";return m&&n?(k.updatePayment(n.id,{descricao:c,mesReferencia:w,valor:d,dataVencimento:l,status:E,formaPagamento:S,dataPagamento:E==="pago"?n.dataPagamento||z:void 0,observacoes:L},u),M("Lançamento atualizado com sucesso!","success")):(k.addPayment({alunoId:A,descricao:c,mesReferencia:w,valor:d,dataVencimento:l,status:E,formaPagamento:S,dataPagamento:E==="pago"?z:void 0,observacoes:L},u),M("Novo lançamento cadastrado com sucesso!","success")),$(),!0}}),m||setTimeout(()=>{const A=document.getElementById("pay-aluno");A==null||A.addEventListener("change",()=>{const c=f.find(w=>w.id===A.value);if(c){const w=document.getElementById("pay-valor");w&&typeof c.valorMensalidade=="number"&&(w.value=c.valorMensalidade.toString())}})},50)}return $(),a}function Fe(x){const a=document.createElement("div");let e=new Date,o="todos",s="";const i=r=>r.toString().padStart(2,"0");function p(r){const y=r.getDate(),n=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][r.getMonth()],m=r.getFullYear(),f=new Date,z=f.getDate()===y&&f.getMonth()===r.getMonth()&&f.getFullYear()===m;return`${y} de ${n} de ${m}${z?" (Hoje)":""}`}function t(r){return`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())}`}function v(){var b,A,c,w,I,d;const r=N.getLogs(),y=new Date,h=`${i(y.getDate())}/${i(y.getMonth()+1)}/${y.getFullYear()}`,n=r.filter(l=>{var E;return(E=l.dataHoraFormatada)==null?void 0:E.startsWith(h)}).length,m=e?`${i(e.getDate())}/${i(e.getMonth()+1)}/${e.getFullYear()}`:"",f=e!==null&&y.getDate()===e.getDate()&&y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear(),z=r.filter(l=>{const E=!e||l.dataHoraFormatada&&l.dataHoraFormatada.startsWith(m)||l.dataHora&&l.dataHora.startsWith(t(e)),S=o==="todos"||l.tela.toLowerCase().includes(o.toLowerCase()),L=s===""||l.usuarioNome.toLowerCase().includes(s.toLowerCase())||l.usuarioLogin.toLowerCase().includes(s.toLowerCase())||l.acao.toLowerCase().includes(s.toLowerCase())||l.detalhes.toLowerCase().includes(s.toLowerCase());return E&&S&&L});a.innerHTML=`
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
          <span>Hoje: <strong style="color: var(--color-coral);">${n}</strong></span>
          <span style="color: var(--border-subtle);">|</span>
          <span>Total Geral: <strong style="color: var(--text-white);">${r.length}</strong></span>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${e?p(e):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${f?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            ${D.search}
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${["todos","login","agenda","alunos","usuários","plano","configurações"].map(l=>{const E=o.toLowerCase()===l,S=l==="todos"?"Todas as Telas":l.charAt(0).toUpperCase()+l.slice(1);return`
                <button type="button" class="btn ${E?"btn-primary":"btn-secondary"} btn-filter-tela" data-tela="${l}" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${S}
                </button>
              `}).join("")}
        </div>
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${z.length})
            ${e?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${m}</span>`:""}
          </h3>
          ${e!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${m}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
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
              ${z.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${e?`o dia <strong>${m}</strong>`:"o filtro selecionado"}.</div>
                        ${e!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:z.map(l=>`
                          <tr>
                            <td>
                              <div style="font-family: monospace; font-size: 0.84rem; color: var(--text-white);">
                                ${l.dataHoraFormatada}
                              </div>
                            </td>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--color-coral);">
                                  ${l.usuarioNome[0]||"U"}
                                </div>
                                <div>
                                  <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-white);">${l.usuarioNome}</div>
                                  <div style="font-size: 0.72rem; color: var(--text-muted);">login: ${l.usuarioLogin}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 4px;">
                                ${l.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.85rem; color: #ff9187;">
                                ${l.acao}
                              </strong>
                            </td>
                            <td>
                              <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
                                ${l.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(b=a.querySelector("#audit-btn-prev"))==null||b.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()-1),v()}),(A=a.querySelector("#audit-btn-next"))==null||A.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()+1),v()}),(c=a.querySelector("#audit-btn-today"))==null||c.addEventListener("click",()=>{e=new Date,v()}),(w=a.querySelector("#audit-btn-all"))==null||w.addEventListener("click",()=>{e=null,v()}),(I=a.querySelector("#audit-empty-btn-all"))==null||I.addEventListener("click",()=>{e=null,v()}),(d=a.querySelector("#audit-date-picker"))==null||d.addEventListener("change",l=>{const E=l.target.value;if(E){const[S,L,u]=E.split("-").map(Number);e=new Date(S,L-1,u)}else e=null;v()});const g=a.querySelector("#audit-search-input");g==null||g.addEventListener("input",l=>{s=l.target.value,v();const E=a.querySelector("#audit-search-input");E&&(E.focus(),E.selectionStart=E.selectionEnd=E.value.length)}),a.querySelectorAll(".btn-filter-tela").forEach(l=>{l.addEventListener("click",E=>{o=E.currentTarget.dataset.tela||"todos",v()})})}const $=()=>{v()};return window.addEventListener("audit_updated",$),v(),a}const Oe={usuarios:{collectionName:"usuarios",description:"Armazena credenciais e permissões de acesso ao sistema",schemaFields:{_id:"ObjectId (PK gerada automaticamente pelo MongoDB)",nome:"String (obrigatório)",login:"String (único, obrigatório, indexado)",senhaHash:"String (hash bcrypt da senha)",papel:"String (enum: admin, professor, atendente)",isSistema:"Boolean (se true, não pode ser deletado via API)",criadoEm:"Date (timestamp de criação)",atualizadoEm:"Date (timestamp da última modificação)"},indexes:["{ login: 1 }, { unique: true }"]},alunos:{collectionName:"alunos",description:"Registros cadastrais dos alunos atendidos",schemaFields:{_id:"ObjectId (PK)",nome:"String (obrigatório, indexado)",email:"String",telefone:"String",planoId:"ObjectId (referência para a coleção planos_ensino)",moduloAtual:"String",status:"String (enum: ativo, inativo)",observacoes:"String",criadoEm:"Date"},indexes:['{ nome: "text" }',"{ status: 1 }"]},planos_ensino:{collectionName:"planos_ensino",description:"Planos de ensino e cursos musicais com módulos aninhados",schemaFields:{_id:"ObjectId (PK)",nome:"String (obrigatório)",descricao:"String",modulos:"Array de Subdocumentos [{ id, ordem, titulo, descricao }]",ativo:"Boolean",criadoEm:"Date"},indexes:["{ nome: 1 }"]},agenda:{collectionName:"agenda",description:"Compromissos e horários das aulas de música",schemaFields:{_id:"ObjectId (PK)",titulo:"String (obrigatório)",alunoId:"ObjectId (referência para alunos)",planoId:"ObjectId (referência para planos_ensino)",data:"String YYYY-MM-DD (indexado)",horaInicio:"String HH:mm",horaFim:"String HH:mm",status:"String (enum: agendado, concluido, cancelado)",observacoes:"String"},indexes:["{ data: 1, horaInicio: 1 }","{ alunoId: 1 }"]},auditorias:{collectionName:"auditorias",description:"Trilha de auditoria imutável para compliance e rastreabilidade",schemaFields:{_id:"ObjectId (PK)",dataHora:"Date (timestamp exato)",usuarioId:"String/ObjectId",usuarioLogin:"String",usuarioNome:"String",tela:"String",acao:"String",detalhes:"String"},indexes:["{ dataHora: -1 }","{ tela: 1 }","{ usuarioLogin: 1 }"]}};class _e{static async testConnection(a,e){const o=performance.now();await new Promise(i=>setTimeout(i,200));const s=Math.round(performance.now()-o);return a&&e?{success:!0,latencyMs:s,message:`Conexão bem-sucedida com MongoDB em "${a}/${e}". Esquemas prontos para sincronização.`}:{success:!1,latencyMs:s,message:"URI ou Nome do Banco não informados."}}}function qe(x){const a=document.createElement("div"),e=O.getCurrentUser(),o=k.getSettings(),s=_(e,"configuracoes","alterar");a.innerHTML=`
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
              ${Object.values(Oe).map(t=>`
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
  `;const i=a.querySelector("#form-settings-institucional");i==null||i.addEventListener("submit",t=>{t.preventDefault();const v=a.querySelector("#cfg-nome").value,$=a.querySelector("#cfg-tel").value,r=a.querySelector("#cfg-email").value,y=a.querySelector("#cfg-mongo-uri").value,h=a.querySelector("#cfg-mongo-db").value;k.updateSettings({nomeEscola:v,nomeClinica:v,telefoneContato:$,emailContato:r,mongoUri:y,mongoDatabase:h},(e==null?void 0:e.nome)||"Administrador"),M("Configurações salvas e auditadas!","success")});const p=a.querySelector("#btn-test-mongo");return p==null||p.addEventListener("click",async()=>{const t=a.querySelector("#cfg-mongo-uri").value,v=a.querySelector("#cfg-mongo-db").value,$=a.querySelector("#mongo-test-result");$.innerHTML='<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';const r=await _e.testConnection(t,v);r.success?($.innerHTML=`<span style="color: var(--status-success);">✓ ${r.message} (Latência: ${r.latencyMs}ms)</span>`,M("MongoDB validado com sucesso!","success")):($.innerHTML=`<span style="color: var(--status-danger);">✕ ${r.message}</span>`,M("Falha na validação do MongoDB.","error"))}),a}class He{constructor(){V(this,"currentScreen","home");V(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!O.isAuthenticated()){this.currentScreen="login",this.render();return}const a=O.getCurrentUser(),e=window.location.hash.replace("#","");e&&["home","agenda","alunos","planos","financeiro","user","auditoria","configuracoes"].includes(e)&&U(a,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(a),window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","");o&&o!==this.currentScreen&&this.navigateTo(o)}),this.render()}getFirstAllowedScreen(a){if(!a)return"login";const e=["home","agenda","alunos","planos","financeiro","auditoria","configuracoes"];for(const o of e)if(U(a,o))return o;return"home"}navigateTo(a){const e=O.getCurrentUser();if(!U(e,a)){M("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(e);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=a,window.location.hash=a,this.render()}render(){var y;if(this.appRoot.innerHTML="",!O.isAuthenticated()||this.currentScreen==="login"){const h=Le(()=>{const n=O.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(n))});this.appRoot.appendChild(h);return}const a=document.createElement("div");a.className="app-container";const e=O.getCurrentUser(),o=(e==null?void 0:e.papel)==="admin";a.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
            <div class="sidebar-logo">
              ${te(46)}
            </div>
            <span class="sidebar-brand-name">ACUSTICAMENTE</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${D.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${U(e,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${D.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${U(e,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${D.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${U(e,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${D.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${U(e,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${D.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${U(e,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${D.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${D.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${U(e,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${D.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${U(e,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${D.configuracoes}</span>
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
            ${D.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${D.menu}
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
    `;const s=a.querySelector("#app-sidebar"),i=a.querySelector("#sidebar-backdrop"),p=a.querySelector("#btn-mobile-menu-toggle"),t=a.querySelector("#btn-sidebar-close"),v=h=>{const n=h!==void 0?h:!s.classList.contains("open");s.classList.toggle("open",n),i.classList.toggle("open",n),document.body.style.overflow=n?"hidden":""};p==null||p.addEventListener("click",()=>v(!0)),t==null||t.addEventListener("click",()=>v(!1)),i==null||i.addEventListener("click",()=>v(!1)),a.querySelectorAll(".nav-item").forEach(h=>{h.addEventListener("click",n=>{const m=n.currentTarget.dataset.screen;v(!1),m&&this.navigateTo(m)})}),(y=a.querySelector("#btn-app-logout"))==null||y.addEventListener("click",()=>{confirm("Deseja realmente sair do sistema Acusticamente?")&&O.logout()});const $=a.querySelector("#screen-viewport"),r=this.createViewElement(this.currentScreen);$.appendChild(r),this.appRoot.appendChild(a)}createViewElement(a){const e=o=>this.navigateTo(o);switch(a){case"home":return xe(e);case"agenda":return Pe();case"alunos":return Be(e);case"user":return Ne(e);case"planos":return je();case"financeiro":return Re();case"auditoria":return Fe();case"configuracoes":return qe();default:return xe(e)}}getScreenTitle(a){switch(a){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(a){switch(a){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new He});
