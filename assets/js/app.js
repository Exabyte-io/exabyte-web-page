var loader = (function () {
    var count;
    function load (array) {
     count = array.length;
     $.each(array, function(i, link) {
         var img = new Image();
             img.src = link;
             img.onload = imageLoaded;
     });
    }

    function imageLoaded () {
     count--;
     if (count == 0) {
         ready();
     }
    }

    function ready () {
     $(document).ready(function () {
        // hide preloder and show main content
        console.log('loaded');
     });
    }

    return {
     require: load
    }
})();

loader.require([
 'img/boeing.png',
 'img/lab.jpeg',
]);

$(document).ready(function () {
    SimpleCarousel.init();
    dumbRouter.init();
    newsletter.init();
});

// This simple carousel for header background
var SimpleCarousel = {
    init: function () {
        var slides = [
                {
                    val: 'boeing active'
                },
                {
                    val: 'lab active'
                }
            ],
            i = 0,
            isPaused = false,
            changeSlide = function (target) {
                setTimeout( function () {
                    if (!$('#header').hasClass('subpage')) {
                        $('#header').removeClass().addClass('image dim').addClass(target.val);
                    }
                }, 500);
            };

        setInterval(function () {
            changeSlide(slides[i]);
            if ( i < slides.length - 1) {
                i++;
            } else {
                i = 0;
            }
        }, 8000);

        $(document).on('click', '.carousel-btns li', function () {
            isPaused = true,
            t = $(this).data('target');
            changeSlide(slides[t]);
            i = t;
        });
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
            if (!$(this).hasClass('footer-link')) {
                $(this).addClass('active');
            } else {
                debugger;
                $('.navbar-nav li').removeClass('active');
                $('.navbar-nav li a[data-page="'+ $(this).data('page') +'"]').parent('li').addClass('active');
            }
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

        $(document).on('click', '.navbar-nav li a', function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    }
};

// Function for newsletter form on footer
var newsletter = {
    init: function () {
        var send = function () {
            var input = $('.newsletter-input'),
                email = input.val();

            if (input[0].checkValidity()) {
                $('.navbar-nav li a[data-page=".contact-page"]').click();

                $('.contact-email').val(email);
                $('.contact-message').val('Hey! I wanna get a news');
                input.val('');
            }
        };

        $(document).on('click', '.newsletter-btn', send);

        $(document).on('keyup', '.newsletter-input', function (e) {
            if (e.keyCode == 13) {
                send();
            }
        });
    }
};
