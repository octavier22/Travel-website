// navigation toggle
const menu = document.querySelector('.menu-btn')
const list = document.querySelector('.list')

menu.addEventListener('click', () => {
    list.classList.toggle('open')
})

// Hero page slider
const swiper = new Swiper(".slider-1", {
    autoplay:{
        delay: 3500,
        disableOnInteraction: false,

    },
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// const swiper3 = new Swiper(".slider-3", {
//   autoHeight: true,
//   effect: "coverflow",
//   grabCursor: true,
//   loop: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 40,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   navigation: {
//     nextEl: ".custom-next",
//     prevEl: ".custom-prev",
//   },
//   pagination: {
//     el: ".custom-pagination",
//   },
// });