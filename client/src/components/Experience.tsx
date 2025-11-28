import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Users, Rocket } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Pleno",
    company: "Compass.Uol (Petrobrás, BMW, Google...)",
    period: "Vários Anos",
    description:
      "Experiência em projetos internacionais desenvolvendo soluções escaláveis e de alta performance com tecnologias modernas.",
    highlights: [
      "Arquitetura de sistemas distribuídos",
      "Cloud computing e DevOps",
      "Integração de APIs e microsserviços",
    ],
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
  {
    role: "Professor de Programação e Robótica",
    company: "Instituição de Ensino (CNA Ctrl+Play)",
    period: "Presente",
    description:
      "Inspirando jovens a usar tecnologia como ferramenta de transformação, ensinando programação, robótica e pensamento computacional.",
    highlights: [
      "Desenvolvimento de currículo inovador",
      "Mentoria de estudantes em projetos práticos",
      "Integração de tecnologias emergentes",
    ],
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Especialista em Cloud & Integração",
    company: "Consultoria Técnica",
    period: "Múltiplos Projetos",
    description:
      "Implementação de soluções cloud-native em AWS e Google Cloud, com foco em automação, segurança e performance.",
    highlights: [
      "Migração para cloud computing",
      "Automação de infraestrutura",
      "Otimização de custos e performance",
    ],
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
];

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      data-testid="section-experience"
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
            data-testid="badge-experience"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Experiência Profissional
          </Badge>
          <h2
            className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-experience"
          >
            Trajetória de Impacto
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-experience-description"
          >
            Transformando desafios em oportunidades através de tecnologia e
            educação
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-testid={`card-experience-${index}`}
              >
                <div
                  className={`md:flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="p-4 bg-[hsl(var(--background))] rounded-2xl border-4 border-primary/20 shadow-lg">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <Card className="md:w-1/2 hover-elevate active-elevate-2 border-2 rounded-2xl overflow-hidden">
                    <div
                      className={`h-2 bg-gradient-to-r ${exp.color}`}
                      style={{
                        boxShadow: `0 4px 20px -5px hsl(var(--primary) / 0.3)`,
                      }}
                    />
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle
                          className=" text-xl"
                          data-testid={`text-experience-role-${index}`}
                        >
                          {exp.role}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="rounded-xl shrink-0"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <p
                        className="text-sm text-muted-foreground font-medium"
                        data-testid={`text-experience-company-${index}`}
                      >
                        {exp.company}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p
                        className="text-sm leading-relaxed"
                        data-testid={`text-experience-description-${index}`}
                      >
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-start gap-2"
                            data-testid={`text-experience-highlight-${index}-${hIndex}`}
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <p className="text-sm text-foreground/80">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
