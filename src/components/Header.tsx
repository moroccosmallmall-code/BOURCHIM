import React, { useState } from 'react';
import { 
  PlusCircle, 
  KeyRound, 
  Bell, 
  Globe, 
  Sun, 
  Moon, 
  Search, 
  User, 
  ShieldCheck, 
  LogOut, 
  CheckCircle2, 
  SlidersHorizontal 
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAuth: () => void;
  onOpenPostAd: (initialCategory?: string) => void;
  isLoggedIn: boolean;
  userProfile: {
    name: string;
    role: string;
    trustScore: number;
    avatar: string;
  };
  onLogout: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenAuth,
  onOpenPostAd,
  isLoggedIn,
  userProfile,
  onLogout,
  searchQuery,
  onSearchChange,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, title: 'تم التحقق من حسابك بالهوية الوطنية', time: 'منذ ساعتين', unread: true },
    { id: 2, title: 'طلب تواصل جديد بخصوص شراكة تجارية في الدار البيضاء', time: 'منذ 5 ساعات', unread: true },
    { id: 3, title: 'تمت مصادقة إعلانك العقاري في طنجة بنجاح', time: 'أمس', unread: false }
  ];

  return (
    <header className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col gap-2">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <div 
            onClick={() => onSelectTab('home')} 
            className="flex items-center gap-2.5 cursor-pointer shrink-0 group select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#006948] to-[#00855d] flex items-center justify-center text-white font-black text-xl shadow-xs group-hover:scale-105 transition-transform">
              <span>B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#006948] leading-none">BOURCHIM</span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wide">المنظومة الرقمية الموحدة</span>
            </div>
          </div>

          {/* Omni Search Input (Desktop) */}
          <div className="flex-1 max-w-xl mx-2 hidden md:block">
            <div className="relative flex items-center w-full">
              <Search className="absolute right-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="ابحث في السلع، العقارات، الخدمات، فرص العمل، التكوين، أو الشركاء بالمغرب..."
                className="w-full pr-10 pl-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-100/80 border border-slate-200/80 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#006948] focus:ring-2 focus:ring-[#006948]/15 transition-all outline-hidden"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')} 
                  className="absolute left-3 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  مسح
                </button>
              )}
            </div>
          </div>

          {/* Quick Action CTAs & Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Post Ad Button */}
            <button
              onClick={() => onOpenPostAd()}
              type="button"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#006948] hover:bg-[#005137] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">+ أضف إعلاناً</span>
              <span className="sm:hidden">+ إعلان</span>
            </button>

            {/* Quick Real Estate Action */}
            <button
              onClick={() => onOpenPostAd('real_estate')}
              type="button"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-[#006948]" />
              <span>بيعي عقارك / كري عقارك</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors relative cursor-pointer"
                aria-label="الإشعارات"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-emerald-600 ring-2 ring-white"></span>
              </button>

              {showNotifications && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 z-50 text-right animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-xs text-slate-800">التنبيهات والإشعارات</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">3 جديدة</span>
                  </div>
                  <div className="flex flex-col gap-2 mt-2 max-h-60 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors text-xs">
                        <p className="font-semibold text-slate-800">{n.title}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="تبديل المظهر"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* User Profile or Login Trigger */}
            <div className="relative">
              {isLoggedIn ? (
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#006948]/30 transition-all cursor-pointer"
                >
                  <img
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-[#006948]/20"
                  />
                  <div className="hidden xl:flex flex-col text-right leading-none">
                    <span className="text-xs font-bold text-slate-800">{userProfile.name}</span>
                    <span className="text-[10px] text-emerald-700 flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      <span>موثق ({userProfile.trustScore}%)</span>
                    </span>
                  </div>
                </button>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-[#006948] hover:bg-emerald-100 text-xs font-bold transition-colors cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>دخول / تسجيل</span>
                </button>
              )}

              {/* User Dropdown */}
              {isLoggedIn && showUserMenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 z-50 text-right animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                    <img src={userProfile.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-800">{userProfile.name}</h4>
                      <p className="text-[11px] text-slate-500">{userProfile.role}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>الهوية الوطنية مفحوصة</span>
                      </span>
                    </div>
                  </div>
                  <div className="py-2 flex flex-col gap-1 text-xs">
                    <button 
                      onClick={() => { setShowUserMenu(false); onOpenPostAd(); }}
                      className="text-right px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                    >
                      إدارة إعلاناتي وعروضي
                    </button>
                    <button 
                      onClick={() => { setShowUserMenu(false); onSelectTab('partnerships'); }}
                      className="text-right px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                    >
                      ملفات الشراكة المستلمة
                    </button>
                    <button 
                      onClick={() => { setShowUserMenu(false); onOpenAuth(); }}
                      className="text-right px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                    >
                      إعدادات الحساب والتوثيق
                    </button>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => { setShowUserMenu(false); onLogout(); }}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors"
                    >
                      <span>تسجيل الخروج</span>
                      <LogOut className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Primary Horizontal Navigation Tabs */}
        <nav className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-slate-100">
          <button
            onClick={() => onSelectTab('home')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'home'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            الرئيسية
          </button>

          <button
            onClick={() => onSelectTab('real_estate')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'real_estate'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            العقارات (كراء / بيع)
          </button>

          <button
            onClick={() => onSelectTab('commerce')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'commerce'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            التجارة والبيع والشراء
          </button>

          <button
            onClick={() => onSelectTab('remote_work')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'remote_work'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            العمل من المنزل والمهن
          </button>

          <button
            onClick={() => onSelectTab('learning')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'learning'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            التعلم والتكوين
          </button>

          <button
            onClick={() => onSelectTab('partnerships')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'partnerships'
                ? 'bg-[#006948] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            ابحث عن شريك
          </button>
        </nav>
      </div>
    </header>
  );
};
