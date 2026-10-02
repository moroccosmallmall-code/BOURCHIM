import React, { useState } from 'react';
import { 
  X, 
  Store, 
  Building2, 
  Handshake, 
  GraduationCap, 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  Terminal, 
  UserCheck, 
  Check, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  BadgeCheck,
  Sparkles,
  LayoutGrid
} from 'lucide-react';
import { CITIES } from '../data/mockData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string, role: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'reset'>('login');
  const [modalStyle, setModalStyle] = useState<'full' | 'compact'>('full');
  
  // Form fields
  const [identifier, setIdentifier] = useState('+212 600 000000');
  const [password, setPassword] = useState('DemoBOUR2025#Verified');
  const [fullName, setFullName] = useState('محمد العلمي');
  const [selectedCity, setSelectedCity] = useState('casablanca');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['supplier']);
  const [compactRole, setCompactRole] = useState<'supplier' | 'buyer'>('supplier');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  if (!isOpen) return null;

  const handleRoleToggle = (role: string) => {
    if (selectedRoles.includes(role)) {
      if (selectedRoles.length > 1) {
        setSelectedRoles(selectedRoles.filter(r => r !== role));
      }
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleAuthSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessNotice(true);
      setTimeout(() => {
        setSuccessNotice(false);
        const nameToUse = authMode === 'register' ? fullName || 'عمر المنصوري' : 'عمر المنصوري';
        const roleLabel = compactRole === 'supplier' ? 'مورد ومقدم خدمة معتمد' : 'مشتري ومستفيد';
        onLoginSuccess(nameToUse, roleLabel);
        onClose();
      }, 1000);
    }, 900);
  };

  const handleQuickDevLogin = () => {
    setIdentifier('admin@bourchim.ma');
    setPassword('DemoBOUR2025#Verified');
    handleAuthSubmit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      {/* Container Switcher for Design Fidelity */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/90 my-auto text-right">
        {/* Style View Toggle & Close Button */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
          <button
            onClick={() => setModalStyle(modalStyle === 'full' ? 'compact' : 'full')}
            className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
            title="تبديل التصميم"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#006948]" />
            <span>{modalStyle === 'full' ? 'واجهة بطاقة سريعة' : 'واجهة البوابة المؤسسية'}</span>
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* DESIGN 1: FULL INSTITUTIONAL PORTAL (Image 4.png / Snippet 1) */}
        {modalStyle === 'full' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Right Brand Rail (in RTL, cols 1-5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#006948] via-[#00855d] to-[#006c49] p-6 lg:p-8 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#6cf8bb] opacity-15 pointer-events-none blur-2xl"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white opacity-10 pointer-events-none blur-xl"></div>

              <div className="relative z-10 flex flex-col gap-6">
                {/* Brand Identity */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-xs font-black text-2xl">
                    B
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-2xl tracking-wide uppercase">BOURCHIM</span>
                    <span className="text-xs text-[#6ffbbe] font-semibold opacity-90">المنظومة الرقمية الوطنية الموحدة</span>
                  </div>
                </div>

                {/* Platform Mission */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-lg text-white">بوابتك الرسمية الموثوقة للأعمال والاستثمار بالمغرب</h2>
                  <p className="text-xs text-white/80 leading-relaxed">
                    منصة مغربية شاملة مصممة بأعلى معايير الأمان المالي والمؤسساتي لربط الفاعلين الاقتصاديين في بيئة رقمية محمية.
                  </p>
                </div>

                {/* Verticals Grid */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                    <Store className="w-4 h-4 text-[#6ffbbe] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">التجارة والتبادل التجاري</span>
                      <span className="text-[10px] text-white/70">بيع وشراء السلع بالجملة والتقسيط</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                    <Building2 className="w-4 h-4 text-[#6ffbbe] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">العقارات والأصول</span>
                      <span className="text-[10px] text-white/70">فرص كراء وشراء الأراضي والمشاريع</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                    <Handshake className="w-4 h-4 text-[#6ffbbe] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">الخدمات المهنية والعمل عن بعد</span>
                      <span className="text-[10px] text-white/70">استقطاب الخبرات والصفقات والعقود المستقلة</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-xs">
                    <GraduationCap className="w-4 h-4 text-[#6ffbbe] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">التأهيل والتعلم المستمر</span>
                      <span className="text-[10px] text-white/70">دورات تدريبية ومعارف تطبيقية لسوق العمل</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Verification Seal */}
              <div className="relative z-10 pt-4 mt-6 border-t border-white/15 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#6ffbbe] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">بروتوكول تحقق رقمي صارم</span>
                  <p className="text-[11px] text-white/80 leading-snug mt-0.5">
                    المنصة تعتمد حصراً البيانات القانونية المعتمدة والأرقام الحقيقية المؤكدة. تُحظر وتُستبعد الحسابات الوهمية تلقائياً.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Zone (Cols 6-12) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                {/* Top Tabs */}
                <div className="flex p-1 bg-slate-100 rounded-xl items-center text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      authMode === 'login'
                        ? 'bg-white text-[#006948] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    تسجيل الدخول
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode('register')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      authMode === 'register'
                        ? 'bg-white text-[#006948] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    إنشاء حساب جديد
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode('reset')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      authMode === 'reset'
                        ? 'bg-white text-[#006948] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    استرجاع الرمز
                  </button>
                </div>

                {/* Feature Spotlight: Partner Search (ابحث عن شريك) */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/60 relative overflow-hidden transition-all hover:shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-1 flex-wrap">
                        <span className="text-xs font-bold text-slate-900">ابحث عن شريك أعمال ومورد استراتيجي</span>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">خدمة استثنائية</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        مساحة مخصصة للبحث عن شركاء مهنيين وتجاريين، أصحاب مشاريع، وممولين (متاحة كلياً وقابلة للتصفح فور تسجيل الدخول).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3.5">
                  {/* Registration Multi-Roles Selector */}
                  {authMode === 'register' && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                        <span>اختر صفاتك في المنصة (يمكن اختيار أكثر من دور):</span>
                        <span className="text-[#006948] text-[10px] font-semibold">متعدد التخصصات</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <div
                          onClick={() => handleRoleToggle('supplier')}
                          className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                            selectedRoles.includes('supplier')
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <Store className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                          <span className="text-[11px] font-bold block">مورد / بائع</span>
                          <span className="text-[9px] text-slate-500 block">نشر سلع وعقارات</span>
                        </div>

                        <div
                          onClick={() => handleRoleToggle('buyer')}
                          className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                            selectedRoles.includes('buyer')
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <ShoppingBag className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                          <span className="text-[11px] font-bold block">مشتري / مستفيد</span>
                          <span className="text-[9px] text-slate-500 block">تصفح وتعاقد</span>
                        </div>

                        <div
                          onClick={() => handleRoleToggle('learner')}
                          className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                            selectedRoles.includes('learner')
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <GraduationCap className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                          <span className="text-[11px] font-bold block">متعلم / باحث</span>
                          <span className="text-[9px] text-slate-500 block">تكوين وشهادات</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Full Name in Register Mode */}
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">الاسم الكامل (وفق الوثائق الرسمية)</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="محمد العلمي"
                        className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/15 outline-hidden transition"
                      />
                    </div>
                  )}

                  {/* Identifier (Phone or Email) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {authMode === 'reset' ? 'أدخل بريدك أو رقم هاتفك لاستقبال الرمز' : 'البريد الإلكتروني أو رقم الهاتف المغربي'}
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        dir="ltr"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="+212 600 000000"
                        className="w-full h-10 pr-3 pl-14 text-left rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/15 outline-hidden transition"
                      />
                      <div className="absolute left-2.5 flex items-center gap-1 text-slate-500 text-xs font-bold">
                        <Phone className="w-3.5 h-3.5 text-[#006948]" />
                        <span>+212</span>
                      </div>
                    </div>
                  </div>

                  {/* City Select in Register Mode */}
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">المدينة والجهة</label>
                      <div className="relative">
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/15 outline-hidden transition appearance-none cursor-pointer"
                        >
                          {CITIES.map((c) => (
                            <option key={c.id} value={c.id}>{c.name} ({c.region})</option>
                          ))}
                        </select>
                        <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Password Field */}
                  {authMode !== 'reset' && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-semibold text-slate-700">كلمة المرور</label>
                        <button
                          type="button"
                          onClick={() => setAuthMode('reset')}
                          className="text-[11px] text-[#006948] hover:underline cursor-pointer"
                        >
                          نسيت كلمة المرور؟
                        </button>
                      </div>
                      <div className="relative flex items-center">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full h-10 px-3 pl-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/15 outline-hidden transition"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-3 text-slate-400 hover:text-slate-700 cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Terms in Register Mode */}
                  {authMode === 'register' && (
                    <label className="flex items-start gap-2 text-[11px] text-slate-600 cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="mt-0.5 accent-[#006948] rounded"
                      />
                      <span>
                        أوافق صراحةً على <strong className="text-[#006948]">شروط الاستخدام الرسمية</strong> وسياسة حماية المعطيات الشخصية لمنصة بورحيم بالمغرب.
                      </span>
                    </label>
                  )}

                  {/* Submit Button */}
                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-11 bg-[#006948] hover:bg-[#005137] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-75"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : successNotice ? (
                        <>
                          <BadgeCheck className="w-4 h-4 text-[#6ffbbe]" />
                          <span>تم تسجيل الدخول بنجاح</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>
                            {authMode === 'login' ? 'تسجيل الدخول الآن' : authMode === 'register' ? 'تأكيد وإنشاء حساب موثق' : 'إرسال رمز إعادة التعيين'}
                          </span>
                        </>
                      )}
                    </button>

                    {/* Quick Dev Preview Auto-fill */}
                    <button
                      type="button"
                      onClick={handleQuickDevLogin}
                      className="w-full h-9 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5 text-emerald-700" />
                      <span>الدخول التجريبي الفوري / حساب موثق</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Bottom Institutional Seal */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>تشفير سيادي عالي الحماية 256-bit</span>
                </span>
                <span>منصة موثوقة © BOURCHIM 2025</span>
              </div>
            </div>
          </div>
        ) : (
          /* DESIGN 2: COMPACT CLEAN CARD (Image 15.jpeg & 16.png / Snippet 6) */
          <div className="p-6 sm:p-8 max-w-md mx-auto">
            {/* Top Badge Pill */}
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 bg-[#eaf7ee] text-[#136652] text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/50">
                <span className="w-2 h-2 rounded-full bg-[#136652]"></span>
                <span>بوابة الموردين والمشترين</span>
              </span>
            </div>

            {/* Brand Header */}
            <header className="text-center mb-5">
              <h1 className="text-3xl font-black text-[#136652] tracking-wider flex items-center justify-center gap-1.5">
                <span>BOURCHIM</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#136652] inline-block -mb-1"></span>
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-1">
                منصة واحدة للبيع والشراء والخدمات والتعلم
              </p>
            </header>

            {/* Switcher: تسجيل الدخول / حساب جديد */}
            <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  authMode === 'login' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                تسجيل الدخول
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  authMode === 'register' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                حساب جديد
              </button>
            </div>

            {/* Role Choice */}
            <div className="mb-4">
              <label className="block text-slate-700 font-bold text-xs mb-1.5 text-right">نوع الحساب:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCompactRole('supplier')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                    compactRole === 'supplier'
                      ? 'bg-[#fff8eb] border-[#f5b843] text-amber-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <Store className="w-3.5 h-3.5 text-amber-700" />
                  <span>مورد / بائع</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCompactRole('buyer')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                    compactRole === 'buyer'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>مشتري / مستفيد</span>
                </button>
              </div>
            </div>

            {/* Fields */}
            <form onSubmit={handleAuthSubmit} className="space-y-3">
              <div>
                <label className="block text-slate-700 font-semibold text-xs mb-1">اسم المتجر / الاسم الكامل</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="أدخل اسم متجرك أو اسمك الكامل"
                  className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#136652] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold text-xs mb-1">رقم الهاتف أو واتساب</label>
                <input
                  type="tel"
                  dir="ltr"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="06XXXXXXXX"
                  className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#136652] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold text-xs mb-1">المدينة / الإقليم</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#136652] outline-hidden cursor-pointer"
                >
                  {CITIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold text-xs mb-1">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة المرور"
                    className="w-full text-xs py-2 px-3 pl-8 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#136652] outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-[#146654] hover:bg-[#0f5445] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer"
              >
                {isLoading ? 'جارِ التحقق...' : 'تسجيل الدخول'}
              </button>
            </form>

            {/* Guest Action Options */}
            <div className="mt-5 pt-3 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-400 block mb-2">أو تصفح كزائر</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onClose}
                  className="py-1.5 px-2 bg-amber-50 text-amber-800 text-xs font-semibold rounded-lg hover:bg-amber-100 transition"
                >
                  تصفح العروض
                </button>
                <button
                  onClick={handleQuickDevLogin}
                  className="py-1.5 px-2 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg hover:bg-emerald-100 transition"
                >
                  الدخول التجريبي
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
