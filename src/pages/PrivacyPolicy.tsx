import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Lock, Users, Clock } from 'lucide-react';

import PrivacyHeader from '../components/privacy-policy/PrivacyHeader';
import PrivacyIntroduction from '../components/privacy-policy/PrivacyIntroduction';
import PrivacyDataCollection from '../components/privacy-policy/PrivacyDataCollection';
import PrivacySection from '../components/privacy-policy/PrivacySection';
import PrivacyCookiePolicy from '../components/privacy-policy/PrivacyCookiePolicy';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? "Privacy Policy | Just Launch" : "Privacybeleid | Just Launch";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en' 
        ? 'Just Launch Privacy Policy - Learn how we collect, use, and protect your personal data.' 
        : 'Just Launch Privacybeleid - Lees hoe we uw persoonlijke gegevens verzamelen, gebruiken en beschermen.');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [language]);
  
  const translations = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated:",
      introduction: {
        title: "Introduction",
        content: "At Just Launch, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
      },
      dataCollection: {
        title: "Information We Collect",
        content: "We may collect several types of information when you visit our website, including:",
        items: [
          "Personal data, such as name, email address, and phone number that you voluntarily provide when using our contact form.",
          "Usage data, including your IP address, browser type, pages visited, and time spent on our website.",
          "Cookies and tracking technologies that help us analyze how visitors use our site."
        ]
      },
      useOfData: {
        title: "How We Use Your Information",
        content: "We use the collected data for various purposes, including:",
        items: [
          "To provide and maintain our website",
          "To respond to your inquiries and provide the services you request",
          "To improve our website's functionality and user experience",
          "To analyze usage patterns and optimize our marketing efforts",
          "To comply with legal obligations"
        ]
      },
      cookies: {
        title: "Our Cookie Policy",
        content: "Our website uses cookies to enhance your browsing experience. We categorize cookies as follows:",
        categories: [
          {
            name: "Necessary Cookies",
            description: "These are essential for the basic functionality of our website and cannot be disabled."
          },
          {
            name: "Analytics Cookies",
            description: "These help us understand how visitors interact with our website by collecting anonymous information. We use Google Analytics to gather this data."
          },
          {
            name: "Marketing Cookies",
            description: "These are used to track visitors across websites to enable us to display relevant advertisements based on your interests."
          }
        ],
        management: "You can manage your cookie preferences at any time by clicking the 'Cookie Settings' button in the footer of our website."
      },
      thirdParty: {
        title: "Third-Party Services",
        content: "We may use third-party services that collect, monitor, and analyze data to improve our service:",
        items: [
          "Google Analytics for website traffic analysis",
          "Facebook and Instagram for marketing purposes",
          "Google Tag Manager for implementing tracking codes"
        ]
      },
      dataRetention: {
        title: "Data Retention",
        content: "We will retain your personal data only for as long as necessary for the purposes set out in this privacy policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies."
      },
      rights: {
        title: "Your Data Protection Rights",
        content: "Under the General Data Protection Regulation (GDPR), if you are a resident of the European Union, you have certain data protection rights, including:",
        items: [
          "The right to access your personal data",
          "The right to rectification of inaccurate information",
          "The right to erasure of your personal data",
          "The right to restrict processing of your personal data",
          "The right to data portability",
          "The right to object to processing of your personal data"
        ]
      },
      contact: {
        title: "Contact Us",
        content: "If you have any questions about this privacy policy or our data practices, please contact us at hello@justlaunch.be"
      }
    },
    nl: {
      title: "Privacybeleid",
      lastUpdated: "Laatst bijgewerkt:",
      introduction: {
        title: "Introductie",
        content: "Bij Just Launch respecteren we uw privacy en zetten we ons in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe we uw informatie verzamelen, gebruiken, delen en beschermen wanneer u onze website bezoekt."
      },
      dataCollection: {
        title: "Informatie die we verzamelen",
        content: "We kunnen verschillende soorten informatie verzamelen wanneer u onze website bezoekt, waaronder:",
        items: [
          "Persoonlijke gegevens, zoals naam, e-mailadres en telefoonnummer die u vrijwillig verstrekt bij het gebruik van ons contactformulier.",
          "Gebruiksgegevens, waaronder uw IP-adres, browsertype, bezochte pagina's en tijd besteed op onze website.",
          "Cookies en trackingtechnologieën die ons helpen te analyseren hoe bezoekers onze site gebruiken."
        ]
      },
      useOfData: {
        title: "Hoe we uw informatie gebruiken",
        content: "We gebruiken de verzamelde gegevens voor verschillende doeleinden, waaronder:",
        items: [
          "Om onze website te verzorgen en te onderhouden",
          "Om te reageren op uw vragen en de diensten te leveren die u aanvraagt",
          "Om de functionaliteit en gebruikerservaring van onze website te verbeteren",
          "Om gebruikspatronen te analyseren en onze marketinginspanningen te optimaliseren",
          "Om te voldoen aan wettelijke verplichtingen"
        ]
      },
      cookies: {
        title: "Ons Cookiebeleid",
        content: "Onze website gebruikt cookies om uw surfervaring te verbeteren. We categoriseren cookies als volgt:",
        categories: [
          {
            name: "Noodzakelijke Cookies",
            description: "Deze zijn essentieel voor de basisfunctionaliteit van onze website en kunnen niet worden uitgeschakeld."
          },
          {
            name: "Analytische Cookies",
            description: "Deze helpen ons te begrijpen hoe bezoekers met onze website omgaan door anonieme informatie te verzamelen. We gebruiken Google Analytics om deze gegevens te verzamelen."
          },
          {
            name: "Marketing Cookies",
            description: "Deze worden gebruikt om bezoekers over websites te volgen zodat we relevante advertenties kunnen tonen op basis van uw interesses."
          }
        ],
        management: "U kunt uw cookievoorkeuren op elk moment beheren door te klikken op de knop 'Cookie-instellingen' in de footer van onze website."
      },
      thirdParty: {
        title: "Diensten van derden",
        content: "We kunnen diensten van derden gebruiken die gegevens verzamelen, monitoren en analyseren om onze service te verbeteren:",
        items: [
          "Google Analytics voor analyse van websiteverkeer",
          "Facebook en Instagram voor marketingdoeleinden",
          "Google Tag Manager voor het implementeren van trackingcodes"
        ]
      },
      dataRetention: {
        title: "Gegevensbewaring",
        content: "We bewaren uw persoonlijke gegevens alleen zolang als nodig is voor de doeleinden die in dit privacybeleid zijn uiteengezet. We bewaren en gebruiken uw informatie voor zover nodig om te voldoen aan onze wettelijke verplichtingen, geschillen op te lossen en ons beleid te handhaven."
      },
      rights: {
        title: "Uw gegevensbeschermingsrechten",
        content: "Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u als inwoner van de Europese Unie bepaalde gegevensbeschermingsrechten, waaronder:",
        items: [
          "Het recht op toegang tot uw persoonlijke gegevens",
          "Het recht op rectificatie van onjuiste informatie",
          "Het recht op wissing van uw persoonlijke gegevens",
          "Het recht op beperking van de verwerking van uw persoonlijke gegevens",
          "Het recht op gegevensoverdraagbaarheid",
          "Het recht om bezwaar te maken tegen de verwerking van uw persoonlijke gegevens"
        ]
      },
      contact: {
        title: "Neem contact met ons op",
        content: "Als u vragen heeft over dit privacybeleid of onze gegevenspraktijken, neem dan contact met ons op via hello@justlaunch.be"
      }
    }
  };
  
  const text = translations[language as keyof typeof translations];
  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  
  return (
    <div className="min-h-screen bg-[#F5F5E9] text-[#0D503C] antialiased">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="prose prose-headings:text-[#0D503C] prose-p:text-[#0D503C]/80 max-w-none">
          <PrivacyHeader 
            title={text.title} 
            lastUpdated={text.lastUpdated} 
            formattedDate={formattedDate} 
          />
          
          <PrivacyIntroduction 
            title={text.introduction.title} 
            content={text.introduction.content} 
          />
          
          <PrivacyDataCollection 
            title={text.dataCollection.title} 
            content={text.dataCollection.content} 
            items={text.dataCollection.items} 
          />
          
          <PrivacySection 
            title={text.useOfData.title} 
            content={text.useOfData.content} 
            items={text.useOfData.items} 
          />
          
          <PrivacyCookiePolicy 
            title={text.cookies.title} 
            content={text.cookies.content} 
            categories={text.cookies.categories} 
            management={text.cookies.management} 
          />
          
          <PrivacySection 
            title={text.thirdParty.title} 
            content={text.thirdParty.content} 
            items={text.thirdParty.items} 
          />
          
          <PrivacySection 
            title={text.dataRetention.title} 
            content={text.dataRetention.content} 
            icon={<Clock size={20} className="text-[#0D503C]" />} 
          />
          
          <PrivacySection 
            title={text.rights.title} 
            content={text.rights.content} 
            items={text.rights.items} 
            icon={<Lock size={20} className="text-[#0D503C]" />} 
          />
          
          <PrivacySection 
            title={text.contact.title} 
            content={text.contact.content} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
