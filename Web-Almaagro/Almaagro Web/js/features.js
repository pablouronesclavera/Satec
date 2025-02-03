let currentSlide = 0;
let slideInterval;

// Inicializar el slider
function initSlider() {
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000); // Cambiar automáticamente cada 5 segundos
}

// Mostrar una diapositiva específica
function showSlide(index) {
    const images = document.querySelectorAll('#slider .slider-images img');
    const dots = document.querySelectorAll('#slider .slider-controls .dot');

    // Ocultar todas las imágenes y desactivar los puntos
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });

    currentSlide = index;
}

// Pasar a la siguiente diapositiva
function nextSlide() {
    const images = document.querySelectorAll('#slider .slider-images img');
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

// Cambiar a una diapositiva específica al hacer clic en un punto
function changeSlide(index) {
    clearInterval(slideInterval); // Detener la rotación automática al interactuar
    showSlide(index);
    slideInterval = setInterval(nextSlide, 5000); // Reiniciar la rotación automática
}

// Inicializar el slider al cargar la página
document.addEventListener('DOMContentLoaded', initSlider);
