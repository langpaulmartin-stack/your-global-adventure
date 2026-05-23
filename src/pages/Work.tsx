import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Users, Briefcase, DollarSign, Flame } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import heroWork from "@/assets/hero-work.jpg";
import { Footer } from "@/components/Footer";

interface WorkProgram {
  id: string;
  country: string;
  type: string;
  duration: string;
  departure: string;
  price: string;
  age: string;
  description: string;
  features: string[];
}

const workPrograms: WorkProgram[] = [
  {
    id: "usa-work-travel",
    country: "USA",
    type: "Work and Travel",
    duration: "3-4 měsíce",
    departure: "Květen - Červen 2026",
    price: "45 000 Kč",
    age: "18-30 let",
    description: "Pracujte v USA během letních prázdnin a poznejte americkou kulturu",
    features: [
      "Práce v hotelech, restauracích nebo zábavních parcích",
      "J-1 vízum včetně zprostředkování",
      "Možnost cestovat po USA po skončení práce"
    ]
  },
  {
    id: "newzealand-work",
    country: "Nový Zéland",
    type: "Práce na Novém Zélandu",
    duration: "6-12 měsíců",
    departure: "Průběžně",
    price: "35 000 Kč",
    age: "18-30 let",
    description: "Získejte pracovní zkušenosti v jedné z nejkrásnějších zemí světa",
    features: [
      "Working Holiday vízum na 12 měsíců",
      "Práce v zemědělství, hotelnictví nebo gastro",
      "Možnost cestovat po celém Novém Zélandu"
    ]
  },
  {
    id: "canada-work",
    country: "Kanada",
    type: "Práce v Kanadě",
    duration: "6-12 měsíců",
    departure: "Průběžně",
    price: "38 000 Kč",
    age: "18-30 let",
    description: "Pracovní zkušenosti v Kanadě s možností zdokonalení angličtiny",
    features: [
      "Working Holiday vízum na 12 měsíců",
      "Práce ve městech nebo na horách (ski resorty)",
      "Zkušenosti s multikulturním prostředím"
    ]
  }
];

const Work = () => {
  const navigate = useNavigate();

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
            <Button variant="ghost" onClick={() => navigate("/work")} className="text-primary font-medium">
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
          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroWork} 
            alt="Work Abroad Programs" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Briefcase className="h-16 w-16 mx-auto text-white" style={{ filter: 'drop-shadow(0 2px 15px rgba(0,0,0,0.8))' }} />
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
              Práce v zahraničí
            </h1>
            <p className="text-xl text-white" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
              Získejte cenné pracovní zkušenosti a poznejte svět
            </p>
          </div>
        </div>
      </section>

      {/* Work Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workPrograms.map((program) => (
              <Card key={program.id} className={`hover:shadow-glow transition-shadow duration-300 flex flex-col ${program.country === "USA" ? "ring-2 ring-primary" : ""}`}>
                <CardHeader>
                  {program.country === "USA" && (
                    <div className="mb-2">
                      <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        <Flame className="h-3.5 w-3.5" />
                        <span>Poslední volná místa</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{program.country}</CardTitle>
                      <CardDescription className="text-lg font-medium">{program.type}</CardDescription>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {program.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground">{program.description}</p>
                  
                  <div className="space-y-3">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-primary">Cena zahrnuje:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Zprostředkování kontaktu s potenciálními zaměstnavateli</li>
                      <li>• Podklady pro vízum</li>
                      <li>• Konzultace před odjezdem</li>
                    </ul>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-destructive">Cena nezahrnuje:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Mezinárodní letenky</li>
                      <li>• Garanci pracovní smlouvy</li>
                      <li>• Víza na dlouhodobý pobyt</li>
                    </ul>
                  </div>

                  <div className="space-y-2 text-sm border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Délka: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>Odjezd: {program.departure}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Věk: {program.age}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() =>
                      navigate(
                        `/apply?country=${encodeURIComponent(program.country)}&title=${encodeURIComponent(program.type)}&price=${encodeURIComponent(program.price)}`
                      )
                    }
                    className="w-full mt-auto"
                  >
                    Přihlásit se
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Work Abroad */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Proč pracovat v zahraničí?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Pracovní zkušenosti</h3>
                <p className="text-muted-foreground">
                  Získejte cenné pracovní zkušenosti v mezinárodním prostředí, které ocení budoucí zaměstnavatelé.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Jazykové dovednosti</h3>
                <p className="text-muted-foreground">
                  Zdokonalte se v angličtině díky každodenní praxi v pracovním prostředí.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Finanční nezávislost</h3>
                <p className="text-muted-foreground">
                  Vydělejte si peníze během pobytu a financujte si cestování po cílové zemi.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Nové přátele</h3>
                <p className="text-muted-foreground">
                  Poznejte lidi z celého světa a vytvořte si celoživotní přátelství.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Work;
