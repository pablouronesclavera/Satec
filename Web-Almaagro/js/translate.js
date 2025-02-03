document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        es: {
            title: "Bienvenido a mi sitio web",
            description: "Este es un sitio de demostración para la traducción de idiomas.",
            buttonText: "Haz clic aquí"
        },
        en: {
            title: "Welcome to my website",
            description: "This is a demo site for language translation.",
            buttonText: "Click here"
        }
    };

    let currentLanguage = 'es';
    const languageLinks = document.querySelectorAll(".language-switch");

    function translatePage(language) {
        document.getElementById("title").textContent = translations[language].title;
        document.getElementById("description").textContent = translations[language].description;
        document.getElementById("button").textContent = translations[language].buttonText;
        currentLanguage = language;
    }

    languageLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const lang = this.getAttribute("data-lang");
            translatePage(lang);
        });
    });

    // Inicialización con el idioma por defecto
    translatePage(currentLanguage);
});
