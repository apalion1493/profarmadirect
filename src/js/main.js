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
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            769: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
            },
            1346: {
                slidesPerView: 4,
            }
        }
    });

    const swiper2 = new Swiper(".gallery-swiper", {
        spaceBetween: 24,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        breakpoints: {
            1024: {
                spaceBetween: 24,
            },
            100: {
                spaceBetween: 16,
            }
        }
    });

    const swiper3 = new Swiper(".gallery-swiper-big", {
        spaceBetween: 10,
        zoom: true,
        loop: true,
        thumbs: {
            swiper: swiper2,
        },
    });

    const swiper4 = new Swiper(".swiper-blog", {
        slidesPerView: 3,
        spaceBetween: 32,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            768: {
                slidesPerView: "auto",
            },
            640: {
                slidesPerView: "auto",
            },
            100: {
                slidesPerView: "auto",
                spaceBetween: 20,
            }
        }
    });

    const swiper5 = new Swiper('.swiper-brands', {
        slidesPerView: 8,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1345: {
                slidesPerView: 8,
            },
            1024: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: "auto",
            },
            640: {
                slidesPerView: "auto",
            },
            100: {
                slidesPerView: "auto",
            }
        }
    });

    const swiper6 = new Swiper('.checkboxes-alphabet-list--swiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    })

    const conditionSwiper = new Swiper(".condition-swiper", {
        slidesPerView: 4,
        spaceBetween: 32,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2,
            },
            100: {
                slidesPerView: "auto",
            }
        }
    });



})

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden');
    };

    burgerButton?.addEventListener('click', toggleMenu);
})


// TODO test