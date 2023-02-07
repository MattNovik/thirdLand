const photosSlider = document.querySelector("#reviews");
let swiperPhotos;

const initPhotosSwiper = (slider, loop) => {
  swiperPhotos = new Swiper(slider, {
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: true,
    loop: loop,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

const initPhotosSlider = () => {
  if (photosSlider) {
    initPhotosSwiper(photosSlider, true);
  }
};

export { initPhotosSlider };
