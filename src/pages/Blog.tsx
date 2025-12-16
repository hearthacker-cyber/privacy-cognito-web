import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, Calendar, Clock, User, ArrowRight, 
  Tag, ChevronLeft, ChevronRight
} from "lucide-react";

const categories = [
  { name: "All", count: 24 },
  { name: "Privacy", count: 8 },
  { name: "Technology", count: 6 },
  { name: "Compliance", count: 5 },
  { name: "AI & ML", count: 3 },
  { name: "Industry", count: 2 },
];

const posts = [
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
  {
    id: 5,
    title: "Navigating CCPA 2.0: What Enterprises Need to Know",
    excerpt: "The California Privacy Rights Act brings new requirements. Here's how to prepare your organization.",
    category: "Compliance",
    author: "Jennifer Kim",
    date: "Dec 3, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Real-Time Data Processing at Scale: Architecture Patterns",
    excerpt: "Learn the architectural patterns that enable sub-50ms latency processing of billions of events daily.",
    category: "Technology",
    author: "Alex Thompson",
    date: "Dec 1, 2024",
    readTime: "15 min read",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Privacy: "bg-primary/10 text-primary",
  Compliance: "bg-success/10 text-success",
  Technology: "bg-info/10 text-info",
  "AI & ML": "bg-secondary/10 text-secondary",
  Industry: "bg-warning/10 text-warning",
};

export default function Blog() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              DataWise Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, tutorials, and best practices for privacy-first data intelligence.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all text-sm"
              >
                {category.name}
                <span className="ml-1 text-muted-foreground">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Link to={`/blog/${featuredPost.id}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">Featured</span>
                </div>
                <div className="flex flex-col justify-center">
                  <Badge className={categoryColors[featuredPost.category]}>
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/10">
                      {String(post.id).padStart(2, '0')}
                    </span>
                  </div>
                  <Badge className={`${categoryColors[post.category]} text-xs`}>
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="icon"
                className={page === 1 ? "bg-primary-gradient" : ""}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on privacy, data intelligence, and industry trends 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-primary-gradient text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
