"use stric"

$(document).ready(function(){
    $(".basket").click (function(){
        $(".inbasket").toggleClass("show-basket");
    })
    $(".eur").click (function(){
        $(".drop-ul").toggleClass("show-money");
    })
    $(".acc-menu").hide();
    $(".slide-btn").click(function(){
        $(this).next().slideToggle();
    })
    $(".side-icon").click(function(){
        $(".side-menu").addClass("active-side-menu")
    })
    $(".back-li").click(function(){
        $(".side-menu").removeClass("active-side-menu")
    })
})




// $(document).ready(function(){
  
// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
              
 
  $(".click-span").click(function(){
    $(".span-menu").toggleClass("d-block");
});
$("input").click(function(){
    $(this).toggleClass("active-input")
});
$(".foot-click").click(function(){
    $(".foot-menu").toggleClass("d-block")
});


$('.your-class').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });