import React, { useState } from 'react';
import { Laptop, ShieldCheck, Star, MapPin, PlusCircle, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { FreelancerItem } from '../data/mockData';

interface RemoteWorkPageProps {
  freelancerList: FreelancerItem[];
  onOpenPostAd: (category?: string) => void;
}

export const RemoteWorkPage: React.FC<RemoteWorkPageProps> = ({ freelancerList, onOpenPostAd }) => {
  const [selectedSkill, setSelectedSkill] = useState<string>('all');
  const [contactedFreelancer, setContactedFreelancer] = useState<FreelancerItem | null>(null);

  const skills = ['الكل', 'React', 'Flutter', 'تكامل CMI', 'TikTok Ads', 'Meta Blueprint', 'Figma', 'UI/UX'];

  const filteredFreelancers = selectedSkill === 'الكل'
    ? freelancerList
    : freelancerList.filter(f => f.skills.some(s => s.toLowerCase().includes(selectedSkill.toLowerCase())));

  return (
    <div className="flex flex-col w-full text-right py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs text-[#006948] font-extrabold uppercase">سوق العمل الحر والتعاقدات عن بعد</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            كفاءات ومقاولون ذاتيون مغاربة معتمدون
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            وظف مبرمجين، مسوقين، ومصممين مغاربة محترفين لخدمة مشاريعك مع فواتير قانونية وضمان تسليم العمل.
          </p>
        </div>

        <button
          onClick={() => onOpenPostAd('remote_work')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold shadow-xs transition shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>سجل ككفاءة أو اعرض خدماتك</span>
        </button>
      </div>

      {/* Skills Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {skills.map((skill, i) => (
          <button
            key={i}
            onClick={() => setSelectedSkill(skill)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedSkill === skill
                ? 'bg-[#006948] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {contactedFreelancer && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <span>تم إرسال طلب دراسة المشروع إلى {contactedFreelancer.name} وسيتواصل معك خلال 4 ساعات.</span>
        </div>
      )}

      {/* Freelancers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredFreelancers.map((freelancer) => (
          <article
            key={freelancer.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img src={freelancer.image} alt={freelancer.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>مقاول ذاتي رسمي</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                  {freelancer.city}
                </div>
              </div>

              <div className="p-5 flex flex-col gap-2.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-black text-[#006948]">
                    {freelancer.rate.toLocaleString()}{' '}
                    <span className="text-xs text-slate-500 font-normal">{freelancer.rateUnit}</span>
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{freelancer.rating} ({freelancer.contractsCount})</span>
                  </div>
                </div>

                <h3 className="font-bold text-sm text-slate-900">{freelancer.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{freelancer.description}</p>

                <div className="flex flex-wrap gap-1 mt-1">
                  {freelancer.skills.map((s, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-700 font-bold">{freelancer.name}</span>
              <button
                type="button"
                onClick={() => setContactedFreelancer(freelancer)}
                className="px-3.5 py-2 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>طلب دراسة مشروع</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
