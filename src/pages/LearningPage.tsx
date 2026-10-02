import React, { useState } from 'react';
import { 
  School, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  MessageSquare, 
  Layers, 
  ArrowLeft,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Lightbulb,
  Check
} from 'lucide-react';
import { LEARNING_TRACKS, LearningTrack } from '../data/mockData';

export const LearningPage: React.FC = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('track-ecommerce');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [whatsappSent, setWhatsappSent] = useState<boolean>(false);

  const activeTrack: LearningTrack = 
    LEARNING_TRACKS.find(t => t.id === selectedTrackId) || LEARNING_TRACKS[0];

  const handleWhatsAppHelp = () => {
    setWhatsappSent(true);
    const msg = encodeURIComponent(`مرحباً بورشيم، أود طلب المساعدة والتوجيه الأكاديمي في مسار (${activeTrack.title}).`);
    setTimeout(() => {
      window.open(`https://wa.me/?text=${msg}`, '_blank');
      setTimeout(() => setWhatsappSent(false), 2000);
    }, 400);
  };

  return (
    <div className="flex flex-col w-full text-right">
      {/* Sub-header & Verification Ribbon */}
      <section className="w-full bg-slate-100/80 py-3 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span>الرئيسية</span>
            <span>←</span>
            <span className="text-[#006948] font-bold">التعلم والتكوين</span>
            <span>←</span>
            <span className="text-slate-800">المسار الأكاديمي المعتمد</span>
          </nav>

          <div className="flex items-center flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-2xs text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>محتوى تعليمي محقق: 2025</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 text-[#006948] rounded-full border border-emerald-100 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>معايير الاعتماد المهني المغربي والدولي</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-amber-100/70 text-amber-900 rounded-full font-bold">
              <span>10 مسارات تكوينية نشطة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Hero Banner */}
      <section className="relative w-full bg-white py-10 lg:py-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 bg-emerald-50 text-[#006948] rounded-full text-xs font-bold border border-emerald-100">
                <School className="w-3.5 h-3.5" />
                <span>الأكاديمية المفتوحة والبيئة التكوينية الموجهة بالمغرب</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                المكتبة التعليمية ومسارات التكوين الشاملة في <span className="text-[#006948]">BOURCHIM</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ليست مجرد قوائم دورات نظرية؛ بل خريطة طريق مهنية حقيقية مبنية خطوة بخطوة بالاستناد إلى مراجع دولية، تدريبات تطبيقية عملية، ومشاريع قابلة للتنفيذ في الاقتصاد الرقمي المغربي والعالمي.
              </p>

              {/* Core Values Micro-Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
                  <span className="text-2xl font-black text-[#006948] block">100%</span>
                  <span className="text-xs text-slate-500 font-semibold">مجاني ومتاح ذاتياً</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
                  <span className="text-2xl font-black text-emerald-700 block">مرحلي</span>
                  <span className="text-xs text-slate-500 font-semibold">مبتدئ إلى محترف</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
                  <span className="text-2xl font-black text-amber-700 block">متحقق</span>
                  <span className="text-xs text-slate-500 font-semibold">مصادر موثوقة ومجددة</span>
                </div>
              </div>
            </div>

            {/* Visual Column: Team Incubator Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDoON1Tbc6IDETuqEUmIW_82dZgnJbdzM91Na36Don0hqPhdHJnxmuO8k5vWpVC5nd0Rg4I3FHHtUUq8xGN3BAYeeSLheCA5JynUQsEVTs5_3Z4gtlM_2JYgfu1JAeE7HpusFLJ1Lsw-7yNno-QWj9DXuGHVRLu4jFvY1t5DEGs8OOvgJF3OEnPAmbNAi_QE5oK9Bf9djkvWaRBRA5Kqi7sdVKRCLJB2Jg2vZnQBWS6eTOH2iNo1-Y"
                  alt="Moroccan students in modern incubator"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs text-[#6ffbbe] font-bold">بوابة المهارات المستقبلية بالمغرب</span>
                  <p className="text-sm font-bold mt-1">تكوين تطبيقي يربط التعليم باحتياجات سوق الشغل الحر والريادي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Track Domains Bento Grid */}
      <section className="w-full py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-extrabold text-[#006948] uppercase tracking-wider block">
              خريطة التخصصات المتاحة
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              التخصصات المعرفية والمهنية المغطاة (اضغط لتفاصيل المسار)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            اختر مسارك التعليمي لبدء رحلة متسلسلة تحتوي على مراجع رسمية، تمارين، وتقييم عملي متكامل.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {LEARNING_TRACKS.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <div
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`p-4 rounded-2xl shadow-xs transition-all cursor-pointer flex flex-col justify-between min-h-[150px] ${
                  isSelected
                    ? 'bg-[#006948] text-white ring-2 ring-[#006948]/30 shadow-md'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-emerald-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20 text-white' : 'bg-emerald-50 text-[#006948]'}`}>
                    <School className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-[#6ffbbe]' : 'bg-slate-100 text-slate-600'}`}>
                    {track.levelBadge}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-xs sm:text-sm leading-snug line-clamp-2">{track.title}</h3>
                  <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                    {track.subtitle}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold">
                  <span className={isSelected ? 'text-[#6ffbbe]' : 'text-[#006948]'}>
                    {isSelected ? 'المسار المعروض الآن ↓' : 'استعراض المسار ←'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deep Dive Syllabus of Selected Track */}
      <section className="w-full py-10 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {/* Track Header & Context */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-200 flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-[#006948] text-xs rounded-full font-bold border border-emerald-100">
                  مسار نموذجي متكامل
                </span>
                <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs rounded-full font-semibold">
                  محدث 2025
                </span>
                <span className="text-xs text-slate-500">
                  • مدة المسار المقدرة: {activeTrack.durationWeeks} أسابيع عمل وتطبيق
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {activeTrack.title}
              </h2>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed flex flex-col gap-2">
                <p>
                  <strong className="text-slate-900">تعريف المجال وأهميته الاقتصادية:</strong>{' '}
                  {activeTrack.economicContext}
                </p>
                <p>{activeTrack.description}</p>
              </div>

              {/* Prerequisites vs Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="font-extrabold text-xs sm:text-sm text-[#006948] mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>المتطلبات الأساسية للبدء</span>
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-600 list-disc list-inside">
                    {activeTrack.prerequisites.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="font-extrabold text-xs sm:text-sm text-emerald-800 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>ما الذي ستتعلمه بنهاية المسار؟</span>
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-600 list-disc list-inside">
                    {activeTrack.outcomes.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* WhatsApp Academic Advisory Card (CRITICAL REQUIREMENT) */}
            <div className="w-full lg:w-80 shrink-0 p-6 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-emerald-800">
                <MessageSquare className="w-5 h-5" />
                <span className="font-extrabold text-sm sm:text-base text-slate-900">الإرشاد المباشر</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                هل تحتاج إلى مساعدة في تنظيم جدول تعلمك أو لديك استفسار محدد حول أحد مستويات هذا التخصص؟
              </p>

              <button
                type="button"
                onClick={handleWhatsAppHelp}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition active:scale-98 cursor-pointer"
              >
                <svg aria-hidden="true" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.975.57 3.82 1.554 5.378L2.247 22l4.786-1.255a9.988 9.988 0 0 0 5 1.286h.004c5.535 0 10.031-4.496 10.031-10.031A10.016 10.016 0 0 0 12.031 2zm5.82 14.28c-.244.685-1.42 1.309-1.96 1.38-.518.068-1.18.098-1.905-.133-.442-.142-1.01-.33-1.748-.65-3.08-1.336-5.088-4.46-5.242-4.666-.153-.207-1.252-1.666-1.252-3.178 0-1.512.793-2.257 1.074-2.564.282-.307.616-.384.82-.384.205 0 .41.002.589.01.19.01.442-.072.69.526.257.615.872 2.128.948 2.282.077.154.128.334.026.54-.103.205-.154.333-.307.513-.154.18-.324.402-.462.54-.154.153-.314.32-.135.628.18.307.8 1.319 1.717 2.136 1.18 1.05 2.174 1.376 2.482 1.53.308.154.487.128.667-.077.18-.205.769-.897.974-1.205.205-.308.41-.257.692-.154.282.103 1.794.846 2.102 1.001.307.153.512.23.589.358.077.129.077.744-.167 1.429z" />
                </svg>
                <span>تعلم هذا المجال عبر واتساب / طلب المساعدة</span>
              </button>

              <div className="p-2.5 bg-white rounded-xl border border-slate-200/80 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-800 block mb-0.5">حماية الخصوصية:</span>
                خدمة المساعدة المباشرة مؤمنة عبر الدعم الأكاديمي لمنصة بورشيم بدون مشاركة بياناتك الشخصية علناً.
              </div>

              <div className="text-[10px] text-slate-400">
                أوقات الرد الأكاديمي: الإثنين - السبت (09:00 - 18:00)
              </div>
            </div>
          </div>

          {/* Step-by-Step Learning Progression Levels */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                مستويات التعلم وخطة الخطوة بخطوة
              </h3>
              <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                منهجية تطبيقية 360°
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeTrack.levels.map((lvl, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-3xl shadow-xs border border-slate-200 flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-emerald-50 text-[#006948] text-xs font-bold rounded-lg">
                        {lvl.levelNumber}
                      </span>
                      <span className="text-slate-400 text-xs font-medium">المدة: {lvl.duration}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{lvl.levelTitle}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{lvl.description}</p>

                    <div className="pt-2 flex flex-col gap-1.5">
                      <span className="text-xs font-bold text-slate-800">المشاريع والمخرجات:</span>
                      {lvl.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{proj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">نسبة التطبيق العملي:</span>
                    <span className="font-extrabold text-[#006948]">{lvl.practicalRatio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified References & Official Resource Directory */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-200 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">المراجع والروابط الرسمية المعتمدة</h3>
                <p className="text-xs text-slate-500">تم فحص جميع المصادر والتأكد من ملاءمتها للقوانين والأنظمة المعمول بها بالمغرب.</p>
              </div>
              <span className="text-xs px-3 py-1 bg-emerald-50 text-[#006948] font-bold rounded-full self-start md:self-auto">
                تاريخ التحقق الأكاديمي: 2025
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {activeTrack.references.map((ref, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1 text-[11px]">
                      <span className="text-[#006948] font-bold">{ref.tag}</span>
                      <span className="text-slate-400">{ref.category}</span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{ref.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{ref.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <span>المصدر: {ref.source}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#006948]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Transparency & Earning Disclaimer */}
          <div className="p-6 bg-amber-50 rounded-3xl border border-amber-200/80 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h4 className="font-extrabold text-sm sm:text-base text-amber-950">
                فرص تطبيق المهارة وتحقيق الدخل • إشعار شفافية وإبراء ذمة إلزامي
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                توفر مهارات {activeTrack.title} فرصاً حقيقية لإطلاق مشاريع شخصية، العمل كمسوّق بالعمولة، أو تقديم خدمات إدارة الحملات للشركات والمتاجر المحلية والدولية.
              </p>
              <div className="p-3 bg-white/90 rounded-xl text-xs text-rose-700 leading-relaxed font-bold border border-rose-200">
                تنبيه صريح من منصة BOURCHIM: تحقيق أي عائد مالي أو ربح غير مضمون إطلاقاً بأي شكل من الأشكال. النجاح والدخل يعتمدان كلياً وبشكل فردي على الجهد الشخصي المبذول، جودة الخدمة أو المنتج، ظروف السوق وتغيرات المنافسة، ورأس المال المدار، والالتزام بالقوانين. لا تقدم المنصة أي وعود بالربح السريع.
              </div>
            </div>
          </div>

          {/* Practical FAQ Section */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-200 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#006948]" />
              <span>الأسئلة الشائعة حول مسارات التكوين (FAQ)</span>
            </h3>

            <div className="flex flex-col gap-2.5">
              {activeTrack.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-right text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
