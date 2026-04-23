// daily-script.js — Standalone script for "Днес в кухнята" section on index.html

let sortedDailyCakes = [];
let dailyVisibleCount = 12;
const dailyIncrement = 12;

function renderDailyCakes() {
  const grid = document.getElementById('today-grid');
  if (!grid || typeof dailyCakes === 'undefined' || dailyCakes.length === 0) {
    console.log('No daily cakes data found');
    return;
  }

  sortedDailyCakes = [...dailyCakes].sort((a, b) => b.id.localeCompare(a.id));

  renderDailyGrid();
  injectCakeStructuredData();
}

function renderDailyGrid() {
  const grid = document.getElementById('today-grid');
  if (!grid) return;

  const toShow = sortedDailyCakes.slice(0, dailyVisibleCount);

  grid.innerHTML = toShow.map(cake => `
    <div class="today-card" onclick="openDailyLightbox('${cake.img}', '${cake.title}', '${cake.sizes}', '${cake.displayPrice}', '${cake.id}')">
      <img src="${cake.img}" 
           alt="Торта ${cake.title} Сладкарници Кериан София" 
           loading="lazy">
      <p><strong>${cake.id}</strong> ${cake.title}</p>
      <p>${cake.sizes} • ${cake.displayPrice}</p>
      <a href="viber://chat?number=%2B359896229538&draft=Здравейте!%20Искам%20днешната%20торта%20${cake.id}%20${encodeURIComponent(cake.title)}" 
         class="viber-btn small" style="margin-top:0.5rem; font-size:0.9rem; padding:0.6rem 1rem;">
        Поръчай 💬
      </a>
    </div>
  `).join('');

  const btn = document.getElementById('daily-load-more-btn');
  if (btn) {
    btn.style.display = (dailyVisibleCount >= sortedDailyCakes.length) ? 'none' : 'block';
  }
}

function loadMoreDaily() {
  dailyVisibleCount += dailyIncrement;
  renderDailyGrid();
}

// Lightbox for daily cakes
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
      <img src="${img}" alt="Торта ${title} Сладкарници Кериан София" loading="lazy">
      <div class="lightbox-info">
        <h2>${title}</h2>
        <p><strong>Код:</strong> ${id}</p>
        <p><strong>Размери:</strong> ${sizes}</p>
        <p><strong>Цена:</strong> ${displayPrice}</p>
        <p><small>* Допълнителни такси могат да се приложат (кутия, декорации)</small></p>
        <a href="viber://chat?number=%2B359896229538&draft=Здравейте!%20Искам%20днешната%20торта%20${id}%20${encodeURIComponent(title)}" class="viber-btn">Поръчай в Viber 💬</a>
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
}

// Inject structured data for Google / SEO
function injectCakeStructuredData() {
  // Remove any previously injected version to avoid duplicates on re-render
  const existing = document.getElementById('daily-cakes-schema');
  if (existing) existing.remove();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Торти Кериан 2026",
    "itemListElement": sortedDailyCakes.map((cake, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": cake.title,
        "image": cake.img,
        "description": `Торта ${cake.title} - ${cake.sizes} - ${cake.displayPrice}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BGN",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Кериан" }
        }
      }
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'daily-cakes-schema';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Run on page load
document.addEventListener('DOMContentLoaded', renderDailyCakes);
