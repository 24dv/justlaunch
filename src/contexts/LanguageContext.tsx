
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define types for our translations
type TranslationKeys = string;
type TranslationValues = string;
type LanguageCode = 'en' | 'nl';

type Translations = {
  [key in LanguageCode]: {
    [key in TranslationKeys]: TranslationValues;
  };
};

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, options?: { [key: string]: any }) => string;
};

// Create context with default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const translations: Translations = {
  en: {
    // ... keep existing code (existing English translations)
    
    // Privacy Policy
    'privacy.pageTitle': 'Privacy Policy | Just Launch',
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: {date}',
    'privacy.introduction.title': 'Introduction',
    'privacy.introduction.content': 'Just Launch ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. By accessing or using our service, you agree to this privacy policy.',
    'privacy.dataCollection.title': 'Information We Collect',
    'privacy.dataCollection.content': 'We may collect information about you in various ways, including:',
    'privacy.dataCollection.items.1': 'Personal Information: Name, email address, phone number, and other contact details you provide when contacting us or using our services.',
    'privacy.dataCollection.items.2': 'Usage Data: Information about how you access and use our website, including your IP address, browser type, and device information.',
    'privacy.dataCollection.items.3': 'Cookies and Tracking Technologies: Information collected through cookies and similar technologies about your browsing behavior and preferences.',
    'privacy.dataCollection.items.4': 'Contact Form Information: Data you provide when filling out contact forms or requesting information about our services.',
    'privacy.cookieUsage.title': 'Use of Cookies',
    'privacy.cookieUsage.content': 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. Types of cookies we use:',
    'privacy.cookieUsage.items.1': 'Essential Cookies: Necessary for the website to function properly.',
    'privacy.cookieUsage.items.2': 'Analytical/Performance Cookies: Allow us to recognize and count the number of visitors and see how visitors move around our website.',
    'privacy.cookieUsage.items.3': 'Functionality Cookies: Used to recognize you when you return to our website.',
    'privacy.dataUsage.title': 'How We Use Your Information',
    'privacy.dataUsage.content': 'We may use the information we collect for various purposes, including to provide and maintain our service, notify you about changes to our service, provide customer support, gather analysis or valuable information so that we can improve our service, monitor the usage of our service, and detect, prevent and address technical issues.',
    'privacy.dataSharing.title': 'Disclosure of Your Information',
    'privacy.dataSharing.content': 'We may share your information with third parties only in the ways that are described in this privacy policy, including service providers who assist us in operating our website, conducting our business, or serving our users, business partners with whom we jointly offer products or services, and as required by law or to protect rights.',
    'privacy.dataRetention.title': 'Data Retention',
    'privacy.dataRetention.content': 'We will retain your personal information only for as long as is necessary for the purposes set out in this privacy policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.',
    'privacy.userRights.title': 'Your Rights',
    'privacy.userRights.content': 'Under the General Data Protection Regulation (GDPR), you have certain rights regarding your personal data, including:',
    'privacy.userRights.items.1': 'The right to access – You have the right to request copies of your personal data.',
    'privacy.userRights.items.2': 'The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.',
    'privacy.userRights.items.3': 'The right to erasure – You have the right to request that we erase your personal data, under certain conditions.',
    'privacy.userRights.items.4': 'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.',
    'privacy.userRights.items.5': 'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.',
    'privacy.security.title': 'Security of Your Information',
    'privacy.security.content': 'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
    'privacy.changes.title': 'Changes to This Privacy Policy',
    'privacy.changes.content': 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.content': 'If you have any questions about this Privacy Policy, please contact us:',
  },
  nl: {
    // ... keep existing code (existing Dutch translations)
    
    // Privacy Policy
    'privacy.pageTitle': 'Privacybeleid | Just Launch',
    'privacy.title': 'Privacybeleid',
    'privacy.lastUpdated': 'Laatst bijgewerkt: {date}',
    'privacy.introduction.title': 'Introductie',
    'privacy.introduction.content': 'Just Launch ("wij", "onze" of "ons") zet zich in om uw privacy te beschermen. Dit Privacybeleid legt uit hoe wij uw informatie verzamelen, gebruiken, openbaar maken en beveiligen wanneer u onze website bezoekt of onze diensten gebruikt. Lees dit privacybeleid zorgvuldig door. Door toegang te krijgen tot of gebruik te maken van onze service, gaat u akkoord met dit privacybeleid.',
    'privacy.dataCollection.title': 'Informatie die we verzamelen',
    'privacy.dataCollection.content': 'We kunnen op verschillende manieren informatie over u verzamelen, waaronder:',
    'privacy.dataCollection.items.1': 'Persoonlijke informatie: Naam, e-mailadres, telefoonnummer en andere contactgegevens die u verstrekt wanneer u contact met ons opneemt of gebruik maakt van onze diensten.',
    'privacy.dataCollection.items.2': 'Gebruiksgegevens: Informatie over hoe u toegang krijgt tot en gebruik maakt van onze website, inclusief uw IP-adres, browsertype en apparaatinformatie.',
    'privacy.dataCollection.items.3': 'Cookies en trackingtechnologieën: Informatie verzameld via cookies en vergelijkbare technologieën over uw browsegedrag en voorkeuren.',
    'privacy.dataCollection.items.4': 'Contactformulierinformatie: Gegevens die u verstrekt bij het invullen van contactformulieren of het aanvragen van informatie over onze diensten.',
    'privacy.cookieUsage.title': 'Gebruik van cookies',
    'privacy.cookieUsage.content': 'We gebruiken cookies en vergelijkbare trackingtechnologieën om activiteiten op onze website te volgen en bepaalde informatie vast te houden. Cookies zijn bestanden met een kleine hoeveelheid gegevens die een anonieme unieke identificatie kunnen bevatten. Soorten cookies die we gebruiken:',
    'privacy.cookieUsage.items.1': 'Essentiële cookies: Noodzakelijk voor het correct functioneren van de website.',
    'privacy.cookieUsage.items.2': 'Analytische/prestatiecookies: Stellen ons in staat om het aantal bezoekers te herkennen en te tellen en te zien hoe bezoekers zich op onze website bewegen.',
    'privacy.cookieUsage.items.3': 'Functionaliteitscookies: Gebruikt om u te herkennen wanneer u terugkeert naar onze website.',
    'privacy.dataUsage.title': 'Hoe we uw informatie gebruiken',
    'privacy.dataUsage.content': 'We kunnen de informatie die we verzamelen voor verschillende doeleinden gebruiken, waaronder het leveren en onderhouden van onze service, u op de hoogte stellen van wijzigingen in onze service, klantenondersteuning bieden, analyses of waardevolle informatie verzamelen zodat we onze service kunnen verbeteren, het gebruik van onze service monitoren en technische problemen detecteren, voorkomen en aanpakken.',
    'privacy.dataSharing.title': 'Openbaarmaking van uw informatie',
    'privacy.dataSharing.content': 'We kunnen uw informatie alleen delen met derden op de manieren die in dit privacybeleid worden beschreven, inclusief dienstverleners die ons helpen bij het beheren van onze website, het uitvoeren van onze activiteiten of het bedienen van onze gebruikers, zakenpartners met wie we gezamenlijk producten of diensten aanbieden, en zoals vereist door de wet of om rechten te beschermen.',
    'privacy.dataRetention.title': 'Gegevensbewaring',
    'privacy.dataRetention.content': 'We bewaren uw persoonlijke informatie alleen zo lang als nodig is voor de doeleinden die in dit privacybeleid zijn uiteengezet. We zullen uw informatie bewaren en gebruiken voor zover nodig om te voldoen aan onze wettelijke verplichtingen, geschillen op te lossen en ons beleid te handhaven.',
    'privacy.userRights.title': 'Uw rechten',
    'privacy.userRights.content': 'Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u bepaalde rechten met betrekking tot uw persoonlijke gegevens, waaronder:',
    'privacy.userRights.items.1': 'Het recht op toegang – U heeft het recht om kopieën van uw persoonlijke gegevens op te vragen.',
    'privacy.userRights.items.2': 'Het recht op rectificatie – U heeft het recht om te verzoeken dat wij informatie corrigeren die volgens u onjuist is of onvolledige informatie aanvullen.',
    'privacy.userRights.items.3': 'Het recht op verwijdering – U heeft het recht om te verzoeken dat wij uw persoonlijke gegevens wissen, onder bepaalde voorwaarden.',
    'privacy.userRights.items.4': 'Het recht op beperking van verwerking – U heeft het recht om te verzoeken dat wij de verwerking van uw persoonlijke gegevens beperken, onder bepaalde voorwaarden.',
    'privacy.userRights.items.5': 'Het recht om bezwaar te maken tegen verwerking – U heeft het recht om bezwaar te maken tegen onze verwerking van uw persoonlijke gegevens, onder bepaalde voorwaarden.',
    'privacy.security.title': 'Beveiliging van uw informatie',
    'privacy.security.content': 'We gebruiken administratieve, technische en fysieke beveiligingsmaatregelen om uw persoonlijke informatie te helpen beschermen. Hoewel we redelijke stappen hebben ondernomen om de persoonlijke informatie die u aan ons verstrekt te beveiligen, houd er rekening mee dat ondanks onze inspanningen geen enkele beveiligingsmaatregel perfect of ondoordringbaar is, en geen enkele methode van gegevensoverdracht kan worden gegarandeerd tegen elke interceptie of ander type misbruik.',
    'privacy.changes.title': 'Wijzigingen in dit privacybeleid',
    'privacy.changes.content': 'We kunnen ons Privacybeleid van tijd tot tijd bijwerken. We zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe Privacybeleid op deze pagina te plaatsen en de datum "Laatst bijgewerkt" bij te werken. We raden u aan dit Privacybeleid regelmatig te bekijken op eventuele wijzigingen.',
    'privacy.contact.title': 'Neem contact met ons op',
    'privacy.contact.content': 'Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op:',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  // Translation function
  const t = (key: string, options?: { [key: string]: any }): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]] || key;
    
    if (options) {
      return Object.entries(options).reduce((text, [optionKey, optionValue]) => {
        return text.replace(`{${optionKey}}`, String(optionValue));
      }, translation);
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
