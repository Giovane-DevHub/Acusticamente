var Ve=Object.defineProperty;var He=($,t,e)=>t in $?Ve($,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):$[t]=e;var re=($,t,e)=>He($,typeof t!="symbol"?t+"":t,e);import{E as Te,a as De}from"./pdf-D4_PdGrn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const k of r.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&o(k)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Be="acusticamente_audit_logs";class Ue{constructor(){re(this,"logs",[]);this.loadLogs()}loadLogs(){try{const t=localStorage.getItem(Be);t?this.logs=JSON.parse(t):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Be,JSON.stringify(this.logs))}catch(t){console.error("Erro ao salvar auditoria no storage:",t)}}log(t){const e=new Date,o=k=>k.toString().padStart(2,"0"),s=`${o(e.getDate())}/${o(e.getMonth()+1)}/${e.getFullYear()} ${o(e.getHours())}:${o(e.getMinutes())}:${o(e.getSeconds())}`,r={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:e.toISOString(),dataHoraFormatada:s,usuarioId:t.usuarioId||"1",usuarioLogin:t.usuarioLogin||"1",usuarioNome:t.usuarioNome||"Administrador",tela:t.tela,acao:t.acao,detalhes:t.detalhes};return this.logs.unshift(r),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:r})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:r})),r}getLogs(){return[...this.logs]}setLogs(t){this.logs=t,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const U=new Ue,Ie="acusticamente_users",we="acusticamente_students",$e="acusticamente_plans",Ee="acusticamente_appointments",ze="acusticamente_settings",Ae="acusticamente_payments";class Je{constructor(){re(this,"users",[]);re(this,"students",[]);re(this,"plans",[]);re(this,"appointments",[]);re(this,"payments",[]);re(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",website:"www.acusticamente.com.br",cep:"01310-100",logradouro:"Avenida Paulista",numero:"1000",complemento:"Conjunto 42",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});re(this,"cloudStatus","checking");this.initData()}initData(){const t=localStorage.getItem(Ie);t?this.users=JSON.parse(t).map(a=>{var P,h;return{...a,permissoes:{...a.permissoes,financeiro:((P=a.permissoes)==null?void 0:P.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((h=a.permissoes)==null?void 0:h.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const e=localStorage.getItem($e);e?this.plans=JSON.parse(e):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem(we);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[],this.saveStudents());const s=localStorage.getItem(Ee);s?this.appointments=JSON.parse(s):(this.appointments=[],this.saveAppointments());const r=localStorage.getItem(ze);r&&(this.settings=JSON.parse(r));const k=localStorage.getItem(Ae);k?this.payments=JSON.parse(k):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(a=>{var P;(P=a.observacoes)!=null&&P.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var P;(P=a.titulo)!=null&&P.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const t=new Date,e=o=>o.toString().padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(t,e,o){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:t,action:e,data:o})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const t=await fetch("/api/sync");if(!t.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const e=await t.json();if(!e.success||!e.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const o=e.data;return Array.isArray(o.students)&&(this.students=o.students,localStorage.setItem(we,JSON.stringify(this.students))),Array.isArray(o.payments)&&(this.payments=o.payments,localStorage.setItem(Ae,JSON.stringify(this.payments))),Array.isArray(o.appointments)&&(this.appointments=o.appointments,localStorage.setItem(Ee,JSON.stringify(this.appointments))),Array.isArray(o.plans)&&(this.plans=o.plans,localStorage.setItem($e,JSON.stringify(this.plans))),Array.isArray(o.users)&&o.users.length>0&&(this.users=o.users,localStorage.setItem(Ie,JSON.stringify(this.users))),o.settings&&(this.settings={...this.settings,...o.settings},localStorage.setItem(ze,JSON.stringify(this.settings))),Array.isArray(o.audit)&&(o.audit.length===0?U.clearLocalOnly():U.setLogs(o.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(t){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(we,JSON.stringify([])),localStorage.setItem(Ae,JSON.stringify([])),localStorage.setItem(Ee,JSON.stringify([])),localStorage.setItem($e,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await U.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Ie,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(we,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem($e,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Ee,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Ae,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}saveSettings(){localStorage.setItem(ze,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(t){return this.users.find(e=>e.id===t)}addUser(t,e){const o={...t,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:e,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(t,e,o){const s=this.users.findIndex(a=>a.id===t);if(s===-1)throw new Error("Usuário não encontrado.");const r=this.users[s],k=r.isSistema;return this.users[s]={...r,...e,isSistema:k,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${r.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(t,e){const o=this.users.find(s=>s.id===t);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==t),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:e,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(t,e){const o={...t,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(t,e,o){const s=this.students.findIndex(k=>k.id===t);if(s===-1)throw new Error("Aluno não encontrado.");const r=this.students[s];return this.students[s]={...r,...e},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${r.nome}" atualizado.`}),this.students[s]}deleteStudent(t,e){const o=this.students.find(s=>s.id===t);o&&(this.students=this.students.filter(s=>s.id!==t),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:e,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(t,e){const o={...t,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(t,e,o){const s=this.plans.findIndex(k=>k.id===t);if(s===-1)throw new Error("Plano não encontrado.");const r=this.plans[s];return this.plans[s]={...r,...e},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${r.nome}" atualizado.`}),this.plans[s]}deletePlan(t,e){const o=this.plans.find(s=>s.id===t);o&&(this.plans=this.plans.filter(s=>s.id!==t),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:e,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(t,e){const o={...t,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(r=>r.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:e,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(t,e,o){const s=this.appointments.findIndex(k=>k.id===t);if(s===-1)throw new Error("Compromisso não encontrado.");const r=this.appointments[s];return this.appointments[s]={...r,...e},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${r.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(t,e){const o=this.appointments.find(s=>s.id===t);o&&(this.appointments=this.appointments.filter(s=>s.id!==t),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:e,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(t,e){const o=this.updateAppointment(t,{status:"concluido"},e),s=this.students.find(r=>r.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:e,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(t,e,o,s){const r=e?"falta_justificada":"falta_injustificada",k=this.updateAppointment(t,{status:r,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(h=>h.id===k.alunoId);let P=(a==null?void 0:a.saldoReposicoes)||0;return e&&a?(P=(a.saldoReposicoes||0)+1,a.saldoReposicoes=P,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${k.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${P}. Motivo: ${o||"Não especificado"}`})):!e&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${k.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:k,saldoReposicoes:P}}agendarReposicao(t,e,o){const s=this.addAppointment({...t,tipoAula:"reposicao",aulaOriginalId:e,status:"agendado"},o);if(e){const k=this.appointments.findIndex(a=>a.id===e);k!==-1&&(this.appointments[k].aulaReposicaoId=s.id,this.saveAppointments())}const r=this.students.find(k=>k.id===s.alunoId);return r&&typeof r.saldoReposicoes=="number"&&r.saldoReposicoes>0&&(r.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${r.nome}". 1 crédito abatido. Saldo restante: ${r.saldoReposicoes}.`})),s}getStudentAppointments(t){return this.appointments.filter(e=>e.alunoId===t).sort((e,o)=>{const s=`${e.data}T${e.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const t=this.getTodayDateString();let e=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<t&&(o.status="atrasado",e=!0)}),e&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(t){return this.getPayments().filter(e=>e.alunoId===t)}isStudentOverdue(t){const e=this.getTodayDateString();return this.payments.some(o=>o.alunoId===t&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<e))}addPayment(t,e){const o=this.getTodayDateString();let s=t.status;s==="pendente"&&t.dataVencimento<o&&(s="atrasado");const r={...t,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(r),this.savePayments();const k=this.students.find(a=>a.id===r.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:e,detalhes:`Lançamento "${r.descricao}" (R$ ${r.valor.toFixed(2)}) cadastrado para o aluno "${(k==null?void 0:k.nome)||"N/A"}" com vencimento em ${r.dataVencimento}.`}),r}darBaixaPayment(t,e,o,s,r){const k=this.payments.findIndex(c=>c.id===t);if(k===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[k],P=a.status;a.status="pago",a.dataPagamento=e,a.formaPagamento=o,r!==void 0&&(a.observacoes=r.trim()?r.trim():a.observacoes),this.savePayments();const h=this.students.find(c=>c.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(h==null?void 0:h.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${e} (Status anterior: ${P}).`}),a}updatePayment(t,e,o){const s=this.payments.findIndex(c=>c.id===t);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const r=this.getTodayDateString();let k=e.status||this.payments[s].status;const a=e.dataVencimento||this.payments[s].dataVencimento;k==="pendente"&&a<r&&(k="atrasado"),this.payments[s]={...this.payments[s],...e,status:k},this.savePayments();const P=this.payments[s],h=this.students.find(c=>c.id===P.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${P.descricao}" do aluno "${(h==null?void 0:h.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(t,e){const o=this.payments.find(r=>r.id===t);if(!o)return;this.payments=this.payments.filter(r=>r.id!==t),this.savePayments();const s=this.students.find(r=>r.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:e,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(t,e,o){const s=E=>E.toString().padStart(2,"0"),r=`${t}-${s(e)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e-1]||r,P=this.students.filter(E=>E.status==="ativo");let h=0,c=0;return P.forEach(E=>{if(this.payments.some(v=>v.alunoId===E.id&&(v.mesReferencia===r||v.dataVencimento.startsWith(r)))){c++;return}const i=E.diaVencimento||10,u=new Date(t,e,0).getDate(),x=Math.min(i,u),f=`${t}-${s(e)}-${s(x)}`,l=typeof E.valorMensalidade=="number"&&E.valorMensalidade>0?E.valorMensalidade:280;this.addPayment({alunoId:E.id,descricao:`Mensalidade ${a}/${t}`,mesReferencia:r,valor:l,dataVencimento:f,status:"pendente",observacoes:`Gerado automaticamente para o plano ${E.moduloAtual||E.instrumentoPrincipal||"Música"}`},o),h++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${t}: ${h} mensalidade(s) criada(s) e ${c} já existente(s) pulada(s).`}),{criadas:h,puladas:c}}getSettings(){return{...this.settings}}updateSettings(t,e){return this.settings={...this.settings,...t},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:e,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const I=new Je,ge={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function ke($){var s,r,k,a,P,h,c,E,M,i,u,x,f,l,v,b,A,g,z,L,n,m,y,p,d,C,O,_;if(!$)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if($.papel==="admin")return JSON.parse(JSON.stringify(ge.admin));const t=ge[$.papel]||ge.professor,e=$.permissoes;if(!e)return JSON.parse(JSON.stringify(t));const o=N=>typeof N=="boolean";return{alunos:{acesso:o(e.alunos)?e.alunos:((s=e.alunos)==null?void 0:s.acesso)??t.alunos.acesso,cadastrar:o(e.alunos)?e.alunos:((r=e.alunos)==null?void 0:r.cadastrar)??t.alunos.cadastrar,alterar:o(e.alunos)?e.alunos:((k=e.alunos)==null?void 0:k.alterar)??t.alunos.alterar,excluir:o(e.alunos)?!1:((a=e.alunos)==null?void 0:a.excluir)??t.alunos.excluir},agenda:{acesso:o(e.agenda)?e.agenda:((P=e.agenda)==null?void 0:P.acesso)??t.agenda.acesso,cadastrar:o(e.agenda)?e.agenda:((h=e.agenda)==null?void 0:h.cadastrar)??t.agenda.cadastrar,alterar:o(e.agenda)?e.agenda:((c=e.agenda)==null?void 0:c.alterar)??t.agenda.alterar,excluir:o(e.agenda)?!1:((E=e.agenda)==null?void 0:E.excluir)??t.agenda.excluir},planos:{acesso:o(e.planos)?e.planos:((M=e.planos)==null?void 0:M.acesso)??t.planos.acesso,cadastrar:o(e.planos)?e.planos:((i=e.planos)==null?void 0:i.cadastrar)??t.planos.cadastrar,alterar:o(e.planos)?e.planos:((u=e.planos)==null?void 0:u.alterar)??t.planos.alterar,excluir:o(e.planos)?!1:((x=e.planos)==null?void 0:x.excluir)??t.planos.excluir},home:{acesso:o(e.home)?e.home:((f=e.home)==null?void 0:f.acesso)??t.home.acesso},financeiro:{acesso:o(e.financeiro)?e.financeiro:((l=e.financeiro)==null?void 0:l.acesso)??((v=t.financeiro)==null?void 0:v.acesso)??!1,cadastrar:o(e.financeiro)?e.financeiro:((b=e.financeiro)==null?void 0:b.cadastrar)??((A=t.financeiro)==null?void 0:A.cadastrar)??!1,alterar:o(e.financeiro)?e.financeiro:((g=e.financeiro)==null?void 0:g.alterar)??((z=t.financeiro)==null?void 0:z.alterar)??!1,excluir:o(e.financeiro)?!1:((L=e.financeiro)==null?void 0:L.excluir)??((n=t.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(e.relatorios)?e.relatorios:((m=e.relatorios)==null?void 0:m.acesso)??((y=t.relatorios)==null?void 0:y.acesso)??!0,gerar:o(e.relatorios)?e.relatorios:((p=e.relatorios)==null?void 0:p.gerar)??((d=t.relatorios)==null?void 0:d.gerar)??!0},auditoria:{acesso:o(e.auditoria)?e.auditoria:((C=e.auditoria)==null?void 0:C.acesso)??t.auditoria.acesso},configuracoes:{acesso:o(e.configuracoes)?e.configuracoes:((O=e.configuracoes)==null?void 0:O.acesso)??t.configuracoes.acesso,alterar:o(e.configuracoes)?e.configuracoes:((_=e.configuracoes)==null?void 0:_.alterar)??t.configuracoes.alterar}}}function ce($,t){if(!$)return!1;if(t==="login")return!0;if(t==="user")return $.papel==="admin";if($.papel==="admin"||$.isSistema)return!0;const o=ke($)[t];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function te($,t,e){if(!$)return!1;if($.papel==="admin")return!0;const s=ke($)[t];return s?!!s[e]:!1}const Se="acusticamente_active_session";class Ge{constructor(){re(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const t=localStorage.getItem(Se);t&&(this.currentUser=JSON.parse(t))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const t=I.getUserById(this.currentUser.id);t&&(this.currentUser=t,localStorage.setItem(Se,JSON.stringify(t)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(t,e){const s=I.getUsers().find(r=>r.login===t.trim());return s?s.senha!==e.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Se,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:t,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${t}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Se),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const Q=new Ge;function We($=40){return`
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
  `}function le($,t=40){return $&&$.trim()!==""?`<img src="${$}" alt="Logotipo" class="brand-logo-custom" style="width: ${t}px; height: ${t}px; object-fit: contain; border-radius: 6px; display: block;" />`:We(t)}function B($,t="success"){const e=document.getElementById("toast-container");if(!e)return;const o=document.createElement("div");o.className=`toast toast-${t}`,o.innerHTML=`
    <span class="toast-icon">${t==="success"?"✓":t==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${$}</span>
  `,e.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function de($){const t=document.getElementById("modal-container");if(!t)return;t.innerHTML=`
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
  `,document.getElementById("active-modal-backdrop");const e=document.getElementById("modal-close-btn"),o=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),r=()=>{t.innerHTML="",$.onCancel&&$.onCancel()};e.onclick=r,o.onclick=r,s&&$.onConfirm&&(s.onclick=async()=>{const k=document.querySelector(".modal-card");await $.onConfirm(k)!==!1&&(t.innerHTML="")})}function ve(){const $=document.getElementById("modal-container");$&&($.innerHTML="")}function fe($){de({title:$.title||"Confirmar Exclusão",bodyHtml:`
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
    `,confirmText:$.confirmText||"Excluir Definitivamente",confirmBtnClass:$.confirmBtnClass||"btn-danger",onConfirm:()=>($.onConfirm(),!0)})}const q={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},Le="acusticamente_auth_remember",Ne="acusticamente_manual_logout";function Ye($,t){const e=document.createElement("div");e.className="login-page";const o=I.getSettings(),s=o.nomeMenu||o.nomeFantasia||"Acusticamente";let r={username:"",password:"",remember:!1,autoLogin:!1};try{const E=localStorage.getItem(Le);E&&(r={...r,...JSON.parse(E)})}catch{r={username:"",password:"",remember:!1,autoLogin:!1}}e.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${le(o.logotipoCustomizado,50)}
        </div>
        <h2>${s}</h2>
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
        <div style="display: flex; justify-content: flex-start; margin-bottom: 14px;">
          <button type="button" id="btn-back-to-site" style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-subtle); color: var(--text-secondary); padding: 6px 14px; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Voltar ao Site
          </button>
        </div>

        <div class="login-card-header">
          <div style="display: flex; justify-content: center; margin-bottom: 10px;">
            ${le(o.logotipoCustomizado,58)}
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
              value="${r.remember?r.username:""}"
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
              value="${r.remember?r.password:""}"
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
                ${r.remember?"checked":""} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Lembrar senha</span>
            </label>

            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-autologin" 
                ${r.autoLogin?"checked":""} 
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
  `;const k=e.querySelector("#login-remember"),a=e.querySelector("#login-autologin"),P=e.querySelector("#btn-back-to-site");P==null||P.addEventListener("click",()=>{t?t():window.location.hash="site"}),a==null||a.addEventListener("change",()=>{a.checked&&!k.checked&&(k.checked=!0)}),k==null||k.addEventListener("change",()=>{!k.checked&&a.checked&&(a.checked=!1)});const h=e.querySelector("#login-form");h.onsubmit=E=>{var b;E.preventDefault();const M=e.querySelector("#login-username"),i=e.querySelector("#login-password"),u=M.value.trim(),x=i.value.trim(),f=k.checked,l=a.checked,v=Q.login(u,x);v.success?(f?localStorage.setItem(Le,JSON.stringify({username:u,password:x,remember:!0,autoLogin:l})):localStorage.removeItem(Le),sessionStorage.removeItem(Ne),B(`Bem-vindo, ${(b=v.user)==null?void 0:b.nome}!`,"success"),$()):B(v.message,"error")};const c=sessionStorage.getItem(Ne)==="true";return r.autoLogin&&r.remember&&r.username&&r.password&&!c&&setTimeout(()=>{var M;if(!e.isConnected&&!document.body.contains(e))return;const E=Q.login(r.username,r.password);E.success&&(B(`Bem-vindo de volta, ${(M=E.user)==null?void 0:M.nome}!`,"success"),$())},100),e}function Xe($){var M,i,u;const t=document.createElement("div");t.className="public-site-wrapper";const e=I.getSettings(),o=e.nomeFantasia||e.nomeEscola||"Acusticamente - Escola de Música",s=e.nomeMenu||"Acusticamente",r=e.telefoneContato||"(11) 98231-1122",k=r.replace(/\D/g,""),a=e.emailContato||"contato@acusticamente.com.br",P=e.cidade?`${e.cidade} - ${e.estado||"SP"}`:"São Paulo - SP",h=e.logradouro?`${e.logradouro}, ${e.numero||""} ${e.bairro?"- "+e.bairro:""}`:"Rua das Cordas, 120 - Centro",c=`https://wa.me/55${k}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`,E=Q.isAuthenticated();return t.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Superior Esquerdo: Botão Pequeno Entrar conforme solicitado -->
        <div class="site-header-left">
          <button type="button" class="btn-site-login" id="btn-header-login" title="${E?"Acessar o Painel de Gestão":"Área do Aluno e Equipe"}">
            <span class="site-login-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
            </span>
            <span>${E?"Painel":"Entrar"}</span>
          </button>
        </div>

        <!-- Centro: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${le(e.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${s}</span>
        </div>

        <!-- Canto Direito: Links e CTA WhatsApp -->
        <div class="site-header-right">
          <nav class="site-nav-links">
            <a href="#cursos">Cursos</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </nav>
          <a href="${c}" target="_blank" rel="noopener noreferrer" class="btn-site-cta">
            <span>Aula Experimental</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="site-hero">
      <div class="site-hero-bg-glow"></div>
      <div class="site-hero-content">
        <div class="site-hero-badge">
          <span>🎵 Escola de Música &bull; Do Iniciante ao Avançado</span>
        </div>
        <h1 class="site-hero-title">
          Descubra o prazer de <span>tocar o instrumento</span> dos seus sonhos.
        </h1>
        <p class="site-hero-subtitle">
          Aulas práticas e envolventes de violão, piano, técnica vocal, bateria e musicalização. 
          Metodologia personalizada para o seu ritmo e com acompanhamento pedagógico contínuo.
        </p>
        <div class="site-hero-actions">
          <a href="${c}" target="_blank" rel="noopener noreferrer" class="btn-hero-primary">
            <span>💬 Agendar Aula Experimental</span>
          </a>
          <a href="#cursos" class="btn-hero-secondary">
            <span>Ver Cursos Disponíveis ↓</span>
          </a>
        </div>

        <!-- Selos de Confiança -->
        <div class="site-stats-row">
          <div class="site-stat-card">
            <strong class="stat-number">+500</strong>
            <span class="stat-label">Alunos Formados</span>
          </div>
          <div class="site-stat-card">
            <strong class="stat-number">100%</strong>
            <span class="stat-label">Aulas Práticas</span>
          </div>
          <div class="site-stat-card">
            <strong class="stat-number">6+</strong>
            <span class="stat-label">Instrumentos</span>
          </div>
          <div class="site-stat-card">
            <strong class="stat-number">4.9 ★</strong>
            <span class="stat-label">Avaliação dos Pais</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Cursos & Instrumentos -->
    <section class="site-section" id="cursos">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">NOSSOS CURSOS</span>
          <h2 class="section-title">Encontre o Instrumento Perfeito para Você</h2>
          <p class="section-subtitle">Aulas pensadas para todas as faixas etárias, do primeiro acorde aos arranjos avançados.</p>
        </div>

        <div class="site-courses-grid">
          
          <!-- Curso 1: Violão e Guitarra -->
          <div class="site-course-card">
            <div class="course-icon-badge">🪕</div>
            <h3>Violão &amp; Harmonia Prática</h3>
            <p>Aprenda acordes, batidas rítmicas, dedilhados e o repertório que você mais ama tocar em reuniões de amigos ou no palco.</p>
            <ul class="course-topics">
              <li>✓ Postura e transição ágil de acordes</li>
              <li>✓ Batidas populares, MPB, Pop e Rock</li>
              <li>✓ Leitura de cifras, tablaturas e levadas</li>
            </ul>
            <a href="${c}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 2: Piano & Teclado -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎹</div>
            <h3>Piano &amp; Teclado</h3>
            <p>Desenvolva independência das mãos, leitura musical fluida e sensibilidade melódica em repertório clássico ou moderno.</p>
            <ul class="course-topics">
              <li>✓ Digitação e exercícios posturais</li>
              <li>✓ Teoria aplicada, harmonia e escalas</li>
              <li>✓ Clássicos, trilhas sonoras e louvor</li>
            </ul>
            <a href="${c}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 3: Canto & Técnica Vocal -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎤</div>
            <h3>Técnica Vocal &amp; Canto</h3>
            <p>Libere todo o potencial da sua voz sem esforço, com afinação precisa, respiração diafragmática e projeção sonora.</p>
            <ul class="course-topics">
              <li>✓ Apoio respiratório e ressonância</li>
              <li>✓ Afinação e extensão vocal sem tensão</li>
              <li>✓ Interpretação e presença de palco</li>
            </ul>
            <a href="${c}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 4: Bateria & Percussão -->
          <div class="site-course-card">
            <div class="course-icon-badge">🥁</div>
            <h3>Bateria &amp; Percussão</h3>
            <p>Domine a pulsação, coordenação motora dos quatro membros e os ritmos mais dinâmicos da música contemporânea.</p>
            <ul class="course-topics">
              <li>✓ Rudimentos e precisão com metrônomo</li>
              <li>✓ Levadas de Rock, Funk, Samba e Jazz</li>
              <li>✓ Dinâmica de conjunto e acompanhamento</li>
            </ul>
            <a href="${c}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 5: Musicalização Infantil -->
          <div class="site-course-card highlight">
            <div class="course-icon-badge">🎶</div>
            <h3>Musicalização Infantil</h3>
            <p>Para crianças de 4 a 10 anos. Estímulo à criatividade, percepção auditiva, ritmo e socialização de forma lúdica.</p>
            <ul class="course-topics">
              <li>✓ Jogos sonoros e instrumentos infantis</li>
              <li>✓ Discriminação de timbres e alturas</li>
              <li>✓ Base sólida para escolha de instrumento</li>
            </ul>
            <a href="${c}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 6: Contrabaixo & Teoria -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎸</div>
            <h3>Contrabaixo &amp; Harmonia</h3>
            <p>A alma do groove! Aprenda condução rítmica, linhas de baixo sólidas e comunicação afinada com a bateria.</p>
            <ul class="course-topics">
              <li>✓ Técnicas de pizzicato e palheta</li>
              <li>✓ Escalas pentatônicas e arpejos</li>
              <li>✓ Criação de grooves marcantes</li>
            </ul>
            <a href="${c}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Seção Metodologia -->
    <section class="site-section bg-darker" id="metodologia">
      <div class="site-container">
        <div class="methodology-split">
          <div class="methodology-text">
            <span class="section-tag">POR QUE A ACUSTICAMENTE?</span>
            <h2 class="section-title">Um Método Humano, Descontraído e Eficaz</h2>
            <p class="section-desc">
              Acreditamos que aprender música não pode ser uma tarefa engessada. Nosso modelo pedagógico integra técnica de verdade às músicas que você gosta de ouvir.
            </p>

            <div class="methodology-features">
              <div class="feat-item">
                <div class="feat-icon">🎯</div>
                <div>
                  <h4>Aulas 100% Personalizadas</h4>
                  <p>Cada aluno tem seu plano de ensino individual, com metas e repertório alinhados ao seu objetivo.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">📅</div>
                <div>
                  <h4>Flexibilidade com Reposições</h4>
                  <p>Avisou com antecedência? Você não perde a aula! Nosso sistema garante créditos para repor suas aulas perdidas.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🎙️</div>
                <div>
                  <h4>Salas com Tratamento Acústico</h4>
                  <p>Ambiente isolado, climatizado e equipado com instrumentos de marcas renomadas para a melhor experiência sonora.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="methodology-visual">
            <div class="methodology-card-preview">
              <div class="preview-header">
                <span class="preview-dot red"></span>
                <span class="preview-dot yellow"></span>
                <span class="preview-dot green"></span>
                <span class="preview-title">Acusticamente Experience</span>
              </div>
              <div class="preview-body">
                <div class="preview-quote">
                  "A música é a arte de expressar o indizível. Aqui você aprende tocando desde o primeiro dia."
                </div>
                <div class="preview-tags">
                  <span>#PráticaMusical</span>
                  <span>#SemPressão</span>
                  <span>#EvoluçãoConstante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="site-section" id="depoimentos">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">HISTÓRIAS REAIS</span>
          <h2 class="section-title">O que Dizem Nossos Alunos e Pais</h2>
          <p class="section-subtitle">Resultados que transformam vidas através da expressão musical.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"Comecei do zero com 34 anos achando que não conseguiria. Hoje já toco minhas músicas favoritas no violão e me sinto realizado!"</p>
            <div class="author-info">
              <strong>Marcelo F.</strong>
              <span>Aluno de Violão</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"A metodologia de musicalização para crianças é sensacional. Minha filha de 6 anos adora as quartas-feiras de aula e desenvolveu muito o foco."</p>
            <div class="author-info">
              <strong>Juliana M.</strong>
              <span>Mãe de aluna</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"Professores extremamente atenciosos e didáticos. A técnica vocal mudou minha segurança para cantar em público sem forçar a garganta."</p>
            <div class="author-info">
              <strong>Renan B.</strong>
              <span>Aluno de Canto</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final WhatsApp -->
    <section class="site-cta-banner">
      <div class="site-container cta-banner-inner">
        <h2>Pronto para Começar sua Jornada Musical?</h2>
        <p>Agende uma aula experimental sem compromisso e venha conhecer nosso espaço.</p>
        <a href="${c}" target="_blank" class="btn-banner-whatsapp">
          <span>📲 Chamar no WhatsApp: ${r}</span>
        </a>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${le(e.logotipoCustomizado,32)}
            <span>${s}</span>
          </div>
          <p>${o}</p>
          <div class="footer-address">
            <p>📍 ${h}</p>
            <p>🏙️ ${P}</p>
            <p>✉️ ${a}</p>
            <p>📞 ${r}</p>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#metodologia">Metodologia</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Portal Interno</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 12px;">
            Acesso exclusivo para professores, atendentes e administração da escola.
          </p>
          <button type="button" class="btn-footer-admin" id="btn-footer-login">
            🔐 Acessar Área de Gestão
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="site-container footer-bottom-inner">
          <span>&copy; ${new Date().getFullYear()} ${o}. Todos os direitos reservados.</span>
          <span>Desenvolvido por <strong>DevHub</strong></span>
        </div>
      </div>
    </footer>
  `,(M=t.querySelector("#btn-header-login"))==null||M.addEventListener("click",()=>{$(E?"home":"login")}),(i=t.querySelector("#btn-footer-login"))==null||i.addEventListener("click",()=>{$(E?"home":"login")}),(u=t.querySelector("#site-logo-link"))==null||u.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),t}function Fe($){var c,E;const t=document.createElement("div"),e=Q.getCurrentUser(),o=I.getStudents(),s=I.getPlans(),r=I.getAppointments(),k=I.getTodayDateString(),a=r.filter(M=>M.data===k),P=o.filter(M=>M.status==="ativo").length,h=a.find(M=>M.status==="agendado");return t.innerHTML=`
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
        ${q.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${q.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${a.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${q.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${P}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${q.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${h?h.horaInicio:"--:--"}</span>
          <span class="metric-label">${h?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${q.planos}
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
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(M=>{const i=o.find(v=>v.id===M.alunoId),u=s.find(v=>v.id===M.planoId),x=M.status==="concluido",f=M.status==="agendado";let l='<span class="badge badge-warning">⏳ Agendado</span>';return x?l='<span class="badge badge-success">✓ Concluído</span>':M.status==="falta_justificada"?l='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':M.status==="falta_injustificada"?l='<span class="badge badge-danger">✕ Falta Injustificada</span>':M.status==="cancelado"&&(l='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${M.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${M.horaInicio} - ${M.horaFim}</strong>
                            ${M.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                ${((i==null?void 0:i.nome)||"A")[0]}
                              </div>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${(i==null?void 0:i.nome)||"Aluno não vinculado"}
                              </span>
                            </div>
                          </td>
                          <td class="col-hide-md" style="white-space: nowrap;">
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(u==null?void 0:u.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${l}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${f?`<button class="btn btn-secondary btn-complete-class" data-id="${M.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${x?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(c=t.querySelector("#home-btn-new-appointment"))==null||c.addEventListener("click",()=>{$("agenda")}),(E=t.querySelector("#home-btn-view-all-agenda"))==null||E.addEventListener("click",()=>{$("agenda")}),t.querySelectorAll(".btn-complete-class").forEach(M=>{M.addEventListener("click",i=>{const u=i.currentTarget.dataset.id;u&&(I.updateAppointment(u,{status:"concluido"},(e==null?void 0:e.nome)||"Administrador"),B("Aula concluída com sucesso!","success"),$("home"))})}),t}function Qe($){const t=document.createElement("div"),e=Q.getCurrentUser();let o=new Date;function s(){var A,g,z,L;const a=I.getStudents();I.getPlans();const P=I.getAppointments(),h=o.getFullYear(),c=o.getMonth(),E=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],M=new Date(h,c,1).getDay(),i=new Date(h,c+1,0).getDate(),u=new Date(h,c,0).getDate(),x=new Date,f=x.getFullYear()===h&&x.getMonth()===c,l=[];for(let n=M;n>0;n--){const m=u-n+1;l.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${m}</span>
          </div>
        </div>
      `)}for(let n=1;n<=i;n++){const m=N=>N.toString().padStart(2,"0"),y=`${h}-${m(c+1)}-${m(n)}`,p=f&&x.getDate()===n,d=P.filter(N=>N.data===y),C=d.slice(0,3).map(N=>{const S=a.find(V=>V.id===N.alunoId),T=S?S.nome.split(" ")[0]:"Aula";let D="",R="";return N.status==="concluido"?(D="concluido",R="✓ "):N.status==="falta_justificada"?(D="falta-justificada",R="⚠️ "):N.status==="falta_injustificada"?(D="falta-injustificada",R="✕ "):N.tipoAula==="reposicao"&&(D="reposicao",R="🔄 "),`
            <div class="calendar-appointment-badge ${D}" 
                 data-app-id="${N.id}" 
                 title="${N.horaInicio} - ${(S==null?void 0:S.nome)||"Aluno"} (${N.status}${N.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${R}${N.horaInicio}</strong> ${T}
            </div>
          `}).join(""),O=d.length>3?d.length-3:0,_=O>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${O} mais</div>`:"";l.push(`
        <div class="calendar-day-cell ${p?"today":""}" data-date="${y}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${d.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${d.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${C}
            ${_}
          </div>
        </div>
      `)}const v=l.length,b=v>35?42-v:35-v;for(let n=1;n<=b;n++)l.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
          </div>
        </div>
      `);t.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${E[c]} de ${h}</h2>
            
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
            ${te(e,"agenda","cadastrar")?`
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${q.plus} Nova Aula / Compromisso
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

          ${l.join("")}
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
    `,(A=t.querySelector("#agenda-btn-prev"))==null||A.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(g=t.querySelector("#agenda-btn-next"))==null||g.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(z=t.querySelector("#agenda-btn-today"))==null||z.addEventListener("click",()=>{o=new Date,s()}),(L=t.querySelector("#agenda-btn-new-app"))==null||L.addEventListener("click",()=>{k()}),t.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",m=>{const y=n.dataset.date;y&&r(y)})}),t.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",m=>{m.stopPropagation();const y=n.dataset.appId,p=P.find(d=>d.id===y);p&&r(p.data)})})}function r(a){const P=I.getStudents(),h=I.getPlans(),c=I.getAppointments().filter(l=>l.data===a),[E,M,i]=a.split("-"),u=`${i}/${M}/${E}`,x=c.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${c.map(l=>{const v=P.find(d=>d.id===l.alunoId),b=h.find(d=>d.id===l.planoId),A=l.status==="concluido",g=l.status==="falta_justificada",z=l.status==="falta_injustificada",L=l.status==="cancelado",n=l.status==="agendado",m=l.tipoAula==="reposicao";let y="var(--color-coral)",p='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return A?(y="var(--status-success)",p='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):g?(y="#f59e0b",p='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):z?(y="var(--status-danger)",p='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):L&&(y="var(--border-subtle)",p='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${y};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${l.horaInicio} - ${l.horaFim}</strong>
                        ${p}
                        ${m?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${l.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(v==null?void 0:v.nome)||"Não vinculado"}</strong>
                        ${v!=null&&v.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${v.instrumentoPrincipal}</span>`:""}
                        ${b?` &bull; Plano: <span style="color: #ff9187;">${b.nome}</span>`:""}
                      </div>

                      ${l.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${l.justificativaFalta}
                             </div>`:""}

                      ${l.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${l.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${l.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${te(e,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${l.id}" title="Editar Detalhes">
                              ${q.edit}
                            </button>
                          `:""}
                      ${te(e,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${l.id}" title="Excluir">
                              ${q.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${te(e,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${n?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${l.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${l.id}" data-name="${(v==null?void 0:v.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${l.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${g&&!l.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${l.id}" data-student-id="${l.alunoId}" data-title="${l.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
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
            Compromissos agendados: <strong style="color: var(--text-white);">${c.length}</strong>
          </span>
          ${te(e,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${q.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${x}
      </div>
    `;de({title:`Aulas do Dia: ${u}`,bodyHtml:f,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var l;(l=document.getElementById("btn-modal-new-appointment"))==null||l.addEventListener("click",()=>{ve(),k({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(v=>{v.addEventListener("click",b=>{const A=b.currentTarget.dataset.id;A&&(I.marcarPresenca(A,(e==null?void 0:e.nome)||"Administrador"),B("Presença confirmada e aula concluída!","success"),s(),r(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(v=>{v.addEventListener("click",b=>{const A=b.currentTarget.dataset.id,g=b.currentTarget.dataset.name;if(!A)return;const z=prompt(`Informe o motivo da falta justificada de ${g} (Ex: Atestado médico, Viagem em família):`);if(z===null)return;const L=I.registrarFalta(A,!0,z,(e==null?void 0:e.nome)||"Administrador");B(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${L.saldoReposicoes}).`,"success"),s(),r(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(v=>{v.addEventListener("click",b=>{const A=b.currentTarget.dataset.id;A&&fe({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{I.registrarFalta(A,!1,void 0,(e==null?void 0:e.nome)||"Administrador"),B("Falta injustificada registrada.","info"),s(),r(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(v=>{v.addEventListener("click",b=>{const A=b.currentTarget,g=A.dataset.id,z=A.dataset.studentId,L=A.dataset.title;ve(),k({studentId:z,aulaOriginalId:g,tipoAula:"reposicao",titulo:L?`Reposição: ${L}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(v=>{v.addEventListener("click",b=>{const A=b.currentTarget.dataset.id,g=I.getAppointments().find(z=>z.id===A);g&&(ve(),k({existingApp:g}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(v=>{v.addEventListener("click",b=>{const A=b.currentTarget.dataset.id,g=I.getAppointments().find(z=>z.id===A);g&&fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${g.titulo}</strong>"?`,onConfirm:()=>{I.deleteAppointment(g.id,(e==null?void 0:e.nome)||"Administrador"),B("Compromisso removido.","info"),s(),r(a)}})})})},50)}function k(a){const P=I.getStudents(),h=I.getPlans(),c=a==null?void 0:a.existingApp,E=!!c,M=(c==null?void 0:c.alunoId)||(a==null?void 0:a.studentId)||"",i=(c==null?void 0:c.data)||(a==null?void 0:a.defaultDate)||I.getTodayDateString(),u=((c==null?void 0:c.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",x=P.map(v=>`<option value="${v.id}" ${M===v.id?"selected":""}>${v.nome} (${v.instrumentoPrincipal||"Geral"}) - Saldo: ${v.saldoReposicoes||0} rep.</option>`).join(""),f=h.map(v=>`<option value="${v.id}" ${(c==null?void 0:c.planoId)===v.id?"selected":""}>${v.nome}</option>`).join(""),l=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Tipo de Aula -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" style="margin: 0; font-weight: 600; color: var(--text-white);">Tipo de Aula:</label>
          <div style="display: flex; gap: 14px;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: var(--text-white);">
              <input type="radio" name="app-tipo-aula" value="regular" ${u?"":"checked"} style="accent-color: var(--color-coral);" />
              Aula Regular
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: #4ade80;">
              <input type="radio" name="app-tipo-aula" value="reposicao" ${u?"checked":""} style="accent-color: #22c55e;" />
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
            ${f}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${i}" required />
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

        ${E?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${q.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;de({title:E?"Editar Aula / Compromisso":u?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:l,confirmText:E?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const v=document.getElementById("app-title").value.trim(),b=document.getElementById("app-student").value,A=document.getElementById("app-plan").value,g=document.getElementById("app-date").value,z=document.getElementById("app-time-start").value,L=document.getElementById("app-time-end").value,n=document.getElementById("app-status").value,m=document.getElementById("app-justificativa").value.trim(),y=document.getElementById("app-obs").value.trim(),p=document.querySelector('input[name="app-tipo-aula"]:checked'),d=(p==null?void 0:p.value)||"regular";if(!v||!b||!g||!z)return B("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const C=(e==null?void 0:e.nome)||"Administrador";return E&&c?(I.updateAppointment(c.id,{titulo:v,alunoId:b,planoId:A||void 0,data:g,horaInicio:z,horaFim:L,status:n,tipoAula:d,justificativaFalta:m||void 0,observacoes:y},C),B("Aula atualizada com sucesso!","success")):d==="reposicao"?(I.agendarReposicao({titulo:v,alunoId:b,planoId:A||void 0,data:g,horaInicio:z,horaFim:L,status:n,justificativaFalta:m||void 0,observacoes:y},a==null?void 0:a.aulaOriginalId,C),B("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(I.addAppointment({titulo:v,alunoId:b,planoId:A||void 0,data:g,horaInicio:z,horaFim:L,status:n,tipoAula:d,justificativaFalta:m||void 0,observacoes:y},C),B("Aula agendada com sucesso!","success")),s(),!0}}),E&&c&&setTimeout(()=>{var v;(v=document.getElementById("btn-delete-app"))==null||v.addEventListener("click",()=>{fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${c.titulo}</strong>"?`,onConfirm:()=>{I.deleteAppointment(c.id,(e==null?void 0:e.nome)||"Administrador"),B("Compromisso removido.","info"),ve(),s()}})})},50)}return s(),t}const Ke=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function Re($){const t=($||"").toLowerCase();return t.includes("bateria")||t.includes("percuss")?"🥁":t.includes("piano")||t.includes("teclado")?"🎹":t.includes("guitarra")?"🎸":t.includes("violão")||t.includes("violao")?"🪕":t.includes("canto")||t.includes("vocal")?"🎤":t.includes("baixo")?"🎸":t.includes("violino")?"🎻":t.includes("flauta")||t.includes("sax")?"🎷":"🎵"}function Ze($){if(!$)return"";const t=new Date($+"T00:00:00");if(isNaN(t.getTime()))return"";const e=new Date;let o=e.getFullYear()-t.getFullYear();const s=e.getMonth()-t.getMonth();return(s<0||s===0&&e.getDate()<t.getDate())&&o--,`${o} anos`}function qe($){if(!$)return null;const t=new Date($+"T00:00:00");if(isNaN(t.getTime()))return null;const e=new Date;let o=e.getFullYear()-t.getFullYear();const s=e.getMonth()-t.getMonth();return(s<0||s===0&&e.getDate()<t.getDate())&&o--,o}function et($,t){const e=$.replace(/\D/g,"");if(!e)return"";const o=e.length<=11?`55${e}`:e,s=encodeURIComponent(`Olá, ${t}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function Oe($,t){const e={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
          <strong>${$.formaPagamento?e[$.formaPagamento]||$.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${$.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;de({title:`Recibo de Pagamento: ${$.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function tt($){const t=document.createElement("div"),e=Q.getCurrentUser();let o="";function s(){var u,x;const a=I.getStudents(),P=I.getPlans(),h=te(e,"alunos","cadastrar"),c=te(e,"alunos","alterar"),E=te(e,"alunos","excluir"),M=a.filter(f=>f.nome.toLowerCase().includes(o.toLowerCase())||f.email.toLowerCase().includes(o.toLowerCase())||f.telefone.includes(o)||f.instrumentoPrincipal&&f.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||f.responsavelNome&&f.responsavelNome.toLowerCase().includes(o.toLowerCase()));t.innerHTML=`
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

        ${h?`
              <button class="btn btn-primary" id="btn-new-student">
                ${q.plus} Cadastrar Novo Aluno
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
            ${q.search}
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
              ${M.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':M.map(f=>{const l=P.find(b=>b.id===f.planoId),v=f.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${f.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${f.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${Re(f.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${f.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${f.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${(l==null?void 0:l.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${v?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${v?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${f.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${q.profile}
                                </button>
                                ${c?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${f.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${E?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${f.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${q.trash}
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
    `;const i=t.querySelector("#student-search-input");i==null||i.addEventListener("input",f=>{o=f.target.value,s();const l=t.querySelector("#student-search-input");l&&(l.focus(),l.selectionStart=l.selectionEnd=l.value.length)}),(u=t.querySelector("#btn-clear-search"))==null||u.addEventListener("click",()=>{o="",s()}),(x=t.querySelector("#btn-new-student"))==null||x.addEventListener("click",()=>{k()}),t.querySelectorAll(".btn-view-student").forEach(f=>{f.addEventListener("click",l=>{const v=l.currentTarget.dataset.id,b=I.getStudents().find(A=>A.id===v);b&&r(b)})}),t.querySelectorAll(".btn-edit-student").forEach(f=>{f.addEventListener("click",l=>{const v=l.currentTarget.dataset.id,b=I.getStudents().find(A=>A.id===v);b&&k(b)})}),t.querySelectorAll(".btn-delete-student").forEach(f=>{f.addEventListener("click",l=>{const v=l.currentTarget.dataset.id,b=I.getStudents().find(A=>A.id===v);b&&fe({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${b.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{I.deleteStudent(b.id,(e==null?void 0:e.nome)||"Administrador"),B(`Aluno "${b.nome}" excluído.`,"info"),s()}})})})}function r(a){I.getPlans().find(n=>n.id===a.planoId);const h=I.getStudentAppointments(a.id),c=I.getStudentPayments(a.id),E=Ze(a.dataNascimento),M=et(a.telefone,a.nome),i=a.saldoReposicoes||0,u=I.isStudentOverdue(a.id),x=a.status==="ativo",f=te(e,"financeiro","alterar"),l=h.length,v=h.filter(n=>n.status==="concluido").length,b=h.filter(n=>n.status==="falta_justificada").length,A=h.filter(n=>n.status==="falta_injustificada").length,g=c.filter(n=>n.status==="pago").reduce((n,m)=>n+m.valor,0),z=c.filter(n=>n.status!=="pago").reduce((n,m)=>n+m.valor,0),L=`
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
                ${E?`&bull; <span style="color: var(--text-muted);">${E}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${M?`
                  <a href="${M}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
                    ${q.whatsapp} WhatsApp
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
              ${u?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${c.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${l}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${v}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${b+A}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${i}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Reposições</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${h.length})
              </span>
              ${i>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${i})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${h.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
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
                        ${h.map(n=>{const m=n.data.split("-").reverse().join("/");let y="";n.status==="concluido"?y='<span class="badge badge-success" style="font-size: 0.62rem;">Presente</span>':n.status==="falta_justificada"?y='<span class="badge badge-warning" style="font-size: 0.62rem;">Falta Just.</span>':n.status==="falta_injustificada"?y='<span class="badge badge-danger" style="font-size: 0.62rem;">Falta</span>':n.status==="cancelado"?y='<span class="badge badge-secondary" style="font-size: 0.62rem;">Cancelado</span>':y='<span class="badge badge-secondary" style="font-size: 0.62rem;">Agendado</span>';const p=n.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong>${m}</strong>
                                <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 4px;">${n.horaInicio}</span>
                              </td>
                              <td><div style="color: var(--text-white); font-weight: 500;">${n.titulo}</div></td>
                              <td class="col-hide-sm">${p}</td>
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
              ${u?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
                R$ ${g.toFixed(2)}
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
                        ${c.map(n=>{const m=n.status==="pago",y=n.status==="atrasado";let p="";return m?p='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':y?p='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':p='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${n.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${n.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${n.valor.toFixed(2)}</td>
                              <td>${p}</td>
                              <td class="col-hide-sm">${n.dataPagamento?n.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${m?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${n.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:f?`
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
    `;de({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:L,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var d;const n=document.getElementById("btn-tab-pedagogico"),m=document.getElementById("btn-tab-financeiro"),y=document.getElementById("panel-tab-pedagogico"),p=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),m==null||m.classList.remove("active"),y&&(y.style.display="flex"),p&&(p.style.display="none")}),m==null||m.addEventListener("click",()=>{m.classList.add("active"),n==null||n.classList.remove("active"),p&&(p.style.display="flex"),y&&(y.style.display="none")}),(d=document.getElementById("btn-quick-schedule-reposicao"))==null||d.addEventListener("click",()=>{ve(),$("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(C=>{C.addEventListener("click",O=>{const _=O.currentTarget.dataset.id,N=c.find(S=>S.id===_);N&&Oe(N,a)})}),document.querySelectorAll(".btn-pay-now").forEach(C=>{C.addEventListener("click",O=>{const _=O.currentTarget.dataset.id,N=c.find(D=>D.id===_);if(!N)return;const S=I.getTodayDateString(),T=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${N.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${N.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${N.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${a.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${S}" required />
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
          `;de({title:`Dar Baixa: ${N.descricao}`,bodyHtml:T,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const D=document.getElementById("baixa-data").value,R=document.getElementById("baixa-forma").value,V=document.getElementById("baixa-obs").value;if(!D)return B("Informe a data de recebimento.","error"),!1;const X=(e==null?void 0:e.nome)||"Administrador";I.darBaixaPayment(N.id,D,R,X,V),B(`Baixa de R$ ${N.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const ee=I.getStudents().find(G=>G.id===a.id)||a;return r(ee),setTimeout(()=>{var G;(G=document.getElementById("btn-tab-financeiro"))==null||G.click()},50),!0}})})})},50)}function k(a){const P=I.getPlans(),h=!!a,c=a?I.getStudentPayments(a.id):[],E=P.map(u=>`<option value="${u.id}" ${(a==null?void 0:a.planoId)===u.id?"selected":""}>${u.nome}</option>`).join(""),M=Ke.map(u=>`<option value="${u}" ${(a==null?void 0:a.instrumentoPrincipal)===u?"selected":""}>${u}</option>`).join(""),i=`
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
            <label class="form-label" for="student-nome">Nome Completo do Aluno <span style="color: var(--color-coral); font-weight: 700;">*</span></label>
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
          <div id="student-resp-alert" style="display: none; background: rgba(234, 67, 53, 0.12); border: 1px solid rgba(234, 67, 53, 0.35); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.76rem; color: #fca5a5; margin-bottom: 2px;">
            ⚠️ <strong>Aluno menor de 18 anos detectado.</strong> O preenchimento do responsável é obrigatório.
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-nome">
              Nome do Responsável <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
            </label>
            <input type="text" id="student-resp-nome" class="form-input" placeholder="Ex: Patrícia Mendes" value="${(a==null?void 0:a.responsavelNome)||""}" />
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-parentesco">
              Parentesco <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
            </label>
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
            <label class="form-label" for="student-resp-tel">
              Telefone / WhatsApp do Responsável <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
            </label>
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
            <label class="form-label" for="student-status">Status da Matrícula <span style="color: var(--color-coral); font-weight: 700;">*</span></label>
            <select id="student-status" class="form-select">
              <option value="ativo" ${(a==null?void 0:a.status)==="ativo"?"selected":""}>Ativo</option>
              <option value="inativo" ${(a==null?void 0:a.status)==="inativo"?"selected":""}>Inativo</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-plano">Plano de Ensino</label>
            <select id="student-plano" class="form-select">
              <option value="">Selecione um plano...</option>
              ${E}
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
              <label class="form-label" for="student-valor-mensalidade">Valor da Mensalidade (R$) <span style="color: var(--color-coral); font-weight: 700;">*</span></label>
              <input type="number" id="student-valor-mensalidade" class="form-input" min="0" step="10" placeholder="280.00" value="${(a==null?void 0:a.valorMensalidade)??280}" required />
            </div>

            <div class="form-group" style="margin: 0; width: 100%;">
              <label class="form-label" for="student-dia-vencimento">Dia de Vencimento Padrão (1 a 31) <span style="color: var(--color-coral); font-weight: 700;">*</span></label>
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
                        ${c.map(u=>{const x=u.dataVencimento.split("-").reverse().join("/"),f=u.dataPagamento?u.dataPagamento.split("-").reverse().join("/"):"-";let l="";return u.status==="pago"?l='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':u.status==="atrasado"?l='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':l='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${u.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${x}</td>
                              <td class="col-hide-sm" style="padding: 6px 10px; color: ${u.dataPagamento?"var(--text-white)":"var(--text-muted)"};">${f}</td>
                              <td style="padding: 6px 10px; text-align: center;">${l}</td>
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
    `;de({title:h?`Editar Aluno: ${a.nome}`:"Cadastrar Novo Aluno",bodyHtml:i,modalClass:"modal-lg",confirmText:h?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var X,ee;const u=document.getElementById("student-nome").value.trim(),x=document.getElementById("student-nascimento").value,f=document.getElementById("student-email").value.trim(),l=document.getElementById("student-telefone").value.trim(),v=document.getElementById("student-resp-nome").value.trim(),b=document.getElementById("student-resp-parentesco").value,A=document.getElementById("student-resp-tel").value.trim(),g=document.getElementById("student-instrumento").value,z=document.getElementById("student-nivel").value,L=document.getElementById("student-plano").value,n=document.getElementById("student-status").value,m=document.getElementById("student-modulo").value.trim(),y=document.getElementById("student-saldo-reposicoes").value,p=Math.max(0,parseInt(y,10)||0),d=(X=document.getElementById("student-valor-mensalidade"))==null?void 0:X.value,C=Math.max(0,parseFloat(d)||280),O=(ee=document.getElementById("student-dia-vencimento"))==null?void 0:ee.value,_=Math.min(31,Math.max(1,parseInt(O,10)||10)),N=document.getElementById("student-obs").value.trim(),S=[];u||S.push({label:"Nome Completo do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"});const T=qe(x);T!==null&&T<18&&(v||S.push({label:`Nome do Responsável (Aluno possui ${T} anos - Menor de Idade)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),b||S.push({label:`Parentesco do Responsável (Aluno possui ${T} anos - Menor de Idade)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),A||S.push({label:`Telefone / WhatsApp do Responsável (Aluno possui ${T} anos - Menor de Idade)`,fieldId:"student-resp-tel",tabId:"tab-resp"})),n||S.push({label:"Status da Matrícula (Ativo ou Inativo)",fieldId:"student-status",tabId:"tab-musica"}),(!d||isNaN(parseFloat(d))||parseFloat(d)<0)&&S.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const R=parseInt(O,10);if((!O||isNaN(R)||R<1||R>31)&&S.push({label:"Dia de Vencimento Padrão (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),S.length>0){const G=Z=>{const Y=document.querySelectorAll(".btn-form-tab"),se=document.querySelectorAll(".form-tab-panel");Y.forEach(K=>{K.dataset.tab===Z?K.classList.add("active"):K.classList.remove("active")}),se.forEach(K=>{K.style.display=K.id===`form-panel-${Z}`?"flex":"none"})},W=document.createElement("div");W.id="student-validation-alert",W.style.cssText=`
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `,W.innerHTML=`
            <div style="background: #1d202d; border: 1px solid rgba(234, 67, 53, 0.45); border-radius: 12px; max-width: 480px; width: 100%; box-shadow: 0 24px 48px rgba(0,0,0,0.8); overflow: hidden;">
              <div style="padding: 16px 20px; background: rgba(234, 67, 53, 0.1); border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 1.4rem;">⚠️</span>
                <div>
                  <h4 style="margin: 0; font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--text-white);">
                    Campos Obrigatórios Pendentes
                  </h4>
                  <p style="margin: 2px 0 0 0; font-size: 0.76rem; color: var(--text-secondary);">
                    Preencha os itens abaixo para concluir o cadastro:
                  </p>
                </div>
              </div>
              
              <div style="padding: 18px 22px; max-height: 280px; overflow-y: auto;">
                <ul style="margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: #fca5a5;">
                  ${S.map(Z=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${Z.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(W);const J=W.querySelector("#btn-validation-ok");return J==null||J.focus(),J==null||J.addEventListener("click",()=>{W.remove();const Z=S[0];G(Z.tabId),setTimeout(()=>{const Y=document.getElementById(Z.fieldId);Y&&(Y.focus(),Y.scrollIntoView({behavior:"smooth",block:"center"}),Y.style.outline="2px solid var(--color-coral)",Y.style.borderColor="var(--color-coral)",setTimeout(()=>{Y.style.outline="",Y.style.borderColor=""},3500))},100)}),!1}const V=(e==null?void 0:e.nome)||"Administrador";return h&&a?(I.updateStudent(a.id,{nome:u,dataNascimento:x,email:f,telefone:l,responsavelNome:v,responsavelParentesco:b,responsavelTelefone:A,instrumentoPrincipal:g,nivelMusical:z,planoId:L,status:n,moduloAtual:m,saldoReposicoes:p,valorMensalidade:C,diaVencimento:_,observacoes:N},V),B("Dados do aluno atualizados com sucesso!","success")):(I.addStudent({nome:u,dataNascimento:x,email:f,telefone:l,responsavelNome:v,responsavelParentesco:b,responsavelTelefone:A,instrumentoPrincipal:g,nivelMusical:z,planoId:L,status:n,moduloAtual:m,saldoReposicoes:p,valorMensalidade:C,diaVencimento:_,observacoes:N},V),B("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const u=document.querySelectorAll(".btn-form-tab"),x=document.querySelectorAll(".form-tab-panel");u.forEach(A=>{A.addEventListener("click",g=>{const z=g.currentTarget.dataset.tab;u.forEach(L=>{L.classList.remove("active")}),g.currentTarget.classList.add("active"),x.forEach(L=>{L.style.display=L.id===`form-panel-${z}`?"flex":"none"})})});const f=document.getElementById("student-nascimento"),l=document.getElementById("student-resp-alert"),v=document.querySelectorAll(".resp-req-star"),b=()=>{const A=f==null?void 0:f.value,g=qe(A),z=g!==null&&g<18;l&&(l.style.display=z?"block":"none",z&&(l.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${g} anos).</strong> O preenchimento do responsável é obrigatório.`)),v.forEach(L=>{L.style.display=z?"inline":"none"})};f==null||f.addEventListener("input",b),f==null||f.addEventListener("change",b),b()},50)}return s(),t}const ue=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],je=ue.reduce(($,t)=>$+t.items.length,0);function at($){let t=0;return ue.forEach(e=>{const o=$[e.key];o&&e.items.forEach(s=>{o[s.key]&&t++})}),t}function ot($){var k;const t=document.createElement("div"),e=Q.getCurrentUser();if((e==null?void 0:e.papel)!=="admin")return t.innerHTML=`
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
    `,(k=t.querySelector("#btn-unauth-home"))==null||k.addEventListener("click",()=>$("home")),t;let o="";function s(){var E,M;const a=I.getUsers(),P=o.toLowerCase(),h=a.filter(i=>i.nome.toLowerCase().includes(P)||i.login.toLowerCase().includes(P)||i.papel.toLowerCase().includes(P));t.innerHTML=`
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
          ${q.plus} Cadastrar Novo Usuário
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
            ${q.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${h.length})</h3>
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
              ${h.map(i=>{const u=i.papel==="admin"?"Administrador":i.papel==="professor"?"Professor":"Atendente",x=ke(i),f=at(x);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${i.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${i.nome[0]||"U"}
                          </div>
                          <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${i.nome}
                          </span>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${i.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${i.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${u}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${i.papel==="admin"?"badge-coral":f>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${i.papel==="admin"?`Acesso Total (${je})`:`${f} de ${je} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${i.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${i.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${q.edit}
                          </button>
                          ${i.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${q.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${i.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
                                   ${q.trash}
                                 </button>`}
                        </div>
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(E=t.querySelector("#btn-new-user"))==null||E.addEventListener("click",()=>{r()});const c=t.querySelector("#user-search-input");c&&c.addEventListener("input",i=>{o=i.target.value,s();const u=t.querySelector("#user-search-input");u&&(u.focus(),u.setSelectionRange(u.value.length,u.value.length))}),(M=t.querySelector("#btn-clear-search"))==null||M.addEventListener("click",()=>{o="",s()}),t.querySelectorAll(".btn-edit-user").forEach(i=>{i.addEventListener("click",u=>{const x=u.currentTarget.dataset.id,f=I.getUsers().find(l=>l.id===x);f&&r(f)})}),t.querySelectorAll(".btn-delete-user").forEach(i=>{i.addEventListener("click",u=>{const x=u.currentTarget.dataset.id,f=I.getUsers().find(l=>l.id===x);f&&fe({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${f.nome}</strong>" (login: <code>${f.login}</code>)?`,onConfirm:()=>{try{I.deleteUser(f.id,(e==null?void 0:e.nome)||"Administrador"),B(`Usuário "${f.nome}" excluído.`,"info"),s()}catch(l){B(l.message||"Erro ao excluir usuário.","error")}}})})})}function r(a){var l,v,b,A;const P=!!a,h=a?a.papel:"professor",c=h==="admin",E=ke(a),M=`
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
            <option value="admin" ${h==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${h==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${h==="atendente"?"selected":""}>Atendente</option>
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
            ${ue.map(g=>{const z=E[g.key]||{},L=g.items.filter(n=>z[n.key]).length;return`
                <div class="perm-group-card" id="card-group-${g.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${g.key}" 
                    data-group="${g.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${g.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${g.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${g.title}
                        </strong>
                        <span id="group-counter-${g.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${L}/${g.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${g.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${g.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${g.items.map(n=>{const m=!!z[n.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${g.key}-${n.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${m?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${m?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${g.key}-${n.key}" 
                                data-group="${g.key}" 
                                data-action="${n.key}" 
                                ${m?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${n.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${g.key}-${n.key}" 
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
    `;de({title:P?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:M,modalClass:"modal-lg",confirmText:P?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var C,O,_,N,S,T,D,R,V,X,ee,G,W,J,Z,Y,se,K,j,ne,ae,me;const g=document.getElementById("user-nome").value.trim(),z=document.getElementById("user-login").value.trim(),L=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),m=n?n.value:"professor";if(!g||!z||!L)return B("Preencha Nome, Login e Senha.","error"),!1;if(I.getUsers().find(F=>F.login===z&&F.id!==(a==null?void 0:a.id)))return B(`O login "${z}" já está em uso por outro usuário.`,"error"),!1;let p;m==="admin"?p=JSON.parse(JSON.stringify(ge.admin)):p={alunos:{acesso:((C=document.getElementById("perm-alunos-acesso"))==null?void 0:C.checked)??!1,cadastrar:((O=document.getElementById("perm-alunos-cadastrar"))==null?void 0:O.checked)??!1,alterar:((_=document.getElementById("perm-alunos-alterar"))==null?void 0:_.checked)??!1,excluir:((N=document.getElementById("perm-alunos-excluir"))==null?void 0:N.checked)??!1},agenda:{acesso:((S=document.getElementById("perm-agenda-acesso"))==null?void 0:S.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((R=document.getElementById("perm-agenda-excluir"))==null?void 0:R.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((X=document.getElementById("perm-planos-cadastrar"))==null?void 0:X.checked)??!1,alterar:((ee=document.getElementById("perm-planos-alterar"))==null?void 0:ee.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((W=document.getElementById("perm-financeiro-acesso"))==null?void 0:W.checked)??!1,cadastrar:((J=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:J.checked)??!1,alterar:((Z=document.getElementById("perm-financeiro-alterar"))==null?void 0:Z.checked)??!1,excluir:((Y=document.getElementById("perm-financeiro-excluir"))==null?void 0:Y.checked)??!1},relatorios:{acesso:((se=document.getElementById("perm-relatorios-acesso"))==null?void 0:se.checked)??!1,gerar:((K=document.getElementById("perm-relatorios-gerar"))==null?void 0:K.checked)??!1},home:{acesso:((j=document.getElementById("perm-home-acesso"))==null?void 0:j.checked)??!1},auditoria:{acesso:((ne=document.getElementById("perm-auditoria-acesso"))==null?void 0:ne.checked)??!1},configuracoes:{acesso:((ae=document.getElementById("perm-configuracoes-acesso"))==null?void 0:ae.checked)??!1,alterar:((me=document.getElementById("perm-configuracoes-alterar"))==null?void 0:me.checked)??!1}};const d=(e==null?void 0:e.nome)||"Administrador";return P&&a?(I.updateUser(a.id,{nome:g,login:z,senha:L,papel:a.isSistema?"admin":m,permissoes:a.isSistema?ge.admin:p},d),B("Usuário e permissões atualizados com sucesso!","success")):(I.addUser({nome:g,login:z,senha:L,papel:m,permissoes:p},d),B("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const i=document.getElementById("user-papel"),u=document.getElementById("user-permissions-section"),x=(g,z,L)=>{const n=document.getElementById(`row-perm-${g}-${z}`),m=document.getElementById(`badge-perm-${g}-${z}`);n&&m&&(L?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",m.className="badge badge-success",m.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",m.className="badge badge-coral",m.textContent="Bloqueado")),f(g)},f=g=>{const z=document.getElementById(`group-counter-${g}`),L=ue.find(n=>n.key===g);if(z&&L){let n=0;L.items.forEach(m=>{const y=document.getElementById(`perm-${g}-${m.key}`);y&&y.checked&&n++}),z.textContent=`${n}/${L.items.length} liberadas`}};i==null||i.addEventListener("change",()=>{const g=i.value;if(g==="admin")u.style.display="none";else if(u.style.display="block",!P){const z=ge[g]||ge.professor;ue.forEach(L=>{L.items.forEach(n=>{var y;const m=document.getElementById(`perm-${L.key}-${n.key}`);if(m){const p=((y=z[L.key])==null?void 0:y[n.key])??!1;m.checked=p,x(L.key,n.key,p)}})})}}),ue.forEach(g=>{const z=document.getElementById(`header-group-${g.key}`),L=document.getElementById(`group-body-${g.key}`),n=document.getElementById(`arrow-perm-${g.key}`);z==null||z.addEventListener("click",m=>{if(!m.target.closest(".btn-group-toggle")&&L&&n){const y=L.style.display==="flex";L.style.display=y?"none":"flex",n.style.transform=y?"rotate(0deg)":"rotate(180deg)"}}),g.items.forEach(m=>{const y=document.getElementById(`perm-${g.key}-${m.key}`);y==null||y.addEventListener("change",()=>{if(x(g.key,m.key,y.checked),y.checked&&m.key!=="acesso"){const p=document.getElementById(`perm-${g.key}-acesso`);p&&!p.checked&&(p.checked=!0,x(g.key,"acesso",!0))}!y.checked&&m.key==="acesso"&&g.items.forEach(p=>{if(p.key!=="acesso"){const d=document.getElementById(`perm-${g.key}-${p.key}`);d&&d.checked&&(d.checked=!1,x(g.key,p.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${g.key}"]`).forEach(m=>{m.addEventListener("click",y=>{y.stopPropagation();const p=g.items.map(C=>document.getElementById(`perm-${g.key}-${C.key}`)).filter(Boolean),d=p.every(C=>C.checked);p.forEach(C=>{C.checked=!d,x(g.key,C.dataset.action,!d)})})})}),(l=document.getElementById("btn-perm-expand"))==null||l.addEventListener("click",()=>{ue.forEach(g=>{const z=document.getElementById(`group-body-${g.key}`),L=document.getElementById(`arrow-perm-${g.key}`);z&&L&&(z.style.display="flex",L.style.transform="rotate(180deg)")})}),(v=document.getElementById("btn-perm-collapse"))==null||v.addEventListener("click",()=>{ue.forEach(g=>{const z=document.getElementById(`group-body-${g.key}`),L=document.getElementById(`arrow-perm-${g.key}`);z&&L&&(z.style.display="none",L.style.transform="rotate(0deg)")})}),(b=document.getElementById("btn-perm-all"))==null||b.addEventListener("click",()=>{ue.forEach(g=>{g.items.forEach(z=>{const L=document.getElementById(`perm-${g.key}-${z.key}`);L&&(L.checked=!0,x(g.key,z.key,!0))})})}),(A=document.getElementById("btn-perm-none"))==null||A.addEventListener("click",()=>{ue.forEach(g=>{g.items.forEach(z=>{const L=document.getElementById(`perm-${g.key}-${z.key}`);L&&(L.checked=!1,x(g.key,z.key,!1))})})})}return s(),t}function st($){const t=document.createElement("div"),e=Q.getCurrentUser();let o="";const s=te(e,"planos","cadastrar"),r=te(e,"planos","alterar"),k=te(e,"planos","excluir");function a(){var M,i;const c=I.getPlans().filter(u=>{const x=o.toLowerCase();return u.nome.toLowerCase().includes(x)||u.descricao&&u.descricao.toLowerCase().includes(x)});t.innerHTML=`
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
                ${q.plus} Cadastrar Novo Plano
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
            ${q.search}
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
                  `:c.map(u=>{const x=u.criadoEm?new Date(u.criadoEm).toLocaleDateString("pt-BR"):"-";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${q.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${u.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${u.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição cadastrada</span>'}
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                ${u.modulos.length} ${u.modulos.length===1?"módulo":"módulos"}
                              </span>
                            </td>
                            <td class="col-hide-sm" style="font-size: 0.8rem; color: var(--text-muted);">
                              ${x}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${r?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${u.id}" title="Editar Plano e Módulos">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${k?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${u.id}" title="Excluir Plano">
                                        ${q.trash}
                                      </button>
                                    `:""}
                                ${!r&&!k?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(M=t.querySelector("#btn-new-plan"))==null||M.addEventListener("click",()=>{P()});const E=t.querySelector("#plan-search-input");E&&E.addEventListener("input",u=>{o=u.target.value,a();const x=t.querySelector("#plan-search-input");x&&(x.focus(),x.setSelectionRange(x.value.length,x.value.length))}),(i=t.querySelector("#btn-clear-search"))==null||i.addEventListener("click",()=>{o="",a()}),t.querySelectorAll(".btn-edit-plan").forEach(u=>{u.addEventListener("click",x=>{const f=x.currentTarget.dataset.id,l=I.getPlans().find(v=>v.id===f);l&&P(l)})}),t.querySelectorAll(".btn-delete-plan").forEach(u=>{u.addEventListener("click",x=>{const f=x.currentTarget.dataset.id,l=I.getPlans().find(v=>v.id===f);l&&fe({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${l.nome}</strong>" e todos os seus <strong>${l.modulos.length} módulos</strong> vinculados?`,onConfirm:()=>{I.deletePlan(l.id,(e==null?void 0:e.nome)||"Administrador"),B(`Plano "${l.nome}" excluído.`,"info"),a()}})})})}function P(h){const c=!!h;let E=h?JSON.parse(JSON.stringify(h.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function M(){return E.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `:E.map((f,l)=>`
            <div class="module-card-item" data-idx="${l}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 10px; display: flex; align-items: center; gap: 10px; transition: border-color 0.15s ease;">
              <!-- Badge de Ordem Numérica -->
              <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                ${String(l+1).padStart(2,"0")}
              </div>

              <!-- Input Editável In-Place -->
              <input 
                type="text" 
                class="module-title-input" 
                data-idx="${l}" 
                value="${f.titulo}" 
                placeholder="Título do módulo..." 
                style="flex: 1; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
              />

              <!-- Ações: Subir, Descer, Excluir -->
              <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-up" 
                  data-idx="${l}" 
                  title="Mover para Cima" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${l===0?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                >
                  ▲
                </button>
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-down" 
                  data-idx="${l}" 
                  title="Mover para Baixo" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${l===E.length-1?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                >
                  ▼
                </button>
                <button 
                  type="button" 
                  class="btn btn-danger btn-icon-only btn-remove-module" 
                  data-idx="${l}" 
                  title="Excluir Módulo" 
                  style="width: 26px; height: 26px; padding: 0; display: flex; align-items: center; justify-content: center; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                >
                  ${q.trash}
                </button>
              </div>
            </div>
          `).join("")}const i=`
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
                value="${(h==null?void 0:h.nome)||""}" 
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
                value="${(h==null?void 0:h.descricao)||""}" 
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
                ${E.length} ${E.length===1?"módulo":"módulos"}
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
              ${q.plus} Adicionar Módulo
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
    `;de({title:c?`Editar Plano: ${h.nome}`:"Cadastrar Plano & Trilha de Ensino",bodyHtml:i,modalClass:"modal-lg",confirmText:c?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const f=document.getElementById("plan-nome").value.trim(),l=document.getElementById("plan-desc").value.trim(),v=E.map((A,g)=>({id:A.id||"mod_"+(g+1)+"_"+Date.now(),ordem:g+1,titulo:A.titulo.trim()})).filter(A=>A.titulo.length>0);if(!f)return B("Informe o nome do plano de ensino.","error"),!1;if(v.length===0)return B("Adicione pelo menos um módulo à trilha pedagógica.","error"),!1;const b=(e==null?void 0:e.nome)||"Administrador";return c&&h?(I.updatePlan(h.id,{nome:f,descricao:l,modulos:v},b),B("Plano e módulos atualizados com sucesso!","success")):(I.addPlan({nome:f,descricao:l,modulos:v},b),B("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function u(){const f=document.getElementById("modules-list-container"),l=document.getElementById("modules-counter-badge");f&&(l&&(l.textContent=`${E.length} ${E.length===1?"módulo":"módulos"}`),f.innerHTML=M(),f.querySelectorAll(".module-title-input").forEach(v=>{v.addEventListener("input",b=>{const A=parseInt(b.target.getAttribute("data-idx")||"0",10);E[A]&&(E[A].titulo=b.target.value)})}),f.querySelectorAll(".btn-move-up:not([disabled])").forEach(v=>{v.addEventListener("click",b=>{const A=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);if(A>0){const g=E[A];E[A]=E[A-1],E[A-1]=g,E.forEach((z,L)=>z.ordem=L+1),u()}})}),f.querySelectorAll(".btn-move-down:not([disabled])").forEach(v=>{v.addEventListener("click",b=>{const A=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);if(A<E.length-1){const g=E[A];E[A]=E[A+1],E[A+1]=g,E.forEach((z,L)=>z.ordem=L+1),u()}})}),f.querySelectorAll(".btn-remove-module").forEach(v=>{v.addEventListener("click",b=>{const A=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);E.splice(A,1),E.forEach((g,z)=>g.ordem=z+1),u()})}))}function x(){const f=document.getElementById("quick-add-module-input");if(!f)return;const l=f.value.trim();if(!l){B("Digite o nome do módulo para adicionar.","info"),f.focus();return}const v=E.length+1;E.push({id:"mod_"+v+"_"+Date.now(),ordem:v,titulo:l}),f.value="",u(),f.focus();const b=document.getElementById("modules-list-container");b&&(b.scrollTop=b.scrollHeight)}setTimeout(()=>{const f=document.getElementById("btn-quick-add-module"),l=document.getElementById("quick-add-module-input");f==null||f.addEventListener("click",()=>{x()}),l==null||l.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),x())}),u()},50)}return a(),t}function nt($){const t=document.createElement("div"),e=Q.getCurrentUser();let o="",s="todos",r=new Date;const k=te(e,"financeiro","cadastrar"),a=te(e,"financeiro","alterar"),P=te(e,"financeiro","excluir");function h(){var m,y,p,d,C,O,_,N;const i=I.getPayments(),u=I.getStudents(),x=new Date,f=r!==null&&x.getMonth()===r.getMonth()&&x.getFullYear()===r.getFullYear(),l=r?`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`:"",v=i.filter(S=>S.status==="pago").reduce((S,T)=>S+T.valor,0),b=i.filter(S=>S.status==="pendente").reduce((S,T)=>S+T.valor,0),A=i.filter(S=>S.status==="atrasado").reduce((S,T)=>S+T.valor,0),g=u.filter(S=>S.status==="ativo"&&I.isStudentOverdue(S.id)),z=i.filter(S=>{const T=u.find(G=>G.id===S.alunoId),D=T?T.nome.toLowerCase():"",R=S.descricao.toLowerCase(),V=D.includes(o.toLowerCase())||R.includes(o.toLowerCase())||S.mesReferencia&&S.mesReferencia.includes(o),X=s==="todos"||S.status===s,ee=!l||S.mesReferencia===l||S.dataVencimento.startsWith(l);return V&&X&&ee});t.innerHTML=`
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
          ${k?`
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${q.plus} Novo Lançamento
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
            ${i.filter(S=>S.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${b.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${i.filter(S=>S.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${A.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${i.filter(S=>S.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${g.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${u.filter(S=>S.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${g.length===0?"✓ 100% em dia":"Requer acompanhamento"}
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Período (Mês) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${r?`Mensalidade / ${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`:"Todas as Mensalidades"}
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
          <button type="button" class="btn ${r===null?"btn-primary":"btn-secondary"}" id="fin-btn-all-months" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os lançamentos sem filtrar por mês">
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
            ${q.search}
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
              ${z.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':z.map(S=>{const T=u.find(X=>X.id===S.alunoId),D=S.status==="pago",R=S.status==="atrasado";let V="";return D?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':R?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                                ${S.descricao}${S.mesReferencia?` / ${S.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${R?"#f87171":"var(--text-white)"}; font-weight: ${R?"700":"normal"};">
                                ${S.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${S.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!D&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${S.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${q.check}
                                      </button>
                                    `:""}

                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${S.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${S.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${q.edit}
                                      </button>
                                    `:""}

                                ${P?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${S.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${q.trash}
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
    `,(m=t.querySelector("#fin-btn-prev-month"))==null||m.addEventListener("click",()=>{r||(r=new Date),r=new Date(r.getFullYear(),r.getMonth()-1,1),h()}),(y=t.querySelector("#fin-btn-next-month"))==null||y.addEventListener("click",()=>{r||(r=new Date),r=new Date(r.getFullYear(),r.getMonth()+1,1),h()}),(p=t.querySelector("#fin-btn-current-month"))==null||p.addEventListener("click",()=>{r=new Date,h()}),(d=t.querySelector("#fin-btn-all-months"))==null||d.addEventListener("click",()=>{r=null,h()});const L=t.querySelector("#fin-search-input");L==null||L.addEventListener("input",S=>{o=S.target.value,h();const T=t.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(C=t.querySelector("#btn-clear-fin-search"))==null||C.addEventListener("click",()=>{o="",h()});const n=t.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,h()}),(O=t.querySelector("#btn-limpar-status"))==null||O.addEventListener("click",()=>{s="todos",h()}),(_=t.querySelector("#btn-gerar-lote"))==null||_.addEventListener("click",()=>{E()}),(N=t.querySelector("#btn-novo-lancamento"))==null||N.addEventListener("click",()=>{M()}),t.querySelectorAll(".btn-action-baixa").forEach(S=>{S.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=i.find(V=>V.id===D);R&&c(R)})}),t.querySelectorAll(".btn-action-recibo").forEach(S=>{S.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=i.find(V=>V.id===D);if(R){const V=u.find(X=>X.id===R.alunoId);V&&Oe(R,V)}})}),t.querySelectorAll(".btn-action-edit").forEach(S=>{S.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=i.find(V=>V.id===D);R&&M(R)})}),t.querySelectorAll(".btn-action-delete").forEach(S=>{S.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=i.find(V=>V.id===D);R&&fe({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${R.descricao}</strong>" no valor de <strong>R$ ${R.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{I.deletePayment(R.id,(e==null?void 0:e.nome)||"Administrador"),B("Lançamento excluído com sucesso!","info"),h()}})})})}function c(i){const u=I.getStudents().find(l=>l.id===i.alunoId),x=I.getTodayDateString(),f=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${i.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${i.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(u==null?void 0:u.nome)||"N/A"}</strong> &bull; Vencimento: ${i.dataVencimento.split("-").reverse().join("/")}
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
    `;de({title:"Confirmar Baixa de Pagamento",bodyHtml:f,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const l=document.getElementById("modal-baixa-data").value,v=document.getElementById("modal-baixa-forma").value,b=document.getElementById("modal-baixa-obs").value;return l?(I.darBaixaPayment(i.id,l,v,(e==null?void 0:e.nome)||"Administrador",b),B(`Baixa efetuada com sucesso! R$ ${i.valor.toFixed(2)} recebido.`,"success"),h(),!0):(B("Informe a data de recebimento.","error"),!1)}})}function E(){const i=new Date,u=i.getFullYear(),x=i.getMonth()+1,f=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${u}" required />
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
    `;de({title:"Gerar Mensalidades em Lote",bodyHtml:f,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const l=parseInt(document.getElementById("lote-ano").value,10),v=parseInt(document.getElementById("lote-mes").value,10);if(!l||!v)return B("Selecione ano e mês válidos.","error"),!1;const b=I.gerarMensalidadesMes(l,v,(e==null?void 0:e.nome)||"Administrador");return b.criadas===0&&b.puladas>0?B(`Todas as ${b.puladas} mensalidades deste mês já estavam criadas!`,"info"):B(`Sucesso: ${b.criadas} mensalidade(s) gerada(s)! (${b.puladas} já existentes puladas)`,"success"),h(),!0}})}function M(i){const u=!!i,x=I.getStudents(),f=I.getTodayDateString(),l=x.map(b=>`<option value="${b.id}" ${(i==null?void 0:i.alunoId)===b.id?"selected":""}>${b.nome} (${b.instrumentoPrincipal||"Geral"})</option>`).join(""),v=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${u?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${l}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(i==null?void 0:i.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (YYYY-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" value="${(i==null?void 0:i.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="number" id="pay-valor" class="form-input" min="0" step="5" placeholder="280.00" value="${(i==null?void 0:i.valor)??280}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(i==null?void 0:i.dataVencimento)||f}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(i==null?void 0:i.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(i==null?void 0:i.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(i==null?void 0:i.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(i==null?void 0:i.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="dinheiro" ${(i==null?void 0:i.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="cartao_credito" ${(i==null?void 0:i.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(i==null?void 0:i.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="boleto" ${(i==null?void 0:i.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(i==null?void 0:i.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações Adicionais</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(i==null?void 0:i.observacoes)||""}" />
        </div>
      </form>
    `;de({title:u?`Editar Lançamento: ${i.descricao}`:"Novo Lançamento Financeiro",bodyHtml:v,modalClass:"modal-md",confirmText:u?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const b=u&&i?i.alunoId:document.getElementById("pay-aluno").value,A=document.getElementById("pay-desc").value.trim(),g=document.getElementById("pay-mes").value.trim()||void 0,z=document.getElementById("pay-valor").value,L=parseFloat(z)||0,n=document.getElementById("pay-vencimento").value,m=document.getElementById("pay-status").value,y=document.getElementById("pay-forma").value||void 0,p=document.getElementById("pay-obs").value.trim()||void 0;if(!b)return B("Selecione um aluno.","error"),!1;if(!A)return B("Informe a descrição do lançamento.","error"),!1;if(L<=0)return B("Informe um valor válido maior que zero.","error"),!1;if(!n)return B("Informe a data de vencimento.","error"),!1;const d=(e==null?void 0:e.nome)||"Administrador";return u&&i?(I.updatePayment(i.id,{descricao:A,mesReferencia:g,valor:L,dataVencimento:n,status:m,formaPagamento:y,dataPagamento:m==="pago"?i.dataPagamento||f:void 0,observacoes:p},d),B("Lançamento atualizado com sucesso!","success")):(I.addPayment({alunoId:b,descricao:A,mesReferencia:g,valor:L,dataVencimento:n,status:m,formaPagamento:y,dataPagamento:m==="pago"?f:void 0,observacoes:p},d),B("Novo lançamento cadastrado com sucesso!","success")),h(),!0}}),u||setTimeout(()=>{const b=document.getElementById("pay-aluno");b==null||b.addEventListener("change",()=>{const A=x.find(g=>g.id===b.value);if(A){const g=document.getElementById("pay-valor");g&&typeof A.valorMensalidade=="number"&&(g.value=A.valorMensalidade.toString())}})},50)}return h(),t}function it($){const t=document.createElement("div"),e=Q.getCurrentUser(),o=te(e,"relatorios","gerar");let s="alunos",r="todos",k="todos",a="todos",P="todos",h="todos",c="nome_asc",E="",M="",i="",u="",x="todos",f="todos",l="todos",v="vencimento_asc";function b(){var W,J,Z,Y,se,K,j,ne,ae,me,F,oe,pe,be,he,ye,xe,Me,Pe;const n=I.getSettings(),m=I.getStudents(),y=I.getPlans(),p=I.getPayments(),d=Array.from(new Set(m.map(w=>w.instrumentoPrincipal).filter(Boolean))).sort();let C=m.filter(w=>{if(r!=="todos"&&w.status!==r||k!=="todos"&&w.instrumentoPrincipal!==k||a!=="todos"&&w.nivelMusical!==a||P!=="todos"&&w.planoId!==P)return!1;if(h!=="todos"){const H=I.isStudentOverdue(w.id);if(h==="em_dia"&&H||h==="atrasado"&&!H)return!1}return!0});C.sort((w,H)=>c==="nome_asc"?w.nome.localeCompare(H.nome):c==="nome_desc"?H.nome.localeCompare(w.nome):c==="data_desc"?(H.criadoEm||"").localeCompare(w.criadoEm||""):c==="data_asc"?(w.criadoEm||"").localeCompare(H.criadoEm||""):0);const O=C.length,_=C.filter(w=>w.status==="ativo").length,N=C.filter(w=>w.status==="inativo").length,S=C.filter(w=>I.isStudentOverdue(w.id)).length,T=new Date().toISOString().slice(0,10);let D=p.filter(w=>{if(E&&w.dataVencimento<E||M&&w.dataVencimento>M)return!1;const H=w.mesReferencia||w.dataVencimento.slice(0,7);if(i&&H<i||u&&H>u||f!=="todos"&&w.alunoId!==f||l!=="todos"&&w.formaPagamento!==l)return!1;const ie=w.status!=="pago"&&w.dataVencimento<T;return!(x==="pago"&&w.status!=="pago"||x==="pendente"&&(w.status==="pago"||ie)||x==="atrasado"&&!ie)});const R=new Map(m.map(w=>[w.id,w.nome]));D.sort((w,H)=>{if(v==="vencimento_asc")return w.dataVencimento.localeCompare(H.dataVencimento);if(v==="vencimento_desc")return H.dataVencimento.localeCompare(w.dataVencimento);if(v==="valor_desc")return H.valor-w.valor;if(v==="aluno_asc"){const ie=R.get(w.alunoId)||"",Ce=R.get(H.alunoId)||"";return ie.localeCompare(Ce)}return 0});const V=D.length,X=D.reduce((w,H)=>w+H.valor,0),ee=D.filter(w=>w.status==="pago").reduce((w,H)=>w+H.valor,0),G=D.filter(w=>w.status!=="pago").reduce((w,H)=>w+H.valor,0);t.innerHTML=`
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
                <option value="todos" ${r==="todos"?"selected":""}>Todos os Status</option>
                <option value="ativo" ${r==="ativo"?"selected":""}>Somente Ativos</option>
                <option value="inativo" ${r==="inativo"?"selected":""}>Somente Inativos</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Instrumento</label>
              <select id="filtro-aluno-instrumento" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${k==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${d.map(w=>`<option value="${w}" ${k===w?"selected":""}>${w}</option>`).join("")}
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
                <option value="todos" ${h==="todos"?"selected":""}>Todos</option>
                <option value="em_dia" ${h==="em_dia"?"selected":""}>Em Dia</option>
                <option value="atrasado" ${h==="atrasado"?"selected":""}>Com Mensalidade em Atraso</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${O}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${_}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${N}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${S}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${C.length} registros)
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
                ${C.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':C.map(w=>{const H=y.find(_e=>_e.id===w.planoId),ie=w.status==="ativo",Ce=I.isStudentOverdue(w.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${w.nome}</td>
                              <td class="col-hide-md">${w.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${w.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${ie?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${ie?"Ativo":"Inativo"}
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${E}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${M}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${i}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${u}" />
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
                <option value="todos" ${f==="todos"?"selected":""}>Todos os Alunos</option>
                ${m.map(w=>`<option value="${w.id}" ${f===w.id?"selected":""}>${w.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${l==="todos"?"selected":""}>Todas as Formas</option>
                <option value="pix" ${l==="pix"?"selected":""}>PIX</option>
                <option value="cartao_credito" ${l==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
                <option value="cartao_debito" ${l==="cartao_debito"?"selected":""}>Cartão de Débito</option>
                <option value="boleto" ${l==="boleto"?"selected":""}>Boleto</option>
                <option value="dinheiro" ${l==="dinheiro"?"selected":""}>Dinheiro</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${X.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Recebido / Quitado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${ee.toFixed(2)}</div>
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
                ${D.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':D.map(w=>{const H=w.status==="pago",ie=!H&&w.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${R.get(w.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${w.descricao}${w.mesReferencia?` / ${w.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${w.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${w.valor.toFixed(2)}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${H?"badge-success":ie?"badge-coral":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${H?"Pago":ie?"Atrasado":"Pendente"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,(W=t.querySelector("#btn-tab-rel-alunos"))==null||W.addEventListener("click",()=>{s="alunos",b()}),(J=t.querySelector("#btn-tab-rel-financeiro"))==null||J.addEventListener("click",()=>{s="financeiro",b()}),(Z=t.querySelector("#filtro-aluno-status"))==null||Z.addEventListener("change",w=>{r=w.target.value,b()}),(Y=t.querySelector("#filtro-aluno-instrumento"))==null||Y.addEventListener("change",w=>{k=w.target.value,b()}),(se=t.querySelector("#filtro-aluno-nivel"))==null||se.addEventListener("change",w=>{a=w.target.value,b()}),(K=t.querySelector("#filtro-aluno-plano"))==null||K.addEventListener("change",w=>{P=w.target.value,b()}),(j=t.querySelector("#filtro-aluno-financeiro"))==null||j.addEventListener("change",w=>{h=w.target.value,b()}),(ne=t.querySelector("#filtro-aluno-ordem"))==null||ne.addEventListener("change",w=>{c=w.target.value,b()}),(ae=t.querySelector("#btn-limpar-filtros-alunos"))==null||ae.addEventListener("click",()=>{r="todos",k="todos",a="todos",P="todos",h="todos",c="nome_asc",b()}),(me=t.querySelector("#filtro-fin-dataini"))==null||me.addEventListener("change",w=>{E=w.target.value,b()}),(F=t.querySelector("#filtro-fin-datafim"))==null||F.addEventListener("change",w=>{M=w.target.value,b()}),(oe=t.querySelector("#filtro-fin-mesref-ini"))==null||oe.addEventListener("change",w=>{i=w.target.value,b()}),(pe=t.querySelector("#filtro-fin-mesref-fim"))==null||pe.addEventListener("change",w=>{u=w.target.value,b()}),(be=t.querySelector("#filtro-fin-status"))==null||be.addEventListener("change",w=>{x=w.target.value,b()}),(he=t.querySelector("#filtro-fin-aluno"))==null||he.addEventListener("change",w=>{f=w.target.value,b()}),(ye=t.querySelector("#filtro-fin-metodo"))==null||ye.addEventListener("change",w=>{l=w.target.value,b()}),(xe=t.querySelector("#filtro-fin-ordem"))==null||xe.addEventListener("change",w=>{v=w.target.value,b()}),(Me=t.querySelector("#btn-limpar-filtros-fin"))==null||Me.addEventListener("click",()=>{E="",M="",i="",u="",x="todos",f="todos",l="todos",v="vencimento_asc",b()}),(Pe=t.querySelector("#btn-gerar-pdf"))==null||Pe.addEventListener("click",async()=>{if(!o){B("Você não possui permissão para emitir relatórios.","error");return}const w=t.querySelector("#btn-gerar-pdf"),H=w?w.innerHTML:"";w&&(w.disabled=!0,w.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await z(n,C,y):await L(n,D,m,{mesIni:i,mesFim:u}),B("PDF gerado com sucesso!","success")}catch(ie){console.error("Erro ao gerar PDF:",ie),B("Ocorreu um erro ao gerar o documento PDF.","error")}finally{w&&(w.disabled=!1,w.innerHTML=H)}})}function A(n){return new Promise(m=>{if(n&&n.trim()!==""){const y=new Image;y.crossOrigin="Anonymous",y.onload=()=>{try{const p=document.createElement("canvas");p.width=160,p.height=160;const d=p.getContext("2d");if(!d){m(n);return}const C=24;d.fillStyle="#ffffff",d.beginPath(),d.moveTo(C,0),d.lineTo(160-C,0),d.quadraticCurveTo(160,0,160,C),d.lineTo(160,160-C),d.quadraticCurveTo(160,160,160-C,160),d.lineTo(C,160),d.quadraticCurveTo(0,160,0,160-C),d.lineTo(0,C),d.quadraticCurveTo(0,0,C,0),d.closePath(),d.fill();const O=12,_=160-O*2,N=160-O*2;let S=_,T=N;const D=y.width/y.height;D>1?T=_/D:S=N*D;const R=O+(_-S)/2,V=O+(N-T)/2;d.drawImage(y,R,V,S,T),m(p.toDataURL("image/png"))}catch{m(n)}},y.onerror=()=>{g().then(m)},y.src=n;return}g().then(m)})}function g(){return new Promise(n=>{try{const m=document.createElement("canvas");m.width=160,m.height=160;const y=m.getContext("2d");if(!y){n("");return}const p=32;y.fillStyle="#181c2b",y.beginPath(),y.moveTo(p,0),y.lineTo(160-p,0),y.quadraticCurveTo(160,0,160,p),y.lineTo(160,160-p),y.quadraticCurveTo(160,160,160-p,160),y.lineTo(p,160),y.quadraticCurveTo(0,160,0,160-p),y.lineTo(0,p),y.quadraticCurveTo(0,0,p,0),y.closePath(),y.fill(),y.lineWidth=3,y.strokeStyle="#2d3748",y.stroke();const d=new Image,C=`
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
        `,O=new Blob([C],{type:"image/svg+xml;charset=utf-8"}),_=URL.createObjectURL(O);d.onload=()=>{y.drawImage(d,20,20,120,120),URL.revokeObjectURL(_),n(m.toDataURL("image/png"))},d.onerror=()=>{URL.revokeObjectURL(_),n("")},d.src=_}catch{n("")}})}async function z(n,m,y){const p=new Te({orientation:"portrait",unit:"mm",format:"a4"}),d=new Date().toLocaleString("pt-BR"),C=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",O=n.razaoSocial||"Acusticamente Ensino Musical Ltda",_=n.cnpj?`CNPJ: ${n.cnpj}`:"",N=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),S=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),T=await A(n.logotipoCustomizado);T&&p.addImage(T,"PNG",14,12,17,17);const D=T?35:14;p.setFont("helvetica","bold"),p.setFontSize(13),p.setTextColor(15,23,42),p.text(C,D,17),p.setFont("helvetica","normal"),p.setFontSize(8),p.setTextColor(71,85,105),p.text([O,_].filter(Boolean).join(" • "),D,21.5),p.setFontSize(7.5),p.setTextColor(100,116,139),S&&p.text(S,D,25.5),N&&p.text(N,D,S?29.5:25.5),p.setFont("helvetica","bold"),p.setFontSize(12),p.setTextColor(217,72,59),p.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),p.setFont("helvetica","normal"),p.setFontSize(8),p.setTextColor(100,116,139),p.text(`Emissão: ${d}`,196,22,{align:"right"}),p.text(`Total: ${m.length} aluno(s)`,196,26.5,{align:"right"}),p.setDrawColor(203,213,225),p.setLineWidth(.4),p.line(14,33,196,33);const R=m.filter(j=>j.status==="ativo").length,V=m.filter(j=>j.status==="inativo").length,X=m.filter(j=>I.isStudentOverdue(j.id)).length,ee=[{label:"TOTAL DE ALUNOS",value:`${m.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${R}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${X}`,color:[220,38,38]}],G=43,W=12,J=36;ee.forEach((j,ne)=>{const ae=14+ne*(G+3);p.setFillColor(248,250,252),p.roundedRect(ae,J,G,W,1.5,1.5,"F"),p.setDrawColor(226,232,240),p.roundedRect(ae,J,G,W,1.5,1.5,"S"),p.setFont("helvetica","bold"),p.setFontSize(6.5),p.setTextColor(100,116,139),p.text(j.label,ae+3,J+4),p.setFontSize(10.5),p.setTextColor(j.color[0],j.color[1],j.color[2]),p.text(j.value,ae+3,J+9.5)});const Z=m.map((j,ne)=>{const ae=y.find(oe=>oe.id===j.planoId),me=j.status==="ativo",F=I.isStudentOverdue(j.id);return[(ne+1).toString(),j.nome,j.instrumentoPrincipal||"Música Geral",j.telefone||"-",(ae==null?void 0:ae.nome)||"-",me?"Ativo":"Inativo",F?"Atrasado":"Em dia"]});De(p,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:Z.length>0?Z:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:j=>{j.section==="body"&&(j.column.index===5&&(j.cell.raw==="Ativo"?(j.cell.styles.textColor=[22,163,74],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[202,138,4]),j.column.index===6&&(j.cell.raw==="Atrasado"?(j.cell.styles.textColor=[220,38,38],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[22,163,74]))}});const Y=p.internal.getNumberOfPages();for(let j=1;j<=Y;j++)p.setPage(j),p.setDrawColor(226,232,240),p.setLineWidth(.3),p.line(14,287,196,287),p.setFont("helvetica","normal"),p.setFontSize(7),p.setTextColor(148,163,184),p.text(`${C} • Sistema de Gestão Escolar & Pedagógica`,14,292),p.text(`Página ${j} de ${Y}`,196,292,{align:"right"});const se=p.output("blob"),K=URL.createObjectURL(se);window.open(K,"_blank")}async function L(n,m,y,p){const d=new Te({orientation:"portrait",unit:"mm",format:"a4"}),C=new Map(y.map(F=>[F.id,F.nome])),O=new Date().toLocaleString("pt-BR"),_=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",N=n.razaoSocial||"Acusticamente Ensino Musical Ltda",S=n.cnpj?`CNPJ: ${n.cnpj}`:"",T=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),D=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),R=new Date().toISOString().slice(0,10),V=m.reduce((F,oe)=>F+oe.valor,0),X=m.filter(F=>F.status==="pago").reduce((F,oe)=>F+oe.valor,0),ee=m.filter(F=>F.status!=="pago").reduce((F,oe)=>F+oe.valor,0),G=await A(n.logotipoCustomizado);G&&d.addImage(G,"PNG",14,12,17,17);const W=G?35:14;d.setFont("helvetica","bold"),d.setFontSize(13),d.setTextColor(15,23,42),d.text(_,W,17),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(71,85,105),d.text([N,S].filter(Boolean).join(" • "),W,21.5),d.setFontSize(7.5),d.setTextColor(100,116,139),D&&d.text(D,W,25.5),T&&d.text(T,W,D?29.5:25.5),d.setFont("helvetica","bold"),d.setFontSize(12),d.setTextColor(5,150,105),d.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(100,116,139),d.text(`Emissão: ${O}`,196,22,{align:"right"});let J=`Total: ${m.length} registro(s)`;p!=null&&p.mesIni&&(p!=null&&p.mesFim)?J=`Ref: ${p.mesIni} a ${p.mesFim} • ${m.length} reg.`:p!=null&&p.mesIni?J=`Ref: a partir de ${p.mesIni} • ${m.length} reg.`:p!=null&&p.mesFim&&(J=`Ref: até ${p.mesFim} • ${m.length} reg.`),d.text(J,196,26.5,{align:"right"}),d.setDrawColor(203,213,225),d.setLineWidth(.4),d.line(14,33,196,33);const Z=[{label:"LANÇAMENTOS",value:`${m.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${X.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${ee.toFixed(2)}`,color:[220,38,38]}],Y=43,se=12,K=36;Z.forEach((F,oe)=>{const pe=14+oe*(Y+3);d.setFillColor(248,250,252),d.roundedRect(pe,K,Y,se,1.5,1.5,"F"),d.setDrawColor(226,232,240),d.roundedRect(pe,K,Y,se,1.5,1.5,"S"),d.setFont("helvetica","bold"),d.setFontSize(6.5),d.setTextColor(100,116,139),d.text(F.label,pe+3,K+4),d.setFontSize(10),d.setTextColor(F.color[0],F.color[1],F.color[2]),d.text(F.value,pe+3,K+9.5)});const j=m.map((F,oe)=>{const pe=F.status==="pago",be=!pe&&F.dataVencimento<R,he=pe?"Pago":be?"Atrasado":"Pendente",ye=F.descricao+(F.mesReferencia?` / ${F.mesReferencia}`:""),xe=F.dataVencimento.split("-").reverse().join("/");return[(oe+1).toString(),C.get(F.alunoId)||"Aluno",ye,xe,`R$ ${F.valor.toFixed(2)}`,he]});De(d,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:j.length>0?j:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:F=>{F.section==="body"&&F.column.index===5&&(F.cell.raw==="Pago"?(F.cell.styles.textColor=[22,163,74],F.cell.styles.fontStyle="bold"):F.cell.raw==="Atrasado"?(F.cell.styles.textColor=[220,38,38],F.cell.styles.fontStyle="bold"):F.cell.styles.textColor=[202,138,4])}});const ne=d.internal.getNumberOfPages();for(let F=1;F<=ne;F++)d.setPage(F),d.setDrawColor(226,232,240),d.setLineWidth(.3),d.line(14,287,196,287),d.setFont("helvetica","normal"),d.setFontSize(7),d.setTextColor(148,163,184),d.text(`${_} • Gestão Financeira & Escolar`,14,292),d.text(`Página ${F} de ${ne}`,196,292,{align:"right"});const ae=d.output("blob"),me=URL.createObjectURL(ae);window.open(me,"_blank")}return b(),t}function rt($){const t=document.createElement("div");let e=new Date,o="";const s=h=>h.toString().padStart(2,"0");function r(h){const c=h.getDate(),M=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][h.getMonth()],i=h.getFullYear(),u=new Date,x=u.getDate()===c&&u.getMonth()===h.getMonth()&&u.getFullYear()===i;return`${c} de ${M} de ${i}${x?" (Hoje)":""}`}function k(h){return`${h.getFullYear()}-${s(h.getMonth()+1)}-${s(h.getDate())}`}function a(){var l,v,b,A,g,z,L,n;const h=U.getLogs(),c=new Date,E=`${s(c.getDate())}/${s(c.getMonth()+1)}/${c.getFullYear()}`,M=h.filter(m=>{var y;return(y=m.dataHoraFormatada)==null?void 0:y.startsWith(E)}).length,i=e?`${s(e.getDate())}/${s(e.getMonth()+1)}/${e.getFullYear()}`:"",u=e!==null&&c.getDate()===e.getDate()&&c.getMonth()===e.getMonth()&&c.getFullYear()===e.getFullYear(),x=h.filter(m=>{const y=!e||m.dataHoraFormatada&&m.dataHoraFormatada.startsWith(i)||m.dataHora&&m.dataHora.startsWith(k(e)),p=o===""||m.tela.toLowerCase().includes(o.toLowerCase())||m.usuarioNome.toLowerCase().includes(o.toLowerCase())||m.usuarioLogin.toLowerCase().includes(o.toLowerCase())||m.acao.toLowerCase().includes(o.toLowerCase())||m.detalhes.toLowerCase().includes(o.toLowerCase());return y&&p});t.innerHTML=`
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
            ${e?r(e):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${u?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${e?k(e):""}" 
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
            ${q.search}
          </div>
        </div>
        ${o?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${x.length})
            ${e?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${i}</span>`:""}
          </h3>
          ${e!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${i}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
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
                        <div>Nenhum registro de auditoria encontrado para ${e?`o dia <strong>${i}</strong>`:"o filtro selecionado"}.</div>
                        ${e!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:x.map(m=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${m.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${m.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${m.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${m.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${m.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${m.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
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
    `,(l=t.querySelector("#audit-btn-prev"))==null||l.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()-1),a()}),(v=t.querySelector("#audit-btn-next"))==null||v.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()+1),a()}),(b=t.querySelector("#audit-btn-today"))==null||b.addEventListener("click",()=>{e=new Date,a()}),(A=t.querySelector("#audit-btn-all"))==null||A.addEventListener("click",()=>{e=null,a()}),(g=t.querySelector("#audit-empty-btn-all"))==null||g.addEventListener("click",()=>{e=null,a()}),(z=t.querySelector("#audit-date-picker"))==null||z.addEventListener("change",m=>{const y=m.target.value;if(y){const[p,d,C]=y.split("-").map(Number);e=new Date(p,d-1,C)}else e=null;a()});const f=t.querySelector("#audit-search-input");f==null||f.addEventListener("input",m=>{o=m.target.value,a();const y=t.querySelector("#audit-search-input");y&&(y.focus(),y.selectionStart=y.selectionEnd=y.value.length)}),(L=t.querySelector("#btn-clear-audit-search"))==null||L.addEventListener("click",()=>{o="",a()}),(n=t.querySelector("#btn-clear-all-audit"))==null||n.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await I.resetCleanDatabase("Administrador"),a())})}const P=()=>{a()};return window.addEventListener("audit_updated",P),a(),t}function lt($){const t=document.createElement("div"),e=Q.getCurrentUser(),o=I.getSettings(),s=te(e,"configuracoes","alterar");t.innerHTML=`
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
                    ${le(o.logotipoCustomizado,40)}
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
                    ${le(o.logotipoCustomizado,40)}
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
  `;const r=t.querySelector("#btn-tab-gerais"),k=t.querySelector("#btn-tab-instituicao"),a=t.querySelector("#tab-content-gerais"),P=t.querySelector("#tab-content-instituicao");function h(d,C){d&&(C?d.classList.add("active"):d.classList.remove("active"))}function c(d){a.style.display=d==="gerais"?"block":"none",P.style.display=d==="instituicao"?"block":"none",h(r,d==="gerais"),h(k,d==="instituicao")}r==null||r.addEventListener("click",()=>c("gerais")),k==null||k.addEventListener("click",()=>c("instituicao"));let E=o.logotipoCustomizado||"";const M=t.querySelector("#cfg-menu-name"),i=t.querySelector("#preview-menu-brand-name"),u=t.querySelector("#preview-report-brand-name"),x=t.querySelector("#preview-logo-menu"),f=t.querySelector("#preview-logo-report"),l=t.querySelector("#input-logo-file"),v=t.querySelector("#btn-upload-logo"),b=t.querySelector("#btn-reset-logo"),A=t.querySelector("#logo-feedback-msg");M==null||M.addEventListener("input",()=>{const d=M.value.trim()||"Acusticamente";i&&(i.textContent=d),u&&(u.textContent=d)}),v==null||v.addEventListener("click",()=>{l==null||l.click()}),l==null||l.addEventListener("change",d=>{const C=d.target.files;if(!C||C.length===0)return;const O=C[0];if(!O.type.startsWith("image/")){B("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(O.size>3*1024*1024){B("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const _=new FileReader;_.onload=N=>{var S;E=((S=N.target)==null?void 0:S.result)||"",x&&(x.innerHTML=le(E,40)),f&&(f.innerHTML=le(E,40)),b&&(b.disabled=!1,b.style.color="#ef4444"),A&&(A.style.display="block",A.style.color="var(--status-success)",A.textContent="Imagem carregada no preview. Clique em Salvar."),B("Logotipo carregado na pré-visualização!","info")},_.onerror=()=>{B("Erro ao processar o arquivo de imagem.","error")},_.readAsDataURL(O)}),b==null||b.addEventListener("click",()=>{E="",l&&(l.value=""),x&&(x.innerHTML=le("",40)),f&&(f.innerHTML=le("",40)),b&&(b.disabled=!0,b.style.color="var(--text-muted)"),A&&(A.style.display="block",A.style.color="var(--color-coral)",A.textContent="Logotipo padrão no preview. Clique em Salvar."),B("Logotipo padrão restaurado no preview.","info")});const g=t.querySelector("#form-settings-gerais");g==null||g.addEventListener("submit",d=>{d.preventDefault();const C=M.value.trim()||"Acusticamente";I.updateSettings({nomeMenu:C,logotipoCustomizado:E},(e==null?void 0:e.nome)||"Administrador"),A&&(A.style.display="none"),B("Configurações gerais salvas com sucesso!","success")});const z=t.querySelector("#cfg-cnpj");z==null||z.addEventListener("input",d=>{let C=d.target.value.replace(/\D/g,"").slice(0,14);C.length>12?C=C.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):C.length>8?C=C.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):C.length>5?C=C.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):C.length>2&&(C=C.replace(/^(\d{2})(\d{1,3})$/,"$1.$2")),d.target.value=C});const L=t.querySelector("#cfg-cep");L==null||L.addEventListener("input",d=>{let C=d.target.value.replace(/\D/g,"").slice(0,8);C.length>5&&(C=C.replace(/^(\d{5})(\d{1,3})$/,"$1-$2")),d.target.value=C});const n=t.querySelector("#cfg-uf");n==null||n.addEventListener("input",d=>{d.target.value=d.target.value.toUpperCase().slice(0,2)});const m=t.querySelector("#form-settings-institucional");m==null||m.addEventListener("submit",d=>{d.preventDefault();const C=t.querySelector("#cfg-fantasia").value,O=t.querySelector("#cfg-razao").value,_=t.querySelector("#cfg-cnpj").value,N=t.querySelector("#cfg-ie").value,S=t.querySelector("#cfg-tel").value,T=t.querySelector("#cfg-email").value,D=t.querySelector("#cfg-site").value,R=t.querySelector("#cfg-cep").value,V=t.querySelector("#cfg-logradouro").value,X=t.querySelector("#cfg-numero").value,ee=t.querySelector("#cfg-complemento").value,G=t.querySelector("#cfg-bairro").value,W=t.querySelector("#cfg-cidade").value,J=t.querySelector("#cfg-uf").value.toUpperCase();I.updateSettings({nomeEscola:C,nomeClinica:C,nomeFantasia:C,razaoSocial:O,cnpj:_,inscricaoEstadual:N,telefoneContato:S,emailContato:T,website:D,cep:R,logradouro:V,numero:X,complemento:ee,bairro:G,cidade:W,estado:J},(e==null?void 0:e.nome)||"Administrador"),B("Dados da instituição salvos com sucesso!","success")});const y=t.querySelector("#footer-cloud-status"),p=d=>{y&&(d==="connected"?(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,y.style.color="#4ade80"):d==="fallback"?(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,y.style.color="#fbbf24"):(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,y.style.color="#94a3b8"))};return p(I.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",d=>{p(d.detail)}),t}class dt{constructor(){re(this,"currentScreen","site");re(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const t=window.location.hash.replace("#","").trim(),e=Q.getCurrentUser();!t||t==="site"?this.currentScreen="site":t==="login"?this.currentScreen="login":Q.isAuthenticated()?["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(t)&&ce(e,t)?this.currentScreen=t:this.currentScreen=this.getFirstAllowedScreen(e):this.currentScreen="login",window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","").trim(),s=!o||o==="site"?"site":o;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const o=I.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const r=document.querySelector(".sidebar-logo");r&&(r.innerHTML=le(o.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{Q.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),I.syncWithCloud(),this.render()}getFirstAllowedScreen(t){if(!t)return"login";const e=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of e)if(ce(t,o))return o;return"home"}navigateTo(t){if(t==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(t==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!Q.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const e=Q.getCurrentUser();if(!ce(e,t)){B("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(e);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=t,window.location.hash=t,this.render(),I.syncWithCloud()}render(){var i;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const u=Xe(x=>{this.navigateTo(x)});this.appRoot.appendChild(u);return}if(this.currentScreen==="login"||!Q.isAuthenticated()){const u=Ye(()=>{const x=Q.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(x))},()=>{this.navigateTo("site")});this.appRoot.appendChild(u);return}const t=document.createElement("div");t.className="app-container";const e=Q.getCurrentUser(),o=(e==null?void 0:e.papel)==="admin",s=I.getSettings(),r=s.nomeMenu||"Acusticamente";t.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${le(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${r}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${q.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${ce(e,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${q.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${ce(e,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${q.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${ce(e,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${q.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${ce(e,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${q.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${ce(e,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${q.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${ce(e,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${q.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${q.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${ce(e,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${q.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${ce(e,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${q.configuracoes}</span>
              <span>Configurações</span>
            </a>
          `:""}

          <div style="margin: 10px 0; border-top: 1px solid var(--border-subtle);"></div>

          <a class="nav-item" data-screen="site" title="Abrir o site institucional da Acusticamente">
            <span class="nav-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </span>
            <span>Ver Site</span>
          </a>
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
            ${q.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${q.menu}
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
    `;const k=t.querySelector("#app-sidebar"),a=t.querySelector("#sidebar-backdrop"),P=t.querySelector("#btn-mobile-menu-toggle"),h=t.querySelector("#btn-sidebar-close"),c=u=>{const x=u!==void 0?u:!k.classList.contains("open");k.classList.toggle("open",x),a.classList.toggle("open",x),document.body.style.overflow=x?"hidden":""};P==null||P.addEventListener("click",()=>c(!0)),h==null||h.addEventListener("click",()=>c(!1)),a==null||a.addEventListener("click",()=>c(!1)),t.querySelectorAll(".nav-item").forEach(u=>{u.addEventListener("click",x=>{const f=x.currentTarget.dataset.screen;c(!1),f&&this.navigateTo(f)})}),(i=t.querySelector("#btn-app-logout"))==null||i.addEventListener("click",()=>{fe({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{Q.logout(),this.navigateTo("site")}})});const E=t.querySelector("#screen-viewport"),M=this.createViewElement(this.currentScreen);E.appendChild(M),this.appRoot.appendChild(t)}createViewElement(t){const e=o=>this.navigateTo(o);switch(t){case"home":return Fe(e);case"agenda":return Qe();case"alunos":return tt(e);case"user":return ot(e);case"planos":return st();case"financeiro":return nt();case"relatorios":return it();case"auditoria":return rt();case"configuracoes":return lt();default:return Fe(e)}}getScreenTitle(t){switch(t){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(t){switch(t){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new dt});
