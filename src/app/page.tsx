import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Logo/25 Section */}
          <div className="text-center mb-16">
            <div className="text-6xl font-shilia-thin mb-8">Roboteq</div>
            <div className="text-sm font-shilia-light text-gray-600">Australia's premier source for high-end robotics.</div>
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

          {/* Newsletter Section */}
          <div className="text-center border-t border-gray-200 pt-16">
            <Link 
              href="/newsletter" 
              className="text-sm font-shilia-light text-gray-600 hover:text-black transition-colors"
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
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  <EvervaultCard text={product} />

                  <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                    Explore this innovative product with cutting-edge technology.
                  </h2>
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
