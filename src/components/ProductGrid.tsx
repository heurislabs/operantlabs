"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import productsData from "@/data/products.json";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  isNew?: boolean;
  isDiscontinued?: boolean;
}

const products: Product[] = productsData.products;

export function ProductGrid() {
  const currentProducts = products.filter(p => !p.isDiscontinued);
  const discontinuedProducts = products.filter(p => p.isDiscontinued);

  return (
    <div className="space-y-16">
      {/* Current Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group block"
          >
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

              <EvervaultCard text={product.name} />

              <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                {product.category}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                {product.isNew && (
                  <Badge variant="secondary" className="text-xs">
                    new
                  </Badge>
                )}
                <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
                  Explore
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Discontinued Products */}
      {discontinuedProducts.length > 0 && (
        <div>
          <h2 className="text-lg font-medium mb-6 text-gray-600">discontinued</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {discontinuedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block opacity-60 hover:opacity-80 transition-opacity"
              >
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] opacity-60">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  <EvervaultCard text={product.name} />

                  <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                    {product.category}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      discontinued
                    </Badge>
                    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
                      View Details
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
