// Função para popular o carrossel com os dados
function popularCarrosselNovidades(seletorSwiper, dados) {
  const swiperWrapper = document.querySelector(
    `${seletorSwiper} .swiper-wrapper`,
  );
  if (!swiperWrapper) return;

  let slidesHTML = "";
  dados.forEach((noticia) => {
    slidesHTML += `
      <div class="swiper-slide">
        <div class="novidade-card">  <small>${noticia.data}</small>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.text}</p>
            <br/>
            <a href="${noticia.link}" target="_blank" class="links-noticias">${noticia.linkname}</a>
        </div>
      </div>`;
  });

  swiperWrapper.innerHTML = slidesHTML;
}

async function carregarNoticias() {
  const res = await fetch('/Site-Vereador_Teste/json/noticiasHome.json');
  const Noticias = await res.json();

  popularCarrosselNovidades(".swiper-novidade", Noticias);
}

// Chamar a função para criar os cards
//popularCarrosselNovidades(".swiper-novidade", Noticias);

// Inicializar o Swiper
const novidadesSwiper = new Swiper(".swiper-novidade", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  autoplay: {
    delay: 5000, // 5 segundos é o tempo ideal para leitura desses textos
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pausa o movimento quando o mouse estiver em cima
  },

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
    el: ".swiper-novidade .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-novidade .swiper-button-next",
    prevEl: ".swiper-novidade .swiper-button-prev",
  },
});

carregarNoticias();

// Carrossel automático simples
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carousel = document.querySelector(".carousel");

let currentIndex = 0;
const AUTO_INTERVAL = 5000;
let autoTimer = null;

function showSlide(index) {
  if (!slides || slides.length === 0) return;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  currentIndex = index;
}

function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function startAutoPlay() {
  stopAutoPlay();
  autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
}

function stopAutoPlay() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

function resetAutoPlay() {
  startAutoPlay();
}

// adiciona listeners com checagem
if (prevBtn)
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });
if (nextBtn)
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

// pausar ao hover/focus
if (carousel) {
  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);
  carousel.addEventListener("focusin", stopAutoPlay);
  carousel.addEventListener("focusout", startAutoPlay);
}

// teclas
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    resetAutoPlay();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
    resetAutoPlay();
  }
});

// suporte touch (swipe)
(function addTouchSwipe() {
  if (!carousel) return;
  let startX = 0,
    endX = 0;
  carousel.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
    stopAutoPlay();
  });
  carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
    startAutoPlay();
  });
})();

// inicializa
showSlide(currentIndex);
startAutoPlay();
