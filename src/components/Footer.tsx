import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#programs", label: "Programs" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  const services = [
    "Women Wellness Program",
    "90-Day Diet Program",
    "Kids Yoga",
    "Gut Reset Program",
  ];

  const policies = [
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Medical Disclaimer" },
  ];

  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="NutriomFit" className="h-12 w-auto mb-4 rounded-lg bg-background p-1" />
            <p className="text-primary-foreground/70 mb-6">
              Transform your health with holistic wellness programs combining 
              nutrition, yoga, and core strength training.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-primary-foreground/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-primary-foreground/70">hello@nutriomfit.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Online & Offline Sessions Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies & Copyright */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {policies.map((policy) => (
                <Link
                  key={policy.href}
                  to={policy.href}
                  className="text-primary-foreground/50 hover:text-primary text-sm transition-colors"
                >
                  {policy.label}
                </Link>
              ))}
            </div>
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} NutriomFit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;