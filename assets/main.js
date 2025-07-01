// Main JavaScript for Chrome Extensions Showcase

// Initialize filtering functionality
function initializeFiltering() {
  // Wait for DOM to be ready
  setTimeout(() => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const extensionTiles = document.querySelectorAll('.extension-tile');
    
    if (filterButtons.length === 0) {
      console.log('Filter buttons not found, retrying...');
      setTimeout(initializeFiltering, 1000);
      return;
    }
    
    console.log('Setting up filters with', filterButtons.length, 'buttons');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        const filterGroup = this.closest('.filter-group');
        
        // Update active button within the same filter group
        if (filterGroup) {
          const groupButtons = filterGroup.querySelectorAll('.filter-btn');
          groupButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        } else if (filter === 'all') {
          // Reset all filters when "All" is clicked
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        }
        
        // Filter tiles
        extensionTiles.forEach(tile => {
          const tags = tile.getAttribute('data-tags');
          if (filter === 'all' || (tags && tags.includes(filter))) {
            tile.style.display = 'block';
          } else {
            tile.style.display = 'none';
          }
        });
      });
    });
    
    console.log('Autodesk filtering initialized successfully!');
  }, 500);
}

// Filter extensions based on selected category
function filterExtensions(filter, tiles) {
  tiles.forEach((tile, index) => {
    const tags = tile.getAttribute('data-tags');
    
    if (filter === 'all' || (tags && tags.includes(filter))) {
      tile.style.display = 'block';
      // Add staggered animation
      setTimeout(() => {
        tile.style.opacity = '1';
        tile.style.transform = 'translateY(0)';
      }, index * 100);
    } else {
      tile.style.opacity = '0';
      tile.style.transform = 'translateY(20px)';
      setTimeout(() => {
        tile.style.display = 'none';
      }, 300);
    }
  });
}

// Animate filtered tiles
function animateFilteredTiles() {
  const visibleTiles = document.querySelectorAll('.extension-tile:not([style*="display: none"])');
  
  visibleTiles.forEach((tile, index) => {
    tile.style.opacity = '0';
    tile.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      tile.style.transition = 'all 0.5s ease';
      tile.style.opacity = '1';
      tile.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Initial load animation
function animateInitialLoad() {
  const tiles = document.querySelectorAll('.extension-tile');
  const filterSection = document.querySelector('.filter-section');
  
  // Animate filter section
  if (filterSection) {
    filterSection.style.opacity = '0';
    filterSection.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      filterSection.style.transition = 'all 0.6s ease';
      filterSection.style.opacity = '1';
      filterSection.style.transform = 'translateY(0)';
    }, 200);
  }
  
  // Animate tiles with stagger
  tiles.forEach((tile, index) => {
    tile.style.opacity = '0';
    tile.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      tile.style.transition = 'all 0.6s ease';
      tile.style.opacity = '1';
      tile.style.transform = 'translateY(0)';
    }, 400 + (index * 150));
  });
}

// Add hover effects for tiles
function addHoverEffects() {
  const tiles = document.querySelectorAll('.extension-tile');
  
  tiles.forEach(tile => {
    tile.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    tile.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Search functionality enhancement
function enhanceSearch() {
  const searchInput = document.querySelector('.search input[type="search"]');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const tiles = document.querySelectorAll('.extension-tile');
      
      tiles.forEach(tile => {
        const title = tile.querySelector('.extension-title').textContent.toLowerCase();
        const description = tile.querySelector('.extension-description').textContent.toLowerCase();
        const tags = tile.getAttribute('data-tags').toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
          tile.style.display = 'block';
          tile.style.opacity = '1';
        } else {
          tile.style.display = 'none';
          tile.style.opacity = '0';
        }
      });
    });
  }
}

// Smooth scrolling for navigation
function addSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing features...');
  
  // Add a delay to ensure Docsify has rendered
  setTimeout(() => {
    addHoverEffects();
    enhanceSearch();
    addSmoothScrolling();
  }, 1000);
});

// Intersection Observer for scroll animations
function addScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.extension-tile, .filter-section');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// Add keyboard navigation
function addKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    const focusedElement = document.activeElement;
    
    // Add keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 'f':
          e.preventDefault();
          const searchInput = document.querySelector('.search input');
          if (searchInput) {
            searchInput.focus();
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          e.preventDefault();
          const filterButtons = document.querySelectorAll('.filter-btn');
          const index = parseInt(e.key) - 1;
          if (filterButtons[index]) {
            filterButtons[index].click();
          }
          break;
      }
    }
  });
}

// Initialize when Docsify is ready
if (window.$docsify) {
  window.$docsify.plugins = window.$docsify.plugins || [];
  window.$docsify.plugins.push(function(hook) {
    hook.mounted(function() {
      console.log('Docsify mounted, initializing showcase features...');
      
      setTimeout(() => {
        initializeFiltering();
        addScrollAnimations();
        addKeyboardNavigation();
      }, 500);
    });
  });
}

// Fallback initialization
window.addEventListener('load', function() {
  console.log('Window loaded, ensuring all features are initialized...');
  
  setTimeout(() => {
    if (!document.querySelector('.filter-btn.active')) {
      initializeFiltering();
    }
  }, 1000);
});

console.log('Chrome Extensions Showcase script loaded'); 