function renderGallery(cakesToShow) {
  allCakes = cakesToShow; // Save full filtered list
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  // Show only first visibleCount
  const toShow = allCakes.slice(0, visibleCount);
  grid.innerHTML = toShow.map(cake => `
    <div class="cake-card" onclick="openLightbox('${cake.img}', '${cake.title}', '${cake.sizes}', ${cake.priceLeva}, ${cake.priceEuro}, '${cake.id}', '${cake.minPriceLeva || ''}', '${cake.minPriceEuro || ''}')">
      <img src="${cake.img}" alt="${cake.title}" loading="lazy">
      <h3>${cake.id} ${cake.title}</h3>
      <p>${cake.minPriceLeva} <span class="euro-price">или ${cake.minPriceEuro}</span> • ${cake.displayText}</p>
    </div>
  `).join('');

  // Show/hide Load More button
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = (visibleCount >= allCakes.length) ? 'none' : 'block';
  }
}

function openLightbox(img, title, sizes, priceLeva, priceEuro, id, minPriceLeva, minPriceEuro) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content">
      <!-- Prominent Close Button -->
      <button class="lightbox-close-btn" aria-label="Затвори">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
        <p><strong>Минимална цена:</strong> ${minPriceLeva} лв или ${minPriceEuro} €<br>
           <small>(за най-малкия размер: брой парчета × цена на парче)</small></p>
        ` : `<p><strong>Цена:</strong> по запитване</p>`}

        <p><small>* Допълнителни такси могат да се приложат (напр. кутия, специални декорации)</small></p>

        <a href="viber://chat?number=%2B359896229538&draft=Здравейте!%20Искам%20торта%20${id}%20${encodeURIComponent(title)}%20(${sizes}%20парчета)" 
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

// Filtering variables
let currentFilter = 'all';
let currentSort = 'default';
let currentSearch = '';
let visibleCount = 50; // Initial visible count
const increment = 50;
let allCakes = []; // Store full filtered list

function applyFiltersAndSort() {
  visibleCount = 50; // Reset visible count on filter/sort/search change

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
  }

  renderGallery(filtered);

  const photoNote = document.getElementById('photo-note');
  if (photoNote) {
    photoNote.style.display = currentFilter === 'fotodekoratsiya' ? 'block' : 'none';
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

// Search input
document.getElementById('cake-search')?.addEventListener('input', e => {
  currentSearch = e.target.value.trim();
  applyFiltersAndSort();
});

// Sort dropdown
document.getElementById('sort-select')?.addEventListener('change', e => {
  currentSort = e.target.value;
  applyFiltersAndSort();
});

// Load more function
function loadMore() {
  visibleCount += increment;
  renderGallery(allCakes);
}

// Initial load + URL hash support
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
