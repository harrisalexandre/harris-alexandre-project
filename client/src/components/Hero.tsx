import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Instagram, Award, Palette } from "lucide-react";
import { SiBehance } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harris-alexandre/",
    testId: "link-linkedin",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/harrisalexandre",
    testId: "link-github",
  },
  {
    name: "Behance",
    icon: SiBehance,
    href: "https://www.behance.net/harrisalexandre",
    testId: "link-behance",
  },
  {
    name: "Credly",
    icon: Award,
    href: "https://www.credly.com/users/harrisalexandre/",
    testId: "link-credly",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/_harrisalexandre",
    testId: "link-instagram",
  },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleContactClick = () => {
    const footer = document.querySelector("#footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const experience = document.querySelector("#experience");
    if (experience) {
      experience.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <br></br>
          <h1
            className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
            data-testid="text-name"
          >
            Harris Alexandre
          </h1>

          <h2
            className=" text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-primary"
            data-testid="text-title"
            style={{
              textShadow: "0 0 30px hsl(var(--primary) / 0.3)",
            }}
          >
            Software Engineer & Professor de Programação e Robótica
          </h2>

          <p
            className="text-xl sm:text-2xl font-medium mb-8 text-muted-foreground italic"
            data-testid="text-tagline"
          >
            "Transformando Desafios em Oportunidades"
          </p>

          <p
            className="text-base sm:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-bio"
          >
            Atuo transformando conhecimento técnico em aprendizado prático.
            Tenho vasta experiência em projetos globais e inspiro jovens a usar
            a tecnologia como ferramenta de transformação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={handleProjectsClick}
              className="rounded-2xl px-8 text-base font-semibold shadow-lg transition-all duration-300"
              style={{
                boxShadow:
                  "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)",
              }}
              data-testid="button-view-projects"
            >
              <Palette className="mr-2 h-5 w-5" />
              Ver Projetos
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="rounded-2xl px-8 text-base font-semibold border-2 hover:border-primary hover:text-primary transition-all duration-300"
              data-testid="button-contact"
            >
              Entre em Contato
            </Button>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-4"
            data-testid="social-links"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover-elevate active-elevate-2 border border-card-border transition-all duration-300 group"
                data-testid={social.testId}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
