function renderGallery(cakesToShow) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = cakesToShow.map(cake => `
    <div class="cake-card" onclick="openLightbox('${cake.img}', '${cake.title}', '${cake.sizes}', '${cake.priceLeva}', '${cake.id}')">
      <img src="${cake.img}" alt="${cake.title}" loading="lazy">
      <h3>${cake.id} ${cake.title}</h3>
      <p>${cake.minPriceLeva} <span class="euro-price">или ${cake.minPriceEuro}</span> • ${cake.displayText}</p>
    </div>
  `).join('');
}

function openLightbox(img, title, sizes, price, id) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content">
      <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <img src="${img}" alt="${title}">
      <div class="lightbox-info">
        <h2>${title}</h2>
        <p><strong>Код:</strong> ${id}</p>
        <p><strong>Размери:</strong> ${sizes.replace(/\+/g, 'и повече')} парчета</p>
        <p><strong>Цена:</strong> ${price} лв на парче<br>
           Обща цена = брой парчета × ${price} лв<br>
           * Допълнителни такси могат да се приложат (напр. кутия, специални декорации)</p>

        <!-- Prominent Call-to-Action Viber button -->
        <a href="viber://chat?number=%2B359896799620&draft=Здравейте!%20Искам%20торта%20${id}%20${encodeURIComponent(title)}%20(${sizes}%20парчета)" 
           class="lightbox-viber-cta">
          Поръчай сега във Viber 💬
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Prevent background scrolling
  document.body.classList.add('lightbox-open');

  // Close handlers
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove('lightbox-open');
    }
  });

  modal.querySelector('.close').addEventListener('click', () => {
    modal.remove();
    document.body.classList.remove('lightbox-open');
  });
}

// Filtering variables
let currentFilter = 'all';
let currentSort = 'default';
let currentSearch = '';

function applyFiltersAndSort() {
  let filtered = currentFilter === 'all' ? cakes : cakes.filter(c => c.category === currentFilter);

  // Search
  if (currentSearch) {
    const searchLower = currentSearch.toLowerCase();
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(searchLower) || 
      c.id.toLowerCase().includes(searchLower)
    );
  }

  // Sorting
  if (currentSort === 'newest') {
    filtered.sort((a, b) => b.id.localeCompare(a.id)); // Newest first
  } else if (currentSort === 'oldest') {
    filtered.sort((a, b) => a.id.localeCompare(b.id)); // Oldest first
  }

  renderGallery(filtered);
}

// Category filters
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active');
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFiltersAndSort();

    document.getElementById('photo-note').style.display = 
      currentFilter === 'fotodekoratsiya' ? 'block' : 'none';
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

// Initial load – newest by default
document.addEventListener('DOMContentLoaded', () => {
  currentSort = 'newest';
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'newest';

  applyFiltersAndSort();
});
