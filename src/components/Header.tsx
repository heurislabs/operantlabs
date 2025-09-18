"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Package, Newspaper, HelpCircle } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black w-full max-w-full overflow-hidden">
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden md:block max-w-full overflow-hidden">
        <div className="w-full mx-auto px-4 h-40 overflow-x-auto">
          <div className="flex h-full items-start text-sm gap-4 justify-between pt-4">
            {/* Logo */}
            <div className="flex-shrink-0 w-32 pt-1">
              <Link href="/" className="block">
                <div className="space-y-0 leading-tight">
                  <div className="font-shilia-thin text-gray-200 text-xl">Operant</div>
                  <div className="font-shilia-thin text-gray-200 text-xl">Labs</div>
                </div>
              </Link>
            </div>

            {/* Products */}
            <div className="flex-shrink-0 w-32 flex items-start space-x-2">
              <div className="w-16 h-16 bg-black flex items-center justify-center">
                <Package size={24} className="text-white" />
              </div>
              <div className="space-y-0 leading-tight">
                <div className="font-shilia-light text-lg">
                  <Link href="/products" className="hover:underline text-gray-200">products</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/products?category=hospitality" className="hover:underline block text-gray-400">
                      hospitality
                    </Link>
                  </div>
                  <div>
                    <Link href="/products?category=retail" className="hover:underline block text-gray-400">
                      retail
                    </Link>
                  </div>
                  <div>
                    <Link href="/products?category=warehouse-logistics" className="hover:underline block text-gray-400">
                      warehouse & logistics
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
                <div className="font-shilia-light text-lg">
                  <Link href="/now" className="hover:underline text-gray-200">now</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/newsletter" className="hover:underline block text-gray-400">
                      newsletter
                    </Link>
                  </div>
                  <div>
                    <a href="http://instagram.com/operantlabs" className="hover:underline block text-gray-400">
                      instagram
                    </a>
                  </div>
                  <div>
                    <Link href="/now" className="hover:underline block text-gray-400">
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
                <div className="font-shilia-light text-lg">
                  <Link href="/support" className="hover:underline text-gray-200">support</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/contact" className="hover:underline block text-gray-400">
                      contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Chinese Text */}
            <div className="flex-1 max-w-xs pt-2">
              <div className="text-xs font-shilia-light text-gray-400 leading-tight grid grid-cols-2 gap-1">
                <div>Roboteq Robotics 是澳大利亚高端机器人领域的首选高级经销商。</div>
                <div>我们的使命是把全球领先的机器人产品与本地场景深度结合，以专业工程实力交付高品质解决方案。</div>
              </div>
            </div>

            {/* 25 Pink Text */}
            <div className="flex-shrink-0 pt-0">
              <div className="text-right">
                <div className="text-6xl font-shilia-thin text-[#ff1493] leading-none">25</div>
                <div className="text-xs font-shilia-light text-[#ff1493] -mt-2">THE FUTURE YEAR</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header - Operant Labs Style */}
      <div className="md:hidden h-12 flex items-center justify-between px-4 w-full max-w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
          </div>
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2 hover:bg-gray-800 focus:outline-none focus:ring-0"
            >
              <Menu size={20} className="text-white" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-gray-800 w-80">
            <div className="flex flex-col space-y-6 mt-8">
              <Link href="/products" className="text-lg font-shilia-light text-gray-200 hover:text-white transition-colors">
                products
              </Link>
              <Link href="/now" className="text-lg font-shilia-light text-gray-200 hover:text-white transition-colors">
                now
              </Link>
              <Link href="/support" className="text-lg font-shilia-light text-gray-200 hover:text-white transition-colors">
                support
              </Link>
              <div className="pt-4 border-t border-gray-800">
                <Link href="/newsletter" className="text-sm font-shilia-light text-gray-400 hover:text-gray-200 block mb-2 transition-colors">
                  newsletter
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
