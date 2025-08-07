import React from 'react';
import { Users, Award, Zap, Target } from 'lucide-react';
import { Container } from '../ui/Container';
import { AnimatedElement } from '../ui/AnimatedElement';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCounter } from '../../hooks/useCounter';

export const About: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const yearsCount = useCounter(6, 2000, 0, isVisible);
  const clientsCount = useCounter(150, 2500, 0, isVisible);
  const projectsCount = useCounter(300, 3000, 0, isVisible);
  const teamCount = useCounter(25, 1500, 0, isVisible);

  const stats = [
    { icon: Award, label: 'Years of Excellence', value: yearsCount, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: clientsCount, suffix: '+' },
    { icon: Target, label: 'Projects Completed', value: projectsCount, suffix: '+' },
    { icon: Zap, label: 'Team Members', value: teamCount, suffix: '+' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We work closely with you to understand your goals and exceed your expectations.'
    },
    {
      icon: Zap,
      title: 'Quality Driven',
      description: 'We maintain the highest standards in everything we do, from code quality to user experience design.'
    },
    {
      icon: Award,
      title: 'Results Focused',
      description: 'Every project is designed to deliver measurable results that drive growth and create lasting impact.'
    }
  ];

  return (
    <section className="relative py-0 px-0">
      
        
          
       <div className="relative px-0">
        <div className="space-y-26">
          {/* Header */}
         
          <div  className="bg-gray-900 py-4">


          <div className="text-center max-w-4xl mx-auto py-6">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-ab font-bold text-white mb-6">
                About <span className="text-transparent font-lobs bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Tara</span>
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className=" md:text-xl text-yellow-50 font-playfair font-thin leading-relaxed">
                Founded in 2020, TaraInteriors has grown from a small team of passionate architects into a full-service agency.
                We specialize in creating exceptional interior experiences. Our team combines design expertise with creative vision
                to deliver ambients that not only meet your needs but exceed your expectations.
              </p>
            </AnimatedElement>
          </div>

          {/* Statistics */}
          <div ref={elementRef}>
            <AnimatedElement animation="slideUp" delay={300}>
              <div className="grid lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-gradient-to-tr from-yellow-200 to-yellow-600 p-4 rounded-2xl">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-ab font-bold text-gray-100 mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-100 font-playfair font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>


        </div>

          {/* Values */}
          {/* <Container className="bg-desert-almond py-4 grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <AnimatedElement
                key={value.title}
                animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                delay={index * 150}
              >
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-desert-maha to-desert-maha p-3 rounded-xl">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-desert-maha font-ab  mb-3">{value.title}</h3>
                    <p className="text-black font-playfair font-thin leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </Container> */}
        </div>
      </div>
    </section>
  );
};