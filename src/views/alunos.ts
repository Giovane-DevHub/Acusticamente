import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Student, MusicalLevel, Payment, PaymentMethod } from '../types';
import { ICONS, openModal, closeModal, showToast, confirmAction, maskCPF, maskPhone, isValidEmail, applyInputMask, maskMoney, parseMoney, maskDayOfMonth } from '../utils/ui';

const INSTRUMENTOS_COMUNS = [
  'Violão',
  'Piano & Teclado',
  'Guitarra',
  'Bateria & Percussão',
  'Técnica Vocal / Canto',
  'Baixo',
  'Violino',
  'Flauta',
  'Saxofone',
  'Musicalização Infantil',
  'Outro'
];

function getInstrumentIcon(instrumento?: string): string {
  const lower = (instrumento || '').toLowerCase();
  if (lower.includes('bateria') || lower.includes('percuss')) return '🥁';
  if (lower.includes('piano') || lower.includes('teclado')) return '🎹';
  if (lower.includes('guitarra')) return '🎸';
  if (lower.includes('violão') || lower.includes('violao')) return '🪕';
  if (lower.includes('canto') || lower.includes('vocal')) return '🎤';
  if (lower.includes('baixo')) return '🎸';
  if (lower.includes('violino')) return '🎻';
  if (lower.includes('flauta') || lower.includes('sax')) return '🎷';
  return '🎵';
}

function getNivelBadge(nivel?: string): string {
  switch (nivel) {
    case 'iniciante':
      return '<span class="badge" style="background: rgba(147, 51, 234, 0.15); color: #c084fc; border: 1px solid rgba(147, 51, 234, 0.3); font-size: 0.7rem;">Iniciante</span>';
    case 'basico':
      return '<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 0.7rem;">Básico</span>';
    case 'intermediario':
      return '<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fcd34d; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.7rem;">Intermediário</span>';
    case 'avancado':
      return '<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.7rem;">Avançado</span>';
    default:
      return '<span class="badge badge-secondary" style="font-size: 0.7rem;">Geral</span>';
  }
}

function calculateAge(birthdate?: string): string {
  if (!birthdate) return '';
  const birth = new Date(birthdate + 'T00:00:00');
  if (isNaN(birth.getTime())) return '';
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return `${age} anos`;
}

function getNumericAge(birthdate?: string): number | null {
  if (!birthdate) return null;
  const birth = new Date(birthdate + 'T00:00:00');
  if (isNaN(birth.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function getWhatsAppLink(phone: string, studentName: string): string {
  const digits = phone.replace(/\D/g, '');
  if (!digits) return '';
  const num = digits.length <= 11 ? `55${digits}` : digits;
  const text = encodeURIComponent(`Olá, ${studentName}! Aqui é da escola de música Acusticamente.`);
  return `https://wa.me/${num}?text=${text}`;
}

export function openReceiptModal(payment: Payment, student: Student): void {
  const methodLabels: Record<string, string> = {
    pix: 'PIX Instantâneo',
    dinheiro: 'Dinheiro em Espécie',
    cartao_credito: 'Cartão de Crédito',
    cartao_debito: 'Cartão de Débito',
    boleto: 'Boleto Bancário',
    transferencia: 'Transferência Bancária'
  };

  const bodyHtml = `
    <div id="receipt-print-area" style="background: #ffffff; color: #111827; padding: 24px; border-radius: 8px; font-family: 'Segoe UI', system-ui, sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #e5e7eb; padding-bottom: 14px; margin-bottom: 16px;">
        <div>
          <h2 style="margin: 0; font-size: 1.25rem; color: #111827; font-weight: 800; letter-spacing: -0.5px;">ACUSTICAMENTE</h2>
          <p style="margin: 2px 0 0; font-size: 0.78rem; color: #4b5563;">Escola de Música &amp; Centro Pedagógico</p>
          <p style="margin: 2px 0 0; font-size: 0.72rem; color: #9ca3af;">Telefone: (11) 98765-4321 &bull; São Paulo - SP</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.72rem; font-weight: 700; color: #4b5563; text-transform: uppercase;">Comprovante de Pagamento</div>
          <div style="font-size: 1.15rem; font-weight: 800; color: #059669; margin-top: 2px;">QUITADO ✓</div>
          <div style="font-size: 0.7rem; color: #6b7280;">Lançamento Nº: ${payment.id.toUpperCase()}</div>
        </div>
      </div>

      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; margin-bottom: 16px; font-size: 0.84rem; line-height: 1.5;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div><span style="color: #6b7280;">Aluno(a):</span> <strong>${student.nome}</strong></div>
          <div><span style="color: #6b7280;">Instrumento:</span> <strong>${student.instrumentoPrincipal || 'Música Geral'}</strong></div>
          <div><span style="color: #6b7280;">Responsável:</span> <strong>${student.responsavelNome || 'O Próprio Aluno'}</strong></div>
          <div><span style="color: #6b7280;">Contato:</span> <strong>${student.telefone || '-'}</strong></div>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 0.84rem;">
        <thead>
          <tr style="background: #f3f4f6; text-align: left;">
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb;">Descrição</th>
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb;">Vencimento</th>
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb;">Data do Pagamento</th>
            <th style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">Valor Recebido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <strong>${payment.descricao}</strong>
              ${payment.observacoes ? `<br><small style="color: #6b7280;">${payment.observacoes}</small>` : ''}
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${payment.dataVencimento.split('-').reverse().join('/')}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${payment.dataPagamento ? payment.dataPagamento.split('-').reverse().join('/') : '-'}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 700; color: #111827;">
              R$ ${payment.valor.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 0.85rem;">
        <div>
          <span style="color: #6b7280;">Forma de Liquidação:</span> 
          <strong>${payment.formaPagamento ? methodLabels[payment.formaPagamento] || payment.formaPagamento.toUpperCase() : 'Não informada'}</strong>
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #111827;">
          Total: R$ ${payment.valor.toFixed(2)}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 1px dashed #d1d5db; padding-top: 10px; font-size: 0.72rem; color: #9ca3af;">
        Documento emitido para controle interno pedagógico &bull; Acusticamente Escola de Música
      </div>
    </div>
  `;

  openModal({
    title: `Recibo de Pagamento: ${payment.descricao}`,
    bodyHtml,
    modalClass: 'modal-md',
    confirmText: '🖨️ Imprimir Recibo',
    cancelText: 'Fechar',
    onConfirm: () => {
      window.print();
      return false;
    }
  });
}

export function renderAlunos(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  let searchTerm = '';

  function renderList(): void {
    const allStudents = storageService.getStudents();
    const plans = storageService.getPlans();

    const canCreate = hasActionPermission(user, 'alunos', 'cadastrar');
    const canEdit = hasActionPermission(user, 'alunos', 'alterar');
    const canDelete = hasActionPermission(user, 'alunos', 'excluir');

    const filteredStudents = allStudents.filter(s =>
      s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.telefone.includes(searchTerm) ||
      (s.instrumentoPrincipal && s.instrumentoPrincipal.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (s.responsavelNome && s.responsavelNome.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    container.innerHTML = `
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Gestão Pedagógica de Alunos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Acompanhe matrículas, instrumentos, responsáveis, histórico pedagógico e reposições de aula.
          </p>
        </div>

        ${
          canCreate
            ? `
              <button class="btn btn-primary" id="btn-new-student">
                ${ICONS.plus} Cadastrar Novo Aluno
              </button>
            `
            : ''
        }
      </div>

      <!-- Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 440px;">
          <input 
            type="text" 
            id="student-search-input" 
            class="form-input" 
            placeholder="Buscar por nome, instrumento, responsável ou contato..." 
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

      <!-- Painel e Tabela de Alunos -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Alunos Matriculados (${filteredStudents.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="min-width: 160px;">Aluno</th>
                <th class="col-hide-md" style="width: 180px;">Instrumento</th>
                <th class="col-hide-sm" style="width: 160px;">Contato</th>
                <th class="col-hide-sm" style="width: 180px;">Plano de Ensino</th>
                <th class="col-hide-xs" style="width: 120px;">Status</th>
                <th style="width: 120px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${
                filteredStudents.length === 0
                  ? `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>`
                  : filteredStudents
                      .map(student => {
                        const plan = plans.find(p => p.id === student.planoId);
                        const isAtivo = student.status === 'ativo';

                        return `
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width: 28px; height: 28px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.8rem;">
                                  ${student.nome[0] || 'A'}
                                </div>
                                <span style="font-weight: 600; color: var(--text-white); font-size: 0.88rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${student.nome}
                                </span>
                              </div>
                            </td>

                            <td class="col-hide-md">
                              <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
                                <span style="font-size: 0.95rem;">${getInstrumentIcon(student.instrumentoPrincipal)}</span>
                                <span style="font-size: 0.82rem; color: var(--text-white);">${student.instrumentoPrincipal || 'Geral'}</span>
                              </div>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); white-space: nowrap;">
                                ${student.telefone || '-'}
                              </span>
                            </td>

                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-white); white-space: nowrap; display: block;">
                                ${plan?.nome || '<span style="color: var(--text-muted); font-style: italic;">Nenhum</span>'}
                              </span>
                              ${
                                (student.saldoReposicoes || 0) > 0
                                  ? `<span class="badge" style="background: rgba(234, 67, 53, 0.12); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.3); font-size: 0.64rem; padding: 1px 5px; margin-top: 2px; display: inline-block;">
                                      ⚡ ${student.saldoReposicoes} ${student.saldoReposicoes === 1 ? 'crédito' : 'créditos'} de remarcação
                                     </span>`
                                  : ''
                              }
                            </td>

                            <td class="col-hide-xs">
                              <span class="badge ${isAtivo ? 'badge-success' : 'badge-warning'}" style="font-size: 0.72rem; padding: 3px 8px;">
                                ${isAtivo ? 'Ativo' : 'Inativo'}
                              </span>
                            </td>

                            <td style="text-align: right;">
                              <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
                                <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${student.id}" title="Ficha 360° do Aluno" style="width: 28px; height: 28px; padding: 0; color: #60a5fa;">
                                  ${ICONS.profile}
                                </button>
                                ${
                                  canEdit
                                    ? `
                                      <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${student.id}" title="Editar Dados do Aluno" style="width: 28px; height: 28px; padding: 0;">
                                        ${ICONS.edit}
                                      </button>
                                    `
                                    : ''
                                }
                                ${
                                  canDelete
                                    ? `
                                      <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${student.id}" title="Excluir Aluno" style="width: 28px; height: 28px; padding: 0;">
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

    // Evento de busca rápida
    const searchInput = container.querySelector('#student-search-input') as HTMLInputElement;
    searchInput?.addEventListener('input', (e) => {
      searchTerm = (e.target as HTMLInputElement).value;
      renderList();
      const newSearchInput = container.querySelector('#student-search-input') as HTMLInputElement;
      if (newSearchInput) {
        newSearchInput.focus();
        newSearchInput.selectionStart = newSearchInput.selectionEnd = newSearchInput.value.length;
      }
    });

    container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
      searchTerm = '';
      renderList();
    });

    container.querySelector('#btn-new-student')?.addEventListener('click', () => {
      openStudentModal();
    });

    // Abrir Ficha 360° do Aluno
    container.querySelectorAll('.btn-view-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const student = storageService.getStudents().find(s => s.id === id);
        if (student) openStudentDetailsModal(student);
      });
    });

    // Editar Aluno
    container.querySelectorAll('.btn-edit-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const student = storageService.getStudents().find(s => s.id === id);
        if (student) openStudentModal(student);
      });
    });

    // Excluir Aluno
    container.querySelectorAll('.btn-delete-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const student = storageService.getStudents().find(s => s.id === id);
        if (student) {
          confirmAction({
            title: 'Excluir Aluno',
            message: `Tem certeza que deseja excluir o cadastro do aluno "<strong>${student.nome}</strong>"? Esta ação removerá também seus registros e agendamentos associados.`,
            onConfirm: () => {
              storageService.deleteStudent(student.id, user?.nome || 'Administrador');
              showToast(`Aluno "${student.nome}" excluído.`, 'info');
              renderList();
            }
          });
        }
      });
    });
  }

  // ==========================================
  // MODAL 360°: FICHA DO ALUNO COM ABAS
  // ==========================================
  function openStudentDetailsModal(student: Student): void {
    const plans = storageService.getPlans();
    const paymentPlans = storageService.getPaymentPlans();
    const plan = plans.find(p => p.id === student.planoId);
    const paymentPlan = paymentPlans.find(pp => pp.id === student.planoPagamentoId);
    const history = storageService.getStudentAppointments(student.id);
    const payments = storageService.getStudentPayments(student.id);

    const ageStr = calculateAge(student.dataNascimento);
    const waLink = getWhatsAppLink(student.telefone, student.nome);
    const saldo = student.saldoReposicoes || 0;
    const isOverdue = storageService.isStudentOverdue(student.id);
    const isAtivo = student.status === 'ativo';

    const canEditFinancial = hasActionPermission(user, 'financeiro', 'alterar');

    // Métricas Pedagógicas
    const totalAulas = history.length;
    const concluidas = history.filter(a => a.status === 'concluido').length;
    const faltasJust = history.filter(a => a.status === 'falta_justificada').length;
    const faltasInjust = history.filter(a => a.status === 'falta_injustificada').length;

    // Métricas Financeiras
    const totalPago = payments.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0);
    const totalPendente = payments.filter(p => p.status !== 'pago').reduce((acc, p) => acc + p.valor, 0);

    const bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Cartão Superior do Aluno (Visual Clean & Organizado) -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(234, 67, 53, 0.15); border: 1px solid rgba(234, 67, 53, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 700; color: var(--color-coral);">
              ${student.nome[0] || 'A'}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.02rem; font-weight: 700; color: var(--text-white);">${student.nome}</span>
                <span class="badge ${isAtivo ? 'badge-success' : 'badge-secondary'}" style="font-size: 0.65rem; padding: 2px 7px;">
                  ${isAtivo ? '● Ativo' : '○ Inativo'}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px; flex-wrap: wrap; font-size: 0.78rem; color: var(--text-secondary);">
                <span>${getInstrumentIcon(student.instrumentoPrincipal)} ${student.instrumentoPrincipal || 'Instrumento Geral'}</span>
                &bull;
                <span>${student.nivelMusical ? student.nivelMusical.toUpperCase() : 'INICIANTE'}</span>
                ${ageStr ? `&bull; <span style="color: var(--text-muted);">${ageStr}</span>` : ''}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${
              waLink
                ? `
                  <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.74rem; padding: 5px 10px;">
                    ${ICONS.whatsapp} WhatsApp
                  </a>
                `
                : ''
            }
          </div>
        </div>

        <!-- Seletor de Abas Padronizado em Pílula -->
        <div class="app-tabs-wrapper" style="margin-bottom: 4px;">
          <div class="app-tabs-row cols-2">
            <button type="button" class="app-tab-pill active" id="btn-tab-pedagogico">
              <span class="app-tab-pill-dot"></span>
              <span>Pedagógico &amp; Aulas</span>
            </button>
            <button type="button" class="app-tab-pill" id="btn-tab-financeiro">
              <span class="app-tab-pill-dot"></span>
              <span>Histórico Financeiro</span>
              ${
                isOverdue
                  ? `<span class="badge badge-coral" style="font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">Pendente</span>`
                  : `<span class="badge" style="background: rgba(255, 255, 255, 0.08); font-size: 0.62rem; padding: 1px 6px; margin-left: 4px;">${payments.length}</span>`
              }
            </button>
          </div>
        </div>

        <!-- CONTEÚDO DA ABA 1: PEDAGÓGICO -->
        <div id="panel-tab-pedagogico" style="display: flex; flex-direction: column; gap: 12px;">
          
          <!-- Contatos & Responsável em Grid Limpo -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px;">
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 2px;">
                Contato Pessoal
              </span>
              <div style="font-size: 0.8rem; color: var(--text-white);">${student.telefone || 'Sem telefone'}</div>
              <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 1px;">${student.email || 'Sem e-mail'}</div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px;">
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 2px;">
                Responsável Legal
              </span>
              ${
                student.responsavelNome
                  ? `
                    <div style="font-size: 0.8rem; color: var(--text-white);">
                      ${student.responsavelNome} ${student.responsavelParentesco ? `<span style="color: var(--text-muted); font-size: 0.72rem;">(${student.responsavelParentesco})</span>` : ''}
                    </div>
                    <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 1px;">
                      ${student.responsavelTelefone || 'Sem telefone'}
                    </div>
                  `
                  : `<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 2px;">Aluno independente</div>`
              }
            </div>
          </div>

          <!-- Métricas Pedagógicas em Barra Sóbria -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${totalAulas}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Agendadas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80;">${concluidas}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Presenças</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-secondary);">${faltasJust + faltasInjust}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Faltas</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-coral);">${saldo}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 1px;">Remarcações</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Aulas Recentes (${history.length})
              </span>
              ${
                saldo > 0
                  ? `
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.7rem; padding: 2px 8px;">
                      Agendar Reposição (${saldo})
                    </button>
                  `
                  : ''
              }
            </div>

            <div style="max-height: 190px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${
                history.length === 0
                  ? `<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhuma aula registrada.</div>`
                  : `
                    <table class="data-table" style="margin: 0; font-size: 0.78rem;">
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Aula</th>
                          <th class="col-hide-sm">Tipo</th>
                          <th>Status</th>
                          <th class="col-hide-sm">Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${history
                          .map(app => {
                            const isConcluido = app.status === 'concluido';
                            const isFalta = app.status.startsWith('falta');
                            const isAgendado = app.status === 'agendado';
                            const statusBadge = isConcluido
                              ? '<span class="badge badge-success" style="font-size: 0.65rem; padding: 1px 5px;">Presente</span>'
                              : isFalta
                              ? `<span class="badge ${app.status === 'falta_justificada' ? 'badge-coral' : 'badge-danger'}" style="font-size: 0.65rem; padding: 1px 5px;">${app.status === 'falta_justificada' ? 'Falta Justificada' : 'Falta Injustificada'}</span>`
                              : isAgendado
                              ? '<span class="badge badge-warning" style="font-size: 0.65rem; padding: 1px 5px;">Agendado</span>'
                              : '<span class="badge badge-secondary" style="font-size: 0.65rem; padding: 1px 5px;">Cancelado</span>';

                            const tipoBadge = app.tipoAula === 'reposicao'
                              ? '<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem; padding: 1px 5px;">🔄 Reposição</span>'
                              : '<span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); font-size: 0.65rem; padding: 1px 5px;">Regular</span>';

                            return `
                              <tr>
                                <td style="white-space: nowrap; font-weight: 500;">
                                  ${app.data.split('-').reverse().join('/')} <span style="color: var(--text-muted); font-size: 0.7rem;">${app.horaInicio}</span>
                                </td>
                                <td>${app.titulo}</td>
                                <td class="col-hide-sm">${tipoBadge}</td>
                                <td>${statusBadge}</td>
                                <td class="col-hide-sm" style="color: var(--text-muted); font-size: 0.72rem;">
                                  ${app.justificativaFalta ? `<em>Motivo: ${app.justificativaFalta}</em>` : app.observacoes || '-'}
                                </td>
                              </tr>
                            `;
                          })
                          .join('')}
                      </tbody>
                    </table>
                  `
              }
            </div>
          </div>

          ${
            student.observacoes
              ? `
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.75rem; color: var(--text-secondary);">
                  <strong style="color: var(--text-white);">Obs:</strong> ${student.observacoes}
                </div>
              `
              : ''
          }
        </div>

        <!-- CONTEÚDO DA ABA 2: FINANCEIRO -->
        <div id="panel-tab-financeiro" style="display: none; flex-direction: column; gap: 12px;">
          <!-- Card do Plano de Pagamento e Desconto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <span style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">
                Plano de Pagamento Vinculado
              </span>
              <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-white); margin-top: 2px;">
                ${paymentPlan ? `${paymentPlan.nome} (${paymentPlan.modalidade === 'individual' ? '👤 Individual' : '👥 Turma'} &bull; ${paymentPlan.periodicidade.toUpperCase()})` : 'Plano Padrão'}
              </div>
            </div>
            ${
              student.isSegundaMatricula
                ? `<span class="badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 0.72rem; padding: 3px 8px;">
                    🏷️ 2ª Matrícula (20% OFF)
                   </span>`
                : ''
            }
          </div>

          <!-- Status Sucinto -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.8rem; color: var(--text-white);">
              ${
                isOverdue
                  ? `<span style="color: #f87171; font-weight: 600;">⚠️ Mensalidade em atraso</span>`
                  : `<span style="color: #4ade80; font-weight: 600;">✓ Mensalidades em dia</span>`
              }
            </div>
            <span style="font-size: 0.72rem; color: var(--text-muted);">
              Vencimento todo dia ${student.diaVencimento ?? 10}
            </span>
          </div>

          <!-- Resumo Financeiro Sucinto -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-white); margin-top: 1px;">
                R$ ${(student.valorMensalidade ?? 280).toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Total Pago</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: #4ade80; margin-top: 1px;">
                R$ ${totalPago.toFixed(2)}
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Em Aberto</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: ${totalPendente > 0 ? '#f87171' : 'var(--text-white)'}; margin-top: 1px;">
                R$ ${totalPendente.toFixed(2)}
              </div>
            </div>
          </div>

          <!-- Tabela de Mensalidades -->
          <div>
            <div style="margin-bottom: 6px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white);">
                Histórico de Mensalidades (${payments.length})
              </span>
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${
                payments.length === 0
                  ? `<div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado.</div>`
                  : `
                    <table class="data-table" style="margin: 0; font-size: 0.78rem;">
                      <thead>
                        <tr>
                          <th>Descrição</th>
                          <th class="col-hide-sm">Vencimento</th>
                          <th>Valor</th>
                          <th>Status</th>
                          <th class="col-hide-sm">Pagamento</th>
                          <th style="text-align: right;">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${payments.map(p => {
                          const isPago = p.status === 'pago';
                          const isAtrasado = p.status === 'atrasado';

                          let badgeHtml = '';
                          if (isPago) {
                            badgeHtml = `<span class="badge badge-success" style="font-size: 0.62rem;">Pago</span>`;
                          } else if (isAtrasado) {
                            badgeHtml = `<span class="badge badge-danger" style="font-size: 0.62rem;">Atrasado</span>`;
                          } else {
                            badgeHtml = `<span class="badge badge-warning" style="font-size: 0.62rem;">Pendente</span>`;
                          }

                          return `
                            <tr>
                              <td style="white-space: nowrap;">
                                <strong style="color: var(--text-white);">${p.descricao}</strong>
                              </td>
                              <td class="col-hide-sm">${p.dataVencimento.split('-').reverse().join('/')}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${p.valor.toFixed(2)}</td>
                              <td>${badgeHtml}</td>
                              <td class="col-hide-sm">${p.dataPagamento ? p.dataPagamento.split('-').reverse().join('/') : '-'}</td>
                              <td style="text-align: right;">
                                ${
                                  isPago
                                    ? `
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${p.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                        Recibo
                                      </button>
                                    `
                                    : canEditFinancial
                                      ? `
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${p.id}" style="font-size: 0.7rem; padding: 2px 7px;">
                                          Baixar
                                        </button>
                                      `
                                      : ''
                                }
                              </td>
                            </tr>
                          `;
                        }).join('')}
                      </tbody>
                    </table>
                  `
              }
            </div>
          </div>
        </div>

      </div>
    `;

    openModal({
      title: `Ficha do Aluno: ${student.nome}`,
      bodyHtml,
      modalClass: 'modal-lg',
      cancelText: 'Fechar',
      confirmText: ''
    });

    // Conectar eventos dinâmicos dentro do modal aberto
    setTimeout(() => {
      // Alternar abas Pedagógico / Financeiro
      const tabPedBtn = document.getElementById('btn-tab-pedagogico');
      const tabFinBtn = document.getElementById('btn-tab-financeiro');
      const panelPed = document.getElementById('panel-tab-pedagogico');
      const panelFin = document.getElementById('panel-tab-financeiro');

      tabPedBtn?.addEventListener('click', () => {
        tabPedBtn.classList.add('active');
        tabFinBtn?.classList.remove('active');
        if (panelPed) panelPed.style.display = 'flex';
        if (panelFin) panelFin.style.display = 'none';
      });

      tabFinBtn?.addEventListener('click', () => {
        tabFinBtn.classList.add('active');
        tabPedBtn?.classList.remove('active');
        if (panelFin) panelFin.style.display = 'flex';
        if (panelPed) panelPed.style.display = 'none';
      });

      // Ação de Agendar Reposição
      document.getElementById('btn-quick-schedule-reposicao')?.addEventListener('click', () => {
        closeModal();
        onNavigate('agenda');
      });

      // Ação de Ver Recibo
      document.querySelectorAll('.btn-print-receipt').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const payId = (e.currentTarget as HTMLElement).dataset.id;
          const p = payments.find(item => item.id === payId);
          if (p) openReceiptModal(p, student);
        });
      });

      // Ação de Dar Baixa em Pagamento
      document.querySelectorAll('.btn-pay-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const payId = (e.currentTarget as HTMLElement).dataset.id;
          const payment = payments.find(item => item.id === payId);
          if (!payment) return;

          const todayStr = storageService.getTodayDateString();

          const baixaHtml = `
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
                <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">${payment.descricao}</div>
                <div style="color: var(--color-coral); font-size: 1.1rem; font-weight: 700; margin-top: 2px;">
                  R$ ${payment.valor.toFixed(2)}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                  Vencimento original: ${payment.dataVencimento.split('-').reverse().join('/')} &bull; Aluno: ${student.nome}
                </div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-data">Data do Recebimento</label>
                <input type="date" id="baixa-data" class="form-input" value="${todayStr}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-forma">Forma de Pagamento</label>
                <select id="baixa-forma" class="form-select" required>
                  <option value="pix">PIX Instantâneo</option>
                  <option value="dinheiro">Dinheiro em Espécie</option>
                  <option value="cartao_credito">Cartão de Crédito</option>
                  <option value="cartao_debito">Cartão de Débito</option>
                  <option value="boleto">Boleto Bancário</option>
                  <option value="transferencia">Transferência Bancária</option>
                </select>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="baixa-obs">Observações do Recebimento (Opcional)</label>
                <input type="text" id="baixa-obs" class="form-input" placeholder="Ex: Pago com comprovante via WhatsApp" />
              </div>
            </div>
          `;

          openModal({
            title: `Dar Baixa: ${payment.descricao}`,
            bodyHtml: baixaHtml,
            modalClass: 'modal-sm',
            confirmText: 'Confirmar Recebimento',
            cancelText: 'Cancelar',
            onConfirm: () => {
              const dataPagto = (document.getElementById('baixa-data') as HTMLInputElement).value;
              const forma = (document.getElementById('baixa-forma') as HTMLSelectElement).value as PaymentMethod;
              const obs = (document.getElementById('baixa-obs') as HTMLInputElement).value;

              if (!dataPagto) {
                showToast('Informe a data de recebimento.', 'error');
                return false;
              }

              const currentUserName = user?.nome || 'Administrador';
              storageService.darBaixaPayment(payment.id, dataPagto, forma, currentUserName, obs);
              showToast(`Baixa de R$ ${payment.valor.toFixed(2)} efetuada com sucesso!`, 'success');

              renderList();
              // Reabre a ficha atualizada na aba financeira
              const updatedStudent = storageService.getStudents().find(s => s.id === student.id) || student;
              openStudentDetailsModal(updatedStudent);
              setTimeout(() => {
                document.getElementById('btn-tab-financeiro')?.click();
              }, 50);
              return true;
            }
          });
        });
      });
    }, 50);
  }

  // ==========================================
  // MODAL DE CADASTRO / EDIÇÃO DE ALUNO (COM ABAS)
  // ==========================================
  function openStudentModal(existingStudent?: Student): void {
    const plans = storageService.getPlans();
    const paymentPlans = storageService.getPaymentPlans();
    const isEditing = !!existingStudent;
    const studentPayments = existingStudent ? storageService.getStudentPayments(existingStudent.id) : [];

    // Planos de Ensino (100% Pedagógico: Plano > Módulos > Aulas)
    const planOptions = plans
      .map(
        p => `<option value="${p.id}" ${existingStudent?.planoId === p.id ? 'selected' : ''}>${p.nome}${p.instrumento ? ` (${p.instrumento})` : ''}</option>`
      )
      .join('');

    // Planos de Pagamento (Financeiro: Modalidade Individual/Turma, Ciclos e Desconto de 20%)
    const paymentPlanOptions = paymentPlans
      .filter(pp => pp.ativo)
      .map(
        pp => `<option value="${pp.id}" ${existingStudent?.planoPagamentoId === pp.id ? 'selected' : ''} data-valor="${pp.valorMensal}" data-desconto="${pp.descontoSegundaMatricula ?? 20}">${pp.nome} (${pp.modalidade === 'individual' ? '👤 Individual' : '👥 Turma'} - ${pp.periodicidade.toUpperCase()}) - R$ ${pp.valorMensal.toFixed(2)}/mês</option>`
      )
      .join('');

    const instrumentOptions = INSTRUMENTOS_COMUNS
      .map(
        inst => `<option value="${inst}" ${existingStudent?.instrumentoPrincipal === inst ? 'selected' : ''}>${inst}</option>`
      )
      .join('');

    const bodyHtml = `
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Seletor de Abas Enxuto -->
        <div class="student-modal-tabs-wrapper">
          <div class="student-modal-tabs-row row-top">
            <button type="button" class="student-tab-pill btn-form-tab active" data-tab="tab-pessoal">
              <span class="student-tab-pill-dot"></span>
              <span>Aluno</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-resp">
              <span class="student-tab-pill-dot"></span>
              <span>Responsável</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-musica">
              <span class="student-tab-pill-dot"></span>
              <span>Pedagógico</span>
            </button>
          </div>

          <div class="student-modal-tabs-row row-bottom">
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-financeiro">
              <span class="student-tab-pill-dot"></span>
              <span>Financeiro</span>
            </button>
            <button type="button" class="student-tab-pill btn-form-tab" data-tab="tab-obs">
              <span class="student-tab-pill-dot"></span>
              <span>Observações</span>
            </button>
          </div>
        </div>

        <!-- ABA 1: ALUNO -->
        <div id="form-panel-tab-pessoal" class="form-tab-panel" style="display: flex; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-nome">Nome *</label>
            <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${existingStudent?.nome || ''}" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-telefone">Celular *</label>
              <input type="text" id="student-telefone" class="form-input" placeholder="(00) 00000-0000" value="${existingStudent?.telefone || ''}" maxlength="15" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-cpf">CPF</label>
              <input type="text" id="student-cpf" class="form-input" placeholder="000.000.000-00" value="${existingStudent?.cpf || ''}" maxlength="14" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nascimento">Nascimento *</label>
              <input type="date" id="student-nascimento" class="form-input" value="${existingStudent?.dataNascimento || ''}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-email">E-mail</label>
              <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${existingStudent?.email || ''}" />
            </div>
          </div>
        </div>

        <!-- ABA 2: RESPONSÁVEL -->
        <div id="form-panel-tab-resp" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div id="student-resp-alert" style="display: none; background: rgba(234, 67, 53, 0.12); border: 1px solid rgba(234, 67, 53, 0.35); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.76rem; color: #fca5a5; margin-bottom: 2px;">
            ⚠️ <strong>Aluno menor de 18 anos.</strong> Dados do responsável são obrigatórios.
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-nome">
              Nome <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
            </label>
            <input type="text" id="student-resp-nome" class="form-input" placeholder="Nome do responsável" value="${existingStudent?.responsavelNome || ''}" />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-parentesco">
                Parentesco <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
              </label>
              <select id="student-resp-parentesco" class="form-select">
                <option value="">Selecione...</option>
                <option value="Mãe" ${existingStudent?.responsavelParentesco === 'Mãe' ? 'selected' : ''}>Mãe</option>
                <option value="Pai" ${existingStudent?.responsavelParentesco === 'Pai' ? 'selected' : ''}>Pai</option>
                <option value="Avô/Avó" ${existingStudent?.responsavelParentesco === 'Avô/Avó' ? 'selected' : ''}>Avô/Avó</option>
                <option value="Cônjuge" ${existingStudent?.responsavelParentesco === 'Cônjuge' ? 'selected' : ''}>Cônjuge</option>
                <option value="Outro" ${existingStudent?.responsavelParentesco === 'Outro' ? 'selected' : ''}>Outro</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-tel">
                Celular <span class="resp-req-star" style="color: var(--color-coral); font-weight: 700; display: none;">*</span>
              </label>
              <input type="text" id="student-resp-tel" class="form-input" placeholder="(00) 00000-0000" value="${existingStudent?.responsavelTelefone || ''}" maxlength="15" />
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-resp-cpf">CPF</label>
            <input type="text" id="student-resp-cpf" class="form-input" placeholder="000.000.000-00" value="${existingStudent?.responsavelCpf || ''}" maxlength="14" />
          </div>
        </div>

        <!-- ABA 3: PEDAGÓGICO -->
        <div id="form-panel-tab-musica" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione...</option>
                ${instrumentOptions}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nivel">Nível</label>
              <select id="student-nivel" class="form-select">
                <option value="iniciante" ${existingStudent?.nivelMusical === 'iniciante' ? 'selected' : ''}>Iniciante</option>
                <option value="basico" ${existingStudent?.nivelMusical === 'basico' ? 'selected' : ''}>Básico</option>
                <option value="intermediario" ${existingStudent?.nivelMusical === 'intermediario' ? 'selected' : ''}>Intermediário</option>
                <option value="avancado" ${existingStudent?.nivelMusical === 'avancado' ? 'selected' : ''}>Avançado</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin: 0; width: 100%;">
            <label class="form-label" for="student-plano">Plano de Ensino (Pedagógico) *</label>
            <select id="student-plano" class="form-select" required>
              <option value="">Selecione um plano de ensino...</option>
              ${planOptions}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo Atual</label>
              <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Primeiros Acordes" value="${existingStudent?.moduloAtual || ''}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-status">Status *</label>
              <select id="student-status" class="form-select">
                <option value="ativo" ${existingStudent?.status === 'ativo' ? 'selected' : ''}>Ativo</option>
                <option value="inativo" ${existingStudent?.status === 'inativo' ? 'selected' : ''}>Inativo</option>
              </select>
            </div>
          </div>

          <!-- SALDO DE REMARCAÇÃO (100% AUTOMÁTICO - SOMENTE LEITURA) -->
          <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-sm); padding: 12px; display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-white);">Créditos de Remarcação Disponíveis:</span>
              <span class="badge" style="background: rgba(234, 67, 53, 0.2); color: var(--color-coral); border: 1px solid rgba(234, 67, 53, 0.4); font-size: 0.95rem; font-weight: 700; padding: 4px 10px;">
                ${existingStudent?.saldoReposicoes || 0} ${ (existingStudent?.saldoReposicoes || 0) === 1 ? 'crédito' : 'créditos' }
              </span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); line-height: 1.3; margin-top: 4px;">
              🔒 <strong>Saldo Automático:</strong> Os créditos são gerados automaticamente quando o aluno recebe falta justificada na agenda e consumidos ao agendar aulas de reposição. Não é permitida adição ou remoção manual.
            </div>
          </div>
        </div>

        <!-- ABA 4: FINANCEIRO (PLANOS DE PAGAMENTO E DESCONTO 2ª MATRÍCULA) -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; flex-direction: column; gap: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Plano de Pagamento & Cobrança
            </div>

            <!-- Seleção do Plano de Pagamento -->
            <div class="form-group" style="margin: 0; width: 100%;">
              <label class="form-label" for="student-plano-pagamento">Plano de Pagamento *</label>
              <select id="student-plano-pagamento" class="form-select">
                <option value="">Selecione o plano de pagamento...</option>
                ${paymentPlanOptions}
              </select>
            </div>

            <!-- Regra de Desconto: 2ª Matrícula (20% OFF) -->
            <div style="background: rgba(251, 191, 36, 0.08); border: 1px solid rgba(251, 191, 36, 0.25); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
              <div>
                <div style="font-size: 0.82rem; font-weight: 700; color: #fbbf24;">
                  Segunda Matrícula (Familiar ou Aluno)
                </div>
                <div style="font-size: 0.72rem; color: var(--text-secondary);">
                  Aplica 20% de desconto automático na mensalidade deste plano.
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none;">
                <input type="checkbox" id="student-segunda-matricula" ${existingStudent?.isSegundaMatricula ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #fbbf24;" />
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-white);">20% OFF</span>
              </label>
            </div>

            <!-- Resumo do Cálculo da Mensalidade -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Valor Base</div>
                <div id="summary-plano-base" style="font-size: 0.85rem; font-weight: 600; color: var(--text-white); margin-top: 2px;">R$ 280,00</div>
              </div>
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Desconto</div>
                <div id="summary-plano-desc" style="font-size: 0.85rem; font-weight: 600; color: #fbbf24; margin-top: 2px;">R$ 0,00</div>
              </div>
              <div>
                <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade</div>
                <div id="summary-plano-final" style="font-size: 0.92rem; font-weight: 700; color: #34d399; margin-top: 2px;">R$ 280,00</div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Valor Cobrado (R$) *</label>
                <input type="text" id="student-valor-mensalidade" class="form-input" placeholder="0,00" value="${existingStudent?.valorMensalidade !== undefined ? maskMoney(existingStudent.valorMensalidade) : '280,00'}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia do Vencimento *</label>
                <input type="text" id="student-dia-vencimento" class="form-input" maxlength="2" placeholder="10" value="${existingStudent?.diaVencimento ?? 10}" required />
              </div>
            </div>
          </div>
        </div>

        <!-- ABA 5: OBSERVAÇÕES -->
        <div id="form-panel-tab-obs" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="student-obs">Observações</label>
            <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Anotações gerais, preferências e histórico...">${existingStudent?.observacoes || ''}</textarea>
          </div>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? `Editar: ${existingStudent.nome}` : 'Cadastrar Aluno',
      bodyHtml,
      modalClass: 'modal-lg',
      confirmText: isEditing ? 'Salvar' : 'Cadastrar',
      onConfirm: () => {
        const nome = (document.getElementById('student-nome') as HTMLInputElement).value.trim();
        const dataNascimento = (document.getElementById('student-nascimento') as HTMLInputElement).value;
        const email = (document.getElementById('student-email') as HTMLInputElement).value.trim();
        const telefone = (document.getElementById('student-telefone') as HTMLInputElement).value.trim();
        const cpf = (document.getElementById('student-cpf') as HTMLInputElement)?.value.trim() || undefined;

        const responsavelNome = (document.getElementById('student-resp-nome') as HTMLInputElement).value.trim();
        const responsavelParentesco = (document.getElementById('student-resp-parentesco') as HTMLSelectElement).value;
        const responsavelTelefone = (document.getElementById('student-resp-tel') as HTMLInputElement).value.trim();
        const responsavelCpf = (document.getElementById('student-resp-cpf') as HTMLInputElement)?.value.trim() || undefined;

        const instrumentoPrincipal = (document.getElementById('student-instrumento') as HTMLSelectElement).value;
        const nivelMusical = (document.getElementById('student-nivel') as HTMLSelectElement).value as MusicalLevel;
        const planoId = (document.getElementById('student-plano') as HTMLSelectElement).value;
        const planoPagamentoId = (document.getElementById('student-plano-pagamento') as HTMLSelectElement)?.value || undefined;
        const isSegundaMatricula = (document.getElementById('student-segunda-matricula') as HTMLInputElement)?.checked || false;
        const status = (document.getElementById('student-status') as HTMLSelectElement).value as any;
        const moduloAtual = (document.getElementById('student-modulo') as HTMLInputElement).value.trim();

        const valorMensalidadeInput = (document.getElementById('student-valor-mensalidade') as HTMLInputElement)?.value;
        const valorMensalidade = parseMoney(valorMensalidadeInput);
        const diaVencimentoInput = (document.getElementById('student-dia-vencimento') as HTMLInputElement)?.value;
        const diaVencimento = Math.min(31, Math.max(1, parseInt(diaVencimentoInput, 10) || 10));

        const obs = (document.getElementById('student-obs') as HTMLTextAreaElement).value.trim();

        // ========================================================
        // VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS
        // ========================================================
        interface ValidationItem {
          label: string;
          fieldId: string;
          tabId: string;
        }

        const pendingErrors: ValidationItem[] = [];

        // 1. Nome Completo (obrigatório)
        if (!nome) {
          pendingErrors.push({
            label: 'Nome do Aluno',
            fieldId: 'student-nome',
            tabId: 'tab-pessoal'
          });
        }

        // 2. Data de Nascimento
        if (!dataNascimento) {
          pendingErrors.push({
            label: 'Data de Nascimento',
            fieldId: 'student-nascimento',
            tabId: 'tab-pessoal'
          });
        }

        // 3. Celular
        if (!telefone) {
          pendingErrors.push({
            label: 'Celular do Aluno',
            fieldId: 'student-telefone',
            tabId: 'tab-pessoal'
          });
        } else if (telefone.replace(/\D/g, '').length < 10) {
          pendingErrors.push({
            label: 'Celular do Aluno incompleto',
            fieldId: 'student-telefone',
            tabId: 'tab-pessoal'
          });
        }

        // CPF do Aluno se preenchido
        if (cpf && cpf.replace(/\D/g, '').length !== 11) {
          pendingErrors.push({
            label: 'CPF do Aluno incompleto (11 dígitos)',
            fieldId: 'student-cpf',
            tabId: 'tab-pessoal'
          });
        }

        // 4. Validação de E-mail se preenchido
        if (email && !isValidEmail(email)) {
          pendingErrors.push({
            label: 'E-mail em formato inválido',
            fieldId: 'student-email',
            tabId: 'tab-pessoal'
          });
        }

        // 5. Responsável Obrigatório caso Aluno seja Menor de 18 Anos
        const alunoIdade = getNumericAge(dataNascimento);
        const isMenor = alunoIdade !== null && alunoIdade < 18;

        if (isMenor) {
          if (!responsavelNome) {
            pendingErrors.push({
              label: `Nome do Responsável (Aluno menor de idade: ${alunoIdade} anos)`,
              fieldId: 'student-resp-nome',
              tabId: 'tab-resp'
            });
          }
          if (!responsavelParentesco) {
            pendingErrors.push({
              label: `Parentesco do Responsável (Aluno menor de idade: ${alunoIdade} anos)`,
              fieldId: 'student-resp-parentesco',
              tabId: 'tab-resp'
            });
          }
          if (!responsavelTelefone) {
            pendingErrors.push({
              label: `Celular do Responsável (Aluno menor de idade: ${alunoIdade} anos)`,
              fieldId: 'student-resp-tel',
              tabId: 'tab-resp'
            });
          } else if (responsavelTelefone.replace(/\D/g, '').length < 10) {
            pendingErrors.push({
              label: 'Celular do Responsável incompleto',
              fieldId: 'student-resp-tel',
              tabId: 'tab-resp'
            });
          }
          if (responsavelCpf && responsavelCpf.replace(/\D/g, '').length !== 11) {
            pendingErrors.push({
              label: 'CPF do Responsável incompleto (11 dígitos)',
              fieldId: 'student-resp-cpf',
              tabId: 'tab-resp'
            });
          }
        }

        // 6. Status
        if (!status) {
          pendingErrors.push({
            label: 'Status da Matrícula',
            fieldId: 'student-status',
            tabId: 'tab-musica'
          });
        }

        // 7. Valor da Mensalidade
        if (!valorMensalidadeInput || valorMensalidade <= 0) {
          pendingErrors.push({
            label: 'Valor da Mensalidade (R$)',
            fieldId: 'student-valor-mensalidade',
            tabId: 'tab-financeiro'
          });
        }

        // 8. Dia de Vencimento
        const diaNum = parseInt(diaVencimentoInput, 10);
        if (!diaVencimentoInput || isNaN(diaNum) || diaNum < 1 || diaNum > 31) {
          pendingErrors.push({
            label: 'Dia de Vencimento (deve ser entre 1 e 31)',
            fieldId: 'student-dia-vencimento',
            tabId: 'tab-financeiro'
          });
        }

        // Se houver pendências, exibe a listagem com botão OK e direciona o foco
        if (pendingErrors.length > 0) {
          const switchTab = (targetTab: string) => {
            const tabBtns = document.querySelectorAll('.btn-form-tab');
            const panels = document.querySelectorAll('.form-tab-panel') as NodeListOf<HTMLElement>;

            tabBtns.forEach(b => {
              if ((b as HTMLElement).dataset.tab === targetTab) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });

            panels.forEach(p => {
              p.style.display = p.id === `form-panel-${targetTab}` ? 'flex' : 'none';
            });
          };

          // Cria alerta modal com lista de campos
          const alertOverlay = document.createElement('div');
          alertOverlay.id = 'student-validation-alert';
          alertOverlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          `;

          alertOverlay.innerHTML = `
            <div style="background: #1d202d; border: 1px solid rgba(234, 67, 53, 0.45); border-radius: 12px; max-width: 480px; width: 100%; box-shadow: 0 24px 48px rgba(0,0,0,0.8); overflow: hidden;">
              <div style="padding: 16px 20px; background: rgba(234, 67, 53, 0.1); border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 1.4rem;">⚠️</span>
                <div>
                  <h4 style="margin: 0; font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--text-white);">
                    Campos Obrigatórios Pendentes
                  </h4>
                  <p style="margin: 2px 0 0 0; font-size: 0.76rem; color: var(--text-secondary);">
                    Preencha os itens abaixo para concluir o cadastro:
                  </p>
                </div>
              </div>
              
              <div style="padding: 18px 22px; max-height: 280px; overflow-y: auto;">
                <ul style="margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: #fca5a5;">
                  ${pendingErrors.map(err => `<li style="line-height: 1.4;"><strong style="color: #ffffff;">${err.label}</strong></li>`).join('')}
                </ul>
              </div>

              <div style="padding: 12px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" id="btn-validation-ok" style="padding: 8px 26px; font-weight: 600; font-size: 0.85rem; box-shadow: 0 2px 10px rgba(234, 67, 53, 0.4);">
                  OK, preencher
                </button>
              </div>
            </div>
          `;

          document.body.appendChild(alertOverlay);

          const btnOk = alertOverlay.querySelector('#btn-validation-ok') as HTMLButtonElement;
          btnOk?.focus();
          btnOk?.addEventListener('click', () => {
            alertOverlay.remove();
            const first = pendingErrors[0];
            switchTab(first.tabId);

            setTimeout(() => {
              const el = document.getElementById(first.fieldId) as HTMLElement;
              if (el) {
                el.focus();
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.style.outline = '2px solid var(--color-coral)';
                el.style.borderColor = 'var(--color-coral)';
                setTimeout(() => {
                  el.style.outline = '';
                  el.style.borderColor = '';
                }, 3500);
              }
            }, 100);
          });

          return false;
        }

        const currentUserName = user?.nome || 'Administrador';

        if (isEditing && existingStudent) {
          storageService.updateStudent(
            existingStudent.id,
            {
              nome,
              dataNascimento,
              email,
              telefone,
              cpf,
              responsavelNome,
              responsavelParentesco,
              responsavelTelefone,
              responsavelCpf,
              instrumentoPrincipal,
              nivelMusical,
              planoId,
              planoPagamentoId,
              isSegundaMatricula,
              status,
              moduloAtual,
              valorMensalidade,
              diaVencimento,
              observacoes: obs
            },
            currentUserName
          );
          showToast('Dados do aluno atualizados com sucesso!', 'success');
        } else {
          storageService.addStudent(
            {
              nome,
              dataNascimento,
              email,
              telefone,
              cpf,
              responsavelNome,
              responsavelParentesco,
              responsavelTelefone,
              responsavelCpf,
              instrumentoPrincipal,
              nivelMusical,
              planoId,
              planoPagamentoId,
              isSegundaMatricula,
              status,
              moduloAtual,
              valorMensalidade,
              diaVencimento,
              observacoes: obs
            },
            currentUserName
          );
          showToast('Aluno cadastrado com sucesso!', 'success');
        }

        renderList();
        return true;
      }
    });

    // Conectar alternância de abas, máscaras de input e preenchimento de valor do plano
    setTimeout(() => {
      const tabBtns = document.querySelectorAll('.btn-form-tab');
      const panels = document.querySelectorAll('.form-tab-panel') as NodeListOf<HTMLElement>;

      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = (e.currentTarget as HTMLElement).dataset.tab;
          tabBtns.forEach(b => {
            b.classList.remove('active');
          });
          (e.currentTarget as HTMLElement).classList.add('active');

          panels.forEach(p => {
            p.style.display = p.id === `form-panel-${target}` ? 'flex' : 'none';
          });
        });
      });

      // Máscaras nos campos de CPF e Celular
      const cpfAluno = document.getElementById('student-cpf') as HTMLInputElement;
      if (cpfAluno) applyInputMask(cpfAluno, maskCPF);

      const telAluno = document.getElementById('student-telefone') as HTMLInputElement;
      if (telAluno) applyInputMask(telAluno, maskPhone);

      const cpfResp = document.getElementById('student-resp-cpf') as HTMLInputElement;
      if (cpfResp) applyInputMask(cpfResp, maskCPF);

      const telResp = document.getElementById('student-resp-tel') as HTMLInputElement;
      if (telResp) applyInputMask(telResp, maskPhone);

      const valorMensalidadeEl = document.getElementById('student-valor-mensalidade') as HTMLInputElement;
      if (valorMensalidadeEl) applyInputMask(valorMensalidadeEl, maskMoney);

      const diaVencEl = document.getElementById('student-dia-vencimento') as HTMLInputElement;
      if (diaVencEl) applyInputMask(diaVencEl, maskDayOfMonth);

      // Cálculo dinâmico da mensalidade ao selecionar Plano de Pagamento ou 2ª Matrícula
      const planoPagamentoSelect = document.getElementById('student-plano-pagamento') as HTMLSelectElement;
      const segundaMatriculaCheckbox = document.getElementById('student-segunda-matricula') as HTMLInputElement;
      const baseEl = document.getElementById('summary-plano-base');
      const descEl = document.getElementById('summary-plano-desc');
      const finalEl = document.getElementById('summary-plano-final');

      const atualizarCalculoMensalidade = () => {
        const ppId = planoPagamentoSelect?.value;
        const is2a = segundaMatriculaCheckbox?.checked || false;
        const calc = storageService.calcularMensalidadeAluno(ppId, is2a);

        if (baseEl) baseEl.textContent = `R$ ${calc.valorBase.toFixed(2)}`;
        if (descEl) descEl.textContent = calc.descontoPercentual > 0 ? `-R$ ${calc.valorDesconto.toFixed(2)} (${calc.descontoPercentual}%)` : 'R$ 0,00';
        if (finalEl) finalEl.textContent = `R$ ${calc.valorFinal.toFixed(2)}`;

        if (valorMensalidadeEl) {
          valorMensalidadeEl.value = maskMoney(calc.valorFinal);
        }
      };

      planoPagamentoSelect?.addEventListener('change', atualizarCalculoMensalidade);
      segundaMatriculaCheckbox?.addEventListener('change', atualizarCalculoMensalidade);
      if (existingStudent?.planoPagamentoId) {
        atualizarCalculoMensalidade();
      }

      // Monitora data de nascimento para sinalizar menor de idade em tempo real
      const birthInput = document.getElementById('student-nascimento') as HTMLInputElement;
      const respAlert = document.getElementById('student-resp-alert');
      const respStars = document.querySelectorAll('.resp-req-star');

      const checkMinorStatus = () => {
        const val = birthInput?.value;
        const idade = getNumericAge(val);
        const menor = idade !== null && idade < 18;

        if (respAlert) {
          respAlert.style.display = menor ? 'block' : 'none';
          if (menor) {
            respAlert.innerHTML = `⚠️ <strong>Aluno menor de 18 anos (${idade} anos).</strong> Dados do responsável são obrigatórios.`;
          }
        }

        respStars.forEach(s => {
          (s as HTMLElement).style.display = menor ? 'inline' : 'none';
        });
      };

      birthInput?.addEventListener('input', checkMinorStatus);
      birthInput?.addEventListener('change', checkMinorStatus);
      checkMinorStatus();
    }, 50);
  }

  renderList();
  return container;
}
