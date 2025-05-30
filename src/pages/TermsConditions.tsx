import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Info, CheckCircle, AlertTriangle, Clock, AlertCircle } from 'lucide-react';
import TermsHeader from '../components/terms/TermsHeader';
import TermsSection from '../components/terms/TermsSection';

const TermsConditions = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? "Terms & Conditions | Just Launch" : "Algemene Voorwaarden | Just Launch";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en' 
        ? 'Just Launch Terms & Conditions - Learn about our terms of service and usage policies.' 
        : 'Just Launch Algemene Voorwaarden - Lees meer over onze servicevoorwaarden en gebruiksbeleid.');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [language]);
  
  const translations = {
    en: {
      title: "Terms & Conditions",
      lastUpdated: "Last Updated:",
      introduction: {
        title: "Introduction",
        content: "Welcome to Just Launch. By accessing our website and using our services, you agree to be bound by these Terms & Conditions. Please read them carefully."
      },
      servicesSection: {
        title: "Services",
        content: "Just Launch provides design services including logo design, web design, brand identity, and visual templates. Our services are subject to the following terms and conditions."
      },
      intellectualPropertySection: {
        title: "Intellectual Property",
        content: "Upon full payment, you will receive ownership rights to the final deliverables created for your project. We retain the right to showcase the work in our portfolio unless otherwise specified in a separate agreement."
      },
      paymentSection: {
        title: "Payment Terms",
        content: "Payment terms are outlined in each client agreement. A deposit may be required before work commences, and final deliverables will be released upon receipt of full payment."
      },
      revisionSection: {
        title: "Revisions and Alterations",
        content: "Each project includes a specific number of revisions as outlined in your agreement. Additional revisions may incur extra charges."
      },
      terminationSection: {
        title: "Termination",
        content: "Either party may terminate the service agreement with written notice. If you terminate the agreement, you're responsible for paying for all work completed up to the termination date."
      },
      liabilitySection: {
        title: "Limitation of Liability",
        content: "Just Launch shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
      },
      amendmentsSection: {
        title: "Amendments",
        content: "We reserve the right to update these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website."
      },
      contactSection: {
        title: "Contact Us",
        content: "If you have any questions about these Terms & Conditions, please contact us at hello@justlaunch.be."
      }
    },
    nl: {
      title: "Algemene Voorwaarden",
      lastUpdated: "Laatst bijgewerkt:",
      introduction: {
        title: "Introductie",
        content: "Welkom bij Just Launch. Door onze website te bezoeken en onze diensten te gebruiken, gaat u akkoord met deze Algemene Voorwaarden. Lees ze zorgvuldig door."
      },
      servicesSection: {
        title: "Diensten",
        content: "Just Launch biedt ontwerpdiensten aan, waaronder logo-ontwerp, webdesign, merkidentiteit en visuele sjablonen. Onze diensten zijn onderworpen aan de volgende voorwaarden."
      },
      intellectualPropertySection: {
        title: "Intellectueel Eigendom",
        content: "Na volledige betaling ontvangt u de eigendomsrechten van de definitieve leveringen die voor uw project zijn gemaakt. Wij behouden het recht om het werk in onze portfolio te tonen, tenzij anders aangegeven in een aparte overeenkomst."
      },
      paymentSection: {
        title: "Betalingsvoorwaarden",
        content: "Betalingsvoorwaarden worden uiteengezet in elke klantovereenkomst. Een aanbetaling kan vereist zijn voordat het werk begint, en eindproducten worden vrijgegeven na ontvangst van de volledige betaling."
      },
      revisionSection: {
        title: "Revisies en Wijzigingen",
        content: "Elk project bevat een specifiek aantal revisies zoals beschreven in uw overeenkomst. Extra revisies kunnen extra kosten met zich meebrengen."
      },
      terminationSection: {
        title: "Beëindiging",
        content: "Beide partijen kunnen de dienstverleningsovereenkomst beëindigen met schriftelijke kennisgeving. Als u de overeenkomst beëindigt, bent u verantwoordelijk voor de betaling van al het werk dat tot de beëindigingsdatum is voltooid."
      },
      liabilitySection: {
        title: "Beperking van Aansprakelijkheid",
        content: "Just Launch is niet aansprakelijk voor indirecte, incidentele, speciale, gevolgschade of punitieve schade als gevolg van uw gebruik van onze diensten."
      },
      amendmentsSection: {
        title: "Wijzigingen",
        content: "Wij behouden ons het recht voor om deze Algemene Voorwaarden op elk moment bij te werken. Wijzigingen zullen onmiddellijk van kracht worden na plaatsing op onze website."
      },
      contactSection: {
        title: "Neem Contact Op",
        content: "Als u vragen heeft over deze Algemene Voorwaarden, neem dan contact met ons op via hello@justlaunch.be."
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
          <TermsHeader 
            title={text.title} 
            lastUpdated={text.lastUpdated} 
            formattedDate={formattedDate} 
          />
          
          <TermsSection 
            title={text.introduction.title} 
            content={text.introduction.content} 
            icon={<Info size={20} className="text-[#0D503C]" />} 
          />
          
          <TermsSection 
            title={text.servicesSection.title} 
            content={text.servicesSection.content} 
            icon={<CheckCircle size={20} className="text-[#0D503C]" />} 
          />
          
          <TermsSection 
            title={text.intellectualPropertySection.title} 
            content={text.intellectualPropertySection.content} 
            icon={<AlertCircle size={20} className="text-[#0D503C]" />} 
          />
          
          <TermsSection 
            title={text.paymentSection.title} 
            content={text.paymentSection.content} 
          />
          
          <TermsSection 
            title={text.revisionSection.title} 
            content={text.revisionSection.content} 
          />
          
          <TermsSection 
            title={text.terminationSection.title} 
            content={text.terminationSection.content} 
            icon={<AlertTriangle size={20} className="text-[#0D503C]" />} 
          />
          
          <TermsSection 
            title={text.liabilitySection.title} 
            content={text.liabilitySection.content} 
          />
          
          <TermsSection 
            title={text.amendmentsSection.title} 
            content={text.amendmentsSection.content} 
          />
          
          <TermsSection 
            title={text.contactSection.title} 
            content={text.contactSection.content} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
