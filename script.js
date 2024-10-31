const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:60,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //puntos de interrupción receptivos

    breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 10, // Espacio para pantallas pequeñas
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20, // Espacio para tablets
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30, // Espacio para laptops
      },
  }
})
