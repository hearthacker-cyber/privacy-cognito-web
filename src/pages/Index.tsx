import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ArchitectureSection } from "@/components/home/ArchitectureSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <ArchitectureSection />
      <ProductsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
