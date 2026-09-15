import { auditService } from '../services/auditService';
import { ICONS } from '../utils/ui';

export function renderAuditoria(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  
  // Por padrão, seleciona a data de hoje
  let filterDate: Date | null = new Date();
  let selectedTela = 'todos';
  let searchTerm = '';

  const pad = (n: number) => n.toString().padStart(2, '0');

  function formatDisplayDate(date: Date): string {
    const day = date.getDate();
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const today = new Date();
    const isToday =
      today.getDate() === day &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === year;

    return `${day} de ${month} de ${year}${isToday ? ' (Hoje)' : ''}`;
  }

  function toInputDateValue(date: Date): string {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function renderTable(): void {
    const allLogs = auditService.getLogs();
    const today = new Date();
    const todayStr = `${pad(today.getDate())}/${pad(today.getMonth() + 1)}/${today.getFullYear()}`;
    const todayCount = allLogs.filter(log => log.dataHoraFormatada?.startsWith(todayStr)).length;

    const selectedDateStr = filterDate
      ? `${pad(filterDate.getDate())}/${pad(filterDate.getMonth() + 1)}/${filterDate.getFullYear()}`
      : '';

    const isTodaySelected =
      filterDate !== null &&
      today.getDate() === filterDate.getDate() &&
      today.getMonth() === filterDate.getMonth() &&
      today.getFullYear() === filterDate.getFullYear();

    const filteredLogs = allLogs.filter(log => {
      // Filtro de data
      const matchDate =
        !filterDate ||
        (log.dataHoraFormatada && log.dataHoraFormatada.startsWith(selectedDateStr)) ||
        (log.dataHora && log.dataHora.startsWith(toInputDateValue(filterDate)));

      // Filtro de tela
      const matchTela =
        selectedTela === 'todos' || log.tela.toLowerCase().includes(selectedTela.toLowerCase());

      // Filtro de texto
      const matchSearch =
        searchTerm === '' ||
        log.usuarioNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.usuarioLogin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.acao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.detalhes.toLowerCase().includes(searchTerm.toLowerCase());

      return matchDate && matchTela && matchSearch;
    });

    container.innerHTML = `
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Auditoria do Sistema
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Rastreabilidade integral de todas as alterações com data, hora, ação e usuário responsável.
          </p>
        </div>

        <div style="font-size: 0.82rem; color: var(--text-muted); background: var(--bg-surface); padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; gap: 10px; align-items: center;">
          <span>Hoje: <strong style="color: var(--color-coral);">${todayCount}</strong></span>
          <span style="color: var(--border-subtle);">|</span>
          <span>Total Geral: <strong style="color: var(--text-white);">${allLogs.length}</strong></span>
        </div>
      </div>

      <!-- Barra de Controle de Data (Igual à Agenda) -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group">
          <h2 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem;">
            ${filterDate ? formatDisplayDate(filterDate) : 'Todo o Histórico'}
          </h2>
          
          <div class="calendar-nav-buttons">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior">
              ◀
            </button>
            <button type="button" class="btn ${isTodaySelected ? 'btn-primary' : 'btn-secondary'}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
              Hoje
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-next" title="Próximo dia">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" class="btn ${filterDate === null ? 'btn-primary' : 'btn-secondary'}" id="audit-btn-all" style="padding: 6px 14px; font-size: 0.8rem;" title="Exibir todo o histórico sem filtrar por data">
            Ver Todos
          </button>
          <input 
            type="date" 
            id="audit-date-picker" 
            class="form-input" 
            style="padding: 5px 10px; font-size: 0.8rem; width: auto; color: var(--text-white); background: var(--bg-card);" 
            value="${filterDate ? toInputDateValue(filterDate) : ''}" 
            title="Selecionar data específica"
          />
        </div>
      </div>

      <!-- Filtros e Barra de Busca -->
      <div style="margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <div style="position: relative; flex: 1; min-width: 260px; max-width: 380px;">
          <input 
            type="text" 
            id="audit-search-input" 
            class="form-input" 
            placeholder="Pesquisar por ação, usuário ou detalhe..." 
            value="${searchTerm}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${ICONS.search}
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${['todos', 'login', 'agenda', 'alunos', 'usuários', 'plano', 'configurações']
            .map(t => {
              const isActive = selectedTela.toLowerCase() === t;
              const label = t === 'todos' ? 'Todas as Telas' : t.charAt(0).toUpperCase() + t.slice(1);
              return `
                <button type="button" class="btn ${isActive ? 'btn-primary' : 'btn-secondary'} btn-filter-tela" data-tela="${t}" style="padding: 6px 14px; font-size: 0.8rem;">
                  ${label}
                </button>
              `;
            })
            .join('')}
        </div>
      </div>

      <!-- Tabela de Auditoria -->
      <div class="panel-card">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros de Auditoria (${filteredLogs.length})
            ${filterDate ? `<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary); margin-left: 8px;">— ${selectedDateStr}</span>` : ''}
          </h3>
          ${
            filterDate !== null
              ? `<span style="font-size: 0.76rem; color: var(--text-muted);">Filtrando por: <strong>${selectedDateStr}</strong></span>`
              : `<span style="font-size: 0.76rem; color: var(--text-muted);">Exibindo: <strong>Todo o Histórico</strong></span>`
          }
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 170px;">Data &amp; Hora</th>
                <th style="width: 180px;">Usuário Responsável</th>
                <th style="width: 150px;">Tela / Módulo</th>
                <th style="width: 180px;">Ação Executada</th>
                <th>Detalhes da Alteração</th>
              </tr>
            </thead>
            <tbody>
              ${
                filteredLogs.length === 0
                  ? `
                    <tr>
                      <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 42px;">
                        <div style="font-size: 1.8rem; margin-bottom: 8px;">📋</div>
                        <div>Nenhum registro de auditoria encontrado para ${filterDate ? `o dia <strong>${selectedDateStr}</strong>` : 'o filtro selecionado'}.</div>
                        ${
                          filterDate !== null
                            ? `<button type="button" class="btn btn-secondary btn-sm" id="audit-empty-btn-all" style="margin-top: 12px; font-size: 0.78rem;">
                                Ver todo o histórico
                              </button>`
                            : ''
                        }
                      </td>
                    </tr>
                  `
                  : filteredLogs
                      .map(log => {
                        return `
                          <tr>
                            <td>
                              <div style="font-family: monospace; font-size: 0.84rem; color: var(--text-white);">
                                ${log.dataHoraFormatada}
                              </div>
                            </td>
                            <td>
                              <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--color-coral);">
                                  ${log.usuarioNome[0] || 'U'}
                                </div>
                                <div>
                                  <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-white);">${log.usuarioNome}</div>
                                  <div style="font-size: 0.72rem; color: var(--text-muted);">login: ${log.usuarioLogin}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 4px;">
                                ${log.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.85rem; color: #ff9187;">
                                ${log.acao}
                              </strong>
                            </td>
                            <td>
                              <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
                                ${log.detalhes}
                              </span>
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

    // Conectar eventos do seletor de data
    container.querySelector('#audit-btn-prev')?.addEventListener('click', () => {
      if (!filterDate) {
        filterDate = new Date();
      }
      filterDate.setDate(filterDate.getDate() - 1);
      renderTable();
    });

    container.querySelector('#audit-btn-next')?.addEventListener('click', () => {
      if (!filterDate) {
        filterDate = new Date();
      }
      filterDate.setDate(filterDate.getDate() + 1);
      renderTable();
    });

    container.querySelector('#audit-btn-today')?.addEventListener('click', () => {
      filterDate = new Date();
      renderTable();
    });

    container.querySelector('#audit-btn-all')?.addEventListener('click', () => {
      filterDate = null;
      renderTable();
    });

    container.querySelector('#audit-empty-btn-all')?.addEventListener('click', () => {
      filterDate = null;
      renderTable();
    });

    container.querySelector('#audit-date-picker')?.addEventListener('change', (e) => {
      const val = (e.target as HTMLInputElement).value;
      if (val) {
        const [y, m, d] = val.split('-').map(Number);
        filterDate = new Date(y, m - 1, d);
      } else {
        filterDate = null;
      }
      renderTable();
    });

    // Conectar busca
    const searchInp = container.querySelector('#audit-search-input') as HTMLInputElement;
    searchInp?.addEventListener('input', (e) => {
      searchTerm = (e.target as HTMLInputElement).value;
      renderTable();
      const newInp = container.querySelector('#audit-search-input') as HTMLInputElement;
      if (newInp) {
        newInp.focus();
        newInp.selectionStart = newInp.selectionEnd = newInp.value.length;
      }
    });

    // Conectar filtros de tela
    container.querySelectorAll('.btn-filter-tela').forEach(btn => {
      btn.addEventListener('click', (e) => {
        selectedTela = (e.currentTarget as HTMLElement).dataset.tela || 'todos';
        renderTable();
      });
    });
  }

  // Ouvinte para recarregar caso novas auditorias cheguem em tempo real
  const onAuditUpdated = () => {
    renderTable();
  };
  window.addEventListener('audit_updated', onAuditUpdated);

  renderTable();
  return container;
}

