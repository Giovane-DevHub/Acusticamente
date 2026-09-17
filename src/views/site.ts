import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { renderBrandLogo } from '../assets/logo';
import { ICONS } from '../utils/ui';

export function renderSite(onNavigate: (screen: string) => void): HTMLElement {
  const container = document.createElement('div');
  container.className = 'public-site-wrapper';

  const settings = storageService.getSettings();
  const schoolName = settings.nomeFantasia || settings.nomeEscola || 'Acusticamente - Escola de Música';
  const schoolShortName = settings.nomeMenu || 'Acusticamente';
  const phone = settings.telefoneContato || '(11) 98231-1122';
  const phoneClean = phone.replace(/\D/g, '');
  const email = settings.emailContato || 'contato@acusticamente.com.br';
  const city = settings.cidade ? `${settings.cidade} - ${settings.estado || 'SP'}` : 'São Paulo - SP';
  const address = settings.logradouro ? `${settings.logradouro}, ${settings.numero || ''} ${settings.bairro ? '- ' + settings.bairro : ''}` : 'Rua das Cordas, 120 - Centro';

  const waLink = `https://wa.me/55${phoneClean}?text=${encodeURIComponent('Olá! Gostaria de informações sobre as aulas na Acusticamente.')}`;

  const isUserLogged = authService.isAuthenticated();

  container.innerHTML = `
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Superior Esquerdo: Botão Pequeno Entrar conforme solicitado -->
        <div class="site-header-left">
          <button type="button" class="btn-site-login" id="btn-header-login" title="${isUserLogged ? 'Acessar o Painel de Gestão' : 'Área do Aluno e Equipe'}">
            <span class="site-login-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
            </span>
            <span>${isUserLogged ? 'Painel' : 'Entrar'}</span>
          </button>
        </div>

        <!-- Centro: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${renderBrandLogo(settings.logotipoCustomizado, 36)}
          </div>
          <span class="site-brand-title">${schoolShortName}</span>
        </div>

        <!-- Canto Direito: Links e CTA WhatsApp -->
        <div class="site-header-right">
          <nav class="site-nav-links">
            <a href="#cursos">Cursos</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </nav>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-site-cta">
            <span>Aula Experimental</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="site-hero">
      <div class="site-hero-bg-glow"></div>
      <div class="site-hero-content">
        <div class="site-hero-badge">
          <span>🎵 Escola de Música &bull; Do Iniciante ao Avançado</span>
        </div>
        <h1 class="site-hero-title">
          Descubra o prazer de <span>tocar o instrumento</span> dos seus sonhos.
        </h1>
        <p class="site-hero-subtitle">
          Aulas práticas e envolventes de violão, piano, técnica vocal, bateria e musicalização. 
          Metodologia personalizada para o seu ritmo e com acompanhamento pedagógico contínuo.
        </p>
        <div class="site-hero-actions">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-hero-primary">
            <span>💬 Agendar Aula Experimental</span>
          </a>
          <a href="#cursos" class="btn-hero-secondary">
            <span>Ver Cursos Disponíveis ↓</span>
          </a>
        </div>

        <!-- Selos de Confiança -->
        <div class="site-stats-row">
          <div class="site-stat-card">
            <strong class="stat-number">+500</strong>
            <span class="stat-label">Alunos Formados</span>
          </div>
          <div class="site-stat-card">
            <strong class="stat-number">100%</strong>
            <span class="stat-label">Aulas Práticas</span>
          </div>
          <div class="site-stat-card">
            <strong class="stat-number">6+</strong>
            <span class="stat-label">Instrumentos</span>
          </div>
          <div class="site-stat-card">
            <strong class="stat-number">4.9 ★</strong>
            <span class="stat-label">Avaliação dos Pais</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Cursos & Instrumentos -->
    <section class="site-section" id="cursos">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">NOSSOS CURSOS</span>
          <h2 class="section-title">Encontre o Instrumento Perfeito para Você</h2>
          <p class="section-subtitle">Aulas pensadas para todas as faixas etárias, do primeiro acorde aos arranjos avançados.</p>
        </div>

        <div class="site-courses-grid">
          
          <!-- Curso 1: Violão e Guitarra -->
          <div class="site-course-card">
            <div class="course-icon-badge">🪕</div>
            <h3>Violão &amp; Harmonia Prática</h3>
            <p>Aprenda acordes, batidas rítmicas, dedilhados e o repertório que você mais ama tocar em reuniões de amigos ou no palco.</p>
            <ul class="course-topics">
              <li>✓ Postura e transição ágil de acordes</li>
              <li>✓ Batidas populares, MPB, Pop e Rock</li>
              <li>✓ Leitura de cifras, tablaturas e levadas</li>
            </ul>
            <a href="${waLink}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 2: Piano & Teclado -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎹</div>
            <h3>Piano &amp; Teclado</h3>
            <p>Desenvolva independência das mãos, leitura musical fluida e sensibilidade melódica em repertório clássico ou moderno.</p>
            <ul class="course-topics">
              <li>✓ Digitação e exercícios posturais</li>
              <li>✓ Teoria aplicada, harmonia e escalas</li>
              <li>✓ Clássicos, trilhas sonoras e louvor</li>
            </ul>
            <a href="${waLink}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 3: Canto & Técnica Vocal -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎤</div>
            <h3>Técnica Vocal &amp; Canto</h3>
            <p>Libere todo o potencial da sua voz sem esforço, com afinação precisa, respiração diafragmática e projeção sonora.</p>
            <ul class="course-topics">
              <li>✓ Apoio respiratório e ressonância</li>
              <li>✓ Afinação e extensão vocal sem tensão</li>
              <li>✓ Interpretação e presença de palco</li>
            </ul>
            <a href="${waLink}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 4: Bateria & Percussão -->
          <div class="site-course-card">
            <div class="course-icon-badge">🥁</div>
            <h3>Bateria &amp; Percussão</h3>
            <p>Domine a pulsação, coordenação motora dos quatro membros e os ritmos mais dinâmicos da música contemporânea.</p>
            <ul class="course-topics">
              <li>✓ Rudimentos e precisão com metrônomo</li>
              <li>✓ Levadas de Rock, Funk, Samba e Jazz</li>
              <li>✓ Dinâmica de conjunto e acompanhamento</li>
            </ul>
            <a href="${waLink}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 5: Musicalização Infantil -->
          <div class="site-course-card highlight">
            <div class="course-icon-badge">🎶</div>
            <h3>Musicalização Infantil</h3>
            <p>Para crianças de 4 a 10 anos. Estímulo à criatividade, percepção auditiva, ritmo e socialização de forma lúdica.</p>
            <ul class="course-topics">
              <li>✓ Jogos sonoros e instrumentos infantis</li>
              <li>✓ Discriminação de timbres e alturas</li>
              <li>✓ Base sólida para escolha de instrumento</li>
            </ul>
            <a href="${waLink}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

          <!-- Curso 6: Contrabaixo & Teoria -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎸</div>
            <h3>Contrabaixo &amp; Harmonia</h3>
            <p>A alma do groove! Aprenda condução rítmica, linhas de baixo sólidas e comunicação afinada com a bateria.</p>
            <ul class="course-topics">
              <li>✓ Técnicas de pizzicato e palheta</li>
              <li>✓ Escalas pentatônicas e arpejos</li>
              <li>✓ Criação de grooves marcantes</li>
            </ul>
            <a href="${waLink}" target="_blank" class="course-link-cta">Saber mais no WhatsApp →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Seção Metodologia -->
    <section class="site-section bg-darker" id="metodologia">
      <div class="site-container">
        <div class="methodology-split">
          <div class="methodology-text">
            <span class="section-tag">POR QUE A ACUSTICAMENTE?</span>
            <h2 class="section-title">Um Método Humano, Descontraído e Eficaz</h2>
            <p class="section-desc">
              Acreditamos que aprender música não pode ser uma tarefa engessada. Nosso modelo pedagógico integra técnica de verdade às músicas que você gosta de ouvir.
            </p>

            <div class="methodology-features">
              <div class="feat-item">
                <div class="feat-icon">🎯</div>
                <div>
                  <h4>Aulas 100% Personalizadas</h4>
                  <p>Cada aluno tem seu plano de ensino individual, com metas e repertório alinhados ao seu objetivo.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">📅</div>
                <div>
                  <h4>Flexibilidade com Reposições</h4>
                  <p>Avisou com antecedência? Você não perde a aula! Nosso sistema garante créditos para repor suas aulas perdidas.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🎙️</div>
                <div>
                  <h4>Salas com Tratamento Acústico</h4>
                  <p>Ambiente isolado, climatizado e equipado com instrumentos de marcas renomadas para a melhor experiência sonora.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="methodology-visual">
            <div class="methodology-card-preview">
              <div class="preview-header">
                <span class="preview-dot red"></span>
                <span class="preview-dot yellow"></span>
                <span class="preview-dot green"></span>
                <span class="preview-title">Acusticamente Experience</span>
              </div>
              <div class="preview-body">
                <div class="preview-quote">
                  "A música é a arte de expressar o indizível. Aqui você aprende tocando desde o primeiro dia."
                </div>
                <div class="preview-tags">
                  <span>#PráticaMusical</span>
                  <span>#SemPressão</span>
                  <span>#EvoluçãoConstante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="site-section" id="depoimentos">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">HISTÓRIAS REAIS</span>
          <h2 class="section-title">O que Dizem Nossos Alunos e Pais</h2>
          <p class="section-subtitle">Resultados que transformam vidas através da expressão musical.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"Comecei do zero com 34 anos achando que não conseguiria. Hoje já toco minhas músicas favoritas no violão e me sinto realizado!"</p>
            <div class="author-info">
              <strong>Marcelo F.</strong>
              <span>Aluno de Violão</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"A metodologia de musicalização para crianças é sensacional. Minha filha de 6 anos adora as quartas-feiras de aula e desenvolveu muito o foco."</p>
            <div class="author-info">
              <strong>Juliana M.</strong>
              <span>Mãe de aluna</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"Professores extremamente atenciosos e didáticos. A técnica vocal mudou minha segurança para cantar em público sem forçar a garganta."</p>
            <div class="author-info">
              <strong>Renan B.</strong>
              <span>Aluno de Canto</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final WhatsApp -->
    <section class="site-cta-banner">
      <div class="site-container cta-banner-inner">
        <h2>Pronto para Começar sua Jornada Musical?</h2>
        <p>Agende uma aula experimental sem compromisso e venha conhecer nosso espaço.</p>
        <a href="${waLink}" target="_blank" class="btn-banner-whatsapp">
          <span>📲 Chamar no WhatsApp: ${phone}</span>
        </a>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="site-footer" id="contato">
      <div class="site-container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-brand">
            ${renderBrandLogo(settings.logotipoCustomizado, 32)}
            <span>${schoolShortName}</span>
          </div>
          <p>${schoolName}</p>
          <div class="footer-address">
            <p>📍 ${address}</p>
            <p>🏙️ ${city}</p>
            <p>✉️ ${email}</p>
            <p>📞 ${phone}</p>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#metodologia">Metodologia</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Portal Interno</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 12px;">
            Acesso exclusivo para professores, atendentes e administração da escola.
          </p>
          <button type="button" class="btn-footer-admin" id="btn-footer-login">
            🔐 Acessar Área de Gestão
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="site-container footer-bottom-inner">
          <span>&copy; ${new Date().getFullYear()} ${schoolName}. Todos os direitos reservados.</span>
          <span>Desenvolvido por <strong>DevHub</strong></span>
        </div>
      </div>
    </footer>
  `;

  // Eventos de clique nos botões de login
  container.querySelector('#btn-header-login')?.addEventListener('click', () => {
    onNavigate(isUserLogged ? 'home' : 'login');
  });

  container.querySelector('#btn-footer-login')?.addEventListener('click', () => {
    onNavigate(isUserLogged ? 'home' : 'login');
  });

  container.querySelector('#site-logo-link')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return container;
}
