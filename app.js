(function(){
  /* ================= i18n ================= */
  const text = {
    en: {
      prompt_user: "Please choose a cell.(1-9): ",
      choose_symbol: "Please choose your symbol (X or O): ",
      enter_name: "Please, enter your name.(only letters and numbers allowed): ",
      welcome_message: "{user_name} ,welcome to Tic Tac Toe Game ! \nYour goal is to get three of your marks (X) in a row, either horizontally, vertically, or diagonally,\nbefore your opponent,in our case the computer, does.\nThe game is played on a 3x3 grid, numbered from 1 to 9, as shown below:",
      machine_turn: "\nIt's my turn",
      player_wins: "\nCongratulations! You win in {current_move} turns",
      machine_wins: "\nToo bad! The machine wins this time in {current_move} turns",
      tie: "\nIt's a tie! Well played!",
      sample_board: "| 1 | 2 | 3\n| 4 | 5 | 6\n| 7 | 8 | 9\n",
      separator: "==========================================================",
      cell_taken: "This cell is already taken. Please choose another one.",
      invalid_cell: "Invalid cell number! Please choose a cell. (an integer from 1 to 9): ",
      player_turn_prompt: "It's your turn!",
      continue_game: "\nDo you want to play again? pres Y to continue or any key for exit: ",
      exit_game: "Thanks for playing! Goodbye!",
      machine_thinking: "🤔 I'm thinking",
      result: "Result You {player_wins} : Machine {machine_wins}",
      final_result: "Final result:\nYou {player_wins} : Machine {machine_wins}",
      prompt_to_chose_language: "Please choose your language / Моля, изберете език:\n1. English\n2. Български\nEnter the number of your choice: ",
      invalid_input: "Invalid choice",
      prompt_to_chose_level: "Please choose a difficulty level:\n1. Easy\n2. Hard\nEnter the number of your choice: ",
      // UI strings
      ui_lang: "Language",
      ui_name: "Name",
      ui_level: "Level",
      ui_symbol: "Symbol",
      ui_easy: "Easy",
      ui_hard: "Hard",
      ui_start: "Start Game",
      ui_new: "New Session",
      ui_replay: "Play Again",
      ui_you: "You",
      ui_machine: "Machine",
      ui_total: "Total games",
      ui_intro: "Choose settings and click Start Game. Click a cell to play.",
      ui_welcome: (u)=>`Welcome, ${u}!`,
      ui_machine_turn: "It's my turn…",
      ui_your_turn: "Your turn",
      ui_invalid_name: "Name must be letters/numbers only",
      ui_thinking: "🤔 I'm thinking",
      ui_first: (p)=> p==='player'? 'You start first' : 'Computer starts first',
      ui_result_line: (p,m)=>`Result You: ${p} • Machine: ${m}`,
      ui_game_over: "Game over",
    },
    bg: {
      prompt_user: "Моля, избери клетка (от 1 до 9): ",
      choose_symbol: "Моля, избери своя символ (X или O): ",
      enter_name: "Моля, въведи своето име (разрешени са само букви и цифри): ",
      welcome_message: "{user_name}, добре дошъл в играта Морски шах!\nЦелта ти е да подредиш три еднакви символа (X) в редица – хоризонтално, вертикално или по диагонал,\nпреди противникът ти (в случая компютърът) да го направи.\nИграта се играе върху поле 3x3, номерирано от 1 до 9, както е показано по-долу:",
      machine_turn: "\nМой ред е",
      player_wins: "\nПоздравления! Ти победи за {current_move} хода",
      machine_wins: "\nЕ, този път спечелих аз — и то само за {current_move} хода! Готов ли си за реванш?",
      tie: "\nРавенство! Добра игра!",
      sample_board: "| 1 | 2 | 3\n| 4 | 5 | 6\n| 7 | 8 | 9\n",
      separator: "=============================================================",
      cell_taken: "Тази клетка вече е заета. Моля, избери друга.",
      invalid_cell: "Невалиден номер на клетка! Моля, избери цяло число от 1 до 9: ",
      player_turn_prompt: "Твой ред е!",
      continue_game: "\nИскаш ли да играеш отново? Натисни Y за продължение или друг клавиш за изход: ",
      exit_game: "Благодарим за участието! Довиждане!",
      machine_thinking: "🤔 Мисля...",
      result: "Резултат Ти: {player_wins} : Машина: {machine_wins}",
      final_result: "Краен резултат:\nТи: {player_wins} : Машина: {machine_wins}",
      prompt_to_chose_level: "Моля, изберете ниво на трудност:\n1. Лесно\n2. Трудно\nВъведете номера на избора си: ",
      invalid_input: "Невалиден избор",
      // UI strings
      ui_lang: "Език",
      ui_name: "Име",
      ui_level: "Ниво",
      ui_symbol: "Символ",
      ui_easy: "Лесно",
      ui_hard: "Трудно",
      ui_start: "Започни игра",
      ui_new: "Нова сесия",
      ui_replay: "Играй пак",
      ui_you: "Ти",
      ui_machine: "Машина",
      ui_total: "Общо игри",
      ui_intro: "Избери настройки и натисни „Започни игра“. Кликни клетка, за да играеш.",
      ui_welcome: (u)=>`Добре дошъл, ${u}!`,
      ui_machine_turn: "Мой ред е…",
      ui_your_turn: "Твой ред",
      ui_invalid_name: "Името трябва да съдържа само букви/цифри",
      ui_thinking: "🤔 Мисля",
      ui_first: (p)=> p==='player'? 'Ти започваш пръв' : 'Компютърът започва пръв',
      ui_result_line: (p,m)=>`Резултат Ти: ${p} • Машина: ${m}`,
      ui_game_over: "Край на играта",
    }
  };

  /* ============== State ============== */
  const state = {
    lang: 'bg',
    level: 'easy',
    playerName: '',
    playerSymbol: 'X',
    machineSymbol: 'O',
    board: [ [' ',' ',' '], [' ',' ',' '], [' ',' ',' '] ],
    empty: {},
    firstThree: [],
    currentMove: 0,
    firstMover: 'player',
    playerWins: 0,
    machineWins: 0,
    playing: false,
    locking: false,
    winLine: [], // array of [r,c]
  };

  const coordMap = {
    1:[0,0],2:[0,1],3:[0,2],
    4:[1,0],5:[1,1],6:[1,2],
    7:[2,0],8:[2,1],9:[2,2]
  };

  /* ============== DOM refs ============== */
  const el = (id)=>document.getElementById(id);
  const boardEl = el('board');
  const statusEl = el('status');
  const sampleEl = el('sample');
  const logEl = el('log');
  const youNum = el('you-num');
  const machineNum = el('machine-num');
  const totalNum = el('total-num');
  const badgeMode = el('badge-mode');
  const badgeLang = el('badge-lang');

  const lbl = {
    lang: el('label-lang'), name: el('label-name'), level: el('label-level'), symbol: el('label-symbol'),
    easy: el('txt-easy'), hard: el('txt-hard'),
    scYou: el('sc-you'), scMachine: el('sc-machine'), scTotal: el('sc-total'),
    footer: el('footer')
  };

  const inputs = {
    lang: el('select-lang'), name: el('input-name'),
    levelRadios: [...document.querySelectorAll('input[name="level"]')],
    symbolRadios: [...document.querySelectorAll('input[name="symbol"]')],
    btnStart: el('btn-start'), btnNew: el('btn-new'), btnReplay: el('btn-replay')
  };

  /* ============== Utils ============== */
  const fmt = (s, vars={})=> s.replace(/\{(\w+)\}/g, (_,k)=> vars[k] ?? `{${k}}`);
  const sleep = (ms)=> new Promise(r=>setTimeout(r, ms));
  const cloneBoard = (b)=> b.map(row=>row.slice());

  function setStatus(html){ statusEl.innerHTML = html; }
  function log(msg){
    const p = document.createElement('div');
    p.textContent = msg;
    logEl.prepend(p);
  }
  function setBadges(){
    badgeMode.textContent = state.level==='easy'? (text[state.lang].ui_easy) : (text[state.lang].ui_hard);
    badgeLang.textContent = state.lang.toUpperCase();
  }

  /* ============== Rendering ============== */
  function renderBoard(){
    boardEl.innerHTML='';
    for(let i=1;i<=9;i++){
      const cell = document.createElement('button');
      cell.className='cell';
      cell.dataset.key=String(i);
      const [r,c]=coordMap[i];
      const v = state.board[r][c];
      cell.textContent = v === ' ' ? '' : v;
      if(!state.playing || state.locking || v!==' '){ cell.classList.add('disabled'); }
      // mark winning line
      if(state.winLine.some(([rr,cc])=> rr===r && cc===c)){
        cell.classList.add('win');
      }
      cell.addEventListener('click', onCellClick);
      boardEl.appendChild(cell);
    }
  }

  function updateScore(){
    youNum.textContent = state.playerWins;
    machineNum.textContent = state.machineWins;
    totalNum.textContent = state.playerWins + state.machineWins;
  }

  function applyI18n(){
    const t = text[state.lang];
    lbl.lang.textContent = state.lang==='bg'? 'Език / Language' : 'Language / Език';
    lbl.name.textContent = t.ui_name;
    lbl.level.textContent = t.ui_level;
    lbl.symbol.textContent = t.ui_symbol;
    el('btn-start').textContent = (state.lang==='bg'? '▶️ '+t.ui_start : '▶️ '+t.ui_start);
    el('btn-new').textContent = (state.lang==='bg'? '🧹 '+t.ui_new : '🧹 '+t.ui_new);
    el('btn-replay').textContent = (state.lang==='bg'? '↻ '+t.ui_replay : '↻ '+t.ui_replay);
    lbl.easy.textContent = t.ui_easy;
    lbl.hard.textContent = t.ui_hard;
    lbl.scYou.textContent = t.ui_you;
    lbl.scMachine.textContent = t.ui_machine;
    lbl.scTotal.textContent = t.ui_total;
    setBadges();
    sampleEl.textContent = t.sample_board;
    setStatus(`<span class="muted">${t.ui_intro}</span>`);
  }

  /* ============== Game Logic mirror of Python ============== */
  function checkIfCellIsEmpty(mapping, matrix, desiredCell){
    const [r,c] = mapping[desiredCell];
    return matrix[r][c] === ' ';
  }

  function rowsSymbolCount(matrix, symbol, machineMode=false){
    for(let r=0;r<3;r++){
      const row = matrix[r];
      const cnt = row.filter(x=>x===symbol).length;
      if(cnt===3) return true;
      if(machineMode && cnt===2 && row.includes(' ')) return [r, row.indexOf(' ')];
    }
    return false;
  }
  function colSymbolCount(matrix, symbol, machineMode=false){
    for(let c=0;c<3;c++){
      const col=[matrix[0][c],matrix[1][c],matrix[2][c]];
      const cnt = col.filter(x=>x===symbol).length;
      if(cnt===3) return true;
      if(machineMode && cnt===2 && col.includes(' ')) return [col.indexOf(' '), c];
    }
    return false;
  }
  function countSymbolsInDiagonals(matrix, symbol, machineMode=false){
    const main=[matrix[0][0],matrix[1][1],matrix[2][2]];
    const sec=[matrix[0][2],matrix[1][1],matrix[2][0]];
    const mc=main.filter(x=>x===symbol).length;
    const sc=sec.filter(x=>x===symbol).length;
    if(mc===3||sc===3) return true;
    if(machineMode){
      if(mc===2 && main.includes(' ')){
        const i=main.indexOf(' '); return [i,i];
      }
      if(sc===2 && sec.includes(' ')){
        const i=sec.indexOf(' '); const col=2-i; return [i,col];
      }
    }
    return false;
  }
  function checkForWinner(matrix, symbol){
    return rowsSymbolCount(matrix,symbol)||colSymbolCount(matrix,symbol)||countSymbolsInDiagonals(matrix,symbol);
  }

  function randomKey(obj){ const keys=Object.keys(obj); return Number(keys[Math.floor(Math.random()*keys.length)]); }

  function machineAttackDefend(matrix, sym){
    let r = rowsSymbolCount(matrix,sym,true); if(r) return r;
    r = colSymbolCount(matrix,sym,true); if(r) return r;
    r = countSymbolsInDiagonals(matrix,sym,true); if(r) return r;
    return false;
  }

  function machineFirstThreeMovesSetup(){
    const arr = state.level==='hard' ? [1,3,7,9,5] : [1,2,3,4,5,6,7,8,9];
    const combos=[];
    for(let i=0;i<arr.length;i++) for(let j=i+1;j<arr.length;j++) for(let k=j+1;k<arr.length;k++) combos.push([arr[i],arr[j],arr[k]]);
    return combos[Math.floor(Math.random()*combos.length)].slice();
  }

  function machineMainLogic(){
    const allMoves = coordMap; const matrix = state.board; const currentEmpty = state.empty;
    const symbol = state.machineSymbol; const userSymbol = state.playerSymbol;
    let cellNumber, r, c;

    if(state.firstThree.length>0){
      cellNumber = state.firstThree.shift();
      [r,c] = allMoves[cellNumber];
    } else {
      cellNumber = randomKey(currentEmpty);
      [r,c] = currentEmpty[cellNumber];
    }

    let res = machineAttackDefend(matrix, symbol);
    if(res){ [r,c]=res; matrix[r][c]=symbol; return checkForWinner(matrix, symbol); }
    res = machineAttackDefend(matrix, userSymbol);
    if(res){ [r,c]=res; matrix[r][c]=symbol; return checkForWinner(matrix, symbol); }

    // random fallback: ensure empty
    while(!checkIfCellIsEmpty(allMoves, matrix, cellNumber)){
      cellNumber = randomKey(currentEmpty);
      [r,c] = currentEmpty[cellNumber];
    }
    matrix[r][c]=symbol;
    delete currentEmpty[cellNumber];
    return checkForWinner(matrix, symbol);
  }

  /* ============== Flow ============== */
  function clearBoard(){ state.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]; state.empty = {...coordMap}; state.winLine=[]; }

  function newSession(){ state.playerWins=0; state.machineWins=0; updateScore(); log('— Session reset —'); }

  async function startGame(){
    const t = text[state.lang];
    const name = inputs.name.value.trim();
    if(!/^\w+$/.test(name)){ setStatus(`<span class="muted">${t.ui_invalid_name}</span>`); return; }
    state.playerName = name;
    // symbols
    const sym = inputs.symbolRadios.find(r=>r.checked)?.value || 'X';
    state.playerSymbol = sym; state.machineSymbol = sym==='X'?'O':'X';
    // level
    const lvl = inputs.levelRadios.find(r=>r.checked)?.value || 'easy';
    state.level = lvl; setBadges();

    // init
    clearBoard();
    state.firstThree = machineFirstThreeMovesSetup();
    state.firstMover = (Math.random()<0.5? 'machine':'player');
    state.currentMove = state.firstMover==='machine'? 1 : 0;
    state.playing = true; state.locking=false;

    log('— — —');
    log((t.ui_welcome(name)));
    log(t.ui_first(state.firstMover));
    setStatus(`<strong>${t.ui_welcome(name)}</strong><br>${t.ui_first(state.firstMover)}`);
    renderBoard();

    // open move
    if(state.firstMover==='machine') await machineTurn();
    else setStatus(`<strong>${t.ui_your_turn}</strong>`);
  }

  async function machineTurn(){
    const t = text[state.lang];
    state.locking = true; renderBoard();
    setStatus(`<span class="thinking">${t.ui_machine_turn} ${t.ui_thinking}...</span>`);
    await sleep(800);
    const win = machineMainLogic();
    renderBoard();

    if(win){
      endGame('machine');
    } else {
      state.currentMove += 1;
      state.locking = false; setStatus(`<strong>${t.ui_your_turn}</strong>`); renderBoard();
      // if tie
      if(state.currentMove >= (state.firstMover==='machine'?10:9)){
        endGame('tie');
      }
    }
  }

  function getWinnerLine(symbol){
    // return array of winning coords if any
    const b = state.board;
    const lines = [
      [[0,0],[0,1],[0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      [[0,0],[1,1],[2,2]],
      [[0,2],[1,1],[2,0]],
    ];
    for(const line of lines){ if(line.every(([r,c])=> b[r][c]===symbol)) return line; }
    return [];
  }

  function endGame(kind){
    const t = text[state.lang];
    state.playing=false; state.locking=true;
    let msg='';
    if(kind==='player'){
      state.playerWins++; msg = fmt(t.player_wins,{current_move: state.currentMove});
      state.winLine = getWinnerLine(state.playerSymbol);
    } else if(kind==='machine'){
      state.machineWins++; msg = fmt(t.machine_wins,{current_move: state.currentMove});
      state.winLine = getWinnerLine(state.machineSymbol);
    } else { msg = t.tie; }
    updateScore();
    renderBoard();
    setStatus(`<strong>${t.ui_game_over}</strong><br>${msg}<br>${t.ui_result_line(state.playerWins,state.machineWins)}`);
    inputs.btnReplay.disabled = false;
  }

  async function onCellClick(e){
    if(!state.playing || state.locking) return;
    const key = Number(e.currentTarget.dataset.key);
    const t = text[state.lang];

    // validate
    if(!(key>=1 && key<=9)){ setStatus(`<span class="muted">${t.invalid_cell}</span>`); return; }
    if(!checkIfCellIsEmpty(coordMap, state.board, key)){ setStatus(`<span class="muted">${t.cell_taken}</span>`); return; }

    // apply
    const [r,c] = coordMap[key];
    state.board[r][c] = state.playerSymbol;
    delete state.empty[key];
    renderBoard();

    // win check
    if(checkForWinner(state.board, state.playerSymbol)){
      endGame('player');
      return;
    }

    // step
    state.currentMove += 1;
    if(state.currentMove >= (state.firstMover==='machine'?10:9)){
      endGame('tie');
      return;
    }

    // machine move
    await machineTurn();
  }

  function replay(){
    inputs.btnReplay.disabled = true;
    clearBoard();
    state.firstThree = machineFirstThreeMovesSetup();
    state.firstMover = (Math.random()<0.5? 'machine':'player');
    state.currentMove = state.firstMover==='machine'? 1 : 0;
    state.playing = true; state.locking=false; state.winLine=[];
    setStatus(text[state.lang].ui_first(state.firstMover));
    renderBoard();
    if(state.firstMover==='machine') machineTurn();
  }

  /* ============== Bindings ============== */
  inputs.lang.addEventListener('change', ()=>{ state.lang = inputs.lang.value; applyI18n(); setBadges(); });
  inputs.levelRadios.forEach(r=> r.addEventListener('change', ()=>{ state.level = r.value; setBadges(); }));
  inputs.symbolRadios.forEach(r=> r.addEventListener('change', ()=>{ state.playerSymbol = r.value; state.machineSymbol = r.value==='X'?'O':'X'; }));
  inputs.btnStart.addEventListener('click', startGame);
  inputs.btnNew.addEventListener('click', ()=>{ newSession(); clearBoard(); renderBoard(); applyI18n(); inputs.btnReplay.disabled=true; });
  inputs.btnReplay.addEventListener('click', replay);

  // Init defaults for BG user
  inputs.lang.value='bg'; state.lang='bg';
  inputs.levelRadios.find(r=>r.value==='easy').checked=true; state.level='easy';
  inputs.symbolRadios.find(r=>r.value==='X').checked=true; state.playerSymbol='X'; state.machineSymbol='O';
  clearBoard();
  applyI18n();
  renderBoard();
})();
