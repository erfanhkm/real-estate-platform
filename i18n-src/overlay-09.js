    /* ---------- Floating AI assistant + site search strings ---------- */
    var I18N9 = {
    en:{ai_title:"Real estate assistant",
      ai_sub:"Searches this site's listings, guides & tools",
      ai_close:"Close chat",ai_fab:"Ask AI",ai_privacy:"Your messages in this chat are processed by Google Gemini (AI) through our own chat service to generate answers. Please don't share sensitive personal details here.",
      sr_found:"{n} matching listing(s) on this page:",
      sr_none:"No listing matches that combination. Try a higher budget, fewer bedrooms, or another city — or use the {matchLink} to filter the listings by your criteria.",
      sr_intro:"Here's what I found on this site:"},
    fa:{ai_title:"دستیار هوشمند املاک",
      ai_sub:"فایل‌ها، راهنماها و ابزارهای همین سایت را جست‌وجو می‌کند",
      ai_close:"بستن گفت‌وگو",ai_fab:"از AI بپرس",ai_privacy:"پیام‌های شما در این گفت‌وگو برای تولید پاسخ، از طریق سرویس گفت‌وگوی خودمان توسط هوش مصنوعی Google Gemini پردازش می‌شود. لطفاً جزئیات حساس شخصی را اینجا به اشتراک نگذارید.",
      sr_found:"{n} فایل منطبق در همین صفحه:",
      sr_none:"هیچ فایلی با این ترکیب پیدا نشد. بودجه را بالاتر ببرید، تعداد خواب کمتر یا شهر دیگری را امتحان کنید — یا از {matchLink} استفاده کنید تا فایل‌ها را بر اساس معیارهایتان پالایه کند.",
      sr_intro:"این‌ها را در سایت پیدا کردم:"},
    hi:{ai_title:"रियल एस्टेट सहायक",
      ai_sub:"इस साइट की लिस्टिंग, मार्गदर्शिकाएँ और टूल खोजता है",
      ai_close:"चैट बंद करें",ai_fab:"AI से पूछें",ai_privacy:"इस चैट में आपके संदेश उत्तर बनाने के लिए हमारी अपनी चैट सेवा के माध्यम से Google Gemini (AI) द्वारा संसाधित किए जाते हैं। कृपया यहाँ संवेदनशील व्यक्तिगत विवरण साझा न करें।",
      sr_found:"इस पेज पर {n} मेल खाती लिस्टिंग:",
      sr_none:"इस संयोजन से कोई लिस्टिंग मेल नहीं खाती। बजट बढ़ाकर, कम बेडरूम या कोई अन्य शहर आज़माकर देखें — या अपने मानदंडों से लिस्टिंग फ़िल्टर करने के लिए {matchLink} का उपयोग करें।",
      sr_intro:"मुझे इस साइट पर यह मिला:"},
    zh:{ai_title:"房产智能助手",
      ai_sub:"搜索本站的房源、指南和工具",
      ai_close:"关闭聊天",ai_fab:"问 AI",ai_privacy:"您在本聊天中的消息会通过我们自己的聊天服务由 Google Gemini（AI）处理，以生成回复。请不要在此分享敏感的个人详细信息。",
      sr_found:"本页找到 {n} 套符合条件的房源:",
      sr_none:"没有符合该组合的房源。请尝试提高预算、减少卧室数或换一个城市——也可以使用{matchLink}按您的标准筛选房源。",
      sr_intro:"我在本网站上找到了这些："},
    es:{
     "ai_title": "Asistente inmobiliario",
     "ai_sub": "Busca en los anuncios, guías y herramientas de este sitio",
     "ai_close": "Cerrar el chat","ai_fab": "Preguntar a la IA", "ai_privacy": "Sus mensajes en este chat son procesados por Google Gemini (IA) a través de nuestro propio servicio de chat para generar respuestas. No comparta datos personales sensibles aquí.",
     "sr_found": "{n} propiedad(es) coincidente(s) en esta página:",
     "sr_none": "Ninguna propiedad coincide con esa combinación. Pruebe con un presupuesto mayor, menos dormitorios u otra ciudad — o use el {matchLink} para filtrar las propiedades según sus criterios.",
     "sr_intro": "Esto es lo que encontré en este sitio:"
    }
    };
    for (var L9 in I18N9) { if (I18N[L9]) { for (var k9 in I18N9[L9]) I18N[L9][k9] = I18N9[L9][k9]; } }
