const tabuleiro = document.getElementById("tabuleiro");

for (let linha = 0; linha < 8; linha++) {
  for (let coluna = 0; coluna < 8; coluna++) {
    const casa = document.createElement("div");
    casa.classList.add("casa");
    const cor = (linha + coluna) % 2 === 0 ? "clara" : "escura";
    casa.classList.add(cor);
    tabuleiro.appendChild(casa);
  }
}
