import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Student, MusicalLevel, Payment, PaymentMethod } from '../types';
import { ICONS, openModal, closeModal, showToast } from '../utils/ui';

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
      <div style="margin-bottom: 20px; display: flex; gap: 12px;">
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
                <th>Aluno</th>
                <th>Instrumento &amp; Nível</th>
                <th>Contato / WhatsApp</th>
                <th>Plano &amp; Reposições</th>
                <th>Status</th>
                <th style="text-align: right;">Ações</th>
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
                        const isOverdue = storageService.isStudentOverdue(student.id);
                        const ageStr = calculateAge(student.dataNascimento);
                        const waLink = getWhatsAppLink(student.telefone, student.nome);
                        const saldo = student.saldoReposicoes || 0;

                        return `
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral); flex-shrink: 0; font-size: 0.95rem;">
                                  ${student.nome[0] || 'A'}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white); font-size: 0.9rem;">
                                    ${student.nome}
                                    ${ageStr ? `<span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal; margin-left: 4px;">(${ageStr})</span>` : ''}
                                  </div>
                                  ${
                                    student.responsavelNome
                                      ? `<div style="font-size: 0.74rem; color: var(--text-secondary);">
                                           Resp: <strong style="color: #ff9187;">${student.responsavelNome}</strong> ${student.responsavelParentesco ? `(${student.responsavelParentesco})` : ''}
                                         </div>`
                                      : `<div style="font-size: 0.74rem; color: var(--text-muted);">${student.moduloAtual || 'Iniciando'}</div>`
                                  }
                                </div>
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1rem;">${getInstrumentIcon(student.instrumentoPrincipal)}</span>
                                <span style="font-weight: 500; font-size: 0.85rem; color: var(--text-white);">
                                  ${student.instrumentoPrincipal || 'Não definido'}
                                </span>
                              </div>
                              <div style="margin-top: 3px;">
                                ${getNivelBadge(student.nivelMusical)}
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 0.85rem; color: var(--text-white); font-weight: 500;">
                                  ${student.telefone || 'Sem telefone'}
                                </span>
                                ${
                                  waLink
                                    ? `
                                      <a href="${waLink}" target="_blank" rel="noopener noreferrer" 
                                         class="btn btn-secondary btn-icon-only" 
                                         title="Abrir WhatsApp com ${student.nome}" 
                                         style="width: 26px; height: 26px; padding: 0; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                        ${ICONS.whatsapp}
                                      </a>
                                    `
                                    : ''
                                }
                              </div>
                              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                                ${student.email || 'Sem e-mail cadastrado'}
                              </div>
                            </td>

                            <td>
                              <div style="font-size: 0.84rem; color: var(--text-white); font-weight: 500;">
                                ${plan?.nome || 'Nenhum plano'}
                              </div>
                              <div style="margin-top: 4px;">
                                ${
                                  saldo > 0
                                    ? `<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.72rem;" title="Possui aulas de reposição pendentes">
                                         🔄 ${saldo} reposição(ões)
                                       </span>`
                                    : `<span style="font-size: 0.72rem; color: var(--text-muted);">0 reposições pendentes</span>`
                                }
                              </div>
                            </td>

                            <td>
                              <div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">
                                <span class="badge ${isAtivo ? 'badge-success' : 'badge-warning'}">
                                  ${isAtivo ? '● Ativo' : '○ Inativo'}
                                </span>
                                ${
                                  isAtivo
                                    ? isOverdue
                                      ? `<span class="badge badge-coral" style="font-size: 0.68rem; font-weight: 700; display: inline-flex; align-items: center; gap: 3px;" title="Possui mensalidade em atraso!">
                                           ⚠️ Atrasado
                                         </span>`
                                      : `<span class="badge" style="background: rgba(34, 197, 94, 0.12); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.25); font-size: 0.68rem; display: inline-flex; align-items: center; gap: 3px;" title="Mensalidades em dia">
                                           ✓ Em dia
                                         </span>`
                                    : ''
                                }
                              </div>
                            </td>

                            <td style="text-align: right;">
                              <button class="btn btn-secondary btn-icon-only btn-view-student" data-id="${student.id}" title="Ficha Completa e Histórico de Aulas" style="margin-right: 4px; color: #60a5fa;">
                                ${ICONS.profile}
                              </button>

                              ${
                                canEdit
                                  ? `
                                    <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${student.id}" title="Editar Dados do Aluno">
                                      ${ICONS.edit}
                                    </button>
                                  `
                                  : ''
                              }
                              ${
                                canDelete
                                  ? `
                                    <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${student.id}" title="Excluir Aluno" style="margin-left: 4px;">
                                      ${ICONS.trash}
                                    </button>
                                  `
                                  : ''
                              }
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
        if (student && confirm(`Tem certeza que deseja excluir o aluno "${student.nome}"?`)) {
          storageService.deleteStudent(student.id, user?.nome || 'Administrador');
          showToast(`Aluno "${student.nome}" excluído.`, 'info');
          renderList();
        }
      });
    });
  }

  // ==========================================
  // MODAL 360°: FICHA DO ALUNO COM ABAS
  // ==========================================
  function openStudentDetailsModal(student: Student): void {
    const plans = storageService.getPlans();
    const plan = plans.find(p => p.id === student.planoId);
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
        
        <!-- Cartão Superior de Perfil do Aluno -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--color-coral); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; color: #ffffff;">
              ${student.nome[0] || 'A'}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">${student.nome}</span>
                <span class="badge ${isAtivo ? 'badge-success' : 'badge-warning'}" style="font-size: 0.65rem;">
                  ${isAtivo ? '● Ativo' : '○ Inativo'}
                </span>
                ${
                  isAtivo
                    ? isOverdue
                      ? `<span class="badge badge-coral" style="font-size: 0.65rem; font-weight: 700;">⚠️ Inadimplente</span>`
                      : `<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">✓ Mensalidade em dia</span>`
                    : ''
                }
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px; flex-wrap: wrap; font-size: 0.8rem; color: var(--text-secondary);">
                <span>${getInstrumentIcon(student.instrumentoPrincipal)} ${student.instrumentoPrincipal || 'Instrumento Geral'}</span>
                &bull;
                ${getNivelBadge(student.nivelMusical)}
                ${ageStr ? `&bull; <span style="color: var(--text-muted);">${ageStr}</span>` : ''}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${
              waLink
                ? `
                  <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 5px; color: #22c55e; border-color: rgba(34, 197, 94, 0.3); font-size: 0.75rem; padding: 4px 10px;">
                    ${ICONS.whatsapp} WhatsApp
                  </a>
                `
                : ''
            }
          </div>
        </div>

        <!-- Seletor de Abas da Ficha do Aluno -->
        <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
          <button type="button" class="btn btn-sm btn-profile-tab active" id="btn-tab-pedagogico" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            🎓 Pedagógico &amp; Aulas
          </button>
          <button type="button" class="btn btn-sm btn-profile-tab btn-secondary" id="btn-tab-financeiro" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            💰 Histórico Financeiro
            ${
              isOverdue
                ? `<span class="badge badge-coral" style="font-size: 0.65rem; padding: 1px 5px;">Atrasado</span>`
                : `<span class="badge" style="background: rgba(34, 197, 94, 0.2); color: #4ade80; font-size: 0.65rem; padding: 1px 5px;">${payments.length}</span>`
            }
          </button>
        </div>

        <!-- CONTEÚDO DA ABA 1: PEDAGÓGICO -->
        <div id="panel-tab-pedagogico" style="display: flex; flex-direction: column; gap: 14px;">
          <!-- Informações de Contato e Responsável -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px;">
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
                Contatos Pessoais
              </span>
              <div style="font-size: 0.82rem; color: var(--text-white);">📱 ${student.telefone || 'Sem telefone'}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">✉️ ${student.email || 'Sem e-mail'}</div>
            </div>

            <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px;">
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
                Responsável Legal / Emergência
              </span>
              ${
                student.responsavelNome
                  ? `
                    <div style="font-size: 0.82rem; color: var(--text-white);">
                      👤 <strong>${student.responsavelNome}</strong> ${student.responsavelParentesco ? `(${student.responsavelParentesco})` : ''}
                    </div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      📞 ${student.responsavelTelefone || 'Sem telefone informado'}
                    </div>
                  `
                  : `<div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">Não informado / Aluno maior de idade</div>`
              }
            </div>
          </div>

          <!-- Métricas Rápidas de Presença e Reposições -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #60a5fa;">${totalAulas}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Aulas Agendadas</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #4ade80;">${concluidas}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Presenças</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #f59e0b;">${faltasJust}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">Faltas Justificadas</div>
            </div>

            <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm); padding: 8px; text-align: center;">
              <div style="font-size: 1.15rem; font-weight: 700; color: #22c55e;">${saldo}</div>
              <div style="font-size: 0.7rem; color: #86efac; margin-top: 2px;">Saldo Reposições</div>
            </div>
          </div>

          <!-- Linha do Tempo / Histórico de Aulas -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-white); margin: 0;">
                Histórico Pedagógico de Aulas &amp; Faltas
              </h4>
              ${
                saldo > 0
                  ? `
                    <button type="button" class="btn btn-primary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.72rem; padding: 3px 8px;">
                      🔄 Agendar Reposição (${saldo} disp.)
                    </button>
                  `
                  : ''
              }
            </div>

            <div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${
                history.length === 0
                  ? `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">Nenhuma aula registrada ainda para este aluno.</div>`
                  : `
                    <table class="data-table" style="margin: 0; font-size: 0.8rem;">
                      <thead>
                        <tr>
                          <th>Data &amp; Hora</th>
                          <th>Título da Aula</th>
                          <th>Tipo</th>
                          <th>Status</th>
                          <th>Observações / Justificativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${history.map(app => {
                          const dateFormatted = app.data.split('-').reverse().join('/');
                          let statusBadge = '';
                          if (app.status === 'concluido') {
                            statusBadge = `<span class="badge badge-success" style="font-size: 0.65rem;">✓ Presente</span>`;
                          } else if (app.status === 'falta_justificada') {
                            statusBadge = `<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.65rem;">⚠️ Falta Just.</span>`;
                          } else if (app.status === 'falta_injustificada') {
                            statusBadge = `<span class="badge badge-danger" style="font-size: 0.65rem;">✕ Injustificada</span>`;
                          } else if (app.status === 'cancelado') {
                            statusBadge = `<span class="badge badge-secondary" style="font-size: 0.65rem;">🚫 Cancelado</span>`;
                          } else {
                            statusBadge = `<span class="badge badge-warning" style="font-size: 0.65rem;">⏳ Agendado</span>`;
                          }

                          const tipoBadge = app.tipoAula === 'reposicao'
                            ? `<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; font-size: 0.65rem;">Reposição</span>`
                            : `<span style="color: var(--text-muted); font-size: 0.7rem;">Regular</span>`;

                          return `
                            <tr>
                              <td>
                                <strong>${dateFormatted}</strong><br>
                                <span style="font-size: 0.7rem; color: var(--text-muted);">${app.horaInicio} - ${app.horaFim}</span>
                              </td>
                              <td>
                                <div style="font-weight: 600; color: var(--text-white);">${app.titulo}</div>
                              </td>
                              <td>${tipoBadge}</td>
                              <td>${statusBadge}</td>
                              <td>
                                <span style="color: var(--text-secondary); font-size: 0.75rem;">
                                  ${app.justificativaFalta ? `<em>Motivo: ${app.justificativaFalta}</em>` : app.observacoes || '-'}
                                </span>
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

          ${
            student.observacoes
              ? `
                <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.78rem; color: var(--text-secondary);">
                  📝 <strong>Observações:</strong> ${student.observacoes}
                </div>
              `
              : ''
          }
        </div>

        <!-- CONTEÚDO DA ABA 2: FINANCEIRO -->
        <div id="panel-tab-financeiro" style="display: none; flex-direction: column; gap: 14px;">
          <!-- Card de Alerta de Situação Financeira -->
          ${
            isOverdue
              ? `
                <div style="background: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.3); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="font-weight: 700; color: #f87171; font-size: 0.88rem;">⚠️ Mensalidade em Atraso</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      Este aluno possui pagamentos com vencimento expirado que aguardam regularização.
                    </div>
                  </div>
                  <span class="badge badge-coral" style="font-size: 0.75rem;">Pendente</span>
                </div>
              `
              : `
                <div style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="font-weight: 700; color: #4ade80; font-size: 0.88rem;">✓ Situação Financeira Regularizada</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
                      Não constam mensalidades em atraso para este aluno.
                    </div>
                  </div>
                  <span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.75rem;">Em Dia</span>
                </div>
              `
          }

          <!-- Resumo Financeiro do Aluno -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Mensalidade Padrão</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: #fbbf24; margin-top: 2px;">
                R$ ${(student.valorMensalidade ?? 280).toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">Vence todo dia ${student.diaVencimento ?? 10}</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Total Já Pago</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: #4ade80; margin-top: 2px;">
                R$ ${totalPago.toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${payments.filter(p => p.status === 'pago').length} mensalidade(s)</div>
            </div>

            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Total em Aberto</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: ${totalPendente > 0 ? '#f87171' : 'var(--text-white)'}; margin-top: 2px;">
                R$ ${totalPendente.toFixed(2)}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-secondary);">${payments.filter(p => p.status !== 'pago').length} pendente(s)</div>
            </div>
          </div>

          <!-- Tabela de Lançamentos Financeiros do Aluno -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-white); margin: 0;">
                Histórico de Mensalidades &amp; Pagamentos (${payments.length})
              </h4>
            </div>

            <div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${
                payments.length === 0
                  ? `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">Nenhum lançamento financeiro registrado para este aluno ainda.</div>`
                  : `
                    <table class="data-table" style="margin: 0; font-size: 0.8rem;">
                      <thead>
                        <tr>
                          <th>Descrição</th>
                          <th>Vencimento</th>
                          <th>Valor</th>
                          <th>Status</th>
                          <th>Data Pagto</th>
                          <th style="text-align: right;">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${payments.map(p => {
                          const isPago = p.status === 'pago';
                          const isAtrasado = p.status === 'atrasado';

                          let badgeHtml = '';
                          if (isPago) {
                            badgeHtml = `<span class="badge badge-success" style="font-size: 0.65rem;">✓ Pago</span>`;
                          } else if (isAtrasado) {
                            badgeHtml = `<span class="badge badge-coral" style="font-size: 0.65rem; font-weight: 700;">⚠️ Atrasado</span>`;
                          } else {
                            badgeHtml = `<span class="badge badge-warning" style="font-size: 0.65rem;">⏳ Pendente</span>`;
                          }

                          return `
                            <tr>
                              <td>
                                <strong style="color: var(--text-white);">${p.descricao}</strong>
                                ${p.formaPagamento ? `<div style="font-size: 0.68rem; color: var(--text-muted);">${p.formaPagamento.toUpperCase()}</div>` : ''}
                              </td>
                              <td>${p.dataVencimento.split('-').reverse().join('/')}</td>
                              <td style="font-weight: 600; color: var(--text-white);">R$ ${p.valor.toFixed(2)}</td>
                              <td>${badgeHtml}</td>
                              <td>${p.dataPagamento ? p.dataPagamento.split('-').reverse().join('/') : '-'}</td>
                              <td style="text-align: right;">
                                ${
                                  isPago
                                    ? `
                                      <button type="button" class="btn btn-secondary btn-sm btn-print-receipt" data-id="${p.id}" style="font-size: 0.72rem; padding: 2px 8px;" title="Ver e imprimir recibo">
                                        🖨️ Recibo
                                      </button>
                                    `
                                    : canEditFinancial
                                      ? `
                                        <button type="button" class="btn btn-primary btn-sm btn-pay-now" data-id="${p.id}" style="font-size: 0.72rem; padding: 2px 8px; background: #059669; border-color: #059669;" title="Dar baixa no pagamento">
                                          ✓ Dar Baixa
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
        tabPedBtn.className = 'btn btn-sm btn-profile-tab active';
        tabFinBtn?.classList.add('btn-secondary');
        tabFinBtn?.classList.remove('active');
        if (panelPed) panelPed.style.display = 'flex';
        if (panelFin) panelFin.style.display = 'none';
      });

      tabFinBtn?.addEventListener('click', () => {
        tabFinBtn.className = 'btn btn-sm btn-profile-tab active';
        tabPedBtn?.classList.add('btn-secondary');
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
    const isEditing = !!existingStudent;
    const studentPayments = existingStudent ? storageService.getStudentPayments(existingStudent.id) : [];

    const planOptions = plans
      .map(
        p => `<option value="${p.id}" ${existingStudent?.planoId === p.id ? 'selected' : ''}>${p.nome}</option>`
      )
      .join('');

    const instrumentOptions = INSTRUMENTOS_COMUNS
      .map(
        inst => `<option value="${inst}" ${existingStudent?.instrumentoPrincipal === inst ? 'selected' : ''}>${inst}</option>`
      )
      .join('');

    const bodyHtml = `
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Seletor de Abas do Formulário (Evita rolagem longa) -->
        <div style="display: flex; gap: 6px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px; overflow-x: auto;">
          <button type="button" class="btn btn-sm btn-form-tab active" data-tab="tab-pessoal" style="font-size: 0.78rem;">
            👤 1. Dados Pessoais
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-resp" style="font-size: 0.78rem;">
            🛡️ 2. Responsável
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-musica" style="font-size: 0.78rem;">
            🎵 3. Música &amp; Plano
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-financeiro" style="font-size: 0.78rem;">
            💰 4. Mensalidade
          </button>
          <button type="button" class="btn btn-sm btn-form-tab btn-secondary" data-tab="tab-obs" style="font-size: 0.78rem;">
            📝 5. Observações
          </button>
        </div>

        <!-- PAINEL 1: DADOS PESSOAIS -->
        <div id="form-panel-tab-pessoal" class="form-tab-panel" style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nome">Nome Completo do Aluno</label>
              <input type="text" id="student-nome" class="form-input" placeholder="Ex: Clara Mendes" value="${existingStudent?.nome || ''}" required />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nascimento">Data de Nascimento</label>
              <input type="date" id="student-nascimento" class="form-input" value="${existingStudent?.dataNascimento || ''}" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-telefone">Telefone / WhatsApp</label>
              <input type="text" id="student-telefone" class="form-input" placeholder="(11) 99999-9999" value="${existingStudent?.telefone || ''}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-email">E-mail</label>
              <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${existingStudent?.email || ''}" />
            </div>
          </div>
        </div>

        <!-- PAINEL 2: DADOS DO RESPONSÁVEL -->
        <div id="form-panel-tab-resp" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 2fr 1fr 1.2fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-nome">Nome do Responsável</label>
              <input type="text" id="student-resp-nome" class="form-input" placeholder="Ex: Patrícia Mendes" value="${existingStudent?.responsavelNome || ''}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-resp-parentesco">Parentesco</label>
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
              <label class="form-label" for="student-resp-tel">Telefone / WhatsApp</label>
              <input type="text" id="student-resp-tel" class="form-input" placeholder="(11) 98888-8888" value="${existingStudent?.responsavelTelefone || ''}" />
            </div>
          </div>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">
            * Obrigatório para alunos menores de 18 anos ou para contato de emergência.
          </p>
        </div>

        <!-- PAINEL 3: DADOS MUSICAIS E PEDAGÓGICOS -->
        <div id="form-panel-tab-musica" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento Principal</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione...</option>
                ${instrumentOptions}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nivel">Nível Musical</label>
              <select id="student-nivel" class="form-select">
                <option value="iniciante" ${existingStudent?.nivelMusical === 'iniciante' ? 'selected' : ''}>Iniciante</option>
                <option value="basico" ${existingStudent?.nivelMusical === 'basico' ? 'selected' : ''}>Básico</option>
                <option value="intermediario" ${existingStudent?.nivelMusical === 'intermediario' ? 'selected' : ''}>Intermediário</option>
                <option value="avancado" ${existingStudent?.nivelMusical === 'avancado' ? 'selected' : ''}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-status">Status da Matrícula</label>
              <select id="student-status" class="form-select">
                <option value="ativo" ${existingStudent?.status === 'ativo' ? 'selected' : ''}>Ativo</option>
                <option value="inativo" ${existingStudent?.status === 'inativo' ? 'selected' : ''}>Inativo</option>
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.5fr 1.5fr 1fr; gap: 12px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-plano">Plano de Ensino</label>
              <select id="student-plano" class="form-select">
                <option value="">Selecione um plano...</option>
                ${planOptions}
              </select>
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-modulo">Módulo Atual</label>
              <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${existingStudent?.moduloAtual || ''}" />
            </div>

            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-saldo-reposicoes" title="Aulas que o aluno tem direito a repor">
                Créditos Reposição
              </label>
              <input type="number" id="student-saldo-reposicoes" class="form-input" min="0" max="20" value="${existingStudent?.saldoReposicoes ?? 0}" />
            </div>
          </div>
        </div>

        <!-- PAINEL 4: MENSALIDADE E FINANCEIRO -->
        <div id="form-panel-tab-financeiro" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; color: #fbbf24; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
              <span>💰</span> Parâmetros da Mensalidade
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-valor-mensalidade">Valor da Mensalidade (R$)</label>
                <input type="number" id="student-valor-mensalidade" class="form-input" min="0" step="10" placeholder="280.00" value="${existingStudent?.valorMensalidade ?? 280}" required />
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" for="student-dia-vencimento">Dia de Vencimento Padrão</label>
                <input type="number" id="student-dia-vencimento" class="form-input" min="1" max="31" placeholder="10" value="${existingStudent?.diaVencimento ?? 10}" required />
              </div>
            </div>

            <div style="font-size: 0.74rem; color: var(--text-secondary); line-height: 1.3;">
              ℹ️ Estes valores são a base para geração das cobranças de mensalidade e controle de pontualidade.
            </div>
          </div>

          <!-- Grid Pequena: Histórico Financeiro do Aluno -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-white); display: flex; align-items: center; gap: 6px;">
                <span>📋</span> Histórico Financeiro
              </span>
              ${
                studentPayments.length > 0
                  ? `<span style="font-size: 0.72rem; color: var(--text-muted);">${studentPayments.length} lançamento(s)</span>`
                  : ''
              }
            </div>

            <div style="max-height: 155px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
              ${
                !existingStudent
                  ? `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">O histórico financeiro estará disponível após o cadastro do aluno.</div>`
                  : studentPayments.length === 0
                  ? `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.78rem;">Nenhum lançamento financeiro registrado para este aluno.</div>`
                  : `
                    <table class="data-table" style="margin: 0; font-size: 0.76rem; width: 100%;">
                      <thead>
                        <tr style="background: rgba(0, 0, 0, 0.25); position: sticky; top: 0; z-index: 1;">
                          <th style="padding: 6px 10px;">Valor</th>
                          <th style="padding: 6px 10px;">Data Vencimento</th>
                          <th style="padding: 6px 10px;">Data Pagamento</th>
                          <th style="padding: 6px 10px; text-align: center;">Situação</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${studentPayments.map(p => {
                          const dtVenc = p.dataVencimento.split('-').reverse().join('/');
                          const dtPag = p.dataPagamento ? p.dataPagamento.split('-').reverse().join('/') : '-';
                          let sitBadge = '';
                          if (p.status === 'pago') {
                            sitBadge = `<span class="badge badge-success" style="font-size: 0.65rem; padding: 2px 6px;">Pago</span>`;
                          } else if (p.status === 'atrasado') {
                            sitBadge = `<span class="badge badge-coral" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">Atrasado</span>`;
                          } else {
                            sitBadge = `<span class="badge badge-warning" style="font-size: 0.65rem; padding: 2px 6px;">Pendente</span>`;
                          }
                          return `
                            <tr>
                              <td style="padding: 6px 10px; font-weight: 600; color: var(--text-white);">R$ ${p.valor.toFixed(2)}</td>
                              <td style="padding: 6px 10px;">${dtVenc}</td>
                              <td style="padding: 6px 10px; color: ${p.dataPagamento ? 'var(--text-white)' : 'var(--text-muted)'};">${dtPag}</td>
                              <td style="padding: 6px 10px; text-align: center;">${sitBadge}</td>
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

        <!-- PAINEL 5: OBSERVAÇÕES -->
        <div id="form-panel-tab-obs" class="form-tab-panel" style="display: none; flex-direction: column; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="student-obs">Observações Pedagógicas / Preferências Musicais</label>
            <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Gostos musicais, objetivos do aluno, pontos de atenção pedagógica...">${existingStudent?.observacoes || ''}</textarea>
          </div>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? `Editar Aluno: ${existingStudent.nome}` : 'Cadastrar Novo Aluno',
      bodyHtml,
      modalClass: 'modal-lg',
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Aluno',
      onConfirm: () => {
        const nome = (document.getElementById('student-nome') as HTMLInputElement).value.trim();
        const dataNascimento = (document.getElementById('student-nascimento') as HTMLInputElement).value;
        const email = (document.getElementById('student-email') as HTMLInputElement).value.trim();
        const telefone = (document.getElementById('student-telefone') as HTMLInputElement).value.trim();

        const responsavelNome = (document.getElementById('student-resp-nome') as HTMLInputElement).value.trim();
        const responsavelParentesco = (document.getElementById('student-resp-parentesco') as HTMLSelectElement).value;
        const responsavelTelefone = (document.getElementById('student-resp-tel') as HTMLInputElement).value.trim();

        const instrumentoPrincipal = (document.getElementById('student-instrumento') as HTMLSelectElement).value;
        const nivelMusical = (document.getElementById('student-nivel') as HTMLSelectElement).value as MusicalLevel;
        const planoId = (document.getElementById('student-plano') as HTMLSelectElement).value;
        const status = (document.getElementById('student-status') as HTMLSelectElement).value as any;
        const moduloAtual = (document.getElementById('student-modulo') as HTMLInputElement).value.trim();
        const saldoInput = (document.getElementById('student-saldo-reposicoes') as HTMLInputElement).value;
        const saldoReposicoes = Math.max(0, parseInt(saldoInput, 10) || 0);

        const valorMensalidadeInput = (document.getElementById('student-valor-mensalidade') as HTMLInputElement)?.value;
        const valorMensalidade = Math.max(0, parseFloat(valorMensalidadeInput) || 280);
        const diaVencimentoInput = (document.getElementById('student-dia-vencimento') as HTMLInputElement)?.value;
        const diaVencimento = Math.min(31, Math.max(1, parseInt(diaVencimentoInput, 10) || 10));

        const obs = (document.getElementById('student-obs') as HTMLTextAreaElement).value.trim();

        if (!nome) {
          showToast('Informe o nome do aluno.', 'error');
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
              responsavelNome,
              responsavelParentesco,
              responsavelTelefone,
              instrumentoPrincipal,
              nivelMusical,
              planoId,
              status,
              moduloAtual,
              saldoReposicoes,
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
              responsavelNome,
              responsavelParentesco,
              responsavelTelefone,
              instrumentoPrincipal,
              nivelMusical,
              planoId,
              status,
              moduloAtual,
              saldoReposicoes,
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

    // Conectar alternância de abas do formulário
    setTimeout(() => {
      const tabBtns = document.querySelectorAll('.btn-form-tab');
      const panels = document.querySelectorAll('.form-tab-panel') as NodeListOf<HTMLElement>;

      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = (e.currentTarget as HTMLElement).dataset.tab;
          tabBtns.forEach(b => {
            b.classList.add('btn-secondary');
            b.classList.remove('active');
          });
          (e.currentTarget as HTMLElement).classList.remove('btn-secondary');
          (e.currentTarget as HTMLElement).classList.add('active');

          panels.forEach(p => {
            p.style.display = p.id === `form-panel-${target}` ? 'flex' : 'none';
          });
        });
      });
    }, 50);
  }

  renderList();
  return container;
}
