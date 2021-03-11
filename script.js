let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //o contexto renderiza o desenho que vai acontecer dentro do canvas
let box = 32;
let snake = []; //for
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//função que desenha o canvas: desenha e define campo
function criarBG() {
    context.fillStyle = "lightgreen"; //define a cor 
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo onde acontece o jogo - trabalha com 4 parâmetros
}

//a cobrinha será um array de coordenadas
//adicionaremos um elemento e retiraremos o último (isso vai fazer com que ela ande)

function criarCobrinha() {
    //for percorre todo o tamanho do array e vai incrementar
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

criarBG();
criarCobrinha();
