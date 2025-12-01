// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '@mdi/font/css/materialdesignicons.min.css'
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
