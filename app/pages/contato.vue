<template>
  <div class="contato">
    <section class="page-header">
      <div class="container">
        <h1>Contato</h1>
        <p>Entre em contato conosco e agende seu atendimento</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- WhatsApp Card -->
          <div class="whatsapp-card">
            <div class="whatsapp-icon">
              <i class="mdi mdi-whatsapp"></i>
            </div>
            <h2>Fale Conosco pelo WhatsApp</h2>
            <p class="phone-number">(18) 99735-9924</p>
            <p class="whatsapp-description">
              Clique no botão abaixo para iniciar uma conversa direta conosco.
              Responderemos o mais rápido possível!
            </p>
            <a href="https://wa.me/5518997359924" target="_blank" class="whatsapp-button">
              <i class="mdi mdi-whatsapp"></i>
              Abrir WhatsApp
            </a>
          </div>

          <!-- Info Cards -->
          <div class="info-cards">
            <div class="info-card">
              <h3><i class="mdi mdi-map-marker"></i> Endereço</h3>
              <p>Rua Exemplo, 123<br>Centro - Cidade/SP<br>CEP: 00000-000</p>
            </div>

            <div class="info-card">
              <h3><i class="mdi mdi-clock-outline"></i> Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h<br>Sábados: 8h às 12h<br>Domingos e Feriados: Fechado</p>
            </div>

            <div class="info-card">
              <h3><i class="mdi mdi-phone"></i> Telefone</h3>
              <p>(18) 99735-9924</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa Section -->
    <section class="map-section">
      <div class="container">
        <h2><i class="mdi mdi-map-marker-radius"></i> Nossa Localização</h2>
        <p class="map-description">Venha nos visitar! Estamos prontos para receber você e seu pet.</p>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d-51.0!3d-21.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDU0JzAwLjAiUyA1McKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1704000000000!5m2!1spt-BR!2sbr"
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização da PontoVet no mapa"
            aria-label="Mapa mostrando a localização da clínica veterinária PontoVet"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>Perguntas Frequentes</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Preciso agendar consulta?</h3>
            <p>Recomendamos o agendamento prévio pelo WhatsApp para garantir o melhor atendimento.</p>
          </div>
          <div class="faq-item">
            <h3>Atendem emergências?</h3>
            <p>Sim! Entre em contato pelo WhatsApp que verificaremos a disponibilidade.</p>
          </div>
          <div class="faq-item">
            <h3>Quais formas de pagamento?</h3>
            <p>Aceitamos dinheiro, cartões de débito e crédito, e PIX.</p>
          </div>
          <div class="faq-item">
            <h3>Fazem atendimento a domicílio?</h3>
            <p>Consulte disponibilidade pelo WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO com dados estruturados
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato - PontoVet',
  description: 'Entre em contato com a PontoVet pelo WhatsApp. Agende sua consulta veterinária.',
  mainEntity: {
    '@type': 'VeterinaryCare',
    name: 'PontoVet - Clínica Veterinária',
    telephone: '+55 18 99735-9924',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cidade',
      addressRegion: 'SP',
      addressCountry: 'BR'
    }
  }
};

useHead({
  title: 'Contato - PontoVet',
  meta: [
    { name: 'description', content: 'Entre em contato com a PontoVet pelo WhatsApp. Agende sua consulta veterinária.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(contactSchema)
    }
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-section {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.whatsapp-card {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(37, 211, 102, 0.3);
  animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
}

.whatsapp-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(37, 211, 102, 0.4);
}

.whatsapp-icon {
  margin-bottom: 1.5rem;
  font-size: 4rem;
  animation: bounce 2s ease-in-out infinite;
}

.whatsapp-icon i {
  display: block;
}

.whatsapp-card h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.phone-number {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.whatsapp-description {
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #25D366;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.whatsapp-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(37, 211, 102, 0.2), transparent);
  transition: left 0.5s ease;
}

.whatsapp-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.whatsapp-button:hover::before {
  left: 100%;
}

.whatsapp-button:active {
  transform: translateY(-2px) scale(0.98);
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.info-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 20px;
  border-left: 4px solid #4CAF50;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.info-card:nth-child(1) { animation-delay: 0.1s; }
.info-card:nth-child(2) { animation-delay: 0.2s; }
.info-card:nth-child(3) { animation-delay: 0.3s; }

.info-card:hover {
  transform: translateX(12px) scale(1.02);
  box-shadow: 0 15px 40px rgba(46, 125, 50, 0.2);
  border-left-width: 6px;
}

.info-card h3 {
  color: var(--green-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.4s ease;
}

.info-card h3 i {
  font-size: 1.5rem;
}

.info-card p {
  color: var(--text-secondary);
  line-height: 1.8;
  transition: color 0.4s ease;
}

.faq-section {
  background: var(--bg-secondary);
  padding: 4rem 0;
  transition: background 0.4s ease;
}

/* Map Section */
.map-section {
  padding: 4rem 0;
  background: var(--bg-primary);
  transition: background 0.4s ease;
}

.map-section h2 {
  text-align: center;
  color: var(--green-primary);
  margin-bottom: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: color 0.4s ease;
}

.map-section h2 i {
  font-size: 2.2rem;
}

.map-description {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  transition: color 0.4s ease;
}

.map-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px var(--shadow-color);
  border: 3px solid var(--green-primary);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.map-container:hover {
  transform: scale(1.01);
  box-shadow: 0 25px 70px rgba(46, 125, 50, 0.25);
}

.map-container iframe {
  display: block;
  width: 100%;
  min-height: 400px;
}

.faq-section h2 {
  text-align: center;
  color: var(--green-primary);
  margin-bottom: 3rem;
  font-size: 2rem;
  transition: color 0.4s ease;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px var(--shadow-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.faq-item:hover {
  transform: translateY(-8px);
  border-color: #4CAF50;
  box-shadow: 0 15px 35px rgba(46, 125, 50, 0.15);
}

.faq-item h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  transition: color 0.4s ease;
}

.faq-item p {
  color: var(--text-secondary);
  line-height: 1.6;
  transition: color 0.4s ease;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .whatsapp-card {
    padding: 2rem;
  }

  .phone-number {
    font-size: 1.5rem;
  }
}
</style>
