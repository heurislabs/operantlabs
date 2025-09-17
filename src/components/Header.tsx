"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Package, Store, Newspaper, HelpCircle } from "lucide-react";

export function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f3f3f3] h-24">
      <div className="max-w-none mx-auto px-4 h-full">
        <div className="flex h-full items-start pt-4 text-sm gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-32">
            <Link href="/" className="block">
              <div className="space-y-0 leading-tight">
                <div className="font-normal">teenage</div>
                <div className="font-normal">engineering</div>
                <div className="text-xs text-gray-500 mt-1">2025 september</div>
              </div>
            </Link>
          </div>

          {/* Products */}
          <div className="flex-shrink-0 w-32 flex items-start space-x-2">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <Package size={24} className="text-white" />
            </div>
            <div className="space-y-0 leading-tight">
              <div className="font-normal">
                <Link href="/products" className="hover:underline">products</Link>
              </div>
              <div className="text-xs text-gray-500 mt-1 space-y-0">
                <div>
                  <Link href="/products/audio-and-synthesizers" className="hover:underline block">
                    audio & synthesizers
                  </Link>
                </div>
                <div>
                  <Link href="/products/wireless-speakers" className="hover:underline block">
                    wireless speakers
                  </Link>
                </div>
                <div>
                  <Link href="/designs" className="hover:underline block">
                    designs
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Store */}
          <div className="flex-shrink-0 w-32 flex items-start space-x-2">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <Store size={24} className="text-white" />
            </div>
            <div className="space-y-0 leading-tight">
              <div className="font-normal">
                <Link href="/store" className="hover:underline">store</Link>
              </div>
              <div className="text-xs text-gray-500 mt-1 space-y-0">
                <div>
                  <Link href="/store" className="hover:underline block">
                    visit store
                  </Link>
                </div>
                <div>
                  <Link href="/store/checkout" className="hover:underline block">
                    checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Now */}
          <div className="flex-shrink-0 w-32 flex items-start space-x-2">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <Newspaper size={24} className="text-white" />
            </div>
            <div className="space-y-0 leading-tight">
              <div className="font-normal">
                <Link href="/now" className="hover:underline">now</Link>
              </div>
              <div className="text-xs text-gray-500 mt-1 space-y-0">
                <div>
                  <Link href="/newsletter" className="hover:underline block">
                    newsletter
                  </Link>
                </div>
                <div>
                  <a href="http://instagram.com/teenageengineering" className="hover:underline block">
                    instagram
                  </a>
                </div>
                <div>
                  <Link href="/now" className="hover:underline block">
                    blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="flex-shrink-0 w-32 flex items-start space-x-2">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <HelpCircle size={24} className="text-white" />
            </div>
            <div className="space-y-0 leading-tight">
              <div className="font-normal">
                <Link href="/guides" className="hover:underline">support</Link>
              </div>
              <div className="text-xs text-gray-500 mt-1 space-y-0">
                <div>
                  <Link href="/guides" className="hover:underline block">
                    guides
                  </Link>
                </div>
                <div>
                  <Link href="/downloads" className="hover:underline block">
                    downloads
                  </Link>
                </div>
                <div>
                  <a href="https://support.teenage.engineering/" className="hover:underline block">
                    support portal
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Japanese Text */}
          <div className="flex-1 max-w-xs">
            <div className="text-xs text-gray-500 leading-tight">
              10代工学は未来の製品とコミュニケーションを生み出すスタジオです。私たちのミッションは先端工学を用いて上質で機能的なデザインの製品を作り出すことです。是非、新たなスタイルで音楽をお楽しみください。
            </div>
          </div>

          {/* 25 Pink Text */}
          <div className="flex-shrink-0">
            <div className="text-right">
              <div className="text-6xl font-black text-[#ff1493] leading-none">25</div>
              <div className="text-xs font-medium text-[#ff1493] -mt-2">THE FLIPPED OUT YEAR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden absolute top-4 right-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/products" className="text-lg font-medium">
                products
              </Link>
              <Link href="/store" className="text-lg font-medium">
                store
              </Link>
              <Link href="/now" className="text-lg font-medium">
                now
              </Link>
              <Link href="/guides" className="text-lg font-medium">
                support
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
