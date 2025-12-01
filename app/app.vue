<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* ══════════════════════════════════════════════════════════════════════════
   PONTOVET - PREMIUM DESIGN SYSTEM v2.0
   Nível Awwwards / Site do Ano
   
   CORREÇÕES IMPLEMENTADAS:
   - View Transitions API CSS
   - Transições de página aprimoradas (slide-fade com escala)
   - Keyframes "bouncy" profissionais
   - Micro-interações elásticas
   - Performance otimizada (transform3d em vez de top/left)
   - Scroll lock quando menu aberto
   ══════════════════════════════════════════════════════════════════════════ */

/* ─── Google Fonts Import ─── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700&display=swap');

/* ─── Variáveis CSS Premium - Light Mode ─── */
:root {
  /* Cores Base - Paleta Sofisticada */
  --bg-primary: #fafafa;
  --bg-secondary: #f5f5f0;
  --bg-tertiary: #eef4ed;
  --bg-elevated: #ffffff;
  --bg-glass: rgba(255, 255, 255, 0.75);
  
  /* Texto */
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted: #7a7a7a;
  --text-accent: #0d3d0f;
  
  /* Verde Premium - Tom mais profundo e sofisticado */
  --green-deep: #0d3d0f;
  --green-primary: #1a5c1e;
  --green-dark: #145218;
  --green-light: #2d8a32;
  --green-accent: #3da542;
  --green-glow: rgba(61, 165, 66, 0.15);
  --green-bg: #eef4ed;
  
  /* Efeitos */
  --border-color: rgba(26, 92, 30, 0.08);
  --shadow-color: rgba(13, 61, 15, 0.08);
  --shadow-elevated: 0 20px 60px rgba(13, 61, 15, 0.1), 0 8px 24px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 4px 20px rgba(13, 61, 15, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 30px 80px rgba(13, 61, 15, 0.15), 0 15px 40px rgba(0, 0, 0, 0.08);
  
  /* Sombras Coloridas (Glow) - NOVO */
  --glow-green: 0 0 40px rgba(61, 165, 66, 0.3), 0 0 80px rgba(26, 92, 30, 0.15);
  --glow-soft: 0 8px 32px rgba(26, 92, 30, 0.12);
  
  /* Card */
  --card-bg: #ffffff;
  --card-border: rgba(26, 92, 30, 0.06);
  
  /* Gradientes Premium */
  --gradient-primary: linear-gradient(135deg, #0d3d0f 0%, #1a5c1e 35%, #2d8a32 100%);
  --gradient-subtle: linear-gradient(180deg, rgba(26, 92, 30, 0.02) 0%, rgba(26, 92, 30, 0.06) 100%);
  --gradient-mesh: radial-gradient(ellipse at 20% 30%, rgba(45, 138, 50, 0.08) 0%, transparent 50%),
                   radial-gradient(ellipse at 80% 70%, rgba(13, 61, 15, 0.06) 0%, transparent 50%),
                   radial-gradient(ellipse at 50% 50%, rgba(61, 165, 66, 0.04) 0%, transparent 70%);
  /* Gradiente para cards - NOVO */
  --gradient-card: linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(238,244,237,0.6) 100%);
  
  /* Textura de Ruído */
  --noise-opacity: 0.015;
  
  /* Tipografia */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  
  /* Espaçamentos */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-3xl: 10rem;
  
  /* Transições Premium - Curvas Elásticas */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  
  /* Durações */
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.6s;
  --duration-slower: 0.8s;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
}

/* ─── Variáveis CSS Premium - Dark Mode ─── */
:root.dark {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #0f1a10;
  --bg-elevated: #161616;
  --bg-glass: rgba(22, 22, 22, 0.85);
  
  --text-primary: #f0f0f0;
  --text-secondary: #a0a0a0;
  --text-muted: #666666;
  --text-accent: #7dd181;
  
  --green-deep: #7dd181;
  --green-primary: #5cb862;
  --green-dark: #3da542;
  --green-light: #8fe093;
  --green-accent: #a5eba8;
  --green-glow: rgba(125, 209, 129, 0.12);
  --green-bg: #0f1a10;
  
  --border-color: rgba(125, 209, 129, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.4);
  --shadow-elevated: 0 20px 60px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3);
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2);
  --shadow-hover: 0 30px 80px rgba(0, 0, 0, 0.6), 0 15px 40px rgba(125, 209, 129, 0.08);
  
  /* Sombras Coloridas (Glow) - Dark Mode */
  --glow-green: 0 0 40px rgba(125, 209, 129, 0.25), 0 0 80px rgba(92, 184, 98, 0.1);
  --glow-soft: 0 8px 32px rgba(125, 209, 129, 0.08);
  
  --card-bg: #161616;
  --card-border: rgba(125, 209, 129, 0.08);
  
  --gradient-primary: linear-gradient(135deg, #1a3d1c 0%, #2d5a30 35%, #3da542 100%);
  --gradient-subtle: linear-gradient(180deg, rgba(125, 209, 129, 0.02) 0%, rgba(125, 209, 129, 0.05) 100%);
  --gradient-mesh: radial-gradient(ellipse at 20% 30%, rgba(125, 209, 129, 0.06) 0%, transparent 50%),
                   radial-gradient(ellipse at 80% 70%, rgba(61, 165, 66, 0.04) 0%, transparent 50%),
                   radial-gradient(ellipse at 50% 50%, rgba(143, 224, 147, 0.03) 0%, transparent 70%);
  --gradient-card: linear-gradient(145deg, rgba(22,22,22,0.95) 0%, rgba(15,26,16,0.8) 100%);
  
  --noise-opacity: 0.03;
}

/* ═══════════════════════════════════════════════════════════════════════════
   VIEW TRANSITIONS API - CSS para transição de tema circular
   ═══════════════════════════════════════════════════════════════════════════ */

/* Desabilita animação padrão do View Transition */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* A nova view fica acima com clip-path controlado via JS */
::view-transition-new(root) {
  z-index: 1;
}

::view-transition-old(root) {
  z-index: -1;
}

/* Suaviza a transição quando não há suporte à View Transitions */
html:not(.dark) {
  transition: background-color 0.5s var(--ease-out-expo),
              color 0.5s var(--ease-out-expo);
}

html.dark {
  transition: background-color 0.5s var(--ease-out-expo),
              color 0.5s var(--ease-out-expo);
}

/* ─── Reset Premium ─── */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ─── HTML & Body ─── */
html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--text-primary);
  line-height: 1.7;
  background-color: var(--bg-primary);
  background-image: var(--gradient-mesh);
  background-attachment: fixed;
  transition: background-color var(--duration-normal) var(--ease-out-expo),
              color var(--duration-normal) var(--ease-out-expo);
  overflow-x: hidden;
  min-height: 100vh;
}

/* ─── CORREÇÃO: Scroll Lock quando menu mobile aberto ─── */
body.menu-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}

/* Textura de Ruído Global */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: var(--noise-opacity);
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* ─── Seleção de Texto ─── */
::selection {
  background: var(--green-primary);
  color: white;
}

/* ─── Scrollbar Premium ─── */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--green-primary);
  border-radius: var(--radius-full);
  border: 2px solid var(--bg-secondary);
  transition: background var(--duration-fast) ease;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--green-dark);
}

/* ─── Tipografia Base ─── */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

h1 { font-size: clamp(2.5rem, 6vw, 5rem); }
h2 { font-size: clamp(2rem, 4vw, 3.5rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }

p {
  letter-spacing: 0.01em;
}

/* ─── Links Base ─── */
a {
  color: inherit;
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out-expo);
}

/* ─── Imagens ─── */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ═══════════════════════════════════════════════════════════════════════════
   KEYFRAMES PREMIUM - Animações "Bouncy" e Profissionais
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Fade In com movimento ─── */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

/* ─── Slide com rotação sutil ─── */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translate3d(-80px, 0, 0) rotate(-2deg);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translate3d(80px, 0, 0) rotate(2deg);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0);
  }
}

/* ─── Scale com bounce ─── */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleInBounce {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* ─── Bounce elástico - NOVO ─── */
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translate3d(0, 0, 0);
  }
  20% {
    transform: scale(1.1) translate3d(0, 0, 0);
  }
  40% {
    transform: scale(0.9) translate3d(0, 0, 0);
  }
  60% {
    opacity: 1;
    transform: scale(1.03) translate3d(0, 0, 0);
  }
  80% {
    transform: scale(0.97) translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100px, 0) scale(0.9);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scale(1.02);
  }
  80% {
    transform: translate3d(0, 10px, 0) scale(0.98);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

/* ─── Jelly/Wobble - NOVO ─── */
@keyframes jelly {
  0% { transform: scale(1, 1); }
  25% { transform: scale(0.95, 1.05); }
  50% { transform: scale(1.05, 0.95); }
  75% { transform: scale(0.98, 1.02); }
  100% { transform: scale(1, 1); }
}

@keyframes wobble {
  0% { transform: translate3d(0, 0, 0) rotate(0); }
  15% { transform: translate3d(-8px, 0, 0) rotate(-3deg); }
  30% { transform: translate3d(6px, 0, 0) rotate(2deg); }
  45% { transform: translate3d(-4px, 0, 0) rotate(-1deg); }
  60% { transform: translate3d(2px, 0, 0) rotate(0.5deg); }
  75% { transform: translate3d(-1px, 0, 0) rotate(-0.25deg); }
  100% { transform: translate3d(0, 0, 0) rotate(0); }
}

/* ─── Floating e pulsação ─── */
@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  25% { transform: translate3d(0, -12px, 0) rotate(1deg); }
  75% { transform: translate3d(0, 8px, 0) rotate(-1deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.02); opacity: 0.9; }
}

@keyframes pulseGlow {
  0%, 100% { 
    box-shadow: 0 0 20px var(--green-glow), 0 0 40px transparent; 
  }
  50% { 
    box-shadow: 0 0 30px var(--green-glow), 0 0 60px var(--green-glow); 
  }
}

/* ─── Shimmer e brilho - NOVO ─── */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes shine {
  0% {
    transform: translate3d(-100%, 0, 0) rotate(25deg);
  }
  100% {
    transform: translate3d(200%, 0, 0) rotate(25deg);
  }
}

/* ─── Glow pulsante ─── */
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px var(--green-glow), 0 0 60px transparent; }
  50% { box-shadow: 0 0 40px var(--green-glow), 0 0 80px var(--green-glow); }
}

/* ─── Morph background ─── */
@keyframes morphBg {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

/* ─── Reveal de texto ─── */
@keyframes revealText {
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-15deg) scale(0.9);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
    filter: blur(0);
  }
}

/* ─── Micro-interação de clique - NOVO ─── */
@keyframes clickPop {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

@keyframes clickBounce {
  0% { transform: scale(1); }
  30% { transform: scale(0.92); }
  60% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

/* ─── Classes de Animação ─── */
.animate-fade-up {
  animation: fadeInUp 0.8s var(--ease-out-expo) both;
}

.animate-fade-down {
  animation: fadeInDown 0.8s var(--ease-out-expo) both;
}

.animate-slide-left {
  animation: slideInLeft 0.8s var(--ease-out-expo) both;
}

.animate-slide-right {
  animation: slideInRight 0.8s var(--ease-out-expo) both;
}

.animate-scale {
  animation: scaleIn 0.6s var(--ease-out-expo) both;
}

.animate-bounce {
  animation: bounceIn 0.8s var(--ease-bounce) both;
}

.animate-bounce-up {
  animation: bounceInUp 0.8s var(--ease-out-expo) both;
}

.animate-reveal {
  animation: revealText 1s var(--ease-out-expo) both;
}

.animate-jelly {
  animation: jelly 0.5s var(--ease-elastic) both;
}

/* ─── Delays Escalonados ─── */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-600 { animation-delay: 0.6s; }
.delay-700 { animation-delay: 0.7s; }
.delay-800 { animation-delay: 0.8s; }

/* ═══════════════════════════════════════════════════════════════════════════
   TRANSIÇÕES DE PÁGINA - NUXT PAGE TRANSITIONS
   Slide-Fade com escala para efeito premium
   ═══════════════════════════════════════════════════════════════════════════ */

/* Transição Padrão - Fade + Slide + Scale */
.page-enter-active {
  transition: all 0.5s var(--ease-out-expo);
  transition-delay: 0.1s;
}

.page-leave-active {
  transition: all 0.4s var(--ease-in-out);
}

.page-enter-from {
  opacity: 0;
  transform: translate3d(0, 40px, 0) scale(0.97);
  filter: blur(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translate3d(0, -30px, 0) scale(1.02);
  filter: blur(4px);
}

/* Transição de Layout */
.layout-enter-active {
  transition: all 0.6s var(--ease-out-expo);
}

.layout-leave-active {
  transition: all 0.4s var(--ease-in-out);
}

.layout-enter-from {
  opacity: 0;
  filter: blur(10px);
}

.layout-leave-to {
  opacity: 0;
  filter: blur(6px);
}

/* Transição Alternativa - Slide Horizontal */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s var(--ease-out-expo);
}

.slide-enter-from {
  opacity: 0;
  transform: translate3d(80px, 0, 0);
}

.slide-leave-to {
  opacity: 0;
  transform: translate3d(-80px, 0, 0);
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL REVEAL - Classes para Intersection Observer
   ═══════════════════════════════════════════════════════════════════════════ */

.reveal {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.reveal-left {
  opacity: 0;
  transform: translate3d(-60px, 0, 0);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal-left.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.reveal-right {
  opacity: 0;
  transform: translate3d(60px, 0, 0);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal-right.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal-scale.visible {
  opacity: 1;
  transform: scale(1);
}

/* Stagger para elementos filhos */
.stagger-children > * {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
  transition: opacity 0.6s var(--ease-out-expo),
              transform 0.6s var(--ease-out-expo);
}

.stagger-children.visible > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-children.visible > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-children.visible > *:nth-child(3) { transition-delay: 0.3s; }
.stagger-children.visible > *:nth-child(4) { transition-delay: 0.4s; }
.stagger-children.visible > *:nth-child(5) { transition-delay: 0.5s; }
.stagger-children.visible > *:nth-child(6) { transition-delay: 0.6s; }

.stagger-children.visible > * {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* ═══════════════════════════════════════════════════════════════════════════
   MICRO-INTERAÇÕES - Feedback visual em cliques e hovers
   ═══════════════════════════════════════════════════════════════════════════ */

/* Feedback elástico em cliques */
.click-feedback {
  transition: transform 0.2s var(--ease-out-back);
  cursor: pointer;
}

.click-feedback:active {
  transform: scale(0.96);
}

/* Botões com brilho interno no hover */
.btn-shine {
  position: relative;
  overflow: hidden;
}

.btn-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.6s var(--ease-out-expo);
}

.btn-shine:hover::before {
  left: 150%;
}

/* Cards com glow colorido */
.card-glow {
  position: relative;
  transition: box-shadow 0.4s var(--ease-out-expo),
              transform 0.4s var(--ease-out-back);
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: var(--gradient-primary);
  border-radius: inherit;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.4s var(--ease-out-expo);
  filter: blur(12px);
}

.card-glow:hover {
  transform: translate3d(0, -8px, 0);
  box-shadow: var(--glow-green);
}

.card-glow:hover::before {
  opacity: 0.5;
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTES UTILITÁRIOS
   ═══════════════════════════════════════════════════════════════════════════ */

/* Container Padrão */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
}

/* Glass Effect - Glassmorphism */
.glass {
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border-color);
}

/* Glass mais intenso */
.glass-strong {
  background: var(--bg-glass);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Hover Lift com glow */
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out-back),
              box-shadow var(--duration-normal) var(--ease-out-expo);
  will-change: transform;
}

.hover-lift:hover {
  transform: translate3d(0, -8px, 0);
  box-shadow: var(--shadow-hover);
}

/* Card com profundidade - NOVO */
.card-depth {
  background: var(--gradient-card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  transition: all 0.4s var(--ease-out-expo);
}

.card-depth:hover {
  box-shadow: var(--shadow-hover), var(--glow-soft);
  transform: translate3d(0, -4px, 0);
}

/* ─── Acessibilidade ─── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .reveal,
  .reveal-left,
  .reveal-right,
  .reveal-scale,
  .stagger-children > * {
    opacity: 1;
    transform: none;
  }
}

/* ─── Utilitários de Responsividade ─── */
@media (max-width: 768px) {
  html {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 14px;
  }
}
</style>
