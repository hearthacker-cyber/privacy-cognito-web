import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon, Database, Shield, BarChart3, Brain, Award, Layers, ShoppingCart, Map, Building2, Landmark, Wifi, Server, Smartphone, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const platformItems = [
  { title: "Platform Overview", href: "/platform", description: "Explore our complete privacy-native intelligence stack", icon: Layers },
  { title: "IdentityGraph™", href: "/platform/identitygraph", description: "Unified identity resolution across all touchpoints", icon: Database },
  { title: "ConsentGraph™", href: "/platform/consentgraph", description: "Automated consent management and compliance", icon: Shield },
  { title: "Analytics SDK", href: "/platform/analytics-sdk", description: "Privacy-first analytics for web and mobile", icon: BarChart3 },
  { title: "IntentEngine™", href: "/platform/intent-engine", description: "AI-powered predictive intent signals", icon: Brain },
  { title: "DataScore™", href: "/platform/datascore", description: "Data quality and reliability scoring", icon: Award },
];

const solutionItems = [
  { title: "Fraud Prevention", href: "/solutions/fraud-prevention", description: "Real-time fraud detection and prevention" },
  { title: "Consent Automation", href: "/solutions/consent-automation", description: "Streamlined consent collection and management" },
  { title: "Identity Resolution", href: "/solutions/identity-resolution", description: "Cross-device and cross-channel identity matching" },
  { title: "Predictive Audiences", href: "/solutions/predictive-audiences", description: "AI-driven audience segmentation" },
  { title: "Location Intelligence", href: "/solutions/location-intelligence", description: "Privacy-safe location analytics" },
  { title: "Performance Marketing", href: "/solutions/performance-marketing", description: "Attribution and campaign optimization" },
];

const industryItems = [
  { title: "Retail & E-commerce", href: "/industries/retail", icon: ShoppingCart },
  { title: "Marketplaces", href: "/industries/marketplaces", icon: Map },
  { title: "Travel & Tourism", href: "/industries/tourism", icon: Map },
  { title: "Smart Cities", href: "/industries/government", icon: Building2 },
  { title: "Financial Services", href: "/industries/fintech", icon: Landmark },
  { title: "Telecom", href: "/industries/telecom", icon: Wifi },
  { title: "Data Platforms", href: "/industries/data-platforms", icon: Server },
  { title: "Apps & SaaS", href: "/industries/apps", icon: Smartphone },
  { title: "Events", href: "/industries/events", icon: Ticket },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center transition-transform group-hover:scale-105">
              <Database className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DataWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Platform Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent">Platform</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {platformItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group flex gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link
                          to="/platform/architecture"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <Layers className="w-4 h-4" />
                          View Platform Architecture →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="grid grid-cols-2 gap-2">
                        {solutionItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <div className="grid grid-cols-2 gap-2">
                        {industryItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Links */}
                <NavigationMenuItem>
                  <Link
                    to="/resources"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/contact">
                <Button variant="ghost" size="sm">
                  Contact
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="sm" className="bg-primary-gradient hover:opacity-90 transition-opacity text-primary-foreground">
                  Request Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="space-y-4">
              {/* Platform Section */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Platform
                </p>
                <div className="space-y-1">
                  {platformItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      <span className="font-medium text-foreground">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Solutions Section */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Solutions
                </p>
                <div className="space-y-1">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      <span className="font-medium text-foreground">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-1 pt-4 border-t border-border">
                <Link
                  to="/resources"
                  className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                >
                  Resources
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link to="/demo" className="block">
                  <Button className="w-full bg-primary-gradient hover:opacity-90 text-primary-foreground">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
