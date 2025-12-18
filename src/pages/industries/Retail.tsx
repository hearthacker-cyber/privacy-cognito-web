import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, ArrowRight, Check, TrendingUp, Users, 
  Target, BarChart3, Shield, Zap, Heart
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Unified Customer View",
    description: "Connect online and offline touchpoints to understand the complete customer journey.",
  },
  {
    icon: Target,
    title: "Personalized Experiences",
    description: "Deliver relevant product recommendations and offers based on real-time intent signals.",
  },
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    description: "Turn browsers into buyers with predictive targeting and optimized customer journeys.",
  },
  {
    icon: Heart,
    title: "Customer Loyalty",
    description: "Build lasting relationships with consent-first engagement and personalized rewards.",
  },
];

const useCases = [
  {
    title: "Omnichannel Attribution",
    description: "Understand how online and offline channels work together to drive conversions.",
    stat: "47%",
    statLabel: "improvement in attribution accuracy",
  },
  {
    title: "Cart Abandonment Recovery",
    description: "Identify and re-engage shoppers who leave without purchasing.",
    stat: "32%",
    statLabel: "recovery rate increase",
  },
  {
    title: "Product Recommendations",
    description: "Serve AI-powered recommendations based on browsing and purchase history.",
    stat: "2.5x",
    statLabel: "increase in cross-sell revenue",
  },
  {
    title: "Loyalty Optimization",
    description: "Predict churn risk and deliver personalized retention offers.",
    stat: "28%",
    statLabel: "reduction in customer churn",
  },
];

const features = [
  "Cross-device identity resolution",
  "Real-time personalization",
  "Consent-aware marketing",
  "Purchase intent prediction",
  "Customer lifetime value scoring",
  "Omnichannel analytics",
  "Fraud prevention",
  "Privacy compliance",
];

export default function RetailIndustry() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <ShoppingCart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Retail & E-commerce</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Retail with
              <span className="block gradient-text">Privacy-First Intelligence</span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Unify customer journeys across online and offline touchpoints for 
              personalized shopping experiences that drive conversions and loyalty.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button size="lg" className="bg-primary-gradient text-primary-foreground">
                  Request Demo
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

      {/* Key Stats */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "47%", label: "Conversion Lift" },
              { value: "2.5x", label: "Cross-sell Revenue" },
              { value: "28%", label: "Churn Reduction" },
              { value: "99.9%", label: "Privacy Compliance" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Drive Retail Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DataWise helps retailers create seamless, personalized experiences 
              that increase revenue while building customer trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Real Business Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-foreground text-lg">{useCase.title}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold gradient-text">{useCase.stat}</p>
                    <p className="text-xs text-muted-foreground">{useCase.statLabel}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-info/10 text-info text-sm font-medium mb-4">
                Platform Features
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Everything You Need for Retail Success
              </h2>
              <p className="text-muted-foreground mb-8">
                Our complete suite of tools helps you understand customers, 
                personalize experiences, and drive growth—all while respecting privacy.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl p-8">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <ShoppingCart className="w-20 h-20 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            See how DataWise can help you deliver exceptional shopping experiences.
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
