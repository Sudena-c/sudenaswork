
import React, { useState, useEffect, useCallback } from 'react';
import { Theme, Category, Project } from './types';
import { PROJECTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AfterHours from './components/AfterHours';
import ContactForm from './components/ContactForm';
import AboutFooter from './components/AboutFooter';
import ProjectDetails from './components/ProjectDetails';
import Lightbox from './components/Lightbox';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('project/')) {
        const projectId = hash.split('/')[1];
        const project = PROJECTS.find(p => p.id === projectId);
        if (project) {
          setActiveProject(project);
          window.scrollTo(0, 0);
        }
      } else {
        setActiveProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const closeProject = useCallback(() => {
    window.location.hash = '';
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-zinc-500 selection:text-white transition-colors duration-500 bg-light dark:bg-dark">
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} isProjectActive={!!activeProject} />
      
      {!activeProject ? (
        <main className="relative">
          <Hero />
          
          <div id="work" className="relative z-10">
            <div className="max-w-7xl mx-auto px-6 pt-32 mb-12">
              <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">Selected<br/>Works</h2>
            </div>
            <div className="px-6">
              <PortfolioGrid 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
              />
            </div>
          </div>
          
          <div className="relative z-20 bg-light dark:bg-dark">
            <AfterHours onImageClick={setLightboxImage} />
            
            <div id="contact" className="py-24 bg-zinc-100 dark:bg-zinc-900/50">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24">
                <ContactForm />
                <AboutFooter />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <ProjectDetails 
          project={activeProject} 
          onClose={closeProject} 
          onImageClick={setLightboxImage}
        />
      )}

      {lightboxImage && (
        <Lightbox 
          image={lightboxImage} 
          onClose={() => setLightboxImage(null)} 
        />
      )}
    </div>
  );
};

export default App;
