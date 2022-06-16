
let playerCount=0;
let computerCount=0;


function whoWins(playerSelection , computerSelection){
        if(playerSelection==computerSelection){
            console.log("It\'s a draw! Play again");
            
        }
        else if(playerSelection=='rock' && computerSelection=='scissors'){
            console.log('player wins');
             playerCount = playerCount+1;
            // f++;
        }
        else if(playerSelection=='paper' && computerSelection=='rock'){
            console.log('player wins');
             playerCount = playerCount+1;
            // f++;
        }
        else if(playerSelection=='scissors' && computerSelection=='paper'){
            console.log('player wins');
             playerCount = playerCount+1;
            // f++;
        }
        else{
            console.log('computer wins')
            computerCount = computerCount+1;
            // f++;
        }
}
let z = '';

const btnRock = document.querySelector('#rock') ;
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');


btnRock.addEventListener('click', () => {
    z = 'rock';
    console.log('you pressed ' + z);
});

btnPaper.addEventListener('click', () => {
    z = 'paper';
    console.log('you pressed ' + z);
});


btnScissors.addEventListener('click', () => {
    z = 'scissors';
    console.log('you pressed ' + z);
});


function computerPlay(){
    x = (Math.floor(Math.random()*3)+1);
    if(x==1){
        return "rock";
    }
    if(x==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

const btnPlay = document.querySelector('#play');
btnPlay.addEventListener('click' , () => {
    i = computerPlay();
    whoWins(z,i);
});

const results = document.querySelector('#results');
results.textContent = `The result of the games so far is : player: ${playerCount} - computer: ${computerCount} !`







// let playerCount=0;
// let computerCount=0;
// let f = 0;
// while(f<5){
// z = (prompt('ples giv input')).toLowerCase();
// function computerPlay(){
//     x = (Math.floor(Math.random()*3)+1);
//     if(x==1){
//         return "rock";
//     }
//     if(x==2){
//         return "paper";
//     }
//     else{
//         return "scissors";
//     }
// }
// i = computerPlay();
// console.log('PC chose ' + i);
// console.log('You chose '+ z);
// whoWins(z,i);

//}

//console.log(`The result of the game is : player: ${playerCount} - computer: ${computerCount} `);
