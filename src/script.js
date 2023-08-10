//DOM
const slider = document.getElementById("slider")
const nextReviewer = document.getElementById("next-reviewer")
const prevReviewer = document.getElementById("previous-reviewer")
const cardWidth = slider.querySelector(".card").offsetWidth;

//
let isDragging = false, startX, startScrollLeft;

//
nextReviewer.addEventListener("click", () => {
    slider.scrollLeft += -cardWidth;
    slider.classList.add("scroll-smooth")
    slider.classList.add("snap-x")
})

prevReviewer.addEventListener("click", () => {
    slider.scrollLeft += cardWidth;
    slider.classList.add("scroll-smooth")
    slider.classList.add("snap-x")
})

const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("select-none")


    //Records the initial cursor and scroll position of the slider
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragStop = () => {
    isDragging = false;
    slider.classList.remove("select-none")
}

const dragging = (e) => {
    if(!isDragging) {
        return
    }

    slider.classList.remove("scroll-smooth")
    slider.classList.remove("snap-x")

    //Updates the scroll position of the slider based on the cursor movement
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

slider.addEventListener("mousedown", dragStart)
slider.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

