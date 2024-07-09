let players = ['x', 'o'];
let playingField;
let activePlayer = 0;

startGame();

function startGame() {
  playingField = [
    ['', '', ''],
    ['', '', ''], 
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(playingField);
}

function click(row, col) {
  // 1. Обновить игровое поле, записать в нужную ячейку символ игрока.
  playingField[row][col] = players[activePlayer];

  // 2. Вызвать функцию `renderBoard` для отрисовки нового состояния игрового поля.
  renderBoard(playingField);

  // 3. Проверить, выигрышная ли сложилась ситуация.
  
  if (variantsWinSituation(row, col) === true) {
    // 4. Если ситуация выигрышная, вызвать функцию `showWinner` и передать в неё номер игрока.
    showWinner(activePlayer);
    startGame();
  } else {
    // 5. Если нужно играть дальше, то передать ход следующему игроку.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  }
}

function variantsWinSituation(row, col) {
  // Выигрышные ситуации:
  if (playingField[0][0] === players[activePlayer] && playingField[1][1] === players[activePlayer] && playingField[2][2] === players[activePlayer]) {
    // По диагонали - \
    return true;
  } else if (playingField[0][2] === players[activePlayer] && playingField[1][1] === players[activePlayer] && playingField[2][0] === players[activePlayer]) {
    // По диагонали - /
    return true;
  } else if (playingField[row][0] === players[activePlayer] && playingField[row][1] === players[activePlayer] && playingField[row][2] === players[activePlayer]) {
    // По горизонтали
    return true;
  } else if (playingField[0][col] === players[activePlayer] && playingField[1][col] === players[activePlayer] && playingField[2][col] === players[activePlayer]) {
    // По вертикали
    return true;
  } else {
    // Если выигрышные ситуации отсутствуют.
    return false;
  }
}