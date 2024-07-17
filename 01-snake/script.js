document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
  
    const tileSize = 20;
    const tileCountX = canvas.width / tileSize;
    const tileCountY = canvas.height / tileSize;
  
    let snake = [{ x: 10, y: 10 }];
    let apple = { x: 15, y: 15 };
    let dx = 0;
    let dy = 0;
    let gameOver = false;
    let restartButtonCreated = false;
  
    document.addEventListener('keydown', changeDirection);
  
    function changeDirection(event) {
      if (gameOver) return;
      const keyPressed = event.key.toLowerCase(); // Convertimos la tecla a minúsculas
      switch (keyPressed) {
        case 'w': // Tecla W
          if (dy !== 1) {
            dx = 0;
            dy = -1;
          }
          break;
        case 's': // Tecla S
          if (dy !== -1) {
            dx = 0;
            dy = 1;
          }
          break;
        case 'a': // Tecla A
          if (dx !== 1) {
            dx = -1;
            dy = 0;
          }
          break;
        case 'd': // Tecla D
          if (dx !== -1) {
            dx = 1;
            dy = 0;
          }
          break;
        case 'arrowup':
        case 'arrowdown':
        case 'arrowleft':
        case 'arrowright':
          event.preventDefault(); // Evitamos que la página se desplace con las flechas
          break;
      }
    }
  
    function drawSnakePart(snakePart) {
      ctx.fillStyle = '#00a300'; // Color verde para la serpiente
      ctx.fillRect(snakePart.x * tileSize, snakePart.y * tileSize, tileSize, tileSize);
      ctx.strokeStyle = '#fff'; // Borde blanco alrededor de cada parte de la serpiente
      ctx.strokeRect(snakePart.x * tileSize, snakePart.y * tileSize, tileSize, tileSize);
    }
  
    function drawApple() {
      ctx.fillStyle = '#ff3333'; // Color rojo para la manzana
      ctx.beginPath();
      ctx.arc((apple.x + 0.5) * tileSize, (apple.y + 0.5) * tileSize, tileSize / 2, 0, Math.PI * 2); // Dibujar un círculo en lugar de un rectángulo para la manzana
      ctx.fill();
      ctx.strokeStyle = '#fff'; // Borde blanco alrededor de la manzana
      ctx.stroke();
    }
    function drawSnake() {
      snake.forEach(drawSnakePart);
    }
  
    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
      if (head.x === apple.x && head.y === apple.y) {
        generateApple();
      } else {
        snake.pop();
      }
      checkCollision();
    }
  
    function generateApple() {
      apple.x = Math.floor(Math.random() * tileCountX);
      apple.y = Math.floor(Math.random() * tileCountY);
    }
  
    function checkCollision() {
      if (
        snake[0].x < 0 ||
        snake[0].x >= tileCountX ||
        snake[0].y < 0 ||
        snake[0].y >= tileCountY ||
        checkSelfCollision()
      ) {
        gameOver = true;
        endGame();
      }
    }
  
    function checkSelfCollision() {
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
          return true;
        }
      }
      return false;
    }
  
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function drawGameOver() {
        ctx.fillStyle = 'black';
        ctx.font = '40px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2);
        if (!restartButtonCreated) {
          const button = document.createElement('button');
          button.textContent = 'Volver a Jugar';
          button.classList.add('game-over');
          button.addEventListener('click', restartGame);
          document.body.appendChild(button);
          restartButtonCreated = true;
        }
      }
      
  
    function restartGame() {
      snake = [{ x: 10, y: 10 }];
      apple = { x: 15, y: 15 };
      dx = 0;
      dy = 0;
      gameOver = false;
      restartButtonCreated = false;
      const button = document.querySelector('button');
      if (button) button.remove();
    }
  
    function draw() {
      if (gameOver) {
        drawGameOver();
        return;
      }
      clearCanvas();
      drawSnake();
      drawApple();
    }
  
    function update() {
      if (gameOver) return;
      moveSnake();
    }
  
    function main() {
      update();
      draw();
    }
  
    setInterval(main, 100);
  });
  