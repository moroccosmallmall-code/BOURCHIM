import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

interface ContractsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContractsGuideModal: React.FC<ContractsGuideModalProps> = ({ isOpen, onClose }) => {
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = (docName: string) => {
    setDownloadedDoc(docName);
    setTimeout(() => {
      setDownloadedDoc(null);
    }, 2500);
  };

  const contracts = [
    {
      id: 'nda',
      title: 'اتفاقية عدم إفصاح وحماية السرية (NDA Maroc)',
      tag: 'حماية الأفكار والمعلومات',
      description: 'نموذج ثنائي اللغة (عربية/فرنسية) يضمن سرية الأرقام والخطط التجارية قبل بدء المفاوضات المعمقة.',
      pages: '4 صفحات • متوافق مع قانون 09-08'
    },
    {
      id: 'mouhassassa',
      title: 'عقد شركة المحاصة المغربية (Société en Participation)',
      tag: 'شراكة بدون تأسيس شركة',
      description: 'أفضل صيغة قانونية للشراكة في المشاريع والتجارة الإلكترونية والتوزيع دون الحاجة لتأسيس شركة مساهمة فورية.',
      pages: '6 صفحات • متوافق مع مدونة التجارة'
    },
    {
      id: 'commercial-lease',
      title: 'عقد كراء تجاري ومهني نموذجي (Bail Commercial)',
      tag: 'العقارات والمحلات',
      description: 'صيغة قانونية محكمة لعقود الكراء التجاري والمهني تتوافق مع القانون 49.16 لتفادي النزاعات وحماية المالك والمكتري.',
      pages: '8 صفحات • قانون 49.16'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-right my-auto p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2 text-[#006948]">
            <Scale className="w-5 h-5" />
            <h3 className="font-extrabold text-lg text-slate-900">
              دليل صياغة عقود الشراكة والمعاملات الموثقة
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          توفر منصة بورشيم نماذج قانونية معتمدة ومراجعة من طرف مستشارين قانونيين في المغرب لتمكين الفاعلين الاقتصاديين والشركاء من إبرام تعاقداتهم بكل وضوح وضمان حقوق كافة الأطراف.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          {contracts.map((doc) => (
            <div
              key={doc.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{doc.title}</h4>
                    <span className="text-[10px] text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full font-semibold">
                      {doc.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{doc.description}</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">{doc.pages}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(doc.title)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 hover:bg-emerald-50 hover:text-[#006948] hover:border-emerald-300 text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0 shadow-2xs"
              >
                {downloadedDoc === doc.title ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تم التحميل ✓</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>تحميل النموذج</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200/70 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-900 leading-relaxed">
            <strong>تنبيه قانوني:</strong> هذه النماذج استرشادية مصممة لتيسير الاتفاق المبدئي. ننصح دائماً بمصادقة العقود لدى موثق رسمي (Notaire) أو المصالح الجماعية المختصة لتكتسب الصبغة التنفيذية الكاملة.
          </p>
        </div>
      </div>
    </div>
  );
};
