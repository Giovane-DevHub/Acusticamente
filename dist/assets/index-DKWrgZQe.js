var dt=Object.defineProperty;var ct=(m,e,t)=>e in m?dt(m,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[e]=t;var fe=(m,e,t)=>ct(m,typeof e!="symbol"?e+"":e,t);import{E as Ge,a as We}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const z of n.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&a(z)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const Ye="acusticamente_audit_logs";class pt{constructor(){fe(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Ye);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Ye,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,a=z=>z.toString().padStart(2,"0"),s=`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} ${a(t.getHours())}:${a(t.getMinutes())}:${a(t.getSeconds())}`,n={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(n),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:n})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:n})),n}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const Q=new pt,_e="acusticamente_users",Pe="acusticamente_students",Me="acusticamente_plans",Oe="acusticamente_payment_plans",Le="acusticamente_appointments",Te="acusticamente_settings",De="acusticamente_payments";class ut{constructor(){fe(this,"users",[]);fe(this,"students",[]);fe(this,"plans",[]);fe(this,"paymentPlans",[]);fe(this,"appointments",[]);fe(this,"payments",[]);fe(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:"",msgAniversarioAluno:"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Que seu novo ciclo seja repleto de realizações, saúde, alegria e muita música! Parabéns pelo seu dia! 🎶✨",msgAniversarioProfessor:"Olá, Prof. {nome}! 🎂🎉 Toda a equipe da Acusticamente te deseja um Feliz Aniversário! Muito obrigado por sua dedicação musical e talento. Que você tenha um ano repleto de sucesso e realizações! 🎶✨",msgAniversarioAdmin:"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Muito sucesso, liderança, saúde e grandes conquistas neste novo ciclo! Parabéns! 🎶✨"});fe(this,"cloudStatus","checking");this.initData()}initData(){const e=localStorage.getItem(_e);e?this.users=JSON.parse(e).map(o=>{var M,l,x;return{...o,permissoes:{...o.permissoes,planosPagamento:((M=o.permissoes)==null?void 0:M.planosPagamento)||(o.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:o.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),financeiro:((l=o.permissoes)==null?void 0:l.financeiro)||(o.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:o.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((x=o.permissoes)==null?void 0:x.relatorios)||{acesso:!0,gerar:!0}}}}):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,dataNascimento:"1992-09-24",criadoEm:new Date().toISOString()}],localStorage.setItem(_e,JSON.stringify(this.users)));const t=localStorage.getItem(Me);if(t)try{const o=JSON.parse(t);this.plans=o.map(M=>({...M,valor:typeof M.valor=="number"?M.valor:280,modulos:(M.modulos||[]).map((l,x)=>({...l,aulas:Array.isArray(l.aulas)&&l.aulas.length>0?l.aulas:[{id:`aul_${l.id||x+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${l.id||x+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${l.id||x+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${l.id||x+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],localStorage.setItem(Me,JSON.stringify(this.plans));const a=localStorage.getItem(Oe);if(a)try{this.paymentPlans=JSON.parse(a)}catch{this.paymentPlans=[]}(!this.paymentPlans||this.paymentPlans.length===0)&&(this.paymentPlans=[{id:"pp_ind_mensal",nome:"Individual - Mensal",modalidade:"individual",periodicidade:"mensal",valorMensal:280,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas individuais semanais com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_ind_trimestral",nome:"Individual - Trimestral",modalidade:"individual",periodicidade:"trimestral",valorMensal:250,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual com fidelidade trimestral e valor promocional.",criadoEm:new Date().toISOString()},{id:"pp_ind_semestral",nome:"Individual - Semestral",modalidade:"individual",periodicidade:"semestral",valorMensal:230,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual semestral com máxima economia.",criadoEm:new Date().toISOString()},{id:"pp_turma_mensal",nome:"Turma - Mensal",modalidade:"turma",periodicidade:"mensal",valorMensal:190,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em pequenos grupos (turmas) com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_turma_trimestral",nome:"Turma - Trimestral",modalidade:"turma",periodicidade:"trimestral",valorMensal:170,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade trimestral.",criadoEm:new Date().toISOString()},{id:"pp_turma_semestral",nome:"Turma - Semestral",modalidade:"turma",periodicidade:"semestral",valorMensal:150,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade semestral.",criadoEm:new Date().toISOString()}],localStorage.setItem(Oe,JSON.stringify(this.paymentPlans)));const s=localStorage.getItem(Pe);s?this.students=JSON.parse(s).map(o=>({...o,saldoReposicoes:typeof o.saldoReposicoes=="number"?o.saldoReposicoes:0,instrumentoPrincipal:o.instrumentoPrincipal||"Violão",nivelMusical:o.nivelMusical||"iniciante",valorMensalidade:typeof o.valorMensalidade=="number"?o.valorMensalidade:280,diaVencimento:typeof o.diaVencimento=="number"?o.diaVencimento:10})):(this.students=[],localStorage.setItem(Pe,JSON.stringify(this.students)));const n=localStorage.getItem(Le);n?this.appointments=JSON.parse(n):(this.appointments=[],localStorage.setItem(Le,JSON.stringify(this.appointments)));const z=localStorage.getItem(Te);z&&(this.settings={...this.settings,...JSON.parse(z)});const $=localStorage.getItem(De);$?this.payments=JSON.parse($):(this.payments=[],localStorage.setItem(De,JSON.stringify(this.payments))),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",localStorage.setItem(Te,JSON.stringify(this.settings))),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",localStorage.setItem(Te,JSON.stringify(this.settings))),this.plans.forEach(o=>{o.nome.includes("Reabilitação")&&(o.nome="Violão e Harmonia Prática",o.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",o.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),localStorage.setItem(Me,JSON.stringify(this.plans)),this.students.forEach(o=>{var M;(M=o.observacoes)!=null&&M.includes("implante")&&(o.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",o.observacoes="Iniciando estudos no violão popular.")}),localStorage.setItem(Pe,JSON.stringify(this.students)),this.appointments.forEach(o=>{var M;(M=o.titulo)!=null&&M.includes("Auditivo")&&(o.titulo="Aula Prática de Violão",o.observacoes="Praticar transição entre acordes maiores.")}),localStorage.setItem(Le,JSON.stringify(this.appointments))}getTodayDateString(){const e=new Date,t=a=>a.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,a){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:a})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const a=t.data;if(Array.isArray(a.students)){if(a.students.length>0)this.students=a.students,localStorage.setItem(Pe,JSON.stringify(this.students));else if(this.students.length>0)for(const s of this.students)this.pushToCloud("students","upsert",s)}if(Array.isArray(a.payments)){if(a.payments.length>0)this.payments=a.payments,localStorage.setItem(De,JSON.stringify(this.payments));else if(this.payments.length>0)for(const s of this.payments)this.pushToCloud("payments","upsert",s)}if(Array.isArray(a.appointments)){if(a.appointments.length>0)this.appointments=a.appointments,localStorage.setItem(Le,JSON.stringify(this.appointments));else if(this.appointments.length>0)for(const s of this.appointments)this.pushToCloud("appointments","upsert",s)}if(Array.isArray(a.plans)){if(a.plans.length>0)this.plans=a.plans,localStorage.setItem(Me,JSON.stringify(this.plans));else if(this.plans.length>0)for(const s of this.plans)this.pushToCloud("plans","upsert",s)}return Array.isArray(a.users)&&a.users.length>0&&(this.users=a.users,localStorage.setItem(_e,JSON.stringify(this.users))),a.settings&&(this.settings={...this.settings,...a.settings},localStorage.setItem(Te,JSON.stringify(this.settings))),Array.isArray(a.audit)&&(a.audit.length===0?Q.clearLocalOnly():Q.setLogs(a.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(Pe,JSON.stringify([])),localStorage.setItem(De,JSON.stringify([])),localStorage.setItem(Le,JSON.stringify([])),localStorage.setItem(Me,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await Q.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(_e,JSON.stringify(this.users)),this.users.length>0&&this.pushToCloud("users","replace_all",this.users)}saveStudents(){localStorage.setItem(Pe,JSON.stringify(this.students)),this.students.length>0&&this.pushToCloud("students","replace_all",this.students)}savePlans(){localStorage.setItem(Me,JSON.stringify(this.plans)),this.plans.length>0&&this.pushToCloud("plans","replace_all",this.plans)}saveAppointments(){localStorage.setItem(Le,JSON.stringify(this.appointments)),this.appointments.length>0&&this.pushToCloud("appointments","replace_all",this.appointments)}savePayments(){localStorage.setItem(De,JSON.stringify(this.payments)),this.payments.length>0&&this.pushToCloud("payments","replace_all",this.payments)}savePaymentPlans(){localStorage.setItem(Oe,JSON.stringify(this.paymentPlans)),this.paymentPlans.length>0&&this.pushToCloud("payment_plans","replace_all",this.paymentPlans)}saveSettings(){localStorage.setItem(Te,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return[...this.users]}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const a={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(a),this.saveUsers(),Q.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${a.nome}" (login: ${a.login}, papel: ${a.papel})`}),a}updateUser(e,t,a){const s=this.users.findIndex($=>$.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const n=this.users[s],z=n.isSistema;return this.users[s]={...n,...t,isSistema:z,atualizadoEm:new Date().toISOString()},this.saveUsers(),Q.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:a,detalhes:`Usuário "${n.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const a=this.users.find(s=>s.id===e);if(!a)throw new Error("Usuário não encontrado.");if(a.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),Q.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${a.nome}" (login: ${a.login}) foi removido.`})}getStudents(){return[...this.students]}getStudentById(e){return this.students.find(t=>t.id===e)}addStudent(e,t){const a={...e,id:"aluno_"+Date.now(),saldoReposicoes:0,criadoEm:new Date().toISOString()};return this.students.push(a),this.saveStudents(),this.pushToCloud("students","upsert",a),Q.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" cadastrado com status ${a.status}. Saldo de remarcação inicial: 0.`}),a}updateStudent(e,t,a){const s=this.students.findIndex($=>$.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const n=this.students[s],z={...t};return delete z.saldoReposicoes,this.students[s]={...n,...z,saldoReposicoes:n.saldoReposicoes??0},this.saveStudents(),this.pushToCloud("students","upsert",this.students[s]),Q.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:a,detalhes:`Aluno "${n.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const a=this.students.find(s=>s.id===e);a&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),this.pushToCloud("students","delete",{id:e}),Q.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(e,t){const a={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(a),this.savePlans(),Q.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" criado com ${a.modulos.length} módulos.`}),a}updatePlan(e,t,a){const s=this.plans.findIndex(z=>z.id===e);if(s===-1)throw new Error("Plano não encontrado.");const n=this.plans[s];return this.plans[s]={...n,...t},this.savePlans(),Q.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:a,detalhes:`Plano "${n.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const a=this.plans.find(s=>s.id===e);a&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),Q.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" foi excluído.`}))}getPaymentPlans(){return[...this.paymentPlans]}getPaymentPlanById(e){return this.paymentPlans.find(t=>t.id===e)}addPaymentPlan(e,t){const a={...e,id:"pp_"+Date.now(),criadoEm:new Date().toISOString()};return this.paymentPlans.push(a),this.savePaymentPlans(),Q.log({tela:"Planos de Pagamento",acao:"Criação de Plano de Pagamento",usuarioNome:t,detalhes:`Plano "${a.nome}" criado (Modalidade: ${a.modalidade}, Ciclo: ${a.periodicidade}, R$ ${a.valorMensal}).`}),a}updatePaymentPlan(e,t,a){const s=this.paymentPlans.findIndex(z=>z.id===e);if(s===-1)throw new Error("Plano de pagamento não encontrado.");const n=this.paymentPlans[s];return this.paymentPlans[s]={...n,...t},this.savePaymentPlans(),Q.log({tela:"Planos de Pagamento",acao:"Atualização de Plano de Pagamento",usuarioNome:a,detalhes:`Plano de pagamento "${n.nome}" atualizado.`}),this.paymentPlans[s]}deletePaymentPlan(e,t){const a=this.paymentPlans.find(s=>s.id===e);a&&(this.paymentPlans=this.paymentPlans.filter(s=>s.id!==e),this.savePaymentPlans(),Q.log({tela:"Planos de Pagamento",acao:"Exclusão de Plano de Pagamento",usuarioNome:t,detalhes:`Plano de pagamento "${a.nome}" foi excluído.`}))}calcularMensalidadeAluno(e,t){const a=this.paymentPlans.find(o=>o.id===e),s=a?a.valorMensal:280,n=t?(a==null?void 0:a.descontoSegundaMatricula)??20:0,z=n>0?s*n/100:0,$=Math.max(0,s-z);return{valorBase:s,descontoPercentual:n,valorDesconto:z,valorFinal:$}}getAppointments(){return[...this.appointments]}addAppointment(e,t){const a={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(a),this.saveAppointments();const s=this.students.find(n=>n.id===a.alunoId);return Q.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${a.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${a.data} às ${a.horaInicio}.`}),a}updateAppointment(e,t,a){const s=this.appointments.findIndex(M=>M.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const n=this.appointments[s],z=n.status,$=t.status!==void 0?t.status:n.status;this.appointments[s]={...n,...t},this.saveAppointments();const o=this.students.find(M=>M.id===(t.alunoId||n.alunoId));return o&&(z!=="falta_justificada"&&$==="falta_justificada"?(o.saldoReposicoes=(o.saldoReposicoes||0)+1,this.saveStudents(),Q.log({tela:"Agenda",acao:"Crédito de Remarcação Automático (+1)",usuarioNome:a,detalhes:`Status da aula "${n.titulo}" alterado para Falta Justificada. +1 crédito gerado para "${o.nome}". Saldo atual: ${o.saldoReposicoes}.`})):z==="falta_justificada"&&$!=="falta_justificada"&&(o.saldoReposicoes=Math.max(0,(o.saldoReposicoes||0)-1),this.saveStudents(),Q.log({tela:"Agenda",acao:"Estorno de Crédito de Remarcação (-1)",usuarioNome:a,detalhes:`Falta justificada na aula "${n.titulo}" alterada para "${$}". 1 crédito estornado de "${o.nome}". Saldo atual: ${o.saldoReposicoes}.`})),(t.tipoAula||n.tipoAula)==="reposicao"&&(z!=="cancelado"&&$==="cancelado"?(o.saldoReposicoes=(o.saldoReposicoes||0)+1,this.saveStudents(),Q.log({tela:"Agenda",acao:"Estorno por Cancelamento de Reposição (+1)",usuarioNome:a,detalhes:`Reposição cancelada para "${o.nome}". 1 crédito devolvido ao saldo. Saldo atual: ${o.saldoReposicoes}.`})):z==="cancelado"&&$==="agendado"&&(o.saldoReposicoes=Math.max(0,(o.saldoReposicoes||0)-1),this.saveStudents(),Q.log({tela:"Agenda",acao:"Consumo por Reativação de Reposição (-1)",usuarioNome:a,detalhes:`Reposição reativada para "${o.nome}". 1 crédito consumido. Saldo atual: ${o.saldoReposicoes}.`})))),Q.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:a,detalhes:`Compromisso "${n.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const a=this.appointments.find(s=>s.id===e);if(a){if(a.tipoAula==="reposicao"&&a.status!=="concluido"){const s=this.students.find(n=>n.id===a.alunoId);s&&(s.saldoReposicoes=(s.saldoReposicoes||0)+1,this.saveStudents(),Q.log({tela:"Agenda",acao:"Estorno Automático de Crédito (+1)",usuarioNome:t,detalhes:`Aula de reposição excluída para "${s.nome}". 1 crédito estornado automaticamente ao saldo. Saldo atual: ${s.saldoReposicoes}.`}))}this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),Q.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${a.titulo}" removido da agenda.`})}}marcarPresenca(e,t){const a=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(n=>n.id===a.alunoId);return Q.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${a.titulo}".`}),a}registrarFalta(e,t,a,s){const n=t?"falta_justificada":"falta_injustificada",z=this.updateAppointment(e,{status:n,justificativaFalta:(a==null?void 0:a.trim())||void 0},s),$=this.students.find(M=>M.id===z.alunoId),o=($==null?void 0:$.saldoReposicoes)||0;return{appointment:z,saldoReposicoes:o}}agendarReposicao(e,t,a){const s=this.students.find(z=>z.id===e.alunoId);if(!s||typeof s.saldoReposicoes!="number"||s.saldoReposicoes<=0)throw new Error(`O aluno "${(s==null?void 0:s.nome)||"selecionado"}" não possui créditos de remarcação disponíveis para agendar reposição.`);const n=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},a);if(t){const z=this.appointments.findIndex($=>$.id===t);z!==-1&&(this.appointments[z].aulaReposicaoId=n.id,this.saveAppointments())}return s.saldoReposicoes-=1,this.saveStudents(),Q.log({tela:"Agenda",acao:"Aula de Reposição Agendada (-1 Crédito)",usuarioNome:a,detalhes:`Reposição agendada para "${s.nome}". 1 crédito abatido automaticamente. Saldo restante: ${s.saldoReposicoes}.`}),n}generateAppointmentsFromPlan(e,t,a,s,n,z){const $=this.students.find(P=>P.id===e),o=this.plans.find(P=>P.id===t);if(!$||!o)return[];const M=[];if((o.modulos||[]).forEach(P=>{(P.aulas||[]).forEach(B=>{M.push({moduloId:P.id,moduloTitulo:P.titulo,aulaTitulo:B.titulo,aulaId:B.id})})}),M.length===0)return[];const l=[];let x=new Date(a+"T12:00:00");return M.forEach((P,B)=>{const v=b=>b.toString().padStart(2,"0"),A=`${x.getFullYear()}-${v(x.getMonth()+1)}-${v(x.getDate())}`,c={id:`app_${Date.now()}_${B}_${Math.random().toString(36).substr(2,4)}`,alunoId:$.id,planoId:o.id,moduloId:P.moduloId,aulaId:P.aulaId,titulo:`${P.aulaTitulo}`,data:A,horaInicio:s,horaFim:n,status:"agendado",tipoAula:"regular",observacoes:`${o.nome} • ${P.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push(c),l.push(c),x.setDate(x.getDate()+7)}),this.saveAppointments(),Q.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:z,detalhes:`Geradas ${l.length} aulas regulares para "${$.nome}" com base no plano "${o.nome}".`}),l}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,a)=>{const s=`${t.data}T${t.horaInicio}`;return`${a.data}T${a.horaInicio}`.localeCompare(s)})}deleteStudentAppointments(e,t){const a=this.students.find($=>$.id===e),s=a?a.nome:"Aluno",z=this.appointments.filter($=>$.alunoId===e).length;return this.appointments=this.appointments.filter($=>$.alunoId!==e),this.saveAppointments(),this.pushToCloud("appointments","delete_by_student",{studentId:e}),Q.log({tela:"Cadastro de Alunos",acao:"Exclusão de Agendamentos",usuarioNome:t,detalhes:z>0?`Todos os ${z} agendamento(s) do aluno "${s}" foram excluídos do sistema.`:`Tentativa de exclusão de agendamentos para o aluno "${s}" (nenhum agendamento ativo encontrado).`}),z}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(a=>{if(a.status!=="pago"){const s=a.dataVencimento<e?"atrasado":"pendente";a.status!==s&&(a.status=s,t=!0)}}),t&&this.savePayments(),[...this.payments].sort((a,s)=>s.dataVencimento.localeCompare(a.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(a=>a.alunoId===e&&(a.status==="atrasado"||a.status==="pendente"&&a.dataVencimento<t))}addPayment(e,t){const a=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<a&&(s="atrasado");const n={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(n),this.savePayments();const z=this.students.find($=>$.id===n.alunoId);return Q.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${n.descricao}" (R$ ${n.valor.toFixed(2)}) cadastrado para o aluno "${(z==null?void 0:z.nome)||"N/A"}" com vencimento em ${n.dataVencimento}.`}),n}darBaixaPayment(e,t,a,s,n){const z=this.payments.findIndex(l=>l.id===e);if(z===-1)throw new Error("Lançamento financeiro não encontrado");const $=this.payments[z],o=$.status;$.status="pago",$.dataPagamento=t,$.formaPagamento=a,n!==void 0&&($.observacoes=n.trim()?n.trim():$.observacoes),this.savePayments();const M=this.students.find(l=>l.id===$.alunoId);return Q.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${$.descricao}" de "${(M==null?void 0:M.nome)||"N/A"}". Valor R$ ${$.valor.toFixed(2)} recebido via ${a.toUpperCase()} em ${t} (Status anterior: ${o}).`}),$}updatePayment(e,t,a){const s=this.payments.findIndex(l=>l.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const n=this.getTodayDateString();let z=t.status||this.payments[s].status;const $=t.dataVencimento||this.payments[s].dataVencimento;z!=="pago"&&(z=$<n?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:z},this.savePayments();const o=this.payments[s],M=this.students.find(l=>l.id===o.alunoId);return Q.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:a,detalhes:`Lançamento financeiro "${o.descricao}" do aluno "${(M==null?void 0:M.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const a=this.payments.find(n=>n.id===e);if(!a)return;this.payments=this.payments.filter(n=>n.id!==e),this.savePayments();const s=this.students.find(n=>n.id===a.alunoId);Q.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${a.descricao}" no valor de R$ ${a.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,a){const s=x=>x.toString().padStart(2,"0"),n=`${e}-${s(t)}`,$=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||n,o=this.students.filter(x=>x.status==="ativo");let M=0,l=0;return o.forEach(x=>{if(this.payments.some(u=>u.alunoId===x.id&&(u.mesReferencia===n||u.dataVencimento.startsWith(n)))){l++;return}const B=x.diaVencimento||10,v=new Date(e,t,0).getDate(),A=Math.min(B,v),c=`${e}-${s(t)}-${s(A)}`,b=typeof x.valorMensalidade=="number"&&x.valorMensalidade>0?x.valorMensalidade:280;this.addPayment({alunoId:x.id,descricao:`Mensalidade ${$}/${e}`,mesReferencia:n,valor:b,dataVencimento:c,status:"pendente",observacoes:`Gerado automaticamente para o plano ${x.moduloAtual||x.instrumentoPrincipal||"Música"}`},a),M++}),Q.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:a,detalhes:`Geração em lote para ${$}/${e}: ${M} mensalidade(s) criada(s) e ${l} já existente(s) pulada(s).`}),{criadas:M,puladas:l}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),Q.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const L=new ut,Se={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Fe(m){var s,n,z,$,o,M,l,x,P,B,v,A,c,b,u,w,S,g,k,p,r,h,f,i,I,y,d,T,R,j,U,E,D,_,F,V;if(!m)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(m.papel==="admin")return JSON.parse(JSON.stringify(Se.admin));const e=Se[m.papel]||Se.professor,t=m.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const a=G=>typeof G=="boolean";return{alunos:{acesso:a(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:a(t.alunos)?t.alunos:((n=t.alunos)==null?void 0:n.cadastrar)??e.alunos.cadastrar,alterar:a(t.alunos)?t.alunos:((z=t.alunos)==null?void 0:z.alterar)??e.alunos.alterar,excluir:a(t.alunos)?!1:(($=t.alunos)==null?void 0:$.excluir)??e.alunos.excluir},agenda:{acesso:a(t.agenda)?t.agenda:((o=t.agenda)==null?void 0:o.acesso)??e.agenda.acesso,cadastrar:a(t.agenda)?t.agenda:((M=t.agenda)==null?void 0:M.cadastrar)??e.agenda.cadastrar,alterar:a(t.agenda)?t.agenda:((l=t.agenda)==null?void 0:l.alterar)??e.agenda.alterar,excluir:a(t.agenda)?!1:((x=t.agenda)==null?void 0:x.excluir)??e.agenda.excluir},planos:{acesso:a(t.planos)?t.planos:((P=t.planos)==null?void 0:P.acesso)??e.planos.acesso,cadastrar:a(t.planos)?t.planos:((B=t.planos)==null?void 0:B.cadastrar)??e.planos.cadastrar,alterar:a(t.planos)?t.planos:((v=t.planos)==null?void 0:v.alterar)??e.planos.alterar,excluir:a(t.planos)?!1:((A=t.planos)==null?void 0:A.excluir)??e.planos.excluir},planosPagamento:{acesso:a(t.planosPagamento)?t.planosPagamento:((c=t.planosPagamento)==null?void 0:c.acesso)??((b=e.planosPagamento)==null?void 0:b.acesso)??!1,cadastrar:a(t.planosPagamento)?t.planosPagamento:((u=t.planosPagamento)==null?void 0:u.cadastrar)??((w=e.planosPagamento)==null?void 0:w.cadastrar)??!1,alterar:a(t.planosPagamento)?t.planosPagamento:((S=t.planosPagamento)==null?void 0:S.alterar)??((g=e.planosPagamento)==null?void 0:g.alterar)??!1,excluir:a(t.planosPagamento)?!1:((k=t.planosPagamento)==null?void 0:k.excluir)??((p=e.planosPagamento)==null?void 0:p.excluir)??!1},home:{acesso:a(t.home)?t.home:((r=t.home)==null?void 0:r.acesso)??e.home.acesso},financeiro:{acesso:a(t.financeiro)?t.financeiro:((h=t.financeiro)==null?void 0:h.acesso)??((f=e.financeiro)==null?void 0:f.acesso)??!1,cadastrar:a(t.financeiro)?t.financeiro:((i=t.financeiro)==null?void 0:i.cadastrar)??((I=e.financeiro)==null?void 0:I.cadastrar)??!1,alterar:a(t.financeiro)?t.financeiro:((y=t.financeiro)==null?void 0:y.alterar)??((d=e.financeiro)==null?void 0:d.alterar)??!1,excluir:a(t.financeiro)?!1:((T=t.financeiro)==null?void 0:T.excluir)??((R=e.financeiro)==null?void 0:R.excluir)??!1},relatorios:{acesso:a(t.relatorios)?t.relatorios:((j=t.relatorios)==null?void 0:j.acesso)??((U=e.relatorios)==null?void 0:U.acesso)??!0,gerar:a(t.relatorios)?t.relatorios:((E=t.relatorios)==null?void 0:E.gerar)??((D=e.relatorios)==null?void 0:D.gerar)??!0},auditoria:{acesso:a(t.auditoria)?t.auditoria:((_=t.auditoria)==null?void 0:_.acesso)??e.auditoria.acesso},configuracoes:{acesso:a(t.configuracoes)?t.configuracoes:((F=t.configuracoes)==null?void 0:F.acesso)??e.configuracoes.acesso,alterar:a(t.configuracoes)?t.configuracoes:((V=t.configuracoes)==null?void 0:V.alterar)??e.configuracoes.alterar}}}function be(m,e){var s;if(!m)return!1;if(e==="login")return!0;if(e==="user")return m.papel==="admin";if(m.papel==="admin"||m.isSistema)return!0;if(e==="planos-pagamento")return!!((s=Fe(m).planosPagamento)!=null&&s.acesso);const a=Fe(m)[e];return a&&typeof a=="object"&&"acesso"in a?!!a.acesso:!1}function de(m,e,t){if(!m)return!1;if(m.papel==="admin")return!0;const s=Fe(m)[e];return s?!!s[t]:!1}const qe="acusticamente_active_session";class mt{constructor(){fe(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(qe);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=L.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(qe,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=L.getUsers().find(n=>n.login===e.trim());return s?s.senha!==t.trim()?(Q.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(qe,JSON.stringify(s)),Q.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(Q.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&Q.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(qe),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const ie=new mt;function ft(m=40){return`
    <svg width="${m}" height="${m}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function ye(m,e=40){return m&&m.trim()!==""?`<img src="${m}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:ft(e)}function N(m,e="success"){const t=document.getElementById("toast-container");if(!t)return;const a=document.createElement("div");a.className=`toast toast-${e}`,a.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${m}</span>
  `,t.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 200ms ease",setTimeout(()=>a.remove(),200)},3500)}function he(m){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${m.modalClass||""}">
        <div class="modal-header">
          <h3>${m.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${m.bodyHtml}
        </div>
        <div class="modal-footer">
          ${m.leftButton?`<button type="button" class="btn ${m.leftButton.btnClass||"btn-secondary"}" id="${m.leftButton.id||"modal-left-btn"}" ${m.leftButton.disabled?"disabled":""} ${m.leftButton.title?`title="${m.leftButton.title}"`:""} style="margin-right: auto; ${m.leftButton.disabled?"opacity: 0.5; cursor: not-allowed;":""}">${m.leftButton.text}</button>`:""}
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${m.cancelText||"Cancelar"}</button>
          ${m.confirmText?`<button type="button" class="btn ${m.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${m.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),a=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),n=()=>{e.innerHTML="",m.onCancel&&m.onCancel()};if(t.onclick=n,a.onclick=n,m.leftButton&&!m.leftButton.disabled){const z=document.getElementById(m.leftButton.id||"modal-left-btn");z&&(z.onclick=$=>{$.preventDefault();const o=document.querySelector(".modal-card");m.leftButton.onClick(o)})}s&&m.onConfirm&&(s.onclick=async()=>{const z=document.querySelector(".modal-card");await m.onConfirm(z)!==!1&&(e.innerHTML="")})}function Ne(){const m=document.getElementById("modal-container");m&&(m.innerHTML="")}function $e(m){var a,s,n;const e=document.createElement("div");e.className="modal-backdrop",e.id="confirm-action-backdrop",e.style.zIndex="10001",e.innerHTML=`
    <div class="modal-card" style="max-width: 480px; animation: scaleUp 0.18s ease; box-shadow: var(--shadow-lg);">
      <div class="modal-header">
        <h3>${m.title||"Confirmar Exclusão"}</h3>
        <button type="button" class="modal-close" id="confirm-action-close-btn">&times;</button>
      </div>
      <div class="modal-body">
        <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
            ⚠️
          </div>
          <div style="flex: 1;">
            <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
              ${m.message}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
              Esta operação não poderá ser desfeita.
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="confirm-action-cancel-btn">${m.cancelText||"Cancelar"}</button>
        <button type="button" class="btn ${m.confirmBtnClass||"btn-danger"}" id="confirm-action-confirm-btn">${m.confirmText||"Excluir Definitivamente"}</button>
      </div>
    </div>
  `,document.body.appendChild(e);const t=()=>{e.remove(),m.onCancel&&m.onCancel()};(a=e.querySelector("#confirm-action-close-btn"))==null||a.addEventListener("click",t),(s=e.querySelector("#confirm-action-cancel-btn"))==null||s.addEventListener("click",t),(n=e.querySelector("#confirm-action-confirm-btn"))==null||n.addEventListener("click",()=>{e.remove(),m.onConfirm()})}const q={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',planoPagamento:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'};function Qe(m){return m.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function je(m){const e=m.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function Xe(m){const e=m.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function Ke(m){const e=m.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function Ve(m){if(!m)return"";if(/^\d{4}-\d{2}-\d{2}/.test(m)){const[t,a,s]=m.split("-");return`${s.slice(0,2)}/${a}/${t}`}const e=m.replace(/\D/g,"").slice(0,8);return e.length>4?`${e.slice(0,2)}/${e.slice(2,4)}/${e.slice(4)}`:e.length>2?`${e.slice(0,2)}/${e.slice(2)}`:e}function nt(m){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)}function gt(m){const e=m.replace(/\D/g,"").slice(0,6);if(e.length<=4)return e;const t=e.slice(0,4);let a=e.slice(4,6);return parseInt(a,10)>12&&(a="12"),a.length===2&&a==="00"&&(a="01"),`${t}-${a}`}function vt(m){const e=m.replace(/\D/g,"").slice(0,2);if(!e)return"";const t=parseInt(e,10);return t>31?"31":t===0?"1":e}function Ze(m){const e=m.trim().toUpperCase();return e.startsWith("I")||e.startsWith("IS")||e.startsWith("ISE")||e.startsWith("ISEN")||e.startsWith("ISENT")||e==="ISENTO"?"ISENTO".slice(0,e.length):m.replace(/\D/g,"").slice(0,14)}function Ie(m){if(typeof m=="number")return m.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});const e=m.replace(/\D/g,"");return e?(parseInt(e,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}function Je(m){if(!m)return 0;const e=m.replace(/[^\d,-]/g,"").replace(",","."),t=parseFloat(e);return isNaN(t)?0:t}function me(m,e){m.addEventListener("input",()=>{m.value=e(m.value)})}const He="acusticamente_auth_remember",bt="acusticamente_manual_logout";function yt(m,e){const t=document.createElement("div");t.className="login-page";const a=L.getSettings(),s=a.nomeMenu||a.nomeFantasia||"Acusticamente";let n={username:"",password:"",remember:!1};try{const M=localStorage.getItem(He);M&&(n={...n,...JSON.parse(M)})}catch{n={username:"",password:"",remember:!1}}t.innerHTML=`
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
  `;const z=t.querySelector("#login-remember"),$=t.querySelector("#btn-back-to-site");$==null||$.addEventListener("click",()=>{e?e():window.location.hash="site"});const o=t.querySelector("#login-form");return o.onsubmit=M=>{var c;M.preventDefault();const l=t.querySelector("#login-username"),x=t.querySelector("#login-password"),P=l.value.trim(),B=x.value.trim(),v=z.checked,A=ie.login(P,B);A.success?(v?localStorage.setItem(He,JSON.stringify({username:P,password:B,remember:!0})):localStorage.removeItem(He),sessionStorage.removeItem(bt),N(`Bem-vindo, ${(c=A.user)==null?void 0:c.nome}!`,"success"),m()):N(A.message,"error")},t}const Be=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,Ue=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function ht(m){var P,B,v;const e=document.createElement("div");e.className="public-site-wrapper";const t=L.getSettings(),a=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",n="(51) 98189-8802",z="51981898802",$="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",o="Segunda a Sexta · Aberto até 20:30",M="https://share.google/NtOxuUNfF6FGJ62tZ",l="https://www.instagram.com/acusticamente.rs",x=`https://wa.me/55${z}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
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
          <a href="${x}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Fale conosco no WhatsApp">
            ${Be}
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
          <a href="${x}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${Be}
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
                ${Ue}
              </div>
              <div class="insta-text">
                <div class="insta-tag">ACOMPANHE NOSSA ESCOLA</div>
                <h4 class="insta-title">@acusticamente.rs</h4>
                <p class="insta-subtitle">Veja a rotina das aulas, eventos e a evolução dos nossos alunos no Instagram.</p>
              </div>
            </div>
            <a href="${l}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" title="Abrir perfil no Instagram">
              ${Ue}
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
                <p>${$}</p>
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
              <a href="${M}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${x}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${Be}
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
        <a href="${x}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${Be}
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
              📍 <a href="${M}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);" title="Ver no Google Maps">
                ${$}
              </a>
            </p>
            <p>📞 <a href="${x}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${n}</a></p>
            <p>🕒 ${o}</p>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Redes Sociais &amp; Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Acompanhe nosso dia a dia ou mande uma mensagem pelo WhatsApp.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${x}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${Be}
              <span>Entrar em contato</span>
            </a>
            <a href="${l}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" style="display: inline-flex;" title="Instagram @acusticamente.rs">
              ${Ue}
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
  `,(P=e.querySelector("#btn-header-login"))==null||P.addEventListener("click",()=>{const A=ie.isAuthenticated();m(A?"home":"login")}),(B=e.querySelector("#btn-footer-login"))==null||B.addEventListener("click",()=>{const A=ie.isAuthenticated();m(A?"home":"login")}),(v=e.querySelector("#site-logo-link"))==null||v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function X(m,e,t,a){const s=t.column===e,n=s?t.direction==="asc"?"▲":"▼":"▲▼",z=(a==null?void 0:a.align)||"left",$=a!=null&&a.extraClass?` ${a.extraClass}`:"",o=a!=null&&a.extraStyle?` ${a.extraStyle}`:"",M=(a==null?void 0:a.title)||`Ordenar por ${m}`;return`
    <th class="sortable-th${$}" data-sort-key="${e}" title="${M}" style="cursor: pointer; user-select: none; text-align: ${z};${o}">
      <div style="display: inline-flex; align-items: center; gap: 6px; justify-content: ${z==="right"?"flex-end":z==="center"?"center":"flex-start"}; width: 100%;">
        <span>${m}</span>
        <span class="sort-arrow-indicator ${s?"active":"inactive"}" style="font-size: 0.65rem; line-height: 1; ${s?"color: var(--color-coral); opacity: 1; font-weight: 700;":"opacity: 0.35; color: inherit;"}">
          ${n}
        </span>
      </div>
    </th>
  `}function Ae(m,e,t){m.querySelectorAll(".sortable-th[data-sort-key]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const n=a.dataset.sortKey;n&&(e.column===n?e.direction=e.direction==="asc"?"desc":"asc":(e.column=n,e.direction="asc"),t({...e}))})})}function Ee(m,e,t){if(!e.column||!t[e.column])return m;const a=t[e.column],s=e.direction==="asc"?1:-1;return[...m].sort((n,z)=>{let $=a(n),o=a(z);return $==null&&o==null?0:$==null?1*s:o==null?-1*s:typeof $=="string"&&typeof o=="string"?$.localeCompare(o,"pt-BR",{numeric:!0,sensitivity:"base"})*s:typeof $=="number"&&typeof o=="number"?($-o)*s:typeof $=="boolean"&&typeof o=="boolean"?($===o?0:$?1:-1)*s:$<o?-1*s:$>o?1*s:0})}const xt=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];function et(m){if(!m)return null;const e=m.trim();if(!e)return null;if(/^\d{1,2}\/\d{1,2}\/\d{4}/.test(e)){const[t,a,s]=e.split("/"),n=parseInt(t,10),z=parseInt(a,10),$=parseInt(s,10);if(!isNaN(n)&&!isNaN(z)&&!isNaN($)&&z>=1&&z<=12&&n>=1&&n<=31)return{day:n,month:z,year:$}}if(/^\d{4}-\d{1,2}-\d{1,2}/.test(e)){const t=e.split("T")[0].split("-"),a=parseInt(t[0],10),s=parseInt(t[1],10),n=parseInt(t[2],10);if(!isNaN(n)&&!isNaN(s)&&!isNaN(a)&&s>=1&&s<=12&&n>=1&&n<=31)return{day:n,month:s,year:a}}return null}function $t(m,e){const t=m.phone.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=m.nome.trim().split(" ")[0]||m.nome;let n="";m.tipo==="Aluno"?n=(e==null?void 0:e.msgAniversarioAluno)||"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Que seu novo ciclo seja repleto de realizações, saúde, alegria e muita música! Parabéns pelo seu dia! 🎶✨":m.tipo==="Professor"?n=(e==null?void 0:e.msgAniversarioProfessor)||"Olá, Prof. {nome}! 🎂🎉 Toda a equipe da Acusticamente te deseja um Feliz Aniversário! Muito obrigado por sua dedicação musical e talento. Que você tenha um ano repleto de sucesso e realizações! 🎶✨":n=(e==null?void 0:e.msgAniversarioAdmin)||"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Muito sucesso, liderança, saúde e grandes conquistas neste novo ciclo! Parabéns! 🎶✨";const z=n.replace(/{nome}/g,s);return`https://wa.me/${a}?text=${encodeURIComponent(z)}`}function tt(m){const e=document.createElement("div"),t=ie.getCurrentUser(),a=L.getStudents(),s=L.getUsers(),n=L.getPlans(),z=L.getAppointments(),$=L.getSettings(),o=L.getTodayDateString(),M=z.filter(v=>v.data===o),l=a.filter(v=>v.status==="ativo").length,x=M.find(v=>v.status==="agendado");let P={column:"horario",direction:"asc"};function B(){var k,p;const v=new Date,A=v.getDate(),c=v.getMonth()+1,b=v.getFullYear(),u=xt[v.getMonth()];$!=null&&$.nomeEscola;const w=[];a.forEach(r=>{const h=et(r.dataNascimento);h&&h.month===c&&w.push({id:r.id,nome:r.nome,tipo:"Aluno",day:h.day,month:h.month,year:h.year,age:b-h.year,phone:r.telefone||r.responsavelTelefone||"",isToday:h.day===A})}),s.forEach(r=>{const h=et(r.dataNascimento);h&&h.month===c&&w.push({id:r.id,nome:r.nome,tipo:r.papel==="admin"?"ADM":r.papel==="professor"?"Professor":"ADM",day:h.day,month:h.month,year:h.year,age:b-h.year,phone:"",isToday:h.day===A})}),w.sort((r,h)=>r.day-h.day);const S=w.filter(r=>r.isToday).length,g=Ee(M,P,{horario:r=>r.horaInicio,aluno:r=>{const h=a.find(f=>f.id===r.alunoId);return(h==null?void 0:h.nome)||""},plano:r=>{const h=n.find(f=>f.id===r.planoId);return(h==null?void 0:h.nome)||""},status:r=>r.status});e.innerHTML=`
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
            <span class="metric-value">${M.length}</span>
            <span class="metric-label">Aulas hoje</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box">
            ${q.alunos}
          </div>
          <div class="metric-data">
            <span class="metric-value">${l}</span>
            <span class="metric-label">Alunos ativos</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box">
            ${q.home}
          </div>
          <div class="metric-data">
            <span class="metric-value">${x?x.horaInicio:"--:--"}</span>
            <span class="metric-label">${x?"Próxima aula":"Nenhuma pendente"}</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box">
            ${q.planos}
          </div>
          <div class="metric-data">
            <span class="metric-value">${n.length}</span>
            <span class="metric-label">Planos de ensino</span>
          </div>
        </div>
      </div>

      <!-- Painel de Aniversariantes do Mês -->
      <div class="panel-card" style="margin-bottom: 20px;">
        <div class="panel-card-header" style="padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.05rem;">🎂</span>
            <h3 class="panel-card-title" style="font-size: 0.92rem; font-weight: 600; color: var(--text-white);">
              Aniversariantes do Mês (${u})
            </h3>
            <span class="badge ${w.length>0?"badge-info":"badge-secondary"}" style="font-size: 0.7rem;">
              ${w.length} ${w.length===1?"aniversariante":"aniversariantes"}
            </span>
          </div>

          ${S>0?`<span class="badge badge-coral" style="font-size: 0.72rem;">🎉 ${S} comemorando hoje!</span>`:""}
        </div>

        <div style="padding: 12px 18px;">
          ${w.length===0?`<div style="padding: 12px 0; text-align: center; color: var(--text-muted); font-size: 0.82rem;">
                   Nenhum aniversariante registrado em ${u}.
                 </div>`:`<div style="display: flex; flex-direction: column; gap: 8px; max-height: 260px; overflow-y: auto;">
                   ${w.map(r=>{const h=r.phone?$t(r,$):"",f=r.isToday;return`
                         <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; background: ${f?"rgba(234, 67, 53, 0.08)":"rgba(255, 255, 255, 0.02)"}; border: 1px solid ${f?"rgba(234, 67, 53, 0.28)":"var(--border-subtle)"}; border-radius: var(--radius-md); flex-wrap: wrap;">
                           
                           <!-- Lado Esquerdo: Dia, Nome, Idade e Tipo -->
                           <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                             <div style="min-width: 44px; height: 36px; padding: 0 4px; border-radius: var(--radius-sm); background: ${f?"var(--color-coral)":"rgba(255, 255, 255, 0.04)"}; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid ${f?"transparent":"rgba(255, 255, 255, 0.06)"};">
                               <span style="font-size: 0.58rem; text-transform: uppercase; font-weight: 700; color: ${f?"#ffffff":"var(--text-muted)"}; line-height: 1;">DIA</span>
                               <span style="font-size: 0.92rem; font-weight: 700; color: ${f?"#ffffff":"var(--text-white)"}; line-height: 1.1;">${String(r.day).padStart(2,"0")}</span>
                             </div>

                             <div style="display: flex; flex-direction: column; min-width: 0;">
                               <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                                 <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-white); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                   ${r.nome}
                                 </span>
                                 ${f?'<span class="badge badge-coral" style="font-size: 0.64rem; padding: 2px 5px;">Hoje! 🎂</span>':""}
                                 <span class="badge ${r.tipo==="Aluno"?"badge-info":r.tipo==="Professor"?"badge-warning":"badge-coral"}" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">
                                   ${r.tipo}
                                 </span>
                               </div>
                               <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 2px;">
                                 ${r.age>0?`Completa <strong style="color: var(--text-white);">${r.age} anos</strong>`:""}
                                 ${r.phone?`<span style="color: var(--text-muted); margin-left: 6px;">• ${r.phone}</span>`:""}
                               </div>
                             </div>
                           </div>

                           <!-- Lado Direito: Botão WhatsApp de Parabéns (Disponível apenas no dia) -->
                           <div>
                             ${r.phone?r.isToday?`<a 
                                        href="${h}" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="btn btn-sm" 
                                        title="Enviar mensagem de parabéns pelo WhatsApp hoje"
                                        style="display: inline-flex; align-items: center; gap: 6px; background: rgba(37, 211, 102, 0.15); color: #25d366; border: 1px solid rgba(37, 211, 102, 0.35); text-decoration: none; padding: 6px 14px; font-size: 0.78rem; font-weight: 600; border-radius: var(--radius-sm); transition: all var(--transition-fast); white-space: nowrap;"
                                        onmouseover="this.style.background='#25d366'; this.style.color='#ffffff';"
                                        onmouseout="this.style.background='rgba(37, 211, 102, 0.15)'; this.style.color='#25d366';"
                                      >
                                        ${q.whatsapp} Parabenizar
                                      </a>`:`<button 
                                        type="button" 
                                        class="btn btn-sm" 
                                        disabled 
                                        title="O envio de parabéns fica liberado apenas no dia do aniversário (${String(r.day).padStart(2,"0")}/${String(r.month).padStart(2,"0")})"
                                        style="opacity: 0.45; cursor: not-allowed; display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.04); color: var(--text-muted); border: 1px solid var(--border-subtle); padding: 5px 12px; font-size: 0.76rem; border-radius: var(--radius-sm); white-space: nowrap;"
                                      >
                                        ${q.whatsapp} Disponível no dia ${String(r.day).padStart(2,"0")}
                                      </button>`:'<span style="font-size: 0.72rem; color: var(--text-muted); font-style: italic; white-space: nowrap;">Sem WhatsApp</span>'}
                           </div>
                         </div>
                       `}).join("")}
                 </div>`}
        </div>
      </div>

      <!-- Tabela de Aulas de Hoje -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Aulas de Hoje (${g.length})</h3>
          <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
            Ver Agenda Completa
          </button>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Horário","horario",P,{extraStyle:"min-width: 100px;"})}
                ${X("Aluno","aluno",P)}
                ${X("Plano de Ensino","plano",P,{extraClass:"col-hide-md"})}
                ${X("Status","status",P,{extraClass:"col-hide-sm"})}
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody id="today-classes-tbody">
              ${g.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':g.map(r=>{const h=a.find(d=>d.id===r.alunoId),f=n.find(d=>d.id===r.planoId),i=r.status==="concluido",I=r.status==="agendado";let y='<span class="badge badge-warning">⏳ Agendado</span>';return i?y='<span class="badge badge-success">✓ Concluído</span>':r.status==="falta_justificada"?y='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':r.status==="falta_injustificada"?y='<span class="badge badge-danger">✕ Falta Injustificada</span>':r.status==="cancelado"&&(y='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                          <tr data-app-id="${r.id}">
                            <td style="white-space: nowrap;">
                              <strong style="color: var(--text-white); font-size: 0.84rem;">${r.horaInicio} - ${r.horaFim}</strong>
                              ${r.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
                            </td>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${((h==null?void 0:h.nome)||"A")[0]}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${(h==null?void 0:h.nome)||"Aluno não vinculado"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="white-space: nowrap;">
                              <span style="color: var(--text-secondary); font-size: 0.82rem;">${(f==null?void 0:f.nome)||"Plano Personalizado"}</span>
                            </td>
                            <td class="col-hide-sm" style="white-space: nowrap;">
                              ${y}
                            </td>
                            <td style="text-align: right; white-space: nowrap;">
                              ${I?`<button class="btn btn-secondary btn-complete-class" data-id="${r.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                       ✓ Concluir
                                     </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${i?"Finalizada":"Registrada"}</span>`}
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,Ae(e,P,r=>{P=r,B()}),(k=e.querySelector("#home-btn-new-appointment"))==null||k.addEventListener("click",()=>{m("agenda")}),(p=e.querySelector("#home-btn-view-all-agenda"))==null||p.addEventListener("click",()=>{m("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(r=>{r.addEventListener("click",h=>{const f=h.currentTarget.dataset.id;f&&(L.updateAppointment(f,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),N("Aula concluída com sucesso!","success"),m("home"))})})}return B(),e}function wt(m){const e=document.createElement("div"),t=ie.getCurrentUser();let a=new Date;function s(){var S,g,k,p;const $=L.getStudents();L.getPlans();const o=L.getAppointments(),M=a.getFullYear(),l=a.getMonth(),x=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],P=new Date(M,l,1).getDay(),B=new Date(M,l+1,0).getDate(),v=new Date(M,l,0).getDate(),A=new Date,c=A.getFullYear()===M&&A.getMonth()===l,b=[];for(let r=P;r>0;r--){const h=v-r+1;b.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${h}</span>
          </div>
        </div>
      `)}for(let r=1;r<=B;r++){const h=R=>R.toString().padStart(2,"0"),f=`${M}-${h(l+1)}-${h(r)}`,i=c&&A.getDate()===r,I=o.filter(R=>R.data===f),y=I.slice(0,3).map(R=>{const j=$.find(_=>_.id===R.alunoId),U=j?j.nome.split(" ")[0]:"Aula";let E="",D="";return R.status==="concluido"?(E="concluido",D="✓ "):R.status==="falta_justificada"?(E="falta-justificada",D="⚠️ "):R.status==="falta_injustificada"?(E="falta-injustificada",D="✕ "):R.tipoAula==="reposicao"&&(E="reposicao",D="🔄 "),`
            <div class="calendar-appointment-badge ${E}" 
                 data-app-id="${R.id}" 
                 title="${R.horaInicio} - ${(j==null?void 0:j.nome)||"Aluno"} (${R.status}${R.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${D}${R.horaInicio}</strong> ${U}
            </div>
          `}).join(""),d=I.length>3?I.length-3:0,T=d>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${d} mais</div>`:"";b.push(`
        <div class="calendar-day-cell ${i?"today":""}" data-date="${f}">
          <div class="day-cell-header">
            <span class="day-number">${r}</span>
            ${I.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${I.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${y}
            ${T}
          </div>
        </div>
      `)}const u=b.length,w=u>35?42-u:35-u;for(let r=1;r<=w;r++)b.push(`
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
            <h2 class="calendar-month-title">${x[l]} de ${M}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${c?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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

          ${b.join("")}
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
    `,(S=e.querySelector("#agenda-btn-prev"))==null||S.addEventListener("click",()=>{a.setMonth(a.getMonth()-1),s()}),(g=e.querySelector("#agenda-btn-next"))==null||g.addEventListener("click",()=>{a.setMonth(a.getMonth()+1),s()}),(k=e.querySelector("#agenda-btn-today"))==null||k.addEventListener("click",()=>{a=new Date,s()}),(p=e.querySelector("#agenda-btn-new-app"))==null||p.addEventListener("click",()=>{z()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(r=>{r.addEventListener("click",h=>{const f=r.dataset.date;f&&n(f)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(r=>{r.addEventListener("click",h=>{h.stopPropagation();const f=r.dataset.appId,i=o.find(I=>I.id===f);i&&n(i.data)})})}function n($){const o=L.getStudents(),M=L.getPlans(),l=L.getAppointments().filter(b=>b.data===$),[x,P,B]=$.split("-"),v=`${B}/${P}/${x}`,A=l.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${l.map(b=>{const u=o.find(I=>I.id===b.alunoId),w=M.find(I=>I.id===b.planoId),S=b.status==="concluido",g=b.status==="falta_justificada",k=b.status==="falta_injustificada",p=b.status==="cancelado",r=b.status==="agendado",h=b.tipoAula==="reposicao";let f="var(--color-coral)",i='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return S?(f="var(--status-success)",i='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):g?(f="#f59e0b",i='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):k?(f="var(--status-danger)",i='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):p&&(f="var(--border-subtle)",i='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${f};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${b.horaInicio} - ${b.horaFim}</strong>
                        ${i}
                        ${h?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${b.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(u==null?void 0:u.nome)||"Não vinculado"}</strong>
                        ${u!=null&&u.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${u.instrumentoPrincipal}</span>`:""}
                        ${w?` &bull; Plano: <span style="color: #ff9187;">${w.nome}</span>`:""}
                      </div>

                      ${b.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${b.justificativaFalta}
                             </div>`:""}

                      ${b.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${b.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${b.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${de(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${b.id}" title="Editar Detalhes">
                              ${q.edit}
                            </button>
                          `:""}
                      ${de(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${b.id}" title="Excluir">
                              ${q.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${de(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${r?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${b.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${b.id}" data-name="${(u==null?void 0:u.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${b.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${g&&!b.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${b.id}" data-student-id="${b.alunoId}" data-title="${b.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,c=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${l.length}</strong>
          </span>
          ${de(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${q.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${A}
      </div>
    `;he({title:`Aulas do Dia: ${v}`,bodyHtml:c,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var b;(b=document.getElementById("btn-modal-new-appointment"))==null||b.addEventListener("click",()=>{Ne(),z({defaultDate:$})}),document.querySelectorAll(".btn-mark-presence").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id;S&&(L.marcarPresenca(S,(t==null?void 0:t.nome)||"Administrador"),N("Presença confirmada e aula concluída!","success"),s(),n($))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id,g=w.currentTarget.dataset.name;if(!S)return;const k=prompt(`Informe o motivo da falta justificada de ${g} (Ex: Atestado médico, Viagem em família):`);if(k===null)return;const p=L.registrarFalta(S,!0,k,(t==null?void 0:t.nome)||"Administrador");N(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${p.saldoReposicoes}).`,"success"),s(),n($)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id;S&&$e({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{L.registrarFalta(S,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),N("Falta injustificada registrada.","info"),s(),n($)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget,g=S.dataset.id,k=S.dataset.studentId,p=S.dataset.title;Ne(),z({studentId:k,aulaOriginalId:g,tipoAula:"reposicao",titulo:p?`Reposição: ${p}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id,g=L.getAppointments().find(k=>k.id===S);g&&(Ne(),z({existingApp:g}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id,g=L.getAppointments().find(k=>k.id===S);g&&$e({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${g.titulo}</strong>"?`,onConfirm:()=>{L.deleteAppointment(g.id,(t==null?void 0:t.nome)||"Administrador"),N("Compromisso removido.","info"),s(),n($)}})})})},50)}function z($){const o=L.getStudents(),M=L.getPlans(),l=$==null?void 0:$.existingApp,x=!!l,P=(l==null?void 0:l.alunoId)||($==null?void 0:$.studentId)||"",B=(l==null?void 0:l.data)||($==null?void 0:$.defaultDate)||L.getTodayDateString(),v=((l==null?void 0:l.tipoAula)||($==null?void 0:$.tipoAula))==="reposicao",A=o.map(w=>`<option value="${w.id}" ${P===w.id?"selected":""} data-planoid="${w.planoId||""}">${w.nome} (${w.instrumentoPrincipal||"Geral"})</option>`).join(""),c=M.map(w=>{const S=(w.modulos||[]).reduce((g,k)=>{var p;return g+(((p=k.aulas)==null?void 0:p.length)||0)},0);return`<option value="${w.id}" ${(l==null?void 0:l.planoId)===w.id?"selected":""} data-total-aulas="${S}">${w.nome} (${S} aulas)</option>`}).join("");let b=x||v?"manual":"plano";const u=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!x&&!v?`
              <!-- Seletor de Modo de Agendamento -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px; display: flex; gap: 4px;">
                <button type="button" class="btn btn-sm ${b==="plano"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="plano" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  📚 Gerar pelo Plano Pedagógico
                </button>
                <button type="button" class="btn btn-sm ${b==="manual"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="manual" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  ✏️ Agendamento Manual
                </button>
              </div>
            `:""}

        <!-- PAINEL 1: GERAR PELO PLANO PEDAGÓGICO -->
        <div id="panel-app-plano" style="display: ${b==="plano"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.78rem; color: #fca5a5;">
            💡 <strong>Geração Automática:</strong> As aulas serão agendadas semanalmente na agenda a partir da data de início, cobrindo todos os módulos do plano selecionado.
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-student">Aluno *</label>
            <select id="app-plan-student" class="form-select" required>
              <option value="">Selecione o Aluno...</option>
              ${A}
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-select">Plano Pedagógico *</label>
            <select id="app-plan-select" class="form-select" required>
              <option value="">Selecione o Plano...</option>
              ${c}
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
        <div id="panel-app-manual" style="display: ${b==="manual"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <!-- Tipo de Aula -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
            <label class="form-label" style="margin: 0; font-size: 0.82rem; font-weight: 600;">Tipo:</label>
            <div style="display: flex; gap: 14px;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: var(--text-white);">
                <input type="radio" name="app-tipo-aula" value="regular" ${v?"":"checked"} style="accent-color: var(--color-coral);" />
                Regular
              </label>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.82rem; color: #4ade80;">
                <input type="radio" name="app-tipo-aula" value="reposicao" ${v?"checked":""} style="accent-color: #22c55e;" />
                🔄 Reposição
              </label>
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-title">Título *</label>
            <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Introdução" value="${(l==null?void 0:l.titulo)||($==null?void 0:$.titulo)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-student">Aluno *</label>
              <select id="app-student" class="form-select">
                <option value="">Selecione...</option>
                ${A}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan">Plano Pedagógico</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${c}
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

        ${x?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${q.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;he({title:x?"Editar Aula":v?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:u,confirmText:x?"Salvar":"Confirmar",onConfirm:()=>{const w=(t==null?void 0:t.nome)||"Administrador";if(b==="plano"&&!x){const T=document.getElementById("app-plan-student").value,R=document.getElementById("app-plan-select").value,j=document.getElementById("app-plan-date-start").value,U=document.getElementById("app-plan-time-start").value,E=document.getElementById("app-plan-time-end").value;if(!T)return N("Selecione o aluno.","error"),!1;if(!R)return N("Selecione o plano pedagógico.","error"),!1;if(!j||!U||!E)return N("Informe data de início e horários.","error"),!1;const D=L.generateAppointmentsFromPlan(T,R,j,U,E,w);return D.length===0?(N("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(N(`Sucesso! ${D.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const S=document.getElementById("app-title").value.trim(),g=document.getElementById("app-student").value,k=document.getElementById("app-plan").value,p=document.getElementById("app-date").value,r=document.getElementById("app-time-start").value,h=document.getElementById("app-time-end").value,f=document.getElementById("app-status").value,i=document.getElementById("app-justificativa").value.trim(),I=document.getElementById("app-obs").value.trim(),y=document.querySelector('input[name="app-tipo-aula"]:checked'),d=(y==null?void 0:y.value)||"regular";if(!S||!g||!p||!r)return N("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;if(x&&l)L.updateAppointment(l.id,{titulo:S,alunoId:g,planoId:k||void 0,data:p,horaInicio:r,horaFim:h,status:f,tipoAula:d,justificativaFalta:i||void 0,observacoes:I},w),N("Aula atualizada com sucesso!","success");else if(d==="reposicao")try{L.agendarReposicao({titulo:S,alunoId:g,planoId:k||void 0,data:p,horaInicio:r,horaFim:h,status:f,justificativaFalta:i||void 0,observacoes:I},$==null?void 0:$.aulaOriginalId,w),N("Aula de reposição agendada (1 crédito abatido com sucesso)!","success")}catch(T){return N((T==null?void 0:T.message)||"Erro ao agendar reposição. Verifique o saldo do aluno.","error"),!1}else L.addAppointment({titulo:S,alunoId:g,planoId:k||void 0,data:p,horaInicio:r,horaFim:h,status:f,tipoAula:d,justificativaFalta:i||void 0,observacoes:I},w),N("Aula agendada com sucesso!","success");return s(),!0}}),setTimeout(()=>{var I;const w=document.querySelectorAll(".btn-app-mode"),S=document.getElementById("panel-app-plano"),g=document.getElementById("panel-app-manual");w.forEach(y=>{y.addEventListener("click",d=>{const T=d.currentTarget.dataset.mode;b=T,w.forEach(R=>{R.classList.remove("btn-primary"),R.classList.add("btn-secondary")}),d.currentTarget.classList.remove("btn-secondary"),d.currentTarget.classList.add("btn-primary"),S&&(S.style.display=T==="plano"?"flex":"none"),g&&(g.style.display=T==="manual"?"flex":"none")})});const k=document.getElementById("app-student"),p=document.getElementById("app-student-credits-info"),r=document.getElementById("app-student-credits-val"),h=document.querySelectorAll('input[name="app-tipo-aula"]'),f=()=>{var j;if(!k||!p||!r)return;const y=k.value;if(!y){p.style.display="none";return}const d=L.getStudentById(y),T=d?d.saldoReposicoes:0;r.textContent=`${T} ${T===1?"crédito":"créditos"}`;const R=((j=document.querySelector('input[name="app-tipo-aula"]:checked'))==null?void 0:j.value)==="reposicao";p.style.display="flex",T===0&&R?(p.style.background="rgba(239, 68, 68, 0.15)",p.style.borderColor="rgba(239, 68, 68, 0.4)",p.style.color="#f87171"):(p.style.background="rgba(59, 130, 246, 0.1)",p.style.borderColor="rgba(59, 130, 246, 0.3)",p.style.color="#93c5fd")};k==null||k.addEventListener("change",f),h.forEach(y=>y.addEventListener("change",f)),f();const i=document.getElementById("app-plan-student");i==null||i.addEventListener("change",()=>{const y=i.selectedOptions[0],d=y==null?void 0:y.getAttribute("data-planoid");if(d){const T=document.getElementById("app-plan-select");T&&(T.value=d)}}),x&&l&&((I=document.getElementById("btn-delete-app"))==null||I.addEventListener("click",()=>{$e({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${l.titulo}</strong>"?`,onConfirm:()=>{L.deleteAppointment(l.id,(t==null?void 0:t.nome)||"Administrador"),N("Aula removida.","info"),Ne(),s()}})}))},50)}return s(),e}const At=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function at(m){const e=(m||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function Et(m){if(!m)return"";const e=new Date(m+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,`${a} anos`}function ot(m){if(!m)return null;const e=new Date(m+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,a}function St(m,e){const t=m.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${a}?text=${s}`}function rt(m,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},a=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${m.id.toUpperCase()}</div>
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
              <strong>${m.descricao}</strong>
              ${m.observacoes?`<br><small style="color: #6b7280;">${m.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${m.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${m.dataPagamento?m.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${m.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${m.formaPagamento?t[m.formaPagamento]||m.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${m.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;he({title:`Recibo de Pagamento: ${m.descricao}`,bodyHtml:a,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function It(m){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s={column:"nome",direction:"asc"};function n(){var c,b;const o=L.getStudents(),M=L.getPlans(),l=de(t,"alunos","cadastrar"),x=de(t,"alunos","alterar"),P=de(t,"alunos","excluir"),B=o.filter(u=>u.nome.toLowerCase().includes(a.toLowerCase())||u.email.toLowerCase().includes(a.toLowerCase())||u.telefone.includes(a)||u.instrumentoPrincipal&&u.instrumentoPrincipal.toLowerCase().includes(a.toLowerCase())||u.responsavelNome&&u.responsavelNome.toLowerCase().includes(a.toLowerCase())),v=Ee(B,s,{nome:u=>u.nome,instrumento:u=>u.instrumentoPrincipal||"",contato:u=>u.telefone||u.email||"",plano:u=>{const w=M.find(S=>S.id===u.planoId);return(w==null?void 0:w.nome)||""},status:u=>u.status});e.innerHTML=`
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${q.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${v.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Aluno","nome",s,{extraStyle:"min-width: 160px;"})}
                ${X("Instrumento","instrumento",s,{extraClass:"col-hide-md",extraStyle:"width: 180px;"})}
                ${X("Contato","contato",s,{extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                ${X("Plano de Ensino","plano",s,{extraClass:"col-hide-sm",extraStyle:"width: 180px;"})}
                ${X("Status","status",s,{extraClass:"col-hide-xs",extraStyle:"width: 120px;"})}
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${v.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':v.map(u=>{const w=M.find(g=>g.id===u.planoId),S=u.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${u.nome[0]||"A"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${u.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${at(u.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${u.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${u.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-white); white-space: nowrap; display: block;">
                                ${(w==null?void 0:w.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                              ${(u.saldoReposicoes||0)>0?`<span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.64rem; padding: 1px 5px; margin-top: 2px; display: inline-block;">
                                      ⚡ ${u.saldoReposicoes} ${u.saldoReposicoes===1?"crédito":"créditos"} de remarcação
                                     </span>`:""}
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${S?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${S?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${u.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${q.profile}
                                </button>
                                ${x?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${u.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${P?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${u.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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
    `;const A=e.querySelector("#student-search-input");A==null||A.addEventListener("input",u=>{a=u.target.value,n();const w=e.querySelector("#student-search-input");w&&(w.focus(),w.selectionStart=w.selectionEnd=w.value.length)}),(c=e.querySelector("#btn-clear-search"))==null||c.addEventListener("click",()=>{a="",n()}),Ae(e,s,u=>{s=u,n()}),(b=e.querySelector("#btn-new-student"))==null||b.addEventListener("click",()=>{$()}),e.querySelectorAll(".btn-view-student").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id,g=L.getStudents().find(k=>k.id===S);g&&z(g)})}),e.querySelectorAll(".btn-edit-student").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id,g=L.getStudents().find(k=>k.id===S);g&&$(g)})}),e.querySelectorAll(".btn-delete-student").forEach(u=>{u.addEventListener("click",w=>{const S=w.currentTarget.dataset.id,g=L.getStudents().find(k=>k.id===S);g&&$e({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${g.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{L.deleteStudent(g.id,(t==null?void 0:t.nome)||"Administrador"),N(`Aluno "${g.nome}" excluído.`,"info"),n()}})})})}function z(o){const M=L.getPlans(),l=L.getPaymentPlans();M.find(i=>i.id===o.planoId);const x=l.find(i=>i.id===o.planoPagamentoId),P=L.getStudentAppointments(o.id),B=L.getStudentPayments(o.id),v=Et(o.dataNascimento),A=St(o.telefone,o.nome),c=o.saldoReposicoes||0,b=L.isStudentOverdue(o.id),u=o.status==="ativo",w=de(t,"financeiro","alterar"),S=P.length,g=P.filter(i=>i.status==="concluido").length,k=P.filter(i=>i.status==="falta_justificada").length,p=P.filter(i=>i.status==="falta_injustificada").length,r=B.filter(i=>i.status==="pago").reduce((i,I)=>i+I.valor,0),h=B.filter(i=>i.status!=="pago").reduce((i,I)=>i+I.valor,0),f=`
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
                <span class="badge ${u?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${u?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${at(o.instrumentoPrincipal)} ${o.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${o.nivelMusical?o.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${o.moduloAtual?`&bull; <span style="color: var(--color-coral); font-weight: 600;">📖 ${o.moduloAtual}${o.aulaAtual?` &bull; ${o.aulaAtual}`:""}</span>`:""}
                ${v?`&bull; <span style="color: var(--text-muted);">${v}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${A?`
                  <a href="${A}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
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
              ${b?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${B.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${S}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${g}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${k+p}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${c}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Remarcações</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${P.length})
              </span>
              ${c>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${c})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${P.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
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
                        ${P.map(i=>{const I=i.status==="concluido",y=i.status.startsWith("falta"),d=i.status==="agendado",T=I?'<span class="badge badge-success" style="font-size: 0.65rem; padding: 1px 5px;">Presente</span>':y?`<span class="badge ${i.status==="falta_justificada"?"badge-coral":"badge-danger"}" style="font-size: 0.65rem; padding: 1px 5px;">${i.status==="falta_justificada"?"Falta Justificada":"Falta Injustificada"}</span>`:d?'<span class="badge badge-warning" style="font-size: 0.65rem; padding: 1px 5px;">Agendado</span>':'<span class="badge badge-secondary" style="font-size: 0.65rem; padding: 1px 5px;">Cancelado</span>',R=i.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem; padding: 1px 5px;">🔄 Reposição</span>':'<span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); font-size: 0.65rem; padding: 1px 5px;">Regular</span>';return`
                              <tr>
                                <td style="white-space: nowrap; font-weight: 500;">
                                  ${i.data.split("-").reverse().join("/")} <span style="color: var(--text-muted); font-size: 0.7rem;">${i.horaInicio}</span>
                                </td>
                                <td>${i.titulo}</td>
                                <td class="col-hide-sm">${R}</td>
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
                ${x?`${x.nome} (${x.modalidade==="individual"?"👤 Individual":"👥 Turma"} &bull; ${x.periodicidade.toUpperCase()})`:"Plano Padrão"}
              </div>
            </div>
            ${o.isSegundaMatricula?`<span class="badge" style="background: rgba(255, 255, 255, 0.08); color: var(--text-secondary); border: 1px solid var(--border-subtle); font-size: 0.72rem; padding: 3px 8px;">
                    🏷️ 2ª Matrícula / Familiar
                   </span>`:""}
          </div>

          <!-- Status Sucinto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.8rem; color: var(--text-white);">
              ${b?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
                R$ ${r.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${h>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${h.toFixed(2)}
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
                        ${B.map(i=>{const I=i.status==="pago",y=i.status==="atrasado";let d="";return I?d='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':y?d='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':d='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${i.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${i.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${i.valor.toFixed(2)}</td>
                              <td>${d}</td>
                              <td class="col-hide-sm">${i.dataPagamento?i.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${I?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${i.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:w?`
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
    `;he({title:`Ficha do Aluno: ${o.nome}`,bodyHtml:f,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var T;const i=document.getElementById("btn-tab-pedagogico"),I=document.getElementById("btn-tab-financeiro"),y=document.getElementById("panel-tab-pedagogico"),d=document.getElementById("panel-tab-financeiro");i==null||i.addEventListener("click",()=>{i.classList.add("active"),I==null||I.classList.remove("active"),y&&(y.style.display="flex"),d&&(d.style.display="none")}),I==null||I.addEventListener("click",()=>{I.classList.add("active"),i==null||i.classList.remove("active"),d&&(d.style.display="flex"),y&&(y.style.display="none")}),(T=document.getElementById("btn-quick-schedule-reposicao"))==null||T.addEventListener("click",()=>{Ne(),m("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(R=>{R.addEventListener("click",j=>{const U=j.currentTarget.dataset.id,E=B.find(D=>D.id===U);E&&rt(E,o)})}),document.querySelectorAll(".btn-pay-now").forEach(R=>{R.addEventListener("click",j=>{const U=j.currentTarget.dataset.id,E=B.find(F=>F.id===U);if(!E)return;const D=L.getTodayDateString(),_=`
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${E.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${E.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${E.dataVencimento.split("-").reverse().join("/")} &bull; Aluno: ${o.nome}
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
          `;he({title:`Dar Baixa: ${E.descricao}`,bodyHtml:_,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const F=document.getElementById("baixa-data").value,V=document.getElementById("baixa-forma").value,G=document.getElementById("baixa-obs").value;if(!F)return N("Informe a data de recebimento.","error"),!1;const W=(t==null?void 0:t.nome)||"Administrador";L.darBaixaPayment(E.id,F,V,W,G),N(`Baixa de R$ ${E.valor.toFixed(2)} efetuada com sucesso!`,"success"),n();const J=L.getStudents().find(Y=>Y.id===o.id)||o;return z(J),setTimeout(()=>{var Y;(Y=document.getElementById("btn-tab-financeiro"))==null||Y.click()},50),!0}})})})},50)}function $(o){const M=L.getPlans(),l=L.getPaymentPlans(),x=!!o;o&&L.getStudentPayments(o.id);const P=M.map(c=>`<option value="${c.id}" ${(o==null?void 0:o.planoId)===c.id?"selected":""}>${c.nome}${c.instrumento?` (${c.instrumento})`:""}</option>`).join(""),B=l.filter(c=>c.ativo).map(c=>`<option value="${c.id}" ${(o==null?void 0:o.planoPagamentoId)===c.id?"selected":""} data-valor="${c.valorMensal}" data-desconto="${c.descontoSegundaMatricula??0}">${c.nome} (${c.modalidade==="individual"?"👤 Individual":"👥 Turma"} - ${c.periodicidade.toUpperCase()}) - R$ ${c.valorMensal.toFixed(2)}/mês</option>`).join(""),v=At.map(c=>`<option value="${c}" ${(o==null?void 0:o.instrumentoPrincipal)===c?"selected":""}>${c}</option>`).join(""),A=`
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
                ${v}
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
              ${P}
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
                <input type="text" id="student-valor-mensalidade" class="form-input" placeholder="0,00" value="${(o==null?void 0:o.valorMensalidade)!==void 0?Ie(o.valorMensalidade):"280,00"}" required />
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
    `;he({title:x?`Editar: ${o.nome}`:"Cadastrar Aluno",bodyHtml:A,modalClass:"modal-lg",confirmText:x?"Salvar":"Cadastrar",leftButton:{id:"btn-delete-student-appointments",text:"Excluir agendamentos deste aluno",btnClass:"btn-secondary",disabled:!x||!o,title:!x||!o?"Disponível apenas para alunos já cadastrados":"Excluir todos os agendamentos vinculados a este aluno",onClick:()=>{o&&$e({title:"Excluir Agendamentos",message:"Tem certeza que deseja apagar todos os agendamentos deste aluno?",confirmText:"Sim, apagar agendamentos",confirmBtnClass:"btn-danger",onConfirm:()=>{const c=(t==null?void 0:t.nome)||"Administrador",b=L.deleteStudentAppointments(o.id,c);b>0?N(`Todos os ${b} agendamento(s) do aluno "${o.nome}" foram apagados.`,"info"):N(`Nenhum agendamento encontrado para o aluno "${o.nome}".`,"info")}})}},onConfirm:()=>{var Y,K,te,Z,ee,ae,O,re,ne,ge;const c=document.getElementById("student-nome").value.trim(),b=document.getElementById("student-nascimento").value,u=document.getElementById("student-email").value.trim(),w=document.getElementById("student-telefone").value.trim(),S=((Y=document.getElementById("student-cpf"))==null?void 0:Y.value.trim())||void 0,g=document.getElementById("student-resp-nome").value.trim(),k=document.getElementById("student-resp-parentesco").value,p=document.getElementById("student-resp-tel").value.trim(),r=((K=document.getElementById("student-resp-cpf"))==null?void 0:K.value.trim())||void 0,h=document.getElementById("student-instrumento").value,f=document.getElementById("student-nivel").value,i=document.getElementById("student-plano").value,I=((te=document.getElementById("student-plano-pagamento"))==null?void 0:te.value)||void 0,y=((Z=document.getElementById("student-segunda-matricula"))==null?void 0:Z.checked)||!1,d=document.getElementById("student-status").value,T=((ae=(ee=document.getElementById("student-modulo"))==null?void 0:ee.value)==null?void 0:ae.trim())||void 0,R=((re=(O=document.getElementById("student-aula"))==null?void 0:O.value)==null?void 0:re.trim())||void 0,j=(ne=document.getElementById("student-valor-mensalidade"))==null?void 0:ne.value,U=Je(j),E=(ge=document.getElementById("student-dia-vencimento"))==null?void 0:ge.value,D=Math.min(31,Math.max(1,parseInt(E,10)||10)),_=document.getElementById("student-obs").value.trim(),F=[];c||F.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),b||F.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),w?w.replace(/\D/g,"").length<10&&F.push({label:"Celular do Aluno incompleto",fieldId:"student-telefone",tabId:"tab-pessoal"}):F.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),S&&S.replace(/\D/g,"").length!==11&&F.push({label:"CPF do Aluno incompleto (11 dígitos)",fieldId:"student-cpf",tabId:"tab-pessoal"}),u&&!nt(u)&&F.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const V=ot(b);V!==null&&V<18&&(g||F.push({label:`Nome do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),k||F.push({label:`Parentesco do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),p?p.replace(/\D/g,"").length<10&&F.push({label:"Celular do Responsável incompleto",fieldId:"student-resp-tel",tabId:"tab-resp"}):F.push({label:`Celular do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"}),r&&r.replace(/\D/g,"").length!==11&&F.push({label:"CPF do Responsável incompleto (11 dígitos)",fieldId:"student-resp-cpf",tabId:"tab-resp"})),d||F.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!j||U<=0)&&F.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const W=parseInt(E,10);if((!E||isNaN(W)||W<1||W>31)&&F.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),F.length>0){const H=ue=>{const pe=document.querySelectorAll(".btn-form-tab"),we=document.querySelectorAll(".form-tab-panel");pe.forEach(ce=>{ce.dataset.tab===ue?ce.classList.add("active"):ce.classList.remove("active")}),we.forEach(ce=>{ce.style.display=ce.id===`form-panel-${ue}`?"flex":"none"})},oe=document.createElement("div");oe.id="student-validation-alert",oe.style.cssText=`
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
                  ${F.map(ue=>`<li style="line-height: 1.4;"><strong style="color: #ffffff;">${ue.label}</strong></li>`).join("")}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `,document.body.appendChild(oe);const le=oe.querySelector("#btn-validation-ok");return le==null||le.focus(),le==null||le.addEventListener("click",()=>{oe.remove();const ue=F[0];H(ue.tabId),setTimeout(()=>{const pe=document.getElementById(ue.fieldId);pe&&(pe.focus(),pe.scrollIntoView({behavior:"smooth",block:"center"}),pe.style.outline="2px solid var(--color-coral)",pe.style.borderColor="var(--color-coral)",setTimeout(()=>{pe.style.outline="",pe.style.borderColor=""},3500))},100)}),!1}const J=(t==null?void 0:t.nome)||"Administrador";return x&&o?(L.updateStudent(o.id,{nome:c,dataNascimento:b,email:u,telefone:w,cpf:S,responsavelNome:g,responsavelParentesco:k,responsavelTelefone:p,responsavelCpf:r,instrumentoPrincipal:h,nivelMusical:f,planoId:i,planoPagamentoId:I,isSegundaMatricula:y,status:d,moduloAtual:T,aulaAtual:R,valorMensalidade:U,diaVencimento:D,observacoes:_},J),N("Dados do aluno atualizados com sucesso!","success")):(L.addStudent({nome:c,dataNascimento:b,email:u,telefone:w,cpf:S,responsavelNome:g,responsavelParentesco:k,responsavelTelefone:p,responsavelCpf:r,instrumentoPrincipal:h,nivelMusical:f,planoId:i,planoPagamentoId:I,isSegundaMatricula:y,status:d,moduloAtual:T,aulaAtual:R,valorMensalidade:U,diaVencimento:D,observacoes:_},J),N("Aluno cadastrado com sucesso!","success")),n(),!0}}),setTimeout(()=>{const c=document.querySelectorAll(".btn-form-tab"),b=document.querySelectorAll(".form-tab-panel");c.forEach(V=>{V.addEventListener("click",G=>{const W=G.currentTarget.dataset.tab;c.forEach(J=>{J.classList.remove("active")}),G.currentTarget.classList.add("active"),b.forEach(J=>{J.style.display=J.id===`form-panel-${W}`?"flex":"none"})})});const u=document.getElementById("student-cpf");u&&me(u,Qe);const w=document.getElementById("student-telefone");w&&me(w,je);const S=document.getElementById("student-resp-cpf");S&&me(S,Qe);const g=document.getElementById("student-resp-tel");g&&me(g,je);const k=document.getElementById("student-valor-mensalidade");k&&me(k,Ie);const p=document.getElementById("student-dia-vencimento");p&&me(p,vt);const r=document.getElementById("student-plano-pagamento"),h=document.getElementById("student-segunda-matricula"),f=document.getElementById("summary-plano-base"),i=document.getElementById("summary-plano-desc"),I=document.getElementById("summary-plano-final"),y=()=>{const V=r==null?void 0:r.value,G=(h==null?void 0:h.checked)||!1,W=L.calcularMensalidadeAluno(V,G);f&&(f.textContent=`R$ ${W.valorBase.toFixed(2)}`),i&&(i.textContent=W.descontoPercentual>0?`-R$ ${W.valorDesconto.toFixed(2)} (${W.descontoPercentual}%)`:"R$ 0,00",i.style.color=W.descontoPercentual>0?"#34d399":"var(--text-secondary)"),I&&(I.textContent=`R$ ${W.valorFinal.toFixed(2)}`);const J=document.getElementById("label-desc-segunda");if(J){const Y=r==null?void 0:r.selectedOptions[0],K=parseFloat((Y==null?void 0:Y.getAttribute("data-desconto"))||"0");K>0?(J.textContent=`${K}% OFF`,J.style.color=G?"#34d399":"var(--text-secondary)"):(J.textContent="Aplicar",J.style.color="var(--text-secondary)")}k&&(k.value=Ie(W.valorFinal))};r==null||r.addEventListener("change",y),h==null||h.addEventListener("change",y),o!=null&&o.planoPagamentoId&&y();const d=document.getElementById("student-nascimento"),T=document.getElementById("student-resp-alert"),R=document.querySelectorAll(".resp-req-star"),j=()=>{const V=d==null?void 0:d.value,G=ot(V),W=G!==null&&G<18;T&&(T.style.display=W?"block":"none",W&&(T.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${G} anos).</strong> Dados do responsável são obrigatórios.`)),R.forEach(J=>{J.style.display=W?"inline":"none"})};d==null||d.addEventListener("input",j),d==null||d.addEventListener("change",j),j();const U=document.getElementById("student-plano"),E=document.getElementById("student-modulo"),D=document.getElementById("student-aula"),_=(V,G)=>{var Z;if(!D)return;const W=U==null?void 0:U.value,J=M.find(ee=>ee.id===W),Y=(Z=J==null?void 0:J.modulos)==null?void 0:Z.find((ee,ae)=>(ee.titulo||`Módulo ${ae+1}`)===V);if(!Y||!Y.aulas||Y.aulas.length===0){D.innerHTML=Y?'<option value="">Nenhuma aula cadastrada neste módulo</option>':'<option value="">Selecione o módulo primeiro...</option>';return}let K='<option value="">Selecione a aula atual (opcional)...</option>',te=!1;Y.aulas.forEach((ee,ae)=>{const O=ee.titulo||`Aula ${ae+1}`,re=(G||(o==null?void 0:o.aulaAtual))===O;re&&(te=!0),K+=`<option value="${O}" ${re?"selected":""}>Aula ${ae+1}: ${O}</option>`}),G&&!te&&(K+=`<option value="${G}" selected>${G} (Personalizada)</option>`),D.innerHTML=K},F=(V,G,W)=>{if(!E)return;const J=M.find(Z=>Z.id===V);if(!J||!J.modulos||J.modulos.length===0){E.innerHTML=J?'<option value="">Este plano pedagógico não possui módulos cadastrados</option>':'<option value="">Selecione um plano de ensino primeiro...</option>',D&&(D.innerHTML='<option value="">Selecione o módulo primeiro...</option>');return}let Y='<option value="">Selecione o módulo do plano...</option>',K=!1;const te=G!==void 0?G:(o==null?void 0:o.moduloAtual)||"";J.modulos.forEach((Z,ee)=>{var ne;const ae=Z.titulo||`Módulo ${ee+1}`,O=te===ae;O&&(K=!0);const re=((ne=Z.aulas)==null?void 0:ne.length)||0;Y+=`<option value="${ae}" ${O?"selected":""}>Módulo ${ee+1}: ${ae} (${re} ${re===1?"aula":"aulas"})</option>`}),te&&!K&&(Y+=`<option value="${te}" selected>${te} (Anterior)</option>`),E.innerHTML=Y,_(E.value,W!==void 0?W:o==null?void 0:o.aulaAtual)};U==null||U.addEventListener("change",()=>{F(U.value,"","")}),E==null||E.addEventListener("change",()=>{_(E.value,"")}),U!=null&&U.value&&F(U.value,o==null?void 0:o.moduloAtual,o==null?void 0:o.aulaAtual)},50)}return n(),e}const xe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"planosPagamento",title:"Planos de Pagamento",icon:"💳",items:[{key:"acesso",label:"Acesso ao módulo de planos de pagamento"},{key:"cadastrar",label:"Cadastrar novo plano de pagamento"},{key:"alterar",label:"Alterar modalidades, ciclos e valores"},{key:"excluir",label:"Excluir plano de pagamento"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],st=xe.reduce((m,e)=>m+e.items.length,0);function Ct(m){let e=0;return xe.forEach(t=>{const a=m[t.key];a&&t.items.forEach(s=>{a[s.key]&&e++})}),e}function kt(m){var $;const e=document.createElement("div"),t=ie.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,($=e.querySelector("#btn-unauth-home"))==null||$.addEventListener("click",()=>m("home")),e;let a="",s={column:"nome",direction:"asc"};function n(){var B,v;const o=L.getUsers(),M=a.toLowerCase(),l=o.filter(A=>A.nome.toLowerCase().includes(M)||A.login.toLowerCase().includes(M)||A.papel.toLowerCase().includes(M)),x=Ee(l,s,{nome:A=>A.nome,login:A=>A.login,papel:A=>A.papel,tipo:A=>A.isSistema?"Sistema":"Operador"});e.innerHTML=`
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
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${q.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${x.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Nome","nome",s,{extraStyle:"min-width: 140px;"})}
                ${X("Login","login",s,{extraClass:"col-hide-sm"})}
                ${X("Perfil","papel",s,{extraClass:"col-hide-xs"})}
                <th class="col-hide-md">Permissões Detalhadas</th>
                ${X("Tipo","tipo",s,{extraClass:"col-hide-sm"})}
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${x.map(A=>{const c=A.papel==="admin"?"Administrador":A.papel==="professor"?"Professor":"Atendente",b=Fe(A),u=Ct(b);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${A.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${A.nome[0]||"U"}
                          </div>
                          <div style="display: flex; flex-direction: column; overflow: hidden;">
                            <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                              ${A.nome}
                            </span>
                            ${A.dataNascimento?`<span style="font-size: 0.72rem; color: var(--text-secondary); line-height: 1.2;">Nascimento: ${Ve(A.dataNascimento)}</span>`:""}
                          </div>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${A.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${A.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${c}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${A.papel==="admin"?"badge-coral":u>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${A.papel==="admin"?`Acesso Total (${st})`:`${u} de ${st} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${A.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${A.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${q.edit}
                          </button>
                          ${A.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${q.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${A.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
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
    `,(B=e.querySelector("#btn-new-user"))==null||B.addEventListener("click",()=>{z()});const P=e.querySelector("#user-search-input");P&&P.addEventListener("input",A=>{a=A.target.value,n();const c=e.querySelector("#user-search-input");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),(v=e.querySelector("#btn-clear-search"))==null||v.addEventListener("click",()=>{a="",n()}),Ae(e,s,A=>{s=A,n()}),e.querySelectorAll(".btn-edit-user").forEach(A=>{A.addEventListener("click",c=>{const b=c.currentTarget.dataset.id,u=L.getUsers().find(w=>w.id===b);u&&z(u)})}),e.querySelectorAll(".btn-delete-user").forEach(A=>{A.addEventListener("click",c=>{const b=c.currentTarget.dataset.id,u=L.getUsers().find(w=>w.id===b);u&&$e({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${u.nome}</strong>" (login: <code>${u.login}</code>)?`,onConfirm:()=>{try{L.deleteUser(u.id,(t==null?void 0:t.nome)||"Administrador"),N(`Usuário "${u.nome}" excluído.`,"info"),n()}catch(w){N(w.message||"Erro ao excluir usuário.","error")}}})})})}function z(o){var w,S,g,k;const M=!!o,l=o?o.papel:"professor",x=l==="admin",P=Fe(o),B=`
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${(o==null?void 0:o.nome)||""}" required />
        </div>

        <div class="form-row-responsive">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${(o==null?void 0:o.login)||""}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${M?"Nova senha":"Ex: 123456"}" value="${(o==null?void 0:o.senha)||""}" required />
          </div>
        </div>

        <div class="form-row-responsive">
          <div class="form-group">
            <label class="form-label" for="user-nascimento">Data de Nascimento</label>
            <input 
              type="text" 
              id="user-nascimento" 
              class="form-input" 
              placeholder="DD/MM/AAAA" 
              maxlength="10" 
              value="${o!=null&&o.dataNascimento?Ve(o.dataNascimento):""}" 
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
            <select id="user-papel" class="form-select" ${o!=null&&o.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
              <option value="admin" ${l==="admin"?"selected":""}>Administrador (Acesso Total)</option>
              <option value="professor" ${l==="professor"?"selected":""}>Professor</option>
              <option value="atendente" ${l==="atendente"?"selected":""}>Atendente</option>
            </select>
          </div>
        </div>

        ${o!=null&&o.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`:""}

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${x?"none":"block"};">
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
            ${xe.map(p=>{const r=P[p.key]||{},h=p.items.filter(f=>r[f.key]).length;return`
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
                          ${h}/${p.items.length} liberadas
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
                    ${p.items.map(f=>{const i=!!r[f.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${p.key}-${f.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${i?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${i?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${p.key}-${f.key}" 
                                data-group="${p.key}" 
                                data-action="${f.key}" 
                                ${i?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${f.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${p.key}-${f.key}" 
                              class="badge ${i?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${i?"Liberado":"Bloqueado"}
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
    `;he({title:M?`Editar Usuário: ${o.nome}`:"Cadastrar Novo Usuário",bodyHtml:B,modalClass:"modal-lg",confirmText:M?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var R,j,U,E,D,_,F,V,G,W,J,Y,K,te,Z,ee,ae,O,re,ne,ge,H,oe,le,ue,pe,we;const p=document.getElementById("user-nome").value.trim(),r=document.getElementById("user-login").value.trim(),h=document.getElementById("user-senha").value.trim(),f=((R=document.getElementById("user-nascimento"))==null?void 0:R.value.trim())||"",i=document.getElementById("user-papel"),I=i?i.value:"professor";if(!p||!r||!h)return N("Preencha Nome, Login e Senha.","error"),!1;if(f){if(f.length!==10)return N("Informe a data de nascimento completa no formato DD/MM/AAAA.","error"),!1;const ce=f.split("/"),Ce=parseInt(ce[0],10),ke=parseInt(ce[1],10),ze=parseInt(ce[2],10),Re=new Date().getFullYear();if(isNaN(Ce)||isNaN(ke)||isNaN(ze)||Ce<1||Ce>31||ke<1||ke>12||ze<1900||ze>Re)return N("Data de nascimento inválida.","error"),!1}if(L.getUsers().find(ce=>ce.login===r&&ce.id!==(o==null?void 0:o.id)))return N(`O login "${r}" já está em uso por outro usuário.`,"error"),!1;let d;I==="admin"?d=JSON.parse(JSON.stringify(Se.admin)):d={alunos:{acesso:((j=document.getElementById("perm-alunos-acesso"))==null?void 0:j.checked)??!1,cadastrar:((U=document.getElementById("perm-alunos-cadastrar"))==null?void 0:U.checked)??!1,alterar:((E=document.getElementById("perm-alunos-alterar"))==null?void 0:E.checked)??!1,excluir:((D=document.getElementById("perm-alunos-excluir"))==null?void 0:D.checked)??!1},agenda:{acesso:((_=document.getElementById("perm-agenda-acesso"))==null?void 0:_.checked)??!1,cadastrar:((F=document.getElementById("perm-agenda-cadastrar"))==null?void 0:F.checked)??!1,alterar:((V=document.getElementById("perm-agenda-alterar"))==null?void 0:V.checked)??!1,excluir:((G=document.getElementById("perm-agenda-excluir"))==null?void 0:G.checked)??!1},planos:{acesso:((W=document.getElementById("perm-planos-acesso"))==null?void 0:W.checked)??!1,cadastrar:((J=document.getElementById("perm-planos-cadastrar"))==null?void 0:J.checked)??!1,alterar:((Y=document.getElementById("perm-planos-alterar"))==null?void 0:Y.checked)??!1,excluir:((K=document.getElementById("perm-planos-excluir"))==null?void 0:K.checked)??!1},financeiro:{acesso:((te=document.getElementById("perm-financeiro-acesso"))==null?void 0:te.checked)??!1,cadastrar:((Z=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:Z.checked)??!1,alterar:((ee=document.getElementById("perm-financeiro-alterar"))==null?void 0:ee.checked)??!1,excluir:((ae=document.getElementById("perm-financeiro-excluir"))==null?void 0:ae.checked)??!1},planosPagamento:{acesso:((O=document.getElementById("perm-planosPagamento-acesso"))==null?void 0:O.checked)??!1,cadastrar:((re=document.getElementById("perm-planosPagamento-cadastrar"))==null?void 0:re.checked)??!1,alterar:((ne=document.getElementById("perm-planosPagamento-alterar"))==null?void 0:ne.checked)??!1,excluir:((ge=document.getElementById("perm-planosPagamento-excluir"))==null?void 0:ge.checked)??!1},relatorios:{acesso:((H=document.getElementById("perm-relatorios-acesso"))==null?void 0:H.checked)??!1,gerar:((oe=document.getElementById("perm-relatorios-gerar"))==null?void 0:oe.checked)??!1},home:{acesso:((le=document.getElementById("perm-home-acesso"))==null?void 0:le.checked)??!1},auditoria:{acesso:((ue=document.getElementById("perm-auditoria-acesso"))==null?void 0:ue.checked)??!1},configuracoes:{acesso:((pe=document.getElementById("perm-configuracoes-acesso"))==null?void 0:pe.checked)??!1,alterar:((we=document.getElementById("perm-configuracoes-alterar"))==null?void 0:we.checked)??!1}};const T=(t==null?void 0:t.nome)||"Administrador";return M&&o?(L.updateUser(o.id,{nome:p,login:r,senha:h,dataNascimento:f,papel:o.isSistema?"admin":I,permissoes:o.isSistema?Se.admin:d},T),N("Usuário e permissões atualizados com sucesso!","success")):(L.addUser({nome:p,login:r,senha:h,dataNascimento:f,papel:I,permissoes:d},T),N("Novo usuário cadastrado com sucesso!","success")),n(),!0}});const v=document.getElementById("user-papel"),A=document.getElementById("user-permissions-section"),c=document.getElementById("user-nascimento");c&&me(c,Ve);const b=(p,r,h)=>{const f=document.getElementById(`row-perm-${p}-${r}`),i=document.getElementById(`badge-perm-${p}-${r}`);f&&i&&(h?(f.style.background="rgba(34, 197, 94, 0.06)",f.style.borderColor="rgba(34, 197, 94, 0.25)",i.className="badge badge-success",i.textContent="Liberado"):(f.style.background="rgba(234, 67, 53, 0.04)",f.style.borderColor="rgba(234, 67, 53, 0.15)",i.className="badge badge-coral",i.textContent="Bloqueado")),u(p)},u=p=>{const r=document.getElementById(`group-counter-${p}`),h=xe.find(f=>f.key===p);if(r&&h){let f=0;h.items.forEach(i=>{const I=document.getElementById(`perm-${p}-${i.key}`);I&&I.checked&&f++}),r.textContent=`${f}/${h.items.length} liberadas`}};v==null||v.addEventListener("change",()=>{const p=v.value;if(p==="admin")A.style.display="none";else if(A.style.display="block",!M){const r=Se[p]||Se.professor;xe.forEach(h=>{h.items.forEach(f=>{var I;const i=document.getElementById(`perm-${h.key}-${f.key}`);if(i){const y=((I=r[h.key])==null?void 0:I[f.key])??!1;i.checked=y,b(h.key,f.key,y)}})})}}),xe.forEach(p=>{const r=document.getElementById(`header-group-${p.key}`),h=document.getElementById(`group-body-${p.key}`),f=document.getElementById(`arrow-perm-${p.key}`);r==null||r.addEventListener("click",i=>{if(!i.target.closest(".btn-group-toggle")&&h&&f){const I=h.style.display==="flex";h.style.display=I?"none":"flex",f.style.transform=I?"rotate(0deg)":"rotate(180deg)"}}),p.items.forEach(i=>{const I=document.getElementById(`perm-${p.key}-${i.key}`);I==null||I.addEventListener("change",()=>{if(b(p.key,i.key,I.checked),I.checked&&i.key!=="acesso"){const y=document.getElementById(`perm-${p.key}-acesso`);y&&!y.checked&&(y.checked=!0,b(p.key,"acesso",!0))}!I.checked&&i.key==="acesso"&&p.items.forEach(y=>{if(y.key!=="acesso"){const d=document.getElementById(`perm-${p.key}-${y.key}`);d&&d.checked&&(d.checked=!1,b(p.key,y.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${p.key}"]`).forEach(i=>{i.addEventListener("click",I=>{I.stopPropagation();const y=p.items.map(T=>document.getElementById(`perm-${p.key}-${T.key}`)).filter(Boolean),d=y.every(T=>T.checked);y.forEach(T=>{T.checked=!d,b(p.key,T.dataset.action,!d)})})})}),(w=document.getElementById("btn-perm-expand"))==null||w.addEventListener("click",()=>{xe.forEach(p=>{const r=document.getElementById(`group-body-${p.key}`),h=document.getElementById(`arrow-perm-${p.key}`);r&&h&&(r.style.display="flex",h.style.transform="rotate(180deg)")})}),(S=document.getElementById("btn-perm-collapse"))==null||S.addEventListener("click",()=>{xe.forEach(p=>{const r=document.getElementById(`group-body-${p.key}`),h=document.getElementById(`arrow-perm-${p.key}`);r&&h&&(r.style.display="none",h.style.transform="rotate(0deg)")})}),(g=document.getElementById("btn-perm-all"))==null||g.addEventListener("click",()=>{xe.forEach(p=>{p.items.forEach(r=>{const h=document.getElementById(`perm-${p.key}-${r.key}`);h&&(h.checked=!0,b(p.key,r.key,!0))})})}),(k=document.getElementById("btn-perm-none"))==null||k.addEventListener("click",()=>{xe.forEach(p=>{p.items.forEach(r=>{const h=document.getElementById(`perm-${p.key}-${r.key}`);h&&(h.checked=!1,b(p.key,r.key,!1))})})})}return n(),e}function zt(m){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s={column:"nome",direction:"asc"};const n=de(t,"planos","cadastrar"),z=de(t,"planos","alterar"),$=de(t,"planos","excluir");function o(){var v,A;const x=L.getPlans().filter(c=>{const b=a.toLowerCase();return c.nome.toLowerCase().includes(b)||c.descricao&&c.descricao.toLowerCase().includes(b)}),P=Ee(x,s,{nome:c=>c.nome,estrutura:c=>(c.modulos||[]).reduce((b,u)=>{var w;return b+(((w=u.aulas)==null?void 0:w.length)||0)},0),descricao:c=>c.descricao||""});e.innerHTML=`
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
                  ${q.plus} Novo Plano de Ensino
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
            ${q.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>':""}
      </div>

      <!-- TABELA: PLANOS DE ENSINO -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Pedagógicos Cadastrados (${P.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Plano de Ensino","nome",s,{extraStyle:"min-width: 160px;"})}
                ${X("Estrutura","estrutura",s,{align:"center",extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                ${X("Descrição","descricao",s,{extraClass:"col-hide-md"})}
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${P.length===0?`
                    <tr>
                      <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${a?"Nenhum plano de ensino encontrado para a busca.":"Nenhum plano pedagógico cadastrado ainda."}
                      </td>
                    </tr>
                  `:P.map(c=>{const b=(c.modulos||[]).length,u=(c.modulos||[]).reduce((w,S)=>{var g;return w+(((g=S.aulas)==null?void 0:g.length)||0)},0);return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${q.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${c.nome}
                                  </div>
                                  ${c.instrumento?`<span style="font-size: 0.72rem; color: var(--text-muted);">${c.instrumento}</span>`:""}
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${b} ${b===1?"módulo":"módulos"}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${u} ${u===1?"aula":"aulas"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${c.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${z?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${c.id}" title="Editar Plano e Módulos">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${$?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${c.id}" title="Excluir Plano">
                                        ${q.trash}
                                      </button>
                                    `:""}
                                ${!z&&!$?'<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>':""}
                              </div>
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(v=e.querySelector("#btn-new-plan"))==null||v.addEventListener("click",()=>{M()});const B=e.querySelector("#plan-search-input");B&&B.addEventListener("input",c=>{a=c.target.value,o();const b=e.querySelector("#plan-search-input");b&&(b.focus(),b.setSelectionRange(b.value.length,b.value.length))}),(A=e.querySelector("#btn-clear-search"))==null||A.addEventListener("click",()=>{a="",o()}),Ae(e,s,c=>{s=c,o()}),e.querySelectorAll(".btn-edit-plan").forEach(c=>{c.addEventListener("click",b=>{const u=b.currentTarget.dataset.id,w=L.getPlans().find(S=>S.id===u);w&&M(w)})}),e.querySelectorAll(".btn-delete-plan").forEach(c=>{c.addEventListener("click",b=>{const u=b.currentTarget.dataset.id,w=L.getPlans().find(S=>S.id===u);w&&$e({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${w.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{L.deletePlan(w.id,(t==null?void 0:t.nome)||"Administrador"),N(`Plano de ensino "${w.nome}" excluído.`,"info"),o()}})})})}function M(l){const x=!!l;let P=l?JSON.parse(JSON.stringify(l.modulos||[])):[];P.forEach(c=>{Array.isArray(c.aulas)||(c.aulas=[])});function B(){return P.length===0?`
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); margin-top: 8px;">
            Nenhum módulo adicionado ainda. Digite o nome do módulo acima e clique em "Adicionar Módulo".
          </div>
        `:P.map((c,b)=>{const u=c.aulas||[];return`
            <div class="module-card-item" data-mod-idx="${b}" style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 8px;">
              <!-- Cabeçalho do Módulo -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px; flex: 1;">
                  <span class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 7px;">
                    Módulo ${b+1}
                  </span>
                  <input 
                    type="text" 
                    class="form-input input-module-title" 
                    data-mod-idx="${b}" 
                    value="${c.titulo}" 
                    placeholder="Título do módulo" 
                    style="font-size: 0.84rem; font-weight: 600; padding: 4px 8px; background: transparent; border-color: transparent; border-bottom: 1px dashed var(--border-subtle); width: 100%;"
                  />
                </div>

                <div style="display: flex; gap: 4px; align-items: center;">
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-up" data-mod-idx="${b}" title="Mover para cima" ${b===0?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▲
                  </button>
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-down" data-mod-idx="${b}" title="Mover para baixo" ${b===P.length-1?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▼
                  </button>
                  <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-mod-idx="${b}" title="Excluir Módulo" style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ${q.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo -->
              <div class="lessons-container" style="display: flex; flex-direction: column; gap: 5px; margin-left: 14px; border-left: 2px solid rgba(234, 67, 53, 0.2); padding-left: 10px;">
                ${u.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 4px 0;">Nenhuma aula cadastrada neste módulo.</div>':u.map((w,S)=>`
                            <div style="display: flex; align-items: center; gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
                              <span style="font-size: 0.72rem; color: var(--text-muted); min-width: 44px;">Aula ${S+1}:</span>
                              <input 
                                type="text" 
                                class="form-input input-lesson-title" 
                                data-mod-idx="${b}" 
                                data-aula-idx="${S}" 
                                value="${w.titulo}" 
                                placeholder="Título da aula" 
                                style="flex: 1; font-size: 0.78rem; padding: 2px 6px; background: transparent; border: none;"
                              />
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-up" data-mod-idx="${b}" data-aula-idx="${S}" title="Mover aula acima" ${S===0?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▲
                              </button>
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-down" data-mod-idx="${b}" data-aula-idx="${S}" title="Mover aula abaixo" ${S===u.length-1?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▼
                              </button>
                              <button type="button" class="btn btn-danger btn-icon-only btn-remove-lesson" data-mod-idx="${b}" data-aula-idx="${S}" title="Excluir Aula" style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ✕
                              </button>
                            </div>
                          `).join("")}

                <!-- Adicionar Aula ao Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="form-input input-new-lesson" 
                    data-mod-idx="${b}" 
                    placeholder="Título da nova aula (ex: Acorde Dó Maior)..." 
                    style="flex: 1; font-size: 0.76rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-add-lesson" 
                    data-mod-idx="${b}" 
                    style="font-size: 0.72rem; padding: 4px 10px; white-space: nowrap;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `}).join("")}const v=`
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
                ${P.length} módulos
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
              ${q.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Lista de Módulos e Aulas -->
          <div id="plan-modules-list-container" style="max-height: 280px; overflow-y: auto; padding-right: 4px;">
            ${B()}
          </div>
        </div>
      </form>
    `;he({title:x?`Editar Plano de Ensino: ${l.nome}`:"Novo Plano de Ensino",bodyHtml:v,modalClass:"modal-lg",confirmText:x?"Salvar Plano":"Criar Plano",onConfirm:()=>{var g,k,p;const c=(g=document.getElementById("plan-nome"))==null?void 0:g.value.trim(),b=(k=document.getElementById("plan-instrumento"))==null?void 0:k.value.trim(),u=(p=document.getElementById("plan-desc"))==null?void 0:p.value.trim();if(!c)return N("Preencha o nome do plano de ensino.","error"),!1;const w=P.map((r,h)=>({id:r.id||`mod_${Date.now()}_${h}`,ordem:h+1,titulo:r.titulo.trim()||`Módulo ${h+1}`,descricao:r.descricao,aulas:(r.aulas||[]).map((f,i)=>({id:f.id||`aul_${Date.now()}_${h}_${i}`,ordem:i+1,titulo:f.titulo.trim()||`Aula ${i+1}`,conteudo:f.conteudo,duracaoMinutos:f.duracaoMinutos}))})),S=(t==null?void 0:t.nome)||"Administrador";return x&&l?(L.updatePlan(l.id,{nome:c,descricao:u,instrumento:b||void 0,modulos:w},S),N(`Plano de ensino "${c}" atualizado!`,"success")):(L.addPlan({nome:c,descricao:u,instrumento:b||void 0,modulos:w},S),N(`Plano de ensino "${c}" cadastrado com sucesso!`,"success")),o(),!0}}),setTimeout(()=>{A()},50);function A(){const c=document.getElementById("plan-modules-list-container"),b=document.getElementById("modules-counter-badge");if(!c)return;const u=()=>{c.innerHTML=B(),b&&(b.textContent=`${P.length} módulos`),A()},w=document.getElementById("btn-quick-add-module"),S=document.getElementById("quick-add-module-input");w&&S&&(w.onclick=()=>{const g=S.value.trim();if(!g){N("Informe o nome do módulo.","error");return}P.push({id:`mod_${Date.now()}`,ordem:P.length+1,titulo:g,aulas:[]}),S.value="",u()},S.onkeydown=g=>{g.key==="Enter"&&(g.preventDefault(),w.click())}),c.querySelectorAll(".input-module-title").forEach(g=>{g.addEventListener("input",k=>{const p=parseInt(k.target.dataset.modIdx||"0",10);P[p]&&(P[p].titulo=k.target.value)})}),c.querySelectorAll(".btn-move-module-up").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10);if(p>0){const r=P[p];P[p]=P[p-1],P[p-1]=r,u()}})}),c.querySelectorAll(".btn-move-module-down").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10);if(p<P.length-1){const r=P[p];P[p]=P[p+1],P[p+1]=r,u()}})}),c.querySelectorAll(".btn-remove-module").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10);P.splice(p,1),u()})}),c.querySelectorAll(".input-lesson-title").forEach(g=>{g.addEventListener("input",k=>{var h;const p=parseInt(k.target.dataset.modIdx||"0",10),r=parseInt(k.target.dataset.aulaIdx||"0",10);(h=P[p])!=null&&h.aulas[r]&&(P[p].aulas[r].titulo=k.target.value)})}),c.querySelectorAll(".btn-add-lesson").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10),r=c.querySelector(`.input-new-lesson[data-mod-idx="${p}"]`),h=r==null?void 0:r.value.trim();if(!h){N("Informe o título da aula.","error");return}P[p]&&(P[p].aulas.push({id:`aul_${Date.now()}`,ordem:P[p].aulas.length+1,titulo:h}),u())})}),c.querySelectorAll(".btn-move-lesson-up").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10),r=parseInt(k.currentTarget.dataset.aulaIdx||"0",10);if(P[p]&&r>0){const h=P[p].aulas,f=h[r];h[r]=h[r-1],h[r-1]=f,u()}})}),c.querySelectorAll(".btn-move-lesson-down").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10),r=parseInt(k.currentTarget.dataset.aulaIdx||"0",10);if(P[p]){const h=P[p].aulas;if(r<h.length-1){const f=h[r];h[r]=h[r+1],h[r+1]=f,u()}}})}),c.querySelectorAll(".btn-remove-lesson").forEach(g=>{g.addEventListener("click",k=>{const p=parseInt(k.currentTarget.dataset.modIdx||"0",10),r=parseInt(k.currentTarget.dataset.aulaIdx||"0",10);P[p]&&(P[p].aulas.splice(r,1),u())})})}}return o(),e}function Pt(m){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s="todas",n="todas";const z=de(t,"financeiro","cadastrar"),$=de(t,"financeiro","alterar"),o=de(t,"financeiro","excluir");function M(){var S;const x=L.getPaymentPlans(),P=x.filter(g=>{const k=a.toLowerCase(),p=g.nome.toLowerCase().includes(k)||g.modalidade.toLowerCase().includes(k)||g.periodicidade.toLowerCase().includes(k)||g.descricao&&g.descricao.toLowerCase().includes(k),r=s==="todas"||g.modalidade===s,h=n==="todas"||g.periodicidade===n;return p&&r&&h}),B=x.length,v=x.filter(g=>g.modalidade==="individual").length,A=x.filter(g=>g.modalidade==="turma").length,c=x.filter(g=>g.ativo).length;e.innerHTML=`
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-white); margin: 0; display: flex; align-items: center; gap: 10px;">
            <span style="color: #4ade80;">${q.planoPagamento}</span> Planos de Pagamento
          </h2>
          <p style="color: var(--text-secondary); margin: 4px 0 0 0; font-size: 0.88rem;">
            Defina valores de mensalidade, modalidades (individual/turma) e ciclos de cobrança.
          </p>
        </div>

        <div style="display: flex; gap: 10px; align-items: center;">
          ${z?`<button class="btn btn-primary" id="btn-novo-plano-pagamento" style="display: flex; align-items: center; gap: 8px;">
                   ${q.plus} Novo Plano de Pagamento
                 </button>`:""}
        </div>
      </div>

      <!-- Cards de Métricas e Totais -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(74, 222, 128, 0.15); color: #4ade80; display: flex; align-items: center; justify-content: center;">
            ${q.planoPagamento}
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
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${v}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(168, 85, 247, 0.15); color: #c084fc; display: flex; align-items: center; justify-content: center;">
            👥
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Turma</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${A}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center;">
            ✓
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Planos Ativos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${c}</div>
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
            ${q.search}
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
      ${P.length===0?`
          <div class="card" style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;">💳</div>
            <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-white); margin-bottom: 6px;">Nenhum plano de pagamento encontrado</div>
            <div style="font-size: 0.85rem;">Tente ajustar seus filtros de busca ou crie um novo plano acima.</div>
          </div>
          `:`
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
            ${P.map(g=>{const k=g.descontoSegundaMatricula??0,p=k>0?g.valorMensal*(1-k/100):g.valorMensal,r=g.modalidade==="individual";return`
                <div class="card" style="padding: 18px; display: flex; flex-direction: column; justify-content: space-between; position: relative; border-top: 3px solid ${r?"#3b82f6":"#a855f7"};">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 6px;">
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: ${r?"rgba(59, 130, 246, 0.15)":"rgba(168, 85, 247, 0.15)"}; color: ${r?"#60a5fa":"#c084fc"};">
                            ${r?"👤 Individual":"👥 Turma"}
                          </span>
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); color: var(--text-secondary);">
                            ${g.periodicidade.toUpperCase()}
                          </span>
                        </div>
                        <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--text-white);">${g.nome}</h3>
                      </div>

                      <span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${g.ativo?"#22c55e":"#ef4444"};" title="${g.ativo?"Ativo":"Inativo"}"></span>
                    </div>

                    ${g.descricao?`<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0 0 14px 0; line-height: 1.4;">${g.descricao}</p>`:""}

                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; margin-bottom: 16px;">
                      <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; margin-bottom: 2px;">Valor Mensal Regular</div>
                      <div style="font-size: 1.45rem; font-weight: 800; color: #4ade80;">
                        R$ ${g.valorMensal.toFixed(2).replace(".",",")}
                        <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-secondary);">/mês</span>
                      </div>

                      ${k>0?`
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-secondary);">
                              2ª Matrícula / Familiar (${k}% sugerido):
                            </span>
                            <span style="font-size: 0.84rem; font-weight: 600; color: var(--text-white);">
                              R$ ${p.toFixed(2).replace(".",",")}/mês
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
                    ${$?`<button class="btn btn-secondary btn-sm btn-edit-pp" data-id="${g.id}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${q.edit} Editar
                           </button>`:""}
                    ${o?`<button class="btn btn-danger btn-sm btn-del-pp" data-id="${g.id}" data-name="${g.nome}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${q.trash} Excluir
                           </button>`:""}
                  </div>
                </div>
                `}).join("")}
          </div>
          `}
    `;const b=e.querySelector("#pp-search");b==null||b.addEventListener("input",g=>{a=g.target.value,M()});const u=e.querySelector("#pp-filter-mod");u==null||u.addEventListener("change",g=>{s=g.target.value,M()});const w=e.querySelector("#pp-filter-per");w==null||w.addEventListener("change",g=>{n=g.target.value,M()}),(S=e.querySelector("#btn-novo-plano-pagamento"))==null||S.addEventListener("click",()=>{l()}),e.querySelectorAll(".btn-edit-pp").forEach(g=>{g.addEventListener("click",k=>{const p=k.currentTarget.dataset.id;if(p){const r=L.getPaymentPlanById(p);r&&l(r)}})}),e.querySelectorAll(".btn-del-pp").forEach(g=>{g.addEventListener("click",k=>{const p=k.currentTarget.dataset.id,r=k.currentTarget.dataset.name;p&&$e({title:"Excluir Plano de Pagamento",message:`Deseja realmente excluir o plano de pagamento "<strong>${r}</strong>"?<br><small style="color: var(--text-secondary);">Alunos vinculados continuarão com seu histórico financeiro.</small>`,onConfirm:()=>{L.deletePaymentPlan(p,(t==null?void 0:t.nome)||"Administrador"),N(`Plano de pagamento "${r}" excluído com sucesso!`,"info"),M()}})})})}function l(x){const P=!!x,B=(t==null?void 0:t.nome)||"Administrador",v=`
      <form id="form-payment-plan" style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-nome">Nome do Plano de Pagamento *</label>
          <input type="text" id="pp-nome" class="form-input" placeholder="Ex: Mensal Individual, Semestral Turma" value="${(x==null?void 0:x.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-modalidade">Modalidade *</label>
            <select id="pp-modalidade" class="form-select" required>
              <option value="individual" ${(x==null?void 0:x.modalidade)==="individual"?"selected":""}>Individual</option>
              <option value="turma" ${(x==null?void 0:x.modalidade)==="turma"?"selected":""}>Turma</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-periodicidade">Periodicidade / Ciclo *</label>
            <select id="pp-periodicidade" class="form-select" required>
              <option value="mensal" ${(x==null?void 0:x.periodicidade)==="mensal"?"selected":""}>Mensal</option>
              <option value="trimestral" ${(x==null?void 0:x.periodicidade)==="trimestral"?"selected":""}>Trimestral</option>
              <option value="semestral" ${(x==null?void 0:x.periodicidade)==="semestral"?"selected":""}>Semestral</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-valor">Valor Mensal (R$) *</label>
            <input type="text" id="pp-valor" class="form-input" placeholder="0,00" value="${x?x.valorMensal.toFixed(2).replace(".",","):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-desconto-segunda">Desconto 2ª Matrícula / Familiar (%)</label>
            <input type="number" id="pp-desconto-segunda" class="form-input" min="0" max="100" value="${(x==null?void 0:x.descontoSegundaMatricula)??20}" />
            <small style="font-size: 0.72rem; color: var(--text-secondary);">Opcional. Percentual sugerido de desconto (0 para nenhum).</small>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-desc">Descrição / Observações</label>
          <textarea id="pp-desc" class="form-textarea" rows="2" placeholder="Regras do plano, benefícios ou detalhes...">${(x==null?void 0:x.descricao)||""}</textarea>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
          <input type="checkbox" id="pp-ativo" style="accent-color: var(--color-coral); cursor: pointer;" ${x?x.ativo?"checked":"":"checked"} />
          <label for="pp-ativo" style="font-size: 0.85rem; color: var(--text-white); cursor: pointer; user-select: none;">
            Plano Ativo para Novas Matrículas
          </label>
        </div>
      </form>
    `;he({title:P?"Editar Plano de Pagamento":"Novo Plano de Pagamento",bodyHtml:v,confirmText:P?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{var h,f,i,I,y,d,T;const A=(h=document.getElementById("pp-nome"))==null?void 0:h.value.trim(),c=(f=document.getElementById("pp-modalidade"))==null?void 0:f.value,b=(i=document.getElementById("pp-periodicidade"))==null?void 0:i.value,u=(I=document.getElementById("pp-valor"))==null?void 0:I.value.trim(),w=(y=document.getElementById("pp-desconto-segunda"))==null?void 0:y.value,S=parseFloat(w),g=!isNaN(S)&&S>=0?S:0,k=(d=document.getElementById("pp-desc"))==null?void 0:d.value.trim(),p=((T=document.getElementById("pp-ativo"))==null?void 0:T.checked)??!0;if(!A)return N("Preencha o nome do plano de pagamento.","error"),!1;const r=Je(u);return isNaN(r)||r<=0?(N("Informe um valor mensal válido superior a zero.","error"),!1):(P&&x?(L.updatePaymentPlan(x.id,{nome:A,modalidade:c,periodicidade:b,valorMensal:r,descontoSegundaMatricula:g,descricao:k,ativo:p},B),N(`Plano de pagamento "${A}" atualizado com sucesso!`,"success")):(L.addPaymentPlan({nome:A,modalidade:c,periodicidade:b,valorMensal:r,descontoSegundaMatricula:g,descricao:k,ativo:p},B),N(`Plano de pagamento "${A}" criado com sucesso!`,"success")),M(),!0)}}),setTimeout(()=>{const A=document.getElementById("pp-valor");A&&me(A,Ie)},50)}return M(),e}function Mt(m){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s="todos",n=new Date,z={column:"vencimento",direction:"desc"};const $=de(t,"financeiro","cadastrar"),o=de(t,"financeiro","alterar"),M=de(t,"financeiro","excluir");function l(){var i,I,y,d,T,R,j,U;const v=L.getPayments(),A=L.getStudents(),c=new Date,b=n!==null&&c.getMonth()===n.getMonth()&&c.getFullYear()===n.getFullYear(),u=n?`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`:"",w=v.filter(E=>E.status==="pago").reduce((E,D)=>E+D.valor,0),S=v.filter(E=>E.status==="pendente").reduce((E,D)=>E+D.valor,0),g=v.filter(E=>E.status==="atrasado").reduce((E,D)=>E+D.valor,0),k=A.filter(E=>E.status==="ativo"&&L.isStudentOverdue(E.id)),p=v.filter(E=>{const D=A.find(J=>J.id===E.alunoId),_=D?D.nome.toLowerCase():"",F=E.descricao.toLowerCase(),V=_.includes(a.toLowerCase())||F.includes(a.toLowerCase())||E.mesReferencia&&E.mesReferencia.includes(a),G=s==="todos"||E.status===s,W=!u||E.mesReferencia===u||E.dataVencimento.startsWith(u);return V&&G&&W}),r=Ee(p,z,{aluno:E=>{const D=A.find(_=>_.id===E.alunoId);return(D==null?void 0:D.nome)||""},descricao:E=>E.descricao,vencimento:E=>E.dataVencimento,valor:E=>E.valor,status:E=>E.status});e.innerHTML=`
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
          ${$?`
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
            R$ ${w.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${v.filter(E=>E.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${S.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${v.filter(E=>E.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${g.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${v.filter(E=>E.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${k.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${A.filter(E=>E.status==="ativo").length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${k.length===0?"✓ 100% em dia":"Requer acompanhamento"}
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
            <button type="button" class="btn ${b?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
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
          Todos (${v.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="atrasado"?"btn-danger":"btn-secondary"} btn-quick-filter" data-status="atrasado" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="atrasado"?"color: #f87171; border-color: rgba(239, 68, 68, 0.3);":""}">
          ⚠️ Inadimplentes (${k.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${v.filter(E=>E.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${v.filter(E=>E.status==="pago").length})
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
            ${q.search}
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

      ${s==="atrasado"&&k.length>0?`
            <!-- Painel de Inadimplência Responsivo e Otimizado -->
            <div style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-md); padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                <div style="font-size: 0.88rem; font-weight: 700; color: #f87171; display: flex; align-items: center; gap: 8px;">
                  <span>⚠️</span> Painel de Alunos Inadimplentes (${k.length})
                </div>
                <span style="font-size: 0.74rem; color: var(--text-muted);">
                  Acesso rápido para contato e regularização
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                ${k.map(E=>{const D=v.filter(J=>J.alunoId===E.id&&J.status==="atrasado"),_=D.reduce((J,Y)=>J+Y.valor,0),F=(E.telefone||"").replace(/\D/g,""),V=F.length<=11?`55${F}`:F,G=encodeURIComponent(`Olá, ${E.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),W=F?`https://wa.me/${V}?text=${G}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${E.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${D.length} fatura(s) atrasada(s) &bull; R$ ${_.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${E.telefone||"Sem telefone"}
                          </div>
                        </div>
                        ${W?`
                              <a href="${W}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; padding: 4px 8px; flex-shrink: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
                                ${q.whatsapp} Cobrar
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${r.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Aluno","aluno",z,{extraStyle:"min-width: 140px;"})}
                ${X("Descrição / Referência","descricao",z,{extraClass:"col-hide-md"})}
                ${X("Vencimento","vencimento",z,{extraClass:"col-hide-sm",extraStyle:"width: 140px;"})}
                ${X("Valor","valor",z,{extraStyle:"width: 110px;"})}
                ${X("Status","status",z,{extraClass:"col-hide-xs",extraStyle:"width: 110px;"})}
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${r.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':r.map(E=>{const D=A.find(G=>G.id===E.alunoId),_=E.status==="pago",F=E.status==="atrasado";let V="";return _?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':F?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
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
                                ${E.descricao}${E.mesReferencia?` / ${E.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${F?"#f87171":"var(--text-white)"}; font-weight: ${F?"700":"normal"};">
                                ${E.dataVencimento.split("-").reverse().join("/")}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${E.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${V}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${!_&&o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${E.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${q.check}
                                      </button>
                                    `:""}

                                ${_?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${E.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${o?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${E.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${q.edit}
                                      </button>
                                    `:""}

                                ${M?`
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${E.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
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
    `,(i=e.querySelector("#fin-btn-prev-month"))==null||i.addEventListener("click",()=>{n||(n=new Date),n=new Date(n.getFullYear(),n.getMonth()-1,1),l()}),(I=e.querySelector("#fin-btn-next-month"))==null||I.addEventListener("click",()=>{n||(n=new Date),n=new Date(n.getFullYear(),n.getMonth()+1,1),l()}),(y=e.querySelector("#fin-btn-current-month"))==null||y.addEventListener("click",()=>{n=new Date,l()}),(d=e.querySelector("#fin-btn-all-months"))==null||d.addEventListener("click",()=>{n=null,l()}),Ae(e,z,E=>{z=E,l()});const h=e.querySelector("#fin-search-input");h==null||h.addEventListener("input",E=>{a=E.target.value,l();const D=e.querySelector("#fin-search-input");D&&(D.focus(),D.selectionStart=D.selectionEnd=D.value.length)}),(T=e.querySelector("#btn-clear-fin-search"))==null||T.addEventListener("click",()=>{a="",l()});const f=e.querySelector("#fin-status-filter");f==null||f.addEventListener("change",()=>{s=f.value,l()}),e.querySelectorAll(".btn-quick-filter").forEach(E=>{E.addEventListener("click",D=>{s=D.currentTarget.dataset.status,l()})}),(R=e.querySelector("#btn-limpar-status"))==null||R.addEventListener("click",()=>{s="todos",l()}),(j=e.querySelector("#btn-gerar-lote"))==null||j.addEventListener("click",()=>{P()}),(U=e.querySelector("#btn-novo-lancamento"))==null||U.addEventListener("click",()=>{B()}),e.querySelectorAll(".btn-action-baixa").forEach(E=>{E.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,F=v.find(V=>V.id===_);F&&x(F)})}),e.querySelectorAll(".btn-action-recibo").forEach(E=>{E.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,F=v.find(V=>V.id===_);if(F){const V=A.find(G=>G.id===F.alunoId);V&&rt(F,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(E=>{E.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,F=v.find(V=>V.id===_);F&&B(F)})}),e.querySelectorAll(".btn-action-delete").forEach(E=>{E.addEventListener("click",D=>{const _=D.currentTarget.dataset.id,F=v.find(V=>V.id===_);F&&$e({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${F.descricao}</strong>" no valor de <strong>R$ ${F.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{L.deletePayment(F.id,(t==null?void 0:t.nome)||"Administrador"),N("Lançamento excluído com sucesso!","info"),l()}})})})}function x(v){const A=L.getStudents().find(u=>u.id===v.alunoId),c=L.getTodayDateString(),b=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${v.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${v.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(A==null?void 0:A.nome)||"N/A"}</strong> &bull; Vencimento: ${v.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${c}" required />
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
    `;he({title:"Confirmar Baixa de Pagamento",bodyHtml:b,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const u=document.getElementById("modal-baixa-data").value,w=document.getElementById("modal-baixa-forma").value,S=document.getElementById("modal-baixa-obs").value;return u?(L.darBaixaPayment(v.id,u,w,(t==null?void 0:t.nome)||"Administrador",S),N(`Baixa efetuada com sucesso! R$ ${v.valor.toFixed(2)} recebido.`,"success"),l(),!0):(N("Informe a data de recebimento.","error"),!1)}})}function P(){const v=new Date,A=v.getFullYear(),c=v.getMonth()+1,b=`
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
              <option value="1" ${c===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${c===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${c===3?"selected":""}>03 - Março</option>
              <option value="4" ${c===4?"selected":""}>04 - Abril</option>
              <option value="5" ${c===5?"selected":""}>05 - Maio</option>
              <option value="6" ${c===6?"selected":""}>06 - Junho</option>
              <option value="7" ${c===7?"selected":""}>07 - Julho</option>
              <option value="8" ${c===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${c===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${c===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${c===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${c===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;he({title:"Gerar Mensalidades em Lote",bodyHtml:b,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const u=parseInt(document.getElementById("lote-ano").value,10),w=parseInt(document.getElementById("lote-mes").value,10);if(!u||!w)return N("Selecione ano e mês válidos.","error"),!1;const S=L.gerarMensalidadesMes(u,w,(t==null?void 0:t.nome)||"Administrador");return S.criadas===0&&S.puladas>0?N(`Todas as ${S.puladas} mensalidades deste mês já estavam criadas!`,"info"):N(`Sucesso: ${S.criadas} mensalidade(s) gerada(s)! (${S.puladas} já existentes puladas)`,"success"),l(),!0}})}function B(v){const A=!!v,c=L.getStudents(),b=L.getTodayDateString(),u=c.map(S=>`<option value="${S.id}" ${(v==null?void 0:v.alunoId)===S.id?"selected":""}>${S.nome} (${S.instrumentoPrincipal||"Geral"})</option>`).join(""),w=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${A?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${u}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(v==null?void 0:v.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (AAAA-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" maxlength="7" value="${(v==null?void 0:v.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="text" id="pay-valor" class="form-input" placeholder="0,00" value="${v?Ie(v.valor):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(v==null?void 0:v.dataVencimento)||b}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(v==null?void 0:v.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(v==null?void 0:v.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(v==null?void 0:v.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(v==null?void 0:v.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="cartao_credito" ${(v==null?void 0:v.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(v==null?void 0:v.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="dinheiro" ${(v==null?void 0:v.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="boleto" ${(v==null?void 0:v.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(v==null?void 0:v.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(v==null?void 0:v.observacoes)||""}" />
        </div>
      </form>
    `;he({title:A?"Editar Lançamento":"Novo Lançamento Financeiro",bodyHtml:w,modalClass:"modal-md",confirmText:A?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const S=A&&v?v.alunoId:document.getElementById("pay-aluno").value,g=document.getElementById("pay-desc").value.trim(),k=document.getElementById("pay-mes").value.trim()||void 0,p=document.getElementById("pay-valor").value,r=Je(p),h=document.getElementById("pay-vencimento").value,f=document.getElementById("pay-status").value,i=document.getElementById("pay-forma").value||void 0,I=document.getElementById("pay-obs").value.trim()||void 0;if(!S)return N("Selecione um aluno.","error"),!1;if(!g)return N("Informe a descrição do lançamento.","error"),!1;if(k&&!/^\d{4}-\d{2}$/.test(k))return N("Mês de referência deve estar no formato AAAA-MM (Ex: 2026-10).","error"),!1;if(r<=0)return N("Informe um valor válido maior que zero.","error"),!1;if(!h)return N("Informe a data de vencimento.","error"),!1;const y=(t==null?void 0:t.nome)||"Administrador";let d=f;return d!=="pago"&&(d=h<b?"atrasado":"pendente"),A&&v?(L.updatePayment(v.id,{descricao:g,mesReferencia:k,valor:r,dataVencimento:h,status:d,formaPagamento:i,dataPagamento:d==="pago"?v.dataPagamento||b:void 0,observacoes:I},y),N("Lançamento atualizado com sucesso!","success")):(L.addPayment({alunoId:S,descricao:g,mesReferencia:k,valor:r,dataVencimento:h,status:d,formaPagamento:i,dataPagamento:d==="pago"?b:void 0,observacoes:I},y),N("Novo lançamento cadastrado com sucesso!","success")),l(),!0}}),setTimeout(()=>{const S=document.getElementById("pay-mes");S&&me(S,gt);const g=document.getElementById("pay-valor");g&&me(g,Ie);const k=document.getElementById("pay-vencimento"),p=document.getElementById("pay-status");if(k==null||k.addEventListener("change",()=>{p&&p.value!=="pago"&&(p.value=k.value<b?"atrasado":"pendente")}),!A){const r=document.getElementById("pay-aluno");r==null||r.addEventListener("change",()=>{const h=c.find(f=>f.id===r.value);if(h){const f=document.getElementById("pay-valor");f&&typeof h.valorMensalidade=="number"&&(f.value=Ie(h.valorMensalidade))}})}},50)}return l(),e}function Lt(m){const e=document.createElement("div"),t=ie.getCurrentUser(),a=de(t,"relatorios","gerar");let s="alunos",n="todos",z="todos",$="todos",o="todos",M="todos",l="nome_asc",x={column:"nome",direction:"asc"},P="",B="",v="",A="",c="todos",b="todos",u="todos",w="vencimento_asc",S={column:"vencimento",direction:"asc"};function g(){var te,Z,ee,ae,O,re,ne,ge,H,oe,le,ue,pe,we,ce,Ce,ke,ze,Re;const f=L.getSettings(),i=L.getStudents(),I=L.getPlans(),y=L.getPayments(),d=Array.from(new Set(i.map(C=>C.instrumentoPrincipal).filter(Boolean))).sort();let T=i.filter(C=>{if(n!=="todos"&&C.status!==n||z!=="todos"&&C.instrumentoPrincipal!==z||$!=="todos"&&C.nivelMusical!==$||o!=="todos"&&C.planoId!==o)return!1;if(M!=="todos"){const se=L.isStudentOverdue(C.id);if(M==="em_dia"&&se||M==="atrasado"&&!se)return!1}return!0});T=Ee(T,x,{nome:C=>C.nome,instrumento:C=>C.instrumentoPrincipal||"",contato:C=>C.telefone||"",plano:C=>{var se;return((se=I.find(ve=>ve.id===C.planoId))==null?void 0:se.nome)||""},status:C=>C.status,mensalidade:C=>L.isStudentOverdue(C.id)?1:0,criadoEm:C=>C.criadoEm||""});const R=T.length,j=T.filter(C=>C.status==="ativo").length,U=T.filter(C=>C.status==="inativo").length,E=T.filter(C=>L.isStudentOverdue(C.id)).length,D=new Date().toISOString().slice(0,10);let _=y.filter(C=>{if(P&&C.dataVencimento<P||B&&C.dataVencimento>B)return!1;const se=C.mesReferencia||C.dataVencimento.slice(0,7);if(v&&se<v||A&&se>A||b!=="todos"&&C.alunoId!==b||u!=="todos"&&C.formaPagamento!==u)return!1;const ve=C.status!=="pago"&&C.dataVencimento<D;return!(c==="pago"&&C.status!=="pago"||c==="pendente"&&(C.status==="pago"||ve)||c==="atrasado"&&!ve)});const F=new Map(i.map(C=>[C.id,C.nome]));_=Ee(_,S,{aluno:C=>F.get(C.alunoId)||"",descricao:C=>C.descricao,vencimento:C=>C.dataVencimento,valor:C=>C.valor,status:C=>C.status==="pago"?"pago":C.dataVencimento<D?"atrasado":"pendente"});const V=_.length,G=_.reduce((C,se)=>C+se.valor,0),W=_.filter(C=>C.status==="pago").reduce((C,se)=>C+se.valor,0),J=_.filter(C=>C.status!=="pago").reduce((C,se)=>C+se.valor,0);e.innerHTML=`
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
                <option value="todos" ${z==="todos"?"selected":""}>Todos os Instrumentos</option>
                ${d.map(C=>`<option value="${C}" ${z===C?"selected":""}>${C}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Nível Musical</label>
              <select id="filtro-aluno-nivel" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${$==="todos"?"selected":""}>Todos os Níveis</option>
                <option value="iniciante" ${$==="iniciante"?"selected":""}>Iniciante</option>
                <option value="basico" ${$==="basico"?"selected":""}>Básico</option>
                <option value="intermediario" ${$==="intermediario"?"selected":""}>Intermediário</option>
                <option value="avancado" ${$==="avancado"?"selected":""}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Plano de Ensino</label>
              <select id="filtro-aluno-plano" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${o==="todos"?"selected":""}>Todos os Planos</option>
                ${I.map(C=>`<option value="${C.id}" ${o===C.id?"selected":""}>${C.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Situação Financeira</label>
              <select id="filtro-aluno-financeiro" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${M==="todos"?"selected":""}>Todos</option>
                <option value="em_dia" ${M==="em_dia"?"selected":""}>Em Dia</option>
                <option value="atrasado" ${M==="atrasado"?"selected":""}>Com Mensalidade em Atraso</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${R}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${j}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #facc15; margin-top: 2px;">${U}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #f87171; margin-top: 2px;">${E}</div>
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
                  ${X("Aluno","nome",x,{extraStyle:"min-width: 140px;"})}
                  ${X("Instrumento","instrumento",x,{extraClass:"col-hide-md",extraStyle:"width: 170px;"})}
                  ${X("Contato","contato",x,{extraClass:"col-hide-sm",extraStyle:"width: 130px;"})}
                  ${X("Plano","plano",x,{extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                  ${X("Status","status",x,{extraClass:"col-hide-xs",extraStyle:"width: 100px;"})}
                  ${X("Mensalidade","mensalidade",x,{extraStyle:"width: 120px;"})}
                </tr>
              </thead>
              <tbody>
                ${T.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':T.map(C=>{const se=I.find(lt=>lt.id===C.planoId),ve=C.status==="ativo",it=L.isStudentOverdue(C.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${C.nome}</td>
                              <td class="col-hide-md">${C.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${C.telefone||"-"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${(se==null?void 0:se.nome)||"-"}</td>
                              <td class="col-hide-xs">
                                <span class="badge ${ve?"badge-success":"badge-warning"}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${ve?"Ativo":"Inativo"}
                                </span>
                              </td>
                              <td>
                                ${it?'<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>':'<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>'}
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${P}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${B}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${v}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${A}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Lançamento</label>
              <select id="filtro-fin-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${c==="todos"?"selected":""}>Todos os Status</option>
                <option value="pago" ${c==="pago"?"selected":""}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${c==="pendente"?"selected":""}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${c==="atrasado"?"selected":""}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${b==="todos"?"selected":""}>Todos os Alunos</option>
                ${i.map(C=>`<option value="${C.id}" ${b===C.id?"selected":""}>${C.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${u==="todos"?"selected":""}>Todas as Formas</option>
                <option value="pix" ${u==="pix"?"selected":""}>PIX</option>
                <option value="cartao_credito" ${u==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
                <option value="cartao_debito" ${u==="cartao_debito"?"selected":""}>Cartão de Débito</option>
                <option value="boleto" ${u==="boleto"?"selected":""}>Boleto</option>
                <option value="dinheiro" ${u==="dinheiro"?"selected":""}>Dinheiro</option>
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
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${G.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Recebido / Quitado</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${W.toFixed(2)}</div>
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
              Prévia do Relatório Financeiro (${_.length} lançamentos)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  ${X("Aluno","aluno",S,{extraStyle:"min-width: 140px;"})}
                  ${X("Descrição","descricao",S,{extraClass:"col-hide-md",extraStyle:"width: 180px;"})}
                  ${X("Vencimento","vencimento",S,{extraClass:"col-hide-sm",extraStyle:"width: 130px;"})}
                  ${X("Valor","valor",S,{extraStyle:"width: 110px;"})}
                  ${X("Status","status",S,{extraClass:"col-hide-xs",extraStyle:"width: 100px;"})}
                </tr>
              </thead>
              <tbody>
                ${_.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':_.map(C=>{const se=C.status==="pago",ve=!se&&C.dataVencimento<D;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${F.get(C.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${C.descricao}${C.mesReferencia?` / ${C.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${C.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${C.valor.toFixed(2)}</td>
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
    `,(te=e.querySelector("#btn-tab-rel-alunos"))==null||te.addEventListener("click",()=>{s="alunos",g()}),(Z=e.querySelector("#btn-tab-rel-financeiro"))==null||Z.addEventListener("click",()=>{s="financeiro",g()}),(ee=e.querySelector("#filtro-aluno-status"))==null||ee.addEventListener("change",C=>{n=C.target.value,g()}),(ae=e.querySelector("#filtro-aluno-instrumento"))==null||ae.addEventListener("change",C=>{z=C.target.value,g()}),(O=e.querySelector("#filtro-aluno-nivel"))==null||O.addEventListener("change",C=>{$=C.target.value,g()}),(re=e.querySelector("#filtro-aluno-plano"))==null||re.addEventListener("change",C=>{o=C.target.value,g()}),(ne=e.querySelector("#filtro-aluno-financeiro"))==null||ne.addEventListener("change",C=>{M=C.target.value,g()}),(ge=e.querySelector("#filtro-aluno-ordem"))==null||ge.addEventListener("change",C=>{l=C.target.value,g()}),(H=e.querySelector("#btn-limpar-filtros-alunos"))==null||H.addEventListener("click",()=>{n="todos",z="todos",$="todos",o="todos",M="todos",l="nome_asc",g()}),(oe=e.querySelector("#filtro-fin-dataini"))==null||oe.addEventListener("change",C=>{P=C.target.value,g()}),(le=e.querySelector("#filtro-fin-datafim"))==null||le.addEventListener("change",C=>{B=C.target.value,g()}),(ue=e.querySelector("#filtro-fin-mesref-ini"))==null||ue.addEventListener("change",C=>{v=C.target.value,g()}),(pe=e.querySelector("#filtro-fin-mesref-fim"))==null||pe.addEventListener("change",C=>{A=C.target.value,g()}),(we=e.querySelector("#filtro-fin-status"))==null||we.addEventListener("change",C=>{c=C.target.value,g()}),(ce=e.querySelector("#filtro-fin-aluno"))==null||ce.addEventListener("change",C=>{b=C.target.value,g()}),(Ce=e.querySelector("#filtro-fin-metodo"))==null||Ce.addEventListener("change",C=>{u=C.target.value,g()}),(ke=e.querySelector("#filtro-fin-ordem"))==null||ke.addEventListener("change",C=>{w=C.target.value,g()}),(ze=e.querySelector("#btn-limpar-filtros-fin"))==null||ze.addEventListener("click",()=>{P="",B="",v="",A="",c="todos",b="todos",u="todos",w="vencimento_asc",g()}),(Re=e.querySelector("#btn-gerar-pdf"))==null||Re.addEventListener("click",async()=>{if(!a){N("Você não possui permissão para emitir relatórios.","error");return}const C=e.querySelector("#btn-gerar-pdf"),se=C?C.innerHTML:"";C&&(C.disabled=!0,C.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await r(f,T,I):await h(f,_,i,{mesIni:v,mesFim:A}),N("PDF gerado com sucesso!","success")}catch(ve){console.error("Erro ao gerar PDF:",ve),N("Ocorreu um erro ao gerar o documento PDF.","error")}finally{C&&(C.disabled=!1,C.innerHTML=se)}});const Y=e.querySelector("#tab-rel-alunos table");Y&&Ae(Y,x,C=>{x=C,g()});const K=e.querySelector("#tab-rel-financeiro table");K&&Ae(K,S,C=>{S=C,g()})}function k(f){return new Promise(i=>{if(f&&f.trim()!==""){const I=new Image;I.crossOrigin="Anonymous",I.onload=()=>{try{const y=document.createElement("canvas");y.width=160,y.height=160;const d=y.getContext("2d");if(!d){i(f);return}const T=24;d.fillStyle="#ffffff",d.beginPath(),d.moveTo(T,0),d.lineTo(160-T,0),d.quadraticCurveTo(160,0,160,T),d.lineTo(160,160-T),d.quadraticCurveTo(160,160,160-T,160),d.lineTo(T,160),d.quadraticCurveTo(0,160,0,160-T),d.lineTo(0,T),d.quadraticCurveTo(0,0,T,0),d.closePath(),d.fill();const R=12,j=160-R*2,U=160-R*2;let E=j,D=U;const _=I.width/I.height;_>1?D=j/_:E=U*_;const F=R+(j-E)/2,V=R+(U-D)/2;d.drawImage(I,F,V,E,D),i(y.toDataURL("image/png"))}catch{i(f)}},I.onerror=()=>{p().then(i)},I.src=f;return}p().then(i)})}function p(){return new Promise(f=>{try{const i=document.createElement("canvas");i.width=160,i.height=160;const I=i.getContext("2d");if(!I){f("");return}const y=32;I.fillStyle="#181c2b",I.beginPath(),I.moveTo(y,0),I.lineTo(160-y,0),I.quadraticCurveTo(160,0,160,y),I.lineTo(160,160-y),I.quadraticCurveTo(160,160,160-y,160),I.lineTo(y,160),I.quadraticCurveTo(0,160,0,160-y),I.lineTo(0,y),I.quadraticCurveTo(0,0,y,0),I.closePath(),I.fill(),I.lineWidth=3,I.strokeStyle="#2d3748",I.stroke();const d=new Image,T=`
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
        `,R=new Blob([T],{type:"image/svg+xml;charset=utf-8"}),j=URL.createObjectURL(R);d.onload=()=>{I.drawImage(d,20,20,120,120),URL.revokeObjectURL(j),f(i.toDataURL("image/png"))},d.onerror=()=>{URL.revokeObjectURL(j),f("")},d.src=j}catch{f("")}})}async function r(f,i,I){const y=new Ge({orientation:"portrait",unit:"mm",format:"a4"}),d=new Date().toLocaleString("pt-BR"),T=f.nomeMenu||f.nomeFantasia||f.nomeEscola||"ACUSTICAMENTE",R=f.razaoSocial||"Acusticamente Ensino Musical Ltda",j=f.cnpj?`CNPJ: ${f.cnpj}`:"",U=[f.telefoneContato,f.emailContato].filter(Boolean).join(" • "),E=[f.logradouro?`${f.logradouro}, ${f.numero||"s/n"}`:"",f.complemento,f.bairro,f.cidade?`${f.cidade} - ${f.estado||"SP"}`:"",f.cep?`CEP: ${f.cep}`:""].filter(Boolean).join(" • "),D=await k(f.logotipoCustomizado);D&&y.addImage(D,"PNG",14,12,17,17);const _=D?35:14;y.setFont("helvetica","bold"),y.setFontSize(13),y.setTextColor(15,23,42),y.text(T,_,17),y.setFont("helvetica","normal"),y.setFontSize(8),y.setTextColor(71,85,105),y.text([R,j].filter(Boolean).join(" • "),_,21.5),y.setFontSize(7.5),y.setTextColor(100,116,139),E&&y.text(E,_,25.5),U&&y.text(U,_,E?29.5:25.5),y.setFont("helvetica","bold"),y.setFontSize(12),y.setTextColor(217,72,59),y.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),y.setFont("helvetica","normal"),y.setFontSize(8),y.setTextColor(100,116,139),y.text(`Emissão: ${d}`,196,22,{align:"right"}),y.text(`Total: ${i.length} aluno(s)`,196,26.5,{align:"right"}),y.setDrawColor(203,213,225),y.setLineWidth(.4),y.line(14,33,196,33);const F=i.filter(O=>O.status==="ativo").length,V=i.filter(O=>O.status==="inativo").length,G=i.filter(O=>L.isStudentOverdue(O.id)).length,W=[{label:"TOTAL DE ALUNOS",value:`${i.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${F}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${G}`,color:[220,38,38]}],J=43,Y=12,K=36;W.forEach((O,re)=>{const ne=14+re*(J+3);y.setFillColor(248,250,252),y.roundedRect(ne,K,J,Y,1.5,1.5,"F"),y.setDrawColor(226,232,240),y.roundedRect(ne,K,J,Y,1.5,1.5,"S"),y.setFont("helvetica","bold"),y.setFontSize(6.5),y.setTextColor(100,116,139),y.text(O.label,ne+3,K+4),y.setFontSize(10.5),y.setTextColor(O.color[0],O.color[1],O.color[2]),y.text(O.value,ne+3,K+9.5)});const te=i.map((O,re)=>{const ne=I.find(oe=>oe.id===O.planoId),ge=O.status==="ativo",H=L.isStudentOverdue(O.id);return[(re+1).toString(),O.nome,O.instrumentoPrincipal||"Música Geral",O.telefone||"-",(ne==null?void 0:ne.nome)||"-",ge?"Ativo":"Inativo",H?"Atrasado":"Em dia"]});We(y,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:te.length>0?te:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:O=>{O.section==="body"&&(O.column.index===5&&(O.cell.raw==="Ativo"?(O.cell.styles.textColor=[22,163,74],O.cell.styles.fontStyle="bold"):O.cell.styles.textColor=[202,138,4]),O.column.index===6&&(O.cell.raw==="Atrasado"?(O.cell.styles.textColor=[220,38,38],O.cell.styles.fontStyle="bold"):O.cell.styles.textColor=[22,163,74]))}});const Z=y.internal.getNumberOfPages();for(let O=1;O<=Z;O++)y.setPage(O),y.setDrawColor(226,232,240),y.setLineWidth(.3),y.line(14,287,196,287),y.setFont("helvetica","normal"),y.setFontSize(7),y.setTextColor(148,163,184),y.text(`${T} • Sistema de Gestão Escolar & Pedagógica`,14,292),y.text(`Página ${O} de ${Z}`,196,292,{align:"right"});const ee=y.output("blob"),ae=URL.createObjectURL(ee);window.open(ae,"_blank")}async function h(f,i,I,y){const d=new Ge({orientation:"portrait",unit:"mm",format:"a4"}),T=new Map(I.map(H=>[H.id,H.nome])),R=new Date().toLocaleString("pt-BR"),j=f.nomeMenu||f.nomeFantasia||f.nomeEscola||"ACUSTICAMENTE",U=f.razaoSocial||"Acusticamente Ensino Musical Ltda",E=f.cnpj?`CNPJ: ${f.cnpj}`:"",D=[f.telefoneContato,f.emailContato].filter(Boolean).join(" • "),_=[f.logradouro?`${f.logradouro}, ${f.numero||"s/n"}`:"",f.complemento,f.bairro,f.cidade?`${f.cidade} - ${f.estado||"SP"}`:"",f.cep?`CEP: ${f.cep}`:""].filter(Boolean).join(" • "),F=new Date().toISOString().slice(0,10),V=i.reduce((H,oe)=>H+oe.valor,0),G=i.filter(H=>H.status==="pago").reduce((H,oe)=>H+oe.valor,0),W=i.filter(H=>H.status!=="pago").reduce((H,oe)=>H+oe.valor,0),J=await k(f.logotipoCustomizado);J&&d.addImage(J,"PNG",14,12,17,17);const Y=J?35:14;d.setFont("helvetica","bold"),d.setFontSize(13),d.setTextColor(15,23,42),d.text(j,Y,17),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(71,85,105),d.text([U,E].filter(Boolean).join(" • "),Y,21.5),d.setFontSize(7.5),d.setTextColor(100,116,139),_&&d.text(_,Y,25.5),D&&d.text(D,Y,_?29.5:25.5),d.setFont("helvetica","bold"),d.setFontSize(12),d.setTextColor(5,150,105),d.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),d.setFont("helvetica","normal"),d.setFontSize(8),d.setTextColor(100,116,139),d.text(`Emissão: ${R}`,196,22,{align:"right"});let K=`Total: ${i.length} registro(s)`;y!=null&&y.mesIni&&(y!=null&&y.mesFim)?K=`Ref: ${y.mesIni} a ${y.mesFim} • ${i.length} reg.`:y!=null&&y.mesIni?K=`Ref: a partir de ${y.mesIni} • ${i.length} reg.`:y!=null&&y.mesFim&&(K=`Ref: até ${y.mesFim} • ${i.length} reg.`),d.text(K,196,26.5,{align:"right"}),d.setDrawColor(203,213,225),d.setLineWidth(.4),d.line(14,33,196,33);const te=[{label:"LANÇAMENTOS",value:`${i.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${G.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${W.toFixed(2)}`,color:[220,38,38]}],Z=43,ee=12,ae=36;te.forEach((H,oe)=>{const le=14+oe*(Z+3);d.setFillColor(248,250,252),d.roundedRect(le,ae,Z,ee,1.5,1.5,"F"),d.setDrawColor(226,232,240),d.roundedRect(le,ae,Z,ee,1.5,1.5,"S"),d.setFont("helvetica","bold"),d.setFontSize(6.5),d.setTextColor(100,116,139),d.text(H.label,le+3,ae+4),d.setFontSize(10),d.setTextColor(H.color[0],H.color[1],H.color[2]),d.text(H.value,le+3,ae+9.5)});const O=i.map((H,oe)=>{const le=H.status==="pago",ue=!le&&H.dataVencimento<F,pe=le?"Pago":ue?"Atrasado":"Pendente",we=H.descricao+(H.mesReferencia?` / ${H.mesReferencia}`:""),ce=H.dataVencimento.split("-").reverse().join("/");return[(oe+1).toString(),T.get(H.alunoId)||"Aluno",we,ce,`R$ ${H.valor.toFixed(2)}`,pe]});We(d,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:O.length>0?O:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:H=>{H.section==="body"&&H.column.index===5&&(H.cell.raw==="Pago"?(H.cell.styles.textColor=[22,163,74],H.cell.styles.fontStyle="bold"):H.cell.raw==="Atrasado"?(H.cell.styles.textColor=[220,38,38],H.cell.styles.fontStyle="bold"):H.cell.styles.textColor=[202,138,4])}});const re=d.internal.getNumberOfPages();for(let H=1;H<=re;H++)d.setPage(H),d.setDrawColor(226,232,240),d.setLineWidth(.3),d.line(14,287,196,287),d.setFont("helvetica","normal"),d.setFontSize(7),d.setTextColor(148,163,184),d.text(`${j} • Gestão Financeira & Escolar`,14,292),d.text(`Página ${H} de ${re}`,196,292,{align:"right"});const ne=d.output("blob"),ge=URL.createObjectURL(ne);window.open(ge,"_blank")}return g(),e}function Tt(m){const e=document.createElement("div");let t=new Date,a="",s={column:"dataHora",direction:"desc"};const n=l=>l.toString().padStart(2,"0");function z(l){const x=l.getDate(),B=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][l.getMonth()],v=l.getFullYear(),A=new Date,c=A.getDate()===x&&A.getMonth()===l.getMonth()&&A.getFullYear()===v;return`${x} de ${B} de ${v}${c?" (Hoje)":""}`}function $(l){return`${l.getFullYear()}-${n(l.getMonth()+1)}-${n(l.getDate())}`}function o(){var w,S,g,k,p,r,h,f;const l=Q.getLogs(),x=new Date,P=`${n(x.getDate())}/${n(x.getMonth()+1)}/${x.getFullYear()}`,B=l.filter(i=>{var I;return(I=i.dataHoraFormatada)==null?void 0:I.startsWith(P)}).length,v=t?`${n(t.getDate())}/${n(t.getMonth()+1)}/${t.getFullYear()}`:"",A=t!==null&&x.getDate()===t.getDate()&&x.getMonth()===t.getMonth()&&x.getFullYear()===t.getFullYear(),c=l.filter(i=>{const I=!t||i.dataHoraFormatada&&i.dataHoraFormatada.startsWith(v)||i.dataHora&&i.dataHora.startsWith($(t)),y=a===""||i.tela.toLowerCase().includes(a.toLowerCase())||i.usuarioNome.toLowerCase().includes(a.toLowerCase())||i.usuarioLogin.toLowerCase().includes(a.toLowerCase())||i.acao.toLowerCase().includes(a.toLowerCase())||i.detalhes.toLowerCase().includes(a.toLowerCase());return I&&y}),b=Ee(c,s,{dataHora:i=>i.dataHora,usuario:i=>i.usuarioNome,tela:i=>i.tela,acao:i=>i.acao,detalhes:i=>i.detalhes});e.innerHTML=`
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
            ${t?z(t):"Todo o Histórico"}
          </h3>
          
          <div class="calendar-nav-buttons" style="display: flex; gap: 4px;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior" style="width: 28px; height: 28px; padding: 0;">
              ◀
            </button>
            <button type="button" class="btn ${A?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${t?$(t):""}"
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
            ${q.search}
          </div>
        </div>
        ${a?'<button class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>':""}
      </div>

      <!-- TABELA DE LOGS -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros Encontrados (${b.length})
            ${t?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${v}</span>`:""}
          </h3>
          ${t!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${v}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Data &amp; Hora","dataHora",s,{extraStyle:"min-width: 120px;"})}
                ${X("Usuário Responsável","usuario",s,{extraClass:"col-hide-sm",extraStyle:"width: 180px;"})}
                ${X("Tela / Módulo","tela",s,{extraClass:"col-hide-md",extraStyle:"width: 130px;"})}
                ${X("Ação Executada","acao",s)}
                ${X("Detalhes da Alteração","detalhes",s,{extraClass:"col-hide-sm"})}
              </tr>
            </thead>
            <tbody>
              ${b.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${v}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:b.map(i=>`
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
    `,(w=e.querySelector("#audit-btn-prev"))==null||w.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),o()}),(S=e.querySelector("#audit-btn-next"))==null||S.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),o()}),(g=e.querySelector("#audit-btn-today"))==null||g.addEventListener("click",()=>{t=new Date,o()}),(k=e.querySelector("#audit-btn-all"))==null||k.addEventListener("click",()=>{t=null,o()}),(p=e.querySelector("#audit-empty-btn-all"))==null||p.addEventListener("click",()=>{t=null,o()}),(r=e.querySelector("#audit-date-picker"))==null||r.addEventListener("change",i=>{const I=i.target.value;if(I){const[y,d,T]=I.split("-").map(Number);t=new Date(y,d-1,T)}else t=null;o()});const u=e.querySelector("#audit-search-input");u==null||u.addEventListener("input",i=>{a=i.target.value,o();const I=e.querySelector("#audit-search-input");I&&(I.focus(),I.selectionStart=I.selectionEnd=I.value.length)}),(h=e.querySelector("#btn-clear-audit-search"))==null||h.addEventListener("click",()=>{a="",o()}),Ae(e,s,i=>{s=i,o()}),(f=e.querySelector("#btn-clear-all-audit"))==null||f.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await L.resetCleanDatabase("Administrador"),o())})}const M=()=>{o()};return window.addEventListener("audit_updated",M),o(),e}function Dt(m){const e=document.createElement("div"),t=ie.getCurrentUser(),a=L.getSettings(),s=de(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${Ze(a.inscricaoEstadual||"")}" 
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
                  value="${je(a.telefoneContato||"")}" 
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

          <!-- Divisor -->
          <div style="border-top: 1px solid var(--border-subtle); margin: 18px 0;"></div>

          <!-- Mensagens Padrão de Aniversário (WhatsApp) -->
          <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 12px;">
              <label class="form-label" style="font-size: 0.85rem; font-weight: 700; color: var(--text-white); margin-bottom: 2px; display: block;">
                🎂 Mensagens Padrão de Aniversário (WhatsApp)
              </label>
              <span style="font-size: 0.74rem; color: var(--text-secondary);">
                Configure o texto padrão de felicitação sugerido ao abrir o WhatsApp na tela inicial. A tag <code>{nome}</code> será substituída pelo primeiro nome do aniversariante.
              </span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" for="cfg-msg-aluno" style="font-size: 0.76rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                  <span class="badge badge-info" style="font-size: 0.65rem;">Aluno</span> Mensagem para Alunos
                </label>
                <textarea 
                  id="cfg-msg-aluno" 
                  class="form-textarea" 
                  rows="3" 
                  placeholder="Mensagem de parabéns para alunos..."
                  style="resize: vertical; font-size: 0.82rem; line-height: 1.4;"
                >${a.msgAniversarioAluno||""}</textarea>
              </div>

              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" for="cfg-msg-professor" style="font-size: 0.76rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                  <span class="badge badge-warning" style="font-size: 0.65rem;">Professor</span> Mensagem para Professores
                </label>
                <textarea 
                  id="cfg-msg-professor" 
                  class="form-textarea" 
                  rows="3" 
                  placeholder="Mensagem de parabéns para professores..."
                  style="resize: vertical; font-size: 0.82rem; line-height: 1.4;"
                >${a.msgAniversarioProfessor||""}</textarea>
              </div>

              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" for="cfg-msg-admin" style="font-size: 0.76rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                  <span class="badge badge-coral" style="font-size: 0.65rem;">ADM</span> Mensagem para Administradores / Gestão
                </label>
                <textarea 
                  id="cfg-msg-admin" 
                  class="form-textarea" 
                  rows="3" 
                  placeholder="Mensagem de parabéns para administradores..."
                  style="resize: vertical; font-size: 0.82rem; line-height: 1.4;"
                >${a.msgAniversarioAdmin||""}</textarea>
              </div>
            </div>
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
  `;const n=e.querySelector("#btn-tab-gerais"),z=e.querySelector("#btn-tab-instituicao"),$=e.querySelector("#tab-content-gerais"),o=e.querySelector("#tab-content-instituicao");function M(d,T){d&&(T?d.classList.add("active"):d.classList.remove("active"))}function l(d){$.style.display=d==="gerais"?"block":"none",o.style.display=d==="instituicao"?"block":"none",M(n,d==="gerais"),M(z,d==="instituicao")}n==null||n.addEventListener("click",()=>l("gerais")),z==null||z.addEventListener("click",()=>l("instituicao"));let x=a.logotipoCustomizado||"";const P=e.querySelector("#cfg-menu-name"),B=e.querySelector("#preview-menu-brand-name"),v=e.querySelector("#preview-report-brand-name"),A=e.querySelector("#preview-logo-menu"),c=e.querySelector("#preview-logo-report"),b=e.querySelector("#input-logo-file"),u=e.querySelector("#btn-upload-logo"),w=e.querySelector("#btn-reset-logo"),S=e.querySelector("#logo-feedback-msg");P==null||P.addEventListener("input",()=>{const d=P.value.trim()||"Acusticamente";B&&(B.textContent=d),v&&(v.textContent=d)}),u==null||u.addEventListener("click",()=>{b==null||b.click()}),b==null||b.addEventListener("change",d=>{const T=d.target.files;if(!T||T.length===0)return;const R=T[0];if(!R.type.startsWith("image/")){N("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(R.size>3*1024*1024){N("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const j=new FileReader;j.onload=U=>{var E;x=((E=U.target)==null?void 0:E.result)||"",A&&(A.innerHTML=ye(x,40)),c&&(c.innerHTML=ye(x,40)),w&&(w.disabled=!1,w.style.color="#ef4444"),S&&(S.style.display="block",S.style.color="var(--status-success)",S.textContent="Imagem carregada no preview. Clique em Salvar."),N("Logotipo carregado na pré-visualização!","info")},j.onerror=()=>{N("Erro ao processar o arquivo de imagem.","error")},j.readAsDataURL(R)}),w==null||w.addEventListener("click",()=>{x="",b&&(b.value=""),A&&(A.innerHTML=ye("",40)),c&&(c.innerHTML=ye("",40)),w&&(w.disabled=!0,w.style.color="var(--text-muted)"),S&&(S.style.display="block",S.style.color="var(--color-coral)",S.textContent="Logotipo padrão no preview. Clique em Salvar."),N("Logotipo padrão restaurado no preview.","info")});const g=e.querySelector("#form-settings-gerais");g==null||g.addEventListener("submit",d=>{var E,D,_;d.preventDefault();const T=P.value.trim()||"Acusticamente",R=((E=e.querySelector("#cfg-msg-aluno"))==null?void 0:E.value.trim())||"",j=((D=e.querySelector("#cfg-msg-professor"))==null?void 0:D.value.trim())||"",U=((_=e.querySelector("#cfg-msg-admin"))==null?void 0:_.value.trim())||"";L.updateSettings({nomeMenu:T,logotipoCustomizado:x,msgAniversarioAluno:R,msgAniversarioProfessor:j,msgAniversarioAdmin:U},(t==null?void 0:t.nome)||"Administrador"),S&&(S.style.display="none"),N("Configurações gerais salvas com sucesso!","success")});const k=e.querySelector("#cfg-cnpj");k&&me(k,Xe);const p=e.querySelector("#cfg-ie");p&&me(p,Ze);const r=e.querySelector("#cfg-tel");r&&me(r,je);const h=e.querySelector("#cfg-cep");h&&me(h,Ke);const f=e.querySelector("#cfg-uf");f==null||f.addEventListener("input",d=>{d.target.value=d.target.value.toUpperCase().slice(0,2)});const i=e.querySelector("#form-settings-institucional");i==null||i.addEventListener("submit",d=>{d.preventDefault();const T=e.querySelector("#cfg-fantasia").value.trim(),R=e.querySelector("#cfg-razao").value.trim(),j=e.querySelector("#cfg-cnpj").value.trim(),U=e.querySelector("#cfg-ie").value.trim(),E=e.querySelector("#cfg-tel").value.trim(),D=e.querySelector("#cfg-email").value.trim(),_=e.querySelector("#cfg-site").value.trim(),F=e.querySelector("#cfg-cep").value.trim(),V=e.querySelector("#cfg-logradouro").value.trim(),G=e.querySelector("#cfg-numero").value.trim(),W=e.querySelector("#cfg-complemento").value.trim(),J=e.querySelector("#cfg-bairro").value.trim(),Y=e.querySelector("#cfg-cidade").value.trim(),K=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!T){N("Informe o Nome Fantasia da instituição.","error");return}if(D&&!nt(D)){N("Informe um endereço de e-mail válido.","error");return}const te=j.replace(/\D/g,"");if(te.length>0&&te.length!==14){N("CNPJ incompleto (deve conter 14 dígitos).","error");return}const Z=E.replace(/\D/g,"");if(Z.length>0&&Z.length<10){N("Telefone/WhatsApp incompleto.","error");return}const ee=F.replace(/\D/g,"");if(ee.length>0&&ee.length!==8){N("CEP incompleto (deve conter 8 dígitos).","error");return}L.updateSettings({nomeEscola:T,nomeClinica:T,nomeFantasia:T,razaoSocial:R,cnpj:j,inscricaoEstadual:U,telefoneContato:E,emailContato:D,website:_,cep:F,logradouro:V,numero:G,complemento:W,bairro:J,cidade:Y,estado:K},(t==null?void 0:t.nome)||"Administrador"),N("Dados da instituição salvos com sucesso!","success")});const I=e.querySelector("#footer-cloud-status"),y=d=>{I&&(d==="connected"?(I.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,I.style.color="#4ade80"):d==="fallback"?(I.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,I.style.color="#fbbf24"):(I.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,I.style.color="#94a3b8"))};return y(L.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",d=>{y(d.detail)}),e}class Bt{constructor(){fe(this,"currentScreen","site");fe(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=ie.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":ie.isAuthenticated()?["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","user","auditoria","configuracoes"].includes(e)&&be(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const a=window.location.hash.replace("#","").trim(),s=!a||a==="site"?"site":a;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const a=L.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=a.nomeMenu||"Acusticamente");const n=document.querySelector(".sidebar-logo");n&&(n.innerHTML=ye(a.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{ie.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),L.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","auditoria","configuracoes"];for(const a of t)if(be(e,a))return a;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!ie.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=ie.getCurrentUser();if(!be(t,e)){N("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const a=this.getFirstAllowedScreen(t);this.currentScreen=a,window.location.hash=a,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),L.syncWithCloud()}render(){var B;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const v=ht(A=>{this.navigateTo(A)});this.appRoot.appendChild(v);return}if(this.currentScreen==="login"||!ie.isAuthenticated()){const v=yt(()=>{const A=ie.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(A))},()=>{this.navigateTo("site")});this.appRoot.appendChild(v);return}const e=document.createElement("div");e.className="app-container";const t=ie.getCurrentUser(),a=(t==null?void 0:t.papel)==="admin",s=L.getSettings(),n=s.nomeMenu||"Acusticamente";e.innerHTML=`
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
            ${q.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${be(t,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${q.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${be(t,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${q.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${be(t,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${q.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${be(t,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${q.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${be(t,"financeiro")?`
            <a class="nav-item ${this.currentScreen==="financeiro"?"active":""}" data-screen="financeiro">
              <span class="nav-item-icon">${q.financeiro}</span>
              <span>Financeiro</span>
            </a>
          `:""}

          ${be(t,"planos-pagamento")?`
            <a class="nav-item ${this.currentScreen==="planos-pagamento"?"active":""}" data-screen="planos-pagamento">
              <span class="nav-item-icon">${q.planoPagamento}</span>
              <span>Planos de Pagamento</span>
            </a>
          `:""}

          ${be(t,"relatorios")?`
            <a class="nav-item ${this.currentScreen==="relatorios"?"active":""}" data-screen="relatorios">
              <span class="nav-item-icon">${q.relatorios}</span>
              <span>Relatórios</span>
            </a>
          `:""}

          ${a?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${q.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${be(t,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${q.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${be(t,"configuracoes")?`
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
    `;const z=e.querySelector("#app-sidebar"),$=e.querySelector("#sidebar-backdrop"),o=e.querySelector("#btn-mobile-menu-toggle"),M=e.querySelector("#btn-sidebar-close"),l=v=>{const A=v!==void 0?v:!z.classList.contains("open");z.classList.toggle("open",A),$.classList.toggle("open",A),document.body.style.overflow=A?"hidden":""};o==null||o.addEventListener("click",()=>l(!0)),M==null||M.addEventListener("click",()=>l(!1)),$==null||$.addEventListener("click",()=>l(!1)),e.querySelectorAll(".nav-item").forEach(v=>{v.addEventListener("click",A=>{const c=A.currentTarget.dataset.screen;l(!1),c&&this.navigateTo(c)})}),(B=e.querySelector("#btn-app-logout"))==null||B.addEventListener("click",()=>{$e({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{ie.logout(),this.navigateTo("site")}})});const x=e.querySelector("#screen-viewport"),P=this.createViewElement(this.currentScreen);x.appendChild(P),this.appRoot.appendChild(e)}createViewElement(e){const t=a=>this.navigateTo(a);switch(e){case"home":return tt(t);case"agenda":return wt();case"alunos":return It(t);case"user":return kt(t);case"planos":return zt();case"financeiro":return Mt();case"planos-pagamento":return Pt();case"relatorios":return Lt();case"auditoria":return Tt();case"configuracoes":return Dt();default:return tt(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"planos-pagamento":return"Planos de Pagamento";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"planos-pagamento":return"Gestão de valores, modalidades (individual/turma) e ciclos de cobrança";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new Bt});
