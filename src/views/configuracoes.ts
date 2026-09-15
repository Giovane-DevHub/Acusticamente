import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { MONGO_SCHEMAS, MongoConnectionService } from '../services/mongoService';
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
              <input type="text" id="cfg-nome" class="form-input" value="${settings.nomeEscola || settings.nomeClinica || 'Acusticamente - Escola de Música'}" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-tel">Telefone / WhatsApp Principal</label>
              <input type="text" id="cfg-tel" class="form-input" value="${settings.telefoneContato}" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="cfg-email">E-mail de Contato</label>
              <input type="email" id="cfg-email" class="form-input" value="${settings.emailContato}" required />
            </div>

            <div style="margin-top: 24px;">
              ${
                canAlter
                  ? `
                    <button type="submit" class="btn btn-primary" id="btn-save-settings">
                      Salvar Configurações
                    </button>
                  `
                  : `<span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Modo somente leitura (Sem permissão para alterar)</span>`
              }
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
            <input type="text" id="cfg-mongo-uri" class="form-input" value="${settings.mongoUri}" placeholder="mongodb://localhost:27017" />
          </div>

          <div class="form-group">
            <label class="form-label" for="cfg-mongo-db">Nome do Banco (Database)</label>
            <input type="text" id="cfg-mongo-db" class="form-input" value="${settings.mongoDatabase}" placeholder="acusticamente_db" />
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
              ${Object.values(MONGO_SCHEMAS)
      .map(
        s => `
                    <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <strong style="color: var(--text-white); font-size: 0.85rem;">${s.collectionName}</strong>
                        <div style="font-size: 0.72rem; color: var(--text-muted);">${s.description}</div>
                      </div>
                      <span style="font-size: 0.7rem; color: var(--color-coral); font-family: monospace;">Schema Pronto</span>
                    </div>
                  `
      )
      .join('')}
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
  `;

  // Salvar configurações gerais
  const form = container.querySelector('#form-settings-institucional') as HTMLFormElement;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = (container.querySelector('#cfg-nome') as HTMLInputElement).value;
    const tel = (container.querySelector('#cfg-tel') as HTMLInputElement).value;
    const email = (container.querySelector('#cfg-email') as HTMLInputElement).value;
    const mongoUri = (container.querySelector('#cfg-mongo-uri') as HTMLInputElement).value;
    const mongoDb = (container.querySelector('#cfg-mongo-db') as HTMLInputElement).value;

    storageService.updateSettings(
      {
        nomeEscola: nome,
        nomeClinica: nome,
        telefoneContato: tel,
        emailContato: email,
        mongoUri,
        mongoDatabase: mongoDb
      },
      user?.nome || 'Administrador'
    );

    showToast('Configurações salvas e auditadas!', 'success');
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
