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
    "hero.subtitle": "Get a professional logo and website for just €1,500 (+ VAT). Transparent cost, no hassle.",
    "hero.cta": "Get Started Today",
    "hero.scroll": "Get started in just a few clicks",

    // Features Section
    "features.title": "Everything You Need to Launch Fast",
    "features.subtitle": "Whether you're a founder with a bold idea, a freelancer leveling up, or launching a side hustle — this is for you. Our Launch Package gets you live fast, stress-free.",
    "features.logoDesign.title": "Professional logo and colors",
    "features.logoDesign.description": "Stand out with a logo and colors that perfectly reflect your brand identity.",
    "features.landingSite.title": "Customised single page website",
    "features.landingSite.description": "A beautiful, responsive website that converts visitors into customers.",
    "features.delivery.title": "Fast delivery within 14 days",
    "features.delivery.description": "Launch quickly while maintaining the highest quality standards.",
    "features.process.title": "Simple process",
    "features.process.description": "A streamlined process powered by expert designers and smart AI tools.",
    "features.pricing.title": "Affordable pricing",
    "features.pricing.description": "Top-tier design for €1,500 + €10/mo for hosting and peace of mind.",
    "features.support.title": "Tried, Tested, Trusted",
    "features.support.description": "Dozens of brands launched fast, built to look and feel ready to grow.",

    // Carousel Section
    "carousel.title": "See What We Can Do for You",
    "carousel.subtitle": "From coaches to creatives to pet brands — we've helped all kinds of businesses look and feel launch-ready.",
    "carousel.before": "Before",
    "carousel.after": "After",
    "carousel.previous": "Previous",
    "carousel.next": "Next",
    "carousel.goToSlide": "Go to slide",

    // Process Section
    "process.title": "How It Works",
    "process.subtitle": "We've streamlined the entire process — so you can launch a polished, professional brand in just days, not months.",
    "process.step1.title": "Reach Out",
    "process.step1.description": "Fill out a short form and book a quick intro call to align and secure your spot.",
    "process.step2.title": "Share Your Vision",
    "process.step2.description": "We'll send you a smart questionnaire to gather your brand direction, design style, and website content.",
    "process.step3.title": "Approve Designs",
    "process.step3.description": "Review and select your logo + brand colors. Once approved, we'll design your website.",
    "process.step4.title": "Launch",
    "process.step4.description": "Your brand and site go live — all within 14 days of kickoff.",
    "process.getStarted": "Get Started",

    // Pricing Section
    "pricing.title": "Transparent Pricing, No Surprises",
    "pricing.subtitle": "Choose the package that suits your needs and budget.",
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
    "pricing.maintenance.title": "Ongoing Maintenance & Security",
    "pricing.maintenance.price": "€10",
    "pricing.maintenance.period": "/ month + VAT",
    "pricing.maintenance.description": "We keep your website online, secure, and running smoothly—so you don't have to worry about a thing.",
    "pricing.maintenance.includes": "What's Included",
    "pricing.maintenance.feature1": "Website hosting",
    "pricing.maintenance.feature2": "Security monitoring",
    "pricing.maintenance.feature3": "Regular software updates",
    "pricing.maintenance.feature4": "Performance optimization",
    "pricing.paymentPlan.title": "Easy Monthly Payments",
    "pricing.paymentPlan.price": "€833",
    "pricing.paymentPlan.description": "Get started with a lower upfront cost. Same great service, split into manageable monthly payments.",
    "pricing.paymentPlan.cta": "Choose Payment Plan",
    "pricing.paymentPlan.tagline": "No payment now — just reserve your spot.",
    "pricing.paymentPlan.howItWorks": "How it works:",
    "pricing.paymentPlan.step1": "Pay €833 to start your project",
    "pricing.paymentPlan.step2": "Second payment of €833 one month after project start",
    "pricing.paymentPlan.step3": "Final payment of €834 one month after second payment",
    "pricing.paymentPlan.note": "Available exclusively for the Premium Package. Total cost remains the same (€2,500).",

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
    "contact.title": "Ready to launch your brand — fast and stress-free?",
    "contact.subtitle": "Fill out the form and we'll get back to you within 24 hours to schedule a quick kickoff call.",
    "contact.nextSteps": "What happens next?",
    "contact.step1": "We'll schedule a short call to align on your project",
    "contact.step2": "You'll receive a questionnaire to share your style, content, and vision",
    "contact.step3": "We'll send you a timeline and get started asap",
    "contact.questions": "Questions? Contact us directly:",
    "contact.email": "hello@justlaunch.com",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company/Project Name",
    "contact.form.package": "Package of Interest",
    "contact.form.message": "Tell us about your project",
    "contact.form.submit": "Book My Spot",
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
    "nav.features": "Kenmerken",
    "nav.work": "Portfolio",
    "nav.process": "Proces",
    "nav.pricing": "Prijzen",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.getStarted": "Begin Nu",

    // Hero Section
    "hero.badge": "Nieuw",
    "hero.badgeText": "Lanceer je merk in dagen, niet maanden",
    "hero.subtitle": "Krijg een professioneel logo en website voor slechts €1.500 (+ BTW). Transparante kosten, geen gedoe.",
    "hero.cta": "Begin Vandaag",
    "hero.scroll": "Begin met slechts een paar klikken",

    // Features Section
    "features.title": "Alles Wat Je Nodig Hebt voor een Snelle Lancering",
    "features.subtitle": "Of je nu een oprichter bent met een gedurfd idee, een freelancer die zich ontwikkelt, of een sidehustle start — dit is voor jou. Ons Lanceerpakket krijgt je snel en stressvrij online.",
    "features.logoDesign.title": "Professioneel logo en kleuren",
    "features.logoDesign.description": "Val op met een logo en kleuren die perfect je merkidentiteit weerspiegelen.",
    "features.landingSite.title": "Aangepaste enkelpagina website",
    "features.landingSite.description": "Een mooie, responsieve website die bezoekers omzet in klanten.",
    "features.delivery.title": "Snelle levering binnen 14 dagen",
    "features.delivery.description": "Lanceer snel met behoud van de hoogste kwaliteitsstandaarden.",
    "features.process.title": "Eenvoudig proces",
    "features.process.description": "Een gestroomlijnde proces, aangedreven door ervaren ontwerpers en slimme AI-tools.",
    "features.pricing.title": "Betaalbare prijzen",
    "features.pricing.description": "Topkwaliteit ontwerp voor €1.500 + €10/maand voor hosting en gemoedsrust.",
    "features.support.title": "Beproefd, Getest, Vertrouwd",
    "features.support.description": "Tientallen merken snel gelanceerd, gebouwd om er klaar uit te zien om te groeien.",

    // Carousel Section
    "carousel.title": "Zie Wat We Voor Jou Kunnen Doen",
    "carousel.subtitle": "Van coaches tot creatievelingen tot dierenmerken — we hebben allerlei soorten bedrijven geholpen om lanceerklaar te zijn.",
    "carousel.before": "Voor",
    "carousel.after": "Na",
    "carousel.previous": "Vorige",
    "carousel.next": "Volgende",
    "carousel.goToSlide": "Ga naar slide",

    // Process Section
    "process.title": "Hoe Het Werkt",
    "process.subtitle": "We hebben het hele proces gestroomlijnd — zodat je in slechts dagen, niet maanden, een gepolijst, professioneel merk kunt lanceren.",
    "process.step1.title": "Neem Contact Op",
    "process.step1.description": "Vul een kort formulier in en plan een snelle introductiegesprek om af te stemmen en je plek te reserveren.",
    "process.step2.title": "Deel Je Visie",
    "process.step2.description": "We sturen je een slimme vragenlijst om je merkrichting, ontwerpstijl en website-inhoud te verzamelen.",
    "process.step3.title": "Keur Ontwerpen Goed",
    "process.step3.description": "Bekijk en kies je logo + merkkleuren. Na goedkeuring ontwerpen we je website.",
    "process.step4.title": "Lancering",
    "process.step4.description": "Je merk en site gaan live — allemaal binnen 14 dagen na de start.",
    "process.getStarted": "Begin Nu",

    // Pricing Section
    "pricing.title": "Transparante Prijzen, Geen Verrassingen",
    "pricing.subtitle": "Kies het pakket dat past bij jouw behoeften en budget.",
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
    "pricing.maintenance.title": "Doorlopend Onderhoud & Beveiliging",
    "pricing.maintenance.price": "€10",
    "pricing.maintenance.period": "/ maand + BTW",
    "pricing.maintenance.description": "We houden je website online, veilig en soepel draaiend—zodat jij je nergens zorgen over hoeft te maken.",
    "pricing.maintenance.includes": "Wat Is Inbegrepen",
    "pricing.maintenance.feature1": "Website hosting",
    "pricing.maintenance.feature2": "Beveiligingsmonitoring",
    "pricing.maintenance.feature3": "Regelmatige software-updates",
    "pricing.maintenance.feature4": "Prestatie-optimalisatie",
    "pricing.paymentPlan.title": "Gemakkelijke Maandelijkse Betalingen",
    "pricing.paymentPlan.price": "€833",
    "pricing.paymentPlan.description": "Begin met lagere aanvangskosten. Dezelfde uitstekende service, verdeeld in beheersbare maandelijkse betalingen.",
    "pricing.paymentPlan.cta": "Kies Betalingsplan",
    "pricing.paymentPlan.tagline": "Geen betaling nu — reserveer gewoon je plek.",
    "pricing.paymentPlan.howItWorks": "Hoe het werkt:",
    "pricing.paymentPlan.step1": "Betaal €833 om je project te starten",
    "pricing.paymentPlan.step2": "Tweede betaling van €833 één maand na projectstart",
    "pricing.paymentPlan.step3": "Laatste betaling van €834 één maand na tweede betaling",
    "pricing.paymentPlan.note": "Exclusief beschikbaar voor het Premium Pakket. Totale kosten blijven hetzelfde (€2.500).",

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
    "contact.title": "Klaar om je merk te lanceren — snel en stressvrij?",
    "contact.subtitle": "Vul het formulier in en we nemen binnen 24 uur contact met je op om een korte kickoff-call te plannen.",
    "contact.nextSteps": "Wat gebeurt er hierna?",
    "contact.step1": "We plannen een kort gesprek om je project af te stemmen",
    "contact.step2": "Je ontvangt een vragenlijst om je stijl, content en visie te delen",
    "contact.step3": "We sturen je een tijdlijn en gaan zo snel mogelijk aan de slag",
    "contact.questions": "Vragen? Neem direct contact met ons op:",
    "contact.email": "hello@justlaunch.com",
    "contact.form.name": "Je Naam",
    "contact.form.email": "E-mailadres",
    "contact.form.company": "Bedrijfs-/Projectnaam",
    "contact.form.package": "Pakket van Interesse",
    "contact.form.message": "Vertel ons over je project",
    "contact.form.submit": "Reserveer Mijn Plek",
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
