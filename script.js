document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const ROWS = 20;
    const COLS = 10;
    let boardArray = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

    function drawBoard() {
        board.innerHTML = '';
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const cell = document.createElement('div');
                cell.className = `cell ${boardArray[row][col] ? 'filled' : ''}`;
                board.appendChild(cell);
            }
        }
    }

    function updateBoard() {
        // Logic to update the boardArray based on game logic goes here
        // For simplicity, we are not implementing the actual Tetris logic in this example
    }

    function gameLoop() {
        updateBoard();
        drawBoard();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
