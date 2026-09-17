import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { renderBrandLogo } from '../assets/logo';

const WA_ICON_SVG = `
  <svg class="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24zm-4.7 4.23c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.54 2.41 3.79 3.32.53.22.95.35 1.28.45.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.22-.15-.46-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.55-.41z"/>
  </svg>
`;

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

  container.innerHTML = `
    <!-- Barra Superior de Navegação -->
    <header class="site-header">
      <div class="site-header-container">
        
        <!-- Canto Superior Esquerdo: Botão Pequeno Entrar estritamente conforme solicitado -->
        <div class="site-header-left">
          <button type="button" class="btn-site-login" id="btn-header-login" title="Acessar Sistema">
            <span class="site-login-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
            </span>
            <span>Entrar</span>
          </button>
        </div>

        <!-- Centro: Marca e Logotipo -->
        <div class="site-brand" id="site-logo-link">
          <div class="site-logo">
            ${renderBrandLogo(settings.logotipoCustomizado, 36)}
          </div>
          <span class="site-brand-title">${schoolShortName}</span>
        </div>

        <!-- Canto Direito: Apenas WhatsApp com logo e texto Entrar em contato -->
        <div class="site-header-right">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp">
            ${WA_ICON_SVG}
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="site-hero">
      <div class="site-hero-bg-glow"></div>
      <div class="site-hero-content">
        <div class="site-hero-badge">
          <span>🎵 Escola de Música</span>
        </div>
        <h1 class="site-hero-title">
          Descubra o prazer de <span>tocar o instrumento</span> dos seus sonhos.
        </h1>
        <p class="site-hero-subtitle">
          Aulas práticas e acolhedoras de violão, piano, bateria, contrabaixo e musicalização infantil. 
          Aprenda no seu ritmo, com atenção individual e professores dedicados.
        </p>
        <div class="site-hero-actions">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-hero-whatsapp">
            ${WA_ICON_SVG}
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Seção de Cursos & Instrumentos -->
    <section class="site-section" id="cursos">
      <div class="site-container">
        <div class="site-section-header">
          <span class="section-tag">AULAS INDIVIDUAIS E EM GRUPO</span>
          <h2 class="section-title">Cursos de Música</h2>
          <p class="section-subtitle">Para todas as idades, desde o primeiro contato até o aperfeiçoamento.</p>
        </div>

        <div class="site-courses-grid">
          
          <!-- Curso 1: Violão -->
          <div class="site-course-card">
            <div class="course-icon-badge">🪕</div>
            <h3>Violão &amp; Guitarra</h3>
            <p>Acordes, ritmos, dedilhados e o repertório que você mais gosta de tocar.</p>
            <ul class="course-topics">
              <li>✓ Postura e passagens de acordes</li>
              <li>✓ Batidas populares, Pop, Rock e MPB</li>
              <li>✓ Leitura facilitada de cifras e tablaturas</li>
            </ul>
          </div>

          <!-- Curso 2: Piano & Teclado -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎹</div>
            <h3>Piano &amp; Teclado</h3>
            <p>Independência das mãos, harmonia e sensibilidade ao tocar suas canções preferidas.</p>
            <ul class="course-topics">
              <li>✓ Exercícios de digitação e postura</li>
              <li>✓ Noções harmônicas e leitura musical</li>
              <li>✓ Músicas clássicas e populares</li>
            </ul>
          </div>

          <!-- Curso 3: Bateria -->
          <div class="site-course-card">
            <div class="course-icon-badge">🥁</div>
            <h3>Bateria &amp; Ritmo</h3>
            <p>Coordenação motora, pulsação e dinamismo nos ritmos que movem a música.</p>
            <ul class="course-topics">
              <li>✓ Coordenação de braços e pernas</li>
              <li>✓ Levadas e viradas essenciais</li>
              <li>✓ Prática musical com instrumentos reais</li>
            </ul>
          </div>

          <!-- Curso 4: Musicalização Infantil -->
          <div class="site-course-card highlight">
            <div class="course-icon-badge">🎶</div>
            <h3>Musicalização Infantil</h3>
            <p>Desenvolvimento da criatividade, ritmo e audição para crianças de forma divertida e acolhedora.</p>
            <ul class="course-topics">
              <li>✓ Jogos e brincadeiras sonoras</li>
              <li>✓ Percepção rítmica e de timbres</li>
              <li>✓ Primeiro contato carinhoso com instrumentos</li>
            </ul>
          </div>

          <!-- Curso 5: Contrabaixo -->
          <div class="site-course-card">
            <div class="course-icon-badge">🎸</div>
            <h3>Contrabaixo</h3>
            <p>A base de qualquer som. Domine o tempo, condução rítmica e as notas certas.</p>
            <ul class="course-topics">
              <li>✓ Técnica de mão direita e apoio</li>
              <li>✓ Linhas de baixo e harmonia</li>
              <li>✓ Conexão rítmica com a bateria</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- Seção Metodologia Aconchegante -->
    <section class="site-section bg-darker" id="metodologia">
      <div class="site-container">
        <div class="methodology-split">
          <div class="methodology-text">
            <span class="section-tag">NOSSA PROPOSTA</span>
            <h2 class="section-title">Um Espaço Acolhedor Para Você Aprender no Seu Ritmo</h2>
            <p class="section-desc">
              Aqui cada pessoa tem seu tempo e suas preferências. Valorizamos o ensino humano e próximo, sem a frieza de métodos padronizados.
            </p>

            <div class="methodology-features">
              <div class="feat-item">
                <div class="feat-icon">🎯</div>
                <div>
                  <h4>Atenção Individualizada</h4>
                  <p>Aulas focadas no que você deseja aprender e tocar, respeitando o seu tempo e objetivos.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🏠</div>
                <div>
                  <h4>Ambiente Agradável</h4>
                  <p>Espaço tranquilo, bem cuidado e com instrumentos prontos para o seu uso nas aulas.</p>
                </div>
              </div>

              <div class="feat-item">
                <div class="feat-icon">🤝</div>
                <div>
                  <h4>Professores Atenciosos</h4>
                  <p>Didática paciente para quem nunca tocou um instrumento ou quer recomeçar a praticar.</p>
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
                <span class="preview-title">Acusticamente</span>
              </div>
              <div class="preview-body">
                <div class="preview-quote">
                  "A música é para todos. Nosso compromisso é fazer da sua aula o momento mais agradável da sua semana."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final WhatsApp -->
    <section class="site-cta-banner">
      <div class="site-container cta-banner-inner">
        <h2>Quer Conhecer Nosso Espaço?</h2>
        <p>Venha tomar um café conosco e saber mais sobre as aulas e horários disponíveis.</p>
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-banner-whatsapp">
          ${WA_ICON_SVG}
          <span>Entrar em contato</span>
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

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Contato</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
            Fale conosco diretamente pelo WhatsApp para tirar dúvidas sobre turmas e valores.
          </p>
          <div>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-site-whatsapp" style="display: inline-flex;">
              ${WA_ICON_SVG}
              <span>Entrar em contato</span>
            </a>
          </div>
        </div>

        <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Área Restrita</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 12px;">
            Acesso para a equipe e administração da escola.
          </p>
          <button type="button" class="btn-footer-admin" id="btn-footer-login">
            🔐 Entrar no Sistema
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="site-container footer-bottom-inner">
          <span>&copy; ${new Date().getFullYear()} ${schoolName}. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  `;

  // Eventos de clique nos botões de login
  container.querySelector('#btn-header-login')?.addEventListener('click', () => {
    const isLogged = authService.isAuthenticated();
    onNavigate(isLogged ? 'home' : 'login');
  });

  container.querySelector('#btn-footer-login')?.addEventListener('click', () => {
    const isLogged = authService.isAuthenticated();
    onNavigate(isLogged ? 'home' : 'login');
  });

  container.querySelector('#site-logo-link')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return container;
}
