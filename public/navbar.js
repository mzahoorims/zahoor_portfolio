/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


/* Open / Close menu */

if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("open");

            menuButton.classList.toggle("active");

        }
    );
}


/* Close menu after clicking link */

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove("open");

                menuButton.classList.remove("active");

            }
        );

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(
                    (link) => {

                        link.classList.remove("active");

                    }
                );


                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        }
    );
}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();