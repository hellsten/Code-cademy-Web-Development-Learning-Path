const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
    return userInput;
  else
    console.log('Error!');
};
//console.log(getUserChoice('Paper')); // should print 'paper'
//console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb')
    return 'user won'
  if(userChoice === computerChoice)
    return 'tie';
  if(userChoice === 'rock'){
    if(computerChoice === 'paper')
      return 'computer won';
  	else
      return 'user won';
  };
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors')
      return 'computer won';
  else
    return 'user won';
  };
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock')
      return 'computer won';
  else
    return 'user won';
  };
};
//can pass on any rock paper scissors bomb option to randomly play against a computer
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice)); 
};
playGame();
