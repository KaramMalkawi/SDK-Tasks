function googleTranslateElementInit() {
    // Retrieve the stored language preference or use 'en' as the default value
    var storedLang = localStorage.getItem('lang') || 'en';

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

    // Function to toggle between 'en' and 'ar' languages
    function toggleLanguage() {
        // Toggle the language
        var newLang = storedLang === 'en' ? 'ar' : 'en';

        // Update the language in the widget
        translateWidget.showBanner(newLang);

        // Update the stored language preference
        storedLang = newLang;
        setLanguagePreference(storedLang);

        // Log the updated language to the console for debugging
        console.log('Updated Language:', storedLang);
    }

    // Attach the toggleLanguage function to a button click event or any other trigger
    var toggleButton = document.getElementById('toggleLanguageButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleLanguage);
    }

    // Check if the stored language is 'ar' and adjust the button style accordingly
    if (storedLang === 'ar') {
        adjustButtonStyle('1%');
    } else {
        adjustButtonStyle('4.5%');
    }

    // Function to adjust the button style based on the margin value
    function adjustButtonStyle(marginValue) {
        var buttonElement = document.getElementById('exampleModalButton');
        if (buttonElement) {
            buttonElement.style.marginRight = marginValue;
        }
    }
}

// Function to set the language preference in the local storage
function setLanguagePreference(lang) {
    localStorage.setItem('lang', lang);

    // Log the stored language to the console for debugging
    console.log('Stored Language:', localStorage.getItem('lang'));
}
