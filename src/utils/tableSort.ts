// Utilitário central de ordenação para as grids e tabelas do sistema Acusticamente

export type SortDirection = 'asc' | 'desc';

export interface SortState {
  column: string;
  direction: SortDirection;
}

export interface SortHeaderOptions {
  align?: 'left' | 'center' | 'right';
  extraClass?: string;
  extraStyle?: string;
  title?: string;
}

/**
 * Renderiza o elemento <th> com indicador de ordenação contendo APENAS as setas (▲ / ▼ / ▲▼).
 * Sem nenhum texto descritivo adicional conforme exigência de design.
 */
export function renderSortHeader(
  label: string,
  columnKey: string,
  currentSort: SortState,
  options?: SortHeaderOptions
): string {
  const isActive = currentSort.column === columnKey;
  const arrow = isActive ? (currentSort.direction === 'asc' ? '▲' : '▼') : '▲▼';
  const align = options?.align || 'left';
  const extraClass = options?.extraClass ? ` ${options.extraClass}` : '';
  const extraStyle = options?.extraStyle ? ` ${options.extraStyle}` : '';
  const title = options?.title || `Ordenar por ${label}`;

  const justifyContent =
    align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start';

  return `
    <th class="sortable-th${extraClass}" data-sort-key="${columnKey}" title="${title}" style="cursor: pointer; user-select: none; text-align: ${align};${extraStyle}">
      <div style="display: inline-flex; align-items: center; gap: 6px; justify-content: ${justifyContent}; width: 100%;">
        <span>${label}</span>
        <span class="sort-arrow-indicator ${isActive ? 'active' : 'inactive'}" style="font-size: 0.65rem; line-height: 1; ${
    isActive
      ? 'color: var(--color-coral); opacity: 1; font-weight: 700;'
      : 'opacity: 0.35; color: inherit;'
  }">
          ${arrow}
        </span>
      </div>
    </th>
  `;
}

/**
 * Registra os eventos de clique em todos os <th> ordenáveis dentro do contêiner.
 */
export function attachSortEvents(
  container: HTMLElement | Document,
  currentSort: SortState,
  onSortChange: (newSort: SortState) => void
): void {
  container.querySelectorAll('.sortable-th[data-sort-key]').forEach(th => {
    th.addEventListener('click', e => {
      e.stopPropagation();
      const colKey = (th as HTMLElement).dataset.sortKey;
      if (!colKey) return;

      if (currentSort.column === colKey) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.column = colKey;
        currentSort.direction = 'asc';
      }

      onSortChange({ ...currentSort });
    });
  });
}

/**
 * Ordena um array de itens com base na coluna ativa e direção.
 * Suporta strings com acentos (pt-BR), números, datas ISO e valores nulos/indefinidos.
 */
export function sortItems<T>(
  items: T[],
  sortState: SortState,
  extractors: Record<string, (item: T) => any>
): T[] {
  if (!sortState.column || !extractors[sortState.column]) {
    return items;
  }

  const extractor = extractors[sortState.column];
  const mult = sortState.direction === 'asc' ? 1 : -1;

  return [...items].sort((a, b) => {
    let valA = extractor(a);
    let valB = extractor(b);

    if (valA == null && valB == null) return 0;
    if (valA == null) return 1 * mult;
    if (valB == null) return -1 * mult;

    // Se ambos forem strings
    if (typeof valA === 'string' && typeof valB === 'string') {
      return (
        valA.localeCompare(valB, 'pt-BR', {
          numeric: true,
          sensitivity: 'base'
        }) * mult
      );
    }

    // Se ambos forem números
    if (typeof valA === 'number' && typeof valB === 'number') {
      return (valA - valB) * mult;
    }

    // Se ambos forem booleanos
    if (typeof valA === 'boolean' && typeof valB === 'boolean') {
      return ((valA === valB) ? 0 : valA ? 1 : -1) * mult;
    }

    // Comparação genérica
    if (valA < valB) return -1 * mult;
    if (valA > valB) return 1 * mult;
    return 0;
  });
}
