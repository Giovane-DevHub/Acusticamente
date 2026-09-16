import { authService, hasPermission } from './services/authService';
import { storageService } from './services/storageService';
import { renderBrandLogo } from './assets/logo';
import { ICONS, showToast, confirmAction } from './utils/ui';
import { AppScreen, User } from './types';

// Telas da aplicação com nomes fáceis
import { renderLogin } from './views/login';
import { renderHome } from './views/home';
import { renderAgenda } from './views/agenda';
import { renderAlunos } from './views/alunos';
import { renderUser } from './views/user';
import { renderPlanos } from './views/planos';
import { renderFinanceiro } from './views/financeiro';
import { renderRelatorios } from './views/relatorios';
import { renderAuditoria } from './views/auditoria';
import { renderConfiguracoes } from './views/configuracoes';

class AppRouter {
  private currentScreen: AppScreen = 'home';
  private appRoot: HTMLElement;

  constructor() {
    this.appRoot = document.getElementById('app') as HTMLElement;
    this.init();
  }

  public init(): void {
    // Se não estiver logado, força tela de login
    if (!authService.isAuthenticated()) {
      this.currentScreen = 'login';
      this.render();
      return;
    }

    const currentUser = authService.getCurrentUser();

    // Carrega rota da hash caso exista e valida se o usuário tem permissão
    const hash = window.location.hash.replace('#', '') as AppScreen;
    if (
      hash &&
      ['home', 'agenda', 'alunos', 'planos', 'financeiro', 'relatorios', 'user', 'auditoria', 'configuracoes'].includes(hash) &&
      hasPermission(currentUser, hash)
    ) {
      this.currentScreen = hash;
    } else {
      this.currentScreen = this.getFirstAllowedScreen(currentUser);
    }

    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '') as AppScreen;
      if (newHash && newHash !== this.currentScreen) {
        this.navigateTo(newHash);
      }
    });

    // Atualiza visualização do menu (logotipo e nome) em tempo real quando alterados
    window.addEventListener('app-settings-updated', () => {
      const currentSettings = storageService.getSettings();
      const brandNameEl = document.querySelector('.sidebar-brand-name');
      if (brandNameEl) {
        brandNameEl.textContent = currentSettings.nomeMenu || 'Acusticamente';
      }
      const logoContainerEl = document.querySelector('.sidebar-logo');
      if (logoContainerEl) {
        logoContainerEl.innerHTML = renderBrandLogo(currentSettings.logotipoCustomizado, 46);
      }
    });

    this.render();
  }

  private getFirstAllowedScreen(user: User | null): AppScreen {
    if (!user) return 'login';
    const screens: AppScreen[] = ['home', 'agenda', 'alunos', 'planos', 'financeiro', 'relatorios', 'auditoria', 'configuracoes'];
    for (const s of screens) {
      if (hasPermission(user, s)) return s;
    }
    return 'home';
  }

  public navigateTo(screen: AppScreen): void {
    const currentUser = authService.getCurrentUser();

    // Verificação de permissões do usuário
    if (!hasPermission(currentUser, screen)) {
      showToast('Acesso bloqueado: você não possui permissão para acessar este formulário.', 'error');
      const fallback = this.getFirstAllowedScreen(currentUser);
      this.currentScreen = fallback;
      window.location.hash = fallback;
      this.render();
      return;
    }

    this.currentScreen = screen;
    window.location.hash = screen;
    this.render();
  }

  private render(): void {
    this.appRoot.innerHTML = '';

    // 1. Tela de Login (não exibe sidebar nem topbar)
    if (!authService.isAuthenticated() || this.currentScreen === 'login') {
      const loginView = renderLogin(() => {
        const user = authService.getCurrentUser();
        this.navigateTo(this.getFirstAllowedScreen(user));
      });
      this.appRoot.appendChild(loginView);
      return;
    }

    // 2. Layout Principal: Sidebar + Conteúdo
    const layout = document.createElement('div');
    layout.className = 'app-container';

    const currentUser = authService.getCurrentUser();
    const isAdmin = currentUser?.papel === 'admin';
    const currentSettings = storageService.getSettings();
    const menuBrandName = currentSettings.nomeMenu || 'Acusticamente';

    layout.innerHTML = `
      <!-- Fundo translúcido para fechar sidebar no mobile -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <!-- Sidebar Lateral -->
      <aside class="sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            <div class="sidebar-logo">
              ${renderBrandLogo(currentSettings.logotipoCustomizado, 46)}
            </div>
            <span class="sidebar-brand-name" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${menuBrandName}</span>
          </div>
          <button type="button" class="btn-sidebar-close" id="btn-sidebar-close" title="Fechar menu">
            ${ICONS.close}
          </button>
        </div>

        <nav class="sidebar-nav">
          ${hasPermission(currentUser, 'home') ? `
            <a class="nav-item ${this.currentScreen === 'home' ? 'active' : ''}" data-screen="home">
              <span class="nav-item-icon">${ICONS.home}</span>
              <span>Início</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'agenda') ? `
            <a class="nav-item ${this.currentScreen === 'agenda' ? 'active' : ''}" data-screen="agenda">
              <span class="nav-item-icon">${ICONS.agenda}</span>
              <span>Agenda</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'alunos') ? `
            <a class="nav-item ${this.currentScreen === 'alunos' ? 'active' : ''}" data-screen="alunos">
              <span class="nav-item-icon">${ICONS.alunos}</span>
              <span>Alunos</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'planos') ? `
            <a class="nav-item ${this.currentScreen === 'planos' ? 'active' : ''}" data-screen="planos">
              <span class="nav-item-icon">${ICONS.planos}</span>
              <span>Planos de Ensino</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'financeiro') ? `
            <a class="nav-item ${this.currentScreen === 'financeiro' ? 'active' : ''}" data-screen="financeiro">
              <span class="nav-item-icon">${ICONS.financeiro}</span>
              <span>Financeiro</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'relatorios') ? `
            <a class="nav-item ${this.currentScreen === 'relatorios' ? 'active' : ''}" data-screen="relatorios">
              <span class="nav-item-icon">${ICONS.relatorios}</span>
              <span>Relatórios</span>
            </a>
          ` : ''}

          ${isAdmin ? `
            <a class="nav-item ${this.currentScreen === 'user' ? 'active' : ''}" data-screen="user">
              <span class="nav-item-icon">${ICONS.user}</span>
              <span>Usuários</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'auditoria') ? `
            <a class="nav-item ${this.currentScreen === 'auditoria' ? 'active' : ''}" data-screen="auditoria">
              <span class="nav-item-icon">${ICONS.auditoria}</span>
              <span>Auditoria</span>
            </a>
          ` : ''}

          ${hasPermission(currentUser, 'configuracoes') ? `
            <a class="nav-item ${this.currentScreen === 'configuracoes' ? 'active' : ''}" data-screen="configuracoes">
              <span class="nav-item-icon">${ICONS.configuracoes}</span>
              <span>Configurações</span>
            </a>
          ` : ''}
        </nav>

        <div class="sidebar-footer">
          <div class="user-profile-badge">
            <div class="user-avatar">
              ${(currentUser?.nome || 'A')[0]}
            </div>
            <div class="user-info">
              <span class="user-info-name">${currentUser?.nome || 'Administrador'}</span>
              <span class="user-info-role">${currentUser?.papel === 'admin' ? 'Administrador' : currentUser?.papel || 'Usuário'}</span>
            </div>
          </div>

          <button class="btn-logout" id="btn-app-logout" title="Sair do sistema">
            ${ICONS.logout}
          </button>
        </div>
      </aside>

      <!-- Área de Conteúdo Principal -->
      <main class="main-content">
        <header class="top-bar">
          <div style="display: flex; align-items: center; gap: 14px;">
            <!-- Botão Hambúrguer Mobile -->
            <button type="button" class="btn-mobile-toggle" id="btn-mobile-menu-toggle" title="Abrir menu de navegação">
              ${ICONS.menu}
            </button>

            <div class="top-bar-title-group">
              <h1 id="topbar-title">${this.getScreenTitle(this.currentScreen)}</h1>
              <p id="topbar-subtitle">${this.getScreenSubtitle(this.currentScreen)}</p>
            </div>
          </div>

          <div class="top-bar-actions">
            <span class="topbar-date-pill">
              📅 ${new Date().toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })}
            </span>
          </div>
        </header>

        <div class="content-body" id="screen-viewport">
          <!-- A tela ativa será inserida aqui -->
        </div>
      </main>
    `;

    // Controle da Sidebar no Mobile
    const sidebarEl = layout.querySelector('#app-sidebar') as HTMLElement;
    const backdropEl = layout.querySelector('#sidebar-backdrop') as HTMLElement;
    const btnToggle = layout.querySelector('#btn-mobile-menu-toggle') as HTMLElement;
    const btnCloseSidebar = layout.querySelector('#btn-sidebar-close') as HTMLElement;

    const toggleSidebar = (open?: boolean) => {
      const shouldOpen = open !== undefined ? open : !sidebarEl.classList.contains('open');
      sidebarEl.classList.toggle('open', shouldOpen);
      backdropEl.classList.toggle('open', shouldOpen);
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    };

    btnToggle?.addEventListener('click', () => toggleSidebar(true));
    btnCloseSidebar?.addEventListener('click', () => toggleSidebar(false));
    backdropEl?.addEventListener('click', () => toggleSidebar(false));

    // Conectar eventos dos itens de menu (e fechar sidebar no mobile ao clicar)
    layout.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const screen = (e.currentTarget as HTMLElement).dataset.screen as AppScreen;
        toggleSidebar(false);
        if (screen) this.navigateTo(screen);
      });
    });

    // Conectar logout
    layout.querySelector('#btn-app-logout')?.addEventListener('click', () => {
      confirmAction({
        title: 'Sair do Sistema',
        message: 'Deseja realmente encerrar sua sessão no sistema Acusticamente?',
        confirmText: 'Sair',
        confirmBtnClass: 'btn-danger',
        onConfirm: () => {
          authService.logout();
        }
      });
    });

    // Renderizar a tela específica dentro do viewport
    const viewport = layout.querySelector('#screen-viewport') as HTMLElement;
    const viewElement = this.createViewElement(this.currentScreen);
    viewport.appendChild(viewElement);

    this.appRoot.appendChild(layout);
  }

  private createViewElement(screen: AppScreen): HTMLElement {
    const navCallback = (s: string) => this.navigateTo(s as AppScreen);

    switch (screen) {
      case 'home':
        return renderHome(navCallback);
      case 'agenda':
        return renderAgenda(navCallback);
      case 'alunos':
        return renderAlunos(navCallback);
      case 'user':
        return renderUser(navCallback);
      case 'planos':
        return renderPlanos(navCallback);
      case 'financeiro':
        return renderFinanceiro(navCallback);
      case 'relatorios':
        return renderRelatorios(navCallback);
      case 'auditoria':
        return renderAuditoria(navCallback);
      case 'configuracoes':
        return renderConfiguracoes(navCallback);
      default:
        return renderHome(navCallback);
    }
  }

  private getScreenTitle(screen: AppScreen): string {
    switch (screen) {
      case 'home': return 'Início';
      case 'agenda': return 'Agenda';
      case 'alunos': return 'Alunos';
      case 'user': return 'Usuários';
      case 'planos': return 'Planos de Ensino';
      case 'financeiro': return 'Financeiro & Mensalidades';
      case 'relatorios': return 'Relatórios Gerenciais';
      case 'auditoria': return 'Auditoria';
      case 'configuracoes': return 'Configurações';
      default: return 'Acusticamente';
    }
  }

  private getScreenSubtitle(screen: AppScreen): string {
    switch (screen) {
      case 'home': return 'Visão geral das atividades e aulas agendadas para hoje';
      case 'agenda': return 'Calendário mensal com formato compacto e compromissos';
      case 'alunos': return 'Listagem, matrículas e acompanhamento de alunos';
      case 'user': return 'Gerenciamento de operadores e permissões de acesso';
      case 'planos': return 'Estruturação de planos pedagógicos e seus módulos';
      case 'financeiro': return 'Controle de recebimentos, mensalidades e baixas';
      case 'relatorios': return 'Emissão de relatórios e exportação para PDF corporativo';
      case 'auditoria': return 'Histórico auditado de todas as alterações do sistema';
      case 'configuracoes': return 'Dados institucionais e conexão com o MongoDB';
      default: return '';
    }
  }
}

// Inicializa aplicação
document.addEventListener('DOMContentLoaded', () => {
  new AppRouter();
});
