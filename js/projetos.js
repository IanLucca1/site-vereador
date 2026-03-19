function popularCarrossel(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`
  );
  if (!swiperWrapper) return; // Se não encontrar o elemento, para a execução

  let slidesHTML = "";

  dados.forEach((projeto) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="slide-imagem">
          <img src="${projeto.imagem}" alt="${projeto.titulo}">
        </div>
        <div class="slide-conteudo">
          <small>${projeto.data}</small>
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <a href="${projeto.link}" target="_blank">Ver Detalhes</a>
        </div>
      </div>
    `;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

function iniciarSwipers() {
  new Swiper(".projetos-andamento-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    pagination: {
      el: ".projetos-andamento-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projetos-andamento-swiper .swiper-button-next",
      prevEl: ".projetos-andamento-swiper .swiper-button-prev",
    },
  });

  new Swiper(".projetos-aprovados-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    pagination: {
      el: ".projetos-aprovados-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projetos-aprovados-swiper .swiper-button-next",
      prevEl: ".projetos-aprovados-swiper .swiper-button-prev",
    },
  });
}


async function carregarProjetos() {
  const res = await fetch('../json/projetosLeis.json');
  const dados = await res.json();

  popularCarrossel(".projetos-andamento-swiper", dados.andamento);
  popularCarrossel(".projetos-aprovados-swiper", dados.aprovados);

  // inicializa swiper depois de renderizar
  iniciarSwipers();
}
 

carregarProjetos();


function voltarPagina(event) {

  if (window.history.length > 1) {
    event.preventDefault();
    window.history.back(); 
  }

}
