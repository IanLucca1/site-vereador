// Dados de exemplo (textos resumidos: 3–4 linhas)
const Noticias = [
  {
    data: "Mar 17, 2026",
    titulo: "Nono Parque no antigo Aterro Sanitário aterro 🌳",
    text: "O antigo Aterro Sanitário está se transformando em um novo espaço verde, o Nono Parque, que vai oferecer lazer, convivência e qualidade de vida para a população. Um projeto que valoriza o meio ambiente e fortalece a conexão com a natureza.",
    link: "https://www.instagram.com/p/DWAAaujghhZ/",
    linkname: "@Instagram",
  },
  {
    data: "Mar 08, 2026",
    titulo: "Dia Internacional da Mulher – Homenagem e Compromisso 💜",
    text: "No Dia Internacional da Mulher, homenageamos a força, a coragem e a determinação de todas as mulheres. Seguimos firmes no compromisso de lutar por igualdade, respeito e oportunidades para todas, construindo uma sociedade mais justa e inclusiva.",
    link: "https://www.instagram.com/p/DVmaJnRAs6r/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 27, 2026",
    titulo: "Avanços na Analise para implantar um complexo educacional no bairro.🏫",
    text: "Estamos avançando na análise para implantar um complexo educacional no bairro, um projeto que visa oferecer mais oportunidades de aprendizado e desenvolvimento para a comunidade.",
    link: "https://www.instagram.com/p/DVPETMNEu8c/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 26, 2026",
    titulo: "Vazamento de esgoto na Rua Ingá 🚧",
    text: "O vazamento de esgoto na Rua Ingá, é um problema que afeta a qualidade de vida dos moradores. A situação exige uma resposta rápida, cobranças já estão sendo feitas, os pedidos foram protocolados e agora vamos acompanhar de perto para que tudo seja resolvido.",
    link: "https://www.instagram.com/p/DVOdyNoDUWq/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 21, 2026",
    titulo: "Novo Redutor de veloidade na Rua Mafra🚦",
    text: "A instalação de um novo redutor de velocidade na Rua Mafra, é uma medida importante para aumentar a segurança viária. Essa iniciativa visa proteger pedestres e motoristas, promovendo um trânsito mais seguro e consciente.",
    link: "https://www.instagram.com/p/DU_ng4BCUK-/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 20, 2026",
    titulo: "Hospital da Baleia, apoio e homenagem 🏥💙 ",
    text: "Recebi com alegria a homenagem do Hospital da Baleia, um reconhecimento que reforça nosso compromisso com a saúde pública. Como vereador de Belo Horizonte e presidente da Comissão de Saúde, seguimos trabalhando para garantir mais recursos.",
    link: "https://www.instagram.com/p/DU9Cf12AWmA/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 12, 2026",
    titulo: "Cuidar da saúde é cuidar de pessoas 🏥💙",
    text: "Investir em saúde pública é cuidar de pessoas, fortalecer comunidades e garantir dignidade para todos. Seguimos trabalhando por mais acesso, mais estrutura e mais cuidado com quem mais precisa.",
    link: "https://www.instagram.com/p/DUl7HzYCR6y/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 06, 2026",
    titulo: "Entrevista no Jornal O Tempo – Segunda Parte 🎙️📰",
    text: "Segue a segunda parte da entrevista ao Jornal O Tempo. Um momento importante para apresentar nosso posicionamento e reforçar o compromisso com a população. Acompanhe.",
    link: "https://www.instagram.com/p/DURbL8SDQfe/",
    linkname: "@Instagram",
  },

  {
    data: "Fev 07, 2026",
    titulo: "Obras do Novo Centro de Saúde 🏥🚧",
    text: "Uma conquista que começa a sair do papel e vira cuidado de verdade. O novo Centro de Saúde está ganhando uma estrutura mais moderna e avançada, garantindo mais conforto, comodidade e dignidade para a população e colaboradores, além de mais qualidade no atendimento para quem mais precisa.",
    link: "https://www.instagram.com/p/DUbjCywguVW/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 05, 2026",
    titulo: "Entrevista no Café com Política ☕🎙️",
    text: "José Ferreira participou de um bate-papo especial no programa Café com Política, onde falou sobre sua trajetória, os desafios do caminho e o propósito que guia seu trabalho diário em defesa da cidade e da população. O momento reforça a importância do diálogo, da escuta e da construção coletiva.",
    link: "https://www.instagram.com/p/DUWaz7KFRB6/",
    linkname: "@Instagram",
  },
  {
    data: "Fev 02, 2026",
    titulo: "Nova Unidade de Saúde Elza Martins 🏥",
    text: "Após indicações do mandato e mobilização da comunidade, teve início a obra da nova Unidade de Saúde Elza Martins, um avanço importante para o atendimento em Belo Horizonte.",
    link: "https://www.instagram.com/p/DUQnDulgt-e/",
    linkname: "@Instagram",
  },
  {
    data: "Jan 22, 2026",
    titulo:
      "Revitalização da Praça Maria Helena da Fonseca, em Belo Horizonte 🏗️🧹",
    text: "A revitalização da Praça Maria Helena da Fonseca, no bairro São João Batista, vai transformar o espaço em um local mais agradável e seguro. As melhorias incluem infraestrutura, paisagismo e áreas de lazer, fortalecendo a convivência e o bem-estar da comunidade.",
    link: "https://www.instagram.com/p/DT01nyUlW74/",
    linkname: "@insta",
  },
  {
    data: "Jan 11, 2026",
    titulo: "Trabalho que não para, nem durante o recesso. 🧹🏙️",
    text: "Mesmo durante o recesso, seguimos acompanhando as demandas da população. O gabinete continua em funcionamento, recebendo pedidos e encaminhando à Prefeitura de Belo Horizonte, com o compromisso de trabalhar por uma cidade melhor.",
    link: "https://www.instagram.com/joseferreira.projetoajudai/reel/DTWDoPYgrBY/",
    linkname: "@insta",
  },
];

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

// Chamar a função para criar os cards
popularCarrosselNovidades(".swiper-novidade", Noticias);

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
