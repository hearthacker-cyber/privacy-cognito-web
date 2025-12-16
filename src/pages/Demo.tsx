import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar, ArrowRight, ArrowLeft, Check, 
  Building2, Users, Target, Mail, Phone, User
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Your Info", icon: User },
  { id: 2, title: "Company", icon: Building2 },
  { id: 3, title: "Goals", icon: Target },
  { id: 4, title: "Schedule", icon: Calendar },
];

const companySize = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];

const interests = [
  "Identity Resolution",
  "Consent Management",
  "Analytics & Tracking",
  "Predictive Audiences",
  "Fraud Prevention",
  "Data Quality",
  "Full Platform",
];

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    interests: [] as string[],
    message: "",
  });

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    const current = formData.interests;
    if (current.includes(interest)) {
      updateFormData("interests", current.filter((i) => i !== interest));
    } else {
      updateFormData("interests", [...current, interest]);
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Request Demo</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              See DataWise in Action
            </h1>
            <p className="text-lg text-muted-foreground">
              Get a personalized demo tailored to your specific use cases and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={cn(
                  "flex items-center gap-2",
                  currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                )}>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    currentStep > step.id
                      ? "bg-success text-success-foreground"
                      : currentStep === step.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                  )}>
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className="hidden md:inline font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-8 md:w-16 h-px mx-2",
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl p-8">
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground">Your Information</h2>
                    <p className="text-muted-foreground">Let us know who we'll be speaking with.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          placeholder="John" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          placeholder="Doe" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="john@company.com" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567" 
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Company Info */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground">Company Details</h2>
                    <p className="text-muted-foreground">Help us understand your organization.</p>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company" 
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                        placeholder="Acme Inc." 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input 
                        id="jobTitle" 
                        value={formData.jobTitle}
                        onChange={(e) => updateFormData("jobTitle", e.target.value)}
                        placeholder="VP of Marketing" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Company Size *</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {companySize.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => updateFormData("companySize", size)}
                            className={cn(
                              "p-3 rounded-lg border text-sm transition-all",
                              formData.companySize === size
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Goals */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground">Your Goals</h2>
                    <p className="text-muted-foreground">What are you looking to achieve with DataWise?</p>
                    
                    <div className="space-y-2">
                      <Label>Areas of Interest *</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={cn(
                              "p-3 rounded-lg border text-sm transition-all flex items-center gap-2",
                              formData.interests.includes(interest)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <div className={cn(
                              "w-4 h-4 rounded border flex items-center justify-center",
                              formData.interests.includes(interest)
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            )}>
                              {formData.interests.includes(interest) && (
                                <Check className="w-3 h-3 text-primary-foreground" />
                              )}
                            </div>
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        placeholder="Tell us about your current challenges and what you're hoping to achieve..."
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Schedule */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in text-center">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Almost There!</h2>
                    <p className="text-muted-foreground">
                      Submit your request and our team will reach out within 24 hours 
                      to schedule your personalized demo.
                    </p>
                    
                    <div className="p-4 rounded-xl bg-muted text-left">
                      <h3 className="font-medium text-foreground mb-2">Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        {formData.firstName} {formData.lastName} from {formData.company}
                      </p>
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Interested in: {formData.interests.join(", ")}
                      </p>
                    </div>

                    <Button 
                      className="w-full bg-primary-gradient text-primary-foreground"
                      size="lg"
                    >
                      Submit Request
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                )}

                {/* Navigation */}
                {currentStep < 4 && (
                  <div className="flex justify-between mt-8 pt-6 border-t border-border">
                    <Button
                      variant="ghost"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="bg-primary-gradient text-primary-foreground"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
