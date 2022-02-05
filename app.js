const loadText = document.querySelector('.main-text');
const loadImg = document.querySelector('.main-bg');

// loading count
let load = 0;

//function blurring every 30ms
let inter = setInterval(blurring, 30);
function blurring(){
  load++
  if(load > 99){
    clearInterval(inter);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  loadImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
  return ((num-in_min) * (out_max - out_min)) / ((in_max-in_min))  + out_min
}