export const useTheme = () => {
  const isDark = useState<boolean>('isDark', () => false);

  const initTheme = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme');
      if (saved) {
        isDark.value = saved === 'dark';
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      updateTheme();
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateTheme();
    if (import.meta.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    }
  };

  const updateTheme = () => {
    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return {
    isDark,
    toggleTheme,
    initTheme
  };
};
