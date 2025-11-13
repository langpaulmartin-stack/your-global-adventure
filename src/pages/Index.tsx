import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Plane, Users, Heart, ArrowRight, Quote } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-travel.jpg";
import usaImage from "@/assets/usa.jpg";
import switzerlandImage from "@/assets/switzerland.jpg";
import germanyImage from "@/assets/germany.jpg";
import australiaImage from "@/assets/australia.jpg";
import estoniaImage from "@/assets/estonia.jpg";
import japanImage from "@/assets/japan.jpg";
import newZealandImage from "@/assets/new-zealand.jpg";
import argentinaImage from "@/assets/argentina.jpg";

const countries = [
  { 
    name: "USA", 
    description: "Zažijte americký sen", 
    image: usaImage,
    price: "150 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Švýcarsko", 
    description: "Objevte alpskou krásu", 
    image: switzerlandImage,
    price: "180 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Německo", 
    description: "Prozkoumejte bohatou historii a kulturu", 
    image: germanyImage,
    price: "145 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Austrálie", 
    description: "Dobrodružství na opačné straně světa", 
    image: australiaImage,
    price: "220 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Estonsko", 
    description: "Centrum digitálních inovací", 
    image: estoniaImage,
    price: "120 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Japonsko", 
    description: "Fascinující spojení tradice a modernosti", 
    image: japanImage,
    price: "195 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Nový Zéland", 
    description: "Dechberoucí příroda a dobrodružství", 
    image: newZealandImage,
    price: "210 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
  { 
    name: "Argentina", 
    description: "Vášeň, kultura a přírodní diverzita", 
    image: argentinaImage,
    price: "175 000 Kč",
    departure: "Srpen 2026",
    age: "15 let"
  },
];

const testimonials = [
  {
    name: "Petra Novotná",
    country: "USA",
    text: "Rok v USA byl nejlepší rok mého života! Získala jsem neuvěřitelné přátele, zlepšila jsem angličtinu a zažila jsem americkou kulturu na vlastní kůži.",
    image: "👩"
  },
  {
    name: "Jan Svoboda",
    country: "Japonsko",
    text: "Japonsko mě úplně pohltilo. Kombinace starobylých tradic a moderní technologie je fascinující. Doporučuji každému!",
    image: "👨"
  },
  {
    name: "Marie Dvořáková",
    country: "Austrálie",
    text: "Austrálie mi otevřela oči. Úžasní lidé, krásná příroda a nezapomenutelné zážitky. Nikdy nezapomenu na čas strávený v Sydney.",
    image: "👩"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Let's Go Abroad" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors font-medium">Nabídka programů</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">FAQ</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">O nás</a>
            <Button onClick={() => navigate("/apply")} size="sm" className="bg-primary hover:bg-primary/90">
              Přihlásit se
            </Button>
          </nav>
          <Button onClick={() => navigate("/apply")} size="sm" className="md:hidden bg-primary hover:bg-primary/90">
            Přihlásit se
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Young travelers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-40 relative">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Vaše dobrodružství
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
                začíná zde
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Připojte se k tisícům mladých objevitelů, kteří poznávají svět prostřednictvím programů kulturní výměny
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => navigate("/apply")} 
                size="lg" 
                className="text-lg px-8 shadow-glow hover:shadow-glow transition-all duration-300"
              >
                Přihlaste se dnes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                Zjistit více
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Kulturní ponor</h3>
                <p className="text-muted-foreground">
                  Žijte s hostitelskými rodinami a zažijte autentickou místní kulturu
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in [animation-delay:100ms] border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Globální síť</h3>
                <p className="text-muted-foreground">
                  Budujte přátelství a spojení, která vydrží celý život
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in [animation-delay:200ms] border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Osobní růst</h3>
                <p className="text-muted-foreground">
                  Rozvíjejte nezávislost, sebevědomí a nové perspektivy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vyberte si destinaci
            </h2>
            <p className="text-xl text-muted-foreground">
              Osm úžasných zemí na vás čeká
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card 
                key={country.name}
                className="border-2 hover:border-primary transition-all duration-300 cursor-pointer group overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                </div>
                <CardContent className="pt-4 space-y-3">
                  <h3 className="text-xl font-bold text-center">{country.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span className="text-muted-foreground">Cena od {country.price}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span className="text-muted-foreground">Termín odletu {country.departure}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span className="text-muted-foreground">Věk od {country.age} výše</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Co říkají naši studenti
            </h2>
            <p className="text-xl text-muted-foreground">
              Přečtěte si zkušenosti těch, kteří již zažili dobrodružství svého života
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="border-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary/40" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Jste připraveni začít svou cestu?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Nenechte si ujít tuto příležitost prozkoumat svět a vytvořit vzpomínky, které vydrží navždy
            </p>
            <Button 
              onClick={() => navigate("/apply")}
              size="lg"
              variant="secondary"
              className="text-lg px-8 mt-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Přihlaste se dnes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Let's Go Abroad. Propojujeme kultury, vytváříme budoucnost.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
