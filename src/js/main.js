window.addEventListener('DOMContentLoaded', () => {
    console.log('Loaded Scripts')

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 32,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    var swiper2 = new Swiper(".gallery-swiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper3 = new Swiper(".gallery-swiper2", {
        spaceBetween: 10,
        zoom: true,
        thumbs: {
            swiper: swiper2,
        },
    });
})

// TODO test