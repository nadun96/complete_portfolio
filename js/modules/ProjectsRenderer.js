// Projects Renderer Module
export class ProjectsRenderer {
  constructor(container) {
    this.container = container;
  }

  /**
   * Render projects to the DOM
   * @param {Array} projects - Array of project objects
   */
  render(projects) {
    if (!this.container) return;

    this.container.innerHTML = projects.map(project => `
      <div class="project-card" data-search-terms="${project.searchTerms}" data-aos="fade-up">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-overlay">
            <a href="${project.liveDemo}" class="btn btn-primary" target="_blank">Live Demo</a>
            <a href="${project.github}" class="btn btn-secondary" target="_blank">GitHub</a>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => 
              `<span class="tech-tag">${tech}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `).join('');

    this.refreshAnimations();
  }

  /**
   * Filter and render projects based on search query
   * @param {Array} projects - All projects
   * @param {string} query - Search query
   */
  filterAndRender(projects, query) {
    const cards = this.container.querySelectorAll('.project-card');
    let visibleCount = 0;

    if (!query) {
      cards.forEach(card => {
        card.classList.remove('hidden');
        visibleCount++;
      });
      return visibleCount;
    }

    const lowerQuery = query.toLowerCase();
    cards.forEach(card => {
      const searchTerms = card.dataset.searchTerms || '';
      const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.project-description')?.textContent.toLowerCase() || '';
      const allText = `${searchTerms} ${title} ${description}`;

      if (allText.includes(lowerQuery)) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    return visibleCount;
  }

  refreshAnimations() {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }
}
