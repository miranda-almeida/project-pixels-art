// ---------------------------------------------------------------- REQUISITO 4
// O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
const pixelBoard = document.getElementById('pixel-board');

// Foi usado como referência o código do usuário David Thomas no seguinte link do Stack Overflow: https://stackoverflow.com/questions/15649274/chess-board-using-javascript-and-dom#15649445. O usuário no caso trabalhou com a tag <table>, e adaptei para utilizar a tag <div> referente à recomendação de boas práticas do README do projeto. O intuito do trecho abaixo é gerar um board através do JS utilizando a propriedade for primeiramente para criar a condição de repetição de 5 quadrados e depois um for dentro desse mesmo loop para repetir esses 5 quadrados horizontais um abaixo do outro até que se tenha uma altura de 5 quadrados também.

function generateBoard(number) {
  while (pixelBoard.firstChild) {
    pixelBoard.firstChild.remove();
  }
  for (let index = 0; index < number; index += 1) {
    const pixelRow = document.createElement('div');
    pixelBoard.appendChild(pixelRow);
    for (let index = 0; index < number; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', pixelPaint); // Adiciona linha para chamar função do requisito 8
      pixelRow.appendChild(pixel);
    }
  }
}

generateBoard(5);

// ---------------------------------------------------------------- REQUISITO 6
window.onload = function () {
  const blackColor = document.getElementById('black');
  blackColor.className = 'color selected';
}

// ---------------------------------------------------------------- REQUISITO 7
const pixelSquare = document.getElementsByClassName('pixel');
const colors = document.getElementsByClassName('color');

// Acrescenta a classe 'selected' na cor clicada, para chamá-la no momento de colorir o pixel
function colorPicker(event) {
  for (let index = 0; index < colors.length; index += 1) {
    // Adiciona if para remover a classe 'selected' quando outra cor for seleciona
    if (colors[index].className === 'color selected') {
      colors[index].className = 'color';
    }
  }
  // Ao clicar (target 'click'), adiciona a classe 'selected' (explicação do Ronald sobre o target)
  event.target.className = 'color selected';
}

// Inicia a função acima
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorPicker);
}

// ---------------------------------------------------------------- REQUISITO 8
// Define estilo de bg-color para cada elemento da lista de 'colors' individualmente para evitar a criação de uma função para cada cor separadamente. Dessa forma, é possível criar apenas uma função que vai passar pelo vetor de 'colors' aplicando o .style.backgroundColor de acordo com o index de cada elemento.
colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'pink';
colors[2].style.backgroundColor = 'red';
colors[3].style.backgroundColor = 'purple';

function pixelPaint(event) {
  let selectedColor;
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className === 'color selected') {
      selectedColor = colors[index].style.backgroundColor;
    }
  }
  event.target.style.backgroundColor = selectedColor;
}

// ---------------------------------------------------------------- REQUISITO 9
const clearBoardBtn = document.getElementById('clear-board');

function clearBoard() {
  for (let index = 0; index < pixelSquare.length; index += 1) {
    pixelSquare[index].style.backgroundColor = 'white';
  }
}

clearBoardBtn.addEventListener('click', clearBoard);

// ---------------------------------------------------------------- REQUISITOS 10 E 11
const sizeBtn = document.getElementById('generate-board');

function newBoard () {
  const inputSize = document.getElementById('board-size').value;
  if (inputSize < 5) {
    generateBoard(5);
  }
  if (inputSize > 50) {
  generateBoard(50);
  }
  if (inputSize >= 5 && inputSize <= 50) {
    generateBoard(inputSize);
  } else {
    alert('Board inválido!');
  }
}

sizeBtn.addEventListener('click', newBoard);

// ---------------------------------------------------------------- REQUISITO 12
