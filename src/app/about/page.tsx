import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do, ensuring their financial success.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description:
        "Continuously improving our services to provide the best financial solutions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust & Security",
      description:
        "Your financial security is our top priority, backed by top-tier encryption.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description:
        "Committed to delivering outstanding service and maintaining high standards.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Financial Freedom
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              At Ogitech Loans, we're revolutionizing access to credit in
              Nigeria. Our mission is to provide quick, affordable, and
              hassle-free financial solutions to individuals and businesses.
            </p>
            <Button variant="secondary" size="lg">
              Learn More About Our Services
            </Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 bg-dots" />
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              These principles guide everything we do at Ogitech Loans
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                We believe everyone deserves access to affordable credit. Our
                platform is designed to make the lending process simple,
                transparent, and accessible to all Nigerians.
              </p>
              <p className="text-gray-600 mb-6">
                Through innovative technology and customer-centric services,
                we're building a future where financial barriers no longer hold
                people back from achieving their dreams.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-600">
                    Quick and easy loan applications
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-600">
                    Transparent fees and terms
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-600">24/7 customer support</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/mission.jpeg"
                alt="Our mission in action"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Experience Financial Freedom?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            financial lives with Ogitech Loans.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Apply for a Loan Today
          </Button>
        </div>
      </section>
    </main>
  );
}
