import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { TeachingPlan, PlanModule } from '../types';
import { ICONS, openModal, showToast } from '../utils/ui';

export function renderPlanos(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();

  function renderList(): void {
    const plans = storageService.getPlans();
    const canCreate = hasActionPermission(user, 'planos', 'cadastrar');
    const canEdit = hasActionPermission(user, 'planos', 'alterar');
    const canDelete = hasActionPermission(user, 'planos', 'excluir');

    container.innerHTML = `
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

        ${
          canCreate
            ? `
              <button class="btn btn-primary" id="btn-new-plan">
                ${ICONS.plus} Cadastrar Novo Plano
              </button>
            `
            : ''
        }
      </div>

      <!-- Lista de Cards de Planos -->
      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${plans.length === 0
        ? `<div class="panel-card" style="padding: 40px; text-align: center; color: var(--text-muted);">Nenhum plano de ensino cadastrado.</div>`
        : plans
          .map(plan => {
            return `
                    <div class="panel-card" style="margin-bottom: 0;">
                      <div class="panel-card-header" style="background-color: rgba(255, 255, 255, 0.02);">
                        <div style="display: flex; align-items: center; gap: 14px;">
                          <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: rgba(234, 67, 53, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-coral);">
                            ${ICONS.planos}
                          </div>
                          <div>
                            <h3 class="panel-card-title">${plan.nome}</h3>
                            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${plan.descricao || 'Sem descrição cadastrada'}</p>
                          </div>
                        </div>

                        <div style="display: flex; gap: 8px;">
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
                          ${!canEdit && !canDelete ? `<span style="font-size: 0.75rem; color: var(--text-muted); align-self: center;">Visualização</span>` : ''}
                        </div>
                      </div>

                      <!-- Listagem dos Módulos Aninhados -->
                      <div style="padding: 18px 24px;">
                        <div style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.05em;">
                          Módulos Integrados (${plan.modulos.length})
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
                          ${plan.modulos.length === 0
                ? `<div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic;">Nenhum módulo adicionado neste plano.</div>`
                : plan.modulos
                  .map((mod, idx) => `
                                    <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
                                      <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--color-coral); color: #fff; font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                        ${idx + 1}
                                      </div>
                                      <span style="font-size: 0.86rem; color: var(--text-white); font-weight: 500;">${mod.titulo}</span>
                                    </div>
                                  `)
                  .join('')
              }
                        </div>
                      </div>
                    </div>
                  `;
          })
          .join('')
      }
      </div>
    `;

    container.querySelector('#btn-new-plan')?.addEventListener('click', () => {
      openPlanModal();
    });

    container.querySelectorAll('.btn-edit-plan').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const plan = storageService.getPlans().find(p => p.id === id);
        if (plan) openPlanModal(plan);
      });
    });

    container.querySelectorAll('.btn-delete-plan').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const plan = storageService.getPlans().find(p => p.id === id);
        if (plan && confirm(`Tem certeza que deseja excluir o plano "${plan.nome}" e todos os seus módulos?`)) {
          storageService.deletePlan(plan.id, user?.nome || 'Administrador');
          showToast(`Plano "${plan.nome}" excluído.`, 'info');
          renderList();
        }
      });
    });
  }

  function openPlanModal(existingPlan?: TeachingPlan): void {
    const isEditing = !!existingPlan;
    // Módulos clonados para manipulação
    let currentModules: PlanModule[] = existingPlan
      ? JSON.parse(JSON.stringify(existingPlan.modulos))
      : [
        { id: 'm1', ordem: 1, titulo: 'Módulo 1: Fundamentos' },
        { id: 'm2', ordem: 2, titulo: 'Módulo 2: Aprofundamento Prático' }
      ];

    function renderModulesInputsHtml(): string {
      return currentModules
        .map(
          (m, i) => `
            <div class="module-row" data-idx="${i}" style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-coral); width: 20px;">#${i + 1}</span>
              <input 
                type="text" 
                class="form-input module-title-input" 
                value="${m.titulo}" 
                placeholder="Ex: Módulo ${i + 1} - Nome do módulo" 
                style="flex: 1; padding: 8px 12px; font-size: 0.88rem;"
              />
              <button type="button" class="btn btn-danger btn-icon-only btn-remove-module" data-idx="${i}" title="Remover Módulo">
                &times;
              </button>
            </div>
          `
        )
        .join('');
    }

    const bodyHtml = `
      <form id="plan-modal-form">
        <div class="form-group">
          <label class="form-label" for="plan-nome">Nome do Plano de Ensino</label>
          <input type="text" id="plan-nome" class="form-input" placeholder="Ex: Plano 1 ou Teoria Musical Avançada" value="${existingPlan?.nome || ''}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="plan-desc">Descrição / Objetivo do Plano</label>
          <textarea id="plan-desc" class="form-textarea" rows="2" placeholder="Resumo dos objetivos e público-alvo...">${existingPlan?.descricao || ''}</textarea>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label class="form-label" style="margin-bottom: 0;">Módulos do Plano (Hierarquia)</label>
            <button type="button" class="btn btn-secondary" id="btn-add-module-row" style="padding: 4px 10px; font-size: 0.78rem;">
              + Adicionar Módulo
            </button>
          </div>

          <div id="modules-container">
            ${renderModulesInputsHtml()}
          </div>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? `Editar Plano: ${existingPlan.nome}` : 'Cadastrar Novo Plano de Ensino',
      bodyHtml,
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Plano',
      onConfirm: () => {
        const nome = (document.getElementById('plan-nome') as HTMLInputElement).value.trim();
        const desc = (document.getElementById('plan-desc') as HTMLTextAreaElement).value.trim();

        // Coletar títulos dos módulos
        const moduleInputs = document.querySelectorAll('.module-title-input');
        const modules: PlanModule[] = [];

        moduleInputs.forEach((input, index) => {
          const val = (input as HTMLInputElement).value.trim();
          if (val) {
            modules.push({
              id: 'mod_' + (index + 1) + '_' + Date.now(),
              ordem: index + 1,
              titulo: val
            });
          }
        });

        if (!nome) {
          showToast('Informe o nome do plano.', 'error');
          return false;
        }

        if (modules.length === 0) {
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
              modulos: modules
            },
            currentUserName
          );
          showToast('Plano de ensino atualizado com sucesso!', 'success');
        } else {
          storageService.addPlan(
            {
              nome,
              descricao: desc,
              modulos: modules
            },
            currentUserName
          );
          showToast('Plano de ensino cadastrado com sucesso!', 'success');
        }

        renderList();
        return true;
      }
    });

    // Conectar eventos de adicionar/remover módulos dinamicamente no modal
    function attachModuleEvents(): void {
      const containerEl = document.getElementById('modules-container');
      if (!containerEl) return;

      containerEl.innerHTML = renderModulesInputsHtml();

      containerEl.querySelectorAll('.btn-remove-module').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt((e.currentTarget as HTMLElement).dataset.idx || '0', 10);
          currentModules.splice(idx, 1);
          attachModuleEvents();
        });
      });

      // Sincronizar inputs existentes com array
      containerEl.querySelectorAll('.module-title-input').forEach((inp, idx) => {
        inp.addEventListener('input', (e) => {
          if (currentModules[idx]) {
            currentModules[idx].titulo = (e.target as HTMLInputElement).value;
          }
        });
      });
    }

    setTimeout(() => {
      document.getElementById('btn-add-module-row')?.addEventListener('click', () => {
        const nextOrder = currentModules.length + 1;
        currentModules.push({
          id: 'mod_' + nextOrder + '_' + Date.now(),
          ordem: nextOrder,
          titulo: `Módulo ${nextOrder}: `
        });
        attachModuleEvents();
      });

      attachModuleEvents();
    }, 50);
  }

  renderList();
  return container;
}
