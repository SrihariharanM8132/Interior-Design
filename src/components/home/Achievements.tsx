import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Container } from '../ui/Container';
import { AnimatedElement } from '../ui/AnimatedElement';
import { achievements } from '../../data/mockData';

export const Achievements: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Achievements</span>
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-lg md:text-xl text-gray-600">
                Numbers that showcase our commitment to excellence and the trust our clients place in us.
              </p>
            </AnimatedElement>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              // Get the icon component dynamically
              const IconComponent = (LucideIcons as any)[achievement.icon] || LucideIcons.Award;
              const isFlipped = flippedCard === achievement.id;

              return (
                <AnimatedElement
                  key={achievement.id}
                  animation="scaleIn"
                  delay={index * 100}
                >
                  <div
                    className="relative h-48 perspective-1000 cursor-pointer"
                    onClick={() => handleCardFlip(achievement.id)}
                    onMouseEnter={() => setFlippedCard(achievement.id)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    <div
                      className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center shadow-lg">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <div className="text-3xl font-bold mb-2">{achievement.metric}</div>
                        <div className="text-lg font-semibold">{achievement.title}</div>
                      </div>

                      {/* Back of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-gray-200">
                        <IconComponent className="h-8 w-8 mb-4 text-blue-600" />
                        <div className="text-gray-600 text-sm leading-relaxed">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};