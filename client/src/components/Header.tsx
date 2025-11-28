import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Formação", href: "#education" },
  { label: "Certificações", href: "#certifications" },
  { label: "Experiência", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contato", href: "#footer" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[hsl(var(--background))]/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-[hsl(var(--background))]/60 backdrop-blur-md"
      }`}
      data-testid="header-navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavClick("#hero")}
            className="rounded-2xl hover-elevate active-elevate-2 transition-all duration-300"
            data-testid="button-logo"
            style={{
              filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.3))",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo do Harris"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </button>

          <nav
            className="hidden md:flex items-center gap-1"
            data-testid="nav-desktop"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover-elevate active-elevate-2 rounded-2xl transition-all duration-300"
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-2xl"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden rounded-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
