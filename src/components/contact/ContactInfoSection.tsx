
import React from 'react';

const ContactInfoSection = () => {
  return (
    <>
      <div className="bg-[#0D503C]/5 p-6 rounded-xl mb-8 border-2 border-dashed border-[#0D503C]/30">
        <h3 className="text-xl font-semibold text-[#0D503C] mb-4 font-serif">
          What happens next?
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">1</span>
            </div>
            <p className="text-[#0D503C]/80">
              We'll schedule a short call to align on your project
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">2</span>
            </div>
            <p className="text-[#0D503C]/80">
              You'll receive a questionnaire to share your style, content, and vision
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20">
              <span className="text-sm font-medium">3</span>
            </div>
            <p className="text-[#0D503C]/80">
              We'll send you a timeline and get started as soon as payment is confirmed
            </p>
          </li>
        </ul>
      </div>
      
      <div className="text-[#0D503C]/80">
        <p className="font-medium text-[#0D503C]">Questions? Contact us directly:</p>
        <p className="mt-2 text-[#0D503C]">
          <a href="mailto:hello@justlaunch.be" className="text-[#0D503C] font-medium hover:underline">
            hello@justlaunch.be
          </a>
        </p>
      </div>
    </>
  );
};

export default ContactInfoSection;
