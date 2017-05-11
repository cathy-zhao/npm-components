var i18n = require('i18next');
var XHR = require('i18next-xhr-backend');
var LanguageDetector = require('i18next-browser-languagedetector');

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react!!
        },
        backend: {
            // 設定語系檔案的 server 路徑, 會以GET的方式跟 server 要檔案
            // lng = 語系代碼 ns = namespace
            "loadPath": "./../locales/{{lng}}/{{ns}}.json"
        }
    });

module.exports = i18n;
