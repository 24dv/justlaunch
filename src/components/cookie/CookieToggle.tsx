
import React from 'react';

interface CookieToggleProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

const CookieToggle: React.FC<CookieToggleProps> = ({
  label,
  description,
  icon,
  checked,
  onChange,
  disabled = false
}) => {
  return (
    <div className="border border-[#0D503C]/10 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-medium text-[#0D503C]">{label}</h3>
        </div>
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={`appearance-none w-10 h-5 bg-[#0D503C]/20 rounded-full checked:bg-[#0D503C] transition-colors duration-200 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} relative`}
          />
          <span className={`absolute w-4 h-4 bg-white rounded-full left-0.5 top-0.5 transition-transform duration-200 transform ${checked ? 'translate-x-5' : ''}`}></span>
        </div>
      </div>
      <p className="text-xs text-[#0D503C]/70">{description}</p>
    </div>
  );
};

export default CookieToggle;
