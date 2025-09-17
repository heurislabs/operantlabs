"use client";

import Link from "next/link";
import { useState } from "react";

const countries = [
  { code: "AL", name: "albania" },
  { code: "AD", name: "andorra" },
  { code: "AM", name: "armenia" },
  { code: "AU", name: "australia" },
  { code: "AT", name: "austria" },
  { code: "BH", name: "bahrain" },
  { code: "BE", name: "belgium" },
  { code: "BO", name: "bolivia" },
  { code: "BA", name: "bosnia and herzegovi..." },
  { code: "BR", name: "brazil" },
  { code: "CA", name: "canada" },
  { code: "CL", name: "chile" },
  { code: "CO", name: "colombia" },
  { code: "HR", name: "croatia" },
  { code: "CZ", name: "czech republic" },
  { code: "DK", name: "denmark" },
  { code: "EG", name: "egypt" },
  { code: "EE", name: "estonia" },
  { code: "FI", name: "finland" },
  { code: "FR", name: "france" },
  { code: "GE", name: "georgia" },
  { code: "DE", name: "germany" },
  { code: "GR", name: "greece" },
  { code: "GY", name: "guyana" },
  { code: "HK", name: "hong kong" },
  { code: "HU", name: "hungary" },
  { code: "IS", name: "iceland" },
  { code: "IN", name: "india" },
  { code: "IE", name: "ireland" },
  { code: "IL", name: "israel" },
  { code: "IT", name: "italy" },
  { code: "JM", name: "jamaica" },
  { code: "JP", name: "japan" },
  { code: "JE", name: "jersey" },
  { code: "KZ", name: "kazakstan" },
  { code: "KR", name: "korea, republic of" },
  { code: "KW", name: "kuwait" },
  { code: "LV", name: "latvia" },
  { code: "LT", name: "lithuania" },
  { code: "LU", name: "luxembourg" },
  { code: "MO", name: "macau" },
  { code: "MY", name: "malaysia" },
  { code: "MT", name: "malta" },
  { code: "MX", name: "mexico" },
  { code: "MC", name: "monaco" },
  { code: "NL", name: "netherlands" },
  { code: "NZ", name: "new zealand" },
  { code: "NO", name: "norway" },
  { code: "PE", name: "peru" },
  { code: "PH", name: "philippines" },
  { code: "PL", name: "poland" },
  { code: "PT", name: "portugal" },
  { code: "PR", name: "puerto rico" },
  { code: "QA", name: "qatar" },
  { code: "RO", name: "romania" },
  { code: "SA", name: "saudi arabia" },
  { code: "RS", name: "serbia" },
  { code: "SG", name: "singapore" },
  { code: "SK", name: "slovakia" },
  { code: "SI", name: "slovenia" },
  { code: "ZA", name: "south africa" },
  { code: "ES", name: "spain" },
  { code: "SE", name: "sweden" },
  { code: "CH", name: "switzerland" },
  { code: "TW", name: "taiwan" },
  { code: "TH", name: "thailand" },
  { code: "TR", name: "türkiye" },
  { code: "AE", name: "united arab emirates" },
  { code: "GB", name: "united kingdom" },
  { code: "US", name: "united states" },
  { code: "UY", name: "uruguay" },
];

export function Footer() {
  const [selectedCountry, setSelectedCountry] = useState("US");

  return (
    <footer className="bg-[#f3f3f3] border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 items-center text-sm">
          {/* Country Selector */}
          <div className="col-span-4">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-transparent border-none text-gray-500 text-sm font-shilia-light focus:outline-none cursor-pointer"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Links */}
          <div className="col-span-5 flex space-x-4 text-gray-500 font-shilia-light">
            <Link href="/newsletter" className="hover:text-black transition-colors">
              newsletter
            </Link>
            <Link href="/retailers" className="hover:text-black transition-colors">
              retailers
            </Link>
            <Link href="/store" className="hover:text-black transition-colors">
              store
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-black transition-colors">
              terms
            </Link>
            <Link href="/press" className="hover:text-black transition-colors">
              press
            </Link>
            <Link href="/contact" className="hover:text-black transition-colors">
              contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="col-span-3 text-right text-gray-500 font-shilia-light">
            ©2025 teenage engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
