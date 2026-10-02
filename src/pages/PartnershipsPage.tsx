import React, { useState, useMemo } from 'react';
import { 
  Handshake, 
  PlusCircle, 
  BookOpen, 
  ShieldCheck, 
  MapPin, 
  SlidersHorizontal, 
  Store, 
  Rocket, 
  Truck, 
  ShoppingCart, 
  Wrench, 
  Factory, 
  RotateCcw, 
  Send, 
  BadgeCheck, 
  FileText, 
  Lock, 
  CheckCircle2, 
  ArrowLeft,
  ChevronLeft,
  Flag
} from 'lucide-react';
import { PartnershipItem, CITIES } from '../data/mockData';

interface PartnershipsPageProps {
  partnershipList: PartnershipItem[];
  onSelectPartnership: (pt: PartnershipItem) => void;
  onOpenPostAd: (category?: string) => void;
  onOpenContractsGuide: () => void;
}

export const PartnershipsPage: React.FC<PartnershipsPageProps> = ({
  partnershipList,
  onSelectPartnership,
  onOpenPostAd,
  onOpenContractsGuide
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [contributionFilter, setContributionFilter] = useState<{
    capital: boolean;
    operational: boolean;
    premises: boolean;
    network: boolean;
  }>({
    capital: true,
    operational: true,
    premises: false,
    network: false
  });
  const [experienceLevel, setExperienceLevel] = useState<string>('all');
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>('latest');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [reportedId, setReportedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'الكل', count: '1,240+' },
    { id: 'commerce', label: 'شريك تجاري', count: '380+ طلب', icon: Store },
    { id: 'startup', label: 'شريك في مشروع ناشئ', count: '210+ فرصة', icon: Rocket },
    { id: 'supplier', label: 'مورد أو موزع معتمد', count: '175+ مورد', icon: Truck },
    { id: 'ecommerce', label: 'شريك في التجارة الإلكترونية', count: '290+ متجر', icon: ShoppingCart },
    { id: 'freelancer', label: 'متعاون مهني ومستقل', count: '140+ خبير', icon: Wrench },
    { id: 'industrial', label: 'شريك نشاط محلي أو صناعي', count: '95+ وحدة', icon: Factory }
  ];

  const filteredPartnerships = useMemo(() => {
    return partnershipList.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (selectedCity !== 'all' && item.city !== selectedCity) return false;
      if (verifiedOnly && !item.verified) return false;
      return true;
    });
  }, [partnershipList, selectedCategory, selectedCity, verifiedOnly]);

  const handleReport = (id: string) => {
    setReportedId(id);
    setTimeout(() => setReportedId(null), 2500);
  };

  return (
    <div className="flex flex-col w-full text-right">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        {/* 1. Breadcrumbs Nav */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <span>الرئيسية</span>
          <ChevronLeft className="w-3 h-3 text-slate-400" />
          <span>الشراكات والتعاون</span>
          <ChevronLeft className="w-3 h-3 text-slate-400" />
          <span className="text-[#006948] font-bold">ابحث عن شريك</span>
        </nav>

        {/* 2. Hero Callout */}
        <section className="relative rounded-3xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-amber-50/40 p-6 sm:p-10 shadow-xs border border-slate-200/80 overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#006948] text-xs font-bold w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>منظومة التعاقدات والشراكة الرسمية الموثقة بالمغرب</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                مساحة الشراكات والتعاون التجاري والمهني
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ابحث عن شريك موثوق لمشروعك، متجر إلكتروني، مورد جملة، أو متعاون مهني معتمد. جميع الملفات حقيقية وتمت الموافقة الصريحة من أصحابها للظهور وفق ضوابط الشفافية والمسؤولية المشتركة.
              </p>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl shadow-2xs border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span><strong>1,240+</strong> شراكة نشطة بالمغرب</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl shadow-2xs border border-slate-200">
                  <FileText className="w-3.5 h-3.5 text-[#006948]" />
                  <span><strong>100%</strong> ملفات تخضع للتدقيق الشكلي</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl shadow-2xs border border-slate-200">
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span>سرية تامة لأرقام الاتصال الشخصية</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onOpenPostAd('partnership')}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#006948] hover:bg-[#005137] text-white font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>نشر طلب شراكة أو تعاون جديد</span>
              </button>

              <button
                type="button"
                onClick={onOpenContractsGuide}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-slate-800 hover:bg-slate-100 border border-slate-200 font-semibold text-xs transition cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#006948]" />
                <span>دليل صياغة عقود الشراكة الآمنة</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. Categories Strip */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">أنواع الشراكات المتاحة</h2>
              <p className="text-xs text-slate-500">اختر النمط المناسب لمرحلة مشروعك الحالية</p>
            </div>
            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-semibold">
              6 تصنيفات رئيسية
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.slice(1).map((cat) => {
              const Icon = cat.icon || Store;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                  className={`group flex flex-col items-center text-center p-4 rounded-2xl transition cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 border-2 border-[#006948] shadow-xs'
                      : 'bg-white border border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-2 transition ${
                    isSelected ? 'bg-[#006948] text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-100'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">{cat.label}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">{cat.count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Granular Search & Refined Multi-Filter Rail + Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Right Side Filters Box (in RTL) */}
          <aside className="lg:col-span-4 flex flex-col gap-4 bg-white p-5 rounded-3xl shadow-xs border border-slate-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-[#006948]" />
                <span>تصفية الشركاء والفرص</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedCity('all');
                  setExperienceLevel('all');
                  setVerifiedOnly(true);
                }}
                className="text-slate-400 hover:text-rose-600 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>إعادة ضبط</span>
              </button>
            </div>

            {/* Filter: Domain */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">مجال المشروع والتخصص</label>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer ${
                      selectedCategory === c.id
                        ? 'bg-[#006948] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter: Moroccan Cities */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">المدينة والجهة بالمغرب</label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full h-10 px-3 pl-8 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white outline-hidden cursor-pointer"
                >
                  <option value="all">جميع المدن والجهات بالمملكة</option>
                  {CITIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} ({c.region})</option>
                  ))}
                  <option value="remote">عن بُعد / بدون قيود جغرافية</option>
                </select>
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Filter: Required Contribution */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">نوع المساهمة المطلوبة</label>
              <div className="flex flex-col gap-1.5 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={contributionFilter.capital}
                    onChange={(e) => setContributionFilter({...contributionFilter, capital: e.target.checked})}
                    className="accent-[#006948] rounded w-4 h-4"
                  />
                  <span>رأس مال وتمويل نقدي (حصة استثمارية)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={contributionFilter.operational}
                    onChange={(e) => setContributionFilter({...contributionFilter, operational: e.target.checked})}
                    className="accent-[#006948] rounded w-4 h-4"
                  />
                  <span>جهد تشغيلي وخبرة تخصصية</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={contributionFilter.premises}
                    onChange={(e) => setContributionFilter({...contributionFilter, premises: e.target.checked})}
                    className="accent-[#006948] rounded w-4 h-4"
                  />
                  <span>مقر تجاري أو مستودع مهني</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={contributionFilter.network}
                    onChange={(e) => setContributionFilter({...contributionFilter, network: e.target.checked})}
                    className="accent-[#006948] rounded w-4 h-4"
                  />
                  <span>شبكة علاقات وتوزيع وزبناء</span>
                </label>
              </div>
            </div>

            {/* Filter: Experience Level */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">مستوى الخبرة وسنوات النشاط</label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => setExperienceLevel(experienceLevel === 'beginner' ? 'all' : 'beginner')}
                  className={`py-1.5 px-2 rounded-lg border text-center transition cursor-pointer ${
                    experienceLevel === 'beginner' ? 'bg-[#006948] text-white border-[#006948]' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  أقل من سنتين
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceLevel(experienceLevel === 'intermediate' ? 'all' : 'intermediate')}
                  className={`py-1.5 px-2 rounded-lg border text-center transition cursor-pointer ${
                    experienceLevel === 'intermediate' ? 'bg-[#006948] text-white border-[#006948]' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  2 إلى 5 سنوات
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceLevel(experienceLevel === 'advanced' ? 'all' : 'advanced')}
                  className={`py-1.5 px-2 rounded-lg border text-center transition cursor-pointer ${
                    experienceLevel === 'advanced' ? 'bg-[#006948] text-white border-[#006948]' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  5 إلى 10 سنوات
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceLevel(experienceLevel === 'expert' ? 'all' : 'expert')}
                  className={`py-1.5 px-2 rounded-lg border text-center transition cursor-pointer ${
                    experienceLevel === 'expert' ? 'bg-[#006948] text-white border-[#006948]' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  +10 سنوات
                </button>
              </div>
            </div>

            {/* Verified Toggle */}
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">الملفات ذات الهوية الموثقة</span>
                  <span className="text-[10px] text-slate-500">تم التحقق من السجل التجاري / الهوية</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="accent-emerald-700 rounded w-4 h-4 cursor-pointer"
              />
            </div>
          </aside>

          {/* Left Side (Results Stream) */}
          <main className="lg:col-span-8 flex flex-col gap-4">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white px-5 py-3 rounded-2xl shadow-xs border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-slate-900">الطلبات المتاحة حالياً</span>
                <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  {filteredPartnerships.length} فرصة موافق عليها
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span>ترتيب حسب:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-8 px-2 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg outline-hidden cursor-pointer"
                >
                  <option value="latest">الأحدث نشراً</option>
                  <option value="ready">الأكثر جاهزية للتنفيذ</option>
                </select>
              </div>
            </div>

            {/* Reported Toast */}
            {reportedId && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-800 font-semibold animate-in fade-in">
                تم تسجيل إشعارك الإداري وسيقوم فريق مراجعة المحتوى في بورشيم بفحص الإعلان خلال ساعتين.
              </div>
            )}

            {/* Cards Stream */}
            <div className="flex flex-col gap-4">
              {filteredPartnerships.map((pt) => (
                <article
                  key={pt.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition flex flex-col gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006948] flex items-center justify-center shrink-0">
                        <Handshake className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-extrabold text-base text-slate-900">{pt.title}</h3>
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                            <BadgeCheck className="w-3 h-3" />
                            <span>شريك موثق</span>
                          </span>
                          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[10px] font-bold">
                            {pt.availability}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-slate-500 text-xs mt-1 flex-wrap">
                          <span className="font-semibold text-slate-700">{pt.proponentName} ({pt.proponentTitle})</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" />{pt.location}</span>
                          <span>•</span>
                          <span className="text-[#006948] font-bold">{pt.categoryLabel}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleReport(pt.id)}
                      title="إبلاغ عن محتوى"
                      className="text-slate-400 hover:text-rose-600 self-end sm:self-auto transition p-1"
                    >
                      <Flag className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>

                  {/* Contribution Comparison Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-400 text-[11px] block">المساهمة المطلوبة من الشريك:</span>
                      <strong className="text-[#006948] font-bold block mt-0.5">{pt.requiredContribution}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px] block">المساهمة المتوفرة لدينا:</span>
                      <strong className="text-slate-900 font-bold block mt-0.5">{pt.offeredContribution}</strong>
                    </div>
                  </div>

                  {/* Footer & CTA */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span>سجل النشاط: {pt.experienceYears}</span>
                      <span>•</span>
                      <span>تاريخ النشر: {pt.publishedTime}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-semibold">موافقة صريحة على النشر</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectPartnership(pt)}
                      className="px-5 py-2.5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>طلب التواصل ومشاركة التفاصيل</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-xs border border-slate-200 mt-2 text-xs">
              <button
                type="button"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold disabled:opacity-50"
              >
                الصفحة السابقة
              </button>

              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg bg-[#006948] text-white font-bold">1</button>
                <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">2</button>
                <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">3</button>
                <span className="px-1 text-slate-400">...</span>
                <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">12</button>
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
              >
                الصفحة التالية
              </button>
            </div>
          </main>
        </div>

        {/* 5. Institutional Transparency, Privacy & Safety Banner */}
        <section className="rounded-3xl bg-slate-100/70 p-6 sm:p-8 border border-slate-200/80 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[#006948] mb-1">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-extrabold text-base text-slate-900">
                  ضمانات الشفافية، الخصوصية، والتحقق المؤسسي
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                نلتزم في منصة بورشيم بحماية مجتمع الأعمال المغربي من الممارسات غير المشروعة وتوفير فضاء آمن ذي مصداقية عالية.
              </p>
            </div>

            <button
              onClick={onOpenContractsGuide}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 transition shrink-0"
            >
              ميثاق النزاهة والشراكة التجارية
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col gap-1.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-slate-900">حماية المعطيات الشخصية والخصوصية</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                لا تُعرض أرقام الهواتف أو الوثائق البنكية علناً أبداً. يمر التواصل عبر نظام مراسلة داخلي مشفر ولا تتبادل بيانات الاتصال إلا بالموافقة المتبادلة.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col gap-1.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-1">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-slate-900">موافقة صريحة وتدقيق الملفات</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                كل طلب شراكة يتم نشره يقتضي موافقة إلكترونية قانونية صريحة من صاحب الطلب، مع مراجعة إدارية لمنع الإعلانات المضللة أو عروض التوظيف المقنّعة.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col gap-1.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-1">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-slate-900">التأطير القانوني ونماذج العقود</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                توفر منصة بورشيم نماذج لعقود الشراكة المبدئية، واتفاقيات عدم الإفصاح (NDA)، والشركات المحاصة بالتعاون مع مستشارين قانونيين مغاربة.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
