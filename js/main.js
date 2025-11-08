/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
  searchClose = document.getElementById('search-close'),
  searchContent = document.getElementById('search-content')

// ===== SEARCH SHOW =====
if (searchButton) {
  searchButton.addEventListener('click', () => {
    searchContent.classList.add('show-search')
  })
}

// ===== SEARCH HIDDEN =====
if (searchClose) {
  searchClose.addEventListener('click', () => {
    searchContent.classList.remove('show-search')
  })
}

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: 5,   // changed from -24
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true, // fix centering
  autoplay: {
    delay: 1000, // lowercase "delay"
    disableOnInteraction: false,
  },
});