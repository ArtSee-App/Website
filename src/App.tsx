import Header from './Header.tsx';
import AppSection from './AppSection.tsx';
import APISection from './APISection.tsx';
import RoadmapSection from './RoadmapSection.tsx';
import UpdatesSection from './UpdatesSection.tsx';
import AboutSection from './AboutContactSection.tsx';
import APIPage from './ApplicationProgrammingInterface.tsx'; // Import the new APIPage component
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header scrollTo={scrollTo} />
            <AppSection />
            <APISection />
            <RoadmapSection />
            <UpdatesSection />
            <AboutSection />
          </>
        } />
        <Route path="/api" element={<APIPage />} />
      </Routes>
    </>
  );
}

export default App;
