import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { ICONS, showToast } from '../utils/ui';
import { renderSortHeader, attachSortEvents, sortItems, SortState } from '../utils/tableSort';

const MONTH_NAMES_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

interface BirthdayPerson {
  id: string;
  nome: string;
  tipo: 'Aluno' | 'Professor' | 'ADM';
  day: number;
  month: number;
  year: number;
  age: number;
  phone: string;
  isToday: boolean;
}

function parseBirthDate(dateStr?: string): { day: number; month: number; year: number } | null {
  if (!dateStr) return null;
  const str = dateStr.trim();
  if (!str) return null;

  // DD/MM/YYYY
  if (/^\d{1,2}\/\d{1,2}\/\d{4}/.test(str)) {
    const [d, m, y] = str.split('/');
    const day = parseInt(d, 10);
    const month = parseInt(m, 10);
    const year = parseInt(y, 10);
    if (!isNaN(day) && !isNaN(month) && !isNaN(year) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return { day, month, year };
    }
  }

  // YYYY-MM-DD (ou ISO)
  if (/^\d{4}-\d{1,2}-\d{1,2}/.test(str)) {
    const parts = str.split('T')[0].split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (!isNaN(day) && !isNaN(month) && !isNaN(year) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return { day, month, year };
    }
  }

  return null;
}

function getBirthdayWhatsAppUrl(b: BirthdayPerson, settings: any): string {
  const digits = b.phone.replace(/\D/g, '');
  if (!digits) return '';
  const num = digits.length <= 11 ? `55${digits}` : digits;
  const firstName = b.nome.trim().split(' ')[0] || b.nome;

  let template = '';
  if (b.tipo === 'Aluno') {
    template = settings?.msgAniversarioAluno || 'Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Que seu novo ciclo seja repleto de realizações, saúde, alegria e muita música! Parabéns pelo seu dia! 🎶✨';
  } else if (b.tipo === 'Professor') {
    template = settings?.msgAniversarioProfessor || 'Olá, Prof. {nome}! 🎂🎉 Toda a equipe da Acusticamente te deseja um Feliz Aniversário! Muito obrigado por sua dedicação musical e talento. Que você tenha um ano repleto de sucesso e realizações! 🎶✨';
  } else {
    template = settings?.msgAniversarioAdmin || 'Olá, {nome}! 🎂🎉 A equipe da Acusticamente passa para te desejar um Feliz Aniversário! Muito sucesso, liderança, saúde e grandes conquistas neste novo ciclo! Parabéns! 🎶✨';
  }

  const message = template.replace(/{nome}/g, firstName);
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export function renderHome(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  const students = storageService.getStudents();
  const users = storageService.getUsers();
  const plans = storageService.getPlans();
  const appointments = storageService.getAppointments();
  const settings = storageService.getSettings();

  const todayStr = storageService.getTodayDateString();
  const todayAppointments = appointments.filter(a => a.data === todayStr);

  const activeStudentsCount = students.filter(s => s.status === 'ativo').length;
  const nextApp = todayAppointments.find(a => a.status === 'agendado');

  let sortState: SortState = { column: 'horario', direction: 'asc' };

  function renderView(): void {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const currentMonthName = MONTH_NAMES_PT[now.getMonth()];
    const schoolName = settings?.nomeEscola || 'Acusticamente - Escola de Música';

    const birthdays: BirthdayPerson[] = [];
    const seenBirthdayIds = new Set<string>();

    students.forEach(s => {
      if (seenBirthdayIds.has(s.id)) return;
      const parsed = parseBirthDate(s.dataNascimento);
      if (parsed && parsed.month === currentMonth) {
        seenBirthdayIds.add(s.id);
        birthdays.push({
          id: s.id,
          nome: s.nome,
          tipo: 'Aluno',
          day: parsed.day,
          month: parsed.month,
          year: parsed.year,
          age: currentYear - parsed.year,
          phone: s.telefone || s.responsavelTelefone || '',
          isToday: parsed.day === currentDay
        });
      }
    });

    users.forEach(u => {
      if (seenBirthdayIds.has(u.id)) return;
      const parsed = parseBirthDate(u.dataNascimento);
      if (parsed && parsed.month === currentMonth) {
        seenBirthdayIds.add(u.id);
        birthdays.push({
          id: u.id,
          nome: u.nome,
          tipo: u.papel === 'admin' ? 'ADM' : u.papel === 'professor' ? 'Professor' : 'ADM',
          day: parsed.day,
          month: parsed.month,
          year: parsed.year,
          age: currentYear - parsed.year,
          phone: '',
          isToday: parsed.day === currentDay
        });
      }
    });

    birthdays.sort((a, b) => a.day - b.day);
    const todayBirthdaysCount = birthdays.filter(b => b.isToday).length;

    const sortedAppointments = sortItems(todayAppointments, sortState, {
      horario: a => a.horaInicio,
      aluno: a => {
        const s = students.find(stud => stud.id === a.alunoId);
        return s?.nome || '';
      },
      plano: a => {
        const p = plans.find(plan => plan.id === a.planoId);
        return p?.nome || '';
      },
      status: a => a.status
    });

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

      <!-- Painel de Aniversariantes do Mês -->
      <div class="panel-card" style="margin-bottom: 20px;">
        <div class="panel-card-header" style="padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.05rem;">🎂</span>
            <h3 class="panel-card-title" style="font-size: 0.92rem; font-weight: 600; color: var(--text-white);">
              Aniversariantes do Mês (${currentMonthName})
            </h3>
            <span class="badge ${birthdays.length > 0 ? 'badge-info' : 'badge-secondary'}" style="font-size: 0.7rem;">
              ${birthdays.length} ${birthdays.length === 1 ? 'aniversariante' : 'aniversariantes'}
            </span>
          </div>

          ${
            todayBirthdaysCount > 0
              ? `<span class="badge badge-coral" style="font-size: 0.72rem;">🎉 ${todayBirthdaysCount} comemorando hoje!</span>`
              : ''
          }
        </div>

        <div style="padding: 12px 18px;">
          ${
            birthdays.length === 0
              ? `<div style="padding: 12px 0; text-align: center; color: var(--text-muted); font-size: 0.82rem;">
                   Nenhum aniversariante registrado em ${currentMonthName}.
                 </div>`
              : `<div style="display: flex; flex-direction: column; gap: 8px; max-height: 260px; overflow-y: auto;">
                   ${birthdays
                     .map(b => {
                       const waUrl = b.phone ? getBirthdayWhatsAppUrl(b, settings) : '';
                       const isToday = b.isToday;

                       return `
                         <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; background: ${isToday ? 'rgba(234, 67, 53, 0.08)' : 'rgba(255, 255, 255, 0.02)'}; border: 1px solid ${isToday ? 'rgba(234, 67, 53, 0.28)' : 'var(--border-subtle)'}; border-radius: var(--radius-md); flex-wrap: wrap;">
                           
                           <!-- Lado Esquerdo: Dia, Nome, Idade e Tipo -->
                           <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                             <div style="min-width: 44px; height: 36px; padding: 0 4px; border-radius: var(--radius-sm); background: ${isToday ? 'var(--color-coral)' : 'rgba(255, 255, 255, 0.04)'}; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid ${isToday ? 'transparent' : 'rgba(255, 255, 255, 0.06)'};">
                               <span style="font-size: 0.58rem; text-transform: uppercase; font-weight: 700; color: ${isToday ? '#ffffff' : 'var(--text-muted)'}; line-height: 1;">DIA</span>
                               <span style="font-size: 0.92rem; font-weight: 700; color: ${isToday ? '#ffffff' : 'var(--text-white)'}; line-height: 1.1;">${String(b.day).padStart(2, '0')}</span>
                             </div>

                             <div style="display: flex; flex-direction: column; min-width: 0;">
                               <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                                 <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-white); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                   ${b.nome}
                                 </span>
                                 ${isToday ? `<span class="badge badge-coral" style="font-size: 0.64rem; padding: 2px 5px;">Hoje! 🎂</span>` : ''}
                                 <span class="badge ${b.tipo === 'Aluno' ? 'badge-info' : b.tipo === 'Professor' ? 'badge-warning' : 'badge-coral'}" style="font-size: 0.65rem; padding: 2px 6px; font-weight: 700;">
                                   ${b.tipo}
                                 </span>
                               </div>
                               <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 2px;">
                                 ${b.age > 0 ? `Completa <strong style="color: var(--text-white);">${b.age} anos</strong>` : ''}
                                 ${b.phone ? `<span style="color: var(--text-muted); margin-left: 6px;">• ${b.phone}</span>` : ''}
                               </div>
                             </div>
                           </div>

                           <!-- Lado Direito: Botão WhatsApp de Parabéns (Disponível apenas no dia) -->
                           <div>
                             ${
                               !b.phone
                                 ? `<span style="font-size: 0.72rem; color: var(--text-muted); font-style: italic; white-space: nowrap;">Sem WhatsApp</span>`
                                 : b.isToday
                                   ? `<a 
                                        href="${waUrl}" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="btn btn-sm" 
                                        title="Enviar mensagem de parabéns pelo WhatsApp hoje"
                                        style="display: inline-flex; align-items: center; gap: 6px; background: rgba(37, 211, 102, 0.15); color: #25d366; border: 1px solid rgba(37, 211, 102, 0.35); text-decoration: none; padding: 6px 14px; font-size: 0.78rem; font-weight: 600; border-radius: var(--radius-sm); transition: all var(--transition-fast); white-space: nowrap;"
                                        onmouseover="this.style.background='#25d366'; this.style.color='#ffffff';"
                                        onmouseout="this.style.background='rgba(37, 211, 102, 0.15)'; this.style.color='#25d366';"
                                      >
                                        ${ICONS.whatsapp} Parabenizar
                                      </a>`
                                   : `<button 
                                        type="button" 
                                        class="btn btn-sm" 
                                        disabled 
                                        title="O envio de parabéns fica liberado apenas no dia do aniversário (${String(b.day).padStart(2, '0')}/${String(b.month).padStart(2, '0')})"
                                        style="opacity: 0.45; cursor: not-allowed; display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.04); color: var(--text-muted); border: 1px solid var(--border-subtle); padding: 5px 12px; font-size: 0.76rem; border-radius: var(--radius-sm); white-space: nowrap;"
                                      >
                                        ${ICONS.whatsapp} Disponível no dia ${String(b.day).padStart(2, '0')}
                                      </button>`
                             }
                           </div>
                         </div>
                       `;
                     })
                     .join('')}
                 </div>`
          }
        </div>
      </div>

      <!-- Tabela de Aulas de Hoje -->
      <div class="panel-card">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Aulas de Hoje (${sortedAppointments.length})</h3>
          <button class="btn btn-secondary" id="home-btn-view-all-agenda" style="padding: 6px 14px; font-size: 0.82rem;">
            Ver Agenda Completa
          </button>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${renderSortHeader('Horário', 'horario', sortState, { extraStyle: 'min-width: 100px;' })}
                ${renderSortHeader('Aluno', 'aluno', sortState)}
                ${renderSortHeader('Plano de Ensino', 'plano', sortState, { extraClass: 'col-hide-md' })}
                ${renderSortHeader('Status', 'status', sortState, { extraClass: 'col-hide-sm' })}
                <th style="width: 100px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody id="today-classes-tbody">
              ${
                sortedAppointments.length === 0
                  ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">Nenhuma aula agendada para hoje.</td></tr>`
                  : sortedAppointments
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
    attachSortEvents(container, sortState, (newSort) => {
      sortState = newSort;
      renderView();
    });

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
          onNavigate('home');
        }
      });
    });
  }

  renderView();
  return container;
}
