import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight, Calendar, Users, GraduationCap, Home, Sparkles, Clock, Check } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import { getCountryBySlug } from "@/data/countries";
import { programs } from "./Programs";
import NotFound from "./NotFound";
import martinLangpaul from "@/assets/martin-langpaul.jpg";
import kamilaSaadatian from "@/assets/kamila-saadatian.jpg";
import katerinaCasco from "@/assets/katerina-casco.jpg";
import { Footer } from "@/components/Footer";

const consultantBySlug: Record<string, { name: string; role: string; image: string }> = {
  usa: { name: "Martin Langpaul", role: "Zakladatel a konzultant", image: martinLangpaul },
  svycarsko: { name: "Martin Langpaul", role: "Zakladatel a konzultant", image: martinLangpaul },
  nemecko: { name: "Martin Langpaul", role: "Zakladatel a konzultant", image: martinLangpaul },
  "novy-zeland": {
    name: "Ondřej Chmelíř",
    role: "Konzultant pro Oceánii",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  argentina: { name: "Kamila Saadatian", role: "Konzultantka", image: kamilaSaadatian },
  "velka-britanie": { name: "Kateřina Casco", role: "Konzultantka pro Velkou Británii a Irsko", image: katerinaCasco },
  irsko: { name: "Kateřina Casco", role: "Konzultantka pro Velkou Británii a Irsko", image: katerinaCasco },
};

const CountryDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const country = slug ? getCountryBySlug(slug) : undefined;

  if (!country) return <NotFound />;

  const consultant = slug ? consultantBySlug[slug] : undefined;

  const countryPrograms = programs.filter((p) => p.country === country.name);
  const typeOrder = ["Školní rok", "Semestr", "Short term"];
  const offered = Array.from(new Set(countryPrograms.map((p) => p.type))).sort(
    (a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b)
  );

  const typeMeta: Record<string, { label: string; duration: string }> = {
    "Školní rok": { label: "Roční program", duration: "10 měsíců" },
    Semestr: { label: "Semestrální program", duration: "5 měsíců" },
    "Short term": { label: "Krátký program", duration: "Od 3 měsíců" },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <SiteLogo className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-base">
            <ProgramsDropdown />
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
          <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)" }}>
              {country.name}
            </h1>
            <p className="text-xl text-white" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)" }}>
              {country.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Available program lengths */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-6">
              Nabízené délky pobytu
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {offered.map((type) => {
                const meta = typeMeta[type];
                return (
                  <Card key={type} className="border-primary/20">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-3">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary font-medium">{meta?.duration}</p>
                        <p className="font-semibold">{meta?.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-primary/20">
              <CardContent className="p-8 md:p-10 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
                    Co je v ceně
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold">Cena programu zahrnuje</h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {slug === "usa"
                    ? [
                        "Umístění do hostitelské rodiny",
                        "Podporu partnerské organizace v průběhu pobytu",
                        "Pojištění",
                        "Možnost zapojit se do alumni klubu po návratu",
                        "Podklady pro získání víza typu J-1",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="flex-shrink-0 mt-0.5 bg-primary/10 text-primary rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))
                    : [
                        "Letenky do destinace a zpět",
                        "Umístění do hostitelské rodiny",
                        "Podporu partnerské organizace v průběhu pobytu",
                        "Pojištění",
                        "Možnost zapojit se do alumni klubu po návratu",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="flex-shrink-0 mt-0.5 bg-primary/10 text-primary rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                </ul>
                {slug === "usa" && (
                  <>
                    <div className="border-t border-border pt-6">
                      <h3 className="text-xl font-bold mb-4">Cena programu nezahrnuje</h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {[
                          "Mezinárodní letenka do destinace a zpět",
                          "Poplatky za vízum",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="flex-shrink-0 mt-0.5 bg-destructive/10 text-destructive rounded-full p-1">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => navigate(`/apply?country=${encodeURIComponent(country.name)}`)} size="lg" className="bg-primary hover:bg-primary/90">
                    Přihlásit se na program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button onClick={() => navigate(`/kontakt?country=${encodeURIComponent(country.name)}`)} size="lg" variant="outline">
                    Mám otázku
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the country */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">O zemi</h2>
            {country.intro.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Info sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { icon: GraduationCap, title: "Školní systém", text: country.schoolSystem },
              { icon: Home, title: "Hostitelská rodina", text: country.hostFamily },
              { icon: Sparkles, title: "Doprovodné aktivity", text: country.activities },
            ].map((block) => {
              const Icon = block.icon;
              return (
                <Card key={block.title} className="overflow-hidden">
                  <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{block.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{block.text}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultant */}
      {consultant && (
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-6">
                Tvůj konzultant pro {country.name}
              </p>
              <Card className="overflow-hidden">
                <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
                  />
                  <div className="text-center sm:text-left space-y-2">
                    <h3 className="text-2xl font-bold">{consultant.name}</h3>
                    <p className="text-primary font-medium">{consultant.role}</p>
                    <p className="text-muted-foreground">
                      Ráda/rád ti zodpoví všechny otázky o programu v zemi {country.name}.
                    </p>
                    <Button onClick={() => navigate("/about")} variant="outline" size="sm" className="mt-2">
                      Zobrazit profil
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Programs in this country */}
      {countryPrograms.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Programy v zemi {country.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countryPrograms.map((program) => (
                  <Card key={program.id} className="hover:shadow-glow transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-44 overflow-hidden">
                      <img src={program.image} alt={`${country.name} - ${program.type}`} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold">{program.type}</h3>
                          <p className="text-sm text-muted-foreground">{program.duration}</p>
                        </div>
                        <div className="text-lg font-bold text-primary whitespace-nowrap">{program.price}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                      <div className="space-y-1.5 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>Termín odletu: {program.departure}</span>
                        </div>
                        {program.return && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Návrat: {program.return}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Věk: {program.age}</span>
                        </div>
                      </div>
                      <Button onClick={() => navigate(`/apply?program=${program.id}`)} className="w-full">
                        Přihlásit se
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Zaujala tě země {country.name}?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Ozvi se nám a společně najdeme program, který ti sedne nejlépe.
          </p>
          <Button onClick={() => navigate(`/apply?country=${encodeURIComponent(country.name)}`)} size="lg" variant="secondary">
            Přihlásit se
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CountryDetail;