
import React from 'react';
import { ClipboardList, Lightbulb, FileCode, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-white" />,
    title: 'Sign Up',
    description: 'Fill out the form and get started with your project immediately.',
    color: 'bg-blue-600'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    title: 'Design Consultation',
    description: 'Share your ideas and vision with our designers through a detailed brief.',
    color: 'bg-yellow-500'
  },
  {
    icon: <FileCode className="h-10 w-10 text-white" />,
    title: 'Receive Drafts',
    description: 'We\'ll create a logo and landing page tailored specifically for your business.',
    color: 'bg-purple-600'
  },
  {
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: 'Launch',
    description: 'Finalize and go live with your new brand in just 14 days!',
    color: 'bg-green-600'
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our streamlined process takes you from concept to launch with minimal effort on your part.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-24 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div 
                  className={`relative z-10 opacity-0 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right animate-slide-in-left' 
                      : 'md:pl-12 md:col-start-2 animate-slide-in-right'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
                
                <div 
                  className={`flex items-center justify-center mt-8 md:mt-0 opacity-0 animate-scale-up ${
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                  style={{ animationDelay: `${index * 150 + 100}ms` }}
                >
                  <div className={`relative flex items-center justify-center w-20 h-20 rounded-full ${step.color} shadow-lg`}>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-gray-900">
                      {index + 1}
                    </div>
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
