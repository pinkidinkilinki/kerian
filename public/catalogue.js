// catalogue.js - Full updated version with category support
// Add your full data to rawData array. Categories are now included.
// For new items from Excel: Add category field like "detski", "praznichni", etc.

const PRICE_PER_PIECE_LEVA = "4.50 лева";
const PRICE_PER_PIECE_EURO = "2.30 euro";

const rawData = [
  { id: "А001", title_sizes: "Джунгла - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765208929/1_wj7avy.webp", category: "detski" },
  { id: "А002", title_sizes: "Аутобан - 40,50 + (колата остава същия размер - форма)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765208929/2_lu8amn.webp", category: "detski" },
  { id: "А003", title_sizes: "Автомобил - 18", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a003-1_zf9q0g.webp", category: "detski" },
  { id: "А004", title_sizes: "Аквариум - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a004-1_qhpmka.webp", category: "detski" },
  { id: "А005", title_sizes: "Балерина-кръгла - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a005-1_nkav8y.webp", category: "detski" },
  { id: "А006", title_sizes: "Балерина - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a006-1_hjkdix.webp", category: "detski" },
  { id: "А007", title_sizes: "Барби - 16, 20 ,30,40", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a007-3_sifeaj.webp", category: "detski" },
  { id: "А008", title_sizes: "Басейн - 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a008-1_wgmykv.webp", category: "detski" },
  { id: "А009", title_sizes: "Бебе - 20, 30", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a009-1_tc6r31.webp", category: "detski" },
  { id: "А010", title_sizes: "Баскетболно игрище - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a010-1_heggnh.webp", category: "detski" },
  { id: "А011", title_sizes: "Баскетболна топка - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a011_a019-1_ii29s5.webp", category: "detski" }
  // Paste more here with category, e.g., { id: "B001", ..., category: "praznichni" }
];

const cakes = rawData.map(item => {
  const parts = item.title_sizes.split(" - ");
  const title = parts[0].trim();
  const sizesRaw = parts.length > 1 ? parts[1].trim() : "по запитване";
  const sizes = sizesRaw
    .replace(/,/g, ', ') 
    .replace(/\s+/g, ' ') 
    .replace(/\+/g, ' и повече');

  return {
    id: item.id,
    title: title,
    category: item.category || "detski",
    price: PRICE_PER_PIECE_LEVA,
    price2: PRICE_PER_PIECE_EURO,
    sizes: sizes,
    img: item.img
  };
});
