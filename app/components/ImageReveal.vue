<template>
  <div 
    ref="containerRef" 
    class="image-reveal"
    :class="{ revealed: isLoaded, 'in-view': isInView }"
  >
    <!-- Placeholder com blur -->
    <div class="image-placeholder" :style="placeholderStyle">
      <slot name="placeholder">
        <div class="default-placeholder"/>
      </slot>
    </div>
    
    <!-- Imagem real -->
    <img
      ref="imageRef"
      :src="src"
      :alt="alt"
      :loading="loading"
      :decoding="decoding"
      class="image-main"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * ImageReveal Component - PontoVet
 * 
 * Transição "blur-up" premium para carregamento de imagens.
 * 
 * Racional de Design:
 * - Imagem começa com scale(1.1), blur(20px) e opacity(0)
 * - Ao carregar, transiciona suavemente para estado nítido
 * - Remove a sensação "dura" de pop-in de imagens
 * - Usa IntersectionObserver para lazy-reveal (só anima quando visível)
 * 
 * @prop src - URL da imagem
 * @prop alt - Texto alternativo
 * @prop aspectRatio - Aspect ratio para placeholder (ex: "16/9", "1/1")
 * @prop placeholderColor - Cor de fundo do placeholder
 * @prop duration - Duração da transição em ms
 */

interface Props {
  src: string;
  alt?: string;
  aspectRatio?: string;
  placeholderColor?: string;
  duration?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  threshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  aspectRatio: '16/9',
  placeholderColor: 'var(--bg-tertiary)',
  duration: 800,
  loading: 'lazy',
  decoding: 'async',
  threshold: 0.1
});

const emit = defineEmits<{
  (e: 'load'): void;
  (e: 'error', error: Event): void;
}>();

const containerRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);
const isLoaded = ref(false);
const isInView = ref(false);
const hasError = ref(false);

// Estilo do placeholder
const placeholderStyle = computed(() => ({
  backgroundColor: props.placeholderColor,
  aspectRatio: props.aspectRatio
}));

// Handler de carregamento
const onImageLoad = () => {
  // Pequeno delay para garantir renderização
  setTimeout(() => {
    isLoaded.value = true;
    emit('load');
  }, 50);
};

const onImageError = (error: Event) => {
  hasError.value = true;
  emit('error', error);
};

// IntersectionObserver para trigger quando visível
onMounted(() => {
  if (!import.meta.client || !containerRef.value) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true;
          observer.disconnect();
        }
      });
    },
    {
      threshold: props.threshold,
      rootMargin: '50px'
    }
  );
  
  observer.observe(containerRef.value);
  
  onUnmounted(() => observer.disconnect());
});
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════════════════════
   IMAGE REVEAL - Transição Blur-Up Premium
   
   Racional:
   - Imagem inicia em scale maior (1.1) criando zoom-out suave ao revelar
   - Blur alto (20px) esconde detalhes até carregar
   - Transição usa ease-out-expo para desaceleração natural
   - Placeholder mantém espaço reservado (evita CLS)
   ═══════════════════════════════════════════════════════════════════════════ */

.image-reveal {
  position: relative;
  overflow: hidden;
  border-radius: inherit;
}

/* Placeholder - mantém aspect ratio e cor de fundo */
.image-placeholder {
  position: absolute;
  inset: 0;
  z-index: 1;
  transition: opacity 0.6s var(--ease-out-expo);
}

.default-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--bg-tertiary) 0%,
    var(--bg-secondary) 100%
  );
  
  /* Shimmer effect sutil */
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Imagem principal */
.image-main {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  
  /* Estado inicial: blur + scale + opacity */
  opacity: 0;
  transform: scale(1.1);
  filter: blur(20px);
  
  /* Transição suave com curva exponencial */
  transition: 
    opacity 0.8s var(--ease-out-expo),
    transform 1s var(--ease-out-expo),
    filter 0.8s var(--ease-out-expo);
  
  will-change: opacity, transform, filter;
}

/* Estado revelado - apenas quando carregado E em view */
.image-reveal.revealed.in-view .image-main {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}

.image-reveal.revealed .image-placeholder {
  opacity: 0;
  pointer-events: none;
}

/* Variantes de aspect ratio comuns */
.image-reveal[data-aspect="1/1"] .image-placeholder,
.image-reveal[data-aspect="1/1"] .image-main {
  aspect-ratio: 1/1;
}

.image-reveal[data-aspect="4/3"] .image-placeholder,
.image-reveal[data-aspect="4/3"] .image-main {
  aspect-ratio: 4/3;
}

.image-reveal[data-aspect="16/9"] .image-placeholder,
.image-reveal[data-aspect="16/9"] .image-main {
  aspect-ratio: 16/9;
}

/* Respeita preferência de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .image-main {
    transform: none;
    filter: none;
    transition: opacity 0.3s ease;
  }
  
  .default-placeholder {
    animation: none;
  }
}
</style>
