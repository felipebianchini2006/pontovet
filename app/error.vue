<template>
  <div class="error-page" :class="[`error-${errorType}`]">
    <!-- Decoração de fundo -->
    <div class="error-bg">
      <div class="paw-prints">
        <i
          v-for="n in 12"
          :key="n"
          class="mdi mdi-paw paw"
          :style="getPawStyle(n)"
        />
      </div>
    </div>
    
    <div class="error-container">
      <!-- Ilustração dinâmica baseada no tipo de erro -->
      <div class="error-illustration">
        <div class="pet-container">
          <div class="pet-body" :class="{ 'error-500': is500 }">
            <i :class="['mdi', petIcon, 'pet-icon']" />
          </div>
          <div class="status-badge">
            <i :class="['mdi', statusIcon]" />
          </div>
          <div class="question-marks">
            <span
              v-for="n in 3"
              :key="n"
              class="question"
              :style="{ '--delay': n * 0.2 + 's' }"
            >{{ is500 ? '!' : '?' }}</span>
          </div>
        </div>
      </div>
      
      <!-- Código de erro dinâmico -->
      <div class="error-code">
        <span class="digit">{{ errorDigits[0] }}</span>
        <span class="digit paw-digit">
          <i class="mdi mdi-paw" />
        </span>
        <span class="digit">{{ errorDigits[1] }}</span>
      </div>
      
      <!-- Mensagem dinâmica -->
      <h1 class="error-title">{{ errorTitle }}</h1>
      <p class="error-message">
        {{ errorMessage }}
      </p>
      
      <!-- Debug info para desenvolvimento -->
      <div
        v-if="showDebug && error?.message"
        class="debug-info"
      >
        <details>
          <summary>Detalhes técnicos</summary>
          <pre>{{ error?.message }}</pre>
          <pre v-if="error?.stack">{{ error?.stack }}</pre>
        </details>
      </div>
      
      <!-- Ações -->
      <div class="error-actions">
        <!-- Botão principal: Reload para 500, Home para 404 -->
        <button
          v-if="is500"
          class="btn-primary"
          @click="handleReload"
        >
          <i class="mdi mdi-refresh" />
          <span>Tentar Novamente</span>
        </button>
        <button
          class="btn-primary"
          :class="{ 'btn-secondary': is500 }"
          @click="handleGoHome"
        >
          <i class="mdi mdi-home" />
          <span>Voltar para a Casinha</span>
        </button>
        <a
          :href="contactInfo.whatsappLink"
          target="_blank"
          rel="noopener"
          class="btn-contact"
        >
          <i class="mdi mdi-whatsapp" />
          <span>Falar Conosco</span>
        </a>
      </div>
      
      <!-- Links úteis -->
      <div class="useful-links">
        <p>{{ is500 ? 'Enquanto resolvemos, você pode:' : 'Ou talvez você esteja procurando:' }}</p>
        <div class="links">
          <NuxtLink to="/servicos">
            Serviços
          </NuxtLink>
          <NuxtLink to="/sobre">
            Sobre Nós
          </NuxtLink>
          <NuxtLink to="/galeria">
            Galeria
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Página de Erro Global - PontoVet
 * 
 * Trata tanto erros 404 (página não encontrada) quanto 500 (erro de servidor).
 * Benefício: Impede que o utilizador fique preso numa tela branca se algo falhar.
 */
import { useSiteData } from '~/composables/useSiteData'

interface NuxtError {
  statusCode?: number
  message?: string
  stack?: string
  url?: string
}

const props = defineProps<{
  error?: NuxtError
}>()

const { contactInfo } = useSiteData()

// Detectar tipo de erro
const statusCode = computed(() => props.error?.statusCode ?? 404)
const is500 = computed(() => statusCode.value >= 500)
const is404 = computed(() => statusCode.value === 404)
const errorType = computed(() => is500.value ? '500' : '404')

// Mostrar debug apenas em desenvolvimento
const showDebug = computed(() => import.meta.dev && is500.value)

// Dígitos do código de erro (ex: 404 -> ['4', '4'], 500 -> ['5', '0'])
const errorDigits = computed(() => {
  const code = String(statusCode.value)
  return [code[0], code[2] || '0']
})

// Conteúdo dinâmico baseado no tipo de erro
const errorTitle = computed(() => {
  if (is500.value) return 'Ops! Algo deu errado'
  if (is404.value) return 'Ops! Página não encontrada'
  return 'Ops! Ocorreu um erro'
})

const errorMessage = computed(() => {
  if (is500.value) {
    return 'Nosso servidor está tirando um cochilo inesperado. Estamos trabalhando para acordá-lo!'
  }
  return 'Parece que este caminho não existe... Nosso cãozinho farejador não conseguiu encontrar o que você procura!'
})

const petIcon = computed(() => is500.value ? 'mdi-cat' : 'mdi-dog')
const statusIcon = computed(() => is500.value ? 'mdi-wrench' : 'mdi-magnify')

// Gera posições aleatórias para as patinhas
const getPawStyle = (n: number) => {
  const seed = n * 137.5
  return {
    '--x': `${(seed % 100)}%`,
    '--y': `${((seed * 2.3) % 100)}%`,
    '--rotation': `${(seed % 360)}deg`,
    '--delay': `${(n * 0.3)}s`,
    '--size': `${1.5 + (seed % 2)}rem`
  }
}

// Ações
const handleGoHome = () => {
  // clearError limpa o estado de erro e redireciona
  clearError({ redirect: '/' })
}

const handleReload = () => {
  // Tenta recarregar a página atual
  if (import.meta.client) {
    window.location.reload()
  }
}

// SEO
useHead({
  title: computed(() => {
    if (is500.value) return 'Erro no servidor - PontoVet'
    return 'Página não encontrada - PontoVet'
  })
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
}

/* Variante para erro 500 */
.error-500 .pet-body.error-500 {
  background: linear-gradient(135deg, #c62828 0%, #ef5350 100%) !important;
  box-shadow: 0 15px 40px rgba(198, 40, 40, 0.3) !important;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BACKGROUND DECORATIVO
   ═══════════════════════════════════════════════════════════════════════════ */

.error-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.paw-prints {
  position: absolute;
  inset: 0;
}

.paw {
  position: absolute;
  left: var(--x);
  top: var(--y);
  font-size: var(--size);
  color: var(--green-primary);
  opacity: 0.08;
  transform: rotate(var(--rotation));
  animation: pawFloat 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.error-500 .paw {
  color: #c62828;
}

@keyframes pawFloat {
  0%, 100% { transform: rotate(var(--rotation)) translateY(0); }
  50% { transform: rotate(var(--rotation)) translateY(-15px); }
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTAINER PRINCIPAL
   ═══════════════════════════════════════════════════════════════════════════ */

.error-container {
  text-align: center;
  max-width: 600px;
  position: relative;
  z-index: 1;
  animation: containerEntry 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes containerEntry {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO DO PET
   ═══════════════════════════════════════════════════════════════════════════ */

.error-illustration {
  margin-bottom: 1.5rem;
}

.pet-container {
  position: relative;
  display: inline-block;
}

.pet-body {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 40px rgba(46, 125, 50, 0.3);
  animation: petBounce 2s ease-in-out infinite;
}

@keyframes petBounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(-5deg); }
  75% { transform: translateY(-10px) rotate(5deg); }
}

.pet-icon {
  font-size: 4rem;
  color: white;
}

.status-badge {
  position: absolute;
  bottom: -10px;
  right: -15px;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  animation: magnifierMove 3s ease-in-out infinite;
}

@keyframes magnifierMove {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(10px, -5px) rotate(15deg); }
  66% { transform: translate(-10px, -5px) rotate(-15deg); }
}

.status-badge i {
  font-size: 1.5rem;
  color: var(--green-primary);
}

.error-500 .status-badge i {
  color: #c62828;
}

.question-marks {
  position: absolute;
  top: -20px;
  right: -30px;
}

.question {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--green-primary);
  animation: questionFloat 1.5s ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0.7;
}

.error-500 .question {
  color: #c62828;
}

@keyframes questionFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
}

/* ═══════════════════════════════════════════════════════════════════════════
   CÓDIGO DE ERRO
   ═══════════════════════════════════════════════════════════════════════════ */

.error-code {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.digit {
  font-size: 5rem;
  font-weight: 900;
  color: var(--green-primary);
  text-shadow: 0 4px 20px rgba(46, 125, 50, 0.3);
  line-height: 1;
}

.error-500 .digit {
  color: #c62828;
  text-shadow: 0 4px 20px rgba(198, 40, 40, 0.3);
}

.paw-digit {
  animation: pawRotate 2s ease-in-out infinite;
}

.paw-digit i {
  display: block;
  font-size: 4rem;
}

@keyframes pawRotate {
  0%, 100% { transform: rotate(-10deg) scale(1); }
  50% { transform: rotate(10deg) scale(1.1); }
}

/* ═══════════════════════════════════════════════════════════════════════════
   TEXTOS
   ═══════════════════════════════════════════════════════════════════════════ */

.error-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: color 0.4s ease;
}

.error-message {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  transition: color 0.4s ease;
}

/* Debug info (apenas em dev) */
.debug-info {
  margin-bottom: 2rem;
  text-align: left;
}

.debug-info details {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
}

:root.dark .debug-info details {
  background: rgba(255, 255, 255, 0.05);
}

.debug-info summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.debug-info pre {
  font-size: 0.8rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  color: #c62828;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BOTÕES DE AÇÃO
   ═══════════════════════════════════════════════════════════════════════════ */

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 25px rgba(46, 125, 50, 0.35);
}

.error-500 .btn-primary:not(.btn-secondary) {
  background: linear-gradient(135deg, #c62828 0%, #ef5350 100%);
  box-shadow: 0 6px 25px rgba(198, 40, 40, 0.35);
}

.btn-primary:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 35px rgba(46, 125, 50, 0.45);
}

.btn-primary.btn-secondary {
  background: transparent;
  color: var(--green-primary);
  border: 2px solid var(--green-primary);
  box-shadow: none;
}

.btn-primary.btn-secondary:hover {
  background: var(--green-primary);
  color: white;
}

.btn-primary i {
  font-size: 1.3rem;
}

.btn-contact {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--green-primary);
  text-decoration: none;
  border: 2px solid var(--green-primary);
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-contact:hover {
  background: var(--green-primary);
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(46, 125, 50, 0.3);
}

.btn-contact i {
  font-size: 1.3rem;
}

/* ═══════════════════════════════════════════════════════════════════════════
   LINKS ÚTEIS
   ═══════════════════════════════════════════════════════════════════════════ */

.useful-links {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.useful-links p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.links a {
  color: var(--green-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--green-primary);
  transition: width 0.3s ease;
}

.links a:hover::after {
  width: 100%;
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESPONSIVO
   ═══════════════════════════════════════════════════════════════════════════ */

@media (max-width: 768px) {
  .digit {
    font-size: 3.5rem;
  }
  
  .paw-digit i {
    font-size: 3rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-message {
    font-size: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-contact {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
