let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("Game Started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelUp() {
  userSeq = [];

  level++;
  h2.innerText = `Level ${level}`;
  //Random Button Chose
  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIdx];
  let randomButton = document.querySelector(`.${randomColor}`);
  // console.log(randomButton);
  // console.log(randomColor);
  // console.log(randomIdx);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomButton);
}

function checkAns(idx) {
  // console.log("Level is", level);
  let highScore = 0;

  if (userSeq[idx] === gameSeq[idx]) {
    // console.log("Same Value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    highScore = Math.max(gameSeq.length);
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b> </br>Press Any Key To Start Again
     `;
    document.querySelector("p").innerText = `Your High Score is: ${highScore}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
