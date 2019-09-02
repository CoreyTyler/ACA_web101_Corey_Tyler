let player;

function changeToX() {
  player = "x";
}

function changeToO() {
  player = "O";
}

function placeMark(element) {
  var cell = document.getElementById(element.id);

  cell.innerText = player;
}
