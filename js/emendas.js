
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


async function carregarEmendas() {
  const res = await fetch('../json/Emendas.json');
  const EmendasParlamentares = await res.json();

  popularCarrosselEmendas(".swiper-emendas", EmendasParlamentares);
}

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

carregarEmendas();

function voltarPagina(event) {

  if (window.history.length > 1) {
    event.preventDefault();
    window.history.back(); 
  }

}