import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const consultants = [
  {
    name: "Martin Langpaul",
    role: "Zakladatel",
    description: "Více než 20 let zkušeností s prací a studiem v zahraničí",
    initials: "ML",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Aneta Juránková",
    role: "Konzultantka pro USA",
    description: "Práce v USA, J-1 programy",
    initials: "AJ",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "Ondřej Chmelíř",
    role: "Konzultant pro Oceánii",
    description: "Práce na Novém Zélandu a v Kanadě",
    initials: "OC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  }
];

const About = () => {
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
            <Button variant="ghost" onClick={() => navigate("/work")}>
              Práce v zahraničí
            </Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>
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

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zpět na hlavní stránku
        </Button>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">O nás</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Naše organizace vznikla roku 2025 a poskytuje poradenství a kompletní zajištění práce v zahraničí 
              a studium v zahraničí na střední škole. Jsme tu proto, abychom vám pomohli naplnit vaše sny 
              o poznávání světa a získání cenných zkušeností v zahraničí.
            </p>
          </div>

          {/* Consultants Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Naši konzultanti</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={consultant.image} alt={consultant.name} />
                        <AvatarFallback className="text-2xl">{consultant.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{consultant.name}</h3>
                        <p className="text-sm text-primary font-medium mb-3">{consultant.role}</p>
                        <p className="text-sm text-muted-foreground">{consultant.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Kontaktujte nás</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@letsgoabroad.cz" className="text-foreground hover:text-primary transition-colors">
                      info@letsgoabroad.cz
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+420777888999" className="text-foreground hover:text-primary transition-colors">
                      +420 777 888 999
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Let's Go Abroad" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Let's Go Abroad. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
