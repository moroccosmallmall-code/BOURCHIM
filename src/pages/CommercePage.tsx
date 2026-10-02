import React, { useState } from 'react';
import { Store, ShieldCheck, MapPin, Search, PlusCircle, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { CommerceItem } from '../data/mockData';

interface CommercePageProps {
  commerceList: CommerceItem[];
  onOpenPostAd: (category?: string) => void;
}

export const CommercePage: React.FC<CommercePageProps> = ({ commerceList, onOpenPostAd }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [orderedItem, setOrderedItem] = useState<CommerceItem | null>(null);

  const categories = [
    'الكل',
    'منتجات طبيعية وتعاونيات',
    'الصناعة التقليدية المغربية',
    'عروض الجملة والتوريد',
    'الملابس والأزياء'
  ];

  const filteredItems = selectedCategory === 'الكل'
    ? commerceList
    : commerceList.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col w-full text-right py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs text-[#006948] font-extrabold uppercase">سوق التبادل والتجارة المباشرة</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            سوق التجارة والبيع بالجملة والتقسيط بالمغرب
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            ربط مباشر بين المنتجين، التعاونيات، المستوردين وأصحاب المتاجر والمشترين دون وسطاء وهميين.
          </p>
        </div>

        <button
          onClick={() => onOpenPostAd('commerce')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold shadow-xs transition shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>إضافة منتج أو عرض جملة</span>
        </button>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#006948] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ordered Toast Notice */}
      {orderedItem && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <span>تم إرسال طلب عرض السعر والعينة للمنتج ({orderedItem.title}) إلى {orderedItem.sellerName} بنجاح!</span>
        </div>
      )}

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((prod) => (
          <article
            key={prod.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{prod.sellerType}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                  {prod.location}
                </div>
              </div>

              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-black text-[#006948]">
                    {prod.price} <span className="text-xs text-slate-500 font-normal">{prod.unit}</span>
                  </span>
                  <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-bold">
                    {prod.minOrder}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 line-clamp-1">{prod.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{prod.description}</p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">{prod.sellerName}</span>
              <button
                type="button"
                onClick={() => setOrderedItem(prod)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#006948] hover:text-white text-slate-800 text-xs font-bold transition cursor-pointer"
              >
                طلب عينة أو كمية
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
