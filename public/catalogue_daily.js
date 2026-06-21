// catalogue_daily.js — Standalone data for today's cakes
const rawData = [
{ id: "M001", price1: 4.5 ,price2: 2.3, title_sizes: "Торта с пари декорация - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1767533260/IMG_20251018_141850679_wxtpej.webp", category: "daily" },
{ id: "M002", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Кристиано Роналдо - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1767533260/IMG_20251227_123412796_o67zn8.webp", category: "daily" },
{ id: "M003", price1: 3.9 ,price2: 2, title_sizes: "Торта Гараш класическа - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776921420/3_pbsix9.webp", category: "daily" },
{ id: "M004", price1: 5.1 ,price2: 2.6, title_sizes: "Празнична торта с макарони - 25 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776921420/1_ms8put.webp", category: "daily" },
{ id: "M005", price1: 5.1 ,price2: 2.6, title_sizes: "Торта цифра с коли детска - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776921423/2_lrcp8b.webp", category: "daily" },
{ id: "M006", price1: 4.5 ,price2: 2.3, title_sizes: "Торта Дантела с рози - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952818/4_copy_wsbpvv.webp", category: "daily" },
{ id: "M007", price1: 4.1 ,price2: 2.1, title_sizes: "Брауни кекс шоколадов - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952817/30_copy_bodkg4.webp", category: "daily" },
{ id: "M008", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация рок група по снимка - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952810/19_copy_arx1l0.webp", category: "daily" },
{ id: "M009", price1: 5.1 ,price2: 2.6, title_sizes: "Торта Подарък - 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952805/6_copy_k1dhbl.webp", category: "daily" },
{ id: "M010", price1: 5.1 ,price2: 2.6, title_sizes: "Сандъче с пари и бял шоколад - 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952807/10_copy_ygpcx2.webp", category: "daily" },
{ id: "M011", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Лило и Стич детска - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952805/5_copy_w4gscs.webp", category: "daily" },
{ id: "M012", price1: 5.1 ,price2: 2.6, title_sizes: "Торта розови феи с фигурки и макарони - 25 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952814/24_copy_wsqwmw.webp", category: "daily" },
{ id: "M013", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Адвенчър Тайм с плодове - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952808/12_copy_emzzqj.webp", category: "daily" },
{ id: "M014", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Пес Патрул детска - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952806/8_copy_zdakfr.webp", category: "daily" },
{ id: "M015", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Тик Ток - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952809/15_copy_hn1znh.webp", category: "daily" },
{ id: "M016", price1: 5.1 ,price2: 2.6, title_sizes: "Торта млечен шоколад с малини - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952805/7_copy_yyxuxo.webp", category: "daily" },
{ id: "M017", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Лило и Стич детска - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952807/11_copy_aujkpu.webp", category: "daily" },
{ id: "M018", price1: 5.1 ,price2: 2.6, title_sizes: "Торта кръщене бебе синя - 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952815/26_copy_km3n9g.webp", category: "daily" },
{ id: "M019", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация ММА бойни спортове - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952816/27_copy_xglam9.webp", category: "daily" },
{ id: "M020", price1: 4.5 ,price2: 2.3, title_sizes: "Торта ягодово парфе - 14", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952816/29_copy_naw6ro.webp", category: "daily" },
{ id: "M021", price1: 4.5 ,price2: 2.3, title_sizes: "Торта мотокрос с фигурки детска - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952806/9_copy_whn3zo.webp", category: "daily" },
{ id: "M022", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Стич сърце - 12, 16, 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952808/14_copy_jwjvi3.webp", category: "daily" },
{ id: "M023", price1: 5.1 ,price2: 2.6, title_sizes: "Торта Джак и Бен -  20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952818/31_copy_nsqsr3.webp", category: "daily" },
{ id: "M024", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Роналдо сърце - 16, 20, 30 + ", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952813/23_copy_eehncw.webp", category: "daily" },
{ id: "M025", price1: 5.1 ,price2: 2.6, title_sizes: "Шоколадова торта лилави рози - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952812/21_copy_ipt0jc.webp", category: "daily" },
{ id: "M026", price1: 4.5 ,price2: 2.3, title_sizes: "Празнична торта с цветни рози - 16, 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952808/13_copy_auwvbz.webp", category: "daily" },
{ id: "M027", price1: 5.1 ,price2: 2.6, title_sizes: "Торта шаран риба - 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952811/20_copy_ba7geu.webp", category: "daily" },
{ id: "M028", price1: 4.5 ,price2: 2.3, title_sizes: "Малка шоколадова торта - 8, 12, 16,20+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952816/28_copy_kpffqq.webp", category: "daily" },
{ id: "M029", price1: 3.9 ,price2: 2, title_sizes: "Фотодекорация Лило и Стич детска - 16 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952811/17_copy_s888vs.webp", category: "daily" },
{ id: "M030", price1: 4.5 ,price2: 2.3, title_sizes: "Торта Маркиза класическа - 12, 16 , 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952810/16_copy_nypz2k.webp", category: "daily" },
{ id: "M031", price1: 4.5 ,price2: 2.3, title_sizes: "Шоколадова торта Love романтична - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952814/25_copy_cbvfil.webp", category: "daily" },
{ id: "M032", price1: 5.1 ,price2: 2.6, title_sizes: "Празнична торта бели и кафеви рози - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952812/18_copy_ggtxlz.webp", category: "daily" },
{ id: "M033", price1: 4.5 ,price2: 2.3, title_sizes: "Торта Евро футбол фотодекорация - 12,16, 20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1776952813/22_copy_avo99j.webp", category: "daily" },






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
