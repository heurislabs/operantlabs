import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-12 md:pt-32">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8">support</h1>
            <p className="text-gray-600 mb-8">
              get in touch with our team for product inquiries, technical support, and assistance with your robotics needs.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">email support</h3>
                  <p className="text-gray-600 text-sm">get detailed assistance</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                reach out to our technical team for product inquiries, customization requests, and technical support.
              </p>
              <Button asChild className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                <a href="mailto:support@alphadroidrobotics.com">
                  contact support
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">phone support</h3>
                  <p className="text-gray-600 text-sm">speak with an expert</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                call our australian support team for immediate assistance and product consultations.
              </p>
              <Button asChild variant="outline" className="w-full rounded-full border-black text-black hover:bg-black hover:text-white">
                <a href="tel:+61-2-8006-5555">
                  +61 2 8006 5555
                </a>
              </Button>
            </Card>
          </div>

          {/* Support Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">what can we help you with?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">product inquiries</h3>
                <p className="text-sm text-gray-600 mb-4">
                  questions about specifications, compatibility, and product recommendations
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• technical specifications</li>
                  <li>• compatibility checks</li>
                  <li>• product recommendations</li>
                  <li>• custom solutions</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">technical support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  assistance with setup, configuration, and troubleshooting
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• installation guidance</li>
                  <li>• configuration help</li>
                  <li>• troubleshooting</li>
                  <li>• software updates</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">sales & quotes</h3>
                <p className="text-sm text-gray-600 mb-4">
                  pricing information, quotes, and purchase assistance
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• pricing information</li>
                  <li>• bulk order quotes</li>
                  <li>• payment options</li>
                  <li>• delivery scheduling</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">additional resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="font-semibold">live chat</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  get instant answers during business hours (monday - friday, 9am - 5pm aest)
                </p>
                <Button asChild variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                  <a href="https://support.alphadroidrobotics.com/chat" target="_blank" rel="noopener noreferrer">
                    start chat <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ExternalLink className="w-6 h-6" />
                  <h3 className="font-semibold">knowledge base</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  browse our comprehensive documentation, guides, and frequently asked questions
                </p>
                <Button asChild variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                  <a href="https://docs.alphadroidrobotics.com" target="_blank" rel="noopener noreferrer">
                    view docs <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Business Hours */}
          <Card className="p-8 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">business hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">support hours</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>monday - friday: 9:00am - 5:00pm aest</div>
                  <div>saturday: 10:00am - 2:00pm aest</div>
                  <div>sunday: closed</div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">response times</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>email: within 24 hours</div>
                  <div>phone: immediate during business hours</div>
                  <div>live chat: instant during business hours</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 mt-16 border-t">
            <Link 
              href="/products" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              ← browse products
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
