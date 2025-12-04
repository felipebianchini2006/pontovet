<template>
  <div class="home">
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION - Imersivo com Parallax
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="hero" ref="heroRef">
      <!-- Background Elements -->
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-mesh"></div>
        <div class="hero-particles">
          <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="hero-floating-elements">
        <div class="floating-paw" v-for="n in 5" :key="n" :style="getFloatingStyle(n)">
          <i class="mdi mdi-paw"></i>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="hero-content">
        <div class="hero-badge reveal" ref="badge">
          <i class="mdi mdi-heart-pulse"></i>
          <span>Cuidado Premium para seu Pet</span>
        </div>
        
        <h1 class="hero-title">
          <TextReveal 
            text="Bem-vindo" 
            tag="span" 
            class="title-line"
            :stagger-delay="60"
          />
          <TextReveal 
            text="à PontoVet" 
            tag="span" 
            class="title-line highlight"
            :stagger-delay="60"
          />
        </h1>
        
        <p class="hero-subtitle reveal" ref="subtitle">
          <TextReveal 
            text="Clínica Veterinária completa com atendimento humanizado para o seu melhor amigo" 
            tag="span"
            :stagger-delay="30"
            :threshold="0.1"
          />
        </p>
        
        <div class="hero-cta reveal" ref="cta">
          <MagneticButton :strength="0.25" :content-strength="0.4">
            <a href="https://wa.me/5518997359924" target="_blank" rel="noopener" class="cta-primary">
              <span class="cta-icon"><i class="mdi mdi-whatsapp"></i></span>
              <span class="cta-text">Agende sua Consulta</span>
              <span class="cta-arrow"><i class="mdi mdi-arrow-right"></i></span>
              <div class="cta-bg"></div>
            </a>
          </MagneticButton>
          <MagneticButton :strength="0.2" :content-strength="0.35">
            <NuxtLink to="/servicos" class="cta-secondary">
              <span>Nossos Serviços</span>
              <i class="mdi mdi-chevron-right"></i>
            </NuxtLink>
          </MagneticButton>
        </div>
        
        <!-- Stats -->
        <div class="hero-stats reveal" ref="stats">
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-label">Anos de Experiência</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">5000+</span>
            <span class="stat-label">Pets Atendidos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Dedicação</span>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator" @click="scrollToServices">
        <span class="scroll-text">Role para explorar</span>
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         SERVICES SECTION - Grid Assimétrico
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="services-section" id="services" ref="servicesRef">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-left">
          <span class="section-label">Nossos Serviços</span>
          <h2 class="section-title">
            <TextReveal text="Cuidado completo" tag="span" :stagger-delay="50" />
            <TextReveal text="para seu pet" tag="span" class="title-accent" :stagger-delay="50" />
          </h2>
          <p class="section-description">
            Oferecemos uma gama completa de serviços veterinários com equipamentos
            modernos e profissionais qualificados.
          </p>
        </div>
        
        <!-- Services Grid - Layout Assimétrico -->
        <div class="services-grid stagger-children" ref="servicesGrid">
          <div class="service-card featured">
            <div class="card-icon">
              <i class="mdi mdi-hospital-building"></i>
            </div>
            <div class="card-content">
              <h3>Cirurgias</h3>
              <p>Procedimentos cirúrgicos com equipamentos de última geração e equipe especializada em diversas especialidades.</p>
            </div>
            <div class="card-arrow">
              <i class="mdi mdi-arrow-right"></i>
            </div>
            <div class="card-bg"></div>
          </div>
          
          <div class="service-card">
            <div class="card-icon">
              <i class="mdi mdi-stethoscope"></i>
            </div>
            <div class="card-content">
              <h3>Consultas</h3>
              <p>Atendimento veterinário completo com profissionais qualificados.</p>
            </div>
            <div class="card-arrow">
              <i class="mdi mdi-arrow-right"></i>
            </div>
            <div class="card-bg"></div>
          </div>
          
          <div class="service-card">
            <div class="card-icon">
              <i class="mdi mdi-microscope"></i>
            </div>
            <div class="card-content">
              <h3>Exames</h3>
              <p>Análises laboratoriais precisas para diagnóstico.</p>
            </div>
            <div class="card-arrow">
              <i class="mdi mdi-arrow-right"></i>
            </div>
            <div class="card-bg"></div>
          </div>
          
          <div class="service-card wide">
            <div class="card-icon">
              <i class="mdi mdi-shower-head"></i>
            </div>
            <div class="card-content">
              <h3>Banho e Tosa</h3>
              <p>Cuidados estéticos e de higiene com carinho e atenção especial para deixar seu pet ainda mais bonito e saudável.</p>
            </div>
            <div class="card-arrow">
              <i class="mdi mdi-arrow-right"></i>
            </div>
            <div class="card-bg"></div>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="services-cta reveal">
          <MagneticButton :strength="0.2" :content-strength="0.35">
            <NuxtLink to="/servicos" class="btn-outline">
              <span>Ver Todos os Serviços</span>
              <i class="mdi mdi-arrow-right"></i>
            </NuxtLink>
          </MagneticButton>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         ABOUT SECTION - Layout Split
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="about-section" ref="aboutRef">
      <div class="container">
        <div class="about-grid">
          <!-- Visual Side -->
          <div class="about-visual reveal-left">
            <div class="visual-container">
              <div class="visual-main">
                <div class="visual-icon">
                  <i class="mdi mdi-paw"></i>
                </div>
                <div class="visual-pattern"></div>
              </div>
              <div class="visual-badge">
                <span class="badge-number">10+</span>
                <span class="badge-text">Anos cuidando<br />com amor</span>
              </div>
            </div>
          </div>
          
          <!-- Content Side -->
          <div class="about-content reveal-right">
            <span class="section-label">Sobre Nós</span>
            <h2 class="section-title">
              <TextReveal text="Dedicação e carinho" tag="span" :stagger-delay="50" />
              <TextReveal text="em cada atendimento" tag="span" class="title-accent" :stagger-delay="50" />
            </h2>
            <div class="about-text">
              <p>
                Somos uma clínica veterinária dedicada ao cuidado integral do seu pet.
                Com uma equipe experiente e instalações modernas, oferecemos serviços
                de qualidade com carinho e atenção personalizada.
              </p>
              <p>
                Nosso compromisso é garantir a saúde e o bem-estar dos animais,
                proporcionando atendimento humanizado e tratamentos eficazes.
              </p>
            </div>
            <div class="about-features">
              <div class="feature-item">
                <i class="mdi mdi-check-circle"></i>
                <span>Equipe Qualificada</span>
              </div>
              <div class="feature-item">
                <i class="mdi mdi-check-circle"></i>
                <span>Equipamentos Modernos</span>
              </div>
              <div class="feature-item">
                <i class="mdi mdi-check-circle"></i>
                <span>Atendimento Humanizado</span>
              </div>
            </div>
            <MagneticButton :strength="0.15" :content-strength="0.3">
              <NuxtLink to="/sobre" class="btn-link">
                <span>Conheça nossa história</span>
                <i class="mdi mdi-arrow-right"></i>
              </NuxtLink>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         CTA FINAL SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="cta-section" ref="ctaRef">
      <div class="cta-bg-pattern"></div>
      <div class="container">
        <div class="cta-content reveal-scale">
          <h2><TextReveal text="Pronto para cuidar do seu pet?" tag="span" :stagger-delay="40" /></h2>
          <p>Entre em contato conosco e agende uma consulta.</p>
          <MagneticButton :strength="0.3" :content-strength="0.45">
            <a href="https://wa.me/5518997359924" target="_blank" rel="noopener" class="cta-whatsapp">
              <i class="mdi mdi-whatsapp"></i>
              <span>Fale Conosco pelo WhatsApp</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// JSON-LD Schema para SEO local - VeterinaryCare/LocalBusiness
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  '@id': 'https://pontovet.com.br/#organization',
  name: 'PontoVet - Clínica Veterinária',
  alternateName: 'PontoVet',
  description: 'Clínica veterinária completa com mais de 10 anos de experiência. Oferecemos cirurgias, consultas, exames laboratoriais e serviços de banho e tosa para seu pet.',
  url: 'https://pontovet.com.br',
  logo: 'https://pontovet.com.br/logo.png',
  image: 'https://pontovet.com.br/logo.png',
  telephone: '+55 18 99735-9924',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Exemplo, 123',
    addressLocality: 'Cidade',
    addressRegion: 'SP',
    postalCode: '00000-000',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.9,
    longitude: -51.0
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00'
    }
  ],
  sameAs: [
    'https://wa.me/5518997359924'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Veterinários',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cirurgias Veterinárias',
          description: 'Procedimentos cirúrgicos com equipamentos de última geração e equipe especializada.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultas Veterinárias',
          description: 'Atendimento veterinário completo com profissionais qualificados.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Exames Laboratoriais',
          description: 'Análises laboratoriais precisas para diagnóstico do seu pet.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Banho e Tosa',
          description: 'Cuidados estéticos e de higiene com carinho e atenção especial.'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  }
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PontoVet',
  url: 'https://pontovet.com.br',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://pontovet.com.br/servicos?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

useHead({
  title: 'PontoVet - Clínica Veterinária',
  meta: [
    { name: 'description', content: 'Clínica veterinária completa oferecendo cirurgias, atendimentos, exames laboratoriais e banho e tosa para seu pet.' },
    { name: 'keywords', content: 'veterinário, clínica veterinária, pet, cachorro, gato, cirurgia veterinária, banho e tosa, exames laboratoriais' },
    { property: 'og:title', content: 'PontoVet - Clínica Veterinária' },
    { property: 'og:description', content: 'Cuidado premium para seu pet. Clínica veterinária completa com mais de 10 anos de experiência.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pontovet.com.br' },
    { property: 'og:image', content: 'https://pontovet.com.br/logo.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'PontoVet - Clínica Veterinária' },
    { name: 'twitter:description', content: 'Cuidado premium para seu pet. Clínica veterinária completa.' },
    { name: 'geo.region', content: 'BR-SP' },
    { name: 'geo.placename', content: 'São Paulo' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(websiteSchema)
    }
  ]
});

// Refs para elementos
const heroRef = ref(null);
const servicesRef = ref(null);
const aboutRef = ref(null);
const ctaRef = ref(null);
const servicesGrid = ref(null);

// Funções para estilos dinâmicos das partículas
const getParticleStyle = (n) => {
  const size = Math.random() * 4 + 2;
  return {
    '--size': `${size}px`,
    '--x': `${Math.random() * 100}%`,
    '--y': `${Math.random() * 100}%`,
    '--duration': `${Math.random() * 20 + 15}s`,
    '--delay': `${Math.random() * 5}s`,
  };
};

const getFloatingStyle = (n) => {
  return {
    '--x': `${10 + (n * 18)}%`,
    '--y': `${20 + Math.random() * 60}%`,
    '--duration': `${8 + n * 2}s`,
    '--delay': `${n * 0.5}s`,
    '--rotation': `${Math.random() * 360}deg`,
  };
};

// Scroll suave para serviços
const scrollToServices = () => {
  if (import.meta.client) {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }
};

// Intersection Observer para animações de scroll reveal
onMounted(() => {
  if (import.meta.client) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observar todos os elementos com classes de reveal
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach((el) => {
      observer.observe(el);
    });
  }
});
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════════════════════
   HOME PAGE - Design Premium Awwwards Level
   ═══════════════════════════════════════════════════════════════════════════ */

.home {
  overflow-x: hidden;
}

/* ─── HERO SECTION ─── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3xl) var(--space-lg);
  overflow: hidden;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0.95;
}

.hero-mesh {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 60%);
}

/* Particles */
.hero-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: floatParticle var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes floatParticle {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-30px) translateX(20px);
    opacity: 0.8;
  }
}

/* Floating Elements */
.hero-floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-paw {
  position: absolute;
  left: var(--x);
  top: var(--y);
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.1);
  animation: floatPaw var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  transform: rotate(var(--rotation));
}

@keyframes floatPaw {
  0%, 100% {
    transform: translateY(0) rotate(var(--rotation));
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(calc(var(--rotation) + 15deg));
    opacity: 0.2;
  }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  color: white;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  animation: fadeInDown 0.8s var(--ease-out-expo) 0.2s both;
}

.hero-badge i {
  color: #ff6b6b;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
  overflow: hidden;
}

.title-word {
  display: inline-block;
  animation: slideUp 1s var(--ease-out-expo) both;
}

.title-line:nth-child(1) .title-word {
  animation-delay: 0.3s;
}

.title-line:nth-child(2) .title-word {
  animation-delay: 0.4s;
}

.title-word.highlight {
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 400;
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.8s var(--ease-out-expo) 0.5s both;
}

.hide-mobile {
  display: block;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s var(--ease-out-expo) 0.6s both;
}

.cta-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: white;
  color: var(--green-deep);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  text-decoration: none;
  overflow: hidden;
  transition: transform var(--duration-normal) var(--ease-out-back),
              box-shadow var(--duration-normal) var(--ease-out-expo);
}

.cta-primary .cta-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--duration-normal) ease;
  z-index: 0;
}

.cta-primary .cta-icon,
.cta-primary .cta-text,
.cta-primary .cta-arrow {
  position: relative;
  z-index: 1;
  transition: color var(--duration-normal) ease;
}

.cta-primary .cta-icon {
  font-size: 1.4rem;
}

.cta-primary .cta-arrow {
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity var(--duration-normal) var(--ease-out-expo),
              transform var(--duration-normal) var(--ease-out-expo);
}

.cta-primary:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.cta-primary:hover .cta-bg {
  opacity: 1;
}

.cta-primary:hover .cta-icon,
.cta-primary:hover .cta-text {
  color: white;
}

.cta-primary:hover .cta-arrow {
  opacity: 1;
  transform: translateX(0);
  color: white;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out-expo);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  animation: fadeInUp 0.8s var(--ease-out-expo) 0.7s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.8;
}

.stat-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  z-index: 10;
  animation: fadeIn 1s var(--ease-out-expo) 1s both;
}

.scroll-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.7);
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.3;
  }
}

/* ─── SERVICES SECTION ─── */
.services-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-secondary);
  position: relative;
}

.section-header {
  max-width: 600px;
  margin-bottom: var(--space-2xl);
}

.section-label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--green-primary);
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.title-accent {
  display: block;
  color: var(--green-primary);
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Services Grid - Assimétrico */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 1.5rem;
  margin-bottom: var(--space-xl);
}

.service-card {
  position: relative;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  border: 1px solid var(--card-border);
  overflow: hidden;
  transition: transform var(--duration-normal) var(--ease-out-back),
              box-shadow var(--duration-normal) var(--ease-out-expo),
              border-color var(--duration-normal) ease;
  cursor: pointer;
}

.service-card.featured {
  grid-row: span 2;
  padding: 2.5rem;
}

.service-card.wide {
  grid-column: span 2;
}

.service-card .card-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--duration-normal) ease;
  z-index: 0;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: var(--green-primary);
}

.service-card:hover .card-bg {
  opacity: 1;
}

.service-card:hover .card-icon,
.service-card:hover h3,
.service-card:hover p {
  color: white;
}

.card-icon {
  position: relative;
  z-index: 1;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green-bg);
  border-radius: var(--radius-md);
  font-size: 1.75rem;
  color: var(--green-primary);
  margin-bottom: 1.5rem;
  transition: all var(--duration-normal) ease;
}

.service-card.featured .card-icon {
  width: 80px;
  height: 80px;
  font-size: 2.25rem;
}

.service-card:hover .card-icon {
  background: rgba(255, 255, 255, 0.2);
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  transition: color var(--duration-normal) ease;
}

.service-card.featured .card-content h3 {
  font-size: 1.5rem;
}

.card-content p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  transition: color var(--duration-normal) ease;
}

.card-arrow {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 50%;
  color: var(--green-primary);
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--duration-normal) var(--ease-out-expo);
  z-index: 1;
}

.service-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  background: white;
  color: var(--green-deep);
}

/* Services CTA */
.services-cta {
  text-align: center;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--green-primary);
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid var(--green-primary);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out-expo);
}

.btn-outline:hover {
  background: var(--green-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(26, 92, 30, 0.2);
}

.btn-outline i {
  transition: transform var(--duration-normal) var(--ease-out-expo);
}

.btn-outline:hover i {
  transform: translateX(5px);
}

/* ─── ABOUT SECTION ─── */
.about-section {
  padding: var(--space-3xl) 0;
  background: var(--bg-primary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

/* Visual Side */
.about-visual {
  position: relative;
}

.visual-container {
  position: relative;
}

.visual-main {
  position: relative;
  aspect-ratio: 4/5;
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-icon {
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.3);
  animation: float 6s ease-in-out infinite;
}

.visual-pattern {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 40%);
}

.visual-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--card-bg);
  padding: 1.5rem 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-elevated);
  text-align: center;
}

.badge-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--green-primary);
  line-height: 1;
}

.badge-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* Content Side */
.about-content {
  padding-left: var(--space-lg);
}

.about-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: var(--text-primary);
}

.feature-item i {
  color: var(--green-primary);
  font-size: 1.25rem;
}

.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--green-primary);
  font-weight: 600;
  text-decoration: none;
  transition: gap var(--duration-normal) var(--ease-out-expo);
}

.btn-link:hover {
  gap: 1rem;
}

.btn-link i {
  transition: transform var(--duration-normal) var(--ease-out-expo);
}

.btn-link:hover i {
  transform: translateX(5px);
}

/* ─── CTA FINAL SECTION ─── */
.cta-section {
  position: relative;
  padding: var(--space-3xl) 0;
  background: var(--gradient-primary);
  overflow: hidden;
}

.cta-bg-pattern {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 40%);
}

.cta-content {
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: white;
  color: var(--green-deep);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out-back);
}

.cta-whatsapp:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.cta-whatsapp i {
  font-size: 1.5rem;
  color: #25D366;
}

/* ═══════════════════════════════════════════════════════════════════════════
   REVEAL ANIMATIONS
   ═══════════════════════════════════════════════════════════════════════════ */

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-60px);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.reveal-scale.visible {
  opacity: 1;
  transform: scale(1);
}

/* Stagger Children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out-expo),
              transform 0.6s var(--ease-out-expo);
}

.stagger-children.visible > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-children.visible > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-children.visible > *:nth-child(3) { transition-delay: 0.3s; }
.stagger-children.visible > *:nth-child(4) { transition-delay: 0.4s; }

.stagger-children.visible > * {
  opacity: 1;
  transform: translateY(0);
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════════════════ */

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .service-card.featured {
    grid-row: span 1;
  }
  
  .service-card.wide {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: var(--space-2xl) var(--space-md);
    min-height: 100svh;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .stat-divider {
    width: 40px;
    height: 1px;
  }
  
  .hide-mobile {
    display: none;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .scroll-indicator {
    display: none;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card.featured,
  .service-card.wide {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .about-content {
    padding-left: 0;
  }
  
  .visual-badge {
    bottom: -15px;
    right: 20px;
    padding: 1rem 1.5rem;
  }
  
  .badge-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
  
  .cta-primary {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .card-arrow {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>
