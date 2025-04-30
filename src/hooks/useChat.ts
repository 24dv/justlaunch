
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ChatMessage {
  content: string;
  isUser: boolean;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { language } = useLanguage();

  // Initialize with welcome message
  useEffect(() => {
    const initialMessage = language === 'en' 
      ? "👋 Hi there! I'm here to help with any questions about our packages. What would you like to know?"
      : "👋 Hallo! Ik ben hier om te helpen met vragen over onze pakketten. Wat wil je graag weten?";

    setMessages([{ content: initialMessage, isUser: false }]);
  }, [language]);

  // Function to simulate sending a message
  const sendMessage = (messageContent: string) => {
    // Add user message
    const userMessage: ChatMessage = { content: messageContent, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    
    // Start typing indicator
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(messageContent, language);
      setMessages(prev => [...prev, { content: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  return { messages, sendMessage, isTyping };
};

// Function to generate responses based on user input
function generateResponse(message: string, language: string): string {
  const lowerMsg = message.toLowerCase();

  // English responses
  if (language === 'en') {
    // Package questions
    if (lowerMsg.includes('launch package') || (lowerMsg.includes('launch') && lowerMsg.includes('price'))) {
      return "The Launch Package costs €1,500 + VAT and includes a custom 1-page website, professional logo design, brand colors, 1 revision round, SEO setup, GDPR compliance, and hosting. It's perfect for quickly establishing your online presence!";
    }
    
    if (lowerMsg.includes('premium package') || (lowerMsg.includes('premium') && lowerMsg.includes('price'))) {
      return "The Premium Package is €2,500 + VAT and includes a 4-page website, logo design, brand style guide, social media templates, 2 revision rounds, SEO setup, GDPR compliance, optional blog setup, and hosting. It's ideal for businesses needing a more comprehensive online presence.";
    }
    
    // Difference between packages
    if ((lowerMsg.includes('difference') || lowerMsg.includes('compare')) && 
        (lowerMsg.includes('package') || lowerMsg.includes('packages'))) {
      return "The main differences are: Premium offers a 4-page website (vs. 1-page for Launch), includes a brand style guide and social media templates, offers 2 revision rounds (vs. 1), and has an optional blog setup. Premium is best for established businesses needing a more comprehensive solution.";
    }

    // Delivery time
    if (lowerMsg.includes('how long') || lowerMsg.includes('delivery') || lowerMsg.includes('timeline')) {
      return "Both packages are delivered within 14 days from the project kickoff, assuming we receive your feedback and content on time. We'll provide you with a detailed timeline once your spot is confirmed.";
    }

    // Payment plans
    if (lowerMsg.includes('payment plan') || lowerMsg.includes('installment')) {
      return "Yes! For the Premium Package, you can split the cost into 3 monthly payments of €833. There are no extra fees associated with this option.";
    }
    
    // Revision questions
    if (lowerMsg.includes('revision') || lowerMsg.includes('change') || lowerMsg.includes('edit')) {
      return "The Launch Package includes 1 round of revisions, while the Premium Package includes 2 rounds. If you need additional revisions, they can be added for €150 per round.";
    }
    
    // Add-ons
    if (lowerMsg.includes('add-on') || lowerMsg.includes('extra') || lowerMsg.includes('additional')) {
      return "We offer several add-ons: Mini-Shop Integration (€750), Extra Revisions (€150 per round), Extra Pages (€150/page), and Ongoing Maintenance (€10-25/month). Let me know if you want more details about any specific add-on!";
    }

    // Contact
    if (lowerMsg.includes('contact') || lowerMsg.includes('talk to') || lowerMsg.includes('speak with') || 
        lowerMsg.includes('human') || lowerMsg.includes('person') || lowerMsg.includes('schedule')) {
      return "To speak with our team directly, please fill out the contact form in the Contact section of our website. We'll get back to you within 24 hours to schedule a conversation!";
    }

    // Default response
    return "Thanks for your question! I might not have all the answers yet. For more specific information, please use the contact form at the bottom of the page, and our team will get back to you within 24 hours.";
  }
  
  // Dutch responses
  else {
    // Package questions
    if (lowerMsg.includes('launch pakket') || (lowerMsg.includes('launch') && lowerMsg.includes('prijs'))) {
      return "Het Launch Pakket kost €1.500 + BTW en omvat een aangepaste 1-pagina website, professioneel logo-ontwerp, merkkleuren, 1 revisieronde, SEO-setup, GDPR-compliance en hosting. Het is perfect om snel een online aanwezigheid op te bouwen!";
    }
    
    if (lowerMsg.includes('premium pakket') || (lowerMsg.includes('premium') && lowerMsg.includes('prijs'))) {
      return "Het Premium Pakket kost €2.500 + BTW en omvat een 4-pagina website, logo-ontwerp, merk stijlgids, social media templates, 2 revisierondes, SEO-setup, GDPR-compliance, optionele blog-setup en hosting. Het is ideaal voor bedrijven die een meer uitgebreide online aanwezigheid nodig hebben.";
    }
    
    // Difference between packages
    if ((lowerMsg.includes('verschil') || lowerMsg.includes('vergelijk')) && 
        (lowerMsg.includes('pakket') || lowerMsg.includes('pakketten'))) {
      return "De belangrijkste verschillen zijn: Premium biedt een 4-pagina website (vs. 1 pagina voor Launch), bevat een merk stijlgids en social media templates, biedt 2 revisierondes (vs. 1) en heeft een optionele blog-setup. Premium is het beste voor gevestigde bedrijven die een uitgebreidere oplossing nodig hebben.";
    }

    // Delivery time
    if (lowerMsg.includes('hoe lang') || lowerMsg.includes('levering') || lowerMsg.includes('tijdlijn')) {
      return "Beide pakketten worden binnen 14 dagen na de projectstart opgeleverd, ervan uitgaande dat we je feedback en content op tijd ontvangen. We zullen je een gedetailleerde tijdlijn geven zodra je plek is bevestigd.";
    }

    // Payment plans
    if (lowerMsg.includes('betalingsplan') || lowerMsg.includes('termijn')) {
      return "Ja! Voor het Premium Pakket kun je de kosten spreiden in 3 maandelijkse betalingen van €833. Er zijn geen extra kosten aan deze optie verbonden.";
    }
    
    // Revision questions
    if (lowerMsg.includes('revisie') || lowerMsg.includes('wijzig') || lowerMsg.includes('aanpassing')) {
      return "Het Launch Pakket bevat 1 revisieronde, terwijl het Premium Pakket 2 revisierondes bevat. Als je extra revisies nodig hebt, kunnen deze worden toegevoegd voor €150 per ronde.";
    }
    
    // Add-ons
    if (lowerMsg.includes('add-on') || lowerMsg.includes('extra') || lowerMsg.includes('aanvullend')) {
      return "We bieden verschillende add-ons: Mini-Shop Integratie (€750), Extra Revisies (€150 per ronde), Extra Pagina's (€150/pagina) en Doorlopend Onderhoud (€10-25/maand). Laat me weten als je meer details wilt over een specifieke add-on!";
    }

    // Contact
    if (lowerMsg.includes('contact') || lowerMsg.includes('praten met') || lowerMsg.includes('spreken met') || 
        lowerMsg.includes('mens') || lowerMsg.includes('persoon') || lowerMsg.includes('plannen')) {
      return "Om direct met ons team te spreken, vul het contactformulier in de Contact-sectie van onze website in. We nemen binnen 24 uur contact met je op om een gesprek in te plannen!";
    }

    // Default response
    return "Bedankt voor je vraag! Ik heb mogelijk niet alle antwoorden. Voor specifiekere informatie kun je het contactformulier onderaan de pagina gebruiken, en ons team zal binnen 24 uur contact met je opnemen.";
  }
}
