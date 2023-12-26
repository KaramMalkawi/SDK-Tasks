var storedLang = localStorage.getItem('lang') || 'en';

function googleTranslateElementInit() {
    // Create a new instance of the Google Translate widget
    var translateWidget = new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'en,ar',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            defaultLanguage: storedLang  // Set the default language based on the stored preference
        },
        'google_translate_element'
    );

    // Create a custom button for toggling language
    var customButton = document.createElement('button');
    customButton.textContent = 'Toggle Language';
    customButton.addEventListener('click', toggleLanguage);

    // Append the custom button to the document body
    document.body.appendChild(customButton);

    // Set initial styles and content
    updateStyles();
    updateContent();
} 

function toggleLanguage() {
    // Toggle the language
    var newLang = storedLang === 'en' ? 'ar' : 'en';
    storedLang = newLang;

    // Update styles and content immediately
    updateStyles();
    updateContent();

    console.log('Updated Language:', storedLang);
}

function updateStyles() {
    var buttonElement = document.getElementById('exampleModalButton');
    var buttonLang = document.getElementsByClassName('VIpgJd-ZVi9od-xl07Ob-lTBxed')[0].children[0];

    // Update the text content of the anchor element based on the selected language
    if (localStorage.getItem('lang') === 'en') {
        buttonLang.innerText = 'English';
    } else {
        buttonLang.innerText = 'Arabic';
    }

    // Conditionally set the style based on the text content
    if (buttonLang.innerText === 'English') {
        buttonElement.style.marginRight = '1%';
    } else {
        buttonElement.style.marginRight = '4.5%';
    }
}

function updateContent() {
    var aiButton = document.getElementById('exampleModalButton');

    // Update the innerHTML of the element based on the selected language
    if (localStorage.getItem('lang') === 'en') {
        aiButton.innerHTML = 'Ai Modil'; // Replace with your English content
    } else {
        aiButton.innerHTML = 'ذكاء مودل'; // Replace with your Arabic content
    }

    var profileButton = document.getElementById('ProfileButton');

    // Update the innerHTML of the element based on the selected language
    if (localStorage.getItem('lang') === 'en') {
        profileButton.innerHTML = '<i class="fa-solid fa-user"></i> User Profile'; // Replace with your English content
    } else {
        profileButton.innerHTML = '<i class="fa-solid fa-user"></i> بروفايل شخصي'; // Replace with your Arabic content
    }
}

// Function to set the language preference in local storage
function setLanguagePreference(lang) {
    localStorage.setItem('lang', lang);

    // Log the stored language to the console for debugging
    console.log('Stored Language:', localStorage.getItem('lang'));
}
