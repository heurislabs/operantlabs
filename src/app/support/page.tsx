"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { DocumentSection } from "@/components/DocumentSection";
import { useState } from "react";


const searchPlaceholders = [
  "Type a keyword",
  "How to reset password?",
  "Account verification help",
  "Payment issues",
  "Security settings",
];

export default function SupportPage() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search submitted:", searchValue);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16 md:pt-44">
        <section className="max-w-4xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">help centre</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-shilia-light">
              we understand that sometimes you may encounter difficulties or have questions while using our platform, and we&apos;re here to assist you every step of the way.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <PlaceholdersAndVanishInput
                placeholders={searchPlaceholders}
                onChange={handleSearch}
                onSubmit={handleSubmit}
              />
            </div>

          </div>
        </section>
      </main>

      {/* Document Section */}
      <section>
        <DocumentSection />
      </section>

      <Footer />
    </div>
  );
}
