/* =========================================================
   PROJECT CATEGORY FILTERING
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Remove active state from all filter buttons
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || cardCategory === filterValue) {
                    card.style.display = "flex";
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
