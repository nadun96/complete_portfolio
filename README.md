# Portfolio Project Structure

## Directory Organization

```
complete_portfolio/
├── index.html                 # Main HTML file
├── assets/                    # Static assets
│   └── images/               # Image files
├── css/                       # Stylesheets
│   └── styles.css            # Main stylesheet (to be moved)
├── js/                        # JavaScript files
│   ├── app.js                # Main application entry point
│   ├── data/                 # Data files
│   │   ├── projectsData.js
│   │   ├── skillsData.js
│   │   ├── educationData.js
│   │   ├── experienceData.js
│   │   └── certificationsData.js
│   ├── modules/              # Feature modules
│   │   ├── SearchManager.js
│   │   ├── ProjectsRenderer.js
│   │   ├── SkillsRenderer.js
│   │   ├── EducationRenderer.js
│   │   ├── ExperienceRenderer.js
│   │   ├── CertificationsRenderer.js
│   │   └── UIManager.js     # UI interactions (nav, themes, etc.)
│   └── utils/                # Utility functions (future use)
└── README.md                  # This file
```

## Architecture

### Separation of Concerns

1. **Data Layer** (`js/data/`)
   - Pure data files
   - Each section has its own data file
   - Easy to update content without touching logic

2. **Presentation Layer** (`js/modules/`)
   - Renderer classes for each section
   - Handles DOM manipulation
   - Responsible for displaying data

3. **Business Logic** (`js/modules/`)
   - SearchManager handles all search functionality
   - Reusable across different sections
   - Centralized search logic

4. **Application Layer** (`js/app.js`)
   - Orchestrates all components
   - Initializes renderers and search
   - Main entry point

### Module Responsibilities

#### SearchManager
- Sets up search inputs and clear buttons
- Debounces search inputs (300ms delay)
- Filters items based on query
- Updates search results display

#### Renderer Classes
Each renderer (Projects, Skills, Education, Experience, Certifications):
- Renders data to DOM
- Handles section-specific filtering
- Manages AOS animations
- Returns metrics (displayed/total items)

#### UIManager
- Mobile navigation toggle
- Theme switching (vintage, blue, black & white)
- Square/rounded edges toggle
- Smooth scrolling
- Form handling
- Active navigation highlighting

#### App.js
- Initializes all components
- Loads data into renderers
- Connects search with renderers
- Central coordination point

## Usage

### To Add New Projects

Edit `js/data/projectsData.js`:
```javascript
export const projectsData = [
  {
    id: 4,
    title: "New Project",
    description: "Project description",
    // ... more fields
  }
];
```

### To Add New Skills

Edit `js/data/skillsData.js`:
```javascript
export const skillsData = [
  {
    id: 17,
    title: "New Skill",
    // ... more fields
  }
];
```

### To Add New Education

Edit `js/data/educationData.js`:
```javascript
export const educationData = [
  {
    id: 5,
    degree: "New Degree",
    institution: "University Name",
    startYear: 2023,
    // ... more fields
  }
];
```

## Migration Steps

1. **Move CSS files:**
   ```bash
   mv styles.css css/styles.css
   ```

2. **Move image files:**
   ```bash
   mv profileimage.jpg assets/images/
   ```

3. **Update index.html:**
   - Change CSS link to `css/styles.css`
   - Change script to `<script type="module" src="js/app.js"></script>`
   - Remove old script references

4. **Remove old files:**
   - `data_manager.js`
   - `dataLoader.js`
   - `ui_handler.js`
   - `uiInteractions.js`
   - `script.js`

## Benefits of New Structure

1. **Maintainability**: Each file has a single responsibility
2. **Scalability**: Easy to add new sections or features
3. **Testability**: Modules can be tested independently
4. **Reusability**: SearchManager can be used for any section
5. **Clarity**: Clear separation between data, logic, and presentation
6. **Performance**: Only load what's needed with ES6 modules

## Future Enhancements

- Add utility functions in `js/utils/`
- Implement lazy loading for images
- Add unit tests
- Create a build process (Webpack/Vite)
- Add TypeScript for type safety
