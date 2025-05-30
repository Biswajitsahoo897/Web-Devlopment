const Score = JSON.parse(localStorage.getItem('Score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};
function resetButton() {
  Score.Wins = 0;
  Score.Losses = 0;
  Score.Ties = 0;
  localStorage.removeItem('Score');
  updateScoreElement();
}

let isAutoPlaying=false;//To stop the functionel
let intervalId;
function autoPlay() {
  if(!isAutoPlaying){
    intervalId=setInterval(function () {
      const playerMove = picComputerMove();
      playGame(playerMove);
    }, 2000);
    isAutoPlaying=true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}

function updateResultElement(result) {
  document.querySelector('.js-result').innerHTML = result;
}

function updateMovesElement(userMove, compMove) {
  document.querySelector('.js-moves').innerHTML = `You <img src="${userMove}.png" class="js-result-image" alt="image"> 
    <img src="${compMove}.png" class="js-result-image" alt="image"> Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-Score').innerHTML = `Wins:${Score.Wins} , Losses:${Score.Losses},Ties:${Score.Ties}`;
}

function picComputerMove() {
  const randomNumber = Math.random();
  let compMove = '';
  if (randomNumber < 0.34) {
    compMove = 'Rock';
  } else if (randomNumber <= 0.67) {
    compMove = 'Paper';
  } else {
    compMove = 'Scissor';
  }
  return compMove;
}

function playGame(userMove) {
  const compMove = picComputerMove();
  let result = '';
  if (userMove === compMove) {
    result = "It's a tie!";
  } else if (
    (userMove === 'Rock' && compMove === 'Scissor') ||
    (userMove === 'Paper' && compMove === 'Rock') ||
    (userMove === 'Scissor' && compMove === 'Paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer Wins!';
  }
  if (result === 'You win!') {
    Score.Wins += 1;
  }
  else if (result === 'Computer Wins!') {
    Score.Losses += 1;
  }
  else {
    Score.Ties += 1;
  }
  // After Updation of the code we saved the data in the local storage
  //local storage only supports for the string variable only so we convertd it tp JSON stringify
  localStorage.setItem('Score', JSON.stringify(Score));
  updateResultElement(result);
  updateMovesElement(userMove, compMove);
  updateScoreElement();

  // it is better to remove the alert and use the updateResultElement function
  // alert(`You chose ${userMove}. Computer chose ${compMove}. ${result}
  // Wins:${Score.Wins} , Losses:${Score.Losses},Ties:${Score.Ties}
  // `);
}