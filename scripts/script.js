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


function handleAboutClick(){
    modal.classList.remove('hide');

    modalTitle.textContent = 'About';

    let modalBodyText = `<p>This web page was made by pklepa as an early learning experience in web development.<br>
        <br>
        You can see more of my work at <a style='font-weight: bold; color: white' href="https://github.com/pklepa">https://github.com/pklepa</a></p>`;
    modalBody.innerHTML = modalBodyText;
}


function handleHelpClick(){
    modal.classList.remove('hide');

    modalTitle.textContent = 'Help'

    let modalBodyText = `<p>Rock, Papers, Scissors is an ancient game in which you can play (as the name implies) one of three moves:</p>
    <ul>Rock</ul><ul>Paper</ul><ul>Scissors</ul>
    <br>
    <p>The rules for the game are simple:<br></p>
    <ul>Rock beats Scissors</ul><ul>Scissors beats Paper</ul><ul>Paper beats Rock</ul>
    <br>
    <p>It is a zero-sum game in which the possible outcomes are either a win, a draw or a win for the other player.<br>
    <br>
    That's it! Have fun!    
    </p>`;
    modalBody.innerHTML = modalBodyText;
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

    if (playerScore == 5 || computerScore == 5){
        gameOver();
        playerScore = 0;
        computerScore = 0
    }


    // Updates Scoreboard
    playerScoreHTML.textContent = playerScore;
    computerScoreHTML.textContent = computerScore;

}

function gameOver(){
    modal.classList.remove('hide');
    modalTitle.textContent = 'Game Over!';

    let modalBodyText = `
            <h2>Final Score</h2>
            <div class="finalScore">
                <li>you</li>
                <li>me</li>
                <li>${playerScore}</li>
                <li>${computerScore}</li>            
            </div>
            `;
    modalBody.innerHTML = modalBodyText;

    if(playerScore > computerScore) {
        modalBody.innerHTML += `
            <p style="margin-top: 40px">Hah, as if this mattered anything...<br>
            <br>
            You better know that this only happened because I let you, not because you deserved it.</p>
        `;
    } else {
        modalBody.innerHTML += `
            <p style="margin-top: 40px">What? Don't act surprised.<br>
            <br>
            Of course you lost. This is the 21st century, robots will best you in everything.</p>
        `;
    }
}



// ..:: MAIN SCRIPT ::..

// Global Variables
let playerScore = 0;
let computerScore = 0;

const modal = document.querySelector('#modal');
let modalTitle = document.querySelector('#modal .header h1');
// let modalBody = document.querySelector('#modal p');
let modalBody = document.querySelector('#modal .body');

const playerScoreHTML = document.querySelector('#yourScore');
const computerScoreHTML = document.querySelector('#myScore');

const playerPlay = document.querySelector('#yourPlay');
const computerPlay = document.querySelector('#myPlay')

const roundResult = document.querySelector('#roundResult');


// Event Listeners
const plays = document.querySelectorAll('.card');
for (const play of plays) {
    play.addEventListener("click", handleSelectedItem);
}

const about = document.querySelector('#about');
about.addEventListener('click', handleAboutClick);

const help = document.querySelector('#help');
help.addEventListener('click', handleHelpClick);

const modalCloseBtn = document.querySelector('#modal a');
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hide');
})