(function (window) {
    'use-strict';

    const mobileMenuButtons = document.querySelectorAll('[data-mobile-menu]');
    const landingNav = document.querySelector('[data-landing-nav]');
    const landingNavMenuItems = document.querySelectorAll('[data-anchor]');
    const scrollToTopElement = document.querySelector('[data-scroll-top]');
    const sections = {
        'features': document.querySelector('#features'),
        'benefits': document.querySelector('#benefits'),
        'price': document.querySelector('#price'),
        'follow': document.querySelector('#follow')
    }

    function toggleMobileNav() {
        landingNav.classList.toggle('landing-nav__mobile--open');
    }

    function scrollToTopToggle() {
        const currentWindowOffset = window.pageYOffset;

        if (currentWindowOffset > 0) {
            if (!scrollToTopElement.classList.contains('show-fade-in')) {
                scrollToTopElement.classList.add('show-fade-in');
            }
        } else {
            scrollToTopElement.classList.remove('show-fade-in');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    function goToSection(e) {
        const selectedMenuItem = e.currentTarget;
        const sectionSelected = selectedMenuItem.dataset.anchor;
        const elementOffsetTopValue = sections[sectionSelected].offsetTop;

        if(landingNav.classList.contains('landing-nav__mobile--open')) {
            toggleMobileNav();
        }

        window.scrollTo({
            top: elementOffsetTopValue,
            left: 0,
            behavior: 'smooth'
          });
    }

    landingNavMenuItems.forEach(element => {
        element.addEventListener('click', goToSection);
    });

    mobileMenuButtons.forEach(element => {
        element.addEventListener('click', toggleMobileNav);
    });

    scrollToTopElement.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', scrollToTopToggle);
})(window);