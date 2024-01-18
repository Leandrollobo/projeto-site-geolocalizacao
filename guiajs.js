const div_dinamica = document.querySelector(".flex-container");

console.log(div_dinamica);

function renderizarListaRecursos() {
  div_dinamica.innerHTML = `
      <div class="flex-item">
      <img src="./assets/checklist.png" class="listicons" />
      Listas Personalizadas: Crie listas de compras para diversas
      categorias, como mercado, farmácia, e muito mais.
      </div>
      <div class="flex-item">
      <img src="./assets/gps.png" class="listicons" />
      Localização Integrada: Nunca perca uma oferta! Receba alertas
      quando estiver perto de lojas que possuem os produtos da sua
      lista.
      </div>
      <div class="flex-item">
      <img src="./assets/map.png" class="listicons" />
      Integração com o Google Maps: Explore lojas próximas e planeje
      suas compras de forma eficiente.
      </div>
      <div class="flex-item">
      <img src="./assets/startup.png" class="listicons" />
      Notificações Inteligentes: Seja avisado quando estiver próximo
      de estabelecimentos que têm exatamente o que você precisa.
      </div>
      <div class="flex-item">
      <img src="./assets/website.png" class="listicons" />
      de Qualquer Lugar: listas online em todos os seus dispositivos,
      tenha suas compras sempre à mão.
      </div>
      <div class="flex-item">
      <img src="./assets/paper-bag.png" class="listicons" />
      Facilite suas compras, economize tempo e descubra uma nova
      maneira de aproveitar o ato de comprar.
      <a href="#">cadastre-se agora</a> e experimente o
      <i>Compras na sua rota</i>.
      </div>`;
}

renderizarListaRecursos();
