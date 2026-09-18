import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { PaymentPlan, PaymentPlanModalidade, PaymentPlanPeriodicidade } from '../types';
import { ICONS, openModal, showToast, confirmAction, applyInputMask, maskMoney, parseMoney } from '../utils/ui';

export function renderPlanosPagamento(_onNavigate?: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  let searchTerm = '';
  let filterModalidade: string = 'todas';
  let filterPeriodicidade: string = 'todas';

  // Usa as permissões de financeiro ou administrador para gestão dos planos de pagamento
  const canCreate = hasActionPermission(user, 'financeiro', 'cadastrar');
  const canEdit = hasActionPermission(user, 'financeiro', 'alterar');
  const canDelete = hasActionPermission(user, 'financeiro', 'excluir');

  function renderList(): void {
    const allPaymentPlans = storageService.getPaymentPlans();

    const filtered = allPaymentPlans.filter(p => {
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        p.nome.toLowerCase().includes(term) ||
        p.modalidade.toLowerCase().includes(term) ||
        p.periodicidade.toLowerCase().includes(term) ||
        (p.descricao && p.descricao.toLowerCase().includes(term));

      const matchesMod = filterModalidade === 'todas' || p.modalidade === filterModalidade;
      const matchesPer = filterPeriodicidade === 'todas' || p.periodicidade === filterPeriodicidade;

      return matchesSearch && matchesMod && matchesPer;
    });

    const totalPlanos = allPaymentPlans.length;
    const totalIndiv = allPaymentPlans.filter(p => p.modalidade === 'individual').length;
    const totalTurma = allPaymentPlans.filter(p => p.modalidade === 'turma').length;
    const totalAtivos = allPaymentPlans.filter(p => p.ativo).length;

    container.innerHTML = `
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-white); margin: 0; display: flex; align-items: center; gap: 10px;">
            <span style="color: #4ade80;">${ICONS.planoPagamento}</span> Planos de Pagamento
          </h2>
          <p style="color: var(--text-secondary); margin: 4px 0 0 0; font-size: 0.88rem;">
            Defina valores de mensalidade, modalidades (individual/turma) e ciclos de cobrança.
          </p>
        </div>

        <div style="display: flex; gap: 10px; align-items: center;">
          ${
            canCreate
              ? `<button class="btn btn-primary" id="btn-novo-plano-pagamento" style="display: flex; align-items: center; gap: 8px;">
                   ${ICONS.plus} Novo Plano de Pagamento
                 </button>`
              : ''
          }
        </div>
      </div>

      <!-- Cards de Métricas e Totais -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(74, 222, 128, 0.15); color: #4ade80; display: flex; align-items: center; justify-content: center;">
            ${ICONS.planoPagamento}
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Total de Planos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${totalPlanos}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(96, 165, 250, 0.15); color: #60a5fa; display: flex; align-items: center; justify-content: center;">
            👤
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Individual</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${totalIndiv}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(168, 85, 247, 0.15); color: #c084fc; display: flex; align-items: center; justify-content: center;">
            👥
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Modalidade Turma</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${totalTurma}</div>
          </div>
        </div>

        <div class="card" style="padding: 14px 18px; display: flex; align-items: center; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center;">
            ✓
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Planos Ativos</div>
            <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-white);">${totalAtivos}</div>
          </div>
        </div>
      </div>

      <!-- Barra de Filtros -->
      <div class="card" style="padding: 14px; margin-bottom: 20px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; position: relative;">
          <input
            type="text"
            id="pp-search"
            class="form-input"
            placeholder="Buscar por nome do plano ou detalhe..."
            value="${searchTerm}"
            style="padding-left: 36px;"
          />
          <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); pointer-events: none;">
            ${ICONS.search}
          </span>
        </div>

        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">Modalidade:</label>
          <select id="pp-filter-mod" class="form-select" style="min-width: 140px; padding: 7px 12px; font-size: 0.85rem;">
            <option value="todas" ${filterModalidade === 'todas' ? 'selected' : ''}>Todas</option>
            <option value="individual" ${filterModalidade === 'individual' ? 'selected' : ''}>Individual</option>
            <option value="turma" ${filterModalidade === 'turma' ? 'selected' : ''}>Turma</option>
          </select>
        </div>

        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">Ciclo:</label>
          <select id="pp-filter-per" class="form-select" style="min-width: 140px; padding: 7px 12px; font-size: 0.85rem;">
            <option value="todas" ${filterPeriodicidade === 'todas' ? 'selected' : ''}>Todas</option>
            <option value="mensal" ${filterPeriodicidade === 'mensal' ? 'selected' : ''}>Mensal</option>
            <option value="trimestral" ${filterPeriodicidade === 'trimestral' ? 'selected' : ''}>Trimestral</option>
            <option value="semestral" ${filterPeriodicidade === 'semestral' ? 'selected' : ''}>Semestral</option>
          </select>
        </div>
      </div>

      <!-- Lista de Planos de Pagamento -->
      ${
        filtered.length === 0
          ? `
          <div class="card" style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;">💳</div>
            <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-white); margin-bottom: 6px;">Nenhum plano de pagamento encontrado</div>
            <div style="font-size: 0.85rem;">Tente ajustar seus filtros de busca ou crie um novo plano acima.</div>
          </div>
          `
          : `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
            ${filtered
              .map(p => {
                const descSeg = p.descontoSegundaMatricula ?? 0;
                const valorComDesconto = descSeg > 0 ? p.valorMensal * (1 - descSeg / 100) : p.valorMensal;
                const isIndividual = p.modalidade === 'individual';

                return `
                <div class="card" style="padding: 18px; display: flex; flex-direction: column; justify-content: space-between; position: relative; border-top: 3px solid ${isIndividual ? '#3b82f6' : '#a855f7'};">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 6px;">
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: ${isIndividual ? 'rgba(59, 130, 246, 0.15)' : 'rgba(168, 85, 247, 0.15)'}; color: ${isIndividual ? '#60a5fa' : '#c084fc'};">
                            ${isIndividual ? '👤 Individual' : '👥 Turma'}
                          </span>
                          <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); color: var(--text-secondary);">
                            ${p.periodicidade.toUpperCase()}
                          </span>
                        </div>
                        <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: var(--text-white);">${p.nome}</h3>
                      </div>

                      <span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${p.ativo ? '#22c55e' : '#ef4444'};" title="${p.ativo ? 'Ativo' : 'Inativo'}"></span>
                    </div>

                    ${
                      p.descricao
                        ? `<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0 0 14px 0; line-height: 1.4;">${p.descricao}</p>`
                        : ''
                    }

                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; margin-bottom: 16px;">
                      <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; margin-bottom: 2px;">Valor Mensal Regular</div>
                      <div style="font-size: 1.45rem; font-weight: 800; color: #4ade80;">
                        R$ ${p.valorMensal.toFixed(2).replace('.', ',')}
                        <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-secondary);">/mês</span>
                      </div>

                      ${
                        descSeg > 0
                          ? `
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-secondary);">
                              2ª Matrícula / Familiar (${descSeg}% sugerido):
                            </span>
                            <span style="font-size: 0.84rem; font-weight: 600; color: var(--text-white);">
                              R$ ${valorComDesconto.toFixed(2).replace('.', ',')}/mês
                            </span>
                          </div>
                          `
                          : `
                          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.74rem; color: var(--text-muted);">
                              Sem desconto de 2ª matrícula previsto
                            </span>
                          </div>
                          `
                      }
                    </div>
                  </div>

                  <div style="display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid var(--border-subtle); padding-top: 12px; margin-top: 6px;">
                    ${
                      canEdit
                        ? `<button class="btn btn-secondary btn-sm btn-edit-pp" data-id="${p.id}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${ICONS.edit} Editar
                           </button>`
                        : ''
                    }
                    ${
                      canDelete
                        ? `<button class="btn btn-danger btn-sm btn-del-pp" data-id="${p.id}" data-name="${p.nome}" style="padding: 5px 10px; font-size: 0.78rem; display: flex; align-items: center; gap: 4px;">
                             ${ICONS.trash} Excluir
                           </button>`
                        : ''
                    }
                  </div>
                </div>
                `;
              })
              .join('')}
          </div>
          `
      }
    `;

    // Eventos de Busca e Filtros
    const searchInput = container.querySelector('#pp-search') as HTMLInputElement;
    searchInput?.addEventListener('input', e => {
      searchTerm = (e.target as HTMLInputElement).value;
      renderList();
    });

    const filterModSelect = container.querySelector('#pp-filter-mod') as HTMLSelectElement;
    filterModSelect?.addEventListener('change', e => {
      filterModalidade = (e.target as HTMLSelectElement).value;
      renderList();
    });

    const filterPerSelect = container.querySelector('#pp-filter-per') as HTMLSelectElement;
    filterPerSelect?.addEventListener('change', e => {
      filterPeriodicidade = (e.target as HTMLSelectElement).value;
      renderList();
    });

    // Ações de Botões
    container.querySelector('#btn-novo-plano-pagamento')?.addEventListener('click', () => {
      openPaymentPlanModal();
    });

    container.querySelectorAll('.btn-edit-pp').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        if (id) {
          const plan = storageService.getPaymentPlanById(id);
          if (plan) openPaymentPlanModal(plan);
        }
      });
    });

    container.querySelectorAll('.btn-del-pp').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const name = (e.currentTarget as HTMLElement).dataset.name;
        if (id) {
          confirmAction({
            title: 'Excluir Plano de Pagamento',
            message: `Deseja realmente excluir o plano de pagamento "<strong>${name}</strong>"?<br><small style="color: var(--text-secondary);">Alunos vinculados continuarão com seu histórico financeiro.</small>`,
            onConfirm: () => {
              storageService.deletePaymentPlan(id, user?.nome || 'Administrador');
              showToast(`Plano de pagamento "${name}" excluído com sucesso!`, 'info');
              renderList();
            }
          });
        }
      });
    });
  }

  function openPaymentPlanModal(plan?: PaymentPlan): void {
    const isEditing = !!plan;
    const currentUserName = user?.nome || 'Administrador';

    const bodyHtml = `
      <form id="form-payment-plan" style="display: flex; flex-direction: column; gap: 14px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-nome">Nome do Plano de Pagamento *</label>
          <input type="text" id="pp-nome" class="form-input" placeholder="Ex: Mensal Individual, Semestral Turma" value="${plan?.nome || ''}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-modalidade">Modalidade *</label>
            <select id="pp-modalidade" class="form-select" required>
              <option value="individual" ${plan?.modalidade === 'individual' ? 'selected' : ''}>Individual</option>
              <option value="turma" ${plan?.modalidade === 'turma' ? 'selected' : ''}>Turma</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-periodicidade">Periodicidade / Ciclo *</label>
            <select id="pp-periodicidade" class="form-select" required>
              <option value="mensal" ${plan?.periodicidade === 'mensal' ? 'selected' : ''}>Mensal</option>
              <option value="trimestral" ${plan?.periodicidade === 'trimestral' ? 'selected' : ''}>Trimestral</option>
              <option value="semestral" ${plan?.periodicidade === 'semestral' ? 'selected' : ''}>Semestral</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-valor">Valor Mensal (R$) *</label>
            <input type="text" id="pp-valor" class="form-input" placeholder="0,00" value="${plan ? plan.valorMensal.toFixed(2).replace('.', ',') : '280,00'}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pp-desconto-segunda">Desconto 2ª Matrícula / Familiar (%)</label>
            <input type="number" id="pp-desconto-segunda" class="form-input" min="0" max="100" value="${plan?.descontoSegundaMatricula ?? 20}" />
            <small style="font-size: 0.72rem; color: var(--text-secondary);">Opcional. Percentual sugerido de desconto (0 para nenhum).</small>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pp-desc">Descrição / Observações</label>
          <textarea id="pp-desc" class="form-textarea" rows="2" placeholder="Regras do plano, benefícios ou detalhes...">${plan?.descricao || ''}</textarea>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
          <input type="checkbox" id="pp-ativo" style="accent-color: var(--color-coral); cursor: pointer;" ${plan ? (plan.ativo ? 'checked' : '') : 'checked'} />
          <label for="pp-ativo" style="font-size: 0.85rem; color: var(--text-white); cursor: pointer; user-select: none;">
            Plano Ativo para Novas Matrículas
          </label>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? 'Editar Plano de Pagamento' : 'Novo Plano de Pagamento',
      bodyHtml,
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Plano',
      onConfirm: () => {
        const nome = (document.getElementById('pp-nome') as HTMLInputElement)?.value.trim();
        const modalidade = (document.getElementById('pp-modalidade') as HTMLSelectElement)?.value as PaymentPlanModalidade;
        const periodicidade = (document.getElementById('pp-periodicidade') as HTMLSelectElement)?.value as PaymentPlanPeriodicidade;
        const valorRaw = (document.getElementById('pp-valor') as HTMLInputElement)?.value.trim();
        const descInput = (document.getElementById('pp-desconto-segunda') as HTMLInputElement)?.value;
        const parsedDesc = parseFloat(descInput);
        const descontoSegunda = !isNaN(parsedDesc) && parsedDesc >= 0 ? parsedDesc : 0;
        const descricao = (document.getElementById('pp-desc') as HTMLTextAreaElement)?.value.trim();
        const ativo = (document.getElementById('pp-ativo') as HTMLInputElement)?.checked ?? true;

        if (!nome) {
          showToast('Preencha o nome do plano de pagamento.', 'error');
          return false;
        }

        const valorMensal = parseMoney(valorRaw);
        if (isNaN(valorMensal) || valorMensal <= 0) {
          showToast('Informe um valor mensal válido superior a zero.', 'error');
          return false;
        }

        if (isEditing && plan) {
          storageService.updatePaymentPlan(
            plan.id,
            {
              nome,
              modalidade,
              periodicidade,
              valorMensal,
              descontoSegundaMatricula: descontoSegunda,
              descricao,
              ativo
            },
            currentUserName
          );
          showToast(`Plano de pagamento "${nome}" atualizado com sucesso!`, 'success');
        } else {
          storageService.addPaymentPlan(
            {
              nome,
              modalidade,
              periodicidade,
              valorMensal,
              descontoSegundaMatricula: descontoSegunda,
              descricao,
              ativo
            },
            currentUserName
          );
          showToast(`Plano de pagamento "${nome}" criado com sucesso!`, 'success');
        }

        renderList();
        return true;
      }
    });

    setTimeout(() => {
      const valorInput = document.getElementById('pp-valor') as HTMLInputElement;
      if (valorInput) applyInputMask(valorInput, maskMoney);
    }, 50);
  }

  renderList();
  return container;
}
