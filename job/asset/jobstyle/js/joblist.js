


jQuery(document).ready(function($) {
  $(".ny_zpp_2 ul li").find(".zp_dl").click(function(){
    $(this).next(".zp_text").stop().slideToggle()
  })
  $(".ny_zpp_2 ul li").click(function(){
    $(this).toggleClass("zp_vic");
  })
});

jQuery(document).ready(function($) {
     //简历弹出层
     $(".zp_text_1b").click(function () {
       $(".fotdn").fadeIn(200);
     });
     $(".fot_yp .fancybox").click(function () {
       $(".fotdn").fadeOut(200);
     });
});

