/**
 * Current active language. Defaults to English
 * @type {string}
 */
let currentLanguage = "en";

/**
 *  Translation object containing all UI string for each supported language.
 *  Supported locales: en -> English, es_419 -> Spanish
 *  To add a nwe text add the key in both locales and use data-i18n = "key" in HTML.
 * @type {{en: {"demo.title": string, "demo.subtitle": string, "demo.formTitle": string, "demo.formSubtitle": string, "demo.labelName": string, "demo.labelEmail": string, "demo.formButton": string}, es_419: {"demo.title": string, "demo.subtitle": string, "demo.formTitle": string, "demo.formSubtitle": string, "demo.labelName": string, "demo.labelEmail": string, "demo.formButton": string}}}
 */
const translation =
    {
        en:
            {
                //Demo request form
                "demo.title": "Would you like to see it in action?",
                "demo.subtitle": "We show you how AgroTrack adapts to your plots and crops",
                "demo.formTitle": "Request a demo",
                "demo.formSubtitle": "We’ll contact you within 24 hours.",
                "demo.labelName": "Full Name",
                "demo.labelEmail": "Email",
                "demo.formButton": "Request demo",

                //Footer
                "footer.title-phrase": "Grow better with real data.",
                "footer.title-navigation": "Navigation",
                "footer.title-characteristics": "Characteristics",
                "footer.title-plans": "Plans",
                "footer.title-for-who": "For who",
                "footer.title-demo": "Demo",
                "footer.title-social-media": "Social Media",
                "footer.title-contact": "Contact",
                "footer.title-copyright": "2026 AgroTrack — Andes Smart. All rights reserved.",
                "footer.title-privacy-policy": "Privacy policy",
                "footer.title-term-conditions": "Terms and conditions"
            },
        es_419:
            {
                //Fomulario Demo
                "demo.title": "¿Te gustaría verlo en acción?",
                "demo.subtitle": "Te mostramos cómo AgroTrack se adapta a tus parcelas y tu tipo de cultivo",
                "demo.formTitle": "Solicita una demo",
                "demo.formSubtitle": "Te contactamos en menos de 24 horas.",
                "demo.labelName": "Nombre completo",
                "demo.labelEmail": "Correo Electrónico",
                "demo.formButton": "Solicitar demo",

                //Footer
                "footer.title-phrase": "Cultiva mejor con datos reales.",
                "footer.title-navigation": "Navegación",
                "footer.title-characteristics": "Características",
                "footer.title-plans": "Planes",
                "footer.title-for-who": "Para quien",
                "footer.title-demo": "Demo",
                "footer.title-social-media": "Redes Sociales",
                "footer.title-contact": "Contactos",
                "footer.title-copyright": "© 2026 AgroTrack — Andes Smart. Todos los derechos reservados.",
                "footer.title-privacy-policy": "Política de privacidad",
                "footer.title-term-conditions": "Términos y condiciones"

            }
    }

/**
 * Toggles the page language between English and Spanish.
 * Update all elements with data-i18n attribute and the HTML lang attribute for all
 */
function toggleLanguage(){

    //Switch between English and Spanish
    currentLanguage = currentLanguage === "en" ? "es_419" : "en";

    //Update HTML lang attribute for screen readers (Ally)
    document.documentElement.lang = currentLanguage === "en" ? "en" : "es";

    // Find all translatable elements and update their text
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (element){
        const key = element.getAttribute("data-i18n");
        element.textContent = translation[currentLanguage][key];
    });
}
