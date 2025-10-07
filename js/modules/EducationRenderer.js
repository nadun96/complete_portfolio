// Education Renderer Module
export class EducationRenderer {
  constructor(container) {
    this.container = container;
  }

  /**
   * Render education entries to the DOM
   * @param {Array} education - Array of education objects
   * @param {string} searchTerm - Optional search term for filtering
   */
  render(education, searchTerm = '') {
    if (!this.container) {
      console.error('Education container element not found');
      return { displayed: 0, total: education.length };
    }

    // Filter education if search term provided
    let filteredEducation = searchTerm
      ? education.filter(edu => {
          const searchFields = [
            edu.searchTerms || '',
            edu.degree || '',
            edu.institution || '',
            edu.description || '',
            ...(edu.achievements || []),
            ...(edu.skills || [])
          ].join(' ').toLowerCase();
          return searchFields.includes(searchTerm.toLowerCase());
        })
      : education;

    // Sort by startYear in descending order (most recent first)
    filteredEducation = filteredEducation.sort((a, b) => b.startYear - a.startYear);

    // Add alternating animation directions
    const educationWithAnimation = filteredEducation.map((edu, index) => ({
      ...edu,
      animationDirection: index % 2 === 0 ? 'fade-right' : 'fade-left'
    }));

    // Render HTML
    this.container.innerHTML = educationWithAnimation.map(edu => `
      <div class="timeline-item" data-aos="${edu.animationDirection}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${edu.degree}</h3>
          <h4 class="timeline-subtitle">${edu.institution}</h4>
          <span class="timeline-date">${edu.period}</span>
          <p class="timeline-description">${edu.description}</p>
          <div class="timeline-achievements">
            ${edu.achievements.map(achievement => 
              `<span class="achievement-tag">${achievement}</span>`
            ).join('')}
          </div>
          ${edu.skills && edu.skills.length > 0 ? `
            <div class="timeline-skills">
              ${edu.skills.map(skill => 
                `<span class="skill-tag">${skill}</span>`
              ).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');

    this.refreshAnimations();

    return {
      displayed: educationWithAnimation.length,
      total: education.length
    };
  }

  refreshAnimations() {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }
}
