
import { useLanguage } from '../../../contexts/LanguageContext';
import { Feature } from '../types';

export const useFeaturesData = () => {
  const { language } = useLanguage();
  
  const features: Feature[] = [
    // 🚀 Delivery
    { category: "delivery", name: "delivery14days", launchSite: true, launch: true, premium: true },
    
    // 🌐 Website
    { category: "website", name: "custom1page", launchSite: true, launch: true, premium: false },
    { category: "website", name: "custom5page", launchSite: false, launch: false, premium: true },
    { category: "website", name: "additionalPages", launchSite: true, launch: true, premium: true },
    { category: "website", name: "mobileOptimization", launchSite: true, launch: true, premium: true },
    { category: "website", name: "calendarIntegration", launchSite: true, launch: true, premium: true },
    { category: "website", name: "contactForm", launchSite: true, launch: true, premium: true },
    { category: "website", name: "domainConnection", launchSite: true, launch: true, premium: true },
    { category: "website", name: "blogSetup", launchSite: false, launch: false, premium: true, note: "+10€/mo" },
    
    // 🎨 Branding
    { category: "branding", name: "logoDesign", launchSite: false, launch: true, premium: true },
    { category: "branding", name: "colorPalette", launchSite: false, launch: true, premium: true },
    { category: "branding", name: "styleGuide", launchSite: false, launch: false, premium: true },
    { category: "branding", name: "socialTemplates", launchSite: false, launch: false, premium: true },
    
    // ⚙️ Functionality
    { category: "functionality", name: "seoSetup", launchSite: true, launch: true, premium: true },
    { category: "functionality", name: "sitemap", launchSite: true, launch: true, premium: true },
    { category: "functionality", name: "aiImages", launchSite: true, launch: true, premium: true },
    
    // 📄 Legal & Compliance
    { category: "legal", name: "cookieBanner", launchSite: true, launch: true, premium: true },
    { category: "legal", name: "gdprCompliant", launchSite: true, launch: true, premium: true },
    
    // 📁 Ownership & Extras
    { category: "ownership", name: "ownership", launchSite: true, launch: true, premium: true },
    { category: "ownership", name: "paymentPlan", launchSite: false, launch: false, premium: true },
    
    // 🔁 Support
    { category: "support", name: "revision1", launchSite: true, launch: true, premium: false },
    { category: "support", name: "revision2", launchSite: false, launch: false, premium: true },
  ];

  // Group features by category
  const categories = features.reduce((acc, feature) => {
    if (!acc.includes(feature.category)) {
      acc.push(feature.category);
    }
    return acc;
  }, [] as string[]);

  // Translate category name
  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, { en: string; nl: string }> = {
      delivery: { en: "🚀 Delivery", nl: "🚀 Oplevering" },
      website: { en: "🌐 Website", nl: "🌐 Website" },
      branding: { en: "🎨 Branding", nl: "🎨 Branding" },
      functionality: { en: "⚙️ Functionality", nl: "⚙️ Functionaliteit" },
      legal: { en: "📄 Legal & Compliance", nl: "📄 Juridisch & Naleving" },
      ownership: { en: "📁 Ownership & Extras", nl: "📁 Eigendom & Extra's" },
      support: { en: "🔁 Support", nl: "🔁 Ondersteuning" },
    };
    
    return language === 'en' ? categoryMap[category].en : categoryMap[category].nl;
  };

  // Translate feature name
  const getFeatureName = (feature: Feature) => {
    const featureMap: Record<string, { en: string; nl: string }> = {
      delivery14days: { en: "Delivery in 14 days", nl: "Oplevering binnen 14 dagen" },
      custom1page: { en: "Custom 1-page website", nl: "Aangepaste 1-pagina website" },
      custom5page: { 
        en: "Custom multi-page website <span class='text-xs font-normal'>(5 pages included)</span>", 
        nl: "Aangepaste multi-pagina website <span class='text-xs font-normal'>(5 pagina's inbegrepen)</span>" 
      },
      additionalPages: { en: "Additional pages on request", nl: "Extra pagina's op aanvraag" },
      mobileOptimization: { en: "Mobile optimization", nl: "Mobiele optimalisatie" },
      calendarIntegration: { en: "Calendar integration", nl: "Agenda-integratie" },
      contactForm: { 
        en: "Contact form integration <span class='text-xs font-normal'>(via Formspree)</span>", 
        nl: "Contactformulier integratie <span class='text-xs font-normal'>(via Formspree)</span>" 
      },
      domainConnection: { en: "Domain connection support", nl: "Ondersteuning voor domeinverbinding" },
      blogSetup: { 
        en: "Optional blog setup <span class='text-xs font-normal'>(via Supabase) +10€/mo</span>", 
        nl: "Optionele blog setup <span class='text-xs font-normal'>(via Supabase) +10€/mo</span>" 
      },
      logoDesign: { en: "Professional logo design", nl: "Professioneel logo-ontwerp" },
      colorPalette: { en: "Tailored brand color palette", nl: "Gepersonaliseerd kleurenpalet" },
      styleGuide: { 
        en: "Brand style guide <span class='text-xs font-normal'>(logo, fonts, colors)</span>", 
        nl: "Merkstijlgids <span class='text-xs font-normal'>(logo, lettertypen, kleuren)</span>" 
      },
      socialTemplates: { en: "Social media templates", nl: "Social media templates" },
      seoSetup: { 
        en: "Basic SEO setup <span class='text-xs font-normal'>(meta titles, descriptions, headers)</span>", 
        nl: "Basis SEO setup <span class='text-xs font-normal'>(meta titels, beschrijvingen, headers)</span>" 
      },
      sitemap: { en: "Sitemap & indexing ready", nl: "Sitemap & indexering gereed" },
      aiImages: { 
        en: "Custom AI-generated images <span class='text-xs font-normal'>(if needed)</span>", 
        nl: "Aangepaste AI-gegenereerde afbeeldingen <span class='text-xs font-normal'>(indien nodig)</span>" 
      },
      cookieBanner: { en: "Cookie banner + Privacy/Terms", nl: "Cookie banner + Privacy/Voorwaarden" },
      gdprCompliant: { en: "GDPR compliant", nl: "AVG-conform" },
      ownership: { en: "Ownership of all files & assets", nl: "Eigendom van alle bestanden & assets" },
      paymentPlan: { en: "Payment plan", nl: "Betalingsplan" },
      revision1: { en: "1 revision round", nl: "1 revisieronde" },
      revision2: { en: "2 revision rounds", nl: "2 revisierondes" },
    };
    
    let name = language === 'en' ? featureMap[feature.name].en : featureMap[feature.name].nl;
    return name;
  };

  return {
    features,
    categories,
    getCategoryName,
    getFeatureName,
    language
  };
};
