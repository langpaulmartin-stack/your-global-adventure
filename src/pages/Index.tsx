import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { countrySlugByName } from "@/data/countries";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Plane, Users, Heart, ArrowRight, Quote, Send, Calendar, User, Flame, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { z } from "zod";

import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import { blogPosts } from "./Blog";
import usaImage from "@/assets/usa.jpg";
import switzerlandImage from "@/assets/switzerland.jpg";
import germanyImage from "@/assets/germany.jpg";
import australiaImage from "@/assets/australia.jpg";
import estoniaImage from "@/assets/estonia.jpg";
import japanImage from "@/assets/japan.jpg";
import newZealandImage from "@/assets/new-zealand.jpg";
import argentinaImage from "@/assets/argentina.jpg";
import heroImage from "@/assets/hero-traveler.jpg";
import heroFriends from "@/assets/hero-friends.jpg";
import heroStudentsCampus from "@/assets/hero-students-campus.jpg";
import heroUsaHighschool from "@/assets/hero-usa-highschool.jpg";
import { Footer } from "@/components/Footer";
import { events, tagColors } from "@/data/events";

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
    price: "11 800 USD",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Švýcarsko", 
    description: "Objevte alpskou krásu", 
    image: switzerlandImage,
    price: "180 000 Kč",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Německo", 
    description: "Prozkoumejte bohatou historii a kulturu", 
    image: germanyImage,
    price: "145 000 Kč",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Austrálie", 
    description: "Dobrodružství na opačné straně světa", 
    image: australiaImage,
    price: "na vyžádání",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Estonsko", 
    description: "Centrum digitálních inovací", 
    image: estoniaImage,
    price: "na vyžádání",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Japonsko", 
    description: "Fascinující spojení tradice a modernosti", 
    image: japanImage,
    price: "na vyžádání",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Nový Zéland", 
    description: "Dechberoucí příroda a dobrodružství", 
    image: newZealandImage,
    price: "na vyžádání",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
  },
  { 
    name: "Argentina", 
    description: "Vášeň, kultura a přírodní diverzita", 
    image: argentinaImage,
    price: "na vyžádání",
    departure: "srpen/září 2026",
    return: "červen 2027",
    age: "15-18 let"
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

  const heroSlides = [
    {
      image: heroImage,
      title: "Tvoje dobrodružství",
      titleLine2: "začíná zde",
      subtitle: "Přidej se k tisícům mladých objevitelů, kteří poznávají svět prostřednictvím programů kulturní výměny",
    },
    {
      image: heroFriends,
      title: "Studium v zahraničí",
      titleLine2: "ti otevře nové možnosti",
      subtitle: "Získej zkušenosti, které ti nikdo nevezme — a kamarády po celém světě",
    },
    {
      image: heroUsaHighschool,
      title: "Studuj na střední",
      titleLine2: "škole v USA",
      subtitle: "Přijímáme přihlášky ke studijnímu pobytu v USA ve školním roce 2026/27",
    },
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, [heroSlides.length]);

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
            <SiteLogo className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-base">
            <ProgramsDropdown />
            <Button variant="ghost" onClick={() => navigate("/work")}>
              Práce v zahraničí
            </Button>
            <Button variant="ghost" onClick={() => navigate("/kalendar")}>Kalendář</Button>
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
        {heroSlides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === slide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="container mx-auto px-4 py-24 md:py-40 relative">
          <div className="grid">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              style={{ gridArea: "1 / 1" }}
              className={`max-w-3xl space-y-8 transition-opacity duration-1000 ease-in-out ${i === slide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
                {s.title}
                <span className="block mt-2">{s.titleLine2}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-2xl" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
                {s.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => navigate("/apply")}
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-glow transition-all duration-300"
                >
                  ​Online přihláška
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate(i === 2 ? "/zeme/usa" : "/programs")}
                  className="text-lg px-8 bg-white/90 backdrop-blur-sm hover:bg-white border-white !text-slate-900 dark:!text-slate-900"
                >
                  Zjisti více
                </Button>
              </div>
            </div>
          ))}
          </div>
          <div className="relative z-10 flex gap-2 mt-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
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
              Vybíráme pro tebe ty nejlepší destinace po celém světě. 
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card 
                key={country.name}
                onClick={() => {
                  const s = countrySlugByName[country.name];
                  if (s) navigate(`/zeme/${s}`);
                }}
                className="border-2 hover:border-primary transition-all duration-300 cursor-pointer group overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  {country.name === "USA" && (
                    <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <Flame className="h-3.5 w-3.5" />
                      <span>Poslední volná místa</span>
                    </div>
                  )}
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
                        <span className="text-muted-foreground">Návrat: {country.return}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="text-muted-foreground">Věk: {country.age}</span>
                      </div>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kalendář akcí</h2>
            <p className="text-xl text-muted-foreground">
              Připravované infoschůzky a prezentace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {events.slice(0, 3).map((event) => (
              <Card
                key={event.id}
                onClick={() => navigate("/kalendar")}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg ${tagColors[event.tag]}`}
                  >
                    {event.tag}
                  </span>
                </div>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => navigate("/kalendar")} size="lg" variant="outline">
              Zobrazit všechny akce
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nejnovější zprávy</h2>
            <p className="text-xl text-muted-foreground">
              Aktuality a tipy z našeho blogu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.perex}</p>
                  <Button variant="ghost" className="group-hover:text-primary transition-colors p-0">
                    Číst více
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => navigate("/blog")} size="lg" variant="outline">
              Zobrazit všechny články
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Poznej skutečný život</h3>
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
                <h3 className="text-2xl font-bold text-primary">Prověření partneři</h3>
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
                <h3 className="text-2xl font-bold text-primary">Životní zkušenost</h3>
                <p className="text-muted-foreground">
                  Rozvíjejte nezávislost, sebevědomí a nové perspektivy
                </p>
              </CardContent>
            </Card>
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
      <Footer />
    </div>
  );
};

export default Index;
