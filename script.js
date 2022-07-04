// ---------------------------------------------------------------- REQUISITO 4
// O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
let pixelBoard = document.getElementById('pixel-board');


// Foi usado como referência o código do usuário David Thomas no seguinte link do Stack Overflow: https://stackoverflow.com/questions/15649274/chess-board-using-javascript-and-dom#15649445. O usuário no caso trabalhou com a tag <table>, e adaptei para utilizar a tag <div> referente à recomendação de boas práticas do README do projeto. O intuito do trecho abaixo é gerar um board através do JS utilizando a propriedade for primeiramente para criar a condição de repetição de 5 quadrados e depois um for dentro desse mesmo loop para repetir esses 5 quadrados horizontais um abaixo do outro até que se tenha uma altura de 5 quadrados também.

for (let index = 0; index < 5; index += 1) {
  let pixelRow = document.createElement('div');
  pixelBoard.appendChild(pixelRow);
  
  for (let index = 0; index < 5; index += 1) { 
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    // Adicionar click para pintar pixel antes de apendar a div
    pixelRow.appendChild(pixel);
  }
}


// ---------------------------------------------------------------- REQUISITO 6
window.onload = function() {
  let blackColor = document.getElementById('black');
  blackColor.className = 'color selected';
}
