(function(){
  "use strict";

  /* ============ I18N ============ */
  var LANG = "en";
  var I18N = {
    en: {
      page_title: "Haze N Blaze — Smoke, Vape & Adult Novelty | Carrollton + Dallas",
      age_title: "Adults only",
      age_text: 'Haze N Blaze sells tobacco, vape, Delta products and adult novelties. You must be <b style="color:#fff">21 or older</b> to enter this site and shop in our stores. ID is checked in store.',
      age_yes: "I’m 21 or older — Enter",
      age_no: "I’m under 21 — Exit",
      age_note: "By entering you agree you are of legal age in Texas to purchase tobacco and vape products.",
      strip: '⚠ <b>21+ only</b> · Tobacco, vape &amp; adult products · ID required in store · In-store shopping only — no online checkout',
      nav_locations: "Locations", nav_shop: "Shop", nav_hours: "Hours", nav_about: "About", nav_faq: "FAQ", nav_follow: "Follow",
      call_prefix: "Call ",
      hero_tag: "Two local stores · Dallas–Fort Worth",
      hero_sub: '<b>Smoke · Vape · Adult Novelty.</b> One name, two neighborhoods — Carrollton and Dallas, side by side below with live hours, directions and phone for each store. Stock and deals rotate in store, so what’s on the shelf is what’s hot right now.',
      hero_cta_shop: "Browse what we carry ↓",
      hero_cta_find: "Find your store",
      live_clock_label: "Dallas–Fort Worth time right now:",
      checking: "Checking…",
      loading_hours: "Loading live hours…",
      loc_kicker: "One brand · Two stores",
      loc_h2: "Carrollton & Dallas",
      loc_p: "Carrollton and Dallas, side by side — each store with its own address, hours, phone, Instagram, Facebook, directions and map. No switching needed.",
      row_address: "Address", row_today: "Today’s hours", row_call: "Call the store",
      btn_directions: "Get directions ↗", btn_callnow: "Call now",
      follow_kicker: "Stay in the loop",
      follow_h2: "Follow us",
      follow_p: "New drops, restocks and deals — follow Carrollton and Dallas on Instagram and Facebook. Carrollton and Dallas are listed side by side below.",
      follow_c_p: "Drops and deals from the Carrollton store on E Belt Line Rd.",
      follow_d_p: "Drops and deals from the Dallas store on E R L Thornton Fwy.",
      foot_follow_h: "Follow us",
      foot_carr: "Carrollton", foot_carr2: "Carrollton",
      shop_kicker: "In-store only · No online checkout",
      shop_h2: "What we carry",
      shop_p: "Search or filter by vibe. This is the range each location is known for — call ahead if you’re hunting a specific flavor or item, since stock moves fast.",
      search_ph: "Search: geek bar, hookah, grinder, CBD…",
      empty_h: "Nothing matched that search",
      empty_p: "Try a shorter word — like “vape”, “delta” or “tray” — or clear the filters. Or just call the store; the shelf is bigger than any list.",
      empty_btn: "Clear all filters",
      banner_h: 'Geek Bar &amp; Digifi disposables — <span>in Carrollton &amp; Dallas</span>',
      banner_p: "The drop Carrollton and Dallas promote together. Available in Carrollton and in Dallas while in stock in store — swing by or call your store to check today’s flavors before you drive over.",
      about_kicker: "Local, not a franchise",
      about_h2: "Two stores. One crew.",
      about_p: "Haze N Blaze is a locally-run two-store operation in the Dallas area — not a national chain. Same name, same energy, and each shop stocked for its own neighborhood.",
      stat1_h: "DFW locations",
      stat1_p: "Carrollton on E Belt Line Rd and Dallas on E R L Thornton Fwy.",
      stat2_h: "Carrollton on Google",
      stat2_p: "Rated 4.6 stars from 14 Google reviews, listed as an inexpensive ($) stop in Carrollton Park Village.",
      stat3_num: "7 days",
      stat3_h: "Open every day",
      stat3_p: "Each store opens seven days a week, including Sundays 10 AM – 8 PM. Live open/closed status is at the top of this page.",
      faq_kicker: "Good to know",
      faq_h2: "Questions",
      faq1_q: "Do I need to be 21 to shop?",
      faq1_a: "Yes. Haze N Blaze sells tobacco, vape, Delta products and adult novelties, so you must be 21 or older and show valid ID in store.",
      faq2_q: "Can I order online or get delivery?",
      faq2_a: "No — shopping is in-store only in Carrollton and Dallas. There’s no online checkout on this site. Call your store to ask about a product, then pick it up in person.",
      faq3_q: "What’s the difference between the two stores?",
      faq3_a: "Carrollton leans into American vapes, legal Delta products, cigars, cigarette &amp; cigarillos, e-juice, pods &amp; coils, grinders, scales, trays and adult novelties. Dallas is listed for CBD, Delta 8, tobacco, vape, kratom and hookah. Plenty overlaps — and promos like Geek Bar run in Carrollton and in Dallas.",
      faq4_q: "Which store opens earlier?",
      faq4_a: "Carrollton opens at 9:00 AM Monday–Saturday; Dallas opens at 9:30 AM. Each closes at 9:30 PM, and each opens 10 AM – 8 PM on Sundays. The live countdown at the top always uses Central Time.",
      faq5_q: "How do I check if something is in stock?",
      faq5_a: "Call the store: Carrollton (469) 289-0012 or Dallas (469) 372-0868. You can also watch each store’s Instagram — @hazenblaze2 for Carrollton and @hazenblazedallas for Dallas — for new drops.",
      foot_desc: "Smoke · Vape · Adult Novelty. A locally-run two-store shop serving Carrollton and Dallas, Texas. Follow along for drops and deals in Carrollton and Dallas.",
      foot_hours_c: "Mon–Sat 9:00 AM – 9:30 PM<br>Sun 10:00 AM – 8:00 PM",
      foot_hours_d: "Mon–Sat 9:30 AM – 9:30 PM<br>Sun 10:00 AM – 8:00 PM",
      foot_directions: "Directions ↗",
      warn: "21+ ONLY. WARNING: Tobacco and vape products contain nicotine. Nicotine is an addictive chemical. Delta and CBD products are intended for adults 21+; keep out of reach of children and pets. Adult novelties are sold discreetly in store. Products, brands and availability vary by location and change without notice — call your store to confirm. This site does not sell products online.",
      foot_bottom: "Haze N Blaze — Carrollton &amp; Dallas, TX · Hours shown in Central Time (America/Chicago) · Live status on this page is calculated from those posted hours.",
      open_now: "Open now", closed: "Closed",
      closes_word: "closes", opens_word: "opens",
      closes_in: "closes in", opens_in: "opens in",
      opens_today_at: "opens today at", opens_tomorrow_at: "opens tomorrow at",
      is_open: "is OPEN now", is_closed: "is closed right now",
      clock_open_sub_a: "Doors close at ", clock_open_sub_b: " CT. Time left today:",
      clock_closed_sub_a: "Next opening: ", clock_closed_sub_b: " CT. Time until doors open:",
      today_tag: "TODAY",
      hours_heading_suffix: " hours", hours_heading_prefix: "",
      unit_h: "h", unit_m: "m", unit_min: " min", unit_sec: " sec",
      showing_a: "Showing ", showing_b: " of ", showing_c: " categories · In-store only — call to confirm today’s stock",
      days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      days_abbr: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      marquee: ["Disposable Vapes","Geek Bar","Delta 8","CBD","Kratom","Hookah","Cigars","E-Juice","Pods & Coils","Grinders","Adult Novelties","Open 7 Days"],
      cats: {"All":"All","Vape":"Vape","Delta & CBD":"Delta & CBD","Smoke & Tobacco":"Smoke & Tobacco","Accessories":"Accessories","Adult":"Adult"}
    },
    es: {
      page_title: "Haze N Blaze — Fumar, Vapear y Novedades para Adultos | Carrollton + Dallas",
      age_title: "Solo adultos",
      age_text: 'Haze N Blaze vende tabaco, productos de vapeo, Delta y novedades para adultos. Debes tener <b style="color:#fff">21 años o más</b> para entrar a este sitio y comprar en nuestras tiendas. Se revisa la identificación en la tienda.',
      age_yes: "Tengo 21 años o más — Entrar",
      age_no: "Tengo menos de 21 — Salir",
      age_note: "Al entrar aceptas que tienes la edad legal en Texas para comprar productos de tabaco y vapeo.",
      strip: '⚠ <b>Solo mayores de 21</b> · Productos de tabaco, vapeo y para adultos · Se requiere identificación en la tienda · Solo compras en tienda — sin pago en línea',
      nav_locations: "Ubicaciones", nav_shop: "Tienda", nav_hours: "Horarios", nav_about: "Nosotros", nav_faq: "Preguntas", nav_follow: "Síguenos",
      call_prefix: "Llamar a ",
      hero_tag: "Dos tiendas locales · Dallas–Fort Worth",
      hero_sub: '<b>Fumar · Vapear · Novedades para adultos.</b> Un nombre, dos barrios — Carrollton y Dallas, lado a lado abajo con horario en vivo, cómo llegar y teléfono de cada tienda. El inventario y las ofertas rotan en tienda, así que lo que está en el estante es lo más buscado ahora.',
      hero_cta_shop: "Ver lo que vendemos ↓",
      hero_cta_find: "Encuentra tu tienda",
      live_clock_label: "Hora actual en Dallas–Fort Worth:",
      checking: "Verificando…",
      loading_hours: "Cargando horario en vivo…",
      loc_kicker: "Una marca · Dos tiendas",
      loc_h2: "Carrollton y Dallas",
      loc_p: "Carrollton y Dallas, lado a lado — cada tienda con su propia dirección, horario, teléfono, Instagram, Facebook, cómo llegar y mapa. Sin necesidad de cambiar.",
      row_address: "Dirección", row_today: "Horario de hoy", row_call: "Llama a la tienda",
      btn_directions: "Cómo llegar ↗", btn_callnow: "Llamar ahora",
      follow_kicker: "Mantente al tanto",
      follow_h2: "Síguenos",
      follow_p: "Novedades, reabastecimientos y ofertas — sigue a Carrollton y Dallas en Instagram y Facebook. Carrollton y Dallas aparecen lado a lado abajo.",
      follow_c_p: "Novedades y ofertas de la tienda de Carrollton en E Belt Line Rd.",
      follow_d_p: "Novedades y ofertas de la tienda de Dallas en E R L Thornton Fwy.",
      foot_follow_h: "Síguenos",
      foot_carr: "Carrollton", foot_carr2: "Carrollton",
      shop_kicker: "Solo en tienda · Sin pago en línea",
      shop_h2: "Lo que vendemos",
      shop_p: "Busca o filtra por tipo. Esta es la gama por la que se conoce a cada ubicación — llama antes si buscas un sabor o artículo específico, porque el inventario se mueve rápido.",
      search_ph: "Buscar: geek bar, hookah, grinder, CBD…",
      empty_h: "Nada coincidió con esa búsqueda",
      empty_p: "Prueba una palabra más corta — como «vape», «delta» o «bandeja» — o borra los filtros. O simplemente llama a la tienda; el estante es más grande que cualquier lista.",
      empty_btn: "Borrar todos los filtros",
      banner_h: 'Geek Bar y Digifi desechables — <span>en Carrollton y Dallas</span>',
      banner_p: "La llegada que Carrollton y Dallas promocionan juntas. Disponible en Carrollton y en Dallas mientras haya en tienda — visítanos o llama a tu tienda para confirmar los sabores de hoy antes de venir.",
      about_kicker: "Local, no una franquicia",
      about_h2: "Dos tiendas. Un solo equipo.",
      about_p: "Haze N Blaze es un negocio local de dos tiendas en el área de Dallas — no una cadena nacional. El mismo nombre, la misma energía, y cada tienda surtida para su propio barrio.",
      stat1_h: "Ubicaciones en DFW",
      stat1_p: "Carrollton en E Belt Line Rd y Dallas en E R L Thornton Fwy.",
      stat2_h: "Carrollton en Google",
      stat2_p: "Calificación de 4.6 estrellas de 14 reseñas en Google, clasificada como una parada económica ($) en Carrollton Park Village.",
      stat3_num: "7 días",
      stat3_h: "Abierto todos los días",
      stat3_p: "Cada tienda abre los siete días de la semana, incluidos los domingos de 10 AM a 8 PM. El estado en vivo abierto/cerrado está al inicio de esta página.",
      faq_kicker: "Bueno saberlo",
      faq_h2: "Preguntas frecuentes",
      faq1_q: "¿Necesito tener 21 años para comprar?",
      faq1_a: "Sí. Haze N Blaze vende tabaco, productos de vapeo, Delta y novedades para adultos, así que debes tener 21 años o más y mostrar una identificación válida en la tienda.",
      faq2_q: "¿Puedo pedir en línea o a domicilio?",
      faq2_a: "No — las compras son solo en persona en Carrollton y Dallas. Este sitio no tiene pago en línea. Llama a tu tienda para preguntar por un producto y recógelo en persona.",
      faq3_q: "¿Cuál es la diferencia entre las dos tiendas?",
      faq3_a: "Carrollton se enfoca en vapes americanos, productos Delta legales, puros, cigarrillos y cigarillos, e-juice, pods y coils, grinders, balanzas, bandejas y novedades para adultos. Dallas figura por CBD, Delta 8, tabaco, vapeo, kratom y hookah. Hay mucho en común — y promociones como Geek Bar se hacen en Carrollton y en Dallas.",
      faq4_q: "¿Qué tienda abre más temprano?",
      faq4_a: "Carrollton abre a las 9:00 AM de lunes a sábado; Dallas abre a las 9:30 AM. Cada una cierra a las 9:30 PM y abre los domingos de 10 AM a 8 PM. La cuenta regresiva en vivo al inicio siempre usa la hora central.",
      faq5_q: "¿Cómo sé si algo está en existencia?",
      faq5_a: "Llama a la tienda: Carrollton (469) 289-0012 o Dallas (469) 372-0868. También puedes seguir el Instagram de cada tienda — @hazenblaze2 para Carrollton y @hazenblazedallas para Dallas — para ver las novedades.",
      foot_desc: "Fumar · Vapear · Novedades para adultos. Una tienda local de dos ubicaciones que sirve a Carrollton y Dallas, Texas. Síguenos para novedades y ofertas en Carrollton y Dallas.",
      foot_hours_c: "lun–sáb 9:00 AM – 9:30 PM<br>dom 10:00 AM – 8:00 PM",
      foot_hours_d: "lun–sáb 9:30 AM – 9:30 PM<br>dom 10:00 AM – 8:00 PM",
      foot_directions: "Cómo llegar ↗",
      warn: "SOLO MAYORES DE 21. ADVERTENCIA: Los productos de tabaco y vapeo contienen nicotina. La nicotina es una sustancia adictiva. Los productos Delta y CBD son para adultos mayores de 21 años; manténlos fuera del alcance de niños y mascotas. Las novedades para adultos se venden con discreción en la tienda. Los productos, marcas y disponibilidad varían según la ubicación y cambian sin aviso — llama a tu tienda para confirmar. Este sitio no vende productos en línea.",
      foot_bottom: "Haze N Blaze — Carrollton y Dallas, TX · Horarios en hora central (America/Chicago) · El estado en vivo de esta página se calcula a partir de esos horarios publicados.",
      open_now: "Abierto ahora", closed: "Cerrado",
      closes_word: "cierra", opens_word: "abre",
      closes_in: "cierra en", opens_in: "abre en",
      opens_today_at: "abre hoy a las", opens_tomorrow_at: "abre mañana a las",
      is_open: "está ABIERTO ahora", is_closed: "está cerrado ahora",
      clock_open_sub_a: "Cerramos a las ", clock_open_sub_b: " CT. Tiempo restante hoy:",
      clock_closed_sub_a: "Próxima apertura: ", clock_closed_sub_b: " CT. Tiempo hasta que abramos:",
      today_tag: "HOY",
      hours_heading_suffix: "", hours_heading_prefix: "Horario de ",
      unit_h: " h", unit_m: " min", unit_min: " min", unit_sec: " s",
      showing_a: "Mostrando ", showing_b: " de ", showing_c: " categorías · Solo en tienda — llama para confirmar el inventario de hoy",
      days: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],
      days_abbr: ["lun","mar","mié","jue","vie","sáb","dom"],
      marquee: ["Vapes Desechables","Geek Bar","Delta 8","CBD","Kratom","Hookah","Puros","E-Juice","Pods y Coils","Grinders","Novedades para Adultos","Abierto 7 Días"],
      cats: {"All":"Todo","Vape":"Vapeo","Delta & CBD":"Delta y CBD","Smoke & Tobacco":"Fumar y Tabaco","Accessories":"Accesorios","Adult":"Adultos"}
    }
  };
  function t(key){
    var d = I18N[LANG] || I18N.en;
    if(d[key] !== undefined) return d[key];
    if(I18N.en[key] !== undefined) return I18N.en[key];
    return key;
  }

  /* ============ DATA (verified listings only) ============ */
  var STORES = {
    carrollton: {
      id:"carrollton", short:"Carrollton",
      name:"Haze N Blaze Smoke & Adult Novelty Shop",
      area:{en:"Carrollton Park Village", es:"Carrollton Park Village"},
      address:"1955 E Belt Line Rd, Carrollton, TX 75006",
      addressLines:{en:"1955 E Belt Line Rd, Carrollton, TX 75006 — in Carrollton Park Village", es:"1955 E Belt Line Rd, Carrollton, TX 75006 — en Carrollton Park Village"},
      phoneDisplay:"(469) 289-0012", phoneHref:"tel:+14692890012",
      instaHandle:"@hazenblaze2", instaUrl:"https://www.instagram.com/hazenblaze2",
      fbName:"Haze n Blaze Smoke & Adult Novelty Store", fbUrl:"https://www.facebook.com/894862377035875",
      social2Label:{en:"Facebook page", es:"Página de Facebook"}, social2Url:"https://www.facebook.com/894862377035875",
      extra:{en:" · Rated 4.6★ from 14 Google reviews · Inexpensive ($)", es:" · 4.6★ de 14 reseñas en Google · Económico ($)"},
      desc:{
        en:"American vapes, legal Delta products, cigars, cigarettes, cigarillos, e-juice, e-vapes, grinders, scales, trays, pods & coils — plus a discreet adult novelty section.",
        es:"Vapes americanos, productos Delta legales, puros, cigarrillos, cigarillos, e-juice, e-vapes, grinders, balanzas, bandejas, pods y coils — además de una discreta sección de novedades para adultos."
      },
      photo:"/assets/images/carrollton-storefront.png",
      photoAlt:{en:"Haze N Blaze Carrollton storefront", es:"Fachada de Haze N Blaze Carrollton"},
      mapsQuery:"Haze N Blaze 1955 E Belt Line Rd Carrollton TX 75006",
      // minutes from midnight, indexed Mon=0..Sun=6
      hours:[ [540,1290],[540,1290],[540,1290],[540,1290],[540,1290],[540,1290],[600,1200] ]
    },
    dallas: {
      id:"dallas", short:"Dallas",
      name:"Haze n Blaze Smoke & Vape Shop",
      area:{en:"East Dallas · E R L Thornton Fwy", es:"Este de Dallas · E R L Thornton Fwy"},
      address:"8928 E R L Thornton Fwy Ste 109, Dallas, TX 75228",
      addressLines:{en:"8928 E R L Thornton Fwy Ste 109, Dallas, TX 75228", es:"8928 E R L Thornton Fwy Ste 109, Dallas, TX 75228"},
      phoneDisplay:"(469) 372-0868", phoneHref:"tel:+14693720868",
      instaHandle:"@hazenblazedallas", instaUrl:"https://www.instagram.com/hazenblazedallas/",
      fbName:"Haze N Blaze - Smoke Shop (Dallas)", fbUrl:"https://www.facebook.com/112834744636741/",
      social2Label:{en:"Facebook page", es:"Página de Facebook"}, social2Url:"https://www.facebook.com/112834744636741/",
      extra:{en:"", es:""},
      desc:{
        en:"CBD, Delta 8, tobacco, vape, kratom and hookah — Dallas’s stop for smoke & vape essentials on the Thornton Freeway.",
        es:"CBD, Delta 8, tabaco, vapeo, kratom y hookah — la parada de Dallas para lo esencial de fumar y vapear en Thornton Freeway."
      },
      photo:"/assets/images/dallas-storefront.png",
      photoAlt:{en:"Haze N Blaze Dallas storefront, Suite 109", es:"Fachada de Haze N Blaze Dallas, Suite 109"},
      mapsQuery:"Haze n Blaze 8928 E R L Thornton Fwy Ste 109 Dallas TX 75228",
      hours:[ [570,1290],[570,1290],[570,1290],[570,1290],[570,1290],[570,1290],[600,1200] ]
    }
  };
  var ORDER = ["carrollton","dallas"];

  var PRODUCTS = [
    {name:{en:"Disposable Vapes — Geek Bar & Digifi", es:"Vapes desechables — Geek Bar y Digifi"}, emoji:"💨", cat:"Vape", store:"both", blurb:{en:"The promo Carrollton and Dallas run together. Flavors rotate — call for today’s lineup.", es:"La promoción que Carrollton y Dallas hacen juntas. Los sabores rotan — llama para ver la selección de hoy."}},
    {name:{en:"American Vapes", es:"Vapes americanos"}, emoji:"🇺🇸", cat:"Vape", store:"carrollton", blurb:{en:"American vape devices and gear, a Carrollton specialty.", es:"Dispositivos y equipo de vapeo americano, una especialidad de Carrollton."}},
    {name:{en:"E-Vapes & Vape Devices", es:"E-vapes y dispositivos de vapeo"}, emoji:"🔋", cat:"Vape", store:"both", blurb:{en:"Everyday vape devices carried across the Haze N Blaze range.", es:"Dispositivos de vapeo para el día a día en toda la gama Haze N Blaze."}},
    {name:{en:"E-Juice", es:"E-Juice"}, emoji:"🧪", cat:"Vape", store:"carrollton", blurb:{en:"Bottled e-juice for refillable setups.", es:"E-juice embotellado para equipos recargables."}},
    {name:{en:"Pods & Coils", es:"Pods y Coils"}, emoji:"🧩", cat:"Vape", store:"carrollton", blurb:{en:"Replacement pods and coils to keep your device hitting right.", es:"Pods y coils de repuesto para que tu dispositivo siga funcionando al cien."}},
    {name:{en:"Legal Delta Products", es:"Productos Delta legales"}, emoji:"🌿", cat:"Delta & CBD", store:"carrollton", blurb:{en:"Legal Delta products, sold to adults 21+ with ID.", es:"Productos Delta legales, vendidos a mayores de 21 con identificación."}},
    {name:{en:"Delta 8", es:"Delta 8"}, emoji:"✨", cat:"Delta & CBD", store:"dallas", blurb:{en:"Delta 8 products at the Dallas store. Adults 21+ only.", es:"Productos Delta 8 en la tienda de Dallas. Solo para mayores de 21."}},
    {name:{en:"CBD", es:"CBD"}, emoji:"🍃", cat:"Delta & CBD", store:"dallas", blurb:{en:"CBD products stocked at Dallas.", es:"Productos de CBD en Dallas."}},
    {name:{en:"Kratom", es:"Kratom"}, emoji:"🌱", cat:"Delta & CBD", store:"dallas", blurb:{en:"Kratom available at the Dallas location. Adults only.", es:"Kratom disponible en la ubicación de Dallas. Solo para adultos."}},
    {name:{en:"Cigars", es:"Puros"}, emoji:"🎩", cat:"Smoke & Tobacco", store:"carrollton", blurb:{en:"Cigars for the humidor crowd in Carrollton.", es:"Puros para los amantes del humidor en Carrollton."}},
    {name:{en:"Cigarettes", es:"Cigarrillos"}, emoji:"🚬", cat:"Smoke & Tobacco", store:"carrollton", blurb:{en:"Cigarettes at Carrollton. 21+ with ID, as always.", es:"Cigarrillos en Carrollton. Mayores de 21 con identificación, como siempre."}},
    {name:{en:"Cigarillos", es:"Cigarillos"}, emoji:"🌀", cat:"Smoke & Tobacco", store:"carrollton", blurb:{en:"Cigarillos in the Carrollton tobacco range.", es:"Cigarillos en la gama de tabaco de Carrollton."}},
    {name:{en:"Tobacco", es:"Tabaco"}, emoji:"🍂", cat:"Smoke & Tobacco", store:"dallas", blurb:{en:"Tobacco products at the Dallas store.", es:"Productos de tabaco en la tienda de Dallas."}},
    {name:{en:"Hookah", es:"Hookah"}, emoji:"🫧", cat:"Smoke & Tobacco", store:"dallas", blurb:{en:"Hookah gear and supplies in Dallas.", es:"Equipo y accesorios de hookah en Dallas."}},
    {name:{en:"Grinders", es:"Grinders"}, emoji:"⚙️", cat:"Accessories", store:"carrollton", blurb:{en:"Grinders from the Carrollton accessories wall.", es:"Grinders de la pared de accesorios de Carrollton."}},
    {name:{en:"Scales", es:"Balanzas"}, emoji:"⚖️", cat:"Accessories", store:"carrollton", blurb:{en:"Precision scales stocked in Carrollton.", es:"Balanzas de precisión en Carrollton."}},
    {name:{en:"Rolling Trays", es:"Bandejas para liar"}, emoji:"🎛️", cat:"Accessories", store:"carrollton", blurb:{en:"Trays to keep your setup tidy.", es:"Bandejas para mantener tu espacio en orden."}},
    {name:{en:"Adult Novelties", es:"Novedades para adultos"}, emoji:"🔞", cat:"Adult", store:"carrollton", blurb:{en:"A discreet, tasteful adult novelty section in Carrollton. Strictly 21+, sold with privacy and zero judgment.", es:"Una sección discreta y de buen gusto de novedades para adultos en Carrollton. Estrictamente para mayores de 21, vendida con privacidad y sin juicios."}},
    {name:{en:"Pre-Rolled Cones", es:"Conos Pre-enrollados"}, emoji:"🔻", cat:"Accessories", store:"carrollton", blurb:{en:"Pre-rolled paper cones ready to fill, from the Carrollton accessories range. Ask in store for sizes and packs.", es:"Conos de papel pre-enrollados listos para rellenar, de la gama de accesorios de Carrollton. Pregunta en tienda por tamaños y paquetes."}},
    {name:{en:"Hand Rolls", es:"Enrollados a Mano"}, emoji:"🤚", cat:"Accessories", store:"carrollton", blurb:{en:"Hand rolls from the Carrollton counter. Ask in store about what’s available today.", es:"Enrollados a mano del mostrador de Carrollton. Pregunta en tienda por lo disponible hoy."}}
  ];
  var CATS = ["All","Vape","Delta & CBD","Smoke & Tobacco","Accessories","Adult"];
  /* One literal photo per product — the picture shows the exact item named on the card. */
  var PROD_IMG = {
    "Disposable Vapes — Geek Bar & Digifi":{src:"/assets/images/catalog-01.jpg", alt:{en:"Three Geek Bar disposable vape devices in bright gradient colors", es:"Tres vapes desechables Geek Bar en colores degradados brillantes"}},
    "American Vapes":{src:"/assets/images/catalog-02.jpg", alt:{en:"A red box-mod vape device on a white background", es:"Un dispositivo de vapeo tipo box mod rojo sobre fondo blanco"}},
    "E-Vapes & Vape Devices":{src:"/assets/images/catalog-03.jpg", alt:{en:"A slim teal pod vape device and its replacement pod held in a hand", es:"Un dispositivo de vapeo tipo pod delgado color verde azulado y su pod de repuesto en una mano"}},
    "E-Juice":{src:"/assets/images/catalog-04.jpg", alt:{en:"Colorful glass dropper bottles of e-juice / vape juice", es:"Frascos de vidrio coloridos con gotero de e-juice"}},
    "Pods & Coils":{src:"/assets/images/catalog-05.jpg", alt:{en:"A vape pod next to two replacement coils on a white background", es:"Un pod de vapeo junto a dos coils de repuesto sobre fondo blanco"}},
    "Legal Delta Products":{src:"/assets/images/catalog-06.jpg", alt:{en:"A pouch of Delta 8 THC gummies with colorful gummies pictured on the pack", es:"Una bolsa de gomitas de Delta 8 THC con gomitas de colores en el empaque"}},
    "Delta 8":{src:"/assets/images/catalog-07.jpg", alt:{en:"A black jar labeled Delta-8 Gummies with gummies spilling beside it", es:"Un frasco negro con la etiqueta Delta-8 Gummies y gomitas al lado"}},
    "CBD":{src:"/assets/images/catalog-08.jpg", alt:{en:"Glass dropper bottles of CBD oil on a wooden table", es:"Frascos de vidrio con gotero de aceite de CBD sobre una mesa de madera"}},
    "Kratom":{src:"/assets/images/catalog-09.jpg", alt:{en:"Bags of Oasis kratom capsules in several varieties", es:"Bolsas de cápsulas de kratom Oasis de varias variedades"}},
    "Cigars":{src:"/assets/images/catalog-10.jpg", alt:{en:"Cigars resting in an open wooden humidor", es:"Puros en un humidor de madera abierto"}},
    "Cigarettes":{src:"/assets/images/catalog-11.jpg", alt:{en:"Cigarettes in an open pack, close-up", es:"Cigarrillos en una cajetilla abierta, en primer plano"}},
    "Cigarillos":{src:"/assets/images/catalog-12.jpg", alt:{en:"A display box of Swisher Sweets cigarillo foil-pouch packs", es:"Una caja expositora de paquetes de cigarillos Swisher Sweets en bolsa metalizada"}},
    "Tobacco":{src:"/assets/images/catalog-13.jpg", alt:{en:"A pouch of Mac Baren pipe tobacco with loose tobacco leaves beside it", es:"Una bolsa de tabaco para pipa Mac Baren con hojas de tabaco sueltas al lado"}},
    "Hookah":{src:"/assets/images/catalog-14.jpg", alt:{en:"A hookah with a glass base and hose on a table in a lounge, surrounded by smoke", es:"Una hookah con base de vidrio y manguera sobre una mesa en un lounge, rodeada de humo"}},
    "Grinders":{src:"/assets/images/catalog-15.jpg", alt:{en:"An open brushed-metal herb grinder showing its grinding teeth", es:"Un grinder de hierbas de metal cepillado abierto, mostrando sus dientes"}},
    "Scales":{src:"/assets/images/catalog-16.jpg", alt:{en:"A small silver digital pocket scale reading 0.0 grams", es:"Una pequeña balanza digital de bolsillo plateada marcando 0.0 gramos"}},
    "Rolling Trays":{src:"/assets/images/catalog-17.jpg", alt:{en:"A wooden rolling tray with rolling papers and herb on a table", es:"Una bandeja de madera para liar con papeles y hierba sobre una mesa"}},
    "Adult Novelties":{src:"/assets/images/catalog-18.jpg", alt:{en:"Close-up of a personal massager pictured on its Revel retail packaging", es:"Primer plano de un masajeador personal en su empaque de venta Revel"}},
    "Pre-Rolled Cones":{src:"/assets/images/catalog-19.jpg", alt:{en:"A pack of RAW pre-rolled paper cones with two pre-rolled cones in front of it", es:"Un paquete de conos de papel pre-enrollados RAW con dos conos pre-enrollados al frente"}},
    "Hand Rolls":{src:"/assets/images/catalog-20.jpg", alt:{en:"Two hand-rolled rolls with twisted ends resting by a glass jar of herb", es:"Dos enrollados a mano con puntas torcidas junto a un frasco de vidrio con hierba"}}
  };
  function prodImg(p){
    return PROD_IMG[p.name.en] || {src:"/assets/images/catalog-21.jpg", alt:{en:"Shelves of smoke and vape products in store", es:"Estantes de productos para fumar y vapear en la tienda"}};
  }
  var activeCat = "All", query = "";

  /* ============ HELPERS: Central Time ============ */
  function nowCT(){
    // Get wall-clock parts in America/Chicago, then build a local Date with those parts for arithmetic
    var parts = new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",weekday:"short",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).formatToParts(new Date());
    var m = {};
    parts.forEach(function(p){ m[p.type]=p.value; });
    var dayMap = {Mon:0,Tue:1,Wed:2,Thu:3,Fri:4,Sat:5,Sun:6};
    var h = parseInt(m.hour,10); if(h===24) h=0;
    return { day: dayMap[m.weekday], minutes: h*60 + parseInt(m.minute,10), seconds: parseInt(m.second,10),
             label: new Intl.DateTimeFormat(LANG==="es" ? "es-US" : "en-US",{timeZone:"America/Chicago",weekday:"long",hour:"numeric",minute:"2-digit",second:"2-digit"}).format(new Date()) };
  }
  function fmt(mins){
    var h = Math.floor(mins/60), mm = mins%60, ap = h>=12 ? "PM":"AM"; var h12 = h%12; if(h12===0) h12=12;
    return h12 + ":" + (mm<10?"0":"")+mm + " " + ap;
  }
  function statusFor(store, ct){
    var today = store.hours[ct.day];
    var nowSec = ct.minutes*60 + ct.seconds;
    var openSec = today[0]*60, closeSec = today[1]*60;
    if(nowSec >= openSec && nowSec < closeSec){
      return { open:true, secsLeft: closeSec - nowSec, today:today, label: t("open_now") + " · " + t("closes_word") + " " + fmt(today[1]) };
    }
    if(nowSec < openSec){
      return { open:false, secsLeft: openSec - nowSec, today:today, label: t("closed") + " · " + t("opens_today_at") + " " + fmt(today[0]) };
    }
    var nd = (ct.day+1)%7, nh = store.hours[nd];
    return { open:false, secsLeft: (86400 - nowSec) + nh[0]*60, today:today, label: t("closed") + " · " + t("opens_tomorrow_at") + " " + fmt(nh[0]), nextDay:nd, nextHours:nh };
  }
  function fmtCountdown(s){
    var h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
    function p(n){ return (n<10?"0":"")+n; }
    return p(h)+":"+p(m)+":"+p(sec);
  }
  function humanLeft(s){
    var h = Math.floor(s/3600), m = Math.floor((s%3600)/60);
    if(h>0) return h + t("unit_h") + " " + m + t("unit_m");
    if(m>0) return m + t("unit_min");
    return s + t("unit_sec");
  }

  /* ============ AGE GATE ============ */
  var gate = document.getElementById("ageGate");
  document.getElementById("ageYes").addEventListener("click", function(){
    gate.classList.add("hidden");
    document.body.style.overflow = "";
  });
  document.body.style.overflow = "hidden";

  /* ============ MARQUEE ============ */
  function buildMarquee(){
    var chunk = t("marquee").map(function(x){ return "<span>"+x+" <i>✦</i></span>"; }).join("");
    document.getElementById("marqueeTrack").innerHTML = chunk + chunk;
  }

  /* ============ LOCATIONS — Carrollton & Dallas side by side ============ */
  function cardEl(id){ return document.querySelector('[data-loc-card="'+id+'"]'); }
  function renderLocations(){
    ORDER.forEach(function(id){
      var s = STORES[id];
      var card = cardEl(id);
      if(!card) return;
      function f(name){ return card.querySelector('[data-field="'+name+'"]'); }
      f("area").textContent = s.area[LANG];
      f("name").textContent = s.name;
      f("desc").textContent = s.desc[LANG];
      f("addr").textContent = s.addressLines[LANG];
      var ab = t("days_abbr");
      f("week").textContent = ab[0] + "–" + ab[5] + " " + fmt(s.hours[0][0]) + " – " + fmt(s.hours[0][1]) + " · " + ab[6] + " " + fmt(s.hours[6][0]) + " – " + fmt(s.hours[6][1]);
      var phone = f("phone");
      phone.textContent = s.phoneDisplay; phone.href = s.phoneHref;
      var insta = f("insta");
      insta.textContent = s.instaHandle; insta.href = s.instaUrl;
      var fb = f("fb");
      fb.textContent = s.fbName; fb.href = s.fbUrl;
      f("extra").textContent = s.extra[LANG];
      f("directions").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.mapsQuery);
      f("callBtn").href = s.phoneHref;
      f("instaBtn").href = s.instaUrl;
      f("instaBtnText").textContent = "Instagram " + s.instaHandle + " ↗";
      f("fbBtn").href = s.fbUrl;
      f("fbBtnText").textContent = "Facebook — " + s.short + " ↗";
      var photo = f("photo");
      photo.src = s.photo; photo.alt = s.photoAlt[LANG];
      f("map").src = "https://maps.google.com/maps?q=" + encodeURIComponent(s.mapsQuery) + "&z=14&output=embed";
    });
    var navCall = document.getElementById("navCall");
    navCall.href = STORES.carrollton.phoneHref; navCall.textContent = t("call_prefix") + STORES.carrollton.short;
    tick(); // refresh today's hours + countdowns for Carrollton and Dallas
  }
  // Hero store cards scroll down to the side-by-side locations section
  document.querySelectorAll(".hero-store").forEach(function(b){
    b.addEventListener("click", function(){
      var loc = document.getElementById("locations");
      if(loc) loc.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });

  /* ============ HOURS TABLES ============ */
  function renderHours(ct){
    var days = t("days");
    ORDER.forEach(function(id){
      var s = STORES[id], el = document.getElementById("hours-"+id);
      var rows = s.hours.map(function(h,i){
        var today = i===ct.day;
        return '<div class="hrow'+(today?" today":"")+'"><span>'+days[i]+(today?'<span class="tag">'+t("today_tag")+"</span>":"")+'</span><span class="mono">'+fmt(h[0])+" – "+fmt(h[1])+"</span></div>";
      }).join("");
      el.innerHTML = "<h3>"+t("hours_heading_prefix")+s.short+t("hours_heading_suffix")+"</h3><div class='sub'>"+s.address+"</div>" + rows;
    });
  }

  /* ============ LIVE CLOCK / STATUS ============ */
  function tick(){
    var ct = nowCT();
    document.getElementById("liveClock").textContent = ct.label;
    ORDER.forEach(function(id){
      var s = STORES[id], st = statusFor(s, ct);
      var pill = document.querySelector('[data-status-pill="'+id+'"]');
      pill.classList.toggle("open", st.open); pill.classList.toggle("closed", !st.open);
      pill.querySelector("[data-status-text]").textContent = st.open ? t("open_now") : t("closed");
      document.querySelector('[data-count-line="'+id+'"]').textContent =
        st.label + " · " + (st.open ? t("closes_in") : t("opens_in")) + " " + humanLeft(st.secsLeft);
      var card = cardEl(id);
      if(card){
        card.querySelector('[data-field="today"]').textContent = fmt(st.today[0]) + " – " + fmt(st.today[1]) + " (" + t("days")[ct.day] + ")";
        var lpill = card.querySelector('[data-field="statusPill"]');
        lpill.classList.toggle("open", st.open); lpill.classList.toggle("closed", !st.open);
        lpill.querySelector('[data-field="statusText"]').textContent = st.open ? t("open_now") : t("closed");
      }
      var cell = document.querySelector('[data-clock-cell="'+id+'"]');
      if(cell){
        cell.querySelector('[data-field="clockTitle"]').textContent = (id==="carrollton" ? "💨 " : "🔥 ") + s.short + " " + (st.open ? t("is_open") : t("is_closed"));
        cell.querySelector('[data-field="clockSub"]').textContent = st.open
          ? t("clock_open_sub_a") + fmt(st.today[1]) + t("clock_open_sub_b")
          : t("clock_closed_sub_a") + fmt((st.nextHours||st.today)[0]) + t("clock_closed_sub_b");
        cell.querySelector('[data-field="countdown"]').textContent = fmtCountdown(st.secsLeft);
      }
    });
    renderHours(ct);
  }

  /* ============ PRODUCTS ============ */
  var grid = document.getElementById("prodGrid");
  var catChips = document.getElementById("catChips");
  function buildChips(){
    catChips.innerHTML = "";
    CATS.forEach(function(c){
      var b = document.createElement("button");
      b.className = "chip" + (c===activeCat ? " on":""); b.textContent = t("cats")[c] || c;
      b.addEventListener("click", function(){ activeCat = c; buildChips(); renderProducts(); });
      catChips.appendChild(b);
    });
  }
  function renderProducts(){
    var q = query.trim().toLowerCase();
    var list = PRODUCTS.filter(function(p){
      var okCat = activeCat==="All" || p.cat===activeCat;
      var hay = (p.name.en+" "+p.name.es+" "+p.blurb.en+" "+p.blurb.es+" "+p.cat+" "+(t("cats")[p.cat]||"")).toLowerCase();
      var okQ = !q || hay.indexOf(q) > -1;
      return okCat && okQ;
    });
    grid.innerHTML = list.map(function(p){
      var im = prodImg(p);
      return '<article class="prod"><img class="prod-img" src="'+im.src+'" alt="'+im.alt[LANG]+'"><div class="prod-body"><div class="emoji" aria-hidden="true">'+p.emoji+'</div><h3>'+p.name[LANG]+"</h3><p>"+p.blurb[LANG]+"</p></div></article>";
    }).join("");
    document.getElementById("emptyState").classList.toggle("show", list.length===0);
    document.getElementById("countLine").textContent = t("showing_a") + list.length + t("showing_b") + PRODUCTS.length + t("showing_c");
  }
  document.getElementById("searchInput").addEventListener("input", function(e){ query = e.target.value; renderProducts(); });
  document.getElementById("clearFilters").addEventListener("click", function(){
    query=""; activeCat="All";
    document.getElementById("searchInput").value="";
    buildChips();
    renderProducts();
  });

  /* ============ LANGUAGE SWITCH ============ */
  function applyLang(){
    document.documentElement.lang = LANG;
    document.title = t("page_title");
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n")); if(v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n-html")); if(v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n-ph")); if(v) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-lang-btn]").forEach(function(b){
      var on = b.getAttribute("data-lang-btn")===LANG;
      b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true":"false");
    });
    document.querySelectorAll("[data-status-text]").forEach(function(el){ el.textContent = t("checking"); });
    document.querySelectorAll("[data-count-line]").forEach(function(el){ el.textContent = t("loading_hours"); });
    buildMarquee();
    buildChips();
    renderLocations();
    renderProducts();
  }
  function setLang(l){ if(l===LANG) return; LANG = l; applyLang(); }
  document.querySelectorAll("[data-lang-btn]").forEach(function(b){
    b.addEventListener("click", function(){ setLang(b.getAttribute("data-lang-btn")); });
  });

  /* ============ SMOKE CANVAS ============ */
  var canvas = document.getElementById("smoke"), ctx = canvas.getContext("2d");
  var W, H, puffs = [], reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function resize(){
    var r = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = r.width; H = canvas.height = r.height;
  }
  function makePuff(seed){
    return { x: Math.random()*W, y: seed ? Math.random()*H : H + 60, r: 40 + Math.random()*90,
      vy: .18 + Math.random()*.35, vx: (Math.random()-.5)*.25, a: .04 + Math.random()*.07,
      hue: Math.random() < .5 ? "163,230,53" : "255,122,31", wob: Math.random()*Math.PI*2 };
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    puffs.forEach(function(p){
      p.y -= p.vy; p.wob += .008; p.x += p.vx + Math.sin(p.wob)*.3;
      if(p.y + p.r < -20){ Object.assign(p, makePuff(false)); }
      var g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);
      g.addColorStop(0,"rgba("+p.hue+","+p.a+")");
      g.addColorStop(1,"rgba("+p.hue+",0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    if(!reduced) requestAnimationFrame(draw);
  }
  resize(); window.addEventListener("resize", resize);
  for(var i=0;i<26;i++) puffs.push(makePuff(true));
  draw();

  /* ============ REVEAL ON SCROLL ============ */
  if("IntersectionObserver" in window && !reduced){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    },{threshold:.12});
    document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
  }

  /* ============ INIT ============ */
  buildMarquee();
  buildChips();
  renderLocations();
  renderProducts();
  tick();
  setInterval(tick, 1000);
})();
