import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Logo/25 Section */}
          <div className="text-center mb-16">
            <div className="text-6xl font-bold mb-8">25</div>
            <div className="text-sm text-gray-600">the flipped out year</div>
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
            <Link href="/store">
              <Button 
                size="lg" 
                className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
              >
                visit store
              </Button>
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="text-center border-t border-gray-200 pt-16">
            <Link 
              href="/newsletter" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              join our newsletter
            </Link>
          </div>
        </section>

        {/* Products Preview */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              "field system™",
              "EP–133 K.O. II", 
              "OP–XY",
              "EP series",
              "pocket operators",
              "TP–7",
              "OB–4",
              "CM–15",
              "TX–6",
              "OP–1",
              "field accessories",
              "choir"
            ].map((product, index) => (
              <Link 
                key={index}
                href={`/products/${product.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                className="group"
              >
                <div className="aspect-square bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-xs text-gray-400 text-center">
                      {product}
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-center group-hover:underline">
                  {product}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/products" 
              className="text-sm text-gray-600 hover:text-black transition-colors border-b border-gray-300 hover:border-black"
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
