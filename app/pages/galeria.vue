<template>
  <div class="galeria">
    <section class="page-header">
      <div class="container">
        <h1>Galeria</h1>
        <p>Conheça nossas instalações e momentos especiais</p>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <p class="gallery-intro">
          Veja alguns momentos registrados em nossa clínica. Aqui você pode conhecer
          nossas instalações modernas e o carinho com que tratamos cada pet.
        </p>

        <div class="gallery-grid">
          <div v-for="i in 9" :key="i" class="gallery-item">
            <div class="placeholder-image">
              <span class="placeholder-icon">{{ getIcon(i) }}</span>
              <p class="placeholder-text">Foto {{ i }}</p>
            </div>
          </div>
        </div>

        <div class="gallery-note">
          <p>
            📸 <strong>Nota:</strong> As imagens acima são placeholders.
            Substitua-as pelas fotos reais da clínica adicionando os arquivos na pasta
            <code>/public/gallery/</code> e atualizando as referências.
          </p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Venha nos Visitar!</h2>
        <p>Agende uma visita e conheça pessoalmente nossa clínica</p>
        <NuxtLink to="/contato" class="cta-button">Entre em Contato</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Galeria - PontoVet',
  meta: [
    { name: 'description', content: 'Conheça as instalações da PontoVet através de nossa galeria de fotos.' }
  ]
});

const getIcon = (index) => {
  const icons = ['🐕', '🐈', '🏥', '⚕️', '🔬', '🛁', '💉', '🩺', '🐾'];
  return icons[index - 1];
};
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #A97BA9 0%, #8FBC8F 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.gallery-section {
  padding: 4rem 0;
}

.gallery-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.placeholder-image {
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #A97BA9 0%, #8FBC8F 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
}

.placeholder-icon {
  font-size: 4rem;
}

.placeholder-text {
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.9;
}

.gallery-note {
  background: #f8f9fa;
  border-left: 4px solid #A97BA9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 3rem;
}

.gallery-note p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.gallery-note code {
  background: #e9ecef;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #A97BA9;
}

.cta-section {
  background: linear-gradient(135deg, #A97BA9 0%, #8FBC8F 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-top: 3rem;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #A97BA9;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 2rem;
  }
}
</style>
