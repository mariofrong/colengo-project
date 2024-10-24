import ProductSection from "@/components/home-page/ProductSection";
import { Header } from "@/components/Header";
import NotificationBar from "@/components/NotificationBar";
import PromoteSection from "@/components/home-page/PromoteSection";
import { products } from "@/mock/productsData";

export default function Home() {
  return (
    <div className="min-h-screen mb-8">
      <NotificationBar />
      <Header />
      <PromoteSection />

      <main className="mx-auto px-4">
        <div className="flex flex-col justify-center items-center pt-24 pb-10">
          <span className="text-center text-lg">Een greep uit onze</span>
          <span className="text-center text-[26px]"> &MOSS COLLECTIE</span>
          <div className="w-20 border-black border-b pt-3"></div>
        </div>
        <ProductSection products={products} />
      </main>
    </div>
  );
}
