import Image from "next/image";
import Link from "next/link";
import { Clock, Building2, TrendingUp, Gift } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "QUICK",
      description: "Access affordable finance in minutes.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "FLEXIBLE",
      description: "There is something for everyone.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "GROWTH",
      description:
        "Build a positive credit profile with our range of products.",
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "VALUE",
      description:
        "Get rewards that keep on giving with your account as premium membership",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/lady.jpeg"
            alt="Happy customer using Ogitech Loans"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Build a financial lifestyle that works for you.
          </h2>

          <div className="grid gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-flex items-center text-primary font-semibold mt-8 hover:underline"
          >
            Our Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
