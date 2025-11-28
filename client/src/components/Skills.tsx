import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  Lightbulb,
  Globe,
  FolderGit2,
  Award,
  Brain,
  Airplay,
} from "lucide-react";

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

// 🔥 PROJETOS (exemplo real + mocks)
const projects = [
  {
    title: "Programação e Robótica para Jovens",
    link: "https://ctrlplay.com.br/",
    image: "projects/ctrl.png",
    description:
      "Projetos gamificados de programação e robótica a crianças e adolescentes unindo SCRUM e pensamento computacional.",
    icon: Award,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Mentoria em Inteligência Artificial e Machine Learning",
    link: "#",
    image: "projects/palestra.png",
    description:
      "Projetos educacionais usando Inteligência Artificial e Machine Learning",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "CTO & Desenvolvimento de Soluções Digitais",
    link: "https://alliance-marcas.onrender.com/",
    image: "projects/alliance-marcas.png",
    description:
      "Responsável pela arquitetura e criação do site oficial e sistemas de gestão da empresa, unindo tecnologia, performance e experiência do usuário.",
    icon: Airplay,
    color: "from-red-500 to-red-700",
  },
  {
    title: "Sistema completo para Gestão de Projetos Multiplaformas",
    link: "https://fgk-project.onrender.com/",
    image: "projects/fgk.png",
    description:
      "Um ecossistema fullstack moderno, criado para impulsionar negócios digitais com máxima performance, segurança e experiência de usuário.",
    icon: Globe,
    color: "from-green-800 to-green-500",
  },
  {
    title: "Ailos – Soluções Digitais e Integrações em Escala",
    link: "https://www.ailos.coop.br/",
    image: "projects/ailos.png",
    description:
      "Desenvolvimento de sistemas digitais no ecossistema Ailos, atuando em integrações escaláveis e arquitetura de APIs com foco em eficiência, segurança e governança.",
    icon: Globe,
    color: "from-cyan-500 to-yellow-400",
  },
  {
    title: "KMV Ipiranga – Integrações & Arquitetura",
    link: "https://kmdevantagens.com.br/",
    image: "projects/kmv.png",
    description:
      "Desenvolvimento de integrações escaláveis e seguras entre sistemas e tecnologias, utilizando Mulesoft. Arquitetura técnica, validação de integrações de soluções.",
    icon: Globe,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Uso Ético e Inteligente da IA na Educação",
    link: "https://ia-em-aula-guia.lovable.app/",
    image: "projects/projeto-ia.png",
    description:
      "Plataforma completa para uso ético da inteligência artificial nas escolas, com diretrizes e ferramentas práticas.",
    icon: Globe,
    color: "from-blue-600 to-cyan-400",
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
      {/* HABILIDADES */}
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="secondary" className="mb-4 rounded-2xl px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Habilidades
          </Badge>
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Expertise Técnico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            >
              <CardContent className="p-6">
                <h3 className=" text-lg font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
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
                            transitionDelay: `${
                              catIndex * 100 + skillIndex * 50
                            }ms`,
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

      {/* PROJETOS */}
      <div className="container mx-auto max-w-6xl mt-24">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trabalhos Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplicações que refletem minha visão e propósito
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover-elevate active-elevate-2 border-2 rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className=" text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="rounded-xl">
                    <project.icon className="w-4 h-4" />
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={500}
                    height={300}
                    alt={project.title}
                    className="rounded-xl mb-4 shadow-lg hover:scale-[1.02] transition"
                  />
                </a>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Ver Projeto →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
