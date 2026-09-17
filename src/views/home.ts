import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { ICONS, showToast } from '../utils/ui';

export function renderHome(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  const students = storageService.getStudents();
  const plans = storageService.getPlans();
  const appointments = storageService.getAppointments();

  const todayStr = storageService.getTodayDateString();
  const todayAppointments = appointments.filter(a => a.data === todayStr);

  const activeStudentsCount = students.filter(s => s.status === 'ativo').length;
  const nextApp = todayAppointments.find(a => a.status === 'agendado');

  container.innerHTML = `
    <!-- Cabeçalho de Boas-vindas -->
    <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
      <div>
        <h2 style="font-family: var(--font-heading); font-size: 1.28rem; font-weight: 700; color: var(--text-white);">
          Olá, ${user?.nome || 'Administrador'}
        </h2>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 3px;">
          Aqui está o resumo das suas atividades e aulas de hoje.
        </p>
      </div>

      <button class="btn btn-primary" id="home-btn-new-appointment">
        ${ICONS.plus} Novo Agendamento
      </button>
    </div>

    <!-- Cards de Métricas -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon-box">
          ${ICONS.agenda}
        </div>
        <div class="metric-data">
          <span class="metric-value">${todayAppointments.length}</span>
          <span class="metric-label">Aulas hoje</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${ICONS.alunos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${activeStudentsCount}</span>
          <span class="metric-label">Alunos ativos</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${ICONS.home}
        </div>
        <div class="metric-data">
          <span class="metric-value">${nextApp ? nextApp.horaInicio : '--:--'}</span>
          <span class="metric-label">${nextApp ? 'Próxima aula' : 'Nenhuma pendente'}</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon-box">
          ${ICONS.planos}
        </div>
        <div class="metric-data">
          <span class="metric-value">${plans.length}</span>
          <span class="metric-label">Planos de ensino</span>
        </div>
      </div>
    </div>

    <!-- Tabela de Aulas de Hoje -->
    <div class="panel-card">
      <div class="panel-card-header">
        <h3 class="panel-card-title">Aulas de Hoje (${todayAppointments.length})</h3>
        <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
          Ver Agenda Completa
        </button>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="min-width: 100px;">Horário</th>
              <th>Aluno</th>
              <th class="col-hide-md">Plano de Ensino</th>
              <th class="col-hide-sm">Status</th>
              <th style="width: 100px; text-align: right;">Ações</th>
            </tr>
          </thead>
          <tbody id="today-classes-tbody">
            ${
              todayAppointments.length === 0
                ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>`
                : todayAppointments
                    .map(app => {
                      const student = students.find(s => s.id === app.alunoId);
                      const plan = plans.find(p => p.id === app.planoId);
                      const isConcluido = app.status === 'concluido';
                      const isPendente = app.status === 'agendado';

                      let statusBadge = `<span class="badge badge-warning">⏳ Agendado</span>`;
                      if (isConcluido) {
                        statusBadge = `<span class="badge badge-success">✓ Concluído</span>`;
                      } else if (app.status === 'falta_justificada') {
                        statusBadge = `<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">⚠️ Falta Justificada</span>`;
                      } else if (app.status === 'falta_injustificada') {
                        statusBadge = `<span class="badge badge-danger">✕ Falta Injustificada</span>`;
                      } else if (app.status === 'cancelado') {
                        statusBadge = `<span class="badge badge-secondary">🚫 Cancelado</span>`;
                      }

                      return `
                        <tr data-app-id="${app.id}">
                          <td style="white-space: nowrap;">
                            <strong style="color: var(--text-white); font-size: 0.84rem;">${app.horaInicio} - ${app.horaFim}</strong>
                            ${
                              app.tipoAula === 'reposicao'
                                ? `<span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); font-size: 0.68rem; margin-left: 4px;">🔄 Reposição</span>`
                                : ''
                            }
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <div style="width: 24px; height: 24px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                ${(student?.nome || 'A')[0]}
                              </div>
                              <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${student?.nome || 'Aluno não vinculado'}
                              </span>
                            </div>
                          </td>
                          <td class="col-hide-md" style="white-space: nowrap;">
                            <span style="color: var(--text-secondary); font-size: 0.82rem;">${plan?.nome || 'Plano Personalizado'}</span>
                          </td>
                          <td class="col-hide-sm" style="white-space: nowrap;">
                            ${statusBadge}
                          </td>
                          <td style="text-align: right; white-space: nowrap;">
                            ${
                              isPendente
                                ? `<button class="btn btn-secondary btn-complete-class" data-id="${app.id}" style="padding: 4px 10px; font-size: 0.76rem; color: var(--status-success);">
                                     ✓ Concluir
                                   </button>`
                                : `<span style="font-size: 0.76rem; color: var(--text-muted);">${isConcluido ? 'Finalizada' : 'Registrada'}</span>`
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

  // Eventos
  container.querySelector('#home-btn-new-appointment')?.addEventListener('click', () => {
    onNavigate('agenda');
  });

  container.querySelector('#home-btn-view-all-agenda')?.addEventListener('click', () => {
    onNavigate('agenda');
  });

  container.querySelectorAll('.btn-complete-class').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).dataset.id;
      if (id) {
        storageService.updateAppointment(id, { status: 'concluido' }, user?.nome || 'Administrador');
        showToast('Aula concluída com sucesso!', 'success');
        // Recarrega tela
        onNavigate('home');
      }
    });
  });

  return container;
}
