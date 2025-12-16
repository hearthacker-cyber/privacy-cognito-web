import { Link } from "react-router-dom";
import { Database, Shield, BarChart3, Brain, Award, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "identitygraph",
    name: "IdentityGraph™",
    icon: Database,
    tagline: "Unified Identity Resolution",
    description: "Connect fragmented customer data across devices, channels, and touchpoints with deterministic and probabilistic matching.",
    features: [
      "Cross-device identity stitching",
      "Real-time profile unification",
      "Privacy-safe ID resolution",
      "Household-level connections",
    ],
    href: "/platform/identitygraph",
    gradient: "from-primary via-primary/80 to-secondary",
    stats: { value: "2.4M+", label: "Identities resolved daily" },
  },
  {
    id: "consentgraph",
    name: "ConsentGraph™",
    icon: Shield,
    tagline: "Consent Orchestration",
    description: "Automate consent collection, management, and enforcement across your entire data ecosystem with full audit trails.",
    features: [
      "GDPR/CCPA/LGPD compliance",
      "Preference management center",
      "Consent-aware data flows",
      "Complete audit logging",
    ],
    href: "/platform/consentgraph",
    gradient: "from-success via-success/80 to-info",
    stats: { value: "99.9%", label: "Compliance accuracy" },
  },
  {
    id: "analytics",
    name: "Analytics SDK",
    icon: BarChart3,
    tagline: "Privacy-First Analytics",
    description: "Capture rich behavioral data with our lightweight SDK that respects privacy while delivering actionable insights.",
    features: [
      "First-party data collection",
      "Cookieless measurement",
      "Server-side tracking",
      "Custom event taxonomy",
    ],
    href: "/platform/analytics-sdk",
    gradient: "from-info via-info/80 to-primary",
    stats: { value: "<50ms", label: "Average latency" },
  },
  {
    id: "intent",
    name: "IntentEngine™",
    icon: Brain,
    tagline: "Predictive Intelligence",
    description: "Transform behavioral signals into predictive audiences with machine learning models trained on privacy-safe data.",
    features: [
      "Purchase intent scoring",
      "Churn prediction models",
      "Lookalike audiences",
      "Real-time personalization",
    ],
    href: "/platform/intent-engine",
    gradient: "from-secondary via-secondary/80 to-primary",
    stats: { value: "3.2x", label: "Conversion lift" },
  },
  {
    id: "datascore",
    name: "DataScore™",
    icon: Award,
    tagline: "Quality Assurance",
    description: "Monitor and improve your data quality with automated scoring, validation, and enrichment recommendations.",
    features: [
      "Data freshness monitoring",
      "Accuracy validation",
      "Completeness scoring",
      "Enrichment suggestions",
    ],
    href: "/platform/datascore",
    gradient: "from-warning via-warning/80 to-success",
    stats: { value: "98.7", label: "Average quality score" },
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 inline mr-1" />
            Platform Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Privacy Intelligence Suite
          </h2>
          <p className="text-lg text-muted-foreground">
            Five integrated products that work together seamlessly to transform 
            your data operations while maintaining privacy and compliance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Card */}
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    {product.stats.label}
                    <span className="block text-foreground font-bold">{product.stats.value}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={product.href}>
                  <Button variant="ghost" className="w-full group/btn">
                    Explore {product.name.replace('™', '')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link to="/platform">
            <Button size="lg" className="bg-primary-gradient hover:opacity-90 text-primary-foreground">
              View Full Platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
