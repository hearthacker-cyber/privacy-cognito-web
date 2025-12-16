import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Map, Plane, Building2, Landmark, Wifi, Server, Smartphone, Ticket, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    href: "/industries/retail",
    description: "Unify customer journeys across online and offline touchpoints for personalized shopping experiences.",
    benefits: [
      "Omnichannel identity resolution",
      "Purchase intent prediction",
      "Customer lifetime value scoring",
      "Cross-sell optimization",
    ],
    stat: { value: "47%", label: "increase in conversion rates" },
    image: "retail",
  },
  {
    id: "marketplaces",
    name: "Marketplaces",
    icon: Map,
    href: "/industries/marketplaces",
    description: "Build trust and safety while connecting buyers and sellers with intelligent matching.",
    benefits: [
      "Fraud detection & prevention",
      "Seller verification",
      "Buyer-seller matching",
      "Trust & safety scoring",
    ],
    stat: { value: "89%", label: "fraud reduction" },
    image: "marketplace",
  },
  {
    id: "tourism",
    name: "Travel & Tourism",
    icon: Plane,
    href: "/industries/tourism",
    description: "Deliver seamless travel experiences with privacy-safe location intelligence.",
    benefits: [
      "Trip intent detection",
      "Destination personalization",
      "Loyalty optimization",
      "Real-time offers",
    ],
    stat: { value: "2.3x", label: "booking conversion lift" },
    image: "travel",
  },
  {
    id: "government",
    name: "Smart Cities",
    icon: Building2,
    href: "/industries/government",
    description: "Enable citizen-centric services with privacy-preserving data analytics.",
    benefits: [
      "Population insights",
      "Service optimization",
      "Mobility analytics",
      "Privacy compliance",
    ],
    stat: { value: "35%", label: "efficiency improvement" },
    image: "government",
  },
  {
    id: "fintech",
    name: "Financial Services",
    icon: Landmark,
    href: "/industries/fintech",
    description: "Enhance risk assessment and customer experience while maintaining regulatory compliance.",
    benefits: [
      "Identity verification",
      "Risk scoring models",
      "Regulatory compliance",
      "Fraud prevention",
    ],
    stat: { value: "99.9%", label: "compliance accuracy" },
    image: "fintech",
  },
  {
    id: "telecom",
    name: "Telecom",
    icon: Wifi,
    href: "/industries/telecom",
    description: "Monetize first-party data while delivering hyper-personalized experiences.",
    benefits: [
      "Network analytics",
      "Churn prediction",
      "Upsell optimization",
      "Data monetization",
    ],
    stat: { value: "28%", label: "churn reduction" },
    image: "telecom",
  },
];

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-info/10 text-info text-sm font-medium mb-4">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions that address the unique challenges and opportunities 
            in your industry vertical.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                activeIndustry.id === industry.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              )}
            >
              <industry.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <activeIndustry.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeIndustry.name}
                </h3>
                <p className="text-muted-foreground">
                  {activeIndustry.description}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {activeIndustry.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
              <p className="text-3xl font-bold gradient-text">
                {activeIndustry.stat.value}
              </p>
              <p className="text-muted-foreground">
                {activeIndustry.stat.label}
              </p>
            </div>

            {/* CTA */}
            <Link to={activeIndustry.href}>
              <Button className="bg-primary-gradient hover:opacity-90 text-primary-foreground">
                Explore {activeIndustry.name} Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-2xl p-8">
              {/* Industry Visualization */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border flex items-center justify-center">
                <div className="text-center">
                  <activeIndustry.icon className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">{activeIndustry.name}</p>
                  <p className="text-sm text-muted-foreground">Interactive dashboard preview</p>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-3 rounded-lg bg-card border border-border text-center">
                  <p className="text-xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Customers</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border text-center">
                  <p className="text-xl font-bold text-foreground">10B+</p>
                  <p className="text-xs text-muted-foreground">Events/day</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border text-center">
                  <p className="text-xl font-bold text-foreground">99.9%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
