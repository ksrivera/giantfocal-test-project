//DOM - SLIDER CONTENT
const slider = document.getElementById("slider")
const nextReviewer = document.getElementById("next-reviewer")
const prevReviewer = document.getElementById("previous-reviewer")
const cardWidth = slider.querySelector(".card").offsetWidth;

//DOM - MOBILE MENU
const menuContainer = document.getElementById('mobile-container') //not sure for this one yet
const hamburger = document.getElementById("hamburger") //hamburger icon

//open-close hamburger menu function
const toggleMenu = () => {
    if (hamburger.classList.contains("fa-bars")) {
        hamburger.classList.remove("fa-bars")
        hamburger.classList.add("fa-xmark")
        
        hamburger.innerHTML = `
            <nav class="lg:hidden absolute top-20 md:right-16 md:top-24 right-10 backdrop-blur-sm p-8 bg-slate-300/30 rounded-xl">
                <div class="flex flex-wrap justify-between h-full">
                    <div class="flex flex-col justify-center py-8 w-full">
                        <ul >
                            <li class="mb-9"><a class="inline-block text-center text-xl font-bold text-stone-100 hover:text-black bg-[var(--blue-color)] w-full rounded-lg p-2" href="#features"><span class="font-sans">Features<span></span></a></li>
                            <li class="mb-9"><a class="inline-block text-center text-xl font-bold text-slate-100 hover:text-gray-300 bg-[var(--blue-color)] w-full rounded-lg p-2" href="#solutions"><span class="font-sans">Solutions</span></a></li>
                            <li class="mb-9"><a class="inline-block text-center text-xl font-bold text-slate-100 hover:text-gray-300 bg-[var(--blue-color)] w-full rounded-lg p-2" href="#resources"><span class="font-sans">Resources</span></a></li>
                            <li><a class="inline-block text-center text-xl font-bold text-slate-100 hover:text-gray-300 bg-[var(--blue-color)] w-full rounded-lg p-2" href="#pricing"><span class="font-sans">Pricing</span></a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-end w-full pb-8">
                        <div class="flex flex-wrap -m-2">
                            <div class="w-full p-2"><a class="block w-full px-4 py-2.5 text-lg text-center font-bold  text-black bg-transparent hover:bg-slate-300 ring-1 ring-slate-300 focus:ring-gray-600 rounded-full transition-all" href="#login"><span class="font-sans">Log In</span></a></div>
                            <div class="w-full p-2"><a class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-[var(--blue-color)] hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#get-started"><span class="font-sans">Get Started</a></span></div>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }

    else {
        hamburger.classList.add("fa-bars")
        hamburger.classList.remove("fa-xmark")
        hamburger.innerHTML = '';
    }
}

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
menuContainer.addEventListener("click", toggleMenu) //mobile menu