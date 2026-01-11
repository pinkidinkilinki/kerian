// daily-script.js — Standalone script for "Днес в кухнята" section on index.html

// Load data from catalogue_daily.js (loaded before this)
function renderDailyCakes() {
  const grid = document.getElementById('today-grid');
  if (!grid || typeof dailyCakes === 'undefined' || dailyCakes.length === 0) {
    console.log('No daily cakes data found'); // Debug: Check console if issues
    return;
  }

  grid.innerHTML = dailyCakes.map(cake => `
    <div class="today-card" onclick="openDailyLightbox('${cake.img}', '${cake.title}', '${cake.sizes}', '${cake.displayPrice}', '${cake.id}')">
      <img src="${cake.img}" alt="${cake.title}" loading="lazy">
      <p><strong>${cake.id}</strong> ${cake.title}</p>
      <p>${cake.sizes} • ${cake.displayPrice}</p>
      <a href="viber://chat?number=%2B359896229538&draft=Здравейте!%20Искам%20днешната%20торта%20${cake.id}%20${encodeURIComponent(cake.title)}" 
         class="viber-btn small" style="margin-top:0.5rem; font-size:0.9rem; padding:0.6rem 1rem;">
        Поръчай 💬
      </a>
    </div>
  `).join('');
}

// Simplified lightbox for daily cakes (no full price calc needed)
function openDailyLightbox(img, title, sizes, displayPrice, id) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close-btn" aria-label="Затвори" onclick="this.closest('.lightbox').remove(); document.body.classList.remove('lightbox-open');">
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
        <p><strong>Размери:</strong> ${sizes} парчета</p>
        <p><strong>Цена:</strong> ${displayPrice}</p>
        <p><small>* Допълнителни такси могат да се приложат (кутия, декорации)</small></p>
        <a href="viber://chat?number=%2B359896229538&draft=Здравейте!%20Искам%20днешната%20торта%20${id}%20${encodeURIComponent(title)}" class="viber-btn">Поръчай в Viber 💬</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add('lightbox-open');

  // Close on outside click
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove('lightbox-open');
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', renderDailyCakes);
