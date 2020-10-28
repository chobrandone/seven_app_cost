/** *This Page is the mainjs where all depoendencies are been imported.{@link name}
 * *@author/cho brandone
 *@date Aug 25/10/2020
 *Contibutors : Contributors name,
 **/

import Vue from "vue";
import App from "./App.vue";
/*importing vue router*/
import VueRouter from "vue-router";
import { routes } from "../src/routes.js";
/*importing the bootstrap poper and jquery*/
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

/*importing the fonts awesome*/

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//vue resouce
import VueResource from "vue-resource";
import VueLocalStorage from "vue-localstorage";
//vue js modal
import VModal from "vue-js-modal";
//vue toast
import VueToast from "vue-toast-notification";
// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";
// gif
import "vue-gifplayer/src/gif.css";
//vue confetti
import VueConfetti from "vue-confetti";

//for translation
import VueI18n from "vue-i18n";
// import { languages } from "./i18n/index.js";
// import { defaultLanguage } from "./i18n/index.js";

Vue.use(VueI18n);

// const messages = Object.assign(languages);
// const i18n = new VueI18n({
//     locale: process.env.VUE_APP_I18N_LOCALE | defaultLanguage,
//     fallBackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE | "fr",
//     messages,
// });

const messages = {
    english: {
        homemessage: {
            appName: "What Is The Cost Of My Software Application?",
            homeBody: "Have you ever wondered how much it would cost you to build a custom application for your business? This FREE handy app cost calculator will help you: In less than three minutes estimate how much your specific app will cost.",
            homeButton: "Get Started"
        },
        sectormessage: {
            homeButton: "Home ",
            sectorQuestion: "What is your Sector ? ",
            sectorContact: "If You don 't see your sector ? ",
            contactus: " Contact us "
        },
        platformmessage: {
            sectorButton: "Previous ",
            platformQuestion: "What kind of app do you want ? ",
            platformContact: "If You don 't see your Plateform ?  ",
            contactus: "contact us "
        },
        Qustionmessage: {
            platformButton: " Previous  ",
            Question: " Quel type d 'application souhaitez-vous ? ",
            questionContact: "   You have another Question ? ",
            contactus: " contactus"
        },
        Resultmessage: {
            homeButton: " Evaluate App ",
            buildButton: "Build Your App Now",
            resultComment: "The Cost estimate for this project is :",
            thanksComment: "  Thanks for using our service  ",
            shareComment: "if you liked this app, follow us ",

        },
        EvaluateModal: {
            email: "Email",
            sendButton: "Send",
            name: "Name",
            phone: "Phone",
            result: "Send me my result",
            placeHolderEmail: "Enter your Email",
            placeHolderName: "Enter your Name",
            placeHolderPhone: "Enter your Phone number",
        },
        contactModal: {
            subject: "Subject",
            title: "Hello , what do you wan't ?",
            email: "  Email ",
            sendButton: "Send",
            phone: " Phone ",
            message: " Message",
            placeHolderEmail: "Enter your Email",
            placeHolderMessage: "Description of what you want",
            placeHolderPhone: "Enter your Phone number",
        },
        footer: {
            copywrite: " Calculate Your App Cost",
        },
        thanks: {
            thanksMessage: "Thanks for using our service.",

        },
        convertLink: {
            curency: "To Convert To Different Currency ",
            link: "Click Here",
        },
        languagetLink: {
            language: "Pour changer la langue en français   ",
            link: "cliquez ici",
        }
    },
    french: {
        homemessage: {
            appName: "Quel est le coût de mon application? ",
            homeBody: "Vous êtes-vous déjà demandé combien il vous en coûterait pour créer une application personnalisée pour votre entreprise? Ce calculateur de coût d'application GRATUIT et pratique vous aidera: En moins de trois minutes, estimez le coût de votre application spécifique.",
            homeButton: "commencez"
        },
        sectormessage: {

            homeButton: "Accueil",
            sectorQuestion: "Quel est votre secteur ? ",
            sectorContact: "Si Vous ne voyez pas votre secteur? ",
            contactus: " contacter Nous "
        },
        platformmessage: {
            sectorButton: "Précédent",
            platformQuestion: " Quel type d 'application souhaitez-vous ? ",
            platformContact: " Si Vous ne voyez pas votre Plate-forme ? ",
            contactus: " contacter Nous"
        },
        Qustionmessage: {
            platformButton: "Précédent",
            Question: " Quel type d'application souhaitez-vous ?",
            questionContact: " Si Vous ne voyez pas votre Plate-forme ?",
            contactus: " contacter Nous"
        },
        Resultmessage: {
            homeButton: " Évaluer une application ",
            buildButton: "Créez votre application ",
            resultComment: "L'estimation des coûts de ce projet est :",
            thanksComment: "  Merci d'avoir utiliser notre service  ",
            shareComment: "si vous avez aimez cette application, suivez nous  ",

        },
        EvaluateModal: {
            email: "  Email ",
            sendButton: "Envoyez",
            name: " Nom",
            phone: " TelePhone ",
            result: "Envoyez mes resultats",
            placeHolderEmail: " Entrez Votre Email",
            placeHolderName: "Entrez Votre Nom",
            placeHolderPhone: "Entrez Votre Numero du TelePhone",

        },
        contactModal: {
            subject: "Subject",
            title: "Bonjour , que voulez vous ?",
            email: "  Email ",
            sendButton: "Envoyez",
            phone: "  TelePhone ",
            message: "Message",
            placeHolderEmail: " Entrez Votre Email",
            placeHolderMessage: "Description ce que vous voulez ",
            placeHolderPhone: "Entrez Votre Numero du TelePhone",

        },
        footer: {
            copywrite: " Calculez le coût de votre application ",
        },
        thanks: {
            thanksMessage: "  Merci d'utiliser notre service.",
        },
        convertLink: {
            curency: "Pour convertir en une devise différente  ",
            link: "cliquez ici",
        },
        languagetLink: {
            language: "To change the language to English   ",
            link: "click here",
        }


    },

};

const i18n = new VueI18n({
    locale: 'en',
    messages
});


Vue.use(VueConfetti);

Vue.use(VueResource);
Vue.use(VModal);
Vue.use(VueToast);

Vue.use(VueLocalStorage, {
    name: "ls",
    bind: true, //created computed members from your variable declarations
});

library.add(faTwitter, faUserAstronaut, faUser);

library.add(fab, fas, far);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
/*declaring a vue router*/
Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
});

export const bus = new Vue();
new Vue({
    el: "#app",
    router: router,
    i18n,
    render: (h) => h(App),
}).$mount("#app");