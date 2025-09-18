import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import blogPosts from "@/data/blog-posts.json";

export default function NowPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 md:pt-48 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Blog Posts */}
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="mb-16 border-b border-gray-300 pb-16">
              <div className="mb-4">
                <h1 className={`text-2xl font-normal mb-2 ${index === 0 ? '' : 'text-xl'}`}>
                  <Link href={`/now/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h1>
                <div className="text-sm text-gray-500">
                  {post.date}
                  {post.photographer && (
                    <>
                      <span className="mx-2">•</span>
                      <span>photos by </span>
                      {post.photographerUrl ? (
                        <Link href={post.photographerUrl} className="hover:underline">
                          {post.photographer}
                        </Link>
                      ) : (
                        <span>{post.photographer}</span>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  {post.excerpt}
                </p>
                
                {/* Show product info for first post (miike-snow) */}
                {post.slug === 'miike-snow' && (
                  <div className="bg-black text-white p-4 my-6">
                    <div className="text-sm font-medium">OP–XY</div>
                    <div className="text-2xl font-normal">$2,299</div>
                  </div>
                )}
                
                {/* Show product info for elio post */}
                {post.slug === 'elio' && (
                  <div className="bg-black text-white p-4 my-6">
                    <div className="text-sm font-medium">teenage engineering choir</div>
                    <div className="text-2xl font-normal">$249</div>
                  </div>
                )}
                
                <p className="text-sm text-gray-600">
                  <Link href={`/now/${post.slug}`} className="hover:underline">
                    read full article →
                  </Link>
                </p>
              </div>
            </article>
          ))}

          {/* Archive Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <div className="flex justify-between items-center text-sm">
              <div>
                <Link href="/now/2024" className="hover:underline text-gray-600">
                  2024 archive
                </Link>
              </div>
              <div>
                <Link href="/now/2023" className="hover:underline text-gray-600">
                  2023 archive
                </Link>
              </div>
              <div>
                <Link href="/now/2022" className="hover:underline text-gray-600">
                  2022 archive
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <div className="text-center">
              <h3 className="text-lg font-normal mb-4">sign up to our newsletter and get updates!</h3>
              <p className="text-sm text-gray-600 mb-6">
                you will receive the latest information on our products, behind the scenes updates, discounts and more.
              </p>
              <Link 
                href="/newsletter" 
                className="inline-block bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
              >
                sign up now
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
