// script.js - Full updated version with category filters and lightbox
function renderGallery(cakesToShow) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = cakesToShow.map(cake => `
    <div class="cake-card" onclick="openLightbox('${cake.img}', '${cake.title}', '${cake.price}', '${cake.price2}', '${cake.sizes}')">
      <img src="${cake.img}" alt="${cake.title}" loading="lazy">
      <h3>${cake.id} - ${cake.title}</h3>
      <p>${cake.price} (${cake.price2})</p>
      <p class="sizes">${cake.sizes}</p>
    </div>
  `).join('');
}

function openLightbox(img, title, price, price2, sizes) {
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <div class="lightbox-content">
      <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <img src="${img}" alt="${title}">
      <h2>${title}</h2>
      <p>Цена: ${price} (${price2})</p>
      <p class="sizes">Размери: ${sizes}</p>
      <a href="https://wa.me/359XXXXXXXXX?text=Искам%20торта%20${title}%20(${sizes})" class="whatsapp-btn">Поръчай</a>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => e.target === modal && modal.remove());
}

document.querySelectorAll('.filters button')?.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const filtered = filter === 'all' ? cakes : cakes.filter(c => c.category === filter);
    renderGallery(filtered);

    document.getElementById('photo-note').style.display = filter === 'fotodekoratsiya' ? 'block' : 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('gallery-grid')) renderGallery(cakes);
});
