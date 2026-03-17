const EmendasParlamentares = [
  {
    imagem: "https://placehold.co/600x400/007bff/007bff",
    categoria: "Saúde",
    titulo: "🏥 Reforma do Posto de Saúde C.S. Glória",
    descricao:
      "R$ 350.000,00 para a modernização da estrutura e a compra de novos equipamentos, garantindo um atendimento mais digno para a comunidade.",
    data: "",
  },
  {
    imagem: "https://placehold.co/600x400/28a745/28a745",
    categoria: "Educação",
    titulo: "📚 Destinado para atividades socioassistenciais do CIAME Pindorama",
    descricao:
      "R$ 123.000,00 para a realização de atividades socioassistenciais, culturais e esportivas para crianças e adolescentes atendidos pelo CIAME Pindorama.",
    data: "",
  },
  {
    imagem: "https://placehold.co/600x400/ffc107/ffc107",
    categoria: "Obras",
    titulo: "🏗️ Construção, ampliação e reforma de equipamentos no Campo Palmeirense",
    descricao:
      "R$ 150.000,00 destinados à construção, ampliação e revitalização do vestiário do Campo Palmeirense.",
    data: "04/11/2021",
  },
  {
    imagem: "https://placehold.co/600x400/007bff/007bff",
    categoria: "Saúde",
    titulo: "🩺 Reformas e compra de equipamentos para o Posto de Saúde C.S. Pindorama",
    descricao:
      "R$ 400.000,00 para a reforma da unidade e aquisição de novos equipamentos, garantindo melhoria no atendimento à população.",
    data: "",
  },
  {
    imagem: "https://placehold.co/600x400/6f42c1/6f42c1",
    categoria: "Cultura",
    titulo: "🎭 Apoio ao lazer nas ruas",
    descricao:
      "R$ 50.000,00 para a realização de eventos culturais e recreativos, promovendo a integração e o lazer na comunidade.",
    data: "",
  },
  {
    imagem: "https://placehold.co/600x400/007bff/007bff",
    categoria: "Saúde",
    titulo: "💙 Destinado para compra de insumos e equipamentos para o Hospital Sofia Feldman",
    descricao:
      "R$ 158.000,00 para a aquisição de novos equipamentos médicos e insumos essenciais, melhorando a capacidade de atendimento do hospital.",
    data: "",
  },
];



// Função para popular o carrossel
function popularCarrosselEmendas(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`
  );
  if (!swiperWrapper) return;

  let slidesHTML = "";
  dados.forEach((emenda) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="emenda-card">
            
            <div class="img-container">
                <span class="categoria-badge">${emenda.categoria}</span>
                <img src="${emenda.imagem}" alt="${emenda.titulo}" />
            </div>

            <div class="card-content">
              <h4>${emenda.titulo}</h4>
              <small>${emenda.data}</small>
              <p>
                ${emenda.descricao}
              </p>
            </div>
        </div>
      </div>`;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

// Inicialização
popularCarrosselEmendas(".swiper-emendas", EmendasParlamentares);

const emendasSwiper = new Swiper(".swiper-emendas", { 
  loop: true,
  slidesPerView: 1, 
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2, 
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3, 
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-emendas .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-emendas .swiper-button-next",
    prevEl: ".swiper-emendas .swiper-button-prev",
  },
});



function voltarPagina(event) {

  if (window.history.length > 1) {
    event.preventDefault();
    window.history.back(); 
  }

}