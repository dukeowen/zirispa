/* ZIRI SPA — clickable design preview. All shop data here is sample data for layout only. */
(() => {
'use strict';

/* ------------------------------------------------------------------ line illustrations */
const ILL = {
  hammam: '<path d="M14 112V62c0-20 16-34 36-40 20 6 36 20 36 40v50"/><path d="M34 112V74c0-9 7-15 16-18 9 3 16 9 16 18v38"/><path d="M8 112h84"/><path d="M40 16c-3-4 3-7 0-11M50 14c-3-4 3-7 0-11M60 16c-3-4 3-7 0-11"/><circle cx="50" cy="40" r="2"/>',
  massage: '<ellipse cx="50" cy="98" rx="30" ry="9"/><ellipse cx="50" cy="80" rx="22" ry="8"/><ellipse cx="50" cy="64" rx="15" ry="6.5"/><path d="M50 57c0-14 8-24 20-28-1 14-8 24-20 28Z"/><path d="M50 57c4-10 10-17 20-28"/>',
  facial: '<path d="M50 14c-18 0-30 14-30 34 0 24 14 46 30 52 16-6 30-28 30-52 0-20-12-34-30-34Z"/><path d="M34 52c4-3 8-3 12 0M54 52c4-3 8-3 12 0M44 76c4 3 8 3 12 0"/><path d="M78 20c6 4 9 10 9 17"/>',
  wax: '<rect x="22" y="58" width="44" height="46" rx="6"/><path d="M22 70h44"/><path d="M58 18l20 36"/><rect x="66" y="12" width="9" height="34" rx="4.5" transform="rotate(-30 70 29)"/><path d="M44 58v-6c0-4 3-4 3-8"/>',
  nails: '<rect x="34" y="58" width="32" height="48" rx="7"/><path d="M40 58V44h20v14"/><rect x="44" y="12" width="12" height="32" rx="3"/><path d="M42 80h16"/>',
  hair: '<path d="M26 22v80M26 22h48v14H26"/><path d="M34 36v18M42 36v18M50 36v18M58 36v18M66 36v18"/><path d="M76 60c-14 10-6 24-18 34s-22 4-28 16"/>',
  boutique: '<path d="M28 44h44l-4 62H32z"/><path d="M38 44v-8a12 12 0 0 1 24 0v8"/>',
  soap: '<rect x="20" y="46" width="60" height="40" rx="12"/><path d="M50 56c-8 6-8 14 0 20 8-6 8-14 0-20Z"/><path d="M50 56v20"/><path d="M28 98h44"/>',
  oil: '<path d="M42 30h16v10l8 10v52H34V50l8-10z"/><rect x="44" y="14" width="12" height="16" rx="2"/><path d="M34 66h32M42 78c4 4 12 4 16 0"/>',
  clay: '<path d="M22 56h56v36a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10z"/><rect x="18" y="44" width="64" height="12" rx="4"/><path d="M38 76c6-6 18-6 24 0"/>',
  glove: '<path d="M34 104V58c0-6-10-14-10-22 0-6 6-8 10-2l6 10V24a5 5 0 0 1 10 0v20-26a5 5 0 0 1 10 0v26-20a5 5 0 0 1 10 0v54c0 12-6 20-10 26z"/><path d="M38 72h28M38 82h28M38 92h28"/>',
  mist: '<rect x="34" y="44" width="32" height="60" rx="10"/><path d="M40 44v-8h20v8"/><rect x="44" y="20" width="12" height="16" rx="2"/><path d="M62 26h10M72 20l8-4M72 32l8 4M74 26h10"/>',
  candle: '<path d="M26 60h48v34a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10z"/><path d="M50 60V48"/><path d="M50 46c-5-6-2-12 0-18 2 6 5 12 0 18Z"/><path d="M26 72h48"/>',
  polish: '<rect x="32" y="56" width="36" height="48" rx="9"/><rect x="42" y="16" width="16" height="40" rx="3"/><path d="M40 72c6 4 14 4 20 0"/>',
};
const ill = (k) => `<svg class="ill" viewBox="0 0 100 120" aria-hidden="true">${ILL[k] || ILL.boutique}</svg>`;
const icon = (id) => `<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;

/* ------------------------------------------------------------------ verified business info */
const BIZ = {
  wa: '97332090070',
  phone: '+973 3209 0070',
  phoneCS: '+973 1601 4567',
  insta: 'https://www.instagram.com/zirispa.bh/',
  maps: 'https://maps.app.goo.gl/2Dq9CxsKcSsnJ2aR7',
  mapEmbed: 'https://www.google.com/maps?q=ZIRI+SPA,+Road+5717,+Amwaj+Islands,+Bahrain&output=embed',
  hours: [0,1,2,3,4,5,6].map(d => ({ d, open: '10:00', close: '21:00' })),
};

/* ------------------------------------------------------------------ strings */
const T = {
  en: {
    nav_home:'Home', nav_treat:'Treatments', nav_shop:'Shop', nav_bag:'Bag', nav_acc:'Account', nav_story:'Our story', nav_gallery:'Gallery', nav_visit:'Visit',
    preview:'Preview', lang_btn:'ع',
    hero_l1:'A sanctuary', hero_l2:'of serenity.', explore:'Explore treatments', shopnow:'Shop now',
    film_note:'Temporary film · your spa footage goes here',
    intro:'A modern Moroccan spa and beauty salon on Amwaj Islands — hammam rituals, massage, facials, nails and hair under one quiet roof.',
    sculpt_cap:'Touch and turn the brass drop',
    treat_title:'Treatments', see_all:'See all', shop_title:'From the boutique',
    ritual_t:'The hammam, step by step', ritual_l:'How a traditional Moroccan hammam unfolds. Your exact ritual and timings go here.',
    rit:[['Warmth','Steam opens the skin and slows the breath.'],['Black soap','Olive-based beldi soap softens the skin.'],['Kessa scrub','A textured glove lifts away what the week left behind.'],['Rhassoul','Mineral clay from the Atlas, then a warm rinse.'],['Rest','Tea, quiet, and skin that feels new.']],
    gallery_t:'Inside ZIRI', gallery_l:'Your interior, treatment and product photos fill this wall.',
    slot_interior:'Interior photo', slot_room:'Treatment room', slot_video:'Vertical video', slot_product:'Product photo', slot_lounge:'Lounge',
    visit_t:'Visit us', open_now:'Open now', closed_now:'Closed now', today:'Today',
    days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    address:'Road 5717, Block 257, Amwaj Islands, Bahrain',
    directions:'Get directions', load_map:'Show map', call:'Call', whatsapp:'WhatsApp', instagram:'Instagram',
    confirm_tag:'to confirm', step_inside:'Step inside',
    footer_l:'Modern Moroccan spa & beauty salon, Amwaj Islands.', pay_accept:'Pay with',
    preview_foot:'Design preview — not the live website. Sample products and prices are for layout only.',
    treat_lede:'Book any treatment on WhatsApp. Prices appear once the spa adds its menu.',
    sample:'Sample', price_tba:'Price to be added', book_wa:'Book on WhatsApp', call_spa:'Call the spa',
    from_menu:'From the spa menu', duration_tba:'Duration to be added',
    wa_msg:'Hello ZIRI SPA, I would like to book: ',
    shop_lede:'Sample products to show the layout. The spa’s own products, photos and prices go here.',
    search:'Search products', sort_feat:'Featured', sort_low:'Price: low to high', sort_high:'Price: high to low',
    all:'All', added:'Added to your bag', add_bag:'Add to bag', size:'Size', qty:'Quantity',
    details:'Details', delivery_info:'Delivery & pickup', delivery_text:'Delivery across Bahrain or pickup at the spa. Fees and areas are set by the spa.',
    ingredients_text:'Ingredients and specifications are added by the spa for each product.',
    you_may:'You may also like', in_stock:'In stock', low_stock:'Only a few left',
    bag_t:'Your bag', bag_empty:'Your bag is empty', bag_empty_l:'Browse the boutique and add something you love.', browse:'Browse the shop',
    subtotal:'Subtotal', delivery:'Delivery', discount:'Discount', total:'Total', code:'Discount code', apply:'Apply', checkout:'Checkout', remove:'Remove',
    code_ok:'Code ZIRI10 applied: 10% off', code_bad:'Try the sample code ZIRI10',
    co_t:'Checkout', co_contact:'Your details', name:'Full name', mobile:'Mobile number', email:'Email (for your receipt)',
    co_how:'Delivery or pickup', deliver:'Delivery', pickup:'Pickup at the spa', area:'Area', block:'Block', road:'Road', building:'Building / house', flat:'Flat (optional)', notes:'Notes for the driver (optional)',
    pickup_note:'Collect from reception on Amwaj Islands during opening hours.',
    co_pay:'Payment', pm_benefitpay:'BenefitPay', pm_card:'Credit or debit card', pm_benefit:'BENEFIT debit card',
    pm_bp_l:'Scan or open the BenefitPay app', pm_card_l:'Visa or Mastercard', pm_benefit_l:'Bahraini debit card',
    pay:'Pay', secure:'Payments are processed by Tap Payments. Card details never touch the spa’s website.',
    preview_pay:'Preview only — no payment is taken and no order is placed.',
    areas:['Amwaj Islands','Muharraq','Manama','Seef','Juffair','Riffa','Saar','Hamad Town','Isa Town','Other'],
    bp_t:'Pay with BenefitPay', bp_l:'Scan the code with your BenefitPay app, or tap below on this phone.', bp_open:'Open BenefitPay', bp_wait:'Waiting for confirmation…', sim:'Simulate a successful payment',
    card_t:'Secure card payment', card_l:'You would now see Tap’s secure payment page for Visa or Mastercard.',
    done_t:'Thank you', done_l:'Your order is confirmed. A receipt has been sent to your email and WhatsApp.', order_no:'Order', keep:'Continue shopping',
    story_l:'ZIRI is a modern Moroccan spa and beauty salon on Amwaj Islands. At its heart is the hammam — warmth, steam and slow care — surrounded by the beauty services guests rely on every week.',
    story_owner:'The owner’s own words — how ZIRI began, what it stands for — go here.',
    contact_t:'Send a message', message:'Message', send:'Send message', sent:'In the live site, this goes straight to the spa’s inbox.',
    acc_t:'Your account', signin:'Sign in', password:'Password', create:'Create an account', guest_note:'No account needed to order — guest checkout is always available.',
    acc_feats:['Order history and status','Saved addresses','Wishlist'],
    owner_btn:'Preview the owner dashboard', signed:'In the live site, this signs you in.',
    adm_t:'Good evening', adm_l:'Your shop at a glance — managed from your phone.', sample_data:'Sample data for the preview',
    k_sales:'Sales this week', k_orders:'New orders', k_stock:'Low stock', k_visits:'Visitors today',
    adm_orders:'Latest orders', st_paid:'Paid', st_ship:'To deliver', st_pick:'Ready for pickup',
    adm_add:'Add a product', adm_photo:'Tap to add photos or video', adm_pname:'Product name', adm_price:'Price (BHD)', adm_stock:'Stock', adm_publish:'Publish',
    adm_home:'Homepage film', adm_home_l:'Replace the hero video with a new vertical clip.', adm_replace:'Upload new video',
    adm_inv:'Inventory', adm_visible:'Visible in shop', adm_saved:'In the live dashboard, this saves instantly.',
    adm_menu:'Treatments & prices', adm_menu_l:'Edit names, durations and prices in English and Arabic.',
    adm_hours:'Opening hours', adm_pay:'Payments', adm_pay_l:'Visa, Mastercard, BENEFIT and BenefitPay via Tap Payments.',
    back_site:'Back to the website', bhd:'BHD',
  },
  ar: {
    nav_home:'الرئيسية', nav_treat:'العلاجات', nav_shop:'المتجر', nav_bag:'الحقيبة', nav_acc:'حسابي', nav_story:'حكايتنا', nav_gallery:'المعرض', nav_visit:'زورونا',
    preview:'معاينة', lang_btn:'EN',
    hero_l1:'ملاذٌ', hero_l2:'للصفاء.', explore:'اكتشفي العلاجات', shopnow:'تسوّقي الآن',
    film_note:'فيلم مؤقت · هنا تُعرض لقطات السبا',
    intro:'سبا وصالون تجميل بروحٍ مغربية عصرية في جزر أمواج — الحمّام المغربي، والمساج، والعناية بالبشرة، والأظافر، والشعر تحت سقفٍ واحد هادئ.',
    sculpt_cap:'المسي القطرة النحاسية وأديريها',
    treat_title:'العلاجات', see_all:'عرض الكل', shop_title:'من البوتيك',
    ritual_t:'الحمّام المغربي خطوةً بخطوة', ritual_l:'هكذا يجري الحمّام المغربي التقليدي. تُضاف هنا تفاصيل طقس زيري وتوقيتاته.',
    rit:[['الدفء','البخار يفتح المسام ويُبطئ الأنفاس.'],['الصابون البلدي','صابون أسود بزيت الزيتون يليّن البشرة.'],['الكيس','قفاز التقشير يزيل تعب الأسبوع.'],['الغاسول','طين معدني من جبال الأطلس، ثم شطفٌ دافئ.'],['الاسترخاء','شاي، وهدوء، وبشرة كأنها جديدة.']],
    gallery_t:'داخل زيري', gallery_l:'هنا تُعرض صور السبا وغرف العلاج والمنتجات.',
    slot_interior:'صورة من الداخل', slot_room:'غرفة العلاج', slot_video:'فيديو عمودي', slot_product:'صورة منتج', slot_lounge:'الاستراحة',
    visit_t:'زورونا', open_now:'مفتوح الآن', closed_now:'مغلق الآن', today:'اليوم',
    days:['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
    address:'طريق 5717، مجمع 257، جزر أمواج، البحرين',
    directions:'الاتجاهات', load_map:'عرض الخريطة', call:'اتصال', whatsapp:'واتساب', instagram:'إنستغرام',
    confirm_tag:'بانتظار التأكيد', step_inside:'تفضّلي بالدخول',
    footer_l:'سبا وصالون تجميل مغربي عصري، جزر أمواج.', pay_accept:'ادفعي عبر',
    preview_foot:'معاينة للتصميم — ليست الموقع الفعلي. المنتجات والأسعار أمثلة لعرض التصميم فقط.',
    treat_lede:'احجزي أي علاج عبر واتساب. تظهر الأسعار بعد أن يضيف السبا قائمته.',
    sample:'مثال', price_tba:'السعر يُضاف لاحقًا', book_wa:'احجزي عبر واتساب', call_spa:'اتصلي بالسبا',
    from_menu:'من قائمة السبا', duration_tba:'المدة تُضاف لاحقًا',
    wa_msg:'مرحبًا زيري سبا، أودّ حجز: ',
    shop_lede:'منتجات تجريبية لعرض التصميم. هنا تظهر منتجات السبا وصورها وأسعارها.',
    search:'ابحثي عن منتج', sort_feat:'المميّز', sort_low:'السعر: من الأقل', sort_high:'السعر: من الأعلى',
    all:'الكل', added:'أُضيف إلى حقيبتك', add_bag:'أضيفي إلى الحقيبة', size:'الحجم', qty:'الكمية',
    details:'التفاصيل', delivery_info:'التوصيل والاستلام', delivery_text:'توصيل في أنحاء البحرين أو استلام من السبا. يحدد السبا المناطق والرسوم.',
    ingredients_text:'يضيف السبا المكوّنات والمواصفات لكل منتج.',
    you_may:'قد يعجبكِ أيضًا', in_stock:'متوفر', low_stock:'الكمية محدودة',
    bag_t:'حقيبتكِ', bag_empty:'حقيبتكِ فارغة', bag_empty_l:'تصفّحي البوتيك وأضيفي ما يعجبكِ.', browse:'تصفّحي المتجر',
    subtotal:'المجموع الفرعي', delivery:'التوصيل', discount:'الخصم', total:'الإجمالي', code:'رمز الخصم', apply:'تطبيق', checkout:'إتمام الطلب', remove:'إزالة',
    code_ok:'تم تطبيق الرمز ZIRI10: خصم 10٪', code_bad:'جرّبي الرمز التجريبي ZIRI10',
    co_t:'إتمام الطلب', co_contact:'بياناتكِ', name:'الاسم الكامل', mobile:'رقم الجوال', email:'البريد الإلكتروني (للإيصال)',
    co_how:'التوصيل أو الاستلام', deliver:'توصيل', pickup:'استلام من السبا', area:'المنطقة', block:'المجمع', road:'الطريق', building:'المبنى / المنزل', flat:'الشقة (اختياري)', notes:'ملاحظات للسائق (اختياري)',
    pickup_note:'الاستلام من الاستقبال في جزر أمواج خلال ساعات العمل.',
    co_pay:'الدفع', pm_benefitpay:'بنفت باي', pm_card:'بطاقة ائتمان أو خصم', pm_benefit:'بطاقة بنفت',
    pm_bp_l:'امسحي الرمز أو افتحي تطبيق بنفت باي', pm_card_l:'فيزا أو ماستركارد', pm_benefit_l:'بطاقة خصم بحرينية',
    pay:'ادفعي', secure:'تتم معالجة المدفوعات عبر Tap Payments، ولا تمرّ بيانات البطاقة عبر موقع السبا.',
    preview_pay:'معاينة فقط — لن يتم أي دفع ولن يُسجَّل أي طلب.',
    areas:['جزر أمواج','المحرق','المنامة','السيف','الجفير','الرفاع','سار','مدينة حمد','مدينة عيسى','أخرى'],
    bp_t:'الدفع عبر بنفت باي', bp_l:'امسحي الرمز بتطبيق بنفت باي، أو اضغطي أدناه من هذا الجوال.', bp_open:'افتحي بنفت باي', bp_wait:'بانتظار التأكيد…', sim:'محاكاة دفعٍ ناجح',
    card_t:'دفع آمن بالبطاقة', card_l:'هنا ستظهر صفحة الدفع الآمنة من Tap لبطاقات فيزا وماستركارد.',
    done_t:'شكرًا لكِ', done_l:'تم تأكيد طلبكِ، وأُرسل الإيصال إلى بريدكِ وواتساب.', order_no:'رقم الطلب', keep:'متابعة التسوّق',
    story_l:'زيري سبا وصالون تجميل بروحٍ مغربية عصرية في جزر أمواج. في قلبه الحمّام المغربي — الدفء والبخار والعناية المتأنية — وحوله خدمات الجمال التي تعتمد عليها الضيفات كل أسبوع.',
    story_owner:'هنا تُكتب كلمات المالكة — كيف بدأت زيري وما الذي تمثّله.',
    contact_t:'أرسلي رسالة', message:'الرسالة', send:'إرسال', sent:'في الموقع الفعلي تصل هذه الرسالة مباشرةً إلى بريد السبا.',
    acc_t:'حسابكِ', signin:'تسجيل الدخول', password:'كلمة المرور', create:'إنشاء حساب', guest_note:'لا حاجة لحساب للطلب — الشراء كضيفة متاح دائمًا.',
    acc_feats:['سجل الطلبات وحالتها','العناوين المحفوظة','قائمة الأمنيات'],
    owner_btn:'معاينة لوحة تحكم المالكة', signed:'في الموقع الفعلي يتم تسجيل دخولكِ هنا.',
    adm_t:'مساء الخير', adm_l:'متجركِ في لمحة — تديرينه من جوالكِ.', sample_data:'بيانات تجريبية للمعاينة',
    k_sales:'مبيعات الأسبوع', k_orders:'طلبات جديدة', k_stock:'مخزون منخفض', k_visits:'زوار اليوم',
    adm_orders:'أحدث الطلبات', st_paid:'مدفوع', st_ship:'للتوصيل', st_pick:'جاهز للاستلام',
    adm_add:'إضافة منتج', adm_photo:'اضغطي لإضافة صور أو فيديو', adm_pname:'اسم المنتج', adm_price:'السعر (د.ب)', adm_stock:'المخزون', adm_publish:'نشر',
    adm_home:'فيلم الصفحة الرئيسية', adm_home_l:'استبدلي فيديو الواجهة بمقطع عمودي جديد.', adm_replace:'رفع فيديو جديد',
    adm_inv:'المخزون', adm_visible:'ظاهر في المتجر', adm_saved:'في اللوحة الفعلية يُحفظ هذا فورًا.',
    adm_menu:'العلاجات والأسعار', adm_menu_l:'عدّلي الأسماء والمدد والأسعار بالعربية والإنجليزية.',
    adm_hours:'ساعات العمل', adm_pay:'المدفوعات', adm_pay_l:'فيزا وماستركارد وبنفت وبنفت باي عبر Tap Payments.',
    back_site:'العودة إلى الموقع', bhd:'د.ب',
  },
};

/* ------------------------------------------------------------------ treatments (categories verified from Instagram) */
const CATS = [
  { k:'hammam', en:'Moroccan hammam', ar:'الحمّام المغربي', l_en:'Steam, black soap, kessa and rhassoul.', l_ar:'بخار، وصابون بلدي، وكيس، وغاسول.', tone:'green',
    items:[{en:'Moroccan hammam',ar:'الحمّام المغربي'},{en:'Hammam, massage & blow-dry',ar:'حمّام ومساج وتصفيف',note_en:'Offered as a 30 BHD package in Dec 2024',note_ar:'قُدّمت كباقة بـ30 د.ب في ديسمبر 2024'}] },
  { k:'massage', en:'Massage', ar:'المساج', l_en:'To ease tension and slow down.', l_ar:'لتخفيف التوتر والاسترخاء.', items:[{en:'Relaxing massage',ar:'مساج الاسترخاء'},{en:'Deep tissue massage',ar:'مساج الأنسجة العميقة'}] },
  { k:'facial', en:'Facial', ar:'العناية بالبشرة', l_en:'Cleansing, glow and calm skin.', l_ar:'تنظيف وإشراقة وتهدئة.', tone:'sand', items:[{en:'Signature facial',ar:'جلسة العناية المميزة'},{en:'Hydrating facial',ar:'جلسة الترطيب'}] },
  { k:'wax', en:'Body wax', ar:'إزالة الشعر بالشمع', l_en:'Smooth, careful, quick.', l_ar:'نعومة وعناية وسرعة.', items:[{en:'Full legs',ar:'الساقان كاملتان'},{en:'Full body',ar:'الجسم كاملًا'}] },
  { k:'nails', en:'Nails', ar:'الأظافر', l_en:'Manicure, pedicure and colour.', l_ar:'مانيكير وباديكير وألوان.', tone:'sand', items:[{en:'Manicure',ar:'مانيكير'},{en:'Spa pedicure',ar:'باديكير السبا'}] },
  { k:'hair', en:'Hair', ar:'الشعر', l_en:'Blow-dry, styling and care.', l_ar:'تصفيف وتسريح وعناية.', items:[{en:'Blow-dry',ar:'تصفيف بالسشوار'},{en:'Hair treatment',ar:'علاج الشعر'}] },
];

/* ------------------------------------------------------------------ sample products (layout only) */
const PCATS = [{k:'bath',en:'Bath & hammam',ar:'الحمّام'},{k:'skin',en:'Skin',ar:'البشرة'},{k:'nails',en:'Nails',ar:'الأظافر'},{k:'home',en:'Home',ar:'المنزل'}];
const P = [
  { id:'black-soap', c:'bath', il:'soap', en:'Moroccan black soap', ar:'الصابون المغربي الأسود', v:[['250 g','250 غ',6500],['500 g','500 غ',11000]], stock:14, tone:'',
    d_en:'Olive-based beldi soap, the first step of every hammam. Softens skin before the kessa scrub.', d_ar:'صابون بلدي بزيت الزيتون، أول خطوة في كل حمّام. يليّن البشرة قبل التقشير بالكيس.' },
  { id:'argan-oil', c:'skin', il:'oil', en:'Pure argan oil', ar:'زيت الأركان الخالص', v:[['50 ml','50 مل',9500],['100 ml','100 مل',16000]], stock:3, tone:'sand',
    d_en:'Cold-pressed argan oil for face, body and hair.', d_ar:'زيت أركان معصور على البارد للوجه والجسم والشعر.' },
  { id:'rhassoul', c:'bath', il:'clay', en:'Rhassoul clay mask', ar:'قناع طين الغاسول', v:[['200 g','200 غ',7500]], stock:9, tone:'green',
    d_en:'Mineral clay to cleanse and soften, used after the scrub.', d_ar:'طين معدني ينظّف ويليّن، يُستخدم بعد التقشير.' },
  { id:'kessa', c:'bath', il:'glove', en:'Kessa exfoliating glove', ar:'قفاز الكيس للتقشير', v:[['One size','مقاس واحد',3500]], stock:20, tone:'sand',
    d_en:'The textured glove of the traditional hammam scrub.', d_ar:'القفاز التقليدي لتقشير الحمّام المغربي.' },
  { id:'rose-mist', c:'skin', il:'mist', en:'Rose water face mist', ar:'رذاذ ماء الورد', v:[['100 ml','100 مل',5500]], stock:11, tone:'',
    d_en:'A light mist to refresh skin through the day.', d_ar:'رذاذ خفيف ينعش البشرة طوال اليوم.' },
  { id:'body-oil', c:'skin', il:'oil', en:'Orange blossom body oil', ar:'زيت الجسم بزهر البرتقال', v:[['100 ml','100 مل',12500]], stock:6, tone:'green',
    d_en:'A silky body oil with the scent of orange blossom.', d_ar:'زيت حريري للجسم بعبير زهر البرتقال.' },
  { id:'polish', c:'nails', il:'polish', en:'Nail colour', ar:'طلاء الأظافر', v:[['Sand','رملي',4000],['Mocha','موكا',4000],['Zellige','زليج',4000]], stock:30, tone:'sand',
    d_en:'Long-wear colour in shades chosen at the spa.', d_ar:'ألوان تدوم طويلًا بدرجات مختارة في السبا.' },
  { id:'candle', c:'home', il:'candle', en:'Amber & oud candle', ar:'شمعة العنبر والعود', v:[['220 g','220 غ',14000]], stock:5, tone:'',
    d_en:'The scent of the spa, for home.', d_ar:'عبير السبا، لمنزلكِ.' },
];

/* ------------------------------------------------------------------ state */
const store = {
  get(k, d) { try { return JSON.parse(sessionStorage.getItem('zs_'+k)) ?? d; } catch { return d; } },
  set(k, v) { try { sessionStorage.setItem('zs_'+k, JSON.stringify(v)); } catch {} },
};
let lang = store.get('lang', (navigator.language||'').startsWith('ar') ? 'ar' : 'en');
let bag = store.get('bag', []);       // [{id, vi, qty}]
let promo = store.get('promo', false);
const t = (k) => T[lang][k] ?? T.en[k] ?? k;
const L = (o, base) => o[base ? base + '_' + lang : lang] ?? o[base ? base + '_en' : 'en'];
const money = (fils) => {
  const n = (fils/1000).toFixed(3);
  return lang === 'ar' ? `${n} د.ب` : `BHD ${n}`;
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = (txt) => `https://wa.me/${BIZ.wa}?text=${encodeURIComponent(txt)}`;
const productById = (id) => P.find(p => p.id === id);

/* ------------------------------------------------------------------ chrome */
function chrome(route) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('#lang').textContent = t('lang_btn');
  $('#lang').setAttribute('aria-label', lang === 'ar' ? 'English' : 'العربية');
  $('#pill').textContent = t('preview');
  const tabs = [['','home','nav_home'],['treatments','arch','nav_treat'],['shop','shop','nav_shop'],['bag','bag','nav_bag'],['account','user','nav_acc']];
  const base = route.split('/')[0];
  const active = { '':'', treatment:'treatments', treatments:'treatments', shop:'shop', product:'shop', bag:'bag', checkout:'bag', pay:'bag', done:'bag', account:'account', owner:'account' }[base] ?? '';
  $('#tabs').innerHTML = tabs.map(([r, ic, k]) =>
    `<a href="#/${r}" class="${active === r ? 'on' : ''}" ${active===r?'aria-current="page"':''}>${icon(ic)}<span>${t(k)}</span>${r==='bag'?'<span class="badge" data-count>0</span>':''}</a>`).join('');
  $('#desk-nav').innerHTML = [['treatments','nav_treat'],['shop','nav_shop'],['story','nav_story'],['gallery','nav_gallery'],['visit','nav_visit']]
    .map(([r,k]) => `<a href="#/${r}">${t(k)}</a>`).join('');
  $('#wa').href = waLink(lang === 'ar' ? 'مرحبًا زيري سبا' : 'Hello ZIRI SPA');
  updateCount();
}
function updateCount(bump) {
  const n = bag.reduce((a, b) => a + b.qty, 0);
  $$('[data-count]').forEach(el => {
    el.textContent = n; el.classList.toggle('show', n > 0);
    if (bump) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  });
}
let toastTimer;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}
function addToBag(id, vi = 0, qty = 1) {
  const line = bag.find(l => l.id === id && l.vi === vi);
  if (line) line.qty += qty; else bag.push({ id, vi, qty });
  store.set('bag', bag); updateCount(true); toast(t('added'));
}

/* ------------------------------------------------------------------ components */
const art = (k, tone = '', extra = '', label = '') =>
  `<div class="art ${tone} ${extra}">${ill(k)}${label ? `<span class="slot-label">${label}</span>` : ''}</div>`;

function productCard(p) {
  const v = p.v[0];
  return `<div class="p-card">
    <a href="#/product/${p.id}" style="text-decoration:none;display:block">
      <span class="tag">${t('sample')}</span>
      ${art(p.il, p.tone)}
      <div class="meta"><p class="name">${L(p)}</p><div class="price">${money(v[2])}</div></div>
    </a>
    <button class="add" data-add="${p.id}" aria-label="${t('add_bag')}: ${L(p)}">${icon('plus')}</button>
  </div>`;
}
function hoursTable() {
  const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Bahrain' })).getDay();
  return `<table class="hours"><tbody>${BIZ.hours.map(h => `<tr class="${h.d===today?'today':''}"><td>${T[lang].days[h.d]}</td><td dir="ltr">${h.open} – ${h.close}</td></tr>`).join('')}</tbody></table>`;
}
function openNow() {
  const n = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Bahrain' }));
  const m = n.getHours()*60 + n.getMinutes();
  return m >= 600 && m < 1260;
}
function visitBlock() {
  return `<div class="visit">
    <div>
      <h2 class="h-l">${t('visit_t')}</h2>
      <p class="muted" style="margin:12px 0 4px">${t('address')}</p>
      <p class="small" style="margin:0 0 18px;color:${openNow()?'var(--zellige)':'var(--ink-2)'}">● ${openNow()?t('open_now'):t('closed_now')}</p>
      ${hoursTable()}
      <p class="unverified" style="margin-top:8px">${lang==='ar'?'الساعات من دليل Fresha — ':'Hours from the Fresha listing — '}${t('confirm_tag')}</p>
    </div>
    <div>
      <a class="map-wrap" href="${BIZ.maps}" target="_blank" rel="noopener" style="display:block"><div class="map-load" style="position:static;aspect-ratio:4/3">${mapArt()}<span class="btn light" style="position:absolute">${icon('pin')} ${t('directions')}</span></div></a>
      <div class="contact-list" style="margin-top:12px">
        <a href="${BIZ.maps}" target="_blank" rel="noopener">${icon('pin')} ${t('directions')}</a>
        <a href="${waLink(lang==='ar'?'مرحبًا زيري سبا':'Hello ZIRI SPA')}" target="_blank" rel="noopener">${icon('wa')} ${t('whatsapp')} <span dir="ltr" class="muted small" style="margin-inline-start:auto">${BIZ.phone}</span></a>
        <a href="tel:${BIZ.phone.replace(/\s/g,'')}">${icon('phone')} ${t('call')} <span dir="ltr" class="muted small" style="margin-inline-start:auto">${BIZ.phone}</span></a>
        <a href="${BIZ.insta}" target="_blank" rel="noopener">${icon('insta')} ${t('instagram')} <span dir="ltr" class="muted small" style="margin-inline-start:auto">@zirispa.bh</span></a>
      </div>
    </div>
  </div>`;
}
const mapArt = () => `<svg viewBox="0 0 400 300" style="width:100%;height:100%;border-radius:4px" aria-hidden="true"><rect width="400" height="300" fill="#dfe6e2"/><path d="M0 210 C80 190 120 230 200 205 S330 170 400 190 V300 H0Z" fill="#cfd9d3"/><path d="M60 40h280v170H60z" fill="#efe9df"/><path d="M60 125h280M200 40v170M120 40v170M280 40v170" stroke="#fff" stroke-width="6"/><path d="M60 85h280M60 170h280" stroke="#fff" stroke-width="3"/><circle cx="214" cy="112" r="16" fill="#1F4A40"/><circle cx="214" cy="112" r="6" fill="#F6F2EC"/><text x="236" y="98" font-family="Jost,sans-serif" font-size="13" fill="#2B1F1A">ZIRI SPA</text><text x="70" y="275" font-family="Jost,sans-serif" font-size="11" fill="#5d7a70">Amwaj Islands</text></svg>`;
const payLogos = () => `<span class="logo-chip bp">BenefitPay</span><span class="logo-chip visa">VISA</span><span class="logo-chip"><svg viewBox="0 0 38 24"><circle cx="14" cy="12" r="8" fill="#eb001b"/><circle cx="24" cy="12" r="8" fill="#f79e1b" fill-opacity=".9"/></svg></span><span class="logo-chip">BENEFIT</span>`;
function footer() {
  return `<footer class="site">
    <span class="wordmark"><b>ZIRI</b> <span>SPA</span></span>
    <p style="margin:0;max-width:36ch">${t('footer_l')}</p>
    <nav>${[['treatments','nav_treat'],['shop','nav_shop'],['story','nav_story'],['gallery','nav_gallery'],['visit','nav_visit'],['account','nav_acc']].map(([r,k])=>`<a href="#/${r}">${t(k)}</a>`).join('')}</nav>
    <div class="small">${t('pay_accept')}</div><div class="pay-row">${payLogos()}</div>
    <p class="small" style="margin-top:26px;opacity:.75">${t('preview_foot')}</p>
  </footer>`;
}

/* ------------------------------------------------------------------ views */
const views = {};

views[''] = () => `
  <section class="hero" id="hero">
    <div class="hero-frame" id="hero-frame">
      <video autoplay muted loop playsinline preload="auto" poster="media/ambient-poster.jpg"><source src="media/ambient.mp4" type="video/mp4"></video>
    </div>
    <span class="film-note">${t('film_note')}</span>
    <div class="hero-copy" id="hero-copy">
      <div class="hero-mark" dir="ltr"><b>ZIRI</b> <span>SPA</span></div>
      <h1 class="h-xl"><span class="ln"><span>${t('hero_l1')}</span></span><span class="ln"><span>${t('hero_l2')}</span></span></h1>
      <div class="hero-ctas">
        <a class="btn light" href="#/treatments">${t('explore')}</a>
        <a class="btn ghost" href="#/shop" style="color:var(--paper)">${t('shopnow')}</a>
      </div>
    </div>
    <div class="scroll-cue" aria-hidden="true"></div>
    <div id="step-inside" style="position:absolute;z-index:2;bottom:calc(var(--tab-h) + var(--safe-b) + 2px);inset-inline:0;text-align:center;opacity:0;font-family:var(--display);font-size:26px">${t('step_inside')}</div>
  </section>

  <section class="intro"><p>${t('intro')}</p></section>
  <figure class="sculpt" style="margin-top:0">
    <div class="arch-bg arch"></div>
    <canvas id="sculpt" aria-label="3D brass drop sculpture"></canvas>
    <figcaption>${t('sculpt_cap')}</figcaption>
  </figure>

  <section class="section" style="padding-bottom:20px">
    <div class="row-head"><h2 class="h-l">${t('treat_title')}</h2><a href="#/treatments">${t('see_all')}</a></div>
    <div class="rail">${CATS.map(c => `<a class="t-card" href="#/treatment/${c.k}">${art(c.k, c.tone, 'arch')}<h3>${L(c)}</h3><p>${L(c,'l')}</p></a>`).join('')}</div>
  </section>

  <section class="section" style="padding-bottom:0">
    <div class="row-head"><h2 class="h-l">${t('shop_title')}</h2><a href="#/shop">${t('see_all')}</a></div>
    <div class="rail">${P.slice(0,6).map(productCard).join('')}</div>
  </section>

  <section class="ritual">
    <div class="wrap">
      <h2 class="h-l">${t('ritual_t')}</h2>
      <p class="muted" style="margin:12px 0 0;max-width:40ch">${t('ritual_l')}</p>
      <ol>${T[lang].rit.map(([a,b]) => `<li><div><b>${a}</b><span>${b}</span></div></li>`).join('')}</ol>
      <a class="btn brass" style="margin-top:22px" href="${waLink(t('wa_msg') + L(CATS[0]))}" target="_blank" rel="noopener">${icon('wa')} ${t('book_wa')}</a>
    </div>
  </section>

  <section class="section">
    <div class="row-head"><div><h2 class="h-l">${t('gallery_t')}</h2><p class="muted" style="margin:8px 0 0">${t('gallery_l')}</p></div></div>
    ${mosaic()}
  </section>

  <section class="section" style="padding-top:0"><div class="wrap">${visitBlock()}</div></section>
  ${footer()}`;

function mosaic() {
  return `<div class="mosaic">
    ${art('hammam','green','tall',t('slot_video'))}
    ${art('massage','','',t('slot_room'))}
    ${art('boutique','sand','',t('slot_lounge'))}
    ${art('facial','sand','wide',t('slot_interior'))}
    ${art('nails','','',t('slot_product'))}
    ${art('hair','green','',t('slot_interior'))}
  </div>`;
}

views.treatments = () => `
  <div class="page-head"><h1 class="h-l">${t('treat_title')}</h1><p class="muted">${t('treat_lede')}</p></div>
  <div class="chips" style="margin-top:14px">${CATS.map(c => `<a class="chip" href="#/treatment/${c.k}" style="text-decoration:none">${L(c)}</a>`).join('')}</div>
  ${CATS.map(c => `<section class="cat-block">
    <a class="cat-head" href="#/treatment/${c.k}" style="text-decoration:none">${art(c.k, c.tone, 'arch')}<div><h2 class="h-m">${L(c)}</h2><p class="muted" style="margin:4px 0 0">${L(c,'l')}</p></div></a>
    ${c.items.map(i => treatRow(c, i)).join('')}
  </section>`).join('')}
  <div style="height:40px"></div>${footer()}`;

function treatRow(c, i) {
  return `<a class="t-row" href="${waLink(t('wa_msg') + L(i))}" target="_blank" rel="noopener">
    <span><b>${L(i)}</b><span class="small muted">${i.note_en ? L(i,'note') : t('duration_tba')}</span></span>
    <span class="r">${t('price_tba')}<br><span style="color:var(--zellige)">${t('book_wa')}</span></span></a>`;
}

views.treatment = (k) => {
  const c = CATS.find(x => x.k === k) || CATS[0];
  return `<div class="detail-split">
    <div class="detail-hero">${art(c.k, c.tone, 'arch')}</div>
    <div class="detail-body">
      <a href="#/treatments" class="small muted" style="text-decoration:none">${t('nav_treat')}</a>
      <h1 class="h-l">${L(c)}</h1>
      <p class="lede">${L(c,'l')}</p>
      <div style="margin:18px 0">${c.items.map(i => treatRow(c, i)).join('')}</div>
      <div style="display:grid;gap:10px">
        <a class="btn primary block" href="${waLink(t('wa_msg') + L(c))}" target="_blank" rel="noopener">${icon('wa')} ${t('book_wa')}</a>
        <a class="btn ghost block" href="tel:${BIZ.phone.replace(/\s/g,'')}">${icon('phone')} ${t('call_spa')}</a>
      </div>
      <p class="small muted" style="margin-top:16px">${t('treat_lede')}</p>
    </div></div>${footer()}`;
};

let shopState = { cat: 'all', q: '', sort: 'feat' };
views.shop = () => `
  <div class="page-head"><h1 class="h-l">${t('nav_shop')}</h1><p class="muted">${t('shop_lede')}</p></div>
  <div class="search" style="margin-top:16px">
    <input class="input" id="q" type="search" placeholder="${t('search')}" value="${shopState.q}" aria-label="${t('search')}">
    <select class="input" id="sort" style="width:auto" aria-label="Sort">
      ${['feat','low','high'].map(s => `<option value="${s}" ${shopState.sort===s?'selected':''}>${t('sort_'+s)}</option>`).join('')}
    </select>
  </div>
  <div class="chips">${[{k:'all',en:t('all'),ar:t('all')}, ...PCATS].map(c => `<button class="chip ${shopState.cat===c.k?'on':''}" data-cat="${c.k}">${L(c)}</button>`).join('')}</div>
  <div class="grid-p" id="grid"></div>
  <div style="height:56px"></div>${footer()}`;

function renderGrid() {
  let list = P.filter(p => (shopState.cat === 'all' || p.c === shopState.cat) &&
    (!shopState.q || (p.en + ' ' + p.ar).toLowerCase().includes(shopState.q.toLowerCase())));
  if (shopState.sort === 'low') list = [...list].sort((a,b) => a.v[0][2]-b.v[0][2]);
  if (shopState.sort === 'high') list = [...list].sort((a,b) => b.v[0][2]-a.v[0][2]);
  $('#grid').innerHTML = list.length ? list.map(productCard).join('') : `<p class="muted" style="grid-column:1/-1">—</p>`;
}

let pdp = { vi: 0, qty: 1 };
views.product = (id) => {
  const p = productById(id) || P[0]; pdp = { vi: 0, qty: 1 };
  const tones = [p.tone, p.tone === 'sand' ? '' : 'sand', 'green'];
  return `<div class="detail-split has-sticky">
    <div class="detail-hero">
      <div class="gallery-swipe" id="gs">${tones.map(tn => art(p.il, tn, '', t('slot_product'))).join('')}</div>
      <div class="dots" id="dots">${tones.map((_, i) => `<i class="${i?'':'on'}"></i>`).join('')}</div>
    </div>
    <div class="detail-body" style="padding-top:4px">
      <span class="tag">${t('sample')}</span>
      <h1 class="h-l">${L(p)}</h1>
      <div class="price" id="pprice" style="font-size:20px">${money(p.v[0][2])}</div>
      <p class="small" style="color:${p.stock<5?'#8a6a35':'var(--zellige)'};margin:6px 0 0">● ${p.stock<5?t('low_stock'):t('in_stock')}</p>
      <p style="margin:18px 0 0">${L(p,'d')}</p>
      ${p.v.length > 1 ? `<div class="step-t">${p.c==='nails'?(lang==='ar'?'اللون':'Shade'):t('size')}</div><div class="variant-row">${p.v.map((v,i) => `<button class="chip ${i?'':'on'}" data-vi="${i}">${lang==='ar'?v[1]:v[0]}</button>`).join('')}</div>` : `<p class="small muted" style="margin-top:14px">${lang==='ar'?p.v[0][1]:p.v[0][0]}</p>`}
      <div class="step-t">${t('qty')}</div>
      <div class="qty"><button data-q="-1" aria-label="-">−</button><span id="qn">1</span><button data-q="1" aria-label="+">+</button></div>
      <div style="margin-top:22px">
        <details class="acc" open><summary>${t('details')}</summary><p class="muted">${t('ingredients_text')}</p></details>
        <details class="acc"><summary>${t('delivery_info')}</summary><p class="muted">${t('delivery_text')}</p></details>
      </div>
    </div>
  </div>
  <section class="section" style="padding-top:20px"><div class="row-head"><h2 class="h-m">${t('you_may')}</h2></div>
    <div class="rail">${P.filter(x => x.id !== p.id).slice(0,4).map(productCard).join('')}</div></section>
  ${footer()}
  <div class="sticky-buy"><span class="price" id="sprice">${money(p.v[0][2])}</span><button class="btn primary" data-buy="${p.id}">${icon('bag')} ${t('add_bag')}</button></div>`;
};

function totals() {
  const sub = bag.reduce((a, l) => a + productById(l.id).v[l.vi][2] * l.qty, 0);
  const disc = promo ? Math.round(sub * 0.10) : 0;
  return { sub, disc, del: 0, total: sub - disc };
}

views.bag = () => {
  if (!bag.length) return `<div class="page-head"><h1 class="h-l">${t('bag_t')}</h1></div>
    <div class="empty">${art('boutique','', 'arch')}<h2 class="h-m">${t('bag_empty')}</h2><p class="muted">${t('bag_empty_l')}</p><a class="btn primary" href="#/shop">${t('browse')}</a></div>`;
  const s = totals();
  return `<div class="page-head"><h1 class="h-l">${t('bag_t')}</h1></div>
  <div class="wrap" style="max-width:720px">
    ${bag.map((l, i) => { const p = productById(l.id), v = p.v[l.vi]; return `<div class="bag-item">
      ${art(p.il, p.tone)}
      <div><h3>${L(p)}</h3><div class="small muted">${lang==='ar'?v[1]:v[0]} · ${money(v[2])}</div>
        <div class="qty" style="height:38px;margin-top:8px"><button data-bq="${i}:-1" style="height:36px">−</button><span>${l.qty}</span><button data-bq="${i}:1" style="height:36px">+</button></div></div>
      <div style="text-align:end"><div class="price">${money(v[2]*l.qty)}</div><button class="small muted" data-rm="${i}" style="background:none;border:0;padding:6px 0;text-decoration:underline">${t('remove')}</button></div>
    </div>`; }).join('')}
    <div style="display:flex;gap:8px;margin-top:20px"><input class="input" id="code" placeholder="${t('code')}" value="${promo?'ZIRI10':''}" aria-label="${t('code')}"><button class="btn ghost" id="apply">${t('apply')}</button></div>
    <div class="sum">
      <div><span>${t('subtotal')}</span><span class="price">${money(s.sub)}</span></div>
      ${s.disc ? `<div style="color:var(--zellige)"><span>${t('discount')}</span><span>− ${money(s.disc)}</span></div>` : ''}
      <div class="total"><span>${t('total')}</span><span>${money(s.total)}</span></div>
    </div>
    <a class="btn primary block" style="margin:18px 0 40px" href="#/checkout">${icon('lock')} ${t('checkout')}</a>
  </div>`;
};

let co = { how: 'delivery', pm: 'benefitpay' };
views.checkout = () => {
  if (!bag.length) { location.hash = '#/bag'; return ''; }
  const s = totals();
  const del = co.how === 'delivery' ? 1500 : 0;
  return `<div class="page-head"><h1 class="h-l">${t('co_t')}</h1></div>
  <form class="wrap" id="coform" style="max-width:640px" novalidate>
    <div class="notice" style="margin-top:12px">${icon('lock').replace('<svg','<svg style="width:18px;height:18px;flex:0 0 auto"')} ${t('preview_pay')}</div>
    <div class="step-t">${t('co_contact')}</div>
    <div class="field"><label for="f-n">${t('name')}</label><input class="input" id="f-n" autocomplete="name"></div>
    <div class="field"><label for="f-m">${t('mobile')}</label><div class="phone-in" dir="ltr"><span>+973</span><input class="input" id="f-m" inputmode="tel" autocomplete="tel-national" placeholder="3XXX XXXX"></div></div>
    <div class="field"><label for="f-e">${t('email')}</label><input class="input" id="f-e" type="email" autocomplete="email"></div>

    <div class="step-t">${t('co_how')}</div>
    <div class="seg" role="tablist"><button type="button" data-how="delivery" class="${co.how==='delivery'?'on':''}">${t('deliver')}</button><button type="button" data-how="pickup" class="${co.how==='pickup'?'on':''}">${t('pickup')}</button></div>
    ${co.how === 'delivery' ? `
      <div class="field"><label for="f-a">${t('area')}</label><select class="input" id="f-a">${T[lang].areas.map(a=>`<option>${a}</option>`).join('')}</select></div>
      <div class="grid-2"><div class="field"><label for="f-b">${t('block')}</label><input class="input" id="f-b" inputmode="numeric"></div><div class="field"><label for="f-r">${t('road')}</label><input class="input" id="f-r" inputmode="numeric"></div></div>
      <div class="grid-2"><div class="field"><label for="f-h">${t('building')}</label><input class="input" id="f-h"></div><div class="field"><label for="f-f">${t('flat')}</label><input class="input" id="f-f"></div></div>
      <div class="field"><label for="f-x">${t('notes')}</label><input class="input" id="f-x"></div>`
    : `<p class="muted">${t('pickup_note')}</p><p class="small">${t('address')}</p>`}

    <div class="step-t">${t('co_pay')}</div>
    <div class="pm">
      ${[['benefitpay','pm_benefitpay','pm_bp_l','<span class="logo-chip bp">BenefitPay</span>'],
         ['card','pm_card','pm_card_l','<span class="logo-chip visa">VISA</span><span class="logo-chip"><svg viewBox="0 0 38 24"><circle cx="14" cy="12" r="8" fill="#eb001b"/><circle cx="24" cy="12" r="8" fill="#f79e1b" fill-opacity=".9"/></svg></span>'],
         ['benefit','pm_benefit','pm_benefit_l','<span class="logo-chip">BENEFIT</span>']]
        .map(([k, a, b, logos]) => `<label><input type="radio" name="pm" value="${k}" ${co.pm===k?'checked':''}><span><b style="font-weight:450;display:block">${t(a)}</b><span class="small muted">${t(b)}</span></span><span class="logos">${logos}</span></label>`).join('')}
    </div>
    <p class="small muted" style="margin-top:12px">${t('secure')}</p>

    <div class="sum">
      <div><span>${t('subtotal')}</span><span>${money(s.sub)}</span></div>
      ${s.disc ? `<div style="color:var(--zellige)"><span>${t('discount')}</span><span>− ${money(s.disc)}</span></div>` : ''}
      <div><span>${t('delivery')}</span><span>${co.how==='delivery' ? money(del) + ` <span class="tag">${t('sample')}</span>` : '—'}</span></div>
      <div class="total"><span>${t('total')}</span><span>${money(s.total + del)}</span></div>
    </div>
    <button class="btn primary block" style="margin:18px 0 40px" type="submit">${icon('lock')} ${t('pay')} ${money(s.total + del)}</button>
  </form>`;
};

views.pay = (pm) => {
  if (pm === 'benefitpay') return `<div class="paysheet">
    <h1 class="h-m">${t('bp_t')}</h1><p class="muted" style="max-width:30ch;margin:10px auto 0">${t('bp_l')}</p>
    <div class="qr">${fakeQr()}</div>
    <a class="btn brass" href="javascript:void 0" data-sim>${t('bp_open')}</a>
    <div class="spinner"></div><p class="muted small">${t('bp_wait')}</p>
    <p class="small" style="margin-top:28px;color:var(--brass-soft)">${t('preview_pay')}</p>
    <button class="btn ghost" style="margin-top:6px" data-sim>${t('sim')}</button>
  </div>`;
  return `<div class="paysheet">
    <h1 class="h-m">${t('card_t')}</h1><p class="muted" style="max-width:30ch;margin:10px auto 22px">${t('card_l')}</p>
    <div style="background:var(--paper);color:var(--cocoa);border-radius:18px;padding:20px;max-width:360px;margin:0 auto;text-align:start">
      <div class="field"><label>Card number</label><div class="input" style="display:flex;align-items:center;color:#9a8c82" dir="ltr">•••• •••• •••• ••••</div></div>
      <div class="grid-2"><div class="field"><label>MM / YY</label><div class="input"></div></div><div class="field"><label>CVV</label><div class="input"></div></div></div>
      <div style="display:flex;gap:6px">${payLogos()}</div>
    </div>
    <p class="small" style="margin-top:22px;color:var(--brass-soft)">${t('preview_pay')}</p>
    <button class="btn brass" style="margin-top:6px" data-sim>${t('sim')}</button>
  </div>`;
};
function fakeQr() {
  // decorative pattern standing in for the BenefitPay QR code
  let s = '<svg viewBox="0 0 25 25" style="width:100%;height:100%" shape-rendering="crispEdges">';
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const finder = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7" fill="#2B1F1A"/><rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#fff"/><rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#2B1F1A"/>`;
  for (let y = 0; y < 25; y++) for (let x = 0; x < 25; x++) {
    const inF = (x < 8 && y < 8) || (x > 16 && y < 8) || (x < 8 && y > 16);
    if (!inF && rnd() > .52) s += `<rect x="${x}" y="${y}" width="1" height="1" fill="#2B1F1A"/>`;
  }
  return s + finder(0,0) + finder(18,0) + finder(0,18) + '</svg>';
}

views.done = () => {
  const no = 'ZS-' + (10001 + Math.floor(Math.random()*80));
  return `<div class="paysheet light" style="background:var(--stone);color:var(--cocoa)">
    <div class="done-mark"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <h1 class="h-l">${t('done_t')}</h1>
    <p class="muted" style="max-width:32ch;margin:12px auto">${t('done_l')}</p>
    <p>${t('order_no')} <b dir="ltr">${no}</b> <span class="tag">${t('sample')}</span></p>
    <a class="btn primary" style="margin-top:18px" href="#/shop">${t('keep')}</a>
  </div>`;
};

views.story = () => `
  <div class="page-head"><h1 class="h-xl">${t('nav_story')}</h1></div>
  <div class="wrap" style="max-width:760px">
    <p class="lede" style="font-family:var(--display);font-size:clamp(24px,6vw,36px);line-height:1.3;color:var(--ink);max-width:none;margin-top:24px">${t('story_l')}</p>
    <div style="margin:36px -20px">${art('hammam','green','arch',t('slot_interior'))}</div>
    <p class="notice">${t('story_owner')}</p>
  </div>
  <section class="section">${mosaic()}</section>${footer()}`;

views.gallery = () => `<div class="page-head"><h1 class="h-l">${t('gallery_t')}</h1><p class="muted">${t('gallery_l')}</p></div>
  <section class="section" style="padding-top:24px">${mosaic()}<div style="height:10px"></div>${mosaic()}</section>${footer()}`;

views.visit = () => `<div class="page-head"></div><div class="wrap">${visitBlock()}
  <h2 class="h-m" style="margin-top:48px">${t('contact_t')}</h2>
  <form id="cform" style="max-width:560px;margin-top:16px">
    <div class="field"><label for="c-n">${t('name')}</label><input class="input" id="c-n"></div>
    <div class="field"><label for="c-m">${t('mobile')}</label><input class="input" id="c-m" inputmode="tel" dir="ltr"></div>
    <div class="field"><label for="c-t">${t('message')}</label><textarea class="input" id="c-t"></textarea></div>
    <button class="btn primary" type="submit">${t('send')}</button>
  </form><div style="height:48px"></div></div>${footer()}`;

views.account = () => `<div class="page-head"><h1 class="h-l">${t('acc_t')}</h1></div>
  <div class="wrap" style="max-width:520px">
    <form id="aform" style="margin-top:16px">
      <div class="field"><label for="a-e">Email</label><input class="input" id="a-e" type="email" autocomplete="email"></div>
      <div class="field"><label for="a-p">${t('password')}</label><input class="input" id="a-p" type="password" autocomplete="current-password"></div>
      <button class="btn primary block" type="submit">${t('signin')}</button>
      <button class="btn ghost block" type="button" style="margin-top:10px" data-acc>${t('create')}</button>
    </form>
    <ul class="muted" style="margin:22px 0 6px;padding-inline-start:18px">${T[lang].acc_feats.map(f=>`<li>${f}</li>`).join('')}</ul>
    <p class="small muted">${t('guest_note')}</p>
    <a class="btn brass block" style="margin:28px 0 48px" href="#/owner">${t('owner_btn')}</a>
  </div>`;

views.owner = () => `<div class="admin">
  <div class="admin-top"><a href="#/" class="small muted" style="text-decoration:none">${t('back_site')}</a>
    <h1 class="h-l" style="margin-top:8px">${t('adm_t')}</h1><p class="muted" style="margin:6px 0 0">${t('adm_l')}</p></div>
  <p class="sample-note">● ${t('sample_data')}</p>
  <div class="kpis">
    <div class="kpi"><b dir="ltr">${money(186500)}</b><span>${t('k_sales')}</span></div>
    <div class="kpi"><b>4</b><span>${t('k_orders')}</span></div>
    <div class="kpi"><b>2</b><span>${t('k_stock')}</span></div>
    <div class="kpi"><b>63</b><span>${t('k_visits')}</span></div>
  </div>
  <div class="a-card"><h3>${t('adm_orders')}</h3>
    ${[['ZS-10024','Fatima A.',22000,'st_paid',''],['ZS-10023','Noor H.',9500,'st_ship','wait'],['ZS-10022','Sara M.',35500,'st_pick','']]
      .map(([n,c,a,s,cl]) => `<div class="o-row"><span><b style="font-weight:450" dir="ltr">${n}</b><br><span class="small muted">${c} · ${money(a)}</span></span><span class="st ${cl}">${t(s)}</span></div>`).join('')}
  </div>
  <div class="a-card"><h3>${t('adm_add')}</h3>
    <button class="upload" style="width:100%;background:none" data-saved>${t('adm_photo')}</button>
    <div class="field" style="margin-top:12px"><label>${t('adm_pname')}</label><input class="input" placeholder="${L(P[1])}"></div>
    <div class="grid-2"><div class="field"><label>${t('adm_price')}</label><input class="input" inputmode="decimal" placeholder="9.500" dir="ltr"></div><div class="field"><label>${t('adm_stock')}</label><input class="input" inputmode="numeric" placeholder="12"></div></div>
    <button class="btn primary block" data-saved>${t('adm_publish')}</button>
  </div>
  <div class="a-card"><h3>${t('adm_inv')}</h3>
    ${P.slice(0,4).map((p,i) => `<div class="o-row"><span>${L(p)}<br><span class="small muted">${p.stock} · ${money(p.v[0][2])}</span></span><span style="display:flex;align-items:center;gap:8px"><span class="small muted">${t('adm_visible')}</span><button class="toggle ${i!==3?'on':''}" data-toggle aria-label="${t('adm_visible')}"></button></span></div>`).join('')}
  </div>
  <div class="a-card"><h3>${t('adm_home')}</h3><p class="small muted" style="margin:0 0 12px">${t('adm_home_l')}</p>
    <div style="display:grid;grid-template-columns:72px 1fr;gap:14px;align-items:center"><img src="media/ambient-poster.jpg" alt="" style="width:72px;aspect-ratio:9/16;object-fit:cover;border-radius:8px"><button class="btn ghost" data-saved>${t('adm_replace')}</button></div></div>
  <div class="a-card"><h3>${t('adm_menu')}</h3><p class="small muted" style="margin:0">${t('adm_menu_l')}</p></div>
  <div class="a-card"><h3>${t('adm_hours')}</h3>${hoursTable()}</div>
  <div class="a-card" style="margin-bottom:40px"><h3>${t('adm_pay')}</h3><p class="small muted" style="margin:0 0 10px">${t('adm_pay_l')}</p><div style="display:flex;gap:6px;flex-wrap:wrap">${payLogos()}</div></div>
</div>`;

/* ------------------------------------------------------------------ router */
let cleanup = [];
function route() {
  cleanup.forEach(f => f()); cleanup = [];
  const h = location.hash.replace(/^#\/?/, '');
  const [name, arg] = h.split('/');
  const view = views[name] ? name : '';
  chrome(h);
  const html = views[view](arg);
  if (html === '') return;
  const app = $('#app');
  app.innerHTML = `<div class="view">${html}</div>`;
  window.scrollTo(0, 0);
  document.title = (view ? (t('nav_' + ({treatments:'treat',treatment:'treat',product:'shop',checkout:'bag',pay:'bag',done:'bag',owner:'acc',account:'acc'}[view] || view)) + ' — ') : '') + 'ZIRI SPA';
  bind(view, arg);
  topBar(view);
}

function topBar(view) {
  const top = $('#top');
  const dark = view === '' || view === 'pay';
  const set = () => {
    const y = scrollY;
    top.classList.toggle('solid', !dark || (view === '' && y > 60));
    top.classList.toggle('on-dark', dark && !(view === '' && y > 60));
  };
  const wa = $('#wa');
  const setWa = () => wa.classList.toggle('hide', view === '' && scrollY < innerHeight * 1.2 || ['pay','owner','product','bag','checkout','done'].includes(view));
  set(); setWa(); addEventListener('scroll', setWa, { passive: true }); cleanup.push(() => removeEventListener('scroll', setWa));
  addEventListener('scroll', set, { passive: true }); cleanup.push(() => removeEventListener('scroll', set));
}

/* ------------------------------------------------------------------ behaviours */
function archPolys() {
  // same number of points for full-screen rectangle and the pointed arch, so GSAP can morph between them
  const N = 60, rect = [], arch = [];
  const bez = (p0, p1, p2, p3, s) => { const u = 1 - s; return u*u*u*p0 + 3*u*u*s*p1 + 3*u*s*s*p2 + s*s*s*p3; };
  const ax0 = 9, ax1 = 91, ay0 = 9, ayS = 37, ay1 = 88; // arch box in % of viewport
  for (let i = 0; i <= N; i++) {
    const s = i / N; let r, a;
    if (s <= .2) { const k = s/.2; r = [0, 100 - 100*k]; a = [ax0, ay1 - (ay1-ayS)*k]; }
    else if (s <= .5) { const k = (s-.2)/.3; r = [50*k, 0]; a = [bez(ax0,ax0,ax0+18,50,k), bez(ayS,ayS-14,ay0+5,ay0,k)]; }
    else if (s <= .8) { const k = (s-.5)/.3; r = [50+50*k, 0]; a = [bez(50,ax1-18,ax1,ax1,k), bez(ay0,ay0+5,ayS-14,ayS,k)]; }
    else { const k = (s-.8)/.2; r = [100, 100*k]; a = [ax1, ayS + (ay1-ayS)*k]; }
    rect.push(r); arch.push(a);
  }
  const fmt = (pts) => `polygon(${pts.map(([x,y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(',')})`;
  const at = (k) => fmt(rect.map(([x, y], i) => [x + (arch[i][0] - x) * k, y + (arch[i][1] - y) * k]));
  return { rect: fmt(rect), arch: fmt(arch), at };
}

function bind(view, arg) {
  bindAdds(document);
  $$('[data-saved]').forEach(b => b.addEventListener('click', () => toast(t('adm_saved'))));
  $$('[data-toggle]').forEach(b => b.addEventListener('click', () => { b.classList.toggle('on'); toast(t('adm_saved')); }));

  if (view === '') {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const v = $('#hero video'); v && v.play().catch(() => {});
    if (window.gsap && window.ScrollTrigger && !reduce) {
      gsap.registerPlugin(ScrollTrigger);
      const poly = archPolys(), frame = $('#hero-frame'), morph = { k: 0 };
      frame.style.clipPath = poly.rect;
      const tl = gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: '+=85%', scrub: 0.6, pin: true } });
      tl.to('#hero-copy', { opacity: 0, y: -40, duration: .35 }, 0)
        .to('.scroll-cue,.film-note', { opacity: 0, duration: .2 }, 0)
        .to(morph, { k: 1, ease: 'power1.inOut', duration: 1, onUpdate: () => { frame.style.clipPath = poly.at(morph.k); } }, 0)
        .to('#step-inside', { opacity: 1, duration: .3 }, .7);
      cleanup.push(() => { ScrollTrigger.getAll().forEach(s => s.kill()); });
    }
    lazySculpture();
  }
  if (view === 'shop') {
    const rg = () => { renderGrid(); bindAdds($('#grid')); };
    rg();
    $('#q').addEventListener('input', e => { shopState.q = e.target.value; rg(); });
    $('#sort').addEventListener('change', e => { shopState.sort = e.target.value; rg(); });
    $$('[data-cat]').forEach(b => b.addEventListener('click', () => {
      shopState.cat = b.dataset.cat; $$('[data-cat]').forEach(x => x.classList.toggle('on', x === b)); rg();
    }));
  }
  if (view === 'product') {
    const p = productById(arg) || P[0];
    const gs = $('#gs');
    gs.addEventListener('scroll', () => {
      const i = Math.round(Math.abs(gs.scrollLeft) / gs.clientWidth);
      $$('#dots i').forEach((d, j) => d.classList.toggle('on', i === j));
    }, { passive: true });
    $$('[data-vi]').forEach(b => b.addEventListener('click', () => {
      pdp.vi = +b.dataset.vi; $$('[data-vi]').forEach(x => x.classList.toggle('on', x === b));
      $('#pprice').textContent = $('#sprice').textContent = money(p.v[pdp.vi][2]);
    }));
    $$('[data-q]').forEach(b => b.addEventListener('click', () => {
      pdp.qty = Math.max(1, Math.min(9, pdp.qty + +b.dataset.q)); $('#qn').textContent = pdp.qty;
    }));
    $('[data-buy]').addEventListener('click', () => addToBag(p.id, pdp.vi, pdp.qty));
  }
  if (view === 'bag') {
    $$('[data-bq]').forEach(b => b.addEventListener('click', () => {
      const [i, d] = b.dataset.bq.split(':').map(Number);
      bag[i].qty += d; if (bag[i].qty < 1) bag.splice(i, 1);
      store.set('bag', bag); route();
    }));
    $$('[data-rm]').forEach(b => b.addEventListener('click', () => { bag.splice(+b.dataset.rm, 1); store.set('bag', bag); route(); }));
    const ap = $('#apply'); ap && ap.addEventListener('click', () => {
      const ok = $('#code').value.trim().toUpperCase() === 'ZIRI10';
      promo = ok; store.set('promo', ok); toast(ok ? t('code_ok') : t('code_bad')); if (ok) route();
    });
  }
  if (view === 'checkout') {
    $$('[data-how]').forEach(b => b.addEventListener('click', () => { co.how = b.dataset.how; route(); }));
    $$('input[name=pm]').forEach(r => r.addEventListener('change', () => { co.pm = r.value; }));
    $('#coform').addEventListener('submit', (e) => { e.preventDefault(); location.hash = '#/pay/' + co.pm; });
  }
  if (view === 'pay') {
    $$('[data-sim]').forEach(b => b.addEventListener('click', () => {
      bag = []; promo = false; store.set('bag', bag); store.set('promo', false); location.hash = '#/done';
    }));
  }
  if (view === 'visit') $('#cform').addEventListener('submit', (e) => { e.preventDefault(); toast(t('sent')); });
  if (view === 'account') {
    $('#aform').addEventListener('submit', (e) => { e.preventDefault(); toast(t('signed')); });
    $('[data-acc]').addEventListener('click', () => toast(t('signed')));
  }
}
function bindAdds(root) {
  $$('[data-add]', root).forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault(); addToBag(b.dataset.add);
    b.classList.add('done'); b.innerHTML = icon('check');
    setTimeout(() => { b.classList.remove('done'); b.innerHTML = icon('plus'); }, 1400);
  }));
}

function lazySculpture() {
  const c = $('#sculpt'); if (!c) return;
  const go = () => {
    if (window.mountSculpture) return window.mountSculpture(c);
    const s = document.createElement('script'); s.src = 'js/sculpture.js';
    s.onload = () => window.mountSculpture(c); document.body.appendChild(s);
  };
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); go(); } }, { rootMargin: '300px' });
  io.observe(c);
}

$('#lang').addEventListener('click', () => { lang = lang === 'ar' ? 'en' : 'ar'; store.set('lang', lang); route(); });
addEventListener('hashchange', route);
route();

})();
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(()=>{});
