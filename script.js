const greeting = document.getElementById('greeting');
const languageSelect = document.getElementById('languageSelect');
const darkModeToggle = document.getElementById('darkModeToggle');

const languages = [
    { code: 'en', label: 'English', text: 'Welcome! This site is made for VRChat users on Quest who don’t have a PC. Here, you can get tips and tools to capture PC-quality photos for social media.' },
    { code: 'es', label: 'Español', text: '¡Bienvenido! Este sitio está hecho para usuarios de VRChat en Quest que no tienen una PC. Aquí puedes obtener consejos y herramientas para capturar fotos de calidad de PC para redes sociales.' },
    { code: 'fr', label: 'Français', text: 'Bienvenue! Ce site est destiné aux utilisateurs de VRChat sur Quest qui n'ont pas de PC. Ici, vous pouvez obtenir des conseils et des outils pour capturer des photos de qualité PC pour les réseaux sociaux.' },
    { code: 'de', label: 'Deutsch', text: 'Willkommen! Diese Seite ist für VRChat-Benutzer auf Quest gedacht, die keinen PC haben. Hier können Sie Tipps und Tools erhalten, um PC-Qualitätsfotos für soziale Medien zu machen.' },
    { code: 'zh', label: '中文', text: '欢迎！本网站为没有电脑的Quest VRChat用户创建。在这里，您可以获取拍摄电脑质量照片的技巧和工具，以发布到社交媒体。' },
    { code: 'ja', label: '日本語', text: 'ようこそ！このサイトはPCを持っていないQuestのVRChatユーザーのために作られました。ここでは、SNS用にPC品質の写真を撮るためのヒントやツールを提供します。' },
    // Add more languages here as needed
];

// Populate language dropdown
languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.label;
    languageSelect.appendChild(option);
});

// Detect browser language
const userLang = navigator.language.slice(0,2);
const defaultLang = languages.find(l => l.code === userLang) ? userLang : 'en';
languageSelect.value = defaultLang;
updateGreeting(defaultLang);

languageSelect.addEventListener('change', () => {
    updateGreeting(languageSelect.value);
});

function updateGreeting(langCode) {
    const langObj = languages.find(l => l.code === langCode);
    greeting.textContent = langObj ? langObj.text : languages[0].text;
}

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
