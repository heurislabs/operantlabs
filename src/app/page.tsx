import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/evervault-card";
import productsData from "@/data/products.json";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  isNew?: boolean;
  isDiscontinued?: boolean;
  images: string[];
  description: string;
}

const products: Product[] = productsData.products;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-36">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
                {/* Logo/25 Section */}
                <div className="text-center mb-16">
                  <div className="text-6xl font-shilia-thin mb-8">Operant Labs</div>
                  <div className="text-sm font-shilia-light text-gray-600">Australia&apos;s premier source for intelligent autonomous robots.</div>
                </div>

          {/* Video Section */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <VideoPlayer 
              videoId="1119041772" 
              className="w-full h-96 md:h-[500px]"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <Link href="/products">
              <Button 
                size="lg" 
                className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-shilia-light"
              >
                browse products
              </Button>
            </Link>
          </div>

        </section>

        {/* Products Preview */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {products.filter(p => !p.isDiscontinued).slice(0, 12).map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  {/* Product Image */}
                  <div className="w-full h-32 mb-4 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <div className="text-sm font-medium">{product.name}</div>
                        <div className="text-xs">product image</div>
                      </div>
                    )}
                  </div>


                  <h2 className="dark:text-white text-black mt-4 text-sm font-light line-clamp-2">
                    {product.description}
                  </h2>
                  <div className="text-xs text-gray-500 mt-1">
                    {product.category}
                  </div>
                  <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                    Learn More
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/products" 
              className="text-sm font-shilia-light text-gray-600 hover:text-black transition-colors border-b border-gray-300 hover:border-black"
            >
              explore all products
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
