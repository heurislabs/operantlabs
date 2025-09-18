import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const audioProducts = [
  { name: "OP–XY", slug: "op-xy", category: "synthesizer" },
  { name: "EP–1320 medieval", slug: "ep-1320", category: "EP series" },
  { name: "EP–133 K.O. II", slug: "ep-133", category: "EP series", isNew: true },
  { name: "TP–7", slug: "tp-7", category: "field" },
  { name: "CM–15", slug: "cm-15", category: "field" },
  { name: "TX–6", slug: "tx-6", category: "field" },
  { name: "OP–1", slug: "op-1", category: "synthesizer" },
  { name: "choir", slug: "choir", category: "synthesizer" },
  { name: "PO-80", slug: "po-80", category: "pocket operator" },
];

const discontinuedAudioProducts = [
  { name: "OP–Z", slug: "op-z", category: "synthesizer" },
  { name: "pocket operatormodular", slug: "po/modular", category: "pocket operator" },
  { name: "OP-1", slug: "op-1/original", category: "synthesizer" },
];

export default function AudioSynthesizersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-12 md:pt-32">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8">audio & synthesizers</h1>
          </div>

          {/* Current Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {audioProducts.map((product, index) => (
              <Link
                key={index}
                href={`/products/${product.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow hover-te">
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-sm text-center">
                      {product.name}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-2">
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
                </div>
              </Link>
            ))}
          </div>

          {/* Discontinued Products */}
          <div className="mb-16">
            <h2 className="text-lg font-medium mb-6 text-gray-600">discontinued</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {discontinuedAudioProducts.map((product, index) => (
                <Link
                  key={index}
                  href={`/products/${product.slug}`}
                  className="group block opacity-60 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-white rounded-lg p-6">
                    {/* Product Image Placeholder */}
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-gray-400 text-sm text-center">
                        {product.name}
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm group-hover:underline">
                          {product.name}
                        </h3>
                        <span className="border border-gray-300 text-gray-500 text-xs px-2 py-1 rounded">
                          discontinued
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{product.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link 
              href="/products/po" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              pocket operators
            </Link>
          </div>

          <div className="text-center mt-8">
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
