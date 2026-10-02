import React from 'react';
import { Shield, Headset, CheckCircle, Lock, FileText, PhoneCall } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenContractsGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenContractsGuide }) => {
  return (
    <footer className="w-full bg-[#f1f3f9] text-slate-800 pt-12 pb-8 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          {/* Brand & Support Desk */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-[#006948] text-white flex items-center justify-center font-bold text-lg">
                B
              </div>
              <span className="font-extrabold text-xl text-[#006948]">بورشيم</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              المنصة الوطنية الرقمية الموحدة للتجارة، العقارات، العمل عن بعد، وتطوير المهارات والشراكات في المغرب.
            </p>
            <div className="flex items-center gap-2 text-[#006948] bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 text-xs font-semibold mt-2">
              <Headset className="w-4 h-4 shrink-0" />
              <span>فريق الدعم المباشر ومساعدة المستخدمين</span>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-3">الأقسام والخدمات</h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-600">
              <li>
                <button 
                  onClick={() => onSelectTab('commerce')} 
                  className="hover:text-[#006948] transition-colors cursor-pointer"
                >
                  سوق التجارة والبيع بالجملة والتقسيط
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('real_estate')} 
                  className="hover:text-[#006948] transition-colors cursor-pointer"
                >
                  عقارات للبيع والكراء (كراء/بيع موثق)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('remote_work')} 
                  className="hover:text-[#006948] transition-colors cursor-pointer"
                >
                  فرص العمل الحر والوظائف عن بعد
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('learning')} 
                  className="hover:text-[#006948] transition-colors cursor-pointer"
                >
                  التكوين المستمر والشهادات المهنية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('partnerships')} 
                  className="hover:text-[#006948] transition-colors cursor-pointer"
                >
                  شراكات المشاريع والاستثمار التجاري
                </button>
              </li>
            </ul>
          </div>

          {/* Transparency & Safety */}
          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-3">الشفافية والمساعدة</h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-600">
              <li>
                <button 
                  onClick={onOpenContractsGuide} 
                  className="hover:text-[#006948] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#006948]" />
                  <span>دليل العقارات ونماذج عقود الشراكة</span>
                </button>
              </li>
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  تنبيهات الشفافية والأمان التجاري
                </span>
              </li>
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  ميثاق مجتمع بورشيم الأخلاقي
                </span>
              </li>
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  ضمان المعاملات والوساطة الموثوقة (Escrow)
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-3">السياسات القانونية بالمملكة</h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-600">
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  شروط الاستخدام العامة والتنظيمية
                </span>
              </li>
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  سياسة الخصوصية وحماية المعطيات (CNDP 09-08)
                </span>
              </li>
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  قانون حماية المستهلك 31.08
                </span>
              </li>
              <li>
                <span className="hover:text-[#006948] transition-colors cursor-default">
                  تواصل الدعم التقني المؤسسي
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs text-slate-500">
          <div>
            جميع الحقوق محفوظة منصة بورشيم © 2025 BOURCHIM Digital Platform
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1 text-emerald-700">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>بيئة موثوقة ومحمية 256-bit</span>
            </span>
            <span>الدار البيضاء • الرباط • طنجة • مراكش • فاس • أكادير</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
