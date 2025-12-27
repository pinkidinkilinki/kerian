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
{ id: "А011", price1: 4.5 ,price2: 2.3, title_sizes: "Баскетболна топка - 16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a011_a019-1_ii29s5.webp", category: "detski" },
{ id: "А012", price1: 4.5 ,price2: 2.3, title_sizes: "Бебе - бяла - 16,20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a012-2_yniu7z.webp", category: "detski" },
{ id: "А013", price1: 4.5 ,price2: 2.3, title_sizes: "Бъгс - бъни - 25", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614795/a013-1_h29cju.webp", category: "detski" },
{ id: "А014", price1: 4.5 ,price2: 2.3, title_sizes: "Червената шапчица - 20, 30 + фотодекорация", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614795/a014-1_cxm2rn.webp", category: "detski" },
{ id: "А015", price1: 4.5 ,price2: 2.3, title_sizes: "Цирк - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614796/a015-2_lcojos.webp", category: "detski" },
{ id: "А016", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А017", price1: 4.5 ,price2: 2.3, title_sizes: "Дафи - Дък - 18", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614796/a017-1_a9zyec.webp", category: "detski" },
{ id: "А018", price1: 4.5 ,price2: 2.3, title_sizes: "Еврофутбол - 16,20 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614797/a018-2_boqg5q.webp", category: "detski" },
{ id: "А019", price1: 4.5 ,price2: 2.3, title_sizes: "Футболна топка -16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614794/a011_a019-1_ii29s5.webp", category: "detski" },
{ id: "А020", price1: 4.5 ,price2: 2.3, title_sizes: "Футболно игрище - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614798/a020-2_zc3bdb.webp", category: "detski" },
{ id: "А021", price1: 4.5 ,price2: 2.3, title_sizes: "Балерина - двойна - 40 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614797/a021-2_sczdjn.webp", category: "detski" },
{ id: "А022", price1: 4.5 ,price2: 2.3, title_sizes: "Горска приказка - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614797/a022-2_ajvgyo.webp", category: "detski" },
{ id: "А023", price1: 4.5 ,price2: 2.3, title_sizes: "Горски кът - 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614798/a023-2_wrdppl.webp", category: "detski" },
{ id: "А024", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А025", price1: 4.5 ,price2: 2.3, title_sizes: "Холидей - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614800/a025-1_y2pf64.webp", category: "detski" },
{ id: "А026", price1: 4.5 ,price2: 2.3, title_sizes: "Китара 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614801/a026-1_tjs48x.webp", category: "detski" },
{ id: "А027", price1: 4.5 ,price2: 2.3, title_sizes: "Книга с Кирил и Методий(фотодекорация) - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614801/a027-1_pi68gu.webp", category: "detski" },
{ id: "А028", price1: 4.5 ,price2: 2.3, title_sizes: "Книга - 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614801/a028-2_ay2rur.webp", category: "detski" },
{ id: "А029", price1: 4.5 ,price2: 2.3, title_sizes: "Кола - 18", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614801/a029-1_hyb9x7.webp", category: "detski" },
{ id: "А030", price1: 4.5 ,price2: 2.3, title_sizes: "Колоездачи - 16, 20, 30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614801/a030-2_pph58y.webp", category: "detski" },
{ id: "А031", price1: 4.5 ,price2: 2.3, title_sizes: "Кукла - 20", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614804/a031-1_zrwphi.webp", category: "detski" },
{ id: "А032", price1: 4.5 ,price2: 2.3, title_sizes: "Лапландия - кръгла- 8,16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614804/a032-2_gav4w6.webp", category: "detski" },
{ id: "А033", price1: 4.5 ,price2: 2.3, title_sizes: "Лапландия - 20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614805/a033-2_mstrcy.webp", category: "detski" },
{ id: "А034", price1: 4.5 ,price2: 2.3, title_sizes: "Лебедово езеро - 16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614805/a034-1_pqzeix.webp", category: "detski" },
{ id: "А035", price1: 4.5 ,price2: 2.3, title_sizes: "Локомотив -18", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614805/a035-1_bke6ip.webp", category: "detski" },
{ id: "А036", price1: 4.5 ,price2: 2.3, title_sizes: "Мече със сърце синьо - 12, 18, 22,32 +(самото мече е 2 порции)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614805/a036-2_gmstam.webp", category: "detski" },
{ id: "А037", price1: 4.5 ,price2: 2.3, title_sizes: "Мече със сърце кафяво - 12, 18, 22,32 +(самото мече е 2 порции)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614809/a037-2_ef4zur.webp", category: "detski" },
{ id: "А038", price1: 4.5 ,price2: 2.3, title_sizes: "Мики Маус - 25", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614809/a038-1_ei5awm.webp", category: "detski" },
{ id: "А039", price1: 4.5 ,price2: 2.3, title_sizes: "Мотокрос - кръгла -16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614809/a039-1_qjy9hd.webp", category: "detski" },
{ id: "А040", price1: 4.5 ,price2: 2.3, title_sizes: "Мотокрос - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614809/a040-1_se6to2.webp", category: "detski" },
{ id: "А041", price1: 4.5 ,price2: 2.3, title_sizes: "Мотор - 25", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614810/a041-1_kool9o.webp", category: "detski" },
{ id: "А042", price1: 4.5 ,price2: 2.3, title_sizes: "Оазис - 8 ,16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614813/a042-1_uwafhu.webp", category: "detski" },
{ id: "А043", price1: 4.5 ,price2: 2.3, title_sizes: "Пате - 25", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614813/a043-1_d68wbl.webp", category: "detski" },
{ id: "А044", price1: 4.5 ,price2: 2.3, title_sizes: "Пчеличка - 18,25,35 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614814/a044-1_hmn9c5.webp", category: "detski" },
{ id: "А045", price1: 4.5 ,price2: 2.3, title_sizes: "Пепеляшка с каляска - 25,35 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614814/a045-1_o0tlrl.webp", category: "detski" },
{ id: "А046", price1: 4.5 ,price2: 2.3, title_sizes: "Пеперуда - 18 ", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614814/a046-1_hzjsl7.webp", category: "detski" },
{ id: "А047", price1: 4.5 ,price2: 2.3, title_sizes: " ", img: "", category: "detski" },
{ id: "А048", price1: 4.5 ,price2: 2.3, title_sizes: "Плаж - 20,30 + ", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614819/a048-1_vhayih.webp", category: "detski" },
{ id: "А049", price1: 4.5 ,price2: 2.3, title_sizes: "Портфейл - 20 ,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614819/a049-1_yjqzo4.webp", category: "detski" },
{ id: "А050", price1: 4.5 ,price2: 2.3, title_sizes: "Пожарна - 16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765614819/a050-1_doczsw.webp", category: "detski" },
{ id: "А051", price1: 4.5 ,price2: 2.3, title_sizes: "Принцеса - 16 ,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705515/a051-1_fcidl2.webp", category: "detski" },
{ id: "А052", price1: 4.5 ,price2: 2.3, title_sizes: "Пролет - 16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705516/a052-1_udyuse.webp", category: "detski" },
{ id: "А053", price1: 4.5 ,price2: 2.3, title_sizes: "Пънче - 25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705516/a053-1_t5y0jp.webp", category: "detski" },
{ id: "А054", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А055", price1: 4.5 ,price2: 2.3, title_sizes: "Рали - 16 ,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705517/a055-1_a02gmx.webp", category: "detski" },
{ id: "А056", price1: 4.5 ,price2: 2.3, title_sizes: "Регата - 16 ,20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705517/a056-1_vtu0zi.webp", category: "detski" },
{ id: "А057", price1: 4.5 ,price2: 2.3, title_sizes: "Резерват - 16 ,20 ,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705518/a057-1_qbjwqe.webp", category: "detski" },
{ id: "А058", price1: 4.5 ,price2: 2.3, title_sizes: "Рибар с риба- 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705518/a058-1_mycvkl.webp", category: "detski" },
{ id: "А059", price1: 4.5 ,price2: 2.3, title_sizes: "Русалка - 8,16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705519/a059-1_u6doma.webp", category: "detski" },
{ id: "А060", price1: 4.5 ,price2: 2.3, title_sizes: "Съкровище - 20,30 +", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705520/a060-1_ivn8lz.webp", category: "detski" },
{ id: "А061", price1: 4.5 ,price2: 2.3, title_sizes: "Секси - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705521/a061-1_lnl0in.webp", category: "detski" },
{ id: "А062", price1: 4.5 ,price2: 2.3, title_sizes: "Скейтъри - 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705522/a062-1_s5ljed.webp", category: "detski" },
{ id: "А063", price1: 4.5 ,price2: 2.3, title_sizes: "Скиори-кръгла - 8,16", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705522/a063_a064-1_so09gx.webp", category: "detski" },
{ id: "А064", price1: 4.5 ,price2: 2.3, title_sizes: "Скиори- 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705522/a063_a064-1_so09gx.webp", category: "detski" },
{ id: "А065", price1: 4.5 ,price2: 2.3, title_sizes: "Снежанка и седемте джуджета- 20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705523/a065-1_ttisum.webp", category: "detski" },
{ id: "А066", price1: 4.5 ,price2: 2.3, title_sizes: "Снежко - 16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705525/a066-1_bwyscf.webp", category: "detski" },
{ id: "А067", price1: 4.5 ,price2: 2.3, title_sizes: "Спайдър мен (фотодекорация) 20,30+", img: "", category: "detski" },
{ id: "А068", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А069", price1: 4.5 ,price2: 2.3, title_sizes: "Том и Джери - 20,30+  (фотодекорация)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705525/a066-1_bwyscf.webp", category: "detski" },
{ id: "А070", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А071", price1: 4.5 ,price2: 2.3, title_sizes: "Тенис корд - 16,20,30 + ", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705526/a071-2_peasei.webp", category: "detski" },
{ id: "А072", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А073", price1: 4.5 ,price2: 2.3, title_sizes: "Влакче - 25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705528/a075-1_a7xpac.webp", category: "detski" },
{ id: "А074", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А075", price1: 4.5 ,price2: 2.3, title_sizes: "Великденско зайче - 25", img: "", category: "detski" },
{ id: "А076", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А077", price1: 4.5 ,price2: 2.3, title_sizes: "Стадион - 25,35", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705529/a077-1_flgof0.webp", category: "detski" },
{ id: "А078", price1: 4.5 ,price2: 2.3, title_sizes: "Смърфове -  16, 20 ,30 +(по-малко фигури при по-малка т-та)", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705531/a078-1_xbml6c.webp", category: "detski" },
{ id: "А079", price1: 4.5 ,price2: 2.3, title_sizes: "Рибар - 16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705532/a079-1_jd05y4.webp", category: "detski" },
{ id: "А080", price1: 4.5 ,price2: 2.3, title_sizes: "", img: "", category: "detski" },
{ id: "А081", price1: 4.5 ,price2: 2.3, title_sizes: "Спонж Боб - 30,40+ няма такава за сега", img: "", category: "detski" },
{ id: "А082", price1: 4.5 ,price2: 2.3, title_sizes: "Комбинирана - 40 + ", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765705532/a079-1_jd05y4.webp", category: "detski" },

{ id: "C001", price1: 5.5 ,price2: 2.9, title_sizes: "Шоко.сватб.с оранжеви рози-30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706267/c001_xb6qab.webp", category: "svatbeni" },
{ id: "C002", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена триетажна, бял шоколад- 50", img: "", category: "svatbeni" },
{ id: "C003", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена триетажна сметанова -50+", img: "", category: "svatbeni" },
{ id: "C004", price1: 5.5 ,price2: 2.9, title_sizes: "Бяла сватбена - 30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706267/c004_urpl0r.webp", category: "svatbeni" },
{ id: "C005", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена със сини рози- 30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706269/c005_fbafbd.webp", category: "svatbeni" },
{ id: "C006", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена правоъгълна-20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706272/c006_vqqx0q.webp", category: "svatbeni" },
{ id: "C007", price1: 5.5 ,price2: 2.9, title_sizes: "Малка сватбена-16,20,30+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706273/c007_qu9gq8.webp", category: "svatbeni" },
{ id: "C008", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена с жълти рози-30,40+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706274/c008_jqagfd.webp", category: "svatbeni" },
{ id: "C009", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена -светли рози-30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706278/c009_rxiavs.webp", category: "svatbeni" },
{ id: "C010", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена-двуетажна-25", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706278/c010_uyquoi.webp", category: "svatbeni" },
{ id: "C011", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена сърцевидна бяла-30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706279/c011_erqb3r.webp", category: "svatbeni" },
{ id: "C012", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена с червени рози -30,50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706283/c012_scdcc9.webp", category: "svatbeni" },
{ id: "C013", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена Сърце бяла 20.30.50+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706284/c013_x5riow.webp", category: "svatbeni" },
{ id: "C014", price1: 5.5 ,price2: 2.9, title_sizes: "Мечета се женат", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706286/c014_f2anea.webp", category: "svatbeni" },
{ id: "C015", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбено пътешествие", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706289/c015_vzoinn.webp", category: "svatbeni" },
{ id: "C016", price1: 5.5 ,price2: 2.9, title_sizes: "Две сърца с халки", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706289/c016_y15rgs.webp", category: "svatbeni" },
{ id: "C017", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 16,25,35+", img: "", category: "svatbeni" },
{ id: "C018", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 12,16,25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706291/c018_li2col.webp", category: "svatbeni" },
{ id: "C019", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 12,16,25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706294/c019_hcbwva.webp", category: "svatbeni" },
{ id: "C020", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 12,16,25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706295/c020_xdids3.webp", category: "svatbeni" },
{ id: "C021", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 12,16,25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706297/c021_jsccqy.webp", category: "svatbeni" },
{ id: "C022", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706300/c022_fwnr6h.webp", category: "svatbeni" },
{ id: "C023", price1: 5.5 ,price2: 2.9, title_sizes: "Сватбена 16,25,35+", img: "https://res.cloudinary.com/dsn8jkh0o/image/upload/v1765706301/c023_njdgvr.webp", category: "svatbeni" },

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

    const priceLeva = item.price1;  // leva per piece
    const priceEuro = item.price2;  // euro per piece

    // Extract numbers reliably
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
    }

    return {
      id: item.id,
      title: title,
      category: item.category || "detski",
      priceLeva: priceLeva,
      priceEuro: priceEuro,
      sizes: sizes,
      minPriceLeva: minPriceLeva ? `${minPriceLeva} лв` : "по запитване",
      minPriceEuro: minPriceEuro ? `${minPriceEuro} €` : "по запитване",
      displayText: displayText,
      img: item.img
    };
  });
