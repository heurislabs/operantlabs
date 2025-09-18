import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function NowPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 md:pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Latest Article */}
          <article className="mb-16 border-b border-gray-300 pb-16">
            <div className="mb-4">
              <h1 className="text-2xl font-normal mb-2">
                <Link href="/now#miike-snow" className="hover:underline">
                  how miike snow built their coachella show with OP–XY
                </Link>
              </h1>
              <div className="text-sm text-gray-500">september 4, 2025</div>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                when swedish-american indie-pop band miike snow went on their reunion tour last year, they decided to bring the then unreleased OP–XY with them. together with love hultén, they built a custom made live rig where the OP–XY was embedded. this year, for the fourth time, the band returned to the coachella stage.
              </p>
              
              <div className="bg-black text-white p-4 my-6">
                <div className="text-sm font-medium">OP–XY</div>
                <div className="text-2xl font-normal">$2,299</div>
              </div>
              
              <p className="text-sm text-gray-600">
                <Link href="/now#miike-snow" className="hover:underline">
                  read full article →
                </Link>
              </p>
            </div>
          </article>

          {/* Second Article */}
          <article className="mb-16 border-b border-gray-300 pb-16">
            <div className="mb-4">
              <h2 className="text-2xl font-normal mb-2">
                <Link href="/now#erick-the-architect" className="hover:underline">
                  catching up with erick the architect
                </Link>
              </h2>
              <div className="text-sm text-gray-500">july 1, 2025</div>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                rapper, producer and all-around creative force erick the architect is ready to reintroduce himself. a friend of ours, erick grew up in new york, where he fell in love with music long before forming the iconic psychedelic hip-hop group flatbush zombies.
              </p>
              
              <p className="text-sm text-gray-600">
                <Link href="/now#erick-the-architect" className="hover:underline">
                  read full article →
                </Link>
              </p>
            </div>
          </article>

          {/* Third Article */}
          <article className="mb-16 border-b border-gray-300 pb-16">
            <div className="mb-4">
              <h2 className="text-2xl font-normal mb-2">
                <Link href="/now#elio" className="hover:underline">
                  elio and the choir
                </Link>
              </h2>
              <div className="text-sm text-gray-500">june 27, 2025</div>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                the teenage engineering choir: official choral ensemble for disney pixar's 'elio'. when disney and pixar set out to create 'elio', a movie about a young boy making contact with distant alien life, they asked a fundamental question: what does space sound like?
              </p>
              
              <div className="bg-black text-white p-4 my-6">
                <div className="text-sm font-medium">teenage engineering choir</div>
                <div className="text-2xl font-normal">$249</div>
              </div>
              
              <p className="text-sm text-gray-600">
                <Link href="/now#elio" className="hover:underline">
                  read full article →
                </Link>
              </p>
            </div>
          </article>

          {/* Fourth Article */}
          <article className="mb-16 border-b border-gray-300 pb-16">
            <div className="mb-4">
              <h2 className="text-2xl font-normal mb-2">
                <Link href="/now#bentgablentis" className="hover:underline">
                  bentgablenits x teenage engineering
                </Link>
              </h2>
              <div className="text-sm text-gray-500">june 24, 2025</div>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                presenting a limited capsule collection made by bentgablenits. on show (and for sale) this june in new york includes: hand-beaded band shirts and lab coats, special choir chapel boxes made with tea-dyed hand-festooned details, and ten repurposed 1930s dollhouses.
              </p>
              
              <p className="text-sm text-gray-600">
                <Link href="/now#bentgablentis" className="hover:underline">
                  read full article →
                </Link>
              </p>
            </div>
          </article>

          {/* Fifth Article */}
          <article className="mb-16 border-b border-gray-300 pb-16">
            <div className="mb-4">
              <h2 className="text-2xl font-normal mb-2">
                <Link href="/now#tx-6-tp-7-update" className="hover:underline">
                  updates for TX–6 & TP–7
                </Link>
              </h2>
              <div className="text-sm text-gray-500">june 19, 2025</div>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                the new updates for TX–6 and TP–7 introduce some new features like enhanced sequencer functionality with customizable options, link mode, extended midi functionality, extended gain range, mix-down mode, and more.
              </p>
              
              <div className="flex gap-4 my-6">
                <div className="bg-black text-white p-4 flex-1">
                  <div className="text-sm font-medium">TX–6</div>
                  <div className="text-lg font-normal">update available</div>
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <div className="text-sm font-medium">TP–7</div>
                  <div className="text-lg font-normal">update available</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                <Link href="/now#tx-6-tp-7-update" className="hover:underline">
                  read full article →
                </Link>
              </p>
            </div>
          </article>

          {/* Sixth Article */}
          <article className="mb-16 border-b border-gray-300 pb-16">
            <div className="mb-4">
              <h2 className="text-2xl font-normal mb-2">
                <Link href="/now#story-of-po" className="hover:underline">
                  ten years of pocket operator®
                </Link>
              </h2>
              <div className="text-sm text-gray-500">may 15, 2025</div>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                what started as an idea to grow the synth population has today earned its spot as the world's most accessible music machine, making its way into hundreds of thousands of pockets—and counting.
              </p>
              
              <p className="text-sm text-gray-600">
                <Link href="/now#story-of-po" className="hover:underline">
                  read full article →
                </Link>
              </p>
            </div>
          </article>

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
