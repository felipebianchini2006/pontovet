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
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
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
  animation: fadeIn 0.6s ease-out;
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
  transition: opacity 0.3s ease;
}

.footer-section ul li a:hover {
  opacity: 1;
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
  transition: background 0.3s ease;
}

.whatsapp-link:hover {
  background: rgba(255, 255, 255, 0.3);
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
