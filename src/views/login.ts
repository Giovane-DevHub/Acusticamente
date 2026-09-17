import { authService } from '../services/authService';
import { storageService } from '../services/storageService';
import { renderBrandLogo } from '../assets/logo';
import { showToast } from '../utils/ui';

const REMEMBER_KEY = 'acusticamente_auth_remember';
const MANUAL_LOGOUT_KEY = 'acusticamente_manual_logout';

export function renderLogin(onLoginSuccess: () => void, onBackToSite?: () => void): HTMLElement {
  const container = document.createElement('div');
  container.className = 'login-page';

  const settings = storageService.getSettings();
  const brandTitle = settings.nomeMenu || settings.nomeFantasia || 'Acusticamente';

  let savedAuth = { username: '', password: '', remember: false };
  try {
    const raw = localStorage.getItem(REMEMBER_KEY);
    if (raw) {
      savedAuth = { ...savedAuth, ...JSON.parse(raw) };
    }
  } catch (e) {
    savedAuth = { username: '', password: '', remember: false };
  }

  container.innerHTML = `
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${renderBrandLogo(settings.logotipoCustomizado, 50)}
        </div>
        <h2>${brandTitle}</h2>
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
            ${renderBrandLogo(settings.logotipoCustomizado, 58)}
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
              value="${savedAuth.remember ? savedAuth.username : ''}"
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
              value="${savedAuth.remember ? savedAuth.password : ''}"
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
                ${savedAuth.remember ? 'checked' : ''} 
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
  `;

  const rememberChk = container.querySelector('#login-remember') as HTMLInputElement;
  const btnBackToSite = container.querySelector('#btn-back-to-site') as HTMLElement;

  btnBackToSite?.addEventListener('click', () => {
    if (onBackToSite) {
      onBackToSite();
    } else {
      window.location.hash = 'site';
    }
  });

  // Manipulação de envio do formulário
  const form = container.querySelector('#login-form') as HTMLFormElement;
  form.onsubmit = (e) => {
    e.preventDefault();
    const userEl = container.querySelector('#login-username') as HTMLInputElement;
    const passEl = container.querySelector('#login-password') as HTMLInputElement;

    const username = userEl.value.trim();
    const password = passEl.value.trim();
    const remember = rememberChk.checked;

    const result = authService.login(username, password);

    if (result.success) {
      if (remember) {
        localStorage.setItem(
          REMEMBER_KEY,
          JSON.stringify({ username, password, remember: true })
        );
      } else {
        localStorage.removeItem(REMEMBER_KEY);
      }
      sessionStorage.removeItem(MANUAL_LOGOUT_KEY);

      showToast(`Bem-vindo, ${result.user?.nome}!`, 'success');
      onLoginSuccess();
    } else {
      showToast(result.message, 'error');
    }
  };

  return container;
}
