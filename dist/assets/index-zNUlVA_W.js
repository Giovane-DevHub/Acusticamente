var _e=Object.defineProperty;var Ve=($,e,t)=>e in $?_e($,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):$[e]=t;var ne=($,e,t)=>Ve($,typeof e!="symbol"?e+"":e,t);import{E as Te,a as De}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const S of l.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&o(S)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const Be="acusticamente_audit_logs";class He{constructor(){ne(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Be);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Be,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,o=S=>S.toString().padStart(2,"0"),s=`${o(t.getDate())}/${o(t.getMonth()+1)}/${t.getFullYear()} ${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`,l={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(l),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:l})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:l})),l}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const U=new He,Ie="acusticamente_users",we="acusticamente_students",$e="acusticamente_plans",Ee="acusticamente_appointments",ze="acusticamente_settings",Ae="acusticamente_payments";class Ue{constructor(){ne(this,"users",[]);ne(this,"students",[]);ne(this,"plans",[]);ne(this,"appointments",[]);ne(this,"payments",[]);ne(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",website:"www.acusticamente.com.br",cep:"01310-100",logradouro:"Avenida Paulista",numero:"1000",complemento:"Conjunto 42",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});ne(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(Ie);e?this.users=JSON.parse(e).map(a=>{var P,f;return{...a,permissoes:{...a.permissoes,financeiro:((P=a.permissoes)==null?void 0:P.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((f=a.permissoes)==null?void 0:f.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem($e);t?this.plans=JSON.parse(t):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(we);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[],this.saveStudents());const s=localStorage.getItem(Ee);s?this.appointments=JSON.parse(s):(this.appointments=[],this.saveAppointments());const l=localStorage.getItem(ze);l&&(this.settings=JSON.parse(l));const S=localStorage.getItem(Ae);S?this.payments=JSON.parse(S):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(a=>{var P;(P=a.observacoes)!=null&&P.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var P;(P=a.titulo)!=null&&P.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=o=>o.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,o){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:o})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const o=t.data;return Array.isArray(o.students)&&(this.students=o.students,localStorage.setItem(we,JSON.stringify(this.students))),Array.isArray(o.payments)&&(this.payments=o.payments,localStorage.setItem(Ae,JSON.stringify(this.payments))),Array.isArray(o.appointments)&&(this.appointments=o.appointments,localStorage.setItem(Ee,JSON.stringify(this.appointments))),Array.isArray(o.plans)&&(this.plans=o.plans,localStorage.setItem($e,JSON.stringify(this.plans))),Array.isArray(o.users)&&o.users.length>0&&(this.users=o.users,localStorage.setItem(Ie,JSON.stringify(this.users))),o.settings&&(this.settings={...this.settings,...o.settings},localStorage.setItem(ze,JSON.stringify(this.settings))),Array.isArray(o.audit)&&(o.audit.length===0?U.clearLocalOnly():U.setLogs(o.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(we,JSON.stringify([])),localStorage.setItem(Ae,JSON.stringify([])),localStorage.setItem(Ee,JSON.stringify([])),localStorage.setItem($e,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await U.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Ie,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(we,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem($e,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Ee,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Ae,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}saveSettings(){localStorage.setItem(ze,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const o={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(e,t,o){const s=this.users.findIndex(a=>a.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const l=this.users[s],S=l.isSistema;return this.users[s]={...l,...t,isSistema:S,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${l.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const o=this.users.find(s=>s.id===e);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(e,t){const o={...e,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(e,t,o){const s=this.students.findIndex(S=>S.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const l=this.students[s];return this.students[s]={...l,...t},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${l.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const o=this.students.find(s=>s.id===e);o&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const o={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(e,t,o){const s=this.plans.findIndex(S=>S.id===e);if(s===-1)throw new Error("Plano não encontrado.");const l=this.plans[s];return this.plans[s]={...l,...t},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${l.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const o=this.plans.find(s=>s.id===e);o&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(e,t){const o={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(e,t,o){const s=this.appointments.findIndex(S=>S.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const l=this.appointments[s];return this.appointments[s]={...l,...t},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${l.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const o=this.appointments.find(s=>s.id===e);o&&(this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(e,t){const o=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(e,t,o,s){const l=t?"falta_justificada":"falta_injustificada",S=this.updateAppointment(e,{status:l,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(f=>f.id===S.alunoId);let P=(a==null?void 0:a.saldoReposicoes)||0;return t&&a?(P=(a.saldoReposicoes||0)+1,a.saldoReposicoes=P,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${S.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${P}. Motivo: ${o||"Não especificado"}`})):!t&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${S.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:S,saldoReposicoes:P}}agendarReposicao(e,t,o){const s=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},o);if(t){const S=this.appointments.findIndex(a=>a.id===t);S!==-1&&(this.appointments[S].aulaReposicaoId=s.id,this.saveAppointments())}const l=this.students.find(S=>S.id===s.alunoId);return l&&typeof l.saldoReposicoes=="number"&&l.saldoReposicoes>0&&(l.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${l.nome}". 1 crédito abatido. Saldo restante: ${l.saldoReposicoes}.`})),s}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,o)=>{const s=`${t.data}T${t.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<e&&(o.status="atrasado",t=!0)}),t&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(o=>o.alunoId===e&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<t))}addPayment(e,t){const o=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<o&&(s="atrasado");const l={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(l),this.savePayments();const S=this.students.find(a=>a.id===l.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${l.descricao}" (R$ ${l.valor.toFixed(2)}) cadastrado para o aluno "${(S==null?void 0:S.nome)||"N/A"}" com vencimento em ${l.dataVencimento}.`}),l}darBaixaPayment(e,t,o,s,l){const S=this.payments.findIndex(p=>p.id===e);if(S===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[S],P=a.status;a.status="pago",a.dataPagamento=t,a.formaPagamento=o,l!==void 0&&(a.observacoes=l.trim()?l.trim():a.observacoes),this.savePayments();const f=this.students.find(p=>p.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(f==null?void 0:f.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${t} (Status anterior: ${P}).`}),a}updatePayment(e,t,o){const s=this.payments.findIndex(p=>p.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const l=this.getTodayDateString();let S=t.status||this.payments[s].status;const a=t.dataVencimento||this.payments[s].dataVencimento;S==="pendente"&&a<l&&(S="atrasado"),this.payments[s]={...this.payments[s],...t,status:S},this.savePayments();const P=this.payments[s],f=this.students.find(p=>p.id===P.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${P.descricao}" do aluno "${(f==null?void 0:f.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const o=this.payments.find(l=>l.id===e);if(!o)return;this.payments=this.payments.filter(l=>l.id!==e),this.savePayments();const s=this.students.find(l=>l.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,o){const s=A=>A.toString().padStart(2,"0"),l=`${e}-${s(t)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||l,P=this.students.filter(A=>A.status==="ativo");let f=0,p=0;return P.forEach(A=>{if(this.payments.some(v=>v.alunoId===A.id&&(v.mesReferencia===l||v.dataVencimento.startsWith(l)))){p++;return}const r=A.diaVencimento||10,m=new Date(e,t,0).getDate(),x=Math.min(r,m),g=`${e}-${s(t)}-${s(x)}`,i=typeof A.valorMensalidade=="number"&&A.valorMensalidade>0?A.valorMensalidade:280;this.addPayment({alunoId:A.id,descricao:`Mensalidade ${a}/${e}`,mesReferencia:l,valor:i,dataVencimento:g,status:"pendente",observacoes:`Gerado automaticamente para o plano ${A.moduloAtual||A.instrumentoPrincipal||"Música"}`},o),f++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${e}: ${f} mensalidade(s) criada(s) e ${p} já existente(s) pulada(s).`}),{criadas:f,puladas:p}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const C=new Ue,ge={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function ke($){var s,l,S,a,P,f,p,A,M,r,m,x,g,i,v,b,E,h,z,L,n,u,y,d,c,k,_,O;if(!$)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if($.papel==="admin")return JSON.parse(JSON.stringify(ge.admin));const e=ge[$.papel]||ge.professor,t=$.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const o=F=>typeof F=="boolean";return{alunos:{acesso:o(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:o(t.alunos)?t.alunos:((l=t.alunos)==null?void 0:l.cadastrar)??e.alunos.cadastrar,alterar:o(t.alunos)?t.alunos:((S=t.alunos)==null?void 0:S.alterar)??e.alunos.alterar,excluir:o(t.alunos)?!1:((a=t.alunos)==null?void 0:a.excluir)??e.alunos.excluir},agenda:{acesso:o(t.agenda)?t.agenda:((P=t.agenda)==null?void 0:P.acesso)??e.agenda.acesso,cadastrar:o(t.agenda)?t.agenda:((f=t.agenda)==null?void 0:f.cadastrar)??e.agenda.cadastrar,alterar:o(t.agenda)?t.agenda:((p=t.agenda)==null?void 0:p.alterar)??e.agenda.alterar,excluir:o(t.agenda)?!1:((A=t.agenda)==null?void 0:A.excluir)??e.agenda.excluir},planos:{acesso:o(t.planos)?t.planos:((M=t.planos)==null?void 0:M.acesso)??e.planos.acesso,cadastrar:o(t.planos)?t.planos:((r=t.planos)==null?void 0:r.cadastrar)??e.planos.cadastrar,alterar:o(t.planos)?t.planos:((m=t.planos)==null?void 0:m.alterar)??e.planos.alterar,excluir:o(t.planos)?!1:((x=t.planos)==null?void 0:x.excluir)??e.planos.excluir},home:{acesso:o(t.home)?t.home:((g=t.home)==null?void 0:g.acesso)??e.home.acesso},financeiro:{acesso:o(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.acesso)??((v=e.financeiro)==null?void 0:v.acesso)??!1,cadastrar:o(t.financeiro)?t.financeiro:((b=t.financeiro)==null?void 0:b.cadastrar)??((E=e.financeiro)==null?void 0:E.cadastrar)??!1,alterar:o(t.financeiro)?t.financeiro:((h=t.financeiro)==null?void 0:h.alterar)??((z=e.financeiro)==null?void 0:z.alterar)??!1,excluir:o(t.financeiro)?!1:((L=t.financeiro)==null?void 0:L.excluir)??((n=e.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(t.relatorios)?t.relatorios:((u=t.relatorios)==null?void 0:u.acesso)??((y=e.relatorios)==null?void 0:y.acesso)??!0,gerar:o(t.relatorios)?t.relatorios:((d=t.relatorios)==null?void 0:d.gerar)??((c=e.relatorios)==null?void 0:c.gerar)??!0},auditoria:{acesso:o(t.auditoria)?t.auditoria:((k=t.auditoria)==null?void 0:k.acesso)??e.auditoria.acesso},configuracoes:{acesso:o(t.configuracoes)?t.configuracoes:((_=t.configuracoes)==null?void 0:_.acesso)??e.configuracoes.acesso,alterar:o(t.configuracoes)?t.configuracoes:((O=t.configuracoes)==null?void 0:O.alterar)??e.configuracoes.alterar}}}function ie($,e){if(!$)return!1;if(e==="login")return!0;if(e==="user")return $.papel==="admin";if($.papel==="admin"||$.isSistema)return!0;const o=ke($)[e];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function X($,e,t){if(!$)return!1;if($.papel==="admin")return!0;const s=ke($)[e];return s?!!s[t]:!1}const Se="acusticamente_active_session";class Je{constructor(){ne(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(Se);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=C.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(Se,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=C.getUsers().find(l=>l.login===e.trim());return s?s.senha!==t.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Se,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Se),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const Y=new Je;function Ge($=40){return`
    <svg width="${$}" height="${$}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function ue($,e=40){return $&&$.trim()!==""?`<img src="${$}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:Ge(e)}function B($,e="success"){const t=document.getElementById("toast-container");if(!t)return;const o=document.createElement("div");o.className=`toast toast-${e}`,o.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${$}</span>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function re($){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${$.modalClass||""}">
        <div class="modal-header">
          <h3>${$.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${$.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${$.cancelText||"Cancelar"}</button>
          ${$.confirmText?`<button type="button" class="btn ${$.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${$.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const t=document.getElementById("active-modal-backdrop"),o=document.getElementById("modal-close-btn"),s=document.getElementById("modal-cancel-btn"),l=document.getElementById("modal-confirm-btn"),S=()=>{e.innerHTML="",$.onCancel&&$.onCancel()};o.onclick=S,s.onclick=S,t.onclick=a=>{a.target===t&&S()},l&&$.onConfirm&&(l.onclick=async()=>{const a=document.querySelector(".modal-card");await $.onConfirm(a)!==!1&&(e.innerHTML="")})}function ve(){const $=document.getElementById("modal-container");$&&($.innerHTML="")}function fe($){re({title:$.title||"Confirmar Exclusão",bodyHtml:`
      <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
          ⚠️
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
            ${$.message}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Esta operação não poderá ser desfeita.
          </div>
        </div>
      </div>
    `,confirmText:$.confirmText||"Excluir Definitivamente",confirmBtnClass:$.confirmBtnClass||"btn-danger",onConfirm:()=>($.onConfirm(),!0)})}const R={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},Le="acusticamente_auth_remember",Fe="acusticamente_manual_logout";function Ye($){const e=document.createElement("div");e.className="login-page";const t=C.getSettings(),o=t.nomeMenu||t.nomeFantasia||"Acusticamente";let s={username:"",password:"",remember:!1,autoLogin:!1};try{const f=localStorage.getItem(Le);f&&(s={...s,...JSON.parse(f)})}catch{s={username:"",password:"",remember:!1,autoLogin:!1}}e.innerHTML=`
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
  `;const l=e.querySelector("#login-remember"),S=e.querySelector("#login-autologin");S==null||S.addEventListener("change",()=>{S.checked&&!l.checked&&(l.checked=!0)}),l==null||l.addEventListener("change",()=>{!l.checked&&S.checked&&(S.checked=!1)});const a=e.querySelector("#login-form");a.onsubmit=f=>{var i;f.preventDefault();const p=e.querySelector("#login-username"),A=e.querySelector("#login-password"),M=p.value.trim(),r=A.value.trim(),m=l.checked,x=S.checked,g=Y.login(M,r);g.success?(m?localStorage.setItem(Le,JSON.stringify({username:M,password:r,remember:!0,autoLogin:x})):localStorage.removeItem(Le),sessionStorage.removeItem(Fe),B(`Bem-vindo, ${(i=g.user)==null?void 0:i.nome}!`,"success"),$()):B(g.message,"error")};const P=sessionStorage.getItem(Fe)==="true";return s.autoLogin&&s.remember&&s.username&&s.password&&!P&&setTimeout(()=>{var p;if(!e.isConnected&&!document.body.contains(e))return;const f=Y.login(s.username,s.password);f.success&&(B(`Bem-vindo de volta, ${(p=f.user)==null?void 0:p.nome}!`,"success"),$())},100),e}function Ne($){var p,A;const e=document.createElement("div"),t=Y.getCurrentUser(),o=C.getStudents(),s=C.getPlans(),l=C.getAppointments(),S=C.getTodayDateString(),a=l.filter(M=>M.data===S),P=o.filter(M=>M.status==="ativo").length,f=a.find(M=>M.status==="agendado");return e.innerHTML=`
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
          <span class="metric-value">${f?f.horaInicio:"--:--"}</span>
          <span class="metric-label">${f?"Próxima aula":"Nenhuma pendente"}</span>
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
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(M=>{const r=o.find(v=>v.id===M.alunoId),m=s.find(v=>v.id===M.planoId),x=M.status==="concluido",g=M.status==="agendado";let i='<span class="badge badge-warning">⏳ Agendado</span>';return x?i='<span class="badge badge-success">✓ Concluído</span>':M.status==="falta_justificada"?i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':M.status==="falta_injustificada"?i='<span class="badge badge-danger">✕ Falta Injustificada</span>':M.status==="cancelado"&&(i='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
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
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(m==null?void 0:m.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${i}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${g?`<button class="btn btn-secondary btn-complete-class" data-id="${M.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${x?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(p=e.querySelector("#home-btn-new-appointment"))==null||p.addEventListener("click",()=>{$("agenda")}),(A=e.querySelector("#home-btn-view-all-agenda"))==null||A.addEventListener("click",()=>{$("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(M=>{M.addEventListener("click",r=>{const m=r.currentTarget.dataset.id;m&&(C.updateAppointment(m,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),B("Aula concluída com sucesso!","success"),$("home"))})}),e}function We($){const e=document.createElement("div"),t=Y.getCurrentUser();let o=new Date;function s(){var E,h,z,L;const a=C.getStudents();C.getPlans();const P=C.getAppointments(),f=o.getFullYear(),p=o.getMonth(),A=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],M=new Date(f,p,1).getDay(),r=new Date(f,p+1,0).getDate(),m=new Date(f,p,0).getDate(),x=new Date,g=x.getFullYear()===f&&x.getMonth()===p,i=[];for(let n=M;n>0;n--){const u=m-n+1;i.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${u}</span>
          </div>
        </div>
      `)}for(let n=1;n<=r;n++){const u=F=>F.toString().padStart(2,"0"),y=`${f}-${u(p+1)}-${u(n)}`,d=g&&x.getDate()===n,c=P.filter(F=>F.data===y),k=c.slice(0,3).map(F=>{const I=a.find(V=>V.id===F.alunoId),T=I?I.nome.split(" ")[0]:"Aula";let D="",q="";return F.status==="concluido"?(D="concluido",q="✓ "):F.status==="falta_justificada"?(D="falta-justificada",q="⚠️ "):F.status==="falta_injustificada"?(D="falta-injustificada",q="✕ "):F.tipoAula==="reposicao"&&(D="reposicao",q="🔄 "),`
            <div class="calendar-appointment-badge ${D}" 
                 data-app-id="${F.id}" 
                 title="${F.horaInicio} - ${(I==null?void 0:I.nome)||"Aluno"} (${F.status}${F.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${q}${F.horaInicio}</strong> ${T}
            </div>
          `}).join(""),_=c.length>3?c.length-3:0,O=_>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${_} mais</div>`:"";i.push(`
        <div class="calendar-day-cell ${d?"today":""}" data-date="${y}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${c.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${c.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${k}
            ${O}
          </div>
        </div>
      `)}const v=i.length,b=v>35?42-v:35-v;for(let n=1;n<=b;n++)i.push(`
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
            <h2 class="calendar-month-title">${A[p]} de ${f}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${g?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${X(t,"agenda","cadastrar")?`
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
    `,(E=e.querySelector("#agenda-btn-prev"))==null||E.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(h=e.querySelector("#agenda-btn-next"))==null||h.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(z=e.querySelector("#agenda-btn-today"))==null||z.addEventListener("click",()=>{o=new Date,s()}),(L=e.querySelector("#agenda-btn-new-app"))==null||L.addEventListener("click",()=>{S()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",u=>{const y=n.dataset.date;y&&l(y)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",u=>{u.stopPropagation();const y=n.dataset.appId,d=P.find(c=>c.id===y);d&&l(d.data)})})}function l(a){const P=C.getStudents(),f=C.getPlans(),p=C.getAppointments().filter(i=>i.data===a),[A,M,r]=a.split("-"),m=`${r}/${M}/${A}`,x=p.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${p.map(i=>{const v=P.find(c=>c.id===i.alunoId),b=f.find(c=>c.id===i.planoId),E=i.status==="concluido",h=i.status==="falta_justificada",z=i.status==="falta_injustificada",L=i.status==="cancelado",n=i.status==="agendado",u=i.tipoAula==="reposicao";let y="var(--color-coral)",d='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return E?(y="var(--status-success)",d='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):h?(y="#f59e0b",d='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):z?(y="var(--status-danger)",d='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):L&&(y="var(--border-subtle)",d='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${y};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${i.horaInicio} - ${i.horaFim}</strong>
                        ${d}
                        ${u?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${i.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(v==null?void 0:v.nome)||"Não vinculado"}</strong>
                        ${v!=null&&v.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${v.instrumentoPrincipal}</span>`:""}
                        ${b?` &bull; Plano: <span style="color: #ff9187;">${b.nome}</span>`:""}
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
                      ${X(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${i.id}" title="Editar Detalhes">
                              ${R.edit}
                            </button>
                          `:""}
                      ${X(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${i.id}" title="Excluir">
                              ${R.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${X(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${n?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${i.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${i.id}" data-name="${(v==null?void 0:v.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${i.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${h&&!i.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${i.id}" data-student-id="${i.alunoId}" data-title="${i.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,g=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${p.length}</strong>
          </span>
          ${X(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${R.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${x}
      </div>
    `;re({title:`Aulas do Dia: ${m}`,bodyHtml:g,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var i;(i=document.getElementById("btn-modal-new-appointment"))==null||i.addEventListener("click",()=>{ve(),S({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id;E&&(C.marcarPresenca(E,(t==null?void 0:t.nome)||"Administrador"),B("Presença confirmada e aula concluída!","success"),s(),l(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id,h=b.currentTarget.dataset.name;if(!E)return;const z=prompt(`Informe o motivo da falta justificada de ${h} (Ex: Atestado médico, Viagem em família):`);if(z===null)return;const L=C.registrarFalta(E,!0,z,(t==null?void 0:t.nome)||"Administrador");B(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${L.saldoReposicoes}).`,"success"),s(),l(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id;E&&fe({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{C.registrarFalta(E,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),B("Falta injustificada registrada.","info"),s(),l(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget,h=E.dataset.id,z=E.dataset.studentId,L=E.dataset.title;ve(),S({studentId:z,aulaOriginalId:h,tipoAula:"reposicao",titulo:L?`Reposição: ${L}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id,h=C.getAppointments().find(z=>z.id===E);h&&(ve(),S({existingApp:h}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id,h=C.getAppointments().find(z=>z.id===E);h&&fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${h.titulo}</strong>"?`,onConfirm:()=>{C.deleteAppointment(h.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),s(),l(a)}})})})},50)}function S(a){const P=C.getStudents(),f=C.getPlans(),p=a==null?void 0:a.existingApp,A=!!p,M=(p==null?void 0:p.alunoId)||(a==null?void 0:a.studentId)||"",r=(p==null?void 0:p.data)||(a==null?void 0:a.defaultDate)||C.getTodayDateString(),m=((p==null?void 0:p.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",x=P.map(v=>`<option value="${v.id}" ${M===v.id?"selected":""}>${v.nome} (${v.instrumentoPrincipal||"Geral"}) - Saldo: ${v.saldoReposicoes||0} rep.</option>`).join(""),g=f.map(v=>`<option value="${v.id}" ${(p==null?void 0:p.planoId)===v.id?"selected":""}>${v.nome}</option>`).join(""),i=`
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
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Módulo 2" value="${(p==null?void 0:p.titulo)||(a==null?void 0:a.titulo)||""}" required />
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
            ${g}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${r}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${(p==null?void 0:p.horaInicio)||"09:00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${(p==null?void 0:p.horaFim)||"10:00"}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-status">Status da Aula</label>
            <select id="app-status" class="form-select">
              <option value="agendado" ${(p==null?void 0:p.status)==="agendado"?"selected":""}>⏳ Agendado</option>
              <option value="concluido" ${(p==null?void 0:p.status)==="concluido"?"selected":""}>✓ Concluído / Presente</option>
              <option value="falta_justificada" ${(p==null?void 0:p.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
              <option value="falta_injustificada" ${(p==null?void 0:p.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
              <option value="cancelado" ${(p==null?void 0:p.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;" id="box-justificativa">
            <label class="form-label" for="app-justificativa">Justificativa da Falta (se houver)</label>
            <input type="text" id="app-justificativa" class="form-input" placeholder="Ex: Atestado, viagem, imprevisto..." value="${(p==null?void 0:p.justificativaFalta)||""}" />
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-obs">Observações / Orientações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Repertório trabalhado, exercícios para casa...">${(p==null?void 0:p.observacoes)||""}</textarea>
        </div>

        ${A?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${R.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;re({title:A?"Editar Aula / Compromisso":m?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:i,confirmText:A?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const v=document.getElementById("app-title").value.trim(),b=document.getElementById("app-student").value,E=document.getElementById("app-plan").value,h=document.getElementById("app-date").value,z=document.getElementById("app-time-start").value,L=document.getElementById("app-time-end").value,n=document.getElementById("app-status").value,u=document.getElementById("app-justificativa").value.trim(),y=document.getElementById("app-obs").value.trim(),d=document.querySelector('input[name="app-tipo-aula"]:checked'),c=(d==null?void 0:d.value)||"regular";if(!v||!b||!h||!z)return B("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const k=(t==null?void 0:t.nome)||"Administrador";return A&&p?(C.updateAppointment(p.id,{titulo:v,alunoId:b,planoId:E||void 0,data:h,horaInicio:z,horaFim:L,status:n,tipoAula:c,justificativaFalta:u||void 0,observacoes:y},k),B("Aula atualizada com sucesso!","success")):c==="reposicao"?(C.agendarReposicao({titulo:v,alunoId:b,planoId:E||void 0,data:h,horaInicio:z,horaFim:L,status:n,justificativaFalta:u||void 0,observacoes:y},a==null?void 0:a.aulaOriginalId,k),B("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(C.addAppointment({titulo:v,alunoId:b,planoId:E||void 0,data:h,horaInicio:z,horaFim:L,status:n,tipoAula:c,justificativaFalta:u||void 0,observacoes:y},k),B("Aula agendada com sucesso!","success")),s(),!0}}),A&&p&&setTimeout(()=>{var v;(v=document.getElementById("btn-delete-app"))==null||v.addEventListener("click",()=>{fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${p.titulo}</strong>"?`,onConfirm:()=>{C.deleteAppointment(p.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),ve(),s()}})})},50)}return s(),e}const Xe=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function Re($){const e=($||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function Qe($){if(!$)return"";const e=new Date($+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,`${o} anos`}function Ke($,e){const t=$.replace(/\D/g,"");if(!t)return"";const o=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function qe($,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${$.id.toUpperCase()}</div>
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
              <strong>${$.descricao}</strong>
              ${$.observacoes?`<br><small style="color: #6b7280;">${$.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${$.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${$.dataPagamento?$.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${$.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${$.formaPagamento?t[$.formaPagamento]||$.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${$.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;re({title:`Recibo de Pagamento: ${$.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function Ze($){const e=document.createElement("div"),t=Y.getCurrentUser();let o="";function s(){var m,x;const a=C.getStudents(),P=C.getPlans(),f=X(t,"alunos","cadastrar"),p=X(t,"alunos","alterar"),A=X(t,"alunos","excluir"),M=a.filter(g=>g.nome.toLowerCase().includes(o.toLowerCase())||g.email.toLowerCase().includes(o.toLowerCase())||g.telefone.includes(o)||g.instrumentoPrincipal&&g.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||g.responsavelNome&&g.responsavelNome.toLowerCase().includes(o.toLowerCase()));e.innerHTML=`
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

        ${f?`
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
              ${M.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':M.map(g=>{const i=P.find(b=>b.id===g.planoId),v=g.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${g.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${g.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${Re(g.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${g.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${g.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${(i==null?void 0:i.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${v?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${v?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${g.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${R.profile}
                                </button>
                                ${p?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${g.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${R.edit}
                                      </button>
                                    `:""}
                                ${A?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${g.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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
    `;const r=e.querySelector("#student-search-input");r==null||r.addEventListener("input",g=>{o=g.target.value,s();const i=e.querySelector("#student-search-input");i&&(i.focus(),i.selectionStart=i.selectionEnd=i.value.length)}),(m=e.querySelector("#btn-clear-search"))==null||m.addEventListener("click",()=>{o="",s()}),(x=e.querySelector("#btn-new-student"))==null||x.addEventListener("click",()=>{S()}),e.querySelectorAll(".btn-view-student").forEach(g=>{g.addEventListener("click",i=>{const v=i.currentTarget.dataset.id,b=C.getStudents().find(E=>E.id===v);b&&l(b)})}),e.querySelectorAll(".btn-edit-student").forEach(g=>{g.addEventListener("click",i=>{const v=i.currentTarget.dataset.id,b=C.getStudents().find(E=>E.id===v);b&&S(b)})}),e.querySelectorAll(".btn-delete-student").forEach(g=>{g.addEventListener("click",i=>{const v=i.currentTarget.dataset.id,b=C.getStudents().find(E=>E.id===v);b&&fe({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${b.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{C.deleteStudent(b.id,(t==null?void 0:t.nome)||"Administrador"),B(`Aluno "${b.nome}" excluído.`,"info"),s()}})})})}function l(a){C.getPlans().find(n=>n.id===a.planoId);const f=C.getStudentAppointments(a.id),p=C.getStudentPayments(a.id),A=Qe(a.dataNascimento),M=Ke(a.telefone,a.nome),r=a.saldoReposicoes||0,m=C.isStudentOverdue(a.id),x=a.status==="ativo",g=X(t,"financeiro","alterar"),i=f.length,v=f.filter(n=>n.status==="concluido").length,b=f.filter(n=>n.status==="falta_justificada").length,E=f.filter(n=>n.status==="falta_injustificada").length,h=p.filter(n=>n.status==="pago").reduce((n,u)=>n+u.valor,0),z=p.filter(n=>n.status!=="pago").reduce((n,u)=>n+u.valor,0),L=`
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
              ${m?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${p.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${v}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${b+E}</div>
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
                Aulas Recentes (${f.length})
              </span>
              ${r>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${r})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${f.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
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
                        ${f.map(n=>{const u=n.data.split("-").reverse().join("/");let y="";n.status==="concluido"?y='<span class="badge badge-success" style="font-size: 0.62rem;">Presente</span>':n.status==="falta_justificada"?y='<span class="badge badge-warning" style="font-size: 0.62rem;">Falta Just.</span>':n.status==="falta_injustificada"?y='<span class="badge badge-danger" style="font-size: 0.62rem;">Falta</span>':n.status==="cancelado"?y='<span class="badge badge-secondary" style="font-size: 0.62rem;">Cancelado</span>':y='<span class="badge badge-secondary" style="font-size: 0.62rem;">Agendado</span>';const d=n.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong>${u}</strong>
                                <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 4px;">${n.horaInicio}</span>
                              </td>
                              <td><div style="color: var(--text-white); font-weight: 500;">${n.titulo}</div></td>
                              <td class="col-hide-sm">${d}</td>
                              <td>${y}</td>
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
              ${m?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
                R$ ${h.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${z>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${z.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${p.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${p.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${p.map(n=>{const u=n.status==="pago",y=n.status==="atrasado";let d="";return u?d='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':y?d='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':d='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${n.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${n.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${n.valor.toFixed(2)}</td>
                              <td>${d}</td>
                              <td class="col-hide-sm">${n.dataPagamento?n.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${u?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${n.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:g?`
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
    `;re({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:L,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var c;const n=document.getElementById("btn-tab-pedagogico"),u=document.getElementById("btn-tab-financeiro"),y=document.getElementById("panel-tab-pedagogico"),d=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),u==null||u.classList.remove("active"),y&&(y.style.display="flex"),d&&(d.style.display="none")}),u==null||u.addEventListener("click",()=>{u.classList.add("active"),n==null||n.classList.remove("active"),d&&(d.style.display="flex"),y&&(y.style.display="none")}),(c=document.getElementById("btn-quick-schedule-reposicao"))==null||c.addEventListener("click",()=>{ve(),$("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(k=>{k.addEventListener("click",_=>{const O=_.currentTarget.dataset.id,F=p.find(I=>I.id===O);F&&qe(F,a)})}),document.querySelectorAll(".btn-pay-now").forEach(k=>{k.addEventListener("click",_=>{const O=_.currentTarget.dataset.id,F=p.find(D=>D.id===O);if(!F)return;const I=C.getTodayDateString(),T=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${F.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${F.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${F.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${a.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${I}" required />
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
          `;re({title:`Dar Baixa: ${F.descricao}`,bodyHtml:T,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const D=document.getElementById("baixa-data").value,q=document.getElementById("baixa-forma").value,V=document.getElementById("baixa-obs").value;if(!D)return B("Informe a data de recebimento.","error"),!1;const G=(t==null?void 0:t.nome)||"Administrador";C.darBaixaPayment(F.id,D,q,G,V),B(`Baixa de R$ ${F.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const Z=C.getStudents().find(J=>J.id===a.id)||a;return l(Z),setTimeout(()=>{var J;(J=document.getElementById("btn-tab-financeiro"))==null||J.click()},50),!0}})})})},50)}function S(a){const P=C.getPlans(),f=!!a,p=a?C.getStudentPayments(a.id):[],A=P.map(m=>`<option value="${m.id}" ${(a==null?void 0:a.planoId)===m.id?"selected":""}>${m.nome}</option>`).join(""),M=Xe.map(m=>`<option value="${m}" ${(a==null?void 0:a.instrumentoPrincipal)===m?"selected":""}>${m}</option>`).join(""),r=`
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
              ${p.length>0?`<span style="font-size: 0.72rem; color: var(--text-muted);">${p.length} lançamento(s)</span>`:""}
            </div>

            <div style="max-height: 155px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${a?p.length===0?'<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado para este aluno.</div>':`
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
                        ${p.map(m=>{const x=m.dataVencimento.split("-").reverse().join("/"),g=m.dataPagamento?m.dataPagamento.split("-").reverse().join("/"):"-";let i="";return m.status==="pago"?i='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':m.status==="atrasado"?i='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':i='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${m.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${x}</td>
                              <td class="col-hide-sm" style="padding: 6px 10px; color: ${m.dataPagamento?"var(--text-white)":"var(--text-muted)"};">${g}</td>
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
    `;re({title:f?`Editar Aluno: ${a.nome}`:"Cadastrar Novo Aluno",bodyHtml:r,modalClass:"modal-lg",confirmText:f?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var T,D;const m=document.getElementById("student-nome").value.trim(),x=document.getElementById("student-nascimento").value,g=document.getElementById("student-email").value.trim(),i=document.getElementById("student-telefone").value.trim(),v=document.getElementById("student-resp-nome").value.trim(),b=document.getElementById("student-resp-parentesco").value,E=document.getElementById("student-resp-tel").value.trim(),h=document.getElementById("student-instrumento").value,z=document.getElementById("student-nivel").value,L=document.getElementById("student-plano").value,n=document.getElementById("student-status").value,u=document.getElementById("student-modulo").value.trim(),y=document.getElementById("student-saldo-reposicoes").value,d=Math.max(0,parseInt(y,10)||0),c=(T=document.getElementById("student-valor-mensalidade"))==null?void 0:T.value,k=Math.max(0,parseFloat(c)||280),_=(D=document.getElementById("student-dia-vencimento"))==null?void 0:D.value,O=Math.min(31,Math.max(1,parseInt(_,10)||10)),F=document.getElementById("student-obs").value.trim();if(!m)return B("Informe o nome do aluno.","error"),!1;const I=(t==null?void 0:t.nome)||"Administrador";return f&&a?(C.updateStudent(a.id,{nome:m,dataNascimento:x,email:g,telefone:i,responsavelNome:v,responsavelParentesco:b,responsavelTelefone:E,instrumentoPrincipal:h,nivelMusical:z,planoId:L,status:n,moduloAtual:u,saldoReposicoes:d,valorMensalidade:k,diaVencimento:O,observacoes:F},I),B("Dados do aluno atualizados com sucesso!","success")):(C.addStudent({nome:m,dataNascimento:x,email:g,telefone:i,responsavelNome:v,responsavelParentesco:b,responsavelTelefone:E,instrumentoPrincipal:h,nivelMusical:z,planoId:L,status:n,moduloAtual:u,saldoReposicoes:d,valorMensalidade:k,diaVencimento:O,observacoes:F},I),B("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const m=document.querySelectorAll(".btn-form-tab"),x=document.querySelectorAll(".form-tab-panel");m.forEach(g=>{g.addEventListener("click",i=>{const v=i.currentTarget.dataset.tab;m.forEach(b=>{b.classList.remove("active")}),i.currentTarget.classList.add("active"),x.forEach(b=>{b.style.display=b.id===`form-panel-${v}`?"flex":"none"})})})},50)}return s(),e}const pe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],je=pe.reduce(($,e)=>$+e.items.length,0);function et($){let e=0;return pe.forEach(t=>{const o=$[t.key];o&&t.items.forEach(s=>{o[s.key]&&e++})}),e}function tt($){var S;const e=document.createElement("div"),t=Y.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(S=e.querySelector("#btn-unauth-home"))==null||S.addEventListener("click",()=>$("home")),e;let o="";function s(){var A,M;const a=C.getUsers(),P=o.toLowerCase(),f=a.filter(r=>r.nome.toLowerCase().includes(P)||r.login.toLowerCase().includes(P)||r.papel.toLowerCase().includes(P));e.innerHTML=`
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
          <h3 class="panel-card-title">Usuários Cadastrados (${f.length})</h3>
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
              ${f.map(r=>{const m=r.papel==="admin"?"Administrador":r.papel==="professor"?"Professor":"Atendente",x=ke(r),g=et(x);return`
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
                          ${m}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${r.papel==="admin"?"badge-coral":g>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${r.papel==="admin"?`Acesso Total (${je})`:`${g} de ${je} ações`}
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
    `,(A=e.querySelector("#btn-new-user"))==null||A.addEventListener("click",()=>{l()});const p=e.querySelector("#user-search-input");p&&p.addEventListener("input",r=>{o=r.target.value,s();const m=e.querySelector("#user-search-input");m&&(m.focus(),m.setSelectionRange(m.value.length,m.value.length))}),(M=e.querySelector("#btn-clear-search"))==null||M.addEventListener("click",()=>{o="",s()}),e.querySelectorAll(".btn-edit-user").forEach(r=>{r.addEventListener("click",m=>{const x=m.currentTarget.dataset.id,g=C.getUsers().find(i=>i.id===x);g&&l(g)})}),e.querySelectorAll(".btn-delete-user").forEach(r=>{r.addEventListener("click",m=>{const x=m.currentTarget.dataset.id,g=C.getUsers().find(i=>i.id===x);g&&fe({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${g.nome}</strong>" (login: <code>${g.login}</code>)?`,onConfirm:()=>{try{C.deleteUser(g.id,(t==null?void 0:t.nome)||"Administrador"),B(`Usuário "${g.nome}" excluído.`,"info"),s()}catch(i){B(i.message||"Erro ao excluir usuário.","error")}}})})})}function l(a){var i,v,b,E;const P=!!a,f=a?a.papel:"professor",p=f==="admin",A=ke(a),M=`
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
            <option value="admin" ${f==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${f==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${f==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${a!=null&&a.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${p?"none":"block"};">
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
            ${pe.map(h=>{const z=A[h.key]||{},L=h.items.filter(n=>z[n.key]).length;return`
                <div class="perm-group-card" id="card-group-${h.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${h.key}" 
                    data-group="${h.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${h.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${h.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${h.title}
                        </strong>
                        <span id="group-counter-${h.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${L}/${h.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${h.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${h.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${h.items.map(n=>{const u=!!z[n.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${h.key}-${n.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${u?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${u?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${h.key}-${n.key}" 
                                data-group="${h.key}" 
                                data-action="${n.key}" 
                                ${u?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${n.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${h.key}-${n.key}" 
                              class="badge ${u?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${u?"Liberado":"Bloqueado"}
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
    `;re({title:P?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:M,modalClass:"modal-lg",confirmText:P?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var k,_,O,F,I,T,D,q,V,G,Z,J,K,W,le,te,de,ae,j,oe,Q,me;const h=document.getElementById("user-nome").value.trim(),z=document.getElementById("user-login").value.trim(),L=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),u=n?n.value:"professor";if(!h||!z||!L)return B("Preencha Nome, Login e Senha.","error"),!1;if(C.getUsers().find(N=>N.login===z&&N.id!==(a==null?void 0:a.id)))return B(`O login "${z}" já está em uso por outro usuário.`,"error"),!1;let d;u==="admin"?d=JSON.parse(JSON.stringify(ge.admin)):d={alunos:{acesso:((k=document.getElementById("perm-alunos-acesso"))==null?void 0:k.checked)??!1,cadastrar:((_=document.getElementById("perm-alunos-cadastrar"))==null?void 0:_.checked)??!1,alterar:((O=document.getElementById("perm-alunos-alterar"))==null?void 0:O.checked)??!1,excluir:((F=document.getElementById("perm-alunos-excluir"))==null?void 0:F.checked)??!1},agenda:{acesso:((I=document.getElementById("perm-agenda-acesso"))==null?void 0:I.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((q=document.getElementById("perm-agenda-excluir"))==null?void 0:q.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((G=document.getElementById("perm-planos-cadastrar"))==null?void 0:G.checked)??!1,alterar:((Z=document.getElementById("perm-planos-alterar"))==null?void 0:Z.checked)??!1,excluir:((J=document.getElementById("perm-planos-excluir"))==null?void 0:J.checked)??!1},financeiro:{acesso:((K=document.getElementById("perm-financeiro-acesso"))==null?void 0:K.checked)??!1,cadastrar:((W=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:W.checked)??!1,alterar:((le=document.getElementById("perm-financeiro-alterar"))==null?void 0:le.checked)??!1,excluir:((te=document.getElementById("perm-financeiro-excluir"))==null?void 0:te.checked)??!1},relatorios:{acesso:((de=document.getElementById("perm-relatorios-acesso"))==null?void 0:de.checked)??!1,gerar:((ae=document.getElementById("perm-relatorios-gerar"))==null?void 0:ae.checked)??!1},home:{acesso:((j=document.getElementById("perm-home-acesso"))==null?void 0:j.checked)??!1},auditoria:{acesso:((oe=document.getElementById("perm-auditoria-acesso"))==null?void 0:oe.checked)??!1},configuracoes:{acesso:((Q=document.getElementById("perm-configuracoes-acesso"))==null?void 0:Q.checked)??!1,alterar:((me=document.getElementById("perm-configuracoes-alterar"))==null?void 0:me.checked)??!1}};const c=(t==null?void 0:t.nome)||"Administrador";return P&&a?(C.updateUser(a.id,{nome:h,login:z,senha:L,papel:a.isSistema?"admin":u,permissoes:a.isSistema?ge.admin:d},c),B("Usuário e permissões atualizados com sucesso!","success")):(C.addUser({nome:h,login:z,senha:L,papel:u,permissoes:d},c),B("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const r=document.getElementById("user-papel"),m=document.getElementById("user-permissions-section"),x=(h,z,L)=>{const n=document.getElementById(`row-perm-${h}-${z}`),u=document.getElementById(`badge-perm-${h}-${z}`);n&&u&&(L?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",u.className="badge badge-success",u.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",u.className="badge badge-coral",u.textContent="Bloqueado")),g(h)},g=h=>{const z=document.getElementById(`group-counter-${h}`),L=pe.find(n=>n.key===h);if(z&&L){let n=0;L.items.forEach(u=>{const y=document.getElementById(`perm-${h}-${u.key}`);y&&y.checked&&n++}),z.textContent=`${n}/${L.items.length} liberadas`}};r==null||r.addEventListener("change",()=>{const h=r.value;if(h==="admin")m.style.display="none";else if(m.style.display="block",!P){const z=ge[h]||ge.professor;pe.forEach(L=>{L.items.forEach(n=>{var y;const u=document.getElementById(`perm-${L.key}-${n.key}`);if(u){const d=((y=z[L.key])==null?void 0:y[n.key])??!1;u.checked=d,x(L.key,n.key,d)}})})}}),pe.forEach(h=>{const z=document.getElementById(`header-group-${h.key}`),L=document.getElementById(`group-body-${h.key}`),n=document.getElementById(`arrow-perm-${h.key}`);z==null||z.addEventListener("click",u=>{if(!u.target.closest(".btn-group-toggle")&&L&&n){const y=L.style.display==="flex";L.style.display=y?"none":"flex",n.style.transform=y?"rotate(0deg)":"rotate(180deg)"}}),h.items.forEach(u=>{const y=document.getElementById(`perm-${h.key}-${u.key}`);y==null||y.addEventListener("change",()=>{if(x(h.key,u.key,y.checked),y.checked&&u.key!=="acesso"){const d=document.getElementById(`perm-${h.key}-acesso`);d&&!d.checked&&(d.checked=!0,x(h.key,"acesso",!0))}!y.checked&&u.key==="acesso"&&h.items.forEach(d=>{if(d.key!=="acesso"){const c=document.getElementById(`perm-${h.key}-${d.key}`);c&&c.checked&&(c.checked=!1,x(h.key,d.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${h.key}"]`).forEach(u=>{u.addEventListener("click",y=>{y.stopPropagation();const d=h.items.map(k=>document.getElementById(`perm-${h.key}-${k.key}`)).filter(Boolean),c=d.every(k=>k.checked);d.forEach(k=>{k.checked=!c,x(h.key,k.dataset.action,!c)})})})}),(i=document.getElementById("btn-perm-expand"))==null||i.addEventListener("click",()=>{pe.forEach(h=>{const z=document.getElementById(`group-body-${h.key}`),L=document.getElementById(`arrow-perm-${h.key}`);z&&L&&(z.style.display="flex",L.style.transform="rotate(180deg)")})}),(v=document.getElementById("btn-perm-collapse"))==null||v.addEventListener("click",()=>{pe.forEach(h=>{const z=document.getElementById(`group-body-${h.key}`),L=document.getElementById(`arrow-perm-${h.key}`);z&&L&&(z.style.display="none",L.style.transform="rotate(0deg)")})}),(b=document.getElementById("btn-perm-all"))==null||b.addEventListener("click",()=>{pe.forEach(h=>{h.items.forEach(z=>{const L=document.getElementById(`perm-${h.key}-${z.key}`);L&&(L.checked=!0,x(h.key,z.key,!0))})})}),(E=document.getElementById("btn-perm-none"))==null||E.addEventListener("click",()=>{pe.forEach(h=>{h.items.forEach(z=>{const L=document.getElementById(`perm-${h.key}-${z.key}`);L&&(L.checked=!1,x(h.key,z.key,!1))})})})}return s(),e}function at($){const e=document.createElement("div"),t=Y.getCurrentUser();let o="";const s=X(t,"planos","cadastrar"),l=X(t,"planos","alterar"),S=X(t,"planos","excluir");function a(){var M,r;const p=C.getPlans().filter(m=>{const x=o.toLowerCase();return m.nome.toLowerCase().includes(x)||m.descricao&&m.descricao.toLowerCase().includes(x)});e.innerHTML=`
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
          <h3 class="panel-card-title">Planos Cadastrados (${p.length})</h3>
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
              ${p.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${o?"Nenhum plano encontrado para o termo pesquisado.":"Nenhum plano de ensino cadastrado."}
                      </td>
                    </tr>
                  `:p.map(m=>{const x=m.criadoEm?new Date(m.criadoEm).toLocaleDateString("pt-BR"):"-";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${R.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${m.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${m.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição cadastrada</span>'}
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                ${m.modulos.length} ${m.modulos.length===1?"módulo":"módulos"}
                              </span>
                            </td>
                            <td class="col-hide-sm" style="font-size: 0.8rem; color: var(--text-muted);">
                              ${x}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${l?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${m.id}" title="Editar Plano e Módulos">
                                        ${R.edit}
                                      </button>
                                    `:""}
                                ${S?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${m.id}" title="Excluir Plano">
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
    `,(M=e.querySelector("#btn-new-plan"))==null||M.addEventListener("click",()=>{P()});const A=e.querySelector("#plan-search-input");A&&A.addEventListener("input",m=>{o=m.target.value,a();const x=e.querySelector("#plan-search-input");x&&(x.focus(),x.setSelectionRange(x.value.length,x.value.length))}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{o="",a()}),e.querySelectorAll(".btn-edit-plan").forEach(m=>{m.addEventListener("click",x=>{const g=x.currentTarget.dataset.id,i=C.getPlans().find(v=>v.id===g);i&&P(i)})}),e.querySelectorAll(".btn-delete-plan").forEach(m=>{m.addEventListener("click",x=>{const g=x.currentTarget.dataset.id,i=C.getPlans().find(v=>v.id===g);i&&fe({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${i.nome}</strong>" e todos os seus <strong>${i.modulos.length} módulos</strong> vinculados?`,onConfirm:()=>{C.deletePlan(i.id,(t==null?void 0:t.nome)||"Administrador"),B(`Plano "${i.nome}" excluído.`,"info"),a()}})})})}function P(f){const p=!!f;let A=f?JSON.parse(JSON.stringify(f.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function M(){return A.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `:A.map((g,i)=>`
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
                value="${g.titulo}" 
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
                value="${(f==null?void 0:f.nome)||""}" 
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
                value="${(f==null?void 0:f.descricao)||""}" 
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
    `;re({title:p?`Editar Plano: ${f.nome}`:"Cadastrar Plano & Trilha de Ensino",bodyHtml:r,modalClass:"modal-lg",confirmText:p?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const g=document.getElementById("plan-nome").value.trim(),i=document.getElementById("plan-desc").value.trim(),v=A.map((E,h)=>({id:E.id||"mod_"+(h+1)+"_"+Date.now(),ordem:h+1,titulo:E.titulo.trim()})).filter(E=>E.titulo.length>0);if(!g)return B("Informe o nome do plano de ensino.","error"),!1;if(v.length===0)return B("Adicione pelo menos um módulo à trilha pedagógica.","error"),!1;const b=(t==null?void 0:t.nome)||"Administrador";return p&&f?(C.updatePlan(f.id,{nome:g,descricao:i,modulos:v},b),B("Plano e módulos atualizados com sucesso!","success")):(C.addPlan({nome:g,descricao:i,modulos:v},b),B("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function m(){const g=document.getElementById("modules-list-container"),i=document.getElementById("modules-counter-badge");g&&(i&&(i.textContent=`${A.length} ${A.length===1?"módulo":"módulos"}`),g.innerHTML=M(),g.querySelectorAll(".module-title-input").forEach(v=>{v.addEventListener("input",b=>{const E=parseInt(b.target.getAttribute("data-idx")||"0",10);A[E]&&(A[E].titulo=b.target.value)})}),g.querySelectorAll(".btn-move-up:not([disabled])").forEach(v=>{v.addEventListener("click",b=>{const E=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);if(E>0){const h=A[E];A[E]=A[E-1],A[E-1]=h,A.forEach((z,L)=>z.ordem=L+1),m()}})}),g.querySelectorAll(".btn-move-down:not([disabled])").forEach(v=>{v.addEventListener("click",b=>{const E=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);if(E<A.length-1){const h=A[E];A[E]=A[E+1],A[E+1]=h,A.forEach((z,L)=>z.ordem=L+1),m()}})}),g.querySelectorAll(".btn-remove-module").forEach(v=>{v.addEventListener("click",b=>{const E=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);A.splice(E,1),A.forEach((h,z)=>h.ordem=z+1),m()})}))}function x(){const g=document.getElementById("quick-add-module-input");if(!g)return;const i=g.value.trim();if(!i){B("Digite o nome do módulo para adicionar.","info"),g.focus();return}const v=A.length+1;A.push({id:"mod_"+v+"_"+Date.now(),ordem:v,titulo:i}),g.value="",m(),g.focus();const b=document.getElementById("modules-list-container");b&&(b.scrollTop=b.scrollHeight)}setTimeout(()=>{const g=document.getElementById("btn-quick-add-module"),i=document.getElementById("quick-add-module-input");g==null||g.addEventListener("click",()=>{x()}),i==null||i.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),x())}),m()},50)}return a(),e}function ot($){const e=document.createElement("div"),t=Y.getCurrentUser();let o="",s="todos",l=new Date;const S=X(t,"financeiro","cadastrar"),a=X(t,"financeiro","alterar"),P=X(t,"financeiro","excluir");function f(){var u,y,d,c,k,_,O,F;const r=C.getPayments(),m=C.getStudents(),x=new Date,g=l!==null&&x.getMonth()===l.getMonth()&&x.getFullYear()===l.getFullYear(),i=l?`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`:"",v=r.filter(I=>I.status==="pago").reduce((I,T)=>I+T.valor,0),b=r.filter(I=>I.status==="pendente").reduce((I,T)=>I+T.valor,0),E=r.filter(I=>I.status==="atrasado").reduce((I,T)=>I+T.valor,0),h=m.filter(I=>I.status==="ativo"&&C.isStudentOverdue(I.id)),z=r.filter(I=>{const T=m.find(J=>J.id===I.alunoId),D=T?T.nome.toLowerCase():"",q=I.descricao.toLowerCase(),V=D.includes(o.toLowerCase())||q.includes(o.toLowerCase())||I.mesReferencia&&I.mesReferencia.includes(o),G=s==="todos"||I.status===s,Z=!i||I.mesReferencia===i||I.dataVencimento.startsWith(i);return V&&G&&Z});e.innerHTML=`
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
            R$ ${v.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(I=>I.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${b.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(I=>I.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${E.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(I=>I.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${h.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${m.filter(I=>I.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${h.length===0?"✓ 100% em dia":"Requer acompanhamento"}
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
            <button type="button" class="btn ${g?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${z.length})</h3>
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
              ${z.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':z.map(I=>{const T=m.find(G=>G.id===I.alunoId),D=I.status==="pago",q=I.status==="atrasado";let V="";return D?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':q?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                                ${I.descricao}${I.mesReferencia?` / ${I.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${q?"#f87171":"var(--text-white)"}; font-weight: ${q?"700":"normal"};">
                                ${I.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${I.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!D&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${I.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${R.check}
                                      </button>
                                    `:""}

                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${I.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${I.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${R.edit}
                                      </button>
                                    `:""}

                                ${P?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${I.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(u=e.querySelector("#fin-btn-prev-month"))==null||u.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()-1,1),f()}),(y=e.querySelector("#fin-btn-next-month"))==null||y.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()+1,1),f()}),(d=e.querySelector("#fin-btn-current-month"))==null||d.addEventListener("click",()=>{l=new Date,f()}),(c=e.querySelector("#fin-btn-all-months"))==null||c.addEventListener("click",()=>{l=null,f()});const L=e.querySelector("#fin-search-input");L==null||L.addEventListener("input",I=>{o=I.target.value,f();const T=e.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(k=e.querySelector("#btn-clear-fin-search"))==null||k.addEventListener("click",()=>{o="",f()});const n=e.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,f()}),(_=e.querySelector("#btn-limpar-status"))==null||_.addEventListener("click",()=>{s="todos",f()}),(O=e.querySelector("#btn-gerar-lote"))==null||O.addEventListener("click",()=>{A()}),(F=e.querySelector("#btn-novo-lancamento"))==null||F.addEventListener("click",()=>{M()}),e.querySelectorAll(".btn-action-baixa").forEach(I=>{I.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(V=>V.id===D);q&&p(q)})}),e.querySelectorAll(".btn-action-recibo").forEach(I=>{I.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(V=>V.id===D);if(q){const V=m.find(G=>G.id===q.alunoId);V&&qe(q,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(I=>{I.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(V=>V.id===D);q&&M(q)})}),e.querySelectorAll(".btn-action-delete").forEach(I=>{I.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,q=r.find(V=>V.id===D);q&&fe({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${q.descricao}</strong>" no valor de <strong>R$ ${q.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{C.deletePayment(q.id,(t==null?void 0:t.nome)||"Administrador"),B("Lançamento excluído com sucesso!","info"),f()}})})})}function p(r){const m=C.getStudents().find(i=>i.id===r.alunoId),x=C.getTodayDateString(),g=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${r.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${r.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(m==null?void 0:m.nome)||"N/A"}</strong> &bull; Vencimento: ${r.dataVencimento.split("-").reverse().join("/")}
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
    `;re({title:"Confirmar Baixa de Pagamento",bodyHtml:g,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const i=document.getElementById("modal-baixa-data").value,v=document.getElementById("modal-baixa-forma").value,b=document.getElementById("modal-baixa-obs").value;return i?(C.darBaixaPayment(r.id,i,v,(t==null?void 0:t.nome)||"Administrador",b),B(`Baixa efetuada com sucesso! R$ ${r.valor.toFixed(2)} recebido.`,"success"),f(),!0):(B("Informe a data de recebimento.","error"),!1)}})}function A(){const r=new Date,m=r.getFullYear(),x=r.getMonth()+1,g=`
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
    `;re({title:"Gerar Mensalidades em Lote",bodyHtml:g,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const i=parseInt(document.getElementById("lote-ano").value,10),v=parseInt(document.getElementById("lote-mes").value,10);if(!i||!v)return B("Selecione ano e mês válidos.","error"),!1;const b=C.gerarMensalidadesMes(i,v,(t==null?void 0:t.nome)||"Administrador");return b.criadas===0&&b.puladas>0?B(`Todas as ${b.puladas} mensalidades deste mês já estavam criadas!`,"info"):B(`Sucesso: ${b.criadas} mensalidade(s) gerada(s)! (${b.puladas} já existentes puladas)`,"success"),f(),!0}})}function M(r){const m=!!r,x=C.getStudents(),g=C.getTodayDateString(),i=x.map(b=>`<option value="${b.id}" ${(r==null?void 0:r.alunoId)===b.id?"selected":""}>${b.nome} (${b.instrumentoPrincipal||"Geral"})</option>`).join(""),v=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${m?"disabled":""}>
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
            <input type="date" id="pay-vencimento" class="form-input" value="${(r==null?void 0:r.dataVencimento)||g}" required />
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
    `;re({title:m?`Editar Lançamento: ${r.descricao}`:"Novo Lançamento Financeiro",bodyHtml:v,modalClass:"modal-md",confirmText:m?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const b=m&&r?r.alunoId:document.getElementById("pay-aluno").value,E=document.getElementById("pay-desc").value.trim(),h=document.getElementById("pay-mes").value.trim()||void 0,z=document.getElementById("pay-valor").value,L=parseFloat(z)||0,n=document.getElementById("pay-vencimento").value,u=document.getElementById("pay-status").value,y=document.getElementById("pay-forma").value||void 0,d=document.getElementById("pay-obs").value.trim()||void 0;if(!b)return B("Selecione um aluno.","error"),!1;if(!E)return B("Informe a descrição do lançamento.","error"),!1;if(L<=0)return B("Informe um valor válido maior que zero.","error"),!1;if(!n)return B("Informe a data de vencimento.","error"),!1;const c=(t==null?void 0:t.nome)||"Administrador";return m&&r?(C.updatePayment(r.id,{descricao:E,mesReferencia:h,valor:L,dataVencimento:n,status:u,formaPagamento:y,dataPagamento:u==="pago"?r.dataPagamento||g:void 0,observacoes:d},c),B("Lançamento atualizado com sucesso!","success")):(C.addPayment({alunoId:b,descricao:E,mesReferencia:h,valor:L,dataVencimento:n,status:u,formaPagamento:y,dataPagamento:u==="pago"?g:void 0,observacoes:d},c),B("Novo lançamento cadastrado com sucesso!","success")),f(),!0}}),m||setTimeout(()=>{const b=document.getElementById("pay-aluno");b==null||b.addEventListener("change",()=>{const E=x.find(h=>h.id===b.value);if(E){const h=document.getElementById("pay-valor");h&&typeof E.valorMensalidade=="number"&&(h.value=E.valorMensalidade.toString())}})},50)}return f(),e}function st($){const e=document.createElement("div"),t=Y.getCurrentUser(),o=X(t,"relatorios","gerar");let s="alunos",l="todos",S="todos",a="todos",P="todos",f="todos",p="nome_asc",A="",M="",r="",m="",x="todos",g="todos",i="todos",v="vencimento_asc";function b(){var K,W,le,te,de,ae,j,oe,Q,me,N,ee,ce,be,he,ye,xe,Me,Pe;const n=C.getSettings(),u=C.getStudents(),y=C.getPlans(),d=C.getPayments(),c=Array.from(new Set(u.map(w=>w.instrumentoPrincipal).filter(Boolean))).sort();let k=u.filter(w=>{if(l!=="todos"&&w.status!==l||S!=="todos"&&w.instrumentoPrincipal!==S||a!=="todos"&&w.nivelMusical!==a||P!=="todos"&&w.planoId!==P)return!1;if(f!=="todos"){const H=C.isStudentOverdue(w.id);if(f==="em_dia"&&H||f==="atrasado"&&!H)return!1}return!0});k.sort((w,H)=>p==="nome_asc"?w.nome.localeCompare(H.nome):p==="nome_desc"?H.nome.localeCompare(w.nome):p==="data_desc"?(H.criadoEm||"").localeCompare(w.criadoEm||""):p==="data_asc"?(w.criadoEm||"").localeCompare(H.criadoEm||""):0);const _=k.length,O=k.filter(w=>w.status==="ativo").length,F=k.filter(w=>w.status==="inativo").length,I=k.filter(w=>C.isStudentOverdue(w.id)).length,T=new Date().toISOString().slice(0,10);let D=d.filter(w=>{if(A&&w.dataVencimento<A||M&&w.dataVencimento>M)return!1;const H=w.mesReferencia||w.dataVencimento.slice(0,7);if(r&&H<r||m&&H>m||g!=="todos"&&w.alunoId!==g||i!=="todos"&&w.formaPagamento!==i)return!1;const se=w.status!=="pago"&&w.dataVencimento<T;return!(x==="pago"&&w.status!=="pago"||x==="pendente"&&(w.status==="pago"||se)||x==="atrasado"&&!se)});const q=new Map(u.map(w=>[w.id,w.nome]));D.sort((w,H)=>{if(v==="vencimento_asc")return w.dataVencimento.localeCompare(H.dataVencimento);if(v==="vencimento_desc")return H.dataVencimento.localeCompare(w.dataVencimento);if(v==="valor_desc")return H.valor-w.valor;if(v==="aluno_asc"){const se=q.get(w.alunoId)||"",Ce=q.get(H.alunoId)||"";return se.localeCompare(Ce)}return 0});const V=D.length,G=D.reduce((w,H)=>w+H.valor,0),Z=D.filter(w=>w.status==="pago").reduce((w,H)=>w+H.valor,0),J=D.filter(w=>w.status!=="pago").reduce((w,H)=>w+H.valor,0);e.innerHTML=`
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
                ${c.map(w=>`<option value="${w}" ${S===w?"selected":""}>${w}</option>`).join("")}
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
                ${y.map(w=>`<option value="${w.id}" ${P===w.id?"selected":""}>${w.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Situação Financeira</label>
              <select id="filtro-aluno-financeiro" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${f==="todos"?"selected":""}>Todos</option>
                <option value="em_dia" ${f==="em_dia"?"selected":""}>Em Dia</option>
                <option value="atrasado" ${f==="atrasado"?"selected":""}>Com Mensalidade em Atraso</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-aluno-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="nome_asc" ${p==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${p==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${p==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${p==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores de Alunos (2 em cima, 2 em baixo) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Localizado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${_}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${O}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${F}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${I}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${k.length} registros)
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
                ${k.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':k.map(w=>{const H=y.find(Oe=>Oe.id===w.planoId),se=w.status==="ativo",Ce=C.isStudentOverdue(w.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${w.nome}</td>
                              <td class="col-hide-md">${w.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${w.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${se?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${se?"Ativo":"Inativo"}
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
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${m}" />
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
                <option value="todos" ${g==="todos"?"selected":""}>Todos os Alunos</option>
                ${u.map(w=>`<option value="${w.id}" ${g===w.id?"selected":""}>${w.nome}</option>`).join("")}
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
                <option value="vencimento_asc" ${v==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${v==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${v==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${v==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${G.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Recebido / Quitado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${Z.toFixed(2)}</div>
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
                ${D.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':D.map(w=>{const H=w.status==="pago",se=!H&&w.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${q.get(w.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${w.descricao}${w.mesReferencia?` / ${w.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${w.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${w.valor.toFixed(2)}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${H?"badge-success":se?"badge-coral":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${H?"Pago":se?"Atrasado":"Pendente"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,(K=e.querySelector("#btn-tab-rel-alunos"))==null||K.addEventListener("click",()=>{s="alunos",b()}),(W=e.querySelector("#btn-tab-rel-financeiro"))==null||W.addEventListener("click",()=>{s="financeiro",b()}),(le=e.querySelector("#filtro-aluno-status"))==null||le.addEventListener("change",w=>{l=w.target.value,b()}),(te=e.querySelector("#filtro-aluno-instrumento"))==null||te.addEventListener("change",w=>{S=w.target.value,b()}),(de=e.querySelector("#filtro-aluno-nivel"))==null||de.addEventListener("change",w=>{a=w.target.value,b()}),(ae=e.querySelector("#filtro-aluno-plano"))==null||ae.addEventListener("change",w=>{P=w.target.value,b()}),(j=e.querySelector("#filtro-aluno-financeiro"))==null||j.addEventListener("change",w=>{f=w.target.value,b()}),(oe=e.querySelector("#filtro-aluno-ordem"))==null||oe.addEventListener("change",w=>{p=w.target.value,b()}),(Q=e.querySelector("#btn-limpar-filtros-alunos"))==null||Q.addEventListener("click",()=>{l="todos",S="todos",a="todos",P="todos",f="todos",p="nome_asc",b()}),(me=e.querySelector("#filtro-fin-dataini"))==null||me.addEventListener("change",w=>{A=w.target.value,b()}),(N=e.querySelector("#filtro-fin-datafim"))==null||N.addEventListener("change",w=>{M=w.target.value,b()}),(ee=e.querySelector("#filtro-fin-mesref-ini"))==null||ee.addEventListener("change",w=>{r=w.target.value,b()}),(ce=e.querySelector("#filtro-fin-mesref-fim"))==null||ce.addEventListener("change",w=>{m=w.target.value,b()}),(be=e.querySelector("#filtro-fin-status"))==null||be.addEventListener("change",w=>{x=w.target.value,b()}),(he=e.querySelector("#filtro-fin-aluno"))==null||he.addEventListener("change",w=>{g=w.target.value,b()}),(ye=e.querySelector("#filtro-fin-metodo"))==null||ye.addEventListener("change",w=>{i=w.target.value,b()}),(xe=e.querySelector("#filtro-fin-ordem"))==null||xe.addEventListener("change",w=>{v=w.target.value,b()}),(Me=e.querySelector("#btn-limpar-filtros-fin"))==null||Me.addEventListener("click",()=>{A="",M="",r="",m="",x="todos",g="todos",i="todos",v="vencimento_asc",b()}),(Pe=e.querySelector("#btn-gerar-pdf"))==null||Pe.addEventListener("click",async()=>{if(!o){B("Você não possui permissão para emitir relatórios.","error");return}const w=e.querySelector("#btn-gerar-pdf"),H=w?w.innerHTML:"";w&&(w.disabled=!0,w.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await z(n,k,y):await L(n,D,u,{mesIni:r,mesFim:m}),B("PDF gerado com sucesso!","success")}catch(se){console.error("Erro ao gerar PDF:",se),B("Ocorreu um erro ao gerar o documento PDF.","error")}finally{w&&(w.disabled=!1,w.innerHTML=H)}})}function E(n){return new Promise(u=>{if(n&&n.trim()!==""){const y=new Image;y.crossOrigin="Anonymous",y.onload=()=>{try{const d=document.createElement("canvas");d.width=160,d.height=160;const c=d.getContext("2d");if(!c){u(n);return}const k=24;c.fillStyle="#ffffff",c.beginPath(),c.moveTo(k,0),c.lineTo(160-k,0),c.quadraticCurveTo(160,0,160,k),c.lineTo(160,160-k),c.quadraticCurveTo(160,160,160-k,160),c.lineTo(k,160),c.quadraticCurveTo(0,160,0,160-k),c.lineTo(0,k),c.quadraticCurveTo(0,0,k,0),c.closePath(),c.fill();const _=12,O=160-_*2,F=160-_*2;let I=O,T=F;const D=y.width/y.height;D>1?T=O/D:I=F*D;const q=_+(O-I)/2,V=_+(F-T)/2;c.drawImage(y,q,V,I,T),u(d.toDataURL("image/png"))}catch{u(n)}},y.onerror=()=>{h().then(u)},y.src=n;return}h().then(u)})}function h(){return new Promise(n=>{try{const u=document.createElement("canvas");u.width=160,u.height=160;const y=u.getContext("2d");if(!y){n("");return}const d=32;y.fillStyle="#181c2b",y.beginPath(),y.moveTo(d,0),y.lineTo(160-d,0),y.quadraticCurveTo(160,0,160,d),y.lineTo(160,160-d),y.quadraticCurveTo(160,160,160-d,160),y.lineTo(d,160),y.quadraticCurveTo(0,160,0,160-d),y.lineTo(0,d),y.quadraticCurveTo(0,0,d,0),y.closePath(),y.fill(),y.lineWidth=3,y.strokeStyle="#2d3748",y.stroke();const c=new Image,k=`
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
        `,_=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),O=URL.createObjectURL(_);c.onload=()=>{y.drawImage(c,20,20,120,120),URL.revokeObjectURL(O),n(u.toDataURL("image/png"))},c.onerror=()=>{URL.revokeObjectURL(O),n("")},c.src=O}catch{n("")}})}async function z(n,u,y){const d=new Te({orientation:"portrait",unit:"mm",format:"a4"}),c=new Date().toLocaleString("pt-BR"),k=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",_=n.razaoSocial||"Acusticamente Ensino Musical Ltda",O=n.cnpj?`CNPJ: ${n.cnpj}`:"",F=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),I=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),T=await E(n.logotipoCustomizado);T&&d.addImage(T,"PNG",14,12,17,17);const D=T?35:14;d.setFont("helvetica","bold"),d.setFontSize(13),d.setTextColor(15,23,42),d.text(k,D,17),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(71,85,105),d.text([_,O].filter(Boolean).join(" • "),D,21.5),d.setFontSize(7.5),d.setTextColor(100,116,139),I&&d.text(I,D,25.5),F&&d.text(F,D,I?29.5:25.5),d.setFont("helvetica","bold"),d.setFontSize(12),d.setTextColor(217,72,59),d.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(100,116,139),d.text(`Emissão: ${c}`,196,22,{align:"right"}),d.text(`Total: ${u.length} aluno(s)`,196,26.5,{align:"right"}),d.setDrawColor(203,213,225),d.setLineWidth(.4),d.line(14,33,196,33);const q=u.filter(j=>j.status==="ativo").length,V=u.filter(j=>j.status==="inativo").length,G=u.filter(j=>C.isStudentOverdue(j.id)).length,Z=[{label:"TOTAL DE ALUNOS",value:`${u.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${q}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${G}`,color:[220,38,38]}],J=43,K=12,W=36;Z.forEach((j,oe)=>{const Q=14+oe*(J+3);d.setFillColor(248,250,252),d.roundedRect(Q,W,J,K,1.5,1.5,"F"),d.setDrawColor(226,232,240),d.roundedRect(Q,W,J,K,1.5,1.5,"S"),d.setFont("helvetica","bold"),d.setFontSize(6.5),d.setTextColor(100,116,139),d.text(j.label,Q+3,W+4),d.setFontSize(10.5),d.setTextColor(j.color[0],j.color[1],j.color[2]),d.text(j.value,Q+3,W+9.5)});const le=u.map((j,oe)=>{const Q=y.find(ee=>ee.id===j.planoId),me=j.status==="ativo",N=C.isStudentOverdue(j.id);return[(oe+1).toString(),j.nome,j.instrumentoPrincipal||"Música Geral",j.telefone||"-",(Q==null?void 0:Q.nome)||"-",me?"Ativo":"Inativo",N?"Atrasado":"Em dia"]});De(d,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:le.length>0?le:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:j=>{j.section==="body"&&(j.column.index===5&&(j.cell.raw==="Ativo"?(j.cell.styles.textColor=[22,163,74],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[202,138,4]),j.column.index===6&&(j.cell.raw==="Atrasado"?(j.cell.styles.textColor=[220,38,38],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[22,163,74]))}});const te=d.internal.getNumberOfPages();for(let j=1;j<=te;j++)d.setPage(j),d.setDrawColor(226,232,240),d.setLineWidth(.3),d.line(14,287,196,287),d.setFont("helvetica","normal"),d.setFontSize(7),d.setTextColor(148,163,184),d.text(`${k} • Sistema de Gestão Escolar & Pedagógica`,14,292),d.text(`Página ${j} de ${te}`,196,292,{align:"right"});const de=d.output("blob"),ae=URL.createObjectURL(de);window.open(ae,"_blank")}async function L(n,u,y,d){const c=new Te({orientation:"portrait",unit:"mm",format:"a4"}),k=new Map(y.map(N=>[N.id,N.nome])),_=new Date().toLocaleString("pt-BR"),O=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",F=n.razaoSocial||"Acusticamente Ensino Musical Ltda",I=n.cnpj?`CNPJ: ${n.cnpj}`:"",T=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),D=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),q=new Date().toISOString().slice(0,10),V=u.reduce((N,ee)=>N+ee.valor,0),G=u.filter(N=>N.status==="pago").reduce((N,ee)=>N+ee.valor,0),Z=u.filter(N=>N.status!=="pago").reduce((N,ee)=>N+ee.valor,0),J=await E(n.logotipoCustomizado);J&&c.addImage(J,"PNG",14,12,17,17);const K=J?35:14;c.setFont("helvetica","bold"),c.setFontSize(13),c.setTextColor(15,23,42),c.text(O,K,17),c.setFont("helvetica","normal"),c.setFontSize(8),c.setTextColor(71,85,105),c.text([F,I].filter(Boolean).join(" • "),K,21.5),c.setFontSize(7.5),c.setTextColor(100,116,139),D&&c.text(D,K,25.5),T&&c.text(T,K,D?29.5:25.5),c.setFont("helvetica","bold"),c.setFontSize(12),c.setTextColor(5,150,105),c.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),c.setFont("helvetica","normal"),c.setFontSize(8),c.setTextColor(100,116,139),c.text(`Emissão: ${_}`,196,22,{align:"right"});let W=`Total: ${u.length} registro(s)`;d!=null&&d.mesIni&&(d!=null&&d.mesFim)?W=`Ref: ${d.mesIni} a ${d.mesFim} • ${u.length} reg.`:d!=null&&d.mesIni?W=`Ref: a partir de ${d.mesIni} • ${u.length} reg.`:d!=null&&d.mesFim&&(W=`Ref: até ${d.mesFim} • ${u.length} reg.`),c.text(W,196,26.5,{align:"right"}),c.setDrawColor(203,213,225),c.setLineWidth(.4),c.line(14,33,196,33);const le=[{label:"LANÇAMENTOS",value:`${u.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${G.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${Z.toFixed(2)}`,color:[220,38,38]}],te=43,de=12,ae=36;le.forEach((N,ee)=>{const ce=14+ee*(te+3);c.setFillColor(248,250,252),c.roundedRect(ce,ae,te,de,1.5,1.5,"F"),c.setDrawColor(226,232,240),c.roundedRect(ce,ae,te,de,1.5,1.5,"S"),c.setFont("helvetica","bold"),c.setFontSize(6.5),c.setTextColor(100,116,139),c.text(N.label,ce+3,ae+4),c.setFontSize(10),c.setTextColor(N.color[0],N.color[1],N.color[2]),c.text(N.value,ce+3,ae+9.5)});const j=u.map((N,ee)=>{const ce=N.status==="pago",be=!ce&&N.dataVencimento<q,he=ce?"Pago":be?"Atrasado":"Pendente",ye=N.descricao+(N.mesReferencia?` / ${N.mesReferencia}`:""),xe=N.dataVencimento.split("-").reverse().join("/");return[(ee+1).toString(),k.get(N.alunoId)||"Aluno",ye,xe,`R$ ${N.valor.toFixed(2)}`,he]});De(c,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:j.length>0?j:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:N=>{N.section==="body"&&N.column.index===5&&(N.cell.raw==="Pago"?(N.cell.styles.textColor=[22,163,74],N.cell.styles.fontStyle="bold"):N.cell.raw==="Atrasado"?(N.cell.styles.textColor=[220,38,38],N.cell.styles.fontStyle="bold"):N.cell.styles.textColor=[202,138,4])}});const oe=c.internal.getNumberOfPages();for(let N=1;N<=oe;N++)c.setPage(N),c.setDrawColor(226,232,240),c.setLineWidth(.3),c.line(14,287,196,287),c.setFont("helvetica","normal"),c.setFontSize(7),c.setTextColor(148,163,184),c.text(`${O} • Gestão Financeira & Escolar`,14,292),c.text(`Página ${N} de ${oe}`,196,292,{align:"right"});const Q=c.output("blob"),me=URL.createObjectURL(Q);window.open(me,"_blank")}return b(),e}function nt($){const e=document.createElement("div");let t=new Date,o="";const s=f=>f.toString().padStart(2,"0");function l(f){const p=f.getDate(),M=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][f.getMonth()],r=f.getFullYear(),m=new Date,x=m.getDate()===p&&m.getMonth()===f.getMonth()&&m.getFullYear()===r;return`${p} de ${M} de ${r}${x?" (Hoje)":""}`}function S(f){return`${f.getFullYear()}-${s(f.getMonth()+1)}-${s(f.getDate())}`}function a(){var i,v,b,E,h,z,L,n;const f=U.getLogs(),p=new Date,A=`${s(p.getDate())}/${s(p.getMonth()+1)}/${p.getFullYear()}`,M=f.filter(u=>{var y;return(y=u.dataHoraFormatada)==null?void 0:y.startsWith(A)}).length,r=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",m=t!==null&&p.getDate()===t.getDate()&&p.getMonth()===t.getMonth()&&p.getFullYear()===t.getFullYear(),x=f.filter(u=>{const y=!t||u.dataHoraFormatada&&u.dataHoraFormatada.startsWith(r)||u.dataHora&&u.dataHora.startsWith(S(t)),d=o===""||u.tela.toLowerCase().includes(o.toLowerCase())||u.usuarioNome.toLowerCase().includes(o.toLowerCase())||u.usuarioLogin.toLowerCase().includes(o.toLowerCase())||u.acao.toLowerCase().includes(o.toLowerCase())||u.detalhes.toLowerCase().includes(o.toLowerCase());return y&&d});e.innerHTML=`
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

        <div style="display: flex; align-items: center; gap: 10px;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-clear-all-audit" disabled style="display: none; color: #ff6b6b; border-color: rgba(255,107,107,0.3); font-size: 0.78rem;" title="Zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria)">
            🗑️ Zerar Base de Dados
          </button>
          <div style="font-size: 0.82rem; color: var(--text-muted); background: var(--bg-surface); padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 6px;">
            <span>Registros de Hoje: <strong style="color: var(--color-coral);">${M}</strong></span>
          </div>
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
            <button type="button" class="btn ${m?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
                  `:x.map(u=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${u.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${u.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${u.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${u.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${u.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${u.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${u.detalhes}">
                                ${u.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(i=e.querySelector("#audit-btn-prev"))==null||i.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),a()}),(v=e.querySelector("#audit-btn-next"))==null||v.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),a()}),(b=e.querySelector("#audit-btn-today"))==null||b.addEventListener("click",()=>{t=new Date,a()}),(E=e.querySelector("#audit-btn-all"))==null||E.addEventListener("click",()=>{t=null,a()}),(h=e.querySelector("#audit-empty-btn-all"))==null||h.addEventListener("click",()=>{t=null,a()}),(z=e.querySelector("#audit-date-picker"))==null||z.addEventListener("change",u=>{const y=u.target.value;if(y){const[d,c,k]=y.split("-").map(Number);t=new Date(d,c-1,k)}else t=null;a()});const g=e.querySelector("#audit-search-input");g==null||g.addEventListener("input",u=>{o=u.target.value,a();const y=e.querySelector("#audit-search-input");y&&(y.focus(),y.selectionStart=y.selectionEnd=y.value.length)}),(L=e.querySelector("#btn-clear-audit-search"))==null||L.addEventListener("click",()=>{o="",a()}),(n=e.querySelector("#btn-clear-all-audit"))==null||n.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await C.resetCleanDatabase("Administrador"),a())})}const P=()=>{a()};return window.addEventListener("audit_updated",P),a(),e}function rt($){const e=document.createElement("div"),t=Y.getCurrentUser(),o=C.getSettings(),s=X(t,"configuracoes","alterar");e.innerHTML=`
    <!-- Cabeçalho da Tela -->
    <div style="margin-bottom: 20px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
        Configurações do Sistema
      </h2>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
        Gerencie as preferências gerais, logotipo da instituição, dados cadastrais e banco de dados.
      </p>
    </div>

    <!-- Seletor de Abas Padronizado em Pílulas (2 Abas) -->
    <div class="app-tabs-wrapper" style="margin-bottom: 16px;">
      <div class="app-tabs-row cols-2">
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

    </div>

    <!-- Linha Fina com Informações do Sistema -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-size: 0.74rem; color: var(--text-secondary);">
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <span style="font-weight: 700; color: var(--text-white); display: flex; align-items: center; gap: 5px;">
          <span>🎵</span> Acusticamente
        </span>
        <span class="badge badge-primary" style="font-family: monospace; font-size: 0.68rem; padding: 1px 6px;">v1.0.0</span>
        <span id="footer-cloud-status" style="display: inline-flex; align-items: center; gap: 4px; color: #4ade80; font-size: 0.72rem; margin-left: 6px;">
          <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
          MongoDB Conectado
        </span>
      </div>

      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Desenvolvido por <strong style="color: var(--color-coral); font-weight: 600;">DevHub</strong></span>
      </div>
    </div>
  `;const l=e.querySelector("#btn-tab-gerais"),S=e.querySelector("#btn-tab-instituicao"),a=e.querySelector("#tab-content-gerais"),P=e.querySelector("#tab-content-instituicao");function f(c,k){c&&(k?c.classList.add("active"):c.classList.remove("active"))}function p(c){a.style.display=c==="gerais"?"block":"none",P.style.display=c==="instituicao"?"block":"none",f(l,c==="gerais"),f(S,c==="instituicao")}l==null||l.addEventListener("click",()=>p("gerais")),S==null||S.addEventListener("click",()=>p("instituicao"));let A=o.logotipoCustomizado||"";const M=e.querySelector("#cfg-menu-name"),r=e.querySelector("#preview-menu-brand-name"),m=e.querySelector("#preview-report-brand-name"),x=e.querySelector("#preview-logo-menu"),g=e.querySelector("#preview-logo-report"),i=e.querySelector("#input-logo-file"),v=e.querySelector("#btn-upload-logo"),b=e.querySelector("#btn-reset-logo"),E=e.querySelector("#logo-feedback-msg");M==null||M.addEventListener("input",()=>{const c=M.value.trim()||"Acusticamente";r&&(r.textContent=c),m&&(m.textContent=c)}),v==null||v.addEventListener("click",()=>{i==null||i.click()}),i==null||i.addEventListener("change",c=>{const k=c.target.files;if(!k||k.length===0)return;const _=k[0];if(!_.type.startsWith("image/")){B("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(_.size>3*1024*1024){B("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const O=new FileReader;O.onload=F=>{var I;A=((I=F.target)==null?void 0:I.result)||"",x&&(x.innerHTML=ue(A,40)),g&&(g.innerHTML=ue(A,40)),b&&(b.disabled=!1,b.style.color="#ef4444"),E&&(E.style.display="block",E.style.color="var(--status-success)",E.textContent="Imagem carregada no preview. Clique em Salvar."),B("Logotipo carregado na pré-visualização!","info")},O.onerror=()=>{B("Erro ao processar o arquivo de imagem.","error")},O.readAsDataURL(_)}),b==null||b.addEventListener("click",()=>{A="",i&&(i.value=""),x&&(x.innerHTML=ue("",40)),g&&(g.innerHTML=ue("",40)),b&&(b.disabled=!0,b.style.color="var(--text-muted)"),E&&(E.style.display="block",E.style.color="var(--color-coral)",E.textContent="Logotipo padrão no preview. Clique em Salvar."),B("Logotipo padrão restaurado no preview.","info")});const h=e.querySelector("#form-settings-gerais");h==null||h.addEventListener("submit",c=>{c.preventDefault();const k=M.value.trim()||"Acusticamente";C.updateSettings({nomeMenu:k,logotipoCustomizado:A},(t==null?void 0:t.nome)||"Administrador"),E&&(E.style.display="none"),B("Configurações gerais salvas com sucesso!","success")});const z=e.querySelector("#cfg-cnpj");z==null||z.addEventListener("input",c=>{let k=c.target.value.replace(/\D/g,"").slice(0,14);k.length>12?k=k.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):k.length>8?k=k.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):k.length>5?k=k.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):k.length>2&&(k=k.replace(/^(\d{2})(\d{1,3})$/,"$1.$2")),c.target.value=k});const L=e.querySelector("#cfg-cep");L==null||L.addEventListener("input",c=>{let k=c.target.value.replace(/\D/g,"").slice(0,8);k.length>5&&(k=k.replace(/^(\d{5})(\d{1,3})$/,"$1-$2")),c.target.value=k});const n=e.querySelector("#cfg-uf");n==null||n.addEventListener("input",c=>{c.target.value=c.target.value.toUpperCase().slice(0,2)});const u=e.querySelector("#form-settings-institucional");u==null||u.addEventListener("submit",c=>{c.preventDefault();const k=e.querySelector("#cfg-fantasia").value,_=e.querySelector("#cfg-razao").value,O=e.querySelector("#cfg-cnpj").value,F=e.querySelector("#cfg-ie").value,I=e.querySelector("#cfg-tel").value,T=e.querySelector("#cfg-email").value,D=e.querySelector("#cfg-site").value,q=e.querySelector("#cfg-cep").value,V=e.querySelector("#cfg-logradouro").value,G=e.querySelector("#cfg-numero").value,Z=e.querySelector("#cfg-complemento").value,J=e.querySelector("#cfg-bairro").value,K=e.querySelector("#cfg-cidade").value,W=e.querySelector("#cfg-uf").value.toUpperCase();C.updateSettings({nomeEscola:k,nomeClinica:k,nomeFantasia:k,razaoSocial:_,cnpj:O,inscricaoEstadual:F,telefoneContato:I,emailContato:T,website:D,cep:q,logradouro:V,numero:G,complemento:Z,bairro:J,cidade:K,estado:W},(t==null?void 0:t.nome)||"Administrador"),B("Dados da instituição salvos com sucesso!","success")});const y=e.querySelector("#footer-cloud-status"),d=c=>{y&&(c==="connected"?(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,y.style.color="#4ade80"):c==="fallback"?(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,y.style.color="#fbbf24"):(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,y.style.color="#94a3b8"))};return d(C.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",c=>{d(c.detail)}),e}class it{constructor(){ne(this,"currentScreen","home");ne(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!Y.isAuthenticated()){this.currentScreen="login",this.render();return}const e=Y.getCurrentUser(),t=window.location.hash.replace("#","");t&&["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(t)&&ie(e,t)?this.currentScreen=t:this.currentScreen=this.getFirstAllowedScreen(e),window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","");o&&o!==this.currentScreen&&this.navigateTo(o)}),window.addEventListener("app-settings-updated",()=>{const o=C.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const l=document.querySelector(".sidebar-logo");l&&(l.innerHTML=ue(o.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{Y.isAuthenticated()&&this.currentScreen!=="login"&&this.render()}),C.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of t)if(ie(e,o))return o;return"home"}navigateTo(e){const t=Y.getCurrentUser();if(!ie(t,e)){B("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(t);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),C.syncWithCloud()}render(){var r;if(this.appRoot.innerHTML="",!Y.isAuthenticated()||this.currentScreen==="login"){const m=Ye(()=>{const x=Y.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(x))});this.appRoot.appendChild(m);return}const e=document.createElement("div");e.className="app-container";const t=Y.getCurrentUser(),o=(t==null?void 0:t.papel)==="admin",s=C.getSettings(),l=s.nomeMenu||"Acusticamente";e.innerHTML=`
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
          ${ie(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${R.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${ie(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${R.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${ie(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${R.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${ie(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${R.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${ie(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${R.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${ie(t,"relatorios")?`
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

          ${ie(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${R.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${ie(t,"configuracoes")?`
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
    `;const S=e.querySelector("#app-sidebar"),a=e.querySelector("#sidebar-backdrop"),P=e.querySelector("#btn-mobile-menu-toggle"),f=e.querySelector("#btn-sidebar-close"),p=m=>{const x=m!==void 0?m:!S.classList.contains("open");S.classList.toggle("open",x),a.classList.toggle("open",x),document.body.style.overflow=x?"hidden":""};P==null||P.addEventListener("click",()=>p(!0)),f==null||f.addEventListener("click",()=>p(!1)),a==null||a.addEventListener("click",()=>p(!1)),e.querySelectorAll(".nav-item").forEach(m=>{m.addEventListener("click",x=>{const g=x.currentTarget.dataset.screen;p(!1),g&&this.navigateTo(g)})}),(r=e.querySelector("#btn-app-logout"))==null||r.addEventListener("click",()=>{fe({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{Y.logout()}})});const A=e.querySelector("#screen-viewport"),M=this.createViewElement(this.currentScreen);A.appendChild(M),this.appRoot.appendChild(e)}createViewElement(e){const t=o=>this.navigateTo(o);switch(e){case"home":return Ne(t);case"agenda":return We();case"alunos":return Ze(t);case"user":return tt(t);case"planos":return at();case"financeiro":return ot();case"relatorios":return st();case"auditoria":return nt();case"configuracoes":return rt();default:return Ne(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new it});
