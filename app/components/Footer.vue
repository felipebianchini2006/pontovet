<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <img src="/logo.png" alt="PontoVet" class="footer-logo" />
          <p>Cuidando com amor e dedicação do seu melhor amigo.</p>
        </div>

        <div class="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/sobre">Sobre</NuxtLink></li>
            <li><NuxtLink to="/servicos">Serviços</NuxtLink></li>
            <li><NuxtLink to="/galeria">Galeria</NuxtLink></li>
            <li><NuxtLink to="/contato">Contato</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Serviços</h3>
          <ul>
            <li>Cirurgias</li>
            <li>Atendimentos</li>
            <li>Exames Laboratoriais</li>
            <li>Banho e Tosa</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contato</h3>
          <p>
            <a href="https://wa.me/5518997359924" target="_blank" class="whatsapp-link">
              <i class="mdi mdi-whatsapp"></i>
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} PontoVet - Clínica Veterinária. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-section p {
  line-height: 1.6;
  opacity: 0.9;
}

.footer-logo {
  height: 80px;
  margin-bottom: 1rem;
  background: white;
  padding: 0.5rem;
  border-radius: 10px;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
}

.footer-section ul li a:hover {
  opacity: 1;
  transform: translateX(5px);
}

.whatsapp-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.whatsapp-link:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
  text-align: center;
  opacity: 0.8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-logo {
    margin: 0 auto 1rem;
  }
}
</style>
