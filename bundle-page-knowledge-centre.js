    /* ---------- Knowledge Center: expandable article cards ---------- */
    window.kcToggle = function(btn){
      var body = btn.parentElement.querySelector(".kc-body");
      if (!body) return;
      if (body.hasAttribute("hidden")){
        body.removeAttribute("hidden");
        btn.textContent = btn.getAttribute("data-less");
        btn.setAttribute("aria-expanded", "true");
      } else {
        body.setAttribute("hidden", "");
        btn.textContent = btn.getAttribute("data-more");
        btn.setAttribute("aria-expanded", "false");
      }
    };
    function kcCard(title, teaser, more, less, body){
      return '<article class="kc-card"><h4>' + title + '</h4><p class="kc-teaser">' + teaser + '</p>'
        + '<button type="button" class="btn btn-line kc-btn" data-more="' + more + '" data-less="' + less + '" aria-expanded="false" data-kc-toggle="1">' + more + '</button>'
        + '<div class="kc-body" hidden>' + body + '</div></article>';
    }
    function kcSec(h, p){ return "<h5>" + h + "</h5><p>" + p + "</p>"; }

    var KC_AREAS = {
    en:
      kcCard("Burnaby — Metrotown",
        "Burnaby's high-rise downtown, built around a major shopping centre and a SkyTrain hub.",
        "Read guide", "Close",
        kcSec("Character", "Metrotown is Burnaby's city centre: a dense cluster of condo towers, offices and retail anchored by Metropolis at Metrotown, one of the largest shopping centres in BC. The streets near the station feel properly urban, while a few blocks out they give way to quieter residential streets and the forested trails of Central Park on the area's western edge.")
        + kcSec("Getting around", "Metrotown Station on the SkyTrain Expo Line gives a direct ride to downtown Vancouver, and the station doubles as one of the region's busiest bus exchanges. Patterson Station (also Expo Line) serves the west side of the area. Many daily needs — groceries, services, the Bonsor Recreation Complex — are within walking distance of the towers.")
        + kcSec("Homes", "Mostly condos — high-rise towers near the centre and older low-rise apartment buildings on surrounding streets — with townhouses and single-family houses further out.")
        + kcSec("Who it suits", "People who want a car-light, transit-first lifestyle; SkyTrain commuters; and downsizers who want shops, services and recreation close at hand."))
      + kcCard("Coquitlam — Coquitlam Centre",
        "A family-oriented city centre where the SkyTrain's Evergreen extension meets the West Coast Express.",
        "Read guide", "Close",
        kcSec("Character", "Coquitlam's planned downtown, built around the Coquitlam Centre shopping mall. Lafarge Lake and Town Centre Park act as its green living room — walking trails, sports fields and community events — so the centre feels suburban and family-paced even as new towers rise.")
        + kcSec("Getting around", "Coquitlam Central Station combines the Millennium Line (Evergreen extension) with the West Coast Express commuter train to downtown Vancouver, plus a bus exchange — one of the few Metro Vancouver centres with both SkyTrain and commuter rail.")
        + kcSec("Homes", "Newer condo towers and townhouses near the station, older low-rise condos and apartments, and single-family homes on the established streets and hills around the centre.")
        + kcSec("Who it suits", "Families who want parks, schools and community facilities nearby; commuters who like having both SkyTrain and commuter-rail options; buyers looking for newer housing stock in a suburban setting."))
      + kcCard("Surrey — Surrey City Centre",
        "Surrey's young, fast-growing downtown, anchored by two SkyTrain stations, a university campus and the main library.",
        "Read guide", "Close",
        kcSec("Character", "One of Metro Vancouver's newest downtowns. Office and residential towers are rising around Surrey Central and King George stations alongside the SFU Surrey campus, the City Centre library and Civic Plaza, while older low-rise buildings and houses still line many surrounding streets — a centre visibly in transition.")
        + kcSec("Getting around", "King George Station is the Expo Line's terminus, and Surrey Central Station pairs SkyTrain with one of the region's busiest bus exchanges, including rapid-bus service along King George Boulevard.")
        + kcSec("Homes", "High-rise condos near the stations, a growing number of townhouses, and older single-family homes in the surrounding Whalley streets.")
        + kcSec("Who it suits", "Students and staff at SFU Surrey; first-time buyers who want direct SkyTrain access; and people who work in Surrey's growing centre and want a short commute."))
      + kcCard("Vancouver — Downtown",
        "The region's densest core: condo towers, offices, stadiums and waterfront, all within walking distance.",
        "Read guide", "Close",
        kcSec("Character", "The downtown peninsula packs in the business district, Robson and Granville shopping, theatres and stadiums — and distinct residential pockets. The West End is leafy and older, with low- and mid-rise buildings near Stanley Park and English Bay; Yaletown mixes converted warehouses with towers along the seawall; Coal Harbour is quieter waterfront high-rises; Gastown is the heritage district.")
        + kcSec("Getting around", "Waterfront Station is the region's biggest hub — Expo and Canada Line SkyTrain, the SeaBus to North Vancouver and the West Coast Express — with several more SkyTrain stations across the peninsula and a dense bus network. Most of downtown is walkable, and the seawall paths are made for cycling.")
        + kcSec("Homes", "Overwhelmingly condos and apartments in mid- and high-rise towers, plus some townhouses; detached houses are rare on the peninsula.")
        + kcSec("Who it suits", "People who work downtown or want a walk-everywhere lifestyle, and downsizers trading house maintenance for amenities and views."))
      + kcCard("Richmond",
        "A flat, riverside city south of Vancouver on the Canada Line — widely known for its restaurants and food scene.",
        "Read guide", "Close",
        kcSec("Character", "Richmond occupies islands at the mouth of the Fraser River: flat, largely suburban, and famous across the region for its Asian restaurants, food courts and shopping. The city centre along No. 3 Road is the urban spine, while Steveston, in the southwest, keeps a fishing-village character with its docks and heritage buildings. Vancouver International Airport (YVR) sits on Sea Island, within Richmond.")
        + kcSec("Getting around", "The Canada Line runs from Richmond–Brighouse and Aberdeen stations to downtown Vancouver and the airport. Buses feed the stations from across the city, and the flat terrain makes cycling practical for local trips.")
        + kcSec("Homes", "Mainly single-family houses and townhouses, plus low-rise condos — with taller condo towers concentrated near the Canada Line stations in the city centre.")
        + kcSec("Who it suits", "Families who value flat, bikeable streets and local schools; frequent air travellers; and buyers who want suburban space with a direct SkyTrain link downtown."))
      + kcCard("Port Coquitlam",
        "A smaller, residential city where the West Coast Express meets the Coquitlam River trails.",
        "Read guide", "Close",
        kcSec("Character", "PoCo feels more small-town than its Tri-Cities neighbours: a compact downtown core along Shaughnessy Street with local shops and cafés, surrounded by established family neighbourhoods. The Coquitlam River and the Traboulay PoCo Trail — a loop trail around the city — give daily life an outdoors focus.")
        + kcSec("Getting around", "Port Coquitlam Station is on the West Coast Express, with weekday commuter trains to downtown Vancouver. Buses connect to Coquitlam Central Station and the SkyTrain network, and Highway 1 and the Mary Hill Bypass serve drivers.")
        + kcSec("Homes", "Mostly single-family houses and townhouse complexes, with some low-rise condos near the downtown core and newer development in the Dominion Triangle area in the city's northeast.")
        + kcSec("Who it suits", "Buyers looking for a quieter, family-focused community with green space at the door, who commute by West Coast Express or by car.")) +
      kcCard("North Vancouver — Lonsdale",
        "A North Shore centre around Lonsdale Quay and the SeaBus, with mountain views, a busy main street, and housing that climbs from the waterfront into the slopes.",
        "Read guide", "Close",
        kcSec("Character", "Lonsdale is the commercial and civic heart of North Vancouver, centred on Lonsdale Avenue and the waterfront around Lonsdale Quay. The wider city and district together have a population of about 151,500 across their postal areas, with a median household income of about $108,500. Grouse Mountain and the Capilano Suspension Bridge area sit to the north, and the harbour and downtown Vancouver skyline are visible from the shore.")
        + kcSec("Getting around", "The SeaBus runs from Lonsdale Quay across Burrard Inlet to downtown Vancouver. Buses connect Lonsdale with neighbourhoods across the North Shore, and drivers use the Upper Levels Highway, Highway 1, for routes east and west. Walking and cycling are practical for daily errands along Lonsdale Avenue itself.")
        + kcSec("Homes", "Lonsdale has condo towers and older low-rise apartments close to the avenue and the waterfront. Further up the slopes, housing is mainly single-family homes on hillside streets. There are 44 schools across North Vancouver's city and district in the open data.")
        + kcSec("Who it suits", "It suits people who want a walkable centre with a direct ferry link to downtown while living close to mountain trails. It also works for households who prefer apartment or condo living in a well-established area rather than a newer suburb.")) +
      kcCard("West Vancouver — Ambleside",
        "A quiet seaside village on West Vancouver's waterfront, known for its seawall, small shops, and predominantly single-family streets.",
        "Read guide", "Close",
        kcSec("Character", "Ambleside is one of West Vancouver's two village centres, alongside Dundarave, set between the waterfront and Marine Drive. West Vancouver has a population of about 45,000 and a median household income of about $106,500. The seawall, beach, and parkland along the shore give the area a calm, residential character.")
        + kcSec("Getting around", "Buses run along Marine Drive to downtown Vancouver and to other North Shore destinations, as there is no SkyTrain service in West Vancouver. Drivers use Marine Drive locally and Highway 1 for longer trips. The Horseshoe Bay ferry terminal, in the western part of the municipality, serves routes to Vancouver Island and the Sunshine Coast.")
        + kcSec("Homes", "Housing is mostly single-family houses on residential streets rising from the waterfront. Some waterfront apartments are located near Ambleside itself. West Vancouver has 18 schools in the open data.")
        + kcSec("Who it suits", "It suits people who value a quiet, established residential area with daily access to the seawall and beach. It also suits households who are comfortable relying on buses or driving rather than rapid transit.")) +
      kcCard("Langley — Willoughby",
        "One of Langley's newest growth areas, with recent townhouses and condos set between historic Fort Langley and the Fraser Highway corridor.",
        "Read guide", "Close",
        kcSec("Character", "Willoughby is a newer, master-planned growth area in the Township of Langley, built up largely with recent housing and local shops. Langley, city and township combined, has a population of about 162,000 and a median household income of about $101,500. Historic Fort Langley, on the Fraser River, offers a contrasting older village centre within the same municipality.")
        + kcSec("Getting around", "Drivers use Highway 1 and the Fraser Highway for travel across the Fraser Valley and toward Surrey and Vancouver. Local and regional buses serve Willoughby and connect it with surrounding centres. The Surrey–Langley SkyTrain extension is under construction and is not yet in service.")
        + kcSec("Homes", "Willoughby is known for newer townhouses and condos, alongside some newer single-family homes. Further out in Langley, the mix broadens to include more single-family homes and acreages. Langley has 42 schools in the open data.")
        + kcSec("Who it suits", "It suits households looking for newer housing in a planned community in the Fraser Valley. It also suits people who are comfortable with a car-based commute while the SkyTrain extension remains under construction.")) +
      kcCard("Abbotsford — Old Town & Clearbrook",
        "The Fraser Valley's largest city centre, combining a historic downtown and the Clearbrook area with airport access and Highway 1 connections.",
        "Read guide", "Close",
        kcSec("Character", "Abbotsford is a major Fraser Valley city, with a historic downtown often called Old Town and the established Clearbrook area to the west. The city has a population of about 153,900 and a median household income of about $92,500. Mill Lake, with its park and boardwalk, provides a central green space close to these neighbourhoods.")
        + kcSec("Getting around", "Highway 1 runs through Abbotsford, connecting it with Langley, Chilliwack, and the rest of the region. Abbotsford International Airport, known as YXX, serves the city with scheduled flights. Local buses provide service within the city and to neighbouring Fraser Valley communities.")
        + kcSec("Homes", "Housing across the city includes single-family homes, townhouses, and low-rise condos. Older homes are more common near the historic downtown, with newer subdivisions on the city's edges. Abbotsford has 50 schools in the open data, the highest count among the areas in this guide set.")
        + kcSec("Who it suits", "It suits people who want a full-service Fraser Valley city with its own airport and hospital services. It also suits households looking for a wider range of housing types outside Metro Vancouver's core.")) +
      kcCard("Delta — Ladner",
        "A historic fishing and farming village in Delta, with a small main street, riverfront setting, and mostly low-rise housing.",
        "Read guide", "Close",
        kcSec("Character", "Ladner is one of Delta's three communities, alongside Tsawwassen and North Delta, and retains a village character shaped by fishing and farming. Delta overall has a population of about 110,700 and a median household income of about $108,000. Boundary Bay and Centennial Beach, in the wider Delta area, are well-known shoreline destinations.")
        + kcSec("Getting around", "Drivers reach Vancouver and Richmond via Highway 99 and the George Massey Tunnel. Local buses serve Ladner and connect it with other parts of Delta and with regional transit hubs. Cycling is practical on the flat local streets and dyke routes.")
        + kcSec("Homes", "Housing in Ladner and across Delta is mostly single-family homes and townhouses. The village centre has smaller-scale buildings rather than high-rise development. Delta has 37 schools in the open data.")
        + kcSec("Who it suits", "It suits people who prefer a smaller village centre within reach of Vancouver and Richmond. It also suits households who value flat, quiet residential streets and access to the Boundary Bay shoreline.")) +
      kcCard("New Westminster — Downtown",
        "British Columbia's first capital, a compact riverfront city with two SkyTrain lines, a historic quay, and a mix of towers and heritage homes.",
        "Read guide", "Close",
        kcSec("Character", "New Westminster was British Columbia's first capital and remains a compact, historic city on the Fraser River. It has a population of about 78,900 and a median household income of about $82,000. Westminster Quay and the riverfront promenade anchor the downtown, while Queen's Park is known for its older, tree-lined streets.")
        + kcSec("Getting around", "Two SkyTrain lines serve the city, the Expo Line and the Millennium Line, with five stations in total. Buses connect downtown with the city's other neighbourhoods and surrounding municipalities. The central location makes road travel to Burnaby, Surrey, and Coquitlam straightforward.")
        + kcSec("Homes", "Downtown housing is dominated by high-rise condos near the riverfront and SkyTrain stations. In Queen's Park, the housing stock is mainly heritage houses on established streets. New Westminster has 18 schools in the open data.")
        + kcSec("Who it suits", "It suits people who want strong rapid-transit access without living in Vancouver or Burnaby. It also suits those who prefer a smaller, historic city centre with a mix of condo and older house options.")) +
      kcCard("Port Moody — Moody Centre",
        "A small city at the head of Burrard Inlet, where an older commercial centre meets Rocky Point Park and the inlet shoreline.",
        "Read guide", "Close",
        kcSec("Character", "Port Moody sits at the head of Burrard Inlet, surrounded by water and forested hills. Moody Centre is the city's older commercial area along St. Johns Street, close to Rocky Point Park on the inlet. The park's shoreline, pier, and trails are a focal point for the community.")
        + kcSec("Getting around", "The Evergreen extension of the Millennium Line SkyTrain serves Port Moody, and the West Coast Express commuter train also stops in the city. Buses connect Moody Centre with the rest of the Tri-Cities. Drivers use St. Johns Street and Barnet Highway toward Burnaby and Coquitlam.")
        + kcSec("Homes", "Condo towers are concentrated near Inlet Centre, while townhouses and single-family homes are found on Heritage Mountain and in older Moody Centre streets. Housing generally becomes lower-density further from the stations. Port Moody has 10 schools in the dataset.")
        + kcSec("Who it suits", "It suits people who want SkyTrain and commuter-rail access in a smaller, inlet-side community. It also suits households who value easy access to shoreline parks and forested trails.")) +
      kcCard("Maple Ridge — Haney",
        "A Fraser River community between the Golden Ears mountains and farmland, with a historic centre in Haney and a largely low-rise housing stock.",
        "Read guide", "Close",
        kcSec("Character", "Haney is the historic town centre of Maple Ridge, located along the Fraser River beneath the Golden Ears peaks. Maple Ridge has a population of about 91,000 and a median household income of about $107,000. Golden Ears Provincial Park, one of the province's large parks, lies just north of the city.")
        + kcSec("Getting around", "The West Coast Express commuter train links Maple Ridge with downtown Vancouver on weekdays. The Golden Ears Bridge crosses the Fraser River to Langley for drivers. Local buses serve Haney and the city's residential areas, and Highway 7 is the main east–west road route.")
        + kcSec("Homes", "Housing is mostly single-family homes and townhouses across the city. The rural east side, including Websters Corners and Whonnock, has acreages and larger lots. Maple Ridge has 29 schools in the open data.")
        + kcSec("Who it suits", "It suits households who want more space and a semi-rural setting while keeping a commuter-rail option to downtown. It also suits people who spend time outdoors and want Golden Ears Provincial Park close to home.")) +
      kcCard("Pitt Meadows — Town Centre",
        "Metro Vancouver's smallest city, a flat, river-dyked community of farms, trails, and low-rise homes between Maple Ridge and Coquitlam.",
        "Read guide", "Close",
        kcSec("Character", "Pitt Meadows is the smallest city in Metro Vancouver, with a population of about 19,400 and a median household income of about $103,000. Much of the city is farmland, including blueberry and cranberry fields, protected by dykes along the Pitt and Alouette rivers. Pitt Lake, to the north, is one of the largest tidal lakes in the world and a well-known local landmark.")
        + kcSec("Getting around", "The West Coast Express commuter train stops in Pitt Meadows on its route between Mission and downtown Vancouver. Dyke trails along the Pitt and Alouette rivers are widely used for walking and cycling. Drivers use the Lougheed Highway and the Pitt River Bridge toward Coquitlam and Maple Ridge.")
        + kcSec("Homes", "Housing is mainly townhouses and single-family homes concentrated in the urban town centre area. Outside that core, land use is largely agricultural with rural properties. Pitt Meadows has 5 schools in the open data.")
        + kcSec("Who it suits", "It suits people who prefer a small-city feel with farmland and river trails on their doorstep. It also suits commuters who can plan around the West Coast Express schedule for trips to downtown Vancouver.")) +
      kcCard("White Rock — Marine Drive",
        "A small seaside city on Semiahmoo Bay, centred on its pier and the Marine Drive promenade, with a long-standing retirement community.",
        "Read guide", "Close",
        kcSec("Character", "White Rock is a small seaside city on Semiahmoo Bay, known for its pier and the promenade along Marine Drive. Its postal area has a population of about 21,800 and a median household income of about $73,000. The waterfront, with its restaurants and beach, is the centre of local life, and the city has a long-standing retirement-oriented community.")
        + kcSec("Getting around", "Marine Drive is the main waterfront road, and King George Boulevard connects White Rock with South Surrey and Highway 99. Local buses serve the city and link it with surrounding Surrey neighbourhoods and transit hubs. Walking is practical along the flat promenade and pier area.")
        + kcSec("Homes", "Housing is mostly older single-family homes on the slope above the beach, together with low-rise condos near the waterfront. Larger towers are limited compared with neighbouring South Surrey. Many students from the area attend schools in nearby South Surrey, as only a small number of schools are located inside the city itself.")
        + kcSec("Who it suits", "It suits people who want to live directly by the sea in a small, walkable waterfront community. It also suits retirees and others who prefer a quieter pace outside the region's larger centres.")) +
      kcCard("Mission — Downtown",
        "A Fraser River city on the north bank of the river, with a historic downtown, hillside subdivisions, and the West Coast Express terminus.",
        "Read guide", "Close",
        kcSec("Character", "Mission sits on the north bank of the Fraser River, across from Abbotsford, with a historic downtown along the river flats. The city has a population of about 44,100 and a median household income of about $96,500. Westminster Abbey, set on a hill above the city, and the Stave Falls area to the northwest are widely recognised local landmarks.")
        + kcSec("Getting around", "Mission is the eastern terminus of the West Coast Express commuter train to downtown Vancouver. Drivers cross the Fraser River to Abbotsford by bridge and use Highway 7 and Highway 11 for regional travel. Local buses provide service within the city.")
        + kcSec("Homes", "Housing is mainly single-family homes, with newer subdivisions built on the hills above downtown, including in the Hatzic area. Older homes are concentrated closer to the historic centre and the river. Mission has 17 schools in the open data.")
        + kcSec("Who it suits", "It suits households looking for a smaller Fraser Valley city with a direct commuter-rail terminus. It also suits people who prefer hillside residential areas with views over the Fraser River and valley.")) +
      kcCard("Chilliwack — Garrison Crossing",
        "A planned neighbourhood on a redeveloped former military base in the eastern Fraser Valley, close to the Vedder River and mountain recreation.",
        "Read guide", "Close",
        kcSec("Character", "Garrison Crossing is a planned neighbourhood built on a redeveloped former military base in Chilliwack, in the eastern Fraser Valley. Chilliwack has a population of about 100,400 and a median household income of about $83,500. Cultus Lake and Chilliwack Lake lie to the south, and working farmland still surrounds much of the city.")
        + kcSec("Getting around", "Highway 1 connects Chilliwack with Abbotsford, Langley, and the rest of the Fraser Valley. Local buses serve Garrison Crossing and link it with downtown Chilliwack and other neighbourhoods. The neighbourhood itself was designed with walkable streets, parks, and a small commercial village.")
        + kcSec("Homes", "Garrison Crossing features a planned mix of single-family homes and townhouses in a newer, uniform streetscape. Across Chilliwack more broadly, housing also includes some condos and older homes near the downtown. Chilliwack has 35 schools in the open data.")
        + kcSec("Who it suits", "It suits households who want a newer, planned neighbourhood in a smaller Fraser Valley city. It also suits people who value close access to lakes, rivers, and mountain recreation on weekends.")),
    fa:
      kcCard("برنابی — متروتاون",
        "مرکز شهر مرتفع برنابی، ساخته‌شده پیرامون یک مرکز خرید بزرگ و یک قطب اسکای‌ترین.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "متروتاون مرکز شهر برنابی است: مجموعه‌ای متراکم از برج‌های مسکونی، دفاتر و فروشگاه‌ها پیرامون «متروپولیس در متروتاون»، یکی از بزرگ‌ترین مراکز خرید BC. خیابان‌های نزدیک ایستگاه حس‌وحال کاملاً شهری دارند، اما چند بلوک آن‌طرف‌تر به خیابان‌های مسکونی آرام‌تر و مسیرهای جنگلی پارک مرکزی (Central Park) در لبه‌ی غربی محله می‌رسند.")
        + kcSec("رفت‌وآمد", "ایستگاه متروتاون در خط Expo اسکای‌ترین، مسیر مستقیم به مرکز شهر ونکوور می‌دهد و همین ایستگاه یکی از پرترددترین پایانه‌های اتوبوس منطقه است. ایستگاه پترسون (Patterson، همان خط Expo) بخش غربی محله را پوشش می‌دهد. بسیاری از نیازهای روزمره — خرید روزانه، خدمات و مجتمع تفریحی بانسر (Bonsor) — برای ساکنان برج‌ها در فاصله‌ی پیاده است.")
        + kcSec("خانه‌ها", "بیشتر آپارتمان است — برج‌های بلند نزدیک مرکز و ساختمان‌های کم‌ارتفاع قدیمی‌تر در خیابان‌های اطراف — و تاون‌هاوس و خانه‌های مستقل در فاصله‌ی دورتر.")
        + kcSec("مناسب چه کسانی است", "کسانی که سبک زندگی کم‌وابسته به خودرو و متکی به حمل‌ونقل عمومی می‌خواهند؛ مسافران روزانه‌ی اسکای‌ترین؛ و کسانی که خانه‌شان را کوچک می‌کنند و می‌خواهند فروشگاه، خدمات و تفریح نزدیکشان باشد."))
      + kcCard("کوکیتلام — مرکز کوکیتلام",
        "مرکز شهری خانواده‌محور که در آن امتداد Evergreen اسکای‌ترین به قطار حومه‌ای West Coast Express می‌رسد.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "مرکز شهر برنامه‌ریزی‌شده‌ی کوکیتلام، ساخته‌شده پیرامون مرکز خرید Coquitlam Centre. دریاچه‌ی لافارژ و پارک Town Centre نقش «اتاق نشیمن سبز» این مرکز را دارند — مسیرهای پیاده‌روی، زمین‌های ورزشی و رویدادهای اجتماعی — پس با وجود برج‌های جدید، ریتم این مرکز حومه‌ای و خانوادگی مانده است.")
        + kcSec("رفت‌وآمد", "ایستگاه Coquitlam Central سه چیز را کنار هم دارد: خط Millennium (امتداد Evergreen)، قطار حومه‌ای West Coast Express به مرکز شهر ونکوور، و یک پایانه‌ی اتوبوس — یکی از معدود مراکز مترو ونکوور که هم اسکای‌ترین دارد و هم قطار حومه‌ای.")
        + kcSec("خانه‌ها", "برج‌های آپارتمانی و تاون‌هاوس‌های جدیدتر نزدیک ایستگاه، آپارتمان‌های کم‌ارتفاع قدیمی‌تر، و خانه‌های مستقل در خیابان‌ها و تپه‌های جاافتاده‌ی اطراف مرکز.")
        + kcSec("مناسب چه کسانی است", "خانواده‌هایی که پارک، مدرسه و امکانات اجتماعی نزدیک می‌خواهند؛ مسافران روزانه‌ای که هم گزینه‌ی اسکای‌ترین را دوست دارند هم قطار حومه‌ای؛ و خریدارانی که دنبال ساختمان‌های جدیدتر در محیطی حومه‌ای‌اند."))
      + kcCard("ساری — مرکز شهر ساری",
        "مرکز شهر جوان و به‌سرعت در حال رشد ساری، با دو ایستگاه اسکای‌ترین، یک پردیس دانشگاهی و کتابخانه‌ی اصلی شهر.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "یکی از تازه‌ترین مرکز شهرهای مترو ونکوور. برج‌های اداری و مسکونی پیرامون ایستگاه‌های Surrey Central و King George در کنار پردیس ساری دانشگاه SFU، کتابخانه‌ی مرکز شهر و میدان Civic Plaza در حال بالا رفتن‌اند، اما ساختمان‌های کم‌ارتفاع و خانه‌های قدیمی‌تر هنوز در بسیاری از خیابان‌های اطراف دیده می‌شوند — مرکزی که آشکارا در حال دگرگونی است.")
        + kcSec("رفت‌وآمد", "ایستگاه King George پایانه‌ی خط Expo است و ایستگاه Surrey Central اسکای‌ترین را با یکی از شلوغ‌ترین پایانه‌های اتوبوس منطقه کنار هم دارد، از جمله سرویس اتوبوس سریع در بلوار King George.")
        + kcSec("خانه‌ها", "آپارتمان‌های بلندمرتبه نزدیک ایستگاه‌ها، تعداد رو‌به‌رشدی تاون‌هاوس، و خانه‌های مستقل قدیمی‌تر در خیابان‌های اطراف در محله‌ی Whalley.")
        + kcSec("مناسب چه کسانی است", "دانشجویان و کارکنان SFU ساری؛ خریداران اولی که دسترسی مستقیم به اسکای‌ترین می‌خواهند؛ و کسانی که در مرکز رو‌به‌رشد ساری کار می‌کنند و رفت‌وآمد کوتاه می‌خواهند."))
      + kcCard("ونکوور — مرکز شهر",
        "متراکم‌ترین هسته‌ی منطقه: برج‌های مسکونی، دفاتر، ورزشگاه‌ها و ساحل، همه در فاصله‌ی پیاده.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "شبه‌جزیره‌ی مرکز شهر، منطقه‌ی تجاری، خرید در خیابان‌های Robson و Granville، تئاترها و ورزشگاه‌ها را در خود جا داده — و محله‌های مسکونی متمایزی دارد. West End سرسبز و قدیمی‌تر است، با ساختمان‌های کم‌ و میان‌ارتفاع نزدیک پارک Stanley و خلیج English Bay؛ Yaletown انبارهای تبدیل‌شده را با برج‌ها در امتداد دیوار ساحلی (seawall) ترکیب می‌کند؛ Coal Harbour برج‌های ساحلی آرام‌تری دارد؛ و Gastown منطقه‌ی تاریخی شهر است.")
        + kcSec("رفت‌وآمد", "ایستگاه Waterfront بزرگ‌ترین قطب منطقه است — خط‌های Expo و Canada اسکای‌ترین، SeaBus به ونکوور شمالی و West Coast Express — به‌علاوه‌ی چند ایستگاه دیگر اسکای‌ترین در سراسر شبه‌جزیره و شبکه‌ی متراکم اتوبوس. بیشتر مرکز شهر پیاده‌پیماست و مسیرهای ساحلی برای دوچرخه ساخته شده‌اند.")
        + kcSec("خانه‌ها", "تقریباً به‌طور کامل آپارتمان در برج‌های میان‌ و بلندمرتبه، به‌علاوه‌ی تعدادی تاون‌هاوس؛ خانه‌ی مستقل در شبه‌جزیره کمیاب است.")
        + kcSec("مناسب چه کسانی است", "کسانی که در مرکز شهر کار می‌کنند یا سبک زندگی «همه‌جا پیاده» می‌خواهند، و کسانی که خانه‌شان را کوچک می‌کنند و نگهداری خانه را با امکانات و چشم‌انداز عوض می‌کنند."))
      + kcCard("ریچموند",
        "شهری هموار و کنار رودخانه در جنوب ونکوور، روی خط Canada — مشهور به رستوران‌ها و صحنه‌ی غذایی‌اش.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "ریچموند روی جزیره‌هایی در دهانه‌ی رود فریزر قرار دارد: هموار، عمدتاً حومه‌ای، و در سراسر منطقه به رستوران‌های آسیایی، فودکورت‌ها و مراکز خریدش معروف است. مرکز شهر در امتداد جاده‌ی No. 3 ستون فقرات شهری آن است، در حالی که Steveston در جنوب‌غربی با اسکله‌ها و بناهای تاریخی‌اش، حال‌وهوای یک روستای ماهیگیری را نگه داشته است. فرودگاه بین‌المللی ونکوور (YVR) روی جزیره‌ی Sea در محدوده‌ی ریچموند قرار دارد.")
        + kcSec("رفت‌وآمد", "خط Canada از ایستگاه‌های Richmond–Brighouse و Aberdeen به مرکز شهر ونکوور و فرودگاه می‌رود. اتوبوس‌ها از سراسر شهر به ایستگاه‌ها می‌رسند و زمین هموار، دوچرخه را برای مسیرهای محلی کاربردی می‌کند.")
        + kcSec("خانه‌ها", "عمدتاً خانه‌های مستقل و تاون‌هاوس، به‌علاوه‌ی آپارتمان‌های کم‌ارتفاع — و برج‌های آپارتمانی بلندترِ متمرکز نزدیک ایستگاه‌های خط Canada در مرکز شهر.")
        + kcSec("مناسب چه کسانی است", "خانواده‌هایی که خیابان‌های هموار و دوچرخه‌پذیر و مدرسه‌های محلی برایشان مهم است؛ کسانی که زیاد با هواپیما سفر می‌کنند؛ و خریدارانی که فضای حومه‌ای می‌خواهند با یک اتصال مستقیم اسکای‌ترین به مرکز شهر."))
      + kcCard("پورت کوکیتلام",
        "شهری کوچک‌تر و مسکونی که در آن West Coast Express به مسیرهای کنار رود کوکیتلام می‌رسد.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "پورت کوکیتلام نسبت به همسایه‌هایش در Tri-Cities حس شهری کوچک‌تر دارد: یک مرکز شهر جمع‌وجور در امتداد خیابان Shaughnessy با فروشگاه‌ها و کافه‌های محلی، و دور تا دور آن محله‌های خانوادگی جاافتاده. رود کوکیتلام و مسیر حلقه‌ای Traboulay PoCo — مسیری که دور شهر می‌چرخد — به زندگی روزمره حال‌وهوای طبیعت‌محور می‌دهند.")
        + kcSec("رفت‌وآمد", "ایستگاه Port Coquitlam روی خط West Coast Express است و در روزهای کاری قطار حومه‌ای به مرکز شهر ونکوور دارد. اتوبوس‌ها به ایستگاه Coquitlam Central و شبکه‌ی اسکای‌ترین وصل می‌شوند و بزرگراه ۱ و کنارگذر Mary Hill هم برای رانندگان است.")
        + kcSec("خانه‌ها", "بیشتر خانه‌های مستقل و مجتمع‌های تاون‌هاوس، با تعدادی آپارتمان کم‌ارتفاع نزدیک مرکز شهر و ساخت‌وساز جدیدتر در منطقه‌ی Dominion Triangle در شمال‌شرق شهر.")
        + kcSec("مناسب چه کسانی است", "خریدارانی که جامعه‌ای آرام‌تر و خانواده‌محور با فضای سبز دمِ دست می‌خواهند و با West Coast Express یا خودرو رفت‌وآمد می‌کنند.")) +
      kcCard("ونکوور شمالی — Lonsdale",
        "یک مرکز در نورث شور در اطراف Lonsdale Quay و SeaBus، با چشم‌انداز کوهستان، خیابان اصلی پرجنب‌وجوش، و خانه‌هایی که از کنار آب تا دامنه‌ها بالا می‌روند.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "Lonsdale قلب تجاری و مدنی ونکوور شمالی است که در اطراف خیابان Lonsdale و ساحل پیرامون Lonsdale Quay شکل گرفته است. شهر و ناحیهٔ گسترده‌تر آن در مجموع در مناطق پستی خود جمعیتی حدود 151,500 نفر دارند و میانگین درآمد خانوار حدود $108,500 است. Grouse Mountain و محدودهٔ پل معلق Capilano در شمال قرار دارند و بندر و خط آسمان مرکز شهر ونکوور از ساحل دیده می‌شود.")
        + kcSec("رفت‌وآمد", "SeaBus از Lonsdale Quay از عرض Burrard Inlet تا مرکز شهر ونکوور حرکت می‌کند. اتوبوس‌ها Lonsdale را به محله‌های سراسر نورث شور وصل می‌کنند و رانندگان برای مسیرهای شرق و غرب از بزرگراه Upper Levels، یعنی Highway 1، استفاده می‌کنند. پیاده‌روی و دوچرخه‌سواری برای کارهای روزمره در خود خیابان Lonsdale عملی است.")
        + kcSec("خانه‌ها", "در Lonsdale برج‌های کاندو و آپارتمان‌های قدیمی کم‌ارتفاع نزدیک خیابان و ساحل قرار دارند. بالاتر در دامنه‌ها، مسکن عمدتاً خانه‌های تک‌خانواری در خیابان‌های شیب‌دار است. بر اساس داده‌های باز، در شهر و ناحیهٔ ونکوور شمالی 44 مدرسه وجود دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که مرکزی پیاده‌پذیر با پیوند مستقیم فری به مرکز شهر می‌خواهند و در عین حال نزدیک مسیرهای کوهستانی زندگی می‌کنند. همچنین برای خانوارهایی مناسب است که زندگی در آپارتمان یا کاندو در منطقه‌ای جاافتاده را به حومه‌ای جدیدتر ترجیح می‌دهند.")) +
      kcCard("ونکوور غربی — Ambleside",
        "روستایی آرام در کنار دریا در ساحل ونکوور غربی، شناخته‌شده برای دیوار ساحلی، مغازه‌های کوچک و خیابان‌های عمدتاً تک‌خانواری.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "Ambleside یکی از دو مرکز روستایی ونکوور غربی در کنار Dundarave است که میان ساحل و Marine Drive قرار گرفته است. ونکوور غربی جمعیتی حدود 45,000 نفر و میانگین درآمد خانوار حدود $106,500 دارد. دیوار ساحلی، ساحل و پارک‌های در امتداد ساحل به این منطقه حال‌وهوایی آرام و مسکونی می‌دهند.")
        + kcSec("رفت‌وآمد", "اتوبوس‌ها در امتداد Marine Drive به مرکز شهر ونکوور و دیگر مقصدهای نورث شور حرکت می‌کنند، زیرا در ونکوور غربی خدمات SkyTrain وجود ندارد. رانندگان در سطح محلی از Marine Drive و برای سفرهای طولانی‌تر از Highway 1 استفاده می‌کنند. پایانهٔ فری Horseshoe Bay، در بخش غربی شهرداری، به مسیرهایی به جزیرهٔ ونکوور و Sunshine Coast خدمات می‌دهد.")
        + kcSec("خانه‌ها", "مسکن عمدتاً خانه‌های تک‌خانواری در خیابان‌های مسکونی است که از ساحل بالا می‌روند. برخی آپارتمان‌های ساحلی نزدیک خود Ambleside قرار دارند. بر اساس داده‌های باز، ونکوور غربی 18 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که منطقه‌ای مسکونی، آرام و جاافتاده با دسترسی روزانه به دیوار ساحلی و ساحل را ارزشمند می‌دانند. همچنین برای خانوارهایی مناسب است که با اتکا به اتوبوس یا رانندگی، به‌جای حمل‌ونقل سریع، راحت هستند.")) +
      kcCard("لنگلی — Willoughby",
        "یکی از جدیدترین مناطق رشد لنگلی، با تاون‌هاوس‌ها و کاندوهای تازه در میان Fort Langley تاریخی و کریدور Fraser Highway.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "Willoughby منطقه‌ای جدیدتر و برنامه‌ریزی‌شده برای رشد در Township of Langley است که عمدتاً با مسکن تازه و مغازه‌های محلی ساخته شده است. لنگلی، شهر و تاون‌شیپ در مجموع، جمعیتی حدود 162,000 نفر و میانگین درآمد خانوار حدود $101,500 دارد. Fort Langley تاریخی، در کنار رود Fraser، مرکز روستایی قدیمی‌تری در تضاد با آن در همان شهرداری ارائه می‌دهد.")
        + kcSec("رفت‌وآمد", "رانندگان برای سفر در سراسر Fraser Valley و به‌سمت Surrey و ونکوور از Highway 1 و Fraser Highway استفاده می‌کنند. اتوبوس‌های محلی و منطقه‌ای به Willoughby خدمات می‌دهند و آن را به مراکز اطراف وصل می‌کنند. امتداد SkyTrain از Surrey تا Langley در حال ساخت است و هنوز به بهره‌برداری نرسیده است.")
        + kcSec("خانه‌ها", "Willoughby به تاون‌هاوس‌ها و کاندوهای جدیدتر شناخته می‌شود و در کنار آن برخی خانه‌های تک‌خانواری جدیدتر هم دارد. در نقاط دورتر لنگلی، ترکیب گسترده‌تر می‌شود و خانه‌های تک‌خانواری و زمین‌های بزرگ بیشتری را شامل می‌شود. بر اساس داده‌های باز، لنگلی 42 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای خانوارهایی مناسب است که به‌دنبال مسکن جدیدتر در جامعه‌ای برنامه‌ریزی‌شده در Fraser Valley هستند. همچنین برای کسانی مناسب است که تا زمانی که امتداد SkyTrain در حال ساخت است، با رفت‌وآمد خودرومحور راحت هستند.")) +
      kcCard("ابوتسفورد — Old Town & Clearbrook",
        "بزرگ‌ترین مرکز شهری Fraser Valley، که مرکز تاریخی شهر و منطقهٔ Clearbrook را با دسترسی به فرودگاه و اتصال‌های Highway 1 ترکیب می‌کند.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "ابوتسفورد شهری بزرگ در Fraser Valley است، با مرکز تاریخی که اغلب Old Town نامیده می‌شود و منطقهٔ جاافتادهٔ Clearbrook در غرب. این شهر جمعیتی حدود 153,900 نفر و میانگین درآمد خانوار حدود $92,500 دارد. Mill Lake، با پارک و مسیر چوبی خود، فضای سبزی مرکزی نزدیک این محله‌ها فراهم می‌کند.")
        + kcSec("رفت‌وآمد", "Highway 1 از ابوتسفورد می‌گذرد و آن را به لنگلی، چیلیوک و بقیهٔ منطقه وصل می‌کند. فرودگاه بین‌المللی ابوتسفورد، معروف به YXX، با پروازهای برنامه‌ریزی‌شده به شهر خدمات می‌دهد. اتوبوس‌های محلی در داخل شهر و به جوامع همسایه در Fraser Valley خدمات ارائه می‌کنند.")
        + kcSec("خانه‌ها", "مسکن در سراسر شهر شامل خانه‌های تک‌خانواری، تاون‌هاوس‌ها و کاندوهای کم‌ارتفاع است. خانه‌های قدیمی‌تر نزدیک مرکز تاریخی شهر رایج‌ترند و زیرمجموعه‌های جدیدتر در حاشیه‌های شهر قرار دارند. بر اساس داده‌های باز، ابوتسفورد 50 مدرسه دارد که بالاترین تعداد در میان مناطق این مجموعه راهنماست.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که شهری با خدمات کامل در Fraser Valley با فرودگاه و خدمات بیمارستانی خودش می‌خواهند. همچنین برای خانوارهایی مناسب است که به‌دنبال دامنهٔ گسترده‌تری از انواع مسکن در خارج از هستهٔ مرکزی Metro Vancouver هستند.")) +
      kcCard("دلتا — Ladner",
        "روستایی تاریخی برای ماهیگیری و کشاورزی در دلتا، با خیابان اصلی کوچک، محیط رودخانه‌ای و مسکن عمدتاً کم‌ارتفاع.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "Ladner یکی از سه جامعهٔ دلتا در کنار Tsawwassen و North Delta است و ویژگی روستایی خود را که با ماهیگیری و کشاورزی شکل گرفته حفظ کرده است. دلتا در مجموع جمعیتی حدود 110,700 نفر و میانگین درآمد خانوار حدود $108,000 دارد. Boundary Bay و Centennial Beach، در محدودهٔ گسترده‌تر دلتا، مقصدهای ساحلی شناخته‌شده‌ای هستند.")
        + kcSec("رفت‌وآمد", "رانندگان از طریق Highway 99 و تونل George Massey به ونکوور و Richmond می‌رسند. اتوبوس‌های محلی به Ladner خدمات می‌دهند و آن را به دیگر بخش‌های دلتا و مراکز حمل‌ونقل منطقه‌ای وصل می‌کنند. دوچرخه‌سواری در خیابان‌های محلی هموار و مسیرهای روی دایک عملی است.")
        + kcSec("خانه‌ها", "مسکن در Ladner و در سراسر دلتا عمدتاً خانه‌های تک‌خانواری و تاون‌هاوس‌هاست. مرکز روستا ساختمان‌هایی در مقیاس کوچک‌تر دارد، نه توسعهٔ برج‌های بلند. بر اساس داده‌های باز، دلتا 37 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که مرکز روستایی کوچک‌تری را در دسترس ونکوور و Richmond ترجیح می‌دهند. همچنین برای خانوارهایی مناسب است که خیابان‌های مسکونی هموار و آرام و دسترسی به ساحل Boundary Bay را ارزشمند می‌دانند.")) +
      kcCard("نیو وست‌مینستر — Downtown",
        "نخستین پایتخت بریتیش کلمبیا، شهری فشرده در کنار رودخانه با دو خط SkyTrain، اسکله‌ای تاریخی و ترکیبی از برج‌ها و خانه‌های میراثی.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "نیو وست‌مینستر نخستین پایتخت بریتیش کلمبیا بود و همچنان شهری فشرده و تاریخی در کنار رود Fraser است. جمعیتی حدود 78,900 نفر و میانگین درآمد خانوار حدود $82,000 دارد. Westminster Quay و گردشگاه کنار رودخانه مرکز شهر را شکل می‌دهند، در حالی که Queen's Park به خیابان‌های قدیمی و پردرخت خود شناخته می‌شود.")
        + kcSec("رفت‌وآمد", "دو خط SkyTrain به شهر خدمات می‌دهند، خط Expo و خط Millennium، با مجموع پنج ایستگاه. اتوبوس‌ها مرکز شهر را به دیگر محله‌های شهر و شهرداری‌های اطراف وصل می‌کنند. موقعیت مرکزی، سفر جاده‌ای به Burnaby، Surrey و Coquitlam را ساده می‌کند.")
        + kcSec("خانه‌ها", "مسکن مرکز شهر عمدتاً کاندوهای بلندمرتبه نزدیک ساحل رودخانه و ایستگاه‌های SkyTrain است. در Queen's Park، موجودی مسکن عمدتاً خانه‌های میراثی در خیابان‌های جاافتاده است. بر اساس داده‌های باز، نیو وست‌مینستر 18 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که دسترسی قوی به حمل‌ونقل سریع می‌خواهند بدون اینکه در ونکوور یا Burnaby زندگی کنند. همچنین برای کسانی مناسب است که مرکز شهری کوچک‌تر و تاریخی با ترکیبی از گزینه‌های کاندو و خانه‌های قدیمی‌تر را ترجیح می‌دهند.")) +
      kcCard("پورت مودی — Moody Centre",
        "شهری کوچک در ابتدای Burrard Inlet، جایی که مرکز تجاری قدیمی‌تر با Rocky Point Park و ساحل اینلت روبه‌رو می‌شود.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "پورت مودی در ابتدای Burrard Inlet قرار دارد و آب و تپه‌های جنگلی آن را احاطه کرده‌اند. Moody Centre منطقهٔ تجاری قدیمی‌تر شهر در امتداد خیابان St. Johns است، نزدیک Rocky Point Park در کنار اینلت. ساحل، اسکله و مسیرهای پارک نقطهٔ کانونی جامعه هستند.")
        + kcSec("رفت‌وآمد", "امتداد Evergreen از خط Millennium در SkyTrain به پورت مودی خدمات می‌دهد و قطار شهری West Coast Express نیز در شهر توقف می‌کند. اتوبوس‌ها Moody Centre را به بقیهٔ Tri-Cities وصل می‌کنند. رانندگان از خیابان St. Johns و بزرگراه Barnet به‌سمت Burnaby و Coquitlam استفاده می‌کنند.")
        + kcSec("خانه‌ها", "برج‌های کاندو نزدیک Inlet Centre متمرکز شده‌اند، در حالی که تاون‌هاوس‌ها و خانه‌های تک‌خانواری در Heritage Mountain و خیابان‌های قدیمی‌تر Moody Centre یافت می‌شوند. مسکن عموماً هرچه از ایستگاه‌ها دورتر می‌شود کم‌تراکم‌تر می‌شود. بر اساس مجموعه داده، پورت مودی 10 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که دسترسی به SkyTrain و قطار شهری را در جامعه‌ای کوچک‌تر در کنار اینلت می‌خواهند. همچنین برای خانوارهایی مناسب است که دسترسی آسان به پارک‌های ساحلی و مسیرهای جنگلی را ارزشمند می‌دانند.")) +
      kcCard("میپل ریج — Haney",
        "جامعه‌ای در کنار رود Fraser میان کوه‌های Golden Ears و زمین‌های کشاورزی، با مرکزی تاریخی در Haney و موجودی مسکن عمدتاً کم‌ارتفاع.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "Haney مرکز تاریخی شهر میپل ریج است که در امتداد رود Fraser و در زیر قله‌های Golden Ears قرار دارد. میپل ریج جمعیتی حدود 91,000 نفر و میانگین درآمد خانوار حدود $107,000 دارد. پارک استانی Golden Ears، یکی از پارک‌های بزرگ استان، درست در شمال شهر قرار دارد.")
        + kcSec("رفت‌وآمد", "قطار شهری West Coast Express میپل ریج را در روزهای کاری به مرکز شهر ونکوور وصل می‌کند. پل Golden Ears برای رانندگان از رود Fraser به لنگلی عبور می‌کند. اتوبوس‌های محلی به Haney و مناطق مسکونی شهر خدمات می‌دهند و Highway 7 مسیر اصلی جاده‌ای شرق–غرب است.")
        + kcSec("خانه‌ها", "مسکن عمدتاً خانه‌های تک‌خانواری و تاون‌هاوس‌ها در سراسر شهر است. سمت روستایی شرق، از جمله Websters Corners و Whonnock، زمین‌های بزرگ و قطعات وسیع‌تری دارد. بر اساس داده‌های باز، میپل ریج 29 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای خانوارهایی مناسب است که فضای بیشتر و محیطی نیمه‌روستایی می‌خواهند و در عین حال گزینهٔ قطار شهری به مرکز شهر را حفظ می‌کنند. همچنین برای کسانی مناسب است که وقت خود را در فضای باز می‌گذرانند و می‌خواهند پارک استانی Golden Ears نزدیک خانه باشد.")) +
      kcCard("پیت مدوز — Town Centre",
        "کوچک‌ترین شهر Metro Vancouver، جامعه‌ای هموار و محصور با دایک‌های رودخانه‌ای از مزارع، مسیرها و خانه‌های کم‌ارتفاع میان میپل ریج و Coquitlam.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "پیت مدوز کوچک‌ترین شهر Metro Vancouver است، با جمعیتی حدود 19,400 نفر و میانگین درآمد خانوار حدود $103,000. بخش زیادی از شهر زمین کشاورزی است، از جمله مزارع بلوبری و کرنبری، که با دایک‌هایی در امتداد رودهای Pitt و Alouette محافظت می‌شود. دریاچه Pitt، در شمال، یکی از بزرگ‌ترین دریاچه‌های جزر و مدی جهان و نشانه‌ای شناخته‌شده در محل است.")
        + kcSec("رفت‌وآمد", "قطار شهری West Coast Express در مسیر خود میان Mission و مرکز شهر ونکوور در پیت مدوز توقف می‌کند. مسیرهای روی دایک در امتداد رودهای Pitt و Alouette به‌طور گسترده برای پیاده‌روی و دوچرخه‌سواری استفاده می‌شوند. رانندگان از بزرگراه Lougheed و پل رود Pitt به‌سمت Coquitlam و میپل ریج استفاده می‌کنند.")
        + kcSec("خانه‌ها", "مسکن عمدتاً تاون‌هاوس‌ها و خانه‌های تک‌خانواری متمرکز در محدودهٔ مرکز شهری است. خارج از آن هسته، کاربری زمین عمدتاً کشاورزی با املاک روستایی است. بر اساس داده‌های باز، پیت مدوز 5 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که حس شهری کوچک با زمین‌های کشاورزی و مسیرهای رودخانه‌ای در آستانهٔ خانه را ترجیح می‌دهند. همچنین برای رفت‌وآمدکنندگانی مناسب است که می‌توانند برای سفر به مرکز شهر ونکوور بر اساس برنامهٔ West Coast Express برنامه‌ریزی کنند.")) +
      kcCard("وایت راک — Marine Drive",
        "شهری کوچک در کنار دریا در خلیج Semiahmoo، متمرکز بر اسکله و گردشگاه Marine Drive، با جامعه‌ای دیرینهٔ بازنشستگی.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "وایت راک شهری کوچک در کنار دریا در خلیج Semiahmoo است که به اسکله و گردشگاه در امتداد Marine Drive شناخته می‌شود. منطقهٔ پستی آن جمعیتی حدود 21,800 نفر و میانگین درآمد خانوار حدود $73,000 دارد. ساحل، با رستوران‌ها و ساحل شنی خود، مرکز زندگی محلی است و شهر جامعه‌ای دیرینه و متمایل به بازنشستگان دارد.")
        + kcSec("رفت‌وآمد", "Marine Drive جادهٔ اصلی ساحلی است و بلوار King George وایت راک را به South Surrey و Highway 99 وصل می‌کند. اتوبوس‌های محلی به شهر خدمات می‌دهند و آن را به محله‌های اطراف Surrey و مراکز حمل‌ونقل وصل می‌کنند. پیاده‌روی در امتداد گردشگاه هموار و محدودهٔ اسکله عملی است.")
        + kcSec("خانه‌ها", "مسکن عمدتاً خانه‌های تک‌خانواری قدیمی‌تر روی شیب بالای ساحل است، همراه با کاندوهای کم‌ارتفاع نزدیک ساحل. برج‌های بزرگ‌تر در مقایسه با South Surrey همسایه محدود هستند. بسیاری از دانش‌آموزان منطقه در مدارس نزدیک South Surrey تحصیل می‌کنند، زیرا تنها تعداد کمی مدرسه در داخل خود شهر قرار دارد.")
        + kcSec("مناسب چه کسانی است", "برای کسانی مناسب است که می‌خواهند مستقیماً کنار دریا در جامعه‌ای ساحلی، کوچک و پیاده‌پذیر زندگی کنند. همچنین برای بازنشستگان و دیگرانی مناسب است که ریتمی آرام‌تر در خارج از مراکز بزرگ‌تر منطقه را ترجیح می‌دهند.")) +
      kcCard("میشن — Downtown",
        "شهری در کنار رود Fraser در ساحل شمالی رودخانه، با مرکز تاریخی، زیرمجموعه‌های دامنه‌ای و پایانهٔ West Coast Express.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "میشن در ساحل شمالی رود Fraser، روبه‌روی ابوتسفورد، قرار دارد و مرکز تاریخی آن در امتداد دشت‌های رودخانه‌ای است. شهر جمعیتی حدود 44,100 نفر و میانگین درآمد خانوار حدود $96,500 دارد. صومعهٔ Westminster، قرارگرفته بر تپه‌ای بالای شهر، و منطقهٔ Stave Falls در شمال‌غرب نشانه‌های محلی شناخته‌شده‌ای هستند.")
        + kcSec("رفت‌وآمد", "میشن پایانهٔ شرقی قطار شهری West Coast Express به مرکز شهر ونکوور است. رانندگان با پل از رود Fraser به ابوتسفورد عبور می‌کنند و برای سفر منطقه‌ای از Highway 7 و Highway 11 استفاده می‌کنند. اتوبوس‌های محلی در داخل شهر خدمات ارائه می‌کنند.")
        + kcSec("خانه‌ها", "مسکن عمدتاً خانه‌های تک‌خانواری است، با زیرمجموعه‌های جدیدتر ساخته‌شده روی تپه‌های بالای مرکز شهر، از جمله در منطقهٔ Hatzic. خانه‌های قدیمی‌تر نزدیک‌تر به مرکز تاریخی و رودخانه متمرکز هستند. بر اساس داده‌های باز، میشن 17 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای خانوارهایی مناسب است که به‌دنبال شهری کوچک‌تر در Fraser Valley با پایانهٔ مستقیم قطار شهری هستند. همچنین برای کسانی مناسب است که مناطق مسکونی دامنه‌ای با چشم‌انداز رود Fraser و دره را ترجیح می‌دهند.")) +
      kcCard("چیلیوک — Garrison Crossing",
        "محله‌ای برنامه‌ریزی‌شده روی پایگاه نظامی سابق بازتوسعه‌یافته در شرق Fraser Valley، نزدیک رود Vedder و تفریحات کوهستانی.",
        "خواندن راهنما", "بستن",
        kcSec("حال‌وهوا", "Garrison Crossing محله‌ای برنامه‌ریزی‌شده است که روی پایگاه نظامی سابق بازتوسعه‌یافته در چیلیوک، در شرق Fraser Valley، ساخته شده است. چیلیوک جمعیتی حدود 100,400 نفر و میانگین درآمد خانوار حدود $83,500 دارد. دریاچه Cultus و دریاچه Chilliwack در جنوب قرار دارند و زمین‌های کشاورزی فعال هنوز بخش زیادی از اطراف شهر را احاطه کرده‌اند.")
        + kcSec("رفت‌وآمد", "Highway 1 چیلیوک را به ابوتسفورد، لنگلی و بقیهٔ Fraser Valley وصل می‌کند. اتوبوس‌های محلی به Garrison Crossing خدمات می‌دهند و آن را به مرکز چیلیوک و دیگر محله‌ها وصل می‌کنند. خود محله با خیابان‌های پیاده‌پذیر، پارک‌ها و روستای تجاری کوچکی طراحی شده است.")
        + kcSec("خانه‌ها", "Garrison Crossing ترکیبی برنامه‌ریزی‌شده از خانه‌های تک‌خانواری و تاون‌هاوس‌ها در چشم‌اندازی خیابانی جدیدتر و یکدست دارد. در چیلیوک به‌طور گسترده‌تر، مسکن همچنین شامل برخی کاندوها و خانه‌های قدیمی‌تر نزدیک مرکز شهر است. بر اساس داده‌های باز، چیلیوک 35 مدرسه دارد.")
        + kcSec("مناسب چه کسانی است", "برای خانوارهایی مناسب است که محله‌ای جدیدتر و برنامه‌ریزی‌شده در شهری کوچک‌تر در Fraser Valley می‌خواهند. همچنین برای کسانی مناسب است که دسترسی نزدیک به دریاچه‌ها، رودخانه‌ها و تفریحات کوهستانی در آخر هفته‌ها را ارزشمند می‌دانند.")),
    hi:
      kcCard("बर्नाबी — मेट्रोटाउन",
        "बर्नाबी का ऊँचा डाउनटाउन, एक बड़े शॉपिंग सेंटर और स्काईट्रेन हब के आसपास बसा।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "मेट्रोटाउन बर्नाबी का सिटी सेंटर है: मेट्रोपोलिस एट मेट्रोटाउन — BC के सबसे बड़े शॉपिंग सेंटरों में से एक — के आसपास कॉन्डो टावरों, दफ़्तरों और दुकानों का घना समूह। स्टेशन के पास की सड़कें पूरी तरह शहरी लगती हैं, जबकि कुछ ब्लॉक आगे वे शांत आवासीय सड़कों और इलाके के पश्चिमी किनारे पर सेंट्रल पार्क के जंगली रास्तों में बदल जाती हैं।")
        + kcSec("आवागमन", "स्काईट्रेन एक्सपो लाइन पर मेट्रोटाउन स्टेशन डाउनटाउन वैंकूवर तक सीधी सवारी देता है, और यह स्टेशन क्षेत्र के सबसे व्यस्त बस एक्सचेंजों में से एक भी है। पैटरसन स्टेशन (वही एक्सपो लाइन) इलाके के पश्चिमी हिस्से को सेवा देता है। रोज़मर्रा की कई ज़रूरतें — किराना, सेवाएँ और बोनसोर मनोरंजन परिसर — टावरों से पैदल दूरी पर हैं।")
        + kcSec("घर", "ज़्यादातर कॉन्डो — केंद्र के पास ऊँचे टावर और आसपास की सड़कों पर पुरानी कम-ऊँची अपार्टमेंट इमारतें — और दूर की ओर टाउनहाउस व अलग मकान।")
        + kcSec("किसके लिए उपयुक्त", "उन लोगों के लिए जो कार-हल्का, ट्रांज़िट-प्रथम जीवन चाहते हैं; स्काईट्रेन से रोज़ आने-जाने वालों के लिए; और छोटा घर लेने वालों के लिए जो दुकानें, सेवाएँ और मनोरंजन पास चाहते हैं।"))
      + kcCard("कोक्विटलम — कोक्विटलम सेंटर",
        "एक परिवार-उन्मुख सिटी सेंटर, जहाँ स्काईट्रेन का एवरग्रीन विस्तार वेस्ट कोस्ट एक्सप्रेस से मिलता है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "कोक्विटलम का नियोजित डाउनटाउन, कोक्विटलम सेंटर मॉल के आसपास बसा है। लाफ़ार्ज झील और टाउन सेंटर पार्क इसके हरे-भरे बैठकखाने जैसे हैं — पैदल रास्ते, खेल के मैदान और सामुदायिक कार्यक्रम — इसलिए नए टावर उठने के बावजूद केंद्र का माहौल उपनगरीय और पारिवारिक बना रहता है।")
        + kcSec("आवागमन", "कोक्विटलम सेंट्रल स्टेशन तीनों को जोड़ता है: मिलेनियम लाइन (एवरग्रीन विस्तार), डाउनटाउन वैंकूवर के लिए वेस्ट कोस्ट एक्सप्रेस कम्यूटर ट्रेन, और एक बस एक्सचेंज — मेट्रो वैंकूवर के उन गिने-चुने केंद्रों में से एक जहाँ स्काईट्रेन और कम्यूटर रेल दोनों हैं।")
        + kcSec("घर", "स्टेशन के पास नए कॉन्डो टावर और टाउनहाउस, पुराने कम-ऊँचे कॉन्डो व अपार्टमेंट, और केंद्र के आसपास की स्थापित सड़कों व पहाड़ियों पर अलग मकान।")
        + kcSec("किसके लिए उपयुक्त", "वे परिवार जो पार्क, स्कूल और सामुदायिक सुविधाएँ पास चाहते हैं; वे यात्री जिन्हें स्काईट्रेन और कम्यूटर-रेल दोनों विकल्प पसंद हैं; और वे खरीदार जो उपनगरीय माहौल में नई आवासीय इमारतें चाहते हैं।"))
      + kcCard("सरी — सरी सिटी सेंटर",
        "सरी का युवा, तेज़ी से बढ़ता डाउनटाउन — दो स्काईट्रेन स्टेशन, एक विश्वविद्यालय परिसर और शहर की मुख्य लाइब्रेरी इसके आधार हैं।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "मेट्रो वैंकूवर के सबसे नए डाउनटाउनों में से एक। सरी सेंट्रल और किंग जॉर्ज स्टेशनों के आसपास दफ़्तर और आवासीय टावर उठ रहे हैं, SFU सरी परिसर, सिटी सेंटर लाइब्रेरी और सिविक प्लाज़ा के साथ; जबकि पुरानी कम-ऊँची इमारतें और मकान अब भी कई आसपास की सड़कों पर हैं — एक केंद्र जो साफ़ तौर पर बदल रहा है।")
        + kcSec("आवागमन", "किंग जॉर्ज स्टेशन एक्सपो लाइन का अंतिम स्टेशन है, और सरी सेंट्रल स्टेशन स्काईट्रेन को क्षेत्र के सबसे व्यस्त बस एक्सचेंजों में से एक के साथ जोड़ता है, जिसमें किंग जॉर्ज बुलेवार्ड पर रैपिड-बस सेवा भी है।")
        + kcSec("घर", "स्टेशनों के पास ऊँचे कॉन्डो, बढ़ती संख्या में टाउनहाउस, और आसपास की वॉली सड़कों पर पुराने अलग मकान।")
        + kcSec("किसके लिए उपयुक्त", "SFU सरी के छात्र व कर्मचारी; पहली बार खरीदार जो सीधी स्काईट्रेन पहुँच चाहते हैं; और वे लोग जो सरी के बढ़ते केंद्र में काम करते हैं और छोटी यात्रा चाहते हैं।"))
      + kcCard("वैंकूवर — डाउनटाउन",
        "क्षेत्र का सबसे घना केंद्र: कॉन्डो टावर, दफ़्तर, स्टेडियम और तट — सब पैदल दूरी पर।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "डाउनटाउन प्रायद्वीप में व्यापारिक ज़िला, रॉबसन और ग्रानविल की शॉपिंग, थिएटर और स्टेडियम समाए हैं — और अलग-अलग आवासीय हिस्से भी। वेस्ट एंड हरा-भरा और पुराना है, स्टैनली पार्क और इंग्लिश बे के पास कम- व मध्यम-ऊँची इमारतों के साथ; येलटाउन सीवॉल के किनारे बदले हुए गोदामों और टावरों का मिश्रण है; कोल हार्बर शांत तटीय ऊँची इमारतों वाला है; और गैसटाउन शहर का विरासत ज़िला है।")
        + kcSec("आवागमन", "वाटरफ़्रंट स्टेशन क्षेत्र का सबसे बड़ा हब है — एक्सपो और कनाडा लाइन स्काईट्रेन, उत्तरी वैंकूवर के लिए सीबस और वेस्ट कोस्ट एक्सप्रेस — साथ ही प्रायद्वीप भर में कई और स्काईट्रेन स्टेशन और घना बस नेटवर्क। डाउनटाउन का अधिकांश हिस्सा पैदल चलने योग्य है, और तटीय रास्ते साइकिल के लिए बने हैं।")
        + kcSec("घर", "लगभग पूरी तरह मध्यम- व ऊँची इमारतों में कॉन्डो और अपार्टमेंट, साथ में कुछ टाउनहाउस; प्रायद्वीप पर अलग मकान दुर्लभ हैं।")
        + kcSec("किसके लिए उपयुक्त", "वे लोग जो डाउनटाउन में काम करते हैं या 'हर जगह पैदल' वाली जीवनशैली चाहते हैं, और छोटा घर लेने वाले जो रखरखाव की जगह सुविधाओं और दृश्यों को चुनते हैं।"))
      + kcCard("रिचमंड",
        "कनाडा लाइन पर वैंकूवर के दक्षिण में एक समतल, नदी-किनारे का शहर — अपने रेस्तराँ और भोजन के लिए व्यापक रूप से जाना जाता है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "रिचमंड फ्रेज़र नदी के मुहाने पर द्वीपों पर बसा है: समतल, बड़े पैमाने पर उपनगरीय, और पूरे क्षेत्र में अपने एशियाई रेस्तराँ, फ़ूड कोर्ट और शॉपिंग के लिए प्रसिद्ध। नंबर 3 रोड के किनारे का सिटी सेंटर इसका शहरी आधार है, जबकि दक्षिण-पश्चिम में स्टीवस्टन अपने बंदरगाहों और विरासत इमारतों के साथ मछली पकड़ने वाले गाँव का चरित्र बनाए रखता है। वैंकूवर अंतरराष्ट्रीय हवाई अड्डा (YVR) सी आइलैंड पर, रिचमंड के भीतर है।")
        + kcSec("आवागमन", "कनाडा लाइन रिचमंड–ब्रिघाउस और एबरडीन स्टेशनों से डाउनटाउन वैंकूवर और हवाई अड्डे तक जाती है। बसें पूरे शहर से स्टेशनों तक जाती हैं, और समतल भूमि स्थानीय यात्राओं के लिए साइकिल को व्यावहारिक बनाती है।")
        + kcSec("घर", "मुख्यतः अलग मकान और टाउनहाउस, साथ में कम-ऊँचे कॉन्डो — और सिटी सेंटर में कनाडा लाइन स्टेशनों के पास केंद्रित ऊँचे कॉन्डो टावर।")
        + kcSec("किसके लिए उपयुक्त", "वे परिवार जो समतल, साइकिल-योग्य सड़कों और स्थानीय स्कूलों को महत्व देते हैं; बार-बार हवाई यात्रा करने वाले; और वे खरीदार जो उपनगरीय जगह के साथ डाउनटाउन तक सीधा स्काईट्रेन संपर्क चाहते हैं।"))
      + kcCard("पोर्ट कोक्विटलम",
        "एक छोटा, आवासीय शहर जहाँ वेस्ट कोस्ट एक्सप्रेस कोक्विटलम नदी के रास्तों से मिलती है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "पोर्ट कोक्विटलम अपने ट्राई-सिटी पड़ोसियों की तुलना में छोटे शहर जैसा लगता है: शॉनेसी स्ट्रीट के किनारे स्थानीय दुकानों और कैफ़े वाला सघन डाउनटाउन, और चारों ओर स्थापित पारिवारिक इलाके। कोक्विटलम नदी और ट्राबुले पोको ट्रेल — शहर के चारों ओर घूमने वाला रास्ता — रोज़मर्रा की ज़िंदगी को बाहर-प्रकृति का केंद्र देते हैं।")
        + kcSec("आवागमन", "पोर्ट कोक्विटलम स्टेशन वेस्ट कोस्ट एक्सप्रेस पर है, जहाँ से सप्ताह के कार्यदिवसों में डाउनटाउन वैंकूवर के लिए कम्यूटर ट्रेनें चलती हैं। बसें कोक्विटलम सेंट्रल स्टेशन और स्काईट्रेन नेटवर्क से जुड़ती हैं, और हाईवे 1 व मैरी हिल बाईपास ड्राइवरों के लिए हैं।")
        + kcSec("घर", "ज़्यादातर अलग मकान और टाउनहाउस परिसर, डाउनटाउन के पास कुछ कम-ऊँचे कॉन्डो, और शहर के उत्तर-पूर्व में डोमिनियन ट्रायंगल क्षेत्र में नया विकास।")
        + kcSec("किसके लिए उपयुक्त", "वे खरीदार जो दरवाज़े पर हरियाली के साथ शांत, परिवार-केंद्रित समुदाय चाहते हैं, और वेस्ट कोस्ट एक्सप्रेस या कार से आते-जाते हैं।")) +
      kcCard("नॉर्थ वैंकूवर — Lonsdale",
        "Lonsdale Quay और SeaBus के इर्द-गिर्द केंद्रित नॉर्थ शोर का एक केंद्र, जहाँ पहाड़ों के दृश्य, एक व्यस्त मुख्य सड़क और तट से ढलानों तक ऊपर चढ़ते घर हैं।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Lonsdale, North Vancouver का वाणिज्यिक और नागरिक केंद्र है, जो Lonsdale Avenue और Lonsdale Quay के आसपास के तट पर केंद्रित है। व्यापक शहर और ज़िले के डाक क्षेत्रों में मिलाकर आबादी लगभग 151,500 है, और औसत घरेलू आय लगभग $108,500 है। Grouse Mountain और Capilano Suspension Bridge का क्षेत्र उत्तर में स्थित है, और तट से बंदरगाह और डाउनटाउन Vancouver का स्काईलाइन दिखाई देता है।")
        + kcSec("आवागमन", "SeaBus Lonsdale Quay से Burrard Inlet पार करके डाउनटाउन Vancouver तक चलती है। बसें Lonsdale को नॉर्थ शोर के विभिन्न इलाक़ों से जोड़ती हैं, और ड्राइवर पूर्व और पश्चिम की यात्राओं के लिए Upper Levels Highway, Highway 1 का उपयोग करते हैं। Lonsdale Avenue पर ही रोज़मर्रा के कामों के लिए पैदल चलना और साइकिल चलाना व्यावहारिक है।")
        + kcSec("घर", "Lonsdale में एवेन्यू और तट के पास कॉन्डो टावर और पुरानी कम-मंज़िला अपार्टमेंट इमारतें हैं। ढलानों पर ऊपर की ओर, आवास मुख्यतः पहाड़ी सड़कों पर स्थित एकल-परिवार घर हैं। खुले डेटा के अनुसार North Vancouver के शहर और ज़िले में कुल 44 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो पहाड़ी ट्रेल्स के पास रहते हुए डाउनटाउन तक सीधे फ़ेरी संपर्क वाला पैदल-चलने योग्य केंद्र चाहते हैं। यह उन परिवारों के लिए भी उपयुक्त है जो किसी नए उपनगर के बजाय एक सुस्थापित क्षेत्र में अपार्टमेंट या कॉन्डो में रहना पसंद करते हैं।")) +
      kcCard("वेस्ट वैंकूवर — Ambleside",
        "West Vancouver के तट पर स्थित एक शांत समुद्र-किनारे का गाँव, जो अपने सीवॉल, छोटी दुकानों और मुख्यतः एकल-परिवार सड़कों के लिए जाना जाता है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Ambleside, Dundarave के साथ-साथ West Vancouver के दो गाँव केंद्रों में से एक है, जो तट और Marine Drive के बीच स्थित है। West Vancouver की आबादी लगभग 45,000 है और औसत घरेलू आय लगभग $106,500 है। तट के साथ सीवॉल, समुद्र तट और पार्कलैंड इस क्षेत्र को शांत, आवासीय स्वरूप देते हैं।")
        + kcSec("आवागमन", "Marine Drive पर बसें डाउनटाउन Vancouver और नॉर्थ शोर के अन्य गंतव्यों तक चलती हैं, क्योंकि West Vancouver में कोई SkyTrain सेवा नहीं है। ड्राइवर स्थानीय यात्रा के लिए Marine Drive और लंबी यात्राओं के लिए Highway 1 का उपयोग करते हैं। Horseshoe Bay फ़ेरी टर्मिनल, नगरपालिका के पश्चिमी भाग में स्थित है, जो Vancouver Island और Sunshine Coast के मार्गों की सेवा करता है।")
        + kcSec("घर", "आवास मुख्यतः तट से ऊपर उठती आवासीय सड़कों पर स्थित एकल-परिवार घर हैं। Ambleside के पास ही कुछ तटवर्ती अपार्टमेंट स्थित हैं। खुले डेटा के अनुसार West Vancouver में 18 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो सीवॉल और समुद्र तट तक रोज़ाना पहुँच के साथ एक शांत, सुस्थापित आवासीय क्षेत्र को महत्व देते हैं। यह उन परिवारों के लिए भी उपयुक्त है जो रैपिड ट्रांज़िट के बजाय बसों या ड्राइविंग पर निर्भर रहने में सहज हैं।")) +
      kcCard("लैंगली — Willoughby",
        "Langley के सबसे नए विकास क्षेत्रों में से एक, जहाँ हाल के टाउनहाउस और कॉन्डो ऐतिहासिक Fort Langley और Fraser Highway कॉरिडोर के बीच स्थित हैं।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Willoughby, Township of Langley में एक नया, मास्टर-प्लान्ड विकास क्षेत्र है, जो मुख्यतः हाल के आवास और स्थानीय दुकानों के साथ विकसित हुआ है। Langley, शहर और टाउनशिप मिलाकर, की आबादी लगभग 162,000 है और औसत घरेलू आय लगभग $101,500 है। Fraser River पर स्थित ऐतिहासिक Fort Langley, उसी नगरपालिका के भीतर एक विपरीत स्वरूप वाला पुराना गाँव केंद्र प्रस्तुत करता है।")
        + kcSec("आवागमन", "ड्राइवर Fraser Valley में यात्रा और Surrey व Vancouver की ओर जाने के लिए Highway 1 और Fraser Highway का उपयोग करते हैं। स्थानीय और क्षेत्रीय बसें Willoughby की सेवा करती हैं और इसे आसपास के केंद्रों से जोड़ती हैं। Surrey–Langley SkyTrain विस्तार निर्माणाधीन है और अभी सेवा में नहीं है।")
        + kcSec("घर", "Willoughby नए टाउनहाउस और कॉन्डो के लिए जाना जाता है, साथ ही कुछ नए एकल-परिवार घर भी हैं। Langley में आगे बाहर की ओर, मिश्रण और विस्तृत होकर अधिक एकल-परिवार घर और एकड़ ज़मीनें शामिल हो जाती हैं। खुले डेटा के अनुसार Langley में 42 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन परिवारों के लिए उपयुक्त है जो Fraser Valley में एक नियोजित समुदाय में नया आवास तलाश रहे हैं। यह उन लोगों के लिए भी उपयुक्त है जो SkyTrain विस्तार के निर्माणाधीन रहते हुए कार-आधारित आवागमन में सहज हैं।")) +
      kcCard("एबॉट्सफ़ोर्ड — Old Town & Clearbrook",
        "Fraser Valley का सबसे बड़ा शहरी केंद्र, जो ऐतिहासिक डाउनटाउन और Clearbrook क्षेत्र को हवाई अड्डे तक पहुँच और Highway 1 संपर्कों के साथ जोड़ता है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Abbotsford Fraser Valley का एक प्रमुख शहर है, जिसका ऐतिहासिक डाउनटाउन अक्सर Old Town कहलाता है और पश्चिम में सुस्थापित Clearbrook क्षेत्र है। शहर की आबादी लगभग 153,900 है और औसत घरेलू आय लगभग $92,500 है। Mill Lake, अपने पार्क और बोर्डवॉक के साथ, इन इलाक़ों के पास एक केंद्रीय हरित स्थल प्रदान करता है।")
        + kcSec("आवागमन", "Highway 1 Abbotsford से होकर गुज़रता है, जो इसे Langley, Chilliwack और क्षेत्र के बाकी हिस्सों से जोड़ता है। Abbotsford International Airport, जिसे YXX के नाम से जाना जाता है, निर्धारित उड़ानों के साथ शहर की सेवा करता है। स्थानीय बसें शहर के भीतर और पड़ोसी Fraser Valley समुदायों तक सेवा प्रदान करती हैं।")
        + kcSec("घर", "शहर भर में आवास में एकल-परिवार घर, टाउनहाउस और कम-मंज़िला कॉन्डो शामिल हैं। ऐतिहासिक डाउनटाउन के पास पुराने घर अधिक आम हैं, जबकि शहर के किनारों पर नई उप-विभाजन बस्तियाँ हैं। खुले डेटा के अनुसार Abbotsford में 50 स्कूल हैं, जो इस गाइड सेट के क्षेत्रों में सबसे अधिक संख्या है।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो अपने हवाई अड्डे और अस्पताल सेवाओं वाला एक पूर्ण-सेवा Fraser Valley शहर चाहते हैं। यह उन परिवारों के लिए भी उपयुक्त है जो Metro Vancouver के केंद्र के बाहर आवास प्रकारों की व्यापक श्रृंखला तलाश रहे हैं।")) +
      kcCard("डेल्टा — Ladner",
        "Delta में एक ऐतिहासिक मछली पकड़ने और खेती वाला गाँव, जहाँ एक छोटी मुख्य सड़क, नदी-किनारे का परिवेश और मुख्यतः कम-मंज़िला आवास है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Ladner, Tsawwassen और North Delta के साथ-साथ Delta के तीन समुदायों में से एक है, और मछली पकड़ने और खेती से आकार लिया अपना गाँव स्वरूप बनाए रखता है। Delta की कुल आबादी लगभग 110,700 है और औसत घरेलू आय लगभग $108,000 है। Boundary Bay और Centennial Beach, व्यापक Delta क्षेत्र में, प्रसिद्ध तटरेखा गंतव्य हैं।")
        + kcSec("आवागमन", "ड्राइवर Highway 99 और George Massey Tunnel के माध्यम से Vancouver और Richmond पहुँचते हैं। स्थानीय बसें Ladner की सेवा करती हैं और इसे Delta के अन्य हिस्सों और क्षेत्रीय ट्रांज़िट हब से जोड़ती हैं। समतल स्थानीय सड़कों और डाइक मार्गों पर साइकिल चलाना व्यावहारिक है।")
        + kcSec("घर", "Ladner और पूरे Delta में आवास मुख्यतः एकल-परिवार घर और टाउनहाउस हैं। गाँव केंद्र में ऊँची इमारतों के विकास के बजाय छोटे पैमाने की इमारतें हैं। खुले डेटा के अनुसार Delta में 37 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो Vancouver और Richmond की पहुँच के भीतर एक छोटा गाँव केंद्र पसंद करते हैं। यह उन परिवारों के लिए भी उपयुक्त है जो समतल, शांत आवासीय सड़कों और Boundary Bay तटरेखा तक पहुँच को महत्व देते हैं।")) +
      kcCard("न्यू वेस्टमिंस्टर — Downtown",
        "British Columbia की पहली राजधानी, दो SkyTrain लाइनों, एक ऐतिहासिक क्वे और टावरों व विरासत घरों के मिश्रण वाला एक सघन नदी-किनारे का शहर।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "New Westminster British Columbia की पहली राजधानी थी और Fraser River पर एक सघन, ऐतिहासिक शहर बना हुआ है। इसकी आबादी लगभग 78,900 है और औसत घरेलू आय लगभग $82,000 है। Westminster Quay और नदी-किनारे का प्रोमेनाड डाउनटाउन को सहारा देते हैं, जबकि Queen's Park अपनी पुरानी, पेड़ों से घिरी सड़कों के लिए जाना जाता है।")
        + kcSec("आवागमन", "दो SkyTrain लाइनें शहर की सेवा करती हैं, Expo Line और Millennium Line, कुल पाँच स्टेशनों के साथ। बसें डाउनटाउन को शहर के अन्य इलाक़ों और आसपास की नगरपालिकाओं से जोड़ती हैं। केंद्रीय स्थान Burnaby, Surrey और Coquitlam तक सड़क यात्रा को सीधा बनाता है।")
        + kcSec("घर", "डाउनटाउन आवास में नदी-किनारे और SkyTrain स्टेशनों के पास ऊँचे कॉन्डो का प्रभुत्व है। Queen's Park में, आवास स्टॉक मुख्यतः सुस्थापित सड़कों पर विरासत घर हैं। खुले डेटा के अनुसार New Westminster में 18 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो Vancouver या Burnaby में रहे बिना मज़बूत रैपिड-ट्रांज़िट पहुँच चाहते हैं। यह उन लोगों के लिए भी उपयुक्त है जो कॉन्डो और पुराने घर विकल्पों के मिश्रण वाला एक छोटा, ऐतिहासिक शहरी केंद्र पसंद करते हैं।")) +
      kcCard("पोर्ट मूडी — Moody Centre",
        "Burrard Inlet के मुहाने पर एक छोटा शहर, जहाँ एक पुराना वाणिज्यिक केंद्र Rocky Point Park और इनलेट तटरेखा से मिलता है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Port Moody Burrard Inlet के मुहाने पर स्थित है, जो पानी और जंगली पहाड़ियों से घिरा है। Moody Centre शहर का पुराना वाणिज्यिक क्षेत्र है जो St. Johns Street के साथ स्थित है, इनलेट पर Rocky Point Park के पास। पार्क की तटरेखा, घाट और ट्रेल्स समुदाय के लिए एक केंद्र बिंदु हैं।")
        + kcSec("आवागमन", "Millennium Line SkyTrain का Evergreen विस्तार Port Moody की सेवा करता है, और West Coast Express कम्यूटर ट्रेन भी शहर में रुकती है। बसें Moody Centre को Tri-Cities के बाकी हिस्सों से जोड़ती हैं। ड्राइवर Burnaby और Coquitlam की ओर St. Johns Street और Barnet Highway का उपयोग करते हैं।")
        + kcSec("घर", "कॉन्डो टावर Inlet Centre के पास केंद्रित हैं, जबकि टाउनहाउस और एकल-परिवार घर Heritage Mountain पर और पुरानी Moody Centre सड़कों में पाए जाते हैं। आवास आमतौर पर स्टेशनों से दूर जाने पर कम घनत्व वाला हो जाता है। डेटासेट के अनुसार Port Moody में 10 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो एक छोटे, इनलेट-किनारे समुदाय में SkyTrain और कम्यूटर-रेल पहुँच चाहते हैं। यह उन परिवारों के लिए भी उपयुक्त है जो तटरेखा पार्कों और जंगली ट्रेल्स तक आसान पहुँच को महत्व देते हैं।")) +
      kcCard("मेपल रिज — Haney",
        "Golden Ears पहाड़ों और खेतों के बीच एक Fraser River समुदाय, जिसका ऐतिहासिक केंद्र Haney में है और आवास स्टॉक मुख्यतः कम-मंज़िला है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Haney Maple Ridge का ऐतिहासिक नगर केंद्र है, जो Golden Ears चोटियों के नीचे Fraser River के साथ स्थित है। Maple Ridge की आबादी लगभग 91,000 है और औसत घरेलू आय लगभग $107,000 है। Golden Ears Provincial Park, प्रांत के बड़े पार्कों में से एक, शहर के ठीक उत्तर में स्थित है।")
        + kcSec("आवागमन", "West Coast Express कम्यूटर ट्रेन कार्यदिवसों पर Maple Ridge को डाउनटाउन Vancouver से जोड़ती है। Golden Ears Bridge ड्राइवरों के लिए Fraser River पार करके Langley तक जाता है। स्थानीय बसें Haney और शहर के आवासीय क्षेत्रों की सेवा करती हैं, और Highway 7 मुख्य पूर्व–पश्चिम सड़क मार्ग है।")
        + kcSec("घर", "आवास शहर भर में मुख्यतः एकल-परिवार घर और टाउनहाउस हैं। ग्रामीण पूर्वी हिस्से, जिसमें Websters Corners और Whonnock शामिल हैं, में एकड़ ज़मीनें और बड़े प्लॉट हैं। खुले डेटा के अनुसार Maple Ridge में 29 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन परिवारों के लिए उपयुक्त है जो अधिक जगह और अर्ध-ग्रामीण परिवेश चाहते हैं, साथ ही डाउनटाउन तक कम्यूटर-रेल विकल्प भी बनाए रखना चाहते हैं। यह उन लोगों के लिए भी उपयुक्त है जो बाहर समय बिताते हैं और Golden Ears Provincial Park को घर के पास चाहते हैं।")) +
      kcCard("पिट मीडोज़ — Town Centre",
        "Metro Vancouver का सबसे छोटा शहर, Maple Ridge और Coquitlam के बीच खेतों, ट्रेल्स और कम-मंज़िला घरों का एक समतल, नदी-डाइक से घिरा समुदाय।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Pitt Meadows Metro Vancouver का सबसे छोटा शहर है, जिसकी आबादी लगभग 19,400 है और औसत घरेलू आय लगभग $103,000 है। शहर का अधिकांश हिस्सा खेत है, जिसमें ब्लूबेरी और क्रैनबेरी के खेत शामिल हैं, जो Pitt और Alouette नदियों के साथ डाइक द्वारा संरक्षित हैं। उत्तर में स्थित Pitt Lake, दुनिया की सबसे बड़ी ज्वारीय झीलों में से एक है और एक प्रसिद्ध स्थानीय स्थलचिह्न है।")
        + kcSec("आवागमन", "West Coast Express कम्यूटर ट्रेन Mission और डाउनटाउन Vancouver के बीच अपने मार्ग पर Pitt Meadows में रुकती है। Pitt और Alouette नदियों के साथ डाइक ट्रेल्स पैदल चलने और साइकिल चलाने के लिए व्यापक रूप से उपयोग किए जाते हैं। ड्राइवर Coquitlam और Maple Ridge की ओर Lougheed Highway और Pitt River Bridge का उपयोग करते हैं।")
        + kcSec("घर", "आवास मुख्यतः शहरी नगर केंद्र क्षेत्र में केंद्रित टाउनहाउस और एकल-परिवार घर हैं। उस केंद्र के बाहर, भूमि उपयोग मुख्यतः कृषि है और ग्रामीण संपत्तियाँ हैं। खुले डेटा के अनुसार Pitt Meadows में 5 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो अपने दरवाज़े पर खेतों और नदी ट्रेल्स के साथ छोटे शहर का एहसास पसंद करते हैं। यह उन यात्रियों के लिए भी उपयुक्त है जो डाउनटाउन Vancouver की यात्राओं के लिए West Coast Express के समय-सारणी के अनुसार योजना बना सकते हैं।")) +
      kcCard("व्हाइट रॉक — Marine Drive",
        "Semiahmoo Bay पर एक छोटा समुद्र-किनारे का शहर, जो अपने घाट और Marine Drive प्रोमेनाड पर केंद्रित है, जहाँ लंबे समय से सेवानिवृत्त समुदाय है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "White Rock Semiahmoo Bay पर एक छोटा समुद्र-किनारे का शहर है, जो अपने घाट और Marine Drive के साथ प्रोमेनाड के लिए जाना जाता है। इसके डाक क्षेत्र की आबादी लगभग 21,800 है और औसत घरेलू आय लगभग $73,000 है। तट, अपने रेस्तरां और समुद्र तट के साथ, स्थानीय जीवन का केंद्र है, और शहर में लंबे समय से सेवानिवृत्ति-उन्मुख समुदाय है।")
        + kcSec("आवागमन", "Marine Drive मुख्य तटवर्ती सड़क है, और King George Boulevard White Rock को South Surrey और Highway 99 से जोड़ता है। स्थानीय बसें शहर की सेवा करती हैं और इसे आसपास के Surrey इलाक़ों और ट्रांज़िट हब से जोड़ती हैं। समतल प्रोमेनाड और घाट क्षेत्र के साथ पैदल चलना व्यावहारिक है।")
        + kcSec("घर", "आवास मुख्यतः समुद्र तट के ऊपर ढलान पर पुराने एकल-परिवार घर हैं, साथ ही तट के पास कम-मंज़िला कॉन्डो हैं। पड़ोसी South Surrey की तुलना में बड़े टावर सीमित हैं। क्षेत्र के कई छात्र पास के South Surrey के स्कूलों में पढ़ते हैं, क्योंकि शहर के भीतर ही केवल कुछ ही स्कूल स्थित हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन लोगों के लिए उपयुक्त है जो एक छोटे, पैदल-चलने योग्य तटवर्ती समुदाय में सीधे समुद्र के पास रहना चाहते हैं। यह सेवानिवृत्त लोगों और अन्य लोगों के लिए भी उपयुक्त है जो क्षेत्र के बड़े केंद्रों के बाहर शांत गति पसंद करते हैं।")) +
      kcCard("मिशन — Downtown",
        "नदी के उत्तरी किनारे पर एक Fraser River शहर, जिसका ऐतिहासिक डाउनटाउन, पहाड़ी उप-विभाजन और West Coast Express टर्मिनस है।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Mission Fraser River के उत्तरी किनारे पर, Abbotsford के सामने स्थित है, जिसका ऐतिहासिक डाउनटाउन नदी के मैदानों के साथ है। शहर की आबादी लगभग 44,100 है और औसत घरेलू आय लगभग $96,500 है। शहर के ऊपर एक पहाड़ी पर स्थित Westminster Abbey, और उत्तर-पश्चिम में Stave Falls क्षेत्र व्यापक रूप से पहचाने जाने वाले स्थानीय स्थलचिह्न हैं।")
        + kcSec("आवागमन", "Mission डाउनटाउन Vancouver के लिए West Coast Express कम्यूटर ट्रेन का पूर्वी टर्मिनस है। ड्राइवर पुल द्वारा Fraser River पार करके Abbotsford जाते हैं और क्षेत्रीय यात्रा के लिए Highway 7 और Highway 11 का उपयोग करते हैं। स्थानीय बसें शहर के भीतर सेवा प्रदान करती हैं।")
        + kcSec("घर", "आवास मुख्यतः एकल-परिवार घर हैं, डाउनटाउन के ऊपर पहाड़ियों पर नए उप-विभाजन बने हैं, जिसमें Hatzic क्षेत्र भी शामिल है। पुराने घर ऐतिहासिक केंद्र और नदी के पास अधिक केंद्रित हैं। खुले डेटा के अनुसार Mission में 17 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन परिवारों के लिए उपयुक्त है जो सीधे कम्यूटर-रेल टर्मिनस वाला एक छोटा Fraser Valley शहर तलाश रहे हैं। यह उन लोगों के लिए भी उपयुक्त है जो Fraser River और घाटी के दृश्यों वाली पहाड़ी आवासीय क्षेत्र पसंद करते हैं।")) +
      kcCard("चिलिवैक — Garrison Crossing",
        "पूर्वी Fraser Valley में एक पुनर्विकसित पूर्व सैन्य अड्डे पर एक नियोजित इलाका, Vedder River और पहाड़ी मनोरंजन के पास।",
        "गाइड पढ़ें", "बंद करें",
        kcSec("माहौल", "Garrison Crossing Chilliwack में एक पुनर्विकसित पूर्व सैन्य अड्डे पर बना एक नियोजित इलाका है, जो पूर्वी Fraser Valley में है। Chilliwack की आबादी लगभग 100,400 है और औसत घरेलू आय लगभग $83,500 है। Cultus Lake और Chilliwack Lake दक्षिण में स्थित हैं, और कामकाजी खेत अभी भी शहर के अधिकांश हिस्से को घेरे हुए हैं।")
        + kcSec("आवागमन", "Highway 1 Chilliwack को Abbotsford, Langley और Fraser Valley के बाकी हिस्सों से जोड़ता है। स्थानीय बसें Garrison Crossing की सेवा करती हैं और इसे डाउनटाउन Chilliwack और अन्य इलाक़ों से जोड़ती हैं। इलाका स्वयं पैदल-चलने योग्य सड़कों, पार्कों और एक छोटे वाणिज्यिक गाँव के साथ डिज़ाइन किया गया था।")
        + kcSec("घर", "Garrison Crossing में एक नए, एकसमान स्ट्रीटस्केप में एकल-परिवार घरों और टाउनहाउस का नियोजित मिश्रण है। पूरे Chilliwack में व्यापक रूप से, आवास में डाउनटाउन के पास कुछ कॉन्डो और पुराने घर भी शामिल हैं। खुले डेटा के अनुसार Chilliwack में 35 स्कूल हैं।")
        + kcSec("किसके लिए उपयुक्त", "यह उन परिवारों के लिए उपयुक्त है जो एक छोटे Fraser Valley शहर में एक नया, नियोजित इलाका चाहते हैं। यह उन लोगों के लिए भी उपयुक्त है जो सप्ताहांत पर झीलों, नदियों और पहाड़ी मनोरंजन तक निकट पहुँच को महत्व देते हैं।")),
    zh:
      kcCard("本拿比——Metrotown",
        "本拿比的高层市中心,围绕一座大型购物中心和天车枢纽而建。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Metrotown 是本拿比的市中心:以 Metropolis at Metrotown(BC 最大的购物中心之一)为核心,聚集了公寓高楼、办公楼和零售商铺。车站附近的街道充满都市感,而几个街区之外,则是较安静的住宅街道,以及社区西缘中央公园(Central Park)的林间小径。")
        + kcSec("交通出行", "天车博览线(Expo Line)的 Metrotown 站可直达温哥华市中心,该站同时也是本地区最繁忙的公交枢纽之一。Patterson 站(同为博览线)服务社区西侧。对于高楼居民来说,日常所需——买菜、服务、Bonsor 娱乐中心——都在步行范围内。")
        + kcSec("住房类型", "以公寓为主——市中心附近的高层塔楼和周边街道上较旧的低层公寓楼——再往外则有联排别墅和独立屋。")
        + kcSec("适合人群", "想要少用车、以公交为主生活方式的人;乘坐天车通勤的人;以及希望商店、服务和娱乐近在咫尺的换小房者。"))
      + kcCard("高贵林——Coquitlam Centre",
        "一个以家庭为导向的市中心,天车常青线延长线在此与西海岸快线交汇。",
        "阅读指南", "收起",
        kcSec("氛围特色", "高贵林规划中的市中心,围绕 Coquitlam Centre 购物中心而建。Lafarge 湖和市中心公园(Town Centre Park)是它的“绿色客厅”——步行道、运动场和社区活动一应俱全——因此即便新塔楼不断拔起,这里依然保持着郊区般、以家庭为主的节奏。")
        + kcSec("交通出行", "Coquitlam Central 站集三者于一体:千禧线(常青线延长线)、前往温哥华市中心的西海岸快线通勤列车,以及公交枢纽——是温哥华都会区少数同时拥有天车和通勤铁路的中心之一。")
        + kcSec("住房类型", "车站附近有较新的公寓塔楼和联排别墅,还有较旧的低层公寓,以及中心周边成熟街道和山坡上的独立屋。")
        + kcSec("适合人群", "希望公园、学校和社区设施近在身边的家庭;喜欢同时拥有天车和通勤铁路两种选择的通勤者;以及想在郊区环境中寻找较新住房的买家。"))
      + kcCard("素里——Surrey City Centre",
        "素里年轻而快速成长的市中心,以两个天车站、一所大学校园和市立图书馆为核心。",
        "阅读指南", "收起",
        kcSec("氛围特色", "这是温哥华都会区最新的市中心之一。办公和住宅塔楼正围绕 Surrey Central 和 King George 两站拔地而起,旁边是 SFU 素里校园、市中心图书馆和市政广场,而许多周边街道上仍保留着较旧的低层建筑和房屋——一个明显处于转型中的中心。")
        + kcSec("交通出行", "King George 站是博览线的终点站,Surrey Central 站则将天车与本地区最繁忙的公交枢纽之一结合在一起,包括沿 King George 大道的快速公交服务。")
        + kcSec("住房类型", "车站附近的高层公寓、数量不断增加的联排别墅,以及周边 Whalley 街道上较旧的独立屋。")
        + kcSec("适合人群", "SFU 素里校区的学生与教职人员;希望直达天车的首次购房者;以及在素里不断成长的市中心工作、希望通勤时间短的人。"))
      + kcCard("温哥华——市中心",
        "本地区密度最高的核心:公寓塔楼、办公楼、体育场和海滨,全部步行可达。",
        "阅读指南", "收起",
        kcSec("氛围特色", "市中心半岛汇集了商业区、Robson 和 Granville 的购物街、剧院和体育场——还有各具特色的住宅片区。西区(West End)绿树成荫、建筑较旧,中低层建筑靠近史丹利公园和英吉利湾;耶鲁镇(Yaletown)将改建仓库与塔楼沿海堤步道(seawall)相融合;煤港(Coal Harbour)是较安静的海滨高层区;煤气镇(Gastown)则是城市的历史街区。")
        + kcSec("交通出行", "Waterfront 站是本地区最大的枢纽——天车博览线和加拿大线、海上巴士(SeaBus)前往北温哥华,以及西海岸快线——半岛上还有数个天车站和密集的公交网络。市中心大部分区域适合步行,海堤步道则是为骑行而建。")
        + kcSec("住房类型", "绝大多数是中高层塔楼中的公寓,外加少量联排别墅;半岛上的独立屋十分罕见。")
        + kcSec("适合人群", "在市中心工作或想要“处处步行”生活方式的人,以及愿意以免去房屋维护换取便利设施和景观的换小房者。"))
      + kcCard("列治文",
        "位于温哥华以南、加拿大线沿线的平坦临河城市——以餐厅和美食闻名。",
        "阅读指南", "收起",
        kcSec("氛围特色", "列治文位于菲沙河口的岛屿上:地势平坦,以郊区风貌为主,凭借亚洲餐厅、美食广场和购物场所闻名全区。沿 3 号路(No. 3 Road)的市中心是城市的主轴,而西南部的史蒂夫斯顿(Steveston)则以码头和历史建筑保留着渔村风情。温哥华国际机场(YVR)位于海岛(Sea Island)上,在列治文范围内。")
        + kcSec("交通出行", "加拿大线从 Richmond–Brighouse 站和 Aberdeen 站前往温哥华市中心和机场。公交从全市各地汇集到各车站,平坦的地形也让骑行成为实用的本地出行方式。")
        + kcSec("住房类型", "以独立屋和联排别墅为主,外加低层公寓——较高的公寓塔楼集中在市中心加拿大线车站附近。")
        + kcSec("适合人群", "重视平坦易骑行街道和本地学校的家庭;经常乘飞机出行的人;以及想要郊区空间又希望天车直达市中心的买家。"))
      + kcCard("高贵林港",
        "一座较小的住宅城市,西海岸快线在此与高贵林河步道相遇。",
        "阅读指南", "收起",
        kcSec("氛围特色", "与三联市(Tri-Cities)的邻居相比,高贵林港更有小镇气息:沿 Shaughnessy 街的紧凑市中心有本地商店和咖啡馆,四周是成熟的家庭社区。高贵林河和环绕全市的 Traboulay PoCo 步道,让日常生活以户外为重心。")
        + kcSec("交通出行", "Port Coquitlam 站位于西海岸快线上,工作日有通勤列车前往温哥华市中心。公交连接 Coquitlam Central 站和天车网络,1 号高速公路和 Mary Hill 绕道则服务驾车者。")
        + kcSec("住房类型", "以独立屋和联排别墅小区为主,市中心附近有一些低层公寓,城市东北部的 Dominion Triangle 地区有较新的开发项目。")
        + kcSec("适合人群", "希望社区更安静、以家庭为主且绿地近在门口,并乘坐西海岸快线或驾车通勤的买家。")) +
      kcCard("北温哥华——Lonsdale",
        "北岸地区的中心地带，围绕 Lonsdale Quay 和 SeaBus 展开，可欣赏山景，主街繁华热闹，住宅从海滨一路延伸至山坡。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Lonsdale 是北温哥华的商业和市政中心，以 Lonsdale Avenue 和 Lonsdale Quay 周边的海滨为核心。更广义的城市和区在其邮政区域内合计人口约 151,500，家庭收入中位数约 $108,500。Grouse Mountain 和 Capilano Suspension Bridge 区域位于北侧，从岸边可望见海港和温哥华市中心的天际线。")
        + kcSec("交通出行", "SeaBus 从 Lonsdale Quay 出发，横跨 Burrard Inlet 前往温哥华市中心。巴士将 Lonsdale 与北岸各社区相连，驾车者可使用 Upper Levels Highway（Highway 1）向东或向西行驶。沿 Lonsdale Avenue 本身步行和骑行都很方便，适合日常办事。")
        + kcSec("住房类型", "Lonsdale 在大道和海滨附近有公寓高楼和较旧的低层公寓。往山坡上走，住宅主要是位于山坡街道上的独立屋。开放数据中，北温哥华的城市和区共有 44 所学校。")
        + kcSec("适合人群", "这里适合希望住在步行便利的中心区、能乘渡轮直达市中心，同时又靠近山间步道的人群。也适合偏好在成熟区域居住公寓或共管公寓、而非较新郊区的家庭。")) +
      kcCard("西温哥华——Ambleside",
        "西温哥华海滨一处宁静的海边村落，以海堤、小商店和以独立屋为主的街道而闻名。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Ambleside 是西温哥华的两个村落中心之一，另一个是 Dundarave，位于海滨和 Marine Drive 之间。西温哥华人口约 45,000，家庭收入中位数约 $106,500。沿岸的海堤、海滩和公园绿地赋予该地区宁静的居住氛围。")
        + kcSec("交通出行", "巴士沿 Marine Drive 行驶，前往温哥华市中心和北岸其他目的地，因为西温哥华没有 SkyTrain 服务。驾车者在本地使用 Marine Drive，长途出行则使用 Highway 1。位于该市西部的 Horseshoe Bay 渡轮码头提供前往温哥华岛和 Sunshine Coast 的航线。")
        + kcSec("住房类型", "住房大多是位于从海滨向上延伸的住宅街道上的独立屋。Ambleside 本身附近有一些海滨公寓。开放数据中西温哥华有 18 所学校。")
        + kcSec("适合人群", "这里适合重视宁静、成熟居住区，且日常可前往海堤和海滩的人群。也适合乐于依靠巴士或驾车出行、而非快速轨道交通的家庭。")) +
      kcCard("兰里——Willoughby",
        "兰里最新发展区域之一，新建的联排别墅和公寓位于历史悠久的 Fort Langley 与 Fraser Highway 走廊之间。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Willoughby 是兰里镇内较新的总体规划发展区，主要由近年新建的住宅和本地商店构成。兰里市和兰里镇合计人口约 162,000，家庭收入中位数约 $101,500。位于 Fraser River 河畔的历史悠久的 Fort Langley，在同一市镇内提供了一个风格迥异的老村落中心。")
        + kcSec("交通出行", "驾车者使用 Highway 1 和 Fraser Highway 在 Fraser Valley 内出行，并前往素里和温哥华。本地和区域巴士服务 Willoughby，并将其与周边中心相连。Surrey–Langley SkyTrain 延长线正在建设中，尚未投入服务。")
        + kcSec("住房类型", "Willoughby 以较新的联排别墅和公寓而闻名，同时也有一些较新的独立屋。在兰里更外围的地区，住房类型更加多样，包括更多的独立屋和大面积土地住宅。开放数据中兰里有 42 所学校。")
        + kcSec("适合人群", "这里适合在 Fraser Valley 的规划社区中寻找较新住房的家庭。也适合在 SkyTrain 延长线仍在建设期间，乐于以汽车通勤的人群。")) +
      kcCard("阿伯茨福德——Old Town & Clearbrook",
        "Fraser Valley 最大的城市中心，融合了历史悠久的市中心和 Clearbrook 区域，并拥有机场交通和 Highway 1 连接。",
        "阅读指南", "收起",
        kcSec("氛围特色", "阿伯茨福德是 Fraser Valley 的一座重要城市，拥有常被称为 Old Town 的历史市中心，以及西侧成熟的 Clearbrook 区域。该市人口约 153,900，家庭收入中位数约 $92,500。Mill Lake 及其公园和木板步道，为这些社区附近提供了一处中心绿地。")
        + kcSec("交通出行", "Highway 1 穿过阿伯茨福德，将其与兰里、奇利瓦克和该地区其他地方相连。Abbotsford International Airport，即 YXX，为该市提供定期航班服务。本地巴士在市内以及前往邻近 Fraser Valley 社区提供服务。")
        + kcSec("住房类型", "全市的住房包括独立屋、联排别墅和低层公寓。历史市中心附近较旧的房屋更为常见，城市边缘则有较新的住宅分区。开放数据中阿伯茨福德有 50 所学校，是本组指南所涉地区中数量最多的。")
        + kcSec("适合人群", "这里适合希望居住在设施齐全的 Fraser Valley 城市、拥有自己的机场和医院服务的人群。也适合在大温哥华核心区之外寻找更多样化住房类型的家庭。")) +
      kcCard("三角洲——Ladner",
        "三角洲一座历史悠久的渔业和农业村落，拥有一条小主街、河畔环境，以及以低层住房为主的格局。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Ladner 是三角洲的三个社区之一，另外两个是 Tsawwassen 和 North Delta，它保留了由渔业和农业塑造的村落特色。三角洲整体人口约 110,700，家庭收入中位数约 $108,000。位于更广阔三角洲地区的 Boundary Bay 和 Centennial Beach 是知名的海岸目的地。")
        + kcSec("交通出行", "驾车者可经 Highway 99 和 George Massey Tunnel 前往温哥华和列治文。本地巴士服务 Ladner，并将其与三角洲其他地区和区域交通枢纽相连。在平坦的本地街道和堤岸路线上骑行很方便。")
        + kcSec("住房类型", "Ladner 和整个三角洲的住房大多是独立屋和联排别墅。村落中心是规模较小的建筑，而非高层开发项目。开放数据中三角洲有 37 所学校。")
        + kcSec("适合人群", "这里适合偏好规模较小的村落中心、且可便捷前往温哥华和列治文的人群。也适合重视平坦、宁静的住宅街道以及可前往 Boundary Bay 海岸的家庭。")) +
      kcCard("新西敏——Downtown",
        "不列颠哥伦比亚省的首个首府，一座紧凑的河畔城市，拥有两条 SkyTrain 线路、历史悠久的码头，以及高楼与历史遗产房屋混合的格局。",
        "阅读指南", "收起",
        kcSec("氛围特色", "新西敏曾是不列颠哥伦比亚省的首个首府，如今仍是 Fraser River 河畔一座紧凑而历史悠久的城市。人口约 78,900，家庭收入中位数约 $82,000。Westminster Quay 和河畔长廊是市中心的核心，而 Queen's Park 以其较旧的、绿树成荫的街道而闻名。")
        + kcSec("交通出行", "两条 SkyTrain 线路服务该市，即 Expo Line 和 Millennium Line，共有五个车站。巴士将市中心与该市其他社区和周边市镇相连。中心位置使驾车前往本拿比、素里和高贵林都很方便。")
        + kcSec("住房类型", "市中心的住房以河畔和 SkyTrain 车站附近的高层公寓为主。在 Queen's Park，住房存量主要是位于成熟街道上的历史遗产房屋。开放数据中新西敏有 18 所学校。")
        + kcSec("适合人群", "这里适合希望拥有便捷快速轨道交通、但不想住在温哥华或本拿比的人群。也适合偏好规模较小、历史悠久的市中心，并希望在公寓和较旧房屋之间有多种选择的人群。")) +
      kcCard("满地宝——Moody Centre",
        "位于 Burrard Inlet 尽头的一座小城市，较旧的商业中心与 Rocky Point Park 和海湾海岸在此交汇。",
        "阅读指南", "收起",
        kcSec("氛围特色", "满地宝位于 Burrard Inlet 的尽头，四周环绕着水域和森林覆盖的山丘。Moody Centre 是该市沿 St. Johns Street 的较旧商业区，靠近海湾边的 Rocky Point Park。公园的海岸线、码头和步道是社区的焦点。")
        + kcSec("交通出行", "Millennium Line SkyTrain 的 Evergreen 延长线服务满地宝，West Coast Express 通勤列车也在该市停靠。巴士将 Moody Centre 与三联市其他地区相连。驾车者使用 St. Johns Street 和 Barnet Highway 前往本拿比和高贵林。")
        + kcSec("住房类型", "公寓高楼集中在 Inlet Centre 附近，而联排别墅和独立屋则分布在 Heritage Mountain 和较旧的 Moody Centre 街道上。离车站越远，住房密度通常越低。数据集中满地宝有 10 所学校。")
        + kcSec("适合人群", "这里适合希望在规模较小、海湾旁的社区中拥有 SkyTrain 和通勤铁路交通的人群。也适合重视便捷前往海岸公园和森林步道的家庭。")) +
      kcCard("枫树岭——Haney",
        "位于 Golden Ears 山脉和农田之间的 Fraser River 社区，Haney 是其历史中心，住房存量以低层建筑为主。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Haney 是枫树岭的历史城镇中心，位于 Fraser River 沿岸、Golden Ears 山峰之下。枫树岭人口约 91,000，家庭收入中位数约 $107,000。Golden Ears Provincial Park 是该省的大型公园之一，就位于该市以北。")
        + kcSec("交通出行", "West Coast Express 通勤列车在工作日将枫树岭与温哥华市中心相连。Golden Ears Bridge 横跨 Fraser River，供驾车者前往兰里。本地巴士服务 Haney 和该市的住宅区，Highway 7 是主要的东—西道路路线。")
        + kcSec("住房类型", "全市住房大多是独立屋和联排别墅。东侧的乡村地区，包括 Websters Corners 和 Whonnock，拥有大面积土地和较大的地块。开放数据中枫树岭有 29 所学校。")
        + kcSec("适合人群", "这里适合希望拥有更多空间和半乡村环境，同时保留通勤铁路前往市中心选择的家庭。也适合热爱户外活动、希望 Golden Ears Provincial Park 就在住所附近的人群。")) +
      kcCard("匹特草原——Town Centre",
        "大温哥华最小的城市，位于枫树岭和高贵林之间，是一个平坦的、由河流堤岸环绕的社区，拥有农场、步道和低层住宅。",
        "阅读指南", "收起",
        kcSec("氛围特色", "匹特草原是大温哥华最小的城市，人口约 19,400，家庭收入中位数约 $103,000。该市大部分地区是农田，包括蓝莓和蔓越莓田，由 Pitt River 和 Alouette River 沿岸的堤岸保护。位于北侧的 Pitt Lake 是世界上最大的潮汐湖之一，也是知名的本地地标。")
        + kcSec("交通出行", "West Coast Express 通勤列车在 Mission 与温哥华市中心之间的路线上在匹特草原停靠。沿 Pitt River 和 Alouette River 的堤岸步道被广泛用于步行和骑行。驾车者使用 Lougheed Highway 和 Pitt River Bridge 前往高贵林和枫树岭。")
        + kcSec("住房类型", "住房主要是联排别墅和独立屋，集中在城市城镇中心区域。在该核心区域之外，土地用途主要是农业，并有乡村物业。开放数据中匹特草原有 5 所学校。")
        + kcSec("适合人群", "这里适合偏好小城市氛围、且农田和河流步道近在咫尺的人群。也适合能根据 West Coast Express 时刻表安排前往温哥华市中心行程的通勤者。")) +
      kcCard("白石——Marine Drive",
        "Semiahmoo Bay 边的一座小海滨城市，以其码头和 Marine Drive 长廊为中心，拥有历史悠久的退休社区。",
        "阅读指南", "收起",
        kcSec("氛围特色", "白石是 Semiahmoo Bay 边的一座小海滨城市，以其码头和沿 Marine Drive 的长廊而闻名。其邮政区域人口约 21,800，家庭收入中位数约 $73,000。拥有餐厅和海滩的海滨是本地生活的中心，该市拥有历史悠久的、以退休人士为主的社区。")
        + kcSec("交通出行", "Marine Drive 是主要的海滨道路，King George Boulevard 将白石与 South Surrey 和 Highway 99 相连。本地巴士服务该市，并将其与周边素里社区和交通枢纽相连。沿平坦的长廊和码头区域步行很方便。")
        + kcSec("住房类型", "住房大多是位于海滩上方斜坡上的较旧独立屋，以及海滨附近的低层公寓。与邻近的 South Surrey 相比，大型高楼较少。该地区的许多学生在附近的 South Surrey 上学，因为市内本身只有少量学校。")
        + kcSec("适合人群", "这里适合希望直接住在海边、位于规模较小且步行便利的海滨社区的人群。也适合退休人士和其他偏好在该地区较大中心之外享受更宁静生活节奏的人群。")) +
      kcCard("米逊——Downtown",
        "位于 Fraser River 北岸的一座城市，拥有历史悠久的市中心、山坡住宅分区，以及 West Coast Express 的终点站。",
        "阅读指南", "收起",
        kcSec("氛围特色", "米逊位于 Fraser River 北岸，与阿伯茨福德隔河相望，历史悠久的市中心沿河滩展开。该市人口约 44,100，家庭收入中位数约 $96,500。坐落在城市上方山丘上的 Westminster Abbey，以及西北部的 Stave Falls 区域，都是广为人知的本地地标。")
        + kcSec("交通出行", "米逊是前往温哥华市中心的 West Coast Express 通勤列车的东端终点站。驾车者通过桥梁横跨 Fraser River 前往阿伯茨福德，并使用 Highway 7 和 Highway 11 进行区域出行。本地巴士在市内提供服务。")
        + kcSec("住房类型", "住房主要是独立屋，较新的住宅分区建在市中心上方的山丘上，包括 Hatzic 区域。较旧的房屋集中在更靠近历史中心和河流的地方。开放数据中米逊有 17 所学校。")
        + kcSec("适合人群", "这里适合寻找规模较小的 Fraser Valley 城市、且拥有直达通勤铁路终点站的家庭。也适合偏好山坡住宅区、可俯瞰 Fraser River 和山谷景色的人群。")) +
      kcCard("奇利瓦克——Garrison Crossing",
        "位于 Fraser Valley 东部、在重新开发的原军事基地上建成的规划社区，靠近 Vedder River 和山区休闲活动。",
        "阅读指南", "收起",
        kcSec("氛围特色", "Garrison Crossing 是一个规划社区，建在奇利瓦克一处重新开发的原军事基地上，位于 Fraser Valley 东部。奇利瓦克人口约 100,400，家庭收入中位数约 $83,500。Cultus Lake 和 Chilliwack Lake 位于南侧，仍在耕作的农田仍环绕着该市的大部分地区。")
        + kcSec("交通出行", "Highway 1 将奇利瓦克与阿伯茨福德、兰里和 Fraser Valley 其他地区相连。本地巴士服务 Garrison Crossing，并将其与奇利瓦克市中心和其他社区相连。该社区本身在设计上拥有步行便利的街道、公园和一个小型商业村。")
        + kcSec("住房类型", "Garrison Crossing 的特点是在较新、统一的街景中规划混合了独立屋和联排别墅。在更广阔的奇利瓦克范围内，住房还包括一些公寓和市中心附近的较旧房屋。开放数据中奇利瓦克有 35 所学校。")
        + kcSec("适合人群", "这里适合希望在规模较小的 Fraser Valley 城市中拥有较新规划社区的家庭。也适合重视在周末便捷前往湖泊、河流和山区休闲活动的人群。")),
    es:
      kcCard("Burnaby — Metrotown",
        "El centro de gran altura de Burnaby, construido alrededor de un importante centro comercial y una estación clave de SkyTrain.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Metrotown es el centro urbano de Burnaby: un denso conjunto de torres de condominios, oficinas y comercios, anclado por Metropolis at Metrotown, uno de los centros comerciales más grandes de BC. Las calles cercanas a la estación tienen un ambiente plenamente urbano, mientras que a unas pocas cuadras dan paso a calles residenciales más tranquilas y a los senderos boscosos de Central Park, en el borde occidental de la zona.")
        + kcSec("Cómo moverse", "La estación Metrotown, de la Expo Line de SkyTrain, ofrece conexión directa con el centro de Vancouver, y además funciona como uno de los intercambiadores de autobuses más concurridos de la región. La estación Patterson (también de la Expo Line) atiende el lado oeste de la zona. Muchas necesidades diarias — supermercados, servicios y el Bonsor Recreation Complex — están a poca distancia a pie de las torres.")
        + kcSec("Viviendas", "Principalmente condominios — torres de gran altura cerca del centro y edificios de apartamentos más antiguos y de poca altura en las calles aledañas —, además de casas adosadas y viviendas unifamiliares en las zonas más alejadas.")
        + kcSec("Para quién es ideal", "Personas que buscan un estilo de vida con poco uso del automóvil y centrado en el transporte público; quienes se desplazan a diario en SkyTrain; y personas que reducen el tamaño de su vivienda y quieren tener tiendas, servicios y espacios recreativos cerca."))
      + kcCard("Coquitlam — Coquitlam Centre",
        "Un centro urbano orientado a las familias, donde la extensión Evergreen de SkyTrain se une al West Coast Express.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "El centro planificado de Coquitlam, construido alrededor del centro comercial Coquitlam Centre. El lago Lafarge y el Town Centre Park funcionan como su gran espacio verde: senderos para caminar, campos deportivos y eventos comunitarios, por lo que el centro mantiene un ritmo suburbano y familiar incluso mientras se levantan nuevas torres.")
        + kcSec("Cómo moverse", "La estación Coquitlam Central combina la Millennium Line (extensión Evergreen) con el tren de cercanías West Coast Express hacia el centro de Vancouver, además de un intercambiador de autobuses: es uno de los pocos centros de Metro Vancouver que cuenta tanto con SkyTrain como con tren de cercanías.")
        + kcSec("Viviendas", "Torres de condominios y casas adosadas más recientes cerca de la estación, condominios y apartamentos antiguos de poca altura, y viviendas unifamiliares en las calles y colinas ya establecidas alrededor del centro.")
        + kcSec("Para quién es ideal", "Familias que quieren tener parques, escuelas e instalaciones comunitarias cerca; personas que se desplazan a diario y valoran contar tanto con SkyTrain como con tren de cercanías; y compradores que buscan vivienda más nueva en un entorno suburbano."))
      + kcCard("Surrey — Surrey City Centre",
        "El centro joven y de rápido crecimiento de Surrey, anclado por dos estaciones de SkyTrain, un campus universitario y la biblioteca principal.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Uno de los centros urbanos más nuevos de Metro Vancouver. Torres de oficinas y residenciales se levantan alrededor de las estaciones Surrey Central y King George, junto al campus SFU Surrey, la biblioteca City Centre y la Civic Plaza, mientras que edificios antiguos de poca altura y casas aún bordean muchas de las calles aledañas: un centro visiblemente en transformación.")
        + kcSec("Cómo moverse", "La estación King George es la terminal de la Expo Line, y la estación Surrey Central combina SkyTrain con uno de los intercambiadores de autobuses más concurridos de la región, incluido el servicio de autobús rápido por King George Boulevard.")
        + kcSec("Viviendas", "Condominios en torres de gran altura cerca de las estaciones, un número creciente de casas adosadas y viviendas unifamiliares más antiguas en las calles aledañas de Whalley.")
        + kcSec("Para quién es ideal", "Estudiantes y personal de SFU Surrey; compradores primerizos que quieren acceso directo a SkyTrain; y personas que trabajan en el creciente centro de Surrey y buscan un trayecto corto al trabajo."))
      + kcCard("Vancouver — Downtown",
        "El núcleo más denso de la región: torres de condominios, oficinas, estadios y el frente costero, todo a poca distancia a pie.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "La península del centro concentra el distrito de negocios, las zonas comerciales de Robson y Granville, teatros y estadios, además de sectores residenciales bien diferenciados. El West End es arbolado y más antiguo, con edificios de poca y mediana altura cerca de Stanley Park y English Bay; Yaletown combina almacenes reconvertidos con torres a lo largo del malecón costero; Coal Harbour es una zona más tranquila de rascacielos frente al agua; y Gastown es el distrito patrimonial.")
        + kcSec("Cómo moverse", "La estación Waterfront es el principal centro de transporte de la región — SkyTrain de la Expo Line y la Canada Line, el SeaBus hacia North Vancouver y el West Coast Express —, con varias estaciones más de SkyTrain repartidas por la península y una densa red de autobuses. La mayor parte del centro se puede recorrer a pie, y los senderos del malecón costero son ideales para andar en bicicleta.")
        + kcSec("Viviendas", "Predominantemente condominios y apartamentos en torres de mediana y gran altura, además de algunas casas adosadas; las viviendas unifamiliares independientes son escasas en la península.")
        + kcSec("Para quién es ideal", "Personas que trabajan en el centro o que buscan un estilo de vida en el que todo quede a poca distancia a pie, y quienes reducen el tamaño de su vivienda y cambian el mantenimiento de una casa por servicios y vistas."))
      + kcCard("Richmond",
        "Una ciudad plana y ribereña al sur de Vancouver, conectada por la Canada Line y ampliamente conocida por sus restaurantes y su oferta gastronómica.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Richmond ocupa islas en la desembocadura del río Fraser: es plana, mayormente suburbana y famosa en toda la región por sus restaurantes asiáticos, patios de comidas y tiendas. El centro de la ciudad, a lo largo de No. 3 Road, es su eje urbano, mientras que Steveston, en el suroeste, conserva el carácter de un pueblo pesquero, con sus muelles y edificios patrimoniales. El Aeropuerto Internacional de Vancouver (YVR) se encuentra en Sea Island, dentro de Richmond.")
        + kcSec("Cómo moverse", "La Canada Line va desde las estaciones Richmond–Brighouse y Aberdeen hasta el centro de Vancouver y el aeropuerto. Los autobuses alimentan las estaciones desde toda la ciudad, y el terreno plano hace que andar en bicicleta sea una opción práctica para los trayectos locales.")
        + kcSec("Viviendas", "Principalmente viviendas unifamiliares y casas adosadas, además de condominios de poca altura, con torres de condominios más altas concentradas cerca de las estaciones de la Canada Line en el centro de la ciudad.")
        + kcSec("Para quién es ideal", "Familias que valoran calles planas aptas para bicicletas y escuelas locales; viajeros frecuentes en avión; y compradores que buscan espacio suburbano con una conexión directa de SkyTrain al centro."))
      + kcCard("Port Coquitlam",
        "Una ciudad más pequeña y residencial, donde el West Coast Express se encuentra con los senderos del río Coquitlam.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "PoCo tiene un ambiente más de pueblo pequeño que sus vecinos de las Tri-Cities: un núcleo céntrico compacto a lo largo de Shaughnessy Street, con tiendas y cafés locales, rodeado de barrios familiares ya establecidos. El río Coquitlam y el sendero Traboulay PoCo Trail — una ruta circular que rodea la ciudad — dan a la vida diaria un marcado enfoque en el aire libre.")
        + kcSec("Cómo moverse", "La estación Port Coquitlam está en la línea del West Coast Express, con trenes de cercanías entre semana hacia el centro de Vancouver. Los autobuses conectan con la estación Coquitlam Central y la red de SkyTrain, y la autopista Highway 1 y el Mary Hill Bypass atienden a quienes conducen.")
        + kcSec("Viviendas", "Principalmente viviendas unifamiliares y complejos de casas adosadas, con algunos condominios de poca altura cerca del núcleo céntrico y desarrollos más recientes en la zona de Dominion Triangle, en el noreste de la ciudad.")
        + kcSec("Para quién es ideal", "Compradores que buscan una comunidad más tranquila y orientada a las familias, con espacios verdes a la puerta de casa, y que se desplazan en West Coast Express o en automóvil.")) +
      kcCard("North Vancouver — Lonsdale",
        "Un centro de la costa norte alrededor de Lonsdale Quay y el SeaBus, con vistas a las montañas, una calle principal concurrida y viviendas que suben desde la costa hacia las laderas.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Lonsdale es el corazón comercial y cívico de North Vancouver, centrado en Lonsdale Avenue y la zona costera alrededor de Lonsdale Quay. La ciudad y el distrito en conjunto tienen una población de aproximadamente 151,500 en sus áreas postales, con un ingreso medio por hogar de aproximadamente $108,500. Grouse Mountain y la zona del Capilano Suspension Bridge se encuentran al norte, y el puerto y el horizonte del centro de Vancouver son visibles desde la costa.")
        + kcSec("Cómo moverse", "El SeaBus va desde Lonsdale Quay a través de Burrard Inlet hasta el centro de Vancouver. Los autobuses conectan Lonsdale con los barrios de toda la costa norte, y los conductores utilizan Upper Levels Highway, Highway 1, para las rutas hacia el este y el oeste. Caminar y andar en bicicleta son opciones prácticas para los mandados diarios a lo largo de la propia Lonsdale Avenue.")
        + kcSec("Viviendas", "Lonsdale tiene torres de condominios y apartamentos antiguos de baja altura cerca de la avenida y la costa. Más arriba en las laderas, las viviendas son principalmente casas unifamiliares en calles en pendiente. Hay 44 escuelas en la ciudad y el distrito de North Vancouver en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para personas que buscan un centro transitable a pie con una conexión directa en ferri al centro, viviendo cerca de senderos de montaña. También es adecuado para hogares que prefieren vivir en un apartamento o condominio en una zona consolidada en lugar de un suburbio más nuevo.")) +
      kcCard("West Vancouver — Ambleside",
        "Un tranquilo pueblo costero frente al mar en West Vancouver, conocido por su malecón, sus pequeñas tiendas y sus calles predominantemente unifamiliares.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Ambleside es uno de los dos centros de pueblo de West Vancouver, junto con Dundarave, situado entre la costa y Marine Drive. West Vancouver tiene una población de aproximadamente 45,000 y un ingreso medio por hogar de aproximadamente $106,500. El malecón, la playa y las zonas verdes a lo largo de la costa le dan a la zona un carácter tranquilo y residencial.")
        + kcSec("Cómo moverse", "Los autobuses circulan por Marine Drive hacia el centro de Vancouver y otros destinos de la costa norte, ya que no hay servicio de SkyTrain en West Vancouver. Los conductores utilizan Marine Drive a nivel local y Highway 1 para trayectos más largos. La terminal de ferris de Horseshoe Bay, en la parte occidental del municipio, atiende rutas hacia Vancouver Island y Sunshine Coast.")
        + kcSec("Viviendas", "Las viviendas son en su mayoría casas unifamiliares en calles residenciales que suben desde la costa. Algunos apartamentos frente al mar se encuentran cerca del propio Ambleside. West Vancouver tiene 18 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para personas que valoran una zona residencial tranquila y consolidada con acceso diario al malecón y la playa. También es adecuado para hogares que se sienten cómodos dependiendo de los autobuses o de conducir en lugar del transporte rápido.")) +
      kcCard("Langley — Willoughby",
        "Una de las zonas de crecimiento más nuevas de Langley, con casas adosadas y condominios recientes situados entre el histórico Fort Langley y el corredor de Fraser Highway.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Willoughby es una zona de crecimiento más nueva y planificada en el Township of Langley, desarrollada en gran parte con viviendas recientes y tiendas locales. Langley, ciudad y municipio combinados, tiene una población de aproximadamente 162,000 y un ingreso medio por hogar de aproximadamente $101,500. El histórico Fort Langley, a orillas del Fraser River, ofrece un centro de pueblo más antiguo y contrastante dentro del mismo municipio.")
        + kcSec("Cómo moverse", "Los conductores utilizan Highway 1 y Fraser Highway para viajar por el Fraser Valley y hacia Surrey y Vancouver. Los autobuses locales y regionales prestan servicio a Willoughby y lo conectan con los centros cercanos. La extensión Surrey–Langley del SkyTrain está en construcción y aún no está en servicio.")
        + kcSec("Viviendas", "Willoughby es conocido por sus casas adosadas y condominios más nuevos, junto con algunas casas unifamiliares más nuevas. Más lejos en Langley, la oferta se amplía para incluir más casas unifamiliares y terrenos grandes. Langley tiene 42 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para hogares que buscan viviendas más nuevas en una comunidad planificada en el Fraser Valley. También es adecuado para personas que se sienten cómodas con un desplazamiento en automóvil mientras la extensión del SkyTrain sigue en construcción.")) +
      kcCard("Abbotsford — Old Town & Clearbrook",
        "El centro urbano más grande del Fraser Valley, que combina un centro histórico y la zona de Clearbrook con acceso al aeropuerto y conexiones por Highway 1.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Abbotsford es una ciudad importante del Fraser Valley, con un centro histórico a menudo llamado Old Town y la consolidada zona de Clearbrook al oeste. La ciudad tiene una población de aproximadamente 153,900 y un ingreso medio por hogar de aproximadamente $92,500. Mill Lake, con su parque y paseo entablado, ofrece un espacio verde central cerca de estos barrios.")
        + kcSec("Cómo moverse", "Highway 1 atraviesa Abbotsford y la conecta con Langley, Chilliwack y el resto de la región. El Abbotsford International Airport, conocido como YXX, presta servicio a la ciudad con vuelos programados. Los autobuses locales prestan servicio dentro de la ciudad y hacia las comunidades vecinas del Fraser Valley.")
        + kcSec("Viviendas", "Las viviendas en toda la ciudad incluyen casas unifamiliares, casas adosadas y condominios de baja altura. Las casas más antiguas son más comunes cerca del centro histórico, con urbanizaciones más nuevas en los bordes de la ciudad. Abbotsford tiene 50 escuelas en los datos abiertos, la cifra más alta entre las zonas de este conjunto de guías.")
        + kcSec("Para quién es ideal", "Es ideal para personas que buscan una ciudad del Fraser Valley con todos los servicios, con su propio aeropuerto y servicios hospitalarios. También es adecuado para hogares que buscan una gama más amplia de tipos de vivienda fuera del núcleo de Metro Vancouver.")) +
      kcCard("Delta — Ladner",
        "Un histórico pueblo pesquero y agrícola en Delta, con una pequeña calle principal, un entorno ribereño y viviendas en su mayoría de baja altura.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Ladner es una de las tres comunidades de Delta, junto con Tsawwassen y North Delta, y conserva un carácter de pueblo moldeado por la pesca y la agricultura. Delta en conjunto tiene una población de aproximadamente 110,700 y un ingreso medio por hogar de aproximadamente $108,000. Boundary Bay y Centennial Beach, en la zona más amplia de Delta, son destinos costeros muy conocidos.")
        + kcSec("Cómo moverse", "Los conductores llegan a Vancouver y Richmond a través de Highway 99 y el George Massey Tunnel. Los autobuses locales prestan servicio a Ladner y lo conectan con otras partes de Delta y con centros regionales de transporte. Andar en bicicleta es práctico en las calles locales planas y en las rutas de los diques.")
        + kcSec("Viviendas", "Las viviendas en Ladner y en todo Delta son en su mayoría casas unifamiliares y casas adosadas. El centro del pueblo tiene edificios de menor escala en lugar de desarrollos de gran altura. Delta tiene 37 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para personas que prefieren un centro de pueblo más pequeño al alcance de Vancouver y Richmond. También es adecuado para hogares que valoran calles residenciales planas y tranquilas y el acceso a la costa de Boundary Bay.")) +
      kcCard("New Westminster — Downtown",
        "La primera capital de British Columbia, una ciudad ribereña compacta con dos líneas de SkyTrain, un muelle histórico y una mezcla de torres y casas patrimoniales.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "New Westminster fue la primera capital de British Columbia y sigue siendo una ciudad histórica y compacta a orillas del Fraser River. Tiene una población de aproximadamente 78,900 y un ingreso medio por hogar de aproximadamente $82,000. Westminster Quay y el paseo ribereño son el eje del centro, mientras que Queen's Park es conocido por sus calles más antiguas y arboladas.")
        + kcSec("Cómo moverse", "Dos líneas de SkyTrain prestan servicio a la ciudad, la Expo Line y la Millennium Line, con cinco estaciones en total. Los autobuses conectan el centro con los demás barrios de la ciudad y los municipios cercanos. La ubicación central hace que viajar por carretera a Burnaby, Surrey y Coquitlam sea sencillo.")
        + kcSec("Viviendas", "Las viviendas del centro están dominadas por condominios de gran altura cerca de la ribera y de las estaciones de SkyTrain. En Queen's Park, el parque de viviendas está compuesto principalmente por casas patrimoniales en calles consolidadas. New Westminster tiene 18 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para personas que buscan un buen acceso al transporte rápido sin vivir en Vancouver o Burnaby. También es adecuado para quienes prefieren un centro urbano más pequeño e histórico con una mezcla de opciones de condominios y casas más antiguas.")) +
      kcCard("Port Moody — Moody Centre",
        "Una ciudad pequeña en la cabecera de Burrard Inlet, donde un centro comercial más antiguo se encuentra con Rocky Point Park y la costa de la ensenada.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Port Moody se encuentra en la cabecera de Burrard Inlet, rodeada de agua y colinas boscosas. Moody Centre es la zona comercial más antigua de la ciudad a lo largo de St. Johns Street, cerca de Rocky Point Park, en la ensenada. La costa, el muelle y los senderos del parque son un punto central para la comunidad.")
        + kcSec("Cómo moverse", "La extensión Evergreen de la Millennium Line del SkyTrain presta servicio a Port Moody, y el tren de cercanías West Coast Express también se detiene en la ciudad. Los autobuses conectan Moody Centre con el resto de las Tri-Cities. Los conductores utilizan St. Johns Street y Barnet Highway hacia Burnaby y Coquitlam.")
        + kcSec("Viviendas", "Las torres de condominios se concentran cerca de Inlet Centre, mientras que las casas adosadas y las casas unifamiliares se encuentran en Heritage Mountain y en las calles más antiguas de Moody Centre. Las viviendas generalmente son de menor densidad a medida que se alejan de las estaciones. Port Moody tiene 10 escuelas en el conjunto de datos.")
        + kcSec("Para quién es ideal", "Es ideal para personas que buscan acceso al SkyTrain y al tren de cercanías en una comunidad más pequeña junto a la ensenada. También es adecuado para hogares que valoran el fácil acceso a parques costeros y senderos boscosos.")) +
      kcCard("Maple Ridge — Haney",
        "Una comunidad del Fraser River entre las montañas Golden Ears y tierras agrícolas, con un centro histórico en Haney y un parque de viviendas en su mayoría de baja altura.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Haney es el centro urbano histórico de Maple Ridge, situado a lo largo del Fraser River bajo los picos Golden Ears. Maple Ridge tiene una población de aproximadamente 91,000 y un ingreso medio por hogar de aproximadamente $107,000. Golden Ears Provincial Park, uno de los parques grandes de la provincia, se encuentra justo al norte de la ciudad.")
        + kcSec("Cómo moverse", "El tren de cercanías West Coast Express conecta Maple Ridge con el centro de Vancouver entre semana. El Golden Ears Bridge cruza el Fraser River hacia Langley para los conductores. Los autobuses locales prestan servicio a Haney y a las zonas residenciales de la ciudad, y Highway 7 es la principal ruta por carretera de este a oeste.")
        + kcSec("Viviendas", "Las viviendas son en su mayoría casas unifamiliares y casas adosadas en toda la ciudad. La zona rural del este, que incluye Websters Corners y Whonnock, tiene terrenos grandes y lotes más amplios. Maple Ridge tiene 29 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para hogares que buscan más espacio y un entorno semirrural manteniendo una opción de tren de cercanías al centro. También es adecuado para personas que pasan tiempo al aire libre y quieren tener Golden Ears Provincial Park cerca de casa.")) +
      kcCard("Pitt Meadows — Town Centre",
        "La ciudad más pequeña de Metro Vancouver, una comunidad plana protegida por diques fluviales, de granjas, senderos y casas de baja altura entre Maple Ridge y Coquitlam.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Pitt Meadows es la ciudad más pequeña de Metro Vancouver, con una población de aproximadamente 19,400 y un ingreso medio por hogar de aproximadamente $103,000. Gran parte de la ciudad es tierra agrícola, incluidos campos de arándanos azules y arándanos rojos, protegida por diques a lo largo de los ríos Pitt y Alouette. Pitt Lake, al norte, es uno de los lagos de marea más grandes del mundo y un punto de referencia local muy conocido.")
        + kcSec("Cómo moverse", "El tren de cercanías West Coast Express se detiene en Pitt Meadows en su ruta entre Mission y el centro de Vancouver. Los senderos de los diques a lo largo de los ríos Pitt y Alouette se utilizan ampliamente para caminar y andar en bicicleta. Los conductores utilizan Lougheed Highway y el Pitt River Bridge hacia Coquitlam y Maple Ridge.")
        + kcSec("Viviendas", "Las viviendas son principalmente casas adosadas y casas unifamiliares concentradas en la zona urbana del centro de la ciudad. Fuera de ese núcleo, el uso del suelo es en gran parte agrícola, con propiedades rurales. Pitt Meadows tiene 5 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para personas que prefieren el ambiente de una ciudad pequeña con tierras agrícolas y senderos fluviales a su puerta. También es adecuado para quienes viajan diariamente al trabajo y pueden planificar según el horario del West Coast Express para sus trayectos al centro de Vancouver.")) +
      kcCard("White Rock — Marine Drive",
        "Una ciudad costera pequeña en Semiahmoo Bay, centrada en su muelle y el paseo de Marine Drive, con una comunidad de jubilados de larga tradición.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "White Rock es una ciudad costera pequeña en Semiahmoo Bay, conocida por su muelle y el paseo a lo largo de Marine Drive. Su área postal tiene una población de aproximadamente 21,800 y un ingreso medio por hogar de aproximadamente $73,000. La zona costera, con sus restaurantes y su playa, es el centro de la vida local, y la ciudad tiene una comunidad orientada a los jubilados de larga tradición.")
        + kcSec("Cómo moverse", "Marine Drive es la principal vía costera, y King George Boulevard conecta White Rock con South Surrey y Highway 99. Los autobuses locales prestan servicio a la ciudad y la conectan con los barrios cercanos de Surrey y los centros de transporte. Caminar es práctico a lo largo del paseo plano y la zona del muelle.")
        + kcSec("Viviendas", "Las viviendas son en su mayoría casas unifamiliares más antiguas en la ladera sobre la playa, junto con condominios de baja altura cerca de la costa. Las torres más grandes son limitadas en comparación con la vecina South Surrey. Muchos estudiantes de la zona asisten a escuelas en la cercana South Surrey, ya que solo un número reducido de escuelas se encuentra dentro de la propia ciudad.")
        + kcSec("Para quién es ideal", "Es ideal para personas que quieren vivir directamente junto al mar en una comunidad costera pequeña y transitable a pie. También es adecuado para jubilados y otras personas que prefieren un ritmo más tranquilo fuera de los centros más grandes de la región.")) +
      kcCard("Mission — Downtown",
        "Una ciudad del Fraser River en la orilla norte del río, con un centro histórico, urbanizaciones en las laderas y la terminal del West Coast Express.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Mission se encuentra en la orilla norte del Fraser River, frente a Abbotsford, con un centro histórico a lo largo de las llanuras ribereñas. La ciudad tiene una población de aproximadamente 44,100 y un ingreso medio por hogar de aproximadamente $96,500. Westminster Abbey, situada en una colina sobre la ciudad, y la zona de Stave Falls, al noroeste, son puntos de referencia locales ampliamente reconocidos.")
        + kcSec("Cómo moverse", "Mission es la terminal oriental del tren de cercanías West Coast Express hacia el centro de Vancouver. Los conductores cruzan el Fraser River hacia Abbotsford por un puente y utilizan Highway 7 y Highway 11 para los viajes regionales. Los autobuses locales prestan servicio dentro de la ciudad.")
        + kcSec("Viviendas", "Las viviendas son principalmente casas unifamiliares, con urbanizaciones más nuevas construidas en las colinas sobre el centro, incluida la zona de Hatzic. Las casas más antiguas se concentran más cerca del centro histórico y del río. Mission tiene 17 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para hogares que buscan una ciudad más pequeña del Fraser Valley con una terminal directa de tren de cercanías. También es adecuado para personas que prefieren zonas residenciales en las laderas con vistas al Fraser River y al valle.")) +
      kcCard("Chilliwack — Garrison Crossing",
        "Un barrio planificado en una antigua base militar remodelada en el este del Fraser Valley, cerca del Vedder River y de actividades recreativas de montaña.",
        "Leer la guía", "Cerrar",
        kcSec("Carácter", "Garrison Crossing es un barrio planificado construido en una antigua base militar remodelada en Chilliwack, en el este del Fraser Valley. Chilliwack tiene una población de aproximadamente 100,400 y un ingreso medio por hogar de aproximadamente $83,500. Cultus Lake y Chilliwack Lake se encuentran al sur, y las tierras agrícolas en actividad aún rodean gran parte de la ciudad.")
        + kcSec("Cómo moverse", "Highway 1 conecta Chilliwack con Abbotsford, Langley y el resto del Fraser Valley. Los autobuses locales prestan servicio a Garrison Crossing y lo conectan con el centro de Chilliwack y otros barrios. El propio barrio fue diseñado con calles transitables a pie, parques y un pequeño centro comercial tipo pueblo.")
        + kcSec("Viviendas", "Garrison Crossing presenta una mezcla planificada de casas unifamiliares y casas adosadas en un paisaje urbano más nuevo y uniforme. En Chilliwack en general, las viviendas también incluyen algunos condominios y casas más antiguas cerca del centro. Chilliwack tiene 35 escuelas en los datos abiertos.")
        + kcSec("Para quién es ideal", "Es ideal para hogares que buscan un barrio más nuevo y planificado en una ciudad más pequeña del Fraser Valley. También es adecuado para personas que valoran el acceso cercano a lagos, ríos y actividades recreativas de montaña los fines de semana."))
    };

    function kcVerify(t){ return '<p class="kc-verify">' + t + "</p>"; }
    var KC_EXPLAIN = {
    en:
      kcCard("How BC's property transfer tax works",
        "The provincial tax most buyers pay on top of the purchase price — how it's calculated, and who can be exempt.",
        "Read explainer", "Close",
        "<p>The property transfer tax (PTT) is a BC provincial tax the buyer pays when a property transfer is registered with the Land Title and Survey Authority. It's charged on top of the purchase price and is normally paid on completion day — so it belongs in your closing-cost budget, not your mortgage.</p>"
        + "<p>The tax is tiered, based on the property's fair market value: 1% on the first $200,000, 2% on the portion between $200,000 and $2,000,000, and 3% on the portion above $2,000,000. An additional 2% applies to the residential portion of a property's value above $3,000,000.</p>"
        + "<p>Exemptions can remove some or all of the tax. Qualifying first-time buyers may receive a full or partial exemption, newly built homes have their own exemption program, and an additional property transfer tax applies to foreign buyers in specified areas of BC. Each program has its own eligibility rules and value limits.</p>"
        + kcVerify("Rates, thresholds and exemption rules change — verify the current figures at the official source: gov.bc.ca (property transfer tax)."))
      + kcCard("The federal mortgage stress test, explained",
        "Why you have to qualify for your mortgage at a higher rate than the one you'll actually pay.",
        "Read explainer", "Close",
        "<p>The stress test is a federal affordability check: your lender must confirm you could still afford your payments if rates rose. You qualify at a higher qualifying rate — the greater of your actual contract rate plus 2%, or the federal benchmark rate.</p>"
        + "<p>The test applies to insured mortgages under federal mortgage rules, and to uninsured mortgages at federally regulated lenders under OSFI's B-20 guideline. Passing the test doesn't change your real payment — you pay at your contract rate. It simply means your budget has a built-in cushion, and it's why the maximum mortgage you qualify for is smaller than a calculation at the contract rate alone would suggest.</p>"
        + kcVerify("Verify the current benchmark rate and rules at the official source: CMHC (cmhc-schl.gc.ca)."))
      + kcCard("Subjects (conditions) in a BC offer",
        "The conditions that protect a buyer between writing an offer and the deal becoming firm.",
        "Read explainer", "Close",
        "<p>In BC, an offer is usually written as a Contract of Purchase and Sale with subjects — conditions that must be satisfied by a deadline (subject removal) before the contract becomes firm. Subjects protect the buyer while they do their due diligence; the seller knows the deal isn't final until they're removed.</p>"
        + "<p>Common subjects include financing (the lender fully approves the mortgage), a home inspection the buyer is satisfied with, review of strata documents for strata properties (minutes, financials, depreciation report, bylaws), review of title, and sometimes the sale of the buyer's existing home.</p>"
        + "<p>If a subject genuinely can't be satisfied, the buyer can usually let the contract end and recover the deposit, as the contract provides. Once subjects are removed and the deposit is paid, the contract is binding — walking away can mean losing the deposit and facing legal claims, which is why conditions should never be waived casually.</p>"
        + kcVerify("Verify current consumer guidance at the official source: BC Financial Services Authority — BCFSA (bcfsa.ca)."))
      + kcCard("Strata vs freehold ownership",
        "Two different ways of owning a home in BC — and why the difference shapes your costs and rules.",
        "Read explainer", "Close",
        "<p><b>Freehold</b> means you own the land and the building outright — the typical detached house. There's no strata corporation and no monthly strata fee; you're responsible for all maintenance, repairs and insurance yourself, and municipal bylaws are the main rules that apply.</p>"
        + "<p><b>Strata</b> ownership means you own your individual unit (a strata lot) plus a shared interest in the property's common areas — roofs, hallways, grounds, amenities — which are owned and managed collectively through a strata corporation made up of all the owners. Most condos in BC, and many townhouses, are strata.</p>"
        + "<p>Strata owners pay monthly strata fees that fund building insurance, maintenance and a contingency reserve fund for future major repairs, and they live under the strata's bylaws and rules, which can restrict things like pets, rentals and renovations. Before buying a strata property, reviewing the strata documents is one of the most important steps in the process.</p>"
        + kcVerify("Verify the current rules at the official source: gov.bc.ca (strata housing) and BCFSA (bcfsa.ca).")),
    fa:
      kcCard("مالیات انتقال ملک BC چگونه کار می‌کند",
        "مالیات استانی‌ای که بیشتر خریداران علاوه بر قیمت خرید می‌پردازند — نحوه‌ی محاسبه و اینکه چه کسانی معاف می‌شوند.",
        "خواندن توضیح", "بستن",
        "<p>مالیات انتقال ملک (PTT) مالیات استانی BC است که خریدار هنگام ثبت انتقال ملک در اداره‌ی ثبت اسناد زمین (Land Title) می‌پردازد. این مالیات علاوه بر قیمت خرید است و معمولاً در روز تکمیل معامله پرداخت می‌شود — پس جای آن در بودجه‌ی هزینه‌های پایانی است، نه در وام.</p>"
        + "<p>این مالیات پلکانی و بر اساس ارزش منصفانه‌ی بازار ملک محاسبه می‌شود: ۱٪ روی ۲۰۰ هزار دلار اول، ۲٪ روی بخش بین ۲۰۰ هزار تا ۲ میلیون دلار، و ۳٪ روی بخش بالای ۲ میلیون دلار. ۲٪ اضافی هم روی بخش مسکونیِ ارزش ملک بالاتر از ۳ میلیون دلار اعمال می‌شود.</p>"
        + "<p>معافیت‌ها می‌توانند بخشی یا همه‌ی این مالیات را حذف کنند. خریداران اولی واجد شرایط ممکن است معافیت کامل یا نسبی بگیرند، خانه‌های نوساز برنامه‌ی معافیت جداگانه‌ی خود را دارند، و در مناطق مشخصی از BC مالیات اضافی انتقال برای خریداران خارجی اعمال می‌شود. هر برنامه قواعد احراز شرایط و سقف‌های قیمتی خودش را دارد.</p>"
        + kcVerify("نرخ‌ها، آستانه‌ها و قواعد معافیت تغییر می‌کنند — ارقام و قواعد جاری را در منبع رسمی بررسی کنید: gov.bc.ca (مالیات انتقال ملک)."))
      + kcCard("تست استرس وام مسکن فدرال، به زبان ساده",
        "چرا باید برای وام‌تان با نرخی بالاتر از نرخ واقعی‌تان واجد شرایط شوید.",
        "خواندن توضیح", "بستن",
        "<p>تست استرس یک بررسی فدرال توان پرداخت است: وام‌دهنده باید مطمئن شود که اگر نرخ‌ها بالا بروند، باز هم از پس اقساط برمی‌آیید. شما با یک «نرخ احتسابی» بالاتر واجد شرایط می‌شوید — بیشترِ نرخ قرارداد واقعی‌تان به‌علاوه‌ی ۲٪، یا نرخ معیار فدرال.</p>"
        + "<p>این تست برای وام‌های بیمه‌شده تحت قواعد فدرال وام اعمال می‌شود و برای وام‌های بدون بیمه در وام‌دهنده‌های تحت نظارت فدرال، تحت دستورالعمل B-20 نهاد OSFI. قبولی در تست، قسط واقعی‌تان را تغییر نمی‌دهد — شما با نرخ قراردادتان پرداخت می‌کنید؛ فقط یعنی بودجه‌تان یک حاشیه‌ی اطمینان داخلی دارد و به همین دلیل حداکثر وامی که واجد شرایطش می‌شوید کمتر از محاسبه‌ی صرف با نرخ قرارداد است.</p>"
        + kcVerify("نرخ معیار و قواعد جاری را در منبع رسمی بررسی کنید: CMHC ‏(cmhc-schl.gc.ca)."))
      + kcCard("شروط (subjects) در یک پیشنهاد خرید در BC",
        "شرط‌هایی که بین نوشتن پیشنهاد و قطعی‌شدن معامله از خریدار محافظت می‌کنند.",
        "خواندن توضیح", "بستن",
        "<p>در BC، پیشنهاد خرید معمولاً به‌صورت «قرارداد خرید و فروش» با شروط نوشته می‌شود — شرط‌هایی که باید تا یک مهلت مشخص (برداشتن شروط) برآورده شوند تا قرارداد قطعی شود. شروط در مدت بررسی دقیق (due diligence) از خریدار محافظت می‌کنند و فروشنده می‌داند معامله تا برداشته‌شدن آن‌ها نهایی نیست.</p>"
        + "<p>شروط رایج شامل تأمین مالی (تأیید کامل وام توسط وام‌دهنده)، بازرسی خانه با نتیجه‌ی رضایت‌بخش برای خریدار، بررسی اسناد ساختمان برای ملک‌های strata (صورت‌جلسه‌ها، صورت‌های مالی، گزارش استهلاک، اساسنامه)، بررسی سند مالکیت، و گاهی فروش خانه‌ی فعلی خریدار است.</p>"
        + "<p>اگر شرطی واقعاً برآورده نشود، خریدار معمولاً می‌تواند بگذارد قرارداد پایان یابد و ودیعه‌اش را، طبق مفاد قرارداد، پس بگیرد. اما وقتی شروط برداشته شد و ودیعه پرداخت شد، قرارداد الزام‌آور است — عقب‌نشینی می‌تواند یعنی از دست دادن ودیعه و ادعاهای حقوقی؛ به همین دلیل هرگز نباید شروط را سرسری حذف کرد.</p>"
        + kcVerify("راهنمای جاری مصرف‌کنندگان را در منبع رسمی بررسی کنید: سازمان خدمات مالی BC — ‏BCFSA ‏(bcfsa.ca)."))
      + kcCard("مالکیت strata در برابر freehold",
        "دو شیوه‌ی متفاوت مالکیت خانه در BC — و اینکه چرا این تفاوت هزینه‌ها و قواعد شما را شکل می‌دهد.",
        "خواندن توضیح", "بستن",
        "<p><b>مالکیت آزاد (freehold)</b> یعنی زمین و ساختمان کاملاً مال شماست — نمونه‌ی معمولش خانه‌ی مستقل است. شرکت مدیریت ساختمان و شارژ ماهانه‌ای در کار نیست؛ همه‌ی نگهداری، تعمیرات و بیمه با خودتان است و قواعد اصلی همان مقررات شهرداری است.</p>"
        + "<p><b>مالکیت strata</b> یعنی شما مالک واحد خودتان (strata lot) هستید به‌علاوه‌ی سهمی مشترک از بخش‌های مشترک ملک — سقف، راهروها، محوطه و امکانات — که به‌صورت جمعی از طریق شرکت strata متشکل از همه‌ی مالکان اداره می‌شود. بیشتر آپارتمان‌های BC و بسیاری از تاون‌هاوس‌ها strata هستند.</p>"
        + "<p>مالکان strata شارژ ماهانه می‌پردازند که بیمه‌ی ساختمان، نگهداری و صندوق ذخیره‌ی احتیاطی برای تعمیرات اساسی آینده را تأمین می‌کند و تابع اساسنامه و قواعد strata هستند که می‌تواند چیزهایی مثل حیوان خانگی، اجاره‌دادن و بازسازی را محدود کند. پیش از خرید ملک strata، بررسی اسناد ساختمان یکی از مهم‌ترین قدم‌هاست.</p>"
        + kcVerify("قواعد جاری را در منبع رسمی بررسی کنید: gov.bc.ca (مسکن strata) و BCFSA ‏(bcfsa.ca).")),
    hi:
      kcCard("BC का संपत्ति हस्तांतरण कर कैसे काम करता है",
        "वह प्रांतीय कर जो अधिकांश खरीदार खरीद कीमत के ऊपर देते हैं — यह कैसे गिना जाता है, और कौन छूट पा सकता है।",
        "व्याख्या पढ़ें", "बंद करें",
        "<p>संपत्ति हस्तांतरण कर (PTT) एक BC प्रांतीय कर है जो खरीदार तब देता है जब संपत्ति का हस्तांतरण लैंड टाइटल कार्यालय में पंजीकृत होता है। यह खरीद कीमत के ऊपर लगता है और आमतौर पर समापन दिवस पर चुकाया जाता है — इसलिए यह आपकी समापन लागत के बजट में आता है, मॉर्गेज में नहीं।</p>"
        + "<p>यह कर संपत्ति के उचित बाज़ार मूल्य पर स्तरों में लगता है: पहले $200,000 पर 1%, $200,000 से $2,000,000 के हिस्से पर 2%, और $2,000,000 से ऊपर के हिस्से पर 3%। संपत्ति के मूल्य के $3,000,000 से ऊपर के आवासीय हिस्से पर अतिरिक्त 2% भी लगता है।</p>"
        + "<p>छूटें इस कर का कुछ हिस्सा या पूरा कर हटा सकती हैं। पात्र पहली बार खरीदार पूर्ण या आंशिक छूट पा सकते हैं, नए बने घरों का अपना छूट कार्यक्रम है, और BC के निर्दिष्ट क्षेत्रों में विदेशी खरीदारों पर अतिरिक्त हस्तांतरण कर लगता है। हर कार्यक्रम के अपने पात्रता नियम और मूल्य सीमाएँ हैं।</p>"
        + kcVerify("दरें, सीमाएँ और छूट नियम बदलते रहते हैं — वर्तमान आंकड़े आधिकारिक स्रोत पर जाँचें: gov.bc.ca (संपत्ति हस्तांतरण कर)।"))
      + kcCard("संघीय मॉर्गेज स्ट्रेस टेस्ट, सरल शब्दों में",
        "आपको अपने मॉर्गेज के लिए उस दर से ऊँची दर पर योग्य क्यों होना पड़ता है जो आप वास्तव में चुकाएँगे।",
        "व्याख्या पढ़ें", "बंद करें",
        "<p>स्ट्रेस टेस्ट एक संघीय सामर्थ्य जाँच है: आपके ऋणदाता को यह पुष्टि करनी होती है कि दरें बढ़ने पर भी आप किस्तें चुका सकेंगे। आप ऊँची योग्यता दर पर योग्य होते हैं — आपकी वास्तविक अनुबंध दर + 2%, या संघीय बेंचमार्क दर, जो भी अधिक हो।</p>"
        + "<p>यह टेस्ट संघीय मॉर्गेज नियमों के तहत बीमित मॉर्गेज पर, और संघीय नियमन वाले ऋणदाताओं पर OSFI के B-20 दिशानिर्देश के तहत गैर-बीमित मॉर्गेज पर लागू होता है। टेस्ट पास करने से आपकी असली किस्त नहीं बदलती — आप अनुबंध दर पर ही चुकाते हैं। इसका मतलब बस इतना है कि आपके बजट में अंतर्निहित सुरक्षा है, और यही कारण है कि आप जितने मॉर्गेज के लिए योग्य होते हैं वह केवल अनुबंध दर की गणना से कम होता है।</p>"
        + kcVerify("वर्तमान बेंचमार्क दर और नियम आधिकारिक स्रोत पर जाँचें: CMHC (cmhc-schl.gc.ca)।"))
      + kcCard("BC ऑफ़र में शर्तें (subjects)",
        "वे शर्तें जो ऑफ़र लिखने और सौदा पक्का होने के बीच खरीदार की रक्षा करती हैं।",
        "व्याख्या पढ़ें", "बंद करें",
        "<p>BC में ऑफ़र आमतौर पर ख़रीद-बिक्री अनुबंध (Contract of Purchase and Sale) के रूप में शर्तों (subjects) के साथ लिखा जाता है — ऐसी शर्तें जो एक समय-सीमा (subject removal) तक पूरी होनी चाहिए, तभी अनुबंध पक्का होता है। ये शर्तें खरीदार की सावधानीपूर्वक जाँच (due diligence) के दौरान उसकी रक्षा करती हैं, और विक्रेता जानता है कि शर्तें हटने तक सौदा अंतिम नहीं है।</p>"
        + "<p>आम शर्तों में वित्तपोषण (ऋणदाता मॉर्गेज को पूरी तरह मंज़ूरी दे), खरीदार को संतुष्ट करने वाला गृह निरीक्षण, स्ट्राटा प्रॉपर्टी के लिए स्ट्राटा दस्तावेज़ों की समीक्षा (कार्यवृत्त, वित्तीय विवरण, मूल्यह्रास रिपोर्ट, उपनियम), टाइटल की समीक्षा, और कभी-कभी खरीदार के मौजूदा घर की बिक्री शामिल हैं।</p>"
        + "<p>यदि कोई शर्त सचमुच पूरी न हो सके, तो खरीदार आमतौर पर अनुबंध को समाप्त होने दे सकता है और, अनुबंध के अनुसार, जमा वापस पा सकता है। लेकिन शर्तें हट जाने और जमा दे दिए जाने के बाद अनुबंध बाध्यकारी हो जाता है — पीछे हटने का अर्थ जमा खोना और कानूनी दावे हो सकते हैं, इसलिए शर्तें कभी लापरवाही से नहीं हटानी चाहिए।</p>"
        + kcVerify("वर्तमान उपभोक्ता मार्गदर्शन आधिकारिक स्रोत पर जाँचें: BC Financial Services Authority — BCFSA (bcfsa.ca)।"))
      + kcCard("स्ट्राटा बनाम फ़्रीहोल्ड स्वामित्व",
        "BC में घर के मालिक होने के दो अलग तरीके — और यह अंतर आपकी लागतों व नियमों को कैसे आकार देता है।",
        "व्याख्या पढ़ें", "बंद करें",
        "<p><b>फ़्रीहोल्ड</b> का अर्थ है कि ज़मीन और इमारत पूरी तरह आपकी है — इसका सामान्य उदाहरण अलग मकान है। कोई स्ट्राटा कॉर्पोरेशन नहीं, कोई मासिक स्ट्राटा शुल्क नहीं; सारा रखरखाव, मरम्मत और बीमा आपकी ज़िम्मेदारी है, और मुख्य नियम नगरपालिका के उपनियम होते हैं।</p>"
        + "<p><b>स्ट्राटा</b> स्वामित्व का अर्थ है कि आप अपनी व्यक्तिगत इकाई (strata lot) के मालिक हैं, साथ ही संपत्ति के साझा क्षेत्रों — छत, गलियारे, मैदान, सुविधाएँ — में साझा हित रखते हैं, जिनका स्वामित्व और प्रबंधन सभी मालिकों से बनी स्ट्राटा कॉर्पोरेशन के माध्यम से सामूहिक रूप से होता है। BC के अधिकांश कॉन्डो, और कई टाउनहाउस, स्ट्राटा हैं।</p>"
        + "<p>स्ट्राटा मालिक मासिक शुल्क देते हैं जो भवन बीमा, रखरखाव और भविष्य की बड़ी मरम्मत के लिए आकस्मिक आरक्षित निधि को वित्त देता है, और वे स्ट्राटा के उपनियमों व नियमों के अधीन रहते हैं, जो पालतू जानवरों, किराए और नवीनीकरण जैसी चीज़ें सीमित कर सकते हैं। स्ट्राटा प्रॉपर्टी खरीदने से पहले स्ट्राटा दस्तावेज़ों की समीक्षा इस प्रक्रिया के सबसे महत्वपूर्ण चरणों में से एक है।</p>"
        + kcVerify("वर्तमान नियम आधिकारिक स्रोत पर जाँचें: gov.bc.ca (स्ट्राटा आवास) और BCFSA (bcfsa.ca)।")),
    zh:
      kcCard("BC 房产转让税如何运作",
        "大多数买家在房价之外还要缴纳的省级税——如何计算,以及谁可以获得减免。",
        "阅读解析", "收起",
        "<p>房产转让税(PTT)是 BC 省的一种税,买家在土地产权局(Land Title)登记产权转让时缴纳。它在房价之外另行收取,通常在成交日支付——因此应计入您的过户费用预算,而不是房贷。</p>"
        + "<p>该税按房产公平市场价值分级征收:首 $200,000 按 1%,$200,000 至 $2,000,000 的部分按 2%,$2,000,000 以上的部分按 3%。房产价值中 $3,000,000 以上的住宅部分还另加 2%。</p>"
        + "<p>减免可以免除部分或全部税款。符合条件的首次购房者可获得全额或部分减免;新建房屋有其专门的减免计划;在 BC 的指定地区,外国买家还需缴纳额外转让税。每个计划都有自己的资格规则和价值上限。</p>"
        + kcVerify("税率、门槛和减免规则会变化——请在官方来源核实当前数据:gov.bc.ca(房产转让税)。"))
      + kcCard("联邦房贷压力测试解析",
        "为什么您必须按高于实际利率的水平通过房贷资格审核。",
        "阅读解析", "收起",
        "<p>压力测试是一项联邦负担能力审查:贷款机构必须确认,即使利率上升,您仍能负担月供。您需要按一个较高的“审核利率”通过审核——即您的实际合同利率加 2% 与联邦基准利率中的较高者。</p>"
        + "<p>该测试适用于联邦房贷规则下的保险型房贷,以及受联邦监管的贷款机构依据 OSFI 的 B-20 指引发放的非保险型房贷。通过测试并不会改变您的实际月供——您仍按合同利率还款。它只是意味着您的预算内置了缓冲垫,这也是您能获得的最高贷款额小于仅按合同利率计算结果的原因。</p>"
        + kcVerify("请在官方来源核实当前基准利率和规则:CMHC(cmhc-schl.gc.ca)。"))
      + kcCard("BC 报价中的附带条件(subjects)",
        "在写下报价到交易成为定局之间保护买家的条件。",
        "阅读解析", "收起",
        "<p>在 BC,报价通常以《买卖合同》(Contract of Purchase and Sale)的形式写成,并带有附带条件(subjects)——这些条件必须在截止日期(条件移除日)前满足,合同才能成为定局。在买家进行尽职调查期间,这些条件起到保护作用;卖家也知道,在条件移除之前,交易尚未最终确定。</p>"
        + "<p>常见的条件包括:贷款(贷款机构完全批准房贷)、令买家满意的验房、对物业管理类房产审阅物业文件(会议记录、财务报表、折旧报告、附例)、审阅产权,以及有时包括买家先出售自有房屋。</p>"
        + "<p>如果某项条件确实无法满足,买家通常可以让合同按其条款终止并取回定金。但一旦条件被移除、定金已支付,合同即具约束力——退出可能意味着损失定金并面临法律索赔,因此绝不应草率放弃条件。</p>"
        + kcVerify("请在官方来源核实当前消费者指南:BC 金融服务管理局——BCFSA(bcfsa.ca)。"))
      + kcCard("物业管理(strata)与完全产权(freehold)的区别",
        "在 BC 拥有住房的两种不同方式——以及这一区别为何会影响您的费用和规则。",
        "阅读解析", "收起",
        "<p><b>完全产权(freehold)</b>意味着您完全拥有土地和建筑——典型的独立屋就是如此。没有物业公司,也没有每月管理费;所有维护、维修和保险都由您自己负责,主要适用的规则是市政附例。</p>"
        + "<p><b>物业管理(strata)</b>产权意味着您拥有自己的独立单位(strata lot),同时对房产的公共区域——屋顶、走廊、场地、配套设施——拥有共同权益,这些区域由全体业主组成的物业公司集体拥有和管理。BC 的大多数公寓以及许多联排别墅都是 strata 形式。</p>"
        + "<p>strata 业主每月缴纳管理费,用于建筑保险、维护以及为未来重大维修设立的应急储备金,并且必须遵守 strata 的附例和规则,这些规则可能限制养宠物、出租和装修等事项。购买 strata 房产前,审阅物业文件是整个过程中最重要的步骤之一。</p>"
        + kcVerify("请在官方来源核实当前规则:gov.bc.ca(strata 住房)与 BCFSA(bcfsa.ca)。"))
    };
    function renderKnowledge(){
      $("kcAreas").innerHTML = KC_AREAS[lang] || KC_AREAS.en;
      $("kcExplain").innerHTML = KC_EXPLAIN[lang] || KC_EXPLAIN.en;
    }
    /* ---------- shared numeric input helper (from the buy-vs-rent module) ---------- */
    function numVal(id, d){ var x = parseFloat($(id).value); return isNaN(x) ? d : x; }
    /* ---------- AI tools dropdown ---------- */
    var toolsBtn = $("toolsBtn"), toolsList = $("toolsList");
    function closeTools(){ toolsList.classList.remove("open"); toolsBtn.setAttribute("aria-expanded", "false"); }
    toolsBtn.addEventListener("click", function(e){ e.stopPropagation(); var open = toolsList.classList.toggle("open"); toolsBtn.setAttribute("aria-expanded", open ? "true" : "false"); });
    document.addEventListener("click", function(e){ if (!$("toolsMenu").contains(e.target)) closeTools(); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeTools(); });
    toolsList.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", closeTools); });
    /* ---------- Live AI chat strings (site answers first, web search beyond the site) ---------- */
    var I18N12 = {
    en:{ai_sub:"Site answers first — web search for current market questions",
      as_sub:"Ask about buying a home in BC — the steps, down payments, taxes, the stress test, strata and more. Answers come from this page's guide and calculators; for current market questions the site doesn't cover, the assistant searches the web and answers briefly, with sources.",
      as_welcome:"Hi! I can chat about buying a home in BC — the steps, minimum down payments, property transfer tax and annual property taxes, closing costs, the FHSA, the stress test, GDS/TDS ratios, CMHC insurance, offer subjects, strata fees, neighbourhoods and typical rents. For questions this site doesn't cover — like comparing the Ontario and BC markets or the latest monthly numbers — I search the web and answer briefly, with sources. Pick a suggestion below or type your own question.",
      ai_thinking:"Thinking…",ai_sources:"Sources",
      ai_greet:"Hello! Great to meet you. Ask me anything about buying a home in BC — the steps, down payments, taxes, strata — or about the housing market; if the answer isn't on this site, I'll look it up on the web and reply briefly, with sources.",
      ai_thanks:"You're welcome! If anything else comes up about buying a home in BC, just ask.",
      ai_err:"I couldn't reach the live web search just now, so for the moment I can only answer from this site's own content. Try again in a little while — or ask me about the buying steps, down payments, taxes, the stress test, strata fees, or the sample listings here."},
    fa:{ai_sub:"اول پاسخ از همین سایت — برای پرسش‌های روز بازار، جست‌وجو در وب",
      as_sub:"درباره‌ی خرید خانه در BC بپرسید — مراحل، پیش‌پرداخت، مالیات، تست استرس، شارژ ساختمان و بیشتر. پاسخ‌ها از راهنما و ماشین‌حساب‌های همین صفحه می‌آیند؛ برای پرسش‌های روز بازار که این سایت پوشش نمی‌دهد، دستیار در وب جست‌وجو می‌کند و کوتاه و با ذکر منبع پاسخ می‌دهد.",
      as_welcome:"سلام! می‌تونم درباره‌ی خرید خانه در BC گپ بزنم — مراحل خرید، حداقل پیش‌پرداخت، مالیات انتقال ملک و مالیات سالانه‌ی ملک، هزینه‌های پایانی، FHSA، تست استرس، نسبت‌های GDS/TDS، بیمه‌ی CMHC، شروط پیشنهاد، شارژ ساختمان، محله‌ها و اجاره‌های معمول. برای پرسش‌هایی که این سایت پوشش نمی‌ده — مثل مقایسه‌ی بازار انتاریو و BC یا تازه‌ترین آمار ماهانه — در وب جست‌وجو می‌کنم و کوتاه و با ذکر منبع جواب می‌دم. یکی از پیشنهادهای زیر رو انتخاب کن یا سؤال‌تو بنویس.",
      ai_thinking:"در حال فکر کردن…",ai_sources:"منابع",
      ai_greet:"سلام! خوش اومدی. هر سؤالی درباره‌ی خرید خانه در BC داری بپرس — مراحل، پیش‌پرداخت، مالیات، شارژ ساختمان — یا درباره‌ی بازار مسکن؛ اگه جوابش توی این سایت نباشه، توی وب جست‌وجوش می‌کنم و کوتاه و با ذکر منبع جواب می‌دم.",
      ai_thanks:"خواهش می‌کنم! اگه سؤال دیگه‌ای درباره‌ی خرید خانه در BC داشتی، در خدمتم.",
      ai_err:"الان نتونستم به جست‌وجوی زنده‌ی وب وصل بشم، پس فعلاً فقط می‌تونم از محتوای همین سایت جواب بدم. چند لحظه‌ی دیگه دوباره امتحان کن — یا درباره‌ی مراحل خرید، پیش‌پرداخت، مالیات، تست استرس، شارژ ساختمان یا فایل‌های نمونه‌ی همین‌جا بپرس."},
    hi:{ai_sub:"पहले इस साइट से उत्तर — ताज़ा बाज़ार सवालों के लिए वेब खोज",
      as_sub:"BC में घर खरीदने के बारे में पूछें — चरण, डाउन पेमेंट, कर, स्ट्रेस टेस्ट, स्ट्राटा और बहुत कुछ। उत्तर इस पेज की मार्गदर्शिका और कैलकुलेटरों से आते हैं; ताज़ा बाज़ार सवालों के लिए, जो यह साइट कवर नहीं करती, सहायक वेब पर खोजकर स्रोतों के साथ संक्षिप्त उत्तर देता है।",
      as_welcome:"नमस्ते! मैं BC में घर खरीदने पर बातचीत कर सकता हूँ — खरीद के चरण, न्यूनतम डाउन पेमेंट, संपत्ति हस्तांतरण कर और वार्षिक संपत्ति कर, समापन लागतें, FHSA, स्ट्रेस टेस्ट, GDS/TDS अनुपात, CMHC बीमा, ऑफ़र की शर्तें, स्ट्राटा शुल्क, इलाके और सामान्य किराए। जिन सवालों का जवाब इस साइट पर नहीं है — जैसे ओंटारियो और BC के बाज़ारों की तुलना या ताज़ा मासिक आंकड़े — उनके लिए मैं वेब पर खोजकर स्रोतों के साथ संक्षिप्त उत्तर देता हूँ। नीचे दिए सुझावों में से चुनें या अपना प्रश्न लिखें।",
      ai_thinking:"सोच रहा हूँ…",ai_sources:"स्रोत",
      ai_greet:"नमस्ते! आपसे मिलकर खुशी हुई। BC में घर खरीदने के बारे में कुछ भी पूछें — चरण, डाउन पेमेंट, कर, स्ट्राटा — या आवास बाज़ार के बारे में; अगर जवाब इस साइट पर न हो, तो मैं वेब पर खोजकर स्रोतों के साथ संक्षिप्त उत्तर दूँगा।",
      ai_thanks:"आपका स्वागत है! BC में घर खरीदने के बारे में कोई और सवाल हो तो बेझिझक पूछें।",
      ai_err:"मैं अभी लाइव वेब खोज तक नहीं पहुँच पाया, इसलिए फ़िलहाल केवल इस साइट की सामग्री से उत्तर दे सकता हूँ। थोड़ी देर बाद फिर कोशिश करें — या खरीद के चरणों, डाउन पेमेंट, करों, स्ट्रेस टेस्ट, स्ट्राटा शुल्क या यहाँ की नमूना लिस्टिंग के बारे में पूछें।"},
    zh:{ai_sub:"先查本站——最新市场问题联网搜索",
      as_sub:"咨询在 BC 买房的问题——步骤、首付、税费、压力测试、物业管理等。答案来自本页的指南和计算器；对于本站未覆盖的最新市场问题，助手会联网搜索并简要作答、附上来源。",
      as_welcome:"您好！我可以和您聊在 BC 买房——购房步骤、最低首付、房产转让税和年度地税、过户费用、FHSA、压力测试、GDS/TDS 比率、CMHC 保险、报价条件、物业管理费、社区和典型租金。对于本站没有覆盖的问题——比如比较安大略省与 BC 的市场，或最新月度数据——我会联网搜索并简明作答、附上来源。请选择下方的建议问题，或直接输入您的问题。",
      ai_thinking:"思考中…",ai_sources:"来源",
      ai_greet:"您好！很高兴见到您。关于在 BC 买房的任何问题都可以问我——步骤、首付、税费、物业管理费——或者市场行情；如果本站没有，我会联网搜索并简要回答、附上来源。",
      ai_thanks:"不客气！如果还有关于在 BC 买房的问题，随时问我。",
      ai_err:"我现在连不上实时网络搜索，所以暂时只能根据本站内容回答。请过一会儿再试——也可以问我购房步骤、首付、税费、压力测试、物业管理费，或这里的示例房源。"},
    es:{
     "ai_sub": "Busca en los anuncios, guías y herramientas de este sitio",
     "as_sub": "Pregunte sobre comprar una casa en BC — los pasos, las cuotas iniciales, los impuestos, la prueba de estrés, la strata y más. Las respuestas se buscan en la guía y las calculadoras de esta misma página.",
     "as_welcome": "¡Hola! Soy el asistente inmobiliario en esta página — busco en las propiedades, guías y herramientas de esta página y respondo preguntas comunes sobre comprar una casa en BC: los pasos de compra, las cuotas iniciales mínimas, el impuesto de transferencia de propiedad y los impuestos prediales anuales, los costos de cierre, la FHSA, la prueba de estrés, los ratios GDS/TDS, el seguro de CMHC, las condiciones de la oferta, las cuotas de mantenimiento, los vecindarios y las rentas típicas. Elija una sugerencia a continuación o escriba su propia pregunta.",
     "ai_thinking": "Pensando…",
     "ai_sources": "Fuentes",
     "ai_greet": "¡Hola! Encantado de saludarte. Pregúntame lo que quieras sobre comprar una casa en BC — los pasos, la cuota inicial, los impuestos, la strata — o sobre el mercado de vivienda; si la respuesta no está en este sitio, la buscaré en la web y te responderé brevemente, con fuentes.",
     "ai_thanks": "¡Con gusto! Si te surge cualquier otra pregunta sobre comprar una casa en BC, solo pregunta.",
     "ai_err": "No pude acceder a la búsqueda web en vivo en este momento, así que por ahora solo puedo responder con el contenido de este sitio. Inténtalo de nuevo en un rato — o pregúntame sobre los pasos de compra, la cuota inicial, los impuestos, la prueba de resistencia, las cuotas de mantenimiento o las propiedades de muestra de aquí."
    }
    };
    for (var L12 in I18N12) { if (I18N[L12]) { for (var k12 in I18N12[L12]) I18N[L12][k12] = I18N12[L12][k12]; } }

    /* ---------- Smart in-chat invitations: after a market answer, the assistant
       points the visitor to this site's own monthly market report (all 5 languages) ---------- */
    var I18N13 = {
    en:{ai_nl_pitch:"By the way — we publish a free monthly housing market report for BC & Canada: price trends, sales activity, interest-rate moves, and what they mean for buyers and sellers — in your language. Want it in your inbox each month? Joining takes about 20 seconds: just fill in the short form.",
      ai_nl_btn:"Get the free monthly report",close:"Close",m_city:"Preferred city"},
    fa:{ai_nl_pitch:"راستی — ما هر ماه یک گزارش رایگان از بازار مسکن BC و کانادا منتشر می‌کنیم: روند قیمت‌ها، حجم معاملات، تغییرات نرخ بهره و اینکه همه‌ی این‌ها برای خریدار و فروشنده چه معنایی دارد — به زبان خودتان. دوست دارید هر ماه در ایمیل‌تان باشد؟ عضویت فقط حدود ۲۰ ثانیه طول می‌کشد: کافی است فرم کوتاه اشتراک را پر کنید.",
      ai_nl_btn:"دریافت گزارش ماهانه‌ی رایگان",close:"بستن",m_city:"شهر ترجیحی"},
    hi:{ai_nl_pitch:"वैसे — हम हर महीने BC और कनाडा के लिए एक मुफ़्त आवास बाज़ार रिपोर्ट प्रकाशित करते हैं: कीमतों के रुझान, बिक्री गतिविधि, ब्याज दरों में बदलाव, और ख़रीदारों व विक्रेताओं के लिए इनका मतलब — आपकी भाषा में। क्या आप इसे हर महीने अपने इनबॉक्स में चाहते हैं? जुड़ने में बस 20 सेकंड लगते हैं: छोटा सा फ़ॉर्म भर दें।",
      ai_nl_btn:"मुफ़्त मासिक रिपोर्ट पाएं",close:"बंद करें",m_city:"पसंदीदा शहर"},
    zh:{ai_nl_pitch:"顺便提一下——我们每月发布一份免费的 BC 与加拿大住房市场报告：价格走势、成交动态、利率变化，以及这些对买卖双方意味着什么——并以您的语言发送。想每月在邮箱中收到吗？加入只需约 20 秒：填写简短的订阅表单即可。",
      ai_nl_btn:"获取免费月度报告",close:"关闭",m_city:"首选城市"},
    es:{
     "ai_nl_pitch": "Por cierto — publicamos un informe mensual gratuito del mercado de vivienda para BC y Canadá: tendencias de precios, actividad de ventas, movimientos de las tasas de interés y lo que significan para compradores y vendedores — en tu idioma. ¿Lo quieres en tu buzón cada mes? Unirte toma unos 20 segundos: solo completa el formulario corto.",
     "ai_nl_btn": "Obtener el informe mensual gratuito",
     "close": "Cerrar",
     "m_city": "Ciudad preferida"
    }
    };
    for (var L13 in I18N13) { if (I18N[L13]) { for (var k13 in I18N13[L13]) I18N[L13][k13] = I18N13[L13][k13]; } }

    /* ---------- home buying assistant: site brain first, live AI + web search second ---------- */
    var AS_FALLBACK = {
      en:"I don't have a specific answer for that yet, and my live lookup is unavailable right now. I can help with the steps to buy a home in BC, minimum down payments, property transfer tax and the first-time buyer exemption, annual property taxes, closing costs, the FHSA, the stress test, GDS/TDS ratios, CMHC insurance, offer subjects, strata fees, the site's neighbourhood guides, and typical rents. You can also read the <a href='#guide'>first-time buyer guide</a> or try the <a href='#calculator'>mortgage calculator</a> and <a href='#afford'>affordability estimator</a>.",
      fa:"برای این پرسش هنوز پاسخ مشخصی ندارم و جست‌وجوی زنده‌ام هم الان در دسترس نیست. می‌توانم درباره‌ی مراحل خرید خانه در BC، حداقل پیش‌پرداخت، مالیات انتقال ملک و معافیت خریدار اولی، مالیات سالانه‌ی ملک، هزینه‌های پایانی، FHSA، تست استرس، نسبت‌های GDS/TDS، بیمه‌ی CMHC، شروط پیشنهاد، شارژ ساختمان، راهنماهای محله‌ی سایت و اجاره‌های معمول کمک کنم. همچنین می‌توانید <a href='#guide'>راهنمای خریدار اولی</a> را بخوانید یا <a href='#calculator'>ماشین‌حساب وام</a> و <a href='#afford'>برآوردگر توان خرید</a> را امتحان کنید.",
      hi:"इस प्रश्न का मेरे पास अभी कोई विशिष्ट उत्तर नहीं है और मेरी लाइव खोज अभी उपलब्ध नहीं है। मैं BC में घर खरीदने के चरणों, न्यूनतम डाउन पेमेंट, संपत्ति हस्तांतरण कर और पहली बार खरीदार छूट, वार्षिक संपत्ति कर, समापन लागतों, FHSA, स्ट्रेस टेस्ट, GDS/TDS अनुपात, CMHC बीमा, ऑफ़र की शर्तों, स्ट्राटा शुल्क, साइट की इलाका मार्गदर्शिकाओं और सामान्य किराए में मदद कर सकता हूँ। आप <a href='#guide'>पहली बार खरीदार मार्गदर्शिका</a> भी पढ़ सकते हैं या <a href='#calculator'>मॉर्गेज कैलकुलेटर</a> और <a href='#afford'>खरीद क्षमता अनुमानक</a> आज़मा सकते हैं।",
      zh:"我暂时还没有这个问题的具体答案,而且我的实时查询目前不可用。我可以帮您了解在 BC 买房的步骤、最低首付、房产转让税与首次购房者减免、年度地税、过户费用、FHSA、压力测试、GDS/TDS 比率、CMHC 保险、报价条件、物业管理费、本站的社区指南和典型租金。您也可以阅读<a href='#guide'>首次购房指南</a>,或试试<a href='#calculator'>房贷计算器</a>和<a href='#afford'>负担能力估算器</a>。"
    };
    var KB = [
      { id:"fthb",
        kw:{en:["first-time buyer exemption","first time buyer exemption","ptt exemption","tax exemption","exemption","rebate"],
            fa:["معافیت خریدار اولی","معافیت مالیاتی","معافیت"],
            hi:["पहली बार खरीदार छूट","कर छूट","छूट"],
            zh:["首次购房者减免","首次购房减免","免转让税","减免","免税"]},
        ans:{en:"Qualifying first-time buyers in BC pay no property transfer tax on the first $500,000 of the price — a saving of up to $8,000 — on homes up to $835,000, with a partial exemption up to $860,000 (thresholds as of October 2026). You must be a Canadian citizen or permanent resident, a BC resident, and have never owned a principal residence anywhere in the world. The province sets the rules and they change over time — verify the current thresholds at gov.bc.ca. <a href='#guide'>See the exemption note in the guide</a>",
             fa:"خریداران اولی واجد شرایط در BC برای خانه‌های تا ۸۳۵ هزار دلار، روی ۵۰۰ هزار دلار اول قیمت هیچ مالیات انتقال ملکی نمی‌پردازند — تا ۸٬۰۰۰ دلار صرفه‌جویی — و تا ۸۶۰ هزار دلار معافیت نسبی می‌گیرند (سقف‌ها طبق اکتبر ۲۰۲۶). باید شهروند یا مقیم دائم کانادا و ساکن BC باشید و هرگز در هیچ‌کجای دنیا مالک محل سکونت اصلی نبوده باشید. قواعد را استان تعیین می‌کند و در طول زمان تغییر می‌کنند — آستانه‌های جاری را در gov.bc.ca بررسی کنید. <a href='#guide'>یادداشت معافیت در راهنما را ببینید</a>",
             hi:"BC में पात्र पहली बार खरीदार $835,000 तक के घरों पर कीमत के पहले $500,000 पर कोई संपत्ति हस्तांतरण कर नहीं देते — $8,000 तक की बचत — और $860,000 तक आंशिक छूट मिलती है (सीमाएँ अक्टूबर 2026 के अनुसार)। आपको कनाडा का नागरिक या स्थायी निवासी, BC निवासी होना चाहिए और दुनिया में कहीं भी कभी मुख्य निवास का मालिक नहीं होना चाहिए। नियम प्रांत तय करता है और वे समय के साथ बदलते हैं — gov.bc.ca पर वर्तमान सीमाएँ जाँचें। <a href='#guide'>मार्गदर्शिका में छूट नोट देखें</a>",
             zh:"符合条件的 BC 首次购房者购买 $835,000 以内的房屋,首 $500,000 部分免缴房产转让税——最高可省 $8,000;$860,000 以内可获部分减免(门槛截至 2026 年 10 月)。您必须是加拿大公民或永久居民、BC 居民,且从未在世界任何地方拥有过主要居所。规则由省政府制定且会随时间变化——请到 gov.bc.ca 核实当前门槛。<a href='#guide'>查看指南中的减免说明</a>"}},
      { id:"subjects",
        kw:{en:["subject","subjects","offer conditions","conditional offer"],
            fa:["شروط","شرط","سابجکت","subjects"],
            hi:["शर्तें","शर्त","subjects","सब्जेक्ट"],
            zh:["附带条件","报价条件","subjects","条件"]},
        ans:{en:"“Subjects” are conditions written into a BC offer that must be satisfied by a set deadline before the deal becomes firm. The usual ones are subject to financing (your lender fully approves the mortgage), subject to inspection (a home inspection you are satisfied with), and, for strata properties, subject to reviewing the strata documents — minutes, financials, the depreciation report, and any special levies. If a subject can't be met, you can normally walk away and recover your deposit.",
             fa:"«شروط» (subjects) شرط‌هایی هستند که در پیشنهاد خرید در BC نوشته می‌شوند و باید تا مهلت مشخصی برآورده شوند تا معامله قطعی شود. رایج‌ترین‌ها: شرط تأمین مالی (تأیید کامل وام توسط وام‌دهنده)، شرط بازرسی (بازرسی خانه با نتیجه‌ی رضایت‌بخش) و برای ملک‌های دارای مدیریت ساختمان، شرط بررسی اسناد ساختمان — صورت‌جلسه‌ها، صورت‌های مالی، گزارش استهلاک و هزینه‌های ویژه (levy). اگر شرطی برآورده نشود، معمولاً می‌توانید از معامله کنار بکشید و ودیعه‌تان را پس بگیرید.",
             hi:"“Subjects” वे शर्तें हैं जो BC के ऑफ़र में लिखी जाती हैं और एक तय समय-सीमा तक पूरी होनी चाहिए, तभी सौदा पक्का होता है। आम शर्तें हैं: वित्तपोषण की शर्त (ऋणदाता मॉर्गेज को पूरी तरह मंज़ूरी दे), निरीक्षण की शर्त (ऐसा गृह निरीक्षण जिससे आप संतुष्ट हों), और स्ट्राटा प्रॉपर्टी के लिए स्ट्राटा दस्तावेज़ों की समीक्षा की शर्त — कार्यवृत्त, वित्तीय विवरण, मूल्यह्रास रिपोर्ट और कोई विशेष शुल्क। यदि कोई शर्त पूरी न हो, तो आप सामान्यतः सौदे से हट सकते हैं और जमा वापस पा सकते हैं।",
             zh:"“Subjects”(附带条件)是写在 BC 购房报价中的条件,必须在约定期限前满足,交易才能成为定局。常见的有:贷款条件(贷款机构完全批准房贷)、验房条件(验房结果令您满意),以及对于物业管理类房产,审阅物业文件——会议记录、财务报表、折旧报告和任何特别征费。如果某项条件无法满足,您通常可以退出交易并取回定金。"}},
      { id:"completion",
        kw:{en:["completion day","possession day","completion","possession","closing day","get the keys"],
            fa:["روز تکمیل","روز تحویل","تکمیل معامله","تحویل خانه","کلیدها"],
            hi:["समापन दिवस","कब्ज़े का दिन","समापन","कब्ज़ा","चाबियाँ"],
            zh:["成交日","交房日","交房","拿钥匙"]},
        ans:{en:"Completion day and possession day are two different dates in a BC purchase. On completion day, your lawyer or notary registers the transfer and the seller is paid — you legally own the home. Possession day is usually one or two days later: that's when you get the keys and can move in, so plan movers and services around the possession date, not completion.",
             fa:"روز تکمیل (completion) و روز تحویل (possession) در خرید خانه در BC دو تاریخ متفاوت‌اند. در روز تکمیل، وکیل یا دفتر اسناد رسمی شما انتقال را ثبت می‌کند و پول به فروشنده پرداخت می‌شود — از نظر قانونی مالک خانه می‌شوید. روز تحویل معمولاً یک یا دو روز بعد است؛ آن روز کلیدها را می‌گیرید و می‌توانید اسباب‌کشی کنید، پس برنامه‌ی اسباب‌کشی و خدمات را بر اساس روز تحویل بچینید، نه روز تکمیل.",
             hi:"BC की खरीद में समापन दिवस (completion day) और कब्ज़े का दिन (possession day) दो अलग तिथियाँ हैं। समापन दिवस पर आपका वकील या नोटरी हस्तांतरण पंजीकृत करता है और विक्रेता को भुगतान होता है — कानूनी रूप से घर आपका हो जाता है। कब्ज़े का दिन आमतौर पर एक-दो दिन बाद होता है: तब आपको चाबियाँ मिलती हैं और आप शिफ़्ट कर सकते हैं, इसलिए मूवर्स और सेवाओं की योजना कब्ज़े की तिथि के अनुसार बनाएँ, समापन की नहीं।",
             zh:"在 BC 购房中,成交日(completion day)和交房日(possession day)是两个不同的日期。成交日当天,您的律师或公证人登记过户并向卖方付款——您在法律上成为房主。交房日通常在一两天后:那天您拿到钥匙并可以搬入,因此搬家和开通服务应按交房日安排,而不是成交日。"}},
      { id:"stress",
        kw:{en:["stress test","qualifying rate","qualify"],
            fa:["تست استرس","استرس تست","نرخ احتسابی"],
            hi:["स्ट्रेस टेस्ट","योग्यता दर"],
            zh:["压力测试","审核利率","资格审核"]},
        ans:{en:"The mortgage stress test means you must qualify at a higher rate than you'll actually pay: your contract rate + 2%, or the federal benchmark rate, whichever is higher. Your lender checks that you could still afford the payments at that qualifying rate, which protects you if rates rise by renewal time. <a href='#calculator'>See the qualifying payment in the calculator</a>",
             fa:"تست استرس وام یعنی باید با نرخی بالاتر از نرخ واقعی‌تان واجد شرایط شوید: نرخ قرارداد + ۲٪، یا نرخ معیار فدرال — هرکدام بیشتر باشد. وام‌دهنده بررسی می‌کند که با آن نرخ احتسابی هم از پس اقساط برمی‌آیید؛ این کار اگر تا زمان تمدید وام نرخ‌ها بالا برود، از شما محافظت می‌کند. <a href='#calculator'>قسط احتسابی را در ماشین‌حساب ببینید</a>",
             hi:"मॉर्गेज स्ट्रेस टेस्ट का मतलब है कि आपको उस दर से ऊँची दर पर योग्य होना होगा जो आप वास्तव में चुकाएँगे: आपकी अनुबंध दर + 2%, या संघीय बेंचमार्क दर — जो भी अधिक हो। ऋणदाता जाँचता है कि उस योग्यता दर पर भी आप किस्तें चुका सकते हैं, ताकि नवीनीकरण तक दरें बढ़ने पर आप सुरक्षित रहें। <a href='#calculator'>कैलकुलेटर में योग्यता किस्त देखें</a>",
             zh:"房贷压力测试意味着您必须按高于实际利率的水平通过审核:合同利率 + 2%,或联邦基准利率,以较高者为准。贷款机构会核查您在该审核利率下仍能负担月供,这样即使续约时利率上升,您也有缓冲。<a href='#calculator'>在计算器中查看审核月供</a>"}},
      { id:"cmhc",
        kw:{en:["cmhc","mortgage insurance","default insurance","insurance premium"],
            fa:["cmhc","بیمه وام","بیمه نکول","بیمه cmhc"],
            hi:["cmhc","मॉर्गेज बीमा","बीमा प्रीमियम"],
            zh:["cmhc","房贷保险","违约保险","保险费"]},
        ans:{en:"When your down payment is under 20%, mortgage default insurance (usually through CMHC) is mandatory. The premium depends on your down payment — roughly 4.00% of the mortgage with 5–10% down, 3.10% with 10–15% down, and 2.80% with 15–20% down — and it's added to your mortgage balance instead of being paid in cash. Homes priced at $1.5M or more can't get insured mortgages. <a href='#calculator'>The calculator estimates the premium for you</a>",
             fa:"وقتی پیش‌پرداخت کمتر از ۲۰٪ باشد، بیمه‌ی نکول وام (معمولاً از طریق CMHC) الزامی است. حق بیمه به میزان پیش‌پرداخت بستگی دارد — تقریباً ۴٫۰۰٪ وام با پیش‌پرداخت ۵ تا ۱۰٪، ۳٫۱۰٪ با ۱۰ تا ۱۵٪، و ۲٫۸۰٪ با ۱۵ تا ۲۰٪ — و به‌جای پرداخت نقدی، به مانده‌ی وام اضافه می‌شود. خانه‌های ۱٫۵ میلیون دلار و بیشتر نمی‌توانند وام بیمه‌شده بگیرند. <a href='#calculator'>ماشین‌حساب حق بیمه را برایتان برآورد می‌کند</a>",
             hi:"जब डाउन पेमेंट 20% से कम हो, तो मॉर्गेज चूक बीमा (आमतौर पर CMHC के माध्यम से) अनिवार्य है। प्रीमियम आपके डाउन पेमेंट पर निर्भर करता है — 5–10% डाउन पर मॉर्गेज का लगभग 4.00%, 10–15% डाउन पर 3.10%, और 15–20% डाउन पर 2.80% — और यह नकद चुकाने के बजाय आपके मॉर्गेज बकाये में जुड़ जाता है। $1.5M या अधिक के घरों को बीमित मॉर्गेज नहीं मिल सकता। <a href='#calculator'>कैलकुलेटर आपके लिए प्रीमियम का अनुमान लगाता है</a>",
             zh:"当首付低于 20% 时,必须购买房贷违约保险(通常通过 CMHC)。保费取决于首付比例——首付 5–10% 时约为贷款额的 4.00%,首付 10–15% 时为 3.10%,首付 15–20% 时为 2.80%——保费会计入贷款余额,无需现金支付。房价 $150 万或以上的房屋无法获得保险型房贷。<a href='#calculator'>计算器会为您估算保费</a>"}},
      { id:"gds",
        kw:{en:["gds","tds","debt service","how much can i afford","ratios"],
            fa:["gds","tds","نسبت بدهی","نسبت‌های بدهی","توان خرید"],
            hi:["gds","tds","ऋण सेवा","अनुपात","खरीद क्षमता"],
            zh:["gds","tds","债务比率","负担能力","能买多贵"]},
        ans:{en:"Canadian lenders use two ratios to set your budget. GDS (Gross Debt Service) keeps total housing costs — mortgage payment, property tax, heating, and 50% of strata fees — at or under 39% of your gross income. TDS (Total Debt Service) keeps all of your debts, including car payments and credit cards, at or under 44%. Whichever ratio gives the lower number sets your maximum home price. <a href='#afford'>Try the affordability estimator</a>",
             fa:"وام‌دهنده‌های کانادایی برای تعیین بودجه‌ی شما از دو نسبت استفاده می‌کنند: GDS ‏(خدمات بدهی ناخالص) مجموع هزینه‌های مسکن — قسط وام، مالیات ملک، گرمایش و ۵۰٪ شارژ ساختمان — را حداکثر ۳۹٪ درآمد ناخالص نگه می‌دارد؛ و TDS ‏(مجموع خدمات بدهی) همه‌ی بدهی‌ها، از جمله اقساط خودرو و کارت اعتباری، را حداکثر ۴۴٪ نگه می‌دارد. هر نسبتی عدد کمتری بدهد، سقف قیمت خانه‌ی شما را تعیین می‌کند. <a href='#afford'>برآوردگر توان خرید را امتحان کنید</a>",
             hi:"कनाडाई ऋणदाता आपका बजट तय करने के लिए दो अनुपात इस्तेमाल करते हैं। GDS (Gross Debt Service) कुल आवास लागत — मॉर्गेज किस्त, संपत्ति कर, हीटिंग और स्ट्राटा शुल्क का 50% — को आपकी सकल आय के 39% तक रखता है। TDS (Total Debt Service) आपके सभी ऋणों, जिनमें कार किस्तें और क्रेडिट कार्ड शामिल हैं, को 44% तक रखता है। जो अनुपात कम आंकड़ा दे, वही आपके घर की अधिकतम कीमत तय करता है। <a href='#afford'>खरीद क्षमता अनुमानक आज़माएँ</a>",
             zh:"加拿大贷款机构用两个比率来确定您的预算:GDS(总债务偿还比率)将住房总成本——月供、地税、取暖费和 50% 的管理费——控制在总收入的 39% 以内;TDS(总债务比率)将您的全部债务(包括车贷和信用卡)控制在 44% 以内。两者中较低的数字决定您能买的最高房价。<a href='#afford'>试试负担能力估算器</a>"}},
      { id:"down",
        kw:{en:["down payment","minimum down","how much down","downpayment"],
            fa:["پیش‌پرداخت","حداقل پیش‌پرداخت"],
            hi:["डाउन पेमेंट","न्यूनतम डाउन"],
            zh:["首付","最低首付"]},
        ans:{en:"The minimum down payment depends on the price: 5% on homes under $500,000; for homes from $500,000 to $1,499,999, it's 5% of the first $500,000 plus 10% of the portion above that; and 20% on homes of $1,500,000 or more. With less than 20% down, CMHC mortgage insurance is required and the premium is added to your mortgage. <a href='#guide'>More in the buyer guide</a>",
             fa:"حداقل پیش‌پرداخت به قیمت بستگی دارد: برای خانه‌های زیر ۵۰۰ هزار دلار، ۵٪؛ برای ۵۰۰ هزار تا ۱٬۴۹۹٬۹۹۹ دلار، ۵٪ از ۵۰۰ هزار دلار اول به‌علاوه‌ی ۱۰٪ از بخش بالاتر؛ و برای ۱٫۵ میلیون دلار و بیشتر، ۲۰٪. با پیش‌پرداخت کمتر از ۲۰٪، بیمه‌ی CMHC الزامی است و حق بیمه به وام اضافه می‌شود. <a href='#guide'>جزئیات بیشتر در راهنما</a>",
             hi:"न्यूनतम डाउन पेमेंट कीमत पर निर्भर करता है: $500,000 से कम के घरों पर 5%; $500,000 से $1,499,999 तक — पहले $500,000 का 5% और उससे ऊपर के हिस्से का 10%; और $1,500,000 या अधिक पर 20%। 20% से कम डाउन पेमेंट पर CMHC मॉर्गेज बीमा अनिवार्य है और प्रीमियम आपके मॉर्गेज में जुड़ जाता है। <a href='#guide'>मार्गदर्शिका में और जानें</a>",
             zh:"最低首付取决于房价:$500,000 以下为 5%;$500,000 至 $1,499,999 的房屋,首 $500,000 按 5%、超出部分按 10% 计算;$1,500,000 及以上为 20%。首付低于 20% 时必须购买 CMHC 房贷保险,保费将计入贷款。<a href='#guide'>在指南中了解更多</a>"}},
      { id:"ptt",
        kw:{en:["property transfer tax","transfer tax","ptt"],
            fa:["مالیات انتقال","مالیات نقل و انتقال"],
            hi:["हस्तांतरण कर","ट्रांसफर टैक्स"],
            zh:["转让税","过户税"]},
        ans:{en:"BC's property transfer tax (PTT) is charged at 1% on the first $200,000 of the price, 2% on the portion between $200,000 and $2,000,000, and 3% on the portion above $2,000,000 — an additional 2% can apply to the residential portion above $3,000,000. It's paid on completion day, on top of your down payment. <a href='#guide'>See the tax section of the guide</a>",
             fa:"مالیات انتقال ملک BC ‏(PTT) این‌طور حساب می‌شود: ۱٪ روی ۲۰۰ هزار دلار اول قیمت، ۲٪ روی بخش بین ۲۰۰ هزار تا ۲ میلیون دلار، و ۳٪ روی بخش بالاتر از ۲ میلیون دلار — و ممکن است ۲٪ اضافی روی بخش مسکونی بالای ۳ میلیون دلار اعمال شود. این مالیات در روز تکمیل، علاوه بر پیش‌پرداخت، پرداخت می‌شود. <a href='#guide'>بخش مالیات راهنما را ببینید</a>",
             hi:"BC का संपत्ति हस्तांतरण कर (PTT) इस प्रकार लगता है: कीमत के पहले $200,000 पर 1%, $200,000 से $2,000,000 के हिस्से पर 2%, और $2,000,000 से ऊपर के हिस्से पर 3% — $3,000,000 से ऊपर के आवासीय हिस्से पर अतिरिक्त 2% लग सकता है। यह समापन दिवस पर, डाउन पेमेंट के अतिरिक्त चुकाया जाता है। <a href='#guide'>मार्गदर्शिका का कर अनुभाग देखें</a>",
             zh:"BC 房产转让税(PTT)的计算方式为:房价首 $200,000 部分按 1%,$200,000 至 $2,000,000 部分按 2%,$2,000,000 以上部分按 3% 征收——$3,000,000 以上的住宅部分可能另加 2%。该税在成交日缴纳,在首付之外另行支付。<a href='#guide'>查看指南中的税费部分</a>"}},
      { id:"closing",
        kw:{en:["closing cost","closing fees","extra costs","costs of buying"],
            fa:["هزینه‌های پایانی","هزینه پایانی","هزینه بستن معامله"],
            hi:["समापन लागत","क्लोज़िंग कॉस्ट","अतिरिक्त लागत"],
            zh:["过户费用","过户成本","交易费用","额外费用"]},
        ans:{en:"A common rule of thumb is to budget about 1.5%–4% of the purchase price for closing costs, on top of your down payment. They include the property transfer tax, legal or notary fees, home inspection and appraisal, title insurance and registration fees, GST on newly built homes (resale homes are exempt), and adjustments such as prepaid property tax and strata fees. <a href='#guide'>Full closing-cost list</a>",
             fa:"یک قاعده‌ی سرانگشتی این است که برای هزینه‌های پایانی، علاوه بر پیش‌پرداخت، حدود ۱٫۵ تا ۴٪ قیمت خرید را کنار بگذارید. این هزینه‌ها شامل مالیات انتقال ملک، هزینه‌ی وکیل یا دفتر اسناد رسمی، بازرسی و ارزیابی خانه، بیمه‌ی مالکیت و هزینه‌های ثبت، مالیات GST برای خانه‌های نوساز (خانه‌های دست‌دوم معاف‌اند) و تعدیل‌هایی مثل مالیات ملک و شارژ پیش‌پرداخت‌شده است. <a href='#guide'>فهرست کامل هزینه‌های پایانی</a>",
             hi:"एक सामान्य नियम है कि डाउन पेमेंट के अलावा समापन लागतों के लिए खरीद कीमत का लगभग 1.5%–4% बजट रखें। इनमें संपत्ति हस्तांतरण कर, वकील या नोटरी शुल्क, गृह निरीक्षण और मूल्यांकन, टाइटल बीमा और पंजीकरण शुल्क, नए बने घरों पर GST (पुनर्विक्रय घर छूट प्राप्त हैं), और पूर्व-चुकता संपत्ति कर व स्ट्राटा शुल्क जैसे समायोजन शामिल हैं। <a href='#guide'>समापन लागतों की पूरी सूची</a>",
             zh:"一个常见的经验法则是:除首付外,过户费用约为房价的 1.5%–4%。这些费用包括房产转让税、律师或公证费、验房和评估费、产权保险和登记费、新建房屋的 GST(二手房免征),以及预付地税和管理费等调整项。<a href='#guide'>过户费用完整清单</a>"}},
      { id:"fhsa",
        kw:{en:["fhsa","first home savings"],
            fa:["fhsa","حساب پس‌انداز خانه","پس‌انداز خانه اول"],
            hi:["fhsa","प्रथम गृह बचत"],
            zh:["fhsa","首次购房储蓄","首购房储蓄"]},
        ans:{en:"The FHSA (First Home Savings Account) helps first-time buyers save for a home: you gain $8,000 of contribution room per year up to a $40,000 lifetime limit, contributions are tax-deductible, and withdrawals for a qualifying first home are tax-free. The account must be closed within 15 years of opening (or by the end of the year you turn 71, or the end of the year after your first qualifying withdrawal — whichever comes first). Rules can change — verify them with the CRA at canada.ca. <a href='#fhsa'>Try the FHSA tracker on this page</a>",
             fa:"حساب FHSA ‏(پس‌انداز خانه‌ی اول) به خریداران اولی کمک می‌کند: هر سال ۸٬۰۰۰ دلار فضای مشارکت می‌گیرید تا سقف مادام‌العمر ۴۰٬۰۰۰ دلار؛ مشارکت‌ها از مالیات کسر می‌شوند و برداشت برای خرید خانه‌ی اول واجد شرایط بدون مالیات است. حساب باید حداکثر ۱۵ سال پس از بازشدن بسته شود (یا تا پایان سالی که ۷۱ ساله می‌شوید، یا پایان سالِ پس از اولین برداشت واجد شرایط — هرکدام زودتر باشد). قواعد ممکن است تغییر کنند — آن‌ها را از CRA در canada.ca بررسی کنید. <a href='#fhsa'>ردیاب FHSA در همین صفحه</a>",
             hi:"FHSA (First Home Savings Account) पहली बार खरीदारों की मदद करता है: हर वर्ष आपको $8,000 की योगदान सीमा मिलती है, जीवनकाल सीमा $40,000 तक; योगदान कर-कटौती योग्य हैं और पात्र पहले घर के लिए निकासी कर-मुक्त है। खाता खोलने के 15 वर्षों के भीतर बंद करना होगा (या जिस वर्ष आप 71 के होते हैं उसके अंत तक, या आपकी पहली पात्र निकासी के अगले वर्ष के अंत तक — जो भी पहले हो)। नियम बदल सकते हैं — CRA से canada.ca पर जाँचें। <a href='#fhsa'>इस पेज पर FHSA ट्रैकर आज़माएँ</a>",
             zh:"FHSA(首次购房储蓄账户)帮助首次购房者存钱:每年获得 $8,000 供款额度,终身上限 $40,000;供款可抵税,用于购买符合条件的首套住房时取款免税。账户必须在开设后 15 年内关闭(或在您年满 71 岁那年的年底前,或在您首次符合条件取款的次年年底前关闭——以较早者为准)。规则可能变更——请到加拿大税务局网站 canada.ca 核实。<a href='#fhsa'>试试本页的 FHSA 追踪器</a>"}},
      { id:"strata",
        kw:{en:["strata"],
            fa:["شارژ ساختمان","شارژ","استراتا"],
            hi:["स्ट्राटा"],
            zh:["物业管理费","物业费","管理费","strata"]},
        ans:{en:"Strata fees are monthly charges that condo and townhouse owners pay to their strata corporation for shared costs — building insurance, common-area maintenance, amenities, and contributions to the contingency reserve fund for future major repairs. Fees vary widely by building and are reviewed in the strata documents before you remove subjects; lenders also count 50% of the fee in your GDS ratio. Older buildings or big upcoming repairs can mean special levies on top of the monthly fee.",
             fa:"شارژ ساختمان (strata fee) مبلغ ماهانه‌ای است که مالکان آپارتمان و تاون‌هاوس به شرکت مدیریت ساختمان می‌پردازند برای هزینه‌های مشترک — بیمه‌ی ساختمان، نگهداری فضاهای مشترک، امکانات، و واریز به صندوق ذخیره‌ی احتیاطی برای تعمیرات اساسی آینده. مبلغ شارژ از ساختمانی به ساختمان دیگر بسیار فرق می‌کند و پیش از برداشتن شروط، در اسناد ساختمان بررسی می‌شود؛ وام‌دهنده‌ها هم ۵۰٪ شارژ را در نسبت GDS حساب می‌کنند. ساختمان‌های قدیمی‌تر یا تعمیرات بزرگ پیش‌رو می‌تواند یعنی هزینه‌های ویژه (levy) علاوه بر شارژ ماهانه.",
             hi:"स्ट्राटा शुल्क वह मासिक राशि है जो कॉन्डो और टाउनहाउस मालिक अपनी स्ट्राटा कॉर्पोरेशन को साझा खर्चों के लिए देते हैं — भवन बीमा, साझा क्षेत्रों का रखरखाव, सुविधाएँ, और भविष्य की बड़ी मरम्मत के लिए आकस्मिक आरक्षित निधि में योगदान। शुल्क हर भवन में बहुत अलग होता है और शर्तें हटाने से पहले स्ट्राटा दस्तावेज़ों में इसकी समीक्षा होती है; ऋणदाता GDS अनुपात में शुल्क का 50% भी गिनते हैं। पुरानी इमारतों या आगामी बड़ी मरम्मत का मतलब मासिक शुल्क के ऊपर विशेष शुल्क (levy) भी हो सकता है।",
             zh:"物业管理费(strata fee)是公寓和联排别墅业主每月向物业公司缴纳的共享费用——包括建筑保险、公共区域维护、配套设施,以及为未来重大维修设立的应急储备金。费用因建筑而异,在移除条件前应通过物业文件仔细核查;贷款机构还会在 GDS 比率中计入 50% 的管理费。较旧的建筑或即将进行的大修可能意味着月费之外还有特别征费。"}},
      { id:"steps",
        kw:{en:["steps to buy","buying steps","how to buy","buying process","where do i start"],
            fa:["مراحل خرید","مراحل","چطور بخرم","فرایند خرید","از کجا شروع"],
            hi:["खरीदने के चरण","चरण","कैसे खरीदें","खरीद प्रक्रिया","कहाँ से शुरू"],
            zh:["购房步骤","买房步骤","步骤","怎么买","购房流程"]},
        ans:{en:"Buying a home in BC follows eight steps: (1) get a mortgage pre-approval, (2) save your down payment and closing costs, (3) set your search criteria, (4) view homes and compare — reading strata documents for condos and townhouses, (5) write an offer with subject conditions, (6) remove subjects and pay the deposit, (7) complete the purchase with a lawyer or notary, and (8) possession day, when you get the keys. <a href='#guide'>See the full guide</a>",
             fa:"خرید خانه در BC هشت مرحله دارد: (۱) پیش‌تأیید وام، (۲) پس‌انداز پیش‌پرداخت و هزینه‌های پایانی، (۳) تعیین معیارهای جست‌وجو، (۴) بازدید و مقایسه‌ی خانه‌ها — و برای آپارتمان و تاون‌هاوس خواندن اسناد ساختمان، (۵) نوشتن پیشنهاد همراه با شروط، (۶) برداشتن شروط و پرداخت ودیعه، (۷) تکمیل خرید نزد وکیل یا دفتر اسناد رسمی، و (۸) روز تحویل که کلیدها را می‌گیرید. <a href='#guide'>راهنمای کامل را ببینید</a>",
             hi:"BC में घर खरीदने के आठ चरण हैं: (1) मॉर्गेज पूर्व-अनुमोदन, (2) डाउन पेमेंट और समापन लागत की बचत, (3) अपने खोज मानदंड तय करना, (4) घर देखना और तुलना करना — कॉन्डो और टाउनहाउस के लिए स्ट्राटा दस्तावेज़ पढ़ना, (5) शर्तों के साथ ऑफ़र लिखना, (6) शर्तें हटाना और जमा देना, (7) वकील या नोटरी के साथ खरीद पूरी करना, और (8) कब्ज़े का दिन, जब आपको चाबियाँ मिलती हैं। <a href='#guide'>पूरी मार्गदर्शिका देखें</a>",
             zh:"在 BC 买房共有八个步骤:(1)取得房贷预批,(2)存够首付和过户费用,(3)确定您的搜索标准,(4)看房并比较——公寓和联排别墅要阅读物业文件,(5)提交附带条件的报价,(6)移除条件并支付定金,(7)通过律师或公证人完成交易,(8)交房日拿到钥匙。<a href='#guide'>查看完整指南</a>"}},
      { id:"listings",
        kw:{en:["listing","listings","mls","homes for sale","houses for sale","properties"],
            fa:["فایل","آگهی","لیستینگ","خانه برای فروش"],
            hi:["लिस्टिंग","प्रॉपर्टी","बिक्री के लिए घर","mls"],
            zh:["房源","在售","房产","mls"]},
        ans:{en:"The only properties I know are the sample listings on this page (sample data — for design preview): {list} Live MLS® data connects after licensing, so I can't look up any other property — but the Match Assistant above can filter these samples by budget, bedrooms, city and type. <a href='#listings'>Browse the sample listings</a>",
             fa:"تنها ملک‌هایی که می‌شناسم همان فایل‌های نمونه‌ی همین صفحه‌اند (داده‌ی نمونه — برای پیش‌نمایش طراحی): {list} داده‌ی زنده‌ی MLS® پس از دریافت لایسنس وصل می‌شود، پس نمی‌توانم ملک دیگری را جست‌وجو کنم — اما دستیار تطبیق در بالا می‌تواند همین نمونه‌ها را بر اساس بودجه، تعداد خواب، شهر و نوع ملک پالایه کند. <a href='#listings'>مشاهده‌ی فایل‌های نمونه</a>",
             hi:"मैं केवल इस पेज की नमूना लिस्टिंग जानता हूँ (नमूना डेटा — डिज़ाइन पूर्वावलोकन के लिए): {list} लाइव MLS® डेटा लाइसेंस के बाद जुड़ेगा, इसलिए मैं कोई अन्य प्रॉपर्टी नहीं खोज सकता — लेकिन ऊपर का मैच सहायक इन नमूनों को बजट, बेडरूम, शहर और प्रकार से फ़िल्टर कर सकता है। <a href='#listings'>नमूना लिस्टिंग देखें</a>",
             zh:"我只了解本页的示例房源(示例数据——仅供设计预览):{list}实时 MLS® 数据将在取得牌照后接入,因此我无法查询其他房产——不过上方的匹配助手可以按预算、卧室数、城市和类型筛选这些示例房源。<a href='#listings'>查看示例房源</a>"}},
      { id:"proptax",
        kw:{en:["property tax","municipal tax","mill rate","annual tax","taxes on a home","home owner grant"],
            fa:["مالیات ملک","مالیات سالانه","مالیات شهرداری","مالیات خانه","مالیات املاک"],
            hi:["संपत्ति कर","नगरपालिका कर","वार्षिक कर","प्रॉपर्टी टैक्स"],
            zh:["地税","房产税","物业税","市政税","年度税"]},
        ans:{en:"Annual property tax is the yearly municipal tax on a home you own — different from the one-time property transfer tax you pay when you buy. It's calculated as your home's assessed value (set each year by BC Assessment) multiplied by your city's tax (mill) rate, and the BC Home Owner Grant can reduce it for your principal residence. There is no single Metro Vancouver rate — it differs by city, property class and assessed value — but as a rough orientation, many homes here pay a few thousand dollars a year; this site's own calculators use $4,200/year as a working example. Tax notices usually arrive in late spring and payment is due in early July. Verify your exact amount with your city and BC Assessment (bcassessment.ca). <a href='#buyvsrent'>See property tax inside the buy vs rent calculator</a>",
             fa:"مالیات سالانه‌ی ملک، مالیات شهرداری سالانه‌ای است که برای خانه‌ای که مالکش هستید می‌پردازید — با مالیات انتقال ملک که یک‌بار هنگام خرید پرداخت می‌شود فرق دارد. این مالیات از ضرب ارزش ارزیابی‌شده‌ی خانه‌تان (که هر سال BC Assessment تعیین می‌کند) در نرخ مالیاتی (mill rate) شهرتان به دست می‌آید و کمک‌هزینه‌ی مالک خانه‌ی BC ‏(Home Owner Grant) می‌تواند آن را برای محل سکونت اصلی‌تان کمتر کند. نرخ واحدی برای مترو ونکوور وجود ندارد — بر اساس شهر، نوع ملک و ارزش ارزیابی فرق می‌کند — اما برای یک تصور کلی، بسیاری از خانه‌ها اینجا چند هزار دلار در سال مالیات می‌دهند؛ ماشین‌حساب‌های همین سایت ۴٬۲۰۰ دلار در سال را به‌عنوان مثال کاری استفاده می‌کنند. برگه‌های مالیات معمولاً اواخر بهار می‌رسند و پرداخت اوایل ژوئیه سررسید است. مبلغ دقیق را از شهرداری شهرتان و BC Assessment ‏(bcassessment.ca) بررسی کنید. <a href='#buyvsrent'>مالیات ملک را در ماشین‌حساب خرید یا اجاره ببینید</a>",
             hi:"वार्षिक संपत्ति कर वह सालाना नगरपालिका कर है जो आपके अपने घर पर लगता है — यह खरीदते समय एक बार दिए जाने वाले संपत्ति हस्तांतरण कर से अलग है। इसकी गणना आपके घर के मूल्यांकित मूल्य (जो हर वर्ष BC Assessment तय करता है) को आपके शहर की कर (mill) दर से गुणा करके होती है, और BC Home Owner Grant आपके मुख्य निवास पर इसे घटा सकता है। मेट्रो वैंकूवर के लिए कोई एक दर नहीं है — यह शहर, प्रॉपर्टी वर्ग और मूल्यांकित मूल्य के अनुसार बदलती है — लेकिन मोटे अनुमान के तौर पर, यहाँ कई घर सालाना कुछ हज़ार डॉलर कर देते हैं; इस साइट के कैलकुलेटर कार्य-उदाहरण के रूप में $4,200/वर्ष इस्तेमाल करते हैं। कर नोटिस आमतौर पर वसंत के अंत में आते हैं और भुगतान जुलाई की शुरुआत में देय होता है। अपनी सटीक राशि अपने शहर और BC Assessment (bcassessment.ca) से जाँचें। <a href='#buyvsrent'>खरीद बनाम किराया कैलकुलेटर में संपत्ति कर देखें</a>",
             zh:"年度地税是您对所拥有的房屋每年缴纳的市政税——与购房时一次性缴纳的房产转让税不同。它的计算方式是：房屋的评估价值（由 BC Assessment 每年评定）乘以您所在城市的税率（mill rate）；BC 业主补助金（Home Owner Grant）可为您主要居所减免部分税额。温哥华都会区没有统一税率——因城市、物业类别和评估价值而异——但作为大致参考，这里的许多房屋每年缴纳几千加元；本站的计算器以每年 $4,200 作为示例数字。税单通常在春末寄达，须在 7 月初之前缴纳。请向您所在城市和 BC Assessment（bcassessment.ca）核实确切金额。<a href='#buyvsrent'>在买房 vs 租房计算器中查看地税</a>"}},
      { id:"rent",
        kw:{en:["rental","renting","rents"," rent ","rent in ","rent for ","rent is ","lease","typical rent"],
            fa:["اجاره","اجاره‌بها","اجاره بها","کرایه"],
            hi:["किराया","किराए","रेंट"],
            zh:["租金","租房","房租","租房子"]},
        ans:{en:"Rents in Metro Vancouver vary a lot by city, size and building age. As a rough orientation from recent market reporting (2025–2026): a 1-bedroom apartment often rents for about $2,100–$2,800/month in Vancouver, $1,900–$2,400 in Burnaby, and $1,700–$2,200 in Surrey, Coquitlam and Port Coquitlam; a 2-bedroom typically runs about $700–$900/month more. These are general ranges for orientation only — not quotes for any specific home. For current figures, check live rental listings and CMHC's rental market data. This site's buy vs rent calculator uses $2,600/month as its example rent: <a href='#buyvsrent'>compare renting with buying</a>. BC also caps annual rent increases for existing tenancies — the limit is 2.3% for 2026 and 2.2% for 2027; verify the current limit at gov.bc.ca.",
             fa:"اجاره‌ها در مترو ونکوور بر اساس شهر، متراژ و سن ساختمان خیلی فرق می‌کنند. برای یک تصور کلی از گزارش‌های اخیر بازار (۲۰۲۵–۲۰۲۶): آپارتمان یک‌خوابه معمولاً حدود ۲٬۱۰۰ تا ۲٬۸۰۰ دلار در ماه در ونکوور، ۱٬۹۰۰ تا ۲٬۴۰۰ دلار در برنابی، و ۱٬۷۰۰ تا ۲٬۲۰۰ دلار در ساری، کوکیتلام و پورت کوکیتلام اجاره می‌رود؛ دوخوابه‌ها معمولاً حدود ۷۰۰ تا ۹۰۰ دلار در ماه بیشترند. این‌ها فقط بازه‌های کلی برای جهت‌یابی‌اند — قیمت هیچ خانه‌ی مشخصی نیستند. برای ارقام جاری، آگهی‌های زنده‌ی اجاره و داده‌های بازار اجاره‌ی CMHC را ببینید. ماشین‌حساب خرید یا اجاره‌ی این سایت ۲٬۶۰۰ دلار در ماه را به‌عنوان اجاره‌ی مثال استفاده می‌کند: <a href='#buyvsrent'>اجاره را با خرید مقایسه کنید</a>. در BC افزایش سالانه‌ی اجاره برای اجاره‌نشینان فعلی هم سقف دارد — سقف افزایش برای ۲۰۲۶ برابر ۲٫۳٪ و برای ۲۰۲۷ برابر ۲٫۲٪ است؛ سقف جاری را در gov.bc.ca بررسی کنید.",
             hi:"मेट्रो वैंकूवर में किराए शहर, आकार और इमारत की उम्र के अनुसार बहुत बदलते हैं। हालिया बाज़ार रिपोर्टिंग (2025–2026) के मोटे अनुमान के तौर पर: 1-बेडरूम अपार्टमेंट का किराया अक्सर वैंकूवर में लगभग $2,100–$2,800/माह, बर्नाबी में $1,900–$2,400, और सरी, कोक्विटलम व पोर्ट कोक्विटलम में $1,700–$2,200 रहता है; 2-बेडरूम आमतौर पर लगभग $700–$900/माह अधिक होता है। ये केवल दिशा-निर्देश के लिए सामान्य सीमाएँ हैं — किसी विशिष्ट घर के भाव नहीं। वर्तमान आंकड़ों के लिए लाइव रेंटल लिस्टिंग और CMHC के रेंटल बाज़ार डेटा देखें। इस साइट का खरीद बनाम किराया कैलकुलेटर $2,600/माह को उदाहरण किराए के रूप में इस्तेमाल करता है: <a href='#buyvsrent'>किराए की तुलना खरीद से करें</a>। BC मौजूदा किरायेदारियों पर वार्षिक किराया वृद्धि की सीमा भी तय करता है — 2026 की सीमा 2.3% और 2027 की 2.2% है; वर्तमान सीमा gov.bc.ca पर जाँचें।",
             zh:"温哥华都会区的租金因城市、面积和楼龄差异很大。根据近期市场报道（2025–2026）的大致参考：一卧公寓在温哥华的月租通常约为 $2,100–$2,800，在本拿比约为 $1,900–$2,400，在素里、高贵林和高贵林港约为 $1,700–$2,200；两卧通常每月多出约 $700–$900。这些只是供参考的一般范围，并非任何具体房屋的报价。最新数字请查看实时租房房源和 CMHC 的租赁市场数据。本站的买房 vs 租房计算器以每月 $2,600 作为示例租金：<a href='#buyvsrent'>比较租房与买房</a>。BC 还对现有租约的年涨幅设上限——2026 年上限为 2.3%,2027 年为 2.2%；请到 gov.bc.ca 核实当前上限。"}},
      { id:"areas",
        kw:{en:["neighbourhood","neighborhood","neighbourhoods","neighborhoods","which area","where to live","best area","areas"],
            fa:["محله","محله‌ها","کدام شهر","کجا زندگی","منطقه","محله ها"],
            hi:["इलाका","इलाके","मोहल्ला","कहाँ रहें","क्षेत्र"],
            zh:["社区","街区","住在哪里","哪个区","哪些区域","小区"]},
        ans:{en:"This site's Knowledge Center has plain-language guides to six Metro Vancouver areas. Burnaby — Metrotown: high-rise, transit-first living around a major shopping centre and SkyTrain hub. Coquitlam — Coquitlam Centre: a family-paced centre with both SkyTrain and the West Coast Express, beside Lafarge Lake. Surrey — Surrey City Centre: a young, fast-growing downtown with two SkyTrain stations and a university campus. Vancouver — Downtown: the urban core. Richmond: a flat, transit-served city south of Vancouver. Port Coquitlam: a smaller-city feel with West Coast Express service. Each guide covers the area's character, getting around, home types and who it suits. <a href='#knowledge'>Read the neighbourhood guides</a>",
             fa:"مرکز دانش این سایت راهنمای ساده‌زبانی برای شش منطقه‌ی مترو ونکوور دارد. برنابی — متروتاون: زندگی بلندمرتبه و حمل‌ونقل‌محور دور یک مرکز خرید بزرگ و ایستگاه اسکای‌ترین. کوکیتلام — مرکز کوکیتلام: مرکزی خانوادگی با هر دو گزینه‌ی اسکای‌ترین و قطار West Coast Express، کنار دریاچه‌ی لافارژ. ساری — مرکز شهر ساری: مرکز شهری جوان و پررشد با دو ایستگاه اسکای‌ترین و یک پردیس دانشگاهی. ونکوور — مرکز شهر: هسته‌ی شهری. ریچموند: شهری مسطح و دارای حمل‌ونقل عمومی در جنوب ونکوور. پورت کوکیتلام: حس‌وحال شهری کوچک‌تر با قطار West Coast Express. هر راهنما شخصیت منطقه، رفت‌وآمد، نوع خانه‌ها و اینکه برای چه کسانی مناسب است را پوشش می‌دهد. <a href='#knowledge'>راهنماهای محله را بخوانید</a>",
             hi:"इस साइट के ज्ञान केंद्र में मेट्रो वैंकूवर के छह इलाकों की सरल-भाषा मार्गदर्शिकाएँ हैं। बर्नाबी — मेट्रोटाउन: एक बड़े शॉपिंग सेंटर और स्काईट्रेन हब के आसपास ऊँची इमारतों वाली, ट्रांज़िट-प्रथम जीवनशैली। कोक्विटलम — कोक्विटलम सेंटर: लाफ़ार्ज झील के पास, स्काईट्रेन और West Coast Express दोनों वाला परिवार-गति वाला केंद्र। सरी — सरी सिटी सेंटर: दो स्काईट्रेन स्टेशनों और विश्वविद्यालय परिसर वाला युवा, तेज़ी से बढ़ता डाउनटाउन। वैंकूवर — डाउनटाउन: शहरी केंद्र। रिचमंड: वैंकूवर के दक्षिण में समतल, ट्रांज़िट-सेवित शहर। पोर्ट कोक्विटलम: West Coast Express सेवा वाला छोटे-शहर जैसा माहौल। हर मार्गदर्शिका इलाके का स्वरूप, आवाजाही, घरों के प्रकार और यह किसके लिए उपयुक्त है, बताती है। <a href='#knowledge'>इलाका मार्गदर्शिकाएँ पढ़ें</a>",
             zh:"本站的知识中心有六个温哥华都会区社区的通俗指南。本拿比——Metrotown：围绕大型购物中心和天车枢纽的高层、公交优先生活。高贵林——Coquitlam Centre：节奏偏家庭的中心，同时有天车和 West Coast Express 通勤火车，毗邻 Lafarge 湖。素里——Surrey City Centre：年轻、快速成长的市中心，有两个天车站和一所大学校园。温哥华——市中心：城市核心区。列治文：位于温哥华以南、地势平坦、公交便利的城市。高贵林港：小城市氛围，有 West Coast Express 服务。每个指南都介绍该社区的特点、交通、房屋类型和适合人群。<a href='#knowledge'>阅读社区指南</a>"}},
      { id:"market",
        kw:{en:["housing market","real estate market","home prices","house prices","market conditions","how is the market","property prices"],
            fa:["بازار مسکن","بازار املاک","قیمت خانه‌ها","قیمت مسکن","بازار ملک"],
            hi:["आवास बाज़ार","रियल एस्टेट बाज़ार","घरों की कीमतें","प्रॉपर्टी की कीमतें"],
            zh:["房地产市场","房价","楼市","房产价格"]},
        ans:{en:"Metro Vancouver is one of Canada's most expensive housing markets. As a very rough orientation (2026): condos commonly range from about $450,000 in outlying areas to $800,000 or more closer to downtown Vancouver; townhouses roughly $750,000–$1,300,000; and detached houses from about $1,200,000 in Surrey and Coquitlam to $2,000,000 or more in Vancouver. This page's sample listings reflect that spread. Prices move with interest rates, supply and the broader economy, and change month to month — treat these ranges as educational orientation only and check current statistics from BCREA or your local real estate board before relying on them. <a href='#listings'>Browse the sample listings</a>",
             fa:"مترو ونکوور یکی از گران‌ترین بازارهای مسکن کاناداست. برای یک تصور بسیار کلی (۲۰۲۶): آپارتمان‌ها معمولاً از حدود ۴۵۰ هزار دلار در مناطق بیرونی تا ۸۰۰ هزار دلار و بیشتر نزدیک مرکز شهر ونکوور هستند؛ تاون‌هاوس‌ها تقریباً ۷۵۰ هزار تا ۱٫۳ میلیون دلار؛ و خانه‌های مستقل از حدود ۱٫۲ میلیون دلار در ساری و کوکیتلام تا ۲ میلیون دلار و بیشتر در ونکوور. فایل‌های نمونه‌ی همین صفحه همین گستره را نشان می‌دهند. قیمت‌ها با نرخ بهره، عرضه و وضعیت کلی اقتصاد حرکت می‌کنند و ماه‌به‌ماه تغییر می‌کنند — این بازه‌ها را فقط جهت‌یابی آموزشی بدانید و پیش از اتکا، آمار جاری BCREA یا بورد املاک محلی‌تان را بررسی کنید. <a href='#listings'>مشاهده‌ی فایل‌های نمونه</a>",
             hi:"मेट्रो वैंकूवर कनाडा के सबसे महंगे आवास बाज़ारों में से एक है। बहुत मोटे अनुमान के तौर पर (2026): कॉन्डो आमतौर पर बाहरी इलाकों में लगभग $450,000 से लेकर डाउनटाउन वैंकूवर के पास $800,000 या अधिक तक होते हैं; टाउनहाउस लगभग $750,000–$1,300,000; और अलग मकान सरी व कोक्विटलम में लगभग $1,200,000 से लेकर वैंकूवर में $2,000,000 या अधिक तक। इस पेज की नमूना लिस्टिंग इसी फैलाव को दर्शाती हैं। कीमतें ब्याज दरों, आपूर्ति और व्यापक अर्थव्यवस्था के साथ बदलती हैं और महीने-दर-महीने बदलती रहती हैं — इन सीमाओं को केवल शैक्षिक दिशा-निर्देश मानें और भरोसा करने से पहले BCREA या अपने स्थानीय रियल एस्टेट बोर्ड के वर्तमान आंकड़े जाँचें। <a href='#listings'>नमूना लिस्टिंग देखें</a>",
             zh:"温哥华都会区是加拿大房价最高的市场之一。作为非常粗略的参考（2026 年）：公寓价格通常从外围地区约 $450,000 到温哥华市中心附近 $800,000 或更高；联排别墅约 $750,000–$1,300,000；独立屋从素里和高贵林约 $1,200,000 到温哥华 $2,000,000 或更高。本页的示例房源正反映了这一价格跨度。房价随利率、供应和整体经济而波动，逐月变化——请将这些范围仅作教育性参考，依赖之前请查看 BCREA 或当地房地产局的最新统计数据。<a href='#listings'>查看示例房源</a>"}}
    ]
    var KB_ES = {
     "fthb": {
      "kw": [
       "exención para compradores primerizos",
       "exención comprador por primera vez",
       "exención PTT",
       "exención de impuestos",
       "exención",
       "reembolso",
       "ptt"
      ],
      "ans": "Los compradores primerizos que califican en BC no pagan impuesto de transferencia de propiedad sobre los primeros $500,000 del precio — un ahorro de hasta $8,000 — en viviendas de hasta $835,000, con una exención parcial hasta $860,000 (umbrales a octubre de 2026). Debes ser ciudadano canadiense o residente permanente, residente de BC, y nunca haber sido propietario de una residencia principal en ninguna parte del mundo. La provincia establece las reglas y estas cambian con el tiempo — verifica los umbrales actuales en gov.bc.ca. <a href='#guide'>Consulta la nota sobre la exención en la guía</a>"
     },
     "subjects": {
      "kw": [
       "subjects",
       "condiciones",
       "condiciones de la oferta",
       "oferta condicional"
      ],
      "ans": "“Subjects” son condiciones incluidas en una oferta en BC que deben cumplirse antes de una fecha límite establecida para que el acuerdo sea firme. Las más habituales son sujeto a financiamiento (que tu prestamista apruebe plenamente la hipoteca), sujeto a inspección (una inspección de la vivienda con la que quedes satisfecho) y, para propiedades strata, sujeto a revisar los documentos de la strata — actas, estados financieros, el informe de depreciación y cualquier cargo especial. Si una condición (subject) no puede cumplirse, normalmente puedes retirarte y recuperar tu depósito."
     },
     "completion": {
      "kw": [
       "día de cierre (completion)",
       "día de posesión",
       "completion",
       "possession",
       "día de cierre",
       "recibir las llaves"
      ],
      "ans": "El día de cierre (completion) y el día de posesión son dos fechas diferentes en una compra en BC. El día de cierre (completion), tu abogado o notario registra la transferencia y se paga al vendedor — legalmente ya eres propietario de la vivienda. El día de posesión suele ser uno o dos días después: es cuando recibes las llaves y puedes mudarte, así que planifica la mudanza y los servicios en función de la fecha de posesión, no de la de cierre."
     },
     "stress": {
      "kw": [
       "prueba de estrés",
       "stress test",
       "tasa de calificación",
       "calificar"
      ],
      "ans": "La prueba de estrés hipotecario significa que debes calificar a una tasa más alta de la que realmente pagarás: tu tasa contractual + 2%, o la tasa de referencia federal, la que sea mayor. Tu prestamista verifica que aún podrías pagar las cuotas a esa tasa de calificación, lo que te protege si las tasas suben al momento de la renovación. <a href='#calculator'>Consulta el pago de calificación en la calculadora</a>"
     },
     "cmhc": {
      "kw": [
       "cmhc",
       "seguro hipotecario",
       "seguro por incumplimiento",
       "prima de seguro"
      ],
      "ans": "Cuando tu cuota inicial es inferior al 20%, el seguro por incumplimiento hipotecario (normalmente a través de CMHC) es obligatorio. La prima depende de tu cuota inicial — aproximadamente 4.00% de la hipoteca con 5–10% de cuota inicial, 3.10% con 10–15% de cuota inicial y 2.80% con 15–20% de cuota inicial — y se suma al saldo de tu hipoteca en lugar de pagarse en efectivo. Las viviendas con precio de $1.5M o más no pueden obtener hipotecas aseguradas. <a href='#calculator'>La calculadora estima la prima por ti</a>"
     },
     "gds": {
      "kw": [
       "gds",
       "tds",
       "servicio de la deuda",
       "cuánto puedo pagar",
       "índices",
       "ratios"
      ],
      "ans": "Los prestamistas canadienses usan dos índices para establecer tu presupuesto. GDS (Gross Debt Service) mantiene los costos totales de vivienda — pago de la hipoteca, impuesto predial, calefacción y el 50% de las cuotas de mantenimiento — en o por debajo del 39% de tu ingreso bruto. TDS (Total Debt Service) mantiene todas tus deudas, incluidos los pagos del auto y las tarjetas de crédito, en o por debajo del 44%. El índice que dé la cifra menor establece el precio máximo de vivienda que puedes pagar. <a href='#afford'>Prueba el estimador de capacidad de pago</a>"
     },
     "down": {
      "kw": [
       "cuota inicial",
       "cuota inicial mínima",
       "cuánto de cuota inicial",
       "down payment"
      ],
      "ans": "La cuota inicial mínima depende del precio: 5% en viviendas de menos de $500,000; para viviendas de $500,000 a $1,499,999, es el 5% de los primeros $500,000 más el 10% de la parte que supere esa cantidad; y 20% en viviendas de $1,500,000 o más. Con menos del 20% de cuota inicial, se requiere el seguro hipotecario de CMHC y la prima se suma a tu hipoteca. <a href='#guide'>Más información en la guía del comprador</a>"
     },
     "ptt": {
      "kw": [
       "impuesto de transferencia de propiedad",
       "impuesto de transferencia",
       "ptt"
      ],
      "ans": "El impuesto de transferencia de propiedad (PTT) de BC se cobra al 1% sobre los primeros $200,000 del precio, 2% sobre la parte entre $200,000 y $2,000,000, y 3% sobre la parte que supere los $2,000,000 — puede aplicarse un 2% adicional a la parte residencial que supere los $3,000,000. Se paga el día de cierre (completion), además de tu cuota inicial. <a href='#guide'>Consulta la sección de impuestos de la guía</a>"
     },
     "closing": {
      "kw": [
       "costos de cierre",
       "gastos de cierre",
       "costos adicionales",
       "costos de comprar"
      ],
      "ans": "Una regla práctica común es presupuestar aproximadamente entre 1.5%–4% del precio de compra para los costos de cierre, además de tu cuota inicial. Incluyen el impuesto de transferencia de propiedad, honorarios legales o notariales, inspección y avalúo de la vivienda, seguro de título y tarifas de registro, GST en viviendas de nueva construcción (las viviendas de reventa están exentas) y ajustes como el impuesto predial y las cuotas de mantenimiento pagados por anticipado. <a href='#guide'>Lista completa de costos de cierre</a>"
     },
     "fhsa": {
      "kw": [
       "fhsa",
       "ahorro para primera vivienda",
       "cuenta de ahorro para primera vivienda"
      ],
      "ans": "La FHSA (First Home Savings Account) ayuda a los compradores primerizos a ahorrar para una vivienda: obtienes $8,000 de espacio de contribución por año hasta un límite vitalicio de $40,000, las contribuciones son deducibles de impuestos y los retiros para una primera vivienda que califique están libres de impuestos. La cuenta debe cerrarse dentro de los 15 años posteriores a su apertura (o al final del año en que cumplas 71 años, o al final del año siguiente a tu primer retiro que califique — lo que ocurra primero). Las reglas pueden cambiar — verifícalas con la CRA en canada.ca. <a href='#fhsa'>Prueba el rastreador de la FHSA en esta página</a>"
     },
     "strata": {
      "kw": [
       "strata",
       "cuota de mantenimiento",
       "cuotas de mantenimiento"
      ],
      "ans": "Las cuotas de mantenimiento (strata fees) son cargos mensuales que los propietarios de condominios y casas adosadas pagan a su corporación strata por los costos compartidos — seguro del edificio, mantenimiento de las áreas comunes, amenidades y contribuciones al fondo de reserva para contingencias para futuras reparaciones mayores. Las cuotas varían mucho según el edificio y se revisan en los documentos de la strata antes de retirar los subjects; los prestamistas también cuentan el 50% de la cuota en tu índice GDS. Los edificios más antiguos o las reparaciones importantes próximas pueden implicar cargos especiales además de la cuota mensual."
     },
     "steps": {
      "kw": [
       "pasos para comprar",
       "pasos de compra",
       "cómo comprar",
       "proceso de compra",
       "por dónde empiezo"
      ],
      "ans": "Comprar una vivienda en BC sigue ocho pasos: (1) obtener una preaprobación hipotecaria, (2) ahorrar tu cuota inicial y los costos de cierre, (3) establecer tus criterios de búsqueda, (4) visitar viviendas y comparar — leyendo los documentos de la strata para condominios y casas adosadas, (5) presentar una oferta con condiciones (subjects), (6) retirar los subjects y pagar el depósito, (7) completar la compra con un abogado o notario, y (8) el día de posesión, cuando recibes las llaves. <a href='#guide'>Consulta la guía completa</a>"
     },
     "listings": {
      "kw": [
       "anuncio",
       "anuncios",
       "mls",
       "viviendas en venta",
       "casas en venta",
       "propiedades"
      ],
      "ans": "Las únicas propiedades que conozco son los anuncios de muestra en esta página (datos de muestra — para vista previa de diseño): {list} Los datos en vivo de MLS® se conectan después de la licencia, por lo que no puedo buscar ninguna otra propiedad — pero el Asistente de Coincidencias arriba puede filtrar estas muestras por presupuesto, recámaras, ciudad y tipo. <a href='#listings'>Explorar los anuncios de muestra</a>"
     },
     "proptax": {
      "kw": [
       "impuesto predial",
       "impuesto municipal",
       "tasa impositiva",
       "impuesto anual",
       "impuestos de una vivienda",
       "home owner grant"
      ],
      "ans": "El impuesto predial anual es el impuesto municipal anual sobre una vivienda de tu propiedad — diferente del impuesto único de transferencia de propiedad que pagas cuando compras. Se calcula como el valor tasado de tu vivienda (establecido cada año por BC Assessment) multiplicado por la tasa impositiva (mill rate) de tu ciudad, y la BC Home Owner Grant puede reducirlo para tu residencia principal. No existe una única tasa para Metro Vancouver — difiere por ciudad, clase de propiedad y valor tasado — pero como orientación aproximada, muchas viviendas aquí pagan unos pocos miles de dólares al año; las calculadoras de este sitio usan $4,200/year como ejemplo práctico. Los avisos de impuestos suelen llegar a finales de la primavera y el pago vence a principios de julio. Verifica tu monto exacto con tu ciudad y BC Assessment (bcassessment.ca). <a href='#buyvsrent'>Consulta el impuesto predial en la calculadora de comprar vs. rentar</a>"
     },
     "rent": {
      "kw": [
       "renta",
       "rentar",
       "rentas",
       " renta ",
       "renta en ",
       "renta por ",
       "la renta es ",
       "arrendamiento",
       "renta típica"
      ],
      "ans": "Las rentas en Metro Vancouver varían mucho según la ciudad, el tamaño y la antigüedad del edificio. Como orientación aproximada a partir de informes recientes del mercado (2025–2026): un apartamento de 1 recámara suele rentarse por unos $2,100–$2,800/month en Vancouver, $1,900–$2,400 en Burnaby y $1,700–$2,200 en Surrey, Coquitlam y Port Coquitlam; uno de 2 recámaras suele costar unos $700–$900/month más. Estos son rangos generales solo como orientación — no cotizaciones para ninguna vivienda específica. Para cifras actuales, consulta anuncios de renta en vivo y los datos del mercado de renta de CMHC. La calculadora de comprar vs. rentar de este sitio usa $2,600/month como renta de ejemplo: <a href='#buyvsrent'>comparar rentar con comprar</a>. BC también limita los aumentos anuales de renta para arrendamientos existentes — el límite es 2.3% para 2026 y 2.2% para 2027; verifica el límite actual en gov.bc.ca."
     },
     "areas": {
      "kw": [
       "vecindario",
       "barrio",
       "vecindarios",
       "barrios",
       "qué zona",
       "dónde vivir",
       "mejor zona",
       "zonas"
      ],
      "ans": "El Centro de Conocimiento de este sitio tiene guías en lenguaje sencillo sobre seis zonas de Metro Vancouver. Burnaby — Metrotown: vida en rascacielos, centrada en el transporte público, alrededor de un importante centro comercial y una estación central de SkyTrain. Coquitlam — Coquitlam Centre: un centro de ritmo familiar con SkyTrain y West Coast Express, junto a Lafarge Lake. Surrey — Surrey City Centre: un centro urbano joven y de rápido crecimiento con dos estaciones de SkyTrain y un campus universitario. Vancouver — Downtown: el núcleo urbano. Richmond: una ciudad plana, con servicio de transporte público, al sur de Vancouver. Port Coquitlam: un ambiente de ciudad más pequeña con servicio de West Coast Express. Cada guía cubre el carácter de la zona, cómo desplazarse, los tipos de vivienda y para quién es adecuada. <a href='#knowledge'>Leer las guías de vecindarios</a>"
     },
     "market": {
      "kw": [
       "mercado de vivienda",
       "mercado inmobiliario",
       "precios de vivienda",
       "precios de casas",
       "condiciones del mercado",
       "cómo está el mercado",
       "precios de propiedades"
      ],
      "ans": "Metro Vancouver es uno de los mercados de vivienda más caros de Canadá. Como orientación muy aproximada (2026): los condominios suelen oscilar entre unos $450,000 en zonas periféricas y $800,000 o más cerca del centro de Vancouver; las casas adosadas, aproximadamente $750,000–$1,300,000; y las casas unifamiliares, desde unos $1,200,000 en Surrey y Coquitlam hasta $2,000,000 o más en Vancouver. Los anuncios de muestra de esta página reflejan esa dispersión. Los precios se mueven con las tasas de interés, la oferta y la economía en general, y cambian mes a mes — trata estos rangos solo como orientación educativa y consulta las estadísticas actuales de BCREA o de tu junta inmobiliaria local antes de basarte en ellos. <a href='#listings'>Explorar los anuncios de muestra</a>"
     }
    };
    KB.forEach(function(e){ var t = KB_ES[e.id]; if (t) { e.kw.es = t.kw; e.ans.es = t.ans; } });;
Object.assign(I18N.en.cities, {"North Vancouver":"North Vancouver","West Vancouver":"West Vancouver","Langley":"Langley","Abbotsford":"Abbotsford","Delta":"Delta","New Westminster":"New Westminster","Port Moody":"Port Moody","Maple Ridge":"Maple Ridge","Pitt Meadows":"Pitt Meadows","White Rock":"White Rock","Mission":"Mission","Chilliwack":"Chilliwack"});
Object.assign(I18N.fa.cities, {"North Vancouver":"ونکوور شمالی","West Vancouver":"ونکوور غربی","Langley":"لنگلی","Abbotsford":"ابوتسفورد","Delta":"دلتا","New Westminster":"نیو وست‌مینستر","Port Moody":"پورت مودی","Maple Ridge":"میپل ریج","Pitt Meadows":"پیت مدوز","White Rock":"وایت راک","Mission":"میشن","Chilliwack":"چیلیوک"});
Object.assign(I18N.hi.cities, {"North Vancouver":"नॉर्थ वैंकूवर","West Vancouver":"वेस्ट वैंकूवर","Langley":"लैंगली","Abbotsford":"एबॉट्सफ़ोर्ड","Delta":"डेल्टा","New Westminster":"न्यू वेस्टमिंस्टर","Port Moody":"पोर्ट मूडी","Maple Ridge":"मेपल रिज","Pitt Meadows":"पिट मीडोज़","White Rock":"व्हाइट रॉक","Mission":"मिशन","Chilliwack":"चिलिवैक"});
Object.assign(I18N.zh.cities, {"North Vancouver":"北温哥华","West Vancouver":"西温哥华","Langley":"兰里","Abbotsford":"阿伯茨福德","Delta":"三角洲","New Westminster":"新西敏","Port Moody":"满地宝","Maple Ridge":"枫树岭","Pitt Meadows":"匹特草原","White Rock":"白石","Mission":"米逊","Chilliwack":"奇利瓦克"});
Object.assign(I18N.es.cities, {"North Vancouver":"North Vancouver","West Vancouver":"West Vancouver","Langley":"Langley","Abbotsford":"Abbotsford","Delta":"Delta","New Westminster":"New Westminster","Port Moody":"Port Moody","Maple Ridge":"Maple Ridge","Pitt Meadows":"Pitt Meadows","White Rock":"White Rock","Mission":"Mission","Chilliwack":"Chilliwack"});
    var CHIPS = [
      {q:{en:"What are the steps to buy a home in BC?", fa:"مراحل خرید خانه در BC چیست؟", hi:"BC में घर खरीदने के चरण क्या हैं?", zh:"在 BC 买房有哪些步骤？"}},
      {q:{en:"How much down payment do I need?", fa:"چقدر پیش‌پرداخت نیاز دارم؟", hi:"मुझे कितना डाउन पेमेंट चाहिए?", zh:"我需要多少首付？"}},
      {q:{en:"How is the property transfer tax calculated?", fa:"مالیات انتقال ملک چگونه محاسبه می‌شود؟", hi:"संपत्ति हस्तांतरण कर कैसे लगाया जाता है?", zh:"房产转让税如何计算？"}},
      {q:{en:"What is the mortgage stress test?", fa:"تست استرس وام چیست؟", hi:"मॉर्गेज स्ट्रेस टेस्ट क्या है?", zh:"什么是房贷压力测试？"}},
      {q:{en:"What do subjects mean in an offer?", fa:"«شروط» در یک پیشنهاد خرید یعنی چه؟", hi:"ऑफ़र में शर्तों (subjects) का क्या मतलब होता है?", zh:"报价中的“附带条件”是什么意思？"}}
    ];
    var welcomeEls = [];
    function postMsg(cls, html){
      var els = [];
      ["chatLog", "aiLog"].forEach(function(id){
        var log = $(id);
        if (!log) return;
        var d = document.createElement("div");
        d.className = "msg " + cls;
        d.setAttribute("dir", "auto");
        d.innerHTML = html;
        log.appendChild(d);
        log.scrollTop = log.scrollHeight;
        els.push(d);
      });
      return els;
    }
    function listingsSummary(){
      return LISTINGS.map(function(l){ return "MLS® " + esc(l.mls) + " — " + esc(T()["type_" + l.type] || l.type) + ", " + esc(T().cities[l.city] || l.city) + ", " + fmt(l.price); }).join("; ") + ".";
    }
    function kbAnswer(entry){
      var a = entry.ans[lang] || entry.ans.en;
      return a.split("{list}").join(listingsSummary());
    }
    /* --- listing search: understand city / type / budget / bedrooms in the question --- */
    function normDigits(s){
      return s.replace(/[۰-۹]/g, function(c){ return "۰۱۲۳۴۵۶۷۸۹".indexOf(c); })
              .replace(/[०-९]/g, function(c){ return "०१२३४५६७८९".indexOf(c); });
    }
    function normText(s){
      return String(s).toLowerCase().replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/\u200c/g, " ").replace(/[\u0660-\u0669]/g, function(c){ return String(c.charCodeAt(0) - 0x660); }).replace(/\s+/g, " ");
    }
    function cityVariants(){
      var map = {};
      CITIES.forEach(function(c){
        map[c.toLowerCase()] = c;
        ["en", "fa", "hi", "zh", "es"].forEach(function(L){
          var v = I18N[L].cities && I18N[L].cities[c];
          if (v) map[String(v).toLowerCase()] = c;
        });
      });
      map["metrotown"] = "Burnaby";
      map["downtown vancouver"] = "Vancouver";
      return map;
    }
    var TYPE_KW = [
      {type:"condo", words:["condo", "apartment", "آپارتمان", "कॉन्डो", "अपार्टमेंट", "公寓"]},
      {type:"townhouse", words:["townhouse", "townhome", "town house", "تاون‌هاوس", "تاون هاوس", "टाउनहाउस", "联排"]},
      {type:"house", words:["detached", "single-family", "single family", "خانه‌ی مستقل", "خانه مستقل", "अलग मकान", "独立屋", "独立房"]}
    ];
    var LIST_INTENT = ["listing", "for sale", "buy", "purchase", "فایل", "آگهی", "برای فروش", "खरीद", "बिक्री", "लिस्टिंग", "房源", "在售", "出售"];
    var FA_NUM = {"یک":1, "دو":2, "سه":3, "چهار":4, "پنج":5};
    var ZH_NUM = {"一":1, "二":2, "两":2, "三":3, "四":4, "五":5};
    function parseListingQuery(text){
      var msg = normText(normDigits(text));
      var crit = {};
      var cmap = cityVariants();
      var variants = Object.keys(cmap).sort(function(a, b){ return b.length - a.length; });
      for (var vi = 0; vi < variants.length; vi++){ if (msg.indexOf(variants[vi]) !== -1){ crit.city = cmap[variants[vi]]; break; } }
      for (var i = 0; i < TYPE_KW.length; i++){
        for (var j = 0; j < TYPE_KW[i].words.length; j++){
          if (msg.indexOf(TYPE_KW[i].words[j]) !== -1){ crit.type = TYPE_KW[i].type; break; }
        }
        if (crit.type) break;
      }
      var bm = msg.match(/(\d+)\s*[- ]?\s*(bed|bd|bedroom|bedrooms|خواب|बेडरूम|बेड|卧室|卧)/);
      if (bm) crit.beds = parseInt(bm[1], 10);
      if (!crit.beds){
        for (var fw in FA_NUM){ if (msg.indexOf(fw + "خواب") !== -1 || msg.indexOf(fw + " خواب") !== -1){ crit.beds = FA_NUM[fw]; break; } }
      }
      if (!crit.beds){
        for (var zw in ZH_NUM){ if (msg.indexOf(zw + "卧") !== -1){ crit.beds = ZH_NUM[zw]; break; } }
      }
      var pm = msg.match(/(?:under|below|max|up to|less than|زیر|کمتر از|以内|以下|不超过|से कम)\s*\$?\s*([\d][\d.,]*)\s*(k|m)?/)
            || msg.match(/\$\s*([\d][\d.,]*)\s*(k|m)?/)
            || msg.match(/([\d][\d.,]*)\s*(k|m)\b/);
      if (pm){
        var val = parseFloat(pm[1].replace(/,/g, ""));
        var after = msg.slice(pm.index + pm[0].length, pm.index + pm[0].length + 8);
        if (!isNaN(val) && !/^\s*(%|٪|درصد|प्रतिशत)/.test(after)){
          if (pm[2] === "k") val = val * 1000;
          else if (pm[2] === "m") val = val * 1000000;
          else if (/^\s*万/.test(after)) val = val * 10000;
          else if (/^\s*میلیون/.test(after)) val = val * 1000000;
          else if (/^\s*करोड़/.test(after)) val = val * 10000000;
          else if (/^\s*लाख/.test(after)) val = val * 100000;
          else if (/^\s*هزار/.test(after)) val = val * 1000;
          else if (pm[0].indexOf("$") === -1 && val < 10000) val = null; /* a bare small number is not a budget */
          if (val !== null) crit.max = val;
        }
      }
      var intent = false;
      for (var n = 0; n < LIST_INTENT.length; n++){
        var w = LIST_INTENT[n];
        if (/^[\x00-\x7F]+$/.test(w)){ if (new RegExp("(^|[^a-z])" + w + "([^a-z]|$)").test(msg)){ intent = true; break; } }
        else if (msg.indexOf(w) !== -1){ intent = true; break; }
      }
      var nCrit = (crit.city ? 1 : 0) + (crit.type ? 1 : 0) + (crit.beds ? 1 : 0) + (crit.max ? 1 : 0);
      if (nCrit >= 2 || (intent && nCrit >= 1)) return crit;
      return null;
    }
    function searchListings(crit){
      var t = T();
      var hits = LISTINGS.filter(function(l){
        if (crit.city && l.city !== crit.city) return false;
        if (crit.type && l.type !== crit.type) return false;
        if (crit.max && l.price > crit.max) return false;
        if (crit.beds && l.beds < crit.beds) return false;
        return true;
      });
      if (!hits.length) return t.sr_none;
      var lines = hits.map(function(l){
        return "<b>" + fmt(l.price) + "</b> — " + l.beds + " " + esc(t.beds) + " · " + esc(t["type_" + l.type]) + " · " + esc(t.cities[l.city] || l.city)
          + (l.status === "pending" ? " · " + esc(t.pending) : "")
          + " · MLS® " + esc(l.mls)
          + " · <a href=\"#listings\" data-open-listing=\"" + esc(l.mls) + "\">" + esc(t.view) + "</a>";
      });
      return fill(t.sr_found, {n: hits.length}) + "<br>" + lines.join("<br>");
    }
    /* --- site search: sections + the live Knowledge Center cards on this page --- */
    var PAGE_OF = window.PAGE_OF || {"listings":"listings.html","calculator":"mortgage-calculator.html","buyvsrent":"buy-vs-rent.html","afford":"affordability.html","invest":"investor-analysis.html","match":"ai-assistant.html#match","assistant":"ai-assistant.html#assistant","seller-tools":"seller-tools.html","market-pulse":"market-pulse.html","guide":"first-time-buyers.html","fhsa":"first-time-buyers.html#fhsa","knowledge":"knowledge-centre.html","newsletter":"index.html#newsletter","contact":"contact.html"};
    var SECTIONS_IDX = [
      {id:"listings", key:"search_title", kw:"search listings homes browse mls"},
      {id:"calculator", key:"calc_title", kw:"mortgage calculator payment loan interest"},
      {id:"buyvsrent", key:"bv_title", kw:"rent renting buy versus compare"},
      {id:"afford", key:"af_title", kw:"affordability income qualify ratios budget"},
      {id:"invest", key:"iv_title", kw:"investor rental cash flow cap rate return"},
      {id:"match", key:"match_title", kw:"match assistant find homes criteria"},
      {id:"assistant", key:"as_title", kw:"assistant questions help chat"},
      {id:"seller-tools", key:"st_title", kw:"seller selling checklist description draft staging"},
      {id:"guide", key:"g_title", kw:"guide first-time buyer steps process"},
      {id:"fhsa", key:"fh_title", kw:"fhsa savings account tracker contribution"},
      {id:"knowledge", key:"kc_title", kw:"knowledge neighbourhood neighborhood guides explainers areas"},
      {id:"newsletter", key:"nl_title", kw:"newsletter monthly report subscribe email market"},
      {id:"contact", key:"lead_title", kw:"contact email message form"}
    ];
    var STOPWORDS = ["what", "how", "does", "the", "and", "for", "are", "can", "you", "your", "with", "this", "that", "much", "many", "about", "چیست", "چطور", "چگونه", "برای", "است", "می‌شود", "क्या", "कैसे", "क्या", "है"];
    function siteSearch(text){
      var msg = text.toLowerCase();
      var toks = msg.split(/[^\p{L}\p{M}\p{N}\u200c]+/u).filter(function(w){ return w.length >= 3 && STOPWORDS.indexOf(w) === -1; });
      if (lang === "zh"){
        var ZH_BG_STOP = ["什么", "可以", "怎么", "这个", "那个", "请问", "没有", "有没", "是不", "我想", "我要"];
        for (var i = 0; i + 1 < msg.length; i++){
          var bg = msg.substr(i, 2);
          if (/[\u4e00-\u9fff]{2}/.test(bg) && toks.indexOf(bg) === -1 && ZH_BG_STOP.indexOf(bg) === -1) toks.push(bg);
        }
      }
      if (!toks.length) return null;
      function score(hay){ var s = 0; toks.forEach(function(w){ if (hay.indexOf(w) !== -1) s++; }); return s; }
      var found = [];
      SECTIONS_IDX.forEach(function(s){
        var hay = ((T()[s.key] || "") + " " + (I18N.en[s.key] || "") + " " + s.kw).toLowerCase();
        var sc = score(hay);
        if (sc >= 2 || (toks.length === 1 && sc >= 1)) found.push({sc: sc, html: "<a href=\"" + (PAGE_OF[s.id] || ("#" + s.id)) + "\">" + esc(T()[s.key] || s.key) + "</a>"});
      });
      document.querySelectorAll(".kc-card").forEach(function(card){
        var h = card.querySelector("h4");
        if (!h) return;
        var sc = score(card.textContent.toLowerCase());
        if (sc >= Math.min(2, toks.length)) found.push({sc: sc, html: "<a href=\"" + (PAGE_OF.knowledge || "#knowledge") + "\">" + esc(h.textContent) + "</a>"});
      });
      if (!found.length) return null;
      found.sort(function(a, b){ return b.sc - a.sc; });
      found = found.slice(0, 4);
      return esc(T().sr_intro) + "<br>" + found.map(function(f){ return "• " + f.html; }).join("<br>");
    }
    function findAnswer(text){
      var crit = parseListingQuery(text);
      if (crit) return searchListings(crit);
      var msg = normText(normDigits(text));
      var best = null, bestLen = 0;
      for (var i = 0; i < KB.length; i++){
        var kws = (KB[i].kw[lang] || []).concat(KB[i].kw.en || []);
        for (var j = 0; j < kws.length; j++){
          var kw = normText(String(kws[j]));
          if (kw && msg.indexOf(kw) !== -1 && kw.length > bestLen){ best = KB[i]; bestLen = kw.length; }
        }
      }
      if (best) return kbAnswer(best);
      var site = siteSearch(text);
      if (site) return site;
      return null;
    }
    /* Preset question chips: shown only until the visitor starts their own
       conversation — hidden while they type, and gone for good once a
       message has been sent, so the assistant's answers stay in focus. */
    var chipsDismissed = false;
    function updateChipsVisibility(){
      [["chatChips", "chatInput"], ["aiChips", "aiInput"]].forEach(function(pair){
        var box = $(pair[0]), input = $(pair[1]);
        if (!box || !input) return;
        var hide = chipsDismissed || input.value.trim() !== "";
        box.style.display = hide ? "none" : "";
      });
    }
    function fillChips(box, input){
      if (!box || !input) return;
      box.innerHTML = "";
      CHIPS.forEach(function(c){
        var b = document.createElement("button");
        b.type = "button";
        b.textContent = c.q[lang] || c.q.en;
        b.addEventListener("click", function(){
          input.value = c.q[lang] || c.q.en;
          input.focus();
          updateChipsVisibility();
        });
        box.appendChild(b);
      });
    }
    function renderChips(){
      fillChips($("chatChips"), $("chatInput"));
      fillChips($("aiChips"), $("aiInput"));
      updateChipsVisibility();
    }
    function renderAssistantLang(){
      renderChips();
      if (!welcomeEls.length) welcomeEls = postMsg("bot", esc(T().as_welcome));
      else welcomeEls.forEach(function(el){ el.innerHTML = esc(T().as_welcome); });
      var t = T();
      if ($("aiFab")) $("aiFab").setAttribute("aria-label", "Ask AI"); /* fixed micro-label — literal in all languages, matches the pill text */
      if ($("aiClose")) $("aiClose").setAttribute("aria-label", t.ai_close);
    }
    /* --- live AI brain: the Gemini worker (Google Search grounding) answers
       whatever this site itself doesn't cover — market comparisons, other
       provinces, the latest month's numbers. The API key lives only in the
       worker; this page sends just the question, the language and the last
       few turns of the conversation. --- */
    var AI_CHAT_URL = "https://ai-chat.erfanbillion.workers.dev";
    var chatHistory = [];
    function pushHistory(role, text){
      chatHistory.push({role: role, text: String(text).slice(0, 500)});
      if (chatHistory.length > 12) chatHistory = chatHistory.slice(-12);
    }
    function plainOf(html){
      try {
        var dp = new DOMParser().parseFromString(String(html), "text/html");
        return ((dp.body && dp.body.textContent) || "").replace(/\s+/g, " ").trim();
      } catch (e) {
        var d = document.createElement("div");
        d.innerHTML = html;
        return (d.textContent || "").replace(/\s+/g, " ").trim();
      }
    }
    /* Questions about places/times beyond this site go straight to the web
       brain — e.g. "compare the ON market with BC over the last month". */
    var WEB_PLACES = ["ontario", "toronto", "ottawa", "alberta", "calgary", "edmonton", "quebec", "québec", "montreal", "montréal", "manitoba", "winnipeg", "saskatchewan", "halifax", "nova scotia", "new brunswick", "newfoundland", "انتاریو", "اونتاریو", "تورنتو", "آلبرتا", "کبک", "مونترال", "ओंटारियो", "टोरंटो", "अल्बर्टा", "क्यूबेक", "安大略", "多伦多", "阿尔伯塔", "魁北克", "蒙特利尔"];
    var WEB_TIME = ["last month", "this month", "last week", "recent", "latest", "this year", "ماه گذشته", "ماه اخیر", "اخیرا", "اخیراً", "تازه‌ترین", "تازه ترین", "امسال", "पिछले महीने", "इस महीने", "हाल ही", "最近", "上个月", "本月", "今年"];
    var WEB_MARKET = ["market", "prices", "price", "بازار", "مارکت", "قیمت", "बाज़ार", "कीमत", "市场", "房价", "价格"];
    function webIntent(text){
      var m = text.toLowerCase();
      var i;
      for (i = 0; i < WEB_PLACES.length; i++){ if (m.indexOf(WEB_PLACES[i]) !== -1) return true; }
      var hasTime = false, hasMarket = false;
      for (i = 0; i < WEB_TIME.length; i++){ if (m.indexOf(WEB_TIME[i]) !== -1){ hasTime = true; break; } }
      for (i = 0; i < WEB_MARKET.length; i++){ if (m.indexOf(WEB_MARKET[i]) !== -1){ hasMarket = true; break; } }
      return hasTime && hasMarket;
    }
    /* Pure greetings / thanks get a warm, human reply locally (the old brain
       answered "سلام" with a canned paragraph). A greeting attached to a real
       question is not treated as social — the question itself is answered. */
    var GREET_WORDS = ["hello", "hey", "hi", "salam", "سلام علیکم", "سلام", "درود", "وقت بخیر", "صبح بخیر", "عصر بخیر", "روز بخیر", "नमस्ते", "नमस्कार", "你好", "您好", "早上好", "早安"];
    var THANKS_WORDS = ["thank you", "thanks", "thank", "مرسی", "ممنون", "تشکر", "سپاس", "धन्यवाद", "शुक्रिया", "谢谢", "感谢"];
    function socialKind(text){
      var m = " " + text.toLowerCase().replace(/[!?؟.,،؛:。]/g, " ") + " ";
      function hit(words){ for (var i = 0; i < words.length; i++){ var w = words[i]; if (/^[\x00-\x7F ]+$/.test(w)){ if (m.indexOf(" " + w + " ") !== -1) return true; } else if (m.indexOf(w) !== -1) return true; } return false; }
      var g = hit(GREET_WORDS), th = hit(THANKS_WORDS);
      if (!g && !th) return null;
      var rest = m;
      GREET_WORDS.concat(THANKS_WORDS).forEach(function(w){ rest = rest.split(w).join(" "); });
      if (rest.replace(/\s+/g, "").length > 3) return null;
      return th && !g ? "thanks" : "greet";
    }
    function postTyping(){
      var els = [];
      ["chatLog", "aiLog"].forEach(function(id){
        var log = $(id);
        if (!log) return;
        var d = document.createElement("div");
        d.className = "msg bot typing";
        d.setAttribute("role", "status");
        d.setAttribute("aria-label", T().ai_thinking || "Thinking…");
        d.innerHTML = "<span class=\"tdot\"></span><span class=\"tdot\"></span><span class=\"tdot\"></span>";
        log.appendChild(d);
        log.scrollTop = log.scrollHeight;
        els.push(d);
      });
      return els;
    }
    function removeEls(els){ els.forEach(function(el){ if (el && el.parentNode) el.parentNode.removeChild(el); }); }
    function aiTextToHtml(text, sources){
      var html = esc(text)
        .replace(/\[([^\]]{1,120})\]\((https?:\/\/[^\s)]+)\)/g, function(m0, label, url){
          var u = url.replace(/&amp;/g, "&"), host = "";
          try { host = new URL(u).hostname.replace(/^www\./, ""); } catch (e) {}
          if (host && label.indexOf(host) === -1) label = label + " (" + host + ")";
          return "<a href=\"" + u + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + label + "</a>";
        })
        .replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, function(m0, pre, url){
          var trail = (url.match(/[.,;:!?]+$/) || [""])[0];
          var u2 = trail ? url.slice(0, -trail.length) : url;
          return pre + "<a href=\"" + u2.replace(/&amp;/g, "&") + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + u2 + "</a>" + trail;
        })
        .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
      html = html.split(/\n+/).map(function(l){ return l.replace(/^\s*[-*•]\s+/, "• "); }).join("<br>");
      if (sources && sources.length){
        var links = [];
        sources.forEach(function(s){
          if (s && /^https?:\/\//i.test(s.url || "")){
            links.push("<a href=\"" + esc(s.url) + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + esc(s.title || s.url) + "</a>");
          }
        });
        if (links.length) html += "<span class=\"ai-sources\">" + esc(T().ai_sources || "Sources") + ": " + links.join(" · ") + "</span>";
      }
      return html;
    }
    /* Repeat questions are answered from memory, not the live brain, so the
       free daily quota is spent only on questions not seen yet. */
    var aiCache = {};
    var chatBusy = false;
    function askGemini(text, done){
      var prevUser = "";
      for (var ph = chatHistory.length - 2; ph >= 0; ph--){ if (chatHistory[ph].role === "user"){ prevUser = chatHistory[ph].text; break; } }
      var cacheKey = lang + "|" + prevUser.toLowerCase().replace(/\s+/g, " ").trim() + "|" + text.toLowerCase().replace(/\s+/g, " ").trim();
      if (aiCache[cacheKey]){ done(aiCache[cacheKey]); return; }
      var ctrl = ("AbortController" in window) ? new AbortController() : null;
      var timer = ctrl ? setTimeout(function(){ ctrl.abort(); }, 20000) : null;
      function finish(v){ if (timer) clearTimeout(timer); done(v); }
      fetch(AI_CHAT_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: text, lang: lang, history: chatHistory.slice(0, -1).slice(-6)}),
        signal: ctrl ? ctrl.signal : undefined
      }).then(function(r){
        return r.json().catch(function(){ return null; }).then(function(d){ return {status: r.status, data: d}; });
      }).then(function(res){
        if (res.status === 200 && res.data && res.data.ok && res.data.reply){
          var out = {html: aiTextToHtml(res.data.reply, res.data.sources), raw: res.data.reply};
          aiCache[cacheKey] = out;
          finish(out);
        } else finish(null);
      }).catch(function(){ finish(null); });
    }
    /* --- smart cross-promotion: once per visit, right after the assistant
       answers a market question, it invites the visitor to this site's free
       monthly market report — the answer first, the invitation second, and
       the button jumps straight to the signup form. --- */
    var nlNudged = false;
    function gotoNewsletter(){
      if (typeof aiPanel !== "undefined" && aiPanel && aiPanel.classList.contains("open")) setAi(false);
      var sec = document.getElementById("newsletter");
      if (sec) sec.scrollIntoView({behavior: "smooth", block: "start"});
      else window.location.href = "index.html#newsletter";
      setTimeout(function(){ var f = $("nlFirst"); if (f && window.matchMedia && window.matchMedia("(pointer:fine)").matches) f.focus({preventScroll: true}); }, 650);
    }
    function maybeNudge(text){
      if (nlNudged) return;
      var marketish = webIntent(text);
      if (!marketish){
        var m = text.toLowerCase();
        for (var i = 0; i < WEB_MARKET.length; i++){ if (m.indexOf(WEB_MARKET[i]) !== -1){ marketish = true; break; } }
      }
      if (!marketish) return;
      nlNudged = true;
      var pitch = T().ai_nl_pitch, btn = T().ai_nl_btn;
      if (!pitch || !btn) return;
      var els = postMsg("bot", esc(pitch) + "<br><button type=\"button\" class=\"chat-cta\">" + esc(btn) + "</button>");
      els.forEach(function(el){
        var b = el.querySelector(".chat-cta");
        if (b) b.addEventListener("click", gotoNewsletter);
      });
      pushHistory("assistant", pitch);
    }
    function askChat(input){
      var text = input.value.trim().slice(0, 1000);
      if (!text) return;
      chipsDismissed = true;
      postMsg("user", esc(text));
      pushHistory("user", text);
      input.value = "";
      updateChipsVisibility();
      input.focus();
      var local = webIntent(text) ? null : findAnswer(text);
      if (local){
        postMsg("bot", local);
        pushHistory("assistant", plainOf(local));
        maybeNudge(text);
        return;
      }
      var social = socialKind(text);
      if (social){
        var sTxt = T()[social === "thanks" ? "ai_thanks" : "ai_greet"];
        if (sTxt){
          postMsg("bot", esc(sTxt));
          pushHistory("assistant", sTxt);
          return;
        }
      }
      if (chatBusy){
        var fb0 = findAnswer(text);
        if (fb0){ postMsg("bot", fb0); pushHistory("assistant", plainOf(fb0)); }
        else { var eh0 = T().ai_err ? esc(T().ai_err) : (AS_FALLBACK[lang] || AS_FALLBACK.en); postMsg("bot", eh0); pushHistory("assistant", plainOf(eh0)); }
        return;
      }
      chatBusy = true;
      var typing = postTyping();
      askGemini(text, function(res){
        chatBusy = false;
        removeEls(typing);
        if (res){
          postMsg("bot", res.html);
          pushHistory("assistant", res.raw);
          maybeNudge(text);
        } else {
          /* Live brain unreachable or out of free quota: still answer from
             this site's own knowledge base instead of dead-ending. */
          var fb = findAnswer(text);
          if (fb){
            postMsg("bot", fb);
            pushHistory("assistant", plainOf(fb));
          } else {
            var errHtml = T().ai_err ? esc(T().ai_err) : (AS_FALLBACK[lang] || AS_FALLBACK.en);
            postMsg("bot", errHtml);
            pushHistory("assistant", plainOf(errHtml));
          }
        }
      });
    }
    if ($("chatForm")) $("chatForm").addEventListener("submit", function(e){
      e.preventDefault();
      askChat($("chatInput"));
    });
    if ($("aiForm")) $("aiForm").addEventListener("submit", function(e){
      e.preventDefault();
      askChat($("aiInput"));
    });
    ["chatInput", "aiInput"].forEach(function(id){
      var chatEl = $(id); if (chatEl) chatEl.addEventListener("input", updateChipsVisibility);
    });
    /* --- floating widget open / close --- */
    var aiPanel = $("aiPanel"), aiFab = $("aiFab");
    function setAi(open){
      aiPanel.classList.toggle("open", open);
      aiFab.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) $("aiInput").focus();
    }
    aiFab.addEventListener("click", function(){ setAi(!aiPanel.classList.contains("open")); });
    $("aiClose").addEventListener("click", function(){ setAi(false); aiFab.focus(); });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && aiPanel.classList.contains("open")) setAi(false);
      if (e.key === "Escape" && $("tourModal") && $("tourModal").style.display === "block") closeTour();
    });
    aiPanel.addEventListener("click", function(e){
      var a = e.target && e.target.closest ? e.target.closest("a[href^='#']") : null;
      if (a) setAi(false);
    });
    /* ---------- language ---------- */
    function applyLang(next, save){
      lang = next; var t = T();
      document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
      $("langSel").value = lang;
      if (save) { try { localStorage.setItem("erfan-re-lang", lang); } catch(e){} }
      document.querySelectorAll("[data-i18n]").forEach(function(el){ var k = el.getAttribute("data-i18n"); if (t[k]) el.textContent = t[k]; });
      document.querySelectorAll("[data-i18n-ph]").forEach(function(el){ var k = el.getAttribute("data-i18n-ph"); if (t[k]) el.setAttribute("placeholder", t[k]); });
      if (window.__applyPortalTexts) window.__applyPortalTexts();
      renderAssistantLang(); renderKnowledge();
      if (window.__applyPortalTexts) window.__applyPortalTexts();
    }
    $("langSel").addEventListener("change", function(){ applyLang(this.value, true); });
    /* ---- portal-managed data: merge + settings application ---- */
    function mergePortalListings(){
      var d = window.__portalListings;
      if (!d || !d.ok) return;
      (Array.isArray(d.deleted) ? d.deleted : []).forEach(function(mls){
        for (var i = LISTINGS.length - 1; i >= 0; i--) if (LISTINGS[i].mls === mls) LISTINGS.splice(i, 1);
      });
      (Array.isArray(d.listings) ? d.listings : []).forEach(function(rec){
        if (!rec || typeof rec !== "object" || typeof rec.mls !== "string" || !/^[A-Za-z0-9_-]{1,32}$/.test(rec.mls)) return;
        if (!rec.photo || typeof rec.photo !== "string" || /["'\s<>]/.test(rec.photo) || (/:/.test(rec.photo) && !/^https:\/\//i.test(rec.photo))) rec.photo = "photos/hero.webp";
        if (typeof rec.desc === "string") rec.desc = { en: rec.desc };
        if (!rec.desc || typeof rec.desc !== "object") rec.desc = { en: "" };
        ["en","fa","hi","zh","es"].forEach(function(L){ if (typeof rec.desc[L] !== "string") rec.desc[L] = (L === "en" ? "" : rec.desc.en || ""); });
        var num = function(v, d){ var n = Number(v); return isFinite(n) ? n : d; };
        rec.price = num(rec.price, 0);
        if (!(rec.price > 0)) return; /* a portal record without a usable price is dropped, never rendered */
        rec.beds = num(rec.beds, 0); rec.baths = num(rec.baths, 0); rec.sqft = num(rec.sqft, 0);
        rec.lot = (rec.lot == null ? null : num(rec.lot, null)); rec.year = num(rec.year, 0) || null;
        rec.strata = (rec.strata == null ? null : num(rec.strata, null)); rec.tax = num(rec.tax, 0);
        rec.dom = num(rec.dom, 0); rec.stalls = num(rec.stalls, 0);
        if (rec.originalPrice != null) rec.originalPrice = num(rec.originalPrice, 0);
        if (!Array.isArray(rec.features)) rec.features = [];
        rec.features = rec.features.filter(function(f){ return typeof f === "string"; });
        if (typeof rec.listed !== "string") rec.listed = "";
        if (typeof rec.street !== "string") rec.street = "";
        if (typeof rec.city !== "string") rec.city = "";
        if (typeof rec.postal !== "string") rec.postal = "";
        if (["condo", "townhouse", "house"].indexOf(rec.type) === -1) rec.type = "condo";
        if (["underground", "garage", "carport", "street", "none"].indexOf(rec.parking) === -1) rec.parking = "none";
        if (rec.status !== "pending" && rec.status !== "sold") rec.status = "active";
        if (rec.pt !== "presale") rec.pt = "resale";
        var ix = -1;
        for (var i = 0; i < LISTINGS.length; i++) if (LISTINGS[i].mls === rec.mls) ix = i;
        if (ix >= 0) LISTINGS[ix] = rec; else LISTINGS.push(rec);
      });
    }
    function applyPortalVars(){
      var s = window.__portalSettings;
      if (!s) return;
      var rateN = Number(s.rate);
      if (isFinite(rateN) && rateN > 0 && rateN < 30) window.__portalRate = rateN;
      if (s.slots && s.slots.start && s.slots.end) {
        var toMin = function(x){ var p = String(x).split(":"); return (+p[0]) * 60 + (+p[1]); };
        var a = toMin(s.slots.start), b = toMin(s.slots.end);
        var step = Number(s.slots.step) || 30;
        step = Math.min(240, Math.max(5, step));
        var out = [];
        if (isFinite(a) && isFinite(b) && b > a) {
          for (var t = a; t <= b && out.length < 200; t += step) out.push(String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0"));
        }
        if (out.length) window.__portalSlots = out;
      }
    }
    function replaceSiteText(oldStr, newStr){
      if (!oldStr || !newStr || oldStr === newStr || !document.body) return;
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var nodes = [];
      while (walker.nextNode()) {
        var n = walker.currentNode;
        if (n.parentNode && /SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)) continue;
        if (n.nodeValue.indexOf(oldStr) !== -1) nodes.push(n);
      }
      nodes.forEach(function(n){ n.nodeValue = n.nodeValue.split(oldStr).join(newStr); });
      if (document.title.indexOf(oldStr) !== -1) document.title = document.title.split(oldStr).join(newStr);
    }
    function replaceRateText(newStr){
      if (!newStr || !document.body) return;
      var apS = window.__appliedSite || (window.__appliedSite = {});
      var from = apS.rate || "4.79";
      if (from === newStr) { apS.rate = newStr; return; }
      var re;
      try { re = new RegExp("(?<![0-9.,])" + from.replace(/\./g, "\\.") + "(?![0-9])", "g"); } catch (e) { return; }
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var nodes = [];
      while (walker.nextNode()) {
        var n = walker.currentNode;
        if (n.parentNode && /SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)) continue;
        if (n.nodeValue.indexOf(from) !== -1) nodes.push(n);
      }
      nodes.forEach(function(n){ n.nodeValue = n.nodeValue.replace(re, function(){ return newStr; }); });
      apS.rate = newStr;
    }
    window.__applyPortalTexts = function(){
      var s = window.__portalSettings;
      if (!s) return;
      var lg = lang === "zh" ? "zh" : lang;
      var apS = window.__appliedSite || (window.__appliedSite = {});
      if (s.email){ if (!apS.email) replaceSiteText("erfanbcrealestate@gmail.com", s.email); else if (apS.email !== s.email) replaceSiteText(apS.email, s.email); apS.email = s.email; }
      if (s.brand){ apS.brandPrev = apS.brand || ""; if (!apS.brand) replaceSiteText("Erfan BC Real Estate", s.brand); else if (apS.brand !== s.brand) replaceSiteText(apS.brand, s.brand); apS.brand = s.brand; }
      if (s.rate) replaceRateText(String(s.rate));
      if (s.email) document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){ a.setAttribute("href", "mailto:" + s.email); });
      if (s.brand) { var og = document.querySelector('meta[property="og:title"]'); if (og) og.setAttribute("content", (og.getAttribute("content") || "").split(apS.brandPrev || "Erfan BC Real Estate").join(s.brand)); }
      var hero = s.hero || {}, title = (hero.title || {})[lg], sub = (hero.sub || {})[lg];
      var h1 = document.querySelector(".hero h1"), hp = document.querySelector(".hero .inner p");
      if (h1 && title) h1.textContent = title;
      if (hp && sub) hp.textContent = sub;
      var bg = document.querySelector(".hero img.bg");
      var hpStr = String(s.heroPhoto || "");
      if (bg && hpStr && (/^https:\/\//.test(hpStr) || /^data:image\//.test(hpStr) || hpStr.indexOf(":") === -1)) bg.src = hpStr;
      var ann = (s.announcement || {})[lg] || (s.announcement || {}).en || "";
      var annKey = (s.announcement || {}).en || ann;
      var bar = document.getElementById("annBar");
      var closed = "";
      try { closed = sessionStorage.getItem("annClosed") || ""; } catch (e) {}
      if (ann && closed !== annKey) {
        if (!bar) {
          bar = document.createElement("div");
          bar.id = "annBar";
          bar.setAttribute("style", "background:#C9A24B;color:#0B0B0B;text-align:center;padding:9px 44px 9px 14px;font-size:14.5px;font-weight:600;position:relative");
          bar.innerHTML = '<span id="annTxt"></span><button type="button" aria-label="Close" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:0;font-size:17px;cursor:pointer;color:#0B0B0B">✕</button>';
          bar.querySelector("button").addEventListener("click", function(){ try { sessionStorage.setItem("annClosed", bar.dataset.annKey || ""); } catch (e) {} bar.remove(); });
          var hdr = document.querySelector("header");
          if (hdr && hdr.parentNode) hdr.parentNode.insertBefore(bar, hdr);
          else if (document.body) document.body.insertBefore(bar, document.body.firstChild);
        }
        bar.dataset.annKey = annKey;
        document.getElementById("annTxt").textContent = ann;
      } else if (bar && !ann) { bar.remove(); }
      if (s.rate && !window.__rateTouched) {
        ["cRate", "bvRate", "ivRate", "afRate"].forEach(function(id){
          var el = document.getElementById(id);
          if (el) {
            el.value = s.rate;
            if (!el.__rateBound) { el.__rateBound = true; el.addEventListener("input", function(){ window.__rateTouched = true; }); }
          }
        });
        calc(); bvrCalc(); affordCalc(); investCalc();
      }
      if (s.phone) {
        var mail = document.querySelector("a.mail");
        if (mail && mail.parentNode && !document.getElementById("pubPhone")) {
          var p = document.createElement("p");
          p.id = "pubPhone";
          p.innerHTML = '📞 <a class="mail" href="tel:" style="color:inherit"></a>';
          var a = p.querySelector("a");
          a.href = "tel:" + String(s.phone).replace(/[^+0-9]/g, "");
          a.textContent = String(s.phone);
          mail.parentNode.parentNode.insertBefore(p, mail.parentNode.nextSibling);
        }
      }
    };
    function portalBoot(){
      try { mergePortalListings(); } catch (e) {}
      try { applyPortalVars(); } catch (e) {}
      applyLang(lang, false);
    }
    window.__portalReapply = portalBoot;
    if (window.__portalReady) {
      window.__portalReady.then(portalBoot, portalBoot);
    } else {
      applyLang(lang, false);
    }
    /* Lightweight first-party traffic stats for the private admin portal.
       Sends aggregate counts only (page, event, language, referrer host) — no cookies, no personal data. */
    (function(){
      try {
        var TRACK = "https://advisor-api.erfanbillion.workers.dev/api/track";
        function curLang(){ try { return localStorage.getItem("erfan-re-lang") || document.documentElement.lang || "en"; } catch(e){ return document.documentElement.lang || "en"; } }
        function pageName(){ var p = (location.pathname || "").split("/").pop(); return p || "index.html"; }
        function send(o){
          try {
            o.page = pageName();
            if (!o.lang) o.lang = curLang();
            var b = JSON.stringify(o);
            if (navigator.sendBeacon) { navigator.sendBeacon(TRACK, new Blob([b], { type: "text/plain" })); }
            else { fetch(TRACK, { method: "POST", body: b, keepalive: true, headers: { "Content-Type": "text/plain" } }).catch(function(){}); }
          } catch(e){}
        }
        var refHost = "";
        try { if (document.referrer) refHost = new URL(document.referrer).hostname; } catch(e){}
        if (refHost && refHost !== location.hostname) send({ type: "pageview", ref: refHost });
        else send({ type: "pageview" });
        if (typeof window.openListing === "function") {
          var _ol = window.openListing;
          window.openListing = function(mls){ if (!window.__langSwitch) send({ type: "event", event: "listing_view", listingId: mls }); return _ol.apply(this, arguments); };
        }
        if (typeof window.openTour === "function") {
          var _ot = window.openTour;
          window.openTour = function(mls){ send({ type: "event", event: "tour_view", listingId: mls }); return _ot.apply(this, arguments); };
        }
        var fab = document.getElementById("aiFab"), panel = document.getElementById("aiPanel");
        if (fab && panel) {
          fab.addEventListener("click", function(){
            setTimeout(function(){ if (panel.classList.contains("open")) send({ type: "event", event: "chat_open" }); }, 60);
          });
        }
        var lastLang = curLang();
        new MutationObserver(function(){
          var l = curLang();
          if (l !== lastLang) { lastLang = l; send({ type: "event", event: "lang_set", lang: l }); }
        }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
      } catch(e){}
    })();
    /* ---------- visitor accounts · saved homes & searches · viewing booking ---------- */
    (function(){
      try {
        var API = "https://advisor-api.erfanbillion.workers.dev";
        var STR = {
          en: { account: "Account", signIn: "Sign in", register: "Create account", name: "Full name", email: "Email", password: "Password", signOut: "Sign out", savedHomes: "Saved homes", savedSearches: "Saved searches", saveSearch: "Save this search", searchName: "Name this search", notify: "Email me new matches", bookViewing: "Book a viewing", date: "Date", time: "Time", phone: "Phone", confirm: "Confirm request", close: "Close", remove: "Remove", noSaved: "No saved homes yet — tap the heart on a listing.", noSearches: "No saved searches yet.", viewingDone: "Viewing requested. A confirmation email is on its way.", errGeneric: "Something went wrong — please try again.", captchaErr: "Please complete the security check.", errCreds: "Email or password is incorrect.", errExists: "An account with this email already exists — sign in instead.", needAuth: "Sign in first to save homes and searches.", alertsOn: "Alerts on", alertsOff: "Alerts off", savedOk: "Saved.", passHint: "At least 8 characters", profile: "Profile", budget: "Budget", interest: "I'm interested in", optBuy: "Buying", optSell: "Selling", optRent: "Renting", optInvest: "Investing", areas: "Areas you like (comma separated)", reachMe: "Best way to reach you", optEmail: "Email", optPhone: "Phone", optEither: "Either works", optional: "Optional — fill only what you like", saveBtn: "Save", profSaved: "Profile saved.", myViewings: "My viewings", noViewings: "No viewings booked yet.", recent: "Recently viewed", priceDrop: "Price drop", cancelBooking: "Cancel booking", reschedule: "Reschedule", bannedErr: "This account has been suspended. Please contact us.", cancelledOk: "Booking cancelled.", movedOk: "Viewing moved.", or: "or", googleBtn: "Continue with Google", ownerTimes: "Viewing times set by the owner:", slotGone: "That time is no longer available — please pick another.", signedIn: "Signed in.", verifyEmail: "Verify your email to receive alerts", alertsFromNow: "You'll be notified about listings added from now on.", searchGone: "That search no longer exists.", errBusy: "Please try again in a moment.", sessionExpired: "Your session has expired — please sign in again." },
          fa: { account: "حساب کاربری", signIn: "ورود", register: "ساخت حساب", name: "نام کامل", email: "ایمیل", password: "رمز عبور", signOut: "خروج", savedHomes: "خانه‌های ذخیره‌شده", savedSearches: "جستجوهای ذخیره‌شده", saveSearch: "ذخیره این جستجو", searchName: "اسم این جستجو", notify: "مچ‌های جدید رو برام ایمیل کن", bookViewing: "رزرو بازدید", date: "تاریخ", time: "ساعت", phone: "تلفن", confirm: "ثبت درخواست", close: "بستن", remove: "حذف", noSaved: "هنوز خونه‌ای ذخیره نکردی — روی قلب هر لیستینگ بزن.", noSearches: "هنوز جستجویی ذخیره نکردی.", viewingDone: "درخواست بازدید ثبت شد. ایمیل تایید در راهه.", errGeneric: "یه خطا پیش اومد — دوباره تلاش کن.", captchaErr: "لطفاً بررسی امنیتی رو کامل کن.", errCreds: "ایمیل یا رمز عبور اشتباهه.", errExists: "با این ایمیل قبلاً حساب ساخته شده — وارد شو.", needAuth: "برای ذخیره خونه و جستجو اول وارد شو.", alertsOn: "هشدار فعال", alertsOff: "هشدار خاموش", savedOk: "ذخیره شد.", passHint: "حداقل ۸ حرف", profile: "پروفایل", budget: "بودجه", interest: "علاقه‌مندم به", optBuy: "خرید", optSell: "فروش", optRent: "اجاره", optInvest: "سرمایه‌گذاری", areas: "محله‌های مورد علاقه (با کاما جدا کن)", reachMe: "بهترین راه تماس با تو", optEmail: "ایمیل", optPhone: "تلفن", optEither: "هرکدوم راحته", optional: "اختیاریه — فقط هرچی دوست داری پر کن", saveBtn: "ذخیره", profSaved: "پروفایل ذخیره شد.", myViewings: "بازدیدهای من", noViewings: "هنوز بازدیدی رزرو نکردی.", recent: "اخیراً دیده‌شده‌ها", priceDrop: "افت قیمت", cancelBooking: "لغو رزرو", reschedule: "تغییر زمان", bannedErr: "این حساب تعلیق شده. لطفاً با ما تماس بگیر.", cancelledOk: "رزرو لغو شد.", movedOk: "زمان بازدید جابه‌جا شد.", or: "یا", googleBtn: "ادامه با گوگل", ownerTimes: "زمان‌های بازدید رو صاحب‌خانه تعیین کرده:", slotGone: "این زمان دیگه در دسترس نیست — یه زمان دیگه انتخاب کن.", signedIn: "وارد شدی.", verifyEmail: "برای دریافت هشدارها ایمیلت رو تایید کن", alertsFromNow: "از این به بعد، خانه‌های تازه‌ای که اضافه بشن رو بهت اطلاع میدم.", searchGone: "این جستجو دیگه وجود نداره.", errBusy: "لطفاً چند لحظه دیگه دوباره تلاش کن.", sessionExpired: "نشستت منقضی شده — لطفاً دوباره وارد شو." },
          hi: { account: "खाता", signIn: "साइन इन", register: "खाता बनाएं", name: "पूरा नाम", email: "ईमेल", password: "पासवर्ड", signOut: "साइन आउट", savedHomes: "सहेजे गए घर", savedSearches: "सहेजी गई खोजें", saveSearch: "यह खोज सहेजें", searchName: "खोज का नाम", notify: "नए मैच मुझे ईमेल करें", bookViewing: "व्यूइंग बुक करें", date: "तारीख़", time: "समय", phone: "फ़ोन", confirm: "अनुरोध की पुष्टि करें", close: "बंद करें", remove: "हटाएं", noSaved: "अभी कोई घर सहेजा नहीं गया — किसी लिस्टिंग पर दिल दबाएं।", noSearches: "अभी कोई खोज सहेजी नहीं गई।", viewingDone: "व्यूइंग का अनुरोध हो गया। पुष्टि ईमेल आ रहा है।", errGeneric: "कुछ गड़बड़ हुई — फिर कोशिश करें।", captchaErr: "कृपया सुरक्षा जांच पूरी करें।", errCreds: "ईमेल या पासवर्ड ग़लत है।", errExists: "इस ईमेल से खाता पहले से है — साइन इन करें।", needAuth: "घर और खोजें सहेजने के लिए पहले साइन इन करें।", alertsOn: "अलर्ट चालू", alertsOff: "अलर्ट बंद", savedOk: "सहेजा गया।", passHint: "कम से कम 8 अक्षर", profile: "प्रोफ़ाइल", budget: "बजट", interest: "मेरी रुचि है", optBuy: "खरीदना", optSell: "बेचना", optRent: "किराया", optInvest: "निवेश", areas: "पसंदीदा इलाके (कॉमा से अलग करें)", reachMe: "संपर्क का सबसे अच्छा तरीका", optEmail: "ईमेल", optPhone: "फ़ोन", optEither: "कोई भी ठीक है", optional: "वैकल्पिक — सिर्फ़ वही भरें जो चाहें", saveBtn: "सहेजें", profSaved: "प्रोफ़ाइल सहेजी गई।", myViewings: "मेरी व्यूइंग", noViewings: "अभी कोई व्यूइंग बुक नहीं है।", recent: "हाल ही में देखे गए", priceDrop: "कीमत में गिरावट", cancelBooking: "बुकिंग रद्द करें", reschedule: "समय बदलें", bannedErr: "यह खाता निलंबित कर दिया गया है। कृपया हमसे संपर्क करें।", cancelledOk: "बुकिंग रद्द हो गई।", movedOk: "व्यूइंग का समय बदल गया।", or: "या", googleBtn: "Google के साथ जारी रखें", ownerTimes: "मालिक द्वारा तय किए गए व्यूइंग समय:", slotGone: "यह समय अब उपलब्ध नहीं है — कृपया दूसरा चुनें।", signedIn: "साइन इन हो गया।", verifyEmail: "अलर्ट पाने के लिए अपना ईमेल सत्यापित करें", alertsFromNow: "अब से जो नई लिस्टिंग जुड़ेंगी, उनकी सूचना आपको मिलेगी।", searchGone: "वह खोज अब मौजूद नहीं है।", errBusy: "कृपया कुछ देर बाद फिर कोशिश करें।", sessionExpired: "आपका सत्र समाप्त हो गया है — कृपया फिर से साइन इन करें।" },
          zh: { account: "账户", signIn: "登录", register: "创建账户", name: "全名", email: "电子邮箱", password: "密码", signOut: "退出登录", savedHomes: "已保存房源", savedSearches: "已保存搜索", saveSearch: "保存此搜索", searchName: "搜索名称", notify: "有新匹配时发邮件通知我", bookViewing: "预约看房", date: "日期", time: "时间", phone: "电话", confirm: "确认预约", close: "关闭", remove: "删除", noSaved: "尚未保存房源 — 点击房源上的爱心即可。", noSearches: "尚未保存搜索。", viewingDone: "看房请求已提交，确认邮件即将发出。", errGeneric: "出错了 — 请重试。", captchaErr: "请完成安全验证。", errCreds: "电子邮箱或密码不正确。", errExists: "该电子邮箱已注册 — 请直接登录。", needAuth: "登录后即可保存房源和搜索。", alertsOn: "提醒已开启", alertsOff: "提醒已关闭", savedOk: "已保存。", passHint: "至少 8 个字符", profile: "个人资料", budget: "预算", interest: "我感兴趣", optBuy: "买房", optSell: "卖房", optRent: "租房", optInvest: "投资", areas: "喜欢的社区（用逗号分隔）", reachMe: "最佳联系方式", optEmail: "电子邮件", optPhone: "电话", optEither: "都可以", optional: "可选 — 只填您想填的", saveBtn: "保存", profSaved: "个人资料已保存。", myViewings: "我的看房", noViewings: "尚未预约看房。", recent: "最近浏览", priceDrop: "价格下降", cancelBooking: "取消预约", reschedule: "改期", bannedErr: "该账户已被停用，请联系我们。", cancelledOk: "预约已取消。", movedOk: "看房时间已更改。", or: "或", googleBtn: "使用 Google 继续", ownerTimes: "业主设定的看房时间：", slotGone: "该时间已不可用 — 请选择其他时间。", signedIn: "已登录。", verifyEmail: "验证您的电子邮箱以接收提醒", alertsFromNow: "从现在起，有新房源加入时我们会通知您。", searchGone: "该搜索已不存在。", errBusy: "请稍后再试。", sessionExpired: "您的登录已过期——请重新登录。" },
    es:{
     "account": "Cuenta",
     "signIn": "Iniciar sesión",
     "register": "Crear cuenta",
     "name": "Nombre completo",
     "email": "Correo electrónico",
     "password": "Contraseña",
     "signOut": "Cerrar sesión",
     "savedHomes": "Propiedades guardadas",
     "savedSearches": "Búsquedas guardadas",
     "saveSearch": "Guardar esta búsqueda",
     "searchName": "Nombra esta búsqueda",
     "notify": "Enviarme por correo las nuevas coincidencias",
     "bookViewing": "Reservar una visita",
     "date": "Fecha",
     "time": "Hora",
     "phone": "Teléfono",
     "confirm": "Confirmar solicitud",
     "close": "Cerrar",
     "remove": "Eliminar",
     "noSaved": "Aún no tienes propiedades guardadas — toca el corazón en un anuncio.",
     "noSearches": "Aún no tienes búsquedas guardadas.",
     "viewingDone": "Visita solicitada. Un correo de confirmación va en camino.",
     "errGeneric": "Algo salió mal — inténtalo de nuevo.",
     "captchaErr": "Completa la verificación de seguridad.",
     "errCreds": "El correo electrónico o la contraseña son incorrectos.",
     "errExists": "Ya existe una cuenta con este correo electrónico — inicia sesión en su lugar.",
     "needAuth": "Inicia sesión primero para guardar propiedades y búsquedas.",
     "alertsOn": "Alertas activadas",
     "alertsOff": "Alertas desactivadas",
     "savedOk": "Guardado.",
     "passHint": "Al menos 8 caracteres",
     "profile": "Perfil",
     "budget": "Presupuesto",
     "interest": "Me interesa",
     "optBuy": "Comprar",
     "optSell": "Vender",
     "optRent": "Rentar",
     "optInvest": "Invertir",
     "areas": "Zonas que te gustan (separadas por comas)",
     "reachMe": "Mejor forma de contactarte",
     "optEmail": "Correo electrónico",
     "optPhone": "Teléfono",
     "optEither": "Cualquiera funciona",
     "optional": "Opcional — completa solo lo que quieras",
     "saveBtn": "Guardar",
     "profSaved": "Perfil guardado.",
     "myViewings": "Mis visitas",
     "noViewings": "Aún no tienes visitas reservadas.",
     "recent": "Vistos recientemente",
     "priceDrop": "Bajada de precio",
     "cancelBooking": "Cancelar reserva",
     "reschedule": "Reprogramar",
     "bannedErr": "Esta cuenta ha sido suspendida. Contáctanos.",
     "cancelledOk": "Reserva cancelada.",
     "movedOk": "Visita reprogramada.",
     "or": "o",
     "googleBtn": "Continuar con Google",
     "ownerTimes": "Horarios de visita establecidos por el propietario:",
     "slotGone": "Ese horario ya no está disponible — elige otro.",
     "signedIn": "Sesión iniciada.",
     "verifyEmail": "Verifica tu correo electrónico para recibir alertas",
     "alertsFromNow": "Se te notificará sobre los anuncios agregados a partir de ahora.",
     "searchGone": "Esa búsqueda ya no existe.",
     "errBusy": "Inténtalo de nuevo en un momento.",
     "sessionExpired": "Tu sesión ha expirado — inicia sesión de nuevo."
    }
        };
        function miniOf(m){ for (var i = 0; i < LISTINGS.length; i++){ if (LISTINGS[i].mls === m) return [LISTINGS[i].street, LISTINGS[i].city, LISTINGS[i].price]; } return [m, "", 0]; }
        function lang(){ var L = "en"; try { L = localStorage.getItem("erfan-re-lang") || document.documentElement.lang || "en"; } catch(e){} L = String(L).slice(0, 2); return STR[L] ? L : "en"; }
        function tt(k){ var d = STR[lang()] || STR.en; return d[k] || STR.en[k] || k; }
        var TS_KEY = "0x4AAAAAAFbCjECJ3G_8xgJE", tsTries = 0;
        function tsRenderAll(){
          var els = document.querySelectorAll(".fx-ts");
          if (!els.length) return;
          if (!window.turnstile || !turnstile.render) { if (tsTries++ < 12) setTimeout(tsRenderAll, 400); return; }
          els.forEach(function(el){ if (el.getAttribute("data-done")) return; el.setAttribute("data-done", "1");
            try { el._wid = turnstile.render(el, { sitekey: TS_KEY, size: "flexible" }); } catch(e){} });
        }
        function tsToken(name){
          var el = document.querySelector('.fx-ts[data-ts="' + name + '"]');
          if (!el || !window.turnstile || !turnstile.getResponse) return "";
          try { return turnstile.getResponse(el._wid) || ""; } catch(e){ return ""; }
        }
        function tsReset(name){
          var el = document.querySelector('.fx-ts[data-ts="' + name + '"]');
          if (el && window.turnstile && turnstile.reset) { try { turnstile.reset(el._wid); } catch(e){} }
        }
        function esc2(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
        function money(n){ return "$" + Number(n).toLocaleString("en-US"); }
        var token = ""; try { token = localStorage.getItem("re_user_token") || ""; } catch(e){}
        // Google sign-in return: pick up the session token (or error) from the URL hash
        try {
          var gh = String(location.hash || "");
          if (gh.indexOf("#gcode=") === 0) { var gc = gh.slice(7); history.replaceState(null, "", location.pathname + location.search); var gv = ""; try { gv = sessionStorage.getItem("re_gv") || ""; sessionStorage.removeItem("re_gv"); } catch(e){}
            if (/^[0-9a-f]{48}$/.test(gc) && /^[0-9a-f]{64}$/.test(gv)) {
              var exTry = function(n){
                fetch(API + "/api/user/google/exchange", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: gc, verifier: gv }) })
                .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(d){ return { s: r.status, d: d }; }); })
                .then(function(res){
                  if (res.s === 401 && n < 1) { setTimeout(function(){ exTry(n + 1); }, 1500); return; }
                  var d = res.d;
                  if (d && d.ok && /^u_[0-9a-f]{32}$/.test(d.token || "")) { token = d.token; try { localStorage.setItem("re_user_token", token); } catch(e){} me = null; savedSet = {}; mySearches = []; myProfile = {}; myRecent = []; myDrops = {}; paintAcctBtn(); loadMe().then(function(){ if (me) toast(tt("signedIn")); else toast(tt("errGeneric")); }); }
                  else { toast(tt("errGeneric")); }
                }).catch(function(){ toast(tt("errGeneric")); });
              };
              exTry(0);
            } else { setTimeout(function(){ toast(tt("errGeneric")); }, 600); } }
          else if (gh.indexOf("#gtoken=") === 0) { history.replaceState(null, "", location.pathname + location.search); }
          else if (gh.indexOf("#gerror=") === 0) { var ge = gh.slice(8); history.replaceState(null, "", location.pathname + location.search); setTimeout(function(){ toast(ge === "banned" ? tt("bannedErr") : tt("errGeneric")); }, 600); }
        } catch(e){}
        var me = null, savedSet = {}, mySearches = [], myProfile = {}, myRecent = [], myDrops = {};
        var css = ".save-btn{position:absolute;top:10px;inset-inline-end:10px;width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.94);color:#9c2b2e;font-size:19px;line-height:1;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;z-index:2}" +
          ".save-btn.on{background:#9c2b2e;color:#fff}" +
          ".fx-ov{position:fixed;inset:0;background:rgba(5,5,5,.55);z-index:500;display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:24px 12px}" +
          ".fx-ov.open{display:flex}" +
          ".fx-box{background:#fff;color:#15130e;border-radius:16px;max-width:440px;width:100%;padding:22px;box-shadow:0 18px 50px rgba(0,0,0,.35);font-size:15px}" +
          ".fx-box h3{margin:0 0 12px;font-size:20px}" +
          ".fx-box label{display:block;font-weight:600;margin:12px 0 5px}" +
          ".fx-box input[type=text],.fx-box input[type=email],.fx-box input[type=password],.fx-box input[type=tel],.fx-box select{width:100%;padding:11px 12px;border:1.5px solid #d9d4c7;border-radius:10px;font:inherit;background:#fff;color:#15130e}" +
          ".fx-tabs{display:flex;gap:8px;margin-bottom:6px}" +
          ".fx-err{color:#b3261e;min-height:20px;font-size:14px;margin-top:8px}" +
          ".fx-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #efece4}" +
          ".fx-toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);background:#0b0b0b;color:#f0e9d6;padding:11px 18px;border-radius:999px;z-index:600;font-size:14.5px;box-shadow:0 8px 24px rgba(0,0,0,.3);display:none;max-width:92vw;text-align:center}";
        var stEl = document.createElement("style"); stEl.textContent = css; document.head.appendChild(stEl);
        var ov = document.createElement("div"); ov.className = "fx-ov"; ov.innerHTML = '<div class="fx-box" role="dialog" aria-modal="true"></div>';
        document.body.appendChild(ov);
        var box = ov.firstChild;
        ov.addEventListener("click", function(e){ if (e.target === ov) closeFx(); });
        document.addEventListener("keydown", function(e){ if (e.key === "Escape" && ov.classList.contains("open")) closeFx(); });
        function closeFx(){ ov.classList.remove("open"); }
        function openFx(html){
          box.querySelectorAll(".fx-ts").forEach(function(el){ if (el._wid != null && window.turnstile && turnstile.remove) { try { turnstile.remove(el._wid); } catch(e){} } });
          box.innerHTML = html; ov.classList.add("open"); tsTries = 0;
          var f = box.querySelector("input, select, textarea"); if (f) { try { f.focus(); } catch(e){} }
        }
        var toastEl = document.createElement("div"); toastEl.className = "fx-toast"; toastEl.setAttribute("aria-live", "polite"); document.body.appendChild(toastEl);
        var toastTimer = null;
        function toast(msg){ toastEl.textContent = msg; toastEl.style.display = "block"; if (toastTimer) clearTimeout(toastTimer); toastTimer = setTimeout(function(){ toastEl.style.display = "none"; }, 3200); }
        function api(path, method, body){
          var h = { "Content-Type": "application/json" };
          if (token) h["Authorization"] = "Bearer " + token;
          return fetch(API + path, { method: method || "GET", headers: h, body: body ? JSON.stringify(body) : undefined })
            .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(d){ if (!r.ok) throw new Error(d.error || "request"); return d; }); });
        }
        var acctBtn = document.createElement("button");
        acctBtn.type = "button"; acctBtn.className = "navbtn"; acctBtn.id = "acctBtn";
        function paintAcctBtn(){ acctBtn.textContent = me ? ("👤 " + String(me.name || "").split(" ")[0]) : ("👤 " + tt("signIn")); }
        var langbox = document.querySelector(".langbox");
        if (langbox && langbox.parentNode) langbox.parentNode.insertBefore(acctBtn, langbox);
        else { var nv = document.querySelector("header nav"); if (nv) nv.appendChild(acctBtn); }
        acctBtn.addEventListener("click", function(){ if (me) showAccount(); else showAuth("in"); });
        paintAcctBtn();
        function showAuth(mode){
          var reg = mode === "reg";
          var html = '<div class="fx-tabs">' +
            '<button type="button" class="btn ' + (reg ? "btn-line" : "btn-spruce") + '" id="fxTabIn">' + tt("signIn") + '</button>' +
            '<button type="button" class="btn ' + (reg ? "btn-spruce" : "btn-line") + '" id="fxTabReg">' + tt("register") + '</button></div>' +
            '<form id="fxAuthForm">' +
            (reg ? '<label for="fxName">' + tt("name") + '</label><input type="text" id="fxName" autocomplete="name" />' : "") +
            '<label for="fxEmail">' + tt("email") + '</label><input type="email" id="fxEmail" autocomplete="email" required />' +
            '<label for="fxPass">' + tt("password") + '</label><input type="password" id="fxPass" autocomplete="' + (reg ? "new-password" : "current-password") + '" required />' +
            (reg ? '<div style="font-size:13px;color:#6e685b;margin-top:5px">' + tt("passHint") + '</div>' : "") +
            (reg ? '<div class="fx-ts" data-ts="auth" style="margin-top:12px"></div>' : "") +
            '<div class="fx-err" id="fxErr"></div>' +
            '<div style="display:flex;gap:10px;margin-top:10px"><button type="submit" class="btn btn-spruce" style="flex:1">' + (reg ? tt("register") : tt("signIn")) + '</button>' +
            '<button type="button" class="btn btn-line" id="fxCancel">' + tt("close") + '</button></div></form>' +
            '<div style="display:flex;align-items:center;gap:10px;margin:14px 0 10px;color:#6e685b;font-size:13px"><span style="flex:1;border-top:1px solid #e4dfd3"></span>' + tt("or") + '<span style="flex:1;border-top:1px solid #e4dfd3"></span></div>' +
            '<a class="btn btn-line" id="fxGoogle" style="display:block;text-align:center;text-decoration:none" href="#">🔵 ' + tt("googleBtn") + '</a>';
          openFx(html);
          document.getElementById("fxTabIn").addEventListener("click", function(){ showAuth("in"); });
          document.getElementById("fxTabReg").addEventListener("click", function(){ showAuth("reg"); });
          document.getElementById("fxCancel").addEventListener("click", closeFx);
          var fxG = document.getElementById("fxGoogle");
          if (fxG) fxG.addEventListener("click", function(e){
            e.preventDefault();
            if (fxG._busy) return; fxG._busy = true;
            try {
              var rb = new Uint8Array(32); crypto.getRandomValues(rb);
              var ver = ""; rb.forEach(function(b){ ver += ("0" + b.toString(16)).slice(-2); });
              crypto.subtle.digest("SHA-256", new TextEncoder().encode(ver)).then(function(hb){
                var ch = ""; new Uint8Array(hb).forEach(function(b){ ch += ("0" + b.toString(16)).slice(-2); });
                try { sessionStorage.setItem("re_gv", ver); if (sessionStorage.getItem("re_gv") !== ver) throw 0; }
                catch(e3){ fxG._busy = false; toast(tt("errGeneric")); return; }
                location.href = API + "/api/user/google/start?c=" + ch;
              }).catch(function(){ fxG._busy = false; toast(tt("errGeneric")); });
            } catch(e2){ fxG._busy = false; toast(tt("errGeneric")); }
          });
          document.getElementById("fxAuthForm").addEventListener("submit", function(e){
            e.preventDefault();
            var sBtn = e.target.querySelector('button[type="submit"]'); if (sBtn) sBtn.disabled = true;
            var email = document.getElementById("fxEmail").value, pass = document.getElementById("fxPass").value;
            var err = document.getElementById("fxErr");
            var tsTok = tsToken("auth");
            if (reg && window.turnstile && !tsTok) { err.textContent = tt("captchaErr"); tsRenderAll(); return; }
            var payload = reg ? { name: document.getElementById("fxName").value, email: email, password: pass, lang: lang(), turnstileToken: tsTok } : { email: email, password: pass };
            api(reg ? "/api/user/register" : "/api/user/login", "POST", payload).then(function(d){
              if (sBtn) sBtn.disabled = false;
              token = d.token; try { localStorage.setItem("re_user_token", token); } catch(e2){}
              me = d.user; loadMe().then(function(){ showAccount(); });
            }).catch(function(er){
              if (sBtn) sBtn.disabled = false;
              err.textContent = er.message === "credentials" ? tt("errCreds") : (er.message === "exists" ? tt("errExists") : (er.message === "banned" ? tt("bannedErr") : (er.message === "captcha" ? tt("captchaErr") : tt("errGeneric"))));
              if (er.message === "captcha") tsReset("auth");
            });
          });
          tsRenderAll();
        }
        function loadMe(){
          var t = token; if (!t) return Promise.resolve();
          return api("/api/user/me").then(function(d){
            if (t !== token) return; // superseded by a newer sign-in while in flight
            me = d.user; mySearches = d.searches || []; myProfile = d.profile || {}; myRecent = d.recent || [];
            myDrops = {}; (d.priceDrops || []).forEach(function(x){ myDrops[x.mls] = x; });
            savedSet = {}; (d.saved || []).forEach(function(m){ savedSet[m] = 1; });
            paintAcctBtn(); paintSaves();
          }).catch(function(e){ if (t !== token) return; if (e && e.message === "auth") { token = ""; try { localStorage.removeItem("re_user_token"); } catch(e2){} } me = null; paintAcctBtn(); });
        }
        function showAccount(){
          if (!me) return;
          var homes = Object.keys(savedSet).map(function(m){
            var p = miniOf(m);
            var drop = myDrops[m] ? ' · <b style="color:#9c2b2e">🔻 ' + tt("priceDrop") + ': ' + money(myDrops[m].was) + ' → ' + money(myDrops[m].now) + '</b>' : "";
            return '<div class="fx-row"><span><b>' + money(p[2]) + '</b> · ' + esc2(p[0]) + ', ' + esc2(p[1]) + drop + '</span><button type="button" class="linkbtn" data-unsave="' + m + '">' + tt("remove") + '</button></div>';
          }).join("");
          var searches = mySearches.map(function(s){
            var c = s.criteria || {};
            var mpN = Number(c.maxPrice);
            var bits = [c.city, c.type, (isFinite(mpN) && mpN > 0) ? ("≤ " + money(mpN)) : "", (c.minBeds && String(c.minBeds) !== "0") ? (c.minBeds + "+ bd") : "", c.q ? ('"' + c.q + '"') : ""].filter(Boolean).join(" · ");
            return '<div class="fx-row"><span><b>' + esc2(s.name) + '</b><br><span style="color:#6e685b;font-size:13.5px">' + esc2(bits) + '<span data-alert-state>' + (s.notify ? " · 🔔 " + tt("alertsOn") : "") + "</span>" + '</span></span><span style="display:flex;gap:10px;flex:none"><button type="button" class="linkbtn" data-unnotify="' + esc2(s.id) + '">' + (s.notify ? "🔔 " + tt("alertsOn") : "🔕 " + tt("alertsOff")) + '</button><button type="button" class="linkbtn" data-unsearch="' + esc2(s.id) + '">' + tt("remove") + '</button></span></div>';
          }).join("");
          var recent = myRecent.map(function(m){
            var p = miniOf(m);
            return '<div class="fx-row"><span><b>' + money(p[2]) + '</b> · ' + esc2(p[0]) + ', ' + esc2(p[1]) + '</span><button type="button" class="linkbtn" data-open-listing="' + m + '">View</button></div>';
          }).join("");
          var pf = myProfile || {};
          var intOpts = [["", "—"], ["buy", tt("optBuy")], ["sell", tt("optSell")], ["rent", tt("optRent")], ["invest", tt("optInvest")]].map(function(o){ return '<option value="' + o[0] + '"' + (pf.intent === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("");
          var cpOpts = [["", "—"], ["email", tt("optEmail")], ["phone", tt("optPhone")], ["either", tt("optEither")]].map(function(o){ return '<option value="' + o[0] + '"' + (pf.contactPref === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("");
          var langOpts = [["en", "English"], ["fa", "فارسی"], ["hi", "हिन्दी"], ["zh", "中文"], ["es", "Español"]].map(function(o){ return '<option value="' + o[0] + '"' + ((me.lang || "en") === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("");
          openFx('<h3>👤 ' + esc2(me.name) + '</h3><div style="color:#6e685b;margin-bottom:8px">' + esc2(me.email) + '</div>' +
            '<h3 style="font-size:16.5px;margin-top:16px">♥ ' + tt("savedHomes") + '</h3>' + (homes || '<p style="color:#6e685b">' + tt("noSaved") + '</p>') +
            '<h3 style="font-size:16.5px;margin-top:16px">🔎 ' + tt("savedSearches") + '</h3>' + ((me && me.verified === false) ? '<p style="color:#96762f;font-size:13.5px;margin:2px 0 6px">' + tt("verifyEmail") + '</p>' : "") + (searches || '<p style="color:#6e685b">' + tt("noSearches") + '</p>') +
            '<h3 style="font-size:16.5px;margin-top:16px">📅 ' + tt("myViewings") + '</h3><div id="fxMyVw"><p style="color:#6e685b">…</p></div>' +
            (recent ? '<h3 style="font-size:16.5px;margin-top:16px">🕘 ' + tt("recent") + '</h3>' + recent : "") +
            '<h3 style="font-size:16.5px;margin-top:16px">⚙️ ' + tt("profile") + '</h3><p style="color:#6e685b;font-size:13.5px;margin:2px 0 4px">' + tt("optional") + '</p>' +
            '<form id="fxProfForm">' +
            '<label for="pfName">' + tt("name") + '</label><input type="text" id="pfName" value="' + esc2(me.name) + '" />' +
            '<label for="pfPhone">' + tt("phone") + '</label><input type="tel" id="pfPhone" value="' + esc2(pf.phone || "") + '" />' +
            '<label for="pfBudget">' + tt("budget") + '</label><input type="text" id="pfBudget" value="' + esc2(pf.budget || "") + '" placeholder="$800,000" />' +
            '<label for="pfIntent">' + tt("interest") + '</label><select id="pfIntent">' + intOpts + '</select>' +
            '<label for="pfAreas">' + tt("areas") + '</label><input type="text" id="pfAreas" value="' + esc2(Array.isArray(pf.areas) ? pf.areas.join(", ") : (pf.areas || "")) + '" placeholder="Burnaby, Coquitlam" />' +
            '<label for="pfContact">' + tt("reachMe") + '</label><select id="pfContact">' + cpOpts + '</select>' +
            '<label for="pfLang">Email language</label><select id="pfLang">' + langOpts + '</select>' +
            '<div style="display:flex;gap:10px;margin-top:14px"><button type="submit" class="btn btn-spruce" style="flex:1">' + tt("saveBtn") + '</button></div></form>' +
            '<div style="display:flex;gap:10px;margin-top:18px"><button type="button" class="btn btn-line" id="fxOut" style="flex:1">' + tt("signOut") + '</button>' +
            '<button type="button" class="btn btn-spruce" id="fxDone" style="flex:1">' + tt("close") + '</button></div>');
          document.getElementById("fxDone").addEventListener("click", closeFx);
          document.getElementById("fxOut").addEventListener("click", function(){
            token = ""; me = null; savedSet = {}; mySearches = []; myProfile = {}; myRecent = []; myDrops = {};
            try { localStorage.removeItem("re_user_token"); } catch(e){}
            paintAcctBtn(); paintSaves(); closeFx();
          });
          box.querySelectorAll("[data-unsave]").forEach(function(b){ b.addEventListener("click", function(){ toggleSave(b.getAttribute("data-unsave")).then(function(){ loadMe().then(function(){ showAccount(); }); }); }); });
          box.querySelectorAll("[data-unsearch]").forEach(function(b){ b.addEventListener("click", function(){
            var sid = b.getAttribute("data-unsearch");
            api("/api/user/searches/" + encodeURIComponent(sid), "DELETE").then(function(){ mySearches = mySearches.filter(function(s){ return String(s.id) !== String(sid); }); showAccount(); }).catch(function(){ toast(tt("errGeneric")); });
          }); });
          box.querySelectorAll("[data-unnotify]").forEach(function(b){ b.addEventListener("click", function(){
            var sid = b.getAttribute("data-unnotify");
            var cur = mySearches.filter(function(s){ return String(s.id) === String(sid); })[0];
            if (!cur || b.disabled) return;
            b.disabled = true;
            /* row-only update on success (F-05): the returned projection is the
               truth — the consent shown must equal what the worker stored */
            api("/api/user/searches/" + encodeURIComponent(sid), "PATCH", { notify: !cur.notify }).then(function(d){
              b.disabled = false;
              if (d && d.search && typeof d.search.notify === "boolean") {
                cur.notify = d.search.notify;
                b.textContent = cur.notify ? ("🔔 " + tt("alertsOn")) : ("🔕 " + tt("alertsOff"));
                var row = b.closest ? b.closest(".fx-row") : null;
                var st = row ? row.querySelector("[data-alert-state]") : null;
                if (st) st.textContent = cur.notify ? (" · 🔔 " + tt("alertsOn")) : "";
                if (cur.notify) toast(tt("alertsFromNow"));
              } else toast(tt("errGeneric"));
            }).catch(function(er){
              b.disabled = false;
              var code = er && er.message;
              if (code === "auth") { token = ""; me = null; try { localStorage.removeItem("re_user_token"); } catch(e2){} paintAcctBtn(); closeFx(); toast(tt("sessionExpired")); }
              else if (code === "not_found") { mySearches = mySearches.filter(function(s){ return String(s.id) !== String(sid); }); toast(tt("searchGone")); showAccount(); }
              else if (code === "unavailable") toast(tt("errBusy"));
              else toast(tt("errGeneric"));
            });
          }); });
          document.getElementById("fxProfForm").addEventListener("submit", function(e){
            e.preventDefault();
            var pBtn = e.target.querySelector('button[type="submit"]'); if (pBtn) pBtn.disabled = true;
            var areas = document.getElementById("pfAreas").value.split(",").map(function(a){ return a.trim(); }).filter(Boolean);
            api("/api/user/profile", "POST", { name: document.getElementById("pfName").value, phone: document.getElementById("pfPhone").value, budget: document.getElementById("pfBudget").value, intent: document.getElementById("pfIntent").value, areas: areas, contactPref: document.getElementById("pfContact").value, lang: document.getElementById("pfLang").value })
              .then(function(d){ if (pBtn) pBtn.disabled = false; me = d.user; myProfile = d.profile || {}; paintAcctBtn(); toast(tt("profSaved")); })
              .catch(function(){ if (pBtn) pBtn.disabled = false; toast(tt("errGeneric")); });
          });
          api("/api/user/viewings").then(function(d){
            var vw = (d.viewings || []).filter(function(v){ return v.status !== "done"; });
            var el = document.getElementById("fxMyVw");
            if (!el) return;
            if (!vw.length) { el.innerHTML = '<p style="color:#6e685b">' + tt("noViewings") + '</p>'; return; }
            var nd = new Date(); var todayV = nd.getFullYear() + "-" + String(nd.getMonth() + 1).padStart(2, "0") + "-" + String(nd.getDate()).padStart(2, "0");
            el.innerHTML = vw.map(function(v){
              var L = v.listing || {};
              var can = (typeof v.canChange === "boolean") ? v.canChange : ((v.status === "new" || v.status === "confirmed") && v.date >= todayV);
              var acts = can ? '<div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap"><button type="button" class="linkbtn" data-vwcancel="' + v.id + '">' + tt("cancelBooking") + '</button><button type="button" class="linkbtn" data-vwmove="' + v.id + '">' + tt("reschedule") + '</button></div><div id="mv-' + v.id + '"></div>' : "";
              return '<div class="fx-row" style="display:block"><span><b>' + esc2(v.date) + ' · ' + esc2(v.time) + '</b> — ' + esc2(L.street || v.listingId || "") + (L.city ? ', ' + esc2(L.city) : "") + ' <span style="color:#6e685b">(' + esc2(v.status) + ')</span></span>' + acts + '</div>';
            }).join("");
            el.querySelectorAll("[data-vwcancel]").forEach(function(b){ b.addEventListener("click", function(){
              if (!window.confirm(tt("cancelBooking") + "?")) return;
              api("/api/user/viewings/" + encodeURIComponent(b.getAttribute("data-vwcancel")) + "/cancel", "POST", {}).then(function(){ toast(tt("cancelledOk")); showAccount(); }).catch(function(){ toast(tt("errGeneric")); });
            }); });
            el.querySelectorAll("[data-vwmove]").forEach(function(b){ b.addEventListener("click", function(){
              var vid = b.getAttribute("data-vwmove");
              var slot = document.getElementById("mv-" + vid);
              var times = (window.__portalSlots || ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"]).map(function(x){ return '<option>' + x + '</option>'; }).join("");
              slot.innerHTML = '<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap"><select id="mvD-' + vid + '">' + dateOptions() + '</select><select id="mvT-' + vid + '">' + times + '</select><button type="button" class="btn btn-spruce" id="mvGo-' + vid + '">' + tt("saveBtn") + '</button></div>';
              document.getElementById("mvGo-" + vid).addEventListener("click", function(){
                api("/api/user/viewings/" + encodeURIComponent(vid) + "/reschedule", "POST", { date: document.getElementById("mvD-" + vid).value, time: document.getElementById("mvT-" + vid).value })
                  .then(function(){ toast(tt("movedOk")); showAccount(); }).catch(function(er){ toast(er && er.message === "slot_unavailable" ? tt("slotGone") : tt("errGeneric")); });
              });
            }); });
          }).catch(function(){ var el = document.getElementById("fxMyVw"); if (el) el.innerHTML = '<p style="color:#6e685b">' + tt("noViewings") + '</p>'; });
        }
        function paintSaves(){
          document.querySelectorAll("[data-save]").forEach(function(b){
            var on = !!savedSet[b.getAttribute("data-save")];
            b.classList.toggle("on", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
            b.textContent = on ? "♥" : "♡";
          });
        }
        var saveBusy = {};
        function toggleSave(mls){
          if (!token) { showAuth("in"); toast(tt("needAuth")); return Promise.resolve(); }
          if (saveBusy[mls]) return Promise.resolve();
          saveBusy[mls] = true;
          return api("/api/user/save", "POST", { mls: mls }).then(function(d){
            saveBusy[mls] = false;
            savedSet = {}; (d.saved || []).forEach(function(m){ savedSet[m] = 1; });
            paintSaves();
          }).catch(function(){ saveBusy[mls] = false; toast(tt("errGeneric")); });
        }
        document.addEventListener("click", function(e){
          var b = e.target && e.target.closest ? e.target.closest("[data-save]") : null;
          if (b) { e.preventDefault(); toggleSave(b.getAttribute("data-save")); return; }
          var ol = e.target && e.target.closest ? e.target.closest("[data-open-listing]") : null;
          if (ol) { e.preventDefault(); if (typeof openListing === "function") openListing(ol.getAttribute("data-open-listing")); return; }
          var kt = e.target && e.target.closest ? e.target.closest("[data-kc-toggle]") : null;
          if (kt && typeof kcToggle === "function") kcToggle(kt);
        });
        document.addEventListener("submit", function(e){
          if (e.target && e.target.id === "searchForm") e.preventDefault();
        });
        var grid = document.getElementById("grid");
        if (grid && window.MutationObserver) new MutationObserver(function(){ paintSaves(); }).observe(grid, { childList: true });
        var curMls = "";
        if (typeof window.openListing === "function") {
          var prevOpen = window.openListing;
          window.openListing = function(mls){
            curMls = mls;
            if (token && !window.__langSwitch) { api("/api/user/recent", "POST", { mls: mls }).then(function(d){ myRecent = d.recent || myRecent; }).catch(function(){}); }
            return prevOpen.apply(this, arguments);
          };
        }
        var askA = document.getElementById("dAsk");
        if (askA && askA.parentNode) {
          var vb = document.createElement("button");
          vb.type = "button"; vb.className = "btn btn-spruce"; vb.id = "fxBookBtn"; vb.style.cssText = "padding:12px 22px;font-size:15px";
          vb.textContent = "📅 " + tt("bookViewing");
          askA.parentNode.appendChild(vb);
          vb.addEventListener("click", function(){ showViewing(curMls); });
        }
        function dateOptions(){
          var out = [], now = new Date();
          var loc = { en: "en-CA", fa: "fa-IR-u-ca-gregory", hi: "hi-IN", zh: "zh-CN" }[lang()] || "en-CA";
          for (var i = 1; i <= 14 && out.length < 12; i++) {
            var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
            if (d.getDay() === 0) continue;
            var v = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
            out.push('<option value="' + v + '">' + d.toLocaleDateString(loc, { weekday: "short", month: "short", day: "numeric" }) + '</option>');
          }
          return out.join("");
        }
        function fmtDay(v){
          var loc = { en: "en-CA", fa: "fa-IR-u-ca-gregory", hi: "hi-IN", zh: "zh-CN" }[lang()] || "en-CA";
          var d = new Date(v + "T12:00:00");
          return d.toLocaleDateString(loc, { weekday: "short", month: "short", day: "numeric" });
        }
        function showViewing(mls){
          var dEl2 = document.getElementById("dlg");
          if (dEl2 && dEl2.open) { try { dEl2.close(); } catch(e){} }
          var p = MINI[mls];
          var times = (window.__portalSlots || ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"]).map(function(x){ return '<option>' + x + '</option>'; }).join("");
          openFx('<h3>📅 ' + tt("bookViewing") + '</h3>' +
            (p ? '<p style="color:#6e685b;margin:0 0 6px">' + esc2(p[0]) + ', ' + esc2(p[1]) + ' · ' + money(p[2]) + '</p>' : "") +
            '<div id="fxVNote" style="font-size:13.5px;color:var(--brass);margin:0 0 4px"></div>' +
            '<form id="fxViewForm">' +
            '<label for="fxVDate">' + tt("date") + '</label><select id="fxVDate">' + dateOptions() + '</select>' +
            '<label for="fxVTime">' + tt("time") + '</label><select id="fxVTime">' + times + '</select>' +
            '<label for="fxVName">' + tt("name") + '</label><input type="text" id="fxVName" value="' + (me ? esc2(me.name) : "") + '" required />' +
            '<label for="fxVEmail">' + tt("email") + '</label><input type="email" id="fxVEmail" value="' + (me ? esc2(me.email) : "") + '" required />' +
            '<label for="fxVPhone">' + tt("phone") + '</label><input type="tel" id="fxVPhone" />' +
            '<div class="fx-ts" data-ts="view" style="margin-top:12px"></div>' +
            '<div class="fx-err" id="fxVErr"></div>' +
            '<div style="display:flex;gap:10px;margin-top:10px"><button type="submit" class="btn btn-spruce" style="flex:1">' + tt("confirm") + '</button>' +
            '<button type="button" class="btn btn-line" id="fxVCancel">' + tt("close") + '</button></div></form>');
          document.getElementById("fxVCancel").addEventListener("click", closeFx);
          document.getElementById("fxViewForm").addEventListener("submit", function(e){
            e.preventDefault();
            var vBtn = e.target.querySelector('button[type="submit"]'); if (vBtn) vBtn.disabled = true;
            var vTok = tsToken("view");
            if (window.turnstile && !vTok) { if (vBtn) vBtn.disabled = false; document.getElementById("fxVErr").textContent = tt("captchaErr"); tsRenderAll(); return; }
            var payload = { listingId: mls || "", date: document.getElementById("fxVDate").value, time: document.getElementById("fxVTime").value, name: document.getElementById("fxVName").value, email: document.getElementById("fxVEmail").value, phone: document.getElementById("fxVPhone").value, lang: lang(), turnstileToken: vTok };
            api("/api/viewing", "POST", payload).then(function(){ closeFx(); toast(tt("viewingDone")); })
              .catch(function(er){ if (vBtn) vBtn.disabled = false; var em = (er && er.message) || ""; document.getElementById("fxVErr").textContent = em === "captcha" ? tt("captchaErr") : (em === "slot_unavailable" ? tt("slotGone") : (em === "banned" ? tt("bannedErr") : tt("errGeneric"))); if (em === "captcha") tsReset("view"); });
          });
          // Owner-set availability: if the owner set viewing times for this home, offer ONLY those
          if (mls) {
            fetch(API + "/api/availability/" + encodeURIComponent(mls)).then(function(r){ return r.json(); }).then(function(d){
              if (!d || !d.ok || !d.restricted) return;
              if (!d.dates || !d.dates.length) {
                var dEl3 = document.getElementById("fxVDate"), tEl3 = document.getElementById("fxVTime"), nEl3 = document.getElementById("fxVNote"), sEl3 = document.querySelector("#fxViewForm button[type=submit]");
                if (dEl3) dEl3.innerHTML = ""; if (tEl3) tEl3.innerHTML = "";
                if (nEl3) nEl3.textContent = "🏠 " + tt("ownerTimes");
                if (sEl3) sEl3.disabled = true;
                return;
              }
              var dateSel = document.getElementById("fxVDate"), timeSel = document.getElementById("fxVTime");
              if (!dateSel || !timeSel) return;
              var byDate = {};
              d.dates.forEach(function(x){ byDate[x.date] = x.times; });
              dateSel.innerHTML = d.dates.map(function(x){ return '<option value="' + x.date + '">' + fmtDay(x.date) + '</option>'; }).join("");
              var paintTimes = function(){ var ts = byDate[dateSel.value] || []; timeSel.innerHTML = ts.map(function(t){ return "<option>" + t + "</option>"; }).join(""); };
              dateSel.addEventListener("change", paintTimes);
              paintTimes();
              var note = document.getElementById("fxVNote");
              if (note) note.textContent = "🏠 " + tt("ownerTimes");
            }).catch(function(){});
          }
          tsRenderAll();
        }
        var resetBtn = document.getElementById("resetBtn");
        if (resetBtn && resetBtn.parentNode) {
          var sb = document.createElement("button");
          sb.type = "button"; sb.className = "btn btn-spruce"; sb.id = "fxSaveSearch"; sb.style.cssText = "margin-inline-start:8px;padding:10px 16px;font-size:14.5px";
          sb.textContent = "🔎 " + tt("saveSearch");
          resetBtn.parentNode.insertBefore(sb, resetBtn.nextSibling);
          sb.addEventListener("click", function(){
            if (!token) { showAuth("in"); toast(tt("needAuth")); return; }
            var g = function(id){ var el = document.getElementById(id); return el ? el.value : ""; };
            var criteria = { q: g("q"), city: g("fCity"), type: g("fType"), maxPrice: g("fPrice"), minBeds: g("fBeds"), presale: (document.getElementById("fPresale") && document.getElementById("fPresale").checked) ? "only" : "" };
            openFx('<h3>🔎 ' + tt("saveSearch") + '</h3><form id="fxSearchForm">' +
              '<label for="fxSName">' + tt("searchName") + '</label><input type="text" id="fxSName" value="' + esc2([criteria.city, criteria.type].filter(Boolean).join(" · ") || "My search") + '" />' +
              '<label style="display:flex;gap:8px;align-items:center;font-weight:500"><input type="checkbox" id="fxSNotify" style="width:auto" /> ' + tt("notify") + '</label>' +
              '<div class="fx-err" id="fxSErr"></div>' +
              '<div style="display:flex;gap:10px;margin-top:10px"><button type="submit" class="btn btn-spruce" style="flex:1">' + tt("saveSearch") + '</button>' +
              '<button type="button" class="btn btn-line" id="fxSCancel">' + tt("close") + '</button></div></form>');
            document.getElementById("fxSCancel").addEventListener("click", closeFx);
            document.getElementById("fxSearchForm").addEventListener("submit", function(e){
              e.preventDefault();
              var ssBtn = e.target.querySelector('button[type="submit"]'); if (ssBtn) ssBtn.disabled = true;
              api("/api/user/searches", "POST", { name: document.getElementById("fxSName").value, criteria: criteria, notify: document.getElementById("fxSNotify").checked, lang: lang() })
                .then(function(d){ if (ssBtn) ssBtn.disabled = false; if (d.search) mySearches.unshift(d.search); closeFx(); toast(tt("savedOk")); })
                .catch(function(){ if (ssBtn) ssBtn.disabled = false; document.getElementById("fxSErr").textContent = tt("errGeneric"); });
            });
          });
        }
        loadMe();
      } catch(e){ try { console.warn("fx init", e); } catch(_e){} }
    })();
    /* ---------- site PWA: service worker + install UX (APP stage 1, build-generated) ---------- */
    (function(){
      var inApp = !!window.Capacitor;
      if (!inApp && "serviceWorker" in navigator) {
        try { navigator.serviceWorker.register("/portal-sw.js").catch(function(){}); } catch(e){}
      }
      var band = document.getElementById("pwaBand");
      if (!band || inApp) return;
      var standalone = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
      if (standalone) return;
      var dismissedAt = 0;
      try { dismissedAt = +localStorage.getItem("erfan-pwa-dismiss") || 0; } catch(e){}
      if (Date.now() - dismissedAt < 30 * 864e5) return;
      var btn = document.getElementById("pwaInstallBtn");
      var dis = document.getElementById("pwaDismiss");
      var iosHint = band.querySelector(".pwa-ios-hint");
      var deferred = null;
      window.addEventListener("beforeinstallprompt", function(e){
        e.preventDefault(); deferred = e;
        if (btn) btn.hidden = false;
        band.hidden = false;
      });
      window.addEventListener("appinstalled", function(){
        band.hidden = true;
        try { localStorage.removeItem("erfan-pwa-dismiss"); } catch(e){}
      });
      if (btn) btn.addEventListener("click", function(){
        if (!deferred) return;
        var p = deferred; deferred = null;
        try { p.prompt(); } catch(e){}
        if (p.userChoice && p.userChoice.then) p.userChoice.then(function(){ band.hidden = true; });
      });
      if (dis) dis.addEventListener("click", function(){
        band.hidden = true;
        try { localStorage.setItem("erfan-pwa-dismiss", String(Date.now())); } catch(e){}
      });
      var ua = navigator.userAgent || "";
      var isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      if (isIOS) { if (iosHint) iosHint.hidden = false; band.hidden = false; }
    })();
