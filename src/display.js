const display = (() => {
  const main = document.querySelector('main');
  const home = (() => {
    const playButton = document.querySelector('#play-button');
    return {playButton};
  })();

  const clean = function() {
    while(main.firstChild) {
      main.removeChild(main.lastChild);
    }
  };

  const playerScreen = (() => {
    const onePlayerButton = document.createElement('button');
    onePlayerButton.id = 'one-player-button';
    onePlayerButton.textContent = 'ONE PLAYER';
    const load = function() {
      clean(main);
      main.appendChild(onePlayerButton);
    }

    return {onePlayerButton, load};
  })();

  const game = (() => {
    const loadGameboard = function() {
      const frame = document.createElement('div');
      frame.classList.add('board-frame');
      const grid = [];
      for(let i = 0; i<10; i++) {
        grid.push([]);
        for(let j = 0; j<10; j++){
          grid[i].push(document.createElement('div'));
          grid[i][j].classList.add('board-grid');
          grid[i][j].dataset.x = i;
          grid[i][j].dataset.y = j;
        }
      }

      for(let i = 0; i<10; i++) {
        for(let j = 0; j<10; j++){
          frame.appendChild(grid[j][i]);
        }
      }

      return {
        frame,
        grid
      };
    }

    const layoutGameboard = loadGameboard();
    const recordGameboard = loadGameboard();
    const load = function() {
      clean();
      const container = document.createElement('div');
      container.id = 'game-container';
      container.append(layoutGameboard.frame, recordGameboard.frame);
      main.appendChild(container);
    }

    const updateLayout = function(referenceGameboard) {
      for(let i = 0; i<10; i++) {
        for(let j = 0; j<10; j++) {
          const referenceCell = referenceGameboard[i][j];
          const layoutCell = layoutGameboard.grid[i][j];
          if(referenceCell === 'hit') {
            layoutCell.classList.add('self-hit');
          }
          else if(referenceCell === 'miss') {
            layoutCell.classList.add('self-miss');
          }
          else if((referenceCell !== 'water') && (referenceCell !== null)) {
            layoutCell.classList.add('ship');
          }
        }
      }
    }

    const updateRecord = function(referenceGameboard) {
      for(let i = 0; i<10; i++) {
        for(let j = 0; j<10; j++) {
          const referenceCell = referenceGameboard[i][j];
          const recordCell = recordGameboard.grid[i][j];
          if(referenceCell === 'hit') {
            recordCell.classList.add('hit');
          }
          else if(referenceCell === 'miss') {
            recordCell.classList.add('miss');
          }
        }
      }
    }

    const addRecordAction = function(callback) {
      recordGameboard.grid.forEach(column => {
        column.forEach(cell => {
          cell.addEventListener('click', function(event) {
            const x = event.target.dataset.x;
            const y = event.target.dataset.y;
            callback(x, y);
          });
        });
      });
    }

    const loadGameOverScreen = function(winner) {
      const blockingScreen = document.createElement('div');
      blockingScreen.id = 'blocking-screen';
      const gameOverSign = document.createElement('div');
      gameOverSign.id = 'game-over-sign';
      gameOverSign.textContent = `GAME OVER: ${winner} wins!`;
      blockingScreen.appendChild(gameOverSign);
      main.appendChild(blockingScreen);
    }

    return {
      load,
      updateLayout,
      updateRecord,
      addRecordAction,
      loadGameOverScreen
    };
  })();

  return {
    home,
    playerScreen,
    game
  };
})();

export {
  display
};
