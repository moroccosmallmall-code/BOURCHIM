import React, { useState } from 'react';
import { X, Handshake, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { PartnershipItem } from '../data/mockData';

interface PartnershipDetailModalProps {
  partnership: PartnershipItem | null;
  onClose: () => void;
  onSubmitProposal: (pt: PartnershipItem, message: string) => void;
}

export const PartnershipDetailModal: React.FC<PartnershipDetailModalProps> = ({
  partnership,
  onClose,
  onSubmitProposal
}) => {
  const [applicantRole, setApplicantRole] = useState('عمر المنصوري - مقاول ذاتي ومستثمر');
  const [contributionType, setContributionType] = useState('مساهمة مالية مع إدارة استراتيجية (رأس مال)');
  const [proposalMessage, setProposalMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!partnership) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        onSubmitProposal(partnership, proposalMessage);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-right my-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-50 border-b border-slate-100">
          <div className="flex items-center gap-2.5 text-[#006948]">
            <Handshake className="w-5 h-5" />
            <span className="font-extrabold text-sm sm:text-base text-slate-900">
              طلب تواصل وشراكة آمن وموثق
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSent ? (
          <div className="p-8 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-base text-slate-900">تم إرسال طلب الشراكة بنجاح!</h4>
            <p className="text-xs text-slate-500 max-w-xs">
              سيصلك إشعار بالرد فور مراجعة الشريك ({partnership.proponentName}) لطلبك وقبوله عبر المنصة.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            {/* Target Project Snippet */}
            <div className="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-100">
              <span className="text-[10px] text-emerald-800 font-bold block">{partnership.categoryLabel}</span>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mt-0.5">{partnership.title}</h4>
              <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">{partnership.description}</p>
            </div>

            {/* Privacy Protection Notice */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-600 leading-snug">
                حفاظاً على الخصوصية ومكافحة الرسائل المزعجة، لن تُعرض أرقام الهواتف أو البريد المباشر إلا بعد موافقة الطرف الآخر المتبادلة في منصة بورشيم.
              </p>
            </div>

            {/* Applicant Role */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                مقدم الطلب / صفتك المهنية
              </label>
              <input
                type="text"
                value={applicantRole}
                onChange={(e) => setApplicantRole(e.target.value)}
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#006948] outline-hidden"
              />
            </div>

            {/* Contribution Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                نوع المساهمة التي تعرضها للشراكة
              </label>
              <select
                value={contributionType}
                onChange={(e) => setContributionType(e.target.value)}
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white outline-hidden cursor-pointer"
              >
                <option value="مساهمة مالية مع إدارة استراتيجية (رأس مال)">مساهمة مالية مع إدارة استراتيجية (رأس مال)</option>
                <option value="خبرة تقنية وتسويق رقمي متكامل">خبرة تقنية وتسويق رقمي متكامل</option>
                <option value="مقر تجاري وشبكة توزيع لوجستية">مقر تجاري وشبكة توزيع لوجستية</option>
                <option value="تزويد وتوريد معتمد بأسعار تفضيلية">تزويد وتوريد معتمد بأسعار تفضيلية</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                رسالة التعارف وعرض التعاون الأولي
              </label>
              <textarea
                required
                rows={3}
                value={proposalMessage}
                onChange={(e) => setProposalMessage(e.target.value)}
                placeholder="قدم نبذة مختصرة عن رؤيتك للتعاون، خبرتك السابقة، وما القيمة المضافة التي ستقدمها للمشروع..."
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white outline-hidden"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold transition"
              >
                إلغاء
              </button>

              <button
                type="submit"
                disabled={isSending}
                className="px-5 py-2.5 rounded-xl bg-[#006948] hover:bg-[#005137] text-white text-xs sm:text-sm font-bold shadow-xs transition flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSending ? 'جارِ الإرسال...' : 'إرسال طلب الربط المهني'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
