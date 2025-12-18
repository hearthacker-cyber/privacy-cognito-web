import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Lock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible z-[1]">
      {/* Background - theme aware */}
      <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient" />
      
      {/* Static Gradient Orbs - no animation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-info/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-sm font-medium text-white">
              Trusted by 500+ enterprises worldwide
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Privacy-Native
            <span className="block gradient-text">Intelligence Platform</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Transform your data strategy with privacy-first identity resolution, 
            consent automation, and predictive analytics. Build trust while 
            unlocking powerful customer insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/demo">
              <Button size="lg" className="bg-primary-gradient hover:opacity-90 text-primary-foreground px-8 py-6 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/platform">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-success" />
              <span className="text-sm">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-success" />
              <span className="text-sm">99.99% Uptime</span>
            </div>
          </div>
        </div>

        {/* Hero Illustration / Dashboard Preview */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
            
            {/* Dashboard Frame */}
            <div className="relative glass rounded-2xl p-2 shadow-2xl">
              <div className="bg-card rounded-xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-warning/70" />
                    <div className="w-3 h-3 rounded-full bg-success/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                      dashboard.datawise.io
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-card to-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Stat Cards */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Identities Resolved</p>
                      <p className="text-2xl font-bold text-foreground">2.4M</p>
                      <p className="text-xs text-success">+12.5% this month</p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Consent Rate</p>
                      <p className="text-2xl font-bold text-foreground">94.2%</p>
                      <p className="text-xs text-success">+3.2% improvement</p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Data Quality Score</p>
                      <p className="text-2xl font-bold text-foreground">98.7</p>
                      <p className="text-xs text-muted-foreground">Excellent</p>
                    </div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="h-48 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border flex items-end justify-around p-4">
                    {[65, 45, 75, 55, 85, 60, 90, 70, 80, 65, 95, 75].map((height, i) => (
                      <div
                        key={i}
                        className="w-6 rounded-t-md bg-primary-gradient opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
