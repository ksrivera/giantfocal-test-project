//DOM - SLIDER CONTENT
const slider = document.getElementById("slider")
const nextReviewer = document.getElementById("next-reviewer")
const prevReviewer = document.getElementById("previous-reviewer")
const cardWidth = slider.querySelector(".card").offsetWidth;

//DOM - MOBILE MENU
const menuContainer = document.getElementById('hamburger-menu') 
const menuToggle = document.getElementById("menu-toggle")
const toggleNav = document.getElementById("nav")
const displayMenu = document.getElementById("display-menu")


//Mobile menu event listener
menuContainer.addEventListener("click",  () => {
    menuToggle.classList.toggle("fa-xmark")

    if(menuToggle.classList.contains('fa-xmark')) {
        toggleNav.classList.remove("bg-white")
        toggleNav.classList.remove("rounded-full")
        toggleNav.classList.add("bg-stone-200/30")
        toggleNav.classList.add("rounded-t-2xl")
        displayMenu.innerHTML = `                            
            <div class="flex flex-col justify-center p-4 gap-3 bg-stone-200/30 rounded-b-2xl backdrop-blur-lg transition-all">
                <ul class="flex flex-col gap-3">
                    <li><a class="flex text-lg font-semibold text-black  p-2" href="#features">Features</a></li>
                    <li><a class="flex text-lg font-semibold text-black p-2" href="#solutions">Solutions</a></li>
                    <li><a class="flex text-lg font-semibold text-black  p-2" href="#resources">Resources</a></li>
                    <li><a class="flex text-lg font-semibold text-black  p-2" href="#pricing">Pricing</a></li>
                    <li><a class="flex text-lg font-semibold text-red-500  p-2" href="#pricing">Log In</a></li>
                    <li><a class="flex text-lg font-semibold text-[var(--blue-color)] p-2" href="#resources">Get Started</a></li>
                </ul>
            </div>

        ` 
    }

    else {
        displayMenu.innerHTML = '';
        toggleNav.classList.remove("rounded-t-2xl")
        toggleNav.classList.remove("bg-stone-200/30")
        toggleNav.classList.add("rounded-full")
        toggleNav.classList.add("bg-white")
    }
})

let isDragging = false, startX, startScrollLeft;

//REVIEWER ANIMATIONS
//Next reviewer on mouse click or tap
nextReviewer.addEventListener("click", () => {
    slider.scrollLeft += -cardWidth;
    slider.classList.add("scroll-smooth")
    slider.classList.add("snap-x")
})

//previous reviewer on mouse click or tap
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
    if(!isDragging) return
    
    slider.classList.remove("scroll-smooth")
    slider.classList.remove("snap-x")

    //Updates the scroll position of the slider based on the cursor movement
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

//EVENT LISTENERS
slider.addEventListener("mousedown", dragStart)
slider.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
