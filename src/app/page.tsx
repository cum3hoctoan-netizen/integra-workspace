import React from 'react';
import studentsData from './data/students.json';
import MathBackground from './components/MathBackground';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 flex flex-col items-center relative font-sans text-slate-800">
      <MathBackground />

      {/* Phần Header giống các trang Dashboard */}
      <div className="w-full max-w-5xl z-10 relative mb-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-integra-navy tracking-tight mb-3">
          Integra Workspace
        </h1>
        <p className="text-lg font-medium text-integra-gold bg-integra-gold/10 px-4 py-1.5 rounded-full border border-integra-gold/20">
          Hệ sinh thái Quản trị & Sáng tạo Học liệu
        </p>
      </div>

      {/* Khối nội dung chính (Container) */}
      <div className="w-full max-w-5xl z-10 relative">
        <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800">
              Hồ sơ chuyên đề & Đánh giá năng lực
            </h2>
            <span className="text-sm font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              {studentsData.length} Hồ sơ
            </span>
          </div>
          
          <div className="flex flex-col gap-4">
            {studentsData.map((record) => (
              <details 
                key={record.id} 
                className="group border border-slate-200 hover:border-integra-navy/30 transition-all duration-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 select-none">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      {/* Nhãn trạng thái (Badge) */}
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
                        record.status === 'Đã hoàn thành' 
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                          : 'bg-blue-50 text-blue-600 border-blue-100'
                      }`}>
                        {record.status}
                      </span>
                      <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {record.level}
                      </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mt-1 group-hover:text-integra-navy transition-colors">
                      {record.topicTitle}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      <span className="font-semibold text-slate-700">{record.studentName}</span>
                      <span className="text-slate-300">•</span>
                      <span>{record.cohort}</span>
                    </div>
                  </div>
                  
                  {/* Nút mũi tên gập/mở */}
                  <div className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-integra-navy/5 transition-colors">
                    <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-integra-navy">
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </div>
                </summary>
                
                {/* Nội dung chi tiết */}
                <div className="p-5 md:p-6 border-t border-slate-100 bg-slate-50/50 rounded-b-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-semibold text-slate-700">Trường:</span>
                        <span>{record.institution}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-semibold text-slate-700">Thời gian:</span>
                        <span>{record.startYear} - {record.expectedCompletion}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <div className="font-semibold text-integra-navy mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-integra-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Chẩn đoán chuyên môn:
                      </div>
                      <div className="text-sm italic text-slate-600 leading-relaxed">
                        "{record.diagnostic}"
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-5 flex flex-wrap gap-2">
                    {record.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-integra-navy/5 text-integra-navy px-3 py-1.5 rounded-lg border border-integra-navy/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}