let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // 随机生成一个1-3的数字
  const ranNum = Math.floor(Math.random() * 3 + 1);
  // console.log(ranNum);
  // 跟随机数返回不同字符串：1-rock, 2-paper, 3-scissors
  if (ranNum == 1) return "rock";
  else if (ranNum == 2) return "paper";
  else return "scissors";
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let userInput;
  const resultArr = ['rock', 'paper', 'scissors'];

  while (true) {
    userInput = prompt("Please enter your choice:");
    if (resultArr.includes(userInput.toLowerCase())) {
      return userInput.toLowerCase();
    } else {
      alert("Your input format is not correct,please try again!");
      continue;
    }
  }
}


// console.log(getHumanChoice());

function playGround(hunmanChoice, computerChoice) {
  let human = hunmanChoice();
  let computer = computerChoice();
  console.log(`human:${human},computer:${computer}`);

  let results = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
  };
  if (results[human] == computer) {
    console.log(`You lose!${computer} beats ${human}`);
    computerScore++;
  } else if (human == results[computer]) {
    console.log(`You win!${human} beats ${computer}`);
    humanScore++;
  } else {
    console.log("You are DRAW!!!");
  }
}

playGround(getHumanChoice, getComputerChoice);