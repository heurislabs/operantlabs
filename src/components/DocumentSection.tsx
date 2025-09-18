"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface DocumentItem {
  id: string;
  title: string;
  content: string;
}

interface DocumentSection {
  id: string;
  title: string;
  items: DocumentItem[];
  isExpanded?: boolean;
}

const documentData: DocumentSection[] = [
  {
    id: "company-overview",
    title: "Company Overview",
    isExpanded: true,
    items: [
      {
        id: "unique-service",
        title: "What makes Operant Labs' robot service unique?",
        content: `Operant Labs stands out in the robotics industry through several key differentiators:

1. Comprehensive Solution Portfolio: We offer end-to-end robotics solutions from mobile service robots to collaborative bots and AI systems.

2. Industry-Specific Customization: Our robots are tailored for specific industries including hospitality, retail, healthcare, and public spaces.

3. Advanced AI Integration: All our robots feature sophisticated AI capabilities including our HeyAlpha conversational AI system.

4. Global Support Network: With offices across India, MENA, US, and UK, we provide comprehensive global support.

5. Scalable Automation: Our solutions are designed to grow with your business needs, from single robot deployments to fleet management.

6. Proven Track Record: We have successfully deployed robots across various industries with measurable improvements in efficiency and customer satisfaction.`
      },
      {
        id: "location-operations",
        title: "Where is Operant Labs located and operational?",
        content: `Operant Labs operates globally with offices in multiple regions:

India Office:
1202, Tower-C, ATS Bouquet, Sector 132, Noida, UP, 201304
Email: hello@operandlabs.io
Phone: +91 7217886671

MENA Office:
HD54A, 1st Floor, In5 Tech, Dubai Internet City, Dubai, United Arab Emirates
Email: hello-uae@operandlabs.io
Phone: +971 56 175 4301

U.S Office:
8605 Santa Monica Blvd #176164, West Hollywood, CA 90069
Email: hello-us@operandlabs.io
Phone: +1 (610) 248 0582

U.K Office:
808, TYPE Sierra Quebec Bravo - Canary London, E14 9SH
Email: Hellouk@operandlabs.io
Phone: +44 20 3376 7478`
      }
    ]
  },
  {
    id: "products-services",
    title: "Products & Services",
    items: [
      {
        id: "types-of-bots",
        title: "What types of bots does Operant Labs offer? Are there any other products that Operant Labs offers?",
        content: `Operant Labs offers a comprehensive range of robotic solutions for various industries including:

Mobile Bots:
- Alpha Signature - Premium service robot for hospitality
- Alpha Infinity - Advanced cleaning and service robot
- Alpha Iron - Heavy-duty industrial robot
- Alpha Smart - Intelligent navigation robot
- Alpha Veltra - Versatile multi-purpose robot
- Alpha Echo - Communication and assistance robot
- Alpha Envoro - Environmental monitoring robot

Collaborative Bots:
- Alpha Shine - Latest generation collaborative robot

Conversational AI:
- HeyAlpha - AI-powered conversational interface

Our robots are designed for industries including hospitality, retail, quick service restaurants, healthcare, and public spaces.`
      },
      {
        id: "marketing-advertising",
        title: "Can the bots be used for marketing or advertising? How do you charge for it?",
        content: `Yes, our robots can be effectively used for marketing and advertising purposes. Here's how:

Marketing Applications:
- Interactive product demonstrations
- Brand engagement through conversational AI
- Digital advertising display integration
- Customer data collection and analytics
- Promotional content delivery
- Event marketing and trade show support

Advertising Features:
- Customizable digital displays
- Audio announcements and messaging
- Interactive touchscreen interfaces
- Brand-specific customization options
- Social media integration capabilities

Pricing for Marketing Features:
- Basic advertising functionality is included in standard packages
- Custom branding and design work may incur additional costs
- Advanced marketing analytics and reporting features available as premium add-ons
- Content management system licensing for dynamic advertising
- Integration with your existing marketing platforms

Contact our team for a customized quote based on your specific marketing and advertising requirements.`
      }
    ]
  },
  {
    id: "pricing-fees",
    title: "Pricing & Fees",
    items: [
      {
        id: "additional-fees",
        title: "Are there any additional fees I should be aware of?",
        content: `Our pricing structure is designed to be transparent and comprehensive. Here's what you should know about fees:

Standard Package Includes:
- Robot hardware and software
- Initial setup and configuration
- Basic training for your team
- Standard warranty coverage

Potential Additional Costs:
- Extended warranty plans
- Advanced customization requirements
- On-site training beyond standard package
- Premium support packages
- Additional sensors or hardware modifications
- Integration with existing systems (if complex)

We provide detailed quotes that outline all costs upfront, so there are no surprise fees. Our team will work with you to understand your specific needs and provide a comprehensive pricing structure that fits your budget.`
      }
    ]
  },
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        id: "demo-request",
        title: "Can I request a demo of Operant Labs products?",
        content: `Absolutely! We encourage potential customers to experience our robots firsthand:

Demo Options Available:
- Live product demonstrations at our offices
- Virtual demos via video conference
- On-site demonstrations at your facility
- Trade show and event demonstrations

What to Expect:
- Comprehensive product overview
- Hands-on interaction with our robots
- Customization discussion for your specific needs
- ROI analysis and business case development
- Technical specifications review

How to Schedule:
- Contact any of our regional offices
- Email hello@operandlabs.io with "Demo Request" in subject
- Fill out the contact form on our website
- Call our nearest office directly

Our team will work with you to schedule a demo that fits your timeline and requirements. We can also arrange for decision-makers from your team to participate.`
      },
      {
        id: "product-information",
        title: "Where can I find more information about your products?",
        content: `Comprehensive product information is available through multiple resources:

Website Resources:
- Detailed product pages with specifications
- Case studies and customer success stories
- Technical documentation and white papers
- Video demonstrations and tutorials

Product Catalogs:
- Complete product lineup with features
- Industry-specific solution guides
- Technical specification sheets
- Comparison charts and selection guides

Additional Resources:
- LinkedIn for industry insights and updates
- YouTube channel for product demonstrations
- Trade show presentations and materials
- Webinar series on robotics applications

Direct Consultation:
- Speak with our product specialists
- Technical consultations with engineers
- Custom solution development discussions
- ROI and business case analysis

Contact our team for personalized product information tailored to your specific industry and use case requirements.`
      }
    ]
  },
  {
    id: "customer-support",
    title: "Customer Support",
    items: [
      {
        id: "customer-service-hours",
        title: "What are your customer service hours?",
        content: `Our global presence allows us to provide comprehensive customer service coverage:

Regional Support Hours:
- India Office: Monday-Friday, 9:00 AM - 6:00 PM IST
- UAE Office: Sunday-Thursday, 9:00 AM - 6:00 PM GST
- US Office: Monday-Friday, 9:00 AM - 5:00 PM PST
- UK Office: Monday-Friday, 9:00 AM - 5:00 PM GMT

Emergency Support:
- Critical issues: 24/7 emergency hotline available for deployed robots
- Technical support: Extended hours during weekdays
- Remote diagnostics: Available outside standard hours

Response Times:
- Email inquiries: Within 24 hours
- Phone calls: Immediate during business hours
- Emergency issues: Within 2 hours
- Technical support: Same day response guaranteed`
      },
      {
        id: "ongoing-customer-support",
        title: "Do you offer support for existing customers?",
        content: `Yes, we provide comprehensive ongoing support for all our customers:

Technical Support:
- 24/7 emergency support for critical issues
- Remote diagnostics and troubleshooting
- Software updates and maintenance
- Hardware maintenance and repairs

Training and Education:
- Ongoing staff training programs
- New feature training sessions
- Best practices workshops
- User certification programs

Account Management:
- Dedicated account managers for enterprise clients
- Regular check-ins and performance reviews
- Expansion planning and consultation
- Custom development support

Support Channels:
- Direct phone support lines
- Email support with guaranteed response times
- Remote access for immediate troubleshooting
- On-site support visits when needed

Maintenance Programs:
- Preventive maintenance schedules
- Replacement parts and components
- Extended warranty options
- Fleet management for multiple robots

Our commitment to customer success extends well beyond the initial deployment.`
      }
    ]
  },
  {
    id: "contact-information",
    title: "Contact Information",
    items: [
      {
        id: "contact-inquiries",
        title: "How can I contact Operant Labs for inquiries?",
        content: `You can reach Operant Labs through multiple channels:

Email Contacts:
- General inquiries: hello@operandlabs.io
- UAE/MENA region: hello-uae@operandlabs.io
- US region: hello-us@operandlabs.io
- UK region: Hellouk@operandlabs.io

Phone Numbers:
- India: +91 7217886671
- UAE: +971 56 175 4301
- US: +1 (610) 248 0582
- UK: +44 20 3376 7478

Social Media:
- LinkedIn: Connect with us for professional updates
- Instagram: Follow @hellooperandlabs for latest news
- YouTube: Subscribe to @HelloOperandLabs for product demos

For immediate assistance, email is typically the fastest way to reach our team.`
      }
    ]
  }
];

export function DocumentSection() {
  const [selectedItem, setSelectedItem] = useState<string>("unique-service");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["company-overview"])
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getSelectedItemContent = () => {
    for (const section of documentData) {
      const item = section.items.find(item => item.id === selectedItem);
      if (item) return item;
    }
    return documentData[0].items[0];
  };

  const selectedContent = getSelectedItemContent();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Index */}
        <div className="lg:col-span-1">
          <div className="p-0">
            <h3 className="text-2xl font-bold mb-8">documentation</h3>
            <nav className="space-y-3">
              {documentData.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-left py-3 transition-colors"
                  >
                    <span className="font-shilia-light text-gray-700">
                      {section.title.toLowerCase()}
                    </span>
                    {expandedSections.has(section.id) ? (
                      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronRightIcon className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSections.has(section.id) && (
                    <div className="ml-6 mt-2 space-y-2">
                      {section.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedItem(item.id)}
                          className={`block w-full text-left py-2 text-sm font-shilia-light transition-colors ${
                            selectedItem === item.id
                              ? "text-black border-l-2 border-black pl-4"
                              : "text-gray-600 hover:text-black"
                          }`}
                        >
                          {item.title.toLowerCase()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="p-0">
            <h1 className="text-3xl font-bold mb-8">
              {selectedContent.title.toLowerCase()}
            </h1>
            <div className="max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line font-shilia-light">
                {selectedContent.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
