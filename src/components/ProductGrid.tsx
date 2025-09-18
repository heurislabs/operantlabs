"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
  industries?: string[];
}

const products: Product[] = productsData.products;

interface ProductGridProps {
  category?: string;
}

// Map category URL parameters to industry categories in the product data
function getCategoryFilter(category?: string): string[] {
  switch (category) {
    case 'hospitality':
      return ['Hospitality'];
    case 'retail':
      return ['Retail', 'Shopping Centers', 'Department Stores', 'Supermarkets'];
    case 'warehouse-logistics':
      return ['warehouse', 'logistics', 'Manufacturing', 'Assembly', 'Industrial'];
    default:
      return []; // Show all products when no category is selected
  }
}

export function ProductGrid({ category }: ProductGridProps) {
  const categoryFilters = getCategoryFilter(category);
  
  let filteredProducts = products;
  if (categoryFilters.length > 0) {
    filteredProducts = products.filter(product => {
      // Check if product has industries field and if any of its industries match our category filters
      if (product.industries && Array.isArray(product.industries)) {
        return product.industries.some(industry => 
          categoryFilters.some(filter => 
            industry.toLowerCase().includes(filter.toLowerCase())
          )
        );
      }
      return false;
    });
  }

  const currentProducts = filteredProducts.filter(p => !p.isDiscontinued);
  const discontinuedProducts = filteredProducts.filter(p => p.isDiscontinued);

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
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

              {/* Product Image */}
              <div className="w-full h-48 mb-4 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-lg font-medium">{product.name}</div>
                    <div className="text-sm">product image</div>
                  </div>
                )}
              </div>


              <h2 className="dark:text-white text-black mt-4 text-sm font-medium">
                {product.name}
              </h2>
              <p className="dark:text-gray-300 text-gray-600 mt-2 text-xs font-light line-clamp-2">
                {product.description}
              </p>
              <div className="dark:text-gray-400 text-gray-500 mt-1 text-xs">
                {product.category}
              </div>
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
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative opacity-60">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  {/* Product Image */}
                  <div className="w-full h-48 mb-4 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <div className="text-lg font-medium">{product.name}</div>
                        <div className="text-sm">product image</div>
                      </div>
                    )}
                  </div>


                  <h2 className="dark:text-white text-black mt-4 text-sm font-medium">
                    {product.name}
                  </h2>
                  <p className="dark:text-gray-300 text-gray-600 mt-2 text-xs font-light line-clamp-2">
                    {product.description}
                  </p>
                  <div className="dark:text-gray-400 text-gray-500 mt-1 text-xs">
                    {product.category}
                  </div>
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
