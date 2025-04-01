var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    loop: true, // Thêm thuộc tính này để lặp vòng tròn
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000, // Thời gian chờ giữa các slide (3000ms = 3 giây)
        disableOnInteraction: false, // Tự động lướt tiếp tục ngay cả khi người dùng tương tác
    },
});