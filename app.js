/**
 * مجموعة المعمرون العرب للتنمية (MAG)
 * Application Logic & Dynamic Features
 * - Instant Translation (Arabic <-> English)
 * - Theme Switcher (Dark / Light) with LocalStorage
 * - Active Golden Underline (Click + Scroll-Spy)
 * - Form Submission direct to WhatsApp (+201034187877)
 * - Timeline Category Filtering & Animated Counters
 * - High-Performance Scroll Reveal Engine (60fps)
 */

// ==========================================
// 1. قاموس الترجمة الشامل (i18n Dictionary)
// ==========================================
const translations = {
  ar: {
    nav_brand: "المعمرون العرب",
    nav_sub: "للتنمية ش.م.م | منذ 1980",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_vision: "رؤيتنا",
    nav_divisions: "قطاعاتنا",
    nav_team: "فريق الإدارة",
    nav_history: "تاريخنا ومسيرتنا",
    nav_contact: "تواصل معنا",
    cta_invest: "استثمر معنا",
    cta_invest_now: "ابدأ استثمارك الآن",

    hero_badge: "أكثر من 44 عاماً من الريادة والتميز الاستثماري",
    hero_title_1: "نصنع الفرص..",
    hero_title_2: "ونبني مستقبل التنمية المستدامة",
    hero_desc: "مجموعة المعمرون العرب للتنمية (MAG) - كيان اقتصادي رائد أسسه د. أسعد عبد المالك في الإسكندرية منذ 1980، يضم 10 شركات كبرى تقود قطاعات البنية التحتية، المدن السكنية، الطاقة المتجددة، والتعليم إقليمياً وعالمياً.",
    btn_explore_divisions: "استكشف قطاعاتنا",
    btn_explore_history: "مسيرة المشاريع منذ 1980",
    stat_exp: "عاماً من الخبرة العريقة",
    stat_sectors: "شركات وقطاعات كبرى",
    stat_milestones: "صرح استثماري تاريخي موثق",
    stat_sustainability: "التزام بالمعايير البيئية",

    tag_about: "من نحن",
    about_title_1: "صرح اقتصادي متكامل",
    about_title_2: "يقود قاطرة التطوير والاستثمار",
    about_lead: "تعتبر 'مجموعة المعمرون العرب للتنمية ش.م.م' (MAG) الشركة الأم لمجموعة تضم 10 شركات وكيانات اقتصادية متخصصة تخدم أكثر القطاعات الحيوية محلياً ودولياً.",
    about_desc: "تأسست المجموعة في عروس البحر الأبيض المتوسط - الإسكندرية عام 1980، برؤية وتوجيه المطور العام ورئيس مجلس الإدارة د. أسعد عبد المالك، الذي استطاع بناء صرح استثماري قوي يرتكز على أعلى معايير الجودة العالمية، وتقديم مشاريع مستدامة تسهم في مكافحة الفقر وتوفير آلاف فرص العمل وتأهيل الكوادر البشرية.",
    feat_env_title: "استدامة ومسؤولية بيئية",
    feat_env_desc: "مشاريع صديقة للبيئة تلتزم بمبادئ الطاقة الخضراء والمعايير المناخية الدولية.",
    feat_part_title: "شراكات دولية استراتيجية",
    feat_part_desc: "التعاون مع أكبر الشركاء الدوليين ونقل أحدث التكنولوجيات والحلول الذكية.",
    founder_badge: "قيادة الرؤية",
    founder_name: "د. أسعد عبد المالك",
    founder_role: "المؤسس ورئيس مجلس إدارة المجموعة",
    founder_quote: "\"إن استشراف المستقبل يبدأ بصناعته، وهدفنا هو ترسيخ كيان اقتصادي يبني الإنسان ويطور العمران ويخلق فرصاً استثمارية تدوم لأجيال.\"",
    founder_location: "الإسكندرية، مصر",
    founder_since: "مستمرون منذ 1980",

    tag_vision: "نهجنا وفلسفتنا",
    vision_main_title: "رؤيتنا ورسالتنا نحو المستقبل",
    vision_subtitle: "نعمل وفق استراتيجية تنموية واضحة توازن بين الربحية الاقتصادية والأثر الإنساني والمجتمعي المستدام.",
    vision_card1_title: "رؤيتنا الشاملة",
    vision_card1_desc: "ريادة التنمية الشاملة والاستثمار متعدد القطاعات في مصر والشرق الأوسط والأسواق العالمية، من خلال تدشين كيانات اقتصادية مستدامة تقدم أعلى قيمة مضافة للمجتمع والشركاء.",
    vision_card2_title: "رسالتنا الاستثمارية",
    vision_card2_desc: "اقتناص الفرص الاستثمارية الواعدة، وبناء مستقبل أكثر إشراقاً عبر نقل التكنولوجيا وتأهيل المهارات البشرية، وخلق بيئة تدعم الابتكار والنمو الذاتي للفئات الشابة.",
    vision_card3_title: "التزامنا الأخضر",
    vision_card3_desc: "المساهمة الفعالة في حماية البيئة عبر التوافق التام مع اللوائح الدولية للطاقة النظيفة، ومكافحة التلوث، وابتكار حلول حضارية مستدامة تضمن أمان الأجيال القادمة.",

    tag_divisions: "تنوع استثماري متكامل",
    divisions_title: "قطاعات وشركات مجموعة MAG",
    divisions_subtitle: "تغطي المجموعة 10 قطاعات استراتيجية تمثل عصب النمو الاقتصادي والتنموي في أي دولة متقدمة.",
    div_1_title: "البنية التحتية والمقاولات",
    div_1_desc: "تنفيذ مشاريع البنية التحتية الضخمة وشبكات المرافق الحيوية وأعمال الهندسة المدنية الكبرى بأعلى كودات الأمان والجودة العالمية.",
    div_2_title: "المدن السكنية والأبراج والمنتجعات",
    div_2_desc: "تخطيط وإنشاء مجمعات سكنية متكاملة، كمبوندات فاخرة، أبراج سكنية وتجارية، ومنتجعات سياحية بتصميمات معمارية فريدة.",
    div_3_title: "قطاع الطاقة المتجددة",
    div_3_desc: "الاستثمار في حلول الطاقة النظيفة والشمسية والرياح للمساهمة في التحول البيئي وتقليل الانبعاثات الكربونية.",
    div_4_title: "التعليم وتطوير الكوادر",
    div_4_desc: "إنشاء مدارس وصروح تعليمية مبتكرة ومراكز تدريبية متقدمة لتأهيل الأجيال والشباب بالمهارات العالمية لسوق العمل.",
    div_5_title: "المستشفيات والرعاية الصحية",
    div_5_desc: "تطوير وتشغيل مراكز طبية ومستشفيات متطورة ومجهزة بأحدث التجهيزات والتقنيات الطبية لتقديم أعلى مستوى عناية صحية.",
    div_6_title: "الفنادق والضيافة الفاخرة",
    div_6_desc: "إدارة وتشغيل الفنادق والمنتجعات السياحية الراقية التي ترفع من جاذبية مصر السياحية وتقدم تجربة إقامة استثنائية.",
    div_7_title: "الأغذية والمشروبات",
    div_7_desc: "سلاسل ومشاريع تقديم وتوزيع الأغذية والمشروبات بأعلى معايير سلامة الغذاء العالمية والجودة التشغيلية المنضبطة.",
    div_8_title: "الاستثمار الزراعي والري الحديث",
    div_8_desc: "استصلاح الأراضي والزراعة الذكية والأنظمة الحديثة للري للمساهمة في تحقيق الأمن الغذائي والتنمية الزراعية المتكاملة.",
    div_9_title: "الصناعة والإنتاج الوطني",
    div_9_desc: "تأسيس وتشغيل مصانع وخطوط إنتاج تدعم سلاسل التوريد المحلية والبدائل الوطنية للتصدير والتصنيع المحلي المستدام.",
    div_10_title: "الاستثمار وإدارة الأصول والمشاريع",
    div_10_desc: "صياغة خطط واستراتيجيات استثمارية عالية الكفاءة للمستثمرين المحليين والدوليين لإدارة رأس المال وتحقيق عوائد مجزية.",

    tag_team: "كفاءات وقيادات ملهمة",
    team_title: "فريق الإدارة والقيادة التنفيذية",
    team_subtitle: "تكمن قوتنا في تميز كوادرنا؛ فريق قيادي متكامل يجمع بين أرقى الخبرات في تطوير الأعمال، الإدارة القانونية، الحسابات المالية، والمبيعات لضمان نجاح كل مشروع.",
    team_dept_exec: "القيادة التنفيذية",
    team_dept_legal: "الشؤون القانونية",
    team_dept_finance: "القطاع المالي",
    team_dept_sales: "المبيعات والتسويق",
    team_member_1_name: "معتز عبد المالك",
    team_member_1_role: "الرئيس التنفيذي ومطور الأعمال",
    team_member_2_name: "فهد سرور",
    team_member_2_role: "الممثل والمستشار القانوني",
    team_member_3_name: "محمد عبد المنعم",
    team_member_3_role: "مدير الحسابات والمالية",
    team_member_4_name: "حنان عبد العظيم",
    team_member_4_role: "مديرة المبيعات والتعاقدات",

    tag_history: "مسار دقيق وموثق بالسنوات",
    history_title: "مسيرة النجاح والصروح الكبرى (1980 - 2026)",
    history_subtitle: "توثيق شامل ومفصل لأبرز محطات ومشاريع مجموعة المعمرون العرب بالصور الحقيقية والتفاصيل.",
    filter_all: "جميع المحطات والمشاريع",
    filter_res: "أبراج ومدن سكنية",
    filter_health_edu: "صحة وتعليم",
    filter_hosp_ind: "فندقة وصناعة وطاقة",

    loc_alex: "الإسكندرية",
    loc_gleem: "جليم - الإسكندرية",
    loc_louran: "لوران - طريق الحرية",
    loc_atebaa: "مجمع عيادات وإداري",
    loc_smouha: "سموحة الراقية",
    loc_mostakbal: "مجتمع عمراني متكامل",
    loc_golden: "صرح أيقوني",
    loc_moataz: "إطلالة معمارية",
    loc_plaza: "بلازا المعمرون",
    loc_falaky: "مول وفندق تجاري",
    loc_mandara: "بيئة خضراء نقية",
    loc_dar: "صرح طبي متكامل",
    loc_etd: "مجمع صناعي",
    loc_hotel: "ضيافة وفندق عصري",
    loc_azure: "منتجع ساحلي فاخر",
    loc_kinglife: "كينج لايف الفاخر",
    loc_edu: "مدرسة دولية للغات",

    badge_founded: "التأسيس والانطلاق",
    badge_res_com: "سكني وتجاري",
    badge_mall_hotel: "مول تجاري وفندق",
    badge_healthcare: "رعاية صحية ومستشفيات",
    badge_industrial: "قطاع الصناعة والإنتاج",
    badge_hospitality: "قطاع الفندقة والضيافة",
    badge_resort: "منتجع سكني سياحي",
    badge_education: "قطاع التعليم والمدارس",

    hist_1980_title: "انطلاق المجموعة في الإسكندرية",
    hist_1980_desc: "تأسيس مجموعة المعمرون العرب في الإسكندرية برؤية د. أسعد عبد المالك بهدف وضع معايير ذهبية جديدة للإنشاءات وخدمات التطوير والاستشارات.",
    hist_1997_gleem_title: "برج جليم (Gleem Tower)",
    hist_1997_gleem_desc: "أحد المعالم المعمارية الرائدة في حي جليم الراقي بالإسكندرية، صرح سكني وتجاري متكامل تم تشييده بأعلى المواصفات الإنشائية.",
    hist_1997_louran_title: "مشروع فيروزة لوران (Fayrouza Louran)",
    hist_1997_louran_desc: "صرح معماري سكني وتجاري فخم في قلب منطقة لوران بالإسكندرية، جمع بين التصميم الكلاسيكي والخدمات الحديثة.",
    hist_2000_atebaa_title: "برج الأطباء (Al Atebaa Tower)",
    hist_2000_atebaa_desc: "إنشاء وتدشين برج الأطباء ليخدم الأنشطة السكنية والعيادات الطبية التخصصية والمقرات التجارية في موقع استراتيجي حيوي.",
    hist_2001_smouha_title: "سموحة توب هاوس (Smouha Top House)",
    hist_2001_smouha_desc: "مشروع سكني وتجاري فاخر في منطقة سموحة الراقية، تميز بتخطيطه العصري ومساحاته الرحبة وموقعه المميز.",
    hist_2001_mostakbal_title: "مدينة المستقبل (Almostakbal City)",
    hist_2001_mostakbal_desc: "مشروع عمراني متكامل يقدم حلول إسكان عصرية ومراكز تجارية ومساحات خدمية مدروسة بعناية لتلبية تطلعات العائلات.",
    hist_2003_golden_title: "أبراج جولدن سيتي (Golden City Towers)",
    hist_2003_golden_desc: "سلسلة أبراج كبرى تمثل علامة فارقة في التطوير العمراني بمرافق حديثة وواجهات معمارية فخمة جذبت كبار المستثمرين.",
    hist_2005_moataz_title: "أبراج المعتز بالله (Almoataz Bellah Towers)",
    hist_2005_moataz_desc: "مجمع أبراج يجسد معايير الهندسة المتطورة في الإسكندرية ويوفر وحدات سكنية وتجارية متكاملة الخدمات.",
    hist_2008_plaza_title: "أبراج المعمرون بلازا (Almoameron Plaza Towers)",
    hist_2008_plaza_desc: "صرح أيقوني يحمل اسم المجموعة، يقدم نمط حياة راقٍ يجمع بين الوحدات السكنية الفاخرة والمساحات التجارية الكبرى.",
    hist_2008_falaky_title: "الفلكي مول وفندق (Al Falaky Mall & Hotel)",
    hist_2008_falaky_desc: "مشروع تجاري وفندقي رائد يضم مركز تسوق متكامل ووحدات ضيافة فندقية تخدم الحركة التجارية والسياحية.",
    hist_2009_mandara_title: "كمبوند المندرة جرين (Almandara Green)",
    hist_2009_mandara_desc: "مشروع سكني تجاري رائد يركز على المساحات الخضراء والبيئة الصحية النقية للساكنين في منطقة المندرة الساحلية.",
    hist_2017_dar_title: "مستشفى دار العلاج (Dar Al Elag Hospital)",
    hist_2017_dar_desc: "تدشين صرح طبي متكامل ومجهز بأحدث الأجهزة والتقنيات الطبية وغرف العمليات لتقديم رعاية صحية نموذجية للمرضى.",
    hist_2018_etd_title: "مجمع مصانع ETD (ETD Factory)",
    hist_2018_etd_desc: "إنشاء مجمع صناعي متقدم لتعزيز الصناعة الوطنية وتوفير منتجات عالية الجودة تدعم خطوط التوريد والتصدير.",
    hist_2021_hotel_title: "فندق هابي ستاي (Happy Stay Hotel)",
    hist_2021_hotel_desc: "إطلاق فندق عصري يقدم تجربة ضيافة استثنائية وإقامة مريحة للزوار والسياح بمواصفات جودة فندقية ممتازة.",
    hist_2022_azure_title: "منتجع سكاي أزور (Sky Azure Resort)",
    hist_2022_azure_desc: "منتجع راقٍ يجمع بين الإطلالات الساحرة والوحدات السكنية العصرية بتصميمات عالمية لتجربة معيشية فريدة.",
    hist_2022_kinglife_title: "منتجع كينج لايف (King Life Resort)",
    hist_2022_kinglife_desc: "مشروع سكني وتجاري متكامل يقدم أرقى مستويات الرفاهية والخدمات الترفيهية والمجتمعية المتكاملة.",
    hist_2022_edu_title: "مدرسة EDU الدولية للغات (EDU School)",
    hist_2022_edu_desc: "تأسيس صرح تعليمي متطور يطبق أحدث المناهج التفاعلية لبناء مهارات وقدرات قادة المستقبل.",

    tag_contact: "ابقى على تواصل",
    contact_title: "جاهزون لبحث فرص التنمية والاستثمار",
    contact_subtitle: "فريقنا ومستشارونا مستعدون لمناقشة استفساراتكم ومشاريعكم وشراكاتكم المستقبلية.",
    hq_title: "المقر الرئيسي لمجموعة المعمرون العرب",
    hq_desc: "يسعدنا استقبالكم في مقرنا الرسمي لمناقشة الشراكات والفرص الاستثمارية.",
    lbl_address: "العنوان الدقيق",
    val_address: "699 طريق الحرية (طريق أبو قير)، ثروت / لوران، الإسكندرية، مصر",
    lbl_phone: "الهاتف وخدمة العملاء",
    lbl_whatsapp: "واتساب خدمة المستثمرين",
    lbl_email: "البريد الإلكتروني الرسمي",
    lbl_hours: "مواعيد العمل الرسمية",
    val_hours: "السبت - الخميس: من 9:00 صباحاً حتى 5:00 مساءً",
    btn_open_google_maps: "فتح الموقع مباشرة في تطبيق خرائط Google",

    form_title: "أرسل استفسارك أو طلب استثمارك",
    form_desc: "املأ البيانات وسيقوم النظام بنقلك فوراً للواتساب مع رسالة جاهزة للإرسال بنقرة واحدة.",
    form_lbl_name: "الاسم الكامل *",
    ph_name: "أدخل اسمك الكريم",
    form_lbl_email: "البريد الإلكتروني *",
    ph_email: "example@domain.com",
    form_lbl_phone: "رقم الهاتف / واتساب *",
    ph_phone: "+20 100 000 0000",
    form_lbl_sector: "القطاع المستهدف للاستثمار أو الشراكة",
    opt_infra: "البنية التحتية والتطوير العقاري",
    opt_energy: "الطاقة المتجددة والاستدامة",
    opt_edu: "التعليم وتأهيل الكوادر",
    opt_health: "الرعاية الصحية والمستشفيات",
    opt_hosp: "الفنادق والضيافة والسياحة",
    opt_ind: "الصناعة وخطوط الإنتاج",
    opt_general: "استثمار عام وشراكات استراتيجية",
    form_lbl_message: "تفاصيل الاستفسار أو المقترح *",
    ph_message: "اكتب تفاصيل مشروعك أو استفسارك هنا...",
    btn_submit: "إرسال ومتابعة عبر واتساب",

    footer_brand: "المعمرون العرب للتنمية",
    footer_about: "مجموعة استثمارية وتنموية مصرية كبرى تأسست عام 1980 في الإسكندرية، تضم 10 شركات تقود أهم القطاعات الاقتصادية برؤية استدامة إقليمية وعالمية.",
    footer_col_links: "روابط سريعة",
    footer_col_divisions: "قطاعات التنمية",
    footer_col_contact: "المقر والتواصل",
    footer_copyright: "© 1980 - 2026 مجموعة المعمرون العرب للتنمية ش.م.م (MAG). جميع الحقوق محفوظة.",
    footer_credit: "Designed with Modern Ultra Luxury & Performance Standards"
  },

  en: {
    nav_brand: "Al-Moamron Al-Arab",
    nav_sub: "Development SAE | Since 1980",
    nav_home: "Home",
    nav_about: "About Us",
    nav_vision: "Our Vision",
    nav_divisions: "Divisions",
    nav_team: "Our Team",
    nav_history: "Milestones",
    nav_contact: "Contact Us",
    cta_invest: "Invest With Us",
    cta_invest_now: "Start Investing Now",

    hero_badge: "Over 44 Years of Investment Leadership & Excellence",
    hero_title_1: "Crafting Opportunities..",
    hero_title_2: "Building the Future of Sustainable Development",
    hero_desc: "Al-Moamron Al-Arab Development Group (MAG) - A leading economic conglomerate founded by Dr. Asaad Abdelmalek in Alexandria in 1980, encompassing 10 major enterprises driving infrastructure, residential cities, green energy, and education.",
    btn_explore_divisions: "Explore Our Sectors",
    btn_explore_history: "Historical Journey Since 1980",
    stat_exp: "Years of Established Heritage",
    stat_sectors: "Major Group Divisions",
    stat_milestones: "Documented Landmark Projects",
    stat_sustainability: "Commitment to Eco Standards",

    tag_about: "Who We Are",
    about_title_1: "An Integrated Economic Giant",
    about_title_2: "Leading the Locomotive of Regional Growth",
    about_lead: "Al-Moamron Al-Arab for Development SAE (MAG) is the parent holding corporation for 10 specialized firms serving the most vital economic sectors in Egypt and the MENA region.",
    about_desc: "Established in the Mediterranean pearl of Alexandria in 1980 under the vision of Master Developer and Chairman Dr. Asaad Abdelmalek, MAG has built a solid investment enterprise grounded in international standards, empowering thousands of jobs and nurturing human potential.",
    feat_env_title: "Sustainability & Eco Responsibility",
    feat_env_desc: "Environmentally friendly projects strictly aligning with global green energy frameworks.",
    feat_part_title: "Strategic International Alliances",
    feat_part_desc: "Partnering with prominent global entities to localize smart technologies and innovations.",
    founder_badge: "Visionary Leadership",
    founder_name: "Dr. Asaad Abdelmalek",
    founder_role: "Founder & Group Chairman",
    founder_quote: "\"Anticipating the future begins with building it today. Our mission is to establish an economic foundation that elevates humanity, refines urbanization, and creates multigenerational wealth.\"",
    founder_location: "Alexandria, Egypt",
    founder_since: "Pioneering Since 1980",

    tag_vision: "Our Philosophy",
    vision_main_title: "Our Vision & Purpose for Tomorrow",
    vision_subtitle: "Operating on a disciplined development blueprint balancing financial returns with lasting social and human impact.",
    vision_card1_title: "Comprehensive Vision",
    vision_card1_desc: "To be the prime developmental and investment powerhouse across Egypt, the Middle East, and international markets, delivering sustainable value to communities and stakeholders.",
    vision_card2_title: "Investment Mission",
    vision_card2_desc: "Seizing high-impact investment opportunities, deploying transformative technology, and creating a supportive ecosystem for youth leadership and self-sustained prosperity.",
    vision_card3_title: "Green Commitment",
    vision_card3_desc: "Actively safeguarding our planet through clean energy compliance, emission reduction, and resilient urban solutions for generations ahead.",

    tag_divisions: "Diverse Portfolio",
    divisions_title: "MAG Group Business Divisions",
    divisions_subtitle: "10 strategic corporate divisions forming the backbone of socioeconomic prosperity and sustainable modernization.",
    div_1_title: "Infrastructure & Contracting",
    div_1_desc: "Executing megascale civil engineering, critical utilities, and infrastructure under rigorous international safety protocols.",
    div_2_title: "Residential Cities & Resorts",
    div_2_desc: "Master-planning luxury compounds, mixed-use commercial towers, and coastal resorts showcasing iconic architecture.",
    div_3_title: "Renewable Energy Sector",
    div_3_desc: "Capital investment in utility-scale solar, wind, and decarbonization solutions driving the ecological transition.",
    div_4_title: "Education & Talent Development",
    div_4_desc: "Establishing world-class private educational institutions and vocational centers preparing youth for the global economy.",
    div_5_title: "Healthcare & Hospitals",
    div_5_desc: "Developing and managing state-of-the-art hospitals equipped with advanced medical tech for patient-first care.",
    div_6_title: "Hotels & Luxury Hospitality",
    div_6_desc: "Managing high-end hotels and resorts that elevate Egypt's tourism sector with unmatched guest experiences.",
    div_7_title: "Food & Beverage (F&B)",
    div_7_desc: "Managing food production and distribution chains with uncompromising international food safety standards.",
    div_8_title: "Agri-Business & Smart Irrigation",
    div_8_desc: "Large-scale land reclamation, modern irrigation, and precision farming contributing to regional food security.",
    div_9_title: "National Industrial Production",
    div_9_desc: "Operating specialized production plants bolstering domestic supply chains and manufacturing export alternatives.",
    div_10_title: "Asset & Project Management",
    div_10_desc: "Formulating high-yield investment strategies, advisory portfolios, and capital management for global investors.",

    tag_team: "Inspiring Leadership",
    team_title: "Executive Leadership & Management Team",
    team_subtitle: "Our strength lies in our individuality. A unified management team bringing together the best talent in business development, legal governance, accounting, and sales.",
    team_dept_exec: "Executive Leadership",
    team_dept_legal: "Legal Affairs",
    team_dept_finance: "Finance & Accounts",
    team_dept_sales: "Sales & Marketing",
    team_member_1_name: "Moataz Abdelmalek",
    team_member_1_role: "CEO / Business Developer",
    team_member_2_name: "Fahd Srour",
    team_member_2_role: "Legal Representative",
    team_member_3_name: "Mohamed Abdelmonem",
    team_member_3_role: "Accounting Manager",
    team_member_4_name: "Hanan Abdelazeem",
    team_member_4_role: "Sales Manager",

    tag_history: "Documented Milestones",
    history_title: "Chronicle of Landmark Achievements (1980 - 2026)",
    history_subtitle: "An authentic, chronological retrospective detailing over four decades of transformative projects with photos.",
    filter_all: "All Landmarks",
    filter_res: "Residential & Towers",
    filter_health_edu: "Health & Education",
    filter_hosp_ind: "Hospitality, Industry & Energy",

    loc_alex: "Alexandria",
    loc_gleem: "Gleem - Alexandria",
    loc_louran: "Louran - Al Horeya Rd",
    loc_atebaa: "Medical & Commercial Hub",
    loc_smouha: "Upscale Smouha",
    loc_mostakbal: "Integrated Urban Hub",
    loc_golden: "Iconic Landmark",
    loc_moataz: "Architectural Vista",
    loc_plaza: "Al-Moameron Plaza",
    loc_falaky: "Mall & Commercial Hotel",
    loc_mandara: "Eco-Friendly Greens",
    loc_dar: "Comprehensive Hospital",
    loc_etd: "Industrial Complex",
    loc_hotel: "Contemporary Hotel",
    loc_azure: "Luxury Coastal Resort",
    loc_kinglife: "Elite King Life",
    loc_edu: "International Language School",

    badge_founded: "Foundation & Launch",
    badge_res_com: "Residential & Commercial",
    badge_mall_hotel: "Shopping Mall & Hotel",
    badge_healthcare: "Healthcare & Hospitals",
    badge_industrial: "Industrial & Manufacturing",
    badge_hospitality: "Hospitality & Tourism",
    badge_resort: "Residential & Tourism Resort",
    badge_education: "Education & Academies",

    hist_1980_title: "Inauguration in Alexandria",
    hist_1980_desc: "Establishment of Al-Moamron Al-Arab in Alexandria by Dr. Asaad Abdelmalek to set new benchmarks in construction and development.",
    hist_1997_gleem_title: "Gleem Tower",
    hist_1997_gleem_desc: "A prominent architectural landmark in upscale Gleem, offering fully integrated commercial and residential facilities.",
    hist_1997_louran_title: "Fayrouza Louran",
    hist_1997_louran_desc: "A distinguished residential and business landmark in the heart of Louran, blending classic elegance with modern amenities.",
    hist_2000_atebaa_title: "Al Atebaa Tower (Doctors Tower)",
    hist_2000_atebaa_desc: "Inaugurated as a multi-specialty medical clinic hub alongside residential and corporate offices in a prime urban location.",
    hist_2001_smouha_title: "Smouha Top House",
    hist_2001_smouha_desc: "An upscale residential-commercial project in prestigious Smouha, renowned for generous floor layouts and prime location.",
    hist_2001_mostakbal_title: "Almostakbal City",
    hist_2001_mostakbal_desc: "An integrated urban community delivering modern family housing, commercial centers, and planned lifestyle services.",
    hist_2003_golden_title: "Golden City Towers",
    hist_2003_golden_desc: "A landmark multi-tower complex setting a benchmark in contemporary architecture with state-of-the-art facilities.",
    hist_2005_moataz_title: "Almoataz Bellah Towers",
    hist_2005_moataz_desc: "An impressive tower complex reflecting modern structural engineering and integrated urban conveniences in Alexandria.",
    hist_2008_plaza_title: "Almoameron Plaza Towers",
    hist_2008_plaza_desc: "A flagship landmark bearing the group's name, harmonizing luxury residences with high-street commercial outlets.",
    hist_2008_falaky_title: "Al Falaky Mall & Hotel",
    hist_2008_falaky_desc: "A pioneering commercial and hospitality project combining a retail shopping mall with comfortable hotel units.",
    hist_2009_mandara_title: "Almandara Green",
    hist_2009_mandara_desc: "A forward-looking residential community focused on expansive green landscaping and a pristine living environment.",
    hist_2017_dar_title: "Dar Al Elag Hospital",
    hist_2017_dar_desc: "A major medical hospital equipped with cutting-edge surgical suites and advanced diagnostics delivering premier patient care.",
    hist_2018_etd_title: "ETD Industrial Factory",
    hist_2018_etd_desc: "A high-capacity industrial plant established to boost national production and supply quality industrial goods.",
    hist_2021_hotel_title: "Happy Stay Hotel",
    hist_2021_hotel_desc: "A contemporary hospitality destination offering premium accommodation and curated services for international travelers.",
    hist_2022_azure_title: "Sky Azure Resort",
    hist_2022_azure_desc: "A luxurious coastal resort combining panoramic sea views, modern leisure amenities, and upscale vacation units.",
    hist_2022_kinglife_title: "King Life Resort",
    hist_2022_kinglife_desc: "An elite gated development featuring world-class leisure facilities, scenic architecture, and family residences.",
    hist_2022_edu_title: "EDU International Language School",
    hist_2022_edu_desc: "A modern international educational campus applying interactive curricula to nurture future global leaders.",

    tag_contact: "Get In Touch",
    contact_title: "Ready to Discuss Investment & Growth",
    contact_subtitle: "Our executive advisory board is ready to explore your inquiries, partnerships, and megaprojects.",
    hq_title: "MAG Group Headquarters",
    hq_desc: "We look forward to welcoming you at our executive headquarters in Alexandria.",
    lbl_address: "Exact Address",
    val_address: "699 Al-Horeya Road (Abu Qir Rd), Tharwat / Louran, Alexandria, Egypt",
    lbl_phone: "Phone & Customer Care",
    lbl_whatsapp: "Investor WhatsApp Line",
    lbl_email: "Official Corporate Email",
    lbl_hours: "Business Working Hours",
    val_hours: "Saturday - Thursday: 9:00 AM - 5:00 PM",
    btn_open_google_maps: "Open Location Directly in Google Maps App",

    form_title: "Submit Investment or Inquiry Request",
    form_desc: "Fill in the details and the system will instantly prepare your message on WhatsApp for 1-click sending.",
    form_lbl_name: "Full Name *",
    ph_name: "Enter your full name",
    form_lbl_email: "Email Address *",
    ph_email: "example@domain.com",
    form_lbl_phone: "Phone / WhatsApp *",
    ph_phone: "+20 100 000 0000",
    form_lbl_sector: "Target Sector for Investment / Partnership",
    opt_infra: "Infrastructure & Real Estate Development",
    opt_energy: "Renewable Energy & Sustainability",
    opt_edu: "Education & Talent Academy",
    opt_health: "Healthcare & Specialized Hospitals",
    opt_hosp: "Hospitality, Hotels & Tourism",
    opt_ind: "Industrial & Manufacturing Supply",
    opt_general: "General Corporate Investment & Alliances",
    form_lbl_message: "Inquiry or Proposal Details *",
    ph_message: "Write your project scope or questions here...",
    btn_submit: "Send & Follow-up via WhatsApp",

    footer_brand: "Al-Moamron Al-Arab Development",
    footer_about: "A premier Egyptian investment conglomerate established in Alexandria in 1980, comprising 10 corporate divisions driving sustainable regional prosperity.",
    footer_col_links: "Quick Navigation",
    footer_col_divisions: "Development Sectors",
    footer_col_contact: "Headquarters & Info",
    footer_copyright: "© 1980 - 2026 Al-Moamron Al-Arab Development SAE (MAG). All Rights Reserved.",
    footer_credit: "Designed with Modern Ultra Luxury & Performance Standards"
  }
};

// ==========================================
// 2. حالة التطبيق والمحددات الرئيسية
// ==========================================
let currentLang = localStorage.getItem('mag_lang') || 'ar';
let currentTheme = localStorage.getItem('mag_theme') || 'dark';

const htmlEl = document.documentElement;
const langToggleBtn = document.getElementById('langToggleBtn');
const langText = document.getElementById('langText');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');
const mobLinks = document.querySelectorAll('.mob-link');
const contactForm = document.getElementById('contactForm');
const toastMessage = document.getElementById('toastMessage');

// ==========================================
// 3. نظام الترجمة وتغيير اللغة الفوري
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mag_lang', lang);

  htmlEl.setAttribute('lang', lang);
  htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  if (langText) {
    langText.textContent = lang === 'ar' ? 'EN' : 'عربي';
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    showToast(newLang === 'en' ? 'Language switched to English' : 'تم تغيير اللغة إلى العربية');
  });
}

// ==========================================
// 4. نظام تبديل الأنماط (Dark & Light Mode)
// ==========================================
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('mag_theme', theme);

  if (theme === 'light') {
    htmlEl.classList.remove('dark');
    htmlEl.classList.add('light');
  } else {
    htmlEl.classList.remove('light');
    htmlEl.classList.add('dark');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showToast(newTheme === 'light' ? 'تم تفعيل الوضع النهاري' : 'تم تفعيل الوضع الليلي الفاخر');
  });
}

// ==========================================
// 5. شريط التنقل والخط الذهبي التفاعلي (Scroll-Spy)
// ==========================================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    navLinks.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ==========================================
// 6. قائمة الموبايل المنزلقة
// ==========================================
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  mobLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

// ==========================================
// 7. تحويل الفورم مباشرة إلى واتساب (+201034187877)
// ==========================================
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const sector = document.getElementById('userSector').value;
    const message = document.getElementById('userMessage').value.trim();

    if (!name || !email || !phone || !message) {
      showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }

    const whatsappNumber = '201034187877';

    const textMessage = 
`*طلب استفسار واستثمار جديد - مجموعة المعمرون العرب (MAG)*
--------------------------------------
👤 *الاسم الكريم:* ${name}
📧 *البريد الإلكتروني:* ${email}
📱 *رقم الهاتف:* ${phone}
🏢 *القطاع المستهدف:* ${sector}
📝 *تفاصيل الاستفسار:*
${message}
--------------------------------------
*تم الإرسال عبر البوابة الرسمية للمجموعة*`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    showToast(currentLang === 'ar' ? 'جاري نقلك إلى محادثة واتساب الرسمية...' : 'Redirecting to official WhatsApp...');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      contactForm.reset();
    }, 800);
  });
}

// ==========================================
// 8. فلترة مشاريع المسار التاريخي
// ==========================================
const filterButtons = document.querySelectorAll('.t-filter-btn');
const timelineItems = document.querySelectorAll('.timeline-item');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    filterButtons.forEach((b) => b.classList.remove('active'));
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    timelineItems.forEach((item) => {
      const category = item.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ==========================================
// 9. عداد الأرقام التفاعلي (Animated Counters)
// ==========================================
let animated = false;
function animateCounters() {
  const statSection = document.querySelector('.hero-stats');
  if (!statSection) return;

  const rect = statSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight && !animated) {
    animated = true;
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / 45);

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = count;
        }
      }, 35);
    });
  }
}

window.addEventListener('scroll', animateCounters);

// ==========================================
// 10. محرك التمرير والظهور الحركي (Scroll Reveal Engine)
// ==========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(`
    .section-header,
    .about-text-col,
    .founder-card,
    .vision-card,
    .div-card,
    .team-card,
    .timeline-item,
    .contact-info-card,
    .contact-form-card
  `);

  animatedElements.forEach((el) => {
    el.classList.add('reveal-item');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -70px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => {
    revealObserver.observe(el);
  });
}

// ==========================================
// 11. إشعار Toast منبثق
// ==========================================
function showToast(msg) {
  if (!toastMessage) return;
  toastMessage.textContent = msg;
  toastMessage.classList.add('show');
  setTimeout(() => {
    toastMessage.classList.remove('show');
  }, 3500);
}

// ==========================================
// 12. التشغيل الأولي عند تحميل الصفحة
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLanguage(currentLang);
  updateActiveNavLink();
  animateCounters();
  initScrollAnimations();
});