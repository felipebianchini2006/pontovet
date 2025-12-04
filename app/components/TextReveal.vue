<template>
  <component 
    :is="tag" 
    ref="containerRef"
    class="text-reveal"
    :class="{ 'revealed': isRevealed }"
    :aria-label="text"
  >
    <span 
      v-for="(word, index) in words" 
      :key="index"
      class="word-wrapper"
      :style="{ '--index': index, '--delay': `${index * staggerDelay}ms` }"
    >
      <span class="word" :class="{ 'animate': isRevealed }">
        {{ word }}
      </span>
      <span v-if="index < words.length - 1" class="space">&nbsp;</span>
    </span>
  </component>
</template>

<script setup lang="ts">
/**
 * TextReveal Component - PontoVet
 * 
 * Anima texto palavra por palavra com efeito reveal cinematográfico.
 * Usa IntersectionObserver para trigger on scroll.
 * 
 * @prop text - Texto a ser animado
 * @prop tag - Tag HTML a ser renderizada (h1, h2, p, etc)
 * @prop staggerDelay - Delay entre cada palavra (ms)
 * @prop threshold - Porcentagem visível para trigger (0-1)
 * @prop once - Se true, anima apenas uma vez
 */

interface Props {
  text: string;
  tag?: string;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  staggerDelay: 50,
  threshold: 0.2,
  once: true,
  direction: 'up'
});

const containerRef = ref<HTMLElement | null>(null);
const isRevealed = ref(false);

// Quebra o texto em palavras
const words = computed(() => props.text.split(' '));

// Setup IntersectionObserver
onMounted(() => {
  if (!containerRef.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isRevealed.value = true;
          if (props.once) {
            observer.disconnect();
          }
        } else if (!props.once) {
          isRevealed.value = false;
        }
      });
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  observer.observe(containerRef.value);

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.text-reveal {
  display: inline;
}

.word-wrapper {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

.word {
  display: inline-block;
  transform: translateY(110%);
  opacity: 0;
  transition: 
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.6s ease;
  transition-delay: var(--delay);
  will-change: transform, opacity;
}

.word.animate {
  transform: translateY(0);
  opacity: 1;
}

.space {
  display: inline;
}

/* ═══════════════════════════════════════════════════════════════════════════
   VARIANTES DE DIREÇÃO
   ═══════════════════════════════════════════════════════════════════════════ */

/* Up (default) */
.text-reveal[data-direction="up"] .word {
  transform: translateY(110%);
}

/* Down */
.text-reveal[data-direction="down"] .word {
  transform: translateY(-110%);
}

/* Left */
.text-reveal[data-direction="left"] .word {
  transform: translateX(50px);
}

/* Right */
.text-reveal[data-direction="right"] .word {
  transform: translateX(-50px);
}

/* Animated state */
.text-reveal[data-direction="up"] .word.animate,
.text-reveal[data-direction="down"] .word.animate,
.text-reveal[data-direction="left"] .word.animate,
.text-reveal[data-direction="right"] .word.animate {
  transform: translate(0, 0);
}
</style>
