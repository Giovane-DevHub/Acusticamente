var et=Object.defineProperty;var tt=(x,e,t)=>e in x?et(x,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[e]=t;var le=(x,e,t)=>tt(x,typeof e!="symbol"?e+"":e,t);import{E as _e,a as qe}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const L of c.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&a(L)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const Oe="acusticamente_audit_logs";class at{constructor(){le(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Oe);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Oe,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,a=L=>L.toString().padStart(2,"0"),s=`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} ${a(t.getHours())}:${a(t.getMinutes())}:${a(t.getSeconds())}`,c={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(c),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:c})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:c})),c}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const H=new at,Le="acusticamente_users",Ae="acusticamente_students",Se="acusticamente_plans",je="acusticamente_payment_plans",Ie="acusticamente_appointments",Te="acusticamente_settings",ke="acusticamente_payments";class ot{constructor(){le(this,"users",[]);le(this,"students",[]);le(this,"plans",[]);le(this,"paymentPlans",[]);le(this,"appointments",[]);le(this,"payments",[]);le(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});le(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(Le);e?this.users=JSON.parse(e).map($=>{var w,f;return{...$,permissoes:{...$.permissoes,financeiro:((w=$.permissoes)==null?void 0:w.financeiro)||($.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:$.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((f=$.permissoes)==null?void 0:f.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Se);if(t)try{const $=JSON.parse(t);this.plans=$.map(w=>({...w,valor:typeof w.valor=="number"?w.valor:280,modulos:(w.modulos||[]).map((f,g)=>({...f,aulas:Array.isArray(f.aulas)&&f.aulas.length>0?f.aulas:[{id:`aul_${f.id||g+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${f.id||g+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${f.id||g+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${f.id||g+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],this.savePlans();const a=localStorage.getItem(je);if(a)try{this.paymentPlans=JSON.parse(a)}catch{this.paymentPlans=[]}(!this.paymentPlans||this.paymentPlans.length===0)&&(this.paymentPlans=[{id:"pp_ind_mensal",nome:"Individual - Mensal",modalidade:"individual",periodicidade:"mensal",valorMensal:280,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas individuais semanais com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_ind_trimestral",nome:"Individual - Trimestral",modalidade:"individual",periodicidade:"trimestral",valorMensal:250,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual com fidelidade trimestral e valor promocional.",criadoEm:new Date().toISOString()},{id:"pp_ind_semestral",nome:"Individual - Semestral",modalidade:"individual",periodicidade:"semestral",valorMensal:230,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual semestral com máxima economia.",criadoEm:new Date().toISOString()},{id:"pp_turma_mensal",nome:"Turma - Mensal",modalidade:"turma",periodicidade:"mensal",valorMensal:190,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em pequenos grupos (turmas) com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_turma_trimestral",nome:"Turma - Trimestral",modalidade:"turma",periodicidade:"trimestral",valorMensal:170,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade trimestral.",criadoEm:new Date().toISOString()},{id:"pp_turma_semestral",nome:"Turma - Semestral",modalidade:"turma",periodicidade:"semestral",valorMensal:150,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade semestral.",criadoEm:new Date().toISOString()}],this.savePaymentPlans());const s=localStorage.getItem(Ae);s?this.students=JSON.parse(s).map($=>({...$,saldoReposicoes:typeof $.saldoReposicoes=="number"?$.saldoReposicoes:0,instrumentoPrincipal:$.instrumentoPrincipal||"Violão",nivelMusical:$.nivelMusical||"iniciante",valorMensalidade:typeof $.valorMensalidade=="number"?$.valorMensalidade:280,diaVencimento:typeof $.diaVencimento=="number"?$.diaVencimento:10})):(this.students=[],this.saveStudents());const c=localStorage.getItem(Ie);c?this.appointments=JSON.parse(c):(this.appointments=[],this.saveAppointments());const L=localStorage.getItem(Te);L&&(this.settings=JSON.parse(L));const o=localStorage.getItem(ke);o?this.payments=JSON.parse(o):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach($=>{$.nome.includes("Reabilitação")&&($.nome="Violão e Harmonia Prática",$.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",$.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),this.savePlans(),this.students.forEach($=>{var w;(w=$.observacoes)!=null&&w.includes("implante")&&($.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",$.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach($=>{var w;(w=$.titulo)!=null&&w.includes("Auditivo")&&($.titulo="Aula Prática de Violão",$.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=a=>a.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,a){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:a})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const a=t.data;return Array.isArray(a.students)&&(this.students=a.students,localStorage.setItem(Ae,JSON.stringify(this.students))),Array.isArray(a.payments)&&(this.payments=a.payments,localStorage.setItem(ke,JSON.stringify(this.payments))),Array.isArray(a.appointments)&&(this.appointments=a.appointments,localStorage.setItem(Ie,JSON.stringify(this.appointments))),Array.isArray(a.plans)&&(this.plans=a.plans,localStorage.setItem(Se,JSON.stringify(this.plans))),Array.isArray(a.users)&&a.users.length>0&&(this.users=a.users,localStorage.setItem(Le,JSON.stringify(this.users))),a.settings&&(this.settings={...this.settings,...a.settings},localStorage.setItem(Te,JSON.stringify(this.settings))),Array.isArray(a.audit)&&(a.audit.length===0?H.clearLocalOnly():H.setLogs(a.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(Ae,JSON.stringify([])),localStorage.setItem(ke,JSON.stringify([])),localStorage.setItem(Ie,JSON.stringify([])),localStorage.setItem(Se,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await H.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Le,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(Ae,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Se,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Ie,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(ke,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}savePaymentPlans(){localStorage.setItem(je,JSON.stringify(this.paymentPlans)),this.pushToCloud("payment_plans","replace_all",this.paymentPlans)}saveSettings(){localStorage.setItem(Te,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const a={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(a),this.saveUsers(),H.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${a.nome}" (login: ${a.login}, papel: ${a.papel})`}),a}updateUser(e,t,a){const s=this.users.findIndex(o=>o.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const c=this.users[s],L=c.isSistema;return this.users[s]={...c,...t,isSistema:L,atualizadoEm:new Date().toISOString()},this.saveUsers(),H.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:a,detalhes:`Usuário "${c.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const a=this.users.find(s=>s.id===e);if(!a)throw new Error("Usuário não encontrado.");if(a.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),H.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${a.nome}" (login: ${a.login}) foi removido.`})}getStudents(){return[...this.students]}getStudentById(e){return this.students.find(t=>t.id===e)}addStudent(e,t){const a={...e,id:"aluno_"+Date.now(),saldoReposicoes:0,criadoEm:new Date().toISOString()};return this.students.push(a),this.saveStudents(),H.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" cadastrado com status ${a.status}. Saldo de remarcação inicial: 0.`}),a}updateStudent(e,t,a){const s=this.students.findIndex(o=>o.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const c=this.students[s],L={...t};return delete L.saldoReposicoes,this.students[s]={...c,...L,saldoReposicoes:c.saldoReposicoes??0},this.saveStudents(),H.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:a,detalhes:`Aluno "${c.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const a=this.students.find(s=>s.id===e);a&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),H.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const a={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(a),this.savePlans(),H.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" criado com ${a.modulos.length} módulos.`}),a}updatePlan(e,t,a){const s=this.plans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano não encontrado.");const c=this.plans[s];return this.plans[s]={...c,...t},this.savePlans(),H.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:a,detalhes:`Plano "${c.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const a=this.plans.find(s=>s.id===e);a&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),H.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" foi excluído.`}))}getPaymentPlans(){return[...this.paymentPlans]}getPaymentPlanById(e){return this.paymentPlans.find(t=>t.id===e)}addPaymentPlan(e,t){const a={...e,id:"pp_"+Date.now(),criadoEm:new Date().toISOString()};return this.paymentPlans.push(a),this.savePaymentPlans(),H.log({tela:"Planos de Pagamento",acao:"Criação de Plano de Pagamento",usuarioNome:t,detalhes:`Plano "${a.nome}" criado (Modalidade: ${a.modalidade}, Ciclo: ${a.periodicidade}, R$ ${a.valorMensal}).`}),a}updatePaymentPlan(e,t,a){const s=this.paymentPlans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano de pagamento não encontrado.");const c=this.paymentPlans[s];return this.paymentPlans[s]={...c,...t},this.savePaymentPlans(),H.log({tela:"Planos de Pagamento",acao:"Atualização de Plano de Pagamento",usuarioNome:a,detalhes:`Plano de pagamento "${c.nome}" atualizado.`}),this.paymentPlans[s]}deletePaymentPlan(e,t){const a=this.paymentPlans.find(s=>s.id===e);a&&(this.paymentPlans=this.paymentPlans.filter(s=>s.id!==e),this.savePaymentPlans(),H.log({tela:"Planos de Pagamento",acao:"Exclusão de Plano de Pagamento",usuarioNome:t,detalhes:`Plano de pagamento "${a.nome}" foi excluído.`}))}calcularMensalidadeAluno(e,t){const a=this.paymentPlans.find($=>$.id===e),s=a?a.valorMensal:280,c=t?(a==null?void 0:a.descontoSegundaMatricula)??20:0,L=c>0?s*c/100:0,o=Math.max(0,s-L);return{valorBase:s,descontoPercentual:c,valorDesconto:L,valorFinal:o}}getAppointments(){return[...this.appointments]}addAppointment(e,t){const a={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(a),this.saveAppointments();const s=this.students.find(c=>c.id===a.alunoId);return H.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${a.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${a.data} às ${a.horaInicio}.`}),a}updateAppointment(e,t,a){const s=this.appointments.findIndex(w=>w.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const c=this.appointments[s],L=c.status,o=t.status!==void 0?t.status:c.status;this.appointments[s]={...c,...t},this.saveAppointments();const $=this.students.find(w=>w.id===(t.alunoId||c.alunoId));return $&&(L!=="falta_justificada"&&o==="falta_justificada"?($.saldoReposicoes=($.saldoReposicoes||0)+1,this.saveStudents(),H.log({tela:"Agenda",acao:"Crédito de Remarcação Automático (+1)",usuarioNome:a,detalhes:`Status da aula "${c.titulo}" alterado para Falta Justificada. +1 crédito gerado para "${$.nome}". Saldo atual: ${$.saldoReposicoes}.`})):L==="falta_justificada"&&o!=="falta_justificada"&&($.saldoReposicoes=Math.max(0,($.saldoReposicoes||0)-1),this.saveStudents(),H.log({tela:"Agenda",acao:"Estorno de Crédito de Remarcação (-1)",usuarioNome:a,detalhes:`Falta justificada na aula "${c.titulo}" alterada para "${o}". 1 crédito estornado de "${$.nome}". Saldo atual: ${$.saldoReposicoes}.`})),(t.tipoAula||c.tipoAula)==="reposicao"&&(L!=="cancelado"&&o==="cancelado"?($.saldoReposicoes=($.saldoReposicoes||0)+1,this.saveStudents(),H.log({tela:"Agenda",acao:"Estorno por Cancelamento de Reposição (+1)",usuarioNome:a,detalhes:`Reposição cancelada para "${$.nome}". 1 crédito devolvido ao saldo. Saldo atual: ${$.saldoReposicoes}.`})):L==="cancelado"&&o==="agendado"&&($.saldoReposicoes=Math.max(0,($.saldoReposicoes||0)-1),this.saveStudents(),H.log({tela:"Agenda",acao:"Consumo por Reativação de Reposição (-1)",usuarioNome:a,detalhes:`Reposição reativada para "${$.nome}". 1 crédito consumido. Saldo atual: ${$.saldoReposicoes}.`})))),H.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:a,detalhes:`Compromisso "${c.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const a=this.appointments.find(s=>s.id===e);if(a){if(a.tipoAula==="reposicao"&&a.status!=="concluido"){const s=this.students.find(c=>c.id===a.alunoId);s&&(s.saldoReposicoes=(s.saldoReposicoes||0)+1,this.saveStudents(),H.log({tela:"Agenda",acao:"Estorno Automático de Crédito (+1)",usuarioNome:t,detalhes:`Aula de reposição excluída para "${s.nome}". 1 crédito estornado automaticamente ao saldo. Saldo atual: ${s.saldoReposicoes}.`}))}this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),H.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${a.titulo}" removido da agenda.`})}}marcarPresenca(e,t){const a=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(c=>c.id===a.alunoId);return H.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${a.titulo}".`}),a}registrarFalta(e,t,a,s){const c=t?"falta_justificada":"falta_injustificada",L=this.updateAppointment(e,{status:c,justificativaFalta:(a==null?void 0:a.trim())||void 0},s),o=this.students.find(w=>w.id===L.alunoId),$=(o==null?void 0:o.saldoReposicoes)||0;return{appointment:L,saldoReposicoes:$}}agendarReposicao(e,t,a){const s=this.students.find(L=>L.id===e.alunoId);if(!s||typeof s.saldoReposicoes!="number"||s.saldoReposicoes<=0)throw new Error(`O aluno "${(s==null?void 0:s.nome)||"selecionado"}" não possui créditos de remarcação disponíveis para agendar reposição.`);const c=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},a);if(t){const L=this.appointments.findIndex(o=>o.id===t);L!==-1&&(this.appointments[L].aulaReposicaoId=c.id,this.saveAppointments())}return s.saldoReposicoes-=1,this.saveStudents(),H.log({tela:"Agenda",acao:"Aula de Reposição Agendada (-1 Crédito)",usuarioNome:a,detalhes:`Reposição agendada para "${s.nome}". 1 crédito abatido automaticamente. Saldo restante: ${s.saldoReposicoes}.`}),c}generateAppointmentsFromPlan(e,t,a,s,c,L){const o=this.students.find(z=>z.id===e),$=this.plans.find(z=>z.id===t);if(!o||!$)return[];const w=[];if(($.modulos||[]).forEach(z=>{(z.aulas||[]).forEach(n=>{w.push({moduloId:z.id,moduloTitulo:z.titulo,aulaTitulo:n.titulo,aulaId:n.id})})}),w.length===0)return[];const f=[];let g=new Date(a+"T12:00:00");return w.forEach((z,n)=>{const k=m=>m.toString().padStart(2,"0"),h=`${g.getFullYear()}-${k(g.getMonth()+1)}-${k(g.getDate())}`,S={id:`app_${Date.now()}_${n}_${Math.random().toString(36).substr(2,4)}`,alunoId:o.id,planoId:$.id,moduloId:z.moduloId,aulaId:z.aulaId,titulo:`${z.aulaTitulo}`,data:h,horaInicio:s,horaFim:c,status:"agendado",tipoAula:"regular",observacoes:`${$.nome} • ${z.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push(S),f.push(S),g.setDate(g.getDate()+7)}),this.saveAppointments(),H.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:L,detalhes:`Geradas ${f.length} aulas regulares para "${o.nome}" com base no plano "${$.nome}".`}),f}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,a)=>{const s=`${t.data}T${t.horaInicio}`;return`${a.data}T${a.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(a=>{if(a.status!=="pago"){const s=a.dataVencimento<e?"atrasado":"pendente";a.status!==s&&(a.status=s,t=!0)}}),t&&this.savePayments(),[...this.payments].sort((a,s)=>s.dataVencimento.localeCompare(a.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(a=>a.alunoId===e&&(a.status==="atrasado"||a.status==="pendente"&&a.dataVencimento<t))}addPayment(e,t){const a=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<a&&(s="atrasado");const c={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(c),this.savePayments();const L=this.students.find(o=>o.id===c.alunoId);return H.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${c.descricao}" (R$ ${c.valor.toFixed(2)}) cadastrado para o aluno "${(L==null?void 0:L.nome)||"N/A"}" com vencimento em ${c.dataVencimento}.`}),c}darBaixaPayment(e,t,a,s,c){const L=this.payments.findIndex(f=>f.id===e);if(L===-1)throw new Error("Lançamento financeiro não encontrado");const o=this.payments[L],$=o.status;o.status="pago",o.dataPagamento=t,o.formaPagamento=a,c!==void 0&&(o.observacoes=c.trim()?c.trim():o.observacoes),this.savePayments();const w=this.students.find(f=>f.id===o.alunoId);return H.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${o.descricao}" de "${(w==null?void 0:w.nome)||"N/A"}". Valor R$ ${o.valor.toFixed(2)} recebido via ${a.toUpperCase()} em ${t} (Status anterior: ${$}).`}),o}updatePayment(e,t,a){const s=this.payments.findIndex(f=>f.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const c=this.getTodayDateString();let L=t.status||this.payments[s].status;const o=t.dataVencimento||this.payments[s].dataVencimento;L!=="pago"&&(L=o<c?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:L},this.savePayments();const $=this.payments[s],w=this.students.find(f=>f.id===$.alunoId);return H.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:a,detalhes:`Lançamento financeiro "${$.descricao}" do aluno "${(w==null?void 0:w.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const a=this.payments.find(c=>c.id===e);if(!a)return;this.payments=this.payments.filter(c=>c.id!==e),this.savePayments();const s=this.students.find(c=>c.id===a.alunoId);H.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${a.descricao}" no valor de R$ ${a.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,a){const s=g=>g.toString().padStart(2,"0"),c=`${e}-${s(t)}`,o=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||c,$=this.students.filter(g=>g.status==="ativo");let w=0,f=0;return $.forEach(g=>{if(this.payments.some(A=>A.alunoId===g.id&&(A.mesReferencia===c||A.dataVencimento.startsWith(c)))){f++;return}const n=g.diaVencimento||10,k=new Date(e,t,0).getDate(),h=Math.min(n,k),S=`${e}-${s(t)}-${s(h)}`,m=typeof g.valorMensalidade=="number"&&g.valorMensalidade>0?g.valorMensalidade:280;this.addPayment({alunoId:g.id,descricao:`Mensalidade ${o}/${e}`,mesReferencia:c,valor:m,dataVencimento:S,status:"pendente",observacoes:`Gerado automaticamente para o plano ${g.moduloAtual||g.instrumentoPrincipal||"Música"}`},a),w++}),H.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:a,detalhes:`Geração em lote para ${o}/${e}: ${w} mensalidade(s) criada(s) e ${f} já existente(s) pulada(s).`}),{criadas:w,puladas:f}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),H.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const M=new ot,be={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function ze(x){var s,c,L,o,$,w,f,g,z,n,k,h,S,m,A,i,E,u,y,b,r,p,l,d,v,P,N,F;if(!x)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(x.papel==="admin")return JSON.parse(JSON.stringify(be.admin));const e=be[x.papel]||be.professor,t=x.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const a=q=>typeof q=="boolean";return{alunos:{acesso:a(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:a(t.alunos)?t.alunos:((c=t.alunos)==null?void 0:c.cadastrar)??e.alunos.cadastrar,alterar:a(t.alunos)?t.alunos:((L=t.alunos)==null?void 0:L.alterar)??e.alunos.alterar,excluir:a(t.alunos)?!1:((o=t.alunos)==null?void 0:o.excluir)??e.alunos.excluir},agenda:{acesso:a(t.agenda)?t.agenda:(($=t.agenda)==null?void 0:$.acesso)??e.agenda.acesso,cadastrar:a(t.agenda)?t.agenda:((w=t.agenda)==null?void 0:w.cadastrar)??e.agenda.cadastrar,alterar:a(t.agenda)?t.agenda:((f=t.agenda)==null?void 0:f.alterar)??e.agenda.alterar,excluir:a(t.agenda)?!1:((g=t.agenda)==null?void 0:g.excluir)??e.agenda.excluir},planos:{acesso:a(t.planos)?t.planos:((z=t.planos)==null?void 0:z.acesso)??e.planos.acesso,cadastrar:a(t.planos)?t.planos:((n=t.planos)==null?void 0:n.cadastrar)??e.planos.cadastrar,alterar:a(t.planos)?t.planos:((k=t.planos)==null?void 0:k.alterar)??e.planos.alterar,excluir:a(t.planos)?!1:((h=t.planos)==null?void 0:h.excluir)??e.planos.excluir},home:{acesso:a(t.home)?t.home:((S=t.home)==null?void 0:S.acesso)??e.home.acesso},financeiro:{acesso:a(t.financeiro)?t.financeiro:((m=t.financeiro)==null?void 0:m.acesso)??((A=e.financeiro)==null?void 0:A.acesso)??!1,cadastrar:a(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.cadastrar)??((E=e.financeiro)==null?void 0:E.cadastrar)??!1,alterar:a(t.financeiro)?t.financeiro:((u=t.financeiro)==null?void 0:u.alterar)??((y=e.financeiro)==null?void 0:y.alterar)??!1,excluir:a(t.financeiro)?!1:((b=t.financeiro)==null?void 0:b.excluir)??((r=e.financeiro)==null?void 0:r.excluir)??!1},relatorios:{acesso:a(t.relatorios)?t.relatorios:((p=t.relatorios)==null?void 0:p.acesso)??((l=e.relatorios)==null?void 0:l.acesso)??!0,gerar:a(t.relatorios)?t.relatorios:((d=t.relatorios)==null?void 0:d.gerar)??((v=e.relatorios)==null?void 0:v.gerar)??!0},auditoria:{acesso:a(t.auditoria)?t.auditoria:((P=t.auditoria)==null?void 0:P.acesso)??e.auditoria.acesso},configuracoes:{acesso:a(t.configuracoes)?t.configuracoes:((N=t.configuracoes)==null?void 0:N.acesso)??e.configuracoes.acesso,alterar:a(t.configuracoes)?t.configuracoes:((F=t.configuracoes)==null?void 0:F.alterar)??e.configuracoes.alterar}}}function me(x,e){if(!x)return!1;if(e==="login")return!0;if(e==="user")return x.papel==="admin";if(x.papel==="admin"||x.isSistema)return!0;const a=ze(x)[e];return a&&typeof a=="object"&&"acesso"in a?!!a.acesso:!1}function se(x,e,t){if(!x)return!1;if(x.papel==="admin")return!0;const s=ze(x)[e];return s?!!s[t]:!1}const Ce="acusticamente_active_session";class st{constructor(){le(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(Ce);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=M.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(Ce,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=M.getUsers().find(c=>c.login===e.trim());return s?s.senha!==t.trim()?(H.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Ce,JSON.stringify(s)),H.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(H.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&H.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Ce),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const Q=new st;function nt(x=40){return`
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
  `}function ue(x,e=40){return x&&x.trim()!==""?`<img src="${x}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:nt(e)}function R(x,e="success"){const t=document.getElementById("toast-container");if(!t)return;const a=document.createElement("div");a.className=`toast toast-${e}`,a.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${x}</span>
  `,t.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 200ms ease",setTimeout(()=>a.remove(),200)},3500)}function ce(x){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
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
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),a=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),c=()=>{e.innerHTML="",x.onCancel&&x.onCancel()};t.onclick=c,a.onclick=c,s&&x.onConfirm&&(s.onclick=async()=>{const L=document.querySelector(".modal-card");await x.onConfirm(L)!==!1&&(e.innerHTML="")})}function he(){const x=document.getElementById("modal-container");x&&(x.innerHTML="")}function ge(x){ce({title:x.title||"Confirmar Exclusão",bodyHtml:`
      <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
          ⚠️
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
            ${x.message}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
            Esta operação não poderá ser desfeita.
          </div>
        </div>
      </div>
    `,confirmText:x.confirmText||"Excluir Definitivamente",confirmBtnClass:x.confirmBtnClass||"btn-danger",onConfirm:()=>(x.onConfirm(),!0)})}const O={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'};function Ve(x){return x.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function Pe(x){const e=x.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function He(x){const e=x.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function Ue(x){const e=x.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function Ke(x){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)}function rt(x){const e=x.replace(/\D/g,"").slice(0,6);if(e.length<=4)return e;const t=e.slice(0,4);let a=e.slice(4,6);return parseInt(a,10)>12&&(a="12"),a.length===2&&a==="00"&&(a="01"),`${t}-${a}`}function it(x){const e=x.replace(/\D/g,"").slice(0,2);if(!e)return"";const t=parseInt(e,10);return t>31?"31":t===0?"1":e}function Ge(x){const e=x.trim().toUpperCase();return e.startsWith("I")||e.startsWith("IS")||e.startsWith("ISE")||e.startsWith("ISEN")||e.startsWith("ISENT")||e==="ISENTO"?"ISENTO".slice(0,e.length):x.replace(/\D/g,"").slice(0,14)}function ve(x){if(typeof x=="number")return x.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});const e=x.replace(/\D/g,"");return e?(parseInt(e,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}function Ne(x){if(!x)return 0;const e=x.replace(/[^\d,-]/g,"").replace(",","."),t=parseFloat(e);return isNaN(t)?0:t}function de(x,e){x.addEventListener("input",()=>{x.value=e(x.value)})}const De="acusticamente_auth_remember",lt="acusticamente_manual_logout";function dt(x,e){const t=document.createElement("div");t.className="login-page";const a=M.getSettings(),s=a.nomeMenu||a.nomeFantasia||"Acusticamente";let c={username:"",password:"",remember:!1};try{const w=localStorage.getItem(De);w&&(c={...c,...JSON.parse(w)})}catch{c={username:"",password:"",remember:!1}}t.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${ue(a.logotipoCustomizado,50)}
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
            ${ue(a.logotipoCustomizado,58)}
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
  `;const L=t.querySelector("#login-remember"),o=t.querySelector("#btn-back-to-site");o==null||o.addEventListener("click",()=>{e?e():window.location.hash="site"});const $=t.querySelector("#login-form");return $.onsubmit=w=>{var S;w.preventDefault();const f=t.querySelector("#login-username"),g=t.querySelector("#login-password"),z=f.value.trim(),n=g.value.trim(),k=L.checked,h=Q.login(z,n);h.success?(k?localStorage.setItem(De,JSON.stringify({username:z,password:n,remember:!0})):localStorage.removeItem(De),sessionStorage.removeItem(lt),R(`Bem-vindo, ${(S=h.user)==null?void 0:S.nome}!`,"success"),x()):R(h.message,"error")},t}const ye=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,Be=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function ct(x){var z,n,k;const e=document.createElement("div");e.className="public-site-wrapper";const t=M.getSettings(),a=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",c="(51) 98189-8802",L="51981898802",o="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",$="Segunda a Sexta · Aberto até 20:30",w="https://share.google/NtOxuUNfF6FGJ62tZ",f="https://www.instagram.com/acusticamente.rs",g=`https://wa.me/55${L}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Esquerdo: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${ue(t.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${a}</span>
        </div>

        <!-- Canto Direito: Entrar em contato e ao lado direito o Entrar -->
        <div class="site-header-right">
          <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Fale conosco no WhatsApp">
            ${ye}
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
          <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${ye}
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
            <a href="${f}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" title="Abrir perfil no Instagram">
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
                <p>${o}</p>
              </div>
            </div>

            <div class="location-item">
              <div class="location-icon">🕒</div>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>${$}</p>
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
              <a href="${w}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${ye}
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
        <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${ye}
          <span>Entrar em contato</span>
        </a>
      </div>
    </section>

    <!-- Rodapé Completo com Endereço e Instagram -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${ue(t.logotipoCustomizado,32)}
            <span>${a}</span>
          </div>
          <p>${s}</p>
          <div class="footer-address">
            <p>
              📍 <a href="${w}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);" title="Ver no Google Maps">
                ${o}
              </a>
            </p>
            <p>📞 <a href="${g}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${c}</a></p>
            <p>🕒 ${$}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Redes Sociais &amp; Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Acompanhe nosso dia a dia ou mande uma mensagem pelo WhatsApp.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${ye}
              <span>Entrar em contato</span>
            </a>
            <a href="${f}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" style="display: inline-flex;" title="Instagram @acusticamente.rs">
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
  `,(z=e.querySelector("#btn-header-login"))==null||z.addEventListener("click",()=>{const h=Q.isAuthenticated();x(h?"home":"login")}),(n=e.querySelector("#btn-footer-login"))==null||n.addEventListener("click",()=>{const h=Q.isAuthenticated();x(h?"home":"login")}),(k=e.querySelector("#site-logo-link"))==null||k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function Je(x){var f,g;const e=document.createElement("div"),t=Q.getCurrentUser(),a=M.getStudents(),s=M.getPlans(),c=M.getAppointments(),L=M.getTodayDateString(),o=c.filter(z=>z.data===L),$=a.filter(z=>z.status==="ativo").length,w=o.find(z=>z.status==="agendado");return e.innerHTML=`
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
          <span class="metric-value">${o.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${O.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${$}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${O.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${w?w.horaInicio:"--:--"}</span>
          <span class="metric-label">${w?"Próxima aula":"Nenhuma pendente"}</span>
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
        <h3 class="panel-card-title">Aulas de Hoje (${o.length})</h3>
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
            ${o.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':o.map(z=>{const n=a.find(A=>A.id===z.alunoId),k=s.find(A=>A.id===z.planoId),h=z.status==="concluido",S=z.status==="agendado";let m='<span class="badge badge-warning">⏳ Agendado</span>';return h?m='<span class="badge badge-success">✓ Concluído</span>':z.status==="falta_justificada"?m='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':z.status==="falta_injustificada"?m='<span class="badge badge-danger">✕ Falta Injustificada</span>':z.status==="cancelado"&&(m='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${z.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${z.horaInicio} - ${z.horaFim}</strong>
                            ${z.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                ${((n==null?void 0:n.nome)||"A")[0]}
                              </div>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${(n==null?void 0:n.nome)||"Aluno não vinculado"}
                              </span>
                            </div>
                          </td>
                          <td class="col-hide-md" style="white-space: nowrap;">
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(k==null?void 0:k.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${m}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${S?`<button class="btn btn-secondary btn-complete-class" data-id="${z.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${h?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(f=e.querySelector("#home-btn-new-appointment"))==null||f.addEventListener("click",()=>{x("agenda")}),(g=e.querySelector("#home-btn-view-all-agenda"))==null||g.addEventListener("click",()=>{x("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(z=>{z.addEventListener("click",n=>{const k=n.currentTarget.dataset.id;k&&(M.updateAppointment(k,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),R("Aula concluída com sucesso!","success"),x("home"))})}),e}function pt(x){const e=document.createElement("div"),t=Q.getCurrentUser();let a=new Date;function s(){var E,u,y,b;const o=M.getStudents();M.getPlans();const $=M.getAppointments(),w=a.getFullYear(),f=a.getMonth(),g=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],z=new Date(w,f,1).getDay(),n=new Date(w,f+1,0).getDate(),k=new Date(w,f,0).getDate(),h=new Date,S=h.getFullYear()===w&&h.getMonth()===f,m=[];for(let r=z;r>0;r--){const p=k-r+1;m.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${p}</span>
          </div>
        </div>
      `)}for(let r=1;r<=n;r++){const p=q=>q.toString().padStart(2,"0"),l=`${w}-${p(f+1)}-${p(r)}`,d=S&&h.getDate()===r,v=$.filter(q=>q.data===l),P=v.slice(0,3).map(q=>{const I=o.find(V=>V.id===q.alunoId),T=I?I.nome.split(" ")[0]:"Aula";let B="",D="";return q.status==="concluido"?(B="concluido",D="✓ "):q.status==="falta_justificada"?(B="falta-justificada",D="⚠️ "):q.status==="falta_injustificada"?(B="falta-injustificada",D="✕ "):q.tipoAula==="reposicao"&&(B="reposicao",D="🔄 "),`
            <div class="calendar-appointment-badge ${B}" 
                 data-app-id="${q.id}" 
                 title="${q.horaInicio} - ${(I==null?void 0:I.nome)||"Aluno"} (${q.status}${q.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${D}${q.horaInicio}</strong> ${T}
            </div>
          `}).join(""),N=v.length>3?v.length-3:0,F=N>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${N} mais</div>`:"";m.push(`
        <div class="calendar-day-cell ${d?"today":""}" data-date="${l}">
          <div class="day-cell-header">
            <span class="day-number">${r}</span>
            ${v.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${v.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${P}
            ${F}
          </div>
        </div>
      `)}const A=m.length,i=A>35?42-A:35-A;for(let r=1;r<=i;r++)m.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${r}</span>
          </div>
        </div>
      `);e.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${g[f]} de ${w}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${S?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${se(t,"agenda","cadastrar")?`
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

          ${m.join("")}
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
    `,(E=e.querySelector("#agenda-btn-prev"))==null||E.addEventListener("click",()=>{a.setMonth(a.getMonth()-1),s()}),(u=e.querySelector("#agenda-btn-next"))==null||u.addEventListener("click",()=>{a.setMonth(a.getMonth()+1),s()}),(y=e.querySelector("#agenda-btn-today"))==null||y.addEventListener("click",()=>{a=new Date,s()}),(b=e.querySelector("#agenda-btn-new-app"))==null||b.addEventListener("click",()=>{L()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(r=>{r.addEventListener("click",p=>{const l=r.dataset.date;l&&c(l)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(r=>{r.addEventListener("click",p=>{p.stopPropagation();const l=r.dataset.appId,d=$.find(v=>v.id===l);d&&c(d.data)})})}function c(o){const $=M.getStudents(),w=M.getPlans(),f=M.getAppointments().filter(m=>m.data===o),[g,z,n]=o.split("-"),k=`${n}/${z}/${g}`,h=f.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${f.map(m=>{const A=$.find(v=>v.id===m.alunoId),i=w.find(v=>v.id===m.planoId),E=m.status==="concluido",u=m.status==="falta_justificada",y=m.status==="falta_injustificada",b=m.status==="cancelado",r=m.status==="agendado",p=m.tipoAula==="reposicao";let l="var(--color-coral)",d='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return E?(l="var(--status-success)",d='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):u?(l="#f59e0b",d='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):y?(l="var(--status-danger)",d='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):b&&(l="var(--border-subtle)",d='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${l};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${m.horaInicio} - ${m.horaFim}</strong>
                        ${d}
                        ${p?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${m.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(A==null?void 0:A.nome)||"Não vinculado"}</strong>
                        ${A!=null&&A.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${A.instrumentoPrincipal}</span>`:""}
                        ${i?` &bull; Plano: <span style="color: #ff9187;">${i.nome}</span>`:""}
                      </div>

                      ${m.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${m.justificativaFalta}
                             </div>`:""}

                      ${m.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${m.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${m.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${se(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${m.id}" title="Editar Detalhes">
                              ${O.edit}
                            </button>
                          `:""}
                      ${se(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${m.id}" title="Excluir">
                              ${O.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${se(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${r?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${m.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${m.id}" data-name="${(A==null?void 0:A.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${m.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${u&&!m.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${m.id}" data-student-id="${m.alunoId}" data-title="${m.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,S=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${f.length}</strong>
          </span>
          ${se(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${O.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${h}
      </div>
    `;ce({title:`Aulas do Dia: ${k}`,bodyHtml:S,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var m;(m=document.getElementById("btn-modal-new-appointment"))==null||m.addEventListener("click",()=>{he(),L({defaultDate:o})}),document.querySelectorAll(".btn-mark-presence").forEach(A=>{A.addEventListener("click",i=>{const E=i.currentTarget.dataset.id;E&&(M.marcarPresenca(E,(t==null?void 0:t.nome)||"Administrador"),R("Presença confirmada e aula concluída!","success"),s(),c(o))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(A=>{A.addEventListener("click",i=>{const E=i.currentTarget.dataset.id,u=i.currentTarget.dataset.name;if(!E)return;const y=prompt(`Informe o motivo da falta justificada de ${u} (Ex: Atestado médico, Viagem em família):`);if(y===null)return;const b=M.registrarFalta(E,!0,y,(t==null?void 0:t.nome)||"Administrador");R(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${b.saldoReposicoes}).`,"success"),s(),c(o)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(A=>{A.addEventListener("click",i=>{const E=i.currentTarget.dataset.id;E&&ge({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{M.registrarFalta(E,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),R("Falta injustificada registrada.","info"),s(),c(o)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(A=>{A.addEventListener("click",i=>{const E=i.currentTarget,u=E.dataset.id,y=E.dataset.studentId,b=E.dataset.title;he(),L({studentId:y,aulaOriginalId:u,tipoAula:"reposicao",titulo:b?`Reposição: ${b}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(A=>{A.addEventListener("click",i=>{const E=i.currentTarget.dataset.id,u=M.getAppointments().find(y=>y.id===E);u&&(he(),L({existingApp:u}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(A=>{A.addEventListener("click",i=>{const E=i.currentTarget.dataset.id,u=M.getAppointments().find(y=>y.id===E);u&&ge({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${u.titulo}</strong>"?`,onConfirm:()=>{M.deleteAppointment(u.id,(t==null?void 0:t.nome)||"Administrador"),R("Compromisso removido.","info"),s(),c(o)}})})})},50)}function L(o){const $=M.getStudents(),w=M.getPlans(),f=o==null?void 0:o.existingApp,g=!!f,z=(f==null?void 0:f.alunoId)||(o==null?void 0:o.studentId)||"",n=(f==null?void 0:f.data)||(o==null?void 0:o.defaultDate)||M.getTodayDateString(),k=((f==null?void 0:f.tipoAula)||(o==null?void 0:o.tipoAula))==="reposicao",h=$.map(i=>`<option value="${i.id}" ${z===i.id?"selected":""} data-planoid="${i.planoId||""}">${i.nome} (${i.instrumentoPrincipal||"Geral"})</option>`).join(""),S=w.map(i=>{const E=(i.modulos||[]).reduce((u,y)=>{var b;return u+(((b=y.aulas)==null?void 0:b.length)||0)},0);return`<option value="${i.id}" ${(f==null?void 0:f.planoId)===i.id?"selected":""} data-total-aulas="${E}">${i.nome} (${E} aulas)</option>`}).join("");let m=g||k?"manual":"plano";const A=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!g&&!k?`
              <!-- Seletor de Modo de Agendamento -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px; display: flex; gap: 4px;">
                <button type="button" class="btn btn-sm ${m==="plano"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="plano" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  📚 Gerar pelo Plano Pedagógico
                </button>
                <button type="button" class="btn btn-sm ${m==="manual"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="manual" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  ✏️ Agendamento Manual
                </button>
              </div>
            `:""}

        <!-- PAINEL 1: GERAR PELO PLANO PEDAGÓGICO -->
        <div id="panel-app-plano" style="display: ${m==="plano"?"flex":"none"}; flex-direction: column; gap: 12px;">
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
              ${S}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-date-start">Data da 1ª Aula *</label>
              <input type="date" id="app-plan-date-start" class="form-input" value="${n}" required />
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
        <div id="panel-app-manual" style="display: ${m==="manual"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <!-- Tipo de Aula -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
            <label class="form-label" style="margin: 0; font-size: 0.82rem; font-weight: 600;">Tipo:</label>
            <div style="display: flex; gap: 14px;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: var(--text-white);">
                <input type="radio" name="app-tipo-aula" value="regular" ${k?"":"checked"} style="accent-color: var(--color-coral);" />
                Regular
              </label>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: #4ade80;">
                <input type="radio" name="app-tipo-aula" value="reposicao" ${k?"checked":""} style="accent-color: #22c55e;" />
                🔄 Reposição
              </label>
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-title">Título *</label>
            <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Introdução" value="${(f==null?void 0:f.titulo)||(o==null?void 0:o.titulo)||""}" />
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
              <label class="form-label" for="app-plan">Plano Pedagógico</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${S}
              </select>
            </div>
          </div>

          <div id="app-student-credits-info" style="display: none; padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); color: #93c5fd; align-items: center; justify-content: space-between;">
            <span>Créditos de remarcação disponíveis:</span>
            <strong id="app-student-credits-val" style="font-size: 0.95rem;">0</strong>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-date">Data *</label>
              <input type="date" id="app-date" class="form-input" value="${n}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-start">Início *</label>
              <input type="time" id="app-time-start" class="form-input" value="${(f==null?void 0:f.horaInicio)||"09:00"}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-end">Fim *</label>
              <input type="time" id="app-time-end" class="form-input" value="${(f==null?void 0:f.horaFim)||"10:00"}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-status">Status *</label>
              <select id="app-status" class="form-select">
                <option value="agendado" ${(f==null?void 0:f.status)==="agendado"?"selected":""}>⏳ Agendado</option>
                <option value="concluido" ${(f==null?void 0:f.status)==="concluido"?"selected":""}>✓ Presente</option>
                <option value="falta_justificada" ${(f==null?void 0:f.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
                <option value="falta_injustificada" ${(f==null?void 0:f.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
                <option value="cancelado" ${(f==null?void 0:f.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;" id="box-justificativa">
              <label class="form-label" for="app-justificativa">Justificativa</label>
              <input type="text" id="app-justificativa" class="form-input" placeholder="Motivo da falta..." value="${(f==null?void 0:f.justificativaFalta)||""}" />
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-obs">Observações</label>
            <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Orientações e conteúdo...">${(f==null?void 0:f.observacoes)||""}</textarea>
          </div>
        </div>

        ${g?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${O.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;ce({title:g?"Editar Aula":k?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:A,confirmText:g?"Salvar":"Confirmar",onConfirm:()=>{const i=(t==null?void 0:t.nome)||"Administrador";if(m==="plano"&&!g){const F=document.getElementById("app-plan-student").value,q=document.getElementById("app-plan-select").value,I=document.getElementById("app-plan-date-start").value,T=document.getElementById("app-plan-time-start").value,B=document.getElementById("app-plan-time-end").value;if(!F)return R("Selecione o aluno.","error"),!1;if(!q)return R("Selecione o plano pedagógico.","error"),!1;if(!I||!T||!B)return R("Informe data de início e horários.","error"),!1;const D=M.generateAppointmentsFromPlan(F,q,I,T,B,i);return D.length===0?(R("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(R(`Sucesso! ${D.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const E=document.getElementById("app-title").value.trim(),u=document.getElementById("app-student").value,y=document.getElementById("app-plan").value,b=document.getElementById("app-date").value,r=document.getElementById("app-time-start").value,p=document.getElementById("app-time-end").value,l=document.getElementById("app-status").value,d=document.getElementById("app-justificativa").value.trim(),v=document.getElementById("app-obs").value.trim(),P=document.querySelector('input[name="app-tipo-aula"]:checked'),N=(P==null?void 0:P.value)||"regular";if(!E||!u||!b||!r)return R("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;if(g&&f)M.updateAppointment(f.id,{titulo:E,alunoId:u,planoId:y||void 0,data:b,horaInicio:r,horaFim:p,status:l,tipoAula:N,justificativaFalta:d||void 0,observacoes:v},i),R("Aula atualizada com sucesso!","success");else if(N==="reposicao")try{M.agendarReposicao({titulo:E,alunoId:u,planoId:y||void 0,data:b,horaInicio:r,horaFim:p,status:l,justificativaFalta:d||void 0,observacoes:v},o==null?void 0:o.aulaOriginalId,i),R("Aula de reposição agendada (1 crédito abatido com sucesso)!","success")}catch(F){return R((F==null?void 0:F.message)||"Erro ao agendar reposição. Verifique o saldo do aluno.","error"),!1}else M.addAppointment({titulo:E,alunoId:u,planoId:y||void 0,data:b,horaInicio:r,horaFim:p,status:l,tipoAula:N,justificativaFalta:d||void 0,observacoes:v},i),R("Aula agendada com sucesso!","success");return s(),!0}}),setTimeout(()=>{var v;const i=document.querySelectorAll(".btn-app-mode"),E=document.getElementById("panel-app-plano"),u=document.getElementById("panel-app-manual");i.forEach(P=>{P.addEventListener("click",N=>{const F=N.currentTarget.dataset.mode;m=F,i.forEach(q=>{q.classList.remove("btn-primary"),q.classList.add("btn-secondary")}),N.currentTarget.classList.remove("btn-secondary"),N.currentTarget.classList.add("btn-primary"),E&&(E.style.display=F==="plano"?"flex":"none"),u&&(u.style.display=F==="manual"?"flex":"none")})});const y=document.getElementById("app-student"),b=document.getElementById("app-student-credits-info"),r=document.getElementById("app-student-credits-val"),p=document.querySelectorAll('input[name="app-tipo-aula"]'),l=()=>{var I;if(!y||!b||!r)return;const P=y.value;if(!P){b.style.display="none";return}const N=M.getStudentById(P),F=N?N.saldoReposicoes:0;r.textContent=`${F} ${F===1?"crédito":"créditos"}`;const q=((I=document.querySelector('input[name="app-tipo-aula"]:checked'))==null?void 0:I.value)==="reposicao";b.style.display="flex",F===0&&q?(b.style.background="rgba(239, 68, 68, 0.15)",b.style.borderColor="rgba(239, 68, 68, 0.4)",b.style.color="#f87171"):(b.style.background="rgba(59, 130, 246, 0.1)",b.style.borderColor="rgba(59, 130, 246, 0.3)",b.style.color="#93c5fd")};y==null||y.addEventListener("change",l),p.forEach(P=>P.addEventListener("change",l)),l();const d=document.getElementById("app-plan-student");d==null||d.addEventListener("change",()=>{const P=d.selectedOptions[0],N=P==null?void 0:P.getAttribute("data-planoid");if(N){const F=document.getElementById("app-plan-select");F&&(F.value=N)}}),g&&f&&((v=document.getElementById("btn-delete-app"))==null||v.addEventListener("click",()=>{ge({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${f.titulo}</strong>"?`,onConfirm:()=>{M.deleteAppointment(f.id,(t==null?void 0:t.nome)||"Administrador"),R("Aula removida.","info"),he(),s()}})}))},50)}return s(),e}const ut=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function We(x){const e=(x||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function mt(x){if(!x)return"";const e=new Date(x+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,`${a} anos`}function Ye(x){if(!x)return null;const e=new Date(x+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,a}function ft(x,e){const t=x.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${a}?text=${s}`}function Qe(x,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},a=`
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
          <strong>${x.formaPagamento?t[x.formaPagamento]||x.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${x.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;ce({title:`Recibo de Pagamento: ${x.descricao}`,bodyHtml:a,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function gt(x){const e=document.createElement("div"),t=Q.getCurrentUser();let a="";function s(){var k,h;const o=M.getStudents(),$=M.getPlans(),w=se(t,"alunos","cadastrar"),f=se(t,"alunos","alterar"),g=se(t,"alunos","excluir"),z=o.filter(S=>S.nome.toLowerCase().includes(a.toLowerCase())||S.email.toLowerCase().includes(a.toLowerCase())||S.telefone.includes(a)||S.instrumentoPrincipal&&S.instrumentoPrincipal.toLowerCase().includes(a.toLowerCase())||S.responsavelNome&&S.responsavelNome.toLowerCase().includes(a.toLowerCase()));e.innerHTML=`
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

        ${w?`
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${O.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
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
              ${z.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':z.map(S=>{const m=$.find(i=>i.id===S.planoId),A=S.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${S.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${S.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${We(S.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${S.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${S.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-white); white-space: nowrap; display: block;">
                                ${(m==null?void 0:m.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                              ${(S.saldoReposicoes||0)>0?`<span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.64rem; padding: 1px 5px; margin-top: 2px; display: inline-block;">
                                      ⚡ ${S.saldoReposicoes} ${S.saldoReposicoes===1?"crédito":"créditos"} de remarcação
                                     </span>`:""}
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${A?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${A?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${S.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${O.profile}
                                </button>
                                ${f?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${S.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${O.edit}
                                      </button>
                                    `:""}
                                ${g?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${S.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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
    `;const n=e.querySelector("#student-search-input");n==null||n.addEventListener("input",S=>{a=S.target.value,s();const m=e.querySelector("#student-search-input");m&&(m.focus(),m.selectionStart=m.selectionEnd=m.value.length)}),(k=e.querySelector("#btn-clear-search"))==null||k.addEventListener("click",()=>{a="",s()}),(h=e.querySelector("#btn-new-student"))==null||h.addEventListener("click",()=>{L()}),e.querySelectorAll(".btn-view-student").forEach(S=>{S.addEventListener("click",m=>{const A=m.currentTarget.dataset.id,i=M.getStudents().find(E=>E.id===A);i&&c(i)})}),e.querySelectorAll(".btn-edit-student").forEach(S=>{S.addEventListener("click",m=>{const A=m.currentTarget.dataset.id,i=M.getStudents().find(E=>E.id===A);i&&L(i)})}),e.querySelectorAll(".btn-delete-student").forEach(S=>{S.addEventListener("click",m=>{const A=m.currentTarget.dataset.id,i=M.getStudents().find(E=>E.id===A);i&&ge({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${i.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{M.deleteStudent(i.id,(t==null?void 0:t.nome)||"Administrador"),R(`Aluno "${i.nome}" excluído.`,"info"),s()}})})})}function c(o){const $=M.getPlans(),w=M.getPaymentPlans();$.find(l=>l.id===o.planoId);const f=w.find(l=>l.id===o.planoPagamentoId),g=M.getStudentAppointments(o.id),z=M.getStudentPayments(o.id),n=mt(o.dataNascimento),k=ft(o.telefone,o.nome),h=o.saldoReposicoes||0,S=M.isStudentOverdue(o.id),m=o.status==="ativo",A=se(t,"financeiro","alterar"),i=g.length,E=g.filter(l=>l.status==="concluido").length,u=g.filter(l=>l.status==="falta_justificada").length,y=g.filter(l=>l.status==="falta_injustificada").length,b=z.filter(l=>l.status==="pago").reduce((l,d)=>l+d.valor,0),r=z.filter(l=>l.status!=="pago").reduce((l,d)=>l+d.valor,0),p=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Cartão Superior do Aluno (Visual Clean & Organizado) -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(234, 67, 53, 0.15); border: 1px solid rgba(234, 67, 53, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 700; color: var(--color-coral);">
              ${o.nome[0]||"A"}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.02rem; font-weight: 700; color: var(--text-white);">${o.nome}</span>
                <span class="badge ${m?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${m?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${We(o.instrumentoPrincipal)} ${o.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${o.nivelMusical?o.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${n?`&bull; <span style="color: var(--text-muted);">${n}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${k?`
                  <a href="${k}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
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
              ${S?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${z.length}</span>`}
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
              <div style="font-size: 0.8rem; color: var(--text-white);">${o.telefone||"Sem telefone"}</div>
              <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 1px;">${o.email||"Sem e-mail"}</div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px;">
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 2px;">
                Responsável Legal
              </span>
              ${o.responsavelNome?`
                    <div style="font-size: 0.8rem; color: var(--text-white);">
                      ${o.responsavelNome} ${o.responsavelParentesco?`<span style="color: var(--text-muted); font-size: 0.72rem;">(${o.responsavelParentesco})</span>`:""}
                    </div>
                    <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 1px;">
                      ${o.responsavelTelefone||"Sem telefone"}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${E}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${u+y}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${h}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Remarcações</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${g.length})
              </span>
              ${h>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${h})
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
                        ${g.map(l=>{const d=l.status==="concluido",v=l.status.startsWith("falta"),P=l.status==="agendado",N=d?'<span class="badge badge-success" style="font-size: 0.65rem; padding: 1px 5px;">Presente</span>':v?`<span class="badge ${l.status==="falta_justificada"?"badge-coral":"badge-danger"}" style="font-size: 0.65rem; padding: 1px 5px;">${l.status==="falta_justificada"?"Falta Justificada":"Falta Injustificada"}</span>`:P?'<span class="badge badge-warning" style="font-size: 0.65rem; padding: 1px 5px;">Agendado</span>':'<span class="badge badge-secondary" style="font-size: 0.65rem; padding: 1px 5px;">Cancelado</span>',F=l.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem; padding: 1px 5px;">🔄 Reposição</span>':'<span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); font-size: 0.65rem; padding: 1px 5px;">Regular</span>';return`
                              <tr>
                                <td style="white-space: nowrap; font-weight: 500;">
                                  ${l.data.split("-").reverse().join("/")} <span style="color: var(--text-muted); font-size: 0.7rem;">${l.horaInicio}</span>
                                </td>
                                <td>${l.titulo}</td>
                                <td class="col-hide-sm">${F}</td>
                                <td>${N}</td>
                                <td class="col-hide-sm" style="color: var(--text-muted); font-size: 0.72rem;">
                                  ${l.justificativaFalta?`<em>Motivo: ${l.justificativaFalta}</em>`:l.observacoes||"-"}
                                </td>
                              </tr>
                            `}).join("")}
                      </tbody>
                    </table>
                  `}
            </div>
          </div>

          ${o.observacoes?`
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.75rem; color: var(--text-secondary);">
                  <strong style="color: var(--text-white);">Obs:</strong> ${o.observacoes}
                </div>
              `:""}
        </div>

        <!-- CONTEÚDO DA ABA 2: FINANCEIRO -->
        <div id="panel-tab-financeiro" style="display: none; flex-direction: column; gap: 12px;">
          <!-- Card do Plano de Pagamento e Desconto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">
                Plano de Pagamento Vinculado
              </span>
              <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-white); margin-top: 2px;">
                ${f?`${f.nome} (${f.modalidade==="individual"?"👤 Individual":"👥 Turma"} &bull; ${f.periodicidade.toUpperCase()})`:"Plano Padrão"}
              </div>
            </div>
            ${o.isSegundaMatricula?`<span class="badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 0.72rem; padding: 3px 8px;">
                    🏷️ 2ª Matrícula (20% OFF)
                   </span>`:""}
          </div>

          <!-- Status Sucinto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.8rem; color: var(--text-white);">
              ${S?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted);">
              Vencimento todo dia ${o.diaVencimento??10}
            </span>
          </div>

          <!-- Resumo Financeiro Sucinto -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white); margin-top: 1px;">
                R$ ${(o.valorMensalidade??280).toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Total Pago</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80; margin-top: 1px;">
                R$ ${b.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${r>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${r.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${z.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${z.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${z.map(l=>{const d=l.status==="pago",v=l.status==="atrasado";let P="";return d?P='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':v?P='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':P='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${l.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${l.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${l.valor.toFixed(2)}</td>
                              <td>${P}</td>
                              <td class="col-hide-sm">${l.dataPagamento?l.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${d?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${l.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:A?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${l.id}" style="font-size: 0.7rem; padding: 2px 7px;">
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
    `;ce({title:`Ficha do Aluno: ${o.nome}`,bodyHtml:p,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var N;const l=document.getElementById("btn-tab-pedagogico"),d=document.getElementById("btn-tab-financeiro"),v=document.getElementById("panel-tab-pedagogico"),P=document.getElementById("panel-tab-financeiro");l==null||l.addEventListener("click",()=>{l.classList.add("active"),d==null||d.classList.remove("active"),v&&(v.style.display="flex"),P&&(P.style.display="none")}),d==null||d.addEventListener("click",()=>{d.classList.add("active"),l==null||l.classList.remove("active"),P&&(P.style.display="flex"),v&&(v.style.display="none")}),(N=document.getElementById("btn-quick-schedule-reposicao"))==null||N.addEventListener("click",()=>{he(),x("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(F=>{F.addEventListener("click",q=>{const I=q.currentTarget.dataset.id,T=z.find(B=>B.id===I);T&&Qe(T,o)})}),document.querySelectorAll(".btn-pay-now").forEach(F=>{F.addEventListener("click",q=>{const I=q.currentTarget.dataset.id,T=z.find(V=>V.id===I);if(!T)return;const B=M.getTodayDateString(),D=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${T.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${T.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${T.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${o.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${B}" required />
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
          `;ce({title:`Dar Baixa: ${T.descricao}`,bodyHtml:D,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const V=document.getElementById("baixa-data").value,Y=document.getElementById("baixa-forma").value,K=document.getElementById("baixa-obs").value;if(!V)return R("Informe a data de recebimento.","error"),!1;const G=(t==null?void 0:t.nome)||"Administrador";M.darBaixaPayment(T.id,V,Y,G,K),R(`Baixa de R$ ${T.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const X=M.getStudents().find(J=>J.id===o.id)||o;return c(X),setTimeout(()=>{var J;(J=document.getElementById("btn-tab-financeiro"))==null||J.click()},50),!0}})})})},50)}function L(o){const $=M.getPlans(),w=M.getPaymentPlans(),f=!!o;o&&M.getStudentPayments(o.id);const g=$.map(h=>`<option value="${h.id}" ${(o==null?void 0:o.planoId)===h.id?"selected":""}>${h.nome}${h.instrumento?` (${h.instrumento})`:""}</option>`).join(""),z=w.filter(h=>h.ativo).map(h=>`<option value="${h.id}" ${(o==null?void 0:o.planoPagamentoId)===h.id?"selected":""} data-valor="${h.valorMensal}" data-desconto="${h.descontoSegundaMatricula??20}">${h.nome} (${h.modalidade==="individual"?"👤 Individual":"👥 Turma"} - ${h.periodicidade.toUpperCase()}) - R$ ${h.valorMensal.toFixed(2)}/mês</option>`).join(""),n=ut.map(h=>`<option value="${h}" ${(o==null?void 0:o.instrumentoPrincipal)===h?"selected":""}>${h}</option>`).join(""),k=`
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
            <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${(o==null?void 0:o.nome)||""}" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-telefone">Celular *</label>
              <input type="text" id="student-telefone" class="form-input" placeholder="(00) 00000-0000" value="${(o==null?void 0:o.telefone)||""}" maxlength="15" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-cpf">CPF</label>
              <input type="text" id="student-cpf" class="form-input" placeholder="000.000.000-00" value="${(o==null?void 0:o.cpf)||""}" maxlength="14" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nascimento">Nascimento *</label>
              <input type="date" id="student-nascimento" class="form-input" value="${(o==null?void 0:o.dataNascimento)||""}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-email">E-mail</label>
              <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${(o==null?void 0:o.email)||""}" />
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
            <input type="text" id="student-resp-nome" class="form-input" placeholder="Nome do responsável" value="${(o==null?void 0:o.responsavelNome)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-parentesco">
                Parentesco <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
              </label>
              <select id="student-resp-parentesco" class="form-select">
                <option value="">Selecione...</option>
                <option value="Mãe" ${(o==null?void 0:o.responsavelParentesco)==="Mãe"?"selected":""}>Mãe</option>
                <option value="Pai" ${(o==null?void 0:o.responsavelParentesco)==="Pai"?"selected":""}>Pai</option>
                <option value="Avô/Avó" ${(o==null?void 0:o.responsavelParentesco)==="Avô/Avó"?"selected":""}>Avô/Avó</option>
                <option value="Cônjuge" ${(o==null?void 0:o.responsavelParentesco)==="Cônjuge"?"selected":""}>Cônjuge</option>
                <option value="Outro" ${(o==null?void 0:o.responsavelParentesco)==="Outro"?"selected":""}>Outro</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-tel">
                Celular <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
              </label>
              <input type="text" id="student-resp-tel" class="form-input" placeholder="(00) 00000-0000" value="${(o==null?void 0:o.responsavelTelefone)||""}" maxlength="15" />
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-cpf">CPF</label>
            <input type="text" id="student-resp-cpf" class="form-input" placeholder="000.000.000-00" value="${(o==null?void 0:o.responsavelCpf)||""}" maxlength="14" />
          </div>
        </div>

        <!-- ABA 3: PEDAGÓGICO -->
        <div id="form-panel-tab-musica" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione...</option>
                ${n}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nivel">Nível</label>
              <select id="student-nivel" class="form-select">
                <option value="iniciante" ${(o==null?void 0:o.nivelMusical)==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${(o==null?void 0:o.nivelMusical)==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${(o==null?void 0:o.nivelMusical)==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${(o==null?void 0:o.nivelMusical)==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-plano">Plano de Ensino (Pedagógico) *</label>
            <select id="student-plano" class="form-select" required>
              <option value="">Selecione um plano de ensino...</option>
              ${g}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo Atual</label>
              <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Primeiros Acordes" value="${(o==null?void 0:o.moduloAtual)||""}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-status">Status *</label>
              <select id="student-status" class="form-select">
                <option value="ativo" ${(o==null?void 0:o.status)==="ativo"?"selected":""}>Ativo</option>
                <option value="inativo" ${(o==null?void 0:o.status)==="inativo"?"selected":""}>Inativo</option>
              </select>
            </div>
          </div>

          <!-- SALDO DE REMARCAÇÃO (100% AUTOMÁTICO - SOMENTE LEITURA) -->
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 12px; display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-white);">Créditos de Remarcação Disponíveis:</span>
              <span class="badge" style="background: rgba(234, 67, 53, 0.2); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.4); font-size: 0.95rem; font-weight: 700; padding: 4px 10px;">
                ${(o==null?void 0:o.saldoReposicoes)||0} ${((o==null?void 0:o.saldoReposicoes)||0)===1?"crédito":"créditos"}
              </span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); line-height: 1.3; margin-top: 4px;">
              🔒 <strong>Saldo Automático:</strong> Os créditos são gerados automaticamente quando o aluno recebe falta justificada na agenda e consumidos ao agendar aulas de reposição. Não é permitida adição ou remoção manual.
            </div>
          </div>
        </div>

        <!-- ABA 4: FINANCEIRO (PLANOS DE PAGAMENTO E DESCONTO 2ª MATRÍCULA) -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; flex-direction: column; gap: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Plano de Pagamento & Cobrança
            </div>

            <!-- Seleção do Plano de Pagamento -->
            <div class="form-group" style="margin: 0; width: 100%;">
              <label class="form-label" for="student-plano-pagamento">Plano de Pagamento *</label>
              <select id="student-plano-pagamento" class="form-select">
                <option value="">Selecione o plano de pagamento...</option>
                ${z}
              </select>
            </div>

            <!-- Regra de Desconto: 2ª Matrícula (20% OFF) -->
            <div style="background: rgba(251, 191, 36, 0.08); border: 1px solid rgba(251, 191, 36, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
              <div>
                <div style="font-size: 0.82rem; font-weight: 700; color: #fbbf24;">
                  Segunda Matrícula (Familiar ou Aluno)
                </div>
                <div style="font-size: 0.72rem; color: var(--text-secondary);">
                  Aplica 20% de desconto automático na mensalidade deste plano.
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none;">
                <input type="checkbox" id="student-segunda-matricula" ${o!=null&&o.isSegundaMatricula?"checked":""} style="width: 18px; height: 18px; accent-color: #fbbf24;" />
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-white);">20% OFF</span>
              </label>
            </div>

            <!-- Resumo do Cálculo da Mensalidade -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Valor Base</div>
                <div id="summary-plano-base" style="font-size: 0.85rem; font-weight: 600; color: var(--text-white); margin-top: 2px;">R$ 280,00</div>
              </div>
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Desconto</div>
                <div id="summary-plano-desc" style="font-size: 0.85rem; font-weight: 600; color: #fbbf24; margin-top: 2px;">R$ 0,00</div>
              </div>
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade</div>
                <div id="summary-plano-final" style="font-size: 0.92rem; font-weight: 700; color: #34d399; margin-top: 2px;">R$ 280,00</div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Valor Cobrado (R$) *</label>
                <input type="text" id="student-valor-mensalidade" class="form-input" placeholder="0,00" value="${(o==null?void 0:o.valorMensalidade)!==void 0?ve(o.valorMensalidade):"280,00"}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia do Vencimento *</label>
                <input type="text" id="student-dia-vencimento" class="form-input" maxlength="2" placeholder="10" value="${(o==null?void 0:o.diaVencimento)??10}" required />
              </div>
            </div>
          </div>
        </div>

        <!-- ABA 5: OBSERVAÇÕES -->
        <div id="form-panel-tab-obs" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="student-obs">Observações</label>
            <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Anotações gerais, preferências e histórico...">${(o==null?void 0:o.observacoes)||""}</textarea>
          </div>
        </div>
      </form>
    `;ce({title:f?`Editar: ${o.nome}`:"Cadastrar Aluno",bodyHtml:k,modalClass:"modal-lg",confirmText:f?"Salvar":"Cadastrar",onConfirm:()=>{var X,J,ie,te,ne,ee;const h=document.getElementById("student-nome").value.trim(),S=document.getElementById("student-nascimento").value,m=document.getElementById("student-email").value.trim(),A=document.getElementById("student-telefone").value.trim(),i=((X=document.getElementById("student-cpf"))==null?void 0:X.value.trim())||void 0,E=document.getElementById("student-resp-nome").value.trim(),u=document.getElementById("student-resp-parentesco").value,y=document.getElementById("student-resp-tel").value.trim(),b=((J=document.getElementById("student-resp-cpf"))==null?void 0:J.value.trim())||void 0,r=document.getElementById("student-instrumento").value,p=document.getElementById("student-nivel").value,l=document.getElementById("student-plano").value,d=((ie=document.getElementById("student-plano-pagamento"))==null?void 0:ie.value)||void 0,v=((te=document.getElementById("student-segunda-matricula"))==null?void 0:te.checked)||!1,P=document.getElementById("student-status").value,N=document.getElementById("student-modulo").value.trim(),F=(ne=document.getElementById("student-valor-mensalidade"))==null?void 0:ne.value,q=Ne(F),I=(ee=document.getElementById("student-dia-vencimento"))==null?void 0:ee.value,T=Math.min(31,Math.max(1,parseInt(I,10)||10)),B=document.getElementById("student-obs").value.trim(),D=[];h||D.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),S||D.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),A?A.replace(/\D/g,"").length<10&&D.push({label:"Celular do Aluno incompleto",fieldId:"student-telefone",tabId:"tab-pessoal"}):D.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),i&&i.replace(/\D/g,"").length!==11&&D.push({label:"CPF do Aluno incompleto (11 dígitos)",fieldId:"student-cpf",tabId:"tab-pessoal"}),m&&!Ke(m)&&D.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const V=Ye(S);V!==null&&V<18&&(E||D.push({label:`Nome do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),u||D.push({label:`Parentesco do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),y?y.replace(/\D/g,"").length<10&&D.push({label:"Celular do Responsável incompleto",fieldId:"student-resp-tel",tabId:"tab-resp"}):D.push({label:`Celular do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"}),b&&b.replace(/\D/g,"").length!==11&&D.push({label:"CPF do Responsável incompleto (11 dígitos)",fieldId:"student-resp-cpf",tabId:"tab-resp"})),P||D.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!F||q<=0)&&D.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const K=parseInt(I,10);if((!I||isNaN(K)||K<1||K>31)&&D.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),D.length>0){const j=ae=>{const _=document.querySelectorAll(".btn-form-tab"),re=document.querySelectorAll(".form-tab-panel");_.forEach(oe=>{oe.dataset.tab===ae?oe.classList.add("active"):oe.classList.remove("active")}),re.forEach(oe=>{oe.style.display=oe.id===`form-panel-${ae}`?"flex":"none"})},Z=document.createElement("div");Z.id="student-validation-alert",Z.style.cssText=`
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `,Z.innerHTML=`
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
                  ${D.map(ae=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${ae.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(Z);const W=Z.querySelector("#btn-validation-ok");return W==null||W.focus(),W==null||W.addEventListener("click",()=>{Z.remove();const ae=D[0];j(ae.tabId),setTimeout(()=>{const _=document.getElementById(ae.fieldId);_&&(_.focus(),_.scrollIntoView({behavior:"smooth",block:"center"}),_.style.outline="2px solid var(--color-coral)",_.style.borderColor="var(--color-coral)",setTimeout(()=>{_.style.outline="",_.style.borderColor=""},3500))},100)}),!1}const G=(t==null?void 0:t.nome)||"Administrador";return f&&o?(M.updateStudent(o.id,{nome:h,dataNascimento:S,email:m,telefone:A,cpf:i,responsavelNome:E,responsavelParentesco:u,responsavelTelefone:y,responsavelCpf:b,instrumentoPrincipal:r,nivelMusical:p,planoId:l,planoPagamentoId:d,isSegundaMatricula:v,status:P,moduloAtual:N,valorMensalidade:q,diaVencimento:T,observacoes:B},G),R("Dados do aluno atualizados com sucesso!","success")):(M.addStudent({nome:h,dataNascimento:S,email:m,telefone:A,cpf:i,responsavelNome:E,responsavelParentesco:u,responsavelTelefone:y,responsavelCpf:b,instrumentoPrincipal:r,nivelMusical:p,planoId:l,planoPagamentoId:d,isSegundaMatricula:v,status:P,moduloAtual:N,valorMensalidade:q,diaVencimento:T,observacoes:B},G),R("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const h=document.querySelectorAll(".btn-form-tab"),S=document.querySelectorAll(".form-tab-panel");h.forEach(I=>{I.addEventListener("click",T=>{const B=T.currentTarget.dataset.tab;h.forEach(D=>{D.classList.remove("active")}),T.currentTarget.classList.add("active"),S.forEach(D=>{D.style.display=D.id===`form-panel-${B}`?"flex":"none"})})});const m=document.getElementById("student-cpf");m&&de(m,Ve);const A=document.getElementById("student-telefone");A&&de(A,Pe);const i=document.getElementById("student-resp-cpf");i&&de(i,Ve);const E=document.getElementById("student-resp-tel");E&&de(E,Pe);const u=document.getElementById("student-valor-mensalidade");u&&de(u,ve);const y=document.getElementById("student-dia-vencimento");y&&de(y,it);const b=document.getElementById("student-plano-pagamento"),r=document.getElementById("student-segunda-matricula"),p=document.getElementById("summary-plano-base"),l=document.getElementById("summary-plano-desc"),d=document.getElementById("summary-plano-final"),v=()=>{const I=b==null?void 0:b.value,T=(r==null?void 0:r.checked)||!1,B=M.calcularMensalidadeAluno(I,T);p&&(p.textContent=`R$ ${B.valorBase.toFixed(2)}`),l&&(l.textContent=B.descontoPercentual>0?`-R$ ${B.valorDesconto.toFixed(2)} (${B.descontoPercentual}%)`:"R$ 0,00"),d&&(d.textContent=`R$ ${B.valorFinal.toFixed(2)}`),u&&(u.value=ve(B.valorFinal))};b==null||b.addEventListener("change",v),r==null||r.addEventListener("change",v),o!=null&&o.planoPagamentoId&&v();const P=document.getElementById("student-nascimento"),N=document.getElementById("student-resp-alert"),F=document.querySelectorAll(".resp-req-star"),q=()=>{const I=P==null?void 0:P.value,T=Ye(I),B=T!==null&&T<18;N&&(N.style.display=B?"block":"none",B&&(N.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${T} anos).</strong> Dados do responsável são obrigatórios.`)),F.forEach(D=>{D.style.display=B?"inline":"none"})};P==null||P.addEventListener("input",q),P==null||P.addEventListener("change",q),q()},50)}return s(),e}const fe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Xe=fe.reduce((x,e)=>x+e.items.length,0);function vt(x){let e=0;return fe.forEach(t=>{const a=x[t.key];a&&t.items.forEach(s=>{a[s.key]&&e++})}),e}function bt(x){var L;const e=document.createElement("div"),t=Q.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(L=e.querySelector("#btn-unauth-home"))==null||L.addEventListener("click",()=>x("home")),e;let a="";function s(){var g,z;const o=M.getUsers(),$=a.toLowerCase(),w=o.filter(n=>n.nome.toLowerCase().includes($)||n.login.toLowerCase().includes($)||n.papel.toLowerCase().includes($));e.innerHTML=`
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${O.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${w.length})</h3>
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
              ${w.map(n=>{const k=n.papel==="admin"?"Administrador":n.papel==="professor"?"Professor":"Atendente",h=ze(n),S=vt(h);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${n.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${n.nome[0]||"U"}
                          </div>
                          <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${n.nome}
                          </span>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${n.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${n.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${k}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${n.papel==="admin"?"badge-coral":S>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${n.papel==="admin"?`Acesso Total (${Xe})`:`${S} de ${Xe} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${n.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${n.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${O.edit}
                          </button>
                          ${n.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${O.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${n.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
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
    `,(g=e.querySelector("#btn-new-user"))==null||g.addEventListener("click",()=>{c()});const f=e.querySelector("#user-search-input");f&&f.addEventListener("input",n=>{a=n.target.value,s();const k=e.querySelector("#user-search-input");k&&(k.focus(),k.setSelectionRange(k.value.length,k.value.length))}),(z=e.querySelector("#btn-clear-search"))==null||z.addEventListener("click",()=>{a="",s()}),e.querySelectorAll(".btn-edit-user").forEach(n=>{n.addEventListener("click",k=>{const h=k.currentTarget.dataset.id,S=M.getUsers().find(m=>m.id===h);S&&c(S)})}),e.querySelectorAll(".btn-delete-user").forEach(n=>{n.addEventListener("click",k=>{const h=k.currentTarget.dataset.id,S=M.getUsers().find(m=>m.id===h);S&&ge({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${S.nome}</strong>" (login: <code>${S.login}</code>)?`,onConfirm:()=>{try{M.deleteUser(S.id,(t==null?void 0:t.nome)||"Administrador"),R(`Usuário "${S.nome}" excluído.`,"info"),s()}catch(m){R(m.message||"Erro ao excluir usuário.","error")}}})})})}function c(o){var m,A,i,E;const $=!!o,w=o?o.papel:"professor",f=w==="admin",g=ze(o),z=`
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${(o==null?void 0:o.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${(o==null?void 0:o.login)||""}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${$?"Nova senha":"Ex: 123456"}" value="${(o==null?void 0:o.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${o!=null&&o.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${w==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${w==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${w==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${o!=null&&o.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${f?"none":"block"};">
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
            ${fe.map(u=>{const y=g[u.key]||{},b=u.items.filter(r=>y[r.key]).length;return`
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
                          ${b}/${u.items.length} liberadas
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
                    ${u.items.map(r=>{const p=!!y[r.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${u.key}-${r.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${p?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${p?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${u.key}-${r.key}" 
                                data-group="${u.key}" 
                                data-action="${r.key}" 
                                ${p?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${r.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${u.key}-${r.key}" 
                              class="badge ${p?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${p?"Liberado":"Bloqueado"}
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
    `;ce({title:$?`Editar Usuário: ${o.nome}`:"Cadastrar Novo Usuário",bodyHtml:z,modalClass:"modal-lg",confirmText:$?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var P,N,F,q,I,T,B,D,V,Y,K,G,X,J,ie,te,ne,ee,j,Z,W,ae;const u=document.getElementById("user-nome").value.trim(),y=document.getElementById("user-login").value.trim(),b=document.getElementById("user-senha").value.trim(),r=document.getElementById("user-papel"),p=r?r.value:"professor";if(!u||!y||!b)return R("Preencha Nome, Login e Senha.","error"),!1;if(M.getUsers().find(_=>_.login===y&&_.id!==(o==null?void 0:o.id)))return R(`O login "${y}" já está em uso por outro usuário.`,"error"),!1;let d;p==="admin"?d=JSON.parse(JSON.stringify(be.admin)):d={alunos:{acesso:((P=document.getElementById("perm-alunos-acesso"))==null?void 0:P.checked)??!1,cadastrar:((N=document.getElementById("perm-alunos-cadastrar"))==null?void 0:N.checked)??!1,alterar:((F=document.getElementById("perm-alunos-alterar"))==null?void 0:F.checked)??!1,excluir:((q=document.getElementById("perm-alunos-excluir"))==null?void 0:q.checked)??!1},agenda:{acesso:((I=document.getElementById("perm-agenda-acesso"))==null?void 0:I.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((B=document.getElementById("perm-agenda-alterar"))==null?void 0:B.checked)??!1,excluir:((D=document.getElementById("perm-agenda-excluir"))==null?void 0:D.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((Y=document.getElementById("perm-planos-cadastrar"))==null?void 0:Y.checked)??!1,alterar:((K=document.getElementById("perm-planos-alterar"))==null?void 0:K.checked)??!1,excluir:((G=document.getElementById("perm-planos-excluir"))==null?void 0:G.checked)??!1},financeiro:{acesso:((X=document.getElementById("perm-financeiro-acesso"))==null?void 0:X.checked)??!1,cadastrar:((J=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:J.checked)??!1,alterar:((ie=document.getElementById("perm-financeiro-alterar"))==null?void 0:ie.checked)??!1,excluir:((te=document.getElementById("perm-financeiro-excluir"))==null?void 0:te.checked)??!1},relatorios:{acesso:((ne=document.getElementById("perm-relatorios-acesso"))==null?void 0:ne.checked)??!1,gerar:((ee=document.getElementById("perm-relatorios-gerar"))==null?void 0:ee.checked)??!1},home:{acesso:((j=document.getElementById("perm-home-acesso"))==null?void 0:j.checked)??!1},auditoria:{acesso:((Z=document.getElementById("perm-auditoria-acesso"))==null?void 0:Z.checked)??!1},configuracoes:{acesso:((W=document.getElementById("perm-configuracoes-acesso"))==null?void 0:W.checked)??!1,alterar:((ae=document.getElementById("perm-configuracoes-alterar"))==null?void 0:ae.checked)??!1}};const v=(t==null?void 0:t.nome)||"Administrador";return $&&o?(M.updateUser(o.id,{nome:u,login:y,senha:b,papel:o.isSistema?"admin":p,permissoes:o.isSistema?be.admin:d},v),R("Usuário e permissões atualizados com sucesso!","success")):(M.addUser({nome:u,login:y,senha:b,papel:p,permissoes:d},v),R("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const n=document.getElementById("user-papel"),k=document.getElementById("user-permissions-section"),h=(u,y,b)=>{const r=document.getElementById(`row-perm-${u}-${y}`),p=document.getElementById(`badge-perm-${u}-${y}`);r&&p&&(b?(r.style.background="rgba(34, 197, 94, 0.06)",r.style.borderColor="rgba(34, 197, 94, 0.25)",p.className="badge badge-success",p.textContent="Liberado"):(r.style.background="rgba(234, 67, 53, 0.04)",r.style.borderColor="rgba(234, 67, 53, 0.15)",p.className="badge badge-coral",p.textContent="Bloqueado")),S(u)},S=u=>{const y=document.getElementById(`group-counter-${u}`),b=fe.find(r=>r.key===u);if(y&&b){let r=0;b.items.forEach(p=>{const l=document.getElementById(`perm-${u}-${p.key}`);l&&l.checked&&r++}),y.textContent=`${r}/${b.items.length} liberadas`}};n==null||n.addEventListener("change",()=>{const u=n.value;if(u==="admin")k.style.display="none";else if(k.style.display="block",!$){const y=be[u]||be.professor;fe.forEach(b=>{b.items.forEach(r=>{var l;const p=document.getElementById(`perm-${b.key}-${r.key}`);if(p){const d=((l=y[b.key])==null?void 0:l[r.key])??!1;p.checked=d,h(b.key,r.key,d)}})})}}),fe.forEach(u=>{const y=document.getElementById(`header-group-${u.key}`),b=document.getElementById(`group-body-${u.key}`),r=document.getElementById(`arrow-perm-${u.key}`);y==null||y.addEventListener("click",p=>{if(!p.target.closest(".btn-group-toggle")&&b&&r){const l=b.style.display==="flex";b.style.display=l?"none":"flex",r.style.transform=l?"rotate(0deg)":"rotate(180deg)"}}),u.items.forEach(p=>{const l=document.getElementById(`perm-${u.key}-${p.key}`);l==null||l.addEventListener("change",()=>{if(h(u.key,p.key,l.checked),l.checked&&p.key!=="acesso"){const d=document.getElementById(`perm-${u.key}-acesso`);d&&!d.checked&&(d.checked=!0,h(u.key,"acesso",!0))}!l.checked&&p.key==="acesso"&&u.items.forEach(d=>{if(d.key!=="acesso"){const v=document.getElementById(`perm-${u.key}-${d.key}`);v&&v.checked&&(v.checked=!1,h(u.key,d.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${u.key}"]`).forEach(p=>{p.addEventListener("click",l=>{l.stopPropagation();const d=u.items.map(P=>document.getElementById(`perm-${u.key}-${P.key}`)).filter(Boolean),v=d.every(P=>P.checked);d.forEach(P=>{P.checked=!v,h(u.key,P.dataset.action,!v)})})})}),(m=document.getElementById("btn-perm-expand"))==null||m.addEventListener("click",()=>{fe.forEach(u=>{const y=document.getElementById(`group-body-${u.key}`),b=document.getElementById(`arrow-perm-${u.key}`);y&&b&&(y.style.display="flex",b.style.transform="rotate(180deg)")})}),(A=document.getElementById("btn-perm-collapse"))==null||A.addEventListener("click",()=>{fe.forEach(u=>{const y=document.getElementById(`group-body-${u.key}`),b=document.getElementById(`arrow-perm-${u.key}`);y&&b&&(y.style.display="none",b.style.transform="rotate(0deg)")})}),(i=document.getElementById("btn-perm-all"))==null||i.addEventListener("click",()=>{fe.forEach(u=>{u.items.forEach(y=>{const b=document.getElementById(`perm-${u.key}-${y.key}`);b&&(b.checked=!0,h(u.key,y.key,!0))})})}),(E=document.getElementById("btn-perm-none"))==null||E.addEventListener("click",()=>{fe.forEach(u=>{u.items.forEach(y=>{const b=document.getElementById(`perm-${u.key}-${y.key}`);b&&(b.checked=!1,h(u.key,y.key,!1))})})})}return s(),e}function yt(x){const e=document.createElement("div"),t=Q.getCurrentUser();let a="ensino",s="";const c=se(t,"planos","cadastrar"),L=se(t,"planos","alterar"),o=se(t,"planos","excluir");function $(){var S,m,A;const g=M.getPlans(),z=M.getPaymentPlans(),n=g.filter(i=>{const E=s.toLowerCase();return i.nome.toLowerCase().includes(E)||i.descricao&&i.descricao.toLowerCase().includes(E)}),k=z.filter(i=>{const E=s.toLowerCase();return i.nome.toLowerCase().includes(E)||i.modalidade.toLowerCase().includes(E)||i.periodicidade.toLowerCase().includes(E)||i.descricao&&i.descricao.toLowerCase().includes(E)});e.innerHTML=`
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            ${a==="ensino"?"Planos de Ensino (Pedagógico)":"Planos de Pagamento (Financeiro)"}
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            ${a==="ensino"?"Estrutura 100% pedagógica: Plano &bull; Módulos &bull; Aulas.":"Tabela de cobrança para matrículas: Modalidades (Individual/Turma), Periodicidades (Mensal/Trimestral/Semestral) e Regra de Desconto (20% na 2ª matrícula)."}
          </p>
        </div>

        <div style="display: flex; gap: 8px;">
          ${c?a==="ensino"?`
                  <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                    ${O.plus} Novo Plano de Ensino
                  </button>
                `:`
                  <button class="btn btn-primary" id="btn-new-payment-plan" style="display: flex; align-items: center; gap: 6px;">
                    ${O.plus} Novo Plano de Pagamento
                  </button>
                `:""}
        </div>
      </div>

      <!-- Abas de Navegação (Ensino vs Pagamento) -->
      <div style="display: flex; gap: 8px; margin-bottom: 18px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
        <button type="button" class="btn ${a==="ensino"?"btn-primary":"btn-secondary"} btn-tab-plan" data-tab="ensino" style="font-size: 0.82rem; padding: 7px 16px;">
          🎼 Planos de Ensino (${g.length})
        </button>
        <button type="button" class="btn ${a==="pagamento"?"btn-primary":"btn-secondary"} btn-tab-plan" data-tab="pagamento" style="font-size: 0.82rem; padding: 7px 16px;">
          💰 Planos de Pagamento (${z.length})
        </button>
      </div>

      <!-- Barra de Filtro / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="plan-search-input" 
            class="form-input" 
            placeholder="${a==="ensino"?"Buscar plano de ensino...":"Buscar plano de pagamento..."}" 
            value="${s}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${O.search}
          </div>
        </div>
        ${s?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- TABELA: PLANOS DE ENSINO -->
      ${a==="ensino"?`
            <div class="panel-card" style="margin-bottom: 0;">
              <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3 class="panel-card-title">Planos Pedagógicos Cadastrados (${n.length})</h3>
              </div>

              <div class="table-responsive">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th style="min-width: 160px;">Plano de Ensino</th>
                      <th class="col-hide-sm" style="width: 160px; text-align: center;">Estrutura</th>
                      <th class="col-hide-md">Descrição</th>
                      <th style="width: 100px; text-align: right;">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${n.length===0?`
                          <tr>
                            <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 36px;">
                              ${s?"Nenhum plano de ensino encontrado.":"Nenhum plano de ensino cadastrado."}
                            </td>
                          </tr>
                        `:n.map(i=>{const E=(i.modulos||[]).length,u=(i.modulos||[]).reduce((y,b)=>{var r;return y+(((r=b.aulas)==null?void 0:r.length)||0)},0);return`
                                <tr>
                                  <td>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                      <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                        ${O.planos}
                                      </div>
                                      <div>
                                        <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                          ${i.nome}
                                        </div>
                                        ${i.instrumento?`<span style="font-size: 0.72rem; color: var(--text-muted);">${i.instrumento}</span>`:""}
                                      </div>
                                    </div>
                                  </td>
                                  <td class="col-hide-sm" style="text-align: center;">
                                    <div style="display: inline-flex; gap: 4px; align-items: center;">
                                      <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                        ${E} ${E===1?"módulo":"módulos"}
                                      </span>
                                      <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                        ${u} ${u===1?"aula":"aulas"}
                                      </span>
                                    </div>
                                  </td>
                                  <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                                    ${i.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                                  </td>
                                  <td style="text-align: right;">
                                    <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                      ${L?`
                                            <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${i.id}" title="Editar Plano e Módulos">
                                              ${O.edit}
                                            </button>
                                          `:""}
                                      ${o?`
                                            <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${i.id}" title="Excluir Plano">
                                              ${O.trash}
                                            </button>
                                          `:""}
                                      ${!L&&!o?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                                    </div>
                                  </td>
                                </tr>
                              `}).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          `:`
            <!-- TABELA: PLANOS DE PAGAMENTO -->
            <div class="panel-card" style="margin-bottom: 0;">
              <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3 class="panel-card-title">Planos de Pagamento Cadastrados (${k.length})</h3>
              </div>

              <div class="table-responsive">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th style="min-width: 160px;">Plano</th>
                      <th style="width: 130px;">Modalidade</th>
                      <th style="width: 130px;">Periodicidade</th>
                      <th style="width: 140px;">Mensalidade</th>
                      <th class="col-hide-sm" style="width: 180px;">2ª Matrícula (20% OFF)</th>
                      <th class="col-hide-md">Descrição</th>
                      <th style="width: 100px; text-align: right;">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${k.length===0?`
                          <tr>
                            <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 36px;">
                              ${s?"Nenhum plano de pagamento encontrado.":"Nenhum plano de pagamento cadastrado."}
                            </td>
                          </tr>
                        `:k.map(i=>{const E=i.valorMensal*(1-(i.descontoSegundaMatricula||20)/100);return`
                                <tr>
                                  <td>
                                    <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                      ${i.nome}
                                    </div>
                                    <span class="badge ${i.ativo?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 6px; margin-top: 2px;">
                                      ${i.ativo?"Ativo":"Inativo"}
                                    </span>
                                  </td>
                                  <td>
                                    <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 0.74rem; padding: 3px 8px;">
                                      ${i.modalidade==="individual"?"👤 Individual":"👥 Turma"}
                                    </span>
                                  </td>
                                  <td>
                                    <span class="badge" style="background: rgba(168, 85, 247, 0.12); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); font-size: 0.74rem; padding: 3px 8px; text-transform: capitalize;">
                                      ${i.periodicidade}
                                    </span>
                                  </td>
                                  <td>
                                    <span style="font-weight: 700; color: #34d399; font-size: 0.92rem;">
                                      R$ ${i.valorMensal.toFixed(2)}
                                    </span>
                                    <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">/mês</span>
                                  </td>
                                  <td class="col-hide-sm">
                                    <span style="font-weight: 700; color: #fbbf24; font-size: 0.86rem;">
                                      R$ ${E.toFixed(2)}
                                    </span>
                                    <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">(-${i.descontoSegundaMatricula||20}% familiar/aluno)</span>
                                  </td>
                                  <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                                    ${i.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                                  </td>
                                  <td style="text-align: right;">
                                    <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                      ${L?`
                                            <button class="btn btn-secondary btn-icon-only btn-edit-payment-plan" data-id="${i.id}" title="Editar Plano de Pagamento">
                                              ${O.edit}
                                            </button>
                                          `:""}
                                      ${o?`
                                            <button class="btn btn-danger btn-icon-only btn-delete-payment-plan" data-id="${i.id}" title="Excluir Plano de Pagamento">
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
          `}
    `,e.querySelectorAll(".btn-tab-plan").forEach(i=>{i.addEventListener("click",E=>{a=E.currentTarget.dataset.tab,s="",$()})}),(S=e.querySelector("#btn-new-plan"))==null||S.addEventListener("click",()=>{w()}),(m=e.querySelector("#btn-new-payment-plan"))==null||m.addEventListener("click",()=>{f()});const h=e.querySelector("#plan-search-input");h&&h.addEventListener("input",i=>{s=i.target.value,$();const E=e.querySelector("#plan-search-input");E&&(E.focus(),E.setSelectionRange(E.value.length,E.value.length))}),(A=e.querySelector("#btn-clear-search"))==null||A.addEventListener("click",()=>{s="",$()}),e.querySelectorAll(".btn-edit-plan").forEach(i=>{i.addEventListener("click",E=>{const u=E.currentTarget.dataset.id,y=M.getPlans().find(b=>b.id===u);y&&w(y)})}),e.querySelectorAll(".btn-delete-plan").forEach(i=>{i.addEventListener("click",E=>{const u=E.currentTarget.dataset.id,y=M.getPlans().find(b=>b.id===u);y&&ge({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${y.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{M.deletePlan(y.id,(t==null?void 0:t.nome)||"Administrador"),R(`Plano de ensino "${y.nome}" excluído.`,"info"),$()}})})}),e.querySelectorAll(".btn-edit-payment-plan").forEach(i=>{i.addEventListener("click",E=>{const u=E.currentTarget.dataset.id,y=M.getPaymentPlans().find(b=>b.id===u);y&&f(y)})}),e.querySelectorAll(".btn-delete-payment-plan").forEach(i=>{i.addEventListener("click",E=>{const u=E.currentTarget.dataset.id,y=M.getPaymentPlans().find(b=>b.id===u);y&&ge({title:"Excluir Plano de Pagamento",message:`Deseja realmente excluir o plano de pagamento "<strong>${y.nome}</strong>"?`,onConfirm:()=>{M.deletePaymentPlan(y.id,(t==null?void 0:t.nome)||"Administrador"),R(`Plano de pagamento "${y.nome}" excluído.`,"info"),$()}})})})}function w(g){const z=!!g;let n=g?JSON.parse(JSON.stringify(g.modulos||[])):[];n.forEach(m=>{Array.isArray(m.aulas)||(m.aulas=[])});function k(){return n.length===0?`
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); margin-top: 8px;">
            Nenhum módulo adicionado ainda. Digite o nome do módulo acima e clique em "Adicionar Módulo".
          </div>
        `:n.map((m,A)=>{const i=m.aulas||[];return`
            <div class="module-card-item" data-mod-idx="${A}" style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 8px;">
              <!-- Cabeçalho do Módulo -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px; flex: 1;">
                  <span class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 7px;">
                    Módulo ${A+1}
                  </span>
                  <input 
                    type="text" 
                    class="form-input input-module-title" 
                    data-mod-idx="${A}" 
                    value="${m.titulo}" 
                    placeholder="Título do módulo" 
                    style="font-size: 0.84rem; font-weight: 600; padding: 4px 8px; background: transparent; border-color: transparent; border-bottom: 1px dashed var(--border-subtle); width: 100%;"
                  />
                </div>

                <div style="display: flex; gap: 4px; align-items: center;">
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-up" data-mod-idx="${A}" title="Mover para cima" ${A===0?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▲
                  </button>
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-down" data-mod-idx="${A}" title="Mover para baixo" ${A===n.length-1?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▼
                  </button>
                  <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-mod-idx="${A}" title="Excluir Módulo" style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ${O.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo -->
              <div class="lessons-container" style="display: flex; flex-direction: column; gap: 5px; margin-left: 14px; border-left: 2px solid rgba(234, 67, 53, 0.2); padding-left: 10px;">
                ${i.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 4px 0;">Nenhuma aula cadastrada neste módulo.</div>':i.map((E,u)=>`
                            <div style="display: flex; align-items: center; gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
                              <span style="font-size: 0.72rem; color: var(--text-muted); min-width: 44px;">Aula ${u+1}:</span>
                              <input 
                                type="text" 
                                class="form-input input-lesson-title" 
                                data-mod-idx="${A}" 
                                data-aula-idx="${u}" 
                                value="${E.titulo}" 
                                placeholder="Título da aula" 
                                style="flex: 1; font-size: 0.78rem; padding: 2px 6px; background: transparent; border: none;"
                              />
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-up" data-mod-idx="${A}" data-aula-idx="${u}" title="Mover aula acima" ${u===0?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▲
                              </button>
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-down" data-mod-idx="${A}" data-aula-idx="${u}" title="Mover aula abaixo" ${u===i.length-1?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▼
                              </button>
                              <button type="button" class="btn btn-danger btn-icon-only btn-remove-lesson" data-mod-idx="${A}" data-aula-idx="${u}" title="Excluir Aula" style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ✕
                              </button>
                            </div>
                          `).join("")}

                <!-- Adicionar Aula ao Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="form-input input-new-lesson" 
                    data-mod-idx="${A}" 
                    placeholder="Título da nova aula (ex: Acorde Dó Maior)..." 
                    style="flex: 1; font-size: 0.76rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-add-lesson" 
                    data-mod-idx="${A}" 
                    style="font-size: 0.72rem; padding: 4px 10px; white-space: nowrap;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `}).join("")}const h=`
      <form id="plan-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Nível 1: Plano -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-coral); letter-spacing: 0.05em; margin-bottom: 10px;">
            🎼 1. Informações do Plano Pedagógico
          </div>

          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-nome" style="font-size: 0.78rem;">Nome do Plano *</label>
              <input 
                type="text" 
                id="plan-nome" 
                class="form-input" 
                placeholder="Ex: Violão Popular e Canto" 
                value="${(g==null?void 0:g.nome)||""}" 
                required 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-instrumento" style="font-size: 0.78rem;">Instrumento</label>
              <input 
                type="text" 
                id="plan-instrumento" 
                class="form-input" 
                placeholder="Ex: Violão / Teclado" 
                value="${(g==null?void 0:g.instrumento)||""}" 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>
          </div>

          <div class="form-group" style="margin-top: 10px; margin-bottom: 0;">
            <label class="form-label" for="plan-desc" style="font-size: 0.78rem;">Descrição Pedagógica</label>
            <input 
              type="text" 
              id="plan-desc" 
              class="form-input" 
              placeholder="Ex: Formação instrumental prática do básico ao avançado" 
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
                ${n.length} módulos
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
              placeholder="Nome do novo módulo (ex: Módulo 1: Primeiros Acordes)..." 
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
          <div id="plan-modules-list-container" style="max-height: 280px; overflow-y: auto; padding-right: 4px;">
            ${k()}
          </div>
        </div>
      </form>
    `;ce({title:z?`Editar Plano de Ensino: ${g.nome}`:"Novo Plano de Ensino",bodyHtml:h,modalClass:"modal-lg",confirmText:z?"Salvar Plano":"Criar Plano",onConfirm:()=>{var y,b,r;const m=(y=document.getElementById("plan-nome"))==null?void 0:y.value.trim(),A=(b=document.getElementById("plan-instrumento"))==null?void 0:b.value.trim(),i=(r=document.getElementById("plan-desc"))==null?void 0:r.value.trim();if(!m)return R("Preencha o nome do plano de ensino.","error"),!1;const E=n.map((p,l)=>({id:p.id||`mod_${Date.now()}_${l}`,ordem:l+1,titulo:p.titulo.trim()||`Módulo ${l+1}`,descricao:p.descricao,aulas:(p.aulas||[]).map((d,v)=>({id:d.id||`aul_${Date.now()}_${l}_${v}`,ordem:v+1,titulo:d.titulo.trim()||`Aula ${v+1}`,conteudo:d.conteudo,duracaoMinutos:d.duracaoMinutos}))})),u=(t==null?void 0:t.nome)||"Administrador";return z&&g?(M.updatePlan(g.id,{nome:m,descricao:i,instrumento:A||void 0,modulos:E},u),R(`Plano de ensino "${m}" atualizado!`,"success")):(M.addPlan({nome:m,descricao:i,instrumento:A||void 0,modulos:E},u),R(`Plano de ensino "${m}" cadastrado com sucesso!`,"success")),$(),!0}}),setTimeout(()=>{S()},50);function S(){const m=document.getElementById("plan-modules-list-container"),A=document.getElementById("modules-counter-badge");if(!m)return;const i=()=>{m.innerHTML=k(),A&&(A.textContent=`${n.length} módulos`),S()},E=document.getElementById("btn-quick-add-module"),u=document.getElementById("quick-add-module-input");E&&u&&(E.onclick=()=>{const y=u.value.trim();if(!y){R("Informe o nome do módulo.","error");return}n.push({id:`mod_${Date.now()}`,ordem:n.length+1,titulo:y,aulas:[]}),u.value="",i()},u.onkeydown=y=>{y.key==="Enter"&&(y.preventDefault(),E.click())}),m.querySelectorAll(".input-module-title").forEach(y=>{y.addEventListener("input",b=>{const r=parseInt(b.target.dataset.modIdx||"0",10);n[r]&&(n[r].titulo=b.target.value)})}),m.querySelectorAll(".btn-move-module-up").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10);if(r>0){const p=n[r];n[r]=n[r-1],n[r-1]=p,i()}})}),m.querySelectorAll(".btn-move-module-down").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10);if(r<n.length-1){const p=n[r];n[r]=n[r+1],n[r+1]=p,i()}})}),m.querySelectorAll(".btn-remove-module").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10);n.splice(r,1),i()})}),m.querySelectorAll(".input-lesson-title").forEach(y=>{y.addEventListener("input",b=>{var l;const r=parseInt(b.target.dataset.modIdx||"0",10),p=parseInt(b.target.dataset.aulaIdx||"0",10);(l=n[r])!=null&&l.aulas[p]&&(n[r].aulas[p].titulo=b.target.value)})}),m.querySelectorAll(".btn-add-lesson").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10),p=m.querySelector(`.input-new-lesson[data-mod-idx="${r}"]`),l=p==null?void 0:p.value.trim();if(!l){R("Informe o título da aula.","error");return}n[r]&&(n[r].aulas.push({id:`aul_${Date.now()}`,ordem:n[r].aulas.length+1,titulo:l}),i())})}),m.querySelectorAll(".btn-move-lesson-up").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10),p=parseInt(b.currentTarget.dataset.aulaIdx||"0",10);if(n[r]&&p>0){const l=n[r].aulas,d=l[p];l[p]=l[p-1],l[p-1]=d,i()}})}),m.querySelectorAll(".btn-move-lesson-down").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10),p=parseInt(b.currentTarget.dataset.aulaIdx||"0",10);if(n[r]){const l=n[r].aulas;if(p<l.length-1){const d=l[p];l[p]=l[p+1],l[p+1]=d,i()}}})}),m.querySelectorAll(".btn-remove-lesson").forEach(y=>{y.addEventListener("click",b=>{const r=parseInt(b.currentTarget.dataset.modIdx||"0",10),p=parseInt(b.currentTarget.dataset.aulaIdx||"0",10);n[r]&&(n[r].aulas.splice(p,1),i())})})}}function f(g){const z=!!g,n=`
      <form id="payment-plan-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #34d399; letter-spacing: 0.05em; margin-bottom: 12px;">
            💰 Parâmetros do Plano de Pagamento
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label class="form-label" for="pp-nome">Nome do Plano *</label>
            <input 
              type="text" 
              id="pp-nome" 
              class="form-input" 
              placeholder="Ex: Individual - Mensal" 
              value="${(g==null?void 0:g.nome)||""}" 
              required 
            />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="pp-modalidade">Modalidade *</label>
              <select id="pp-modalidade" class="form-select">
                <option value="individual" ${(g==null?void 0:g.modalidade)==="individual"?"selected":""}>👤 Individual</option>
                <option value="turma" ${(g==null?void 0:g.modalidade)==="turma"?"selected":""}>👥 Turma (Grupo)</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="pp-periodicidade">Periodicidade / Ciclo *</label>
              <select id="pp-periodicidade" class="form-select">
                <option value="mensal" ${(g==null?void 0:g.periodicidade)==="mensal"?"selected":""}>Mensal (1 mês)</option>
                <option value="trimestral" ${(g==null?void 0:g.periodicidade)==="trimestral"?"selected":""}>Trimestral (3 meses)</option>
                <option value="semestral" ${(g==null?void 0:g.periodicidade)==="semestral"?"selected":""}>Semestral (6 meses)</option>
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="pp-valor">Mensalidade Padrão (R$) *</label>
              <input 
                type="text" 
                id="pp-valor" 
                class="form-input" 
                placeholder="0,00" 
                value="${(g==null?void 0:g.valorMensal)!==void 0?ve(g.valorMensal):"280,00"}" 
                required 
              />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="pp-desconto">Desconto 2ª Matrícula (%)</label>
              <input 
                type="number" 
                id="pp-desconto" 
                class="form-input" 
                min="0" 
                max="100" 
                value="${(g==null?void 0:g.descontoSegundaMatricula)??20}" 
              />
              <span style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px; display: block;">
                Aplicado automaticamente para 2ª matrícula de familiar ou do aluno.
              </span>
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label class="form-label" for="pp-desc">Descrição / Benefícios</label>
            <input 
              type="text" 
              id="pp-desc" 
              class="form-input" 
              placeholder="Ex: Aulas semanais individuais com acompanhamento personalizado." 
              value="${(g==null?void 0:g.descricao)||""}" 
            />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-ativo">Status do Plano</label>
            <select id="pp-ativo" class="form-select">
              <option value="true" ${(g==null?void 0:g.ativo)!==!1?"selected":""}>Ativo (Disponível para matrícula)</option>
              <option value="false" ${(g==null?void 0:g.ativo)===!1?"selected":""}>Inativo (Arquivado)</option>
            </select>
          </div>
        </div>
      </form>
    `;ce({title:z?`Editar Plano de Pagamento: ${g.nome}`:"Novo Plano de Pagamento",bodyHtml:n,confirmText:z?"Salvar":"Criar Plano",onConfirm:()=>{var b,r,p,l,d,v,P;const k=(b=document.getElementById("pp-nome"))==null?void 0:b.value.trim(),h=(r=document.getElementById("pp-modalidade"))==null?void 0:r.value,S=(p=document.getElementById("pp-periodicidade"))==null?void 0:p.value,m=(l=document.getElementById("pp-valor"))==null?void 0:l.value,A=Ne(m),i=parseInt((d=document.getElementById("pp-desconto"))==null?void 0:d.value,10)||20,E=(v=document.getElementById("pp-desc"))==null?void 0:v.value.trim(),u=((P=document.getElementById("pp-ativo"))==null?void 0:P.value)==="true";if(!k)return R("Informe o nome do plano de pagamento.","error"),!1;if(A<=0)return R("Informe um valor de mensalidade válido.","error"),!1;const y=(t==null?void 0:t.nome)||"Administrador";return z&&g?(M.updatePaymentPlan(g.id,{nome:k,modalidade:h,periodicidade:S,valorMensal:A,descontoSegundaMatricula:i,descricao:E||void 0,ativo:u},y),R(`Plano de pagamento "${k}" atualizado!`,"success")):(M.addPaymentPlan({nome:k,modalidade:h,periodicidade:S,valorMensal:A,descontoSegundaMatricula:i,descricao:E||void 0,ativo:u},y),R(`Plano de pagamento "${k}" criado com sucesso!`,"success")),$(),!0}}),setTimeout(()=>{const k=document.getElementById("pp-valor");k&&de(k,ve)},50)}return $(),e}function ht(x){const e=document.createElement("div"),t=Q.getCurrentUser();let a="",s="todos",c=new Date;const L=se(t,"financeiro","cadastrar"),o=se(t,"financeiro","alterar"),$=se(t,"financeiro","excluir");function w(){var p,l,d,v,P,N,F,q;const n=M.getPayments(),k=M.getStudents(),h=new Date,S=c!==null&&h.getMonth()===c.getMonth()&&h.getFullYear()===c.getFullYear(),m=c?`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`:"",A=n.filter(I=>I.status==="pago").reduce((I,T)=>I+T.valor,0),i=n.filter(I=>I.status==="pendente").reduce((I,T)=>I+T.valor,0),E=n.filter(I=>I.status==="atrasado").reduce((I,T)=>I+T.valor,0),u=k.filter(I=>I.status==="ativo"&&M.isStudentOverdue(I.id)),y=n.filter(I=>{const T=k.find(G=>G.id===I.alunoId),B=T?T.nome.toLowerCase():"",D=I.descricao.toLowerCase(),V=B.includes(a.toLowerCase())||D.includes(a.toLowerCase())||I.mesReferencia&&I.mesReferencia.includes(a),Y=s==="todos"||I.status===s,K=!m||I.mesReferencia===m||I.dataVencimento.startsWith(m);return V&&Y&&K});e.innerHTML=`
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
            R$ ${A.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(I=>I.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${i.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(I=>I.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${E.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.filter(I=>I.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${u.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${k.filter(I=>I.status==="ativo").length} ativos</span>
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
            <button type="button" class="btn ${S?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
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
          Todos (${n.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="atrasado"?"btn-danger":"btn-secondary"} btn-quick-filter" data-status="atrasado" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="atrasado"?"color: #f87171; border-color: rgba(239, 68, 68, 0.3);":""}">
          ⚠️ Inadimplentes (${u.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${n.filter(I=>I.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${n.filter(I=>I.status==="pago").length})
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${O.search}
          </div>
        </div>

        ${a?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-fin-search">Limpar</button>':""}

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
                ${u.map(I=>{const T=n.filter(G=>G.alunoId===I.id&&G.status==="atrasado"),B=T.reduce((G,X)=>G+X.valor,0),D=(I.telefone||"").replace(/\D/g,""),V=D.length<=11?`55${D}`:D,Y=encodeURIComponent(`Olá, ${I.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),K=D?`https://wa.me/${V}?text=${Y}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${I.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${T.length} fatura(s) atrasada(s) &bull; R$ ${B.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${I.telefone||"Sem telefone"}
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${y.length})</h3>
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
              ${y.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':y.map(I=>{const T=k.find(Y=>Y.id===I.alunoId),B=I.status==="pago",D=I.status==="atrasado";let V="";return B?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':D?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                              <span style="font-size: 0.84rem; color: ${D?"#f87171":"var(--text-white)"}; font-weight: ${D?"700":"normal"};">
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
                                ${!B&&o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${I.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${O.check}
                                      </button>
                                    `:""}

                                ${B?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${I.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${I.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${O.edit}
                                      </button>
                                    `:""}

                                ${$?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${I.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(p=e.querySelector("#fin-btn-prev-month"))==null||p.addEventListener("click",()=>{c||(c=new Date),c=new Date(c.getFullYear(),c.getMonth()-1,1),w()}),(l=e.querySelector("#fin-btn-next-month"))==null||l.addEventListener("click",()=>{c||(c=new Date),c=new Date(c.getFullYear(),c.getMonth()+1,1),w()}),(d=e.querySelector("#fin-btn-current-month"))==null||d.addEventListener("click",()=>{c=new Date,w()}),(v=e.querySelector("#fin-btn-all-months"))==null||v.addEventListener("click",()=>{c=null,w()});const b=e.querySelector("#fin-search-input");b==null||b.addEventListener("input",I=>{a=I.target.value,w();const T=e.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(P=e.querySelector("#btn-clear-fin-search"))==null||P.addEventListener("click",()=>{a="",w()});const r=e.querySelector("#fin-status-filter");r==null||r.addEventListener("change",()=>{s=r.value,w()}),e.querySelectorAll(".btn-quick-filter").forEach(I=>{I.addEventListener("click",T=>{s=T.currentTarget.dataset.status,w()})}),(N=e.querySelector("#btn-limpar-status"))==null||N.addEventListener("click",()=>{s="todos",w()}),(F=e.querySelector("#btn-gerar-lote"))==null||F.addEventListener("click",()=>{g()}),(q=e.querySelector("#btn-novo-lancamento"))==null||q.addEventListener("click",()=>{z()}),e.querySelectorAll(".btn-action-baixa").forEach(I=>{I.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=n.find(V=>V.id===B);D&&f(D)})}),e.querySelectorAll(".btn-action-recibo").forEach(I=>{I.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=n.find(V=>V.id===B);if(D){const V=k.find(Y=>Y.id===D.alunoId);V&&Qe(D,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(I=>{I.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=n.find(V=>V.id===B);D&&z(D)})}),e.querySelectorAll(".btn-action-delete").forEach(I=>{I.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=n.find(V=>V.id===B);D&&ge({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${D.descricao}</strong>" no valor de <strong>R$ ${D.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{M.deletePayment(D.id,(t==null?void 0:t.nome)||"Administrador"),R("Lançamento excluído com sucesso!","info"),w()}})})})}function f(n){const k=M.getStudents().find(m=>m.id===n.alunoId),h=M.getTodayDateString(),S=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${n.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${n.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(k==null?void 0:k.nome)||"N/A"}</strong> &bull; Vencimento: ${n.dataVencimento.split("-").reverse().join("/")}
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
    `;ce({title:"Confirmar Baixa de Pagamento",bodyHtml:S,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const m=document.getElementById("modal-baixa-data").value,A=document.getElementById("modal-baixa-forma").value,i=document.getElementById("modal-baixa-obs").value;return m?(M.darBaixaPayment(n.id,m,A,(t==null?void 0:t.nome)||"Administrador",i),R(`Baixa efetuada com sucesso! R$ ${n.valor.toFixed(2)} recebido.`,"success"),w(),!0):(R("Informe a data de recebimento.","error"),!1)}})}function g(){const n=new Date,k=n.getFullYear(),h=n.getMonth()+1,S=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${k}" required />
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
    `;ce({title:"Gerar Mensalidades em Lote",bodyHtml:S,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const m=parseInt(document.getElementById("lote-ano").value,10),A=parseInt(document.getElementById("lote-mes").value,10);if(!m||!A)return R("Selecione ano e mês válidos.","error"),!1;const i=M.gerarMensalidadesMes(m,A,(t==null?void 0:t.nome)||"Administrador");return i.criadas===0&&i.puladas>0?R(`Todas as ${i.puladas} mensalidades deste mês já estavam criadas!`,"info"):R(`Sucesso: ${i.criadas} mensalidade(s) gerada(s)! (${i.puladas} já existentes puladas)`,"success"),w(),!0}})}function z(n){const k=!!n,h=M.getStudents(),S=M.getTodayDateString(),m=h.map(i=>`<option value="${i.id}" ${(n==null?void 0:n.alunoId)===i.id?"selected":""}>${i.nome} (${i.instrumentoPrincipal||"Geral"})</option>`).join(""),A=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${k?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${m}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(n==null?void 0:n.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (AAAA-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" maxlength="7" value="${(n==null?void 0:n.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="text" id="pay-valor" class="form-input" placeholder="0,00" value="${n?ve(n.valor):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(n==null?void 0:n.dataVencimento)||S}" required />
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
              <option value="cartao_credito" ${(n==null?void 0:n.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(n==null?void 0:n.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="dinheiro" ${(n==null?void 0:n.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="boleto" ${(n==null?void 0:n.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(n==null?void 0:n.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(n==null?void 0:n.observacoes)||""}" />
        </div>
      </form>
    `;ce({title:k?"Editar Lançamento":"Novo Lançamento Financeiro",bodyHtml:A,modalClass:"modal-md",confirmText:k?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const i=k&&n?n.alunoId:document.getElementById("pay-aluno").value,E=document.getElementById("pay-desc").value.trim(),u=document.getElementById("pay-mes").value.trim()||void 0,y=document.getElementById("pay-valor").value,b=Ne(y),r=document.getElementById("pay-vencimento").value,p=document.getElementById("pay-status").value,l=document.getElementById("pay-forma").value||void 0,d=document.getElementById("pay-obs").value.trim()||void 0;if(!i)return R("Selecione um aluno.","error"),!1;if(!E)return R("Informe a descrição do lançamento.","error"),!1;if(u&&!/^\d{4}-\d{2}$/.test(u))return R("Mês de referência deve estar no formato AAAA-MM (Ex: 2026-10).","error"),!1;if(b<=0)return R("Informe um valor válido maior que zero.","error"),!1;if(!r)return R("Informe a data de vencimento.","error"),!1;const v=(t==null?void 0:t.nome)||"Administrador";let P=p;return P!=="pago"&&(P=r<S?"atrasado":"pendente"),k&&n?(M.updatePayment(n.id,{descricao:E,mesReferencia:u,valor:b,dataVencimento:r,status:P,formaPagamento:l,dataPagamento:P==="pago"?n.dataPagamento||S:void 0,observacoes:d},v),R("Lançamento atualizado com sucesso!","success")):(M.addPayment({alunoId:i,descricao:E,mesReferencia:u,valor:b,dataVencimento:r,status:P,formaPagamento:l,dataPagamento:P==="pago"?S:void 0,observacoes:d},v),R("Novo lançamento cadastrado com sucesso!","success")),w(),!0}}),setTimeout(()=>{const i=document.getElementById("pay-mes");i&&de(i,rt);const E=document.getElementById("pay-valor");E&&de(E,ve);const u=document.getElementById("pay-vencimento"),y=document.getElementById("pay-status");if(u==null||u.addEventListener("change",()=>{y&&y.value!=="pago"&&(y.value=u.value<S?"atrasado":"pendente")}),!k){const b=document.getElementById("pay-aluno");b==null||b.addEventListener("change",()=>{const r=h.find(p=>p.id===b.value);if(r){const p=document.getElementById("pay-valor");p&&typeof r.valorMensalidade=="number"&&(p.value=ve(r.valorMensalidade))}})}},50)}return w(),e}function xt(x){const e=document.createElement("div"),t=Q.getCurrentUser(),a=se(t,"relatorios","gerar");let s="alunos",c="todos",L="todos",o="todos",$="todos",w="todos",f="nome_asc",g="",z="",n="",k="",h="todos",S="todos",m="todos",A="vencimento_asc";function i(){var X,J,ie,te,ne,ee,j,Z,W,ae,_,re,oe,xe,$e,we,Ee,Re,Fe;const r=M.getSettings(),p=M.getStudents(),l=M.getPlans(),d=M.getPayments(),v=Array.from(new Set(p.map(C=>C.instrumentoPrincipal).filter(Boolean))).sort();let P=p.filter(C=>{if(c!=="todos"&&C.status!==c||L!=="todos"&&C.instrumentoPrincipal!==L||o!=="todos"&&C.nivelMusical!==o||$!=="todos"&&C.planoId!==$)return!1;if(w!=="todos"){const U=M.isStudentOverdue(C.id);if(w==="em_dia"&&U||w==="atrasado"&&!U)return!1}return!0});P.sort((C,U)=>f==="nome_asc"?C.nome.localeCompare(U.nome):f==="nome_desc"?U.nome.localeCompare(C.nome):f==="data_desc"?(U.criadoEm||"").localeCompare(C.criadoEm||""):f==="data_asc"?(C.criadoEm||"").localeCompare(U.criadoEm||""):0);const N=P.length,F=P.filter(C=>C.status==="ativo").length,q=P.filter(C=>C.status==="inativo").length,I=P.filter(C=>M.isStudentOverdue(C.id)).length,T=new Date().toISOString().slice(0,10);let B=d.filter(C=>{if(g&&C.dataVencimento<g||z&&C.dataVencimento>z)return!1;const U=C.mesReferencia||C.dataVencimento.slice(0,7);if(n&&U<n||k&&U>k||S!=="todos"&&C.alunoId!==S||m!=="todos"&&C.formaPagamento!==m)return!1;const pe=C.status!=="pago"&&C.dataVencimento<T;return!(h==="pago"&&C.status!=="pago"||h==="pendente"&&(C.status==="pago"||pe)||h==="atrasado"&&!pe)});const D=new Map(p.map(C=>[C.id,C.nome]));B.sort((C,U)=>{if(A==="vencimento_asc")return C.dataVencimento.localeCompare(U.dataVencimento);if(A==="vencimento_desc")return U.dataVencimento.localeCompare(C.dataVencimento);if(A==="valor_desc")return U.valor-C.valor;if(A==="aluno_asc"){const pe=D.get(C.alunoId)||"",Me=D.get(U.alunoId)||"";return pe.localeCompare(Me)}return 0});const V=B.length,Y=B.reduce((C,U)=>C+U.valor,0),K=B.filter(C=>C.status==="pago").reduce((C,U)=>C+U.valor,0),G=B.filter(C=>C.status!=="pago").reduce((C,U)=>C+U.valor,0);e.innerHTML=`
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
          ${a?`
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
                ${v.map(C=>`<option value="${C}" ${L===C?"selected":""}>${C}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Nível Musical</label>
              <select id="filtro-aluno-nivel" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${o==="todos"?"selected":""}>Todos os Níveis</option>
                <option value="iniciante" ${o==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${o==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${o==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${o==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Plano de Ensino</label>
              <select id="filtro-aluno-plano" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${$==="todos"?"selected":""}>Todos os Planos</option>
                ${l.map(C=>`<option value="${C.id}" ${$===C.id?"selected":""}>${C.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Situação Financeira</label>
              <select id="filtro-aluno-financeiro" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${w==="todos"?"selected":""}>Todos</option>
                <option value="em_dia" ${w==="em_dia"?"selected":""}>Em Dia</option>
                <option value="atrasado" ${w==="atrasado"?"selected":""}>Com Mensalidade em Atraso</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-aluno-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="nome_asc" ${f==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${f==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${f==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${f==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${F}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${q}</div>
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
                ${P.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':P.map(C=>{const U=l.find(Ze=>Ze.id===C.planoId),pe=C.status==="ativo",Me=M.isStudentOverdue(C.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${C.nome}</td>
                              <td class="col-hide-md">${C.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${C.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(U==null?void 0:U.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${pe?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${pe?"Ativo":"Inativo"}
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${g}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${z}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${n}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${k}" />
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
                <option value="todos" ${S==="todos"?"selected":""}>Todos os Alunos</option>
                ${p.map(C=>`<option value="${C.id}" ${S===C.id?"selected":""}>${C.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${m==="todos"?"selected":""}>Todas as Formas</option>
                <option value="pix" ${m==="pix"?"selected":""}>PIX</option>
                <option value="cartao_credito" ${m==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
                <option value="cartao_debito" ${m==="cartao_debito"?"selected":""}>Cartão de Débito</option>
                <option value="boleto" ${m==="boleto"?"selected":""}>Boleto</option>
                <option value="dinheiro" ${m==="dinheiro"?"selected":""}>Dinheiro</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-fin-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="vencimento_asc" ${A==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${A==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${A==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${A==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${Y.toFixed(2)}</div>
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
              Prévia do Relatório Financeiro (${B.length} lançamentos)
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
                ${B.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':B.map(C=>{const U=C.status==="pago",pe=!U&&C.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${D.get(C.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${C.descricao}${C.mesReferencia?` / ${C.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${C.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${C.valor.toFixed(2)}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${U?"badge-success":pe?"badge-coral":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${U?"Pago":pe?"Atrasado":"Pendente"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,(X=e.querySelector("#btn-tab-rel-alunos"))==null||X.addEventListener("click",()=>{s="alunos",i()}),(J=e.querySelector("#btn-tab-rel-financeiro"))==null||J.addEventListener("click",()=>{s="financeiro",i()}),(ie=e.querySelector("#filtro-aluno-status"))==null||ie.addEventListener("change",C=>{c=C.target.value,i()}),(te=e.querySelector("#filtro-aluno-instrumento"))==null||te.addEventListener("change",C=>{L=C.target.value,i()}),(ne=e.querySelector("#filtro-aluno-nivel"))==null||ne.addEventListener("change",C=>{o=C.target.value,i()}),(ee=e.querySelector("#filtro-aluno-plano"))==null||ee.addEventListener("change",C=>{$=C.target.value,i()}),(j=e.querySelector("#filtro-aluno-financeiro"))==null||j.addEventListener("change",C=>{w=C.target.value,i()}),(Z=e.querySelector("#filtro-aluno-ordem"))==null||Z.addEventListener("change",C=>{f=C.target.value,i()}),(W=e.querySelector("#btn-limpar-filtros-alunos"))==null||W.addEventListener("click",()=>{c="todos",L="todos",o="todos",$="todos",w="todos",f="nome_asc",i()}),(ae=e.querySelector("#filtro-fin-dataini"))==null||ae.addEventListener("change",C=>{g=C.target.value,i()}),(_=e.querySelector("#filtro-fin-datafim"))==null||_.addEventListener("change",C=>{z=C.target.value,i()}),(re=e.querySelector("#filtro-fin-mesref-ini"))==null||re.addEventListener("change",C=>{n=C.target.value,i()}),(oe=e.querySelector("#filtro-fin-mesref-fim"))==null||oe.addEventListener("change",C=>{k=C.target.value,i()}),(xe=e.querySelector("#filtro-fin-status"))==null||xe.addEventListener("change",C=>{h=C.target.value,i()}),($e=e.querySelector("#filtro-fin-aluno"))==null||$e.addEventListener("change",C=>{S=C.target.value,i()}),(we=e.querySelector("#filtro-fin-metodo"))==null||we.addEventListener("change",C=>{m=C.target.value,i()}),(Ee=e.querySelector("#filtro-fin-ordem"))==null||Ee.addEventListener("change",C=>{A=C.target.value,i()}),(Re=e.querySelector("#btn-limpar-filtros-fin"))==null||Re.addEventListener("click",()=>{g="",z="",n="",k="",h="todos",S="todos",m="todos",A="vencimento_asc",i()}),(Fe=e.querySelector("#btn-gerar-pdf"))==null||Fe.addEventListener("click",async()=>{if(!a){R("Você não possui permissão para emitir relatórios.","error");return}const C=e.querySelector("#btn-gerar-pdf"),U=C?C.innerHTML:"";C&&(C.disabled=!0,C.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await y(r,P,l):await b(r,B,p,{mesIni:n,mesFim:k}),R("PDF gerado com sucesso!","success")}catch(pe){console.error("Erro ao gerar PDF:",pe),R("Ocorreu um erro ao gerar o documento PDF.","error")}finally{C&&(C.disabled=!1,C.innerHTML=U)}})}function E(r){return new Promise(p=>{if(r&&r.trim()!==""){const l=new Image;l.crossOrigin="Anonymous",l.onload=()=>{try{const d=document.createElement("canvas");d.width=160,d.height=160;const v=d.getContext("2d");if(!v){p(r);return}const P=24;v.fillStyle="#ffffff",v.beginPath(),v.moveTo(P,0),v.lineTo(160-P,0),v.quadraticCurveTo(160,0,160,P),v.lineTo(160,160-P),v.quadraticCurveTo(160,160,160-P,160),v.lineTo(P,160),v.quadraticCurveTo(0,160,0,160-P),v.lineTo(0,P),v.quadraticCurveTo(0,0,P,0),v.closePath(),v.fill();const N=12,F=160-N*2,q=160-N*2;let I=F,T=q;const B=l.width/l.height;B>1?T=F/B:I=q*B;const D=N+(F-I)/2,V=N+(q-T)/2;v.drawImage(l,D,V,I,T),p(d.toDataURL("image/png"))}catch{p(r)}},l.onerror=()=>{u().then(p)},l.src=r;return}u().then(p)})}function u(){return new Promise(r=>{try{const p=document.createElement("canvas");p.width=160,p.height=160;const l=p.getContext("2d");if(!l){r("");return}const d=32;l.fillStyle="#181c2b",l.beginPath(),l.moveTo(d,0),l.lineTo(160-d,0),l.quadraticCurveTo(160,0,160,d),l.lineTo(160,160-d),l.quadraticCurveTo(160,160,160-d,160),l.lineTo(d,160),l.quadraticCurveTo(0,160,0,160-d),l.lineTo(0,d),l.quadraticCurveTo(0,0,d,0),l.closePath(),l.fill(),l.lineWidth=3,l.strokeStyle="#2d3748",l.stroke();const v=new Image,P=`
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
        `,N=new Blob([P],{type:"image/svg+xml;charset=utf-8"}),F=URL.createObjectURL(N);v.onload=()=>{l.drawImage(v,20,20,120,120),URL.revokeObjectURL(F),r(p.toDataURL("image/png"))},v.onerror=()=>{URL.revokeObjectURL(F),r("")},v.src=F}catch{r("")}})}async function y(r,p,l){const d=new _e({orientation:"portrait",unit:"mm",format:"a4"}),v=new Date().toLocaleString("pt-BR"),P=r.nomeMenu||r.nomeFantasia||r.nomeEscola||"ACUSTICAMENTE",N=r.razaoSocial||"Acusticamente Ensino Musical Ltda",F=r.cnpj?`CNPJ: ${r.cnpj}`:"",q=[r.telefoneContato,r.emailContato].filter(Boolean).join(" • "),I=[r.logradouro?`${r.logradouro}, ${r.numero||"s/n"}`:"",r.complemento,r.bairro,r.cidade?`${r.cidade} - ${r.estado||"SP"}`:"",r.cep?`CEP: ${r.cep}`:""].filter(Boolean).join(" • "),T=await E(r.logotipoCustomizado);T&&d.addImage(T,"PNG",14,12,17,17);const B=T?35:14;d.setFont("helvetica","bold"),d.setFontSize(13),d.setTextColor(15,23,42),d.text(P,B,17),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(71,85,105),d.text([N,F].filter(Boolean).join(" • "),B,21.5),d.setFontSize(7.5),d.setTextColor(100,116,139),I&&d.text(I,B,25.5),q&&d.text(q,B,I?29.5:25.5),d.setFont("helvetica","bold"),d.setFontSize(12),d.setTextColor(217,72,59),d.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(100,116,139),d.text(`Emissão: ${v}`,196,22,{align:"right"}),d.text(`Total: ${p.length} aluno(s)`,196,26.5,{align:"right"}),d.setDrawColor(203,213,225),d.setLineWidth(.4),d.line(14,33,196,33);const D=p.filter(j=>j.status==="ativo").length,V=p.filter(j=>j.status==="inativo").length,Y=p.filter(j=>M.isStudentOverdue(j.id)).length,K=[{label:"TOTAL DE ALUNOS",value:`${p.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${D}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${Y}`,color:[220,38,38]}],G=43,X=12,J=36;K.forEach((j,Z)=>{const W=14+Z*(G+3);d.setFillColor(248,250,252),d.roundedRect(W,J,G,X,1.5,1.5,"F"),d.setDrawColor(226,232,240),d.roundedRect(W,J,G,X,1.5,1.5,"S"),d.setFont("helvetica","bold"),d.setFontSize(6.5),d.setTextColor(100,116,139),d.text(j.label,W+3,J+4),d.setFontSize(10.5),d.setTextColor(j.color[0],j.color[1],j.color[2]),d.text(j.value,W+3,J+9.5)});const ie=p.map((j,Z)=>{const W=l.find(re=>re.id===j.planoId),ae=j.status==="ativo",_=M.isStudentOverdue(j.id);return[(Z+1).toString(),j.nome,j.instrumentoPrincipal||"Música Geral",j.telefone||"-",(W==null?void 0:W.nome)||"-",ae?"Ativo":"Inativo",_?"Atrasado":"Em dia"]});qe(d,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:ie.length>0?ie:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:j=>{j.section==="body"&&(j.column.index===5&&(j.cell.raw==="Ativo"?(j.cell.styles.textColor=[22,163,74],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[202,138,4]),j.column.index===6&&(j.cell.raw==="Atrasado"?(j.cell.styles.textColor=[220,38,38],j.cell.styles.fontStyle="bold"):j.cell.styles.textColor=[22,163,74]))}});const te=d.internal.getNumberOfPages();for(let j=1;j<=te;j++)d.setPage(j),d.setDrawColor(226,232,240),d.setLineWidth(.3),d.line(14,287,196,287),d.setFont("helvetica","normal"),d.setFontSize(7),d.setTextColor(148,163,184),d.text(`${P} • Sistema de Gestão Escolar & Pedagógica`,14,292),d.text(`Página ${j} de ${te}`,196,292,{align:"right"});const ne=d.output("blob"),ee=URL.createObjectURL(ne);window.open(ee,"_blank")}async function b(r,p,l,d){const v=new _e({orientation:"portrait",unit:"mm",format:"a4"}),P=new Map(l.map(_=>[_.id,_.nome])),N=new Date().toLocaleString("pt-BR"),F=r.nomeMenu||r.nomeFantasia||r.nomeEscola||"ACUSTICAMENTE",q=r.razaoSocial||"Acusticamente Ensino Musical Ltda",I=r.cnpj?`CNPJ: ${r.cnpj}`:"",T=[r.telefoneContato,r.emailContato].filter(Boolean).join(" • "),B=[r.logradouro?`${r.logradouro}, ${r.numero||"s/n"}`:"",r.complemento,r.bairro,r.cidade?`${r.cidade} - ${r.estado||"SP"}`:"",r.cep?`CEP: ${r.cep}`:""].filter(Boolean).join(" • "),D=new Date().toISOString().slice(0,10),V=p.reduce((_,re)=>_+re.valor,0),Y=p.filter(_=>_.status==="pago").reduce((_,re)=>_+re.valor,0),K=p.filter(_=>_.status!=="pago").reduce((_,re)=>_+re.valor,0),G=await E(r.logotipoCustomizado);G&&v.addImage(G,"PNG",14,12,17,17);const X=G?35:14;v.setFont("helvetica","bold"),v.setFontSize(13),v.setTextColor(15,23,42),v.text(F,X,17),v.setFont("helvetica","normal"),v.setFontSize(8),v.setTextColor(71,85,105),v.text([q,I].filter(Boolean).join(" • "),X,21.5),v.setFontSize(7.5),v.setTextColor(100,116,139),B&&v.text(B,X,25.5),T&&v.text(T,X,B?29.5:25.5),v.setFont("helvetica","bold"),v.setFontSize(12),v.setTextColor(5,150,105),v.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),v.setFont("helvetica","normal"),v.setFontSize(8),v.setTextColor(100,116,139),v.text(`Emissão: ${N}`,196,22,{align:"right"});let J=`Total: ${p.length} registro(s)`;d!=null&&d.mesIni&&(d!=null&&d.mesFim)?J=`Ref: ${d.mesIni} a ${d.mesFim} • ${p.length} reg.`:d!=null&&d.mesIni?J=`Ref: a partir de ${d.mesIni} • ${p.length} reg.`:d!=null&&d.mesFim&&(J=`Ref: até ${d.mesFim} • ${p.length} reg.`),v.text(J,196,26.5,{align:"right"}),v.setDrawColor(203,213,225),v.setLineWidth(.4),v.line(14,33,196,33);const ie=[{label:"LANÇAMENTOS",value:`${p.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${Y.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${K.toFixed(2)}`,color:[220,38,38]}],te=43,ne=12,ee=36;ie.forEach((_,re)=>{const oe=14+re*(te+3);v.setFillColor(248,250,252),v.roundedRect(oe,ee,te,ne,1.5,1.5,"F"),v.setDrawColor(226,232,240),v.roundedRect(oe,ee,te,ne,1.5,1.5,"S"),v.setFont("helvetica","bold"),v.setFontSize(6.5),v.setTextColor(100,116,139),v.text(_.label,oe+3,ee+4),v.setFontSize(10),v.setTextColor(_.color[0],_.color[1],_.color[2]),v.text(_.value,oe+3,ee+9.5)});const j=p.map((_,re)=>{const oe=_.status==="pago",xe=!oe&&_.dataVencimento<D,$e=oe?"Pago":xe?"Atrasado":"Pendente",we=_.descricao+(_.mesReferencia?` / ${_.mesReferencia}`:""),Ee=_.dataVencimento.split("-").reverse().join("/");return[(re+1).toString(),P.get(_.alunoId)||"Aluno",we,Ee,`R$ ${_.valor.toFixed(2)}`,$e]});qe(v,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:j.length>0?j:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:_=>{_.section==="body"&&_.column.index===5&&(_.cell.raw==="Pago"?(_.cell.styles.textColor=[22,163,74],_.cell.styles.fontStyle="bold"):_.cell.raw==="Atrasado"?(_.cell.styles.textColor=[220,38,38],_.cell.styles.fontStyle="bold"):_.cell.styles.textColor=[202,138,4])}});const Z=v.internal.getNumberOfPages();for(let _=1;_<=Z;_++)v.setPage(_),v.setDrawColor(226,232,240),v.setLineWidth(.3),v.line(14,287,196,287),v.setFont("helvetica","normal"),v.setFontSize(7),v.setTextColor(148,163,184),v.text(`${F} • Gestão Financeira & Escolar`,14,292),v.text(`Página ${_} de ${Z}`,196,292,{align:"right"});const W=v.output("blob"),ae=URL.createObjectURL(W);window.open(ae,"_blank")}return i(),e}function $t(x){const e=document.createElement("div");let t=new Date,a="";const s=w=>w.toString().padStart(2,"0");function c(w){const f=w.getDate(),z=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][w.getMonth()],n=w.getFullYear(),k=new Date,h=k.getDate()===f&&k.getMonth()===w.getMonth()&&k.getFullYear()===n;return`${f} de ${z} de ${n}${h?" (Hoje)":""}`}function L(w){return`${w.getFullYear()}-${s(w.getMonth()+1)}-${s(w.getDate())}`}function o(){var m,A,i,E,u,y,b,r;const w=H.getLogs(),f=new Date,g=`${s(f.getDate())}/${s(f.getMonth()+1)}/${f.getFullYear()}`,z=w.filter(p=>{var l;return(l=p.dataHoraFormatada)==null?void 0:l.startsWith(g)}).length,n=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",k=t!==null&&f.getDate()===t.getDate()&&f.getMonth()===t.getMonth()&&f.getFullYear()===t.getFullYear(),h=w.filter(p=>{const l=!t||p.dataHoraFormatada&&p.dataHoraFormatada.startsWith(n)||p.dataHora&&p.dataHora.startsWith(L(t)),d=a===""||p.tela.toLowerCase().includes(a.toLowerCase())||p.usuarioNome.toLowerCase().includes(a.toLowerCase())||p.usuarioLogin.toLowerCase().includes(a.toLowerCase())||p.acao.toLowerCase().includes(a.toLowerCase())||p.detalhes.toLowerCase().includes(a.toLowerCase());return l&&d});e.innerHTML=`
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
            <button type="button" class="btn ${k?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${O.search}
          </div>
        </div>
        ${a?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${h.length})
            ${t?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${n}</span>`:""}
          </h3>
          ${t!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${n}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
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
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${n}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:h.map(p=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${p.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${p.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${p.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${p.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${p.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${p.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${p.detalhes}">
                                ${p.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(m=e.querySelector("#audit-btn-prev"))==null||m.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),o()}),(A=e.querySelector("#audit-btn-next"))==null||A.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),o()}),(i=e.querySelector("#audit-btn-today"))==null||i.addEventListener("click",()=>{t=new Date,o()}),(E=e.querySelector("#audit-btn-all"))==null||E.addEventListener("click",()=>{t=null,o()}),(u=e.querySelector("#audit-empty-btn-all"))==null||u.addEventListener("click",()=>{t=null,o()}),(y=e.querySelector("#audit-date-picker"))==null||y.addEventListener("change",p=>{const l=p.target.value;if(l){const[d,v,P]=l.split("-").map(Number);t=new Date(d,v-1,P)}else t=null;o()});const S=e.querySelector("#audit-search-input");S==null||S.addEventListener("input",p=>{a=p.target.value,o();const l=e.querySelector("#audit-search-input");l&&(l.focus(),l.selectionStart=l.selectionEnd=l.value.length)}),(b=e.querySelector("#btn-clear-audit-search"))==null||b.addEventListener("click",()=>{a="",o()}),(r=e.querySelector("#btn-clear-all-audit"))==null||r.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await M.resetCleanDatabase("Administrador"),o())})}const $=()=>{o()};return window.addEventListener("audit_updated",$),o(),e}function wt(x){const e=document.createElement("div"),t=Q.getCurrentUser(),a=M.getSettings(),s=se(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${a.nomeFantasia||a.nomeEscola||"Acusticamente Escola de Música"}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 240px;">
                <label class="form-label" for="cfg-razao" style="font-size: 0.75rem;">Razão Social</label>
                <input 
                  type="text" 
                  id="cfg-razao" 
                  class="form-input" 
                  value="${a.razaoSocial||"Acusticamente Ensino Musical Ltda"}" 
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
                  value="${He(a.cnpj||"")}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 145px;">
                <label class="form-label" for="cfg-ie" style="font-size: 0.75rem;">Inscrição Estadual</label>
                <input 
                  type="text" 
                  id="cfg-ie" 
                  class="form-input" 
                  placeholder="Isento ou nº"
                  value="${Ge(a.inscricaoEstadual||"")}" 
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
                  value="${Pe(a.telefoneContato||"")}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1.2; min-width: 180px;">
                <label class="form-label" for="cfg-email" style="font-size: 0.75rem;">E-mail de Contato</label>
                <input 
                  type="email" 
                  id="cfg-email" 
                  class="form-input" 
                  value="${a.emailContato}" 
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
                  value="${a.website||""}" 
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
                  value="${Ue(a.cep||"")}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label class="form-label" for="cfg-logradouro" style="font-size: 0.75rem;">Logradouro / Rua</label>
                <input 
                  type="text" 
                  id="cfg-logradouro" 
                  class="form-input" 
                  placeholder="Rua, Av, Alameda..."
                  value="${a.logradouro||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 85px;">
                <label class="form-label" for="cfg-numero" style="font-size: 0.75rem;">Número</label>
                <input 
                  type="text" 
                  id="cfg-numero" 
                  class="form-input" 
                  placeholder="123"
                  value="${a.numero||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 160px;">
                <label class="form-label" for="cfg-complemento" style="font-size: 0.75rem;">Complemento</label>
                <input 
                  type="text" 
                  id="cfg-complemento" 
                  class="form-input" 
                  placeholder="Sala, Bloco, Apto..."
                  value="${a.complemento||""}" 
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
                  value="${a.bairro||""}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 180px;">
                <label class="form-label" for="cfg-cidade" style="font-size: 0.75rem;">Cidade</label>
                <input 
                  type="text" 
                  id="cfg-cidade" 
                  class="form-input" 
                  value="${a.cidade||""}" 
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
                  value="${a.estado||""}" 
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
              value="${a.nomeMenu||"Acusticamente"}" 
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
                    ${ue(a.logotipoCustomizado,40)}
                  </div>
                  <span id="preview-menu-brand-name" style="font-family: var(--font-heading); font-size: 0.74rem; font-weight: 700; color: var(--text-white); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${a.nomeMenu||"Acusticamente"}
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
                    ${ue(a.logotipoCustomizado,40)}
                  </div>
                  <span id="preview-report-brand-name" style="font-family: sans-serif; font-size: 0.74rem; font-weight: 700; color: #0f172a; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${a.nomeMenu||"Acusticamente"}
                  </span>
                </div>

                <button 
                  type="button" 
                  class="btn btn-secondary" 
                  id="btn-reset-logo"
                  style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.78rem; padding: 8px 10px; box-sizing: border-box; color: ${a.logotipoCustomizado?"#ef4444":"var(--text-muted)"};"
                  ${a.logotipoCustomizado?"":"disabled"}
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
  `;const c=e.querySelector("#btn-tab-gerais"),L=e.querySelector("#btn-tab-instituicao"),o=e.querySelector("#tab-content-gerais"),$=e.querySelector("#tab-content-instituicao");function w(N,F){N&&(F?N.classList.add("active"):N.classList.remove("active"))}function f(N){o.style.display=N==="gerais"?"block":"none",$.style.display=N==="instituicao"?"block":"none",w(c,N==="gerais"),w(L,N==="instituicao")}c==null||c.addEventListener("click",()=>f("gerais")),L==null||L.addEventListener("click",()=>f("instituicao"));let g=a.logotipoCustomizado||"";const z=e.querySelector("#cfg-menu-name"),n=e.querySelector("#preview-menu-brand-name"),k=e.querySelector("#preview-report-brand-name"),h=e.querySelector("#preview-logo-menu"),S=e.querySelector("#preview-logo-report"),m=e.querySelector("#input-logo-file"),A=e.querySelector("#btn-upload-logo"),i=e.querySelector("#btn-reset-logo"),E=e.querySelector("#logo-feedback-msg");z==null||z.addEventListener("input",()=>{const N=z.value.trim()||"Acusticamente";n&&(n.textContent=N),k&&(k.textContent=N)}),A==null||A.addEventListener("click",()=>{m==null||m.click()}),m==null||m.addEventListener("change",N=>{const F=N.target.files;if(!F||F.length===0)return;const q=F[0];if(!q.type.startsWith("image/")){R("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(q.size>3*1024*1024){R("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const I=new FileReader;I.onload=T=>{var B;g=((B=T.target)==null?void 0:B.result)||"",h&&(h.innerHTML=ue(g,40)),S&&(S.innerHTML=ue(g,40)),i&&(i.disabled=!1,i.style.color="#ef4444"),E&&(E.style.display="block",E.style.color="var(--status-success)",E.textContent="Imagem carregada no preview. Clique em Salvar."),R("Logotipo carregado na pré-visualização!","info")},I.onerror=()=>{R("Erro ao processar o arquivo de imagem.","error")},I.readAsDataURL(q)}),i==null||i.addEventListener("click",()=>{g="",m&&(m.value=""),h&&(h.innerHTML=ue("",40)),S&&(S.innerHTML=ue("",40)),i&&(i.disabled=!0,i.style.color="var(--text-muted)"),E&&(E.style.display="block",E.style.color="var(--color-coral)",E.textContent="Logotipo padrão no preview. Clique em Salvar."),R("Logotipo padrão restaurado no preview.","info")});const u=e.querySelector("#form-settings-gerais");u==null||u.addEventListener("submit",N=>{N.preventDefault();const F=z.value.trim()||"Acusticamente";M.updateSettings({nomeMenu:F,logotipoCustomizado:g},(t==null?void 0:t.nome)||"Administrador"),E&&(E.style.display="none"),R("Configurações gerais salvas com sucesso!","success")});const y=e.querySelector("#cfg-cnpj");y&&de(y,He);const b=e.querySelector("#cfg-ie");b&&de(b,Ge);const r=e.querySelector("#cfg-tel");r&&de(r,Pe);const p=e.querySelector("#cfg-cep");p&&de(p,Ue);const l=e.querySelector("#cfg-uf");l==null||l.addEventListener("input",N=>{N.target.value=N.target.value.toUpperCase().slice(0,2)});const d=e.querySelector("#form-settings-institucional");d==null||d.addEventListener("submit",N=>{N.preventDefault();const F=e.querySelector("#cfg-fantasia").value.trim(),q=e.querySelector("#cfg-razao").value.trim(),I=e.querySelector("#cfg-cnpj").value.trim(),T=e.querySelector("#cfg-ie").value.trim(),B=e.querySelector("#cfg-tel").value.trim(),D=e.querySelector("#cfg-email").value.trim(),V=e.querySelector("#cfg-site").value.trim(),Y=e.querySelector("#cfg-cep").value.trim(),K=e.querySelector("#cfg-logradouro").value.trim(),G=e.querySelector("#cfg-numero").value.trim(),X=e.querySelector("#cfg-complemento").value.trim(),J=e.querySelector("#cfg-bairro").value.trim(),ie=e.querySelector("#cfg-cidade").value.trim(),te=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!F){R("Informe o Nome Fantasia da instituição.","error");return}if(D&&!Ke(D)){R("Informe um endereço de e-mail válido.","error");return}const ne=I.replace(/\D/g,"");if(ne.length>0&&ne.length!==14){R("CNPJ incompleto (deve conter 14 dígitos).","error");return}const ee=B.replace(/\D/g,"");if(ee.length>0&&ee.length<10){R("Telefone/WhatsApp incompleto.","error");return}const j=Y.replace(/\D/g,"");if(j.length>0&&j.length!==8){R("CEP incompleto (deve conter 8 dígitos).","error");return}M.updateSettings({nomeEscola:F,nomeClinica:F,nomeFantasia:F,razaoSocial:q,cnpj:I,inscricaoEstadual:T,telefoneContato:B,emailContato:D,website:V,cep:Y,logradouro:K,numero:G,complemento:X,bairro:J,cidade:ie,estado:te},(t==null?void 0:t.nome)||"Administrador"),R("Dados da instituição salvos com sucesso!","success")});const v=e.querySelector("#footer-cloud-status"),P=N=>{v&&(N==="connected"?(v.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,v.style.color="#4ade80"):N==="fallback"?(v.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,v.style.color="#fbbf24"):(v.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,v.style.color="#94a3b8"))};return P(M.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",N=>{P(N.detail)}),e}class Et{constructor(){le(this,"currentScreen","site");le(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=Q.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":Q.isAuthenticated()?["home","agenda","alunos","planos","financeiro","relatorios","user","auditoria","configuracoes"].includes(e)&&me(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const a=window.location.hash.replace("#","").trim(),s=!a||a==="site"?"site":a;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const a=M.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=a.nomeMenu||"Acusticamente");const c=document.querySelector(".sidebar-logo");c&&(c.innerHTML=ue(a.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{Q.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),M.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","relatorios","auditoria","configuracoes"];for(const a of t)if(me(e,a))return a;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!Q.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=Q.getCurrentUser();if(!me(t,e)){R("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const a=this.getFirstAllowedScreen(t);this.currentScreen=a,window.location.hash=a,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),M.syncWithCloud()}render(){var n;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const k=ct(h=>{this.navigateTo(h)});this.appRoot.appendChild(k);return}if(this.currentScreen==="login"||!Q.isAuthenticated()){const k=dt(()=>{const h=Q.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(h))},()=>{this.navigateTo("site")});this.appRoot.appendChild(k);return}const e=document.createElement("div");e.className="app-container";const t=Q.getCurrentUser(),a=(t==null?void 0:t.papel)==="admin",s=M.getSettings(),c=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${ue(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${c}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${O.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${me(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${O.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${me(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${O.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${me(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${O.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${me(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${O.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${me(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${O.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${me(t,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${O.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${a?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${O.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${me(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${O.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${me(t,"configuracoes")?`
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
    `;const L=e.querySelector("#app-sidebar"),o=e.querySelector("#sidebar-backdrop"),$=e.querySelector("#btn-mobile-menu-toggle"),w=e.querySelector("#btn-sidebar-close"),f=k=>{const h=k!==void 0?k:!L.classList.contains("open");L.classList.toggle("open",h),o.classList.toggle("open",h),document.body.style.overflow=h?"hidden":""};$==null||$.addEventListener("click",()=>f(!0)),w==null||w.addEventListener("click",()=>f(!1)),o==null||o.addEventListener("click",()=>f(!1)),e.querySelectorAll(".nav-item").forEach(k=>{k.addEventListener("click",h=>{const S=h.currentTarget.dataset.screen;f(!1),S&&this.navigateTo(S)})}),(n=e.querySelector("#btn-app-logout"))==null||n.addEventListener("click",()=>{ge({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{Q.logout(),this.navigateTo("site")}})});const g=e.querySelector("#screen-viewport"),z=this.createViewElement(this.currentScreen);g.appendChild(z),this.appRoot.appendChild(e)}createViewElement(e){const t=a=>this.navigateTo(a);switch(e){case"home":return Je(t);case"agenda":return pt();case"alunos":return gt(t);case"user":return bt(t);case"planos":return yt();case"financeiro":return ht();case"relatorios":return xt();case"auditoria":return $t();case"configuracoes":return wt();default:return Je(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new Et});
