import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import logo from "@/assets/logo.png";
import heroAbout from "@/assets/hero-about.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Jméno je povinné" }).max(100, { message: "Jméno musí mít maximálně 100 znaků" }),
  email: z.string().trim().email({ message: "Neplatná emailová adresa" }).max(255, { message: "Email musí mít maximálně 255 znaků" }),
  message: z.string().trim().min(1, { message: "Zpráva je povinná" }).max(1000, { message: "Zpráva musí mít maximálně 1000 znaků" })
});

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAbout}
            alt="Happy young travelers at airport"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
              O nás
            </h1>
            <p className="text-xl text-white" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
              Pomáháme mladým lidem poznávat svět a získávat nezapomenutelné zkušenosti
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kdo jsme</h2>
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
              <p className="text-xl text-muted-foreground mb-6">
                Máte otázky? Rádi vám pomůžeme s čímkoli, co potřebujete vědět
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@letsgoabroad.cz" className="text-foreground hover:text-primary transition-colors">
                    info@letsgoabroad.cz
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+420777888999" className="text-foreground hover:text-primary transition-colors">
                    +420 777 888 999
                  </a>
                </div>
              </div>
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
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Let's Go Abroad. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
