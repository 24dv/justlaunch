
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Feature {
  name: string;
  launch: boolean;
  premium: boolean;
}

const features: Feature[] = [
  { name: "Custom website", launch: true, premium: true },
  { name: "Pages included", launch: false, premium: true },
  { name: "Professional logo design", launch: true, premium: true },
  { name: "Brand style guide", launch: false, premium: true },
  { name: "Social media templates", launch: false, premium: true },
  { name: "Revision rounds", launch: true, premium: true },
  { name: "Mobile-optimized & fast-loading", launch: true, premium: true },
  { name: "Basic SEO setup", launch: true, premium: true },
  { name: "Cookie banner + Privacy Policy", launch: true, premium: true },
  { name: "GDPR-compliant forms", launch: true, premium: true },
  { name: "Blog setup (via Supabase CMS)", launch: false, premium: true },
  { name: "Hosting included", launch: true, premium: true },
  { name: "14-day delivery", launch: true, premium: true },
  { name: "Built by Belgian pros 🇧🇪", launch: true, premium: true },
];

const FeaturesTable = () => {
  const { language } = useLanguage();

  return (
    <div className="rounded-2xl border-2 border-[#0D503C] bg-[#F5F5E9] overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
      <Table>
        <TableHeader className="bg-[#0D503C]/10">
          <TableRow className="border-b border-[#0D503C]/20">
            <TableHead className="w-[300px] font-semibold text-[#0D503C]">
              {language === 'en' ? 'Features' : 'Functies'}
            </TableHead>
            <TableHead className="text-center font-semibold text-[#0D503C]">
              {language === 'en' ? 'Launch Package' : 'Launch Pakket'}
              <div className="text-sm font-medium text-[#0D503C]/70">€1,500 + VAT</div>
            </TableHead>
            <TableHead className="text-center font-semibold text-[#0D503C]">
              {language === 'en' ? 'Premium Package' : 'Premium Pakket'}
              <div className="text-sm font-medium text-[#0D503C]/70">€2,500 + VAT</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow 
              key={index} 
              className="hover:bg-[#0D503C]/5 border-b border-[#0D503C]/10 last:border-none"
            >
              <TableCell className="font-medium text-[#0D503C]">
                {feature.name === "Pages included" ? (
                  <>
                    {language === 'en' ? '1-page website' : '1-pagina website'}
                    {feature.premium && (
                      <span className="ml-1 text-[#0D503C]/70">
                        {language === 'en' ? '(4 pages for Premium)' : '(4 pagina\'s voor Premium)'}
                      </span>
                    )}
                  </>
                ) : feature.name === "Revision rounds" ? (
                  <>
                    {language === 'en' ? '1 revision round' : '1 revisieronde'}
                    {feature.premium && (
                      <span className="ml-1 text-[#0D503C]/70">
                        {language === 'en' ? '(2 rounds for Premium)' : '(2 rondes voor Premium)'}
                      </span>
                    )}
                  </>
                ) : (
                  feature.name
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.launch && (
                  <div className="mx-auto flex justify-center">
                    <div className="bg-[#0D503C]/10 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#0D503C]" />
                    </div>
                  </div>
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.premium && (
                  <div className="mx-auto flex justify-center">
                    <div className="bg-[#0D503C]/10 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#0D503C]" />
                    </div>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeaturesTable;
