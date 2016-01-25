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
            setTimeout(function () {
                $('.spinner-wrap').hide();
                $('#main-content').show().animate({ opacity: 1 }, 900);
            }, 1000);
        });
    }

    return {
     require: load
    }
})();

loader.require([
    'img/airplane-factory.jpg',
    'img/battery-factory.jpeg',
    'img/chemical-plant.jpg',
    'img/semiconductor-fab.jpg',
    'img/solar-plant.jpg'
]);

$(document).ready(function () {
    simpleCarousel.init();
    dumbRouter.init();
    newsletter.init();
    onScrollDown.init();
});

// This simple carousel for header background
var simpleCarousel = {
    i: 1,
    slides: [
        {
            val: 'lab'
        },
        {
            val: 'solar'
        },
        {
            val: 'chemical'
        },
        {
            val: 'factory'
        },
        {
            val: 'boeing'
        }
    ],
    changeSlide: function (target, i) {
        var currItem = $('.carousel-btns li');
        currItem.removeClass('active');
        $(currItem[i]).addClass('active');
        simpleCarousel.i = i;
        setTimeout( function () {
            if (!$('#header').hasClass('subpage')) {
                $('#header').removeClass().addClass('image dim').addClass(target.val).addClass('active');
            }
        }, 500);
    },
    init: function () {
        setInterval(function () {
            simpleCarousel.changeSlide(simpleCarousel.slides[simpleCarousel.i], simpleCarousel.i);
            if ( simpleCarousel.i < simpleCarousel.slides.length - 1) {
                simpleCarousel.i++;
            } else {
                simpleCarousel.i = 0;
            }
        }, 8000);

        $(document).on('click', '.carousel-btns li', function () {
            var t = $(this).data('target');
            simpleCarousel.changeSlide(simpleCarousel.slides[t], t);
            simpleCarousel.i = t;
        });
    },
    getI: function () {
        return simpleCarousel.i;
    },
    setI: function (val) {
        simpleCarousel.i = val;
    },
    goSlide: function (i) {
        simpleCarousel.changeSlide(simpleCarousel.slides[i], i);
    }
};

// Function for page navigation
var dumbRouter = {
    init: function () {
        var changeFunction = function() {
            var selector,
                headCls,
                haedTitle;

            // catch links that redirect to platform.exabyte.io
            if ($(this).find('a').attr('href') &&
                $(this).find('a').attr('href').indexOf("platform.exabyte.io") > 0 ||
                $(this).attr('href') &&
                $(this).attr('href').indexOf("platform.exabyte.io") > 0) {
                console.log($(this).attr('href'));
                return;
            }

            $('div[class$="-page"]').hide().css({ opacity: 0 });
            $('div[class$="-head"]').hide().css({ opacity: 0 });
            $('#header').removeClass();

            if ($(this).hasClass('footer-link') || $(this).hasClass('exabyte-logo')) {
                $('.navbar-nav li').removeClass('active');
                $('.navbar-nav li a[data-page="'+ $(this).data('page') +'"]').parent('li').addClass('active');
            } else {
                $(this).parent('.nav').find('li').removeClass('active');
                $(this).addClass('active');
            }

            if ($(this).attr('title') == 'Home' || $(this).find('a').attr('title') == 'Home') {
                simpleCarousel.goSlide(0);
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

                $('.navbar-nav li a[data-page=".contact-page"]').click();

                $('.contact-email').val(email);
                $('.contact-message').val('Greetings! I would like to receive your newsletter to stay up to date. I would consider using exabyte.io for ... .');
                input.val('');
        };

        $(document).on('click', '.newsletter-btn', send);

        $(document).on('keyup', '.newsletter-input', function (e) {
            if (e.keyCode == 13) {
                send();
            }
        });
    }
};

// Enable title animation on scrolling
var onScrollDown = {
    init: function () {
        $(window).scroll(function() {
           if($(window).scrollTop() >= 200) {
                if(!$('.vscroll').hasClass('active')) {
                    $('.vscroll').addClass('active');
                }
           }
        });
    }
};

// Contact scroll validation
var formValidation = {
    validateForm: function (name, email, message) {
        var validateEmail = function (email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        },
        result = [];

        if ($.trim(name) != '') {
            $('#contact-name').parent().find('.text-danger').hide();
            result.push(true)
        } else {
            $('#contact-name').parent().find('.text-danger').show();
        }

        if (validateEmail(email)) {
            $('#contact-email').parent().find('.text-danger').hide();
            result.push(true)
        } else {
            $('#contact-email').parent().find('.text-danger').show();
        }

        if ($.trim(message) != '') {
            $('#contact-message').parent().find('.text-danger').hide();
            result.push(true)
        } else {
            $('#contact-message').parent().find('.text-danger').show();
        }

        return result[0] && result[1] && result[2] ? true : false;
    }
};
