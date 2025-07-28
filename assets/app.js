// Autodesk Chrome Extensions Hub - Main JavaScript

// ===== EXTENSION DATA =====
const extensionsData = [
  {
    id: 'acc-navigator',
    title: 'ACC Navigator',
    description: 'Enhanced navigation and workflow optimization for Autodesk Construction Cloud with advanced project management features.',
    status: 'published',
    products: ['acc'],
    icon: 'fas fa-compass',
    version: '2.1.0',
    lastUpdated: '2024-12-20',
    author: 'Gus Quade',
    installUrl: '#',
    githubUrl: '#',
    tags: ['acc', 'navigation', 'workflow', 'construction'],
    features: [
      'Enhanced project navigation',
      'Quick access to frequently used tools',
      'Streamlined document management',
      'Custom dashboard views'
    ]
  },
  {
    id: 'fusion-manage-admin-utilities',
    title: 'Fusion Manage Advanced Admin Utilities',
    description: 'Comprehensive administrative tools for Fusion Manage PLM with enhanced user management, system configuration, and maintenance features.',
    status: 'published',
    products: ['fusion-manage'],
    icon: 'fas fa-tools',
    version: '3.2.1',
    lastUpdated: '2024-12-18',
    author: 'Gus Quade',
    installUrl: '#',
    githubUrl: '#',
    tags: ['fusion-manage', 'admin', 'utilities', 'management'],
    features: [
      'Advanced user management',
      'System configuration tools',
      'Bulk operations support',
      'Enhanced reporting capabilities'
    ]
  },
  {
    id: 'fusion-manage-fishbone-diagram',
    title: 'Fusion Manage Fishbone Diagram Tool',
    description: 'Create and manage fishbone (Ishikawa) diagrams directly within Fusion Manage for root cause analysis and quality management.',
    status: 'published',
    products: ['fusion-manage'],
    icon: 'fas fa-project-diagram',
    version: '1.5.2',
    lastUpdated: '2024-12-22',
    author: 'Gus Quade',
    installUrl: '#',
    githubUrl: 'https://github.com/user/fishbone-diagram-tool',
    tags: ['fusion-manage', 'quality', 'analysis', 'diagrams'],
    features: [
      'Interactive diagram creation',
      'Template library with industry standards',
      'Collaborative editing and sharing',
      'Integration with PLM data'
    ]
  },
  {
    id: 'fusion-manage-advanced-clipboard',
    title: 'Fusion Manage Advanced Clipboard',
    description: 'Enhanced clipboard functionality for Fusion Manage with advanced copy/paste operations and data transformation capabilities.',
    status: 'published',
    products: ['fusion-manage'],
    icon: 'fas fa-clipboard',
    version: '1.8.0',
    lastUpdated: '2024-12-15',
    author: 'Gus Quade',
    installUrl: '#',
    githubUrl: '#',
    tags: ['fusion-manage', 'clipboard', 'productivity', 'data'],
    features: [
      'Multi-format data copying',
      'Advanced paste transformations',
      'Clipboard history management',
      'Cross-workspace operations'
    ]
  },
  {
    id: 'fusion-manage-kanban-viewer',
    title: 'Fusion Manage Kanban Viewer',
    description: 'Kanban-style visualization for Fusion Manage workflows with drag-and-drop task management and real-time updates.',
    status: 'in-development',
    products: ['fusion-manage'],
    icon: 'fas fa-columns',
    version: '0.9.1',
    lastUpdated: '2024-12-23',
    author: 'Gus Quade',
    githubUrl: '#',
    tags: ['fusion-manage', 'kanban', 'workflow', 'visualization'],
    features: [
      'Drag-and-drop task management',
      'Real-time workflow visualization',
      'Custom board configurations',
      'Team collaboration features'
    ]
  },
  {
    id: 'upchain-bom-push',
    title: 'Upchain BOM Push to Fusion Manage',
    description: 'Seamless integration between Upchain and Fusion Manage for automated BOM synchronization and data exchange.',
    status: 'concept',
    products: ['upchain', 'fusion-manage'],
    icon: 'fas fa-exchange-alt',
    version: '0.1.0',
    lastUpdated: '2024-12-19',
    author: 'Gus Quade',
    tags: ['upchain', 'fusion-manage', 'bom', 'integration'],
    features: [
      'Automated BOM synchronization',
      'Data mapping and transformation',
      'Conflict resolution workflows',
      'Audit trail and versioning'
    ]
  },
  {
    id: 'tandem-ops',
    title: 'Tandem Ops',
    description: 'Operations management extension for Autodesk Tandem with enhanced monitoring, analytics, and facility management tools.',
    status: 'in-development',
    products: ['tandem'],
    icon: 'fas fa-building',
    version: '0.7.3',
    lastUpdated: '2024-12-21',
    author: 'Gus Quade',
    githubUrl: '#',
    tags: ['tandem', 'operations', 'facilities', 'monitoring'],
    features: [
      'Real-time facility monitoring',
      'Advanced analytics dashboard',
      'Maintenance scheduling tools',
      'IoT sensor integration'
    ]
  },
  {
    id: 'fusion-manage-digital-thread',
    title: 'Fusion Manage Digital Thread Viewer',
    description: 'Comprehensive digital thread visualization for Fusion Manage showing complete product lifecycle relationships and dependencies.',
    status: 'in-development',
    products: ['fusion-manage'],
    icon: 'fas fa-sitemap',
    version: '0.6.0',
    lastUpdated: '2024-12-20',
    author: 'Gus Quade',
    githubUrl: '#',
    tags: ['fusion-manage', 'digital-thread', 'lifecycle', 'visualization'],
    features: [
      'Complete lifecycle visualization',
      'Interactive relationship mapping',
      'Dependency tracking',
      'Change impact analysis'
    ]
  },
  {
    id: 'fusion-operations-link-opener',
    title: 'Fusion Operations Link Opener',
    description: 'Smart link management for Fusion Operations with enhanced URL handling and quick access to manufacturing resources.',
    status: 'published',
    products: ['fusion-operations'],
    icon: 'fas fa-link',
    version: '1.3.2',
    lastUpdated: '2024-12-17',
    author: 'Gus Quade',
    installUrl: '#',
    githubUrl: '#',
    tags: ['fusion-operations', 'links', 'navigation', 'manufacturing'],
    features: [
      'Smart URL recognition',
      'Quick access toolbar',
      'Link categorization',
      'Manufacturing resource shortcuts'
    ]
  },
  {
    id: 'fusion-operations-favorites',
    title: 'Fusion Operations Favorites',
    description: 'Enhanced favorites and bookmarking system for Fusion Operations with advanced organization and quick access features.',
    status: 'published',
    products: ['fusion-operations'],
    icon: 'fas fa-star',
    version: '2.0.1',
    lastUpdated: '2024-12-16',
    author: 'Gus Quade',
    installUrl: '#',
    githubUrl: '#',
    tags: ['fusion-operations', 'favorites', 'bookmarks', 'organization'],
    features: [
      'Advanced bookmark organization',
      'Quick access panels',
      'Tag-based categorization',
      'Export and sync capabilities'
    ]
  },
  {
    id: 'vault-panel-fusion-industry-cloud',
    title: 'Vault Panel for Fusion Industry Cloud',
    description: 'Integrated Vault access panel for Fusion Industry Cloud with seamless document management and version control.',
    status: 'in-development',
    products: ['vault'],
    icon: 'fas fa-vault',
    version: '0.8.5',
    lastUpdated: '2024-12-24',
    author: 'Gus Quade',
    githubUrl: '#',
    tags: ['vault', 'fusion-industry-cloud', 'documents', 'version-control'],
    features: [
      'Seamless Vault integration',
      'Document management panel',
      'Version control workflows',
      'Cloud synchronization'
    ]
  }
];

// ===== RECENT UPDATES DATA =====
const updatesData = [
  {
    date: 'December 24, 2024',
    extension: 'Vault Panel for Fusion Industry Cloud',
    description: 'Enhanced cloud synchronization and improved document management panel'
  },
  {
    date: 'December 23, 2024',
    extension: 'Fusion Manage Kanban Viewer',
    description: 'Added team collaboration features and custom board configurations'
  },
  {
    date: 'December 22, 2024',
    extension: 'Fusion Manage Fishbone Diagram Tool',
    description: 'Published version 1.5.2 with enhanced template library and PLM integration'
  },
  {
    date: 'December 21, 2024',
    extension: 'Tandem Ops',
    description: 'Improved analytics dashboard and added IoT sensor integration capabilities'
  },
  {
    date: 'December 20, 2024',
    extension: 'ACC Navigator & Digital Thread Viewer',
    description: 'Updated ACC Navigator to v2.1.0 and enhanced Digital Thread visualization'
  },
  {
    date: 'December 19, 2024',
    extension: 'Upchain BOM Push to Fusion Manage',
    description: 'Initial concept development for automated BOM synchronization'
  },
  {
    date: 'December 18, 2024',
    extension: 'Fusion Manage Advanced Admin Utilities',
    description: 'Released version 3.2.1 with enhanced reporting and bulk operations'
  },
  {
    date: 'December 17, 2024',
    extension: 'Fusion Operations Link Opener',
    description: 'Updated to version 1.3.2 with improved URL recognition and shortcuts'
  },
  {
    date: 'December 16, 2024',
    extension: 'Fusion Operations Favorites',
    description: 'Released version 2.0.1 with tag-based categorization and sync features'
  },
  {
    date: 'December 15, 2024',
    extension: 'Fusion Manage Advanced Clipboard',
    description: 'Updated clipboard functionality with cross-workspace operations support'
  }
];

// ===== THEME MANAGEMENT =====
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.bindEvents();
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeButtons();
  }

  updateThemeButtons() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.theme === this.currentTheme) {
        btn.classList.add('active');
      }
    });
  }

  bindEvents() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setTheme(btn.dataset.theme);
      });
    });
  }
}

// ===== EXTENSION MANAGER =====
class ExtensionManager {
  constructor() {
    this.extensions = extensionsData;
    this.currentFilters = {
      status: 'all',
      product: 'all'
    };
    this.init();
  }

  init() {
    this.renderExtensions();
    this.renderUpdates();
    this.bindFilterEvents();
  }

  renderExtensions() {
    const container = document.getElementById('extensions-grid');
    if (!container) return;

    const filteredExtensions = this.getFilteredExtensions();
    
    container.innerHTML = filteredExtensions.map(ext => this.createExtensionCard(ext)).join('');
  }

  getFilteredExtensions() {
    return this.extensions.filter(ext => {
      const statusMatch = this.currentFilters.status === 'all' || ext.status === this.currentFilters.status;
      const productMatch = this.currentFilters.product === 'all' || ext.products.includes(this.currentFilters.product);
      return statusMatch && productMatch;
    });
  }

  createExtensionCard(extension) {
    const statusClass = extension.status.replace('-', '');
    const statusText = extension.status.replace('-', ' ').toUpperCase();
    
    return `
      <div class="extension-card" data-status="${extension.status}" data-products="${extension.products.join(',')}">
        <div class="extension-header">
          <div class="extension-icon">
            <i class="${extension.icon}"></i>
          </div>
          <div class="extension-status ${statusClass}">
            <i class="${this.getStatusIcon(extension.status)}"></i>
            ${statusText}
          </div>
        </div>
        
        <h3 class="extension-title">${extension.title}</h3>
        <p class="extension-description">${extension.description}</p>
        
        <div class="extension-meta">
          <span><i class="fas fa-tag"></i> Version: ${extension.version}</span>
          <span><i class="fas fa-calendar"></i> Updated: ${extension.lastUpdated}</span>
          <span><i class="fas fa-user"></i> ${extension.author}</span>
        </div>
        
        <div class="extension-tags">
          ${extension.tags.map(tag => `<span class="extension-tag">${tag}</span>`).join('')}
        </div>
        
        ${extension.features ? `
          <div class="extension-features">
            <h4>Key Features:</h4>
            <ul>
              ${extension.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        <div class="extension-actions">
          ${extension.installUrl ? `
            <a href="${extension.installUrl}" target="_blank" class="btn btn-primary">
              <i class="fas fa-download"></i> Install
            </a>
          ` : ''}
          ${extension.githubUrl ? `
            <a href="${extension.githubUrl}" target="_blank" class="btn btn-secondary">
              <i class="fab fa-github"></i> View Source
            </a>
          ` : ''}
          <button class="btn btn-secondary" onclick="extensionManager.showDetails('${extension.id}')">
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      </div>
    `;
  }

  getStatusIcon(status) {
    switch (status) {
      case 'published': return 'fas fa-check-circle';
      case 'in-development': return 'fas fa-tools';
      case 'concept': return 'fas fa-lightbulb';
      default: return 'fas fa-circle';
    }
  }

  renderUpdates() {
    const tbody = document.getElementById('updates-tbody');
    if (!tbody) return;

    tbody.innerHTML = updatesData.map(update => `
      <tr>
        <td>${update.date}</td>
        <td>${update.extension}</td>
        <td>${update.description}</td>
      </tr>
    `).join('');
  }

  bindFilterEvents() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filterType = btn.closest('.filter-group').querySelector('label').textContent.includes('Status') ? 'status' : 'product';
        const filterValue = btn.dataset.filter;
        
        // Update filter state
        this.currentFilters[filterType] = filterValue;
        
        // Update button states
        btn.closest('.filter-buttons').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Re-render extensions
        this.renderExtensions();
      });
    });
  }

  showDetails(extensionId) {
    const extension = this.extensions.find(ext => ext.id === extensionId);
    if (!extension) return;

    // Create modal or detailed view
    alert(`Extension Details:\n\nName: ${extension.title}\nStatus: ${extension.status}\nVersion: ${extension.version}\nDescription: ${extension.description}\n\nFeatures:\n${extension.features ? extension.features.join('\n- ') : 'No features listed'}`);
  }
}

// ===== SEARCH FUNCTIONALITY =====
class SearchManager {
  constructor() {
    this.init();
  }

  init() {
    this.createSearchBar();
    this.bindSearchEvents();
  }

  createSearchBar() {
    const filtersSection = document.querySelector('.filters');
    if (!filtersSection) return;

    const searchHTML = `
      <div class="search-container" style="margin-bottom: 1.5rem;">
        <div class="search-input-wrapper">
          <i class="fas fa-search"></i>
          <input type="text" id="extension-search" placeholder="Search extensions..." class="search-input">
          <button id="clear-search" class="clear-search" style="display: none;">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `;

    filtersSection.insertAdjacentHTML('afterbegin', searchHTML);
    this.addSearchStyles();
  }

  addSearchStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .search-input-wrapper {
        position: relative;
        max-width: 400px;
      }
      
      .search-input-wrapper i {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-secondary);
      }
      
      .search-input {
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.5rem;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        font-size: 0.875rem;
        transition: all 0.2s ease;
      }
      
      .search-input:focus {
        outline: none;
        border-color: var(--autodesk-blue);
        box-shadow: 0 0 0 3px rgba(6, 150, 215, 0.1);
      }
      
      .clear-search {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: all 0.2s ease;
      }
      
      .clear-search:hover {
        background-color: var(--bg-primary);
        color: var(--text-primary);
      }
    `;
    document.head.appendChild(style);
  }

  bindSearchEvents() {
    const searchInput = document.getElementById('extension-search');
    const clearButton = document.getElementById('clear-search');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query) {
        clearButton.style.display = 'block';
        this.filterExtensions(query);
      } else {
        clearButton.style.display = 'none';
        this.showAllExtensions();
      }
    });

    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      clearButton.style.display = 'none';
      this.showAllExtensions();
    });
  }

  filterExtensions(query) {
    const cards = document.querySelectorAll('.extension-card');
    
    cards.forEach(card => {
      const title = card.querySelector('.extension-title').textContent.toLowerCase();
      const description = card.querySelector('.extension-description').textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll('.extension-tag')).map(tag => tag.textContent.toLowerCase());
      
      const matches = title.includes(query) || 
                     description.includes(query) || 
                     tags.some(tag => tag.includes(query));
      
      card.style.display = matches ? 'block' : 'none';
    });
  }

  showAllExtensions() {
    document.querySelectorAll('.extension-card').forEach(card => {
      card.style.display = 'block';
    });
  }
}

// ===== SMOOTH SCROLLING =====
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all managers
  window.themeManager = new ThemeManager();
  window.extensionManager = new ExtensionManager();
  window.searchManager = new SearchManager();
  
  // Add smooth scrolling
  addSmoothScrolling();
  
  // Add loading animation
  document.body.classList.add('loaded');
  
  console.log('🚀 Autodesk Chrome Extensions Hub initialized successfully!');
});

// ===== GLOBAL FUNCTIONS =====
// Make extensionManager available globally for onclick handlers
window.extensionManager = null; 