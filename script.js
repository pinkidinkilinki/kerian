function renderGallery(cakesToShow) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = cakesToShow.map(cake => `
    <div class="cake-card" onclick="openLightbox('${cake.img}', '${cake.title}', '${cake.sizes}')">
      <img src="${cake.img}" alt="${cake.title}" loading="lazy">
      <h3>${cake.id} ${cake.title}</h3>
      <p>${cake.price} • ${cake.sizes}</p>
    </div>
  `).join('');
}

function openLightbox(img, title, sizes) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content">
      <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <img src="${img}" alt="${title}">
      <div class="lightbox-info">
        <h2>${title}</h2>
        <p>Код: ${title.includes(' ') ? title.split(' ')[0] : ''}</p>
        <p>Размери: ${sizes}</p>
        <a href="https://wa.me/359XXXXXXXXX?text=Здравейте!%20Искам%20торта%20${title}%20(${sizes})" class="whatsapp-btn">Поръчай сега</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => e.target === modal && modal.remove());
}

// Filters
document.querySelectorAll('.filters button')?.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const filtered = filter === 'all' ? cakes: cakes.filter(c => c.category === filter);
    renderGallery(filtered);

    document.getElementById('photo-note').style.display = filter === 'fotodekoratsiya' ? 'block': 'none';
  });
});

// Initial render
document.addEventListener('DOMContentLoaded', () => renderGallery(cakes));
