
import React from 'react';
import { CheckCircle, Clock, Palette, Globe, DollarSign, Zap } from 'lucide-react';

const features = [
  {
    icon: <Palette className="h-8 w-8 text-brand-500" />,
    title: 'Professional logo design',
    description: 'Get a custom logo that perfectly reflects your brand identity and values.',
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-500" />,
    title: 'Customized 1-page landing site',
    description: 'A beautiful, responsive website that showcases your brand and converts visitors.',
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-500" />,
    title: 'Fast delivery within 14 days',
    description: 'Launch quickly while maintaining the highest quality standards.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-brand-500" />,
    title: 'Simple process',
    description: 'No complex tools or AI generators—just professional human designers.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-brand-500" />,
    title: 'Affordable pricing',
    description: 'Premium quality at a fair price point of just €1,500, with no hidden costs.',
  },
  {
    icon: <Zap className="h-8 w-8 text-brand-500" />,
    title: 'Support included',
    description: 'Get post-launch assistance to ensure everything works perfectly.',
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Launch Fast
          </h2>
          <p className="text-xl text-gray-600">
            Our Launch Package is designed for startup founders who need a professional brand without the long wait. Perfect for new businesses ready to make an impact!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0"
              style={{
                animation: 'scaleUp 0.5s ease-out forwards',
                animationDelay: `${index * 100 + 100}ms`
              }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
