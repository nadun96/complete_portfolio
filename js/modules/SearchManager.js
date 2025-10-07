// Search Module - Handles all search functionality
export class SearchManager {
  constructor() {
    this.searchTimeouts = {};
  }

  /**
   * Setup search for a specific section
   * @param {string} sectionId - The section identifier (e.g., 'projects', 'skills')
   * @param {Function} searchCallback - The function to call when search is triggered
   */
  setupSearch(sectionId, searchCallback) {
    const searchInput = document.getElementById(`${sectionId}Search`);
    const clearButton = document.getElementById(`${sectionId}Clear`);
    
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      clearButton?.classList.toggle('visible', !!query);
      
      clearTimeout(this.searchTimeouts[sectionId]);
      this.searchTimeouts[sectionId] = setTimeout(() => searchCallback(query), 300);
    });

    clearButton?.addEventListener('click', () => {
      searchInput.value = '';
      clearButton.classList.remove('visible');
      searchCallback('');
    });
  }

  /**
   * Filter items based on search query
   * @param {Array} items - Array of items to filter
   * @param {string} query - Search query
   * @param {Array} searchFields - Fields to search in each item
   * @returns {Array} Filtered items
   */
  filterItems(items, query, searchFields) {
    if (!query) return items;

    const lowerQuery = query.toLowerCase();
    return items.filter(item => {
      const searchContent = searchFields
        .map(field => {
          const value = this.getNestedProperty(item, field);
          if (Array.isArray(value)) return value.join(' ');
          return value || '';
        })
        .join(' ')
        .toLowerCase();
      
      return searchContent.includes(lowerQuery);
    });
  }

  /**
   * Get nested property from object
   * @param {Object} obj - Object to get property from
   * @param {string} path - Property path (e.g., 'user.name')
   * @returns {*} Property value
   */
  getNestedProperty(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  }

  /**
   * Update search results display
   * @param {string} resultsId - ID of results element
   * @param {number} count - Number of results found
   * @param {number} total - Total number of items
   * @param {string} query - Search query
   * @param {string} itemType - Type of items (e.g., 'projects', 'skills')
   */
  updateSearchResults(resultsId, count, total, query, itemType) {
    const resultsElement = document.getElementById(resultsId);
    if (!resultsElement) return;

    if (query) {
      resultsElement.textContent = `Showing ${count} of ${total} ${itemType}`;
    } else {
      resultsElement.textContent = '';
    }
  }
}
