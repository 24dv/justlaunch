
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'launch' | 'premium'>('launch');

  const togglePlan = (plan: 'launch' | 'premium') => {
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the package that best fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-gray-100">
            <button
              onClick={() => togglePlan('launch')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedPlan === 'launch'
                  ? 'bg-white shadow-md text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Launch Package
            </button>
            <button
              onClick={() => togglePlan('premium')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedPlan === 'premium'
                  ? 'bg-white shadow-md text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Premium Package
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Selected Plan */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedPlan === 'launch' ? 'Launch Package' : 'Premium Package'}
                </h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    €{selectedPlan === 'launch' ? '1,500' : '2,500'}
                  </span>
                  <span className="ml-2 text-gray-500">one-time payment</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {selectedPlan === 'launch'
                    ? 'Everything you need to get your brand online quickly.'
                    : 'For businesses looking for a more comprehensive brand package.'}
                </p>
                <a
                  href="#contact"
                  className="block w-full py-3 px-4 rounded-lg bg-blue-600 text-white text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  What's included:
                </h4>
                <ul className="space-y-3">
                  {selectedPlan === 'launch' ? (
                    <>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Professional logo design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Customized 1-page landing site</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>4 custom social media banners</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>2 rounds of revisions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Delivery in 14 days</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Everything in Launch Package</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Multi-page website (up to 5 pages)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Comprehensive brand guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>10 custom social media templates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Business card design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>3 rounds of revisions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>Priority delivery in 21 days</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Right column - Premium Payment Plan (only visible when premium is selected) */}
            {selectedPlan === 'premium' && (
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md overflow-hidden border border-blue-200">
                <div className="p-8">
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    Payment Plan
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Easy Monthly Payments
                  </h3>
                  <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">
                      €833
                    </span>
                    <span className="ml-2 text-gray-500">/month for 3 months</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Get started with a lower upfront cost. Same great service, split into manageable payments.
                  </p>
                  <a
                    href="#contact"
                    className="block w-full py-3 px-4 rounded-lg bg-white border border-blue-300 text-blue-700 text-center font-medium hover:bg-blue-50 transition-colors"
                  >
                    Choose Payment Plan
                  </a>
                </div>
                <div className="px-8 pb-8">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    How it works:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-800 mr-3">
                        1
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Pay €833 to start your project
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-800 mr-3">
                        2
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Second payment of €833 after first draft approval
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-800 mr-3">
                        3
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Final payment of €834 before delivery of completed files
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-sm text-gray-500">
                      Available exclusively for the Premium Package. Total cost remains the same (€2,500).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Have questions about custom needs? Contact us
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
