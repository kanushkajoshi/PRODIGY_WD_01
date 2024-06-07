document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const navItems = document.querySelectorAll(".nav-item a");

    navItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.style.color = "#388E3C"; /* Change font color on hover */
            item.style.transform = "scale(1.1)"; /* Scale up on hover */
        });

        item.addEventListener("mouseout", function() {
            item.style.color = ""; /* Reset font color on mouse out */
            item.style.transform = ""; /* Reset transform on mouse out */
        });
    });
});
