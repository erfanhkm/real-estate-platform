    "use strict";
    var EMAIL = "erfanbcrealestate@gmail.com";
    var TOUR_API_URL = "https://seller-api.erfanbillion.workers.dev";
    // Sample virtual tour for the demo listing (panoramas live in tours/sample1/).
    var SAMPLE_TOURS = {
      "R2991001": { enabled: true, videoUrl: "",
        rooms: [
          { id: "s1", name: "Living Room", url: "tours/sample1/living.jpg" },
          { id: "s2", name: "Kitchen", url: "tours/sample1/kitchen.jpg" },
          { id: "s3", name: "Bedroom", url: "tours/sample1/bedroom.jpg" }
        ],
        hotspots: [
          { from: "s1", to: "s2", yaw: 35, pitch: -4, text: "" },
          { from: "s2", to: "s1", yaw: -140, pitch: -4, text: "" },
          { from: "s1", to: "s3", yaw: -60, pitch: -4, text: "" },
          { from: "s3", to: "s1", yaw: 150, pitch: -4, text: "" }
        ] }
    };
    var tourCache = {};
    var pannellumState = 0, pannellumQueue = [];
    function loadPannellum(cb){
      if (window.pannellum) return cb();
      pannellumQueue.push(cb);
      if (pannellumState !== 0) return;
      pannellumState = 1;
      var l = document.createElement("link"); l.rel = "stylesheet";
      l.href = "vendor/pannellum.css";
      document.head.appendChild(l);
      var s = document.createElement("script");
      s.src = "vendor/pannellum.js";
      s.onload = function(){ pannellumState = 2; var q = pannellumQueue; pannellumQueue = []; q.forEach(function(f){ f(); }); };
      s.onerror = function(){ pannellumState = 0; pannellumQueue = []; };
      document.head.appendChild(s);
    }
    function getTour(mls, cb){
      var done = false;
      function once(t){ if (done) return; done = true; cb(t); }
      if (Object.prototype.hasOwnProperty.call(SAMPLE_TOURS, mls)) return once(SAMPLE_TOURS[mls]);
      if (Object.prototype.hasOwnProperty.call(tourCache, mls)) return once(tourCache[mls]);
      fetch(TOUR_API_URL + "/api/tour/" + encodeURIComponent(mls))
        .then(function(r){ return r.json(); })
        .then(function(d){ tourCache[mls] = (d && d.ok && d.tour) ? d.tour : null; return tourCache[mls]; })
        .then(function(t){ once(t); })
        .catch(function(){ once(null); });
    }
    var tourViewer = null;
    window.openTour = function(mls){
      var dEl = document.getElementById("dlg");
      if (dEl && dEl.open) { try { dEl.close(); } catch(e){} }
      getTour(mls, function(tour){
        if (!tour || !Array.isArray(tour.rooms) || !tour.rooms.length) return;
        $("tourModal").style.display = "block";
        document.body.style.overflow = "hidden";
        loadPannellum(function(){
          if (!window.pannellum) return;
          var scenes = {}, first = null;
          tour.rooms.forEach(function(r, i){
            var id = "room" + i; if (i === 0) first = id;
            scenes[id] = { title: r.name || ("Room " + (i+1)), type: "equirectangular", panorama: r.url, hotSpots: [] };
            r._sid = id;
          });
          var idOf = {}; tour.rooms.forEach(function(r){ idOf[r.id] = r._sid; });
          var names = {}; tour.rooms.forEach(function(r){ names[r.id] = r.name || ""; });
          (Array.isArray(tour.hotspots) ? tour.hotspots : []).forEach(function(h){
            var f = idOf[h.from], tt = idOf[h.to];
            if (f && tt && scenes[f]) scenes[f].hotSpots.push({ pitch: h.pitch, yaw: h.yaw, type: "scene", text: h.text || names[h.to] || "", sceneId: tt });
          });
          tourViewer = pannellum.viewer("tourPano", { default: { firstScene: first, sceneFadeDuration: 1000 }, scenes: scenes });
        });
      });
    };
    function closeTour(){
      $("tourModal").style.display = "none";
      document.body.style.overflow = "";
      if (tourViewer){ try { tourViewer.destroy(); } catch(e){} tourViewer = null; }
      $("tourPano").innerHTML = "";
    }
    var CITIES = ["Burnaby","Coquitlam","Port Coquitlam","Richmond","Surrey","Vancouver"];
    var LISTINGS = [
      {mls:"R2991001",price:689000,street:"2108-4981 Kingsway",city:"Burnaby",postal:"V5H 4M2",type:"condo",beds:2,baths:2,sqft:872,lot:null,year:2019,parking:"underground",stalls:1,strata:412,tax:2410,status:"active",listed:"2026-10-08",dom:10,photo:"photos/R2991001.webp",
       features:["balcony","laundry","gym","concierge"],
       desc:{en:"Bright 2-bed corner unit steps to Metrotown SkyTrain. Open plan, quartz counters, balcony with city views.",
             fa:"واحد گوشه‌ای روشن دوخوابه، چند قدمی اسکای‌ترین متروتاون. نقشه‌ی باز، کانتر کوارتز و بالکن با چشم‌انداز شهر.",
             hi:"मेट्रोटाउन स्काईट्रेन से कुछ कदम दूर उजला 2-बेड कॉर्नर यूनिट। ओपन प्लान, क्वार्ट्ज़ काउंटर, शहर के दृश्य वाली बालकनी।",
             zh:"明亮的两卧转角单位,步行可达 Metrotown 天车站。开放式布局,石英台面,阳台享城市景观。"}},
      {mls:"R2991002",price:749000,street:"45-1188 Inlet Street",city:"Coquitlam",postal:"V3B 6A9",type:"townhouse",beds:3,baths:2.5,sqft:1340,lot:null,year:2016,parking:"garage",stalls:2,strata:285,tax:3120,status:"active",listed:"2026-10-02",dom:16,photo:"photos/R2991002.webp",
       features:["fenced_yard","dbl_garage","fireplace"],
       desc:{en:"End-unit townhouse near Lafarge Lake. Double garage, fenced yard, top-floor primary retreat.",
             fa:"تاون‌هاوس انتهایی نزدیک دریاچه‌ی لافارژ. گاراژ دوبل، حیاط محصور و اتاق‌خواب اصلی در طبقه‌ی بالا.",
             hi:"लाफ़ार्ज झील के पास एंड-यूनिट टाउनहाउस। डबल गैरेज, बाड़ वाला आँगन, ऊपरी मंज़िल पर मुख्य बेडरूम।",
             zh:"位于 Lafarge 湖附近的端户联排别墅。双车位车库、围栏庭院,顶层主卧套房。"}},
      {mls:"R2991003",price:1299000,street:"7421 18th Avenue",city:"Burnaby",postal:"V3N 1H3",type:"house",beds:4,baths:3,sqft:2310,lot:6012,year:1988,parking:"garage",stalls:2,strata:null,tax:5260,status:"active",listed:"2026-09-28",dom:20,photo:"photos/R2991003.webp",
       features:["reno_kitchen","suite","deck"],
       desc:{en:"Updated family home on a quiet street. Renovated kitchen (2023), 1-bed suite potential (verify legality).",
             fa:"خانه‌ی خانوادگی به‌روز در خیابانی آرام. آشپزخانه‌ی بازسازی‌شده (۲۰۲۳) و قابلیت سوئیت یک‌خوابه (قانونی‌بودن را بررسی کنید).",
             hi:"शांत सड़क पर नवीनीकृत पारिवारिक घर। 2023 में नवीनीकृत रसोई, 1-बेड सूट की संभावना (वैधता जाँचें)।",
             zh:"位于安静街道的翻新家庭住宅。厨房于 2023 年翻新,具备一卧套房潜力(请核实合法性)。"}},
      {mls:"R2991004",price:549000,street:"1506-833 Seymour Street",city:"Vancouver",postal:"V6B 0G4",type:"condo",beds:1,baths:1,sqft:618,lot:null,year:2011,parking:"underground",stalls:1,strata:498,tax:2050,status:"active",listed:"2026-10-12",dom:6,photo:"photos/R2991004.webp",
       features:["concierge","rooftop","bike_room"],
       desc:{en:"Downtown 1-bed, 2 blocks to Granville SkyTrain. Floor-to-ceiling windows, 24hr concierge.",
             fa:"یک‌خوابه در مرکز شهر، دو بلوک تا اسکای‌ترین گرنویل. پنجره‌های سرتاسری و پذیرش ۲۴ ساعته.",
             hi:"डाउनटाउन 1-बेड, ग्रानविल स्काईट्रेन से 2 ब्लॉक। फ़र्श से छत तक खिड़कियाँ, 24 घंटे कंसीयर्ज।",
             zh:"市中心一卧单位,距 Granville 天车站仅两个街区。落地窗,24 小时礼宾服务。"}},
      {mls:"R2991005",price:899000,street:"22-15500 102A Avenue",city:"Surrey",postal:"V3R 7B4",type:"townhouse",beds:3,baths:2.5,sqft:1480,lot:null,year:2021,parking:"garage",stalls:2,strata:310,tax:3480,status:"pending",listed:"2026-09-20",dom:28,photo:"photos/R2991005.webp",
       features:["ac","ev","playground"],
       desc:{en:"Near-new townhouse in Guildford. Air conditioning, EV charging in the garage, steps to parks and schools.",
             fa:"تاون‌هاوس تقریباً نوساز در گیلدفورد. کولر گازی، شارژر خودرو برقی در گاراژ و نزدیک پارک و مدرسه.",
             hi:"गिल्डफ़ोर्ड में लगभग नया टाउनहाउस। एयर कंडीशनिंग, गैरेज में EV चार्जिंग, पार्क और स्कूल पास में।",
             zh:"Guildford 近乎全新的联排别墅。配备空调、车库配备电动车充电,步行可达公园和学校。"}},
      {mls:"R2991006",price:425000,street:"309-550 Kirkland Avenue",city:"Port Coquitlam",postal:"V3B 1H2",type:"condo",beds:2,baths:1,sqft:795,lot:null,year:1994,parking:"underground",stalls:1,strata:365,tax:1760,status:"active",listed:"2026-10-05",dom:13,photo:"photos/R2991006.webp",
       features:["mt_view","new_roof","storage"],
       desc:{en:"2-bed with mountain views. Newer roof (2022), well-managed strata, near West Coast Express.",
             fa:"دوخوابه با چشم‌انداز کوهستان. سقف نسبتاً نوساز (۲۰۲۲)، مدیریت خوب ساختمان و نزدیک قطار West Coast Express.",
             hi:"पहाड़ के दृश्य वाला 2-बेड। अपेक्षाकृत नई छत (2022), अच्छी तरह प्रबंधित स्ट्राटा, West Coast Express के पास।",
             zh:"两卧单位,享山景。屋顶较新(2022年),物业管理良好,靠近西海岸快线。"}}
    ];
    var LEADS = [
      {name:"Sara Mohammadi",intent:"buyer",city:"Burnaby",budget:"b3",stage:"viewing",source:"web",sample:true},
      {name:"Rajesh Kumar",intent:"investor",city:"Surrey",budget:"b3",stage:"contacted",source:"ref",sample:true},
      {name:"Li Wei",intent:"buyer",city:"Vancouver",budget:"b4",stage:"new",source:"web",sample:true},
      {name:"Navdeep Singh",intent:"seller",city:"Coquitlam",budget:"b0",stage:"new",source:"open",sample:true},
      {name:"Maryam Ahmadi",intent:"buyer",city:"Port Coquitlam",budget:"b1",stage:"offer",source:"web",sample:true}
    ];
    var I18N = {
    en:{brand_sub:"Metro Vancouver · BC, Canada",nav_listings:"Listings",nav_calculator:"Mortgage Calculator",nav_match:"Match Assistant",nav_contact:"Contact",nav_crm:"Advisor Panel",
      banner_tag:"Preview",banner:"Sample listings are shown for design preview. Live MLS® data connects after licensing (2027).",
      hero_title:"Find your next home in Metro Vancouver — in your language",hero_sub:"Browse sample homes, run the Canadian mortgage math, and learn the steps to buying — in English, فارسی, हिन्दी or 中文.",
      cta_search:"Browse listings",cta_calc:"Calculate a payment",stat_listings:"Sample listings",stat_cities:"Metro Vancouver cities",stat_langs:"Site languages",
      search_title:"Search listings",search_sub:"Adjust the filters — results update instantly.",f_query:"Search",f_query_ph:"Address, city, or MLS® #",
      f_city:"City",all_cities:"All cities",f_type:"Property type",all_types:"All types",f_price:"Max price",any_price:"No limit",f_beds:"Min. bedrooms",any:"Any",
      f_sort:"Sort",s_featured:"Featured",s_price_asc:"Price: low to high",s_price_desc:"Price: high to low",s_newest:"Newest first",s_dom:"Longest on market",
      results:"{n} results",no_results:"No listings match these filters. Try loosening a filter or two.",reset:"Clear filters",
      beds:"bd",baths:"ba",sqft:"sq ft",dom:"days on market",strata_mo:"strata/mo",view:"Details",active:"Active",pending:"Pending",sold:"Sold",presale:"Presale",completion:"Completion",deposit:"Deposit",under_orig:"under original contract",assignment_ok:"Assignment allowed",f_presale:"Presales only",
      type_condo:"Condo",type_townhouse:"Townhouse",type_house:"House",
      cities:{Burnaby:"Burnaby",Coquitlam:"Coquitlam","Port Coquitlam":"Port Coquitlam",Richmond:"Richmond",Surrey:"Surrey",Vancouver:"Vancouver"},
      m_price:"Price",m_type:"Property type",d_beds:"Bedrooms",m_baths:"Bathrooms",m_interior:"Interior area",m_lot:"Lot size",m_year:"Year built",m_parking:"Parking",
      m_strata:"Strata fee (monthly)",mc_title:"Estimated monthly cost",mc_mort:"Mortgage (20% down · 4.79% · 25 yrs)",mc_tax:"Property tax",mc_heat:"Heating (est.)",mc_note:"Estimate for illustration only — not a quote.",est_mo:"est. /mo",m_dom:"Days on market",m_listed:"Listed",m_mls:"MLS® #",m_features:"Features",m_desc:"Description",na:"Not reported",na_ap:"N/A",m_ask:"Ask about this home",
      parking_garage:"Garage",parking_underground:"Underground",parking_carport:"Carport",parking_street:"Street",parking_none:"None",stalls:" · {n} stall(s)",
      features:{balcony:"Balcony",laundry:"In-suite laundry",gym:"Gym",concierge:"Concierge",fenced_yard:"Fenced yard",dbl_garage:"Double garage",fireplace:"Gas fireplace",reno_kitchen:"Renovated kitchen",suite:"Suite potential",deck:"Deck",ac:"Air conditioning",ev:"EV charging",playground:"Playground",rooftop:"Rooftop deck",bike_room:"Bike room",mt_view:"Mountain view",new_roof:"Newer roof",storage:"Storage locker"},
      calc_title:"Mortgage calculator",calc_sub:"Estimates use the standard Canadian formula (semi-annual compounding). CMHC insurance is included when the down payment is under 20%.",
      c_price:"Home price ($)",c_down:"Down payment",c_rate:"Annual rate (%)",c_amort:"Amortization (years)",c_freq:"Payment frequency",
      freq_monthly:"Monthly",freq_biweekly:"Bi-weekly",freq_weekly:"Weekly",pay_monthly:"Monthly payment",pay_biweekly:"Bi-weekly payment",pay_weekly:"Weekly payment",
      r_mortgage:"Mortgage amount",r_cmhc:"CMHC premium (estimate, added to mortgage)",r_interest:"Total interest",r_total:"Total of all payments",
      stress:"Canadian stress test: you must qualify at the higher of your contract rate + 2% or the 5.25% benchmark rate — a qualifying payment of about {x}/month.",calc_warn_min:"Note: the minimum down payment for this price is about {x} — a smaller down payment isn't available.",calc_warn_insure:"Homes priced at $1,500,000 or more need at least 20% down — insured (CMHC) mortgages aren't available below that.",
      disclaimer:"Figures are educational estimates only — not a mortgage offer or financial advice.",
      match_title:"Home match assistant",match_sub:"Tell it your budget and must-haves — it shows only sample listings that fit your stated criteria, with the reason each one fits. A match means the listing fits the criteria you entered — it is not a quality ranking, a recommendation, or an investment guarantee. It never invents a listing.",
      m_budget:"Max budget",m_beds:"Min. bedrooms",m_btn:"Find my matches",m_none:"No sample listing matches those requirements.",m_matches:"{n} match(es)",
      why_under:"Under budget by {x}",why_beds:"{n} bedrooms",why_city:"In {city}",why_strata:"Low strata: {x}/mo",
      lead_title:"Get in touch",lead_sub:"Fill in the form — the button opens your email app with everything addressed to erfanbcrealestate@gmail.com, ready to send.",
      l_name:"Full name",l_email:"Email",l_phone:"Phone (optional)",l_intent:"I am…",intent_buyer:"Buying a home",intent_seller:"Selling a home",intent_investor:"Investing",intent_renter:"Renting",
      l_city:"City of interest",l_budget:"Budget range",b0:"Not sure yet",b1:"Under $500k",b2:"$500k – $750k",b3:"$750k – $1M",b4:"$1M – $1.5M",b5:"Over $1.5M",
      l_msg:"Your message",l_msg_ph:"e.g. Looking for a 2-bed condo near SkyTrain in Burnaby…",l_lang:"Preferred reply language",l_submit:"Send by email",
      l_success:"Your email is ready to send — thank you.",
      crm_title:"Advisor panel — leads",crm_sub:"A sample view of the CRM. Rows marked “sample” are demo data; leads sent from the form above are added here for this session.",
      th_name:"Name",th_intent:"Intent",th_city:"City",th_budget:"Budget",th_stage:"Stage",th_source:"Source",
      stage_new:"New",stage_contacted:"Contacted",stage_viewing:"Viewing",stage_offer:"Offer",stage_closed:"Closed",
      src_web:"Website form",src_ref:"Referral",src_open:"Open house",src_form:"This page’s form",sample:"sample",
      contact_title:"Contact",contact_text:"For general questions about the tools, guides and sample listings on this site, email:",
      footer_note:"This website is a preview. Listings are sample data, not live MLS® listings; live data connects after Erfan is licensed (exam January 2027). Photos illustrate property types only.",
      rights:"© 2026 Erfan BC Real Estate — British Columbia, Canada",
      mail_subject:"Website enquiry from {name}",mail_body:"Name: {name}\nEmail: {email}\nPhone: {phone}\nIntent: {intent}\nCity of interest: {city}\nBudget: {budget}\nPreferred language: {lang}\n\nMessage:\n{msg}",
      ask_subject:"Question about MLS® {mls} ({addr})"},
    fa:{brand_sub:"مترو ونکوور · بریتیش‌کلمبیا، کانادا",nav_listings:"فایل‌ها",nav_calculator:"ماشین‌حساب وام",nav_match:"دستیار تطبیق",nav_contact:"تماس",nav_crm:"پنل مشاور",
      banner_tag:"پیش‌نمایش",banner:"فایل‌های زیر نمونه‌اند و برای پیش‌نمایش طراحی سایت نمایش داده می‌شوند. داده‌ی زنده‌ی MLS® پس از دریافت لایسنس (۲۰۲۷) وصل می‌شود.",
      hero_title:"خانه‌ی بعدی‌تان در مترو ونکوور — به زبان خودتان",hero_sub:"مرور خانه‌های نمونه، محاسبه‌ی اقساط وام مسکن کانادا و آشنایی با مراحل خرید — به انگلیسی، فارسی، هندی یا چینی.",
      cta_search:"مشاهده‌ی فایل‌ها",cta_calc:"محاسبه‌ی قسط وام",stat_listings:"فایل نمونه",stat_cities:"شهر در مترو ونکوور",stat_langs:"زبان سایت",
      search_title:"جست‌وجوی فایل‌ها",search_sub:"فیلترها را تنظیم کنید؛ نتایج بلافاصله به‌روز می‌شوند.",f_query:"جست‌وجو",f_query_ph:"آدرس، شهر یا شماره MLS®…",
      f_city:"شهر",all_cities:"همه‌ی شهرها",f_type:"نوع ملک",all_types:"همه‌ی انواع",f_price:"حداکثر قیمت",any_price:"بدون محدودیت",f_beds:"حداقل خواب",any:"هر تعداد",
      f_sort:"مرتب‌سازی",s_featured:"پیش‌فرض",s_price_asc:"قیمت: کم به زیاد",s_price_desc:"قیمت: زیاد به کم",s_newest:"جدیدترین‌ها",s_dom:"بیشترین روزهای بازار",
      results:"{n} نتیجه",no_results:"با این فیلترها فایلی پیدا نشد. یکی دو فیلتر را کمتر کنید.",reset:"حذف فیلترها",
      beds:"خواب",baths:"حمام",sqft:"فوت مربع",dom:"روز در بازار",strata_mo:"شارژ/ماه",view:"جزئیات",active:"فعال",pending:"در حال نهایی‌شدن",sold:"فروخته‌شده",presale:"پیش‌فروش",completion:"تکمیل",deposit:"ودیعه",under_orig:"زیر قیمت قرارداد اصلی",assignment_ok:"واگذاری مجاز است",f_presale:"فقط پیش‌فروش",
      type_condo:"آپارتمان",type_townhouse:"تاون‌هاوس",type_house:"خانه‌ی مستقل",
      cities:{Burnaby:"برنابی",Coquitlam:"کوکیتلام","Port Coquitlam":"پورت کوکیتلام",Richmond:"ریچموند",Surrey:"ساری",Vancouver:"ونکوور"},
      m_price:"قیمت",m_type:"نوع ملک",d_beds:"اتاق خواب",m_baths:"حمام",m_interior:"زیربنا",m_lot:"مساحت زمین",m_year:"سال ساخت",m_parking:"پارکینگ",
      m_strata:"شارژ ساختمان (ماهانه)",mc_title:"هزینه‌ی ماهانه‌ی تخمینی",mc_mort:"وام (۲۰٪ پیش‌پرداخت · ۴٫۷۹٪ · ۲۵ سال)",mc_tax:"مالیات ملک",mc_heat:"گرمایش (تخمینی)",mc_note:"فقط برآورد برای نمایش — پیشنهاد رسمی نیست.",est_mo:"تخمینی /ماه",m_dom:"روزهای در بازار",m_listed:"تاریخ ثبت",m_mls:"شماره MLS®",m_features:"امکانات",m_desc:"توضیحات",na:"ثبت نشده",na_ap:"ندارد",m_ask:"پرسش درباره‌ی این خانه",
      parking_garage:"گاراژ",parking_underground:"زیرزمینی",parking_carport:"سرپوشیده",parking_street:"خیابانی",parking_none:"ندارد",stalls:" · {n} جای پارک",
      features:{balcony:"بالکن",laundry:"رختشویی داخل واحد",gym:"باشگاه",concierge:"پذیرش",fenced_yard:"حیاط محصور",dbl_garage:"گاراژ دوبل",fireplace:"شومینه گازی",reno_kitchen:"آشپزخانه بازسازی‌شده",suite:"قابلیت سوئیت",deck:"تراس",ac:"کولر گازی",ev:"شارژر خودرو برقی",playground:"زمین بازی",rooftop:"تراس پشت‌بام",bike_room:"اتاق دوچرخه",mt_view:"چشم‌انداز کوهستان",new_roof:"سقف نوسازی‌شده",storage:"انباری"},
      calc_title:"ماشین‌حساب وام مسکن",calc_sub:"برآورد با فرمول استاندارد کانادا (سود مرکب نیم‌سالانه). اگر پیش‌پرداخت کمتر از ۲۰٪ باشد، بیمه‌ی CMHC هم حساب می‌شود.",
      c_price:"قیمت خانه (دلار)",c_down:"پیش‌پرداخت",c_rate:"نرخ سود سالانه (٪)",c_amort:"مدت بازپرداخت (سال)",c_freq:"دوره‌ی پرداخت",
      freq_monthly:"ماهانه",freq_biweekly:"دو هفته یک‌بار",freq_weekly:"هفتگی",pay_monthly:"قسط ماهانه",pay_biweekly:"قسط دوهفته‌ای",pay_weekly:"قسط هفتگی",
      r_mortgage:"مبلغ وام",r_cmhc:"بیمه‌ی CMHC (برآورد، به وام اضافه می‌شود)",r_interest:"کل سود پرداختی",r_total:"مجموع کل پرداخت‌ها",
      stress:"تست استرس کانادا: باید با نرخ بالاتر از میان «نرخ قرارداد + ۲٪» و «نرخ معیار ۵٫۲۵٪» واجد شرایط شوید؛ قسط احتسابی حدود {x} در ماه است.",calc_warn_min:"توجه: حداقل پیش‌پرداخت برای این قیمت حدود {x} است — پیش‌پرداخت کمتر از این ممکن نیست.",calc_warn_insure:"خانه‌های ۱٫۵ میلیون دلار و بیشتر حداقل ۲۰٪ پیش‌پرداخت می‌خواهند — وام بیمه‌شده (CMHC) با کمتر از این ممکن نیست.",
      disclaimer:"این ارقام فقط برآورد آموزشی‌اند و پیشنهاد وام یا مشاوره‌ی مالی نیستند.",
      match_title:"دستیار تطبیق خانه",match_sub:"بودجه و نیازتان را بگویید؛ دستیار فقط فایل‌های نمونه‌ای را نشان می‌دهد که با معیارهای اعلامی شما جور درمی‌آیند، همراه با دلیل جورشدن هرکدام. «تطبیق» یعنی فایل با معیارهای واردشده‌ی شما می‌خواند — رتبه‌بندی کیفیت، توصیه یا تضمین سرمایه‌گذاری نیست. هیچ فایلی ساخته نمی‌شود.",
      m_budget:"حداکثر بودجه",m_beds:"حداقل خواب",m_btn:"پیدا کردن موارد منطبق",m_none:"موردی با این شرایط در فایل‌های نمونه نیست.",m_matches:"{n} مورد منطبق",
      why_under:"زیر بودجه به اندازه‌ی {x}",why_beds:"{n} خواب",why_city:"در {city}",why_strata:"شارژ پایین: {x} در ماه",
      lead_title:"تماس بگیرید",lead_sub:"فرم را پر کنید؛ با زدن دکمه، ایمیل آماده‌شده در برنامه‌ی ایمیل شما باز می‌شود تا مستقیم به erfanbcrealestate@gmail.com بفرستید.",
      l_name:"نام کامل",l_email:"ایمیل",l_phone:"تلفن (اختیاری)",l_intent:"قصد شما",intent_buyer:"خرید خانه",intent_seller:"فروش خانه",intent_investor:"سرمایه‌گذاری",intent_renter:"اجاره",
      l_city:"شهر موردنظر",l_budget:"بازه‌ی بودجه",b0:"هنوز مطمئن نیستم",b1:"کمتر از ۵۰۰ هزار دلار",b2:"۵۰۰ تا ۷۵۰ هزار دلار",b3:"۷۵۰ هزار تا ۱ میلیون دلار",b4:"۱ تا ۱٫۵ میلیون دلار",b5:"بیش از ۱٫۵ میلیون دلار",
      l_msg:"پیام شما",l_msg_ph:"مثلاً: دنبال آپارتمان دوخوابه نزدیک اسکای‌ترین در برنابی هستم…",l_lang:"زبان ترجیحی برای پاسخ",l_submit:"ارسال با ایمیل",
      l_success:"ایمیل شما آماده‌ی ارسال شد — ممنون از پیامتان.",
      crm_title:"پنل مشاور — سرنخ‌ها",crm_sub:"نمای نمونه از پنل مدیریت مشتری. ردیف‌های «نمونه» داده‌ی آزمایشی‌اند؛ لیدهای ارسالی از فرم بالا برای همین نشست به این جدول اضافه می‌شوند.",
      th_name:"نام",th_intent:"قصد",th_city:"شهر",th_budget:"بودجه",th_stage:"مرحله",th_source:"منبع",
      stage_new:"جدید",stage_contacted:"تماس گرفته شد",stage_viewing:"در حال بازدید",stage_offer:"پیشنهاد",stage_closed:"بسته شد",
      src_web:"فرم وب‌سایت",src_ref:"معرفی",src_open:"بازدید عمومی",src_form:"فرم همین صفحه",sample:"نمونه",
      contact_title:"تماس",contact_text:"برای پرسش‌های عمومی درباره‌ی ابزارها، راهنماها و فایل‌های نمونه‌ی این سایت، ایمیل بزنید:",
      footer_note:"این وب‌سایت پیش‌نمایش است. فایل‌ها داده‌ی نمونه‌اند، نه آگهی‌های زنده‌ی MLS®؛ داده‌ی زنده پس از دریافت لایسنس عرفان (آزمون ژانویه‌ی ۲۰۲۷) وصل می‌شود. عکس‌ها فقط برای نمایش نوع ملک‌اند.",
      rights:"© 2026 Erfan BC Real Estate — بریتیش‌کلمبیا، کانادا",
      mail_subject:"درخواست از وب‌سایت — {name}",mail_body:"نام: {name}\nایمیل: {email}\nتلفن: {phone}\nقصد: {intent}\nشهر موردنظر: {city}\nبودجه: {budget}\nزبان ترجیحی: {lang}\n\nپیام:\n{msg}",
      ask_subject:"پرسش درباره‌ی MLS® {mls} ({addr})"}
    };

    I18N.hi = {brand_sub:"मेट्रो वैंकूवर · BC, कनाडा",nav_listings:"लिस्टिंग",nav_calculator:"मॉर्गेज कैलकुलेटर",nav_match:"मैच सहायक",nav_contact:"संपर्क",nav_crm:"एडवाइज़र पैनल",
      banner_tag:"पूर्वावलोकन",banner:"नीचे दी गई लिस्टिंग डिज़ाइन पूर्वावलोकन के लिए नमूना डेटा हैं। लाइव MLS® डेटा लाइसेंस मिलने के बाद (2027) जुड़ेगा।",
      hero_title:"मेट्रो वैंकूवर में अपना अगला घर खोजें — अपनी भाषा में",hero_sub:"नमूना घर देखें, कनाडाई मॉर्गेज की गणना करें और खरीदने के चरण जानें — अंग्रेज़ी, फ़ारसी, हिन्दी या चीनी में।",
      cta_search:"लिस्टिंग देखें",cta_calc:"किस्त की गणना करें",stat_listings:"नमूना लिस्टिंग",stat_cities:"मेट्रो वैंकूवर शहर",stat_langs:"साइट भाषाएँ",
      search_title:"लिस्टिंग खोजें",search_sub:"फ़िल्टर बदलें — नतीजे तुरंत अपडेट होते हैं।",f_query:"खोजें",f_query_ph:"पता, शहर या MLS® नंबर…",
      f_city:"शहर",all_cities:"सभी शहर",f_type:"प्रॉपर्टी प्रकार",all_types:"सभी प्रकार",f_price:"अधिकतम कीमत",any_price:"कोई सीमा नहीं",f_beds:"न्यूनतम बेडरूम",any:"कोई भी",
      f_sort:"क्रम",s_featured:"विशेष",s_price_asc:"कीमत: कम से ज़्यादा",s_price_desc:"कीमत: ज़्यादा से कम",s_newest:"सबसे नया पहले",s_dom:"बाज़ार में सबसे लंबे समय से",
      results:"{n} नतीजे",no_results:"इन फ़िल्टर के साथ कोई लिस्टिंग नहीं मिली। एक-दो फ़िल्टर ढीले करके देखें।",reset:"फ़िल्टर साफ़ करें",
      beds:"बेड",baths:"बाथ",sqft:"वर्ग फुट",dom:"दिन बाज़ार में",strata_mo:"स्ट्राटा/माह",view:"विवरण",active:"सक्रिय",pending:"लंबित",sold:"बिक गया",presale:"प्रीसेल",completion:"पूर्णता",deposit:"जमा",under_orig:"मूल अनुबंध से कम",assignment_ok:"असाइनमेंट अनुमत है",f_presale:"केवल प्रीसेल",
      type_condo:"कॉन्डो",type_townhouse:"टाउनहाउस",type_house:"अलग मकान",
      cities:{Burnaby:"बर्नाबी",Coquitlam:"कोक्विटलम","Port Coquitlam":"पोर्ट कोक्विटलम",Richmond:"रिचमंड",Surrey:"सरी",Vancouver:"वैंकूवर"},
      m_price:"कीमत",m_type:"प्रॉपर्टी प्रकार",d_beds:"बेडरूम",m_baths:"बाथरूम",m_interior:"आंतरिक क्षेत्र",m_lot:"प्लॉट क्षेत्र",m_year:"निर्माण वर्ष",m_parking:"पार्किंग",
      m_strata:"स्ट्राटा शुल्क (मासिक)",mc_title:"अनुमानित मासिक लागत",mc_mort:"मॉर्गेज (20% डाउन · 4.79% · 25 वर्ष)",mc_tax:"संपत्ति कर",mc_heat:"हीटिंग (अनुमानित)",mc_note:"केवल अनुमान — आधिकारिक उद्धरण नहीं।",est_mo:"अनुमानित /माह",m_dom:"बाज़ार में दिन",m_listed:"सूचीबद्ध तिथि",m_mls:"MLS® नंबर",m_features:"विशेषताएँ",m_desc:"विवरण",na:"उपलब्ध नहीं",na_ap:"लागू नहीं",m_ask:"इस घर के बारे में पूछें",
      parking_garage:"गैरेज",parking_underground:"भूमिगत",parking_carport:"कारपोर्ट",parking_street:"सड़क",parking_none:"नहीं",stalls:" · {n} स्थान",
      features:{balcony:"बालकनी",laundry:"यूनिट में लॉन्ड्री",gym:"जिम",concierge:"कंसीयर्ज",fenced_yard:"बाड़ वाला आँगन",dbl_garage:"डबल गैरेज",fireplace:"गैस फ़ायरप्लेस",reno_kitchen:"नवीनीकृत रसोई",suite:"सूट की संभावना",deck:"डेक",ac:"एयर कंडीशनिंग",ev:"EV चार्जिंग",playground:"खेल का मैदान",rooftop:"रूफ़टॉप डेक",bike_room:"बाइक रूम",mt_view:"पहाड़ का दृश्य",new_roof:"अपेक्षाकृत नई छत",storage:"स्टोरेज लॉकर"},
      calc_title:"मॉर्गेज कैलकुलेटर",calc_sub:"अनुमान कनाडाई मानक सूत्र (अर्ध-वार्षिक चक्रवृद्धि) से लगाया जाता है। डाउन पेमेंट 20% से कम होने पर CMHC बीमा शामिल है।",
      c_price:"घर की कीमत ($)",c_down:"डाउन पेमेंट",c_rate:"वार्षिक ब्याज दर (%)",c_amort:"अवधि (वर्ष)",c_freq:"भुगतान आवृत्ति",
      freq_monthly:"मासिक",freq_biweekly:"हर दो सप्ताह",freq_weekly:"साप्ताहिक",pay_monthly:"मासिक किस्त",pay_biweekly:"द्वि-साप्ताहिक किस्त",pay_weekly:"साप्ताहिक किस्त",
      r_mortgage:"मॉर्गेज राशि",r_cmhc:"CMHC प्रीमियम (अनुमान, मॉर्गेज में जुड़ा)",r_interest:"कुल ब्याज",r_total:"कुल भुगतान",
      stress:"कनाडाई स्ट्रेस टेस्ट: आपको अनुबंध दर + 2% या 5.25% बेंचमार्क दर — जो भी अधिक हो — पर योग्य होना होगा — योग्यता किस्त लगभग {x}/माह है।",calc_warn_min:"नोट: इस कीमत के लिए न्यूनतम डाउन पेमेंट लगभग {x} है — इससे कम डाउन पेमेंट उपलब्ध नहीं है।",calc_warn_insure:"$1,500,000 या अधिक कीमत के घरों के लिए कम से कम 20% डाउन पेमेंट चाहिए — इससे कम पर बीमित (CMHC) मॉर्गेज उपलब्ध नहीं है।",
      disclaimer:"ये आंकड़े केवल शैक्षिक अनुमान हैं; यह मॉर्गेज प्रस्ताव या वित्तीय सलाह नहीं है।",
      match_title:"होम मैच सहायक",match_sub:"अपना बजट और ज़रूरतें बताएँ — सहायक केवल वे नमूना लिस्टिंग दिखाता है जो आपके बताए मानदंडों पर फिट बैठती हैं, और हर एक के फिट होने का कारण भी बताता है। मैच का मतलब है कि लिस्टिंग आपके दर्ज किए मानदंडों पर खरी उतरती है — यह गुणवत्ता रैंकिंग, सिफ़ारिश या निवेश गारंटी नहीं है। यह कभी लिस्टिंग गढ़ता नहीं।",
      m_budget:"अधिकतम बजट",m_beds:"न्यूनतम बेडरूम",m_btn:"मेरे मैच खोजें",m_none:"इन शर्तों से कोई नमूना लिस्टिंग मेल नहीं खाती।",m_matches:"{n} मैच",
      why_under:"बजट से {x} कम",why_beds:"{n} बेडरूम",why_city:"{city} में",why_strata:"कम स्ट्राटा: {x}/माह",
      lead_title:"संपर्क करें",lead_sub:"फ़ॉर्म भरें — बटन दबाने पर आपका ईमेल ऐप खुल जाएगा, जिसमें सब कुछ erfanbcrealestate@gmail.com पर भेजने के लिए तैयार होगा।",
      l_name:"पूरा नाम",l_email:"ईमेल",l_phone:"फ़ोन (वैकल्पिक)",l_intent:"आपका उद्देश्य",intent_buyer:"घर खरीदना",intent_seller:"घर बेचना",intent_investor:"निवेश",intent_renter:"किराए पर लेना",
      l_city:"रुचि का शहर",l_budget:"बजट सीमा",b0:"अभी निश्चित नहीं",b1:"$500k से कम",b2:"$500k – $750k",b3:"$750k – $1M",b4:"$1M – $1.5M",b5:"$1.5M से अधिक",
      l_msg:"आपका संदेश",l_msg_ph:"जैसे: बर्नाबी में स्काईट्रेन के पास 2-बेड कॉन्डो चाहिए…",l_lang:"जवाब की पसंदीदा भाषा",l_submit:"ईमेल से भेजें",
      l_success:"आपका ईमेल भेजने के लिए तैयार है — धन्यवाद।",
      crm_title:"एडवाइज़र पैनल — लीड",crm_sub:"CRM का नमूना दृश्य। «नमूना» पंक्तियाँ डेमो डेटा हैं; ऊपर के फ़ॉर्म से भेजी गई लीड इस सत्र के लिए यहाँ जुड़ जाती हैं।",
      th_name:"नाम",th_intent:"उद्देश्य",th_city:"शहर",th_budget:"बजट",th_stage:"चरण",th_source:"स्रोत",
      stage_new:"नया",stage_contacted:"संपर्क किया",stage_viewing:"देखना जारी",stage_offer:"ऑफ़र",stage_closed:"बंद",
      src_web:"वेबसाइट फ़ॉर्म",src_ref:"रेफ़रल",src_open:"ओपन हाउस",src_form:"इस पेज का फ़ॉर्म",sample:"नमूना",
      contact_title:"संपर्क",contact_text:"इस साइट के टूल, मार्गदर्शिकाओं और नमूना लिस्टिंग के बारे में सामान्य प्रश्नों के लिए ईमेल करें:",
      footer_note:"यह वेबसाइट पूर्वावलोकन है। लिस्टिंग नमूना डेटा हैं, लाइव MLS® लिस्टिंग नहीं; लाइव डेटा एरफ़ान के लाइसेंस (परीक्षा जनवरी 2027) के बाद जुड़ेगा। फ़ोटो केवल प्रॉपर्टी प्रकार दिखाने के लिए हैं।",
      rights:"© 2026 Erfan BC Real Estate — ब्रिटिश कोलंबिया, कनाडा",
      mail_subject:"वेबसाइट पूछताछ — {name}",mail_body:"नाम: {name}\nईमेल: {email}\nफ़ोन: {phone}\nउद्देश्य: {intent}\nरुचि का शहर: {city}\nबजट: {budget}\nपसंदीदा भाषा: {lang}\n\nसंदेश:\n{msg}",
      ask_subject:"MLS® {mls} ({addr}) के बारे में प्रश्न"};

    I18N.zh = {brand_sub:"温哥华都会区 · 加拿大不列颠哥伦比亚省",nav_listings:"房源",nav_calculator:"房贷计算器",nav_match:"匹配助手",nav_contact:"联系",nav_crm:"顾问面板",
      banner_tag:"预览版",banner:"以下房源为设计预览用的示例数据。正式 MLS® 数据将在取得牌照后(2027年)接入。",
      hero_title:"在温哥华都会区找到您的下一个家 — 用您自己的语言",hero_sub:"浏览示例房源、计算加拿大房贷,并了解购房步骤 — 支持英语、波斯语、印地语和中文。",
      cta_search:"查看房源",cta_calc:"计算月供",stat_listings:"示例房源",stat_cities:"温哥华都会区城市",stat_langs:"网站语言",
      search_title:"搜索房源",search_sub:"调整筛选条件,结果即时更新。",f_query:"搜索",f_query_ph:"地址、城市或 MLS® 编号…",
      f_city:"城市",all_cities:"全部城市",f_type:"物业类型",all_types:"全部类型",f_price:"最高价格",any_price:"不限",f_beds:"最少卧室",any:"不限",
      f_sort:"排序",s_featured:"推荐",s_price_asc:"价格从低到高",s_price_desc:"价格从高到低",s_newest:"最新上架",s_dom:"上市天数最长",
      results:"{n} 条结果",no_results:"没有符合这些条件的房源,请减少筛选条件。",reset:"清除筛选",
      beds:"卧",baths:"卫",sqft:"平方英尺",dom:"上市天数",strata_mo:"管理费/月",view:"详情",active:"在售",pending:"待成交",sold:"已售",presale:"预售",completion:"交付",deposit:"定金",under_orig:"低于原始合同价",assignment_ok:"可转让",f_presale:"仅预售",
      type_condo:"公寓",type_townhouse:"联排别墅",type_house:"独立屋",
      cities:{Burnaby:"本拿比",Coquitlam:"高贵林","Port Coquitlam":"高贵林港",Richmond:"列治文",Surrey:"素里",Vancouver:"温哥华"},
      m_price:"价格",m_type:"物业类型",d_beds:"卧室",m_baths:"浴室",m_interior:"室内面积",m_lot:"占地面积",m_year:"建造年份",m_parking:"停车位",
      m_strata:"管理费(每月)",mc_title:"预计每月费用",mc_mort:"房贷(20%首付 · 4.79% · 25年)",mc_tax:"物业税",mc_heat:"暖气(估算)",mc_note:"仅供参考的估算 — 非正式报价。",est_mo:"估算 /月",m_dom:"上市天数",m_listed:"上市日期",m_mls:"MLS® 编号",m_features:"特色",m_desc:"描述",na:"未提供",na_ap:"不适用",m_ask:"咨询此房源",
      parking_garage:"车库",parking_underground:"地下停车",parking_carport:"车棚",parking_street:"路边",parking_none:"无",stalls:" · {n} 个车位",
      features:{balcony:"阳台",laundry:"室内洗衣",gym:"健身房",concierge:"礼宾服务",fenced_yard:"围栏庭院",dbl_garage:"双车位车库",fireplace:"燃气壁炉",reno_kitchen:"翻新厨房",suite:"套房潜力",deck:"露台",ac:"空调",ev:"电动车充电",playground:"儿童游乐场",rooftop:"屋顶露台",bike_room:"自行车房",mt_view:"山景",new_roof:"较新屋顶",storage:"储物柜"},
      calc_title:"房贷计算器",calc_sub:"按加拿大标准公式(半年复利)估算。首付低于 20% 时包含 CMHC 保险。",
      c_price:"房价($)",c_down:"首付",c_rate:"年利率(%)",c_amort:"贷款年限(年)",c_freq:"还款频率",
      freq_monthly:"每月",freq_biweekly:"每两周",freq_weekly:"每周",pay_monthly:"每月还款",pay_biweekly:"每两周还款",pay_weekly:"每周还款",
      r_mortgage:"贷款总额",r_cmhc:"CMHC 保险费(估算,计入贷款)",r_interest:"总利息",r_total:"还款总额",
      stress:"加拿大压力测试:您须按「合同利率 + 2%」与「5.25% 基准利率」中较高者通过资格审核 — 审核月供约为 {x}。",calc_warn_min:"注意:此价格的最低首付约为 {x}——低于此数额的首付不可用。",calc_warn_insure:"房价达到 $1,500,000 或以上时,首付至少需 20%——低于此比例无法获得保险型(CMHC)房贷。",
      disclaimer:"以上数字仅为教育性估算,不构成房贷要约或财务建议。",
      match_title:"房源匹配助手",match_sub:"告诉我们您的预算和需求——助手只会展示符合您所填标准的示例房源,并说明每套房源符合标准的原因。“匹配”是指房源符合您输入的标准,并不代表质量排名、推荐或投资保证。助手绝不虚构房源。",
      m_budget:"最高预算",m_beds:"最少卧室",m_btn:"查找我的匹配",m_none:"没有符合条件的示例房源。",m_matches:"{n} 个匹配",
      why_under:"低于预算 {x}",why_beds:"{n} 间卧室",why_city:"位于{city}",why_strata:"管理费低:{x}/月",
      lead_title:"联系我们",lead_sub:"填写表格 — 点击按钮后将打开您的邮件应用,邮件已准备好发送至 erfanbcrealestate@gmail.com。",
      l_name:"姓名",l_email:"电子邮箱",l_phone:"电话(可选)",l_intent:"您的目的",intent_buyer:"买房",intent_seller:"卖房",intent_investor:"投资",intent_renter:"租房",
      l_city:"意向城市",l_budget:"预算范围",b0:"尚未确定",b1:"$50万以下",b2:"$50万 – $75万",b3:"$75万 – $100万",b4:"$100万 – $150万",b5:"$150万以上",
      l_msg:"您的留言",l_msg_ph:"例如:我想在本拿比天车站附近找一套两卧公寓…",l_lang:"回复语言偏好",l_submit:"通过电子邮件发送",
      l_success:"您的邮件已准备好发送 — 谢谢。",
      crm_title:"顾问面板 — 客户线索",crm_sub:"CRM 示例视图。标记为「示例」的为测试数据;通过上方表单提交的线索会在本次会话中添加到此表。",
      th_name:"姓名",th_intent:"目的",th_city:"城市",th_budget:"预算",th_stage:"阶段",th_source:"来源",
      stage_new:"新线索",stage_contacted:"已联系",stage_viewing:"看房中",stage_offer:"已出价",stage_closed:"已成交",
      src_web:"网站表单",src_ref:"推荐",src_open:"开放日",src_form:"本页表单",sample:"示例",
      contact_title:"联系我们",contact_text:"如对本站的工具、指南和示例房源有一般性问题,请发送电子邮件:",
      footer_note:"本网站为预览版。房源为示例数据,并非实时 MLS® 房源;实时数据将在 Erfan 取得牌照(2027年1月考试)后接入。照片仅用于展示物业类型。",
      rights:"© 2026 Erfan BC Real Estate — 加拿大不列颠哥伦比亚省",
      mail_subject:"网站咨询 — {name}",mail_body:"姓名:{name}\n电子邮箱:{email}\n电话:{phone}\n目的:{intent}\n意向城市:{city}\n预算:{budget}\n偏好语言:{lang}\n\n留言:\n{msg}",
      ask_subject:"咨询 MLS® {mls}({addr})"};
    /* ---------- Phase-0 modules: buy vs rent, affordability, investor, guide ---------- */
    var I18N2 = {
    en:{nav_bvr:"Buy vs Rent",nav_afford:"Affordability Estimator",nav_invest:"Investor Analysis",nav_guide:"First-Time Buyers",
      bv_title:"Buy vs rent calculator",bv_sub:"Compare the true cost of buying against renting over time. Rent is gone for good; buying builds equity but adds taxes, strata and interest.",
      bv_price:"Home price ($)",bv_down:"Down payment (%)",bv_rate:"Mortgage rate (%)",bv_amort:"Amortization (years)",bv_tax:"Property tax (per year $)",bv_strata:"Strata / maintenance (per month $)",bv_appr:"Home price growth (per year %)",bv_rent:"Current rent (per month $)",bv_rentinc:"Rent increase (per year %)",bv_years:"Compare over (years)",
      bv_th_year:"Year",bv_th_rent:"Rent paid (total)",bv_th_spent:"Spent on buying (total)",bv_th_value:"Home value",bv_th_bal:"Mortgage left",bv_th_equity:"Equity",
      bv_cost_rent:"Total rent paid over {n} years",bv_spent:"Total spent on buying (down payment + payments + tax + strata)",bv_equity:"Your equity at year {n}",bv_cost_buy:"Net cost of buying (spending minus equity at the end)",
      bv_win_buy:"Buying comes out ahead by {x} over {n} years",bv_win_rent:"Renting comes out ahead by {x} over {n} years",bv_tie:"Over {n} years, buying and renting are essentially a tie",
      bv_assump:"Assumptions: the mortgage payment uses the Canadian semi-annual formula and stays fixed; property tax and strata stay at today's amounts; the home grows at the rate you entered; rent rises once a year. Property transfer tax and other purchase closing costs, selling costs, unexpected maintenance, CMHC insurance and investment returns on the down payment are not included — treat this as a planning estimate, not a guarantee.",
      af_title:"Affordability estimator",af_sub:"Canadian lenders use two ratios: GDS — housing costs at or under 32% of gross income; TDS — all debts at or under 40% of gross income. The lower of the two sets your ceiling.",
      af_income:"Gross household income (per year $)",af_debts:"Non-housing debts (per month $)",af_tax:"Property tax estimate (per year $)",af_heat:"Heating cost (per month $)",af_rate:"Contract rate (%)",af_amort:"Amortization (years)",af_down:"Down payment (%)",af_strata:"Strata fees (per month $)",
      af_max_price:"Maximum home price",af_max_mort:"Maximum mortgage",af_budget:"Max monthly mortgage payment",af_gds_row:"GDS (32%) housing limit (per month)",af_tds_row:"TDS (40%) housing room after other debts (per month)",
      af_limit_gds:"Limiting factor: GDS (32%) — your housing-cost ratio is the binding limit.",af_limit_tds:"Limiting factor: TDS (40%) — your other debts are the binding limit.",
      af_note:"Housing costs in the GDS/TDS formulas are: mortgage payment + property tax + heating (plus 50% of strata fees for condos — not included here, so condo buyers should aim a little lower). Lenders qualify you at the stress-test rate — the higher of your contract rate + 2% or the federal benchmark rate — so enter that qualifying rate above. Estimates only; a lender or mortgage broker confirms the real number.",
      iv_title:"Investor analysis",iv_sub:"Run the numbers on a rental property using your own inputs.",
      iv_price:"Purchase price ($)",iv_down:"Down payment (%)",iv_rate:"Mortgage rate (%)",iv_amort:"Amortization (years)",iv_rent:"Expected rent (per month $)",iv_tax:"Property tax (per month $)",iv_strata:"Strata (per month $)",iv_ins:"Insurance (per month $)",iv_maint:"Maintenance reserve (per month $)",iv_vac:"Vacancy allowance (%)",
      iv_cf:"Monthly cash flow",iv_noi:"Net operating income (per year)",iv_cap:"Cap rate",iv_coc:"Cash-on-cash return",iv_cashin:"Cash invested (down payment)",
      iv_note:"These are estimates calculated from the numbers you entered — they are not a guarantee of returns. Vacancy, repairs, taxes and rents change over time; verify every figure for a specific property before you buy. Closing costs are not included in the cash invested.",
      g_title:"First-time buyer guide — British Columbia",g_sub:"The steps, the minimum down payments, and the closing costs to budget for when you buy your first home in BC.",
      g_verify:"Tax and rebate rules change: the property transfer tax rates, first-time buyer exemptions and thresholds below are the general BC rules — verify the current figures at gov.bc.ca before you rely on them."},
    fa:{nav_bvr:"خرید یا اجاره",nav_afford:"برآورد توان خرید",nav_invest:"تحلیل سرمایه‌گذاری",nav_guide:"راهنمای خریدار اولی",
      bv_title:"ماشین‌حساب خرید یا اجاره",bv_sub:"هزینه‌ی واقعی خرید را با اجاره در طول زمان مقایسه کنید. اجاره برای همیشه از دست می‌رود؛ خرید، حقوق مالکانه (equity) ایجاد می‌کند، اما مالیات، شارژ و سود وام هم دارد.",
      bv_price:"قیمت خانه (دلار)",bv_down:"پیش‌پرداخت (٪)",bv_rate:"نرخ سود وام (٪)",bv_amort:"مدت بازپرداخت (سال)",bv_tax:"مالیات ملک (سالانه، دلار)",bv_strata:"شارژ / نگهداری (ماهانه، دلار)",bv_appr:"رشد قیمت خانه (سالانه ٪)",bv_rent:"اجاره‌ی فعلی (ماهانه، دلار)",bv_rentinc:"افزایش اجاره (سالانه ٪)",bv_years:"دوره‌ی مقایسه (سال)",
      bv_th_year:"سال",bv_th_rent:"مجموع اجاره‌ی پرداختی",bv_th_spent:"مجموع هزینه‌ی خرید",bv_th_value:"ارزش خانه",bv_th_bal:"مانده‌ی وام",bv_th_equity:"حقوق مالکانه (equity)",
      bv_cost_rent:"کل اجاره‌ی پرداختی در {n} سال",bv_spent:"کل هزینه‌ی خرید (پیش‌پرداخت + اقساط + مالیات + شارژ)",bv_equity:"حقوق مالکانه‌ی شما در پایان سال {n}",bv_cost_buy:"هزینه‌ی خالص خرید (هزینه‌ها منهای حقوق مالکانه‌ی پایانی)",
      bv_win_buy:"خرید در {n} سال به اندازه‌ی {x} جلوتر است",bv_win_rent:"اجاره در {n} سال به اندازه‌ی {x} جلوتر است",bv_tie:"در {n} سال، خرید و اجاره تقریباً پایاپای‌اند",
      bv_assump:"فرض‌ها: قسط وام با فرمول کانادایی (سود مرکب نیم‌سالانه) محاسبه می‌شود و ثابت می‌ماند؛ مالیات ملک و شارژ در سطح امروز ثابت‌اند؛ خانه با نرخ واردشده رشد می‌کند؛ اجاره سالی یک‌بار افزایش می‌یابد. مالیات انتقال ملک و سایر هزینه‌های پایانی خرید، هزینه‌ی فروش، تعمیرات پیش‌بینی‌نشده، بیمه‌ی CMHC و بازده سرمایه‌گذاری پیش‌پرداخت لحاظ نشده‌اند؛ پس این یک برآورد برنامه‌ریزی است، نه تضمین.",
      af_title:"برآورد توان خرید",af_sub:"وام‌دهنده‌های کانادایی از دو نسبت استفاده می‌کنند: GDS — هزینه‌های مسکن حداکثر ۳۲٪ درآمد ناخالص؛ TDS — همه‌ی بدهی‌ها حداکثر ۴۰٪ درآمد ناخالص. هرکدام کمتر باشد، سقف شما را تعیین می‌کند.",
      af_income:"درآمد ناخالص خانوار (سالانه، دلار)",af_debts:"بدهی‌های غیرمسکن (ماهانه، دلار)",af_tax:"برآورد مالیات ملک (سالانه، دلار)",af_heat:"هزینه‌ی گرمایش (ماهانه، دلار)",af_rate:"نرخ قرارداد وام (٪)",af_amort:"مدت بازپرداخت (سال)",af_down:"پیش‌پرداخت (٪)",af_strata:"شارژ ساختمان (ماهانه، دلار)",
      af_max_price:"حداکثر قیمت خانه",af_max_mort:"حداکثر مبلغ وام",af_budget:"حداکثر قسط ماهانه‌ی وام",af_gds_row:"سقف GDS ‏(۳۲٪) برای هزینه‌های مسکن (ماهانه)",af_tds_row:"سقف TDS ‏(۴۰٪) پس از کسر بدهی‌ها (ماهانه)",
      af_limit_gds:"عامل محدودکننده: GDS ‏(۳۲٪) — نسبت هزینه‌های مسکن سقف شما را تعیین می‌کند.",af_limit_tds:"عامل محدودکننده: TDS ‏(۴۰٪) — بدهی‌های دیگر شما عامل محدودکننده‌اند.",
      af_note:"هزینه‌های مسکن در فرمول GDS/TDS شامل قسط وام + مالیات ملک + گرمایش است (به‌علاوه‌ی ۵۰٪ شارژ ساختمان برای آپارتمان‌ها — اینجا لحاظ نشده، پس خریداران آپارتمان بهتر است کمی پایین‌تر هدف بگیرند). وام‌دهنده با نرخ تست استرس — بیشترِ نرخ قرارداد + ۲٪ یا نرخ معیار فدرال — شما را ارزیابی می‌کند؛ همان نرخ را بالا وارد کنید. این ارقام فقط برآوردند — رقم واقعی را وام‌دهنده یا کارگزار وام تأیید می‌کند.",
      iv_title:"تحلیل سرمایه‌گذاری",iv_sub:"بازده یک ملک اجاره‌ای را با اعداد خودتان بسنجید.",
      iv_price:"قیمت خرید (دلار)",iv_down:"پیش‌پرداخت (٪)",iv_rate:"نرخ سود وام (٪)",iv_amort:"مدت بازپرداخت (سال)",iv_rent:"اجاره‌ی مورد انتظار (ماهانه، دلار)",iv_tax:"مالیات ملک (ماهانه، دلار)",iv_strata:"شارژ ساختمان (ماهانه، دلار)",iv_ins:"بیمه (ماهانه، دلار)",iv_maint:"ذخیره‌ی نگهداری (ماهانه، دلار)",iv_vac:"ذخیره‌ی خالی‌ماندن (٪)",
      iv_cf:"جریان نقدی ماهانه",iv_noi:"درآمد عملیاتی خالص (سالانه)",iv_cap:"نرخ کپ (Cap Rate)",iv_coc:"بازده نقدینگی (Cash-on-Cash)",iv_cashin:"سرمایه‌ی نقدی واردشده (پیش‌پرداخت)",
      iv_note:"این ارقام برآوردهایی از روی اعدادی است که خودتان وارد کرده‌اید و تضمین بازده نیستند. خالی‌ماندن، تعمیرات، مالیات و اجاره در طول زمان تغییر می‌کنند؛ پیش از خرید، همه‌ی ارقام را برای ملک مشخص بررسی کنید. هزینه‌های پایانی (closing) در سرمایه‌ی واردشده لحاظ نشده‌اند.",
      g_title:"راهنمای خریدار اولی — بریتیش‌کلمبیا",g_sub:"مراحل خرید، حداقل پیش‌پرداخت‌ها و هزینه‌های پایانی که برای خرید اولین خانه در BC باید بودجه‌بندی کنید.",
      g_verify:"قوانین مالیات و معافیت‌ها تغییر می‌کنند: نرخ‌های مالیات انتقال ملک، معافیت خریدار اولی و آستانه‌های زیر قواعد کلی BC هستند — پیش از اتکا، ارقام جاری را در gov.bc.ca بررسی کنید."},
    hi:{nav_bvr:"खरीदें या किराया",nav_afford:"खरीद क्षमता अनुमानक",nav_invest:"निवेशक विश्लेषण",nav_guide:"पहली बार खरीदार",
      bv_title:"खरीद बनाम किराया कैलकुलेटर",bv_sub:"समय के साथ खरीदने की असली लागत की तुलना किराए से करें। किराया हमेशा के लिए चला जाता है; खरीदने से इक्विटी बनती है, लेकिन कर, स्ट्राटा और ब्याज भी जुड़ते हैं।",
      bv_price:"घर की कीमत ($)",bv_down:"डाउन पेमेंट (%)",bv_rate:"मॉर्गेज दर (%)",bv_amort:"अवधि (वर्ष)",bv_tax:"संपत्ति कर (प्रति वर्ष $)",bv_strata:"स्ट्राटा / रखरखाव (प्रति माह $)",bv_appr:"घर की कीमत वृद्धि (प्रति वर्ष %)",bv_rent:"वर्तमान किराया (प्रति माह $)",bv_rentinc:"किराया वृद्धि (प्रति वर्ष %)",bv_years:"तुलना अवधि (वर्ष)",
      bv_th_year:"वर्ष",bv_th_rent:"कुल किराया दिया",bv_th_spent:"खरीद पर कुल खर्च",bv_th_value:"घर का मूल्य",bv_th_bal:"बचा मॉर्गेज",bv_th_equity:"इक्विटी",
      bv_cost_rent:"{n} वर्षों में कुल किराया दिया",bv_spent:"खरीद पर कुल खर्च (डाउन पेमेंट + किस्तें + कर + स्ट्राटा)",bv_equity:"वर्ष {n} के अंत में आपकी इक्विटी",bv_cost_buy:"खरीद की शुद्ध लागत (खर्च − अंतिम इक्विटी)",
      bv_win_buy:"{n} वर्षों में खरीदना {x} से आगे है",bv_win_rent:"{n} वर्षों में किराया {x} से आगे है",bv_tie:"{n} वर्षों में खरीदना और किराया लगभग बराबर हैं",
      bv_assump:"धारणाएँ: मॉर्गेज किस्त कनाडाई अर्ध-वार्षिक सूत्र से स्थिर रहती है; संपत्ति कर और स्ट्राटा आज के स्तर पर स्थिर हैं; घर आपके दर्ज किए गए दर से बढ़ता है; किराया साल में एक बार बढ़ता है। संपत्ति हस्तांतरण कर और अन्य खरीद समापन लागतें, बिक्री लागत, अप्रत्याशित मरम्मत, CMHC बीमा और डाउन पेमेंट पर निवेश रिटर्न शामिल नहीं हैं — यह योजना का अनुमान है, गारंटी नहीं।",
      af_title:"खरीद क्षमता अनुमानक",af_sub:"कनाडाई ऋणदाता दो अनुपात इस्तेमाल करते हैं: GDS — आवास लागत सकल आय के 32% तक; TDS — सभी ऋण सकल आय के 40% तक। दोनों में जो कम हो, वही आपकी सीमा तय करता है।",
      af_income:"सकल घरेलू आय (प्रति वर्ष $)",af_debts:"गैर-आवास ऋण (प्रति माह $)",af_tax:"संपत्ति कर अनुमान (प्रति वर्ष $)",af_heat:"हीटिंग लागत (प्रति माह $)",af_rate:"अनुबंध दर (%)",af_amort:"अवधि (वर्ष)",af_down:"डाउन पेमेंट (%)",af_strata:"स्ट्राटा शुल्क (प्रति माह $)",
      af_max_price:"अधिकतम घर की कीमत",af_max_mort:"अधिकतम मॉर्गेज",af_budget:"अधिकतम मासिक मॉर्गेज किस्त",af_gds_row:"GDS (32%) आवास सीमा (प्रति माह)",af_tds_row:"TDS (40%) — अन्य ऋणों के बाद आवास गुंजाइश (प्रति माह)",
      af_limit_gds:"सीमित करने वाला कारक: GDS (32%) — आपकी आवास-लागत अनुपात ही सीमा है।",af_limit_tds:"सीमित करने वाला कारक: TDS (40%) — आपके अन्य ऋण ही सीमा हैं।",
      af_note:"GDS/TDS सूत्रों में आवास लागत = मॉर्गेज किस्त + संपत्ति कर + हीटिंग (कॉन्डो के लिए स्ट्राटा का 50% अतिरिक्त — यहाँ शामिल नहीं है, इसलिए कॉन्डो खरीदार थोड़ा कम लक्ष्य रखें)। ऋणदाता स्ट्रेस-टेस्ट दर — अनुबंध दर + 2% या संघीय बेंचमार्क दर, जो अधिक हो — पर योग्यता जाँचते हैं; ऊपर वही दर दर्ज करें। ये केवल अनुमान हैं — असली आंकड़ा ऋणदाता या मॉर्गेज ब्रोकर ही पुष्टि करता है।",
      iv_title:"निवेशक विश्लेषण",iv_sub:"अपने आंकड़ों से किराए की प्रॉपर्टी के नंबर चलाएँ।",
      iv_price:"खरीद कीमत ($)",iv_down:"डाउन पेमेंट (%)",iv_rate:"मॉर्गेज दर (%)",iv_amort:"अवधि (वर्ष)",iv_rent:"अपेक्षित किराया (प्रति माह $)",iv_tax:"संपत्ति कर (प्रति माह $)",iv_strata:"स्ट्राटा (प्रति माह $)",iv_ins:"बीमा (प्रति माह $)",iv_maint:"रखरखाव भंडार (प्रति माह $)",iv_vac:"रिक्ति भत्ता (%)",
      iv_cf:"मासिक नकदी प्रवाह",iv_noi:"शुद्ध परिचालन आय (प्रति वर्ष)",iv_cap:"कैप दर",iv_coc:"कैश-ऑन-कैश रिटर्न",iv_cashin:"लगाई गई नकदी (डाउन पेमेंट)",
      iv_note:"ये अनुमान आपके द्वारा दर्ज किए गए आंकड़ों से गिने गए हैं — ये रिटर्न की गारंटी नहीं हैं। रिक्ति, मरम्मत, कर और किराया समय के साथ बदलते हैं; खरीदने से पहले किसी विशिष्ट प्रॉपर्टी के हर आंकड़े की पुष्टि करें। समापन लागत लगाई गई नकदी में शामिल नहीं है।",
      g_title:"पहली बार खरीदार मार्गदर्शिका — ब्रिटिश कोलंबिया",g_sub:"BC में पहला घर खरीदने के चरण, न्यूनतम डाउन पेमेंट और बजट में रखने योग्य समापन लागतें।",
      g_verify:"कर और छूट के नियम बदलते रहते हैं: नीचे दी गई संपत्ति हस्तांतरण कर की दरें, पहली बार खरीदार छूट और सीमाएँ BC के सामान्य नियम हैं — भरोसा करने से पहले gov.bc.ca पर वर्तमान आंकड़े जाँचें।"},
    zh:{nav_bvr:"买房还是租房",nav_afford:"负担能力估算器",nav_invest:"投资者分析",nav_guide:"首次购房指南",
      bv_title:"买房 vs 租房计算器",bv_sub:"比较长期买房的真实成本与租房成本。租金一去不返;买房能积累净资产,但要承担地税、管理费和利息。",
      bv_price:"房价($)",bv_down:"首付(%)",bv_rate:"房贷利率(%)",bv_amort:"贷款年限(年)",bv_tax:"地税(每年 $)",bv_strata:"管理费 / 维护(每月 $)",bv_appr:"房价年涨幅(%)",bv_rent:"当前租金(每月 $)",bv_rentinc:"租金年涨幅(%)",bv_years:"比较年数(年)",
      bv_th_year:"年份",bv_th_rent:"累计已付租金",bv_th_spent:"买房累计支出",bv_th_value:"房屋价值",bv_th_bal:"剩余贷款",bv_th_equity:"净资产",
      bv_cost_rent:"{n} 年内共付租金",bv_spent:"买房总支出(首付 + 月供 + 地税 + 管理费)",bv_equity:"第 {n} 年末您的净资产",bv_cost_buy:"买房净成本(支出 − 期末净资产)",
      bv_win_buy:"{n} 年内买房领先 {x}",bv_win_rent:"{n} 年内租房领先 {x}",bv_tie:"{n} 年内买房与租房基本持平",
      bv_assump:"假设:月供按加拿大半年复利公式计算且保持不变;地税和管理费维持当前水平;房价按您输入的涨幅增长;租金每年上调一次。未计入房产转让税及其他购房过户费用、出售成本、意外维修、CMHC 保险及首付的投资回报,因此这只是规划估算,不是保证。",
      af_title:"负担能力估算器",af_sub:"加拿大贷款机构使用两个比率:GDS(住房成本不超过总收入的 32%)和 TDS(全部债务不超过总收入的 40%)。两者中较低者决定您的上限。",
      af_income:"家庭年总收入($)",af_debts:"非住房债务(每月 $)",af_tax:"地税估算(每年 $)",af_heat:"取暖费(每月 $)",af_rate:"合同利率(%)",af_amort:"贷款年限(年)",af_down:"首付(%)",af_strata:"物业管理费(每月 $)",
      af_max_price:"最高房价",af_max_mort:"最高贷款额",af_budget:"每月最高月供",af_gds_row:"GDS(32%)住房上限(每月)",af_tds_row:"TDS(40%)扣除其他债务后的住房空间(每月)",
      af_limit_gds:"限制因素:GDS(32%)— 您的住房成本比率决定了上限。",af_limit_tds:"限制因素:TDS(40%)— 您的其他债务决定了上限。",
      af_note:"GDS/TDS 公式中的住房成本包括:月供 + 地税 + 取暖费(公寓还需加上 50% 的管理费 — 此处未计入,因此公寓买家应把目标定得稍低)。贷款机构按压力测试利率(合同利率 + 2% 与联邦基准利率中的较高者)审核资格,请在上方输入该审核利率。以上仅为估算 — 实际数字须由贷款机构或房贷经纪确认。",
      iv_title:"投资者分析",iv_sub:"用您自己的数字测算一套出租房的收益。",
      iv_price:"购买价格($)",iv_down:"首付(%)",iv_rate:"房贷利率(%)",iv_amort:"贷款年限(年)",iv_rent:"预期租金(每月 $)",iv_tax:"地税(每月 $)",iv_strata:"管理费(每月 $)",iv_ins:"保险(每月 $)",iv_maint:"维护储备(每月 $)",iv_vac:"空置预留(%)",
      iv_cf:"每月现金流",iv_noi:"净运营收入(每年)",iv_cap:"资本化率(Cap Rate)",iv_coc:"现金回报率(Cash-on-Cash)",iv_cashin:"投入现金(首付)",
      iv_note:"以上是根据您输入的数字计算的估算,并非收益保证。空置、维修、税费和租金都会随时间变化;购买前请逐项核实具体房产的每个数字。投入现金未包含过户费用。",
      g_title:"首次购房指南 — 不列颠哥伦比亚省",g_sub:"在 BC 购买首套房的步骤、最低首付要求,以及需要预算的过户费用。",
      g_verify:"税费与减免规则会变化:以下的房产转让税税率、首次购房者减免和门槛为 BC 的一般规则 — 在依赖之前,请先到 gov.bc.ca 核实当前数字。"}
    };
    for (var L2 in I18N2) { if (I18N[L2]) { for (var k2 in I18N2[L2]) I18N[L2][k2] = I18N2[L2][k2]; } }
    /* ---------- Nav restructure + FHSA tracker strings ---------- */
    var I18N3 = {
    en:{nav_tools:"AI Tools",
      fh_title:"FHSA contribution tracker",fh_sub:"Enter what you contributed each year to see your remaining room, the amount carried forward, and when you would reach the limit.",
      fh_start:"Year you opened (or will open) your FHSA",fh_contrib:"contributions ($)",
      fh_annual:"New room each year",fh_limit:"Lifetime contribution limit",fh_total:"Total contributed so far",
      fh_room:"Room available in {y}",fh_carry:"Unused room carried into next year",fh_remain:"Lifetime room remaining",
      fh_progress:"Progress toward the $40,000 lifetime limit",
      fh_proj:"At your current pace (about {x} per year), you would reach the $40,000 limit in {y}.",
      fh_proj_done:"You have reached the $40,000 lifetime limit.",fh_proj_none:"Enter at least one contribution to see a projection.",
      fh_rules_title:"Key FHSA rules",
      fh_r1:"Contributions are tax-deductible — they lower your taxable income in the year you claim the deduction.",
      fh_r2:"Withdrawals used to buy a qualifying first home are tax-free.",
      fh_r3:"The account must be closed within 15 years of opening it (or by the end of the year you turn 71, or the end of the year after your first qualifying withdrawal — whichever comes first).",
      fh_r4:"You generally count as a first-time buyer if, during the current calendar year or the previous 4 calendar years, you did not live in a home that you or your spouse owned.",
      fh_r5:"You gain $8,000 of new room for each year you hold the account, up to $40,000 in total. Unused room carries forward, but no more than $8,000 of it can be added in any single year.",
      fh_verify:"FHSA rules can change — verify the current rules with the Canada Revenue Agency (CRA) at canada.ca before you rely on them."},
    fa:{nav_tools:"ابزارهای هوشمند",
      fh_title:"ردیاب مشارکت FHSA (حساب پس‌انداز خانه‌ی اول)",fh_sub:"مشارکت هر سال را وارد کنید تا فضای باقی‌مانده، مبلغ منتقل‌شده به سال بعد و سال رسیدن به سقف را ببینید.",
      fh_start:"سالی که FHSA را باز کردید (یا باز می‌کنید)",fh_contrib:"مشارکت (دلار)",
      fh_annual:"فضای جدید هر سال",fh_limit:"سقف مشارکت مادام‌العمر",fh_total:"مجموع مشارکت تا امروز",
      fh_room:"فضای موجود در سال {y}",fh_carry:"فضای استفاده‌نشده‌ی منتقل‌شده به سال بعد",fh_remain:"فضای مادام‌العمر باقی‌مانده",
      fh_progress:"پیشرفت به‌سوی سقف ۴۰٬۰۰۰ دلاری",
      fh_proj:"با ریتم فعلی شما (حدود {x} در سال)، در سال {y} به سقف ۴۰٬۰۰۰ دلار می‌رسید.",
      fh_proj_done:"به سقف مادام‌العمر ۴۰٬۰۰۰ دلار رسیده‌اید.",fh_proj_none:"برای دیدن پیش‌بینی، دست‌کم یک مشارکت وارد کنید.",
      fh_rules_title:"قواعد کلیدی FHSA",
      fh_r1:"مشارکت‌ها از مالیات کسر می‌شوند — درآمد مشمول مالیات شما را در سالی که کسر را مطالبه می‌کنید، کم می‌کنند.",
      fh_r2:"برداشت برای خرید اولین خانه‌ی واجد شرایط، بدون مالیات است.",
      fh_r3:"حساب باید حداکثر ۱۵ سال پس از بازشدن بسته شود (یا تا پایان سالی که ۷۱ ساله می‌شوید، یا پایان سالِ پس از اولین برداشت واجد شرایط — هرکدام زودتر باشد).",
      fh_r4:"به‌طور کلی خریدار اول محسوب می‌شوید اگر در سال جاری یا ۴ سال تقویمی گذشته، در خانه‌ای که شما یا همسرتان مالکش بوده‌اید زندگی نکرده باشید.",
      fh_r5:"هر سال ۸٬۰۰۰ دلار فضای جدید می‌گیرید، تا سقف مجموع ۴۰٬۰۰۰ دلار. فضای استفاده‌نشده به سال‌های بعد منتقل می‌شود، اما در هر سال حداکثر ۸٬۰۰۰ دلار از آن قابل افزودن است.",
      fh_verify:"قواعد FHSA ممکن است تغییر کنند — پیش از اتکا، قواعد جاری را از آژانس درآمد کانادا (CRA) در canada.ca بررسی کنید."},
    hi:{nav_tools:"AI टूल",
      fh_title:"FHSA योगदान ट्रैकर",fh_sub:"अपने साल-दर-साल योगदान दर्ज करें ताकि बची हुई सीमा, आगे ले जाई गई राशि और सीमा तक पहुँचने का वर्ष देख सकें।",
      fh_start:"जिस वर्ष आपने FHSA खोला (या खोलेंगे)",fh_contrib:"योगदान ($)",
      fh_annual:"हर वर्ष नई सीमा",fh_limit:"जीवनकाल योगदान सीमा",fh_total:"अब तक कुल योगदान",
      fh_room:"{y} में उपलब्ध सीमा",fh_carry:"अगले वर्ष ले जाई गई अप्रयुक्त सीमा",fh_remain:"जीवनकाल सीमा शेष",
      fh_progress:"$40,000 जीवनकाल सीमा की ओर प्रगति",
      fh_proj:"आपकी वर्तमान गति (लगभग {x} प्रति वर्ष) से आप {y} में $40,000 की सीमा तक पहुँच जाएँगे।",
      fh_proj_done:"आप $40,000 की जीवनकाल सीमा तक पहुँच चुके हैं।",fh_proj_none:"अनुमान देखने के लिए कम से कम एक योगदान दर्ज करें।",
      fh_rules_title:"FHSA के मुख्य नियम",
      fh_r1:"योगदान कर-कटौती योग्य हैं — जिस वर्ष आप कटौती का दावा करते हैं, वे आपकी कर योग्य आय घटाते हैं।",
      fh_r2:"पात्र पहला घर खरीदने के लिए निकासी कर-मुक्त होती है।",
      fh_r3:"खाता खोलने के 15 वर्षों के भीतर बंद करना होगा (या जिस वर्ष आप 71 के होते हैं उसके अंत तक, या आपकी पहली पात्र निकासी के अगले वर्ष के अंत तक — जो भी पहले हो)।",
      fh_r4:"आप सामान्यतः पहली बार खरीदार माने जाते हैं यदि वर्तमान कैलेंडर वर्ष या पिछले 4 कैलेंडर वर्षों में आप ऐसे घर में नहीं रहे जो आपका या आपके जीवनसाथी का हो।",
      fh_r5:"खाता रखने के प्रत्येक वर्ष आपको $8,000 की नई सीमा मिलती है, कुल अधिकतम $40,000 तक। अप्रयुक्त सीमा आगे ले जाई जाती है, लेकिन किसी एक वर्ष में उसमें से अधिकतम $8,000 ही जोड़ा जा सकता है।",
      fh_verify:"FHSA नियम बदल सकते हैं — भरोसा करने से पहले कनाडा राजस्व एजेंसी (CRA) की वेबसाइट canada.ca पर वर्तमान नियम जाँचें।"},
    zh:{nav_tools:"AI 工具",
      fh_title:"FHSA 供款追踪器",fh_sub:"输入您每年的供款,查看剩余额度、结转金额以及达到上限的年份。",
      fh_start:"您开设(或将开设)FHSA 的年份",fh_contrib:"供款($)",
      fh_annual:"每年新增额度",fh_limit:"终身供款上限",fh_total:"至今累计供款",
      fh_room:"{y} 年可用额度",fh_carry:"结转至下一年的未用额度",fh_remain:"终身剩余额度",
      fh_progress:"距 $40,000 终身上限的进度",
      fh_proj:"按您目前的速度(约每年 {x}),您将在 {y} 年达到 $40,000 上限。",
      fh_proj_done:"您已达到 $40,000 终身上限。",fh_proj_none:"输入至少一笔供款即可查看预测。",
      fh_rules_title:"FHSA 主要规则",
      fh_r1:"供款可抵税 — 可在您申报抵扣的年份减少应税收入。",
      fh_r2:"用于购买符合条件的首套住房的取款免税。",
      fh_r3:"账户必须在开设后 15 年内关闭(或在您年满 71 岁那年的年底前,或在您首次符合条件取款的次年年底前关闭——以较早者为准)。",
      fh_r4:"一般而言,如果您在当前日历年或此前 4 个日历年内,没有居住在您或您配偶拥有的住房中,您即被视为首次购房者。",
      fh_r5:"持有账户的每年可获得 $8,000 新额度,终身累计上限 $40,000。未用额度可结转,但每年最多只能加入 $8,000 的结转额度。",
      fh_verify:"FHSA 规则可能变更 — 依赖之前请先到加拿大税务局(CRA)网站 canada.ca 核实当前规则。"}
    };
    for (var L3 in I18N3) { if (I18N[L3]) { for (var k3 in I18N3[L3]) I18N[L3][k3] = I18N3[L3][k3]; } }
    /* ---------- Home buying assistant strings ---------- */
    var I18N4 = {
    en:{nav_assistant:"Home Buying Assistant",
      as_title:"Home buying assistant",
      as_sub:"Ask about buying a home in BC — the steps, down payments, taxes, the stress test, strata and more. Answers are matched from this page's own guide and calculators.",
      as_welcome:"Hi! I'm this site's on-page real estate assistant — I search the listings, guides and tools on this page and answer common questions about buying a home in BC: the buying steps, minimum down payments, property transfer tax and annual property taxes, closing costs, the FHSA, the stress test, GDS/TDS ratios, CMHC insurance, offer subjects, strata fees, neighbourhoods and typical rents. Pick a suggestion below or type your own question.",
      as_input_ph:"Type your question…",as_send:"Send",
      as_disclaimer:"General information only — not professional, financial or legal advice. Tax rules and thresholds change; verify details at gov.bc.ca or with a licensed professional."},
    fa:{nav_assistant:"دستیار خرید خانه",
      as_title:"دستیار خرید خانه",
      as_sub:"درباره‌ی خرید خانه در BC بپرسید — مراحل، پیش‌پرداخت، مالیات، تست استرس، شارژ ساختمان و بیشتر. پاسخ‌ها از راهنما و ماشین‌حساب‌های همین صفحه تطبیق داده می‌شوند.",
      as_welcome:"سلام! من دستیار هوشمند املاک همین سایت هستم — فایل‌ها، راهنماها و ابزارهای این صفحه را جست‌وجو می‌کنم و به پرسش‌های رایج درباره‌ی خرید خانه در BC پاسخ می‌دهم: مراحل خرید، حداقل پیش‌پرداخت، مالیات انتقال ملک و مالیات سالانه‌ی ملک، هزینه‌های پایانی، FHSA، تست استرس، نسبت‌های GDS/TDS، بیمه‌ی CMHC، شروط پیشنهاد، شارژ ساختمان، محله‌ها و اجاره‌های معمول. یکی از پیشنهادهای زیر را انتخاب کنید یا سؤال‌تان را بنویسید.",
      as_input_ph:"سؤال‌تان را بنویسید…",as_send:"ارسال",
      as_disclaimer:"این پاسخ‌ها فقط اطلاعات عمومی‌اند و مشاوره‌ی حرفه‌ای، مالی یا حقوقی نیستند. قواعد و آستانه‌های مالیاتی تغییر می‌کنند؛ جزئیات را در gov.bc.ca یا نزد یک متخصص دارای مجوز بررسی کنید."},
    hi:{nav_assistant:"घर ख़रीद सहायक",
      as_title:"घर ख़रीद सहायक",
      as_sub:"BC में घर खरीदने के बारे में पूछें — चरण, डाउन पेमेंट, कर, स्ट्रेस टेस्ट, स्ट्राटा और बहुत कुछ। उत्तर इस पेज की मार्गदर्शिका और कैलकुलेटरों से मिलाए जाते हैं।",
      as_welcome:"नमस्ते! मैं इस साइट का ऑन-पेज रियल एस्टेट सहायक हूँ — मैं इस पेज की लिस्टिंग, मार्गदर्शिकाएँ और टूल खोजता हूँ और BC में घर खरीदने के आम प्रश्नों के उत्तर देता हूँ: खरीद के चरण, न्यूनतम डाउन पेमेंट, संपत्ति हस्तांतरण कर और वार्षिक संपत्ति कर, समापन लागतें, FHSA, स्ट्रेस टेस्ट, GDS/TDS अनुपात, CMHC बीमा, ऑफ़र की शर्तें, स्ट्राटा शुल्क, इलाके और सामान्य किराए। नीचे दिए सुझावों में से चुनें या अपना प्रश्न लिखें।",
      as_input_ph:"अपना प्रश्न लिखें…",as_send:"भेजें",
      as_disclaimer:"यह केवल सामान्य जानकारी है — पेशेवर, वित्तीय या कानूनी सलाह नहीं। कर नियम और सीमाएँ बदलती रहती हैं; gov.bc.ca पर या लाइसेंस प्राप्त पेशेवर से विवरण सत्यापित करें।"},
    zh:{nav_assistant:"购房助手",
      as_title:"购房助手",
      as_sub:"咨询在 BC 买房的问题——步骤、首付、税费、压力测试、物业管理等。答案均来自本页的指南和计算器。",
      as_welcome:"您好！我是本网站的页面房产助手——我会搜索本页的房源、指南和工具，并回答在 BC 买房的常见问题：购房步骤、最低首付、房产转让税和年度地税、过户费用、FHSA、压力测试、GDS/TDS 比率、CMHC 保险、报价条件、物业管理费、社区和典型租金。请选择下方的建议问题，或直接输入您的问题。",
      as_input_ph:"输入您的问题…",as_send:"发送",
      as_disclaimer:"本助手仅提供一般信息,不构成专业、财务或法律建议。税费规则和门槛会变化;请到 gov.bc.ca 或向持牌专业人士核实详情。"}
    };
    for (var L4 in I18N4) { if (I18N[L4]) { for (var k4 in I18N4[L4]) I18N[L4][k4] = I18N4[L4][k4]; } }
    /* ---------- Lead form delivery (FormSubmit) strings ---------- */
    var I18N5 = {
    en:{lead_sub:"Fill in the form — your message is sent straight to the business inbox at erfanbcrealestate@gmail.com, and you'll get a reply in your preferred language.",
      l_submit:"Send message",
      l_success:"Your message was delivered to erfanbcrealestate@gmail.com — thank you. We'll reply soon.",
      l_fallback:"We couldn't send your message directly, so your email app has been opened with everything ready to send to erfanbcrealestate@gmail.com.",
      l_delivery:"Submissions from this form are delivered to the business inbox: erfanbcrealestate@gmail.com.",
      l_sending:"Sending…"},
    fa:{lead_sub:"فرم را پر کنید — پیام شما مستقیم به صندوق ایمیل کسب‌وکار به نشانی erfanbcrealestate@gmail.com ارسال می‌شود و پاسخ را به زبان انتخابی‌تان دریافت می‌کنید.",
      l_submit:"ارسال پیام",
      l_success:"پیام شما به erfanbcrealestate@gmail.com تحویل داده شد — ممنون از پیامتان. به‌زودی پاسخ می‌دهیم.",
      l_fallback:"نتوانستیم پیامتان را مستقیم ارسال کنیم؛ برنامه‌ی ایمیل شما با پیام آماده باز شد تا آن را به erfanbcrealestate@gmail.com بفرستید.",
      l_delivery:"پیام‌های این فرم به صندوق ایمیل کسب‌وکار تحویل داده می‌شوند: erfanbcrealestate@gmail.com",
      l_sending:"در حال ارسال…"},
    hi:{lead_sub:"फ़ॉर्म भरें — आपका संदेश सीधे व्यवसाय इनबॉक्स erfanbcrealestate@gmail.com पर भेजा जाता है, और आपको आपकी पसंदीदा भाषा में जवाब मिलेगा।",
      l_submit:"संदेश भेजें",
      l_success:"आपका संदेश erfanbcrealestate@gmail.com पर पहुँचा दिया गया — धन्यवाद। हम जल्द ही जवाब देंगे।",
      l_fallback:"हम आपका संदेश सीधे नहीं भेज सके, इसलिए आपका ईमेल ऐप खोल दिया गया है — संदेश erfanbcrealestate@gmail.com पर भेजने के लिए तैयार है।",
      l_delivery:"इस फ़ॉर्म की सबमिशन व्यवसाय इनबॉक्स पर भेजी जाती हैं: erfanbcrealestate@gmail.com",
      l_sending:"भेजा जा रहा है…"},
    zh:{lead_sub:"填写表格 — 您的留言将直接发送到业务邮箱 erfanbcrealestate@gmail.com,我们会用您选择的语言回复您。",
      l_submit:"发送留言",
      l_success:"您的留言已送达 erfanbcrealestate@gmail.com — 谢谢您,我们会尽快回复。",
      l_fallback:"我们无法直接发送您的留言,因此已打开您的邮件应用,留言已准备好发送至 erfanbcrealestate@gmail.com。",
      l_delivery:"通过此表格提交的内容将发送至业务邮箱:erfanbcrealestate@gmail.com。",
      l_sending:"正在发送…"}
    };
    for (var L5 in I18N5) { if (I18N[L5]) { for (var k5 in I18N5[L5]) I18N[L5][k5] = I18N5[L5][k5]; } }
    /* ---------- Compare homes strings ---------- */
    var I18N6 = {
    en:{nav_compare:"Compare Homes",
      cmp_title:"Compare homes",
      cmp_sub:"Pick two to four sample listings and see their prices, sizes, fees and features side by side.",
      cmp_banner:"Sample data — for design preview only. Live MLS® data connects after licensing (2027).",
      cmp_hint:"Select 2 to 4 homes to compare side by side.",
      cmp_add:"Add to compare",cmp_remove:"Remove",cmp_clear:"Clear",
      cmp_count:"{n} of 4 selected",
      cmp_need:"Select at least 2 homes above to see the side-by-side comparison.",
      cmp_home:"Home",cmp_photo:"Photo",cmp_address:"Address",cmp_ppsf:"Price per sq ft",cmp_status:"Status"},
    fa:{nav_compare:"مقایسه‌ی خانه‌ها",
      cmp_title:"مقایسه‌ی خانه‌ها",
      cmp_sub:"دو تا چهار فایل نمونه را انتخاب کنید و قیمت، متراژ، شارژ و امکانات آن‌ها را کنار هم ببینید.",
      cmp_banner:"داده‌ی نمونه — فقط برای پیش‌نمایش طراحی. داده‌ی زنده‌ی MLS® پس از دریافت لایسنس (۲۰۲۷) وصل می‌شود.",
      cmp_hint:"برای مقایسه‌ی کنار هم، ۲ تا ۴ خانه را انتخاب کنید.",
      cmp_add:"افزودن به مقایسه",cmp_remove:"حذف از مقایسه",cmp_clear:"پاک کردن انتخاب",
      cmp_count:"{n} از ۴ خانه انتخاب شده است",
      cmp_need:"برای دیدن مقایسه‌ی کنار هم، دست‌کم ۲ خانه از بالا انتخاب کنید.",
      cmp_home:"خانه",cmp_photo:"عکس",cmp_address:"آدرس",cmp_ppsf:"قیمت هر فوت مربع",cmp_status:"وضعیت"},
    hi:{nav_compare:"घरों की तुलना",
      cmp_title:"घरों की तुलना करें",
      cmp_sub:"दो से चार नमूना लिस्टिंग चुनें और उनकी कीमतें, आकार, शुल्क और विशेषताएँ साथ-साथ देखें।",
      cmp_banner:"नमूना डेटा — केवल डिज़ाइन पूर्वावलोकन के लिए। लाइव MLS® डेटा लाइसेंस मिलने के बाद (2027) जुड़ेगा।",
      cmp_hint:"साथ-साथ तुलना के लिए 2 से 4 घर चुनें।",
      cmp_add:"तुलना में जोड़ें",cmp_remove:"तुलना से हटाएँ",cmp_clear:"चयन साफ़ करें",
      cmp_count:"4 में से {n} घर चुने गए",
      cmp_need:"साथ-साथ तुलना देखने के लिए ऊपर से कम से कम 2 घर चुनें।",
      cmp_home:"घर",cmp_photo:"फ़ोटो",cmp_address:"पता",cmp_ppsf:"प्रति वर्ग फुट कीमत",cmp_status:"स्थिति"},
    zh:{nav_compare:"房源对比",
      cmp_title:"房源对比",
      cmp_sub:"选择两到四套示例房源,并排比较它们的价格、面积、管理费和特色。",
      cmp_banner:"示例数据——仅供设计预览。正式 MLS® 数据将在取得牌照后(2027年)接入。",
      cmp_hint:"选择 2 至 4 套房源进行并排对比。",
      cmp_add:"加入对比",cmp_remove:"移出对比",cmp_clear:"清除选择",
      cmp_count:"已选择 {n} / 4 套",
      cmp_need:"请在上方至少选择 2 套房源,即可查看并排对比。",
      cmp_home:"房源",cmp_photo:"照片",cmp_address:"地址",cmp_ppsf:"每平方英尺价格",cmp_status:"状态"}
    };
    for (var L6 in I18N6) { if (I18N[L6]) { for (var k6 in I18N6[L6]) I18N[L6][k6] = I18N6[L6][k6]; } }
    /* ---------- Investor report export strings ---------- */
    var I18N7 = {
    en:{iv_print_btn:"Print report",iv_download_btn:"Download report (HTML)",
      rp_title:"Investment Analysis Report",rp_date:"Report date",rp_language:"Report language",
      rp_inputs:"Your inputs",rp_outputs:"Results",rp_pay:"Monthly mortgage payment",rp_years:"years",
      rp_disclaimer:"Educational estimates only — not financial advice. Verify all figures with a licensed professional.",
      rp_contact:"Questions about this analysis? Email"},
    fa:{iv_print_btn:"چاپ گزارش",iv_download_btn:"دانلود گزارش (HTML)",
      rp_title:"گزارش تحلیل سرمایه‌گذاری",rp_date:"تاریخ گزارش",rp_language:"زبان گزارش",
      rp_inputs:"داده‌های ورودی شما",rp_outputs:"نتایج",rp_pay:"قسط ماهانه‌ی وام مسکن",rp_years:"سال",
      rp_disclaimer:"این ارقام فقط برآورد آموزشی‌اند و مشاوره‌ی مالی محسوب نمی‌شوند. همه‌ی ارقام را نزد یک متخصص دارای مجوز بررسی کنید.",
      rp_contact:"درباره‌ی این تحلیل پرسشی دارید؟ ایمیل بزنید:"},
    hi:{iv_print_btn:"रिपोर्ट प्रिंट करें",iv_download_btn:"रिपोर्ट डाउनलोड करें (HTML)",
      rp_title:"निवेश विश्लेषण रिपोर्ट",rp_date:"रिपोर्ट की तिथि",rp_language:"रिपोर्ट की भाषा",
      rp_inputs:"आपके इनपुट",rp_outputs:"परिणाम",rp_pay:"मासिक मॉर्गेज भुगतान",rp_years:"वर्ष",
      rp_disclaimer:"ये आंकड़े केवल शैक्षिक अनुमान हैं — वित्तीय सलाह नहीं। सभी आंकड़ों की पुष्टि किसी लाइसेंस प्राप्त पेशेवर से करें।",
      rp_contact:"इस विश्लेषण के बारे में प्रश्न? ईमेल करें:"},
    zh:{iv_print_btn:"打印报告",iv_download_btn:"下载报告（HTML）",
      rp_title:"投资分析报告",rp_date:"报告日期",rp_language:"报告语言",
      rp_inputs:"输入参数",rp_outputs:"计算结果",rp_pay:"每月房贷还款额",rp_years:"年",
      rp_disclaimer:"以上数字仅为教育性估算,不构成财务建议。请向持牌专业人士核实所有数字。",
      rp_contact:"对本分析有疑问?请发送电子邮件:"}
    };
    for (var L7 in I18N7) { if (I18N[L7]) { for (var k7 in I18N7[L7]) I18N[L7][k7] = I18N7[L7][k7]; } }
    /* ---------- Seller tools strings ---------- */
    var I18N8 = {
    en:{nav_seller:"Seller Tools",
      st_title:"Seller tools",st_sub:"Practical aids for selling your home: a step-by-step preparation checklist, and a drafting aid that turns facts you type in into a plain listing-description draft for you to review and edit.",
      chk_title:"Home-prep checklist",chk_sub:"Tick items off as you finish them — your progress is saved on this device only, and you can print the list to work from.",
      chk_progress_label:"Checklist progress",chk_progress:"{d} of {n} done",chk_print:"Print checklist",chk_reset:"Reset checklist",
      cat_ext:"Exterior & curb appeal",cat_dec:"Declutter & depersonalize",cat_rep:"Repairs & maintenance",cat_cln:"Deep clean",cat_stg:"Staging",cat_pho:"Photo-day prep",
      ext1:"Mow the lawn and trim the edges and hedges",ext2:"Sweep the driveway, walkway and front steps; pressure-wash any stains",ext3:"Clean the front door and polish or replace the house numbers",ext4:"Add a new doormat and potted plants or seasonal flowers at the entry",ext5:"Wash the exterior windows and clear leaves and debris from the gutters",
      dec1:"Remove personal photos, certificates and fridge magnets",dec2:"Clear kitchen and bathroom counters down to a few essentials",dec3:"Box up off-season clothes and extra items; organize the closets",dec4:"Move out bulky or extra furniture so rooms feel larger",dec5:"Store valuables, medications and paperwork out of sight",
      rep1:"Fix leaky faucets, running toilets and dripping taps",rep2:"Patch and touch up scuffed or cracked paint",rep3:"Replace burnt-out light bulbs and check that every light works",rep4:"Tighten loose handles, hinges and railings; oil squeaky doors",rep5:"Test smoke and carbon-monoxide alarms and replace their batteries",
      cln1:"Deep-clean the kitchen: oven, range hood, fridge and cabinets",cln2:"Scrub the bathrooms: grout, caulking, mirrors and fixtures",cln3:"Wash windows inside and out; clean the tracks and sills",cln4:"Steam-clean carpets and mop all hard floors",cln5:"Dust baseboards, vents, ceiling fans and light fixtures",
      stg1:"Make every bed with clean, neutral bedding",stg2:"Open curtains and blinds and turn the lights on for showings",stg3:"Set the dining table simply — placemats and one centrepiece",stg4:"Put out fresh towels in the bathrooms and add a plant or two",stg5:"Remove pet beds, bowls and litter boxes and neutralize odours",
      pho1:"Move cars off the driveway and close the garage door",pho2:"Hide garbage and recycling bins, hoses and garden tools",pho3:"Turn on every light and open all blinds and curtains",pho4:"Put toilet seats down and clear the bathroom counters",pho5:"Final walk-through: beds made, floors clear, nothing personal in view",
      dg_title:"Listing-description draft",dg_sub:"A drafting aid, not a copywriting service: enter only facts about your own home and it assembles them into a plain draft. It never adds features, sizes or claims you didn't type.",
      dg_sqft:"Interior size (sq ft)",dg_features:"Key features (separate with commas)",dg_features_ph:"e.g. renovated kitchen, double garage, mountain view",
      dg_nb:"Neighbourhood highlights (separate with commas)",dg_nb_ph:"e.g. quiet street, near SkyTrain, good schools",
      dg_notes:"Special notes (optional — added to the draft word for word)",dg_notes_ph:"Anything else, in your own words…",
      dg_btn:"Generate draft",dg_head:"DRAFT — for human review before use",dg_note:"AI-assembled from your inputs only. Verify every fact against the actual property before publishing.",
      dg_copy:"Copy draft",dg_copied:"Copied to clipboard",dg_placeholder:"Your draft will appear here after you generate it.",
      dg_autolang:"Written in your current site language — change the language at the top of the page and a generated draft is rewritten in the new language."},
    fa:{nav_seller:"ابزارهای فروشنده",
      st_title:"ابزارهای فروشنده",st_sub:"ابزارهای کاربردی برای فروش خانه‌تان: یک چک‌لیست گام‌به‌گام آماده‌سازی، و یک دستیار پیش‌نویس که واقعیت‌هایی را که خودتان وارد می‌کنید به یک پیش‌نویس ساده‌ی توضیحات آگهی تبدیل می‌کند تا بازبینی و ویرایش کنید.",
      chk_title:"چک‌لیست آماده‌سازی خانه",chk_sub:"هر مورد را پس از انجام تیک بزنید — پیشرفت شما فقط روی همین دستگاه ذخیره می‌شود و می‌توانید فهرست را چاپ کنید تا از روی آن کار کنید.",
      chk_progress_label:"پیشرفت چک‌لیست",chk_progress:"{d} از {n} انجام شده",chk_print:"چاپ چک‌لیست",chk_reset:"بازنشانی چک‌لیست",
      cat_ext:"نمای بیرونی و جذابیت ورودی",cat_dec:"خلوت‌کردن و حذف وسایل شخصی",cat_rep:"تعمیرات و نگهداری",cat_cln:"نظافت عمیق",cat_stg:"چیدمان نمایشی (استیجینگ)",cat_pho:"آماده‌سازی روز عکاسی",
      ext1:"چمن‌ها را کوتاه کنید و لبه‌ها و پرچین‌ها را مرتب کنید",ext2:"پارکینگ، مسیر پیاده و پله‌های ورودی را جارو کنید؛ اگر لک دارد با واترجت بشویید",ext3:"درب ورودی را تمیز کنید و پلاک خانه را برق بیندازید یا تعویض کنید",ext4:"یک پادری نو و گلدان یا گل‌های فصلی کنار ورودی بگذارید",ext5:"پنجره‌های بیرونی را بشویید و برگ و خاشاک را از ناودان‌ها پاک کنید",
      dec1:"عکس‌های شخصی، مدارک و آهنرباهای روی یخچال را بردارید",dec2:"کانترهای آشپزخانه و حمام را تا چند مورد ضروری خلوت کنید",dec3:"لباس‌های فصل دیگر و وسایل اضافی را جعبه کنید؛ کمدها را مرتب کنید",dec4:"مبلمان حجیم یا اضافی را بردارید تا اتاق‌ها بزرگ‌تر دیده شوند",dec5:"اشیای قیمتی، داروها و اسناد را از دیدرس دور نگه دارید",
      rep1:"شیرهای چکه‌دار، سیفون‌های خراب و نشتی‌ها را تعمیر کنید",rep2:"رنگ‌های ساییده یا ترک‌خورده را بتونه و ترمیم کنید",rep3:"لامپ‌های سوخته را تعویض کنید و از کارکردن همه‌ی چراغ‌ها مطمئن شوید",rep4:"دستگیره‌ها، لولاها و نرده‌های شل را محکم کنید؛ درب‌های جیرجیرک‌دار را روغن بزنید",rep5:"هشداردهنده‌های دود و مونوکسید کربن را آزمایش کنید و باتری‌هایشان را عوض کنید",
      cln1:"آشپزخانه را عمیق تمیز کنید: فر، هود، یخچال و کابینت‌ها",cln2:"حمام‌ها را بسابید: بندکشی، درزگیری، آینه‌ها و شیرآلات",cln3:"پنجره‌ها را از داخل و بیرون بشویید؛ ریل‌ها و لبه‌ها را تمیز کنید",cln4:"فرش‌ها را شامپو بزنید و همه‌ی کف‌های سخت را تی بکشید",cln5:"قرنیزها، دریچه‌ها، پنکه‌های سقفی و لوسترها را گردگیری کنید",
      stg1:"همه‌ی تخت‌ها را با روتختی تمیز و خنثی مرتب کنید",stg2:"پرده‌ها و کرکره‌ها را باز کنید و برای بازدید چراغ‌ها را روشن کنید",stg3:"میز ناهارخوری را ساده بچینید: زیربشقابی و یک دکوری وسط",stg4:"در حمام‌ها حوله‌ی تازه بگذارید و یکی دو گلدان اضافه کنید",stg5:"جای خواب، ظرف غذا و خاک گربه‌ی حیوان خانگی را بردارید و بوهای نامطبوع را خنثی کنید",
      pho1:"خودروها را از پارکینگ بیرون ببرید و درب گاراژ را ببندید",pho2:"سطل‌های زباله و بازیافت، شلنگ و ابزار باغبانی را پنهان کنید",pho3:"همه‌ی چراغ‌ها را روشن کنید و همه‌ی کرکره‌ها و پرده‌ها را باز کنید",pho4:"درپوش توالت‌ها را ببندید و کانترهای حمام را خلوت کنید",pho5:"یک بازدید نهایی انجام دهید: تخت‌ها مرتب، کف‌ها خالی، و هیچ وسیله‌ی شخصی در معرض دید نباشد",
      dg_title:"پیش‌نویس توضیحات آگهی",dg_sub:"این یک ابزار کمکی برای پیش‌نویس است، نه خدمات نویسندگی تبلیغاتی: فقط واقعیت‌های خانه‌ی خودتان را وارد کنید تا آن‌ها را در یک پیش‌نویس ساده کنار هم بچیند. هرگز امکانات، اندازه یا ادعایی را که ننوشته‌اید اضافه نمی‌کند.",
      dg_sqft:"زیربنا (فوت مربع)",dg_features:"امکانات کلیدی (با ویرگول جدا کنید)",dg_features_ph:"مثلاً: آشپزخانه‌ی بازسازی‌شده، گاراژ دوبل، چشم‌انداز کوهستان",
      dg_nb:"نکات برجسته‌ی محله (با ویرگول جدا کنید)",dg_nb_ph:"مثلاً: خیابان آرام، نزدیک اسکای‌ترین، مدارس خوب",
      dg_notes:"یادداشت‌های ویژه (اختیاری — عیناً به پیش‌نویس اضافه می‌شود)",dg_notes_ph:"هر نکته‌ی دیگری، با کلمات خودتان…",
      dg_btn:"ساخت پیش‌نویس",dg_head:"پیش‌نویس — پیش از استفاده، بازبینی انسانی لازم است",dg_note:"این متن فقط از اطلاعاتی که خودتان وارد کرده‌اید ساخته شده است. پیش از انتشار، هر نکته را با ملک واقعی تطبیق دهید.",
      dg_copy:"کپی پیش‌نویس",dg_copied:"کپی شد",dg_placeholder:"پیش‌نویس شما پس از ساخت، اینجا نمایش داده می‌شود.",
      dg_autolang:"پیش‌نویس به زبان فعلی سایت نوشته می‌شود — زبان را از بالای صفحه تغییر دهید تا پیش‌نویس ساخته‌شده به زبان جدید بازنویسی شود."},
    hi:{nav_seller:"विक्रेता टूल",
      st_title:"विक्रेता टूल",st_sub:"आपके घर की बिक्री के लिए व्यावहारिक सहायक उपकरण: चरण-दर-चरण तैयारी चेकलिस्ट, और एक ड्राफ़्टिंग सहायक जो आपके द्वारा लिखे तथ्यों को एक सादे लिस्टिंग-विवरण ड्राफ़्ट में बदलता है, जिसे आप समीक्षा करके संपादित कर सकते हैं।",
      chk_title:"घर तैयार करने की चेकलिस्ट",chk_sub:"जैसे-जैसे काम पूरे हों, उन्हें टिक करते जाएँ — आपकी प्रगति केवल इसी डिवाइस पर सहेजी जाती है, और आप सूची प्रिंट करके उसी से काम कर सकते हैं।",
      chk_progress_label:"चेकलिस्ट प्रगति",chk_progress:"{n} में से {d} पूरे",chk_print:"चेकलिस्ट प्रिंट करें",chk_reset:"चेकलिस्ट रीसेट करें",
      cat_ext:"बाहरी हिस्सा और कर्ब अपील",cat_dec:"अव्यवस्था हटाना और निजी चीज़ें हटाना",cat_rep:"मरम्मत और रखरखाव",cat_cln:"गहरी सफ़ाई",cat_stg:"स्टेजिंग",cat_pho:"फ़ोटो वाले दिन की तैयारी",
      ext1:"लॉन की घास काटें और किनारे व हेज़ को तराशें",ext2:"ड्राइववे, पैदल पथ और सामने की सीढ़ियाँ झाड़ें; दाग हों तो प्रेशर-वॉश करें",ext3:"सामने का दरवाज़ा साफ़ करें और घर का नंबर चमकाएँ या बदलें",ext4:"प्रवेश द्वार पर नया डोरमैट और गमले वाले पौधे या मौसमी फूल रखें",ext5:"बाहरी खिड़कियाँ धोएँ और नालियों (गटर) से पत्ते व मलबा साफ़ करें",
      dec1:"निजी फ़ोटो, प्रमाणपत्र और फ़्रिज मैग्नेट हटाएँ",dec2:"रसोई और बाथरूम काउंटर पर केवल कुछ ज़रूरी चीज़ें रखें",dec3:"बेमौसम कपड़े और अतिरिक्त सामान बक्सों में डालें; अलमारियाँ व्यवस्थित करें",dec4:"कमरों को बड़ा दिखाने के लिए भारी या अतिरिक्त फ़र्नीचर हटाएँ",dec5:"कीमती सामान, दवाइयाँ और कागज़ात नज़र से दूर रखें",
      rep1:"टपकते नल, चलते टॉयलेट और रिसाव ठीक करें",rep2:"खरोंच या दरार वाले पेंट को भरकर टच-अप करें",rep3:"जले हुए बल्ब बदलें और जाँचें कि हर लाइट काम करती है",rep4:"ढीले हैंडल, कब्ज़े और रेलिंग कसें; चरमराते दरवाज़ों में तेल डालें",rep5:"धुआँ और कार्बन-मोनोऑक्साइड अलार्म की जाँच करें और उनकी बैटरियाँ बदलें",
      cln1:"रसोई की गहरी सफ़ाई करें: ओवन, रेंज हुड, फ़्रिज और कैबिनेट",cln2:"बाथरूम रगड़कर साफ़ करें: ग्राउट, कॉकिंग, शीशे और फिक्स्चर",cln3:"खिड़कियाँ अंदर-बाहर धोएँ; ट्रैक और सिल साफ़ करें",cln4:"कालीनों की स्टीम-सफ़ाई करें और सभी सख्त फ़र्शों पर पोछा लगाएँ",cln5:"बेसबोर्ड, वेंट, पंखे और लाइट फिक्स्चर की धूल झाड़ें",
      stg1:"सभी बिस्तर साफ़, तटस्थ रंग की चादरों से सजाएँ",stg2:"पर्दे और ब्लाइंड खोलें और दिखाने के समय लाइटें जला दें",stg3:"डाइनिंग टेबल सादगी से सजाएँ: प्लेसमैट और एक सेंटरपीस",stg4:"बाथरूम में ताज़े तौलिए रखें और एक-दो पौधे लगाएँ",stg5:"पालतू जानवरों के बिस्तर, कटोरे और लिटर बॉक्स हटाएँ और दुर्गंध दूर करें",
      pho1:"ड्राइववे से गाड़ियाँ हटाएँ और गैरेज का दरवाज़ा बंद करें",pho2:"कचरे और रीसाइक्लिंग के डिब्बे, होज़ और बाग़ के औज़ार छिपाएँ",pho3:"हर लाइट जलाएँ और सभी ब्लाइंड व पर्दे खोलें",pho4:"टॉयलेट की सीटें नीचे करें और बाथरूम काउंटर खाली करें",pho5:"अंतिम निरीक्षण करें: बिस्तर बने हुए, फ़र्श खाली, कोई निजी चीज़ नज़र न आए",
      dg_title:"लिस्टिंग विवरण ड्राफ़्ट",dg_sub:"यह एक ड्राफ़्टिंग सहायक है, कॉपीराइटिंग सेवा नहीं: केवल अपने घर के तथ्य दर्ज करें और यह उन्हें एक सादे ड्राफ़्ट में जोड़ देता है। यह कभी वे विशेषताएँ, आकार या दावे नहीं जोड़ता जो आपने नहीं लिखे।",
      dg_sqft:"आंतरिक आकार (वर्ग फुट)",dg_features:"मुख्य विशेषताएँ (अल्पविराम से अलग करें)",dg_features_ph:"जैसे: नवीनीकृत रसोई, डबल गैरेज, पहाड़ का दृश्य",
      dg_nb:"इलाके की मुख्य बातें (अल्पविराम से अलग करें)",dg_nb_ph:"जैसे: शांत गली, स्काईट्रेन के पास, अच्छे स्कूल",
      dg_notes:"विशेष नोट (वैकल्पिक — ड्राफ़्ट में यथावत जोड़े जाएँगे)",dg_notes_ph:"कुछ और, अपने शब्दों में…",
      dg_btn:"ड्राफ़्ट बनाएँ",dg_head:"ड्राफ़्ट — उपयोग से पहले मानव समीक्षा आवश्यक",dg_note:"यह केवल आपके द्वारा दिए गए इनपुट से तैयार किया गया है। प्रकाशित करने से पहले हर तथ्य की असली प्रॉपर्टी से पुष्टि करें।",
      dg_copy:"ड्राफ़्ट कॉपी करें",dg_copied:"कॉपी हो गया",dg_placeholder:"ड्राफ़्ट बनाने के बाद वह यहाँ दिखाई देगा।",
      dg_autolang:"ड्राफ़्ट आपकी वर्तमान साइट भाषा में लिखा जाता है — पेज के ऊपर से भाषा बदलें तो बना हुआ ड्राफ़्ट नई भाषा में फिर से लिखा जाएगा।"},
    zh:{nav_seller:"卖家工具",
      st_title:"卖家工具",st_sub:"实用的卖房辅助工具:一份分步准备清单,以及一个起草助手,可将您输入的事实组装成一份朴素的房源描述草稿,供您审核和修改。",
      chk_title:"卖房准备清单",chk_sub:"完成一项就勾选一项——您的进度仅保存在此设备上,您也可以打印这份清单使用。",
      chk_progress_label:"清单进度",chk_progress:"已完成 {d}/{n}",chk_print:"打印清单",chk_reset:"重置清单",
      cat_ext:"外观与门面吸引力",cat_dec:"清理杂物与去个人化",cat_rep:"维修与保养",cat_cln:"深度清洁",cat_stg:"布置展示",cat_pho:"拍照日准备",
      ext1:"修剪草坪,整理边缘和树篱",ext2:"清扫车道、人行道和门前台阶;有污渍处用高压水枪冲洗",ext3:"清洁前门,擦亮或更换门牌号",ext4:"在入口处放一块新门垫和盆栽或时令鲜花",ext5:"清洗外侧窗户,清理排水槽中的落叶和杂物",
      dec1:"收起个人照片、证书和冰箱贴",dec2:"厨房和浴室台面只保留几件必需品",dec3:"将过季衣物和多余物品装箱;整理衣柜",dec4:"移走笨重或多余的家具,让房间显得更宽敞",dec5:"将贵重物品、药品和文件收好,避免外露",
      rep1:"修理漏水的水龙头、冲水不停的马桶和滴漏",rep2:"修补并补漆有划痕或裂纹的墙面",rep3:"更换烧坏的灯泡,确保所有灯具正常工作",rep4:"拧紧松动的把手、铰链和栏杆;给吱呀作响的门上油",rep5:"测试烟雾和一氧化碳报警器并更换电池",
      cln1:"深度清洁厨房:烤箱、抽油烟机、冰箱和橱柜",cln2:"刷洗浴室:瓷砖缝、填缝、镜子和洁具",cln3:"内外清洗窗户;清洁窗轨和窗台",cln4:"蒸汽清洗地毯,拖净所有硬质地面",cln5:"擦拭踢脚线、通风口、吊扇和灯具的灰尘",
      stg1:"所有床铺铺上干净、素色的床品",stg2:"拉开窗帘和百叶窗;看房时打开灯光",stg3:"简单布置餐桌:餐垫和一个中心装饰",stg4:"在浴室放上干净毛巾,并添置一两盆绿植",stg5:"收起宠物窝、食盆和猫砂盆,消除异味",
      pho1:"将车辆移出车道并关上车库门",pho2:"收起垃圾桶、回收桶、水管和园艺工具",pho3:"打开所有灯,拉开所有百叶窗和窗帘",pho4:"盖上马桶盖,清空浴室台面",pho5:"最后巡视一遍:床铺整齐、地面清空、无个人物品外露",
      dg_title:"房源描述草稿",dg_sub:"这是一个起草助手,而非文案服务:只需输入您自家房产的事实,它就会将其组装成一份朴素的草稿。它绝不会添加您未输入的特色、面积或说法。",
      dg_sqft:"室内面积(平方英尺)",dg_features:"主要特色(用逗号分隔)",dg_features_ph:"例如:翻新厨房、双车位车库、山景",
      dg_nb:"社区亮点(用逗号分隔)",dg_nb_ph:"例如:街道安静、靠近天车站、学校优良",
      dg_notes:"特别说明(可选——将原样加入草稿)",dg_notes_ph:"其他想补充的内容,用您自己的话…",
      dg_btn:"生成草稿",dg_head:"草稿——使用前需人工审核",dg_note:"本草稿仅由您输入的内容组装而成。发布前,请逐项与实际房产核对每个事实。",
      dg_copy:"复制草稿",dg_copied:"已复制",dg_placeholder:"生成后,您的草稿将显示在这里。",
      dg_autolang:"草稿以您当前的网站语言生成——在页面顶部切换语言后,已生成的草稿会以新语言重写。"}
    };
    for (var L8 in I18N8) { if (I18N[L8]) { for (var k8 in I18N8[L8]) I18N[L8][k8] = I18N8[L8][k8]; } }
    /* ---------- Floating AI assistant + site search strings ---------- */
    var I18N9 = {
    en:{ai_title:"Real estate assistant",
      ai_sub:"Searches this site's listings, guides & tools",
      ai_open:"Open the real estate assistant",
      ai_close:"Close chat",
      sr_found:"{n} matching sample listing(s) on this page:",
      sr_none:"No sample listing matches that combination. Try a higher budget, fewer bedrooms, or another city — or use the <a href='#match'>Match Assistant</a> to filter the samples by your criteria.",
      sr_intro:"Here's what I found on this site:"},
    fa:{ai_title:"دستیار هوشمند املاک",
      ai_sub:"فایل‌ها، راهنماها و ابزارهای همین سایت را جست‌وجو می‌کند",
      ai_open:"باز کردن دستیار هوشمند املاک",
      ai_close:"بستن گفت‌وگو",
      sr_found:"{n} فایل نمونه‌ی منطبق در همین صفحه:",
      sr_none:"هیچ فایل نمونه‌ای با این ترکیب پیدا نشد. بودجه را بالاتر ببرید، تعداد خواب کمتر یا شهر دیگری را امتحان کنید — یا از <a href='#match'>دستیار تطبیق</a> استفاده کنید تا نمونه‌ها را بر اساس معیارهایتان پالایه کند.",
      sr_intro:"این‌ها را در سایت پیدا کردم:"},
    hi:{ai_title:"रियल एस्टेट सहायक",
      ai_sub:"इस साइट की लिस्टिंग, मार्गदर्शिकाएँ और टूल खोजता है",
      ai_open:"रियल एस्टेट सहायक खोलें",
      ai_close:"चैट बंद करें",
      sr_found:"इस पेज पर {n} मेल खाती नमूना लिस्टिंग:",
      sr_none:"इस संयोजन से कोई नमूना लिस्टिंग मेल नहीं खाती। बजट बढ़ाकर, कम बेडरूम या कोई अन्य शहर आज़माकर देखें — या अपने मानदंडों से नमूनों को फ़िल्टर करने के लिए <a href='#match'>मैच सहायक</a> का उपयोग करें।",
      sr_intro:"मुझे इस साइट पर यह मिला:"},
    zh:{ai_title:"房产智能助手",
      ai_sub:"搜索本站的房源、指南和工具",
      ai_open:"打开房产智能助手",
      ai_close:"关闭聊天",
      sr_found:"本页找到 {n} 套符合条件的示例房源：",
      sr_none:"没有符合该组合的示例房源。请尝试提高预算、减少卧室数或换一个城市——也可以使用<a href='#match'>匹配助手</a>按您的标准筛选示例房源。",
      sr_intro:"我在本网站上找到了这些："}
    };
    for (var L9 in I18N9) { if (I18N[L9]) { for (var k9 in I18N9[L9]) I18N[L9][k9] = I18N9[L9][k9]; } }
    /* ---------- Pre-licence disclosure (BCFSA advertising compliance) ---------- */
    var I18N9b = {
    en:{licence_notice:"Please note: Erfan is not currently a licensed real estate professional. He is preparing for the BC real estate licensing exam and is not affiliated with any brokerage. This site provides educational tools and general information only — it does not offer real estate trading services, representation, or professional advice. For help with an actual purchase or sale, please contact a licensed real estate professional.",
      footer_licence:"Erfan BC Real Estate is a preview project by Erfan, who is not yet a licensed real estate professional and is not affiliated with any brokerage. This site offers educational tools and general information only — no real estate trading services, representation, or professional advice are provided.",
      licence_short:"Erfan is not yet a licensed real estate professional and is not affiliated with any brokerage — inquiries are for general information only."},
    fa:{licence_notice:"توجه: عرفان در حال حاضر مشاور املاک دارای مجوز نیست. او در حال آماده‌شدن برای آزمون لایسنس املاک بریتیش‌کلمبیاست و با هیچ دفتر املاکی (بروکراژ) وابستگی ندارد. این سایت فقط ابزارهای آموزشی و اطلاعات عمومی ارائه می‌دهد — خدمات معاملات املاک، نمایندگی یا مشاوره‌ی حرفه‌ای ارائه نمی‌کند. برای کمک در خرید یا فروش واقعی، لطفاً با یک مشاور املاک دارای مجوز تماس بگیرید.",
      footer_licence:"«Erfan BC Real Estate» پروژه‌ای پیش‌نمایشی از عرفان است؛ او هنوز مشاور املاک دارای مجوز نیست و با هیچ دفتر املاکی (بروکراژ) وابستگی ندارد. این سایت فقط ابزارهای آموزشی و اطلاعات عمومی ارائه می‌دهد — هیچ‌گونه خدمات معاملات املاک، نمایندگی یا مشاوره‌ی حرفه‌ای ارائه نمی‌شود.",
      licence_short:"عرفان هنوز مشاور املاک دارای مجوز نیست و با هیچ بروکراژی وابستگی ندارد — پرسش‌ها فقط برای اطلاعات عمومی‌اند."},
    hi:{licence_notice:"कृपया ध्यान दें: एरफ़ान वर्तमान में लाइसेंस प्राप्त रियल एस्टेट पेशेवर नहीं हैं। वे BC रियल एस्टेट लाइसेंस परीक्षा की तैयारी कर रहे हैं और किसी ब्रोकरेज से संबद्ध नहीं हैं। यह साइट केवल शैक्षिक उपकरण और सामान्य जानकारी देती है — यह रियल एस्टेट ट्रेडिंग सेवाएँ, प्रतिनिधित्व या पेशेवर सलाह प्रदान नहीं करती। किसी वास्तविक खरीद या बिक्री में मदद के लिए कृपया किसी लाइसेंस प्राप्त रियल एस्टेट पेशेवर से संपर्क करें।",
      footer_licence:"Erfan BC Real Estate एरफ़ान का एक पूर्वावलोकन प्रोजेक्ट है; वे अभी लाइसेंस प्राप्त रियल एस्टेट पेशेवर नहीं हैं और किसी ब्रोकरेज से संबद्ध नहीं हैं। यह साइट केवल शैक्षिक उपकरण और सामान्य जानकारी देती है — कोई रियल एस्टेट ट्रेडिंग सेवा, प्रतिनिधित्व या पेशेवर सलाह प्रदान नहीं की जाती।",
      licence_short:"एरफ़ान अभी लाइसेंस प्राप्त रियल एस्टेट पेशेवर नहीं हैं और किसी ब्रोकरेज से संबद्ध नहीं हैं — पूछताछ केवल सामान्य जानकारी के लिए है।"},
    zh:{licence_notice:"请注意:Erfan 目前并非持牌房地产专业人士。他正在备考 BC 房地产牌照考试,且不隶属于任何房地产经纪公司。本网站仅提供教育工具和一般信息——不提供房地产交易服务、代理服务或专业建议。如需在实际购房或售房方面获得帮助,请联系持牌房地产专业人士。",
      footer_licence:"Erfan BC Real Estate 是 Erfan 的一个预览项目;他尚未取得房地产牌照,也不隶属于任何经纪公司。本站仅提供教育工具和一般信息——不提供任何房地产交易服务、代理服务或专业建议。",
      licence_short:"Erfan 尚未取得房地产牌照,也不隶属于任何经纪公司——咨询仅供一般信息参考。"}
    };
    for (var L9 in I18N9b) { if (I18N[L9]) { for (var k9 in I18N9[L9]) I18N[L9][k9] = I18N9b[L9][k9]; } }
    /* ---------- Knowledge Center strings ---------- */
    var I18N10 = {
    en:{cta_kc:"Explore the Knowledge Center",
      kc_title:"Knowledge Center",
      kc_sub:"Plain-language guides to Metro Vancouver neighbourhoods and the rules that shape a BC home purchase — educational only, with sources named so you can verify the details yourself.",
      kc_group_areas:"Neighbourhood guides — Metro Vancouver",
      kc_group_explain:"Market explainers — how BC real estate works",
      kc_areas_note:"These guides are general and educational; neighbourhoods change over time. Transit routes and schedules: TransLink (translink.ca), as of 2026 — check current schedules before you travel. For market commentary, see BCREA's published market updates, as of 2026 — verify current figures before relying on them."},
    fa:{cta_kc:"مرکز دانش را ببینید",
      kc_title:"مرکز دانش",
      kc_sub:"راهنمای ساده و قابل‌فهم محله‌های مترو ونکوور و قواعدی که خرید خانه در BC را شکل می‌دهند — فقط آموزشی، با ذکر منبع تا خودتان جزئیات را بررسی کنید.",
      kc_group_areas:"راهنمای محله‌ها — مترو ونکوور",
      kc_group_explain:"توضیح مفاهیم بازار — خرید خانه در BC چگونه کار می‌کند",
      kc_areas_note:"این راهنماها کلی و آموزشی‌اند؛ محله‌ها در طول زمان تغییر می‌کنند. مسیرها و برنامه‌های حمل‌ونقل: TransLink ‏(translink.ca)، تا ۲۰۲۶ — پیش از سفر، برنامه‌های جاری را بررسی کنید. برای دیدگاه‌های بازار، به‌روزرسانی‌های بازار BCREA، تا ۲۰۲۶، مراجعه کنید — ارقام جاری را پیش از اتکا بررسی کنید."},
    hi:{cta_kc:"ज्ञान केंद्र देखें",
      kc_title:"ज्ञान केंद्र",
      kc_sub:"मेट्रो वैंकूवर के इलाकों और BC में घर ख़रीद को आकार देने वाले नियमों की सरल-भाषा गाइड — केवल शैक्षिक, स्रोतों के नाम के साथ ताकि आप ख़ुद विवरण जाँच सकें।",
      kc_group_areas:"इलाकों की गाइड — मेट्रो वैंकूवर",
      kc_group_explain:"बाज़ार व्याख्या — BC में घर ख़रीद कैसे काम करती है",
      kc_areas_note:"ये गाइड सामान्य और शैक्षिक हैं; इलाके समय के साथ बदलते हैं। ट्रांज़िट मार्ग और समय-सारणी: TransLink (translink.ca), 2026 तक — यात्रा से पहले वर्तमान समय-सारणी जाँचें। बाज़ार टिप्पणी के लिए BCREA के प्रकाशित बाज़ार अपडेट देखें, 2026 तक — भरोसा करने से पहले वर्तमान आंकड़े जाँचें।"},
    zh:{cta_kc:"浏览知识中心",
      kc_title:"知识中心",
      kc_sub:"用通俗语言介绍温哥华都会区的社区,以及影响在 BC 购房的规则——仅供教育参考,并注明来源,方便您自行核实细节。",
      kc_group_areas:"社区指南——温哥华都会区",
      kc_group_explain:"市场解析——BC 购房如何运作",
      kc_areas_note:"这些指南为一般性教育内容;社区会随时间变化。公交线路与时刻:TransLink(translink.ca),截至 2026 年——出行前请查询当前时刻表。市场评论请参阅 BCREA 发布的市场更新(截至 2026 年)——依赖前请核实当前数据。"}
    };
    for (var L10 in I18N10) { if (I18N[L10]) { for (var k10 in I18N10[L10]) I18N[L10][k10] = I18N10[L10][k10]; } }
    /* ---------- Newsletter signup strings ---------- */
    var I18N11 = {
    en:{nl_title:"Monthly BC & Canada housing market report",
      nl_sub:"One email a month with market analysis for British Columbia and Canada — sent in the language you choose. No spam, no noise.",
      nl_first:"First name",nl_first_ph:"Your first name",
      nl_last:"Last name",nl_last_ph:"Your last name",
      nl_email:"Email",nl_email_ph:"you@example.com",
      nl_lang:"Newsletter language",nl_captcha:"Security check",
      nl_submit:"Subscribe",nl_sending:"Subscribing…",
      nl_privacy:"One email per month. You can unsubscribe at any time — every email includes an unsubscribe link.",
      nl_success:"You're on the list — the monthly market report will arrive in your chosen language.",
      nl_err_validation:"Please check the highlighted fields and try again.",
      nl_err_captcha:"Please complete the captcha check and try again.",
      nl_err_generic:"Something went wrong — please try again later."},
    fa:{nl_title:"گزارش ماهانه‌ی بازار مسکن بریتیش‌کلمبیا و کانادا",
      nl_sub:"هر ماه یک ایمیل با تحلیل بازار مسکن بریتیش‌کلمبیا و کانادا — به زبانی که خودتان انتخاب می‌کنید. بدون اسپم و تبلیغات اضافی.",
      nl_first:"نام",nl_first_ph:"نام شما",
      nl_last:"نام خانوادگی",nl_last_ph:"نام خانوادگی شما",
      nl_email:"ایمیل",nl_email_ph:"you@example.com",
      nl_lang:"زبان خبرنامه",nl_captcha:"تأیید امنیتی",
      nl_submit:"اشتراک",nl_sending:"در حال ثبت اشتراک…",
      nl_privacy:"هر ماه فقط یک ایمیل. هر زمان که بخواهید می‌توانید لغو اشتراک کنید — لینک لغو اشتراک در هر ایمیل وجود دارد.",
      nl_success:"عضویت شما ثبت شد — گزارش ماهانه‌ی بازار به زبان انتخابی‌تان برایتان ارسال می‌شود.",
      nl_err_validation:"لطفاً فیلدهای مشخص‌شده را بررسی کنید و دوباره تلاش کنید.",
      nl_err_captcha:"لطفاً تأیید امنیتی (کپچا) را کامل کنید و دوباره تلاش کنید.",
      nl_err_generic:"مشکلی پیش آمد — لطفاً بعداً دوباره تلاش کنید."},
    hi:{nl_title:"मासिक BC और कनाडा आवास बाज़ार रिपोर्ट",
      nl_sub:"हर महीने एक ईमेल — ब्रिटिश कोलंबिया और कनाडा के बाज़ार का विश्लेषण, आपकी चुनी हुई भाषा में। कोई स्पैम नहीं।",
      nl_first:"पहला नाम",nl_first_ph:"आपका पहला नाम",
      nl_last:"अंतिम नाम",nl_last_ph:"आपका अंतिम नाम",
      nl_email:"ईमेल",nl_email_ph:"you@example.com",
      nl_lang:"न्यूज़लेटर की भाषा",nl_captcha:"सुरक्षा जाँच",
      nl_submit:"सदस्यता लें",nl_sending:"सदस्यता ली जा रही है…",
      nl_privacy:"हर महीने सिर्फ़ एक ईमेल। आप कभी भी सदस्यता छोड़ सकते हैं — हर ईमेल में अनसब्सक्राइब लिंक होता है।",
      nl_success:"आप सूची में हैं — मासिक बाज़ार रिपोर्ट आपकी चुनी हुई भाषा में आएगी।",
      nl_err_validation:"कृपया हाइलाइट किए गए फ़ील्ड जाँचें और फिर से कोशिश करें।",
      nl_err_captcha:"कृपया कैप्चा जाँच पूरी करें और फिर से कोशिश करें।",
      nl_err_generic:"कुछ गड़बड़ हो गई — कृपया बाद में फिर से कोशिश करें।"},
    zh:{nl_title:"BC 省与加拿大住房市场月度报告",
      nl_sub:"每月一封电子邮件,包含不列颠哥伦比亚省和加拿大的市场分析 — 以您选择的语言发送。无垃圾邮件。",
      nl_first:"名字",nl_first_ph:"您的名字",
      nl_last:"姓氏",nl_last_ph:"您的姓氏",
      nl_email:"电子邮箱",nl_email_ph:"you@example.com",
      nl_lang:"新闻通讯语言",nl_captcha:"安全验证",
      nl_submit:"订阅",nl_sending:"正在订阅…",
      nl_privacy:"每月仅一封电子邮件。您可以随时退订 — 每封邮件都附有退订链接。",
      nl_success:"您已成功订阅 — 每月市场报告将以您选择的语言发送。",
      nl_err_validation:"请检查标出的字段后重试。",
      nl_err_captcha:"请完成验证码验证后重试。",
      nl_err_generic:"出现问题 — 请稍后再试。"}
    };
    for (var L11 in I18N11) { if (I18N[L11]) { for (var k11 in I18N11[L11]) I18N[L11][k11] = I18N11[L11][k11]; } }
    var lang = "en";
    try { var saved = localStorage.getItem("erfan-re-lang"); if (saved && I18N[saved]) lang = saved; } catch(e){}
    function T(){ return I18N[lang]; }
    function fmt(n){ n = Number(n); if (!isFinite(n)) n = 0; var v = Math.round(n); return (v < 0 ? "-$" : "$") + Math.abs(v).toLocaleString("en-US"); }
    function $(id){ return document.getElementById(id); }
    function fill(tpl, obj){ var s = tpl; for (var k in obj) s = s.split("{"+k+"}").join(obj[k]); return s; }
    function esc(s){ if (s === null || s === undefined) return ""; return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
    /* ---------- option builders (preserve selection) ---------- */
    function keep(sel, build, defVal){ var v = sel.value; sel.innerHTML = ""; build(sel); if (v && sel.querySelector('option[value="'+v+'"]')) sel.value = v; else if (defVal && sel.querySelector('option[value="'+defVal+'"]')) sel.value = defVal; }
    function opt(sel, val, label){ var o = document.createElement("option"); o.value = val; o.textContent = label; sel.appendChild(o); }
    function buildCitySelect(sel, withAll){ if (withAll) opt(sel, "", T().all_cities); var cs = CITIES.slice(); LISTINGS.forEach(function(l){ if (l.city && cs.indexOf(l.city) === -1) cs.push(l.city); }); cs.forEach(function(c){ opt(sel, c, T().cities[c] || c); }); }
    function buildTypeSelect(sel){ opt(sel, "", T().all_types); ["condo","townhouse","house"].forEach(function(t){ opt(sel, t, T()["type_"+t]); }); }
    var PRICES = [500000, 750000, 1000000, 1250000, 1500000];
    function buildPriceSelect(sel){ opt(sel, "", T().any_price); PRICES.forEach(function(p){ opt(sel, String(p), fmt(p)); }); }
    function buildBedsSelect(sel){ opt(sel, "0", T().any); [1,2,3,4].forEach(function(n){ opt(sel, String(n), n + "+"); }); }
    function buildSortSelect(sel){ [["featured","s_featured"],["price-asc","s_price_asc"],["price-desc","s_price_desc"],["newest","s_newest"],["dom","s_dom"]].forEach(function(p){ opt(sel, p[0], T()[p[1]]); }); }

    function domOf(l){ if (l && l.listed){ var d = new Date(String(l.listed).slice(0,10) + "T00:00:00"); if (!isNaN(d.getTime())){ var now = new Date(); now.setHours(0,0,0,0); var n = Math.floor((now - d) / 86400000); if (n >= 0) return n; } } return (l && l.dom) || 0; }
    function statusKey(l){ return (l && (l.status === "pending" || l.status === "sold")) ? l.status : "active"; }
