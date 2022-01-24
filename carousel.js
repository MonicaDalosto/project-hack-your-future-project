// I will create a code to hidden all the .patterns divs inside the section Inspirations, and then create a carousel to show just one pattern, which will be swapped every 3 seconds:

let paused = false; // whether the slideshow is paused or not
let counter = 1; // the counter variable that keeps track of which image you are showing
let forwardButton = document.getElementById('forward');
let backwardButton = document.getElementById('backward');
let pauseButton = document.getElementById('pause');

const changeElementPattern = (buttonElement) => {
  const elementPattern = document.getElementById("pattern" + counter);
  if(!elementPattern.classList.contains('carouselInactive')) {
    elementPattern.classList.add('carouselInactive');
    console.log(elementPattern);
    buttonElement()
    console.log(counter);
    const nextElementPattern = document.getElementById("pattern" + counter);
    console.log(nextElementPattern);
    nextElementPattern.classList.remove('carouselInactive');
  }
}

const forward = () => {
    counter = counter + 1;
    if(counter > 3){
      counter = 1;
    }
}

const backward = () => {
    counter = counter - 1;
    if(counter < 1){
      counter = 3;
    }
  }

function changeValuePaused() {
  paused = !paused;
}

forwardButton.addEventListener('click', function() {
  changeElementPattern(forward);
});
backwardButton.addEventListener('click', function() {
  changeElementPattern(backward);
});
pauseButton.addEventListener('click', changeValuePaused);

setInterval(() => {
  if (!paused) {
    console.log('deu certo');
    changeElementPattern(forward);
  }
}, 3000);




// -- IMPORTANT: -- Second Functions, they are working:
// const forward = () => {
//   const elementPattern = document.getElementById("pattern" + counter);
//   if(!elementPattern.classList.contains('carouselInactive')) {
//     elementPattern.classList.add('carouselInactive');
//     counter = counter + 1;
//     if(counter > 3){
//       counter = 1;
//     }
//     console.log(counter);
//     const nextElementPattern = document.getElementById("pattern" + counter);
//     nextElementPattern.classList.remove('carouselInactive');
//   }
// }

// const backward = () => {
//   const elementPattern = document.getElementById("pattern" + counter);
//   if(!elementPattern.classList.contains('carouselInactive')) {
//     elementPattern.classList.add('carouselInactive');
//     counter = counter - 1;
//     if(counter < 1){
//       counter = 3;
//     }
//     console.log(counter);
//     const nextElementPattern = document.getElementById("pattern" + counter);
//     nextElementPattern.classList.remove('carouselInactive');
//   }
// }

// function changeValuePaused() {
//   paused = !paused;
// }

// forwardButton.addEventListener('click', forward);
// backwardButton.addEventListener('click', backward);
// pauseButton.addEventListener('click', changeValuePaused);

// setInterval(() => {
//   if (!paused) {
//     console.log('deu certo');
//     forward();
//   }
// }, 3000);





// -- IMPORTANT: -- First Functions, the backward function is not working:
// function changePattern() {
//   const elementPattern = document.getElementById("pattern" + counter);
//   if(!elementPattern.classList.contains('carouselInactive')) {
//     elementPattern.classList.add('carouselInactive');
//     // console.log(elementPattern);
//     forward();
//     console.log(counter);
//     const nextElementPattern = document.getElementById("pattern" + counter);
//     // console.log(nextElementPattern);
//     nextElementPattern.classList.remove('carouselInactive');
//   }
// }

// const forward = () => {
//   counter = counter + 1;
//   if(counter > 3){
//     counter = 1;
//   }
// }

// const backward = () => {
//   counter = counter - 1;
//   if(counter < 1){
//     counter = 3;
//   }
// }

// function changeValuePaused() {
//   paused = !paused;
// }

// forwardButton.addEventListener('click', forward);
// backwardButton.addEventListener('click', backward);
// pauseButton.addEventListener('click', changeValuePaused);

// setInterval(() => {
//   if (!paused) {
//     console.log('deu certo');
//     changePattern();
//   }
// }, 5000);