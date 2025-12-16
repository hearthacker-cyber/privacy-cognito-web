import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Users, Target, Award, Heart, Globe, 
  Lightbulb, Shield, Zap, Building2
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "We believe privacy is a fundamental right, not a feature to be traded away.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in data intelligence.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description: "Our customers' success is the ultimate measure of our own success.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "200+", label: "Team Members" },
  { value: "500+", label: "Customers" },
  { value: "$50M", label: "Funding Raised" },
];

const milestones = [
  { year: "2019", title: "Founded", description: "DataWise founded in San Francisco" },
  { year: "2020", title: "Seed Round", description: "$5M seed funding from top VCs" },
  { year: "2021", title: "Series A", description: "$20M to expand product suite" },
  { year: "2022", title: "Global Expansion", description: "Opened offices in London & Singapore" },
  { year: "2023", title: "Series B", description: "$25M to accelerate growth" },
  { year: "2024", title: "500 Customers", description: "Milestone customer achievement" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Building the Future of
              <span className="block gradient-text">Privacy-First Intelligence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're on a mission to help enterprises unlock the power of their data 
              while respecting user privacy and building lasting trust.
            </p>
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

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Data-Driven Decisions Without Compromising Privacy
              </h2>
              <p className="text-muted-foreground mb-6">
                In a world where data drives competitive advantage, we believe 
                organizations shouldn't have to choose between powerful insights 
                and respecting user privacy. DataWise was founded on the principle 
                that privacy and intelligence can coexist.
              </p>
              <p className="text-muted-foreground">
                Our platform enables enterprises to understand their customers 
                deeply, predict their needs accurately, and serve them 
                personally—all while maintaining the highest standards of 
                data privacy and regulatory compliance.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: "Customer-Centric" },
                    { icon: Shield, label: "Privacy-Native" },
                    { icon: Globe, label: "Global Scale" },
                    { icon: Zap, label: "Real-Time" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-card border border-border text-center">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-info/10 text-info text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Company Timeline</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
              
              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-6 relative">
                    <div className="w-16 shrink-0 text-right">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shrink-0 relative z-10" />
                    <div className="pb-8">
                      <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented people who share our vision for 
            privacy-first data intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/careers">
              <Button size="lg" className="bg-primary-gradient text-primary-foreground">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
