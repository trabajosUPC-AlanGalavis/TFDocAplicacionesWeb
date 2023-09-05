function toggleMobileMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-mobile-menu');
    
    var languageMenu = document.querySelector('.language-menu');
    if (languageMenu.classList.contains('show-language-menu')) {
        languageMenu.classList.remove('show-language-menu');
    }

    var navbarRight = document.querySelector('.navbar-right');
    navbarRight.classList.toggle('show-mobile-menu');
}

function toggleLanguageMenu() {
    var languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.toggle('show-language-menu');
    
}


function changeLanguage(lang, learn, benefits, about, plans, contact, log, create) {
    var languageSelector = document.querySelector('.language-selector');
    var languageIcon = languageSelector.querySelector('.fa');
    var selectLearn = document.querySelector('.learn');
    var selectBenefits = document.querySelector('.benefits');
    var selectAbout = document.querySelector('.about-us');
    var selectPlans = document.querySelector('.plans');
    var selectContact = document.querySelector('.contact');
    var selectLog = document.querySelector('.log-in');
    var selectCreate =document.querySelector('.button-secondary');
    languageSelector.innerHTML = lang + ' ' + languageIcon.outerHTML;
    selectLearn.innerHTML = learn;
    selectBenefits.innerHTML = benefits;
    selectAbout.innerHTML = about;
    selectPlans.innerHTML = plans;
    selectContact.innerHTML = contact;
    selectLog.innerHTML = log;
    selectCreate.innerHTML = create;
    toggleLanguageMenu();
}


document.addEventListener('click', function(event) {
    var esLearn = 'Conoce más';
    var enLearn = 'Learn';
    var esBenefits = 'Beneficios';
    var enBenefits = 'Benefits';
    var esAbout = 'Acerca de';
    var enAbout = 'About us';
    var esPlans = 'Planes';
    var enPlans = 'Plans';
    var esContact = 'Contacto';
    var enContact = 'Contact';
    var esLog = 'Iniciar sesión';
    var enLog = 'Log in';
    var esCreate = 'Crear cuenta';
    var enCreate = 'Create account';
    if (event.target.classList.contains('language-option')) {
        var selectedLanguage = event.target.textContent;
        if (selectedLanguage == 'EN'){
            changeLanguage(selectedLanguage, enLearn, enBenefits, enAbout, enPlans, enContact, enLog, enCreate);
        } else if (selectedLanguage == 'ES'){
            changeLanguage(selectedLanguage, esLearn, esBenefits, esAbout, esPlans, esContact, esLog, esCreate);
        }
    } 
});