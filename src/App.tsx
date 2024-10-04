import Header from './Header.tsx';
import AppSection from './AppSection.tsx';
import APISection from './APISection.tsx';
import RoadmapSection from './RoadmapSection.tsx';
import UpdatesSection from './UpdatesSection.tsx';
import AboutSection from './AboutContactSection.tsx';
import APIPage from './ApplicationProgrammingInterface.tsx'; // Import the new APIPage component
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthProvider } from '../firebase/AuthContext';
import Footer from './Footer.tsx'; // Add this import

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });


  useEffect(() => {
    const themeVariables = themes[theme];
    const root = document.documentElement;
    Object.keys(themeVariables).forEach(key => {
      root.style.setProperty(key, themeVariables[key as keyof Theme]);
    });
  }, [theme]);  // This effect will run on component mount and whenever 'theme' changes

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);  // Save the theme to localStorage
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    const yOffset = -50; // Adjust this value to set the desired offset (e.g., -20px above the element)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  interface Theme {
    '--text': string;
    '--background': string;
    '--primary': string;
    '--secondary': string;
    '--accent': string;
  }

  const themes: Record<string, Theme> = {
    light: {
      '--text': '#0F0B13',
      '--background': '#FAF9FB',
      '--primary': '#9cadce',
      '--secondary': '#d1cfe2',
      '--accent': '#AD79BE',
    },
    dark: {
      '--text': '#F0ECF4',
      '--background': '#050406',
      '--primary': '#314263',
      '--secondary': '#1F1D30',
      '--accent': '#754186',
    }
  };


  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <>
            <Header scrollTo={scrollTo} toggleTheme={toggleTheme} theme={theme} />
            <AppSection />
            <APISection />
            <RoadmapSection />
            <UpdatesSection />
            <AboutSection />
            <Footer />
          </>
        } />
        <Route path="/api" element={
          <>
            <APIPage toggleTheme={toggleTheme} theme={theme} />
            <Footer />
          </>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
