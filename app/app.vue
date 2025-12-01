<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Variáveis CSS para Light Mode (padrão) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e8f5e9;
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-muted: #888888;
  --border-color: rgba(0, 0, 0, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.1);
  --card-bg: #ffffff;
  --green-primary: #2E7D32;
  --green-dark: #1B5E20;
  --green-light: #4CAF50;
  --green-bg: #e8f5e9;
}

/* Variáveis CSS para Dark Mode */
:root.dark {
  --bg-primary: #121212;
  --bg-secondary: #1e1e1e;
  --bg-tertiary: #1B3D1E;
  --text-primary: #f5f5f5;
  --text-secondary: #b0b0b0;
  --text-muted: #888888;
  --border-color: rgba(255, 255, 255, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.3);
  --card-bg: #1e1e1e;
  --green-primary: #4CAF50;
  --green-dark: #2E7D32;
  --green-light: #81C784;
  --green-bg: #1B3D1E;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-primary);
  line-height: 1.6;
  background-color: var(--bg-primary);
  transition: background-color 0.4s ease, color 0.4s ease;
}

html {
  scroll-behavior: smooth;
}

/* Animações globais fluidas */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); }
  50% { box-shadow: 0 0 25px rgba(76, 175, 80, 0.8); }
}

@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}

/* Classes de animação reutilizáveis */
.animate-fade-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-fade-down {
  animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-slide-left {
  animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-slide-right {
  animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-scale {
  animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Delays para animações em sequência */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }

/* Reduzir movimento para usuários com preferência */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
