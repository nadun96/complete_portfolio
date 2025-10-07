// Experience Renderer Module
export class ExperienceRenderer {
  constructor(container) {
    this.container = container;
  }

  /**
   * Render experience entries to the DOM
   * @param {Array} experience - Array of experience objects
   * @param {string} searchTerm - Optional search term for filtering
   */
  render(experience, searchTerm = '') {
    if (!this.container) {
      console.error('Experience container element not found');
      return { displayed: 0, total: experience.length };
    }

    // Filter experience if search term provided
    let filteredExperience = searchTerm
      ? experience.filter(exp => {
          const searchFields = [
            exp.searchTerms || '',
            exp.position || '',
            exp.company || '',
            exp.description || '',
            ...(exp.achievements || []),
            ...(exp.skills || [])
          ].join(' ').toLowerCase();
          return searchFields.includes(searchTerm.toLowerCase());
        })
      : experience;

    // Sort by startYear in descending order (most recent first)
    filteredExperience = filteredExperience.sort((a, b) => b.startYear - a.startYear);

    // Add alternating animation directions
    const experienceWithAnimation = filteredExperience.map((exp, index) => ({
      ...exp,
      animationDirection: index % 2 === 0 ? 'fade-right' : 'fade-left'
    }));

    // Render HTML
    this.container.innerHTML = experienceWithAnimation.map(exp => `
      <div class="timeline-item ${exp.current ? 'current' : ''}" data-aos="${exp.animationDirection}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${exp.position}</h3>
          <h4 class="timeline-subtitle">${exp.company} · ${exp.type}</h4>
          <span class="timeline-date">${exp.period} · ${exp.duration}</span>
          ${exp.location ? `<span class="timeline-location">📍 ${exp.location}</span>` : ''}
          <p class="timeline-description">${exp.description}</p>
          <div class="timeline-achievements">
            ${exp.achievements.map(achievement => 
              `<span class="achievement-tag">${achievement}</span>`
            ).join('')}
          </div>
          ${exp.skills && exp.skills.length > 0 ? `
            <div class="timeline-skills">
              ${exp.skills.map(skill => 
                `<span class="skill-tag">${skill}</span>`
              ).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');

    this.refreshAnimations();

    return {
      displayed: experienceWithAnimation.length,
      total: experience.length
    };
  }

  refreshAnimations() {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }
}
