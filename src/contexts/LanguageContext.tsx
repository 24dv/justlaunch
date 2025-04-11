
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'nl';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    footer: {
      description: 'We are your one-stop shop for building brand identities and websites that look gorgeous and actually work.',
      services: 'Services',
      logoDesign: 'Logo Design',
      webDesign: 'Web Design',
      brandIdentity: 'Brand Identity',
      visualTemplates: 'Visual Templates',
      quickLinks: 'Quick Links',
      work: 'Our Work',
      process: 'Our Process',
      pricing: 'Pricing',
      contactUs: 'Contact Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'All rights reserved.',
    },
    // Add translations for cookie banner
    cookie: {
      title: 'Cookie Settings',
      description: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      learnMore: 'Read our',
      privacyPolicy: 'Privacy Policy',
      acceptAll: 'Accept All',
      acceptNecessary: 'Accept Necessary',
      customize: 'Customize',
      customizeDescription: 'You can choose which categories of cookies you want to allow. Necessary cookies are always required for the website to function properly.',
      necessary: 'Necessary Cookies',
      necessaryDescription: 'These cookies are essential for the website to function properly.',
      preferences: 'Preference Cookies',
      preferencesDescription: 'These cookies allow the website to remember choices you have made in the past.',
      analytics: 'Analytics Cookies',
      analyticsDescription: 'These cookies help us understand how visitors interact with the website.',
      marketing: 'Marketing Cookies',
      marketingDescription: 'These cookies are used to track visitors across websites to display relevant advertisements.',
      back: 'Back',
      savePreferences: 'Save Preferences'
    },
    // Add translations for privacy policy
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated:',
      introduction: {
        title: 'Introduction',
        p1: 'Welcome to Just Launch. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
        p2: 'By using our website, you consent to the data practices described in this policy.'
      },
      dataCollection: {
        title: 'Information We Collect',
        p1: 'We may collect, use, store, and transfer different kinds of personal data about you, including:',
        list: {
          item1: 'Identity Data: includes first name, last name, username or similar identifier.',
          item2: 'Contact Data: includes email address and telephone numbers.',
          item3: 'Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.',
          item4: 'Usage Data: includes information about how you use our website and services.'
        }
      },
      cookies: {
        title: 'Cookies',
        p1: 'Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. We use the following types of cookies:',
        list: {
          item1: {
            title: 'Necessary Cookies',
            description: 'Required for the website to function and cannot be switched off in our systems.'
          },
          item2: {
            title: 'Preference Cookies',
            description: 'Allow us to remember your choices and preferences.'
          },
          item3: {
            title: 'Analytics Cookies',
            description: 'Help us improve our website by collecting and reporting information on how you use it.'
          },
          item4: {
            title: 'Marketing Cookies',
            description: 'Used to track visitors across websites to enable us to display relevant advertisements.'
          }
        }
      },
      dataSharing: {
        title: 'How We Share Your Information',
        p1: 'We do not sell your personal data to any third parties. We may share your personal data with selected third parties including business partners, suppliers, and sub-contractors for the performance of any contract we enter into with them or you.'
      },
      dataRights: {
        title: 'Your Data Rights',
        p1: 'Under GDPR and other applicable data protection laws, you have the right to:',
        list: {
          item1: 'Request access to your personal data',
          item2: 'Request correction of your personal data',
          item3: 'Request erasure of your personal data',
          item4: 'Object to processing of your personal data',
          item5: 'Request restriction of processing your personal data'
        }
      },
      contact: {
        title: 'Contact Us',
        p1: 'If you have any questions about this privacy policy or our privacy practices, please contact us at:'
      }
    }
  },
  nl: {
    footer: {
      description: 'Wij zijn uw one-stop shop voor het bouwen van merkidentiteiten en websites die er prachtig uitzien en daadwerkelijk werken.',
      services: 'Diensten',
      logoDesign: 'Logo Ontwerp',
      webDesign: 'Web Ontwerp',
      brandIdentity: 'Merk Identiteit',
      visualTemplates: 'Visuele Templates',
      quickLinks: 'Snelle Links',
      work: 'Ons Werk',
      process: 'Ons Proces',
      pricing: 'Prijzen',
      contactUs: 'Contact',
      privacy: 'Privacybeleid',
      terms: 'Gebruiksvoorwaarden',
      copyright: 'Alle rechten voorbehouden.',
    },
    // Add translations for cookie banner in Dutch
    cookie: {
      title: 'Cookie Instellingen',
      description: 'Wij gebruiken cookies om uw surfervaring te verbeteren, gepersonaliseerde advertenties of inhoud weer te geven en ons verkeer te analyseren. Door op "Alles accepteren" te klikken, stemt u in met ons gebruik van cookies.',
      learnMore: 'Lees ons',
      privacyPolicy: 'Privacybeleid',
      acceptAll: 'Alles Accepteren',
      acceptNecessary: 'Alleen Noodzakelijke',
      customize: 'Aanpassen',
      customizeDescription: 'U kunt kiezen welke categorieën cookies u wilt toestaan. Noodzakelijke cookies zijn altijd vereist voor een goede werking van de website.',
      necessary: 'Noodzakelijke Cookies',
      necessaryDescription: 'Deze cookies zijn essentieel voor het goed functioneren van de website.',
      preferences: 'Voorkeur Cookies',
      preferencesDescription: 'Deze cookies onthouden keuzes die u in het verleden heeft gemaakt.',
      analytics: 'Analytische Cookies',
      analyticsDescription: 'Deze cookies helpen ons te begrijpen hoe bezoekers met de website omgaan.',
      marketing: 'Marketing Cookies',
      marketingDescription: 'Deze cookies worden gebruikt om bezoekers op websites te volgen om relevante advertenties te tonen.',
      back: 'Terug',
      savePreferences: 'Voorkeuren Opslaan'
    },
    // Add translations for privacy policy in Dutch
    privacy: {
      title: 'Privacybeleid',
      lastUpdated: 'Laatst Bijgewerkt:',
      introduction: {
        title: 'Introductie',
        p1: 'Welkom bij Just Launch. Wij respecteren uw privacy en zetten ons in om uw persoonlijke gegevens te beschermen. Dit privacybeleid informeert u over hoe wij uw persoonlijke gegevens behandelen wanneer u onze website bezoekt en vertelt u over uw privacyrechten en hoe de wet u beschermt.',
        p2: 'Door gebruik te maken van onze website, stemt u in met de gegevenspraktijken die in dit beleid worden beschreven.'
      },
      dataCollection: {
        title: 'Informatie Die We Verzamelen',
        p1: 'We kunnen verschillende soorten persoonlijke gegevens over u verzamelen, gebruiken, opslaan en overdragen, waaronder:',
        list: {
          item1: 'Identiteitsgegevens: zoals voornaam, achternaam, gebruikersnaam of soortgelijke identificator.',
          item2: 'Contactgegevens: zoals e-mailadres en telefoonnummers.',
          item3: 'Technische gegevens: zoals IP-adres, browsertype en versie, tijdzone-instelling en locatie, browserplug-in types en versies, besturingssysteem en platform.',
          item4: 'Gebruiksgegevens: zoals informatie over hoe u onze website en diensten gebruikt.'
        }
      },
      cookies: {
        title: 'Cookies',
        p1: 'Onze website gebruikt cookies om u te onderscheiden van andere gebruikers van onze website. Dit helpt ons om u een goede ervaring te bieden wanneer u onze website bezoekt en stelt ons ook in staat om onze site te verbeteren. We gebruiken de volgende soorten cookies:',
        list: {
          item1: {
            title: 'Noodzakelijke Cookies',
            description: 'Vereist voor het functioneren van de website en kunnen niet worden uitgeschakeld in onze systemen.'
          },
          item2: {
            title: 'Voorkeur Cookies',
            description: 'Hiermee kunnen we uw keuzes en voorkeuren onthouden.'
          },
          item3: {
            title: 'Analytische Cookies',
            description: 'Helpen ons onze website te verbeteren door informatie te verzamelen en te rapporteren over hoe u deze gebruikt.'
          },
          item4: {
            title: 'Marketing Cookies',
            description: 'Worden gebruikt om bezoekers op websites te volgen om relevante advertenties te kunnen tonen.'
          }
        }
      },
      dataSharing: {
        title: 'Hoe We Uw Informatie Delen',
        p1: 'We verkopen uw persoonlijke gegevens niet aan derden. We kunnen uw persoonlijke gegevens delen met geselecteerde derden, waaronder zakelijke partners, leveranciers en onderaannemers voor de uitvoering van contracten die we met hen of u aangaan.'
      },
      dataRights: {
        title: 'Uw Gegevensrechten',
        p1: 'Onder de AVG en andere toepasselijke wetgeving inzake gegevensbescherming heeft u het recht om:',
        list: {
          item1: 'Toegang te vragen tot uw persoonlijke gegevens',
          item2: 'Correctie te vragen van uw persoonlijke gegevens',
          item3: 'Verwijdering te vragen van uw persoonlijke gegevens',
          item4: 'Bezwaar te maken tegen de verwerking van uw persoonlijke gegevens',
          item5: 'Beperking te vragen van de verwerking van uw persoonlijke gegevens'
        }
      },
      contact: {
        title: 'Contact Met Ons Opnemen',
        p1: 'Als u vragen heeft over dit privacybeleid of onze privacypraktijken, neem dan contact met ons op via:'
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'en' || storedLanguage === 'nl') {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback to the key if translation is not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
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
