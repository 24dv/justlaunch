
import React from 'react';
import { Shield, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useToast } from "../../hooks/use-toast";

const PrivacyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { t, language } = useLanguage();
  const { toast } = useToast();

  React.useEffect(() => {
    // Check if the user has already seen the privacy banner
    const hasSeenPrivacyBanner = localStorage.getItem('hasSeenPrivacyBanner') === 'true';
    
    if (!hasSeenPrivacyBanner) {
      // Show privacy banner after a delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenPrivacyBanner', 'true');
    
    toast({
      title: language === 'en' ? "Privacy Notice" : "Privacymelding",
      description: language === 'en' 
        ? "You can always review our privacy policy in the footer" 
        : "U kunt ons privacybeleid altijd bekijken in de footer",
      duration: 5000,
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-40 max-w-sm bg-white shadow-lg rounded-lg border border-[#0D503C]/20 p-4 animate-slide-right">
      <div className="flex gap-3">
        <div className="bg-[#F9A7A7]/20 p-2 rounded-full h-fit">
          <Shield className="h-5 w-5 text-[#0D503C]" />
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-[#0D503C]">
              {language === 'en' ? 'Privacy Notice' : 'Privacymelding'}
            </h3>
            <button 
              onClick={handleDismiss} 
              className="text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
              aria-label="Close privacy notice"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-[#0D503C]/80 mt-1">
            {language === 'en' 
              ? 'We value your privacy. This site uses cookies to ensure you get the best experience.' 
              : 'Wij waarderen uw privacy. Deze site gebruikt cookies om ervoor te zorgen dat u de beste ervaring krijgt.'}
          </p>
          <div className="mt-3 flex gap-2">
            <Button 
              variant="link" 
              className="text-[#0D503C] p-0 h-auto text-sm underline"
              asChild
            >
              <Link to="/privacy-policy">
                {language === 'en' ? 'Privacy Policy' : 'Privacybeleid'}
              </Link>
            </Button>
            <Button 
              onClick={handleDismiss} 
              size="sm"
              className="ml-auto bg-[#0D503C] hover:bg-[#0A4231] text-white"
            >
              {language === 'en' ? 'Understood' : 'Begrepen'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;
