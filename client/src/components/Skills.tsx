import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const skillCategories = [
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 95 },
      { name: "Google Cloud", level: 90 },
      { name: "Azure", level: 75 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "Java", level: 85 },
      { name: "Go", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker & Kubernetes", level: 88 },
      { name: "CI/CD Pipelines", level: 92 },
      { name: "Terraform", level: 85 },
      { name: "Monitoring & Logging", level: 87 },
    ],
  },
  {
    category: "Frameworks & Technologies",
    skills: [
      { name: "React & Next.js", level: 90 },
      { name: "Node.js & Express", level: 87 },
      { name: "MuleSoft", level: 92 },
      { name: "GraphQL & REST APIs", level: 88 },
    ],
  },
  {
    category: "Data & AI",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Data Engineering", level: 85 },
      { name: "SQL & NoSQL", level: 90 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Ensino & Mentoria", level: 95 },
      { name: "Liderança Técnica", level: 88 },
      { name: "Comunicação", level: 92 },
      { name: "Resolução de Problemas", level: 93 },
    ],
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-skills"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge
            variant="secondary"
            className="mb-4 rounded-2xl px-4 py-2"
            data-testid="badge-skills"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Habilidades
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-skills"
          >
            Expertise Técnico
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-skills-description"
          >
            Competências desenvolvidas através de anos de experiência prática e
            aprendizado contínuo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className={`hover-elevate active-elevate-2 border-2 transition-all duration-700 rounded-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
              data-testid={`card-skill-category-${catIndex}`}
            >
              <CardContent className="p-6">
                <h3
                  className="font-heading text-lg font-semibold mb-6 text-primary"
                  data-testid={`text-skill-category-${catIndex}`}
                >
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      data-testid={`skill-${catIndex}-${skillIndex}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-sm font-medium"
                          data-testid={`text-skill-name-${catIndex}-${skillIndex}`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: animateProgress ? `${skill.level}%` : "0%",
                            transitionDelay: `${(catIndex * 100) + (skillIndex * 50)}ms`,
                            boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
