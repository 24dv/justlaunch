
import React from 'react';

interface CookieBannerActionsProps {
  acceptText: string;
  declineText: string;
  customizeText: string;
  onAccept: () => void;
  onDecline: () => void;
  onShowPreferences: () => void;
}

const CookieBannerActions: React.FC<CookieBannerActionsProps> = ({
  acceptText,
  declineText,
  customizeText,
  onAccept,
  onDecline,
  onShowPreferences
}) => {
  return (
    <div className="flex flex-col gap-2">
      <button 
        onClick={onAccept}
        className="px-4 py-2 text-xs font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors w-full"
      >
        {acceptText}
      </button>
      <div className="flex gap-2">
        <button 
          onClick={onShowPreferences}
          className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors flex-1"
        >
          {customizeText}
        </button>
        <button 
          onClick={onDecline}
          className="px-4 py-2 text-xs font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors flex-1"
        >
          {declineText}
        </button>
      </div>
    </div>
  );
};

export default CookieBannerActions;
