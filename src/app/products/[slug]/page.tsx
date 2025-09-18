import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import productsData from "@/data/products.json";

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
  }[];
  accessories?: {
    name: string;
    slug: string;
    price: string;
  }[];
}

// Load product data from JSON
const products: ProductDetail[] = productsData.products;

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
                  asChild
                  size="lg" 
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                  disabled={product.isDiscontinued}
                >
                  {product.isDiscontinued ? (
                    <span>discontinued</span>
                  ) : (
                    <Link href="/support">contact us</Link>
                  )}
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
                      <Button asChild size="sm" className="w-full mt-2 rounded-full bg-black text-white hover:bg-gray-800">
                        <Link href="/support">contact us</Link>
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
                      <Button asChild size="sm" className="w-full mt-2 rounded-full bg-black text-white hover:bg-gray-800">
                        <Link href="/support">contact us</Link>
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
