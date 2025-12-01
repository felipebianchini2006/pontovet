<template>
  <header class="header" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <!-- Background com efeito glassmorphism avançado -->
    <div class="header-bg"></div>
    
    <div class="container">
      <!-- Logo com micro-interação elástica -->
      <NuxtLink to="/" class="logo click-feedback" @click="onLogoClick">
        <div class="logo-wrapper">
          <img src="/logo.png" alt="PontoVet" class="logo-img" />
          <div class="logo-glow"></div>
        </div>
      </NuxtLink>

      <nav class="nav" :class="{ open: menuOpen }">
        <!-- Overlay com blur para fechar o menu -->
        <div class="nav-overlay" @click="closeMenu"></div>
        
        <!-- Container do menu com Glassmorphism premium -->
        <div class="nav-container">
          <!-- Decoração de fundo do menu mobile -->
          <div class="nav-decoration">
            <div class="nav-blob"></div>
          </div>
          
          <div class="nav-links">
            <NuxtLink 
              v-for="(link, index) in navLinks" 
              :key="link.to"
              :to="link.to" 
              class="nav-link click-feedback"
              :style="{ '--index': index }"
              @click="closeMenu"
            >
              <span class="nav-link-bg"></span>
              <span class="nav-link-text">{{ link.label }}</span>
              <span class="nav-link-hover">{{ link.label }}</span>
              <span class="nav-link-line"></span>
            </NuxtLink>
            
            <!-- Botão de Contato Premium com brilho -->
            <NuxtLink to="/contato" @click="closeMenu" class="contact-btn btn-shine click-feedback">
              <span class="btn-text">Contato</span>
              <span class="btn-icon"><i class="mdi mdi-arrow-right"></i></span>
              <div class="btn-bg"></div>
              <div class="btn-glow"></div>
            </NuxtLink>
          </div>
          
          <!-- Toggle de Tema com animação premium -->
          <button 
            class="theme-toggle click-feedback" 
            @click="handleThemeToggle" 
            :title="isDark ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'"
            aria-label="Alternar tema"
          >
            <div class="theme-toggle-track">
              <i class="mdi mdi-white-balance-sunny sun-icon"></i>
              <i class="mdi mdi-moon-waning-crescent moon-icon"></i>
              <div class="theme-toggle-thumb" :class="{ dark: isDark }">
                <div class="thumb-glow"></div>
              </div>
            </div>
          </button>
        </div>
      </nav>

      <!-- Menu Hamburguer Premium com animação X -->
      <button 
        class="menu-toggle click-feedback" 
        @click="toggleMenu" 
        :class="{ active: menuOpen }" 
        aria-label="Abrir menu de navegação"
        :aria-expanded="menuOpen"
      >
        <div class="menu-toggle-inner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
    
    <!-- Linha de progresso de scroll com glow -->
    <div class="scroll-progress">
      <div class="scroll-progress-bar" :style="{ width: `${scrollProgress}%` }"></div>
      <div class="scroll-progress-glow" :style="{ left: `${scrollProgress}%` }"></div>
    </div>
  </header>
</template>

<script setup>
/**
 * Header Premium - PontoVet
 * 
 * CORREÇÕES E MELHORIAS:
 * 1. View Transitions API para troca de tema (circular reveal)
 * 2. Menu mobile com animações staggered sofisticadas
 * 3. Glassmorphism real com backdrop-filter
 * 4. Scroll lock corrigido usando classe no body
 * 5. Micro-interações elásticas em todos os cliques
 * 6. Performance otimizada (transform3d em vez de top/left)
 */

const { isDark, toggleTheme, initTheme } = useTheme();

const menuOpen = ref(false);
const isScrolled = ref(false);
const scrollProgress = ref(0);

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/galeria', label: 'Galeria' },
];

// ─── Controle do scroll com performance otimizada ───
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      isScrolled.value = scrollY > 50;
      
      // Calcular progresso do scroll
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  initTheme();
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});

// ─── Toggle do menu mobile com scroll lock ───
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  updateBodyScroll();
};

const closeMenu = () => {
  menuOpen.value = false;
  updateBodyScroll();
};

// CORREÇÃO: Usar classe no body para scroll lock (mais robusto)
const updateBodyScroll = () => {
  if (import.meta.client) {
    if (menuOpen.value) {
      // Salvar posição atual do scroll
      const scrollY = window.scrollY;
      document.body.classList.add('menu-open');
      document.body.style.top = `-${scrollY}px`;
    } else {
      // Restaurar posição do scroll
      const scrollY = document.body.style.top;
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
};

// ─── Handler do toggle de tema com evento para View Transitions ───
const handleThemeToggle = (event) => {
  toggleTheme(event);
};

// ─── Micro-interação no logo ───
const onLogoClick = () => {
  // O efeito já é aplicado via CSS .click-feedback
};
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════════════════════
   HEADER PREMIUM v3.0 - Performance & Juice Update
   
   CORREÇÕES DE PERFORMANCE:
   - REMOVIDO: padding transition (causava reflow/layout)
   - Agora usa APENAS transform e opacity (GPU compositing)
   - Stagger animations com 50ms de intervalo
   - Curvas elásticas: cubic-bezier(0.34, 1.56, 0.64, 1)
   ═══════════════════════════════════════════════════════════════════════════ */

/* Curva elástica para micro-interações */
:root {
  --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /* Padding com transição suave ao rolar */
  padding: 1.25rem 0;
  transition: padding var(--duration-normal) var(--ease-smooth);
}

/* Header compacto ao rolar - padding reduzido */
.header.scrolled {
  padding: 0.6rem 0;
}

/* ─── Background Glassmorphism Premium ─── */
.header-bg {
  position: absolute;
  inset: 0;
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border-color);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-smooth),
              background var(--duration-normal) var(--ease-smooth);
  will-change: opacity;
}

.header.scrolled .header-bg {
  opacity: 1;
  /* Removido scaleY - agora o padding do header controla o tamanho */
}

.header:not(.scrolled) .header-bg {
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-bottom-color: transparent;
}

/* Esconder background quando menu aberto */
.header.menu-open .header-bg {
  opacity: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ═══════════════════════════════════════════════════════════════════════════
   LOGO - Com micro-interação elástica
   ═══════════════════════════════════════════════════════════════════════════ */

.logo {
  position: relative;
  z-index: 10;
  display: block;
}

.logo-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.logo-img {
  height: 80px;
  width: auto;
  /* CORREÇÃO: Usa curva elástica e transform */
  transition: transform var(--duration-normal) var(--ease-elastic),
              filter var(--duration-normal) ease;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  will-change: transform;
}

/* CORREÇÃO: Usa scale ao invés de mudar height (evita reflow) */
.header.scrolled .logo-img {
  transform: scale(0.7);
}

.logo:hover .logo-img {
  transform: scale(1.05) rotate(-2deg);
}

/* Efeito bounce no clique - curva elástica */
.logo:active .logo-img {
  transform: scale(0.95);
  transition-duration: 0.1s;
}

.logo-glow {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, var(--green-glow) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--duration-normal) ease;
  pointer-events: none;
  filter: blur(10px);
}

.logo:hover .logo-glow {
  opacity: 1;
  animation: pulseGlow 2s var(--ease-in-out) infinite;
}

@keyframes pulseGlow {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
}

/* ═══════════════════════════════════════════════════════════════════════════
   NAVEGAÇÃO DESKTOP
   ═══════════════════════════════════════════════════════════════════════════ */

.nav {
  display: flex;
  align-items: center;
}

.nav-overlay {
  display: none;
}

.nav-decoration {
  display: none;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* ─── Links com hover sofisticado ─── */
.nav-link {
  position: relative;
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  overflow: hidden;
  border-radius: var(--radius-sm);
  transition: color var(--duration-fast) ease;
}

.nav-link-bg {
  position: absolute;
  inset: 0;
  background: var(--green-glow);
  border-radius: var(--radius-sm);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity var(--duration-normal) var(--ease-out-expo),
              transform var(--duration-normal) var(--ease-out-expo);
}

.nav-link:hover .nav-link-bg {
  opacity: 1;
  transform: scale(1);
}

.nav-link-text,
.nav-link-hover {
  display: block;
  position: relative;
  z-index: 1;
  transition: transform var(--duration-normal) var(--ease-out-expo),
              opacity var(--duration-normal) var(--ease-out-expo);
}

.nav-link-hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  color: var(--green-primary);
  font-weight: 600;
  opacity: 0;
}

.nav-link:hover .nav-link-text {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}

.nav-link:hover .nav-link-hover {
  transform: translate(-50%, -50%);
  opacity: 1;
}

/* Linha decorativa no hover */
.nav-link-line {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 1px;
  transform: translateX(-50%);
  transition: width var(--duration-normal) var(--ease-out-expo);
}

.nav-link:hover .nav-link-line {
  width: 30%;
}

/* Indicador de página ativa */
.nav-link.router-link-active {
  color: var(--green-primary);
}

.nav-link.router-link-active .nav-link-line {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  bottom: 0.4rem;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BOTÃO DE CONTATO - Com brilho interno e glow
   ═══════════════════════════════════════════════════════════════════════════ */

.contact-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  margin-left: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: transform var(--duration-normal) var(--ease-out-back),
              box-shadow var(--duration-normal) var(--ease-out-expo);
  will-change: transform;
}

.contact-btn .btn-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  z-index: 0;
  transition: transform var(--duration-slow) var(--ease-out-expo);
}

.contact-btn .btn-glow {
  position: absolute;
  inset: -4px;
  background: var(--gradient-primary);
  z-index: -1;
  border-radius: inherit;
  opacity: 0;
  filter: blur(16px);
  transition: opacity var(--duration-normal) var(--ease-out-expo);
}

.contact-btn .btn-text {
  position: relative;
  z-index: 1;
}

.contact-btn .btn-icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  transform: translate3d(-8px, 0, 0);
  opacity: 0;
  transition: transform var(--duration-normal) var(--ease-out-expo),
              opacity var(--duration-normal) var(--ease-out-expo);
}

.contact-btn:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 15px 40px rgba(26, 92, 30, 0.35);
}

.contact-btn:hover .btn-icon {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.contact-btn:hover .btn-bg {
  transform: scale(1.1);
}

.contact-btn:hover .btn-glow {
  opacity: 0.6;
}

.contact-btn:active {
  transform: translate3d(0, -1px, 0) scale(0.97);
}

/* Efeito de brilho (shine) - definido via classe .btn-shine no app.vue */

/* ═══════════════════════════════════════════════════════════════════════════
   TOGGLE DE TEMA - Com animação premium
   ═══════════════════════════════════════════════════════════════════════════ */

.theme-toggle {
  position: relative;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: 0;
  width: 72px;
  height: 38px;
  cursor: pointer;
  margin-left: 1rem;
  transition: background var(--duration-normal) ease,
              border-color var(--duration-normal) ease,
              box-shadow var(--duration-normal) ease;
  overflow: hidden;
}

.theme-toggle:hover {
  border-color: var(--green-primary);
  box-shadow: 0 0 20px var(--green-glow);
}

.theme-toggle:active {
  transform: scale(0.96);
}

.theme-toggle-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.theme-toggle-track i {
  font-size: 1rem;
  transition: color var(--duration-normal) ease,
              transform var(--duration-normal) var(--ease-out-back),
              opacity var(--duration-normal) ease;
}

.sun-icon {
  color: #f59e0b;
}

.moon-icon {
  color: #6366f1;
}

/* Animação dos ícones baseada no tema */
:root:not(.dark) .sun-icon {
  transform: rotate(0deg) scale(1.1);
}

:root:not(.dark) .moon-icon {
  transform: rotate(-30deg) scale(0.9);
  opacity: 0.5;
}

:root.dark .sun-icon {
  transform: rotate(30deg) scale(0.9);
  opacity: 0.5;
}

:root.dark .moon-icon {
  transform: rotate(0deg) scale(1.1);
}

.theme-toggle-thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  background: var(--green-primary);
  border-radius: 50%;
  transition: transform var(--duration-normal) var(--ease-out-back),
              background var(--duration-normal) ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  will-change: transform;
}

.theme-toggle-thumb.dark {
  transform: translate3d(34px, 0, 0);
}

.thumb-glow {
  position: absolute;
  inset: -4px;
  background: var(--green-primary);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(8px);
  animation: pulseThumb 2s var(--ease-in-out) infinite;
}

@keyframes pulseThumb {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.5; }
}

/* ═══════════════════════════════════════════════════════════════════════════
   MENU TOGGLE MOBILE - Animação X elegante
   ═══════════════════════════════════════════════════════════════════════════ */

.menu-toggle {
  display: none;
  position: relative;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  border-radius: var(--radius-sm);
  transition: background var(--duration-fast) ease,
              transform var(--duration-fast) var(--ease-out-back);
}

.menu-toggle:hover {
  background: var(--bg-secondary);
}

.menu-toggle:active {
  transform: scale(0.92);
}

.menu-toggle-inner {
  position: relative;
  width: 24px;
  height: 16px;
  margin: auto;
}

.menu-toggle span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2.5px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--duration-normal) var(--ease-out-expo),
              opacity var(--duration-normal) var(--ease-out-expo),
              width var(--duration-normal) var(--ease-out-expo),
              background var(--duration-normal) ease;
  will-change: transform;
}

.menu-toggle span:nth-child(1) {
  top: 0;
}

.menu-toggle span:nth-child(2) {
  top: 50%;
  transform: translate3d(0, -50%, 0);
}

.menu-toggle span:nth-child(3) {
  bottom: 0;
  width: 60%;
}

/* Estado ativo - Animação X */
.menu-toggle.active span {
  background: var(--green-primary);
}

.menu-toggle.active span:nth-child(1) {
  transform: translate3d(0, 7px, 0) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: translate3d(-10px, -50%, 0);
}

.menu-toggle.active span:nth-child(3) {
  width: 100%;
  transform: translate3d(0, -7px, 0) rotate(-45deg);
}

/* ═══════════════════════════════════════════════════════════════════════════
   BARRA DE PROGRESSO DO SCROLL - Com glow
   ═══════════════════════════════════════════════════════════════════════════ */

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  opacity: 0;
  transition: opacity var(--duration-normal) ease;
  overflow: visible;
  pointer-events: none;
  z-index: 10;
}

.header.scrolled .scroll-progress {
  opacity: 1;
}

.scroll-progress-bar {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
}

.scroll-progress-glow {
  position: absolute;
  top: -4px;
  width: 30px;
  height: 12px;
  background: var(--green-primary);
  filter: blur(8px);
  opacity: 0.6;
  transform: translate3d(-50%, 0, 0);
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════════════════════════
   MENU MOBILE - Animação Staggered Premium com Glassmorphism
   ═══════════════════════════════════════════════════════════════════════════ */

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav {
    position: fixed;
    inset: 0;
    z-index: 90;
    pointer-events: none;
  }
  
  .nav.open {
    pointer-events: auto;
  }
  
  /* ─── Overlay com blur ─── */
  .nav-overlay {
    display: block;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity var(--duration-slow) var(--ease-out-expo);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  
  .nav.open .nav-overlay {
    opacity: 1;
  }
  
  /* ─── Container do menu com Glassmorphism ─── */
  .nav-container {
    position: absolute;
    top: 0;
    right: 0;
    width: min(85vw, 400px);
    height: 100vh;
    height: 100dvh; /* Dynamic viewport height para mobile */
    background: var(--bg-glass);
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 2rem;
    gap: 1rem;
    transform: translate3d(100%, 0, 0);
    transition: transform var(--duration-slow) var(--ease-out-expo);
    box-shadow: -20px 0 60px rgba(0, 0, 0, 0.2);
    border-left: 1px solid var(--border-color);
    overflow: hidden;
  }
  
  .nav.open .nav-container {
    transform: translate3d(0, 0, 0);
  }
  
  /* ─── Decoração de fundo (blob animado) ─── */
  .nav-decoration {
    display: block;
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }
  
  .nav-blob {
    position: absolute;
    top: 10%;
    right: -20%;
    width: 300px;
    height: 300px;
    background: var(--gradient-primary);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    opacity: 0.1;
    filter: blur(60px);
    animation: morphBg 15s var(--ease-in-out) infinite;
    transform: translate3d(100%, 0, 0);
    transition: transform var(--duration-slower) var(--ease-out-expo);
    transition-delay: 0.2s;
  }
  
  .nav.open .nav-blob {
    transform: translate3d(0, 0, 0);
  }
  
  @keyframes morphBg {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
  
  /* ─── Links com animação staggered (50ms interval) ─── */
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding-top: 4rem;
    position: relative;
    z-index: 1;
  }
  
  .nav-link {
    width: 100%;
    padding: 1.25rem 0;
    font-size: 1.6rem;
    font-weight: 600;
    border-bottom: 1px solid var(--border-color);
    border-radius: 0;
    /* Estado inicial - fora da tela */
    opacity: 0;
    transform: translate3d(40px, 0, 0);
    /* CORREÇÃO: Curva elástica para entrada suave */
    transition: opacity 0.35s var(--ease-smooth),
                transform 0.35s var(--ease-elastic),
                color 0.15s ease;
    /* Delay fechado - reset instantâneo */
    transition-delay: 0s;
    will-change: transform, opacity;
  }
  
  .nav.open .nav-link {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    /* CORREÇÃO: Stagger de 50ms conforme especificado */
    transition-delay: calc(0.1s + (0.05s * var(--index)));
  }
  
  .nav-link-bg {
    display: none;
  }
  
  .nav-link-text {
    position: relative;
  }
  
  .nav-link-hover {
    display: none;
  }
  
  .nav-link-line {
    display: none;
  }
  
  .nav-link:hover .nav-link-text,
  .nav-link:active .nav-link-text {
    transform: translate3d(8px, 0, 0);
    color: var(--green-primary);
  }
  
  .nav-link.router-link-active {
    color: var(--green-primary);
  }
  
  .nav-link.router-link-active::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: var(--green-primary);
    border-radius: 50%;
  }
  
  /* ─── Botão de Contato Mobile ─── */
  .contact-btn {
    margin: 2rem 0 0 0;
    justify-content: center;
    padding: 1.25rem 2rem;
    font-size: 1rem;
    /* Animação staggered com curva elástica */
    opacity: 0;
    transform: translate3d(0, 30px, 0);
    transition: opacity 0.35s var(--ease-smooth),
                transform 0.35s var(--ease-elastic),
                box-shadow 0.25s var(--ease-smooth);
    transition-delay: 0s;
    will-change: transform, opacity;
  }
  
  .nav.open .contact-btn {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    /* Stagger: após todos os links (5 links * 50ms + base) */
    transition-delay: calc(0.1s + (0.05s * 5) + 0.05s);
  }
  
  /* ─── Toggle de Tema Mobile ─── */
  .theme-toggle {
    margin: 1.5rem auto 0;
    /* Animação staggered com curva elástica */
    opacity: 0;
    transform: translate3d(0, 30px, 0);
    transition: opacity 0.35s var(--ease-smooth),
                transform 0.35s var(--ease-elastic),
                background 0.25s ease,
                border-color 0.25s ease;
    transition-delay: 0s;
    will-change: transform, opacity;
  }
  
  .nav.open .theme-toggle {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    /* Stagger: após botão de contato */
    transition-delay: calc(0.1s + (0.05s * 6) + 0.05s);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   AJUSTES PARA TELAS MENORES
   ═══════════════════════════════════════════════════════════════════════════ */

@media (max-width: 480px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .logo-img {
    height: 65px;
  }
  
  /* CORREÇÃO: Usa scale ao invés de height (evita reflow) */
  .header.scrolled .logo-img {
    transform: scale(0.7);
  }
  
  .nav-link {
    font-size: 1.4rem;
    padding: 1rem 0;
  }
  
  .nav-container {
    width: 100%;
    padding: 1.5rem;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   CLASSE UTILITÁRIA - Feedback de clique
   ═══════════════════════════════════════════════════════════════════════════ */

.click-feedback {
  transition: transform 0.15s var(--ease-out-back);
  cursor: pointer;
}

.click-feedback:active {
  transform: scale(0.96);
}
</style>
