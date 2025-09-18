"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16 md:pt-44">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">newsletter</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              stay updated with the latest news, product releases, and insights from Operant Labs. 
              join our community of creators and music lovers.
            </p>
          </div>

          {!isSubscribed ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-center"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                >
                  join our newsletter
                </Button>
              </form>
              
              <div className="mt-8 text-xs text-gray-500 text-center">
                by subscribing, you agree to receive marketing emails from Operant Labs. 
                you can unsubscribe at any time.
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">welcome to the family</h2>
                <p className="text-gray-600">
                  thank you for subscribing to our newsletter. you&apos;ll be the first to know about new products and updates.
                </p>
              </div>
              
              <Button 
                onClick={() => setIsSubscribed(false)}
                variant="outline"
                className="rounded-full border-black text-black hover:bg-black hover:text-white"
              >
                subscribe another email
              </Button>
            </div>
          )}

          {/* Newsletter Preview */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-8">what to expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">product updates</h3>
                <p className="text-sm text-gray-600">be the first to know about new releases and updates</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">creative insights</h3>
                <p className="text-sm text-gray-600">stories and tips from our design and engineering teams</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">community</h3>
                <p className="text-sm text-gray-600">connect with fellow creators and music enthusiasts</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
