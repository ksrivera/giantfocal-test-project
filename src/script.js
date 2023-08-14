//DOM - MOBILE MENU
const menuContainer = document.getElementById('hamburger-menu') 
const menuToggle = document.getElementById("menu-toggle")
const toggleNav = document.getElementById("nav")
const displayMenu = document.getElementById("display-menu")

//DOM SwiperJS
const mySwiper = document.getElementById("mySwiper")

//SwiperJS
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Mobile menu event listener
menuContainer.addEventListener("click",  () => {
    menuToggle.classList.toggle("fa-xmark")

    if(menuToggle.classList.contains('fa-xmark')) {
        toggleNav.classList.remove("bg-white")
        toggleNav.classList.remove("rounded-full")
        toggleNav.classList.add("bg-stone-200/30")
        toggleNav.classList.add("rounded-t-2xl")

        displayMenu.classList.add("absolute")


        displayMenu.innerHTML = `                            
                <ul class="flex flex-col gap-10 p-5 min-h-screen backdrop-blur-lg bg-stone-200/30 rounded-b-2xl">
                    <li class="list-none"><a class=" text-lg font-semibold text-black p-2" href="#features">Features</a></li>
                    <li class="list-none"><a class=" text-lg font-semibold text-black p-2" href="#solutions">Solutions</a></li>
                    <li class="list-none"><a class=" text-lg font-semibold text-black p-2" href="#resources">Resources</a></li>
                    <li class="list-none"><a class=" text-lg font-semibold text-black p-2" href="#pricing">Pricing</a></li>
                    <li class="list-none"><a class=" text-lg font-semibold text-red-500 p-2" href="#pricing">Log In</a></li>
                    <li class="list-none"><a class=" text-lg font-semibold text-[var(--blue-color)] p-2" href="#resources">Get Started</a></li>
                </ul>
        ` 
    }

    else {
        displayMenu.innerHTML = '';
        displayMenu.classList.remove("absolute")

        toggleNav.classList.remove("rounded-t-2xl")
        toggleNav.classList.remove("bg-stone-200/30")
        toggleNav.classList.add("rounded-full")
        toggleNav.classList.add("bg-white")
    }
})

