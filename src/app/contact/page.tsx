"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    confirmPartnership: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16 md:pt-44">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-shilia-thin mb-8">contact us</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-shilia-light">
              please do not fill out this form for any purpose other than partnerships. we are not looking for any services at this time. we cannot buy leads or calls.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="first name"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-shilia-light placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="last name"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-shilia-light placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email address"
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-shilia-light placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="your message"
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-shilia-light placeholder:text-gray-400 resize-none"
                  required
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="flex items-start space-x-4 py-4">
                <input
                  type="checkbox"
                  id="confirmPartnership"
                  name="confirmPartnership"
                  checked={formData.confirmPartnership}
                  onChange={handleInputChange}
                  className="mt-2 h-5 w-5 text-black focus:ring-black border-gray-300"
                  required
                />
                <label htmlFor="confirmPartnership" className="text-sm text-gray-600 leading-relaxed font-shilia-light">
                  i confirm that i am reaching out for a partnership and i am not soliciting any paid services. i understand that operant labs is not interested in buying leads and calls.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 py-4 px-8 text-lg font-shilia-light"
                >
                  send message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-24 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-shilia-thin mb-4">get in touch</h2>
              <p className="text-gray-600 font-shilia-light">
                we love to hear from you. our friendly team is always here to chat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-shilia-light mb-2">address</h3>
                <p className="text-gray-600 font-shilia-light">119 nueces st, austin, tx 78701</p>
              </div>
              
              <div>
                <h3 className="text-lg font-shilia-light mb-2">phone</h3>
                <p className="text-gray-600 font-shilia-light">+1 (469) 555-4099</p>
              </div>
              
              <div>
                <h3 className="text-lg font-shilia-light mb-2">email</h3>
                <p className="text-gray-600 font-shilia-light">support@operantlabs.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
