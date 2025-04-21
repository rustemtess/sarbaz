import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

// light theme "radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.9) 100%, rgba(255, 255, 255, 0.95) 100%)",
// dark theme "radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 0.95) 100%)",

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main>{children}</main>
      {/** <footer className="w-full flex items-center justify-center py-3">

    </footer> **/}
    </div>
  );
}
