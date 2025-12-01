/**
 * useTheme - Composable Premium para Gerenciamento de Tema
 * 
 * CORREÇÕES IMPLEMENTADAS:
 * 1. Uso de useCookie para persistência SSR-safe (evita flash/flicker)
 * 2. View Transitions API para efeito de "circular reveal" ao trocar tema
 * 3. Script inline no head para aplicar tema antes da hidratação
 * 4. Fallback gracioso para navegadores sem View Transitions
 */
export const useTheme = () => {
  // useCookie é SSR-safe - evita o problema de hidratação/flicker
  // O valor é lido no servidor E no cliente de forma consistente
  const themeCookie = useCookie<'light' | 'dark'>('pontovet-theme', {
    default: () => 'light',
    watch: true,
    maxAge: 60 * 60 * 24 * 365, // 1 ano
  });

  // Estado reativo derivado do cookie
  const isDark = computed(() => themeCookie.value === 'dark');

  /**
   * Inicializa o tema - chamado no onMounted do layout/app
   * Detecta preferência do sistema se não houver cookie salvo
   */
  const initTheme = () => {
    if (import.meta.client) {
      // Se não há preferência salva, detectar do sistema
      if (!themeCookie.value || (themeCookie.value !== 'light' && themeCookie.value !== 'dark')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        themeCookie.value = prefersDark ? 'dark' : 'light';
      }
      applyTheme(themeCookie.value === 'dark');
    }
  };

  /**
   * Aplica o tema no DOM
   * Adiciona/remove classe 'dark' no :root
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
   * Cria efeito de "círculo expandindo" (circular reveal) quando suportado
   */
  const toggleTheme = async (event?: MouseEvent) => {
    const newTheme = isDark.value ? 'light' : 'dark';
    
    // Verifica se View Transitions API está disponível
    // @ts-ignore - API ainda experimental
    if (import.meta.client && document.startViewTransition) {
      // Captura posição do clique para o efeito circular
      const x = event?.clientX ?? window.innerWidth / 2;
      const y = event?.clientY ?? window.innerHeight / 2;
      
      // Calcula o raio máximo necessário para cobrir toda a tela
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      
      // Define variáveis CSS para a animação
      document.documentElement.style.setProperty('--theme-x', `${x}px`);
      document.documentElement.style.setProperty('--theme-y', `${y}px`);
      document.documentElement.style.setProperty('--theme-radius', `${endRadius}px`);
      
      // @ts-ignore
      const transition = document.startViewTransition(() => {
        themeCookie.value = newTheme;
        applyTheme(newTheme === 'dark');
      });
      
      // Aguarda a transição começar e adiciona classe para controle
      await transition.ready;
      
      // Anima usando clip-path circular
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    } else {
      // Fallback para navegadores sem View Transitions
      themeCookie.value = newTheme;
      applyTheme(newTheme === 'dark');
    }
  };

  // Listener para mudanças de preferência do sistema
  if (import.meta.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      // Só aplica se o usuário não tiver preferência salva manualmente
      // (detectamos isso verificando se o cookie é diferente da preferência atual)
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
    // Expor para uso em head scripts
    currentTheme: themeCookie
  };
};
