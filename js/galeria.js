async function carregarGaleria() {
  const res = await fetch('/Site-Vereador_Teste/json/Galeria.json');
  const fotos = await res.json();

  renderGaleria(fotos);
}

function renderGaleria(dados) {
  const galeria = document.getElementById("galeria");
  if (!galeria) return;

  galeria.innerHTML = "";

  dados.forEach((foto) => {
    const card = document.createElement("div");
    card.classList.add("galeria-card");

    card.innerHTML = `
      <img src="${foto.imagem}" alt="${foto.titulo}" loading="lazy">
      <div class="galeria-info">
        <h3>${foto.titulo}</h3>
      </div>
    `;

    galeria.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", carregarGaleria);


