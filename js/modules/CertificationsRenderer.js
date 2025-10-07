// Certifications Renderer Module
export class CertificationsRenderer {
  constructor(container) {
    this.container = container;
  }

  /**
   * Render certifications to the DOM
   * @param {Array} certifications - Array of certification objects
   */
  render(certifications) {
    if (!this.container) return;

    this.container.innerHTML = certifications.map(cert => `
      <div class="certification-card ${cert.status}" data-aos="fade-up">
        <div class="certification-header">
          <div class="certification-logo">${cert.logo}</div>
          <div class="certification-status ${cert.status}">
            ${cert.status === 'verified' ? '✓ Verified' : '⏳ In Progress'}
          </div>
        </div>
        <div class="certification-content">
          <h3 class="certification-title">${cert.title}</h3>
          <h4 class="certification-issuer">${cert.issuer}</h4>
          <p class="certification-description">${cert.description}</p>
          <div class="certification-details">
            <span class="cert-date">📅 Issued: ${cert.issued}</span>
            <span class="cert-expires">⏰ ${cert.status === 'verified' ? 'Expires' : 'Progress'}: ${cert.expires}</span>
          </div>
          <div class="certification-skills">
            ${cert.skills.map(skill => 
              `<span class="skill-tag">${skill}</span>`
            ).join('')}
          </div>
          <div class="certification-links">
            <a href="${cert.certificateUrl}" class="cert-link" target="_blank">View Certificate</a>
            ${cert.verifyUrl ? `<a href="${cert.verifyUrl}" class="cert-link verify" target="_blank">Verify</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');

    this.refreshAnimations();
  }

  refreshAnimations() {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }
}
