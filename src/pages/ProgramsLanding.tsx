import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, CalendarDays, GraduationCap, MapPin, Calendar, Users, Flame } from "lucide-react";
import { Card as ProgramCard, CardContent as ProgramCardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { programs } from "./Programs";
import { countrySlugByName } from "@/data/countries";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import heroPrograms from "@/assets/hero-programs-menu.jpg";
import japanImage from "@/assets/japan.jpg";
import switzerlandImage from "@/assets/switzerland.jpg";
import usaImage from "@/assets/usa.jpg";

const categories = [
  {
    title: "Krátké programy",
    description: "Krátkodobé studijní pobyty pro rychlou ochutnávku života v zahraničí.",
    duration: "Od 3 měsíců",
    icon: Clock,
    image: japanImage,
    path: "/kratke-programy",
  },
  {
    title: "Semestrální programy",
    description: "Prožij celý semestr na zahraniční střední škole a zlepši se v jazyce.",
    duration: "5 měsíců",
    icon: CalendarDays,
    image: switzerlandImage,
    path: "/semestralni-programy",
  },
  {
    title: "Roční programy",
    description: "Kompletní školní rok v zahraničí s plnou integrací do místní kultury.",
    duration: "10 měsíců",
    icon: GraduationCap,
    image: usaImage,
    path: "/rocni-programy",
  },
];

const ProgramsLanding = () => {
  const navigate = useNavigate();

  const sections = [
    { title: "Roční programy", type: "Školní rok" },
    { title: "Semestrální programy", type: "Semestr" },
    { title: "Krátké programy", type: "Short term" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Let's Go Abroad" className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-base">
            <ProgramsDropdown isActive />
            <Button variant="ghost" onClick={() => navigate("/work")}>Práce v zahraničí</Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>FAQ</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>O nás</Button>
            <Button variant="ghost" onClick={() => navigate("/blog")}>Blog</Button>
            <Button onClick={() => navigate("/apply")} size="sm" className="bg-primary hover:bg-primary/90">
              Přihlásit se
            </Button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPrograms} alt="Nabídka programů" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
              Nabídka programů
            </h1>
            <p className="text-xl text-white" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
              Vyber si vysněnou zemi a délku pobytu, která ti nejvíc vyhovuje
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card
                  key={cat.path}
                  onClick={() => navigate(cat.path)}
                  className="overflow-hidden cursor-pointer hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">{cat.duration}</p>
                      <h3 className="text-2xl font-bold">{cat.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{cat.description}</p>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                      Zobrazit programy
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4 py-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="h-px w-24 bg-border" />
          <div className="w-3 h-3 rounded-full bg-primary" />
          <div className="h-px w-24 bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </div>
      </div>

      {/* All programs by category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {sections.map((section) => {
              const items = programs.filter((p) => p.type === section.type);
              if (items.length === 0) return null;
              return (
                <div key={section.type} className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((program) => (
                      <ProgramCard
                        key={program.id}
                        onClick={() => {
                          const s = countrySlugByName[program.country];
                          if (s) navigate(`/zeme/${s}`);
                        }}
                        className={`hover:shadow-glow transition-shadow duration-300 overflow-hidden relative cursor-pointer ${program.country === "USA" ? "ring-2 ring-primary" : ""}`}
                      >
                        {program.country === "USA" && (
                          <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                            <Flame className="h-3.5 w-3.5" />
                            <span>Poslední volná místa</span>
                          </div>
                        )}
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={program.image}
                            alt={`${program.country} - ${program.type}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{program.country}</span>
                              </div>
                              <CardTitle className="text-xl mb-1">{program.type}</CardTitle>
                              <CardDescription>{program.duration}</CardDescription>
                            </div>
                            <div className="text-xl font-bold text-primary whitespace-nowrap">
                              {program.price}
                            </div>
                          </div>
                        </CardHeader>
                        <ProgramCardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{program.description}</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>Termín odletu: {program.departure}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span>Věk od {program.age} výše</span>
                            </div>
                          </div>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/apply");
                            }}
                            className="w-full mt-2"
                          >
                            Přihlásit se
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </ProgramCardContent>
                      </ProgramCard>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoWhite} alt="Let's Go Abroad" className="h-56 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <p className="italic text-primary-foreground/90 mb-6">Vydej se neprošlapanou cestou...</p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => navigate("/programs")}>Nabídka programů</Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => navigate("/work")}>Práce v zahraničí</Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => navigate("/faq")}>FAQ</Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => navigate("/about")}>O nás</Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => navigate("/blog")}>Blog</Button>
          </div>
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Studuj v zahraničí. EduVentures, s.r.o. Bořivojova 17, 130 00 Praha 3. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProgramsLanding;