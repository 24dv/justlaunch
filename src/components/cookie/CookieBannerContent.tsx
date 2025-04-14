
import React from 'react';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CookieBannerContentProps {
  title: string;
  description: string;
  privacyPolicyText: string;
  onPrivacyPolicyClick: (e: React.MouseEvent) => void;
}

const CookieBannerContent: React.FC<CookieBannerContentProps> = ({
  title,
  description,
  privacyPolicyText,
  onPrivacyPolicyClick
}) => {
  return (
    <div className="pr-6">
      <h3 className="text-sm font-semibold mb-1 text-[#0D503C] flex items-center gap-2">
        <Shield size={16} />
        {title}
      </h3>
      <p className="text-xs text-[#0D503C]/80 mb-3">{description}</p>
      <div className="text-xs mb-3">
        <button 
          onClick={onPrivacyPolicyClick}
          className="text-[#0D503C] hover:underline"
        >
          {privacyPolicyText}
        </button>
      </div>
    </div>
  );
};

export default CookieBannerContent;
