import React, { useState, useEffect, useCallback } from 'react';
import { Theme, Category, Project } from './types';
import { PROJECTS, ARCHIVED_PROJECTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutMe from './components/AboutMe';
import ContactSection from './components/ContactSection';
import ProjectDetails from './components/ProjectDetails';
import Lightbox from './components/Lightbox';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Handle Hash Routing for seamless project story pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('project/')) {
        const projectId = hash.split('/')[1];
        const allProjects = [...PROJECTS, ...ARCHIVED_PROJECTS];
        const project = allProjects.find(p => p.id === projectId);
        if (project) {
          setActiveProject(project);
        }
      } else if (
        hash.startsWith('step-') || 
        hash.startsWith('group-') || 
        hash.startsWith('chapter-') ||
        hash.startsWith('youtube')
      ) {
        // Internal project section anchor: preserve active project!
        return;
      } else if (!hash || hash === 'home' || hash === 'work' || hash === 'about' || hash === 'contact') {
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
    setActiveProject(null);
  }, []);

  const handleOpenProject = useCallback((project: Project) => {
    window.location.hash = `project/${project.id}`;
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-stone-300 dark:selection:bg-stone-700 transition-colors duration-500 bg-light dark:bg-dark text-zinc-900 dark:text-zinc-100">
      <CustomCursor />
      
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        isProjectActive={!!activeProject} 
      />
      
      {!activeProject ? (
        <main className="relative">
          {/* SECTION 01 — HOMEPAGE */}
          <Hero />
          
          {/* SECTION 02 — WORK / PROJECTS (POSTCARD STACK) */}
          <PortfolioGrid 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
            onOpenProject={handleOpenProject}
          />
          
          {/* SECTION 03 — ABOUT ME (BEYOND DESIGN & IN MOTION) */}
          <AboutMe onImageClick={setLightboxImage} />
          
          {/* SECTION 04 — CONTACT ME */}
          <ContactSection />
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
