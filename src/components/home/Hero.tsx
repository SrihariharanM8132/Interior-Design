import React from 'react';
import { Play } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedElement } from '../ui/AnimatedElement';
import { useTypewriter } from '../../hooks/useTypewriter';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const typewriterText = useTypewriter([
    'Home Interiors',
    'Ambients',
    'Profesional Workspace',
    'User Experiences'
  ]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hiddenapy-20 h-96 bg-[url('/h1.jpg')]  bg-cover bg-center shadow-2xl">
      {/* Background */}
      <div className=" ">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      <Container className="relative z-10 grid-cols-2">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          <div>
            <AnimatedElement animation="fadeIn" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Crafting Amazing{' '}
              <span className="font-lobs text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-200">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </AnimatedElement>
          </div>

          <div>
            <AnimatedElement animation="slideUp" delay={400}>
            <p className="font-playfair font-normal md:text-lg text-yellow-50 max-w-3xl mx-auto leading-relaxed">
              We transform your ideas into powerful digital experiences that drive growth, 
              engage users, and deliver exceptional results for your business.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slideUp" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                variant="primary"
                size="lg"
                className="font-playfair font-semibold min-w-[200px] text-yellow-900 bg-desert-sandal2  hover:text-desert-sandal2 hover:bg-gray-950 "
                onClick={() => onNavigate('contact')}
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Play}
                className="font-playfair font-black min-w-[200px] border-white/30 text-white hover:text-desert-sandal3 hover:bg-gray-950"
                onClick={() => onNavigate('portfolio')}
              >
                View Our Work
              </Button>
            </div>
          </AnimatedElement>
          </div>

          {/* Scroll Indicator */}
          {/* <AnimatedElement animation="fadeIn" delay={1000}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2 text-white/70">
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </div>
            </div>
          </AnimatedElement> */}
        </div>
      </Container>
    </section>
  );
};