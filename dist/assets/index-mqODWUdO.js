var ve=Object.defineProperty;var he=(g,t,e)=>t in g?ve(g,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):g[t]=e;var N=(g,t,e)=>he(g,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const ie="acusticamente_audit_logs";class be{constructor(){N(this,"logs",[]);this.loadLogs()}loadLogs(){try{const t=localStorage.getItem(ie);t?this.logs=JSON.parse(t):this.log({usuarioId:"1",usuarioLogin:"1",usuarioNome:"Administrador",tela:"Sistema",acao:"Inicialização do Sistema",detalhes:"Base de dados inicializada com usuário administrador padrão (1)."})}catch{this.logs=[]}}saveLogs(){try{localStorage.setItem(ie,JSON.stringify(this.logs))}catch(t){console.error("Erro ao salvar auditoria no storage:",t)}}log(t){const e=new Date,a=s=>s.toString().padStart(2,"0"),o=`${a(e.getDate())}/${a(e.getMonth()+1)}/${e.getFullYear()} ${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`,r={id:"audit_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),dataHora:e.toISOString(),dataHoraFormatada:o,usuarioId:t.usuarioId||"1",usuarioLogin:t.usuarioLogin||"1",usuarioNome:t.usuarioNome||"Administrador",tela:t.tela,acao:t.acao,detalhes:t.detalhes};return this.logs.unshift(r),this.saveLogs(),window.dispatchEvent(new CustomEvent("audit_updated",{detail:r})),r}getLogs(){return[...this.logs]}clearLogs(){this.logs=[],this.saveLogs()}}const M=new be,le="acusticamente_users",de="acusticamente_students",ce="acusticamente_plans",ue="acusticamente_appointments",me="acusticamente_settings";class ye{constructor(){N(this,"users",[]);N(this,"students",[]);N(this,"plans",[]);N(this,"appointments",[]);N(this,"settings",{nomeEscola:"Acusticamente - Escola de Música",nomeClinica:"Acusticamente - Escola de Música",telefoneContato:"(11) 98765-4321",emailContato:"contato@acusticamente.com.br",mongoUri:"mongodb://localhost:27017",mongoDatabase:"acusticamente_db",mongoStatus:"simulado",notificacoesAtivas:!0});this.initData()}initData(){const t=localStorage.getItem(le);t?this.users=JSON.parse(t):(this.users=[{id:"user_1",nome:"Administrador",login:"1",senha:"1",papel:"admin",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},isSistema:!0,criadoEm:new Date().toISOString()},{id:"user_2",nome:"Prof. Carlos Eduardo",login:"carlos",senha:"123",papel:"professor",permissoes:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},isSistema:!1,criadoEm:new Date().toISOString()}],this.saveUsers());const e=localStorage.getItem(ce);e?this.plans=JSON.parse(e):(this.plans=[{id:"plano_1",nome:"Percepção e Musicalização",descricao:"Desenvolvimento do ouvido musical, ritmo e afinação básica.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_1_1",ordem:1,titulo:"Módulo 1: Consciência Sonora e Pulsação"},{id:"mod_1_2",ordem:2,titulo:"Módulo 2: Discriminação de Timbres e Alturas"},{id:"mod_1_3",ordem:3,titulo:"Módulo 3: Harmonia Básica e Canto"}]},{id:"plano_2",nome:"Violão e Harmonia Prática",descricao:"Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}]},{id:"plano_3",nome:"Prática de Instrumento - Piano & Teclado",descricao:"Estudo prático postural, leitura de partituras e repertório.",criadoEm:new Date().toISOString(),modulos:[{id:"mod_3_1",ordem:1,titulo:"Módulo 1: Digitação e Postura"},{id:"mod_3_2",ordem:2,titulo:"Módulo 2: Leitura Rítmica e Clave de Sol"},{id:"mod_3_3",ordem:3,titulo:"Módulo 3: Repertório Clássico e Popular"}]}],this.savePlans());const a=localStorage.getItem(de);a?this.students=JSON.parse(a):(this.students=[{id:"aluno_1",nome:"Lucas Silveira",email:"lucas@email.com",telefone:"(11) 98231-1122",planoId:"plano_1",moduloAtual:"Módulo 2: Discriminação de Timbres",status:"ativo",observacoes:"Apresenta grande facilidade com ritmo.",criadoEm:new Date().toISOString()},{id:"aluno_2",nome:"Mariana Duarte",email:"mariana.duarte@email.com",telefone:"(11) 97123-4567",planoId:"plano_2",moduloAtual:"Módulo 1: Primeiros Acordes e Levadas",status:"ativo",observacoes:"Iniciando estudos no violão popular.",criadoEm:new Date().toISOString()},{id:"aluno_3",nome:"Gabriel Santos",email:"gabriel.s@email.com",telefone:"(11) 99345-6789",planoId:"plano_3",moduloAtual:"Módulo 1: Digitação e Postura",status:"ativo",observacoes:"Excelente dedicação nas aulas de piano.",criadoEm:new Date().toISOString()},{id:"aluno_4",nome:"Beatriz Costa",email:"beatriz.costa@email.com",telefone:"(11) 96543-2109",planoId:"plano_1",moduloAtual:"Módulo 3: Harmonia Básica e Canto",status:"ativo",observacoes:"Foco no canto coral.",criadoEm:new Date().toISOString()}],this.saveStudents());const o=localStorage.getItem(ue);if(o)this.appointments=JSON.parse(o);else{const s=this.getTodayDateString();this.appointments=[{id:"app_1",titulo:"Aula de Percepção Sonora",alunoId:"aluno_1",planoId:"plano_1",data:s,horaInicio:"08:30",horaFim:"09:30",status:"concluido",observacoes:"Exercícios rítmicos concluídos.",criadoEm:new Date().toISOString()},{id:"app_2",titulo:"Aula Prática de Violão",alunoId:"aluno_2",planoId:"plano_2",data:s,horaInicio:"10:00",horaFim:"11:00",status:"agendado",observacoes:"Praticar transição entre acordes maiores.",criadoEm:new Date().toISOString()},{id:"app_3",titulo:"Prática de Piano Módulo 1",alunoId:"aluno_3",planoId:"plano_3",data:s,horaInicio:"14:00",horaFim:"15:00",status:"agendado",observacoes:"Início da escala de Dó Maior.",criadoEm:new Date().toISOString()},{id:"app_4",titulo:"Percepção e Harmonia",alunoId:"aluno_4",planoId:"plano_1",data:s,horaInicio:"16:30",horaFim:"17:30",status:"agendado",observacoes:"Preparação para apresentação musical.",criadoEm:new Date().toISOString()}],this.saveAppointments()}const r=localStorage.getItem(me);r&&(this.settings=JSON.parse(r)),this.settings.nomeClinica&&this.settings.nomeClinica.includes("Terapêutico")&&(this.settings.nomeEscola="Acusticamente - Escola de Música",this.settings.nomeClinica="Acusticamente - Escola de Música",this.saveSettings()),this.settings.nomeEscola||(this.settings.nomeEscola=this.settings.nomeClinica||"Acusticamente - Escola de Música",this.saveSettings()),this.plans.forEach(s=>{s.nome.includes("Reabilitação")&&(s.nome="Violão e Harmonia Prática",s.descricao="Estudo de acordes, levadas rítmicas, dedilhados e repertório no violão.",s.modulos=[{id:"mod_2_1",ordem:1,titulo:"Módulo 1: Primeiros Acordes e Levadas"},{id:"mod_2_2",ordem:2,titulo:"Módulo 2: Dedilhados e Transição de Acordes"},{id:"mod_2_3",ordem:3,titulo:"Módulo 3: Escalas e Harmonia Prática"}])}),this.savePlans(),this.students.forEach(s=>{var n;(n=s.observacoes)!=null&&n.includes("implante")&&(s.moduloAtual="Módulo 1: Primeiros Acordes e Levadas",s.observacoes="Iniciando estudos no violão popular.")}),this.saveStudents(),this.appointments.forEach(s=>{var n;(n=s.titulo)!=null&&n.includes("Auditivo")&&(s.titulo="Aula Prática de Violão",s.observacoes="Praticar transição entre acordes maiores.")}),this.saveAppointments()}getTodayDateString(){const t=new Date,e=a=>a.toString().padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}saveUsers(){localStorage.setItem(le,JSON.stringify(this.users))}saveStudents(){localStorage.setItem(de,JSON.stringify(this.students))}savePlans(){localStorage.setItem(ce,JSON.stringify(this.plans))}saveAppointments(){localStorage.setItem(ue,JSON.stringify(this.appointments))}saveSettings(){localStorage.setItem(me,JSON.stringify(this.settings))}getUsers(){return[...this.users]}getUserById(t){return this.users.find(e=>e.id===t)}addUser(t,e){const a={...t,id:"user_"+Date.now(),isSistema:!1,criadoEm:new Date().toISOString()};return this.users.push(a),this.saveUsers(),M.log({tela:"Cadastro de Usuários",acao:"Criação de Usuário",usuarioNome:e,detalhes:`Criado usuário "${a.nome}" (login: ${a.login}, papel: ${a.papel})`}),a}updateUser(t,e,a){const o=this.users.findIndex(n=>n.id===t);if(o===-1)throw new Error("Usuário não encontrado.");const r=this.users[o],s=r.isSistema;return this.users[o]={...r,...e,isSistema:s,atualizadoEm:new Date().toISOString()},this.saveUsers(),M.log({tela:"Cadastro de Usuários",acao:"Atualização de Usuário",usuarioNome:a,detalhes:`Usuário "${r.nome}" atualizado. Alterações no login/senha ou dados cadastrais.`}),this.users[o]}deleteUser(t,e){const a=this.users.find(o=>o.id===t);if(!a)throw new Error("Usuário não encontrado.");if(a.isSistema)throw new Error("O usuário administrador do sistema (login 1) não pode ser excluído.");this.users=this.users.filter(o=>o.id!==t),this.saveUsers(),M.log({tela:"Cadastro de Usuários",acao:"Exclusão de Usuário",usuarioNome:e,detalhes:`Usuário "${a.nome}" (login: ${a.login}) foi removido.`})}getStudents(){return[...this.students]}addStudent(t,e){const a={...t,id:"aluno_"+Date.now(),criadoEm:new Date().toISOString()};return this.students.push(a),this.saveStudents(),M.log({tela:"Cadastro de Alunos",acao:"Criação de Aluno",usuarioNome:e,detalhes:`Aluno "${a.nome}" cadastrado com status ${a.status}.`}),a}updateStudent(t,e,a){const o=this.students.findIndex(s=>s.id===t);if(o===-1)throw new Error("Aluno não encontrado.");const r=this.students[o];return this.students[o]={...r,...e},this.saveStudents(),M.log({tela:"Cadastro de Alunos",acao:"Atualização de Aluno",usuarioNome:a,detalhes:`Aluno "${r.nome}" atualizado.`}),this.students[o]}deleteStudent(t,e){const a=this.students.find(o=>o.id===t);a&&(this.students=this.students.filter(o=>o.id!==t),this.saveStudents(),M.log({tela:"Cadastro de Alunos",acao:"Exclusão de Aluno",usuarioNome:e,detalhes:`Aluno "${a.nome}" foi removido do sistema.`}))}getPlans(){return[...this.plans]}addPlan(t,e){const a={...t,id:"plano_"+Date.now(),criadoEm:new Date().toISOString()};return this.plans.push(a),this.savePlans(),M.log({tela:"Plano de Ensino",acao:"Criação de Plano",usuarioNome:e,detalhes:`Plano "${a.nome}" criado com ${a.modulos.length} módulos.`}),a}updatePlan(t,e,a){const o=this.plans.findIndex(s=>s.id===t);if(o===-1)throw new Error("Plano não encontrado.");const r=this.plans[o];return this.plans[o]={...r,...e},this.savePlans(),M.log({tela:"Plano de Ensino",acao:"Atualização de Plano",usuarioNome:a,detalhes:`Plano "${r.nome}" atualizado.`}),this.plans[o]}deletePlan(t,e){const a=this.plans.find(o=>o.id===t);a&&(this.plans=this.plans.filter(o=>o.id!==t),this.savePlans(),M.log({tela:"Plano de Ensino",acao:"Exclusão de Plano",usuarioNome:e,detalhes:`Plano "${a.nome}" foi excluído.`}))}getAppointments(){return[...this.appointments]}addAppointment(t,e){const a={...t,id:"app_"+Date.now(),criadoEm:new Date().toISOString()};this.appointments.push(a),this.saveAppointments();const o=this.students.find(r=>r.id===a.alunoId);return M.log({tela:"Agenda",acao:"Novo Compromisso",usuarioNome:e,detalhes:`Agendado compromisso "${a.titulo}" para aluno ${(o==null?void 0:o.nome)||"N/A"} em ${a.data} às ${a.horaInicio}.`}),a}updateAppointment(t,e,a){const o=this.appointments.findIndex(s=>s.id===t);if(o===-1)throw new Error("Compromisso não encontrado.");const r=this.appointments[o];return this.appointments[o]={...r,...e},this.saveAppointments(),M.log({tela:"Agenda",acao:"Atualização de Compromisso",usuarioNome:a,detalhes:`Compromisso "${r.titulo}" atualizado (status: ${this.appointments[o].status}).`}),this.appointments[o]}deleteAppointment(t,e){const a=this.appointments.find(o=>o.id===t);a&&(this.appointments=this.appointments.filter(o=>o.id!==t),this.saveAppointments(),M.log({tela:"Agenda",acao:"Cancelamento/Exclusão de Compromisso",usuarioNome:e,detalhes:`Compromisso "${a.titulo}" removido da agenda.`}))}getSettings(){return{...this.settings}}updateSettings(t,e){return this.settings={...this.settings,...t},this.saveSettings(),M.log({tela:"Configurações",acao:"Alteração de Configurações",usuarioNome:e,detalhes:`Parâmetros do sistema atualizados (MongoDB: ${this.settings.mongoDatabase}).`}),this.settings}}const w=new ye,j={admin:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},planos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!0},home:{acesso:!0},auditoria:{acesso:!0},configuracoes:{acesso:!0,alterar:!0}},professor:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!0,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}},atendente:{alunos:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},agenda:{acesso:!0,cadastrar:!0,alterar:!0,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!0},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}}};function G(g){var o,r,s,n,m,y,u,d,c,f,p,$,x,S,C,I;if(!g)return{alunos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},agenda:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},planos:{acesso:!1,cadastrar:!1,alterar:!1,excluir:!1},home:{acesso:!1},auditoria:{acesso:!1},configuracoes:{acesso:!1,alterar:!1}};if(g.papel==="admin")return JSON.parse(JSON.stringify(j.admin));const t=j[g.papel]||j.professor,e=g.permissoes;if(!e)return JSON.parse(JSON.stringify(t));const a=l=>typeof l=="boolean";return{alunos:{acesso:a(e.alunos)?e.alunos:((o=e.alunos)==null?void 0:o.acesso)??t.alunos.acesso,cadastrar:a(e.alunos)?e.alunos:((r=e.alunos)==null?void 0:r.cadastrar)??t.alunos.cadastrar,alterar:a(e.alunos)?e.alunos:((s=e.alunos)==null?void 0:s.alterar)??t.alunos.alterar,excluir:a(e.alunos)?!1:((n=e.alunos)==null?void 0:n.excluir)??t.alunos.excluir},agenda:{acesso:a(e.agenda)?e.agenda:((m=e.agenda)==null?void 0:m.acesso)??t.agenda.acesso,cadastrar:a(e.agenda)?e.agenda:((y=e.agenda)==null?void 0:y.cadastrar)??t.agenda.cadastrar,alterar:a(e.agenda)?e.agenda:((u=e.agenda)==null?void 0:u.alterar)??t.agenda.alterar,excluir:a(e.agenda)?!1:((d=e.agenda)==null?void 0:d.excluir)??t.agenda.excluir},planos:{acesso:a(e.planos)?e.planos:((c=e.planos)==null?void 0:c.acesso)??t.planos.acesso,cadastrar:a(e.planos)?e.planos:((f=e.planos)==null?void 0:f.cadastrar)??t.planos.cadastrar,alterar:a(e.planos)?e.planos:((p=e.planos)==null?void 0:p.alterar)??t.planos.alterar,excluir:a(e.planos)?!1:(($=e.planos)==null?void 0:$.excluir)??t.planos.excluir},home:{acesso:a(e.home)?e.home:((x=e.home)==null?void 0:x.acesso)??t.home.acesso},auditoria:{acesso:a(e.auditoria)?e.auditoria:((S=e.auditoria)==null?void 0:S.acesso)??t.auditoria.acesso},configuracoes:{acesso:a(e.configuracoes)?e.configuracoes:((C=e.configuracoes)==null?void 0:C.acesso)??t.configuracoes.acesso,alterar:a(e.configuracoes)?e.configuracoes:((I=e.configuracoes)==null?void 0:I.alterar)??t.configuracoes.alterar}}}function _(g,t){if(!g)return!1;if(t==="login")return!0;if(t==="user")return g.papel==="admin";if(g.papel==="admin")return!0;const a=G(g)[t];return a&&typeof a=="object"&&"acesso"in a?!!a.acesso:!1}function T(g,t,e){if(!g)return!1;if(g.papel==="admin")return!0;const o=G(g)[t];return o?!!o[e]:!1}const Y="acusticamente_active_session";class xe{constructor(){N(this,"currentUser",null);this.restoreSession()}restoreSession(){try{const t=localStorage.getItem(Y);t&&(this.currentUser=JSON.parse(t))}catch{this.currentUser=null}}getCurrentUser(){if(this.currentUser){const t=w.getUserById(this.currentUser.id);t&&(this.currentUser=t,localStorage.setItem(Y,JSON.stringify(t)))}return this.currentUser}isAuthenticated(){return this.currentUser!==null}login(t,e){const o=w.getUsers().find(r=>r.login===t.trim());return o?o.senha!==e.trim()?(M.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioId:o.id,usuarioLogin:o.login,usuarioNome:o.nome,detalhes:`Senha incorreta informada para o usuário "${o.login}".`}),{success:!1,message:"Usuário ou senha incorretos."}):(this.currentUser=o,localStorage.setItem(Y,JSON.stringify(o)),M.log({tela:"Login",acao:"Autenticação com Sucesso",usuarioId:o.id,usuarioLogin:o.login,usuarioNome:o.nome,detalhes:`Usuário "${o.nome}" realizou login no sistema.`}),{success:!0,message:"Login realizado com sucesso!",user:o}):(M.log({tela:"Login",acao:"Tentativa de Login Falha",usuarioLogin:t,usuarioNome:"Desconhecido",detalhes:`Tentativa de login frustrada com o usuário "${t}" (usuário não encontrado).`}),{success:!1,message:"Usuário ou senha incorretos."})}logout(){this.currentUser&&M.log({tela:"Sistema",acao:"Logout",usuarioId:this.currentUser.id,usuarioLogin:this.currentUser.login,usuarioNome:this.currentUser.nome,detalhes:`Usuário "${this.currentUser.nome}" encerrou a sessão.`}),this.currentUser=null,localStorage.removeItem(Y),sessionStorage.setItem("acusticamente_manual_logout","true"),window.location.reload()}}const B=new xe;function X(g=40){return`
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
  `}function A(g,t="success"){const e=document.getElementById("toast-container");if(!e)return;const a=document.createElement("div");a.className=`toast toast-${t}`,a.innerHTML=`
    <span class="toast-icon">${t==="success"?"✓":t==="error"?"✕":"ℹ"}</span>
    <span class="toast-text">${g}</span>
  `,e.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateX(20px)",a.style.transition="all 200ms ease",setTimeout(()=>a.remove(),200)},3500)}function U(g){const t=document.getElementById("modal-container");if(!t)return;t.innerHTML=`
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
          <button type="button" class="btn btn-secondary" id="modal-cancel-btn">${g.cancelText||"Cancelar"}</button>
          ${g.confirmText?`<button type="button" class="btn ${g.confirmBtnClass||"btn-primary"}" id="modal-confirm-btn">${g.confirmText}</button>`:""}
        </div>
      </div>
    </div>
  `;const e=document.getElementById("active-modal-backdrop"),a=document.getElementById("modal-close-btn"),o=document.getElementById("modal-cancel-btn"),r=document.getElementById("modal-confirm-btn"),s=()=>{t.innerHTML="",g.onCancel&&g.onCancel()};a.onclick=s,o.onclick=s,e.onclick=n=>{n.target===e&&s()},r&&g.onConfirm&&(r.onclick=async()=>{const n=document.querySelector(".modal-card");await g.onConfirm(n)!==!1&&(t.innerHTML="")})}function pe(){const g=document.getElementById("modal-container");g&&(g.innerHTML="")}const k={home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',agenda:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',alunos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',planos:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>',auditoria:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>',configuracoes:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',logout:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'},W="acusticamente_auth_remember",ge="acusticamente_manual_logout";function $e(g){const t=document.createElement("div");t.className="login-page";let e={username:"",password:"",remember:!1,autoLogin:!1};try{const n=localStorage.getItem(W);n&&(e={...e,...JSON.parse(n)})}catch{e={username:"",password:"",remember:!1,autoLogin:!1}}t.innerHTML=`
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${X(50)}
        </div>
        <h2>ACUSTICAMENTE</h2>
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
            ${X(58)}
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
              value="${e.remember?e.username:""}"
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
              value="${e.remember?e.password:""}"
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
                ${e.remember?"checked":""} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Lembrar senha</span>
            </label>

            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-autologin" 
                ${e.autoLogin?"checked":""} 
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
  `;const a=t.querySelector("#login-remember"),o=t.querySelector("#login-autologin");o==null||o.addEventListener("change",()=>{o.checked&&!a.checked&&(a.checked=!0)}),a==null||a.addEventListener("change",()=>{!a.checked&&o.checked&&(o.checked=!1)});const r=t.querySelector("#login-form");r.onsubmit=n=>{var $;n.preventDefault();const m=t.querySelector("#login-username"),y=t.querySelector("#login-password"),u=m.value.trim(),d=y.value.trim(),c=a.checked,f=o.checked,p=B.login(u,d);p.success?(c?localStorage.setItem(W,JSON.stringify({username:u,password:d,remember:!0,autoLogin:f})):localStorage.removeItem(W),sessionStorage.removeItem(ge),A(`Bem-vindo, ${($=p.user)==null?void 0:$.nome}!`,"success"),g()):A(p.message,"error")};const s=sessionStorage.getItem(ge)==="true";return e.autoLogin&&e.remember&&e.username&&e.password&&!s&&setTimeout(()=>{var m;if(!t.isConnected&&!document.body.contains(t))return;const n=B.login(e.username,e.password);n.success&&(A(`Bem-vindo de volta, ${(m=n.user)==null?void 0:m.nome}!`,"success"),g())},100),t}function fe(g){var u,d;const t=document.createElement("div"),e=B.getCurrentUser(),a=w.getStudents(),o=w.getPlans(),r=w.getAppointments(),s=w.getTodayDateString(),n=r.filter(c=>c.data===s),m=a.filter(c=>c.status==="ativo").length,y=n.find(c=>c.status==="agendado");return t.innerHTML=`
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
        ${k.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${k.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${n.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${k.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${m}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${k.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${y?y.horaInicio:"--:--"}</span>
          <span class="metric-label">${y?"Próxima aula":"Nenhuma pendente"}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${k.planos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${o.length}</span>
          <span class="metric-label">Planos de ensino</span>
        </div>
      </div>
    </div>

    <!-- Tabela de Aulas de Hoje -->
    <div class="panel-card">
      <div class="panel-card-header">
        <h3 class="panel-card-title">Aulas de Hoje (${n.length})</h3>
        <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
          Ver Agenda Completa
        </button>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Aluno</th>
              <th>Plano de Ensino</th>
              <th>Status</th>
              <th style="text-align: right;">Ações</th>
            </tr>
          </thead>
          <tbody id="today-classes-tbody">
            ${n.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>':n.map(c=>{const f=a.find(x=>x.id===c.alunoId),p=o.find(x=>x.id===c.planoId),$=c.status==="concluido";return`
                        <tr data-app-id="${c.id}">
                          <td>
                            <strong style="color: var(--text-white);">${c.horaInicio}</strong>
                            <span style="font-size: 0.78rem; color: var(--text-muted);"> às ${c.horaFim}</span>
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                              <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 600; color: var(--color-coral);">
                                ${((f==null?void 0:f.nome)||"A")[0]}
                              </div>
                              <span style="font-weight: 500;">${(f==null?void 0:f.nome)||"Aluno não vinculado"}</span>
                            </div>
                          </td>
                          <td>
                            <span style="color: var(--text-secondary);">${(p==null?void 0:p.nome)||"Plano Personalizado"}</span>
                          </td>
                          <td>
                            <span class="badge ${$?"badge-success":"badge-warning"}">
                              ${$?"✓ Concluído":"⏳ Agendado"}
                            </span>
                          </td>
                          <td style="text-align: right;">
                            ${$?'<span style="font-size: 0.8rem; color: var(--text-muted);">Finalizada</span>':`<button class="btn btn-secondary btn-complete-class" data-id="${c.id}" style="padding: 5px 12px; font-size: 0.78rem; color: var(--status-success);">
                                     Concluir
                                   </button>`}
                          </td>
                        </tr>
                      `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,(u=t.querySelector("#home-btn-new-appointment"))==null||u.addEventListener("click",()=>{g("agenda")}),(d=t.querySelector("#home-btn-view-all-agenda"))==null||d.addEventListener("click",()=>{g("agenda")}),t.querySelectorAll(".btn-complete-class").forEach(c=>{c.addEventListener("click",f=>{const p=f.currentTarget.dataset.id;p&&(w.updateAppointment(p,{status:"concluido"},(e==null?void 0:e.nome)||"Administrador"),A("Aula concluída com sucesso!","success"),g("home"))})}),t}function we(g){const t=document.createElement("div"),e=B.getCurrentUser();let a=new Date;function o(){var l,h,v,b;const n=w.getStudents();w.getPlans();const m=w.getAppointments(),y=a.getFullYear(),u=a.getMonth(),d=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],c=new Date(y,u,1).getDay(),f=new Date(y,u+1,0).getDate(),p=new Date(y,u,0).getDate(),$=new Date,x=$.getFullYear()===y&&$.getMonth()===u,S=[];for(let i=c;i>0;i--){const E=p-i+1;S.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${E}</span>
          </div>
        </div>
      `)}for(let i=1;i<=f;i++){const E=P=>P.toString().padStart(2,"0"),L=`${y}-${E(u+1)}-${E(i)}`,z=x&&$.getDate()===i,D=m.filter(P=>P.data===L),F=D.slice(0,3).map(P=>{const q=n.find(V=>V.id===P.alunoId),J=q?q.nome.split(" ")[0]:"Aula";return`
            <div class="calendar-appointment-badge ${P.status==="concluido"?"concluido":""}" 
                 data-app-id="${P.id}" 
                 title="${P.horaInicio} - ${(q==null?void 0:q.nome)||"Aluno"} (${P.status})">
              <strong>${P.horaInicio}</strong> ${J}
            </div>
          `}).join(""),H=D.length>3?D.length-3:0,R=H>0?`<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${H} mais</div>`:"";S.push(`
        <div class="calendar-day-cell ${z?"today":""}" data-date="${L}">
          <div class="day-cell-header">
            <span class="day-number">${i}</span>
            ${D.length>0?`<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${D.length}</span>`:""}
          </div>
          <div class="day-appointments-list">
            ${F}
            ${R}
          </div>
        </div>
      `)}const C=S.length,I=C>35?42-C:35-C;for(let i=1;i<=I;i++)S.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${i}</span>
          </div>
        </div>
      `);t.innerHTML=`
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${d[u]} de ${y}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${x?"btn-primary":"btn-secondary"}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          ${T(e,"agenda","cadastrar")?`
                <button class="btn btn-primary" id="agenda-btn-new-app">
                  ${k.plus} Cadastrar Novo Compromisso
                </button>
              `:""}
        </div>

        <!-- Grade Semanal Quadradinha Estilo Google Calendar Sem Barra de Rolagem -->
        <div class="calendar-grid">
          <div class="calendar-day-name">DOM</div>
          <div class="calendar-day-name">SEG</div>
          <div class="calendar-day-name">TER</div>
          <div class="calendar-day-name">QUA</div>
          <div class="calendar-day-name">QUI</div>
          <div class="calendar-day-name">SEX</div>
          <div class="calendar-day-name">SÁB</div>

          ${S.join("")}
        </div>
      </div>
    `,(l=t.querySelector("#agenda-btn-prev"))==null||l.addEventListener("click",()=>{a.setMonth(a.getMonth()-1),o()}),(h=t.querySelector("#agenda-btn-next"))==null||h.addEventListener("click",()=>{a.setMonth(a.getMonth()+1),o()}),(v=t.querySelector("#agenda-btn-today"))==null||v.addEventListener("click",()=>{a=new Date,o()}),(b=t.querySelector("#agenda-btn-new-app"))==null||b.addEventListener("click",()=>{s()}),t.querySelectorAll(".calendar-day-cell:not(.other-month)").forEach(i=>{i.addEventListener("click",()=>{const E=i.dataset.date;E&&r(E)})})}function r(n){const m=w.getStudents(),y=w.getPlans(),u=w.getAppointments().filter(I=>I.data===n),[d,c,f]=n.split("-"),$=new Date(parseInt(d),parseInt(c)-1,parseInt(f)).toLocaleDateString("pt-BR",{weekday:"long"}),x=`${$.charAt(0).toUpperCase()+$.slice(1)}, ${f}/${c}/${d}`,S=u.length===0?`
          <div style="text-align: center; padding: 32px 16px; background: rgba(255, 255, 255, 0.02); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 16px;">
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📅</div>
            <p style="font-size: 0.86rem; color: var(--text-secondary);">
              Nenhum compromisso agendado para este dia.
            </p>
          </div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; max-height: 380px; overflow-y: auto; padding-right: 4px;">
            ${u.map(I=>{const l=m.find(i=>i.id===I.alunoId),h=y.find(i=>i.id===I.planoId),v=I.status==="concluido",b=I.status==="cancelado";return`
                  <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 3px solid ${v?"var(--status-success)":b?"var(--status-danger)":"var(--color-coral)"};">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                      <div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <strong style="font-size: 0.88rem; color: var(--text-white);">${I.horaInicio} - ${I.horaFim}</strong>
                          <span class="badge ${v?"badge-success":b?"badge-danger":"badge-warning"}" style="font-size: 0.68rem; padding: 2px 7px;">
                            ${v?"✓ Concluído":b?"✕ Cancelado":"⏳ Agendado"}
                          </span>
                        </div>
                        <div style="font-weight: 600; font-size: 0.92rem; color: var(--text-white); margin-top: 4px;">
                          ${I.titulo}
                        </div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">
                          Aluno: <strong style="color: var(--text-white);">${(l==null?void 0:l.nome)||"Não vinculado"}</strong>
                          ${h?` &bull; Plano: <span style="color: #ff9187;">${h.nome}</span>`:""}
                        </div>
                        ${I.observacoes?`<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${I.observacoes}</div>`:""}
                      </div>

                      <div style="display: flex; gap: 6px; align-items: center;">
                        ${!v&&!b&&T(e,"agenda","alterar")?`<button type="button" class="btn btn-secondary btn-complete-app-day" data-id="${I.id}" title="Marcar como Concluído" style="padding: 5px 9px; font-size: 0.74rem; color: var(--status-success);">
                                 ✓ Concluir
                               </button>`:""}
                        ${T(e,"agenda","alterar")?`
                              <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${I.id}" title="Editar">
                                ${k.edit}
                              </button>
                            `:""}
                        ${T(e,"agenda","excluir")?`
                              <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${I.id}" title="Excluir">
                                ${k.trash}
                              </button>
                            `:""}
                      </div>
                    </div>
                  </div>
                `}).join("")}
          </div>
        `,C=`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${u.length}</strong>
          </span>
          ${T(e,"agenda","cadastrar")?`
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${k.plus} Novo Compromisso
                </button>
              `:""}
        </div>

        ${S}
      </div>
    `;U({title:`Agenda: ${x}`,bodyHtml:C,cancelText:"Fechar",confirmText:""}),setTimeout(()=>{var I;(I=document.getElementById("btn-modal-new-appointment"))==null||I.addEventListener("click",()=>{pe(),s(void 0,n)}),document.querySelectorAll(".btn-complete-app-day").forEach(l=>{l.addEventListener("click",h=>{const v=h.currentTarget.dataset.id;v&&(w.updateAppointment(v,{status:"concluido"},(e==null?void 0:e.nome)||"Administrador"),A("Compromisso concluído!","success"),o(),r(n))})}),document.querySelectorAll(".btn-edit-app-day").forEach(l=>{l.addEventListener("click",h=>{const v=h.currentTarget.dataset.id,b=w.getAppointments().find(i=>i.id===v);b&&(pe(),s(b,n))})}),document.querySelectorAll(".btn-delete-app-day").forEach(l=>{l.addEventListener("click",h=>{const v=h.currentTarget.dataset.id,b=w.getAppointments().find(i=>i.id===v);b&&confirm(`Deseja realmente excluir o compromisso "${b.titulo}"?`)&&(w.deleteAppointment(b.id,(e==null?void 0:e.nome)||"Administrador"),A("Compromisso removido.","info"),o(),r(n))})})},50)}function s(n,m){const y=w.getStudents(),u=w.getPlans(),d=!!n,c=(n==null?void 0:n.data)||m||w.getTodayDateString(),f=y.map(x=>`<option value="${x.id}" ${(n==null?void 0:n.alunoId)===x.id?"selected":""}>${x.nome}</option>`).join(""),p=u.map(x=>`<option value="${x.id}" ${(n==null?void 0:n.planoId)===x.id?"selected":""}>${x.nome}</option>`).join(""),$=`
      <form id="app-modal-form">
        <div class="form-group">
          <label class="form-label" for="app-title">Título da Aula / Compromisso</label>
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão Prático" value="${(n==null?void 0:n.titulo)||""}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="app-student">Aluno</label>
          <select id="app-student" class="form-select" required>
            <option value="">Selecione o Aluno...</option>
            ${f}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-plan">Plano de Ensino (Opcional)</label>
          <select id="app-plan" class="form-select">
            <option value="">Selecione o Plano...</option>
            ${p}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${c}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${(n==null?void 0:n.horaInicio)||"09:00"}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${(n==null?void 0:n.horaFim)||"10:00"}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-status">Status</label>
          <select id="app-status" class="form-select">
            <option value="agendado" ${(n==null?void 0:n.status)==="agendado"?"selected":""}>Agendado</option>
            <option value="concluido" ${(n==null?void 0:n.status)==="concluido"?"selected":""}>Concluído</option>
            <option value="cancelado" ${(n==null?void 0:n.status)==="cancelado"?"selected":""}>Cancelado</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-obs">Observações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Notas sobre o encontro...">${(n==null?void 0:n.observacoes)||""}</textarea>
        </div>

        ${d?`<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${k.trash} Excluir Compromisso
                 </button>
               </div>`:""}
      </form>
    `;U({title:d?"Editar Compromisso":"Cadastrar Novo Compromisso",bodyHtml:$,confirmText:d?"Salvar Alterações":"Salvar Compromisso",onConfirm:()=>{const x=document.getElementById("app-title").value.trim(),S=document.getElementById("app-student").value,C=document.getElementById("app-plan").value,I=document.getElementById("app-date").value,l=document.getElementById("app-time-start").value,h=document.getElementById("app-time-end").value,v=document.getElementById("app-status").value,b=document.getElementById("app-obs").value.trim();if(!x||!S||!I||!l)return A("Preencha os campos obrigatórios (Título, Aluno, Data e Início).","error"),!1;const i=(e==null?void 0:e.nome)||"Administrador";return d&&n?(w.updateAppointment(n.id,{titulo:x,alunoId:S,planoId:C||void 0,data:I,horaInicio:l,horaFim:h,status:v,observacoes:b},i),A("Compromisso atualizado com sucesso!","success")):(w.addAppointment({titulo:x,alunoId:S,planoId:C||void 0,data:I,horaInicio:l,horaFim:h,status:v,observacoes:b},i),A("Compromisso cadastrado com sucesso!","success")),o(),!0}}),d&&n&&setTimeout(()=>{var x;(x=document.getElementById("btn-delete-app"))==null||x.addEventListener("click",()=>{if(confirm(`Deseja realmente excluir o compromisso "${n.titulo}"?`)){w.deleteAppointment(n.id,(e==null?void 0:e.nome)||"Administrador"),A("Compromisso removido.","info");const S=document.querySelector(".modal-backdrop");S&&S.remove(),o()}})},50)}return o(),t}function Ee(g){const t=document.createElement("div"),e=B.getCurrentUser();let a="";function o(){var f;const s=w.getStudents(),n=w.getPlans(),m=T(e,"alunos","cadastrar"),y=T(e,"alunos","alterar"),u=T(e,"alunos","excluir"),d=s.filter(p=>p.nome.toLowerCase().includes(a.toLowerCase())||p.email.toLowerCase().includes(a.toLowerCase())||p.telefone.includes(a));t.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Cadastro de Alunos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Gerencie matrículas, contatos e planos de ensino vinculados aos alunos.
          </p>
        </div>

        ${m?`
              <button class="btn btn-primary" id="btn-new-student">
                ${k.plus} Cadastrar Novo Aluno
              </button>
            `:""}
      </div>

      <!-- Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px;">
        <div style="position: relative; flex: 1; max-width: 400px;">
          <input 
            type="text" 
            id="student-search-input" 
            class="form-input" 
            placeholder="Buscar por nome, e-mail ou telefone..." 
            value="${a}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${k.search}
          </div>
        </div>
      </div>

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Cadastrados (${d.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Contato</th>
                <th>Plano de Ensino</th>
                <th>Status</th>
                <th style="text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${d.length===0?'<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>':d.map(p=>{const $=n.find(S=>S.id===p.planoId),x=p.status==="ativo";return`
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 34px; height: 34px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral);">
                                  ${p.nome[0]}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white);">${p.nome}</div>
                                  <div style="font-size: 0.76rem; color: var(--text-muted);">${p.moduloAtual||"Iniciando"}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div style="font-size: 0.85rem; color: var(--text-white);">${p.telefone||"Sem telefone"}</div>
                              <div style="font-size: 0.78rem; color: var(--text-secondary);">${p.email||"Sem e-mail"}</div>
                            </td>
                            <td>
                              <span style="font-size: 0.88rem; color: var(--text-secondary);">${($==null?void 0:$.nome)||"Nenhum plano"}</span>
                            </td>
                            <td>
                              <span class="badge ${x?"badge-success":"badge-warning"}">
                                ${x?"● Ativo":"○ Inativo"}
                              </span>
                            </td>
                            <td style="text-align: right;">
                              ${y?`
                                    <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${p.id}" title="Editar Aluno">
                                      ${k.edit}
                                    </button>
                                  `:""}
                              ${u?`
                                    <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${p.id}" title="Excluir Aluno" style="margin-left: 6px;">
                                      ${k.trash}
                                    </button>
                                  `:""}
                              ${!y&&!u?'<span style="font-size: 0.75rem; color: var(--text-muted);">Visualização</span>':""}
                            </td>
                          </tr>
                        `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;const c=t.querySelector("#student-search-input");c==null||c.addEventListener("input",p=>{a=p.target.value,o();const $=t.querySelector("#student-search-input");$&&($.focus(),$.selectionStart=$.selectionEnd=$.value.length)}),(f=t.querySelector("#btn-new-student"))==null||f.addEventListener("click",()=>{r()}),t.querySelectorAll(".btn-edit-student").forEach(p=>{p.addEventListener("click",$=>{const x=$.currentTarget.dataset.id,S=w.getStudents().find(C=>C.id===x);S&&r(S)})}),t.querySelectorAll(".btn-delete-student").forEach(p=>{p.addEventListener("click",$=>{const x=$.currentTarget.dataset.id,S=w.getStudents().find(C=>C.id===x);S&&confirm(`Tem certeza que deseja excluir o aluno "${S.nome}"?`)&&(w.deleteStudent(S.id,(e==null?void 0:e.nome)||"Administrador"),A(`Aluno "${S.nome}" excluído.`,"info"),o())})})}function r(s){const n=w.getPlans(),m=!!s,y=n.map(d=>`<option value="${d.id}" ${(s==null?void 0:s.planoId)===d.id?"selected":""}>${d.nome}</option>`).join(""),u=`
      <form id="student-modal-form">
        <div class="form-group">
          <label class="form-label" for="student-nome">Nome Completo</label>
          <input type="text" id="student-nome" class="form-input" placeholder="Ex: Carlos Santana" value="${(s==null?void 0:s.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="student-email">E-mail</label>
            <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${(s==null?void 0:s.email)||""}" />
          </div>

          <div class="form-group">
            <label class="form-label" for="student-telefone">Telefone / WhatsApp</label>
            <input type="text" id="student-telefone" class="form-input" placeholder="(11) 99999-9999" value="${(s==null?void 0:s.telefone)||""}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="student-plano">Plano de Ensino</label>
            <select id="student-plano" class="form-select">
              <option value="">Selecione um plano...</option>
              ${y}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="student-status">Status</label>
            <select id="student-status" class="form-select">
              <option value="ativo" ${(s==null?void 0:s.status)==="ativo"?"selected":""}>Ativo</option>
              <option value="inativo" ${(s==null?void 0:s.status)==="inativo"?"selected":""}>Inativo</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="student-modulo">Módulo Atual</label>
          <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${(s==null?void 0:s.moduloAtual)||""}" />
        </div>

        <div class="form-group">
          <label class="form-label" for="student-obs">Observações / Histórico</label>
          <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Informações pedagógicas, preferências musicais...">${(s==null?void 0:s.observacoes)||""}</textarea>
        </div>
      </form>
    `;U({title:m?"Editar Aluno":"Cadastrar Novo Aluno",bodyHtml:u,confirmText:m?"Salvar Alterações":"Cadastrar Aluno",onConfirm:()=>{const d=document.getElementById("student-nome").value.trim(),c=document.getElementById("student-email").value.trim(),f=document.getElementById("student-telefone").value.trim(),p=document.getElementById("student-plano").value,$=document.getElementById("student-status").value,x=document.getElementById("student-modulo").value.trim(),S=document.getElementById("student-obs").value.trim();if(!d)return A("Informe o nome do aluno.","error"),!1;const C=(e==null?void 0:e.nome)||"Administrador";return m&&s?(w.updateStudent(s.id,{nome:d,email:c,telefone:f,planoId:p,status:$,moduloAtual:x,observacoes:S},C),A("Dados do aluno atualizados com sucesso!","success")):(w.addStudent({nome:d,email:c,telefone:f,planoId:p,status:$,moduloAtual:x,observacoes:S},C),A("Aluno cadastrado com sucesso!","success")),o(),!0}})}return o(),t}const O=[{key:"alunos",title:"Alunos",icon:"👥",items:[{key:"acesso",label:"Acesso ao formulário de alunos"},{key:"cadastrar",label:"Cadastrar novo aluno"},{key:"alterar",label:"Alterar aluno"},{key:"excluir",label:"Excluir aluno"}]},{key:"agenda",title:"Agenda",icon:"📅",items:[{key:"acesso",label:"Acesso ao formulário de agenda"},{key:"cadastrar",label:"Criar novo agendamento"},{key:"alterar",label:"Alterar agendamento"},{key:"excluir",label:"Excluir agendamento"}]},{key:"planos",title:"Planos de Ensino",icon:"🎵",items:[{key:"acesso",label:"Acesso ao formulário de planos de ensino"},{key:"cadastrar",label:"Cadastrar novo plano"},{key:"alterar",label:"Alterar plano e módulos"},{key:"excluir",label:"Excluir plano de ensino"}]},{key:"home",title:"Início",icon:"🏠",items:[{key:"acesso",label:"Acesso ao formulário da página inicial (Início)"}]},{key:"auditoria",title:"Auditoria",icon:"📋",items:[{key:"acesso",label:"Acesso ao formulário de auditoria"}]},{key:"configuracoes",title:"Configurações",icon:"⚙️",items:[{key:"acesso",label:"Acesso ao formulário de configurações"},{key:"alterar",label:"Alterar dados e parâmetros do sistema"}]}],Q=O.reduce((g,t)=>g+t.items.length,0);function Se(g){let t=0;return O.forEach(e=>{const a=g[e.key];a&&e.items.forEach(o=>{a[o.key]&&t++})}),t}function ke(g){var r;const t=document.createElement("div"),e=B.getCurrentUser();if((e==null?void 0:e.papel)!=="admin")return t.innerHTML=`
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
    `,(r=t.querySelector("#btn-unauth-home"))==null||r.addEventListener("click",()=>g("home")),t;function a(){var n;const s=w.getUsers();t.innerHTML=`
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

        <button class="btn btn-primary" id="btn-new-user">
          ${k.plus} Cadastrar Novo Usuário
        </button>
      </div>

      <!-- Alerta Informativo sobre a Regra do Administrador Inicial -->
      <div style="margin-bottom: 20px; background-color: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 1.2rem; color: var(--color-coral);">🛡️</div>
        <div style="font-size: 0.84rem; color: var(--text-secondary);">
          <strong style="color: var(--text-white);">Regra de Segurança:</strong> Apenas administradores acessam esta aba. O usuário administrador do sistema é protegido contra exclusão, mas seu login e senha podem ser alterados livremente.
        </div>
      </div>

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${s.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Login</th>
                <th>Perfil</th>
                <th>Permissões Detalhadas</th>
                <th>Tipo</th>
                <th style="text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${s.map(m=>{const y=m.papel==="admin"?"Administrador":m.papel==="professor"?"Professor":"Atendente",u=G(m),d=Se(u);return`
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 10px;">
                          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${m.isSistema?"var(--color-coral)":"#282b3a"}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.82rem; color: #ffffff;">
                            ${m.nome[0]||"U"}
                          </div>
                          <div>
                            <div style="font-weight: 600; color: var(--text-white);">${m.nome}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${m.isSistema?"Administrador Raiz":"Usuário Padrão"}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <code style="background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 4px; font-size: 0.85rem; color: #ff9187;">
                          ${m.login}
                        </code>
                      </td>
                      <td>
                        <span class="badge ${m.papel==="admin"?"badge-coral":"badge-info"}">
                          ${y}
                        </span>
                      </td>
                      <td>
                        ${m.papel==="admin"?`<span class="badge badge-coral" title="Acesso total a todos os formulários e ações">Acesso Total (${Q}/${Q})</span>`:`
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <span class="badge ${d>0?"badge-success":"badge-danger"}">
                                  ${d} de ${Q} ações
                                </span>
                                <span style="font-size: 0.72rem; color: var(--text-muted);">
                                  (${u.alunos.acesso?"Alunos":""}${u.agenda.acesso?", Agenda":""}${u.planos.acesso?", Planos":""})
                                </span>
                              </div>
                            `}
                      </td>
                      <td>
                        ${m.isSistema?'<span style="font-size: 0.78rem; color: #f59e0b; font-weight: 600;">🔒 Sistema (Protegido)</span>':'<span style="font-size: 0.78rem; color: var(--text-muted);">Comum</span>'}
                      </td>
                      <td style="text-align: right;">
                        <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${m.id}" title="Editar Dados e Permissões">
                          ${k.edit}
                        </button>
                        ${m.isSistema?`<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.3; cursor: not-allowed; margin-left: 6px;">
                                 ${k.trash}
                               </button>`:`<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${m.id}" title="Excluir Usuário" style="margin-left: 6px;">
                                 ${k.trash}
                               </button>`}
                      </td>
                    </tr>
                  `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(n=t.querySelector("#btn-new-user"))==null||n.addEventListener("click",()=>{o()}),t.querySelectorAll(".btn-edit-user").forEach(m=>{m.addEventListener("click",y=>{const u=y.currentTarget.dataset.id,d=w.getUsers().find(c=>c.id===u);d&&o(d)})}),t.querySelectorAll(".btn-delete-user").forEach(m=>{m.addEventListener("click",y=>{const u=y.currentTarget.dataset.id,d=w.getUsers().find(c=>c.id===u);if(d&&confirm(`Tem certeza que deseja excluir o usuário "${d.nome}" (login: ${d.login})?`))try{w.deleteUser(d.id,(e==null?void 0:e.nome)||"Administrador"),A(`Usuário "${d.nome}" excluído.`,"info"),a()}catch(c){A(c.message||"Erro ao excluir usuário.","error")}})})}function o(s){var x,S,C,I;const n=!!s,m=s?s.papel:"professor",y=m==="admin",u=G(s),d=`
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${(s==null?void 0:s.nome)||""}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${(s==null?void 0:s.login)||""}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${n?"Nova senha":"Ex: 123456"}" value="${(s==null?void 0:s.senha)||""}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
          <select id="user-papel" class="form-select" ${s!=null&&s.isSistema?'disabled title="O administrador raiz deve manter o perfil admin"':""}>
            <option value="admin" ${m==="admin"?"selected":""}>Administrador (Acesso Total)</option>
            <option value="professor" ${m==="professor"?"selected":""}>Professor</option>
            <option value="atendente" ${m==="atendente"?"selected":""}>Atendente</option>
          </select>
        </div>

        ${s!=null&&s.isSistema?`<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
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
            ${O.map(l=>{const h=u[l.key]||{},v=l.items.filter(b=>h[b.key]).length;return`
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
                          ${v}/${l.items.length} liberadas
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
                    ${l.items.map(b=>{const i=!!h[b.key];return`
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${l.key}-${b.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${i?"rgba(34, 197, 94, 0.06)":"rgba(234, 67, 53, 0.04)"}; border: 1px solid ${i?"rgba(34, 197, 94, 0.25)":"rgba(234, 67, 53, 0.15)"}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${l.key}-${b.key}" 
                                data-group="${l.key}" 
                                data-action="${b.key}" 
                                ${i?"checked":""} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${b.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${l.key}-${b.key}" 
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
    `;U({title:n?`Editar Usuário: ${s.nome}`:"Cadastrar Novo Usuário",bodyHtml:d,modalClass:"modal-lg",confirmText:n?"Salvar Alterações":"Cadastrar Usuário",onConfirm:()=>{var D,F,H,R,P,q,J,K,V,Z,ee,te,ae,oe,se,ne;const l=document.getElementById("user-nome").value.trim(),h=document.getElementById("user-login").value.trim(),v=document.getElementById("user-senha").value.trim(),b=document.getElementById("user-papel"),i=b?b.value:"professor";if(!l||!h||!v)return A("Preencha Nome, Login e Senha.","error"),!1;if(w.getUsers().find(re=>re.login===h&&re.id!==(s==null?void 0:s.id)))return A(`O login "${h}" já está em uso por outro usuário.`,"error"),!1;let L;i==="admin"?L=JSON.parse(JSON.stringify(j.admin)):L={alunos:{acesso:((D=document.getElementById("perm-alunos-acesso"))==null?void 0:D.checked)??!1,cadastrar:((F=document.getElementById("perm-alunos-cadastrar"))==null?void 0:F.checked)??!1,alterar:((H=document.getElementById("perm-alunos-alterar"))==null?void 0:H.checked)??!1,excluir:((R=document.getElementById("perm-alunos-excluir"))==null?void 0:R.checked)??!1},agenda:{acesso:((P=document.getElementById("perm-agenda-acesso"))==null?void 0:P.checked)??!1,cadastrar:((q=document.getElementById("perm-agenda-cadastrar"))==null?void 0:q.checked)??!1,alterar:((J=document.getElementById("perm-agenda-alterar"))==null?void 0:J.checked)??!1,excluir:((K=document.getElementById("perm-agenda-excluir"))==null?void 0:K.checked)??!1},planos:{acesso:((V=document.getElementById("perm-planos-acesso"))==null?void 0:V.checked)??!1,cadastrar:((Z=document.getElementById("perm-planos-cadastrar"))==null?void 0:Z.checked)??!1,alterar:((ee=document.getElementById("perm-planos-alterar"))==null?void 0:ee.checked)??!1,excluir:((te=document.getElementById("perm-planos-excluir"))==null?void 0:te.checked)??!1},home:{acesso:((ae=document.getElementById("perm-home-acesso"))==null?void 0:ae.checked)??!1},auditoria:{acesso:((oe=document.getElementById("perm-auditoria-acesso"))==null?void 0:oe.checked)??!1},configuracoes:{acesso:((se=document.getElementById("perm-configuracoes-acesso"))==null?void 0:se.checked)??!1,alterar:((ne=document.getElementById("perm-configuracoes-alterar"))==null?void 0:ne.checked)??!1}};const z=(e==null?void 0:e.nome)||"Administrador";return n&&s?(w.updateUser(s.id,{nome:l,login:h,senha:v,papel:s.isSistema?"admin":i,permissoes:s.isSistema?j.admin:L},z),A("Usuário e permissões atualizados com sucesso!","success")):(w.addUser({nome:l,login:h,senha:v,papel:i,permissoes:L},z),A("Novo usuário cadastrado com sucesso!","success")),a(),!0}});const c=document.getElementById("user-papel"),f=document.getElementById("user-permissions-section"),p=(l,h,v)=>{const b=document.getElementById(`row-perm-${l}-${h}`),i=document.getElementById(`badge-perm-${l}-${h}`);b&&i&&(v?(b.style.background="rgba(34, 197, 94, 0.06)",b.style.borderColor="rgba(34, 197, 94, 0.25)",i.className="badge badge-success",i.textContent="Liberado"):(b.style.background="rgba(234, 67, 53, 0.04)",b.style.borderColor="rgba(234, 67, 53, 0.15)",i.className="badge badge-coral",i.textContent="Bloqueado")),$(l)},$=l=>{const h=document.getElementById(`group-counter-${l}`),v=O.find(b=>b.key===l);if(h&&v){let b=0;v.items.forEach(i=>{const E=document.getElementById(`perm-${l}-${i.key}`);E&&E.checked&&b++}),h.textContent=`${b}/${v.items.length} liberadas`}};c==null||c.addEventListener("change",()=>{const l=c.value;if(l==="admin")f.style.display="none";else if(f.style.display="block",!n){const h=j[l]||j.professor;O.forEach(v=>{v.items.forEach(b=>{var E;const i=document.getElementById(`perm-${v.key}-${b.key}`);if(i){const L=((E=h[v.key])==null?void 0:E[b.key])??!1;i.checked=L,p(v.key,b.key,L)}})})}}),O.forEach(l=>{const h=document.getElementById(`header-group-${l.key}`),v=document.getElementById(`group-body-${l.key}`),b=document.getElementById(`arrow-perm-${l.key}`);h==null||h.addEventListener("click",i=>{if(!i.target.closest(".btn-group-toggle")&&v&&b){const E=v.style.display==="flex";v.style.display=E?"none":"flex",b.style.transform=E?"rotate(0deg)":"rotate(180deg)"}}),l.items.forEach(i=>{const E=document.getElementById(`perm-${l.key}-${i.key}`);E==null||E.addEventListener("change",()=>{if(p(l.key,i.key,E.checked),E.checked&&i.key!=="acesso"){const L=document.getElementById(`perm-${l.key}-acesso`);L&&!L.checked&&(L.checked=!0,p(l.key,"acesso",!0))}!E.checked&&i.key==="acesso"&&l.items.forEach(L=>{if(L.key!=="acesso"){const z=document.getElementById(`perm-${l.key}-${L.key}`);z&&z.checked&&(z.checked=!1,p(l.key,L.key,!1))}})})}),document.querySelectorAll(`.btn-group-toggle[data-group="${l.key}"]`).forEach(i=>{i.addEventListener("click",E=>{E.stopPropagation();const L=l.items.map(D=>document.getElementById(`perm-${l.key}-${D.key}`)).filter(Boolean),z=L.every(D=>D.checked);L.forEach(D=>{D.checked=!z,p(l.key,D.dataset.action,!z)})})})}),(x=document.getElementById("btn-perm-expand"))==null||x.addEventListener("click",()=>{O.forEach(l=>{const h=document.getElementById(`group-body-${l.key}`),v=document.getElementById(`arrow-perm-${l.key}`);h&&v&&(h.style.display="flex",v.style.transform="rotate(180deg)")})}),(S=document.getElementById("btn-perm-collapse"))==null||S.addEventListener("click",()=>{O.forEach(l=>{const h=document.getElementById(`group-body-${l.key}`),v=document.getElementById(`arrow-perm-${l.key}`);h&&v&&(h.style.display="none",v.style.transform="rotate(0deg)")})}),(C=document.getElementById("btn-perm-all"))==null||C.addEventListener("click",()=>{O.forEach(l=>{l.items.forEach(h=>{const v=document.getElementById(`perm-${l.key}-${h.key}`);v&&(v.checked=!0,p(l.key,h.key,!0))})})}),(I=document.getElementById("btn-perm-none"))==null||I.addEventListener("click",()=>{O.forEach(l=>{l.items.forEach(h=>{const v=document.getElementById(`perm-${l.key}-${h.key}`);v&&(v.checked=!1,p(l.key,h.key,!1))})})})}return a(),t}function Ie(g){const t=document.createElement("div"),e=B.getCurrentUser();function a(){var y;const r=w.getPlans(),s=T(e,"planos","cadastrar"),n=T(e,"planos","alterar"),m=T(e,"planos","excluir");t.innerHTML=`
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino &amp; Módulos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estruture trilhas pedagógicas personalizadas com módulos encadeados.
          </p>
        </div>

        ${s?`
              <button class="btn btn-primary" id="btn-new-plan">
                ${k.plus} Cadastrar Novo Plano
              </button>
            `:""}
      </div>

      <!-- Lista de Cards de Planos -->
      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${r.length===0?'<div class="panel-card" style="padding: 40px; text-align: center; color: var(--text-muted);">Nenhum plano de ensino cadastrado.</div>':r.map(u=>`
                    <div class="panel-card" style="margin-bottom: 0;">
                      <div class="panel-card-header" style="background-color: rgba(255, 255, 255, 0.02);">
                        <div style="display: flex; align-items: center; gap: 14px;">
                          <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral);">
                            ${k.planos}
                          </div>
                          <div>
                            <h3 class="panel-card-title">${u.nome}</h3>
                            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${u.descricao||"Sem descrição cadastrada"}</p>
                          </div>
                        </div>

                        <div style="display: flex; gap: 8px;">
                          ${n?`
                                <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${u.id}" title="Editar Plano e Módulos">
                                  ${k.edit}
                                </button>
                              `:""}
                          ${m?`
                                <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${u.id}" title="Excluir Plano">
                                  ${k.trash}
                                </button>
                              `:""}
                          ${!n&&!m?'<span style="font-size: 0.75rem; color: var(--text-muted); align-self: center;">Visualização</span>':""}
                        </div>
                      </div>

                      <!-- Listagem dos Módulos Aninhados -->
                      <div style="padding: 18px 24px;">
                        <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.05em;">
                          Módulos Integrados (${u.modulos.length})
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
                          ${u.modulos.length===0?'<div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic;">Nenhum módulo adicionado neste plano.</div>':u.modulos.map((d,c)=>`
                                    <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
                                      <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--color-coral); color: #fff; font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                        ${c+1}
                                      </div>
                                      <span style="font-size: 0.86rem; color: var(--text-white); font-weight: 500;">${d.titulo}</span>
                                    </div>
                                  `).join("")}
                        </div>
                      </div>
                    </div>
                  `).join("")}
      </div>
    `,(y=t.querySelector("#btn-new-plan"))==null||y.addEventListener("click",()=>{o()}),t.querySelectorAll(".btn-edit-plan").forEach(u=>{u.addEventListener("click",d=>{const c=d.currentTarget.dataset.id,f=w.getPlans().find(p=>p.id===c);f&&o(f)})}),t.querySelectorAll(".btn-delete-plan").forEach(u=>{u.addEventListener("click",d=>{const c=d.currentTarget.dataset.id,f=w.getPlans().find(p=>p.id===c);f&&confirm(`Tem certeza que deseja excluir o plano "${f.nome}" e todos os seus módulos?`)&&(w.deletePlan(f.id,(e==null?void 0:e.nome)||"Administrador"),A(`Plano "${f.nome}" excluído.`,"info"),a())})})}function o(r){const s=!!r;let n=r?JSON.parse(JSON.stringify(r.modulos)):[{id:"m1",ordem:1,titulo:"Módulo 1: Fundamentos"},{id:"m2",ordem:2,titulo:"Módulo 2: Aprofundamento Prático"}];function m(){return n.map((d,c)=>`
            <div class="module-row" data-idx="${c}" style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-coral); width: 20px;">#${c+1}</span>
              <input 
                type="text" 
                class="form-input module-title-input" 
                value="${d.titulo}" 
                placeholder="Ex: Módulo ${c+1} - Nome do módulo" 
                style="flex: 1; padding: 8px 12px; font-size: 0.88rem;"
              />
              <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-idx="${c}" title="Remover Módulo">
                &times;
              </button>
            </div>
          `).join("")}const y=`
      <form id="plan-modal-form">
        <div class="form-group">
          <label class="form-label" for="plan-nome">Nome do Plano de Ensino</label>
          <input type="text" id="plan-nome" class="form-input" placeholder="Ex: Plano 1 ou Teoria Musical Avançada" value="${(r==null?void 0:r.nome)||""}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="plan-desc">Descrição / Objetivo do Plano</label>
          <textarea id="plan-desc" class="form-textarea" rows="2" placeholder="Resumo dos objetivos e público-alvo...">${(r==null?void 0:r.descricao)||""}</textarea>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label class="form-label" style="margin-bottom: 0;">Módulos do Plano (Hierarquia)</label>
            <button type="button" class="btn btn-secondary" id="btn-add-module-row" style="padding: 4px 10px; font-size: 0.78rem;">
              + Adicionar Módulo
            </button>
          </div>

          <div id="modules-container">
            ${m()}
          </div>
        </div>
      </form>
    `;U({title:s?`Editar Plano: ${r.nome}`:"Cadastrar Novo Plano de Ensino",bodyHtml:y,confirmText:s?"Salvar Alterações":"Cadastrar Plano",onConfirm:()=>{const d=document.getElementById("plan-nome").value.trim(),c=document.getElementById("plan-desc").value.trim(),f=document.querySelectorAll(".module-title-input"),p=[];if(f.forEach((x,S)=>{const C=x.value.trim();C&&p.push({id:"mod_"+(S+1)+"_"+Date.now(),ordem:S+1,titulo:C})}),!d)return A("Informe o nome do plano.","error"),!1;if(p.length===0)return A("Adicione pelo menos um módulo ao plano.","error"),!1;const $=(e==null?void 0:e.nome)||"Administrador";return s&&r?(w.updatePlan(r.id,{nome:d,descricao:c,modulos:p},$),A("Plano de ensino atualizado com sucesso!","success")):(w.addPlan({nome:d,descricao:c,modulos:p},$),A("Plano de ensino cadastrado com sucesso!","success")),a(),!0}});function u(){const d=document.getElementById("modules-container");d&&(d.innerHTML=m(),d.querySelectorAll(".btn-remove-module").forEach(c=>{c.addEventListener("click",f=>{const p=parseInt(f.currentTarget.dataset.idx||"0",10);n.splice(p,1),u()})}),d.querySelectorAll(".module-title-input").forEach((c,f)=>{c.addEventListener("input",p=>{n[f]&&(n[f].titulo=p.target.value)})}))}setTimeout(()=>{var d;(d=document.getElementById("btn-add-module-row"))==null||d.addEventListener("click",()=>{const c=n.length+1;n.push({id:"mod_"+c+"_"+Date.now(),ordem:c,titulo:`Módulo ${c}: `}),u()}),u()},50)}return a(),t}function Ae(g){const t=document.createElement("div");let e=new Date,a="todos",o="";const r=u=>u.toString().padStart(2,"0");function s(u){const d=u.getDate(),f=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][u.getMonth()],p=u.getFullYear(),$=new Date,x=$.getDate()===d&&$.getMonth()===u.getMonth()&&$.getFullYear()===p;return`${d} de ${f} de ${p}${x?" (Hoje)":""}`}function n(u){return`${u.getFullYear()}-${r(u.getMonth()+1)}-${r(u.getDate())}`}function m(){var C,I,l,h,v,b;const u=M.getLogs(),d=new Date,c=`${r(d.getDate())}/${r(d.getMonth()+1)}/${d.getFullYear()}`,f=u.filter(i=>{var E;return(E=i.dataHoraFormatada)==null?void 0:E.startsWith(c)}).length,p=e?`${r(e.getDate())}/${r(e.getMonth()+1)}/${e.getFullYear()}`:"",$=e!==null&&d.getDate()===e.getDate()&&d.getMonth()===e.getMonth()&&d.getFullYear()===e.getFullYear(),x=u.filter(i=>{const E=!e||i.dataHoraFormatada&&i.dataHoraFormatada.startsWith(p)||i.dataHora&&i.dataHora.startsWith(n(e)),L=a==="todos"||i.tela.toLowerCase().includes(a.toLowerCase()),z=o===""||i.usuarioNome.toLowerCase().includes(o.toLowerCase())||i.usuarioLogin.toLowerCase().includes(o.toLowerCase())||i.acao.toLowerCase().includes(o.toLowerCase())||i.detalhes.toLowerCase().includes(o.toLowerCase());return E&&L&&z});t.innerHTML=`
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

        <div style="font-size: 0.82rem; color: var(--text-muted); background: var(--bg-surface); padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; gap: 10px; align-items: center;">
          <span>Hoje: <strong style="color: var(--color-coral);">${f}</strong></span>
          <span style="color: var(--border-subtle);">|</span>
          <span>Total Geral: <strong style="color: var(--text-white);">${u.length}</strong></span>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${e?s(e):"Todo o Histórico"}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${$?"btn-primary":"btn-secondary"}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
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
            value="${e?n(e):""}" 
            title="Selecionar data específica"
          />
        </div>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 260px; max-width: 380px;">
          <input 
            type="text" 
            id="audit-search-input" 
            class="form-input" 
            placeholder="Pesquisar por ação, usuário ou detalhe..." 
            value="${o}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${k.search}
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${["todos","login","agenda","alunos","usuários","plano","configurações"].map(i=>{const E=a.toLowerCase()===i,L=i==="todos"?"Todas as Telas":i.charAt(0).toUpperCase()+i.slice(1);return`
                <button type="button" class="btn ${E?"btn-primary":"btn-secondary"} btn-filter-tela" data-tela="${i}" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${L}
                </button>
              `}).join("")}
        </div>
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${x.length})
            ${e?`<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${p}</span>`:""}
          </h3>
          ${e!==null?`<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${p}</strong></span>`:'<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>'}
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 170px;">Data &amp; Hora</th>
                <th style="width: 180px;">Usuário Responsável</th>
                <th style="width: 150px;">Tela / Módulo</th>
                <th style="width: 180px;">Ação Executada</th>
                <th>Detalhes da Alteração</th>
              </tr>
            </thead>
            <tbody>
              ${x.length===0?`
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${e?`o dia <strong>${p}</strong>`:"o filtro selecionado"}.</div>
                        ${e!==null?`<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`:""}
                      </td>
                    </tr>
                  `:x.map(i=>`
                          <tr>
                            <td>
                              <div style="font-family: monospace; font-size: 0.84rem; color: var(--text-white);">
                                ${i.dataHoraFormatada}
                              </div>
                            </td>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--color-coral);">
                                  ${i.usuarioNome[0]||"U"}
                                </div>
                                <div>
                                  <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-white);">${i.usuarioNome}</div>
                                  <div style="font-size: 0.72rem; color: var(--text-muted);">login: ${i.usuarioLogin}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 4px;">
                                ${i.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.85rem; color: #ff9187;">
                                ${i.acao}
                              </strong>
                            </td>
                            <td>
                              <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
                                ${i.detalhes}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(C=t.querySelector("#audit-btn-prev"))==null||C.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()-1),m()}),(I=t.querySelector("#audit-btn-next"))==null||I.addEventListener("click",()=>{e||(e=new Date),e.setDate(e.getDate()+1),m()}),(l=t.querySelector("#audit-btn-today"))==null||l.addEventListener("click",()=>{e=new Date,m()}),(h=t.querySelector("#audit-btn-all"))==null||h.addEventListener("click",()=>{e=null,m()}),(v=t.querySelector("#audit-empty-btn-all"))==null||v.addEventListener("click",()=>{e=null,m()}),(b=t.querySelector("#audit-date-picker"))==null||b.addEventListener("change",i=>{const E=i.target.value;if(E){const[L,z,D]=E.split("-").map(Number);e=new Date(L,z-1,D)}else e=null;m()});const S=t.querySelector("#audit-search-input");S==null||S.addEventListener("input",i=>{o=i.target.value,m();const E=t.querySelector("#audit-search-input");E&&(E.focus(),E.selectionStart=E.selectionEnd=E.value.length)}),t.querySelectorAll(".btn-filter-tela").forEach(i=>{i.addEventListener("click",E=>{a=E.currentTarget.dataset.tela||"todos",m()})})}const y=()=>{m()};return window.addEventListener("audit_updated",y),m(),t}const Ce={usuarios:{collectionName:"usuarios",description:"Armazena credenciais e permissões de acesso ao sistema",schemaFields:{_id:"ObjectId (PK gerada automaticamente pelo MongoDB)",nome:"String (obrigatório)",login:"String (único, obrigatório, indexado)",senhaHash:"String (hash bcrypt da senha)",papel:"String (enum: admin, professor, atendente)",isSistema:"Boolean (se true, não pode ser deletado via API)",criadoEm:"Date (timestamp de criação)",atualizadoEm:"Date (timestamp da última modificação)"},indexes:["{ login: 1 }, { unique: true }"]},alunos:{collectionName:"alunos",description:"Registros cadastrais dos alunos atendidos",schemaFields:{_id:"ObjectId (PK)",nome:"String (obrigatório, indexado)",email:"String",telefone:"String",planoId:"ObjectId (referência para a coleção planos_ensino)",moduloAtual:"String",status:"String (enum: ativo, inativo)",observacoes:"String",criadoEm:"Date"},indexes:['{ nome: "text" }',"{ status: 1 }"]},planos_ensino:{collectionName:"planos_ensino",description:"Planos de ensino e cursos musicais com módulos aninhados",schemaFields:{_id:"ObjectId (PK)",nome:"String (obrigatório)",descricao:"String",modulos:"Array de Subdocumentos [{ id, ordem, titulo, descricao }]",ativo:"Boolean",criadoEm:"Date"},indexes:["{ nome: 1 }"]},agenda:{collectionName:"agenda",description:"Compromissos e horários das aulas de música",schemaFields:{_id:"ObjectId (PK)",titulo:"String (obrigatório)",alunoId:"ObjectId (referência para alunos)",planoId:"ObjectId (referência para planos_ensino)",data:"String YYYY-MM-DD (indexado)",horaInicio:"String HH:mm",horaFim:"String HH:mm",status:"String (enum: agendado, concluido, cancelado)",observacoes:"String"},indexes:["{ data: 1, horaInicio: 1 }","{ alunoId: 1 }"]},auditorias:{collectionName:"auditorias",description:"Trilha de auditoria imutável para compliance e rastreabilidade",schemaFields:{_id:"ObjectId (PK)",dataHora:"Date (timestamp exato)",usuarioId:"String/ObjectId",usuarioLogin:"String",usuarioNome:"String",tela:"String",acao:"String",detalhes:"String"},indexes:["{ dataHora: -1 }","{ tela: 1 }","{ usuarioLogin: 1 }"]}};class Le{static async testConnection(t,e){const a=performance.now();await new Promise(r=>setTimeout(r,200));const o=Math.round(performance.now()-a);return t&&e?{success:!0,latencyMs:o,message:`Conexão bem-sucedida com MongoDB em "${t}/${e}". Esquemas prontos para sincronização.`}:{success:!1,latencyMs:o,message:"URI ou Nome do Banco não informados."}}}function Me(g){const t=document.createElement("div"),e=B.getCurrentUser(),a=w.getSettings(),o=T(e,"configuracoes","alterar");t.innerHTML=`
    <!-- Cabeçalho da Tela -->
    <div style="margin-bottom: 20px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
        Configurações do Sistema
      </h2>
      <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
        Gerencie parâmetros institucionais e a integração oficial com o MongoDB.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; flex-wrap: wrap;">
      <!-- Coluna 1: Dados Gerais da Instituição -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Dados da Instituição</h3>
        </div>

        <div style="padding: 24px;">
          <form id="form-settings-institucional">
            <div class="form-group">
              <label class="form-label" for="cfg-nome">Nome da Escola de Música</label>
              <input type="text" id="cfg-nome" class="form-input" value="${a.nomeEscola||a.nomeClinica||"Acusticamente - Escola de Música"}" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-tel">Telefone / WhatsApp Principal</label>
              <input type="text" id="cfg-tel" class="form-input" value="${a.telefoneContato}" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-email">E-mail de Contato</label>
              <input type="email" id="cfg-email" class="form-input" value="${a.emailContato}" required />
            </div>

            <div style="margin-top: 24px;">
              ${o?`
                    <button type="submit" class="btn btn-primary" id="btn-save-settings">
                      Salvar Configurações
                    </button>
                  `:'<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura (Sem permissão para alterar)</span>'}
            </div>
          </form>
        </div>
      </div>

      <!-- Coluna 2: Configuração e Diagnóstico do MongoDB -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Banco de Dados (MongoDB)</h3>
          <span class="badge badge-success" id="mongo-status-badge">● Operacional</span>
        </div>

        <div style="padding: 24px;">
          <div class="form-group">
            <label class="form-label" for="cfg-mongo-uri">URI de Conexão MongoDB</label>
            <input type="text" id="cfg-mongo-uri" class="form-input" value="${a.mongoUri}" placeholder="mongodb://localhost:27017" />
          </div>

          <div class="form-group">
            <label class="form-label" for="cfg-mongo-db">Nome do Banco (Database)</label>
            <input type="text" id="cfg-mongo-db" class="form-input" value="${a.mongoDatabase}" placeholder="acusticamente_db" />
          </div>

          <div style="display: flex; gap: 10px; margin-top: 18px;">
            <button type="button" class="btn btn-secondary" id="btn-test-mongo">
              Testar Conexão MongoDB
            </button>
          </div>

          <div id="mongo-test-result" style="margin-top: 16px; font-size: 0.82rem; color: var(--text-secondary);"></div>

          <!-- Relação de Coleções MongoDB Registradas -->
          <div style="margin-top: 24px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
            <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px; letter-spacing: 0.05em;">
              Coleções MongoDB Mapeadas
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${Object.values(Ce).map(n=>`
                    <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <strong style="color: var(--text-white); font-size: 0.85rem;">${n.collectionName}</strong>
                        <div style="font-size: 0.72rem; color: var(--text-muted);">${n.description}</div>
                      </div>
                      <span style="font-size: 0.7rem; color: var(--color-coral); font-family: monospace;">Schema Pronto</span>
                    </div>
                  `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Informações do Sistema, Versão & DevHub -->
    <div class="panel-card" style="margin-top: 24px; margin-bottom: 0;">
      <div class="panel-card-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <h3 class="panel-card-title">Sobre o Sistema</h3>
          <span class="badge badge-primary" style="font-family: monospace; font-size: 0.72rem; padding: 2px 8px;">v1.0.0</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted);">
          Desenvolvido por <strong style="color: var(--color-coral); font-weight: 600;">DevHub</strong>
        </span>
      </div>

      <div style="padding: 20px 24px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Plataforma</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-white); margin-top: 4px;">Acusticamente</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Gestão Educacional</div>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Versão da Aplicação</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--color-coral); margin-top: 4px; font-family: monospace;">1.0.0 (Release Oficial)</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Build estável em TypeScript</div>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Desenvolvido por</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-white); margin-top: 4px;">DevHub</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Soluções e Engenharia de Software</div>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Banco de Dados & Engine</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-white); margin-top: 4px;">MongoDB + TypeScript</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Trilha de auditoria em tempo real</div>
          </div>
        </div>
      </div>
    </div>
  `;const r=t.querySelector("#form-settings-institucional");r==null||r.addEventListener("submit",n=>{n.preventDefault();const m=t.querySelector("#cfg-nome").value,y=t.querySelector("#cfg-tel").value,u=t.querySelector("#cfg-email").value,d=t.querySelector("#cfg-mongo-uri").value,c=t.querySelector("#cfg-mongo-db").value;w.updateSettings({nomeEscola:m,nomeClinica:m,telefoneContato:y,emailContato:u,mongoUri:d,mongoDatabase:c},(e==null?void 0:e.nome)||"Administrador"),A("Configurações salvas e auditadas!","success")});const s=t.querySelector("#btn-test-mongo");return s==null||s.addEventListener("click",async()=>{const n=t.querySelector("#cfg-mongo-uri").value,m=t.querySelector("#cfg-mongo-db").value,y=t.querySelector("#mongo-test-result");y.innerHTML='<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';const u=await Le.testConnection(n,m);u.success?(y.innerHTML=`<span style="color: var(--status-success);">✓ ${u.message} (Latência: ${u.latencyMs}ms)</span>`,A("MongoDB validado com sucesso!","success")):(y.innerHTML=`<span style="color: var(--status-danger);">✕ ${u.message}</span>`,A("Falha na validação do MongoDB.","error"))}),t}class De{constructor(){N(this,"currentScreen","home");N(this,"appRoot");this.appRoot=document.getElementById("app"),this.init()}init(){if(!B.isAuthenticated()){this.currentScreen="login",this.render();return}const t=B.getCurrentUser(),e=window.location.hash.replace("#","");e&&["home","agenda","alunos","user","planos","auditoria","configuracoes"].includes(e)&&_(t,e)?this.currentScreen=e:this.currentScreen=this.getFirstAllowedScreen(t),window.addEventListener("hashchange",()=>{const a=window.location.hash.replace("#","");a&&a!==this.currentScreen&&this.navigateTo(a)}),this.render()}getFirstAllowedScreen(t){if(!t)return"login";const e=["home","agenda","alunos","planos","auditoria","configuracoes"];for(const a of e)if(_(t,a))return a;return"home"}navigateTo(t){const e=B.getCurrentUser();if(!_(e,t)){A("Acesso bloqueado: você não possui permissão para acessar este formulário.","error");const a=this.getFirstAllowedScreen(e);this.currentScreen=a,window.location.hash=a,this.render();return}this.currentScreen=t,window.location.hash=t,this.render()}render(){var d;if(this.appRoot.innerHTML="",!B.isAuthenticated()||this.currentScreen==="login"){const c=$e(()=>{const f=B.getCurrentUser();this.navigateTo(this.getFirstAllowedScreen(f))});this.appRoot.appendChild(c);return}const t=document.createElement("div");t.className="app-container";const e=B.getCurrentUser(),a=(e==null?void 0:e.papel)==="admin";t.innerHTML=`
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
            <div class="sidebar-logo">
              ${X(46)}
            </div>
            <span class="sidebar-brand-name">ACUSTICAMENTE</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${k.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${_(e,"home")?`
            <a class="nav-item ${this.currentScreen==="home"?"active":""}" data-screen="home">
              <span class="nav-item-icon">${k.home}</span>
              <span>Início</span>
            </a>
          `:""}

          ${_(e,"agenda")?`
            <a class="nav-item ${this.currentScreen==="agenda"?"active":""}" data-screen="agenda">
              <span class="nav-item-icon">${k.agenda}</span>
              <span>Agenda</span>
            </a>
          `:""}

          ${_(e,"alunos")?`
            <a class="nav-item ${this.currentScreen==="alunos"?"active":""}" data-screen="alunos">
              <span class="nav-item-icon">${k.alunos}</span>
              <span>Alunos</span>
            </a>
          `:""}

          ${_(e,"planos")?`
            <a class="nav-item ${this.currentScreen==="planos"?"active":""}" data-screen="planos">
              <span class="nav-item-icon">${k.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          `:""}

          ${a?`
            <a class="nav-item ${this.currentScreen==="user"?"active":""}" data-screen="user">
              <span class="nav-item-icon">${k.user}</span>
              <span>Usuários</span>
            </a>
          `:""}

          ${_(e,"auditoria")?`
            <a class="nav-item ${this.currentScreen==="auditoria"?"active":""}" data-screen="auditoria">
              <span class="nav-item-icon">${k.auditoria}</span>
              <span>Auditoria</span>
            </a>
          `:""}

          ${_(e,"configuracoes")?`
            <a class="nav-item ${this.currentScreen==="configuracoes"?"active":""}" data-screen="configuracoes">
              <span class="nav-item-icon">${k.configuracoes}</span>
              <span>Configurações</span>
            </a>
          `:""}
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
            ${k.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${k.menu}
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
    `;const o=t.querySelector("#app-sidebar"),r=t.querySelector("#sidebar-backdrop"),s=t.querySelector("#btn-mobile-menu-toggle"),n=t.querySelector("#btn-sidebar-close"),m=c=>{const f=c!==void 0?c:!o.classList.contains("open");o.classList.toggle("open",f),r.classList.toggle("open",f),document.body.style.overflow=f?"hidden":""};s==null||s.addEventListener("click",()=>m(!0)),n==null||n.addEventListener("click",()=>m(!1)),r==null||r.addEventListener("click",()=>m(!1)),t.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",f=>{const p=f.currentTarget.dataset.screen;m(!1),p&&this.navigateTo(p)})}),(d=t.querySelector("#btn-app-logout"))==null||d.addEventListener("click",()=>{confirm("Deseja realmente sair do sistema Acusticamente?")&&B.logout()});const y=t.querySelector("#screen-viewport"),u=this.createViewElement(this.currentScreen);y.appendChild(u),this.appRoot.appendChild(t)}createViewElement(t){const e=a=>this.navigateTo(a);switch(t){case"home":return fe(e);case"agenda":return we();case"alunos":return Ee();case"user":return ke(e);case"planos":return Ie();case"auditoria":return Ae();case"configuracoes":return Me();default:return fe(e)}}getScreenTitle(t){switch(t){case"home":return"Início";case"agenda":return"Agenda";case"alunos":return"Alunos";case"user":return"Usuários";case"planos":return"Planos de Ensino";case"auditoria":return"Auditoria";case"configuracoes":return"Configurações";default:return"Acusticamente"}}getScreenSubtitle(t){switch(t){case"home":return"Visão geral das atividades e aulas agendadas para hoje";case"agenda":return"Calendário mensal com formato compacto e compromissos";case"alunos":return"Listagem, matrículas e acompanhamento de alunos";case"user":return"Gerenciamento de operadores e permissões de acesso";case"planos":return"Estruturação de planos pedagógicos e seus módulos";case"auditoria":return"Histórico auditado de todas as alterações do sistema";case"configuracoes":return"Dados institucionais e conexão com o MongoDB";default:return""}}}document.addEventListener("DOMContentLoaded",()=>{new De});
