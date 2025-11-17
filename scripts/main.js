document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger-button')
  const mobileOverlay = document.querySelector('.mobile-overlay')

  burgerButton.addEventListener('click', () => {
    mobileOverlay.showModal()
  })

  const swiper = new Swiper('.swiper', {
    breakpoints: {
      290: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.projects__slider-button--next',
      prevEl: '.projects__slider-button--prev',
    },
  })
})