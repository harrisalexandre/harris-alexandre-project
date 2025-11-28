import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "MuleSoft Certified Developer - Level 2",
    provider: "MuleSoft",
    category: "Integration",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AWS Certified Data Engineer - Associate",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "AWS Certified Developer - Associate",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "AWS Certified DevOps Engineer - Professional",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    provider: "Google Cloud",
    category: "Cloud",
    color: "from-blue-600 to-green-500",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    provider: "Google Cloud",
    category: "Cloud",
    color: "from-blue-600 to-indigo-500",
  },
  {
    name: "Google Cloud Professional Security Engineer",
    provider: "Google Cloud",
    category: "Security",
    color: "from-red-600 to-pink-500",
  },
];

export function Certifications() {
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
      id="certifications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-certifications"
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
            data-testid="badge-certifications"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Certificações Internacionais
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            data-testid="heading-certifications"
          >
            Credenciais Profissionais
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            data-testid="text-certifications-description"
          >
            Certificações de líderes da indústria em cloud computing, integração
            e segurança
          </p>

          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-2"
            data-testid="button-verify-credentials"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Verificar Credenciais no Credly
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`group hover-elevate active-elevate-2 border-2 transition-all duration-500 rounded-2xl overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-certification-${index}`}
            >
              <div
                className={`h-2 bg-gradient-to-r ${cert.color}`}
                style={{
                  boxShadow: `0 4px 20px -5px hsl(var(--primary) / 0.3)`,
                }}
              />
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge
                      variant="secondary"
                      className="mb-3 rounded-xl text-xs"
                    >
                      {cert.category}
                    </Badge>
                    <h3
                      className="font-heading text-base font-semibold mb-2 leading-tight"
                      data-testid={`text-certification-name-${index}`}
                    >
                      {cert.name}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-certification-provider-${index}`}
                    >
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
