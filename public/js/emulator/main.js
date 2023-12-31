import { Z8080_BUS } from './8080.js';

function start() {
  let canvas = document.getElementById('vertical_screen');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFC0CB'; // Pink color
    ctx.fillRect(50, 50, 100, 100); // Draw a 100x100 square starting at (50, 50)
  }
  try {
    while (true) {
      machine.execute();
    }
  } catch (error) {}
}

document.addEventListener('DOMContentLoaded', event => {
  document.getElementById('start').addEventListener('click', start);
});
