score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};


function computerMove(){

  let computerChoice = '';

  const randomInt = Math.random();

  if(randomInt<1/3){
    computerChoice = 'rock';
  }
  else if(randomInt>=1/3 && randomInt<2/3){
    computerChoice = 'paper';
  }
  else{
    computerChoice = 'scissors';
  }

  return computerChoice;

}

function playGame(userMove){

  const opp = computerMove();
  let result = '';

  if(userMove === 'rock'){

    if(opp === 'rock'){
      result = 'tie';
    }
    else if(opp === 'paper'){
      result = 'you lose';
    }
    else{
      result = 'you win';
    }

  }
  else if(userMove === 'paper'){

    if(opp === 'paper'){
      result = 'tie';
    }
    else if(opp === 'scissors'){
      result = 'you lose';
    }
    else{
      result = 'you win';
    }

  }

  else{
    if(opp === 'scissors'){
      result = 'tie';
    }
    else if(opp === 'rock'){
      result = 'you lose';
    }
    else{
      result = 'you win';
    }
  }


  if(result === 'you win'){
    score.wins++;
  }
  else if(result === 'you lose'){
    score.losses++;
  }
  else{
    score.ties++;
  }

  
 localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.js-moves').innerHTML = 
  `You <img class = "icon-button icon"src="/images/${userMove}-emoji.png"> <img class = "icon-button icon"src="/images/${opp}-emoji.png"> Computer`

  document.querySelector('.res').innerHTML =
  `${result}`

  displayResult();


}

function resetScore(){

  console.log('resetting the score....')

  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');

  displayResult();

  console.log(score)
}

function displayResult(){
  document.querySelector('.result').innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`
}

