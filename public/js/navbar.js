/* =========================================================
   NAVIGATION & ACTIVE SCROLL SPY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    /* Toggle Mobile Navigation Drawer */
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuButton.classList.toggle("active");
        });
    }

    /* Close Mobile Drawer on Link Click */
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navMenu && menuButton) {
                navMenu.classList.remove("open");
                menuButton.classList.remove("active");
            }
        });
    });

    /* Active Scroll Spy */
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNavigation() {
        const scrollPosition = window.scrollY + 160;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", updateActiveNavigation, { passive: true });
    updateActiveNavigation();
});
