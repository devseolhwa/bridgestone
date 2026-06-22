$(function () {

    //skrollr.init();
    skrollr.init({
        forceHeight: false,
        mobileCheck: function(){
            if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
                // mobile device
            }
        }
    });

    setTimeout(function(){
        upLayer();
        showLayer();
    }, 2000);

    function upLayer(){
        $(".upLayer").each(function(){
            let $this = $(this);
            let start_pos = "top bottom";
            let end_pos =  "bottom top";

            ScrollTrigger.create({
                trigger: $this,
                start: start_pos, 
                end: end_pos,
                onEnter: function(){
                    $this.addClass("active");
                },onLeaveBack: function(){
                    $this.removeClass("active");
                }
            });
        });
    }

    function showLayer(){
        $(".showLayer").each(function(){
            let $this = $(this);
            let start_pos = "top bottom";
            let end_pos =  "bottom top";

            ScrollTrigger.create({
                trigger: $this,
                start: start_pos, 
                end: end_pos,
                onEnter: function(){
                    $this.addClass("active");
                },onLeave: function(){
                    $this.removeClass("active");
                },onEnterBack: function(){
                    $this.addClass("active");
                },onLeaveBack: function(){
                    $this.removeClass("active");
                }
            });
        });
    }

    ScrollTrigger.create({
        trigger: ".section03",
        //markers: true,
        start: "top bottom",
        end: "bottom top",
        onEnter: function(){
            $(".section03").addClass("active");
            $(".section04").addClass("active");
        },onLeave: function(){
            $(".section03").removeClass("active");
        },onLeaveBack: function(){
            $(".section03").removeClass("active");
            $(".section04").removeClass("active");
        }
    });
    ScrollTrigger.create({
        trigger: ".section04",
        //markers: true,
        start: "400px bottom",
        end: "bottom top",
        onLeave: function(){
            $(".section04").removeClass("active");
        }
    });

    // scroll 
    $(window).scroll(function() {
        var $window = $(window),
            $body = $("body"),
            $changeBg = $(".changeBg");
        
        var scroll = $window.scrollTop() + ($window.height() / 3);
    
        $changeBg.each(function () {
            var $this = $(this);
            
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                    
                $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(" ");
                });
                
                $body.addClass("color-" + $(this).data("color"));
            }
        });    
    }).scroll();


    // scrollSlider
    var scrollSlider = gsap.timeline({
        scrollTrigger: {
            trigger: ".section04",
            //markers: true,
            start: "top 70%",
            end: "top 70%",
            scrub: true,
        }
    });

    var scrollItem = gsap.utils.toArray(".scrollItem");
    var scrollItemNum = $(".scrollItem").length;
    var scrollSliderWidth = ($(".scrollSliderList").innerWidth());
    var listLeftWidth = (window.innerWidth - $(".scrollSlider").innerWidth()) / 2;

    var getMaxWidth = function getMaxWidth() {
        return scrollItem.reduce(function (val, section) {
            return val + section.offsetWidth;
        }, 0);
    };
    var maxWidth = getMaxWidth();
    //var elmWidth = maxWidth / scrollItemNum;
    //var elmSpace = $(".lastItem").outerWidth(true) - elmWidth;
    //var moveWidth = listLeftWidth + elmWidth * (scrollItemNum - 1) + elmSpace * (scrollItemNum - 1) - window.innerWidth / 2 + elmWidth / 2;
    var moveWidth = scrollSliderWidth - listLeftWidth * 2;
    console.log(moveWidth);

    var scrollSpeed = 1;
    var scrollSlider = gsap.timeline();

    scrollSlider.to(scrollItem, {
        x: function x() {
            return -moveWidth;
        },
        duration: 1,
        ease: "none"
    });

    ScrollTrigger.create({
        animation: scrollSlider,
        trigger: ".section04 .inner",
        pin: true,
        start: "top",
        end: "bottom",
        //markers: true,
        scrub: 1,
        end: function end() {
            return "+=" + maxWidth / scrollSpeed;
        },
        invalidateOnRefresh: true
    });
    $(".scrollSliderWrap").height($(".scrollSliderList").innerHeight());


    let introCheck = $(".intro");
    if (introCheck.length) {
        setTimeout(function() { 
            introCheck.addClass("one");
        }, 5000);
        setTimeout(function() { 
            introCheck.addClass("two");
        }, 7000);
        setTimeout(function() { 
            introCheck.addClass("three");
        }, 9000);
        setTimeout(function() { 
            introCheck.addClass("four");
        }, 10000);
        setTimeout(function() { 
            introCheck.addClass("five");
        }, 15000);
        setTimeout(function() { 
            introCheck.addClass("end");
        }, 16500);
    }
    
});