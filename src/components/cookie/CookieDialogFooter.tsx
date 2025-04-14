
import React from 'react';

interface CookieDialogFooterProps {
  acceptAllText: string;
  savePreferencesText: string;
  onAcceptAll: () => void;
  onSave: () => void;
}

const CookieDialogFooter: React.FC<CookieDialogFooterProps> = ({
  acceptAllText,
  savePreferencesText,
  onAcceptAll,
  onSave
}) => {
  return (
    <div className="flex gap-3 pt-3 border-t border-[#0D503C]/10">
      <button
        onClick={onAcceptAll}
        className="flex-1 px-4 py-2 text-sm font-medium rounded-full bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0A4231] transition-colors"
      >
        {acceptAllText}
      </button>
      <button
        onClick={onSave}
        className="flex-1 px-4 py-2 text-sm font-medium rounded-full border border-[#0D503C] text-[#0D503C] hover:bg-[#0D503C]/5 transition-colors"
      >
        {savePreferencesText}
      </button>
    </div>
  );
};

export default CookieDialogFooter;
