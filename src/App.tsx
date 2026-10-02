import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RealEstatePage } from './pages/RealEstatePage';
import { LearningPage } from './pages/LearningPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { CommercePage } from './pages/CommercePage';
import { RemoteWorkPage } from './pages/RemoteWorkPage';
import { AuthModal } from './components/AuthModal';
import { PostAdModal } from './components/PostAdModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { PartnershipDetailModal } from './components/PartnershipDetailModal';
import { ContractsGuideModal } from './components/ContractsGuideModal';
import { 
  INITIAL_REAL_ESTATE, 
  INITIAL_PARTNERSHIPS, 
  INITIAL_COMMERCE, 
  INITIAL_FREELANCERS,
  RealEstateItem,
  PartnershipItem,
  CommerceItem
} from './data/mockData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Datasets
  const [realEstateList, setRealEstateList] = useState<RealEstateItem[]>(INITIAL_REAL_ESTATE);
  const [partnershipList, setPartnershipList] = useState<PartnershipItem[]>(INITIAL_PARTNERSHIPS);
  const [commerceList, setCommerceList] = useState<CommerceItem[]>(INITIAL_COMMERCE);
  const [freelancerList] = useState(INITIAL_FREELANCERS);

  // User Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState({
    name: 'عمر المنصوري',
    role: 'مقاول ذاتي ومستثمر تقني معتمد',
    trustScore: 98,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4nZq_FbUT-eD7B1FFgJKYNkzYNyAZ7-ZtUXmGm3ERQhsMfLHB2Mu4S78D7tcI8hh_t-vyZbNCWU8ZCK0soDsMNVW2ZkXC256WglVXd97wD1ku9g7fV3GshME4MjnsEqooowxAP7dIJRHKM1VUemPA1heQIOet-FSOP_Y8Fe79bVlO4PBzHF626VTIckcIEuk2l6opVmvJbulbvC2uKkOFTKqPzT9oHtsqIV-D34sJMnwvwCUEf5a'
  });

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isPostAdOpen, setIsPostAdOpen] = useState<boolean>(false);
  const [postAdCategory, setPostAdCategory] = useState<string>('real_estate');
  const [selectedProperty, setSelectedProperty] = useState<RealEstateItem | null>(null);
  const [selectedPartnership, setSelectedPartnership] = useState<PartnershipItem | null>(null);
  const [isContractsGuideOpen, setIsContractsGuideOpen] = useState<boolean>(false);

  // Toast notice
  const [globalToast, setGlobalToast] = useState<{ title: string; subtitle?: string } | null>(null);

  const triggerToast = (title: string, subtitle?: string) => {
    setGlobalToast({ title, subtitle });
    setTimeout(() => {
      setGlobalToast(null);
    }, 4000);
  };

  const handleLoginSuccess = (name: string, role: string) => {
    setIsLoggedIn(true);
    setUserProfile(prev => ({
      ...prev,
      name: name || 'عمر المنصوري',
      role: role || 'مقاول معتمد'
    }));
    triggerToast('مرحباً بك في منصة بورشيم!', `تم تسجيل الدخول بنجاح باسم ${name || 'عمر المنصوري'}.`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    triggerToast('تم تسجيل الخروج', 'يمكنك التصفح كزائر أو تسجيل الدخول في أي وقت.');
  };

  const handleOpenPostAd = (category: string = 'real_estate') => {
    setPostAdCategory(category);
    setIsPostAdOpen(true);
  };

  const handleAddRealEstate = (item: RealEstateItem) => {
    setRealEstateList([item, ...realEstateList]);
    triggerToast('تم نشر إعلانك العقاري بنجاح!', 'تم إدراج العقار في قائمة العروض المعتمدة.');
  };

  const handleAddPartnership = (item: PartnershipItem) => {
    setPartnershipList([item, ...partnershipList]);
    triggerToast('تم نشر طلب الشراكة بنجاح!', 'أصبح طلب التعاون معروضاً للشركاء والمستثمرين.');
  };

  const handleAddCommerce = (item: CommerceItem) => {
    setCommerceList([item, ...commerceList]);
    triggerToast('تمت إضافة المنتج بنجاح!', 'العرض منشور في سوق التجارة والجملة.');
  };

  const handleRequestPropertyVisit = (prop: RealEstateItem) => {
    setSelectedProperty(null);
    triggerToast('تم تسجيل طلب المعاينة العقارية!', `سيتصل بك مالك العقار (${prop.listerName}) لتأكيد موعد الزيارة.`);
  };

  const handleSubmitPartnershipProposal = (pt: PartnershipItem) => {
    setSelectedPartnership(null);
    triggerToast('تم إرسال طلب الشراكة بنجاح!', `تم تحويل رسالتك إلى (${pt.proponentName}) عبر نظام المراسلة الداخلي المحمي.`);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#faf8ff] text-[#131b2e]'}`}>
      {/* Universal Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPostAd={handleOpenPostAd}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        onLogout={handleLogout}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomePage
            onSelectTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAuth={() => setIsAuthOpen(true)}
            onOpenPostAd={handleOpenPostAd}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onSelectPartnership={(pt) => setSelectedPartnership(pt)}
            realEstateList={realEstateList}
            partnershipList={partnershipList}
            commerceList={commerceList}
            freelancerList={freelancerList}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        )}

        {currentTab === 'real_estate' && (
          <RealEstatePage
            realEstateList={realEstateList}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenPostAd={handleOpenPostAd}
          />
        )}

        {currentTab === 'learning' && (
          <LearningPage />
        )}

        {currentTab === 'partnerships' && (
          <PartnershipsPage
            partnershipList={partnershipList}
            onSelectPartnership={(pt) => setSelectedPartnership(pt)}
            onOpenPostAd={handleOpenPostAd}
            onOpenContractsGuide={() => setIsContractsGuideOpen(true)}
          />
        )}

        {currentTab === 'commerce' && (
          <CommercePage
            commerceList={commerceList}
            onOpenPostAd={handleOpenPostAd}
          />
        )}

        {currentTab === 'remote_work' && (
          <RemoteWorkPage
            freelancerList={freelancerList}
            onOpenPostAd={handleOpenPostAd}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContractsGuide={() => setIsContractsGuideOpen(true)}
      />

      {/* Modals Container */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <PostAdModal
        isOpen={isPostAdOpen}
        onClose={() => setIsPostAdOpen(false)}
        initialCategory={postAdCategory}
        onAddRealEstate={handleAddRealEstate}
        onAddPartnership={handleAddPartnership}
        onAddCommerce={handleAddCommerce}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onRequestBooking={handleRequestPropertyVisit}
      />

      <PartnershipDetailModal
        partnership={selectedPartnership}
        onClose={() => setSelectedPartnership(null)}
        onSubmitProposal={handleSubmitPartnershipProposal}
      />

      <ContractsGuideModal
        isOpen={isContractsGuideOpen}
        onClose={() => setIsContractsGuideOpen(false)}
      />

      {/* Global Interactive Notification Toast */}
      {globalToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-white text-slate-900 px-5 py-3.5 rounded-2xl shadow-2xl border-r-4 border-[#006948] border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#006948] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-right">
            <div className="font-bold text-xs sm:text-sm text-slate-900">{globalToast.title}</div>
            {globalToast.subtitle && (
              <div className="text-[11px] text-slate-500 mt-0.5">{globalToast.subtitle}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
