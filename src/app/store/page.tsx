import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StorePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">store</h1>
            <p className="text-gray-600 mb-8">
              worldwide delivery. high quality, well designed, electronic products for all people who love sound and music.
            </p>
            
            <div className="space-y-4">
              <div className="text-sm text-gray-500">
                visit our official store for the latest products and accessories
              </div>
              
              <div className="flex justify-center gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="rounded-full bg-black text-white hover:bg-gray-800 px-8"
                >
                  <Link href="/products">
                    browse products
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="rounded-full border-black text-black hover:bg-black hover:text-white px-8"
                >
                  <Link href="/store/checkout">
                    checkout
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { name: "EP–133 K.O. II", slug: "ep-133", category: "sampler", price: "$299", isNew: true },
              { name: "OP–XY", slug: "op-xy", category: "synthesizer", price: "$2299" },
              { name: "TP–7", slug: "tp-7", category: "field recorder", price: "$1499" },
              { name: "OB–4", slug: "ob-4", category: "radio", price: "$899" },
              { name: "CM–15", slug: "cm-15", category: "microphone", price: "$199" },
              { name: "TX–6", slug: "tx-6", category: "mixer", price: "$1199" },
            ].map((product, index) => (
              <Link key={index} href={`/products/${product.slug}`} className="group block">
                <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-sm text-center">
                      {product.name}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm group-hover:underline">
                            {product.name}
                          </h3>
                          {product.isNew && (
                            <span className="bg-black text-white text-xs px-2 py-1 rounded">
                              new
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{product.price}</div>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                    >
                      add to cart
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Store Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-black mb-2">shipping</h3>
              <p>worldwide delivery available</p>
            </div>
            <div>
              <h3 className="font-medium text-black mb-2">support</h3>
              <p>expert customer service</p>
            </div>
            <div>
              <h3 className="font-medium text-black mb-2">warranty</h3>
              <p>comprehensive product coverage</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
