// Autodesk Chrome Extensions Hub - Main JavaScript

// ===== EXTENSION DATA =====
const extensionsData = [
  {
    id: 'acc-navigator',
    title: 'ACC Navigator',
    description: 'Easy navigation for Autodesk Construction Cloud. Add a side bar to ACC so you can access every module and submodule from one integrated panel. Track your favorites for easy access on projects.',
    status: 'published',
    products: ['acc'],
    icon: 'fas fa-compass',
    version: '2.8',
    lastUpdated: 'July 10, 2025',
    author: 'AutoGus',
    rating: '5.0 (4 ratings)',
    users: '26 users',
    installUrl: 'https://chromewebstore.google.com/detail/acc-navigator/iajpnhmfnkmmemcmcnnccanbhicccabm',
    githubUrl: 'https://github.com/AutoGusX/Zipped-Extensions/blob/main/ACC%20Nav%207-9-25.zip',
    thumbnailUrl: 'assets/ACC Navigator Thumbnail.png',
    videoUrl: '2pdYhG286Sc',
    tags: ['acc'],
    features: [
      'Integrated sidebar navigation for all ACC modules',
      'Bookmark and favorites management',
      'Watermark functionality with customizable colors and text',
      'Rearrangeable bookmarks and favorites',
      'Quick access to all submodules'
    ]
  },
  {
    id: 'fusion-manage-admin-utilities',
    title: 'Fusion Manage Advanced Admin Utilities',
    description: 'Advanced admin utilities for Fusion Manage PLM with Global Variable Manager, Copy Workspace Views, and System Logs Viewer tools.',
    status: 'published',
    products: ['fusion-manage'],
    icon: 'fas fa-tools',
    version: '2.2.1',
    lastUpdated: 'July 25, 2025',
    author: 'AutoGus',
    rating: '5.0 (2 ratings)',
    users: '8 users',
    installUrl: 'https://chromewebstore.google.com/detail/fusion-manage-advanced-ad/nhgbolfnmkimbifadlailgjlcciodkfh',
    githubUrl: 'https://github.com/AutoGusX/Zipped-Extensions/blob/main/Fusion%20Manage%20Admin%20Utilities%207-24-25.zip',
    thumbnailUrl: 'assets/AdminUtilities.png',
    videoUrl: 'pHh_jQ0DCB8',
    tags: ['fusion-manage'],
    features: [
      'Global Variable Manager with view, modify, and create capabilities',
      'Copy Workspace Views between users for easy onboarding',
      'System Logs Viewer with summary and Excel export',
      'Integration with scripting editor for variable management'
    ]
  },
  {
    id: 'fusion-manage-fishbone-diagram',
    title: 'Fishbone Diagram for PLM',
    description: 'Create and manage fishbone (Ishikawa) diagrams directly within Fusion Manage for root cause analysis and quality management.',
    status: 'published',
    products: ['fusion-manage'],
    icon: 'fas fa-project-diagram',
    version: '1.5.2',
    lastUpdated: '2024-12-22',
    author: 'AutoGus',
    installUrl: 'https://chromewebstore.google.com/detail/fishbone-diagram-for-plm/kpmokllfhkmengcejeegnhgekeebabga',
    githubUrl: 'https://github.com/AutoGusX/Zipped-Extensions/blob/main/Fusion%20Manage%20Fishbone%20Daigram%207-22-25%20final.zip',
    thumbnailUrl: 'assets/Fishbone-Diagram-Thumbnail.png',
    videoUrl: 'fpy6mSLkmPQ',
    tags: ['fusion-manage'],
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
    author: 'AutoGus',
    installUrl: 'https://chromewebstore.google.com/detail/fusion-manage-advanced-cl/miicacedigmcjikfaiimmogicaedocmj',
    githubUrl: 'https://github.com/AutoGusX/Zipped-Extensions/blob/main/Fusion%20Manage%20Clipboard%206-12-25.zip',
    thumbnailUrl: 'assets/clipboard.png',
    videoUrl: 'aJsPUUEu-dE',
    tags: ['fusion-manage'],
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
    thumbnailUrl: 'assets/kanban.png',
    videoUrl: 'eI9s_APKrUs',
    tags: ['fusion-manage'],
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
    thumbnailUrl: null,
    videoUrl: null,
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
    thumbnailUrl: 'assets/TandemOps.png',
    videoUrl: 'HAXRcqKMQiU',
    tags: ['tandem','fusion-manage'],
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
    thumbnailUrl: 'assets/digital-thread.png',
    videoUrl: 'YdCeoMc4g58',
    tags: ['fusion-manage'],
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
    author: 'AutoGus',
    installUrl: 'https://chromewebstore.google.com/detail/fusion-operations-link-op/glgjlippogdaimfdlcbccnjkhfknidfl',
    githubUrl: '#',
    thumbnailUrl: 'assets/FOPS-link-opener.png',
    videoUrl: 'ynG4bcGH7QA',
    tags: ['fusion-operations'],
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
    description: 'Add favorites functionality to Fusion Operations. This extension adds simple stars to each submodule so you can create a quick list of favorites for navigation ease.',
    status: 'published',
    products: ['fusion-operations'],
    icon: 'fas fa-star',
    version: '1.1',
    lastUpdated: 'July 26, 2025',
    author: 'AutoGus',
    rating: 'No ratings yet',
    users: 'Available',
    installUrl: 'https://chromewebstore.google.com/detail/fusion-operations-favorit/jbglnonjmffhfmmcoibmanbhdgapahbh',
    githubUrl: 'https://github.com/AutoGusX/Zipped-Extensions/blob/main/Fusion%20Operations%20zfavorites%207-26-25.zip',
    thumbnailUrl: 'assets/FOPS-Favorite.png',
    videoUrl: 'er4Mnd_OZuA',
    tags: ['fusion-operations'],
    features: [
      'Simple star-based favoriting system',
      'Quick navigation to favorite submodules',
      'Rearrangeable favorites order',
      'Bug fixes for dashboard clickability'
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
    thumbnailUrl: 'assets/Vault-Panel.png',
    videoUrl: null,
    tags: ['vault', 'fusion-industry-cloud', 'documents', 'version-control'],
    features: [
      'Seamless Vault integration',
      'Document management panel',
      'Version control workflows',
      'Cloud synchronization'
    ]
  },
  {
    id: 'fusion-manage-scripting-helper',
    title: 'Fusion Manage Scripting Helper',
    description: 'Embedded scripting reference and visual no-code script builder for Fusion Manage workflows.',
    status: 'in-development',
    products: ['fusion-manage'],
    icon: 'fas fa-code',
    version: '0.8.5',
    lastUpdated: '2024-12-24',
    author: 'Gus Quade',
    githubUrl: '#',
    thumbnailUrl: 'assets/scirpting-helper.png',
    videoUrl: 'apPjI01_Pw8',
    tags: ['fusion-manage', 'scripting', 'automation', 'workflows'],
    features: [
      'Embedded scripting reference',
      'Searchable and easy to paste scripts',
      'Visualize and build workflows that become scripts',
      'No-code script builder interface'
    ]
  }
];

// ===== RECENT UPDATES DATA =====
const updatesData = [
  {
    date: 'August 1, 2025',
    extension: 'ALL Extensions',
    description: 'Add casual demo videos for each extension'
  },
  {
    date: 'July 28, 2025',
    extension: 'ALL Extensions',
    description: 'Initialized Autodesk Chrome Extension Hub page'
  },
  {
    date: 'July 25, 2025',
    extension: 'Fusion Operations Favorites',
    description: 'Fixed bug where Dashboard button was not clickable. Feature add - rearrange the order of bookmarks.'
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
      <div class="extension-card" data-status="${extension.status}" data-products="${extension.products.join(',')}" data-extension-id="${extension.id}">
        <div class="extension-card-clickable" onclick="extensionManager.openDetailsPanel('${extension.id}')"></div>
        
        ${extension.thumbnailUrl ? `
          <img src="${extension.thumbnailUrl}" alt="${extension.title} thumbnail" class="extension-thumbnail">
        ` : ''}
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
        
        <div class="extension-actions">
          ${extension.installUrl && extension.installUrl !== '#' ? `
            <a href="${extension.installUrl}" target="_blank" class="btn btn-primary">
              <i class="fab fa-chrome"></i> Install
            </a>
          ` : ''}
          ${extension.videoUrl ? `
            <button class="btn btn-demo" onclick="extensionManager.openVideoModal('${extension.videoUrl}', '${extension.title}')">
              <i class="fas fa-play"></i> Demo
            </button>
          ` : ''}
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

  openVideoModal(youtubeVideoId, title) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('demo-video');
    const modalTitle = document.getElementById('video-modal-title');
    
    // Construct YouTube embed URL
    const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?si=hm3c-aD8dNDJTLag`;
    
    iframe.src = embedUrl;
    modalTitle.textContent = `${title} - Demo`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('demo-video');
    
    // Stop the YouTube video by clearing the src
    iframe.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  openDetailsPanel(extensionId) {
    const extension = this.extensions.find(ext => ext.id === extensionId);
    if (!extension) return;

    // Populate panel with extension data
    this.populateDetailsPanel(extension);
    
    // Show panel and compress layout
    const panel = document.getElementById('details-panel');
    const layoutContainer = document.querySelector('.layout-container');
    
    panel.classList.add('open');
    layoutContainer.classList.add('panel-open');
    
    // Prevent background scrolling on mobile
    if (window.innerWidth <= 1024) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeDetailsPanel() {
    const panel = document.getElementById('details-panel');
    const layoutContainer = document.querySelector('.layout-container');
    
    panel.classList.remove('open');
    layoutContainer.classList.remove('panel-open');
    
    // Restore scrolling
    document.body.style.overflow = 'auto';
  }

  populateDetailsPanel(extension) {
    // Update titles
    document.getElementById('details-title-mobile').textContent = extension.title;
    document.getElementById('details-title-desktop').textContent = extension.title;
    
    // Update thumbnail
    const thumbnail = document.getElementById('details-thumbnail');
    if (extension.thumbnailUrl) {
      thumbnail.src = extension.thumbnailUrl;
      thumbnail.alt = `${extension.title} thumbnail`;
      thumbnail.style.display = 'block';
    } else {
      thumbnail.style.display = 'none';
    }
    
    // Update status badge
    const statusBadge = document.getElementById('details-status');
    const statusClass = extension.status.replace('-', '');
    const statusText = extension.status.replace('-', ' ').toUpperCase();
    statusBadge.className = `details-status-badge ${statusClass}`;
    statusBadge.innerHTML = `<i class="${this.getStatusIcon(extension.status)}"></i> ${statusText}`;
    
    // Update description
    document.getElementById('details-description').textContent = extension.description;
    
    // Update actions
    const actionsContainer = document.getElementById('details-actions');
    actionsContainer.innerHTML = `
      ${extension.installUrl && extension.installUrl !== '#' ? `
        <a href="${extension.installUrl}" target="_blank" class="btn btn-primary">
          <i class="fab fa-chrome"></i> View in Chrome Store
        </a>
      ` : ''}
      ${extension.videoUrl ? `
        <button class="btn btn-demo" onclick="extensionManager.openVideoModal('${extension.videoUrl}', '${extension.title}')">
          <i class="fas fa-play"></i> Watch Demo
        </button>
      ` : ''}
      ${extension.githubUrl && extension.githubUrl !== '#' ? `
        <a href="${extension.githubUrl}" target="_blank" class="btn btn-secondary">
          <i class="fas fa-download"></i> Download Source
        </a>
      ` : ''}
    `;
    
    // Update features
    const featuresContainer = document.getElementById('details-features');
    if (extension.features && extension.features.length > 0) {
      featuresContainer.innerHTML = extension.features.map(feature => `<li>${feature}</li>`).join('');
    } else {
      featuresContainer.innerHTML = '<li>No features listed</li>';
    }
    
    // Update technical details
    const metaContainer = document.getElementById('details-meta');
    metaContainer.innerHTML = `
      <div class="details-meta-item">
        <div class="details-meta-label">Version</div>
        <div class="details-meta-value">${extension.version}</div>
      </div>
      <div class="details-meta-item">
        <div class="details-meta-label">Last Updated</div>
        <div class="details-meta-value">${extension.lastUpdated}</div>
      </div>
      <div class="details-meta-item">
        <div class="details-meta-label">Author</div>
        <div class="details-meta-value">${extension.author}</div>
      </div>
      ${extension.rating ? `
        <div class="details-meta-item">
          <div class="details-meta-label">Rating</div>
          <div class="details-meta-value">${extension.rating}</div>
        </div>
      ` : ''}
      ${extension.users ? `
        <div class="details-meta-item">
          <div class="details-meta-label">Users</div>
          <div class="details-meta-value">${extension.users}</div>
        </div>
      ` : ''}
    `;
    
    // Update tags
    const tagsContainer = document.getElementById('details-tags');
    tagsContainer.innerHTML = extension.tags.map(tag => `<span class="details-tag">${tag}</span>`).join('');
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
  
  // Initialize modal event listeners
  initializeVideoModal();
  initializeDetailsPanel();
  
  // Add loading animation
  document.body.classList.add('loaded');
  
  console.log('🚀 Autodesk Chrome Extensions Hub initialized successfully!');
});

// ===== VIDEO MODAL INITIALIZATION =====
function initializeVideoModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-video-modal');
  
  // Close button click
  closeBtn.addEventListener('click', () => {
    window.extensionManager.closeVideoModal();
  });
  
  // Click outside modal to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.extensionManager.closeVideoModal();
    }
  });
  
  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      window.extensionManager.closeVideoModal();
    }
  });
}

// ===== DETAILS PANEL INITIALIZATION =====
function initializeDetailsPanel() {
  const panel = document.getElementById('details-panel');
  const closeDesktop = document.getElementById('details-close-desktop');
  const closeMobile = document.getElementById('details-close-mobile');
  const backBtn = document.getElementById('details-back-btn');
  
  // Close button clicks
  closeDesktop.addEventListener('click', () => {
    window.extensionManager.closeDetailsPanel();
  });
  
  closeMobile.addEventListener('click', () => {
    window.extensionManager.closeDetailsPanel();
  });
  
  // Back button (mobile)
  backBtn.addEventListener('click', () => {
    window.extensionManager.closeDetailsPanel();
  });
  
  // Click outside panel to close (desktop only)
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('open') && 
        !panel.contains(e.target) && 
        !e.target.closest('.extension-card') &&
        window.innerWidth > 1024) {
      window.extensionManager.closeDetailsPanel();
    }
  });
  
  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      window.extensionManager.closeDetailsPanel();
    }
  });
}

// ===== GLOBAL FUNCTIONS =====
// Make extensionManager available globally for onclick handlers

window.extensionManager = null; 


