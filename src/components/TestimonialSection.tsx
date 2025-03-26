
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    content: {
      en: "Working with the team was a game-changer for our startup. The logo and landing page they created helped us secure our first round of funding. Incredible value for the price!",
      nl: "De samenwerking met het team was een game-changer voor onze startup. Het logo en de landingspagina die ze hebben gemaakt, hebben ons geholpen bij het verkrijgen van onze eerste financieringsronde. Ongelooflijke waarde voor de prijs!"
    },
    author: "Sarah Johnson",
    position: {
      en: "Founder, EcoTech Solutions",
      nl: "Oprichter, EcoTech Solutions"
    },
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    content: {
      en: "I needed a brand identity quickly for my coaching business, and they delivered beyond my expectations. The process was smooth, and the designs were exactly what I envisioned.",
      nl: "Ik had snel een merkidentiteit nodig voor mijn coachingbedrijf, en ze hebben boven mijn verwachtingen geleverd. Het proces verliep soepel en de ontwerpen waren precies wat ik voor ogen had."
    },
    author: "Michael Chen",
    position: {
      en: "Executive Coach",
      nl: "Executive Coach"
    },
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5
  },
  {
    id: 3,
    content: {
      en: "The payment plan option made this service accessible for my bootstrapped startup. We now have a professional brand that stands out in our competitive industry.",
      nl: "De betalingsplanoptie maakte deze dienst toegankelijk voor mijn bootstrapped startup. We hebben nu een professioneel merk dat opvalt in onze competitieve branche."
    },
    author: "Emma Rodriguez",
    position: {
      en: "CEO, FitLife App",
      nl: "CEO, FitLife App"
    },
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
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
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full border-2 border-[#0D503C] mr-3"
                />
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
