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

      {/* Khối Chức năng (Sẽ ghép module sau) */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-integra-navy mb-4">
          Hồ sơ chuyên đề & Đánh giá năng lực
        </h2>
        <p className="text-gray-600">
          (Các module Quản lý học sinh, Ví điện tử và Sinh đề thi tự động sẽ hiển thị tại đây)
        </p>
      </div>
    </main>
  );
}