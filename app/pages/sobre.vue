<template>
  <div class="sobre">
    <section class="page-header">
      <div class="container">
        <h1>Sobre a PontoVet</h1>
        <p>Conheça nossa história e compromisso com a saúde do seu pet</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Nossa História</h2>
            <p>
              A PontoVet nasceu do amor pelos animais e do compromisso em oferecer
              cuidados veterinários de excelência. Com anos de experiência no mercado,
              nos tornamos referência em atendimento veterinário completo.
            </p>
            <p>
              Nossa equipe é formada por profissionais altamente qualificados e
              apaixonados pelo que fazem, garantindo que cada pet receba o tratamento
              mais adequado e humanizado possível.
            </p>
          </div>
          <div class="image-placeholder">
            <div class="placeholder">🏥</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">🎯</div>
            <h3>Nossa Missão</h3>
            <p>
              Promover a saúde e o bem-estar dos animais através de atendimento
              veterinário de qualidade, com respeito, dedicação e amor.
            </p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">👁️</div>
            <h3>Nossa Visão</h3>
            <p>
              Ser referência em medicina veterinária, reconhecida pela excelência
              no atendimento e pelos cuidados humanizados.
            </p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">💎</div>
            <h3>Nossos Valores</h3>
            <p>
              Amor aos animais, ética profissional, atendimento humanizado,
              compromisso com a qualidade e respeito aos tutores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="differentials">
      <div class="container">
        <h2>Por que escolher a PontoVet?</h2>
        <div class="differentials-grid">
          <div class="differential-item">
            <span class="check">✓</span>
            <div>
              <h4>Equipe Especializada</h4>
              <p>Veterinários experientes e em constante atualização</p>
            </div>
          </div>
          <div class="differential-item">
            <span class="check">✓</span>
            <div>
              <h4>Equipamentos Modernos</h4>
              <p>Tecnologia de ponta para diagnósticos precisos</p>
            </div>
          </div>
          <div class="differential-item">
            <span class="check">✓</span>
            <div>
              <h4>Atendimento Humanizado</h4>
              <p>Cuidado e atenção individualizada para cada pet</p>
            </div>
          </div>
          <div class="differential-item">
            <span class="check">✓</span>
            <div>
              <h4>Instalações Completas</h4>
              <p>Ambiente preparado para todos os tipos de atendimento</p>
            </div>
          </div>
          <div class="differential-item">
            <span class="check">✓</span>
            <div>
              <h4>Compromisso com o Bem-Estar</h4>
              <p>Seu pet é tratado como parte da nossa família</p>
            </div>
          </div>
          <div class="differential-item">
            <span class="check">✓</span>
            <div>
              <h4>Serviços Completos</h4>
              <p>Tudo que seu pet precisa em um só lugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Agende uma Visita!</h2>
        <p>Venha conhecer nossa clínica e nossa equipe</p>
        <NuxtLink to="/contato" class="cta-button">Entre em Contato</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Sobre - PontoVet',
  meta: [
    { name: 'description', content: 'Conheça a PontoVet, clínica veterinária dedicada ao cuidado integral do seu pet com equipe especializada e instalações modernas.' }
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

.about-content {
  padding: 4rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-content h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

.placeholder {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  border-radius: 25px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  transition: transform 0.4s ease;
}

.placeholder:hover {
  transform: scale(1.02);
}

.mission-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.mission-card {
  background: white;
  padding: 2.5rem;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.mission-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(46, 125, 50, 0.2);
  border-color: #4CAF50;
}

.mission-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;
}

.mission-card:hover .mission-icon {
  transform: scale(1.2);
}

.mission-card h3 {
  color: #2E7D32;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.mission-card p {
  color: #666;
  line-height: 1.6;
}

.differentials {
  padding: 4rem 0;
}

.differentials h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
}

.differentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.differential-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.check {
  background: #8FBC8F;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.differential-item h4 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.differential-item p {
  color: #666;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
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

  .content-grid {
    grid-template-columns: 1fr;
  }

  .text-content h2 {
    font-size: 2rem;
  }

  .placeholder {
    height: 250px;
    font-size: 4rem;
  }

  .differentials-grid {
    grid-template-columns: 1fr;
  }

  .differentials h2,
  .cta-section h2 {
    font-size: 2rem;
  }
}
</style>
