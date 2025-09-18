import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "@/data/blog-posts.json";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  photographer?: string;
  photographerUrl?: string;
  content: {
    introduction: string;
    sections: Array<{
      type: 'paragraph' | 'qa' | 'image' | 'subheading' | 'quote' | 'product';
      text?: string;
      question?: string;
      answer?: string;
      caption?: string;
      alt?: string;
      speaker?: string;
      title?: string;
      name?: string;
      price?: string;
      url?: string;
    }>;
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug) as BlogPost | undefined;

  if (!post) {
    notFound();
  }

  const renderSection = (section: BlogPost['content']['sections'][0], index: number) => {
    switch (section.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-6 text-gray-900 leading-relaxed">
            {section.text}
          </p>
        );
      
      case 'subheading':
        return (
          <h2 key={index} className="text-xl font-normal mb-4 mt-8 text-gray-900">
            {section.text}
          </h2>
        );
      
      case 'qa':
        return (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              {section.question}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {section.answer}
            </p>
          </div>
        );
      
      case 'image':
        return (
          <div key={index} className="my-8">
            <div className="bg-gray-100 h-64 mb-2 rounded"></div>
            <p className="text-sm text-gray-600 italic">
              {section.caption}
            </p>
          </div>
        );
      
      case 'quote':
        return (
          <div key={index} className="my-8 pl-6 border-l-2 border-gray-300">
            <p className="text-gray-700 italic mb-2 leading-relaxed">
              &ldquo;{section.text}&rdquo;
            </p>
            {section.speaker && (
              <p className="text-sm text-gray-600 font-medium">
                — {section.speaker}
              </p>
            )}
          </div>
        );
      
      case 'product':
        return (
          <div key={index} className="bg-black text-white p-6 my-8 rounded">
            <div className="text-sm font-medium mb-1">{section.name}</div>
            <div className="text-2xl font-normal mb-4">{section.price}</div>
            {section.url && (
              <Link href={section.url} className="text-sm hover:underline">
                learn more →
              </Link>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 md:pt-48 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Navigation */}
          <div className="mb-8">
            <Link href="/now" className="text-sm text-gray-600 hover:underline">
              ← back to now
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-normal mb-4 text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <time>{post.date}</time>
              {post.photographer && (
                <>
                  <span className="mx-2">•</span>
                  <span>photos by </span>
                  {post.photographerUrl ? (
                    <Link href={post.photographerUrl} className="hover:underline ml-1">
                      {post.photographer}
                    </Link>
                  ) : (
                    <span className="ml-1">{post.photographer}</span>
                  )}
                </>
              )}
            </div>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {post.content.introduction}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose-lg max-w-none">
            {post.content.sections.map((section, index) => 
              renderSection(section, index)
            )}
          </article>

          {/* Related Posts Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <div className="flex justify-between items-center">
              <Link href="/now" className="text-sm text-gray-600 hover:underline">
                ← more stories
              </Link>
              <div className="text-sm text-gray-600">
                {blogPosts.findIndex(p => p.slug === params.slug) + 1} of {blogPosts.length}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
