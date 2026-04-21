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

            },
            es_419:
            {

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