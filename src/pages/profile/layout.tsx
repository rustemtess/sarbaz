import { Navbar } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col">
      <Navbar showLinks={false} />
      <main className="w-full flex justify-center relative">{children}</main>
    </div>
  );
}
