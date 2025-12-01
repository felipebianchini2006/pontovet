<template>
  <div class="error-page">
    <!-- Decoração de fundo -->
    <div class="error-bg">
      <div class="paw-prints">
        <i v-for="n in 12" :key="n" class="mdi mdi-paw paw" :style="getPawStyle(n)"></i>
      </div>
    </div>
    
    <div class="error-container">
      <!-- Ilustração do pet perdido -->
      <div class="error-illustration">
        <div class="pet-container">
          <div class="pet-body">
            <i class="mdi mdi-dog pet-icon"></i>
          </div>
          <div class="magnifier">
            <i class="mdi mdi-magnify"></i>
          </div>
          <div class="question-marks">
            <span v-for="n in 3" :key="n" class="question" :style="{ '--delay': n * 0.2 + 's' }">?</span>
          </div>
        </div>
      </div>
      
      <!-- Código 404 -->
      <div class="error-code">
        <span class="digit">4</span>
        <span class="digit paw-digit">
          <i class="mdi mdi-paw"></i>
        </span>
        <span class="digit">4</span>
      </div>
      
      <!-- Mensagem -->
      <h1 class="error-title">Ops! Página não encontrada</h1>
      <p class="error-message">
        Parece que este caminho não existe... 
        <br />
        Nosso cãozinho farejador não conseguiu encontrar o que você procura!
      </p>
      
      <!-- Ações -->
      <div class="error-actions">
        <NuxtLink to="/" class="btn-home">
          <i class="mdi mdi-home"></i>
          <span>Voltar para a Casinha</span>
        </NuxtLink>
        <NuxtLink to="/contato" class="btn-contact">
          <i class="mdi mdi-whatsapp"></i>
          <span>Falar Conosco</span>
        </NuxtLink>
      </div>
      
      <!-- Links úteis -->
      <div class="useful-links">
        <p>Ou talvez você esteja procurando:</p>
        <div class="links">
          <NuxtLink to="/servicos">Serviços</NuxtLink>
          <NuxtLink to="/sobre">Sobre Nós</NuxtLink>
          <NuxtLink to="/galeria">Galeria</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Página de Erro 404 - PontoVet
 * Design "Pet Perdido" com elementos lúdicos
 */

// Props do erro vindas do Nuxt
const props = defineProps({
  error: Object
});

// Gera posições aleatórias para as patinhas
const getPawStyle = (n) => {
  const seed = n * 137.5;
  return {
    '--x': `${(seed % 100)}%`,
    '--y': `${((seed * 2.3) % 100)}%`,
    '--rotation': `${(seed % 360)}deg`,
    '--delay': `${(n * 0.3)}s`,
    '--size': `${1.5 + (seed % 2)}rem`
  };
};

// Limpar erro ao navegar
const clearError = () => {
  clearError({ redirect: '/' });
};

useHead({
  title: 'Página não encontrada - PontoVet'
});
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

.magnifier {
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

.magnifier i {
  font-size: 1.5rem;
  color: var(--green-primary);
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

@keyframes questionFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
}

/* ═══════════════════════════════════════════════════════════════════════════
   CÓDIGO 404
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

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 25px rgba(46, 125, 50, 0.35);
}

.btn-home:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 35px rgba(46, 125, 50, 0.45);
}

.btn-home i {
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
  
  .btn-home,
  .btn-contact {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
