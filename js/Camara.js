// Popular o carrossel
function popularCarrosselCamera(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`,
  );
  if (!swiperWrapper) return;

  let slidesHTML = "";
  dados.forEach((noticia) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="novidade-card">
          <small>${noticia.data}</small>
          <h3>${noticia.titulo}</h3>
          <p>${noticia.text}</p>
          <br/>
          <a href="${noticia.link}" target="_blank" class="links-noticias">
            ${noticia.linkname}
          </a>
        </div>
      </div>`;
  });

  swiperWrapper.innerHTML = slidesHTML;
}


async function carregarNoticias() {
  const res = await fetch('/Site-Vereador_Teste/json/noticiasCamara.json');
  const NoticiasCamera = await res.json();

  popularCarrosselCamera(".swiper-camera", NoticiasCamera);
}


// Inicializa o Swiper
const novidadesSwiper = new Swiper(".swiper-camera", {
  // MOBILE (padrão)
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  mousewheel: false,

  pagination: {
    el: ".swiper-camera .swiper-pagination",
    clickable: true,
  },

  // TABLET/PC
  breakpoints: {
  769: {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    mousewheel: {
      enabled: true,
      forceToAxis: true,
      releaseOnEdges: true,
      sensitivity: 1,
    },
  },
},
});

carregarNoticias();


function syncSwiperOnResize(swiper) {
  if (!swiper || swiper.destroyed) return;

  swiper.update();
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  if (swiper.mousewheel) {
    if (isDesktop) {
      swiper.mousewheel.enable();
    } else {
      swiper.mousewheel.disable();
    }
  }
}

// quando mudar tamanho / emulação
window.addEventListener("resize", () => {
  syncSwiperOnResize(novidadesSwiper);
});

window.addEventListener("orientationchange", () => {
  syncSwiperOnResize(novidadesSwiper);
});

// garante estado correto no carregamento
syncSwiperOnResize(novidadesSwiper);