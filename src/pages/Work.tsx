import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Users, Briefcase, DollarSign } from "lucide-react";
import logo from "@/assets/logo.png";
import heroWork from "@/assets/hero-work.jpg";

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
    age: "18 let",
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
    age: "18 let",
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
    age: "18 let",
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
            <img src={logo} alt="Let's Go Abroad" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => navigate("/programs")}>
              Nabídka programů
            </Button>
            <Button variant="ghost" onClick={() => navigate("/work")} className="text-primary font-medium">
              Práce v zahraničí
            </Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")}>
              O nás
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
            src={heroWork} 
            alt="Work Abroad Programs" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-background/60 backdrop-blur-sm p-8 rounded-2xl">
            <Briefcase className="h-16 w-16 mx-auto text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Práce v zahraničí
            </h1>
            <p className="text-xl text-white/90">
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
              <Card key={program.id} className="hover:shadow-glow transition-shadow duration-300 flex flex-col">
                <CardHeader>
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
                      <span>Věk od {program.age} výše</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => navigate("/apply")} 
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
            <Button variant="ghost" onClick={() => navigate("/")}>
              O nás
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

export default Work;
