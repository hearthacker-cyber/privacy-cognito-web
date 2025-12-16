import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Database, ArrowRight, Check, Users, Smartphone, Monitor, 
  Link2, Fingerprint, Lock, Zap, RefreshCw, Shield
} from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Cross-Device Matching",
    description: "Connect user identities across mobile, desktop, tablet, and connected TV with probabilistic and deterministic methods.",
  },
  {
    icon: Fingerprint,
    title: "First-Party Identity",
    description: "Build durable identity graphs using your own first-party data, independent of third-party cookies.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Profile updates propagate instantly across your entire stack for consistent customer experiences.",
  },
  {
    icon: Users,
    title: "Household Resolution",
    description: "Understand household-level connections to improve targeting and attribution accuracy.",
  },
  {
    icon: Lock,
    title: "Privacy-Safe",
    description: "All identity resolution respects consent preferences and privacy regulations by design.",
  },
  {
    icon: Zap,
    title: "Sub-50ms Latency",
    description: "Lightning-fast identity lookups enable real-time personalization and decisioning.",
  },
];

const stats = [
  { value: "2.4M+", label: "Identities resolved daily" },
  { value: "99.7%", label: "Match accuracy" },
  { value: "<50ms", label: "Average latency" },
  { value: "180+", label: "Countries supported" },
];

const useCases = [
  "Cross-device attribution",
  "Omnichannel personalization",
  "Customer 360 profiles",
  "Audience activation",
  "Fraud prevention",
  "Data enrichment",
];

export default function IdentityGraph() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Platform Product</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              IdentityGraph™
              <span className="block gradient-text">Unified Identity Resolution</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect fragmented customer data across devices, channels, and touchpoints 
              with deterministic and probabilistic matching for a complete customer view.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button size="lg" className="bg-primary-gradient text-primary-foreground">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade identity resolution built for scale and privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-8">
                IdentityGraph combines multiple matching techniques to create 
                accurate, privacy-safe identity connections.
              </p>
              
              <div className="space-y-4">
                {[
                  "Collect identity signals from all touchpoints",
                  "Apply deterministic matching on verified identifiers",
                  "Use probabilistic modeling for cross-device connections",
                  "Validate matches against consent preferences",
                  "Sync unified profiles in real-time across your stack"
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl p-8">
                <h3 className="font-semibold text-foreground mb-4">Common Use Cases</h3>
                <div className="grid grid-cols-2 gap-3">
                  {useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Unify Your Customer Data?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            See how IdentityGraph can transform your customer understanding.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-primary-gradient text-primary-foreground">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
