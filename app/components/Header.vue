<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="/logo.png" alt="PontoVet" class="logo-img" />
      </NuxtLink>

      <button class="menu-toggle" @click="toggleMenu" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ open: menuOpen }">
        <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/sobre" @click="closeMenu">Sobre</NuxtLink>
        <NuxtLink to="/servicos" @click="closeMenu">Serviços</NuxtLink>
        <NuxtLink to="/galeria" @click="closeMenu">Galeria</NuxtLink>
        <NuxtLink to="/contato" @click="closeMenu" class="contact-btn">Contato</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
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
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 60px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
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
  background: #A97BA9;
  margin: 3px 0;
  transition: 0.3s;
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
  gap: 2rem;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav a:hover {
  color: #A97BA9;
}

.nav a.router-link-active {
  color: #A97BA9;
}

.contact-btn {
  background: #A97BA9;
  color: white !important;
  padding: 0.7rem 1.5rem !important;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #8FBC8F;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 82px;
    right: -100%;
    width: 70%;
    height: calc(100vh - 82px);
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
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
