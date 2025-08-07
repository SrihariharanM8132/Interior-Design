import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { teamMembers } from '../data/mockData';

export const Team: React.FC = () => {
  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                The talented individuals behind our success, dedicated to delivering exceptional results for every project.
              </p>
            </AnimatedElement>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedElement
                key={member.id}
                animation="slideUp"
                delay={index * 200}
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                      
                      <div className="flex justify-center sm:justify-start space-x-3">
                        {Object.entries(member.social).map(([platform, url]) => {
                          if (!url) return null;
                          const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                          return (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                              aria-label={`${member.name} on ${platform}`}
                            >
                              <IconComponent className="h-4 w-4" />
                            </a>
                          );
                        })}
                        <a
                          href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@techcorp.com`}
                          className="bg-gray-100 hover:bg-purple-600 text-gray-600 hover:text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </Container>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={400}>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Positions</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium text-gray-900">Senior Frontend Developer</div>
                      <div className="text-sm text-gray-600">Full-time • Remote</div>
                    </div>
                    <div className="text-blue-600 font-medium">Apply</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium text-gray-900">UX/UI Designer</div>
                      <div className="text-sm text-gray-600">Full-time • Hybrid</div>
                    </div>
                    <div className="text-blue-600 font-medium">Apply</div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <div className="font-medium text-gray-900">Project Manager</div>
                      <div className="text-sm text-gray-600">Full-time • On-site</div>
                    </div>
                    <div className="text-blue-600 font-medium">Apply</div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </Container>
      </section>
    </div>
  );
};