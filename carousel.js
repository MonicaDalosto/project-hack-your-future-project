// I will create a code to hidden all the .patterns divs inside the section Inspirations, and then create a carousel to show just one pattern, which will be swapped every 3 seconds:

let paused = false; // whether the slideshow is paused or not
let counter = 1; // the counter variable that keeps track of which image you are showing

const changeElementPattern = (clickedButtonFunction) => {
  const elementPattern = document.getElementById("pattern" + counter);
  if(!elementPattern.classList.contains('carouselInactive')) {
    elementPattern.classList.add('carouselInactive');
    clickedButtonFunction()
    const nextElementPattern = document.getElementById("pattern" + counter);
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

let forwardButton = document.getElementById('forward');
forwardButton.addEventListener('click', function() {
  changeElementPattern(forward);
});

let backwardButton = document.getElementById('backward');
backwardButton.addEventListener('click', function() {
  changeElementPattern(backward);
});

let pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', changeValuePaused);

setInterval(() => {
  if (!paused) {
    changeElementPattern(forward);
  }
}, 3000);