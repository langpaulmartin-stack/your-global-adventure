import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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
  }
};

const BlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = id ? blogPostsData[id] : null;

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
