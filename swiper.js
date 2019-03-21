document.addEventListener("DOMContentLoaded", function() {


  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let sliderPopUp = document.getElementById('sliderPopUp');
  let swiperContainer = document.getElementById('swiperContainer');

  sliderPopUp.addEventListener('click', function () {
    sliderPopUp.classList.add('hidden');
  });

  swiperContainer.addEventListener('click', function (e) {
    const {target} = e;
    console.log(target);
    if (target.tagName === 'IMG' || target.classList.contains("swiper-button-white")) {
      e.stopPropagation();
    }
  });

  document.addEventListener("click", function (e) {
    const target = e.target.parentNode;
    if (target.classList.contains('workItem')) {
      let category = target.getAttribute('data-category');
      let number = target.getAttribute('data-number');
      let quantity = target.getAttribute('data-quantity');
      let slides = [];

      for (let i = 1; i <= quantity; i++) {
        slides.push(`<div class='swiper-slide'><img src='images/${category}/${number}/${i}.jpg' alt=''></div>`)
      }

      mySwiper.removeAllSlides();
      mySwiper.appendSlide(slides);
      sliderPopUp.classList.remove('hidden');
      setTimeout(function () {
        mySwiper.update();
        mySwiper.updateAutoHeight();
      }, 100);


    }

  });

});