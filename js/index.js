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
  // console.log(`human:${human},computer:${computer}`);
  let selectionText = `human:${human},computer:${computer}`;
  // 清空<div class=result> 原有内容
  const result = document.querySelector(".result");
  result.textContent = "";
  // 新建一个p，用于显示两者结果
  const selection = document.createElement("p");
  selection.textContent = selectionText;
  // 新建一个p，显示对局结果
  const playResult = document.createElement("p");
  let resultText = '';


  let results = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
  };
  if (results[human] == computer) {
    // console.log(`You lose!${computer} beats ${human}`);
    resultText = `You lose!${computer} beats ${human}`;
    computerScore++;
  } else if (human == results[computer]) {
    // console.log(`You win!${human} beats ${computer}`);
    resultText = `You win!${human} beats ${computer}`;
    humanScore++;
  } else {
    // console.log("You are DRAW!!!");
    resultText = "You are DRAW!!!";
  }

  // 将对局结果保存在第二个p
  playResult.textContent = resultText;
  // 将结果输出到网页

  result.appendChild(selection);
  result.appendChild(playResult);

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