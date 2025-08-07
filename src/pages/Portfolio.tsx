import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { projects } from '../data/mockData';

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Portfolio</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Explore our collection of successful projects that showcase our expertise and commitment to excellence.
              </p>
            </AnimatedElement>
          </div>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <Container>
          <AnimatedElement animation="slideUp">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Filter className="h-5 w-5 text-gray-600" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedElement
                key={project.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 p-2 rounded-full">
                        <ExternalLink className="h-4 w-4 text-gray-700" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </Container>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="text-sm text-blue-600 font-medium mb-2">{selectedProject.category}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.link && (
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      icon={ExternalLink}
                      onClick={() => window.open(selectedProject.link, '_blank')}
                    >
                      View Live Project
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Let's work together to create something amazing that drives your business forward.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={400}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                Get Started Today
              </Button>
            </AnimatedElement>
          </div>
        </Container>
      </section>
    </div>
  );
};