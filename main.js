const swiper = new Swiper('.swiper', {
    slidesPerView: 3.4,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
});

document.querySelector('.swiper-btn-next').addEventListener('click', () => {
    swiper.slideNext(); 
});

const scrollToTopButton = document.querySelector('.footer__btn');

scrollToTopButton.addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});
