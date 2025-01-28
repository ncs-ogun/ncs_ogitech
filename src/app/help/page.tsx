import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PhoneCall,
  Mail,
  MessageSquare,
  FileText,
  HelpCircle,
  Search,
} from "lucide-react";

export default function HelpPage() {
  const faqItems = [
    {
      question: "How do I apply for a loan?",
      answer:
        "To apply for a loan, log into your account and click on the 'Apply for Loan' button. Fill out the application form with your details and submit. We'll review your application and get back to you within 24 hours.",
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "You'll need to provide a valid government-issued ID, proof of income (such as payslips or bank statements), and proof of address (utility bill or rental agreement). Additional documents may be required depending on the loan type.",
    },
    {
      question: "How long does it take to get approved?",
      answer:
        "Most loan applications are processed within 24 hours. If approved, funds are typically disbursed within 1-3 business days, depending on your bank.",
    },
    {
      question: "What are the interest rates?",
      answer:
        "Our interest rates vary depending on the loan type and your credit profile. Rates typically range from 5% to 15% per month. You can see personalized rates by logging into your account and using our loan calculator.",
    },
    {
      question: "How do I make repayments?",
      answer:
        "Repayments can be made through bank transfers, debit card payments, or automatic deductions from your linked bank account. You can set up your preferred payment method in your account settings.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find answers to your questions or get in touch with our support
              team.
            </p>
            <div className="flex items-center max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search for help..."
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Quick Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PhoneCall className="w-8 h-8" />,
                title: "Call Us",
                description: "Speak directly with our support team",
                action: "Call Now",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                description: "Send us an email and we'll respond ASAP",
                action: "Email Us",
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Live Chat",
                description: "Chat with a support agent in real-time",
                action: "Start Chat",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Loan Guide",
                description: "Learn about our loan process",
                action: "Read Guide",
              },
              {
                icon: <HelpCircle className="w-8 h-8" />,
                title: "FAQs",
                description: "Find answers to common questions",
                action: "View FAQs",
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Video Tutorials",
                description: "Watch step-by-step guides",
                action: "Watch Now",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button variant="outline">{item.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Still Need Help?
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is your message about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
