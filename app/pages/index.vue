<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <img src="/logo.png" alt="PontoVet" class="hero-logo" />
        <h1>Bem-vindo à PontoVet</h1>
        <p class="hero-subtitle">Clínica Veterinária completa para o seu melhor amigo</p>
        <p class="hero-description">
          Cuidamos com amor e profissionalismo da saúde e bem-estar do seu pet
        </p>
        <NuxtLink to="/contato" class="cta-button">
          <i class="mdi mdi-whatsapp"></i>
          Agende sua Consulta
        </NuxtLink>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-overview">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-hospital-building"></i></div>
            <h3>Cirurgias</h3>
            <p>Procedimentos cirúrgicos com equipamentos modernos e equipe especializada</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-stethoscope"></i></div>
            <h3>Atendimentos</h3>
            <p>Consultas veterinárias completas com profissionais qualificados</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-microscope"></i></div>
            <h3>Exames Laboratoriais</h3>
            <p>Análises clínicas precisas para diagnóstico e acompanhamento</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="mdi mdi-shower-head"></i></div>
            <h3>Banho e Tosa</h3>
            <p>Cuidados estéticos e de higiene para seu pet</p>
          </div>
        </div>
        <div class="services-cta">
          <NuxtLink to="/servicos" class="btn-secondary">Ver Todos os Serviços</NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-preview">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Sobre a PontoVet</h2>
            <p>
              Somos uma clínica veterinária dedicada ao cuidado integral do seu pet.
              Com uma equipe experiente e instalações modernas, oferecemos serviços
              de qualidade com carinho e atenção personalizada.
            </p>
            <p>
              Nosso compromisso é garantir a saúde e o bem-estar dos animais,
              proporcionando atendimento humanizado e tratamentos eficazes.
            </p>
            <NuxtLink to="/sobre" class="btn-link">Saiba mais sobre nós <i class="mdi mdi-arrow-right"></i></NuxtLink>
          </div>
          <div class="about-image">
            <div class="placeholder-image">
              <i class="mdi mdi-paw"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'PontoVet - Clínica Veterinária',
  meta: [
    { name: 'description', content: 'Clínica veterinária completa oferecendo cirurgias, atendimentos, exames laboratoriais e banho e tosa para seu pet.' }
  ]
});
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.hero-logo {
  height: 150px;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  animation: float 3s ease-in-out infinite;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-logo:hover {
  transform: scale(1.05);
  animation-play-state: paused;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #2E7D32;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  color: #1B5E20;
}

.services-overview {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-overview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(46, 125, 50, 0.2);
  border-color: #4CAF50;
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;
  color: #4CAF50;
}

.service-icon i {
  display: block;
}

.service-card:hover .service-icon {
  transform: scale(1.2);
}

.service-card h3 {
  color: #2E7D32;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

.services-cta {
  text-align: center;
  margin-top: 3rem;
}

.btn-secondary {
  display: inline-block;
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(46, 125, 50, 0.4);
}

.about-preview {
  padding: 4rem 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1rem;
}

.btn-link {
  display: inline-block;
  color: #2E7D32;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.btn-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4CAF50;
  transition: width 0.3s ease;
}

.btn-link:hover {
  color: #1B5E20;
}

.btn-link:hover::after {
  width: 100%;
}

.placeholder-image {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  border-radius: 25px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  animation: fadeIn 0.8s ease-out;
  transition: transform 0.4s ease;
}

.placeholder-image:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .services-overview h2,
  .about-text h2 {
    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .placeholder-image {
    height: 250px;
    font-size: 4rem;
  }
}
</style>
