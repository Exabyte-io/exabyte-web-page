$(document).ready(function () {
    SimpleCarousel.init();
    dumbRouter.init();
});

// This simple carousel for header background
var SimpleCarousel = {
    init: function () {
    var bCls = {
            isActive: true,
            val: 'boeing active'
        },
        lCls = {
            isActive: false,
            val: 'lab active'
        };

        setInterval(function () {
            if (bCls.isActive) {
                $('#header').removeClass(bCls.val).addClass(lCls.val);
                bCls.isActive = false;
                lCls.isActive = true;
            } else if (lCls.isActive) {
                $('#header').removeClass(lCls.val).addClass(bCls.val);
                bCls.isActive = true;
                lCls.isActive = false;
            }
        }, 8000)
    }
};

// Function for page navigation
var dumbRouter = {
    init: function () {
        var changeFunction = function() {
            var selector,
                headCls,
                haedTitle;

            $('div[class$="-page"]').hide().css({ opacity: 0 });
            $('div[class$="-head"]').hide().css({ opacity: 0 });
            $('#header').removeClass();
            $(this).parent('.nav').find('li').removeClass('active');
            $(this).addClass('active');
            selector = $(this).data('page') ? $(this).data('page') : $(this).find('a').data('page');
            headTitle = $(this).data('header') ? $(this).data('header') : $(this).find('a').data('header');
            headCls = $(this).data('cls') ? $(this).data('cls') : $(this).find('a').data('cls');
            $('#header').addClass(headCls).find(headTitle).show().css({opacity: 1});
            $(selector).show().animate({ opacity: 1 }, 600);
            $('html, body').animate({scrollTop:0}, '500', 'swing');
        };

        $(document).on('click', '.navbar-nav li', changeFunction);
        $(document).on('click', '.logo a', changeFunction);
        $(document).on('click', '#footer a', changeFunction);

        // $('.scroll-btn-wrap').hover(
        //     function() {
        //         $('.scroll-btn-inner').animate({ top: 0}, 250)
        //     },
        //     function() {
        //         $('.scroll-btn-inner').animate({ top: -25}, 250)
        //     }
        // );


        $(document).on('click', '.navbar-nav li a', function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    }
};
