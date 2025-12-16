import { AlertTriangle, Eye, FileX, Link2Off } from "lucide-react";

const problems = [
  {
    icon: Link2Off,
    title: "Fragmented Identities",
    description: "Customer data scattered across systems creates blind spots and poor experiences.",
    stat: "73%",
    statLabel: "of companies struggle with identity fragmentation",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: AlertTriangle,
    title: "Compliance Risk",
    description: "Manual consent management leads to regulatory violations and costly fines.",
    stat: "$2.7M",
    statLabel: "average cost of a data privacy breach",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Eye,
    title: "Privacy Erosion",
    description: "Third-party cookies deprecation eliminates traditional tracking methods.",
    stat: "87%",
    statLabel: "of consumers concerned about data privacy",
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    icon: FileX,
    title: "Wasted Ad Spend",
    description: "Poor data quality and targeting wastes marketing budgets on wrong audiences.",
    stat: "40%",
    statLabel: "of digital ad spend is wasted annually",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Data Intelligence is Broken
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern enterprises face unprecedented challenges in leveraging customer data 
            while maintaining privacy and compliance.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-2xl bg-card border border-border hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${problem.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {problem.description}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-border">
                <p className={`text-2xl font-bold ${problem.color}`}>
                  {problem.stat}
                </p>
                <p className="text-xs text-muted-foreground">
                  {problem.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
