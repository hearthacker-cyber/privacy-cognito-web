import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Privacy-First Marketing in a Cookieless World",
    excerpt: "As third-party cookies phase out, learn how first-party data strategies can maintain marketing effectiveness while respecting user privacy.",
    category: "Privacy",
    author: "Elena Rodriguez",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Trust Through Consent: A GDPR Success Story",
    excerpt: "How a major European retailer transformed their consent management and saw customer trust metrics soar by 40%.",
    category: "Compliance",
    author: "Marcus Weber",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Identity Resolution Best Practices for Enterprise",
    excerpt: "A comprehensive guide to implementing cross-device identity resolution while maintaining data quality and privacy standards.",
    category: "Technology",
    author: "David Chen",
    date: "Dec 8, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 4,
    title: "AI-Powered Audience Segmentation: Beyond Demographics",
    excerpt: "Discover how machine learning is revolutionizing audience targeting with behavioral and intent-based segmentation.",
    category: "AI & ML",
    author: "Priya Patel",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Privacy: "bg-primary/10 text-primary",
  Compliance: "bg-success/10 text-success",
  Technology: "bg-info/10 text-info",
  "AI & ML": "bg-secondary/10 text-secondary",
};

export function BlogSection() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From the Blog
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Expert perspectives on privacy, data intelligence, and industry trends.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Post */}
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group block"
          >
            <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
              {/* Image Placeholder */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform">
                  01
                </div>
              </div>

              {/* Content */}
              <Badge className={categoryColors[featuredPost.category]}>
                {featuredPost.category}
              </Badge>

              <h3 className="text-2xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {featuredPost.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
            </div>
          </Link>

          {/* Other Posts */}
          <div className="space-y-4">
            {otherPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block"
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="flex gap-4">
                    {/* Image Placeholder */}
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-primary/20">
                        {String(index + 2).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Badge className={`${categoryColors[post.category]} text-xs`}>
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
