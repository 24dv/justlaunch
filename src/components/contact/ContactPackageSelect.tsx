
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ContactPackageSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
};

const ContactPackageSelect = ({ value, onValueChange }: ContactPackageSelectProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <Label 
        htmlFor="package" 
        className="text-sm font-medium text-[#0D503C] block mb-2"
      >
        {t('contact.form.package')}
      </Label>
      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger 
          className="w-full border-2 border-[#0D503C]/30 rounded-md bg-[#F5F5E9] focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C]"
        >
          <SelectValue placeholder={language === 'en' ? "Select a package" : "Selecteer een pakket"} />
        </SelectTrigger>
        <SelectContent>
          {language === 'en' ? (
            <>
              <SelectItem value="launch">Launch Package (€1,500)</SelectItem>
              <SelectItem value="launchsite">Launch Site (€995)</SelectItem>
              <SelectItem value="premium">Premium Package (€2,500)</SelectItem>
              <SelectItem value="premium-plan">Premium Package - Payment Plan (€833/month)</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </>
          ) : (
            <>
              <SelectItem value="launch">Launch Pakket (€1.500)</SelectItem>
              <SelectItem value="launchsite">Launch Site (€995)</SelectItem>
              <SelectItem value="premium">Premium Pakket (€2.500)</SelectItem>
              <SelectItem value="premium-plan">Premium Pakket - Betalingsplan (€833/maand)</SelectItem>
              <SelectItem value="not-sure">Nog niet zeker</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ContactPackageSelect;
