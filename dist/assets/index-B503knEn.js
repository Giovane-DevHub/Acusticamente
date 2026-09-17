var Ve=Object.defineProperty;var He=($,e,t)=>e in $?Ve($,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):$[e]=t;var ie=($,e,t)=>He($,typeof e!="symbol"?e+"":e,t);import{E as De,a as Be}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const z of l.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&o(z)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();const Ne="acusticamente_audit_logs";class Ue{constructor(){ie(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Ne);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Ne,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,o=z=>z.toString().padStart(2,"0"),s=`${o(t.getDate())}/${o(t.getMonth()+1)}/${t.getFullYear()} ${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`,l={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(l),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:l})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:l})),l}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const U=new Ue,ze="acusticamente_users",$e="acusticamente_students",Ee="acusticamente_plans",Ae="acusticamente_appointments",Le="acusticamente_settings",Se="acusticamente_payments";class Je{constructor(){ie(this,"users",[]);ie(this,"students",[]);ie(this,"plans",[]);ie(this,"appointments",[]);ie(this,"payments",[]);ie(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",website:"www.acusticamente.com.br",cep:"01310-100",logradouro:"Avenida Paulista",numero:"1000",complemento:"Conjunto 42",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});ie(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(ze);e?this.users=JSON.parse(e).map(a=>{var P,h;return{...a,permissoes:{...a.permissoes,financeiro:((P=a.permissoes)==null?void 0:P.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((h=a.permissoes)==null?void 0:h.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Ee);t?this.plans=JSON.parse(t):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const o=localStorage.getItem($e);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[],this.saveStudents());const s=localStorage.getItem(Ae);s?this.appointments=JSON.parse(s):(this.appointments=[],this.saveAppointments());const l=localStorage.getItem(Le);l&&(this.settings=JSON.parse(l));const z=localStorage.getItem(Se);z?this.payments=JSON.parse(z):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(a=>{var P;(P=a.observacoes)!=null&&P.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var P;(P=a.titulo)!=null&&P.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=o=>o.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,o){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:o})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const o=t.data;return Array.isArray(o.students)&&(this.students=o.students,localStorage.setItem($e,JSON.stringify(this.students))),Array.isArray(o.payments)&&(this.payments=o.payments,localStorage.setItem(Se,JSON.stringify(this.payments))),Array.isArray(o.appointments)&&(this.appointments=o.appointments,localStorage.setItem(Ae,JSON.stringify(this.appointments))),Array.isArray(o.plans)&&(this.plans=o.plans,localStorage.setItem(Ee,JSON.stringify(this.plans))),Array.isArray(o.users)&&o.users.length>0&&(this.users=o.users,localStorage.setItem(ze,JSON.stringify(this.users))),o.settings&&(this.settings={...this.settings,...o.settings},localStorage.setItem(Le,JSON.stringify(this.settings))),Array.isArray(o.audit)&&(o.audit.length===0?U.clearLocalOnly():U.setLogs(o.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem($e,JSON.stringify([])),localStorage.setItem(Se,JSON.stringify([])),localStorage.setItem(Ae,JSON.stringify([])),localStorage.setItem(Ee,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await U.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(ze,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem($e,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Ee,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Ae,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Se,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}saveSettings(){localStorage.setItem(Le,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const o={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(e,t,o){const s=this.users.findIndex(a=>a.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const l=this.users[s],z=l.isSistema;return this.users[s]={...l,...t,isSistema:z,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${l.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const o=this.users.find(s=>s.id===e);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(e,t){const o={...e,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(e,t,o){const s=this.students.findIndex(z=>z.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const l=this.students[s];return this.students[s]={...l,...t},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${l.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const o=this.students.find(s=>s.id===e);o&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const o={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(e,t,o){const s=this.plans.findIndex(z=>z.id===e);if(s===-1)throw new Error("Plano não encontrado.");const l=this.plans[s];return this.plans[s]={...l,...t},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${l.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const o=this.plans.find(s=>s.id===e);o&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(e,t){const o={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(e,t,o){const s=this.appointments.findIndex(z=>z.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const l=this.appointments[s];return this.appointments[s]={...l,...t},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${l.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const o=this.appointments.find(s=>s.id===e);o&&(this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(e,t){const o=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(l=>l.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(e,t,o,s){const l=t?"falta_justificada":"falta_injustificada",z=this.updateAppointment(e,{status:l,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(h=>h.id===z.alunoId);let P=(a==null?void 0:a.saldoReposicoes)||0;return t&&a?(P=(a.saldoReposicoes||0)+1,a.saldoReposicoes=P,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${z.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${P}. Motivo: ${o||"Não especificado"}`})):!t&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${z.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:z,saldoReposicoes:P}}agendarReposicao(e,t,o){const s=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},o);if(t){const z=this.appointments.findIndex(a=>a.id===t);z!==-1&&(this.appointments[z].aulaReposicaoId=s.id,this.saveAppointments())}const l=this.students.find(z=>z.id===s.alunoId);return l&&typeof l.saldoReposicoes=="number"&&l.saldoReposicoes>0&&(l.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${l.nome}". 1 crédito abatido. Saldo restante: ${l.saldoReposicoes}.`})),s}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,o)=>{const s=`${t.data}T${t.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(o=>{o.status==="pendente"&&o.dataVencimento<e&&(o.status="atrasado",t=!0)}),t&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(o=>o.alunoId===e&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<t))}addPayment(e,t){const o=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<o&&(s="atrasado");const l={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(l),this.savePayments();const z=this.students.find(a=>a.id===l.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${l.descricao}" (R$ ${l.valor.toFixed(2)}) cadastrado para o aluno "${(z==null?void 0:z.nome)||"N/A"}" com vencimento em ${l.dataVencimento}.`}),l}darBaixaPayment(e,t,o,s,l){const z=this.payments.findIndex(d=>d.id===e);if(z===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[z],P=a.status;a.status="pago",a.dataPagamento=t,a.formaPagamento=o,l!==void 0&&(a.observacoes=l.trim()?l.trim():a.observacoes),this.savePayments();const h=this.students.find(d=>d.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(h==null?void 0:h.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${t} (Status anterior: ${P}).`}),a}updatePayment(e,t,o){const s=this.payments.findIndex(d=>d.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const l=this.getTodayDateString();let z=t.status||this.payments[s].status;const a=t.dataVencimento||this.payments[s].dataVencimento;z==="pendente"&&a<l&&(z="atrasado"),this.payments[s]={...this.payments[s],...t,status:z},this.savePayments();const P=this.payments[s],h=this.students.find(d=>d.id===P.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${P.descricao}" do aluno "${(h==null?void 0:h.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const o=this.payments.find(l=>l.id===e);if(!o)return;this.payments=this.payments.filter(l=>l.id!==e),this.savePayments();const s=this.students.find(l=>l.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,o){const s=S=>S.toString().padStart(2,"0"),l=`${e}-${s(t)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||l,P=this.students.filter(S=>S.status==="ativo");let h=0,d=0;return P.forEach(S=>{if(this.payments.some(v=>v.alunoId===S.id&&(v.mesReferencia===l||v.dataVencimento.startsWith(l)))){d++;return}const r=S.diaVencimento||10,u=new Date(e,t,0).getDate(),x=Math.min(r,u),f=`${e}-${s(t)}-${s(x)}`,i=typeof S.valorMensalidade=="number"&&S.valorMensalidade>0?S.valorMensalidade:280;this.addPayment({alunoId:S.id,descricao:`Mensalidade ${a}/${e}`,mesReferencia:l,valor:i,dataVencimento:f,status:"pendente",observacoes:`Gerado automaticamente para o plano ${S.moduloAtual||S.instrumentoPrincipal||"Música"}`},o),h++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${e}: ${h} mensalidade(s) criada(s) e ${d} já existente(s) pulada(s).`}),{criadas:h,puladas:d}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const C=new Je,ve={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Ce($){var s,l,z,a,P,h,d,S,M,r,u,x,f,i,v,b,E,g,I,L,n,m,y,p,c,k,O,_;if(!$)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if($.papel==="admin")return JSON.parse(JSON.stringify(ve.admin));const e=ve[$.papel]||ve.professor,t=$.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const o=N=>typeof N=="boolean";return{alunos:{acesso:o(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:o(t.alunos)?t.alunos:((l=t.alunos)==null?void 0:l.cadastrar)??e.alunos.cadastrar,alterar:o(t.alunos)?t.alunos:((z=t.alunos)==null?void 0:z.alterar)??e.alunos.alterar,excluir:o(t.alunos)?!1:((a=t.alunos)==null?void 0:a.excluir)??e.alunos.excluir},agenda:{acesso:o(t.agenda)?t.agenda:((P=t.agenda)==null?void 0:P.acesso)??e.agenda.acesso,cadastrar:o(t.agenda)?t.agenda:((h=t.agenda)==null?void 0:h.cadastrar)??e.agenda.cadastrar,alterar:o(t.agenda)?t.agenda:((d=t.agenda)==null?void 0:d.alterar)??e.agenda.alterar,excluir:o(t.agenda)?!1:((S=t.agenda)==null?void 0:S.excluir)??e.agenda.excluir},planos:{acesso:o(t.planos)?t.planos:((M=t.planos)==null?void 0:M.acesso)??e.planos.acesso,cadastrar:o(t.planos)?t.planos:((r=t.planos)==null?void 0:r.cadastrar)??e.planos.cadastrar,alterar:o(t.planos)?t.planos:((u=t.planos)==null?void 0:u.alterar)??e.planos.alterar,excluir:o(t.planos)?!1:((x=t.planos)==null?void 0:x.excluir)??e.planos.excluir},home:{acesso:o(t.home)?t.home:((f=t.home)==null?void 0:f.acesso)??e.home.acesso},financeiro:{acesso:o(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.acesso)??((v=e.financeiro)==null?void 0:v.acesso)??!1,cadastrar:o(t.financeiro)?t.financeiro:((b=t.financeiro)==null?void 0:b.cadastrar)??((E=e.financeiro)==null?void 0:E.cadastrar)??!1,alterar:o(t.financeiro)?t.financeiro:((g=t.financeiro)==null?void 0:g.alterar)??((I=e.financeiro)==null?void 0:I.alterar)??!1,excluir:o(t.financeiro)?!1:((L=t.financeiro)==null?void 0:L.excluir)??((n=e.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(t.relatorios)?t.relatorios:((m=t.relatorios)==null?void 0:m.acesso)??((y=e.relatorios)==null?void 0:y.acesso)??!0,gerar:o(t.relatorios)?t.relatorios:((p=t.relatorios)==null?void 0:p.gerar)??((c=e.relatorios)==null?void 0:c.gerar)??!0},auditoria:{acesso:o(t.auditoria)?t.auditoria:((k=t.auditoria)==null?void 0:k.acesso)??e.auditoria.acesso},configuracoes:{acesso:o(t.configuracoes)?t.configuracoes:((O=t.configuracoes)==null?void 0:O.acesso)??e.configuracoes.acesso,alterar:o(t.configuracoes)?t.configuracoes:((_=t.configuracoes)==null?void 0:_.alterar)??e.configuracoes.alterar}}}function ce($,e){if(!$)return!1;if(e==="login")return!0;if(e==="user")return $.papel==="admin";if($.papel==="admin"||$.isSistema)return!0;const o=Ce($)[e];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function te($,e,t){if(!$)return!1;if($.papel==="admin")return!0;const s=Ce($)[e];return s?!!s[t]:!1}const ke="acusticamente_active_session";class Ge{constructor(){ie(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(ke);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=C.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(ke,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=C.getUsers().find(l=>l.login===e.trim());return s?s.senha!==t.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(ke,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(ke),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const Q=new Ge;function Ye($=40){return`
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
  `}function le($,e=40){return $&&$.trim()!==""?`<img src="${$}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:Ye(e)}function B($,e="success"){const t=document.getElementById("toast-container");if(!t)return;const o=document.createElement("div");o.className=`toast toast-${e}`,o.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${$}</span>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function de($){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
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
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),o=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),l=()=>{e.innerHTML="",$.onCancel&&$.onCancel()};t.onclick=l,o.onclick=l,s&&$.onConfirm&&(s.onclick=async()=>{const z=document.querySelector(".modal-card");await $.onConfirm(z)!==!1&&(e.innerHTML="")})}function be(){const $=document.getElementById("modal-container");$&&($.innerHTML="")}function ge($){de({title:$.title||"Confirmar Exclusão",bodyHtml:`
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
    `,confirmText:$.confirmText||"Excluir Definitivamente",confirmBtnClass:$.confirmBtnClass||"btn-danger",onConfirm:()=>($.onConfirm(),!0)})}const q={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},Me="acusticamente_auth_remember",We="acusticamente_manual_logout";function Xe($,e){const t=document.createElement("div");t.className="login-page";const o=C.getSettings(),s=o.nomeMenu||o.nomeFantasia||"Acusticamente";let l={username:"",password:"",remember:!1};try{const h=localStorage.getItem(Me);h&&(l={...l,...JSON.parse(h)})}catch{l={username:"",password:"",remember:!1}}t.innerHTML=`
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
              value="${l.remember?l.username:""}"
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
              value="${l.remember?l.password:""}"
              required 
              autocomplete="current-password"
            />
          </div>

          <!-- Opção de Acesso: Lembrar Senha apenas -->
          <div style="margin: 16px 0 22px 0; display: flex; align-items: center; padding: 10px 14px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0; width: 100%;">
              <input 
                type="checkbox" 
                id="login-remember" 
                ${l.remember?"checked":""} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Lembrar senha</span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 13px; font-size: 1rem;">
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  `;const z=t.querySelector("#login-remember"),a=t.querySelector("#btn-back-to-site");a==null||a.addEventListener("click",()=>{e?e():window.location.hash="site"});const P=t.querySelector("#login-form");return P.onsubmit=h=>{var f;h.preventDefault();const d=t.querySelector("#login-username"),S=t.querySelector("#login-password"),M=d.value.trim(),r=S.value.trim(),u=z.checked,x=Q.login(M,r);x.success?(u?localStorage.setItem(Me,JSON.stringify({username:M,password:r,remember:!0})):localStorage.removeItem(Me),sessionStorage.removeItem(We),B(`Bem-vindo, ${(f=x.user)==null?void 0:f.nome}!`,"success"),$()):B(x.message,"error")},t}const ue=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`;function Qe($){var S,M,r;const e=document.createElement("div");e.className="public-site-wrapper";const t=C.getSettings(),o=t.nomeFantasia||t.nomeEscola||"Acusticamente - Escola de Música",s=t.nomeMenu||"Acusticamente",l=t.telefoneContato||"(11) 98231-1122",z=l.replace(/\D/g,""),a=t.emailContato||"contato@acusticamente.com.br",P=t.cidade?`${t.cidade} - ${t.estado||"SP"}`:"São Paulo - SP",h=t.logradouro?`${t.logradouro}, ${t.numero||""} ${t.bairro?"- "+t.bairro:""}`:"Rua das Cordas, 120 - Centro",d=`https://wa.me/55${z}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Superior Esquerdo: Botão Pequeno Entrar estritamente conforme solicitado -->
        <div class="site-header-left">
          <button type="button" class="btn-site-login" id="btn-header-login" title="Acessar Sistema">
            <span class="site-login-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
            </span>
            <span>Entrar</span>
          </button>
        </div>

        <!-- Centro: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${le(t.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${s}</span>
        </div>

        <!-- Canto Direito: Apenas WhatsApp com logo e texto Entrar em contato -->
        <div class="site-header-right">
          <a href="${d}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp">
            ${ue}
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="site-hero">
      <div class="site-hero-bg-glow"></div>
      <div class="site-hero-content">
        <div class="site-hero-badge">
          <span>🎵 Escola de Música</span>
        </div>
        <h1 class="site-hero-title">
          Descubra o prazer de <span>tocar o instrumento</span> dos seus sonhos.
        </h1>
        <p class="site-hero-subtitle">
          Aulas práticas e acolhedoras de violão, piano, técnica vocal, bateria e musicalização. 
          Aprenda no seu ritmo, com atenção individual e professores dedicados.
        </p>
        <div class="site-hero-actions">
          <a href="${d}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${ue}
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Seção de Cursos & Instrumentos -->
    <section class="site-section" id="cursos">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">AULAS INDIVIDUAIS E EM GRUPO</span>
          <h2 class="section-title">Cursos de Música</h2>
          <p class="section-subtitle">Para todas as idades, desde o primeiro contato até o aperfeiçoamento.</p>
        </div>

        <div class="site-courses-grid">
          
          <!-- Curso 1: Violão -->
          <div class="site-course-card">
            <div class="course-icon-badge">🪕</div>
            <h3>Violão &amp; Guitarra</h3>
            <p>Acordes, ritmos, dedilhados e o repertório que você mais gosta de tocar.</p>
            <ul class="course-topics">
              <li>✓ Postura e passagens de acordes</li>
              <li>✓ Batidas populares, Pop, Rock e MPB</li>
              <li>✓ Leitura facilitada de cifras e tablaturas</li>
            </ul>
            <a href="${d}" target="_blank" class="course-link-cta">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>

          <!-- Curso 2: Piano & Teclado -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎹</div>
            <h3>Piano &amp; Teclado</h3>
            <p>Independência das mãos, harmonia e sensibilidade ao tocar suas canções preferidas.</p>
            <ul class="course-topics">
              <li>✓ Exercícios de digitação e postura</li>
              <li>✓ Noções harmônicas e leitura musical</li>
              <li>✓ Músicas clássicas e populares</li>
            </ul>
            <a href="${d}" target="_blank" class="course-link-cta">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>

          <!-- Curso 3: Canto & Técnica Vocal -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎤</div>
            <h3>Técnica Vocal &amp; Canto</h3>
            <p>Desenvolva afinação, respiração correta e segurança para cantar sem cansaço vocal.</p>
            <ul class="course-topics">
              <li>✓ Apoio respiratório e ressonância</li>
              <li>✓ Afinação e alcance vocal natural</li>
              <li>✓ Repertório de acordo com o seu estilo</li>
            </ul>
            <a href="${d}" target="_blank" class="course-link-cta">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>

          <!-- Curso 4: Bateria -->
          <div class="site-course-card">
            <div class="course-icon-badge">🥁</div>
            <h3>Bateria &amp; Ritmo</h3>
            <p>Coordenação motora, pulsação e dinamismo nos ritmos que movem a música.</p>
            <ul class="course-topics">
              <li>✓ Coordenação de braços e pernas</li>
              <li>✓ Levadas e viradas essenciais</li>
              <li>✓ Prática musical com instrumentos reais</li>
            </ul>
            <a href="${d}" target="_blank" class="course-link-cta">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>

          <!-- Curso 5: Musicalização Infantil -->
          <div class="site-course-card highlight">
            <div class="course-icon-badge">🎶</div>
            <h3>Musicalização Infantil</h3>
            <p>Desenvolvimento da criatividade, ritmo e audição para crianças de forma divertida e acolhedora.</p>
            <ul class="course-topics">
              <li>✓ Jogos e brincadeiras sonoras</li>
              <li>✓ Percepção rítmica e de timbres</li>
              <li>✓ Primeiro contato carinhoso com instrumentos</li>
            </ul>
            <a href="${d}" target="_blank" class="course-link-cta">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>

          <!-- Curso 6: Contrabaixo -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎸</div>
            <h3>Contrabaixo</h3>
            <p>A base de qualquer som. Domine o tempo, condução rítmica e as notas certas.</p>
            <ul class="course-topics">
              <li>✓ Técnica de mão direita e apoio</li>
              <li>✓ Linhas de baixo e harmonia</li>
              <li>✓ Conexão rítmica com a bateria</li>
            </ul>
            <a href="${d}" target="_blank" class="course-link-cta">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Seção Metodologia Aconchegante -->
    <section class="site-section bg-darker" id="metodologia">
      <div class="site-container">
        <div class="methodology-split">
          <div class="methodology-text">
            <span class="section-tag">NOSSA PROPOSTA</span>
            <h2 class="section-title">Um Espaço Acolhedor Para Você Aprender no Seu Ritmo</h2>
            <p class="section-desc">
              Aqui cada pessoa tem seu tempo e suas preferências. Valorizamos o ensino humano e próximo, sem a frieza de métodos padronizados.
            </p>

            <div class="methodology-features">
              <div class="feat-item">
                <div class="feat-icon">🎯</div>
                <div>
                  <h4>Atenção Individualizada</h4>
                  <p>Aulas focadas no que você deseja aprender e tocar, respeitando o seu tempo e objetivos.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🏠</div>
                <div>
                  <h4>Ambiente Agradável</h4>
                  <p>Espaço tranquilo, bem cuidado e com instrumentos prontos para o seu uso nas aulas.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🤝</div>
                <div>
                  <h4>Professores Atenciosos</h4>
                  <p>Didática paciente para quem nunca tocou um instrumento ou quer recomeçar a praticar.</p>
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
                <span class="preview-title">Acusticamente</span>
              </div>
              <div class="preview-body">
                <div class="preview-quote">
                  "A música é para todos. Nosso compromisso é fazer da sua aula o momento mais agradável da sua semana."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final WhatsApp -->
    <section class="site-cta-banner">
      <div class="site-container cta-banner-inner">
        <h2>Quer Conhecer Nosso Espaço?</h2>
        <p>Venha tomar um café conosco e saber mais sobre as aulas e horários disponíveis.</p>
        <a href="${d}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${ue}
          <span>Entrar em contato</span>
        </a>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${le(t.logotipoCustomizado,32)}
            <span>${s}</span>
          </div>
          <p>${o}</p>
          <div class="footer-address">
            <p>📍 ${h}</p>
            <p>🏙️ ${P}</p>
            <p>✉️ ${a}</p>
            <p>📞 ${l}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
            Fale conosco diretamente pelo WhatsApp para tirar dúvidas sobre turmas e valores.
          </p>
          <div>
            <a href="${d}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${ue}
              <span>Entrar em contato</span>
            </a>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Área Restrita</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 12px;">
            Acesso para a equipe e administração da escola.
          </p>
          <button type="button" class="btn-footer-admin" id="btn-footer-login">
            🔐 Entrar no Sistema
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="site-container footer-bottom-inner">
          <span>&copy; ${new Date().getFullYear()} ${o}. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  `,(S=e.querySelector("#btn-header-login"))==null||S.addEventListener("click",()=>{const u=Q.isAuthenticated();$(u?"home":"login")}),(M=e.querySelector("#btn-footer-login"))==null||M.addEventListener("click",()=>{const u=Q.isAuthenticated();$(u?"home":"login")}),(r=e.querySelector("#site-logo-link"))==null||r.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function Fe($){var d,S;const e=document.createElement("div"),t=Q.getCurrentUser(),o=C.getStudents(),s=C.getPlans(),l=C.getAppointments(),z=C.getTodayDateString(),a=l.filter(M=>M.data===z),P=o.filter(M=>M.status==="ativo").length,h=a.find(M=>M.status==="agendado");return e.innerHTML=`
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
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(M=>{const r=o.find(v=>v.id===M.alunoId),u=s.find(v=>v.id===M.planoId),x=M.status==="concluido",f=M.status==="agendado";let i='<span class="badge badge-warning">⏳ Agendado</span>';return x?i='<span class="badge badge-success">✓ Concluído</span>':M.status==="falta_justificada"?i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':M.status==="falta_injustificada"?i='<span class="badge badge-danger">✕ Falta Injustificada</span>':M.status==="cancelado"&&(i='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
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
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(u==null?void 0:u.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${i}
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
  `,(d=e.querySelector("#home-btn-new-appointment"))==null||d.addEventListener("click",()=>{$("agenda")}),(S=e.querySelector("#home-btn-view-all-agenda"))==null||S.addEventListener("click",()=>{$("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(M=>{M.addEventListener("click",r=>{const u=r.currentTarget.dataset.id;u&&(C.updateAppointment(u,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),B("Aula concluída com sucesso!","success"),$("home"))})}),e}function Ke($){const e=document.createElement("div"),t=Q.getCurrentUser();let o=new Date;function s(){var E,g,I,L;const a=C.getStudents();C.getPlans();const P=C.getAppointments(),h=o.getFullYear(),d=o.getMonth(),S=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],M=new Date(h,d,1).getDay(),r=new Date(h,d+1,0).getDate(),u=new Date(h,d,0).getDate(),x=new Date,f=x.getFullYear()===h&&x.getMonth()===d,i=[];for(let n=M;n>0;n--){const m=u-n+1;i.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${m}</span>
          </div>
        </div>
      `)}for(let n=1;n<=r;n++){const m=N=>N.toString().padStart(2,"0"),y=`${h}-${m(d+1)}-${m(n)}`,p=f&&x.getDate()===n,c=P.filter(N=>N.data===y),k=c.slice(0,3).map(N=>{const A=a.find(V=>V.id===N.alunoId),T=A?A.nome.split(" ")[0]:"Aula";let D="",R="";return N.status==="concluido"?(D="concluido",R="✓ "):N.status==="falta_justificada"?(D="falta-justificada",R="⚠️ "):N.status==="falta_injustificada"?(D="falta-injustificada",R="✕ "):N.tipoAula==="reposicao"&&(D="reposicao",R="🔄 "),`
            <div class="calendar-appointment-badge ${D}" 
                 data-app-id="${N.id}" 
                 title="${N.horaInicio} - ${(A==null?void 0:A.nome)||"Aluno"} (${N.status}${N.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${R}${N.horaInicio}</strong> ${T}
            </div>
          `}).join(""),O=c.length>3?c.length-3:0,_=O>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${O} mais</div>`:"";i.push(`
        <div class="calendar-day-cell ${p?"today":""}" data-date="${y}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${c.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${c.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${k}
            ${_}
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
            <h2 class="calendar-month-title">${S[d]} de ${h}</h2>
            
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
            ${te(t,"agenda","cadastrar")?`
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
    `,(E=e.querySelector("#agenda-btn-prev"))==null||E.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(g=e.querySelector("#agenda-btn-next"))==null||g.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(I=e.querySelector("#agenda-btn-today"))==null||I.addEventListener("click",()=>{o=new Date,s()}),(L=e.querySelector("#agenda-btn-new-app"))==null||L.addEventListener("click",()=>{z()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",m=>{const y=n.dataset.date;y&&l(y)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",m=>{m.stopPropagation();const y=n.dataset.appId,p=P.find(c=>c.id===y);p&&l(p.data)})})}function l(a){const P=C.getStudents(),h=C.getPlans(),d=C.getAppointments().filter(i=>i.data===a),[S,M,r]=a.split("-"),u=`${r}/${M}/${S}`,x=d.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${d.map(i=>{const v=P.find(c=>c.id===i.alunoId),b=h.find(c=>c.id===i.planoId),E=i.status==="concluido",g=i.status==="falta_justificada",I=i.status==="falta_injustificada",L=i.status==="cancelado",n=i.status==="agendado",m=i.tipoAula==="reposicao";let y="var(--color-coral)",p='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return E?(y="var(--status-success)",p='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):g?(y="#f59e0b",p='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):I?(y="var(--status-danger)",p='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):L&&(y="var(--border-subtle)",p='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${y};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${i.horaInicio} - ${i.horaFim}</strong>
                        ${p}
                        ${m?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
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
                      ${te(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${i.id}" title="Editar Detalhes">
                              ${q.edit}
                            </button>
                          `:""}
                      ${te(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${i.id}" title="Excluir">
                              ${q.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${te(t,"agenda","alterar")?`
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

                          ${g&&!i.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${i.id}" data-student-id="${i.alunoId}" data-title="${i.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
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
          ${te(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${q.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${x}
      </div>
    `;de({title:`Aulas do Dia: ${u}`,bodyHtml:f,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var i;(i=document.getElementById("btn-modal-new-appointment"))==null||i.addEventListener("click",()=>{be(),z({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id;E&&(C.marcarPresenca(E,(t==null?void 0:t.nome)||"Administrador"),B("Presença confirmada e aula concluída!","success"),s(),l(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id,g=b.currentTarget.dataset.name;if(!E)return;const I=prompt(`Informe o motivo da falta justificada de ${g} (Ex: Atestado médico, Viagem em família):`);if(I===null)return;const L=C.registrarFalta(E,!0,I,(t==null?void 0:t.nome)||"Administrador");B(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${L.saldoReposicoes}).`,"success"),s(),l(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id;E&&ge({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{C.registrarFalta(E,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),B("Falta injustificada registrada.","info"),s(),l(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget,g=E.dataset.id,I=E.dataset.studentId,L=E.dataset.title;be(),z({studentId:I,aulaOriginalId:g,tipoAula:"reposicao",titulo:L?`Reposição: ${L}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id,g=C.getAppointments().find(I=>I.id===E);g&&(be(),z({existingApp:g}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(v=>{v.addEventListener("click",b=>{const E=b.currentTarget.dataset.id,g=C.getAppointments().find(I=>I.id===E);g&&ge({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${g.titulo}</strong>"?`,onConfirm:()=>{C.deleteAppointment(g.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),s(),l(a)}})})})},50)}function z(a){const P=C.getStudents(),h=C.getPlans(),d=a==null?void 0:a.existingApp,S=!!d,M=(d==null?void 0:d.alunoId)||(a==null?void 0:a.studentId)||"",r=(d==null?void 0:d.data)||(a==null?void 0:a.defaultDate)||C.getTodayDateString(),u=((d==null?void 0:d.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",x=P.map(v=>`<option value="${v.id}" ${M===v.id?"selected":""}>${v.nome} (${v.instrumentoPrincipal||"Geral"}) - Saldo: ${v.saldoReposicoes||0} rep.</option>`).join(""),f=h.map(v=>`<option value="${v.id}" ${(d==null?void 0:d.planoId)===v.id?"selected":""}>${v.nome}</option>`).join(""),i=`
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
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Módulo 2" value="${(d==null?void 0:d.titulo)||(a==null?void 0:a.titulo)||""}" required />
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
            <input type="date" id="app-date" class="form-input" value="${r}" required />
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

        ${S?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${q.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;de({title:S?"Editar Aula / Compromisso":u?"🔄 Agendar Aula de Reposição":"Cadastrar Nova Aula",bodyHtml:i,confirmText:S?"Salvar Alterações":"Confirmar Agendamento",onConfirm:()=>{const v=document.getElementById("app-title").value.trim(),b=document.getElementById("app-student").value,E=document.getElementById("app-plan").value,g=document.getElementById("app-date").value,I=document.getElementById("app-time-start").value,L=document.getElementById("app-time-end").value,n=document.getElementById("app-status").value,m=document.getElementById("app-justificativa").value.trim(),y=document.getElementById("app-obs").value.trim(),p=document.querySelector('input[name="app-tipo-aula"]:checked'),c=(p==null?void 0:p.value)||"regular";if(!v||!b||!g||!I)return B("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const k=(t==null?void 0:t.nome)||"Administrador";return S&&d?(C.updateAppointment(d.id,{titulo:v,alunoId:b,planoId:E||void 0,data:g,horaInicio:I,horaFim:L,status:n,tipoAula:c,justificativaFalta:m||void 0,observacoes:y},k),B("Aula atualizada com sucesso!","success")):c==="reposicao"?(C.agendarReposicao({titulo:v,alunoId:b,planoId:E||void 0,data:g,horaInicio:I,horaFim:L,status:n,justificativaFalta:m||void 0,observacoes:y},a==null?void 0:a.aulaOriginalId,k),B("Aula de reposição agendada com sucesso (1 crédito abatido)!","success")):(C.addAppointment({titulo:v,alunoId:b,planoId:E||void 0,data:g,horaInicio:I,horaFim:L,status:n,tipoAula:c,justificativaFalta:m||void 0,observacoes:y},k),B("Aula agendada com sucesso!","success")),s(),!0}}),S&&d&&setTimeout(()=>{var v;(v=document.getElementById("btn-delete-app"))==null||v.addEventListener("click",()=>{ge({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${d.titulo}</strong>"?`,onConfirm:()=>{C.deleteAppointment(d.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),be(),s()}})})},50)}return s(),e}const Ze=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function Re($){const e=($||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function et($){if(!$)return"";const e=new Date($+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,`${o} anos`}function qe($){if(!$)return null;const e=new Date($+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,o}function tt($,e){const t=$.replace(/\D/g,"");if(!t)return"";const o=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function Oe($,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
  `;de({title:`Recibo de Pagamento: ${$.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function at($){const e=document.createElement("div"),t=Q.getCurrentUser();let o="";function s(){var u,x;const a=C.getStudents(),P=C.getPlans(),h=te(t,"alunos","cadastrar"),d=te(t,"alunos","alterar"),S=te(t,"alunos","excluir"),M=a.filter(f=>f.nome.toLowerCase().includes(o.toLowerCase())||f.email.toLowerCase().includes(o.toLowerCase())||f.telefone.includes(o)||f.instrumentoPrincipal&&f.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||f.responsavelNome&&f.responsavelNome.toLowerCase().includes(o.toLowerCase()));e.innerHTML=`
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
              ${M.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':M.map(f=>{const i=P.find(b=>b.id===f.planoId),v=f.status==="ativo";return`
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
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${f.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${q.profile}
                                </button>
                                ${d?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${f.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${S?`
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
    `;const r=e.querySelector("#student-search-input");r==null||r.addEventListener("input",f=>{o=f.target.value,s();const i=e.querySelector("#student-search-input");i&&(i.focus(),i.selectionStart=i.selectionEnd=i.value.length)}),(u=e.querySelector("#btn-clear-search"))==null||u.addEventListener("click",()=>{o="",s()}),(x=e.querySelector("#btn-new-student"))==null||x.addEventListener("click",()=>{z()}),e.querySelectorAll(".btn-view-student").forEach(f=>{f.addEventListener("click",i=>{const v=i.currentTarget.dataset.id,b=C.getStudents().find(E=>E.id===v);b&&l(b)})}),e.querySelectorAll(".btn-edit-student").forEach(f=>{f.addEventListener("click",i=>{const v=i.currentTarget.dataset.id,b=C.getStudents().find(E=>E.id===v);b&&z(b)})}),e.querySelectorAll(".btn-delete-student").forEach(f=>{f.addEventListener("click",i=>{const v=i.currentTarget.dataset.id,b=C.getStudents().find(E=>E.id===v);b&&ge({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${b.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{C.deleteStudent(b.id,(t==null?void 0:t.nome)||"Administrador"),B(`Aluno "${b.nome}" excluído.`,"info"),s()}})})})}function l(a){C.getPlans().find(n=>n.id===a.planoId);const h=C.getStudentAppointments(a.id),d=C.getStudentPayments(a.id),S=et(a.dataNascimento),M=tt(a.telefone,a.nome),r=a.saldoReposicoes||0,u=C.isStudentOverdue(a.id),x=a.status==="ativo",f=te(t,"financeiro","alterar"),i=h.length,v=h.filter(n=>n.status==="concluido").length,b=h.filter(n=>n.status==="falta_justificada").length,E=h.filter(n=>n.status==="falta_injustificada").length,g=d.filter(n=>n.status==="pago").reduce((n,m)=>n+m.valor,0),I=d.filter(n=>n.status!=="pago").reduce((n,m)=>n+m.valor,0),L=`
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
              ${u?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${d.length}</span>`}
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
                Aulas Recentes (${h.length})
              </span>
              ${r>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${r})
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
              <div style="font-size: 1.05rem; font-weight: 700; color: ${I>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${I.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${d.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${d.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${d.map(n=>{const m=n.status==="pago",y=n.status==="atrasado";let p="";return m?p='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':y?p='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':p='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
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
    `;de({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:L,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var c;const n=document.getElementById("btn-tab-pedagogico"),m=document.getElementById("btn-tab-financeiro"),y=document.getElementById("panel-tab-pedagogico"),p=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),m==null||m.classList.remove("active"),y&&(y.style.display="flex"),p&&(p.style.display="none")}),m==null||m.addEventListener("click",()=>{m.classList.add("active"),n==null||n.classList.remove("active"),p&&(p.style.display="flex"),y&&(y.style.display="none")}),(c=document.getElementById("btn-quick-schedule-reposicao"))==null||c.addEventListener("click",()=>{be(),$("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(k=>{k.addEventListener("click",O=>{const _=O.currentTarget.dataset.id,N=d.find(A=>A.id===_);N&&Oe(N,a)})}),document.querySelectorAll(".btn-pay-now").forEach(k=>{k.addEventListener("click",O=>{const _=O.currentTarget.dataset.id,N=d.find(D=>D.id===_);if(!N)return;const A=C.getTodayDateString(),T=`
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
                <input type="date" id="baixa-data" class="form-input" value="${A}" required />
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
          `;de({title:`Dar Baixa: ${N.descricao}`,bodyHtml:T,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const D=document.getElementById("baixa-data").value,R=document.getElementById("baixa-forma").value,V=document.getElementById("baixa-obs").value;if(!D)return B("Informe a data de recebimento.","error"),!1;const X=(t==null?void 0:t.nome)||"Administrador";C.darBaixaPayment(N.id,D,R,X,V),B(`Baixa de R$ ${N.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const ee=C.getStudents().find(G=>G.id===a.id)||a;return l(ee),setTimeout(()=>{var G;(G=document.getElementById("btn-tab-financeiro"))==null||G.click()},50),!0}})})})},50)}function z(a){const P=C.getPlans(),h=!!a,d=a?C.getStudentPayments(a.id):[],S=P.map(u=>`<option value="${u.id}" ${(a==null?void 0:a.planoId)===u.id?"selected":""}>${u.nome}</option>`).join(""),M=Ze.map(u=>`<option value="${u}" ${(a==null?void 0:a.instrumentoPrincipal)===u?"selected":""}>${u}</option>`).join(""),r=`
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
              ${d.length>0?`<span style="font-size: 0.72rem; color: var(--text-muted);">${d.length} lançamento(s)</span>`:""}
            </div>

            <div style="max-height: 155px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${a?d.length===0?'<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado para este aluno.</div>':`
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
                        ${d.map(u=>{const x=u.dataVencimento.split("-").reverse().join("/"),f=u.dataPagamento?u.dataPagamento.split("-").reverse().join("/"):"-";let i="";return u.status==="pago"?i='<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>':u.status==="atrasado"?i='<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>':i='<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>',`
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${u.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${x}</td>
                              <td class="col-hide-sm" style="padding: 6px 10px; color: ${u.dataPagamento?"var(--text-white)":"var(--text-muted)"};">${f}</td>
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
    `;de({title:h?`Editar Aluno: ${a.nome}`:"Cadastrar Novo Aluno",bodyHtml:r,modalClass:"modal-lg",confirmText:h?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{var X,ee;const u=document.getElementById("student-nome").value.trim(),x=document.getElementById("student-nascimento").value,f=document.getElementById("student-email").value.trim(),i=document.getElementById("student-telefone").value.trim(),v=document.getElementById("student-resp-nome").value.trim(),b=document.getElementById("student-resp-parentesco").value,E=document.getElementById("student-resp-tel").value.trim(),g=document.getElementById("student-instrumento").value,I=document.getElementById("student-nivel").value,L=document.getElementById("student-plano").value,n=document.getElementById("student-status").value,m=document.getElementById("student-modulo").value.trim(),y=document.getElementById("student-saldo-reposicoes").value,p=Math.max(0,parseInt(y,10)||0),c=(X=document.getElementById("student-valor-mensalidade"))==null?void 0:X.value,k=Math.max(0,parseFloat(c)||280),O=(ee=document.getElementById("student-dia-vencimento"))==null?void 0:ee.value,_=Math.min(31,Math.max(1,parseInt(O,10)||10)),N=document.getElementById("student-obs").value.trim(),A=[];u||A.push({label:"Nome Completo do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"});const T=qe(x);T!==null&&T<18&&(v||A.push({label:`Nome do Responsável (Aluno possui ${T} anos - Menor de Idade)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),b||A.push({label:`Parentesco do Responsável (Aluno possui ${T} anos - Menor de Idade)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),E||A.push({label:`Telefone / WhatsApp do Responsável (Aluno possui ${T} anos - Menor de Idade)`,fieldId:"student-resp-tel",tabId:"tab-resp"})),n||A.push({label:"Status da Matrícula (Ativo ou Inativo)",fieldId:"student-status",tabId:"tab-musica"}),(!c||isNaN(parseFloat(c))||parseFloat(c)<0)&&A.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const R=parseInt(O,10);if((!O||isNaN(R)||R<1||R>31)&&A.push({label:"Dia de Vencimento Padrão (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),A.length>0){const G=Z=>{const W=document.querySelectorAll(".btn-form-tab"),se=document.querySelectorAll(".form-tab-panel");W.forEach(K=>{K.dataset.tab===Z?K.classList.add("active"):K.classList.remove("active")}),se.forEach(K=>{K.style.display=K.id===`form-panel-${Z}`?"flex":"none"})},Y=document.createElement("div");Y.id="student-validation-alert",Y.style.cssText=`
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `,Y.innerHTML=`
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
                  ${A.map(Z=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${Z.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(Y);const J=Y.querySelector("#btn-validation-ok");return J==null||J.focus(),J==null||J.addEventListener("click",()=>{Y.remove();const Z=A[0];G(Z.tabId),setTimeout(()=>{const W=document.getElementById(Z.fieldId);W&&(W.focus(),W.scrollIntoView({behavior:"smooth",block:"center"}),W.style.outline="2px solid var(--color-coral)",W.style.borderColor="var(--color-coral)",setTimeout(()=>{W.style.outline="",W.style.borderColor=""},3500))},100)}),!1}const V=(t==null?void 0:t.nome)||"Administrador";return h&&a?(C.updateStudent(a.id,{nome:u,dataNascimento:x,email:f,telefone:i,responsavelNome:v,responsavelParentesco:b,responsavelTelefone:E,instrumentoPrincipal:g,nivelMusical:I,planoId:L,status:n,moduloAtual:m,saldoReposicoes:p,valorMensalidade:k,diaVencimento:_,observacoes:N},V),B("Dados do aluno atualizados com sucesso!","success")):(C.addStudent({nome:u,dataNascimento:x,email:f,telefone:i,responsavelNome:v,responsavelParentesco:b,responsavelTelefone:E,instrumentoPrincipal:g,nivelMusical:I,planoId:L,status:n,moduloAtual:m,saldoReposicoes:p,valorMensalidade:k,diaVencimento:_,observacoes:N},V),B("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const u=document.querySelectorAll(".btn-form-tab"),x=document.querySelectorAll(".form-tab-panel");u.forEach(E=>{E.addEventListener("click",g=>{const I=g.currentTarget.dataset.tab;u.forEach(L=>{L.classList.remove("active")}),g.currentTarget.classList.add("active"),x.forEach(L=>{L.style.display=L.id===`form-panel-${I}`?"flex":"none"})})});const f=document.getElementById("student-nascimento"),i=document.getElementById("student-resp-alert"),v=document.querySelectorAll(".resp-req-star"),b=()=>{const E=f==null?void 0:f.value,g=qe(E),I=g!==null&&g<18;i&&(i.style.display=I?"block":"none",I&&(i.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${g} anos).</strong> O preenchimento do responsável é obrigatório.`)),v.forEach(L=>{L.style.display=I?"inline":"none"})};f==null||f.addEventListener("input",b),f==null||f.addEventListener("change",b),b()},50)}return s(),e}const me=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],je=me.reduce(($,e)=>$+e.items.length,0);function ot($){let e=0;return me.forEach(t=>{const o=$[t.key];o&&t.items.forEach(s=>{o[s.key]&&e++})}),e}function st($){var z;const e=document.createElement("div"),t=Q.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(z=e.querySelector("#btn-unauth-home"))==null||z.addEventListener("click",()=>$("home")),e;let o="";function s(){var S,M;const a=C.getUsers(),P=o.toLowerCase(),h=a.filter(r=>r.nome.toLowerCase().includes(P)||r.login.toLowerCase().includes(P)||r.papel.toLowerCase().includes(P));e.innerHTML=`
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
              ${h.map(r=>{const u=r.papel==="admin"?"Administrador":r.papel==="professor"?"Professor":"Atendente",x=Ce(r),f=ot(x);return`
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
                          ${u}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${r.papel==="admin"?"badge-coral":f>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${r.papel==="admin"?`Acesso Total (${je})`:`${f} de ${je} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${r.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${r.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${q.edit}
                          </button>
                          ${r.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${q.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${r.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
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
    `,(S=e.querySelector("#btn-new-user"))==null||S.addEventListener("click",()=>{l()});const d=e.querySelector("#user-search-input");d&&d.addEventListener("input",r=>{o=r.target.value,s();const u=e.querySelector("#user-search-input");u&&(u.focus(),u.setSelectionRange(u.value.length,u.value.length))}),(M=e.querySelector("#btn-clear-search"))==null||M.addEventListener("click",()=>{o="",s()}),e.querySelectorAll(".btn-edit-user").forEach(r=>{r.addEventListener("click",u=>{const x=u.currentTarget.dataset.id,f=C.getUsers().find(i=>i.id===x);f&&l(f)})}),e.querySelectorAll(".btn-delete-user").forEach(r=>{r.addEventListener("click",u=>{const x=u.currentTarget.dataset.id,f=C.getUsers().find(i=>i.id===x);f&&ge({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${f.nome}</strong>" (login: <code>${f.login}</code>)?`,onConfirm:()=>{try{C.deleteUser(f.id,(t==null?void 0:t.nome)||"Administrador"),B(`Usuário "${f.nome}" excluído.`,"info"),s()}catch(i){B(i.message||"Erro ao excluir usuário.","error")}}})})})}function l(a){var i,v,b,E;const P=!!a,h=a?a.papel:"professor",d=h==="admin",S=Ce(a),M=`
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
            ${me.map(g=>{const I=S[g.key]||{},L=g.items.filter(n=>I[n.key]).length;return`
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
                    ${g.items.map(n=>{const m=!!I[n.key];return`
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
    `;de({title:P?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:M,modalClass:"modal-lg",confirmText:P?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var k,O,_,N,A,T,D,R,V,X,ee,G,Y,J,Z,W,se,K,j,ne,ae,fe;const g=document.getElementById("user-nome").value.trim(),I=document.getElementById("user-login").value.trim(),L=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),m=n?n.value:"professor";if(!g||!I||!L)return B("Preencha Nome, Login e Senha.","error"),!1;if(C.getUsers().find(F=>F.login===I&&F.id!==(a==null?void 0:a.id)))return B(`O login "${I}" já está em uso por outro usuário.`,"error"),!1;let p;m==="admin"?p=JSON.parse(JSON.stringify(ve.admin)):p={alunos:{acesso:((k=document.getElementById("perm-alunos-acesso"))==null?void 0:k.checked)??!1,cadastrar:((O=document.getElementById("perm-alunos-cadastrar"))==null?void 0:O.checked)??!1,alterar:((_=document.getElementById("perm-alunos-alterar"))==null?void 0:_.checked)??!1,excluir:((N=document.getElementById("perm-alunos-excluir"))==null?void 0:N.checked)??!1},agenda:{acesso:((A=document.getElementById("perm-agenda-acesso"))==null?void 0:A.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((R=document.getElementById("perm-agenda-excluir"))==null?void 0:R.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((X=document.getElementById("perm-planos-cadastrar"))==null?void 0:X.checked)??!1,alterar:((ee=document.getElementById("perm-planos-alterar"))==null?void 0:ee.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((Y=document.getElementById("perm-financeiro-acesso"))==null?void 0:Y.checked)??!1,cadastrar:((J=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:J.checked)??!1,alterar:((Z=document.getElementById("perm-financeiro-alterar"))==null?void 0:Z.checked)??!1,excluir:((W=document.getElementById("perm-financeiro-excluir"))==null?void 0:W.checked)??!1},relatorios:{acesso:((se=document.getElementById("perm-relatorios-acesso"))==null?void 0:se.checked)??!1,gerar:((K=document.getElementById("perm-relatorios-gerar"))==null?void 0:K.checked)??!1},home:{acesso:((j=document.getElementById("perm-home-acesso"))==null?void 0:j.checked)??!1},auditoria:{acesso:((ne=document.getElementById("perm-auditoria-acesso"))==null?void 0:ne.checked)??!1},configuracoes:{acesso:((ae=document.getElementById("perm-configuracoes-acesso"))==null?void 0:ae.checked)??!1,alterar:((fe=document.getElementById("perm-configuracoes-alterar"))==null?void 0:fe.checked)??!1}};const c=(t==null?void 0:t.nome)||"Administrador";return P&&a?(C.updateUser(a.id,{nome:g,login:I,senha:L,papel:a.isSistema?"admin":m,permissoes:a.isSistema?ve.admin:p},c),B("Usuário e permissões atualizados com sucesso!","success")):(C.addUser({nome:g,login:I,senha:L,papel:m,permissoes:p},c),B("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const r=document.getElementById("user-papel"),u=document.getElementById("user-permissions-section"),x=(g,I,L)=>{const n=document.getElementById(`row-perm-${g}-${I}`),m=document.getElementById(`badge-perm-${g}-${I}`);n&&m&&(L?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",m.className="badge badge-success",m.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",m.className="badge badge-coral",m.textContent="Bloqueado")),f(g)},f=g=>{const I=document.getElementById(`group-counter-${g}`),L=me.find(n=>n.key===g);if(I&&L){let n=0;L.items.forEach(m=>{const y=document.getElementById(`perm-${g}-${m.key}`);y&&y.checked&&n++}),I.textContent=`${n}/${L.items.length} liberadas`}};r==null||r.addEventListener("change",()=>{const g=r.value;if(g==="admin")u.style.display="none";else if(u.style.display="block",!P){const I=ve[g]||ve.professor;me.forEach(L=>{L.items.forEach(n=>{var y;const m=document.getElementById(`perm-${L.key}-${n.key}`);if(m){const p=((y=I[L.key])==null?void 0:y[n.key])??!1;m.checked=p,x(L.key,n.key,p)}})})}}),me.forEach(g=>{const I=document.getElementById(`header-group-${g.key}`),L=document.getElementById(`group-body-${g.key}`),n=document.getElementById(`arrow-perm-${g.key}`);I==null||I.addEventListener("click",m=>{if(!m.target.closest(".btn-group-toggle")&&L&&n){const y=L.style.display==="flex";L.style.display=y?"none":"flex",n.style.transform=y?"rotate(0deg)":"rotate(180deg)"}}),g.items.forEach(m=>{const y=document.getElementById(`perm-${g.key}-${m.key}`);y==null||y.addEventListener("change",()=>{if(x(g.key,m.key,y.checked),y.checked&&m.key!=="acesso"){const p=document.getElementById(`perm-${g.key}-acesso`);p&&!p.checked&&(p.checked=!0,x(g.key,"acesso",!0))}!y.checked&&m.key==="acesso"&&g.items.forEach(p=>{if(p.key!=="acesso"){const c=document.getElementById(`perm-${g.key}-${p.key}`);c&&c.checked&&(c.checked=!1,x(g.key,p.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${g.key}"]`).forEach(m=>{m.addEventListener("click",y=>{y.stopPropagation();const p=g.items.map(k=>document.getElementById(`perm-${g.key}-${k.key}`)).filter(Boolean),c=p.every(k=>k.checked);p.forEach(k=>{k.checked=!c,x(g.key,k.dataset.action,!c)})})})}),(i=document.getElementById("btn-perm-expand"))==null||i.addEventListener("click",()=>{me.forEach(g=>{const I=document.getElementById(`group-body-${g.key}`),L=document.getElementById(`arrow-perm-${g.key}`);I&&L&&(I.style.display="flex",L.style.transform="rotate(180deg)")})}),(v=document.getElementById("btn-perm-collapse"))==null||v.addEventListener("click",()=>{me.forEach(g=>{const I=document.getElementById(`group-body-${g.key}`),L=document.getElementById(`arrow-perm-${g.key}`);I&&L&&(I.style.display="none",L.style.transform="rotate(0deg)")})}),(b=document.getElementById("btn-perm-all"))==null||b.addEventListener("click",()=>{me.forEach(g=>{g.items.forEach(I=>{const L=document.getElementById(`perm-${g.key}-${I.key}`);L&&(L.checked=!0,x(g.key,I.key,!0))})})}),(E=document.getElementById("btn-perm-none"))==null||E.addEventListener("click",()=>{me.forEach(g=>{g.items.forEach(I=>{const L=document.getElementById(`perm-${g.key}-${I.key}`);L&&(L.checked=!1,x(g.key,I.key,!1))})})})}return s(),e}function nt($){const e=document.createElement("div"),t=Q.getCurrentUser();let o="";const s=te(t,"planos","cadastrar"),l=te(t,"planos","alterar"),z=te(t,"planos","excluir");function a(){var M,r;const d=C.getPlans().filter(u=>{const x=o.toLowerCase();return u.nome.toLowerCase().includes(x)||u.descricao&&u.descricao.toLowerCase().includes(x)});e.innerHTML=`
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
          <h3 class="panel-card-title">Planos Cadastrados (${d.length})</h3>
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
              ${d.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${o?"Nenhum plano encontrado para o termo pesquisado.":"Nenhum plano de ensino cadastrado."}
                      </td>
                    </tr>
                  `:d.map(u=>{const x=u.criadoEm?new Date(u.criadoEm).toLocaleDateString("pt-BR"):"-";return`
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
                                ${l?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${u.id}" title="Editar Plano e Módulos">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${z?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${u.id}" title="Excluir Plano">
                                        ${q.trash}
                                      </button>
                                    `:""}
                                ${!l&&!z?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(M=e.querySelector("#btn-new-plan"))==null||M.addEventListener("click",()=>{P()});const S=e.querySelector("#plan-search-input");S&&S.addEventListener("input",u=>{o=u.target.value,a();const x=e.querySelector("#plan-search-input");x&&(x.focus(),x.setSelectionRange(x.value.length,x.value.length))}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{o="",a()}),e.querySelectorAll(".btn-edit-plan").forEach(u=>{u.addEventListener("click",x=>{const f=x.currentTarget.dataset.id,i=C.getPlans().find(v=>v.id===f);i&&P(i)})}),e.querySelectorAll(".btn-delete-plan").forEach(u=>{u.addEventListener("click",x=>{const f=x.currentTarget.dataset.id,i=C.getPlans().find(v=>v.id===f);i&&ge({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${i.nome}</strong>" e todos os seus <strong>${i.modulos.length} módulos</strong> vinculados?`,onConfirm:()=>{C.deletePlan(i.id,(t==null?void 0:t.nome)||"Administrador"),B(`Plano "${i.nome}" excluído.`,"info"),a()}})})})}function P(h){const d=!!h;let S=h?JSON.parse(JSON.stringify(h.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function M(){return S.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `:S.map((f,i)=>`
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
                value="${f.titulo}" 
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
                  ${q.trash}
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
    `;de({title:d?`Editar Plano: ${h.nome}`:"Cadastrar Plano & Trilha de Ensino",bodyHtml:r,modalClass:"modal-lg",confirmText:d?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const f=document.getElementById("plan-nome").value.trim(),i=document.getElementById("plan-desc").value.trim(),v=S.map((E,g)=>({id:E.id||"mod_"+(g+1)+"_"+Date.now(),ordem:g+1,titulo:E.titulo.trim()})).filter(E=>E.titulo.length>0);if(!f)return B("Informe o nome do plano de ensino.","error"),!1;if(v.length===0)return B("Adicione pelo menos um módulo à trilha pedagógica.","error"),!1;const b=(t==null?void 0:t.nome)||"Administrador";return d&&h?(C.updatePlan(h.id,{nome:f,descricao:i,modulos:v},b),B("Plano e módulos atualizados com sucesso!","success")):(C.addPlan({nome:f,descricao:i,modulos:v},b),B("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function u(){const f=document.getElementById("modules-list-container"),i=document.getElementById("modules-counter-badge");f&&(i&&(i.textContent=`${S.length} ${S.length===1?"módulo":"módulos"}`),f.innerHTML=M(),f.querySelectorAll(".module-title-input").forEach(v=>{v.addEventListener("input",b=>{const E=parseInt(b.target.getAttribute("data-idx")||"0",10);S[E]&&(S[E].titulo=b.target.value)})}),f.querySelectorAll(".btn-move-up:not([disabled])").forEach(v=>{v.addEventListener("click",b=>{const E=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);if(E>0){const g=S[E];S[E]=S[E-1],S[E-1]=g,S.forEach((I,L)=>I.ordem=L+1),u()}})}),f.querySelectorAll(".btn-move-down:not([disabled])").forEach(v=>{v.addEventListener("click",b=>{const E=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);if(E<S.length-1){const g=S[E];S[E]=S[E+1],S[E+1]=g,S.forEach((I,L)=>I.ordem=L+1),u()}})}),f.querySelectorAll(".btn-remove-module").forEach(v=>{v.addEventListener("click",b=>{const E=parseInt(b.currentTarget.getAttribute("data-idx")||"0",10);S.splice(E,1),S.forEach((g,I)=>g.ordem=I+1),u()})}))}function x(){const f=document.getElementById("quick-add-module-input");if(!f)return;const i=f.value.trim();if(!i){B("Digite o nome do módulo para adicionar.","info"),f.focus();return}const v=S.length+1;S.push({id:"mod_"+v+"_"+Date.now(),ordem:v,titulo:i}),f.value="",u(),f.focus();const b=document.getElementById("modules-list-container");b&&(b.scrollTop=b.scrollHeight)}setTimeout(()=>{const f=document.getElementById("btn-quick-add-module"),i=document.getElementById("quick-add-module-input");f==null||f.addEventListener("click",()=>{x()}),i==null||i.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),x())}),u()},50)}return a(),e}function rt($){const e=document.createElement("div"),t=Q.getCurrentUser();let o="",s="todos",l=new Date;const z=te(t,"financeiro","cadastrar"),a=te(t,"financeiro","alterar"),P=te(t,"financeiro","excluir");function h(){var m,y,p,c,k,O,_,N;const r=C.getPayments(),u=C.getStudents(),x=new Date,f=l!==null&&x.getMonth()===l.getMonth()&&x.getFullYear()===l.getFullYear(),i=l?`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`:"",v=r.filter(A=>A.status==="pago").reduce((A,T)=>A+T.valor,0),b=r.filter(A=>A.status==="pendente").reduce((A,T)=>A+T.valor,0),E=r.filter(A=>A.status==="atrasado").reduce((A,T)=>A+T.valor,0),g=u.filter(A=>A.status==="ativo"&&C.isStudentOverdue(A.id)),I=r.filter(A=>{const T=u.find(G=>G.id===A.alunoId),D=T?T.nome.toLowerCase():"",R=A.descricao.toLowerCase(),V=D.includes(o.toLowerCase())||R.includes(o.toLowerCase())||A.mesReferencia&&A.mesReferencia.includes(o),X=s==="todos"||A.status===s,ee=!i||A.mesReferencia===i||A.dataVencimento.startsWith(i);return V&&X&&ee});e.innerHTML=`
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
          ${z?`
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
            ${r.filter(A=>A.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${b.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(A=>A.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${E.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(A=>A.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${g.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${u.filter(A=>A.status==="ativo").length} ativos</span>
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${I.length})</h3>
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
              ${I.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':I.map(A=>{const T=u.find(X=>X.id===A.alunoId),D=A.status==="pago",R=A.status==="atrasado";let V="";return D?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':R?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                                ${A.descricao}${A.mesReferencia?` / ${A.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${R?"#f87171":"var(--text-white)"}; font-weight: ${R?"700":"normal"};">
                                ${A.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${A.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!D&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${A.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${q.check}
                                      </button>
                                    `:""}

                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${A.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${A.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${q.edit}
                                      </button>
                                    `:""}

                                ${P?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${A.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(m=e.querySelector("#fin-btn-prev-month"))==null||m.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()-1,1),h()}),(y=e.querySelector("#fin-btn-next-month"))==null||y.addEventListener("click",()=>{l||(l=new Date),l=new Date(l.getFullYear(),l.getMonth()+1,1),h()}),(p=e.querySelector("#fin-btn-current-month"))==null||p.addEventListener("click",()=>{l=new Date,h()}),(c=e.querySelector("#fin-btn-all-months"))==null||c.addEventListener("click",()=>{l=null,h()});const L=e.querySelector("#fin-search-input");L==null||L.addEventListener("input",A=>{o=A.target.value,h();const T=e.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(k=e.querySelector("#btn-clear-fin-search"))==null||k.addEventListener("click",()=>{o="",h()});const n=e.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,h()}),(O=e.querySelector("#btn-limpar-status"))==null||O.addEventListener("click",()=>{s="todos",h()}),(_=e.querySelector("#btn-gerar-lote"))==null||_.addEventListener("click",()=>{S()}),(N=e.querySelector("#btn-novo-lancamento"))==null||N.addEventListener("click",()=>{M()}),e.querySelectorAll(".btn-action-baixa").forEach(A=>{A.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);R&&d(R)})}),e.querySelectorAll(".btn-action-recibo").forEach(A=>{A.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);if(R){const V=u.find(X=>X.id===R.alunoId);V&&Oe(R,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(A=>{A.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);R&&M(R)})}),e.querySelectorAll(".btn-action-delete").forEach(A=>{A.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);R&&ge({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${R.descricao}</strong>" no valor de <strong>R$ ${R.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{C.deletePayment(R.id,(t==null?void 0:t.nome)||"Administrador"),B("Lançamento excluído com sucesso!","info"),h()}})})})}function d(r){const u=C.getStudents().find(i=>i.id===r.alunoId),x=C.getTodayDateString(),f=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${r.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${r.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(u==null?void 0:u.nome)||"N/A"}</strong> &bull; Vencimento: ${r.dataVencimento.split("-").reverse().join("/")}
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
    `;de({title:"Confirmar Baixa de Pagamento",bodyHtml:f,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const i=document.getElementById("modal-baixa-data").value,v=document.getElementById("modal-baixa-forma").value,b=document.getElementById("modal-baixa-obs").value;return i?(C.darBaixaPayment(r.id,i,v,(t==null?void 0:t.nome)||"Administrador",b),B(`Baixa efetuada com sucesso! R$ ${r.valor.toFixed(2)} recebido.`,"success"),h(),!0):(B("Informe a data de recebimento.","error"),!1)}})}function S(){const r=new Date,u=r.getFullYear(),x=r.getMonth()+1,f=`
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
    `;de({title:"Gerar Mensalidades em Lote",bodyHtml:f,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const i=parseInt(document.getElementById("lote-ano").value,10),v=parseInt(document.getElementById("lote-mes").value,10);if(!i||!v)return B("Selecione ano e mês válidos.","error"),!1;const b=C.gerarMensalidadesMes(i,v,(t==null?void 0:t.nome)||"Administrador");return b.criadas===0&&b.puladas>0?B(`Todas as ${b.puladas} mensalidades deste mês já estavam criadas!`,"info"):B(`Sucesso: ${b.criadas} mensalidade(s) gerada(s)! (${b.puladas} já existentes puladas)`,"success"),h(),!0}})}function M(r){const u=!!r,x=C.getStudents(),f=C.getTodayDateString(),i=x.map(b=>`<option value="${b.id}" ${(r==null?void 0:r.alunoId)===b.id?"selected":""}>${b.nome} (${b.instrumentoPrincipal||"Geral"})</option>`).join(""),v=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${u?"disabled":""}>
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
            <input type="date" id="pay-vencimento" class="form-input" value="${(r==null?void 0:r.dataVencimento)||f}" required />
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
    `;de({title:u?`Editar Lançamento: ${r.descricao}`:"Novo Lançamento Financeiro",bodyHtml:v,modalClass:"modal-md",confirmText:u?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const b=u&&r?r.alunoId:document.getElementById("pay-aluno").value,E=document.getElementById("pay-desc").value.trim(),g=document.getElementById("pay-mes").value.trim()||void 0,I=document.getElementById("pay-valor").value,L=parseFloat(I)||0,n=document.getElementById("pay-vencimento").value,m=document.getElementById("pay-status").value,y=document.getElementById("pay-forma").value||void 0,p=document.getElementById("pay-obs").value.trim()||void 0;if(!b)return B("Selecione um aluno.","error"),!1;if(!E)return B("Informe a descrição do lançamento.","error"),!1;if(L<=0)return B("Informe um valor válido maior que zero.","error"),!1;if(!n)return B("Informe a data de vencimento.","error"),!1;const c=(t==null?void 0:t.nome)||"Administrador";return u&&r?(C.updatePayment(r.id,{descricao:E,mesReferencia:g,valor:L,dataVencimento:n,status:m,formaPagamento:y,dataPagamento:m==="pago"?r.dataPagamento||f:void 0,observacoes:p},c),B("Lançamento atualizado com sucesso!","success")):(C.addPayment({alunoId:b,descricao:E,mesReferencia:g,valor:L,dataVencimento:n,status:m,formaPagamento:y,dataPagamento:m==="pago"?f:void 0,observacoes:p},c),B("Novo lançamento cadastrado com sucesso!","success")),h(),!0}}),u||setTimeout(()=>{const b=document.getElementById("pay-aluno");b==null||b.addEventListener("change",()=>{const E=x.find(g=>g.id===b.value);if(E){const g=document.getElementById("pay-valor");g&&typeof E.valorMensalidade=="number"&&(g.value=E.valorMensalidade.toString())}})},50)}return h(),e}function it($){const e=document.createElement("div"),t=Q.getCurrentUser(),o=te(t,"relatorios","gerar");let s="alunos",l="todos",z="todos",a="todos",P="todos",h="todos",d="nome_asc",S="",M="",r="",u="",x="todos",f="todos",i="todos",v="vencimento_asc";function b(){var Y,J,Z,W,se,K,j,ne,ae,fe,F,oe,pe,he,ye,xe,we,Pe,Te;const n=C.getSettings(),m=C.getStudents(),y=C.getPlans(),p=C.getPayments(),c=Array.from(new Set(m.map(w=>w.instrumentoPrincipal).filter(Boolean))).sort();let k=m.filter(w=>{if(l!=="todos"&&w.status!==l||z!=="todos"&&w.instrumentoPrincipal!==z||a!=="todos"&&w.nivelMusical!==a||P!=="todos"&&w.planoId!==P)return!1;if(h!=="todos"){const H=C.isStudentOverdue(w.id);if(h==="em_dia"&&H||h==="atrasado"&&!H)return!1}return!0});k.sort((w,H)=>d==="nome_asc"?w.nome.localeCompare(H.nome):d==="nome_desc"?H.nome.localeCompare(w.nome):d==="data_desc"?(H.criadoEm||"").localeCompare(w.criadoEm||""):d==="data_asc"?(w.criadoEm||"").localeCompare(H.criadoEm||""):0);const O=k.length,_=k.filter(w=>w.status==="ativo").length,N=k.filter(w=>w.status==="inativo").length,A=k.filter(w=>C.isStudentOverdue(w.id)).length,T=new Date().toISOString().slice(0,10);let D=p.filter(w=>{if(S&&w.dataVencimento<S||M&&w.dataVencimento>M)return!1;const H=w.mesReferencia||w.dataVencimento.slice(0,7);if(r&&H<r||u&&H>u||f!=="todos"&&w.alunoId!==f||i!=="todos"&&w.formaPagamento!==i)return!1;const re=w.status!=="pago"&&w.dataVencimento<T;return!(x==="pago"&&w.status!=="pago"||x==="pendente"&&(w.status==="pago"||re)||x==="atrasado"&&!re)});const R=new Map(m.map(w=>[w.id,w.nome]));D.sort((w,H)=>{if(v==="vencimento_asc")return w.dataVencimento.localeCompare(H.dataVencimento);if(v==="vencimento_desc")return H.dataVencimento.localeCompare(w.dataVencimento);if(v==="valor_desc")return H.valor-w.valor;if(v==="aluno_asc"){const re=R.get(w.alunoId)||"",Ie=R.get(H.alunoId)||"";return re.localeCompare(Ie)}return 0});const V=D.length,X=D.reduce((w,H)=>w+H.valor,0),ee=D.filter(w=>w.status==="pago").reduce((w,H)=>w+H.valor,0),G=D.filter(w=>w.status!=="pago").reduce((w,H)=>w+H.valor,0);e.innerHTML=`
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
                <option value="todos" ${z==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${c.map(w=>`<option value="${w}" ${z===w?"selected":""}>${w}</option>`).join("")}
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
                <option value="nome_asc" ${d==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${d==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${d==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${d==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${A}</div>
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
                ${k.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':k.map(w=>{const H=y.find(_e=>_e.id===w.planoId),re=w.status==="ativo",Ie=C.isStudentOverdue(w.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${w.nome}</td>
                              <td class="col-hide-md">${w.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${w.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${re?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${re?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${Ie?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
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
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${M}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${r}" />
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
                ${D.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':D.map(w=>{const H=w.status==="pago",re=!H&&w.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${R.get(w.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${w.descricao}${w.mesReferencia?` / ${w.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${w.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${w.valor.toFixed(2)}</td>
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
    `,(Y=e.querySelector("#btn-tab-rel-alunos"))==null||Y.addEventListener("click",()=>{s="alunos",b()}),(J=e.querySelector("#btn-tab-rel-financeiro"))==null||J.addEventListener("click",()=>{s="financeiro",b()}),(Z=e.querySelector("#filtro-aluno-status"))==null||Z.addEventListener("change",w=>{l=w.target.value,b()}),(W=e.querySelector("#filtro-aluno-instrumento"))==null||W.addEventListener("change",w=>{z=w.target.value,b()}),(se=e.querySelector("#filtro-aluno-nivel"))==null||se.addEventListener("change",w=>{a=w.target.value,b()}),(K=e.querySelector("#filtro-aluno-plano"))==null||K.addEventListener("change",w=>{P=w.target.value,b()}),(j=e.querySelector("#filtro-aluno-financeiro"))==null||j.addEventListener("change",w=>{h=w.target.value,b()}),(ne=e.querySelector("#filtro-aluno-ordem"))==null||ne.addEventListener("change",w=>{d=w.target.value,b()}),(ae=e.querySelector("#btn-limpar-filtros-alunos"))==null||ae.addEventListener("click",()=>{l="todos",z="todos",a="todos",P="todos",h="todos",d="nome_asc",b()}),(fe=e.querySelector("#filtro-fin-dataini"))==null||fe.addEventListener("change",w=>{S=w.target.value,b()}),(F=e.querySelector("#filtro-fin-datafim"))==null||F.addEventListener("change",w=>{M=w.target.value,b()}),(oe=e.querySelector("#filtro-fin-mesref-ini"))==null||oe.addEventListener("change",w=>{r=w.target.value,b()}),(pe=e.querySelector("#filtro-fin-mesref-fim"))==null||pe.addEventListener("change",w=>{u=w.target.value,b()}),(he=e.querySelector("#filtro-fin-status"))==null||he.addEventListener("change",w=>{x=w.target.value,b()}),(ye=e.querySelector("#filtro-fin-aluno"))==null||ye.addEventListener("change",w=>{f=w.target.value,b()}),(xe=e.querySelector("#filtro-fin-metodo"))==null||xe.addEventListener("change",w=>{i=w.target.value,b()}),(we=e.querySelector("#filtro-fin-ordem"))==null||we.addEventListener("change",w=>{v=w.target.value,b()}),(Pe=e.querySelector("#btn-limpar-filtros-fin"))==null||Pe.addEventListener("click",()=>{S="",M="",r="",u="",x="todos",f="todos",i="todos",v="vencimento_asc",b()}),(Te=e.querySelector("#btn-gerar-pdf"))==null||Te.addEventListener("click",async()=>{if(!o){B("Você não possui permissão para emitir relatórios.","error");return}const w=e.querySelector("#btn-gerar-pdf"),H=w?w.innerHTML:"";w&&(w.disabled=!0,w.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await I(n,k,y):await L(n,D,m,{mesIni:r,mesFim:u}),B("PDF gerado com sucesso!","success")}catch(re){console.error("Erro ao gerar PDF:",re),B("Ocorreu um erro ao gerar o documento PDF.","error")}finally{w&&(w.disabled=!1,w.innerHTML=H)}})}function E(n){return new Promise(m=>{if(n&&n.trim()!==""){const y=new Image;y.crossOrigin="Anonymous",y.onload=()=>{try{const p=document.createElement("canvas");p.width=160,p.height=160;const c=p.getContext("2d");if(!c){m(n);return}const k=24;c.fillStyle="#ffffff",c.beginPath(),c.moveTo(k,0),c.lineTo(160-k,0),c.quadraticCurveTo(160,0,160,k),c.lineTo(160,160-k),c.quadraticCurveTo(160,160,160-k,160),c.lineTo(k,160),c.quadraticCurveTo(0,160,0,160-k),c.lineTo(0,k),c.quadraticCurveTo(0,0,k,0),c.closePath(),c.fill();const O=12,_=160-O*2,N=160-O*2;let A=_,T=N;const D=y.width/y.height;D>1?T=_/D:A=N*D;const R=O+(_-A)/2,V=O+(N-T)/2;c.drawImage(y,R,V,A,T),m(p.toDataURL("image/png"))}catch{m(n)}},y.onerror=()=>{g().then(m)},y.src=n;return}g().then(m)})}function g(){return new Promise(n=>{try{const m=document.createElement("canvas");m.width=160,m.height=160;const y=m.getContext("2d");if(!y){n("");return}const p=32;y.fillStyle="#181c2b",y.beginPath(),y.moveTo(p,0),y.lineTo(160-p,0),y.quadraticCurveTo(160,0,160,p),y.lineTo(160,160-p),y.quadraticCurveTo(160,160,160-p,160),y.lineTo(p,160),y.quadraticCurveTo(0,160,0,160-p),y.lineTo(0,p),y.quadraticCurveTo(0,0,p,0),y.closePath(),y.fill(),y.lineWidth=3,y.strokeStyle="#2d3748",y.stroke();const c=new Image,k=`
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
        `,O=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),_=URL.createObjectURL(O);c.onload=()=>{y.drawImage(c,20,20,120,120),URL.revokeObjectURL(_),n(m.toDataURL("image/png"))},c.onerror=()=>{URL.revokeObjectURL(_),n("")},c.src=_}catch{n("")}})}async function I(n,m,y){const p=new De({orientation:"portrait",unit:"mm",format:"a4"}),c=new Date().toLocaleString("pt-BR"),k=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",O=n.razaoSocial||"Acusticamente Ensino Musical Ltda",_=n.cnpj?`CNPJ: ${n.cnpj}`:"",N=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),A=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),T=await E(n.logotipoCustomizado);T&&p.addImage(T,"PNG",14,12,17,17);const D=T?35:14;p.setFont("helvetica","bold"),p.setFontSize(13),p.setTextColor(15,23,42),p.text(k,D,17),p.setFont("helvetica","normal"),p.setFontSize(8),p.setTextColor(71,85,105),p.text([O,_].filter(Boolean).join(" • "),D,21.5),p.setFontSize(7.5),p.setTextColor(100,116,139),A&&p.text(A,D,25.5),N&&p.text(N,D,A?29.5:25.5),p.setFont("helvetica","bold"),p.setFontSize(12),p.setTextColor(217,72,59),p.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),p.setFont("helvetica","normal"),p.setFontSize(8),p.setTextColor(100,116,139),p.text(`Emissão: ${c}`,196,22,{align:"right"}),p.text(`Total: ${m.length} aluno(s)`,196,26.5,{align:"right"}),p.setDrawColor(203,213,225),p.setLineWidth(.4),p.line(14,33,196,33);const R=m.filter(j=>j.status==="ativo").length,V=m.filter(j=>j.status==="inativo").length,X=m.filter(j=>C.isStudentOverdue(j.id)).length,ee=[{label:"TOTAL DE ALUNOS",value:`${m.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${R}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${X}`,color:[220,38,38]}],G=43,Y=12,J=36;ee.forEach((j,ne)=>{const ae=14+ne*(G+3);p.setFillColor(248,250,252),p.roundedRect(ae,J,G,Y,1.5,1.5,"F"),p.setDrawColor(226,232,240),p.roundedRect(ae,J,G,Y,1.5,1.5,"S"),p.setFont("helvetica","bold"),p.setFontSize(6.5),p.setTextColor(100,116,139),p.text(j.label,ae+3,J+4),p.setFontSize(10.5),p.setTextColor(j.color[0],j.color[1],j.color[2]),p.text(j.value,ae+3,J+9.5)});const Z=m.map((j,ne)=>{const ae=y.find(oe=>oe.id===j.planoId),fe=j.status==="ativo",F=C.isStudentOverdue(j.id);return[(ne+1).toString(),j.nome,j.instrumentoPrincipal||"Música Geral",j.telefone||"-",(ae==null?void 0:ae.nome)||"-",fe?"Ativo":"Inativo",F?"Atrasado":"Em dia"]});Be(p,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:Z.length>0?Z:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:j=>{j.section==="body"&&(j.column.index===5&&(j.cell.raw==="Ativo"?(j.cell.styles.textColor=[22,163,74],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[202,138,4]),j.column.index===6&&(j.cell.raw==="Atrasado"?(j.cell.styles.textColor=[220,38,38],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[22,163,74]))}});const W=p.internal.getNumberOfPages();for(let j=1;j<=W;j++)p.setPage(j),p.setDrawColor(226,232,240),p.setLineWidth(.3),p.line(14,287,196,287),p.setFont("helvetica","normal"),p.setFontSize(7),p.setTextColor(148,163,184),p.text(`${k} • Sistema de Gestão Escolar & Pedagógica`,14,292),p.text(`Página ${j} de ${W}`,196,292,{align:"right"});const se=p.output("blob"),K=URL.createObjectURL(se);window.open(K,"_blank")}async function L(n,m,y,p){const c=new De({orientation:"portrait",unit:"mm",format:"a4"}),k=new Map(y.map(F=>[F.id,F.nome])),O=new Date().toLocaleString("pt-BR"),_=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",N=n.razaoSocial||"Acusticamente Ensino Musical Ltda",A=n.cnpj?`CNPJ: ${n.cnpj}`:"",T=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),D=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),R=new Date().toISOString().slice(0,10),V=m.reduce((F,oe)=>F+oe.valor,0),X=m.filter(F=>F.status==="pago").reduce((F,oe)=>F+oe.valor,0),ee=m.filter(F=>F.status!=="pago").reduce((F,oe)=>F+oe.valor,0),G=await E(n.logotipoCustomizado);G&&c.addImage(G,"PNG",14,12,17,17);const Y=G?35:14;c.setFont("helvetica","bold"),c.setFontSize(13),c.setTextColor(15,23,42),c.text(_,Y,17),c.setFont("helvetica","normal"),c.setFontSize(8),c.setTextColor(71,85,105),c.text([N,A].filter(Boolean).join(" • "),Y,21.5),c.setFontSize(7.5),c.setTextColor(100,116,139),D&&c.text(D,Y,25.5),T&&c.text(T,Y,D?29.5:25.5),c.setFont("helvetica","bold"),c.setFontSize(12),c.setTextColor(5,150,105),c.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),c.setFont("helvetica","normal"),c.setFontSize(8),c.setTextColor(100,116,139),c.text(`Emissão: ${O}`,196,22,{align:"right"});let J=`Total: ${m.length} registro(s)`;p!=null&&p.mesIni&&(p!=null&&p.mesFim)?J=`Ref: ${p.mesIni} a ${p.mesFim} • ${m.length} reg.`:p!=null&&p.mesIni?J=`Ref: a partir de ${p.mesIni} • ${m.length} reg.`:p!=null&&p.mesFim&&(J=`Ref: até ${p.mesFim} • ${m.length} reg.`),c.text(J,196,26.5,{align:"right"}),c.setDrawColor(203,213,225),c.setLineWidth(.4),c.line(14,33,196,33);const Z=[{label:"LANÇAMENTOS",value:`${m.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${X.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${ee.toFixed(2)}`,color:[220,38,38]}],W=43,se=12,K=36;Z.forEach((F,oe)=>{const pe=14+oe*(W+3);c.setFillColor(248,250,252),c.roundedRect(pe,K,W,se,1.5,1.5,"F"),c.setDrawColor(226,232,240),c.roundedRect(pe,K,W,se,1.5,1.5,"S"),c.setFont("helvetica","bold"),c.setFontSize(6.5),c.setTextColor(100,116,139),c.text(F.label,pe+3,K+4),c.setFontSize(10),c.setTextColor(F.color[0],F.color[1],F.color[2]),c.text(F.value,pe+3,K+9.5)});const j=m.map((F,oe)=>{const pe=F.status==="pago",he=!pe&&F.dataVencimento<R,ye=pe?"Pago":he?"Atrasado":"Pendente",xe=F.descricao+(F.mesReferencia?` / ${F.mesReferencia}`:""),we=F.dataVencimento.split("-").reverse().join("/");return[(oe+1).toString(),k.get(F.alunoId)||"Aluno",xe,we,`R$ ${F.valor.toFixed(2)}`,ye]});Be(c,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:j.length>0?j:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:F=>{F.section==="body"&&F.column.index===5&&(F.cell.raw==="Pago"?(F.cell.styles.textColor=[22,163,74],F.cell.styles.fontStyle="bold"):F.cell.raw==="Atrasado"?(F.cell.styles.textColor=[220,38,38],F.cell.styles.fontStyle="bold"):F.cell.styles.textColor=[202,138,4])}});const ne=c.internal.getNumberOfPages();for(let F=1;F<=ne;F++)c.setPage(F),c.setDrawColor(226,232,240),c.setLineWidth(.3),c.line(14,287,196,287),c.setFont("helvetica","normal"),c.setFontSize(7),c.setTextColor(148,163,184),c.text(`${_} • Gestão Financeira & Escolar`,14,292),c.text(`Página ${F} de ${ne}`,196,292,{align:"right"});const ae=c.output("blob"),fe=URL.createObjectURL(ae);window.open(fe,"_blank")}return b(),e}function lt($){const e=document.createElement("div");let t=new Date,o="";const s=h=>h.toString().padStart(2,"0");function l(h){const d=h.getDate(),M=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][h.getMonth()],r=h.getFullYear(),u=new Date,x=u.getDate()===d&&u.getMonth()===h.getMonth()&&u.getFullYear()===r;return`${d} de ${M} de ${r}${x?" (Hoje)":""}`}function z(h){return`${h.getFullYear()}-${s(h.getMonth()+1)}-${s(h.getDate())}`}function a(){var i,v,b,E,g,I,L,n;const h=U.getLogs(),d=new Date,S=`${s(d.getDate())}/${s(d.getMonth()+1)}/${d.getFullYear()}`,M=h.filter(m=>{var y;return(y=m.dataHoraFormatada)==null?void 0:y.startsWith(S)}).length,r=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",u=t!==null&&d.getDate()===t.getDate()&&d.getMonth()===t.getMonth()&&d.getFullYear()===t.getFullYear(),x=h.filter(m=>{const y=!t||m.dataHoraFormatada&&m.dataHoraFormatada.startsWith(r)||m.dataHora&&m.dataHora.startsWith(z(t)),p=o===""||m.tela.toLowerCase().includes(o.toLowerCase())||m.usuarioNome.toLowerCase().includes(o.toLowerCase())||m.usuarioLogin.toLowerCase().includes(o.toLowerCase())||m.acao.toLowerCase().includes(o.toLowerCase())||m.detalhes.toLowerCase().includes(o.toLowerCase());return y&&p});e.innerHTML=`
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
            <button type="button" class="btn ${u?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${t?z(t):""}" 
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
    `,(i=e.querySelector("#audit-btn-prev"))==null||i.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),a()}),(v=e.querySelector("#audit-btn-next"))==null||v.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),a()}),(b=e.querySelector("#audit-btn-today"))==null||b.addEventListener("click",()=>{t=new Date,a()}),(E=e.querySelector("#audit-btn-all"))==null||E.addEventListener("click",()=>{t=null,a()}),(g=e.querySelector("#audit-empty-btn-all"))==null||g.addEventListener("click",()=>{t=null,a()}),(I=e.querySelector("#audit-date-picker"))==null||I.addEventListener("change",m=>{const y=m.target.value;if(y){const[p,c,k]=y.split("-").map(Number);t=new Date(p,c-1,k)}else t=null;a()});const f=e.querySelector("#audit-search-input");f==null||f.addEventListener("input",m=>{o=m.target.value,a();const y=e.querySelector("#audit-search-input");y&&(y.focus(),y.selectionStart=y.selectionEnd=y.value.length)}),(L=e.querySelector("#btn-clear-audit-search"))==null||L.addEventListener("click",()=>{o="",a()}),(n=e.querySelector("#btn-clear-all-audit"))==null||n.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await C.resetCleanDatabase("Administrador"),a())})}const P=()=>{a()};return window.addEventListener("audit_updated",P),a(),e}function dt($){const e=document.createElement("div"),t=Q.getCurrentUser(),o=C.getSettings(),s=te(t,"configuracoes","alterar");e.innerHTML=`
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
  `;const l=e.querySelector("#btn-tab-gerais"),z=e.querySelector("#btn-tab-instituicao"),a=e.querySelector("#tab-content-gerais"),P=e.querySelector("#tab-content-instituicao");function h(c,k){c&&(k?c.classList.add("active"):c.classList.remove("active"))}function d(c){a.style.display=c==="gerais"?"block":"none",P.style.display=c==="instituicao"?"block":"none",h(l,c==="gerais"),h(z,c==="instituicao")}l==null||l.addEventListener("click",()=>d("gerais")),z==null||z.addEventListener("click",()=>d("instituicao"));let S=o.logotipoCustomizado||"";const M=e.querySelector("#cfg-menu-name"),r=e.querySelector("#preview-menu-brand-name"),u=e.querySelector("#preview-report-brand-name"),x=e.querySelector("#preview-logo-menu"),f=e.querySelector("#preview-logo-report"),i=e.querySelector("#input-logo-file"),v=e.querySelector("#btn-upload-logo"),b=e.querySelector("#btn-reset-logo"),E=e.querySelector("#logo-feedback-msg");M==null||M.addEventListener("input",()=>{const c=M.value.trim()||"Acusticamente";r&&(r.textContent=c),u&&(u.textContent=c)}),v==null||v.addEventListener("click",()=>{i==null||i.click()}),i==null||i.addEventListener("change",c=>{const k=c.target.files;if(!k||k.length===0)return;const O=k[0];if(!O.type.startsWith("image/")){B("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(O.size>3*1024*1024){B("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const _=new FileReader;_.onload=N=>{var A;S=((A=N.target)==null?void 0:A.result)||"",x&&(x.innerHTML=le(S,40)),f&&(f.innerHTML=le(S,40)),b&&(b.disabled=!1,b.style.color="#ef4444"),E&&(E.style.display="block",E.style.color="var(--status-success)",E.textContent="Imagem carregada no preview. Clique em Salvar."),B("Logotipo carregado na pré-visualização!","info")},_.onerror=()=>{B("Erro ao processar o arquivo de imagem.","error")},_.readAsDataURL(O)}),b==null||b.addEventListener("click",()=>{S="",i&&(i.value=""),x&&(x.innerHTML=le("",40)),f&&(f.innerHTML=le("",40)),b&&(b.disabled=!0,b.style.color="var(--text-muted)"),E&&(E.style.display="block",E.style.color="var(--color-coral)",E.textContent="Logotipo padrão no preview. Clique em Salvar."),B("Logotipo padrão restaurado no preview.","info")});const g=e.querySelector("#form-settings-gerais");g==null||g.addEventListener("submit",c=>{c.preventDefault();const k=M.value.trim()||"Acusticamente";C.updateSettings({nomeMenu:k,logotipoCustomizado:S},(t==null?void 0:t.nome)||"Administrador"),E&&(E.style.display="none"),B("Configurações gerais salvas com sucesso!","success")});const I=e.querySelector("#cfg-cnpj");I==null||I.addEventListener("input",c=>{let k=c.target.value.replace(/\D/g,"").slice(0,14);k.length>12?k=k.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):k.length>8?k=k.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):k.length>5?k=k.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):k.length>2&&(k=k.replace(/^(\d{2})(\d{1,3})$/,"$1.$2")),c.target.value=k});const L=e.querySelector("#cfg-cep");L==null||L.addEventListener("input",c=>{let k=c.target.value.replace(/\D/g,"").slice(0,8);k.length>5&&(k=k.replace(/^(\d{5})(\d{1,3})$/,"$1-$2")),c.target.value=k});const n=e.querySelector("#cfg-uf");n==null||n.addEventListener("input",c=>{c.target.value=c.target.value.toUpperCase().slice(0,2)});const m=e.querySelector("#form-settings-institucional");m==null||m.addEventListener("submit",c=>{c.preventDefault();const k=e.querySelector("#cfg-fantasia").value,O=e.querySelector("#cfg-razao").value,_=e.querySelector("#cfg-cnpj").value,N=e.querySelector("#cfg-ie").value,A=e.querySelector("#cfg-tel").value,T=e.querySelector("#cfg-email").value,D=e.querySelector("#cfg-site").value,R=e.querySelector("#cfg-cep").value,V=e.querySelector("#cfg-logradouro").value,X=e.querySelector("#cfg-numero").value,ee=e.querySelector("#cfg-complemento").value,G=e.querySelector("#cfg-bairro").value,Y=e.querySelector("#cfg-cidade").value,J=e.querySelector("#cfg-uf").value.toUpperCase();C.updateSettings({nomeEscola:k,nomeClinica:k,nomeFantasia:k,razaoSocial:O,cnpj:_,inscricaoEstadual:N,telefoneContato:A,emailContato:T,website:D,cep:R,logradouro:V,numero:X,complemento:ee,bairro:G,cidade:Y,estado:J},(t==null?void 0:t.nome)||"Administrador"),B("Dados da instituição salvos com sucesso!","success")});const y=e.querySelector("#footer-cloud-status"),p=c=>{y&&(c==="connected"?(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,y.style.color="#4ade80"):c==="fallback"?(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,y.style.color="#fbbf24"):(y.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,y.style.color="#94a3b8"))};return p(C.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",c=>{p(c.detail)}),e}class ct{constructor(){ie(this,"currentScreen","site");ie(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=Q.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":Q.isAuthenticated()?["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(e)&&ce(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","").trim(),s=!o||o==="site"?"site":o;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const o=C.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const l=document.querySelector(".sidebar-logo");l&&(l.innerHTML=le(o.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{Q.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),C.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of t)if(ce(e,o))return o;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!Q.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=Q.getCurrentUser();if(!ce(t,e)){B("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(t);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),C.syncWithCloud()}render(){var r;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const u=Qe(x=>{this.navigateTo(x)});this.appRoot.appendChild(u);return}if(this.currentScreen==="login"||!Q.isAuthenticated()){const u=Xe(()=>{const x=Q.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(x))},()=>{this.navigateTo("site")});this.appRoot.appendChild(u);return}const e=document.createElement("div");e.className="app-container";const t=Q.getCurrentUser(),o=(t==null?void 0:t.papel)==="admin",s=C.getSettings(),l=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${le(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${q.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${ce(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${q.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${ce(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${q.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${ce(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${q.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${ce(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${q.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${ce(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${q.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${ce(t,"relatorios")?`
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

          ${ce(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${q.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${ce(t,"configuracoes")?`
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
              ${((t==null?void 0:t.nome)||"A")[0]}
            </div>
            <div class="user-info">
              <span class="user-info-name">${(t==null?void 0:t.nome)||"Administrador"}</span>
              <span class="user-info-role">${(t==null?void 0:t.papel)==="admin"?"Administrador":(t==null?void 0:t.papel)||"Usuário"}</span>
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
    `;const z=e.querySelector("#app-sidebar"),a=e.querySelector("#sidebar-backdrop"),P=e.querySelector("#btn-mobile-menu-toggle"),h=e.querySelector("#btn-sidebar-close"),d=u=>{const x=u!==void 0?u:!z.classList.contains("open");z.classList.toggle("open",x),a.classList.toggle("open",x),document.body.style.overflow=x?"hidden":""};P==null||P.addEventListener("click",()=>d(!0)),h==null||h.addEventListener("click",()=>d(!1)),a==null||a.addEventListener("click",()=>d(!1)),e.querySelectorAll(".nav-item").forEach(u=>{u.addEventListener("click",x=>{const f=x.currentTarget.dataset.screen;d(!1),f&&this.navigateTo(f)})}),(r=e.querySelector("#btn-app-logout"))==null||r.addEventListener("click",()=>{ge({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{Q.logout(),this.navigateTo("site")}})});const S=e.querySelector("#screen-viewport"),M=this.createViewElement(this.currentScreen);S.appendChild(M),this.appRoot.appendChild(e)}createViewElement(e){const t=o=>this.navigateTo(o);switch(e){case"home":return Fe(t);case"agenda":return Ke();case"alunos":return at(t);case"user":return st(t);case"planos":return nt();case"financeiro":return rt();case"relatorios":return it();case"auditoria":return lt();case"configuracoes":return dt();default:return Fe(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new ct});
