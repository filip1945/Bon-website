window.addEventListener("load", function () {

    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("sendButton");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            sendButton.disabled = true;
            sendButton.innerText = "Се испраќа...";
            formStatus.innerText = "";

            emailjs.sendForm(
                "service_jc3sf2m",
                "template_4ss05jn",
                contactForm,
                {
                    publicKey: "nqytrEwl0FQUxR7WF"
                }
            )
                .then(function () {

                    formStatus.innerText = "Пораката е успешно испратена.";
                    contactForm.reset();

                })
                .catch(function (error) {

                    console.log("EMAILJS ERROR:", error);

                    formStatus.innerText =
                        "Грешка " + error.status + ": " + error.text;

                })
                .finally(function () {

                    sendButton.disabled = false;
                    sendButton.innerText = "Испрати порака";

                });

        });

    }

    if (typeof anime === "undefined") return;

    function animateIfExists(selector, settings) {
        const el = document.querySelector(selector);

        if (el) {
            anime({
                targets: el,
                ...settings
            });
        }
    }

    function observeAndAnimate(selector, settings, threshold = 0.25) {
        const el = document.querySelector(selector);

        if (!el) return;

        el.style.opacity = "0";

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    anime({
                        targets: el,
                        ...settings
                    });

                    obs.unobserve(el);
                }
            });
        }, { threshold });

        observer.observe(el);
    }

    function observeGroup(selector, settings, threshold = 0.2) {
        const els = document.querySelectorAll(selector);

        if (els.length === 0) return;

        els.forEach(el => el.style.opacity = "0");

        const wrap = els[0].parentElement;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    anime({
                        targets: selector,
                        ...settings
                    });

                    obs.unobserve(wrap);
                }
            });
        }, { threshold });

        observer.observe(wrap);
    }

    function startCounters() {
        const counters = document.querySelectorAll('.counter');
        const stats = document.getElementById('stats');

        if (!stats || counters.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    counters.forEach(counter => {

                        if (counter.dataset.started === "true") return;

                        counter.dataset.started = "true";

                        const target = +counter.getAttribute("data-target");
                        const type = counter.getAttribute("data-type");
                        let current = 0;
                        const increment = target / 100;

                        const update = () => {
                            current += increment;

                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                setTimeout(update, 20);
                            } else {

                                if (type === "%") {
                                    counter.innerText = target + "%";
                                } else {
                                    counter.innerText = target + "+";
                                }
                            }
                        };

                        update();
                    });

                    obs.unobserve(stats);
                }
            });
        }, { threshold: 0.4 });

        observer.observe(stats);
    }

    startCounters();

    animateIfExists("#nav", {
        opacity: [0, 1],
        translateY: [-40, 0],
        duration: 1400,
        easing: "easeOutExpo"
    });

    animateIfExists("#hero small", {
        opacity: [0, 1],
        translateY: [-30, 0],
        delay: 150,
        duration: 1300,
        easing: "easeOutExpo"
    });

    animateIfExists("#hero h1", {
        opacity: [0, 1],
        translateY: [-50, 0],
        delay: 250,
        duration: 1700,
        easing: "easeOutExpo"
    });

    animateIfExists("#hero p", {
        opacity: [0, 1],
        translateY: [-35, 0],
        delay: 500,
        duration: 1500,
        easing: "easeOutExpo"
    });

    animateIfExists("#desen", {
        opacity: [0, 1],
        translateX: [-80, 0],
        delay: 300,
        duration: 1700,
        easing: "easeOutExpo"
    });

    animateIfExists("#lev", {
        opacity: [0, 1],
        translateX: [100, 0],
        delay: 500,
        duration: 1800,
        easing: "easeOutExpo"
    });

    animateIfExists("#socijalni", {
        opacity: [0, 1],
        translateY: [70, 0],
        delay: 700,
        duration: 1700,
        easing: "easeOutExpo"
    });

    animateIfExists("#forma", {
        opacity: [0, 1],
        translateY: [70, 0],
        delay: 950,
        duration: 1700,
        easing: "easeOutExpo"
    });

    animateIfExists("#footer", {
        opacity: [0, 1],
        delay: 1200,
        duration: 1500,
        easing: "linear"
    });

    animateIfExists("#pocetok", {
        opacity: [0, 1],
        translateY: [70, 0],
        delay: 600,
        duration: 1700,
        easing: "easeOutExpo"
    });

    animateIfExists("#lev img", {
        translateY: [0, -12],
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        duration: 2200
    });

    observeAndAnimate("#section2 #levo", {
        opacity: [0, 1],
        translateX: [-80, 0],
        duration: 1800,
        easing: "easeOutExpo"
    });

    observeAndAnimate("#desno", {
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 1800,
        easing: "easeOutExpo"
    });

    observeAndAnimate("#naslov", {
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1700,
        easing: "easeOutExpo"
    });

    observeGroup(".karticka", {
        opacity: [0, 1],
        translateY: [80, 0],
        delay: anime.stagger(180),
        duration: 1600,
        easing: "easeOutExpo"
    });

});