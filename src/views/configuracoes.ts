import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { MongoConnectionService } from '../services/mongoService';
import { showToast } from '../utils/ui';

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
        Gerencie os dados cadastrais da instituição e os parâmetros do banco de dados.
      </p>
    </div>

    <!-- Seletor de Abas com Contraste Nítido -->
    <div style="display: flex; gap: 10px; margin-bottom: 16px;">
      <button 
        type="button" 
        class="btn-cfg-tab active" 
        id="btn-tab-instituicao" 
        data-tab="instituicao" 
        style="display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 0.88rem; padding: 10px 20px; border-radius: var(--radius-md); background: var(--color-coral); color: #ffffff; border: 1px solid var(--color-coral); cursor: pointer; transition: all 0.15s ease;"
      >
        <span>🏢</span> Dados da Instituição
      </button>

      <button 
        type="button" 
        class="btn-cfg-tab" 
        id="btn-tab-mongo" 
        data-tab="mongo" 
        style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.88rem; padding: 10px 20px; border-radius: var(--radius-md); background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border-subtle); cursor: pointer; transition: all 0.15s ease;"
      >
        <span>🍃</span> Banco de Dados (MongoDB)
        <span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">● Operacional</span>
      </button>
    </div>

    <!-- Painel de Conteúdo das Abas -->
    <div class="panel-card" style="margin-bottom: 16px;">
      <!-- CONTEÚDO DA ABA 1: DADOS DA INSTITUIÇÃO -->
      <div id="tab-content-instituicao" style="padding: 20px 24px;">
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
                  value="${settings.cnpj || ''}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 145px;">
                <label class="form-label" for="cfg-ie" style="font-size: 0.75rem;">Inscrição Estadual</label>
                <input 
                  type="text" 
                  id="cfg-ie" 
                  class="form-input" 
                  placeholder="Isento ou nº"
                  value="${settings.inscricaoEstadual || ''}" 
                />
              </div>

              <div class="form-group" style="margin-bottom: 0; width: 150px;">
                <label class="form-label" for="cfg-tel" style="font-size: 0.75rem;">Telefone / WhatsApp</label>
                <input 
                  type="text" 
                  id="cfg-tel" 
                  class="form-input" 
                  placeholder="(11) 98765-4321"
                  value="${settings.telefoneContato}" 
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
                  value="${settings.cep || ''}" 
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

      <!-- CONTEÚDO DA ABA 2: BANCO DE DADOS (MONGODB) -->
      <div id="tab-content-mongo" style="padding: 24px; display: none;">
        <div style="max-width: 580px;">
          <h4 style="font-size: 0.84rem; font-weight: 700; color: var(--text-white); margin: 0 0 14px 0;">
            Parâmetros de Conexão com o Banco de Dados
          </h4>

          <form id="form-settings-mongo">
            <div class="form-group">
              <label class="form-label" for="cfg-mongo-uri">URI de Conexão MongoDB</label>
              <input 
                type="text" 
                id="cfg-mongo-uri" 
                class="form-input" 
                value="${settings.mongoUri}" 
                placeholder="mongodb://localhost:27017" 
                required 
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-mongo-db">Nome do Banco (Database)</label>
              <input 
                type="text" 
                id="cfg-mongo-db" 
                class="form-input" 
                value="${settings.mongoDatabase}" 
                placeholder="acusticamente_db" 
                required 
              />
            </div>

            <div style="display: flex; gap: 12px; margin-top: 20px; align-items: center; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary" id="btn-test-mongo">
                Testar Conexão MongoDB
              </button>

              ${
                canAlter
                  ? `
                    <button type="submit" class="btn btn-primary" id="btn-save-mongo">
                      Salvar Conexão do Banco
                    </button>
                  `
                  : ''
              }
            </div>

            <div id="mongo-test-result" style="margin-top: 16px; font-size: 0.82rem;"></div>
          </form>
        </div>
      </div>
    </div>

    <!-- Linha Fina com Informações do Sistema -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 0.78rem; color: var(--text-secondary);">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-weight: 700; color: var(--text-white); display: flex; align-items: center; gap: 6px;">
          <span>🎵</span> Acusticamente
        </span>
        <span class="badge badge-primary" style="font-family: monospace; font-size: 0.7rem; padding: 2px 7px;">v1.0.0</span>
        <span style="color: var(--border-subtle);">|</span>
        <span>Gestão Educacional &amp; Escolar</span>
      </div>

      <div style="display: flex; align-items: center; gap: 14px;">
        <span>Engine: <code style="color: #ff9187; background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">MongoDB + TypeScript</code></span>
        <span style="color: var(--border-subtle);">|</span>
        <span>Desenvolvido por <strong style="color: var(--color-coral); font-weight: 600;">DevHub</strong></span>
      </div>
    </div>
  `;

  // Alternância das Abas com Contraste Nítido
  const tabInstituicaoBtn = container.querySelector('#btn-tab-instituicao') as HTMLButtonElement;
  const tabMongoBtn = container.querySelector('#btn-tab-mongo') as HTMLButtonElement;
  const contentInstituicao = container.querySelector('#tab-content-instituicao') as HTMLElement;
  const contentMongo = container.querySelector('#tab-content-mongo') as HTMLElement;

  function setTabStyles(activeBtn: HTMLButtonElement, inactiveBtn: HTMLButtonElement): void {
    activeBtn.style.background = 'var(--color-coral)';
    activeBtn.style.color = '#ffffff';
    activeBtn.style.borderColor = 'var(--color-coral)';
    activeBtn.style.fontWeight = '700';

    inactiveBtn.style.background = 'var(--bg-surface)';
    inactiveBtn.style.color = 'var(--text-secondary)';
    inactiveBtn.style.borderColor = 'var(--border-subtle)';
    inactiveBtn.style.fontWeight = '600';
  }

  function switchTab(activeTab: 'instituicao' | 'mongo'): void {
    if (activeTab === 'instituicao') {
      contentInstituicao.style.display = 'block';
      contentMongo.style.display = 'none';
      setTabStyles(tabInstituicaoBtn, tabMongoBtn);
    } else {
      contentInstituicao.style.display = 'none';
      contentMongo.style.display = 'block';
      setTabStyles(tabMongoBtn, tabInstituicaoBtn);
    }
  }

  tabInstituicaoBtn?.addEventListener('click', () => switchTab('instituicao'));
  tabMongoBtn?.addEventListener('click', () => switchTab('mongo'));

  // Máscaras visuais automáticas para campos de tamanho fixo (CNPJ, CEP e UF)
  const inputCnpj = container.querySelector('#cfg-cnpj') as HTMLInputElement;
  inputCnpj?.addEventListener('input', (e) => {
    let v = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 14);
    if (v.length > 12) {
      v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/, '$1.$2.$3/$4-$5');
    } else if (v.length > 8) {
      v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/, '$1.$2.$3/$4');
    } else if (v.length > 5) {
      v = v.replace(/^(\d{2})(\d{3})(\d{1,3})$/, '$1.$2.$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d{1,3})$/, '$1.$2');
    }
    (e.target as HTMLInputElement).value = v;
  });

  const inputCep = container.querySelector('#cfg-cep') as HTMLInputElement;
  inputCep?.addEventListener('input', (e) => {
    let v = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 8);
    if (v.length > 5) {
      v = v.replace(/^(\d{5})(\d{1,3})$/, '$1-$2');
    }
    (e.target as HTMLInputElement).value = v;
  });

  const inputUf = container.querySelector('#cfg-uf') as HTMLInputElement;
  inputUf?.addEventListener('input', (e) => {
    (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.toUpperCase().slice(0, 2);
  });

  // Salvar configurações de Dados da Instituição
  const formInstitucional = container.querySelector('#form-settings-institucional') as HTMLFormElement;
  formInstitucional?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomeFantasia = (container.querySelector('#cfg-fantasia') as HTMLInputElement).value;
    const razaoSocial = (container.querySelector('#cfg-razao') as HTMLInputElement).value;
    const cnpj = (container.querySelector('#cfg-cnpj') as HTMLInputElement).value;
    const ie = (container.querySelector('#cfg-ie') as HTMLInputElement).value;
    const tel = (container.querySelector('#cfg-tel') as HTMLInputElement).value;
    const email = (container.querySelector('#cfg-email') as HTMLInputElement).value;
    const site = (container.querySelector('#cfg-site') as HTMLInputElement).value;

    const cep = (container.querySelector('#cfg-cep') as HTMLInputElement).value;
    const logradouro = (container.querySelector('#cfg-logradouro') as HTMLInputElement).value;
    const numero = (container.querySelector('#cfg-numero') as HTMLInputElement).value;
    const complemento = (container.querySelector('#cfg-complemento') as HTMLInputElement).value;
    const bairro = (container.querySelector('#cfg-bairro') as HTMLInputElement).value;
    const cidade = (container.querySelector('#cfg-cidade') as HTMLInputElement).value;
    const uf = (container.querySelector('#cfg-uf') as HTMLInputElement).value.toUpperCase();

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

  // Salvar configurações do Banco MongoDB
  const formMongo = container.querySelector('#form-settings-mongo') as HTMLFormElement;
  formMongo?.addEventListener('submit', (e) => {
    e.preventDefault();
    const mongoUri = (container.querySelector('#cfg-mongo-uri') as HTMLInputElement).value;
    const mongoDb = (container.querySelector('#cfg-mongo-db') as HTMLInputElement).value;

    storageService.updateSettings(
      {
        mongoUri,
        mongoDatabase: mongoDb
      },
      user?.nome || 'Administrador'
    );

    showToast('Configurações do MongoDB salvas com sucesso!', 'success');
  });

  // Testar conexão MongoDB
  const btnTestMongo = container.querySelector('#btn-test-mongo');
  btnTestMongo?.addEventListener('click', async () => {
    const mongoUri = (container.querySelector('#cfg-mongo-uri') as HTMLInputElement).value;
    const mongoDb = (container.querySelector('#cfg-mongo-db') as HTMLInputElement).value;
    const resultEl = container.querySelector('#mongo-test-result') as HTMLElement;

    resultEl.innerHTML = '<span style="color: var(--color-coral);">Testando conexão com o MongoDB...</span>';

    const res = await MongoConnectionService.testConnection(mongoUri, mongoDb);
    if (res.success) {
      resultEl.innerHTML = `<span style="color: var(--status-success);">✓ ${res.message} (Latência: ${res.latencyMs}ms)</span>`;
      showToast('MongoDB validado com sucesso!', 'success');
    } else {
      resultEl.innerHTML = `<span style="color: var(--status-danger);">✕ ${res.message}</span>`;
      showToast('Falha na validação do MongoDB.', 'error');
    }
  });

  return container;
}
