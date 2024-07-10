document.addEventListener("DOMContentLoaded", () => {
    const playerBoard = document.getElementById("player-board");
    const computerBoard = document.getElementById("computer-board");
    const statusDisplay = document.getElementById("status");
    const turnoDisplay = document.getElementById("turno");
    const playerShipsLeftDisplay = document.getElementById("player-ships-left");
    const computerShipsLeftDisplay = document.getElementById("computer-ships-left");
    const restartButton = document.getElementById("restart-button");

    const shipSizes = [4, 4, 5, 3, 2, 2];
    let playerShips, computerShips;
    let playerShipCount, computerShipCount;

    const createBoard = (board, isPlayer = true) => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            if (!isPlayer) {
                cell.addEventListener("click", handleCellClick);
            }
            board.appendChild(cell);
        }
    };

    const initializeGame = () => {
        playerBoard.innerHTML = '';
        computerBoard.innerHTML = '';
        createBoard(playerBoard);
        createBoard(computerBoard, false);

        playerCells = playerBoard.querySelectorAll(".cell");
        computerCells = computerBoard.querySelectorAll(".cell");

        playerShips = placeShipsRandomly();
        computerShips = placeShipsRandomly();

        playerShipCount = countShipsRemaining(playerShips);
        computerShipCount = countShipsRemaining(computerShips);

        updateShipCounts();
        statusDisplay.textContent = "";
        turnoDisplay.textContent = "¡Tu turno!";
        restartButton.style.display = "none";
    };

    const placeShipsRandomly = () => {
        const shipPositions = [];

        const isValidPosition = (positions) => {
            return positions.every(pos => {
                return !shipPositions.some(ship => ship.positions.includes(pos)) && pos >= 0 && pos < 100 && Math.floor(pos / 10) === Math.floor(positions[0] / 10);
            });
        };

        const placeShip = (size) => {
            let positions;
            let direction;
            do {
                positions = [];
                direction = Math.random() < 0.5 ? 'H' : 'V';
                const start = Math.floor(Math.random() * 100);
                for (let i = 0; i < size; i++) {
                    if (direction === 'H') {
                        positions.push(start + i);
                    } else {
                        positions.push(start + i * 10);
                    }
                }
            } while (!isValidPosition(positions));

            shipPositions.push({ size, positions });
        };

        shipSizes.forEach(size => placeShip(size));

        return shipPositions;
    };

    const countShipsRemaining = (ships) => {
        return ships.reduce((total, ship) => total + (ship.positions.length > 0 ? 1 : 0), 0);
    };

    const hitShip = (ships, index) => {
        for (let ship of ships) {
            if (ship.positions.includes(index)) {
                ship.positions = ship.positions.filter(pos => pos !== index);
                return true;
            }
        }
        return false;
    };

    const updateShipCounts = () => {
        playerShipsLeftDisplay.textContent = playerShipCount;
        computerShipsLeftDisplay.textContent = computerShipCount;
    };

    const handleCellClick = (e) => {
        const index = parseInt(e.target.dataset.index);
        if (hitShip(computerShips, index)) {
            e.target.classList.add("hit");
            computerShipCount = countShipsRemaining(computerShips);
            updateShipCounts();
            if (computerShipCount === 0) {
                statusDisplay.textContent = "¡Has ganado! Hundiste todos los barcos del oponente.";
                turnoDisplay.textContent = "¡Juego terminado!";
                disableAllClicks();
                restartButton.style.display = "block";
                return;
            } else {
                statusDisplay.textContent = "¡Tocado! Sigue disparando.";
            }
        } else {
            e.target.classList.add("miss");
            statusDisplay.textContent = "¡Fallaste! Intenta de nuevo.";
        }
        e.target.removeEventListener("click", handleCellClick);
        
        turnoDisplay.textContent = "Turno de la computadora";
        disableAllClicks();
        setTimeout(computerTurn, 1500);
    };

    const disableAllClicks = () => {
        computerCells.forEach(cell => {
            cell.removeEventListener("click", handleCellClick);
        });
    };

    const enableAllClicks = () => {
        computerCells.forEach(cell => {
            if (!cell.classList.contains("hit") && !cell.classList.contains("miss")) {
                cell.addEventListener("click", handleCellClick);
            }
        });
    };

    const computerTurn = () => {
        let index;
        if (lastHitIndex !== undefined && canContinueInDirection()) {
            // Continue shooting in the same direction
            index = getNextIndexInDirection(lastHitIndex, lastDirection);
        } else {
            // Shoot based on strategic search
            index = getNextStrategicIndex();
        }

        if (hitShip(playerShips, index)) {
            playerCells[index].classList.add("hit");
            playerShipCount = countShipsRemaining(playerShips);
            updateShipCounts();
            if (playerShipCount === 0) {
                statusDisplay.textContent = "¡La computadora ha ganado! Hundió todos tus barcos.";
                turnoDisplay.textContent = "¡Juego terminado!";
                restartButton.style.display = "block";
                return;
            } else {
                statusDisplay.textContent = "La computadora acertó uno de tus barcos.";
                if (lastHitIndex === undefined) {
                    lastHitIndex = index;
                }
                // Determine next direction
                determineNextDirection(index);
            }
        } else {
            playerCells[index].classList.add("miss");
            statusDisplay.textContent = "La computadora falló.";
        }

        turnoDisplay.textContent = "¡Tu turno!";
        enableAllClicks();
    };

    let lastHitIndex;
    let lastDirection;

    const canContinueInDirection = () => {
        const nextIndex = getNextIndexInDirection(lastHitIndex, lastDirection);
        return nextIndex >= 0 && nextIndex < 100 && !playerCells[nextIndex].classList.contains("hit") && !playerCells[nextIndex].classList.contains("miss");
    };

    const getNextIndexInDirection = (currentIndex, direction) => {
        switch (direction) {
            case 'left':
                return currentIndex - 1;
            case 'right':
                return currentIndex + 1;
            case 'up':
                return currentIndex - 10;
            case 'down':
                return currentIndex + 10;
            default:
                return -1;
        }
    };

    const determineNextDirection = (index) => {
        const adjacentIndexes = [index - 1, index + 1, index - 10, index + 10].filter(idx => idx >= 0 && idx < 100 && !playerCells[idx].classList.contains("hit") && !playerCells[idx].classList.contains("miss"));
        if (adjacentIndexes.length > 0) {
            const randomIndex = Math.floor(Math.random() * adjacentIndexes.length);
            const directionIndex = adjacentIndexes[randomIndex];
            if (directionIndex === index - 1) {
                lastDirection = 'left';
            } else if (directionIndex === index + 1) {
                lastDirection = 'right';
            } else if (directionIndex === index - 10) {
                lastDirection = 'up';
            } else if (directionIndex === index + 10) {
                lastDirection = 'down';
            }
        } else {
            lastDirection = undefined;
        }
    };

    const getNextStrategicIndex = () => {
        let strategicIndex = findStrategicIndex();
        if (strategicIndex === -1) {
            // If no strategic index found, shoot randomly
            strategicIndex = getRandomIndex();
        }
        return strategicIndex;
    };

    const findStrategicIndex = () => {
        // Try to find the next strategic index based on previous hits and misses
        // You can implement more sophisticated strategies here
        // For simplicity, we'll just shoot adjacent cells until we find a hit or shoot randomly
        const strategicIndexes = [];
        playerCells.forEach((cell, idx) => {
            if (cell.classList.contains("hit")) {
                const adjacentIndexes = [idx - 1, idx + 1, idx - 10, idx + 10].filter(adjIdx => adjIdx >= 0 && adjIdx < 100 && !playerCells[adjIdx].classList.contains("hit") && !playerCells[adjIdx].classList.contains("miss"));
                strategicIndexes.push(...adjacentIndexes);
            }
        });
        return strategicIndexes.length > 0 ? strategicIndexes[Math.floor(Math.random() * strategicIndexes.length)] : -1;
    };

    const getRandomIndex = () => {
        let index;
        do {
            index = Math.floor(Math.random() * 100);
        } while (playerCells[index].classList.contains("hit") || playerCells[index].classList.contains("miss"));
        return index;
    };

    restartButton.addEventListener("click", initializeGame);

    turnoDisplay.textContent = "¡Tu turno!";

    initializeGame();
});
