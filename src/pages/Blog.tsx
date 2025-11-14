import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import logo from "@/assets/logo.png";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  perex: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "jak-se-pripravit-na-studium",
    title: "Jak se připravit na studium v zahraničí",
    date: "15. 1. 2025",
    author: "Martin Langpaul",
    perex: "Studium v zahraničí je jedinečná příležitost. Zjistěte, jak se na něj správně připravit a co vše budete potřebovat.",
    image: blog1
  },
  {
    id: "prace-v-usa-zkusenosti",
    title: "Práce v USA: Zkušenosti našich účastníků",
    date: "12. 1. 2025",
    author: "Aneta Juránková",
    perex: "Přečtěte si skutečné příběhy mladých lidí, kteří absolvovali pracovní program v USA a získali cenné zkušenosti.",
    image: blog2
  },
  {
    id: "priprava-na-odlet",
    title: "Příprava na odlet: Co si zabalit",
    date: "10. 1. 2025",
    author: "Ondřej Chmelíř",
    perex: "Balení na delší pobyt v zahraničí může být výzva. Podívejte se na náš seznam nezbytností, které by vám neměly chybět.",
    image: blog3
  },
  {
    id: "kulturni-rozdily",
    title: "Kulturní rozdíly a jak je zvládat",
    date: "8. 1. 2025",
    author: "Martin Langpaul",
    perex: "Setkání s jinou kulturou může být ohromující. Naučte se, jak se přizpůsobit a získat maximum ze své zahraniční zkušenosti.",
    image: blog1
  },
  {
    id: "hostitelske-rodiny",
    title: "Život s hostitelskou rodinou",
    date: "5. 1. 2025",
    author: "Aneta Juránková",
    perex: "Hostitelská rodina je klíčovou částí vaší zkušenosti. Zjistěte, jak budovat dobré vztahy a jak se vyhnout nedorozuměním.",
    image: blog2
  },
  {
    id: "jazykova-priprava",
    title: "Jazyková příprava před odjezdem",
    date: "3. 1. 2025",
    author: "Ondřej Chmelíř",
    perex: "Dobrá znalost jazyka je základem úspěšného pobytu. Objevte nejlepší způsoby, jak si jazyk vylepšit před odjezdem.",
    image: blog3
  },
  {
    id: "financni-planovani",
    title: "Finanční plánování pro studium v zahraničí",
    date: "1. 1. 2025",
    author: "Martin Langpaul",
    perex: "Studium v zahraničí vyžaduje dobré finanční plánování. Podívejte se na tipy, jak spravovat rozpočet a šetřit peníze.",
    image: blog1
  },
  {
    id: "viza-a-dokumenty",
    title: "Víza a dokumenty: Kompletní průvodce",
    date: "28. 12. 2024",
    author: "Aneta Juránková",
    perex: "Vyřizování víz může být složité. Připravili jsme pro vás krok za krokem návod, jak získat všechny potřebné dokumenty.",
    image: blog2
  },
  {
    id: "prvni-dny-v-cizi-zemi",
    title: "První dny v cizí zemi: Co očekávat",
    date: "25. 12. 2024",
    author: "Ondřej Chmelíř",
    perex: "První dny v zahraničí mohou být náročné. Připravte se na to, co vás čeká, a jak se rychle zabydlet na novém místě.",
    image: blog3
  },
  {
    id: "zdravotni-pojisteni",
    title: "Zdravotní pojištění pro pobyt v zahraničí",
    date: "22. 12. 2024",
    author: "Martin Langpaul",
    perex: "Zdravotní pojištění je nezbytné pro jakýkoliv pobyt v zahraničí. Zjistěte, jaké možnosti máte a co je nejlepší volba.",
    image: blog1
  },
  {
    id: "komunikace-s-rodinou",
    title: "Jak zůstat v kontaktu s rodinou",
    date: "20. 12. 2024",
    author: "Aneta Juránková",
    perex: "Udržování kontaktu s blízkými je důležité. Objevte nejlepší způsoby komunikace a jak zvládat stesk po domově.",
    image: blog2
  },
  {
    id: "prace-na-dovolene",
    title: "Práce a dovolená: Jak najít rovnováhu",
    date: "18. 12. 2024",
    author: "Ondřej Chmelíř",
    perex: "Práce v zahraničí neznamená, že nemůžete cestovat. Naučte se, jak skloubit pracovní povinnosti s poznáváním nových míst.",
    image: blog3
  },
  {
    id: "bezpecnost-v-zahranici",
    title: "Bezpečnost v zahraničí: Tipy a rady",
    date: "15. 12. 2024",
    author: "Martin Langpaul",
    perex: "Bezpečnost je priorita. Přečtěte si naše doporučení, jak zůstat v bezpečí během pobytu v cizí zemi.",
    image: blog1
  },
  {
    id: "prace-s-detmi",
    title: "Práce s dětmi: Au pair programy",
    date: "12. 12. 2024",
    author: "Aneta Juránková",
    perex: "Au pair program je skvělá příležitost pro mladé lidi. Zjistěte, co vás čeká a jak se na tuto zkušenost připravit.",
    image: blog2
  },
  {
    id: "navrat-domu",
    title: "Návrat domů po zahraniční zkušenosti",
    date: "10. 12. 2024",
    author: "Ondřej Chmelíř",
    perex: "Návrat domů může být překvapivě náročný. Přečtěte si, jak se znovu aklimatizovat a jak využít získané zkušenosti.",
    image: blog3
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;
  
  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Let's Go Abroad" className="h-24 w-auto" />
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

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Tipy, rady a zkušenosti ze světa studijních a pracovních pobytů v zahraničí
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
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
                <CardHeader>
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
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.perex}</p>
                  <Button variant="ghost" className="group-hover:text-primary transition-colors p-0">
                    Číst více
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
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

export default Blog;
