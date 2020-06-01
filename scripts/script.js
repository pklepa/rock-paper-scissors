function computerPlay(){
    let gameOptions = ['Rock', 'Paper', 'Scissors'];
    return gameOptions[random(3)]
}

function play(){
    let roundResultMessageArr = ['That\'s a draw.', 'Ouch! You lost.', 'Noice! You won.'];
    let playerSelection = window.prompt('Rock, Paper or Scissors?');
    let result = playRound(capitalize(playerSelection), computerPlay());

    switch(result) {
        case 'Draw':
            console.log('%c '+roundResultMessageArr[0], 'color: black');
            break;
        case 'PC':
            console.log('%c '+roundResultMessageArr[1], 'color: red');
            break;
        case 'Player':
            console.log('%c '+roundResultMessageArr[2], 'color: green');
            break;
        default:
            console.warn('Something went wrong..');
    }

    return result
}

function game(){
    console.log('RPS Best of 5 - First to win 3 rounds is the winner.\n..:: Game\'s on! ::..');
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 3 && computerScore < 3) {
        switch(play()){
            case 'PC':
                ++computerScore;
                break;
            case 'Player':
                ++playerScore;
                break;
            default:
                console.log('No points awarded this round');
                break;
        }

        console.log(`Current score is:\nPlayer ${playerScore} vs Computer ${computerScore}`);
        console.log('------------------------------------------------------------')
    }

    console.log(`And that\'s a wrap!\n\n..:: Final score ::..\nPlayer ${playerScore} vs Computer ${computerScore}`);
    playerScore > computerScore ? console.log('%c You won by pure luck, i\'m sure of it.', 'color: teal') : console.log('%c Of course you lost. This is the robots\' century. Skynet is coming.', 'color: black')

    return
}

function playRound(playerSelection, computerSelection){
    let roundResultArr = ['Draw', 'PC', 'Player'];

    console.log(`You pick ${ playerSelection }`);
    console.log(`Computer picks ${ computerSelection }`);

    switch(playerSelection){
        case 'Rock':
            switch(computerSelection){
                case 'Rock':
                    return roundResultArr[0];
                    break;
                case 'Paper':
                    return roundResultArr[1];
                    break;
                case 'Scissors':
                    return roundResultArr[2];
                    break;
            }
            break;
        case 'Paper':
            switch(computerSelection){
                case 'Rock':
                    return roundResultArr[2];
                    break;
                case 'Paper':
                    return roundResultArr[0];
                    break;
                case 'Scissors':
                    return roundResultArr[1];
                    break;
            }
            break;
        case 'Scissors':
            switch(computerSelection){
                case 'Rock':
                    return roundResultArr[1];
                    break;
                case 'Paper':
                    return roundResultArr[2];
                    break;
                case 'Scissors':
                    return roundResultArr[0];
                    break;
            }
            break;
        default:
            console.warn('Something\'s wrong');
            break;
    }
}

function random(maxVal){
    return Math.floor(Math.random() * maxVal);
}

function capitalize(text){
    let lowerCaseText = text.toLowerCase();
    return lowerCaseText.replace(lowerCaseText[0], lowerCaseText.slice(0,1).toUpperCase())
}