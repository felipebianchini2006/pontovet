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
            <div class="service-icon">🏥</div>
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
            <div class="service-icon">⚕️</div>
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
            <div class="service-icon">🔬</div>
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
            <div class="service-icon">🛁</div>
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
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
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
  animation: fadeInUp 0.6s ease-out;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.95;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
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
  background: white;
  padding: 2.5rem;
  border-radius: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 50px rgba(46, 125, 50, 0.2);
  border-color: #4CAF50;
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  transition: transform 0.4s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.15) rotate(5deg);
}

.service-card h2 {
  color: #2E7D32;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1rem;
}

.service-list {
  list-style: none;
  padding: 0;
}

.service-list li {
  padding: 0.7rem 0;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  padding-left: 1.5rem;
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
