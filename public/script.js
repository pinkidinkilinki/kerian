// Global variables (now properly declared)
let allCakes = [];
let visibleCount = 50; // Your original initial
let increment = 50; // Your original
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default'; // Your original

// Helper: Debounce for search (from recommended - prevents lag)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Render the gallery grid (your base + error handling, ARIA from recommended)
function renderGallery(cakesToShow) {
  allCakes = cakesToShow;
  const grid = document.getElementById('gallery-grid');
  if (!grid) {
    console.error('Gallery grid element not found');
    return;
  }

  const toShow = allCakes.slice(0, visibleCount);
  grid.innerHTML = toShow.map(cake => `
    <div class="cake-card" onclick="openLightbox('${cake.img}', '${cake.title.replace(/'/g, "\\'")}', '${cake.sizes}', ${cake.priceLeva}, ${cake.priceEuro}, '${cake.id}', '${cake.minPriceLeva || ''}', '${cake.minPriceEuro || ''}')">
      <img src="${cake.img}" alt="${cake.title}" loading="lazy">
      <h3>${cake.id} ${cake.title}</h3>
      <p>${cake.minPriceLeva} <span class="euro-price">или ${cake.minPriceEuro}</span> • ${cake.displayText}</p>
    </div>
  `).join('');

  // Announce changes for screen readers (from recommended)
  grid.setAttribute('aria-live', 'polite');

  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = (visibleCount >= allCakes.length) ? 'none' : 'block';
  }
}

// Open lightbox (your base + Viber tracking from recommended)
function openLightbox(img, title, sizes, priceLeva, priceEuro, id, minPriceLeva, minPriceEuro) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close-btn" aria-label="Затвори">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 6 L6 18"></path>
          <path d="M6 6 L18 18"></path>
        </svg>
        Затвори
      </button>

      <img src="${img}" alt="${title}">
      <div class="lightbox-info">
        <h2>${title}</h2>
        <p><strong>Код:</strong> ${id}</p>
        <p><strong>Размери:</strong> ${sizes.replace(/\+/g, 'и повече')} парчета</p>
        
        <p><strong>Цена на парче:</strong> ${priceLeva.toFixed(2)} лв или ${priceEuro.toFixed(2)} €</p>
        
        ${minPriceLeva && minPriceEuro ? `
        <p><strong>Минимална цена:</strong> ${minPriceLeva} или ${minPriceEuro}<br>
           <small>(за най-малкия размер: брой парчета × цена на парче)</small></p>
        ` : `<p><strong>Цена:</strong> по запитване</p>`}

        <p><small>* Допълнителни такси могат да се приложат (напр. кутия, специални декорации)</small></p>

        <!-- Viber button with tracking - location includes cake ID -->
        <a href="viber://chat?number=%2B359896229538&draft=Здравейте!%20Искам%20торта%20${id}%20${encodeURIComponent(title)}%20(${sizes}%20парчета)\" 
           onclick="trackViber('lightbox-${id}')"
           class="lightbox-viber-cta">
          Поръчай сега във Viber 💬
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.body.classList.add('lightbox-open');

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove('lightbox-open');
    }
  });

  modal.querySelector('.lightbox-close-btn').addEventListener('click', () => {
    modal.remove();
    document.body.classList.remove('lightbox-open');
  });
}

// E-Catalogue: 38 pages - NO CODE RANGE
function renderEdibleCatalogue() {
  const grid = document.getElementById('page-grid');
  if (!grid) return;

  // ←←← ТУК ПОСТАВЯШ ТВОИТЕ 38 ТОЧНИ CLOUDINARY URL-та (в ред: страница 1 до 38)
  const pageUrls = [
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936085/52_rhmido.webp",  // страница 1
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936083/51_ceiaps.webp",  // страница 2
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936081/50_hdk4b9.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936080/49_b6h6ik.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936079/48_crsmvs.webp",
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936078/47_fjrlcr.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936077/46_jakn7e.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936076/45_w08iqr.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936073/44_kdjihn.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936072/43_yarnp6.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936071/42_y1t9fn.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936070/41_g8bqqp.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936068/29_ysijty.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936067/22_hasfgk.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936066/27_zkos3r.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936065/26_xa5emd.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936064/19_httw2p.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936062/38_n18qls.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936062/39_incs6h.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936061/28_vqc2uk.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936059/40_npirxc.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936058/20_bwjswq.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936058/13_w8yr7l.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936056/16_jsa8pa.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936055/21_huxnga.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936054/18_a3wzs9.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936053/14_ot7soo.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936051/15_d5spwe.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936051/12_wi3jqn.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936049/11_bgkzmf.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936049/10_nnqvzq.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936047/9_ioighg.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936046/8_lx9w2c.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936045/5_lt1gfx.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936044/4_xhehno.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936043/3_mflxa4.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936042/1_fvb9j8.webp", 
    "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766936042/2_re5tqg.webp", 
  ];

  let html = '';
  for (let i = 0; i < pageUrls.length; i++) {
    const imgUrl = pageUrls[i];
    const pageNum = i + 1;

    html += `
      <div class="page-card" onclick="openPageLightbox('${imgUrl}', ${pageNum})">
        <img src="${imgUrl}" alt="Страница ${pageNum}" loading="lazy">
        <p>Страница ${pageNum}</p>
      </div>
    `;
  }
  grid.innerHTML = html;
}

function openPageLightbox(imgUrl, pageNum) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content page-lightbox">
      <button class="lightbox-close-btn" aria-label="Затвори">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 6 L6 18"></path>
          <path d="M6 6 L18 18"></path>
        </svg>
        Затвори
      </button>
      <img src="${imgUrl}" alt="Страница ${pageNum}">
      <div class="lightbox-info">
        <h2>Страница ${pageNum}</h2>
        <p>Изберете номер от тази страница и ни пишете във Viber с кода + желания шаблон (F001–F006).</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add('lightbox-open');

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove('lightbox-open');
    }
  });
  modal.querySelector('.lightbox-close-btn').addEventListener('click', () => {
    modal.remove();
    document.body.classList.remove('lightbox-open');
  });
}

function applyFiltersAndSort() {
  visibleCount = 50;

  let filtered = currentFilter === 'all' ? cakes : cakes.filter(c => c.category === currentFilter);

  if (currentSearch) {
    const searchLower = currentSearch.toLowerCase();
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(searchLower) || 
      c.id.toLowerCase().includes(searchLower)
    );
  }

  if (currentSort === 'newest') {
    filtered.sort((a, b) => b.id.localeCompare(a.id));
  } else if (currentSort === 'oldest') {
    filtered.sort((a, b) => a.id.localeCompare(b.id));
  } else if (currentSort === 'cheapest') {
    filtered.sort((a, b) => {
      const priceA = a.minPriceLeva ? parseFloat(a.minPriceLeva) : Infinity;
      const priceB = b.minPriceLeva ? parseFloat(b.minPriceLeva) : Infinity;
      return priceA - priceB;
    });
  } else if (currentSort === 'expensive') {
    filtered.sort((a, b) => {
      const priceA = a.minPriceLeva ? parseFloat(a.minPriceLeva) : -Infinity;
      const priceB = b.minPriceLeva ? parseFloat(b.minPriceLeva) : -Infinity;
      return priceB - priceA;
    });
  }

  renderGallery(filtered);

  const photoNote = document.getElementById('photo-note');
  if (photoNote) {
    photoNote.style.display = currentFilter === 'fotodekoratsiya' ? 'block' : 'none';
  }

  // Show/hide E-Catalogue only for fotodekoratsiya category
  const edibleCatalogue = document.getElementById('edible-catalogue');
  if (edibleCatalogue) {
    edibleCatalogue.style.display = currentFilter === 'fotodekoratsiya' ? 'block' : 'none';
    
    if (currentFilter === 'fotodekoratsiya') {
      renderEdibleCatalogue();
    }
  }
}

// Category filters
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active');
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFiltersAndSort();
  });
});

// Search
document.getElementById('cake-search')?.addEventListener('input', e => {
  currentSearch = e.target.value.trim();
  applyFiltersAndSort();
});

// Sort
document.getElementById('sort-select')?.addEventListener('change', e => {
  currentSort = e.target.value;
  applyFiltersAndSort();
});

// Load More
function loadMore() {
  visibleCount += increment;
  renderGallery(allCakes);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  currentSort = 'newest';
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'newest';

  const hash = window.location.hash.substring(1);
  if (hash) {
    const filterButton = document.querySelector(`.filters button[data-filter="${hash}"]`);
    if (filterButton) {
      document.querySelector('.filters .active')?.classList.remove('active');
      filterButton.classList.add('active');
      currentFilter = hash;
    }
  }

  applyFiltersAndSort();
});
