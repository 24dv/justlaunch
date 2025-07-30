
import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type ContactFormFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
};

const ContactFormField = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = true,
  error
}: ContactFormFieldProps) => {
  return (
    <div>
      <Label 
        htmlFor={id} 
        className="text-sm font-medium text-[#0D503C] block mb-2"
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full border-2 rounded-md focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9] ${
          error ? 'border-red-500' : 'border-[#0D503C]/30'
        }`}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default ContactFormField;
