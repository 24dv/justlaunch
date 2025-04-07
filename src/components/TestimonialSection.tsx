
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    content: {
      en: "Because of the price, I was skeptical at first (I got quoted €12k for the same deliverables at another agency). But the logo and website they created for us were perfect—and helped us secure our first round of funding. Incredible value for the price!",
      nl: "Vanwege de prijs was ik eerst sceptisch (ik kreeg een offerte van €12k voor dezelfde leveringen bij een ander bureau). Maar het logo en de website die ze voor ons hebben gemaakt waren perfect - en hebben ons geholpen bij het verkrijgen van onze eerste financieringsronde. Ongelooflijke waarde voor de prijs!"
    },
    author: "Frank Claessen",
    position: {
      en: "Co-founder Ventura Studio",
      nl: "Medeoprichter Ventura Studio"
    },
    avatar: "/lovable-uploads/82fd6abd-c8b3-4f99-a6f1-cb121e7dd678.png",
    rating: 5
  },
  {
    id: 2,
    content: {
      en: "We needed a website and brand identity quickly for a passion project that took off way faster than expected, and they delivered beyond our expectations. The process was smooth, and the designs were exactly what we hoped for.",
      nl: "We hadden snel een website en merkidentiteit nodig voor een passieproject dat veel sneller van de grond kwam dan verwacht, en ze hebben boven onze verwachtingen geleverd. Het proces verliep soepel en de ontwerpen waren precies wat we hoopten."
    },
    author: "Tania Valle",
    position: {
      en: "Co-founder Drink&Draw",
      nl: "Medeoprichter Drink&Draw"
    },
    avatar: "/lovable-uploads/a825e76d-c1ea-4dc7-a7c8-668141da1341.png",
    rating: 5
  },
  {
    id: 3,
    content: {
      en: "The payment plan option made this service accessible for my business as I was just starting out. Thanks to Just Launch I now have a professional brand that stands out in a competitive industry.",
      nl: "De betalingsplanoptie maakte deze dienst toegankelijk voor mijn bedrijf toen ik net begon. Dankzij Just Launch heb ik nu een professioneel merk dat opvalt in een competitieve branche."
    },
    author: "Herminio Matos",
    position: {
      en: "Founder HGM Electricity",
      nl: "Oprichter HGM Electricity"
    },
    avatar: "/lovable-uploads/789d73d9-1aa0-47b5-a0da-bb9020446b0b.png",
    rating: 5
  },
];

const TestimonialSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="section-padding bg-[#F5F5E9]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-[#0D503C]/80">
            {t('testimonials.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0D503C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-[#F5F5E9] rounded-xl p-6 shadow-md border-2 border-[#0D503C] hover:shadow-lg transition-shadow opacity-0"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#F9A7A7] fill-current" />
                ))}
              </div>
              <blockquote className="text-[#0D503C]/80 mb-6 italic">
                "{testimonial.content[language]}"
              </blockquote>
              <div className="flex items-center">
                <Avatar className="h-14 w-14 rounded-full border-2 border-[#0D503C] mr-4 overflow-hidden">
                  <AvatarImage 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="bg-[#0D503C]/10">
                    {testimonial.author.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-[#0D503C]">{testimonial.author}</p>
                  <p className="text-sm text-[#0D503C]/70">{testimonial.position[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
