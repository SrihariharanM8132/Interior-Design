import React from 'react';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Timeline } from '../components/home/Timeline';
import { Achievements } from '../components/home/Achievements';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <About />
      <Timeline />
      <Achievements />
    </div>
  );
};