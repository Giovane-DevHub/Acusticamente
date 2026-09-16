import { storageService } from '../services/storageService';
import { authService, hasActionPermission } from '../services/authService';
import { Student, Payment, TeachingPlan } from '../types';
import { showToast } from '../utils/ui';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export function renderRelatorios(_onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  const user = authService.getCurrentUser();
  const canGenerate = hasActionPermission(user, 'relatorios', 'gerar');

  // Estado das Abas: 'alunos' ou 'financeiro'
  let activeTab: 'alunos' | 'financeiro' = 'alunos';

  // Estados dos Filtros - Alunos
  let alunoFiltroStatus = 'todos'; // 'todos' | 'ativo' | 'inativo'
  let alunoFiltroInstrumento = 'todos';
  let alunoFiltroNivel = 'todos';
  let alunoFiltroPlano = 'todos';
  let alunoFiltroFinanceiro = 'todos'; // 'todos' | 'em_dia' | 'atrasado'
  let alunoFiltroOrdem = 'nome_asc'; // 'nome_asc' | 'nome_desc' | 'data_asc' | 'data_desc'

  // Estados dos Filtros - Financeiro
  let finFiltroDataIni = '';
  let finFiltroDataFim = '';
  let finFiltroMesRefIni = '';
  let finFiltroMesRefFim = '';
  let finFiltroStatus = 'todos'; // 'todos' | 'pago' | 'pendente' | 'atrasado'
  let finFiltroAluno = 'todos';
  let finFiltroMetodo = 'todos';
  let finFiltroOrdem = 'vencimento_asc'; // 'vencimento_asc' | 'vencimento_desc' | 'valor_desc' | 'aluno_asc'

  function render(): void {
    const settings = storageService.getSettings();
    const students = storageService.getStudents();
    const plans = storageService.getPlans();
    const payments = storageService.getPayments();

    // Instrumentos únicos cadastrados
    const instrumentos = Array.from(
      new Set(students.map(s => s.instrumentoPrincipal).filter(Boolean))
    ).sort();

    // ========================================================
    // FILTRAGEM DE ALUNOS
    // ========================================================
    let filteredStudents = students.filter(s => {
      if (alunoFiltroStatus !== 'todos' && s.status !== alunoFiltroStatus) return false;
      if (alunoFiltroInstrumento !== 'todos' && s.instrumentoPrincipal !== alunoFiltroInstrumento) return false;
      if (alunoFiltroNivel !== 'todos' && s.nivelMusical !== alunoFiltroNivel) return false;
      if (alunoFiltroPlano !== 'todos' && s.planoId !== alunoFiltroPlano) return false;
      if (alunoFiltroFinanceiro !== 'todos') {
        const isOverdue = storageService.isStudentOverdue(s.id);
        if (alunoFiltroFinanceiro === 'em_dia' && isOverdue) return false;
        if (alunoFiltroFinanceiro === 'atrasado' && !isOverdue) return false;
      }
      return true;
    });

    // Ordenação Alunos
    filteredStudents.sort((a, b) => {
      if (alunoFiltroOrdem === 'nome_asc') return a.nome.localeCompare(b.nome);
      if (alunoFiltroOrdem === 'nome_desc') return b.nome.localeCompare(a.nome);
      if (alunoFiltroOrdem === 'data_desc') return (b.criadoEm || '').localeCompare(a.criadoEm || '');
      if (alunoFiltroOrdem === 'data_asc') return (a.criadoEm || '').localeCompare(b.criadoEm || '');
      return 0;
    });

    // Indicadores Alunos
    const totalAlunos = filteredStudents.length;
    const totalAtivos = filteredStudents.filter(s => s.status === 'ativo').length;
    const totalInativos = filteredStudents.filter(s => s.status === 'inativo').length;
    const totalInadimplentes = filteredStudents.filter(s => storageService.isStudentOverdue(s.id)).length;

    // ========================================================
    // FILTRAGEM DE FINANCEIRO
    // ========================================================
    const hojeStr = new Date().toISOString().slice(0, 10);
    let filteredPayments = payments.filter(p => {
      if (finFiltroDataIni && p.dataVencimento < finFiltroDataIni) return false;
      if (finFiltroDataFim && p.dataVencimento > finFiltroDataFim) return false;
      const mesRef = p.mesReferencia || p.dataVencimento.slice(0, 7);
      if (finFiltroMesRefIni && mesRef < finFiltroMesRefIni) return false;
      if (finFiltroMesRefFim && mesRef > finFiltroMesRefFim) return false;
      if (finFiltroAluno !== 'todos' && p.alunoId !== finFiltroAluno) return false;
      if (finFiltroMetodo !== 'todos' && p.formaPagamento !== finFiltroMetodo) return false;

      const isAtrasado = p.status !== 'pago' && p.dataVencimento < hojeStr;
      if (finFiltroStatus === 'pago' && p.status !== 'pago') return false;
      if (finFiltroStatus === 'pendente' && (p.status === 'pago' || isAtrasado)) return false;
      if (finFiltroStatus === 'atrasado' && !isAtrasado) return false;

      return true;
    });

    const studentMap = new Map(students.map(s => [s.id, s.nome]));

    // Ordenação Financeiro
    filteredPayments.sort((a, b) => {
      if (finFiltroOrdem === 'vencimento_asc') return a.dataVencimento.localeCompare(b.dataVencimento);
      if (finFiltroOrdem === 'vencimento_desc') return b.dataVencimento.localeCompare(a.dataVencimento);
      if (finFiltroOrdem === 'valor_desc') return b.valor - a.valor;
      if (finFiltroOrdem === 'aluno_asc') {
        const nomeA = studentMap.get(a.alunoId) || '';
        const nomeB = studentMap.get(b.alunoId) || '';
        return nomeA.localeCompare(nomeB);
      }
      return 0;
    });

    // Indicadores Financeiro
    const totalLancamentos = filteredPayments.length;
    const valorTotal = filteredPayments.reduce((acc, p) => acc + p.valor, 0);
    const valorPago = filteredPayments.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0);
    const valorPendente = filteredPayments.filter(p => p.status !== 'pago').reduce((acc, p) => acc + p.valor, 0);

    // Renderização do HTML principal
    container.innerHTML = `
      <!-- Cabeçalho do Módulo -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-white);">
            Módulo de Relatórios Gerenciais
          </h2>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">
            Filtros avançados e geração direta em PDF com cabeçalho institucional e dados das configurações.
          </p>
        </div>

        <div style="display: flex; gap: 10px;">
          ${
            canGenerate
              ? `
                <button class="btn btn-primary" id="btn-gerar-pdf" style="font-size: 0.82rem; padding: 8px 18px; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                  <span>📄</span> Imprimir / Exportar PDF
                </button>
              `
              : `<span style="font-size: 0.78rem; color: var(--text-muted); align-self: center;">🔒 Sem permissão para emissão</span>`
          }
        </div>
      </div>

      <!-- Seletor de Abas em Pílula -->
      <div style="display: flex; gap: 10px; margin-bottom: 16px;">
        <button 
          type="button" 
          id="btn-tab-rel-alunos" 
          style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.88rem; padding: 9px 20px; border-radius: var(--radius-md); cursor: pointer; transition: all 0.15s ease; ${
            activeTab === 'alunos'
              ? 'background: var(--color-coral); color: #ffffff; border: 1px solid var(--color-coral);'
              : 'background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border-subtle);'
          }"
        >
          <span>👥</span> Relatório de Alunos
        </button>

        <button 
          type="button" 
          id="btn-tab-rel-financeiro" 
          style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.88rem; padding: 9px 20px; border-radius: var(--radius-md); cursor: pointer; transition: all 0.15s ease; ${
            activeTab === 'financeiro'
              ? 'background: var(--color-coral); color: #ffffff; border: 1px solid var(--color-coral);'
              : 'background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border-subtle);'
          }"
        >
          <span>💰</span> Relatório Financeiro
        </button>
      </div>

      <!-- ========================================================
           CONTEÚDO DA ABA: RELATÓRIO DE ALUNOS
           ======================================================== -->
      <div id="tab-rel-alunos" style="display: ${activeTab === 'alunos' ? 'block' : 'none'};">
        <!-- Painel de Filtros: Alunos -->
        <div class="panel-card" style="margin-bottom: 16px; padding: 16px 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white); text-transform: uppercase; letter-spacing: 0.04em;">
              Filtros de Pesquisa de Alunos
            </span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-limpar-filtros-alunos" style="font-size: 0.72rem; padding: 3px 10px;">
              Limpar Filtros
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; align-items: flex-end;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Aluno</label>
              <select id="filtro-aluno-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${alunoFiltroStatus === 'todos' ? 'selected' : ''}>Todos os Status</option>
                <option value="ativo" ${alunoFiltroStatus === 'ativo' ? 'selected' : ''}>Somente Ativos</option>
                <option value="inativo" ${alunoFiltroStatus === 'inativo' ? 'selected' : ''}>Somente Inativos</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Instrumento</label>
              <select id="filtro-aluno-instrumento" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${alunoFiltroInstrumento === 'todos' ? 'selected' : ''}>Todos os Instrumentos</option>
                ${instrumentos.map(inst => `<option value="${inst}" ${alunoFiltroInstrumento === inst ? 'selected' : ''}>${inst}</option>`).join('')}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Nível Musical</label>
              <select id="filtro-aluno-nivel" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${alunoFiltroNivel === 'todos' ? 'selected' : ''}>Todos os Níveis</option>
                <option value="iniciante" ${alunoFiltroNivel === 'iniciante' ? 'selected' : ''}>Iniciante</option>
                <option value="basico" ${alunoFiltroNivel === 'basico' ? 'selected' : ''}>Básico</option>
                <option value="intermediario" ${alunoFiltroNivel === 'intermediario' ? 'selected' : ''}>Intermediário</option>
                <option value="avancado" ${alunoFiltroNivel === 'avancado' ? 'selected' : ''}>Avançado</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Plano de Ensino</label>
              <select id="filtro-aluno-plano" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${alunoFiltroPlano === 'todos' ? 'selected' : ''}>Todos os Planos</option>
                ${plans.map(p => `<option value="${p.id}" ${alunoFiltroPlano === p.id ? 'selected' : ''}>${p.nome}</option>`).join('')}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Situação Financeira</label>
              <select id="filtro-aluno-financeiro" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${alunoFiltroFinanceiro === 'todos' ? 'selected' : ''}>Todos</option>
                <option value="em_dia" ${alunoFiltroFinanceiro === 'em_dia' ? 'selected' : ''}>Em Dia</option>
                <option value="atrasado" ${alunoFiltroFinanceiro === 'atrasado' ? 'selected' : ''}>Com Mensalidade em Atraso</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-aluno-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="nome_asc" ${alunoFiltroOrdem === 'nome_asc' ? 'selected' : ''}>Nome (A → Z)</option>
                <option value="nome_desc" ${alunoFiltroOrdem === 'nome_desc' ? 'selected' : ''}>Nome (Z → A)</option>
                <option value="data_desc" ${alunoFiltroOrdem === 'data_desc' ? 'selected' : ''}>Matrícula Mais Recente</option>
                <option value="data_asc" ${alunoFiltroOrdem === 'data_asc' ? 'selected' : ''}>Matrícula Mais Antiga</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores de Alunos -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Total Localizado</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${totalAlunos}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Ativos</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: #4ade80; margin-top: 2px;">${totalAtivos}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Alunos Inativos</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: #facc15; margin-top: 2px;">${totalInativos}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Inadimplentes</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: #f87171; margin-top: 2px;">${totalInadimplentes}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Alunos -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório de Alunos (${filteredStudents.length} registros)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th style="width: 170px;">Instrumento</th>
                  <th style="width: 130px;">Contato</th>
                  <th style="width: 160px;">Plano</th>
                  <th style="width: 100px;">Status</th>
                  <th style="width: 120px;">Mensalidade</th>
                </tr>
              </thead>
              <tbody>
                ${
                  filteredStudents.length === 0
                    ? `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum aluno atende aos filtros aplicados.</td></tr>`
                    : filteredStudents
                        .map(s => {
                          const plan = plans.find(p => p.id === s.planoId);
                          const isAtivo = s.status === 'ativo';
                          const isOverdue = storageService.isStudentOverdue(s.id);
                          return `
                            <tr>
                              <td style="font-weight: 600;">${s.nome}</td>
                              <td>${s.instrumentoPrincipal || 'Geral'}</td>
                              <td style="color: var(--text-secondary);">${s.telefone || '-'}</td>
                              <td style="color: var(--text-secondary);">${plan?.nome || '-'}</td>
                              <td>
                                <span class="badge ${isAtivo ? 'badge-success' : 'badge-warning'}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${isAtivo ? 'Ativo' : 'Inativo'}
                                </span>
                              </td>
                              <td>
                                ${
                                  isOverdue
                                    ? `<span style="color: #f87171; font-weight: 600; font-size: 0.75rem;">⚠️ Atrasado</span>`
                                    : `<span style="color: #4ade80; font-size: 0.75rem;">✓ Em dia</span>`
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
      </div>

      <!-- ========================================================
           CONTEÚDO DA ABA: RELATÓRIO FINANCEIRO
           ======================================================== -->
      <div id="tab-rel-financeiro" style="display: ${activeTab === 'financeiro' ? 'block' : 'none'};">
        <!-- Painel de Filtros: Financeiro -->
        <div class="panel-card" style="margin-bottom: 16px; padding: 16px 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-white); text-transform: uppercase; letter-spacing: 0.04em;">
              Filtros de Pesquisa Financeira
            </span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-limpar-filtros-fin" style="font-size: 0.72rem; padding: 3px 10px;">
              Limpar Filtros
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; align-items: flex-end;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento De</label>
              <input type="date" id="filtro-fin-dataini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${finFiltroDataIni}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Vencimento Até</label>
              <input type="date" id="filtro-fin-datafim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${finFiltroDataFim}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. De</label>
              <input type="month" id="filtro-fin-mesref-ini" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${finFiltroMesRefIni}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Mês Ref. Até</label>
              <input type="month" id="filtro-fin-mesref-fim" class="form-input" style="font-size: 0.8rem; padding: 5px 8px;" value="${finFiltroMesRefFim}" />
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Status do Lançamento</label>
              <select id="filtro-fin-status" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${finFiltroStatus === 'todos' ? 'selected' : ''}>Todos os Status</option>
                <option value="pago" ${finFiltroStatus === 'pago' ? 'selected' : ''}>Somente Pagos (Quitados)</option>
                <option value="pendente" ${finFiltroStatus === 'pendente' ? 'selected' : ''}>Pendentes (A Vencer)</option>
                <option value="atrasado" ${finFiltroStatus === 'atrasado' ? 'selected' : ''}>Somente Atrasados</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Aluno Específico</label>
              <select id="filtro-fin-aluno" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${finFiltroAluno === 'todos' ? 'selected' : ''}>Todos os Alunos</option>
                ${students.map(s => `<option value="${s.id}" ${finFiltroAluno === s.id ? 'selected' : ''}>${s.nome}</option>`).join('')}
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Forma de Pagamento</label>
              <select id="filtro-fin-metodo" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="todos" ${finFiltroMetodo === 'todos' ? 'selected' : ''}>Todas as Formas</option>
                <option value="pix" ${finFiltroMetodo === 'pix' ? 'selected' : ''}>PIX</option>
                <option value="cartao_credito" ${finFiltroMetodo === 'cartao_credito' ? 'selected' : ''}>Cartão de Crédito</option>
                <option value="cartao_debito" ${finFiltroMetodo === 'cartao_debito' ? 'selected' : ''}>Cartão de Débito</option>
                <option value="boleto" ${finFiltroMetodo === 'boleto' ? 'selected' : ''}>Boleto</option>
                <option value="dinheiro" ${finFiltroMetodo === 'dinheiro' ? 'selected' : ''}>Dinheiro</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 0.72rem;">Ordenação</label>
              <select id="filtro-fin-ordem" class="form-select" style="font-size: 0.8rem; padding: 6px 10px;">
                <option value="vencimento_asc" ${finFiltroOrdem === 'vencimento_asc' ? 'selected' : ''}>Vencimento Mais Próximo</option>
                <option value="vencimento_desc" ${finFiltroOrdem === 'vencimento_desc' ? 'selected' : ''}>Vencimento Mais Distante</option>
                <option value="valor_desc" ${finFiltroOrdem === 'valor_desc' ? 'selected' : ''}>Maior Valor Primeiro</option>
                <option value="aluno_asc" ${finFiltroOrdem === 'aluno_asc' ? 'selected' : ''}>Nome do Aluno (A → Z)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicadores Financeiros -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Total Registros</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">${totalLancamentos}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Total Geral</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--text-white); margin-top: 2px;">R$ ${valorTotal.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Recebido / Quitado</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: #4ade80; margin-top: 2px;">R$ ${valorPago.toFixed(2)}</div>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px;">
            <div style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase;">Pendente / Atrasado</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: #f87171; margin-top: 2px;">R$ ${valorPendente.toFixed(2)}</div>
          </div>
        </div>

        <!-- Tabela de Prévia: Financeiro -->
        <div class="panel-card">
          <div class="panel-card-header" style="padding: 12px 16px;">
            <h3 class="panel-card-title" style="font-size: 0.84rem;">
              Prévia do Relatório Financeiro (${filteredPayments.length} lançamentos)
            </h3>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th style="width: 180px;">Descrição</th>
                  <th style="width: 130px;">Vencimento</th>
                  <th style="width: 120px;">Valor</th>
                  <th style="width: 110px;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${
                  filteredPayments.length === 0
                    ? `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">Nenhum lançamento atende aos filtros aplicados.</td></tr>`
                    : filteredPayments
                        .map(p => {
                          const isPago = p.status === 'pago';
                          const isAtrasado = !isPago && p.dataVencimento < hojeStr;
                          return `
                            <tr>
                              <td style="font-weight: 600;">${studentMap.get(p.alunoId) || 'Aluno'}</td>
                              <td style="color: var(--text-secondary);">${p.descricao}${p.mesReferencia ? ` / ${p.mesReferencia}` : ''}</td>
                              <td>${p.dataVencimento.split('-').reverse().join('/')}</td>
                              <td style="font-weight: 700;">R$ ${p.valor.toFixed(2)}</td>
                              <td>
                                <span class="badge ${isPago ? 'badge-success' : isAtrasado ? 'badge-coral' : 'badge-warning'}" style="font-size: 0.7rem; padding: 2px 7px;">
                                  ${isPago ? 'Pago' : isAtrasado ? 'Atrasado' : 'Pendente'}
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
      </div>
    `;

    // ========================================================
    // EVENT LISTENERS: ABAS
    // ========================================================
    container.querySelector('#btn-tab-rel-alunos')?.addEventListener('click', () => {
      activeTab = 'alunos';
      render();
    });

    container.querySelector('#btn-tab-rel-financeiro')?.addEventListener('click', () => {
      activeTab = 'financeiro';
      render();
    });

    // ========================================================
    // EVENT LISTENERS: FILTROS DE ALUNOS
    // ========================================================
    container.querySelector('#filtro-aluno-status')?.addEventListener('change', (e) => {
      alunoFiltroStatus = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-aluno-instrumento')?.addEventListener('change', (e) => {
      alunoFiltroInstrumento = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-aluno-nivel')?.addEventListener('change', (e) => {
      alunoFiltroNivel = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-aluno-plano')?.addEventListener('change', (e) => {
      alunoFiltroPlano = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-aluno-financeiro')?.addEventListener('change', (e) => {
      alunoFiltroFinanceiro = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-aluno-ordem')?.addEventListener('change', (e) => {
      alunoFiltroOrdem = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#btn-limpar-filtros-alunos')?.addEventListener('click', () => {
      alunoFiltroStatus = 'todos';
      alunoFiltroInstrumento = 'todos';
      alunoFiltroNivel = 'todos';
      alunoFiltroPlano = 'todos';
      alunoFiltroFinanceiro = 'todos';
      alunoFiltroOrdem = 'nome_asc';
      render();
    });

    // ========================================================
    // EVENT LISTENERS: FILTROS FINANCEIRO
    // ========================================================
    container.querySelector('#filtro-fin-dataini')?.addEventListener('change', (e) => {
      finFiltroDataIni = (e.target as HTMLInputElement).value;
      render();
    });
    container.querySelector('#filtro-fin-datafim')?.addEventListener('change', (e) => {
      finFiltroDataFim = (e.target as HTMLInputElement).value;
      render();
    });
    container.querySelector('#filtro-fin-mesref-ini')?.addEventListener('change', (e) => {
      finFiltroMesRefIni = (e.target as HTMLInputElement).value;
      render();
    });
    container.querySelector('#filtro-fin-mesref-fim')?.addEventListener('change', (e) => {
      finFiltroMesRefFim = (e.target as HTMLInputElement).value;
      render();
    });
    container.querySelector('#filtro-fin-status')?.addEventListener('change', (e) => {
      finFiltroStatus = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-fin-aluno')?.addEventListener('change', (e) => {
      finFiltroAluno = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-fin-metodo')?.addEventListener('change', (e) => {
      finFiltroMetodo = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#filtro-fin-ordem')?.addEventListener('change', (e) => {
      finFiltroOrdem = (e.target as HTMLSelectElement).value;
      render();
    });
    container.querySelector('#btn-limpar-filtros-fin')?.addEventListener('click', () => {
      finFiltroDataIni = '';
      finFiltroDataFim = '';
      finFiltroMesRefIni = '';
      finFiltroMesRefFim = '';
      finFiltroStatus = 'todos';
      finFiltroAluno = 'todos';
      finFiltroMetodo = 'todos';
      finFiltroOrdem = 'vencimento_asc';
      render();
    });

    // ========================================================
    // EMISSÃO DE PDF COM CABEÇALHO E RODAPÉ CORPORATIVOS
    // ========================================================
    container.querySelector('#btn-gerar-pdf')?.addEventListener('click', async () => {
      if (!canGenerate) {
        showToast('Você não possui permissão para emitir relatórios.', 'error');
        return;
      }

      const btn = container.querySelector('#btn-gerar-pdf') as HTMLButtonElement | null;
      const originalText = btn ? btn.innerHTML : '';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span>⏳</span> Gerando PDF...';
      }

      try {
        if (activeTab === 'alunos') {
          await emitirPdfAlunos(settings, filteredStudents, plans);
        } else {
          await emitirPdfFinanceiro(settings, filteredPayments, students, {
            mesIni: finFiltroMesRefIni,
            mesFim: finFiltroMesRefFim
          });
        }
        showToast('PDF gerado com sucesso!', 'success');
      } catch (err) {
        console.error('Erro ao gerar PDF:', err);
        showToast('Ocorreu um erro ao gerar o documento PDF.', 'error');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalText;
        }
      }
    });
  }

  // ========================================================
  // RENDERIZADOR DO LOGOTIPO ACUSTICAMENTE EM PNG PARA O PDF
  // ========================================================
  function getAcusticamenteLogoPng(): Promise<string> {
    return new Promise((resolve) => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 160;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve('');
          return;
        }

        // Fundo escuro com cantos arredondados (identidade Acusticamente)
        const radius = 32;
        ctx.fillStyle = '#181c2b';
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(160 - radius, 0);
        ctx.quadraticCurveTo(160, 0, 160, radius);
        ctx.lineTo(160, 160 - radius);
        ctx.quadraticCurveTo(160, 160, 160 - radius, 160);
        ctx.lineTo(radius, 160);
        ctx.quadraticCurveTo(0, 160, 0, 160 - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.fill();

        // Borda sutil de acabamento
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#2d3748';
        ctx.stroke();

        const img = new Image();
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path d="M 50 16 C 68 16 84 31 84 50 C 84 58 81 65 76 71" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 50 84 C 32 84 16 69 16 50 C 16 42 19 35 24 29" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 42 24 C 60 24 74 38 74 54" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M 58 76 C 40 76 26 62 26 46" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
            <circle cx="16" cy="50" r="3" fill="#ea4335" />
            <rect x="23" y="38" width="6" height="24" rx="3" fill="#ea4335" />
            <rect x="32" y="30" width="6" height="40" rx="3" fill="#ea4335" />
            <rect x="41" y="22" width="6" height="56" rx="3" fill="#ea4335" />
            <rect x="50" y="32" width="6" height="18" rx="3" fill="#ffffff" />
            <rect x="50" y="52" width="6" height="26" rx="3" fill="#ea4335" />
            <rect x="59" y="40" width="6" height="10" rx="3" fill="#ffffff" />
            <rect x="59" y="53" width="6" height="23" rx="3" fill="#ea4335" />
            <rect x="68" y="34" width="6" height="32" rx="3" fill="#ffffff" />
            <circle cx="80" cy="54" r="3" fill="#ffffff" />
          </svg>
        `;

        const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        img.onload = () => {
          ctx.drawImage(img, 20, 20, 120, 120);
          URL.revokeObjectURL(url);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          resolve('');
        };
        img.src = url;
      } catch {
        resolve('');
      }
    });
  }

  // ========================================================
  // GERAÇÃO DE PDF DE ALUNOS (JSPDF + JSPDF-AUTOTABLE)
  // ========================================================
  async function emitirPdfAlunos(settings: any, alunos: Student[], plans: TeachingPlan[]): Promise<void> {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const dataEmissao = new Date().toLocaleString('pt-BR');
    const nomeEmpresa = settings.nomeFantasia || settings.nomeEscola || 'ACUSTICAMENTE';
    const razao = settings.razaoSocial || 'Acusticamente Ensino Musical Ltda';
    const cnpj = settings.cnpj ? `CNPJ: ${settings.cnpj}` : '';
    const contato = [settings.telefoneContato, settings.emailContato].filter(Boolean).join(' • ');
    const endereco = [
      settings.logradouro ? `${settings.logradouro}, ${settings.numero || 's/n'}` : '',
      settings.complemento,
      settings.bairro,
      settings.cidade ? `${settings.cidade} - ${settings.estado || 'SP'}` : '',
      settings.cep ? `CEP: ${settings.cep}` : ''
    ].filter(Boolean).join(' • ');

    // 1. Logotipo oficial da instituição
    const logoPng = await getAcusticamenteLogoPng();
    if (logoPng) {
      doc.addImage(logoPng, 'PNG', 14, 12, 17, 17);
    }

    const textX = logoPng ? 35 : 14;

    // 2. Cabeçalho Corporativo: Nome Fantasia em destaque
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42); // #0f172a
    doc.text(nomeEmpresa, textX, 17);

    // Razão Social & CNPJ
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105); // #475569
    doc.text([razao, cnpj].filter(Boolean).join(' • '), textX, 21.5);

    // Endereço completo
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139); // #64748b
    if (endereco) {
      doc.text(endereco, textX, 25.5);
    }

    // Contatos
    if (contato) {
      doc.text(contato, textX, endereco ? 29.5 : 25.5);
    }

    // 3. Lado direito: Título do Relatório e Metadados
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(217, 72, 59); // Cor de destaque Acusticamente (#d9483b)
    doc.text('RELATÓRIO DE ALUNOS', 196, 17, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`Emissão: ${dataEmissao}`, 196, 22, { align: 'right' });
    doc.text(`Total: ${alunos.length} aluno(s)`, 196, 26.5, { align: 'right' });

    // Linha divisória horizontal
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(14, 33, 196, 33);

    // 4. Resumo Analítico (Cards de Indicadores)
    const totalAtivos = alunos.filter(a => a.status === 'ativo').length;
    const totalInativos = alunos.filter(a => a.status === 'inativo').length;
    const totalInadimplentes = alunos.filter(a => storageService.isStudentOverdue(a.id)).length;

    const cards = [
      { label: 'TOTAL DE ALUNOS', value: `${alunos.length}`, color: [15, 23, 42] },
      { label: 'ALUNOS ATIVOS', value: `${totalAtivos}`, color: [22, 163, 74] },
      { label: 'ALUNOS INATIVOS', value: `${totalInativos}`, color: [202, 138, 4] },
      { label: 'INADIMPLENTES', value: `${totalInadimplentes}`, color: [220, 38, 38] }
    ];

    const cardW = 43;
    const cardH = 12;
    const cardY = 36;
    cards.forEach((c, idx) => {
      const cx = 14 + idx * (cardW + 3);
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(cx, cardY, cardW, cardH, 1.5, 1.5, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(cx, cardY, cardW, cardH, 1.5, 1.5, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(100, 116, 139);
      doc.text(c.label, cx + 3, cardY + 4);

      doc.setFontSize(10.5);
      doc.setTextColor(c.color[0], c.color[1], c.color[2]);
      doc.text(c.value, cx + 3, cardY + 9.5);
    });

    // 5. Tabela de Alunos com autoTable
    const tableData = alunos.map((s, idx) => {
      const plan = plans.find(p => p.id === s.planoId);
      const isAtivo = s.status === 'ativo';
      const isOverdue = storageService.isStudentOverdue(s.id);
      return [
        (idx + 1).toString(),
        s.nome,
        s.instrumentoPrincipal || 'Música Geral',
        s.telefone || '-',
        plan?.nome || '-',
        isAtivo ? 'Ativo' : 'Inativo',
        isOverdue ? 'Atrasado' : 'Em dia'
      ];
    });

    autoTable(doc, {
      startY: 52,
      margin: { left: 14, right: 14, bottom: 18 },
      head: [['#', 'Nome do Aluno', 'Instrumento', 'Telefone', 'Plano de Ensino', 'Status', 'Financeiro']],
      body: tableData.length > 0 ? tableData : [['-', 'Nenhum registro selecionado', '-', '-', '-', '-', '-']],
      theme: 'grid',
      headStyles: {
        fillColor: [24, 28, 43], // Identidade visual Acusticamente
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 7.5,
        halign: 'left',
        valign: 'middle'
      },
      styles: {
        font: 'helvetica',
        fontSize: 7.5,
        cellPadding: 2,
        textColor: [30, 41, 59],
        lineColor: [226, 232, 240],
        lineWidth: 0.1
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      columnStyles: {
        0: { cellWidth: 8, halign: 'center', textColor: [148, 163, 184] },
        1: { cellWidth: 50, fontStyle: 'bold' },
        2: { cellWidth: 32 },
        3: { cellWidth: 28 },
        4: { cellWidth: 34 },
        5: { cellWidth: 15, halign: 'center' },
        6: { cellWidth: 15, halign: 'center' }
      },
      didParseCell: (data) => {
        if (data.section === 'body') {
          if (data.column.index === 5) {
            if (data.cell.raw === 'Ativo') {
              data.cell.styles.textColor = [22, 163, 74];
              data.cell.styles.fontStyle = 'bold';
            } else {
              data.cell.styles.textColor = [202, 138, 4];
            }
          }
          if (data.column.index === 6) {
            if (data.cell.raw === 'Atrasado') {
              data.cell.styles.textColor = [220, 38, 38];
              data.cell.styles.fontStyle = 'bold';
            } else {
              data.cell.styles.textColor = [22, 163, 74];
            }
          }
        }
      }
    });

    // 6. Rodapé Corporativo com Paginação em todas as páginas
    const totalPages = (doc.internal as any).getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(14, 287, 196, 287);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text(`${nomeEmpresa} • Sistema de Gestão Escolar & Pedagógica`, 14, 292);
      doc.text(`Página ${i} de ${totalPages}`, 196, 292, { align: 'right' });
    }

    // 7. Abrir em nova aba com o visualizador nativo de PDF (sem diálogo de impressão forçado)
    const blob = doc.output('blob');
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

  // ========================================================
  // GERAÇÃO DE PDF FINANCEIRO (JSPDF + JSPDF-AUTOTABLE)
  // ========================================================
  async function emitirPdfFinanceiro(
    settings: any,
    lancamentos: Payment[],
    students: Student[],
    filtros?: { mesIni?: string; mesFim?: string }
  ): Promise<void> {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const studentMap = new Map(students.map(s => [s.id, s.nome]));
    const dataEmissao = new Date().toLocaleString('pt-BR');
    const nomeEmpresa = settings.nomeFantasia || settings.nomeEscola || 'ACUSTICAMENTE';
    const razao = settings.razaoSocial || 'Acusticamente Ensino Musical Ltda';
    const cnpj = settings.cnpj ? `CNPJ: ${settings.cnpj}` : '';
    const contato = [settings.telefoneContato, settings.emailContato].filter(Boolean).join(' • ');
    const endereco = [
      settings.logradouro ? `${settings.logradouro}, ${settings.numero || 's/n'}` : '',
      settings.complemento,
      settings.bairro,
      settings.cidade ? `${settings.cidade} - ${settings.estado || 'SP'}` : '',
      settings.cep ? `CEP: ${settings.cep}` : ''
    ].filter(Boolean).join(' • ');

    const hojeStr = new Date().toISOString().slice(0, 10);
    const totalGeral = lancamentos.reduce((acc, p) => acc + p.valor, 0);
    const totalPago = lancamentos.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0);
    const totalPendente = lancamentos.filter(p => p.status !== 'pago').reduce((acc, p) => acc + p.valor, 0);

    // 1. Logotipo oficial
    const logoPng = await getAcusticamenteLogoPng();
    if (logoPng) {
      doc.addImage(logoPng, 'PNG', 14, 12, 17, 17);
    }

    const textX = logoPng ? 35 : 14;

    // 2. Cabeçalho Corporativo: Nome Fantasia
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text(nomeEmpresa, textX, 17);

    // Razão Social & CNPJ
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text([razao, cnpj].filter(Boolean).join(' • '), textX, 21.5);

    // Endereço completo
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    if (endereco) {
      doc.text(endereco, textX, 25.5);
    }

    // Contatos
    if (contato) {
      doc.text(contato, textX, endereco ? 29.5 : 25.5);
    }

    // 3. Lado direito: Título do Relatório Financeiro
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(5, 150, 105); // Verde esmeralda (#059669)
    doc.text('RELATÓRIO FINANCEIRO', 196, 17, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`Emissão: ${dataEmissao}`, 196, 22, { align: 'right' });

    let infoRef = `Total: ${lancamentos.length} registro(s)`;
    if (filtros?.mesIni && filtros?.mesFim) {
      infoRef = `Ref: ${filtros.mesIni} a ${filtros.mesFim} • ${lancamentos.length} reg.`;
    } else if (filtros?.mesIni) {
      infoRef = `Ref: a partir de ${filtros.mesIni} • ${lancamentos.length} reg.`;
    } else if (filtros?.mesFim) {
      infoRef = `Ref: até ${filtros.mesFim} • ${lancamentos.length} reg.`;
    }
    doc.text(infoRef, 196, 26.5, { align: 'right' });

    // Linha divisória horizontal
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(14, 33, 196, 33);

    // 4. Resumo Analítico Financeiro (Cards)
    const cards = [
      { label: 'LANÇAMENTOS', value: `${lancamentos.length}`, color: [15, 23, 42] },
      { label: 'MONTANTE GERAL', value: `R$ ${totalGeral.toFixed(2)}`, color: [15, 23, 42] },
      { label: 'TOTAL RECEBIDO', value: `R$ ${totalPago.toFixed(2)}`, color: [22, 163, 74] },
      { label: 'PENDENTE / ATRASO', value: `R$ ${totalPendente.toFixed(2)}`, color: [220, 38, 38] }
    ];

    const cardW = 43;
    const cardH = 12;
    const cardY = 36;
    cards.forEach((c, idx) => {
      const cx = 14 + idx * (cardW + 3);
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(cx, cardY, cardW, cardH, 1.5, 1.5, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(cx, cardY, cardW, cardH, 1.5, 1.5, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(100, 116, 139);
      doc.text(c.label, cx + 3, cardY + 4);

      doc.setFontSize(10);
      doc.setTextColor(c.color[0], c.color[1], c.color[2]);
      doc.text(c.value, cx + 3, cardY + 9.5);
    });

    // 5. Tabela Financeira com autoTable
    const tableData = lancamentos.map((p, idx) => {
      const isPago = p.status === 'pago';
      const isAtrasado = !isPago && p.dataVencimento < hojeStr;
      const statusText = isPago ? 'Pago' : isAtrasado ? 'Atrasado' : 'Pendente';
      const desc = p.descricao + (p.mesReferencia ? ` / ${p.mesReferencia}` : '');
      const venc = p.dataVencimento.split('-').reverse().join('/');

      return [
        (idx + 1).toString(),
        studentMap.get(p.alunoId) || 'Aluno',
        desc,
        venc,
        `R$ ${p.valor.toFixed(2)}`,
        statusText
      ];
    });

    autoTable(doc, {
      startY: 52,
      margin: { left: 14, right: 14, bottom: 18 },
      head: [['#', 'Aluno', 'Descrição / Referência', 'Vencimento', 'Valor (R$)', 'Status']],
      body: tableData.length > 0 ? tableData : [['-', 'Nenhum lançamento selecionado', '-', '-', '-', '-']],
      theme: 'grid',
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 7.5,
        halign: 'left',
        valign: 'middle'
      },
      styles: {
        font: 'helvetica',
        fontSize: 7.5,
        cellPadding: 2,
        textColor: [30, 41, 59],
        lineColor: [226, 232, 240],
        lineWidth: 0.1
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      columnStyles: {
        0: { cellWidth: 8, halign: 'center', textColor: [148, 163, 184] },
        1: { cellWidth: 50, fontStyle: 'bold' },
        2: { cellWidth: 54 },
        3: { cellWidth: 26, halign: 'center' },
        4: { cellWidth: 26, halign: 'right', fontStyle: 'bold' },
        5: { cellWidth: 18, halign: 'center' }
      },
      didParseCell: (data) => {
        if (data.section === 'body' && data.column.index === 5) {
          if (data.cell.raw === 'Pago') {
            data.cell.styles.textColor = [22, 163, 74];
            data.cell.styles.fontStyle = 'bold';
          } else if (data.cell.raw === 'Atrasado') {
            data.cell.styles.textColor = [220, 38, 38];
            data.cell.styles.fontStyle = 'bold';
          } else {
            data.cell.styles.textColor = [202, 138, 4];
          }
        }
      }
    });

    // 6. Rodapé Corporativo com Paginação
    const totalPages = (doc.internal as any).getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(14, 287, 196, 287);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text(`${nomeEmpresa} • Gestão Financeira & Escolar`, 14, 292);
      doc.text(`Página ${i} de ${totalPages}`, 196, 292, { align: 'right' });
    }

    // 7. Abrir em nova aba com o visualizador nativo de PDF (sem diálogo de impressão forçado)
    const blob = doc.output('blob');
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

  render();
  return container;
}
