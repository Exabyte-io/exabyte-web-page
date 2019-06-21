var loader = (function () {
    var count;

    function load(array) {
        count = array.length;
        $.each(array, function (i, link) {
            var img = new Image();
            img.src = link;
            img.onload = imageLoaded;
        });
    }

    function imageLoaded() {
        count--;
        if (count == 0) {
            ready();
        }
    }

    function ready() {
        $(document).ready(function () {
            // hide preloader and show main content
            setTimeout(function () {
                $('.spinner-wrap').hide();
                // generateCompanyList is imported from "./company-list.js"
                $('#main-content').show().animate({opacity: 1}, 900, generateCompanyList);
                loadParticleJS();
//                loadnNotifyJs();
            }, 100);
        });
    }

    var isCrawler = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

    return {
        require: isCrawler ? ready : load
    }
})();

loader.require([
    'img/airplane-factory.jpg'
//    'img/screencast.gif'
//    'img/battery-factory.jpeg',
//    'img/chemical-plant.jpg',
//    'img/semiconductor-fab.jpg',
//    'img/solar-plant.jpg'
]);

$(document).ready(function () {
    // TODO: clean up carousel artifacts
    // simpleCarousel.init();
    dumbRouter.init();
    newsletter.init();
    cssTitleSlider.init();
    goToPathname();
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
        setTimeout(function () {
            if (!$('#header').hasClass('subpage')) {
                $('#header').removeClass().addClass('image dim').addClass(target.val).addClass('active');
            }
        }, 500);
    },
    init: function () {
        setInterval(function () {
            simpleCarousel.changeSlide(simpleCarousel.slides[simpleCarousel.i], simpleCarousel.i);
            if (simpleCarousel.i < simpleCarousel.slides.length - 1) {
                simpleCarousel.i++;
            } else {
                simpleCarousel.i = 0;
            }
        }, 20000);

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

// checks whether the a JQuery click target has a link contained in a list
var _checkURLlinks = function (target, array) {
    for (var i = 0; i < array.length; i++) {
        element = array[i];
        if (
            target.find('a').attr('href') &&
            target.find('a').attr('href').indexOf(element) > 0 ||
            target.attr('href') &&
            target.attr('href').indexOf(element) > 0)
            return true;
    }
    return false;
};

// click on subpage hash from url
var goToPathname = function () {
    // exclude anchors that are not pages
    var excludeNames = ["screencast"];
    var pathname = window.location.hash.replace("#", "");
    if (excludeNames.indexOf(pathname) > 0) return;
    $("a[data-page='." + pathname + "-page']").click()
};

var changeFunction = function () {
    var selector,
        headCls,
        headTitle;
    // catch links that redirect to
    if (_checkURLlinks($(this),
        [
            "localhost:3000",
            "platform.exabyte.io",
            "docs.exabyte.io",
            "blog.exabyte.io",
            "exabyte.docsend.com",
            "angel.co",
            "linkedin.com",
            "youtube.com",
            "github.com",
        ])) {
        return;
    }

    $('div[class$="-page"]').hide().css({opacity: 0});
    $('div[class$="-head"]').hide().css({opacity: 0});
    $('#header').removeClass();

    if ($(this).hasClass('footer-link') || $(this).hasClass('exabyte-logo')) {
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li a[data-page="' + $(this).data('page') + '"]').parent('li').addClass('active');
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
    $(selector).show().animate({opacity: 1}, 600);
    $('html, body').animate({scrollTop: 0}, '500', 'swing');
};

// Function for page navigation
var dumbRouter = {
    init: function () {

        $(document).on('click', '.navbar-nav li', changeFunction);
        $(document).on('click', '.logo a', changeFunction);
        $(document).on('click', '#footer a', changeFunction);

        $(document).on('click', '.navbar-nav li a', function (event) {
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

            // click on contact us link in footer
            $('a[href="#contact"]').click();

            $('#mce-EMAIL').val(email);
            $('#mce-MMERGE3').val('Greetings, I am interested in ...');
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

// Enable title slider animation
var cssTitleSlider = {
    init: function () {
        if (!$('.vscroll').hasClass('active')) {
            $('.vscroll').addClass('active');
        }
    }
};

// Enable title animation on scrolling
var onScrollDown = {
    init: function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                if (!$('.vscroll').hasClass('active')) {
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

var particleJSConfig = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

function loadParticleJS() {
    particlesJS(particleJSConfig);
}

function loadnNotifyJs() {

    //add a new style 'updates'
    $.notify.addStyle('updates', {
        html: `
            <div class='clearfix'>
                <div class='title exb-color' data-notify-html='title'/>
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    <div class='buttons'>
                        <a href="https://arxiv.org/abs/1807.05623" 
                            target="_blank" class='btn btn-outline no'>Manuscript</a>
                        <a href="https://platform.exabyte.io/exabyte-io/projects/exabyte-io-2018-bg-study-phase-i" 
                            target="_blank" class='btn btn-outline no'>Open Data</a>
                    </div>
                </div>
            </div>
        `
    });

    //listen for click events from this style
    $(document).on('click', '.notifyjs-updates-base .close', function () {
        //programmatically trigger propogating hide event
        $(this).trigger('notify-hide');
    });

    $.notify({
        title: 'Recent updates:',
    }, {
        position: "left bottom",
        style: 'updates',
        showDuration: 500,
        autoHide: false,
        clickToHide: false
    });
}
