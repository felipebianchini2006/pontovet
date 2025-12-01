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
          <div v-for="(icon, i) in galleryIcons" :key="i" class="gallery-item">
            <div class="placeholder-image">
              <i :class="'mdi ' + icon" class="placeholder-icon"></i>
              <p class="placeholder-text">Foto {{ i + 1 }}</p>
            </div>
          </div>
        </div>

        <div class="gallery-note">
          <p>
            <i class="mdi mdi-camera"></i> <strong>Nota:</strong> As imagens acima são placeholders.
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

const galleryIcons = [
  'mdi-dog',
  'mdi-cat',
  'mdi-hospital-building',
  'mdi-stethoscope',
  'mdi-microscope',
  'mdi-shower-head',
  'mdi-needle',
  'mdi-medical-bag',
  'mdi-paw'
];
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 0.6s ease-out;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.95;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
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
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(46, 125, 50, 0.25);
}

.placeholder-image {
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
  transition: all 0.4s ease;
}

.gallery-item:hover .placeholder-image {
  background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #66BB6A 100%);
}

.placeholder-icon {
  font-size: 5rem;
  transition: transform 0.4s ease;
}

.gallery-item:hover .placeholder-icon {
  transform: scale(1.2);
}

.placeholder-text {
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.9;
}

.gallery-note {
  background: #f8f9fa;
  border-left: 4px solid #4CAF50;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-top: 3rem;
}

.gallery-note p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.gallery-note code {
  background: #e8f5e9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #2E7D32;
}

.cta-section {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
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
  color: #2E7D32;
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: #1B5E20;
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
