var Ze=Object.defineProperty;var et=(h,e,t)=>e in h?Ze(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var le=(h,e,t)=>et(h,typeof e!="symbol"?e+"":e,t);import{E as Re,a as qe}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const L of c.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&o(L)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const je="acusticamente_audit_logs";class tt{constructor(){le(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(je);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(je,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,o=L=>L.toString().padStart(2,"0"),s=`${o(t.getDate())}/${o(t.getMonth()+1)}/${t.getFullYear()} ${o(t.getHours())}:${o(t.getMinutes())}:${o(t.getSeconds())}`,c={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(c),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:c})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:c})),c}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const U=new tt,Te="acusticamente_users",Ae="acusticamente_students",Se="acusticamente_plans",ke="acusticamente_appointments",Pe="acusticamente_settings",Ce="acusticamente_payments";class at{constructor(){le(this,"users",[]);le(this,"students",[]);le(this,"plans",[]);le(this,"appointments",[]);le(this,"payments",[]);le(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});le(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(Te);e?this.users=JSON.parse(e).map(a=>{var M,g;return{...a,permissoes:{...a.permissoes,financeiro:((M=a.permissoes)==null?void 0:M.financeiro)||(a.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:a.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((g=a.permissoes)==null?void 0:g.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Se);if(t)try{const a=JSON.parse(t);this.plans=a.map(M=>({...M,valor:typeof M.valor=="number"?M.valor:280,modulos:(M.modulos||[]).map((g,m)=>({...g,aulas:Array.isArray(g.aulas)&&g.aulas.length>0?g.aulas:[{id:`aul_${g.id||m+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${g.id||m+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${g.id||m+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${g.id||m+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",valor:260,criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",valor:280,criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",valor:320,criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],this.savePlans();const o=localStorage.getItem(Ae);o?this.students=JSON.parse(o).map(a=>({...a,saldoReposicoes:typeof a.saldoReposicoes=="number"?a.saldoReposicoes:0,instrumentoPrincipal:a.instrumentoPrincipal||"Violão",nivelMusical:a.nivelMusical||"iniciante",valorMensalidade:typeof a.valorMensalidade=="number"?a.valorMensalidade:280,diaVencimento:typeof a.diaVencimento=="number"?a.diaVencimento:10})):(this.students=[],this.saveStudents());const s=localStorage.getItem(ke);s?this.appointments=JSON.parse(s):(this.appointments=[],this.saveAppointments());const c=localStorage.getItem(Pe);c&&(this.settings=JSON.parse(c));const L=localStorage.getItem(Ce);L?this.payments=JSON.parse(L):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(a=>{a.nome.includes("Reabilitação")&&(a.nome="Violão e Harmonia Prática",a.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",a.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),this.savePlans(),this.students.forEach(a=>{var M;(M=a.observacoes)!=null&&M.includes("implante")&&(a.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",a.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(a=>{var M;(M=a.titulo)!=null&&M.includes("Auditivo")&&(a.titulo="Aula Prática de Violão",a.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=o=>o.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,o){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:o})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const o=t.data;return Array.isArray(o.students)&&(this.students=o.students,localStorage.setItem(Ae,JSON.stringify(this.students))),Array.isArray(o.payments)&&(this.payments=o.payments,localStorage.setItem(Ce,JSON.stringify(this.payments))),Array.isArray(o.appointments)&&(this.appointments=o.appointments,localStorage.setItem(ke,JSON.stringify(this.appointments))),Array.isArray(o.plans)&&(this.plans=o.plans,localStorage.setItem(Se,JSON.stringify(this.plans))),Array.isArray(o.users)&&o.users.length>0&&(this.users=o.users,localStorage.setItem(Te,JSON.stringify(this.users))),o.settings&&(this.settings={...this.settings,...o.settings},localStorage.setItem(Pe,JSON.stringify(this.settings))),Array.isArray(o.audit)&&(o.audit.length===0?U.clearLocalOnly():U.setLogs(o.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(Ae,JSON.stringify([])),localStorage.setItem(Ce,JSON.stringify([])),localStorage.setItem(ke,JSON.stringify([])),localStorage.setItem(Se,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await U.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Te,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(Ae,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Se,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(ke,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Ce,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}saveSettings(){localStorage.setItem(Pe,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const o={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(o),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${o.nome}" (login: ${o.login}, papel: ${o.papel})`}),o}updateUser(e,t,o){const s=this.users.findIndex(a=>a.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const c=this.users[s],L=c.isSistema;return this.users[s]={...c,...t,isSistema:L,atualizadoEm:new Date().toISOString()},this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:o,detalhes:`Usuário "${c.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const o=this.users.find(s=>s.id===e);if(!o)throw new Error("Usuário não encontrado.");if(o.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),U.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${o.nome}" (login: ${o.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(e,t){const o={...e,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(o),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" cadastrado com status ${o.status}.`}),o}updateStudent(e,t,o){const s=this.students.findIndex(L=>L.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const c=this.students[s];return this.students[s]={...c,...t},this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:o,detalhes:`Aluno "${c.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const o=this.students.find(s=>s.id===e);o&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),U.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${o.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const o={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(o),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" criado com ${o.modulos.length} módulos.`}),o}updatePlan(e,t,o){const s=this.plans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano não encontrado.");const c=this.plans[s];return this.plans[s]={...c,...t},this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:o,detalhes:`Plano "${c.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const o=this.plans.find(s=>s.id===e);o&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),U.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${o.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(e,t){const o={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(o),this.saveAppointments();const s=this.students.find(c=>c.id===o.alunoId);return U.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${o.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${o.data} às ${o.horaInicio}.`}),o}updateAppointment(e,t,o){const s=this.appointments.findIndex(L=>L.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const c=this.appointments[s];return this.appointments[s]={...c,...t},this.saveAppointments(),U.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:o,detalhes:`Compromisso "${c.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const o=this.appointments.find(s=>s.id===e);o&&(this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),U.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${o.titulo}" removido da agenda.`}))}marcarPresenca(e,t){const o=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(c=>c.id===o.alunoId);return U.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${o.titulo}".`}),o}registrarFalta(e,t,o,s){const c=t?"falta_justificada":"falta_injustificada",L=this.updateAppointment(e,{status:c,justificativaFalta:(o==null?void 0:o.trim())||void 0},s),a=this.students.find(g=>g.id===L.alunoId);let M=(a==null?void 0:a.saldoReposicoes)||0;return t&&a?(M=(a.saldoReposicoes||0)+1,a.saldoReposicoes=M,this.saveStudents(),U.log({tela:"Agenda",acao:"Falta Justificada Registrada",usuarioNome:s,detalhes:`Falta justificada para o aluno "${a.nome}" na aula "${L.titulo}". Crédito de reposição gerado (+1). Saldo atual: ${M}. Motivo: ${o||"Não especificado"}`})):!t&&a&&U.log({tela:"Agenda",acao:"Falta Injustificada Registrada",usuarioNome:s,detalhes:`Falta sem aviso/injustificada para o aluno "${a.nome}" na aula "${L.titulo}". Nenhum crédito de reposição gerado.`}),{appointment:L,saldoReposicoes:M}}agendarReposicao(e,t,o){const s=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},o);if(t){const L=this.appointments.findIndex(a=>a.id===t);L!==-1&&(this.appointments[L].aulaReposicaoId=s.id,this.saveAppointments())}const c=this.students.find(L=>L.id===s.alunoId);return c&&typeof c.saldoReposicoes=="number"&&c.saldoReposicoes>0&&(c.saldoReposicoes-=1,this.saveStudents(),U.log({tela:"Agenda",acao:"Aula de Reposição Agendada",usuarioNome:o,detalhes:`Reposição agendada para "${c.nome}". 1 crédito abatido. Saldo restante: ${c.saldoReposicoes}.`})),s}generateAppointmentsFromPlan(e,t,o,s,c,L){const a=this.students.find(I=>I.id===e),M=this.plans.find(I=>I.id===t);if(!a||!M)return[];const g=[];if((M.modulos||[]).forEach(I=>{(I.aulas||[]).forEach(r=>{g.push({moduloId:I.id,moduloTitulo:I.titulo,aulaTitulo:r.titulo,aulaId:r.id})})}),g.length===0)return[];const m=[];let E=new Date(o+"T12:00:00");return g.forEach((I,r)=>{const y=i=>i.toString().padStart(2,"0"),x=`${E.getFullYear()}-${y(E.getMonth()+1)}-${y(E.getDate())}`,f={id:`app_${Date.now()}_${r}_${Math.random().toString(36).substr(2,4)}`,alunoId:a.id,planoId:M.id,moduloId:I.moduloId,aulaId:I.aulaId,titulo:`${I.aulaTitulo}`,data:x,horaInicio:s,horaFim:c,status:"agendado",tipoAula:"regular",observacoes:`${M.nome} • ${I.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push(f),m.push(f),E.setDate(E.getDate()+7)}),this.saveAppointments(),U.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:L,detalhes:`Geradas ${m.length} aulas regulares para "${a.nome}" com base no plano "${M.nome}".`}),m}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,o)=>{const s=`${t.data}T${t.horaInicio}`;return`${o.data}T${o.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(o=>{if(o.status!=="pago"){const s=o.dataVencimento<e?"atrasado":"pendente";o.status!==s&&(o.status=s,t=!0)}}),t&&this.savePayments(),[...this.payments].sort((o,s)=>s.dataVencimento.localeCompare(o.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(o=>o.alunoId===e&&(o.status==="atrasado"||o.status==="pendente"&&o.dataVencimento<t))}addPayment(e,t){const o=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<o&&(s="atrasado");const c={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(c),this.savePayments();const L=this.students.find(a=>a.id===c.alunoId);return U.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${c.descricao}" (R$ ${c.valor.toFixed(2)}) cadastrado para o aluno "${(L==null?void 0:L.nome)||"N/A"}" com vencimento em ${c.dataVencimento}.`}),c}darBaixaPayment(e,t,o,s,c){const L=this.payments.findIndex(m=>m.id===e);if(L===-1)throw new Error("Lançamento financeiro não encontrado");const a=this.payments[L],M=a.status;a.status="pago",a.dataPagamento=t,a.formaPagamento=o,c!==void 0&&(a.observacoes=c.trim()?c.trim():a.observacoes),this.savePayments();const g=this.students.find(m=>m.id===a.alunoId);return U.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${a.descricao}" de "${(g==null?void 0:g.nome)||"N/A"}". Valor R$ ${a.valor.toFixed(2)} recebido via ${o.toUpperCase()} em ${t} (Status anterior: ${M}).`}),a}updatePayment(e,t,o){const s=this.payments.findIndex(m=>m.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const c=this.getTodayDateString();let L=t.status||this.payments[s].status;const a=t.dataVencimento||this.payments[s].dataVencimento;L!=="pago"&&(L=a<c?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:L},this.savePayments();const M=this.payments[s],g=this.students.find(m=>m.id===M.alunoId);return U.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:o,detalhes:`Lançamento financeiro "${M.descricao}" do aluno "${(g==null?void 0:g.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const o=this.payments.find(c=>c.id===e);if(!o)return;this.payments=this.payments.filter(c=>c.id!==e),this.savePayments();const s=this.students.find(c=>c.id===o.alunoId);U.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${o.descricao}" no valor de R$ ${o.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,o){const s=E=>E.toString().padStart(2,"0"),c=`${e}-${s(t)}`,a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||c,M=this.students.filter(E=>E.status==="ativo");let g=0,m=0;return M.forEach(E=>{if(this.payments.some(w=>w.alunoId===E.id&&(w.mesReferencia===c||w.dataVencimento.startsWith(c)))){m++;return}const r=E.diaVencimento||10,y=new Date(e,t,0).getDate(),x=Math.min(r,y),f=`${e}-${s(t)}-${s(x)}`,i=typeof E.valorMensalidade=="number"&&E.valorMensalidade>0?E.valorMensalidade:280;this.addPayment({alunoId:E.id,descricao:`Mensalidade ${a}/${e}`,mesReferencia:c,valor:i,dataVencimento:f,status:"pendente",observacoes:`Gerado automaticamente para o plano ${E.moduloAtual||E.instrumentoPrincipal||"Música"}`},o),g++}),U.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:o,detalhes:`Geração em lote para ${a}/${e}: ${g} mensalidade(s) criada(s) e ${m} já existente(s) pulada(s).`}),{criadas:g,puladas:m}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),U.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const z=new at,be={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function ze(h){var s,c,L,a,M,g,m,E,I,r,y,x,f,i,w,p,$,u,A,C,n,d,b,l,v,P,N,j;if(!h)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(h.papel==="admin")return JSON.parse(JSON.stringify(be.admin));const e=be[h.papel]||be.professor,t=h.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const o=_=>typeof _=="boolean";return{alunos:{acesso:o(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:o(t.alunos)?t.alunos:((c=t.alunos)==null?void 0:c.cadastrar)??e.alunos.cadastrar,alterar:o(t.alunos)?t.alunos:((L=t.alunos)==null?void 0:L.alterar)??e.alunos.alterar,excluir:o(t.alunos)?!1:((a=t.alunos)==null?void 0:a.excluir)??e.alunos.excluir},agenda:{acesso:o(t.agenda)?t.agenda:((M=t.agenda)==null?void 0:M.acesso)??e.agenda.acesso,cadastrar:o(t.agenda)?t.agenda:((g=t.agenda)==null?void 0:g.cadastrar)??e.agenda.cadastrar,alterar:o(t.agenda)?t.agenda:((m=t.agenda)==null?void 0:m.alterar)??e.agenda.alterar,excluir:o(t.agenda)?!1:((E=t.agenda)==null?void 0:E.excluir)??e.agenda.excluir},planos:{acesso:o(t.planos)?t.planos:((I=t.planos)==null?void 0:I.acesso)??e.planos.acesso,cadastrar:o(t.planos)?t.planos:((r=t.planos)==null?void 0:r.cadastrar)??e.planos.cadastrar,alterar:o(t.planos)?t.planos:((y=t.planos)==null?void 0:y.alterar)??e.planos.alterar,excluir:o(t.planos)?!1:((x=t.planos)==null?void 0:x.excluir)??e.planos.excluir},home:{acesso:o(t.home)?t.home:((f=t.home)==null?void 0:f.acesso)??e.home.acesso},financeiro:{acesso:o(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.acesso)??((w=e.financeiro)==null?void 0:w.acesso)??!1,cadastrar:o(t.financeiro)?t.financeiro:((p=t.financeiro)==null?void 0:p.cadastrar)??(($=e.financeiro)==null?void 0:$.cadastrar)??!1,alterar:o(t.financeiro)?t.financeiro:((u=t.financeiro)==null?void 0:u.alterar)??((A=e.financeiro)==null?void 0:A.alterar)??!1,excluir:o(t.financeiro)?!1:((C=t.financeiro)==null?void 0:C.excluir)??((n=e.financeiro)==null?void 0:n.excluir)??!1},relatorios:{acesso:o(t.relatorios)?t.relatorios:((d=t.relatorios)==null?void 0:d.acesso)??((b=e.relatorios)==null?void 0:b.acesso)??!0,gerar:o(t.relatorios)?t.relatorios:((l=t.relatorios)==null?void 0:l.gerar)??((v=e.relatorios)==null?void 0:v.gerar)??!0},auditoria:{acesso:o(t.auditoria)?t.auditoria:((P=t.auditoria)==null?void 0:P.acesso)??e.auditoria.acesso},configuracoes:{acesso:o(t.configuracoes)?t.configuracoes:((N=t.configuracoes)==null?void 0:N.acesso)??e.configuracoes.acesso,alterar:o(t.configuracoes)?t.configuracoes:((j=t.configuracoes)==null?void 0:j.alterar)??e.configuracoes.alterar}}}function pe(h,e){if(!h)return!1;if(e==="login")return!0;if(e==="user")return h.papel==="admin";if(h.papel==="admin"||h.isSistema)return!0;const o=ze(h)[e];return o&&typeof o=="object"&&"acesso"in o?!!o.acesso:!1}function ae(h,e,t){if(!h)return!1;if(h.papel==="admin")return!0;const s=ze(h)[e];return s?!!s[t]:!1}const Ie="acusticamente_active_session";class ot{constructor(){le(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(Ie);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=z.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(Ie,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=z.getUsers().find(c=>c.login===e.trim());return s?s.senha!==t.trim()?(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Ie,JSON.stringify(s)),U.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(U.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&U.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Ie),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const te=new ot;function st(h=40){return`
    <svg width="${h}" height="${h}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function de(h,e=40){return h&&h.trim()!==""?`<img src="${h}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:st(e)}function B(h,e="success"){const t=document.getElementById("toast-container");if(!t)return;const o=document.createElement("div");o.className=`toast toast-${e}`,o.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${h}</span>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(20px)",o.style.transition="all 200ms ease",setTimeout(()=>o.remove(),200)},3500)}function ce(h){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${h.modalClass||""}">
        <div class="modal-header">
          <h3>${h.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${h.bodyHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${h.cancelText||"Cancelar"}</button>
          ${h.confirmText?`<button type="button" class="btn ${h.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${h.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),o=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),c=()=>{e.innerHTML="",h.onCancel&&h.onCancel()};t.onclick=c,o.onclick=c,s&&h.onConfirm&&(s.onclick=async()=>{const L=document.querySelector(".modal-card");await h.onConfirm(L)!==!1&&(e.innerHTML="")})}function ye(){const h=document.getElementById("modal-container");h&&(h.innerHTML="")}function ge(h){ce({title:h.title||"Confirmar Exclusão",bodyHtml:`
      <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
          ⚠️
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
            ${h.message}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Esta operação não poderá ser desfeita.
          </div>
        </div>
      </div>
    `,confirmText:h.confirmText||"Excluir Definitivamente",confirmBtnClass:h.confirmBtnClass||"btn-danger",onConfirm:()=>(h.onConfirm(),!0)})}const O={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'};function Oe(h){return h.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function Le(h){const e=h.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function Ve(h){const e=h.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function He(h){const e=h.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function Xe(h){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h)}function nt(h){const e=h.replace(/\D/g,"").slice(0,6);if(e.length<=4)return e;const t=e.slice(0,4);let o=e.slice(4,6);return parseInt(o,10)>12&&(o="12"),o.length===2&&o==="00"&&(o="01"),`${t}-${o}`}function rt(h){const e=h.replace(/\D/g,"").slice(0,2);if(!e)return"";const t=parseInt(e,10);return t>31?"31":t===0?"1":e}function Ue(h){const e=h.trim().toUpperCase();return e.startsWith("I")||e.startsWith("IS")||e.startsWith("ISE")||e.startsWith("ISEN")||e.startsWith("ISENT")||e==="ISENTO"?"ISENTO".slice(0,e.length):h.replace(/\D/g,"").slice(0,14)}function ve(h){if(typeof h=="number")return h.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});const e=h.replace(/\D/g,"");return e?(parseInt(e,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}function Ne(h){if(!h)return 0;const e=h.replace(/[^\d,-]/g,"").replace(",","."),t=parseFloat(e);return isNaN(t)?0:t}function re(h,e){h.addEventListener("input",()=>{h.value=e(h.value)})}const De="acusticamente_auth_remember",it="acusticamente_manual_logout";function lt(h,e){const t=document.createElement("div");t.className="login-page";const o=z.getSettings(),s=o.nomeMenu||o.nomeFantasia||"Acusticamente";let c={username:"",password:"",remember:!1};try{const g=localStorage.getItem(De);g&&(c={...c,...JSON.parse(g)})}catch{c={username:"",password:"",remember:!1}}t.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${de(o.logotipoCustomizado,50)}
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
            ${de(o.logotipoCustomizado,58)}
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
  `;const L=t.querySelector("#login-remember"),a=t.querySelector("#btn-back-to-site");a==null||a.addEventListener("click",()=>{e?e():window.location.hash="site"});const M=t.querySelector("#login-form");return M.onsubmit=g=>{var f;g.preventDefault();const m=t.querySelector("#login-username"),E=t.querySelector("#login-password"),I=m.value.trim(),r=E.value.trim(),y=L.checked,x=te.login(I,r);x.success?(y?localStorage.setItem(De,JSON.stringify({username:I,password:r,remember:!0})):localStorage.removeItem(De),sessionStorage.removeItem(it),B(`Bem-vindo, ${(f=x.user)==null?void 0:f.nome}!`,"success"),h()):B(x.message,"error")},t}const he=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,Be=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function dt(h){var I,r,y;const e=document.createElement("div");e.className="public-site-wrapper";const t=z.getSettings(),o=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",c="(51) 98189-8802",L="51981898802",a="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",M="Segunda a Sexta · Aberto até 20:30",g="https://share.google/NtOxuUNfF6FGJ62tZ",m="https://www.instagram.com/acusticamente.rs",E=`https://wa.me/55${L}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Esquerdo: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${de(t.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${o}</span>
        </div>

        <!-- Canto Direito: Entrar em contato e ao lado direito o Entrar -->
        <div class="site-header-right">
          <a href="${E}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Fale conosco no WhatsApp">
            ${he}
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
          <a href="${E}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${he}
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
                ${Be}
              </div>
              <div class="insta-text">
                <div class="insta-tag">ACOMPANHE NOSSA ESCOLA</div>
                <h4 class="insta-title">@acusticamente.rs</h4>
                <p class="insta-subtitle">Veja a rotina das aulas, eventos e a evolução dos nossos alunos no Instagram.</p>
              </div>
            </div>
            <a href="${m}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" title="Abrir perfil no Instagram">
              ${Be}
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
                <p>${M}</p>
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
              <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${E}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${he}
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
        <a href="${E}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${he}
          <span>Entrar em contato</span>
        </a>
      </div>
    </section>

    <!-- Rodapé Completo com Endereço e Instagram -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${de(t.logotipoCustomizado,32)}
            <span>${o}</span>
          </div>
          <p>${s}</p>
          <div class="footer-address">
            <p>
              📍 <a href="${g}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);" title="Ver no Google Maps">
                ${a}
              </a>
            </p>
            <p>📞 <a href="${E}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${c}</a></p>
            <p>🕒 ${M}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Redes Sociais &amp; Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Acompanhe nosso dia a dia ou mande uma mensagem pelo WhatsApp.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${E}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${he}
              <span>Entrar em contato</span>
            </a>
            <a href="${m}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" style="display: inline-flex;" title="Instagram @acusticamente.rs">
              ${Be}
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
  `,(I=e.querySelector("#btn-header-login"))==null||I.addEventListener("click",()=>{const x=te.isAuthenticated();h(x?"home":"login")}),(r=e.querySelector("#btn-footer-login"))==null||r.addEventListener("click",()=>{const x=te.isAuthenticated();h(x?"home":"login")}),(y=e.querySelector("#site-logo-link"))==null||y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function Ge(h){var m,E;const e=document.createElement("div"),t=te.getCurrentUser(),o=z.getStudents(),s=z.getPlans(),c=z.getAppointments(),L=z.getTodayDateString(),a=c.filter(I=>I.data===L),M=o.filter(I=>I.status==="ativo").length,g=a.find(I=>I.status==="agendado");return e.innerHTML=`
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
        ${O.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${O.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${a.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${O.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${M}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${O.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${g?g.horaInicio:"--:--"}</span>
          <span class="metric-label">${g?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${O.planos}
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
            ${a.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':a.map(I=>{const r=o.find(w=>w.id===I.alunoId),y=s.find(w=>w.id===I.planoId),x=I.status==="concluido",f=I.status==="agendado";let i='<span class="badge badge-warning">⏳ Agendado</span>';return x?i='<span class="badge badge-success">✓ Concluído</span>':I.status==="falta_justificada"?i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':I.status==="falta_injustificada"?i='<span class="badge badge-danger">✕ Falta Injustificada</span>':I.status==="cancelado"&&(i='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${I.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${I.horaInicio} - ${I.horaFim}</strong>
                            ${I.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
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
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(y==null?void 0:y.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${i}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${f?`<button class="btn btn-secondary btn-complete-class" data-id="${I.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${x?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(m=e.querySelector("#home-btn-new-appointment"))==null||m.addEventListener("click",()=>{h("agenda")}),(E=e.querySelector("#home-btn-view-all-agenda"))==null||E.addEventListener("click",()=>{h("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(I=>{I.addEventListener("click",r=>{const y=r.currentTarget.dataset.id;y&&(z.updateAppointment(y,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),B("Aula concluída com sucesso!","success"),h("home"))})}),e}function ct(h){const e=document.createElement("div"),t=te.getCurrentUser();let o=new Date;function s(){var $,u,A,C;const a=z.getStudents();z.getPlans();const M=z.getAppointments(),g=o.getFullYear(),m=o.getMonth(),E=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],I=new Date(g,m,1).getDay(),r=new Date(g,m+1,0).getDate(),y=new Date(g,m,0).getDate(),x=new Date,f=x.getFullYear()===g&&x.getMonth()===m,i=[];for(let n=I;n>0;n--){const d=y-n+1;i.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${d}</span>
          </div>
        </div>
      `)}for(let n=1;n<=r;n++){const d=_=>_.toString().padStart(2,"0"),b=`${g}-${d(m+1)}-${d(n)}`,l=f&&x.getDate()===n,v=M.filter(_=>_.data===b),P=v.slice(0,3).map(_=>{const k=a.find(V=>V.id===_.alunoId),T=k?k.nome.split(" ")[0]:"Aula";let D="",R="";return _.status==="concluido"?(D="concluido",R="✓ "):_.status==="falta_justificada"?(D="falta-justificada",R="⚠️ "):_.status==="falta_injustificada"?(D="falta-injustificada",R="✕ "):_.tipoAula==="reposicao"&&(D="reposicao",R="🔄 "),`
            <div class="calendar-appointment-badge ${D}" 
                 data-app-id="${_.id}" 
                 title="${_.horaInicio} - ${(k==null?void 0:k.nome)||"Aluno"} (${_.status}${_.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${R}${_.horaInicio}</strong> ${T}
            </div>
          `}).join(""),N=v.length>3?v.length-3:0,j=N>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${N} mais</div>`:"";i.push(`
        <div class="calendar-day-cell ${l?"today":""}" data-date="${b}">
          <div class="day-cell-header">
            <span class="day-number">${n}</span>
            ${v.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${v.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${P}
            ${j}
          </div>
        </div>
      `)}const w=i.length,p=w>35?42-w:35-w;for(let n=1;n<=p;n++)i.push(`
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
            <h2 class="calendar-month-title">${E[m]} de ${g}</h2>
            
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
            ${ae(t,"agenda","cadastrar")?`
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${O.plus} Nova Aula / Compromisso
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
    `,($=e.querySelector("#agenda-btn-prev"))==null||$.addEventListener("click",()=>{o.setMonth(o.getMonth()-1),s()}),(u=e.querySelector("#agenda-btn-next"))==null||u.addEventListener("click",()=>{o.setMonth(o.getMonth()+1),s()}),(A=e.querySelector("#agenda-btn-today"))==null||A.addEventListener("click",()=>{o=new Date,s()}),(C=e.querySelector("#agenda-btn-new-app"))==null||C.addEventListener("click",()=>{L()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(n=>{n.addEventListener("click",d=>{const b=n.dataset.date;b&&c(b)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(n=>{n.addEventListener("click",d=>{d.stopPropagation();const b=n.dataset.appId,l=M.find(v=>v.id===b);l&&c(l.data)})})}function c(a){const M=z.getStudents(),g=z.getPlans(),m=z.getAppointments().filter(i=>i.data===a),[E,I,r]=a.split("-"),y=`${r}/${I}/${E}`,x=m.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${m.map(i=>{const w=M.find(v=>v.id===i.alunoId),p=g.find(v=>v.id===i.planoId),$=i.status==="concluido",u=i.status==="falta_justificada",A=i.status==="falta_injustificada",C=i.status==="cancelado",n=i.status==="agendado",d=i.tipoAula==="reposicao";let b="var(--color-coral)",l='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return $?(b="var(--status-success)",l='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):u?(b="#f59e0b",l='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):A?(b="var(--status-danger)",l='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):C&&(b="var(--border-subtle)",l='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${b};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${i.horaInicio} - ${i.horaFim}</strong>
                        ${l}
                        ${d?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${i.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(w==null?void 0:w.nome)||"Não vinculado"}</strong>
                        ${w!=null&&w.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${w.instrumentoPrincipal}</span>`:""}
                        ${p?` &bull; Plano: <span style="color: #ff9187;">${p.nome}</span>`:""}
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
                      ${ae(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${i.id}" title="Editar Detalhes">
                              ${O.edit}
                            </button>
                          `:""}
                      ${ae(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${i.id}" title="Excluir">
                              ${O.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${ae(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${n?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${i.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${i.id}" data-name="${(w==null?void 0:w.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
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
      `,f=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${m.length}</strong>
          </span>
          ${ae(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${O.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${x}
      </div>
    `;ce({title:`Aulas do Dia: ${y}`,bodyHtml:f,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var i;(i=document.getElementById("btn-modal-new-appointment"))==null||i.addEventListener("click",()=>{ye(),L({defaultDate:a})}),document.querySelectorAll(".btn-mark-presence").forEach(w=>{w.addEventListener("click",p=>{const $=p.currentTarget.dataset.id;$&&(z.marcarPresenca($,(t==null?void 0:t.nome)||"Administrador"),B("Presença confirmada e aula concluída!","success"),s(),c(a))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(w=>{w.addEventListener("click",p=>{const $=p.currentTarget.dataset.id,u=p.currentTarget.dataset.name;if(!$)return;const A=prompt(`Informe o motivo da falta justificada de ${u} (Ex: Atestado médico, Viagem em família):`);if(A===null)return;const C=z.registrarFalta($,!0,A,(t==null?void 0:t.nome)||"Administrador");B(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${C.saldoReposicoes}).`,"success"),s(),c(a)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(w=>{w.addEventListener("click",p=>{const $=p.currentTarget.dataset.id;$&&ge({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{z.registrarFalta($,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),B("Falta injustificada registrada.","info"),s(),c(a)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(w=>{w.addEventListener("click",p=>{const $=p.currentTarget,u=$.dataset.id,A=$.dataset.studentId,C=$.dataset.title;ye(),L({studentId:A,aulaOriginalId:u,tipoAula:"reposicao",titulo:C?`Reposição: ${C}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(w=>{w.addEventListener("click",p=>{const $=p.currentTarget.dataset.id,u=z.getAppointments().find(A=>A.id===$);u&&(ye(),L({existingApp:u}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(w=>{w.addEventListener("click",p=>{const $=p.currentTarget.dataset.id,u=z.getAppointments().find(A=>A.id===$);u&&ge({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${u.titulo}</strong>"?`,onConfirm:()=>{z.deleteAppointment(u.id,(t==null?void 0:t.nome)||"Administrador"),B("Compromisso removido.","info"),s(),c(a)}})})})},50)}function L(a){const M=z.getStudents(),g=z.getPlans(),m=a==null?void 0:a.existingApp,E=!!m,I=(m==null?void 0:m.alunoId)||(a==null?void 0:a.studentId)||"",r=(m==null?void 0:m.data)||(a==null?void 0:a.defaultDate)||z.getTodayDateString(),y=((m==null?void 0:m.tipoAula)||(a==null?void 0:a.tipoAula))==="reposicao",x=M.map(p=>`<option value="${p.id}" ${I===p.id?"selected":""} data-planoid="${p.planoId||""}">${p.nome} (${p.instrumentoPrincipal||"Geral"})</option>`).join(""),f=g.map(p=>{const $=(p.modulos||[]).reduce((u,A)=>{var C;return u+(((C=A.aulas)==null?void 0:C.length)||0)},0);return`<option value="${p.id}" ${(m==null?void 0:m.planoId)===p.id?"selected":""} data-total-aulas="${$}">${p.nome} (${$} aulas)</option>`}).join("");let i=E||y?"manual":"plano";const w=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!E&&!y?`
              <!-- Seletor de Modo de Agendamento -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px; display: flex; gap: 4px;">
                <button type="button" class="btn btn-sm ${i==="plano"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="plano" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  📚 Gerar pelo Plano Pedagógico
                </button>
                <button type="button" class="btn btn-sm ${i==="manual"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="manual" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  ✏️ Agendamento Manual
                </button>
              </div>
            `:""}

        <!-- PAINEL 1: GERAR PELO PLANO PEDAGÓGICO -->
        <div id="panel-app-plano" style="display: ${i==="plano"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.78rem; color: #fca5a5;">
            💡 <strong>Geração Automática:</strong> As aulas serão agendadas semanalmente na agenda a partir da data de início, cobrindo todos os módulos do plano selecionado.
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-student">Aluno *</label>
            <select id="app-plan-student" class="form-select" required>
              <option value="">Selecione o Aluno...</option>
              ${x}
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-select">Plano Pedagógico *</label>
            <select id="app-plan-select" class="form-select" required>
              <option value="">Selecione o Plano...</option>
              ${f}
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
        <div id="panel-app-manual" style="display: ${i==="manual"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <!-- Tipo de Aula -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
            <label class="form-label" style="margin: 0; font-size: 0.82rem; font-weight: 600;">Tipo:</label>
            <div style="display: flex; gap: 14px;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: var(--text-white);">
                <input type="radio" name="app-tipo-aula" value="regular" ${y?"":"checked"} style="accent-color: var(--color-coral);" />
                Regular
              </label>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: #4ade80;">
                <input type="radio" name="app-tipo-aula" value="reposicao" ${y?"checked":""} style="accent-color: #22c55e;" />
                🔄 Reposição
              </label>
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-title">Título *</label>
            <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Introdução" value="${(m==null?void 0:m.titulo)||(a==null?void 0:a.titulo)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-student">Aluno *</label>
              <select id="app-student" class="form-select">
                <option value="">Selecione...</option>
                ${x}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan">Plano</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${f}
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
              <input type="time" id="app-time-start" class="form-input" value="${(m==null?void 0:m.horaInicio)||"09:00"}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-end">Fim *</label>
              <input type="time" id="app-time-end" class="form-input" value="${(m==null?void 0:m.horaFim)||"10:00"}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-status">Status *</label>
              <select id="app-status" class="form-select">
                <option value="agendado" ${(m==null?void 0:m.status)==="agendado"?"selected":""}>⏳ Agendado</option>
                <option value="concluido" ${(m==null?void 0:m.status)==="concluido"?"selected":""}>✓ Presente</option>
                <option value="falta_justificada" ${(m==null?void 0:m.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
                <option value="falta_injustificada" ${(m==null?void 0:m.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
                <option value="cancelado" ${(m==null?void 0:m.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;" id="box-justificativa">
              <label class="form-label" for="app-justificativa">Justificativa</label>
              <input type="text" id="app-justificativa" class="form-input" placeholder="Motivo da falta..." value="${(m==null?void 0:m.justificativaFalta)||""}" />
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-obs">Observações</label>
            <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Orientações e conteúdo...">${(m==null?void 0:m.observacoes)||""}</textarea>
          </div>
        </div>

        ${E?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${O.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;ce({title:E?"Editar Aula":y?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:w,confirmText:E?"Salvar":"Confirmar",onConfirm:()=>{const p=(t==null?void 0:t.nome)||"Administrador";if(i==="plano"&&!E){const j=document.getElementById("app-plan-student").value,_=document.getElementById("app-plan-select").value,k=document.getElementById("app-plan-date-start").value,T=document.getElementById("app-plan-time-start").value,D=document.getElementById("app-plan-time-end").value;if(!j)return B("Selecione o aluno.","error"),!1;if(!_)return B("Selecione o plano pedagógico.","error"),!1;if(!k||!T||!D)return B("Informe data de início e horários.","error"),!1;const R=z.generateAppointmentsFromPlan(j,_,k,T,D,p);return R.length===0?(B("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(B(`Sucesso! ${R.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const $=document.getElementById("app-title").value.trim(),u=document.getElementById("app-student").value,A=document.getElementById("app-plan").value,C=document.getElementById("app-date").value,n=document.getElementById("app-time-start").value,d=document.getElementById("app-time-end").value,b=document.getElementById("app-status").value,l=document.getElementById("app-justificativa").value.trim(),v=document.getElementById("app-obs").value.trim(),P=document.querySelector('input[name="app-tipo-aula"]:checked'),N=(P==null?void 0:P.value)||"regular";return!$||!u||!C||!n?(B("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1):(E&&m?(z.updateAppointment(m.id,{titulo:$,alunoId:u,planoId:A||void 0,data:C,horaInicio:n,horaFim:d,status:b,tipoAula:N,justificativaFalta:l||void 0,observacoes:v},p),B("Aula atualizada com sucesso!","success")):N==="reposicao"?(z.agendarReposicao({titulo:$,alunoId:u,planoId:A||void 0,data:C,horaInicio:n,horaFim:d,status:b,justificativaFalta:l||void 0,observacoes:v},a==null?void 0:a.aulaOriginalId,p),B("Aula de reposição agendada (1 crédito abatido)!","success")):(z.addAppointment({titulo:$,alunoId:u,planoId:A||void 0,data:C,horaInicio:n,horaFim:d,status:b,tipoAula:N,justificativaFalta:l||void 0,observacoes:v},p),B("Aula agendada com sucesso!","success")),s(),!0)}}),setTimeout(()=>{var C;const p=document.querySelectorAll(".btn-app-mode"),$=document.getElementById("panel-app-plano"),u=document.getElementById("panel-app-manual");p.forEach(n=>{n.addEventListener("click",d=>{const b=d.currentTarget.dataset.mode;i=b,p.forEach(l=>{l.classList.remove("btn-primary"),l.classList.add("btn-secondary")}),d.currentTarget.classList.remove("btn-secondary"),d.currentTarget.classList.add("btn-primary"),$&&($.style.display=b==="plano"?"flex":"none"),u&&(u.style.display=b==="manual"?"flex":"none")})});const A=document.getElementById("app-plan-student");A==null||A.addEventListener("change",()=>{const n=A.selectedOptions[0],d=n==null?void 0:n.getAttribute("data-planoid");if(d){const b=document.getElementById("app-plan-select");b&&(b.value=d)}}),E&&m&&((C=document.getElementById("btn-delete-app"))==null||C.addEventListener("click",()=>{ge({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${m.titulo}</strong>"?`,onConfirm:()=>{z.deleteAppointment(m.id,(t==null?void 0:t.nome)||"Administrador"),B("Aula removida.","info"),ye(),s()}})}))},50)}return s(),e}const pt=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function Je(h){const e=(h||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function ut(h){if(!h)return"";const e=new Date(h+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,`${o} anos`}function We(h){if(!h)return null;const e=new Date(h+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let o=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&o--,o}function mt(h,e){const t=h.replace(/\D/g,"");if(!t)return"";const o=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${o}?text=${s}`}function Ke(h,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},o=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${h.id.toUpperCase()}</div>
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
              <strong>${h.descricao}</strong>
              ${h.observacoes?`<br><small style="color: #6b7280;">${h.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${h.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${h.dataPagamento?h.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${h.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${h.formaPagamento?t[h.formaPagamento]||h.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${h.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;ce({title:`Recibo de Pagamento: ${h.descricao}`,bodyHtml:o,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function ft(h){const e=document.createElement("div"),t=te.getCurrentUser();let o="";function s(){var y,x;const a=z.getStudents(),M=z.getPlans(),g=ae(t,"alunos","cadastrar"),m=ae(t,"alunos","alterar"),E=ae(t,"alunos","excluir"),I=a.filter(f=>f.nome.toLowerCase().includes(o.toLowerCase())||f.email.toLowerCase().includes(o.toLowerCase())||f.telefone.includes(o)||f.instrumentoPrincipal&&f.instrumentoPrincipal.toLowerCase().includes(o.toLowerCase())||f.responsavelNome&&f.responsavelNome.toLowerCase().includes(o.toLowerCase()));e.innerHTML=`
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
                ${O.plus} Cadastrar Novo Aluno
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
            ${O.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${I.length})</h3>
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
              ${I.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':I.map(f=>{const i=M.find(p=>p.id===f.planoId),w=f.status==="ativo";return`
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
                                <span style="font-size: 0.95rem;">${Je(f.instrumentoPrincipal)}</span>
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
                              <span class="badge ${w?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${w?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${f.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${O.profile}
                                </button>
                                ${m?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${f.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${O.edit}
                                      </button>
                                    `:""}
                                ${E?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${f.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${O.trash}
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
    `;const r=e.querySelector("#student-search-input");r==null||r.addEventListener("input",f=>{o=f.target.value,s();const i=e.querySelector("#student-search-input");i&&(i.focus(),i.selectionStart=i.selectionEnd=i.value.length)}),(y=e.querySelector("#btn-clear-search"))==null||y.addEventListener("click",()=>{o="",s()}),(x=e.querySelector("#btn-new-student"))==null||x.addEventListener("click",()=>{L()}),e.querySelectorAll(".btn-view-student").forEach(f=>{f.addEventListener("click",i=>{const w=i.currentTarget.dataset.id,p=z.getStudents().find($=>$.id===w);p&&c(p)})}),e.querySelectorAll(".btn-edit-student").forEach(f=>{f.addEventListener("click",i=>{const w=i.currentTarget.dataset.id,p=z.getStudents().find($=>$.id===w);p&&L(p)})}),e.querySelectorAll(".btn-delete-student").forEach(f=>{f.addEventListener("click",i=>{const w=i.currentTarget.dataset.id,p=z.getStudents().find($=>$.id===w);p&&ge({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${p.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{z.deleteStudent(p.id,(t==null?void 0:t.nome)||"Administrador"),B(`Aluno "${p.nome}" excluído.`,"info"),s()}})})})}function c(a){z.getPlans().find(n=>n.id===a.planoId);const g=z.getStudentAppointments(a.id),m=z.getStudentPayments(a.id),E=ut(a.dataNascimento),I=mt(a.telefone,a.nome),r=a.saldoReposicoes||0,y=z.isStudentOverdue(a.id),x=a.status==="ativo",f=ae(t,"financeiro","alterar"),i=g.length,w=g.filter(n=>n.status==="concluido").length,p=g.filter(n=>n.status==="falta_justificada").length,$=g.filter(n=>n.status==="falta_injustificada").length,u=m.filter(n=>n.status==="pago").reduce((n,d)=>n+d.valor,0),A=m.filter(n=>n.status!=="pago").reduce((n,d)=>n+d.valor,0),C=`
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
                <span>${Je(a.instrumentoPrincipal)} ${a.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${a.nivelMusical?a.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${E?`&bull; <span style="color: var(--text-muted);">${E}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${I?`
                  <a href="${I}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
                    ${O.whatsapp} WhatsApp
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
              ${y?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${m.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${w}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${p+$}</div>
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
                        ${g.map(n=>{const d=n.data.split("-").reverse().join("/");let b="";n.status==="concluido"?b='<span class="badge badge-success" style="font-size: 0.62rem;">Presente</span>':n.status==="falta_justificada"?b='<span class="badge badge-warning" style="font-size: 0.62rem;">Falta Just.</span>':n.status==="falta_injustificada"?b='<span class="badge badge-danger" style="font-size: 0.62rem;">Falta</span>':n.status==="cancelado"?b='<span class="badge badge-secondary" style="font-size: 0.62rem;">Cancelado</span>':b='<span class="badge badge-secondary" style="font-size: 0.62rem;">Agendado</span>';const l=n.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem;">Reposição</span>':'<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>';return`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong>${d}</strong>
                                <span style="font-size: 0.68rem; color: var(--text-muted); margin-left: 4px;">${n.horaInicio}</span>
                              </td>
                              <td><div style="color: var(--text-white); font-weight: 500;">${n.titulo}</div></td>
                              <td class="col-hide-sm">${l}</td>
                              <td>${b}</td>
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
              ${y?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: ${A>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${A.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${m.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${m.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${m.map(n=>{const d=n.status==="pago",b=n.status==="atrasado";let l="";return d?l='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':b?l='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':l='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${n.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${n.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${n.valor.toFixed(2)}</td>
                              <td>${l}</td>
                              <td class="col-hide-sm">${n.dataPagamento?n.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${d?`
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
    `;ce({title:`Ficha do Aluno: ${a.nome}`,bodyHtml:C,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var v;const n=document.getElementById("btn-tab-pedagogico"),d=document.getElementById("btn-tab-financeiro"),b=document.getElementById("panel-tab-pedagogico"),l=document.getElementById("panel-tab-financeiro");n==null||n.addEventListener("click",()=>{n.classList.add("active"),d==null||d.classList.remove("active"),b&&(b.style.display="flex"),l&&(l.style.display="none")}),d==null||d.addEventListener("click",()=>{d.classList.add("active"),n==null||n.classList.remove("active"),l&&(l.style.display="flex"),b&&(b.style.display="none")}),(v=document.getElementById("btn-quick-schedule-reposicao"))==null||v.addEventListener("click",()=>{ye(),h("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(P=>{P.addEventListener("click",N=>{const j=N.currentTarget.dataset.id,_=m.find(k=>k.id===j);_&&Ke(_,a)})}),document.querySelectorAll(".btn-pay-now").forEach(P=>{P.addEventListener("click",N=>{const j=N.currentTarget.dataset.id,_=m.find(D=>D.id===j);if(!_)return;const k=z.getTodayDateString(),T=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${_.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${_.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${_.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${a.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${k}" required />
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
          `;ce({title:`Dar Baixa: ${_.descricao}`,bodyHtml:T,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const D=document.getElementById("baixa-data").value,R=document.getElementById("baixa-forma").value,V=document.getElementById("baixa-obs").value;if(!D)return B("Informe a data de recebimento.","error"),!1;const J=(t==null?void 0:t.nome)||"Administrador";z.darBaixaPayment(_.id,D,R,J,V),B(`Baixa de R$ ${_.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const K=z.getStudents().find(G=>G.id===a.id)||a;return c(K),setTimeout(()=>{var G;(G=document.getElementById("btn-tab-financeiro"))==null||G.click()},50),!0}})})})},50)}function L(a){const M=z.getPlans(),g=!!a;a&&z.getStudentPayments(a.id);const m=M.map(r=>`<option value="${r.id}" ${(a==null?void 0:a.planoId)===r.id?"selected":""} data-valor="${r.valor??280}">${r.nome} - R$ ${(r.valor??280).toFixed(2)}</option>`).join(""),E=pt.map(r=>`<option value="${r}" ${(a==null?void 0:a.instrumentoPrincipal)===r?"selected":""}>${r}</option>`).join(""),I=`
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
                ${E}
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
              ${m}
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
                <input type="text" id="student-valor-mensalidade" class="form-input" placeholder="0,00" value="${(a==null?void 0:a.valorMensalidade)!==void 0?ve(a.valorMensalidade):"280,00"}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia do Vencimento *</label>
                <input type="text" id="student-dia-vencimento" class="form-input" maxlength="2" placeholder="10" value="${(a==null?void 0:a.diaVencimento)??10}" required />
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
    `;ce({title:g?`Editar: ${a.nome}`:"Cadastrar Aluno",bodyHtml:I,modalClass:"modal-lg",confirmText:g?"Salvar":"Cadastrar",onConfirm:()=>{var K,G,Q,Z;const r=document.getElementById("student-nome").value.trim(),y=document.getElementById("student-nascimento").value,x=document.getElementById("student-email").value.trim(),f=document.getElementById("student-telefone").value.trim(),i=((K=document.getElementById("student-cpf"))==null?void 0:K.value.trim())||void 0,w=document.getElementById("student-resp-nome").value.trim(),p=document.getElementById("student-resp-parentesco").value,$=document.getElementById("student-resp-tel").value.trim(),u=((G=document.getElementById("student-resp-cpf"))==null?void 0:G.value.trim())||void 0,A=document.getElementById("student-instrumento").value,C=document.getElementById("student-nivel").value,n=document.getElementById("student-plano").value,d=document.getElementById("student-status").value,b=document.getElementById("student-modulo").value.trim(),l=document.getElementById("student-saldo-reposicoes").value,v=Math.max(0,parseInt(l,10)||0),P=(Q=document.getElementById("student-valor-mensalidade"))==null?void 0:Q.value,N=Ne(P),j=(Z=document.getElementById("student-dia-vencimento"))==null?void 0:Z.value,_=Math.min(31,Math.max(1,parseInt(j,10)||10)),k=document.getElementById("student-obs").value.trim(),T=[];r||T.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),y||T.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),f?f.replace(/\D/g,"").length<10&&T.push({label:"Celular do Aluno incompleto",fieldId:"student-telefone",tabId:"tab-pessoal"}):T.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),i&&i.replace(/\D/g,"").length!==11&&T.push({label:"CPF do Aluno incompleto (11 dígitos)",fieldId:"student-cpf",tabId:"tab-pessoal"}),x&&!Xe(x)&&T.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const D=We(y);D!==null&&D<18&&(w||T.push({label:`Nome do Responsável (Aluno menor de idade: ${D} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),p||T.push({label:`Parentesco do Responsável (Aluno menor de idade: ${D} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),$?$.replace(/\D/g,"").length<10&&T.push({label:"Celular do Responsável incompleto",fieldId:"student-resp-tel",tabId:"tab-resp"}):T.push({label:`Celular do Responsável (Aluno menor de idade: ${D} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"}),u&&u.replace(/\D/g,"").length!==11&&T.push({label:"CPF do Responsável incompleto (11 dígitos)",fieldId:"student-resp-cpf",tabId:"tab-resp"})),d||T.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!P||N<=0)&&T.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const V=parseInt(j,10);if((!j||isNaN(V)||V<1||V>31)&&T.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),T.length>0){const oe=W=>{const F=document.querySelectorAll(".btn-form-tab"),se=document.querySelectorAll(".form-tab-panel");F.forEach(Y=>{Y.dataset.tab===W?Y.classList.add("active"):Y.classList.remove("active")}),se.forEach(Y=>{Y.style.display=Y.id===`form-panel-${W}`?"flex":"none"})},X=document.createElement("div");X.id="student-validation-alert",X.style.cssText=`
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
                  ${T.map(W=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${W.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(X);const ee=X.querySelector("#btn-validation-ok");return ee==null||ee.focus(),ee==null||ee.addEventListener("click",()=>{X.remove();const W=T[0];oe(W.tabId),setTimeout(()=>{const F=document.getElementById(W.fieldId);F&&(F.focus(),F.scrollIntoView({behavior:"smooth",block:"center"}),F.style.outline="2px solid var(--color-coral)",F.style.borderColor="var(--color-coral)",setTimeout(()=>{F.style.outline="",F.style.borderColor=""},3500))},100)}),!1}const J=(t==null?void 0:t.nome)||"Administrador";return g&&a?(z.updateStudent(a.id,{nome:r,dataNascimento:y,email:x,telefone:f,cpf:i,responsavelNome:w,responsavelParentesco:p,responsavelTelefone:$,responsavelCpf:u,instrumentoPrincipal:A,nivelMusical:C,planoId:n,status:d,moduloAtual:b,saldoReposicoes:v,valorMensalidade:N,diaVencimento:_,observacoes:k},J),B("Dados do aluno atualizados com sucesso!","success")):(z.addStudent({nome:r,dataNascimento:y,email:x,telefone:f,cpf:i,responsavelNome:w,responsavelParentesco:p,responsavelTelefone:$,responsavelCpf:u,instrumentoPrincipal:A,nivelMusical:C,planoId:n,status:d,moduloAtual:b,saldoReposicoes:v,valorMensalidade:N,diaVencimento:_,observacoes:k},J),B("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const r=document.querySelectorAll(".btn-form-tab"),y=document.querySelectorAll(".form-tab-panel");r.forEach(b=>{b.addEventListener("click",l=>{const v=l.currentTarget.dataset.tab;r.forEach(P=>{P.classList.remove("active")}),l.currentTarget.classList.add("active"),y.forEach(P=>{P.style.display=P.id===`form-panel-${v}`?"flex":"none"})})});const x=document.getElementById("student-cpf");x&&re(x,Oe);const f=document.getElementById("student-telefone");f&&re(f,Le);const i=document.getElementById("student-resp-cpf");i&&re(i,Oe);const w=document.getElementById("student-resp-tel");w&&re(w,Le);const p=document.getElementById("student-valor-mensalidade");p&&re(p,ve);const $=document.getElementById("student-dia-vencimento");$&&re($,rt);const u=document.getElementById("student-plano");u==null||u.addEventListener("change",()=>{const b=u.selectedOptions[0];if(b){const l=b.getAttribute("data-valor"),v=document.getElementById("student-valor-mensalidade");l&&v&&(v.value=ve(parseFloat(l)||0))}});const A=document.getElementById("student-nascimento"),C=document.getElementById("student-resp-alert"),n=document.querySelectorAll(".resp-req-star"),d=()=>{const b=A==null?void 0:A.value,l=We(b),v=l!==null&&l<18;C&&(C.style.display=v?"block":"none",v&&(C.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${l} anos).</strong> Dados do responsável são obrigatórios.`)),n.forEach(P=>{P.style.display=v?"inline":"none"})};A==null||A.addEventListener("input",d),A==null||A.addEventListener("change",d),d()},50)}return s(),e}const me=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Ye=me.reduce((h,e)=>h+e.items.length,0);function gt(h){let e=0;return me.forEach(t=>{const o=h[t.key];o&&t.items.forEach(s=>{o[s.key]&&e++})}),e}function vt(h){var L;const e=document.createElement("div"),t=te.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(L=e.querySelector("#btn-unauth-home"))==null||L.addEventListener("click",()=>h("home")),e;let o="";function s(){var E,I;const a=z.getUsers(),M=o.toLowerCase(),g=a.filter(r=>r.nome.toLowerCase().includes(M)||r.login.toLowerCase().includes(M)||r.papel.toLowerCase().includes(M));e.innerHTML=`
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
          ${O.plus} Cadastrar Novo Usuário
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
            ${O.search}
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
              ${g.map(r=>{const y=r.papel==="admin"?"Administrador":r.papel==="professor"?"Professor":"Atendente",x=ze(r),f=gt(x);return`
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
                          ${y}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${r.papel==="admin"?"badge-coral":f>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${r.papel==="admin"?`Acesso Total (${Ye})`:`${f} de ${Ye} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${r.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${r.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${O.edit}
                          </button>
                          ${r.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${O.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${r.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
                                   ${O.trash}
                                 </button>`}
                        </div>
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(E=e.querySelector("#btn-new-user"))==null||E.addEventListener("click",()=>{c()});const m=e.querySelector("#user-search-input");m&&m.addEventListener("input",r=>{o=r.target.value,s();const y=e.querySelector("#user-search-input");y&&(y.focus(),y.setSelectionRange(y.value.length,y.value.length))}),(I=e.querySelector("#btn-clear-search"))==null||I.addEventListener("click",()=>{o="",s()}),e.querySelectorAll(".btn-edit-user").forEach(r=>{r.addEventListener("click",y=>{const x=y.currentTarget.dataset.id,f=z.getUsers().find(i=>i.id===x);f&&c(f)})}),e.querySelectorAll(".btn-delete-user").forEach(r=>{r.addEventListener("click",y=>{const x=y.currentTarget.dataset.id,f=z.getUsers().find(i=>i.id===x);f&&ge({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${f.nome}</strong>" (login: <code>${f.login}</code>)?`,onConfirm:()=>{try{z.deleteUser(f.id,(t==null?void 0:t.nome)||"Administrador"),B(`Usuário "${f.nome}" excluído.`,"info"),s()}catch(i){B(i.message||"Erro ao excluir usuário.","error")}}})})})}function c(a){var i,w,p,$;const M=!!a,g=a?a.papel:"professor",m=g==="admin",E=ze(a),I=`
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
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${m?"none":"block"};">
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
            ${me.map(u=>{const A=E[u.key]||{},C=u.items.filter(n=>A[n.key]).length;return`
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
                          ${C}/${u.items.length} liberadas
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
                    ${u.items.map(n=>{const d=!!A[n.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${u.key}-${n.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${d?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${d?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${u.key}-${n.key}" 
                                data-group="${u.key}" 
                                data-action="${n.key}" 
                                ${d?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${n.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${u.key}-${n.key}" 
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
    `;ce({title:M?`Editar Usuário: ${a.nome}`:"Cadastrar Novo Usuário",bodyHtml:I,modalClass:"modal-lg",confirmText:M?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var P,N,j,_,k,T,D,R,V,J,K,G,Q,Z,oe,X,ee,W,F,se,Y,fe;const u=document.getElementById("user-nome").value.trim(),A=document.getElementById("user-login").value.trim(),C=document.getElementById("user-senha").value.trim(),n=document.getElementById("user-papel"),d=n?n.value:"professor";if(!u||!A||!C)return B("Preencha Nome, Login e Senha.","error"),!1;if(z.getUsers().find(q=>q.login===A&&q.id!==(a==null?void 0:a.id)))return B(`O login "${A}" já está em uso por outro usuário.`,"error"),!1;let l;d==="admin"?l=JSON.parse(JSON.stringify(be.admin)):l={alunos:{acesso:((P=document.getElementById("perm-alunos-acesso"))==null?void 0:P.checked)??!1,cadastrar:((N=document.getElementById("perm-alunos-cadastrar"))==null?void 0:N.checked)??!1,alterar:((j=document.getElementById("perm-alunos-alterar"))==null?void 0:j.checked)??!1,excluir:((_=document.getElementById("perm-alunos-excluir"))==null?void 0:_.checked)??!1},agenda:{acesso:((k=document.getElementById("perm-agenda-acesso"))==null?void 0:k.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((R=document.getElementById("perm-agenda-excluir"))==null?void 0:R.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((J=document.getElementById("perm-planos-cadastrar"))==null?void 0:J.checked)??!1,alterar:((K=document.getElementById("perm-planos-alterar"))==null?void 0:K.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((Q=document.getElementById("perm-financeiro-acesso"))==null?void 0:Q.checked)??!1,cadastrar:((Z=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:Z.checked)??!1,alterar:((oe=document.getElementById("perm-financeiro-alterar"))==null?void 0:oe.checked)??!1,excluir:((X=document.getElementById("perm-financeiro-excluir"))==null?void 0:X.checked)??!1},relatorios:{acesso:((ee=document.getElementById("perm-relatorios-acesso"))==null?void 0:ee.checked)??!1,gerar:((W=document.getElementById("perm-relatorios-gerar"))==null?void 0:W.checked)??!1},home:{acesso:((F=document.getElementById("perm-home-acesso"))==null?void 0:F.checked)??!1},auditoria:{acesso:((se=document.getElementById("perm-auditoria-acesso"))==null?void 0:se.checked)??!1},configuracoes:{acesso:((Y=document.getElementById("perm-configuracoes-acesso"))==null?void 0:Y.checked)??!1,alterar:((fe=document.getElementById("perm-configuracoes-alterar"))==null?void 0:fe.checked)??!1}};const v=(t==null?void 0:t.nome)||"Administrador";return M&&a?(z.updateUser(a.id,{nome:u,login:A,senha:C,papel:a.isSistema?"admin":d,permissoes:a.isSistema?be.admin:l},v),B("Usuário e permissões atualizados com sucesso!","success")):(z.addUser({nome:u,login:A,senha:C,papel:d,permissoes:l},v),B("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const r=document.getElementById("user-papel"),y=document.getElementById("user-permissions-section"),x=(u,A,C)=>{const n=document.getElementById(`row-perm-${u}-${A}`),d=document.getElementById(`badge-perm-${u}-${A}`);n&&d&&(C?(n.style.background="rgba(34, 197, 94, 0.06)",n.style.borderColor="rgba(34, 197, 94, 0.25)",d.className="badge badge-success",d.textContent="Liberado"):(n.style.background="rgba(234, 67, 53, 0.04)",n.style.borderColor="rgba(234, 67, 53, 0.15)",d.className="badge badge-coral",d.textContent="Bloqueado")),f(u)},f=u=>{const A=document.getElementById(`group-counter-${u}`),C=me.find(n=>n.key===u);if(A&&C){let n=0;C.items.forEach(d=>{const b=document.getElementById(`perm-${u}-${d.key}`);b&&b.checked&&n++}),A.textContent=`${n}/${C.items.length} liberadas`}};r==null||r.addEventListener("change",()=>{const u=r.value;if(u==="admin")y.style.display="none";else if(y.style.display="block",!M){const A=be[u]||be.professor;me.forEach(C=>{C.items.forEach(n=>{var b;const d=document.getElementById(`perm-${C.key}-${n.key}`);if(d){const l=((b=A[C.key])==null?void 0:b[n.key])??!1;d.checked=l,x(C.key,n.key,l)}})})}}),me.forEach(u=>{const A=document.getElementById(`header-group-${u.key}`),C=document.getElementById(`group-body-${u.key}`),n=document.getElementById(`arrow-perm-${u.key}`);A==null||A.addEventListener("click",d=>{if(!d.target.closest(".btn-group-toggle")&&C&&n){const b=C.style.display==="flex";C.style.display=b?"none":"flex",n.style.transform=b?"rotate(0deg)":"rotate(180deg)"}}),u.items.forEach(d=>{const b=document.getElementById(`perm-${u.key}-${d.key}`);b==null||b.addEventListener("change",()=>{if(x(u.key,d.key,b.checked),b.checked&&d.key!=="acesso"){const l=document.getElementById(`perm-${u.key}-acesso`);l&&!l.checked&&(l.checked=!0,x(u.key,"acesso",!0))}!b.checked&&d.key==="acesso"&&u.items.forEach(l=>{if(l.key!=="acesso"){const v=document.getElementById(`perm-${u.key}-${l.key}`);v&&v.checked&&(v.checked=!1,x(u.key,l.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${u.key}"]`).forEach(d=>{d.addEventListener("click",b=>{b.stopPropagation();const l=u.items.map(P=>document.getElementById(`perm-${u.key}-${P.key}`)).filter(Boolean),v=l.every(P=>P.checked);l.forEach(P=>{P.checked=!v,x(u.key,P.dataset.action,!v)})})})}),(i=document.getElementById("btn-perm-expand"))==null||i.addEventListener("click",()=>{me.forEach(u=>{const A=document.getElementById(`group-body-${u.key}`),C=document.getElementById(`arrow-perm-${u.key}`);A&&C&&(A.style.display="flex",C.style.transform="rotate(180deg)")})}),(w=document.getElementById("btn-perm-collapse"))==null||w.addEventListener("click",()=>{me.forEach(u=>{const A=document.getElementById(`group-body-${u.key}`),C=document.getElementById(`arrow-perm-${u.key}`);A&&C&&(A.style.display="none",C.style.transform="rotate(0deg)")})}),(p=document.getElementById("btn-perm-all"))==null||p.addEventListener("click",()=>{me.forEach(u=>{u.items.forEach(A=>{const C=document.getElementById(`perm-${u.key}-${A.key}`);C&&(C.checked=!0,x(u.key,A.key,!0))})})}),($=document.getElementById("btn-perm-none"))==null||$.addEventListener("click",()=>{me.forEach(u=>{u.items.forEach(A=>{const C=document.getElementById(`perm-${u.key}-${A.key}`);C&&(C.checked=!1,x(u.key,A.key,!1))})})})}return s(),e}function bt(h){const e=document.createElement("div"),t=te.getCurrentUser();let o="";const s=ae(t,"planos","cadastrar"),c=ae(t,"planos","alterar"),L=ae(t,"planos","excluir");function a(){var I,r;const m=z.getPlans().filter(y=>{const x=o.toLowerCase();return y.nome.toLowerCase().includes(x)||y.descricao&&y.descricao.toLowerCase().includes(x)});e.innerHTML=`
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
                ${O.plus} Novo Plano
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
            ${O.search}
          </div>
        </div>
        ${o?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Tabela Padronizada -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Cadastrados (${m.length})</h3>
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
              ${m.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${o?"Nenhum plano encontrado.":"Nenhum plano cadastrado."}
                      </td>
                    </tr>
                  `:m.map(y=>{const x=(y.modulos||[]).length,f=(y.modulos||[]).reduce((w,p)=>{var $;return w+((($=p.aulas)==null?void 0:$.length)||0)},0),i=typeof y.valor=="number"?`R$ ${y.valor.toFixed(2)}`:"R$ 280,00";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${O.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${y.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span style="font-weight: 700; color: #34d399; font-size: 0.88rem;">
                                ${i}
                              </span>
                              <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">/mês</span>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${x} ${x===1?"módulo":"módulos"}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${f} ${f===1?"aula":"aulas"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${y.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${c?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${y.id}" title="Editar Plano, Módulos e Aulas">
                                        ${O.edit}
                                      </button>
                                    `:""}
                                ${L?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${y.id}" title="Excluir Plano">
                                        ${O.trash}
                                      </button>
                                    `:""}
                                ${!c&&!L?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(I=e.querySelector("#btn-new-plan"))==null||I.addEventListener("click",()=>{M()});const E=e.querySelector("#plan-search-input");E&&E.addEventListener("input",y=>{o=y.target.value,a();const x=e.querySelector("#plan-search-input");x&&(x.focus(),x.setSelectionRange(x.value.length,x.value.length))}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{o="",a()}),e.querySelectorAll(".btn-edit-plan").forEach(y=>{y.addEventListener("click",x=>{const f=x.currentTarget.dataset.id,i=z.getPlans().find(w=>w.id===f);i&&M(i)})}),e.querySelectorAll(".btn-delete-plan").forEach(y=>{y.addEventListener("click",x=>{const f=x.currentTarget.dataset.id,i=z.getPlans().find(w=>w.id===f);i&&ge({title:"Excluir Plano",message:`Tem certeza que deseja excluir o plano "<strong>${i.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{z.deletePlan(i.id,(t==null?void 0:t.nome)||"Administrador"),B(`Plano "${i.nome}" excluído.`,"info"),a()}})})})}function M(g){const m=!!g;let E=g?JSON.parse(JSON.stringify(g.modulos||[])):[];E.forEach(f=>{Array.isArray(f.aulas)||(f.aulas=[])});function I(){return E.length===0?`
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo cadastrado ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo acima e clique em "+ Adicionar Módulo".
            </span>
          </div>
        `:E.map((f,i)=>`
            <div class="module-card-item" data-midx="${i}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-bottom: 8px;">
              <!-- Cabeçalho do Módulo (Nível 2) -->
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                  ${String(i+1).padStart(2,"0")}
                </div>

                <input 
                  type="text" 
                  class="module-title-input" 
                  data-midx="${i}" 
                  value="${f.titulo}" 
                  placeholder="Título do módulo..." 
                  style="flex: 1; background: rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
                />

                <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-icon-only btn-move-up" 
                    data-midx="${i}" 
                    title="Mover para Cima" 
                    style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem;"
                    ${i===0?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                  >
                    ▲
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-icon-only btn-move-down" 
                    data-midx="${i}" 
                    title="Mover para Baixo" 
                    style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem;"
                    ${i===E.length-1?'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"':""}
                  >
                    ▼
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-danger btn-icon-only btn-remove-module" 
                    data-midx="${i}" 
                    title="Excluir Módulo" 
                    style="width: 26px; height: 26px; padding: 0; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                  >
                    ${O.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo (Nível 3) -->
              <div style="padding-left: 20px; border-left: 2px solid rgba(234, 67, 53, 0.2); display: flex; flex-direction: column; gap: 6px;">
                <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">
                  Aulas deste Módulo (${f.aulas.length}):
                </div>

                ${f.aulas.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 2px 0;">Nenhuma aula cadastrada neste módulo.</div>':""}
                ${f.aulas.map((w,p)=>`
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.72rem; color: #60a5fa; font-weight: 700; width: 44px; flex-shrink: 0;">
                          Aula ${p+1}:
                        </span>
                        <input 
                          type="text" 
                          class="lesson-title-input" 
                          data-midx="${i}" 
                          data-aidx="${p}" 
                          value="${w.titulo}" 
                          placeholder="Título da aula..." 
                          style="flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 4px; color: var(--text-white); font-size: 0.8rem; padding: 4px 8px;"
                        />
                        <button 
                          type="button" 
                          class="btn btn-secondary btn-icon-only btn-remove-lesson" 
                          data-midx="${i}" 
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
                    data-midx="${i}" 
                    placeholder="Título da nova aula..." 
                    style="flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 4px; color: var(--text-white); font-size: 0.78rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-quick-add-lesson" 
                    data-midx="${i}" 
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
                value="${(g==null?void 0:g.nome)||""}" 
                required 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-valor" style="font-size: 0.78rem;">Valor Fixo (R$) *</label>
              <input 
                type="text" 
                id="plan-valor" 
                class="form-input" 
                placeholder="0,00" 
                value="${(g==null?void 0:g.valor)!==void 0?ve(g.valor):""}" 
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
              value="${(g==null?void 0:g.descricao)||""}" 
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
                ${E.length} módulos
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
              ${O.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Lista de Módulos e Aulas -->
          <div 
            id="modules-list-container" 
            style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${I()}
          </div>
        </div>

      </form>
    `;ce({title:m?`Editar: ${g.nome}`:"Cadastrar Plano de Ensino",bodyHtml:r,modalClass:"modal-lg",confirmText:m?"Salvar":"Cadastrar",onConfirm:()=>{const f=document.getElementById("plan-nome").value.trim(),i=document.getElementById("plan-valor").value,w=Ne(i),p=document.getElementById("plan-desc").value.trim(),$=E.map((A,C)=>{const n=(A.aulas||[]).map((d,b)=>({id:d.id||`aul_${C+1}_${b+1}_${Date.now()}`,ordem:b+1,titulo:d.titulo.trim()})).filter(d=>d.titulo.length>0);return{id:A.id||"mod_"+(C+1)+"_"+Date.now(),ordem:C+1,titulo:A.titulo.trim(),aulas:n}}).filter(A=>A.titulo.length>0);if(!f)return B("Informe o nome do plano de ensino.","error"),!1;if(w<=0)return B("Informe o valor fixo da mensalidade do plano.","error"),!1;if($.length===0)return B("Adicione pelo menos um módulo ao plano.","error"),!1;const u=(t==null?void 0:t.nome)||"Administrador";return m&&g?(z.updatePlan(g.id,{nome:f,descricao:p,valor:w,modulos:$},u),B("Plano atualizado com sucesso!","success")):(z.addPlan({nome:f,descricao:p,valor:w,modulos:$},u),B("Plano cadastrado com sucesso!","success")),a(),!0}});function y(){const f=document.getElementById("modules-list-container"),i=document.getElementById("modules-counter-badge");f&&(i&&(i.textContent=`${E.length} ${E.length===1?"módulo":"módulos"}`),f.innerHTML=I(),f.querySelectorAll(".module-title-input").forEach(w=>{w.addEventListener("input",p=>{const $=parseInt(p.target.getAttribute("data-midx")||"0",10);E[$]&&(E[$].titulo=p.target.value)})}),f.querySelectorAll(".lesson-title-input").forEach(w=>{w.addEventListener("input",p=>{var A;const $=parseInt(p.target.getAttribute("data-midx")||"0",10),u=parseInt(p.target.getAttribute("data-aidx")||"0",10);(A=E[$])!=null&&A.aulas[u]&&(E[$].aulas[u].titulo=p.target.value)})}),f.querySelectorAll(".btn-move-up:not([disabled])").forEach(w=>{w.addEventListener("click",p=>{const $=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10);if($>0){const u=E[$];E[$]=E[$-1],E[$-1]=u,E.forEach((A,C)=>A.ordem=C+1),y()}})}),f.querySelectorAll(".btn-move-down:not([disabled])").forEach(w=>{w.addEventListener("click",p=>{const $=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10);if($<E.length-1){const u=E[$];E[$]=E[$+1],E[$+1]=u,E.forEach((A,C)=>A.ordem=C+1),y()}})}),f.querySelectorAll(".btn-remove-module").forEach(w=>{w.addEventListener("click",p=>{const $=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10);E.splice($,1),E.forEach((u,A)=>u.ordem=A+1),y()})}),f.querySelectorAll(".btn-remove-lesson").forEach(w=>{w.addEventListener("click",p=>{var A;const $=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10),u=parseInt(p.currentTarget.getAttribute("data-aidx")||"0",10);(A=E[$])!=null&&A.aulas&&(E[$].aulas.splice(u,1),E[$].aulas.forEach((C,n)=>C.ordem=n+1),y())})}),f.querySelectorAll(".btn-quick-add-lesson").forEach(w=>{w.addEventListener("click",p=>{const $=parseInt(p.currentTarget.getAttribute("data-midx")||"0",10),u=f.querySelector(`.quick-add-lesson-input[data-midx="${$}"]`),A=u==null?void 0:u.value.trim();if(!A){B("Informe o título da aula.","info"),u==null||u.focus();return}E[$].aulas||(E[$].aulas=[]);const C=E[$].aulas.length+1;E[$].aulas.push({id:`aul_${E[$].id}_${C}_${Date.now()}`,ordem:C,titulo:A}),y()})}))}function x(){const f=document.getElementById("quick-add-module-input");if(!f)return;const i=f.value.trim();if(!i){B("Digite o nome do módulo para adicionar.","info"),f.focus();return}const w=E.length+1;E.push({id:"mod_"+w+"_"+Date.now(),ordem:w,titulo:i,aulas:[]}),f.value="",y(),f.focus();const p=document.getElementById("modules-list-container");p&&(p.scrollTop=p.scrollHeight)}setTimeout(()=>{const f=document.getElementById("btn-quick-add-module"),i=document.getElementById("quick-add-module-input"),w=document.getElementById("plan-valor");w&&re(w,ve),f==null||f.addEventListener("click",()=>{x()}),i==null||i.addEventListener("keydown",p=>{p.key==="Enter"&&(p.preventDefault(),x())}),y()},50)}return a(),e}function ht(h){const e=document.createElement("div"),t=te.getCurrentUser();let o="",s="todos",c=new Date;const L=ae(t,"financeiro","cadastrar"),a=ae(t,"financeiro","alterar"),M=ae(t,"financeiro","excluir");function g(){var d,b,l,v,P,N,j,_;const r=z.getPayments(),y=z.getStudents(),x=new Date,f=c!==null&&x.getMonth()===c.getMonth()&&x.getFullYear()===c.getFullYear(),i=c?`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`:"",w=r.filter(k=>k.status==="pago").reduce((k,T)=>k+T.valor,0),p=r.filter(k=>k.status==="pendente").reduce((k,T)=>k+T.valor,0),$=r.filter(k=>k.status==="atrasado").reduce((k,T)=>k+T.valor,0),u=y.filter(k=>k.status==="ativo"&&z.isStudentOverdue(k.id)),A=r.filter(k=>{const T=y.find(G=>G.id===k.alunoId),D=T?T.nome.toLowerCase():"",R=k.descricao.toLowerCase(),V=D.includes(o.toLowerCase())||R.includes(o.toLowerCase())||k.mesReferencia&&k.mesReferencia.includes(o),J=s==="todos"||k.status===s,K=!i||k.mesReferencia===i||k.dataVencimento.startsWith(i);return V&&J&&K});e.innerHTML=`
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
          ${L?`
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${O.plus} Novo Lançamento
                </button>
              `:""}
        </div>
      </div>

      <!-- Cards de Métricas e KPIs -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="panel-card" style="padding: 16px; border-left: 4px solid #22c55e;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Total Recebido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #4ade80; margin-top: 4px;">
            R$ ${w.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(k=>k.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${p.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(k=>k.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${$.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${r.filter(k=>k.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${u.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${y.filter(k=>k.status==="ativo").length} ativos</span>
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
            ${c?`Mensalidade / ${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`:"Todas as Mensalidades"}
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
          ⚠️ Inadimplentes (${u.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${r.filter(k=>k.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${r.filter(k=>k.status==="pago").length})
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
            ${O.search}
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

      ${s==="atrasado"&&u.length>0?`
            <!-- Painel de Inadimplência Responsivo e Otimizado -->
            <div style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-md); padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                <div style="font-size: 0.88rem; font-weight: 700; color: #f87171; display: flex; align-items: center; gap: 8px;">
                  <span>⚠️</span> Painel de Alunos Inadimplentes (${u.length})
                </div>
                <span style="font-size: 0.74rem; color: var(--text-muted);">
                  Acesso rápido para contato e regularização
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                ${u.map(k=>{const T=r.filter(G=>G.alunoId===k.id&&G.status==="atrasado"),D=T.reduce((G,Q)=>G+Q.valor,0),R=(k.telefone||"").replace(/\D/g,""),V=R.length<=11?`55${R}`:R,J=encodeURIComponent(`Olá, ${k.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),K=R?`https://wa.me/${V}?text=${J}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${k.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${T.length} fatura(s) atrasada(s) &bull; R$ ${D.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${k.telefone||"Sem telefone"}
                          </div>
                        </div>
                        ${K?`
                              <a href="${K}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; padding: 4px 8px; flex-shrink: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
                                ${O.whatsapp} Cobrar
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${A.length})</h3>
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
              ${A.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':A.map(k=>{const T=y.find(J=>J.id===k.alunoId),D=k.status==="pago",R=k.status==="atrasado";let V="";return D?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':R?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                                ${k.descricao}${k.mesReferencia?` / ${k.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${R?"#f87171":"var(--text-white)"}; font-weight: ${R?"700":"normal"};">
                                ${k.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${k.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!D&&a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${k.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${O.check}
                                      </button>
                                    `:""}

                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${k.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${a?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${k.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${O.edit}
                                      </button>
                                    `:""}

                                ${M?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${k.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${O.trash}
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
    `,(d=e.querySelector("#fin-btn-prev-month"))==null||d.addEventListener("click",()=>{c||(c=new Date),c=new Date(c.getFullYear(),c.getMonth()-1,1),g()}),(b=e.querySelector("#fin-btn-next-month"))==null||b.addEventListener("click",()=>{c||(c=new Date),c=new Date(c.getFullYear(),c.getMonth()+1,1),g()}),(l=e.querySelector("#fin-btn-current-month"))==null||l.addEventListener("click",()=>{c=new Date,g()}),(v=e.querySelector("#fin-btn-all-months"))==null||v.addEventListener("click",()=>{c=null,g()});const C=e.querySelector("#fin-search-input");C==null||C.addEventListener("input",k=>{o=k.target.value,g();const T=e.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(P=e.querySelector("#btn-clear-fin-search"))==null||P.addEventListener("click",()=>{o="",g()});const n=e.querySelector("#fin-status-filter");n==null||n.addEventListener("change",()=>{s=n.value,g()}),e.querySelectorAll(".btn-quick-filter").forEach(k=>{k.addEventListener("click",T=>{s=T.currentTarget.dataset.status,g()})}),(N=e.querySelector("#btn-limpar-status"))==null||N.addEventListener("click",()=>{s="todos",g()}),(j=e.querySelector("#btn-gerar-lote"))==null||j.addEventListener("click",()=>{E()}),(_=e.querySelector("#btn-novo-lancamento"))==null||_.addEventListener("click",()=>{I()}),e.querySelectorAll(".btn-action-baixa").forEach(k=>{k.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);R&&m(R)})}),e.querySelectorAll(".btn-action-recibo").forEach(k=>{k.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);if(R){const V=y.find(J=>J.id===R.alunoId);V&&Ke(R,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(k=>{k.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);R&&I(R)})}),e.querySelectorAll(".btn-action-delete").forEach(k=>{k.addEventListener("click",T=>{const D=T.currentTarget.dataset.id,R=r.find(V=>V.id===D);R&&ge({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${R.descricao}</strong>" no valor de <strong>R$ ${R.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{z.deletePayment(R.id,(t==null?void 0:t.nome)||"Administrador"),B("Lançamento excluído com sucesso!","info"),g()}})})})}function m(r){const y=z.getStudents().find(i=>i.id===r.alunoId),x=z.getTodayDateString(),f=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${r.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${r.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(y==null?void 0:y.nome)||"N/A"}</strong> &bull; Vencimento: ${r.dataVencimento.split("-").reverse().join("/")}
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
    `;ce({title:"Confirmar Baixa de Pagamento",bodyHtml:f,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const i=document.getElementById("modal-baixa-data").value,w=document.getElementById("modal-baixa-forma").value,p=document.getElementById("modal-baixa-obs").value;return i?(z.darBaixaPayment(r.id,i,w,(t==null?void 0:t.nome)||"Administrador",p),B(`Baixa efetuada com sucesso! R$ ${r.valor.toFixed(2)} recebido.`,"success"),g(),!0):(B("Informe a data de recebimento.","error"),!1)}})}function E(){const r=new Date,y=r.getFullYear(),x=r.getMonth()+1,f=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${y}" required />
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
    `;ce({title:"Gerar Mensalidades em Lote",bodyHtml:f,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const i=parseInt(document.getElementById("lote-ano").value,10),w=parseInt(document.getElementById("lote-mes").value,10);if(!i||!w)return B("Selecione ano e mês válidos.","error"),!1;const p=z.gerarMensalidadesMes(i,w,(t==null?void 0:t.nome)||"Administrador");return p.criadas===0&&p.puladas>0?B(`Todas as ${p.puladas} mensalidades deste mês já estavam criadas!`,"info"):B(`Sucesso: ${p.criadas} mensalidade(s) gerada(s)! (${p.puladas} já existentes puladas)`,"success"),g(),!0}})}function I(r){const y=!!r,x=z.getStudents(),f=z.getTodayDateString(),i=x.map(p=>`<option value="${p.id}" ${(r==null?void 0:r.alunoId)===p.id?"selected":""}>${p.nome} (${p.instrumentoPrincipal||"Geral"})</option>`).join(""),w=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${y?"disabled":""}>
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
            <label class="form-label" for="pay-mes">Mês Ref. (AAAA-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" maxlength="7" value="${(r==null?void 0:r.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="text" id="pay-valor" class="form-input" placeholder="0,00" value="${r?ve(r.valor):"280,00"}" required />
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
              <option value="cartao_credito" ${(r==null?void 0:r.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(r==null?void 0:r.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="dinheiro" ${(r==null?void 0:r.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="boleto" ${(r==null?void 0:r.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(r==null?void 0:r.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(r==null?void 0:r.observacoes)||""}" />
        </div>
      </form>
    `;ce({title:y?"Editar Lançamento":"Novo Lançamento Financeiro",bodyHtml:w,modalClass:"modal-md",confirmText:y?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const p=y&&r?r.alunoId:document.getElementById("pay-aluno").value,$=document.getElementById("pay-desc").value.trim(),u=document.getElementById("pay-mes").value.trim()||void 0,A=document.getElementById("pay-valor").value,C=Ne(A),n=document.getElementById("pay-vencimento").value,d=document.getElementById("pay-status").value,b=document.getElementById("pay-forma").value||void 0,l=document.getElementById("pay-obs").value.trim()||void 0;if(!p)return B("Selecione um aluno.","error"),!1;if(!$)return B("Informe a descrição do lançamento.","error"),!1;if(u&&!/^\d{4}-\d{2}$/.test(u))return B("Mês de referência deve estar no formato AAAA-MM (Ex: 2026-10).","error"),!1;if(C<=0)return B("Informe um valor válido maior que zero.","error"),!1;if(!n)return B("Informe a data de vencimento.","error"),!1;const v=(t==null?void 0:t.nome)||"Administrador";let P=d;return P!=="pago"&&(P=n<f?"atrasado":"pendente"),y&&r?(z.updatePayment(r.id,{descricao:$,mesReferencia:u,valor:C,dataVencimento:n,status:P,formaPagamento:b,dataPagamento:P==="pago"?r.dataPagamento||f:void 0,observacoes:l},v),B("Lançamento atualizado com sucesso!","success")):(z.addPayment({alunoId:p,descricao:$,mesReferencia:u,valor:C,dataVencimento:n,status:P,formaPagamento:b,dataPagamento:P==="pago"?f:void 0,observacoes:l},v),B("Novo lançamento cadastrado com sucesso!","success")),g(),!0}}),setTimeout(()=>{const p=document.getElementById("pay-mes");p&&re(p,nt);const $=document.getElementById("pay-valor");$&&re($,ve);const u=document.getElementById("pay-vencimento"),A=document.getElementById("pay-status");if(u==null||u.addEventListener("change",()=>{A&&A.value!=="pago"&&(A.value=u.value<f?"atrasado":"pendente")}),!y){const C=document.getElementById("pay-aluno");C==null||C.addEventListener("change",()=>{const n=x.find(d=>d.id===C.value);if(n){const d=document.getElementById("pay-valor");d&&typeof n.valorMensalidade=="number"&&(d.value=ve(n.valorMensalidade))}})}},50)}return g(),e}function yt(h){const e=document.createElement("div"),t=te.getCurrentUser(),o=ae(t,"relatorios","gerar");let s="alunos",c="todos",L="todos",a="todos",M="todos",g="todos",m="nome_asc",E="",I="",r="",y="",x="todos",f="todos",i="todos",w="vencimento_asc";function p(){var Q,Z,oe,X,ee,W,F,se,Y,fe,q,ne,ue,xe,we,$e,Ee,Fe,_e;const n=z.getSettings(),d=z.getStudents(),b=z.getPlans(),l=z.getPayments(),v=Array.from(new Set(d.map(S=>S.instrumentoPrincipal).filter(Boolean))).sort();let P=d.filter(S=>{if(c!=="todos"&&S.status!==c||L!=="todos"&&S.instrumentoPrincipal!==L||a!=="todos"&&S.nivelMusical!==a||M!=="todos"&&S.planoId!==M)return!1;if(g!=="todos"){const H=z.isStudentOverdue(S.id);if(g==="em_dia"&&H||g==="atrasado"&&!H)return!1}return!0});P.sort((S,H)=>m==="nome_asc"?S.nome.localeCompare(H.nome):m==="nome_desc"?H.nome.localeCompare(S.nome):m==="data_desc"?(H.criadoEm||"").localeCompare(S.criadoEm||""):m==="data_asc"?(S.criadoEm||"").localeCompare(H.criadoEm||""):0);const N=P.length,j=P.filter(S=>S.status==="ativo").length,_=P.filter(S=>S.status==="inativo").length,k=P.filter(S=>z.isStudentOverdue(S.id)).length,T=new Date().toISOString().slice(0,10);let D=l.filter(S=>{if(E&&S.dataVencimento<E||I&&S.dataVencimento>I)return!1;const H=S.mesReferencia||S.dataVencimento.slice(0,7);if(r&&H<r||y&&H>y||f!=="todos"&&S.alunoId!==f||i!=="todos"&&S.formaPagamento!==i)return!1;const ie=S.status!=="pago"&&S.dataVencimento<T;return!(x==="pago"&&S.status!=="pago"||x==="pendente"&&(S.status==="pago"||ie)||x==="atrasado"&&!ie)});const R=new Map(d.map(S=>[S.id,S.nome]));D.sort((S,H)=>{if(w==="vencimento_asc")return S.dataVencimento.localeCompare(H.dataVencimento);if(w==="vencimento_desc")return H.dataVencimento.localeCompare(S.dataVencimento);if(w==="valor_desc")return H.valor-S.valor;if(w==="aluno_asc"){const ie=R.get(S.alunoId)||"",Me=R.get(H.alunoId)||"";return ie.localeCompare(Me)}return 0});const V=D.length,J=D.reduce((S,H)=>S+H.valor,0),K=D.filter(S=>S.status==="pago").reduce((S,H)=>S+H.valor,0),G=D.filter(S=>S.status!=="pago").reduce((S,H)=>S+H.valor,0);e.innerHTML=`
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
                <option value="todos" ${L==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${v.map(S=>`<option value="${S}" ${L===S?"selected":""}>${S}</option>`).join("")}
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
                ${b.map(S=>`<option value="${S.id}" ${M===S.id?"selected":""}>${S.nome}</option>`).join("")}
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
                <option value="nome_asc" ${m==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${m==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${m==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${m==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores de Alunos (2 em cima, 2 em baixo) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Localizado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${N}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${j}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${_}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${k}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${P.length} registros)
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
                ${P.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':P.map(S=>{const H=b.find(Qe=>Qe.id===S.planoId),ie=S.status==="ativo",Me=z.isStudentOverdue(S.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${S.nome}</td>
                              <td class="col-hide-md">${S.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${S.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(H==null?void 0:H.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${ie?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${ie?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${Me?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
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
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${I}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${r}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${y}" />
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
                ${d.map(S=>`<option value="${S.id}" ${f===S.id?"selected":""}>${S.nome}</option>`).join("")}
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
                <option value="vencimento_asc" ${w==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${w==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${w==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${w==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
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
                ${D.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':D.map(S=>{const H=S.status==="pago",ie=!H&&S.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${R.get(S.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${S.descricao}${S.mesReferencia?` / ${S.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${S.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${S.valor.toFixed(2)}</td>
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
    `,(Q=e.querySelector("#btn-tab-rel-alunos"))==null||Q.addEventListener("click",()=>{s="alunos",p()}),(Z=e.querySelector("#btn-tab-rel-financeiro"))==null||Z.addEventListener("click",()=>{s="financeiro",p()}),(oe=e.querySelector("#filtro-aluno-status"))==null||oe.addEventListener("change",S=>{c=S.target.value,p()}),(X=e.querySelector("#filtro-aluno-instrumento"))==null||X.addEventListener("change",S=>{L=S.target.value,p()}),(ee=e.querySelector("#filtro-aluno-nivel"))==null||ee.addEventListener("change",S=>{a=S.target.value,p()}),(W=e.querySelector("#filtro-aluno-plano"))==null||W.addEventListener("change",S=>{M=S.target.value,p()}),(F=e.querySelector("#filtro-aluno-financeiro"))==null||F.addEventListener("change",S=>{g=S.target.value,p()}),(se=e.querySelector("#filtro-aluno-ordem"))==null||se.addEventListener("change",S=>{m=S.target.value,p()}),(Y=e.querySelector("#btn-limpar-filtros-alunos"))==null||Y.addEventListener("click",()=>{c="todos",L="todos",a="todos",M="todos",g="todos",m="nome_asc",p()}),(fe=e.querySelector("#filtro-fin-dataini"))==null||fe.addEventListener("change",S=>{E=S.target.value,p()}),(q=e.querySelector("#filtro-fin-datafim"))==null||q.addEventListener("change",S=>{I=S.target.value,p()}),(ne=e.querySelector("#filtro-fin-mesref-ini"))==null||ne.addEventListener("change",S=>{r=S.target.value,p()}),(ue=e.querySelector("#filtro-fin-mesref-fim"))==null||ue.addEventListener("change",S=>{y=S.target.value,p()}),(xe=e.querySelector("#filtro-fin-status"))==null||xe.addEventListener("change",S=>{x=S.target.value,p()}),(we=e.querySelector("#filtro-fin-aluno"))==null||we.addEventListener("change",S=>{f=S.target.value,p()}),($e=e.querySelector("#filtro-fin-metodo"))==null||$e.addEventListener("change",S=>{i=S.target.value,p()}),(Ee=e.querySelector("#filtro-fin-ordem"))==null||Ee.addEventListener("change",S=>{w=S.target.value,p()}),(Fe=e.querySelector("#btn-limpar-filtros-fin"))==null||Fe.addEventListener("click",()=>{E="",I="",r="",y="",x="todos",f="todos",i="todos",w="vencimento_asc",p()}),(_e=e.querySelector("#btn-gerar-pdf"))==null||_e.addEventListener("click",async()=>{if(!o){B("Você não possui permissão para emitir relatórios.","error");return}const S=e.querySelector("#btn-gerar-pdf"),H=S?S.innerHTML:"";S&&(S.disabled=!0,S.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await A(n,P,b):await C(n,D,d,{mesIni:r,mesFim:y}),B("PDF gerado com sucesso!","success")}catch(ie){console.error("Erro ao gerar PDF:",ie),B("Ocorreu um erro ao gerar o documento PDF.","error")}finally{S&&(S.disabled=!1,S.innerHTML=H)}})}function $(n){return new Promise(d=>{if(n&&n.trim()!==""){const b=new Image;b.crossOrigin="Anonymous",b.onload=()=>{try{const l=document.createElement("canvas");l.width=160,l.height=160;const v=l.getContext("2d");if(!v){d(n);return}const P=24;v.fillStyle="#ffffff",v.beginPath(),v.moveTo(P,0),v.lineTo(160-P,0),v.quadraticCurveTo(160,0,160,P),v.lineTo(160,160-P),v.quadraticCurveTo(160,160,160-P,160),v.lineTo(P,160),v.quadraticCurveTo(0,160,0,160-P),v.lineTo(0,P),v.quadraticCurveTo(0,0,P,0),v.closePath(),v.fill();const N=12,j=160-N*2,_=160-N*2;let k=j,T=_;const D=b.width/b.height;D>1?T=j/D:k=_*D;const R=N+(j-k)/2,V=N+(_-T)/2;v.drawImage(b,R,V,k,T),d(l.toDataURL("image/png"))}catch{d(n)}},b.onerror=()=>{u().then(d)},b.src=n;return}u().then(d)})}function u(){return new Promise(n=>{try{const d=document.createElement("canvas");d.width=160,d.height=160;const b=d.getContext("2d");if(!b){n("");return}const l=32;b.fillStyle="#181c2b",b.beginPath(),b.moveTo(l,0),b.lineTo(160-l,0),b.quadraticCurveTo(160,0,160,l),b.lineTo(160,160-l),b.quadraticCurveTo(160,160,160-l,160),b.lineTo(l,160),b.quadraticCurveTo(0,160,0,160-l),b.lineTo(0,l),b.quadraticCurveTo(0,0,l,0),b.closePath(),b.fill(),b.lineWidth=3,b.strokeStyle="#2d3748",b.stroke();const v=new Image,P=`
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
        `,N=new Blob([P],{type:"image/svg+xml;charset=utf-8"}),j=URL.createObjectURL(N);v.onload=()=>{b.drawImage(v,20,20,120,120),URL.revokeObjectURL(j),n(d.toDataURL("image/png"))},v.onerror=()=>{URL.revokeObjectURL(j),n("")},v.src=j}catch{n("")}})}async function A(n,d,b){const l=new Re({orientation:"portrait",unit:"mm",format:"a4"}),v=new Date().toLocaleString("pt-BR"),P=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",N=n.razaoSocial||"Acusticamente Ensino Musical Ltda",j=n.cnpj?`CNPJ: ${n.cnpj}`:"",_=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),k=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),T=await $(n.logotipoCustomizado);T&&l.addImage(T,"PNG",14,12,17,17);const D=T?35:14;l.setFont("helvetica","bold"),l.setFontSize(13),l.setTextColor(15,23,42),l.text(P,D,17),l.setFont("helvetica","normal"),l.setFontSize(8),l.setTextColor(71,85,105),l.text([N,j].filter(Boolean).join(" • "),D,21.5),l.setFontSize(7.5),l.setTextColor(100,116,139),k&&l.text(k,D,25.5),_&&l.text(_,D,k?29.5:25.5),l.setFont("helvetica","bold"),l.setFontSize(12),l.setTextColor(217,72,59),l.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),l.setFont("helvetica","normal"),l.setFontSize(8),l.setTextColor(100,116,139),l.text(`Emissão: ${v}`,196,22,{align:"right"}),l.text(`Total: ${d.length} aluno(s)`,196,26.5,{align:"right"}),l.setDrawColor(203,213,225),l.setLineWidth(.4),l.line(14,33,196,33);const R=d.filter(F=>F.status==="ativo").length,V=d.filter(F=>F.status==="inativo").length,J=d.filter(F=>z.isStudentOverdue(F.id)).length,K=[{label:"TOTAL DE ALUNOS",value:`${d.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${R}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${J}`,color:[220,38,38]}],G=43,Q=12,Z=36;K.forEach((F,se)=>{const Y=14+se*(G+3);l.setFillColor(248,250,252),l.roundedRect(Y,Z,G,Q,1.5,1.5,"F"),l.setDrawColor(226,232,240),l.roundedRect(Y,Z,G,Q,1.5,1.5,"S"),l.setFont("helvetica","bold"),l.setFontSize(6.5),l.setTextColor(100,116,139),l.text(F.label,Y+3,Z+4),l.setFontSize(10.5),l.setTextColor(F.color[0],F.color[1],F.color[2]),l.text(F.value,Y+3,Z+9.5)});const oe=d.map((F,se)=>{const Y=b.find(ne=>ne.id===F.planoId),fe=F.status==="ativo",q=z.isStudentOverdue(F.id);return[(se+1).toString(),F.nome,F.instrumentoPrincipal||"Música Geral",F.telefone||"-",(Y==null?void 0:Y.nome)||"-",fe?"Ativo":"Inativo",q?"Atrasado":"Em dia"]});qe(l,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:oe.length>0?oe:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:F=>{F.section==="body"&&(F.column.index===5&&(F.cell.raw==="Ativo"?(F.cell.styles.textColor=[22,163,74],F.cell.styles.fontStyle="bold"):F.cell.styles.textColor=[202,138,4]),F.column.index===6&&(F.cell.raw==="Atrasado"?(F.cell.styles.textColor=[220,38,38],F.cell.styles.fontStyle="bold"):F.cell.styles.textColor=[22,163,74]))}});const X=l.internal.getNumberOfPages();for(let F=1;F<=X;F++)l.setPage(F),l.setDrawColor(226,232,240),l.setLineWidth(.3),l.line(14,287,196,287),l.setFont("helvetica","normal"),l.setFontSize(7),l.setTextColor(148,163,184),l.text(`${P} • Sistema de Gestão Escolar & Pedagógica`,14,292),l.text(`Página ${F} de ${X}`,196,292,{align:"right"});const ee=l.output("blob"),W=URL.createObjectURL(ee);window.open(W,"_blank")}async function C(n,d,b,l){const v=new Re({orientation:"portrait",unit:"mm",format:"a4"}),P=new Map(b.map(q=>[q.id,q.nome])),N=new Date().toLocaleString("pt-BR"),j=n.nomeMenu||n.nomeFantasia||n.nomeEscola||"ACUSTICAMENTE",_=n.razaoSocial||"Acusticamente Ensino Musical Ltda",k=n.cnpj?`CNPJ: ${n.cnpj}`:"",T=[n.telefoneContato,n.emailContato].filter(Boolean).join(" • "),D=[n.logradouro?`${n.logradouro}, ${n.numero||"s/n"}`:"",n.complemento,n.bairro,n.cidade?`${n.cidade} - ${n.estado||"SP"}`:"",n.cep?`CEP: ${n.cep}`:""].filter(Boolean).join(" • "),R=new Date().toISOString().slice(0,10),V=d.reduce((q,ne)=>q+ne.valor,0),J=d.filter(q=>q.status==="pago").reduce((q,ne)=>q+ne.valor,0),K=d.filter(q=>q.status!=="pago").reduce((q,ne)=>q+ne.valor,0),G=await $(n.logotipoCustomizado);G&&v.addImage(G,"PNG",14,12,17,17);const Q=G?35:14;v.setFont("helvetica","bold"),v.setFontSize(13),v.setTextColor(15,23,42),v.text(j,Q,17),v.setFont("helvetica","normal"),v.setFontSize(8),v.setTextColor(71,85,105),v.text([_,k].filter(Boolean).join(" • "),Q,21.5),v.setFontSize(7.5),v.setTextColor(100,116,139),D&&v.text(D,Q,25.5),T&&v.text(T,Q,D?29.5:25.5),v.setFont("helvetica","bold"),v.setFontSize(12),v.setTextColor(5,150,105),v.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),v.setFont("helvetica","normal"),v.setFontSize(8),v.setTextColor(100,116,139),v.text(`Emissão: ${N}`,196,22,{align:"right"});let Z=`Total: ${d.length} registro(s)`;l!=null&&l.mesIni&&(l!=null&&l.mesFim)?Z=`Ref: ${l.mesIni} a ${l.mesFim} • ${d.length} reg.`:l!=null&&l.mesIni?Z=`Ref: a partir de ${l.mesIni} • ${d.length} reg.`:l!=null&&l.mesFim&&(Z=`Ref: até ${l.mesFim} • ${d.length} reg.`),v.text(Z,196,26.5,{align:"right"}),v.setDrawColor(203,213,225),v.setLineWidth(.4),v.line(14,33,196,33);const oe=[{label:"LANÇAMENTOS",value:`${d.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${J.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${K.toFixed(2)}`,color:[220,38,38]}],X=43,ee=12,W=36;oe.forEach((q,ne)=>{const ue=14+ne*(X+3);v.setFillColor(248,250,252),v.roundedRect(ue,W,X,ee,1.5,1.5,"F"),v.setDrawColor(226,232,240),v.roundedRect(ue,W,X,ee,1.5,1.5,"S"),v.setFont("helvetica","bold"),v.setFontSize(6.5),v.setTextColor(100,116,139),v.text(q.label,ue+3,W+4),v.setFontSize(10),v.setTextColor(q.color[0],q.color[1],q.color[2]),v.text(q.value,ue+3,W+9.5)});const F=d.map((q,ne)=>{const ue=q.status==="pago",xe=!ue&&q.dataVencimento<R,we=ue?"Pago":xe?"Atrasado":"Pendente",$e=q.descricao+(q.mesReferencia?` / ${q.mesReferencia}`:""),Ee=q.dataVencimento.split("-").reverse().join("/");return[(ne+1).toString(),P.get(q.alunoId)||"Aluno",$e,Ee,`R$ ${q.valor.toFixed(2)}`,we]});qe(v,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:F.length>0?F:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:q=>{q.section==="body"&&q.column.index===5&&(q.cell.raw==="Pago"?(q.cell.styles.textColor=[22,163,74],q.cell.styles.fontStyle="bold"):q.cell.raw==="Atrasado"?(q.cell.styles.textColor=[220,38,38],q.cell.styles.fontStyle="bold"):q.cell.styles.textColor=[202,138,4])}});const se=v.internal.getNumberOfPages();for(let q=1;q<=se;q++)v.setPage(q),v.setDrawColor(226,232,240),v.setLineWidth(.3),v.line(14,287,196,287),v.setFont("helvetica","normal"),v.setFontSize(7),v.setTextColor(148,163,184),v.text(`${j} • Gestão Financeira & Escolar`,14,292),v.text(`Página ${q} de ${se}`,196,292,{align:"right"});const Y=v.output("blob"),fe=URL.createObjectURL(Y);window.open(fe,"_blank")}return p(),e}function xt(h){const e=document.createElement("div");let t=new Date,o="";const s=g=>g.toString().padStart(2,"0");function c(g){const m=g.getDate(),I=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][g.getMonth()],r=g.getFullYear(),y=new Date,x=y.getDate()===m&&y.getMonth()===g.getMonth()&&y.getFullYear()===r;return`${m} de ${I} de ${r}${x?" (Hoje)":""}`}function L(g){return`${g.getFullYear()}-${s(g.getMonth()+1)}-${s(g.getDate())}`}function a(){var i,w,p,$,u,A,C,n;const g=U.getLogs(),m=new Date,E=`${s(m.getDate())}/${s(m.getMonth()+1)}/${m.getFullYear()}`,I=g.filter(d=>{var b;return(b=d.dataHoraFormatada)==null?void 0:b.startsWith(E)}).length,r=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",y=t!==null&&m.getDate()===t.getDate()&&m.getMonth()===t.getMonth()&&m.getFullYear()===t.getFullYear(),x=g.filter(d=>{const b=!t||d.dataHoraFormatada&&d.dataHoraFormatada.startsWith(r)||d.dataHora&&d.dataHora.startsWith(L(t)),l=o===""||d.tela.toLowerCase().includes(o.toLowerCase())||d.usuarioNome.toLowerCase().includes(o.toLowerCase())||d.usuarioLogin.toLowerCase().includes(o.toLowerCase())||d.acao.toLowerCase().includes(o.toLowerCase())||d.detalhes.toLowerCase().includes(o.toLowerCase());return b&&l});e.innerHTML=`
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
            <span>Registros de Hoje: <strong style="color: var(--color-coral);">${I}</strong></span>
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
            <button type="button" class="btn ${y?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${t?L(t):""}" 
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
            ${O.search}
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
                  `:x.map(d=>`
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
    `,(i=e.querySelector("#audit-btn-prev"))==null||i.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),a()}),(w=e.querySelector("#audit-btn-next"))==null||w.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),a()}),(p=e.querySelector("#audit-btn-today"))==null||p.addEventListener("click",()=>{t=new Date,a()}),($=e.querySelector("#audit-btn-all"))==null||$.addEventListener("click",()=>{t=null,a()}),(u=e.querySelector("#audit-empty-btn-all"))==null||u.addEventListener("click",()=>{t=null,a()}),(A=e.querySelector("#audit-date-picker"))==null||A.addEventListener("change",d=>{const b=d.target.value;if(b){const[l,v,P]=b.split("-").map(Number);t=new Date(l,v-1,P)}else t=null;a()});const f=e.querySelector("#audit-search-input");f==null||f.addEventListener("input",d=>{o=d.target.value,a();const b=e.querySelector("#audit-search-input");b&&(b.focus(),b.selectionStart=b.selectionEnd=b.value.length)}),(C=e.querySelector("#btn-clear-audit-search"))==null||C.addEventListener("click",()=>{o="",a()}),(n=e.querySelector("#btn-clear-all-audit"))==null||n.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await z.resetCleanDatabase("Administrador"),a())})}const M=()=>{a()};return window.addEventListener("audit_updated",M),a(),e}function wt(h){const e=document.createElement("div"),t=te.getCurrentUser(),o=z.getSettings(),s=ae(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${Ve(o.cnpj||"")}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 145px;">
                <label class="form-label" for="cfg-ie" style="font-size: 0.75rem;">Inscrição Estadual</label>
                <input 
                  type="text" 
                  id="cfg-ie" 
                  class="form-input" 
                  placeholder="Isento ou nº"
                  value="${Ue(o.inscricaoEstadual||"")}" 
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
                  value="${Le(o.telefoneContato||"")}" 
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
                  value="${He(o.cep||"")}" 
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
                    ${de(o.logotipoCustomizado,40)}
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
                    ${de(o.logotipoCustomizado,40)}
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
  `;const c=e.querySelector("#btn-tab-gerais"),L=e.querySelector("#btn-tab-instituicao"),a=e.querySelector("#tab-content-gerais"),M=e.querySelector("#tab-content-instituicao");function g(N,j){N&&(j?N.classList.add("active"):N.classList.remove("active"))}function m(N){a.style.display=N==="gerais"?"block":"none",M.style.display=N==="instituicao"?"block":"none",g(c,N==="gerais"),g(L,N==="instituicao")}c==null||c.addEventListener("click",()=>m("gerais")),L==null||L.addEventListener("click",()=>m("instituicao"));let E=o.logotipoCustomizado||"";const I=e.querySelector("#cfg-menu-name"),r=e.querySelector("#preview-menu-brand-name"),y=e.querySelector("#preview-report-brand-name"),x=e.querySelector("#preview-logo-menu"),f=e.querySelector("#preview-logo-report"),i=e.querySelector("#input-logo-file"),w=e.querySelector("#btn-upload-logo"),p=e.querySelector("#btn-reset-logo"),$=e.querySelector("#logo-feedback-msg");I==null||I.addEventListener("input",()=>{const N=I.value.trim()||"Acusticamente";r&&(r.textContent=N),y&&(y.textContent=N)}),w==null||w.addEventListener("click",()=>{i==null||i.click()}),i==null||i.addEventListener("change",N=>{const j=N.target.files;if(!j||j.length===0)return;const _=j[0];if(!_.type.startsWith("image/")){B("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(_.size>3*1024*1024){B("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const k=new FileReader;k.onload=T=>{var D;E=((D=T.target)==null?void 0:D.result)||"",x&&(x.innerHTML=de(E,40)),f&&(f.innerHTML=de(E,40)),p&&(p.disabled=!1,p.style.color="#ef4444"),$&&($.style.display="block",$.style.color="var(--status-success)",$.textContent="Imagem carregada no preview. Clique em Salvar."),B("Logotipo carregado na pré-visualização!","info")},k.onerror=()=>{B("Erro ao processar o arquivo de imagem.","error")},k.readAsDataURL(_)}),p==null||p.addEventListener("click",()=>{E="",i&&(i.value=""),x&&(x.innerHTML=de("",40)),f&&(f.innerHTML=de("",40)),p&&(p.disabled=!0,p.style.color="var(--text-muted)"),$&&($.style.display="block",$.style.color="var(--color-coral)",$.textContent="Logotipo padrão no preview. Clique em Salvar."),B("Logotipo padrão restaurado no preview.","info")});const u=e.querySelector("#form-settings-gerais");u==null||u.addEventListener("submit",N=>{N.preventDefault();const j=I.value.trim()||"Acusticamente";z.updateSettings({nomeMenu:j,logotipoCustomizado:E},(t==null?void 0:t.nome)||"Administrador"),$&&($.style.display="none"),B("Configurações gerais salvas com sucesso!","success")});const A=e.querySelector("#cfg-cnpj");A&&re(A,Ve);const C=e.querySelector("#cfg-ie");C&&re(C,Ue);const n=e.querySelector("#cfg-tel");n&&re(n,Le);const d=e.querySelector("#cfg-cep");d&&re(d,He);const b=e.querySelector("#cfg-uf");b==null||b.addEventListener("input",N=>{N.target.value=N.target.value.toUpperCase().slice(0,2)});const l=e.querySelector("#form-settings-institucional");l==null||l.addEventListener("submit",N=>{N.preventDefault();const j=e.querySelector("#cfg-fantasia").value.trim(),_=e.querySelector("#cfg-razao").value.trim(),k=e.querySelector("#cfg-cnpj").value.trim(),T=e.querySelector("#cfg-ie").value.trim(),D=e.querySelector("#cfg-tel").value.trim(),R=e.querySelector("#cfg-email").value.trim(),V=e.querySelector("#cfg-site").value.trim(),J=e.querySelector("#cfg-cep").value.trim(),K=e.querySelector("#cfg-logradouro").value.trim(),G=e.querySelector("#cfg-numero").value.trim(),Q=e.querySelector("#cfg-complemento").value.trim(),Z=e.querySelector("#cfg-bairro").value.trim(),oe=e.querySelector("#cfg-cidade").value.trim(),X=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!j){B("Informe o Nome Fantasia da instituição.","error");return}if(R&&!Xe(R)){B("Informe um endereço de e-mail válido.","error");return}const ee=k.replace(/\D/g,"");if(ee.length>0&&ee.length!==14){B("CNPJ incompleto (deve conter 14 dígitos).","error");return}const W=D.replace(/\D/g,"");if(W.length>0&&W.length<10){B("Telefone/WhatsApp incompleto.","error");return}const F=J.replace(/\D/g,"");if(F.length>0&&F.length!==8){B("CEP incompleto (deve conter 8 dígitos).","error");return}z.updateSettings({nomeEscola:j,nomeClinica:j,nomeFantasia:j,razaoSocial:_,cnpj:k,inscricaoEstadual:T,telefoneContato:D,emailContato:R,website:V,cep:J,logradouro:K,numero:G,complemento:Q,bairro:Z,cidade:oe,estado:X},(t==null?void 0:t.nome)||"Administrador"),B("Dados da instituição salvos com sucesso!","success")});const v=e.querySelector("#footer-cloud-status"),P=N=>{v&&(N==="connected"?(v.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,v.style.color="#4ade80"):N==="fallback"?(v.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,v.style.color="#fbbf24"):(v.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,v.style.color="#94a3b8"))};return P(z.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",N=>{P(N.detail)}),e}class $t{constructor(){le(this,"currentScreen","site");le(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=te.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":te.isAuthenticated()?["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(e)&&pe(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const o=window.location.hash.replace("#","").trim(),s=!o||o==="site"?"site":o;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const o=z.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=o.nomeMenu||"Acusticamente");const c=document.querySelector(".sidebar-logo");c&&(c.innerHTML=de(o.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{te.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),z.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const o of t)if(pe(e,o))return o;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!te.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=te.getCurrentUser();if(!pe(t,e)){B("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const o=this.getFirstAllowedScreen(t);this.currentScreen=o,window.location.hash=o,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),z.syncWithCloud()}render(){var r;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const y=dt(x=>{this.navigateTo(x)});this.appRoot.appendChild(y);return}if(this.currentScreen==="login"||!te.isAuthenticated()){const y=lt(()=>{const x=te.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(x))},()=>{this.navigateTo("site")});this.appRoot.appendChild(y);return}const e=document.createElement("div");e.className="app-container";const t=te.getCurrentUser(),o=(t==null?void 0:t.papel)==="admin",s=z.getSettings(),c=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${de(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${c}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${O.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${pe(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${O.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${pe(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${O.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${pe(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${O.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${pe(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${O.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${pe(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${O.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${pe(t,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${O.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${o?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${O.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${pe(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${O.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${pe(t,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${O.configuracoes}</span>
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
            ${O.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${O.menu}
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
    `;const L=e.querySelector("#app-sidebar"),a=e.querySelector("#sidebar-backdrop"),M=e.querySelector("#btn-mobile-menu-toggle"),g=e.querySelector("#btn-sidebar-close"),m=y=>{const x=y!==void 0?y:!L.classList.contains("open");L.classList.toggle("open",x),a.classList.toggle("open",x),document.body.style.overflow=x?"hidden":""};M==null||M.addEventListener("click",()=>m(!0)),g==null||g.addEventListener("click",()=>m(!1)),a==null||a.addEventListener("click",()=>m(!1)),e.querySelectorAll(".nav-item").forEach(y=>{y.addEventListener("click",x=>{const f=x.currentTarget.dataset.screen;m(!1),f&&this.navigateTo(f)})}),(r=e.querySelector("#btn-app-logout"))==null||r.addEventListener("click",()=>{ge({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{te.logout(),this.navigateTo("site")}})});const E=e.querySelector("#screen-viewport"),I=this.createViewElement(this.currentScreen);E.appendChild(I),this.appRoot.appendChild(e)}createViewElement(e){const t=o=>this.navigateTo(o);switch(e){case"home":return Ge(t);case"agenda":return ct();case"alunos":return ft(t);case"user":return vt(t);case"planos":return bt();case"financeiro":return ht();case"relatorios":return yt();case"auditoria":return xt();case"configuracoes":return wt();default:return Ge(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new $t});
