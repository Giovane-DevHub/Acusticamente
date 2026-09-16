import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Student, MusicalLevel } from '../types';
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
                              <span class="badge ${isAtivo ? 'badge-success' : 'badge-warning'}">
                                ${isAtivo ? '● Ativo' : '○ Inativo'}
                              </span>
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
  // MODAL 360°: FICHA COMPLETA & HISTÓRICO
  // ==========================================
  function openStudentDetailsModal(student: Student): void {
    const plans = storageService.getPlans();
    const plan = plans.find(p => p.id === student.planoId);
    const history = storageService.getStudentAppointments(student.id);

    const ageStr = calculateAge(student.dataNascimento);
    const waLink = getWhatsAppLink(student.telefone, student.nome);
    const saldo = student.saldoReposicoes || 0;

    const totalAulas = history.length;
    const concluidas = history.filter(a => a.status === 'concluido').length;
    const faltasJust = history.filter(a => a.status === 'falta_justificada').length;
    const faltasInjust = history.filter(a => a.status === 'falta_injustificada').length;

    const bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        
        <!-- Cartão Superior de Perfil do Aluno -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px;">
          <div style="display: flex; gap: 14px; align-items: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-coral); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; color: #ffffff;">
              ${student.nome[0] || 'A'}
            </div>
            <div>
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-white);">
                ${student.nome}
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px; flex-wrap: wrap;">
                <span style="font-size: 0.85rem; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 4px;">
                  ${getInstrumentIcon(student.instrumentoPrincipal)} ${student.instrumentoPrincipal || 'Instrumento Geral'}
                </span>
                &bull;
                ${getNivelBadge(student.nivelMusical)}
                ${ageStr ? `&bull; <span style="font-size: 0.8rem; color: var(--text-muted);">${ageStr} (${student.dataNascimento?.split('-').reverse().join('/')})</span>` : ''}
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${
              waLink
                ? `
                  <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; color: #22c55e; border-color: rgba(34, 197, 94, 0.3); font-size: 0.78rem;">
                    ${ICONS.whatsapp} Falar no WhatsApp
                  </a>
                `
                : ''
            }
          </div>
        </div>

        <!-- Informações de Contato e Responsável -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 6px;">
              Contatos Pessoais
            </span>
            <div style="font-size: 0.85rem; color: var(--text-white);">📱 ${student.telefone || 'Sem telefone'}</div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">✉️ ${student.email || 'Sem e-mail'}</div>
          </div>

          <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 6px;">
              Responsável Legal / Emergência
            </span>
            ${
              student.responsavelNome
                ? `
                  <div style="font-size: 0.85rem; color: var(--text-white);">
                    👤 <strong>${student.responsavelNome}</strong> ${student.responsavelParentesco ? `(${student.responsavelParentesco})` : ''}
                  </div>
                  <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">
                    📞 ${student.responsavelTelefone || 'Sem telefone informado'}
                  </div>
                `
                : `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Não informado / Aluno maior de idade</div>`
            }
          </div>
        </div>

        <!-- Métricas Rápidas de Presença e Reposições -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #60a5fa;">${totalAulas}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Aulas Agendadas</div>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #4ade80;">${concluidas}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Presenças</div>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #f59e0b;">${faltasJust}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Faltas Justificadas</div>
          </div>

          <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
            <div style="font-size: 1.25rem; font-weight: 700; color: #22c55e;">${saldo}</div>
            <div style="font-size: 0.72rem; color: #86efac; margin-top: 2px;">Saldo Reposições</div>
          </div>
        </div>

        <!-- Linha do Tempo / Histórico de Aulas -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-white); margin: 0;">
              Histórico Pedagógico de Aulas &amp; Faltas
            </h4>
            ${
              saldo > 0
                ? `
                  <button type="button" class="btn btn-primary btn-sm" id="btn-quick-schedule-reposicao" style="font-size: 0.75rem; padding: 4px 10px;">
                    🔄 Agendar Reposição (${saldo} disp.)
                  </button>
                `
                : ''
            }
          </div>

          <div style="max-height: 240px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-surface);">
            ${
              history.length === 0
                ? `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">Nenhuma aula registrada ainda para este aluno.</div>`
                : `
                  <table class="data-table" style="margin: 0; font-size: 0.82rem;">
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
                          statusBadge = `<span class="badge badge-success" style="font-size: 0.68rem;">✓ Presente</span>`;
                        } else if (app.status === 'falta_justificada') {
                          statusBadge = `<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem;">⚠️ Falta Justificada</span>`;
                        } else if (app.status === 'falta_injustificada') {
                          statusBadge = `<span class="badge badge-danger" style="font-size: 0.68rem;">✕ Falta Injustificada</span>`;
                        } else if (app.status === 'cancelado') {
                          statusBadge = `<span class="badge badge-secondary" style="font-size: 0.68rem;">🚫 Cancelado</span>`;
                        } else {
                          statusBadge = `<span class="badge badge-warning" style="font-size: 0.68rem;">⏳ Agendado</span>`;
                        }

                        const tipoBadge = app.tipoAula === 'reposicao'
                          ? `<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; font-size: 0.65rem;">Reposição</span>`
                          : `<span style="color: var(--text-muted); font-size: 0.72rem;">Regular</span>`;

                        return `
                          <tr>
                            <td>
                              <strong>${dateFormatted}</strong><br>
                              <span style="font-size: 0.72rem; color: var(--text-muted);">${app.horaInicio} - ${app.horaFim}</span>
                            </td>
                            <td>
                              <div style="font-weight: 600; color: var(--text-white);">${app.titulo}</div>
                            </td>
                            <td>${tipoBadge}</td>
                            <td>${statusBadge}</td>
                            <td>
                              <span style="color: var(--text-secondary); font-size: 0.78rem;">
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
              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; font-size: 0.8rem; color: var(--text-secondary);">
                📝 <strong>Observações Gerais:</strong> ${student.observacoes}
              </div>
            `
            : ''
        }
      </div>
    `;

    openModal({
      title: `Ficha Pedagógica: ${student.nome}`,
      bodyHtml,
      modalClass: 'modal-lg',
      cancelText: 'Fechar',
      confirmText: ''
    });

    // Se clicou em agendar reposição a partir da ficha do aluno
    setTimeout(() => {
      document.getElementById('btn-quick-schedule-reposicao')?.addEventListener('click', () => {
        closeModal();
        onNavigate('agenda');
      });
    }, 50);
  }

  // ==========================================
  // MODAL DE CADASTRO / EDIÇÃO DE ALUNO
  // ==========================================
  function openStudentModal(existingStudent?: Student): void {
    const plans = storageService.getPlans();
    const isEditing = !!existingStudent;

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
      <form id="student-modal-form" style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- SEÇÃO 1: DADOS DO ALUNO -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-weight: 700; font-size: 0.88rem; color: var(--color-coral); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>👤</span> 1. Dados Pessoais do Aluno
          </div>

          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px; margin-bottom: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-nome">Nome Completo</label>
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

        <!-- SEÇÃO 2: DADOS DO RESPONSÁVEL (PARA MENORES OU EMERGÊNCIA) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-weight: 700; font-size: 0.88rem; color: #60a5fa; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>🛡️</span> 2. Responsável Legal / Contato de Emergência
          </div>

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
        </div>

        <!-- SEÇÃO 3: DADOS MUSICAIS E PEDAGÓGICOS -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-weight: 700; font-size: 0.88rem; color: #4ade80; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>🎵</span> 3. Informações Musicais &amp; Matrícula
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 12px; margin-bottom: 10px;">
            <div class="form-group" style="margin: 0;">
              <label class="form-label" for="student-instrumento">Instrumento Principal</label>
              <select id="student-instrumento" class="form-select">
                <option value="">Selecione o instrumento...</option>
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
              <label class="form-label" for="student-status">Status do Aluno</label>
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

        <!-- SEÇÃO 4: OBSERVAÇÕES PEDAGÓGICAS -->
        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="student-obs">Observações Pedagógicas / Preferências Musicais</label>
          <textarea id="student-obs" class="form-textarea" rows="2" placeholder="Gostos musicais, objetivos do aluno, pontos de atenção pedagógica...">${existingStudent?.observacoes || ''}</textarea>
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
  }

  renderList();
  return container;
}
