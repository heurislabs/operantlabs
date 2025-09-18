import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-12 md:pt-32">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8">products</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link 
                href="/products/audio-and-synthesizers"
                className="text-gray-600 hover:text-black transition-colors"
              >
                audio & synthesizers
              </Link>
              <Link 
                href="/products/wireless-speakers"
                className="text-gray-600 hover:text-black transition-colors"
              >
                wireless speakers
              </Link>
              <Link 
                href="/designs"
                className="text-gray-600 hover:text-black transition-colors"
              >
                designs
              </Link>
            </div>
          </div>

          <ProductGrid />

        </section>
      </main>

      <Footer />
    </div>
  );
}
