import { Github, Linkedin, Instagram, Award, Mail, Heart } from "lucide-react";
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

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-primary/10 via-transparent to-transparent border-t border-border/50"
      data-testid="footer"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 p-4 ">
            <p
              className=" text-xl sm:text-2xl md:text-3xl font-semibold mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              data-testid="text-footer-quote"
            >
              "A melhor maneira de prever o futuro é inventá-lo."
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              — Alan Kay
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card hover-elevate active-elevate-2 border border-card-border transition-all duration-300 group"
              data-testid={`link-footer-${social.name.toLowerCase()}`}
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <a
            href="mailto:contact@harrisalexandre.com"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            data-testid="link-email"
          >
            <Mail className="h-4 w-4" />
            <span>harrisalexandre308@gmail.com</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Harris Alexandre.</span>
            <span className="hidden sm:inline">Desenvolvido com</span>
            <Heart className="h-4 w-4 text-primary fill-primary inline-block" />
            <span className="hidden sm:inline">e tecnologia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
