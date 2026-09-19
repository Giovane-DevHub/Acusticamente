import { auditService } from '../services/auditService';
import { storageService } from '../services/storageService';
import { ICONS } from '../utils/ui';
import { renderSortHeader, attachSortEvents, sortItems, SortState } from '../utils/tableSort';

export function renderAuditoria(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  
  // Por padrão, seleciona a data de hoje
  let filterDate: Date | null = new Date();
  let searchTerm = '';
  let sortState: SortState = { column: 'dataHora', direction: 'desc' };

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

      // Filtro de texto (tela, usuário, ação ou detalhe)
      const matchSearch =
        searchTerm === '' ||
        log.tela.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.usuarioNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.usuarioLogin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.acao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.detalhes.toLowerCase().includes(searchTerm.toLowerCase());

      return matchDate && matchSearch;
    });

    const sortedLogs = sortItems(filteredLogs, sortState, {
      dataHora: log => log.dataHora,
      usuario: log => log.usuarioNome,
      tela: log => log.tela,
      acao: log => log.acao,
      detalhes: log => log.detalhes
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

        <div style="display: flex; align-items: center; gap: 10px;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-clear-all-audit" disabled style="display: none; color: #ff6b6b; border-color: rgba(255,107,107,0.3); font-size: 0.78rem;" title="Zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria)">
            🗑️ Zerar Base de Dados
          </button>
        </div>
      </div>

      <!-- Barra de Controle de Período (Dia) Padronizada -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div class="calendar-title-group" style="display: flex; align-items: center; gap: 14px;">
          <h3 class="calendar-month-title" style="min-width: 220px; font-size: 1.05rem; margin: 0; font-weight: 700;">
            ${filterDate ? formatDisplayDate(filterDate) : 'Todo o Histórico'}
          </h3>
          
          <div class="calendar-nav-buttons" style="display: flex; gap: 4px;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-prev" title="Dia anterior" style="width: 28px; height: 28px; padding: 0;">
              ◀
            </button>
            <button type="button" class="btn ${isTodaySelected ? 'btn-primary' : 'btn-secondary'}" id="audit-btn-today" style="padding: 6px 14px; font-size: 0.8rem;">
              Hoje (${todayCount})
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only" id="audit-btn-next" title="Próximo dia" style="width: 28px; height: 28px; padding: 0;">
              ▶
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <input 
            type="date" 
            id="audit-date-picker" 
            class="form-input" 
            value="${filterDate ? toInputDateValue(filterDate) : ''}"
            style="width: 140px; padding: 6px 10px; font-size: 0.8rem;"
          />
          <button type="button" class="btn ${filterDate === null ? 'btn-primary' : 'btn-secondary'}" id="audit-btn-all" style="padding: 6px 14px; font-size: 0.8rem;" title="Ver todos os registros sem filtrar por data">
            Ver Todos (${allLogs.length})
          </button>
        </div>
      </div>

      <!-- Barra de Filtros Rápidos / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="audit-search-input" 
            class="form-input" 
            placeholder="Buscar por tela, ação, usuário ou detalhe..." 
            value="${searchTerm}"
            style="padding-left: 36px;"
          />
          <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
            ${ICONS.search}
          </div>
        </div>
        ${
          searchTerm
            ? `<button class="btn btn-secondary btn-sm" id="btn-clear-audit-search">Limpar</button>`
            : ''
        }
      </div>

      <!-- TABELA DE LOGS -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3 class="panel-card-title">
            Registros Encontrados (${sortedLogs.length})
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
                ${renderSortHeader('Data &amp; Hora', 'dataHora', sortState, { extraStyle: 'min-width: 120px;' })}
                ${renderSortHeader('Usuário Responsável', 'usuario', sortState, { extraClass: 'col-hide-sm', extraStyle: 'width: 180px;' })}
                ${renderSortHeader('Tela / Módulo', 'tela', sortState, { extraClass: 'col-hide-md', extraStyle: 'width: 130px;' })}
                ${renderSortHeader('Ação Executada', 'acao', sortState)}
                ${renderSortHeader('Detalhes da Alteração', 'detalhes', sortState, { extraClass: 'col-hide-sm' })}
              </tr>
            </thead>
            <tbody>
              ${
                sortedLogs.length === 0
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
                  : sortedLogs
                      .map(log => {
                        return `
                          <tr>
                            <td style="white-space: nowrap;">
                              <span style="font-family: monospace; font-size: 0.82rem; color: var(--text-white);">
                                ${log.dataHoraFormatada}
                              </span>
                            </td>
                            <td class="col-hide-sm">
                              <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: #2b2e3e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: var(--color-coral); flex-shrink: 0;">
                                  ${log.usuarioNome[0] || 'U'}
                                </div>
                                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-white);">${log.usuarioNome}</span>
                                <span style="font-size: 0.74rem; color: var(--text-muted);">(${log.usuarioLogin})</span>
                              </div>
                            </td>
                            <td class="col-hide-md">
                              <span class="badge" style="background: rgba(255,255,255,0.06); font-size: 0.74rem; white-space: nowrap;">
                                ${log.tela}
                              </span>
                            </td>
                            <td>
                              <strong style="font-size: 0.82rem; color: #ff9187;">
                                ${log.acao}
                              </strong>
                            </td>
                            <td class="col-hide-sm">
                              <span style="font-size: 0.82rem; color: var(--text-secondary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 480px;" title="${log.detalhes}">
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

    container.querySelector('#btn-clear-audit-search')?.addEventListener('click', () => {
      searchTerm = '';
      renderTable();
    });

    attachSortEvents(container, sortState, (newSort) => {
      sortState = newSort;
      renderTable();
    });

    container.querySelector('#btn-clear-all-audit')?.addEventListener('click', async () => {
      if (confirm('Deseja realmente zerar toda a base de dados (alunos, agenda, financeiro, planos e auditoria) local e no MongoDB? Esta ação é definitiva.')) {
        await storageService.resetCleanDatabase('Administrador');
        renderTable();
      }
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

