import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import Footer from "@/components/Footer";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Zpět
          </Button>
          <div className="flex items-center gap-3">
            <SiteLogo className="h-24 w-auto" />
          </div>
          <MobileMenu />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Zásady ochrany osobních údajů
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Správce osobních údajů</h2>
            <p>
              Správcem a zpracovatelem osobních údajů je společnost:
            </p>
            <p className="font-medium">
              EduVentures, s.r.o.<br />
              Bořivojova 17, 130 00 Praha 3<br />
              IČ: 19639856
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Rozsah zpracovávaných údajů</h2>
            <p>
              Zpracováváme osobní údaje, které nám poskytnete prostřednictvím přihlašovacího nebo kontaktního formuláře: jméno, příjmení, e-mail, telefonní číslo, datum narození, adresu a informace o zvoleném programu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Účel zpracování</h2>
            <p>
              Vaše údaje zpracováváme za účelem vyřízení vaší poptávky či přihlášky, komunikace s vámi, zajištění programu studia či práce v zahraničí a plnění souvisejících smluvních a zákonných povinností.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Doba uchování</h2>
            <p>
              Osobní údaje uchováváme po dobu nezbytně nutnou ke splnění výše uvedených účelů, nejdéle však po dobu stanovenou platnými právními předpisy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Vaše práva</h2>
            <p>
              V souladu s nařízením GDPR máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost údajů a právo vznést námitku proti zpracování. Svá práva můžete uplatnit písemně na adrese správce nebo e-mailem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Kontakt</h2>
            <p>
              V případě dotazů týkajících se zpracování osobních údajů nás kontaktujte na adrese sídla společnosti uvedené výše.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;