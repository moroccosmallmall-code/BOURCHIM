import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  Laptop, 
  School, 
  Handshake, 
  ShieldCheck, 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  KeyRound, 
  PlusCircle, 
  BookOpen, 
  ShieldAlert, 
  Layers, 
  Lock, 
  Scale, 
  Headphones, 
  Clock, 
  CheckCircle,
  Eye,
  Star
} from 'lucide-react';
import { RealEstateItem, CommerceItem, FreelancerItem, PartnershipItem, CITIES } from '../data/mockData';

interface HomePageProps {
  onSelectTab: (tab: string) => void;
  onOpenAuth: () => void;
  onOpenPostAd: (category?: string) => void;
  onSelectProperty: (prop: RealEstateItem) => void;
  onSelectPartnership: (pt: PartnershipItem) => void;
  realEstateList: RealEstateItem[];
  partnershipList: PartnershipItem[];
  commerceList: CommerceItem[];
  freelancerList: FreelancerItem[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectTab,
  onOpenAuth,
  onOpenPostAd,
  onSelectProperty,
  onSelectPartnership,
  realEstateList,
  partnershipList,
  commerceList,
  freelancerList,
  searchQuery,
  onSearchChange
}) => {
  const [activeOmniTab, setActiveOmniTab] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const omniTabs = [
    { id: 'all', label: 'كل الأقسام', icon: Layers },
    { id: 'real_estate', label: 'العقارات', icon: Building2 },
    { id: 'commerce', label: 'السلع والتجارة', icon: Store },
    { id: 'remote_work', label: 'العمل عن بعد', icon: Laptop },
    { id: 'learning', label: 'التكوين والتعليم', icon: School },
    { id: 'partnerships', label: 'البحث عن شريك', icon: Handshake }
  ];

  const handleOmniTabClick = (tabId: string) => {
    setActiveOmniTab(tabId);
    if (tabId !== 'all') {
      onSelectTab(tabId);
    }
  };

  const handleExecuteSearch = () => {
    if (activeOmniTab !== 'all') {
      onSelectTab(activeOmniTab);
    } else {
      onSelectTab('real_estate');
    }
  };

  return (
    <div className="flex flex-col w-full text-right">
      {/* 1. TOP WELCOME & SEARCH CANVAS */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eaf2ee]/80 via-[#f2f7f4]/40 to-[#faf8ff] py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-teal-200/25 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          {/* Breadcrumb / Status Badge Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-2xs border border-slate-200/60">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">جلسة موثقة • لوحة المشترك المركزية</span>
              <span className="text-[10px] text-[#006948] bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                الحساب موثق بالهوية الوطنية
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-slate-500 text-xs">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>آخر تحديث للنظام: اليوم 11:42</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#006948] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ضمان المعاملات نشط</span>
              </span>
            </div>
          </div>

          {/* Welcome Headline & Trust Score Card */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs sm:text-sm text-[#006948] font-extrabold tracking-wide block mb-1">
                بوابة الخدمات والاقتصاد الرقمي الموحدة بالمملكة
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                مرحباً بك في <span className="text-[#006948]">BOURCHIM</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                منصتكم المتكاملة للخدمات، الأعمال، العقارات والتعلم في المغرب — صممت لتبسيط المعاملات وتنمية المشاريع بكل أمان وموثوقية.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-xs border border-slate-200/70 shrink-0">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#006948] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">مستوى موثوقية ملفك</div>
                <div className="text-sm font-extrabold text-emerald-800">درجة ممتازة (98%)</div>
              </div>
            </div>
          </div>

          {/* Unified Omni-Search Container */}
          <div className="w-full bg-white rounded-3xl shadow-lg border border-slate-200/80 p-4 sm:p-6 flex flex-col gap-4">
            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {omniTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeOmniTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleOmniTabClick(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition cursor-pointer ${
                      isActive
                        ? 'bg-[#006948] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-6 relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="اكتب كلمة مفتاحية، نوع عقار، كفاءة، منتج، أو مشروع شراكة..."
                  className="w-full h-12 pr-10 pl-3 rounded-xl bg-slate-50 text-slate-900 text-xs sm:text-sm border border-slate-200 focus:bg-white focus:border-[#006948] outline-hidden transition"
                />
              </div>

              <div className="md:col-span-3 relative flex items-center">
                <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 pointer-events-none" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full h-12 pr-10 pl-3 rounded-xl bg-slate-50 text-slate-800 text-xs sm:text-sm border border-slate-200 focus:bg-white focus:border-[#006948] outline-hidden cursor-pointer"
                >
                  <option value="">جميع مدن المملكة (الدار البيضاء، الرباط...)</option>
                  {CITIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <button
                  type="button"
                  onClick={handleExecuteSearch}
                  className="w-full h-12 rounded-xl bg-[#006948] hover:bg-[#005137] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>ابحث الآن في المنظومة</span>
                </button>
              </div>
            </div>

            {/* Fast Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
              <span className="text-slate-800 font-bold">عمليات بحث شائعة:</span>
              <button 
                onClick={() => { onSearchChange('طنجة'); onSelectTab('real_estate'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                كراء شقق مفروشة طنجة
              </button>
              <button 
                onClick={() => { onSearchChange('Flutter'); onSelectTab('remote_work'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                مطور Flutter عمل عن بعد
              </button>
              <button 
                onClick={() => { onSearchChange('زيت أركان'); onSelectTab('commerce'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                زيت أركان أصلي بالجملة
              </button>
              <button 
                onClick={() => { onSearchChange('ممول'); onSelectTab('partnerships'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                شريك ممول مشروع قهوة مختصة
              </button>
              <button 
                onClick={() => { onSelectTab('learning'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                دعم مدرسي وتكوين مهني
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAJOR FAST ACTIONS ROW (Hero High-Conversion Shortcuts) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-6 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Real Estate Direct Action */}
          <div
            onClick={() => onSelectTab('real_estate')}
            className="group relative overflow-hidden bg-gradient-to-br from-[#006948] to-[#00855d] text-white p-5 rounded-2xl shadow-md flex flex-col justify-between min-h-[160px] cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <KeyRound className="w-5 h-5" />
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 font-bold">
                إجراء مباشر
              </span>
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-snug">بيعي عقارك أو كري عقارك مباشرة</h2>
              <p className="text-xs text-white/80 mt-1">إيداع الملف، الصور، والتسعير الموثق في دقائق</p>
            </div>
          </div>

          {/* Card 2: Post Ad */}
          <div
            onClick={() => onOpenPostAd()}
            className="group bg-white text-slate-900 p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between min-h-[160px] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <PlusCircle className="w-5 h-5" />
              </span>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">انشر إعلاناً جديداً</h2>
              <p className="text-xs text-slate-500 mt-1">منتجات للبيع، معدات تجارية، خدمات وطلبات خاصة</p>
            </div>
          </div>

          {/* Card 3: Find Partner */}
          <div
            onClick={() => onSelectTab('partnerships')}
            className="group bg-white text-slate-900 p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between min-h-[160px] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </span>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">ابحث عن شريك تجاري أو مهني</h2>
              <p className="text-xs text-slate-500 mt-1">تشارك في الاستثمار، التوزيع، إدارة المشاريع والخبرات</p>
            </div>
          </div>

          {/* Card 4: Learning Library */}
          <div
            onClick={() => onSelectTab('learning')}
            className="group bg-white text-slate-900 p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between min-h-[160px] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </span>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">تصفح مكتبة التعلم والتكوين</h2>
              <p className="text-xs text-slate-500 mt-1">مسارات رقمية تطبيقية، ورشات معتمدة ودورات عملية</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VERTICAL SECTORS */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold mb-1">
              <Layers className="w-4 h-4" />
              <span>الهيكلة الشاملة للمنصة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">أقسام منظومة بورشيم المتخصصة</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            فضاءات منظمة ومراقبة تلبي احتياجات الأفراد، أرباب الأسر، المقاولين الذاتيين، وأصحاب الشركات داخل المغرب وخارجه.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vertical 1: Commerce */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006948] flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  تجارة فورية
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">التجارة والبيع والشراء</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                منظومة متكاملة لتبادل السلع الجديدة والمستعملة وعروض البيع بالجملة المباشرة من المنتجين.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['الملابس والأزياء', 'الإلكترونيات والتقنية', 'الأثاث والديكور', 'المنتجات المحلية الطبيعية', 'الصناعة التقليدية', 'عروض الجملة'].map((sub, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectTab('commerce')}
                className="text-xs text-[#006948] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>دخول سوق التجارة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-400">وساطة محمية</span>
            </div>
          </div>

          {/* Vertical 2: Real Estate */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800">
                  كراء وبيع موثوق
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">العقارات والأصول (كراء / بيع)</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                شبكة الإعلانات العقارية المباشرة بين الملاك والمكترين والمشترين دون عمولات مبالغ فيها.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['شقق سكنية للبيع', 'كراء شهري وسنوي', 'ستوديوهات مفروشة', 'فيلات ورياضات', 'محلات ومكاتب تجارية', 'أراضي فلاحية'].map((sub, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectTab('real_estate')}
                className="text-xs text-[#006948] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>استعراض دليل العقارات</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-emerald-700 font-semibold">تحقق من الملكية</span>
            </div>
          </div>

          {/* Vertical 3: Remote Work */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center">
                  <Laptop className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800">
                  اقتصاد حر
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">العمل من المنزل والمهن</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                مساحة مخصصة للعمل المستقل والتعاقدات عن بعد، للشباب والكفاءات والمستقلين في المغرب.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['خدمات رقمية ومصغرة', 'إدارة المتاجر الإلكترونية', 'تصميم الجرافيك والهويات', 'برمجة الويب وتطبيقات', 'الترجمة وكتابة المحتوى'].map((sub, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectTab('remote_work')}
                className="text-xs text-[#006948] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>سوق العمل المستقل</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-400">عقود إلكترونية</span>
            </div>
          </div>

          {/* Vertical 4: Learning */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <School className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800">
                  تأهيل مهني
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">التعلم والتكوين المستمر</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                مسارات تطبيقية خطوة بخطوة موجهة لسوق الشغل المغربي وتطوير المهارات المربحة.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['التجارة الإلكترونية المحلية (COD)', 'الحرف والمهن اليدوية', 'المحاسبة والتدبير المالي', 'إتقان اللغات للأعمال'].map((sub, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectTab('learning')}
                className="text-xs text-[#006948] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>استكشاف الدورات المتاحة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-400">شهادات إتمام</span>
            </div>
          </div>

          {/* Vertical 5: Academic Support */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-800 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-800">
                  دعم أكاديمي
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">الدراسة والتعليم والدعم المدرسي</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                ربط مباشر بين خيرة الأساتذة والطلبة والتلاميذ في كافة المستويات الدراسية عبر ربوع المملكة.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['دروس الدعم للبكالوريا (علمي وأدبي)', 'مستوى الإعدادي والتأهيلي', 'مباريات المدارس العليا', 'مرافقة جامعية وتأطير'].map((sub, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectTab('learning')}
                className="text-xs text-[#006948] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>دليل الأساتذة والمراكز</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-400">حضوري وعن بعد</span>
            </div>
          </div>

          {/* Vertical 6: '3almi Wladek' */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-800">
                  فضاء الأسرة والطفل
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">قسم «علمي ولادك»</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                مساحة دافئة صممت لمساعدة الأمهات والآباء على تأطير أبنائهم في القراءة، السلوك، والأنشطة التفاعلية.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['التعليم الأولي والحساب المبكر', 'حفظ القرآن الكريم والأخلاق', 'تطوير النطق واللغات', 'أنشطة صيفية ومهارات'].map((sub, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectTab('learning')}
                className="text-xs text-[#006948] font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>دخول فضاء التربية والطفولة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-emerald-700 font-semibold">محتوى هادف وآمن</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL FIELD VERIFIED LISTINGS SECTION */}
      <section className="w-full bg-slate-100/70 py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="bg-white p-6 rounded-3xl shadow-xs border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006948] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">العروض الميدانية الحقيقية النشطة</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    بيانات موثوقة 100%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  تصفح آخر المعاملات التي تمت مراجعتها بدقة من طرف مدققي المنصة مع إثبات الهوية والملكية.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectTab('real_estate')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
              >
                عرض كل العقارات
              </button>
              <button
                onClick={() => onSelectTab('commerce')}
                className="px-4 py-2 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold transition shadow-xs"
              >
                تصفح سوق التجارة
              </button>
            </div>
          </div>

          {/* Real Listings 3 Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Verified Real Estate */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={realEstateList[0]?.image}
                  alt={realEstateList[0]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-slate-900 text-[11px] font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>عقار تم فحصه ميدانياً</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                  {realEstateList[0]?.cityNameAr} • حي المعاريف
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-lg font-black text-[#006948]">
                      {realEstateList[0]?.price.toLocaleString('fr-FR')} <span className="text-xs text-slate-500 font-normal">د.م. / شهرياً</span>
                    </span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      كراء مفروش بالكامل
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{realEstateList[0]?.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {realEstateList[0]?.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">المالك: {realEstateList[0]?.listerName}</span>
                  <button
                    onClick={() => onSelectProperty(realEstateList[0])}
                    className="px-3.5 py-1.5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold transition cursor-pointer"
                  >
                    طلب المعاينة
                  </button>
                </div>
              </div>
            </article>

            {/* Card 2: Wholesale Commerce */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={commerceList[0]?.image}
                  alt={commerceList[0]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-slate-900 text-[11px] font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>تعاونية فلاحية مرخصة ONSSA</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                  تارودانت • جهة سوس
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-lg font-black text-[#006948]">
                      {commerceList[0]?.price} <span className="text-xs text-slate-500 font-normal">{commerceList[0]?.unit}</span>
                    </span>
                    <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-bold">
                      {commerceList[0]?.minOrder}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{commerceList[0]?.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {commerceList[0]?.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">{commerceList[0]?.sellerName}</span>
                  <button
                    onClick={() => onSelectTab('commerce')}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                  >
                    طلب عينة للتجربة
                  </button>
                </div>
              </div>
            </article>

            {/* Card 3: Verified Freelance Engineer */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={freelancerList[0]?.image}
                  alt={freelancerList[0]?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-slate-900 text-[11px] font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>مقاول ذاتي معتمد رسمي</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                  {freelancerList[0]?.city}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-lg font-black text-[#006948]">
                      {freelancerList[0]?.rate.toLocaleString()} <span className="text-xs text-slate-500 font-normal">{freelancerList[0]?.rateUnit}</span>
                    </span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      تقييم {freelancerList[0]?.rating}/5 ({freelancerList[0]?.contractsCount} عقد)
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{freelancerList[0]?.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {freelancerList[0]?.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">{freelancerList[0]?.name}</span>
                  <button
                    onClick={() => onSelectTab('remote_work')}
                    className="px-3.5 py-1.5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold transition cursor-pointer"
                  >
                    طلب دراسة مشروع
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Transparency Commitment Box */}
          <div className="w-full bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006948] flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900">ميثاق المصداقية والأمان في المعاملات</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  «العروض تخضع للمصادقة وتحديثات العارضين الحقيقيين - لم يتم نشر عروض تجريبية احتراماً لمبدأ الشفافية وحماية للمشتركين.» تخضع جميع الإعلانات والوثائق للتحقق المالي والقانوني الميداني قبل النشر العام.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenPostAd()}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold shadow-xs transition"
              >
                إرسال إعلانك للمراجعة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC "FIND A PARTNER" HUB SECTION */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white rounded-3xl p-6 sm:p-10 shadow-xs border border-amber-200/70 relative overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-1.5 text-amber-900 text-xs font-extrabold mb-1">
                <Handshake className="w-4 h-4" />
                <span>مسار ريادة الأعمال والاستثمار التشاركي بالمغرب</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                ابحث عن شريك تجاري، تقني أو ممول لمشروعك
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                لا داعي لبدء المشروع وحدك. منصة بورشيم توفر بيئة قانونية منظمة لربط حاملي الأفكار الواعدة مع الكفاءات الميدانية والمستثمرين في التجارة، الخدمات وسلاسل التوزيع في المغرب.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onSelectTab('partnerships')}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>طرح فرصة شراكة جديدة</span>
              </button>
              <button
                onClick={() => onSelectTab('partnerships')}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                استعراض كافة الشراكات
              </button>
            </div>
          </div>
        </div>

        {/* 3 Active Partnerships Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnershipList.slice(0, 3).map((pt) => (
            <div
              key={pt.id}
              className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-bold text-[10px]">
                    {pt.categoryLabel}
                  </span>
                  <span className="text-[11px] text-slate-400">{pt.location}</span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {pt.description}
                </p>

                <div className="bg-slate-50 p-3 rounded-2xl space-y-1 text-xs text-slate-700 mb-4 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-400">المساهمة المطلوبة:</span>
                    <span className="font-bold text-[#006948] text-[11px]">{pt.requiredContribution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">المساهمة المتوفرة:</span>
                    <span className="font-bold text-slate-800 text-[11px]">{pt.offeredContribution}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>ملف موثق قانونياً</span>
                </span>
                <button
                  onClick={() => onSelectPartnership(pt)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#006948] hover:text-white text-slate-800 text-xs font-bold transition cursor-pointer"
                >
                  تواصل لمناقشة العقد
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRUST, SAFETY & ESCROW INFRASTRUCTURE PILLARS */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50/60 border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-emerald-100/70 text-[#006948] flex items-center justify-center mb-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">هويات موثقة بدقة</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              ربط وتأكيد الحسابات عبر البطاقة الوطنية الإلكترونية والسجلات التجارية الرسمية للحد التام من التدليس.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50/60 border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-emerald-100/70 text-[#006948] flex items-center justify-center mb-1">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">ضمان أموال المعاملات (Escrow)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              حجز مبالغ الخدمات والتسليم في حساب مؤمن إلى حين معاينة السلعة أو استلام الخدمة كما اتفق عليها.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50/60 border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center mb-1">
              <Scale className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">نماذج عقود قانونية جاهزة</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              نماذج متوافقة مع القانون المغربي للكراء، العمل عن بعد، والشراكات التجارية قابلة للتوقيع الفوري.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50/60 border border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center mb-1">
              <Headphones className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">مواكبة هاتفية وميدانية</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              فريق دعم مغربي مختص يرافقك في إتمام الصفقات العقارية الكبرى وعقود التوريد وحل أي نزاع فوري.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
