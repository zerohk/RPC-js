let humanScore = 0;
let computerScore = 0;
let round = 0;
// 获取按钮
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll(".game");

// 获取div
const result = document.querySelector(".result");
const scoreText = document.querySelector(".score");

function getComputerChoice() {
  // 随机生成一个1-3的数字
  const ranNum = Math.floor(Math.random() * 3 + 1);
  // console.log(ranNum);
  // 跟随机数返回不同字符串：1-rock, 2-paper, 3-scissors
  if (ranNum == 1) return "rock";
  else if (ranNum == 2) return "paper";
  else return "scissors";
}

function playGround(hunmanChoice, computerChoice) {
  // let human = hunmanChoice();
  round++;
  let human = hunmanChoice;
  let computer = computerChoice();
  // console.log(`human:${human},computer:${computer}`);
  let selectionText = `Round: ${round} Your choice:${human}, Computer choice:${computer}`;

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


function isFinished() {
  if (humanScore >= 5 || computerScore >= 5) {
    disabledAllButtons();

    if (humanScore > computerScore) {
      scoreText.textContent = `You win ,your score is ${humanScore}, and computer's score is ${computerScore}`;
    } else if (humanScore < computerScore) {
      scoreText.textContent = `You lose ,your score is ${humanScore}, and computer's score is ${computerScore}`;
    } else {
      scoreText.textContent = `You are draw ,your score is ${humanScore}, and computer's score is ${computerScore}`;
    }
  }
}

// 禁用所有按钮
function disabledAllButtons() {

  buttons.forEach(button => button.disabled = true);
}

// 启用所有按钮
function activeAllButtons() {
  buttons.forEach(button => button.disabled = false);
}

// 为每个按钮添加点击事件：点击后执行playGround
// rock.addEventListener("click", playGround("rock", getComputerChoice));
// paper.addEventListener("click", playGround("paper", getComputerChoice));
// scissors.addEventListener("click", playGround("scissor", getComputerChoice));
// 需要用匿名函数包裹playGround,不然会直接执行函数，导致点击事件失效
rock.addEventListener("click", () => { playGround("rock", getComputerChoice); isFinished(); });
paper.addEventListener("click", () => { playGround("paper", getComputerChoice); isFinished() });
scissors.addEventListener("click", () => { playGround("scissors", getComputerChoice); isFinished() });

// playGame();

// 重置游戏
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  activeAllButtons();
  result.textContent = "";
  scoreText.textContent = "";
})