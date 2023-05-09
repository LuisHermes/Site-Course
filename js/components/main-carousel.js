// 1 Acessar a janela (browser)
// 2 Pegar HTML todo
// 3 Pegar botão
// Saber que esta sendo clicado no botao

// 5 Acessar a janela
// 6 Pegar HTML todo
// 7 Pegar o elements
// 8 Mover o elements para direita

// 9 


const btnRight = document.querySelector('.button-arrow.-right')
const btnLeft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements')
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;

});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;

});