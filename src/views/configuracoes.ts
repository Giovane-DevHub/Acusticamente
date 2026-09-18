import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { MongoConnectionService } from '../services/mongoService';
import { renderBrandLogo } from '../assets/logo';
import { showToast, confirmAction, applyInputMask, maskCNPJ, maskCEP, maskPhone, maskIE, isValidEmail } from '../utils/ui';

export function renderConfiguracoes(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  const settings = storageService.getSettings();
  const canAlter = hasActionPermission(user, 'configuracoes', 'alterar');

  container.innerHTML = `
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
                  value="${settings.nomeFantasia || settings.nomeEscola || 'Acusticamente Escola de Música'}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 240px;">
                <label class="form-label" for="cfg-razao" style="font-size: 0.75rem;">Razão Social</label>
                <input 
                  type="text" 
                  id="cfg-razao" 
                  class="form-input" 
                  value="${settings.razaoSocial || 'Acusticamente Ensino Musical Ltda'}" 
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
                  value="${maskCNPJ(settings.cnpj || '')}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 145px;">
                <label class="form-label" for="cfg-ie" style="font-size: 0.75rem;">Inscrição Estadual</label>
                <input 
                  type="text" 
                  id="cfg-ie" 
                  class="form-input" 
                  placeholder="Isento ou nº"
                  value="${maskIE(settings.inscricaoEstadual || '')}" 
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
                  value="${maskPhone(settings.telefoneContato || '')}" 
                  required 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1.2; min-width: 180px;">
                <label class="form-label" for="cfg-email" style="font-size: 0.75rem;">E-mail de Contato</label>
                <input 
                  type="email" 
                  id="cfg-email" 
                  class="form-input" 
                  value="${settings.emailContato}" 
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
                  value="${settings.website || ''}" 
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
                  value="${maskCEP(settings.cep || '')}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label class="form-label" for="cfg-logradouro" style="font-size: 0.75rem;">Logradouro / Rua</label>
                <input 
                  type="text" 
                  id="cfg-logradouro" 
                  class="form-input" 
                  placeholder="Rua, Av, Alameda..."
                  value="${settings.logradouro || ''}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 85px;">
                <label class="form-label" for="cfg-numero" style="font-size: 0.75rem;">Número</label>
                <input 
                  type="text" 
                  id="cfg-numero" 
                  class="form-input" 
                  placeholder="123"
                  value="${settings.numero || ''}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 160px;">
                <label class="form-label" for="cfg-complemento" style="font-size: 0.75rem;">Complemento</label>
                <input 
                  type="text" 
                  id="cfg-complemento" 
                  class="form-input" 
                  placeholder="Sala, Bloco, Apto..."
                  value="${settings.complemento || ''}" 
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
                  value="${settings.bairro || ''}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 180px;">
                <label class="form-label" for="cfg-cidade" style="font-size: 0.75rem;">Cidade</label>
                <input 
                  type="text" 
                  id="cfg-cidade" 
                  class="form-input" 
                  value="${settings.cidade || ''}" 
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
                  value="${settings.estado || ''}" 
                />
              </div>
            </div>
          </div>

          <!-- Ação Salvar -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; display: flex; justify-content: flex-start;">
            ${
              canAlter
                ? `
                  <button type="submit" class="btn btn-primary" id="btn-save-settings" style="padding: 8px 22px; font-weight: 600; font-size: 0.85rem;">
                    Salvar Dados da Instituição
                  </button>
                `
                : `<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura (Sem permissão para alterar)</span>`
            }
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
              value="${settings.nomeMenu || 'Acusticamente'}" 
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
                    ${renderBrandLogo(settings.logotipoCustomizado, 40)}
                  </div>
                  <span id="preview-menu-brand-name" style="font-family: var(--font-heading); font-size: 0.74rem; font-weight: 700; color: var(--text-white); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${settings.nomeMenu || 'Acusticamente'}
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
                    ${renderBrandLogo(settings.logotipoCustomizado, 40)}
                  </div>
                  <span id="preview-report-brand-name" style="font-family: sans-serif; font-size: 0.74rem; font-weight: 700; color: #0f172a; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${settings.nomeMenu || 'Acusticamente'}
                  </span>
                </div>

                <button 
                  type="button" 
                  class="btn btn-secondary" 
                  id="btn-reset-logo"
                  style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.78rem; padding: 8px 10px; box-sizing: border-box; color: ${settings.logotipoCustomizado ? '#ef4444' : 'var(--text-muted)'};"
                  ${!settings.logotipoCustomizado ? 'disabled' : ''}
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
            ${
              canAlter
                ? `
                  <button type="submit" class="btn btn-primary" id="btn-save-gerais" style="padding: 8px 22px; font-weight: 600; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                    <span>💾</span> Salvar Configurações Gerais
                  </button>
                `
                : `<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura</span>`
            }
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
  `;

  // ========================================================
  // ALTERNÂNCIA DAS 2 ABAS COM CONTRASTE NÍTIDO
  // ========================================================
  const tabGeraisBtn = container.querySelector('#btn-tab-gerais') as HTMLButtonElement;
  const tabInstituicaoBtn = container.querySelector('#btn-tab-instituicao') as HTMLButtonElement;

  const contentGerais = container.querySelector('#tab-content-gerais') as HTMLElement;
  const contentInstituicao = container.querySelector('#tab-content-instituicao') as HTMLElement;

  function styleTabButton(btn: HTMLButtonElement, isActive: boolean): void {
    if (!btn) return;
    if (isActive) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }

  function switchTab(activeTab: 'gerais' | 'instituicao'): void {
    contentGerais.style.display = activeTab === 'gerais' ? 'block' : 'none';
    contentInstituicao.style.display = activeTab === 'instituicao' ? 'block' : 'none';

    styleTabButton(tabGeraisBtn, activeTab === 'gerais');
    styleTabButton(tabInstituicaoBtn, activeTab === 'instituicao');
  }

  tabGeraisBtn?.addEventListener('click', () => switchTab('gerais'));
  tabInstituicaoBtn?.addEventListener('click', () => switchTab('instituicao'));

  // ========================================================
  // LÓGICA E INTERATIVIDADE DA ABA: CONFIGURAÇÕES GERAIS
  // ========================================================
  let tempCustomLogo = settings.logotipoCustomizado || '';

  const inputMenuName = container.querySelector('#cfg-menu-name') as HTMLInputElement;
  const previewMenuBrand = container.querySelector('#preview-menu-brand-name') as HTMLElement;
  const previewReportBrand = container.querySelector('#preview-report-brand-name') as HTMLElement;

  const previewLogoMenu = container.querySelector('#preview-logo-menu') as HTMLElement;
  const previewLogoReport = container.querySelector('#preview-logo-report') as HTMLElement;

  const inputLogoFile = container.querySelector('#input-logo-file') as HTMLInputElement;
  const btnUploadLogo = container.querySelector('#btn-upload-logo') as HTMLButtonElement;
  const btnResetLogo = container.querySelector('#btn-reset-logo') as HTMLButtonElement;
  const logoFeedbackMsg = container.querySelector('#logo-feedback-msg') as HTMLElement;

  // Atualização em tempo real do nome da marca nas prévias
  inputMenuName?.addEventListener('input', () => {
    const val = inputMenuName.value.trim() || 'Acusticamente';
    if (previewMenuBrand) previewMenuBrand.textContent = val;
    if (previewReportBrand) previewReportBrand.textContent = val;
  });

  // Ação de upload de imagem
  btnUploadLogo?.addEventListener('click', () => {
    inputLogoFile?.click();
  });

  inputLogoFile?.addEventListener('change', (e) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files || files.length === 0) return;

    const file = files[0];

    // Validação de tipo de arquivo
    if (!file.type.startsWith('image/')) {
      showToast('Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG, WebP).', 'info');
      return;
    }

    // Validação de tamanho (máximo 3MB)
    if (file.size > 3 * 1024 * 1024) {
      showToast('A imagem selecionada é muito pesada. Escolha uma imagem de até 3 MB.', 'info');
      return;
    }

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      tempCustomLogo = (loadEvent.target?.result as string) || '';
      
      // Atualiza os previews
      if (previewLogoMenu) previewLogoMenu.innerHTML = renderBrandLogo(tempCustomLogo, 40);
      if (previewLogoReport) previewLogoReport.innerHTML = renderBrandLogo(tempCustomLogo, 40);

      // Habilita o botão de restaurar
      if (btnResetLogo) {
        btnResetLogo.disabled = false;
        btnResetLogo.style.color = '#ef4444';
      }

      if (logoFeedbackMsg) {
        logoFeedbackMsg.style.display = 'block';
        logoFeedbackMsg.style.color = 'var(--status-success)';
        logoFeedbackMsg.textContent = 'Imagem carregada no preview. Clique em Salvar.';
      }

      showToast('Logotipo carregado na pré-visualização!', 'info');
    };

    reader.onerror = () => {
      showToast('Erro ao processar o arquivo de imagem.', 'error');
    };

    reader.readAsDataURL(file);
  });

  // Ação de restaurar logotipo padrão
  btnResetLogo?.addEventListener('click', () => {
    tempCustomLogo = '';
    if (inputLogoFile) inputLogoFile.value = '';

    if (previewLogoMenu) previewLogoMenu.innerHTML = renderBrandLogo('', 40);
    if (previewLogoReport) previewLogoReport.innerHTML = renderBrandLogo('', 40);

    if (btnResetLogo) {
      btnResetLogo.disabled = true;
      btnResetLogo.style.color = 'var(--text-muted)';
    }

    if (logoFeedbackMsg) {
      logoFeedbackMsg.style.display = 'block';
      logoFeedbackMsg.style.color = 'var(--color-coral)';
      logoFeedbackMsg.textContent = 'Logotipo padrão no preview. Clique em Salvar.';
    }

    showToast('Logotipo padrão restaurado no preview.', 'info');
  });

  // Salvar configurações gerais
  const formGerais = container.querySelector('#form-settings-gerais') as HTMLFormElement;
  formGerais?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomeMenu = inputMenuName.value.trim() || 'Acusticamente';

    storageService.updateSettings(
      {
        nomeMenu,
        logotipoCustomizado: tempCustomLogo
      },
      user?.nome || 'Administrador'
    );

    if (logoFeedbackMsg) {
      logoFeedbackMsg.style.display = 'none';
    }

    showToast('Configurações gerais salvas com sucesso!', 'success');
  });

  // Máscaras de entrada padronizadas
  const inputCnpj = container.querySelector('#cfg-cnpj') as HTMLInputElement;
  if (inputCnpj) applyInputMask(inputCnpj, maskCNPJ);

  const inputIe = container.querySelector('#cfg-ie') as HTMLInputElement;
  if (inputIe) applyInputMask(inputIe, maskIE);

  const inputTel = container.querySelector('#cfg-tel') as HTMLInputElement;
  if (inputTel) applyInputMask(inputTel, maskPhone);

  const inputCep = container.querySelector('#cfg-cep') as HTMLInputElement;
  if (inputCep) applyInputMask(inputCep, maskCEP);

  const inputUf = container.querySelector('#cfg-uf') as HTMLInputElement;
  inputUf?.addEventListener('input', (e) => {
    (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.toUpperCase().slice(0, 2);
  });

  // Salvar configurações de Dados da Instituição
  const formInstitucional = container.querySelector('#form-settings-institucional') as HTMLFormElement;
  formInstitucional?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomeFantasia = (container.querySelector('#cfg-fantasia') as HTMLInputElement).value.trim();
    const razaoSocial = (container.querySelector('#cfg-razao') as HTMLInputElement).value.trim();
    const cnpj = (container.querySelector('#cfg-cnpj') as HTMLInputElement).value.trim();
    const ie = (container.querySelector('#cfg-ie') as HTMLInputElement).value.trim();
    const tel = (container.querySelector('#cfg-tel') as HTMLInputElement).value.trim();
    const email = (container.querySelector('#cfg-email') as HTMLInputElement).value.trim();
    const site = (container.querySelector('#cfg-site') as HTMLInputElement).value.trim();

    const cep = (container.querySelector('#cfg-cep') as HTMLInputElement).value.trim();
    const logradouro = (container.querySelector('#cfg-logradouro') as HTMLInputElement).value.trim();
    const numero = (container.querySelector('#cfg-numero') as HTMLInputElement).value.trim();
    const complemento = (container.querySelector('#cfg-complemento') as HTMLInputElement).value.trim();
    const bairro = (container.querySelector('#cfg-bairro') as HTMLInputElement).value.trim();
    const cidade = (container.querySelector('#cfg-cidade') as HTMLInputElement).value.trim();
    const uf = (container.querySelector('#cfg-uf') as HTMLInputElement).value.trim().toUpperCase();

    if (!nomeFantasia) {
      showToast('Informe o Nome Fantasia da instituição.', 'error');
      return;
    }

    if (email && !isValidEmail(email)) {
      showToast('Informe um endereço de e-mail válido.', 'error');
      return;
    }

    const cnpjDigits = cnpj.replace(/\D/g, '');
    if (cnpjDigits.length > 0 && cnpjDigits.length !== 14) {
      showToast('CNPJ incompleto (deve conter 14 dígitos).', 'error');
      return;
    }

    const telDigits = tel.replace(/\D/g, '');
    if (telDigits.length > 0 && telDigits.length < 10) {
      showToast('Telefone/WhatsApp incompleto.', 'error');
      return;
    }

    const cepDigits = cep.replace(/\D/g, '');
    if (cepDigits.length > 0 && cepDigits.length !== 8) {
      showToast('CEP incompleto (deve conter 8 dígitos).', 'error');
      return;
    }

    storageService.updateSettings(
      {
        nomeEscola: nomeFantasia,
        nomeClinica: nomeFantasia,
        nomeFantasia,
        razaoSocial,
        cnpj,
        inscricaoEstadual: ie,
        telefoneContato: tel,
        emailContato: email,
        website: site,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado: uf
      },
      user?.nome || 'Administrador'
    );

    showToast('Dados da instituição salvos com sucesso!', 'success');
  });

  // Atualização dinâmica do status do MongoDB no rodapé
  const statusEl = container.querySelector('#footer-cloud-status') as HTMLElement;
  const updateStatusBadge = (status: string) => {
    if (!statusEl) return;
    if (status === 'connected') {
      statusEl.innerHTML = `
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block;"></span>
        MongoDB Conectado
      `;
      statusEl.style.color = '#4ade80';
    } else if (status === 'fallback') {
      statusEl.innerHTML = `
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
        Offline / Modo Local
      `;
      statusEl.style.color = '#fbbf24';
    } else {
      statusEl.innerHTML = `
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
        Sincronizando...
      `;
      statusEl.style.color = '#94a3b8';
    }
  };

  updateStatusBadge(storageService.getCloudStatus());
  window.addEventListener('acusticamente:cloud-status-changed', ((e: CustomEvent) => {
    updateStatusBadge(e.detail);
  }) as EventListener);

  return container;
}
