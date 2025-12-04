<template>
  <Transition name="scroll-top">
    <button 
      v-if="isVisible"
      class="scroll-to-top"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      @click="scrollToTop"
    >
      <span class="btn-bg"/>
      <i class="mdi mdi-chevron-up"/>
    </button>
  </Transition>
</template>

<script setup>
/**
 * ScrollToTop - Botão para voltar ao topo
 * 
 * Aparece após rolar 500px
 * Posicionado acima do WhatsApp FAB
 */

const isVisible = ref(false);
const scrollThreshold = 500;

const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check initial state
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 7.5rem; /* Acima do WhatsApp FAB */
  right: 2rem;
  z-index: 9998;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Glassmorphism */
  background: var(--bg-glass);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--border-color);
  box-shadow: 
    0 4px 20px var(--shadow-color),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.scroll-to-top:hover {
  transform: translateY(-4px) scale(1.08);
  border-color: var(--green-primary);
  box-shadow: 
    0 8px 30px rgba(76, 175, 80, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.scroll-to-top:active {
  transform: translateY(-2px) scale(1.02);
}

/* Background hover */
.btn-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 50%;
}

.scroll-to-top:hover .btn-bg {
  opacity: 1;
}

/* Ícone */
.scroll-to-top i {
  position: relative;
  z-index: 2;
  font-size: 1.5rem;
  color: var(--green-primary);
  transition: all 0.4s ease;
}

.scroll-to-top:hover i {
  color: white;
  transform: translateY(-2px);
}

/* ═══════════════════════════════════════════════════════════════════════════
   TRANSIÇÕES
   ═══════════════════════════════════════════════════════════════════════════ */

.scroll-top-enter-active {
  animation: scrollTopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-top-leave-active {
  animation: scrollTopIn 0.3s ease reverse;
}

@keyframes scrollTopIn {
  from {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESPONSIVO
   ═══════════════════════════════════════════════════════════════════════════ */

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 6.5rem;
    right: 1.25rem;
    width: 44px;
    height: 44px;
  }
  
  .scroll-to-top i {
    font-size: 1.3rem;
  }
}
</style>
