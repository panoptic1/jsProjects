// Set up canvas for drawing
const canvas = document.querySelector(`#etch-a-sketch`);
// get context...a canvas thing?
const ctx = canvas.getContext(`2d`);

const shakeButton = document.querySelector(`#shake`);

// Set up the canvas for drawing
// make a variable from height and width from the same properties on our canvas (see: "destructuring")
const { width, height } = canvas;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  // move the x and y values depending on what the user did
  switch (key) {
    case `ArrowUp`:
      y -= 10;
      break;

    case `ArrowDown`:
      y += 10;
      break;

    case `ArrowLeft`:
      x -= 10;
      break;

    case `ArrowRight`:
      x += 10;
      break;

    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes(`Arrow`)) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Write a shake function

// Listen for keyboard events
window.addEventListener(`keydown`, handleKey);
