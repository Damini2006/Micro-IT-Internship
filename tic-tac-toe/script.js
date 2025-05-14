let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameOver = false;

const cells = document.querySelectorAll(".cell");
const statusDiv = document.getElementById("status");

cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

function handleClick(event) {
  const index = event.target.dataset.index;

  if (board[index] === "" && !isGameOver) {
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWinner()) {
      statusDiv.textContent = `${currentPlayer} wins! 🎉`;
      isGameOver = true;
    } else if (board.every(cell => cell !== "")) {
      statusDiv.textContent = "It's a draw! 😐";
      isGameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusDiv.textContent = `${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]            // diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameOver = false;
  statusDiv.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
}
