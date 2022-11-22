const mineBtnEl = document.querySelectorAll(".mineBtn");
const flagIcon = document.querySelectorAll(".flagIcon");
const timerEl = document.querySelector(".timeCount");
const mineCountEl = document.querySelector(".mineCount");
const gameStartEl = document.querySelectorAll(".gameStart");
console.log(mineBtnEl)
let time = 0;
let mineCounter = 10;

const mineCountUp = () => {
  if (mineCounter < 10) {
    mineCounter++;
    mineCountEl.textContent = mineCounter;
  }
}

const mineCountDown = () => {
  // tracks the number of mines that are not accounted for
    mineCounter--;
    mineCountEl.textContent = mineCounter;
};

const emojiHandler = () => {
  // alternate between 'smile', 'dead', and 'wearing sunglasses' based upon game state
};

const timer = () => {
  // from 0, counts each second
  time++;
  timerEl.textContent = time;
};
// setInterval(timer, 1000);

const startTimer = () => {
  for (let i=0;i<gameStartEl.length;i++) {
    gameStartEl[i].classList.remove("gameStart");
  }
  setInterval(timer, 1000);
}

const tileLeftClick = mineBtnEl.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // starts the game
    switch (button.getAttribute('class')) {
      case `mineBtn gameStart`: 
        startTimer();
      default:
        break;
    }
    // disables clicking on "safe" tile
    if (button.getAttribute('class') === 'safe') {
      return;
    }
    // switch
    // case 0: mine, case 1: number of adj mines, case 2: clear area and reveal all other clear areas
  });
});

const tileRightClick = mineBtnEl.forEach((button) => {
  button.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // starts the game
    switch (button.getAttribute('class')) {
      case `mineBtn gameStart`: 
        startTimer();
      default:
        break;
    }
    // "safe" tile marker
    switch (button.getAttribute('class')) {
      case `safe`: 
        button.setAttribute(`class`, `mineBtn`);
        button.textContent = "";
        mineCountUp();
        break;
      case `mineBtn`:
        button.setAttribute(`class`, `safe`);
        button.textContent = "🚩";
        mineCountDown();
        break;
    }
    
  });
});

const gameOver = () => {
  // handles game loss events
};

const gameWin = () => {
  // handles game win events
};

const gameReset = () => {
  // handles click event to reset the game
};

// FIXME: rewrite?
// get value of arr (x), make a new arr with x # of indexes "[0,0,1,...,x]".  randomly splice 10 extries of that arr into new arr, use that arr to return and assign mines in init().
// array[index] = bomb -> set the bomb attribute inside the original array?
const mineCreator = (count, arr) => {
  minesToCreate = count;
  // creates a new array [0,1,...,n] where n = array.length
  const iteratedArr = [...Array(arr.length).keys()];
  while (minesToCreate != 0) {
  // for (let i=0;i<minesToCreate;i++) {
    let mine = Math.floor(Math.random()*iteratedArr.length);
    console.log("number to splice: " + mine);
    iteratedArr.splice(mine,1);
    console.log(iteratedArr)
    minesToCreate--;
  }
}

// use 2D array - array where each item is an array
// matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ];
// matrix[2][1] = 8;

const init = () => {
  timerEl.textContent = time;
  mineCountEl.textContent = mineCounter;
  mineCreator(10,mineBtnEl);
  // randomly assigns mines in gameboard
  // for each mineBtn (81 elements), randomly assign 10 of them as "bomb"
};
init();

  // 
  // let currentIndex = array.length,  randomIndex;
  // let minesArr = [];
  // // array.length-10 is for beginner mode (10 mines in beginner minesweeper)
  // // can be scaled to medium, hard, or custom games
  // while (minesToCreate != 0) {
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   minesArr.push(randomIndex);
  //   minesToCreate--;
  // }
  // array = eliminateDuplicates(minesArr);
  // // runs init until an array of 10 is achieved without dupes
  // return array;


// helps mineCreator() by eliminating duplicate tiles.  If there is a dupe, mineCreator() runs again.
// TODO: does this work with new version of mineCreator()?
// const eliminateDuplicates = (arr) => {
//   let i;
//   out = [],
//   obj = {};
//   for (i = 0; i < arr.length; i++) {
//     obj[arr[i]] = 0;
//   }
//   for (i in obj) {
//     out.push(i);
//   }
//   arr = out;
//   return arr;
// }