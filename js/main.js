/* 메뉴 슬라이드  */
$('#mainNav > ul > li').mouseover(function(){
    $(this).find('.subNavWrap').stop().slideDown(400);
});
$('#mainNav > ul > li').mouseleave(function(){
    $(this).find('.subNavWrap').stop().slideUp(100);
});

/* 이미지 슬라이드 */

$('.imgSlide').slick({
   dots: true,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
});

/* 탑버튼 */
$('.topBtn').hide();
$(window).scroll(function(){
    if($(this).scrollTop() > $('#product').scrollTop()){
        $('.topBtn').fadeIn();
    } else {
        $('.topBtn').fadeOut();
    }
});
