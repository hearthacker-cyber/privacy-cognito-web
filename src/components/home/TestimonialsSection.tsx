import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "DataWise transformed our approach to customer data. We've seen a 47% increase in marketing ROI while actually improving our privacy posture. The IdentityGraph alone has been game-changing.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechRetail Inc.",
    industry: "E-commerce",
    avatar: "SC",
    rating: 5,
    stat: { value: "47%", label: "ROI Increase" },
  },
  {
    id: 2,
    quote: "Implementing ConsentGraph took our GDPR compliance from a constant worry to a competitive advantage. Our customers trust us more, and our legal team sleeps better at night.",
    author: "Marcus Weber",
    role: "Chief Privacy Officer",
    company: "FinanceFirst",
    industry: "Financial Services",
    avatar: "MW",
    rating: 5,
    stat: { value: "99.9%", label: "Compliance Rate" },
  },
  {
    id: 3,
    quote: "The IntentEngine's predictions are remarkably accurate. We've reduced our ad spend by 35% while increasing conversions. It's like having a crystal ball for customer behavior.",
    author: "Priya Patel",
    role: "Head of Growth",
    company: "TravelNow",
    industry: "Travel & Tourism",
    avatar: "PP",
    rating: 5,
    stat: { value: "35%", label: "Cost Reduction" },
  },
  {
    id: 4,
    quote: "DataWise's platform has been instrumental in our fraud prevention efforts. We've blocked over $12M in fraudulent transactions in the first quarter alone.",
    author: "James Rodriguez",
    role: "Director of Risk",
    company: "PaySecure",
    industry: "Fintech",
    avatar: "JR",
    rating: 5,
    stat: { value: "$12M", label: "Fraud Prevented" },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See how forward-thinking companies are transforming their data 
            strategies with DataWise.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {activeTestimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {activeTestimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activeTestimonial.role} at {activeTestimonial.company}
                      </p>
                      <p className="text-xs text-primary">
                        {activeTestimonial.industry}
                      </p>
                    </div>
                  </div>

                  {/* Stat */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-3xl font-bold gradient-text">
                      {activeTestimonial.stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activeTestimonial.stat.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeIndex === index
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Powering data intelligence for 500+ enterprises worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["TechCorp", "FinanceFirst", "RetailGiant", "TravelNow", "MediaMax", "HealthPlus"].map((company) => (
              <div
                key={company}
                className="text-xl font-bold text-muted-foreground"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
