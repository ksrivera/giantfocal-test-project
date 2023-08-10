//DOM - SLIDER CONTENT
const slider = document.getElementById("slider")
const nextReviewer = document.getElementById("next-reviewer")
const prevReviewer = document.getElementById("previous-reviewer")
const cardWidth = slider.querySelector(".card").offsetWidth;

//DOM MOBILE MENU
const menuContainer = document.getElementById('mobile-container')
const mobileMenu = document.getElementById("mobile-menu")
const closeBtn = document.getElementById("close-btn")

//MOBILE MENU TOGGLE -> to be added
/* const closeMenu = () => {
    menuContainer.innerHTML = ''
}

const openMenu = () => {
   
    menuContainer.innerHTML = ` 
    <nav class="lg:hidden z-10 px-9 pt-8 h-full overflow-y-auto rounded-xl">
        <div class="flex flex-wrap justify-between h-full">
        <div class="w-full>
            <div class="flex justify-between">
                <div class="w-auto p-2"><a class="inline-block h-16 w-26" href="#"><img src="/public/assets/logo-no-background.png" class="h-16 w-26" alt="sample logo"/></a></div>
                <div class="w-auto p-2"><i id="close-btn" class="fa-solid fa-square-xmark fa-2xl" style="color: var(--blue-color);"></i></div>
            </div>
        </div>
        <div class="flex flex-col justify-center py-8 w-full">
            <ul>
            <li class="mb-9"><a class="inline-block text-lg font-bold text-stone-100 hover:text-gray-300 bg-blue-400 w-full rounded-lg p-3" href="#">Features</a></li>
            <li class="mb-9"><a class="inline-block text-lg font-bold text-slate-100 hover:text-gray-300 bg-blue-400 w-full rounded-lg p-3" href="#">Solutions</a></li>
            <li class="mb-9"><a class="inline-block text-lg font-bold text-slate-100 hover:text-gray-300 bg-blue-400 w-full rounded-lg p-3" href="#">Resources</a></li>
            <li><a class="inline-block text-lg font-bold text-slate-100 hover:text-gray-300 bg-blue-400 w-full rounded-lg p-3" href="#">Pricing</a></li>
            </ul>
        </div>
        <div class="flex flex-col justify-end w-full pb-8">
            <div class="flex flex-wrap -m-2">
            <div class="w-full p-2"><a class="block w-full px-4 py-2.5 text-sm text-center font-bold  text-black bg-transparent hover:bg-slate-300 ring-1 ring-slate-300 focus:ring-gray-600 rounded-full transition-all" href="#">Log In</a></div>
            <div class="w-full p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Get Started</a></div>
            </div>
        </div>
        </div>
    </nav>
    `
    if(menuContainer.classList.contains("close-btn")) {
        console.log('true dat')
    }

}
 
mobileMenu.addEventListener("click", openMenu)

 */

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
