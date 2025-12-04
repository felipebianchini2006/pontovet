// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Ajuste para data atual para evitar instabilidades com future flags
  compatibilityDate: '2024-12-04',
  devtools: { enabled: true },

  // ═══════════════════════════════════════════════════════════════════════════
  // MÓDULOS - Ecossistema Nuxt profissional
  // ═══════════════════════════════════════════════════════════════════════════
  modules: [
    '@nuxt/image',
    'nuxt-og-image',       // Geração automática de cartões de partilha
    '@nuxt/eslint',        // Linting profissional para qualidade de código
    '@nuxtjs/sitemap',     // SEO: Sitemap automático baseado nas rotas
    '@nuxtjs/robots',      // SEO: robots.txt dinâmico e configurável
    'nuxt-security'        // Segurança: HTTP Headers (CSP, HSTS, X-Frame-Options)
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO - Sitemap Automático
  // Benefício: Google indexa novas páginas automaticamente sem intervenção manual
  // ═══════════════════════════════════════════════════════════════════════════
  site: {
    url: 'https://pontovet.com.br', // URL de produção (ajustar conforme domínio real)
    name: 'PontoVet - Clínica Veterinária'
  },

  sitemap: {
    // Exclui rotas de sistema e APIs
    exclude: [
      '/api/**',
      '/_nuxt/**'
    ],
    // Configura prioridades por tipo de página
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO - Robots.txt Dinâmico
  // Benefício: Configuração centralizada, facilmente alterável
  // ═══════════════════════════════════════════════════════════════════════════
  robots: {
    // Permitir todos os crawlers
    allow: ['/'],
    // Bloquear acesso a rotas de sistema
    disallow: ['/api/', '/_nuxt/'],
    // Referência ao sitemap gerado automaticamente
    sitemap: 'https://pontovet.com.br/sitemap.xml'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SEGURANÇA - HTTP Security Headers (Hardening)
  // Benefício: Protege contra XSS, Clickjacking, MIME-sniffing attacks
  // ═══════════════════════════════════════════════════════════════════════════
  security: {
    headers: {
      // Content Security Policy - Define origens permitidas para recursos
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://cdn.jsdelivr.net'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', 'https:', 'blob:'],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://maps.googleapis.com', 'https://www.googletagmanager.com'],
        'connect-src': ["'self'", 'https://wa.me', 'https://api.whatsapp.com', 'https://maps.googleapis.com'],
        'frame-src': ["'self'", 'https://www.google.com', 'https://maps.google.com'],
        'upgrade-insecure-requests': true
      },
      // Prevenir Clickjacking - Não permitir iframe externo
      xFrameOptions: 'SAMEORIGIN',
      // Prevenir MIME-type sniffing
      xContentTypeOptions: 'nosniff',
      // Referrer Policy - Proteger privacidade de navegação
      referrerPolicy: 'strict-origin-when-cross-origin',
      // Permissions Policy - Desabilitar APIs sensíveis não usadas
      permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: ['self'],
        payment: []
      }
    },
    // Rate limiting básico (proteção contra brute force)
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000, // 5 minutos
      headers: true
    },
    // Desabilita HSTS em desenvolvimento (ativar em produção)
    strict: false
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // nuxt-og-image - Cartões de Partilha Profissionais
  // Benefício: Links partilhados no WhatsApp/LinkedIn mostram cartão branded
  // ═══════════════════════════════════════════════════════════════════════════
  ogImage: {
    defaults: {
      component: 'OgImageTemplate',
      width: 1200,
      height: 630
    },
    // Cores da marca PontoVet
    runtimeBrowser: true
  },

  // Configuração de imagem
  image: {
    format: ['webp', 'avif', 'png'],
    quality: 80
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ROUTE RULES - Estratégia de Renderização Híbrida
  // Benefício: Maximiza velocidade (TTFB) e reduz custos de servidor
  // ═══════════════════════════════════════════════════════════════════════════
  routeRules: {
    // Páginas estáticas - prerender para carregamento instantâneo
    '/': { prerender: true },
    '/sobre': { prerender: true },
    '/servicos': { prerender: true },
    
    // Páginas com conteúdo que pode mudar - SWR (Stale-While-Revalidate)
    // Cache de 1 hora, revalida em background
    '/galeria': { swr: 3600 },
    '/contato': { swr: 3600 },
    
    // Assets estáticos - cache longo
    '/logo.png': { headers: { 'cache-control': 'max-age=31536000' } },
    '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000' } }
  },

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    // CSS Global Modularizado
    '~/assets/css/variables.css',
    '~/assets/css/animations.css',
    '~/assets/css/main.css'
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // EXPERIMENTAL - View Transitions API para transições de tema e página
  // ═══════════════════════════════════════════════════════════════════════════
  experimental: {
    viewTransition: true // Habilita View Transitions API nativa
  },

  app: {
    // ─── Transições de Página Premium ───
    // Modo 'out-in': página antiga sai completamente antes da nova entrar
    // Isso evita sobreposição e garante animações limpas
    pageTransition: { 
      name: 'page', 
      mode: 'out-in'
    },
    layoutTransition: { 
      name: 'layout', 
      mode: 'out-in' 
    },
    
    head: {
      title: 'PontoVet - Clínica Veterinária',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content: 'Clínica veterinária completa oferecendo cirurgias, atendimentos, exames laboratoriais e banho e tosa para seu pet.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Meta para cor do tema no mobile
        { name: 'theme-color', content: '#1a5c1e', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      // ─── Script Inline para Prevenir Flash de Tema ───
      // Este script roda ANTES do Vue hidratar, aplicando o tema correto imediatamente
      script: [
        {
          innerHTML: `
            (function() {
              try {
                var theme = document.cookie.match(/pontovet-theme=([^;]+)/);
                theme = theme ? theme[1] : null;
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch(e) {}
            })();
          `,
          type: 'text/javascript'
        }
      ]
    }
  },

  vite: {
    optimizeDeps: {
      exclude: ['vue']
    },
    css: {
      devSourcemap: true
    }
  }
})
