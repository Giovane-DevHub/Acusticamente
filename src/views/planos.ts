import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { TeachingPlan, PlanModule, PlanLesson } from '../types';
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
      <!-- Cabeçalho -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Planos de Ensino
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Estrutura pedagógica em 3 níveis: Planos &bull; Módulos &bull; Aulas.
          </p>
        </div>

        ${
          canCreate
            ? `
              <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                ${ICONS.plus} Novo Plano
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
            placeholder="Buscar plano..." 
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

      <!-- Tabela Padronizada -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Cadastrados (${plans.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Plano</th>
                <th style="width: 130px;">Valor Fixo</th>
                <th class="col-hide-sm" style="width: 160px; text-align: center;">Estrutura</th>
                <th class="col-hide-md">Descrição</th>
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${
                plans.length === 0
                  ? `
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${searchTerm ? 'Nenhum plano encontrado.' : 'Nenhum plano cadastrado.'}
                      </td>
                    </tr>
                  `
                  : plans
                      .map(plan => {
                        const totalModulos = (plan.modulos || []).length;
                        const totalAulas = (plan.modulos || []).reduce((sum, m) => sum + (m.aulas?.length || 0), 0);
                        const valorFormatado = typeof plan.valor === 'number' ? `R$ ${plan.valor.toFixed(2)}` : 'R$ 280,00';

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
                            <td>
                              <span style="font-weight: 700; color: #34d399; font-size: 0.88rem;">
                                ${valorFormatado}
                              </span>
                              <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">/mês</span>
                            </td>
                            <td class="col-hide-sm" style="text-align: center;">
                              <div style="display: inline-flex; gap: 4px; align-items: center;">
                                <span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${totalModulos} ${totalModulos === 1 ? 'módulo' : 'módulos'}
                                </span>
                                <span class="badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.72rem; padding: 2px 8px; font-weight: 600;">
                                  ${totalAulas} ${totalAulas === 1 ? 'aula' : 'aulas'}
                                </span>
                              </div>
                            </td>
                            <td class="col-hide-md" style="color: var(--text-secondary); font-size: 0.82rem;">
                              ${plan.descricao || '<span style="color: var(--text-muted); font-style: italic;">Sem descrição</span>'}
                            </td>
                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                                ${
                                  canEdit
                                    ? `
                                      <button class="btn btn-secondary btn-icon-only btn-edit-plan" data-id="${plan.id}" title="Editar Plano, Módulos e Aulas">
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
            title: 'Excluir Plano',
            message: `Tem certeza que deseja excluir o plano "<strong>${plan.nome}</strong>" e todos os seus módulos e aulas?`,
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

  // ========================================================
  // MODAL: PLANOS DE ENSINO EM 3 NÍVEIS (PLANO -> MÓDULOS -> AULAS)
  // ========================================================
  function openPlanModal(existingPlan?: TeachingPlan): void {
    const isEditing = !!existingPlan;

    // Cópia clonada dos módulos para manipulação reativa
    let currentModules: PlanModule[] = existingPlan
      ? JSON.parse(JSON.stringify(existingPlan.modulos || []))
      : [
          {
            id: 'm1',
            ordem: 1,
            titulo: 'Módulo 1: Fundamentos',
            aulas: [
              { id: 'a1_1', ordem: 1, titulo: 'Aula 1: Introdução e Postura' },
              { id: 'a1_2', ordem: 2, titulo: 'Aula 2: Primeiros Exercícios' }
            ]
          },
          {
            id: 'm2',
            ordem: 2,
            titulo: 'Módulo 2: Prática e Repertório',
            aulas: [
              { id: 'a2_1', ordem: 1, titulo: 'Aula 1: Exercícios Rítmicos' },
              { id: 'a2_2', ordem: 2, titulo: 'Aula 2: Montagem de Música' }
            ]
          }
        ];

    // Garante que cada módulo tenha a propriedade aulas
    currentModules.forEach((m, idx) => {
      if (!Array.isArray(m.aulas)) {
        m.aulas = [
          { id: `aul_${m.id || idx}_1`, ordem: 1, titulo: 'Aula 1: Fundamentos' }
        ];
      }
    });

    function renderModulesHtml(): string {
      if (currentModules.length === 0) {
        return `
          <div style="padding: 24px 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); background: rgba(0, 0, 0, 0.1);">
            🎵 Nenhum módulo cadastrado ainda.<br/>
            <span style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px; display: inline-block;">
              Digite o nome do módulo acima e clique em "+ Adicionar Módulo".
            </span>
          </div>
        `;
      }

      return currentModules
        .map(
          (m, mIdx) => `
            <div class="module-card-item" data-midx="${mIdx}" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-bottom: 8px;">
              <!-- Cabeçalho do Módulo (Nível 2) -->
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 26px; height: 26px; border-radius: 6px; background: rgba(234, 67, 53, 0.15); color: var(--color-coral); font-weight: 700; font-size: 0.74rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(234, 67, 53, 0.3);">
                  ${String(mIdx + 1).padStart(2, '0')}
                </div>

                <input 
                  type="text" 
                  class="module-title-input" 
                  data-midx="${mIdx}" 
                  value="${m.titulo}" 
                  placeholder="Título do módulo..." 
                  style="flex: 1; background: rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); color: var(--text-white); font-size: 0.84rem; padding: 6px 10px; outline: none;" 
                />

                <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-icon-only btn-move-up" 
                    data-midx="${mIdx}" 
                    title="Mover para Cima" 
                    style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem;"
                    ${mIdx === 0 ? 'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"' : ''}
                  >
                    ▲
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-icon-only btn-move-down" 
                    data-midx="${mIdx}" 
                    title="Mover para Baixo" 
                    style="width: 26px; height: 26px; padding: 0; font-size: 0.7rem;"
                    ${mIdx === currentModules.length - 1 ? 'disabled style="opacity: 0.25; cursor: not-allowed; width: 26px; height: 26px; padding: 0;"' : ''}
                  >
                    ▼
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-danger btn-icon-only btn-remove-module" 
                    data-midx="${mIdx}" 
                    title="Excluir Módulo" 
                    style="width: 26px; height: 26px; padding: 0; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);"
                  >
                    ${ICONS.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo (Nível 3) -->
              <div style="padding-left: 20px; border-left: 2px solid rgba(234, 67, 53, 0.2); display: flex; flex-direction: column; gap: 6px;">
                <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">
                  Aulas deste Módulo (${m.aulas.length}):
                </div>

                ${m.aulas
                  .map(
                    (aul, aIdx) => `
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.72rem; color: #60a5fa; font-weight: 700; width: 44px; flex-shrink: 0;">
                          Aula ${aIdx + 1}:
                        </span>
                        <input 
                          type="text" 
                          class="lesson-title-input" 
                          data-midx="${mIdx}" 
                          data-aidx="${aIdx}" 
                          value="${aul.titulo}" 
                          placeholder="Título da aula..." 
                          style="flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 4px; color: var(--text-white); font-size: 0.8rem; padding: 4px 8px;"
                        />
                        <button 
                          type="button" 
                          class="btn btn-secondary btn-icon-only btn-remove-lesson" 
                          data-midx="${mIdx}" 
                          data-aidx="${aIdx}" 
                          title="Excluir Aula" 
                          style="width: 22px; height: 22px; padding: 0; font-size: 0.65rem; color: #f87171; border-color: rgba(239, 68, 68, 0.2);"
                        >
                          ✕
                        </button>
                      </div>
                    `
                  )
                  .join('')}

                <!-- Adicionar Aula Rápida no Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="quick-add-lesson-input" 
                    data-midx="${mIdx}" 
                    placeholder="Título da nova aula..." 
                    style="flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 4px; color: var(--text-white); font-size: 0.78rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-quick-add-lesson" 
                    data-midx="${mIdx}" 
                    style="padding: 4px 10px; font-size: 0.74rem;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `
        )
        .join('');
    }

    const bodyHtml = `
      <form id="plan-modal-form" style="display: flex; flex-direction: column; gap: 12px;">
        
        <!-- Nível 1: Plano -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
          <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-coral); letter-spacing: 0.05em; margin-bottom: 10px;">
            🎼 1. Informações do Plano
          </div>

          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="plan-nome" style="font-size: 0.78rem;">Nome *</label>
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
              <label class="form-label" for="plan-valor" style="font-size: 0.78rem;">Valor Fixo (R$) *</label>
              <input 
                type="number" 
                id="plan-valor" 
                class="form-input" 
                placeholder="280.00" 
                step="5" 
                min="0" 
                value="${existingPlan?.valor ?? 280}" 
                required 
                style="padding: 7px 10px; font-size: 0.84rem;"
              />
            </div>
          </div>

          <div class="form-group" style="margin-top: 10px; margin-bottom: 0;">
            <label class="form-label" for="plan-desc" style="font-size: 0.78rem;">Descrição</label>
            <input 
              type="text" 
              id="plan-desc" 
              class="form-input" 
              placeholder="Ex: Prática instrumental do básico ao intermediário" 
              value="${existingPlan?.descricao || ''}" 
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
                ${currentModules.length} módulos
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
              placeholder="Nome do novo módulo (ex: Módulo 3: Escalas e Solo)..." 
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

          <!-- Lista de Módulos e Aulas -->
          <div 
            id="modules-list-container" 
            style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 2px;"
          >
            ${renderModulesHtml()}
          </div>
        </div>

      </form>
    `;

    openModal({
      title: isEditing ? `Editar: ${existingPlan.nome}` : 'Cadastrar Plano de Ensino',
      bodyHtml,
      modalClass: 'modal-lg',
      confirmText: isEditing ? 'Salvar' : 'Cadastrar',
      onConfirm: () => {
        const nome = (document.getElementById('plan-nome') as HTMLInputElement).value.trim();
        const valorInput = (document.getElementById('plan-valor') as HTMLInputElement).value;
        const valor = parseFloat(valorInput) || 280;
        const desc = (document.getElementById('plan-desc') as HTMLInputElement).value.trim();

        // Validar e sanitizar módulos e suas aulas
        const validModules: PlanModule[] = currentModules
          .map((m, mIndex) => {
            const sanitizedAulas: PlanLesson[] = (m.aulas || [])
              .map((a, aIndex) => ({
                id: a.id || `aul_${mIndex + 1}_${aIndex + 1}_${Date.now()}`,
                ordem: aIndex + 1,
                titulo: a.titulo.trim()
              }))
              .filter(a => a.titulo.length > 0);

            return {
              id: m.id || 'mod_' + (mIndex + 1) + '_' + Date.now(),
              ordem: mIndex + 1,
              titulo: m.titulo.trim(),
              aulas: sanitizedAulas
            };
          })
          .filter(m => m.titulo.length > 0);

        if (!nome) {
          showToast('Informe o nome do plano de ensino.', 'error');
          return false;
        }

        if (validModules.length === 0) {
          showToast('Adicione pelo menos um módulo ao plano.', 'error');
          return false;
        }

        const currentUserName = user?.nome || 'Administrador';

        if (isEditing && existingPlan) {
          storageService.updatePlan(
            existingPlan.id,
            {
              nome,
              descricao: desc,
              valor,
              modulos: validModules
            },
            currentUserName
          );
          showToast('Plano atualizado com sucesso!', 'success');
        } else {
          storageService.addPlan(
            {
              nome,
              descricao: desc,
              valor,
              modulos: validModules
            },
            currentUserName
          );
          showToast('Plano cadastrado com sucesso!', 'success');
        }

        renderList();
        return true;
      }
    });

    // ==========================================
    // CONTROLES REATIVOS DE MÓDULOS E AULAS
    // ==========================================
    function attachModuleEvents(): void {
      const containerEl = document.getElementById('modules-list-container');
      const counterBadge = document.getElementById('modules-counter-badge');
      if (!containerEl) return;

      if (counterBadge) {
        counterBadge.textContent = `${currentModules.length} ${currentModules.length === 1 ? 'módulo' : 'módulos'}`;
      }

      containerEl.innerHTML = renderModulesHtml();

      // Sincronização do Título do Módulo
      containerEl.querySelectorAll('.module-title-input').forEach(inp => {
        inp.addEventListener('input', e => {
          const mIdx = parseInt((e.target as HTMLElement).getAttribute('data-midx') || '0', 10);
          if (currentModules[mIdx]) {
            currentModules[mIdx].titulo = (e.target as HTMLInputElement).value;
          }
        });
      });

      // Sincronização do Título da Aula
      containerEl.querySelectorAll('.lesson-title-input').forEach(inp => {
        inp.addEventListener('input', e => {
          const mIdx = parseInt((e.target as HTMLElement).getAttribute('data-midx') || '0', 10);
          const aIdx = parseInt((e.target as HTMLElement).getAttribute('data-aidx') || '0', 10);
          if (currentModules[mIdx]?.aulas[aIdx]) {
            currentModules[mIdx].aulas[aIdx].titulo = (e.target as HTMLInputElement).value;
          }
        });
      });

      // Mover Módulo para Cima
      containerEl.querySelectorAll('.btn-move-up:not([disabled])').forEach(btn => {
        btn.addEventListener('click', e => {
          const mIdx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-midx') || '0', 10);
          if (mIdx > 0) {
            const temp = currentModules[mIdx];
            currentModules[mIdx] = currentModules[mIdx - 1];
            currentModules[mIdx - 1] = temp;
            currentModules.forEach((m, i) => (m.ordem = i + 1));
            attachModuleEvents();
          }
        });
      });

      // Mover Módulo para Baixo
      containerEl.querySelectorAll('.btn-move-down:not([disabled])').forEach(btn => {
        btn.addEventListener('click', e => {
          const mIdx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-midx') || '0', 10);
          if (mIdx < currentModules.length - 1) {
            const temp = currentModules[mIdx];
            currentModules[mIdx] = currentModules[mIdx + 1];
            currentModules[mIdx + 1] = temp;
            currentModules.forEach((m, i) => (m.ordem = i + 1));
            attachModuleEvents();
          }
        });
      });

      // Excluir Módulo
      containerEl.querySelectorAll('.btn-remove-module').forEach(btn => {
        btn.addEventListener('click', e => {
          const mIdx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-midx') || '0', 10);
          currentModules.splice(mIdx, 1);
          currentModules.forEach((m, i) => (m.ordem = i + 1));
          attachModuleEvents();
        });
      });

      // Excluir Aula
      containerEl.querySelectorAll('.btn-remove-lesson').forEach(btn => {
        btn.addEventListener('click', e => {
          const mIdx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-midx') || '0', 10);
          const aIdx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-aidx') || '0', 10);
          if (currentModules[mIdx]?.aulas) {
            currentModules[mIdx].aulas.splice(aIdx, 1);
            currentModules[mIdx].aulas.forEach((a, i) => (a.ordem = i + 1));
            attachModuleEvents();
          }
        });
      });

      // Adicionar Aula Rápida no Módulo
      containerEl.querySelectorAll('.btn-quick-add-lesson').forEach(btn => {
        btn.addEventListener('click', e => {
          const mIdx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-midx') || '0', 10);
          const inputEl = containerEl.querySelector(`.quick-add-lesson-input[data-midx="${mIdx}"]`) as HTMLInputElement;
          const val = inputEl?.value.trim();
          if (!val) {
            showToast('Informe o título da aula.', 'info');
            inputEl?.focus();
            return;
          }

          if (!currentModules[mIdx].aulas) {
            currentModules[mIdx].aulas = [];
          }

          const nextAulOrder = currentModules[mIdx].aulas.length + 1;
          currentModules[mIdx].aulas.push({
            id: `aul_${currentModules[mIdx].id}_${nextAulOrder}_${Date.now()}`,
            ordem: nextAulOrder,
            titulo: val
          });

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
        titulo: val,
        aulas: [
          { id: `aul_m${nextOrder}_1`, ordem: 1, titulo: 'Aula 1: Fundamentos' }
        ]
      });

      inputEl.value = '';
      attachModuleEvents();
      inputEl.focus();

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
