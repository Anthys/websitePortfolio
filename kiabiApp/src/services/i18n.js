import i18next from "i18next";

import { initReactI18next } from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

  en: {

    translation: {

      formTitle: "COMPANY Kick-Off Meeting 2023 Registration Platform",
      VotreBu: "Your BU",
      Coordonnees: "Contact details",
      Hebergement: "Accommodation",
        Transport: "Transport",
        Suite: "Next",
        Retour: "Back",
        Prenom: "First name",
        Nom: "Last name",
        Genre: "Gender",
        Telephone: "Phone number",
        Email: "Email",
        Perimetre: "My perimeter",
        NomDuMagasin: "Store name",
        PresenceAuKOM: "Presence at the KOM",
        PresenceALaSoiree: "Presence at the evening",
        PresenceAuLancementFrance: "Presence at the France launch, 16h30",
        Homme:"Man",
        Femme:"Woman",
        Autre:"Other",
        QuellesLangues: "To make the most of the KOM, tell us what languages you speak?",
        Regime: "Special diet (Vegetarian, vegan, allergens, others)",
        RegimeSmall: "Special diet",
        Particularité : "EN TRAD",
        ParticularitéSmall : "EN TRAD",
        Talent : "Do you have a special talent?",
        TalentSmall : "Special talent",
        Oui: "Yes",
        Non: "No",
        Localization: "Localization",




    },

  },

  fr: {

    translation: {

        formTitle: "Plateforme d'inscription COMPANY Kick-Off Meeting 2023",
        VotreBu: "Votre BU",
        Coordonnees: "Coordonnées",
        Hebergement: "Hébergement",
        Transport: "Transport",
        Suite: "Suivant",
        Retour: "Retour",
        Prenom: "Prénom",
        Nom: "Nom",
        Genre: "Genre",
        Telephone: "Téléphone",
        Email: "Email",
        Perimetre: "Mon périmètre",
        NomDuMagasin: "Nom du magasin",
        PresenceAuKOM: "Présence au KOM",
        PresenceALaSoiree: "Présence à la soirée",
        PresenceAuLancementFrance: "Présence au lancement France, 16h30",
        Homme:"Homme",
        Femme:"Femme",
        Autre:"Autre",
        QuellesLangues: "Pour que tu vives au mieux le KOM, dis nous quelles langues parles-tu ?",
        Regime: "Régime alimentaire particulier (Végétarien, végétalien, allergènes, autres)",
        RegimeSmall: "Régime alimentaire particulier",
        Particularité: "Particularité/autre précision utile (personne enceinte, mobilité réduite, problèmes de santé,...)",
        ParticularitéSmall: "Particularité",
        Talent: "As-tu un talent particulier que tu souhaiterais partager avec les Kiabers, sur une scène ouverte ou en animant un atelier ?",
        TalentSmall: "Talent particulier",
        Oui: "Oui",
        Non: "Non",
        Localization: "Langue"



    },

  },

};

i18next

  .use(initReactI18next)

  .init({

    resources,

    lng: "fr",

    interpolation: {

      escapeValue: false,

    },

  });

export default i18next;