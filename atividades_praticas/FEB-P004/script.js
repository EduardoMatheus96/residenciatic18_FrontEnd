// Associa o evento de clique a todos os botões "Comprar"
var botoesComprar = document.querySelectorAll(".roteiro-comprar");
botoesComprar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        capturarInformacoes(botao);
    });
});

function inserirPacote() {
    // Captura as informações do formulário
    var destino = document.getElementById("destino").value;
    var imagem = document.getElementById("imagem").value;
    var inclusos = document.getElementById("inclusos").value.split(",");
    var preco = document.getElementById("preco").value;

    // Cria um novo elemento com as informações
    var novoPacote = document.createElement("div");
    novoPacote.className = "roteiros-viagens";

    novoPacote.innerHTML = `
        <img src="${imagem}" class="postal">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">
            ${inclusos.map(item => `<li>${item.trim()}</li>`).join('')}
        </ul>
        <div class="roteiro-preco">${preco}</div>
        <div class="roteiro-obs">Taxas Inclusas</div>
        <div class="roteiro-parcelamento">Em até 10x sem Juros</div>
        <button class="roteiro-comprar">Comprar</button>
    `;

    // Insere o novo pacote na classe container-destinos
    var containerDestinos = document.querySelector(".container-destinos");
    containerDestinos.appendChild(novoPacote);
}


// Função para capturar informações e imprimir o objeto JSON no console
function capturarInformacoes(botao) {
    // Captura informações utilizando métodos da API do DOM
      var destino =
          botao.parentElement.querySelector(".roteiro-destino").textContent;
      var inclusos = Array.from(
          botao.parentElement.querySelectorAll(".roteiro-incluso li")
      ).map((li) => li.textContent);
      var preco = botao.parentElement.querySelector(".roteiro-preco").textContent;
  
    // Cria um objeto JSON com as informações capturadas
      var objetoJSON = {
          destino: destino,
          inclusos: inclusos,
          preco: preco,
      };
  
    // Imprime o objeto JSON no console
      console.log(objetoJSON);
  }