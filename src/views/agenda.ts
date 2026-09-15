import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Appointment } from '../types';
import { ICONS, openModal, closeModal, showToast } from '../utils/ui';

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
        .slice(0, 3) // exibe até 3 para manter quadradinho compacto
        .map(app => {
          const student = students.find(s => s.id === app.alunoId);
          const name = student ? student.nome.split(' ')[0] : 'Aula';
          const isConcluido = app.status === 'concluido';
          return `
            <div class="calendar-appointment-badge ${isConcluido ? 'concluido' : ''}" 
                 data-app-id="${app.id}" 
                 title="${app.horaInicio} - ${student?.nome || 'Aluno'} (${app.status})">
              <strong>${app.horaInicio}</strong> ${name}
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
              <button class="btn-secondary btn-icon-only" id="agenda-btn-next" title="Próximo mês">
                ▶
              </button>
            </div>
          </div>

          ${
            hasActionPermission(user, 'agenda', 'cadastrar')
              ? `
                <button class="btn btn-primary" id="agenda-btn-new-app">
                  ${ICONS.plus} Cadastrar Novo Compromisso
                </button>
              `
              : ''
          }
        </div>

        <!-- Grade Semanal Quadradinha Estilo Google Calendar Sem Barra de Rolagem -->
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

    // Clicar em uma célula de dia para abrir a lista de compromissos do dia e opção de criar novo
    container.querySelectorAll('.calendar-day-cell:not(.other-month)').forEach(cell => {
      cell.addEventListener('click', () => {
        const date = (cell as HTMLElement).dataset.date;
        if (date) openDayDetailsModal(date);
      });
    });
  }

  // Modal para Exibir a Lista de Compromissos do Dia e Opção de Criar Novo
  function openDayDetailsModal(dateStr: string): void {
    const students = storageService.getStudents();
    const plans = storageService.getPlans();
    const appointments = storageService.getAppointments().filter(a => a.data === dateStr);

    const [y, m, d] = dateStr.split('-');
    const dateObj = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    const dayOfWeek = dateObj.toLocaleDateString('pt-BR', { weekday: 'long' });
    const formattedHeader = `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}, ${d}/${m}/${y}`;

    const appointmentsListHtml =
      appointments.length === 0
        ? `
          <div style="text-align: center; padding: 32px 16px; background: rgba(255, 255, 255, 0.02); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 16px;">
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📅</div>
            <p style="font-size: 0.86rem; color: var(--text-secondary);">
              Nenhum compromisso agendado para este dia.
            </p>
          </div>
        `
        : `
          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; max-height: 380px; overflow-y: auto; padding-right: 4px;">
            ${appointments
              .map(app => {
                const student = students.find(s => s.id === app.alunoId);
                const plan = plans.find(p => p.id === app.planoId);
                const isConcluido = app.status === 'concluido';
                const isCancelado = app.status === 'cancelado';

                return `
                  <div style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; border-left: 3px solid ${isConcluido ? 'var(--status-success)' : isCancelado ? 'var(--status-danger)' : 'var(--color-coral)'};">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                      <div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <strong style="font-size: 0.88rem; color: var(--text-white);">${app.horaInicio} - ${app.horaFim}</strong>
                          <span class="badge ${isConcluido ? 'badge-success' : isCancelado ? 'badge-danger' : 'badge-warning'}" style="font-size: 0.68rem; padding: 2px 7px;">
                            ${isConcluido ? '✓ Concluído' : isCancelado ? '✕ Cancelado' : '⏳ Agendado'}
                          </span>
                        </div>
                        <div style="font-weight: 600; font-size: 0.92rem; color: var(--text-white); margin-top: 4px;">
                          ${app.titulo}
                        </div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">
                          Aluno: <strong style="color: var(--text-white);">${student?.nome || 'Não vinculado'}</strong>
                          ${plan ? ` &bull; Plano: <span style="color: #ff9187;">${plan.nome}</span>` : ''}
                        </div>
                        ${app.observacoes ? `<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">Obs: ${app.observacoes}</div>` : ''}
                      </div>

                      <div style="display: flex; gap: 6px; align-items: center;">
                        ${
                          !isConcluido && !isCancelado && hasActionPermission(user, 'agenda', 'alterar')
                            ? `<button type="button" class="btn btn-secondary btn-complete-app-day" data-id="${app.id}" title="Marcar como Concluído" style="padding: 5px 9px; font-size: 0.74rem; color: var(--status-success);">
                                 ✓ Concluir
                               </button>`
                            : ''
                        }
                        ${
                          hasActionPermission(user, 'agenda', 'alterar')
                            ? `
                              <button type="button" class="btn btn-secondary btn-icon-only btn-edit-app-day" data-id="${app.id}" title="Editar">
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
      title: `Agenda: ${formattedHeader}`,
      bodyHtml,
      cancelText: 'Fechar',
      confirmText: '' // apenas visualização e botões de ação contextuais
    });

    // Conectar eventos do modal do dia
    setTimeout(() => {
      // Botão de novo compromisso
      document.getElementById('btn-modal-new-appointment')?.addEventListener('click', () => {
        closeModal();
        openAppointmentModal(undefined, dateStr);
      });

      // Botões de ação em cada compromisso
      document.querySelectorAll('.btn-complete-app-day').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          if (id) {
            storageService.updateAppointment(id, { status: 'concluido' }, user?.nome || 'Administrador');
            showToast('Compromisso concluído!', 'success');
            buildCalendarView();
            openDayDetailsModal(dateStr);
          }
        });
      });

      document.querySelectorAll('.btn-edit-app-day').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          const app = storageService.getAppointments().find(a => a.id === id);
          if (app) {
            closeModal();
            openAppointmentModal(app, dateStr);
          }
        });
      });

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

  // Modal para Cadastrar ou Editar Compromisso
  function openAppointmentModal(existingApp?: Appointment, defaultDate?: string): void {
    const students = storageService.getStudents();
    const plans = storageService.getPlans();
    const isEditing = !!existingApp;

    const modalDate = existingApp?.data || defaultDate || storageService.getTodayDateString();

    const studentOptions = students
      .map(
        s => `<option value="${s.id}" ${existingApp?.alunoId === s.id ? 'selected' : ''}>${s.nome}</option>`
      )
      .join('');

    const planOptions = plans
      .map(
        p => `<option value="${p.id}" ${existingApp?.planoId === p.id ? 'selected' : ''}>${p.nome}</option>`
      )
      .join('');

    const bodyHtml = `
      <form id="app-modal-form">
        <div class="form-group">
          <label class="form-label" for="app-title">Título da Aula / Compromisso</label>
          <input type="text" id="app-title" class="form-input" placeholder="Ex: Aula de Violão Prático" value="${existingApp?.titulo || ''}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="app-student">Aluno</label>
          <select id="app-student" class="form-select" required>
            <option value="">Selecione o Aluno...</option>
            ${studentOptions}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-plan">Plano de Ensino (Opcional)</label>
          <select id="app-plan" class="form-select">
            <option value="">Selecione o Plano...</option>
            ${planOptions}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="app-date">Data</label>
            <input type="date" id="app-date" class="form-input" value="${modalDate}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="app-time-start">Início</label>
            <input type="time" id="app-time-start" class="form-input" value="${existingApp?.horaInicio || '09:00'}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="app-time-end">Término</label>
            <input type="time" id="app-time-end" class="form-input" value="${existingApp?.horaFim || '10:00'}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-status">Status</label>
          <select id="app-status" class="form-select">
            <option value="agendado" ${existingApp?.status === 'agendado' ? 'selected' : ''}>Agendado</option>
            <option value="concluido" ${existingApp?.status === 'concluido' ? 'selected' : ''}>Concluído</option>
            <option value="cancelado" ${existingApp?.status === 'cancelado' ? 'selected' : ''}>Cancelado</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-obs">Observações</label>
          <textarea id="app-obs" class="form-textarea" rows="2" placeholder="Notas sobre o encontro...">${existingApp?.observacoes || ''}</textarea>
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
      title: isEditing ? 'Editar Compromisso' : 'Cadastrar Novo Compromisso',
      bodyHtml,
      confirmText: isEditing ? 'Salvar Alterações' : 'Salvar Compromisso',
      onConfirm: () => {
        const title = (document.getElementById('app-title') as HTMLInputElement).value.trim();
        const studentId = (document.getElementById('app-student') as HTMLSelectElement).value;
        const planId = (document.getElementById('app-plan') as HTMLSelectElement).value;
        const date = (document.getElementById('app-date') as HTMLInputElement).value;
        const timeStart = (document.getElementById('app-time-start') as HTMLInputElement).value;
        const timeEnd = (document.getElementById('app-time-end') as HTMLInputElement).value;
        const status = (document.getElementById('app-status') as HTMLSelectElement).value as any;
        const obs = (document.getElementById('app-obs') as HTMLTextAreaElement).value.trim();

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
              observacoes: obs
            },
            currentUserName
          );
          showToast('Compromisso atualizado com sucesso!', 'success');
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
              observacoes: obs
            },
            currentUserName
          );
          showToast('Compromisso cadastrado com sucesso!', 'success');
        }

        buildCalendarView();
        return true;
      }
    });

    // Ação de excluir dentro do modal de edição
    if (isEditing && existingApp) {
      setTimeout(() => {
        document.getElementById('btn-delete-app')?.addEventListener('click', () => {
          if (confirm(`Deseja realmente excluir o compromisso "${existingApp.titulo}"?`)) {
            storageService.deleteAppointment(existingApp.id, user?.nome || 'Administrador');
            showToast('Compromisso removido.', 'info');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
            buildCalendarView();
          }
        });
      }, 50);
    }
  }

  buildCalendarView();
  return container;
}
