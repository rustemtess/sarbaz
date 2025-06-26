import { Navbar } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="w-full flex-1 overflow-auto">
        {children}
        <footer className="w-full flex flex-col items-center justify-center py-4 px-4 bg-default-100">
          <div className="w-full max-w-[1000px] flex flex-wrap gap-2 items-center justify-between py-5">
            <div>
              <p className="text-default-500 text-sm">
                Контакты: rustemnew@icloud.com
              </p>
              <p className="text-default-500 text-sm">
                Телефон: +7 (778) 939-35-90
              </p>
            </div>
            <h2 className="text-default-800">
              Информационный портал о воинской службе в Казахстане.
            </h2>
          </div>
          <p className="text-sm text-default-500">
            © 2025 Sarbaz+. Все права защищены.
          </p>
        </footer>
      </main>
    </div>
  );
}
