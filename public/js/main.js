/* =========================================================
   MAIN CLIENT JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Copyright Year
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Body Loaded State
    document.body.classList.add("page-loaded");
});
