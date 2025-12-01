<template>
  <div class="servicos">
    <section class="page-header">
      <div class="container">
        <h1>Nossos Serviços</h1>
        <p>Cuidados completos para a saúde e bem-estar do seu pet</p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <!-- Filtros Interativos -->
        <div class="filter-tabs">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            class="filter-btn"
            :class="{ active: activeFilter === filter.id }"
            @click="setFilter(filter.id)"
          >
            <i :class="'mdi ' + filter.icon"></i>
            <span>{{ filter.label }}</span>
          </button>
        </div>

        <!-- Grid de Serviços com TransitionGroup -->
        <TransitionGroup name="services" tag="div" class="services-grid">
          <div 
            v-for="service in filteredServices" 
            :key="service.id"
            class="service-card"
          >
            <div class="service-icon"><i :class="'mdi ' + service.icon"></i></div>
            <h2>{{ service.title }}</h2>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-list">
              <li v-for="(feature, idx) in service.features" :key="idx">{{ feature }}</li>
            </ul>
          </div>
        </TransitionGroup>
        
        <!-- Mensagem quando não há resultados -->
        <Transition name="fade">
          <div v-if="filteredServices.length === 0" class="no-results">
            <i class="mdi mdi-magnify"></i>
            <p>Nenhum serviço encontrado nesta categoria</p>
          </div>
        </Transition>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2>Precisa de atendimento?</h2>
            <p>Entre em contato conosco pelo WhatsApp e agende seu horário</p>
          </div>
          <NuxtLink to="/contato" class="cta-button">
            <i class="mdi mdi-whatsapp"></i>
            Agendar Agora
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ═══════════════════════════════════════════════════════════════════════════
// DADOS DOS SERVIÇOS
// ═══════════════════════════════════════════════════════════════════════════

const services = [
  {
    id: 'cirurgias',
    category: 'clinicos',
    icon: 'mdi-hospital-building',
    title: 'Cirurgias',
    description: 'Realizamos diversos tipos de procedimentos cirúrgicos com equipamentos modernos e equipe altamente especializada.',
    features: [
      'Cirurgias de rotina (castração, etc.)',
      'Procedimentos ortopédicos',
      'Cirurgias de tecidos moles',
      'Oncologia veterinária',
      'Anestesia segura e monitorada',
      'Pós-operatório acompanhado'
    ]
  },
  {
    id: 'atendimentos',
    category: 'clinicos',
    icon: 'mdi-stethoscope',
    title: 'Atendimentos',
    description: 'Consultas veterinárias completas com profissionais qualificados para cuidar da saúde do seu pet.',
    features: [
      'Consultas de rotina',
      'Vacinação completa',
      'Vermifugação',
      'Controle de parasitas',
      'Avaliação clínica geral',
      'Orientação nutricional'
    ]
  },
  {
    id: 'exames',
    category: 'exames',
    icon: 'mdi-microscope',
    title: 'Exames Laboratoriais',
    description: 'Análises clínicas precisas e confiáveis para diagnóstico e acompanhamento da saúde do seu animal.',
    features: [
      'Hemograma completo',
      'Bioquímica sanguínea',
      'Exame de urina',
      'Exame de fezes',
      'Testes hormonais',
      'Exames de imagem'
    ]
  },
  {
    id: 'banho-tosa',
    category: 'estetica',
    icon: 'mdi-shower-head',
    title: 'Banho e Tosa',
    description: 'Serviços de estética e higiene para manter seu pet limpo, bonito e saudável.',
    features: [
      'Banho com produtos de qualidade',
      'Tosa higiênica',
      'Tosa completa',
      'Corte de unhas',
      'Limpeza de ouvidos',
      'Hidratação e escovação'
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// FILTROS
// ═══════════════════════════════════════════════════════════════════════════

const filters = [
  { id: 'todos', label: 'Todos', icon: 'mdi-view-grid' },
  { id: 'clinicos', label: 'Clínicos', icon: 'mdi-medical-bag' },
  { id: 'estetica', label: 'Estética', icon: 'mdi-scissors-cutting' },
  { id: 'exames', label: 'Exames', icon: 'mdi-test-tube' }
];

const activeFilter = ref('todos');

const setFilter = (filterId) => {
  activeFilter.value = filterId;
};

const filteredServices = computed(() => {
  if (activeFilter.value === 'todos') {
    return services;
  }
  return services.filter(s => s.category === activeFilter.value);
});

// ═══════════════════════════════════════════════════════════════════════════
// SEO
// ═══════════════════════════════════════════════════════════════════════════

useHead({
  title: 'Serviços - PontoVet',
  meta: [
    { name: 'description', content: 'Conheça os serviços da PontoVet: cirurgias, atendimentos veterinários, exames laboratoriais e banho e tosa para seu pet.' }
  ]
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

.services-section {
  padding: 4rem 0;
}

/* ═══════════════════════════════════════════════════════════════════════════
   FILTROS INTERATIVOS
   ═══════════════════════════════════════════════════════════════════════════ */

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  background: var(--card-bg);
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 10px var(--shadow-color);
}

.filter-btn i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--green-primary);
  color: var(--green-primary);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.2);
}

.filter-btn:hover i {
  transform: scale(1.15);
}

.filter-btn.active {
  background: linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 6px 20px rgba(46, 125, 50, 0.4);
}

.filter-btn.active i {
  transform: scale(1.1);
}

/* ═══════════════════════════════════════════════════════════════════════════
   GRID E CARDS
   ═══════════════════════════════════════════════════════════════════════════ */

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* TransitionGroup animations */
.services-move,
.services-enter-active,
.services-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.services-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
}

.services-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-30px);
}

.services-leave-active {
  position: absolute;
}

.service-card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 25px;
  box-shadow: 0 8px 30px var(--shadow-color);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }

.service-card:hover {
  transform: translateY(-18px) scale(1.02);
  box-shadow: 0 30px 60px rgba(46, 125, 50, 0.25);
  border-color: #4CAF50;
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #4CAF50;
}

.service-icon i {
  display: block;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.service-card:hover .service-icon {
  transform: scale(1.15);
}

.service-card:hover .service-icon i {
  transform: rotate(10deg);
}

.service-card h2 {
  color: var(--green-primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
  transition: color 0.4s ease;
}

.service-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1rem;
  transition: color 0.4s ease;
}

.service-list {
  list-style: none;
  padding: 0;
}

.service-list li {
  padding: 0.7rem 0;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  position: relative;
  padding-left: 1.5rem;
  transition: color 0.4s ease, border-color 0.4s ease;
}

.service-list li:last-child {
  border-bottom: none;
}

.service-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

.cta-section {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  padding: 5rem 2rem;
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
  background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.cta-text {
  color: white;
}

.cta-text h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.cta-text p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: white;
  color: #2E7D32;
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
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

  .filter-tabs {
    gap: 0.75rem;
  }

  .filter-btn {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }

  .filter-btn span {
    display: none;
  }

  .filter-btn i {
    font-size: 1.3rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-text h2 {
    font-size: 2rem;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   NO RESULTS & FADE TRANSITION
   ═══════════════════════════════════════════════════════════════════════════ */

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
}

.no-results i {
  font-size: 4rem;
  opacity: 0.3;
  margin-bottom: 1rem;
  display: block;
}

.no-results p {
  font-size: 1.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
