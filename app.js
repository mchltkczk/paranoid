let player = document.querySelector(".player");
let ball = document.querySelector(".ball");
const btnStart = document.querySelector(".start");

let x, y, moveTarget, moveBall;

document.addEventListener("keydown", arrows);
function arrows(event) {
  if (event.key === "ArrowUp") {
    arrowUp();
  }
  if (event.key === "ArrowDown") {
    arrowDown();
  }
  if (event.key === "ArrowLeft") {
    arrowLeft();
  }
  if (event.key === "ArrowRight") {
    arrowRight();
  }
}

function arrowUp() {
  x = player.parentElement.dataset.x;
  y = parseInt(player.parentElement.dataset.y) - 1;
  moveTarget = document.querySelector(`[data-x="${x}"]` + `[data-y="${y}"]`);
  moveTarget.append(player);
}

function arrowDown() {
  x = parseInt(player.parentElement.dataset.x);
  y = parseInt(player.parentElement.dataset.y) + 1;
  moveTarget = document.querySelector(`[data-x="${x}"]` + `[data-y="${y}"]`);
  moveTarget.append(player);
}

function arrowLeft() {
  player.classList.remove("player__animation--right");
  player.classList.add("player__animation--left");
  x = parseInt(player.parentElement.dataset.x) - 1;
  y = player.parentElement.dataset.y;
  if (x == 0 || x == 22) {
    return;
  }
  moveTarget = document.querySelector(`[data-x="${x}"]` + `[data-y="${y}"]`);
  moveTarget.append(player);
}

function arrowRight() {
  player.classList.add("player__animation--right");
  player.classList.remove("player__animation--left");
  x = parseInt(player.parentElement.dataset.x) + 1;
  y = parseInt(player.parentElement.dataset.y);
  if (x == 0 || x == 22) {
    return;
  }
  moveTarget = document.querySelector(`[data-x="${x}"]` + `[data-y="${y}"]`);
  moveTarget.append(player);
}
let startPos;
//random x ball position
function ballStartingPosition(min, max) {
  startPos = Math.random() * (max - min) + min;
  startPos = Math.round(startPos);
  moveBall = document.querySelector(`[data-x="${startPos}"]` + `[data-y="1"]`);
  moveBall.append(ball);
  return startPos;
}

let moveDir;
function ballMoveStart(min, max, startPos) {
  moveDir = Math.random() * (max - min) + min;
  moveDir = Math.round(moveDir);
  moveBall = document.querySelector(
    `[data-x="${startPos + moveDir}"]` + `[data-y="2"]`
  );
  moveBall.append(ball);
  return moveDir;
}

let moveBallX, moveBallY;

function ballMove(moveDir) {
  moveBallX = parseInt(ball.parentElement.dataset.x);
  moveBallY = parseInt(ball.parentElement.dataset.y);
  moveBall = document.querySelector(
    `[data-x="${moveBallX + moveDir}"]` + `[data-y="${moveBallY + 1}"]`
  );
  moveBall.append(ball);
}

btnStart.addEventListener("click", () => {
  ball.hidden = false;
  startGame();
});

function startGame() {
  ballStartingPosition(1, 22);
  setTimeout(ballMoveStart, 700, -1, 1, startPos);
  setTimeout(ballMove, 700, moveDir);
}
