import { useState } from "react";
import { Database, Shield, BarChart3, Brain, Award, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const layers = [
  {
    id: "identitygraph",
    name: "IdentityGraph™",
    icon: Database,
    description: "Unified identity resolution engine",
    features: ["Cross-device matching", "Probabilistic + deterministic", "Real-time sync"],
    color: "from-primary to-primary/80",
    position: 0,
  },
  {
    id: "consentgraph",
    name: "ConsentGraph™",
    icon: Shield,
    description: "Automated consent orchestration",
    features: ["GDPR/CCPA compliance", "Preference center", "Audit trails"],
    color: "from-success to-success/80",
    position: 1,
  },
  {
    id: "analytics",
    name: "Analytics SDK",
    icon: BarChart3,
    description: "Privacy-first data collection",
    features: ["First-party data", "Cookieless tracking", "Server-side events"],
    color: "from-info to-info/80",
    position: 2,
  },
  {
    id: "intent",
    name: "IntentEngine™",
    icon: Brain,
    description: "Predictive intelligence layer",
    features: ["ML-powered insights", "Behavioral signals", "Audience predictions"],
    color: "from-secondary to-secondary/80",
    position: 3,
  },
  {
    id: "datascore",
    name: "DataScore™",
    icon: Award,
    description: "Quality & reliability metrics",
    features: ["Data freshness", "Accuracy scoring", "Completeness index"],
    color: "from-warning to-warning/80",
    position: 4,
  },
];

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(layers[0]);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Platform Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            5-Layer Intelligence Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Our modular architecture seamlessly integrates identity, consent, 
            analytics, AI, and quality scoring into one unified platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Stack Visualization */}
          <div className="relative">
            <div className="space-y-3">
              {layers.map((layer, index) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 transition-all duration-300 text-left",
                    activeLayer.id === layer.id
                      ? "border-primary bg-primary/5 scale-105 shadow-lg shadow-primary/10"
                      : "border-border bg-card hover:border-primary/50 hover:bg-accent"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Layer Number */}
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold",
                      activeLayer.id === layer.id
                        ? `bg-gradient-to-br ${layer.color} text-primary-foreground`
                        : "bg-muted text-muted-foreground"
                    )}>
                      {index + 1}
                    </div>

                    {/* Layer Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <layer.icon className={cn(
                          "w-4 h-4",
                          activeLayer.id === layer.id ? "text-primary" : "text-muted-foreground"
                        )} />
                        <span className={cn(
                          "font-semibold",
                          activeLayer.id === layer.id ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {layer.name}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={cn(
                      "w-5 h-5 transition-transform",
                      activeLayer.id === layer.id 
                        ? "text-primary translate-x-1" 
                        : "text-muted-foreground"
                    )} />
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        activeLayer.id === layer.id ? "bg-gradient-to-r" : "bg-muted-foreground/20",
                        layer.color
                      )}
                      style={{ width: activeLayer.id === layer.id ? "100%" : "0%" }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="absolute left-7 top-16 bottom-16 w-px bg-gradient-to-b from-primary via-success via-info via-secondary to-warning opacity-30 -z-10" />
          </div>

          {/* Active Layer Details */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Glow Effect */}
              <div className={cn(
                "absolute -inset-4 rounded-3xl blur-2xl opacity-20 transition-colors duration-500",
                `bg-gradient-to-br ${activeLayer.color}`
              )} />

              <div className="relative glass rounded-2xl p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                    activeLayer.color
                  )}>
                    <activeLayer.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {activeLayer.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {activeLayer.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Key Capabilities:</p>
                  {activeLayer.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 rounded-lg bg-accent/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br",
                        activeLayer.color
                      )}>
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={`/platform/${activeLayer.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Learn more about {activeLayer.name}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
