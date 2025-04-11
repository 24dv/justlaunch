import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageType = 'en' | 'nl';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

// Define translations
const translations = {
  en: {
    // ... keep existing code (the existing translations)
    
    // Cookie banner translations
    cookies: {
      title: 'Cookie Preferences',
      description: 'This website uses cookies to enhance your browsing experience, personalize content and ads, provide social media features, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      necessary: {
        title: 'Necessary Cookies',
        description: 'These cookies are essential for the website to function properly and cannot be disabled.',
      },
      preferences: {
        title: 'Preferences Cookies',
        description: 'These cookies allow the website to remember choices you make and provide enhanced, more personal features.',
      },
      statistics: {
        title: 'Statistics Cookies',
        description: 'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.',
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'These cookies are used to track visitors across websites to enable us to display relevant and engaging advertisements.',
      },
      acceptAll: 'Accept All',
      savePreferences: 'Save Preferences',
      necessaryOnly: 'Necessary Only',
      learnMore: 'To learn more about how we use cookies, please see our',
      privacyPolicy: 'Privacy Policy',
    },
    
    // Privacy Policy translations
    privacy: {
      pageTitle: 'Privacy Policy | Just Launch',
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: {date}',
      introduction: {
        title: 'Introduction',
        p1: 'At Just Launch, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
        p2: 'Please read this privacy policy carefully before using our services.',
      },
      dataCollection: {
        title: 'Information We Collect',
        p1: 'We collect and process different types of personal data about you. Personal data means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).',
        personalData: {
          name: 'Identity Data: includes first name, last name, username or similar identifier.',
          contact: 'Contact Data: includes email address, telephone number, and address.',
          usage: 'Usage Data: includes information about how you use our website and services.',
          technical: 'Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.',
        },
      },
      cookiesUsage: {
        title: 'Use of Cookies',
        p1: 'We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.',
        necessaryCookies: 'Essential for the website to function properly and cannot be disabled.',
        preferenceCookies: 'Allow the website to remember choices you make and provide enhanced, more personal features.',
        statisticsCookies: 'Help us understand how visitors interact with the website by collecting and reporting information anonymously.',
        marketingCookies: 'Used to track visitors across websites to enable us to display relevant and engaging advertisements.',
      },
      dataUsage: {
        title: 'How We Use Your Data',
        p1: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
        purposes: {
          service: 'To provide and maintain our service, including to monitor the usage of our service.',
          communication: 'To communicate with you, including to respond to your inquiries and to provide you with updates and information relating to our services.',
          improvement: 'To improve our website, products and services, marketing, and customer relationships and experiences.',
          marketing: 'To provide you with news, special offers and general information about other goods, services and events which we offer.',
        },
      },
      dataSharing: {
        title: 'Sharing Your Information',
        p1: 'We may share your personal information with third parties only in the ways that are described in this privacy policy. We do not sell your personal information to third parties.',
        p2: 'We may disclose your personal information to our service providers who work on our behalf and who have agreed to maintain the confidentiality of your information.',
      },
      dataRetention: {
        title: 'Data Retention',
        p1: 'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.',
      },
      userRights: {
        title: 'Your Data Protection Rights',
        p1: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:',
        rights: {
          access: 'The right to access your personal data.',
          rectification: 'The right to correction of your personal data.',
          erasure: 'The right to erasure of your personal data.',
          restriction: 'The right to restrict processing of your personal data.',
          dataPortability: 'The right to data portability (to receive a copy of your personal data).',
          objection: 'The right to object to processing of your personal data.',
        },
      },
      security: {
        title: 'Data Security',
        p1: 'We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.',
      },
      changes: {
        title: 'Changes to This Privacy Policy',
        p1: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      contact: {
        title: 'Contact Us',
        p1: 'If you have any questions about this Privacy Policy, please contact us.',
        p2: 'Email:',
      },
    },
  },
  nl: {
    // ... keep existing code (the existing translations)
    
    // Cookie banner translations
    cookies: {
      title: 'Cookie Voorkeuren',
      description: 'Deze website gebruikt cookies om uw browse-ervaring te verbeteren, content en advertenties te personaliseren, social media-functies te bieden en ons verkeer te analyseren. Door op "Alles accepteren" te klikken, stemt u in met ons gebruik van cookies.',
      necessary: {
        title: 'Noodzakelijke Cookies',
        description: 'Deze cookies zijn essentieel voor het goed functioneren van de website en kunnen niet worden uitgeschakeld.',
      },
      preferences: {
        title: 'Voorkeur Cookies',
        description: 'Deze cookies stellen de website in staat om keuzes te onthouden die u maakt en verbeterde, meer persoonlijke functies te bieden.',
      },
      statistics: {
        title: 'Statistieken Cookies',
        description: 'Deze cookies helpen ons te begrijpen hoe bezoekers omgaan met de website door informatie anoniem te verzamelen en te rapporteren.',
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'Deze cookies worden gebruikt om bezoekers over websites te volgen, zodat we relevante en aantrekkelijke advertenties kunnen tonen.',
      },
      acceptAll: 'Alles Accepteren',
      savePreferences: 'Voorkeuren Opslaan',
      necessaryOnly: 'Alleen Noodzakelijke',
      learnMore: 'Om meer te weten te komen over hoe wij cookies gebruiken, bekijk ons',
      privacyPolicy: 'Privacybeleid',
    },
    
    // Privacy Policy translations
    privacy: {
      pageTitle: 'Privacybeleid | Just Launch',
      title: 'Privacybeleid',
      lastUpdated: 'Laatst bijgewerkt: {date}',
      introduction: {
        title: 'Introductie',
        p1: 'Bij Just Launch respecteren we uw privacy en zetten we ons in om uw persoonlijke gegevens te beschermen. Dit privacybeleid informeert u over hoe we met uw persoonlijke gegevens omgaan wanneer u onze website bezoekt en vertelt u over uw privacyrechten en hoe de wet u beschermt.',
        p2: 'Lees dit privacybeleid zorgvuldig door voordat u onze diensten gebruikt.',
      },
      dataCollection: {
        title: 'Informatie die we verzamelen',
        p1: 'We verzamelen en verwerken verschillende soorten persoonlijke gegevens over u. Persoonlijke gegevens zijn alle informatie over een persoon aan de hand waarvan die persoon kan worden geïdentificeerd. Het omvat geen gegevens waarvan de identiteit is verwijderd (anonieme gegevens).',
        personalData: {
          name: 'Identiteitsgegevens: omvat voornaam, achternaam, gebruikersnaam of soortgelijke identificator.',
          contact: 'Contactgegevens: omvat e-mailadres, telefoonnummer en adres.',
          usage: 'Gebruiksgegevens: omvat informatie over hoe u onze website en diensten gebruikt.',
          technical: 'Technische gegevens: omvat IP-adres, browsertype en -versie, tijdzone-instelling, browser-plug-intypes en -versies, besturingssysteem en platform, en andere technologie op de apparaten die u gebruikt om toegang te krijgen tot onze website.',
        },
      },
      cookiesUsage: {
        title: 'Gebruik van Cookies',
        p1: 'We gebruiken cookies en vergelijkbare trackingtechnologieën om de activiteit op onze service bij te houden en bepaalde informatie op te slaan. Cookies zijn bestanden met een kleine hoeveelheid gegevens die een anonieme unieke identificator kunnen bevatten.',
        necessaryCookies: 'Essentieel voor het goed functioneren van de website en kunnen niet worden uitgeschakeld.',
        preferenceCookies: 'Stellen de website in staat om keuzes te onthouden die u maakt en verbeterde, meer persoonlijke functies te bieden.',
        statisticsCookies: 'Helpen ons te begrijpen hoe bezoekers omgaan met de website door informatie anoniem te verzamelen en te rapporteren.',
        marketingCookies: 'Worden gebruikt om bezoekers over websites te volgen, zodat we relevante en aantrekkelijke advertenties kunnen tonen.',
      },
      dataUsage: {
        title: 'Hoe we uw gegevens gebruiken',
        p1: 'We zullen uw persoonlijke gegevens alleen gebruiken wanneer de wet ons dit toestaat. Meestal zullen we uw persoonlijke gegevens in de volgende omstandigheden gebruiken:',
        purposes: {
          service: 'Om onze dienst te leveren en te onderhouden, inclusief het monitoren van het gebruik van onze dienst.',
          communication: 'Om met u te communiceren, inclusief het beantwoorden van uw vragen en het verstrekken van updates en informatie met betrekking tot onze diensten.',
          improvement: 'Om onze website, producten en diensten, marketing en klantrelaties en ervaringen te verbeteren.',
          marketing: 'Om u nieuws, speciale aanbiedingen en algemene informatie te verstrekken over andere goederen, diensten en evenementen die wij aanbieden.',
        },
      },
      dataSharing: {
        title: 'Het delen van uw informatie',
        p1: 'We kunnen uw persoonlijke informatie alleen delen met derden op de manieren die in dit privacybeleid worden beschreven. We verkopen uw persoonlijke informatie niet aan derden.',
        p2: 'We kunnen uw persoonlijke informatie bekendmaken aan onze dienstverleners die namens ons werken en die hebben toegezegd de vertrouwelijkheid van uw informatie te bewaren.',
      },
      dataRetention: {
        title: 'Gegevensbewaring',
        p1: 'We bewaren uw persoonlijke gegevens alleen zolang als nodig is om de doeleinden waarvoor we deze hebben verzameld te vervullen, inclusief om te voldoen aan wettelijke, boekhoudkundige of rapportagevereisten.',
      },
      userRights: {
        title: 'Uw rechten inzake gegevensbescherming',
        p1: 'Onder bepaalde omstandigheden heeft u rechten onder de gegevensbeschermingswetten met betrekking tot uw persoonlijke gegevens, waaronder:',
        rights: {
          access: 'Het recht op toegang tot uw persoonlijke gegevens.',
          rectification: 'Het recht op correctie van uw persoonlijke gegevens.',
          erasure: 'Het recht op wissing van uw persoonlijke gegevens.',
          restriction: 'Het recht om de verwerking van uw persoonlijke gegevens te beperken.',
          dataPortability: 'Het recht op gegevensoverdraagbaarheid (om een kopie van uw persoonlijke gegevens te ontvangen).',
          objection: 'Het recht om bezwaar te maken tegen de verwerking van uw persoonlijke gegevens.',
        },
      },
      security: {
        title: 'Gegevensbeveiliging',
        p1: 'We hebben passende beveiligingsmaatregelen genomen om te voorkomen dat uw persoonlijke gegevens per ongeluk verloren gaan, worden gebruikt of op ongeoorloofde wijze worden geraadpleegd, gewijzigd of bekendgemaakt.',
      },
      changes: {
        title: 'Wijzigingen in dit privacybeleid',
        p1: 'We kunnen ons privacybeleid van tijd tot tijd bijwerken. We zullen u op de hoogte brengen van eventuele wijzigingen door het nieuwe privacybeleid op deze pagina te plaatsen en de datum "Laatst bijgewerkt" bij te werken.',
      },
      contact: {
        title: 'Neem contact met ons op',
        p1: 'Als u vragen heeft over dit privacybeleid, neem dan contact met ons op.',
        p2: 'E-mail:',
      },
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string, params?: Record<string, any>): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(`{${paramKey}}`, String(paramValue));
      }, value);
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
