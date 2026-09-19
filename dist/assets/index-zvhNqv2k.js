var it=Object.defineProperty;var lt=(x,e,t)=>e in x?it(x,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[e]=t;var ue=(x,e,t)=>lt(x,typeof e!="symbol"?e+"":e,t);import{E as Ue,a as Ge}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const L of n.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&a(L)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const Je="acusticamente_audit_logs";class dt{constructor(){ue(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Je);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Je,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,a=L=>L.toString().padStart(2,"0"),s=`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} ${a(t.getHours())}:${a(t.getMinutes())}:${a(t.getSeconds())}`,n={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(n),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:n})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:n})),n}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const X=new dt,Ne="acusticamente_users",ze="acusticamente_students",Le="acusticamente_plans",We="acusticamente_payment_plans",Me="acusticamente_appointments",Re="acusticamente_settings",Te="acusticamente_payments";class ct{constructor(){ue(this,"users",[]);ue(this,"students",[]);ue(this,"plans",[]);ue(this,"paymentPlans",[]);ue(this,"appointments",[]);ue(this,"payments",[]);ue(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:""});ue(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(Ne);e?this.users=JSON.parse(e).map(o=>{var P,l,y;return{...o,permissoes:{...o.permissoes,planosPagamento:((P=o.permissoes)==null?void 0:P.planosPagamento)||(o.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:o.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),financeiro:((l=o.permissoes)==null?void 0:l.financeiro)||(o.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:o.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((y=o.permissoes)==null?void 0:y.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const t=localStorage.getItem(Le);if(t)try{const o=JSON.parse(t);this.plans=o.map(P=>({...P,valor:typeof P.valor=="number"?P.valor:280,modulos:(P.modulos||[]).map((l,y)=>({...l,aulas:Array.isArray(l.aulas)&&l.aulas.length>0?l.aulas:[{id:`aul_${l.id||y+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${l.id||y+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${l.id||y+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${l.id||y+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],this.savePlans();const a=localStorage.getItem(We);if(a)try{this.paymentPlans=JSON.parse(a)}catch{this.paymentPlans=[]}(!this.paymentPlans||this.paymentPlans.length===0)&&(this.paymentPlans=[{id:"pp_ind_mensal",nome:"Individual - Mensal",modalidade:"individual",periodicidade:"mensal",valorMensal:280,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas individuais semanais com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_ind_trimestral",nome:"Individual - Trimestral",modalidade:"individual",periodicidade:"trimestral",valorMensal:250,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual com fidelidade trimestral e valor promocional.",criadoEm:new Date().toISOString()},{id:"pp_ind_semestral",nome:"Individual - Semestral",modalidade:"individual",periodicidade:"semestral",valorMensal:230,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual semestral com máxima economia.",criadoEm:new Date().toISOString()},{id:"pp_turma_mensal",nome:"Turma - Mensal",modalidade:"turma",periodicidade:"mensal",valorMensal:190,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em pequenos grupos (turmas) com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_turma_trimestral",nome:"Turma - Trimestral",modalidade:"turma",periodicidade:"trimestral",valorMensal:170,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade trimestral.",criadoEm:new Date().toISOString()},{id:"pp_turma_semestral",nome:"Turma - Semestral",modalidade:"turma",periodicidade:"semestral",valorMensal:150,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade semestral.",criadoEm:new Date().toISOString()}],this.savePaymentPlans());const s=localStorage.getItem(ze);s?this.students=JSON.parse(s).map(o=>({...o,saldoReposicoes:typeof o.saldoReposicoes=="number"?o.saldoReposicoes:0,instrumentoPrincipal:o.instrumentoPrincipal||"Violão",nivelMusical:o.nivelMusical||"iniciante",valorMensalidade:typeof o.valorMensalidade=="number"?o.valorMensalidade:280,diaVencimento:typeof o.diaVencimento=="number"?o.diaVencimento:10})):(this.students=[],this.saveStudents());const n=localStorage.getItem(Me);n?this.appointments=JSON.parse(n):(this.appointments=[],this.saveAppointments());const L=localStorage.getItem(Re);L&&(this.settings=JSON.parse(L));const S=localStorage.getItem(Te);S?this.payments=JSON.parse(S):(this.payments=[],this.savePayments()),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(o=>{o.nome.includes("Reabilitação")&&(o.nome="Violão e Harmonia Prática",o.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",o.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),this.savePlans(),this.students.forEach(o=>{var P;(P=o.observacoes)!=null&&P.includes("implante")&&(o.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",o.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(o=>{var P;(P=o.titulo)!=null&&P.includes("Auditivo")&&(o.titulo="Aula Prática de Violão",o.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const e=new Date,t=a=>a.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,a){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:a})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const a=t.data;return Array.isArray(a.students)&&(this.students=a.students,localStorage.setItem(ze,JSON.stringify(this.students))),Array.isArray(a.payments)&&(this.payments=a.payments,localStorage.setItem(Te,JSON.stringify(this.payments))),Array.isArray(a.appointments)&&(this.appointments=a.appointments,localStorage.setItem(Me,JSON.stringify(this.appointments))),Array.isArray(a.plans)&&(this.plans=a.plans,localStorage.setItem(Le,JSON.stringify(this.plans))),Array.isArray(a.users)&&a.users.length>0&&(this.users=a.users,localStorage.setItem(Ne,JSON.stringify(this.users))),a.settings&&(this.settings={...this.settings,...a.settings},localStorage.setItem(Re,JSON.stringify(this.settings))),Array.isArray(a.audit)&&(a.audit.length===0?X.clearLocalOnly():X.setLogs(a.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(ze,JSON.stringify([])),localStorage.setItem(Te,JSON.stringify([])),localStorage.setItem(Me,JSON.stringify([])),localStorage.setItem(Le,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await X.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(Ne,JSON.stringify(this.users)),this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(ze,JSON.stringify(this.students)),this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Le,JSON.stringify(this.plans)),this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Me,JSON.stringify(this.appointments)),this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(Te,JSON.stringify(this.payments)),this.pushToCloud("payments","replace_all",this.payments)}savePaymentPlans(){localStorage.setItem(We,JSON.stringify(this.paymentPlans)),this.pushToCloud("payment_plans","replace_all",this.paymentPlans)}saveSettings(){localStorage.setItem(Re,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const a={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(a),this.saveUsers(),X.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${a.nome}" (login: ${a.login}, papel: ${a.papel})`}),a}updateUser(e,t,a){const s=this.users.findIndex(S=>S.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const n=this.users[s],L=n.isSistema;return this.users[s]={...n,...t,isSistema:L,atualizadoEm:new Date().toISOString()},this.saveUsers(),X.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:a,detalhes:`Usuário "${n.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const a=this.users.find(s=>s.id===e);if(!a)throw new Error("Usuário não encontrado.");if(a.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),X.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${a.nome}" (login: ${a.login}) foi removido.`})}getStudents(){return[...this.students]}getStudentById(e){return this.students.find(t=>t.id===e)}addStudent(e,t){const a={...e,id:"aluno_"+Date.now(),saldoReposicoes:0,criadoEm:new Date().toISOString()};return this.students.push(a),this.saveStudents(),X.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" cadastrado com status ${a.status}. Saldo de remarcação inicial: 0.`}),a}updateStudent(e,t,a){const s=this.students.findIndex(S=>S.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const n=this.students[s],L={...t};return delete L.saldoReposicoes,this.students[s]={...n,...L,saldoReposicoes:n.saldoReposicoes??0},this.saveStudents(),X.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:a,detalhes:`Aluno "${n.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const a=this.students.find(s=>s.id===e);a&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),X.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const a={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(a),this.savePlans(),X.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" criado com ${a.modulos.length} módulos.`}),a}updatePlan(e,t,a){const s=this.plans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano não encontrado.");const n=this.plans[s];return this.plans[s]={...n,...t},this.savePlans(),X.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:a,detalhes:`Plano "${n.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const a=this.plans.find(s=>s.id===e);a&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),X.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" foi excluído.`}))}getPaymentPlans(){return[...this.paymentPlans]}getPaymentPlanById(e){return this.paymentPlans.find(t=>t.id===e)}addPaymentPlan(e,t){const a={...e,id:"pp_"+Date.now(),criadoEm:new Date().toISOString()};return this.paymentPlans.push(a),this.savePaymentPlans(),X.log({tela:"Planos de Pagamento",acao:"Criação de Plano de Pagamento",usuarioNome:t,detalhes:`Plano "${a.nome}" criado (Modalidade: ${a.modalidade}, Ciclo: ${a.periodicidade}, R$ ${a.valorMensal}).`}),a}updatePaymentPlan(e,t,a){const s=this.paymentPlans.findIndex(L=>L.id===e);if(s===-1)throw new Error("Plano de pagamento não encontrado.");const n=this.paymentPlans[s];return this.paymentPlans[s]={...n,...t},this.savePaymentPlans(),X.log({tela:"Planos de Pagamento",acao:"Atualização de Plano de Pagamento",usuarioNome:a,detalhes:`Plano de pagamento "${n.nome}" atualizado.`}),this.paymentPlans[s]}deletePaymentPlan(e,t){const a=this.paymentPlans.find(s=>s.id===e);a&&(this.paymentPlans=this.paymentPlans.filter(s=>s.id!==e),this.savePaymentPlans(),X.log({tela:"Planos de Pagamento",acao:"Exclusão de Plano de Pagamento",usuarioNome:t,detalhes:`Plano de pagamento "${a.nome}" foi excluído.`}))}calcularMensalidadeAluno(e,t){const a=this.paymentPlans.find(o=>o.id===e),s=a?a.valorMensal:280,n=t?(a==null?void 0:a.descontoSegundaMatricula)??20:0,L=n>0?s*n/100:0,S=Math.max(0,s-L);return{valorBase:s,descontoPercentual:n,valorDesconto:L,valorFinal:S}}getAppointments(){return[...this.appointments]}addAppointment(e,t){const a={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(a),this.saveAppointments();const s=this.students.find(n=>n.id===a.alunoId);return X.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${a.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${a.data} às ${a.horaInicio}.`}),a}updateAppointment(e,t,a){const s=this.appointments.findIndex(P=>P.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const n=this.appointments[s],L=n.status,S=t.status!==void 0?t.status:n.status;this.appointments[s]={...n,...t},this.saveAppointments();const o=this.students.find(P=>P.id===(t.alunoId||n.alunoId));return o&&(L!=="falta_justificada"&&S==="falta_justificada"?(o.saldoReposicoes=(o.saldoReposicoes||0)+1,this.saveStudents(),X.log({tela:"Agenda",acao:"Crédito de Remarcação Automático (+1)",usuarioNome:a,detalhes:`Status da aula "${n.titulo}" alterado para Falta Justificada. +1 crédito gerado para "${o.nome}". Saldo atual: ${o.saldoReposicoes}.`})):L==="falta_justificada"&&S!=="falta_justificada"&&(o.saldoReposicoes=Math.max(0,(o.saldoReposicoes||0)-1),this.saveStudents(),X.log({tela:"Agenda",acao:"Estorno de Crédito de Remarcação (-1)",usuarioNome:a,detalhes:`Falta justificada na aula "${n.titulo}" alterada para "${S}". 1 crédito estornado de "${o.nome}". Saldo atual: ${o.saldoReposicoes}.`})),(t.tipoAula||n.tipoAula)==="reposicao"&&(L!=="cancelado"&&S==="cancelado"?(o.saldoReposicoes=(o.saldoReposicoes||0)+1,this.saveStudents(),X.log({tela:"Agenda",acao:"Estorno por Cancelamento de Reposição (+1)",usuarioNome:a,detalhes:`Reposição cancelada para "${o.nome}". 1 crédito devolvido ao saldo. Saldo atual: ${o.saldoReposicoes}.`})):L==="cancelado"&&S==="agendado"&&(o.saldoReposicoes=Math.max(0,(o.saldoReposicoes||0)-1),this.saveStudents(),X.log({tela:"Agenda",acao:"Consumo por Reativação de Reposição (-1)",usuarioNome:a,detalhes:`Reposição reativada para "${o.nome}". 1 crédito consumido. Saldo atual: ${o.saldoReposicoes}.`})))),X.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:a,detalhes:`Compromisso "${n.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const a=this.appointments.find(s=>s.id===e);if(a){if(a.tipoAula==="reposicao"&&a.status!=="concluido"){const s=this.students.find(n=>n.id===a.alunoId);s&&(s.saldoReposicoes=(s.saldoReposicoes||0)+1,this.saveStudents(),X.log({tela:"Agenda",acao:"Estorno Automático de Crédito (+1)",usuarioNome:t,detalhes:`Aula de reposição excluída para "${s.nome}". 1 crédito estornado automaticamente ao saldo. Saldo atual: ${s.saldoReposicoes}.`}))}this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),X.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${a.titulo}" removido da agenda.`})}}marcarPresenca(e,t){const a=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(n=>n.id===a.alunoId);return X.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${a.titulo}".`}),a}registrarFalta(e,t,a,s){const n=t?"falta_justificada":"falta_injustificada",L=this.updateAppointment(e,{status:n,justificativaFalta:(a==null?void 0:a.trim())||void 0},s),S=this.students.find(P=>P.id===L.alunoId),o=(S==null?void 0:S.saldoReposicoes)||0;return{appointment:L,saldoReposicoes:o}}agendarReposicao(e,t,a){const s=this.students.find(L=>L.id===e.alunoId);if(!s||typeof s.saldoReposicoes!="number"||s.saldoReposicoes<=0)throw new Error(`O aluno "${(s==null?void 0:s.nome)||"selecionado"}" não possui créditos de remarcação disponíveis para agendar reposição.`);const n=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},a);if(t){const L=this.appointments.findIndex(S=>S.id===t);L!==-1&&(this.appointments[L].aulaReposicaoId=n.id,this.saveAppointments())}return s.saldoReposicoes-=1,this.saveStudents(),X.log({tela:"Agenda",acao:"Aula de Reposição Agendada (-1 Crédito)",usuarioNome:a,detalhes:`Reposição agendada para "${s.nome}". 1 crédito abatido automaticamente. Saldo restante: ${s.saldoReposicoes}.`}),n}generateAppointmentsFromPlan(e,t,a,s,n,L){const S=this.students.find(k=>k.id===e),o=this.plans.find(k=>k.id===t);if(!S||!o)return[];const P=[];if((o.modulos||[]).forEach(k=>{(k.aulas||[]).forEach(B=>{P.push({moduloId:k.id,moduloTitulo:k.titulo,aulaTitulo:B.titulo,aulaId:B.id})})}),P.length===0)return[];const l=[];let y=new Date(a+"T12:00:00");return P.forEach((k,B)=>{const g=f=>f.toString().padStart(2,"0"),m=`${y.getFullYear()}-${g(y.getMonth()+1)}-${g(y.getDate())}`,r={id:`app_${Date.now()}_${B}_${Math.random().toString(36).substr(2,4)}`,alunoId:S.id,planoId:o.id,moduloId:k.moduloId,aulaId:k.aulaId,titulo:`${k.aulaTitulo}`,data:m,horaInicio:s,horaFim:n,status:"agendado",tipoAula:"regular",observacoes:`${o.nome} • ${k.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push(r),l.push(r),y.setDate(y.getDate()+7)}),this.saveAppointments(),X.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:L,detalhes:`Geradas ${l.length} aulas regulares para "${S.nome}" com base no plano "${o.nome}".`}),l}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,a)=>{const s=`${t.data}T${t.horaInicio}`;return`${a.data}T${a.horaInicio}`.localeCompare(s)})}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(a=>{if(a.status!=="pago"){const s=a.dataVencimento<e?"atrasado":"pendente";a.status!==s&&(a.status=s,t=!0)}}),t&&this.savePayments(),[...this.payments].sort((a,s)=>s.dataVencimento.localeCompare(a.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(a=>a.alunoId===e&&(a.status==="atrasado"||a.status==="pendente"&&a.dataVencimento<t))}addPayment(e,t){const a=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<a&&(s="atrasado");const n={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(n),this.savePayments();const L=this.students.find(S=>S.id===n.alunoId);return X.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${n.descricao}" (R$ ${n.valor.toFixed(2)}) cadastrado para o aluno "${(L==null?void 0:L.nome)||"N/A"}" com vencimento em ${n.dataVencimento}.`}),n}darBaixaPayment(e,t,a,s,n){const L=this.payments.findIndex(l=>l.id===e);if(L===-1)throw new Error("Lançamento financeiro não encontrado");const S=this.payments[L],o=S.status;S.status="pago",S.dataPagamento=t,S.formaPagamento=a,n!==void 0&&(S.observacoes=n.trim()?n.trim():S.observacoes),this.savePayments();const P=this.students.find(l=>l.id===S.alunoId);return X.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${S.descricao}" de "${(P==null?void 0:P.nome)||"N/A"}". Valor R$ ${S.valor.toFixed(2)} recebido via ${a.toUpperCase()} em ${t} (Status anterior: ${o}).`}),S}updatePayment(e,t,a){const s=this.payments.findIndex(l=>l.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const n=this.getTodayDateString();let L=t.status||this.payments[s].status;const S=t.dataVencimento||this.payments[s].dataVencimento;L!=="pago"&&(L=S<n?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:L},this.savePayments();const o=this.payments[s],P=this.students.find(l=>l.id===o.alunoId);return X.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:a,detalhes:`Lançamento financeiro "${o.descricao}" do aluno "${(P==null?void 0:P.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const a=this.payments.find(n=>n.id===e);if(!a)return;this.payments=this.payments.filter(n=>n.id!==e),this.savePayments();const s=this.students.find(n=>n.id===a.alunoId);X.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${a.descricao}" no valor de R$ ${a.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,a){const s=y=>y.toString().padStart(2,"0"),n=`${e}-${s(t)}`,S=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||n,o=this.students.filter(y=>y.status==="ativo");let P=0,l=0;return o.forEach(y=>{if(this.payments.some(c=>c.alunoId===y.id&&(c.mesReferencia===n||c.dataVencimento.startsWith(n)))){l++;return}const B=y.diaVencimento||10,g=new Date(e,t,0).getDate(),m=Math.min(B,g),r=`${e}-${s(t)}-${s(m)}`,f=typeof y.valorMensalidade=="number"&&y.valorMensalidade>0?y.valorMensalidade:280;this.addPayment({alunoId:y.id,descricao:`Mensalidade ${S}/${e}`,mesReferencia:n,valor:f,dataVencimento:r,status:"pendente",observacoes:`Gerado automaticamente para o plano ${y.moduloAtual||y.instrumentoPrincipal||"Música"}`},a),P++}),X.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:a,detalhes:`Geração em lote para ${S}/${e}: ${P} mensalidade(s) criada(s) e ${l} já existente(s) pulada(s).`}),{criadas:P,puladas:l}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),X.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const M=new ct,Ae={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Pe(x){var s,n,L,S,o,P,l,y,k,B,g,m,r,f,c,E,w,u,d,$,v,z,b,i,C,h,p,T,F,O,G,A,D,_,N,V;if(!x)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(x.papel==="admin")return JSON.parse(JSON.stringify(Ae.admin));const e=Ae[x.papel]||Ae.professor,t=x.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const a=J=>typeof J=="boolean";return{alunos:{acesso:a(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:a(t.alunos)?t.alunos:((n=t.alunos)==null?void 0:n.cadastrar)??e.alunos.cadastrar,alterar:a(t.alunos)?t.alunos:((L=t.alunos)==null?void 0:L.alterar)??e.alunos.alterar,excluir:a(t.alunos)?!1:((S=t.alunos)==null?void 0:S.excluir)??e.alunos.excluir},agenda:{acesso:a(t.agenda)?t.agenda:((o=t.agenda)==null?void 0:o.acesso)??e.agenda.acesso,cadastrar:a(t.agenda)?t.agenda:((P=t.agenda)==null?void 0:P.cadastrar)??e.agenda.cadastrar,alterar:a(t.agenda)?t.agenda:((l=t.agenda)==null?void 0:l.alterar)??e.agenda.alterar,excluir:a(t.agenda)?!1:((y=t.agenda)==null?void 0:y.excluir)??e.agenda.excluir},planos:{acesso:a(t.planos)?t.planos:((k=t.planos)==null?void 0:k.acesso)??e.planos.acesso,cadastrar:a(t.planos)?t.planos:((B=t.planos)==null?void 0:B.cadastrar)??e.planos.cadastrar,alterar:a(t.planos)?t.planos:((g=t.planos)==null?void 0:g.alterar)??e.planos.alterar,excluir:a(t.planos)?!1:((m=t.planos)==null?void 0:m.excluir)??e.planos.excluir},planosPagamento:{acesso:a(t.planosPagamento)?t.planosPagamento:((r=t.planosPagamento)==null?void 0:r.acesso)??((f=e.planosPagamento)==null?void 0:f.acesso)??!1,cadastrar:a(t.planosPagamento)?t.planosPagamento:((c=t.planosPagamento)==null?void 0:c.cadastrar)??((E=e.planosPagamento)==null?void 0:E.cadastrar)??!1,alterar:a(t.planosPagamento)?t.planosPagamento:((w=t.planosPagamento)==null?void 0:w.alterar)??((u=e.planosPagamento)==null?void 0:u.alterar)??!1,excluir:a(t.planosPagamento)?!1:((d=t.planosPagamento)==null?void 0:d.excluir)??(($=e.planosPagamento)==null?void 0:$.excluir)??!1},home:{acesso:a(t.home)?t.home:((v=t.home)==null?void 0:v.acesso)??e.home.acesso},financeiro:{acesso:a(t.financeiro)?t.financeiro:((z=t.financeiro)==null?void 0:z.acesso)??((b=e.financeiro)==null?void 0:b.acesso)??!1,cadastrar:a(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.cadastrar)??((C=e.financeiro)==null?void 0:C.cadastrar)??!1,alterar:a(t.financeiro)?t.financeiro:((h=t.financeiro)==null?void 0:h.alterar)??((p=e.financeiro)==null?void 0:p.alterar)??!1,excluir:a(t.financeiro)?!1:((T=t.financeiro)==null?void 0:T.excluir)??((F=e.financeiro)==null?void 0:F.excluir)??!1},relatorios:{acesso:a(t.relatorios)?t.relatorios:((O=t.relatorios)==null?void 0:O.acesso)??((G=e.relatorios)==null?void 0:G.acesso)??!0,gerar:a(t.relatorios)?t.relatorios:((A=t.relatorios)==null?void 0:A.gerar)??((D=e.relatorios)==null?void 0:D.gerar)??!0},auditoria:{acesso:a(t.auditoria)?t.auditoria:((_=t.auditoria)==null?void 0:_.acesso)??e.auditoria.acesso},configuracoes:{acesso:a(t.configuracoes)?t.configuracoes:((N=t.configuracoes)==null?void 0:N.acesso)??e.configuracoes.acesso,alterar:a(t.configuracoes)?t.configuracoes:((V=t.configuracoes)==null?void 0:V.alterar)??e.configuracoes.alterar}}}function be(x,e){var s;if(!x)return!1;if(e==="login")return!0;if(e==="user")return x.papel==="admin";if(x.papel==="admin"||x.isSistema)return!0;if(e==="planos-pagamento")return!!((s=Pe(x).planosPagamento)!=null&&s.acesso);const a=Pe(x)[e];return a&&typeof a=="object"&&"acesso"in a?!!a.acesso:!1}function de(x,e,t){if(!x)return!1;if(x.papel==="admin")return!0;const s=Pe(x)[e];return s?!!s[t]:!1}const De="acusticamente_active_session";class pt{constructor(){ue(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(De);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=M.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(De,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=M.getUsers().find(n=>n.login===e.trim());return s?s.senha!==t.trim()?(X.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(De,JSON.stringify(s)),X.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(X.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&X.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(De),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const ie=new pt;function ut(x=40){return`
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
  `}function ye(x,e=40){return x&&x.trim()!==""?`<img src="${x}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:ut(e)}function R(x,e="success"){const t=document.getElementById("toast-container");if(!t)return;const a=document.createElement("div");a.className=`toast toast-${e}`,a.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${x}</span>
  `,t.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 200ms ease",setTimeout(()=>a.remove(),200)},3500)}function fe(x){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
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
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),a=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),n=()=>{e.innerHTML="",x.onCancel&&x.onCancel()};t.onclick=n,a.onclick=n,s&&x.onConfirm&&(s.onclick=async()=>{const L=document.querySelector(".modal-card");await x.onConfirm(L)!==!1&&(e.innerHTML="")})}function ke(){const x=document.getElementById("modal-container");x&&(x.innerHTML="")}function $e(x){fe({title:x.title||"Confirmar Exclusão",bodyHtml:`
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
    `,confirmText:x.confirmText||"Excluir Definitivamente",confirmBtnClass:x.confirmBtnClass||"btn-danger",onConfirm:()=>(x.onConfirm(),!0)})}const j={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',planoPagamento:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'};function Ye(x){return x.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function Be(x){const e=x.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function Xe(x){const e=x.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function Ke(x){const e=x.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function ot(x){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)}function mt(x){const e=x.replace(/\D/g,"").slice(0,6);if(e.length<=4)return e;const t=e.slice(0,4);let a=e.slice(4,6);return parseInt(a,10)>12&&(a="12"),a.length===2&&a==="00"&&(a="01"),`${t}-${a}`}function ft(x){const e=x.replace(/\D/g,"").slice(0,2);if(!e)return"";const t=parseInt(e,10);return t>31?"31":t===0?"1":e}function Qe(x){const e=x.trim().toUpperCase();return e.startsWith("I")||e.startsWith("IS")||e.startsWith("ISE")||e.startsWith("ISEN")||e.startsWith("ISENT")||e==="ISENTO"?"ISENTO".slice(0,e.length):x.replace(/\D/g,"").slice(0,14)}function Se(x){if(typeof x=="number")return x.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});const e=x.replace(/\D/g,"");return e?(parseInt(e,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}function qe(x){if(!x)return 0;const e=x.replace(/[^\d,-]/g,"").replace(",","."),t=parseFloat(e);return isNaN(t)?0:t}function me(x,e){x.addEventListener("input",()=>{x.value=e(x.value)})}const Fe="acusticamente_auth_remember",gt="acusticamente_manual_logout";function vt(x,e){const t=document.createElement("div");t.className="login-page";const a=M.getSettings(),s=a.nomeMenu||a.nomeFantasia||"Acusticamente";let n={username:"",password:"",remember:!1};try{const P=localStorage.getItem(Fe);P&&(n={...n,...JSON.parse(P)})}catch{n={username:"",password:"",remember:!1}}t.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${ye(a.logotipoCustomizado,50)}
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
            ${ye(a.logotipoCustomizado,58)}
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
              value="${n.remember?n.username:""}"
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
              value="${n.remember?n.password:""}"
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
                ${n.remember?"checked":""} 
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
  `;const L=t.querySelector("#login-remember"),S=t.querySelector("#btn-back-to-site");S==null||S.addEventListener("click",()=>{e?e():window.location.hash="site"});const o=t.querySelector("#login-form");return o.onsubmit=P=>{var r;P.preventDefault();const l=t.querySelector("#login-username"),y=t.querySelector("#login-password"),k=l.value.trim(),B=y.value.trim(),g=L.checked,m=ie.login(k,B);m.success?(g?localStorage.setItem(Fe,JSON.stringify({username:k,password:B,remember:!0})):localStorage.removeItem(Fe),sessionStorage.removeItem(gt),R(`Bem-vindo, ${(r=m.user)==null?void 0:r.nome}!`,"success"),x()):R(m.message,"error")},t}const Ce=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,_e=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function bt(x){var k,B,g;const e=document.createElement("div");e.className="public-site-wrapper";const t=M.getSettings(),a=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",n="(51) 98189-8802",L="51981898802",S="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",o="Segunda a Sexta · Aberto até 20:30",P="https://share.google/NtOxuUNfF6FGJ62tZ",l="https://www.instagram.com/acusticamente.rs",y=`https://wa.me/55${L}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Esquerdo: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${ye(t.logotipoCustomizado,36)}
          </div>
          <span class="site-brand-title">${a}</span>
        </div>

        <!-- Canto Direito: Entrar em contato e ao lado direito o Entrar -->
        <div class="site-header-right">
          <a href="${y}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Fale conosco no WhatsApp">
            ${Ce}
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
          <a href="${y}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${Ce}
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
                ${_e}
              </div>
              <div class="insta-text">
                <div class="insta-tag">ACOMPANHE NOSSA ESCOLA</div>
                <h4 class="insta-title">@acusticamente.rs</h4>
                <p class="insta-subtitle">Veja a rotina das aulas, eventos e a evolução dos nossos alunos no Instagram.</p>
              </div>
            </div>
            <a href="${l}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" title="Abrir perfil no Instagram">
              ${_e}
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
                <p>${S}</p>
              </div>
            </div>

            <div class="location-item">
              <div class="location-icon">🕒</div>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>${o}</p>
              </div>
            </div>

            <div class="location-item">
              <div class="location-icon">📞</div>
              <div>
                <h4>Telefone &amp; WhatsApp</h4>
                <p>${n}</p>
              </div>
            </div>

            <div class="location-actions">
              <a href="${P}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${y}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${Ce}
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
        <a href="${y}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${Ce}
          <span>Entrar em contato</span>
        </a>
      </div>
    </section>

    <!-- Rodapé Completo com Endereço e Instagram -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${ye(t.logotipoCustomizado,32)}
            <span>${a}</span>
          </div>
          <p>${s}</p>
          <div class="footer-address">
            <p>
              📍 <a href="${P}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);" title="Ver no Google Maps">
                ${S}
              </a>
            </p>
            <p>📞 <a href="${y}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${n}</a></p>
            <p>🕒 ${o}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Redes Sociais &amp; Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Acompanhe nosso dia a dia ou mande uma mensagem pelo WhatsApp.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${y}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${Ce}
              <span>Entrar em contato</span>
            </a>
            <a href="${l}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" style="display: inline-flex;" title="Instagram @acusticamente.rs">
              ${_e}
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
  `,(k=e.querySelector("#btn-header-login"))==null||k.addEventListener("click",()=>{const m=ie.isAuthenticated();x(m?"home":"login")}),(B=e.querySelector("#btn-footer-login"))==null||B.addEventListener("click",()=>{const m=ie.isAuthenticated();x(m?"home":"login")}),(g=e.querySelector("#site-logo-link"))==null||g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function K(x,e,t,a){const s=t.column===e,n=s?t.direction==="asc"?"▲":"▼":"▲▼",L=(a==null?void 0:a.align)||"left",S=a!=null&&a.extraClass?` ${a.extraClass}`:"",o=a!=null&&a.extraStyle?` ${a.extraStyle}`:"",P=(a==null?void 0:a.title)||`Ordenar por ${x}`;return`
    <th class="sortable-th${S}" data-sort-key="${e}" title="${P}" style="cursor: pointer; user-select: none; text-align: ${L};${o}">
      <div style="display: inline-flex; align-items: center; gap: 6px; justify-content: ${L==="right"?"flex-end":L==="center"?"center":"flex-start"}; width: 100%;">
        <span>${x}</span>
        <span class="sort-arrow-indicator ${s?"active":"inactive"}" style="font-size: 0.65rem; line-height: 1; ${s?"color: var(--color-coral); opacity: 1; font-weight: 700;":"opacity: 0.35; color: inherit;"}">
          ${n}
        </span>
      </div>
    </th>
  `}function we(x,e,t){x.querySelectorAll(".sortable-th[data-sort-key]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const n=a.dataset.sortKey;n&&(e.column===n?e.direction=e.direction==="asc"?"desc":"asc":(e.column=n,e.direction="asc"),t({...e}))})})}function Ee(x,e,t){if(!e.column||!t[e.column])return x;const a=t[e.column],s=e.direction==="asc"?1:-1;return[...x].sort((n,L)=>{let S=a(n),o=a(L);return S==null&&o==null?0:S==null?1*s:o==null?-1*s:typeof S=="string"&&typeof o=="string"?S.localeCompare(o,"pt-BR",{numeric:!0,sensitivity:"base"})*s:typeof S=="number"&&typeof o=="number"?(S-o)*s:typeof S=="boolean"&&typeof o=="boolean"?(S===o?0:S?1:-1)*s:S<o?-1*s:S>o?1*s:0})}function Ze(x){const e=document.createElement("div"),t=ie.getCurrentUser(),a=M.getStudents(),s=M.getPlans(),n=M.getAppointments(),L=M.getTodayDateString(),S=n.filter(k=>k.data===L),o=a.filter(k=>k.status==="ativo").length,P=S.find(k=>k.status==="agendado");let l={column:"horario",direction:"asc"};function y(){var B,g;const k=Ee(S,l,{horario:m=>m.horaInicio,aluno:m=>{const r=a.find(f=>f.id===m.alunoId);return(r==null?void 0:r.nome)||""},plano:m=>{const r=s.find(f=>f.id===m.planoId);return(r==null?void 0:r.nome)||""},status:m=>m.status});e.innerHTML=`
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
            <span class="metric-value">${S.length}</span>
            <span class="metric-label">Aulas hoje</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box">
            ${j.alunos}
          </div>
          <div class="metric-data">
            <span class="metric-value">${o}</span>
            <span class="metric-label">Alunos ativos</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box">
            ${j.home}
          </div>
          <div class="metric-data">
            <span class="metric-value">${P?P.horaInicio:"--:--"}</span>
            <span class="metric-label">${P?"Próxima aula":"Nenhuma pendente"}</span>
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
          <h3 class="panel-card-title">Aulas de Hoje (${k.length})</h3>
          <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
            Ver Agenda Completa
          </button>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${K("Horário","horario",l,{extraStyle:"min-width: 100px;"})}
                ${K("Aluno","aluno",l)}
                ${K("Plano de Ensino","plano",l,{extraClass:"col-hide-md"})}
                ${K("Status","status",l,{extraClass:"col-hide-sm"})}
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody id="today-classes-tbody">
              ${k.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':k.map(m=>{const r=a.find(u=>u.id===m.alunoId),f=s.find(u=>u.id===m.planoId),c=m.status==="concluido",E=m.status==="agendado";let w='<span class="badge badge-warning">⏳ Agendado</span>';return c?w='<span class="badge badge-success">✓ Concluído</span>':m.status==="falta_justificada"?w='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':m.status==="falta_injustificada"?w='<span class="badge badge-danger">✕ Falta Injustificada</span>':m.status==="cancelado"&&(w='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                          <tr data-app-id="${m.id}">
                            <td style="white-space: nowrap;">
                              <strong style="color: var(--text-white); font-size: 0.84rem;">${m.horaInicio} - ${m.horaFim}</strong>
                              ${m.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
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
                              <span style="color: var(--text-secondary); font-size: 0.82rem;">${(f==null?void 0:f.nome)||"Plano Personalizado"}</span>
                            </td>
                            <td class="col-hide-sm" style="white-space: nowrap;">
                              ${w}
                            </td>
                            <td style="text-align: right; white-space: nowrap;">
                              ${E?`<button class="btn btn-secondary btn-complete-class" data-id="${m.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                       ✓ Concluir
                                     </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${c?"Finalizada":"Registrada"}</span>`}
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,we(e,l,m=>{l=m,y()}),(B=e.querySelector("#home-btn-new-appointment"))==null||B.addEventListener("click",()=>{x("agenda")}),(g=e.querySelector("#home-btn-view-all-agenda"))==null||g.addEventListener("click",()=>{x("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(m=>{m.addEventListener("click",r=>{const f=r.currentTarget.dataset.id;f&&(M.updateAppointment(f,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),R("Aula concluída com sucesso!","success"),x("home"))})})}return y(),e}function yt(x){const e=document.createElement("div"),t=ie.getCurrentUser();let a=new Date;function s(){var w,u,d,$;const S=M.getStudents();M.getPlans();const o=M.getAppointments(),P=a.getFullYear(),l=a.getMonth(),y=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],k=new Date(P,l,1).getDay(),B=new Date(P,l+1,0).getDate(),g=new Date(P,l,0).getDate(),m=new Date,r=m.getFullYear()===P&&m.getMonth()===l,f=[];for(let v=k;v>0;v--){const z=g-v+1;f.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${z}</span>
          </div>
        </div>
      `)}for(let v=1;v<=B;v++){const z=F=>F.toString().padStart(2,"0"),b=`${P}-${z(l+1)}-${z(v)}`,i=r&&m.getDate()===v,C=o.filter(F=>F.data===b),h=C.slice(0,3).map(F=>{const O=S.find(_=>_.id===F.alunoId),G=O?O.nome.split(" ")[0]:"Aula";let A="",D="";return F.status==="concluido"?(A="concluido",D="✓ "):F.status==="falta_justificada"?(A="falta-justificada",D="⚠️ "):F.status==="falta_injustificada"?(A="falta-injustificada",D="✕ "):F.tipoAula==="reposicao"&&(A="reposicao",D="🔄 "),`
            <div class="calendar-appointment-badge ${A}" 
                 data-app-id="${F.id}" 
                 title="${F.horaInicio} - ${(O==null?void 0:O.nome)||"Aluno"} (${F.status}${F.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${D}${F.horaInicio}</strong> ${G}
            </div>
          `}).join(""),p=C.length>3?C.length-3:0,T=p>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${p} mais</div>`:"";f.push(`
        <div class="calendar-day-cell ${i?"today":""}" data-date="${b}">
          <div class="day-cell-header">
            <span class="day-number">${v}</span>
            ${C.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${C.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${h}
            ${T}
          </div>
        </div>
      `)}const c=f.length,E=c>35?42-c:35-c;for(let v=1;v<=E;v++)f.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${v}</span>
          </div>
        </div>
      `);e.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${y[l]} de ${P}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${r?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${de(t,"agenda","cadastrar")?`
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

          ${f.join("")}
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
    `,(w=e.querySelector("#agenda-btn-prev"))==null||w.addEventListener("click",()=>{a.setMonth(a.getMonth()-1),s()}),(u=e.querySelector("#agenda-btn-next"))==null||u.addEventListener("click",()=>{a.setMonth(a.getMonth()+1),s()}),(d=e.querySelector("#agenda-btn-today"))==null||d.addEventListener("click",()=>{a=new Date,s()}),($=e.querySelector("#agenda-btn-new-app"))==null||$.addEventListener("click",()=>{L()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(v=>{v.addEventListener("click",z=>{const b=v.dataset.date;b&&n(b)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(v=>{v.addEventListener("click",z=>{z.stopPropagation();const b=v.dataset.appId,i=o.find(C=>C.id===b);i&&n(i.data)})})}function n(S){const o=M.getStudents(),P=M.getPlans(),l=M.getAppointments().filter(f=>f.data===S),[y,k,B]=S.split("-"),g=`${B}/${k}/${y}`,m=l.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${l.map(f=>{const c=o.find(C=>C.id===f.alunoId),E=P.find(C=>C.id===f.planoId),w=f.status==="concluido",u=f.status==="falta_justificada",d=f.status==="falta_injustificada",$=f.status==="cancelado",v=f.status==="agendado",z=f.tipoAula==="reposicao";let b="var(--color-coral)",i='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return w?(b="var(--status-success)",i='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):u?(b="#f59e0b",i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):d?(b="var(--status-danger)",i='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):$&&(b="var(--border-subtle)",i='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${b};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${f.horaInicio} - ${f.horaFim}</strong>
                        ${i}
                        ${z?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${f.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(c==null?void 0:c.nome)||"Não vinculado"}</strong>
                        ${c!=null&&c.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${c.instrumentoPrincipal}</span>`:""}
                        ${E?` &bull; Plano: <span style="color: #ff9187;">${E.nome}</span>`:""}
                      </div>

                      ${f.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${f.justificativaFalta}
                             </div>`:""}

                      ${f.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${f.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${f.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${de(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${f.id}" title="Editar Detalhes">
                              ${j.edit}
                            </button>
                          `:""}
                      ${de(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${f.id}" title="Excluir">
                              ${j.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${de(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${v?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${f.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${f.id}" data-name="${(c==null?void 0:c.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${f.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${u&&!f.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${f.id}" data-student-id="${f.alunoId}" data-title="${f.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,r=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${l.length}</strong>
          </span>
          ${de(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${j.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${m}
      </div>
    `;fe({title:`Aulas do Dia: ${g}`,bodyHtml:r,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var f;(f=document.getElementById("btn-modal-new-appointment"))==null||f.addEventListener("click",()=>{ke(),L({defaultDate:S})}),document.querySelectorAll(".btn-mark-presence").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id;w&&(M.marcarPresenca(w,(t==null?void 0:t.nome)||"Administrador"),R("Presença confirmada e aula concluída!","success"),s(),n(S))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id,u=E.currentTarget.dataset.name;if(!w)return;const d=prompt(`Informe o motivo da falta justificada de ${u} (Ex: Atestado médico, Viagem em família):`);if(d===null)return;const $=M.registrarFalta(w,!0,d,(t==null?void 0:t.nome)||"Administrador");R(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${$.saldoReposicoes}).`,"success"),s(),n(S)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id;w&&$e({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{M.registrarFalta(w,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),R("Falta injustificada registrada.","info"),s(),n(S)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget,u=w.dataset.id,d=w.dataset.studentId,$=w.dataset.title;ke(),L({studentId:d,aulaOriginalId:u,tipoAula:"reposicao",titulo:$?`Reposição: ${$}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id,u=M.getAppointments().find(d=>d.id===w);u&&(ke(),L({existingApp:u}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id,u=M.getAppointments().find(d=>d.id===w);u&&$e({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${u.titulo}</strong>"?`,onConfirm:()=>{M.deleteAppointment(u.id,(t==null?void 0:t.nome)||"Administrador"),R("Compromisso removido.","info"),s(),n(S)}})})})},50)}function L(S){const o=M.getStudents(),P=M.getPlans(),l=S==null?void 0:S.existingApp,y=!!l,k=(l==null?void 0:l.alunoId)||(S==null?void 0:S.studentId)||"",B=(l==null?void 0:l.data)||(S==null?void 0:S.defaultDate)||M.getTodayDateString(),g=((l==null?void 0:l.tipoAula)||(S==null?void 0:S.tipoAula))==="reposicao",m=o.map(E=>`<option value="${E.id}" ${k===E.id?"selected":""} data-planoid="${E.planoId||""}">${E.nome} (${E.instrumentoPrincipal||"Geral"})</option>`).join(""),r=P.map(E=>{const w=(E.modulos||[]).reduce((u,d)=>{var $;return u+((($=d.aulas)==null?void 0:$.length)||0)},0);return`<option value="${E.id}" ${(l==null?void 0:l.planoId)===E.id?"selected":""} data-total-aulas="${w}">${E.nome} (${w} aulas)</option>`}).join("");let f=y||g?"manual":"plano";const c=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!y&&!g?`
              <!-- Seletor de Modo de Agendamento -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px; display: flex; gap: 4px;">
                <button type="button" class="btn btn-sm ${f==="plano"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="plano" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  📚 Gerar pelo Plano Pedagógico
                </button>
                <button type="button" class="btn btn-sm ${f==="manual"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="manual" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  ✏️ Agendamento Manual
                </button>
              </div>
            `:""}

        <!-- PAINEL 1: GERAR PELO PLANO PEDAGÓGICO -->
        <div id="panel-app-plano" style="display: ${f==="plano"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.78rem; color: #fca5a5;">
            💡 <strong>Geração Automática:</strong> As aulas serão agendadas semanalmente na agenda a partir da data de início, cobrindo todos os módulos do plano selecionado.
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-student">Aluno *</label>
            <select id="app-plan-student" class="form-select" required>
              <option value="">Selecione o Aluno...</option>
              ${m}
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-select">Plano Pedagógico *</label>
            <select id="app-plan-select" class="form-select" required>
              <option value="">Selecione o Plano...</option>
              ${r}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-date-start">Data da 1ª Aula *</label>
              <input type="date" id="app-plan-date-start" class="form-input" value="${B}" required />
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
        <div id="panel-app-manual" style="display: ${f==="manual"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <!-- Tipo de Aula -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
            <label class="form-label" style="margin: 0; font-size: 0.82rem; font-weight: 600;">Tipo:</label>
            <div style="display: flex; gap: 14px;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: var(--text-white);">
                <input type="radio" name="app-tipo-aula" value="regular" ${g?"":"checked"} style="accent-color: var(--color-coral);" />
                Regular
              </label>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: #4ade80;">
                <input type="radio" name="app-tipo-aula" value="reposicao" ${g?"checked":""} style="accent-color: #22c55e;" />
                🔄 Reposição
              </label>
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-title">Título *</label>
            <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Introdução" value="${(l==null?void 0:l.titulo)||(S==null?void 0:S.titulo)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-student">Aluno *</label>
              <select id="app-student" class="form-select">
                <option value="">Selecione...</option>
                ${m}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan">Plano Pedagógico</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${r}
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
              <input type="date" id="app-date" class="form-input" value="${B}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-start">Início *</label>
              <input type="time" id="app-time-start" class="form-input" value="${(l==null?void 0:l.horaInicio)||"09:00"}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-end">Fim *</label>
              <input type="time" id="app-time-end" class="form-input" value="${(l==null?void 0:l.horaFim)||"10:00"}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-status">Status *</label>
              <select id="app-status" class="form-select">
                <option value="agendado" ${(l==null?void 0:l.status)==="agendado"?"selected":""}>⏳ Agendado</option>
                <option value="concluido" ${(l==null?void 0:l.status)==="concluido"?"selected":""}>✓ Presente</option>
                <option value="falta_justificada" ${(l==null?void 0:l.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
                <option value="falta_injustificada" ${(l==null?void 0:l.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
                <option value="cancelado" ${(l==null?void 0:l.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;" id="box-justificativa">
              <label class="form-label" for="app-justificativa">Justificativa</label>
              <input type="text" id="app-justificativa" class="form-input" placeholder="Motivo da falta..." value="${(l==null?void 0:l.justificativaFalta)||""}" />
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-obs">Observações</label>
            <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Orientações e conteúdo...">${(l==null?void 0:l.observacoes)||""}</textarea>
          </div>
        </div>

        ${y?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${j.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;fe({title:y?"Editar Aula":g?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:c,confirmText:y?"Salvar":"Confirmar",onConfirm:()=>{const E=(t==null?void 0:t.nome)||"Administrador";if(f==="plano"&&!y){const T=document.getElementById("app-plan-student").value,F=document.getElementById("app-plan-select").value,O=document.getElementById("app-plan-date-start").value,G=document.getElementById("app-plan-time-start").value,A=document.getElementById("app-plan-time-end").value;if(!T)return R("Selecione o aluno.","error"),!1;if(!F)return R("Selecione o plano pedagógico.","error"),!1;if(!O||!G||!A)return R("Informe data de início e horários.","error"),!1;const D=M.generateAppointmentsFromPlan(T,F,O,G,A,E);return D.length===0?(R("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(R(`Sucesso! ${D.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const w=document.getElementById("app-title").value.trim(),u=document.getElementById("app-student").value,d=document.getElementById("app-plan").value,$=document.getElementById("app-date").value,v=document.getElementById("app-time-start").value,z=document.getElementById("app-time-end").value,b=document.getElementById("app-status").value,i=document.getElementById("app-justificativa").value.trim(),C=document.getElementById("app-obs").value.trim(),h=document.querySelector('input[name="app-tipo-aula"]:checked'),p=(h==null?void 0:h.value)||"regular";if(!w||!u||!$||!v)return R("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;if(y&&l)M.updateAppointment(l.id,{titulo:w,alunoId:u,planoId:d||void 0,data:$,horaInicio:v,horaFim:z,status:b,tipoAula:p,justificativaFalta:i||void 0,observacoes:C},E),R("Aula atualizada com sucesso!","success");else if(p==="reposicao")try{M.agendarReposicao({titulo:w,alunoId:u,planoId:d||void 0,data:$,horaInicio:v,horaFim:z,status:b,justificativaFalta:i||void 0,observacoes:C},S==null?void 0:S.aulaOriginalId,E),R("Aula de reposição agendada (1 crédito abatido com sucesso)!","success")}catch(T){return R((T==null?void 0:T.message)||"Erro ao agendar reposição. Verifique o saldo do aluno.","error"),!1}else M.addAppointment({titulo:w,alunoId:u,planoId:d||void 0,data:$,horaInicio:v,horaFim:z,status:b,tipoAula:p,justificativaFalta:i||void 0,observacoes:C},E),R("Aula agendada com sucesso!","success");return s(),!0}}),setTimeout(()=>{var C;const E=document.querySelectorAll(".btn-app-mode"),w=document.getElementById("panel-app-plano"),u=document.getElementById("panel-app-manual");E.forEach(h=>{h.addEventListener("click",p=>{const T=p.currentTarget.dataset.mode;f=T,E.forEach(F=>{F.classList.remove("btn-primary"),F.classList.add("btn-secondary")}),p.currentTarget.classList.remove("btn-secondary"),p.currentTarget.classList.add("btn-primary"),w&&(w.style.display=T==="plano"?"flex":"none"),u&&(u.style.display=T==="manual"?"flex":"none")})});const d=document.getElementById("app-student"),$=document.getElementById("app-student-credits-info"),v=document.getElementById("app-student-credits-val"),z=document.querySelectorAll('input[name="app-tipo-aula"]'),b=()=>{var O;if(!d||!$||!v)return;const h=d.value;if(!h){$.style.display="none";return}const p=M.getStudentById(h),T=p?p.saldoReposicoes:0;v.textContent=`${T} ${T===1?"crédito":"créditos"}`;const F=((O=document.querySelector('input[name="app-tipo-aula"]:checked'))==null?void 0:O.value)==="reposicao";$.style.display="flex",T===0&&F?($.style.background="rgba(239, 68, 68, 0.15)",$.style.borderColor="rgba(239, 68, 68, 0.4)",$.style.color="#f87171"):($.style.background="rgba(59, 130, 246, 0.1)",$.style.borderColor="rgba(59, 130, 246, 0.3)",$.style.color="#93c5fd")};d==null||d.addEventListener("change",b),z.forEach(h=>h.addEventListener("change",b)),b();const i=document.getElementById("app-plan-student");i==null||i.addEventListener("change",()=>{const h=i.selectedOptions[0],p=h==null?void 0:h.getAttribute("data-planoid");if(p){const T=document.getElementById("app-plan-select");T&&(T.value=p)}}),y&&l&&((C=document.getElementById("btn-delete-app"))==null||C.addEventListener("click",()=>{$e({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${l.titulo}</strong>"?`,onConfirm:()=>{M.deleteAppointment(l.id,(t==null?void 0:t.nome)||"Administrador"),R("Aula removida.","info"),ke(),s()}})}))},50)}return s(),e}const ht=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function et(x){const e=(x||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function xt(x){if(!x)return"";const e=new Date(x+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,`${a} anos`}function tt(x){if(!x)return null;const e=new Date(x+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,a}function $t(x,e){const t=x.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${a}?text=${s}`}function st(x,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},a=`
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
  `;fe({title:`Recibo de Pagamento: ${x.descricao}`,bodyHtml:a,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function wt(x){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s={column:"nome",direction:"asc"};function n(){var r,f;const o=M.getStudents(),P=M.getPlans(),l=de(t,"alunos","cadastrar"),y=de(t,"alunos","alterar"),k=de(t,"alunos","excluir"),B=o.filter(c=>c.nome.toLowerCase().includes(a.toLowerCase())||c.email.toLowerCase().includes(a.toLowerCase())||c.telefone.includes(a)||c.instrumentoPrincipal&&c.instrumentoPrincipal.toLowerCase().includes(a.toLowerCase())||c.responsavelNome&&c.responsavelNome.toLowerCase().includes(a.toLowerCase())),g=Ee(B,s,{nome:c=>c.nome,instrumento:c=>c.instrumentoPrincipal||"",contato:c=>c.telefone||c.email||"",plano:c=>{const E=P.find(w=>w.id===c.planoId);return(E==null?void 0:E.nome)||""},status:c=>c.status});e.innerHTML=`
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

        ${l?`
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
          <h3 class="panel-card-title">Alunos Matriculados (${g.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${K("Aluno","nome",s,{extraStyle:"min-width: 160px;"})}
                ${K("Instrumento","instrumento",s,{extraClass:"col-hide-md",extraStyle:"width: 180px;"})}
                ${K("Contato","contato",s,{extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                ${K("Plano de Ensino","plano",s,{extraClass:"col-hide-sm",extraStyle:"width: 180px;"})}
                ${K("Status","status",s,{extraClass:"col-hide-xs",extraStyle:"width: 120px;"})}
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${g.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':g.map(c=>{const E=P.find(u=>u.id===c.planoId),w=c.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${c.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${c.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${et(c.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${c.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${c.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-white); white-space: nowrap; display: block;">
                                ${(E==null?void 0:E.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                              ${(c.saldoReposicoes||0)>0?`<span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.64rem; padding: 1px 5px; margin-top: 2px; display: inline-block;">
                                      ⚡ ${c.saldoReposicoes} ${c.saldoReposicoes===1?"crédito":"créditos"} de remarcação
                                     </span>`:""}
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${w?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${w?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${c.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${j.profile}
                                </button>
                                ${y?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${c.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${k?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${c.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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
    `;const m=e.querySelector("#student-search-input");m==null||m.addEventListener("input",c=>{a=c.target.value,n();const E=e.querySelector("#student-search-input");E&&(E.focus(),E.selectionStart=E.selectionEnd=E.value.length)}),(r=e.querySelector("#btn-clear-search"))==null||r.addEventListener("click",()=>{a="",n()}),we(e,s,c=>{s=c,n()}),(f=e.querySelector("#btn-new-student"))==null||f.addEventListener("click",()=>{S()}),e.querySelectorAll(".btn-view-student").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id,u=M.getStudents().find(d=>d.id===w);u&&L(u)})}),e.querySelectorAll(".btn-edit-student").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id,u=M.getStudents().find(d=>d.id===w);u&&S(u)})}),e.querySelectorAll(".btn-delete-student").forEach(c=>{c.addEventListener("click",E=>{const w=E.currentTarget.dataset.id,u=M.getStudents().find(d=>d.id===w);u&&$e({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${u.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{M.deleteStudent(u.id,(t==null?void 0:t.nome)||"Administrador"),R(`Aluno "${u.nome}" excluído.`,"info"),n()}})})})}function L(o){const P=M.getPlans(),l=M.getPaymentPlans();P.find(i=>i.id===o.planoId);const y=l.find(i=>i.id===o.planoPagamentoId),k=M.getStudentAppointments(o.id),B=M.getStudentPayments(o.id),g=xt(o.dataNascimento),m=$t(o.telefone,o.nome),r=o.saldoReposicoes||0,f=M.isStudentOverdue(o.id),c=o.status==="ativo",E=de(t,"financeiro","alterar"),w=k.length,u=k.filter(i=>i.status==="concluido").length,d=k.filter(i=>i.status==="falta_justificada").length,$=k.filter(i=>i.status==="falta_injustificada").length,v=B.filter(i=>i.status==="pago").reduce((i,C)=>i+C.valor,0),z=B.filter(i=>i.status!=="pago").reduce((i,C)=>i+C.valor,0),b=`
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
                <span class="badge ${c?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${c?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${et(o.instrumentoPrincipal)} ${o.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${o.nivelMusical?o.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${o.moduloAtual?`&bull; <span style="color: var(--color-coral); font-weight: 600;">📖 ${o.moduloAtual}${o.aulaAtual?` &bull; ${o.aulaAtual}`:""}</span>`:""}
                ${g?`&bull; <span style="color: var(--text-muted);">${g}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${m?`
                  <a href="${m}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
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
              ${f?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${B.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${w}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${u}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${d+$}</div>
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
                Aulas Recentes (${k.length})
              </span>
              ${r>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${r})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${k.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
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
                        ${k.map(i=>{const C=i.status==="concluido",h=i.status.startsWith("falta"),p=i.status==="agendado",T=C?'<span class="badge badge-success" style="font-size: 0.65rem; padding: 1px 5px;">Presente</span>':h?`<span class="badge ${i.status==="falta_justificada"?"badge-coral":"badge-danger"}" style="font-size: 0.65rem; padding: 1px 5px;">${i.status==="falta_justificada"?"Falta Justificada":"Falta Injustificada"}</span>`:p?'<span class="badge badge-warning" style="font-size: 0.65rem; padding: 1px 5px;">Agendado</span>':'<span class="badge badge-secondary" style="font-size: 0.65rem; padding: 1px 5px;">Cancelado</span>',F=i.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem; padding: 1px 5px;">🔄 Reposição</span>':'<span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); font-size: 0.65rem; padding: 1px 5px;">Regular</span>';return`
                              <tr>
                                <td style="white-space: nowrap; font-weight: 500;">
                                  ${i.data.split("-").reverse().join("/")} <span style="color: var(--text-muted); font-size: 0.7rem;">${i.horaInicio}</span>
                                </td>
                                <td>${i.titulo}</td>
                                <td class="col-hide-sm">${F}</td>
                                <td>${T}</td>
                                <td class="col-hide-sm" style="color: var(--text-muted); font-size: 0.72rem;">
                                  ${i.justificativaFalta?`<em>Motivo: ${i.justificativaFalta}</em>`:i.observacoes||"-"}
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
                ${y?`${y.nome} (${y.modalidade==="individual"?"👤 Individual":"👥 Turma"} &bull; ${y.periodicidade.toUpperCase()})`:"Plano Padrão"}
              </div>
            </div>
            ${o.isSegundaMatricula?`<span class="badge" style="background: rgba(255, 255, 255, 0.08); color: var(--text-secondary); border: 1px solid var(--border-subtle); font-size: 0.72rem; padding: 3px 8px;">
                    🏷️ 2ª Matrícula / Familiar
                   </span>`:""}
          </div>

          <!-- Status Sucinto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.8rem; color: var(--text-white);">
              ${f?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
                R$ ${v.toFixed(2)}
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
                Histórico de Mensalidades (${B.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${B.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${B.map(i=>{const C=i.status==="pago",h=i.status==="atrasado";let p="";return C?p='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':h?p='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':p='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${i.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${i.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${i.valor.toFixed(2)}</td>
                              <td>${p}</td>
                              <td class="col-hide-sm">${i.dataPagamento?i.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${C?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${i.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:E?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${i.id}" style="font-size: 0.7rem; padding: 2px 7px;">
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
    `;fe({title:`Ficha do Aluno: ${o.nome}`,bodyHtml:b,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var T;const i=document.getElementById("btn-tab-pedagogico"),C=document.getElementById("btn-tab-financeiro"),h=document.getElementById("panel-tab-pedagogico"),p=document.getElementById("panel-tab-financeiro");i==null||i.addEventListener("click",()=>{i.classList.add("active"),C==null||C.classList.remove("active"),h&&(h.style.display="flex"),p&&(p.style.display="none")}),C==null||C.addEventListener("click",()=>{C.classList.add("active"),i==null||i.classList.remove("active"),p&&(p.style.display="flex"),h&&(h.style.display="none")}),(T=document.getElementById("btn-quick-schedule-reposicao"))==null||T.addEventListener("click",()=>{ke(),x("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(F=>{F.addEventListener("click",O=>{const G=O.currentTarget.dataset.id,A=B.find(D=>D.id===G);A&&st(A,o)})}),document.querySelectorAll(".btn-pay-now").forEach(F=>{F.addEventListener("click",O=>{const G=O.currentTarget.dataset.id,A=B.find(N=>N.id===G);if(!A)return;const D=M.getTodayDateString(),_=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${A.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${A.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${A.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${o.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${D}" required />
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
          `;fe({title:`Dar Baixa: ${A.descricao}`,bodyHtml:_,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const N=document.getElementById("baixa-data").value,V=document.getElementById("baixa-forma").value,J=document.getElementById("baixa-obs").value;if(!N)return R("Informe a data de recebimento.","error"),!1;const W=(t==null?void 0:t.nome)||"Administrador";M.darBaixaPayment(A.id,N,V,W,J),R(`Baixa de R$ ${A.valor.toFixed(2)} efetuada com sucesso!`,"success"),n();const U=M.getStudents().find(Y=>Y.id===o.id)||o;return L(U),setTimeout(()=>{var Y;(Y=document.getElementById("btn-tab-financeiro"))==null||Y.click()},50),!0}})})})},50)}function S(o){const P=M.getPlans(),l=M.getPaymentPlans(),y=!!o;o&&M.getStudentPayments(o.id);const k=P.map(r=>`<option value="${r.id}" ${(o==null?void 0:o.planoId)===r.id?"selected":""}>${r.nome}${r.instrumento?` (${r.instrumento})`:""}</option>`).join(""),B=l.filter(r=>r.ativo).map(r=>`<option value="${r.id}" ${(o==null?void 0:o.planoPagamentoId)===r.id?"selected":""} data-valor="${r.valorMensal}" data-desconto="${r.descontoSegundaMatricula??0}">${r.nome} (${r.modalidade==="individual"?"👤 Individual":"👥 Turma"} - ${r.periodicidade.toUpperCase()}) - R$ ${r.valorMensal.toFixed(2)}/mês</option>`).join(""),g=ht.map(r=>`<option value="${r}" ${(o==null?void 0:o.instrumentoPrincipal)===r?"selected":""}>${r}</option>`).join(""),m=`
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
                ${g}
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
              ${k}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo Atual</label>
              <select id="student-modulo" class="form-select">
                <option value="">Selecione o plano primeiro...</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-aula">Aula Atual (Opcional)</label>
              <select id="student-aula" class="form-select">
                <option value="">Selecione o módulo primeiro...</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-status">Status *</label>
            <select id="student-status" class="form-select">
              <option value="ativo" ${(o==null?void 0:o.status)==="ativo"?"selected":""}>Ativo</option>
              <option value="inativo" ${(o==null?void 0:o.status)==="inativo"?"selected":""}>Inativo</option>
            </select>
          </div>

          <!-- SALDO DE REMARCAÇÃO (100% AUTOMÁTICO - SOMENTE LEITURA) -->
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-white);">Créditos de Remarcação Disponíveis</span>
              <span title="Créditos gerados automaticamente por faltas justificadas e abatidos em reposições." style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border-radius: 50%; background: rgba(255, 255, 255, 0.12); color: var(--text-secondary); font-size: 0.7rem; font-weight: 700; cursor: help; font-style: normal; line-height: 1;" aria-label="Informações sobre créditos">i</span>
            </div>
            <span class="badge" style="background: rgba(234, 67, 53, 0.2); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.4); font-size: 0.95rem; font-weight: 700; padding: 4px 10px;">
              ${(o==null?void 0:o.saldoReposicoes)||0} ${((o==null?void 0:o.saldoReposicoes)||0)===1?"crédito":"créditos"}
            </span>
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
                ${B}
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
                <input type="text" id="student-valor-mensalidade" class="form-input" placeholder="0,00" value="${(o==null?void 0:o.valorMensalidade)!==void 0?Se(o.valorMensalidade):"280,00"}" required />
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
    `;fe({title:y?`Editar: ${o.nome}`:"Cadastrar Aluno",bodyHtml:m,modalClass:"modal-lg",confirmText:y?"Salvar":"Cadastrar",onConfirm:()=>{var Y,Q,te,Z,ee,ae,q,re,ne,ge;const r=document.getElementById("student-nome").value.trim(),f=document.getElementById("student-nascimento").value,c=document.getElementById("student-email").value.trim(),E=document.getElementById("student-telefone").value.trim(),w=((Y=document.getElementById("student-cpf"))==null?void 0:Y.value.trim())||void 0,u=document.getElementById("student-resp-nome").value.trim(),d=document.getElementById("student-resp-parentesco").value,$=document.getElementById("student-resp-tel").value.trim(),v=((Q=document.getElementById("student-resp-cpf"))==null?void 0:Q.value.trim())||void 0,z=document.getElementById("student-instrumento").value,b=document.getElementById("student-nivel").value,i=document.getElementById("student-plano").value,C=((te=document.getElementById("student-plano-pagamento"))==null?void 0:te.value)||void 0,h=((Z=document.getElementById("student-segunda-matricula"))==null?void 0:Z.checked)||!1,p=document.getElementById("student-status").value,T=((ae=(ee=document.getElementById("student-modulo"))==null?void 0:ee.value)==null?void 0:ae.trim())||void 0,F=((re=(q=document.getElementById("student-aula"))==null?void 0:q.value)==null?void 0:re.trim())||void 0,O=(ne=document.getElementById("student-valor-mensalidade"))==null?void 0:ne.value,G=qe(O),A=(ge=document.getElementById("student-dia-vencimento"))==null?void 0:ge.value,D=Math.min(31,Math.max(1,parseInt(A,10)||10)),_=document.getElementById("student-obs").value.trim(),N=[];r||N.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),f||N.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),E?E.replace(/\D/g,"").length<10&&N.push({label:"Celular do Aluno incompleto",fieldId:"student-telefone",tabId:"tab-pessoal"}):N.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),w&&w.replace(/\D/g,"").length!==11&&N.push({label:"CPF do Aluno incompleto (11 dígitos)",fieldId:"student-cpf",tabId:"tab-pessoal"}),c&&!ot(c)&&N.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const V=tt(f);V!==null&&V<18&&(u||N.push({label:`Nome do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),d||N.push({label:`Parentesco do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),$?$.replace(/\D/g,"").length<10&&N.push({label:"Celular do Responsável incompleto",fieldId:"student-resp-tel",tabId:"tab-resp"}):N.push({label:`Celular do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"}),v&&v.replace(/\D/g,"").length!==11&&N.push({label:"CPF do Responsável incompleto (11 dígitos)",fieldId:"student-resp-cpf",tabId:"tab-resp"})),p||N.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!O||G<=0)&&N.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const W=parseInt(A,10);if((!A||isNaN(W)||W<1||W>31)&&N.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),N.length>0){const H=ce=>{const pe=document.querySelectorAll(".btn-form-tab"),Ie=document.querySelectorAll(".form-tab-panel");pe.forEach(he=>{he.dataset.tab===ce?he.classList.add("active"):he.classList.remove("active")}),Ie.forEach(he=>{he.style.display=he.id===`form-panel-${ce}`?"flex":"none"})},oe=document.createElement("div");oe.id="student-validation-alert",oe.style.cssText=`
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `,oe.innerHTML=`
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
                  ${N.map(ce=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${ce.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(oe);const le=oe.querySelector("#btn-validation-ok");return le==null||le.focus(),le==null||le.addEventListener("click",()=>{oe.remove();const ce=N[0];H(ce.tabId),setTimeout(()=>{const pe=document.getElementById(ce.fieldId);pe&&(pe.focus(),pe.scrollIntoView({behavior:"smooth",block:"center"}),pe.style.outline="2px solid var(--color-coral)",pe.style.borderColor="var(--color-coral)",setTimeout(()=>{pe.style.outline="",pe.style.borderColor=""},3500))},100)}),!1}const U=(t==null?void 0:t.nome)||"Administrador";return y&&o?(M.updateStudent(o.id,{nome:r,dataNascimento:f,email:c,telefone:E,cpf:w,responsavelNome:u,responsavelParentesco:d,responsavelTelefone:$,responsavelCpf:v,instrumentoPrincipal:z,nivelMusical:b,planoId:i,planoPagamentoId:C,isSegundaMatricula:h,status:p,moduloAtual:T,aulaAtual:F,valorMensalidade:G,diaVencimento:D,observacoes:_},U),R("Dados do aluno atualizados com sucesso!","success")):(M.addStudent({nome:r,dataNascimento:f,email:c,telefone:E,cpf:w,responsavelNome:u,responsavelParentesco:d,responsavelTelefone:$,responsavelCpf:v,instrumentoPrincipal:z,nivelMusical:b,planoId:i,planoPagamentoId:C,isSegundaMatricula:h,status:p,moduloAtual:T,aulaAtual:F,valorMensalidade:G,diaVencimento:D,observacoes:_},U),R("Aluno cadastrado com sucesso!","success")),n(),!0}}),setTimeout(()=>{const r=document.querySelectorAll(".btn-form-tab"),f=document.querySelectorAll(".form-tab-panel");r.forEach(V=>{V.addEventListener("click",J=>{const W=J.currentTarget.dataset.tab;r.forEach(U=>{U.classList.remove("active")}),J.currentTarget.classList.add("active"),f.forEach(U=>{U.style.display=U.id===`form-panel-${W}`?"flex":"none"})})});const c=document.getElementById("student-cpf");c&&me(c,Ye);const E=document.getElementById("student-telefone");E&&me(E,Be);const w=document.getElementById("student-resp-cpf");w&&me(w,Ye);const u=document.getElementById("student-resp-tel");u&&me(u,Be);const d=document.getElementById("student-valor-mensalidade");d&&me(d,Se);const $=document.getElementById("student-dia-vencimento");$&&me($,ft);const v=document.getElementById("student-plano-pagamento"),z=document.getElementById("student-segunda-matricula"),b=document.getElementById("summary-plano-base"),i=document.getElementById("summary-plano-desc"),C=document.getElementById("summary-plano-final"),h=()=>{const V=v==null?void 0:v.value,J=(z==null?void 0:z.checked)||!1,W=M.calcularMensalidadeAluno(V,J);b&&(b.textContent=`R$ ${W.valorBase.toFixed(2)}`),i&&(i.textContent=W.descontoPercentual>0?`-R$ ${W.valorDesconto.toFixed(2)} (${W.descontoPercentual}%)`:"R$ 0,00",i.style.color=W.descontoPercentual>0?"#34d399":"var(--text-secondary)"),C&&(C.textContent=`R$ ${W.valorFinal.toFixed(2)}`);const U=document.getElementById("label-desc-segunda");if(U){const Y=v==null?void 0:v.selectedOptions[0],Q=parseFloat((Y==null?void 0:Y.getAttribute("data-desconto"))||"0");Q>0?(U.textContent=`${Q}% OFF`,U.style.color=J?"#34d399":"var(--text-secondary)"):(U.textContent="Aplicar",U.style.color="var(--text-secondary)")}d&&(d.value=Se(W.valorFinal))};v==null||v.addEventListener("change",h),z==null||z.addEventListener("change",h),o!=null&&o.planoPagamentoId&&h();const p=document.getElementById("student-nascimento"),T=document.getElementById("student-resp-alert"),F=document.querySelectorAll(".resp-req-star"),O=()=>{const V=p==null?void 0:p.value,J=tt(V),W=J!==null&&J<18;T&&(T.style.display=W?"block":"none",W&&(T.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${J} anos).</strong> Dados do responsável são obrigatórios.`)),F.forEach(U=>{U.style.display=W?"inline":"none"})};p==null||p.addEventListener("input",O),p==null||p.addEventListener("change",O),O();const G=document.getElementById("student-plano"),A=document.getElementById("student-modulo"),D=document.getElementById("student-aula"),_=(V,J)=>{var Z;if(!D)return;const W=G==null?void 0:G.value,U=P.find(ee=>ee.id===W),Y=(Z=U==null?void 0:U.modulos)==null?void 0:Z.find((ee,ae)=>(ee.titulo||`Módulo ${ae+1}`)===V);if(!Y||!Y.aulas||Y.aulas.length===0){D.innerHTML=Y?'<option value="">Nenhuma aula cadastrada neste módulo</option>':'<option value="">Selecione o módulo primeiro...</option>';return}let Q='<option value="">Selecione a aula atual (opcional)...</option>',te=!1;Y.aulas.forEach((ee,ae)=>{const q=ee.titulo||`Aula ${ae+1}`,re=(J||(o==null?void 0:o.aulaAtual))===q;re&&(te=!0),Q+=`<option value="${q}" ${re?"selected":""}>Aula ${ae+1}: ${q}</option>`}),J&&!te&&(Q+=`<option value="${J}" selected>${J} (Personalizada)</option>`),D.innerHTML=Q},N=(V,J,W)=>{if(!A)return;const U=P.find(Z=>Z.id===V);if(!U||!U.modulos||U.modulos.length===0){A.innerHTML=U?'<option value="">Este plano pedagógico não possui módulos cadastrados</option>':'<option value="">Selecione um plano de ensino primeiro...</option>',D&&(D.innerHTML='<option value="">Selecione o módulo primeiro...</option>');return}let Y='<option value="">Selecione o módulo do plano...</option>',Q=!1;const te=J!==void 0?J:(o==null?void 0:o.moduloAtual)||"";U.modulos.forEach((Z,ee)=>{var ne;const ae=Z.titulo||`Módulo ${ee+1}`,q=te===ae;q&&(Q=!0);const re=((ne=Z.aulas)==null?void 0:ne.length)||0;Y+=`<option value="${ae}" ${q?"selected":""}>Módulo ${ee+1}: ${ae} (${re} ${re===1?"aula":"aulas"})</option>`}),te&&!Q&&(Y+=`<option value="${te}" selected>${te} (Anterior)</option>`),A.innerHTML=Y,_(A.value,W!==void 0?W:o==null?void 0:o.aulaAtual)};G==null||G.addEventListener("change",()=>{N(G.value,"","")}),A==null||A.addEventListener("change",()=>{_(A.value,"")}),G!=null&&G.value&&N(G.value,o==null?void 0:o.moduloAtual,o==null?void 0:o.aulaAtual)},50)}return n(),e}const xe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"planosPagamento",title:"Planos de Pagamento",icon:"💳",items:[{key:"acesso",label:"Acesso ao módulo de planos de pagamento"},{key:"cadastrar",label:"Cadastrar novo plano de pagamento"},{key:"alterar",label:"Alterar modalidades, ciclos e valores"},{key:"excluir",label:"Excluir plano de pagamento"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],at=xe.reduce((x,e)=>x+e.items.length,0);function Et(x){let e=0;return xe.forEach(t=>{const a=x[t.key];a&&t.items.forEach(s=>{a[s.key]&&e++})}),e}function At(x){var S;const e=document.createElement("div"),t=ie.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,(S=e.querySelector("#btn-unauth-home"))==null||S.addEventListener("click",()=>x("home")),e;let a="",s={column:"nome",direction:"asc"};function n(){var B,g;const o=M.getUsers(),P=a.toLowerCase(),l=o.filter(m=>m.nome.toLowerCase().includes(P)||m.login.toLowerCase().includes(P)||m.papel.toLowerCase().includes(P)),y=Ee(l,s,{nome:m=>m.nome,login:m=>m.login,papel:m=>m.papel,tipo:m=>m.isSistema?"Sistema":"Operador"});e.innerHTML=`
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
          <h3 class="panel-card-title">Usuários Cadastrados (${y.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${K("Nome","nome",s,{extraStyle:"min-width: 140px;"})}
                ${K("Login","login",s,{extraClass:"col-hide-sm"})}
                ${K("Perfil","papel",s,{extraClass:"col-hide-xs"})}
                <th class="col-hide-md">Permissões Detalhadas</th>
                ${K("Tipo","tipo",s,{extraClass:"col-hide-sm"})}
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${y.map(m=>{const r=m.papel==="admin"?"Administrador":m.papel==="professor"?"Professor":"Atendente",f=Pe(m),c=Et(f);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${m.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${m.nome[0]||"U"}
                          </div>
                          <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${m.nome}
                          </span>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${m.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${m.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${r}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${m.papel==="admin"?"badge-coral":c>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${m.papel==="admin"?`Acesso Total (${at})`:`${c} de ${at} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${m.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${m.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${j.edit}
                          </button>
                          ${m.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${j.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${m.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
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
    `,(B=e.querySelector("#btn-new-user"))==null||B.addEventListener("click",()=>{L()});const k=e.querySelector("#user-search-input");k&&k.addEventListener("input",m=>{a=m.target.value,n();const r=e.querySelector("#user-search-input");r&&(r.focus(),r.setSelectionRange(r.value.length,r.value.length))}),(g=e.querySelector("#btn-clear-search"))==null||g.addEventListener("click",()=>{a="",n()}),we(e,s,m=>{s=m,n()}),e.querySelectorAll(".btn-edit-user").forEach(m=>{m.addEventListener("click",r=>{const f=r.currentTarget.dataset.id,c=M.getUsers().find(E=>E.id===f);c&&L(c)})}),e.querySelectorAll(".btn-delete-user").forEach(m=>{m.addEventListener("click",r=>{const f=r.currentTarget.dataset.id,c=M.getUsers().find(E=>E.id===f);c&&$e({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${c.nome}</strong>" (login: <code>${c.login}</code>)?`,onConfirm:()=>{try{M.deleteUser(c.id,(t==null?void 0:t.nome)||"Administrador"),R(`Usuário "${c.nome}" excluído.`,"info"),n()}catch(E){R(E.message||"Erro ao excluir usuário.","error")}}})})})}function L(o){var c,E,w,u;const P=!!o,l=o?o.papel:"professor",y=l==="admin",k=Pe(o),B=`
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
            <input type="password" id="user-senha" class="form-input" placeholder="${P?"Nova senha":"Ex: 123456"}" value="${(o==null?void 0:o.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${o!=null&&o.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${l==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${l==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${l==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${o!=null&&o.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${y?"none":"block"};">
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
            ${xe.map(d=>{const $=k[d.key]||{},v=d.items.filter(z=>$[z.key]).length;return`
                <div class="perm-group-card" id="card-group-${d.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${d.key}" 
                    data-group="${d.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${d.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${d.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${d.title}
                        </strong>
                        <span id="group-counter-${d.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${v}/${d.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${d.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${d.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${d.items.map(z=>{const b=!!$[z.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${d.key}-${z.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${b?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${b?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${d.key}-${z.key}" 
                                data-group="${d.key}" 
                                data-action="${z.key}" 
                                ${b?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${z.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${d.key}-${z.key}" 
                              class="badge ${b?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${b?"Liberado":"Bloqueado"}
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
    `;fe({title:P?`Editar Usuário: ${o.nome}`:"Cadastrar Novo Usuário",bodyHtml:B,modalClass:"modal-lg",confirmText:P?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var p,T,F,O,G,A,D,_,N,V,J,W,U,Y,Q,te,Z,ee,ae,q,re,ne,ge,H,oe,le;const d=document.getElementById("user-nome").value.trim(),$=document.getElementById("user-login").value.trim(),v=document.getElementById("user-senha").value.trim(),z=document.getElementById("user-papel"),b=z?z.value:"professor";if(!d||!$||!v)return R("Preencha Nome, Login e Senha.","error"),!1;if(M.getUsers().find(ce=>ce.login===$&&ce.id!==(o==null?void 0:o.id)))return R(`O login "${$}" já está em uso por outro usuário.`,"error"),!1;let C;b==="admin"?C=JSON.parse(JSON.stringify(Ae.admin)):C={alunos:{acesso:((p=document.getElementById("perm-alunos-acesso"))==null?void 0:p.checked)??!1,cadastrar:((T=document.getElementById("perm-alunos-cadastrar"))==null?void 0:T.checked)??!1,alterar:((F=document.getElementById("perm-alunos-alterar"))==null?void 0:F.checked)??!1,excluir:((O=document.getElementById("perm-alunos-excluir"))==null?void 0:O.checked)??!1},agenda:{acesso:((G=document.getElementById("perm-agenda-acesso"))==null?void 0:G.checked)??!1,cadastrar:((A=document.getElementById("perm-agenda-cadastrar"))==null?void 0:A.checked)??!1,alterar:((D=document.getElementById("perm-agenda-alterar"))==null?void 0:D.checked)??!1,excluir:((_=document.getElementById("perm-agenda-excluir"))==null?void 0:_.checked)??!1},planos:{acesso:((N=document.getElementById("perm-planos-acesso"))==null?void 0:N.checked)??!1,cadastrar:((V=document.getElementById("perm-planos-cadastrar"))==null?void 0:V.checked)??!1,alterar:((J=document.getElementById("perm-planos-alterar"))==null?void 0:J.checked)??!1,excluir:((W=document.getElementById("perm-planos-excluir"))==null?void 0:W.checked)??!1},financeiro:{acesso:((U=document.getElementById("perm-financeiro-acesso"))==null?void 0:U.checked)??!1,cadastrar:((Y=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:Y.checked)??!1,alterar:((Q=document.getElementById("perm-financeiro-alterar"))==null?void 0:Q.checked)??!1,excluir:((te=document.getElementById("perm-financeiro-excluir"))==null?void 0:te.checked)??!1},planosPagamento:{acesso:((Z=document.getElementById("perm-planosPagamento-acesso"))==null?void 0:Z.checked)??!1,cadastrar:((ee=document.getElementById("perm-planosPagamento-cadastrar"))==null?void 0:ee.checked)??!1,alterar:((ae=document.getElementById("perm-planosPagamento-alterar"))==null?void 0:ae.checked)??!1,excluir:((q=document.getElementById("perm-planosPagamento-excluir"))==null?void 0:q.checked)??!1},relatorios:{acesso:((re=document.getElementById("perm-relatorios-acesso"))==null?void 0:re.checked)??!1,gerar:((ne=document.getElementById("perm-relatorios-gerar"))==null?void 0:ne.checked)??!1},home:{acesso:((ge=document.getElementById("perm-home-acesso"))==null?void 0:ge.checked)??!1},auditoria:{acesso:((H=document.getElementById("perm-auditoria-acesso"))==null?void 0:H.checked)??!1},configuracoes:{acesso:((oe=document.getElementById("perm-configuracoes-acesso"))==null?void 0:oe.checked)??!1,alterar:((le=document.getElementById("perm-configuracoes-alterar"))==null?void 0:le.checked)??!1}};const h=(t==null?void 0:t.nome)||"Administrador";return P&&o?(M.updateUser(o.id,{nome:d,login:$,senha:v,papel:o.isSistema?"admin":b,permissoes:o.isSistema?Ae.admin:C},h),R("Usuário e permissões atualizados com sucesso!","success")):(M.addUser({nome:d,login:$,senha:v,papel:b,permissoes:C},h),R("Novo usuário cadastrado com sucesso!","success")),n(),!0}});const g=document.getElementById("user-papel"),m=document.getElementById("user-permissions-section"),r=(d,$,v)=>{const z=document.getElementById(`row-perm-${d}-${$}`),b=document.getElementById(`badge-perm-${d}-${$}`);z&&b&&(v?(z.style.background="rgba(34, 197, 94, 0.06)",z.style.borderColor="rgba(34, 197, 94, 0.25)",b.className="badge badge-success",b.textContent="Liberado"):(z.style.background="rgba(234, 67, 53, 0.04)",z.style.borderColor="rgba(234, 67, 53, 0.15)",b.className="badge badge-coral",b.textContent="Bloqueado")),f(d)},f=d=>{const $=document.getElementById(`group-counter-${d}`),v=xe.find(z=>z.key===d);if($&&v){let z=0;v.items.forEach(b=>{const i=document.getElementById(`perm-${d}-${b.key}`);i&&i.checked&&z++}),$.textContent=`${z}/${v.items.length} liberadas`}};g==null||g.addEventListener("change",()=>{const d=g.value;if(d==="admin")m.style.display="none";else if(m.style.display="block",!P){const $=Ae[d]||Ae.professor;xe.forEach(v=>{v.items.forEach(z=>{var i;const b=document.getElementById(`perm-${v.key}-${z.key}`);if(b){const C=((i=$[v.key])==null?void 0:i[z.key])??!1;b.checked=C,r(v.key,z.key,C)}})})}}),xe.forEach(d=>{const $=document.getElementById(`header-group-${d.key}`),v=document.getElementById(`group-body-${d.key}`),z=document.getElementById(`arrow-perm-${d.key}`);$==null||$.addEventListener("click",b=>{if(!b.target.closest(".btn-group-toggle")&&v&&z){const i=v.style.display==="flex";v.style.display=i?"none":"flex",z.style.transform=i?"rotate(0deg)":"rotate(180deg)"}}),d.items.forEach(b=>{const i=document.getElementById(`perm-${d.key}-${b.key}`);i==null||i.addEventListener("change",()=>{if(r(d.key,b.key,i.checked),i.checked&&b.key!=="acesso"){const C=document.getElementById(`perm-${d.key}-acesso`);C&&!C.checked&&(C.checked=!0,r(d.key,"acesso",!0))}!i.checked&&b.key==="acesso"&&d.items.forEach(C=>{if(C.key!=="acesso"){const h=document.getElementById(`perm-${d.key}-${C.key}`);h&&h.checked&&(h.checked=!1,r(d.key,C.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${d.key}"]`).forEach(b=>{b.addEventListener("click",i=>{i.stopPropagation();const C=d.items.map(p=>document.getElementById(`perm-${d.key}-${p.key}`)).filter(Boolean),h=C.every(p=>p.checked);C.forEach(p=>{p.checked=!h,r(d.key,p.dataset.action,!h)})})})}),(c=document.getElementById("btn-perm-expand"))==null||c.addEventListener("click",()=>{xe.forEach(d=>{const $=document.getElementById(`group-body-${d.key}`),v=document.getElementById(`arrow-perm-${d.key}`);$&&v&&($.style.display="flex",v.style.transform="rotate(180deg)")})}),(E=document.getElementById("btn-perm-collapse"))==null||E.addEventListener("click",()=>{xe.forEach(d=>{const $=document.getElementById(`group-body-${d.key}`),v=document.getElementById(`arrow-perm-${d.key}`);$&&v&&($.style.display="none",v.style.transform="rotate(0deg)")})}),(w=document.getElementById("btn-perm-all"))==null||w.addEventListener("click",()=>{xe.forEach(d=>{d.items.forEach($=>{const v=document.getElementById(`perm-${d.key}-${$.key}`);v&&(v.checked=!0,r(d.key,$.key,!0))})})}),(u=document.getElementById("btn-perm-none"))==null||u.addEventListener("click",()=>{xe.forEach(d=>{d.items.forEach($=>{const v=document.getElementById(`perm-${d.key}-${$.key}`);v&&(v.checked=!1,r(d.key,$.key,!1))})})})}return n(),e}function St(x){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s={column:"nome",direction:"asc"};const n=de(t,"planos","cadastrar"),L=de(t,"planos","alterar"),S=de(t,"planos","excluir");function o(){var g,m;const y=M.getPlans().filter(r=>{const f=a.toLowerCase();return r.nome.toLowerCase().includes(f)||r.descricao&&r.descricao.toLowerCase().includes(f)}),k=Ee(y,s,{nome:r=>r.nome,estrutura:r=>(r.modulos||[]).reduce((f,c)=>{var E;return f+(((E=c.aulas)==null?void 0:E.length)||0)},0),descricao:r=>r.descricao||""});e.innerHTML=`
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
          ${n?`
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
          <h3 class="panel-card-title">Planos Pedagógicos Cadastrados (${k.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${K("Plano de Ensino","nome",s,{extraStyle:"min-width: 160px;"})}
                ${K("Estrutura","estrutura",s,{align:"center",extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                ${K("Descrição","descricao",s,{extraClass:"col-hide-md"})}
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${k.length===0?`
                    <tr>
                      <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${a?"Nenhum plano de ensino encontrado para a busca.":"Nenhum plano pedagógico cadastrado ainda."}
                      </td>
                    </tr>
                  `:k.map(r=>{const f=(r.modulos||[]).length,c=(r.modulos||[]).reduce((E,w)=>{var u;return E+(((u=w.aulas)==null?void 0:u.length)||0)},0);return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${j.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${r.nome}
                                  </div>
                                  ${r.instrumento?`<span style="font-size: 0.72rem; color: var(--text-muted);">${r.instrumento}</span>`:""}
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${f} ${f===1?"módulo":"módulos"}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${c} ${c===1?"aula":"aulas"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${r.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${L?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${r.id}" title="Editar Plano e Módulos">
                                        ${j.edit}
                                      </button>
                                    `:""}
                                ${S?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${r.id}" title="Excluir Plano">
                                        ${j.trash}
                                      </button>
                                    `:""}
                                ${!L&&!S?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(g=e.querySelector("#btn-new-plan"))==null||g.addEventListener("click",()=>{P()});const B=e.querySelector("#plan-search-input");B&&B.addEventListener("input",r=>{a=r.target.value,o();const f=e.querySelector("#plan-search-input");f&&(f.focus(),f.setSelectionRange(f.value.length,f.value.length))}),(m=e.querySelector("#btn-clear-search"))==null||m.addEventListener("click",()=>{a="",o()}),we(e,s,r=>{s=r,o()}),e.querySelectorAll(".btn-edit-plan").forEach(r=>{r.addEventListener("click",f=>{const c=f.currentTarget.dataset.id,E=M.getPlans().find(w=>w.id===c);E&&P(E)})}),e.querySelectorAll(".btn-delete-plan").forEach(r=>{r.addEventListener("click",f=>{const c=f.currentTarget.dataset.id,E=M.getPlans().find(w=>w.id===c);E&&$e({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${E.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{M.deletePlan(E.id,(t==null?void 0:t.nome)||"Administrador"),R(`Plano de ensino "${E.nome}" excluído.`,"info"),o()}})})})}function P(l){const y=!!l;let k=l?JSON.parse(JSON.stringify(l.modulos||[])):[];k.forEach(r=>{Array.isArray(r.aulas)||(r.aulas=[])});function B(){return k.length===0?`
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); margin-top: 8px;">
            Nenhum módulo adicionado ainda. Digite o nome do módulo acima e clique em "Adicionar Módulo".
          </div>
        `:k.map((r,f)=>{const c=r.aulas||[];return`
            <div class="module-card-item" data-mod-idx="${f}" style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 8px;">
              <!-- Cabeçalho do Módulo -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px; flex: 1;">
                  <span class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 7px;">
                    Módulo ${f+1}
                  </span>
                  <input 
                    type="text" 
                    class="form-input input-module-title" 
                    data-mod-idx="${f}" 
                    value="${r.titulo}" 
                    placeholder="Título do módulo" 
                    style="font-size: 0.84rem; font-weight: 600; padding: 4px 8px; background: transparent; border-color: transparent; border-bottom: 1px dashed var(--border-subtle); width: 100%;"
                  />
                </div>

                <div style="display: flex; gap: 4px; align-items: center;">
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-up" data-mod-idx="${f}" title="Mover para cima" ${f===0?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▲
                  </button>
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-down" data-mod-idx="${f}" title="Mover para baixo" ${f===k.length-1?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▼
                  </button>
                  <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-mod-idx="${f}" title="Excluir Módulo" style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ${j.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo -->
              <div class="lessons-container" style="display: flex; flex-direction: column; gap: 5px; margin-left: 14px; border-left: 2px solid rgba(234, 67, 53, 0.2); padding-left: 10px;">
                ${c.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 4px 0;">Nenhuma aula cadastrada neste módulo.</div>':c.map((E,w)=>`
                            <div style="display: flex; align-items: center; gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
                              <span style="font-size: 0.72rem; color: var(--text-muted); min-width: 44px;">Aula ${w+1}:</span>
                              <input 
                                type="text" 
                                class="form-input input-lesson-title" 
                                data-mod-idx="${f}" 
                                data-aula-idx="${w}" 
                                value="${E.titulo}" 
                                placeholder="Título da aula" 
                                style="flex: 1; font-size: 0.78rem; padding: 2px 6px; background: transparent; border: none;"
                              />
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-up" data-mod-idx="${f}" data-aula-idx="${w}" title="Mover aula acima" ${w===0?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▲
                              </button>
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-down" data-mod-idx="${f}" data-aula-idx="${w}" title="Mover aula abaixo" ${w===c.length-1?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▼
                              </button>
                              <button type="button" class="btn btn-danger btn-icon-only btn-remove-lesson" data-mod-idx="${f}" data-aula-idx="${w}" title="Excluir Aula" style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ✕
                              </button>
                            </div>
                          `).join("")}

                <!-- Adicionar Aula ao Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="form-input input-new-lesson" 
                    data-mod-idx="${f}" 
                    placeholder="Título da nova aula (ex: Acorde Dó Maior)..." 
                    style="flex: 1; font-size: 0.76rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-add-lesson" 
                    data-mod-idx="${f}" 
                    style="font-size: 0.72rem; padding: 4px 10px; white-space: nowrap;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `}).join("")}const g=`
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
                value="${(l==null?void 0:l.nome)||""}" 
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
                value="${(l==null?void 0:l.instrumento)||""}" 
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
              value="${(l==null?void 0:l.descricao)||""}" 
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
                ${k.length} módulos
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
            ${B()}
          </div>
        </div>
      </form>
    `;fe({title:y?`Editar Plano de Ensino: ${l.nome}`:"Novo Plano de Ensino",bodyHtml:g,modalClass:"modal-lg",confirmText:y?"Salvar Plano":"Criar Plano",onConfirm:()=>{var u,d,$;const r=(u=document.getElementById("plan-nome"))==null?void 0:u.value.trim(),f=(d=document.getElementById("plan-instrumento"))==null?void 0:d.value.trim(),c=($=document.getElementById("plan-desc"))==null?void 0:$.value.trim();if(!r)return R("Preencha o nome do plano de ensino.","error"),!1;const E=k.map((v,z)=>({id:v.id||`mod_${Date.now()}_${z}`,ordem:z+1,titulo:v.titulo.trim()||`Módulo ${z+1}`,descricao:v.descricao,aulas:(v.aulas||[]).map((b,i)=>({id:b.id||`aul_${Date.now()}_${z}_${i}`,ordem:i+1,titulo:b.titulo.trim()||`Aula ${i+1}`,conteudo:b.conteudo,duracaoMinutos:b.duracaoMinutos}))})),w=(t==null?void 0:t.nome)||"Administrador";return y&&l?(M.updatePlan(l.id,{nome:r,descricao:c,instrumento:f||void 0,modulos:E},w),R(`Plano de ensino "${r}" atualizado!`,"success")):(M.addPlan({nome:r,descricao:c,instrumento:f||void 0,modulos:E},w),R(`Plano de ensino "${r}" cadastrado com sucesso!`,"success")),o(),!0}}),setTimeout(()=>{m()},50);function m(){const r=document.getElementById("plan-modules-list-container"),f=document.getElementById("modules-counter-badge");if(!r)return;const c=()=>{r.innerHTML=B(),f&&(f.textContent=`${k.length} módulos`),m()},E=document.getElementById("btn-quick-add-module"),w=document.getElementById("quick-add-module-input");E&&w&&(E.onclick=()=>{const u=w.value.trim();if(!u){R("Informe o nome do módulo.","error");return}k.push({id:`mod_${Date.now()}`,ordem:k.length+1,titulo:u,aulas:[]}),w.value="",c()},w.onkeydown=u=>{u.key==="Enter"&&(u.preventDefault(),E.click())}),r.querySelectorAll(".input-module-title").forEach(u=>{u.addEventListener("input",d=>{const $=parseInt(d.target.dataset.modIdx||"0",10);k[$]&&(k[$].titulo=d.target.value)})}),r.querySelectorAll(".btn-move-module-up").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10);if($>0){const v=k[$];k[$]=k[$-1],k[$-1]=v,c()}})}),r.querySelectorAll(".btn-move-module-down").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10);if($<k.length-1){const v=k[$];k[$]=k[$+1],k[$+1]=v,c()}})}),r.querySelectorAll(".btn-remove-module").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10);k.splice($,1),c()})}),r.querySelectorAll(".input-lesson-title").forEach(u=>{u.addEventListener("input",d=>{var z;const $=parseInt(d.target.dataset.modIdx||"0",10),v=parseInt(d.target.dataset.aulaIdx||"0",10);(z=k[$])!=null&&z.aulas[v]&&(k[$].aulas[v].titulo=d.target.value)})}),r.querySelectorAll(".btn-add-lesson").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10),v=r.querySelector(`.input-new-lesson[data-mod-idx="${$}"]`),z=v==null?void 0:v.value.trim();if(!z){R("Informe o título da aula.","error");return}k[$]&&(k[$].aulas.push({id:`aul_${Date.now()}`,ordem:k[$].aulas.length+1,titulo:z}),c())})}),r.querySelectorAll(".btn-move-lesson-up").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10),v=parseInt(d.currentTarget.dataset.aulaIdx||"0",10);if(k[$]&&v>0){const z=k[$].aulas,b=z[v];z[v]=z[v-1],z[v-1]=b,c()}})}),r.querySelectorAll(".btn-move-lesson-down").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10),v=parseInt(d.currentTarget.dataset.aulaIdx||"0",10);if(k[$]){const z=k[$].aulas;if(v<z.length-1){const b=z[v];z[v]=z[v+1],z[v+1]=b,c()}}})}),r.querySelectorAll(".btn-remove-lesson").forEach(u=>{u.addEventListener("click",d=>{const $=parseInt(d.currentTarget.dataset.modIdx||"0",10),v=parseInt(d.currentTarget.dataset.aulaIdx||"0",10);k[$]&&(k[$].aulas.splice(v,1),c())})})}}return o(),e}function It(x){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s="todas",n="todas";const L=de(t,"financeiro","cadastrar"),S=de(t,"financeiro","alterar"),o=de(t,"financeiro","excluir");function P(){var w;const y=M.getPaymentPlans(),k=y.filter(u=>{const d=a.toLowerCase(),$=u.nome.toLowerCase().includes(d)||u.modalidade.toLowerCase().includes(d)||u.periodicidade.toLowerCase().includes(d)||u.descricao&&u.descricao.toLowerCase().includes(d),v=s==="todas"||u.modalidade===s,z=n==="todas"||u.periodicidade===n;return $&&v&&z}),B=y.length,g=y.filter(u=>u.modalidade==="individual").length,m=y.filter(u=>u.modalidade==="turma").length,r=y.filter(u=>u.ativo).length;e.innerHTML=`
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
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${B}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(96, 165, 250, 0.15); color: #60a5fa; display: flex; align-items: center; justify-content: center;">
            👤
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Individual</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${g}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(168, 85, 247, 0.15); color: #c084fc; display: flex; align-items: center; justify-content: center;">
            👥
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Turma</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${m}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center;">
            ✓
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Planos Ativos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${r}</div>
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
            <option value="todas" ${n==="todas"?"selected":""}>Todas</option>
            <option value="mensal" ${n==="mensal"?"selected":""}>Mensal</option>
            <option value="trimestral" ${n==="trimestral"?"selected":""}>Trimestral</option>
            <option value="semestral" ${n==="semestral"?"selected":""}>Semestral</option>
          </select>
        </div>
      </div>

      <!-- Lista de Planos de Pagamento -->
      ${k.length===0?`
          <div class="card" style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;">💳</div>
            <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-white); margin-bottom: 6px;">Nenhum plano de pagamento encontrado</div>
            <div style="font-size: 0.85rem;">Tente ajustar seus filtros de busca ou crie um novo plano acima.</div>
          </div>
          `:`
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
            ${k.map(u=>{const d=u.descontoSegundaMatricula??0,$=d>0?u.valorMensal*(1-d/100):u.valorMensal,v=u.modalidade==="individual";return`
                <div class="card" style="padding: 18px; display: flex; flex-direction: column; justify-content: space-between; position: relative; border-top: 3px solid ${v?"#3b82f6":"#a855f7"};">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 6px;">
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: ${v?"rgba(59, 130, 246, 0.15)":"rgba(168, 85, 247, 0.15)"}; color: ${v?"#60a5fa":"#c084fc"};">
                            ${v?"👤 Individual":"👥 Turma"}
                          </span>
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); color: var(--text-secondary);">
                            ${u.periodicidade.toUpperCase()}
                          </span>
                        </div>
                        <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--text-white);">${u.nome}</h3>
                      </div>

                      <span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${u.ativo?"#22c55e":"#ef4444"};" title="${u.ativo?"Ativo":"Inativo"}"></span>
                    </div>

                    ${u.descricao?`<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0 0 14px 0; line-height: 1.4;">${u.descricao}</p>`:""}

                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; margin-bottom: 16px;">
                      <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; margin-bottom: 2px;">Valor Mensal Regular</div>
                      <div style="font-size: 1.45rem; font-weight: 800; color: #4ade80;">
                        R$ ${u.valorMensal.toFixed(2).replace(".",",")}
                        <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-secondary);">/mês</span>
                      </div>

                      ${d>0?`
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-secondary);">
                              2ª Matrícula / Familiar (${d}% sugerido):
                            </span>
                            <span style="font-size: 0.84rem; font-weight: 600; color: var(--text-white);">
                              R$ ${$.toFixed(2).replace(".",",")}/mês
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
                    ${S?`<button class="btn btn-secondary btn-sm btn-edit-pp" data-id="${u.id}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${j.edit} Editar
                           </button>`:""}
                    ${o?`<button class="btn btn-danger btn-sm btn-del-pp" data-id="${u.id}" data-name="${u.nome}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${j.trash} Excluir
                           </button>`:""}
                  </div>
                </div>
                `}).join("")}
          </div>
          `}
    `;const f=e.querySelector("#pp-search");f==null||f.addEventListener("input",u=>{a=u.target.value,P()});const c=e.querySelector("#pp-filter-mod");c==null||c.addEventListener("change",u=>{s=u.target.value,P()});const E=e.querySelector("#pp-filter-per");E==null||E.addEventListener("change",u=>{n=u.target.value,P()}),(w=e.querySelector("#btn-novo-plano-pagamento"))==null||w.addEventListener("click",()=>{l()}),e.querySelectorAll(".btn-edit-pp").forEach(u=>{u.addEventListener("click",d=>{const $=d.currentTarget.dataset.id;if($){const v=M.getPaymentPlanById($);v&&l(v)}})}),e.querySelectorAll(".btn-del-pp").forEach(u=>{u.addEventListener("click",d=>{const $=d.currentTarget.dataset.id,v=d.currentTarget.dataset.name;$&&$e({title:"Excluir Plano de Pagamento",message:`Deseja realmente excluir o plano de pagamento "<strong>${v}</strong>"?<br><small style="color: var(--text-secondary);">Alunos vinculados continuarão com seu histórico financeiro.</small>`,onConfirm:()=>{M.deletePaymentPlan($,(t==null?void 0:t.nome)||"Administrador"),R(`Plano de pagamento "${v}" excluído com sucesso!`,"info"),P()}})})})}function l(y){const k=!!y,B=(t==null?void 0:t.nome)||"Administrador",g=`
      <form id="form-payment-plan" style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-nome">Nome do Plano de Pagamento *</label>
          <input type="text" id="pp-nome" class="form-input" placeholder="Ex: Mensal Individual, Semestral Turma" value="${(y==null?void 0:y.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-modalidade">Modalidade *</label>
            <select id="pp-modalidade" class="form-select" required>
              <option value="individual" ${(y==null?void 0:y.modalidade)==="individual"?"selected":""}>Individual</option>
              <option value="turma" ${(y==null?void 0:y.modalidade)==="turma"?"selected":""}>Turma</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-periodicidade">Periodicidade / Ciclo *</label>
            <select id="pp-periodicidade" class="form-select" required>
              <option value="mensal" ${(y==null?void 0:y.periodicidade)==="mensal"?"selected":""}>Mensal</option>
              <option value="trimestral" ${(y==null?void 0:y.periodicidade)==="trimestral"?"selected":""}>Trimestral</option>
              <option value="semestral" ${(y==null?void 0:y.periodicidade)==="semestral"?"selected":""}>Semestral</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-valor">Valor Mensal (R$) *</label>
            <input type="text" id="pp-valor" class="form-input" placeholder="0,00" value="${y?y.valorMensal.toFixed(2).replace(".",","):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-desconto-segunda">Desconto 2ª Matrícula / Familiar (%)</label>
            <input type="number" id="pp-desconto-segunda" class="form-input" min="0" max="100" value="${(y==null?void 0:y.descontoSegundaMatricula)??20}" />
            <small style="font-size: 0.72rem; color: var(--text-secondary);">Opcional. Percentual sugerido de desconto (0 para nenhum).</small>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-desc">Descrição / Observações</label>
          <textarea id="pp-desc" class="form-textarea" rows="2" placeholder="Regras do plano, benefícios ou detalhes...">${(y==null?void 0:y.descricao)||""}</textarea>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
          <input type="checkbox" id="pp-ativo" style="accent-color: var(--color-coral); cursor: pointer;" ${y?y.ativo?"checked":"":"checked"} />
          <label for="pp-ativo" style="font-size: 0.85rem; color: var(--text-white); cursor: pointer; user-select: none;">
            Plano Ativo para Novas Matrículas
          </label>
        </div>
      </form>
    `;fe({title:k?"Editar Plano de Pagamento":"Novo Plano de Pagamento",bodyHtml:g,confirmText:k?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{var z,b,i,C,h,p,T;const m=(z=document.getElementById("pp-nome"))==null?void 0:z.value.trim(),r=(b=document.getElementById("pp-modalidade"))==null?void 0:b.value,f=(i=document.getElementById("pp-periodicidade"))==null?void 0:i.value,c=(C=document.getElementById("pp-valor"))==null?void 0:C.value.trim(),E=(h=document.getElementById("pp-desconto-segunda"))==null?void 0:h.value,w=parseFloat(E),u=!isNaN(w)&&w>=0?w:0,d=(p=document.getElementById("pp-desc"))==null?void 0:p.value.trim(),$=((T=document.getElementById("pp-ativo"))==null?void 0:T.checked)??!0;if(!m)return R("Preencha o nome do plano de pagamento.","error"),!1;const v=qe(c);return isNaN(v)||v<=0?(R("Informe um valor mensal válido superior a zero.","error"),!1):(k&&y?(M.updatePaymentPlan(y.id,{nome:m,modalidade:r,periodicidade:f,valorMensal:v,descontoSegundaMatricula:u,descricao:d,ativo:$},B),R(`Plano de pagamento "${m}" atualizado com sucesso!`,"success")):(M.addPaymentPlan({nome:m,modalidade:r,periodicidade:f,valorMensal:v,descontoSegundaMatricula:u,descricao:d,ativo:$},B),R(`Plano de pagamento "${m}" criado com sucesso!`,"success")),P(),!0)}}),setTimeout(()=>{const m=document.getElementById("pp-valor");m&&me(m,Se)},50)}return P(),e}function Ct(x){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s="todos",n=new Date,L={column:"vencimento",direction:"desc"};const S=de(t,"financeiro","cadastrar"),o=de(t,"financeiro","alterar"),P=de(t,"financeiro","excluir");function l(){var i,C,h,p,T,F,O,G;const g=M.getPayments(),m=M.getStudents(),r=new Date,f=n!==null&&r.getMonth()===n.getMonth()&&r.getFullYear()===n.getFullYear(),c=n?`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`:"",E=g.filter(A=>A.status==="pago").reduce((A,D)=>A+D.valor,0),w=g.filter(A=>A.status==="pendente").reduce((A,D)=>A+D.valor,0),u=g.filter(A=>A.status==="atrasado").reduce((A,D)=>A+D.valor,0),d=m.filter(A=>A.status==="ativo"&&M.isStudentOverdue(A.id)),$=g.filter(A=>{const D=m.find(U=>U.id===A.alunoId),_=D?D.nome.toLowerCase():"",N=A.descricao.toLowerCase(),V=_.includes(a.toLowerCase())||N.includes(a.toLowerCase())||A.mesReferencia&&A.mesReferencia.includes(a),J=s==="todos"||A.status===s,W=!c||A.mesReferencia===c||A.dataVencimento.startsWith(c);return V&&J&&W}),v=Ee($,L,{aluno:A=>{const D=m.find(_=>_.id===A.alunoId);return(D==null?void 0:D.nome)||""},descricao:A=>A.descricao,vencimento:A=>A.dataVencimento,valor:A=>A.valor,status:A=>A.status});e.innerHTML=`
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
            R$ ${E.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${g.filter(A=>A.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${w.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${g.filter(A=>A.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${u.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${g.filter(A=>A.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${d.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${m.filter(A=>A.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${d.length===0?"✓ 100% em dia":"Requer acompanhamento"}
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Período (Mês) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${n?`Mensalidade / ${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`:"Todas as Mensalidades"}
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
          <button type="button" class="btn ${n===null?"btn-primary":"btn-secondary"}" id="fin-btn-all-months" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os lançamentos sem filtrar por mês">
            Ver Todos
          </button>
        </div>
      </div>

      <!-- Barra de Filtros Rápidos por Botão -->
      <div style="margin-bottom: 12px; display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
        <button type="button" class="btn btn-sm ${s==="todos"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="todos" style="font-size: 0.76rem; padding: 6px 12px;">
          Todos (${g.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="atrasado"?"btn-danger":"btn-secondary"} btn-quick-filter" data-status="atrasado" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="atrasado"?"color: #f87171; border-color: rgba(239, 68, 68, 0.3);":""}">
          ⚠️ Inadimplentes (${d.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${g.filter(A=>A.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${g.filter(A=>A.status==="pago").length})
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

      ${s==="atrasado"&&d.length>0?`
            <!-- Painel de Inadimplência Responsivo e Otimizado -->
            <div style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-md); padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                <div style="font-size: 0.88rem; font-weight: 700; color: #f87171; display: flex; align-items: center; gap: 8px;">
                  <span>⚠️</span> Painel de Alunos Inadimplentes (${d.length})
                </div>
                <span style="font-size: 0.74rem; color: var(--text-muted);">
                  Acesso rápido para contato e regularização
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                ${d.map(A=>{const D=g.filter(U=>U.alunoId===A.id&&U.status==="atrasado"),_=D.reduce((U,Y)=>U+Y.valor,0),N=(A.telefone||"").replace(/\D/g,""),V=N.length<=11?`55${N}`:N,J=encodeURIComponent(`Olá, ${A.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),W=N?`https://wa.me/${V}?text=${J}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${A.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${D.length} fatura(s) atrasada(s) &bull; R$ ${_.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${A.telefone||"Sem telefone"}
                          </div>
                        </div>
                        ${W?`
                              <a href="${W}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; padding: 4px 8px; flex-shrink: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${v.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${K("Aluno","aluno",L,{extraStyle:"min-width: 140px;"})}
                ${K("Descrição / Referência","descricao",L,{extraClass:"col-hide-md"})}
                ${K("Vencimento","vencimento",L,{extraClass:"col-hide-sm",extraStyle:"width: 140px;"})}
                ${K("Valor","valor",L,{extraStyle:"width: 110px;"})}
                ${K("Status","status",L,{extraClass:"col-hide-xs",extraStyle:"width: 110px;"})}
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${v.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':v.map(A=>{const D=m.find(J=>J.id===A.alunoId),_=A.status==="pago",N=A.status==="atrasado";let V="";return _?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':N?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${D!=null&&D.nome?D.nome[0]:"?"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${(D==null?void 0:D.nome)||"Aluno não identificado"}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${A.descricao}${A.mesReferencia?` / ${A.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${N?"#f87171":"var(--text-white)"}; font-weight: ${N?"700":"normal"};">
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
                                ${!_&&o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${A.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${j.check}
                                      </button>
                                    `:""}

                                ${_?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${A.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${A.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${j.edit}
                                      </button>
                                    `:""}

                                ${P?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${A.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(i=e.querySelector("#fin-btn-prev-month"))==null||i.addEventListener("click",()=>{n||(n=new Date),n=new Date(n.getFullYear(),n.getMonth()-1,1),l()}),(C=e.querySelector("#fin-btn-next-month"))==null||C.addEventListener("click",()=>{n||(n=new Date),n=new Date(n.getFullYear(),n.getMonth()+1,1),l()}),(h=e.querySelector("#fin-btn-current-month"))==null||h.addEventListener("click",()=>{n=new Date,l()}),(p=e.querySelector("#fin-btn-all-months"))==null||p.addEventListener("click",()=>{n=null,l()}),we(e,L,A=>{L=A,l()});const z=e.querySelector("#fin-search-input");z==null||z.addEventListener("input",A=>{a=A.target.value,l();const D=e.querySelector("#fin-search-input");D&&(D.focus(),D.selectionStart=D.selectionEnd=D.value.length)}),(T=e.querySelector("#btn-clear-fin-search"))==null||T.addEventListener("click",()=>{a="",l()});const b=e.querySelector("#fin-status-filter");b==null||b.addEventListener("change",()=>{s=b.value,l()}),e.querySelectorAll(".btn-quick-filter").forEach(A=>{A.addEventListener("click",D=>{s=D.currentTarget.dataset.status,l()})}),(F=e.querySelector("#btn-limpar-status"))==null||F.addEventListener("click",()=>{s="todos",l()}),(O=e.querySelector("#btn-gerar-lote"))==null||O.addEventListener("click",()=>{k()}),(G=e.querySelector("#btn-novo-lancamento"))==null||G.addEventListener("click",()=>{B()}),e.querySelectorAll(".btn-action-baixa").forEach(A=>{A.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,N=g.find(V=>V.id===_);N&&y(N)})}),e.querySelectorAll(".btn-action-recibo").forEach(A=>{A.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,N=g.find(V=>V.id===_);if(N){const V=m.find(J=>J.id===N.alunoId);V&&st(N,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(A=>{A.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,N=g.find(V=>V.id===_);N&&B(N)})}),e.querySelectorAll(".btn-action-delete").forEach(A=>{A.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,N=g.find(V=>V.id===_);N&&$e({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${N.descricao}</strong>" no valor de <strong>R$ ${N.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{M.deletePayment(N.id,(t==null?void 0:t.nome)||"Administrador"),R("Lançamento excluído com sucesso!","info"),l()}})})})}function y(g){const m=M.getStudents().find(c=>c.id===g.alunoId),r=M.getTodayDateString(),f=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${g.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${g.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(m==null?void 0:m.nome)||"N/A"}</strong> &bull; Vencimento: ${g.dataVencimento.split("-").reverse().join("/")}
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
    `;fe({title:"Confirmar Baixa de Pagamento",bodyHtml:f,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const c=document.getElementById("modal-baixa-data").value,E=document.getElementById("modal-baixa-forma").value,w=document.getElementById("modal-baixa-obs").value;return c?(M.darBaixaPayment(g.id,c,E,(t==null?void 0:t.nome)||"Administrador",w),R(`Baixa efetuada com sucesso! R$ ${g.valor.toFixed(2)} recebido.`,"success"),l(),!0):(R("Informe a data de recebimento.","error"),!1)}})}function k(){const g=new Date,m=g.getFullYear(),r=g.getMonth()+1,f=`
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
    `;fe({title:"Gerar Mensalidades em Lote",bodyHtml:f,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const c=parseInt(document.getElementById("lote-ano").value,10),E=parseInt(document.getElementById("lote-mes").value,10);if(!c||!E)return R("Selecione ano e mês válidos.","error"),!1;const w=M.gerarMensalidadesMes(c,E,(t==null?void 0:t.nome)||"Administrador");return w.criadas===0&&w.puladas>0?R(`Todas as ${w.puladas} mensalidades deste mês já estavam criadas!`,"info"):R(`Sucesso: ${w.criadas} mensalidade(s) gerada(s)! (${w.puladas} já existentes puladas)`,"success"),l(),!0}})}function B(g){const m=!!g,r=M.getStudents(),f=M.getTodayDateString(),c=r.map(w=>`<option value="${w.id}" ${(g==null?void 0:g.alunoId)===w.id?"selected":""}>${w.nome} (${w.instrumentoPrincipal||"Geral"})</option>`).join(""),E=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${m?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${c}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(g==null?void 0:g.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (AAAA-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" maxlength="7" value="${(g==null?void 0:g.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="text" id="pay-valor" class="form-input" placeholder="0,00" value="${g?Se(g.valor):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(g==null?void 0:g.dataVencimento)||f}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(g==null?void 0:g.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(g==null?void 0:g.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(g==null?void 0:g.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(g==null?void 0:g.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="cartao_credito" ${(g==null?void 0:g.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(g==null?void 0:g.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="dinheiro" ${(g==null?void 0:g.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="boleto" ${(g==null?void 0:g.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(g==null?void 0:g.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(g==null?void 0:g.observacoes)||""}" />
        </div>
      </form>
    `;fe({title:m?"Editar Lançamento":"Novo Lançamento Financeiro",bodyHtml:E,modalClass:"modal-md",confirmText:m?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const w=m&&g?g.alunoId:document.getElementById("pay-aluno").value,u=document.getElementById("pay-desc").value.trim(),d=document.getElementById("pay-mes").value.trim()||void 0,$=document.getElementById("pay-valor").value,v=qe($),z=document.getElementById("pay-vencimento").value,b=document.getElementById("pay-status").value,i=document.getElementById("pay-forma").value||void 0,C=document.getElementById("pay-obs").value.trim()||void 0;if(!w)return R("Selecione um aluno.","error"),!1;if(!u)return R("Informe a descrição do lançamento.","error"),!1;if(d&&!/^\d{4}-\d{2}$/.test(d))return R("Mês de referência deve estar no formato AAAA-MM (Ex: 2026-10).","error"),!1;if(v<=0)return R("Informe um valor válido maior que zero.","error"),!1;if(!z)return R("Informe a data de vencimento.","error"),!1;const h=(t==null?void 0:t.nome)||"Administrador";let p=b;return p!=="pago"&&(p=z<f?"atrasado":"pendente"),m&&g?(M.updatePayment(g.id,{descricao:u,mesReferencia:d,valor:v,dataVencimento:z,status:p,formaPagamento:i,dataPagamento:p==="pago"?g.dataPagamento||f:void 0,observacoes:C},h),R("Lançamento atualizado com sucesso!","success")):(M.addPayment({alunoId:w,descricao:u,mesReferencia:d,valor:v,dataVencimento:z,status:p,formaPagamento:i,dataPagamento:p==="pago"?f:void 0,observacoes:C},h),R("Novo lançamento cadastrado com sucesso!","success")),l(),!0}}),setTimeout(()=>{const w=document.getElementById("pay-mes");w&&me(w,mt);const u=document.getElementById("pay-valor");u&&me(u,Se);const d=document.getElementById("pay-vencimento"),$=document.getElementById("pay-status");if(d==null||d.addEventListener("change",()=>{$&&$.value!=="pago"&&($.value=d.value<f?"atrasado":"pendente")}),!m){const v=document.getElementById("pay-aluno");v==null||v.addEventListener("change",()=>{const z=r.find(b=>b.id===v.value);if(z){const b=document.getElementById("pay-valor");b&&typeof z.valorMensalidade=="number"&&(b.value=Se(z.valorMensalidade))}})}},50)}return l(),e}function kt(x){const e=document.createElement("div"),t=ie.getCurrentUser(),a=de(t,"relatorios","gerar");let s="alunos",n="todos",L="todos",S="todos",o="todos",P="todos",l="nome_asc",y={column:"nome",direction:"asc"},k="",B="",g="",m="",r="todos",f="todos",c="todos",E="vencimento_asc",w={column:"vencimento",direction:"asc"};function u(){var te,Z,ee,ae,q,re,ne,ge,H,oe,le,ce,pe,Ie,he,je,Oe,Ve,He;const b=M.getSettings(),i=M.getStudents(),C=M.getPlans(),h=M.getPayments(),p=Array.from(new Set(i.map(I=>I.instrumentoPrincipal).filter(Boolean))).sort();let T=i.filter(I=>{if(n!=="todos"&&I.status!==n||L!=="todos"&&I.instrumentoPrincipal!==L||S!=="todos"&&I.nivelMusical!==S||o!=="todos"&&I.planoId!==o)return!1;if(P!=="todos"){const se=M.isStudentOverdue(I.id);if(P==="em_dia"&&se||P==="atrasado"&&!se)return!1}return!0});T=Ee(T,y,{nome:I=>I.nome,instrumento:I=>I.instrumentoPrincipal||"",contato:I=>I.telefone||"",plano:I=>{var se;return((se=C.find(ve=>ve.id===I.planoId))==null?void 0:se.nome)||""},status:I=>I.status,mensalidade:I=>M.isStudentOverdue(I.id)?1:0,criadoEm:I=>I.criadoEm||""});const F=T.length,O=T.filter(I=>I.status==="ativo").length,G=T.filter(I=>I.status==="inativo").length,A=T.filter(I=>M.isStudentOverdue(I.id)).length,D=new Date().toISOString().slice(0,10);let _=h.filter(I=>{if(k&&I.dataVencimento<k||B&&I.dataVencimento>B)return!1;const se=I.mesReferencia||I.dataVencimento.slice(0,7);if(g&&se<g||m&&se>m||f!=="todos"&&I.alunoId!==f||c!=="todos"&&I.formaPagamento!==c)return!1;const ve=I.status!=="pago"&&I.dataVencimento<D;return!(r==="pago"&&I.status!=="pago"||r==="pendente"&&(I.status==="pago"||ve)||r==="atrasado"&&!ve)});const N=new Map(i.map(I=>[I.id,I.nome]));_=Ee(_,w,{aluno:I=>N.get(I.alunoId)||"",descricao:I=>I.descricao,vencimento:I=>I.dataVencimento,valor:I=>I.valor,status:I=>I.status==="pago"?"pago":I.dataVencimento<D?"atrasado":"pendente"});const V=_.length,J=_.reduce((I,se)=>I+se.valor,0),W=_.filter(I=>I.status==="pago").reduce((I,se)=>I+se.valor,0),U=_.filter(I=>I.status!=="pago").reduce((I,se)=>I+se.valor,0);e.innerHTML=`
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
                <option value="todos" ${n==="todos"?"selected":""}>Todos os Status</option>
                <option value="ativo" ${n==="ativo"?"selected":""}>Somente Ativos</option>
                <option value="inativo" ${n==="inativo"?"selected":""}>Somente Inativos</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Instrumento</label>
              <select id="filtro-aluno-instrumento" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${L==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${p.map(I=>`<option value="${I}" ${L===I?"selected":""}>${I}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Nível Musical</label>
              <select id="filtro-aluno-nivel" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${S==="todos"?"selected":""}>Todos os Níveis</option>
                <option value="iniciante" ${S==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${S==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${S==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${S==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Plano de Ensino</label>
              <select id="filtro-aluno-plano" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${o==="todos"?"selected":""}>Todos os Planos</option>
                ${C.map(I=>`<option value="${I.id}" ${o===I.id?"selected":""}>${I.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Situação Financeira</label>
              <select id="filtro-aluno-financeiro" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${P==="todos"?"selected":""}>Todos</option>
                <option value="em_dia" ${P==="em_dia"?"selected":""}>Em Dia</option>
                <option value="atrasado" ${P==="atrasado"?"selected":""}>Com Mensalidade em Atraso</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-aluno-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="nome_asc" ${l==="nome_asc"?"selected":""}>Nome (A → Z)</option>
                <option value="nome_desc" ${l==="nome_desc"?"selected":""}>Nome (Z → A)</option>
                <option value="data_desc" ${l==="data_desc"?"selected":""}>Matrícula Mais Recente</option>
                <option value="data_asc" ${l==="data_asc"?"selected":""}>Matrícula Mais Antiga</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores de Alunos (2 em cima, 2 em baixo) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Total Localizado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${F}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${O}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${G}</div>
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
              Prévia do Relatório de Alunos (${T.length} registros)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  ${K("Aluno","nome",y,{extraStyle:"min-width: 140px;"})}
                  ${K("Instrumento","instrumento",y,{extraClass:"col-hide-md",extraStyle:"width: 170px;"})}
                  ${K("Contato","contato",y,{extraClass:"col-hide-sm",extraStyle:"width: 130px;"})}
                  ${K("Plano","plano",y,{extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                  ${K("Status","status",y,{extraClass:"col-hide-xs",extraStyle:"width: 100px;"})}
                  ${K("Mensalidade","mensalidade",y,{extraStyle:"width: 120px;"})}
                </tr>
              </thead>
              <tbody>
                ${T.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':T.map(I=>{const se=C.find(rt=>rt.id===I.planoId),ve=I.status==="ativo",nt=M.isStudentOverdue(I.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${I.nome}</td>
                              <td class="col-hide-md">${I.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${I.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(se==null?void 0:se.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${ve?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${ve?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${nt?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${k}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${B}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${g}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${m}" />
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
                <option value="todos" ${f==="todos"?"selected":""}>Todos os Alunos</option>
                ${i.map(I=>`<option value="${I.id}" ${f===I.id?"selected":""}>${I.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${c==="todos"?"selected":""}>Todas as Formas</option>
                <option value="pix" ${c==="pix"?"selected":""}>PIX</option>
                <option value="cartao_credito" ${c==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
                <option value="cartao_debito" ${c==="cartao_debito"?"selected":""}>Cartão de Débito</option>
                <option value="boleto" ${c==="boleto"?"selected":""}>Boleto</option>
                <option value="dinheiro" ${c==="dinheiro"?"selected":""}>Dinheiro</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-fin-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="vencimento_asc" ${E==="vencimento_asc"?"selected":""}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${E==="vencimento_desc"?"selected":""}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${E==="valor_desc"?"selected":""}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${E==="aluno_asc"?"selected":""}>Nome do Aluno (A → Z)</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${W.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Pendente / Atrasado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">R$ ${U.toFixed(2)}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Financeiro -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório Financeiro (${_.length} lançamentos)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  ${K("Aluno","aluno",w,{extraStyle:"min-width: 140px;"})}
                  ${K("Descrição","descricao",w,{extraClass:"col-hide-md",extraStyle:"width: 180px;"})}
                  ${K("Vencimento","vencimento",w,{extraClass:"col-hide-sm",extraStyle:"width: 130px;"})}
                  ${K("Valor","valor",w,{extraStyle:"width: 110px;"})}
                  ${K("Status","status",w,{extraClass:"col-hide-xs",extraStyle:"width: 100px;"})}
                </tr>
              </thead>
              <tbody>
                ${_.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':_.map(I=>{const se=I.status==="pago",ve=!se&&I.dataVencimento<D;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${N.get(I.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${I.descricao}${I.mesReferencia?` / ${I.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${I.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${I.valor.toFixed(2)}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${se?"badge-success":ve?"badge-coral":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${se?"Pago":ve?"Atrasado":"Pendente"}
                                </span>
                              </td>
                            </tr>
                          `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,(te=e.querySelector("#btn-tab-rel-alunos"))==null||te.addEventListener("click",()=>{s="alunos",u()}),(Z=e.querySelector("#btn-tab-rel-financeiro"))==null||Z.addEventListener("click",()=>{s="financeiro",u()}),(ee=e.querySelector("#filtro-aluno-status"))==null||ee.addEventListener("change",I=>{n=I.target.value,u()}),(ae=e.querySelector("#filtro-aluno-instrumento"))==null||ae.addEventListener("change",I=>{L=I.target.value,u()}),(q=e.querySelector("#filtro-aluno-nivel"))==null||q.addEventListener("change",I=>{S=I.target.value,u()}),(re=e.querySelector("#filtro-aluno-plano"))==null||re.addEventListener("change",I=>{o=I.target.value,u()}),(ne=e.querySelector("#filtro-aluno-financeiro"))==null||ne.addEventListener("change",I=>{P=I.target.value,u()}),(ge=e.querySelector("#filtro-aluno-ordem"))==null||ge.addEventListener("change",I=>{l=I.target.value,u()}),(H=e.querySelector("#btn-limpar-filtros-alunos"))==null||H.addEventListener("click",()=>{n="todos",L="todos",S="todos",o="todos",P="todos",l="nome_asc",u()}),(oe=e.querySelector("#filtro-fin-dataini"))==null||oe.addEventListener("change",I=>{k=I.target.value,u()}),(le=e.querySelector("#filtro-fin-datafim"))==null||le.addEventListener("change",I=>{B=I.target.value,u()}),(ce=e.querySelector("#filtro-fin-mesref-ini"))==null||ce.addEventListener("change",I=>{g=I.target.value,u()}),(pe=e.querySelector("#filtro-fin-mesref-fim"))==null||pe.addEventListener("change",I=>{m=I.target.value,u()}),(Ie=e.querySelector("#filtro-fin-status"))==null||Ie.addEventListener("change",I=>{r=I.target.value,u()}),(he=e.querySelector("#filtro-fin-aluno"))==null||he.addEventListener("change",I=>{f=I.target.value,u()}),(je=e.querySelector("#filtro-fin-metodo"))==null||je.addEventListener("change",I=>{c=I.target.value,u()}),(Oe=e.querySelector("#filtro-fin-ordem"))==null||Oe.addEventListener("change",I=>{E=I.target.value,u()}),(Ve=e.querySelector("#btn-limpar-filtros-fin"))==null||Ve.addEventListener("click",()=>{k="",B="",g="",m="",r="todos",f="todos",c="todos",E="vencimento_asc",u()}),(He=e.querySelector("#btn-gerar-pdf"))==null||He.addEventListener("click",async()=>{if(!a){R("Você não possui permissão para emitir relatórios.","error");return}const I=e.querySelector("#btn-gerar-pdf"),se=I?I.innerHTML:"";I&&(I.disabled=!0,I.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await v(b,T,C):await z(b,_,i,{mesIni:g,mesFim:m}),R("PDF gerado com sucesso!","success")}catch(ve){console.error("Erro ao gerar PDF:",ve),R("Ocorreu um erro ao gerar o documento PDF.","error")}finally{I&&(I.disabled=!1,I.innerHTML=se)}});const Y=e.querySelector("#tab-rel-alunos table");Y&&we(Y,y,I=>{y=I,u()});const Q=e.querySelector("#tab-rel-financeiro table");Q&&we(Q,w,I=>{w=I,u()})}function d(b){return new Promise(i=>{if(b&&b.trim()!==""){const C=new Image;C.crossOrigin="Anonymous",C.onload=()=>{try{const h=document.createElement("canvas");h.width=160,h.height=160;const p=h.getContext("2d");if(!p){i(b);return}const T=24;p.fillStyle="#ffffff",p.beginPath(),p.moveTo(T,0),p.lineTo(160-T,0),p.quadraticCurveTo(160,0,160,T),p.lineTo(160,160-T),p.quadraticCurveTo(160,160,160-T,160),p.lineTo(T,160),p.quadraticCurveTo(0,160,0,160-T),p.lineTo(0,T),p.quadraticCurveTo(0,0,T,0),p.closePath(),p.fill();const F=12,O=160-F*2,G=160-F*2;let A=O,D=G;const _=C.width/C.height;_>1?D=O/_:A=G*_;const N=F+(O-A)/2,V=F+(G-D)/2;p.drawImage(C,N,V,A,D),i(h.toDataURL("image/png"))}catch{i(b)}},C.onerror=()=>{$().then(i)},C.src=b;return}$().then(i)})}function $(){return new Promise(b=>{try{const i=document.createElement("canvas");i.width=160,i.height=160;const C=i.getContext("2d");if(!C){b("");return}const h=32;C.fillStyle="#181c2b",C.beginPath(),C.moveTo(h,0),C.lineTo(160-h,0),C.quadraticCurveTo(160,0,160,h),C.lineTo(160,160-h),C.quadraticCurveTo(160,160,160-h,160),C.lineTo(h,160),C.quadraticCurveTo(0,160,0,160-h),C.lineTo(0,h),C.quadraticCurveTo(0,0,h,0),C.closePath(),C.fill(),C.lineWidth=3,C.strokeStyle="#2d3748",C.stroke();const p=new Image,T=`
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
        `,F=new Blob([T],{type:"image/svg+xml;charset=utf-8"}),O=URL.createObjectURL(F);p.onload=()=>{C.drawImage(p,20,20,120,120),URL.revokeObjectURL(O),b(i.toDataURL("image/png"))},p.onerror=()=>{URL.revokeObjectURL(O),b("")},p.src=O}catch{b("")}})}async function v(b,i,C){const h=new Ue({orientation:"portrait",unit:"mm",format:"a4"}),p=new Date().toLocaleString("pt-BR"),T=b.nomeMenu||b.nomeFantasia||b.nomeEscola||"ACUSTICAMENTE",F=b.razaoSocial||"Acusticamente Ensino Musical Ltda",O=b.cnpj?`CNPJ: ${b.cnpj}`:"",G=[b.telefoneContato,b.emailContato].filter(Boolean).join(" • "),A=[b.logradouro?`${b.logradouro}, ${b.numero||"s/n"}`:"",b.complemento,b.bairro,b.cidade?`${b.cidade} - ${b.estado||"SP"}`:"",b.cep?`CEP: ${b.cep}`:""].filter(Boolean).join(" • "),D=await d(b.logotipoCustomizado);D&&h.addImage(D,"PNG",14,12,17,17);const _=D?35:14;h.setFont("helvetica","bold"),h.setFontSize(13),h.setTextColor(15,23,42),h.text(T,_,17),h.setFont("helvetica","normal"),h.setFontSize(8),h.setTextColor(71,85,105),h.text([F,O].filter(Boolean).join(" • "),_,21.5),h.setFontSize(7.5),h.setTextColor(100,116,139),A&&h.text(A,_,25.5),G&&h.text(G,_,A?29.5:25.5),h.setFont("helvetica","bold"),h.setFontSize(12),h.setTextColor(217,72,59),h.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),h.setFont("helvetica","normal"),h.setFontSize(8),h.setTextColor(100,116,139),h.text(`Emissão: ${p}`,196,22,{align:"right"}),h.text(`Total: ${i.length} aluno(s)`,196,26.5,{align:"right"}),h.setDrawColor(203,213,225),h.setLineWidth(.4),h.line(14,33,196,33);const N=i.filter(q=>q.status==="ativo").length,V=i.filter(q=>q.status==="inativo").length,J=i.filter(q=>M.isStudentOverdue(q.id)).length,W=[{label:"TOTAL DE ALUNOS",value:`${i.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${N}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${J}`,color:[220,38,38]}],U=43,Y=12,Q=36;W.forEach((q,re)=>{const ne=14+re*(U+3);h.setFillColor(248,250,252),h.roundedRect(ne,Q,U,Y,1.5,1.5,"F"),h.setDrawColor(226,232,240),h.roundedRect(ne,Q,U,Y,1.5,1.5,"S"),h.setFont("helvetica","bold"),h.setFontSize(6.5),h.setTextColor(100,116,139),h.text(q.label,ne+3,Q+4),h.setFontSize(10.5),h.setTextColor(q.color[0],q.color[1],q.color[2]),h.text(q.value,ne+3,Q+9.5)});const te=i.map((q,re)=>{const ne=C.find(oe=>oe.id===q.planoId),ge=q.status==="ativo",H=M.isStudentOverdue(q.id);return[(re+1).toString(),q.nome,q.instrumentoPrincipal||"Música Geral",q.telefone||"-",(ne==null?void 0:ne.nome)||"-",ge?"Ativo":"Inativo",H?"Atrasado":"Em dia"]});Ge(h,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:te.length>0?te:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:q=>{q.section==="body"&&(q.column.index===5&&(q.cell.raw==="Ativo"?(q.cell.styles.textColor=[22,163,74],q.cell.styles.fontStyle="bold"):q.cell.styles.textColor=[202,138,4]),q.column.index===6&&(q.cell.raw==="Atrasado"?(q.cell.styles.textColor=[220,38,38],q.cell.styles.fontStyle="bold"):q.cell.styles.textColor=[22,163,74]))}});const Z=h.internal.getNumberOfPages();for(let q=1;q<=Z;q++)h.setPage(q),h.setDrawColor(226,232,240),h.setLineWidth(.3),h.line(14,287,196,287),h.setFont("helvetica","normal"),h.setFontSize(7),h.setTextColor(148,163,184),h.text(`${T} • Sistema de Gestão Escolar & Pedagógica`,14,292),h.text(`Página ${q} de ${Z}`,196,292,{align:"right"});const ee=h.output("blob"),ae=URL.createObjectURL(ee);window.open(ae,"_blank")}async function z(b,i,C,h){const p=new Ue({orientation:"portrait",unit:"mm",format:"a4"}),T=new Map(C.map(H=>[H.id,H.nome])),F=new Date().toLocaleString("pt-BR"),O=b.nomeMenu||b.nomeFantasia||b.nomeEscola||"ACUSTICAMENTE",G=b.razaoSocial||"Acusticamente Ensino Musical Ltda",A=b.cnpj?`CNPJ: ${b.cnpj}`:"",D=[b.telefoneContato,b.emailContato].filter(Boolean).join(" • "),_=[b.logradouro?`${b.logradouro}, ${b.numero||"s/n"}`:"",b.complemento,b.bairro,b.cidade?`${b.cidade} - ${b.estado||"SP"}`:"",b.cep?`CEP: ${b.cep}`:""].filter(Boolean).join(" • "),N=new Date().toISOString().slice(0,10),V=i.reduce((H,oe)=>H+oe.valor,0),J=i.filter(H=>H.status==="pago").reduce((H,oe)=>H+oe.valor,0),W=i.filter(H=>H.status!=="pago").reduce((H,oe)=>H+oe.valor,0),U=await d(b.logotipoCustomizado);U&&p.addImage(U,"PNG",14,12,17,17);const Y=U?35:14;p.setFont("helvetica","bold"),p.setFontSize(13),p.setTextColor(15,23,42),p.text(O,Y,17),p.setFont("helvetica","normal"),p.setFontSize(8),p.setTextColor(71,85,105),p.text([G,A].filter(Boolean).join(" • "),Y,21.5),p.setFontSize(7.5),p.setTextColor(100,116,139),_&&p.text(_,Y,25.5),D&&p.text(D,Y,_?29.5:25.5),p.setFont("helvetica","bold"),p.setFontSize(12),p.setTextColor(5,150,105),p.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),p.setFont("helvetica","normal"),p.setFontSize(8),p.setTextColor(100,116,139),p.text(`Emissão: ${F}`,196,22,{align:"right"});let Q=`Total: ${i.length} registro(s)`;h!=null&&h.mesIni&&(h!=null&&h.mesFim)?Q=`Ref: ${h.mesIni} a ${h.mesFim} • ${i.length} reg.`:h!=null&&h.mesIni?Q=`Ref: a partir de ${h.mesIni} • ${i.length} reg.`:h!=null&&h.mesFim&&(Q=`Ref: até ${h.mesFim} • ${i.length} reg.`),p.text(Q,196,26.5,{align:"right"}),p.setDrawColor(203,213,225),p.setLineWidth(.4),p.line(14,33,196,33);const te=[{label:"LANÇAMENTOS",value:`${i.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${J.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${W.toFixed(2)}`,color:[220,38,38]}],Z=43,ee=12,ae=36;te.forEach((H,oe)=>{const le=14+oe*(Z+3);p.setFillColor(248,250,252),p.roundedRect(le,ae,Z,ee,1.5,1.5,"F"),p.setDrawColor(226,232,240),p.roundedRect(le,ae,Z,ee,1.5,1.5,"S"),p.setFont("helvetica","bold"),p.setFontSize(6.5),p.setTextColor(100,116,139),p.text(H.label,le+3,ae+4),p.setFontSize(10),p.setTextColor(H.color[0],H.color[1],H.color[2]),p.text(H.value,le+3,ae+9.5)});const q=i.map((H,oe)=>{const le=H.status==="pago",ce=!le&&H.dataVencimento<N,pe=le?"Pago":ce?"Atrasado":"Pendente",Ie=H.descricao+(H.mesReferencia?` / ${H.mesReferencia}`:""),he=H.dataVencimento.split("-").reverse().join("/");return[(oe+1).toString(),T.get(H.alunoId)||"Aluno",Ie,he,`R$ ${H.valor.toFixed(2)}`,pe]});Ge(p,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:q.length>0?q:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:H=>{H.section==="body"&&H.column.index===5&&(H.cell.raw==="Pago"?(H.cell.styles.textColor=[22,163,74],H.cell.styles.fontStyle="bold"):H.cell.raw==="Atrasado"?(H.cell.styles.textColor=[220,38,38],H.cell.styles.fontStyle="bold"):H.cell.styles.textColor=[202,138,4])}});const re=p.internal.getNumberOfPages();for(let H=1;H<=re;H++)p.setPage(H),p.setDrawColor(226,232,240),p.setLineWidth(.3),p.line(14,287,196,287),p.setFont("helvetica","normal"),p.setFontSize(7),p.setTextColor(148,163,184),p.text(`${O} • Gestão Financeira & Escolar`,14,292),p.text(`Página ${H} de ${re}`,196,292,{align:"right"});const ne=p.output("blob"),ge=URL.createObjectURL(ne);window.open(ge,"_blank")}return u(),e}function Pt(x){const e=document.createElement("div");let t=new Date,a="",s={column:"dataHora",direction:"desc"};const n=l=>l.toString().padStart(2,"0");function L(l){const y=l.getDate(),B=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][l.getMonth()],g=l.getFullYear(),m=new Date,r=m.getDate()===y&&m.getMonth()===l.getMonth()&&m.getFullYear()===g;return`${y} de ${B} de ${g}${r?" (Hoje)":""}`}function S(l){return`${l.getFullYear()}-${n(l.getMonth()+1)}-${n(l.getDate())}`}function o(){var E,w,u,d,$,v,z,b;const l=X.getLogs(),y=new Date,k=`${n(y.getDate())}/${n(y.getMonth()+1)}/${y.getFullYear()}`,B=l.filter(i=>{var C;return(C=i.dataHoraFormatada)==null?void 0:C.startsWith(k)}).length,g=t?`${n(t.getDate())}/${n(t.getMonth()+1)}/${t.getFullYear()}`:"",m=t!==null&&y.getDate()===t.getDate()&&y.getMonth()===t.getMonth()&&y.getFullYear()===t.getFullYear(),r=l.filter(i=>{const C=!t||i.dataHoraFormatada&&i.dataHoraFormatada.startsWith(g)||i.dataHora&&i.dataHora.startsWith(S(t)),h=a===""||i.tela.toLowerCase().includes(a.toLowerCase())||i.usuarioNome.toLowerCase().includes(a.toLowerCase())||i.usuarioLogin.toLowerCase().includes(a.toLowerCase())||i.acao.toLowerCase().includes(a.toLowerCase())||i.detalhes.toLowerCase().includes(a.toLowerCase());return C&&h}),f=Ee(r,s,{dataHora:i=>i.dataHora,usuario:i=>i.usuarioNome,tela:i=>i.tela,acao:i=>i.acao,detalhes:i=>i.detalhes});e.innerHTML=`
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
        </div>
      </div>

      <!-- Barra de Controle de Período (Dia) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${t?L(t):"Todo o Histórico"}
          </h3>
          
          <div class="calendar-nav-buttons" style="display: flex; gap: 4px;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior" style="width: 28px; height: 28px; padding: 0;">
              ◀
            </button>
            <button type="button" class="btn ${m?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
              Hoje (${B})
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-next" title="Próximo dia" style="width: 28px; height: 28px; padding: 0;">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <input 
            type="date" 
            id="audit-date-picker" 
            class="form-input" 
            value="${t?S(t):""}"
            style="width: 140px; padding: 6px 10px; font-size: 0.8rem;"
          />
          <button type="button" class="btn ${t===null?"btn-primary":"btn-secondary"}" id="audit-btn-all" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os registros sem filtrar por data">
            Ver Todos (${l.length})
          </button>
        </div>
      </div>

      <!-- Barra de Filtros Rápidos / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="audit-search-input" 
            class="form-input" 
            placeholder="Buscar por tela, ação, usuário ou detalhe..." 
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${j.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- TABELA DE LOGS -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros Encontrados (${f.length})
            ${t?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${g}</span>`:""}
          </h3>
          ${t!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${g}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${K("Data &amp; Hora","dataHora",s,{extraStyle:"min-width: 120px;"})}
                ${K("Usuário Responsável","usuario",s,{extraClass:"col-hide-sm",extraStyle:"width: 180px;"})}
                ${K("Tela / Módulo","tela",s,{extraClass:"col-hide-md",extraStyle:"width: 130px;"})}
                ${K("Ação Executada","acao",s)}
                ${K("Detalhes da Alteração","detalhes",s,{extraClass:"col-hide-sm"})}
              </tr>
            </thead>
            <tbody>
              ${f.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${g}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:f.map(i=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${i.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${i.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${i.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${i.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${i.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${i.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${i.detalhes}">
                                ${i.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(E=e.querySelector("#audit-btn-prev"))==null||E.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),o()}),(w=e.querySelector("#audit-btn-next"))==null||w.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),o()}),(u=e.querySelector("#audit-btn-today"))==null||u.addEventListener("click",()=>{t=new Date,o()}),(d=e.querySelector("#audit-btn-all"))==null||d.addEventListener("click",()=>{t=null,o()}),($=e.querySelector("#audit-empty-btn-all"))==null||$.addEventListener("click",()=>{t=null,o()}),(v=e.querySelector("#audit-date-picker"))==null||v.addEventListener("change",i=>{const C=i.target.value;if(C){const[h,p,T]=C.split("-").map(Number);t=new Date(h,p-1,T)}else t=null;o()});const c=e.querySelector("#audit-search-input");c==null||c.addEventListener("input",i=>{a=i.target.value,o();const C=e.querySelector("#audit-search-input");C&&(C.focus(),C.selectionStart=C.selectionEnd=C.value.length)}),(z=e.querySelector("#btn-clear-audit-search"))==null||z.addEventListener("click",()=>{a="",o()}),we(e,s,i=>{s=i,o()}),(b=e.querySelector("#btn-clear-all-audit"))==null||b.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await M.resetCleanDatabase("Administrador"),o())})}const P=()=>{o()};return window.addEventListener("audit_updated",P),o(),e}function zt(x){const e=document.createElement("div"),t=ie.getCurrentUser(),a=M.getSettings(),s=de(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${Xe(a.cnpj||"")}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 145px;">
                <label class="form-label" for="cfg-ie" style="font-size: 0.75rem;">Inscrição Estadual</label>
                <input 
                  type="text" 
                  id="cfg-ie" 
                  class="form-input" 
                  placeholder="Isento ou nº"
                  value="${Qe(a.inscricaoEstadual||"")}" 
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
                  value="${Be(a.telefoneContato||"")}" 
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
                  value="${Ke(a.cep||"")}" 
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
                    ${ye(a.logotipoCustomizado,40)}
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
                    ${ye(a.logotipoCustomizado,40)}
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
  `;const n=e.querySelector("#btn-tab-gerais"),L=e.querySelector("#btn-tab-instituicao"),S=e.querySelector("#tab-content-gerais"),o=e.querySelector("#tab-content-instituicao");function P(p,T){p&&(T?p.classList.add("active"):p.classList.remove("active"))}function l(p){S.style.display=p==="gerais"?"block":"none",o.style.display=p==="instituicao"?"block":"none",P(n,p==="gerais"),P(L,p==="instituicao")}n==null||n.addEventListener("click",()=>l("gerais")),L==null||L.addEventListener("click",()=>l("instituicao"));let y=a.logotipoCustomizado||"";const k=e.querySelector("#cfg-menu-name"),B=e.querySelector("#preview-menu-brand-name"),g=e.querySelector("#preview-report-brand-name"),m=e.querySelector("#preview-logo-menu"),r=e.querySelector("#preview-logo-report"),f=e.querySelector("#input-logo-file"),c=e.querySelector("#btn-upload-logo"),E=e.querySelector("#btn-reset-logo"),w=e.querySelector("#logo-feedback-msg");k==null||k.addEventListener("input",()=>{const p=k.value.trim()||"Acusticamente";B&&(B.textContent=p),g&&(g.textContent=p)}),c==null||c.addEventListener("click",()=>{f==null||f.click()}),f==null||f.addEventListener("change",p=>{const T=p.target.files;if(!T||T.length===0)return;const F=T[0];if(!F.type.startsWith("image/")){R("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(F.size>3*1024*1024){R("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const O=new FileReader;O.onload=G=>{var A;y=((A=G.target)==null?void 0:A.result)||"",m&&(m.innerHTML=ye(y,40)),r&&(r.innerHTML=ye(y,40)),E&&(E.disabled=!1,E.style.color="#ef4444"),w&&(w.style.display="block",w.style.color="var(--status-success)",w.textContent="Imagem carregada no preview. Clique em Salvar."),R("Logotipo carregado na pré-visualização!","info")},O.onerror=()=>{R("Erro ao processar o arquivo de imagem.","error")},O.readAsDataURL(F)}),E==null||E.addEventListener("click",()=>{y="",f&&(f.value=""),m&&(m.innerHTML=ye("",40)),r&&(r.innerHTML=ye("",40)),E&&(E.disabled=!0,E.style.color="var(--text-muted)"),w&&(w.style.display="block",w.style.color="var(--color-coral)",w.textContent="Logotipo padrão no preview. Clique em Salvar."),R("Logotipo padrão restaurado no preview.","info")});const u=e.querySelector("#form-settings-gerais");u==null||u.addEventListener("submit",p=>{p.preventDefault();const T=k.value.trim()||"Acusticamente";M.updateSettings({nomeMenu:T,logotipoCustomizado:y},(t==null?void 0:t.nome)||"Administrador"),w&&(w.style.display="none"),R("Configurações gerais salvas com sucesso!","success")});const d=e.querySelector("#cfg-cnpj");d&&me(d,Xe);const $=e.querySelector("#cfg-ie");$&&me($,Qe);const v=e.querySelector("#cfg-tel");v&&me(v,Be);const z=e.querySelector("#cfg-cep");z&&me(z,Ke);const b=e.querySelector("#cfg-uf");b==null||b.addEventListener("input",p=>{p.target.value=p.target.value.toUpperCase().slice(0,2)});const i=e.querySelector("#form-settings-institucional");i==null||i.addEventListener("submit",p=>{p.preventDefault();const T=e.querySelector("#cfg-fantasia").value.trim(),F=e.querySelector("#cfg-razao").value.trim(),O=e.querySelector("#cfg-cnpj").value.trim(),G=e.querySelector("#cfg-ie").value.trim(),A=e.querySelector("#cfg-tel").value.trim(),D=e.querySelector("#cfg-email").value.trim(),_=e.querySelector("#cfg-site").value.trim(),N=e.querySelector("#cfg-cep").value.trim(),V=e.querySelector("#cfg-logradouro").value.trim(),J=e.querySelector("#cfg-numero").value.trim(),W=e.querySelector("#cfg-complemento").value.trim(),U=e.querySelector("#cfg-bairro").value.trim(),Y=e.querySelector("#cfg-cidade").value.trim(),Q=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!T){R("Informe o Nome Fantasia da instituição.","error");return}if(D&&!ot(D)){R("Informe um endereço de e-mail válido.","error");return}const te=O.replace(/\D/g,"");if(te.length>0&&te.length!==14){R("CNPJ incompleto (deve conter 14 dígitos).","error");return}const Z=A.replace(/\D/g,"");if(Z.length>0&&Z.length<10){R("Telefone/WhatsApp incompleto.","error");return}const ee=N.replace(/\D/g,"");if(ee.length>0&&ee.length!==8){R("CEP incompleto (deve conter 8 dígitos).","error");return}M.updateSettings({nomeEscola:T,nomeClinica:T,nomeFantasia:T,razaoSocial:F,cnpj:O,inscricaoEstadual:G,telefoneContato:A,emailContato:D,website:_,cep:N,logradouro:V,numero:J,complemento:W,bairro:U,cidade:Y,estado:Q},(t==null?void 0:t.nome)||"Administrador"),R("Dados da instituição salvos com sucesso!","success")});const C=e.querySelector("#footer-cloud-status"),h=p=>{C&&(p==="connected"?(C.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,C.style.color="#4ade80"):p==="fallback"?(C.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,C.style.color="#fbbf24"):(C.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,C.style.color="#94a3b8"))};return h(M.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",p=>{h(p.detail)}),e}class Lt{constructor(){ue(this,"currentScreen","site");ue(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=ie.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":ie.isAuthenticated()?["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","user","auditoria","configuracoes"].includes(e)&&be(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const a=window.location.hash.replace("#","").trim(),s=!a||a==="site"?"site":a;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const a=M.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=a.nomeMenu||"Acusticamente");const n=document.querySelector(".sidebar-logo");n&&(n.innerHTML=ye(a.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{ie.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),M.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","auditoria","configuracoes"];for(const a of t)if(be(e,a))return a;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!ie.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=ie.getCurrentUser();if(!be(t,e)){R("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const a=this.getFirstAllowedScreen(t);this.currentScreen=a,window.location.hash=a,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),M.syncWithCloud()}render(){var B;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const g=bt(m=>{this.navigateTo(m)});this.appRoot.appendChild(g);return}if(this.currentScreen==="login"||!ie.isAuthenticated()){const g=vt(()=>{const m=ie.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(m))},()=>{this.navigateTo("site")});this.appRoot.appendChild(g);return}const e=document.createElement("div");e.className="app-container";const t=ie.getCurrentUser(),a=(t==null?void 0:t.papel)==="admin",s=M.getSettings(),n=s.nomeMenu||"Acusticamente";e.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${ye(s.logotipoCustomizado,46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${j.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${be(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${j.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${be(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${j.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${be(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${j.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${be(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${j.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${be(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${j.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${be(t,"planos-pagamento")?`
            <a class="nav-item ${this.currentScreen==="planos-pagamento"?"active":""}" data-screen="planos-pagamento">
              <span class="nav-item-icon">${j.planoPagamento}</span>
              <span>Planos de Pagamento</span>
            </a>
          `:""}

          ${be(t,"relatorios")?`
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

          ${be(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${j.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${be(t,"configuracoes")?`
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
    `;const L=e.querySelector("#app-sidebar"),S=e.querySelector("#sidebar-backdrop"),o=e.querySelector("#btn-mobile-menu-toggle"),P=e.querySelector("#btn-sidebar-close"),l=g=>{const m=g!==void 0?g:!L.classList.contains("open");L.classList.toggle("open",m),S.classList.toggle("open",m),document.body.style.overflow=m?"hidden":""};o==null||o.addEventListener("click",()=>l(!0)),P==null||P.addEventListener("click",()=>l(!1)),S==null||S.addEventListener("click",()=>l(!1)),e.querySelectorAll(".nav-item").forEach(g=>{g.addEventListener("click",m=>{const r=m.currentTarget.dataset.screen;l(!1),r&&this.navigateTo(r)})}),(B=e.querySelector("#btn-app-logout"))==null||B.addEventListener("click",()=>{$e({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{ie.logout(),this.navigateTo("site")}})});const y=e.querySelector("#screen-viewport"),k=this.createViewElement(this.currentScreen);y.appendChild(k),this.appRoot.appendChild(e)}createViewElement(e){const t=a=>this.navigateTo(a);switch(e){case"home":return Ze(t);case"agenda":return yt();case"alunos":return wt(t);case"user":return At(t);case"planos":return St();case"financeiro":return Ct();case"planos-pagamento":return It();case"relatorios":return kt();case"auditoria":return Pt();case"configuracoes":return zt();default:return Ze(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"planos-pagamento":return"Planos de Pagamento";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"planos-pagamento":return"Gestão de valores, modalidades (individual/turma) e ciclos de cobrança";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new Lt});
