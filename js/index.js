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
  // let human = hunmanChoice();
  let human = hunmanChoice;
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

// playGround(getHumanChoice, getComputerChoice);


function playGame() {


  if (humanScore > computerScore) {
    console.log(`You win ,your score is ${humanScore}, and computer's score is ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose ,your score is ${humanScore}, and computer's score is ${computerScore}`);
  } else {
    console.log(`You are draw ,your score is ${humanScore}, and computer's score is ${computerScore}`);
  }
}

// 获取按钮
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// 为每个按钮添加点击事件：点击后执行playGround
// rock.addEventListener("click", playGround("rock", getComputerChoice));
// paper.addEventListener("click", playGround("paper", getComputerChoice));
// scissors.addEventListener("click", playGround("scissor", getComputerChoice));
// 需要用匿名函数包裹playGround,不然会直接执行函数，导致点击事件失效
rock.addEventListener("click", () => { playGround("rock", getComputerChoice) });
paper.addEventListener("click", () => { playGround("paper", getComputerChoice) });
scissors.addEventListener("click", () => { playGround("scissors", getComputerChoice) });


// playGame();