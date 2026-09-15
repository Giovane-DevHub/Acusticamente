import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Student } from '../types';
import { ICONS, openModal, showToast } from '../utils/ui';

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
      s.telefone.includes(searchTerm)
    );

    container.innerHTML = `
      <!-- Cabeçalho da Tela -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700;">
            Cadastro de Alunos
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Gerencie matrículas, contatos e planos de ensino vinculados aos alunos.
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
        <div style="position: relative; flex: 1; max-width: 400px;">
          <input 
            type="text" 
            id="student-search-input" 
            class="form-input" 
            placeholder="Buscar por nome, e-mail ou telefone..." 
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
          <h3 class="panel-card-title">Alunos Cadastrados (${filteredStudents.length})</h3>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Contato</th>
                <th>Plano de Ensino</th>
                <th>Status</th>
                <th style="text-align: right;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${
                filteredStudents.length === 0
                  ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 36px;">Nenhum aluno encontrado.</td></tr>`
                  : filteredStudents
                      .map(student => {
                        const plan = plans.find(p => p.id === student.planoId);
                        const isAtivo = student.status === 'ativo';

                        return `
                          <tr>
                            <td>
                              <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 34px; height: 34px; border-radius: 50%; background: #282b3a; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--color-coral);">
                                  ${student.nome[0]}
                                </div>
                                <div>
                                  <div style="font-weight: 600; color: var(--text-white);">${student.nome}</div>
                                  <div style="font-size: 0.76rem; color: var(--text-muted);">${student.moduloAtual || 'Iniciando'}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div style="font-size: 0.85rem; color: var(--text-white);">${student.telefone || 'Sem telefone'}</div>
                              <div style="font-size: 0.78rem; color: var(--text-secondary);">${student.email || 'Sem e-mail'}</div>
                            </td>
                            <td>
                              <span style="font-size: 0.88rem; color: var(--text-secondary);">${plan?.nome || 'Nenhum plano'}</span>
                            </td>
                            <td>
                              <span class="badge ${isAtivo ? 'badge-success' : 'badge-warning'}">
                                ${isAtivo ? '● Ativo' : '○ Inativo'}
                              </span>
                            </td>
                            <td style="text-align: right;">
                              ${
                                canEdit
                                  ? `
                                    <button class="btn btn-secondary btn-icon-only btn-edit-student" data-id="${student.id}" title="Editar Aluno">
                                      ${ICONS.edit}
                                    </button>
                                  `
                                  : ''
                              }
                              ${
                                canDelete
                                  ? `
                                    <button class="btn btn-danger btn-icon-only btn-delete-student" data-id="${student.id}" title="Excluir Aluno" style="margin-left: 6px;">
                                      ${ICONS.trash}
                                    </button>
                                  `
                                  : ''
                              }
                              ${!canEdit && !canDelete ? `<span style="font-size: 0.75rem; color: var(--text-muted);">Visualização</span>` : ''}
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

    // Eventos de busca
    const searchInput = container.querySelector('#student-search-input') as HTMLInputElement;
    searchInput?.addEventListener('input', (e) => {
      searchTerm = (e.target as HTMLInputElement).value;
      renderList();
      // Manter foco no input
      const newSearchInput = container.querySelector('#student-search-input') as HTMLInputElement;
      if (newSearchInput) {
        newSearchInput.focus();
        newSearchInput.selectionStart = newSearchInput.selectionEnd = newSearchInput.value.length;
      }
    });

    container.querySelector('#btn-new-student')?.addEventListener('click', () => {
      openStudentModal();
    });

    container.querySelectorAll('.btn-edit-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const student = storageService.getStudents().find(s => s.id === id);
        if (student) openStudentModal(student);
      });
    });

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

  function openStudentModal(existingStudent?: Student): void {
    const plans = storageService.getPlans();
    const isEditing = !!existingStudent;

    const planOptions = plans
      .map(
        p => `<option value="${p.id}" ${existingStudent?.planoId === p.id ? 'selected' : ''}>${p.nome}</option>`
      )
      .join('');

    const bodyHtml = `
      <form id="student-modal-form">
        <div class="form-group">
          <label class="form-label" for="student-nome">Nome Completo</label>
          <input type="text" id="student-nome" class="form-input" placeholder="Ex: Carlos Santana" value="${existingStudent?.nome || ''}" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="student-email">E-mail</label>
            <input type="email" id="student-email" class="form-input" placeholder="aluno@email.com" value="${existingStudent?.email || ''}" />
          </div>

          <div class="form-group">
            <label class="form-label" for="student-telefone">Telefone / WhatsApp</label>
            <input type="text" id="student-telefone" class="form-input" placeholder="(11) 99999-9999" value="${existingStudent?.telefone || ''}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="student-plano">Plano de Ensino</label>
            <select id="student-plano" class="form-select">
              <option value="">Selecione um plano...</option>
              ${planOptions}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="student-status">Status</label>
            <select id="student-status" class="form-select">
              <option value="ativo" ${existingStudent?.status === 'ativo' ? 'selected' : ''}>Ativo</option>
              <option value="inativo" ${existingStudent?.status === 'inativo' ? 'selected' : ''}>Inativo</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="student-modulo">Módulo Atual</label>
          <input type="text" id="student-modulo" class="form-input" placeholder="Ex: Módulo 1: Teoria" value="${existingStudent?.moduloAtual || ''}" />
        </div>

        <div class="form-group">
          <label class="form-label" for="student-obs">Observações / Histórico</label>
          <textarea id="student-obs" class="form-textarea" rows="3" placeholder="Informações pedagógicas, preferências musicais...">${existingStudent?.observacoes || ''}</textarea>
        </div>
      </form>
    `;

    openModal({
      title: isEditing ? 'Editar Aluno' : 'Cadastrar Novo Aluno',
      bodyHtml,
      confirmText: isEditing ? 'Salvar Alterações' : 'Cadastrar Aluno',
      onConfirm: () => {
        const nome = (document.getElementById('student-nome') as HTMLInputElement).value.trim();
        const email = (document.getElementById('student-email') as HTMLInputElement).value.trim();
        const telefone = (document.getElementById('student-telefone') as HTMLInputElement).value.trim();
        const planoId = (document.getElementById('student-plano') as HTMLSelectElement).value;
        const status = (document.getElementById('student-status') as HTMLSelectElement).value as any;
        const moduloAtual = (document.getElementById('student-modulo') as HTMLInputElement).value.trim();
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
              email,
              telefone,
              planoId,
              status,
              moduloAtual,
              observacoes: obs
            },
            currentUserName
          );
          showToast('Dados do aluno atualizados com sucesso!', 'success');
        } else {
          storageService.addStudent(
            {
              nome,
              email,
              telefone,
              planoId,
              status,
              moduloAtual,
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
