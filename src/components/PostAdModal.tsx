import React, { useState } from 'react';
import { X, Building2, Store, Laptop, Handshake, CheckCircle2, Upload, MapPin } from 'lucide-react';
import { CITIES, RealEstateItem, PartnershipItem, CommerceItem } from '../data/mockData';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  onAddRealEstate: (item: RealEstateItem) => void;
  onAddPartnership: (item: PartnershipItem) => void;
  onAddCommerce: (item: CommerceItem) => void;
}

export const PostAdModal: React.FC<PostAdModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'real_estate',
  onAddRealEstate,
  onAddPartnership,
  onAddCommerce
}) => {
  const [adCategory, setAdCategory] = useState<string>(initialCategory);
  
  // Generic fields
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('casablanca');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Real estate specific
  const [reOperation, setReOperation] = useState<'rent' | 'sale'>('rent');
  const [reFurnished, setReFurnished] = useState<'furnished' | 'unfurnished'>('furnished');
  const [reType, setReType] = useState<'apartment' | 'villa' | 'studio' | 'commercial'>('apartment');
  const [reSurface, setReSurface] = useState('85');
  const [reRooms, setReRooms] = useState('2 غرف + صالون');

  // Partnership specific
  const [ptCategory, setPtCategory] = useState<'commerce' | 'startup' | 'supplier' | 'ecommerce'>('ecommerce');
  const [requiredContribution, setRequiredContribution] = useState('');
  const [offeredContribution, setOfferedContribution] = useState('');

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (adCategory === 'real_estate') {
      const selectedCityObj = CITIES.find(c => c.id === city);
      const newProp: RealEstateItem = {
        id: `re-${Date.now()}`,
        title: title || 'عقار جديد معتمد',
        type: reType,
        operation: reOperation,
        furnished: reFurnished,
        price: Number(price) || (reOperation === 'rent' ? 6500 : 1200000),
        priceLabel: reOperation === 'rent' ? 'درهم / شهر' : 'درهم كلي',
        city: city,
        cityNameAr: selectedCityObj?.name || 'الدار البيضاء',
        neighborhood: 'موقع حيوي واستراتيجي',
        surface: Number(reSurface) || 85,
        rooms: reRooms,
        floor: 'طابق مجهز',
        image: imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc4ZCiuXw5h1KQMuMWbZLYMZ3MvcSmAyHLTXrhyIWo-SX5Y7_Z4OEQa4heB_fvrNOIPGVowN3gJsyaL9vEi-KfVqCGRSw1-R54BytoG45kalhlj1xq9a2JqL6FtEudbtwAliShfN_nGU3ByhOF93tmNt00K-A6XONe1P3_-QZhp8n-HKVRNPysIw3E2qM0aQAxcnwRrPJpyl-0JfGy6dNhw9iFFIgYumcb0GOZiH9Tllr7kfrGA1Ev',
        photoCount: 6,
        verified: true,
        listerType: 'owner',
        listerName: 'المعلن المعتمد',
        description: description || 'عقار مفحوص وموثق تم إيداعه للمراجعة المباشرة.',
        amenities: ['مصعد', 'مرآب سيارة', 'شرفة', 'حراسة']
      };
      onAddRealEstate(newProp);
    } else if (adCategory === 'partnership') {
      const selectedCityObj = CITIES.find(c => c.id === city);
      const newPt: PartnershipItem = {
        id: `pt-${Date.now()}`,
        title: title,
        category: ptCategory,
        categoryLabel: ptCategory === 'ecommerce' ? 'شريك في التجارة الإلكترونية' : 'شريك تجاري واستثماري',
        location: `${selectedCityObj?.name || 'الدار البيضاء'} - جهة مركزية`,
        city: city,
        proponentName: 'صاحب المبادرة',
        proponentTitle: 'مقاول معتمد',
        verified: true,
        availability: 'متاح فوراً',
        description: description || 'مشروع واعد يبحث عن شريك استراتيجي وفق عقد قانوني واضح.',
        requiredContribution: requiredContribution || 'رأس مال أو خبرة تسويقية',
        offeredContribution: offeredContribution || 'منتجات ومقر تجاري',
        experienceYears: 'سنتان',
        publishedTime: 'الآن',
        icon: 'handshake',
        legalContractReady: true
      };
      onAddPartnership(newPt);
    } else {
      // Commerce
      const newCom: CommerceItem = {
        id: `com-${Date.now()}`,
        title: title,
        category: 'السلع والتجارة المباشرة',
        price: Number(price) || 250,
        unit: 'د.م. / قطعة',
        location: `${city} • المغرب`,
        minOrder: 'الحد الأدنى 10 قطع',
        sellerName: 'مورد معتمد',
        sellerType: 'تاجر جملة معتمد',
        verified: true,
        image: imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuCeYMFPTuYH_7FTLvog4vlDwxCN_xxyzToTd0FesUJt9Nt_8IsFqIE9Yv3gZrF7nOxz5ny2etci9u1mqjhbsXlizyFtjC7YSw8GAAFYTZ_1M-H3bvc6zB_ffPkJwAod-kBZcxj8SayoIFSvgfyGbcPZf3HX79VhLXQMEWRrXLb3vIT58DtV0k-_7lcbNIeCIzrOU2T-Pwnli03LoU26qWN0Z56u_TJH23D3FB6YhWTy2ozClWFz6i',
        description: description || 'منتج عالي الجودة مع إمكانية الدفع عند الاستلام بعد الفحص.'
      };
      onAddCommerce(newCom);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-6 sm:p-8 text-right my-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2 text-[#006948]">
            <Building2 className="w-5 h-5" />
            <h3 className="font-extrabold text-lg text-slate-900">نشر إعلان أو عرض جديد في المنظومة</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="font-bold text-lg text-slate-900">تم إرسال إعلانك بنجاح!</h4>
            <p className="text-xs text-slate-500 max-w-xs">
              تم إدراج الإعلان في المنظومة وسيظهر فوراً في صفحات العروض المعتمدة.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Category Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">اختر القسم المستهدف:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setAdCategory('real_estate')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer flex flex-col items-center gap-1 ${
                    adCategory === 'real_estate'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-emerald-700" />
                  <span>عقار (بيع / كراء)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAdCategory('partnership')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer flex flex-col items-center gap-1 ${
                    adCategory === 'partnership'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <Handshake className="w-4 h-4 text-emerald-700" />
                  <span>طلب شراكة</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAdCategory('commerce')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer flex flex-col items-center gap-1 ${
                    adCategory === 'commerce'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <Store className="w-4 h-4 text-emerald-700" />
                  <span>سلع وتجارة</span>
                </button>
              </div>
            </div>

            {/* Real Estate Specific Controls */}
            {adCategory === 'real_estate' && (
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">نوع العملية</label>
                    <div className="flex bg-white rounded-lg p-0.5 border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setReOperation('rent')}
                        className={`flex-1 py-1 text-xs font-bold rounded-md ${reOperation === 'rent' ? 'bg-[#006948] text-white' : 'text-slate-600'}`}
                      >
                        كراء
                      </button>
                      <button
                        type="button"
                        onClick={() => setReOperation('sale')}
                        className={`flex-1 py-1 text-xs font-bold rounded-md ${reOperation === 'sale' ? 'bg-[#006948] text-white' : 'text-slate-600'}`}
                      >
                        بيع
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">حالة التأثيث (إلزامي)</label>
                    <div className="flex bg-white rounded-lg p-0.5 border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setReFurnished('furnished')}
                        className={`flex-1 py-1 text-xs font-bold rounded-md ${reFurnished === 'furnished' ? 'bg-emerald-700 text-white' : 'text-slate-600'}`}
                      >
                        مفروشة
                      </button>
                      <button
                        type="button"
                        onClick={() => setReFurnished('unfurnished')}
                        className={`flex-1 py-1 text-xs font-bold rounded-md ${reFurnished === 'unfurnished' ? 'bg-emerald-700 text-white' : 'text-slate-600'}`}
                      >
                        فارغة (Vide)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">الصنف</label>
                    <select
                      value={reType}
                      onChange={(e) => setReType(e.target.value as any)}
                      className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded-lg outline-hidden"
                    >
                      <option value="apartment">شقة / برطمة</option>
                      <option value="villa">فيلا</option>
                      <option value="studio">ستوديو</option>
                      <option value="commercial">محل تجاري</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">المساحة (م²)</label>
                    <input
                      type="number"
                      value={reSurface}
                      onChange={(e) => setReSurface(e.target.value)}
                      placeholder="85"
                      className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded-lg outline-hidden text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">الغرف</label>
                    <input
                      type="text"
                      value={reRooms}
                      onChange={(e) => setReRooms(e.target.value)}
                      placeholder="3 غرف + صالون"
                      className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded-lg outline-hidden"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Partnership Specific Controls */}
            {adCategory === 'partnership' && (
              <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-200/60 space-y-2">
                <div>
                  <label className="block text-[11px] font-semibold text-amber-900 mb-1">المساهمة المطلوبة من الشريك:</label>
                  <input
                    type="text"
                    value={requiredContribution}
                    onChange={(e) => setRequiredContribution(e.target.value)}
                    placeholder="مثال: تمويل رأس مال 200,000 درهم أو أسطول توزيع"
                    className="w-full text-xs p-2 bg-white border border-amber-200 rounded-lg outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-amber-900 mb-1">المساهمة المتوفرة لديك:</label>
                  <input
                    type="text"
                    value={offeredContribution}
                    onChange={(e) => setOfferedContribution(e.target.value)}
                    placeholder="مثال: رخصة تصنيع، مقر تجاري، أو خبرة برمجية"
                    className="w-full text-xs p-2 bg-white border border-amber-200 rounded-lg outline-hidden"
                  />
                </div>
              </div>
            )}

            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">عنوان الإعلان الرسمي</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="أدخل عنواناً واضحاً ومفصلاً للعرض..."
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#006948] outline-hidden"
              />
            </div>

            {/* City & Price */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">المدينة والجهة</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white outline-hidden cursor-pointer"
                >
                  {CITIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {adCategory === 'real_estate' 
                    ? reOperation === 'rent' ? 'السومة (درهم / شهر)' : 'السعر الإجمالي (درهم)'
                    : adCategory === 'partnership' ? 'حجم الاستثمار المقدر (درهم)' : 'السعر بالدرهم'}
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="مثال: 7500"
                  className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white outline-hidden text-left"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">التفاصيل والوصف الدقيق</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="اكتب وصفاً دقيقاً يشمل المواصفات، الوثائق المتوفرة، والالتزامات القانونية..."
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white outline-hidden"
              ></textarea>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition"
              >
                نشر الإعلان الآن
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
