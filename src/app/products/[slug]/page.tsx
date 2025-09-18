import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

// Product data structure
interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  price: string;
  category: string;
  isNew?: boolean;
  isDiscontinued?: boolean;
  description: string;
  images: string[];
  details: string[];
  shippingInfo?: string;
  specialOffer?: string;
  relatedProducts?: {
    name: string;
    slug: string;
    price: string;
    image: string;
  }[];
  accessories?: {
    name: string;
    slug: string;
    price: string;
    image: string;
  }[];
}

// Sample product data - this would typically come from a database or CMS
const products: ProductDetail[] = [
  {
    id: "1",
    name: "EP–133 K.O. II",
    slug: "ep-133",
    price: "$299",
    category: "EP series",
    isNew: true,
    description: "the ultimate pocket sampler and sequencer. K.O. II features hundreds of built-in sounds and the ability to sample and sequence your own. create beats, melodies and complete songs with this powerful little machine.",
    images: [
      "/placeholder-product-1.jpg",
      "/placeholder-product-2.jpg",
      "/placeholder-product-3.jpg"
    ],
    shippingInfo: "ships from the U.S.",
    specialOffer: "buy for $599 and get a free K.O. II splash kit. offer applies at checkout.",
    details: [
      "built-in mic and speaker",
      "8 stereo voices / 16 mono",
      "64MB memory including 48MB ROM sounds and 16MB user sample memory",
      "12 user projects",
      "8 built-in effects and 16 punch-in effects",
      "pressure sensitive keys and multi-functional fader",
      "sampling frequency: 44.1 kHz / 16-bit",
      "1x stereo in/out, sync in/out, midi in/out and usb-c",
      "powered by 2x AA batteries, or via usb-c",
      "dimensions: 162 x 102 x 15 mm | 6.4 x 4.0 x 0.6 in"
    ],
    relatedProducts: [
      { name: "K.O. II splash kit", slug: "ko-ii-splash-kit", price: "$89", image: "/placeholder-related-1.jpg" },
      { name: "double duo kit", slug: "double-duo-kit", price: "$149", image: "/placeholder-related-2.jpg" },
      { name: "EP–1320 medieval", slug: "ep-1320", price: "$299", image: "/placeholder-related-3.jpg" }
    ],
    accessories: [
      { name: "protective case", slug: "ep-protective-case", price: "$39", image: "/placeholder-acc-1.jpg" },
      { name: "audio cable", slug: "audio-cable", price: "$15", image: "/placeholder-acc-2.jpg" }
    ]
  },
  {
    id: "2",
    name: "OP–XY",
    slug: "op-xy",
    price: "$2299",
    category: "synthesizer",
    description: "the next generation synthesizer and sampler. OP–XY combines the beloved OP–1 workflow with modern synthesis capabilities and expanded sampling features.",
    images: [
      "/placeholder-opxy-1.jpg",
      "/placeholder-opxy-2.jpg"
    ],
    shippingInfo: "ships worldwide",
    details: [
      "dual synthesis engines",
      "advanced sampling capabilities",
      "built-in effects and sequencer",
      "high-resolution color display",
      "premium build quality",
      "rechargeable battery",
      "usb-c connectivity",
      "dimensions: 286 x 102 x 14.3 mm"
    ],
    relatedProducts: [
      { name: "OP–1", slug: "op-1", price: "$1999", image: "/placeholder-op1.jpg" },
      { name: "field accessories", slug: "field-accessories", price: "$199", image: "/placeholder-field.jpg" }
    ]
  },
  {
    id: "3",
    name: "TP–7",
    slug: "tp-7",
    price: "$1499",
    category: "field recorder",
    description: "professional field recording redefined. the TP–7 combines pristine audio quality with intuitive operation in a compact, durable package.",
    images: [
      "/placeholder-tp7-1.jpg"
    ],
    details: [
      "32-bit float recording",
      "built-in microphones",
      "phantom power for external mics",
      "timecode synchronization",
      "weather-resistant design",
      "long battery life",
      "professional audio interfaces"
    ]
  },
  {
    id: "4",
    name: "OB–4",
    slug: "ob-4",
    price: "$899",
    category: "radio",
    description: "magic radio for everyone. the OB–4 is a high fidelity loudspeaker and FM radio that connects to your devices and the world around you.",
    images: [
      "/placeholder-ob4-1.jpg"
    ],
    shippingInfo: "ships worldwide",
    details: [
      "FM radio with digital display",
      "bluetooth connectivity",
      "line input for external devices",
      "built-in rechargeable battery",
      "premium wood and metal construction",
      "dimensions: 340 x 190 x 90 mm"
    ]
  },
  {
    id: "5",
    name: "CM–15",
    slug: "cm-15",
    price: "$199",
    category: "microphone",
    description: "compact condenser microphone designed for field recording and studio applications. crystal clear sound in a portable package.",
    images: [
      "/placeholder-cm15-1.jpg"
    ],
    details: [
      "condenser capsule",
      "cardioid polar pattern",
      "phantom power required",
      "frequency response: 20Hz - 20kHz",
      "maximum SPL: 130dB",
      "ultra-low noise floor"
    ]
  },
  {
    id: "6",
    name: "TX–6",
    slug: "tx-6",
    price: "$1199",
    category: "mixer",
    description: "ultra-portable stereo mixer with built-in synthesizer and sequencer. perfect for live performance and studio production.",
    images: [
      "/placeholder-tx6-1.jpg"
    ],
    details: [
      "6 stereo channels",
      "built-in effects",
      "integrated synthesizer",
      "step sequencer",
      "usb-c connectivity",
      "battery powered",
      "dimensions: 186 x 98 x 40 mm"
    ]
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-12 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Product Images and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-lg font-medium">{product.name}</div>
                  <div className="text-sm">product image</div>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((_, index) => (
                    <div key={index} className="w-16 h-16 bg-gray-100 rounded border-2 border-transparent hover:border-black cursor-pointer flex items-center justify-center">
                      <div className="text-xs text-gray-400">{index + 1}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  {product.isNew && (
                    <Badge className="bg-black text-white">new</Badge>
                  )}
                  {product.isDiscontinued && (
                    <Badge variant="outline">discontinued</Badge>
                  )}
                </div>
                <div className="text-sm text-gray-600 mb-4">{product.category}</div>
              </div>

              <div className="text-2xl font-bold">{product.price}</div>
              
              {product.shippingInfo && (
                <div className="text-sm text-gray-600">{product.shippingInfo}</div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                  disabled={product.isDiscontinued}
                >
                  {product.isDiscontinued ? 'discontinued' : 'add to cart'}
                </Button>
                
                {!product.isDiscontinued && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full rounded-full border-black text-black hover:bg-black hover:text-white"
                  >
                    buy now
                  </Button>
                )}
              </div>

              {/* Special Offer */}
              {product.specialOffer && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium">{product.specialOffer}</div>
                </div>
              )}

              {/* Description */}
              <div className="prose prose-sm">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6">details</h2>
            <Card className="p-6">
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    • {detail}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Related Products */}
          {product.relatedProducts && product.relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-bold mb-6">related</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.relatedProducts.map((related, index) => (
                  <Link key={index} href={`/products/${related.slug}`} className="group">
                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                      <EvervaultCard text={related.name} />

                      <div className="flex items-center justify-between w-full mt-4">
                        <h3 className="font-medium text-sm group-hover:underline dark:text-white text-black">{related.name}</h3>
                        <div className="text-sm font-medium dark:text-white text-black">{related.price}</div>
                      </div>
                      <Button size="sm" className="w-full mt-2 rounded-full bg-black text-white hover:bg-gray-800">
                        add to cart
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Accessories */}
          {product.accessories && product.accessories.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-bold mb-6">accessories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.accessories.map((accessory, index) => (
                  <Link key={index} href={`/products/${accessory.slug}`} className="group">
                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                      <EvervaultCard text={accessory.name} />

                      <div className="flex items-center justify-between w-full mt-4">
                        <h3 className="font-medium text-sm group-hover:underline dark:text-white text-black">{accessory.name}</h3>
                        <div className="text-sm font-medium dark:text-white text-black">{accessory.price}</div>
                      </div>
                      <Button size="sm" className="w-full mt-2 rounded-full bg-black text-white hover:bg-gray-800">
                        add to cart
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t">
            <Link 
              href="/products" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              ← back to products
            </Link>
            <Link 
              href="/store" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              back to store
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for known products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - ${product.price}`,
    description: product.description,
  };
}
