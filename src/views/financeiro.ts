import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Payment, PaymentMethod, PaymentStatus, Student } from '../types';
import { ICONS, openModal, closeModal, showToast, confirmAction } from '../utils/ui';
import { openReceiptModal } from './alunos';

export function renderFinanceiro(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();

  let searchTerm = '';
  let statusFilter: 'todos' | PaymentStatus = 'todos';
  let filterDate: Date | null = new Date();

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  function formatDisplayMonth(date: Date): string {
    return `${monthNames[date.getMonth()]} de ${date.getFullYear()}`;
  }

  const canCreate = hasActionPermission(user, 'financeiro', 'cadastrar');
  const canEdit = hasActionPermission(user, 'financeiro', 'alterar');
  const canDelete = hasActionPermission(user, 'financeiro', 'excluir');

  function render(): void {
    const allPayments = storageService.getPayments();
    const students = storageService.getStudents();
    const today = new Date();

    const isCurrentMonthSelected =
      filterDate !== null &&
      today.getMonth() === filterDate.getMonth() &&
      today.getFullYear() === filterDate.getFullYear();

    const targetMonthStr = filterDate
      ? `${filterDate.getFullYear()}-${String(filterDate.getMonth() + 1).padStart(2, '0')}`
      : '';

    // Métricas
    const totalRecebido = allPayments
      .filter(p => p.status === 'pago')
      .reduce((acc, p) => acc + p.valor, 0);

    const totalPendente = allPayments
      .filter(p => p.status === 'pendente')
      .reduce((acc, p) => acc + p.valor, 0);

    const totalAtrasado = allPayments
      .filter(p => p.status === 'atrasado')
      .reduce((acc, p) => acc + p.valor, 0);

    // Contagem de alunos inadimplentes (ativos com pagamento atrasado)
    const alunosInadimplentes = students.filter(s => s.status === 'ativo' && storageService.isStudentOverdue(s.id));

    // Filtragem
    const filtered = allPayments.filter(p => {
      const student = students.find(s => s.id === p.alunoId);
      const studentName = student ? student.nome.toLowerCase() : '';
      const desc = p.descricao.toLowerCase();
      const matchSearch =
        studentName.includes(searchTerm.toLowerCase()) ||
        desc.includes(searchTerm.toLowerCase()) ||
        (p.mesReferencia && p.mesReferencia.includes(searchTerm));

      const matchStatus = statusFilter === 'todos' || p.status === statusFilter;
      const matchMonth = !targetMonthStr || p.mesReferencia === targetMonthStr || p.dataVencimento.startsWith(targetMonthStr);

      return matchSearch && matchStatus && matchMonth;
    });

    container.innerHTML = `
      <!-- Cabeçalho Principal -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
            <span>💰</span> Gestão Financeira &amp; Mensalidades
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Controle de mensalidades, recebimentos, baixas manuais, emissão de recibos e inadimplência.
          </p>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${
            canCreate
              ? `
                <button class="btn btn-secondary" id="btn-gerar-lote" style="display: inline-flex; align-items: center; gap: 6px;">
                  🗓️ Gerar Mensalidades do Mês
                </button>
                <button class="btn btn-primary" id="btn-novo-lancamento" style="display: inline-flex; align-items: center; gap: 6px;">
                  ${ICONS.plus} Novo Lançamento
                </button>
              `
              : ''
          }
        </div>
      </div>

      <!-- Cards de Métricas e KPIs -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div class="panel-card" style="padding: 16px; border-left: 4px solid #22c55e;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Total Recebido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #4ade80; margin-top: 4px;">
            R$ ${totalRecebido.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${allPayments.filter(p => p.status === 'pago').length} mensalidades quitadas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #f59e0b;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">A Vencer / Pendente</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">
            R$ ${totalPendente.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${allPayments.filter(p => p.status === 'pendente').length} aguardando vencimento
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #ef4444;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Em Atraso / Vencido</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-top: 4px;">
            R$ ${totalAtrasado.toFixed(2)}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${allPayments.filter(p => p.status === 'atrasado').length} parcelas expiradas
          </div>
        </div>

        <div class="panel-card" style="padding: 16px; border-left: 4px solid #a855f7;">
          <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Alunos Inadimplentes</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #c084fc; margin-top: 4px;">
            ${alunosInadimplentes.length} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">de ${students.filter(s => s.status === 'ativo').length} ativos</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
            ${alunosInadimplentes.length === 0 ? '✓ 100% em dia' : 'Requer acompanhamento'}
          </div>
        </div>
      </div>

      <!-- Barra de Controle de Período (Mês) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${filterDate ? `Mensalidade / ${filterDate.getFullYear()}-${String(filterDate.getMonth() + 1).padStart(2, '0')}` : 'Todas as Mensalidades'}
          </h3>
          
          <div class="calendar-nav-buttons" style="display: flex; gap: 4px;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="fin-btn-prev-month" title="Mês anterior" style="width: 28px; height: 28px; padding: 0;">
              ◀
            </button>
            <button type="button" class="btn ${isCurrentMonthSelected ? 'btn-primary' : 'btn-secondary'}" id="fin-btn-current-month" style="padding: 6px 14px; font-size: 0.8rem;">
              Mês Atual
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="fin-btn-next-month" title="Próximo mês" style="width: 28px; height: 28px; padding: 0;">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn ${filterDate === null ? 'btn-primary' : 'btn-secondary'}" id="fin-btn-all-months" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os lançamentos sem filtrar por mês">
            Ver Todos
          </button>
        </div>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 260px;">
          <input 
            type="text" 
            id="fin-search-input" 
            class="form-input" 
            placeholder="Buscar por aluno ou descrição..." 
            value="${searchTerm}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${ICONS.search}
          </div>
        </div>

        ${
          searchTerm
            ? `<button type="button" class="btn btn-secondary btn-sm" id="btn-clear-fin-search">Limpar</button>`
            : ''
        }

        <div style="min-width: 150px;">
          <select id="fin-status-filter" class="form-select">
            <option value="todos" ${statusFilter === 'todos' ? 'selected' : ''}>Todos os Status</option>
            <option value="pago" ${statusFilter === 'pago' ? 'selected' : ''}>✓ Pagos</option>
            <option value="pendente" ${statusFilter === 'pendente' ? 'selected' : ''}>⏳ Pendentes</option>
            <option value="atrasado" ${statusFilter === 'atrasado' ? 'selected' : ''}>⚠️ Atrasados</option>
          </select>
        </div>

        ${
          statusFilter !== 'todos'
            ? `
              <button type="button" class="btn btn-secondary btn-sm" id="btn-limpar-status" title="Limpar filtro de status">
                ✕ Todos os Status
              </button>
            `
            : ''
        }
      </div>

      <!-- Tabela Principal de Pagamentos -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">Lançamentos Financeiros (${filtered.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Aluno</th>
                <th class="col-hide-md">Descrição / Referência</th>
                <th class="col-hide-sm" style="width: 140px;">Vencimento</th>
                <th style="width: 110px;">Valor</th>
                <th class="col-hide-xs" style="width: 110px;">Status</th>
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${
                filtered.length === 0
                  ? `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum lançamento financeiro encontrado para os filtros selecionados.</td></tr>`
                  : filtered
                      .map(p => {
                        const student = students.find(s => s.id === p.alunoId);
                        const isPago = p.status === 'pago';
                        const isAtrasado = p.status === 'atrasado';

                        let statusBadge = '';
                        if (isPago) {
                          statusBadge = `<span class="badge badge-success" style="font-size: 0.72rem;">✓ Pago</span>`;
                        } else if (isAtrasado) {
                          statusBadge = `<span class="badge badge-coral" style="font-size: 0.72rem; font-weight: 700;">⚠️ Atrasado</span>`;
                        } else {
                          statusBadge = `<span class="badge badge-warning" style="font-size: 0.72rem;">⏳ Pendente</span>`;
                        }

                        return `
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); font-size: 0.8rem; flex-shrink: 0;">
                                  ${student?.nome ? student.nome[0] : '?'}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${student?.nome || 'Aluno não identificado'}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; white-space: nowrap;">
                                ${p.descricao}${p.mesReferencia ? ` / ${p.mesReferencia}` : ''}
                              </span>
                            </td>

                            <td class="col-hide-sm" style="white-space: nowrap;">
                              <span style="font-size: 0.84rem; color: ${isAtrasado ? '#f87171' : 'var(--text-white)'}; font-weight: ${isAtrasado ? '700' : 'normal'};">
                                ${p.dataVencimento.split('-').reverse().join('/')}
                              </span>
                            </td>

                            <td style="white-space: nowrap;">
                              <span style="font-weight: 700; color: var(--text-white); font-size: 0.88rem;">
                                R$ ${p.valor.toFixed(2)}
                              </span>
                            </td>

                            <td class="col-hide-xs" style="white-space: nowrap;">${statusBadge}</td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                                ${
                                  !isPago && canEdit
                                    ? `
                                      <button class="btn btn-secondary btn-icon-only btn-action-baixa" data-id="${p.id}" title="Dar Baixa / Confirmar Recebimento" style="width: 28px; height: 28px; padding: 0; color: #34d399; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); box-shadow: none;">
                                        ${ICONS.check}
                                      </button>
                                    `
                                    : ''
                                }

                                ${
                                  isPago
                                    ? `
                                      <button class="btn btn-secondary btn-icon-only btn-action-recibo" data-id="${p.id}" title="Imprimir Comprovante / Recibo" style="color: #60a5fa; width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        🖨️
                                      </button>
                                    `
                                    : ''
                                }

                                ${
                                  canEdit
                                    ? `
                                      <button class="btn btn-secondary btn-icon-only btn-action-edit" data-id="${p.id}" title="Editar Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${ICONS.edit}
                                      </button>
                                    `
                                    : ''
                                }

                                ${
                                  canDelete
                                    ? `
                                      <button class="btn btn-danger btn-icon-only btn-action-delete" data-id="${p.id}" title="Excluir Lançamento" style="width: 28px; height: 28px; padding: 0; box-shadow: none;">
                                        ${ICONS.trash}
                                      </button>
                                    `
                                    : ''
                                }
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

    // Eventos de Navegação de Mês/Período
    container.querySelector('#fin-btn-prev-month')?.addEventListener('click', () => {
      if (!filterDate) filterDate = new Date();
      filterDate = new Date(filterDate.getFullYear(), filterDate.getMonth() - 1, 1);
      render();
    });

    container.querySelector('#fin-btn-next-month')?.addEventListener('click', () => {
      if (!filterDate) filterDate = new Date();
      filterDate = new Date(filterDate.getFullYear(), filterDate.getMonth() + 1, 1);
      render();
    });

    container.querySelector('#fin-btn-current-month')?.addEventListener('click', () => {
      filterDate = new Date();
      render();
    });

    container.querySelector('#fin-btn-all-months')?.addEventListener('click', () => {
      filterDate = null;
      render();
    });

    // Eventos de Busca e Filtros
    const searchInput = container.querySelector('#fin-search-input') as HTMLInputElement;
    searchInput?.addEventListener('input', (e) => {
      searchTerm = (e.target as HTMLInputElement).value;
      render();
      const newInp = container.querySelector('#fin-search-input') as HTMLInputElement;
      if (newInp) {
        newInp.focus();
        newInp.selectionStart = newInp.selectionEnd = newInp.value.length;
      }
    });

    container.querySelector('#btn-clear-fin-search')?.addEventListener('click', () => {
      searchTerm = '';
      render();
    });

    const statusSel = container.querySelector('#fin-status-filter') as HTMLSelectElement;
    statusSel?.addEventListener('change', () => {
      statusFilter = statusSel.value as any;
      render();
    });

    container.querySelector('#btn-limpar-status')?.addEventListener('click', () => {
      statusFilter = 'todos';
      render();
    });

    // Ações dos botões do cabeçalho
    container.querySelector('#btn-gerar-lote')?.addEventListener('click', () => {
      openGerarLoteModal();
    });

    container.querySelector('#btn-novo-lancamento')?.addEventListener('click', () => {
      openPaymentFormModal();
    });

    // Ações por linha da tabela
    container.querySelectorAll('.btn-action-baixa').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const p = allPayments.find(item => item.id === id);
        if (p) openDarBaixaModal(p);
      });
    });

    container.querySelectorAll('.btn-action-recibo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const p = allPayments.find(item => item.id === id);
        if (p) {
          const student = students.find(s => s.id === p.alunoId);
          if (student) openReceiptModal(p, student);
        }
      });
    });

    container.querySelectorAll('.btn-action-edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const p = allPayments.find(item => item.id === id);
        if (p) openPaymentFormModal(p);
      });
    });

    container.querySelectorAll('.btn-action-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const p = allPayments.find(item => item.id === id);
        if (!p) return;

        confirmAction({
          title: 'Excluir Lançamento Financeiro',
          message: `Deseja realmente excluir o lançamento "<strong>${p.descricao}</strong>" no valor de <strong>R$ ${p.valor.toFixed(2)}</strong>? Esta operação ficará registrada na auditoria e não poderá ser desfeita.`,
          onConfirm: () => {
            storageService.deletePayment(p.id, user?.nome || 'Administrador');
            showToast('Lançamento excluído com sucesso!', 'info');
            render();
          }
        });
      });
    });
  }

  // Modal para Dar Baixa em Pagamento
  function openDarBaixaModal(payment: Payment): void {
    const student = storageService.getStudents().find(s => s.id === payment.alunoId);
    const todayStr = storageService.getTodayDateString();

    const bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${payment.descricao}</div>
          <div style="color: #4ade80; font-size: 1.25rem; font-weight: 800; margin-top: 4px;">
            R$ ${payment.valor.toFixed(2)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Aluno: <strong>${student?.nome || 'N/A'}</strong> &bull; Vencimento: ${payment.dataVencimento.split('-').reverse().join('/')}
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-data">Data do Recebimento</label>
          <input type="date" id="modal-baixa-data" class="form-input" value="${todayStr}" required />
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-forma">Forma de Pagamento</label>
          <select id="modal-baixa-forma" class="form-select" required>
            <option value="pix">PIX Instantâneo</option>
            <option value="dinheiro">Dinheiro em Espécie</option>
            <option value="cartao_credito">Cartão de Crédito</option>
            <option value="cartao_debito">Cartão de Débito</option>
            <option value="boleto">Boleto Bancário</option>
            <option value="transferencia">Transferência Bancária</option>
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="modal-baixa-obs">Observações do Recebimento (Opcional)</label>
          <input type="text" id="modal-baixa-obs" class="form-input" placeholder="Ex: Comprovante arquivado / Pago no balcão" />
        </div>
      </div>
    `;

    openModal({
      title: 'Confirmar Baixa de Pagamento',
      bodyHtml,
      modalClass: 'modal-sm',
      confirmText: 'Confirmar e Quitar',
      confirmBtnClass: 'btn-primary',
      cancelText: 'Cancelar',
      onConfirm: () => {
        const dataPagto = (document.getElementById('modal-baixa-data') as HTMLInputElement).value;
        const forma = (document.getElementById('modal-baixa-forma') as HTMLSelectElement).value as PaymentMethod;
        const obs = (document.getElementById('modal-baixa-obs') as HTMLInputElement).value;

        if (!dataPagto) {
          showToast('Informe a data de recebimento.', 'error');
          return false;
        }

        storageService.darBaixaPayment(payment.id, dataPagto, forma, user?.nome || 'Administrador', obs);
        showToast(`Baixa efetuada com sucesso! R$ ${payment.valor.toFixed(2)} recebido.`, 'success');
        render();
        return true;
      }
    });
  }

  // Modal para Geração em Lote de Mensalidades
  function openGerarLoteModal(): void {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    const bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); padding: 12px; font-size: 0.84rem; color: var(--text-white); line-height: 1.4;">
          ℹ️ <strong>Como funciona a geração em lote:</strong>
          <p style="margin: 4px 0 0; color: var(--text-secondary); font-size: 0.78rem;">
            O sistema percorre todos os <strong>alunos com status Ativo</strong> e gera a mensalidade correspondente ao mês selecionado, utilizando o valor e dia de vencimento cadastrados na ficha de cada aluno.
            Alunos que já possuem cobrança neste mês não serão duplicados.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-ano">Ano</label>
            <input type="number" id="lote-ano" class="form-input" min="2020" max="2035" value="${currentYear}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="lote-mes">Mês de Competência</label>
            <select id="lote-mes" class="form-select" required>
              <option value="1" ${currentMonth === 1 ? 'selected' : ''}>01 - Janeiro</option>
              <option value="2" ${currentMonth === 2 ? 'selected' : ''}>02 - Fevereiro</option>
              <option value="3" ${currentMonth === 3 ? 'selected' : ''}>03 - Março</option>
              <option value="4" ${currentMonth === 4 ? 'selected' : ''}>04 - Abril</option>
              <option value="5" ${currentMonth === 5 ? 'selected' : ''}>05 - Maio</option>
              <option value="6" ${currentMonth === 6 ? 'selected' : ''}>06 - Junho</option>
              <option value="7" ${currentMonth === 7 ? 'selected' : ''}>07 - Julho</option>
              <option value="8" ${currentMonth === 8 ? 'selected' : ''}>08 - Agosto</option>
              <option value="9" ${currentMonth === 9 ? 'selected' : ''}>09 - Setembro</option>
              <option value="10" ${currentMonth === 10 ? 'selected' : ''}>10 - Outubro</option>
              <option value="11" ${currentMonth === 11 ? 'selected' : ''}>11 - Novembro</option>
              <option value="12" ${currentMonth === 12 ? 'selected' : ''}>12 - Dezembro</option>
            </select>
          </div>
        </div>
      </div>
    `;

    openModal({
      title: 'Gerar Mensalidades em Lote',
      bodyHtml,
      modalClass: 'modal-sm',
      confirmText: 'Gerar Faturas Agora',
      cancelText: 'Cancelar',
      onConfirm: () => {
        const ano = parseInt((document.getElementById('lote-ano') as HTMLInputElement).value, 10);
        const mes = parseInt((document.getElementById('lote-mes') as HTMLSelectElement).value, 10);

        if (!ano || !mes) {
          showToast('Selecione ano e mês válidos.', 'error');
          return false;
        }

        const result = storageService.gerarMensalidadesMes(ano, mes, user?.nome || 'Administrador');
        if (result.criadas === 0 && result.puladas > 0) {
          showToast(`Todas as ${result.puladas} mensalidades deste mês já estavam criadas!`, 'info');
        } else {
          showToast(`Sucesso: ${result.criadas} mensalidade(s) gerada(s)! (${result.puladas} já existentes puladas)`, 'success');
        }

        render();
        return true;
      }
    });
  }

  // Modal para Criar ou Editar Lançamento Individual
  function openPaymentFormModal(existingPayment?: Payment): void {
    const isEditing = !!existingPayment;
    const students = storageService.getStudents();
    const todayStr = storageService.getTodayDateString();

    const studentOptions = students
      .map(
        s => `<option value="${s.id}" ${existingPayment?.alunoId === s.id ? 'selected' : ''}>${s.nome} (${s.instrumentoPrincipal || 'Geral'})</option>`
      )
      .join('');

    const bodyHtml = `
      <form id="payment-form" style="display: flex; flex-direction: column; gap: 12px;">
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-aluno">Aluno Correspondente</label>
          <select id="pay-aluno" class="form-select" required ${isEditing ? 'disabled' : ''}>
            <option value="">Selecione um aluno...</option>
            ${studentOptions}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-desc">Descrição</label>
            <input type="text" id="pay-desc" class="form-input" placeholder="Ex: Mensalidade Outubro/2026" value="${existingPayment?.descricao || ''}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-mes">Mês Ref. (YYYY-MM)</label>
            <input type="text" id="pay-mes" class="form-input" placeholder="2026-10" value="${existingPayment?.mesReferencia || ''}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-valor">Valor (R$)</label>
            <input type="number" id="pay-valor" class="form-input" min="0" step="5" placeholder="280.00" value="${existingPayment?.valor ?? 280}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-vencimento">Data de Vencimento</label>
            <input type="date" id="pay-vencimento" class="form-input" value="${existingPayment?.dataVencimento || todayStr}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-status">Status do Pagamento</label>
            <select id="pay-status" class="form-select" required>
              <option value="pendente" ${existingPayment?.status === 'pendente' ? 'selected' : ''}>Pendente (A Vencer)</option>
              <option value="pago" ${existingPayment?.status === 'pago' ? 'selected' : ''}>Pago (Quitado)</option>
              <option value="atrasado" ${existingPayment?.status === 'atrasado' ? 'selected' : ''}>Atrasado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="pay-forma">Forma de Pagamento</label>
            <select id="pay-forma" class="form-select">
              <option value="">Não informada</option>
              <option value="pix" ${existingPayment?.formaPagamento === 'pix' ? 'selected' : ''}>PIX</option>
              <option value="dinheiro" ${existingPayment?.formaPagamento === 'dinheiro' ? 'selected' : ''}>Dinheiro</option>
              <option value="cartao_credito" ${existingPayment?.formaPagamento === 'cartao_credito' ? 'selected' : ''}>Cartão de Crédito</option>
              <option value="cartao_debito" ${existingPayment?.formaPagamento === 'cartao_debito' ? 'selected' : ''}>Cartão de Débito</option>
              <option value="boleto" ${existingPayment?.formaPagamento === 'boleto' ? 'selected' : ''}>Boleto</option>
              <option value="transferencia" ${existingPayment?.formaPagamento === 'transferencia' ? 'selected' : ''}>Transferência</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="pay-obs">Observações Adicionais</label>
          <input type="text" id="pay-obs" class="form-input" placeholder="Detalhes opcionais sobre o lançamento..." value="${existingPayment?.observacoes || ''}" />
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? `Editar Lançamento: ${existingPayment.descricao}` : 'Novo Lançamento Financeiro',
      bodyHtml,
      modalClass: 'modal-md',
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Lançamento',
      cancelText: 'Cancelar',
      onConfirm: () => {
        const alunoId = isEditing && existingPayment ? existingPayment.alunoId : (document.getElementById('pay-aluno') as HTMLSelectElement).value;
        const descricao = (document.getElementById('pay-desc') as HTMLInputElement).value.trim();
        const mesReferencia = (document.getElementById('pay-mes') as HTMLInputElement).value.trim() || undefined;
        const valorInput = (document.getElementById('pay-valor') as HTMLInputElement).value;
        const valor = parseFloat(valorInput) || 0;
        const dataVencimento = (document.getElementById('pay-vencimento') as HTMLInputElement).value;
        const status = (document.getElementById('pay-status') as HTMLSelectElement).value as PaymentStatus;
        const formaPagamento = ((document.getElementById('pay-forma') as HTMLSelectElement).value as PaymentMethod) || undefined;
        const observacoes = (document.getElementById('pay-obs') as HTMLInputElement).value.trim() || undefined;

        if (!alunoId) {
          showToast('Selecione um aluno.', 'error');
          return false;
        }
        if (!descricao) {
          showToast('Informe a descrição do lançamento.', 'error');
          return false;
        }
        if (valor <= 0) {
          showToast('Informe um valor válido maior que zero.', 'error');
          return false;
        }
        if (!dataVencimento) {
          showToast('Informe a data de vencimento.', 'error');
          return false;
        }

        const currentUserName = user?.nome || 'Administrador';

        if (isEditing && existingPayment) {
          storageService.updatePayment(
            existingPayment.id,
            {
              descricao,
              mesReferencia,
              valor,
              dataVencimento,
              status,
              formaPagamento,
              dataPagamento: status === 'pago' ? (existingPayment.dataPagamento || todayStr) : undefined,
              observacoes
            },
            currentUserName
          );
          showToast('Lançamento atualizado com sucesso!', 'success');
        } else {
          storageService.addPayment(
            {
              alunoId,
              descricao,
              mesReferencia,
              valor,
              dataVencimento,
              status,
              formaPagamento,
              dataPagamento: status === 'pago' ? todayStr : undefined,
              observacoes
            },
            currentUserName
          );
          showToast('Novo lançamento cadastrado com sucesso!', 'success');
        }

        render();
        return true;
      }
    });

    // Se aluno for selecionado no cadastro de novo pagamento, preenche valor padrão
    if (!isEditing) {
      setTimeout(() => {
        const selAluno = document.getElementById('pay-aluno') as HTMLSelectElement;
        selAluno?.addEventListener('change', () => {
          const st = students.find(s => s.id === selAluno.value);
          if (st) {
            const inpValor = document.getElementById('pay-valor') as HTMLInputElement;
            if (inpValor && typeof st.valorMensalidade === 'number') {
              inpValor.value = st.valorMensalidade.toString();
            }
          }
        });
      }, 50);
    }
  }

  render();
  return container;
}
