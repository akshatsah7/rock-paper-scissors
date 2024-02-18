var playerScore = 0;
var computerScore = 0;

function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    updateScores();
    document.getElementById('result').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

function updateScores() {
    document.getElementById('player-score').innerText = `Player: ${playerScore}`;
    document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
}
