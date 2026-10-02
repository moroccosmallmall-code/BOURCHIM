export interface RealEstateItem {
  id: string;
  title: string;
  type: 'apartment' | 'villa' | 'studio' | 'commercial' | 'office' | 'house';
  operation: 'rent' | 'sale';
  furnished: 'furnished' | 'unfurnished';
  price: number;
  priceLabel: string;
  city: string;
  cityNameAr: string;
  neighborhood: string;
  surface: number;
  rooms: string;
  floor?: string;
  image: string;
  photoCount: number;
  verified: boolean;
  listerType: 'owner' | 'agency' | 'promoter';
  listerName: string;
  description: string;
  amenities: string[];
}

export interface LearningTrack {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  levelBadge: string;
  icon: string;
  description: string;
  economicContext: string;
  prerequisites: string[];
  outcomes: string[];
  durationWeeks: number;
  levels: {
    levelNumber: string;
    levelTitle: string;
    duration: string;
    description: string;
    projects: string[];
    practicalRatio: string;
  }[];
  references: {
    title: string;
    tag: string;
    category: string;
    description: string;
    source: string;
    linkUrl?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface PartnershipItem {
  id: string;
  title: string;
  category: 'commerce' | 'startup' | 'supplier' | 'ecommerce' | 'freelancer' | 'industrial';
  categoryLabel: string;
  location: string;
  city: string;
  proponentName: string;
  proponentTitle: string;
  verified: boolean;
  availability: string;
  description: string;
  requiredContribution: string;
  offeredContribution: string;
  experienceYears: string;
  publishedTime: string;
  icon: string;
  legalContractReady: boolean;
}

export interface CommerceItem {
  id: string;
  title: string;
  category: string;
  price: number;
  unit: string;
  location: string;
  minOrder: string;
  sellerName: string;
  sellerType: string;
  verified: boolean;
  image: string;
  description: string;
}

export interface FreelancerItem {
  id: string;
  name: string;
  title: string;
  rate: number;
  rateUnit: string;
  city: string;
  rating: number;
  contractsCount: number;
  verified: boolean;
  skills: string[];
  image: string;
  description: string;
}

export const CITIES = [
  { id: 'casablanca', name: 'الدار البيضاء الكبرى', region: 'الدار البيضاء - سطات' },
  { id: 'rabat', name: 'الرباط - سلا - تمارة', region: 'الرباط - سلا - القنيطرة' },
  { id: 'tangier', name: 'طنجة وتطوان', region: 'طنجة - تطوان - الحسيمة' },
  { id: 'marrakech', name: 'مراكش الحمراء', region: 'مراكش - آسفي' },
  { id: 'agadir', name: 'أكادير وسوس', region: 'سوس - ماسة' },
  { id: 'fes', name: 'فاس ومكناس', region: 'فاس - مكناس' },
  { id: 'oriental', name: 'وجدة والجهة الشرقية', region: 'الجهة الشرقية' },
  { id: 'kenitra', name: 'القنيطرة', region: 'الرباط - سلا - القنيطرة' },
  { id: 'mohammedia', name: 'المحمدية', region: 'الدار البيضاء - سطات' },
  { id: 'sahara', name: 'العيون والداخلة', region: 'الأقاليم الجنوبية' },
];

export const INITIAL_REAL_ESTATE: RealEstateItem[] = [
  {
    id: 're-1',
    title: 'برطمة راقية مفروشة ومجهزة بالكامل مع مرآب',
    type: 'apartment',
    operation: 'rent',
    furnished: 'furnished',
    price: 8500,
    priceLabel: 'درهم / شهر',
    city: 'casablanca',
    cityNameAr: 'الدار البيضاء',
    neighborhood: 'حي المعاريف امتداد، بالقرب من الترامواي',
    surface: 95,
    rooms: '2 غرف + صالون',
    floor: '3 (مصعد)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc4ZCiuXw5h1KQMuMWbZLYMZ3MvcSmAyHLTXrhyIWo-SX5Y7_Z4OEQa4heB_fvrNOIPGVowN3gJsyaL9vEi-KfVqCGRSw1-R54BytoG45kalhlj1xq9a2JqL6FtEudbtwAliShfN_nGU3ByhOF93tmNt00K-A6XONe1P3_-QZhp8n-HKVRNPysIw3E2qM0aQAxcnwRrPJpyl-0JfGy6dNhw9iFFIgYumcb0GOZiH9Tllr7kfrGA1Ev',
    photoCount: 12,
    verified: true,
    listerType: 'owner',
    listerName: 'المهدي بوزيد',
    description: 'شقة فاخرة مشمسة بواجهتين في قلب حي المعاريف الراقي. صالون مغربي وعصري، غرفتا نوم بأرضية باركيه ومكيفات، مطبخ أمريكي مجهز بالكامل بالأجهزة الكهربائية ومرآب سيارات مسجل بالرسم العقاري.',
    amenities: ['مصعد', 'مرآب سيارة', 'شرفة', 'تكييف', 'أمن 24/7', 'مطبخ مجهز']
  },
  {
    id: 're-2',
    title: 'فيلا مستقلة حديثة البناء بمسبح وحديقة خاصة',
    type: 'villa',
    operation: 'sale',
    furnished: 'unfurnished',
    price: 3200000,
    priceLabel: 'درهم كلي',
    city: 'marrakech',
    cityNameAr: 'مراكش',
    neighborhood: 'طريق أوريكة، كيلومتر 9 في إقامة محروسة',
    surface: 420,
    rooms: '4 أجنحة ماستر',
    floor: 'R+1 مستقلة',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALrIMO6-WmT-jh-jAwkGm2-DQw6od0DLwejivxod56wbmIC5Vupph6a7HkhGyeo48hRAXN_PBmRx1kJ4hUVuzPELAJvwqXMDcewxVHv-GvKQdctFZZ1a9EPHbKxVj70S-O5PFrrLXVAi_2QR899PX3nVqMdVKSfAugPXEH2wzRRJ1eH1Qu-0v-6zw2rDO8nzloSHAP4dARwMT_X-FW4kVS-hHQoZkYd_HQgBVBinLqyRfrpWoYOY7L',
    photoCount: 24,
    verified: true,
    listerType: 'owner',
    listerName: 'الحاج عبد الرحيم الناصري',
    description: 'فيلا فخمة ذات تصميم معماري معاصر يمزج بين الأصالة المغربية والخطوط الحديثة. تتضمن مسبحاً خاصاً 8×4م، حديقة غناء بنخيل وأشجار زيتون، مطبخاً واسعاً، وتجهيزات طاقة شمسية رسم عقاري محفظ.',
    amenities: ['مسبح خاص', 'حديقة خاصة', 'رسم عقاري تيطر', 'طاقة شمسية', 'كاميرات مراقبة', 'غرفة حارس']
  },
  {
    id: 're-3',
    title: 'ستوديو هادئ ومودرن للطلبة والأطر الشابة',
    type: 'studio',
    operation: 'rent',
    furnished: 'furnished',
    price: 4200,
    priceLabel: 'درهم / شهر',
    city: 'rabat',
    cityNameAr: 'الرباط',
    neighborhood: 'حي أكدال الراقي، على بعد خطوات من محطة القطار',
    surface: 42,
    rooms: 'غرفة + صالة',
    floor: '2 (مصعد)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCto4CcMSXiFP-sEuuqCXpAB9yumVSwWW_jb60Qbs40OK-8_V1oDdlDO1Y9702UfLqDx9VxkWq7RrOyX7lyYVB69m3BhpIxGu9ACtHvBGfhmK18e07WIN94-XBLYrvbBOsi8TwrUbP7tkkAdp_bo8Dr4kNBZNnY4uTe9ZqhRXDjREFmLVSmxm6UNwpKIocpKikeZGkXR1TruqK_mTn5Qf3RNRne9BEByETdSMgotER8m2LxvS8p5NzJ',
    photoCount: 8,
    verified: true,
    listerType: 'owner',
    listerName: 'الأستاذة مريم الصنهاجي',
    description: 'ستوديو مفروش بالكامل (Clé en main) بديكور عصري وإضاءة دافئة. يشمل سريراً مريحاً، ركن مكتب للعمل والدراسة، صبيباً سريعاً للإنترنت بالألياف البصرية، ومطبخاً صغيراً ذكياً. واجب السنديك مشمول في السومة.',
    amenities: ['مصعد', 'إنترنت فايبر', 'تكييف', 'سنديك مشمول', 'قرب القطار']
  },
  {
    id: 're-4',
    title: 'شقة عائلية مطلة على البحر بمالاباطا (موقع استثنائي)',
    type: 'apartment',
    operation: 'sale',
    furnished: 'unfurnished',
    price: 1450000,
    priceLabel: 'درهم كلي',
    city: 'tangier',
    cityNameAr: 'طنجة',
    neighborhood: 'كورنيش مالاباطا، عمارة حديثة بحراسة 24/7',
    surface: 128,
    rooms: '3 غرف + صالون',
    floor: '6 (2 مصاعد)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8REZ1ysV8eWEo3pJrBSndvu2ZrpW2QiUNJ6MEN74YOk2l8pfiogd8AaPl55UM6s9KNQTCAwYiLknsvpaZqRxZLsRCF1eCIxgNUaCOj3S_JSHq28BHrvSfkj7Ignh-9_Ayeo01DJgBrIUJistJ8PsuGqTPI32zbZurBLneqHBlfWHJhH7o_h0xta0kpHpNBkvbziAptRBg7XrFq2GUecV5Gbq_ly_GyiOXqa6Zm-j1yB0_JE8NS7x4',
    photoCount: 16,
    verified: true,
    listerType: 'promoter',
    listerName: 'شركة البوغاز للإنعاش العقاري',
    description: 'شقة واسعة بإطلالة بانورامية ساحرة ومفتوحة على خليج طنجة والمضيق. رخام فاخر، نوافذ ممتدة من الأرض إلى السقف، غرف نوم رحبة مع خزانات مدمجة، وحمامين. تسليم فوري للمفاتيح.',
    amenities: ['إطلالة بحرية', 'مصعدان', 'مرآب تحت أرضي', 'حراسة 24/7', 'شرفة واسعة']
  },
  {
    id: 're-5',
    title: 'محل تجاري واسع مع سدة (Mezzanine) في شارع حيوي',
    type: 'commercial',
    operation: 'rent',
    furnished: 'unfurnished',
    price: 12000,
    priceLabel: 'درهم / شهر',
    city: 'casablanca',
    cityNameAr: 'الدار البيضاء',
    neighborhood: 'شارع 2 مارس، موقع استراتيجي ذو حركة مكثفة',
    surface: 110,
    rooms: 'محل + سدة مجهزة',
    floor: 'طابق أرضي',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADWRo267apiu1Zly5V22naj-eHWBO_3c5oXK4tYHUc9s0SPI9kh0WUEOxXsiHPWVGEPbYzy1IRzcxn9WcmzCqX6YBq8B8cf1-OLPgogUKJkWk34DVjZxinHqCUIf3BxYME0mM7U5PMMiIqUAmo7aAx7IYFHCdHgVYGJjLLErNt6Pi0DiZ3vJ5gUNxYidOVHiPa56wqMSRWZ7rj4_9BxhsRdNp8d1kVgpmQOW6FKubBCVM2PGACOk26',
    photoCount: 7,
    verified: true,
    listerType: 'owner',
    listerName: 'الحاج عمر بنجلون',
    description: 'محل تجاري جاهز للأنشطة المهنية والصيدليات أو عيادات ومتاجر الأزياء والتغذية الراقية. واجهة زجاجية عريضة 6 أمتار، سدة قانونية مساحتها 45م²، حمامين، عدادات ماء وكهرباء مستقلة (قوة ثلاثية Phase 380V). بدون سرتوت.',
    amenities: ['واجهة زجاجية', 'سدة مرخصة', 'كهرباء 380V', 'بدون سرتوت', 'موقع تجاري نشط']
  },
  {
    id: 're-6',
    title: 'فيلا جولف فخمة ومفروشة بالكامل داخل منتجع مغلق',
    type: 'villa',
    operation: 'rent',
    furnished: 'furnished',
    price: 25000,
    priceLabel: 'درهم / شهر',
    city: 'casablanca',
    cityNameAr: 'بوسكورة',
    neighborhood: 'المدينة الخضراء (Ville Verte)، حراسة وكاميرات 24/7',
    surface: 600,
    rooms: '5 أجنحة ماستر',
    floor: 'R+1 مستقلة',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOsBodW5l1_Ukot0uNGoNtsnM3FM6HOV0owrQgioI0UxkLRH_m4pmLHsh9uwuhr8aAJ5ZpmxWlOHnsKzHN8U3P1j5zOBB3V60UAOSaTJy1LUCN6zsbQ-z21n1NFtQ5Tt8XaxkVnmP556kDX1VX-iIFMMLek4fwhfK2jP-SQHraskl6YplcbmQZMylUBWVodO7M72iND8Qzkyf8vTm5ZB394W3C90iuKkA6xiH4WkFjRHdNVe4JkFpX',
    photoCount: 30,
    verified: true,
    listerType: 'owner',
    listerName: 'السيدة زهرة العلمي',
    description: 'فيلا استثنائية مؤثثة بالكامل بأفخر الماركات الإيطالية داخل المنتجع المغلق ببوسكورة. تطل على مساحات خضراء للجولف، مسبح خاص بنظام تدفئة، حديقة منسقة بعناية، أجنحة ماستر مع غرف ملابس واسعة وتكييف مركزي ذكي.',
    amenities: ['مسبح دافئ', 'إطلالة على الجولف', 'أثاث إيطالي', 'تكييف مركزي', 'غرفة مدبرة منزل', 'حراسة مدار الساعة']
  }
];

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: 'track-ecommerce',
    title: 'التجارة الإلكترونية والتسويق الرقمي المتقدم',
    subtitle: 'COD، متاجر، إعلانات، لوجستيك',
    badge: 'المسار الأكثر طلباً',
    levelBadge: '3 مستويات متكاملة',
    icon: 'shopping_cart_checkout',
    durationWeeks: 10,
    economicContext: 'تشهد منظومة التجارة الإلكترونية في المغرب والمنطقة نمواً سنوياً متسارعاً يتجاوز 25% مع تطور منصات الدفع عند الاستلام (COD)، والمحافظ الرقمية، وتوسع قنوات الشحن السريع في مختلف المدن والأقاليم. يجمع هذا المسار بين الاستراتيجيات التسويقية الميدانية الملائمة للسوق المحلي (فهم سلوك المشتري، الإعلانات عبر منصات التواصل، خدمة العملاء واللوجستيك)، وبين المعايير العالمية لإدارة الحملات الموجهة للأسواق الدولية.',
    description: 'خريطة طريق مهنية حقيقية مبنية خطوة بخطوة بالاستناد إلى مراجع دولية وتدريبات تطبيقية عملية ومشاريع قابلة للتنفيذ في الاقتصاد الرقمي المغربي.',
    prerequisites: [
      'حاسوب محمول أو مكتبي متصل بالإنترنت.',
      'إلمام أولي باستخدام المتصفح ومفاهيم المبيعات البسيطة.',
      'رغبة حقيقية في العمل التطبيقي والتعلم الذاتي المستمر.',
      'لا يشترط أي مؤهل تقني أو معرفة برمجية مسبقة.'
    ],
    outcomes: [
      'إيجاد واختبار المنتجات الرابحة واختيار الموردين الموثوقين بالمغرب.',
      'بناء متجر إلكتروني سريع ومتوافق مع الهواتف الذكية.',
      'إطلاق حملات إعلانية مربحة على TikTok، Facebook وInstagram.',
      'إدارة عمليات تأكيد الطلبات، التوصيل، وتقليل نسب الإرجاع إلى أقل من 15%.'
    ],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'الأساسيات وبناء المتجر',
        duration: 'أسبوعان',
        description: 'استيعاب أساسيات التجارة الرقمية، اختيار نموذج العمل (الدفع عند الاستلام مقابل الدفع المسبق)، تجهيز المتجر وصفحات الهبوط.',
        projects: [
          'متجر إلكتروني حي ومتكامل على منصة محلية أو عالمية.',
          'صفحة هبوط مخصصة لمنتج اختباري واحد مع زر واتساب مباشر.'
        ],
        practicalRatio: '70% عملي / 30% نظري'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'التسويق الإعلاني وقمع المبيعات',
        duration: '4 أسابيع',
        description: 'صناعة الإعلانات المرئية بالفيديو (UGC)، إطلاق حملات التحويل على تيك توك وميتا، تثبيت بيكسل التتبع وتحليل تكلفة الشراء (CPA).',
        projects: [
          'إطلاق حملة إعلانية حقيقية وتتبع مؤشرات الأداء ROAS.',
          'كتابة 3 نصوص إعلانية احترافية موجهة للمستهلك المغربي بالدارجة الراقية.'
        ],
        practicalRatio: '85% عملي / 15% نظري'
      },
      {
        levelNumber: 'المستوى 03',
        levelTitle: 'اللوجستيك والتوسع وبناء العلامة',
        duration: '4 أسابيع',
        description: 'مفاوضة شركات التوصيل، إنشاء مركز اتصال داخلي لتأكيد الطلبات، إدارة المخزون، وتحويل المنتجات الناجحة إلى علامة تجارية مسجلة.',
        projects: [
          'نظام إدارة أرباح ومصاريف ومخزون متكامل بالدرهم المغربي.',
          'عقد شراكة نموذجي مع موردين وشركة شحن وطنية.'
        ],
        practicalRatio: '90% عملي وميداني'
      }
    ],
    references: [
      {
        title: 'بوابة المقاول الذاتي (Auto-Entrepreneur)',
        tag: 'المغرب • مؤسسي',
        category: 'جهة رسمية',
        description: 'الدليل التشريعي والقانوني لبدء نشاط التجارة الإلكترونية بشكل قانوني معفى من الضريبة على القيمة المضافة حتى السقف المحدد.',
        source: 'Barid Al-Maghrib / CNEA'
      },
      {
        title: 'القانون رقم 31.08 لحماية المستهلك',
        tag: 'المغرب • قانوني',
        category: 'حماية المستهلك',
        description: 'الأحكام الصريحة المتعلقة بعقود البيع عن بعد وحق التراجع وسياسات الإرجاع المعتمدة رسمياً في المملكة المغربية.',
        source: 'وزارة الصناعة والتجارة المغربية'
      },
      {
        title: 'Google Skillshop & Meta Blueprint',
        tag: 'دولي • تقني ومعرفي',
        category: 'شهادات تقنية',
        description: 'أكاديميات القياس والإعلانات الرقمية الرسمية لاكتساب شهادات معتمدة في تحليلات GA4 وحملات Meta المتقدمة.',
        source: 'Google LLC / Meta Global'
      }
    ],
    faqs: [
      {
        question: 'هل أحتاج لرأس مال كبير لبدء تطبيق مسار التجارة الإلكترونية؟',
        answer: 'لا، يمكنك البدء في مرحلة التعلم بميزانيات اختبارية بسيطة جداً لا تتعدى مئات الدراهم لاختبار الإعلانات، أو حتى التخصص في تقديم الخدمات (مثل إدارة الإعلانات وصناعة المحتوى) لأصحاب المتاجر دون الحاجة لأي رأس مال للبضاعة.'
      },
      {
        question: 'هل الشهادة المقدمة عند إتمام المسار معترف بها رسمياً؟',
        answer: 'تمنح المنصة شهادة إنجاز رقمية وتطبيق عملي مبني على المشاريع، ونوجه المتعلمين لاجتياز الامتحانات الرسمية للشركات الراعية (مثل شهادات Google وMeta) والتي تعتبر المعيار المعتمد الأول عالمياً لدى الشركات وأصحاب المشاريع.'
      },
      {
        question: 'كيف أستفيد من الدعم عبر واتساب دون تعريض بياناتي للخطر؟',
        answer: 'زر الدعم عبر واتساب لا يعرض أي رقم على شاشتك لحماية خصوصيتك ويقوم بتوصيلك مباشرة بنظام توجيه أكاديمي داخلي مشفر يتبع لإدارة التكوين في بورشيم، حيث يتولى فريق الدعم الأكاديمي مساعدتك مجاناً.'
      }
    ]
  },
  {
    id: 'track-webdev',
    title: 'البرمجة وتطوير المواقع والتطبيقات',
    subtitle: 'Frontend, Backend, APIs, Full-stack',
    badge: 'كفاءة رقمية',
    levelBadge: '4 مشاريع حقيقية',
    icon: 'terminal',
    durationWeeks: 12,
    economicContext: 'يعد قطاع تكنولوجيا المعلومات في المغرب من أكثر القطاعات جذباً للاستثمارات الخارجية وفرص العمل عن بعد مع شركات أوروبية وخليجية، خصوصاً بعد إطلاق استراتيجية المغرب الرقمي 2030.',
    description: 'تعلّم تطوير الواجهات الأمامية والأنظمة الخلفية وقواعد البيانات مع بناء تطبيقات متجاوبة تربط بوابات الدفع المغربية CMI وخدمات الرسائل القصيرة.',
    prerequisites: ['حاسوب متوسط الأداء', 'شغف بحل المشكلات المنطقية', 'معرفة أولية باللغة الإنجليزية'],
    outcomes: ['إتقان React، TypeScript، Tailwind CSS', 'بناء واجهات API بـ Node.js وExpress', 'ربط قواعد البيانات ونشر التطبيقات السحابية'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'بناء الواجهات التفاعلية الحديثة',
        duration: '4 أسابيع',
        description: 'HTML5 الدلالي، Tailwind CSS، React Hooks، وإدارة الحالة.',
        projects: ['منصة إعلانات مغربية متكاملة متجاوبة مع الهاتف.'],
        practicalRatio: '80% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'الأنظمة الخلفية وقواعد البيانات',
        duration: '4 أسابيع',
        description: 'Node.js، REST APIs، التوثيق عبر JWT، وقواعد البيانات SQL/NoSQL.',
        projects: ['نظام مصادقة وإدارة صلاحيات آمن مع لوحة تحكم.'],
        practicalRatio: '85% عملي'
      },
      {
        levelNumber: 'المستوى 03',
        levelTitle: 'المشاريع المؤسساتية والدمج البنكي',
        duration: '4 أسابيع',
        description: 'ربط بوابات الدفع الإلكتروني المغربية واختبارات الأمان والنشر.',
        projects: ['تطبيق متكامل منشور سحابياً مع شهادة أمان SSL.'],
        practicalRatio: '90% عملي'
      }
    ],
    references: [
      {
        title: 'وثائق MDN Web Docs الرسمية',
        tag: 'دولي • مرجعي',
        category: 'توثيق تقني',
        description: 'المرجع الرسمي العالمي لمعايير الويب والتطوير الحديث.',
        source: 'Mozilla Developer Network'
      },
      {
        title: 'المغرب الرقمي 2030 (Morocco Digital)',
        tag: 'المغرب • حكومي',
        category: 'استراتيجية وطنية',
        description: 'خطة التحول الرقمي الوطني وبرامج دعم المقاولين التكنولوجيين.',
        source: 'وزارة الانتقال الرقمي وإصلاح الإدارة'
      }
    ],
    faqs: [
      {
        question: 'هل يمكنني العمل كفريلانسر بعد إنهاء هذا المسار؟',
        answer: 'نعم، المسار مصمم بالتركيز على تسليم مشاريع حقيقية يمكنك وضعها مباشرة في معرض أعمالك والتقدم بها للعملاء على منصة بورشيم أو المنصات العالمية.'
      }
    ]
  },
  {
    id: 'track-design',
    title: 'التصميم والغرافيك وتجربة المستخدم',
    subtitle: 'UI/UX، الهويات البصرية، Figma',
    badge: 'تصميم احترافي',
    levelBadge: '4 مشاريع عملية',
    icon: 'draw',
    durationWeeks: 8,
    economicContext: 'تزايد الطلب على المصممين المتخصصين في الهويات البصرية للشركات الناشئة والمتاجر المحلية مع انتقال الآلاف من الحرفيين والمقاولين إلى الفضاء الرقمي.',
    description: 'إتقان أدوات التصميم الحديثة مثل Figma، وتصميم واجهات وتطبيقات الويب والموبايل، وتطوير هويات بصرية أصيلة مستوحاة من الثقافة المغربية المعاصرة.',
    prerequisites: ['حاسوب قادر على تشغيل برامج التصميم المتصفحية', 'حس بصري واهتمام بالتفاصيل والألوان'],
    outcomes: ['إتقان أنظمة التصميم Design Systems على Figma', 'تصميم واجهات تطبيقات ومواقع كاملة', 'تجهيز هويات بصرية قابلة للطباعة والنشر'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'أساسيات الهوية البصرية والتايبوغرافي',
        duration: 'أسبوعان',
        description: 'نظرية الألوان، التيبوغرافيا العربية واللاتينية، تصميم الشعارات.',
        projects: ['دليل هوية بصرية كامل لعلامة تجارية مغربية ناشئة.'],
        practicalRatio: '75% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'تصميم واجهات الويب وتجربة المستخدم UI/UX',
        duration: '3 أسابيع',
        description: 'بناء النماذج الأولية Wireframes واختبار قابلية الاستخدام.',
        projects: ['تصميم واجهة متجر وتطبيق هاتف في Figma مع Prototyping تفاعلي.'],
        practicalRatio: '85% عملي'
      },
      {
        levelNumber: 'المستوى 03',
        levelTitle: 'تسليم التصاميم والعمل مع المطورين',
        duration: '3 أسابيع',
        description: 'Auto Layout، المتغيرات التصميمية، وتصدير الأصول للمبرمجين.',
        projects: ['نظام تصميم متكامل (Design System) متوافق مع معايير الإنتاج.'],
        practicalRatio: '90% عملي'
      }
    ],
    references: [
      {
        title: 'Figma Community & Design Education',
        tag: 'دولي • رسمي',
        category: 'أكاديمية فيغما',
        description: 'المسارات التكوينية الرسمية من شركة Figma لتصميم الأنظمة والواجهات.',
        source: 'Figma Inc.'
      }
    ],
    faqs: [
      {
        question: 'هل أحتاج لمهارات رسم باليد؟',
        answer: 'لا، تصميم الواجهات الرقمية وهندسة تجربة المستخدم يعتمدان أساساً على التفكير المنطقي، فهم سلوك المستخدم، وإتقان معايير التوزيع والتناسق.'
      }
    ]
  },
  {
    id: 'track-ai',
    title: 'الذكاء الاصطناعي التوليدي والإنتاجية',
    subtitle: 'Prompt Engineering، أتمتة الأعمال، أدوات المحتوى',
    badge: 'حديث ومطلوب',
    levelBadge: 'تطبيقي فوري',
    icon: 'psychology',
    durationWeeks: 6,
    economicContext: 'يساهم دمج أدوات الذكاء الاصطناعي في اختصار 60% من وقت كتابة المحتوى، معالجة البيانات، وصناعة الحملات الإعلانية للشركات المغربية والمقاولين الذاتيين.',
    description: 'تعلم فن هندسة الأوامر (Prompt Engineering)، أتمتة الأعمال المكتبية، وتحسين الإنتاجية الفردية والمؤسساتية بأمان وسرية.',
    prerequisites: ['استخدام يومي للحاسوب والإنترنت'],
    outcomes: ['إتقان كتابة الأوامر الاحترافية لنماذج الذكاء الاصطناعي', 'أتمتة المهام الروتينية', 'صناعة محتوى تسويقي احترافي متوافق مع السوق المحلي'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'أساسيات الذكاء الاصطناعي وهندسة الأوامر',
        duration: 'أسبوعان',
        description: 'بناء سياق دقيق، تقنيات Few-Shot، وصياغة موجهات تسويقية وإدارية.',
        projects: ['مكتبة أوامر متخصصة للمقاولين والتجار.'],
        practicalRatio: '80% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'أتمتة الأعمال وإنتاج المحتوى',
        duration: '4 أسابيع',
        description: 'ربط الأدوات الذكية مع جداول البيانات، البريد الإلكتروني، وقنوات التواصل.',
        projects: ['سير عمل مؤتمت بالكامل لخدمة العملاء وصناعة المحتوى.'],
        practicalRatio: '85% عملي'
      }
    ],
    references: [
      {
        title: 'Google Generative AI Documentation',
        tag: 'دولي • رسمي',
        category: 'ذكاء اصطناعي',
        description: 'الدليل الرسمي لهندسة الأوامر وتطوير الحلول الذكية.',
        source: 'Google DeepMind'
      }
    ],
    faqs: [
      {
        question: 'هل يعوض الذكاء الاصطناعي العمل البشري؟',
        answer: 'المسار يركز على تمكينك من استخدام الذكاء الاصطناعي كأداة مضاعفة لإنتاجيتك وقيمتك في سوق العمل وليس بديلاً عن التفكير النقدي.'
      }
    ]
  },
  {
    id: 'track-languages',
    title: 'اللغات الحية للأعمال والتعاقدات',
    subtitle: 'الإنجليزية المهنية، الفرنسية للأعمال',
    badge: 'تطبيقي وتواصلي',
    levelBadge: 'محاكاة واقعية',
    icon: 'translate',
    durationWeeks: 8,
    economicContext: 'تتطلب 85% من عقود العمل عن بعد والصفقات التصديرية إتقاناً للغة الفرنسية المؤسساتية أو الإنجليزية التجارية لصياغة الإيميلات والتفاوض الفعال.',
    description: 'محاور مكثفة في المحادثات المهنية، صياغة عروض الأسعار، والمراسلات الرسمية واجتياز مقابلات العمل الدولية.',
    prerequisites: ['مستوى أساسي في القراءة باللغة الفرنسية أو الإنجليزية'],
    outcomes: ['كتابة مراسلات وعروض رسمية بدون أخطاء', 'إجراء مقابلات واجتماعات تفاوض عبر الفيديو بثقة'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'المراسلات الرسمية وعروض الأعمال',
        duration: '4 أسابيع',
        description: 'صياغة الإيميلات التجارية، خطابات النوايا، والردود الاحترافية.',
        projects: ['ملف متكامل لعروض أسعار ومراسلات ثنائية اللغة.'],
        practicalRatio: '80% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'التفاوض والعرض الشفهي Pitching',
        duration: '4 أسابيع',
        description: 'تقنيات الإقناع الشفهي، العروض التقديمية، وإدارة المكالمات.',
        projects: ['محاكاة واقعية لمقابلة تعاقد أو تقديم مشروع أمام شركاء.'],
        practicalRatio: '85% عملي'
      }
    ],
    references: [
      {
        title: 'British Council & Institut Français Business Resources',
        tag: 'دولي • معتمد',
        category: 'لغات الأعمال',
        description: 'المعايير المعتمدة للإطار الأوروبي المرجعي للغات (CEFR).',
        source: 'Council of Europe'
      }
    ],
    faqs: [
      {
        question: 'هل يركز المسار على القواعد النظرية؟',
        answer: 'لا، التركيز ينصب على الجمل والتعابير اليومية الشائعة في المعاملات والمراسلات التجارية لتمكينك من العمل الفوري.'
      }
    ]
  },
  {
    id: 'track-accounting',
    title: 'المحاسبة والتسيير والضرائب المغربية',
    subtitle: 'تسيير مالي، فواتير، تصريحات DGI',
    badge: 'إداري وقانوني',
    levelBadge: 'تطابق مع DGI',
    icon: 'account_balance_wallet',
    durationWeeks: 6,
    economicContext: 'الالتزام الضريبي السليم وإدارة الفواتير والتدفق المالي (Cash Flow) هو الضامن الأساسي لاستمرار أي مشروع ناشئ أو تعاونية في المغرب.',
    description: 'شرح مبسط لقوانين المالية المغربية، الضريبة على الدخل، التصريح بالرقم المعاملاتي، إدارة تكاليف الشحن والمخزون ومسك الدفاتر المحاسبية.',
    prerequisites: ['معرفة أولية بالحساب والعمليات المكتبية'],
    outcomes: ['إعداد الفواتير المتوافقة مع القانون المغربي', 'حساب هوامش الربح الصافية بدقة', 'إدارة التصريحات الضريبية الدورية'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'التسيير المالي للمقاولات الصغرى',
        duration: '3 أسابيع',
        description: 'مسك الحسابات، ضبط المصاريف، وحساب هوامش الأرباح.',
        projects: ['جدول تسيير مالي تفاعلي لمشروع تجاري أو خدمي.'],
        practicalRatio: '85% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'النظام الضريبي والتصريحات الإلكترونية',
        duration: '3 أسابيع',
        description: 'بوابات المديرية العامة للضرائب (DGI)، والضمان الاجتماعي (CNSS).',
        projects: ['محاكاة كاملة لملف تصريح ضريبي سنوي وفصلي.'],
        practicalRatio: '90% عملي'
      }
    ],
    references: [
      {
        title: 'المديرية العامة للضرائب بالمغرب (DGI)',
        tag: 'المغرب • رسمي',
        category: 'إدارة الضرائب',
        description: 'الدليل العام للضرائب والمذكرات الدورية لمستجدات قانون المالية.',
        source: 'وزارة الاقتصاد والمالية'
      }
    ],
    faqs: [
      {
        question: 'هل هذا المسار كافٍ لمقاول ذاتي؟',
        answer: 'نعم، يغطي بدقة كل ما يحتاجه المقاول الذاتي أو التاجر الصغير لإدارة حساباته القانونية والضريبية بنفسه وبكل ثقة.'
      }
    ]
  },
  {
    id: 'track-entrepreneurship',
    title: 'ريادة الأعمال وبناء المشاريع الناشئة',
    subtitle: 'دراسة الجدوى، التمويل، برامج الدعم',
    badge: 'شامل وموجه',
    levelBadge: 'من الفكرة للتنفيذ',
    icon: 'rocket_launch',
    durationWeeks: 8,
    economicContext: 'توفر برامج الدعم الوطنية والمبادرة الوطنية للتنمية البشرية (INDH) فرصاً هائلة لتمويل المشاريع الشبابية التي تتوفر على دراسة جدوى متقنة.',
    description: 'خطوات تحويل الفكرة إلى مشروع قائم: دراسة السوق والمنافسين، خطة العمل (Business Plan)، استراتيجيات التسعير، واستقطاب الشركاء والممولين.',
    prerequisites: ['فكرة مشروع أو رغبة في استكشاف فرص استثمارية بالمغرب'],
    outcomes: ['صياغة دراسة جدوى متكاملة قابلة للتمويل', 'تحديد نموذج الربحية وقنوات التوزيع'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'اختبار الفكرة ودراسة الجدوى',
        duration: '4 أسابيع',
        description: 'نموذج العمل التجاري Business Model Canvas وبحث السوق الميداني.',
        projects: ['وثيقة دراسة جدوى شاملة وجاهزة للتقديم للمؤسسات التمويلية.'],
        practicalRatio: '80% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'التشغيل واستقطاب التمويل والشراكات',
        duration: '4 أسابيع',
        description: 'إعداد ملفات القروض والمنح، صياغة اتفاقيات الشركاء، وخطة الإطلاق.',
        projects: ['ملف عرض استثماري Pitch Deck مقنع ومختصر.'],
        practicalRatio: '85% عملي'
      }
    ],
    references: [
      {
        title: 'المركز الجهوي للاستثمار (CRI)',
        tag: 'المغرب • مؤسسي',
        category: 'الاستثمار الجهوي',
        description: 'المساطر الرسمية لإنشاء المقاولات والمزايا التحفيزية لكل جهة.',
        source: 'مراكز الاستثمار الجهوية بالمملكة'
      }
    ],
    faqs: [
      {
        question: 'هل يمكنني إيجاد شريك لمشروعي عبر المنصة؟',
        answer: 'نعم، قسم "ابحث عن شريك" في منصة بورشيم مصمم خصيصاً للربط بين أصحاب الأفكار والمستثمرين والشركاء التشغيليين.'
      }
    ]
  },
  {
    id: 'track-office',
    title: 'المهارات الرقمية والمكتبية المتقدمة',
    subtitle: 'Excel المتقدم، Google Workspace، الأتمتة',
    badge: 'أساسي لكل تخصص',
    levelBadge: 'أدوات الإنتاجية',
    icon: 'devices',
    durationWeeks: 6,
    economicContext: 'تعتبر مهارات جداول البيانات والتحليل المكتبي المطلب الأول المشترك في كافة الوظائف الإدارية والمالية وسلاسل التوريد بالمغرب.',
    description: 'احتراف دوال Excel المتقدمة (VLOOKUP, XLOOKUP, Pivot Tables)، إدارة المستودعات الرقمية، والربط السحابي مع Google Sheets وأدوات التقارير.',
    prerequisites: ['حاسوب وتطبيق جداول بيانات'],
    outcomes: ['بناء لوحات بيانات داشبورد تفاعلية', 'أتمتة الفواتير ومراقبة المخزون التجاري'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'إتقان الدوال وتحليل البيانات',
        duration: '3 أسابيع',
        description: 'الصيغ المعقدة، التنسيق الشرطي، والجداول المحورية.',
        projects: ['نظام مراقبة مبيعات ومخزون ديناميكي.'],
        practicalRatio: '90% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'التقارير السحابية والتكامل الرقمي',
        duration: '3 أسابيع',
        description: 'المشاركة السحابية، ربط النماذج، وتوليد الفواتير التلقائية.',
        projects: ['لوحة تحكم إدارية شاملة للمؤسسة أو المتجر.'],
        practicalRatio: '90% عملي'
      }
    ],
    references: [
      {
        title: 'Microsoft Learn Excel Specialist',
        tag: 'دولي • رسمي',
        category: 'شهادات مايكروسوفت',
        description: 'المسار التدريبي المعتمد لشهادة خبير إكسل الدولي.',
        source: 'Microsoft Corporation'
      }
    ],
    faqs: [
      {
        question: 'هل أحتاج لإصدار إكسل مدفوع؟',
        answer: 'يمكنك تطبيق كافة المشاريع باستخدام Google Sheets المجاني أو النسخ المكتبية المتوفرة.'
      }
    ]
  },
  {
    id: 'track-softskills',
    title: 'المهارات الشخصية والتفاوض وإدارة الصفقات',
    subtitle: 'إدارة الوقت، إقناع العملاء، حل النزاعات',
    badge: 'تطوير الذات المهنية',
    levelBadge: 'سلوكي وتطبيقي',
    icon: 'badge',
    durationWeeks: 4,
    economicContext: 'تؤكد الدراسات أن 70% من نجاح العقود والشراكات التجارية بالمغرب يعود للمهارات التواصلية، بناء الثقة، وإدارة العلاقات الإنسانية في العمل.',
    description: 'تقنيات التفاوض الميداني، إدارة التوتر والمواعيد النهائية، إقناع العملاء المترددين، وإدارة النزاعات التجارية باحترافية.',
    prerequisites: ['الرغبة في تطوير الثقة بالنفس والقيادة'],
    outcomes: ['إتقان أساليب الإقناع في المبيعات والتعاقدات', 'إدارة الوقت وتجنب التسويف في العمل الحر'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'فنون التفاوض وإبرام الصفقات',
        duration: 'أسبوعان',
        description: 'مبادئ التفاوض التكاملي (Win-Win)، قراءة لغة الجسد، ومعالجة الاعتراضات.',
        projects: ['خطة تفاوض مكتوبة لحسم صفقة تجارية كبرى.'],
        practicalRatio: '75% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'إدارة الذات وتنظيم العمل الحر',
        duration: 'أسبوعان',
        description: 'تنظيم الأولويات، بناء الثقة والمصداقية، وإدارة العلاقات الطويلة مع الزبائن.',
        projects: ['ميثاق عمل يومي واستراتيجية بناء سمعة مهنية قوية.'],
        practicalRatio: '80% عملي'
      }
    ],
    references: [
      {
        title: 'Harvard Program on Negotiation',
        tag: 'دولي • أكاديمي',
        category: 'علوم التفاوض',
        description: 'أهم الأبحاث والمبادئ المعتمدة في إدارة النزاعات والشراكات.',
        source: 'Harvard Law School'
      }
    ],
    faqs: [
      {
        question: 'هل يمكن اكتساب مهارات التفاوض بالتدريب؟',
        answer: 'نعم بالتأكيد، التفاوض مهارة سلوكية قابلة للتعلم والتطوير عبر التمارين والمحاكاة الواقعية.'
      }
    ]
  },
  {
    id: 'track-stores',
    title: 'إنشاء المتاجر الإلكترونية المتخصصة',
    subtitle: 'Shopify, WooCommerce, YouCan',
    badge: 'إنشاء متاجر',
    levelBadge: 'متاجر حية',
    icon: 'storefront',
    durationWeeks: 6,
    economicContext: 'تزايد الاعتماد على المتاجر المستقلة للحد من العمولات الكبيرة لمنصات التواصل وإتاحة تجربة شراء سلسة للزبون المغربي.',
    description: 'بناء وتخصيص المتاجر الإلكترونية على منصات YouCan وShopify وWooCommerce مع تخصيص قوالب متجاوبة وربط الإشعارات التلقائية عبر واتساب.',
    prerequisites: ['حاسوب متصل بالإنترنت'],
    outcomes: ['إنشاء متجر إلكتروني متكامل وجاهز للبيع الفوري', 'ربط شركات التوصيل وحساب تكاليف الشحن تلقائياً'],
    levels: [
      {
        levelNumber: 'المستوى 01',
        levelTitle: 'تثبيت وضبط المتجر وصفحات الشراء',
        duration: '3 أسابيع',
        description: 'شراء النطاق، تخصيص القالب، إضافة المنتجات والتصنيفات.',
        projects: ['متجر إلكتروني منشور مع تجربة شراء مكتملة.'],
        practicalRatio: '85% عملي'
      },
      {
        levelNumber: 'المستوى 02',
        levelTitle: 'تطبيقات التحويل وزيادة متوسط السلة',
        duration: '3 أسابيع',
        description: 'عروض الـ Upsell، مؤقتات الخصم، وسرعة تحميل الصفحات.',
        projects: ['متجر محسن لرفع معدل التحويل مع إحصائيات حية.'],
        practicalRatio: '90% عملي'
      }
    ],
    references: [
      {
        title: 'Shopify Partner Academy & YouCan Docs',
        tag: 'دولي ومحلي',
        category: 'منصات التجارة',
        description: 'الدليل الرسمي لتطوير وإدارة المتاجر الإلكترونية السريعة.',
        source: 'Shopify / YouCan'
      }
    ],
    faqs: [
      {
        question: 'ما هي المنصة الأنسب للمبتدئين في المغرب؟',
        answer: 'يقارن المسار بين YouCan (المتميزة في الدفع عند الاستلام بالمغرب) وShopify وWooCommerce لتختار الأنسب لميزانيتك ونوع منتجاتك.'
      }
    ]
  }
];

export const INITIAL_PARTNERSHIPS: PartnershipItem[] = [
  {
    id: 'pt-1',
    title: 'تطوير علامة مستحضرات تجميل ومكملات طبيعية مغربية',
    category: 'ecommerce',
    categoryLabel: 'شريك في التجارة الإلكترونية',
    location: 'الدار البيضاء، جهة الدار البيضاء - سطات',
    city: 'casablanca',
    proponentName: 'ص. كمال',
    proponentTitle: 'مدير تجاري معتمد',
    verified: true,
    availability: 'متاح فوراً',
    description: 'لدينا رخصة تصنيع وتعاقدات حصرية مع 4 تعاونيات لإنتاج زيت الأركان والتين الشوكي جنوب المغرب. نبحث عن شريك تجاري ذو خبرة قوية في الحملات الإعلانية المدفوعة (Media Buying) والتسويق الرقمي التفاعلي للتوسع نحو السوق الخليجي والأوروبي.',
    requiredContribution: 'جهد وخبرة تسويقية + إدارة متجر وتوسيع المبيعات',
    offeredContribution: 'المنتجات المرخصة + المستودع والشهادات الصحية المعتمدة',
    experienceYears: '4 سنوات نشاط',
    publishedTime: 'منذ يومين',
    icon: 'inventory_2',
    legalContractReady: true
  },
  {
    id: 'pt-2',
    title: 'منصة حجز رحلات النقل الميداني واللوجستيك الذكي',
    category: 'startup',
    categoryLabel: 'شريك في مشروع ناشئ',
    location: 'الرباط - حسان',
    city: 'rabat',
    proponentName: 'المهندس ياسين التازي',
    proponentTitle: 'مهندس برمجيات وريادي أعمال',
    verified: true,
    availability: 'قيد دراسة العروض',
    description: 'النموذج الأولي للحل البرمجي (MVP) مكتمل ويعمل بنجاح. نبحث عن شريك مستثمر (Angel Investor) أو شريك استراتيجي يمتلك أسطول سيارات أو شركة لوجستية لتسريع التواجد الميداني، مع حصة شراكة موثقة رسمياً لدى موثق قانوني.',
    requiredContribution: 'رأس مال تأسيسي (150,000 - 300,000 درهم) أو أسطول لوجستي',
    offeredContribution: 'المنتج التقني 100% + الفريق البرمجي ودراسة الجدوى المكتملة',
    experienceYears: 'سنتان',
    publishedTime: 'منذ 4 أيام',
    icon: 'computer',
    legalContractReady: true
  },
  {
    id: 'pt-3',
    title: 'شراكة تشغيل رياض تقليدي فندقي ومطعم سياحي',
    category: 'commerce',
    categoryLabel: 'شريك تجاري واستثماري',
    location: 'مراكش - المدينة القديمة',
    city: 'marrakech',
    proponentName: 'الحاج مولاي إدريس',
    proponentTitle: 'مالك عقار تجاري سياحي',
    verified: true,
    availability: 'متاح للمفاوضة',
    description: 'أمتلك رياضاً تاريخياً تم تجديده بالكامل يتضمن 8 أجنحة ومطعماً بإطلالة بانورامية. أبحث عن مدير فندقي محترف أو شركة إدارة ضيافة متخصصة لتولي التشغيل، الاستقبال، وحجوزات المنصات الدولية وفق نسبة من الأرباح الصافية.',
    requiredContribution: 'خبرة تشغيل فندقي + شبكة تسويق وحجوزات سياحية دولية',
    offeredContribution: 'العقار التجاري بالكامل مجهز ومرخص سياحياً في موقع استراتيجي',
    experienceYears: '8 سنوات في العقار',
    publishedTime: 'منذ أسبوع',
    icon: 'villa',
    legalContractReady: true
  },
  {
    id: 'pt-4',
    title: 'تصدير الفخار والخزف التقليدي العصري نحو الأسواق الدولية',
    category: 'industrial',
    categoryLabel: 'شريك نشاط محلي أو صناعي',
    location: 'فاس - عين قادوس',
    city: 'fes',
    proponentName: 'تعاونية الإتقان الفاسي',
    proponentTitle: 'تعاونية إنتاج حرفي معتمدة',
    verified: true,
    availability: 'متاح فوراً',
    description: 'وحدة إنتاجية متكاملة تضم 25 حرفياً محترفاً في صناعة الخزف والزليج بتصاميم حديثة مطابقة لمعايير السلامة الأوروبية. نبحث عن شريك تجاري أو شركة تصدير تمتلك شبكة توزيع في فرنسا أو كندا لتأمين طلبيات دورية منتظمة.',
    requiredContribution: 'عقود تصدير وتوزيع دولي + وساطة تجارية بالأسواق الخارجية',
    offeredContribution: 'طاقة إنتاجية كبرى وجودة معيارية وشهادات المنشأ الأصلية',
    experienceYears: '12 سنة خبرة',
    publishedTime: 'منذ يوم واحد',
    icon: 'precision_manufacturing',
    legalContractReady: true
  },
  {
    id: 'pt-5',
    title: 'توزيع مواد غذائية عضوية محلية معتمدة ONSSA',
    category: 'supplier',
    categoryLabel: 'مورد أو موزع معتمد',
    location: 'الرباط وسلا',
    city: 'rabat',
    proponentName: 'تعاونية الأطلس الأخضر',
    proponentTitle: 'وحدة فلاحية معتمدة',
    verified: true,
    availability: 'متاح فوراً',
    description: 'نحن وحدة إنتاج حاصلة على ترخيص السلامة الصحية. نبحث عن شريك تجاري يتوفر على مستودع وأسطول توزيع صغير (فارغونيت) لتغطية نقط البيع الكبرى ومحلات البقالة الراقية بالرباط وسلا والقنيطرة.',
    requiredContribution: 'لوجستيك وأسطول توزيع صغير + خبرة ميدانية في نقط البيع',
    offeredContribution: 'منتجات غذائية عضوية حصرية + ترخيص ONSSA + نسبة أرباح مجزية',
    experienceYears: '5 سنوات',
    publishedTime: 'منذ 3 أيام',
    icon: 'local_shipping',
    legalContractReady: true
  },
  {
    id: 'pt-6',
    title: 'تجهيز وتشغيل فضاء عمل مشترك واستوديو صناع محتوى',
    category: 'startup',
    categoryLabel: 'شريك تجاري واستثماري',
    location: 'طنجة وسط المدينة',
    city: 'tangier',
    proponentName: 'عادل السعيدي',
    proponentTitle: 'مستثمر عقاري',
    verified: true,
    availability: 'متاح للمفاوضة',
    description: 'يتوفر لدينا عقار تجاري مساحته 240 م² في موقع استراتيجي قرب محطة القطار طنجة المدينة. نبحث عن شريك ممول أو مشغل خبير في إدارة مساحات العمل المشتركة واستوديوهات البودكاست والتصوير.',
    requiredContribution: 'تمويل تجهيزات رقمية أو إدارة تشغيلية لمساحات العمل',
    offeredContribution: 'عقار تجاري مميز بموقع مركزي + دراسة جدوى جاهزة ومصادق عليها',
    experienceYears: '6 سنوات',
    publishedTime: 'منذ 5 أيام',
    icon: 'store',
    legalContractReady: true
  }
];

export const INITIAL_COMMERCE: CommerceItem[] = [
  {
    id: 'com-1',
    title: 'زيت أركان بيولوجي غذائي وتجميلي عصرة أولى باردة',
    category: 'منتجات طبيعية وتعاونيات',
    price: 190,
    unit: 'د.م. / للتر (جملة)',
    location: 'تارودانت • جهة سوس',
    minOrder: 'الحد الأدنى 20 لتر',
    sellerName: 'تعاونية بركة سوس',
    sellerType: 'تعاونية فلاحية مرخصة ONSSA',
    verified: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuCeYMFPTuYH_7FTLvog4vlDwxCN_xxyzToTd0FesUJt9Nt_8IsFqIE9Yv3gZrF7nOxz5ny2etci9u1mqjhbsXlizyFtjC7YSw8GAAFYTZ_1M-H3bvc6zB_ffPkJwAod-kBZcxj8SayoIFSvgfyGbcPZf3HX79VhLXQMEWRrXLb3vIT58DtV0k-_7lcbNIeCIzrOU2T-Pwnli03LoU26qWN0Z56u_TJH23D3FB6YhWTy2ozClWFz6i',
    description: 'شهادة التحليل المخبري متوفرة مع كل دفعة. شحن لجميع مدن المغرب مع إمكانية الدفع عند الاستلام بعد الفحص.'
  },
  {
    id: 'com-2',
    title: 'زعفران تاليوين حر وأصيل معتمد محلياً',
    category: 'منتجات طبيعية وتعاونيات',
    price: 32,
    unit: 'د.م. / للغرام (جملة)',
    location: 'تاليوين • تارودانت',
    minOrder: 'الحد الأدنى 100 غرام',
    sellerName: 'تعاونية ذهب الأطلس',
    sellerType: 'منتج محلي معتمد',
    verified: true,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    description: 'زعفران أحمر طبيعي 100% ذو نكهة قوية وجودة تصدير ممتازة. تغليف محكم ومطابق للمواصفات الصحية.'
  },
  {
    id: 'com-3',
    title: 'دفعة أغطية وسجاد مغربي بوهيمي (زربية بيني وراين)',
    category: 'الصناعة التقليدية المغربية',
    price: 850,
    unit: 'د.م. / للقطعة',
    location: 'مراكش • سيدي غانم',
    minOrder: 'الحد الأدنى 5 قطع',
    sellerName: 'ورشة أصالة الأطلس',
    sellerType: 'صانع تقليدي محترف',
    verified: true,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    description: 'صوف طبيعي خالص منسوج يدوياً بواسطة حرفيات الأطلس، تصاميم هندسية عصرية مطلوبة جداً في التصدير الداخلي والخارجي.'
  }
];

export const INITIAL_FREELANCERS: FreelancerItem[] = [
  {
    id: 'free-1',
    name: 'المهندس: يوسف بنجلون',
    title: 'تطوير منصات التجارة الإلكترونية وتطبيقات الهاتف',
    rate: 1800,
    rateUnit: 'د.م. / يوم عمل',
    city: 'الدار البيضاء • عمل عن بعد',
    rating: 4.9,
    contractsCount: 34,
    verified: true,
    skills: ['React', 'Next.js', 'Flutter', 'تكامل CMI', 'Node.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZBN8A_lG2Fieajf-cLF11xdPA5buW1fHpxe_yvgiYsJCJaWT72v93njDHN95niT3zZDwPNu4t5mxifGCCPBUYKaPTwNn59tQXZdv7J_evgv0BtwQH8AkbjJ8f507oSiBWw2422TyyYE9RQw5B7QH8K228ZDPKK851pTiooUbR6v6myz2F0Ht-k8qh3tkj9XyD32ppbejnl_xTjNPu3b56_VRy7_mS-c0T8Qpwl0BuBAkFsG8P-I6',
    description: 'خبرة 6 سنوات مع كبرى الشركات المغربية والخليجية. مقاول ذاتي معتمد رسمي مع إصدار فواتير قانونية وتكامل سريع مع أنظمة التوصيل والدفع الوطنية.'
  },
  {
    id: 'free-2',
    name: 'سلمى الإدريسي',
    title: 'خبيرة الحملات الإعلانية الممولة وإدارة المتاجر (Media Buyer)',
    rate: 1200,
    rateUnit: 'د.م. / يوم عمل',
    city: 'الرباط • عمل عن بعد',
    rating: 5.0,
    contractsCount: 42,
    verified: true,
    skills: ['TikTok Ads', 'Meta Blueprint', 'Google Ads', 'UGC Content', 'CRO'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    description: 'أكثر من 3 ملايين درهم مدارة في إعلانات التجارة الإلكترونية بالمغرب والخليج. تحقيق عوائد ROAS تتجاوز 4X مع استراتيجيات إبداعية بالدارجة المغربية.'
  },
  {
    id: 'free-3',
    name: 'حمزة المرابط',
    title: 'مصمم واجهات المستخدم وتجربة الاستخدام (UI/UX Designer)',
    rate: 1500,
    rateUnit: 'د.م. / يوم عمل',
    city: 'طنجة • عمل عن بعد',
    rating: 4.85,
    contractsCount: 28,
    verified: true,
    skills: ['Figma', 'Design Systems', 'Mobile App UI', 'Branding', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    description: 'تصميم تجارب استخدام رقمية سلسة وجذابة للمواقع والمتاجر والتطبيقات باللغتين العربية واللاتينية مع تسليم ملفات Figma منظمة بالكامل.'
  }
];
