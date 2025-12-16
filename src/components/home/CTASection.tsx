import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const benefits = [
  "Free 14-day trial",
  "No credit card required",
  "Full platform access",
  "Dedicated onboarding",
];

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-primary-gradient rounded-3xl blur-xl opacity-20" />
            
            <div className="relative glass rounded-3xl p-8 md:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Start Your Journey
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
                Ready to Transform Your
                <span className="block gradient-text">Data Intelligence?</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Join 500+ enterprises already using DataWise to unlock privacy-first 
                customer insights and drive measurable business results.
              </p>

              {/* CTA Form */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 h-12"
                  />
                  <Button size="lg" className="bg-primary-gradient hover:opacity-90 text-primary-foreground h-12 px-6">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Alternative CTA */}
              <div className="text-center">
                <p className="text-muted-foreground mb-3">
                  Prefer to talk to an expert first?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link to="/demo">
                    <Button variant="outline" size="lg">
                      Schedule a Demo
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="ghost" size="lg">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise-ready security and compliance
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {["SOC 2", "GDPR", "CCPA", "ISO 27001", "HIPAA"].map((badge) => (
                <div
                  key={badge}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
