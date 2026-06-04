import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import { getConsultantBySlug } from "@/data/consultants";
import NotFound from "./NotFound";
import { Footer } from "@/components/Footer";

const ConsultantDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const consultant = slug ? getConsultantBySlug(slug) : undefined;

  if (!consultant) return <NotFound />;

  const sections = [
    { title: "O mně", text: consultant.about },
    { title: "Moje zahraniční zkušenosti", text: consultant.experience },
    { title: "Proč to dělám?", text: consultant.motivation },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <SiteLogo className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-base">
            <ProgramsDropdown />
            <Button variant="ghost" onClick={() => navigate("/work")}>Práce v zahraničí</Button>
            <Button variant="ghost" onClick={() => navigate("/kalendar")}>Kalendář</Button>
            <Button variant="ghost" onClick={() => navigate("/about")} className="text-primary font-medium">O nás</Button>
            <Button variant="ghost" onClick={() => navigate("/blog")}>Blog</Button>
            <Button onClick={() => navigate("/apply")} size="sm" className="bg-primary hover:bg-primary/90">Přihlásit se</Button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" onClick={() => navigate("/about")} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na O nás
            </Button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <Avatar className="h-40 w-40 flex-shrink-0">
                <AvatarImage src={consultant.image} alt={consultant.name} className="object-cover" />
                <AvatarFallback className="text-3xl">{consultant.initials}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{consultant.name}</h1>
                <p className="text-lg text-primary font-medium">{consultant.role}</p>
              </div>
            </div>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title} className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Button onClick={() => navigate(`/kontakt?consultant=${encodeURIComponent(consultant.name)}`)} size="lg" className="bg-primary hover:bg-primary/90">
                Napsat {consultant.name.split(" ")[0]}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => navigate("/programs")} size="lg" variant="outline">
                Prohlédnout programy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultantDetail;