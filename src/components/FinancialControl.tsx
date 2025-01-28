import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function FinancialControlSection() {
  const benefits = [
    "View and track your credit score in real-time",
    "Lifetime benefits from a positive credit rating",
    "Financial Well-being powered by access to finance",
    "Full Control that guarantees ease of mind",
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Gain Control over your Financial Well-being
          </h2>

          <p className="text-gray-600">
            We are committed to giving you the break you deserve when it comes
            to stress-free access to affordable finance.
          </p>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 rounded-full bg-teal-100 p-1">
                  <Check className="w-4 h-4 text-teal-600" />
                </span>
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/platforms"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Visit any of our Platforms
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

        <div className="relative">
          {/* Decorative dots pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-dots opacity-20 z-0" />

          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/alert2.jpeg"
                alt="Person checking their credit score notification"
                width={500}
                height={600}
                className="w-full object-cover"
              />

              {/* Notification overlay */}
              <div className="absolute top-1/4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-semibold">Credit Alert ⚡</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-1">5 min ago</p>
                  <p>Your bank account has just been credited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
