var dt=Object.defineProperty;var ct=(g,e,t)=>e in g?dt(g,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):g[e]=t;var fe=(g,e,t)=>ct(g,typeof e!="symbol"?e+"":e,t);import{E as Ge,a as We}from"./pdf-D4_PdGrn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const z of n.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&a(z)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const Ye="acusticamente_audit_logs";class pt{constructor(){fe(this,"logs",[]);this.loadLogs()}loadLogs(){try{const e=localStorage.getItem(Ye);e?this.logs=JSON.parse(e):this.logs=[]}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(Ye,JSON.stringify(this.logs))}catch(e){console.error("Erro ao salvar auditoria no storage:",e)}}log(e){const t=new Date,a=z=>z.toString().padStart(2,"0"),s=`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} ${a(t.getHours())}:${a(t.getMinutes())}:${a(t.getSeconds())}`,n={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:t.toISOString(),dataHoraFormatada:s,usuarioId:e.usuarioId||"1",usuarioLogin:e.usuarioLogin||"1",usuarioNome:e.usuarioNome||"Administrador",tela:e.tela,acao:e.acao,detalhes:e.detalhes};return this.logs.unshift(n),this.saveLogs(),typeof window<"u"&&fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"upsert",data:n})}).catch(()=>{}),window.dispatchEvent(new CustomEvent("audit_updated",{detail:n})),n}getLogs(){return[...this.logs]}setLogs(e){this.logs=e,this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}clearLocalOnly(){this.logs=[],this.saveLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}async clearLogs(){this.logs=[],this.saveLogs();try{typeof window<"u"&&await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:"auditorias",action:"clear_audit"})})}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("audit_updated"))}}const Q=new pt,_e="acusticamente_users",Pe="acusticamente_students",Me="acusticamente_plans",qe="acusticamente_payment_plans",Le="acusticamente_appointments",Te="acusticamente_settings",Be="acusticamente_payments";class ut{constructor(){fe(this,"users",[]);fe(this,"students",[]);fe(this,"plans",[]);fe(this,"paymentPlans",[]);fe(this,"appointments",[]);fe(this,"payments",[]);fe(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",razaoSocial:"Acusticamente Ensino Musical Ltda",nomeFantasia:"Acusticamente Escola de Música",cnpj:"12.345.678/0001-90",inscricaoEstadual:"123.456.789.110",telefoneContato:"(51) 98189-8802",emailContato:"contato@acusticamente.com.br",website:"https://www.instagram.com/acusticamente.rs",cep:"94060-001",logradouro:"Av. Dorival Cândido Luz de Oliveira",numero:"5564",complemento:"",bairro:"Santa Fe",cidade:"Gravataí",estado:"RS",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0,nomeMenu:"Acusticamente",logotipoCustomizado:"",msgAniversarioAluno:"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Que seu novo ciclo seja repleto de realizações, saúde, alegria e muita música! Parabéns pelo seu dia! 🎶✨",msgAniversarioProfessor:"Olá, Prof. {nome}! 🎂🎉 Toda a equipe da Acusticamente te deseja um Feliz Aniversário! Muito obrigado por sua dedicação musical e talento. Que você tenha um ano repleto de sucesso e realizações! 🎶✨",msgAniversarioAdmin:"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Muito sucesso, liderança, saúde e grandes conquistas neste novo ciclo! Parabéns! 🎶✨"});fe(this,"cloudStatus","checking");this.initData()}dedupeById(e){if(!Array.isArray(e))return[];const t=new Map;for(const a of e)a&&a.id&&t.set(a.id,a);return Array.from(t.values())}initData(){const e=localStorage.getItem(_e);e?this.users=this.dedupeById(JSON.parse(e).map(o=>{var P,d,x;return{...o,permissoes:{...o.permissoes,planosPagamento:((P=o.permissoes)==null?void 0:P.planosPagamento)||(o.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:o.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),financeiro:((d=o.permissoes)==null?void 0:d.financeiro)||(o.papel==="admin"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0}:o.papel==="atendente"?{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1}:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1}),relatorios:((x=o.permissoes)==null?void 0:x.relatorios)||{acesso:!0,gerar:!0}}}})):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,dataNascimento:"1992-09-24",criadoEm:new Date().toISOString()}],localStorage.setItem(_e,JSON.stringify(this.users)));const t=localStorage.getItem(Me);if(t)try{const o=JSON.parse(t);this.plans=o.map(P=>({...P,valor:typeof P.valor=="number"?P.valor:280,modulos:(P.modulos||[]).map((d,x)=>({...d,aulas:Array.isArray(d.aulas)&&d.aulas.length>0?d.aulas:[{id:`aul_${d.id||x+1}_1`,ordem:1,titulo:"Aula 1: Fundamentos e Introdução"},{id:`aul_${d.id||x+1}_2`,ordem:2,titulo:"Aula 2: Desenvolvimento Prático"},{id:`aul_${d.id||x+1}_3`,ordem:3,titulo:"Aula 3: Exercícios de Fixação"},{id:`aul_${d.id||x+1}_4`,ordem:4,titulo:"Aula 4: Revisão e Repertório"}]}))}))}catch{this.plans=[]}else this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação",aulas:[{id:"aul_1_1_1",ordem:1,titulo:"Aula 1: Exploração Sonora e Alturas"},{id:"aul_1_1_2",ordem:2,titulo:"Aula 2: Pulso, Tempo e Ritmo Corporal"},{id:"aul_1_1_3",ordem:3,titulo:"Aula 3: Dinâmica e Intensidade"},{id:"aul_1_1_4",ordem:4,titulo:"Aula 4: Jogos Musicais e Percepção"}]},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas",aulas:[{id:"aul_1_2_1",ordem:1,titulo:"Aula 1: Família dos Instrumentos"},{id:"aul_1_2_2",ordem:2,titulo:"Aula 2: Escuta Ativa e Melodia"},{id:"aul_1_2_3",ordem:3,titulo:"Aula 3: Canto Coletivo e Afinação"}]},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto",aulas:[{id:"aul_1_3_1",ordem:1,titulo:"Aula 1: Estruturas Harmônicas Iniciais"},{id:"aul_1_3_2",ordem:2,titulo:"Aula 2: Solfejo Rítmico"},{id:"aul_1_3_3",ordem:3,titulo:"Aula 3: Apresentação Pedagógica"}]}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[{id:"aul_2_1_1",ordem:1,titulo:"Aula 1: Postura, Afinação e Mão Direita"},{id:"aul_2_1_2",ordem:2,titulo:"Aula 2: Acordes Maiores Básicos (E, A, D)"},{id:"aul_2_1_3",ordem:3,titulo:"Aula 3: Levada Pop/Rock e Troca de Acordes"},{id:"aul_2_1_4",ordem:4,titulo:"Aula 4: Primeira Música Completa"}]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[{id:"aul_2_2_1",ordem:1,titulo:"Aula 1: Padrões de Dedilhado (P-I-M-A)"},{id:"aul_2_2_2",ordem:2,titulo:"Aula 2: Acordes Menores e com Sétima"},{id:"aul_2_2_3",ordem:3,titulo:"Aula 3: Repertório com Dedilhado"}]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[{id:"aul_2_3_1",ordem:1,titulo:"Aula 1: Escala Pentatônica no Braço"},{id:"aul_2_3_2",ordem:2,titulo:"Aula 2: Pestanas sem Esforço Excesso"},{id:"aul_2_3_3",ordem:3,titulo:"Aula 3: Aplicação de Solos e Improviso"}]}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura",aulas:[{id:"aul_3_1_1",ordem:1,titulo:"Aula 1: Postura ao Teclado e Numeração dos Dedos"},{id:"aul_3_1_2",ordem:2,titulo:"Aula 2: Localização das Notas e Escala de Dó Maior"},{id:"aul_3_1_3",ordem:3,titulo:"Aula 3: Exercícios de Hanon para Independência"}]},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol",aulas:[{id:"aul_3_2_1",ordem:1,titulo:"Aula 1: Leitura na Clave de Sol e Fá Básica"},{id:"aul_3_2_2",ordem:2,titulo:"Aula 2: Coordenação Bimanual"},{id:"aul_3_2_3",ordem:3,titulo:"Aula 3: Pequenas Peças ao Piano"}]},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular",aulas:[{id:"aul_3_3_1",ordem:1,titulo:"Aula 1: Acompanhamento em Cifras e Acordes"},{id:"aul_3_3_2",ordem:2,titulo:"Aula 2: Dinâmica e Pedal de Sustentação"},{id:"aul_3_3_3",ordem:3,titulo:"Aula 3: Montagem de Repertório Escolhido"}]}]}],localStorage.setItem(Me,JSON.stringify(this.plans));const a=localStorage.getItem(qe);if(a)try{this.paymentPlans=JSON.parse(a)}catch{this.paymentPlans=[]}(!this.paymentPlans||this.paymentPlans.length===0)&&(this.paymentPlans=[{id:"pp_ind_mensal",nome:"Individual - Mensal",modalidade:"individual",periodicidade:"mensal",valorMensal:280,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas individuais semanais com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_ind_trimestral",nome:"Individual - Trimestral",modalidade:"individual",periodicidade:"trimestral",valorMensal:250,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual com fidelidade trimestral e valor promocional.",criadoEm:new Date().toISOString()},{id:"pp_ind_semestral",nome:"Individual - Semestral",modalidade:"individual",periodicidade:"semestral",valorMensal:230,descontoSegundaMatricula:20,ativo:!0,descricao:"Plano individual semestral com máxima economia.",criadoEm:new Date().toISOString()},{id:"pp_turma_mensal",nome:"Turma - Mensal",modalidade:"turma",periodicidade:"mensal",valorMensal:190,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em pequenos grupos (turmas) com renovação mensal.",criadoEm:new Date().toISOString()},{id:"pp_turma_trimestral",nome:"Turma - Trimestral",modalidade:"turma",periodicidade:"trimestral",valorMensal:170,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade trimestral.",criadoEm:new Date().toISOString()},{id:"pp_turma_semestral",nome:"Turma - Semestral",modalidade:"turma",periodicidade:"semestral",valorMensal:150,descontoSegundaMatricula:20,ativo:!0,descricao:"Aulas em turma com fidelidade semestral.",criadoEm:new Date().toISOString()}],localStorage.setItem(qe,JSON.stringify(this.paymentPlans)));const s=localStorage.getItem(Pe);s?this.students=this.dedupeById(JSON.parse(s).map(o=>({...o,saldoReposicoes:typeof o.saldoReposicoes=="number"?o.saldoReposicoes:0,instrumentoPrincipal:o.instrumentoPrincipal||"Violão",nivelMusical:o.nivelMusical||"iniciante",valorMensalidade:typeof o.valorMensalidade=="number"?o.valorMensalidade:280,diaVencimento:typeof o.diaVencimento=="number"?o.diaVencimento:10}))):(this.students=[],localStorage.setItem(Pe,JSON.stringify(this.students)));const n=localStorage.getItem(Le);n?this.appointments=this.dedupeById(JSON.parse(n)):(this.appointments=[],localStorage.setItem(Le,JSON.stringify(this.appointments)));const z=localStorage.getItem(Te);z&&(this.settings={...this.settings,...JSON.parse(z)});const $=localStorage.getItem(Be);$?this.payments=this.dedupeById(JSON.parse($)):(this.payments=[],localStorage.setItem(Be,JSON.stringify(this.payments))),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",localStorage.setItem(Te,JSON.stringify(this.settings))),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",localStorage.setItem(Te,JSON.stringify(this.settings))),this.plans.forEach(o=>{o.nome.includes("Reabilitação")&&(o.nome="Violão e Harmonia Prática",o.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",o.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas",aulas:[]},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes",aulas:[]},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática",aulas:[]}])}),localStorage.setItem(Me,JSON.stringify(this.plans)),this.students.forEach(o=>{var P;(P=o.observacoes)!=null&&P.includes("implante")&&(o.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",o.observacoes="Iniciando estudos no violão popular.")}),localStorage.setItem(Pe,JSON.stringify(this.students)),this.appointments.forEach(o=>{var P;(P=o.titulo)!=null&&P.includes("Auditivo")&&(o.titulo="Aula Prática de Violão",o.observacoes="Praticar transição entre acordes maiores.")}),localStorage.setItem(Le,JSON.stringify(this.appointments))}getTodayDateString(){const e=new Date,t=a=>a.toString().padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}getCloudStatus(){return this.cloudStatus}async pushToCloud(e,t,a){try{if(typeof window>"u")return;await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:e,action:t,data:a})})}catch{}}async syncWithCloud(){try{if(typeof window>"u")return!1;const e=await fetch("/api/sync");if(!e.ok)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;const t=await e.json();if(!t.success||!t.data)return this.cloudStatus="fallback",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1;this.cloudStatus="connected",window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"connected"}));const a=t.data;return Array.isArray(a.students)&&(this.students=this.dedupeById(a.students),localStorage.setItem(Pe,JSON.stringify(this.students))),Array.isArray(a.payments)&&(this.payments=this.dedupeById(a.payments),localStorage.setItem(Be,JSON.stringify(this.payments))),Array.isArray(a.appointments)&&(this.appointments=this.dedupeById(a.appointments),localStorage.setItem(Le,JSON.stringify(this.appointments))),Array.isArray(a.plans)&&(this.plans=this.dedupeById(a.plans),localStorage.setItem(Me,JSON.stringify(this.plans))),Array.isArray(a.paymentPlans)&&(this.paymentPlans=this.dedupeById(a.paymentPlans),localStorage.setItem(qe,JSON.stringify(this.paymentPlans))),Array.isArray(a.users)&&a.users.length>0&&(this.users=this.dedupeById(a.users),localStorage.setItem(_e,JSON.stringify(this.users))),a.settings&&(this.settings={...this.settings,...a.settings},localStorage.setItem(Te,JSON.stringify(this.settings))),Array.isArray(a.audit)&&(a.audit.length===0?Q.clearLocalOnly():Q.setLogs(a.audit)),window.dispatchEvent(new CustomEvent("acusticamente:data-synced")),!0}catch{return this.cloudStatus="fallback",typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:cloud-status-changed",{detail:"fallback"})),!1}}async resetCleanDatabase(e){this.students=[],this.payments=[],this.appointments=[],this.plans=[],localStorage.setItem(Pe,JSON.stringify([])),localStorage.setItem(Be,JSON.stringify([])),localStorage.setItem(Le,JSON.stringify([])),localStorage.setItem(Me,JSON.stringify([])),await this.pushToCloud("all","reset_clean",{}),await Q.clearLogs(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("acusticamente:data-synced"))}saveUsers(){localStorage.setItem(_e,JSON.stringify(this.users))}saveStudents(){localStorage.setItem(Pe,JSON.stringify(this.students))}savePlans(){localStorage.setItem(Me,JSON.stringify(this.plans))}saveAppointments(){localStorage.setItem(Le,JSON.stringify(this.appointments))}savePayments(){localStorage.setItem(Be,JSON.stringify(this.payments))}savePaymentPlans(){localStorage.setItem(qe,JSON.stringify(this.paymentPlans))}saveSettings(){localStorage.setItem(Te,JSON.stringify(this.settings)),this.pushToCloud("settings","upsert",this.settings)}getUsers(){return this.dedupeById(this.users)}getUserById(e){return this.users.find(t=>t.id===e)}addUser(e,t){const a={...e,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(a),this.saveUsers(),this.pushToCloud("users","upsert",a),Q.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:t,detalhes:`Criado usuário "${a.nome}" (login: ${a.login}, papel: ${a.papel})`}),a}updateUser(e,t,a){const s=this.users.findIndex($=>$.id===e);if(s===-1)throw new Error("Usuário não encontrado.");const n=this.users[s],z=n.isSistema;return this.users[s]={...n,...t,isSistema:z,atualizadoEm:new Date().toISOString()},this.saveUsers(),this.pushToCloud("users","upsert",this.users[s]),Q.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:a,detalhes:`Usuário "${n.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[s]}deleteUser(e,t){const a=this.users.find(s=>s.id===e);if(!a)throw new Error("Usuário não encontrado.");if(a.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(s=>s.id!==e),this.saveUsers(),this.pushToCloud("users","delete",{id:e}),Q.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:t,detalhes:`Usuário "${a.nome}" (login: ${a.login}) foi removido.`})}getStudents(){return this.dedupeById(this.students)}getStudentById(e){return this.students.find(t=>t.id===e)}addStudent(e,t){const a={...e,id:"aluno_"+Date.now(),saldoReposicoes:0,criadoEm:new Date().toISOString()};return this.students.push(a),this.saveStudents(),this.pushToCloud("students","upsert",a),Q.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" cadastrado com status ${a.status}. Saldo de remarcação inicial: 0.`}),a}updateStudent(e,t,a){const s=this.students.findIndex($=>$.id===e);if(s===-1)throw new Error("Aluno não encontrado.");const n=this.students[s],z={...t};return delete z.saldoReposicoes,this.students[s]={...n,...z,saldoReposicoes:n.saldoReposicoes??0},this.saveStudents(),this.pushToCloud("students","upsert",this.students[s]),Q.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:a,detalhes:`Aluno "${n.nome}" atualizado.`}),this.students[s]}deleteStudent(e,t){const a=this.students.find(s=>s.id===e);a&&(this.students=this.students.filter(s=>s.id!==e),this.saveStudents(),this.pushToCloud("students","delete",{id:e}),this.pushToCloud("appointments","delete_by_student",{studentId:e}),Q.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:t,detalhes:`Aluno "${a.nome}" foi removido do sistema.`}))}getPlans(){return this.dedupeById(this.plans)}addPlan(e,t){const a={...e,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(a),this.savePlans(),this.pushToCloud("plans","upsert",a),Q.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" criado com ${a.modulos.length} módulos.`}),a}updatePlan(e,t,a){const s=this.plans.findIndex(z=>z.id===e);if(s===-1)throw new Error("Plano não encontrado.");const n=this.plans[s];return this.plans[s]={...n,...t},this.savePlans(),this.pushToCloud("plans","upsert",this.plans[s]),Q.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:a,detalhes:`Plano "${n.nome}" atualizado.`}),this.plans[s]}deletePlan(e,t){const a=this.plans.find(s=>s.id===e);a&&(this.plans=this.plans.filter(s=>s.id!==e),this.savePlans(),this.pushToCloud("plans","delete",{id:e}),Q.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:t,detalhes:`Plano "${a.nome}" foi excluído.`}))}getPaymentPlans(){return this.dedupeById(this.paymentPlans)}getPaymentPlanById(e){return this.paymentPlans.find(t=>t.id===e)}addPaymentPlan(e,t){const a={...e,id:"pp_"+Date.now(),criadoEm:new Date().toISOString()};return this.paymentPlans.push(a),this.savePaymentPlans(),this.pushToCloud("payment_plans","upsert",a),Q.log({tela:"Planos de Pagamento",acao:"Criação de Plano de Pagamento",usuarioNome:t,detalhes:`Plano "${a.nome}" criado (Modalidade: ${a.modalidade}, Ciclo: ${a.periodicidade}, R$ ${a.valorMensal}).`}),a}updatePaymentPlan(e,t,a){const s=this.paymentPlans.findIndex(z=>z.id===e);if(s===-1)throw new Error("Plano de pagamento não encontrado.");const n=this.paymentPlans[s];return this.paymentPlans[s]={...n,...t},this.savePaymentPlans(),this.pushToCloud("payment_plans","upsert",this.paymentPlans[s]),Q.log({tela:"Planos de Pagamento",acao:"Atualização de Plano de Pagamento",usuarioNome:a,detalhes:`Plano de pagamento "${n.nome}" atualizado.`}),this.paymentPlans[s]}deletePaymentPlan(e,t){const a=this.paymentPlans.find(s=>s.id===e);a&&(this.paymentPlans=this.paymentPlans.filter(s=>s.id!==e),this.savePaymentPlans(),this.pushToCloud("payment_plans","delete",{id:e}),Q.log({tela:"Planos de Pagamento",acao:"Exclusão de Plano de Pagamento",usuarioNome:t,detalhes:`Plano de pagamento "${a.nome}" foi excluído.`}))}calcularMensalidadeAluno(e,t){const a=this.paymentPlans.find(o=>o.id===e),s=a?a.valorMensal:280,n=t?(a==null?void 0:a.descontoSegundaMatricula)??20:0,z=n>0?s*n/100:0,$=Math.max(0,s-z);return{valorBase:s,descontoPercentual:n,valorDesconto:z,valorFinal:$}}getAppointments(){return this.dedupeById(this.appointments)}addAppointment(e,t){const a={...e,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(a),this.saveAppointments(),this.pushToCloud("appointments","upsert",a);const s=this.students.find(n=>n.id===a.alunoId);return Q.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:t,detalhes:`Agendado compromisso "${a.titulo}" para aluno ${(s==null?void 0:s.nome)||"N/A"} em ${a.data} às ${a.horaInicio}.`}),a}updateAppointment(e,t,a){const s=this.appointments.findIndex(P=>P.id===e);if(s===-1)throw new Error("Compromisso não encontrado.");const n=this.appointments[s],z=n.status,$=t.status!==void 0?t.status:n.status;this.appointments[s]={...n,...t},this.saveAppointments(),this.pushToCloud("appointments","upsert",this.appointments[s]);const o=this.students.find(P=>P.id===(t.alunoId||n.alunoId));if(o){let P=!1;z!=="falta_justificada"&&$==="falta_justificada"?(o.saldoReposicoes=(o.saldoReposicoes||0)+1,this.saveStudents(),P=!0,Q.log({tela:"Agenda",acao:"Crédito de Remarcação Automático (+1)",usuarioNome:a,detalhes:`Status da aula "${n.titulo}" alterado para Falta Justificada. +1 crédito gerado para "${o.nome}". Saldo atual: ${o.saldoReposicoes}.`})):z==="falta_justificada"&&$!=="falta_justificada"&&(o.saldoReposicoes=Math.max(0,(o.saldoReposicoes||0)-1),this.saveStudents(),P=!0,Q.log({tela:"Agenda",acao:"Estorno de Crédito de Remarcação (-1)",usuarioNome:a,detalhes:`Falta justificada na aula "${n.titulo}" alterada para "${$}". 1 crédito estornado de "${o.nome}". Saldo atual: ${o.saldoReposicoes}.`})),(t.tipoAula||n.tipoAula)==="reposicao"&&(z!=="cancelado"&&$==="cancelado"?(o.saldoReposicoes=(o.saldoReposicoes||0)+1,this.saveStudents(),P=!0,Q.log({tela:"Agenda",acao:"Estorno por Cancelamento de Reposição (+1)",usuarioNome:a,detalhes:`Reposição cancelada para "${o.nome}". 1 crédito devolvido ao saldo. Saldo atual: ${o.saldoReposicoes}.`})):z==="cancelado"&&$==="agendado"&&(o.saldoReposicoes=Math.max(0,(o.saldoReposicoes||0)-1),this.saveStudents(),P=!0,Q.log({tela:"Agenda",acao:"Consumo por Reativação de Reposição (-1)",usuarioNome:a,detalhes:`Reposição reativada para "${o.nome}". 1 crédito consumido. Saldo atual: ${o.saldoReposicoes}.`}))),P&&this.pushToCloud("students","upsert",o)}return Q.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:a,detalhes:`Compromisso "${n.titulo}" atualizado (status: ${this.appointments[s].status}).`}),this.appointments[s]}deleteAppointment(e,t){const a=this.appointments.find(s=>s.id===e);if(a){if(a.tipoAula==="reposicao"&&a.status!=="concluido"){const s=this.students.find(n=>n.id===a.alunoId);s&&(s.saldoReposicoes=(s.saldoReposicoes||0)+1,this.saveStudents(),this.pushToCloud("students","upsert",s),Q.log({tela:"Agenda",acao:"Estorno Automático de Crédito (+1)",usuarioNome:t,detalhes:`Aula de reposição excluída para "${s.nome}". 1 crédito estornado automaticamente ao saldo. Saldo atual: ${s.saldoReposicoes}.`}))}this.appointments=this.appointments.filter(s=>s.id!==e),this.saveAppointments(),this.pushToCloud("appointments","delete",{id:e}),Q.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:t,detalhes:`Compromisso "${a.titulo}" removido da agenda.`})}}marcarPresenca(e,t){const a=this.updateAppointment(e,{status:"concluido"},t),s=this.students.find(n=>n.id===a.alunoId);return Q.log({tela:"Agenda",acao:"Presença Confirmada",usuarioNome:t,detalhes:`Presença confirmada para o aluno "${(s==null?void 0:s.nome)||"N/A"}" na aula "${a.titulo}".`}),a}registrarFalta(e,t,a,s){const n=t?"falta_justificada":"falta_injustificada",z=this.updateAppointment(e,{status:n,justificativaFalta:(a==null?void 0:a.trim())||void 0},s),$=this.students.find(P=>P.id===z.alunoId),o=($==null?void 0:$.saldoReposicoes)||0;return{appointment:z,saldoReposicoes:o}}agendarReposicao(e,t,a){const s=this.students.find(z=>z.id===e.alunoId);if(!s||typeof s.saldoReposicoes!="number"||s.saldoReposicoes<=0)throw new Error(`O aluno "${(s==null?void 0:s.nome)||"selecionado"}" não possui créditos de remarcação disponíveis para agendar reposição.`);const n=this.addAppointment({...e,tipoAula:"reposicao",aulaOriginalId:t,status:"agendado"},a);if(t){const z=this.appointments.findIndex($=>$.id===t);z!==-1&&(this.appointments[z].aulaReposicaoId=n.id,this.saveAppointments())}return s.saldoReposicoes-=1,this.saveStudents(),Q.log({tela:"Agenda",acao:"Aula de Reposição Agendada (-1 Crédito)",usuarioNome:a,detalhes:`Reposição agendada para "${s.nome}". 1 crédito abatido automaticamente. Saldo restante: ${s.saldoReposicoes}.`}),n}generateAppointmentsFromPlan(e,t,a,s,n,z){const $=this.students.find(M=>M.id===e),o=this.plans.find(M=>M.id===t);if(!$||!o)return[];const P=[];if((o.modulos||[]).forEach(M=>{(M.aulas||[]).forEach(D=>{P.push({moduloId:M.id,moduloTitulo:M.titulo,aulaTitulo:D.titulo,aulaId:D.id})})}),P.length===0)return[];const d=[];let x=new Date(a+"T12:00:00");P.forEach((M,D)=>{const b=v=>v.toString().padStart(2,"0"),w=`${x.getFullYear()}-${b(x.getMonth()+1)}-${b(x.getDate())}`,u={id:`app_${Date.now()}_${D}_${Math.random().toString(36).substr(2,4)}`,alunoId:$.id,planoId:o.id,moduloId:M.moduloId,aulaId:M.aulaId,titulo:`${M.aulaTitulo}`,data:w,horaInicio:s,horaFim:n,status:"agendado",tipoAula:"regular",observacoes:`${o.nome} • ${M.moduloTitulo}`,criadoEm:new Date().toISOString()};this.appointments.push(u),d.push(u),x.setDate(x.getDate()+7)}),this.saveAppointments();for(const M of d)this.pushToCloud("appointments","upsert",M);return Q.log({tela:"Agenda",acao:"Geração de Aulas por Plano",usuarioNome:z,detalhes:`Geradas ${d.length} aulas regulares para "${$.nome}" com base no plano "${o.nome}".`}),d}getStudentAppointments(e){return this.appointments.filter(t=>t.alunoId===e).sort((t,a)=>{const s=`${t.data}T${t.horaInicio}`;return`${a.data}T${a.horaInicio}`.localeCompare(s)})}deleteStudentAppointments(e,t){const a=this.students.find($=>$.id===e),s=a?a.nome:"Aluno",z=this.appointments.filter($=>$.alunoId===e).length;return this.appointments=this.appointments.filter($=>$.alunoId!==e),this.saveAppointments(),this.pushToCloud("appointments","delete_by_student",{studentId:e}),Q.log({tela:"Cadastro de Alunos",acao:"Exclusão de Agendamentos",usuarioNome:t,detalhes:z>0?`Todos os ${z} agendamento(s) do aluno "${s}" foram excluídos do sistema.`:`Tentativa de exclusão de agendamentos para o aluno "${s}" (nenhum agendamento ativo encontrado).`}),z}getPayments(){const e=this.getTodayDateString();let t=!1;return this.payments.forEach(a=>{if(a.status!=="pago"){const s=a.dataVencimento<e?"atrasado":"pendente";a.status!==s&&(a.status=s,t=!0)}}),t&&this.savePayments(),this.dedupeById(this.payments).sort((a,s)=>s.dataVencimento.localeCompare(a.dataVencimento))}getStudentPayments(e){return this.getPayments().filter(t=>t.alunoId===e)}isStudentOverdue(e){const t=this.getTodayDateString();return this.payments.some(a=>a.alunoId===e&&(a.status==="atrasado"||a.status==="pendente"&&a.dataVencimento<t))}addPayment(e,t){const a=this.getTodayDateString();let s=e.status;s==="pendente"&&e.dataVencimento<a&&(s="atrasado");const n={...e,status:s,id:`pag_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,criadoEm:new Date().toISOString()};this.payments.push(n),this.savePayments(),this.pushToCloud("payments","upsert",n);const z=this.students.find($=>$.id===n.alunoId);return Q.log({tela:"Financeiro",acao:"Cadastro de Pagamento/Mensalidade",usuarioNome:t,detalhes:`Lançamento "${n.descricao}" (R$ ${n.valor.toFixed(2)}) cadastrado para o aluno "${(z==null?void 0:z.nome)||"N/A"}" com vencimento em ${n.dataVencimento}.`}),n}darBaixaPayment(e,t,a,s,n){const z=this.payments.findIndex(d=>d.id===e);if(z===-1)throw new Error("Lançamento financeiro não encontrado");const $=this.payments[z],o=$.status;$.status="pago",$.dataPagamento=t,$.formaPagamento=a,n!==void 0&&($.observacoes=n.trim()?n.trim():$.observacoes),this.savePayments(),this.pushToCloud("payments","upsert",$);const P=this.students.find(d=>d.id===$.alunoId);return Q.log({tela:"Financeiro",acao:"Baixa de Mensalidade",usuarioNome:s,detalhes:`Baixa efetuada para "${$.descricao}" de "${(P==null?void 0:P.nome)||"N/A"}". Valor R$ ${$.valor.toFixed(2)} recebido via ${a.toUpperCase()} em ${t} (Status anterior: ${o}).`}),$}updatePayment(e,t,a){const s=this.payments.findIndex(d=>d.id===e);if(s===-1)throw new Error("Lançamento financeiro não encontrado");const n=this.getTodayDateString();let z=t.status||this.payments[s].status;const $=t.dataVencimento||this.payments[s].dataVencimento;z!=="pago"&&(z=$<n?"atrasado":"pendente"),this.payments[s]={...this.payments[s],...t,status:z},this.savePayments(),this.pushToCloud("payments","upsert",this.payments[s]);const o=this.payments[s],P=this.students.find(d=>d.id===o.alunoId);return Q.log({tela:"Financeiro",acao:"Alteração de Lançamento",usuarioNome:a,detalhes:`Lançamento financeiro "${o.descricao}" do aluno "${(P==null?void 0:P.nome)||"N/A"}" atualizado.`}),this.payments[s]}deletePayment(e,t){const a=this.payments.find(n=>n.id===e);if(!a)return;this.payments=this.payments.filter(n=>n.id!==e),this.savePayments(),this.pushToCloud("payments","delete",{id:e});const s=this.students.find(n=>n.id===a.alunoId);Q.log({tela:"Financeiro",acao:"Exclusão de Lançamento",usuarioNome:t,detalhes:`Lançamento "${a.descricao}" no valor de R$ ${a.valor.toFixed(2)} do aluno "${(s==null?void 0:s.nome)||"N/A"}" foi excluído.`})}gerarMensalidadesMes(e,t,a){const s=x=>x.toString().padStart(2,"0"),n=`${e}-${s(t)}`,$=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t-1]||n,o=this.students.filter(x=>x.status==="ativo");let P=0,d=0;return o.forEach(x=>{if(this.payments.some(I=>I.alunoId===x.id&&(I.mesReferencia===n||I.dataVencimento.startsWith(n)))){d++;return}const D=x.diaVencimento||10,b=new Date(e,t,0).getDate(),w=Math.min(D,b),u=`${e}-${s(t)}-${s(w)}`,v=typeof x.valorMensalidade=="number"&&x.valorMensalidade>0?x.valorMensalidade:280;this.addPayment({alunoId:x.id,descricao:`Mensalidade ${$}/${e}`,mesReferencia:n,valor:v,dataVencimento:u,status:"pendente",observacoes:`Gerado automaticamente para o plano ${x.moduloAtual||x.instrumentoPrincipal||"Música"}`},a),P++}),Q.log({tela:"Financeiro",acao:"Geração de Mensalidades em Lote",usuarioNome:a,detalhes:`Geração em lote para ${$}/${e}: ${P} mensalidade(s) criada(s) e ${d} já existente(s) pulada(s).`}),{criadas:P,puladas:d}}getSettings(){return{...this.settings}}updateSettings(e,t){return this.settings={...this.settings,...e},this.saveSettings(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("app-settings-updated",{detail:this.getSettings()})),Q.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:t,detalhes:`Parâmetros do sistema atualizados (Menu: ${this.settings.nomeMenu||"Padrão"}, Logo: ${this.settings.logotipoCustomizado?"Personalizado":"Padrão"}).`}),this.settings}}const L=new ut,Se={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},home:{acesso:!0},financeiro:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},relatorios:{acesso:!0,gerar:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function Fe(g){var s,n,z,$,o,P,d,x,M,D,b,w,u,v,I,C,f,m,k,l,y,p,i,r,E,h,c,T,R,j,U,A,B,_,F,V;if(!g)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planosPagamento:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},financeiro:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},relatorios:{acesso:!1,gerar:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(g.papel==="admin")return JSON.parse(JSON.stringify(Se.admin));const e=Se[g.papel]||Se.professor,t=g.permissoes;if(!t)return JSON.parse(JSON.stringify(e));const a=G=>typeof G=="boolean";return{alunos:{acesso:a(t.alunos)?t.alunos:((s=t.alunos)==null?void 0:s.acesso)??e.alunos.acesso,cadastrar:a(t.alunos)?t.alunos:((n=t.alunos)==null?void 0:n.cadastrar)??e.alunos.cadastrar,alterar:a(t.alunos)?t.alunos:((z=t.alunos)==null?void 0:z.alterar)??e.alunos.alterar,excluir:a(t.alunos)?!1:(($=t.alunos)==null?void 0:$.excluir)??e.alunos.excluir},agenda:{acesso:a(t.agenda)?t.agenda:((o=t.agenda)==null?void 0:o.acesso)??e.agenda.acesso,cadastrar:a(t.agenda)?t.agenda:((P=t.agenda)==null?void 0:P.cadastrar)??e.agenda.cadastrar,alterar:a(t.agenda)?t.agenda:((d=t.agenda)==null?void 0:d.alterar)??e.agenda.alterar,excluir:a(t.agenda)?!1:((x=t.agenda)==null?void 0:x.excluir)??e.agenda.excluir},planos:{acesso:a(t.planos)?t.planos:((M=t.planos)==null?void 0:M.acesso)??e.planos.acesso,cadastrar:a(t.planos)?t.planos:((D=t.planos)==null?void 0:D.cadastrar)??e.planos.cadastrar,alterar:a(t.planos)?t.planos:((b=t.planos)==null?void 0:b.alterar)??e.planos.alterar,excluir:a(t.planos)?!1:((w=t.planos)==null?void 0:w.excluir)??e.planos.excluir},planosPagamento:{acesso:a(t.planosPagamento)?t.planosPagamento:((u=t.planosPagamento)==null?void 0:u.acesso)??((v=e.planosPagamento)==null?void 0:v.acesso)??!1,cadastrar:a(t.planosPagamento)?t.planosPagamento:((I=t.planosPagamento)==null?void 0:I.cadastrar)??((C=e.planosPagamento)==null?void 0:C.cadastrar)??!1,alterar:a(t.planosPagamento)?t.planosPagamento:((f=t.planosPagamento)==null?void 0:f.alterar)??((m=e.planosPagamento)==null?void 0:m.alterar)??!1,excluir:a(t.planosPagamento)?!1:((k=t.planosPagamento)==null?void 0:k.excluir)??((l=e.planosPagamento)==null?void 0:l.excluir)??!1},home:{acesso:a(t.home)?t.home:((y=t.home)==null?void 0:y.acesso)??e.home.acesso},financeiro:{acesso:a(t.financeiro)?t.financeiro:((p=t.financeiro)==null?void 0:p.acesso)??((i=e.financeiro)==null?void 0:i.acesso)??!1,cadastrar:a(t.financeiro)?t.financeiro:((r=t.financeiro)==null?void 0:r.cadastrar)??((E=e.financeiro)==null?void 0:E.cadastrar)??!1,alterar:a(t.financeiro)?t.financeiro:((h=t.financeiro)==null?void 0:h.alterar)??((c=e.financeiro)==null?void 0:c.alterar)??!1,excluir:a(t.financeiro)?!1:((T=t.financeiro)==null?void 0:T.excluir)??((R=e.financeiro)==null?void 0:R.excluir)??!1},relatorios:{acesso:a(t.relatorios)?t.relatorios:((j=t.relatorios)==null?void 0:j.acesso)??((U=e.relatorios)==null?void 0:U.acesso)??!0,gerar:a(t.relatorios)?t.relatorios:((A=t.relatorios)==null?void 0:A.gerar)??((B=e.relatorios)==null?void 0:B.gerar)??!0},auditoria:{acesso:a(t.auditoria)?t.auditoria:((_=t.auditoria)==null?void 0:_.acesso)??e.auditoria.acesso},configuracoes:{acesso:a(t.configuracoes)?t.configuracoes:((F=t.configuracoes)==null?void 0:F.acesso)??e.configuracoes.acesso,alterar:a(t.configuracoes)?t.configuracoes:((V=t.configuracoes)==null?void 0:V.alterar)??e.configuracoes.alterar}}}function be(g,e){var s;if(!g)return!1;if(e==="login")return!0;if(e==="user")return g.papel==="admin";if(g.papel==="admin"||g.isSistema)return!0;if(e==="planos-pagamento")return!!((s=Fe(g).planosPagamento)!=null&&s.acesso);const a=Fe(g)[e];return a&&typeof a=="object"&&"acesso"in a?!!a.acesso:!1}function de(g,e,t){if(!g)return!1;if(g.papel==="admin")return!0;const s=Fe(g)[e];return s?!!s[t]:!1}const je="acusticamente_active_session";class mt{constructor(){fe(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const e=localStorage.getItem(je);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const e=L.getUserById(this.currentUser.id);e&&(this.currentUser=e,localStorage.setItem(je,JSON.stringify(e)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(e,t){const s=L.getUsers().find(n=>n.login===e.trim());return s?s.senha!==t.trim()?(Q.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Senha incorreta informada para o usuário "${s.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=s,localStorage.setItem(je,JSON.stringify(s)),Q.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:s.id,usuarioLogin:s.login,usuarioNome:s.nome,detalhes:`Usuário "${s.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:s}):(Q.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:e,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${e}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&Q.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(je),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const ie=new mt;function ft(g=40){return`
    <svg width="${g}" height="${g}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="acusticamente-logo-svg">
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
  `}function ye(g,e=40){return g&&g.trim()!==""?`<img src="${g}" alt="Logotipo" class="brand-logo-custom" style="width: ${e}px; height: ${e}px; object-fit: contain; border-radius: 6px; display: block;" />`:ft(e)}function N(g,e="success"){const t=document.getElementById("toast-container");if(!t)return;const a=document.createElement("div");a.className=`toast toast-${e}`,a.innerHTML=`
    <span class="toast-icon">${e==="success"?"✓":e==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${g}</span>
  `,t.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 200ms ease",setTimeout(()=>a.remove(),200)},3500)}function he(g){const e=document.getElementById("modal-container");if(!e)return;e.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-card ${g.modalClass||""}">
        <div class="modal-header">
          <h3>${g.title}</h3>
          <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body" id="active-modal-body">
          ${g.bodyHtml}
        </div>
        <div class="modal-footer">
          ${g.leftButton?`<button type="button" class="btn ${g.leftButton.btnClass||"btn-secondary"}" id="${g.leftButton.id||"modal-left-btn"}" ${g.leftButton.disabled?"disabled":""} ${g.leftButton.title?`title="${g.leftButton.title}"`:""} style="margin-right: auto; ${g.leftButton.disabled?"opacity: 0.5; cursor: not-allowed;":""}">${g.leftButton.text}</button>`:""}
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${g.cancelText||"Cancelar"}</button>
          ${g.confirmText?`<button type="button" class="btn ${g.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${g.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `,document.getElementById("active-modal-backdrop");const t=document.getElementById("modal-close-btn"),a=document.getElementById("modal-cancel-btn"),s=document.getElementById("modal-confirm-btn"),n=()=>{e.innerHTML="",g.onCancel&&g.onCancel()};if(t.onclick=n,a.onclick=n,g.leftButton&&!g.leftButton.disabled){const z=document.getElementById(g.leftButton.id||"modal-left-btn");z&&(z.onclick=$=>{$.preventDefault();const o=document.querySelector(".modal-card");g.leftButton.onClick(o)})}s&&g.onConfirm&&(s.onclick=async()=>{const z=document.querySelector(".modal-card");await g.onConfirm(z)!==!1&&(e.innerHTML="")})}function Ne(){const g=document.getElementById("modal-container");g&&(g.innerHTML="")}function $e(g){var a,s,n;const e=document.createElement("div");e.className="modal-backdrop",e.id="confirm-action-backdrop",e.style.zIndex="10001",e.innerHTML=`
    <div class="modal-card" style="max-width: 480px; animation: scaleUp 0.18s ease; box-shadow: var(--shadow-lg);">
      <div class="modal-header">
        <h3>${g.title||"Confirmar Exclusão"}</h3>
        <button type="button" class="modal-close" id="confirm-action-close-btn">&times;</button>
      </div>
      <div class="modal-body">
        <div style="display: flex; gap: 16px; align-items: flex-start; padding: 6px 0;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; border: 1px solid rgba(239, 68, 68, 0.3);">
            ⚠️
          </div>
          <div style="flex: 1;">
            <div style="font-size: 0.92rem; color: var(--text-white); font-weight: 500; line-height: 1.5;">
              ${g.message}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
              Esta operação não poderá ser desfeita.
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="confirm-action-cancel-btn">${g.cancelText||"Cancelar"}</button>
        <button type="button" class="btn ${g.confirmBtnClass||"btn-danger"}" id="confirm-action-confirm-btn">${g.confirmText||"Excluir Definitivamente"}</button>
      </div>
    </div>
  `,document.body.appendChild(e);const t=()=>{e.remove(),g.onCancel&&g.onCancel()};(a=e.querySelector("#confirm-action-close-btn"))==null||a.addEventListener("click",t),(s=e.querySelector("#confirm-action-cancel-btn"))==null||s.addEventListener("click",t),(n=e.querySelector("#confirm-action-confirm-btn"))==null||n.addEventListener("click",()=>{e.remove(),g.onConfirm()})}const q={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',financeiro:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',whatsapp:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',profile:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',relatorios:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',planoPagamento:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'};function Qe(g){return g.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function Oe(g){const e=g.replace(/\D/g,"").slice(0,11);return e.length<=10?e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d{1,4})$/,"$1-$2"):e.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{1,4})$/,"$1-$2")}function Xe(g){const e=g.replace(/\D/g,"").slice(0,14);return e.length>12?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5"):e.length>8?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4"):e.length>5?e.replace(/^(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3"):e.length>2?e.replace(/^(\d{2})(\d{1,3})$/,"$1.$2"):e}function Ke(g){const e=g.replace(/\D/g,"").slice(0,8);return e.length>5?e.replace(/^(\d{5})(\d{1,3})$/,"$1-$2"):e}function Ve(g){if(!g)return"";if(/^\d{4}-\d{2}-\d{2}/.test(g)){const[t,a,s]=g.split("-");return`${s.slice(0,2)}/${a}/${t}`}const e=g.replace(/\D/g,"").slice(0,8);return e.length>4?`${e.slice(0,2)}/${e.slice(2,4)}/${e.slice(4)}`:e.length>2?`${e.slice(0,2)}/${e.slice(2)}`:e}function nt(g){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)}function gt(g){const e=g.replace(/\D/g,"").slice(0,6);if(e.length<=4)return e;const t=e.slice(0,4);let a=e.slice(4,6);return parseInt(a,10)>12&&(a="12"),a.length===2&&a==="00"&&(a="01"),`${t}-${a}`}function vt(g){const e=g.replace(/\D/g,"").slice(0,2);if(!e)return"";const t=parseInt(e,10);return t>31?"31":t===0?"1":e}function Ze(g){const e=g.trim().toUpperCase();return e.startsWith("I")||e.startsWith("IS")||e.startsWith("ISE")||e.startsWith("ISEN")||e.startsWith("ISENT")||e==="ISENTO"?"ISENTO".slice(0,e.length):g.replace(/\D/g,"").slice(0,14)}function Ie(g){if(typeof g=="number")return g.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});const e=g.replace(/\D/g,"");return e?(parseInt(e,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}function Je(g){if(!g)return 0;const e=g.replace(/[^\d,-]/g,"").replace(",","."),t=parseFloat(e);return isNaN(t)?0:t}function me(g,e){g.addEventListener("input",()=>{g.value=e(g.value)})}const He="acusticamente_auth_remember",bt="acusticamente_manual_logout";function yt(g,e){const t=document.createElement("div");t.className="login-page";const a=L.getSettings(),s=a.nomeMenu||a.nomeFantasia||"Acusticamente";let n={username:"",password:"",remember:!1};try{const P=localStorage.getItem(He);P&&(n={...n,...JSON.parse(P)})}catch{n={username:"",password:"",remember:!1}}t.innerHTML=`
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
  `;const z=t.querySelector("#login-remember"),$=t.querySelector("#btn-back-to-site");$==null||$.addEventListener("click",()=>{e?e():window.location.hash="site"});const o=t.querySelector("#login-form");return o.onsubmit=P=>{var u;P.preventDefault();const d=t.querySelector("#login-username"),x=t.querySelector("#login-password"),M=d.value.trim(),D=x.value.trim(),b=z.checked,w=ie.login(M,D);w.success?(b?localStorage.setItem(He,JSON.stringify({username:M,password:D,remember:!0})):localStorage.removeItem(He),sessionStorage.removeItem(bt),N(`Bem-vindo, ${(u=w.user)==null?void 0:u.nome}!`,"success"),g()):N(w.message,"error")},t}const De=`
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`,Ue=`
  <svg class="instagram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;function ht(g){var M,D,b;const e=document.createElement("div");e.className="public-site-wrapper";const t=L.getSettings(),a=t.nomeMenu||"Acusticamente",s="Acusticamente - Escola de Música",n="(51) 98189-8802",z="51981898802",$="Av. Dorival Cândido Luz de Oliveira, 5564 - Santa Fe, Gravataí - RS, 94060-001",o="Segunda a Sexta · Aberto até 20:30",P="https://share.google/NtOxuUNfF6FGJ62tZ",d="https://www.instagram.com/acusticamente.rs",x=`https://wa.me/55${z}?text=${encodeURIComponent("Olá! Gostaria de informações sobre as aulas na Acusticamente.")}`;return e.innerHTML=`
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
            ${De}
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
            ${De}
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
            <a href="${d}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" title="Abrir perfil no Instagram">
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
              <a href="${P}" target="_blank" rel="noopener noreferrer" class="btn-location-maps" title="Abrir rota no Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span>Ver no Google Maps</span>
              </a>

              <a href="${x}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" title="Falar pelo WhatsApp">
                ${De}
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
          ${De}
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
              ${De}
              <span>Entrar em contato</span>
            </a>
            <a href="${d}" target="_blank" rel="noopener noreferrer" class="btn-site-instagram" style="display: inline-flex;" title="Instagram @acusticamente.rs">
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
  `,(M=e.querySelector("#btn-header-login"))==null||M.addEventListener("click",()=>{const w=ie.isAuthenticated();g(w?"home":"login")}),(D=e.querySelector("#btn-footer-login"))==null||D.addEventListener("click",()=>{const w=ie.isAuthenticated();g(w?"home":"login")}),(b=e.querySelector("#site-logo-link"))==null||b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e}function X(g,e,t,a){const s=t.column===e,n=s?t.direction==="asc"?"▲":"▼":"▲▼",z=(a==null?void 0:a.align)||"left",$=a!=null&&a.extraClass?` ${a.extraClass}`:"",o=a!=null&&a.extraStyle?` ${a.extraStyle}`:"",P=(a==null?void 0:a.title)||`Ordenar por ${g}`;return`
    <th class="sortable-th${$}" data-sort-key="${e}" title="${P}" style="cursor: pointer; user-select: none; text-align: ${z};${o}">
      <div style="display: inline-flex; align-items: center; gap: 6px; justify-content: ${z==="right"?"flex-end":z==="center"?"center":"flex-start"}; width: 100%;">
        <span>${g}</span>
        <span class="sort-arrow-indicator ${s?"active":"inactive"}" style="font-size: 0.65rem; line-height: 1; ${s?"color: var(--color-coral); opacity: 1; font-weight: 700;":"opacity: 0.35; color: inherit;"}">
          ${n}
        </span>
      </div>
    </th>
  `}function Ae(g,e,t){g.querySelectorAll(".sortable-th[data-sort-key]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const n=a.dataset.sortKey;n&&(e.column===n?e.direction=e.direction==="asc"?"desc":"asc":(e.column=n,e.direction="asc"),t({...e}))})})}function Ee(g,e,t){if(!e.column||!t[e.column])return g;const a=t[e.column],s=e.direction==="asc"?1:-1;return[...g].sort((n,z)=>{let $=a(n),o=a(z);return $==null&&o==null?0:$==null?1*s:o==null?-1*s:typeof $=="string"&&typeof o=="string"?$.localeCompare(o,"pt-BR",{numeric:!0,sensitivity:"base"})*s:typeof $=="number"&&typeof o=="number"?($-o)*s:typeof $=="boolean"&&typeof o=="boolean"?($===o?0:$?1:-1)*s:$<o?-1*s:$>o?1*s:0})}const xt=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];function et(g){if(!g)return null;const e=g.trim();if(!e)return null;if(/^\d{1,2}\/\d{1,2}\/\d{4}/.test(e)){const[t,a,s]=e.split("/"),n=parseInt(t,10),z=parseInt(a,10),$=parseInt(s,10);if(!isNaN(n)&&!isNaN(z)&&!isNaN($)&&z>=1&&z<=12&&n>=1&&n<=31)return{day:n,month:z,year:$}}if(/^\d{4}-\d{1,2}-\d{1,2}/.test(e)){const t=e.split("T")[0].split("-"),a=parseInt(t[0],10),s=parseInt(t[1],10),n=parseInt(t[2],10);if(!isNaN(n)&&!isNaN(s)&&!isNaN(a)&&s>=1&&s<=12&&n>=1&&n<=31)return{day:n,month:s,year:a}}return null}function $t(g,e){const t=g.phone.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=g.nome.trim().split(" ")[0]||g.nome;let n="";g.tipo==="Aluno"?n=(e==null?void 0:e.msgAniversarioAluno)||"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Que seu novo ciclo seja repleto de realizações, saúde, alegria e muita música! Parabéns pelo seu dia! 🎶✨":g.tipo==="Professor"?n=(e==null?void 0:e.msgAniversarioProfessor)||"Olá, Prof. {nome}! 🎂🎉 Toda a equipe da Acusticamente te deseja um Feliz Aniversário! Muito obrigado por sua dedicação musical e talento. Que você tenha um ano repleto de sucesso e realizações! 🎶✨":n=(e==null?void 0:e.msgAniversarioAdmin)||"Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Muito sucesso, liderança, saúde e grandes conquistas neste novo ciclo! Parabéns! 🎶✨";const z=n.replace(/{nome}/g,s);return`https://wa.me/${a}?text=${encodeURIComponent(z)}`}function tt(g){const e=document.createElement("div"),t=ie.getCurrentUser(),a=L.getStudents(),s=L.getUsers(),n=L.getPlans(),z=L.getAppointments(),$=L.getSettings(),o=L.getTodayDateString(),P=z.filter(b=>b.data===o),d=a.filter(b=>b.status==="ativo").length,x=P.find(b=>b.status==="agendado");let M={column:"horario",direction:"asc"};function D(){var l,y;const b=new Date,w=b.getDate(),u=b.getMonth()+1,v=b.getFullYear(),I=xt[b.getMonth()];$!=null&&$.nomeEscola;const C=[],f=new Set;a.forEach(p=>{if(f.has(p.id))return;const i=et(p.dataNascimento);i&&i.month===u&&(f.add(p.id),C.push({id:p.id,nome:p.nome,tipo:"Aluno",day:i.day,month:i.month,year:i.year,age:v-i.year,phone:p.telefone||p.responsavelTelefone||"",isToday:i.day===w}))}),s.forEach(p=>{if(f.has(p.id))return;const i=et(p.dataNascimento);i&&i.month===u&&(f.add(p.id),C.push({id:p.id,nome:p.nome,tipo:p.papel==="admin"?"ADM":p.papel==="professor"?"Professor":"ADM",day:i.day,month:i.month,year:i.year,age:v-i.year,phone:"",isToday:i.day===w}))}),C.sort((p,i)=>p.day-i.day);const m=C.filter(p=>p.isToday).length,k=Ee(P,M,{horario:p=>p.horaInicio,aluno:p=>{const i=a.find(r=>r.id===p.alunoId);return(i==null?void 0:i.nome)||""},plano:p=>{const i=n.find(r=>r.id===p.planoId);return(i==null?void 0:i.nome)||""},status:p=>p.status});e.innerHTML=`
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
            <span class="metric-value">${P.length}</span>
            <span class="metric-label">Aulas hoje</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-icon-box">
            ${q.alunos}
          </div>
          <div class="metric-data">
            <span class="metric-value">${d}</span>
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
              Aniversariantes do Mês (${I})
            </h3>
            <span class="badge ${C.length>0?"badge-info":"badge-secondary"}" style="font-size: 0.7rem;">
              ${C.length} ${C.length===1?"aniversariante":"aniversariantes"}
            </span>
          </div>

          ${m>0?`<span class="badge badge-coral" style="font-size: 0.72rem;">🎉 ${m} comemorando hoje!</span>`:""}
        </div>

        <div style="padding: 12px 18px;">
          ${C.length===0?`<div style="padding: 12px 0; text-align: center; color: var(--text-muted); font-size: 0.82rem;">
                   Nenhum aniversariante registrado em ${I}.
                 </div>`:`<div style="display: flex; flex-direction: column; gap: 8px; max-height: 260px; overflow-y: auto;">
                   ${C.map(p=>{const i=p.phone?$t(p,$):"",r=p.isToday;return`
                         <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; background: ${r?"rgba(234, 67, 53, 0.08)":"rgba(255, 255, 255, 0.02)"}; border: 1px solid ${r?"rgba(234, 67, 53, 0.28)":"var(--border-subtle)"}; border-radius: var(--radius-md); flex-wrap: wrap;">
                           
                           <!-- Lado Esquerdo: Dia, Nome, Idade e Tipo -->
                           <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                             <div style="min-width: 44px; height: 36px; padding: 0 4px; border-radius: var(--radius-sm); background: ${r?"var(--color-coral)":"rgba(255, 255, 255, 0.04)"}; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid ${r?"transparent":"rgba(255, 255, 255, 0.06)"};">
                               <span style="font-size: 0.58rem; text-transform: uppercase; font-weight: 700; color: ${r?"#ffffff":"var(--text-muted)"}; line-height: 1;">DIA</span>
                               <span style="font-size: 0.92rem; font-weight: 700; color: ${r?"#ffffff":"var(--text-white)"}; line-height: 1.1;">${String(p.day).padStart(2,"0")}</span>
                             </div>

                             <div style="display: flex; flex-direction: column; min-width: 0;">
                               <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                                 <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-white); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                   ${p.nome}
                                 </span>
                                 ${r?'<span class="badge badge-coral" style="font-size: 0.64rem; padding: 2px 5px;">Hoje! 🎂</span>':""}
                                 <span class="badge ${p.tipo==="Aluno"?"badge-info":p.tipo==="Professor"?"badge-warning":"badge-coral"}" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">
                                   ${p.tipo}
                                 </span>
                               </div>
                               <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 2px;">
                                 ${p.age>0?`Completa <strong style="color: var(--text-white);">${p.age} anos</strong>`:""}
                                 ${p.phone?`<span style="color: var(--text-muted); margin-left: 6px;">• ${p.phone}</span>`:""}
                               </div>
                             </div>
                           </div>

                           <!-- Lado Direito: Botão WhatsApp de Parabéns (Disponível apenas no dia) -->
                           <div>
                             ${p.phone?p.isToday?`<a 
                                        href="${i}" 
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
                                        title="O envio de parabéns fica liberado apenas no dia do aniversário (${String(p.day).padStart(2,"0")}/${String(p.month).padStart(2,"0")})"
                                        style="opacity: 0.45; cursor: not-allowed; display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.04); color: var(--text-muted); border: 1px solid var(--border-subtle); padding: 5px 12px; font-size: 0.76rem; border-radius: var(--radius-sm); white-space: nowrap;"
                                      >
                                        ${q.whatsapp} Disponível no dia ${String(p.day).padStart(2,"0")}
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
          <h3 class="panel-card-title">Aulas de Hoje (${k.length})</h3>
          <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
            Ver Agenda Completa
          </button>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${X("Horário","horario",M,{extraStyle:"min-width: 100px;"})}
                ${X("Aluno","aluno",M)}
                ${X("Plano de Ensino","plano",M,{extraClass:"col-hide-md"})}
                ${X("Status","status",M,{extraClass:"col-hide-sm"})}
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody id="today-classes-tbody">
              ${k.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':k.map(p=>{const i=a.find(T=>T.id===p.alunoId),r=n.find(T=>T.id===p.planoId),E=p.status==="concluido",h=p.status==="agendado";let c='<span class="badge badge-warning">⏳ Agendado</span>';return E?c='<span class="badge badge-success">✓ Concluído</span>':p.status==="falta_justificada"?c='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>':p.status==="falta_injustificada"?c='<span class="badge badge-danger">✕ Falta Injustificada</span>':p.status==="cancelado"&&(c='<span class="badge badge-secondary">🚫 Cancelado</span>'),`
                          <tr data-app-id="${p.id}">
                            <td style="white-space: nowrap;">
                              <strong style="color: var(--text-white); font-size: 0.84rem;">${p.horaInicio} - ${p.horaFim}</strong>
                              ${p.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>':""}
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
                              <span style="color: var(--text-secondary); font-size: 0.82rem;">${(r==null?void 0:r.nome)||"Plano Personalizado"}</span>
                            </td>
                            <td class="col-hide-sm" style="white-space: nowrap;">
                              ${c}
                            </td>
                            <td style="text-align: right; white-space: nowrap;">
                              ${h?`<button class="btn btn-secondary btn-complete-class" data-id="${p.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                       ✓ Concluir
                                     </button>`:`<span style="font-size: 0.76rem; color: var(--text-muted);">${E?"Finalizada":"Registrada"}</span>`}
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,Ae(e,M,p=>{M=p,D()}),(l=e.querySelector("#home-btn-new-appointment"))==null||l.addEventListener("click",()=>{g("agenda")}),(y=e.querySelector("#home-btn-view-all-agenda"))==null||y.addEventListener("click",()=>{g("agenda")}),e.querySelectorAll(".btn-complete-class").forEach(p=>{p.addEventListener("click",i=>{const r=i.currentTarget.dataset.id;r&&(L.updateAppointment(r,{status:"concluido"},(t==null?void 0:t.nome)||"Administrador"),N("Aula concluída com sucesso!","success"),g("home"))})})}return D(),e}function wt(g){const e=document.createElement("div"),t=ie.getCurrentUser();let a=new Date;function s(){var f,m,k,l;const $=L.getStudents();L.getPlans();const o=L.getAppointments(),P=a.getFullYear(),d=a.getMonth(),x=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],M=new Date(P,d,1).getDay(),D=new Date(P,d+1,0).getDate(),b=new Date(P,d,0).getDate(),w=new Date,u=w.getFullYear()===P&&w.getMonth()===d,v=[];for(let y=M;y>0;y--){const p=b-y+1;v.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${p}</span>
          </div>
        </div>
      `)}for(let y=1;y<=D;y++){const p=R=>R.toString().padStart(2,"0"),i=`${P}-${p(d+1)}-${p(y)}`,r=u&&w.getDate()===y,E=o.filter(R=>R.data===i),h=E.slice(0,3).map(R=>{const j=$.find(_=>_.id===R.alunoId),U=j?j.nome.split(" ")[0]:"Aula";let A="",B="";return R.status==="concluido"?(A="concluido",B="✓ "):R.status==="falta_justificada"?(A="falta-justificada",B="⚠️ "):R.status==="falta_injustificada"?(A="falta-injustificada",B="✕ "):R.tipoAula==="reposicao"&&(A="reposicao",B="🔄 "),`
            <div class="calendar-appointment-badge ${A}" 
                 data-app-id="${R.id}" 
                 title="${R.horaInicio} - ${(j==null?void 0:j.nome)||"Aluno"} (${R.status}${R.tipoAula==="reposicao"?" - Reposição":""})">
              <strong>${B}${R.horaInicio}</strong> ${U}
            </div>
          `}).join(""),c=E.length>3?E.length-3:0,T=c>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${c} mais</div>`:"";v.push(`
        <div class="calendar-day-cell ${r?"today":""}" data-date="${i}">
          <div class="day-cell-header">
            <span class="day-number">${y}</span>
            ${E.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${E.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${h}
            ${T}
          </div>
        </div>
      `)}const I=v.length,C=I>35?42-I:35-I;for(let y=1;y<=C;y++)v.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${y}</span>
          </div>
        </div>
      `);e.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${x[d]} de ${P}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${u?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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

          ${v.join("")}
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
    `,(f=e.querySelector("#agenda-btn-prev"))==null||f.addEventListener("click",()=>{a.setMonth(a.getMonth()-1),s()}),(m=e.querySelector("#agenda-btn-next"))==null||m.addEventListener("click",()=>{a.setMonth(a.getMonth()+1),s()}),(k=e.querySelector("#agenda-btn-today"))==null||k.addEventListener("click",()=>{a=new Date,s()}),(l=e.querySelector("#agenda-btn-new-app"))==null||l.addEventListener("click",()=>{z()}),e.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(y=>{y.addEventListener("click",p=>{const i=y.dataset.date;i&&n(i)})}),e.querySelectorAll(".calendar-appointment-badge").forEach(y=>{y.addEventListener("click",p=>{p.stopPropagation();const i=y.dataset.appId,r=o.find(E=>E.id===i);r&&n(r.data)})})}function n($){const o=L.getStudents(),P=L.getPlans(),d=L.getAppointments().filter(v=>v.data===$),[x,M,D]=$.split("-"),b=`${D}/${M}/${x}`,w=d.length===0?`<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`:`
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${d.map(v=>{const I=o.find(E=>E.id===v.alunoId),C=P.find(E=>E.id===v.planoId),f=v.status==="concluido",m=v.status==="falta_justificada",k=v.status==="falta_injustificada",l=v.status==="cancelado",y=v.status==="agendado",p=v.tipoAula==="reposicao";let i="var(--color-coral)",r='<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>';return f?(i="var(--status-success)",r='<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>'):m?(i="#f59e0b",r='<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>'):k?(i="var(--status-danger)",r='<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>'):l&&(i="var(--border-subtle)",r='<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>'),`
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${i};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${v.horaInicio} - ${v.horaFim}</strong>
                        ${r}
                        ${p?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>':""}
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${v.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${(I==null?void 0:I.nome)||"Não vinculado"}</strong>
                        ${I!=null&&I.instrumentoPrincipal?` &bull; <span style="color: #60a5fa;">${I.instrumentoPrincipal}</span>`:""}
                        ${C?` &bull; Plano: <span style="color: #ff9187;">${C.nome}</span>`:""}
                      </div>

                      ${v.justificativaFalta?`<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${v.justificativaFalta}
                             </div>`:""}

                      ${v.aulaReposicaoId?`<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`:""}

                      ${v.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${v.observacoes}</div>`:""}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${de(t,"agenda","alterar")?`
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${v.id}" title="Editar Detalhes">
                              ${q.edit}
                            </button>
                          `:""}
                      ${de(t,"agenda","excluir")?`
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${v.id}" title="Excluir">
                              ${q.trash}
                            </button>
                          `:""}
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${de(t,"agenda","alterar")?`
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${y?`
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${v.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${v.id}" data-name="${(I==null?void 0:I.nome)||""}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${v.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `:""}

                          ${m&&!v.aulaReposicaoId?`
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${v.id}" data-student-id="${v.alunoId}" data-title="${v.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `:""}
                        </div>
                      `:""}
                </div>
              `}).join("")}
        </div>
      `,u=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${d.length}</strong>
          </span>
          ${de(t,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${q.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${w}
      </div>
    `;he({title:`Aulas do Dia: ${b}`,bodyHtml:u,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var v;(v=document.getElementById("btn-modal-new-appointment"))==null||v.addEventListener("click",()=>{Ne(),z({defaultDate:$})}),document.querySelectorAll(".btn-mark-presence").forEach(I=>{I.addEventListener("click",C=>{const f=C.currentTarget.dataset.id;f&&(L.marcarPresenca(f,(t==null?void 0:t.nome)||"Administrador"),N("Presença confirmada e aula concluída!","success"),s(),n($))})}),document.querySelectorAll(".btn-mark-absence-just").forEach(I=>{I.addEventListener("click",C=>{const f=C.currentTarget.dataset.id,m=C.currentTarget.dataset.name;if(!f)return;const k=prompt(`Informe o motivo da falta justificada de ${m} (Ex: Atestado médico, Viagem em família):`);if(k===null)return;const l=L.registrarFalta(f,!0,k,(t==null?void 0:t.nome)||"Administrador");N(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${l.saldoReposicoes}).`,"success"),s(),n($)})}),document.querySelectorAll(".btn-mark-absence-injust").forEach(I=>{I.addEventListener("click",C=>{const f=C.currentTarget.dataset.id;f&&$e({title:"Falta Injustificada",message:"Deseja registrar falta sem aviso prévio / injustificada? <strong>Não será gerado crédito de reposição</strong> para o aluno.",confirmText:"Registrar Falta",confirmBtnClass:"btn-danger",onConfirm:()=>{L.registrarFalta(f,!1,void 0,(t==null?void 0:t.nome)||"Administrador"),N("Falta injustificada registrada.","info"),s(),n($)}})})}),document.querySelectorAll(".btn-schedule-reposicao").forEach(I=>{I.addEventListener("click",C=>{const f=C.currentTarget,m=f.dataset.id,k=f.dataset.studentId,l=f.dataset.title;Ne(),z({studentId:k,aulaOriginalId:m,tipoAula:"reposicao",titulo:l?`Reposição: ${l}`:"Aula de Reposição"})})}),document.querySelectorAll(".btn-edit-app-day").forEach(I=>{I.addEventListener("click",C=>{const f=C.currentTarget.dataset.id,m=L.getAppointments().find(k=>k.id===f);m&&(Ne(),z({existingApp:m}))})}),document.querySelectorAll(".btn-delete-app-day").forEach(I=>{I.addEventListener("click",C=>{const f=C.currentTarget.dataset.id,m=L.getAppointments().find(k=>k.id===f);m&&$e({title:"Excluir Compromisso",message:`Deseja realmente excluir o compromisso "<strong>${m.titulo}</strong>"?`,onConfirm:()=>{L.deleteAppointment(m.id,(t==null?void 0:t.nome)||"Administrador"),N("Compromisso removido.","info"),s(),n($)}})})})},50)}function z($){const o=L.getStudents(),P=L.getPlans(),d=$==null?void 0:$.existingApp,x=!!d,M=(d==null?void 0:d.alunoId)||($==null?void 0:$.studentId)||"",D=(d==null?void 0:d.data)||($==null?void 0:$.defaultDate)||L.getTodayDateString(),b=((d==null?void 0:d.tipoAula)||($==null?void 0:$.tipoAula))==="reposicao",w=o.map(C=>`<option value="${C.id}" ${M===C.id?"selected":""} data-planoid="${C.planoId||""}">${C.nome} (${C.instrumentoPrincipal||"Geral"})</option>`).join(""),u=P.map(C=>{const f=(C.modulos||[]).reduce((m,k)=>{var l;return m+(((l=k.aulas)==null?void 0:l.length)||0)},0);return`<option value="${C.id}" ${(d==null?void 0:d.planoId)===C.id?"selected":""} data-total-aulas="${f}">${C.nome} (${f} aulas)</option>`}).join("");let v=x||b?"manual":"plano";const I=`
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        ${!x&&!b?`
              <!-- Seletor de Modo de Agendamento -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px; display: flex; gap: 4px;">
                <button type="button" class="btn btn-sm ${v==="plano"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="plano" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  📚 Gerar pelo Plano Pedagógico
                </button>
                <button type="button" class="btn btn-sm ${v==="manual"?"btn-primary":"btn-secondary"} btn-app-mode" data-mode="manual" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;">
                  ✏️ Agendamento Manual
                </button>
              </div>
            `:""}

        <!-- PAINEL 1: GERAR PELO PLANO PEDAGÓGICO -->
        <div id="panel-app-plano" style="display: ${v==="plano"?"flex":"none"}; flex-direction: column; gap: 12px;">
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.78rem; color: #fca5a5;">
            💡 <strong>Geração Automática:</strong> As aulas serão agendadas semanalmente na agenda a partir da data de início, cobrindo todos os módulos do plano selecionado.
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-student">Aluno *</label>
            <select id="app-plan-student" class="form-select" required>
              <option value="">Selecione o Aluno...</option>
              ${w}
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-plan-select">Plano Pedagógico *</label>
            <select id="app-plan-select" class="form-select" required>
              <option value="">Selecione o Plano...</option>
              ${u}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan-date-start">Data da 1ª Aula *</label>
              <input type="date" id="app-plan-date-start" class="form-input" value="${D}" required />
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
        <div id="panel-app-manual" style="display: ${v==="manual"?"flex":"none"}; flex-direction: column; gap: 12px;">
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
            <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Introdução" value="${(d==null?void 0:d.titulo)||($==null?void 0:$.titulo)||""}" />
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-student">Aluno *</label>
              <select id="app-student" class="form-select">
                <option value="">Selecione...</option>
                ${w}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-plan">Plano Pedagógico</label>
              <select id="app-plan" class="form-select">
                <option value="">Sem plano fixo</option>
                ${u}
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
              <input type="date" id="app-date" class="form-input" value="${D}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-start">Início *</label>
              <input type="time" id="app-time-start" class="form-input" value="${(d==null?void 0:d.horaInicio)||"09:00"}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-time-end">Fim *</label>
              <input type="time" id="app-time-end" class="form-input" value="${(d==null?void 0:d.horaFim)||"10:00"}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="app-status">Status *</label>
              <select id="app-status" class="form-select">
                <option value="agendado" ${(d==null?void 0:d.status)==="agendado"?"selected":""}>⏳ Agendado</option>
                <option value="concluido" ${(d==null?void 0:d.status)==="concluido"?"selected":""}>✓ Presente</option>
                <option value="falta_justificada" ${(d==null?void 0:d.status)==="falta_justificada"?"selected":""}>⚠️ Falta Justificada (+1 Reposição)</option>
                <option value="falta_injustificada" ${(d==null?void 0:d.status)==="falta_injustificada"?"selected":""}>✕ Falta Injustificada</option>
                <option value="cancelado" ${(d==null?void 0:d.status)==="cancelado"?"selected":""}>🚫 Cancelado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;" id="box-justificativa">
              <label class="form-label" for="app-justificativa">Justificativa</label>
              <input type="text" id="app-justificativa" class="form-input" placeholder="Motivo da falta..." value="${(d==null?void 0:d.justificativaFalta)||""}" />
            </div>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-obs">Observações</label>
            <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Orientações e conteúdo...">${(d==null?void 0:d.observacoes)||""}</textarea>
          </div>
        </div>

        ${x?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${q.trash} Excluir Aula
                 </button>
               </div>`:""}
      </form>
    `;he({title:x?"Editar Aula":b?"🔄 Agendar Reposição":"Cadastrar Nova Aula",bodyHtml:I,confirmText:x?"Salvar":"Confirmar",onConfirm:()=>{const C=(t==null?void 0:t.nome)||"Administrador";if(v==="plano"&&!x){const T=document.getElementById("app-plan-student").value,R=document.getElementById("app-plan-select").value,j=document.getElementById("app-plan-date-start").value,U=document.getElementById("app-plan-time-start").value,A=document.getElementById("app-plan-time-end").value;if(!T)return N("Selecione o aluno.","error"),!1;if(!R)return N("Selecione o plano pedagógico.","error"),!1;if(!j||!U||!A)return N("Informe data de início e horários.","error"),!1;const B=L.generateAppointmentsFromPlan(T,R,j,U,A,C);return B.length===0?(N("O plano selecionado não possui aulas cadastradas em seus módulos.","info"),!1):(N(`Sucesso! ${B.length} aulas regulares foram geradas na agenda.`,"success"),s(),!0)}const f=document.getElementById("app-title").value.trim(),m=document.getElementById("app-student").value,k=document.getElementById("app-plan").value,l=document.getElementById("app-date").value,y=document.getElementById("app-time-start").value,p=document.getElementById("app-time-end").value,i=document.getElementById("app-status").value,r=document.getElementById("app-justificativa").value.trim(),E=document.getElementById("app-obs").value.trim(),h=document.querySelector('input[name="app-tipo-aula"]:checked'),c=(h==null?void 0:h.value)||"regular";if(!f||!m||!l||!y)return N("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;if(x&&d)L.updateAppointment(d.id,{titulo:f,alunoId:m,planoId:k||void 0,data:l,horaInicio:y,horaFim:p,status:i,tipoAula:c,justificativaFalta:r||void 0,observacoes:E},C),N("Aula atualizada com sucesso!","success");else if(c==="reposicao")try{L.agendarReposicao({titulo:f,alunoId:m,planoId:k||void 0,data:l,horaInicio:y,horaFim:p,status:i,justificativaFalta:r||void 0,observacoes:E},$==null?void 0:$.aulaOriginalId,C),N("Aula de reposição agendada (1 crédito abatido com sucesso)!","success")}catch(T){return N((T==null?void 0:T.message)||"Erro ao agendar reposição. Verifique o saldo do aluno.","error"),!1}else L.addAppointment({titulo:f,alunoId:m,planoId:k||void 0,data:l,horaInicio:y,horaFim:p,status:i,tipoAula:c,justificativaFalta:r||void 0,observacoes:E},C),N("Aula agendada com sucesso!","success");return s(),!0}}),setTimeout(()=>{var E;const C=document.querySelectorAll(".btn-app-mode"),f=document.getElementById("panel-app-plano"),m=document.getElementById("panel-app-manual");C.forEach(h=>{h.addEventListener("click",c=>{const T=c.currentTarget.dataset.mode;v=T,C.forEach(R=>{R.classList.remove("btn-primary"),R.classList.add("btn-secondary")}),c.currentTarget.classList.remove("btn-secondary"),c.currentTarget.classList.add("btn-primary"),f&&(f.style.display=T==="plano"?"flex":"none"),m&&(m.style.display=T==="manual"?"flex":"none")})});const k=document.getElementById("app-student"),l=document.getElementById("app-student-credits-info"),y=document.getElementById("app-student-credits-val"),p=document.querySelectorAll('input[name="app-tipo-aula"]'),i=()=>{var j;if(!k||!l||!y)return;const h=k.value;if(!h){l.style.display="none";return}const c=L.getStudentById(h),T=c?c.saldoReposicoes:0;y.textContent=`${T} ${T===1?"crédito":"créditos"}`;const R=((j=document.querySelector('input[name="app-tipo-aula"]:checked'))==null?void 0:j.value)==="reposicao";l.style.display="flex",T===0&&R?(l.style.background="rgba(239, 68, 68, 0.15)",l.style.borderColor="rgba(239, 68, 68, 0.4)",l.style.color="#f87171"):(l.style.background="rgba(59, 130, 246, 0.1)",l.style.borderColor="rgba(59, 130, 246, 0.3)",l.style.color="#93c5fd")};k==null||k.addEventListener("change",i),p.forEach(h=>h.addEventListener("change",i)),i();const r=document.getElementById("app-plan-student");r==null||r.addEventListener("change",()=>{const h=r.selectedOptions[0],c=h==null?void 0:h.getAttribute("data-planoid");if(c){const T=document.getElementById("app-plan-select");T&&(T.value=c)}}),x&&d&&((E=document.getElementById("btn-delete-app"))==null||E.addEventListener("click",()=>{$e({title:"Excluir Aula",message:`Deseja realmente excluir a aula "<strong>${d.titulo}</strong>"?`,onConfirm:()=>{L.deleteAppointment(d.id,(t==null?void 0:t.nome)||"Administrador"),N("Aula removida.","info"),Ne(),s()}})}))},50)}return s(),e}const At=["Violão","Piano & Teclado","Guitarra","Bateria & Percussão","Técnica Vocal / Canto","Baixo","Violino","Flauta","Saxofone","Musicalização Infantil","Outro"];function at(g){const e=(g||"").toLowerCase();return e.includes("bateria")||e.includes("percuss")?"🥁":e.includes("piano")||e.includes("teclado")?"🎹":e.includes("guitarra")?"🎸":e.includes("violão")||e.includes("violao")?"🪕":e.includes("canto")||e.includes("vocal")?"🎤":e.includes("baixo")?"🎸":e.includes("violino")?"🎻":e.includes("flauta")||e.includes("sax")?"🎷":"🎵"}function Et(g){if(!g)return"";const e=new Date(g+"T00:00:00");if(isNaN(e.getTime()))return"";const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,`${a} anos`}function ot(g){if(!g)return null;const e=new Date(g+"T00:00:00");if(isNaN(e.getTime()))return null;const t=new Date;let a=t.getFullYear()-e.getFullYear();const s=t.getMonth()-e.getMonth();return(s<0||s===0&&t.getDate()<e.getDate())&&a--,a}function St(g,e){const t=g.replace(/\D/g,"");if(!t)return"";const a=t.length<=11?`55${t}`:t,s=encodeURIComponent(`Olá, ${e}! Aqui é da escola de música Acusticamente.`);return`https://wa.me/${a}?text=${s}`}function rt(g,e){const t={pix:"PIX Instantâneo",dinheiro:"Dinheiro em Espécie",cartao_credito:"Cartão de Crédito",cartao_debito:"Cartão de Débito",boleto:"Boleto Bancário",transferencia:"Transferência Bancária"},a=`
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
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${g.id.toUpperCase()}</div>
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
              <strong>${g.descricao}</strong>
              ${g.observacoes?`<br><small style="color: #6b7280;">${g.observacoes}</small>`:""}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${g.dataVencimento.split("-").reverse().join("/")}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${g.dataPagamento?g.dataPagamento.split("-").reverse().join("/"):"-"}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${g.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${g.formaPagamento?t[g.formaPagamento]||g.formaPagamento.toUpperCase():"Não informada"}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${g.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;he({title:`Recibo de Pagamento: ${g.descricao}`,bodyHtml:a,modalClass:"modal-md",confirmText:"🖨️ Imprimir Recibo",cancelText:"Fechar",onConfirm:()=>(window.print(),!1)})}function It(g){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s={column:"nome",direction:"asc"};function n(){var I,C;const o=L.getStudents(),P=new Set,d=o.filter(f=>!f.id||P.has(f.id)?!1:(P.add(f.id),!0)),x=L.getPlans(),M=de(t,"alunos","cadastrar"),D=de(t,"alunos","alterar"),b=de(t,"alunos","excluir"),w=d.filter(f=>f.nome.toLowerCase().includes(a.toLowerCase())||f.email.toLowerCase().includes(a.toLowerCase())||f.telefone.includes(a)||f.instrumentoPrincipal&&f.instrumentoPrincipal.toLowerCase().includes(a.toLowerCase())||f.responsavelNome&&f.responsavelNome.toLowerCase().includes(a.toLowerCase())),u=Ee(w,s,{nome:f=>f.nome,instrumento:f=>f.instrumentoPrincipal||"",contato:f=>f.telefone||f.email||"",plano:f=>{const m=x.find(k=>k.id===f.planoId);return(m==null?void 0:m.nome)||""},status:f=>f.status});e.innerHTML=`
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

        ${M?`
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
          <h3 class="panel-card-title">Alunos Matriculados (${u.length})</h3>
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
              ${u.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':u.map(f=>{const m=x.find(l=>l.id===f.planoId),k=f.status==="ativo";return`
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
                                <span style="font-size: 0.95rem;">${at(f.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${f.instrumentoPrincipal||"Geral"}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${f.telefone||"-"}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-white); white-space: nowrap; display: block;">
                                ${(m==null?void 0:m.nome)||'<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                              ${(f.saldoReposicoes||0)>0?`<span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.64rem; padding: 1px 5px; margin-top: 2px; display: inline-block;">
                                      ⚡ ${f.saldoReposicoes} ${f.saldoReposicoes===1?"crédito":"créditos"} de remarcação
                                     </span>`:""}
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${k?"badge-success":"badge-warning"}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${k?"Ativo":"Inativo"}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${f.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${q.profile}
                                </button>
                                ${D?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${f.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${b?`
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
    `;const v=e.querySelector("#student-search-input");v==null||v.addEventListener("input",f=>{a=f.target.value,n();const m=e.querySelector("#student-search-input");m&&(m.focus(),m.selectionStart=m.selectionEnd=m.value.length)}),(I=e.querySelector("#btn-clear-search"))==null||I.addEventListener("click",()=>{a="",n()}),Ae(e,s,f=>{s=f,n()}),(C=e.querySelector("#btn-new-student"))==null||C.addEventListener("click",()=>{$()}),e.querySelectorAll(".btn-view-student").forEach(f=>{f.addEventListener("click",m=>{const k=m.currentTarget.dataset.id,l=L.getStudents().find(y=>y.id===k);l&&z(l)})}),e.querySelectorAll(".btn-edit-student").forEach(f=>{f.addEventListener("click",m=>{const k=m.currentTarget.dataset.id,l=L.getStudents().find(y=>y.id===k);l&&$(l)})}),e.querySelectorAll(".btn-delete-student").forEach(f=>{f.addEventListener("click",m=>{const k=m.currentTarget.dataset.id,l=L.getStudents().find(y=>y.id===k);l&&$e({title:"Excluir Aluno",message:`Tem certeza que deseja excluir o cadastro do aluno "<strong>${l.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,onConfirm:()=>{L.deleteStudent(l.id,(t==null?void 0:t.nome)||"Administrador"),N(`Aluno "${l.nome}" excluído.`,"info"),n()}})})})}function z(o){const P=L.getPlans(),d=L.getPaymentPlans();P.find(r=>r.id===o.planoId);const x=d.find(r=>r.id===o.planoPagamentoId),M=L.getStudentAppointments(o.id),D=L.getStudentPayments(o.id),b=Et(o.dataNascimento),w=St(o.telefone,o.nome),u=o.saldoReposicoes||0,v=L.isStudentOverdue(o.id),I=o.status==="ativo",C=de(t,"financeiro","alterar"),f=M.length,m=M.filter(r=>r.status==="concluido").length,k=M.filter(r=>r.status==="falta_justificada").length,l=M.filter(r=>r.status==="falta_injustificada").length,y=D.filter(r=>r.status==="pago").reduce((r,E)=>r+E.valor,0),p=D.filter(r=>r.status!=="pago").reduce((r,E)=>r+E.valor,0),i=`
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
                <span class="badge ${I?"badge-success":"badge-secondary"}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${I?"● Ativo":"○ Inativo"}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${at(o.instrumentoPrincipal)} ${o.instrumentoPrincipal||"Instrumento Geral"}</span>
                &bull;
                <span>${o.nivelMusical?o.nivelMusical.toUpperCase():"INICIANTE"}</span>
                ${o.moduloAtual?`&bull; <span style="color: var(--color-coral); font-weight: 600;">📖 ${o.moduloAtual}${o.aulaAtual?` &bull; ${o.aulaAtual}`:""}</span>`:""}
                ${b?`&bull; <span style="color: var(--text-muted);">${b}</span>`:""}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${w?`
                  <a href="${w}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
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
              ${v?'<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>':`<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${D.length}</span>`}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${f}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${m}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${k+l}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${u}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Remarcações</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${M.length})
              </span>
              ${u>0?`
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${u})
                    </button>
                  `:""}
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${M.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>':`
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
                        ${M.map(r=>{const E=r.status==="concluido",h=r.status.startsWith("falta"),c=r.status==="agendado",T=E?'<span class="badge badge-success" style="font-size: 0.65rem; padding: 1px 5px;">Presente</span>':h?`<span class="badge ${r.status==="falta_justificada"?"badge-coral":"badge-danger"}" style="font-size: 0.65rem; padding: 1px 5px;">${r.status==="falta_justificada"?"Falta Justificada":"Falta Injustificada"}</span>`:c?'<span class="badge badge-warning" style="font-size: 0.65rem; padding: 1px 5px;">Agendado</span>':'<span class="badge badge-secondary" style="font-size: 0.65rem; padding: 1px 5px;">Cancelado</span>',R=r.tipoAula==="reposicao"?'<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem; padding: 1px 5px;">🔄 Reposição</span>':'<span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); font-size: 0.65rem; padding: 1px 5px;">Regular</span>';return`
                              <tr>
                                <td style="white-space: nowrap; font-weight: 500;">
                                  ${r.data.split("-").reverse().join("/")} <span style="color: var(--text-muted); font-size: 0.7rem;">${r.horaInicio}</span>
                                </td>
                                <td>${r.titulo}</td>
                                <td class="col-hide-sm">${R}</td>
                                <td>${T}</td>
                                <td class="col-hide-sm" style="color: var(--text-muted); font-size: 0.72rem;">
                                  ${r.justificativaFalta?`<em>Motivo: ${r.justificativaFalta}</em>`:r.observacoes||"-"}
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
              ${v?'<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>':'<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>'}
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
              <div style="font-size: 1.05rem; font-weight: 700; color: ${p>0?"#f87171":"var(--text-white)"}; margin-top: 1px;">
                R$ ${p.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${D.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${D.length===0?'<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>':`
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
                        ${D.map(r=>{const E=r.status==="pago",h=r.status==="atrasado";let c="";return E?c='<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>':h?c='<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>':c='<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>',`
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${r.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${r.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${r.valor.toFixed(2)}</td>
                              <td>${c}</td>
                              <td class="col-hide-sm">${r.dataPagamento?r.dataPagamento.split("-").reverse().join("/"):"-"}</td>
                              <td style="text-align: right;">
                                ${E?`
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${r.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `:C?`
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${r.id}" style="font-size: 0.7rem; padding: 2px 7px;">
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
    `;he({title:`Ficha do Aluno: ${o.nome}`,bodyHtml:i,modalClass:"modal-lg",cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var T;const r=document.getElementById("btn-tab-pedagogico"),E=document.getElementById("btn-tab-financeiro"),h=document.getElementById("panel-tab-pedagogico"),c=document.getElementById("panel-tab-financeiro");r==null||r.addEventListener("click",()=>{r.classList.add("active"),E==null||E.classList.remove("active"),h&&(h.style.display="flex"),c&&(c.style.display="none")}),E==null||E.addEventListener("click",()=>{E.classList.add("active"),r==null||r.classList.remove("active"),c&&(c.style.display="flex"),h&&(h.style.display="none")}),(T=document.getElementById("btn-quick-schedule-reposicao"))==null||T.addEventListener("click",()=>{Ne(),g("agenda")}),document.querySelectorAll(".btn-print-receipt").forEach(R=>{R.addEventListener("click",j=>{const U=j.currentTarget.dataset.id,A=D.find(B=>B.id===U);A&&rt(A,o)})}),document.querySelectorAll(".btn-pay-now").forEach(R=>{R.addEventListener("click",j=>{const U=j.currentTarget.dataset.id,A=D.find(F=>F.id===U);if(!A)return;const B=L.getTodayDateString(),_=`
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
          `;he({title:`Dar Baixa: ${A.descricao}`,bodyHtml:_,modalClass:"modal-sm",confirmText:"Confirmar Recebimento",cancelText:"Cancelar",onConfirm:()=>{const F=document.getElementById("baixa-data").value,V=document.getElementById("baixa-forma").value,G=document.getElementById("baixa-obs").value;if(!F)return N("Informe a data de recebimento.","error"),!1;const W=(t==null?void 0:t.nome)||"Administrador";L.darBaixaPayment(A.id,F,V,W,G),N(`Baixa de R$ ${A.valor.toFixed(2)} efetuada com sucesso!`,"success"),n();const J=L.getStudents().find(Y=>Y.id===o.id)||o;return z(J),setTimeout(()=>{var Y;(Y=document.getElementById("btn-tab-financeiro"))==null||Y.click()},50),!0}})})})},50)}function $(o){const P=L.getPlans(),d=L.getPaymentPlans(),x=!!o;o&&L.getStudentPayments(o.id);const M=P.map(u=>`<option value="${u.id}" ${(o==null?void 0:o.planoId)===u.id?"selected":""}>${u.nome}${u.instrumento?` (${u.instrumento})`:""}</option>`).join(""),D=d.filter(u=>u.ativo).map(u=>`<option value="${u.id}" ${(o==null?void 0:o.planoPagamentoId)===u.id?"selected":""} data-valor="${u.valorMensal}" data-desconto="${u.descontoSegundaMatricula??0}">${u.nome} (${u.modalidade==="individual"?"👤 Individual":"👥 Turma"} - ${u.periodicidade.toUpperCase()}) - R$ ${u.valorMensal.toFixed(2)}/mês</option>`).join(""),b=At.map(u=>`<option value="${u}" ${(o==null?void 0:o.instrumentoPrincipal)===u?"selected":""}>${u}</option>`).join(""),w=`
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
                ${b}
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
              ${M}
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
                ${D}
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
    `;he({title:x?`Editar: ${o.nome}`:"Cadastrar Aluno",bodyHtml:w,modalClass:"modal-lg",confirmText:x?"Salvar":"Cadastrar",leftButton:{id:"btn-delete-student-appointments",text:"Excluir agendamentos deste aluno",btnClass:"btn-secondary",disabled:!x||!o,title:!x||!o?"Disponível apenas para alunos já cadastrados":"Excluir todos os agendamentos vinculados a este aluno",onClick:()=>{o&&$e({title:"Excluir Agendamentos",message:"Tem certeza que deseja apagar todos os agendamentos deste aluno?",confirmText:"Sim, apagar agendamentos",confirmBtnClass:"btn-danger",onConfirm:()=>{const u=(t==null?void 0:t.nome)||"Administrador",v=L.deleteStudentAppointments(o.id,u);v>0?N(`Todos os ${v} agendamento(s) do aluno "${o.nome}" foram apagados.`,"info"):N(`Nenhum agendamento encontrado para o aluno "${o.nome}".`,"info")}})}},onConfirm:()=>{var Y,K,te,Z,ee,ae,O,re,ne,ge;const u=document.getElementById("student-nome").value.trim(),v=document.getElementById("student-nascimento").value,I=document.getElementById("student-email").value.trim(),C=document.getElementById("student-telefone").value.trim(),f=((Y=document.getElementById("student-cpf"))==null?void 0:Y.value.trim())||void 0,m=document.getElementById("student-resp-nome").value.trim(),k=document.getElementById("student-resp-parentesco").value,l=document.getElementById("student-resp-tel").value.trim(),y=((K=document.getElementById("student-resp-cpf"))==null?void 0:K.value.trim())||void 0,p=document.getElementById("student-instrumento").value,i=document.getElementById("student-nivel").value,r=document.getElementById("student-plano").value,E=((te=document.getElementById("student-plano-pagamento"))==null?void 0:te.value)||void 0,h=((Z=document.getElementById("student-segunda-matricula"))==null?void 0:Z.checked)||!1,c=document.getElementById("student-status").value,T=((ae=(ee=document.getElementById("student-modulo"))==null?void 0:ee.value)==null?void 0:ae.trim())||void 0,R=((re=(O=document.getElementById("student-aula"))==null?void 0:O.value)==null?void 0:re.trim())||void 0,j=(ne=document.getElementById("student-valor-mensalidade"))==null?void 0:ne.value,U=Je(j),A=(ge=document.getElementById("student-dia-vencimento"))==null?void 0:ge.value,B=Math.min(31,Math.max(1,parseInt(A,10)||10)),_=document.getElementById("student-obs").value.trim(),F=[];u||F.push({label:"Nome do Aluno",fieldId:"student-nome",tabId:"tab-pessoal"}),v||F.push({label:"Data de Nascimento",fieldId:"student-nascimento",tabId:"tab-pessoal"}),C?C.replace(/\D/g,"").length<10&&F.push({label:"Celular do Aluno incompleto",fieldId:"student-telefone",tabId:"tab-pessoal"}):F.push({label:"Celular do Aluno",fieldId:"student-telefone",tabId:"tab-pessoal"}),f&&f.replace(/\D/g,"").length!==11&&F.push({label:"CPF do Aluno incompleto (11 dígitos)",fieldId:"student-cpf",tabId:"tab-pessoal"}),I&&!nt(I)&&F.push({label:"E-mail em formato inválido",fieldId:"student-email",tabId:"tab-pessoal"});const V=ot(v);V!==null&&V<18&&(m||F.push({label:`Nome do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-nome",tabId:"tab-resp"}),k||F.push({label:`Parentesco do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-parentesco",tabId:"tab-resp"}),l?l.replace(/\D/g,"").length<10&&F.push({label:"Celular do Responsável incompleto",fieldId:"student-resp-tel",tabId:"tab-resp"}):F.push({label:`Celular do Responsável (Aluno menor de idade: ${V} anos)`,fieldId:"student-resp-tel",tabId:"tab-resp"}),y&&y.replace(/\D/g,"").length!==11&&F.push({label:"CPF do Responsável incompleto (11 dígitos)",fieldId:"student-resp-cpf",tabId:"tab-resp"})),c||F.push({label:"Status da Matrícula",fieldId:"student-status",tabId:"tab-musica"}),(!j||U<=0)&&F.push({label:"Valor da Mensalidade (R$)",fieldId:"student-valor-mensalidade",tabId:"tab-financeiro"});const W=parseInt(A,10);if((!A||isNaN(W)||W<1||W>31)&&F.push({label:"Dia de Vencimento (deve ser entre 1 e 31)",fieldId:"student-dia-vencimento",tabId:"tab-financeiro"}),F.length>0){const H=ue=>{const pe=document.querySelectorAll(".btn-form-tab"),we=document.querySelectorAll(".form-tab-panel");pe.forEach(ce=>{ce.dataset.tab===ue?ce.classList.add("active"):ce.classList.remove("active")}),we.forEach(ce=>{ce.style.display=ce.id===`form-panel-${ue}`?"flex":"none"})},oe=document.createElement("div");oe.id="student-validation-alert",oe.style.cssText=`
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
          `,document.body.appendChild(oe);const le=oe.querySelector("#btn-validation-ok");return le==null||le.focus(),le==null||le.addEventListener("click",()=>{oe.remove();const ue=F[0];H(ue.tabId),setTimeout(()=>{const pe=document.getElementById(ue.fieldId);pe&&(pe.focus(),pe.scrollIntoView({behavior:"smooth",block:"center"}),pe.style.outline="2px solid var(--color-coral)",pe.style.borderColor="var(--color-coral)",setTimeout(()=>{pe.style.outline="",pe.style.borderColor=""},3500))},100)}),!1}const J=(t==null?void 0:t.nome)||"Administrador";return x&&o?(L.updateStudent(o.id,{nome:u,dataNascimento:v,email:I,telefone:C,cpf:f,responsavelNome:m,responsavelParentesco:k,responsavelTelefone:l,responsavelCpf:y,instrumentoPrincipal:p,nivelMusical:i,planoId:r,planoPagamentoId:E,isSegundaMatricula:h,status:c,moduloAtual:T,aulaAtual:R,valorMensalidade:U,diaVencimento:B,observacoes:_},J),N("Dados do aluno atualizados com sucesso!","success")):(L.addStudent({nome:u,dataNascimento:v,email:I,telefone:C,cpf:f,responsavelNome:m,responsavelParentesco:k,responsavelTelefone:l,responsavelCpf:y,instrumentoPrincipal:p,nivelMusical:i,planoId:r,planoPagamentoId:E,isSegundaMatricula:h,status:c,moduloAtual:T,aulaAtual:R,valorMensalidade:U,diaVencimento:B,observacoes:_},J),N("Aluno cadastrado com sucesso!","success")),n(),!0}}),setTimeout(()=>{const u=document.querySelectorAll(".btn-form-tab"),v=document.querySelectorAll(".form-tab-panel");u.forEach(V=>{V.addEventListener("click",G=>{const W=G.currentTarget.dataset.tab;u.forEach(J=>{J.classList.remove("active")}),G.currentTarget.classList.add("active"),v.forEach(J=>{J.style.display=J.id===`form-panel-${W}`?"flex":"none"})})});const I=document.getElementById("student-cpf");I&&me(I,Qe);const C=document.getElementById("student-telefone");C&&me(C,Oe);const f=document.getElementById("student-resp-cpf");f&&me(f,Qe);const m=document.getElementById("student-resp-tel");m&&me(m,Oe);const k=document.getElementById("student-valor-mensalidade");k&&me(k,Ie);const l=document.getElementById("student-dia-vencimento");l&&me(l,vt);const y=document.getElementById("student-plano-pagamento"),p=document.getElementById("student-segunda-matricula"),i=document.getElementById("summary-plano-base"),r=document.getElementById("summary-plano-desc"),E=document.getElementById("summary-plano-final"),h=()=>{const V=y==null?void 0:y.value,G=(p==null?void 0:p.checked)||!1,W=L.calcularMensalidadeAluno(V,G);i&&(i.textContent=`R$ ${W.valorBase.toFixed(2)}`),r&&(r.textContent=W.descontoPercentual>0?`-R$ ${W.valorDesconto.toFixed(2)} (${W.descontoPercentual}%)`:"R$ 0,00",r.style.color=W.descontoPercentual>0?"#34d399":"var(--text-secondary)"),E&&(E.textContent=`R$ ${W.valorFinal.toFixed(2)}`);const J=document.getElementById("label-desc-segunda");if(J){const Y=y==null?void 0:y.selectedOptions[0],K=parseFloat((Y==null?void 0:Y.getAttribute("data-desconto"))||"0");K>0?(J.textContent=`${K}% OFF`,J.style.color=G?"#34d399":"var(--text-secondary)"):(J.textContent="Aplicar",J.style.color="var(--text-secondary)")}k&&(k.value=Ie(W.valorFinal))};y==null||y.addEventListener("change",h),p==null||p.addEventListener("change",h),o!=null&&o.planoPagamentoId&&h();const c=document.getElementById("student-nascimento"),T=document.getElementById("student-resp-alert"),R=document.querySelectorAll(".resp-req-star"),j=()=>{const V=c==null?void 0:c.value,G=ot(V),W=G!==null&&G<18;T&&(T.style.display=W?"block":"none",W&&(T.innerHTML=`⚠️ <strong>Aluno menor de 18 anos (${G} anos).</strong> Dados do responsável são obrigatórios.`)),R.forEach(J=>{J.style.display=W?"inline":"none"})};c==null||c.addEventListener("input",j),c==null||c.addEventListener("change",j),j();const U=document.getElementById("student-plano"),A=document.getElementById("student-modulo"),B=document.getElementById("student-aula"),_=(V,G)=>{var Z;if(!B)return;const W=U==null?void 0:U.value,J=P.find(ee=>ee.id===W),Y=(Z=J==null?void 0:J.modulos)==null?void 0:Z.find((ee,ae)=>(ee.titulo||`Módulo ${ae+1}`)===V);if(!Y||!Y.aulas||Y.aulas.length===0){B.innerHTML=Y?'<option value="">Nenhuma aula cadastrada neste módulo</option>':'<option value="">Selecione o módulo primeiro...</option>';return}let K='<option value="">Selecione a aula atual (opcional)...</option>',te=!1;Y.aulas.forEach((ee,ae)=>{const O=ee.titulo||`Aula ${ae+1}`,re=(G||(o==null?void 0:o.aulaAtual))===O;re&&(te=!0),K+=`<option value="${O}" ${re?"selected":""}>Aula ${ae+1}: ${O}</option>`}),G&&!te&&(K+=`<option value="${G}" selected>${G} (Personalizada)</option>`),B.innerHTML=K},F=(V,G,W)=>{if(!A)return;const J=P.find(Z=>Z.id===V);if(!J||!J.modulos||J.modulos.length===0){A.innerHTML=J?'<option value="">Este plano pedagógico não possui módulos cadastrados</option>':'<option value="">Selecione um plano de ensino primeiro...</option>',B&&(B.innerHTML='<option value="">Selecione o módulo primeiro...</option>');return}let Y='<option value="">Selecione o módulo do plano...</option>',K=!1;const te=G!==void 0?G:(o==null?void 0:o.moduloAtual)||"";J.modulos.forEach((Z,ee)=>{var ne;const ae=Z.titulo||`Módulo ${ee+1}`,O=te===ae;O&&(K=!0);const re=((ne=Z.aulas)==null?void 0:ne.length)||0;Y+=`<option value="${ae}" ${O?"selected":""}>Módulo ${ee+1}: ${ae} (${re} ${re===1?"aula":"aulas"})</option>`}),te&&!K&&(Y+=`<option value="${te}" selected>${te} (Anterior)</option>`),A.innerHTML=Y,_(A.value,W!==void 0?W:o==null?void 0:o.aulaAtual)};U==null||U.addEventListener("change",()=>{F(U.value,"","")}),A==null||A.addEventListener("change",()=>{_(A.value,"")}),U!=null&&U.value&&F(U.value,o==null?void 0:o.moduloAtual,o==null?void 0:o.aulaAtual)},50)}return n(),e}const xe=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"financeiro",title:"Financeiro",icon:"💰",items:[{key:"acesso",label:"Acesso ao módulo financeiro e mensalidades"},{key:"cadastrar",label:"Lançar novos pagamentos e gerar mensalidades"},{key:"alterar",label:"Dar baixa e alterar lançamentos"},{key:"excluir",label:"Excluir registros financeiros"}]},{key:"planosPagamento",title:"Planos de Pagamento",icon:"💳",items:[{key:"acesso",label:"Acesso ao módulo de planos de pagamento"},{key:"cadastrar",label:"Cadastrar novo plano de pagamento"},{key:"alterar",label:"Alterar modalidades, ciclos e valores"},{key:"excluir",label:"Excluir plano de pagamento"}]},{key:"relatorios",title:"Relatórios",icon:"📊",items:[{key:"acesso",label:"Acesso ao módulo de relatórios"},{key:"gerar",label:"Gerar e emitir relatórios em PDF"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],st=xe.reduce((g,e)=>g+e.items.length,0);function Ct(g){let e=0;return xe.forEach(t=>{const a=g[t.key];a&&t.items.forEach(s=>{a[s.key]&&e++})}),e}function kt(g){var $;const e=document.createElement("div"),t=ie.getCurrentUser();if((t==null?void 0:t.papel)!=="admin")return e.innerHTML=`
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
    `,($=e.querySelector("#btn-unauth-home"))==null||$.addEventListener("click",()=>g("home")),e;let a="",s={column:"nome",direction:"asc"};function n(){var D,b;const o=L.getUsers(),P=a.toLowerCase(),d=o.filter(w=>w.nome.toLowerCase().includes(P)||w.login.toLowerCase().includes(P)||w.papel.toLowerCase().includes(P)),x=Ee(d,s,{nome:w=>w.nome,login:w=>w.login,papel:w=>w.papel,tipo:w=>w.isSistema?"Sistema":"Operador"});e.innerHTML=`
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
              ${x.map(w=>{const u=w.papel==="admin"?"Administrador":w.papel==="professor"?"Professor":"Atendente",v=Fe(w),I=Ct(v);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${w.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${w.nome[0]||"U"}
                          </div>
                          <div style="display: flex; flex-direction: column; overflow: hidden;">
                            <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                              ${w.nome}
                            </span>
                            ${w.dataNascimento?`<span style="font-size: 0.72rem; color: var(--text-secondary); line-height: 1.2;">Nascimento: ${Ve(w.dataNascimento)}</span>`:""}
                          </div>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${w.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${w.papel==="admin"?"badge-coral":"badge-info"}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${u}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${w.papel==="admin"?"badge-coral":I>0?"badge-success":"badge-secondary"}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${w.papel==="admin"?`Acesso Total (${st})`:`${I} de ${st} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${w.isSistema?'<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>':'<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${w.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${q.edit}
                          </button>
                          ${w.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${q.trash}
                                 </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${w.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
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
    `,(D=e.querySelector("#btn-new-user"))==null||D.addEventListener("click",()=>{z()});const M=e.querySelector("#user-search-input");M&&M.addEventListener("input",w=>{a=w.target.value,n();const u=e.querySelector("#user-search-input");u&&(u.focus(),u.setSelectionRange(u.value.length,u.value.length))}),(b=e.querySelector("#btn-clear-search"))==null||b.addEventListener("click",()=>{a="",n()}),Ae(e,s,w=>{s=w,n()}),e.querySelectorAll(".btn-edit-user").forEach(w=>{w.addEventListener("click",u=>{const v=u.currentTarget.dataset.id,I=L.getUsers().find(C=>C.id===v);I&&z(I)})}),e.querySelectorAll(".btn-delete-user").forEach(w=>{w.addEventListener("click",u=>{const v=u.currentTarget.dataset.id,I=L.getUsers().find(C=>C.id===v);I&&$e({title:"Excluir Usuário",message:`Tem certeza que deseja excluir o usuário "<strong>${I.nome}</strong>" (login: <code>${I.login}</code>)?`,onConfirm:()=>{try{L.deleteUser(I.id,(t==null?void 0:t.nome)||"Administrador"),N(`Usuário "${I.nome}" excluído.`,"info"),n()}catch(C){N(C.message||"Erro ao excluir usuário.","error")}}})})})}function z(o){var C,f,m,k;const P=!!o,d=o?o.papel:"professor",x=d==="admin",M=Fe(o),D=`
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
            <input type="password" id="user-senha" class="form-input" placeholder="${P?"Nova senha":"Ex: 123456"}" value="${(o==null?void 0:o.senha)||""}" required />
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
              <option value="admin" ${d==="admin"?"selected":""}>Administrador (Acesso Total)</option>
              <option value="professor" ${d==="professor"?"selected":""}>Professor</option>
              <option value="atendente" ${d==="atendente"?"selected":""}>Atendente</option>
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
            ${xe.map(l=>{const y=M[l.key]||{},p=l.items.filter(i=>y[i.key]).length;return`
                <div class="perm-group-card" id="card-group-${l.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${l.key}" 
                    data-group="${l.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${l.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${l.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${l.title}
                        </strong>
                        <span id="group-counter-${l.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${p}/${l.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${l.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${l.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${l.items.map(i=>{const r=!!y[i.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${l.key}-${i.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${r?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${r?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${l.key}-${i.key}" 
                                data-group="${l.key}" 
                                data-action="${i.key}" 
                                ${r?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${i.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${l.key}-${i.key}" 
                              class="badge ${r?"badge-success":"badge-coral"}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${r?"Liberado":"Bloqueado"}
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
    `;he({title:P?`Editar Usuário: ${o.nome}`:"Cadastrar Novo Usuário",bodyHtml:D,modalClass:"modal-lg",confirmText:P?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var R,j,U,A,B,_,F,V,G,W,J,Y,K,te,Z,ee,ae,O,re,ne,ge,H,oe,le,ue,pe,we;const l=document.getElementById("user-nome").value.trim(),y=document.getElementById("user-login").value.trim(),p=document.getElementById("user-senha").value.trim(),i=((R=document.getElementById("user-nascimento"))==null?void 0:R.value.trim())||"",r=document.getElementById("user-papel"),E=r?r.value:"professor";if(!l||!y||!p)return N("Preencha Nome, Login e Senha.","error"),!1;if(i){if(i.length!==10)return N("Informe a data de nascimento completa no formato DD/MM/AAAA.","error"),!1;const ce=i.split("/"),Ce=parseInt(ce[0],10),ke=parseInt(ce[1],10),ze=parseInt(ce[2],10),Re=new Date().getFullYear();if(isNaN(Ce)||isNaN(ke)||isNaN(ze)||Ce<1||Ce>31||ke<1||ke>12||ze<1900||ze>Re)return N("Data de nascimento inválida.","error"),!1}if(L.getUsers().find(ce=>ce.login===y&&ce.id!==(o==null?void 0:o.id)))return N(`O login "${y}" já está em uso por outro usuário.`,"error"),!1;let c;E==="admin"?c=JSON.parse(JSON.stringify(Se.admin)):c={alunos:{acesso:((j=document.getElementById("perm-alunos-acesso"))==null?void 0:j.checked)??!1,cadastrar:((U=document.getElementById("perm-alunos-cadastrar"))==null?void 0:U.checked)??!1,alterar:((A=document.getElementById("perm-alunos-alterar"))==null?void 0:A.checked)??!1,excluir:((B=document.getElementById("perm-alunos-excluir"))==null?void 0:B.checked)??!1},agenda:{acesso:((_=document.getElementById("perm-agenda-acesso"))==null?void 0:_.checked)??!1,cadastrar:((F=document.getElementById("perm-agenda-cadastrar"))==null?void 0:F.checked)??!1,alterar:((V=document.getElementById("perm-agenda-alterar"))==null?void 0:V.checked)??!1,excluir:((G=document.getElementById("perm-agenda-excluir"))==null?void 0:G.checked)??!1},planos:{acesso:((W=document.getElementById("perm-planos-acesso"))==null?void 0:W.checked)??!1,cadastrar:((J=document.getElementById("perm-planos-cadastrar"))==null?void 0:J.checked)??!1,alterar:((Y=document.getElementById("perm-planos-alterar"))==null?void 0:Y.checked)??!1,excluir:((K=document.getElementById("perm-planos-excluir"))==null?void 0:K.checked)??!1},financeiro:{acesso:((te=document.getElementById("perm-financeiro-acesso"))==null?void 0:te.checked)??!1,cadastrar:((Z=document.getElementById("perm-financeiro-cadastrar"))==null?void 0:Z.checked)??!1,alterar:((ee=document.getElementById("perm-financeiro-alterar"))==null?void 0:ee.checked)??!1,excluir:((ae=document.getElementById("perm-financeiro-excluir"))==null?void 0:ae.checked)??!1},planosPagamento:{acesso:((O=document.getElementById("perm-planosPagamento-acesso"))==null?void 0:O.checked)??!1,cadastrar:((re=document.getElementById("perm-planosPagamento-cadastrar"))==null?void 0:re.checked)??!1,alterar:((ne=document.getElementById("perm-planosPagamento-alterar"))==null?void 0:ne.checked)??!1,excluir:((ge=document.getElementById("perm-planosPagamento-excluir"))==null?void 0:ge.checked)??!1},relatorios:{acesso:((H=document.getElementById("perm-relatorios-acesso"))==null?void 0:H.checked)??!1,gerar:((oe=document.getElementById("perm-relatorios-gerar"))==null?void 0:oe.checked)??!1},home:{acesso:((le=document.getElementById("perm-home-acesso"))==null?void 0:le.checked)??!1},auditoria:{acesso:((ue=document.getElementById("perm-auditoria-acesso"))==null?void 0:ue.checked)??!1},configuracoes:{acesso:((pe=document.getElementById("perm-configuracoes-acesso"))==null?void 0:pe.checked)??!1,alterar:((we=document.getElementById("perm-configuracoes-alterar"))==null?void 0:we.checked)??!1}};const T=(t==null?void 0:t.nome)||"Administrador";return P&&o?(L.updateUser(o.id,{nome:l,login:y,senha:p,dataNascimento:i,papel:o.isSistema?"admin":E,permissoes:o.isSistema?Se.admin:c},T),N("Usuário e permissões atualizados com sucesso!","success")):(L.addUser({nome:l,login:y,senha:p,dataNascimento:i,papel:E,permissoes:c},T),N("Novo usuário cadastrado com sucesso!","success")),n(),!0}});const b=document.getElementById("user-papel"),w=document.getElementById("user-permissions-section"),u=document.getElementById("user-nascimento");u&&me(u,Ve);const v=(l,y,p)=>{const i=document.getElementById(`row-perm-${l}-${y}`),r=document.getElementById(`badge-perm-${l}-${y}`);i&&r&&(p?(i.style.background="rgba(34, 197, 94, 0.06)",i.style.borderColor="rgba(34, 197, 94, 0.25)",r.className="badge badge-success",r.textContent="Liberado"):(i.style.background="rgba(234, 67, 53, 0.04)",i.style.borderColor="rgba(234, 67, 53, 0.15)",r.className="badge badge-coral",r.textContent="Bloqueado")),I(l)},I=l=>{const y=document.getElementById(`group-counter-${l}`),p=xe.find(i=>i.key===l);if(y&&p){let i=0;p.items.forEach(r=>{const E=document.getElementById(`perm-${l}-${r.key}`);E&&E.checked&&i++}),y.textContent=`${i}/${p.items.length} liberadas`}};b==null||b.addEventListener("change",()=>{const l=b.value;if(l==="admin")w.style.display="none";else if(w.style.display="block",!P){const y=Se[l]||Se.professor;xe.forEach(p=>{p.items.forEach(i=>{var E;const r=document.getElementById(`perm-${p.key}-${i.key}`);if(r){const h=((E=y[p.key])==null?void 0:E[i.key])??!1;r.checked=h,v(p.key,i.key,h)}})})}}),xe.forEach(l=>{const y=document.getElementById(`header-group-${l.key}`),p=document.getElementById(`group-body-${l.key}`),i=document.getElementById(`arrow-perm-${l.key}`);y==null||y.addEventListener("click",r=>{if(!r.target.closest(".btn-group-toggle")&&p&&i){const E=p.style.display==="flex";p.style.display=E?"none":"flex",i.style.transform=E?"rotate(0deg)":"rotate(180deg)"}}),l.items.forEach(r=>{const E=document.getElementById(`perm-${l.key}-${r.key}`);E==null||E.addEventListener("change",()=>{if(v(l.key,r.key,E.checked),E.checked&&r.key!=="acesso"){const h=document.getElementById(`perm-${l.key}-acesso`);h&&!h.checked&&(h.checked=!0,v(l.key,"acesso",!0))}!E.checked&&r.key==="acesso"&&l.items.forEach(h=>{if(h.key!=="acesso"){const c=document.getElementById(`perm-${l.key}-${h.key}`);c&&c.checked&&(c.checked=!1,v(l.key,h.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${l.key}"]`).forEach(r=>{r.addEventListener("click",E=>{E.stopPropagation();const h=l.items.map(T=>document.getElementById(`perm-${l.key}-${T.key}`)).filter(Boolean),c=h.every(T=>T.checked);h.forEach(T=>{T.checked=!c,v(l.key,T.dataset.action,!c)})})})}),(C=document.getElementById("btn-perm-expand"))==null||C.addEventListener("click",()=>{xe.forEach(l=>{const y=document.getElementById(`group-body-${l.key}`),p=document.getElementById(`arrow-perm-${l.key}`);y&&p&&(y.style.display="flex",p.style.transform="rotate(180deg)")})}),(f=document.getElementById("btn-perm-collapse"))==null||f.addEventListener("click",()=>{xe.forEach(l=>{const y=document.getElementById(`group-body-${l.key}`),p=document.getElementById(`arrow-perm-${l.key}`);y&&p&&(y.style.display="none",p.style.transform="rotate(0deg)")})}),(m=document.getElementById("btn-perm-all"))==null||m.addEventListener("click",()=>{xe.forEach(l=>{l.items.forEach(y=>{const p=document.getElementById(`perm-${l.key}-${y.key}`);p&&(p.checked=!0,v(l.key,y.key,!0))})})}),(k=document.getElementById("btn-perm-none"))==null||k.addEventListener("click",()=>{xe.forEach(l=>{l.items.forEach(y=>{const p=document.getElementById(`perm-${l.key}-${y.key}`);p&&(p.checked=!1,v(l.key,y.key,!1))})})})}return n(),e}function zt(g){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s={column:"nome",direction:"asc"};const n=de(t,"planos","cadastrar"),z=de(t,"planos","alterar"),$=de(t,"planos","excluir");function o(){var b,w;const x=L.getPlans().filter(u=>{const v=a.toLowerCase();return u.nome.toLowerCase().includes(v)||u.descricao&&u.descricao.toLowerCase().includes(v)}),M=Ee(x,s,{nome:u=>u.nome,estrutura:u=>(u.modulos||[]).reduce((v,I)=>{var C;return v+(((C=I.aulas)==null?void 0:C.length)||0)},0),descricao:u=>u.descricao||""});e.innerHTML=`
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
          <h3 class="panel-card-title">Planos Pedagógicos Cadastrados (${M.length})</h3>
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
              ${M.length===0?`
                    <tr>
                      <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${a?"Nenhum plano de ensino encontrado para a busca.":"Nenhum plano pedagógico cadastrado ainda."}
                      </td>
                    </tr>
                  `:M.map(u=>{const v=(u.modulos||[]).length,I=(u.modulos||[]).reduce((C,f)=>{var m;return C+(((m=f.aulas)==null?void 0:m.length)||0)},0);return`
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
                                  ${u.instrumento?`<span style="font-size: 0.72rem; color: var(--text-muted);">${u.instrumento}</span>`:""}
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${v} ${v===1?"módulo":"módulos"}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${I} ${I===1?"aula":"aulas"}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${u.descricao||'<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${z?`
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${u.id}" title="Editar Plano e Módulos">
                                        ${q.edit}
                                      </button>
                                    `:""}
                                ${$?`
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${u.id}" title="Excluir Plano">
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
    `,(b=e.querySelector("#btn-new-plan"))==null||b.addEventListener("click",()=>{P()});const D=e.querySelector("#plan-search-input");D&&D.addEventListener("input",u=>{a=u.target.value,o();const v=e.querySelector("#plan-search-input");v&&(v.focus(),v.setSelectionRange(v.value.length,v.value.length))}),(w=e.querySelector("#btn-clear-search"))==null||w.addEventListener("click",()=>{a="",o()}),Ae(e,s,u=>{s=u,o()}),e.querySelectorAll(".btn-edit-plan").forEach(u=>{u.addEventListener("click",v=>{const I=v.currentTarget.dataset.id,C=L.getPlans().find(f=>f.id===I);C&&P(C)})}),e.querySelectorAll(".btn-delete-plan").forEach(u=>{u.addEventListener("click",v=>{const I=v.currentTarget.dataset.id,C=L.getPlans().find(f=>f.id===I);C&&$e({title:"Excluir Plano de Ensino",message:`Tem certeza que deseja excluir o plano "<strong>${C.nome}</strong>" e todos os seus módulos e aulas?`,onConfirm:()=>{L.deletePlan(C.id,(t==null?void 0:t.nome)||"Administrador"),N(`Plano de ensino "${C.nome}" excluído.`,"info"),o()}})})})}function P(d){const x=!!d;let M=d?JSON.parse(JSON.stringify(d.modulos||[])):[];M.forEach(u=>{Array.isArray(u.aulas)||(u.aulas=[])});function D(){return M.length===0?`
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); margin-top: 8px;">
            Nenhum módulo adicionado ainda. Digite o nome do módulo acima e clique em "Adicionar Módulo".
          </div>
        `:M.map((u,v)=>{const I=u.aulas||[];return`
            <div class="module-card-item" data-mod-idx="${v}" style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 8px;">
              <!-- Cabeçalho do Módulo -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px; flex: 1;">
                  <span class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 7px;">
                    Módulo ${v+1}
                  </span>
                  <input 
                    type="text" 
                    class="form-input input-module-title" 
                    data-mod-idx="${v}" 
                    value="${u.titulo}" 
                    placeholder="Título do módulo" 
                    style="font-size: 0.84rem; font-weight: 600; padding: 4px 8px; background: transparent; border-color: transparent; border-bottom: 1px dashed var(--border-subtle); width: 100%;"
                  />
                </div>

                <div style="display: flex; gap: 4px; align-items: center;">
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-up" data-mod-idx="${v}" title="Mover para cima" ${v===0?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▲
                  </button>
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-down" data-mod-idx="${v}" title="Mover para baixo" ${v===M.length-1?"disabled":""} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▼
                  </button>
                  <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-mod-idx="${v}" title="Excluir Módulo" style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ${q.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo -->
              <div class="lessons-container" style="display: flex; flex-direction: column; gap: 5px; margin-left: 14px; border-left: 2px solid rgba(234, 67, 53, 0.2); padding-left: 10px;">
                ${I.length===0?'<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 4px 0;">Nenhuma aula cadastrada neste módulo.</div>':I.map((C,f)=>`
                            <div style="display: flex; align-items: center; gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
                              <span style="font-size: 0.72rem; color: var(--text-muted); min-width: 44px;">Aula ${f+1}:</span>
                              <input 
                                type="text" 
                                class="form-input input-lesson-title" 
                                data-mod-idx="${v}" 
                                data-aula-idx="${f}" 
                                value="${C.titulo}" 
                                placeholder="Título da aula" 
                                style="flex: 1; font-size: 0.78rem; padding: 2px 6px; background: transparent; border: none;"
                              />
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-up" data-mod-idx="${v}" data-aula-idx="${f}" title="Mover aula acima" ${f===0?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▲
                              </button>
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-down" data-mod-idx="${v}" data-aula-idx="${f}" title="Mover aula abaixo" ${f===I.length-1?"disabled":""} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▼
                              </button>
                              <button type="button" class="btn btn-danger btn-icon-only btn-remove-lesson" data-mod-idx="${v}" data-aula-idx="${f}" title="Excluir Aula" style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ✕
                              </button>
                            </div>
                          `).join("")}

                <!-- Adicionar Aula ao Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="form-input input-new-lesson" 
                    data-mod-idx="${v}" 
                    placeholder="Título da nova aula (ex: Acorde Dó Maior)..." 
                    style="flex: 1; font-size: 0.76rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-add-lesson" 
                    data-mod-idx="${v}" 
                    style="font-size: 0.72rem; padding: 4px 10px; white-space: nowrap;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `}).join("")}const b=`
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
                value="${(d==null?void 0:d.nome)||""}" 
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
                value="${(d==null?void 0:d.instrumento)||""}" 
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
              value="${(d==null?void 0:d.descricao)||""}" 
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
                ${M.length} módulos
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
            ${D()}
          </div>
        </div>
      </form>
    `;he({title:x?`Editar Plano de Ensino: ${d.nome}`:"Novo Plano de Ensino",bodyHtml:b,modalClass:"modal-lg",confirmText:x?"Salvar Plano":"Criar Plano",onConfirm:()=>{var m,k,l;const u=(m=document.getElementById("plan-nome"))==null?void 0:m.value.trim(),v=(k=document.getElementById("plan-instrumento"))==null?void 0:k.value.trim(),I=(l=document.getElementById("plan-desc"))==null?void 0:l.value.trim();if(!u)return N("Preencha o nome do plano de ensino.","error"),!1;const C=M.map((y,p)=>({id:y.id||`mod_${Date.now()}_${p}`,ordem:p+1,titulo:y.titulo.trim()||`Módulo ${p+1}`,descricao:y.descricao,aulas:(y.aulas||[]).map((i,r)=>({id:i.id||`aul_${Date.now()}_${p}_${r}`,ordem:r+1,titulo:i.titulo.trim()||`Aula ${r+1}`,conteudo:i.conteudo,duracaoMinutos:i.duracaoMinutos}))})),f=(t==null?void 0:t.nome)||"Administrador";return x&&d?(L.updatePlan(d.id,{nome:u,descricao:I,instrumento:v||void 0,modulos:C},f),N(`Plano de ensino "${u}" atualizado!`,"success")):(L.addPlan({nome:u,descricao:I,instrumento:v||void 0,modulos:C},f),N(`Plano de ensino "${u}" cadastrado com sucesso!`,"success")),o(),!0}}),setTimeout(()=>{w()},50);function w(){const u=document.getElementById("plan-modules-list-container"),v=document.getElementById("modules-counter-badge");if(!u)return;const I=()=>{u.innerHTML=D(),v&&(v.textContent=`${M.length} módulos`),w()},C=document.getElementById("btn-quick-add-module"),f=document.getElementById("quick-add-module-input");C&&f&&(C.onclick=()=>{const m=f.value.trim();if(!m){N("Informe o nome do módulo.","error");return}M.push({id:`mod_${Date.now()}`,ordem:M.length+1,titulo:m,aulas:[]}),f.value="",I()},f.onkeydown=m=>{m.key==="Enter"&&(m.preventDefault(),C.click())}),u.querySelectorAll(".input-module-title").forEach(m=>{m.addEventListener("input",k=>{const l=parseInt(k.target.dataset.modIdx||"0",10);M[l]&&(M[l].titulo=k.target.value)})}),u.querySelectorAll(".btn-move-module-up").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10);if(l>0){const y=M[l];M[l]=M[l-1],M[l-1]=y,I()}})}),u.querySelectorAll(".btn-move-module-down").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10);if(l<M.length-1){const y=M[l];M[l]=M[l+1],M[l+1]=y,I()}})}),u.querySelectorAll(".btn-remove-module").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10);M.splice(l,1),I()})}),u.querySelectorAll(".input-lesson-title").forEach(m=>{m.addEventListener("input",k=>{var p;const l=parseInt(k.target.dataset.modIdx||"0",10),y=parseInt(k.target.dataset.aulaIdx||"0",10);(p=M[l])!=null&&p.aulas[y]&&(M[l].aulas[y].titulo=k.target.value)})}),u.querySelectorAll(".btn-add-lesson").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10),y=u.querySelector(`.input-new-lesson[data-mod-idx="${l}"]`),p=y==null?void 0:y.value.trim();if(!p){N("Informe o título da aula.","error");return}M[l]&&(M[l].aulas.push({id:`aul_${Date.now()}`,ordem:M[l].aulas.length+1,titulo:p}),I())})}),u.querySelectorAll(".btn-move-lesson-up").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10),y=parseInt(k.currentTarget.dataset.aulaIdx||"0",10);if(M[l]&&y>0){const p=M[l].aulas,i=p[y];p[y]=p[y-1],p[y-1]=i,I()}})}),u.querySelectorAll(".btn-move-lesson-down").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10),y=parseInt(k.currentTarget.dataset.aulaIdx||"0",10);if(M[l]){const p=M[l].aulas;if(y<p.length-1){const i=p[y];p[y]=p[y+1],p[y+1]=i,I()}}})}),u.querySelectorAll(".btn-remove-lesson").forEach(m=>{m.addEventListener("click",k=>{const l=parseInt(k.currentTarget.dataset.modIdx||"0",10),y=parseInt(k.currentTarget.dataset.aulaIdx||"0",10);M[l]&&(M[l].aulas.splice(y,1),I())})})}}return o(),e}function Pt(g){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s="todas",n="todas";const z=de(t,"financeiro","cadastrar"),$=de(t,"financeiro","alterar"),o=de(t,"financeiro","excluir");function P(){var f;const x=L.getPaymentPlans(),M=x.filter(m=>{const k=a.toLowerCase(),l=m.nome.toLowerCase().includes(k)||m.modalidade.toLowerCase().includes(k)||m.periodicidade.toLowerCase().includes(k)||m.descricao&&m.descricao.toLowerCase().includes(k),y=s==="todas"||m.modalidade===s,p=n==="todas"||m.periodicidade===n;return l&&y&&p}),D=x.length,b=x.filter(m=>m.modalidade==="individual").length,w=x.filter(m=>m.modalidade==="turma").length,u=x.filter(m=>m.ativo).length;e.innerHTML=`
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
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${D}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(96, 165, 250, 0.15); color: #60a5fa; display: flex; align-items: center; justify-content: center;">
            👤
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Individual</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${b}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(168, 85, 247, 0.15); color: #c084fc; display: flex; align-items: center; justify-content: center;">
            👥
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Turma</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${w}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center;">
            ✓
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Planos Ativos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${u}</div>
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
      ${M.length===0?`
          <div class="card" style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;">💳</div>
            <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-white); margin-bottom: 6px;">Nenhum plano de pagamento encontrado</div>
            <div style="font-size: 0.85rem;">Tente ajustar seus filtros de busca ou crie um novo plano acima.</div>
          </div>
          `:`
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
            ${M.map(m=>{const k=m.descontoSegundaMatricula??0,l=k>0?m.valorMensal*(1-k/100):m.valorMensal,y=m.modalidade==="individual";return`
                <div class="card" style="padding: 18px; display: flex; flex-direction: column; justify-content: space-between; position: relative; border-top: 3px solid ${y?"#3b82f6":"#a855f7"};">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 6px;">
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: ${y?"rgba(59, 130, 246, 0.15)":"rgba(168, 85, 247, 0.15)"}; color: ${y?"#60a5fa":"#c084fc"};">
                            ${y?"👤 Individual":"👥 Turma"}
                          </span>
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); color: var(--text-secondary);">
                            ${m.periodicidade.toUpperCase()}
                          </span>
                        </div>
                        <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--text-white);">${m.nome}</h3>
                      </div>

                      <span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${m.ativo?"#22c55e":"#ef4444"};" title="${m.ativo?"Ativo":"Inativo"}"></span>
                    </div>

                    ${m.descricao?`<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0 0 14px 0; line-height: 1.4;">${m.descricao}</p>`:""}

                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; margin-bottom: 16px;">
                      <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; margin-bottom: 2px;">Valor Mensal Regular</div>
                      <div style="font-size: 1.45rem; font-weight: 800; color: #4ade80;">
                        R$ ${m.valorMensal.toFixed(2).replace(".",",")}
                        <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-secondary);">/mês</span>
                      </div>

                      ${k>0?`
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-secondary);">
                              2ª Matrícula / Familiar (${k}% sugerido):
                            </span>
                            <span style="font-size: 0.84rem; font-weight: 600; color: var(--text-white);">
                              R$ ${l.toFixed(2).replace(".",",")}/mês
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
                    ${$?`<button class="btn btn-secondary btn-sm btn-edit-pp" data-id="${m.id}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${q.edit} Editar
                           </button>`:""}
                    ${o?`<button class="btn btn-danger btn-sm btn-del-pp" data-id="${m.id}" data-name="${m.nome}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${q.trash} Excluir
                           </button>`:""}
                  </div>
                </div>
                `}).join("")}
          </div>
          `}
    `;const v=e.querySelector("#pp-search");v==null||v.addEventListener("input",m=>{a=m.target.value,P()});const I=e.querySelector("#pp-filter-mod");I==null||I.addEventListener("change",m=>{s=m.target.value,P()});const C=e.querySelector("#pp-filter-per");C==null||C.addEventListener("change",m=>{n=m.target.value,P()}),(f=e.querySelector("#btn-novo-plano-pagamento"))==null||f.addEventListener("click",()=>{d()}),e.querySelectorAll(".btn-edit-pp").forEach(m=>{m.addEventListener("click",k=>{const l=k.currentTarget.dataset.id;if(l){const y=L.getPaymentPlanById(l);y&&d(y)}})}),e.querySelectorAll(".btn-del-pp").forEach(m=>{m.addEventListener("click",k=>{const l=k.currentTarget.dataset.id,y=k.currentTarget.dataset.name;l&&$e({title:"Excluir Plano de Pagamento",message:`Deseja realmente excluir o plano de pagamento "<strong>${y}</strong>"?<br><small style="color: var(--text-secondary);">Alunos vinculados continuarão com seu histórico financeiro.</small>`,onConfirm:()=>{L.deletePaymentPlan(l,(t==null?void 0:t.nome)||"Administrador"),N(`Plano de pagamento "${y}" excluído com sucesso!`,"info"),P()}})})})}function d(x){const M=!!x,D=(t==null?void 0:t.nome)||"Administrador",b=`
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
    `;he({title:M?"Editar Plano de Pagamento":"Novo Plano de Pagamento",bodyHtml:b,confirmText:M?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{var p,i,r,E,h,c,T;const w=(p=document.getElementById("pp-nome"))==null?void 0:p.value.trim(),u=(i=document.getElementById("pp-modalidade"))==null?void 0:i.value,v=(r=document.getElementById("pp-periodicidade"))==null?void 0:r.value,I=(E=document.getElementById("pp-valor"))==null?void 0:E.value.trim(),C=(h=document.getElementById("pp-desconto-segunda"))==null?void 0:h.value,f=parseFloat(C),m=!isNaN(f)&&f>=0?f:0,k=(c=document.getElementById("pp-desc"))==null?void 0:c.value.trim(),l=((T=document.getElementById("pp-ativo"))==null?void 0:T.checked)??!0;if(!w)return N("Preencha o nome do plano de pagamento.","error"),!1;const y=Je(I);return isNaN(y)||y<=0?(N("Informe um valor mensal válido superior a zero.","error"),!1):(M&&x?(L.updatePaymentPlan(x.id,{nome:w,modalidade:u,periodicidade:v,valorMensal:y,descontoSegundaMatricula:m,descricao:k,ativo:l},D),N(`Plano de pagamento "${w}" atualizado com sucesso!`,"success")):(L.addPaymentPlan({nome:w,modalidade:u,periodicidade:v,valorMensal:y,descontoSegundaMatricula:m,descricao:k,ativo:l},D),N(`Plano de pagamento "${w}" criado com sucesso!`,"success")),P(),!0)}}),setTimeout(()=>{const w=document.getElementById("pp-valor");w&&me(w,Ie)},50)}return P(),e}function Mt(g){const e=document.createElement("div"),t=ie.getCurrentUser();let a="",s="todos",n=new Date,z={column:"vencimento",direction:"desc"};const $=de(t,"financeiro","cadastrar"),o=de(t,"financeiro","alterar"),P=de(t,"financeiro","excluir");function d(){var r,E,h,c,T,R,j,U;const b=L.getPayments(),w=L.getStudents(),u=new Date,v=n!==null&&u.getMonth()===n.getMonth()&&u.getFullYear()===n.getFullYear(),I=n?`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`:"",C=b.filter(A=>A.status==="pago").reduce((A,B)=>A+B.valor,0),f=b.filter(A=>A.status==="pendente").reduce((A,B)=>A+B.valor,0),m=b.filter(A=>A.status==="atrasado").reduce((A,B)=>A+B.valor,0),k=w.filter(A=>A.status==="ativo"&&L.isStudentOverdue(A.id)),l=b.filter(A=>{const B=w.find(J=>J.id===A.alunoId),_=B?B.nome.toLowerCase():"",F=A.descricao.toLowerCase(),V=_.includes(a.toLowerCase())||F.includes(a.toLowerCase())||A.mesReferencia&&A.mesReferencia.includes(a),G=s==="todos"||A.status===s,W=!I||A.mesReferencia===I||A.dataVencimento.startsWith(I);return V&&G&&W}),y=Ee(l,z,{aluno:A=>{const B=w.find(_=>_.id===A.alunoId);return(B==null?void 0:B.nome)||""},descricao:A=>A.descricao,vencimento:A=>A.dataVencimento,valor:A=>A.valor,status:A=>A.status});e.innerHTML=`
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
            R$ ${C.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${b.filter(A=>A.status==="pago").length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${f.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${b.filter(A=>A.status==="pendente").length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${m.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${b.filter(A=>A.status==="atrasado").length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${k.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${w.filter(A=>A.status==="ativo").length} ativos</span>
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
            <button type="button" class="btn ${v?"btn-primary":"btn-secondary"}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
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
          Todos (${b.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="atrasado"?"btn-danger":"btn-secondary"} btn-quick-filter" data-status="atrasado" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="atrasado"?"color: #f87171; border-color: rgba(239, 68, 68, 0.3);":""}">
          ⚠️ Inadimplentes (${k.length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pendente"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pendente" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pendente"?"color: #fbbf24; border-color: rgba(245, 158, 11, 0.3);":""}">
          ⏳ A Vencer (${b.filter(A=>A.status==="pendente").length})
        </button>
        <button type="button" class="btn btn-sm ${s==="pago"?"btn-primary":"btn-secondary"} btn-quick-filter" data-status="pago" style="font-size: 0.76rem; padding: 6px 12px; ${s!=="pago"?"color: #34d399; border-color: rgba(16, 185, 129, 0.3);":""}">
          ✓ Pagos (${b.filter(A=>A.status==="pago").length})
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
                ${k.map(A=>{const B=b.filter(J=>J.alunoId===A.id&&J.status==="atrasado"),_=B.reduce((J,Y)=>J+Y.valor,0),F=(A.telefone||"").replace(/\D/g,""),V=F.length<=11?`55${F}`:F,G=encodeURIComponent(`Olá, ${A.nome}! Identificamos pendência de mensalidade na Acusticamente. Segue a chave PIX para regularização.`),W=F?`https://wa.me/${V}?text=${G}`:"";return`
                      <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-weight: 600; color: var(--text-white); font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${A.nome}
                          </div>
                          <div style="font-size: 0.74rem; color: #f87171; font-weight: 700; margin-top: 2px;">
                            ${B.length} fatura(s) atrasada(s) &bull; R$ ${_.toFixed(2)}
                          </div>
                          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;">
                            ${A.telefone||"Sem telefone"}
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
          <h3 class="panel-card-title">Lançamentos Financeiros (${y.length})</h3>
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
              ${y.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>':y.map(A=>{const B=w.find(G=>G.id===A.alunoId),_=A.status==="pago",F=A.status==="atrasado";let V="";return _?V='<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>':F?V='<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>':V='<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>',`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${B!=null&&B.nome?B.nome[0]:"?"}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${(B==null?void 0:B.nome)||"Aluno não identificado"}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${A.descricao}${A.mesReferencia?` / ${A.mesReferencia}`:""}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${F?"#f87171":"var(--text-white)"}; font-weight: ${F?"700":"normal"};">
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
                                        ${q.check}
                                      </button>
                                    `:""}

                                ${_?`
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${A.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `:""}

                                ${o?`
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
    `,(r=e.querySelector("#fin-btn-prev-month"))==null||r.addEventListener("click",()=>{n||(n=new Date),n=new Date(n.getFullYear(),n.getMonth()-1,1),d()}),(E=e.querySelector("#fin-btn-next-month"))==null||E.addEventListener("click",()=>{n||(n=new Date),n=new Date(n.getFullYear(),n.getMonth()+1,1),d()}),(h=e.querySelector("#fin-btn-current-month"))==null||h.addEventListener("click",()=>{n=new Date,d()}),(c=e.querySelector("#fin-btn-all-months"))==null||c.addEventListener("click",()=>{n=null,d()}),Ae(e,z,A=>{z=A,d()});const p=e.querySelector("#fin-search-input");p==null||p.addEventListener("input",A=>{a=A.target.value,d();const B=e.querySelector("#fin-search-input");B&&(B.focus(),B.selectionStart=B.selectionEnd=B.value.length)}),(T=e.querySelector("#btn-clear-fin-search"))==null||T.addEventListener("click",()=>{a="",d()});const i=e.querySelector("#fin-status-filter");i==null||i.addEventListener("change",()=>{s=i.value,d()}),e.querySelectorAll(".btn-quick-filter").forEach(A=>{A.addEventListener("click",B=>{s=B.currentTarget.dataset.status,d()})}),(R=e.querySelector("#btn-limpar-status"))==null||R.addEventListener("click",()=>{s="todos",d()}),(j=e.querySelector("#btn-gerar-lote"))==null||j.addEventListener("click",()=>{M()}),(U=e.querySelector("#btn-novo-lancamento"))==null||U.addEventListener("click",()=>{D()}),e.querySelectorAll(".btn-action-baixa").forEach(A=>{A.addEventListener("click",B=>{const _=B.currentTarget.dataset.id,F=b.find(V=>V.id===_);F&&x(F)})}),e.querySelectorAll(".btn-action-recibo").forEach(A=>{A.addEventListener("click",B=>{const _=B.currentTarget.dataset.id,F=b.find(V=>V.id===_);if(F){const V=w.find(G=>G.id===F.alunoId);V&&rt(F,V)}})}),e.querySelectorAll(".btn-action-edit").forEach(A=>{A.addEventListener("click",B=>{const _=B.currentTarget.dataset.id,F=b.find(V=>V.id===_);F&&D(F)})}),e.querySelectorAll(".btn-action-delete").forEach(A=>{A.addEventListener("click",B=>{const _=B.currentTarget.dataset.id,F=b.find(V=>V.id===_);F&&$e({title:"Excluir Lançamento Financeiro",message:`Deseja realmente excluir o lançamento "<strong>${F.descricao}</strong>" no valor de <strong>R$ ${F.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,onConfirm:()=>{L.deletePayment(F.id,(t==null?void 0:t.nome)||"Administrador"),N("Lançamento excluído com sucesso!","info"),d()}})})})}function x(b){const w=L.getStudents().find(I=>I.id===b.alunoId),u=L.getTodayDateString(),v=`
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${b.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${b.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${(w==null?void 0:w.nome)||"N/A"}</strong> &bull; Vencimento: ${b.dataVencimento.split("-").reverse().join("/")}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${u}" required />
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
    `;he({title:"Confirmar Baixa de Pagamento",bodyHtml:v,modalClass:"modal-sm",confirmText:"Confirmar e Quitar",confirmBtnClass:"btn-primary",cancelText:"Cancelar",onConfirm:()=>{const I=document.getElementById("modal-baixa-data").value,C=document.getElementById("modal-baixa-forma").value,f=document.getElementById("modal-baixa-obs").value;return I?(L.darBaixaPayment(b.id,I,C,(t==null?void 0:t.nome)||"Administrador",f),N(`Baixa efetuada com sucesso! R$ ${b.valor.toFixed(2)} recebido.`,"success"),d(),!0):(N("Informe a data de recebimento.","error"),!1)}})}function M(){const b=new Date,w=b.getFullYear(),u=b.getMonth()+1,v=`
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
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${w}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${u===1?"selected":""}>01 - Janeiro</option>
              <option value="2" ${u===2?"selected":""}>02 - Fevereiro</option>
              <option value="3" ${u===3?"selected":""}>03 - Março</option>
              <option value="4" ${u===4?"selected":""}>04 - Abril</option>
              <option value="5" ${u===5?"selected":""}>05 - Maio</option>
              <option value="6" ${u===6?"selected":""}>06 - Junho</option>
              <option value="7" ${u===7?"selected":""}>07 - Julho</option>
              <option value="8" ${u===8?"selected":""}>08 - Agosto</option>
              <option value="9" ${u===9?"selected":""}>09 - Setembro</option>
              <option value="10" ${u===10?"selected":""}>10 - Outubro</option>
              <option value="11" ${u===11?"selected":""}>11 - Novembro</option>
              <option value="12" ${u===12?"selected":""}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;he({title:"Gerar Mensalidades em Lote",bodyHtml:v,modalClass:"modal-sm",confirmText:"Gerar Faturas Agora",cancelText:"Cancelar",onConfirm:()=>{const I=parseInt(document.getElementById("lote-ano").value,10),C=parseInt(document.getElementById("lote-mes").value,10);if(!I||!C)return N("Selecione ano e mês válidos.","error"),!1;const f=L.gerarMensalidadesMes(I,C,(t==null?void 0:t.nome)||"Administrador");return f.criadas===0&&f.puladas>0?N(`Todas as ${f.puladas} mensalidades deste mês já estavam criadas!`,"info"):N(`Sucesso: ${f.criadas} mensalidade(s) gerada(s)! (${f.puladas} já existentes puladas)`,"success"),d(),!0}})}function D(b){const w=!!b,u=L.getStudents(),v=L.getTodayDateString(),I=u.map(f=>`<option value="${f.id}" ${(b==null?void 0:b.alunoId)===f.id?"selected":""}>${f.nome} (${f.instrumentoPrincipal||"Geral"})</option>`).join(""),C=`
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${w?"disabled":""}>
            <option value="">Selecione um aluno...</option>
            ${I}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${(b==null?void 0:b.descricao)||""}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (AAAA-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" maxlength="7" value="${(b==null?void 0:b.mesReferencia)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="text" id="pay-valor" class="form-input" placeholder="0,00" value="${b?Ie(b.valor):"280,00"}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${(b==null?void 0:b.dataVencimento)||v}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${(b==null?void 0:b.status)==="pendente"?"selected":""}>Pendente (A Vencer)</option>
              <option value="pago" ${(b==null?void 0:b.status)==="pago"?"selected":""}>Pago (Quitado)</option>
              <option value="atrasado" ${(b==null?void 0:b.status)==="atrasado"?"selected":""}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${(b==null?void 0:b.formaPagamento)==="pix"?"selected":""}>PIX</option>
              <option value="cartao_credito" ${(b==null?void 0:b.formaPagamento)==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
              <option value="cartao_debito" ${(b==null?void 0:b.formaPagamento)==="cartao_debito"?"selected":""}>Cartão de Débito</option>
              <option value="dinheiro" ${(b==null?void 0:b.formaPagamento)==="dinheiro"?"selected":""}>Dinheiro</option>
              <option value="boleto" ${(b==null?void 0:b.formaPagamento)==="boleto"?"selected":""}>Boleto</option>
              <option value="transferencia" ${(b==null?void 0:b.formaPagamento)==="transferencia"?"selected":""}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${(b==null?void 0:b.observacoes)||""}" />
        </div>
      </form>
    `;he({title:w?"Editar Lançamento":"Novo Lançamento Financeiro",bodyHtml:C,modalClass:"modal-md",confirmText:w?"Salvar Alterações":"Cadastrar Lançamento",cancelText:"Cancelar",onConfirm:()=>{const f=w&&b?b.alunoId:document.getElementById("pay-aluno").value,m=document.getElementById("pay-desc").value.trim(),k=document.getElementById("pay-mes").value.trim()||void 0,l=document.getElementById("pay-valor").value,y=Je(l),p=document.getElementById("pay-vencimento").value,i=document.getElementById("pay-status").value,r=document.getElementById("pay-forma").value||void 0,E=document.getElementById("pay-obs").value.trim()||void 0;if(!f)return N("Selecione um aluno.","error"),!1;if(!m)return N("Informe a descrição do lançamento.","error"),!1;if(k&&!/^\d{4}-\d{2}$/.test(k))return N("Mês de referência deve estar no formato AAAA-MM (Ex: 2026-10).","error"),!1;if(y<=0)return N("Informe um valor válido maior que zero.","error"),!1;if(!p)return N("Informe a data de vencimento.","error"),!1;const h=(t==null?void 0:t.nome)||"Administrador";let c=i;return c!=="pago"&&(c=p<v?"atrasado":"pendente"),w&&b?(L.updatePayment(b.id,{descricao:m,mesReferencia:k,valor:y,dataVencimento:p,status:c,formaPagamento:r,dataPagamento:c==="pago"?b.dataPagamento||v:void 0,observacoes:E},h),N("Lançamento atualizado com sucesso!","success")):(L.addPayment({alunoId:f,descricao:m,mesReferencia:k,valor:y,dataVencimento:p,status:c,formaPagamento:r,dataPagamento:c==="pago"?v:void 0,observacoes:E},h),N("Novo lançamento cadastrado com sucesso!","success")),d(),!0}}),setTimeout(()=>{const f=document.getElementById("pay-mes");f&&me(f,gt);const m=document.getElementById("pay-valor");m&&me(m,Ie);const k=document.getElementById("pay-vencimento"),l=document.getElementById("pay-status");if(k==null||k.addEventListener("change",()=>{l&&l.value!=="pago"&&(l.value=k.value<v?"atrasado":"pendente")}),!w){const y=document.getElementById("pay-aluno");y==null||y.addEventListener("change",()=>{const p=u.find(i=>i.id===y.value);if(p){const i=document.getElementById("pay-valor");i&&typeof p.valorMensalidade=="number"&&(i.value=Ie(p.valorMensalidade))}})}},50)}return d(),e}function Lt(g){const e=document.createElement("div"),t=ie.getCurrentUser(),a=de(t,"relatorios","gerar");let s="alunos",n="todos",z="todos",$="todos",o="todos",P="todos",d="nome_asc",x={column:"nome",direction:"asc"},M="",D="",b="",w="",u="todos",v="todos",I="todos",C="vencimento_asc",f={column:"vencimento",direction:"asc"};function m(){var te,Z,ee,ae,O,re,ne,ge,H,oe,le,ue,pe,we,ce,Ce,ke,ze,Re;const i=L.getSettings(),r=L.getStudents(),E=L.getPlans(),h=L.getPayments(),c=Array.from(new Set(r.map(S=>S.instrumentoPrincipal).filter(Boolean))).sort();let T=r.filter(S=>{if(n!=="todos"&&S.status!==n||z!=="todos"&&S.instrumentoPrincipal!==z||$!=="todos"&&S.nivelMusical!==$||o!=="todos"&&S.planoId!==o)return!1;if(P!=="todos"){const se=L.isStudentOverdue(S.id);if(P==="em_dia"&&se||P==="atrasado"&&!se)return!1}return!0});T=Ee(T,x,{nome:S=>S.nome,instrumento:S=>S.instrumentoPrincipal||"",contato:S=>S.telefone||"",plano:S=>{var se;return((se=E.find(ve=>ve.id===S.planoId))==null?void 0:se.nome)||""},status:S=>S.status,mensalidade:S=>L.isStudentOverdue(S.id)?1:0,criadoEm:S=>S.criadoEm||""});const R=T.length,j=T.filter(S=>S.status==="ativo").length,U=T.filter(S=>S.status==="inativo").length,A=T.filter(S=>L.isStudentOverdue(S.id)).length,B=new Date().toISOString().slice(0,10);let _=h.filter(S=>{if(M&&S.dataVencimento<M||D&&S.dataVencimento>D)return!1;const se=S.mesReferencia||S.dataVencimento.slice(0,7);if(b&&se<b||w&&se>w||v!=="todos"&&S.alunoId!==v||I!=="todos"&&S.formaPagamento!==I)return!1;const ve=S.status!=="pago"&&S.dataVencimento<B;return!(u==="pago"&&S.status!=="pago"||u==="pendente"&&(S.status==="pago"||ve)||u==="atrasado"&&!ve)});const F=new Map(r.map(S=>[S.id,S.nome]));_=Ee(_,f,{aluno:S=>F.get(S.alunoId)||"",descricao:S=>S.descricao,vencimento:S=>S.dataVencimento,valor:S=>S.valor,status:S=>S.status==="pago"?"pago":S.dataVencimento<B?"atrasado":"pendente"});const V=_.length,G=_.reduce((S,se)=>S+se.valor,0),W=_.filter(S=>S.status==="pago").reduce((S,se)=>S+se.valor,0),J=_.filter(S=>S.status!=="pago").reduce((S,se)=>S+se.valor,0);e.innerHTML=`
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
                ${c.map(S=>`<option value="${S}" ${z===S?"selected":""}>${S}</option>`).join("")}
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
                ${E.map(S=>`<option value="${S.id}" ${o===S.id?"selected":""}>${S.nome}</option>`).join("")}
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
                  ${X("Aluno","nome",x,{extraStyle:"min-width: 140px;"})}
                  ${X("Instrumento","instrumento",x,{extraClass:"col-hide-md",extraStyle:"width: 170px;"})}
                  ${X("Contato","contato",x,{extraClass:"col-hide-sm",extraStyle:"width: 130px;"})}
                  ${X("Plano","plano",x,{extraClass:"col-hide-sm",extraStyle:"width: 160px;"})}
                  ${X("Status","status",x,{extraClass:"col-hide-xs",extraStyle:"width: 100px;"})}
                  ${X("Mensalidade","mensalidade",x,{extraStyle:"width: 120px;"})}
                </tr>
              </thead>
              <tbody>
                ${T.length===0?'<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>':T.map(S=>{const se=E.find(lt=>lt.id===S.planoId),ve=S.status==="ativo",it=L.isStudentOverdue(S.id);return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${S.nome}</td>
                              <td class="col-hide-md">${S.instrumentoPrincipal||"Geral"}</td>
                              <td class="col-hide-sm" style="color: var(--text-secondary);">${S.telefone||"-"}</td>
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
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${M}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${D}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${b}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${w}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Lançamento</label>
              <select id="filtro-fin-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${u==="todos"?"selected":""}>Todos os Status</option>
                <option value="pago" ${u==="pago"?"selected":""}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${u==="pendente"?"selected":""}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${u==="atrasado"?"selected":""}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${v==="todos"?"selected":""}>Todos os Alunos</option>
                ${r.map(S=>`<option value="${S.id}" ${v===S.id?"selected":""}>${S.nome}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${I==="todos"?"selected":""}>Todas as Formas</option>
                <option value="pix" ${I==="pix"?"selected":""}>PIX</option>
                <option value="cartao_credito" ${I==="cartao_credito"?"selected":""}>Cartão de Crédito</option>
                <option value="cartao_debito" ${I==="cartao_debito"?"selected":""}>Cartão de Débito</option>
                <option value="boleto" ${I==="boleto"?"selected":""}>Boleto</option>
                <option value="dinheiro" ${I==="dinheiro"?"selected":""}>Dinheiro</option>
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
                  ${X("Aluno","aluno",f,{extraStyle:"min-width: 140px;"})}
                  ${X("Descrição","descricao",f,{extraClass:"col-hide-md",extraStyle:"width: 180px;"})}
                  ${X("Vencimento","vencimento",f,{extraClass:"col-hide-sm",extraStyle:"width: 130px;"})}
                  ${X("Valor","valor",f,{extraStyle:"width: 110px;"})}
                  ${X("Status","status",f,{extraClass:"col-hide-xs",extraStyle:"width: 100px;"})}
                </tr>
              </thead>
              <tbody>
                ${_.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>':_.map(S=>{const se=S.status==="pago",ve=!se&&S.dataVencimento<B;return`
                            <tr>
                              <td style="font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${F.get(S.alunoId)||"Aluno"}</td>
                              <td class="col-hide-md" style="color: var(--text-secondary);">${S.descricao}${S.mesReferencia?` / ${S.mesReferencia}`:""}</td>
                              <td class="col-hide-sm">${S.dataVencimento.split("-").reverse().join("/")}</td>
                              <td style="font-weight: 700;">R$ ${S.valor.toFixed(2)}</td>
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
    `,(te=e.querySelector("#btn-tab-rel-alunos"))==null||te.addEventListener("click",()=>{s="alunos",m()}),(Z=e.querySelector("#btn-tab-rel-financeiro"))==null||Z.addEventListener("click",()=>{s="financeiro",m()}),(ee=e.querySelector("#filtro-aluno-status"))==null||ee.addEventListener("change",S=>{n=S.target.value,m()}),(ae=e.querySelector("#filtro-aluno-instrumento"))==null||ae.addEventListener("change",S=>{z=S.target.value,m()}),(O=e.querySelector("#filtro-aluno-nivel"))==null||O.addEventListener("change",S=>{$=S.target.value,m()}),(re=e.querySelector("#filtro-aluno-plano"))==null||re.addEventListener("change",S=>{o=S.target.value,m()}),(ne=e.querySelector("#filtro-aluno-financeiro"))==null||ne.addEventListener("change",S=>{P=S.target.value,m()}),(ge=e.querySelector("#filtro-aluno-ordem"))==null||ge.addEventListener("change",S=>{d=S.target.value,m()}),(H=e.querySelector("#btn-limpar-filtros-alunos"))==null||H.addEventListener("click",()=>{n="todos",z="todos",$="todos",o="todos",P="todos",d="nome_asc",m()}),(oe=e.querySelector("#filtro-fin-dataini"))==null||oe.addEventListener("change",S=>{M=S.target.value,m()}),(le=e.querySelector("#filtro-fin-datafim"))==null||le.addEventListener("change",S=>{D=S.target.value,m()}),(ue=e.querySelector("#filtro-fin-mesref-ini"))==null||ue.addEventListener("change",S=>{b=S.target.value,m()}),(pe=e.querySelector("#filtro-fin-mesref-fim"))==null||pe.addEventListener("change",S=>{w=S.target.value,m()}),(we=e.querySelector("#filtro-fin-status"))==null||we.addEventListener("change",S=>{u=S.target.value,m()}),(ce=e.querySelector("#filtro-fin-aluno"))==null||ce.addEventListener("change",S=>{v=S.target.value,m()}),(Ce=e.querySelector("#filtro-fin-metodo"))==null||Ce.addEventListener("change",S=>{I=S.target.value,m()}),(ke=e.querySelector("#filtro-fin-ordem"))==null||ke.addEventListener("change",S=>{C=S.target.value,m()}),(ze=e.querySelector("#btn-limpar-filtros-fin"))==null||ze.addEventListener("click",()=>{M="",D="",b="",w="",u="todos",v="todos",I="todos",C="vencimento_asc",m()}),(Re=e.querySelector("#btn-gerar-pdf"))==null||Re.addEventListener("click",async()=>{if(!a){N("Você não possui permissão para emitir relatórios.","error");return}const S=e.querySelector("#btn-gerar-pdf"),se=S?S.innerHTML:"";S&&(S.disabled=!0,S.innerHTML="<span>⏳</span> Gerando PDF...");try{s==="alunos"?await y(i,T,E):await p(i,_,r,{mesIni:b,mesFim:w}),N("PDF gerado com sucesso!","success")}catch(ve){console.error("Erro ao gerar PDF:",ve),N("Ocorreu um erro ao gerar o documento PDF.","error")}finally{S&&(S.disabled=!1,S.innerHTML=se)}});const Y=e.querySelector("#tab-rel-alunos table");Y&&Ae(Y,x,S=>{x=S,m()});const K=e.querySelector("#tab-rel-financeiro table");K&&Ae(K,f,S=>{f=S,m()})}function k(i){return new Promise(r=>{if(i&&i.trim()!==""){const E=new Image;E.crossOrigin="Anonymous",E.onload=()=>{try{const h=document.createElement("canvas");h.width=160,h.height=160;const c=h.getContext("2d");if(!c){r(i);return}const T=24;c.fillStyle="#ffffff",c.beginPath(),c.moveTo(T,0),c.lineTo(160-T,0),c.quadraticCurveTo(160,0,160,T),c.lineTo(160,160-T),c.quadraticCurveTo(160,160,160-T,160),c.lineTo(T,160),c.quadraticCurveTo(0,160,0,160-T),c.lineTo(0,T),c.quadraticCurveTo(0,0,T,0),c.closePath(),c.fill();const R=12,j=160-R*2,U=160-R*2;let A=j,B=U;const _=E.width/E.height;_>1?B=j/_:A=U*_;const F=R+(j-A)/2,V=R+(U-B)/2;c.drawImage(E,F,V,A,B),r(h.toDataURL("image/png"))}catch{r(i)}},E.onerror=()=>{l().then(r)},E.src=i;return}l().then(r)})}function l(){return new Promise(i=>{try{const r=document.createElement("canvas");r.width=160,r.height=160;const E=r.getContext("2d");if(!E){i("");return}const h=32;E.fillStyle="#181c2b",E.beginPath(),E.moveTo(h,0),E.lineTo(160-h,0),E.quadraticCurveTo(160,0,160,h),E.lineTo(160,160-h),E.quadraticCurveTo(160,160,160-h,160),E.lineTo(h,160),E.quadraticCurveTo(0,160,0,160-h),E.lineTo(0,h),E.quadraticCurveTo(0,0,h,0),E.closePath(),E.fill(),E.lineWidth=3,E.strokeStyle="#2d3748",E.stroke();const c=new Image,T=`
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
        `,R=new Blob([T],{type:"image/svg+xml;charset=utf-8"}),j=URL.createObjectURL(R);c.onload=()=>{E.drawImage(c,20,20,120,120),URL.revokeObjectURL(j),i(r.toDataURL("image/png"))},c.onerror=()=>{URL.revokeObjectURL(j),i("")},c.src=j}catch{i("")}})}async function y(i,r,E){const h=new Ge({orientation:"portrait",unit:"mm",format:"a4"}),c=new Date().toLocaleString("pt-BR"),T=i.nomeMenu||i.nomeFantasia||i.nomeEscola||"ACUSTICAMENTE",R=i.razaoSocial||"Acusticamente Ensino Musical Ltda",j=i.cnpj?`CNPJ: ${i.cnpj}`:"",U=[i.telefoneContato,i.emailContato].filter(Boolean).join(" • "),A=[i.logradouro?`${i.logradouro}, ${i.numero||"s/n"}`:"",i.complemento,i.bairro,i.cidade?`${i.cidade} - ${i.estado||"SP"}`:"",i.cep?`CEP: ${i.cep}`:""].filter(Boolean).join(" • "),B=await k(i.logotipoCustomizado);B&&h.addImage(B,"PNG",14,12,17,17);const _=B?35:14;h.setFont("helvetica","bold"),h.setFontSize(13),h.setTextColor(15,23,42),h.text(T,_,17),h.setFont("helvetica","normal"),h.setFontSize(8),h.setTextColor(71,85,105),h.text([R,j].filter(Boolean).join(" • "),_,21.5),h.setFontSize(7.5),h.setTextColor(100,116,139),A&&h.text(A,_,25.5),U&&h.text(U,_,A?29.5:25.5),h.setFont("helvetica","bold"),h.setFontSize(12),h.setTextColor(217,72,59),h.text("RELATÓRIO DE ALUNOS",196,17,{align:"right"}),h.setFont("helvetica","normal"),h.setFontSize(8),h.setTextColor(100,116,139),h.text(`Emissão: ${c}`,196,22,{align:"right"}),h.text(`Total: ${r.length} aluno(s)`,196,26.5,{align:"right"}),h.setDrawColor(203,213,225),h.setLineWidth(.4),h.line(14,33,196,33);const F=r.filter(O=>O.status==="ativo").length,V=r.filter(O=>O.status==="inativo").length,G=r.filter(O=>L.isStudentOverdue(O.id)).length,W=[{label:"TOTAL DE ALUNOS",value:`${r.length}`,color:[15,23,42]},{label:"ALUNOS ATIVOS",value:`${F}`,color:[22,163,74]},{label:"ALUNOS INATIVOS",value:`${V}`,color:[202,138,4]},{label:"INADIMPLENTES",value:`${G}`,color:[220,38,38]}],J=43,Y=12,K=36;W.forEach((O,re)=>{const ne=14+re*(J+3);h.setFillColor(248,250,252),h.roundedRect(ne,K,J,Y,1.5,1.5,"F"),h.setDrawColor(226,232,240),h.roundedRect(ne,K,J,Y,1.5,1.5,"S"),h.setFont("helvetica","bold"),h.setFontSize(6.5),h.setTextColor(100,116,139),h.text(O.label,ne+3,K+4),h.setFontSize(10.5),h.setTextColor(O.color[0],O.color[1],O.color[2]),h.text(O.value,ne+3,K+9.5)});const te=r.map((O,re)=>{const ne=E.find(oe=>oe.id===O.planoId),ge=O.status==="ativo",H=L.isStudentOverdue(O.id);return[(re+1).toString(),O.nome,O.instrumentoPrincipal||"Música Geral",O.telefone||"-",(ne==null?void 0:ne.nome)||"-",ge?"Ativo":"Inativo",H?"Atrasado":"Em dia"]});We(h,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Nome do Aluno","Instrumento","Telefone","Plano de Ensino","Status","Financeiro"]],body:te.length>0?te:[["-","Nenhum registro selecionado","-","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[24,28,43],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:32},3:{cellWidth:28},4:{cellWidth:34},5:{cellWidth:15,halign:"center"},6:{cellWidth:15,halign:"center"}},didParseCell:O=>{O.section==="body"&&(O.column.index===5&&(O.cell.raw==="Ativo"?(O.cell.styles.textColor=[22,163,74],O.cell.styles.fontStyle="bold"):O.cell.styles.textColor=[202,138,4]),O.column.index===6&&(O.cell.raw==="Atrasado"?(O.cell.styles.textColor=[220,38,38],O.cell.styles.fontStyle="bold"):O.cell.styles.textColor=[22,163,74]))}});const Z=h.internal.getNumberOfPages();for(let O=1;O<=Z;O++)h.setPage(O),h.setDrawColor(226,232,240),h.setLineWidth(.3),h.line(14,287,196,287),h.setFont("helvetica","normal"),h.setFontSize(7),h.setTextColor(148,163,184),h.text(`${T} • Sistema de Gestão Escolar & Pedagógica`,14,292),h.text(`Página ${O} de ${Z}`,196,292,{align:"right"});const ee=h.output("blob"),ae=URL.createObjectURL(ee);window.open(ae,"_blank")}async function p(i,r,E,h){const c=new Ge({orientation:"portrait",unit:"mm",format:"a4"}),T=new Map(E.map(H=>[H.id,H.nome])),R=new Date().toLocaleString("pt-BR"),j=i.nomeMenu||i.nomeFantasia||i.nomeEscola||"ACUSTICAMENTE",U=i.razaoSocial||"Acusticamente Ensino Musical Ltda",A=i.cnpj?`CNPJ: ${i.cnpj}`:"",B=[i.telefoneContato,i.emailContato].filter(Boolean).join(" • "),_=[i.logradouro?`${i.logradouro}, ${i.numero||"s/n"}`:"",i.complemento,i.bairro,i.cidade?`${i.cidade} - ${i.estado||"SP"}`:"",i.cep?`CEP: ${i.cep}`:""].filter(Boolean).join(" • "),F=new Date().toISOString().slice(0,10),V=r.reduce((H,oe)=>H+oe.valor,0),G=r.filter(H=>H.status==="pago").reduce((H,oe)=>H+oe.valor,0),W=r.filter(H=>H.status!=="pago").reduce((H,oe)=>H+oe.valor,0),J=await k(i.logotipoCustomizado);J&&c.addImage(J,"PNG",14,12,17,17);const Y=J?35:14;c.setFont("helvetica","bold"),c.setFontSize(13),c.setTextColor(15,23,42),c.text(j,Y,17),c.setFont("helvetica","normal"),c.setFontSize(8),c.setTextColor(71,85,105),c.text([U,A].filter(Boolean).join(" • "),Y,21.5),c.setFontSize(7.5),c.setTextColor(100,116,139),_&&c.text(_,Y,25.5),B&&c.text(B,Y,_?29.5:25.5),c.setFont("helvetica","bold"),c.setFontSize(12),c.setTextColor(5,150,105),c.text("RELATÓRIO FINANCEIRO",196,17,{align:"right"}),c.setFont("helvetica","normal"),c.setFontSize(8),c.setTextColor(100,116,139),c.text(`Emissão: ${R}`,196,22,{align:"right"});let K=`Total: ${r.length} registro(s)`;h!=null&&h.mesIni&&(h!=null&&h.mesFim)?K=`Ref: ${h.mesIni} a ${h.mesFim} • ${r.length} reg.`:h!=null&&h.mesIni?K=`Ref: a partir de ${h.mesIni} • ${r.length} reg.`:h!=null&&h.mesFim&&(K=`Ref: até ${h.mesFim} • ${r.length} reg.`),c.text(K,196,26.5,{align:"right"}),c.setDrawColor(203,213,225),c.setLineWidth(.4),c.line(14,33,196,33);const te=[{label:"LANÇAMENTOS",value:`${r.length}`,color:[15,23,42]},{label:"MONTANTE GERAL",value:`R$ ${V.toFixed(2)}`,color:[15,23,42]},{label:"TOTAL RECEBIDO",value:`R$ ${G.toFixed(2)}`,color:[22,163,74]},{label:"PENDENTE / ATRASO",value:`R$ ${W.toFixed(2)}`,color:[220,38,38]}],Z=43,ee=12,ae=36;te.forEach((H,oe)=>{const le=14+oe*(Z+3);c.setFillColor(248,250,252),c.roundedRect(le,ae,Z,ee,1.5,1.5,"F"),c.setDrawColor(226,232,240),c.roundedRect(le,ae,Z,ee,1.5,1.5,"S"),c.setFont("helvetica","bold"),c.setFontSize(6.5),c.setTextColor(100,116,139),c.text(H.label,le+3,ae+4),c.setFontSize(10),c.setTextColor(H.color[0],H.color[1],H.color[2]),c.text(H.value,le+3,ae+9.5)});const O=r.map((H,oe)=>{const le=H.status==="pago",ue=!le&&H.dataVencimento<F,pe=le?"Pago":ue?"Atrasado":"Pendente",we=H.descricao+(H.mesReferencia?` / ${H.mesReferencia}`:""),ce=H.dataVencimento.split("-").reverse().join("/");return[(oe+1).toString(),T.get(H.alunoId)||"Aluno",we,ce,`R$ ${H.valor.toFixed(2)}`,pe]});We(c,{startY:52,margin:{left:14,right:14,bottom:18},head:[["#","Aluno","Descrição / Referência","Vencimento","Valor (R$)","Status"]],body:O.length>0?O:[["-","Nenhum lançamento selecionado","-","-","-","-"]],theme:"grid",headStyles:{fillColor:[15,23,42],textColor:[255,255,255],fontStyle:"bold",fontSize:7.5,halign:"left",valign:"middle"},styles:{font:"helvetica",fontSize:7.5,cellPadding:2,textColor:[30,41,59],lineColor:[226,232,240],lineWidth:.1},alternateRowStyles:{fillColor:[248,250,252]},columnStyles:{0:{cellWidth:8,halign:"center",textColor:[148,163,184]},1:{cellWidth:50,fontStyle:"bold"},2:{cellWidth:54},3:{cellWidth:26,halign:"center"},4:{cellWidth:26,halign:"right",fontStyle:"bold"},5:{cellWidth:18,halign:"center"}},didParseCell:H=>{H.section==="body"&&H.column.index===5&&(H.cell.raw==="Pago"?(H.cell.styles.textColor=[22,163,74],H.cell.styles.fontStyle="bold"):H.cell.raw==="Atrasado"?(H.cell.styles.textColor=[220,38,38],H.cell.styles.fontStyle="bold"):H.cell.styles.textColor=[202,138,4])}});const re=c.internal.getNumberOfPages();for(let H=1;H<=re;H++)c.setPage(H),c.setDrawColor(226,232,240),c.setLineWidth(.3),c.line(14,287,196,287),c.setFont("helvetica","normal"),c.setFontSize(7),c.setTextColor(148,163,184),c.text(`${j} • Gestão Financeira & Escolar`,14,292),c.text(`Página ${H} de ${re}`,196,292,{align:"right"});const ne=c.output("blob"),ge=URL.createObjectURL(ne);window.open(ge,"_blank")}return m(),e}function Tt(g){const e=document.createElement("div");let t=new Date,a="",s={column:"dataHora",direction:"desc"};const n=d=>d.toString().padStart(2,"0");function z(d){const x=d.getDate(),D=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][d.getMonth()],b=d.getFullYear(),w=new Date,u=w.getDate()===x&&w.getMonth()===d.getMonth()&&w.getFullYear()===b;return`${x} de ${D} de ${b}${u?" (Hoje)":""}`}function $(d){return`${d.getFullYear()}-${n(d.getMonth()+1)}-${n(d.getDate())}`}function o(){var C,f,m,k,l,y,p,i;const d=Q.getLogs(),x=new Date,M=`${n(x.getDate())}/${n(x.getMonth()+1)}/${x.getFullYear()}`,D=d.filter(r=>{var E;return(E=r.dataHoraFormatada)==null?void 0:E.startsWith(M)}).length,b=t?`${n(t.getDate())}/${n(t.getMonth()+1)}/${t.getFullYear()}`:"",w=t!==null&&x.getDate()===t.getDate()&&x.getMonth()===t.getMonth()&&x.getFullYear()===t.getFullYear(),u=d.filter(r=>{const E=!t||r.dataHoraFormatada&&r.dataHoraFormatada.startsWith(b)||r.dataHora&&r.dataHora.startsWith($(t)),h=a===""||r.tela.toLowerCase().includes(a.toLowerCase())||r.usuarioNome.toLowerCase().includes(a.toLowerCase())||r.usuarioLogin.toLowerCase().includes(a.toLowerCase())||r.acao.toLowerCase().includes(a.toLowerCase())||r.detalhes.toLowerCase().includes(a.toLowerCase());return E&&h}),v=Ee(u,s,{dataHora:r=>r.dataHora,usuario:r=>r.usuarioNome,tela:r=>r.tela,acao:r=>r.acao,detalhes:r=>r.detalhes});e.innerHTML=`
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
            <button type="button" class="btn ${w?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
              Hoje (${D})
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
            Ver Todos (${d.length})
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
            Registros Encontrados (${v.length})
            ${t?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${b}</span>`:""}
          </h3>
          ${t!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${b}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
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
              ${v.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${t?`o dia <strong>${b}</strong>`:"o filtro selecionado"}.</div>
                        ${t!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:v.map(r=>`
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${r.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${r.usuarioNome[0]||"U"}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${r.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${r.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${r.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${r.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${r.detalhes}">
                                ${r.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(C=e.querySelector("#audit-btn-prev"))==null||C.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()-1),o()}),(f=e.querySelector("#audit-btn-next"))==null||f.addEventListener("click",()=>{t||(t=new Date),t.setDate(t.getDate()+1),o()}),(m=e.querySelector("#audit-btn-today"))==null||m.addEventListener("click",()=>{t=new Date,o()}),(k=e.querySelector("#audit-btn-all"))==null||k.addEventListener("click",()=>{t=null,o()}),(l=e.querySelector("#audit-empty-btn-all"))==null||l.addEventListener("click",()=>{t=null,o()}),(y=e.querySelector("#audit-date-picker"))==null||y.addEventListener("change",r=>{const E=r.target.value;if(E){const[h,c,T]=E.split("-").map(Number);t=new Date(h,c-1,T)}else t=null;o()});const I=e.querySelector("#audit-search-input");I==null||I.addEventListener("input",r=>{a=r.target.value,o();const E=e.querySelector("#audit-search-input");E&&(E.focus(),E.selectionStart=E.selectionEnd=E.value.length)}),(p=e.querySelector("#btn-clear-audit-search"))==null||p.addEventListener("click",()=>{a="",o()}),Ae(e,s,r=>{s=r,o()}),(i=e.querySelector("#btn-clear-all-audit"))==null||i.addEventListener("click",async()=>{confirm("Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.")&&(await L.resetCleanDatabase("Administrador"),o())})}const P=()=>{o()};return window.addEventListener("audit_updated",P),o(),e}function Bt(g){const e=document.createElement("div"),t=ie.getCurrentUser(),a=L.getSettings(),s=de(t,"configuracoes","alterar");e.innerHTML=`
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
                  value="${Oe(a.telefoneContato||"")}" 
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
  `;const n=e.querySelector("#btn-tab-gerais"),z=e.querySelector("#btn-tab-instituicao"),$=e.querySelector("#tab-content-gerais"),o=e.querySelector("#tab-content-instituicao");function P(c,T){c&&(T?c.classList.add("active"):c.classList.remove("active"))}function d(c){$.style.display=c==="gerais"?"block":"none",o.style.display=c==="instituicao"?"block":"none",P(n,c==="gerais"),P(z,c==="instituicao")}n==null||n.addEventListener("click",()=>d("gerais")),z==null||z.addEventListener("click",()=>d("instituicao"));let x=a.logotipoCustomizado||"";const M=e.querySelector("#cfg-menu-name"),D=e.querySelector("#preview-menu-brand-name"),b=e.querySelector("#preview-report-brand-name"),w=e.querySelector("#preview-logo-menu"),u=e.querySelector("#preview-logo-report"),v=e.querySelector("#input-logo-file"),I=e.querySelector("#btn-upload-logo"),C=e.querySelector("#btn-reset-logo"),f=e.querySelector("#logo-feedback-msg");M==null||M.addEventListener("input",()=>{const c=M.value.trim()||"Acusticamente";D&&(D.textContent=c),b&&(b.textContent=c)}),I==null||I.addEventListener("click",()=>{v==null||v.click()}),v==null||v.addEventListener("change",c=>{const T=c.target.files;if(!T||T.length===0)return;const R=T[0];if(!R.type.startsWith("image/")){N("Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).","info");return}if(R.size>3*1024*1024){N("A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.","info");return}const j=new FileReader;j.onload=U=>{var A;x=((A=U.target)==null?void 0:A.result)||"",w&&(w.innerHTML=ye(x,40)),u&&(u.innerHTML=ye(x,40)),C&&(C.disabled=!1,C.style.color="#ef4444"),f&&(f.style.display="block",f.style.color="var(--status-success)",f.textContent="Imagem carregada no preview. Clique em Salvar."),N("Logotipo carregado na pré-visualização!","info")},j.onerror=()=>{N("Erro ao processar o arquivo de imagem.","error")},j.readAsDataURL(R)}),C==null||C.addEventListener("click",()=>{x="",v&&(v.value=""),w&&(w.innerHTML=ye("",40)),u&&(u.innerHTML=ye("",40)),C&&(C.disabled=!0,C.style.color="var(--text-muted)"),f&&(f.style.display="block",f.style.color="var(--color-coral)",f.textContent="Logotipo padrão no preview. Clique em Salvar."),N("Logotipo padrão restaurado no preview.","info")});const m=e.querySelector("#form-settings-gerais");m==null||m.addEventListener("submit",c=>{var A,B,_;c.preventDefault();const T=M.value.trim()||"Acusticamente",R=((A=e.querySelector("#cfg-msg-aluno"))==null?void 0:A.value.trim())||"",j=((B=e.querySelector("#cfg-msg-professor"))==null?void 0:B.value.trim())||"",U=((_=e.querySelector("#cfg-msg-admin"))==null?void 0:_.value.trim())||"";L.updateSettings({nomeMenu:T,logotipoCustomizado:x,msgAniversarioAluno:R,msgAniversarioProfessor:j,msgAniversarioAdmin:U},(t==null?void 0:t.nome)||"Administrador"),f&&(f.style.display="none"),N("Configurações gerais salvas com sucesso!","success")});const k=e.querySelector("#cfg-cnpj");k&&me(k,Xe);const l=e.querySelector("#cfg-ie");l&&me(l,Ze);const y=e.querySelector("#cfg-tel");y&&me(y,Oe);const p=e.querySelector("#cfg-cep");p&&me(p,Ke);const i=e.querySelector("#cfg-uf");i==null||i.addEventListener("input",c=>{c.target.value=c.target.value.toUpperCase().slice(0,2)});const r=e.querySelector("#form-settings-institucional");r==null||r.addEventListener("submit",c=>{c.preventDefault();const T=e.querySelector("#cfg-fantasia").value.trim(),R=e.querySelector("#cfg-razao").value.trim(),j=e.querySelector("#cfg-cnpj").value.trim(),U=e.querySelector("#cfg-ie").value.trim(),A=e.querySelector("#cfg-tel").value.trim(),B=e.querySelector("#cfg-email").value.trim(),_=e.querySelector("#cfg-site").value.trim(),F=e.querySelector("#cfg-cep").value.trim(),V=e.querySelector("#cfg-logradouro").value.trim(),G=e.querySelector("#cfg-numero").value.trim(),W=e.querySelector("#cfg-complemento").value.trim(),J=e.querySelector("#cfg-bairro").value.trim(),Y=e.querySelector("#cfg-cidade").value.trim(),K=e.querySelector("#cfg-uf").value.trim().toUpperCase();if(!T){N("Informe o Nome Fantasia da instituição.","error");return}if(B&&!nt(B)){N("Informe um endereço de e-mail válido.","error");return}const te=j.replace(/\D/g,"");if(te.length>0&&te.length!==14){N("CNPJ incompleto (deve conter 14 dígitos).","error");return}const Z=A.replace(/\D/g,"");if(Z.length>0&&Z.length<10){N("Telefone/WhatsApp incompleto.","error");return}const ee=F.replace(/\D/g,"");if(ee.length>0&&ee.length!==8){N("CEP incompleto (deve conter 8 dígitos).","error");return}L.updateSettings({nomeEscola:T,nomeClinica:T,nomeFantasia:T,razaoSocial:R,cnpj:j,inscricaoEstadual:U,telefoneContato:A,emailContato:B,website:_,cep:F,logradouro:V,numero:G,complemento:W,bairro:J,cidade:Y,estado:K},(t==null?void 0:t.nome)||"Administrador"),N("Dados da instituição salvos com sucesso!","success")});const E=e.querySelector("#footer-cloud-status"),h=c=>{E&&(c==="connected"?(E.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `,E.style.color="#4ade80"):c==="fallback"?(E.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `,E.style.color="#fbbf24"):(E.innerHTML=`
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `,E.style.color="#94a3b8"))};return h(L.getCloudStatus()),window.addEventListener("acusticamente:cloud-status-changed",c=>{h(c.detail)}),e}class Dt{constructor(){fe(this,"currentScreen","site");fe(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){const e=window.location.hash.replace("#","").trim(),t=ie.getCurrentUser();!e||e==="site"?this.currentScreen="site":e==="login"?this.currentScreen="login":ie.isAuthenticated()?["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","user","auditoria","configuracoes"].includes(e)&&be(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t):this.currentScreen="login",window.addEventListener("hashchange",()=>{const a=window.location.hash.replace("#","").trim(),s=!a||a==="site"?"site":a;s!==this.currentScreen&&this.navigateTo(s)}),window.addEventListener("app-settings-updated",()=>{const a=L.getSettings(),s=document.querySelector(".sidebar-brand-name");s&&(s.textContent=a.nomeMenu||"Acusticamente");const n=document.querySelector(".sidebar-logo");n&&(n.innerHTML=ye(a.logotipoCustomizado,46))}),window.addEventListener("acusticamente:data-synced",()=>{ie.isAuthenticated()&&!["login","site"].includes(this.currentScreen)&&this.render()}),L.syncWithCloud(),this.render()}getFirstAllowedScreen(e){if(!e)return"login";const t=["home","agenda","alunos","planos","financeiro","planos-pagamento","relatorios","auditoria","configuracoes"];for(const a of t)if(be(e,a))return a;return"home"}navigateTo(e){if(e==="site"){this.currentScreen="site",window.location.hash="site",this.render(),window.scrollTo(0,0);return}if(e==="login"){this.currentScreen="login",window.location.hash="login",this.render(),window.scrollTo(0,0);return}if(!ie.isAuthenticated()){this.currentScreen="login",window.location.hash="login",this.render();return}const t=ie.getCurrentUser();if(!be(t,e)){N("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const a=this.getFirstAllowedScreen(t);this.currentScreen=a,window.location.hash=a,this.render();return}this.currentScreen=e,window.location.hash=e,this.render(),L.syncWithCloud()}render(){var D;if(this.appRoot.innerHTML="",this.currentScreen==="site"){const b=ht(w=>{this.navigateTo(w)});this.appRoot.appendChild(b);return}if(this.currentScreen==="login"||!ie.isAuthenticated()){const b=yt(()=>{const w=ie.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(w))},()=>{this.navigateTo("site")});this.appRoot.appendChild(b);return}const e=document.createElement("div");e.className="app-container";const t=ie.getCurrentUser(),a=(t==null?void 0:t.papel)==="admin",s=L.getSettings(),n=s.nomeMenu||"Acusticamente";e.innerHTML=`
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
    `;const z=e.querySelector("#app-sidebar"),$=e.querySelector("#sidebar-backdrop"),o=e.querySelector("#btn-mobile-menu-toggle"),P=e.querySelector("#btn-sidebar-close"),d=b=>{const w=b!==void 0?b:!z.classList.contains("open");z.classList.toggle("open",w),$.classList.toggle("open",w),document.body.style.overflow=w?"hidden":""};o==null||o.addEventListener("click",()=>d(!0)),P==null||P.addEventListener("click",()=>d(!1)),$==null||$.addEventListener("click",()=>d(!1)),e.querySelectorAll(".nav-item").forEach(b=>{b.addEventListener("click",w=>{const u=w.currentTarget.dataset.screen;d(!1),u&&this.navigateTo(u)})}),(D=e.querySelector("#btn-app-logout"))==null||D.addEventListener("click",()=>{$e({title:"Sair do Sistema",message:"Deseja realmente encerrar sua sessão no sistema Acusticamente?",confirmText:"Sair",confirmBtnClass:"btn-danger",onConfirm:()=>{ie.logout(),this.navigateTo("site")}})});const x=e.querySelector("#screen-viewport"),M=this.createViewElement(this.currentScreen);x.appendChild(M),this.appRoot.appendChild(e)}createViewElement(e){const t=a=>this.navigateTo(a);switch(e){case"home":return tt(t);case"agenda":return wt();case"alunos":return It(t);case"user":return kt(t);case"planos":return zt();case"financeiro":return Mt();case"planos-pagamento":return Pt();case"relatorios":return Lt();case"auditoria":return Tt();case"configuracoes":return Bt();default:return tt(t)}}getScreenTitle(e){switch(e){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"financeiro":return"Financeiro & Mensalidades";case"planos-pagamento":return"Planos de Pagamento";case"relatorios":return"Relatórios Gerenciais";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(e){switch(e){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"financeiro":return"Controle de recebimentos, mensalidades e baixas";case"planos-pagamento":return"Gestão de valores, modalidades (individual/turma) e ciclos de cobrança";case"relatorios":return"Emissão de relatórios e exportação para PDF corporativo";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new Dt});
