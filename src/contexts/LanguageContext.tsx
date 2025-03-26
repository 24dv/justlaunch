
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'nl';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create translations
const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.work": "Work",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "New",
    "hero.badgeText": "Launch your brand in days, not months",
    "hero.title": "Launch Your Brand Fast—From Idea to Online in Days!",
    "hero.subtitle": "Get a professional logo and landing page for just €1,500. No hidden costs, no hassle.",
    "hero.cta": "Get Started Today",
    "hero.scroll": "Scroll to learn more",

    // Features Section
    "features.title": "Everything You Need to Launch Fast",
    "features.subtitle": "Our Launch Package is designed for startup founders who need a professional brand without the long wait. Perfect for new businesses ready to make an impact!",
    "features.logoDesign.title": "Professional logo design",
    "features.logoDesign.description": "Get a custom logo that perfectly reflects your brand identity and values.",
    "features.landingSite.title": "Customized 1-page landing site",
    "features.landingSite.description": "A beautiful, responsive website that showcases your brand and converts visitors.",
    "features.delivery.title": "Fast delivery within 14 days",
    "features.delivery.description": "Launch quickly while maintaining the highest quality standards.",
    "features.process.title": "Simple process",
    "features.process.description": "No complex tools or AI generators—just professional human designers.",
    "features.pricing.title": "Affordable pricing",
    "features.pricing.description": "Premium quality at a fair price point of just €1,500, with no hidden costs.",
    "features.support.title": "Support included",
    "features.support.description": "Get post-launch assistance to ensure everything works perfectly.",

    // Process Section
    "process.title": "How It Works",
    "process.subtitle": "Our streamlined process takes you from concept to launch with minimal effort on your part.",
    "process.step1.title": "Sign Up",
    "process.step1.description": "Fill out the form and get started with your project immediately.",
    "process.step2.title": "Design Consultation",
    "process.step2.description": "Share your ideas and vision with our designers through a detailed brief.",
    "process.step3.title": "Receive Drafts",
    "process.step3.description": "We'll create a logo and landing page tailored specifically for your business.",
    "process.step4.title": "Launch",
    "process.step4.description": "Finalize and go live with your new brand in just 14 days!",

    // Pricing Section
    "pricing.title": "Transparent Pricing, No Surprises",
    "pricing.subtitle": "Choose the package that suits your needs and budget. All prices include VAT.",
    "pricing.launch.title": "Launch Package",
    "pricing.launch.price": "€1,500",
    "pricing.launch.description": "Perfect for startups and small businesses looking to establish their brand quickly.",
    "pricing.launch.includes": "Includes:",
    "pricing.premium.title": "Premium Package",
    "pricing.premium.price": "€2,500",
    "pricing.premium.plan": "or €833/month for 3 months",
    "pricing.premium.description": "Comprehensive branding solution for businesses ready to make a strong market entry.",
    "pricing.premium.includes": "Everything in Launch Package, plus:",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Don't just take our word for it. Here's what founders like you have experienced.",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Get answers to the most common questions about our services.",
    "faq.moreQuestions": "Still have questions? We're here to help!",
    "faq.contactUs": "Contact Us",

    // Contact Section
    "contact.title": "Ready to take your startup to the next level?",
    "contact.subtitle": "Fill out the form and we'll get back to you within 24 hours to discuss your project.",
    "contact.nextSteps": "What happens next?",
    "contact.step1": "We'll schedule a quick call to understand your needs better",
    "contact.step2": "You'll receive a detailed project brief to fill out",
    "contact.step3": "We'll present a project timeline and start working after payment",
    "contact.questions": "Questions? Contact us directly:",
    "contact.email": "hello@fastbrandlaunch.com",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company/Project Name",
    "contact.form.package": "Package of Interest",
    "contact.form.message": "Tell us about your project",
    "contact.form.submit": "Get Started Now",
    "contact.form.privacy": "By submitting this form, you agree to our privacy policy and terms of service.",
    "contact.success.title": "Thank you!",
    "contact.success.message": "Your message has been sent successfully. We'll get back to you within 24 hours.",

    // Footer
    "footer.description": "We help startups and small businesses launch their brand quickly with professional design services at affordable prices.",
    "footer.services": "Services",
    "footer.logoDesign": "Logo Design",
    "footer.webDesign": "Web Design",
    "footer.brandIdentity": "Brand Identity",
    "footer.socialMedia": "Social Media",
    "footer.quickLinks": "Quick Links",
    "footer.about": "About Us",
    "footer.portfolio": "Portfolio",
    "footer.process": "Process",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service"
  },
  nl: {
    // Navigation
    "nav.features": "Functies",
    "nav.work": "Portfolio",
    "nav.process": "Proces",
    "nav.pricing": "Prijzen",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.getStarted": "Begin Nu",

    // Hero Section
    "hero.badge": "Nieuw",
    "hero.badgeText": "Lanceer je merk in dagen, niet maanden",
    "hero.title": "Lanceer Je Merk Snel—Van Idee naar Online in Dagen!",
    "hero.subtitle": "Krijg een professioneel logo en landingspagina voor slechts €1.500. Geen verborgen kosten, geen gedoe.",
    "hero.cta": "Begin Vandaag",
    "hero.scroll": "Scroll voor meer informatie",

    // Features Section
    "features.title": "Alles Wat Je Nodig Hebt voor een Snelle Lancering",
    "features.subtitle": "Ons Lanceerpakket is ontworpen voor startup-oprichters die snel een professioneel merk nodig hebben. Perfect voor nieuwe bedrijven die impact willen maken!",
    "features.logoDesign.title": "Professioneel logo ontwerp",
    "features.logoDesign.description": "Krijg een aangepast logo dat perfect je merkidentiteit en waarden weerspiegelt.",
    "features.landingSite.title": "Aangepaste 1-pagina landingssite",
    "features.landingSite.description": "Een mooie, responsieve website die je merk toont en bezoekers converteert.",
    "features.delivery.title": "Snelle levering binnen 14 dagen",
    "features.delivery.description": "Lanceer snel met behoud van de hoogste kwaliteitsstandaarden.",
    "features.process.title": "Eenvoudig proces",
    "features.process.description": "Geen complexe tools of AI-generators—gewoon professionele menselijke ontwerpers.",
    "features.pricing.title": "Betaalbare prijzen",
    "features.pricing.description": "Premiumkwaliteit voor een eerlijke prijs van slechts €1.500, zonder verborgen kosten.",
    "features.support.title": "Ondersteuning inbegrepen",
    "features.support.description": "Krijg hulp na de lancering om ervoor te zorgen dat alles perfect werkt.",

    // Process Section
    "process.title": "Hoe Het Werkt",
    "process.subtitle": "Ons gestroomlijnde proces brengt je van concept naar lancering met minimale inspanning van jouw kant.",
    "process.step1.title": "Aanmelden",
    "process.step1.description": "Vul het formulier in en begin direct met je project.",
    "process.step2.title": "Ontwerpconsultatie",
    "process.step2.description": "Deel je ideeën en visie met onze ontwerpers via een gedetailleerde briefing.",
    "process.step3.title": "Ontvang Concepten",
    "process.step3.description": "We maken een logo en landingspagina specifiek voor jouw bedrijf.",
    "process.step4.title": "Lancering",
    "process.step4.description": "Finaliseer en ga live met je nieuwe merk in slechts 14 dagen!",

    // Pricing Section
    "pricing.title": "Transparante Prijzen, Geen Verrassingen",
    "pricing.subtitle": "Kies het pakket dat past bij jouw behoeften en budget. Alle prijzen zijn inclusief BTW.",
    "pricing.launch.title": "Lanceerpakket",
    "pricing.launch.price": "€1.500",
    "pricing.launch.description": "Perfect voor startups en kleine bedrijven die snel hun merk willen vestigen.",
    "pricing.launch.includes": "Inbegrepen:",
    "pricing.premium.title": "Premium Pakket",
    "pricing.premium.price": "€2.500",
    "pricing.premium.plan": "of €833/maand voor 3 maanden",
    "pricing.premium.description": "Uitgebreide brandingoplossing voor bedrijven die klaar zijn voor een sterke marktintroductie.",
    "pricing.premium.includes": "Alles in het Lanceerpakket, plus:",

    // Testimonials Section
    "testimonials.title": "Wat Onze Klanten Zeggen",
    "testimonials.subtitle": "Neem niet alleen ons woord ervoor. Hier is wat oprichters zoals jij hebben ervaren.",

    // FAQ Section
    "faq.title": "Veelgestelde Vragen",
    "faq.subtitle": "Krijg antwoorden op de meest voorkomende vragen over onze diensten.",
    "faq.moreQuestions": "Nog vragen? We zijn er om te helpen!",
    "faq.contactUs": "Neem Contact Op",

    // Contact Section
    "contact.title": "Klaar om je startup naar het volgende niveau te tillen?",
    "contact.subtitle": "Vul het formulier in en we nemen binnen 24 uur contact met je op om je project te bespreken.",
    "contact.nextSteps": "Wat gebeurt er hierna?",
    "contact.step1": "We plannen een korte oproep om je behoeften beter te begrijpen",
    "contact.step2": "Je ontvangt een gedetailleerde projectbriefing om in te vullen",
    "contact.step3": "We presenteren een projectplanning en beginnen na betaling met werken",
    "contact.questions": "Vragen? Neem direct contact met ons op:",
    "contact.email": "hello@fastbrandlaunch.com",
    "contact.form.name": "Je Naam",
    "contact.form.email": "E-mailadres",
    "contact.form.company": "Bedrijfs-/Projectnaam",
    "contact.form.package": "Pakket van Interesse",
    "contact.form.message": "Vertel ons over je project",
    "contact.form.submit": "Begin Nu",
    "contact.form.privacy": "Door dit formulier in te dienen, ga je akkoord met ons privacybeleid en onze servicevoorwaarden.",
    "contact.success.title": "Bedankt!",
    "contact.success.message": "Je bericht is succesvol verzonden. We nemen binnen 24 uur contact met je op.",

    // Footer
    "footer.description": "We helpen startups en kleine bedrijven hun merk snel te lanceren met professionele ontwerpdiensten tegen betaalbare prijzen.",
    "footer.services": "Diensten",
    "footer.logoDesign": "Logo Ontwerp",
    "footer.webDesign": "Web Ontwerp",
    "footer.brandIdentity": "Merkidentiteit",
    "footer.socialMedia": "Social Media",
    "footer.quickLinks": "Snelle Links",
    "footer.about": "Over Ons",
    "footer.portfolio": "Portfolio",
    "footer.process": "Proces",
    "footer.contactUs": "Contact",
    "footer.copyright": "Alle rechten voorbehouden.",
    "footer.privacy": "Privacybeleid",
    "footer.terms": "Servicevoorwaarden"
  }
};

// Create Language Provider Component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
