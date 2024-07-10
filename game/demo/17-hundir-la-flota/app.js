document.addEventListener("DOMContentLoaded", () => {
    const playerBoard = document.getElementById("player-board");
    const startButton = document.getElementById("start-game");

    const shipSizes = [4, 4, 5, 3, 3, 3, 2, 2, 2, 2];
    const ships = [];
    let currentShipIndex = 0;

    createBoard(playerBoard);

    function createBoard(board) {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            cell.addEventListener("click", () => handleCellClick(cell));
            board.appendChild(cell);
        }
    }

    function handleCellClick(cell) {
        const index = parseInt(cell.dataset.index);
        if (canPlaceShip(index, shipSizes[currentShipIndex])) {
            const ship = {
                size: shipSizes[currentShipIndex],
                positions: []
            };
            placeShip(ship, index);
            ships.push(ship);
            currentShipIndex++;
            if (currentShipIndex >= shipSizes.length) {
                // All ships placed, disable board and show start button
                disableBoard();
                startButton.style.display = "block";
            }
        } else {
            console.log("Can't place ship here.");
        }
    }

    function canPlaceShip(startIndex, size) {
        const endPosition = startIndex + size - 1;
        if (endPosition % 10 < startIndex % 10 + size - 1) {
            // Ship exceeds board boundaries horizontally
            return false;
        }
        for (let i = startIndex; i <= endPosition; i++) {
            if (ships.some(ship => ship.positions.includes(i))) {
                // Overlaps with existing ship
                return false;
            }
        }
        return true;
    }

    function placeShip(ship, startIndex) {
        const endPosition = startIndex + ship.size - 1;
        for (let i = startIndex; i <= endPosition; i++) {
            const cell = playerBoard.querySelector(`.cell[data-index="${i}"]`);
            cell.classList.add("ship");
            ship.positions.push(i);
        }
    }

    function disableBoard() {
        const cells = playerBoard.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.removeEventListener("click", handleCellClick);
            if (!cell.classList.contains("ship")) {
                cell.style.cursor = "not-allowed";
            }
        });
    }

    startButton.addEventListener("click", () => {
        // Start the game or proceed with further logic
        console.log("Starting the game with ships:", ships);
        // Implement the logic to start the game here
        // For example, you can hide the player board, show the computer board,
        // and start the computer's turn or any other necessary steps.
    });
});
