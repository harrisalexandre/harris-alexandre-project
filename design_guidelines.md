# Design Guidelines for Harris Alexandre Portfolio

## User-Provided Specifications (Priority: Strict Adherence Required)

### Design System

**Color Palette:**
- Primary Background: Deep Dark Mode → #0f0f10
- Accent Color: Terracotta Neon → #E07A5F or #FF6B6B with soft diffused glow effects
- Light/Dark theme toggle with localStorage persistence

**Typography:**
- Headlines/Titles: Poppins (via Google Fonts CDN)
- Body Text: Inter (via Google Fonts CDN)

**Visual Style:**
- Minimalist futurism inspired by Apple/SpaceX aesthetics
- Glassmorphism effects (especially header)
- High border-radius on buttons and cards (rounded-2xl)
- Mobile-first responsive design

### Layout Structure

**A. Fixed Header (Glassmorphism)**
- Navigation with anchor links + smooth scroll
- Dark/light theme toggle
- PDF resume download button (prominent placement)
- Mobile hamburger menu

**B. Hero Section**
- Layout: Centered or left-aligned
- Name: Harris Alexandre
- Title: "Software Engineer & Professor de Programação e Robótica"
- Tagline: "Transformando Desafios em Oportunidades"
- Bio: "Atuo transformando conhecimento técnico em aprendizado prático. Tenho vasta experiência em projetos globais e inspiro jovens a usar a tecnologia como ferramenta de transformação."
- CTAs: "Ver Projetos" (solid terracotta button), "Entre em Contato" (outline terracotta)
- Social Bar: LinkedIn, GitHub, Behance, Credly, Instagram (@_harrisalexandre)
- Include professional headshot or abstract tech imagery

**C. Formação Acadêmica (Grid Layout)**
- Visually separate Graduação and Pós-Graduação
- Graduações: Tecnólogo em ADS, Bacharel em Ciências da Computação
- Pós-Graduações: Gestão de TI, MBA Ágeis, IA/Machine Learning, Cloud Computing, Design de Produtos Digitais

**D. Certificações Internacionais**
- Badge-style layout (Credly inspired)
- Featured: Mulesoft MCD L2, AWS (Data Engineer/Developer/DevOps Pro), Google Cloud (Associate/Architect/Security Engineer)
- Button: "Verificar Credenciais no Credly"

**E. Experiência Profissional**
- Vertical timeline OR expandable cards (accordion style)
- NO tables allowed

**F. Habilidades**
- Interactive tags or visual progress bars
- Skills cloud presentation

**G. Footer**
- Quote: "A melhor maneira de prever o futuro é inventá-lo." — Alan Kay
- Repeated social links
- Copyright information

### Interactions & Animations

- Smooth scroll behavior (scrollIntoView or CSS scroll-smooth)
- Fade-in entrance animations using Intersection Observer
- Standard transitions: transition-all duration-300 ease-in-out
- Glow effects on terracotta accent elements
- Accessibility: proper alt text, aria-labels, semantic HTML

### Technical Implementation

- Single HTML file
- Tailwind CSS via CDN
- FontAwesome icons via CDN
- Native JavaScript (organized at end of file)
- Clean, commented, semantic code structure
- Mobile-first responsive breakpoints

### Images

**Hero Section:** Professional headshot of Harris Alexandre or abstract technology/coding themed imagery with glassmorphism overlay effects

**Certification Badges:** Use actual badge graphics or icon representations for Mulesoft, AWS, Google Cloud certifications

**Background Elements:** Subtle geometric patterns or tech-inspired abstract shapes to enhance depth without overwhelming content