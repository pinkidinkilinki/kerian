// catalogue_daily.js — Standalone data for today's cakes
const rawData = [
{ id: "M001", price1: 4.6 ,price2: 2.3, title_sizes: "Торта с пари декорация - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1767533260/IMG_20251018_141850679_wxtpej.webp", category: "daily" },
{ id: "M002", price1: 4 ,price2: 2, title_sizes: "Фотодекорация Кристиано Роналдо - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1767533260/IMG_20251227_123412796_o67zn8.webp", category: "daily" },
{ id: "M003", price1: 4 ,price2: 2, title_sizes: "Торта Гараш класическа - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776921420/3_pbsix9.webp", category: "daily" },
{ id: "M004", price1: 5.2 ,price2: 2.6, title_sizes: "Празнична торта с макарони - 25 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776921420/1_ms8put.webp", category: "daily" },
{ id: "M005", price1: 5.2 ,price2: 2.6, title_sizes: "Торта цифра с коли детска - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776921423/2_lrcp8b.webp", category: "daily" },
{ id: "M006", price1: 4.6 ,price2: 2.3, title_sizes: "Торта Дантела с рози - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952818/4_copy_wsbpvv.webp", category: "daily" },
{ id: "M007", price1: 4.2 ,price2: 2.1, title_sizes: "Брауни кекс шоколадов - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952817/30_copy_bodkg4.webp", category: "daily" },
{ id: "M008", price1: 4 ,price2: 2, title_sizes: "Фотодекорация рок група по снимка - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952810/19_copy_arx1l0.webp", category: "daily" },
{ id: "M009", price1: 5.2 ,price2: 2.6, title_sizes: "Торта Подарък - 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952805/6_copy_k1dhbl.webp", category: "daily" },
{ id: "M010", price1: 5.2 ,price2: 2.6, title_sizes: "Сандъче с пари и бял шоколад - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952807/10_copy_ygpcx2.webp", category: "daily" },
{ id: "M011", price1: 4 ,price2: 2, title_sizes: "Фотодекорация Лило и Стич детска - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952805/5_copy_w4gscs.webp", category: "daily" },
{ id: "M012", price1: 5.2 ,price2: 2.6, title_sizes: "Торта розови феи с фигурки и макарони - 25 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952814/24_copy_wsqwmw.webp", category: "daily" },
{ id: "M013", price1: 4 ,price2: 2, title_sizes: "Фотодекорация Адвенчър Тайм с плодове - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952808/12_copy_emzzqj.webp", category: "daily" },
{ id: "M014", price1: 4 ,price2: 2, title_sizes: "Фотодекорация Пес Патрул детска - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952806/8_copy_zdakfr.webp", category: "daily" },
{ id: "M015", price1: 4 ,price2: 2, title_sizes: "Фотодекорация Тик Ток - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952809/15_copy_hn1znh.webp", category: "daily" },






  // Add more via Excel formula below
];

// Process rawData into ready-to-render dailyCakes
const dailyCakes = rawData.map(item => {
  const parts = item.title_sizes.split(" - ");
  const title = parts[0].trim();
  let sizes = parts.length > 1 ? parts[1].trim() : "по запитване";

  sizes = sizes.replace(/\+/g, ' и повече парчета');  // "16 +" → "16 и повече парчета"
  sizes = sizes.replace(/^(\d+)$/, '$1 парчета');      // "16" → "16 парчета"

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
