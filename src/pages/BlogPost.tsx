import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
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
  }
];

const blogPostsData: Record<string, any> = {
  "jak-se-pripravit-na-studium": {
    title: "Jak se připravit na studium v zahraničí",
    date: "15. 1. 2025",
    author: "Martin Langpaul",
    image: blog1,
    content: `
      <p>Studium v zahraničí je příležitost, která může změnit váš život. Příprava na tento krok je však klíčová pro to, abyste ze zkušenosti získali maximum a vyhnuli se zbytečnému stresu.</p>
      
      <h2>1. Jazyková příprava</h2>
      <p>Jedním z nejdůležitějších aspektů přípravy je zlepšení jazykových dovedností. I když si myslíte, že váš jazyk je dostatečný, neškodí si jej před odjezdem zdokonalit. Zaměřte se zejména na:</p>
      <ul>
        <li>Konverzaci v běžných situacích</li>
        <li>Akademickou slovní zásobu</li>
        <li>Porozumění různým akcentům</li>
      </ul>

      <h2>2. Financní plánování</h2>
      <p>Studium v zahraničí může být nákladné. Vypracujte si realistický rozpočet, který zahrnuje:</p>
      <ul>
        <li>Školné a poplatky</li>
        <li>Ubytování</li>
        <li>Stravování</li>
        <li>Cestovní výdaje</li>
        <li>Pojištění</li>
        <li>Volnočasové aktivity</li>
      </ul>

      <h2>3. Dokumentace</h2>
      <p>Ujistěte se, že máte všechny potřebné dokumenty v pořádku, včetně:</p>
      <ul>
        <li>Platný pas</li>
        <li>Vízum (pokud je potřeba)</li>
        <li>Přijímací dokumenty ze školy</li>
        <li>Zdravotní pojištění</li>
        <li>Lékařské záznamy a očkování</li>
      </ul>

      <h2>4. Mentální příprava</h2>
      <p>Kulturní šok je reálný jev. Připravte se na to, že první týdny mohou být náročné. Je normální pociťovat stesk po domově a nejistotu. Klíčem je být na to připraven a vědět, že tyto pocity časem odezní.</p>

      <h2>Závěr</h2>
      <p>Dobré plánování je polovinou úspěchu. Čím lépe se na studium v zahraničí připravíte, tím více si ho užijete a tím více z něj získáte. Neváhejte nás kontaktovat, pokud potřebujete poradit s jakýmkoli aspektem vaší přípravy.</p>
    `
  },
  "prace-v-usa-zkusenosti": {
    title: "Práce v USA: Zkušenosti našich účastníků",
    date: "12. 1. 2025",
    author: "Aneta Juránková",
    image: blog2,
    content: `
      <p>Práce v USA prostřednictvím programu Work and Travel nebo J-1 je zkušenost, která formuje mladé lidi a otevírá jim nové horizonty. V tomto článku si přečtete skutečné příběhy účastníků našich programů.</p>
      
      <h2>Jana - Práce v národním parku</h2>
      <p>"Strávila jsem léto v Yellowstone National Park a bylo to neuvěřitelné! Pracovala jsem v hotelu, ale v volném čase jsem mohla poznávat úchvatnou přírodu. Získala jsem nejen pracovní zkušenosti, ale také kamarády z celého světa."</p>

      <h2>Tomáš - Zkušenosti z letoviska</h2>
      <p>"Moje práce na pobřeží ve státě Oregon byla náročná, ale neskutečně obohacující. Zlepšil jsem angličtinu, naučil se pracovat v týmu a poznal americkou kulturu zevnitř. Nejvíc si cením přátelství, která jsem tam navázal."</p>

      <h2>Klíčové poznatky</h2>
      <p>Z rozhovorů s našimi účastníky vyplývá několik důležitých bodů:</p>
      <ul>
        <li>Flexibilita je klíčová - práce může být jiná, než očekáváte</li>
        <li>Otevřenost novým lidem a zkušenostem je nezbytná</li>
        <li>Finanční plánování pomůže užít si program naplno</li>
        <li>Každá zkušenost, i ta náročná, vás posune dopředu</li>
      </ul>

      <h2>Tipy od účastníků</h2>
      <p>Co by doporučili budoucím účastníkům?</p>
      <ul>
        <li>Naučte se základy angličtiny ještě doma</li>
        <li>Buďte připraveni na těžkou práci, ale i skvělou zábavu</li>
        <li>Využijte každou příležitost k cestování</li>
        <li>Nezavírejte se do české komunity</li>
        <li>Dokumentujte své zážitky - budete na ně rádi vzpomínat</li>
      </ul>

      <h2>Závěr</h2>
      <p>Práce v USA není jen o vydělávání peněz. Je to životní zkušenost, která vám pomůže růst, poznávat nové kultury a budovat si mezinárodní síť kontaktů. Pokud přemýšlíte o účasti v programu, neváhejte nás kontaktovat!</p>
    `
  },
  "priprava-na-odlet": {
    title: "Příprava na odlet: Co si zabalit",
    date: "10. 1. 2025",
    author: "Ondřej Chmelíř",
    image: blog3,
    content: `
      <p>Balení na delší pobyt v zahraničí je umění. Chcete si vzít vše potřebné, ale zároveň nechcete být přetíženi zavazadly. V tomto článku vám poradíme, jak se připravit na odlet.</p>
      
      <h2>Základní strategie balení</h2>
      <p>Než začnete balit, je důležité si uvědomit několik základních pravidel:</p>
      <ul>
        <li>Zjistěte si klimatické podmínky vaší destinace</li>
        <li>Informujte se o místních zvyklostech v oblékání</li>
        <li>Zkontrolujte pravidla letecké společnosti pro zavazadla</li>
        <li>Nechte si prostor pro suvenýry</li>
      </ul>

      <h2>Co určitě vzít s sebou</h2>
      
      <h3>Dokumenty a důležité položky</h3>
      <ul>
        <li>Pas a víza (včetně kopií)</li>
        <li>Zdravotní pojištění a pojistná smlouva</li>
        <li>Kontaktní informace na ambasádu</li>
        <li>Lékařské předpisy (v originálním obalu)</li>
        <li>Očkovací průkaz</li>
        <li>Bankovní karty (nejlépe více druhů)</li>
      </ul>

      <h3>Oblečení</h3>
      <p>Pravidlo je jednoduché - méně je více. Zaměřte se na:</p>
      <ul>
        <li>Základní kousky, které lze kombinovat</li>
        <li>Vrstvení oblečení pro různé teploty</li>
        <li>Pohodlná obuv pro chůzi</li>
        <li>Jedny elegantnější věci na speciální příležitosti</li>
        <li>Plavky (i když nejedete k moři!)</li>
      </ul>

      <h3>Technologie</h3>
      <ul>
        <li>Nabíječky a adaptéry na zásuvky</li>
        <li>Power banka</li>
        <li>Sluchátka</li>
        <li>Záložní paměťová karta</li>
      </ul>

      <h2>Co nechat doma</h2>
      <p>Stejně důležité jako vědět, co si vzít, je vědět, co nechat doma:</p>
      <ul>
        <li>Cennosti, které nepotřebujete</li>
        <li>Příliš mnoho oblečení stejného typu</li>
        <li>Velké knihy (použijte e-reader)</li>
        <li>Fén (většina ubytování jej má)</li>
        <li>Příliš mnoho toaletních potřeb (můžete koupit na místě)</li>
      </ul>

      <h2>Tipy zkušených cestovatelů</h2>
      <ul>
        <li>Sbalte si malou lékárničku se základními léky</li>
        <li>Použijte barevné pruhy na zavazadla - snáze je najdete</li>
        <li>Mějte přebalení v příručním zavazadle pro případ ztráty kufru</li>
        <li>Udělejte si seznam a zaškrtávejte, co už máte sbaleno</li>
        <li>Vyfotografujte obsah zavazadel pro případ pojistné události</li>
      </ul>

      <h2>Závěr</h2>
      <p>Dobře připravená zavazadla vám pomohou začít váš zahraniční pobyt bez stresu. Pamatujte, že většinu věcí můžete koupit i na místě, takže se nemusíte bát, že něco zapomenete. Hlavní je nezapomenout důležité dokumenty a léky!</p>
    `
  }
};

const BlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = id ? blogPostsData[id] : null;
  
  // Get other articles by the same author
  const otherAuthorPosts = post 
    ? blogPosts.filter(p => p.author === post.author && p.id !== id).slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Článek nenalezen</h1>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na blog
          </Button>
        </div>
      </div>
    );
  }

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

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/blog")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zpět na blog
        </Button>
      </div>

      {/* Article */}
      <article className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Other Articles by Author */}
      {otherAuthorPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Další články od {post.author}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {otherAuthorPosts.map((authorPost) => (
                  <Card 
                    key={authorPost.id} 
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => navigate(`/blog/${authorPost.id}`)}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={authorPost.image}
                        alt={authorPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {authorPost.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{authorPost.date}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Zaujal vás tento článek?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Prozkoumejte naše programy nebo se rovnou přihlaste!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => navigate("/")}
                  variant="outline"
                  size="lg"
                >
                  Zpět na homepage
                </Button>
                <Button 
                  onClick={() => navigate("/programs")}
                  variant="outline"
                  size="lg"
                >
                  Nabídka programů
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => navigate("/apply")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  Přihlásit se
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
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

export default BlogPost;
