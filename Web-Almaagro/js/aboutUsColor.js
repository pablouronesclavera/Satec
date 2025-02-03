document.addEventListener("DOMContentLoaded", () => {
    const aboutUsSection = document.querySelector('section[title="aboutus"]');
    const initialColor = [131, 220, 210];  
    const finalColor = [226, 222, 197];  

    function updateBackground() {
        const rect = aboutUsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcula el progreso de la transición (0: fuera de vista, 1: completamente en vista)
        let progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / windowHeight));

        // Interpolación de color
        const newColor = initialColor.map((start, i) => 
            Math.round(start + progress * (finalColor[i] - start))
        );

        aboutUsSection.style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
    }

    window.addEventListener("scroll", updateBackground);
});
