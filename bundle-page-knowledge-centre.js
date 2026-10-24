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
        + kcSec("Who it suits", "Students and staff at SFU Surrey and KPU; first-time buyers who want direct SkyTrain access; and people who work in Surrey's growing centre and want a short commute."))
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
        + kcSec("Who it suits", "Buyers looking for a quieter, family-focused community with green space at the door, who commute by West Coast Express or by car.")),
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
        + kcSec("مناسب چه کسانی است", "دانشجویان و کارکنان SFU ساری و KPU؛ خریداران اولی که دسترسی مستقیم به اسکای‌ترین می‌خواهند؛ و کسانی که در مرکز رو‌به‌رشد ساری کار می‌کنند و رفت‌وآمد کوتاه می‌خواهند."))
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
        + kcSec("مناسب چه کسانی است", "خریدارانی که جامعه‌ای آرام‌تر و خانواده‌محور با فضای سبز دمِ دست می‌خواهند و با West Coast Express یا خودرو رفت‌وآمد می‌کنند.")),
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
        + kcSec("घर", "स्टेशनों के पास ऊँचे कॉन्डो, बढ़ती संख्या में टाउनहाउस, और आसपास की व्हैली सड़कों पर पुराने अलग मकान।")
        + kcSec("किसके लिए उपयुक्त", "SFU सरी और KPU के छात्र व कर्मचारी; पहली बार खरीदार जो सीधी स्काईट्रेन पहुँच चाहते हैं; और वे लोग जो सरी के बढ़ते केंद्र में काम करते हैं और छोटी यात्रा चाहते हैं।"))
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
        + kcSec("किसके लिए उपयुक्त", "वे खरीदार जो दरवाज़े पर हरियाली के साथ शांत, परिवार-केंद्रित समुदाय चाहते हैं, और वेस्ट कोस्ट एक्सप्रेस या कार से आते-जाते हैं।")),
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
        + kcSec("适合人群", "SFU 素里校区和 KPU 的学生与教职人员;希望直达天车的首次购房者;以及在素里不断成长的市中心工作、希望通勤时间短的人。"))
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
        + kcSec("适合人群", "希望社区更安静、以家庭为主且绿地近在门口,并乘坐西海岸快线或驾车通勤的买家。"))
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
      ai_err:"我现在连不上实时网络搜索，所以暂时只能根据本站内容回答。请过一会儿再试——也可以问我购房步骤、首付、税费、压力测试、物业管理费，或这里的示例房源。"}
    };
    for (var L12 in I18N12) { if (I18N[L12]) { for (var k12 in I18N12[L12]) I18N[L12][k12] = I18N12[L12][k12]; } }

    /* ---------- Smart in-chat invitations: after a market answer, the assistant
       points the visitor to this site's own monthly market report (all 4 languages) ---------- */
    var I18N13 = {
    en:{ai_nl_pitch:"By the way — we publish a free monthly housing market report for BC & Canada: price trends, sales activity, interest-rate moves, and what they mean for buyers and sellers — in your language. Want it in your inbox each month? Joining takes about 20 seconds: just fill in the short form.",
      ai_nl_btn:"Get the free monthly report"},
    fa:{ai_nl_pitch:"راستی — ما هر ماه یک گزارش رایگان از بازار مسکن BC و کانادا منتشر می‌کنیم: روند قیمت‌ها، حجم معاملات، تغییرات نرخ بهره و اینکه همه‌ی این‌ها برای خریدار و فروشنده چه معنایی دارد — به زبان خودتان. دوست دارید هر ماه در ایمیل‌تان باشد؟ عضویت فقط حدود ۲۰ ثانیه طول می‌کشد: کافی است فرم کوتاه اشتراک را پر کنید.",
      ai_nl_btn:"دریافت گزارش ماهانه‌ی رایگان"},
    hi:{ai_nl_pitch:"वैसे — हम हर महीने BC और कनाडा के लिए एक मुफ़्त आवास बाज़ार रिपोर्ट प्रकाशित करते हैं: कीमतों के रुझान, बिक्री गतिविधि, ब्याज दरों में बदलाव, और ख़रीदारों व विक्रेताओं के लिए इनका मतलब — आपकी भाषा में। क्या आप इसे हर महीने अपने इनबॉक्स में चाहते हैं? जुड़ने में बस 20 सेकंड लगते हैं: छोटा सा फ़ॉर्म भर दें।",
      ai_nl_btn:"मुफ़्त मासिक रिपोर्ट पाएं"},
    zh:{ai_nl_pitch:"顺便提一下——我们每月发布一份免费的 BC 与加拿大住房市场报告：价格走势、成交动态、利率变化，以及这些对买卖双方意味着什么——并以您的语言发送。想每月在邮箱中收到吗？加入只需约 20 秒：填写简短的订阅表单即可。",
      ai_nl_btn:"获取免费月度报告"}
    };
    for (var L13 in I18N13) { if (I18N[L13]) { for (var k13 in I18N13[L13]) I18N[L13][k13] = I18N13[L13][k13]; } }

    /* ---------- home buying assistant: site brain first, live AI + web search second ---------- */
    var AS_FALLBACK = {
      en:"I don't have a specific answer for that yet — I search only this site's own content. I can help with the steps to buy a home in BC, minimum down payments, property transfer tax and the first-time buyer exemption, annual property taxes, closing costs, the FHSA, the stress test, GDS/TDS ratios, CMHC insurance, offer subjects, strata fees, the site's neighbourhood guides, and typical rents. You can also read the <a href='#guide'>first-time buyer guide</a> or try the <a href='#calculator'>mortgage calculator</a> and <a href='#afford'>affordability estimator</a>.",
      fa:"برای این پرسش هنوز پاسخ مشخصی ندارم — من فقط محتوای همین سایت را جست‌وجو می‌کنم. می‌توانم درباره‌ی مراحل خرید خانه در BC، حداقل پیش‌پرداخت، مالیات انتقال ملک و معافیت خریدار اولی، مالیات سالانه‌ی ملک، هزینه‌های پایانی، FHSA، تست استرس، نسبت‌های GDS/TDS، بیمه‌ی CMHC، شروط پیشنهاد، شارژ ساختمان، راهنماهای محله‌ی سایت و اجاره‌های معمول کمک کنم. همچنین می‌توانید <a href='#guide'>راهنمای خریدار اولی</a> را بخوانید یا <a href='#calculator'>ماشین‌حساب وام</a> و <a href='#afford'>برآوردگر توان خرید</a> را امتحان کنید.",
      hi:"इस प्रश्न का मेरे पास अभी कोई विशिष्ट उत्तर नहीं है — मैं केवल इस साइट की अपनी सामग्री खोजता हूँ। मैं BC में घर खरीदने के चरणों, न्यूनतम डाउन पेमेंट, संपत्ति हस्तांतरण कर और पहली बार खरीदार छूट, वार्षिक संपत्ति कर, समापन लागतों, FHSA, स्ट्रेस टेस्ट, GDS/TDS अनुपात, CMHC बीमा, ऑफ़र की शर्तों, स्ट्राटा शुल्क, साइट की इलाका मार्गदर्शिकाओं और सामान्य किराए में मदद कर सकता हूँ। आप <a href='#guide'>पहली बार खरीदार मार्गदर्शिका</a> भी पढ़ सकते हैं या <a href='#calculator'>मॉर्गेज कैलकुलेटर</a> और <a href='#afford'>खरीद क्षमता अनुमानक</a> आज़मा सकते हैं।",
      zh:"我暂时还没有这个问题的具体答案——我只搜索本网站自己的内容。我可以帮您了解在 BC 买房的步骤、最低首付、房产转让税与首次购房者减免、年度地税、过户费用、FHSA、压力测试、GDS/TDS 比率、CMHC 保险、报价条件、物业管理费、本站的社区指南和典型租金。您也可以阅读<a href='#guide'>首次购房指南</a>,或试试<a href='#calculator'>房贷计算器</a>和<a href='#afford'>负担能力估算器</a>。"
    };
    var KB = [
      { id:"fthb",
        kw:{en:["first-time buyer exemption","first time buyer exemption","ptt exemption","tax exemption","exemption","rebate"],
            fa:["معافیت خریدار اولی","معافیت مالیاتی","معافیت"],
            hi:["पहली बार खरीदार छूट","कर छूट","छूट"],
            zh:["首次购房者减免","首次购房减免","免转让税","减免","免税"]},
        ans:{en:"Qualifying first-time buyers in BC can get a full or partial exemption from the property transfer tax on homes up to a certain threshold value, which can save thousands on closing costs. The eligibility rules and threshold amounts are set by the province and change over time, so don't rely on a specific dollar figure — verify the current thresholds and rules at gov.bc.ca. <a href='#guide'>See the exemption note in the guide</a>",
             fa:"خریداران اولی واجد شرایط در BC می‌توانند برای خانه‌هایی تا یک سقف قیمتی مشخص، از مالیات انتقال ملک معافیت کامل یا نسبی بگیرند که هزاران دلار در هزینه‌های پایانی صرفه‌جویی می‌کند. قواعد احراز شرایط و مبالغ سقف را استان تعیین می‌کند و در طول زمان تغییر می‌کنند؛ پس به رقم دلاری مشخصی اتکا نکنید — آستانه‌ها و قواعد جاری را در gov.bc.ca بررسی کنید. <a href='#guide'>یادداشت معافیت در راهنما را ببینید</a>",
             hi:"BC में पात्र पहली बार खरीदार एक निश्चित सीमा मूल्य तक के घरों पर संपत्ति हस्तांतरण कर से पूर्ण या आंशिक छूट पा सकते हैं, जिससे समापन लागतों में हज़ारों की बचत हो सकती है। पात्रता नियम और सीमा राशियाँ प्रांत तय करता है और वे समय के साथ बदलती रहती हैं, इसलिए किसी निश्चित डॉलर आंकड़े पर भरोसा न करें — gov.bc.ca पर वर्तमान सीमाएँ और नियम जाँचें। <a href='#guide'>मार्गदर्शिका में छूट नोट देखें</a>",
             zh:"符合条件的 BC 首次购房者,在门槛价值以内的房屋可获得房产转让税的全额或部分减免,可在过户费用上节省数千加元。资格规则和门槛金额由省政府制定且会随时间变化,因此不要依赖某个具体的美元数字——请到 gov.bc.ca 核实当前门槛和规则。<a href='#guide'>查看指南中的减免说明</a>"}},
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
        ans:{en:"Canadian lenders use two ratios to set your budget. GDS (Gross Debt Service) keeps total housing costs — mortgage payment, property tax, heating, and 50% of strata fees — at or under 32% of your gross income. TDS (Total Debt Service) keeps all of your debts, including car payments and credit cards, at or under 40%. Whichever ratio gives the lower number sets your maximum home price. <a href='#afford'>Try the affordability estimator</a>",
             fa:"وام‌دهنده‌های کانادایی برای تعیین بودجه‌ی شما از دو نسبت استفاده می‌کنند: GDS ‏(خدمات بدهی ناخالص) مجموع هزینه‌های مسکن — قسط وام، مالیات ملک، گرمایش و ۵۰٪ شارژ ساختمان — را حداکثر ۳۲٪ درآمد ناخالص نگه می‌دارد؛ و TDS ‏(مجموع خدمات بدهی) همه‌ی بدهی‌ها، از جمله اقساط خودرو و کارت اعتباری، را حداکثر ۴۰٪ نگه می‌دارد. هر نسبتی عدد کمتری بدهد، سقف قیمت خانه‌ی شما را تعیین می‌کند. <a href='#afford'>برآوردگر توان خرید را امتحان کنید</a>",
             hi:"कनाडाई ऋणदाता आपका बजट तय करने के लिए दो अनुपात इस्तेमाल करते हैं। GDS (Gross Debt Service) कुल आवास लागत — मॉर्गेज किस्त, संपत्ति कर, हीटिंग और स्ट्राटा शुल्क का 50% — को आपकी सकल आय के 32% तक रखता है। TDS (Total Debt Service) आपके सभी ऋणों, जिनमें कार किस्तें और क्रेडिट कार्ड शामिल हैं, को 40% तक रखता है। जो अनुपात कम आंकड़ा दे, वही आपके घर की अधिकतम कीमत तय करता है। <a href='#afford'>खरीद क्षमता अनुमानक आज़माएँ</a>",
             zh:"加拿大贷款机构用两个比率来确定您的预算:GDS(总债务偿还比率)将住房总成本——月供、地税、取暖费和 50% 的管理费——控制在总收入的 32% 以内;TDS(总债务比率)将您的全部债务(包括车贷和信用卡)控制在 40% 以内。两者中较低的数字决定您能买的最高房价。<a href='#afford'>试试负担能力估算器</a>"}},
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
        ans:{en:"The FHSA (First Home Savings Account) helps first-time buyers save for a home: you gain $8,000 of contribution room per year up to a $40,000 lifetime limit, contributions are tax-deductible, and withdrawals for a qualifying first home are tax-free. The account must be closed within 15 years of opening (or by the end of the year you turn 71). Rules can change — verify them with the CRA at canada.ca. <a href='#fhsa'>Try the FHSA tracker on this page</a>",
             fa:"حساب FHSA ‏(پس‌انداز خانه‌ی اول) به خریداران اولی کمک می‌کند: هر سال ۸٬۰۰۰ دلار فضای مشارکت می‌گیرید تا سقف مادام‌العمر ۴۰٬۰۰۰ دلار؛ مشارکت‌ها از مالیات کسر می‌شوند و برداشت برای خرید خانه‌ی اول واجد شرایط بدون مالیات است. حساب باید حداکثر ۱۵ سال پس از بازشدن بسته شود (یا تا پایان سالی که ۷۱ ساله می‌شوید). قواعد ممکن است تغییر کنند — آن‌ها را از CRA در canada.ca بررسی کنید. <a href='#fhsa'>ردیاب FHSA در همین صفحه</a>",
             hi:"FHSA (First Home Savings Account) पहली बार खरीदारों की मदद करता है: हर वर्ष आपको $8,000 की योगदान सीमा मिलती है, जीवनकाल सीमा $40,000 तक; योगदान कर-कटौती योग्य हैं और पात्र पहले घर के लिए निकासी कर-मुक्त है। खाता खोलने के 15 वर्षों के भीतर बंद करना होगा (या जिस वर्ष आप 71 के होते हैं, उसके अंत तक)। नियम बदल सकते हैं — CRA से canada.ca पर जाँचें। <a href='#fhsa'>इस पेज पर FHSA ट्रैकर आज़माएँ</a>",
             zh:"FHSA(首次购房储蓄账户)帮助首次购房者存钱:每年获得 $8,000 供款额度,终身上限 $40,000;供款可抵税,用于购买符合条件的首套住房时取款免税。账户必须在开设后 15 年内关闭(或在您年满 71 岁那年的年底前关闭)。规则可能变更——请到加拿大税务局网站 canada.ca 核实。<a href='#fhsa'>试试本页的 FHSA 追踪器</a>"}},
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
        ans:{en:"Rents in Metro Vancouver vary a lot by city, size and building age. As a rough orientation from recent market reporting (2025–2026): a 1-bedroom apartment often rents for about $2,100–$2,800/month in Vancouver, $1,900–$2,400 in Burnaby, and $1,700–$2,200 in Surrey, Coquitlam and Port Coquitlam; a 2-bedroom typically runs about $700–$900/month more. These are general ranges for orientation only — not quotes for any specific home. For current figures, check live rental listings and CMHC's rental market data. This site's buy vs rent calculator uses $2,600/month as its example rent: <a href='#buyvsrent'>compare renting with buying</a>. BC also caps annual rent increases for existing tenancies — the 2026 limit is 2.3%; verify the current limit at gov.bc.ca.",
             fa:"اجاره‌ها در مترو ونکوور بر اساس شهر، متراژ و سن ساختمان خیلی فرق می‌کنند. برای یک تصور کلی از گزارش‌های اخیر بازار (۲۰۲۵–۲۰۲۶): آپارتمان یک‌خوابه معمولاً حدود ۲٬۱۰۰ تا ۲٬۸۰۰ دلار در ماه در ونکوور، ۱٬۹۰۰ تا ۲٬۴۰۰ دلار در برنابی، و ۱٬۷۰۰ تا ۲٬۲۰۰ دلار در ساری، کوکیتلام و پورت کوکیتلام اجاره می‌رود؛ دوخوابه‌ها معمولاً حدود ۷۰۰ تا ۹۰۰ دلار در ماه بیشترند. این‌ها فقط بازه‌های کلی برای جهت‌یابی‌اند — قیمت هیچ خانه‌ی مشخصی نیستند. برای ارقام جاری، آگهی‌های زنده‌ی اجاره و داده‌های بازار اجاره‌ی CMHC را ببینید. ماشین‌حساب خرید یا اجاره‌ی این سایت ۲٬۶۰۰ دلار در ماه را به‌عنوان اجاره‌ی مثال استفاده می‌کند: <a href='#buyvsrent'>اجاره را با خرید مقایسه کنید</a>. در BC افزایش سالانه‌ی اجاره برای اجاره‌نشینان فعلی هم سقف دارد — سقف ۲۰۲۶ برابر ۲٫۳٪ است؛ سقف جاری را در gov.bc.ca بررسی کنید.",
             hi:"मेट्रो वैंकूवर में किराए शहर, आकार और इमारत की उम्र के अनुसार बहुत बदलते हैं। हालिया बाज़ार रिपोर्टिंग (2025–2026) के मोटे अनुमान के तौर पर: 1-बेडरूम अपार्टमेंट का किराया अक्सर वैंकूवर में लगभग $2,100–$2,800/माह, बर्नाबी में $1,900–$2,400, और सरी, कोक्विटलम व पोर्ट कोक्विटलम में $1,700–$2,200 रहता है; 2-बेडरूम आमतौर पर लगभग $700–$900/माह अधिक होता है। ये केवल दिशा-निर्देश के लिए सामान्य सीमाएँ हैं — किसी विशिष्ट घर के भाव नहीं। वर्तमान आंकड़ों के लिए लाइव रेंटल लिस्टिंग और CMHC के रेंटल बाज़ार डेटा देखें। इस साइट का खरीद बनाम किराया कैलकुलेटर $2,600/माह को उदाहरण किराए के रूप में इस्तेमाल करता है: <a href='#buyvsrent'>किराए की तुलना खरीद से करें</a>। BC मौजूदा किरायेदारियों पर वार्षिक किराया वृद्धि की सीमा भी तय करता है — 2026 की सीमा 2.3% है; वर्तमान सीमा gov.bc.ca पर जाँचें।",
             zh:"温哥华都会区的租金因城市、面积和楼龄差异很大。根据近期市场报道（2025–2026）的大致参考：一卧公寓在温哥华的月租通常约为 $2,100–$2,800，在本拿比约为 $1,900–$2,400，在素里、高贵林和高贵林港约为 $1,700–$2,200；两卧通常每月多出约 $700–$900。这些只是供参考的一般范围，并非任何具体房屋的报价。最新数字请查看实时租房房源和 CMHC 的租赁市场数据。本站的买房 vs 租房计算器以每月 $2,600 作为示例租金：<a href='#buyvsrent'>比较租房与买房</a>。BC 还对现有租约的年涨幅设上限——2026 年上限为 2.3%；请到 gov.bc.ca 核实当前上限。"}},
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
    ];
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
        d.innerHTML = html;
        log.appendChild(d);
        log.scrollTop = log.scrollHeight;
        els.push(d);
      });
      return els;
    }
    function listingsSummary(){
      return LISTINGS.map(function(l){ return "MLS® " + l.mls + " — " + (T()["type_" + l.type] || l.type) + ", " + (T().cities[l.city] || l.city) + ", " + fmt(l.price); }).join("; ") + ".";
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
    function cityVariants(){
      var map = {};
      CITIES.forEach(function(c){
        map[c.toLowerCase()] = c;
        ["en", "fa", "hi", "zh"].forEach(function(L){
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
      var msg = normDigits(text.toLowerCase());
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
        if (!isNaN(val)){
          if (pm[2] === "k") val = val * 1000;
          else if (pm[2] === "m") val = val * 1000000;
          else if (val < 10000) val = val * 1000;
          crit.max = val;
        }
      }
      var intent = false;
      for (var n = 0; n < LIST_INTENT.length; n++){ if (msg.indexOf(LIST_INTENT[n]) !== -1){ intent = true; break; } }
      if (crit.max || crit.beds || crit.type || (crit.city && intent)) return crit;
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
          + " · MLS® " + l.mls
          + " · <a href=\"#listings\" data-open-listing=\"" + l.mls + "\">" + esc(t.view) + "</a>";
      });
      return fill(t.sr_found, {n: hits.length}) + "<br>" + lines.join("<br>");
    }
    /* --- site search: sections + the live Knowledge Center cards on this page --- */
    var PAGE_OF = window.PAGE_OF || {"listings":"listings.html","calculator":"mortgage-calculator.html","buyvsrent":"buy-vs-rent.html","afford":"affordability.html","invest":"investor-analysis.html","match":"ai-assistant.html#match","assistant":"ai-assistant.html#assistant","compare":"listings.html#compare","seller-tools":"seller-tools.html","guide":"first-time-buyers.html","fhsa":"first-time-buyers.html#fhsa","knowledge":"knowledge-centre.html","newsletter":"index.html#newsletter","contact":"contact.html"};
    var SECTIONS_IDX = [
      {id:"listings", key:"search_title", kw:"search listings homes browse mls"},
      {id:"calculator", key:"calc_title", kw:"mortgage calculator payment loan interest"},
      {id:"buyvsrent", key:"bv_title", kw:"rent renting buy versus compare"},
      {id:"afford", key:"af_title", kw:"affordability income qualify ratios budget"},
      {id:"invest", key:"iv_title", kw:"investor rental cash flow cap rate return"},
      {id:"match", key:"match_title", kw:"match assistant find homes criteria"},
      {id:"assistant", key:"as_title", kw:"assistant questions help chat"},
      {id:"compare", key:"cmp_title", kw:"compare homes side by side"},
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
      var toks = msg.split(/[^\p{L}\p{N}]+/u).filter(function(w){ return w.length >= 3 && STOPWORDS.indexOf(w) === -1; });
      if (lang === "zh"){
        for (var i = 0; i + 1 < msg.length; i++){
          var bg = msg.substr(i, 2);
          if (/[\u4e00-\u9fff]{2}/.test(bg) && toks.indexOf(bg) === -1) toks.push(bg);
        }
      }
      if (!toks.length) return null;
      function score(hay){ var s = 0; toks.forEach(function(w){ if (hay.indexOf(w) !== -1) s++; }); return s; }
      var found = [];
      SECTIONS_IDX.forEach(function(s){
        var hay = ((T()[s.key] || "") + " " + (I18N.en[s.key] || "") + " " + s.kw).toLowerCase();
        var sc = score(hay);
        if (sc > 0) found.push({sc: sc, html: "<a href=\"" + (PAGE_OF[s.id] || ("#" + s.id)) + "\">" + esc(T()[s.key] || s.key) + "</a>"});
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
      var msg = text.toLowerCase();
      for (var i = 0; i < KB.length; i++){
        var kws = KB[i].kw[lang] || KB[i].kw.en;
        for (var j = 0; j < kws.length; j++){
          if (msg.indexOf(kws[j].toLowerCase()) !== -1) return kbAnswer(KB[i]);
        }
      }
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
      if ($("aiFab")) $("aiFab").setAttribute("aria-label", t.ai_open);
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
      var d = document.createElement("div");
      d.innerHTML = html;
      return (d.textContent || "").replace(/\s+/g, " ").trim();
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
      function hit(words){ for (var i = 0; i < words.length; i++){ if (m.indexOf(words[i]) !== -1) return true; } return false; }
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
          return "<a href=\"" + url.replace(/&amp;/g, "&") + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + label + "</a>";
        })
        .replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, function(m0, pre, url){
          return pre + "<a href=\"" + url.replace(/&amp;/g, "&") + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + url + "</a>";
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
    function askGemini(text, done){
      var cacheKey = lang + "|" + text.toLowerCase().replace(/\s+/g, " ").trim();
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
      setTimeout(function(){ var f = $("nlFirst"); if (f) f.focus({preventScroll: true}); }, 650);
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
      var text = input.value.trim();
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
      var typing = postTyping();
      askGemini(text, function(res){
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
            var errHtml = esc(T().ai_err || AS_FALLBACK[lang] || AS_FALLBACK.en);
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
    $("aiForm").addEventListener("submit", function(e){
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
      if (e.key === "Escape" && $("tourModal").style.display === "block") closeTour();
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
        if (!rec || typeof rec !== "object" || typeof rec.mls !== "string" || !rec.mls) return;
        if (!rec.photo || typeof rec.photo !== "string" || (/:/.test(rec.photo) && !/^https:\/\//i.test(rec.photo))) rec.photo = "photos/hero.webp";
        if (typeof rec.desc === "string") rec.desc = { en: rec.desc };
        if (!rec.desc || typeof rec.desc !== "object") rec.desc = { en: "" };
        ["en","fa","hi","zh"].forEach(function(L){ if (typeof rec.desc[L] !== "string") rec.desc[L] = (L === "en" ? "" : rec.desc.en || ""); });
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
        if (typeof rec.type !== "string") rec.type = "condo";
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
      var re;
      try { re = new RegExp("(?<![0-9.,])4\\.79(?![0-9])", "g"); } catch (e) { return; }
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var nodes = [];
      while (walker.nextNode()) {
        var n = walker.currentNode;
        if (n.parentNode && /SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)) continue;
        if (n.nodeValue.indexOf("4.79") !== -1) nodes.push(n);
      }
      nodes.forEach(function(n){ n.nodeValue = n.nodeValue.replace(re, newStr); });
    }
    window.__applyPortalTexts = function(){
      var s = window.__portalSettings;
      if (!s) return;
      var lg = lang === "zh" ? "zh" : lang;
      replaceSiteText("erfanbcrealestate@gmail.com", s.email || "");
      replaceSiteText("Erfan BC Real Estate", s.brand || "");
      if (s.rate) replaceRateText(String(s.rate));
      if (s.email) document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){ a.setAttribute("href", "mailto:" + s.email); });
      if (s.brand) { var og = document.querySelector('meta[property="og:title"]'); if (og) og.setAttribute("content", (og.getAttribute("content") || "").split("Erfan BC Real Estate").join(s.brand)); }
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
          bar.setAttribute("style", "background:#C6A15B;color:#0B2239;text-align:center;padding:9px 44px 9px 14px;font-size:14.5px;font-weight:600;position:relative");
          bar.innerHTML = '<span id="annTxt"></span><button type="button" aria-label="Close" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:0;font-size:17px;cursor:pointer;color:#0B2239">✕</button>';
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
      window.__portalReady.then(portalBoot);
    } else {
      applyLang(lang, false);
    }
    /* Lightweight first-party traffic stats for the private admin portal.
       Sends aggregate counts only (page, event, language, referrer host) — no cookies, no personal data. */
    (function(){
      try {
        var T = "https://advisor-api.erfanbillion.workers.dev/api/track";
        function curLang(){ try { return localStorage.getItem("erfan-re-lang") || document.documentElement.lang || "en"; } catch(e){ return document.documentElement.lang || "en"; } }
        function pageName(){ var p = (location.pathname || "").split("/").pop(); return p || "index.html"; }
        function send(o){
          try {
            o.page = pageName();
            if (!o.lang) o.lang = curLang();
            var b = JSON.stringify(o);
            if (navigator.sendBeacon) { navigator.sendBeacon(T, new Blob([b], { type: "text/plain" })); }
            else { fetch(T, { method: "POST", body: b, keepalive: true, headers: { "Content-Type": "text/plain" } }).catch(function(){}); }
          } catch(e){}
        }
        var refHost = "";
        try { if (document.referrer) refHost = new URL(document.referrer).hostname; } catch(e){}
        if (refHost && refHost !== location.hostname) send({ type: "pageview", ref: refHost });
        else send({ type: "pageview" });
        if (typeof window.openListing === "function") {
          var _ol = window.openListing;
          window.openListing = function(mls){ send({ type: "event", event: "listing_view", listingId: mls }); return _ol.apply(this, arguments); };
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
          en: { account: "Account", signIn: "Sign in", register: "Create account", name: "Full name", email: "Email", password: "Password", signOut: "Sign out", savedHomes: "Saved homes", savedSearches: "Saved searches", saveSearch: "Save this search", searchName: "Name this search", notify: "Email me new matches", bookViewing: "Book a viewing", date: "Date", time: "Time", phone: "Phone", confirm: "Confirm request", close: "Close", remove: "Remove", noSaved: "No saved homes yet — tap the heart on a listing.", noSearches: "No saved searches yet.", viewingDone: "Viewing requested. A confirmation email is on its way.", errGeneric: "Something went wrong — please try again.", captchaErr: "Please complete the security check.", errCreds: "Email or password is incorrect.", errExists: "An account with this email already exists — sign in instead.", needAuth: "Sign in first to save homes and searches.", alertsOn: "Alerts on", savedOk: "Saved.", passHint: "At least 8 characters", profile: "Profile", budget: "Budget", interest: "I'm interested in", optBuy: "Buying", optSell: "Selling", optRent: "Renting", optInvest: "Investing", areas: "Areas you like (comma separated)", reachMe: "Best way to reach you", optEmail: "Email", optPhone: "Phone", optEither: "Either works", optional: "Optional — fill only what you like", saveBtn: "Save", profSaved: "Profile saved.", myViewings: "My viewings", noViewings: "No viewings booked yet.", recent: "Recently viewed", priceDrop: "Price drop", cancelBooking: "Cancel booking", reschedule: "Reschedule", bannedErr: "This account has been suspended. Please contact us.", cancelledOk: "Booking cancelled.", movedOk: "Viewing moved.", or: "or", googleBtn: "Continue with Google", ownerTimes: "Viewing times set by the owner:", slotGone: "That time is no longer available — please pick another." },
          fa: { account: "حساب کاربری", signIn: "ورود", register: "ساخت حساب", name: "نام کامل", email: "ایمیل", password: "رمز عبور", signOut: "خروج", savedHomes: "خانه‌های ذخیره‌شده", savedSearches: "جستجوهای ذخیره‌شده", saveSearch: "ذخیره این جستجو", searchName: "اسم این جستجو", notify: "مچ‌های جدید رو برام ایمیل کن", bookViewing: "رزرو بازدید", date: "تاریخ", time: "ساعت", phone: "تلفن", confirm: "ثبت درخواست", close: "بستن", remove: "حذف", noSaved: "هنوز خونه‌ای ذخیره نکردی — روی قلب هر لیستینگ بزن.", noSearches: "هنوز جستجویی ذخیره نکردی.", viewingDone: "درخواست بازدید ثبت شد. ایمیل تایید در راهه.", errGeneric: "یه خطا پیش اومد — دوباره تلاش کن.", captchaErr: "لطفاً بررسی امنیتی رو کامل کن.", errCreds: "ایمیل یا رمز عبور اشتباهه.", errExists: "با این ایمیل قبلاً حساب ساخته شده — وارد شو.", needAuth: "برای ذخیره خونه و جستجو اول وارد شو.", alertsOn: "هشدار فعال", savedOk: "ذخیره شد.", passHint: "حداقل ۸ حرف", profile: "پروفایل", budget: "بودجه", interest: "علاقه‌مندم به", optBuy: "خرید", optSell: "فروش", optRent: "اجاره", optInvest: "سرمایه‌گذاری", areas: "محله‌های مورد علاقه (با کاما جدا کن)", reachMe: "بهترین راه تماس با تو", optEmail: "ایمیل", optPhone: "تلفن", optEither: "هرکدوم راحته", optional: "اختیاریه — فقط هرچی دوست داری پر کن", saveBtn: "ذخیره", profSaved: "پروفایل ذخیره شد.", myViewings: "بازدیدهای من", noViewings: "هنوز بازدیدی رزرو نکردی.", recent: "اخیراً دیده‌شده‌ها", priceDrop: "افت قیمت", cancelBooking: "لغو رزرو", reschedule: "تغییر زمان", bannedErr: "این حساب تعلیق شده. لطفاً با ما تماس بگیر.", cancelledOk: "رزرو لغو شد.", movedOk: "زمان بازدید جابه‌جا شد.", or: "یا", googleBtn: "ادامه با گوگل", ownerTimes: "زمان‌های بازدید رو صاحب‌خانه تعیین کرده:", slotGone: "این زمان دیگه در دسترس نیست — یه زمان دیگه انتخاب کن." },
          hi: { account: "खाता", signIn: "साइन इन", register: "खाता बनाएं", name: "पूरा नाम", email: "ईमेल", password: "पासवर्ड", signOut: "साइन आउट", savedHomes: "सहेजे गए घर", savedSearches: "सहेजी गई खोजें", saveSearch: "यह खोज सहेजें", searchName: "खोज का नाम", notify: "नए मैच मुझे ईमेल करें", bookViewing: "व्यूइंग बुक करें", date: "तारीख़", time: "समय", phone: "फ़ोन", confirm: "अनुरोध की पुष्टि करें", close: "बंद करें", remove: "हटाएं", noSaved: "अभी कोई घर सहेजा नहीं गया — किसी लिस्टिंग पर दिल दबाएं।", noSearches: "अभी कोई खोज सहेजी नहीं गई।", viewingDone: "व्यूइंग का अनुरोध हो गया। पुष्टि ईमेल आ रहा है।", errGeneric: "कुछ गड़बड़ हुई — फिर कोशिश करें।", captchaErr: "कृपया सुरक्षा जांच पूरी करें।", errCreds: "ईमेल या पासवर्ड ग़लत है।", errExists: "इस ईमेल से खाता पहले से है — साइन इन करें।", needAuth: "घर और खोजें सहेजने के लिए पहले साइन इन करें।", alertsOn: "अलर्ट चालू", savedOk: "सहेजा गया।", passHint: "कम से कम 8 अक्षर", profile: "प्रोफ़ाइल", budget: "बजट", interest: "मेरी रुचि है", optBuy: "खरीदना", optSell: "बेचना", optRent: "किराया", optInvest: "निवेश", areas: "पसंदीदा इलाके (कॉमा से अलग करें)", reachMe: "संपर्क का सबसे अच्छा तरीका", optEmail: "ईमेल", optPhone: "फ़ोन", optEither: "कोई भी ठीक है", optional: "वैकल्पिक — सिर्फ़ वही भरें जो चाहें", saveBtn: "सहेजें", profSaved: "प्रोफ़ाइल सहेजी गई।", myViewings: "मेरी व्यूइंग", noViewings: "अभी कोई व्यूइंग बुक नहीं है।", recent: "हाल ही में देखे गए", priceDrop: "कीमत में गिरावट", cancelBooking: "बुकिंग रद्द करें", reschedule: "समय बदलें", bannedErr: "यह खाता निलंबित कर दिया गया है। कृपया हमसे संपर्क करें।", cancelledOk: "बुकिंग रद्द हो गई।", movedOk: "व्यूइंग का समय बदल गया।", or: "या", googleBtn: "Google के साथ जारी रखें", ownerTimes: "मालिक द्वारा तय किए गए व्यूइंग समय:", slotGone: "यह समय अब उपलब्ध नहीं है — कृपया दूसरा चुनें।" },
          zh: { account: "账户", signIn: "登录", register: "创建账户", name: "全名", email: "电子邮箱", password: "密码", signOut: "退出登录", savedHomes: "已保存房源", savedSearches: "已保存搜索", saveSearch: "保存此搜索", searchName: "搜索名称", notify: "有新匹配时发邮件通知我", bookViewing: "预约看房", date: "日期", time: "时间", phone: "电话", confirm: "确认预约", close: "关闭", remove: "删除", noSaved: "尚未保存房源 — 点击房源上的爱心即可。", noSearches: "尚未保存搜索。", viewingDone: "看房请求已提交，确认邮件即将发出。", errGeneric: "出错了 — 请重试。", captchaErr: "请完成安全验证。", errCreds: "电子邮箱或密码不正确。", errExists: "该电子邮箱已注册 — 请直接登录。", needAuth: "登录后即可保存房源和搜索。", alertsOn: "提醒已开启", savedOk: "已保存。", passHint: "至少 8 个字符", profile: "个人资料", budget: "预算", interest: "我感兴趣", optBuy: "买房", optSell: "卖房", optRent: "租房", optInvest: "投资", areas: "喜欢的社区（用逗号分隔）", reachMe: "最佳联系方式", optEmail: "电子邮件", optPhone: "电话", optEither: "都可以", optional: "可选 — 只填您想填的", saveBtn: "保存", profSaved: "个人资料已保存。", myViewings: "我的看房", noViewings: "尚未预约看房。", recent: "最近浏览", priceDrop: "价格下降", cancelBooking: "取消预约", reschedule: "改期", bannedErr: "该账户已被停用，请联系我们。", cancelledOk: "预约已取消。", movedOk: "看房时间已更改。", or: "或", googleBtn: "使用 Google 继续", ownerTimes: "业主设定的看房时间：", slotGone: "该时间已不可用 — 请选择其他时间。" }
        };
        var MINI = {
          "R2991001": ["2108-4981 Kingsway", "Burnaby", 689000],
          "R2991002": ["45-1188 Inlet Street", "Coquitlam", 749000],
          "R2991003": ["7421 18th Avenue", "Burnaby", 1299000],
          "R2991004": ["1506-833 Seymour Street", "Vancouver", 549000],
          "R2991005": ["22-15500 102A Avenue", "Surrey", 899000],
          "R2991006": ["309-550 Kirkland Avenue", "Port Coquitlam", 425000]
        };
        function lang(){ try { return localStorage.getItem("erfan-re-lang") || document.documentElement.lang || "en"; } catch(e){ return "en"; } }
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
          if (gh.indexOf("#gtoken=") === 0) { token = gh.slice(8); try { localStorage.setItem("re_user_token", token); } catch(e){} history.replaceState(null, "", location.pathname + location.search); setTimeout(function(){ toast(tt("savedOk")); }, 600); }
          else if (gh.indexOf("#gerror=") === 0) { var ge = gh.slice(8); history.replaceState(null, "", location.pathname + location.search); setTimeout(function(){ toast(ge === "banned" ? tt("bannedErr") : tt("errGeneric")); }, 600); }
        } catch(e){}
        var me = null, savedSet = {}, mySearches = [], myProfile = {}, myRecent = [], myDrops = {};
        var css = ".save-btn{position:absolute;top:10px;inset-inline-end:10px;width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.94);color:#9c2b2e;font-size:19px;line-height:1;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;z-index:2}" +
          ".save-btn.on{background:#9c2b2e;color:#fff}" +
          ".fx-ov{position:fixed;inset:0;background:rgba(5,15,26,.55);z-index:500;display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:24px 12px}" +
          ".fx-ov.open{display:flex}" +
          ".fx-box{background:#fff;color:#1c2420;border-radius:16px;max-width:440px;width:100%;padding:22px;box-shadow:0 18px 50px rgba(0,0,0,.35);font-size:15px}" +
          ".fx-box h3{margin:0 0 12px;font-size:20px}" +
          ".fx-box label{display:block;font-weight:600;margin:12px 0 5px}" +
          ".fx-box input[type=text],.fx-box input[type=email],.fx-box input[type=password],.fx-box input[type=tel],.fx-box select{width:100%;padding:11px 12px;border:1.5px solid #ccd4cd;border-radius:10px;font:inherit;background:#fff;color:#1c2420}" +
          ".fx-tabs{display:flex;gap:8px;margin-bottom:6px}" +
          ".fx-err{color:#b3261e;min-height:20px;font-size:14px;margin-top:8px}" +
          ".fx-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #edf0ec}" +
          ".fx-toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);background:#17352b;color:#f0e9d6;padding:11px 18px;border-radius:999px;z-index:600;font-size:14.5px;box-shadow:0 8px 24px rgba(0,0,0,.3);display:none;max-width:92vw;text-align:center}";
        var stEl = document.createElement("style"); stEl.textContent = css; document.head.appendChild(stEl);
        var ov = document.createElement("div"); ov.className = "fx-ov"; ov.innerHTML = '<div class="fx-box" role="dialog" aria-modal="true"></div>';
        document.body.appendChild(ov);
        var box = ov.firstChild;
        ov.addEventListener("click", function(e){ if (e.target === ov) closeFx(); });
        function closeFx(){ ov.classList.remove("open"); }
        function openFx(html){ box.innerHTML = html; ov.classList.add("open"); }
        var toastEl = document.createElement("div"); toastEl.className = "fx-toast"; document.body.appendChild(toastEl);
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
            (reg ? '<label>' + tt("name") + '</label><input type="text" id="fxName" autocomplete="name" />' : "") +
            '<label>' + tt("email") + '</label><input type="email" id="fxEmail" autocomplete="email" required />' +
            '<label>' + tt("password") + '</label><input type="password" id="fxPass" autocomplete="' + (reg ? "new-password" : "current-password") + '" required />' +
            (reg ? '<div style="font-size:13px;color:#5d686f;margin-top:5px">' + tt("passHint") + '</div>' : "") +
            '<div class="fx-ts" data-ts="auth" style="margin-top:12px"></div>' +
            '<div class="fx-err" id="fxErr"></div>' +
            '<div style="display:flex;gap:10px;margin-top:10px"><button type="submit" class="btn btn-spruce" style="flex:1">' + (reg ? tt("register") : tt("signIn")) + '</button>' +
            '<button type="button" class="btn btn-line" id="fxCancel">' + tt("close") + '</button></div></form>' +
            '<div style="display:flex;align-items:center;gap:10px;margin:14px 0 10px;color:#5d686f;font-size:13px"><span style="flex:1;border-top:1px solid #d8dcd9"></span>' + tt("or") + '<span style="flex:1;border-top:1px solid #d8dcd9"></span></div>' +
            '<a class="btn btn-line" style="display:block;text-align:center;text-decoration:none" href="' + API + '/api/user/google/start">🔵 ' + tt("googleBtn") + '</a>';
          openFx(html);
          document.getElementById("fxTabIn").addEventListener("click", function(){ showAuth("in"); });
          document.getElementById("fxTabReg").addEventListener("click", function(){ showAuth("reg"); });
          document.getElementById("fxCancel").addEventListener("click", closeFx);
          document.getElementById("fxAuthForm").addEventListener("submit", function(e){
            e.preventDefault();
            var email = document.getElementById("fxEmail").value, pass = document.getElementById("fxPass").value;
            var err = document.getElementById("fxErr");
            var tsTok = tsToken("auth");
            if (reg && window.turnstile && !tsTok) { err.textContent = tt("captchaErr"); tsRenderAll(); return; }
            var payload = reg ? { name: document.getElementById("fxName").value, email: email, password: pass, lang: lang(), turnstileToken: tsTok } : { email: email, password: pass };
            api(reg ? "/api/user/register" : "/api/user/login", "POST", payload).then(function(d){
              token = d.token; try { localStorage.setItem("re_user_token", token); } catch(e2){}
              me = d.user; loadMe().then(function(){ showAccount(); });
            }).catch(function(er){
              err.textContent = er.message === "credentials" ? tt("errCreds") : (er.message === "exists" ? tt("errExists") : (er.message === "banned" ? tt("bannedErr") : (er.message === "captcha" ? tt("captchaErr") : tt("errGeneric"))));
              if (er.message === "captcha") tsReset("auth");
            });
          });
          tsRenderAll();
        }
        function loadMe(){
          if (!token) return Promise.resolve();
          return api("/api/user/me").then(function(d){
            me = d.user; mySearches = d.searches || []; myProfile = d.profile || {}; myRecent = d.recent || [];
            myDrops = {}; (d.priceDrops || []).forEach(function(x){ myDrops[x.mls] = x; });
            savedSet = {}; (d.saved || []).forEach(function(m){ savedSet[m] = 1; });
            paintAcctBtn(); paintSaves();
          }).catch(function(){ token = ""; try { localStorage.removeItem("re_user_token"); } catch(e){} me = null; paintAcctBtn(); });
        }
        function showAccount(){
          if (!me) return;
          var homes = Object.keys(savedSet).map(function(m){
            var p = MINI[m] || [m, "", 0];
            var drop = myDrops[m] ? ' · <b style="color:#9c2b2e">🔻 ' + tt("priceDrop") + ': ' + money(myDrops[m].was) + ' → ' + money(myDrops[m].now) + '</b>' : "";
            return '<div class="fx-row"><span><b>' + money(p[2]) + '</b> · ' + esc2(p[0]) + ', ' + esc2(p[1]) + drop + '</span><button type="button" class="linkbtn" data-unsave="' + m + '">' + tt("remove") + '</button></div>';
          }).join("");
          var searches = mySearches.map(function(s){
            var c = s.criteria || {};
            var bits = [c.city, c.type, c.maxPrice ? ("≤ " + money(c.maxPrice)) : "", c.minBeds ? (c.minBeds + "+ bd") : "", c.q ? ('"' + c.q + '"') : ""].filter(Boolean).join(" · ");
            return '<div class="fx-row"><span><b>' + esc2(s.name) + '</b><br><span style="color:#5d686f;font-size:13.5px">' + esc2(bits) + (s.notify ? " · 🔔 " + tt("alertsOn") : "") + '</span></span><button type="button" class="linkbtn" data-unsearch="' + s.id + '">' + tt("remove") + '</button></div>';
          }).join("");
          var recent = myRecent.map(function(m){
            var p = MINI[m] || [m, "", 0];
            return '<div class="fx-row"><span><b>' + money(p[2]) + '</b> · ' + esc2(p[0]) + ', ' + esc2(p[1]) + '</span><button type="button" class="linkbtn" data-open-listing="' + m + '">View</button></div>';
          }).join("");
          var pf = myProfile || {};
          var intOpts = [["", "—"], ["buy", tt("optBuy")], ["sell", tt("optSell")], ["rent", tt("optRent")], ["invest", tt("optInvest")]].map(function(o){ return '<option value="' + o[0] + '"' + (pf.intent === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("");
          var cpOpts = [["", "—"], ["email", tt("optEmail")], ["phone", tt("optPhone")], ["either", tt("optEither")]].map(function(o){ return '<option value="' + o[0] + '"' + (pf.contactPref === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("");
          var langOpts = [["en", "English"], ["fa", "فارسی"], ["hi", "हिन्दी"], ["zh", "中文"]].map(function(o){ return '<option value="' + o[0] + '"' + ((me.lang || "en") === o[0] ? " selected" : "") + '>' + o[1] + '</option>'; }).join("");
          openFx('<h3>👤 ' + esc2(me.name) + '</h3><div style="color:#5d686f;margin-bottom:8px">' + esc2(me.email) + '</div>' +
            '<h3 style="font-size:16.5px;margin-top:16px">♥ ' + tt("savedHomes") + '</h3>' + (homes || '<p style="color:#5d686f">' + tt("noSaved") + '</p>') +
            '<h3 style="font-size:16.5px;margin-top:16px">🔎 ' + tt("savedSearches") + '</h3>' + (searches || '<p style="color:#5d686f">' + tt("noSearches") + '</p>') +
            '<h3 style="font-size:16.5px;margin-top:16px">📅 ' + tt("myViewings") + '</h3><div id="fxMyVw"><p style="color:#5d686f">…</p></div>' +
            (recent ? '<h3 style="font-size:16.5px;margin-top:16px">🕘 ' + tt("recent") + '</h3>' + recent : "") +
            '<h3 style="font-size:16.5px;margin-top:16px">⚙️ ' + tt("profile") + '</h3><p style="color:#5d686f;font-size:13.5px;margin:2px 0 4px">' + tt("optional") + '</p>' +
            '<form id="fxProfForm">' +
            '<label>' + tt("name") + '</label><input type="text" id="pfName" value="' + esc2(me.name) + '" />' +
            '<label>' + tt("phone") + '</label><input type="tel" id="pfPhone" value="' + esc2(pf.phone || "") + '" />' +
            '<label>' + tt("budget") + '</label><input type="text" id="pfBudget" value="' + esc2(pf.budget || "") + '" placeholder="$800,000" />' +
            '<label>' + tt("interest") + '</label><select id="pfIntent">' + intOpts + '</select>' +
            '<label>' + tt("areas") + '</label><input type="text" id="pfAreas" value="' + esc2((pf.areas || []).join(", ")) + '" placeholder="Burnaby, Coquitlam" />' +
            '<label>' + tt("reachMe") + '</label><select id="pfContact">' + cpOpts + '</select>' +
            '<label>Email language</label><select id="pfLang">' + langOpts + '</select>' +
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
            api("/api/user/searches/" + sid, "DELETE").then(function(){ mySearches = mySearches.filter(function(s){ return s.id !== sid; }); showAccount(); }).catch(function(){ toast(tt("errGeneric")); });
          }); });
          document.getElementById("fxProfForm").addEventListener("submit", function(e){
            e.preventDefault();
            var areas = document.getElementById("pfAreas").value.split(",").map(function(a){ return a.trim(); }).filter(Boolean);
            api("/api/user/profile", "POST", { name: document.getElementById("pfName").value, phone: document.getElementById("pfPhone").value, budget: document.getElementById("pfBudget").value, intent: document.getElementById("pfIntent").value, areas: areas, contactPref: document.getElementById("pfContact").value, lang: document.getElementById("pfLang").value })
              .then(function(d){ me = d.user; myProfile = d.profile || {}; paintAcctBtn(); toast(tt("profSaved")); })
              .catch(function(){ toast(tt("errGeneric")); });
          });
          api("/api/user/viewings").then(function(d){
            var vw = (d.viewings || []).filter(function(v){ return v.status !== "done"; });
            var el = document.getElementById("fxMyVw");
            if (!el) return;
            if (!vw.length) { el.innerHTML = '<p style="color:#5d686f">' + tt("noViewings") + '</p>'; return; }
            var todayV = new Date().toISOString().slice(0, 10);
            el.innerHTML = vw.map(function(v){
              var L = v.listing || {};
              var can = (v.status === "new" || v.status === "confirmed") && v.date >= todayV;
              var acts = can ? '<div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap"><button type="button" class="linkbtn" data-vwcancel="' + v.id + '">' + tt("cancelBooking") + '</button><button type="button" class="linkbtn" data-vwmove="' + v.id + '">' + tt("reschedule") + '</button></div><div id="mv-' + v.id + '"></div>' : "";
              return '<div class="fx-row" style="display:block"><span><b>' + esc2(v.date) + ' · ' + esc2(v.time) + '</b> — ' + esc2(L.street || v.listingId || "") + (L.city ? ', ' + esc2(L.city) : "") + ' <span style="color:#5d686f">(' + esc2(v.status) + ')</span></span>' + acts + '</div>';
            }).join("");
            el.querySelectorAll("[data-vwcancel]").forEach(function(b){ b.addEventListener("click", function(){
              api("/api/user/viewings/" + b.getAttribute("data-vwcancel") + "/cancel", "POST", {}).then(function(){ toast(tt("cancelledOk")); showAccount(); }).catch(function(){ toast(tt("errGeneric")); });
            }); });
            el.querySelectorAll("[data-vwmove]").forEach(function(b){ b.addEventListener("click", function(){
              var vid = b.getAttribute("data-vwmove");
              var slot = document.getElementById("mv-" + vid);
              var times = (window.__portalSlots || ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"]).map(function(x){ return '<option>' + x + '</option>'; }).join("");
              slot.innerHTML = '<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap"><select id="mvD-' + vid + '">' + dateOptions() + '</select><select id="mvT-' + vid + '">' + times + '</select><button type="button" class="btn btn-spruce" id="mvGo-' + vid + '">' + tt("saveBtn") + '</button></div>';
              document.getElementById("mvGo-" + vid).addEventListener("click", function(){
                api("/api/user/viewings/" + vid + "/reschedule", "POST", { date: document.getElementById("mvD-" + vid).value, time: document.getElementById("mvT-" + vid).value })
                  .then(function(){ toast(tt("movedOk")); showAccount(); }).catch(function(){ toast(tt("errGeneric")); });
              });
            }); });
          }).catch(function(){ var el = document.getElementById("fxMyVw"); if (el) el.innerHTML = '<p style="color:#5d686f">' + tt("noViewings") + '</p>'; });
        }
        function paintSaves(){
          document.querySelectorAll("[data-save]").forEach(function(b){
            var on = !!savedSet[b.getAttribute("data-save")];
            b.classList.toggle("on", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
            b.textContent = on ? "♥" : "♡";
          });
        }
        function toggleSave(mls){
          if (!token) { showAuth("in"); toast(tt("needAuth")); return Promise.resolve(); }
          return api("/api/user/save", "POST", { mls: mls }).then(function(d){
            savedSet = {}; (d.saved || []).forEach(function(m){ savedSet[m] = 1; });
            paintSaves();
          }).catch(function(){ toast(tt("errGeneric")); });
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
            if (token) { api("/api/user/recent", "POST", { mls: mls }).then(function(d){ myRecent = d.recent || myRecent; }).catch(function(){}); }
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
            (p ? '<p style="color:#5d686f;margin:0 0 6px">' + esc2(p[0]) + ', ' + esc2(p[1]) + ' · ' + money(p[2]) + '</p>' : "") +
            '<div id="fxVNote" style="font-size:13.5px;color:var(--brass);margin:0 0 4px"></div>' +
            '<form id="fxViewForm">' +
            '<label>' + tt("date") + '</label><select id="fxVDate">' + dateOptions() + '</select>' +
            '<label>' + tt("time") + '</label><select id="fxVTime">' + times + '</select>' +
            '<label>' + tt("name") + '</label><input type="text" id="fxVName" value="' + (me ? esc2(me.name) : "") + '" required />' +
            '<label>' + tt("email") + '</label><input type="email" id="fxVEmail" value="' + (me ? esc2(me.email) : "") + '" required />' +
            '<label>' + tt("phone") + '</label><input type="tel" id="fxVPhone" />' +
            '<div class="fx-ts" data-ts="view" style="margin-top:12px"></div>' +
            '<div class="fx-err" id="fxVErr"></div>' +
            '<div style="display:flex;gap:10px;margin-top:10px"><button type="submit" class="btn btn-spruce" style="flex:1">' + tt("confirm") + '</button>' +
            '<button type="button" class="btn btn-line" id="fxVCancel">' + tt("close") + '</button></div></form>');
          document.getElementById("fxVCancel").addEventListener("click", closeFx);
          document.getElementById("fxViewForm").addEventListener("submit", function(e){
            e.preventDefault();
            var vTok = tsToken("view");
            if (window.turnstile && !vTok) { document.getElementById("fxVErr").textContent = tt("captchaErr"); tsRenderAll(); return; }
            var payload = { listingId: mls || "", date: document.getElementById("fxVDate").value, time: document.getElementById("fxVTime").value, name: document.getElementById("fxVName").value, email: document.getElementById("fxVEmail").value, phone: document.getElementById("fxVPhone").value, lang: lang(), turnstileToken: vTok };
            api("/api/viewing", "POST", payload).then(function(){ closeFx(); toast(tt("viewingDone")); })
              .catch(function(er){ var em = (er && er.message) || ""; document.getElementById("fxVErr").textContent = em === "captcha" ? tt("captchaErr") : (em === "slot_unavailable" ? tt("slotGone") : (em === "banned" ? tt("bannedErr") : tt("errGeneric"))); if (em === "captcha") tsReset("view"); });
          });
          // Owner-set availability: if the owner set viewing times for this home, offer ONLY those
          if (mls) {
            fetch(API + "/api/availability/" + encodeURIComponent(mls)).then(function(r){ return r.json(); }).then(function(d){
              if (!d || !d.ok || !d.restricted || !d.dates || !d.dates.length) return;
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
              '<label>' + tt("searchName") + '</label><input type="text" id="fxSName" value="' + esc2([criteria.city, criteria.type].filter(Boolean).join(" · ") || "My search") + '" />' +
              '<label style="display:flex;gap:8px;align-items:center;font-weight:500"><input type="checkbox" id="fxSNotify" checked style="width:auto" /> ' + tt("notify") + '</label>' +
              '<div class="fx-err" id="fxSErr"></div>' +
              '<div style="display:flex;gap:10px;margin-top:10px"><button type="submit" class="btn btn-spruce" style="flex:1">' + tt("saveSearch") + '</button>' +
              '<button type="button" class="btn btn-line" id="fxSCancel">' + tt("close") + '</button></div></form>');
            document.getElementById("fxSCancel").addEventListener("click", closeFx);
            document.getElementById("fxSearchForm").addEventListener("submit", function(e){
              e.preventDefault();
              api("/api/user/searches", "POST", { name: document.getElementById("fxSName").value, criteria: criteria, notify: document.getElementById("fxSNotify").checked, lang: lang() })
                .then(function(d){ if (d.search) mySearches.unshift(d.search); closeFx(); toast(tt("savedOk")); })
                .catch(function(){ document.getElementById("fxSErr").textContent = tt("errGeneric"); });
            });
          });
        }
        loadMe();
      } catch(e){}
    })();
