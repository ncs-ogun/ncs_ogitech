"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react"

interface User {
  email: string
  name: string
  firstName?: string
  lastName?: string
  phone?: string
}

export function Navbar() {
  const menuItems = [
    { label: "Loans", href: "/loans" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Help", href: "/help" },
  ];
    const [user, setUser] = useState<User | null>(null)
useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

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
          { !user &&   <Button
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-blue-50"
          >
            <Link href="/login">
            Login
            </Link>
          </Button>}
           { user &&   <Button
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-blue-50"
          >
            <Link href="/dashboard">
            Dashboard
            </Link>
          </Button>}
         
          <Button className="bg-primary hover:bg-primary/90"><Link href="/apply">Apply Now </Link></Button>
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
                <Link href="/login">
                Login
                </Link>
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
