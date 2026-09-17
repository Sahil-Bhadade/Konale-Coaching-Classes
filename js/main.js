/* ==========================================================================
   KONALE COACHING CLASSES — SHARED SITE SCRIPT
   --------------------------------------------------------------------------
   This one file runs on every page. Each part below is independent and
   simply checks whether the elements it needs exist before doing anything,
   so it's safe to include on any page even if that page doesn't have every
   element (e.g. the stat counter only runs on the home page).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. Header shadow after scrolling ---------- */
    var header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* ---------- 2. Mobile menu (hamburger) ---------- */
    var menuToggle = document.getElementById('menuToggle');
    var navLinks = document.getElementById('navLinks');
    var navOverlay = document.getElementById('navOverlay');

    function closeMenu() {
        if (menuToggle) menuToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        if (menuToggle) menuToggle.classList.add('active');
        if (navLinks) navLinks.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close the mobile menu automatically once a link is tapped
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    /* ---------- 3. Reveal-on-scroll animation ---------- */
    // We add the "reveal" class here with JS (not in the HTML/CSS) so that
    // if JavaScript ever fails to load, nothing on the page stays hidden —
    // visitors will just see everything immediately instead of animated in.
    var revealSelectors = [
        '.section-title',
        '.proud',
        '.course-banner .course',
        '.expert-details',
        '.stat-card',
        '.contact-info-card',
        '.contact-form-card',
        '.course-detail-main',
        '.course-side-card'
    ];
    var revealTargets = document.querySelectorAll(revealSelectors.join(','));

    if (revealTargets.length && 'IntersectionObserver' in window) {
        revealTargets.forEach(function (el) {
            el.classList.add('reveal');
        });

        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    /* ---------- 4. Stat counter (count-up animation) ---------- */
    var statNumbers = document.querySelectorAll('.number[data-target]');

    function animateCount(el) {
        var target = parseFloat(el.dataset.target);
        var decimals = parseInt(el.dataset.decimals || '0', 10);
        var suffix = el.dataset.suffix || '';
        var duration = 1500; // milliseconds
        var startTime = null;

        function update(currentTime) {
            if (startTime === null) startTime = currentTime;
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - (1 - progress) * (1 - progress); // ease-out
            var value = eased * target;

            el.textContent = value.toFixed(decimals).replace(
                /\B(?=(\d{3})+(?!\d))/g, ','
            ) + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toFixed(decimals) + suffix;
            }
        }

        requestAnimationFrame(update);
    }

    if (statNumbers.length && 'IntersectionObserver' in window) {
        var statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statNumbers.forEach(function (el) {
            statObserver.observe(el);
        });
    }

    /* ---------- 5. Back-to-top button ---------- */
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- 6. Contact form (only on contact.html) ---------- */
    // Security note: this form does not send data anywhere by itself —
    // there is no backend wired up yet, so nothing can leak. It only
    // validates the fields and shows a success message. When you're ready
    // to actually receive enquiries, connect a form service (e.g. Formspree,
    // EmailJS, Google Forms) or your own server, and send the data with
    // fetch() from inside the "submit" handler below — always over HTTPS,
    // and never put a private API key directly in this file.
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        var successBox = document.getElementById('formSuccess');

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            if (successBox) {
                successBox.classList.add('show');
                successBox.textContent = 'Thanks! Your message has been noted. Our team will call you back soon.';
                successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            contactForm.reset();
        });
    }

    /* ---------- 7. Results page filter chips (only on results.html) ---------- */
    var filterChips = document.querySelectorAll('.filter-chip');
    var filterCards = document.querySelectorAll('[data-exam]');

    if (filterChips.length && filterCards.length) {
        filterChips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                filterChips.forEach(function (c) { c.classList.remove('active'); });
                chip.classList.add('active');

                var exam = chip.dataset.filter; // "all", "neet", "jee", "cet"

                filterCards.forEach(function (card) {
                    if (exam === 'all' || card.dataset.exam === exam) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

});
