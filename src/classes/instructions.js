class Instructions {

    constructor() {
        const slides = document.querySelectorAll(".slide");

        // loop through slides and set each slides translateX
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${indx * 100}%)`;
        });
      
        // select next slide button
        const nextSlide = document.querySelector(".btn-next");
      
        // current slide counter
        let currentSlide = 0;
        // maximum number of slides
        let lastSlide = slides.length - 1;
      
        // add event listener and navigation functionality
        nextSlide.addEventListener("click", function () {
          // check if current slide is the last and reset current slide
          if (currentSlide === lastSlide) {
            currentSlide = 0;
          } else {
            currentSlide++;
          }
      
          //   move slide by -100%
          slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
          });
        });
      
        // select next slide button
        const prevSlide = document.querySelector(".btn-prev");
      
        // add event listener and navigation functionality
        prevSlide.addEventListener("click", function () {
          // check if current slide is the first and reset current slide to last
          if (currentSlide === 0) {
            currentSlide = lastSlide;
          } else {
            currentSlide--;
          }
      
          //   move slide by 100%
          slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
          });
        });
      
        const closeInstructions = document.getElementById('close-instructions');
        closeInstructions.addEventListener("click", function() {
          let openInstructions = document.querySelector('.slider-container');
          openInstructions.classList.toggle("invisible");
        })
      
        const instructionsButton = document.getElementById('instructionsButton');
        instructionsButton.addEventListener("click", function() {
          let openInstructions = document.querySelector('.slider-container');
          openInstructions.classList.toggle("invisible");
        })
    }

}

export default Instructions;