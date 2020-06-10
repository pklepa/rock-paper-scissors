// function game(){
//     console.log('RPS Best of 5 - First to win 3 rounds is the winner.\n..:: Game\'s on! ::..');
//     let playerScore = 0;
//     let computerScore = 0;
//     while(playerScore < 3 && computerScore < 3) {
//         switch(play()){
//             case 'PC':
//                 ++computerScore;
//                 break;
//             case 'Player':
//                 ++playerScore;
//                 break;
//             default:
//                 console.log('No points awarded this round');
//                 break;
//         }

//         console.log(`Current score is:\nPlayer ${playerScore} vs Computer ${computerScore}`);
//         console.log('------------------------------------------------------------')
//     }

//     console.log(`And that\'s a wrap!\n\n..:: Final score ::..\nPlayer ${playerScore} vs Computer ${computerScore}`);
//     playerScore > computerScore ? console.log('%c You won by pure luck, i\'m sure of it.', 'color: teal') : console.log('%c Of course you lost. This is the robots\' century. Skynet is coming.', 'color: black')

//     return
// }

function playRound(playerSelection, computerSelection){
    let roundResultArr = ['Draw', 'PC', 'Player'];

    playerPlay.textContent = `You pick ${ playerSelection }`;
    console.log(playerPlay);
    computerPlay.textContent = `I pick ${ computerSelection }`;
    console.log(computerPlay);

    switch(playerSelection){
        case 'Rock':
            switch(computerSelection){
                case 'Rock':
                    return roundResultArr[0];                    
                case 'Paper':
                    return roundResultArr[1];
                case 'Scissors':
                    return roundResultArr[2];
            }
            break;
        case 'Paper':
            switch(computerSelection){
                case 'Rock':
                    return roundResultArr[2];
                case 'Paper':
                    return roundResultArr[0];
                case 'Scissors':
                    return roundResultArr[1];
            }
            break;
        case 'Scissors':
            switch(computerSelection){
                case 'Rock':
                    return roundResultArr[1];
                case 'Paper':
                    return roundResultArr[2];
                case 'Scissors':
                    return roundResultArr[0];
            }
            break;
        default:
            console.warn('Something\'s wrong');
            break;
    }
}

function computerRoundPlay(){
    let gameOptions = ['Rock', 'Paper', 'Scissors'];
    return gameOptions[random(3)]
}

function random(maxVal){
    return Math.floor(Math.random() * maxVal);
}

function handleSelectedItem(event){
    const playObject = event.target;
    const playStr = playObject.dataset.name;

    console.log(playObject);

    let roundResultMessageArr = ['That\'s a draw.', 'Ouch! You lost.', 'Noice! You won.'];
    let result = playRound(playStr, computerRoundPlay());

    switch(result) {
        case 'Draw':
            roundResult.textContent = roundResultMessageArr[0];
            roundResult.style.color = '#f7bd2a';
            console.log('%c ' + roundResultMessageArr[0], 'color: #f7bd2a');
            break;
        case 'PC':
            roundResult.textContent = roundResultMessageArr[1];
            roundResult.style.color = 'red';
            console.log('%c ' + roundResultMessageArr[1], 'color: red');
            computerScore++
            break;
        case 'Player':
            roundResult.textContent = roundResultMessageArr[2];
            roundResult.style.color = 'green';
            console.log('%c ' + roundResultMessageArr[2], 'color: green');
            playerScore++
            break;
        default:
            console.warn('Something went wrong..');
    }

    console.log('----------------------');


    // Updates Scoreboard
    playerScoreHTML.textContent = playerScore;
    computerScoreHTML.textContent = computerScore;

}




// ..:: MAIN SCRIPT ::..

// Event Listeners
const plays = document.querySelectorAll('.card');
for (const play of plays) {
    play.addEventListener("click", handleSelectedItem);
}


// Global Variables
let playerScore = 0;
let computerScore = 0;

const playerScoreHTML = document.querySelector('#yourScore');
const computerScoreHTML = document.querySelector('#myScore');

const playerPlay = document.querySelector('#yourPlay');
const computerPlay = document.querySelector('#myPlay')

const roundResult = document.querySelector('#roundResult');
