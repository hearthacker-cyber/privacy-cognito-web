import { Link } from "react-router-dom";
import { Database, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  platform: [
    { label: "Platform Overview", href: "/platform" },
    { label: "IdentityGraph™", href: "/platform/identitygraph" },
    { label: "ConsentGraph™", href: "/platform/consentgraph" },
    { label: "Analytics SDK", href: "/platform/analytics-sdk" },
    { label: "IntentEngine™", href: "/platform/intent-engine" },
    { label: "DataScore™", href: "/platform/datascore" },
  ],
  solutions: [
    { label: "Fraud Prevention", href: "/solutions/fraud-prevention" },
    { label: "Consent Automation", href: "/solutions/consent-automation" },
    { label: "Identity Resolution", href: "/solutions/identity-resolution" },
    { label: "Predictive Audiences", href: "/solutions/predictive-audiences" },
    { label: "Performance Marketing", href: "/solutions/performance-marketing" },
  ],
  industries: [
    { label: "Retail & E-commerce", href: "/industries/retail" },
    { label: "Financial Services", href: "/industries/fintech" },
    { label: "Travel & Tourism", href: "/industries/tourism" },
    { label: "Telecom", href: "/industries/telecom" },
    { label: "Apps & SaaS", href: "/industries/apps" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest insights on privacy-first data intelligence.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-primary-gradient hover:opacity-90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">DataWise</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Privacy-native intelligence platform for the modern enterprise.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  100 Innovation Drive<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href="mailto:hello@datawise.io"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@datawise.io
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a
                  href="tel:+14155551234"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (415) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DataWise. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
