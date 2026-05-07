import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Plane, Users, Heart, ArrowRight, Quote, Send, Calendar, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import logo from "@/assets/logo.png";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import { blogPosts } from "./Blog";
import heroImage from "@/assets/hero-travel.jpg";
import usaImage from "@/assets/usa.jpg";
import switzerlandImage from "@/assets/switzerland.jpg";
import germanyImage from "@/assets/germany.jpg";
import australiaImage from "@/assets/australia.jpg";
import estoniaImage from "@/assets/estonia.jpg";
import japanImage from "@/assets/japan.jpg";
import newZealandImage from "@/assets/new-zealand.jpg";
import argentinaImage from "@/assets/argentina.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Jméno je povinné" }).max(100, { message: "Jméno musí mít maximálně 100 znaků" }),
  email: z.string().trim().email({ message: "Neplatná emailová adresa" }).max(255, { message: "Email musí mít maximálně 255 znaků" }),
  message: z.string().trim().min(1, { message: "Zpráva je povinná" }).max(1000, { message: "Zpráva musí mít maximálně 1000 znaků" })
});

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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Zpráva odeslána",
        description: "Děkujeme za váš zájem. Brzy se vám ozveme.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Let's Go Abroad" className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-base">
            <ProgramsDropdown />
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
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Young travelers" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-40 relative">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
              Vaše dobrodružství
              <span className="block mt-2">
                začíná zde
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
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
                className="text-lg px-8 bg-white/90 backdrop-blur-sm hover:bg-white border-white text-foreground"
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
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Zeptejte se nás
              </h2>
              <p className="text-xl text-muted-foreground">
                Máte otázky? Rádi vám pomůžeme s čímkoli, co potřebujete vědět
              </p>
            </div>

            <Card className="border-primary/20 shadow-card">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Vaše jméno"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vas@email.cz"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Napište nám vaši zprávu..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Let's Go Abroad" className="h-20 w-auto" />
          </div>
          <p className="text-muted-foreground mb-6">
            Studuj v zahraničí. EduVentures, s.r.o. Bořivojova 17, 130 00 Praha 3
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
            © {new Date().getFullYear()} Studuj v zahraničí. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
