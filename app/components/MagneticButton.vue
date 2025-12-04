<template>
  <component
    :is="tag"
    ref="buttonRef"
    class="magnetic-wrapper"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="wrapperStyle"
  >
    <span class="magnetic-content" :style="contentStyle">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
/**
 * MagneticButton Component - PontoVet
 * 
 * Efeito magnético que faz o botão "seguir" o cursor.
 * Inspirado em interfaces premiadas do Awwwards.
 * 
 * @prop tag - Tag HTML do wrapper
 * @prop strength - Força do efeito magnético (0-1)
 * @prop contentStrength - Força do movimento do conteúdo interno
 */

interface Props {
  tag?: string;
  strength?: number;
  contentStrength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  strength: 0.3,
  contentStrength: 0.5
});

const buttonRef = ref<HTMLElement | null>(null);
const isHovering = ref(false);

// Posições calculadas
const position = reactive({
  x: 0,
  y: 0
});

const contentPosition = reactive({
  x: 0,
  y: 0
});

// Estilos computados
const wrapperStyle = computed(() => ({
  transform: isHovering.value 
    ? `translate3d(${position.x}px, ${position.y}px, 0)` 
    : 'translate3d(0, 0, 0)',
  transition: isHovering.value 
    ? 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)' 
    : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
}));

const contentStyle = computed(() => ({
  transform: isHovering.value 
    ? `translate3d(${contentPosition.x}px, ${contentPosition.y}px, 0)` 
    : 'translate3d(0, 0, 0)',
  transition: isHovering.value 
    ? 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)' 
    : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
}));

const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value) return;

  const rect = buttonRef.value.getBoundingClientRect();
  
  // Centro do botão
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Distância do cursor ao centro
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;
  
  // Aplica a força magnética
  position.x = deltaX * props.strength;
  position.y = deltaY * props.strength;
  
  // Conteúdo se move mais para efeito parallax
  contentPosition.x = deltaX * props.contentStrength;
  contentPosition.y = deltaY * props.contentStrength;
};

const handleMouseLeave = () => {
  isHovering.value = false;
  position.x = 0;
  position.y = 0;
  contentPosition.x = 0;
  contentPosition.y = 0;
};
</script>

<style scoped>
.magnetic-wrapper {
  display: inline-block;
  cursor: pointer;
  will-change: transform;
}

.magnetic-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}
</style>
