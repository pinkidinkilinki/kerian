const rawData = [
  { id: "А001", price1: 4.5 ,price2: 2.3, title_sizes: "Джунгла - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765208929/1_wj7avy.webp", category: "detski" },
{ id: "А002", price1: 4.5 ,price2: 2.3, title_sizes: "Аутобан - 40,50 + (колата остава същия размер - форма)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765208929/2_lu8amn.webp", category: "detski" },
{ id: "А003", price1: 4.5 ,price2: 2.3, title_sizes: "Автомобил - 18", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a003-1_zf9q0g.webp", category: "detski" },
{ id: "А004", price1: 4.5 ,price2: 2.3, title_sizes: "Аквариум - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a004-1_qhpmka.webp", category: "detski" },
{ id: "А005", price1: 4.5 ,price2: 2.3, title_sizes: "Балерина-кръгла - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a005-1_nkav8y.webp", category: "detski" },
{ id: "А006", price1: 4.5 ,price2: 2.3, title_sizes: "Балерина - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a006-1_hjkdix.webp", category: "detski" },
{ id: "А007", price1: 4.5 ,price2: 2.3, title_sizes: "Барби - 16, 20 ,30,40", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a007-3_sifeaj.webp", category: "detski" },
{ id: "А008", price1: 4.5 ,price2: 2.3, title_sizes: "Басейн - 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a008-1_wgmykv.webp", category: "detski" },
{ id: "А009", price1: 4.5 ,price2: 2.3, title_sizes: "Бебе - 20, 30", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a009-1_tc6r31.webp", category: "detski" },
{ id: "А010", price1: 4.5 ,price2: 2.3, title_sizes: "Баскетболно игрище - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a010-1_heggnh.webp", category: "detski" },
//.. more here
{ id: "C001", price1: 5.5 ,price2: 2.9, title_sizes: "Шоко.сватб.с оранжеви рози-30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706267/c001_xb6qab.webp", category: "svatbeni" },
//...more here
{ id: "F001", price1: 4 ,price2: 2, title_sizes: "Торта със снимка правоъгълна - 12,16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766906658/f1_ehw2dl.webp", category: "fotodekoratsiya" },
{ id: "F002", price1: 4 ,price2: 2, title_sizes: "Торта със снимка правоъгълна - 12,16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766906658/f2_g9njc2.webp", category: "fotodekoratsiya" },
{ id: "F003", price1: 4.5 ,price2: 2.3, title_sizes: "Торта със снимка кръгла различни цветове - 12,16,20", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766906659/f3_x2xcrb.webp", category: "fotodekoratsiya" },
{ id: "F004", price1: 4.5 ,price2: 2.3, title_sizes: "Торта със снимка кръгла и сърце - 16,20", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766906658/f4_uftclr.webp", category: "fotodekoratsiya" },
{ id: "F005", price1: 4 ,price2: 2, title_sizes: "Торта със снимка сърце - 12,16,20", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766930189/f5_cepvq5.webp", category: "fotodekoratsiya" },
{ id: "F006", price1: 4 ,price2: 2, title_sizes: "Торта със снимка кръгла - 12,16,20", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1766930188/f6_b7nbat.webp", category: "fotodekoratsiya" },

];

const cakes = rawData
  .filter(item => item.img && item.img.trim() !== "")
  .map(item => {
    const parts = item.title_sizes.split(" - ");
    const title = parts[0].trim();

    // Improved size parsing
    let sizes = "по запитване";
    if (parts.length > 1) {
      sizes = parts[1].trim().replace(/,/g, ', ');
    } else if (item.title_sizes.match(/\d/)) {
      const sizeMatch = item.title_sizes.match(/[\d\s,+]+$/);
      sizes = sizeMatch ? sizeMatch[0].trim().replace(/,/g, ', ') : "по запитване";
    }

    sizes = sizes.replace(/\+/g, ' и повече');

    const priceLeva = item.price1;
    const priceEuro = item.price2;

    // Extract numbers
    const matches = sizes.match(/\d+/g);
    let sizeNumbers = matches ? matches.map(n => parseInt(n, 10)) : [];

    let minPriceLeva = null;
    let minPriceEuro = null;
    let displayText = sizes;

    if (sizeNumbers.length > 0) {
      const minPieces = Math.min(...sizeNumbers);
      minPriceLeva = (minPieces * priceLeva).toFixed(2);
      minPriceEuro = (minPieces * priceEuro).toFixed(2);

      const hasPlus = sizes.includes('+') || sizes.includes('и повече');
      const baseText = `${minPieces} парчета`;
      displayText = hasPlus ? `${baseText}, може и повече` : baseText;
    } else {
      // Fallback when no sizes: show per-piece price in gallery
      minPriceLeva = priceLeva.toFixed(2);
      minPriceEuro = priceEuro.toFixed(2);
      displayText = "по запитване (цена на парче)";
    }

    return {
      id: item.id,
      title: title,
      category: item.category || "detski",
      priceLeva: priceLeva,
      priceEuro: priceEuro,
      sizes: sizes,
      minPriceLeva: `${minPriceLeva} лв`,
      minPriceEuro: `${minPriceEuro} €`,
      displayText: displayText,
      img: item.img
    };
  });
  // E-Catalogue: 48 pages
const pageCount = 38; // Промени ако са повече/по-малко

function renderEdibleCatalogue() {
  const grid = document.getElementById('page-grid');
  if (!grid) return;

  let html = '';
  for (let i = 1; i <= pageCount; i++) {
    const pageNum = String(i).padStart(2, '0');
    const imgUrl = `https://res.cloudinary.com/dsn8jkh0o/image/upload/vYOUR_VERSION/page${pageNum}.webp`; // Замени vYOUR_VERSION с актуалния version номер
    const startCode = String((i - 1) * 15 + 1).padStart(3, '0');
    const endCode = String(Math.min(i * 15, pageCount * 15)).padStart(3, '0');

    html += `
      <div class="page-card" onclick="openPageLightbox('${imgUrl}', ${i}, 'E${startCode}', 'E${endCode}')">
        <img src="${imgUrl}" alt="Страница ${i}" loading="lazy">
        <p>Страница ${i}<br><small>E${startCode}–E${endCode}</small></p>
      </div>
    `;
  }
  grid.innerHTML = html;
}

function openPageLightbox(imgUrl, pageNum, startCode, endCode) {
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
        <p><strong>Кодове на тази страница:</strong> ${startCode} – ${endCode}</p>
        <p>Напишете ни във Viber желания код (напр. E057) и шаблон (F001–F006).</p>
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

// Рендерирай E-каталога само когато сме в категория "fotodekoratsiya"
if (currentFilter === 'fotodekoratsiya') {
  renderEdibleCatalogue();
}
