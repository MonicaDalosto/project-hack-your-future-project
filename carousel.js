// I will create a code to hidden all the .patterns divs inside the section Inspirations, and then create a carousel to show just one pattern, which will be swapped every 3 seconds:

let paused = false; // whether the slideshow is paused or not
let counter = 1; // the counter variable that keeps track of which image you are showing
const sectionInspirations = document.getElementById('sectionInspirations');
const patterns = document.getElementsByClassName('patterns');

for (elementPattern of patterns) {
  elementPattern.addEventListener('click', (event) => {
    let idElementPattern = event.target.id;
    console.log(idElementPattern);
    // idElementPattern.classList.add('showDiv');
    idElementPattern.style.display = 'block';
    counter = (event.target.id).slice(-1);
  })
}

// virtually click on the current image to load it into the big image
document.getElementById('pattern' + counter).click();

function changePattern() {
  const nextPattern = 'pattern' + counter;
  console.log(nextPattern)
  nextPattern.style.display = 'block';
}

const forward = () => {
  counter = counter + 1;
  if(counter > 3){
    counter = 1;
  }
  changePattern();
  // chama função que troca em 3 segundos
}

// document.getElementById('forward').addEventListener('click', forward);

// const backward = () => {
//   counter = counter - 1;
//   if(counter < 1){
//     counter = 4;
//   }
//   changeImage();
// }

// document.getElementById('backward').addEventListener('click', backward);

// document.getElementById('bigImage').addEventListener('click', changeValuePaused);
// function changeValuePaused() {
//   paused = !paused;
// }

// setInterval(() => {
//   if (!paused) {
//     console.log('deu certo');
//     forward();
//   }
// }, 3000);