import React, { useState, useEffect } from 'react';
import { Navbar, ViewType } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ProjectsView } from './components/ProjectsView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ResumeView } from './components/ResumeView';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './data/projectsData';
import { Project } from './types';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'projects' | 'resume'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync hash with view state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects/')) {
        const projectId = hash.replace('#/projects/', '');
        const found = PROJECTS_DATA.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '#/projects') {
        setSelectedProject(null);
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/resume') {
        setSelectedProject(null);
        setCurrentView('resume');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSelectedProject(null);
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: 'home' | 'projects' | 'resume') => {
    setSelectedProject(null);
    setCurrentView(view);
    if (view === 'projects') {
      window.location.hash = '#/projects';
    } else if (view === 'resume') {
      window.location.hash = '#/resume';
    } else {
      window.location.hash = '#/';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `#/projects/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    navigateTo('projects');
  };

  // Determine active view for navbar underline
  const activeNavView: ViewType = selectedProject
    ? 'project-detail'
    : currentView;

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#1D2B44] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentView={activeNavView}
        onNavigate={navigateTo}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {selectedProject ? (
          /* Separate Project Subpage matching Images 3 & 4 */
          <ProjectDetailView
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        ) : currentView === 'projects' ? (
          /* Separate Projects Page matching Images 1 & 2 */
          <ProjectsView
            projects={PROJECTS_DATA}
            onSelectProject={handleSelectProject}
          />
        ) : currentView === 'resume' ? (
          /* Separate Resume Page */
          <ResumeView
            onBack={() => navigateTo('home')}
          />
        ) : (
          /* Home Page: Hero + Projects Carousel */
          <>
            <Hero
              onNavigateToProjects={() => navigateTo('projects')}
              onNavigateToResume={() => navigateTo('resume')}
            />
            <ProjectCarousel
              projects={PROJECTS_DATA}
              onSelectProject={handleSelectProject}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
