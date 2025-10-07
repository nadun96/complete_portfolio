// Main Application Entry Point
import { projectsData } from './data/projectsData.js';
import { skillsData } from './data/skillsData.js';
import { educationData } from './data/educationData.js';
import { experienceData } from './data/experienceData.js';
import { certificationsData } from './data/certificationsData.js';

import { SearchManager } from './modules/SearchManager.js';
import { ProjectsRenderer } from './modules/ProjectsRenderer.js';
import { SkillsRenderer } from './modules/SkillsRenderer.js';
import { EducationRenderer } from './modules/EducationRenderer.js';
import { ExperienceRenderer } from './modules/ExperienceRenderer.js';
import { CertificationsRenderer } from './modules/CertificationsRenderer.js';
import { UIManager } from './modules/UIManager.js';

class PortfolioApp {
  constructor() {
    this.data = {
      projects: projectsData,
      skills: skillsData,
      education: educationData,
      experience: experienceData,
      certifications: certificationsData
    };

    this.searchManager = new SearchManager();
    this.renderers = {};
    this.uiManager = null;
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupApp());
    } else {
      this.setupApp();
    }
  }

  setupApp() {
    this.initializeRenderers();
    this.loadAllContent();
    this.setupSearchFunctionality();
    this.initializeUI();
  }

  initializeUI() {
    // Initialize UI Manager for navigation, themes, etc.
    this.uiManager = new UIManager();
  }

  initializeRenderers() {
    // Initialize all renderers
    this.renderers.projects = new ProjectsRenderer(document.getElementById('projectsGrid'));
    this.renderers.skills = new SkillsRenderer(document.getElementById('skillsTrack'));
    this.renderers.education = new EducationRenderer(document.getElementById('educationTimeline'));
    this.renderers.experience = new ExperienceRenderer(document.getElementById('experienceTimeline'));
    this.renderers.certifications = new CertificationsRenderer(document.getElementById('certificationsGrid'));
  }

  loadAllContent() {
    // Load all content sections
    this.renderers.projects.render(this.data.projects);
    this.renderers.skills.render(this.data.skills);
    this.renderers.education.render(this.data.education);
    this.renderers.experience.render(this.data.experience);
    this.renderers.certifications.render(this.data.certifications);
  }

  setupSearchFunctionality() {
    // Projects search
    this.searchManager.setupSearch('projects', (query) => {
      const visibleCount = this.renderers.projects.filterAndRender(this.data.projects, query);
      this.searchManager.updateSearchResults(
        'projectsResults',
        visibleCount,
        this.data.projects.length,
        query,
        'projects'
      );
    });

    // Skills search
    this.searchManager.setupSearch('skills', (query) => {
      const visibleCount = this.renderers.skills.filterAndRender(this.data.skills, query);
      this.searchManager.updateSearchResults(
        'skillsResults',
        visibleCount,
        this.data.skills.length,
        query,
        'skills'
      );
    });

    // Education search
    this.searchManager.setupSearch('education', (query) => {
      const result = this.renderers.education.render(this.data.education, query);
      this.searchManager.updateSearchResults(
        'educationResults',
        result.displayed,
        result.total,
        query,
        'education entries'
      );
    });

    // Experience search
    this.searchManager.setupSearch('experience', (query) => {
      const result = this.renderers.experience.render(this.data.experience, query);
      this.searchManager.updateSearchResults(
        'experienceResults',
        result.displayed,
        result.total,
        query,
        'experience entries'
      );
    });
  }
}

// Initialize the application
const app = new PortfolioApp();

// Export for debugging purposes
window.portfolioApp = app;
