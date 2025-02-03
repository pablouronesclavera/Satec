document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const openMenuIcon = document.querySelector(".menu-toggle .open-menu");
    const closeMenuIcon = document.querySelector(".menu-toggle .close-menu");

    if (!menuToggle || !mobileMenu || !openMenuIcon || !closeMenuIcon) {
        console.error("Error: No se encontraron los elementos del menú.");
        return;
    }

    function toggleMenu(open) {
        if (open) {
            mobileMenu.classList.add("show");
            openMenuIcon.style.display = "none"; // Oculta ☰
            closeMenuIcon.style.display = "inline"; // Muestra ✖
        } else {
            mobileMenu.classList.remove("show");
            openMenuIcon.style.display = "inline"; // Muestra ☰
            closeMenuIcon.style.display = "none"; // Oculta ✖
        }
    }

    // Evento para abrir/cerrar menú
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("show");
        toggleMenu(!isOpen);
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    // Cerrar menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            toggleMenu(false);
        }
    });

    // Asegurar que el menú se oculta si la pantalla se agranda
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
            toggleMenu(false);
        }
    });
});


