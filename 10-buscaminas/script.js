$(document).ready(function() {

var $body,
      $document,
      $board,
      $grid,
      timer,
      time,
      unstarted;

  function _init() {
    // Cache some common DOM queries
    $document = $(document);
    $body = $('body');
    $body.addClass('loaded');

    // Start Minesweeper
    $board = $('#board');
    $grid = $('#grid');
    var $timer = $('#timer');
    var $mineCounter = $('#minecounter');
    var $levelSelect = $('#level');
    var levels = {
      'beginner': '9x9x10',
      'intermediate': '16x16x44',
      'expert': '16x30x99'
    };
    var level = $levelSelect.val();
    var levelParams,
        rows,
        $rows,
        columns,
        cellCount,
        mines,
        freeCells,
        mineTally,
        pauseTime,
        beginnerHighScore = 999,
        intermediateHighScore = 999,
        expertHighScore = 999;

    var countColors = {0: '', 1: 'blue', 2: 'green', 3: 'red', 4: 'blue-dark', 5: 'maroon', 6: 'turquoise', 7: 'purple', 8: 'gray-dark'};

    time = 0;
    timer = false;
    unstarted = true;
    var statusIndicator = '<div class="status-indicator"></div>';

    // Check for existing high score
    // if (localStorage.getItem('beginner')) {
    //   beginnerHighScore = localStorage.getItem('beginner');
    //   populateHighScore('beginner', localStorage.getItem('beginner'));
    // }
    // if (localStorage.getItem('intermediate')) {
    //   intermediateHighScore = localStorage.getItem('intermediate');
    //   populateHighScore('intermediate', localStorage.getItem('intermediate'));
    // }
    // if (localStorage.getItem('expert')) {
    //   expertHighScore = localStorage.getItem('expert');
    //   populateHighScore('expert', localStorage.getItem('expert'));
    // }

    function setLevel(level) {
      levelParams = levels[level];
      rows = parseInt(levelParams.split('x')[0]);
      columns = parseInt(levelParams.split('x')[1]);
      cellCount = rows*columns;
      mines = levelParams.split('x')[2];
      freeCells = cellCount - mines;
    }

    function setBoard(level) {
      // Clear Grid
      $grid.html(statusIndicator).removeClass('disabled lose win').addClass('unstarted');

      // Set Up Grid
      setLevel(level);

      // Set unstarted
      unstarted = true;

      // Build Rows
      for (r=0;r<rows;r++) {
        var newCells = '';
        // Build Cells
        for (c=0;c<columns;c++) {
          newCells += '<div class="cell"></div>';
        }
        $grid.append('<div class="row">'+newCells+'</div>');
      }

      // Set Minecounter
      mineTally = mines;
      $mineCounter.html(mineTally);

      // Set Timer
      resetTimer();
    }

    // Set initially
    setBoard(level);
    // Set on reset
    $('html').on('mousedown', '.reset', function() {
      $(this).text('😮');
    }).on('mouseup', '.reset', function() {
      $(this).text('🙂');
      stopTimer();
      level = $levelSelect.val();
      setBoard(level);
    });
    // Set when clicking status indicator
    $('html').on('click', '.status-indicator', function() {
      level = $levelSelect.val();
      setBoard(level);
    });
    // Set on level change
    $levelSelect.on('change', function() {
      stopTimer();
      resetTimer();
      level = $levelSelect.val();
      setBoard(level);
    });

    // Lay Mines
    function layMines(level, clickedCellIndex) {
      $rows = $('.row');
      var freeCells = $('.cell');
      var takenCells = [clickedCellIndex];

      // Lay Mines
      for (m=0;m<mines;m++) {
        var mineCell = Math.floor(Math.random() * Math.floor(freeCells.length));
        // If it happens to be the clicked cell, skip it
        if ($.inArray(mineCell, takenCells) > -1) {
          m--;
          continue;
        }
        takenCells.push(mineCell);
        $(freeCells[mineCell]).addClass('mine');
      }

      // Identify Cell Numbers
      var $cells = $('.cell');
      for (c=0;c<$cells.length;c++) {
        var $cell = $($cells[c]);
        $cell.attr('data-cell', c);
        // Skip if it's a mine
        if ($cell.is('.mine')) {
          continue;
        }

        var mineCount = 0;
        var rowPos = Math.floor(c/columns);
        var $currentRow = $cell.closest('.row');
        $currentRow.attr('data-row', rowPos);
        var rowCells = $currentRow.find('.cell');
        var cellPos = c % columns;

        if ($(rowCells[cellPos - 1]).is('.mine')) {
          mineCount++;
        }
        if ($(rowCells[cellPos + 1]).is('.mine')) {
          mineCount++;
        }

        if (rowPos > 0) {
          var prevRowCells = $($rows[rowPos - 1]).find('.cell');
          if ($(prevRowCells[cellPos - 1]).is('.mine')) {
            mineCount++;
          }
          if ($(prevRowCells[cellPos]).is('.mine')) {
            mineCount++;
          }
          if ($(prevRowCells[cellPos + 1]).is('.mine')) {
            mineCount++;
          }
        }

        if (rowPos < rows - 1) {
          var nextRowCells = $($rows[rowPos + 1]).find('.cell');
          if ($(nextRowCells[cellPos - 1]).is('.mine')) {
            mineCount++;
          }
          if ($(nextRowCells[cellPos]).is('.mine')) {
            mineCount++;
          }
          if ($(nextRowCells[cellPos + 1]).is('.mine')) {
            mineCount++;
          }
        }

        if (mineCount > 0) {
          $cell.html('<i>'+mineCount+'</i>');
          // Styling classes
          var colorClass = countColors[mineCount];
          $cell.addClass(colorClass);
        } else {
          $cell.addClass('zero');
        }
      }
    }

    // Click cell to start game
    $('html').off('click', '#grid.unstarted .cell').on('click', '#grid.unstarted .cell', function(e) {
      $grid.removeClass('unstarted');
      if (unstarted && !$(e.target).is('.mine')) {
        layMines(level, $('.cell').index(this));
        timer = window.setInterval(startTimer, 1000);
        unstarted = false;
      }
    });

    // Timer Functions
    function resetTimer() {
      $timer.html('000');
      time = 0;
    }
    function startTimer() {
      time++;
      if (time < 10) {
        $timer.html('00'+time);
      } else if (time > 9 && time < 100) {
        $timer.html('0'+time);
      } else {
        $timer.html(time);
      }
    }

    function stopTimer() {
      window.clearInterval(timer);
    }

    function pauseTimer() {
      stopTimer();
      pauseTime = parseInt($('#timer').html());
    }

    function unpauseTimer() {
      time = pauseTime;
      timer = window.setInterval(startTimer, 1000);
      pauseTime = false;
    }

    // Pause when window loses focus
    $(window).on('blur', function() {
      pauseTimer();
    }).on('focus', function() {
      if (pauseTime) {
        unpauseTimer();
      }
    });

    // Check Cell
    function checkCell($cell) {
      if (!$cell.is('.mine') && !$cell.is('.revealed')) {
        cellClick($cell, 'reveal');

        if ($cell.is('.zero')) {
          $cell.trigger('click');
        }
      }
    }

    // Clicking on a cell
    function cellClick($cell, action) {
      // If Flagging
      if (action === 'flag' && !$cell.is('.revealed')) {
        if ($cell.is('.flagged')) {
          $cell.removeClass('flagged');
          $cell.addClass('maybe');
          mineTally++;
          updateMinecounter(mineTally);
        } else if ($cell.is('.maybe')) {
          $cell.removeClass('maybe');
          var flag = $cell.find('.flag');
          flag.remove();
        } else {
          $cell.addClass('flagged');
          $cell.append('<span class="flag"></span>');
          mineTally--;
          updateMinecounter(mineTally);
        }
        // If Revealing
      } else if (action === 'reveal') {
        $cell.addClass('revealed');

        // If it's a mine you lose!
        if ($cell.is('.mine')) {
          lose();
        }

        statusCheck();
      } else if (action === 'clear') {
        if (!$cell.is('.revealed') || $cell.is('.zero')) {
          return;
        }

        clearClick($cell);
      }
    }

    // Update Minecounter
    function updateMinecounter(mineTally) {
      if (mineTally < 10) {
        $mineCounter.html('0'+mineTally);
      } else {
        $mineCounter.html(mineTally);
      }
    }

    // Clicking on a Zero cell
    function zeroClick($cell) {
      var cellPos = $cell.prevAll().length;
      var $currentRow = $cell.closest('.row');
      var rowPos = parseInt($currentRow.attr('data-row'));
      var rowCells = $currentRow.find('.cell');

      checkCell($(rowCells[cellPos - 1]));
      checkCell($(rowCells[cellPos + 1]));

      if (rowPos > 0) {
        var prevRowCells = $($rows[rowPos - 1]).find('.cell');
        checkCell($(prevRowCells[cellPos - 1]));
        checkCell($(prevRowCells[cellPos]));
        checkCell($(prevRowCells[cellPos + 1]));
      }

      if (rowPos < rows) {
        var nextRowCells = $($rows[rowPos + 1]).find('.cell');
        checkCell($(nextRowCells[cellPos - 1]));
        checkCell($(nextRowCells[cellPos]));
        checkCell($(nextRowCells[cellPos + 1]));
      }
    }

    // Clicking on a number to clear free cells
    function clearClick($cell) {
      var cellPos = $cell.prevAll().length;
      var $currentRow = $cell.closest('.row');
      var rowPos = parseInt($currentRow.attr('data-row'));
      var rowCells = $currentRow.find('.cell');
      var adjacentCells = [];
      var correctClear = true;
      var adjacentMines = 0;
      var adjacentFlags = 0;
      var i;
      adjacentCells.push($(rowCells[cellPos - 1]));
      adjacentCells.push($(rowCells[cellPos + 1]));

      if (rowPos > 0) {
        var prevRowCells = $($rows[rowPos - 1]).find('.cell');
        adjacentCells.push($(prevRowCells[cellPos - 1]));
        adjacentCells.push($(prevRowCells[cellPos]));
        adjacentCells.push($(prevRowCells[cellPos + 1]));
      }

      if (rowPos < rows) {
        var nextRowCells = $($rows[rowPos + 1]).find('.cell');
        adjacentCells.push($(nextRowCells[cellPos - 1]));
        adjacentCells.push($(nextRowCells[cellPos]));
        adjacentCells.push($(nextRowCells[cellPos + 1]));
      }

      for (i = 0; i < adjacentCells.length; i++) {
        // add to mine count
        if ($(adjacentCells[i]).is('.mine')) {
          adjacentMines++;
        }
        // add to flag cout
        if ($(adjacentCells[i]).is('.flagged')) {
          adjacentFlags++;
        }
      }

      if (adjacentFlags === adjacentMines) {
        for (i = 0; i < adjacentCells.length; i++) {
          if ($(adjacentCells[i]).is('.mine')) {
            if ($(adjacentCells[i]).is('.flagged')) {
              continue;
            } else {
              $(adjacentCells[i]).addClass('revealed');
              correctClear = false;
            }
          } else if ($(adjacentCells[i]).is('.flagged')) {
            correctClear = false;
            $(adjacentCells[i]).addClass('incorrect');
            lose();
          }
        }

        if (correctClear) {
          for (i = 0; i < adjacentCells.length; i++) {
            if (!$(adjacentCells[i]).is('.mine')) {
              if ($(adjacentCells[i]).is('.zero')) {
                zeroClick($(adjacentCells[i]));
              }
              cellClick($(adjacentCells[i]), 'reveal');
            }
          }
        }
      } else {
        return;
      }
    }

    // Check status
    function statusCheck() {
      if ($('.cell.revealed').length == freeCells) {
        stopTimer();
        var winTime = $('#timer').html();
        $grid.addClass('disabled win');
        resetHighScore(level, winTime);
      }
    }

    function lose() {
      $grid.addClass('disabled lose');
      stopTimer();
    }

    // Clicking on a cell
    $('html').on('click', '.cell', function(e) {
      e.preventDefault();
      var action = 'reveal';
      var $cell = $(this);

      if (e.altKey || e.which === 3) {
        action = 'flag';
      } else if ($cell.is('.revealed') || e.which === 1 & e.which === 3) {
        action = 'clear';
      }

      if ($cell.is('.flagged') && !e.altKey) {
        return;
      }

      if ($cell.is('.zero')) {
        zeroClick($cell);
      }

      cellClick($cell, action);
    });

    // Mouse down on a cell
    $('html').on('mousedown', '.cell:not(.revealed,.flagged)', function(e) {
      if (!e.altKey && e.which !== 3) {
        $(this).addClass('mousedown');
      }
    }).on('mouseup mouseleave', '.cell.mousedown', function() {
      $(this).removeClass('mousedown');
    });

    // Scoreboard functionality
    function resetHighScore(level, winTime) {
      if (localStorage.getItem(level)) {
        if (winTime < localStorage.getItem(level)) {
          localStorage.setItem(level, winTime);
          populateHighScore(level, winTime, true);
        }
      } else {
        localStorage.setItem(level, winTime);
        populateHighScore(level, winTime, true);
      }
    }

    function populateHighScore(level, highScore, highlight) {
      if (!$('#leaderboard').length) {
        $board.find('.bottom').append('<div id="leaderboard"><h4>High Scores</h4><ul><li class="beginner"></li><li class="intermediate"></li><li class="expert"></li></ul><div><button id="score-reset" class="score-reset">Clear Scores</button></div></div>');
      }
      if (highlight === true) {
        $('#leaderboard .highlight:not(.'+level+')').removeClass('highlight');
        $('#leaderboard .'+level).addClass('highlight');
      }
      var highScoreDisplay = parseInt(highScore,10);
      $('#leaderboard .'+level).html('<span>'+level+'</span>: '+highScoreDisplay+' seconds');
    }

    function clearScores() {
      localStorage.clear();
      $('#leaderboard').remove();
    }

    // Clicking on score reset to clear scores
    $('html').on('click', '#score-reset', clearScores);
  }

  _init();
});