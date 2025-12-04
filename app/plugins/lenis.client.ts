/**
 * Lenis Smooth Scroll Plugin - PontoVet
 * 
 * Proporciona scroll suave "amanteigado" com inércia natural.
 * Inspirado em sites premiados do Awwwards.
 */

import Lenis from 'lenis';

export default defineNuxtPlugin((nuxtApp) => {
  // Só executa no cliente
  if (typeof window === 'undefined') return;

  let lenis: Lenis | null = null;

  const initLenis = () => {
    lenis = new Lenis({
      duration: 1.2,                    // Duração do scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing exponencial suave
      orientation: 'vertical',          // Direção do scroll
      gestureOrientation: 'vertical',   // Gestos touch
      smoothWheel: true,                // Suaviza scroll do mouse
      wheelMultiplier: 1,               // Velocidade do wheel
      touchMultiplier: 2,               // Velocidade do touch
      infinite: false,                  // Sem scroll infinito
    });

    // Conecta o Lenis ao requestAnimationFrame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expõe globalmente para debugging
    if (process.dev) {
      (window as any).lenis = lenis;
    }
  };

  // Inicializa quando o app estiver montado
  nuxtApp.hook('app:mounted', () => {
    // Pequeno delay para garantir que o DOM está pronto
    setTimeout(initLenis, 100);
  });

  // Pausa o Lenis quando houver modais/overlays
  nuxtApp.hook('page:start', () => {
    lenis?.stop();
  });

  nuxtApp.hook('page:finish', () => {
    lenis?.start();
    // Scroll para o topo na mudança de página
    lenis?.scrollTo(0, { immediate: true });
  });

  // Provide para uso em componentes
  return {
    provide: {
      lenis: {
        getInstance: () => lenis,
        scrollTo: (target: string | number | HTMLElement, options?: any) => {
          lenis?.scrollTo(target, options);
        },
        stop: () => lenis?.stop(),
        start: () => lenis?.start(),
      }
    }
  };
});
