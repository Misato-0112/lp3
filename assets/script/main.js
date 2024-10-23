const swiper = new Swiper(".swiper", {
    slidesPerView: 1.25,
    spaceBetween: 17,
    initialSlide: 1,
    centeredSlides: true,
    loop: false,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 13,
        },
    },
});
