import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, 
  ArrowRight, Send, Calendar
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime",
    contact: "office@idmap.org",
    action: "mailto:office@idmap.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm",
    contact: "+ 44 204 5799191",
    action: "tel:+442045799191",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Global Headquarters",
    contact: "Contact us for details",
    action: "#",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available 24/7 for support",
    contact: "Start a conversation",
    action: "#",
  },
];

const offices = [
  { city: "Global Headquarters", address: "Contact us for location details", timezone: "GMT" },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-white/70">
              Have questions about DataWise? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.action}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover-lift text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="text-sm text-primary font-medium">{method.contact}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your needs..." 
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary-gradient text-primary-foreground">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Offices</h2>
              <p className="text-muted-foreground mb-8">
                DataWise has offices around the world to serve our global customer base.
              </p>

              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{office.city}</h3>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {office.timezone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Need faster response?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a call with our team for immediate assistance.
                </p>
                <Link to="/demo">
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
