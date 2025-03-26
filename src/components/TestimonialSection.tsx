
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with the team was a game-changer for our startup. The logo and landing page they created helped us secure our first round of funding. Incredible value for the price!",
    author: "Sarah Johnson",
    position: "Founder, EcoTech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "I needed a brand identity quickly for my coaching business, and they delivered beyond my expectations. The process was smooth, and the designs were exactly what I envisioned.",
    author: "Michael Chen",
    position: "Executive Coach",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "The payment plan option made this service accessible for my bootstrapped startup. We now have a professional brand that stands out in our competitive industry.",
    author: "Emma Rodriguez",
    position: "CEO, FitLife App",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5
  },
];

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what founders like you have experienced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow opacity-0"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
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
