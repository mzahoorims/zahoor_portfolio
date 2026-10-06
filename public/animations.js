/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-main, .about-card, .experience-card, .skill-category, .pipeline, .project-card, .contact-card"
    );


revealElements.forEach(
    (element) => {

        element.classList.add("reveal");

    }
);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);