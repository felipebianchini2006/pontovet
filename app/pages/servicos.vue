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
        <div class="services-grid">
          <!-- Cirurgias -->
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-hospital-building"></i></div>
            <h2>Cirurgias</h2>
            <p class="service-description">
              Realizamos diversos tipos de procedimentos cirúrgicos com equipamentos
              modernos e equipe altamente especializada.
            </p>
            <ul class="service-list">
              <li>Cirurgias de rotina (castração, etc.)</li>
              <li>Procedimentos ortopédicos</li>
              <li>Cirurgias de tecidos moles</li>
              <li>Oncologia veterinária</li>
              <li>Anestesia segura e monitorada</li>
              <li>Pós-operatório acompanhado</li>
            </ul>
          </div>

          <!-- Atendimentos -->
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-stethoscope"></i></div>
            <h2>Atendimentos</h2>
            <p class="service-description">
              Consultas veterinárias completas com profissionais qualificados para
              cuidar da saúde do seu pet.
            </p>
            <ul class="service-list">
              <li>Consultas de rotina</li>
              <li>Vacinação completa</li>
              <li>Vermifugação</li>
              <li>Controle de parasitas</li>
              <li>Avaliação clínica geral</li>
              <li>Orientação nutricional</li>
            </ul>
          </div>

          <!-- Exames Laboratoriais -->
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-microscope"></i></div>
            <h2>Exames Laboratoriais</h2>
            <p class="service-description">
              Análises clínicas precisas e confiáveis para diagnóstico e
              acompanhamento da saúde do seu animal.
            </p>
            <ul class="service-list">
              <li>Hemograma completo</li>
              <li>Bioquímica sanguínea</li>
              <li>Exame de urina</li>
              <li>Exame de fezes</li>
              <li>Testes hormonais</li>
              <li>Exames de imagem</li>
            </ul>
          </div>

          <!-- Banho e Tosa -->
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-shower-head"></i></div>
            <h2>Banho e Tosa</h2>
            <p class="service-description">
              Serviços de estética e higiene para manter seu pet limpo, bonito e
              saudável.
            </p>
            <ul class="service-list">
              <li>Banho com produtos de qualidade</li>
              <li>Tosa higiênica</li>
              <li>Tosa completa</li>
              <li>Corte de unhas</li>
              <li>Limpeza de ouvidos</li>
              <li>Hidratação e escovação</li>
            </ul>
          </div>
        </div>
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 25px;
  box-shadow: 0 8px 30px var(--shadow-color);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
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
</style>
