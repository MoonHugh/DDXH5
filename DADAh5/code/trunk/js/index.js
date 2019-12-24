/**
 * Created by Administrator on 2017/5/26.
 */
/*
 *
 * 判断PC端与WAP端
 */
(function(){
    var ua = window.navigator.userAgent.toLowerCase();
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        window.location.href = "http://www.ddxstore.com/";
    }
}());
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        initialSlide :1,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false
        },
        onTransitionEnd: function(swiper){
            $(".swiper-slide").eq(swiper.activeIndex).find("p").removeClass("hide");
            $(".swiper-slide").eq(swiper.activeIndex).siblings().find("p").addClass("hide");
        }
    });
    $(".bg_change li").click(function () {
        $(this).css({"background":"url('image/index/selected.png')no-repeat","background-size":"100%"});
        $(this).siblings().css("background","none");
        $(this).find("img").css({"width":"1.4rem","height":"1.4rem"});
        $(this).siblings().find("img").css({"width":"1.2rem","height":"1.2rem"});
        var i = $(this).index();
        i=i+1;
        $(".fittingRoom_page").css({"background":"url('image/index/img_bg_"+i+".png')no-repeat","background-size":"100%"});
    });
    $(".model_change li").click(function () {
        $(this).css({"background":"url('image/index/selected.png')no-repeat","background-size":"100%"});
        $(this).siblings().css("background","none");
        $(this).find("img").css({"width":"1.4rem","height":"1.4rem"});
        $(this).siblings().find("img").css({"width":"1.2rem","height":"1.2rem"});
        var i = $(this).index();
        i=i+1;
        $(".modelbar").find("img").attr("src","image/index/img_clothing_"+i+".png");
    });
    $(".menu").click(function () {
            $(".nav_box").removeClass("hide");
            $("#mask").addClass("mask");
    });
    $(".close").click(function () {
        $(".nav_box").addClass("hide");
        $("#mask").removeClass("mask");
    });
});