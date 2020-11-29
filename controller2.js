//variables

const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed__bar");
const video = document.querySelector(".flex");

//functions
let handleMove = function (e) {
  //if(!isDrawing) return;

  let y = e.pageY - this.offsetTop;
  let percent = y / this.offsetHeight;
  let min = 0.4;
  let max = 4;
  let height = Math.round(percent * 100) + "%";
  let playbackRate = percent * (max - min) + min;

  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + " x";

  video.playbackRate = playbackRate;
};

//events
speed.addEventListener("mousemove", handleMove);
//speed.addEventListener("mousedown", () => (isDrawing = true));
//speed.addEventListener("mouseup", () => (isDrawing = false));
