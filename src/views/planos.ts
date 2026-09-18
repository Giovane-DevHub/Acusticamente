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

    const filteredTeachingPlans = allPlans.filter(p => {
      const term = searchTerm.toLowerCase();
      return (
        p.nome.toLowerCase().includes(term) ||
        (p.descricao && p.descricao.toLowerCase().includes(term))
      );
    });

    container.innerHTML = `
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
          ${
            canCreate
              ? `
                <button class="btn btn-primary" id="btn-new-plan" style="display: flex; align-items: center; gap: 6px;">
                  ${ICONS.plus} Novo Plano de Ensino
                </button>
              `
              : ''
          }
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

      <!-- TABELA: PLANOS DE ENSINO -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Planos Pedagógicos Cadastrados (${filteredTeachingPlans.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 160px;">Plano de Ensino</th>
                <th class="col-hide-sm" style="width: 160px; text-align: center;">Estrutura</th>
                <th class="col-hide-md">Descrição</th>
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${
                filteredTeachingPlans.length === 0
                  ? `
                    <tr>
                      <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 36px;">
                        ${searchTerm ? 'Nenhum plano de ensino encontrado para a busca.' : 'Nenhum plano pedagógico cadastrado ainda.'}
                      </td>
                    </tr>
                  `
                  : filteredTeachingPlans
                      .map(plan => {
                        const totalModulos = (plan.modulos || []).length;
                        const totalAulas = (plan.modulos || []).reduce((sum, m) => sum + (m.aulas?.length || 0), 0);

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
                                  ${plan.instrumento ? `<span style="font-size: 0.72rem; color: var(--text-muted);">${plan.instrumento}</span>` : ''}
                                </div>
                              </div>
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

    // Evento: Novo Plano de Ensino
    container.querySelector('#btn-new-plan')?.addEventListener('click', () => {
      openPlanModal();
    });

    // Filtro de Busca
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

    // Ações de Plano de Ensino
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
            message: `Tem certeza que deseja excluir o plano "<strong>${plan.nome}</strong>" e todos os seus módulos e aulas?`,
            onConfirm: () => {
              storageService.deletePlan(plan.id, user?.nome || 'Administrador');
              showToast(`Plano de ensino "${plan.nome}" excluído.`, 'info');
              renderList();
            }
          });
        }
      });
    });
  }

  // ========================================================
  // MODAL: PLANO DE ENSINO (100% PEDAGÓGICO: PLANO -> MÓDULOS -> AULAS)
  // ========================================================
  function openPlanModal(existingPlan?: TeachingPlan): void {
    const isEditing = !!existingPlan;

    let currentModules: PlanModule[] = existingPlan
      ? JSON.parse(JSON.stringify(existingPlan.modulos || []))
      : [];

    currentModules.forEach(m => {
      if (!Array.isArray(m.aulas)) {
        m.aulas = [];
      }
    });

    function renderModulesHtml(): string {
      if (currentModules.length === 0) {
        return `
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); margin-top: 8px;">
            Nenhum módulo adicionado ainda. Digite o nome do módulo acima e clique em "Adicionar Módulo".
          </div>
        `;
      }

      return currentModules
        .map((mod, modIdx) => {
          const modAulas = mod.aulas || [];

          return `
            <div class="module-card-item" data-mod-idx="${modIdx}" style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; margin-top: 8px;">
              <!-- Cabeçalho do Módulo -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px; flex: 1;">
                  <span class="badge" style="background: rgba(234, 67, 53, 0.15); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.72rem; padding: 2px 7px;">
                    Módulo ${modIdx + 1}
                  </span>
                  <input 
                    type="text" 
                    class="form-input input-module-title" 
                    data-mod-idx="${modIdx}" 
                    value="${mod.titulo}" 
                    placeholder="Título do módulo" 
                    style="font-size: 0.84rem; font-weight: 600; padding: 4px 8px; background: transparent; border-color: transparent; border-bottom: 1px dashed var(--border-subtle); width: 100%;"
                  />
                </div>

                <div style="display: flex; gap: 4px; align-items: center;">
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-up" data-mod-idx="${modIdx}" title="Mover para cima" ${modIdx === 0 ? 'disabled' : ''} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▲
                  </button>
                  <button type="button" class="btn btn-secondary btn-icon-only btn-move-module-down" data-mod-idx="${modIdx}" title="Mover para baixo" ${modIdx === currentModules.length - 1 ? 'disabled' : ''} style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ▼
                  </button>
                  <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-mod-idx="${modIdx}" title="Excluir Módulo" style="width: 24px; height: 24px; padding: 0; font-size: 0.7rem;">
                    ${ICONS.trash}
                  </button>
                </div>
              </div>

              <!-- Lista de Aulas do Módulo -->
              <div class="lessons-container" style="display: flex; flex-direction: column; gap: 5px; margin-left: 14px; border-left: 2px solid rgba(234, 67, 53, 0.2); padding-left: 10px;">
                ${
                  modAulas.length === 0
                    ? `<div style="font-size: 0.74rem; color: var(--text-muted); font-style: italic; padding: 4px 0;">Nenhuma aula cadastrada neste módulo.</div>`
                    : modAulas
                        .map(
                          (aula, aulaIdx) => `
                            <div style="display: flex; align-items: center; gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
                              <span style="font-size: 0.72rem; color: var(--text-muted); min-width: 44px;">Aula ${aulaIdx + 1}:</span>
                              <input 
                                type="text" 
                                class="form-input input-lesson-title" 
                                data-mod-idx="${modIdx}" 
                                data-aula-idx="${aulaIdx}" 
                                value="${aula.titulo}" 
                                placeholder="Título da aula" 
                                style="flex: 1; font-size: 0.78rem; padding: 2px 6px; background: transparent; border: none;"
                              />
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-up" data-mod-idx="${modIdx}" data-aula-idx="${aulaIdx}" title="Mover aula acima" ${aulaIdx === 0 ? 'disabled' : ''} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▲
                              </button>
                              <button type="button" class="btn btn-secondary btn-icon-only btn-move-lesson-down" data-mod-idx="${modIdx}" data-aula-idx="${aulaIdx}" title="Mover aula abaixo" ${aulaIdx === modAulas.length - 1 ? 'disabled' : ''} style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ▼
                              </button>
                              <button type="button" class="btn btn-danger btn-icon-only btn-remove-lesson" data-mod-idx="${modIdx}" data-aula-idx="${aulaIdx}" title="Excluir Aula" style="width: 20px; height: 20px; padding: 0; font-size: 0.65rem;">
                                ✕
                              </button>
                            </div>
                          `
                        )
                        .join('')
                }

                <!-- Adicionar Aula ao Módulo -->
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <input 
                    type="text" 
                    class="form-input input-new-lesson" 
                    data-mod-idx="${modIdx}" 
                    placeholder="Título da nova aula (ex: Acorde Dó Maior)..." 
                    style="flex: 1; font-size: 0.76rem; padding: 4px 8px;"
                  />
                  <button 
                    type="button" 
                    class="btn btn-secondary btn-sm btn-add-lesson" 
                    data-mod-idx="${modIdx}" 
                    style="font-size: 0.72rem; padding: 4px 10px; white-space: nowrap;"
                  >
                    + Aula
                  </button>
                </div>
              </div>
            </div>
          `;
        })
        .join('');
    }

    const bodyHtml = `
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
                value="${existingPlan?.nome || ''}" 
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
                value="${existingPlan?.instrumento || ''}" 
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
              placeholder="Nome do novo módulo (ex: Módulo 1: Primeiros Acordes)..." 
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
          <div id="plan-modules-list-container" style="max-height: 280px; overflow-y: auto; padding-right: 4px;">
            ${renderModulesHtml()}
          </div>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? `Editar Plano de Ensino: ${existingPlan.nome}` : 'Novo Plano de Ensino',
      bodyHtml,
      modalClass: 'modal-lg',
      confirmText: isEditing ? 'Salvar Plano' : 'Criar Plano',
      onConfirm: () => {
        const nome = (document.getElementById('plan-nome') as HTMLInputElement)?.value.trim();
        const instrumento = (document.getElementById('plan-instrumento') as HTMLInputElement)?.value.trim();
        const desc = (document.getElementById('plan-desc') as HTMLInputElement)?.value.trim();

        if (!nome) {
          showToast('Preencha o nome do plano de ensino.', 'error');
          return false;
        }

        const modulosFinais: PlanModule[] = currentModules.map((mod, idx) => ({
          id: mod.id || `mod_${Date.now()}_${idx}`,
          ordem: idx + 1,
          titulo: mod.titulo.trim() || `Módulo ${idx + 1}`,
          descricao: mod.descricao,
          aulas: (mod.aulas || []).map((aula, aIdx) => ({
            id: aula.id || `aul_${Date.now()}_${idx}_${aIdx}`,
            ordem: aIdx + 1,
            titulo: aula.titulo.trim() || `Aula ${aIdx + 1}`,
            conteudo: aula.conteudo,
            duracaoMinutos: aula.duracaoMinutos
          }))
        }));

        const currentUserName = user?.nome || 'Administrador';

        if (isEditing && existingPlan) {
          storageService.updatePlan(
            existingPlan.id,
            {
              nome,
              descricao: desc,
              instrumento: instrumento || undefined,
              modulos: modulosFinais
            },
            currentUserName
          );
          showToast(`Plano de ensino "${nome}" atualizado!`, 'success');
        } else {
          storageService.addPlan(
            {
              nome,
              descricao: desc,
              instrumento: instrumento || undefined,
              modulos: modulosFinais
            },
            currentUserName
          );
          showToast(`Plano de ensino "${nome}" cadastrado com sucesso!`, 'success');
        }

        renderList();
        return true;
      }
    });

    setTimeout(() => {
      attachModuleListEvents();
    }, 50);

    function attachModuleListEvents(): void {
      const containerList = document.getElementById('plan-modules-list-container');
      const counterBadge = document.getElementById('modules-counter-badge');
      if (!containerList) return;

      const refreshModulesList = () => {
        containerList.innerHTML = renderModulesHtml();
        if (counterBadge) {
          counterBadge.textContent = `${currentModules.length} módulos`;
        }
        attachModuleListEvents();
      };

      const btnAddModule = document.getElementById('btn-quick-add-module');
      const inputAddModule = document.getElementById('quick-add-module-input') as HTMLInputElement;

      if (btnAddModule && inputAddModule) {
        btnAddModule.onclick = () => {
          const val = inputAddModule.value.trim();
          if (!val) {
            showToast('Informe o nome do módulo.', 'error');
            return;
          }
          currentModules.push({
            id: `mod_${Date.now()}`,
            ordem: currentModules.length + 1,
            titulo: val,
            aulas: []
          });
          inputAddModule.value = '';
          refreshModulesList();
        };

        inputAddModule.onkeydown = e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            btnAddModule.click();
          }
        };
      }

      containerList.querySelectorAll('.input-module-title').forEach(input => {
        input.addEventListener('input', e => {
          const modIdx = parseInt((e.target as HTMLElement).dataset.modIdx || '0', 10);
          if (currentModules[modIdx]) {
            currentModules[modIdx].titulo = (e.target as HTMLInputElement).value;
          }
        });
      });

      containerList.querySelectorAll('.btn-move-module-up').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          if (modIdx > 0) {
            const temp = currentModules[modIdx];
            currentModules[modIdx] = currentModules[modIdx - 1];
            currentModules[modIdx - 1] = temp;
            refreshModulesList();
          }
        });
      });

      containerList.querySelectorAll('.btn-move-module-down').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          if (modIdx < currentModules.length - 1) {
            const temp = currentModules[modIdx];
            currentModules[modIdx] = currentModules[modIdx + 1];
            currentModules[modIdx + 1] = temp;
            refreshModulesList();
          }
        });
      });

      containerList.querySelectorAll('.btn-remove-module').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          currentModules.splice(modIdx, 1);
          refreshModulesList();
        });
      });

      containerList.querySelectorAll('.input-lesson-title').forEach(input => {
        input.addEventListener('input', e => {
          const modIdx = parseInt((e.target as HTMLElement).dataset.modIdx || '0', 10);
          const aulaIdx = parseInt((e.target as HTMLElement).dataset.aulaIdx || '0', 10);
          if (currentModules[modIdx]?.aulas[aulaIdx]) {
            currentModules[modIdx].aulas[aulaIdx].titulo = (e.target as HTMLInputElement).value;
          }
        });
      });

      containerList.querySelectorAll('.btn-add-lesson').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          const lessonInput = containerList.querySelector(`.input-new-lesson[data-mod-idx="${modIdx}"]`) as HTMLInputElement;
          const val = lessonInput?.value.trim();
          if (!val) {
            showToast('Informe o título da aula.', 'error');
            return;
          }
          if (currentModules[modIdx]) {
            currentModules[modIdx].aulas.push({
              id: `aul_${Date.now()}`,
              ordem: currentModules[modIdx].aulas.length + 1,
              titulo: val
            });
            refreshModulesList();
          }
        });
      });

      containerList.querySelectorAll('.btn-move-lesson-up').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          const aulaIdx = parseInt((e.currentTarget as HTMLElement).dataset.aulaIdx || '0', 10);
          if (currentModules[modIdx] && aulaIdx > 0) {
            const aulas = currentModules[modIdx].aulas;
            const temp = aulas[aulaIdx];
            aulas[aulaIdx] = aulas[aulaIdx - 1];
            aulas[aulaIdx - 1] = temp;
            refreshModulesList();
          }
        });
      });

      containerList.querySelectorAll('.btn-move-lesson-down').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          const aulaIdx = parseInt((e.currentTarget as HTMLElement).dataset.aulaIdx || '0', 10);
          if (currentModules[modIdx]) {
            const aulas = currentModules[modIdx].aulas;
            if (aulaIdx < aulas.length - 1) {
              const temp = aulas[aulaIdx];
              aulas[aulaIdx] = aulas[aulaIdx + 1];
              aulas[aulaIdx + 1] = temp;
              refreshModulesList();
            }
          }
        });
      });

      containerList.querySelectorAll('.btn-remove-lesson').forEach(btn => {
        btn.addEventListener('click', e => {
          const modIdx = parseInt((e.currentTarget as HTMLElement).dataset.modIdx || '0', 10);
          const aulaIdx = parseInt((e.currentTarget as HTMLElement).dataset.aulaIdx || '0', 10);
          if (currentModules[modIdx]) {
            currentModules[modIdx].aulas.splice(aulaIdx, 1);
            refreshModulesList();
          }
        });
      });
    }
  }

  renderList();
  return container;
}
