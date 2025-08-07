import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Update document title based on current page
    const titles = {
      home: 'TechCorp - Digital Solutions & Web Development',
      services: 'Our Services - TechCorp',
      portfolio: 'Portfolio - TechCorp',
      team: 'Our Team - TechCorp',
      contact: 'Contact Us - TechCorp'
    };
    
    document.title = titles[currentPage as keyof typeof titles] || 'TechCorp';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'services':
        return <Services onNavigate={handleNavigation} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigation} />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;