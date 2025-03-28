
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
    "faq.question1.answer": "Our standard delivery time is 14 days from the moment we receive your project brief and initial payment. The Premium Package may take up to 21 days due to the additional deliverables included.",
    "faq.question2.title": "Can I make changes after I receive the drafts?",
    "faq.question2.answer": "Absolutely! Our Launch Package includes two rounds of revisions, while the Premium Package includes three rounds. Additional revision rounds can be arranged for an extra fee if needed.",
    "faq.question3.title": "What if I need additional services later?",
    "faq.question3.answer": "We offer a range of services that can be added to your package at any time. This includes additional pages, social media templates, print materials, and more. Just reach out to us with your specific needs.",
    "faq.question4.title": "How does the payment plan work?",
    "faq.question4.answer": "Our payment plan splits the total cost into three equal monthly payments. You'll pay the first installment to start the project, the second after approving the initial drafts, and the final payment before receiving the completed files.",
    "faq.question5.title": "Do you provide the source files of my logo and website?",
    "faq.question5.answer": "Yes, upon completion, you'll receive all source files for your logo (AI, EPS, PDF) and website. You'll have full ownership of all the assets we create for you.",
    "faq.question6.title": "What information do you need to get started?",
    "faq.question6.answer": "To get started, we need information about your business, target audience, preferences, competitors, and any design inspiration. We'll provide a comprehensive questionnaire after you sign up.",
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
    "faq.question1.answer": "Onze standaard levertijd is 14 dagen vanaf het moment dat we je projectbriefing en eerste betaling ontvangen. Het Premium Pakket kan tot 21 dagen duren vanwege de extra inbegrepen leveringen.",
    "faq.question2.title": "Kan ik wijzigingen aanbrengen nadat ik de concepten heb ontvangen?",
    "faq.question2.answer": "Absoluut! Ons Lanceerpakket bevat twee revisierondes, terwijl het Premium Pakket drie rondes bevat. Extra revisierondes kunnen tegen een meerprijs worden geregeld indien nodig.",
    "faq.question3.title": "Wat als ik later extra diensten nodig heb?",
    "faq.question3.answer": "We bieden een reeks diensten die op elk moment aan je pakket kunnen worden toegevoegd. Dit omvat extra pagina's, sjablonen voor sociale media, drukwerk en meer. Neem gewoon contact met ons op met je specifieke behoeften.",
    "faq.question4.title": "Hoe werkt het betalingsplan?",
    "faq.question4.answer": "Ons betalingsplan splitst de totale kosten in drie gelijke maandelijkse betalingen. Je betaalt de eerste termijn om het project te starten, de tweede na goedkeuring van de eerste concepten, en de laatste betaling voordat je de voltooide bestanden ontvangt.",
    "faq.question5.title": "Levereren jullie de bronbestanden van mijn logo en website?",
    "faq.question5.answer": "Ja, na voltooiing ontvang je alle bronbestanden voor je logo (AI, EPS, PDF) en website. Je hebt volledig eigendom van alle assets die we voor je maken.",
    "faq.question6.title": "Welke informatie heb je nodig om te beginnen?",
    "faq.question6.answer": "Om te beginnen hebben we informatie nodig over je bedrijf, doelgroep, voorkeuren, concurrenten en eventuele ontwerpinspiratie. We sturen je een uitgebreide vragenlijst nadat je je hebt aangemeld.",
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
