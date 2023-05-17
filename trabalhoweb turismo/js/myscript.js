// Obter os elementos pelo nome da classe
var elementos = document.getElementsByClassName('tamanho');

// Definir o tamanho inicial da fonte para todos os elementos
var tamanhoFonte = 16;

// Aumentar o tamanho da fonte para todos os elementos
function aumentarTamanhoFonte() {
  // Incrementar o tamanho da fonte em 2
  tamanhoFonte += 2;
  
  // Percorrer todos os elementos e aplicar o novo tamanho da fonte
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.fontSize = tamanhoFonte + 'px';
  }
}

// Diminuir o tamanho da fonte para todos os elementos
function diminuirTamanhoFonte() {
  // Decrementar o tamanho da fonte em 2
  tamanhoFonte -= 2;
  
  // Percorrer todos os elementos e aplicar o novo tamanho da fonte
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.fontSize = tamanhoFonte + 'px';
  }
}