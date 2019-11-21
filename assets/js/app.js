// SETTINGS
const PLATFORM_HOST_AND_PORT = "platform.exabyte.io";
//const PLATFORM_HOST_AND_PORT = "localhost:4000";  // uncomment for local development
const REST_API_URL = `https://${PLATFORM_HOST_AND_PORT}/api/2018-10-01`;


// FUNCTIONS
$(document).ready(function () {
    loaderReady();
    dumbRouter.init();
    newsletter.init();
    cssTitleSlider.init();
    goToPathname();
    getTotalEntityCounts();
});

const animateNumberCountBySelector = (count, selector) => {
    $({countNum: $(selector).html()}).animate({countNum: count}, {
        duration: 2000,
        easing: 'swing',
        step: function () {
            const count = parseFloat(Math.floor(this.countNum)).toLocaleString();
            $(selector).html(count + "+");
        },
        complete: function () {
            const count = parseFloat(this.countNum).toLocaleString();
            $(selector).html(this.countNum.toLocaleString());
        }
    });
};

const getTotalEntityCounts = () => {
    $.ajax({
        url: `${REST_API_URL}/other/entity-counts`,
    }).then(function (data) {
        const array = data.data;
        const getCountByName = (name) => (array.find(o => o.name === name) || {count: "N/A"}).count;

        animateNumberCountBySelector(getCountByName("Jobs"), '#total-count-jobs h2');
        animateNumberCountBySelector(getCountByName("Materials"), '#total-count-materials h2');
        animateNumberCountBySelector(getCountByName("Workflows"), '#total-count-workflows h2');
        animateNumberCountBySelector(getCountByName("Properties"), '#total-count-properties h2');

    });
};

var loaderReady = function () {
    // hide preloader and show main content
    setTimeout(function () {
        $('.spinner-wrap').hide();
        // generateCompanyList is imported from "./company-list.js"
        $('#main-content').show().animate({opacity: 1}, 900, generateCompanyList);
    }, 0);
};

// checks whether the click target has a link contained in the array
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

var handlePageChange = function () {
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

    selector = $(this).data('page') ? $(this).data('page') : $(this).find('a').data('page');
    headTitle = $(this).data('header') ? $(this).data('header') : $(this).find('a').data('header');
    headCls = $(this).data('cls') ? $(this).data('cls') : $(this).find('a').data('cls');
    $('#header').addClass(headCls).find(headTitle).show().css({opacity: 1});
    $(selector).show().animate({opacity: 1}, 600);
    $('html, body').animate({scrollTop: 0}, '500', 'swing');
};

var dumbRouter = {
    init: function () {

        $(document).on('click', '.navbar-nav li', handlePageChange);
        $(document).on('click', '.logo a', handlePageChange);
        $(document).on('click', '#footer a', handlePageChange);

        $(document).on('click', '.navbar-nav li a', function (event) {
            $(".navbar-collapse").collapse('hide');
        });
    }
};

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
            if (e.keyCode === 13) {
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
