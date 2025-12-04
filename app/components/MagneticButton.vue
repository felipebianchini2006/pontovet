<template>
  <component
    :is="tag"
    ref="buttonRef"
    class="magnetic-wrapper"
    :style="wrapperStyle"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <span class="magnetic-content" :style="contentStyle">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
/**
 * MagneticButton V2 - PontoVet
 * 
 * ATUALIZAÇÃO: Interpolação Linear (Lerp) com requestAnimationFrame
 * O botão agora "flutua" até ao cursor com física de inércia real.
 * 
 * Racional de Design:
 * - Em vez de seguir o cursor instantaneamente (CSS transition),
 *   usamos um loop RAF que aproxima a posição gradualmente.
 * - Friction controla a "massa" do botão - valores baixos = mais peso/inércia
 * - Cria sensação de objeto físico com momentum
 * 
 * @prop tag - Tag HTML do wrapper
 * @prop strength - Força do efeito magnético (0-1)
 * @prop contentStrength - Força do movimento do conteúdo interno
 * @prop friction - Fator de "atrito" para lerp (0.05-0.3), menor = mais inércia
 */

interface Props {
  tag?: string;
  strength?: number;
  contentStrength?: number;
  friction?: number;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  strength: 0.3,
  contentStrength: 0.5,
  friction: 0.12 // Valor padrão balanceado - suave mas responsivo
});

const buttonRef = ref<HTMLElement | null>(null);
const isHovering = ref(false);
const animationId = ref<number | null>(null);

// Posições TARGET (onde queremos chegar)
const targetPosition = reactive({ x: 0, y: 0 });
const targetContentPosition = reactive({ x: 0, y: 0 });

// Posições ATUAIS (interpoladas via lerp)
const currentPosition = reactive({ x: 0, y: 0 });
const currentContentPosition = reactive({ x: 0, y: 0 });

// Função Lerp (Linear Interpolation)
// Aproxima 'current' de 'target' por uma fração 'factor' a cada frame
const lerp = (current: number, target: number, factor: number): number => {
  return current + (target - current) * factor;
};

// Loop de animação com requestAnimationFrame
const animate = () => {
  // Interpola posição do wrapper
  currentPosition.x = lerp(currentPosition.x, targetPosition.x, props.friction);
  currentPosition.y = lerp(currentPosition.y, targetPosition.y, props.friction);
  
  // Interpola posição do conteúdo (com friction ligeiramente diferente para parallax)
  currentContentPosition.x = lerp(currentContentPosition.x, targetContentPosition.x, props.friction * 0.8);
  currentContentPosition.y = lerp(currentContentPosition.y, targetContentPosition.y, props.friction * 0.8);
  
  // Continua o loop se ainda estiver hover OU se ainda não chegou ao destino
  const distanceWrapper = Math.abs(currentPosition.x - targetPosition.x) + Math.abs(currentPosition.y - targetPosition.y);
  const distanceContent = Math.abs(currentContentPosition.x - targetContentPosition.x) + Math.abs(currentContentPosition.y - targetContentPosition.y);
  
  // Threshold de 0.01px para considerar "chegou"
  if (isHovering.value || distanceWrapper > 0.01 || distanceContent > 0.01) {
    animationId.value = requestAnimationFrame(animate);
  } else {
    // Snap para zero quando muito perto (evita drift infinito)
    currentPosition.x = targetPosition.x;
    currentPosition.y = targetPosition.y;
    currentContentPosition.x = targetContentPosition.x;
    currentContentPosition.y = targetContentPosition.y;
  }
};

// Estilos computados (sem CSS transition - JS controla tudo)
const wrapperStyle = computed(() => ({
  transform: `translate3d(${currentPosition.x}px, ${currentPosition.y}px, 0)`
}));

const contentStyle = computed(() => ({
  transform: `translate3d(${currentContentPosition.x}px, ${currentContentPosition.y}px, 0)`
}));

const handleMouseEnter = () => {
  isHovering.value = true;
  // Inicia o loop de animação
  if (!animationId.value) {
    animationId.value = requestAnimationFrame(animate);
  }
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
  
  // Define o TARGET (o lerp vai aproximar gradualmente)
  targetPosition.x = deltaX * props.strength;
  targetPosition.y = deltaY * props.strength;
  
  targetContentPosition.x = deltaX * props.contentStrength;
  targetContentPosition.y = deltaY * props.contentStrength;
};

const handleMouseLeave = () => {
  isHovering.value = false;
  // Define target como 0,0 - o lerp vai animar de volta suavemente
  targetPosition.x = 0;
  targetPosition.y = 0;
  targetContentPosition.x = 0;
  targetContentPosition.y = 0;
  
  // Garante que o loop continua para animar o retorno
  if (!animationId.value) {
    animationId.value = requestAnimationFrame(animate);
  }
};

// Cleanup ao desmontar
onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
  }
});
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
