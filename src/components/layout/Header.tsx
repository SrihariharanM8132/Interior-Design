import React, { useState, useEffect } from 'react';
import { Menu, X, /*Code2*/ } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Team', href: 'team' },
    { name: 'Contact', href: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-desert-mount backdrop-blur-sm shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            {/* <div className="bg-gradient-to-br from-yellow-900 to-desert-sandal2 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div> */}
            <span className={`text-xl font-serif font-bold transition-colors ${
              isScrolled ? 'text-desert-maha' : 'text-desert-sandal3'
            }`}>
              Tara
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`px-3 py-2 font-playfair font-light text-sm transition-colors hover:text-yellow-800 ${
                  currentPage === item.href
                    ? isScrolled ? 'text-gray-500' : 'text-yellow-600'
                    : isScrolled ? 'text-black' : 'text-white/90'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="bg-desert-maha text-desert-sandal2 hover:bg-white hover:text-desert-maha font-playfair font-semibold rounded-md px-4 py-2 shadow-xl transition duration-300"
              onClick={() => handleNavigation('contact')}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-black hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'max-h-80 opacity-100'
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-2 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors hover:bg-gray-50 hover:text-blue-600 min-h-[44px] ${
                currentPage === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavigation('contact')}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};