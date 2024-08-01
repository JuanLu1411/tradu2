# Welcome to My I18n Markdown App Documentation

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <h2>Overview</h2>
    <p>My I18n Markdown App is a React application that integrates i18next for internationalization and Markdown for content rendering.</p>
</div>

<div id="content-es" style="display:none;">
    <h2>Visión General</h2>
    <p>My I18n Markdown App es una aplicación React que integra i18next para internacionalización y Markdown para la representación de contenido.</p>
</div>

<script>
    function showLanguage(language) {
        if (language === 'en') {
            document.getElementById('content-en').style.display = 'block';
            document.getElementById('content-es').style.display = 'none';
        } else if (language === 'es') {
            document.getElementById('content-en').style.display = 'none';
            document.getElementById('content-es').style.display = 'block';
        }
    }
</script>
