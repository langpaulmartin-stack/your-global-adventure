import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import heroFaq from "@/assets/hero-faq.jpg";

const faqs = [
  {
    question: "Jaké jsou požadavky pro účast v programu?",
    answer: "Základní požadavky zahrnují věk 15-18 let, dobrý studijní průměr, základní znalost jazyka cílové země a ochotu se aktivně zapojit do života hostitelské rodiny a školy. Specifické požadavky se mohou lišit podle destinace."
  },
  {
    question: "Jak probíhá výběr hostitelské rodiny?",
    answer: "Každou hostitelskou rodinu pečlivě prověřujeme a schvalujeme. Rodiny procházejí kontrolou, pohovorem a musí splňovat naše přísné standardy. Snažíme se najít rodinu, která nejlépe odpovídá profilu a zájmům studenta."
  },
  {
    question: "Co je zahrnuto v ceně programu?",
    answer: "Cena typicky zahrnuje ubytování v hostitelské rodině, stravu, zprostředkování a supervizi, zdravotní pojištění, přípravné semináře a podporu koordinátora po celou dobu pobytu. Nezahrnuje letecké letenky, kapesné a osobní výdaje."
  },
  {
    question: "Musím umět perfektně jazyk cílové země?",
    answer: "Ne, není nutná perfektní znalost. Požadujeme základní komunikační schopnosti (obvykle úroveň A2-B1). Primárním cílem programu je právě zlepšení jazykových dovedností prostřednictvím imerzního prostředí."
  },
  {
    question: "Jak dlouho trvá proces přihlášení?",
    answer: "Doporučujeme začít s přihláškou 8-12 měsíců před plánovaným odjezdem. Proces zahrnuje vyplnění přihlášky, pohovor, přípravu dokumentů, hledání hostitelské rodiny a přípravu před odjezdem."
  },
  {
    question: "Mohu si vybrat konkrétní školu nebo město?",
    answer: "Obecně nelze garantovat konkrétní školu nebo město. Umístění závisí na dostupnosti hostitelských rodin. Můžete však vyjádřit preference ohledně typu prostředí (velkoměsto vs. menší město) a my se je budeme snažit zohlednit."
  },
  {
    question: "Co když budu mít problém během pobytu?",
    answer: "Po celou dobu pobytu máte k dispozici místního koordinátora, který vám pomůže s jakýmikoli problémy. Navíc jsme dostupní 24/7 pro případné urgentní situace. Pravidelně probíhají check-in hovory s koordinátory."
  },
  {
    question: "Bude můj pobyt uznán jako část středoškolského vzdělání?",
    answer: "Ano, po návratu můžete požádat o nostrifikaci vysvědčení ze zahraniční školy. Proces nostrifikace zajišťujeme a pomáháme s ním. Většina studentů se pak bez problémů začlení zpět do českého vzdělávacího systému."
  },
  {
    question: "Jaké jsou možnosti platby?",
    answer: "Nabízíme flexibilní platební plány. Obvykle se platí záloha při potvrzení účasti a zbytek částky ve splátkách před odjezdem. Máme také možnost individuálních platebních plánů podle vašich potřeb."
  },
  {
    question: "Co když najdu program levněji jinde?",
    answer: "Naše ceny odrážejí vysokou kvalitu služeb a osobní přístup, který poskytujeme. Zahrnují komplexní podporu před, během i po programu. Rádi vám představíme, co všechno je v ceně zahrnuto a proč si myslíme, že nabízíme skvělou hodnotu."
  },
  {
    question: "Mohou mě během programu navštívit rodiče?",
    answer: "Ano, rodiče vás mohou navštívit, doporučujeme však počkat alespoň 2-3 měsíce, aby student měl čas se plně adaptovat. Návštěvy je potřeba koordinovat s hostitelskou rodinou a školou."
  },
  {
    question: "Jaké jsou zdravotní požadavky?",
    answer: "Student musí být zdravotně způsobilý k pobytu v zahraničí. Některé destinace vyžadují specifická očkování. Chronická onemocnění nejsou automaticky překážkou, ale musí být řádně zdokumentována a schválena."
  },
  {
    question: "Jak často budu mohou komunikovat s rodinou doma?",
    answer: "Můžete komunikovat pravidelně přes internet, telefon nebo video hovory. Doporučujeme však zachovat zdravou rovnováhu, aby měl student prostor pro plnou integraci do nového prostředí."
  },
  {
    question: "Co mám vzít s sebou?",
    answer: "Před odjezdem dostanete podrobný packing list. Obecně doporučujeme brát oblečení podle klimatu destinace, několik dárků pro hostitelskou rodinu, svoje osobní věci a fotografie z domova. Většinu věcí si můžete koupit i v cílové zemi."
  },
  {
    question: "Nabízíte stipendia nebo finanční podporu?",
    answer: "Ano, máme omezený počet částečných stipendií pro vynikající studenty nebo pro rodiny v obtížné finanční situaci. Kontaktujte nás pro více informací o aktuálních možnostech finanční podpory."
  }
];

const FAQ = () => {
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
            <Button variant="ghost" onClick={() => navigate("/faq")} className="text-primary font-medium">
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
            src={heroFaq} 
            alt="FAQ - Study Abroad Questions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <MessageCircle className="h-16 w-16 mx-auto text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold">
              Často kladené otázky
            </h1>
            <p className="text-xl text-muted-foreground">
              Najděte odpovědi na nejčastější dotazy ohledně našich programů
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions */}
            <div className="mt-16 text-center space-y-6 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
              <h2 className="text-3xl font-bold">Máte další otázky?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pokud jste nenašli odpověď na svou otázku, neváhejte nás kontaktovat. Rádi vám pomůžeme!
              </p>
              <Button 
                onClick={() => navigate("/")} 
                size="lg"
                className="text-lg"
              >
                Kontaktujte nás
              </Button>
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

export default FAQ;
