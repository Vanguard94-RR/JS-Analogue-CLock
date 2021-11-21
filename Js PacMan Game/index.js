
import {LEVEL, OBJECT_TYPE} from './setup';
import { randomMovement } from './ghostMoves';

//Clases
import GameBoard from './GameBoard';
import Pacman from './Pacman';
import Ghost from './Ghost';


//Elementos DOM

const gameGrid =document.querySelector('#game');
const socoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button"); 

// Game constants

const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Inicializacion

let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive =false;
let powerPillTimer = null;

function gameOver(pacman,grid) {
    
}

function checkCollision(pacman,gosths) {
    
}
function gameLoop(pacman, ghosts) {
    gameBoard.moveCharacter(pacman);
    
    ghosts.forEach((ghost)  =>  gameBoard.moveCharacter(ghost))
        
    };


function startGame(){
    gameWin = false;
    powerPillActive =false
    score = 0;

    startButton.classList.add('hide');
    
    gameBoard.createGrid(LEVEL);
    
    const pacman = new Pacman(2, 287);
    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
    document.addEventListener('keydown',(e)=>
    pacman.handleKeyInput(e, gameBoard.objectExist));

    const ghosts =[
        new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
        new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
        new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
        new Ghost(2, 231, randomMovement, OBJECT_TYPE.CLYDE)

    ];

    timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);

}

// Inicializar Juego

startButton.addEventListener('click',startGame);


// var images = [
//   "./images/01.jpg",
//   "./images/02.jpg",
//   "./images/03.jpg",
//   "./images/04.jpg",
//   "./images/05.jpg",
// ];
// function cambiaImagen() {
//   var i = 0;
//   $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
//   setInterval(function () {
//     i++;
//     if (i == images.length) {
//       i = 0;
//     }
//     $("#dvImage").fadeOut("slow", function () {
//       $(this).css("background-image", "url(images/" + images[i] + ")");
//       $(this).fadeIn("slow");
//     });
//   }, 1000);
// };