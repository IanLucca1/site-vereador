

// --- FUNÇÃO PARA POPULAR UMA TABELA ---
function popularTabela(ano, dados) {
  const tbody = document.getElementById(`tbody-${ano}`);
  if (!tbody) return; // Se não encontrar o corpo da tabela, para a execução

  let linhasHTML = "";

  dados.forEach((emenda) => {
    // Formata o valor para o padrão de moeda brasileiro (R$)
    const valorFormatado = emenda.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    // Cria uma classe CSS a partir do status (ex: "Em Execução" -> "em-execucao")
    const statusClass = emenda.status.toLowerCase().replace(/\s+/g, "-");

    linhasHTML += `
            <tr>
                <td>${emenda.beneficiario}</td>
                <td>${emenda.objeto}</td>
                <td>${valorFormatado}</td>
                <td>
                    <span class="status ${statusClass}">${emenda.status}</span>
                </td>
            </tr>
        `;
  });

  tbody.innerHTML = linhasHTML;
}

async function carregarEmendas() {
  const res = await fetch('./json/EmendasTodas.json');
  const dados = await res.json();

  const todasAsEmendas = dados;

// 1. Filtra as emendas por ano
  const emendas2025 = todasAsEmendas.filter((e) => e.ano === 2025);
  const emendas2024 = todasAsEmendas.filter((e) => e.ano === 2024);
  const emendas2023 = todasAsEmendas.filter((e) => e.ano === 2023);

// 2. Chama a função para popular cada tabela com os dados filtrados
  popularTabela(2025, emendas2025);
  popularTabela(2024, emendas2024);
  popularTabela(2023, emendas2023);

}


document.addEventListener("DOMContentLoaded", carregarEmendas);

