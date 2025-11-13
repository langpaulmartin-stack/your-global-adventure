import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Globe2, Plane, Users, Heart, ArrowRight } from "lucide-react";

const countries = [
  { name: "USA", flag: "🇺🇸", description: "Experience the American dream" },
  { name: "Switzerland", flag: "🇨🇭", description: "Discover Alpine beauty" },
  { name: "Germany", flag: "🇩🇪", description: "Explore rich history & culture" },
  { name: "Australia", flag: "🇦🇺", description: "Adventure down under" },
  { name: "Estonia", flag: "🇪🇪", description: "Digital innovation hub" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Youth Exchange</span>
          </div>
          <Button onClick={() => navigate("/apply")} size="sm">
            Apply Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Adventure
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
                Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of young explorers discovering the world through cultural exchange programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={() => navigate("/apply")} 
                size="lg" 
                className="text-lg px-8 shadow-glow hover:shadow-glow transition-all duration-300"
              >
                Apply Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Cultural Immersion</h3>
                <p className="text-muted-foreground">
                  Live with host families and experience authentic local culture
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in [animation-delay:100ms]">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto flex items-center justify-center">
                  <Plane className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Global Network</h3>
                <p className="text-muted-foreground">
                  Build friendships and connections that last a lifetime
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in [animation-delay:200ms]">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Personal Growth</h3>
                <p className="text-muted-foreground">
                  Develop independence, confidence, and new perspectives
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
              Choose Your Destination
            </h2>
            <p className="text-xl text-muted-foreground">
              Five amazing countries waiting for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <Card 
                key={country.name}
                className="border-2 hover:border-primary transition-all duration-300 cursor-pointer group overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 text-center space-y-3">
                  <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <h3 className="text-xl font-bold">{country.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {country.description}
                  </p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Don't miss this opportunity to explore the world and create memories that last forever
            </p>
            <Button 
              onClick={() => navigate("/apply")}
              size="lg"
              variant="secondary"
              className="text-lg px-8 mt-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Youth Exchange. Connecting cultures, creating futures.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
