<template>
  <Teleport to="body">
    <!-- Overlay com blur -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="command-overlay"
        @click="close"
      />
    </Transition>

    <!-- Modal de pesquisa -->
    <Transition name="scale">
      <div
        v-if="isOpen"
        ref="modalRef"
        class="command-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Pesquisa global"
      >
        <!-- Header com input de busca -->
        <div class="command-header">
          <div class="search-icon">
            <i class="mdi mdi-magnify" />
          </div>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            class="command-input"
            placeholder="Pesquisar serviços, páginas..."
            autocomplete="off"
            @keydown.down.prevent="navigateDown"
            @keydown.up.prevent="navigateUp"
            @keydown.enter.prevent="selectCurrent"
            @keydown.escape="close"
          />
          <kbd class="command-shortcut">ESC</kbd>
        </div>

        <!-- Resultados -->
        <div class="command-results">
          <!-- Páginas -->
          <div
            v-if="filteredPages.length > 0"
            class="result-group"
          >
            <div class="result-group-title">
              <i class="mdi mdi-file-document-outline" />
              Páginas
            </div>
            <button
              v-for="(page, index) in filteredPages"
              :key="page.to"
              class="result-item"
              :class="{ active: selectedIndex === index }"
              @click="navigateTo(page.to)"
              @mouseenter="selectedIndex = index"
            >
              <i :class="['mdi', page.icon]" />
              <span class="result-title">{{ page.label }}</span>
              <span class="result-hint">Ir para página</span>
            </button>
          </div>

          <!-- Serviços -->
          <div
            v-if="filteredServices.length > 0"
            class="result-group"
          >
            <div class="result-group-title">
              <i class="mdi mdi-medical-bag" />
              Serviços
            </div>
            <button
              v-for="(service, index) in filteredServices"
              :key="service.id"
              class="result-item"
              :class="{ active: selectedIndex === filteredPages.length + index }"
              @click="navigateTo(`/servicos#${service.id}`)"
              @mouseenter="selectedIndex = filteredPages.length + index"
            >
              <i :class="['mdi', service.icon]" />
              <div class="result-content">
                <span class="result-title">{{ service.title }}</span>
                <span class="result-description">{{ service.description }}</span>
              </div>
              <span class="result-hint">Ver detalhes</span>
            </button>
          </div>

          <!-- Ações rápidas -->
          <div
            v-if="query.length === 0"
            class="result-group"
          >
            <div class="result-group-title">
              <i class="mdi mdi-lightning-bolt" />
              Ações Rápidas
            </div>
            <button
              class="result-item"
              :class="{ active: selectedIndex === totalFilteredItems }"
              @click="openWhatsApp"
              @mouseenter="selectedIndex = totalFilteredItems"
            >
              <i class="mdi mdi-whatsapp" />
              <span class="result-title">Falar no WhatsApp</span>
              <span class="result-hint">Abrir conversa</span>
            </button>
            <button
              class="result-item"
              :class="{ active: selectedIndex === totalFilteredItems + 1 }"
              @click="toggleTheme"
              @mouseenter="selectedIndex = totalFilteredItems + 1"
            >
              <i :class="['mdi', isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent']" />
              <span class="result-title">{{ isDark ? 'Modo Claro' : 'Modo Escuro' }}</span>
              <span class="result-hint">Alternar tema</span>
            </button>
          </div>

          <!-- Estado vazio -->
          <div
            v-if="query.length > 0 && totalFilteredItems === 0"
            class="empty-state"
          >
            <i class="mdi mdi-magnify-close" />
            <p>Nenhum resultado para "{{ query }}"</p>
            <span>Tente palavras como "vacina", "castração", "banho"</span>
          </div>
        </div>

        <!-- Footer com dicas -->
        <div class="command-footer">
          <div class="footer-hint">
            <kbd>↑</kbd>
            <kbd>↓</kbd>
            <span>para navegar</span>
          </div>
          <div class="footer-hint">
            <kbd>Enter</kbd>
            <span>para selecionar</span>
          </div>
          <div class="footer-hint">
            <kbd>Esc</kbd>
            <span>para fechar</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
/**
 * CommandPalette - Pesquisa Global (Ctrl+K)
 * 
 * Benefício: Permite que clientes encontrem rapidamente
 * serviços específicos como "Castração" ou "Vacinas"
 * sem navegar pelos menus.
 */
import { useSiteData } from '~/composables/useSiteData'
import type { NavLink, Service } from '~/composables/useSiteData'

const { isDark, toggleTheme } = useTheme()
const { services, contactInfo, navLinks } = useSiteData()
const router = useRouter()

// Estado do modal
const isOpen = ref(false)
const query = ref('')
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)
const modalRef = ref<HTMLElement | null>(null)

// Páginas com ícones para busca
interface PageItem extends NavLink {
  icon: string
  keywords: string[]
}

const pages: PageItem[] = [
  { to: '/', label: 'Home', icon: 'mdi-home', keywords: ['início', 'principal', 'home'] },
  { to: '/sobre', label: 'Sobre Nós', icon: 'mdi-information', keywords: ['sobre', 'história', 'equipe', 'clínica'] },
  { to: '/servicos', label: 'Serviços', icon: 'mdi-medical-bag', keywords: ['serviços', 'tratamentos', 'procedimentos'] },
  { to: '/galeria', label: 'Galeria', icon: 'mdi-image-multiple', keywords: ['fotos', 'imagens', 'galeria'] },
  { to: '/contato', label: 'Contato', icon: 'mdi-phone', keywords: ['contato', 'telefone', 'endereço', 'whatsapp'] }
]

// Filtros de busca
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const filteredPages = computed(() => {
  if (!query.value) return pages
  const normalizedQuery = normalizeText(query.value)
  return pages.filter(page => {
    const labelMatch = normalizeText(page.label).includes(normalizedQuery)
    const keywordsMatch = page.keywords.some(kw => normalizeText(kw).includes(normalizedQuery))
    return labelMatch || keywordsMatch
  })
})

const filteredServices = computed(() => {
  if (!query.value) return services.slice(0, 4) // Mostra primeiros 4 se não há query
  const normalizedQuery = normalizeText(query.value)
  return services.filter(service => {
    const titleMatch = normalizeText(service.title).includes(normalizedQuery)
    const descMatch = normalizeText(service.description).includes(normalizedQuery)
    const featuresMatch = service.features.some(f => normalizeText(f).includes(normalizedQuery))
    return titleMatch || descMatch || featuresMatch
  })
})

const totalFilteredItems = computed(() => {
  return filteredPages.value.length + filteredServices.value.length
})

// Navegação por teclado
const navigateDown = () => {
  const maxIndex = query.value ? totalFilteredItems.value - 1 : totalFilteredItems.value + 1
  selectedIndex.value = Math.min(selectedIndex.value + 1, maxIndex)
}

const navigateUp = () => {
  selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
}

const selectCurrent = () => {
  const pagesLen = filteredPages.value.length
  const servicesLen = filteredServices.value.length
  
  if (selectedIndex.value < pagesLen) {
    // É uma página
    const page = filteredPages.value[selectedIndex.value]
    if (page) navigateTo(page.to)
  } else if (selectedIndex.value < pagesLen + servicesLen) {
    // É um serviço
    const serviceIndex = selectedIndex.value - pagesLen
    const service = filteredServices.value[serviceIndex]
    if (service) navigateTo(`/servicos#${service.id}`)
  } else if (selectedIndex.value === totalFilteredItems.value) {
    // WhatsApp
    openWhatsApp()
  } else if (selectedIndex.value === totalFilteredItems.value + 1) {
    // Toggle tema
    toggleTheme()
    close()
  }
}

// Ações
const navigateTo = (path: string) => {
  close()
  router.push(path)
}

const openWhatsApp = () => {
  close()
  window.open(contactInfo.whatsappLink, '_blank')
}

// Controle do modal
const open = () => {
  isOpen.value = true
  query.value = ''
  selectedIndex.value = 0
  nextTick(() => {
    inputRef.value?.focus()
  })
}

const close = () => {
  isOpen.value = false
  query.value = ''
}

// Reset selection quando query muda
watch(query, () => {
  selectedIndex.value = 0
})

// Atalho global Ctrl+K ou Cmd+K
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
  }
})

// Expõe método open para uso externo (pelo Header)
defineExpose({ open, close, isOpen })
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════════════════════
   COMMAND PALETTE - Estilo Spotlight/VS Code
   ═══════════════════════════════════════════════════════════════════════════ */

.command-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 9998;
}

.command-modal {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 640px;
  max-height: 70vh;
  background: var(--glass-bg, rgba(255, 255, 255, 0.95));
  border-radius: 16px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

:root.dark .command-modal {
  background: rgba(30, 30, 30, 0.95);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Header / Input */
.command-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

:root.dark .command-header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.search-icon {
  color: var(--primary-green, #2E7D32);
  font-size: 1.25rem;
}

.command-input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  color: inherit;
  outline: none;
}

.command-input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}

:root.dark .command-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.command-shortcut {
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
}

:root.dark .command-shortcut {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

/* Resultados */
.command-results {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.result-group {
  margin-bottom: 8px;
}

.result-group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.5);
}

:root.dark .result-group-title {
  color: rgba(255, 255, 255, 0.5);
}

.result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  color: inherit;
  transition: background 0.15s ease;
}

.result-item:hover,
.result-item.active {
  background: rgba(46, 125, 50, 0.1);
}

:root.dark .result-item:hover,
:root.dark .result-item.active {
  background: rgba(76, 175, 80, 0.15);
}

.result-item i {
  font-size: 1.25rem;
  color: var(--primary-green, #2E7D32);
  width: 24px;
  text-align: center;
}

.result-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.result-title {
  flex: 1;
  font-weight: 500;
}

.result-description {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
}

:root.dark .result-description {
  color: rgba(255, 255, 255, 0.5);
}

.result-hint {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.4);
}

:root.dark .result-hint {
  color: rgba(255, 255, 255, 0.4);
}

/* Estado vazio */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}

:root.dark .empty-state {
  color: rgba(255, 255, 255, 0.5);
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 12px;
  opacity: 0.5;
}

.empty-state p {
  font-weight: 500;
  margin-bottom: 4px;
}

.empty-state span {
  font-size: 0.85rem;
}

/* Footer */
.command-footer {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 12px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.02);
}

:root.dark .command-footer {
  border-top-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
}

.footer-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
}

:root.dark .footer-hint {
  color: rgba(255, 255, 255, 0.5);
}

.footer-hint kbd {
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
}

:root.dark .footer-hint kbd {
  background: rgba(255, 255, 255, 0.1);
}

/* Animações */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.95);
}

/* Mobile */
@media (max-width: 640px) {
  .command-modal {
    top: 10%;
    max-height: 80vh;
  }
  
  .command-footer {
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .result-description {
    display: none;
  }
}
</style>
