<script setup lang="ts">
/**
 * OgImageTemplate - Template para cartões de partilha social
 * 
 * Este componente é renderizado pelo nuxt-og-image para gerar
 * imagens de preview quando links são partilhados no WhatsApp,
 * LinkedIn, Twitter, etc.
 * 
 * Benefício: Apresentação profissional da marca em redes sociais
 */

defineProps<{
  title?: string;
  description?: string;
  siteName?: string;
}>()
</script>

<template>
  <div class="og-container">
    <!-- Background com gradiente da marca -->
    <div class="og-background">
      <div class="og-pattern"/>
    </div>
    
    <!-- Conteúdo -->
    <div class="og-content">
      <!-- Logo -->
      <div class="og-logo">
        <img src="/logo.png" alt="PontoVet" />
      </div>
      
      <!-- Título -->
      <h1 class="og-title">{{ title || 'PontoVet - Clínica Veterinária' }}</h1>
      
      <!-- Descrição -->
      <p class="og-description">
        {{ description || 'Cuidando com amor e dedicação do seu melhor amigo.' }}
      </p>
      
      <!-- Badge -->
      <div class="og-badge">
        <span class="og-badge-icon">🐾</span>
        <span class="og-badge-text">Clínica Veterinária Completa</span>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="og-footer">
      <span>pontovet.com.br</span>
      <span class="og-separator">•</span>
      <span>(18) 99735-9924</span>
    </div>
  </div>
</template>

<style scoped>
.og-container {
  width: 1200px;
  height: 630px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
}

.og-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0d3d0f 0%, #1a5c1e 35%, #2d8a32 100%);
}

.og-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%);
}

.og-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.og-logo {
  width: 180px;
  height: 180px;
  background: white;
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.og-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.og-title {
  font-size: 56px;
  font-weight: 800;
  color: white;
  margin: 0 0 20px 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.og-description {
  font-size: 28px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 30px 0;
  max-width: 800px;
  line-height: 1.4;
}

.og-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 16px 32px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.og-badge-icon {
  font-size: 24px;
}

.og-badge-text {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.og-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.og-separator {
  opacity: 0.5;
}
</style>
