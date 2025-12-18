import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Database, Shield, BarChart3, Brain, Award, Layers, 
  ArrowRight, Check, Zap, Globe, Lock, Cloud 
} from "lucide-react";

const products = [
  {
    id: "identitygraph",
    name: "IdentityGraph™",
    icon: Database,
    tagline: "Unified Identity Resolution",
    description: "Connect fragmented customer data across devices, channels, and touchpoints.",
    href: "/platform/identitygraph",
    gradient: "from-primary to-secondary",
  },
  {
    id: "consentgraph",
    name: "ConsentGraph™",
    icon: Shield,
    tagline: "Consent Orchestration",
    description: "Automate consent collection and enforcement across your data ecosystem.",
    href: "/platform/consentgraph",
    gradient: "from-success to-info",
  },
  {
    id: "analytics",
    name: "Analytics SDK",
    icon: BarChart3,
    tagline: "Privacy-First Analytics",
    description: "Capture rich behavioral data while respecting user privacy.",
    href: "/platform/analytics-sdk",
    gradient: "from-info to-primary",
  },
  {
    id: "intent",
    name: "IntentEngine™",
    icon: Brain,
    tagline: "Predictive Intelligence",
    description: "Transform behavioral signals into predictive audiences.",
    href: "/platform/intent-engine",
    gradient: "from-secondary to-primary",
  },
  {
    id: "datascore",
    name: "DataScore™",
    icon: Award,
    tagline: "Quality Assurance",
    description: "Monitor and improve your data quality with automated scoring.",
    href: "/platform/datascore",
    gradient: "from-warning to-success",
  },
];

const capabilities = [
  { icon: Zap, title: "Real-Time Processing", description: "Sub-50ms latency for instant decisions" },
  { icon: Globe, title: "Global Scale", description: "50B+ events processed daily" },
  { icon: Lock, title: "Privacy-Native", description: "Built for GDPR, CCPA, and beyond" },
  { icon: Cloud, title: "Cloud-Agnostic", description: "Deploy anywhere: AWS, GCP, Azure" },
];

export default function PlatformOverview() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Platform Overview</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Complete Privacy
              <span className="block gradient-text">Intelligence Stack</span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Five integrated products that work together seamlessly to transform 
              your data operations while maintaining privacy and compliance.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button size="lg" className="bg-primary-gradient text-primary-foreground">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/platform/architecture">
                <Button size="lg" variant="outline">
                  View Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Platform Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each product is powerful on its own and transformative when combined.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} to={product.href} className="group">
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-primary mb-2">{product.tagline}</p>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Enterprise Capabilities</h2>
            <p className="text-muted-foreground">Built for scale, security, and compliance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a demo to see how DataWise can transform your data strategy.
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
