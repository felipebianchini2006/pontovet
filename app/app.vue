<template>
  <div class="app-wrapper">
    <!-- Transição de Página Curtain -->
    <PageTransition />
    
    <!-- Layout Principal -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Componentes Globais de Navegação -->
    <ScrollToTop />
    <WhatsAppFab />
  </div>
</template>

<script setup>
/**
 * App Root Component - PontoVet
 * 
 * CSS foi modularizado em:
 * - assets/css/variables.css (Design Tokens)
 * - assets/css/animations.css (Keyframes)
 * - assets/css/main.css (Reset & Utilities)
 * 
 * Plugins:
 * - plugins/lenis.client.ts (Smooth Scroll)
 * 
 * Componentes globais:
 * - PageTransition: Transição curtain entre páginas
 * - ScrollToTop: Botão para voltar ao topo
 * - WhatsAppFab: Botão flutuante do WhatsApp
 * 
 * SEO JSON-LD é configurado nas páginas individuais.
 */
</script>

<style>
/* ═══════════════════════════════════════════════════════════════════════════
   LENIS SMOOTH SCROLL STYLES
   ═══════════════════════════════════════════════════════════════════════════ */

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════════════════════════
   APP WRAPPER
   ═══════════════════════════════════════════════════════════════════════════ */

.app-wrapper {
  min-height: 100vh;
  position: relative;
}
</style>
