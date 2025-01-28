"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      {/* Decorative dots */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-dots opacity-20" />

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
              Access to credit when you need it. Get Money In Minutes
            </h2>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                >
                  GET STARTED
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Create Your Account for Free
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
