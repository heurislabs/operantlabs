import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import Link from "next/link";

interface ProductsPageProps {
  searchParams: { category?: string };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16 md:pt-36">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8">products</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link 
                href="/products?category=hospitality"
                className="text-gray-600 hover:text-black transition-colors"
              >
                hospitality
              </Link>
              <Link 
                href="/products?category=retail"
                className="text-gray-600 hover:text-black transition-colors"
              >
                retail
              </Link>
              <Link 
                href="/products?category=warehouse-logistics"
                className="text-gray-600 hover:text-black transition-colors"
              >
                warehouse & logistics
              </Link>
            </div>
          </div>

          <ProductGrid category={searchParams.category} />

        </section>
      </main>

      <Footer />
    </div>
  );
}
