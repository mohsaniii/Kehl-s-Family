$(document).ready(function () {

    // ============================================================
    // KEHL'S PAGE — DESKTOP SIDE MENU
    // ============================================================
    $('.kehlDesktopNav .kehlNavBrand').on('click', function (e) {
        // Logo click navigates, not menu
    });

    // Side menu open: clicking the nav brand area (if hamburger added later)
    // Currently triggered programmatically if needed
    $(document).on('click', function (e) {
        if (
            !$(e.target).closest('.kehlSideMenu').length &&
            !$(e.target).closest('.kehlMobileHamburger').length
        ) {
            $('.kehlSideMenu').removeClass('kehlSideMenuOpen');
        }
    });

    $('.kehlSideMenuClose').on('click', function (e) {
        e.stopPropagation();
        $('.kehlSideMenu').removeClass('kehlSideMenuOpen');
    });

    // ============================================================
    // KEHL'S PAGE — MOBILE SIDE MENU
    // ============================================================
    $('.kehlMobileHamburger').on('click', function (e) {
        e.stopPropagation();
        $('.kehlMobileSideMenu').toggleClass('kehlMobileSideMenuOpen');
    });

    $('.kehlMobileSideMenuClose').on('click', function (e) {
        e.stopPropagation();
        $('.kehlMobileSideMenu').removeClass('kehlMobileSideMenuOpen');
    });

    $(document).on('click', function (e) {
        if (
            !$(e.target).closest('.kehlMobileSideMenu').length &&
            !$(e.target).closest('.kehlMobileHamburger').length
        ) {
            $('.kehlMobileSideMenu').removeClass('kehlMobileSideMenuOpen');
        }
    });

    // ============================================================
    // KEHL'S PAGE — NEW ARRIVALS MOBILE CAROUSEL
    // ============================================================
    if ($('.kehlArrivalCarousel').length) {
        $('.kehlArrivalCarousel').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            responsive: {
                0: { items: 1.15, margin: 16 },
                480: { items: 1.3, margin: 20 },
                768: { items: 2.1, margin: 20 }
            }
        });
    }

    // ============================================================
    // KEHL'S PAGE — PROMOTION CAROUSEL (with custom prev/next)
    // ============================================================
    if ($('.kehlPromoCarousel').length) {
        var $promoCarousel = $('.kehlPromoCarousel').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            animateOut: 'fadeOut',
            responsive: {
                0: { items: 1 },
                768: { items: 1 },
                1200: { items: 1 }
            }
        });

        $('.kehlPromoNavPrev').on('click', function () {
            $promoCarousel.trigger('prev.owl.carousel');
        });
        $('.kehlPromoNavNext').on('click', function () {
            $promoCarousel.trigger('next.owl.carousel');
        });
    }

    // ============================================================
    // KEHL'S PAGE — VIDEOS MOBILE CAROUSEL
    // ============================================================
    if ($('.kehlVideoCarousel').length) {
        $('.kehlVideoCarousel').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            responsive: {
                0: { items: 1.1, margin: 16 },
                480: { items: 1.3, margin: 20 },
                768: { items: 2.1, margin: 20 }
            }
        });
    }

});
