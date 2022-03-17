let player = document.querySelector(".player");
let x, y, moveTarget;

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
  console.log(x, y);
  x = player.parentNode.dataset.x;
  y = parseInt(player.parentNode.dataset.y) - 1;
  y = y.toString();
  moveTarget = document.querySelector(`[data-x="${x}"]` && `[data-y="${y}"]`);
  console.log(moveTarget.dataset.x, moveTarget.dataset.x)
  moveTarget.append(player);
  console.log(moveTarget.dataset.x, moveTarget.dataset.x)

  console.log(x, y);
}

function arrowDown() {
    
    x = player.parentNode.dataset.x;
    y = parseInt(player.parentNode.dataset.y) + 1;
    console.log(`ruch w dol, y+1` + x, y);
  y = y.toString();
  moveTarget = document.querySelector(`[data-x="${x}"]` && `[data-y="${y}"]`);
  console.log('pole docelowe' + moveTarget.dataset.x, moveTarget.dataset.x)
  moveTarget.append(player);
  console.log('pole po ruchu' + moveTarget.dataset.x, moveTarget.dataset.x)
  console.log(x, y);

}

function arrowLeft() {
    x = parseInt(player.parentNode.dataset.x) - 1;
    y = player.parentNode.dataset.y;
    console.log(x, y);
  x = x.toString();
  moveTarget = document.querySelector(`[data-x="${x}"]` && `[data-y="${y}"]`);
  console.log(moveTarget.dataset.x, moveTarget.dataset.x)
  
  moveTarget.append(player);
  console.log(moveTarget.dataset.x, moveTarget.dataset.x)

  console.log(x, y);

}

function arrowRight() {
    
    x = parseInt(player.parentNode.dataset.x) + 1;
    y = player.parentNode.dataset.y;
    console.log(x, y);
  x = x.toString();
  moveTarget = document.querySelector(`[data-y="${y}"]` && `[data-x="${x}"]`);
  console.log(moveTarget.dataset.x, moveTarget.dataset.x)
  moveTarget.append(player);
  console.log(moveTarget.dataset.x, moveTarget.dataset.x)

  console.log(x, y);

}
