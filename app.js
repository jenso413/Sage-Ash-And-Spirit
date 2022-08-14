const sliderContainer = document.querySelector('.slider-container')
const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')
const slidesLength = document.querySelectorAll('section').length
const dotContainer = document.querySelector('.dot-container')

let activeSlideIndex = 0;
leftArrow.style.display = 'none'

window.onload = () => {
    setTimeout(() => {
        if (activeSlideIndex == 0) {
            console.log('hi')
            let rightArrowIcon = rightArrow.children[0]
            rightArrowIcon.classList.add('grow')
            setTimeout(() => {
                rightArrowIcon.classList.remove('grow')
            }, 500);
        }
    }, 200);
    
}

const changePage = (slideIndex) => {

    const sliderHeight = sliderContainer.clientHeight

    dotContainer.children[activeSlideIndex].classList.remove('active')

    activeSlideIndex = slideIndex

    sliderContainer.style.transform = `translateY(-${slideIndex * sliderHeight}px)`
    sliderContainer.classList.add('fade-in')

    setTimeout(() => {
        sliderContainer.classList.remove('fade-in')
    }, 1500);
    dotContainer.children[slideIndex].classList.add('active')

}


const nextSlide = () => {
    changeSlide('right')
}

rightArrow.addEventListener('click' , nextSlide)
leftArrow.addEventListener('click' , () => changeSlide('left'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    dotContainer.children[activeSlideIndex].classList.remove('active')

    if (direction == 'right') {
        activeSlideIndex++
    }
    if (direction == 'left') {
        activeSlideIndex--
    }

    if (activeSlideIndex == slidesLength - 1) {
        rightArrow.style.display = 'none'
    } else {
        rightArrow.style.display = 'block'
    }
    if (activeSlideIndex == 0) {
        leftArrow.style.display = 'none'
    } else {
        leftArrow.style.display = 'block'
    }

    sliderContainer.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    sliderContainer.classList.add('fade-in')
    dotContainer.children[activeSlideIndex].classList.add('active')

    if (direction == 'right') {
        rightArrow.removeEventListener('click' , nextSlide)
        setTimeout(() => {
            sliderContainer.classList.remove('fade-in')
            rightArrow.addEventListener('click' , nextSlide)
        }, 0);
    }

    // if (direction == 'left') {
    //     setTimeout(() => {
    //         sliderContainer.classList.remove('fade-in')
    //         rightArrow.addEventListener('click' , nextSlide)
    //     }, 0);
    // }
}

const handleNavClick = (e) => {

    let newSlide = e.target.classList[1]

    if (newSlide != undefined) changePage(newSlide)

}

dotContainer.addEventListener('click', handleNavClick)