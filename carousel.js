// I will create a code to add e/or remove the class .carouselInactive of the Html elements #pattern1, #pattern2, and #pattern3.
// The class .carouselInactive has the style display: none;
// When the page is loaded, just the #pattern1 will be shown;
// Then the setInterval function will invoke the function changeElementPattern(forward), every three minutes;

// The user can click on the button "pause" to pause/unpause the setInterval (the carousel);
// If the user click on the button forward, the next pattern will be shown (even though the carousel is paused/unpaused);
// If the user click on the button backward, the previous pattern will be shown (even though the carousel is paused/unpaused);


let paused = false; // whether the slideshow is paused or not
let counter = 1; // the counter variable that keeps track of which image you are showing

const changeElementPattern = (clickedButtonFunction) => {
  const elementPattern = document.getElementById('pattern' + counter);
  if(!elementPattern.classList.contains('carouselInactive')) {
    elementPattern.classList.add('carouselInactive');
    clickedButtonFunction()
    const nextElementPattern = document.getElementById('pattern' + counter);
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