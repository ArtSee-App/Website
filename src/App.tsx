import React from 'react';
import Header from './Header.tsx';
import AppSection from './AppSection.tsx';
import APISection from './APISection.tsx';
import RoadmapSection from './RoadmapSection.tsx';
import UpdatesSection from './UpdatesSection.tsx';
import AboutSection from './AboutContactSection.tsx';
import './App.css';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollTo={scrollTo} />
      <AppSection />
      <APISection />
      <RoadmapSection />
      <UpdatesSection />
      <AboutSection />
    </>
  );
}

export default App;
