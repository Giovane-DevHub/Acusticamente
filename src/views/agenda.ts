import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Appointment, AppointmentStatus, AppointmentType } from '../types';
import { ICONS, openModal, closeModal, showToast } from '../utils/ui';

interface AppointmentPrefill {
  studentId?: string;
  defaultDate?: string;
  tipoAula?: AppointmentType;
  aulaOriginalId?: string;
  titulo?: string;
}

export function renderAgenda(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();

  let currentDate = new Date();

  function buildCalendarView(): void {
    const students = storageService.getStudents();
    const plans = storageService.getPlans();
    const appointments = storageService.getAppointments();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

    // Gerar dias
    const dayCells: string[] = [];

    // Dias do mês anterior
    for (let i = firstDayIndex; i > 0; i--) {
      const dayNum = lastDateOfPrevMonth - i + 1;
      dayCells.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${dayNum}</span>
          </div>
        </div>
      `);
    }

    // Dias do mês atual
    for (let d = 1; d <= lastDateOfMonth; d++) {
      const pad = (n: number) => n.toString().padStart(2, '0');
      const dateString = `${year}-${pad(month + 1)}-${pad(d)}`;
      const isToday = isCurrentMonth && today.getDate() === d;

      // Filtrar compromissos deste dia
      const dayAppointments = appointments.filter(a => a.data === dateString);

      const appointmentsHtml = dayAppointments
        .slice(0, 3)
        .map(app => {
          const student = students.find(s => s.id === app.alunoId);
          const name = student ? student.nome.split(' ')[0] : 'Aula';

          let badgeClass = '';
          let iconPrefix = '';
          if (app.status === 'concluido') {
            badgeClass = 'concluido';
            iconPrefix = '✓ ';
          } else if (app.status === 'falta_justificada') {
            badgeClass = 'falta-justificada';
            iconPrefix = '⚠️ ';
          } else if (app.status === 'falta_injustificada') {
            badgeClass = 'falta-injustificada';
            iconPrefix = '✕ ';
          } else if (app.tipoAula === 'reposicao') {
            badgeClass = 'reposicao';
            iconPrefix = '🔄 ';
          }

          return `
            <div class="calendar-appointment-badge ${badgeClass}" 
                 data-app-id="${app.id}" 
                 title="${app.horaInicio} - ${student?.nome || 'Aluno'} (${app.status}${app.tipoAula === 'reposicao' ? ' - Reposição' : ''})">
              <strong>${iconPrefix}${app.horaInicio}</strong> ${name}
            </div>
          `;
        })
        .join('');

      const extraCount = dayAppointments.length > 3 ? dayAppointments.length - 3 : 0;
      const extraHtml = extraCount > 0 
        ? `<div style="font-size: 0.68rem; color: var(--text-secondary); text-align: center;">+${extraCount} mais</div>` 
        : '';

      dayCells.push(`
        <div class="calendar-day-cell ${isToday ? 'today' : ''}" data-date="${dateString}">
          <div class="day-cell-header">
            <span class="day-number">${d}</span>
            ${dayAppointments.length > 0 ? `<span style="font-size: 0.65rem; color: var(--color-coral); font-weight: 700;">● ${dayAppointments.length}</span>` : ''}
          </div>
          <div class="day-appointments-list">
            ${appointmentsHtml}
            ${extraHtml}
          </div>
        </div>
      `);
    }

    // Preencher restante da última semana
    const totalCells = dayCells.length;
    const remaining = totalCells > 35 ? 42 - totalCells : 35 - totalCells;
    for (let i = 1; i <= remaining; i++) {
      dayCells.push(`
        <div class="calendar-day-cell other-month">
          <div class="day-cell-header">
            <span class="day-number">${i}</span>
          </div>
        </div>
      `);
    }

    container.innerHTML = `
      <div class="calendar-container">
        <!-- Topo da Agenda -->
        <div class="calendar-header">
          <div class="calendar-title-group">
            <h2 class="calendar-month-title">${monthNames[month]} de ${year}</h2>
            
            <div class="calendar-nav-buttons">
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-prev" title="Mês anterior">
                ◀
              </button>
              <button class="btn ${isCurrentMonth ? 'btn-primary' : 'btn-secondary'}" id="agenda-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
                Hoje
              </button>
              <button class="btn btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            ${
              hasActionPermission(user, 'agenda', 'cadastrar')
                ? `
                  <button class="btn btn-primary" id="agenda-btn-new-app">
                    ${ICONS.plus} Nova Aula / Compromisso
                  </button>
                `
                : ''
            }
          </div>
        </div>

        <!-- Grade Semanal Quadradinha Estilo Google Calendar -->
        <div class="calendar-grid">
          <div class="calendar-day-name">DOM</div>
          <div class="calendar-day-name">SEG</div>
          <div class="calendar-day-name">TER</div>
          <div class="calendar-day-name">QUA</div>
          <div class="calendar-day-name">QUI</div>
          <div class="calendar-day-name">SEX</div>
          <div class="calendar-day-name">SÁB</div>

          ${dayCells.join('')}
        </div>

        <!-- Legenda de Status de Aulas -->
        <div style="margin-top: 14px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; font-size: 0.76rem; color: var(--text-secondary); background: var(--bg-card); padding: 8px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <span style="font-weight: 600; color: var(--text-white);">Legenda:</span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: var(--color-coral);"></span> Agendado
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #22c55e;"></span> ✓ Presente
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #f59e0b;"></span> ⚠️ Falta Justificada (+1 reposição)
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #ef4444;"></span> ✕ Falta Injustificada
          </span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">
            <span style="width: 9px; height: 9px; border-radius: 2px; background: #86efac; border: 1px solid #22c55e;"></span> 🔄 Reposição
          </span>
        </div>
      </div>
    `;

    // Conectar eventos de navegação
    container.querySelector('#agenda-btn-prev')?.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      buildCalendarView();
    });

    container.querySelector('#agenda-btn-next')?.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      buildCalendarView();
    });

    container.querySelector('#agenda-btn-today')?.addEventListener('click', () => {
      currentDate = new Date();
      buildCalendarView();
    });

    container.querySelector('#agenda-btn-new-app')?.addEventListener('click', () => {
      openAppointmentModal();
    });

    // Clicar em um dia do calendário abre o modal com as aulas daquele dia
    container.querySelectorAll('.calendar-day-cell:not(.other-month)').forEach(cell => {
      cell.addEventListener('click', (e) => {
        const dateStr = (cell as HTMLElement).dataset.date;
        if (dateStr) openDayDetailsModal(dateStr);
      });
    });

    // Clique direto no compromisso abre o dia ou edição
    container.querySelectorAll('.calendar-appointment-badge').forEach(badge => {
      badge.addEventListener('click', (e) => {
        e.stopPropagation();
        const appId = (badge as HTMLElement).dataset.appId;
        const app = appointments.find(a => a.id === appId);
        if (app) openDayDetailsModal(app.data);
      });
    });
  }

  // ==========================================
  // MODAL DE DETALHES DO DIA & AÇÕES RÁPIDAS
  // ==========================================
  function openDayDetailsModal(dateStr: string): void {
    const students = storageService.getStudents();
    const plans = storageService.getPlans();
    const appointments = storageService.getAppointments().filter(a => a.data === dateStr);

    const [year, month, day] = dateStr.split('-');
    const formattedHeader = `${day}/${month}/${year}`;

    const appointmentsListHtml = appointments.length === 0
      ? `<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.88rem;">
           Nenhum compromisso para este dia.
         </div>`
      : `
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; max-height: 420px; overflow-y: auto; padding-right: 4px;">
          ${appointments
            .map(app => {
              const student = students.find(s => s.id === app.alunoId);
              const plan = plans.find(p => p.id === app.planoId);
              
              const isConcluido = app.status === 'concluido';
              const isFaltaJust = app.status === 'falta_justificada';
              const isFaltaInjust = app.status === 'falta_injustificada';
              const isCancelado = app.status === 'cancelado';
              const isPendente = app.status === 'agendado';
              const isReposicao = app.tipoAula === 'reposicao';

              let borderColor = 'var(--color-coral)';
              let statusBadge = `<span class="badge badge-warning" style="font-size: 0.68rem; padding: 2px 7px;">⏳ Agendado</span>`;

              if (isConcluido) {
                borderColor = 'var(--status-success)';
                statusBadge = `<span class="badge badge-success" style="font-size: 0.68rem; padding: 2px 7px;">✓ Concluído</span>`;
              } else if (isFaltaJust) {
                borderColor = '#f59e0b';
                statusBadge = `<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.68rem; padding: 2px 7px;">⚠️ Falta Justificada</span>`;
              } else if (isFaltaInjust) {
                borderColor = 'var(--status-danger)';
                statusBadge = `<span class="badge badge-danger" style="font-size: 0.68rem; padding: 2px 7px;">✕ Falta Injustificada</span>`;
              } else if (isCancelado) {
                borderColor = 'var(--border-subtle)';
                statusBadge = `<span class="badge badge-secondary" style="font-size: 0.68rem; padding: 2px 7px;">🚫 Cancelado</span>`;
              }

              return `
                <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid ${borderColor};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <strong style="font-size: 0.9rem; color: var(--text-white);">${app.horaInicio} - ${app.horaFim}</strong>
                        ${statusBadge}
                        ${
                          isReposicao
                            ? `<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.65rem;">🔄 Aula de Reposição</span>`
                            : ''
                        }
                      </div>

                      <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white); margin-top: 4px;">
                        ${app.titulo}
                      </div>

                      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 3px;">
                        Aluno: <strong style="color: var(--text-white);">${student?.nome || 'Não vinculado'}</strong>
                        ${student?.instrumentoPrincipal ? ` &bull; <span style="color: #60a5fa;">${student.instrumentoPrincipal}</span>` : ''}
                        ${plan ? ` &bull; Plano: <span style="color: #ff9187;">${plan.nome}</span>` : ''}
                      </div>

                      ${
                        app.justificativaFalta
                          ? `<div style="font-size: 0.78rem; color: #f59e0b; margin-top: 4px; background: rgba(245, 158, 11, 0.08); padding: 4px 8px; border-radius: 4px;">
                               <strong>Justificativa da falta:</strong> ${app.justificativaFalta}
                             </div>`
                          : ''
                      }

                      ${
                        app.aulaReposicaoId
                          ? `<div style="font-size: 0.74rem; color: #4ade80; margin-top: 4px;">
                               ✓ Reposição já foi agendada para esta falta.
                             </div>`
                          : ''
                      }

                      ${app.observacoes ? `<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${app.observacoes}</div>` : ''}
                    </div>

                    <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
                      ${
                        hasActionPermission(user, 'agenda', 'alterar')
                          ? `
                            <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${app.id}" title="Editar Detalhes">
                              ${ICONS.edit}
                            </button>
                          `
                          : ''
                      }
                      ${
                        hasActionPermission(user, 'agenda', 'excluir')
                          ? `
                            <button type="button" class="btn btn-danger btn-icon-only btn-delete-app-day" data-id="${app.id}" title="Excluir">
                              ${ICONS.trash}
                            </button>
                          `
                          : ''
                      }
                    </div>
                  </div>

                  <!-- Linha de Ações Rápidas de Presença e Falta -->
                  ${
                    hasActionPermission(user, 'agenda', 'alterar')
                      ? `
                        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                          ${
                            isPendente
                              ? `
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-presence" data-id="${app.id}" style="font-size: 0.75rem; color: #22c55e; border-color: rgba(34, 197, 94, 0.3);">
                                  ✓ Presença
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-just" data-id="${app.id}" data-name="${student?.nome || ''}" style="font-size: 0.75rem; color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                                  ⚠️ Falta Justificada (+1 Reposição)
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn-mark-absence-injust" data-id="${app.id}" style="font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                                  ✕ Falta Injustificada
                                </button>
                              `
                              : ''
                          }

                          ${
                            isFaltaJust && !app.aulaReposicaoId
                              ? `
                                <button type="button" class="btn btn-primary btn-sm btn-schedule-reposicao" data-id="${app.id}" data-student-id="${app.alunoId}" data-title="${app.titulo}" style="font-size: 0.75rem; padding: 4px 10px;">
                                  🔄 Remarcar / Agendar Reposição
                                </button>
                              `
                              : ''
                          }
                        </div>
                      `
                      : ''
                  }
                </div>
              `;
            })
            .join('')}
        </div>
      `;

    const bodyHtml = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.82rem; color: var(--text-secondary);">
            Compromissos agendados: <strong style="color: var(--text-white);">${appointments.length}</strong>
          </span>
          ${
            hasActionPermission(user, 'agenda', 'cadastrar')
              ? `
                <button type="button" class="btn btn-primary" id="btn-modal-new-appointment" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${ICONS.plus} Novo Compromisso
                </button>
              `
              : ''
          }
        </div>

        ${appointmentsListHtml}
      </div>
    `;

    openModal({
      title: `Aulas do Dia: ${formattedHeader}`,
      bodyHtml,
      modalClass: 'modal-lg',
      cancelText: 'Fechar',
      confirmText: ''
    });

    // Conectar eventos do modal
    setTimeout(() => {
      document.getElementById('btn-modal-new-appointment')?.addEventListener('click', () => {
        closeModal();
        openAppointmentModal({ defaultDate: dateStr });
      });

      // Marcar Presença
      document.querySelectorAll('.btn-mark-presence').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          if (id) {
            storageService.marcarPresenca(id, user?.nome || 'Administrador');
            showToast('Presença confirmada e aula concluída!', 'success');
            buildCalendarView();
            openDayDetailsModal(dateStr);
          }
        });
      });

      // Marcar Falta Justificada
      document.querySelectorAll('.btn-mark-absence-just').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          const studentName = (e.currentTarget as HTMLElement).dataset.name;
          if (!id) return;

          const justificativa = prompt(`Informe o motivo da falta justificada de ${studentName} (Ex: Atestado médico, Viagem em família):`);
          if (justificativa === null) return; // Cancelou o prompt

          const result = storageService.registrarFalta(id, true, justificativa, user?.nome || 'Administrador');
          showToast(`Falta justificada registrada! +1 crédito de reposição gerado (Saldo: ${result.saldoReposicoes}).`, 'success');
          buildCalendarView();
          openDayDetailsModal(dateStr);
        });
      });

      // Marcar Falta Injustificada
      document.querySelectorAll('.btn-mark-absence-injust').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          if (!id) return;
          if (confirm('Registrar falta sem aviso prévio / injustificada? Não será gerado crédito de reposição.')) {
            storageService.registrarFalta(id, false, undefined, user?.nome || 'Administrador');
            showToast('Falta injustificada registrada.', 'info');
            buildCalendarView();
            openDayDetailsModal(dateStr);
          }
        });
      });

      // Remarcar / Agendar Reposição
      document.querySelectorAll('.btn-schedule-reposicao').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLElement;
          const origId = target.dataset.id;
          const studentId = target.dataset.studentId;
          const origTitle = target.dataset.title;

          closeModal();
          openAppointmentModal({
            studentId,
            aulaOriginalId: origId,
            tipoAula: 'reposicao',
            titulo: origTitle ? `Reposição: ${origTitle}` : 'Aula de Reposição'
          });
        });
      });

      // Editar
      document.querySelectorAll('.btn-edit-app-day').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          const app = storageService.getAppointments().find(a => a.id === id);
          if (app) {
            closeModal();
            openAppointmentModal({ existingApp: app });
          }
        });
      });

      // Excluir
      document.querySelectorAll('.btn-delete-app-day').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          const app = storageService.getAppointments().find(a => a.id === id);
          if (app && confirm(`Deseja realmente excluir o compromisso "${app.titulo}"?`)) {
            storageService.deleteAppointment(app.id, user?.nome || 'Administrador');
            showToast('Compromisso removido.', 'info');
            buildCalendarView();
            openDayDetailsModal(dateStr);
          }
        });
      });
    }, 50);
  }

  // ==========================================
  // MODAL DE CADASTRO OU EDIÇÃO DE AULA
  // ==========================================
  function openAppointmentModal(options?: {
    existingApp?: Appointment;
    studentId?: string;
    defaultDate?: string;
    tipoAula?: AppointmentType;
    aulaOriginalId?: string;
    titulo?: string;
  }): void {
    const students = storageService.getStudents();
    const plans = storageService.getPlans();

    const existingApp = options?.existingApp;
    const isEditing = !!existingApp;

    const selectedStudentId = existingApp?.alunoId || options?.studentId || '';
    const modalDate = existingApp?.data || options?.defaultDate || storageService.getTodayDateString();
    const isReposicao = (existingApp?.tipoAula || options?.tipoAula) === 'reposicao';

    const studentOptions = students
      .map(
        s => `<option value="${s.id}" ${selectedStudentId === s.id ? 'selected' : ''}>${s.nome} (${s.instrumentoPrincipal || 'Geral'}) - Saldo: ${s.saldoReposicoes || 0} rep.</option>`
      )
      .join('');

    const planOptions = plans
      .map(
        p => `<option value="${p.id}" ${existingApp?.planoId === p.id ? 'selected' : ''}>${p.nome}</option>`
      )
      .join('');

    const bodyHtml = `
      <form id="app-modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Tipo de Aula -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" style="margin: 0; font-weight: 600; color: var(--text-white);">Tipo de Aula:</label>
          <div style="display: flex; gap: 14px;">
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: var(--text-white);">
              <input type="radio" name="app-tipo-aula" value="regular" ${!isReposicao ? 'checked' : ''} style="accent-color: var(--color-coral);" />
              Aula Regular
            </label>
            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-size: 0.85rem; color: #4ade80;">
              <input type="radio" name="app-tipo-aula" value="reposicao" ${isReposicao ? 'checked' : ''} style="accent-color: #22c55e;" />
              🔄 Aula de Reposição
            </label>
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-title">Título da Aula / Conteúdo Previsto</label>
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão - Módulo 2" value="${existingApp?.titulo || options?.titulo || ''}" required />
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-student">Aluno Matriculado</label>
          <select id="app-student" class="form-select" required>
            <option value="">Selecione o Aluno...</option>
            ${studentOptions}
          </select>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-plan">Plano de Ensino (Opcional)</label>
          <select id="app-plan" class="form-select">
            <option value="">Selecione o Plano...</option>
            ${planOptions}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${modalDate}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${existingApp?.horaInicio || '09:00'}" required />
          </div>

          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${existingApp?.horaFim || '10:00'}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="app-status">Status da Aula</label>
            <select id="app-status" class="form-select">
              <option value="agendado" ${existingApp?.status === 'agendado' ? 'selected' : ''}>⏳ Agendado</option>
              <option value="concluido" ${existingApp?.status === 'concluido' ? 'selected' : ''}>✓ Concluído / Presente</option>
              <option value="falta_justificada" ${existingApp?.status === 'falta_justificada' ? 'selected' : ''}>⚠️ Falta Justificada (+1 Reposição)</option>
              <option value="falta_injustificada" ${existingApp?.status === 'falta_injustificada' ? 'selected' : ''}>✕ Falta Injustificada</option>
              <option value="cancelado" ${existingApp?.status === 'cancelado' ? 'selected' : ''}>🚫 Cancelado</option>
            </select>
          </div>

          <div class="form-group" style="margin: 0;" id="box-justificativa">
            <label class="form-label" for="app-justificativa">Justificativa da Falta (se houver)</label>
            <input type="text" id="app-justificativa" class="form-input" placeholder="Ex: Atestado, viagem, imprevisto..." value="${existingApp?.justificativaFalta || ''}" />
          </div>
        </div>

        <div class="form-group" style="margin: 0;">
          <label class="form-label" for="app-obs">Observações / Orientações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Repertório trabalhado, exercícios para casa...">${existingApp?.observacoes || ''}</textarea>
        </div>

        ${
          isEditing
            ? `<div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
                 <button type="button" class="btn btn-danger" id="btn-delete-app" style="padding: 6px 14px; font-size: 0.8rem;">
                   ${ICONS.trash} Excluir Compromisso
                 </button>
               </div>`
            : ''
        }
      </form>
    `;

    openModal({
      title: isEditing ? 'Editar Aula / Compromisso' : isReposicao ? '🔄 Agendar Aula de Reposição' : 'Cadastrar Nova Aula',
      bodyHtml,
      confirmText: isEditing ? 'Salvar Alterações' : 'Confirmar Agendamento',
      onConfirm: () => {
        const title = (document.getElementById('app-title') as HTMLInputElement).value.trim();
        const studentId = (document.getElementById('app-student') as HTMLSelectElement).value;
        const planId = (document.getElementById('app-plan') as HTMLSelectElement).value;
        const date = (document.getElementById('app-date') as HTMLInputElement).value;
        const timeStart = (document.getElementById('app-time-start') as HTMLInputElement).value;
        const timeEnd = (document.getElementById('app-time-end') as HTMLInputElement).value;
        const status = (document.getElementById('app-status') as HTMLSelectElement).value as AppointmentStatus;
        const justificativaFalta = (document.getElementById('app-justificativa') as HTMLInputElement).value.trim();
        const obs = (document.getElementById('app-obs') as HTMLTextAreaElement).value.trim();

        const tipoRadio = document.querySelector('input[name="app-tipo-aula"]:checked') as HTMLInputElement;
        const tipoAula: AppointmentType = (tipoRadio?.value as AppointmentType) || 'regular';

        if (!title || !studentId || !date || !timeStart) {
          showToast('Preencha os campos obrigatórios (Título, Aluno, Data e Início).', 'error');
          return false;
        }

        const currentUserName = user?.nome || 'Administrador';

        if (isEditing && existingApp) {
          storageService.updateAppointment(
            existingApp.id,
            {
              titulo: title,
              alunoId: studentId,
              planoId: planId || undefined,
              data: date,
              horaInicio: timeStart,
              horaFim: timeEnd,
              status,
              tipoAula,
              justificativaFalta: justificativaFalta || undefined,
              observacoes: obs
            },
            currentUserName
          );
          showToast('Aula atualizada com sucesso!', 'success');
        } else {
          if (tipoAula === 'reposicao') {
            storageService.agendarReposicao(
              {
                titulo: title,
                alunoId: studentId,
                planoId: planId || undefined,
                data: date,
                horaInicio: timeStart,
                horaFim: timeEnd,
                status,
                justificativaFalta: justificativaFalta || undefined,
                observacoes: obs
              },
              options?.aulaOriginalId,
              currentUserName
            );
            showToast('Aula de reposição agendada com sucesso (1 crédito abatido)!', 'success');
          } else {
            storageService.addAppointment(
              {
                titulo: title,
                alunoId: studentId,
                planoId: planId || undefined,
                data: date,
                horaInicio: timeStart,
                horaFim: timeEnd,
                status,
                tipoAula,
                justificativaFalta: justificativaFalta || undefined,
                observacoes: obs
              },
              currentUserName
            );
            showToast('Aula agendada com sucesso!', 'success');
          }
        }

        buildCalendarView();
        return true;
      }
    });

    if (isEditing && existingApp) {
      setTimeout(() => {
        document.getElementById('btn-delete-app')?.addEventListener('click', () => {
          if (confirm(`Deseja realmente excluir o compromisso "${existingApp.titulo}"?`)) {
            storageService.deleteAppointment(existingApp.id, user?.nome || 'Administrador');
            showToast('Compromisso removido.', 'info');
            closeModal();
            buildCalendarView();
          }
        });
      }, 50);
    }
  }

  buildCalendarView();
  return container;
}
