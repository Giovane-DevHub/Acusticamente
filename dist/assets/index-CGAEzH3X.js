var et=Object.defineProperty;var tt=(w,e,t)=>e in w?et(w,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[e]=t;var le=(w,e,t)=>tt(w,typeof e!="symbol"?e+"":e,t);import{E as _e,a as qe}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const L of d.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&a(L)}).observe(document,{childList:!0,subtree:!0});function t(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(s){if(s.ep)return;s.ep=!0;const d=t(s);fetch(s.href,d)}})();const je="acusticamente_audit_logs";class at{constructor(){le(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(je);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(je,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,a=L=>L.toString().padStart(2,"0"),s=`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} ${a(t.getHours())}:${a(t.getMinutes())}:${a(t.getSeconds())}`,d={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(d),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:d})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:d})),d}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const H=new at,Le="acusticamente_users",Se="acusticamente_students",ke="acusticamente_plans",Oe="acusticamente_payment_plans",Ie="acusticamente_appointments",Te="acusticamente_settings",Ce="acusticamente_payments";class ot{constructor(){le(this,"users",[]);le(this,"students",[]);le(this,"plans",[]);le(this,"paymentPlans",[]);le(this,"appointments",[]);le(this,"payments",[]);le(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});le(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(Le);e?this.users=JSON.parse(e).map(E=>{var g,f,p;return{...E,permissoes:{...E.permissoes,planosPagamento:((g=E.permissoes)==null?void 0:g.planosPagamento)||(E.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:E.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),financeiro:((f=E.permissoes)==null?void 0:f.financeiro)||(E.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:E.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((p=E.permissoes)==null?void 0:p.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(ke);if(t)try{const E=JSON.parse(t);this.plans=E.map(g=>({...g,valor:typeof g.valor=="number"?g.valor:280,modulos:(g.modulos||[]).map((f,p)=>({...f,aulas:Array.isArray(f.aulas)&&f.aulas.length>0?f.aulas:[{id:`aul_${f.id||p+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${f.id||p+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${f.id||p+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${f.id||p+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],this.savePlans();const a=localStorage.getItem(Oe);if(a)try{this.paymentPlans=JSON.parse(a)}catch{this.paymentPlans=[]}(!this.paymentPlans||this.paymentPlans.length===0)&&(this.paymentPlans=[{id:"pp_ind_mensal",nome:"Individual - Mensal",modalidade:"individual",periodicidade:"mensal",valorMensal:280,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas individuais semanais com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_ind_trimestral",nome:"Individual - Trimestral",modalidade:"individual",periodicidade:"trimestral",valorMensal:250,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual com fidelidade trimestral e valor promocional.",criadoEm:new Date().toISOString()},{id:"pp_ind_semestral",nome:"Individual - Semestral",modalidade:"individual",periodicidade:"semestral",valorMensal:230,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual semestral com máxima economia.",criadoEm:new Date().toISOString()},{id:"pp_turma_mensal",nome:"Turma - Mensal",modalidade:"turma",periodicidade:"mensal",valorMensal:190,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em pequenos grupos (turmas) com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_turma_trimestral",nome:"Turma - Trimestral",modalidade:"turma",periodicidade:"trimestral",valorMensal:170,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade trimestral.",criadoEm:new Date().toISOString()},{id:"pp_turma_semestral",nome:"Turma - Semestral",modalidade:"turma",periodicidade:"semestral",valorMensal:150,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade semestral.",criadoEm:new Date().toISOString()}],this.savePaymentPlans());const s=localStorage.getItem(Se);s?this.students=JSON.parse(s).map(E=>({...E,saldoReposicoes:typeof E.saldoReposicoes=="number"?E.saldoReposicoes:0,instrumentoPrincipal:E.instrumentoPrincipal||"Violão",nivelMusical:E.nivelMusical||"iniciante",valorMensalidade:typeof E.valorMensalidade=="number"?E.valorMensalidade:280,diaVencimento:typeof E.diaVencimento=="number"?E.diaVencimento:10})):(this.students=[],this.saveStudents());const d=localStorage.getItem(Ie);d?this.appointments=JSON.parse(d):(this.appointments=[],this.saveAppointments());const L=localStorage.getItem(Te);L&&(this.settings=JSON.parse(L));const o=localStorage.getItem(Ce);o?this.payments=JSON.parse(o):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(E=>{E.nome.includes("Reabilitação")&&(E.nome="Violão e Harmonia Prática",E.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",E.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),this.savePlans(),this.students.forEach(E=>{var g;(g=E.observacoes)!=null&&g.includes("implante")&&(E.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",E.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(E=>{var g;(g=E.titulo)!=null&&g.includes("Auditivo")&&(E.titulo="Aula Prática de Violão",E.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=a=>a.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,a){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:a})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const a=t.data;return Array.isArray(a.students)&&(this.students=a.students,localStorage.setItem(Se,JSON.stringify(this.students))),Array.isArray(a.payments)&&(this.payments=a.payments,localStorage.setItem(Ce,JSON.stringify(this.payments))),Array.isArray(a.appointments)&&(this.appointments=a.appointments,localStorage.setItem(Ie,JSON.stringify(this.appointments))),Array.isArray(a.plans)&&(this.plans=a.plans,localStorage.setItem(ke,JSON.stringify(this.plans))),Array.isArray(a.users)&&a.users.length>0&&(this.users=a.users,localStorage.setItem(Le,JSON.stringify(this.users))),a.settings&&(this.settings={...this.settings,...a.settings},localStorage.setItem(Te,JSON.stringify(this.settings))),Array.isArray(a.audit)&&(a.audit.length===0?H.clearLocalOnly():H.setLogs(a.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(Se,JSON.stringify([])),localStorage.setItem(Ce,JSON.stringify([])),localStorage.setItem(Ie,JSON.stringify([])),localStorage.setItem(ke,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await H.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Le,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(Se,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(ke,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Ie,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Ce,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}savePaymentPlans(){localStorage.setItem(Oe,JSON.stringify(this.paymentPlans)),this.pushToCloud("payment_plans","replace_all",this.paymentPlans)}saveSettings(){localStorage.setItem(Te,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const a={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(a),this.saveUsers(),H.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${a.nome}" (login: ${a.login}, papel: ${a.papel})`}),a}updateUser(e,t,a){const s=this.users.findIndex(o=>o.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const d=this.users[s],L=d.isSistema;return this.users[s]={...d,...t,isSistema:L,atualizadoEm:new Date().toISOString()},this.saveUsers(),H.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:a,detalhes:`Usuário "${d.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const a=this.users.find(s=>s.id===e);if(!a)throw new Error("Usuário não encontrado.");if(a.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),H.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${a.nome}" (login: ${a.login}) foi removido.`})}getStudents(){return[...this.students]}getStudentById(e){return this.students.find(t=>t.id===e)}addStudent(e,t){const a={...e,id:"aluno_"+Date.now(),saldoReposicoes:0,criadoEm:new Date().toISOString()};return this.students.push(a),this.saveStudents(),H.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" cadastrado com status ${a.status}. Saldo de remarcação inicial: 0.`}),a}updateStudent(e,t,a){const s=this.students.findIndex(o=>o.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const d=this.students[s],L={...t};return delete L.saldoReposicoes,this.students[s]={...d,...L,saldoReposicoes:d.saldoReposicoes??0},this.saveStudents(),H.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:a,detalhes:`Aluno "${d.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const a=this.students.find(s=>s.id===e);a&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),H.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const a={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(a),this.savePlans(),H.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" criado com ${a.modulos.length} módulos.`}),a}updatePlan(e,t,a){const s=this.plans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano não encontrado.");const d=this.plans[s];return this.plans[s]={...d,...t},this.savePlans(),H.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:a,detalhes:`Plano "${d.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const a=this.plans.find(s=>s.id===e);a&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),H.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" foi excluído.`}))}getPaymentPlans(){return[...this.paymentPlans]}getPaymentPlanById(e){return this.paymentPlans.find(t=>t.id===e)}addPaymentPlan(e,t){const a={...e,id:"pp_"+Date.now(),criadoEm:new Date().toISOString()};return this.paymentPlans.push(a),this.savePaymentPlans(),H.log({tela:"Planos de Pagamento",acao:"Criação de Plano de Pagamento",usuarioNome:t,detalhes:`Plano "${a.nome}" criado (Modalidade: ${a.modalidade}, Ciclo: ${a.periodicidade}, R$ ${a.valorMensal}).`}),a}updatePaymentPlan(e,t,a){const s=this.paymentPlans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano de pagamento não encontrado.");const d=this.paymentPlans[s];return this.paymentPlans[s]={...d,...t},this.savePaymentPlans(),H.log({tela:"Planos de Pagamento",acao:"Atualização de Plano de Pagamento",usuarioNome:a,detalhes:`Plano de pagamento "${d.nome}" atualizado.`}),this.paymentPlans[s]}deletePaymentPlan(e,t){const a=this.paymentPlans.find(s=>s.id===e);a&&(this.paymentPlans=this.paymentPlans.filter(s=>s.id!==e),this.savePaymentPlans(),H.log({tela:"Planos de Pagamento",acao:"Exclusão de Plano de Pagamento",usuarioNome:t,detalhes:`Plano de pagamento "${a.nome}" foi excluído.`}))}calcularMensalidadeAluno(e,t){const a=this.paymentPlans.find(E=>E.id===e),s=a?a.valorMensal:280,d=t?(a==null?void 0:a.descontoSegundaMatricula)??20:0,L=d>0?s*d/100:0,o=Math.max(0,s-L);return{valorBase:s,descontoPercentual:d,valorDesconto:L,valorFinal:o}}getAppointments(){return[...this.appointments]}addAppointment(e,t){const a={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(a),this.saveAppointments();const s=this.students.find(d=>d.id===a.alunoId);return H.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${a.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${a.data} às ${a.horaInicio}.`}),a}updateAppointment(e,t,a){const s=this.appointments.findIndex(g=>g.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const d=this.appointments[s],L=d.status,o=t.status!==void 0?t.status:d.status;this.appointments[s]={...d,...t},this.saveAppointments();const E=this.students.find(g=>g.id===(t.alunoId||d.alunoId));return E&&(L!=="falta_justificada"&&o==="falta_justificada"?(E.saldoReposicoes=(E.saldoReposicoes||0)+1,this.saveStudents(),H.log({tela:"Agenda",acao:"Crédito de Remarcação Automático (+1)",usuarioNome:a,detalhes:`Status da aula "${d.titulo}" alterado para Falta Justificada. +1 crédito gerado para "${E.nome}". Saldo atual: ${E.saldoReposicoes}.`})):L==="falta_justificada"&&o!=="falta_justificada"&&(E.saldoReposicoes=Math.max(0,(E.saldoReposicoes||0)-1),this.saveStudents(),H.log({tela:"Agenda",acao:"Estorno de Crédito de Remarcação (-1)",usuarioNome:a,detalhes:`Falta justificada na aula "${d.titulo}" alterada para "${o}". 1 crédito estornado de "${E.nome}". Saldo atual: ${E.saldoReposicoes}.`})),(t.tipoAula||d.tipoAula)==="reposicao"&&(L!=="cancelado"&&o==="cancelado"?(E.saldoReposicoes=(E.saldoReposicoes||0)+1,this.saveStudents(),H.log({tela:"Agenda",acao:"Estorno por Cancelamento de Reposição (+1)",usuarioNome:a,detalhes:`Reposição cancelada para "${E.nome}". 1 crédito devolvido ao saldo. Saldo atual: ${E.saldoReposicoes}.`})):L==="cancelado"&&o==="agendado"&&(E.saldoReposicoes=Math.max(0,(E.saldoReposicoes||0)-1),this.saveStudents(),H.log({tela:"Agenda",acao:"Consumo por Reativação de Reposição (-1)",usuarioNome:a,detalhes:`Reposição reativada para "${E.nome}". 1 crédito consumido. Saldo atual: ${E.saldoReposicoes}.`})))),H.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:a,detalhes:`Compromisso "${d.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const a=this.appointments.find(s=>s.id===e);if(a){if(a.tipoAula==="reposicao"&&a.status!=="concluido"){const s=this.students.find(d=>d.id===a.alunoId);s&&(s.saldoReposicoes=(s.saldoReposicoes||0)+1,this.saveStudents(),H.log({tela:"Agenda",acao:"Estorno Automático de Crédito (+1)",usuarioNome:t,detalhes:`Aula de reposição excluída para "${s.nome}". 1 crédito estornado automaticamente ao saldo. Saldo atual: ${s.saldoReposicoes}.`}))}this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),H.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${a.titulo}" removido da agenda.`})}}marcarPresenca(e,t){const a=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(d=>d.id===a.alunoId);return H.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${a.titulo}".`}),a}registrarFalta(e,t,a,s){const d=t?"falta_justificada":"falta_injustificada",L=this.updateAppointment(e,{status:d,justificativaFalta:(a==null?void 0:a.trim())||void 0},s),o=this.students.find(g=>g.id===L.alunoId),E=(o==null?void 0:o.saldoReposicoes)||0;return{appointment:L,saldoReposicoes:E}}agendarReposicao(e,t,a){const s=this.students.find(L=>L.id===e.alunoId);if(!s||typeof s.saldoReposicoes!="number"||s.saldoReposicoes<=0)throw new Error(`O aluno "${(s==null?void 0:s.nome)||"selecionado"}" não possui créditos de remarcação disponíveis para agendar reposição.`);const d=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},a);if(t){const L=this.appointments.findIndex(o=>o.id===t);L!==-1&&(this.appointments[L].aulaReposicaoId=d.id,this.saveAppointments())}return s.saldoReposicoes-=1,this.saveStudents(),H.log({tela:"Agenda",acao:"Aula de Reposição Agendada (-1 Crédito)",usuarioNome:a,detalhes:`Reposição agendada para "${s.nome}". 1 crédito abatido automaticamente. Saldo restante: ${s.saldoReposicoes}.`}),d}generateAppointmentsFromPlan(e,t,a,s,d,L){const o=this.students.find(P=>P.id===e),E=this.plans.find(P=>P.id===t);if(!o||!E)return[];const g=[];if((E.modulos||[]).forEach(P=>{(P.aulas||[]).forEach(l=>{g.push({moduloId:P.id,moduloTitulo:P.titulo,aulaTitulo:l.titulo,aulaId:l.id})})}),g.length===0)return[];const f=[];let p=new Date(a+"T12:00:00");return g.forEach((P,l)=>{const A=m=>m.toString().padStart(2,"0"),r=`${p.getFullYear()}-${A(p.getMonth()+1)}-${A(p.getDate())}`,$={id:`app_${Date.now()}_${l}_${Math.random().toString(36).substr(2,4)}`,alunoId:o.id,planoId:E.id,moduloId:P.moduloId,aulaId:P.aulaId,titulo:`${P.aulaTitulo}`,data:r,horaInicio:s,horaFim:d,status:"agendado",tipoAula:"regular",observacoes:`${E.nome} • ${P.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push($),f.push($),p.setDate(p.getDate()+7)}),this.saveAppointments(),H.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:L,detalhes:`Geradas ${f.length} aulas regulares para "${o.nome}" com base no plano "${E.nome}".`}),f}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,a)=>{const s=`${t.data}T${t.horaInicio}`;return`${a.data}T${a.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(a=>{if(a.status!=="pago"){const s=a.dataVencimento<e?"atrasado":"pendente";a.status!==s&&(a.status=s,t=!0)}}),t&&this.savePayments(),[...this.payments].sort((a,s)=>s.dataVencimento.localeCompare(a.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(a=>a.alunoId===e&&(a.status==="atrasado"||a.status==="pendente"&&a.dataVencimento<t))}addPayment(e,t){const a=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<a&&(s="atrasado");const d={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(d),this.savePayments();const L=this.students.find(o=>o.id===d.alunoId);return H.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${d.descricao}" (R$ ${d.valor.toFixed(2)}) cadastrado para o aluno "${(L==null?void 0:L.nome)||"N/A"}" com vencimento em ${d.dataVencimento}.`}),d}darBaixaPayment(e,t,a,s,d){const L=this.payments.findIndex(f=>f.id===e);if(L===-1)throw new Error("Lançamento financeiro não encontrado");const o=this.payments[L],E=o.status;o.status="pago",o.dataPagamento=t,o.formaPagamento=a,d!==void 0&&(o.observacoes=d.trim()?d.trim():o.observacoes),this.savePayments();const g=this.students.find(f=>f.id===o.alunoId);return H.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${o.descricao}" de "${(g==null?void 0:g.nome)||"N/A"}". Valor R$ ${o.valor.toFixed(2)} recebido via ${a.toUpperCase()} em ${t} (Status anterior: ${E}).`}),o}updatePayment(e,t,a){const s=this.payments.findIndex(f=>f.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const d=this.getTodayDateString();let L=t.status||this.payments[s].status;const o=t.dataVencimento||this.payments[s].dataVencimento;L!=="pago"&&(L=o<d?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:L},this.savePayments();const E=this.payments[s],g=this.students.find(f=>f.id===E.alunoId);return H.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:a,detalhes:`Lançamento financeiro "${E.descricao}" do aluno "${(g==null?void 0:g.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const a=this.payments.find(d=>d.id===e);if(!a)return;this.payments=this.payments.filter(d=>d.id!==e),this.savePayments();const s=this.students.find(d=>d.id===a.alunoId);H.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${a.descricao}" no valor de R$ ${a.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,a){const s=p=>p.toString().padStart(2,"0"),d=`${e}-${s(t)}`,o=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||d,E=this.students.filter(p=>p.status==="ativo");let g=0,f=0;return E.forEach(p=>{if(this.payments.some(C=>C.alunoId===p.id&&(C.mesReferencia===d||C.dataVencimento.startsWith(d)))){f++;return}const l=p.diaVencimento||10,A=new Date(e,t,0).getDate(),r=Math.min(l,A),$=`${e}-${s(t)}-${s(r)}`,m=typeof p.valorMensalidade=="number"&&p.valorMensalidade>0?p.valorMensalidade:280;this.addPayment({alunoId:p.id,descricao:`Mensalidade ${o}/${e}`,mesReferencia:d,valor:m,dataVencimento:$,status:"pendente",observacoes:`Gerado automaticamente para o plano ${p.moduloAtual||p.instrumentoPrincipal||"Música"}`},a),g++}),H.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:a,detalhes:`Geração em lote para ${o}/${e}: ${g} mensalidade(s) criada(s) e ${f} já existente(s) pulada(s).`}),{criadas:g,puladas:f}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),H.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const M=new ot,ye={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function we(w){var s,d,L,o,E,g,f,p,P,l,A,r,$,m,C,v,k,n,b,y,i,h,c,u,x,z,N,R,_,S,T,B,D,O,G,Y;if(!w)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(w.papel==="admin")return JSON.parse(JSON.stringify(ye.admin));const e=ye[w.papel]||ye.professor,t=w.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const a=J=>typeof J=="boolean";return{alunos:{acesso:a(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:a(t.alunos)?t.alunos:((d=t.alunos)==null?void 0:d.cadastrar)??e.alunos.cadastrar,alterar:a(t.alunos)?t.alunos:((L=t.alunos)==null?void 0:L.alterar)??e.alunos.alterar,excluir:a(t.alunos)?!1:((o=t.alunos)==null?void 0:o.excluir)??e.alunos.excluir},agenda:{acesso:a(t.agenda)?t.agenda:((E=t.agenda)==null?void 0:E.acesso)??e.agenda.acesso,cadastrar:a(t.agenda)?t.agenda:((g=t.agenda)==null?void 0:g.cadastrar)??e.agenda.cadastrar,alterar:a(t.agenda)?t.agenda:((f=t.agenda)==null?void 0:f.alterar)??e.agenda.alterar,excluir:a(t.agenda)?!1:((p=t.agenda)==null?void 0:p.excluir)??e.agenda.excluir},planos:{acesso:a(t.planos)?t.planos:((P=t.planos)==null?void 0:P.acesso)??e.planos.acesso,cadastrar:a(t.planos)?t.planos:((l=t.planos)==null?void 0:l.cadastrar)??e.planos.cadastrar,alterar:a(t.planos)?t.planos:((A=t.planos)==null?void 0:A.alterar)??e.planos.alterar,excluir:a(t.planos)?!1:((r=t.planos)==null?void 0:r.excluir)??e.planos.excluir},planosPagamento:{acesso:a(t.planosPagamento)?t.planosPagamento:(($=t.planosPagamento)==null?void 0:$.acesso)??((m=e.planosPagamento)==null?void 0:m.acesso)??!1,cadastrar:a(t.planosPagamento)?t.planosPagamento:((C=t.planosPagamento)==null?void 0:C.cadastrar)??((v=e.planosPagamento)==null?void 0:v.cadastrar)??!1,alterar:a(t.planosPagamento)?t.planosPagamento:((k=t.planosPagamento)==null?void 0:k.alterar)??((n=e.planosPagamento)==null?void 0:n.alterar)??!1,excluir:a(t.planosPagamento)?!1:((b=t.planosPagamento)==null?void 0:b.excluir)??((y=e.planosPagamento)==null?void 0:y.excluir)??!1},home:{acesso:a(t.home)?t.home:((i=t.home)==null?void 0:i.acesso)??e.home.acesso},financeiro:{acesso:a(t.financeiro)?t.financeiro:((h=t.financeiro)==null?void 0:h.acesso)??((c=e.financeiro)==null?void 0:c.acesso)??!1,cadastrar:a(t.financeiro)?t.financeiro:((u=t.financeiro)==null?void 0:u.cadastrar)??((x=e.financeiro)==null?void 0:x.cadastrar)??!1,alterar:a(t.financeiro)?t.financeiro:((z=t.financeiro)==null?void 0:z.alterar)??((N=e.financeiro)==null?void 0:N.alterar)??!1,excluir:a(t.financeiro)?!1:((R=t.financeiro)==null?void 0:R.excluir)??((_=e.financeiro)==null?void 0:_.excluir)??!1},relatorios:{acesso:a(t.relatorios)?t.relatorios:((S=t.relatorios)==null?void 0:S.acesso)??((T=e.relatorios)==null?void 0:T.acesso)??!0,gerar:a(t.relatorios)?t.relatorios:((B=t.relatorios)==null?void 0:B.gerar)??((D=e.relatorios)==null?void 0:D.gerar)??!0},auditoria:{acesso:a(t.auditoria)?t.auditoria:((O=t.auditoria)==null?void 0:O.acesso)??e.auditoria.acesso},configuracoes:{acesso:a(t.configuracoes)?t.configuracoes:((G=t.configuracoes)==null?void 0:G.acesso)??e.configuracoes.acesso,alterar:a(t.configuracoes)?t.configuracoes:((Y=t.configuracoes)==null?void 0:Y.alterar)??e.configuracoes.alterar}}}function ue(w,e){var s;if(!w)return!1;if(e==="login")return!0;if(e==="user")return w.papel==="admin";if(w.papel==="admin"||w.isSistema)return!0;if(e==="planos-pagamento")return!!((s=we(w).planosPagamento)!=null&&s.acesso);const a=we(w)[e];return a&&typeof a=="object"&&"acesso"in a?!!a.acesso:!1}function ee(w,e,t){if(!w)return!1;if(w.papel==="admin")return!0;const s=we(w)[e];return s?!!s[t]:!1}const Pe="acusticamente_active_session";class st{constructor(){le(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(Pe);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=M.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(Pe,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=M.getUsers().find(d=>d.login===e.trim());return s?s.senha!==t.trim()?(H.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(Pe,JSON.stringify(s)),H.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(H.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&H.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Pe),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const Q=new st;function nt(w=40){return`
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
  `}function me(w,e=40){return w&&w.trim()!==""?`<img src="${w}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:nt(e)}function F(w,e="success"){const t=document.getElementById("toast-container");if(!t)return;const a=document.createElement("div");a.className=`toast toast-${e}`,a.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${w}</span>
  `,t.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 200ms ease",setTimeout(()=>a.remove(),200)},3500)}function ce(w){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
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
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),a=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),d=()=>{e.innerHTML="",w.onCancel&&w.onCancel()};t.onclick=d,a.onclick=d,s&&w.onConfirm&&(s.onclick=async()=>{const L=document.querySelector(".modal-card");await w.onConfirm(L)!==!1&&(e.innerHTML="")})}function $e(){const w=document.getElementById("modal-container");w&&(w.innerHTML="")}function ge(w){ce({title:w.title||"Confirmar Exclusão",bodyHtml:`
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
    `,confirmText:w.confirmText||"Excluir Definitivamente",confirmBtnClass:w.confirmBtnClass||"btn-danger",onConfirm:()=>(w.onConfirm(),!0)})}const j={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',planoPagamento:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'};function Ve(w){return w.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function ze(w){const e=w.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function He(w){const e=w.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function Ue(w){const e=w.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function Ke(w){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)}function it(w){const e=w.replace(/\D/g,"").slice(0,6);if(e.length<=4)return e;const t=e.slice(0,4);let a=e.slice(4,6);return parseInt(a,10)>12&&(a="12"),a.length===2&&a==="00"&&(a="01"),`${t}-${a}`}function rt(w){const e=w.replace(/\D/g,"").slice(0,2);if(!e)return"";const t=parseInt(e,10);return t>31?"31":t===0?"1":e}function Ge(w){const e=w.trim().toUpperCase();return e.startsWith("I")||e.startsWith("IS")||e.startsWith("ISE")||e.startsWith("ISEN")||e.startsWith("ISENT")||e==="ISENTO"?"ISENTO".slice(0,e.length):w.replace(/\D/g,"").slice(0,14)}function he(w){if(typeof w=="number")return w.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});const e=w.replace(/\D/g,"");return e?(parseInt(e,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}function Ne(w){if(!w)return 0;const e=w.replace(/[^\d,-]/g,"").replace(",","."),t=parseFloat(e);return isNaN(t)?0:t}function de(w,e){w.addEventListener("input",()=>{w.value=e(w.value)})}const De="acusticamente_auth_remember",lt="acusticamente_manual_logout";function dt(w,e){const t=document.createElement("div");t.className="login-page";const a=M.getSettings(),s=a.nomeMenu||a.nomeFantasia||"Acusticamente";let d={username:"",password:"",remember:!1};try{const g=localStorage.getItem(De);g&&(d={...d,...JSON.parse(g)})}catch{d={username:"",password:"",remember:!1}}t.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${me(a.logotipoCustomizado,50)}
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
            ${me(a.logotipoCustomizado,58)}
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
              value="${d.remember?d.username:""}"
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
              value="${d.remember?d.password:""}"
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
                ${d.remember?"checked":""} 
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
  `;const L=t.querySelector("#login-remember"),o=t.querySelector("#btn-back-to-site");o==null||o.addEventListener("click",()=>{e?e():window.location.hash="site"});const E=t.querySelector("#login-form");return E.onsubmit=g=>{var $;g.preventDefault();const f=t.querySelector("#login-username"),p=t.querySelector("#login-password"),P=f.value.trim(),l=p.value.trim(),A=L.checked,r=Q.login(P,l);r.success?(A?localStorage.setItem(De,JSON.stringify({username:P,password:l,remember:!0})):localStorage.removeItem(De),sessionStorage.removeItem(lt),F(`Bem-vindo, ${($=r.user)==null?void 0:$.nome}!`,"success"),w()):F(r.message,"error")},t}const xe=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,Be=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function ct(w){var P,l,A;const e=document.createElement("div");e.className="public-site-wrapper";const t=M.getSettings(),a=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",d="(51) 98189-8802",L="51981898802",o="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",E="Segunda a Sexta · Aberto até 20:30",g="https://share.google/NtOxuUNfF6FGJ62tZ",f="https://www.instagram.com/acusticamente.rs",p=`https://wa.me/55${L}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Esquerdo: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${me(t.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${a}</span>
        </div>

        <!-- Canto Direito: Entrar em contato e ao lado direito o Entrar -->
        <div class="site-header-right">
          <a href="${p}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Fale conosco no WhatsApp">
            ${xe}
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
          <a href="${p}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${xe}
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
                <p>${E}</p>
              </div>
            </div>

            <div class="location-item">
              <div class="location-icon">📞</div>
              <div>
                <h4>Telefone &amp; WhatsApp</h4>
                <p>${d}</p>
              </div>
            </div>

            <div class="location-actions">
              <a href="${g}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${p}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${xe}
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
        <a href="${p}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${xe}
          <span>Entrar em contato</span>
        </a>
      </div>
    </section>

    <!-- Rodapé Completo com Endereço e Instagram -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${me(t.logotipoCustomizado,32)}
            <span>${a}</span>
          </div>
          <p>${s}</p>
          <div class="footer-address">
            <p>
              📍 <a href="${g}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);" title="Ver no Google Maps">
                ${o}
              </a>
            </p>
            <p>📞 <a href="${p}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${d}</a></p>
            <p>🕒 ${E}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Redes Sociais &amp; Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Acompanhe nosso dia a dia ou mande uma mensagem pelo WhatsApp.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${p}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${xe}
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
  `,(P=e.querySelector("#btn-header-login"))==null||P.addEventListener("click",()=>{const r=Q.isAuthenticated();w(r?"home":"login")}),(l=e.querySelector("#btn-footer-login"))==null||l.addEventListener("click",()=>{const r=Q.isAuthenticated();w(r?"home":"login")}),(A=e.querySelector("#site-logo-link"))==null||A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function Je(w){var f,p;const e=document.createElement("div"),t=Q.getCurrentUser(),a=M.getStudents(),s=M.getPlans(),d=M.getAppointments(),L=M.getTodayDateString(),o=d.filter(P=>P.data===L),E=a.filter(P=>P.status==="ativo").length,g=o.find(P=>P.status==="agendado");return e.innerHTML=`
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
          <span class="metric-value">${o.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${j.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${E}</span>
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
            ${o.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':o.map(P=>{const l=a.find(C=>C.id===P.alunoId),A=s.find(C=>C.id===P.planoId),r=P.status==="concluido",$=P.status==="agendado";let m='<span class="badge badge-warning">⏳ Agendado</span>';return r?m='<span class="badge badge-success">✓ Concluído</span>':P.status==="falta_justificada"?m='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':P.status==="falta_injustificada"?m='<span class="badge badge-danger">✕ Falta Injustificada</span>':P.status==="cancelado"&&(m='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                        <tr data-app-id="${P.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${P.horaInicio} - ${P.horaFim}</strong>
                            ${P.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                ${((l==null?void 0:l.nome)||"A")[0]}
                              </div>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${(l==null?void 0:l.nome)||"Aluno não vinculado"}
                              </span>
                            </div>
                          </td>
                          <td class="col-hide-md" style="white-space: nowrap;">
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${(A==null?void 0:A.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${m}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${$?`<button class="btn btn-secondary btn-complete-class" data-id="${P.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${r?"Finalizada":"Registrada"}</span>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(f=e.querySelector("#home-btn-new-appointment"))==null||f.addEventListener("click",()=>{w("agenda")}),(p=e.querySelector("#home-btn-view-all-agenda"))==null||p.addEventListener("click",()=>{w("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(P=>{P.addEventListener("click",l=>{const A=l.currentTarget.dataset.id;A&&(M.updateAppointment(A,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),F("Aula concluída com sucesso!","success"),w("home"))})}),e}function pt(w){const e=document.createElement("div"),t=Q.getCurrentUser();let a=new Date;function s(){var k,n,b,y;const o=M.getStudents();M.getPlans();const E=M.getAppointments(),g=a.getFullYear(),f=a.getMonth(),p=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],P=new Date(g,f,1).getDay(),l=new Date(g,f+1,0).getDate(),A=new Date(g,f,0).getDate(),r=new Date,$=r.getFullYear()===g&&r.getMonth()===f,m=[];for(let i=P;i>0;i--){const h=A-i+1;m.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${h}</span>
          </div>
        </div>
      `)}for(let i=1;i<=l;i++){const h=_=>_.toString().padStart(2,"0"),c=`${g}-${h(f+1)}-${h(i)}`,u=$&&r.getDate()===i,x=E.filter(_=>_.data===c),z=x.slice(0,3).map(_=>{const S=o.find(O=>O.id===_.alunoId),T=S?S.nome.split(" ")[0]:"Aula";let B="",D="";return _.status==="concluido"?(B="concluido",D="✓ "):_.status==="falta_justificada"?(B="falta-justificada",D="⚠️ "):_.status==="falta_injustificada"?(B="falta-injustificada",D="✕ "):_.tipoAula==="reposicao"&&(B="reposicao",D="🔄 "),`
            <div class="calendar-appointment-badge ${B}" 
                 data-app-id="${_.id}" 
                 title="${_.horaInicio} - ${(S==null?void 0:S.nome)||"Aluno"} (${_.status}${_.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${D}${_.horaInicio}</strong> ${T}
            </div>
          `}).join(""),N=x.length>3?x.length-3:0,R=N>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${N} mais</div>`:"";m.push(`
        <div class="calendar-day-cell ${u?"today":""}" data-date="${c}">
          <div class="day-cell-header">
            <span class="day-number">${i}</span>
            ${x.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${x.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${z}
            ${R}
          </div>
        </div>
      `)}const C=m.length,v=C>35?42-C:35-C;for(let i=1;i<=v;i++)m.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${i}</span>
          </div>
        </div>
      `);e.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${p[f]} de ${g}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${$?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${ee(t,"agenda","cadastrar")?`
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
    `,(k=e.querySelector("#agenda-btn-prev"))==null||k.addEventListener("click",()=>{a.setMonth(a.getMonth()-1),s()}),(n=e.querySelector("#agenda-btn-next"))==null||n.addEventListener("click",()=>{a.setMonth(a.getMonth()+1),s()}),(b=e.querySelector("#agenda-btn-today"))==null||b.addEventListener("click",()=>{a=new Date,s()}),(y=e.querySelector("#agenda-btn-new-app"))==null||y.addEventListener("click",()=>{L()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(i=>{i.addEventListener("click",h=>{const c=i.dataset.date;c&&d(c)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(i=>{i.addEventListener("click",h=>{h.stopPropagation();const c=i.dataset.appId,u=E.find(x=>x.id===c);u&&d(u.data)})})}function d(o){const E=M.getStudents(),g=M.getPlans(),f=M.getAppointments().filter(m=>m.data===o),[p,P,l]=o.split("-"),A=`${l}/${P}/${p}`,r=f.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${f.map(m=>{const C=E.find(x=>x.id===m.alunoId),v=g.find(x=>x.id===m.planoId),k=m.status==="concluido",n=m.status==="falta_justificada",b=m.status==="falta_injustificada",y=m.status==="cancelado",i=m.status==="agendado",h=m.tipoAula==="reposicao";let c="var(--color-coral)",u='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return k?(c="var(--status-success)",u='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):n?(c="#f59e0b",u='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):b?(c="var(--status-danger)",u='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):y&&(c="var(--border-subtle)",u='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${c};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${m.horaInicio} - ${m.horaFim}</strong>
                        ${u}
                        ${h?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${m.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(C==null?void 0:C.nome)||"Não vinculado"}</strong>
                        ${C!=null&&C.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${C.instrumentoPrincipal}</span>`:""}
                        ${v?` &bull; Plano: <span style="color: #ff9187;">${v.nome}</span>`:""}
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
                      ${ee(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${m.id}" title="Editar Detalhes">
                              ${j.edit}
                            </button>
                          `:""}
                      ${ee(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${m.id}" title="Excluir">
                              ${j.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${ee(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${i?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${m.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${m.id}" data-name="${(C==null?void 0:C.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${m.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${n&&!m.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${m.id}" data-student-id="${m.alunoId}" data-title="${m.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,$=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${f.length}</strong>
          </span>
          ${ee(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${j.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${r}
      </div>
    `;ce({title:`Aulas do Dia: ${A}`,bodyHtml:$,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var m;(m=document.getElementById("btn-modal-new-appointment"))==null||m.addEventListener("click",()=>{$e(),L({defaultDate:o})}),document.querySelectorAll(".btn-mark-presence").forEach(C=>{C.addEventListener("click",v=>{const k=v.currentTarget.dataset.id;k&&(M.marcarPresenca(k,(t==null?void 0:t.nome)||"Administrador"),F("Presença confirmada e aula concluída!","success"),s(),d(o))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(C=>{C.addEventListener("click",v=>{const k=v.currentTarget.dataset.id,n=v.currentTarget.dataset.name;if(!k)return;const b=prompt(`Informe o motivo da falta justificada de ${n} (Ex: Atestado médico, Viagem em família):`);if(b===null)return;const y=M.registrarFalta(k,!0,b,(t==null?void 0:t.nome)||"Administrador");F(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${y.saldoReposicoes}).`,"success"),s(),d(o)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(C=>{C.addEventListener("click",v=>{const k=v.currentTarget.dataset.id;k&&ge({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{M.registrarFalta(k,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),F("Falta injustificada registrada.","info"),s(),d(o)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(C=>{C.addEventListener("click",v=>{const k=v.currentTarget,n=k.dataset.id,b=k.dataset.studentId,y=k.dataset.title;$e(),L({studentId:b,aulaOriginalId:n,tipoAula:"reposicao",titulo:y?`Reposição: ${y}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(C=>{C.addEventListener("click",v=>{const k=v.currentTarget.dataset.id,n=M.getAppointments().find(b=>b.id===k);n&&($e(),L({existingApp:n}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(C=>{C.addEventListener("click",v=>{const k=v.currentTarget.dataset.id,n=M.getAppointments().find(b=>b.id===k);n&&ge({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${n.titulo}</strong>"?`,onConfirm:()=>{M.deleteAppointment(n.id,(t==null?void 0:t.nome)||"Administrador"),F("Compromisso removido.","info"),s(),d(o)}})})})},50)}function L(o){const E=M.getStudents(),g=M.getPlans(),f=o==null?void 0:o.existingApp,p=!!f,P=(f==null?void 0:f.alunoId)||(o==null?void 0:o.studentId)||"",l=(f==null?void 0:f.data)||(o==null?void 0:o.defaultDate)||M.getTodayDateString(),A=((f==null?void 0:f.tipoAula)||(o==null?void 0:o.tipoAula))==="reposicao",r=E.map(v=>`<option value="${v.id}" ${P===v.id?"selected":""} data-planoid="${v.planoId||""}">${v.nome} (${v.instrumentoPrincipal||"Geral"})</option>`).join(""),$=g.map(v=>{const k=(v.modulos||[]).reduce((n,b)=>{var y;return n+(((y=b.aulas)==null?void 0:y.length)||0)},0);return`<option value="${v.id}" ${(f==null?void 0:f.planoId)===v.id?"selected":""} data-total-aulas="${k}">${v.nome} (${k} aulas)</option>`}).join("");let m=p||A?"manual":"plano";const C=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!p&&!A?`
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
              ${r}
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-select">Plano Pedagógico *</label>
            <select id="app-plan-select" class="form-select" required>
              <option value="">Selecione o Plano...</option>
              ${$}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-date-start">Data da 1ª Aula *</label>
              <input type="date" id="app-plan-date-start" class="form-input" value="${l}" required />
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
                <input type="radio" name="app-tipo-aula" value="regular" ${A?"":"checked"} style="accent-color: var(--color-coral);" />
                Regular
              </label>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: #4ade80;">
                <input type="radio" name="app-tipo-aula" value="reposicao" ${A?"checked":""} style="accent-color: #22c55e;" />
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
                ${r}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan">Plano Pedagógico</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${$}
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
              <input type="date" id="app-date" class="form-input" value="${l}" />
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

        ${p?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${j.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;ce({title:p?"Editar Aula":A?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:C,confirmText:p?"Salvar":"Confirmar",onConfirm:()=>{const v=(t==null?void 0:t.nome)||"Administrador";if(m==="plano"&&!p){const R=document.getElementById("app-plan-student").value,_=document.getElementById("app-plan-select").value,S=document.getElementById("app-plan-date-start").value,T=document.getElementById("app-plan-time-start").value,B=document.getElementById("app-plan-time-end").value;if(!R)return F("Selecione o aluno.","error"),!1;if(!_)return F("Selecione o plano pedagógico.","error"),!1;if(!S||!T||!B)return F("Informe data de início e horários.","error"),!1;const D=M.generateAppointmentsFromPlan(R,_,S,T,B,v);return D.length===0?(F("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(F(`Sucesso! ${D.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const k=document.getElementById("app-title").value.trim(),n=document.getElementById("app-student").value,b=document.getElementById("app-plan").value,y=document.getElementById("app-date").value,i=document.getElementById("app-time-start").value,h=document.getElementById("app-time-end").value,c=document.getElementById("app-status").value,u=document.getElementById("app-justificativa").value.trim(),x=document.getElementById("app-obs").value.trim(),z=document.querySelector('input[name="app-tipo-aula"]:checked'),N=(z==null?void 0:z.value)||"regular";if(!k||!n||!y||!i)return F("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;if(p&&f)M.updateAppointment(f.id,{titulo:k,alunoId:n,planoId:b||void 0,data:y,horaInicio:i,horaFim:h,status:c,tipoAula:N,justificativaFalta:u||void 0,observacoes:x},v),F("Aula atualizada com sucesso!","success");else if(N==="reposicao")try{M.agendarReposicao({titulo:k,alunoId:n,planoId:b||void 0,data:y,horaInicio:i,horaFim:h,status:c,justificativaFalta:u||void 0,observacoes:x},o==null?void 0:o.aulaOriginalId,v),F("Aula de reposição agendada (1 crédito abatido com sucesso)!","success")}catch(R){return F((R==null?void 0:R.message)||"Erro ao agendar reposição. Verifique o saldo do aluno.","error"),!1}else M.addAppointment({titulo:k,alunoId:n,planoId:b||void 0,data:y,horaInicio:i,horaFim:h,status:c,tipoAula:N,justificativaFalta:u||void 0,observacoes:x},v),F("Aula agendada com sucesso!","success");return s(),!0}}),setTimeout(()=>{var x;const v=document.querySelectorAll(".btn-app-mode"),k=document.getElementById("panel-app-plano"),n=document.getElementById("panel-app-manual");v.forEach(z=>{z.addEventListener("click",N=>{const R=N.currentTarget.dataset.mode;m=R,v.forEach(_=>{_.classList.remove("btn-primary"),_.classList.add("btn-secondary")}),N.currentTarget.classList.remove("btn-secondary"),N.currentTarget.classList.add("btn-primary"),k&&(k.style.display=R==="plano"?"flex":"none"),n&&(n.style.display=R==="manual"?"flex":"none")})});const b=document.getElementById("app-student"),y=document.getElementById("app-student-credits-info"),i=document.getElementById("app-student-credits-val"),h=document.querySelectorAll('input[name="app-tipo-aula"]'),c=()=>{var S;if(!b||!y||!i)return;const z=b.value;if(!z){y.style.display="none";return}const N=M.getStudentById(z),R=N?N.saldoReposicoes:0;i.textContent=`${R} ${R===1?"crédito":"créditos"}`;const _=((S=document.querySelector('input[name="app-tipo-aula"]:checked'))==null?void 0:S.value)==="reposicao";y.style.display="flex",R===0&&_?(y.style.background="rgba(239, 68, 68, 0.15)",y.style.borderColor="rgba(239, 68, 68, 0.4)",y.style.color="#f87171"):(y.style.background="rgba(59, 130, 246, 0.1)",y.style.borderColor="rgba(59, 130, 246, 0.3)",y.style.color="#93c5fd")};b==null||b.addEventListener("change",c),h.forEach(z=>z.addEventListener("change",c)),c();const u=document.getElementById("app-plan-student");u==null||u.addEventListener("change",()=>{const z=u.selectedOptions[0],N=z==null?void 0:z.getAttribute("data-planoid");if(N){const R=document.getElementById("app-plan-select");R&&(R.value=N)}}),p&&f&&((x=document.getElementById("btn-delete-app"))==null||x.addEventListener("click",()=>{ge({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${f.titulo}</strong>"?`,onConfirm:()=>{M.deleteAppointment(f.id,(t==null?void 0:t.nome)||"Administrador"),F("Aula removida.","info"),$e(),s()}})}))},50)}return s(),e}const ut=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function We(w){const e=(w||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function mt(w){if(!w)return"";const e=new Date(w+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,`${a} anos`}function Ye(w){if(!w)return null;const e=new Date(w+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,a}function ft(w,e){const t=w.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${a}?text=${s}`}function Qe(w,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},a=`
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
  `;ce({title:`Recibo de Pagamento: ${w.descricao}`,bodyHtml:a,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function gt(w){const e=document.createElement("div"),t=Q.getCurrentUser();let a="";function s(){var A,r;const o=M.getStudents(),E=M.getPlans(),g=ee(t,"alunos","cadastrar"),f=ee(t,"alunos","alterar"),p=ee(t,"alunos","excluir"),P=o.filter($=>$.nome.toLowerCase().includes(a.toLowerCase())||$.email.toLowerCase().includes(a.toLowerCase())||$.telefone.includes(a)||$.instrumentoPrincipal&&$.instrumentoPrincipal.toLowerCase().includes(a.toLowerCase())||$.responsavelNome&&$.responsavelNome.toLowerCase().includes(a.toLowerCase()));e.innerHTML=`
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${j.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${P.length})</h3>
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
              ${P.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':P.map($=>{const m=E.find(v=>v.id===$.planoId),C=$.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${$.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${$.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${We($.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${$.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${$.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-white); white-space: nowrap; display: block;">
                                ${(m==null?void 0:m.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                              ${($.saldoReposicoes||0)>0?`<span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.64rem; padding: 1px 5px; margin-top: 2px; display: inline-block;">
                                      ⚡ ${$.saldoReposicoes} ${$.saldoReposicoes===1?"crédito":"créditos"} de remarcação
                                     </span>`:""}
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${C?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${C?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${$.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${j.profile}
                                </button>
                                ${f?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${$.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${p?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${$.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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
    `;const l=e.querySelector("#student-search-input");l==null||l.addEventListener("input",$=>{a=$.target.value,s();const m=e.querySelector("#student-search-input");m&&(m.focus(),m.selectionStart=m.selectionEnd=m.value.length)}),(A=e.querySelector("#btn-clear-search"))==null||A.addEventListener("click",()=>{a="",s()}),(r=e.querySelector("#btn-new-student"))==null||r.addEventListener("click",()=>{L()}),e.querySelectorAll(".btn-view-student").forEach($=>{$.addEventListener("click",m=>{const C=m.currentTarget.dataset.id,v=M.getStudents().find(k=>k.id===C);v&&d(v)})}),e.querySelectorAll(".btn-edit-student").forEach($=>{$.addEventListener("click",m=>{const C=m.currentTarget.dataset.id,v=M.getStudents().find(k=>k.id===C);v&&L(v)})}),e.querySelectorAll(".btn-delete-student").forEach($=>{$.addEventListener("click",m=>{const C=m.currentTarget.dataset.id,v=M.getStudents().find(k=>k.id===C);v&&ge({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${v.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{M.deleteStudent(v.id,(t==null?void 0:t.nome)||"Administrador"),F(`Aluno "${v.nome}" excluído.`,"info"),s()}})})})}function d(o){const E=M.getPlans(),g=M.getPaymentPlans();E.find(c=>c.id===o.planoId);const f=g.find(c=>c.id===o.planoPagamentoId),p=M.getStudentAppointments(o.id),P=M.getStudentPayments(o.id),l=mt(o.dataNascimento),A=ft(o.telefone,o.nome),r=o.saldoReposicoes||0,$=M.isStudentOverdue(o.id),m=o.status==="ativo",C=ee(t,"financeiro","alterar"),v=p.length,k=p.filter(c=>c.status==="concluido").length,n=p.filter(c=>c.status==="falta_justificada").length,b=p.filter(c=>c.status==="falta_injustificada").length,y=P.filter(c=>c.status==="pago").reduce((c,u)=>c+u.valor,0),i=P.filter(c=>c.status!=="pago").reduce((c,u)=>c+u.valor,0),h=`
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
                ${l?`&bull; <span style="color: var(--text-muted);">${l}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${A?`
                  <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
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
              ${$?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${P.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${v}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${k}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${n+b}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${r}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Remarcações</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${p.length})
              </span>
              ${r>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${r})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${p.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
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
                        ${p.map(c=>{const u=c.status==="concluido",x=c.status.startsWith("falta"),z=c.status==="agendado",N=u?'<span class="badge badge-success" style="font-size: 0.65rem; padding: 1px 5px;">Presente</span>':x?`<span class="badge ${c.status==="falta_justificada"?"badge-coral":"badge-danger"}" style="font-size: 0.65rem; padding: 1px 5px;">${c.status==="falta_justificada"?"Falta Justificada":"Falta Injustificada"}</span>`:z?'<span class="badge badge-warning" style="font-size: 0.65rem; padding: 1px 5px;">Agendado</span>':'<span class="badge badge-secondary" style="font-size: 0.65rem; padding: 1px 5px;">Cancelado</span>',R=c.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem; padding: 1px 5px;">🔄 Reposição</span>':'<span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); font-size: 0.65rem; padding: 1px 5px;">Regular</span>';return`
                              <tr>
                                <td style="white-space: nowrap; font-weight: 500;">
                                  ${c.data.split("-").reverse().join("/")} <span style="color: var(--text-muted); font-size: 0.7rem;">${c.horaInicio}</span>
                                </td>
                                <td>${c.titulo}</td>
                                <td class="col-hide-sm">${R}</td>
                                <td>${N}</td>
                                <td class="col-hide-sm" style="color: var(--text-muted); font-size: 0.72rem;">
                                  ${c.justificativaFalta?`<em>Motivo: ${c.justificativaFalta}</em>`:c.observacoes||"-"}
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
            ${o.isSegundaMatricula?`<span class="badge" style="background: rgba(255, 255, 255, 0.08); color: var(--text-secondary); border: 1px solid var(--border-subtle); font-size: 0.72rem; padding: 3px 8px;">
                    🏷️ 2ª Matrícula / Familiar
                   </span>`:""}
          </div>

          <!-- Status Sucinto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.8rem; color: var(--text-white);">
              ${$?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
                R$ ${y.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${i>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${i.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${P.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${P.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${P.map(c=>{const u=c.status==="pago",x=c.status==="atrasado";let z="";return u?z='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':x?z='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':z='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${c.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${c.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${c.valor.toFixed(2)}</td>
                              <td>${z}</td>
                              <td class="col-hide-sm">${c.dataPagamento?c.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${u?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${c.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:C?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${c.id}" style="font-size: 0.7rem; padding: 2px 7px;">
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
    `;ce({title:`Ficha do Aluno: ${o.nome}`,bodyHtml:h,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var N;const c=document.getElementById("btn-tab-pedagogico"),u=document.getElementById("btn-tab-financeiro"),x=document.getElementById("panel-tab-pedagogico"),z=document.getElementById("panel-tab-financeiro");c==null||c.addEventListener("click",()=>{c.classList.add("active"),u==null||u.classList.remove("active"),x&&(x.style.display="flex"),z&&(z.style.display="none")}),u==null||u.addEventListener("click",()=>{u.classList.add("active"),c==null||c.classList.remove("active"),z&&(z.style.display="flex"),x&&(x.style.display="none")}),(N=document.getElementById("btn-quick-schedule-reposicao"))==null||N.addEventListener("click",()=>{$e(),w("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(R=>{R.addEventListener("click",_=>{const S=_.currentTarget.dataset.id,T=P.find(B=>B.id===S);T&&Qe(T,o)})}),document.querySelectorAll(".btn-pay-now").forEach(R=>{R.addEventListener("click",_=>{const S=_.currentTarget.dataset.id,T=P.find(O=>O.id===S);if(!T)return;const B=M.getTodayDateString(),D=`
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
          `;ce({title:`Dar Baixa: ${T.descricao}`,bodyHtml:D,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const O=document.getElementById("baixa-data").value,G=document.getElementById("baixa-forma").value,Y=document.getElementById("baixa-obs").value;if(!O)return F("Informe a data de recebimento.","error"),!1;const J=(t==null?void 0:t.nome)||"Administrador";M.darBaixaPayment(T.id,O,G,J,Y),F(`Baixa de R$ ${T.valor.toFixed(2)} efetuada com sucesso!`,"success"),s();const K=M.getStudents().find(W=>W.id===o.id)||o;return d(K),setTimeout(()=>{var W;(W=document.getElementById("btn-tab-financeiro"))==null||W.click()},50),!0}})})})},50)}function L(o){const E=M.getPlans(),g=M.getPaymentPlans(),f=!!o;o&&M.getStudentPayments(o.id);const p=E.map(r=>`<option value="${r.id}" ${(o==null?void 0:o.planoId)===r.id?"selected":""}>${r.nome}${r.instrumento?` (${r.instrumento})`:""}</option>`).join(""),P=g.filter(r=>r.ativo).map(r=>`<option value="${r.id}" ${(o==null?void 0:o.planoPagamentoId)===r.id?"selected":""} data-valor="${r.valorMensal}" data-desconto="${r.descontoSegundaMatricula??0}">${r.nome} (${r.modalidade==="individual"?"👤 Individual":"👥 Turma"} - ${r.periodicidade.toUpperCase()}) - R$ ${r.valorMensal.toFixed(2)}/mês</option>`).join(""),l=ut.map(r=>`<option value="${r}" ${(o==null?void 0:o.instrumentoPrincipal)===r?"selected":""}>${r}</option>`).join(""),A=`
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
                ${l}
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
              ${p}
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
                ${P}
              </select>
            </div>

            <!-- Regra de Desconto: 2ª Matrícula / Familiar (Opcional) -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
              <div>
                <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-white);">
                  2ª Matrícula / Familiar (Opcional)
                </div>
                <div style="font-size: 0.72rem; color: var(--text-secondary);">
                  Aplicar desconto opcional de segunda matrícula conforme configurado no plano.
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none;">
                <input type="checkbox" id="student-segunda-matricula" ${o!=null&&o.isSegundaMatricula?"checked":""} style="width: 18px; height: 18px; accent-color: var(--color-coral);" />
                <span id="label-desc-segunda" style="font-size: 0.78rem; font-weight: 500; color: var(--text-secondary);">Aplicar</span>
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
                <div id="summary-plano-desc" style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-top: 2px;">R$ 0,00</div>
              </div>
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade</div>
                <div id="summary-plano-final" style="font-size: 0.92rem; font-weight: 700; color: #34d399; margin-top: 2px;">R$ 280,00</div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Valor Cobrado (R$) *</label>
                <input type="text" id="student-valor-mensalidade" class="form-input" placeholder="0,00" value="${(o==null?void 0:o.valorMensalidade)!==void 0?he(o.valorMensalidade):"280,00"}" required />
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
    `;ce({title:f?`Editar: ${o.nome}`:"Cadastrar Aluno",bodyHtml:A,modalClass:"modal-lg",confirmText:f?"Salvar":"Cadastrar",onConfirm:()=>{var K,W,re,se,ie,oe;const r=document.getElementById("student-nome").value.trim(),$=document.getElementById("student-nascimento").value,m=document.getElementById("student-email").value.trim(),C=document.getElementById("student-telefone").value.trim(),v=((K=document.getElementById("student-cpf"))==null?void 0:K.value.trim())||void 0,k=document.getElementById("student-resp-nome").value.trim(),n=document.getElementById("student-resp-parentesco").value,b=document.getElementById("student-resp-tel").value.trim(),y=((W=document.getElementById("student-resp-cpf"))==null?void 0:W.value.trim())||void 0,i=document.getElementById("student-instrumento").value,h=document.getElementById("student-nivel").value,c=document.getElementById("student-plano").value,u=((re=document.getElementById("student-plano-pagamento"))==null?void 0:re.value)||void 0,x=((se=document.getElementById("student-segunda-matricula"))==null?void 0:se.checked)||!1,z=document.getElementById("student-status").value,N=document.getElementById("student-modulo").value.trim(),R=(ie=document.getElementById("student-valor-mensalidade"))==null?void 0:ie.value,_=Ne(R),S=(oe=document.getElementById("student-dia-vencimento"))==null?void 0:oe.value,T=Math.min(31,Math.max(1,parseInt(S,10)||10)),B=document.getElementById("student-obs").value.trim(),D=[];r||D.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),$||D.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),C?C.replace(/\D/g,"").length<10&&D.push({label:"Celular do Aluno incompleto",fieldId:"student-telefone",tabId:"tab-pessoal"}):D.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),v&&v.replace(/\D/g,"").length!==11&&D.push({label:"CPF do Aluno incompleto (11 dígitos)",fieldId:"student-cpf",tabId:"tab-pessoal"}),m&&!Ke(m)&&D.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const O=Ye($);O!==null&&O<18&&(k||D.push({label:`Nome do Responsável (Aluno menor de idade: ${O} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),n||D.push({label:`Parentesco do Responsável (Aluno menor de idade: ${O} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),b?b.replace(/\D/g,"").length<10&&D.push({label:"Celular do Responsável incompleto",fieldId:"student-resp-tel",tabId:"tab-resp"}):D.push({label:`Celular do Responsável (Aluno menor de idade: ${O} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"}),y&&y.replace(/\D/g,"").length!==11&&D.push({label:"CPF do Responsável incompleto (11 dígitos)",fieldId:"student-resp-cpf",tabId:"tab-resp"})),z||D.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!R||_<=0)&&D.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const Y=parseInt(S,10);if((!S||isNaN(Y)||Y<1||Y>31)&&D.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),D.length>0){const V=ne=>{const q=document.querySelectorAll(".btn-form-tab"),ae=document.querySelectorAll(".form-tab-panel");q.forEach(Z=>{Z.dataset.tab===ne?Z.classList.add("active"):Z.classList.remove("active")}),ae.forEach(Z=>{Z.style.display=Z.id===`form-panel-${ne}`?"flex":"none"})},te=document.createElement("div");te.id="student-validation-alert",te.style.cssText=`
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `,te.innerHTML=`
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
                  ${D.map(ne=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${ne.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(te);const X=te.querySelector("#btn-validation-ok");return X==null||X.focus(),X==null||X.addEventListener("click",()=>{te.remove();const ne=D[0];V(ne.tabId),setTimeout(()=>{const q=document.getElementById(ne.fieldId);q&&(q.focus(),q.scrollIntoView({behavior:"smooth",block:"center"}),q.style.outline="2px solid var(--color-coral)",q.style.borderColor="var(--color-coral)",setTimeout(()=>{q.style.outline="",q.style.borderColor=""},3500))},100)}),!1}const J=(t==null?void 0:t.nome)||"Administrador";return f&&o?(M.updateStudent(o.id,{nome:r,dataNascimento:$,email:m,telefone:C,cpf:v,responsavelNome:k,responsavelParentesco:n,responsavelTelefone:b,responsavelCpf:y,instrumentoPrincipal:i,nivelMusical:h,planoId:c,planoPagamentoId:u,isSegundaMatricula:x,status:z,moduloAtual:N,valorMensalidade:_,diaVencimento:T,observacoes:B},J),F("Dados do aluno atualizados com sucesso!","success")):(M.addStudent({nome:r,dataNascimento:$,email:m,telefone:C,cpf:v,responsavelNome:k,responsavelParentesco:n,responsavelTelefone:b,responsavelCpf:y,instrumentoPrincipal:i,nivelMusical:h,planoId:c,planoPagamentoId:u,isSegundaMatricula:x,status:z,moduloAtual:N,valorMensalidade:_,diaVencimento:T,observacoes:B},J),F("Aluno cadastrado com sucesso!","success")),s(),!0}}),setTimeout(()=>{const r=document.querySelectorAll(".btn-form-tab"),$=document.querySelectorAll(".form-tab-panel");r.forEach(S=>{S.addEventListener("click",T=>{const B=T.currentTarget.dataset.tab;r.forEach(D=>{D.classList.remove("active")}),T.currentTarget.classList.add("active"),$.forEach(D=>{D.style.display=D.id===`form-panel-${B}`?"flex":"none"})})});const m=document.getElementById("student-cpf");m&&de(m,Ve);const C=document.getElementById("student-telefone");C&&de(C,ze);const v=document.getElementById("student-resp-cpf");v&&de(v,Ve);const k=document.getElementById("student-resp-tel");k&&de(k,ze);const n=document.getElementById("student-valor-mensalidade");n&&de(n,he);const b=document.getElementById("student-dia-vencimento");b&&de(b,rt);const y=document.getElementById("student-plano-pagamento"),i=document.getElementById("student-segunda-matricula"),h=document.getElementById("summary-plano-base"),c=document.getElementById("summary-plano-desc"),u=document.getElementById("summary-plano-final"),x=()=>{const S=y==null?void 0:y.value,T=(i==null?void 0:i.checked)||!1,B=M.calcularMensalidadeAluno(S,T);h&&(h.textContent=`R$ ${B.valorBase.toFixed(2)}`),c&&(c.textContent=B.descontoPercentual>0?`-R$ ${B.valorDesconto.toFixed(2)} (${B.descontoPercentual}%)`:"R$ 0,00",c.style.color=B.descontoPercentual>0?"#34d399":"var(--text-secondary)"),u&&(u.textContent=`R$ ${B.valorFinal.toFixed(2)}`);const D=document.getElementById("label-desc-segunda");if(D){const O=y==null?void 0:y.selectedOptions[0],G=parseFloat((O==null?void 0:O.getAttribute("data-desconto"))||"0");G>0?(D.textContent=`${G}% OFF`,D.style.color=T?"#34d399":"var(--text-secondary)"):(D.textContent="Aplicar",D.style.color="var(--text-secondary)")}n&&(n.value=he(B.valorFinal))};y==null||y.addEventListener("change",x),i==null||i.addEventListener("change",x),o!=null&&o.planoPagamentoId&&x();const z=document.getElementById("student-nascimento"),N=document.getElementById("student-resp-alert"),R=document.querySelectorAll(".resp-req-star"),_=()=>{const S=z==null?void 0:z.value,T=Ye(S),B=T!==null&&T<18;N&&(N.style.display=B?"block":"none",B&&(N.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${T} anos).</strong> Dados do responsável são obrigatórios.`)),R.forEach(D=>{D.style.display=B?"inline":"none"})};z==null||z.addEventListener("input",_),z==null||z.addEventListener("change",_),_()},50)}return s(),e}const fe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"planosPagamento",title:"Planos de Pagamento",icon:"💳",items:[{key:"acesso",label:"Acesso ao módulo de planos de pagamento"},{key:"cadastrar",label:"Cadastrar novo plano de pagamento"},{key:"alterar",label:"Alterar modalidades, ciclos e valores"},{key:"excluir",label:"Excluir plano de pagamento"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Xe=fe.reduce((w,e)=>w+e.items.length,0);function vt(w){let e=0;return fe.forEach(t=>{const a=w[t.key];a&&t.items.forEach(s=>{a[s.key]&&e++})}),e}function bt(w){var L;const e=document.createElement("div"),t=Q.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(L=e.querySelector("#btn-unauth-home"))==null||L.addEventListener("click",()=>w("home")),e;let a="";function s(){var p,P;const o=M.getUsers(),E=a.toLowerCase(),g=o.filter(l=>l.nome.toLowerCase().includes(E)||l.login.toLowerCase().includes(E)||l.papel.toLowerCase().includes(E));e.innerHTML=`
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${j.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
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
              ${g.map(l=>{const A=l.papel==="admin"?"Administrador":l.papel==="professor"?"Professor":"Atendente",r=we(l),$=vt(r);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${l.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${l.nome[0]||"U"}
                          </div>
                          <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${l.nome}
                          </span>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${l.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${l.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${A}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${l.papel==="admin"?"badge-coral":$>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${l.papel==="admin"?`Acesso Total (${Xe})`:`${$} de ${Xe} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${l.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${l.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${j.edit}
                          </button>
                          ${l.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${j.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${l.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
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
    `,(p=e.querySelector("#btn-new-user"))==null||p.addEventListener("click",()=>{d()});const f=e.querySelector("#user-search-input");f&&f.addEventListener("input",l=>{a=l.target.value,s();const A=e.querySelector("#user-search-input");A&&(A.focus(),A.setSelectionRange(A.value.length,A.value.length))}),(P=e.querySelector("#btn-clear-search"))==null||P.addEventListener("click",()=>{a="",s()}),e.querySelectorAll(".btn-edit-user").forEach(l=>{l.addEventListener("click",A=>{const r=A.currentTarget.dataset.id,$=M.getUsers().find(m=>m.id===r);$&&d($)})}),e.querySelectorAll(".btn-delete-user").forEach(l=>{l.addEventListener("click",A=>{const r=A.currentTarget.dataset.id,$=M.getUsers().find(m=>m.id===r);$&&ge({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${$.nome}</strong>" (login: <code>${$.login}</code>)?`,onConfirm:()=>{try{M.deleteUser($.id,(t==null?void 0:t.nome)||"Administrador"),F(`Usuário "${$.nome}" excluído.`,"info"),s()}catch(m){F(m.message||"Erro ao excluir usuário.","error")}}})})})}function d(o){var m,C,v,k;const E=!!o,g=o?o.papel:"professor",f=g==="admin",p=we(o),P=`
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
            <input type="password" id="user-senha" class="form-input" placeholder="${E?"Nova senha":"Ex: 123456"}" value="${(o==null?void 0:o.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${o!=null&&o.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${g==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${g==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${g==="atendente"?"selected":""}>Atendente</option>
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
            ${fe.map(n=>{const b=p[n.key]||{},y=n.items.filter(i=>b[i.key]).length;return`
                <div class="perm-group-card" id="card-group-${n.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${n.key}" 
                    data-group="${n.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${n.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${n.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${n.title}
                        </strong>
                        <span id="group-counter-${n.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${y}/${n.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${n.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${n.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${n.items.map(i=>{const h=!!b[i.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${n.key}-${i.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${h?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${h?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${n.key}-${i.key}" 
                                data-group="${n.key}" 
                                data-action="${i.key}" 
                                ${h?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${i.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${n.key}-${i.key}" 
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
    `;ce({title:E?`Editar Usuário: ${o.nome}`:"Cadastrar Novo Usuário",bodyHtml:P,modalClass:"modal-lg",confirmText:E?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var z,N,R,_,S,T,B,D,O,G,Y,J,K,W,re,se,ie,oe,V,te,X,ne,q,ae,Z,ve;const n=document.getElementById("user-nome").value.trim(),b=document.getElementById("user-login").value.trim(),y=document.getElementById("user-senha").value.trim(),i=document.getElementById("user-papel"),h=i?i.value:"professor";if(!n||!b||!y)return F("Preencha Nome, Login e Senha.","error"),!1;if(M.getUsers().find(be=>be.login===b&&be.id!==(o==null?void 0:o.id)))return F(`O login "${b}" já está em uso por outro usuário.`,"error"),!1;let u;h==="admin"?u=JSON.parse(JSON.stringify(ye.admin)):u={alunos:{acesso:((z=document.getElementById("perm-alunos-acesso"))==null?void 0:z.checked)??!1,cadastrar:((N=document.getElementById("perm-alunos-cadastrar"))==null?void 0:N.checked)??!1,alterar:((R=document.getElementById("perm-alunos-alterar"))==null?void 0:R.checked)??!1,excluir:((_=document.getElementById("perm-alunos-excluir"))==null?void 0:_.checked)??!1},agenda:{acesso:((S=document.getElementById("perm-agenda-acesso"))==null?void 0:S.checked)??!1,cadastrar:((T=document.getElementById("perm-agenda-cadastrar"))==null?void 0:T.checked)??!1,alterar:((B=document.getElementById("perm-agenda-alterar"))==null?void 0:B.checked)??!1,excluir:((D=document.getElementById("perm-agenda-excluir"))==null?void 0:D.checked)??!1},planos:{acesso:((O=document.getElementById("perm-planos-acesso"))==null?void 0:O.checked)??!1,cadastrar:((G=document.getElementById("perm-planos-cadastrar"))==null?void 0:G.checked)??!1,alterar:((Y=document.getElementById("perm-planos-alterar"))==null?void 0:Y.checked)??!1,excluir:((J=document.getElementById("perm-planos-excluir"))==null?void 0:J.checked)??!1},financeiro:{acesso:((K=document.getElementById("perm-financeiro-acesso"))==null?void 0:K.checked)??!1,cadastrar:((W=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:W.checked)??!1,alterar:((re=document.getElementById("perm-financeiro-alterar"))==null?void 0:re.checked)??!1,excluir:((se=document.getElementById("perm-financeiro-excluir"))==null?void 0:se.checked)??!1},planosPagamento:{acesso:((ie=document.getElementById("perm-planosPagamento-acesso"))==null?void 0:ie.checked)??!1,cadastrar:((oe=document.getElementById("perm-planosPagamento-cadastrar"))==null?void 0:oe.checked)??!1,alterar:((V=document.getElementById("perm-planosPagamento-alterar"))==null?void 0:V.checked)??!1,excluir:((te=document.getElementById("perm-planosPagamento-excluir"))==null?void 0:te.checked)??!1},relatorios:{acesso:((X=document.getElementById("perm-relatorios-acesso"))==null?void 0:X.checked)??!1,gerar:((ne=document.getElementById("perm-relatorios-gerar"))==null?void 0:ne.checked)??!1},home:{acesso:((q=document.getElementById("perm-home-acesso"))==null?void 0:q.checked)??!1},auditoria:{acesso:((ae=document.getElementById("perm-auditoria-acesso"))==null?void 0:ae.checked)??!1},configuracoes:{acesso:((Z=document.getElementById("perm-configuracoes-acesso"))==null?void 0:Z.checked)??!1,alterar:((ve=document.getElementById("perm-configuracoes-alterar"))==null?void 0:ve.checked)??!1}};const x=(t==null?void 0:t.nome)||"Administrador";return E&&o?(M.updateUser(o.id,{nome:n,login:b,senha:y,papel:o.isSistema?"admin":h,permissoes:o.isSistema?ye.admin:u},x),F("Usuário e permissões atualizados com sucesso!","success")):(M.addUser({nome:n,login:b,senha:y,papel:h,permissoes:u},x),F("Novo usuário cadastrado com sucesso!","success")),s(),!0}});const l=document.getElementById("user-papel"),A=document.getElementById("user-permissions-section"),r=(n,b,y)=>{const i=document.getElementById(`row-perm-${n}-${b}`),h=document.getElementById(`badge-perm-${n}-${b}`);i&&h&&(y?(i.style.background="rgba(34, 197, 94, 0.06)",i.style.borderColor="rgba(34, 197, 94, 0.25)",h.className="badge badge-success",h.textContent="Liberado"):(i.style.background="rgba(234, 67, 53, 0.04)",i.style.borderColor="rgba(234, 67, 53, 0.15)",h.className="badge badge-coral",h.textContent="Bloqueado")),$(n)},$=n=>{const b=document.getElementById(`group-counter-${n}`),y=fe.find(i=>i.key===n);if(b&&y){let i=0;y.items.forEach(h=>{const c=document.getElementById(`perm-${n}-${h.key}`);c&&c.checked&&i++}),b.textContent=`${i}/${y.items.length} liberadas`}};l==null||l.addEventListener("change",()=>{const n=l.value;if(n==="admin")A.style.display="none";else if(A.style.display="block",!E){const b=ye[n]||ye.professor;fe.forEach(y=>{y.items.forEach(i=>{var c;const h=document.getElementById(`perm-${y.key}-${i.key}`);if(h){const u=((c=b[y.key])==null?void 0:c[i.key])??!1;h.checked=u,r(y.key,i.key,u)}})})}}),fe.forEach(n=>{const b=document.getElementById(`header-group-${n.key}`),y=document.getElementById(`group-body-${n.key}`),i=document.getElementById(`arrow-perm-${n.key}`);b==null||b.addEventListener("click",h=>{if(!h.target.closest(".btn-group-toggle")&&y&&i){const c=y.style.display==="flex";y.style.display=c?"none":"flex",i.style.transform=c?"rotate(0deg)":"rotate(180deg)"}}),n.items.forEach(h=>{const c=document.getElementById(`perm-${n.key}-${h.key}`);c==null||c.addEventListener("change",()=>{if(r(n.key,h.key,c.checked),c.checked&&h.key!=="acesso"){const u=document.getElementById(`perm-${n.key}-acesso`);u&&!u.checked&&(u.checked=!0,r(n.key,"acesso",!0))}!c.checked&&h.key==="acesso"&&n.items.forEach(u=>{if(u.key!=="acesso"){const x=document.getElementById(`perm-${n.key}-${u.key}`);x&&x.checked&&(x.checked=!1,r(n.key,u.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${n.key}"]`).forEach(h=>{h.addEventListener("click",c=>{c.stopPropagation();const u=n.items.map(z=>document.getElementById(`perm-${n.key}-${z.key}`)).filter(Boolean),x=u.every(z=>z.checked);u.forEach(z=>{z.checked=!x,r(n.key,z.dataset.action,!x)})})})}),(m=document.getElementById("btn-perm-expand"))==null||m.addEventListener("click",()=>{fe.forEach(n=>{const b=document.getElementById(`group-body-${n.key}`),y=document.getElementById(`arrow-perm-${n.key}`);b&&y&&(b.style.display="flex",y.style.transform="rotate(180deg)")})}),(C=document.getElementById("btn-perm-collapse"))==null||C.addEventListener("click",()=>{fe.forEach(n=>{const b=document.getElementById(`group-body-${n.key}`),y=document.getElementById(`arrow-perm-${n.key}`);b&&y&&(b.style.display="none",y.style.transform="rotate(0deg)")})}),(v=document.getElementById("btn-perm-all"))==null||v.addEventListener("click",()=>{fe.forEach(n=>{n.items.forEach(b=>{const y=document.getElementById(`perm-${n.key}-${b.key}`);y&&(y.checked=!0,r(n.key,b.key,!0))})})}),(k=document.getElementById("btn-perm-none"))==null||k.addEventListener("click",()=>{fe.forEach(n=>{n.items.forEach(b=>{const y=document.getElementById(`perm-${n.key}-${b.key}`);y&&(y.checked=!1,r(n.key,b.key,!1))})})})}return s(),e}function yt(w){const e=document.createElement("div"),t=Q.getCurrentUser();let a="";const s=ee(t,"planos","cadastrar"),d=ee(t,"planos","alterar"),L=ee(t,"planos","excluir");function o(){var P,l;const f=M.getPlans().filter(A=>{const r=a.toLowerCase();return A.nome.toLowerCase().includes(r)||A.descricao&&A.descricao.toLowerCase().includes(r)});e.innerHTML=`
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estrutura 100% pedagógica dos cursos: Plano &bull; Módulos &bull; Aulas.
          </p>
        </div>

        <div style="display: flex; gap: 8px;">
          ${s?`
                <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                  ${j.plus} Novo Plano de Ensino
                </button>
              `:""}
        </div>
      </div>

      <!-- Barra de Filtro / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="plan-search-input" 
            class="form-input" 
            placeholder="Buscar plano de ensino..." 
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${j.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- TABELA: PLANOS DE ENSINO -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Pedagógicos Cadastrados (${f.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 160px;">Plano de Ensino</th>
                <th class="col-hide-sm" style="width: 160px; text-align: center;">Estrutura</th>
                <th class="col-hide-md">Descrição</th>
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${f.length===0?`
                    <tr>
                      <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${a?"Nenhum plano de ensino encontrado para a busca.":"Nenhum plano pedagógico cadastrado ainda."}
                      </td>
                    </tr>
                  `:f.map(A=>{const r=(A.modulos||[]).length,$=(A.modulos||[]).reduce((m,C)=>{var v;return m+(((v=C.aulas)==null?void 0:v.length)||0)},0);return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${j.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${A.nome}
                                  </div>
                                  ${A.instrumento?`<span style="font-size: 0.72rem; color: var(--text-muted);">${A.instrumento}</span>`:""}
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${r} ${r===1?"módulo":"módulos"}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${$} ${$===1?"aula":"aulas"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${A.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${d?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${A.id}" title="Editar Plano e Módulos">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${L?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${A.id}" title="Excluir Plano">
                                        ${j.trash}
                                      </button>
                                    `:""}
                                ${!d&&!L?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(P=e.querySelector("#btn-new-plan"))==null||P.addEventListener("click",()=>{E()});const p=e.querySelector("#plan-search-input");p&&p.addEventListener("input",A=>{a=A.target.value,o();const r=e.querySelector("#plan-search-input");r&&(r.focus(),r.setSelectionRange(r.value.length,r.value.length))}),(l=e.querySelector("#btn-clear-search"))==null||l.addEventListener("click",()=>{a="",o()}),e.querySelectorAll(".btn-edit-plan").forEach(A=>{A.addEventListener("click",r=>{const $=r.currentTarget.dataset.id,m=M.getPlans().find(C=>C.id===$);m&&E(m)})}),e.querySelectorAll(".btn-delete-plan").forEach(A=>{A.addEventListener("click",r=>{const $=r.currentTarget.dataset.id,m=M.getPlans().find(C=>C.id===$);m&&ge({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${m.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{M.deletePlan(m.id,(t==null?void 0:t.nome)||"Administrador"),F(`Plano de ensino "${m.nome}" excluído.`,"info"),o()}})})})}function E(g){const f=!!g;let p=g?JSON.parse(JSON.stringify(g.modulos||[])):[];p.forEach(r=>{Array.isArray(r.aulas)||(r.aulas=[])});function P(){return p.length===0?`
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); margin-top: 8px;">
            Nenhum módulo adicionado ainda. Digite o nome do módulo acima e clique em "Adicionar Módulo".
          </div>
        `:p.map((r,$)=>{const m=r.aulas||[];return`
            <div class="module-card-item" data-mod-idx="${$}" style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 8px;">
              <!-- Cabeçalho do Módulo -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px; flex: 1;">
                  <span class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 7px;">
                    Módulo ${$+1}
                  </span>
                  <input 
                    type="text" 
                    class="form-input input-module-title" 
                    data-mod-idx="${$}" 
                    value="${r.titulo}" 
                    placeholder="Título do módulo" 
                    style="font-size: 0.84rem; font-weight: 600; padding: 4px 8px; background: transparent; border-color: transparent; border-bottom: 1px dashed var(--border-subtle); width: 100%;"
                  />
                </div>

                <div style="display: flex; gap: 4px; align-items: center;">
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-up" data-mod-idx="${$}" title="Mover para cima" ${$===0?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▲
                  </button>
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-down" data-mod-idx="${$}" title="Mover para baixo" ${$===p.length-1?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▼
                  </button>
                  <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-mod-idx="${$}" title="Excluir Módulo" style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ${j.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo -->
              <div class="lessons-container" style="display: flex; flex-direction: column; gap: 5px; margin-left: 14px; border-left: 2px solid rgba(234, 67, 53, 0.2); padding-left: 10px;">
                ${m.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 4px 0;">Nenhuma aula cadastrada neste módulo.</div>':m.map((C,v)=>`
                            <div style="display: flex; align-items: center; gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
                              <span style="font-size: 0.72rem; color: var(--text-muted); min-width: 44px;">Aula ${v+1}:</span>
                              <input 
                                type="text" 
                                class="form-input input-lesson-title" 
                                data-mod-idx="${$}" 
                                data-aula-idx="${v}" 
                                value="${C.titulo}" 
                                placeholder="Título da aula" 
                                style="flex: 1; font-size: 0.78rem; padding: 2px 6px; background: transparent; border: none;"
                              />
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-up" data-mod-idx="${$}" data-aula-idx="${v}" title="Mover aula acima" ${v===0?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▲
                              </button>
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-down" data-mod-idx="${$}" data-aula-idx="${v}" title="Mover aula abaixo" ${v===m.length-1?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▼
                              </button>
                              <button type="button" class="btn btn-danger btn-icon-only btn-remove-lesson" data-mod-idx="${$}" data-aula-idx="${v}" title="Excluir Aula" style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ✕
                              </button>
                            </div>
                          `).join("")}

                <!-- Adicionar Aula ao Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="form-input input-new-lesson" 
                    data-mod-idx="${$}" 
                    placeholder="Título da nova aula (ex: Acorde Dó Maior)..." 
                    style="flex: 1; font-size: 0.76rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-add-lesson" 
                    data-mod-idx="${$}" 
                    style="font-size: 0.72rem; padding: 4px 10px; white-space: nowrap;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `}).join("")}const l=`
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
                ${p.length} módulos
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
              ${j.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Lista de Módulos e Aulas -->
          <div id="plan-modules-list-container" style="max-height: 280px; overflow-y: auto; padding-right: 4px;">
            ${P()}
          </div>
        </div>
      </form>
    `;ce({title:f?`Editar Plano de Ensino: ${g.nome}`:"Novo Plano de Ensino",bodyHtml:l,modalClass:"modal-lg",confirmText:f?"Salvar Plano":"Criar Plano",onConfirm:()=>{var k,n,b;const r=(k=document.getElementById("plan-nome"))==null?void 0:k.value.trim(),$=(n=document.getElementById("plan-instrumento"))==null?void 0:n.value.trim(),m=(b=document.getElementById("plan-desc"))==null?void 0:b.value.trim();if(!r)return F("Preencha o nome do plano de ensino.","error"),!1;const C=p.map((y,i)=>({id:y.id||`mod_${Date.now()}_${i}`,ordem:i+1,titulo:y.titulo.trim()||`Módulo ${i+1}`,descricao:y.descricao,aulas:(y.aulas||[]).map((h,c)=>({id:h.id||`aul_${Date.now()}_${i}_${c}`,ordem:c+1,titulo:h.titulo.trim()||`Aula ${c+1}`,conteudo:h.conteudo,duracaoMinutos:h.duracaoMinutos}))})),v=(t==null?void 0:t.nome)||"Administrador";return f&&g?(M.updatePlan(g.id,{nome:r,descricao:m,instrumento:$||void 0,modulos:C},v),F(`Plano de ensino "${r}" atualizado!`,"success")):(M.addPlan({nome:r,descricao:m,instrumento:$||void 0,modulos:C},v),F(`Plano de ensino "${r}" cadastrado com sucesso!`,"success")),o(),!0}}),setTimeout(()=>{A()},50);function A(){const r=document.getElementById("plan-modules-list-container"),$=document.getElementById("modules-counter-badge");if(!r)return;const m=()=>{r.innerHTML=P(),$&&($.textContent=`${p.length} módulos`),A()},C=document.getElementById("btn-quick-add-module"),v=document.getElementById("quick-add-module-input");C&&v&&(C.onclick=()=>{const k=v.value.trim();if(!k){F("Informe o nome do módulo.","error");return}p.push({id:`mod_${Date.now()}`,ordem:p.length+1,titulo:k,aulas:[]}),v.value="",m()},v.onkeydown=k=>{k.key==="Enter"&&(k.preventDefault(),C.click())}),r.querySelectorAll(".input-module-title").forEach(k=>{k.addEventListener("input",n=>{const b=parseInt(n.target.dataset.modIdx||"0",10);p[b]&&(p[b].titulo=n.target.value)})}),r.querySelectorAll(".btn-move-module-up").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10);if(b>0){const y=p[b];p[b]=p[b-1],p[b-1]=y,m()}})}),r.querySelectorAll(".btn-move-module-down").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10);if(b<p.length-1){const y=p[b];p[b]=p[b+1],p[b+1]=y,m()}})}),r.querySelectorAll(".btn-remove-module").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10);p.splice(b,1),m()})}),r.querySelectorAll(".input-lesson-title").forEach(k=>{k.addEventListener("input",n=>{var i;const b=parseInt(n.target.dataset.modIdx||"0",10),y=parseInt(n.target.dataset.aulaIdx||"0",10);(i=p[b])!=null&&i.aulas[y]&&(p[b].aulas[y].titulo=n.target.value)})}),r.querySelectorAll(".btn-add-lesson").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10),y=r.querySelector(`.input-new-lesson[data-mod-idx="${b}"]`),i=y==null?void 0:y.value.trim();if(!i){F("Informe o título da aula.","error");return}p[b]&&(p[b].aulas.push({id:`aul_${Date.now()}`,ordem:p[b].aulas.length+1,titulo:i}),m())})}),r.querySelectorAll(".btn-move-lesson-up").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10),y=parseInt(n.currentTarget.dataset.aulaIdx||"0",10);if(p[b]&&y>0){const i=p[b].aulas,h=i[y];i[y]=i[y-1],i[y-1]=h,m()}})}),r.querySelectorAll(".btn-move-lesson-down").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10),y=parseInt(n.currentTarget.dataset.aulaIdx||"0",10);if(p[b]){const i=p[b].aulas;if(y<i.length-1){const h=i[y];i[y]=i[y+1],i[y+1]=h,m()}}})}),r.querySelectorAll(".btn-remove-lesson").forEach(k=>{k.addEventListener("click",n=>{const b=parseInt(n.currentTarget.dataset.modIdx||"0",10),y=parseInt(n.currentTarget.dataset.aulaIdx||"0",10);p[b]&&(p[b].aulas.splice(y,1),m())})})}}return o(),e}function ht(w){const e=document.createElement("div"),t=Q.getCurrentUser();let a="",s="todas",d="todas";const L=ee(t,"financeiro","cadastrar"),o=ee(t,"financeiro","alterar"),E=ee(t,"financeiro","excluir");function g(){var k;const p=M.getPaymentPlans(),P=p.filter(n=>{const b=a.toLowerCase(),y=n.nome.toLowerCase().includes(b)||n.modalidade.toLowerCase().includes(b)||n.periodicidade.toLowerCase().includes(b)||n.descricao&&n.descricao.toLowerCase().includes(b),i=s==="todas"||n.modalidade===s,h=d==="todas"||n.periodicidade===d;return y&&i&&h}),l=p.length,A=p.filter(n=>n.modalidade==="individual").length,r=p.filter(n=>n.modalidade==="turma").length,$=p.filter(n=>n.ativo).length;e.innerHTML=`
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-white); margin: 0; display: flex; align-items: center; gap: 10px;">
            <span style="color: #4ade80;">${j.planoPagamento}</span> Planos de Pagamento
          </h2>
          <p style="color: var(--text-secondary); margin: 4px 0 0 0; font-size: 0.88rem;">
            Defina valores de mensalidade, modalidades (individual/turma) e ciclos de cobrança.
          </p>
        </div>

        <div style="display: flex; gap: 10px; align-items: center;">
          ${L?`<button class="btn btn-primary" id="btn-novo-plano-pagamento" style="display: flex; align-items: center; gap: 8px;">
                   ${j.plus} Novo Plano de Pagamento
                 </button>`:""}
        </div>
      </div>

      <!-- Cards de Métricas e Totais -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(74, 222, 128, 0.15); color: #4ade80; display: flex; align-items: center; justify-content: center;">
            ${j.planoPagamento}
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Total de Planos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${l}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(96, 165, 250, 0.15); color: #60a5fa; display: flex; align-items: center; justify-content: center;">
            👤
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Individual</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${A}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(168, 85, 247, 0.15); color: #c084fc; display: flex; align-items: center; justify-content: center;">
            👥
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Turma</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${r}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center;">
            ✓
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Planos Ativos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${$}</div>
          </div>
        </div>
      </div>

      <!-- Barra de Filtros -->
      <div class="card" style="padding: 14px; margin-bottom: 20px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; position: relative;">
          <input
            type="text"
            id="pp-search"
            class="form-input"
            placeholder="Buscar por nome do plano ou detalhe..."
            value="${a}"
            style="padding-left: 36px;"
          />
          <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); pointer-events: none;">
            ${j.search}
          </span>
        </div>

        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">Modalidade:</label>
          <select id="pp-filter-mod" class="form-select" style="min-width: 140px; padding: 7px 12px; font-size: 0.85rem;">
            <option value="todas" ${s==="todas"?"selected":""}>Todas</option>
            <option value="individual" ${s==="individual"?"selected":""}>Individual</option>
            <option value="turma" ${s==="turma"?"selected":""}>Turma</option>
          </select>
        </div>

        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">Ciclo:</label>
          <select id="pp-filter-per" class="form-select" style="min-width: 140px; padding: 7px 12px; font-size: 0.85rem;">
            <option value="todas" ${d==="todas"?"selected":""}>Todas</option>
            <option value="mensal" ${d==="mensal"?"selected":""}>Mensal</option>
            <option value="trimestral" ${d==="trimestral"?"selected":""}>Trimestral</option>
            <option value="semestral" ${d==="semestral"?"selected":""}>Semestral</option>
          </select>
        </div>
      </div>

      <!-- Lista de Planos de Pagamento -->
      ${P.length===0?`
          <div class="card" style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;">💳</div>
            <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-white); margin-bottom: 6px;">Nenhum plano de pagamento encontrado</div>
            <div style="font-size: 0.85rem;">Tente ajustar seus filtros de busca ou crie um novo plano acima.</div>
          </div>
          `:`
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
            ${P.map(n=>{const b=n.descontoSegundaMatricula??0,y=b>0?n.valorMensal*(1-b/100):n.valorMensal,i=n.modalidade==="individual";return`
                <div class="card" style="padding: 18px; display: flex; flex-direction: column; justify-content: space-between; position: relative; border-top: 3px solid ${i?"#3b82f6":"#a855f7"};">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 6px;">
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: ${i?"rgba(59, 130, 246, 0.15)":"rgba(168, 85, 247, 0.15)"}; color: ${i?"#60a5fa":"#c084fc"};">
                            ${i?"👤 Individual":"👥 Turma"}
                          </span>
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); color: var(--text-secondary);">
                            ${n.periodicidade.toUpperCase()}
                          </span>
                        </div>
                        <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--text-white);">${n.nome}</h3>
                      </div>

                      <span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${n.ativo?"#22c55e":"#ef4444"};" title="${n.ativo?"Ativo":"Inativo"}"></span>
                    </div>

                    ${n.descricao?`<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0 0 14px 0; line-height: 1.4;">${n.descricao}</p>`:""}

                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; margin-bottom: 16px;">
                      <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; margin-bottom: 2px;">Valor Mensal Regular</div>
                      <div style="font-size: 1.45rem; font-weight: 800; color: #4ade80;">
                        R$ ${n.valorMensal.toFixed(2).replace(".",",")}
                        <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-secondary);">/mês</span>
                      </div>

                      ${b>0?`
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-secondary);">
                              2ª Matrícula / Familiar (${b}% sugerido):
                            </span>
                            <span style="font-size: 0.84rem; font-weight: 600; color: var(--text-white);">
                              R$ ${y.toFixed(2).replace(".",",")}/mês
                            </span>
                          </div>
                          `:`
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-muted);">
                              Sem desconto de 2ª matrícula previsto
                            </span>
                          </div>
                          `}
                    </div>
                  </div>

                  <div style="display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid var(--border-subtle); padding-top: 12px; margin-top: 6px;">
                    ${o?`<button class="btn btn-secondary btn-sm btn-edit-pp" data-id="${n.id}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${j.edit} Editar
                           </button>`:""}
                    ${E?`<button class="btn btn-danger btn-sm btn-del-pp" data-id="${n.id}" data-name="${n.nome}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${j.trash} Excluir
                           </button>`:""}
                  </div>
                </div>
                `}).join("")}
          </div>
          `}
    `;const m=e.querySelector("#pp-search");m==null||m.addEventListener("input",n=>{a=n.target.value,g()});const C=e.querySelector("#pp-filter-mod");C==null||C.addEventListener("change",n=>{s=n.target.value,g()});const v=e.querySelector("#pp-filter-per");v==null||v.addEventListener("change",n=>{d=n.target.value,g()}),(k=e.querySelector("#btn-novo-plano-pagamento"))==null||k.addEventListener("click",()=>{f()}),e.querySelectorAll(".btn-edit-pp").forEach(n=>{n.addEventListener("click",b=>{const y=b.currentTarget.dataset.id;if(y){const i=M.getPaymentPlanById(y);i&&f(i)}})}),e.querySelectorAll(".btn-del-pp").forEach(n=>{n.addEventListener("click",b=>{const y=b.currentTarget.dataset.id,i=b.currentTarget.dataset.name;y&&ge({title:"Excluir Plano de Pagamento",message:`Deseja realmente excluir o plano de pagamento "<strong>${i}</strong>"?<br><small style="color: var(--text-secondary);">Alunos vinculados continuarão com seu histórico financeiro.</small>`,onConfirm:()=>{M.deletePaymentPlan(y,(t==null?void 0:t.nome)||"Administrador"),F(`Plano de pagamento "${i}" excluído com sucesso!`,"info"),g()}})})})}function f(p){const P=!!p,l=(t==null?void 0:t.nome)||"Administrador",A=`
      <form id="form-payment-plan" style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-nome">Nome do Plano de Pagamento *</label>
          <input type="text" id="pp-nome" class="form-input" placeholder="Ex: Mensal Individual, Semestral Turma" value="${(p==null?void 0:p.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-modalidade">Modalidade *</label>
            <select id="pp-modalidade" class="form-select" required>
              <option value="individual" ${(p==null?void 0:p.modalidade)==="individual"?"selected":""}>Individual</option>
              <option value="turma" ${(p==null?void 0:p.modalidade)==="turma"?"selected":""}>Turma</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-periodicidade">Periodicidade / Ciclo *</label>
            <select id="pp-periodicidade" class="form-select" required>
              <option value="mensal" ${(p==null?void 0:p.periodicidade)==="mensal"?"selected":""}>Mensal</option>
              <option value="trimestral" ${(p==null?void 0:p.periodicidade)==="trimestral"?"selected":""}>Trimestral</option>
              <option value="semestral" ${(p==null?void 0:p.periodicidade)==="semestral"?"selected":""}>Semestral</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-valor">Valor Mensal (R$) *</label>
            <input type="text" id="pp-valor" class="form-input" placeholder="0,00" value="${p?p.valorMensal.toFixed(2).replace(".",","):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-desconto-segunda">Desconto 2ª Matrícula / Familiar (%)</label>
            <input type="number" id="pp-desconto-segunda" class="form-input" min="0" max="100" value="${(p==null?void 0:p.descontoSegundaMatricula)??20}" />
            <small style="font-size: 0.72rem; color: var(--text-secondary);">Opcional. Percentual sugerido de desconto (0 para nenhum).</small>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-desc">Descrição / Observações</label>
          <textarea id="pp-desc" class="form-textarea" rows="2" placeholder="Regras do plano, benefícios ou detalhes...">${(p==null?void 0:p.descricao)||""}</textarea>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
          <input type="checkbox" id="pp-ativo" style="accent-color: var(--color-coral); cursor: pointer;" ${p?p.ativo?"checked":"":"checked"} />
          <label for="pp-ativo" style="font-size: 0.85rem; color: var(--text-white); cursor: pointer; user-select: none;">
            Plano Ativo para Novas Matrículas
          </label>
        </div>
      </form>
    `;ce({title:P?"Editar Plano de Pagamento":"Novo Plano de Pagamento",bodyHtml:A,confirmText:P?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{var h,c,u,x,z,N,R;const r=(h=document.getElementById("pp-nome"))==null?void 0:h.value.trim(),$=(c=document.getElementById("pp-modalidade"))==null?void 0:c.value,m=(u=document.getElementById("pp-periodicidade"))==null?void 0:u.value,C=(x=document.getElementById("pp-valor"))==null?void 0:x.value.trim(),v=(z=document.getElementById("pp-desconto-segunda"))==null?void 0:z.value,k=parseFloat(v),n=!isNaN(k)&&k>=0?k:0,b=(N=document.getElementById("pp-desc"))==null?void 0:N.value.trim(),y=((R=document.getElementById("pp-ativo"))==null?void 0:R.checked)??!0;if(!r)return F("Preencha o nome do plano de pagamento.","error"),!1;const i=Ne(C);return isNaN(i)||i<=0?(F("Informe um valor mensal válido superior a zero.","error"),!1):(P&&p?(M.updatePaymentPlan(p.id,{nome:r,modalidade:$,periodicidade:m,valorMensal:i,descontoSegundaMatricula:n,descricao:b,ativo:y},l),F(`Plano de pagamento "${r}" atualizado com sucesso!`,"success")):(M.addPaymentPlan({nome:r,modalidade:$,periodicidade:m,valorMensal:i,descontoSegundaMatricula:n,descricao:b,ativo:y},l),F(`Plano de pagamento "${r}" criado com sucesso!`,"success")),g(),!0)}}),setTimeout(()=>{const r=document.getElementById("pp-valor");r&&de(r,he)},50)}return g(),e}function xt(w){const e=document.createElement("div"),t=Q.getCurrentUser();let a="",s="todos",d=new Date;const L=ee(t,"financeiro","cadastrar"),o=ee(t,"financeiro","alterar"),E=ee(t,"financeiro","excluir");function g(){var h,c,u,x,z,N,R,_;const l=M.getPayments(),A=M.getStudents(),r=new Date,$=d!==null&&r.getMonth()===d.getMonth()&&r.getFullYear()===d.getFullYear(),m=d?`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`:"",C=l.filter(S=>S.status==="pago").reduce((S,T)=>S+T.valor,0),v=l.filter(S=>S.status==="pendente").reduce((S,T)=>S+T.valor,0),k=l.filter(S=>S.status==="atrasado").reduce((S,T)=>S+T.valor,0),n=A.filter(S=>S.status==="ativo"&&M.isStudentOverdue(S.id)),b=l.filter(S=>{const T=A.find(J=>J.id===S.alunoId),B=T?T.nome.toLowerCase():"",D=S.descricao.toLowerCase(),O=B.includes(a.toLowerCase())||D.includes(a.toLowerCase())||S.mesReferencia&&S.mesReferencia.includes(a),G=s==="todos"||S.status===s,Y=!m||S.mesReferencia===m||S.dataVencimento.startsWith(m);return O&&G&&Y});e.innerHTML=`
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
            R$ ${C.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${l.filter(S=>S.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${v.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${l.filter(S=>S.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${k.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${l.filter(S=>S.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${n.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${A.filter(S=>S.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${n.length===0?"✓ 100% em dia":"Requer acompanhamento"}
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Período (Mês) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${d?`Mensalidade / ${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`:"Todas as Mensalidades"}
          </h3>
          
          <div class="calendar-nav-buttons" style="display: flex; gap: 4px;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="fin-btn-prev-month" title="Mês anterior" style="width: 28px; height: 28px; padding: 0;">
              ◀
            </button>
            <button type="button" class="btn ${$?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
              Mês Atual
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="fin-btn-next-month" title="Próximo mês" style="width: 28px; height: 28px; padding: 0;">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn ${d===null?"btn-primary":"btn-secondary"}" id="fin-btn-all-months" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os lançamentos sem filtrar por mês">
            Ver Todos
          </button>
        </div>
      </div>

      <!-- Barra de Filtros Rápidos por Botão -->
      <div style="margin-bottom: 12px; display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
        <button type="button" class="btn btn-sm ${s==="todos"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="todos" style="font-size: 0.76rem; padding: 6px 12px;">
          Todos (${l.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="atrasado"?"btn-danger":"btn-secondary"} btn-quick-filter" data-status="atrasado" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="atrasado"?"color: #f87171; border-color: rgba(239, 68, 68, 0.3);":""}">
          ⚠️ Inadimplentes (${n.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${l.filter(S=>S.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${l.filter(S=>S.status==="pago").length})
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
            ${j.search}
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

      ${s==="atrasado"&&n.length>0?`
            <!-- Painel de Inadimplência Responsivo e Otimizado -->
            <div style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-md); padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                <div style="font-size: 0.88rem; font-weight: 700; color: #f87171; display: flex; align-items: center; gap: 8px;">
                  <span>⚠️</span> Painel de Alunos Inadimplentes (${n.length})
                </div>
                <span style="font-size: 0.74rem; color: var(--text-muted);">
                  Acesso rápido para contato e regularização
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                ${n.map(S=>{const T=l.filter(J=>J.alunoId===S.id&&J.status==="atrasado"),B=T.reduce((J,K)=>J+K.valor,0),D=(S.telefone||"").replace(/\D/g,""),O=D.length<=11?`55${D}`:D,G=encodeURIComponent(`Olá, ${S.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),Y=D?`https://wa.me/${O}?text=${G}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${S.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${T.length} fatura(s) atrasada(s) &bull; R$ ${B.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${S.telefone||"Sem telefone"}
                          </div>
                        </div>
                        ${Y?`
                              <a href="${Y}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; padding: 4px 8px; flex-shrink: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${b.length})</h3>
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
              ${b.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':b.map(S=>{const T=A.find(G=>G.id===S.alunoId),B=S.status==="pago",D=S.status==="atrasado";let O="";return B?O='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':D?O='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':O='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                              <span style="font-size: 0.84rem; color: ${D?"#f87171":"var(--text-white)"}; font-weight: ${D?"700":"normal"};">
                                ${S.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${S.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${O}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!B&&o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${S.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${j.check}
                                      </button>
                                    `:""}

                                ${B?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${S.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${S.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${j.edit}
                                      </button>
                                    `:""}

                                ${E?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${S.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(h=e.querySelector("#fin-btn-prev-month"))==null||h.addEventListener("click",()=>{d||(d=new Date),d=new Date(d.getFullYear(),d.getMonth()-1,1),g()}),(c=e.querySelector("#fin-btn-next-month"))==null||c.addEventListener("click",()=>{d||(d=new Date),d=new Date(d.getFullYear(),d.getMonth()+1,1),g()}),(u=e.querySelector("#fin-btn-current-month"))==null||u.addEventListener("click",()=>{d=new Date,g()}),(x=e.querySelector("#fin-btn-all-months"))==null||x.addEventListener("click",()=>{d=null,g()});const y=e.querySelector("#fin-search-input");y==null||y.addEventListener("input",S=>{a=S.target.value,g();const T=e.querySelector("#fin-search-input");T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length)}),(z=e.querySelector("#btn-clear-fin-search"))==null||z.addEventListener("click",()=>{a="",g()});const i=e.querySelector("#fin-status-filter");i==null||i.addEventListener("change",()=>{s=i.value,g()}),e.querySelectorAll(".btn-quick-filter").forEach(S=>{S.addEventListener("click",T=>{s=T.currentTarget.dataset.status,g()})}),(N=e.querySelector("#btn-limpar-status"))==null||N.addEventListener("click",()=>{s="todos",g()}),(R=e.querySelector("#btn-gerar-lote"))==null||R.addEventListener("click",()=>{p()}),(_=e.querySelector("#btn-novo-lancamento"))==null||_.addEventListener("click",()=>{P()}),e.querySelectorAll(".btn-action-baixa").forEach(S=>{S.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=l.find(O=>O.id===B);D&&f(D)})}),e.querySelectorAll(".btn-action-recibo").forEach(S=>{S.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=l.find(O=>O.id===B);if(D){const O=A.find(G=>G.id===D.alunoId);O&&Qe(D,O)}})}),e.querySelectorAll(".btn-action-edit").forEach(S=>{S.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=l.find(O=>O.id===B);D&&P(D)})}),e.querySelectorAll(".btn-action-delete").forEach(S=>{S.addEventListener("click",T=>{const B=T.currentTarget.dataset.id,D=l.find(O=>O.id===B);D&&ge({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${D.descricao}</strong>" no valor de <strong>R$ ${D.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{M.deletePayment(D.id,(t==null?void 0:t.nome)||"Administrador"),F("Lançamento excluído com sucesso!","info"),g()}})})})}function f(l){const A=M.getStudents().find(m=>m.id===l.alunoId),r=M.getTodayDateString(),$=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${l.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${l.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(A==null?void 0:A.nome)||"N/A"}</strong> &bull; Vencimento: ${l.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${r}" required />
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
    `;ce({title:"Confirmar Baixa de Pagamento",bodyHtml:$,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const m=document.getElementById("modal-baixa-data").value,C=document.getElementById("modal-baixa-forma").value,v=document.getElementById("modal-baixa-obs").value;return m?(M.darBaixaPayment(l.id,m,C,(t==null?void 0:t.nome)||"Administrador",v),F(`Baixa efetuada com sucesso! R$ ${l.valor.toFixed(2)} recebido.`,"success"),g(),!0):(F("Informe a data de recebimento.","error"),!1)}})}function p(){const l=new Date,A=l.getFullYear(),r=l.getMonth()+1,$=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${A}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${r===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${r===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${r===3?"selected":""}>03 - Março</option>
              <option value="4" ${r===4?"selected":""}>04 - Abril</option>
              <option value="5" ${r===5?"selected":""}>05 - Maio</option>
              <option value="6" ${r===6?"selected":""}>06 - Junho</option>
              <option value="7" ${r===7?"selected":""}>07 - Julho</option>
              <option value="8" ${r===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${r===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${r===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${r===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${r===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;ce({title:"Gerar Mensalidades em Lote",bodyHtml:$,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const m=parseInt(document.getElementById("lote-ano").value,10),C=parseInt(document.getElementById("lote-mes").value,10);if(!m||!C)return F("Selecione ano e mês válidos.","error"),!1;const v=M.gerarMensalidadesMes(m,C,(t==null?void 0:t.nome)||"Administrador");return v.criadas===0&&v.puladas>0?F(`Todas as ${v.puladas} mensalidades deste mês já estavam criadas!`,"info"):F(`Sucesso: ${v.criadas} mensalidade(s) gerada(s)! (${v.puladas} já existentes puladas)`,"success"),g(),!0}})}function P(l){const A=!!l,r=M.getStudents(),$=M.getTodayDateString(),m=r.map(v=>`<option value="${v.id}" ${(l==null?void 0:l.alunoId)===v.id?"selected":""}>${v.nome} (${v.instrumentoPrincipal||"Geral"})</option>`).join(""),C=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${A?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${m}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(l==null?void 0:l.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (AAAA-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" maxlength="7" value="${(l==null?void 0:l.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="text" id="pay-valor" class="form-input" placeholder="0,00" value="${l?he(l.valor):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(l==null?void 0:l.dataVencimento)||$}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(l==null?void 0:l.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(l==null?void 0:l.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(l==null?void 0:l.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(l==null?void 0:l.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="cartao_credito" ${(l==null?void 0:l.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(l==null?void 0:l.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="dinheiro" ${(l==null?void 0:l.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="boleto" ${(l==null?void 0:l.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(l==null?void 0:l.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(l==null?void 0:l.observacoes)||""}" />
        </div>
      </form>
    `;ce({title:A?"Editar Lançamento":"Novo Lançamento Financeiro",bodyHtml:C,modalClass:"modal-md",confirmText:A?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const v=A&&l?l.alunoId:document.getElementById("pay-aluno").value,k=document.getElementById("pay-desc").value.trim(),n=document.getElementById("pay-mes").value.trim()||void 0,b=document.getElementById("pay-valor").value,y=Ne(b),i=document.getElementById("pay-vencimento").value,h=document.getElementById("pay-status").value,c=document.getElementById("pay-forma").value||void 0,u=document.getElementById("pay-obs").value.trim()||void 0;if(!v)return F("Selecione um aluno.","error"),!1;if(!k)return F("Informe a descrição do lançamento.","error"),!1;if(n&&!/^\d{4}-\d{2}$/.test(n))return F("Mês de referência deve estar no formato AAAA-MM (Ex: 2026-10).","error"),!1;if(y<=0)return F("Informe um valor válido maior que zero.","error"),!1;if(!i)return F("Informe a data de vencimento.","error"),!1;const x=(t==null?void 0:t.nome)||"Administrador";let z=h;return z!=="pago"&&(z=i<$?"atrasado":"pendente"),A&&l?(M.updatePayment(l.id,{descricao:k,mesReferencia:n,valor:y,dataVencimento:i,status:z,formaPagamento:c,dataPagamento:z==="pago"?l.dataPagamento||$:void 0,observacoes:u},x),F("Lançamento atualizado com sucesso!","success")):(M.addPayment({alunoId:v,descricao:k,mesReferencia:n,valor:y,dataVencimento:i,status:z,formaPagamento:c,dataPagamento:z==="pago"?$:void 0,observacoes:u},x),F("Novo lançamento cadastrado com sucesso!","success")),g(),!0}}),setTimeout(()=>{const v=document.getElementById("pay-mes");v&&de(v,it);const k=document.getElementById("pay-valor");k&&de(k,he);const n=document.getElementById("pay-vencimento"),b=document.getElementById("pay-status");if(n==null||n.addEventListener("change",()=>{b&&b.value!=="pago"&&(b.value=n.value<$?"atrasado":"pendente")}),!A){const y=document.getElementById("pay-aluno");y==null||y.addEventListener("change",()=>{const i=r.find(h=>h.id===y.value);if(i){const h=document.getElementById("pay-valor");h&&typeof i.valorMensalidade=="number"&&(h.value=he(i.valorMensalidade))}})}},50)}return g(),e}function $t(w){const e=document.createElement("div"),t=Q.getCurrentUser(),a=ee(t,"relatorios","gerar");let s="alunos",d="todos",L="todos",o="todos",E="todos",g="todos",f="nome_asc",p="",P="",l="",A="",r="todos",$="todos",m="todos",C="vencimento_asc";function v(){var K,W,re,se,ie,oe,V,te,X,ne,q,ae,Z,ve,be,Ee,Ae,Re,Fe;const i=M.getSettings(),h=M.getStudents(),c=M.getPlans(),u=M.getPayments(),x=Array.from(new Set(h.map(I=>I.instrumentoPrincipal).filter(Boolean))).sort();let z=h.filter(I=>{if(d!=="todos"&&I.status!==d||L!=="todos"&&I.instrumentoPrincipal!==L||o!=="todos"&&I.nivelMusical!==o||E!=="todos"&&I.planoId!==E)return!1;if(g!=="todos"){const U=M.isStudentOverdue(I.id);if(g==="em_dia"&&U||g==="atrasado"&&!U)return!1}return!0});z.sort((I,U)=>f==="nome_asc"?I.nome.localeCompare(U.nome):f==="nome_desc"?U.nome.localeCompare(I.nome):f==="data_desc"?(U.criadoEm||"").localeCompare(I.criadoEm||""):f==="data_asc"?(I.criadoEm||"").localeCompare(U.criadoEm||""):0);const N=z.length,R=z.filter(I=>I.status==="ativo").length,_=z.filter(I=>I.status==="inativo").length,S=z.filter(I=>M.isStudentOverdue(I.id)).length,T=new Date().toISOString().slice(0,10);let B=u.filter(I=>{if(p&&I.dataVencimento<p||P&&I.dataVencimento>P)return!1;const U=I.mesReferencia||I.dataVencimento.slice(0,7);if(l&&U<l||A&&U>A||$!=="todos"&&I.alunoId!==$||m!=="todos"&&I.formaPagamento!==m)return!1;const pe=I.status!=="pago"&&I.dataVencimento<T;return!(r==="pago"&&I.status!=="pago"||r==="pendente"&&(I.status==="pago"||pe)||r==="atrasado"&&!pe)});const D=new Map(h.map(I=>[I.id,I.nome]));B.sort((I,U)=>{if(C==="vencimento_asc")return I.dataVencimento.localeCompare(U.dataVencimento);if(C==="vencimento_desc")return U.dataVencimento.localeCompare(I.dataVencimento);if(C==="valor_desc")return U.valor-I.valor;if(C==="aluno_asc"){const pe=D.get(I.alunoId)||"",Me=D.get(U.alunoId)||"";return pe.localeCompare(Me)}return 0});const O=B.length,G=B.reduce((I,U)=>I+U.valor,0),Y=B.filter(I=>I.status==="pago").reduce((I,U)=>I+U.valor,0),J=B.filter(I=>I.status!=="pago").reduce((I,U)=>I+U.valor,0);e.innerHTML=`
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
                <option value="todos" ${d==="todos"?"selected":""}>Todos os Status</option>
                <option value="ativo" ${d==="ativo"?"selected":""}>Somente Ativos</option>
                <option value="inativo" ${d==="inativo"?"selected":""}>Somente Inativos</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Instrumento</label>
              <select id="filtro-aluno-instrumento" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${L==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${x.map(I=>`<option value="${I}" ${L===I?"selected":""}>${I}</option>`).join("")}
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
                <option value="todos" ${E==="todos"?"selected":""}>Todos os Planos</option>
                ${c.map(I=>`<option value="${I.id}" ${E===I.id?"selected":""}>${I.nome}</option>`).join("")}
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
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${R}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${_}</div>
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
              Prévia do Relatório de Alunos (${z.length} registros)
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
                ${z.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':z.map(I=>{const U=c.find(Ze=>Ze.id===I.planoId),pe=I.status==="ativo",Me=M.isStudentOverdue(I.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${I.nome}</td>
                              <td class="col-hide-md">${I.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${I.telefone||"-"}</td>
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${p}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${P}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${l}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${A}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Lançamento</label>
              <select id="filtro-fin-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${r==="todos"?"selected":""}>Todos os Status</option>
                <option value="pago" ${r==="pago"?"selected":""}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${r==="pendente"?"selected":""}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${r==="atrasado"?"selected":""}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${$==="todos"?"selected":""}>Todos os Alunos</option>
                ${h.map(I=>`<option value="${I.id}" ${$===I.id?"selected":""}>${I.nome}</option>`).join("")}
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
                <option value="vencimento_asc" ${C==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${C==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${C==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${C==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${Y.toFixed(2)}</div>
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
                ${B.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':B.map(I=>{const U=I.status==="pago",pe=!U&&I.dataVencimento<T;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${D.get(I.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${I.descricao}${I.mesReferencia?` / ${I.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${I.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${I.valor.toFixed(2)}</td>
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
    `,(K=e.querySelector("#btn-tab-rel-alunos"))==null||K.addEventListener("click",()=>{s="alunos",v()}),(W=e.querySelector("#btn-tab-rel-financeiro"))==null||W.addEventListener("click",()=>{s="financeiro",v()}),(re=e.querySelector("#filtro-aluno-status"))==null||re.addEventListener("change",I=>{d=I.target.value,v()}),(se=e.querySelector("#filtro-aluno-instrumento"))==null||se.addEventListener("change",I=>{L=I.target.value,v()}),(ie=e.querySelector("#filtro-aluno-nivel"))==null||ie.addEventListener("change",I=>{o=I.target.value,v()}),(oe=e.querySelector("#filtro-aluno-plano"))==null||oe.addEventListener("change",I=>{E=I.target.value,v()}),(V=e.querySelector("#filtro-aluno-financeiro"))==null||V.addEventListener("change",I=>{g=I.target.value,v()}),(te=e.querySelector("#filtro-aluno-ordem"))==null||te.addEventListener("change",I=>{f=I.target.value,v()}),(X=e.querySelector("#btn-limpar-filtros-alunos"))==null||X.addEventListener("click",()=>{d="todos",L="todos",o="todos",E="todos",g="todos",f="nome_asc",v()}),(ne=e.querySelector("#filtro-fin-dataini"))==null||ne.addEventListener("change",I=>{p=I.target.value,v()}),(q=e.querySelector("#filtro-fin-datafim"))==null||q.addEventListener("change",I=>{P=I.target.value,v()}),(ae=e.querySelector("#filtro-fin-mesref-ini"))==null||ae.addEventListener("change",I=>{l=I.target.value,v()}),(Z=e.querySelector("#filtro-fin-mesref-fim"))==null||Z.addEventListener("change",I=>{A=I.target.value,v()}),(ve=e.querySelector("#filtro-fin-status"))==null||ve.addEventListener("change",I=>{r=I.target.value,v()}),(be=e.querySelector("#filtro-fin-aluno"))==null||be.addEventListener("change",I=>{$=I.target.value,v()}),(Ee=e.querySelector("#filtro-fin-metodo"))==null||Ee.addEventListener("change",I=>{m=I.target.value,v()}),(Ae=e.querySelector("#filtro-fin-ordem"))==null||Ae.addEventListener("change",I=>{C=I.target.value,v()}),(Re=e.querySelector("#btn-limpar-filtros-fin"))==null||Re.addEventListener("click",()=>{p="",P="",l="",A="",r="todos",$="todos",m="todos",C="vencimento_asc",v()}),(Fe=e.querySelector("#btn-gerar-pdf"))==null||Fe.addEventListener("click",async()=>{if(!a){F("Você não possui permissão para emitir relatórios.","error");return}const I=e.querySelector("#btn-gerar-pdf"),U=I?I.innerHTML:"";I&&(I.disabled=!0,I.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await b(i,z,c):await y(i,B,h,{mesIni:l,mesFim:A}),F("PDF gerado com sucesso!","success")}catch(pe){console.error("Erro ao gerar PDF:",pe),F("Ocorreu um erro ao gerar o documento PDF.","error")}finally{I&&(I.disabled=!1,I.innerHTML=U)}})}function k(i){return new Promise(h=>{if(i&&i.trim()!==""){const c=new Image;c.crossOrigin="Anonymous",c.onload=()=>{try{const u=document.createElement("canvas");u.width=160,u.height=160;const x=u.getContext("2d");if(!x){h(i);return}const z=24;x.fillStyle="#ffffff",x.beginPath(),x.moveTo(z,0),x.lineTo(160-z,0),x.quadraticCurveTo(160,0,160,z),x.lineTo(160,160-z),x.quadraticCurveTo(160,160,160-z,160),x.lineTo(z,160),x.quadraticCurveTo(0,160,0,160-z),x.lineTo(0,z),x.quadraticCurveTo(0,0,z,0),x.closePath(),x.fill();const N=12,R=160-N*2,_=160-N*2;let S=R,T=_;const B=c.width/c.height;B>1?T=R/B:S=_*B;const D=N+(R-S)/2,O=N+(_-T)/2;x.drawImage(c,D,O,S,T),h(u.toDataURL("image/png"))}catch{h(i)}},c.onerror=()=>{n().then(h)},c.src=i;return}n().then(h)})}function n(){return new Promise(i=>{try{const h=document.createElement("canvas");h.width=160,h.height=160;const c=h.getContext("2d");if(!c){i("");return}const u=32;c.fillStyle="#181c2b",c.beginPath(),c.moveTo(u,0),c.lineTo(160-u,0),c.quadraticCurveTo(160,0,160,u),c.lineTo(160,160-u),c.quadraticCurveTo(160,160,160-u,160),c.lineTo(u,160),c.quadraticCurveTo(0,160,0,160-u),c.lineTo(0,u),c.quadraticCurveTo(0,0,u,0),c.closePath(),c.fill(),c.lineWidth=3,c.strokeStyle="#2d3748",c.stroke();const x=new Image,z=`
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
        `,N=new Blob([z],{type:"image/svg+xml;charset=utf-8"}),R=URL.createObjectURL(N);x.onload=()=>{c.drawImage(x,20,20,120,120),URL.revokeObjectURL(R),i(h.toDataURL("image/png"))},x.onerror=()=>{URL.revokeObjectURL(R),i("")},x.src=R}catch{i("")}})}async function b(i,h,c){const u=new _e({orientation:"portrait",unit:"mm",format:"a4"}),x=new Date().toLocaleString("pt-BR"),z=i.nomeMenu||i.nomeFantasia||i.nomeEscola||"ACUSTICAMENTE",N=i.razaoSocial||"Acusticamente Ensino Musical Ltda",R=i.cnpj?`CNPJ: ${i.cnpj}`:"",_=[i.telefoneContato,i.emailContato].filter(Boolean).join(" • "),S=[i.logradouro?`${i.logradouro}, ${i.numero||"s/n"}`:"",i.complemento,i.bairro,i.cidade?`${i.cidade} - ${i.estado||"SP"}`:"",i.cep?`CEP: ${i.cep}`:""].filter(Boolean).join(" • "),T=await k(i.logotipoCustomizado);T&&u.addImage(T,"PNG",14,12,17,17);const B=T?35:14;u.setFont("helvetica","bold"),u.setFontSize(13),u.setTextColor(15,23,42),u.text(z,B,17),u.setFont("helvetica","normal"),u.setFontSize(8),u.setTextColor(71,85,105),u.text([N,R].filter(Boolean).join(" • "),B,21.5),u.setFontSize(7.5),u.setTextColor(100,116,139),S&&u.text(S,B,25.5),_&&u.text(_,B,S?29.5:25.5),u.setFont("helvetica","bold"),u.setFontSize(12),u.setTextColor(217,72,59),u.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),u.setFont("helvetica","normal"),u.setFontSize(8),u.setTextColor(100,116,139),u.text(`Emissão: ${x}`,196,22,{align:"right"}),u.text(`Total: ${h.length} aluno(s)`,196,26.5,{align:"right"}),u.setDrawColor(203,213,225),u.setLineWidth(.4),u.line(14,33,196,33);const D=h.filter(V=>V.status==="ativo").length,O=h.filter(V=>V.status==="inativo").length,G=h.filter(V=>M.isStudentOverdue(V.id)).length,Y=[{label:"TOTAL DE ALUNOS",value:`${h.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${D}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${O}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${G}`,color:[220,38,38]}],J=43,K=12,W=36;Y.forEach((V,te)=>{const X=14+te*(J+3);u.setFillColor(248,250,252),u.roundedRect(X,W,J,K,1.5,1.5,"F"),u.setDrawColor(226,232,240),u.roundedRect(X,W,J,K,1.5,1.5,"S"),u.setFont("helvetica","bold"),u.setFontSize(6.5),u.setTextColor(100,116,139),u.text(V.label,X+3,W+4),u.setFontSize(10.5),u.setTextColor(V.color[0],V.color[1],V.color[2]),u.text(V.value,X+3,W+9.5)});const re=h.map((V,te)=>{const X=c.find(ae=>ae.id===V.planoId),ne=V.status==="ativo",q=M.isStudentOverdue(V.id);return[(te+1).toString(),V.nome,V.instrumentoPrincipal||"Música Geral",V.telefone||"-",(X==null?void 0:X.nome)||"-",ne?"Ativo":"Inativo",q?"Atrasado":"Em dia"]});qe(u,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:re.length>0?re:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:V=>{V.section==="body"&&(V.column.index===5&&(V.cell.raw==="Ativo"?(V.cell.styles.textColor=[22,163,74],V.cell.styles.fontStyle="bold"):V.cell.styles.textColor=[202,138,4]),V.column.index===6&&(V.cell.raw==="Atrasado"?(V.cell.styles.textColor=[220,38,38],V.cell.styles.fontStyle="bold"):V.cell.styles.textColor=[22,163,74]))}});const se=u.internal.getNumberOfPages();for(let V=1;V<=se;V++)u.setPage(V),u.setDrawColor(226,232,240),u.setLineWidth(.3),u.line(14,287,196,287),u.setFont("helvetica","normal"),u.setFontSize(7),u.setTextColor(148,163,184),u.text(`${z} • Sistema de Gestão Escolar & Pedagógica`,14,292),u.text(`Página ${V} de ${se}`,196,292,{align:"right"});const ie=u.output("blob"),oe=URL.createObjectURL(ie);window.open(oe,"_blank")}async function y(i,h,c,u){const x=new _e({orientation:"portrait",unit:"mm",format:"a4"}),z=new Map(c.map(q=>[q.id,q.nome])),N=new Date().toLocaleString("pt-BR"),R=i.nomeMenu||i.nomeFantasia||i.nomeEscola||"ACUSTICAMENTE",_=i.razaoSocial||"Acusticamente Ensino Musical Ltda",S=i.cnpj?`CNPJ: ${i.cnpj}`:"",T=[i.telefoneContato,i.emailContato].filter(Boolean).join(" • "),B=[i.logradouro?`${i.logradouro}, ${i.numero||"s/n"}`:"",i.complemento,i.bairro,i.cidade?`${i.cidade} - ${i.estado||"SP"}`:"",i.cep?`CEP: ${i.cep}`:""].filter(Boolean).join(" • "),D=new Date().toISOString().slice(0,10),O=h.reduce((q,ae)=>q+ae.valor,0),G=h.filter(q=>q.status==="pago").reduce((q,ae)=>q+ae.valor,0),Y=h.filter(q=>q.status!=="pago").reduce((q,ae)=>q+ae.valor,0),J=await k(i.logotipoCustomizado);J&&x.addImage(J,"PNG",14,12,17,17);const K=J?35:14;x.setFont("helvetica","bold"),x.setFontSize(13),x.setTextColor(15,23,42),x.text(R,K,17),x.setFont("helvetica","normal"),x.setFontSize(8),x.setTextColor(71,85,105),x.text([_,S].filter(Boolean).join(" • "),K,21.5),x.setFontSize(7.5),x.setTextColor(100,116,139),B&&x.text(B,K,25.5),T&&x.text(T,K,B?29.5:25.5),x.setFont("helvetica","bold"),x.setFontSize(12),x.setTextColor(5,150,105),x.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),x.setFont("helvetica","normal"),x.setFontSize(8),x.setTextColor(100,116,139),x.text(`Emissão: ${N}`,196,22,{align:"right"});let W=`Total: ${h.length} registro(s)`;u!=null&&u.mesIni&&(u!=null&&u.mesFim)?W=`Ref: ${u.mesIni} a ${u.mesFim} • ${h.length} reg.`:u!=null&&u.mesIni?W=`Ref: a partir de ${u.mesIni} • ${h.length} reg.`:u!=null&&u.mesFim&&(W=`Ref: até ${u.mesFim} • ${h.length} reg.`),x.text(W,196,26.5,{align:"right"}),x.setDrawColor(203,213,225),x.setLineWidth(.4),x.line(14,33,196,33);const re=[{label:"LANÇAMENTOS",value:`${h.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${O.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${G.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${Y.toFixed(2)}`,color:[220,38,38]}],se=43,ie=12,oe=36;re.forEach((q,ae)=>{const Z=14+ae*(se+3);x.setFillColor(248,250,252),x.roundedRect(Z,oe,se,ie,1.5,1.5,"F"),x.setDrawColor(226,232,240),x.roundedRect(Z,oe,se,ie,1.5,1.5,"S"),x.setFont("helvetica","bold"),x.setFontSize(6.5),x.setTextColor(100,116,139),x.text(q.label,Z+3,oe+4),x.setFontSize(10),x.setTextColor(q.color[0],q.color[1],q.color[2]),x.text(q.value,Z+3,oe+9.5)});const V=h.map((q,ae)=>{const Z=q.status==="pago",ve=!Z&&q.dataVencimento<D,be=Z?"Pago":ve?"Atrasado":"Pendente",Ee=q.descricao+(q.mesReferencia?` / ${q.mesReferencia}`:""),Ae=q.dataVencimento.split("-").reverse().join("/");return[(ae+1).toString(),z.get(q.alunoId)||"Aluno",Ee,Ae,`R$ ${q.valor.toFixed(2)}`,be]});qe(x,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:V.length>0?V:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:q=>{q.section==="body"&&q.column.index===5&&(q.cell.raw==="Pago"?(q.cell.styles.textColor=[22,163,74],q.cell.styles.fontStyle="bold"):q.cell.raw==="Atrasado"?(q.cell.styles.textColor=[220,38,38],q.cell.styles.fontStyle="bold"):q.cell.styles.textColor=[202,138,4])}});const te=x.internal.getNumberOfPages();for(let q=1;q<=te;q++)x.setPage(q),x.setDrawColor(226,232,240),x.setLineWidth(.3),x.line(14,287,196,287),x.setFont("helvetica","normal"),x.setFontSize(7),x.setTextColor(148,163,184),x.text(`${R} • Gestão Financeira & Escolar`,14,292),x.text(`Página ${q} de ${te}`,196,292,{align:"right"});const X=x.output("blob"),ne=URL.createObjectURL(X);window.open(ne,"_blank")}return v(),e}function wt(w){const e=document.createElement("div");let t=new Date,a="";const s=g=>g.toString().padStart(2,"0");function d(g){const f=g.getDate(),P=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][g.getMonth()],l=g.getFullYear(),A=new Date,r=A.getDate()===f&&A.getMonth()===g.getMonth()&&A.getFullYear()===l;return`${f} de ${P} de ${l}${r?" (Hoje)":""}`}function L(g){return`${g.getFullYear()}-${s(g.getMonth()+1)}-${s(g.getDate())}`}function o(){var m,C,v,k,n,b,y,i;const g=H.getLogs(),f=new Date,p=`${s(f.getDate())}/${s(f.getMonth()+1)}/${f.getFullYear()}`,P=g.filter(h=>{var c;return(c=h.dataHoraFormatada)==null?void 0:c.startsWith(p)}).length,l=t?`${s(t.getDate())}/${s(t.getMonth()+1)}/${t.getFullYear()}`:"",A=t!==null&&f.getDate()===t.getDate()&&f.getMonth()===t.getMonth()&&f.getFullYear()===t.getFullYear(),r=g.filter(h=>{const c=!t||h.dataHoraFormatada&&h.dataHoraFormatada.startsWith(l)||h.dataHora&&h.dataHora.startsWith(L(t)),u=a===""||h.tela.toLowerCase().includes(a.toLowerCase())||h.usuarioNome.toLowerCase().includes(a.toLowerCase())||h.usuarioLogin.toLowerCase().includes(a.toLowerCase())||h.acao.toLowerCase().includes(a.toLowerCase())||h.detalhes.toLowerCase().includes(a.toLowerCase());return c&&u});e.innerHTML=`
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
            <span>Registros de Hoje: <strong style="color: var(--color-coral);">${P}</strong></span>
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${t?d(t):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${A?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            ${j.search}
          </div>
        </div>
        ${a?'<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${r.length})
            ${t?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${l}</span>`:""}
          </h3>
          ${t!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${l}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
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
              ${r.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${l}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:r.map(h=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${h.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${h.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${h.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${h.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${h.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${h.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${h.detalhes}">
                                ${h.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(m=e.querySelector("#audit-btn-prev"))==null||m.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),o()}),(C=e.querySelector("#audit-btn-next"))==null||C.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),o()}),(v=e.querySelector("#audit-btn-today"))==null||v.addEventListener("click",()=>{t=new Date,o()}),(k=e.querySelector("#audit-btn-all"))==null||k.addEventListener("click",()=>{t=null,o()}),(n=e.querySelector("#audit-empty-btn-all"))==null||n.addEventListener("click",()=>{t=null,o()}),(b=e.querySelector("#audit-date-picker"))==null||b.addEventListener("change",h=>{const c=h.target.value;if(c){const[u,x,z]=c.split("-").map(Number);t=new Date(u,x-1,z)}else t=null;o()});const $=e.querySelector("#audit-search-input");$==null||$.addEventListener("input",h=>{a=h.target.value,o();const c=e.querySelector("#audit-search-input");c&&(c.focus(),c.selectionStart=c.selectionEnd=c.value.length)}),(y=e.querySelector("#btn-clear-audit-search"))==null||y.addEventListener("click",()=>{a="",o()}),(i=e.querySelector("#btn-clear-all-audit"))==null||i.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await M.resetCleanDatabase("Administrador"),o())})}const E=()=>{o()};return window.addEventListener("audit_updated",E),o(),e}function Et(w){const e=document.createElement("div"),t=Q.getCurrentUser(),a=M.getSettings(),s=ee(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${ze(a.telefoneContato||"")}" 
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
                    ${me(a.logotipoCustomizado,40)}
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
                    ${me(a.logotipoCustomizado,40)}
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
  `;const d=e.querySelector("#btn-tab-gerais"),L=e.querySelector("#btn-tab-instituicao"),o=e.querySelector("#tab-content-gerais"),E=e.querySelector("#tab-content-instituicao");function g(N,R){N&&(R?N.classList.add("active"):N.classList.remove("active"))}function f(N){o.style.display=N==="gerais"?"block":"none",E.style.display=N==="instituicao"?"block":"none",g(d,N==="gerais"),g(L,N==="instituicao")}d==null||d.addEventListener("click",()=>f("gerais")),L==null||L.addEventListener("click",()=>f("instituicao"));let p=a.logotipoCustomizado||"";const P=e.querySelector("#cfg-menu-name"),l=e.querySelector("#preview-menu-brand-name"),A=e.querySelector("#preview-report-brand-name"),r=e.querySelector("#preview-logo-menu"),$=e.querySelector("#preview-logo-report"),m=e.querySelector("#input-logo-file"),C=e.querySelector("#btn-upload-logo"),v=e.querySelector("#btn-reset-logo"),k=e.querySelector("#logo-feedback-msg");P==null||P.addEventListener("input",()=>{const N=P.value.trim()||"Acusticamente";l&&(l.textContent=N),A&&(A.textContent=N)}),C==null||C.addEventListener("click",()=>{m==null||m.click()}),m==null||m.addEventListener("change",N=>{const R=N.target.files;if(!R||R.length===0)return;const _=R[0];if(!_.type.startsWith("image/")){F("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(_.size>3*1024*1024){F("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const S=new FileReader;S.onload=T=>{var B;p=((B=T.target)==null?void 0:B.result)||"",r&&(r.innerHTML=me(p,40)),$&&($.innerHTML=me(p,40)),v&&(v.disabled=!1,v.style.color="#ef4444"),k&&(k.style.display="block",k.style.color="var(--status-success)",k.textContent="Imagem carregada no preview. Clique em Salvar."),F("Logotipo carregado na pré-visualização!","info")},S.onerror=()=>{F("Erro ao processar o arquivo de imagem.","error")},S.readAsDataURL(_)}),v==null||v.addEventListener("click",()=>{p="",m&&(m.value=""),r&&(r.innerHTML=me("",40)),$&&($.innerHTML=me("",40)),v&&(v.disabled=!0,v.style.color="var(--text-muted)"),k&&(k.style.display="block",k.style.color="var(--color-coral)",k.textContent="Logotipo padrão no preview. Clique em Salvar."),F("Logotipo padrão restaurado no preview.","info")});const n=e.querySelector("#form-settings-gerais");n==null||n.addEventListener("submit",N=>{N.preventDefault();const R=P.value.trim()||"Acusticamente";M.updateSettings({nomeMenu:R,logotipoCustomizado:p},(t==null?void 0:t.nome)||"Administrador"),k&&(k.style.display="none"),F("Configurações gerais salvas com sucesso!","success")});const b=e.querySelector("#cfg-cnpj");b&&de(b,He);const y=e.querySelector("#cfg-ie");y&&de(y,Ge);const i=e.querySelector("#cfg-tel");i&&de(i,ze);const h=e.querySelector("#cfg-cep");h&&de(h,Ue);const c=e.querySelector("#cfg-uf");c==null||c.addEventListener("input",N=>{N.target.value=N.target.value.toUpperCase().slice(0,2)});const u=e.querySelector("#form-settings-institucional");u==null||u.addEventListener("submit",N=>{N.preventDefault();const R=e.querySelector("#cfg-fantasia").value.trim(),_=e.querySelector("#cfg-razao").value.trim(),S=e.querySelector("#cfg-cnpj").value.trim(),T=e.querySelector("#cfg-ie").value.trim(),B=e.querySelector("#cfg-tel").value.trim(),D=e.querySelector("#cfg-email").value.trim(),O=e.querySelector("#cfg-site").value.trim(),G=e.querySelector("#cfg-cep").value.trim(),Y=e.querySelector("#cfg-logradouro").value.trim(),J=e.querySelector("#cfg-numero").value.trim(),K=e.querySelector("#cfg-complemento").value.trim(),W=e.querySelector("#cfg-bairro").value.trim(),re=e.querySelector("#cfg-cidade").value.trim(),se=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!R){F("Informe o Nome Fantasia da instituição.","error");return}if(D&&!Ke(D)){F("Informe um endereço de e-mail válido.","error");return}const ie=S.replace(/\D/g,"");if(ie.length>0&&ie.length!==14){F("CNPJ incompleto (deve conter 14 dígitos).","error");return}const oe=B.replace(/\D/g,"");if(oe.length>0&&oe.length<10){F("Telefone/WhatsApp incompleto.","error");return}const V=G.replace(/\D/g,"");if(V.length>0&&V.length!==8){F("CEP incompleto (deve conter 8 dígitos).","error");return}M.updateSettings({nomeEscola:R,nomeClinica:R,nomeFantasia:R,razaoSocial:_,cnpj:S,inscricaoEstadual:T,telefoneContato:B,emailContato:D,website:O,cep:G,logradouro:Y,numero:J,complemento:K,bairro:W,cidade:re,estado:se},(t==null?void 0:t.nome)||"Administrador"),F("Dados da instituição salvos com sucesso!","success")});const x=e.querySelector("#footer-cloud-status"),z=N=>{x&&(N==="connected"?(x.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,x.style.color="#4ade80"):N==="fallback"?(x.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,x.style.color="#fbbf24"):(x.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,x.style.color="#94a3b8"))};return z(M.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",N=>{z(N.detail)}),e}class At{constructor(){le(this,"currentScreen","site");le(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=Q.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":Q.isAuthenticated()?["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","user","auditoria","configuracoes"].includes(e)&&ue(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const a=window.location.hash.replace("#","").trim(),s=!a||a==="site"?"site":a;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const a=M.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=a.nomeMenu||"Acusticamente");const d=document.querySelector(".sidebar-logo");d&&(d.innerHTML=me(a.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{Q.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),M.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","auditoria","configuracoes"];for(const a of t)if(ue(e,a))return a;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!Q.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=Q.getCurrentUser();if(!ue(t,e)){F("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const a=this.getFirstAllowedScreen(t);this.currentScreen=a,window.location.hash=a,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),M.syncWithCloud()}render(){var l;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const A=ct(r=>{this.navigateTo(r)});this.appRoot.appendChild(A);return}if(this.currentScreen==="login"||!Q.isAuthenticated()){const A=dt(()=>{const r=Q.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(r))},()=>{this.navigateTo("site")});this.appRoot.appendChild(A);return}const e=document.createElement("div");e.className="app-container";const t=Q.getCurrentUser(),a=(t==null?void 0:t.papel)==="admin",s=M.getSettings(),d=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${me(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${j.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${ue(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${j.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${ue(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${j.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${ue(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${j.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${ue(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${j.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${ue(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${j.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${ue(t,"planos-pagamento")?`
            <a class="nav-item ${this.currentScreen==="planos-pagamento"?"active":""}" data-screen="planos-pagamento">
              <span class="nav-item-icon">${j.planoPagamento}</span>
              <span>Planos de Pagamento</span>
            </a>
          `:""}

          ${ue(t,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${j.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${a?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${j.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${ue(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${j.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${ue(t,"configuracoes")?`
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
    `;const L=e.querySelector("#app-sidebar"),o=e.querySelector("#sidebar-backdrop"),E=e.querySelector("#btn-mobile-menu-toggle"),g=e.querySelector("#btn-sidebar-close"),f=A=>{const r=A!==void 0?A:!L.classList.contains("open");L.classList.toggle("open",r),o.classList.toggle("open",r),document.body.style.overflow=r?"hidden":""};E==null||E.addEventListener("click",()=>f(!0)),g==null||g.addEventListener("click",()=>f(!1)),o==null||o.addEventListener("click",()=>f(!1)),e.querySelectorAll(".nav-item").forEach(A=>{A.addEventListener("click",r=>{const $=r.currentTarget.dataset.screen;f(!1),$&&this.navigateTo($)})}),(l=e.querySelector("#btn-app-logout"))==null||l.addEventListener("click",()=>{ge({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{Q.logout(),this.navigateTo("site")}})});const p=e.querySelector("#screen-viewport"),P=this.createViewElement(this.currentScreen);p.appendChild(P),this.appRoot.appendChild(e)}createViewElement(e){const t=a=>this.navigateTo(a);switch(e){case"home":return Je(t);case"agenda":return pt();case"alunos":return gt(t);case"user":return bt(t);case"planos":return yt();case"financeiro":return xt();case"planos-pagamento":return ht();case"relatorios":return $t();case"auditoria":return wt();case"configuracoes":return Et();default:return Je(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"planos-pagamento":return"Planos de Pagamento";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"planos-pagamento":return"Gestão de valores, modalidades (individual/turma) e ciclos de cobrança";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new At});
