<template>
  <div class="page-transition-curtain" :class="{ active: isTransitioning }">
    <div class="curtain curtain-1"></div>
    <div class="curtain curtain-2"></div>
    <div class="curtain-logo" :class="{ show: showLogo }">
      <i class="mdi mdi-paw"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * PageTransition Component - PontoVet
 * 
 * Transição de página cinematográfica com efeito "curtain" (cortina).
 * Duas camadas verdes varrem a tela revelando o novo conteúdo.
 */

const isTransitioning = ref(false);
const showLogo = ref(false);

// Escuta eventos de navegação do Nuxt
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', () => {
  isTransitioning.value = true;
  setTimeout(() => {
    showLogo.value = true;
  }, 200);
});

nuxtApp.hook('page:finish', () => {
  setTimeout(() => {
    showLogo.value = false;
  }, 300);
  
  setTimeout(() => {
    isTransitioning.value = false;
  }, 600);
});
</script>

<style scoped>
.page-transition-curtain {
  position: fixed;
  inset: 0;
  z-index: 99999;
  pointer-events: none;
  overflow: hidden;
}

/* ═══════════════════════════════════════════════════════════════════════════
   CORTINAS
   ═══════════════════════════════════════════════════════════════════════════ */

.curtain {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  transform: scaleY(0);
  transform-origin: center;
  will-change: transform;
}

.curtain-1 {
  top: 0;
  transform-origin: top center;
  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
}

.curtain-2 {
  bottom: 0;
  transform-origin: bottom center;
  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1) 0.05s;
}

/* Estado ativo - cortinas fecham */
.page-transition-curtain.active .curtain {
  transform: scaleY(1);
}

.page-transition-curtain.active .curtain-1 {
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.page-transition-curtain.active .curtain-2 {
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.05s;
}

/* ═══════════════════════════════════════════════════════════════════════════
   LOGO CENTRAL
   ═══════════════════════════════════════════════════════════════════════════ */

.curtain-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 2;
  color: white;
  font-size: 4rem;
  opacity: 0;
  transition: 
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.curtain-logo.show {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.curtain-logo i {
  display: block;
  animation: logoSpin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes logoSpin {
  0% {
    transform: rotate(-180deg) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   DECORAÇÃO EXTRA
   ═══════════════════════════════════════════════════════════════════════════ */

.curtain::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
}

.curtain-1::after {
  bottom: 0;
}

.curtain-2::after {
  top: 0;
}
</style>
