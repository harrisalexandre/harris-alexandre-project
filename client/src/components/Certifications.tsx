import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // ⬅ IMPORTANTE

const certifications = [
  // 📦 AWS – Cloud
  {
    name: "AWS Cloud Practitioner Essentials",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "AWS Partner: Cloud Economics",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-orange-500 to-yellow-600",
  },
  {
    name: "AWS Partner: Sales Accreditation",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-amber-500 to-orange-500",
  },

  // ⚙️ AWS – Technical / Workloads
  {
    name: "AWS Partner: Technical",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-orange-600 to-red-500",
  },
  {
    name: "AWS Partner Modernizing SAP Workloads on AWS (Technical)",
    provider: "Amazon Web Services",
    category: "Cloud",
    color: "from-yellow-600 to-orange-500",
  },

  // 🤖 AWS – AI / ML
  {
    name: "AWS Partner: Generative AI Essentials",
    provider: "Amazon Web Services",
    category: "AI",
    color: "from-purple-600 to-pink-500",
  },

  // 🌐 Google Cloud – Cloud
  {
    name: "Build a Secure Google Cloud Network",
    provider: "Google Cloud",
    category: "Cloud",
    color: "from-blue-600 to-green-500",
  },
  {
    name: "Implementing Cloud Load Balancing for Compute Engine",
    provider: "Google Cloud",
    category: "Cloud",
    color: "from-blue-600 to-sky-500",
  },
  {
    name: "Set Up an App Dev Environment on Google Cloud",
    provider: "Google Cloud",
    category: "Cloud",
    color: "from-indigo-600 to-blue-500",
  },

  // 📊 Google Cloud – Data / AI
  {
    name: "Google Cloud Computing Foundations: Data, ML, and AI",
    provider: "Google Cloud",
    category: "AI",
    color: "from-pink-600 to-purple-500",
  },
  {
    name: "Prepare Data for ML APIs on Google Cloud",
    provider: "Google Cloud",
    category: "AI",
    color: "from-purple-600 to-blue-500",
  },

  // 🛡️ Google Cloud – Security
  {
    name: "Build a Secure Google Cloud Network",
    provider: "Google Cloud",
    category: "Security",
    color: "from-red-600 to-pink-500",
  },

  // 🧠 Oracle – AI
  {
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    provider: "Oracle",
    category: "AI",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
    provider: "Oracle",
    category: "AI",
    color: "from-orange-600 to-pink-500",
  },

  // 🗄️ Oracle – Data
  {
    name: "Oracle Data Platform Certified Foundations Associate",
    provider: "Oracle",
    category: "Data",
    color: "from-yellow-600 to-red-500",
  },
];

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const FIRST_BLOCK = certifications.slice(0, 6);
  const REMAINING = certifications.slice(6);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* TÍTULO */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="secondary" className="mb-4 rounded-2xl px-4 py-2">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Certificações Internacionais
          </Badge>
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Credenciais Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Certificações de líderes da indústria em cloud computing, integração
            e segurança
          </p>
          <Button variant="outline" size="lg" className="rounded-2xl border-2">
            <ExternalLink className="mr-2 h-4 w-4" />
            Verificar Credenciais no Credly
          </Button>
        </div>

        {/* PRIMEIROS 6 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIRST_BLOCK.map((cert, index) => (
            <Card
              key={index}
              className={`group hover-elevate active-elevate-2 border-2 transition-all duration-500 rounded-2xl overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
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
                    <h3 className=" text-base font-semibold mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LISTA EXPANDIDA + ANIMAÇÃO */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
            >
              {REMAINING.map((cert, index) => (
                <Card
                  key={index}
                  className="group hover-elevate active-elevate-2 border-2 transition-all duration-500 rounded-2xl overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
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
                        <h3 className=" text-base font-semibold mb-2 leading-tight">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {/* BOTÃO ABAIXO */}
          {REMAINING.length > 0 && (
            <div className="text-center mt-8">
              <Button
                variant="secondary"
                className="rounded-2xl"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Ver menos ▲" : `Ver mais (+${REMAINING.length}) ▼`}
              </Button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
