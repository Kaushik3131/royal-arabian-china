import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function CnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
