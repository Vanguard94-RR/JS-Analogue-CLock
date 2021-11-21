
import {LEVEL, OBJECT_TYPE} from './setup';

//Clases
import GameBoard from './GameBoard';
import Pacman from './Pacman';


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
function gameLoop(pacman, gosths) {
    gameBoard.moveCharacter(pacman);

}
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

    timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);

}

// Inicializar Juego

startButton.addEventListener('click',startGame);