"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Package, Store, Newspaper, HelpCircle } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black w-full max-w-full overflow-hidden">
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden md:block max-w-full overflow-hidden">
        <div className="w-full mx-auto px-4 h-32 overflow-x-auto">
          <div className="flex h-full items-start pt-6 text-sm gap-4">
            {/* Logo */}
            <div className="flex-shrink-0 w-32">
              <Link href="/" className="block">
                <div className="space-y-0 leading-tight">
                  <div className="font-shilia-thin text-gray-200">alphadroid</div>
                  <div className="font-shilia-thin text-gray-200">robotics</div>
                  <div className="text-xs font-shilia-light text-gray-400 mt-1">2025 september</div>
                </div>
              </Link>
            </div>

            {/* Products */}
            <div className="flex-shrink-0 w-32 flex items-start space-x-2">
              <div className="w-16 h-16 bg-black flex items-center justify-center">
                <Package size={24} className="text-white" />
              </div>
              <div className="space-y-0 leading-tight">
                <div className="font-shilia-light">
                  <Link href="/products" className="hover:underline text-gray-200">products</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/products/audio-and-synthesizers" className="hover:underline block text-gray-400">
                      audio & synthesizers
                    </Link>
                  </div>
                  <div>
                    <Link href="/products" className="hover:underline block text-gray-400">
                      robotics
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
                <div className="font-shilia-light">
                  <Link href="/store" className="hover:underline text-gray-200">store</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/store" className="hover:underline block text-gray-400">
                      visit store
                    </Link>
                  </div>
                  <div>
                    <Link href="/store/checkout" className="hover:underline block text-gray-400">
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
                <div className="font-shilia-light">
                  <Link href="/now" className="hover:underline text-gray-200">now</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/newsletter" className="hover:underline block text-gray-400">
                      newsletter
                    </Link>
                  </div>
                  <div>
                    <a href="http://instagram.com/alphadroidrobotics" className="hover:underline block text-gray-400">
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
                <div className="font-shilia-light">
                  <Link href="/guides" className="hover:underline text-gray-200">support</Link>
                </div>
                <div className="text-xs font-shilia-light text-gray-400 mt-1 space-y-0">
                  <div>
                    <Link href="/guides" className="hover:underline block text-gray-400">
                      guides
                    </Link>
                  </div>
                  <div>
                    <Link href="/downloads" className="hover:underline block text-gray-400">
                      downloads
                    </Link>
                  </div>
                  <div>
                    <a href="https://support.alphadroidrobotics.com" className="hover:underline block text-gray-400">
                      support portal
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Chinese Text */}
            <div className="flex-1 max-w-xs">
              <div className="text-xs font-shilia-light text-gray-400 leading-tight">
                Roboteq Robotics 是澳大利亚高端机器人领域的首选高级经销商。我们的使命是把全球领先的机器人产品与本地场景深度结合，以专业工程实力与严格选品标准，交付高品质、强可靠、易集成的解决方案。欢迎选择 Roboteq Robotics，以全新方式开启面向未来的智能自动化体验。
              </div>
            </div>

            {/* 25 Pink Text */}
            <div className="flex-shrink-0">
              <div className="text-right">
                <div className="text-6xl font-shilia-thin text-[#ff1493] leading-none">25</div>
                <div className="text-xs font-shilia-light text-[#ff1493] -mt-2">THE FUTURE YEAR</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header - Teenage Engineering Style */}
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
              <Link href="/store" className="text-lg font-shilia-light text-gray-200 hover:text-white transition-colors">
                store
              </Link>
              <Link href="/now" className="text-lg font-shilia-light text-gray-200 hover:text-white transition-colors">
                now
              </Link>
              <Link href="/guides" className="text-lg font-shilia-light text-gray-200 hover:text-white transition-colors">
                support
              </Link>
              <div className="pt-4 border-t border-gray-800">
                <Link href="/newsletter" className="text-sm font-shilia-light text-gray-400 hover:text-gray-200 block mb-2 transition-colors">
                  newsletter
                </Link>
                <Link href="/downloads" className="text-sm font-shilia-light text-gray-400 hover:text-gray-200 block transition-colors">
                  downloads
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
