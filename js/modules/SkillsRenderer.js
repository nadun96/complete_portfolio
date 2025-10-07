// Skills Renderer Module
export class SkillsRenderer {
  constructor(container) {
    this.container = container;
  }

  /**
   * Render skills to the DOM
   * @param {Array} skills - Array of skill objects
   */
  render(skills) {
    if (!this.container) return;

    this.container.innerHTML = skills.map(skill => `
      <div class="skill-card" data-search-terms="${skill.searchTerms}" data-aos="zoom-in">
        <div class="skill-icon">${skill.icon}</div>
        <h3 class="skill-title">${skill.title}</h3>
        <p class="skill-description">${skill.description}</p>
        <span class="skill-level">${skill.level}</span>
      </div>
    `).join('');

    this.refreshAnimations();
  }

  /**
   * Filter and render skills based on search query
   * @param {Array} skills - All skills
   * @param {string} query - Search query
   */
  filterAndRender(skills, query) {
    const cards = this.container.querySelectorAll('.skill-card');
    let visibleCount = 0;

    if (!query) {
      cards.forEach(card => {
        card.classList.remove('hidden');
        visibleCount++;
      });
      this.container.classList.remove('paused');
      return visibleCount;
    }

    const lowerQuery = query.toLowerCase();
    this.container.classList.add('paused');

    cards.forEach(card => {
      const searchTerms = card.dataset.searchTerms || '';
      const title = card.querySelector('.skill-title')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.skill-description')?.textContent.toLowerCase() || '';
      const level = card.querySelector('.skill-level')?.textContent.toLowerCase() || '';
      const allText = `${searchTerms} ${title} ${description} ${level}`;

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
