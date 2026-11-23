import { CelebrationFooter } from "@/components/celebration-footer";
import { EverydaySection } from "@/components/everyday-section";
import { HeroSection } from "@/components/hero-section";
import { KeepsakeSection } from "@/components/keepsake-section";
import { LetterSection } from "@/components/letter-section";
import { SiteHeader } from "@/components/site-header";
import { WeddingSection } from "@/components/wedding-section";

export default function App() {
  return (
    <div className="page-grain relative min-h-screen overflow-x-clip bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <EverydaySection />
        <WeddingSection />
        <KeepsakeSection />
        <LetterSection />
      </main>
      <CelebrationFooter />
    </div>
  );
}
