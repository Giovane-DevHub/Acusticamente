var Xe=Object.defineProperty;var Ke=($,e,t)=>e in $?Xe($,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):$[e]=t;var ie=($,e,t)=>Ke($,typeof e!="symbol"?e+"":e,t);import{E as Fe,a as _e}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const M of c.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&o(M)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const Re="acusticamente_audit_logs";class Qe{constructor(){ie(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Re);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Re,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,o=M=>M.toString().padStart(2,"0"),s=`${o(t.getDate())}/${o(t.getMonth()+1)}/${t.getFullYear()} ${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`,c={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(c),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:c})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:c})),c}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const U=new Qe,Me="acusticamente_users",Ae="acusticamente_students",Ee="acusticamente_plans",Se="acusticamente_appointments",Te="acusticamente_settings",ke="acusticamente_payments";class Ze{constructor(){ie(this,"users",[]);ie(this,"students",[]);ie(this,"plans",[]);ie(this,"appointments",[]);ie(this,"payments",[]);ie(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});ie(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(Me);e?this.users=JSON.parse(e).map(a=>{var T,f;return{...a,permissoes:{...a.permissoes,financeiro:((T=a.permissoes)==null?void 0:T.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((f=a.permissoes)==null?void 0:f.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Ee);if(t)try{const a=JSON.parse(t);this.plans=a.map(T=>({...T,valor:typeof T.valor=="number"?T.valor:280,modulos:(T.modulos||[]).map((f,u)=>({...f,aulas:Array.isArray(f.aulas)&&f.aulas.length>0?f.aulas:[{id:`aul_${f.id||u+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${f.id||u+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${f.id||u+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${f.id||u+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",valor:260,criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",valor:280,criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",valor:320,criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],this.savePlans();const o=localStorage.getItem(Ae);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[],this.saveStudents());const s=localStorage.getItem(Se);s?this.appointments=JSON.parse(s):(this.appointments=[],this.saveAppointments());const c=localStorage.getItem(Te);c&&(this.settings=JSON.parse(c));const M=localStorage.getItem(ke);M?this.payments=JSON.parse(M):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),this.savePlans(),this.students.forEach(a=>{var T;(T=a.observacoes)!=null&&T.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var T;(T=a.titulo)!=null&&T.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=o=>o.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,o){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:o})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const o=t.data;return Array.isArray(o.students)&&(this.students=o.students,localStorage.setItem(Ae,JSON.stringify(this.students))),Array.isArray(o.payments)&&(this.payments=o.payments,localStorage.setItem(ke,JSON.stringify(this.payments))),Array.isArray(o.appointments)&&(this.appointments=o.appointments,localStorage.setItem(Se,JSON.stringify(this.appointments))),Array.isArray(o.plans)&&(this.plans=o.plans,localStorage.setItem(Ee,JSON.stringify(this.plans))),Array.isArray(o.users)&&o.users.length>0&&(this.users=o.users,localStorage.setItem(Me,JSON.stringify(this.users))),o.settings&&(this.settings={...this.settings,...o.settings},localStorage.setItem(Te,JSON.stringify(this.settings))),Array.isArray(o.audit)&&(o.audit.length===0?U.clearLocalOnly():U.setLogs(o.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(Ae,JSON.stringify([])),localStorage.setItem(ke,JSON.stringify([])),localStorage.setItem(Se,JSON.stringify([])),localStorage.setItem(Ee,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await U.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Me,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(Ae,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Ee,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Se,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(ke,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}saveSettings(){localStorage.setItem(Te,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const o={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(e,t,o){const s=this.users.findIndex(a=>a.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const c=this.users[s],M=c.isSistema;return this.users[s]={...c,...t,isSistema:M,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${c.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const o=this.users.find(s=>s.id===e);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(e,t){const o={...e,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(e,t,o){const s=this.students.findIndex(M=>M.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const c=this.students[s];return this.students[s]={...c,...t},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${c.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const o=this.students.find(s=>s.id===e);o&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const o={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(e,t,o){const s=this.plans.findIndex(M=>M.id===e);if(s===-1)throw new Error("Plano não encontrado.");const c=this.plans[s];return this.plans[s]={...c,...t},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${c.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const o=this.plans.find(s=>s.id===e);o&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(e,t){const o={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(c=>c.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(e,t,o){const s=this.appointments.findIndex(M=>M.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const c=this.appointments[s];return this.appointments[s]={...c,...t},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${c.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const o=this.appointments.find(s=>s.id===e);o&&(this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(e,t){const o=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(c=>c.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(e,t,o,s){const c=t?"falta_justificada":"falta_injustificada",M=this.updateAppointment(e,{status:c,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(f=>f.id===M.alunoId);let T=(a==null?void 0:a.saldoReposicoes)||0;return t&&a?(T=(a.saldoReposicoes||0)+1,a.saldoReposicoes=T,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${M.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${T}. Motivo: ${o||"Não especificado"}`})):!t&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${M.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:M,saldoReposicoes:T}}agendarReposicao(e,t,o){const s=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},o);if(t){const M=this.appointments.findIndex(a=>a.id===t);M!==-1&&(this.appointments[M].aulaReposicaoId=s.id,this.saveAppointments())}const c=this.students.find(M=>M.id===s.alunoId);return c&&typeof c.saldoReposicoes=="number"&&c.saldoReposicoes>0&&(c.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${c.nome}". 1 crédito abatido. Saldo restante: ${c.saldoReposicoes}.`})),s}generateAppointmentsFromPlan(e,t,o,s,c,M){const a=this.students.find(z=>z.id===e),T=this.plans.find(z=>z.id===t);if(!a||!T)return[];const f=[];if((T.modulos||[]).forEach(z=>{(z.aulas||[]).forEach(r=>{f.push({moduloId:z.id,moduloTitulo:z.titulo,aulaTitulo:r.titulo,aulaId:r.id})})}),f.length===0)return[];const u=[];let A=new Date(o+"T12:00:00");return f.forEach((z,r)=>{const b=l=>l.toString().padStart(2,"0"),h=`${A.getFullYear()}-${b(A.getMonth()+1)}-${b(A.getDate())}`,g={id:`app_${Date.now()}_${r}_${Math.random().toString(36).substr(2,4)}`,alunoId:a.id,planoId:T.id,moduloId:z.moduloId,aulaId:z.aulaId,titulo:`${z.aulaTitulo}`,data:h,horaInicio:s,horaFim:c,status:"agendado",tipoAula:"regular",observacoes:`${T.nome} • ${z.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push(g),u.push(g),A.setDate(A.getDate()+7)}),this.saveAppointments(),U.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:M,detalhes:`Geradas ${u.length} aulas regulares para "${a.nome}" com base no plano "${T.nome}".`}),u}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,o)=>{const s=`${t.data}T${t.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(o=>{if(o.status!=="pago"){const s=o.dataVencimento<e?"atrasado":"pendente";o.status!==s&&(o.status=s,t=!0)}}),t&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(o=>o.alunoId===e&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<t))}addPayment(e,t){const o=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<o&&(s="atrasado");const c={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(c),this.savePayments();const M=this.students.find(a=>a.id===c.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${c.descricao}" (R$ ${c.valor.toFixed(2)}) cadastrado para o aluno "${(M==null?void 0:M.nome)||"N/A"}" com vencimento em ${c.dataVencimento}.`}),c}darBaixaPayment(e,t,o,s,c){const M=this.payments.findIndex(u=>u.id===e);if(M===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[M],T=a.status;a.status="pago",a.dataPagamento=t,a.formaPagamento=o,c!==void 0&&(a.observacoes=c.trim()?c.trim():a.observacoes),this.savePayments();const f=this.students.find(u=>u.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(f==null?void 0:f.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${t} (Status anterior: ${T}).`}),a}updatePayment(e,t,o){const s=this.payments.findIndex(u=>u.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const c=this.getTodayDateString();let M=t.status||this.payments[s].status;const a=t.dataVencimento||this.payments[s].dataVencimento;M!=="pago"&&(M=a<c?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:M},this.savePayments();const T=this.payments[s],f=this.students.find(u=>u.id===T.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${T.descricao}" do aluno "${(f==null?void 0:f.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const o=this.payments.find(c=>c.id===e);if(!o)return;this.payments=this.payments.filter(c=>c.id!==e),this.savePayments();const s=this.students.find(c=>c.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,o){const s=A=>A.toString().padStart(2,"0"),c=`${e}-${s(t)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||c,T=this.students.filter(A=>A.status==="ativo");let f=0,u=0;return T.forEach(A=>{if(this.payments.some(x=>x.alunoId===A.id&&(x.mesReferencia===c||x.dataVencimento.startsWith(c)))){u++;return}const r=A.diaVencimento||10,b=new Date(e,t,0).getDate(),h=Math.min(r,b),g=`${e}-${s(t)}-${s(h)}`,l=typeof A.valorMensalidade=="number"&&A.valorMensalidade>0?A.valorMensalidade:280;this.addPayment({alunoId:A.id,descricao:`Mensalidade ${a}/${e}`,mesReferencia:c,valor:l,dataVencimento:g,status:"pendente",observacoes:`Gerado automaticamente para o plano ${A.moduloAtual||A.instrumentoPrincipal||"Música"}`},o),f++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${e}: ${f} mensalidade(s) criada(s) e ${u} já existente(s) pulada(s).`}),{criadas:f,puladas:u}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const L=new Ze,ge={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Ie($){var s,c,M,a,T,f,u,A,z,r,b,h,g,l,x,p,y,m,S,k,n,d,v,i,w,I,q,O;if(!$)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if($.papel==="admin")return JSON.parse(JSON.stringify(ge.admin));const e=ge[$.papel]||ge.professor,t=$.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const o=N=>typeof N=="boolean";return{alunos:{acesso:o(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:o(t.alunos)?t.alunos:((c=t.alunos)==null?void 0:c.cadastrar)??e.alunos.cadastrar,alterar:o(t.alunos)?t.alunos:((M=t.alunos)==null?void 0:M.alterar)??e.alunos.alterar,excluir:o(t.alunos)?!1:((a=t.alunos)==null?void 0:a.excluir)??e.alunos.excluir},agenda:{acesso:o(t.agenda)?t.agenda:((T=t.agenda)==null?void 0:T.acesso)??e.agenda.acesso,cadastrar:o(t.agenda)?t.agenda:((f=t.agenda)==null?void 0:f.cadastrar)??e.agenda.cadastrar,alterar:o(t.agenda)?t.agenda:((u=t.agenda)==null?void 0:u.alterar)??e.agenda.alterar,excluir:o(t.agenda)?!1:((A=t.agenda)==null?void 0:A.excluir)??e.agenda.excluir},planos:{acesso:o(t.planos)?t.planos:((z=t.planos)==null?void 0:z.acesso)??e.planos.acesso,cadastrar:o(t.planos)?t.planos:((r=t.planos)==null?void 0:r.cadastrar)??e.planos.cadastrar,alterar:o(t.planos)?t.planos:((b=t.planos)==null?void 0:b.alterar)??e.planos.alterar,excluir:o(t.planos)?!1:((h=t.planos)==null?void 0:h.excluir)??e.planos.excluir},home:{acesso:o(t.home)?t.home:((g=t.home)==null?void 0:g.acesso)??e.home.acesso},financeiro:{acesso:o(t.financeiro)?t.financeiro:((l=t.financeiro)==null?void 0:l.acesso)??((x=e.financeiro)==null?void 0:x.acesso)??!1,cadastrar:o(t.financeiro)?t.financeiro:((p=t.financeiro)==null?void 0:p.cadastrar)??((y=e.financeiro)==null?void 0:y.cadastrar)??!1,alterar:o(t.financeiro)?t.financeiro:((m=t.financeiro)==null?void 0:m.alterar)??((S=e.financeiro)==null?void 0:S.alterar)??!1,excluir:o(t.financeiro)?!1:((k=t.financeiro)==null?void 0:k.excluir)??((n=e.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(t.relatorios)?t.relatorios:((d=t.relatorios)==null?void 0:d.acesso)??((v=e.relatorios)==null?void 0:v.acesso)??!0,gerar:o(t.relatorios)?t.relatorios:((i=t.relatorios)==null?void 0:i.gerar)??((w=e.relatorios)==null?void 0:w.gerar)??!0},auditoria:{acesso:o(t.auditoria)?t.auditoria:((I=t.auditoria)==null?void 0:I.acesso)??e.auditoria.acesso},configuracoes:{acesso:o(t.configuracoes)?t.configuracoes:((q=t.configuracoes)==null?void 0:q.acesso)??e.configuracoes.acesso,alterar:o(t.configuracoes)?t.configuracoes:((O=t.configuracoes)==null?void 0:O.alterar)??e.configuracoes.alterar}}}function ce($,e){if(!$)return!1;if(e==="login")return!0;if(e==="user")return $.papel==="admin";if($.papel==="admin"||$.isSistema)return!0;const o=Ie($)[e];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function ae($,e,t){if(!$)return!1;if($.papel==="admin")return!0;const s=Ie($)[e];return s?!!s[t]:!1}const Ce="acusticamente_active_session";class et{constructor(){ie(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(Ce);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=L.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(Ce,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=L.getUsers().find(c=>c.login===e.trim());return s?s.senha!==t.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Ce,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Ce),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const te=new et;function tt($=40){return`
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
  `}function le($,e=40){return $&&$.trim()!==""?`<img src="${$}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:tt(e)}function B($,e="success"){const t=document.getElementById("toast-container");if(!t)return;const o=document.createElement("div");o.className=`toast toast-${e}`,o.innerHTML=`
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
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),o=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),c=()=>{e.innerHTML="",$.onCancel&&$.onCancel()};t.onclick=c,o.onclick=c,s&&$.onConfirm&&(s.onclick=async()=>{const M=document.querySelector(".modal-card");await $.onConfirm(M)!==!1&&(e.innerHTML="")})}function he(){const $=document.getElementById("modal-container");$&&($.innerHTML="")}function fe($){de({title:$.title||"Confirmar Exclusão",bodyHtml:`
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
    `,confirmText:$.confirmText||"Excluir Definitivamente",confirmBtnClass:$.confirmBtnClass||"btn-danger",onConfirm:()=>($.onConfirm(),!0)})}const j={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'};function qe($){return $.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function ze($){const e=$.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function je($){const e=$.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function Oe($){const e=$.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function Je($){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($)}function ve($,e){$.addEventListener("input",()=>{$.value=e($.value)})}const Pe="acusticamente_auth_remember",at="acusticamente_manual_logout";function ot($,e){const t=document.createElement("div");t.className="login-page";const o=L.getSettings(),s=o.nomeMenu||o.nomeFantasia||"Acusticamente";let c={username:"",password:"",remember:!1};try{const f=localStorage.getItem(Pe);f&&(c={...c,...JSON.parse(f)})}catch{c={username:"",password:"",remember:!1}}t.innerHTML=`
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
              value="${c.remember?c.username:""}"
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
              value="${c.remember?c.password:""}"
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
                ${c.remember?"checked":""} 
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
  `;const M=t.querySelector("#login-remember"),a=t.querySelector("#btn-back-to-site");a==null||a.addEventListener("click",()=>{e?e():window.location.hash="site"});const T=t.querySelector("#login-form");return T.onsubmit=f=>{var g;f.preventDefault();const u=t.querySelector("#login-username"),A=t.querySelector("#login-password"),z=u.value.trim(),r=A.value.trim(),b=M.checked,h=te.login(z,r);h.success?(b?localStorage.setItem(Pe,JSON.stringify({username:z,password:r,remember:!0})):localStorage.removeItem(Pe),sessionStorage.removeItem(at),B(`Bem-vindo, ${(g=h.user)==null?void 0:g.nome}!`,"success"),$()):B(h.message,"error")},t}const be=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,De=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function st($){var z,r,b;const e=document.createElement("div");e.className="public-site-wrapper";const t=L.getSettings(),o=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",c="(51) 98189-8802",M="51981898802",a="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",T="Segunda a Sexta · Aberto até 20:30",f="https://share.google/NtOxuUNfF6FGJ62tZ",u="https://www.instagram.com/acusticamente.rs",A=`https://wa.me/55${M}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Esquerdo: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${le(t.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${o}</span>
        </div>

        <!-- Canto Direito: Entrar em contato e ao lado direito o Entrar -->
        <div class="site-header-right">
          <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Fale conosco no WhatsApp">
            ${be}
            <span class="btn-text-full">Entrar em contato</span>
            <span class="btn-text-short">Contato</span>
          </a>

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
      </div>
    </header>

    <!-- Hero Section com Descrição Oficial -->
    <section class="site-hero">
      <div class="site-hero-bg-glow"></div>
      <div class="site-hero-content">
        <div class="site-hero-badge">
          <span>🎵 Gravataí - RS &bull; Escola de Música</span>
        </div>
        <h1 class="site-hero-title">
          O local onde <span>vivemos a música!</span>
        </h1>
        <p class="site-hero-subtitle">
          A Acusticamente é o local onde vivemos a música! Com aulas adaptadas à sua evolução, ensinamos música aos nossos alunos de forma excelente. Entre em contato agora mesmo e tire seu sonho do papel!
        </p>
        <div class="site-hero-actions">
          <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${be}
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Seção de Cursos & Instrumentos Atendidos -->
    <section class="site-section" id="cursos">
      <div class="site-container">

        <!-- Destaque Sutil para o Instagram (Acima do título de Cursos) -->
        <div class="instagram-highlight-container" style="margin-top: 0; margin-bottom: 44px;">
          <div class="instagram-highlight-card">
            <div class="insta-left">
              <div class="insta-icon-wrapper">
                ${De}
              </div>
              <div class="insta-text">
                <div class="insta-tag">ACOMPANHE NOSSA ESCOLA</div>
                <h4 class="insta-title">@acusticamente.rs</h4>
                <p class="insta-subtitle">Veja a rotina das aulas, eventos e a evolução dos nossos alunos no Instagram.</p>
              </div>
            </div>
            <a href="${u}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" title="Abrir perfil no Instagram">
              ${De}
              <span>Ver no Instagram</span>
            </a>
          </div>
        </div>

        <div class="site-section-header">
          <span class="section-tag">INSTRUMENTOS ATENDIDOS</span>
          <h2 class="section-title">Aulas Feitas Para a Sua Evolução</h2>
          <p class="section-subtitle">Do iniciante ao avançado, ensinamos música aos nossos alunos de forma excelente.</p>
        </div>

        <div class="site-courses-grid">
          
          <!-- Violão & Guitarra -->
          <div class="site-course-card">
            <div class="course-icon-badge">🪕</div>
            <h3>Violão &amp; Guitarra</h3>
            <p>Acordes, solos, ritmos, dedilhados e o repertório que você mais ama tocar.</p>
            <ul class="course-topics">
              <li>✓ Postura correta e transição ágil de acordes</li>
              <li>✓ Ritmos populares, Pop, Rock, MPB e solos</li>
              <li>✓ Leitura facilitada de cifras e tablaturas</li>
            </ul>
          </div>

          <!-- Teclado & Piano -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎹</div>
            <h3>Teclado &amp; Piano</h3>
            <p>Independência das mãos, harmonia prática e sensibilidade melódica.</p>
            <ul class="course-topics">
              <li>✓ Digitação, exercícios posturais e escalas</li>
              <li>✓ Noções harmônicas e leitura musical</li>
              <li>✓ Repertório moderno e canções clássicas</li>
            </ul>
          </div>

          <!-- Bateria & Cajón -->
          <div class="site-course-card">
            <div class="course-icon-badge">🥁</div>
            <h3>Bateria &amp; Cajón</h3>
            <p>Pulsação, coordenação motora dos quatro membros e dinâmicas rítmicas.</p>
            <ul class="course-topics">
              <li>✓ Precisão rítmica e rudimentos essenciais</li>
              <li>✓ Levadas e viradas em múltiplos estilos</li>
              <li>✓ Prática no cajón e na bateria acústica</li>
            </ul>
          </div>

          <!-- Contrabaixo -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎸</div>
            <h3>Contrabaixo</h3>
            <p>A condução harmônica e o groove que amarram a harmonia e o ritmo da música.</p>
            <ul class="course-topics">
              <li>✓ Pizzicato, palheta e postura de apoio</li>
              <li>✓ Escalas, arpejos e linhas de baixo marcantes</li>
              <li>✓ Conexão rítmica com a bateria</li>
            </ul>
          </div>

          <!-- Cavaco -->
          <div class="site-course-card">
            <div class="course-icon-badge">🪕</div>
            <h3>Cavaco</h3>
            <p>Palhetadas tradicionais, levadas rítmicas e harmonia para samba e choro.</p>
            <ul class="course-topics">
              <li>✓ Levadas rítmicas e sincopadas</li>
              <li>✓ Acordes e inversões para cavaquinho</li>
              <li>✓ Repertório de Samba, Pagode e MPB</li>
            </ul>
          </div>

          <!-- Canto -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎤</div>
            <h3>Aulas de Canto</h3>
            <p>Técnica vocal, respiração e afinação para cantar com segurança e expressividade.</p>
            <ul class="course-topics">
              <li>✓ Apoio diafragmático e ressonância</li>
              <li>✓ Afinação e extensão vocal sem esforço</li>
              <li>✓ Interpretação e presença musical</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- Seção Proposta Pedagógica -->
    <section class="site-section bg-darker" id="metodologia">
      <div class="site-container">
        <div class="methodology-split">
          <div class="methodology-text">
            <span class="section-tag">NOSSA ESSÊNCIA</span>
            <h2 class="section-title">Onde Vivemos a Música!</h2>
            <p class="section-desc">
              Com aulas adaptadas à sua evolução, ensinamos música aos nossos alunos de forma excelente. Aqui seu sonho musical ganha forma com acompanhamento próximo e dedicado.
            </p>

            <div class="methodology-features">
              <div class="feat-item">
                <div class="feat-icon">🎯</div>
                <div>
                  <h4>Aulas Adaptadas à Sua Evolução</h4>
                  <p>O ensino é moldado de acordo com seu ritmo, facilidade e os estilos musicais que você gosta.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🏠</div>
                <div>
                  <h4>Ambiente Completo e Confortável</h4>
                  <p>Espaço climatizado, aconchegante e com instrumentos preparados para as suas práticas semanais.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🤝</div>
                <div>
                  <h4>Didática Excelente e Prática</h4>
                  <p>Aprenda tocando desde o início, construindo segurança e amor pelo instrumento.</p>
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
                <span class="preview-title">Acusticamente &bull; Gravataí</span>
              </div>
              <div class="preview-body">
                <div class="preview-quote">
                  "A acusticamente é o local onde vivemos a música! Tire seu sonho do papel e venha tocar conosco."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Localização com Mapa -->
    <section class="site-section" id="localizacao">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">ONDE ESTAMOS</span>
          <h2 class="section-title">Nossa Localização</h2>
          <p class="section-subtitle">Venha nos visitar em Gravataí. Fácil acesso e ambiente acolhedor para você e sua família.</p>
        </div>

        <div class="location-grid">
          <div class="location-card">
            <div class="location-item">
              <div class="location-icon">📍</div>
              <div>
                <h4>Endereço</h4>
                <p>${a}</p>
              </div>
            </div>

            <div class="location-item">
              <div class="location-icon">🕒</div>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>${T}</p>
              </div>
            </div>

            <div class="location-item">
              <div class="location-icon">📞</div>
              <div>
                <h4>Telefone &amp; WhatsApp</h4>
                <p>${c}</p>
              </div>
            </div>

            <div class="location-actions">
              <a href="${f}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${be}
                <span>Entrar em contato</span>
              </a>
            </div>
          </div>

          <div class="location-map-box">
            <iframe 
              title="Localização da Acusticamente Escola de Música em Gravataí"
              src="https://maps.google.com/maps?q=Av.+Dorival+C%C3%A2ndido+Luz+de+Oliveira,+5564+-+Santa+Fe,+Gravata%C3%AD+-+RS&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style="border:0; min-height: 280px; width: 100%; border-radius: 12px;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final WhatsApp -->
    <section class="site-cta-banner">
      <div class="site-container cta-banner-inner">
        <h2>Tire Seu Sonho do Papel!</h2>
        <p>Entre em contato agora mesmo pelo WhatsApp e agende sua visita à nossa escola.</p>
        <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${be}
          <span>Entrar em contato</span>
        </a>
      </div>
    </section>

    <!-- Rodapé Completo com Endereço e Instagram -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${le(t.logotipoCustomizado,32)}
            <span>${o}</span>
          </div>
          <p>${s}</p>
          <div class="footer-address">
            <p>
              📍 <a href="${f}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);" title="Ver no Google Maps">
                ${a}
              </a>
            </p>
            <p>📞 <a href="${A}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${c}</a></p>
            <p>🕒 ${T}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Redes Sociais &amp; Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Acompanhe nosso dia a dia ou mande uma mensagem pelo WhatsApp.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${be}
              <span>Entrar em contato</span>
            </a>
            <a href="${u}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" style="display: inline-flex;" title="Instagram @acusticamente.rs">
              ${De}
              <span>Instagram</span>
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
          <span>&copy; ${new Date().getFullYear()} ${s} &bull; Gravataí - RS. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  `,(z=e.querySelector("#btn-header-login"))==null||z.addEventListener("click",()=>{const h=te.isAuthenticated();$(h?"home":"login")}),(r=e.querySelector("#btn-footer-login"))==null||r.addEventListener("click",()=>{const h=te.isAuthenticated();$(h?"home":"login")}),(b=e.querySelector("#site-logo-link"))==null||b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function Ve($){var u,A;const e=document.createElement("div"),t=te.getCurrentUser(),o=L.getStudents(),s=L.getPlans(),c=L.getAppointments(),M=L.getTodayDateString(),a=c.filter(z=>z.data===M),T=o.filter(z=>z.status==="ativo").length,f=a.find(z=>z.status==="agendado");return e.innerHTML=`
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
          <span class="metric-value">${T}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${j.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${f?f.horaInicio:"--:--"}</span>
          <span class="metric-label">${f?"Próxima aula":"Nenhuma pendente"}</span>
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
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(z=>{const r=o.find(x=>x.id===z.alunoId),b=s.find(x=>x.id===z.planoId),h=z.status==="concluido",g=z.status==="agendado";let l='<span class="badge badge-warning">⏳ Agendado</span>';return h?l='<span class="badge badge-success">✓ Concluído</span>':z.status==="falta_justificada"?l='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':z.status==="falta_injustificada"?l='<span class="badge badge-danger">✕ Falta Injustificada</span>':z.status==="cancelado"&&(l='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${z.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${z.horaInicio} - ${z.horaFim}</strong>
                            ${z.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
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
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(b==null?void 0:b.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${l}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${g?`<button class="btn btn-secondary btn-complete-class" data-id="${z.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${h?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(u=e.querySelector("#home-btn-new-appointment"))==null||u.addEventListener("click",()=>{$("agenda")}),(A=e.querySelector("#home-btn-view-all-agenda"))==null||A.addEventListener("click",()=>{$("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(z=>{z.addEventListener("click",r=>{const b=r.currentTarget.dataset.id;b&&(L.updateAppointment(b,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),B("Aula concluída com sucesso!","success"),$("home"))})}),e}function nt($){const e=document.createElement("div"),t=te.getCurrentUser();let o=new Date;function s(){var y,m,S,k;const a=L.getStudents();L.getPlans();const T=L.getAppointments(),f=o.getFullYear(),u=o.getMonth(),A=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],z=new Date(f,u,1).getDay(),r=new Date(f,u+1,0).getDate(),b=new Date(f,u,0).getDate(),h=new Date,g=h.getFullYear()===f&&h.getMonth()===u,l=[];for(let n=z;n>0;n--){const d=b-n+1;l.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${d}</span>
          </div>
        </div>
      `)}for(let n=1;n<=r;n++){const d=N=>N.toString().padStart(2,"0"),v=`${f}-${d(u+1)}-${d(n)}`,i=g&&h.getDate()===n,w=T.filter(N=>N.data===v),I=w.slice(0,3).map(N=>{const C=a.find(V=>V.id===N.alunoId),P=C?C.nome.split(" ")[0]:"Aula";let D="",_="";return N.status==="concluido"?(D="concluido",_="✓ "):N.status==="falta_justificada"?(D="falta-justificada",_="⚠️ "):N.status==="falta_injustificada"?(D="falta-injustificada",_="✕ "):N.tipoAula==="reposicao"&&(D="reposicao",_="🔄 "),`
            <div class="calendar-appointment-badge ${D}" 
                 data-app-id="${N.id}" 
                 title="${N.horaInicio} - ${(C==null?void 0:C.nome)||"Aluno"} (${N.status}${N.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${_}${N.horaInicio}</strong> ${P}
            </div>
          `}).join(""),q=w.length>3?w.length-3:0,O=q>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${q} mais</div>`:"";l.push(`
        <div class="calendar-day-cell ${i?"today":""}" data-date="${v}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${w.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${w.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${I}
            ${O}
          </div>
        </div>
      `)}const x=l.length,p=x>35?42-x:35-x;for(let n=1;n<=p;n++)l.push(`
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
            <h2 class="calendar-month-title">${A[u]} de ${f}</h2>
            
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
            ${ae(t,"agenda","cadastrar")?`
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
    `,(y=e.querySelector("#agenda-btn-prev"))==null||y.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(m=e.querySelector("#agenda-btn-next"))==null||m.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(S=e.querySelector("#agenda-btn-today"))==null||S.addEventListener("click",()=>{o=new Date,s()}),(k=e.querySelector("#agenda-btn-new-app"))==null||k.addEventListener("click",()=>{M()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",d=>{const v=n.dataset.date;v&&c(v)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",d=>{d.stopPropagation();const v=n.dataset.appId,i=T.find(w=>w.id===v);i&&c(i.data)})})}function c(a){const T=L.getStudents(),f=L.getPlans(),u=L.getAppointments().filter(l=>l.data===a),[A,z,r]=a.split("-"),b=`${r}/${z}/${A}`,h=u.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${u.map(l=>{const x=T.find(w=>w.id===l.alunoId),p=f.find(w=>w.id===l.planoId),y=l.status==="concluido",m=l.status==="falta_justificada",S=l.status==="falta_injustificada",k=l.status==="cancelado",n=l.status==="agendado",d=l.tipoAula==="reposicao";let v="var(--color-coral)",i='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return y?(v="var(--status-success)",i='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):m?(v="#f59e0b",i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):S?(v="var(--status-danger)",i='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):k&&(v="var(--border-subtle)",i='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${v};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${l.horaInicio} - ${l.horaFim}</strong>
                        ${i}
                        ${d?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${l.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(x==null?void 0:x.nome)||"Não vinculado"}</strong>
                        ${x!=null&&x.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${x.instrumentoPrincipal}</span>`:""}
                        ${p?` &bull; Plano: <span style="color: #ff9187;">${p.nome}</span>`:""}
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
                      ${ae(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${l.id}" title="Editar Detalhes">
                              ${j.edit}
                            </button>
                          `:""}
                      ${ae(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${l.id}" title="Excluir">
                              ${j.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${ae(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${n?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${l.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${l.id}" data-name="${(x==null?void 0:x.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${l.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${m&&!l.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${l.id}" data-student-id="${l.alunoId}" data-title="${l.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
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
            Compromissos agendados: <strong style="color: var(--text-white);">${u.length}</strong>
          </span>
          ${ae(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${j.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${h}
      </div>
    `;de({title:`Aulas do Dia: ${b}`,bodyHtml:g,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var l;(l=document.getElementById("btn-modal-new-appointment"))==null||l.addEventListener("click",()=>{he(),M({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(x=>{x.addEventListener("click",p=>{const y=p.currentTarget.dataset.id;y&&(L.marcarPresenca(y,(t==null?void 0:t.nome)||"Administrador"),B("Presença confirmada e aula concluída!","success"),s(),c(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(x=>{x.addEventListener("click",p=>{const y=p.currentTarget.dataset.id,m=p.currentTarget.dataset.name;if(!y)return;const S=prompt(`Informe o motivo da falta justificada de ${m} (Ex: Atestado médico, Viagem em família):`);if(S===null)return;const k=L.registrarFalta(y,!0,S,(t==null?void 0:t.nome)||"Administrador");B(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${k.saldoReposicoes}).`,"success"),s(),c(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(x=>{x.addEventListener("click",p=>{const y=p.currentTarget.dataset.id;y&&fe({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{L.registrarFalta(y,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),B("Falta injustificada registrada.","info"),s(),c(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(x=>{x.addEventListener("click",p=>{const y=p.currentTarget,m=y.dataset.id,S=y.dataset.studentId,k=y.dataset.title;he(),M({studentId:S,aulaOriginalId:m,tipoAula:"reposicao",titulo:k?`Reposição: ${k}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(x=>{x.addEventListener("click",p=>{const y=p.currentTarget.dataset.id,m=L.getAppointments().find(S=>S.id===y);m&&(he(),M({existingApp:m}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(x=>{x.addEventListener("click",p=>{const y=p.currentTarget.dataset.id,m=L.getAppointments().find(S=>S.id===y);m&&fe({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${m.titulo}</strong>"?`,onConfirm:()=>{L.deleteAppointment(m.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),s(),c(a)}})})})},50)}function M(a){const T=L.getStudents(),f=L.getPlans(),u=a==null?void 0:a.existingApp,A=!!u,z=(u==null?void 0:u.alunoId)||(a==null?void 0:a.studentId)||"",r=(u==null?void 0:u.data)||(a==null?void 0:a.defaultDate)||L.getTodayDateString(),b=((u==null?void 0:u.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",h=T.map(p=>`<option value="${p.id}" ${z===p.id?"selected":""} data-planoid="${p.planoId||""}">${p.nome} (${p.instrumentoPrincipal||"Geral"})</option>`).join(""),g=f.map(p=>{const y=(p.modulos||[]).reduce((m,S)=>{var k;return m+(((k=S.aulas)==null?void 0:k.length)||0)},0);return`<option value="${p.id}" ${(u==null?void 0:u.planoId)===p.id?"selected":""} data-total-aulas="${y}">${p.nome} (${y} aulas)</option>`}).join("");let l=A||b?"manual":"plano";const x=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!A&&!b?`
              <!-- Seletor de Modo de Agendamento -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px; display: flex; gap: 4px;">
                <button type="button" class="btn btn-sm ${l==="plano"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="plano" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  📚 Gerar pelo Plano Pedagógico
                </button>
                <button type="button" class="btn btn-sm ${l==="manual"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="manual" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  ✏️ Agendamento Manual
                </button>
              </div>
            `:""}

        <!-- PAINEL 1: GERAR PELO PLANO PEDAGÓGICO -->
        <div id="panel-app-plano" style="display: ${l==="plano"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.78rem; color: #fca5a5;">
            💡 <strong>Geração Automática:</strong> As aulas serão agendadas semanalmente na agenda a partir da data de início, cobrindo todos os módulos do plano selecionado.
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-student">Aluno *</label>
            <select id="app-plan-student" class="form-select" required>
              <option value="">Selecione o Aluno...</option>
              ${h}
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-select">Plano Pedagógico *</label>
            <select id="app-plan-select" class="form-select" required>
              <option value="">Selecione o Plano...</option>
              ${g}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-date-start">Data da 1ª Aula *</label>
              <input type="date" id="app-plan-date-start" class="form-input" value="${r}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-time-start">Início *</label>
              <input type="time" id="app-plan-time-start" class="form-input" value="14:00" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-time-end">Fim *</label>
              <input type="time" id="app-plan-time-end" class="form-input" value="15:00" required />
            </div>
          </div>
        </div>

        <!-- PAINEL 2: AGENDAMENTO MANUAL / EDIÇÃO -->
        <div id="panel-app-manual" style="display: ${l==="manual"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <!-- Tipo de Aula -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
            <label class="form-label" style="margin: 0; font-size: 0.82rem; font-weight: 600;">Tipo:</label>
            <div style="display: flex; gap: 14px;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: var(--text-white);">
                <input type="radio" name="app-tipo-aula" value="regular" ${b?"":"checked"} style="accent-color: var(--color-coral);" />
                Regular
              </label>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: #4ade80;">
                <input type="radio" name="app-tipo-aula" value="reposicao" ${b?"checked":""} style="accent-color: #22c55e;" />
                🔄 Reposição
              </label>
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-title">Título *</label>
            <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Introdução" value="${(u==null?void 0:u.titulo)||(a==null?void 0:a.titulo)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-student">Aluno *</label>
              <select id="app-student" class="form-select">
                <option value="">Selecione...</option>
                ${h}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan">Plano</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${g}
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-date">Data *</label>
              <input type="date" id="app-date" class="form-input" value="${r}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-start">Início *</label>
              <input type="time" id="app-time-start" class="form-input" value="${(u==null?void 0:u.horaInicio)||"09:00"}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-end">Fim *</label>
              <input type="time" id="app-time-end" class="form-input" value="${(u==null?void 0:u.horaFim)||"10:00"}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-status">Status *</label>
              <select id="app-status" class="form-select">
                <option value="agendado" ${(u==null?void 0:u.status)==="agendado"?"selected":""}>⏳ Agendado</option>
                <option value="concluido" ${(u==null?void 0:u.status)==="concluido"?"selected":""}>✓ Presente</option>
                <option value="falta_justificada" ${(u==null?void 0:u.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
                <option value="falta_injustificada" ${(u==null?void 0:u.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
                <option value="cancelado" ${(u==null?void 0:u.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;" id="box-justificativa">
              <label class="form-label" for="app-justificativa">Justificativa</label>
              <input type="text" id="app-justificativa" class="form-input" placeholder="Motivo da falta..." value="${(u==null?void 0:u.justificativaFalta)||""}" />
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-obs">Observações</label>
            <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Orientações e conteúdo...">${(u==null?void 0:u.observacoes)||""}</textarea>
          </div>
        </div>

        ${A?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${j.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;de({title:A?"Editar Aula":b?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:x,confirmText:A?"Salvar":"Confirmar",onConfirm:()=>{const p=(t==null?void 0:t.nome)||"Administrador";if(l==="plano"&&!A){const O=document.getElementById("app-plan-student").value,N=document.getElementById("app-plan-select").value,C=document.getElementById("app-plan-date-start").value,P=document.getElementById("app-plan-time-start").value,D=document.getElementById("app-plan-time-end").value;if(!O)return B("Selecione o aluno.","error"),!1;if(!N)return B("Selecione o plano pedagógico.","error"),!1;if(!C||!P||!D)return B("Informe data de início e horários.","error"),!1;const _=L.generateAppointmentsFromPlan(O,N,C,P,D,p);return _.length===0?(B("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(B(`Sucesso! ${_.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const y=document.getElementById("app-title").value.trim(),m=document.getElementById("app-student").value,S=document.getElementById("app-plan").value,k=document.getElementById("app-date").value,n=document.getElementById("app-time-start").value,d=document.getElementById("app-time-end").value,v=document.getElementById("app-status").value,i=document.getElementById("app-justificativa").value.trim(),w=document.getElementById("app-obs").value.trim(),I=document.querySelector('input[name="app-tipo-aula"]:checked'),q=(I==null?void 0:I.value)||"regular";return!y||!m||!k||!n?(B("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1):(A&&u?(L.updateAppointment(u.id,{titulo:y,alunoId:m,planoId:S||void 0,data:k,horaInicio:n,horaFim:d,status:v,tipoAula:q,justificativaFalta:i||void 0,observacoes:w},p),B("Aula atualizada com sucesso!","success")):q==="reposicao"?(L.agendarReposicao({titulo:y,alunoId:m,planoId:S||void 0,data:k,horaInicio:n,horaFim:d,status:v,justificativaFalta:i||void 0,observacoes:w},a==null?void 0:a.aulaOriginalId,p),B("Aula de reposição agendada (1 crédito abatido)!","success")):(L.addAppointment({titulo:y,alunoId:m,planoId:S||void 0,data:k,horaInicio:n,horaFim:d,status:v,tipoAula:q,justificativaFalta:i||void 0,observacoes:w},p),B("Aula agendada com sucesso!","success")),s(),!0)}}),setTimeout(()=>{var k;const p=document.querySelectorAll(".btn-app-mode"),y=document.getElementById("panel-app-plano"),m=document.getElementById("panel-app-manual");p.forEach(n=>{n.addEventListener("click",d=>{const v=d.currentTarget.dataset.mode;l=v,p.forEach(i=>{i.classList.remove("btn-primary"),i.classList.add("btn-secondary")}),d.currentTarget.classList.remove("btn-secondary"),d.currentTarget.classList.add("btn-primary"),y&&(y.style.display=v==="plano"?"flex":"none"),m&&(m.style.display=v==="manual"?"flex":"none")})});const S=document.getElementById("app-plan-student");S==null||S.addEventListener("change",()=>{const n=S.selectedOptions[0],d=n==null?void 0:n.getAttribute("data-planoid");if(d){const v=document.getElementById("app-plan-select");v&&(v.value=d)}}),A&&u&&((k=document.getElementById("btn-delete-app"))==null||k.addEventListener("click",()=>{fe({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${u.titulo}</strong>"?`,onConfirm:()=>{L.deleteAppointment(u.id,(t==null?void 0:t.nome)||"Administrador"),B("Aula removida.","info"),he(),s()}})}))},50)}return s(),e}const rt=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function He($){const e=($||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function it($){if(!$)return"";const e=new Date($+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,`${o} anos`}function Ue($){if(!$)return null;const e=new Date($+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,o}function lt($,e){const t=$.replace(/\D/g,"");if(!t)return"";const o=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function Ye($,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
  `;de({title:`Recibo de Pagamento: ${$.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function dt($){const e=document.createElement("div"),t=te.getCurrentUser();let o="";function s(){var b,h;const a=L.getStudents(),T=L.getPlans(),f=ae(t,"alunos","cadastrar"),u=ae(t,"alunos","alterar"),A=ae(t,"alunos","excluir"),z=a.filter(g=>g.nome.toLowerCase().includes(o.toLowerCase())||g.email.toLowerCase().includes(o.toLowerCase())||g.telefone.includes(o)||g.instrumentoPrincipal&&g.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||g.responsavelNome&&g.responsavelNome.toLowerCase().includes(o.toLowerCase()));e.innerHTML=`
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
          <h3 class="panel-card-title">Alunos Matriculados (${z.length})</h3>
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
              ${z.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':z.map(g=>{const l=T.find(p=>p.id===g.planoId),x=g.status==="ativo";return`
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
                                <span style="font-size: 0.95rem;">${He(g.instrumentoPrincipal)}</span>
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
                                ${(l==null?void 0:l.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${x?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${x?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${g.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${j.profile}
                                </button>
                                ${u?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${g.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${A?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${g.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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
    `;const r=e.querySelector("#student-search-input");r==null||r.addEventListener("input",g=>{o=g.target.value,s();const l=e.querySelector("#student-search-input");l&&(l.focus(),l.selectionStart=l.selectionEnd=l.value.length)}),(b=e.querySelector("#btn-clear-search"))==null||b.addEventListener("click",()=>{o="",s()}),(h=e.querySelector("#btn-new-student"))==null||h.addEventListener("click",()=>{M()}),e.querySelectorAll(".btn-view-student").forEach(g=>{g.addEventListener("click",l=>{const x=l.currentTarget.dataset.id,p=L.getStudents().find(y=>y.id===x);p&&c(p)})}),e.querySelectorAll(".btn-edit-student").forEach(g=>{g.addEventListener("click",l=>{const x=l.currentTarget.dataset.id,p=L.getStudents().find(y=>y.id===x);p&&M(p)})}),e.querySelectorAll(".btn-delete-student").forEach(g=>{g.addEventListener("click",l=>{const x=l.currentTarget.dataset.id,p=L.getStudents().find(y=>y.id===x);p&&fe({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${p.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{L.deleteStudent(p.id,(t==null?void 0:t.nome)||"Administrador"),B(`Aluno "${p.nome}" excluído.`,"info"),s()}})})})}function c(a){L.getPlans().find(n=>n.id===a.planoId);const f=L.getStudentAppointments(a.id),u=L.getStudentPayments(a.id),A=it(a.dataNascimento),z=lt(a.telefone,a.nome),r=a.saldoReposicoes||0,b=L.isStudentOverdue(a.id),h=a.status==="ativo",g=ae(t,"financeiro","alterar"),l=f.length,x=f.filter(n=>n.status==="concluido").length,p=f.filter(n=>n.status==="falta_justificada").length,y=f.filter(n=>n.status==="falta_injustificada").length,m=u.filter(n=>n.status==="pago").reduce((n,d)=>n+d.valor,0),S=u.filter(n=>n.status!=="pago").reduce((n,d)=>n+d.valor,0),k=`
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
                <span class="badge ${h?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${h?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${He(a.instrumentoPrincipal)} ${a.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${a.nivelMusical?a.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${A?`&bull; <span style="color: var(--text-muted);">${A}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${z?`
                  <a href="${z}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
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
              ${b?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${u.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${x}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${p+y}</div>
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
                        ${f.map(n=>{const d=n.data.split("-").reverse().join("/");let v="";n.status==="concluido"?v='<span class="badge badge-success" style="font-size: 0.62rem;">Presente</span>':n.status==="falta_justificada"?v='<span class="badge badge-warning" style="font-size: 0.62rem;">Falta Just.</span>':n.status==="falta_injustificada"?v='<span class="badge badge-danger" style="font-size: 0.62rem;">Falta</span>':n.status==="cancelado"?v='<span class="badge badge-secondary" style="font-size: 0.62rem;">Cancelado</span>':v='<span class="badge badge-secondary" style="font-size: 0.62rem;">Agendado</span>';const i=n.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong>${d}</strong>
                                <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 4px;">${n.horaInicio}</span>
                              </td>
                              <td><div style="color: var(--text-white); font-weight: 500;">${n.titulo}</div></td>
                              <td class="col-hide-sm">${i}</td>
                              <td>${v}</td>
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
              ${b?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
                R$ ${m.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${S>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${S.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${u.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${u.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${u.map(n=>{const d=n.status==="pago",v=n.status==="atrasado";let i="";return d?i='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':v?i='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':i='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${n.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${n.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${n.valor.toFixed(2)}</td>
                              <td>${i}</td>
                              <td class="col-hide-sm">${n.dataPagamento?n.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${d?`
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
    `;de({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:k,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var w;const n=document.getElementById("btn-tab-pedagogico"),d=document.getElementById("btn-tab-financeiro"),v=document.getElementById("panel-tab-pedagogico"),i=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),d==null||d.classList.remove("active"),v&&(v.style.display="flex"),i&&(i.style.display="none")}),d==null||d.addEventListener("click",()=>{d.classList.add("active"),n==null||n.classList.remove("active"),i&&(i.style.display="flex"),v&&(v.style.display="none")}),(w=document.getElementById("btn-quick-schedule-reposicao"))==null||w.addEventListener("click",()=>{he(),$("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(I=>{I.addEventListener("click",q=>{const O=q.currentTarget.dataset.id,N=u.find(C=>C.id===O);N&&Ye(N,a)})}),document.querySelectorAll(".btn-pay-now").forEach(I=>{I.addEventListener("click",q=>{const O=q.currentTarget.dataset.id,N=u.find(D=>D.id===O);if(!N)return;const C=L.getTodayDateString(),P=`
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
                <input type="date" id="baixa-data" class="form-input" value="${C}" required />
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
          `;de({title:`Dar Baixa: ${N.descricao}`,bodyHtml:P,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const D=document.getElementById("baixa-data").value,_=document.getElementById("baixa-forma").value,V=document.getElementById("baixa-obs").value;if(!D)return B("Informe a data de recebimento.","error"),!1;const J=(t==null?void 0:t.nome)||"Administrador";L.darBaixaPayment(N.id,D,_,J,V),B(`Baixa de R$ ${N.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const K=L.getStudents().find(G=>G.id===a.id)||a;return c(K),setTimeout(()=>{var G;(G=document.getElementById("btn-tab-financeiro"))==null||G.click()},50),!0}})})})},50)}function M(a){const T=L.getPlans(),f=!!a;a&&L.getStudentPayments(a.id);const u=T.map(r=>`<option value="${r.id}" ${(a==null?void 0:a.planoId)===r.id?"selected":""} data-valor="${r.valor??280}">${r.nome} - R$ ${(r.valor??280).toFixed(2)}</option>`).join(""),A=rt.map(r=>`<option value="${r}" ${(a==null?void 0:a.instrumentoPrincipal)===r?"selected":""}>${r}</option>`).join(""),z=`
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Seletor de Abas Enxuto -->
        <div class="student-modal-tabs-wrapper">
          <div class="student-modal-tabs-row row-top">
            <button type="button" class="student-tab-pill btn-form-tab active" data-tab="tab-pessoal">
              <span class="student-tab-pill-dot"></span>
              <span>Aluno</span>
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
              <span>Financeiro</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-obs">
              <span class="student-tab-pill-dot"></span>
              <span>Observações</span>
            </button>
          </div>
        </div>

        <!-- ABA 1: ALUNO -->
        <div id="form-panel-tab-pessoal" class="form-tab-panel" style="display: flex; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-nome">Nome *</label>
            <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${(a==null?void 0:a.nome)||""}" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-telefone">Celular *</label>
              <input type="text" id="student-telefone" class="form-input" placeholder="(00) 00000-0000" value="${(a==null?void 0:a.telefone)||""}" maxlength="15" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-cpf">CPF</label>
              <input type="text" id="student-cpf" class="form-input" placeholder="000.000.000-00" value="${(a==null?void 0:a.cpf)||""}" maxlength="14" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nascimento">Nascimento *</label>
              <input type="date" id="student-nascimento" class="form-input" value="${(a==null?void 0:a.dataNascimento)||""}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-email">E-mail</label>
              <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${(a==null?void 0:a.email)||""}" />
            </div>
          </div>
        </div>

        <!-- ABA 2: RESPONSÁVEL -->
        <div id="form-panel-tab-resp" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div id="student-resp-alert" style="display: none; background: rgba(234, 67, 53, 0.12); border: 1px solid rgba(234, 67, 53, 0.35); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.76rem; color: #fca5a5; margin-bottom: 2px;">
            ⚠️ <strong>Aluno menor de 18 anos.</strong> Dados do responsável são obrigatórios.
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-nome">
              Nome <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
            </label>
            <input type="text" id="student-resp-nome" class="form-input" placeholder="Nome do responsável" value="${(a==null?void 0:a.responsavelNome)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
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

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-tel">
                Celular <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
              </label>
              <input type="text" id="student-resp-tel" class="form-input" placeholder="(00) 00000-0000" value="${(a==null?void 0:a.responsavelTelefone)||""}" maxlength="15" />
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-cpf">CPF</label>
            <input type="text" id="student-resp-cpf" class="form-input" placeholder="000.000.000-00" value="${(a==null?void 0:a.responsavelCpf)||""}" maxlength="14" />
          </div>
        </div>

        <!-- ABA 3: PEDAGÓGICO -->
        <div id="form-panel-tab-musica" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione...</option>
                ${A}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nivel">Nível</label>
              <select id="student-nivel" class="form-select">
                <option value="iniciante" ${(a==null?void 0:a.nivelMusical)==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${(a==null?void 0:a.nivelMusical)==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${(a==null?void 0:a.nivelMusical)==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${(a==null?void 0:a.nivelMusical)==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-plano">Plano (com valor fixo)</label>
            <select id="student-plano" class="form-select">
              <option value="">Selecione um plano...</option>
              ${u}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo</label>
              <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${(a==null?void 0:a.moduloAtual)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-status">Status *</label>
              <select id="student-status" class="form-select">
                <option value="ativo" ${(a==null?void 0:a.status)==="ativo"?"selected":""}>Ativo</option>
                <option value="inativo" ${(a==null?void 0:a.status)==="inativo"?"selected":""}>Inativo</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-saldo-reposicoes">Reposições Disponíveis</label>
            <input type="number" id="student-saldo-reposicoes" class="form-input" min="0" max="20" value="${(a==null?void 0:a.saldoReposicoes)??0}" />
          </div>
        </div>

        <!-- ABA 4: FINANCEIRO -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; flex-direction: column; gap: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #fbbf24; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Parâmetros da Mensalidade
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Mensalidade (R$) *</label>
                <input type="number" id="student-valor-mensalidade" class="form-input" min="0" step="10" placeholder="280.00" value="${(a==null?void 0:a.valorMensalidade)??280}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia do Vencimento *</label>
                <input type="number" id="student-dia-vencimento" class="form-input" min="1" max="31" placeholder="10" value="${(a==null?void 0:a.diaVencimento)??10}" required />
              </div>
            </div>

            <div style="font-size: 0.74rem; color: var(--text-secondary); line-height: 1.3;">
              ℹ️ Ao selecionar um plano pedagógico, o valor da mensalidade é preenchido automaticamente.
            </div>
          </div>
        </div>

        <!-- ABA 5: OBSERVAÇÕES -->
        <div id="form-panel-tab-obs" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="student-obs">Observações</label>
            <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Anotações gerais, preferências e histórico...">${(a==null?void 0:a.observacoes)||""}</textarea>
          </div>
        </div>
      </form>
    `;de({title:f?`Editar: ${a.nome}`:"Cadastrar Aluno",bodyHtml:z,modalClass:"modal-lg",confirmText:f?"Salvar":"Cadastrar",onConfirm:()=>{var K,G,Q,Z;const r=document.getElementById("student-nome").value.trim(),b=document.getElementById("student-nascimento").value,h=document.getElementById("student-email").value.trim(),g=document.getElementById("student-telefone").value.trim(),l=((K=document.getElementById("student-cpf"))==null?void 0:K.value.trim())||void 0,x=document.getElementById("student-resp-nome").value.trim(),p=document.getElementById("student-resp-parentesco").value,y=document.getElementById("student-resp-tel").value.trim(),m=((G=document.getElementById("student-resp-cpf"))==null?void 0:G.value.trim())||void 0,S=document.getElementById("student-instrumento").value,k=document.getElementById("student-nivel").value,n=document.getElementById("student-plano").value,d=document.getElementById("student-status").value,v=document.getElementById("student-modulo").value.trim(),i=document.getElementById("student-saldo-reposicoes").value,w=Math.max(0,parseInt(i,10)||0),I=(Q=document.getElementById("student-valor-mensalidade"))==null?void 0:Q.value,q=Math.max(0,parseFloat(I)||280),O=(Z=document.getElementById("student-dia-vencimento"))==null?void 0:Z.value,N=Math.min(31,Math.max(1,parseInt(O,10)||10)),C=document.getElementById("student-obs").value.trim(),P=[];r||P.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),b||P.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),g||P.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),h&&!Je(h)&&P.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const D=Ue(b);D!==null&&D<18&&(x||P.push({label:`Nome do Responsável (Aluno menor de idade: ${D} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),p||P.push({label:`Parentesco do Responsável (Aluno menor de idade: ${D} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),y||P.push({label:`Celular do Responsável (Aluno menor de idade: ${D} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"})),d||P.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!I||isNaN(parseFloat(I))||parseFloat(I)<=0)&&P.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const V=parseInt(O,10);if((!O||isNaN(V)||V<1||V>31)&&P.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),P.length>0){const oe=Y=>{const F=document.querySelectorAll(".btn-form-tab"),se=document.querySelectorAll(".form-tab-panel");F.forEach(W=>{W.dataset.tab===Y?W.classList.add("active"):W.classList.remove("active")}),se.forEach(W=>{W.style.display=W.id===`form-panel-${Y}`?"flex":"none"})},X=document.createElement("div");X.id="student-validation-alert",X.style.cssText=`
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `,X.innerHTML=`
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
                  ${P.map(Y=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${Y.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(X);const ee=X.querySelector("#btn-validation-ok");return ee==null||ee.focus(),ee==null||ee.addEventListener("click",()=>{X.remove();const Y=P[0];oe(Y.tabId),setTimeout(()=>{const F=document.getElementById(Y.fieldId);F&&(F.focus(),F.scrollIntoView({behavior:"smooth",block:"center"}),F.style.outline="2px solid var(--color-coral)",F.style.borderColor="var(--color-coral)",setTimeout(()=>{F.style.outline="",F.style.borderColor=""},3500))},100)}),!1}const J=(t==null?void 0:t.nome)||"Administrador";return f&&a?(L.updateStudent(a.id,{nome:r,dataNascimento:b,email:h,telefone:g,cpf:l,responsavelNome:x,responsavelParentesco:p,responsavelTelefone:y,responsavelCpf:m,instrumentoPrincipal:S,nivelMusical:k,planoId:n,status:d,moduloAtual:v,saldoReposicoes:w,valorMensalidade:q,diaVencimento:N,observacoes:C},J),B("Dados do aluno atualizados com sucesso!","success")):(L.addStudent({nome:r,dataNascimento:b,email:h,telefone:g,cpf:l,responsavelNome:x,responsavelParentesco:p,responsavelTelefone:y,responsavelCpf:m,instrumentoPrincipal:S,nivelMusical:k,planoId:n,status:d,moduloAtual:v,saldoReposicoes:w,valorMensalidade:q,diaVencimento:N,observacoes:C},J),B("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const r=document.querySelectorAll(".btn-form-tab"),b=document.querySelectorAll(".form-tab-panel");r.forEach(n=>{n.addEventListener("click",d=>{const v=d.currentTarget.dataset.tab;r.forEach(i=>{i.classList.remove("active")}),d.currentTarget.classList.add("active"),b.forEach(i=>{i.style.display=i.id===`form-panel-${v}`?"flex":"none"})})});const h=document.getElementById("student-cpf");h&&ve(h,qe);const g=document.getElementById("student-telefone");g&&ve(g,ze);const l=document.getElementById("student-resp-cpf");l&&ve(l,qe);const x=document.getElementById("student-resp-tel");x&&ve(x,ze);const p=document.getElementById("student-plano");p==null||p.addEventListener("change",()=>{const n=p.selectedOptions[0];if(n){const d=n.getAttribute("data-valor"),v=document.getElementById("student-valor-mensalidade");d&&v&&(v.value=d)}});const y=document.getElementById("student-nascimento"),m=document.getElementById("student-resp-alert"),S=document.querySelectorAll(".resp-req-star"),k=()=>{const n=y==null?void 0:y.value,d=Ue(n),v=d!==null&&d<18;m&&(m.style.display=v?"block":"none",v&&(m.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${d} anos).</strong> Dados do responsável são obrigatórios.`)),S.forEach(i=>{i.style.display=v?"inline":"none"})};y==null||y.addEventListener("input",k),y==null||y.addEventListener("change",k),k()},50)}return s(),e}const ue=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Ge=ue.reduce(($,e)=>$+e.items.length,0);function ct($){let e=0;return ue.forEach(t=>{const o=$[t.key];o&&t.items.forEach(s=>{o[s.key]&&e++})}),e}function pt($){var M;const e=document.createElement("div"),t=te.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(M=e.querySelector("#btn-unauth-home"))==null||M.addEventListener("click",()=>$("home")),e;let o="";function s(){var A,z;const a=L.getUsers(),T=o.toLowerCase(),f=a.filter(r=>r.nome.toLowerCase().includes(T)||r.login.toLowerCase().includes(T)||r.papel.toLowerCase().includes(T));e.innerHTML=`
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
              ${f.map(r=>{const b=r.papel==="admin"?"Administrador":r.papel==="professor"?"Professor":"Atendente",h=Ie(r),g=ct(h);return`
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
                          ${b}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${r.papel==="admin"?"badge-coral":g>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${r.papel==="admin"?`Acesso Total (${Ge})`:`${g} de ${Ge} ações`}
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
    `,(A=e.querySelector("#btn-new-user"))==null||A.addEventListener("click",()=>{c()});const u=e.querySelector("#user-search-input");u&&u.addEventListener("input",r=>{o=r.target.value,s();const b=e.querySelector("#user-search-input");b&&(b.focus(),b.setSelectionRange(b.value.length,b.value.length))}),(z=e.querySelector("#btn-clear-search"))==null||z.addEventListener("click",()=>{o="",s()}),e.querySelectorAll(".btn-edit-user").forEach(r=>{r.addEventListener("click",b=>{const h=b.currentTarget.dataset.id,g=L.getUsers().find(l=>l.id===h);g&&c(g)})}),e.querySelectorAll(".btn-delete-user").forEach(r=>{r.addEventListener("click",b=>{const h=b.currentTarget.dataset.id,g=L.getUsers().find(l=>l.id===h);g&&fe({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${g.nome}</strong>" (login: <code>${g.login}</code>)?`,onConfirm:()=>{try{L.deleteUser(g.id,(t==null?void 0:t.nome)||"Administrador"),B(`Usuário "${g.nome}" excluído.`,"info"),s()}catch(l){B(l.message||"Erro ao excluir usuário.","error")}}})})})}function c(a){var l,x,p,y;const T=!!a,f=a?a.papel:"professor",u=f==="admin",A=Ie(a),z=`
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
            <input type="password" id="user-senha" class="form-input" placeholder="${T?"Nova senha":"Ex: 123456"}" value="${(a==null?void 0:a.senha)||""}" required />
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
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${u?"none":"block"};">
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
            ${ue.map(m=>{const S=A[m.key]||{},k=m.items.filter(n=>S[n.key]).length;return`
                <div class="perm-group-card" id="card-group-${m.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${m.key}" 
                    data-group="${m.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${m.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${m.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${m.title}
                        </strong>
                        <span id="group-counter-${m.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${k}/${m.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${m.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${m.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${m.items.map(n=>{const d=!!S[n.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${m.key}-${n.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${d?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${d?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${m.key}-${n.key}" 
                                data-group="${m.key}" 
                                data-action="${n.key}" 
                                ${d?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${n.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${m.key}-${n.key}" 
                              class="badge ${d?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${d?"Liberado":"Bloqueado"}
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
    `;de({title:T?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:z,modalClass:"modal-lg",confirmText:T?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var I,q,O,N,C,P,D,_,V,J,K,G,Q,Z,oe,X,ee,Y,F,se,W,me;const m=document.getElementById("user-nome").value.trim(),S=document.getElementById("user-login").value.trim(),k=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),d=n?n.value:"professor";if(!m||!S||!k)return B("Preencha Nome, Login e Senha.","error"),!1;if(L.getUsers().find(R=>R.login===S&&R.id!==(a==null?void 0:a.id)))return B(`O login "${S}" já está em uso por outro usuário.`,"error"),!1;let i;d==="admin"?i=JSON.parse(JSON.stringify(ge.admin)):i={alunos:{acesso:((I=document.getElementById("perm-alunos-acesso"))==null?void 0:I.checked)??!1,cadastrar:((q=document.getElementById("perm-alunos-cadastrar"))==null?void 0:q.checked)??!1,alterar:((O=document.getElementById("perm-alunos-alterar"))==null?void 0:O.checked)??!1,excluir:((N=document.getElementById("perm-alunos-excluir"))==null?void 0:N.checked)??!1},agenda:{acesso:((C=document.getElementById("perm-agenda-acesso"))==null?void 0:C.checked)??!1,cadastrar:((P=document.getElementById("perm-agenda-cadastrar"))==null?void 0:P.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((_=document.getElementById("perm-agenda-excluir"))==null?void 0:_.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((J=document.getElementById("perm-planos-cadastrar"))==null?void 0:J.checked)??!1,alterar:((K=document.getElementById("perm-planos-alterar"))==null?void 0:K.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((Q=document.getElementById("perm-financeiro-acesso"))==null?void 0:Q.checked)??!1,cadastrar:((Z=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:Z.checked)??!1,alterar:((oe=document.getElementById("perm-financeiro-alterar"))==null?void 0:oe.checked)??!1,excluir:((X=document.getElementById("perm-financeiro-excluir"))==null?void 0:X.checked)??!1},relatorios:{acesso:((ee=document.getElementById("perm-relatorios-acesso"))==null?void 0:ee.checked)??!1,gerar:((Y=document.getElementById("perm-relatorios-gerar"))==null?void 0:Y.checked)??!1},home:{acesso:((F=document.getElementById("perm-home-acesso"))==null?void 0:F.checked)??!1},auditoria:{acesso:((se=document.getElementById("perm-auditoria-acesso"))==null?void 0:se.checked)??!1},configuracoes:{acesso:((W=document.getElementById("perm-configuracoes-acesso"))==null?void 0:W.checked)??!1,alterar:((me=document.getElementById("perm-configuracoes-alterar"))==null?void 0:me.checked)??!1}};const w=(t==null?void 0:t.nome)||"Administrador";return T&&a?(L.updateUser(a.id,{nome:m,login:S,senha:k,papel:a.isSistema?"admin":d,permissoes:a.isSistema?ge.admin:i},w),B("Usuário e permissões atualizados com sucesso!","success")):(L.addUser({nome:m,login:S,senha:k,papel:d,permissoes:i},w),B("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const r=document.getElementById("user-papel"),b=document.getElementById("user-permissions-section"),h=(m,S,k)=>{const n=document.getElementById(`row-perm-${m}-${S}`),d=document.getElementById(`badge-perm-${m}-${S}`);n&&d&&(k?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",d.className="badge badge-success",d.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",d.className="badge badge-coral",d.textContent="Bloqueado")),g(m)},g=m=>{const S=document.getElementById(`group-counter-${m}`),k=ue.find(n=>n.key===m);if(S&&k){let n=0;k.items.forEach(d=>{const v=document.getElementById(`perm-${m}-${d.key}`);v&&v.checked&&n++}),S.textContent=`${n}/${k.items.length} liberadas`}};r==null||r.addEventListener("change",()=>{const m=r.value;if(m==="admin")b.style.display="none";else if(b.style.display="block",!T){const S=ge[m]||ge.professor;ue.forEach(k=>{k.items.forEach(n=>{var v;const d=document.getElementById(`perm-${k.key}-${n.key}`);if(d){const i=((v=S[k.key])==null?void 0:v[n.key])??!1;d.checked=i,h(k.key,n.key,i)}})})}}),ue.forEach(m=>{const S=document.getElementById(`header-group-${m.key}`),k=document.getElementById(`group-body-${m.key}`),n=document.getElementById(`arrow-perm-${m.key}`);S==null||S.addEventListener("click",d=>{if(!d.target.closest(".btn-group-toggle")&&k&&n){const v=k.style.display==="flex";k.style.display=v?"none":"flex",n.style.transform=v?"rotate(0deg)":"rotate(180deg)"}}),m.items.forEach(d=>{const v=document.getElementById(`perm-${m.key}-${d.key}`);v==null||v.addEventListener("change",()=>{if(h(m.key,d.key,v.checked),v.checked&&d.key!=="acesso"){const i=document.getElementById(`perm-${m.key}-acesso`);i&&!i.checked&&(i.checked=!0,h(m.key,"acesso",!0))}!v.checked&&d.key==="acesso"&&m.items.forEach(i=>{if(i.key!=="acesso"){const w=document.getElementById(`perm-${m.key}-${i.key}`);w&&w.checked&&(w.checked=!1,h(m.key,i.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${m.key}"]`).forEach(d=>{d.addEventListener("click",v=>{v.stopPropagation();const i=m.items.map(I=>document.getElementById(`perm-${m.key}-${I.key}`)).filter(Boolean),w=i.every(I=>I.checked);i.forEach(I=>{I.checked=!w,h(m.key,I.dataset.action,!w)})})})}),(l=document.getElementById("btn-perm-expand"))==null||l.addEventListener("click",()=>{ue.forEach(m=>{const S=document.getElementById(`group-body-${m.key}`),k=document.getElementById(`arrow-perm-${m.key}`);S&&k&&(S.style.display="flex",k.style.transform="rotate(180deg)")})}),(x=document.getElementById("btn-perm-collapse"))==null||x.addEventListener("click",()=>{ue.forEach(m=>{const S=document.getElementById(`group-body-${m.key}`),k=document.getElementById(`arrow-perm-${m.key}`);S&&k&&(S.style.display="none",k.style.transform="rotate(0deg)")})}),(p=document.getElementById("btn-perm-all"))==null||p.addEventListener("click",()=>{ue.forEach(m=>{m.items.forEach(S=>{const k=document.getElementById(`perm-${m.key}-${S.key}`);k&&(k.checked=!0,h(m.key,S.key,!0))})})}),(y=document.getElementById("btn-perm-none"))==null||y.addEventListener("click",()=>{ue.forEach(m=>{m.items.forEach(S=>{const k=document.getElementById(`perm-${m.key}-${S.key}`);k&&(k.checked=!1,h(m.key,S.key,!1))})})})}return s(),e}function ut($){const e=document.createElement("div"),t=te.getCurrentUser();let o="";const s=ae(t,"planos","cadastrar"),c=ae(t,"planos","alterar"),M=ae(t,"planos","excluir");function a(){var z,r;const u=L.getPlans().filter(b=>{const h=o.toLowerCase();return b.nome.toLowerCase().includes(h)||b.descricao&&b.descricao.toLowerCase().includes(h)});e.innerHTML=`
      <!-- Cabeçalho -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estrutura pedagógica em 3 níveis: Planos &bull; Módulos &bull; Aulas.
          </p>
        </div>

        ${s?`
              <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                ${j.plus} Novo Plano
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
            placeholder="Buscar plano..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${j.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Tabela Padronizada -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Cadastrados (${u.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Plano</th>
                <th style="width: 130px;">Valor Fixo</th>
                <th class="col-hide-sm" style="width: 160px; text-align: center;">Estrutura</th>
                <th class="col-hide-md">Descrição</th>
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${u.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${o?"Nenhum plano encontrado.":"Nenhum plano cadastrado."}
                      </td>
                    </tr>
                  `:u.map(b=>{const h=(b.modulos||[]).length,g=(b.modulos||[]).reduce((x,p)=>{var y;return x+(((y=p.aulas)==null?void 0:y.length)||0)},0),l=typeof b.valor=="number"?`R$ ${b.valor.toFixed(2)}`:"R$ 280,00";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${j.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${b.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span style="font-weight: 700; color: #34d399; font-size: 0.88rem;">
                                ${l}
                              </span>
                              <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">/mês</span>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${h} ${h===1?"módulo":"módulos"}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${g} ${g===1?"aula":"aulas"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${b.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${c?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${b.id}" title="Editar Plano, Módulos e Aulas">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${M?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${b.id}" title="Excluir Plano">
                                        ${j.trash}
                                      </button>
                                    `:""}
                                ${!c&&!M?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(z=e.querySelector("#btn-new-plan"))==null||z.addEventListener("click",()=>{T()});const A=e.querySelector("#plan-search-input");A&&A.addEventListener("input",b=>{o=b.target.value,a();const h=e.querySelector("#plan-search-input");h&&(h.focus(),h.setSelectionRange(h.value.length,h.value.length))}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{o="",a()}),e.querySelectorAll(".btn-edit-plan").forEach(b=>{b.addEventListener("click",h=>{const g=h.currentTarget.dataset.id,l=L.getPlans().find(x=>x.id===g);l&&T(l)})}),e.querySelectorAll(".btn-delete-plan").forEach(b=>{b.addEventListener("click",h=>{const g=h.currentTarget.dataset.id,l=L.getPlans().find(x=>x.id===g);l&&fe({title:"Excluir Plano",message:`Tem certeza que deseja excluir o plano "<strong>${l.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{L.deletePlan(l.id,(t==null?void 0:t.nome)||"Administrador"),B(`Plano "${l.nome}" excluído.`,"info"),a()}})})})}function T(f){const u=!!f;let A=f?JSON.parse(JSON.stringify(f.modulos||[])):[];A.forEach(g=>{Array.isArray(g.aulas)||(g.aulas=[])});function z(){return A.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo cadastrado ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo acima e clique em "+ Adicionar Módulo".
            </span>
          </div>
        `:A.map((g,l)=>`
            <div class="module-card-item" data-midx="${l}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-bottom: 8px;">
              <!-- Cabeçalho do Módulo (Nível 2) -->
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                  ${String(l+1).padStart(2,"0")}
                </div>

                <input 
                  type="text" 
                  class="module-title-input" 
                  data-midx="${l}" 
                  value="${g.titulo}" 
                  placeholder="Título do módulo..." 
                  style="flex: 1; background: rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
                />

                <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-icon-only btn-move-up" 
                    data-midx="${l}" 
                    title="Mover para Cima" 
                    style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem;"
                    ${l===0?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                  >
                    ▲
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-icon-only btn-move-down" 
                    data-midx="${l}" 
                    title="Mover para Baixo" 
                    style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem;"
                    ${l===A.length-1?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                  >
                    ▼
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-danger btn-icon-only btn-remove-module" 
                    data-midx="${l}" 
                    title="Excluir Módulo" 
                    style="width: 26px; height: 26px; padding: 0; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                  >
                    ${j.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo (Nível 3) -->
              <div style="padding-left: 20px; border-left: 2px solid rgba(234, 67, 53, 0.2); display: flex; flex-direction: column; gap: 6px;">
                <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">
                  Aulas deste Módulo (${g.aulas.length}):
                </div>

                ${g.aulas.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 2px 0;">Nenhuma aula cadastrada neste módulo.</div>':""}
                ${g.aulas.map((x,p)=>`
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.72rem; color: #60a5fa; font-weight: 700; width: 44px; flex-shrink: 0;">
                          Aula ${p+1}:
                        </span>
                        <input 
                          type="text" 
                          class="lesson-title-input" 
                          data-midx="${l}" 
                          data-aidx="${p}" 
                          value="${x.titulo}" 
                          placeholder="Título da aula..." 
                          style="flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 4px; color: var(--text-white); font-size: 0.8rem; padding: 4px 8px;"
                        />
                        <button 
                          type="button" 
                          class="btn btn-secondary btn-icon-only btn-remove-lesson" 
                          data-midx="${l}" 
                          data-aidx="${p}" 
                          title="Excluir Aula" 
                          style="width: 22px; height: 22px; padding: 0; font-size: 0.65rem; color: #f87171; border-color: rgba(239, 68, 68, 0.2);"
                        >
                          ✕
                        </button>
                      </div>
                    `).join("")}

                <!-- Adicionar Aula Rápida no Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="quick-add-lesson-input" 
                    data-midx="${l}" 
                    placeholder="Título da nova aula..." 
                    style="flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 4px; color: var(--text-white); font-size: 0.78rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-quick-add-lesson" 
                    data-midx="${l}" 
                    style="padding: 4px 10px; font-size: 0.74rem;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `).join("")}const r=`
      <form id="plan-modal-form" style="display: flex; flex-direction: column; gap: 12px;">
        
        <!-- Nível 1: Plano -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-coral); letter-spacing: 0.05em; margin-bottom: 10px;">
            🎼 1. Informações do Plano
          </div>

          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-nome" style="font-size: 0.78rem;">Nome *</label>
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
              <label class="form-label" for="plan-valor" style="font-size: 0.78rem;">Valor Fixo (R$) *</label>
              <input 
                type="number" 
                id="plan-valor" 
                class="form-input" 
                placeholder="Ex: 280.00" 
                step="5" 
                min="0" 
                value="${(f==null?void 0:f.valor)!==void 0?f.valor:""}" 
                required 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>
          </div>

          <div class="form-group" style="margin-top: 10px; margin-bottom: 0;">
            <label class="form-label" for="plan-desc" style="font-size: 0.78rem;">Descrição</label>
            <input 
              type="text" 
              id="plan-desc" 
              class="form-input" 
              placeholder="Ex: Prática instrumental do básico ao intermediário" 
              value="${(f==null?void 0:f.descricao)||""}" 
              style="padding: 7px 10px; font-size: 0.84rem;"
            />
          </div>
        </div>

        <!-- Níveis 2 e 3: Módulos & Aulas -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.84rem; font-weight: 700; color: var(--text-white);">📚 2. Módulos &bull; 3. Aulas do Módulo</span>
              <span id="modules-counter-badge" class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 8px;">
                ${A.length} módulos
              </span>
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted);">
              Use ▲ ▼ para reordenar
            </span>
          </div>

          <!-- Barra de Adicionar Módulo -->
          <div style="display: flex; gap: 8px; margin-bottom: 10px;">
            <input 
              type="text" 
              id="quick-add-module-input" 
              class="form-input" 
              placeholder="Nome do novo módulo (ex: Módulo 3: Escalas e Solo)..." 
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

          <!-- Lista de Módulos e Aulas -->
          <div 
            id="modules-list-container" 
            style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${z()}
          </div>
        </div>

      </form>
    `;de({title:u?`Editar: ${f.nome}`:"Cadastrar Plano de Ensino",bodyHtml:r,modalClass:"modal-lg",confirmText:u?"Salvar":"Cadastrar",onConfirm:()=>{const g=document.getElementById("plan-nome").value.trim(),l=document.getElementById("plan-valor").value,x=parseFloat(l),p=isNaN(x)?0:x,y=document.getElementById("plan-desc").value.trim(),m=A.map((k,n)=>{const d=(k.aulas||[]).map((v,i)=>({id:v.id||`aul_${n+1}_${i+1}_${Date.now()}`,ordem:i+1,titulo:v.titulo.trim()})).filter(v=>v.titulo.length>0);return{id:k.id||"mod_"+(n+1)+"_"+Date.now(),ordem:n+1,titulo:k.titulo.trim(),aulas:d}}).filter(k=>k.titulo.length>0);if(!g)return B("Informe o nome do plano de ensino.","error"),!1;if(isNaN(x)||x<=0)return B("Informe o valor fixo da mensalidade do plano.","error"),!1;if(m.length===0)return B("Adicione pelo menos um módulo ao plano.","error"),!1;const S=(t==null?void 0:t.nome)||"Administrador";return u&&f?(L.updatePlan(f.id,{nome:g,descricao:y,valor:p,modulos:m},S),B("Plano atualizado com sucesso!","success")):(L.addPlan({nome:g,descricao:y,valor:p,modulos:m},S),B("Plano cadastrado com sucesso!","success")),a(),!0}});function b(){const g=document.getElementById("modules-list-container"),l=document.getElementById("modules-counter-badge");g&&(l&&(l.textContent=`${A.length} ${A.length===1?"módulo":"módulos"}`),g.innerHTML=z(),g.querySelectorAll(".module-title-input").forEach(x=>{x.addEventListener("input",p=>{const y=parseInt(p.target.getAttribute("data-midx")||"0",10);A[y]&&(A[y].titulo=p.target.value)})}),g.querySelectorAll(".lesson-title-input").forEach(x=>{x.addEventListener("input",p=>{var S;const y=parseInt(p.target.getAttribute("data-midx")||"0",10),m=parseInt(p.target.getAttribute("data-aidx")||"0",10);(S=A[y])!=null&&S.aulas[m]&&(A[y].aulas[m].titulo=p.target.value)})}),g.querySelectorAll(".btn-move-up:not([disabled])").forEach(x=>{x.addEventListener("click",p=>{const y=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10);if(y>0){const m=A[y];A[y]=A[y-1],A[y-1]=m,A.forEach((S,k)=>S.ordem=k+1),b()}})}),g.querySelectorAll(".btn-move-down:not([disabled])").forEach(x=>{x.addEventListener("click",p=>{const y=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10);if(y<A.length-1){const m=A[y];A[y]=A[y+1],A[y+1]=m,A.forEach((S,k)=>S.ordem=k+1),b()}})}),g.querySelectorAll(".btn-remove-module").forEach(x=>{x.addEventListener("click",p=>{const y=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10);A.splice(y,1),A.forEach((m,S)=>m.ordem=S+1),b()})}),g.querySelectorAll(".btn-remove-lesson").forEach(x=>{x.addEventListener("click",p=>{var S;const y=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10),m=parseInt(p.currentTarget.getAttribute("data-aidx")||"0",10);(S=A[y])!=null&&S.aulas&&(A[y].aulas.splice(m,1),A[y].aulas.forEach((k,n)=>k.ordem=n+1),b())})}),g.querySelectorAll(".btn-quick-add-lesson").forEach(x=>{x.addEventListener("click",p=>{const y=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10),m=g.querySelector(`.quick-add-lesson-input[data-midx="${y}"]`),S=m==null?void 0:m.value.trim();if(!S){B("Informe o título da aula.","info"),m==null||m.focus();return}A[y].aulas||(A[y].aulas=[]);const k=A[y].aulas.length+1;A[y].aulas.push({id:`aul_${A[y].id}_${k}_${Date.now()}`,ordem:k,titulo:S}),b()})}))}function h(){const g=document.getElementById("quick-add-module-input");if(!g)return;const l=g.value.trim();if(!l){B("Digite o nome do módulo para adicionar.","info"),g.focus();return}const x=A.length+1;A.push({id:"mod_"+x+"_"+Date.now(),ordem:x,titulo:l,aulas:[]}),g.value="",b(),g.focus();const p=document.getElementById("modules-list-container");p&&(p.scrollTop=p.scrollHeight)}setTimeout(()=>{const g=document.getElementById("btn-quick-add-module"),l=document.getElementById("quick-add-module-input");g==null||g.addEventListener("click",()=>{h()}),l==null||l.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),h())}),b()},50)}return a(),e}function mt($){const e=document.createElement("div"),t=te.getCurrentUser();let o="",s="todos",c=new Date;const M=ae(t,"financeiro","cadastrar"),a=ae(t,"financeiro","alterar"),T=ae(t,"financeiro","excluir");function f(){var d,v,i,w,I,q,O,N;const r=L.getPayments(),b=L.getStudents(),h=new Date,g=c!==null&&h.getMonth()===c.getMonth()&&h.getFullYear()===c.getFullYear(),l=c?`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`:"",x=r.filter(C=>C.status==="pago").reduce((C,P)=>C+P.valor,0),p=r.filter(C=>C.status==="pendente").reduce((C,P)=>C+P.valor,0),y=r.filter(C=>C.status==="atrasado").reduce((C,P)=>C+P.valor,0),m=b.filter(C=>C.status==="ativo"&&L.isStudentOverdue(C.id)),S=r.filter(C=>{const P=b.find(G=>G.id===C.alunoId),D=P?P.nome.toLowerCase():"",_=C.descricao.toLowerCase(),V=D.includes(o.toLowerCase())||_.includes(o.toLowerCase())||C.mesReferencia&&C.mesReferencia.includes(o),J=s==="todos"||C.status===s,K=!l||C.mesReferencia===l||C.dataVencimento.startsWith(l);return V&&J&&K});e.innerHTML=`
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
          ${M?`
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
            R$ ${x.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(C=>C.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${p.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(C=>C.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${y.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(C=>C.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${m.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${b.filter(C=>C.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${m.length===0?"✓ 100% em dia":"Requer acompanhamento"}
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Período (Mês) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${c?`Mensalidade / ${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`:"Todas as Mensalidades"}
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
          <button type="button" class="btn ${c===null?"btn-primary":"btn-secondary"}" id="fin-btn-all-months" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os lançamentos sem filtrar por mês">
            Ver Todos
          </button>
        </div>
      </div>

      <!-- Barra de Filtros Rápidos por Botão -->
      <div style="margin-bottom: 12px; display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
        <button type="button" class="btn btn-sm ${s==="todos"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="todos" style="font-size: 0.76rem; padding: 6px 12px;">
          Todos (${r.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="atrasado"?"btn-danger":"btn-secondary"} btn-quick-filter" data-status="atrasado" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="atrasado"?"color: #f87171; border-color: rgba(239, 68, 68, 0.3);":""}">
          ⚠️ Inadimplentes (${m.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${r.filter(C=>C.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${r.filter(C=>C.status==="pago").length})
        </button>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 240px;">
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

        <div style="min-width: 140px;">
          <select id="fin-status-filter" class="form-select">
            <option value="todos" ${s==="todos"?"selected":""}>Todos os Status</option>
            <option value="pago" ${s==="pago"?"selected":""}>✓ Pagos</option>
            <option value="pendente" ${s==="pendente"?"selected":""}>⏳ Pendentes</option>
            <option value="atrasado" ${s==="atrasado"?"selected":""}>⚠️ Atrasados</option>
          </select>
        </div>
      </div>

      ${s==="atrasado"&&m.length>0?`
            <!-- Painel de Inadimplência Responsivo e Otimizado -->
            <div style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-md); padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                <div style="font-size: 0.88rem; font-weight: 700; color: #f87171; display: flex; align-items: center; gap: 8px;">
                  <span>⚠️</span> Painel de Alunos Inadimplentes (${m.length})
                </div>
                <span style="font-size: 0.74rem; color: var(--text-muted);">
                  Acesso rápido para contato e regularização
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                ${m.map(C=>{const P=r.filter(G=>G.alunoId===C.id&&G.status==="atrasado"),D=P.reduce((G,Q)=>G+Q.valor,0),_=(C.telefone||"").replace(/\D/g,""),V=_.length<=11?`55${_}`:_,J=encodeURIComponent(`Olá, ${C.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),K=_?`https://wa.me/${V}?text=${J}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${C.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${P.length} fatura(s) atrasada(s) &bull; R$ ${D.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${C.telefone||"Sem telefone"}
                          </div>
                        </div>
                        ${K?`
                              <a href="${K}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; padding: 4px 8px; flex-shrink: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
                                ${j.whatsapp} Cobrar
                              </a>
                            `:""}
                      </div>
                    `}).join("")}
              </div>
            </div>
          `:""}

      <!-- Tabela Principal de Pagamentos -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Lançamentos Financeiros (${S.length})</h3>
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
              ${S.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':S.map(C=>{const P=b.find(J=>J.id===C.alunoId),D=C.status==="pago",_=C.status==="atrasado";let V="";return D?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':_?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${P!=null&&P.nome?P.nome[0]:"?"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${(P==null?void 0:P.nome)||"Aluno não identificado"}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${C.descricao}${C.mesReferencia?` / ${C.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${_?"#f87171":"var(--text-white)"}; font-weight: ${_?"700":"normal"};">
                                ${C.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${C.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!D&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${C.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${j.check}
                                      </button>
                                    `:""}

                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${C.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${C.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${j.edit}
                                      </button>
                                    `:""}

                                ${T?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${C.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(d=e.querySelector("#fin-btn-prev-month"))==null||d.addEventListener("click",()=>{c||(c=new Date),c=new Date(c.getFullYear(),c.getMonth()-1,1),f()}),(v=e.querySelector("#fin-btn-next-month"))==null||v.addEventListener("click",()=>{c||(c=new Date),c=new Date(c.getFullYear(),c.getMonth()+1,1),f()}),(i=e.querySelector("#fin-btn-current-month"))==null||i.addEventListener("click",()=>{c=new Date,f()}),(w=e.querySelector("#fin-btn-all-months"))==null||w.addEventListener("click",()=>{c=null,f()});const k=e.querySelector("#fin-search-input");k==null||k.addEventListener("input",C=>{o=C.target.value,f();const P=e.querySelector("#fin-search-input");P&&(P.focus(),P.selectionStart=P.selectionEnd=P.value.length)}),(I=e.querySelector("#btn-clear-fin-search"))==null||I.addEventListener("click",()=>{o="",f()});const n=e.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,f()}),e.querySelectorAll(".btn-quick-filter").forEach(C=>{C.addEventListener("click",P=>{s=P.currentTarget.dataset.status,f()})}),(q=e.querySelector("#btn-limpar-status"))==null||q.addEventListener("click",()=>{s="todos",f()}),(O=e.querySelector("#btn-gerar-lote"))==null||O.addEventListener("click",()=>{A()}),(N=e.querySelector("#btn-novo-lancamento"))==null||N.addEventListener("click",()=>{z()}),e.querySelectorAll(".btn-action-baixa").forEach(C=>{C.addEventListener("click",P=>{const D=P.currentTarget.dataset.id,_=r.find(V=>V.id===D);_&&u(_)})}),e.querySelectorAll(".btn-action-recibo").forEach(C=>{C.addEventListener("click",P=>{const D=P.currentTarget.dataset.id,_=r.find(V=>V.id===D);if(_){const V=b.find(J=>J.id===_.alunoId);V&&Ye(_,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(C=>{C.addEventListener("click",P=>{const D=P.currentTarget.dataset.id,_=r.find(V=>V.id===D);_&&z(_)})}),e.querySelectorAll(".btn-action-delete").forEach(C=>{C.addEventListener("click",P=>{const D=P.currentTarget.dataset.id,_=r.find(V=>V.id===D);_&&fe({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${_.descricao}</strong>" no valor de <strong>R$ ${_.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{L.deletePayment(_.id,(t==null?void 0:t.nome)||"Administrador"),B("Lançamento excluído com sucesso!","info"),f()}})})})}function u(r){const b=L.getStudents().find(l=>l.id===r.alunoId),h=L.getTodayDateString(),g=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${r.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${r.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(b==null?void 0:b.nome)||"N/A"}</strong> &bull; Vencimento: ${r.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${h}" required />
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
    `;de({title:"Confirmar Baixa de Pagamento",bodyHtml:g,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const l=document.getElementById("modal-baixa-data").value,x=document.getElementById("modal-baixa-forma").value,p=document.getElementById("modal-baixa-obs").value;return l?(L.darBaixaPayment(r.id,l,x,(t==null?void 0:t.nome)||"Administrador",p),B(`Baixa efetuada com sucesso! R$ ${r.valor.toFixed(2)} recebido.`,"success"),f(),!0):(B("Informe a data de recebimento.","error"),!1)}})}function A(){const r=new Date,b=r.getFullYear(),h=r.getMonth()+1,g=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${b}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${h===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${h===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${h===3?"selected":""}>03 - Março</option>
              <option value="4" ${h===4?"selected":""}>04 - Abril</option>
              <option value="5" ${h===5?"selected":""}>05 - Maio</option>
              <option value="6" ${h===6?"selected":""}>06 - Junho</option>
              <option value="7" ${h===7?"selected":""}>07 - Julho</option>
              <option value="8" ${h===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${h===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${h===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${h===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${h===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;de({title:"Gerar Mensalidades em Lote",bodyHtml:g,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const l=parseInt(document.getElementById("lote-ano").value,10),x=parseInt(document.getElementById("lote-mes").value,10);if(!l||!x)return B("Selecione ano e mês válidos.","error"),!1;const p=L.gerarMensalidadesMes(l,x,(t==null?void 0:t.nome)||"Administrador");return p.criadas===0&&p.puladas>0?B(`Todas as ${p.puladas} mensalidades deste mês já estavam criadas!`,"info"):B(`Sucesso: ${p.criadas} mensalidade(s) gerada(s)! (${p.puladas} já existentes puladas)`,"success"),f(),!0}})}function z(r){const b=!!r,h=L.getStudents(),g=L.getTodayDateString(),l=h.map(p=>`<option value="${p.id}" ${(r==null?void 0:r.alunoId)===p.id?"selected":""}>${p.nome} (${p.instrumentoPrincipal||"Geral"})</option>`).join(""),x=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${b?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${l}
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
    `;de({title:b?`Editar Lançamento: ${r.descricao}`:"Novo Lançamento Financeiro",bodyHtml:x,modalClass:"modal-md",confirmText:b?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const p=b&&r?r.alunoId:document.getElementById("pay-aluno").value,y=document.getElementById("pay-desc").value.trim(),m=document.getElementById("pay-mes").value.trim()||void 0,S=document.getElementById("pay-valor").value,k=parseFloat(S)||0,n=document.getElementById("pay-vencimento").value,d=document.getElementById("pay-status").value,v=document.getElementById("pay-forma").value||void 0,i=document.getElementById("pay-obs").value.trim()||void 0;if(!p)return B("Selecione um aluno.","error"),!1;if(!y)return B("Informe a descrição do lançamento.","error"),!1;if(k<=0)return B("Informe um valor válido maior que zero.","error"),!1;if(!n)return B("Informe a data de vencimento.","error"),!1;const w=(t==null?void 0:t.nome)||"Administrador";let I=d;return I!=="pago"&&(I=n<g?"atrasado":"pendente"),b&&r?(L.updatePayment(r.id,{descricao:y,mesReferencia:m,valor:k,dataVencimento:n,status:I,formaPagamento:v,dataPagamento:I==="pago"?r.dataPagamento||g:void 0,observacoes:i},w),B("Lançamento atualizado com sucesso!","success")):(L.addPayment({alunoId:p,descricao:y,mesReferencia:m,valor:k,dataVencimento:n,status:I,formaPagamento:v,dataPagamento:I==="pago"?g:void 0,observacoes:i},w),B("Novo lançamento cadastrado com sucesso!","success")),f(),!0}}),setTimeout(()=>{const p=document.getElementById("pay-vencimento"),y=document.getElementById("pay-status");if(p==null||p.addEventListener("change",()=>{y&&y.value!=="pago"&&(y.value=p.value<g?"atrasado":"pendente")}),!b){const m=document.getElementById("pay-aluno");m==null||m.addEventListener("change",()=>{const S=h.find(k=>k.id===m.value);if(S){const k=document.getElementById("pay-valor");k&&typeof S.valorMensalidade=="number"&&(k.value=S.valorMensalidade.toString())}})}},50)}return f(),e}function ft($){const e=document.createElement("div"),t=te.getCurrentUser(),o=ae(t,"relatorios","gerar");let s="alunos",c="todos",M="todos",a="todos",T="todos",f="todos",u="nome_asc",A="",z="",r="",b="",h="todos",g="todos",l="todos",x="vencimento_asc";function p(){var Q,Z,oe,X,ee,Y,F,se,W,me,R,ne,pe,ye,xe,we,$e,Be,Ne;const n=L.getSettings(),d=L.getStudents(),v=L.getPlans(),i=L.getPayments(),w=Array.from(new Set(d.map(E=>E.instrumentoPrincipal).filter(Boolean))).sort();let I=d.filter(E=>{if(c!=="todos"&&E.status!==c||M!=="todos"&&E.instrumentoPrincipal!==M||a!=="todos"&&E.nivelMusical!==a||T!=="todos"&&E.planoId!==T)return!1;if(f!=="todos"){const H=L.isStudentOverdue(E.id);if(f==="em_dia"&&H||f==="atrasado"&&!H)return!1}return!0});I.sort((E,H)=>u==="nome_asc"?E.nome.localeCompare(H.nome):u==="nome_desc"?H.nome.localeCompare(E.nome):u==="data_desc"?(H.criadoEm||"").localeCompare(E.criadoEm||""):u==="data_asc"?(E.criadoEm||"").localeCompare(H.criadoEm||""):0);const q=I.length,O=I.filter(E=>E.status==="ativo").length,N=I.filter(E=>E.status==="inativo").length,C=I.filter(E=>L.isStudentOverdue(E.id)).length,P=new Date().toISOString().slice(0,10);let D=i.filter(E=>{if(A&&E.dataVencimento<A||z&&E.dataVencimento>z)return!1;const H=E.mesReferencia||E.dataVencimento.slice(0,7);if(r&&H<r||b&&H>b||g!=="todos"&&E.alunoId!==g||l!=="todos"&&E.formaPagamento!==l)return!1;const re=E.status!=="pago"&&E.dataVencimento<P;return!(h==="pago"&&E.status!=="pago"||h==="pendente"&&(E.status==="pago"||re)||h==="atrasado"&&!re)});const _=new Map(d.map(E=>[E.id,E.nome]));D.sort((E,H)=>{if(x==="vencimento_asc")return E.dataVencimento.localeCompare(H.dataVencimento);if(x==="vencimento_desc")return H.dataVencimento.localeCompare(E.dataVencimento);if(x==="valor_desc")return H.valor-E.valor;if(x==="aluno_asc"){const re=_.get(E.alunoId)||"",Le=_.get(H.alunoId)||"";return re.localeCompare(Le)}return 0});const V=D.length,J=D.reduce((E,H)=>E+H.valor,0),K=D.filter(E=>E.status==="pago").reduce((E,H)=>E+H.valor,0),G=D.filter(E=>E.status!=="pago").reduce((E,H)=>E+H.valor,0);e.innerHTML=`
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
                <option value="todos" ${c==="todos"?"selected":""}>Todos os Status</option>
                <option value="ativo" ${c==="ativo"?"selected":""}>Somente Ativos</option>
                <option value="inativo" ${c==="inativo"?"selected":""}>Somente Inativos</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Instrumento</label>
              <select id="filtro-aluno-instrumento" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${M==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${w.map(E=>`<option value="${E}" ${M===E?"selected":""}>${E}</option>`).join("")}
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
                <option value="todos" ${T==="todos"?"selected":""}>Todos os Planos</option>
                ${v.map(E=>`<option value="${E.id}" ${T===E.id?"selected":""}>${E.nome}</option>`).join("")}
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
                <option value="nome_asc" ${u==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${u==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${u==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${u==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores de Alunos (2 em cima, 2 em baixo) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Localizado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${q}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${O}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${N}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${C}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${I.length} registros)
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
                ${I.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':I.map(E=>{const H=v.find(We=>We.id===E.planoId),re=E.status==="ativo",Le=L.isStudentOverdue(E.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${E.nome}</td>
                              <td class="col-hide-md">${E.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${E.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${re?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${re?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${Le?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
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
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${z}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${r}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${b}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Lançamento</label>
              <select id="filtro-fin-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${h==="todos"?"selected":""}>Todos os Status</option>
                <option value="pago" ${h==="pago"?"selected":""}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${h==="pendente"?"selected":""}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${h==="atrasado"?"selected":""}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${g==="todos"?"selected":""}>Todos os Alunos</option>
                ${d.map(E=>`<option value="${E.id}" ${g===E.id?"selected":""}>${E.nome}</option>`).join("")}
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
                <option value="vencimento_asc" ${x==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${x==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${x==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${x==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
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
                ${D.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':D.map(E=>{const H=E.status==="pago",re=!H&&E.dataVencimento<P;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${_.get(E.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${E.descricao}${E.mesReferencia?` / ${E.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${E.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${E.valor.toFixed(2)}</td>
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
    `,(Q=e.querySelector("#btn-tab-rel-alunos"))==null||Q.addEventListener("click",()=>{s="alunos",p()}),(Z=e.querySelector("#btn-tab-rel-financeiro"))==null||Z.addEventListener("click",()=>{s="financeiro",p()}),(oe=e.querySelector("#filtro-aluno-status"))==null||oe.addEventListener("change",E=>{c=E.target.value,p()}),(X=e.querySelector("#filtro-aluno-instrumento"))==null||X.addEventListener("change",E=>{M=E.target.value,p()}),(ee=e.querySelector("#filtro-aluno-nivel"))==null||ee.addEventListener("change",E=>{a=E.target.value,p()}),(Y=e.querySelector("#filtro-aluno-plano"))==null||Y.addEventListener("change",E=>{T=E.target.value,p()}),(F=e.querySelector("#filtro-aluno-financeiro"))==null||F.addEventListener("change",E=>{f=E.target.value,p()}),(se=e.querySelector("#filtro-aluno-ordem"))==null||se.addEventListener("change",E=>{u=E.target.value,p()}),(W=e.querySelector("#btn-limpar-filtros-alunos"))==null||W.addEventListener("click",()=>{c="todos",M="todos",a="todos",T="todos",f="todos",u="nome_asc",p()}),(me=e.querySelector("#filtro-fin-dataini"))==null||me.addEventListener("change",E=>{A=E.target.value,p()}),(R=e.querySelector("#filtro-fin-datafim"))==null||R.addEventListener("change",E=>{z=E.target.value,p()}),(ne=e.querySelector("#filtro-fin-mesref-ini"))==null||ne.addEventListener("change",E=>{r=E.target.value,p()}),(pe=e.querySelector("#filtro-fin-mesref-fim"))==null||pe.addEventListener("change",E=>{b=E.target.value,p()}),(ye=e.querySelector("#filtro-fin-status"))==null||ye.addEventListener("change",E=>{h=E.target.value,p()}),(xe=e.querySelector("#filtro-fin-aluno"))==null||xe.addEventListener("change",E=>{g=E.target.value,p()}),(we=e.querySelector("#filtro-fin-metodo"))==null||we.addEventListener("change",E=>{l=E.target.value,p()}),($e=e.querySelector("#filtro-fin-ordem"))==null||$e.addEventListener("change",E=>{x=E.target.value,p()}),(Be=e.querySelector("#btn-limpar-filtros-fin"))==null||Be.addEventListener("click",()=>{A="",z="",r="",b="",h="todos",g="todos",l="todos",x="vencimento_asc",p()}),(Ne=e.querySelector("#btn-gerar-pdf"))==null||Ne.addEventListener("click",async()=>{if(!o){B("Você não possui permissão para emitir relatórios.","error");return}const E=e.querySelector("#btn-gerar-pdf"),H=E?E.innerHTML:"";E&&(E.disabled=!0,E.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await S(n,I,v):await k(n,D,d,{mesIni:r,mesFim:b}),B("PDF gerado com sucesso!","success")}catch(re){console.error("Erro ao gerar PDF:",re),B("Ocorreu um erro ao gerar o documento PDF.","error")}finally{E&&(E.disabled=!1,E.innerHTML=H)}})}function y(n){return new Promise(d=>{if(n&&n.trim()!==""){const v=new Image;v.crossOrigin="Anonymous",v.onload=()=>{try{const i=document.createElement("canvas");i.width=160,i.height=160;const w=i.getContext("2d");if(!w){d(n);return}const I=24;w.fillStyle="#ffffff",w.beginPath(),w.moveTo(I,0),w.lineTo(160-I,0),w.quadraticCurveTo(160,0,160,I),w.lineTo(160,160-I),w.quadraticCurveTo(160,160,160-I,160),w.lineTo(I,160),w.quadraticCurveTo(0,160,0,160-I),w.lineTo(0,I),w.quadraticCurveTo(0,0,I,0),w.closePath(),w.fill();const q=12,O=160-q*2,N=160-q*2;let C=O,P=N;const D=v.width/v.height;D>1?P=O/D:C=N*D;const _=q+(O-C)/2,V=q+(N-P)/2;w.drawImage(v,_,V,C,P),d(i.toDataURL("image/png"))}catch{d(n)}},v.onerror=()=>{m().then(d)},v.src=n;return}m().then(d)})}function m(){return new Promise(n=>{try{const d=document.createElement("canvas");d.width=160,d.height=160;const v=d.getContext("2d");if(!v){n("");return}const i=32;v.fillStyle="#181c2b",v.beginPath(),v.moveTo(i,0),v.lineTo(160-i,0),v.quadraticCurveTo(160,0,160,i),v.lineTo(160,160-i),v.quadraticCurveTo(160,160,160-i,160),v.lineTo(i,160),v.quadraticCurveTo(0,160,0,160-i),v.lineTo(0,i),v.quadraticCurveTo(0,0,i,0),v.closePath(),v.fill(),v.lineWidth=3,v.strokeStyle="#2d3748",v.stroke();const w=new Image,I=`
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
        `,q=new Blob([I],{type:"image/svg+xml;charset=utf-8"}),O=URL.createObjectURL(q);w.onload=()=>{v.drawImage(w,20,20,120,120),URL.revokeObjectURL(O),n(d.toDataURL("image/png"))},w.onerror=()=>{URL.revokeObjectURL(O),n("")},w.src=O}catch{n("")}})}async function S(n,d,v){const i=new Fe({orientation:"portrait",unit:"mm",format:"a4"}),w=new Date().toLocaleString("pt-BR"),I=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",q=n.razaoSocial||"Acusticamente Ensino Musical Ltda",O=n.cnpj?`CNPJ: ${n.cnpj}`:"",N=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),C=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),P=await y(n.logotipoCustomizado);P&&i.addImage(P,"PNG",14,12,17,17);const D=P?35:14;i.setFont("helvetica","bold"),i.setFontSize(13),i.setTextColor(15,23,42),i.text(I,D,17),i.setFont("helvetica","normal"),i.setFontSize(8),i.setTextColor(71,85,105),i.text([q,O].filter(Boolean).join(" • "),D,21.5),i.setFontSize(7.5),i.setTextColor(100,116,139),C&&i.text(C,D,25.5),N&&i.text(N,D,C?29.5:25.5),i.setFont("helvetica","bold"),i.setFontSize(12),i.setTextColor(217,72,59),i.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),i.setFont("helvetica","normal"),i.setFontSize(8),i.setTextColor(100,116,139),i.text(`Emissão: ${w}`,196,22,{align:"right"}),i.text(`Total: ${d.length} aluno(s)`,196,26.5,{align:"right"}),i.setDrawColor(203,213,225),i.setLineWidth(.4),i.line(14,33,196,33);const _=d.filter(F=>F.status==="ativo").length,V=d.filter(F=>F.status==="inativo").length,J=d.filter(F=>L.isStudentOverdue(F.id)).length,K=[{label:"TOTAL DE ALUNOS",value:`${d.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${_}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${J}`,color:[220,38,38]}],G=43,Q=12,Z=36;K.forEach((F,se)=>{const W=14+se*(G+3);i.setFillColor(248,250,252),i.roundedRect(W,Z,G,Q,1.5,1.5,"F"),i.setDrawColor(226,232,240),i.roundedRect(W,Z,G,Q,1.5,1.5,"S"),i.setFont("helvetica","bold"),i.setFontSize(6.5),i.setTextColor(100,116,139),i.text(F.label,W+3,Z+4),i.setFontSize(10.5),i.setTextColor(F.color[0],F.color[1],F.color[2]),i.text(F.value,W+3,Z+9.5)});const oe=d.map((F,se)=>{const W=v.find(ne=>ne.id===F.planoId),me=F.status==="ativo",R=L.isStudentOverdue(F.id);return[(se+1).toString(),F.nome,F.instrumentoPrincipal||"Música Geral",F.telefone||"-",(W==null?void 0:W.nome)||"-",me?"Ativo":"Inativo",R?"Atrasado":"Em dia"]});_e(i,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:oe.length>0?oe:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:F=>{F.section==="body"&&(F.column.index===5&&(F.cell.raw==="Ativo"?(F.cell.styles.textColor=[22,163,74],F.cell.styles.fontStyle="bold"):F.cell.styles.textColor=[202,138,4]),F.column.index===6&&(F.cell.raw==="Atrasado"?(F.cell.styles.textColor=[220,38,38],F.cell.styles.fontStyle="bold"):F.cell.styles.textColor=[22,163,74]))}});const X=i.internal.getNumberOfPages();for(let F=1;F<=X;F++)i.setPage(F),i.setDrawColor(226,232,240),i.setLineWidth(.3),i.line(14,287,196,287),i.setFont("helvetica","normal"),i.setFontSize(7),i.setTextColor(148,163,184),i.text(`${I} • Sistema de Gestão Escolar & Pedagógica`,14,292),i.text(`Página ${F} de ${X}`,196,292,{align:"right"});const ee=i.output("blob"),Y=URL.createObjectURL(ee);window.open(Y,"_blank")}async function k(n,d,v,i){const w=new Fe({orientation:"portrait",unit:"mm",format:"a4"}),I=new Map(v.map(R=>[R.id,R.nome])),q=new Date().toLocaleString("pt-BR"),O=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",N=n.razaoSocial||"Acusticamente Ensino Musical Ltda",C=n.cnpj?`CNPJ: ${n.cnpj}`:"",P=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),D=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),_=new Date().toISOString().slice(0,10),V=d.reduce((R,ne)=>R+ne.valor,0),J=d.filter(R=>R.status==="pago").reduce((R,ne)=>R+ne.valor,0),K=d.filter(R=>R.status!=="pago").reduce((R,ne)=>R+ne.valor,0),G=await y(n.logotipoCustomizado);G&&w.addImage(G,"PNG",14,12,17,17);const Q=G?35:14;w.setFont("helvetica","bold"),w.setFontSize(13),w.setTextColor(15,23,42),w.text(O,Q,17),w.setFont("helvetica","normal"),w.setFontSize(8),w.setTextColor(71,85,105),w.text([N,C].filter(Boolean).join(" • "),Q,21.5),w.setFontSize(7.5),w.setTextColor(100,116,139),D&&w.text(D,Q,25.5),P&&w.text(P,Q,D?29.5:25.5),w.setFont("helvetica","bold"),w.setFontSize(12),w.setTextColor(5,150,105),w.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),w.setFont("helvetica","normal"),w.setFontSize(8),w.setTextColor(100,116,139),w.text(`Emissão: ${q}`,196,22,{align:"right"});let Z=`Total: ${d.length} registro(s)`;i!=null&&i.mesIni&&(i!=null&&i.mesFim)?Z=`Ref: ${i.mesIni} a ${i.mesFim} • ${d.length} reg.`:i!=null&&i.mesIni?Z=`Ref: a partir de ${i.mesIni} • ${d.length} reg.`:i!=null&&i.mesFim&&(Z=`Ref: até ${i.mesFim} • ${d.length} reg.`),w.text(Z,196,26.5,{align:"right"}),w.setDrawColor(203,213,225),w.setLineWidth(.4),w.line(14,33,196,33);const oe=[{label:"LANÇAMENTOS",value:`${d.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${J.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${K.toFixed(2)}`,color:[220,38,38]}],X=43,ee=12,Y=36;oe.forEach((R,ne)=>{const pe=14+ne*(X+3);w.setFillColor(248,250,252),w.roundedRect(pe,Y,X,ee,1.5,1.5,"F"),w.setDrawColor(226,232,240),w.roundedRect(pe,Y,X,ee,1.5,1.5,"S"),w.setFont("helvetica","bold"),w.setFontSize(6.5),w.setTextColor(100,116,139),w.text(R.label,pe+3,Y+4),w.setFontSize(10),w.setTextColor(R.color[0],R.color[1],R.color[2]),w.text(R.value,pe+3,Y+9.5)});const F=d.map((R,ne)=>{const pe=R.status==="pago",ye=!pe&&R.dataVencimento<_,xe=pe?"Pago":ye?"Atrasado":"Pendente",we=R.descricao+(R.mesReferencia?` / ${R.mesReferencia}`:""),$e=R.dataVencimento.split("-").reverse().join("/");return[(ne+1).toString(),I.get(R.alunoId)||"Aluno",we,$e,`R$ ${R.valor.toFixed(2)}`,xe]});_e(w,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:F.length>0?F:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:R=>{R.section==="body"&&R.column.index===5&&(R.cell.raw==="Pago"?(R.cell.styles.textColor=[22,163,74],R.cell.styles.fontStyle="bold"):R.cell.raw==="Atrasado"?(R.cell.styles.textColor=[220,38,38],R.cell.styles.fontStyle="bold"):R.cell.styles.textColor=[202,138,4])}});const se=w.internal.getNumberOfPages();for(let R=1;R<=se;R++)w.setPage(R),w.setDrawColor(226,232,240),w.setLineWidth(.3),w.line(14,287,196,287),w.setFont("helvetica","normal"),w.setFontSize(7),w.setTextColor(148,163,184),w.text(`${O} • Gestão Financeira & Escolar`,14,292),w.text(`Página ${R} de ${se}`,196,292,{align:"right"});const W=w.output("blob"),me=URL.createObjectURL(W);window.open(me,"_blank")}return p(),e}function gt($){const e=document.createElement("div");let t=new Date,o="";const s=f=>f.toString().padStart(2,"0");function c(f){const u=f.getDate(),z=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][f.getMonth()],r=f.getFullYear(),b=new Date,h=b.getDate()===u&&b.getMonth()===f.getMonth()&&b.getFullYear()===r;return`${u} de ${z} de ${r}${h?" (Hoje)":""}`}function M(f){return`${f.getFullYear()}-${s(f.getMonth()+1)}-${s(f.getDate())}`}function a(){var l,x,p,y,m,S,k,n;const f=U.getLogs(),u=new Date,A=`${s(u.getDate())}/${s(u.getMonth()+1)}/${u.getFullYear()}`,z=f.filter(d=>{var v;return(v=d.dataHoraFormatada)==null?void 0:v.startsWith(A)}).length,r=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",b=t!==null&&u.getDate()===t.getDate()&&u.getMonth()===t.getMonth()&&u.getFullYear()===t.getFullYear(),h=f.filter(d=>{const v=!t||d.dataHoraFormatada&&d.dataHoraFormatada.startsWith(r)||d.dataHora&&d.dataHora.startsWith(M(t)),i=o===""||d.tela.toLowerCase().includes(o.toLowerCase())||d.usuarioNome.toLowerCase().includes(o.toLowerCase())||d.usuarioLogin.toLowerCase().includes(o.toLowerCase())||d.acao.toLowerCase().includes(o.toLowerCase())||d.detalhes.toLowerCase().includes(o.toLowerCase());return v&&i});e.innerHTML=`
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
            <span>Registros de Hoje: <strong style="color: var(--color-coral);">${z}</strong></span>
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${t?c(t):"Todo o Histórico"}
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
          <button type="button" class="btn ${t===null?"btn-primary":"btn-secondary"}" id="audit-btn-all" style="padding: 6px 14px; font-size: 0.8rem;" title="Exibir todo o histórico sem filtrar por data">
            Ver Todos
          </button>
          <input 
            type="date" 
            id="audit-date-picker" 
            class="form-input" 
            style="padding: 5px 10px; font-size: 0.8rem; width: auto; color: var(--text-white); background: var(--bg-card);" 
            value="${t?M(t):""}" 
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
            Registros de Auditoria (${h.length})
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
              ${h.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${r}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:h.map(d=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${d.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${d.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${d.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${d.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${d.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${d.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${d.detalhes}">
                                ${d.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(l=e.querySelector("#audit-btn-prev"))==null||l.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),a()}),(x=e.querySelector("#audit-btn-next"))==null||x.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),a()}),(p=e.querySelector("#audit-btn-today"))==null||p.addEventListener("click",()=>{t=new Date,a()}),(y=e.querySelector("#audit-btn-all"))==null||y.addEventListener("click",()=>{t=null,a()}),(m=e.querySelector("#audit-empty-btn-all"))==null||m.addEventListener("click",()=>{t=null,a()}),(S=e.querySelector("#audit-date-picker"))==null||S.addEventListener("change",d=>{const v=d.target.value;if(v){const[i,w,I]=v.split("-").map(Number);t=new Date(i,w-1,I)}else t=null;a()});const g=e.querySelector("#audit-search-input");g==null||g.addEventListener("input",d=>{o=d.target.value,a();const v=e.querySelector("#audit-search-input");v&&(v.focus(),v.selectionStart=v.selectionEnd=v.value.length)}),(k=e.querySelector("#btn-clear-audit-search"))==null||k.addEventListener("click",()=>{o="",a()}),(n=e.querySelector("#btn-clear-all-audit"))==null||n.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await L.resetCleanDatabase("Administrador"),a())})}const T=()=>{a()};return window.addEventListener("audit_updated",T),a(),e}function vt($){const e=document.createElement("div"),t=te.getCurrentUser(),o=L.getSettings(),s=ae(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${je(o.cnpj||"")}" 
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
                  placeholder="(00) 00000-0000"
                  maxlength="15"
                  value="${ze(o.telefoneContato||"")}" 
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
                  value="${Oe(o.cep||"")}" 
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
  `;const c=e.querySelector("#btn-tab-gerais"),M=e.querySelector("#btn-tab-instituicao"),a=e.querySelector("#tab-content-gerais"),T=e.querySelector("#tab-content-instituicao");function f(I,q){I&&(q?I.classList.add("active"):I.classList.remove("active"))}function u(I){a.style.display=I==="gerais"?"block":"none",T.style.display=I==="instituicao"?"block":"none",f(c,I==="gerais"),f(M,I==="instituicao")}c==null||c.addEventListener("click",()=>u("gerais")),M==null||M.addEventListener("click",()=>u("instituicao"));let A=o.logotipoCustomizado||"";const z=e.querySelector("#cfg-menu-name"),r=e.querySelector("#preview-menu-brand-name"),b=e.querySelector("#preview-report-brand-name"),h=e.querySelector("#preview-logo-menu"),g=e.querySelector("#preview-logo-report"),l=e.querySelector("#input-logo-file"),x=e.querySelector("#btn-upload-logo"),p=e.querySelector("#btn-reset-logo"),y=e.querySelector("#logo-feedback-msg");z==null||z.addEventListener("input",()=>{const I=z.value.trim()||"Acusticamente";r&&(r.textContent=I),b&&(b.textContent=I)}),x==null||x.addEventListener("click",()=>{l==null||l.click()}),l==null||l.addEventListener("change",I=>{const q=I.target.files;if(!q||q.length===0)return;const O=q[0];if(!O.type.startsWith("image/")){B("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(O.size>3*1024*1024){B("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const N=new FileReader;N.onload=C=>{var P;A=((P=C.target)==null?void 0:P.result)||"",h&&(h.innerHTML=le(A,40)),g&&(g.innerHTML=le(A,40)),p&&(p.disabled=!1,p.style.color="#ef4444"),y&&(y.style.display="block",y.style.color="var(--status-success)",y.textContent="Imagem carregada no preview. Clique em Salvar."),B("Logotipo carregado na pré-visualização!","info")},N.onerror=()=>{B("Erro ao processar o arquivo de imagem.","error")},N.readAsDataURL(O)}),p==null||p.addEventListener("click",()=>{A="",l&&(l.value=""),h&&(h.innerHTML=le("",40)),g&&(g.innerHTML=le("",40)),p&&(p.disabled=!0,p.style.color="var(--text-muted)"),y&&(y.style.display="block",y.style.color="var(--color-coral)",y.textContent="Logotipo padrão no preview. Clique em Salvar."),B("Logotipo padrão restaurado no preview.","info")});const m=e.querySelector("#form-settings-gerais");m==null||m.addEventListener("submit",I=>{I.preventDefault();const q=z.value.trim()||"Acusticamente";L.updateSettings({nomeMenu:q,logotipoCustomizado:A},(t==null?void 0:t.nome)||"Administrador"),y&&(y.style.display="none"),B("Configurações gerais salvas com sucesso!","success")});const S=e.querySelector("#cfg-cnpj");S&&ve(S,je);const k=e.querySelector("#cfg-tel");k&&ve(k,ze);const n=e.querySelector("#cfg-cep");n&&ve(n,Oe);const d=e.querySelector("#cfg-uf");d==null||d.addEventListener("input",I=>{I.target.value=I.target.value.toUpperCase().slice(0,2)});const v=e.querySelector("#form-settings-institucional");v==null||v.addEventListener("submit",I=>{I.preventDefault();const q=e.querySelector("#cfg-fantasia").value.trim(),O=e.querySelector("#cfg-razao").value.trim(),N=e.querySelector("#cfg-cnpj").value.trim(),C=e.querySelector("#cfg-ie").value.trim(),P=e.querySelector("#cfg-tel").value.trim(),D=e.querySelector("#cfg-email").value.trim(),_=e.querySelector("#cfg-site").value.trim(),V=e.querySelector("#cfg-cep").value.trim(),J=e.querySelector("#cfg-logradouro").value.trim(),K=e.querySelector("#cfg-numero").value.trim(),G=e.querySelector("#cfg-complemento").value.trim(),Q=e.querySelector("#cfg-bairro").value.trim(),Z=e.querySelector("#cfg-cidade").value.trim(),oe=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!q){B("Informe o Nome Fantasia da instituição.","error");return}if(D&&!Je(D)){B("Informe um endereço de e-mail válido.","error");return}const X=N.replace(/\D/g,"");if(X.length>0&&X.length!==14){B("CNPJ incompleto (deve conter 14 dígitos).","error");return}const ee=P.replace(/\D/g,"");if(ee.length>0&&ee.length<10){B("Telefone/WhatsApp incompleto.","error");return}const Y=V.replace(/\D/g,"");if(Y.length>0&&Y.length!==8){B("CEP incompleto (deve conter 8 dígitos).","error");return}L.updateSettings({nomeEscola:q,nomeClinica:q,nomeFantasia:q,razaoSocial:O,cnpj:N,inscricaoEstadual:C,telefoneContato:P,emailContato:D,website:_,cep:V,logradouro:J,numero:K,complemento:G,bairro:Q,cidade:Z,estado:oe},(t==null?void 0:t.nome)||"Administrador"),B("Dados da instituição salvos com sucesso!","success")});const i=e.querySelector("#footer-cloud-status"),w=I=>{i&&(I==="connected"?(i.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,i.style.color="#4ade80"):I==="fallback"?(i.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,i.style.color="#fbbf24"):(i.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,i.style.color="#94a3b8"))};return w(L.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",I=>{w(I.detail)}),e}class bt{constructor(){ie(this,"currentScreen","site");ie(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=te.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":te.isAuthenticated()?["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(e)&&ce(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","").trim(),s=!o||o==="site"?"site":o;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const o=L.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const c=document.querySelector(".sidebar-logo");c&&(c.innerHTML=le(o.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{te.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),L.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of t)if(ce(e,o))return o;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!te.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=te.getCurrentUser();if(!ce(t,e)){B("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(t);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),L.syncWithCloud()}render(){var r;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const b=st(h=>{this.navigateTo(h)});this.appRoot.appendChild(b);return}if(this.currentScreen==="login"||!te.isAuthenticated()){const b=ot(()=>{const h=te.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(h))},()=>{this.navigateTo("site")});this.appRoot.appendChild(b);return}const e=document.createElement("div");e.className="app-container";const t=te.getCurrentUser(),o=(t==null?void 0:t.papel)==="admin",s=L.getSettings(),c=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${le(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${c}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${j.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${ce(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${j.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${ce(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${j.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${ce(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${j.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${ce(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${j.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${ce(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${j.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${ce(t,"relatorios")?`
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

          ${ce(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${j.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${ce(t,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${j.configuracoes}</span>
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
    `;const M=e.querySelector("#app-sidebar"),a=e.querySelector("#sidebar-backdrop"),T=e.querySelector("#btn-mobile-menu-toggle"),f=e.querySelector("#btn-sidebar-close"),u=b=>{const h=b!==void 0?b:!M.classList.contains("open");M.classList.toggle("open",h),a.classList.toggle("open",h),document.body.style.overflow=h?"hidden":""};T==null||T.addEventListener("click",()=>u(!0)),f==null||f.addEventListener("click",()=>u(!1)),a==null||a.addEventListener("click",()=>u(!1)),e.querySelectorAll(".nav-item").forEach(b=>{b.addEventListener("click",h=>{const g=h.currentTarget.dataset.screen;u(!1),g&&this.navigateTo(g)})}),(r=e.querySelector("#btn-app-logout"))==null||r.addEventListener("click",()=>{fe({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{te.logout(),this.navigateTo("site")}})});const A=e.querySelector("#screen-viewport"),z=this.createViewElement(this.currentScreen);A.appendChild(z),this.appRoot.appendChild(e)}createViewElement(e){const t=o=>this.navigateTo(o);switch(e){case"home":return Ve(t);case"agenda":return nt();case"alunos":return dt(t);case"user":return pt(t);case"planos":return ut();case"financeiro":return mt();case"relatorios":return ft();case"auditoria":return gt();case"configuracoes":return vt();default:return Ve(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new bt});
