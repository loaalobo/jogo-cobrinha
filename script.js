let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //o contexto renderiza o desenho que vai acontecer dentro do canvas
let box = 32;

//função que desenha o canvas: desenha e define campo
function criarBG() {
    context.fillStyle = "lightgreen"; //define a cor 
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo onde acontece o jogo - trabalha com 4 parâmetros
}

criarBG();
