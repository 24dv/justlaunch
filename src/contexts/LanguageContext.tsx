import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: any;
}

const translations: Translations = {
  en: {
    // ... keep existing code for English translations
    cookies: {
      title: 'Cookie Preferences',
      description: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      privacyPolicy: 'Privacy Policy',
      customize: 'Customize Preferences',
      acceptNecessary: 'Accept Necessary',
      acceptAll: 'Accept All',
      save: 'Save Preferences',
      back: 'Back',
      necessary: {
        title: 'Necessary Cookies',
        description: 'These cookies are essential for the website to function properly and cannot be disabled.'
      },
      analytics: {
        title: 'Analytics Cookies',
        description: 'These cookies allow us to analyze site usage so we can measure and improve performance.'
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'These cookies are used to track visitors across websites to display relevant advertisements.'
      }
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: {date}',
      introduction: {
        title: 'Introduction',
        text: 'At Just Launch, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, process, and store your data when you visit our website or use our services.'
      },
      dataCollection: {
        title: 'Information We Collect',
        text: 'We may collect the following types of information:',
        items: {
          personal: 'Personal identification information (name, email address, phone number, etc.)',
          usage: 'Usage data (how you interact with our website)',
          technical: 'Technical data (IP address, browser type, device information)',
          cookies: 'Information collected through cookies and similar technologies'
        }
      },
      dataUse: {
        title: 'How We Use Your Data',
        text: 'We use your data for the following purposes:',
        items: {
          service: 'To provide and maintain our services',
          improvement: 'To improve our website and services',
          communication: 'To communicate with you about our services',
          legal: 'To comply with legal obligations'
        }
      },
      cookies: {
        title: 'Cookies',
        text: 'We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
        types: {
          necessary: {
            title: 'Necessary Cookies',
            description: 'These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.'
          },
          analytics: {
            title: 'Analytics Cookies',
            description: 'These cookies collect information about how you use our website, which pages you visited and which links you clicked on. None of this information can be used to identify you.'
          },
          marketing: {
            title: 'Marketing Cookies',
            description: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.'
          }
        }
      },
      dataSharing: {
        title: 'Data Sharing and Disclosure',
        text: 'We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.'
      },
      dataRights: {
        title: 'Your Data Protection Rights',
        text: 'Under GDPR, you have the following rights:',
        items: {
          access: 'The right to access your personal data',
          rectification: 'The right to correct inaccurate personal data',
          erasure: 'The right to request deletion of your personal data',
          restriction: 'The right to restrict processing of your personal data',
          objection: 'The right to object to processing of your personal data',
          portability: 'The right to request transfer of your personal data'
        },
        contact: 'To exercise any of these rights, please contact us.'
      },
      security: {
        title: 'Data Security',
        text: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.'
      },
      changes: {
        title: 'Changes to This Privacy Policy',
        text: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'
      },
      contact: {
        title: 'Contact Us',
        text: 'If you have any questions about this Privacy Policy, please contact us at:'
      }
    },
  },
  nl: {
    // ... keep existing code for Dutch translations
    cookies: {
      title: 'Cookie Voorkeuren',
      description: 'Wij gebruiken cookies om uw surfervaring te verbeteren, gepersonaliseerde advertenties of inhoud te tonen en ons verkeer te analyseren. Door op "Alles accepteren" te klikken, stemt u in met ons gebruik van cookies.',
      privacyPolicy: 'Privacybeleid',
      customize: 'Voorkeuren aanpassen',
      acceptNecessary: 'Alleen noodzakelijke',
      acceptAll: 'Alles accepteren',
      save: 'Voorkeuren opslaan',
      back: 'Terug',
      necessary: {
        title: 'Noodzakelijke Cookies',
        description: 'Deze cookies zijn essentieel voor het goed functioneren van de website en kunnen niet worden uitgeschakeld.'
      },
      analytics: {
        title: 'Analytische Cookies',
        description: 'Deze cookies stellen ons in staat om het gebruik van de site te analyseren zodat we de prestaties kunnen meten en verbeteren.'
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'Deze cookies worden gebruikt om bezoekers op websites te volgen om relevante advertenties te tonen.'
      }
    },
    privacy: {
      title: 'Privacybeleid',
      lastUpdated: 'Laatst bijgewerkt: {date}',
      introduction: {
        title: 'Introductie',
        text: 'Bij Just Launch respecteren wij uw privacy en zetten wij ons in om uw persoonlijke gegevens te beschermen. Dit privacybeleid legt uit hoe wij uw gegevens verzamelen, gebruiken, verwerken en opslaan wanneer u onze website bezoekt of gebruik maakt van onze diensten.'
      },
      dataCollection: {
        title: 'Informatie die wij verzamelen',
        text: 'Wij kunnen de volgende soorten informatie verzamelen:',
        items: {
          personal: 'Persoonlijke identificatiegegevens (naam, e-mailadres, telefoonnummer, enz.)',
          usage: 'Gebruiksgegevens (hoe u met onze website interacteert)',
          technical: 'Technische gegevens (IP-adres, browsertype, apparaatinformatie)',
          cookies: 'Informatie verzameld via cookies en vergelijkbare technologieën'
        }
      },
      dataUse: {
        title: 'Hoe wij uw gegevens gebruiken',
        text: 'Wij gebruiken uw gegevens voor de volgende doeleinden:',
        items: {
          service: 'Om onze diensten te leveren en te onderhouden',
          improvement: 'Om onze website en diensten te verbeteren',
          communication: 'Om met u te communiceren over onze diensten',
          legal: 'Om te voldoen aan wettelijke verplichtingen'
        }
      },
      cookies: {
        title: 'Cookies',
        text: 'Wij gebruiken cookies en vergelijkbare trackingtechnologieën om activiteiten op onze website bij te houden en bepaalde informatie op te slaan. U kunt uw browser instrueren om alle cookies te weigeren of om aan te geven wanneer een cookie wordt verzonden.',
        types: {
          necessary: {
            title: 'Noodzakelijke Cookies',
            description: 'Deze cookies zijn essentieel voor u om de website te kunnen browsen en de functies ervan te kunnen gebruiken, zoals het betreden van beveiligde gedeelten van de site.'
          },
          analytics: {
            title: 'Analytische Cookies',
            description: 'Deze cookies verzamelen informatie over hoe u onze website gebruikt, welke pagina\'s u heeft bezocht en op welke links u heeft geklikt. Geen van deze informatie kan worden gebruikt om u te identificeren.'
          },
          marketing: {
            title: 'Marketing Cookies',
            description: 'Deze cookies volgen uw online activiteit om adverteerders te helpen relevantere advertenties te leveren of om te beperken hoe vaak u een advertentie ziet.'
          }
        }
      },
      dataSharing: {
        title: 'Gegevens delen en openbaarmaking',
        text: 'Wij verkopen, verhandelen of verhuren uw persoonlijke identificatiegegevens niet aan anderen. Wij kunnen generieke geaggregeerde demografische informatie die niet is gekoppeld aan persoonlijke identificatiegegevens betreffende bezoekers en gebruikers delen met onze zakenpartners en vertrouwde partners.'
      },
      dataRights: {
        title: 'Uw rechten inzake gegevensbescherming',
        text: 'Onder de AVG heeft u de volgende rechten:',
        items: {
          access: 'Het recht op toegang tot uw persoonlijke gegevens',
          rectification: 'Het recht om onjuiste persoonlijke gegevens te corrigeren',
          erasure: 'Het recht om verwijdering van uw persoonlijke gegevens te verzoeken',
          restriction: 'Het recht om de verwerking van uw persoonlijke gegevens te beperken',
          objection: 'Het recht om bezwaar te maken tegen de verwerking van uw persoonlijke gegevens',
          portability: 'Het recht om overdracht van uw persoonlijke gegevens te verzoeken'
        },
        contact: 'Om een van deze rechten uit te oefenen, kunt u contact met ons opnemen.'
      },
      security: {
        title: 'Gegevensbeveiliging',
        text: 'Wij hebben passende technische en organisatorische beveiligingsmaatregelen geïmplementeerd die zijn ontworpen om de veiligheid van alle persoonlijke informatie die wij verwerken te beschermen. Houd er echter rekening mee dat geen enkele elektronische transmissie via het internet of informatieopslagtechnologie 100% veilig kan worden gegarandeerd.'
      },
      changes: {
        title: 'Wijzigingen in dit privacybeleid',
        text: 'Wij kunnen ons privacybeleid van tijd tot tijd bijwerken. Wij zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe privacybeleid op deze pagina te plaatsen en de datum van "Laatst bijgewerkt" bij te werken.'
      },
      contact: {
        title: 'Neem contact op',
        text: 'Als u vragen heeft over dit privacybeleid, neem dan contact met ons op via:'
      }
    },
  }
};

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  const t = (key: string, options?: any): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
