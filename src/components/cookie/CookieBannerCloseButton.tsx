
import React from 'react';
import { X } from 'lucide-react';

interface CookieBannerCloseButtonProps {
  onClose: () => void;
  ariaLabel?: string;
}

const CookieBannerCloseButton: React.FC<CookieBannerCloseButtonProps> = ({
  onClose,
  ariaLabel = "Close cookie banner"
}) => {
  return (
    <button 
      onClick={onClose} 
      className="absolute right-2 top-2 text-[#0D503C]/60 hover:text-[#0D503C]"
      aria-label={ariaLabel}
    >
      <X size={16} />
    </button>
  );
};

export default CookieBannerCloseButton;
