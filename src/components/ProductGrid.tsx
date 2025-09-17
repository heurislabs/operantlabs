"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  isNew?: boolean;
  isDiscontinued?: boolean;
}

const products: Product[] = [
  { id: "1", name: "field system™", slug: "field-system", category: "field" },
  { id: "2", name: "EP–133 K.O. II", slug: "ep-133", category: "EP series", isNew: true },
  { id: "3", name: "OP–XY", slug: "op-xy", category: "synthesizer" },
  { id: "4", name: "EP series", slug: "ep", category: "EP series" },
  { id: "5", name: "pocket operators", slug: "po", category: "pocket operator" },
  { id: "6", name: "TP–7", slug: "tp-7", category: "field" },
  { id: "7", name: "OB–4", slug: "ob-4", category: "wireless speaker" },
  { id: "8", name: "CM–15", slug: "cm-15", category: "field" },
  { id: "9", name: "TX–6", slug: "tx-6", category: "field" },
  { id: "10", name: "OP–1 ", slug: "op-1", category: "synthesizer" },
  { id: "11", name: "field accessories", slug: "field-accessories", category: "field" },
  { id: "12", name: "choir", slug: "choir", category: "synthesizer" },
  { id: "13", name: "field desk", slug: "field-desk", category: "field" },
  { id: "14", name: "computer–1", slug: "computer-1", category: "computer" },
  { id: "15", name: "grip car", slug: "grip-car", category: "accessory" },
  { id: "16", name: "OP–Z", slug: "op-z", category: "synthesizer", isDiscontinued: true },
  { id: "17", name: "pocket operatormodular", slug: "po/modular", category: "pocket operator", isDiscontinued: true },
  { id: "18", name: "OP-1", slug: "op-1/original", category: "synthesizer", isDiscontinued: true },
  { id: "19", name: "ortho remote", slug: "orthoremote", category: "accessory", isDiscontinued: true },
  { id: "20", name: "OD-11", slug: "od-11", category: "wireless speaker", isDiscontinued: true },
  { id: "21", name: "PO-80", slug: "po-80", category: "pocket operator" },
];

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
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">
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
                    <Badge variant="secondary" className="text-xs">
                      new
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-500">{product.category}</p>
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
                <div className="bg-white rounded-lg p-6">
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">
                      {product.name}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-sm group-hover:underline">
                        {product.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        discontinued
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{product.category}</p>
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
