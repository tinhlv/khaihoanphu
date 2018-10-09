jQuery(function($) {
    $(document).ready(function () {
        $("#menu").click(function(){
            $("#drop_down").mmenu({
                offCanvas: {
                    position: "right",
                }
            });
            $("#drop_down").mmenu();
            var API = $("#drop_down").data("mmenu");
            API.open();
        });
    });

    jQuery(document).ready(function($){
        if($(".btn-top").length > 0){
            $(window).scroll(function () {
                var e = $(window).scrollTop();
                if (e > 300) {
                    $(".btn-top").show()
                } else {
                    $(".btn-top").hide()
                }
            });
            $(".btn-top").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                })
            })
        }
        
        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
            // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        $(".slider-news").slick({
            // normal options...
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover:true,
            // the magic
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  infinite: false
                }
          
              }, {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  dots: false
                }
          
              }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
                // settings: "unslick" // destroys slick 
              }]
          });
    });

});
