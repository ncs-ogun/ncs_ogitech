import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  GalleryThumbnailsIcon as Flickr,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "Youtube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Flickr className="w-5 h-5" />, href: "#", label: "Flickr" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and copyright */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Ogitech Loans
            </Link>
            <p className="text-sm text-gray-600">
              © Copyright {currentYear}. All Rights Reserved
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Privacy and Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Whistleblower
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Socials</h3>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t">
          {/* Address */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Address</h3>
            <address className="not-italic text-sm text-gray-600">
              4a DC5 Street, Lekki Phase 1<br />
              Lagos, Nigeria
            </address>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold text-primary mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Loans without collateral
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Loans in Nigeria
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Personal loans
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Get loans fast
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Instant loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>customercare@ogitechloan.ng</li>
              <li>09123652310, 09001447560</li>
              <li>02012983304</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
