// Navbar
$(document).ready(function () {
    $('.navbar-toggler-open').click(function () {
        $('.navbar-collapse').addClass('navbarShow');
    })

    $('.navbar-toggler-close').click(function () {
        $('.navbar-collapse').removeClass('navbarShow');
    })

    // Transition Stopper
    let resizeTimer;
    $(window).resize(function () {
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $(document.body).removeClass
            ('.resize-transition-stopper')
        }, 400);
    });

    // Featured Carousel
    $('#featured .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    // Categories Carousel
    $('#categories .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
                loop: true
            }
        }
    });
})