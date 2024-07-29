$(document).ready(function(){
    const swiper = new Swiper('.swiper-container', {
      // effect : 'fade',
  slidesPerView: 1,
  debugger: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.gnb_menu_item').click(function(){ 
  var index = $(this).index();
  swiper.slideTo(index + 1);
})

      
});