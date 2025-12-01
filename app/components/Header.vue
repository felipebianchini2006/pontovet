<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="/logo.png" alt="PontoVet" class="logo-img" />
      </NuxtLink>

      <nav class="nav" :class="{ open: menuOpen }">
        <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/sobre" @click="closeMenu">Sobre</NuxtLink>
        <NuxtLink to="/servicos" @click="closeMenu">Serviços</NuxtLink>
        <NuxtLink to="/galeria" @click="closeMenu">Galeria</NuxtLink>
        <NuxtLink to="/contato" @click="closeMenu" class="contact-btn">Contato</NuxtLink>
        <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Modo Claro' : 'Modo Escuro'">
          <i :class="isDark ? 'mdi mdi-white-balance-sunny' : 'mdi mdi-moon-waning-crescent'"></i>
        </button>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
const { isDark, toggleTheme, initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
.header {
  background: var(--bg-primary);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease;
  animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: 2px solid #2E7D32;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #2E7D32;
}

.theme-toggle i {
  font-size: 1.4rem;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.theme-toggle:hover {
  background: #2E7D32;
  color: white;
  transform: scale(1.1) rotate(15deg);
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.4);
}

.theme-toggle:hover i {
  transform: rotate(-30deg) scale(1.1);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.logo-img {
  height: 60px;
  width: auto;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.08) rotate(-2deg);
  filter: brightness(1.05);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  margin: 3px 0;
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3px;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav .theme-toggle {
  margin-left: 0.5rem;
}

.nav a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #2E7D32, #4CAF50);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(-50%);
}

.nav a:hover {
  color: #2E7D32;
}

.nav a:hover::after {
  width: 80%;
}

.nav a.router-link-active {
  color: #2E7D32;
  font-weight: 600;
}

.contact-btn {
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
  color: white !important;
  padding: 0.7rem 1.5rem !important;
  border-radius: 25px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.contact-btn::after {
  display: none;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.contact-btn:hover {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 25px rgba(46, 125, 50, 0.45);
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:active {
  transform: translateY(-1px) scale(0.98);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav .theme-toggle {
    margin-left: 0;
    margin-top: 1rem;
    width: 45px;
    height: 45px;
  }

  .nav .theme-toggle i {
    font-size: 1.3rem;
  }

  .nav {
    position: fixed;
    top: 82px;
    right: -100%;
    width: 70%;
    height: calc(100vh - 82px);
    background: var(--bg-primary);
    flex-direction: column;
    padding: 2rem;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease;
    align-items: flex-start;
    gap: 1rem;
  }

  .nav.open {
    right: 0;
  }

  .nav a {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
  }
}
</style>
