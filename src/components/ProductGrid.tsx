"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

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
