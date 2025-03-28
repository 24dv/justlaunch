
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

    // Carousel Section
    "carousel.title": "From Concept to Reality",
    "carousel.subtitle": "See the transformations we've created for our clients.",
    "carousel.before": "Before",
    "carousel.after": "After",
    "carousel.previous": "Previous",
    "carousel.next": "Next",
    "carousel.goToSlide": "Go to slide",

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
    "pricing.subtitle": "Choose the package that suits your needs and budget. All prices exclude VAT.",
    "pricing.launch.title": "Launch Package",
    "pricing.launch.price": "€1,500",
    "pricing.launch.description": "Everything you need to launch a polished, professional brand — without the agency price tag.",
    "pricing.launch.includes": "INCLUDES:",
    "pricing.launch.feature1": "Custom 1-page website (like this one!)",
    "pricing.launch.feature2": "Professional logo design",
    "pricing.launch.feature3": "Tailored brand color palette",
    "pricing.launch.feature4": "1 round of revision",
    "pricing.launch.feature5": "Launch-ready in just 14 days",
    "pricing.launch.feature6": "Built by pro designers, based in Belgium 🇧🇪",
    "pricing.premium.title": "Premium Package",
    "pricing.premium.price": "€2,500",
    "pricing.premium.plan": "or €833/month for 3 months",
    "pricing.premium.description": "Designed for founders who want to look sharp and stay consistent — with a multi-page site, custom visuals, and a clear style guide to tie it all together.",
    "pricing.premium.includes": "INCLUDES:",
    "pricing.premium.feature1": "Custom 4-page website", 
    "pricing.premium.feature2": "Professional logo design",
    "pricing.premium.feature3": "Brand style guide (logo, colors, fonts)",
    "pricing.premium.feature4": "5 custom social media templates",
    "pricing.premium.feature5": "2 rounds of revisions",
    "pricing.premium.feature6": "Launch-ready in just 14 days",
    "pricing.premium.feature7": "Built by pro designers, based in Belgium 🇧🇪",
    "pricing.noPayment": "No payment now — just reserve your spot.",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Don't just take our word for it. Here's what founders like you have experienced.",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Get answers to the most common questions about our services.",
    "faq.question1.title": "How long does it take to deliver?",
    "faq.question1.answer": "We aim to launch your full brand and website within 14 days of kickoff — as long as feedback and content are provided on time. We'll share a clear timeline once your spot is confirmed.",
    "faq.question2.title": "Can I make changes after I receive the drafts?",
    "faq.question2.answer": "Yes — each package includes at least one round of revisions. You'll have a chance to give feedback before we finalize.",
    "faq.question3.title": "How does the payment plan work?",
    "faq.question3.answer": "For the Premium Package, you can split the cost into 3 equal monthly payments. No extra fees, no surprises.",
    "faq.question4.title": "Do I get everything I need to launch and use my brand?",
    "faq.question4.answer": "Yes — you'll receive high-resolution PNG files that are ready to use across your website, social media, and digital platforms. For most founders, that's all you'll ever need.",
    "faq.question5.title": "Is this right for me if I'm just getting started?",
    "faq.question5.answer": "Absolutely. We work with solo founders, freelancers, and small businesses at all stages — whether you're launching something new or refreshing your current brand.",
    "faq.question6.title": "Can I add more pages, templates, or services later?",
    "faq.question6.answer": "Yes — additional work like extra pages or marketing assets can be added after your launch. Just reach out, we'll always give you a clear quote first.",
    "faq.question7.title": "Where are you based?",
    "faq.question7.answer": "Just Launch is based in Belgium, but we work with clients all over Europe and beyond.",
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
    "contact.email": "hello@justlaunch.com",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company/Project Name",
    "contact.form.package": "Package of Interest",
    "contact.form.message": "Tell us about your project",
    "contact.form.submit": "Get Started Now",
    "contact.form.submitting": "Sending...",
    "contact.form.privacy": "By submitting this form, you agree to our privacy policy and terms of service.",
    "contact.success.title": "Thank you!",
    "contact.success.message": "Your message has been sent successfully. We'll get back to you within 24 hours.",

    // Footer
    "footer.description": "We help startups and small businesses launch their brand quickly with professional design services at affordable prices.",
    "footer.services": "Services",
    "footer.logoDesign": "Logo Design",
    "footer.webDesign": "Web Design",
    "footer.brandIdentity": "Brand Identity",
    "footer.visualTemplates": "Visual Templates",
    "footer.quickLinks": "Quick Links",
    "footer.work": "Work",
    "footer.process": "Process",
    "footer.pricing": "Pricing",
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

    // Carousel Section
    "carousel.title": "Van Concept naar Realiteit",
    "carousel.subtitle": "Bekijk de transformaties die we voor onze klanten hebben gecreëerd.",
    "carousel.before": "Voor",
    "carousel.after": "Na",
    "carousel.previous": "Vorige",
    "carousel.next": "Volgende",
    "carousel.goToSlide": "Ga naar slide",

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
    "pricing.subtitle": "Kies het pakket dat past bij jouw behoeften en budget. Alle prijzen zijn exclusief BTW.",
    "pricing.launch.title": "Lanceerpakket",
    "pricing.launch.price": "€1.500",
    "pricing.launch.description": "Alles wat je nodig hebt om een gepolijst, professioneel merk te lanceren — zonder het prijskaartje van een bureau.",
    "pricing.launch.includes": "INBEGREPEN:",
    "pricing.launch.feature1": "Aangepaste 1-pagina website (zoals deze!)",
    "pricing.launch.feature2": "Professioneel logo ontwerp",
    "pricing.launch.feature3": "Op maat gemaakt kleurenpalet",
    "pricing.launch.feature4": "1 revisieronde",
    "pricing.launch.feature5": "Klaar voor lancering in slechts 14 dagen",
    "pricing.launch.feature6": "Gemaakt door professionele ontwerpers, gevestigd in België 🇧🇪",
    "pricing.premium.title": "Premium Pakket",
    "pricing.premium.price": "€2.500",
    "pricing.premium.plan": "of €833/maand voor 3 maanden",
    "pricing.premium.description": "Ontworpen voor oprichters die er scherp uit willen zien en consistent willen blijven — met een multi-pagina site, aangepaste visuals en een duidelijke stijlgids.",
    "pricing.premium.includes": "INBEGREPEN:",
    "pricing.premium.feature1": "Aangepaste 4-pagina website",
    "pricing.premium.feature2": "Professioneel logo ontwerp",
    "pricing.premium.feature3": "Merk stijlgids (logo, kleuren, lettertypen)",
    "pricing.premium.feature4": "5 aangepaste social media templates",
    "pricing.premium.feature5": "2 revisierondes",
    "pricing.premium.feature6": "Klaar voor lancering in slechts 14 dagen",
    "pricing.premium.feature7": "Gemaakt door professionele ontwerpers, gevestigd in België 🇧🇪",
    "pricing.noPayment": "Geen betaling nu — reserveer gewoon je plek.",

    // Testimonials Section
    "testimonials.title": "Wat Onze Klanten Zeggen",
    "testimonials.subtitle": "Neem niet alleen ons woord ervoor. Hier is wat oprichters zoals jij hebben ervaren.",

    // FAQ Section
    "faq.title": "Veelgestelde Vragen",
    "faq.subtitle": "Krijg antwoorden op de meest voorkomende vragen over onze diensten.",
    "faq.question1.title": "Hoe lang duurt de levering?",
    "faq.question1.answer": "We streven ernaar om je volledige merk en website binnen 14 dagen na de start te lanceren — zolang feedback en content op tijd worden aangeleverd. We delen een duidelijke tijdlijn zodra je plek is bevestigd.",
    "faq.question2.title": "Kan ik wijzigingen aanbrengen nadat ik de concepten heb ontvangen?",
    "faq.question2.answer": "Ja — elk pakket bevat minstens één revisieronde. Je krijgt de kans om feedback te geven voordat we finaliseren.",
    "faq.question3.title": "Hoe werkt het betalingsplan?",
    "faq.question3.answer": "Voor het Premium Pakket kun je de kosten in 3 gelijke maandelijkse betalingen splitsen. Geen extra kosten, geen verrassingen.",
    "faq.question4.title": "Krijg ik alles wat ik nodig heb om mijn merk te lanceren en te gebruiken?",
    "faq.question4.answer": "Ja — je ontvangt hoge resolutie PNG-bestanden die klaar zijn voor gebruik op je website, sociale media en digitale platforms. Voor de meeste oprichters is dat alles wat je ooit nodig zult hebben.",
    "faq.question5.title": "Is dit geschikt voor mij als ik net begin?",
    "faq.question5.answer": "Absoluut. We werken met solo-ondernemers, freelancers en kleine bedrijven in alle fasen — of je nu iets nieuws lanceert of je huidige merk opfrist.",
    "faq.question6.title": "Kan ik later meer pagina's, templates of diensten toevoegen?",
    "faq.question6.answer": "Ja — extra werk zoals extra pagina's of marketingmaterialen kan na je lancering worden toegevoegd. Neem gewoon contact op, we geven je altijd eerst een duidelijke offerte.",
    "faq.question7.title": "Waar zijn jullie gevestigd?",
    "faq.question7.answer": "Just Launch is gevestigd in België, maar we werken met klanten in heel Europa en daarbuiten.",
    "faq.moreQuestions": "Nog vragen? We staan voor je klaar!",
    "faq.contactUs": "Neem Contact Op",

    // Contact Section
    "contact.title": "Klaar om je startup naar het volgende niveau te tillen?",
    "contact.subtitle": "Vul het formulier in en we nemen binnen 24 uur contact met je op om je project te bespreken.",
    "contact.nextSteps": "Wat gebeurt er hierna?",
    "contact.step1": "We plannen een korte oproep om je behoeften beter te begrijpen",
    "contact.step2": "Je ontvangt een gedetailleerde projectbriefing om in te vullen",
    "contact.step3": "We presenteren een projectplanning en beginnen na betaling met werken",
    "contact.questions": "Vragen? Neem direct contact met ons op:",
    "contact.email": "hello@justlaunch.com",
    "contact.form.name": "Je Naam",
    "contact.form.email": "E-mailadres",
    "contact.form.company": "Bedrijfs-/Projectnaam",
    "contact.form.package": "Pakket van Interesse",
    "contact.form.message": "Vertel ons over je project",
    "contact.form.submit": "Begin Nu",
    "contact.form.submitting": "Versturen...",
    "contact.form.privacy": "Door dit formulier in te dienen, ga je akkoord met ons privacybeleid en onze servicevoorwaarden.",
    "contact.success.title": "Bedankt!",
    "contact.success.message": "Je bericht is succesvol verzonden. We nemen binnen 24 uur contact met je op.",

    // Footer
    "footer.description": "We helpen startups en kleine bedrijven hun merk snel te lanceren met professionele ontwerpdiensten tegen betaalbare prijzen.",
    "footer.services": "Diensten",
    "footer.logoDesign": "Logo Ontwerp",
    "footer.webDesign": "Web Ontwerp",
    "footer.brandIdentity": "Merkidentiteit",
    "footer.visualTemplates": "Visuele Templates",
    "footer.quickLinks": "Snelle Links",
    "footer.work": "Portfolio",
    "footer.process": "Proces",
    "footer.pricing": "Prijzen",
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
