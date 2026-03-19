// Função principal que será executada quando a página carregar
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona TODOS os cabeçalhos que têm a classe 'header-sortable'
    const todosOsHeadersOrdenaveis = document.querySelectorAll(".header-sortable");

    // Objeto com a ordem de prioridade para o status
    const ordemStatus = {
        'Concluída': 1,
        'Em Execução': 2,
        'Em Preparação': 3,
        'Impedimento Técnico': 4
    };

    // Adiciona um "ouvinte" de clique para CADA um deles
    todosOsHeadersOrdenaveis.forEach(header => {
        // Cada cabeçalho terá seu próprio estado de ordenação
        let ascendente = true;

        header.addEventListener("click", () => {
            // Pega as informações do cabeçalho clicado
            const idDoTbodyAlvo = header.dataset.targetTbody;
            const tbody = document.getElementById(idDoTbodyAlvo);
            const columnIndex = parseInt(header.dataset.columnIndex, 10);
            const sortType = header.dataset.sortType;

            const rows = Array.from(tbody.querySelectorAll("tr"));

            rows.sort((linhaA, linhaB) => {
                const textoA = linhaA.children[columnIndex].textContent.trim();
                const textoB = linhaB.children[columnIndex].textContent.trim();
                
                let valorA, valorB;

                // ESCOLHE A LÓGICA DE COMPARAÇÃO BASEADO NO TIPO
                switch (sortType) {
                    case 'number':
                        const limparValor = (texto) => parseFloat(texto.replace('R$', '').replace(/\./g, '').replace(',', '.').trim()) || 0;
                        valorA = limparValor(textoA);
                        valorB = limparValor(textoB);
                        return ascendente ? valorA - valorB : valorB - valorA;

                    case 'status':
                        valorA = ordemStatus[textoA] || 99;
                        valorB = ordemStatus[textoB] || 99;
                        return ascendente ? valorA - valorB : valorB - valorA;
                    
                    default: // 'text'
                        return ascendente ? textoA.localeCompare(textoB) : textoB.localeCompare(textoA);
                }
            });

            // Limpa e re-insere as linhas na tabela correta
            tbody.innerHTML = "";
            rows.forEach(linha => {
                tbody.appendChild(linha);
            });

            // Inverte a direção para o próximo clique
            ascendente = !ascendente;
        });
    });

});