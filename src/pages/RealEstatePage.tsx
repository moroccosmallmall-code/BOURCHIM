import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  KeyRound, 
  Search, 
  SlidersHorizontal, 
  RotateCcw, 
  Home, 
  CheckCircle, 
  Eye, 
  Phone, 
  ShieldCheck, 
  Check, 
  Flame, 
  Armchair,
  Layers,
  ChevronLeft
} from 'lucide-react';
import { RealEstateItem, CITIES } from '../data/mockData';

interface RealEstatePageProps {
  realEstateList: RealEstateItem[];
  onSelectProperty: (prop: RealEstateItem) => void;
  onOpenPostAd: (category?: string) => void;
}

export const RealEstatePage: React.FC<RealEstatePageProps> = ({
  realEstateList,
  onSelectProperty,
  onOpenPostAd
}) => {
  const [operation, setOperation] = useState<'rent' | 'sale'>('rent');
  const [furnishedFilter, setFurnishedFilter] = useState<'all' | 'furnished' | 'unfurnished'>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [neighborhoodQuery, setNeighborhoodQuery] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minSurface, setMinSurface] = useState<string>('');
  const [maxSurface, setMaxSurface] = useState<string>('');
  const [selectedRooms, setSelectedRooms] = useState<string>('all');
  const [selectedLister, setSelectedLister] = useState<string>('all');
  const [selectedAmenity, setSelectedAmenity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('latest');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const propertyTypes = [
    { id: 'all', label: 'جميع العقارات' },
    { id: 'villa', label: 'فيلا (Villa)' },
    { id: 'apartment', label: 'برطمة / شقة (Appartement)' },
    { id: 'studio', label: 'ستوديو (Studio)' },
    { id: 'house', label: 'منزل مستقل (Maison R+)' },
    { id: 'room', label: 'غرفة للشباب / الطلبة' },
    { id: 'commercial', label: 'محل تجاري (Commerce)' },
    { id: 'office', label: 'مكتب مهني (Bureau)' }
  ];

  const resetAllFilters = () => {
    setOperation('rent');
    setFurnishedFilter('all');
    setSelectedType('all');
    setSelectedCity('all');
    setNeighborhoodQuery('');
    setMinPrice('');
    setMaxPrice('');
    setMinSurface('');
    setMaxSurface('');
    setSelectedRooms('all');
    setSelectedLister('all');
    setSelectedAmenity('all');
    setSortBy('latest');
    setCurrentPage(1);
  };

  const filteredProperties = useMemo(() => {
    return realEstateList.filter((item) => {
      if (item.operation !== operation) return false;
      if (furnishedFilter !== 'all' && item.furnished !== furnishedFilter) return false;
      if (selectedType !== 'all' && item.type !== selectedType) return false;
      if (selectedCity !== 'all' && item.city !== selectedCity) return false;
      if (neighborhoodQuery && !item.neighborhood.toLowerCase().includes(neighborhoodQuery.toLowerCase()) && !item.title.toLowerCase().includes(neighborhoodQuery.toLowerCase())) {
        return false;
      }
      if (minPrice && item.price < Number(minPrice)) return false;
      if (maxPrice && item.price > Number(maxPrice)) return false;
      if (minSurface && item.surface < Number(minSurface)) return false;
      if (maxSurface && item.surface > Number(maxSurface)) return false;
      if (selectedLister !== 'all' && item.listerType !== selectedLister) return false;
      if (selectedAmenity !== 'all') {
        const amenityMap: Record<string, string> = {
          elevator: 'مصعد',
          parking: 'مرآب سيارة',
          balcony: 'شرفة',
          pool: 'مسبح'
        };
        const searchKeyword = amenityMap[selectedAmenity];
        if (searchKeyword && !item.amenities.some(a => a.includes(searchKeyword))) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'surface_desc') return b.surface - a.surface;
      return 0; // latest
    });
  }, [
    realEstateList,
    operation,
    furnishedFilter,
    selectedType,
    selectedCity,
    neighborhoodQuery,
    minPrice,
    maxPrice,
    minSurface,
    maxSurface,
    selectedLister,
    selectedAmenity,
    sortBy
  ]);

  const rentCount = realEstateList.filter(i => i.operation === 'rent').length + 1536;
  const saleCount = realEstateList.filter(i => i.operation === 'sale').length + 876;

  return (
    <div className="flex flex-col w-full text-right">
      {/* Interactive Top Action & Status Notice Strip */}
      <section className="w-full bg-slate-100/80 px-4 sm:px-6 lg:px-8 py-2.5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#006948]" />
            <span className="font-bold text-slate-900">ميثاق الثقة العقارية بالمغرب:</span>
            <span>لا توجد عروض مختلقة أو وهمية؛ جميع الإعلانات مفحوصة ومحققة ميدانياً ورقمياً.</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 text-emerald-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>2,418 عقار محقق ونشط</span>
            </span>
            <span>•</span>
            <span>تحديث مباشر بالدرهم المغربي (MAD)</span>
          </div>
        </div>
      </section>

      {/* Header & Quick Action Buttons */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1 hover:text-[#006948] transition cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span>الرئيسية</span>
            </span>
            <ChevronLeft className="w-3 h-3 text-slate-400" />
            <span className="text-[#006948] font-bold">العقارات (كراء / بيع)</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                البوابة الوطنية الموحدة للعقارات
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                ابحث، اكري، أو اشترِ شققاً، فيلات، ومحلات تجارية موثوقة في جميع جهات ومدن المملكة المغربية.
              </p>
            </div>

            {/* Quick Publish CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onOpenPostAd('real_estate')}
                className="group flex items-center gap-1.5 px-4 sm:px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer"
              >
                <KeyRound className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>بيعي عقارك الآن</span>
                <span className="text-amber-200 text-[11px] font-normal mr-1">(بدون عمولة خفية)</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenPostAd('real_estate')}
                className="group flex items-center gap-1.5 px-4 sm:px-5 py-3 rounded-2xl bg-[#006948] hover:bg-[#005137] text-white font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer"
              >
                <Building2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>كري عقارك الآن</span>
                <span className="text-emerald-200 text-[11px] font-normal mr-1">(عقد موثق وضمان)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Operation Switcher: Rent vs Buy */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-4 max-w-7xl mx-auto">
        <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex flex-wrap items-center gap-2 shadow-2xs border border-slate-200">
          <button
            type="button"
            onClick={() => setOperation('rent')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              operation === 'rent'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'bg-transparent text-slate-700 hover:bg-white/80'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>كراء العقارات</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold mr-1 ${
              operation === 'rent' ? 'bg-[#005137] text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              {rentCount} متاح
            </span>
          </button>

          <button
            type="button"
            onClick={() => setOperation('sale')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              operation === 'sale'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'bg-transparent text-slate-700 hover:bg-white/80'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>بيع العقارات</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold mr-1 ${
              operation === 'sale' ? 'bg-[#005137] text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              {saleCount} متاح
            </span>
          </button>
        </div>
      </section>

      {/* Furnished / Unfurnished Mandatory Bar */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-6 max-w-7xl mx-auto">
        <div className="bg-white p-4 rounded-3xl shadow-xs border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#006948] flex items-center justify-center shrink-0">
              <Armchair className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs sm:text-sm text-slate-900">
                  حالة التأثيث (إلزامي للشقق والفيلات والاستوديوهات)
                </span>
                <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md text-[10px] font-bold">
                  تحديد دقيق
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                تصفح العقارات حسب جاهزية الأثاث والديكور بدون خلط أو إعلانات ملتبسة
              </p>
            </div>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-2xl gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setFurnishedFilter('all')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                furnishedFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              الكل
            </button>
            <button
              type="button"
              onClick={() => setFurnishedFilter('furnished')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                furnishedFilter === 'furnished'
                  ? 'bg-white text-[#006948] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Armchair className="w-3.5 h-3.5 text-[#006948]" />
              <span>مفروشة (Meublé)</span>
            </button>
            <button
              type="button"
              onClick={() => setFurnishedFilter('unfurnished')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                furnishedFilter === 'unfurnished'
                  ? 'bg-white text-amber-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>غير مفروشة (Vide)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Filters Panel */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-3xl shadow-xs border border-slate-200 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-extrabold text-base text-slate-900">
              <SlidersHorizontal className="w-5 h-5 text-[#006948]" />
              <span>منظومة الفرز والبحث العقاري المتخصص بالمغرب</span>
            </div>

            <button
              type="button"
              onClick={resetAllFilters}
              className="text-slate-500 hover:text-rose-600 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة ضبط المعايير</span>
            </button>
          </div>

          {/* Property Types Rail */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">نوع العقار المطلوب:</label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {propertyTypes.map((pt) => (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => setSelectedType(pt.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    selectedType === pt.id
                      ? 'bg-[#006948] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Granular Grid Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* City */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">المدينة والجهة</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full h-10 px-3 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl focus:bg-white outline-hidden cursor-pointer"
              >
                <option value="all">كل مدن المغرب</option>
                {CITIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Neighborhood */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">الحي أو المنطقة</label>
              <div className="relative">
                <input
                  type="text"
                  value={neighborhoodQuery}
                  onChange={(e) => setNeighborhoodQuery(e.target.value)}
                  placeholder="مثال: المعاريف، أكدال، مالاباطا..."
                  className="w-full h-10 px-3 pl-8 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl focus:bg-white outline-hidden"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">السعر بالدرهم (MAD)</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="الأدنى"
                  className="w-1/2 h-10 px-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl text-left outline-hidden"
                />
                <span className="text-slate-400 text-xs">-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="الأقصى"
                  className="w-1/2 h-10 px-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl text-left outline-hidden"
                />
              </div>
            </div>

            {/* Surface Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">المساحة (م²)</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  value={minSurface}
                  onChange={(e) => setMinSurface(e.target.value)}
                  placeholder="من 40 م²"
                  className="w-1/2 h-10 px-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl text-left outline-hidden"
                />
                <span className="text-slate-400 text-xs">-</span>
                <input
                  type="number"
                  value={maxSurface}
                  onChange={(e) => setMaxSurface(e.target.value)}
                  placeholder="إلى 450 م²"
                  className="w-1/2 h-10 px-2.5 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl text-left outline-hidden"
                />
              </div>
            </div>

            {/* Rooms */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">عدد الغرف</label>
              <select
                value={selectedRooms}
                onChange={(e) => setSelectedRooms(e.target.value)}
                className="w-full h-10 px-3 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl focus:bg-white outline-hidden cursor-pointer"
              >
                <option value="all">أي عدد من الغرف</option>
                <option value="1">ستوديو / غرفة واحدة</option>
                <option value="2">غرفتان وصالون</option>
                <option value="3">3 غرف وصالون</option>
                <option value="4">4 غرف فأكثر</option>
              </select>
            </div>

            {/* Lister / Ownership */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">نوع العارض / الملكية</label>
              <select
                value={selectedLister}
                onChange={(e) => setSelectedLister(e.target.value)}
                className="w-full h-10 px-3 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl focus:bg-white outline-hidden cursor-pointer"
              >
                <option value="all">الكل (مالك مباشر ووكالات)</option>
                <option value="owner">من المالك مباشرة (Sans Intermédiaire)</option>
                <option value="agency">وكالة عقارية معتمدة وموثوقة</option>
                <option value="promoter">منعش عقاري (مشاريع جديدة)</option>
              </select>
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">المصعد والراحة</label>
              <select
                value={selectedAmenity}
                onChange={(e) => setSelectedAmenity(e.target.value)}
                className="w-full h-10 px-3 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl focus:bg-white outline-hidden cursor-pointer"
              >
                <option value="all">الكل</option>
                <option value="elevator">يتوفر على مصعد (Ascenseur)</option>
                <option value="parking">مرآب سيارة محجوز (Garage)</option>
                <option value="balcony">شرفة أو تيراس (Terrasse)</option>
                <option value="pool">مسبح خاص / مشترك</option>
              </select>
            </div>

            {/* Result Counter & Search Status */}
            <div className="flex items-end">
              <div className="w-full h-10 px-4 rounded-xl bg-emerald-50 text-[#006948] font-bold text-xs flex items-center justify-between border border-emerald-200">
                <span>النتائج المطابقة:</span>
                <span className="text-sm">{filteredProperties.length} عقار</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Results Showcase */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto flex flex-col gap-6">
        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006948]"></span>
            <h2 className="text-lg font-black text-slate-900">
              العقارات المتاحة حالياً والموثوقة
            </h2>
            <span className="text-xs text-slate-500">(تم تدقيق الوثائق والصور)</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>ترتيب حسب:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 px-3 bg-white border border-slate-200 text-slate-800 text-xs rounded-xl outline-hidden cursor-pointer"
            >
              <option value="latest">الأحدث إضافة وتحديثاً</option>
              <option value="price_asc">الأقل سعراً أولاً</option>
              <option value="price_desc">الأعلى سعراً أولاً</option>
              <option value="surface_desc">الأكبر مساحة</option>
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 flex flex-col items-center justify-center gap-3">
            <Building2 className="w-12 h-12 text-slate-300" />
            <h3 className="font-bold text-slate-800 text-base">لا توجد عقارات تطابق معايير التصفية الحالية</h3>
            <p className="text-xs text-slate-500 max-w-sm">
              جرب تغيير المدينة، أو توسيع نطاق السعر والمساحة، أو إعادة ضبط الفلاتر.
            </p>
            <button
              onClick={resetAllFilters}
              className="mt-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
            >
              إعادة ضبط المعايير
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((prop) => (
              <article
                key={prop.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-700 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs">
                        <CheckCircle className="w-3 h-3" />
                        <span>فحص ميداني مؤكد</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-bold">
                        {prop.operation === 'rent' ? 'كراء شهري' : 'للبيع محفظ'}
                      </span>
                    </div>

                    {/* Furnished Stamp */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[#006948] text-[11px] font-bold flex items-center gap-1 shadow-xs">
                        <Armchair className="w-3.5 h-3.5" />
                        <span>
                          {prop.furnished === 'furnished' ? 'مفروشة بالكامل (Meublé Luxe)' : 'غير مفروشة (Vide)'}
                        </span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded bg-slate-900/80 text-white text-[10px] font-bold">
                        {prop.photoCount} صور
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xl font-black text-[#006948]">
                          {prop.price.toLocaleString('fr-FR')}{' '}
                          <span className="text-xs text-slate-500 font-normal">{prop.priceLabel}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold">
                          {prop.listerType === 'owner' ? 'من المالك مباشرة' : 'وكالة معتمدة'}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">
                        {prop.title}
                      </h3>

                      <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="line-clamp-1">{prop.cityNameAr} • {prop.neighborhood}</span>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 bg-slate-50 rounded-2xl px-3 text-center border border-slate-100">
                      <div>
                        <span className="block text-[10px] text-slate-400">المساحة</span>
                        <span className="text-xs font-bold text-slate-900">{prop.surface} م²</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400">الغرف</span>
                        <span className="text-xs font-bold text-slate-900 truncate">{prop.rooms}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400">الطابق</span>
                        <span className="text-xs font-bold text-slate-900 truncate">{prop.floor || 'R+1'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-5 pb-5 pt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProperty(prop)}
                    className="flex-1 h-10 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>تواصل مع المالك</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProperty(prop)}
                    title="معاينة التفاصيل"
                    className="px-3 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Bar */}
        <div className="w-full bg-white p-4 rounded-3xl shadow-xs border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <span className="text-xs text-slate-500">
            عرض {filteredProperties.length} من أصل {operation === 'rent' ? rentCount : saleCount} عقاراً معتمداً يطابق اختياراتك
          </span>

          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3.5 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition disabled:opacity-50 cursor-pointer"
            >
              السابق
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#006948] text-white font-bold">1</button>
            <button className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700">2</button>
            <button className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700">3</button>
            <span className="text-slate-400 px-1">...</span>
            <button className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700">14</button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3.5 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
            >
              التالي
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
