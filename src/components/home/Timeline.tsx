import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { AnimatedElement } from '../ui/AnimatedElement';
import { timelineEvents } from '../../data/mockData';

export const Timeline: React.FC = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  return (
    <section className="py-20 bg-yellow-950">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-lg md:text-xl text-gray-600">
                From humble beginnings to industry recognition, discover the milestones that shaped our company.
              </p>
            </AnimatedElement>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full hidden lg:block"></div>
            <div className="absolute left-8 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full lg:hidden"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <AnimatedElement
                  key={event.id}
                  animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                  delay={index * 150}
                >
                  <div
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-row`}
                    onMouseEnter={() => setHoveredEvent(event.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} pl-16 lg:pl-0`}>
                      <div className="bg-gray-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                            {event.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        {hoveredEvent === event.id && event.details && (
                          <div className="text-sm text-gray-500 border-t pt-4 transition-all duration-300">
                            {event.details}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-1/2">
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        hoveredEvent === event.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                          : 'bg-white border-4 border-blue-600'
                      } shadow-lg`}></div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};