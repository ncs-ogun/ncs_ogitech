"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const menuItems = [
    { label: "Loans", href: "/loans" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Help", href: "/help" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Ogitech Loans
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-blue-50"
          >
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-4" />
              <Button className="w-full" variant="outline">
                Login
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Apply Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
