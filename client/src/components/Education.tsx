import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const graduations = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    type: "Graduação",
    icon: GraduationCap,
  },
  {
    title: "Bacharel em Ciências da Computação",
    type: "Graduação",
    icon: GraduationCap,
  },
];

const postGraduations = [
  { title: "Gestão de TI", type: "Pós-Graduação" },
  { title: "MBA em Metodologias Ágeis", type: "Pós-Graduação" },
  { title: "Inteligência Artificial e Machine Learning", type: "Pós-Graduação" },
  { title: "Cloud Computing", type: "Pós-Graduação" },
  { title: "Design de Produtos Digitais", type: "Pós-Graduação" },
];

export function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      data-testid="section-education"
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
            data-testid="badge-education"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Formação Acadêmica
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-education"
          >
            Educação de Excelência
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-education-description"
          >
            Formação sólida e contínua em tecnologia, gestão e inovação
          </p>
        </div>

        <div className="mb-12">
          <h3
            className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3"
            data-testid="heading-graduations"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            Graduações
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {graduations.map((edu, index) => (
              <Card
                key={index}
                className={`hover-elevate active-elevate-2 border-2 transition-all duration-500 rounded-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-graduation-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-heading text-lg font-semibold mb-2"
                        data-testid={`text-graduation-title-${index}`}
                      >
                        {edu.title}
                      </h4>
                      <Badge variant="secondary" className="rounded-xl">
                        {edu.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3"
            data-testid="heading-postgraduate"
          >
            <Award className="h-6 w-6 text-primary" />
            Pós-Graduações
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postGraduations.map((edu, index) => (
              <Card
                key={index}
                className={`hover-elevate active-elevate-2 border-2 transition-all duration-500 rounded-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                data-testid={`card-postgraduate-${index}`}
              >
                <CardContent className="p-6">
                  <h4
                    className="font-heading text-base font-semibold mb-3"
                    data-testid={`text-postgraduate-title-${index}`}
                  >
                    {edu.title}
                  </h4>
                  <Badge variant="secondary" className="rounded-xl">
                    {edu.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
