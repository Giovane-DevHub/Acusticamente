import { storageService } from '../services/storageService';
import { authService, getUserPermissions, DEFAULT_PERMISSIONS_BY_ROLE } from '../services/authService';
import { User, UserRole, UserPermissions } from '../types';
import { ICONS, openModal, showToast, confirmAction, applyInputMask, maskDate } from '../utils/ui';
import { renderSortHeader, attachSortEvents, sortItems, SortState } from '../utils/tableSort';

export const PERMISSION_GROUPS: {
  key: keyof UserPermissions;
  title: string;
  icon: string;
  items: { key: string; label: string }[];
}[] = [
    {
      key: 'alunos',
      title: 'Alunos',
      icon: '👥',
      items: [
        { key: 'acesso', label: 'Acesso ao formulário de alunos' },
        { key: 'cadastrar', label: 'Cadastrar novo aluno' },
        { key: 'alterar', label: 'Alterar aluno' },
        { key: 'excluir', label: 'Excluir aluno' }
      ]
    },
    {
      key: 'agenda',
      title: 'Agenda',
      icon: '📅',
      items: [
        { key: 'acesso', label: 'Acesso ao formulário de agenda' },
        { key: 'cadastrar', label: 'Criar novo agendamento' },
        { key: 'alterar', label: 'Alterar agendamento' },
        { key: 'excluir', label: 'Excluir agendamento' }
      ]
    },
    {
      key: 'planos',
      title: 'Planos de Ensino',
      icon: '🎵',
      items: [
        { key: 'acesso', label: 'Acesso ao formulário de planos de ensino' },
        { key: 'cadastrar', label: 'Cadastrar novo plano' },
        { key: 'alterar', label: 'Alterar plano e módulos' },
        { key: 'excluir', label: 'Excluir plano de ensino' }
      ]
    },
    {
      key: 'financeiro',
      title: 'Financeiro',
      icon: '💰',
      items: [
        { key: 'acesso', label: 'Acesso ao módulo financeiro e mensalidades' },
        { key: 'cadastrar', label: 'Lançar novos pagamentos e gerar mensalidades' },
        { key: 'alterar', label: 'Dar baixa e alterar lançamentos' },
        { key: 'excluir', label: 'Excluir registros financeiros' }
      ]
    },
    {
      key: 'planosPagamento',
      title: 'Planos de Pagamento',
      icon: '💳',
      items: [
        { key: 'acesso', label: 'Acesso ao módulo de planos de pagamento' },
        { key: 'cadastrar', label: 'Cadastrar novo plano de pagamento' },
        { key: 'alterar', label: 'Alterar modalidades, ciclos e valores' },
        { key: 'excluir', label: 'Excluir plano de pagamento' }
      ]
    },
    {
      key: 'relatorios',
      title: 'Relatórios',
      icon: '📊',
      items: [
        { key: 'acesso', label: 'Acesso ao módulo de relatórios' },
        { key: 'gerar', label: 'Gerar e emitir relatórios em PDF' }
      ]
    },
    {
      key: 'home',
      title: 'Início',
      icon: '🏠',
      items: [
        { key: 'acesso', label: 'Acesso ao formulário da página inicial (Início)' }
      ]
    },
    {
      key: 'auditoria',
      title: 'Auditoria',
      icon: '📋',
      items: [
        { key: 'acesso', label: 'Acesso ao formulário de auditoria' }
      ]
    },
    {
      key: 'configuracoes',
      title: 'Configurações',
      icon: '⚙️',
      items: [
        { key: 'acesso', label: 'Acesso ao formulário de configurações' },
        { key: 'alterar', label: 'Alterar dados e parâmetros do sistema' }
      ]
    }
  ];

export const TOTAL_SYSTEM_PERMISSIONS = PERMISSION_GROUPS.reduce((acc, g) => acc + g.items.length, 0);

export function countGrantedPermissions(perms: UserPermissions): number {
  let count = 0;
  PERMISSION_GROUPS.forEach(g => {
    const groupPerms = perms[g.key] as any;
    if (groupPerms) {
      g.items.forEach(item => {
        if (groupPerms[item.key]) count++;
      });
    }
  });
  return count;
}

export function renderUser(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const loggedUser = authService.getCurrentUser();

  // Apenas administradores têm acesso à tela de usuários
  if (loggedUser?.papel !== 'admin') {
    container.innerHTML = `
      <div class="panel-card" style="padding: 50px 24px; text-align: center; max-width: 540px; margin: 40px auto;">
        <div style="font-size: 3rem; margin-bottom: 16px;">🔒</div>
        <h2 style="color: var(--color-coral); font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 10px;">
          Acesso Restrito ao Administrador
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5; margin-bottom: 24px;">
          Apenas usuários com perfil de <strong>Administrador</strong> possuem autorização para visualizar, cadastrar e gerenciar operadores e permissões de acesso do sistema.
        </p>
        <button class="btn btn-primary" id="btn-unauth-home">
          Voltar para a Página Inicial
        </button>
      </div>
    `;
    container.querySelector('#btn-unauth-home')?.addEventListener('click', () => onNavigate('home'));
    return container;
  }

  let searchTerm = '';
  let sortState: SortState = { column: 'nome', direction: 'asc' };

  function renderList(): void {
    const allUsers = storageService.getUsers();
    const term = searchTerm.toLowerCase();
    const users = allUsers.filter(u =>
      u.nome.toLowerCase().includes(term) ||
      u.login.toLowerCase().includes(term) ||
      u.papel.toLowerCase().includes(term)
    );

    const sortedUsers = sortItems(users, sortState, {
      nome: u => u.nome,
      login: u => u.login,
      papel: u => u.papel,
      tipo: u => (u.isSistema ? 'Sistema' : 'Operador')
    });

    container.innerHTML = `
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Cadastro de Usuários &amp; Permissões
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Gerencie operadores, perfis e o controle granular de ações liberadas ou bloqueadas.
          </p>
        </div>

        <button class="btn btn-primary" id="btn-new-user" style="display: flex; align-items: center; gap: 6px;">
          ${ICONS.plus} Cadastrar Novo Usuário
        </button>
      </div>

      <!-- Alerta Informativo sobre a Regra do Administrador Inicial -->
      <div style="margin-bottom: 16px; background-color: rgba(234, 67, 53, 0.08); border: 1px solid rgba(234, 67, 53, 0.25); border-radius: var(--radius-md); padding: 12px 16px; display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 1.2rem; color: var(--color-coral);">🛡️</div>
        <div style="font-size: 0.82rem; color: var(--text-secondary);">
          <strong style="color: var(--text-white);">Regra de Segurança:</strong> Apenas administradores acessam esta aba. O usuário administrador do sistema é protegido contra exclusão, mas seu login e senha podem ser alterados livremente.
        </div>
      </div>

      <!-- Barra de Filtro / Busca -->
      <div style="margin-bottom: 16px; display: flex; gap: 10px; align-items: center;">
        <div style="position: relative; flex: 1; max-width: 380px;">
          <input 
            type="text" 
            id="user-search-input" 
            class="form-input" 
            placeholder="Buscar por nome, login ou perfil..." 
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

      <!-- Painel e Tabela de Usuários -->
      <div class="panel-card" style="margin-bottom: 0;">
        <div class="panel-card-header">
          <h3 class="panel-card-title">Usuários Cadastrados (${sortedUsers.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                ${renderSortHeader('Nome', 'nome', sortState, { extraStyle: 'min-width: 140px;' })}
                ${renderSortHeader('Login', 'login', sortState, { extraClass: 'col-hide-sm' })}
                ${renderSortHeader('Perfil', 'papel', sortState, { extraClass: 'col-hide-xs' })}
                <th class="col-hide-md">Permissões Detalhadas</th>
                ${renderSortHeader('Tipo', 'tipo', sortState, { extraClass: 'col-hide-sm' })}
                <th style="width: 110px; text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${sortedUsers
        .map(user => {
          const roleLabel =
            user.papel === 'admin'
              ? 'Administrador'
              : user.papel === 'professor'
                ? 'Professor'
                : 'Atendente';

          const userPerms = getUserPermissions(user);
          const grantedCount = countGrantedPermissions(userPerms);

          return `
                    <tr>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background: ${user.isSistema ? 'var(--color-coral)' : '#282b3a'}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #ffffff; flex-shrink: 0;">
                            ${user.nome[0] || 'U'}
                          </div>
                          <div style="display: flex; flex-direction: column; overflow: hidden;">
                            <span style="font-weight: 600; color: var(--text-white); font-size: 0.86rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                              ${user.nome}
                            </span>
                            ${user.dataNascimento ? `<span style="font-size: 0.72rem; color: var(--text-secondary); line-height: 1.2;">Nascimento: ${maskDate(user.dataNascimento)}</span>` : ''}
                          </div>
                        </div>
                      </td>
                      <td class="col-hide-sm">
                        <code style="background: rgba(0,0,0,0.3); padding: 3px 7px; border-radius: 4px; font-size: 0.82rem; color: #ff9187; white-space: nowrap;">
                          ${user.login}
                        </code>
                      </td>
                      <td class="col-hide-xs">
                        <span class="badge ${user.papel === 'admin' ? 'badge-coral' : 'badge-info'}" style="font-size: 0.72rem; white-space: nowrap;">
                          ${roleLabel}
                        </span>
                      </td>
                      <td class="col-hide-md">
                        <span class="badge ${user.papel === 'admin' ? 'badge-coral' : grantedCount > 0 ? 'badge-success' : 'badge-secondary'}" style="font-size: 0.72rem; white-space: nowrap;" title="Ações permitidas para este perfil">
                          ${user.papel === 'admin' ? `Acesso Total (${TOTAL_SYSTEM_PERMISSIONS})` : `${grantedCount} de ${TOTAL_SYSTEM_PERMISSIONS} ações`}
                        </span>
                      </td>
                      <td class="col-hide-sm">
                        ${
                          user.isSistema
                            ? `<span class="badge badge-warning" style="font-size: 0.72rem; white-space: nowrap;">🔒 Sistema</span>`
                            : `<span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">Comum</span>`
                        }
                      </td>
                      <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end; align-items: center;">
                          <button class="btn btn-secondary btn-icon-only btn-edit-user" data-id="${user.id}" title="Editar Dados e Permissões" style="width: 28px; height: 28px; padding: 0;">
                            ${ICONS.edit}
                          </button>
                          ${
                            user.isSistema
                              ? `<button class="btn btn-secondary btn-icon-only" disabled title="Não é permitido excluir o administrador inicial do sistema" style="opacity: 0.25; cursor: not-allowed; width: 28px; height: 28px; padding: 0;">
                                   ${ICONS.trash}
                                 </button>`
                              : `<button class="btn btn-danger btn-icon-only btn-delete-user" data-id="${user.id}" title="Excluir Usuário" style="width: 28px; height: 28px; padding: 0;">
                                   ${ICONS.trash}
                                 </button>`
                          }
                        </div>
                      </td>
                    </tr>
                  `;
        })
        .join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.querySelector('#btn-new-user')?.addEventListener('click', () => {
      openUserModal();
    });

    const searchInput = container.querySelector('#user-search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchTerm = (e.target as HTMLInputElement).value;
        renderList();
        const newSearchInput = container.querySelector('#user-search-input') as HTMLInputElement;
        if (newSearchInput) {
          newSearchInput.focus();
          newSearchInput.setSelectionRange(newSearchInput.value.length, newSearchInput.value.length);
        }
      });
    }

    container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
      searchTerm = '';
      renderList();
    });

    attachSortEvents(container, sortState, (newSort) => {
      sortState = newSort;
      renderList();
    });

    container.querySelectorAll('.btn-edit-user').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const user = storageService.getUsers().find(u => u.id === id);
        if (user) openUserModal(user);
      });
    });

    container.querySelectorAll('.btn-delete-user').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const user = storageService.getUsers().find(u => u.id === id);
        if (user) {
          confirmAction({
            title: 'Excluir Usuário',
            message: `Tem certeza que deseja excluir o usuário "<strong>${user.nome}</strong>" (login: <code>${user.login}</code>)?`,
            onConfirm: () => {
              try {
                storageService.deleteUser(user.id, loggedUser?.nome || 'Administrador');
                showToast(`Usuário "${user.nome}" excluído.`, 'info');
                renderList();
              } catch (err: any) {
                showToast(err.message || 'Erro ao excluir usuário.', 'error');
              }
            }
          });
        }
      });
    });
  }

  function openUserModal(existingUser?: User): void {
    const isEditing = !!existingUser;
    const initialRole: UserRole = existingUser ? existingUser.papel : 'professor';
    const isInitialAdmin = initialRole === 'admin';
    const currentPerms = getUserPermissions(existingUser);

    const bodyHtml = `
      <form id="user-modal-form">
        <div class="form-group">
          <label class="form-label" for="user-nome">Nome Completo</label>
          <input type="text" id="user-nome" class="form-input" placeholder="Ex: Maria Fernandes" value="${existingUser?.nome || ''}" required />
        </div>

        <div class="form-row-responsive">
          <div class="form-group">
            <label class="form-label" for="user-login">Login de Acesso</label>
            <input type="text" id="user-login" class="form-input" placeholder="Ex: maria ou 1" value="${existingUser?.login || ''}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-senha">Senha</label>
            <input type="password" id="user-senha" class="form-input" placeholder="${isEditing ? 'Nova senha' : 'Ex: 123456'}" value="${existingUser?.senha || ''}" required />
          </div>
        </div>

        <div class="form-row-responsive">
          <div class="form-group">
            <label class="form-label" for="user-nascimento">Data de Nascimento</label>
            <input 
              type="text" 
              id="user-nascimento" 
              class="form-input" 
              placeholder="DD/MM/AAAA" 
              maxlength="10" 
              value="${existingUser?.dataNascimento ? maskDate(existingUser.dataNascimento) : ''}" 
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="user-papel">Perfil / Papel no Sistema</label>
            <select id="user-papel" class="form-select" ${existingUser?.isSistema ? 'disabled title="O administrador raiz deve manter o perfil admin"' : ''}>
              <option value="admin" ${initialRole === 'admin' ? 'selected' : ''}>Administrador (Acesso Total)</option>
              <option value="professor" ${initialRole === 'professor' ? 'selected' : ''}>Professor</option>
              <option value="atendente" ${initialRole === 'atendente' ? 'selected' : ''}>Atendente</option>
            </select>
          </div>
        </div>

        ${existingUser?.isSistema
        ? `<div style="font-size: 0.78rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px;">
                 ℹ️ <strong>Atenção:</strong> Você pode alterar o login e a senha deste administrador livremente.
               </div>`
        : ''
      }

        <!-- Seção de Permissões em Formato de Lista: Oculta para Administrador e Visível para outros perfis -->
        <div id="user-permissions-section" style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 16px; display: ${isInitialAdmin ? 'none' : 'block'};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div>
              <label class="form-label" style="margin-bottom: 2px; font-weight: 600; color: var(--text-white);">
                Permissões dos Formulários &amp; Ações
              </label>
              <span style="font-size: 0.74rem; color: var(--text-secondary);">
                Clique na setinha ▼ para abrir/encolher as ações de cada formulário.
              </span>
            </div>

            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-all" style="font-size: 0.72rem; padding: 4px 10px;">
                Liberar Tudo
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-none" style="font-size: 0.72rem; padding: 4px 10px;">
                Bloquear Tudo
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-expand" style="font-size: 0.72rem; padding: 4px 10px;" title="Abrir todas as ações">
                ▼ Expandir
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-perm-collapse" style="font-size: 0.72rem; padding: 4px 10px;" title="Recolher todas as ações">
                ▲ Recolher
              </button>
            </div>
          </div>

          <!-- Lista Estruturada de Formulários (sem barra de corte interna) -->
          <div class="permissions-list-container" style="display: flex; flex-direction: column; gap: 10px;">
            ${PERMISSION_GROUPS.map(group => {
        const groupPerms = (currentPerms as any)[group.key] || {};
        const grantedInGroup = group.items.filter(it => groupPerms[it.key]).length;

        return `
                <div class="perm-group-card" id="card-group-${group.key}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
                  
                  <!-- Cabeçalho do Formulário -->
                  <div 
                    class="perm-group-header" 
                    id="header-group-${group.key}" 
                    data-group="${group.key}" 
                    style="background: rgba(255, 255, 255, 0.03); padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: pointer; user-select: none;"
                  >
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span 
                        id="arrow-perm-${group.key}" 
                        style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; font-size: 0.75rem; color: var(--color-coral); transition: transform 0.2s ease; transform: rotate(0deg);"
                        title="Clique para abrir ou encolher"
                      >
                        ▼
                      </span>

                      <span style="font-size: 1.15rem;">${group.icon}</span>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <strong style="font-size: 0.88rem; color: var(--text-white); font-family: var(--font-heading);">
                          ${group.title}
                        </strong>
                        <span id="group-counter-${group.key}" style="font-size: 0.72rem; color: var(--text-muted);">
                          ${grantedInGroup}/${group.items.length} liberadas
                        </span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button type="button" class="btn btn-secondary btn-sm btn-group-toggle" data-group="${group.key}" style="padding: 3px 10px; font-size: 0.7rem;">
                        Alternar Grupo
                      </button>
                    </div>
                  </div>

                  <!-- Lista de Permissões do Formulário (Inicia recolhida para todos os formulários) -->
                  <div 
                    id="group-body-${group.key}" 
                    class="perm-group-body" 
                    style="display: none; padding: 10px 14px; flex-direction: column; gap: 8px; background: rgba(0, 0, 0, 0.12);"
                  >
                    ${group.items
            .map(item => {
              const isChecked = !!groupPerms[item.key];
              return `
                          <label 
                            class="perm-item-row" 
                            id="row-perm-${group.key}-${item.key}" 
                            style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${isChecked ? 'rgba(34, 197, 94, 0.06)' : 'rgba(234, 67, 53, 0.04)'}; border: 1px solid ${isChecked ? 'rgba(34, 197, 94, 0.25)' : 'rgba(234, 67, 53, 0.15)'}; border-radius: var(--radius-sm); cursor: pointer; user-select: none; gap: 10px; transition: all 0.2s ease;"
                          >
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                              <input 
                                type="checkbox" 
                                class="perm-checkbox" 
                                id="perm-${group.key}-${item.key}" 
                                data-group="${group.key}" 
                                data-action="${item.key}" 
                                ${isChecked ? 'checked' : ''} 
                                style="width: 17px; height: 17px; accent-color: var(--color-coral); cursor: pointer; flex-shrink: 0;"
                              />
                              <span style="font-size: 0.82rem; color: var(--text-white); font-weight: 500;">
                                ${item.label}
                              </span>
                            </div>

                            <span 
                              id="badge-perm-${group.key}-${item.key}" 
                              class="badge ${isChecked ? 'badge-success' : 'badge-coral'}" 
                              style="font-size: 0.68rem; padding: 2px 8px; font-weight: 700; flex-shrink: 0;"
                            >
                              ${isChecked ? 'Liberado' : 'Bloqueado'}
                            </span>
                          </label>
                        `;
            })
            .join('')}
                  </div>
                </div>
              `;
      }).join('')}
          </div>

          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 14px;">
            🔒 <em>A tela de Usuários é exclusiva para administradores e não pode ser delegada a outros perfis.</em>
          </div>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? `Editar Usuário: ${existingUser.nome}` : 'Cadastrar Novo Usuário',
      bodyHtml,
      modalClass: 'modal-lg',
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Usuário',
      onConfirm: () => {
        const nome = (document.getElementById('user-nome') as HTMLInputElement).value.trim();
        const login = (document.getElementById('user-login') as HTMLInputElement).value.trim();
        const senha = (document.getElementById('user-senha') as HTMLInputElement).value.trim();
        const dataNascimento = (document.getElementById('user-nascimento') as HTMLInputElement)?.value.trim() || '';
        const papelEl = document.getElementById('user-papel') as HTMLSelectElement;
        const papel = (papelEl ? papelEl.value : 'professor') as UserRole;

        if (!nome || !login || !senha) {
          showToast('Preencha Nome, Login e Senha.', 'error');
          return false;
        }

        if (dataNascimento) {
          if (dataNascimento.length !== 10) {
            showToast('Informe a data de nascimento completa no formato DD/MM/AAAA.', 'error');
            return false;
          }
          const parts = dataNascimento.split('/');
          const dia = parseInt(parts[0], 10);
          const mes = parseInt(parts[1], 10);
          const ano = parseInt(parts[2], 10);
          const currentYear = new Date().getFullYear();
          if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > currentYear) {
            showToast('Data de nascimento inválida.', 'error');
            return false;
          }
        }

        // Validação de login duplicado
        const existingWithLogin = storageService.getUsers().find(u => u.login === login && u.id !== existingUser?.id);
        if (existingWithLogin) {
          showToast(`O login "${login}" já está em uso por outro usuário.`, 'error');
          return false;
        }

        // Coleta as permissões granulares dos formulários
        let permissoes: UserPermissions;
        if (papel === 'admin') {
          permissoes = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS_BY_ROLE.admin));
        } else {
          permissoes = {
            alunos: {
              acesso: (document.getElementById('perm-alunos-acesso') as HTMLInputElement)?.checked ?? false,
              cadastrar: (document.getElementById('perm-alunos-cadastrar') as HTMLInputElement)?.checked ?? false,
              alterar: (document.getElementById('perm-alunos-alterar') as HTMLInputElement)?.checked ?? false,
              excluir: (document.getElementById('perm-alunos-excluir') as HTMLInputElement)?.checked ?? false
            },
            agenda: {
              acesso: (document.getElementById('perm-agenda-acesso') as HTMLInputElement)?.checked ?? false,
              cadastrar: (document.getElementById('perm-agenda-cadastrar') as HTMLInputElement)?.checked ?? false,
              alterar: (document.getElementById('perm-agenda-alterar') as HTMLInputElement)?.checked ?? false,
              excluir: (document.getElementById('perm-agenda-excluir') as HTMLInputElement)?.checked ?? false
            },
            planos: {
              acesso: (document.getElementById('perm-planos-acesso') as HTMLInputElement)?.checked ?? false,
              cadastrar: (document.getElementById('perm-planos-cadastrar') as HTMLInputElement)?.checked ?? false,
              alterar: (document.getElementById('perm-planos-alterar') as HTMLInputElement)?.checked ?? false,
              excluir: (document.getElementById('perm-planos-excluir') as HTMLInputElement)?.checked ?? false
            },
            financeiro: {
              acesso: (document.getElementById('perm-financeiro-acesso') as HTMLInputElement)?.checked ?? false,
              cadastrar: (document.getElementById('perm-financeiro-cadastrar') as HTMLInputElement)?.checked ?? false,
              alterar: (document.getElementById('perm-financeiro-alterar') as HTMLInputElement)?.checked ?? false,
              excluir: (document.getElementById('perm-financeiro-excluir') as HTMLInputElement)?.checked ?? false
            },
            planosPagamento: {
              acesso: (document.getElementById('perm-planosPagamento-acesso') as HTMLInputElement)?.checked ?? false,
              cadastrar: (document.getElementById('perm-planosPagamento-cadastrar') as HTMLInputElement)?.checked ?? false,
              alterar: (document.getElementById('perm-planosPagamento-alterar') as HTMLInputElement)?.checked ?? false,
              excluir: (document.getElementById('perm-planosPagamento-excluir') as HTMLInputElement)?.checked ?? false
            },
            relatorios: {
              acesso: (document.getElementById('perm-relatorios-acesso') as HTMLInputElement)?.checked ?? false,
              gerar: (document.getElementById('perm-relatorios-gerar') as HTMLInputElement)?.checked ?? false
            },
            home: {
              acesso: (document.getElementById('perm-home-acesso') as HTMLInputElement)?.checked ?? false
            },
            auditoria: {
              acesso: (document.getElementById('perm-auditoria-acesso') as HTMLInputElement)?.checked ?? false
            },
            configuracoes: {
              acesso: (document.getElementById('perm-configuracoes-acesso') as HTMLInputElement)?.checked ?? false,
              alterar: (document.getElementById('perm-configuracoes-alterar') as HTMLInputElement)?.checked ?? false
            }
          };
        }

        const currentUserName = loggedUser?.nome || 'Administrador';

        if (isEditing && existingUser) {
          storageService.updateUser(
            existingUser.id,
            {
              nome,
              login,
              senha,
              dataNascimento,
              papel: existingUser.isSistema ? 'admin' : papel,
              permissoes: existingUser.isSistema ? DEFAULT_PERMISSIONS_BY_ROLE.admin : permissoes
            },
            currentUserName
          );
          showToast('Usuário e permissões atualizados com sucesso!', 'success');
        } else {
          storageService.addUser(
            {
              nome,
              login,
              senha,
              dataNascimento,
              papel,
              permissoes
            },
            currentUserName
          );
          showToast('Novo usuário cadastrado com sucesso!', 'success');
        }

        renderList();
        return true;
      }
    });

    // Conectar eventos dinâmicos dentro do modal aberto
    const papelSelect = document.getElementById('user-papel') as HTMLSelectElement;
    const permSection = document.getElementById('user-permissions-section') as HTMLElement;
    const birthInput = document.getElementById('user-nascimento') as HTMLInputElement;

    if (birthInput) {
      applyInputMask(birthInput, maskDate);
    }

    const updateItemVisual = (groupKey: string, actionKey: string, checked: boolean) => {
      const row = document.getElementById(`row-perm-${groupKey}-${actionKey}`);
      const badge = document.getElementById(`badge-perm-${groupKey}-${actionKey}`);
      if (row && badge) {
        if (checked) {
          row.style.background = 'rgba(34, 197, 94, 0.06)';
          row.style.borderColor = 'rgba(34, 197, 94, 0.25)';
          badge.className = 'badge badge-success';
          badge.textContent = 'Liberado';
        } else {
          row.style.background = 'rgba(234, 67, 53, 0.04)';
          row.style.borderColor = 'rgba(234, 67, 53, 0.15)';
          badge.className = 'badge badge-coral';
          badge.textContent = 'Bloqueado';
        }
      }
      updateGroupCounter(groupKey);
    };

    const updateGroupCounter = (groupKey: string) => {
      const counter = document.getElementById(`group-counter-${groupKey}`);
      const group = PERMISSION_GROUPS.find(g => g.key === groupKey);
      if (counter && group) {
        let count = 0;
        group.items.forEach(it => {
          const chk = document.getElementById(`perm-${groupKey}-${it.key}`) as HTMLInputElement;
          if (chk && chk.checked) count++;
        });
        counter.textContent = `${count}/${group.items.length} liberadas`;
      }
    };

    // Alternar visibilidade da lista de permissões conforme perfil
    papelSelect?.addEventListener('change', () => {
      const selected = papelSelect.value as UserRole;
      if (selected === 'admin') {
        permSection.style.display = 'none';
      } else {
        permSection.style.display = 'block';
        if (!isEditing) {
          const defaults = (DEFAULT_PERMISSIONS_BY_ROLE[selected] || DEFAULT_PERMISSIONS_BY_ROLE.professor) as any;
          PERMISSION_GROUPS.forEach(g => {
            g.items.forEach(it => {
              const chk = document.getElementById(`perm-${g.key}-${it.key}`) as HTMLInputElement;
              if (chk) {
                const val = defaults[g.key]?.[it.key] ?? false;
                chk.checked = val;
                updateItemVisual(g.key, it.key, val);
              }
            });
          });
        }
      }
    });

    // Accordion: Abrir e encolher permissões ao clicar no cabeçalho ou na setinha ▼
    PERMISSION_GROUPS.forEach(g => {
      const header = document.getElementById(`header-group-${g.key}`);
      const body = document.getElementById(`group-body-${g.key}`);
      const arrow = document.getElementById(`arrow-perm-${g.key}`);

      header?.addEventListener('click', (e) => {
        // Se clicou no botão Alternar Grupo, não recolhe/abre o accordion
        if ((e.target as HTMLElement).closest('.btn-group-toggle')) return;

        if (body && arrow) {
          const isCurrentlyOpen = body.style.display === 'flex';
          body.style.display = isCurrentlyOpen ? 'none' : 'flex';
          arrow.style.transform = isCurrentlyOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });

      // Checkboxes individuais
      g.items.forEach(it => {
        const chk = document.getElementById(`perm-${g.key}-${it.key}`) as HTMLInputElement;
        chk?.addEventListener('change', () => {
          updateItemVisual(g.key, it.key, chk.checked);

          // Se marcou uma ação filha (cadastrar, alterar, excluir), garante que o "acesso" ao formulário esteja marcado
          if (chk.checked && it.key !== 'acesso') {
            const acessoChk = document.getElementById(`perm-${g.key}-acesso`) as HTMLInputElement;
            if (acessoChk && !acessoChk.checked) {
              acessoChk.checked = true;
              updateItemVisual(g.key, 'acesso', true);
            }
          }

          // Se desmarcou o "acesso" ao formulário, desmarca todas as ações filhas do formulário
          if (!chk.checked && it.key === 'acesso') {
            g.items.forEach(child => {
              if (child.key !== 'acesso') {
                const childChk = document.getElementById(`perm-${g.key}-${child.key}`) as HTMLInputElement;
                if (childChk && childChk.checked) {
                  childChk.checked = false;
                  updateItemVisual(g.key, child.key, false);
                }
              }
            });
          }
        });
      });

      // Botão "Alternar Grupo"
      document.querySelectorAll(`.btn-group-toggle[data-group="${g.key}"]`).forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const checkboxes = g.items
            .map(it => document.getElementById(`perm-${g.key}-${it.key}`) as HTMLInputElement)
            .filter(Boolean);
          const allChecked = checkboxes.every(c => c.checked);
          checkboxes.forEach(c => {
            c.checked = !allChecked;
            updateItemVisual(g.key, (c as any).dataset.action, !allChecked);
          });
        });
      });
    });

    // Botão Expandir Todos
    document.getElementById('btn-perm-expand')?.addEventListener('click', () => {
      PERMISSION_GROUPS.forEach(g => {
        const body = document.getElementById(`group-body-${g.key}`);
        const arrow = document.getElementById(`arrow-perm-${g.key}`);
        if (body && arrow) {
          body.style.display = 'flex';
          arrow.style.transform = 'rotate(180deg)';
        }
      });
    });

    // Botão Recolher Todos
    document.getElementById('btn-perm-collapse')?.addEventListener('click', () => {
      PERMISSION_GROUPS.forEach(g => {
        const body = document.getElementById(`group-body-${g.key}`);
        const arrow = document.getElementById(`arrow-perm-${g.key}`);
        if (body && arrow) {
          body.style.display = 'none';
          arrow.style.transform = 'rotate(0deg)';
        }
      });
    });

    // Botões "Liberar Tudo" e "Bloquear Tudo"
    document.getElementById('btn-perm-all')?.addEventListener('click', () => {
      PERMISSION_GROUPS.forEach(g => {
        g.items.forEach(it => {
          const chk = document.getElementById(`perm-${g.key}-${it.key}`) as HTMLInputElement;
          if (chk) {
            chk.checked = true;
            updateItemVisual(g.key, it.key, true);
          }
        });
      });
    });

    document.getElementById('btn-perm-none')?.addEventListener('click', () => {
      PERMISSION_GROUPS.forEach(g => {
        g.items.forEach(it => {
          const chk = document.getElementById(`perm-${g.key}-${it.key}`) as HTMLInputElement;
          if (chk) {
            chk.checked = false;
            updateItemVisual(g.key, it.key, false);
          }
        });
      });
    });
  }

  renderList();
  return container;
}
