// slider initialization

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

//   pop-up
let openButtons = document.querySelectorAll('.open-popup');
let closeButton = document.querySelector('#popup-close');
let modal = document.querySelector('#popup-wrap');

openButtons.forEach(button => {
  button.addEventListener('click', function openModal() {
    modal.classList.add("show")
  }
  );
});

closeButton.addEventListener('click', function closeModal() {
  modal.classList.remove("show");
}
);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});

// burgermenu
const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');

burgerMenuIcon.addEventListener('click', function () {
  burgerMenuIcon.classList.toggle('open-menu');
  burgerMenu.classList.toggle('open-menu');
  body.classList.toggle('fixed-page');
});



