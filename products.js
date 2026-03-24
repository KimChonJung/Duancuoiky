const products = [
  {
    id: 1,
    name: "Chuột Razer Viper Mini",
    price: 890000,
    brand: "Razer",
    image: "hinh-anh/4200_50505_chuot_viper_mini_nasa_packaging_rz01_03250100_r3u1_4.jpg"
    
  },
  {
    id: 2,
    name: "Chuột Razer DeathAdder V2",
    price: 890000,
    brand: "Razer",
    image: "hinh-anh/17238-chu---t-razer-deathadder-v2-3.jpg"
  },
  {
    id: 3,
    name: "Chuột Razer Basilisk V3",
    price: 890000,
    brand: "Razer",
    image: "hinh-anh/ezgif-4-a7f64eab1e_009bcad4a7e94b7f86c557cd5de29d4d_grande.png "
  },
  {
    id: 4,
    name: "Chuột Razer Naga X",
    price: 890000,
    brand: "Razer",
    image: "hinh-anh/razer-naga-x-programmable-button.jpg"
  },
  {
    id: 5,
    name: "Chuột Razer Orochi V2",
    price: 1090000,
    brand: "Razer",
    image: "hinh-anh/image_29.webp "
  },
  {
    id: 6,
    name: "Bàn phím Razer Huntsman Mini",
    price: 2490000,
    brand: "Razer",
    image: "hinh-anh/razer-huntsman-mini-2020-usp-form-factors-mobile.jpg "
  },
  {
    id: 7,
    name: "Bàn phím Razer BlackWidow V3",
    price: 2290000,
    brand: "Razer",
    image: "hinh-anh/0001_httpshybrismediaprod.blob.core.w_1__3.jpg "
  },
  {
    id: 8,
    name: "Bàn phím Razer Cynosa V2",
    price: 1090000,
    brand: "Razer",
    image: "hinh-anh/banphim-razer-cynosa-v2-(2).jpg"
  },
  {
    id: 9,
    name: "Bàn phím Razer Pro Type Ultra",
    price: 3090000,
    brand: "Razer",
    image: "hinh-anh/zRGfteZp7iLVQ5QCRwX2jn.jpg"
  },
  {
    id: 10,
    name: "Bàn phím Razer Huntsman Elite",
    price: 3290000,
    brand: "Razer",
    image: "hinh-anh/maxresdefault.jpg"
  },
  {
    id: 11,
    name: "Chuột Razer Viper Ultimate",
    price: 2690000,
    brand: "Razer",
    image: "hinh-anh/4190_37426_viper_ultimate_ha4.jpg"
  },
  {
    id: 12,
    name: "Chuột Razer Mamba Wireless",
    price: 1990000,
    brand: "Razer",
    image: "hinh-anh/Mamba-Wireless-2018-Setup-Still-Life-Shoot-Gholiathus-Chroma-Blackwidow-Elite-Kraken-TE-Spatial-Chroma-5.png"
  },
  {
    id: 13,
    name: "Chuột Razer Atheris",
    price: 890000,
    brand: "Razer",
    image: "hinh-anh/81fe607724f04ae30c5fed1baf0a3e7a.jpg_960x960q80.jpg_.webp"
  },
  {
    id: 14,
    name: "Chuột Razer Tartarus Pro",
    price: 2590000,
    brand: "Razer",
    image: "hinh-anh/9973a7bc718c5fe1d21b41c2ac4b3e90.jpg"
  },
  {
    id: 15,
    name: "Chuột Razer Ornata V3",
    price: 1590000,
    brand: "Razer",
    image: "hinh-anh/razer-ornata-v3-00.webp"
  },
  {
    id: 16,
    name: " Chuột Logitech G Pro X Superlight",
    price: 2990000,
    brand: "Logitech",
    image: "hinh-anh/39c641f4c3e7c724e9a83e15d85bc245.jpg"
  },
  {
    id: 17,
    name: "Chuột Logitech G502 Hero",
    price: 1390000,
    brand: "Logitech",
    image: "hinh-anh/890bb4e9f46db2e4ea3bef9c15ea7d8a.jpg"
  },
  {
    id: 18,
    name: "Chuột Logitech G304",
    price: 890000,
    brand: "Logitech",
    image: "hinh-anh/sg-11134201-22100-cishggrmcriv0c.jpg"
  },
  {
    id: 19,
    name: "Chuột Logitech G703 Lightspeed",
    price: 1990000,
    brand: "Logitech",
    image: "hinh-anh/dec115de8284f431bcfb1bc946fe6fb8.jpg"
  },
  {
    id: 20,
    name: "Chuột Logitech G903 Hero",
    price: 2790000,
    brand: "Logitech",
    image: "hinh-anh/c8a5027472f4e974038f4be9c2badea5.jpg"
  },
  {
    id: 21,
    name: "Chuột Logitech MX Master 3S",
    price: 2690000,
    brand: "Logitech",
    image: "hinh-anh/chuot-bluetooth-logitech-mx-master-3s-for-mac-xam-600x600.jpg"
  },
  {
    id: 22,
    name: "Bàn phím Logitech G Pro Keyboard",
    price: 2290000,
    brand: "Logitech",
    image: "hinh-anh/hASiAWCatV66a4UH9Xs3JA.jpg"
  },
  {
    id: 23,
    name: "Bàn phím Logitech G213",
    price: 990000,
    brand: "Logitech",
    image: "hinh-anh/vn-11134207-7r98o-lx8frs7c22mz7a.jpg"
  },
  {
    id: 24,
    name: "Bàn phím Logitech MX Keys",
    price: 2790000,
    brand: "Logitech",
    image: "hinh-anh/sg-11134201-22100-cy91m5rylliv4c.jpg"
  },
  {
    id: 25,
    name: "Bàn phím Logitech K835 TKL",
    price: 1090000,
    brand: "Logitech",
    image: "hinh-anh/gaming_8_12_.webp"
  },
  {
    id: 26,
    name: "Bàn phím Logitech G915 TKL",
    price: 3790000,
    brand: "Logitech",
    image: "hinh-anh/vn-11134207-7ras8-m0z8hq2bqlnf89.jpg"
  },
  {
    id: 27,
    name: "Bàn phím Logitech G512",
    price: 1990000,
    brand: "Logitech",
    image: "hinh-anh/a351ed13a3834e9b443fdbc8e62bd5f2.jpg"
  },
  {
    id: 28,
    name: "Bàn phím Logitech K480",
    price: 690000,
    brand: "Logitech",
    image: "hinh-anh/ca613cd2a0ea691e96ec4b5706b54c5c-png.jpg"
  },
  {
    id: 29,
    name: "Bàn phím Logitech POP Keys",
    price: 1990000,
    brand: "Logitech",
    image: "hinh-anh/vn-11134207-7ra0g-m7ivfokqevwcca.jpg"
  },
  {
    id: 30,
    name: "Bàn phím Logitech K580 Slim",
    price: 790000,
    brand: "Logitech",
    image: "hinh-anh/32ad40304d3b26d6cafdbf1c67e6145d.jpg"
  },
  {
    id: 31,
    name: "Bàn phím Corsair K65 RGB Mini",
    price: 2290000,
    brand: "Corsair",
    image: "hinh-anh/k65-mini.jpg2_.webp"
  },
  {
    id: 32,
    name: "Bàn phím Corsair K70 RGB TKL",
    price: 2590000,
    brand: "Corsair",
    image: "hinh-anh/b0l19mgx6men5.jpg"
  },
  {
    id: 33,
    name: "Bàn phím Corsair Harpoon RGB Pro",
    price: 790000,
    brand: "Corsair",
    image: "hinh-anh/86519177.webp"
  },
  {
    id: 34,
    name: "Bàn phím Corsair Dark Core RGB Pro",
    price: 2790000,
    brand: "Corsair",
    image: "hinh-anh/CORSAIR-DARK-CORE-RGB-PRO-Wireless-Gaming-Mouse-9.jpg"
  },
  {
    id: 35,
    name: "Chuột Corsair Ironclaw RGB",
    price: 1490000,
    brand: "Corsair",
    image: "hinh-anh/unnamed.jpg"
  },
  {
    id: 36,
    name: "Chuột Corsair Sabre RGB Pro",
    price: 1690000,
    brand: "Corsair",
    image: "hinh-anh/saber_rgb_a03e2e61bfc74fc984cb64d4a3e5a611.jpg"
  },
  {
    id: 37,
    name: "Corsair K100 RGB",
    price: 4990000,
    brand: "Corsair",
    image: "hinh-anh/smal-pp-gallery_top.jpg"
  },
  {
    id: 38,
    name: "Corsair K55 RGB",
    price: 1390000,
    brand: "Corsair",
    image: "hinh-anh/main.webp"
  },
  {
    id: 39,
    name: "Corsair Strafe RGB MK.2",
    price: 2790000,
    brand: "Corsair",
    image: "hinh-anh/FullSizeRender-1-copy.webp"
  },
  {
    id: 40,
    name: "Chuột Corsair M65 RGB Elite",
    price: 1590000,
    brand: "Corsair",
    image: "hinh-anh/M65 RGB.jpg"
  },
  {
    id: 41,
    name: "Chuột Corsair Scimitar RGB Elite",
    price: 2190000,
    brand: "Corsair",
    image: "hinh-anh/1402_co1.jpg"
  },
  {
    id: 42,
    name: "Corsair K68 RGB",
    price: 2390000,
    brand: "Corsair",
    image: "hinh-anh/unnamed.png"
  },
  {
    id: 43,
    name: "Corsair K60 RGB Pro",
    price: 1890000,
    brand: "Corsair",
    image: "hinh-anh/Corsair K60 PRO SE-Mx VIOLA-RGB Led 3(1).png"
  },
  {
    id: 44,
    name: "Corsair HS60 Pro",
    price: 1790000,
    brand: "Corsair",
    image: "hinh-anh/screenshot_1650716390_5f4d9768c10b43018e99231628253430_master.png"
  },
  {
    id: 45,
    name: "Chuột Corsair M55 RGB Pro",
    price: 1090000,
    brand: "Corsair",
    image: "hinh-anh/chuot-gaming-corsair-m55-rgb-pro-den-thumb1-600x600.jpeg"
  },
  {
    id: 46,
    name: "Bàn phím Akko 3068B Neon",
    price: 1490000,
    brand: "Akko",
    image: "hinh-anh/ban-phim-co-akko-3068b-plus-prunus-lannesiana-10-1.jpg"
  },
  {
    id: 47,
    name: "Bàn phím Akko 5075B Plus",
    price: 1690000,
    brand: "Akko",
    image: "hinh-anh/BlackCyan-5075B-Plus-XQ1.jpg"
  },
  {
    id: 48,
    name: "Bàn phím Akko 3108 DS Matcha",
    price: 1390000,
    brand: "Akko",
    image: "hinh-anh/Sc71aea1670134c34b9cd87e563e285571.jpg_640x640q90.webp"
  },
  {
    id: 49,
    name: "Bàn phím Akko Alice Plus",
    price: 1890000,
    brand: "Akko",
    image: "hinh-anh/acr-pro-alice-plus-xq1.jpg"
  },
  {
    id: 50,
    name: "Bàn phím Akko 3084B Plus",
    price: 1590000,
    brand: "Akko",
    image: "hinh-anh/3084B-BlackPink-XQ1.jpg"
  },
  {
    id: 51,
    name: "Bàn phím Akko SP Ocean Star",
    price: 1490000,
    brand: "Akko",
    image: "hinh-anh/3da44c97ce8c50fe7b908ff5514180ca.jpg_720x720q80.jpg"
  },
  {
    id: 52,
    name: "Bàn phím Akko SP World Tour Tokyo",
    price: 1690000,
    brand: "Akko",
    image: "hinh-anh/thumb-danh-gia-chi-tiet-akko-5108-world-tour-tokyo-r2-sp.jpg"
  },
  {
    id: 53,
    name: "Bàn phím Akko 3098B Black",
    price: 1590000,
    brand: "Akko",
    image: "hinh-anh/ban-phim-co-akko-3098b-multi-modes-black-cyan-1.jpg"
  },
  {
    id: 54,
    name: "Bàn phím Akko Acr Pro 68",
    price: 1790000,
    brand: "Akko",
    image: "hinh-anh/ACR-Pro-68-Akko-Official-Global-Site.webp"
  },
  {
    id: 55,
    name: "Bàn phím Akko 3061S",
    price: 1290000,
    brand: "Akko",
    image: "hinh-anh/gearvn-ban-phim-co-akko3061s-neon-rgb-bluetooth-5-0-gateron-switch-01_296703dd2ea24d279e1f8e0a851d6328.jpg"
  },
  {
    id: 56,
    name: "Bàn phím Keychron K6",
    price: 1990000,
    brand: "Keychron",
    image: "hinh-anh/keychron-k6-pro-32.webp"
  },
  {
    id: 57,
    name: " ",
    price: 2990000,
    brand: "Keychron",
    image: "hinh-anh/design-medium.jpg"
  },
  {
    id: 58,
    name: "Bàn phím Keychron V1",
    price: 1890000,
    brand: "Keychron",
    image: "hinh-anh/keychron-v1-3.webp"
  },
  {
    id: 59,
    name: "Bàn phím Keychron K2",
    price: 2090000,
    brand: "Keychron",
    image: "hinh-anh/Bàn-Phím-Cơ-KEYCHRON-K2-bản-nhôm-Led-RGB1.jpeg"
  },
  {
    id: 60,
    name: "Bàn phím Keychron K3",
    price: 1890000,
    brand: "Keychron",
    image: "hinh-anh/ban-phim-keychron-k3m-b1-k3-max-gateron-rgb-backlight-red-switch1.jpg"
  },
  {
    id: 61,
    name: "Bàn phím Keychron K10",
    price: 2290000,
    brand: "Keychron",
    image: "hinh-anh/1-6.jpg"
  },
  {
    id: 62,
    name: "Bàn phím Keychron C1",
    price: 990000,
    brand: "Keychron",
    image: "hinh-anh/Keychron-C1-Pro-QMK-VIA-Wired-Mechanical-Keyboard-2.jpg"
  },
  {
    id: 63,
    name: "Bàn phím Keychron Q3",
    price: 3190000,
    brand: "Keychron",
    image: "hinh-anh/Keychron-Q3-6_2703c38a-ff21-4f0c-891b-1c021bc0643b.jpg"
  },
  {
    id: 64,
    name: "Bàn phím Keychron Q5",
    price: 3490000,
    brand: "Keychron",
    image: "hinh-anh/hq720.jpg"
  },
  {
    id: 65,
    name: "Bàn phím Keychron K8",
    price: 2190000,
    brand: "Keychron",
    image: "hinh-anh/keychron-k8-pro-phukienmaytinhvn-12-1024x1024.webp"
  },
  {
    id: 66,
    name: "Chuột SteelSeries Rival 3",
    price: 690000,
    brand: "SteelSeries",
    image: "hinh-anh/4_09b6ef4ff1ea469baa8c49eea2fa73d2_master.jpg"
  },
  {
    id: 67,
    name: "Chuột SteelSeries Sensei Ten",
    price: 1590000,
    brand: "SteelSeries",
    image: "hinh-anh/buyimg_senseiten_001.jpg__1920x1080_q100_crop-fit_optimize_subsampling-2-872.webp"
  },
  {
    id: 68,
    name: "Chuột SteelSeries Prime Wireless",
    price: 2790000,
    brand: "SteelSeries",
    image: "hinh-anh/steelseries-prime-wireless-mouse.webp"
  },
  {
    id: 69,
    name: "Chuột SteelSeries Aerox 3",
    price: 1690000,
    brand: "SteelSeries",
    image: "hinh-anh/58710_chuot_steelseries_aerox_3_den_usb_rgb_62599_0001_5.jpg"
  },
  {
    id: 70,
    name: "SteelSeries Apex 3",
    price: 1190000,
    brand: "SteelSeries",
    image: "hinh-anh/36BD36A7-14B1-42AE-88EF-C93D1671CEC7_800x600_1675494061156.avif"
  },
  {
    id: 71,
    name: "SteelSeries Apex 5",
    price: 2290000,
    brand: "SteelSeries",
    image: "hinh-anh/buyimg_apex5_001-fix.jpg__1920x1080_q100_crop-fit_optimize_subsampling-2-1000.webp"
  },
  {
    id: 72,
    name: "SteelSeries Apex Pro TKL",
    price: 3990000,
    brand: "SteelSeries",
    image: "hinh-anh/image_-_2025-04-24t123221.273_af9bf1d1eee34bb081cc61f5efcace94_master.png"
  },
  {
    id: 73,
    name: "SteelSeries Rival 600",
    price: 1890000,
    brand: "SteelSeries",
    image: "hinh-anh/Steelseries-Rival-600-side-620x348.jpg"
  },
  {
    id: 74,
    name: "Tai nghe SteelSeries Arctis 5",
    price: 2390000,
    brand: "SteelSeries",
    image: "hinh-anh/steelseries-arctis-5_29ab91034584438ea9ca4f806d1ca53c_1024x1024.png"
  },
  {
    id: 75,
    name: "Bàn phím SteelSeries Apex 7",
    price: 3590000,
    brand: "SteelSeries",
    image: "hinh-anh/ban-phim-steelseries-apex-7-(3)_optimized.jpg"
  },
  {
    id: 76,
    name: "Bàn phím E-Dra Jupiter EGC203",
    price: 2290000,
    brand: "E-Dra",
    image: "hinh-anh/52275_ghe_gamer_e_dra_hercules_egc203_pro_0001_02_9e87e57d1a194dfcb4502a58fc147636.jpg"
  },
  {
    id: 77,
    name: "Bàn phím E-Dra Hunter Pro M770",
    price: 1590000,
    brand: "E-Dra",
    image: "hinh-anh/53046_ghe_game_e_dra_hunter_gaming_chair_egc_206_0002_3.jpg"
  },
  {
    id: 78,
    name: "Bàn phím E-Dra EK387",
    price: 1090000,
    brand: "E-Dra",
    image: "hinh-anh/DSC9989.jpg"
  },
  {
    id: 79,
    name: "E-Dra EK361W",
    price: 990000,
    brand: "E-Dra",
    image: "hinh-anh/1c0114d0292b4871b00d246902458847_fd0c8909b6cf42679b708397bce121c3.jpeg"
  },
  {
    id: 80,
    name: "Chuột E-Dra EM660 Pro",
    price: 790000,
    brand: "E-Dra",
    image: "hinh-anh/51370_e_dra_em660_pro__5_.jpg"
  },
  {
    id: 81,
    name: "Bàn phím E-Dra EK3104",
    price: 1190000,
    brand: "E-Dra",
    image: "hinh-anh/6044800-blob.jpg"
  },
  {
    id: 82,
    name: "Bàn phím E-Dra EK870 RGB",
    price: 1490000,
    brand: "E-Dra",
    image: "hinh-anh/z4926569053682-6e5a7bf6cc90ef124526d8b24de9827b.webp"
  },
  {
    id: 83,
    name: "Bàn phím E-Dra EK75 Pro",
    price: 1690000,
    brand: "E-Dra",
    image: "hinh-anh/ban-phim-co-dareu-ek75-pro-chinh-hang-5.webp"
  },
  {
    id: 84,
    name: "Bàn phím E-Dra EH412",
    price: 890000,
    brand: "E-Dra",
    image: "hinh-anh/215_tai-nghe-choi-game-edra-eh412-pro-2_6ccbf5d393074ff28675bf90d7c8cf5b.png"
  }
];
function viewAllProducts() {
    // 1. Cuộn màn hình xuống phần danh sách sản phẩm mượt mà
    const productSection = document.getElementById('product-grid');
    productSection.scrollIntoView({ behavior: 'smooth' });

    // 2. Thay đổi logic hiển thị từ rút gọn sang toàn bộ 84 sản phẩm
    renderProducts('all', true); // 'true' để báo hiệu hiển thị toàn bộ
}

// Cập nhật lại hàm renderProducts để hỗ trợ xem tất cả
function renderProducts(type = 'all', showAll = false) {
    const grid = document.getElementById('product-grid');
    if (typeof products === 'undefined') return;

    // Lọc theo loại sản phẩm
    let filtered = type === 'all' 
        ? products 
        : products.filter(p => getCategory(p.name) === type);

    // Nếu không bấm "XEM SẢN PHẨM", chỉ hiện 12 cái đầu cho mượt trang chủ
    // Nếu bấm "XEM SẢN PHẨM", hiện toàn bộ 84 cái
    if (!showAll && type === 'all') {
        filtered = filtered.slice(0, 12);
    }

    grid.innerHTML = filtered.map(p => `
        <div class="bg-white p-6 rounded-[50px] border border-zinc-100 shadow-sm product-card group" data-aos="fade-up">
            <div class="bg-[#F6F6F8] rounded-[40px] aspect-square flex items-center justify-center p-14 relative overflow-hidden">
                <img src="${p.image}" class="w-full h-full object-contain transition duration-500" 
                     onerror="this.src='https://placehold.co/400x400?text=Gear+Zone'">
                <button onclick="handlePurchase(${p.id})" class="absolute bottom-5 right-5 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-500 transition shadow-2xl">
                    <i class="fa-solid fa-plus text-lg"></i>
                </button>
            </div>
            <div class="mt-8 px-2 text-left">
                <p class="text-zinc-400 text-[9px] font-black uppercase mb-2 tracking-widest">${p.brand}</p>
                <h4 class="font-black text-md uppercase italic leading-tight h-10 overflow-hidden line-clamp-2 text-zinc-800">${p.name}</h4>
                <p class="text-2xl font-black mt-4">${new Intl.NumberFormat('vi-VN').format(p.price)}đ</p>
            </div>
        </div>
    `).join('');
}
