import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Zap, Briefcase, User, Users } from "lucide-react";

export default function LoansPage() {
  const loanTypes = [
    {
      id: "personal",
      title: "Personal Loans",
      icon: <User className="w-6 h-6" />,
      description: "Quick access to funds for personal expenses",
      products: [
        {
          name: "Quick Cash",
          amount: "₦5,000 - ₦50,000",
          term: "1 - 30 days",
          rate: "0.3% per day",
          features: [
            "No collateral required",
            "Instant approval",
            "Flexible repayment",
          ],
        },
        {
          name: "Salary Advance",
          amount: "Up to 50% of monthly salary",
          term: "1 - 3 months",
          rate: "5% monthly",
          features: [
            "Low interest rate",
            "Automatic repayment",
            "Increase limit over time",
          ],
        },
      ],
    },
    {
      id: "business",
      title: "Business Loans",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Flexible financing solutions for your business needs",
      products: [
        {
          name: "SME Growth Fund",
          amount: "₦100,000 - ₦5,000,000",
          term: "3 - 12 months",
          rate: "3% monthly",
          features: [
            "No collateral up to ₦1M",
            "Business financial advice",
            "Flexible use of funds",
          ],
        },
        {
          name: "Invoice Financing",
          amount: "Up to 80% of invoice value",
          term: "30 - 90 days",
          rate: "2.5% monthly",
          features: [
            "Quick cash flow solution",
            "No hidden fees",
            "Simple application process",
          ],
        },
      ],
    },
    {
      id: "group",
      title: "Group Loans",
      icon: <Users className="w-6 h-6" />,
      description: "Collaborative borrowing for shared goals",
      products: [
        {
          name: "Community Project Loan",
          amount: "₦500,000 - ₦10,000,000",
          term: "6 - 24 months",
          rate: "2% monthly",
          features: [
            "Group liability",
            "Tailored repayment schedules",
            "Community development focus",
          ],
        },
        {
          name: "Cooperative Society Loan",
          amount: "Based on group savings",
          term: "3 - 12 months",
          rate: "1.5% monthly",
          features: [
            "Low interest rate",
            "Builds credit history",
            "Encourages savings",
          ],
        },
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Loan Solutions for Every Need
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Whether you're looking to cover personal expenses, grow your
              business, or fund a community project, we have the right loan for
              you.
            </p>
            <Button variant="secondary" size="lg">
              Check Your Eligibility
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Loan Products
          </h2>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {loanTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="text-sm md:text-base"
                >
                  <span className="flex items-center gap-2">
                    {type.icon}
                    <span className="hidden md:inline">{type.title}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            {loanTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <div className="grid md:grid-cols-2 gap-8">
                  {type.products.map((product, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" />
                            <span>Amount: {product.amount}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>Term: {product.term}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-primary" />
                            <span>Rate: {product.rate}</span>
                          </li>
                        </ul>
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Apply Online",
                description:
                  "Fill out our simple online application form in minutes.",
              },
              {
                title: "Get Approved",
                description: "Receive a decision quickly, often within hours.",
              },
              {
                title: "Receive Funds",
                description:
                  "Once approved, get funds deposited directly to your account.",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What documents do I need to apply?",
                answer:
                  "You'll need a valid ID, proof of income, and bank statements for the last 3 months. Additional documents may be required depending on the loan type.",
              },
              {
                question: "How long does the approval process take?",
                answer:
                  "For most loans, you can expect a decision within 24 hours. Some loans may be approved instantly.",
              },
              {
                question: "Can I repay my loan early?",
                answer:
                  "Yes, you can repay your loan early without any penalties. This can help you save on interest.",
              },
              {
                question: "What happens if I miss a payment?",
                answer:
                  "We understand that unexpected situations can arise. Please contact us immediately if you think you might miss a payment, and we'll work with you to find a solution.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step towards financial freedom. Apply for a loan
            today and experience the Ogitech Loans difference.
          </p>
          <Button variant="secondary" size="lg">
            Apply Now
          </Button>
        </div>
      </section>
    </main>
  );
}
