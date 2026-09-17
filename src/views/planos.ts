import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { TeachingPlan, PlanModule } from '../types';
import { ICONS, openModal, showToast, confirmAction } from '../utils/ui';

export function renderPlanos(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  let searchTerm = '';

  const canCreate = hasActionPermission(user, 'planos', 'cadastrar');
  const canEdit = hasActionPermission(user, 'planos', 'alterar');
  const canDelete = hasActionPermission(user, 'planos', 'excluir');

  function renderList(): void {
    const allPlans = storageService.getPlans();
    const plans = allPlans.filter(p => {
      const term = searchTerm.toLowerCase();
      return (
        p.nome.toLowerCase().includes(term) ||
        (p.descricao && p.descricao.toLowerCase().includes(term))
      );
    });

    container.innerHTML = `
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino &amp; Módulos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estrutura pedagógica padronizada com módulos encadeados.
          </p>
        </div>

        ${
          canCreate
            ? `
              <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                ${ICONS.plus} Cadastrar Novo Plano
              </button>
            `
            : ''
        }
      </div>

      <!-- Barra de Filtro / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="plan-search-input" 
            class="form-input" 
            placeholder="Buscar por nome ou objetivo..." 
            value="${searchTerm}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${ICONS.search}
          </div>
        </div>
        ${
          searchTerm
            ? `<button class="btn btn-secondary btn-sm" id="btn-clear-search">Limpar</button>`
            : ''
        }
      </div>

      <!-- Grid Padronizada em Tabela (1 linha por registro) -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Cadastrados (${plans.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Plano de Ensino</th>
                <th class="col-hide-md">Descrição / Objetivo Curricular</th>
                <th class="col-hide-sm" style="width: 130px; text-align: center;">Módulos</th>
                <th class="col-hide-sm" style="width: 120px;">Cadastro</th>
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${
                plans.length === 0
                  ? `
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${searchTerm ? 'Nenhum plano encontrado para o termo pesquisado.' : 'Nenhum plano de ensino cadastrado.'}
                      </td>
                    </tr>
                  `
                  : plans
                      .map(plan => {
                        const dataFormatada = plan.criadoEm
                          ? new Date(plan.criadoEm).toLocaleDateString('pt-BR')
                          : '-';

                        return `
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral); flex-shrink: 0;">
                                  ${ICONS.planos}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.88rem;">
                                    ${plan.nome}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${plan.descricao || '<span style="color: var(--text-muted); font-style: italic;">Sem descrição cadastrada</span>'}
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                ${plan.modulos.length} ${plan.modulos.length === 1 ? 'módulo' : 'módulos'}
                              </span>
                            </td>
                            <td class="col-hide-sm" style="font-size: 0.8rem; color: var(--text-muted);">
                              ${dataFormatada}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${
                                  canEdit
                                    ? `
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${plan.id}" title="Editar Plano e Módulos">
                                        ${ICONS.edit}
                                      </button>
                                    `
                                    : ''
                                }
                                ${
                                  canDelete
                                    ? `
                                      <button class="btn btn-danger btn-icon-only btn-delete-plan" data-id="${plan.id}" title="Excluir Plano">
                                        ${ICONS.trash}
                                      </button>
                                    `
                                    : ''
                                }
                                ${!canEdit && !canDelete ? `<span style="font-size: 0.72rem; color: var(--text-muted);">Visualização</span>` : ''}
                              </div>
                            </td>
                          </tr>
                        `;
                      })
                      .join('')
              }
            </tbody>
          </table>
        </div>
      </div>
    `;

    // Eventos da Listagem
    container.querySelector('#btn-new-plan')?.addEventListener('click', () => {
      openPlanModal();
    });

    const searchInput = container.querySelector('#plan-search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchTerm = (e.target as HTMLInputElement).value;
        renderList();
        // Mantém foco e cursor no input de busca
        const newSearchInput = container.querySelector('#plan-search-input') as HTMLInputElement;
        if (newSearchInput) {
          newSearchInput.focus();
          newSearchInput.setSelectionRange(newSearchInput.value.length, newSearchInput.value.length);
        }
      });
    }

    container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
      searchTerm = '';
      renderList();
    });

    container.querySelectorAll('.btn-edit-plan').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const plan = storageService.getPlans().find(p => p.id === id);
        if (plan) openPlanModal(plan);
      });
    });

    container.querySelectorAll('.btn-delete-plan').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const plan = storageService.getPlans().find(p => p.id === id);
        if (plan) {
          confirmAction({
            title: 'Excluir Plano de Ensino',
            message: `Tem certeza que deseja excluir o plano "<strong>${plan.nome}</strong>" e todos os seus <strong>${plan.modulos.length} módulos</strong> vinculados?`,
            onConfirm: () => {
              storageService.deletePlan(plan.id, user?.nome || 'Administrador');
              showToast(`Plano "${plan.nome}" excluído.`, 'info');
              renderList();
            }
          });
        }
      });
    });
  }

  // ==========================================
  // MODAL MODERNO E COMPACTO: PLANO & MÓDULOS
  // ==========================================
  function openPlanModal(existingPlan?: TeachingPlan): void {
    const isEditing = !!existingPlan;

    // Cópia clonada dos módulos para manipulação reativa
    let currentModules: PlanModule[] = existingPlan
      ? JSON.parse(JSON.stringify(existingPlan.modulos))
      : [
          { id: 'm1', ordem: 1, titulo: 'Módulo 1: Fundamentos' },
          { id: 'm2', ordem: 2, titulo: 'Módulo 2: Aprofundamento Prático' }
        ];

    function renderModulesHtml(): string {
      if (currentModules.length === 0) {
        return `
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo na trilha pedagógica ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo no campo acima e tecle Enter ou clique em "+ Adicionar".
            </span>
          </div>
        `;
      }

      return currentModules
        .map(
          (m, i) => `
            <div class="module-card-item" data-idx="${i}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 10px; display: flex; align-items: center; gap: 10px; transition: border-color 0.15s ease;">
              <!-- Badge de Ordem Numérica -->
              <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                ${String(i + 1).padStart(2, '0')}
              </div>

              <!-- Input Editável In-Place -->
              <input 
                type="text" 
                class="module-title-input" 
                data-idx="${i}" 
                value="${m.titulo}" 
                placeholder="Título do módulo..." 
                style="flex: 1; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
              />

              <!-- Ações: Subir, Descer, Excluir -->
              <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-up" 
                  data-idx="${i}" 
                  title="Mover para Cima" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${i === 0 ? 'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"' : ''}
                >
                  ▲
                </button>
                <button 
                  type="button" 
                  class="btn btn-secondary btn-icon-only btn-move-down" 
                  data-idx="${i}" 
                  title="Mover para Baixo" 
                  style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;"
                  ${i === currentModules.length - 1 ? 'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"' : ''}
                >
                  ▼
                </button>
                <button 
                  type="button" 
                  class="btn btn-danger btn-icon-only btn-remove-module" 
                  data-idx="${i}" 
                  title="Excluir Módulo" 
                  style="width: 26px; height: 26px; padding: 0; display: flex; align-items: center; justify-content: center; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                >
                  ${ICONS.trash}
                </button>
              </div>
            </div>
          `
        )
        .join('');
    }

    const bodyHtml = `
      <form id="plan-modal-form" style="display: flex; flex-direction: column; gap: 12px;">
        
        <!-- 1. Identificação Básica do Plano (Compacto em 2 Colunas) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-coral); letter-spacing: 0.05em; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
            <span>🎼</span> Informações do Plano Pedagógico
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-nome" style="font-size: 0.78rem;">Nome do Plano *</label>
              <input 
                type="text" 
                id="plan-nome" 
                class="form-input" 
                placeholder="Ex: Violão Popular" 
                value="${existingPlan?.nome || ''}" 
                required 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-desc" style="font-size: 0.78rem;">Foco / Descrição Curricular</label>
              <input 
                type="text" 
                id="plan-desc" 
                class="form-input" 
                placeholder="Ex: Do nível iniciante à prática de repertório" 
                value="${existingPlan?.descricao || ''}" 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>
          </div>
        </div>

        <!-- 2. Trilha e Sequência de Módulos (Design Enxuto e Intuitivo) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.84rem; font-weight: 700; color: var(--text-white);">📚 Trilha de Módulos</span>
              <span id="modules-counter-badge" class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 8px;">
                ${currentModules.length} ${currentModules.length === 1 ? 'módulo' : 'módulos'}
              </span>
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted);">
              Use ▲ ▼ para reordenar &bull; Edite diretamente no campo
            </span>
          </div>

          <!-- Barra de Inserção Rápida de Módulo -->
          <div style="display: flex; gap: 8px; margin-bottom: 10px;">
            <input 
              type="text" 
              id="quick-add-module-input" 
              class="form-input" 
              placeholder="Digite o título do módulo e pressione Enter (ex: Módulo 3: Escalas e Acordes)..." 
              style="flex: 1; padding: 7px 12px; font-size: 0.82rem;"
            />
            <button 
              type="button" 
              class="btn btn-primary btn-sm" 
              id="btn-quick-add-module" 
              style="display: flex; align-items: center; gap: 4px; font-size: 0.78rem; padding: 7px 14px; white-space: nowrap;"
            >
              ${ICONS.plus} Adicionar Módulo
            </button>
          </div>

          <!-- Container de Lista de Módulos (Scroll Suave e Altura Controlada) -->
          <div 
            id="modules-list-container" 
            style="max-height: 210px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${renderModulesHtml()}
          </div>
        </div>

      </form>
    `;

    openModal({
      title: isEditing ? `Editar Plano: ${existingPlan.nome}` : 'Cadastrar Plano & Trilha de Ensino',
      bodyHtml,
      modalClass: 'modal-lg',
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Plano',
      onConfirm: () => {
        const nome = (document.getElementById('plan-nome') as HTMLInputElement).value.trim();
        const desc = (document.getElementById('plan-desc') as HTMLInputElement).value.trim();

        // Validar e sanitizar módulos
        const validModules: PlanModule[] = currentModules
          .map((m, index) => ({
            id: m.id || 'mod_' + (index + 1) + '_' + Date.now(),
            ordem: index + 1,
            titulo: m.titulo.trim()
          }))
          .filter(m => m.titulo.length > 0);

        if (!nome) {
          showToast('Informe o nome do plano de ensino.', 'error');
          return false;
        }

        if (validModules.length === 0) {
          showToast('Adicione pelo menos um módulo à trilha pedagógica.', 'error');
          return false;
        }

        const currentUserName = user?.nome || 'Administrador';

        if (isEditing && existingPlan) {
          storageService.updatePlan(
            existingPlan.id,
            {
              nome,
              descricao: desc,
              modulos: validModules
            },
            currentUserName
          );
          showToast('Plano e módulos atualizados com sucesso!', 'success');
        } else {
          storageService.addPlan(
            {
              nome,
              descricao: desc,
              modulos: validModules
            },
            currentUserName
          );
          showToast('Plano de ensino cadastrado com sucesso!', 'success');
        }

        renderList();
        return true;
      }
    });

    // ==========================================
    // CONTROLES REATIVOS E EVENTOS DINÂMICOS
    // ==========================================
    function attachModuleEvents(): void {
      const containerEl = document.getElementById('modules-list-container');
      const counterBadge = document.getElementById('modules-counter-badge');
      if (!containerEl) return;

      if (counterBadge) {
        counterBadge.textContent = `${currentModules.length} ${currentModules.length === 1 ? 'módulo' : 'módulos'}`;
      }

      containerEl.innerHTML = renderModulesHtml();

      // Sincronização em tempo real do texto digitado sem perder o foco
      containerEl.querySelectorAll('.module-title-input').forEach(inp => {
        inp.addEventListener('input', e => {
          const idx = parseInt((e.target as HTMLElement).getAttribute('data-idx') || '0', 10);
          if (currentModules[idx]) {
            currentModules[idx].titulo = (e.target as HTMLInputElement).value;
          }
        });
      });

      // Mover para Cima
      containerEl.querySelectorAll('.btn-move-up:not([disabled])').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-idx') || '0', 10);
          if (idx > 0) {
            const temp = currentModules[idx];
            currentModules[idx] = currentModules[idx - 1];
            currentModules[idx - 1] = temp;
            currentModules.forEach((m, i) => (m.ordem = i + 1));
            attachModuleEvents();
          }
        });
      });

      // Mover para Baixo
      containerEl.querySelectorAll('.btn-move-down:not([disabled])').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-idx') || '0', 10);
          if (idx < currentModules.length - 1) {
            const temp = currentModules[idx];
            currentModules[idx] = currentModules[idx + 1];
            currentModules[idx + 1] = temp;
            currentModules.forEach((m, i) => (m.ordem = i + 1));
            attachModuleEvents();
          }
        });
      });

      // Excluir Módulo
      containerEl.querySelectorAll('.btn-remove-module').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-idx') || '0', 10);
          currentModules.splice(idx, 1);
          currentModules.forEach((m, i) => (m.ordem = i + 1));
          attachModuleEvents();
        });
      });
    }

    function addModuleFromInput(): void {
      const inputEl = document.getElementById('quick-add-module-input') as HTMLInputElement;
      if (!inputEl) return;
      const val = inputEl.value.trim();
      if (!val) {
        showToast('Digite o nome do módulo para adicionar.', 'info');
        inputEl.focus();
        return;
      }

      const nextOrder = currentModules.length + 1;
      currentModules.push({
        id: 'mod_' + nextOrder + '_' + Date.now(),
        ordem: nextOrder,
        titulo: val
      });

      inputEl.value = '';
      attachModuleEvents();
      inputEl.focus();

      // Auto scroll suave até o novo item
      const containerEl = document.getElementById('modules-list-container');
      if (containerEl) {
        containerEl.scrollTop = containerEl.scrollHeight;
      }
    }

    setTimeout(() => {
      const quickAddBtn = document.getElementById('btn-quick-add-module');
      const quickAddInput = document.getElementById('quick-add-module-input') as HTMLInputElement;

      quickAddBtn?.addEventListener('click', () => {
        addModuleFromInput();
      });

      quickAddInput?.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addModuleFromInput();
        }
      });

      attachModuleEvents();
    }, 50);
  }

  renderList();
  return container;
}
