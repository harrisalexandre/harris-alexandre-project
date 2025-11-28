import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
