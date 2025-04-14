
import React from 'react';
import { Shield, X, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CookieDialogHeaderProps {
  title: string;
  description: string;
  privacyPolicyText: string;
  onClose: () => void;
}

const CookieDialogHeader: React.FC<CookieDialogHeaderProps> = ({
  title,
  description,
  privacyPolicyText,
  onClose
}) => {
  const navigate = useNavigate();
  
  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/privacy-policy');
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-[#F5F5E9] border-b border-[#0D503C]/10 p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#0D503C] flex items-center gap-2">
          <Shield size={20} />
          {title}
        </h2>
        <button 
          onClick={onClose}
          className="text-[#0D503C]/60 hover:text-[#0D503C] transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-[#0D503C]/80 mb-4">{description}</p>
        <div className="mb-3 text-xs">
          <button
            onClick={handlePrivacyPolicyClick}
            className="text-[#0D503C] hover:underline flex items-center gap-1"
          >
            <Info size={14} />
            {privacyPolicyText}
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieDialogHeader;
