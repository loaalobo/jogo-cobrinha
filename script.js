let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //o contexto renderiza o desenho que vai acontecer dentro do canvas
let box = 32;
let snake = []; //for
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//variável que cria a direção que a gente quer que a cobrinha tenha
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//função que desenha o canvas: desenha e define campo
function criarBG() {
    context.fillStyle = "lightgreen"; //define a cor 
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo onde acontece o jogo - trabalha com 4 parâmetros
}

//a cobrinha será um array de coordenadas
//adicionaremos um elemento e retiraremos o último (isso vai fazer com que ela ande)

function criarCobrinha(){
    //for percorre todo o tamanho do array e vai incrementar
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

//cria a comida
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//detecta o valor da tela para que a cobrinha ande nas direções que a gente pedir
document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

//função que atualiza o jogo de tempos em tempos para a cobrinha poder se mexer
function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //condições que vão mostrar o lado para onde a cobrinha vai (coordenadas de aumentar ou diminuir)
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //retira o último elemento do array
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 milisegundos para a função "iniciar jogo"





