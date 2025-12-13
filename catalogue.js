// ==== GLOBAL CONFIG – CHANGE PRICES HERE ONLY ====
const PRICE_PER_PIECE_LEVA = "4.50 лева";   // standard price
const PRICE_PER_PIECE_EURO = "2.30 euro";
// ===============================================

const rawData = [
 { id: "А001", price: "4.5 лева", title_sizes: "Джунгла - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765208929/1_wj7avy.webp", category: "detski" },
  { id: "А002", price: "4.5 лева", title_sizes: "Аутобан - 40,50 + (колата остава същия размер - форма)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765208929/2_lu8amn.webp", category: "detski" },
  { id: "А003", price: "4.5 лева", title_sizes: "Автомобил - 18", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a003-1_zf9q0g.webp", category: "detski" },
  { id: "А004", price: "4.5 лева", title_sizes: "Аквариум - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a004-1_qhpmka.webp", category: "detski" },
  { id: "А005", price: "4.5 лева", title_sizes: "Балерина-кръгла - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a005-1_nkav8y.webp" , category: "detski"},
  { id: "А006", price: "4.5 лева", title_sizes: "Балерина - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a006-1_hjkdix.webp" , category: "detski"},
  { id: "А007", price: "4.5 лева", title_sizes: "Барби - 16, 20, 30,40", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a007-3_sifeaj.webp", category: "detski"},
  { id: "А008", price: "4.5 лева", title_sizes: "Басейн - 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a008-1_wgmykv.webp" , category: "detski"},
  { id: "А009", price: "4.5 лева", title_sizes: "Бебе - 20, 30", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a009-1_tc6r31.webp", category: "detski" },
  { id: "А010", price: "4.5 лева", title_sizes: "Баскетболно игрище - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614793/a010-1_heggnh.webp", category: "detski" },
  { id: "А011", price: "4.5 лева", title_sizes: "Баскетболна топка - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a011_a019-1_ii29s5.webp", category: "detski" }
];

const cakes = rawData.map(item => {
  const parts = item.title_sizes.split(" - ");
  const title = parts[0].trim();
  const sizes = parts.length > 1 ? parts[1].trim() : "по запитване";

  return {
    id: item.id,
    title: title,
    category: item.category || "detski",  // Default if missing
    price: PRICE_PER_PIECE_LEVA,
    price2: PRICE_PER_PIECE_EURO,
    sizes: sizes.replace(/,/g, ', '),
    img: item.img
  };
});
