
import { useLanguage } from '../contexts/LanguageContext';
import { FaqItemType } from '../components/faq/FaqList';

export const useFaqItems = (): FaqItemType[] => {
  const { language } = useLanguage();
  
  const faqItemsEN = [
    {
      question: "How long does it take to deliver?",
      answer: "We aim to launch your full brand and website within 14 days of kickoff — as long as feedback and content are provided on time. We'll share a clear timeline once your spot is confirmed."
    },
    {
      question: "Can I make changes after I receive the drafts?",
      answer: "Yes — each package includes at least one round of revisions. You'll have a chance to give feedback before we finalize."
    },
    {
      question: "How does the payment plan work?",
      answer: "For the Premium Package, you can split the cost into 3 equal monthly payments. No extra fees, no surprises."
    },
    {
      question: "Do I get everything I need to launch and use my brand?",
      answer: "Yes — you'll receive high-resolution PNG files that are ready to use across your website, social media, and digital platforms. For most founders, that's all you'll ever need."
    },
    {
      question: "Is this right for me if I'm just getting started?",
      answer: "Absolutely. We work with solo founders, freelancers, and small businesses at all stages — whether you're launching something new or refreshing your current brand."
    },
    {
      question: "Can I add more pages, templates, or services later?",
      answer: "Yes — additional work like extra pages or marketing assets can be added after your launch. Just reach out, we'll always give you a clear quote first."
    },
    {
      question: "Where are you based?",
      answer: "Just Launch is based in Belgium, but we work with clients all over Europe and beyond."
    }
  ];
  
  const faqItemsNL = [
    {
      question: "Hoe lang duurt de levering?",
      answer: "We streven ernaar om je volledige merk en website binnen 14 dagen na de start te lanceren — zolang feedback en content op tijd worden aangeleverd. We delen een duidelijke tijdlijn zodra je plek is bevestigd."
    },
    {
      question: "Kan ik wijzigingen aanbrengen nadat ik de concepten heb ontvangen?",
      answer: "Ja — elk pakket bevat minstens één revisieronde. Je krijgt de kans om feedback te geven voordat we afronden."
    },
    {
      question: "Hoe werkt het betalingsplan?",
      answer: "Voor het Premium Pakket kun je de kosten in 3 gelijke maandelijkse termijnen verdelen. Geen extra kosten, geen verrassingen."
    },
    {
      question: "Krijg ik alles wat ik nodig heb om mijn merk te lanceren en te gebruiken?",
      answer: "Ja — je ontvangt PNG-bestanden in hoge resolutie die klaar zijn voor gebruik op je website, sociale media en digitale platforms. Voor de meeste ondernemers is dat alles wat je ooit nodig zult hebben."
    },
    {
      question: "Is dit geschikt voor mij als ik net begin?",
      answer: "Absoluut. We werken met zelfstandige ondernemers, freelancers en kleine bedrijven in alle stadia — of je nu iets nieuws lanceert of je huidige merk vernieuwt."
    },
    {
      question: "Kan ik later meer pagina's, templates of diensten toevoegen?",
      answer: "Ja — extra werk zoals extra pagina's of marketingmaterialen kunnen na je lancering worden toegevoegd. Neem gewoon contact op, we geven je altijd eerst een duidelijke offerte."
    },
    {
      question: "Waar zijn jullie gevestigd?",
      answer: "Just Launch is gevestigd in België, maar we werken met klanten in heel Europa en daarbuiten."
    }
  ];
  
  return language === 'nl' ? faqItemsNL : faqItemsEN;
};
