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
          <!-- Formulário de Pré-Agendamento -->
          <div class="booking-card">
            <div class="booking-header">
              <div class="booking-icon">
                <i class="mdi mdi-calendar-check"/>
              </div>
              <h2>Pré-Agendamento</h2>
              <p class="booking-subtitle">Preencha o formulário e fale diretamente conosco</p>
            </div>
            
            <form class="booking-form" @submit.prevent="sendWhatsApp">
              <!-- Nome do Tutor -->
              <div class="form-group">
                <label for="nome">
                  <i class="mdi mdi-account"/>
                  Seu Nome
                </label>
                <input 
                  id="nome" 
                  v-model="form.nome" 
                  type="text" 
                  placeholder="Digite seu nome"
                  required
                  class="form-input"
                />
              </div>
              
              <!-- Nome do Pet -->
              <div class="form-group">
                <label for="pet">
                  <i class="mdi mdi-paw"/>
                  Nome do Pet
                </label>
                <input 
                  id="pet" 
                  v-model="form.pet" 
                  type="text" 
                  placeholder="Digite o nome do seu pet"
                  required
                  class="form-input"
                />
              </div>

              <!-- Telefone para contato -->
              <div class="form-group">
                <label for="telefone">
                  <i class="mdi mdi-phone"/>
                  Telefone / WhatsApp
                </label>
                <input 
                  id="telefone" 
                  v-model="form.telefone" 
                  type="tel" 
                  placeholder="(18) 99735-9924"
                  required
                  inputmode="tel"
                  pattern="[0-9()+\s-]{10,}"
                  class="form-input"
                  aria-describedby="telefone-hint"
                />
                <small id="telefone-hint" class="hint">Use apenas números, com DDD. Ex: 18997359924</small>
                <p
                  v-if="phoneError"
                  class="form-error"
                  role="alert"
                  aria-live="polite">{{ phoneError }}</p>
              </div>
              
              <!-- Serviço Desejado -->
              <div class="form-group">
                <label for="servico">
                  <i class="mdi mdi-medical-bag"/>
                  Serviço Desejado
                </label>
                <select 
                  id="servico" 
                  v-model="form.servico" 
                  required
                  class="form-select"
                >
                  <option value="" disabled>Selecione o serviço</option>
                  <option value="Consulta Veterinária">Consulta Veterinária</option>
                  <option value="Cirurgia">Cirurgia</option>
                  <option value="Exames Laboratoriais">Exames Laboratoriais</option>
                  <option value="Banho e Tosa">Banho e Tosa</option>
                  <option value="Vacinação">Vacinação</option>
                  <option value="Emergência">Emergência</option>
                  <option value="Outro">Outro assunto</option>
                </select>
              </div>
              
              <!-- Botão de Envio -->
              <button type="submit" class="submit-button" :disabled="!isFormValid">
                <span class="button-content">
                  <i class="mdi mdi-whatsapp"/>
                  <span>Enviar via WhatsApp</span>
                </span>
                <span class="button-shine"/>
              </button>
            </form>
            
            <p class="booking-note">
              <i class="mdi mdi-information-outline"/>
              Ao clicar, você será redirecionado para o WhatsApp com sua mensagem pronta.
            </p>
          </div>

          <!-- Info Cards -->
          <div class="info-cards">
            <div class="info-card">
              <h3><i class="mdi mdi-map-marker"/> Endereço</h3>
              <p>Rua Exemplo, 123<br/>Centro - Cidade/SP<br/>CEP: 00000-000</p>
            </div>

            <div class="info-card">
              <h3><i class="mdi mdi-clock-outline"/> Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h<br/>Sábados: 8h às 12h<br/>Domingos e Feriados: Fechado</p>
            </div>

            <div class="info-card highlight">
              <h3><i class="mdi mdi-phone"/> Telefone / WhatsApp</h3>
              <p class="phone-big">(18) 99735-9924</p>
              <a href="https://wa.me/5518997359924" target="_blank" class="quick-whatsapp">
                <i class="mdi mdi-whatsapp"/>
                Chamar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa Section -->
    <section class="map-section">
      <div class="container">
        <h2><i class="mdi mdi-map-marker-radius"/> Nossa Localização</h2>
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
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section - Accordion -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-header">
          <span class="section-label">Dúvidas?</span>
          <h2>Perguntas Frequentes</h2>
          <p>Encontre respostas rápidas para as principais dúvidas</p>
        </div>
        
        <div class="faq-accordion">
          <details v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <summary class="faq-question">
              <span class="question-icon">
                <i class="mdi mdi-help-circle-outline"/>
              </span>
              <span class="question-text">{{ faq.question }}</span>
              <span class="chevron">
                <i class="mdi mdi-chevron-down"/>
              </span>
            </summary>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </details>
        </div>
        
        <div class="faq-cta">
          <p>Não encontrou sua resposta?</p>
          <a href="https://wa.me/5518997359924" target="_blank" class="faq-whatsapp">
            <i class="mdi mdi-whatsapp"/>
            Pergunte no WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ═══════════════════════════════════════════════════════════════════════════
// FORMULÁRIO DE PRÉ-AGENDAMENTO
// ═══════════════════════════════════════════════════════════════════════════

const form = reactive({
  nome: '',
  pet: '',
  telefone: '',
  servico: ''
});

const isFormValid = computed(() => {
  return form.nome.trim() && form.pet.trim() && form.servico && isPhoneValid.value;
});

const phoneError = ref('');

const sanitizedPhone = computed(() => form.telefone.replace(/\D/g, ''));

const isPhoneValid = computed(() => {
  const digits = sanitizedPhone.value;
  return digits.length >= 10 && digits.length <= 13; // suporta com/sem código do país
});

const sendWhatsApp = () => {
  if (!isFormValid.value) {
    phoneError.value = 'Preencha todos os campos obrigatórios.';
    return;
  }

  if (!isPhoneValid.value) {
    phoneError.value = 'Digite um telefone válido apenas com números (10 a 13 dígitos).';
    return;
  }
  phoneError.value = '';
  const phoneForMessage = sanitizedPhone.value.startsWith('55')
    ? `+${sanitizedPhone.value}`
    : `+55${sanitizedPhone.value}`;
  
  // Montar mensagem personalizada
  const message = encodeURIComponent(
    `Olá! Me chamo *${form.nome.trim()}*, gostaria de saber mais sobre *${form.servico}* para o meu pet *${form.pet.trim()}*.\nTelefone para contato: ${phoneForMessage}. Podem me ajudar?`
  );
  
  // Abrir WhatsApp com mensagem pronta
  window.open(`https://wa.me/5518997359924?text=${message}`, '_blank');
};

// ═══════════════════════════════════════════════════════════════════════════
// FAQ - PERGUNTAS FREQUENTES
// ═══════════════════════════════════════════════════════════════════════════

const faqs = [
  {
    question: 'Preciso agendar consulta?',
    answer: 'Recomendamos o agendamento prévio pelo WhatsApp para garantir o melhor atendimento. Dessa forma, podemos reservar um horário especialmente para você e seu pet.'
  },
  {
    question: 'Atendem emergências?',
    answer: 'Sim! Em casos de emergência, entre em contato pelo WhatsApp que verificaremos a disponibilidade imediata. Nosso compromisso é cuidar do seu pet quando ele mais precisa.'
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos diversas formas de pagamento: dinheiro, cartões de débito e crédito (Visa, Mastercard, Elo), e PIX para sua comodidade.'
  },
  {
    question: 'Fazem atendimento a domicílio?',
    answer: 'Sim, oferecemos atendimento domiciliar para casos específicos. Consulte disponibilidade e condições pelo WhatsApp.'
  },
  {
    question: 'Quanto tempo dura uma consulta?',
    answer: 'Em média, as consultas de rotina duram entre 30 e 45 minutos. Esse tempo pode variar dependendo das necessidades do seu pet.'
  },
  {
    question: 'Preciso levar algo na primeira consulta?',
    answer: 'Recomendamos trazer a carteirinha de vacinação (se houver), exames anteriores e informações sobre a alimentação e comportamento do pet.'
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// SEO COM DADOS ESTRUTURADOS
// ═══════════════════════════════════════════════════════════════════════════

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

.form-error {
  color: #d32f2f;
  margin-top: 0.35rem;
  font-size: 0.9rem;
}

.hint {
  display: block;
  margin-top: 0.25rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
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

  .booking-card {
    padding: 2rem;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   FORMULÁRIO DE PRÉ-AGENDAMENTO
   ═══════════════════════════════════════════════════════════════════════════ */

.booking-card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px var(--shadow-color);
  animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  border: 2px solid transparent;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.booking-card:hover {
  border-color: var(--green-primary);
  box-shadow: 0 20px 60px rgba(46, 125, 50, 0.2);
}

.booking-header {
  text-align: center;
  margin-bottom: 2rem;
}

.booking-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.25rem;
  background: linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 8px 25px rgba(46, 125, 50, 0.35);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.booking-header h2 {
  color: var(--green-primary);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.booking-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group label i {
  color: var(--green-primary);
  font-size: 1.1rem;
}

.form-input,
.form-select {
  padding: 1rem 1.25rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
  outline: none;
}

.form-input:focus,
.form-select:focus {
  border-color: var(--green-primary);
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.15);
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%234CAF50' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}

.submit-button {
  position: relative;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  border: none;
  padding: 1.25rem 2rem;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
  margin-top: 0.5rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 35px rgba(37, 211, 102, 0.45);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.button-content i {
  font-size: 1.4rem;
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

.booking-note {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 10px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.booking-note i {
  color: var(--green-primary);
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* Info Card com destaque */
.info-card.highlight {
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%);
  border: 2px solid var(--green-primary);
}

.phone-big {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--green-primary);
  margin-bottom: 1rem;
}

.quick-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.quick-whatsapp:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45);
}

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════════════════ */

.faq-section {
  background: var(--bg-secondary);
  padding: 5rem 0;
  transition: background 0.4s ease;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-header .section-label {
  display: inline-block;
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.15) 0%, rgba(76, 175, 80, 0.1) 100%);
  color: var(--green-primary);
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.faq-header h2 {
  color: var(--text-primary);
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
  transition: color 0.4s ease;
}

.faq-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: color 0.4s ease;
}

.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Item do Accordion */
.faq-item {
  background: var(--card-bg);
  border-radius: 16px;
  border: 2px solid transparent;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px var(--shadow-color);
}

.faq-item:hover {
  border-color: var(--green-primary);
  box-shadow: 0 8px 30px rgba(76, 175, 80, 0.15);
}

.faq-item[open] {
  border-color: var(--green-primary);
  box-shadow: 0 10px 35px rgba(76, 175, 80, 0.2);
}

/* Summary (Pergunta) */
.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  list-style: none;
  user-select: none;
  transition: background 0.3s ease;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question:hover {
  background: rgba(76, 175, 80, 0.05);
}

.question-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.15) 0%, rgba(76, 175, 80, 0.1) 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.question-icon i {
  font-size: 1.25rem;
  color: var(--green-primary);
}

.question-text {
  flex: 1;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  transition: color 0.4s ease;
}

.chevron {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.chevron i {
  font-size: 1.5rem;
  color: var(--green-primary);
}

.faq-item[open] .chevron {
  transform: rotate(180deg);
}

/* Answer (Resposta) */
.faq-answer {
  padding: 0 1.5rem 1.5rem;
  padding-left: calc(1.5rem + 40px + 1rem); /* Alinha com o texto */
  animation: answerSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes answerSlide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-answer p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  transition: color 0.4s ease;
}

/* CTA do FAQ */
.faq-cta {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.faq-cta p {
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.faq-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
}

.faq-whatsapp:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
}

.faq-whatsapp i {
  font-size: 1.25rem;
}

/* Responsivo FAQ */
@media (max-width: 768px) {
  .faq-header h2 {
    font-size: 1.75rem;
  }
  
  .faq-question {
    padding: 1rem 1.25rem;
    gap: 0.75rem;
  }
  
  .question-icon {
    width: 36px;
    height: 36px;
  }
  
  .question-text {
    font-size: 0.95rem;
  }
  
  .faq-answer {
    padding-left: calc(1.25rem + 36px + 0.75rem);
  }
}
</style>
