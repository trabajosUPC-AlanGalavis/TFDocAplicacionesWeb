function toggleMobileMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-mobile-menu');
    
    var languageMenu = document.querySelector('.language-menu');
    if (languageMenu.classList.contains('show-language-menu')) {
        languageMenu.classList.remove('show-language-menu');
    }
}

function toggleLanguageMenu() {
    var languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.toggle('show-language-menu');
}

// Agregamos una función para cambiar el idioma
function changeLanguage(lang) {
    var languageSelector = document.querySelector('.language-selector');
    var languageIcon = languageSelector.querySelector('.fa');
    languageSelector.innerHTML = lang + ' ' + languageIcon.outerHTML;
    toggleLanguageMenu(); // Ocultamos el menú de idiomas después de seleccionar uno
}

// Event listener para cambiar el idioma cuando se hace clic en una opción
document.addEventListener('click', function(event) {
    var languageMenu = document.querySelector('.language-menu');
    if (event.target.classList.contains('language-option')) {
        var selectedLanguage = event.target.textContent;
        changeLanguage(selectedLanguage);
    } else if (!event.target.closest('.language-menu') && !event.target.closest('.language-selector')) {
        if (languageMenu.classList.contains('show-language-menu')) {
            languageMenu.classList.remove('show-language-menu');
        }
    }
});