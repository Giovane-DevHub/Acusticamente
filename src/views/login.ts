import { authService } from '../services/authService';
import { getAcusticamenteLogo } from '../assets/logo';
import { showToast } from '../utils/ui';

const REMEMBER_KEY = 'acusticamente_auth_remember';
const MANUAL_LOGOUT_KEY = 'acusticamente_manual_logout';

export function renderLogin(onLoginSuccess: () => void): HTMLElement {
  const container = document.createElement('div');
  container.className = 'login-page';

  let savedAuth = { username: '', password: '', remember: false, autoLogin: false };
  try {
    const raw = localStorage.getItem(REMEMBER_KEY);
    if (raw) {
      savedAuth = { ...savedAuth, ...JSON.parse(raw) };
    }
  } catch (e) {
    savedAuth = { username: '', password: '', remember: false, autoLogin: false };
  }

  container.innerHTML = `
    <!-- Lado Esquerdo Institucional / Pitch -->
    <div class="login-branding-side">
      <div class="login-brand-header">
        <div class="sidebar-logo">
          ${getAcusticamenteLogo(50)}
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
            ${getAcusticamenteLogo(58)}
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

          <!-- Opções de Acesso: Lembrar Senha & Entrar Automaticamente com espaçamento adequado -->
          <div style="margin: 18px 0 24px 0; display: flex; flex-direction: column; gap: 10px; padding: 12px 14px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-remember" 
                ${savedAuth.remember ? 'checked' : ''} 
                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer;"
              />
              <span style="color: var(--text-primary); font-weight: 500;">Lembrar senha</span>
            </label>

            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
              <input 
                type="checkbox" 
                id="login-autologin" 
                ${savedAuth.autoLogin ? 'checked' : ''} 
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
  `;

  const rememberChk = container.querySelector('#login-remember') as HTMLInputElement;
  const autologinChk = container.querySelector('#login-autologin') as HTMLInputElement;

  // Se marcar entrar automaticamente, força a marcar lembrar senha
  autologinChk?.addEventListener('change', () => {
    if (autologinChk.checked && !rememberChk.checked) {
      rememberChk.checked = true;
    }
  });

  // Se desmarcar lembrar senha, desmarca entrar automaticamente
  rememberChk?.addEventListener('change', () => {
    if (!rememberChk.checked && autologinChk.checked) {
      autologinChk.checked = false;
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
    const autoLogin = autologinChk.checked;

    const result = authService.login(username, password);

    if (result.success) {
      if (remember) {
        localStorage.setItem(
          REMEMBER_KEY,
          JSON.stringify({ username, password, remember: true, autoLogin })
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

  // Login automático se configurado e se não tiver sido acionado um logout manual nesta sessão
  const isManualLogout = sessionStorage.getItem(MANUAL_LOGOUT_KEY) === 'true';
  if (
    savedAuth.autoLogin &&
    savedAuth.remember &&
    savedAuth.username &&
    savedAuth.password &&
    !isManualLogout
  ) {
    setTimeout(() => {
      // Confirma que o container ainda está na tela
      if (!container.isConnected && !document.body.contains(container)) return;
      const result = authService.login(savedAuth.username, savedAuth.password);
      if (result.success) {
        showToast(`Bem-vindo de volta, ${result.user?.nome}!`, 'success');
        onLoginSuccess();
      }
    }, 100);
  }

  return container;
}
