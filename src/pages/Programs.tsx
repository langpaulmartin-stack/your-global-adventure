import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import heroPrograms from "@/assets/hero-programs.jpg";
import usaImage from "@/assets/usa.jpg";
import switzerlandImage from "@/assets/switzerland.jpg";
import germanyImage from "@/assets/germany.jpg";
import australiaImage from "@/assets/australia.jpg";
import estoniaImage from "@/assets/estonia.jpg";
import japanImage from "@/assets/japan.jpg";
import newZealandImage from "@/assets/new-zealand.jpg";
import argentinaImage from "@/assets/argentina.jpg";

interface Program {
  id: string;
  country: string;
  type: string;
  duration: string;
  departure: string;
  price: string;
  age: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  { id: "usa-semester", country: "USA", type: "Semestr", duration: "5 měsíců", departure: "Srpen 2026", price: "150 000 Kč", age: "15 let", description: "Prožijte nezapomenutelný semestr na americké škole", image: usaImage },
  { id: "usa-year", country: "USA", type: "Školní rok", duration: "10 měsíců", departure: "Srpen 2026", price: "280 000 Kč", age: "15 let", description: "Celý školní rok v USA s plnou integrací do místní kultury", image: usaImage },
  { id: "usa-semester-jan", country: "USA", type: "Semestr", duration: "5 měsíců", departure: "Leden 2027", price: "150 000 Kč", age: "15 let", description: "Jarní semestr na americké střední škole", image: usaImage },
  { id: "switzerland-semester", country: "Švýcarsko", type: "Semestr", duration: "5 měsíců", departure: "Srpen 2026", price: "180 000 Kč", age: "15 let", description: "Studium v srdci Evropy s výukou v němčině nebo francouzštině", image: switzerlandImage },
  { id: "switzerland-year", country: "Švýcarsko", type: "Školní rok", duration: "10 měsíců", departure: "Srpen 2026", price: "320 000 Kč", age: "15 let", description: "Kompletní rok na švýcarské škole s alpským životním stylem", image: switzerlandImage },
  { id: "germany-semester", country: "Německo", type: "Semestr", duration: "5 měsíců", departure: "Srpen 2026", price: "145 000 Kč", age: "15 let", description: "Zlepšete němčinu a poznejte německou kulturu", image: germanyImage },
  { id: "germany-year", country: "Německo", type: "Školní rok", duration: "10 měsíců", departure: "Srpen 2026", price: "270 000 Kč", age: "15 let", description: "Celý rok v německé rodině s pravidelnou školní docházkou", image: germanyImage },
  { id: "germany-semester-jan", country: "Německo", type: "Semestr", duration: "5 měsíců", departure: "Leden 2027", price: "145 000 Kč", age: "15 let", description: "Jarní semestr v Německu", image: germanyImage },
  { id: "australia-semester", country: "Austrálie", type: "Semestr", duration: "5 měsíců", departure: "Leden 2027", price: "220 000 Kč", age: "15 let", description: "Australský semestr plný dobrodružství a nových přátel", image: australiaImage },
  { id: "australia-year", country: "Austrálie", type: "Školní rok", duration: "10 měsíců", departure: "Leden 2027", price: "400 000 Kč", age: "15 let", description: "Rok na australské škole s unikátní kulturní zkušeností", image: australiaImage },
  { id: "estonia-semester", country: "Estonsko", type: "Semestr", duration: "5 měsíců", departure: "Srpen 2026", price: "120 000 Kč", age: "15 let", description: "Poznejte digitální velmoc severní Evropy", image: estoniaImage },
  { id: "estonia-year", country: "Estonsko", type: "Školní rok", duration: "10 měsíců", departure: "Srpen 2026", price: "220 000 Kč", age: "15 let", description: "Rok v nejdigitálnější zemi Evropy", image: estoniaImage },
  { id: "japan-short", country: "Japonsko", type: "Short term", duration: "3 měsíce", departure: "Srpen 2026", price: "195 000 Kč", age: "15 let", description: "Krátký, ale intenzivní program v Japonsku", image: japanImage },
  { id: "japan-semester", country: "Japonsko", type: "Semestr", duration: "5 měsíců", departure: "Srpen 2026", price: "265 000 Kč", age: "15 let", description: "Semestr plný japonské kultury a tradic", image: japanImage },
  { id: "japan-year", country: "Japonsko", type: "Školní rok", duration: "10 měsíců", departure: "Srpen 2026", price: "480 000 Kč", age: "15 let", description: "Kompletní rok v zemi vycházejícího slunce", image: japanImage },
  { id: "newzealand-semester", country: "Nový Zéland", type: "Semestr", duration: "5 měsíců", departure: "Leden 2027", price: "210 000 Kč", age: "15 let", description: "Semestr v zemi plné přírodních krás", image: newZealandImage },
  { id: "newzealand-year", country: "Nový Zéland", type: "Školní rok", duration: "10 měsíců", departure: "Leden 2027", price: "380 000 Kč", age: "15 let", description: "Rok na Novém Zélandu s aktivním životním stylem", image: newZealandImage },
  { id: "argentina-semester", country: "Argentina", type: "Semestr", duration: "5 měsíců", departure: "Srpen 2026", price: "175 000 Kč", age: "15 let", description: "Objevte latinskou Ameriku a naučte se španělsky", image: argentinaImage },
  { id: "argentina-year", country: "Argentina", type: "Školní rok", duration: "10 měsíců", departure: "Srpen 2026", price: "320 000 Kč", age: "15 let", description: "Kompletní rok v Buenos Aires nebo venkovské Argentině", image: argentinaImage },
  { id: "argentina-semester-jan", country: "Argentina", type: "Semestr", duration: "5 měsíců", departure: "Leden 2027", price: "175 000 Kč", age: "15 let", description: "Argentinský semestr s tango a gauchem", image: argentinaImage },
];

const Programs = () => {
  const navigate = useNavigate();
  
  const groupedPrograms = programs.reduce((acc, program) => {
    if (!acc[program.country]) {
      acc[program.country] = [];
    }
    acc[program.country].push(program);
    return acc;
  }, {} as Record<string, Program[]>);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Let's Go Abroad" className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => navigate("/programs")} className="text-primary font-medium">
              Nabídka programů
            </Button>
            <Button variant="ghost" onClick={() => navigate("/work")}>
              Práce v zahraničí
            </Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>
              O nás
            </Button>
            <Button variant="ghost" onClick={() => navigate("/blog")}>
              Blog
            </Button>
            <Button onClick={() => navigate("/apply")} size="sm" className="bg-primary hover:bg-primary/90">
              Přihlásit se
            </Button>
          </nav>
          <Button onClick={() => navigate("/apply")} size="sm" className="md:hidden bg-primary hover:bg-primary/90">
            Přihlásit se
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPrograms} 
            alt="Study Abroad Programs" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
              Naše nabídka programů
            </h1>
            <p className="text-xl text-white" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
              Vyberte si destinaci a délku pobytu podle vašich představ
            </p>
          </div>
        </div>
      </section>

      {/* Programs by Country */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {Object.entries(groupedPrograms).map(([country, countryPrograms]) => (
              <div key={country} className="space-y-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h2 className="text-4xl font-bold">{country}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countryPrograms.map((program) => (
                    <Card key={program.id} className="hover:shadow-glow transition-shadow duration-300 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={program.image} 
                          alt={`${program.country} - ${program.type}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{program.type}</CardTitle>
                            <CardDescription className="text-base">{program.duration}</CardDescription>
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {program.price}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{program.description}</p>
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
                          onClick={() => navigate("/apply")} 
                          className="w-full mt-4"
                        >
                          Přihlásit se
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Let's Go Abroad" className="h-20 w-auto" />
          </div>
          <p className="text-muted-foreground mb-6">
            Propojujeme kultury, tvoříme budoucnost.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Button variant="ghost" onClick={() => navigate("/programs")}>
              Nabídka programů
            </Button>
            <Button variant="ghost" onClick={() => navigate("/work")}>
              Práce v zahraničí
            </Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>
              O nás
            </Button>
            <Button variant="ghost" onClick={() => navigate("/blog")}>
              Blog
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Let's Go Abroad. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Programs;
