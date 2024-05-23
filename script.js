const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
// i want to get the length of the slides meaning how many slides do i have.
const slidesLength = slideRight.querySelectorAll("div").length
// i want all the divs in the slideRight.(all of the divs with the background images)

console.log(slidesLength)

/* I BASICALLY WANT TO MATCH THE IMAGE WITH THE RIGHT div that i put in 
 the slidesLength variable.*/

// this variable is to basically see which index i am on since the pictures are on top of each other
let activeSlideIndex = 0

/* i want to take the slide length and SUBTRACT 1 FROM IT because the length will be 4.
 however the index is 0 based since it starts at 0 i want to get the Last index in 
this case it would be 3 or 4th slide because querySelectorAll puts the divs in a nodeList.*/


slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
// taking the leftSlide  the intial top value will be - negative

// i want to make the SLIDER buttons work now

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    // takes in direction as a parameter
    const sliderHeight = sliderContainer.clientHeight
    // this gives me the slider height dynamically
    // console.log(sliderHeight)

    // Checking for the direction

    if(direction === 'up') {
        activeSlideIndex++
        // increment the activeSlideIndex by 1
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
// this is how i change the slides on the IMAGE SIDE.



    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}







