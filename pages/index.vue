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
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
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
            <div class="service-icon">🏥</div>
            <h3>Cirurgias</h3>
            <p>Procedimentos cirúrgicos com equipamentos modernos e equipe especializada</p>
          </div>
          <div class="service-card">
            <div class="service-icon">⚕️</div>
            <h3>Atendimentos</h3>
            <p>Consultas veterinárias completas com profissionais qualificados</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🔬</div>
            <h3>Exames Laboratoriais</h3>
            <p>Análises clínicas precisas para diagnóstico e acompanhamento</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🛁</div>
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
            <NuxtLink to="/sobre" class="btn-link">Saiba mais sobre nós →</NuxtLink>
          </div>
          <div class="about-image">
            <div class="placeholder-image">
              <span>🐾</span>
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
  background: linear-gradient(135deg, #A97BA9 0%, #8FBC8F 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-logo {
  height: 150px;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
  color: #A97BA9;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
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
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #A97BA9;
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
  background: #8FBC8F;
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #A97BA9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
  color: #A97BA9;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: color 0.3s ease;
}

.btn-link:hover {
  color: #8FBC8F;
}

.placeholder-image {
  background: linear-gradient(135deg, #A97BA9 0%, #8FBC8F 100%);
  border-radius: 20px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
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
