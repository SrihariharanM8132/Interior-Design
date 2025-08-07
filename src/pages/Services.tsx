import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { services } from '../data/mockData';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Comprehensive digital solutions tailored to transform your business and drive growth in the digital age.
              </p>
            </AnimatedElement>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Code;
              
              return (
                <AnimatedElement
                  key={service.id}
                  animation="slideUp"
                  delay={index * 150}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl w-fit mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-blue-600">{service.price}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onNavigate('contact')}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss your project and discover how we can help transform your business.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('contact')}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('portfolio')}
                >
                  View Our Work
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </Container>
      </section>
    </div>
  );
};