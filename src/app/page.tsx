import React from 'react';
// Import file JSON vừa tạo
import studentsData from './data/students.json';

export default function Home() {
  return (
    <main className="min-h-screen p-10 flex flex-col items-center">
      {/* Khối Tiêu đề */}
      <div className="w-full max-w-4xl border-b-2 border-integra-gold pb-4 mb-8">
        <h1 className="text-4xl font-bold text-integra-navy uppercase tracking-widest">
          Integra Workspace
        </h1>
        <p className="text-integra-gold font-semibold mt-2">
          Hệ sinh thái Quản trị & Sáng tạo Học liệu
        </p>
      </div>

      {/* Khối Hồ sơ học sinh */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-integra-navy mb-6 border-b-2 border-gray-100 pb-2">
          Hồ sơ chuyên đề & Đánh giá năng lực
        </h2>
        
        <div className="flex flex-col gap-4">
          {/* Vòng lặp duyệt qua từng học sinh trong file JSON */}
          {studentsData.map((record) => (
            <details key={record.id} className="group border border-gray-200 rounded-lg bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-4 font-medium">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${record.status === 'Đã hoàn thành' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-integra-navy'}`}>
                      {record.status}
                    </span>
                    <span className="text-sm text-gray-500">{record.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">{record.topicTitle}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    Học sinh: <span className="font-semibold">{record.studentName}</span> | {record.cohort}
                  </div>
                </div>
                {/* Biểu tượng mũi tên */}
                <span className="transition group-open:rotate-180 text-integra-gold">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              
              {/* Nội dung chi tiết hiện ra khi mở thẻ */}
              <div className="p-4 border-t border-dashed border-gray-200 bg-integra-ivory/30">
                <div className="grid grid-cols-[150px_1fr] gap-2 text-sm text-gray-700">
                  <div className="font-semibold text-integra-navy">Trường:</div>
                  <div>{record.institution}</div>
                  
                  <div className="font-semibold text-integra-navy">Thời gian:</div>
                  <div>{record.startYear} - {record.expectedCompletion}</div>
                  
                  <div className="font-semibold text-integra-navy">Chẩn đoán:</div>
                  <div className="italic text-integra-gold font-medium">{record.diagnostic}</div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {record.tags.map(tag => (
                    <span key={tag} className="text-xs border border-integra-gold text-integra-navy px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>

      </div>
    </main>
  );
}