async function carregarGaleria() {
  const res = await fetch('/json/GaleriaVereador.json');
  const fotos = await res.json();
  renderGaleria(fotos);
  configurarModal();
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

    // Evento de clique para abrir o modal com as informações do JSON
    card.addEventListener("click", () => {
      abrirModal(foto.imagem, foto.titulo, foto.descricao);
    });

    galeria.appendChild(card);
  });
}

function abrirModal(imagem, titulo, descricao) {
  const modal = document.getElementById("modal-galeria");
  
  // Injeta os dados do JSON no modal
  document.getElementById("modal-imagem").src = imagem;
  document.getElementById("modal-titulo").textContent = titulo;
  // Fallback caso alguma imagem no JSON ainda não tenha a descrição cadastrada
  document.getElementById("modal-descricao").textContent = descricao || "Sem informações adicionais cadastradas no momento.";
  
  modal.classList.add("mostrar");
}

function configurarModal() {
  const modal = document.getElementById("modal-galeria");
  const btnFechar = document.getElementById("fechar-modal");

  // Fecha o modal ao clicar no 'X'
  if (btnFechar) {
    btnFechar.addEventListener("click", () => {
      modal.classList.remove("mostrar");
    });
  }

  // Fecha o modal ao clicar fora da caixa branca (no fundo escuro)
  if (modal) {
    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) {
        modal.classList.remove("mostrar");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", carregarGaleria);