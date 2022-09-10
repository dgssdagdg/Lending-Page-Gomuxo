let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

window.addEventListener("click", function(event) {
  let contact = document.querySelector('.register');
  let body = document.querySelector('body');

  if(event.target.closest('.header-btn')) {
    contact.classList.toggle('register-active');
    body.classList.toggle('open');
  }

  if(!event.target.closest('.transparent') && (!event.target.closest('.header-btn')) && contact.closest('.register-active')) {
    contact.classList.remove('register-active');
    body.classList.remove('open');
  }
})


const swiper = new Swiper('.define-sliders', {
    loop: true,
    spaceBetween: 143,
    speed: 800,
    // If we need pagination
    pagination: {
      el: '.define-sliders .swiper-pagination',
      clickable: true,
    },
  
  });
  const swiperDigitali = new Swiper('.digital-sliders', {
    loop: true,
    speed: 800,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.digital-block .swiper-pagination',
      clickable: true,
    },
  
  });

