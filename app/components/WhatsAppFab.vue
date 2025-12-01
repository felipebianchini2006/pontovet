<template>
  <div class="whatsapp-fab-container">
    <!-- Tooltip animado -->
    <Transition name="tooltip">
      <div v-if="showTooltip" class="fab-tooltip">
        <span>Agende agora!</span>
        <div class="tooltip-arrow"></div>
      </div>
    </Transition>
    
    <!-- Botão FAB -->
    <a 
      href="https://wa.me/5518997359924?text=Olá! Gostaria de agendar um atendimento na PontoVet."
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-fab"
      aria-label="Contato via WhatsApp"
      @mouseenter="pauseTooltip"
      @mouseleave="resumeTooltip"
    >
      <!-- Pulso de atenção -->
      <div class="fab-pulse"></div>
      <div class="fab-pulse delay"></div>
      
      <!-- Ícone -->
      <i class="mdi mdi-whatsapp"></i>
      
      <!-- Badge de notificação -->
      <Transition name="badge">
        <div v-if="showBadge" class="fab-badge">1</div>
      </Transition>
    </a>
  </div>
</template>

<script setup>
/**
 * WhatsAppFab - Botão Flutuante de WhatsApp
 * 
 * Features:
 * - Aparece após 1.5s de página carregada
 * - Tooltip "Agende agora!" após 3s
 * - Badge de notificação para chamar atenção
 * - Animações de pulso suaves
 */

const showBadge = ref(false);
const showTooltip = ref(false);
const tooltipPaused = ref(false);

let tooltipInterval = null;

onMounted(() => {
  // Mostrar badge após 1.5s
  setTimeout(() => {
    showBadge.value = true;
  }, 1500);
  
  // Mostrar tooltip após 3s
  setTimeout(() => {
    if (!tooltipPaused.value) {
      showTooltip.value = true;
    }
  }, 3000);
  
  // Loop do tooltip: aparece por 4s, some por 8s
  tooltipInterval = setInterval(() => {
    if (!tooltipPaused.value) {
      showTooltip.value = !showTooltip.value;
    }
  }, 6000);
});

onUnmounted(() => {
  if (tooltipInterval) {
    clearInterval(tooltipInterval);
  }
});

const pauseTooltip = () => {
  tooltipPaused.value = true;
  showTooltip.value = false;
};

const resumeTooltip = () => {
  tooltipPaused.value = false;
};
</script>

<style scoped>
.whatsapp-fab-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BOTÃO FAB
   ═══════════════════════════════════════════════════════════════════════════ */

.whatsapp-fab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  box-shadow: 
    0 6px 20px rgba(37, 211, 102, 0.4),
    0 3px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fabEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: 1s;
}

@keyframes fabEntry {
  from {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}

.whatsapp-fab:hover {
  transform: scale(1.12) rotate(5deg);
  box-shadow: 
    0 12px 35px rgba(37, 211, 102, 0.5),
    0 6px 20px rgba(0, 0, 0, 0.2);
}

.whatsapp-fab:active {
  transform: scale(0.95);
}

.whatsapp-fab i {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.whatsapp-fab:hover i {
  transform: scale(1.1);
}

/* ═══════════════════════════════════════════════════════════════════════════
   PULSO DE ATENÇÃO
   ═══════════════════════════════════════════════════════════════════════════ */

.fab-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #25D366;
  opacity: 0;
  animation: fabPulse 2s ease-out infinite;
}

.fab-pulse.delay {
  animation-delay: 0.5s;
}

@keyframes fabPulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   BADGE DE NOTIFICAÇÃO
   ═══════════════════════════════════════════════════════════════════════════ */

.fab-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #ff4757 0%, #ff6b81 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
  z-index: 3;
  animation: badgeBounce 2s ease-in-out infinite;
}

@keyframes badgeBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

/* Transição do badge */
.badge-enter-active {
  animation: badgeEntry 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.badge-leave-active {
  animation: badgeEntry 0.3s ease reverse;
}

@keyframes badgeEntry {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   TOOLTIP
   ═══════════════════════════════════════════════════════════════════════════ */

.fab-tooltip {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 
    0 6px 20px rgba(46, 125, 50, 0.35),
    0 3px 10px rgba(0, 0, 0, 0.1);
}

.tooltip-arrow {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #2E7D32;
}

/* Transições do tooltip */
.tooltip-enter-active {
  animation: tooltipSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tooltip-leave-active {
  animation: tooltipSlide 0.3s ease reverse;
}

@keyframes tooltipSlide {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESPONSIVO
   ═══════════════════════════════════════════════════════════════════════════ */

@media (max-width: 768px) {
  .whatsapp-fab-container {
    bottom: 1.25rem;
    right: 1.25rem;
  }
  
  .whatsapp-fab {
    width: 56px;
    height: 56px;
    font-size: 1.75rem;
  }
  
  .fab-tooltip {
    display: none;
  }
}
</style>
