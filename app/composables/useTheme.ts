/**
 * useTheme - Composable Premium para Gerenciamento de Tema
 * 
 * CORREÇÕES IMPLEMENTADAS v3.0:
 * 1. useCookie para persistência SSR-safe (evita flash/flicker)
 * 2. View Transitions API com "Circular Reveal"
 * 3. Classe .disable-transitions para evitar conflito entre View Transitions e CSS transitions
 * 4. Uso de nextTick para garantir sincronização DOM
 * 5. Fallback gracioso para navegadores sem View Transitions
 */
export const useTheme = () => {
  // useCookie é SSR-safe - evita o problema de hidratação/flicker
  const themeCookie = useCookie<'light' | 'dark'>('pontovet-theme', {
    default: () => 'light',
    watch: true,
    maxAge: 60 * 60 * 24 * 365, // 1 ano
  });

  // Estado reativo derivado do cookie
  const isDark = computed(() => themeCookie.value === 'dark');

  /**
   * Inicializa o tema - chamado no onMounted do layout/app
   */
  const initTheme = () => {
    if (import.meta.client) {
      if (!themeCookie.value || (themeCookie.value !== 'light' && themeCookie.value !== 'dark')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        themeCookie.value = prefersDark ? 'dark' : 'light';
      }
      applyTheme(themeCookie.value === 'dark');
    }
  };

  /**
   * Aplica o tema no DOM de forma instantânea
   */
  const applyTheme = (dark: boolean) => {
    if (import.meta.client) {
      const root = document.documentElement;
      if (dark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    }
  };

  /**
   * Toggle de tema com View Transitions API
   * 
   * SOLUÇÃO PARA O "ENGASGO":
   * 1. Adiciona classe .disable-transitions ao <html> ANTES da transição
   * 2. Isso desativa todas as CSS transitions durante o View Transition
   * 3. O navegador faz o snapshot corretamente sem conflito
   * 4. Remove a classe após a transição completar
   */
  const toggleTheme = async (event?: MouseEvent) => {
    const newTheme = isDark.value ? 'light' : 'dark';
    const root = document.documentElement;
    
    // Verifica se View Transitions API está disponível
    // @ts-ignore - API ainda experimental
    if (import.meta.client && document.startViewTransition) {
      // Captura posição do clique para o efeito circular
      const x = event?.clientX ?? window.innerWidth / 2;
      const y = event?.clientY ?? window.innerHeight / 2;
      
      // Calcula o raio máximo para cobrir toda a tela
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      
      // ═══════════════════════════════════════════════════════════════════
      // CORREÇÃO CRÍTICA: Desabilita CSS transitions durante View Transition
      // Isso evita o "engasgo" causado pelo conflito entre as duas APIs
      // ═══════════════════════════════════════════════════════════════════
      root.classList.add('disable-transitions');
      
      // Aguarda o próximo frame para garantir que a classe foi aplicada
      await nextTick();
      
      // @ts-ignore
      const transition = document.startViewTransition(async () => {
        // Atualiza o tema
        themeCookie.value = newTheme;
        applyTheme(newTheme === 'dark');
        
        // Aguarda o DOM atualizar
        await nextTick();
      });
      
      // Aguarda a transição estar pronta para animar
      await transition.ready;
      
      // Anima usando clip-path circular (efeito "Circular Reveal")
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 450,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // ease-out-expo
          pseudoElement: '::view-transition-new(root)'
        }
      );
      
      // Aguarda a transição finalizar e remove a classe
      await transition.finished;
      root.classList.remove('disable-transitions');
      
    } else {
      // Fallback para navegadores sem View Transitions
      // Desabilita transitions momentaneamente para evitar flash
      root.classList.add('disable-transitions');
      
      themeCookie.value = newTheme;
      applyTheme(newTheme === 'dark');
      
      // Re-habilita transitions após um frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.remove('disable-transitions');
        });
      });
    }
  };

  // Listener para mudanças de preferência do sistema
  if (import.meta.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const currentPref = themeCookie.value;
      if (!currentPref) {
        themeCookie.value = e.matches ? 'dark' : 'light';
        applyTheme(e.matches);
      }
    });
  }

  return {
    isDark,
    toggleTheme,
    initTheme,
    currentTheme: themeCookie
  };
};