import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Database, Shield, Zap, Globe } from "lucide-react";

const stats = [
  {
    icon: Database,
    value: 50,
    suffix: "B+",
    label: "Events Processed Daily",
    description: "Real-time data processing at scale",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Enterprise Customers",
    description: "Trusted by leading brands worldwide",
  },
  {
    icon: Shield,
    value: 99.99,
    suffix: "%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Globe,
    value: 180,
    suffix: "+",
    label: "Countries Supported",
    description: "Global privacy compliance",
  },
  {
    icon: Zap,
    value: 50,
    suffix: "ms",
    label: "Average Latency",
    description: "Lightning-fast response times",
  },
  {
    icon: TrendingUp,
    value: 3.2,
    suffix: "x",
    label: "Average ROI",
    description: "Measurable business impact",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value < 10 ? count.toFixed(2) : Math.round(count);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {displayValue}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            Platform Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powering Enterprise Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            Real numbers that demonstrate our commitment to performance, 
            reliability, and customer success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Animated Value */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <p className="font-medium text-foreground mt-2 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
