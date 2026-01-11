// catalogue_daily.js — Standalone data for today's cakes
const rawData = [
  { id: "M001", price1: 4.5, price2: 2.3, title_sizes: "Пари - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1767533260/IMG_20251018_141850679_wxtpej.webp", category: "daily" },
  { id: "M002", price1: 4, price2: 2, title_sizes: "Снимка Роналдо - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1767533260/IMG_20251227_123412796_o67zn8.webp", category: "daily" },
  // Add more via Excel formula below
];

// Process rawData into ready-to-render dailyCakes
const dailyCakes = rawData.map(item => {
  const parts = item.title_sizes.split(" - ");
  const title = parts[0].trim();
  let sizes = parts.length > 1 ? parts[1].trim() : "по запитване";
  sizes = sizes.replace(/\+/g, ' и повече');

  const matches = sizes.match(/\d+/g);
  let sizeNumbers = matches ? matches.map(n => parseInt(n, 10)) : [];
  let minPieces = sizeNumbers.length > 0 ? Math.min(...sizeNumbers) : null;

  let displayPrice = "";
  if (minPieces) {
    const minPriceLeva = (minPieces * item.price1).toFixed(0);
    const minPriceEuro = (minPieces * item.price2).toFixed(2);
    displayPrice = `${minPriceLeva} лв или ${minPriceEuro} €`;
  } else {
    displayPrice = `${item.price1.toFixed(2)} лв/парче`;
  }

  return {
    id: item.id,
    title: title,
    sizes: sizes,
    displayPrice: displayPrice,
    img: item.img
  };
});
