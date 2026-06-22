async function carregarVideo() {
  const res = await fetch('/json/Videos.json');
  const videos = await res.json();

  renderVideo(videos);
}

function renderVideo(dados) {
  const video = document.getElementById("video");
  if (!video) return;

  video.innerHTML = "";

  dados.forEach((Video) => {
    const card = document.createElement("div");
    card.classList.add("galeria-video");

    card.innerHTML = `
        <iframe src="${Video.video}" title="${Video.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>
    `;

    video.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", carregarVideo);