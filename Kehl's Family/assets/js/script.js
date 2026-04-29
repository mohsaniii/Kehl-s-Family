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
            nav: true,
            navText:['<img src="./assets/images/home/prev-arrow.png" alt="prev-arrow">', '<img src="./assets/images/home/next-arrow.png" alt="next-arrow">'],
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

    // ============================================================
    // CAREERS PAGE — JOB CARDS + MODALS
    // ============================================================

    var carCurrentTitle    = '';
    var carCurrentLocation = '';

    var carDescriptions = [
        '<p>We are seeking a skilled and motivated <strong>Marine Service Technician</strong> to join the team at Kehl\'s Family Boating Center in Lindenhurst, NY. In this full-time role you will perform diagnostics, maintenance, and repairs on a wide variety of marine engines and vessels, including Sea Pro and Crownline boats and Suzuki / Mercury outboards.</p>'
        + '<p class="mt-3"><strong>Responsibilities:</strong></p>'
        + '<ul><li>Diagnose and repair mechanical, electrical, and hydraulic systems on marine vessels</li><li>Perform scheduled maintenance including winterization and springization services</li><li>Complete warranty repairs according to manufacturer specifications</li><li>Maintain accurate service records and communicate status to service advisors</li><li>Keep the service area clean, safe, and organized</li></ul>'
        + '<p class="mt-3"><strong>Requirements:</strong></p>'
        + '<ul><li>2+ years of marine engine repair experience</li><li>Familiarity with Mercury or Suzuki outboards preferred</li><li>Strong mechanical and electrical troubleshooting skills</li><li>Valid driver\'s license required</li><li>Marine industry certification a plus</li></ul>',

        '<p>We are looking for an enthusiastic and results-driven <strong>Boat Sales Consultant</strong> to join our team at Kehl\'s Family Boating Center. You will work directly with customers to guide them through the boat buying process, from first visit to delivery.</p>'
        + '<p class="mt-3"><strong>Responsibilities:</strong></p>'
        + '<ul><li>Greet and assist customers in selecting new and pre-owned boats</li><li>Develop and maintain a strong knowledge of our Sea Pro and Crownline inventory</li><li>Prepare quotes, work with financing partners, and close sales</li><li>Follow up with leads and maintain CRM records</li><li>Participate in boat shows and dealership events</li></ul>'
        + '<p class="mt-3"><strong>Requirements:</strong></p>'
        + '<ul><li>1+ years of retail or automotive/marine sales experience preferred</li><li>Excellent interpersonal and communication skills</li><li>Passion for boating and the marine lifestyle</li><li>Valid driver\'s license required</li><li>Willingness to work weekends during peak season</li></ul>',

        '<p>Kehl\'s Family Boating Center is hiring a detail-oriented <strong>Parts &amp; Accessories Specialist</strong> to manage our parts department and help customers find exactly what they need for their boats.</p>'
        + '<p class="mt-3"><strong>Responsibilities:</strong></p>'
        + '<ul><li>Assist customers and service technicians in identifying and sourcing parts</li><li>Process parts orders, returns, and inventory adjustments</li><li>Maintain accurate inventory counts and stock levels</li><li>Coordinate with vendors and track incoming shipments</li><li>Keep the parts department organized and properly labeled</li></ul>'
        + '<p class="mt-3"><strong>Requirements:</strong></p>'
        + '<ul><li>Experience in a parts department (marine, automotive, or powersports preferred)</li><li>Familiarity with parts lookup software</li><li>Strong organizational and customer service skills</li><li>Ability to lift 50+ lbs</li><li>Valid driver\'s license required</li></ul>'
    ];

    function carOpenModal($overlay) {
        $overlay.addClass('carModalActive');
        $('body').addClass('carBodyLocked');
    }

    function carCloseModal($overlay) {
        $overlay.removeClass('carModalActive');
        if (!$('.carModalOverlay.carModalActive').length) {
            $('body').removeClass('carBodyLocked');
        }
    }

    function carOpenAppModal() {
        $('#appJobTitle').text(carCurrentTitle);
        $('#appJobLoc').text(carCurrentLocation);
        // Reset form if previously submitted
        $('#carAppForm').show();
        $('.carAppSuccess').addClass('d-none');
        $('#carAppForm')[0].reset();
        $('.carFileLabel').text('No File Chosen');
        carOpenModal($('#carAppModal'));
    }

    // Job Description button
    $(document).on('click', '.carJobDescBtn', function () {
        var $card = $(this).closest('.carJobCard');
        carCurrentTitle    = $card.data('title');
        carCurrentLocation = $card.data('location');
        var idx            = parseInt($card.data('index'), 10);

        $('#descJobTitle').text(carCurrentTitle);
        $('#descJobLoc').text(carCurrentLocation);
        $('#descJobBody').html(carDescriptions[idx] || '');

        carOpenModal($('#carDescModal'));
    });

    // Apply Now button on cards
    $(document).on('click', '.carApplyBtn', function () {
        var $card = $(this).closest('.carJobCard');
        carCurrentTitle    = $card.data('title');
        carCurrentLocation = $card.data('location');
        carOpenAppModal();
    });

    // "Apply Now" inside description modal
    $(document).on('click', '.carDescToApply', function () {
        carCloseModal($('#carDescModal'));
        carOpenAppModal();
    });

    // Close buttons (X)
    $(document).on('click', '#carDescClose', function () {
        carCloseModal($('#carDescModal'));
    });

    $(document).on('click', '#carAppClose', function () {
        carCloseModal($('#carAppModal'));
    });

    // Close on overlay click
    $(document).on('click', '.carModalOverlay', function (e) {
        if ($(e.target).is('.carModalOverlay')) {
            carCloseModal($(this));
        }
    });

    // Close on Escape key
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            carCloseModal($('.carModalOverlay.carModalActive'));
        }
    });

    // File input → update label
    $(document).on('change', '.carFileInput', function () {
        var name = this.files && this.files.length ? this.files[0].name : 'No File Chosen';
        $(this).closest('.carUploadRow').find('.carFileLabel').text(name);
    });

    // Application form submit
    $(document).on('submit', '#carAppForm', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.carAppSuccess').removeClass('d-none');
    });

    // Smooth scroll for "Available Positions" button
    $(document).on('click', '.carScrollToPositions', function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href'));
        if ($target.length) {
            var offset = $target.offset().top - 96;
            $('html, body').animate({ scrollTop: offset }, 500);
        }
    });

    // ============================================================
    // FINANCING PAGE — PAYMENT CALCULATOR
    // ============================================================
    $('#finCalcBtn').on('click', function () {
        var price    = parseFloat($('#finTotalPrice').val())    || 0;
        var down     = parseFloat($('#finDownPayment').val())   || 0;
        var years    = parseFloat($('#finTermYears').val())     || 0;
        var annRate  = parseFloat($('#finInterestRate').val())  || 0;
        var $result  = $('#finCalcResult');

        var principal = price - down;

        if (principal <= 0 || years <= 0) {
            $result.text('Please enter a valid purchase price, down payment, and term.');
            return;
        }

        var months = years * 12;
        var monthly;

        if (annRate === 0) {
            monthly = principal / months;
        } else {
            var r = annRate / 100 / 12;
            monthly = principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
        }

        $result.text('Est. Monthly Payment: $' + monthly.toFixed(2));
    });

});
