$('.imgSlide').slick({
   dots: true,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
   responsive: [
       {
           breakpoint: 768,
           settings: {
               arrows: true,
               dots: false
           }
       }
   ]
});

/* 이미지 슬라이드 끝 */