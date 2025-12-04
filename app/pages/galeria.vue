<template>
  <div class="galeria">
    <section class="page-header">
      <div class="container">
        <h1>Galeria</h1>
        <p>Conheça nossas instalações e momentos especiais</p>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <p class="gallery-intro">
          Veja alguns momentos registrados em nossa clínica. Aqui você pode conhecer
          nossas instalações modernas e o carinho com que tratamos cada pet.
        </p>

        <TransitionGroup 
          name="gallery" 
          tag="div" 
          class="gallery-grid"
          appear
          @before-enter="onBeforeEnter"
          @enter="onEnter"
        >
          <div 
            v-for="(item, i) in galleryItems" 
            :key="i" 
            class="gallery-item"
            :data-index="i"
            role="button"
            tabindex="0"
            :aria-label="`Abrir imagem ${item.title}`"
            @click="openLightbox(i)"
            @keydown.enter="openLightbox(i)"
          >
            <div class="placeholder-image">
              <i :class="'mdi ' + item.icon" class="placeholder-icon"/>
              <p class="placeholder-text">{{ item.title }}</p>
            </div>
            <div class="gallery-overlay">
              <i class="mdi mdi-magnify-plus-outline"/>
            </div>
          </div>
        </TransitionGroup>

        <div class="gallery-note">
          <p>
            <i class="mdi mdi-camera"/> <strong>Nota:</strong> As imagens acima são placeholders.
            Substitua-as pelas fotos reais da clínica adicionando os arquivos na pasta
            <code>/public/gallery/</code> e atualizando as referências.
          </p>
        </div>
      </div>
    </section>

    <!-- LIGHTBOX MODAL -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div 
          v-if="lightboxOpen" 
          class="lightbox-overlay"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de imagem em tela cheia"
          @keydown="handleKeydown"
          @click.self="closeLightbox"
        >
          <div ref="lightboxContent" class="lightbox-content">
            <!-- Botão Fechar -->
            <button 
              ref="closeButtonRef" 
              class="lightbox-close"
              aria-label="Fechar visualização"
              @click="closeLightbox"
            >
              <i class="mdi mdi-close"/>
            </button>

            <!-- Navegação Anterior -->
            <button 
              class="lightbox-nav lightbox-prev" 
              :disabled="currentIndex === 0"
              aria-label="Imagem anterior"
              @click="prevImage"
            >
              <i class="mdi mdi-chevron-left"/>
            </button>

            <!-- Imagem/Placeholder -->
            <div class="lightbox-image-container">
              <div class="lightbox-placeholder">
                <i :class="'mdi ' + galleryItems[currentIndex]?.icon" class="lightbox-icon"/>
                <p class="lightbox-title">{{ galleryItems[currentIndex]?.title }}</p>
                <p class="lightbox-caption">{{ galleryItems[currentIndex]?.description }}</p>
              </div>
            </div>

            <!-- Navegação Próxima -->
            <button 
              class="lightbox-nav lightbox-next" 
              :disabled="currentIndex === galleryItems.length - 1"
              aria-label="Próxima imagem"
              @click="nextImage"
            >
              <i class="mdi mdi-chevron-right"/>
            </button>

            <!-- Indicador de posição -->
            <div class="lightbox-counter">
              {{ currentIndex + 1 }} / {{ galleryItems.length }}
            </div>

            <!-- Thumbnails -->
            <div class="lightbox-thumbnails">
              <button 
                v-for="(item, i) in galleryItems" 
                :key="i"
                class="lightbox-thumb"
                :class="{ active: i === currentIndex }"
                :aria-label="`Ver imagem ${i + 1}`"
                @click="currentIndex = i"
              >
                <i :class="'mdi ' + item.icon"/>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <section class="cta-section">
      <div class="container">
        <h2>Venha nos Visitar!</h2>
        <p>Agende uma visita e conheça pessoalmente nossa clínica</p>
        <NuxtLink to="/contato" class="cta-button">Entre em Contato</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Galeria - PontoVet',
  meta: [
    { name: 'description', content: 'Conheça as instalações da PontoVet através de nossa galeria de fotos.' }
  ]
});

// ═══════════════════════════════════════════════════════════════════════════
// STAGGERED ANIMATION HOOKS - Cascata perfeita na entrada
// Racional: Cada item aparece com delay progressivo criando onda visual
// ═══════════════════════════════════════════════════════════════════════════

const onBeforeEnter = (el) => {
  el.style.opacity = '0';
  el.style.transform = 'scale(0.85) translateY(30px)';
};

const onEnter = (el, done) => {
  const index = Number(el.dataset.index) || 0;
  const delay = index * 80; // 80ms entre cada item (mais rápido que serviços)
  
  setTimeout(() => {
    el.style.transition = 'opacity 0.5s var(--ease-out-expo), transform 0.6s var(--ease-pop)';
    el.style.opacity = '1';
    el.style.transform = 'scale(1) translateY(0)';
    
    el.addEventListener('transitionend', done, { once: true });
  }, delay);
};

// Dados da galeria com descrições
const galleryItems = [
  { icon: 'mdi-dog', title: 'Nossos Pacientes', description: 'Cães de todas as raças e tamanhos' },
  { icon: 'mdi-cat', title: 'Felinos', description: 'Atendimento especializado para gatos' },
  { icon: 'mdi-hospital-building', title: 'Nossa Clínica', description: 'Instalações modernas e confortáveis' },
  { icon: 'mdi-stethoscope', title: 'Consultório', description: 'Equipamentos de última geração' },
  { icon: 'mdi-microscope', title: 'Laboratório', description: 'Exames precisos e rápidos' },
  { icon: 'mdi-shower-head', title: 'Banho e Tosa', description: 'Ambiente climatizado e seguro' },
  { icon: 'mdi-needle', title: 'Vacinação', description: 'Vacinas importadas de qualidade' },
  { icon: 'mdi-medical-bag', title: 'Farmácia', description: 'Medicamentos veterinários' },
  { icon: 'mdi-paw', title: 'Área de Espera', description: 'Conforto para você e seu pet' }
];

// Estado do Lightbox
const lightboxOpen = ref(false);
const currentIndex = ref(0);
const lightboxContent = ref(null);
const closeButtonRef = ref(null);
const previousActiveElement = ref(null);

// Funções do Lightbox
const openLightbox = (index) => {
  currentIndex.value = index;
  lightboxOpen.value = true;
  previousActiveElement.value = document.activeElement;
  document.body.style.overflow = 'hidden';
  nextTick(() => {
    focusFirstElement();
  });
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
  nextTick(() => {
    if (previousActiveElement.value && typeof previousActiveElement.value.focus === 'function') {
      previousActiveElement.value.focus();
    }
  });
};

const nextImage = () => {
  if (currentIndex.value < galleryItems.length - 1) {
    currentIndex.value++;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

// Focus Trap dentro do modal
const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getFocusableElements = () => {
  if (!lightboxContent.value) return [];
  return Array.from(lightboxContent.value.querySelectorAll(focusableSelectors))
    .filter((el) => !el.hasAttribute('disabled'));
};

const focusFirstElement = () => {
  const focusables = getFocusableElements();
  const target = closeButtonRef.value || focusables[0] || lightboxContent.value;
  if (target && typeof target.focus === 'function') {
    target.focus();
  }
};

const trapFocus = (event) => {
  const focusables = getFocusableElements();
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;

  if (event.shiftKey) {
    if (active === first || active === lightboxContent.value) {
      event.preventDefault();
      last.focus();
    }
  } else {
    if (active === last) {
      event.preventDefault();
      first.focus();
    }
  }
};

// Navegação por teclado
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;
  
  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
    case 'Tab':
      trapFocus(e);
      break;
  }
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.95;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.gallery-section {
  padding: 4rem 0;
}

.gallery-intro {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  transition: color 0.4s ease;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* Move animation para reordenação */
.gallery-move {
  transition: transform 0.5s var(--ease-out-expo);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.5s var(--ease-pop);
  cursor: pointer;
  /* Animações de entrada são controladas por JS hooks */
}

.gallery-item:hover {
  transform: translateY(-18px) scale(1.03) rotate(1deg);
  box-shadow: 0 30px 60px rgba(46, 125, 50, 0.3);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 92, 30, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-overlay i {
  font-size: 3rem;
  color: white;
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-overlay i {
  transform: scale(1);
}

.placeholder-image {
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
  transition: all 0.4s ease;
}

.gallery-item:hover .placeholder-image {
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #66BB6A 100%);
}

.placeholder-icon {
  font-size: 5rem;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.gallery-item:hover .placeholder-icon {
  transform: scale(1.25) rotate(10deg);
}

.placeholder-text {
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.9;
}

.gallery-note {
  background: var(--bg-secondary);
  border-left: 4px solid #4CAF50;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-top: 3rem;
  transition: background 0.4s ease;
}

.gallery-note p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  transition: color 0.4s ease;
}

.gallery-note code {
  background: #e8f5e9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #2E7D32;
}

/* ═══════════════════════════════════════════════════════════════════════════
   LIGHTBOX STYLES
   ═══════════════════════════════════════════════════════════════════════════ */

.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.lightbox-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.lightbox-nav:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 2rem;
}

.lightbox-next {
  right: 2rem;
}

.lightbox-image-container {
  max-width: 80vw;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-placeholder {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  border-radius: 20px;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  color: white;
  text-align: center;
  animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.lightbox-icon {
  font-size: 8rem;
}

.lightbox-title {
  font-size: 2rem;
  font-weight: 700;
}

.lightbox-caption {
  font-size: 1.2rem;
  opacity: 0.9;
}

.lightbox-counter {
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  opacity: 0.8;
}

.lightbox-thumbnails {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
}

.lightbox-thumb {
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-thumb.active {
  border-color: #4CAF50;
  background: #4CAF50;
}

/* Animações do Lightbox */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.4s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-active .lightbox-placeholder,
.lightbox-leave-active .lightbox-placeholder {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.lightbox-enter-from .lightbox-placeholder {
  transform: scale(0.9);
}

.lightbox-leave-to .lightbox-placeholder {
  transform: scale(0.9);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════════════════════════ */

.cta-section {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #2E7D32;
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: #1B5E20;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 2rem;
  }
  
  .lightbox-nav {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
  
  .lightbox-prev {
    left: 0.5rem;
  }
  
  .lightbox-next {
    right: 0.5rem;
  }
  
  .lightbox-placeholder {
    padding: 2rem 3rem;
  }
  
  .lightbox-icon {
    font-size: 5rem;
  }
  
  .lightbox-title {
    font-size: 1.5rem;
  }
  
  .lightbox-thumbnails {
    display: none;
  }
}
</style>
