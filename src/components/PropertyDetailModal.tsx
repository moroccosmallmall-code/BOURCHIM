import React, { useState } from 'react';
import { X, MapPin, CheckCircle, ShieldCheck, Phone, Calendar, User, Eye, Sparkles } from 'lucide-react';
import { RealEstateItem } from '../data/mockData';

interface PropertyDetailModalProps {
  property: RealEstateItem | null;
  onClose: () => void;
  onRequestBooking: (prop: RealEstateItem) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onRequestBooking
}) => {
  const [booked, setBooked] = useState(false);
  const [phoneNumberRequested, setPhoneNumberRequested] = useState(false);

  if (!property) return null;

  const handleBookVisit = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onRequestBooking(property);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-right my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-white/90 shadow-md hover:bg-white flex items-center justify-center text-slate-700 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Photo with Badges */}
        <div className="relative w-full aspect-[16/9] max-h-80 bg-slate-100 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex flex-col justify-between p-4 sm:p-6 text-white">
            <div className="flex items-center gap-2">
              <span className="bg-[#006948] px-3 py-1 rounded-lg text-xs font-bold shadow-xs">
                {property.operation === 'rent' ? 'كراء موثق' : 'بيع محفظ'}
              </span>
              <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-xs">
                {property.furnished === 'furnished' ? 'مفروشة بالكامل (Meublé)' : 'غير مفروشة (Vide)'}
              </span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {property.price.toLocaleString('fr-FR')} {property.priceLabel}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{property.cityNameAr} • {property.neighborhood}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">{property.title}</h2>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full font-bold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>فحص ميداني وتدقيق ملكية</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center">
            <div>
              <span className="text-[11px] text-slate-500 block">المساحة الإجمالية</span>
              <span className="font-extrabold text-sm sm:text-base text-slate-900">{property.surface} م²</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">التوزيع والغرف</span>
              <span className="font-extrabold text-sm sm:text-base text-slate-900">{property.rooms}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">الطابق والتهيئة</span>
              <span className="font-extrabold text-sm sm:text-base text-slate-900">{property.floor || 'طابق ممتاز'}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">صفة العارض</span>
              <span className="font-extrabold text-sm sm:text-base text-emerald-700">
                {property.listerType === 'owner' ? 'من المالك مباشرة' : 'وكالة معتمدة'}
              </span>
            </div>
          </div>

          {/* Amenities Chips */}
          <div>
            <h4 className="font-bold text-xs text-slate-800 mb-2">المزايا والتجهيزات المتوفرة:</h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#006948]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Landlord Contact & Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <User className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block">{property.listerName}</span>
                <span className="text-[11px] text-slate-500 block">معلن موثق بالبطاقة الوطنية</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setPhoneNumberRequested(!phoneNumberRequested)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-50 text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#006948]" />
                <span>{phoneNumberRequested ? '+212 661-XXXXXX' : 'إظهار الهاتف الموثق'}</span>
              </button>

              <button
                type="button"
                onClick={handleBookVisit}
                disabled={booked}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <Calendar className="w-4 h-4" />
                <span>{booked ? 'تم تسجيل طلب المعاينة ✓' : 'حجز موعد معاينة ميدانية'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
