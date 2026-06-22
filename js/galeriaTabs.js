function moverIndicador(tab) {
  const indicador = document.querySelector(".tab-indicator");
  const larguraIndicador = 70;
  

  const centroTab = tab.offsetLeft + tab.offsetWidth / 2;

  indicador.style.width = larguraIndicador + "px";
  indicador.style.left = (centroTab - larguraIndicador / 2) + "px";
  indicador.style.top = (tab.offsetTop + tab.offsetHeight) + "px";
}

function ativarTab(tab) {
  document.querySelectorAll(".galeria-titulo").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  moverIndicador(tab);

  const isFotos = tab.id === "fotos";
  document.getElementById("galeria").style.display = isFotos ? "grid" : "none";
  document.getElementById("video").style.display = isFotos ? "none" : "grid";
}

document.querySelectorAll(".galeria-titulo").forEach(tab => {
  tab.addEventListener("click", () => ativarTab(tab));
});

window.addEventListener("resize", () => {
  const ativo = document.querySelector(".galeria-titulo.active") || document.getElementById("fotos");
  moverIndicador(ativo);
});

window.addEventListener("DOMContentLoaded", () => {
  ativarTab(document.getElementById("fotos"));
});