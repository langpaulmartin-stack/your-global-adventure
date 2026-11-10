import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";

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

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-3">I. Úvodní ustanovení</h2>
            <p className="mb-3">
              Tyto Zásady jsou zpracovány v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (GDPR). Cílem těchto Zásad je poskytnout účastníkům základní informace ohledně zpracování osobních údajů.
            </p>
            <p className="mb-3">Pro potřeby těchto Zásad se rozumí:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>
                <strong>Správcem osobních údajů</strong> je Platforma porozumění, z.s., se sídlem Nad Ondřejovem 9, 140 00 Praha 4, e-mail:{" "}
                <a href="mailto:world@porozumeni.org" className="text-primary underline underline-offset-2">
                  world@porozumeni.org
                </a>
              </li>
              <li>
                <strong>Účastníkem</strong> je fyzická osoba (zájemce o jakýkoli program či projekt, stávající spolupracovník atp.), která poskytne správci vyplněný registrační formulář nebo jiným způsobem vyjádří svůj jednoznačný zájem o spolupráci.
              </li>
              <li>
                <strong>Osobní údaje</strong> zahrnují: jméno, příjmení, titul, trvalý pobyt, datum narození, údaje z předložených dokladů, telefonní a e-mailové spojení, informace o zdravotním stavu a údaje o rodině.
              </li>
            </ul>
            <p className="mb-3">
              Správce provozuje tento web, jehož součástí jsou i přihlašovací a kontaktní formuláře. V rámci této služby jsou správcem zpracovávány osobní údaje v rozsahu, v jakém byly poskytnuty v souvislosti s nabídkou či poptávkou programů a služeb, v rámci jednání o uzavření smlouvy, jakož i v souvislosti s uzavřenou smlouvou, a to za účely uvedenými níže.
            </p>
            <p className="mb-3">
              Správce dále zpracovává osobní údaje účastníků v souvislosti s marketingem (např. rozesílání občasného newsletteru). Za účelem marketingu nebudou osobní údaje předávány žádným třetím stranám.
            </p>
            <p>
              Osobní údaje nejsou zpracovávány žádným jiným subjektem. Ke zpracovávaným osobním údajům má přístup pouze správce, není-li předání podmíněno plněním smlouvy (např. zajišťování letenek, ubytování, sjednávání pojištění atp.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">II. Účel zpracování osobních údajů</h2>
            <p className="mb-3">Správce zpracovává osobní údaje pro následující účely:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                zajištění uzavření a následného plnění smluvního nebo jiného závazku mezi správcem a účastníkem (čl. 6 odst. 1 písm. b) GDPR). Z takového vztahu vyplývají další zákonné povinnosti, pro něž musí správce osobní údaje zpracovávat (čl. 6 odst. 1 písm. c) GDPR);
              </li>
              <li>
                marketingové účely, aby správce co nejlépe přizpůsobil nabídku programů a služeb potřebám účastníků – pro tento účel získává správce jednoznačný souhlas účastníka (čl. 6 odst. 1 písm. a) GDPR);
              </li>
              <li>
                ochrana oprávněných zájmů správce (čl. 6 odst. 1 písm. f) GDPR), kterým je řádné a včasné plnění smluvního závazku, plnění zákonných povinností, ochrana reputace správce a ochrana majetkových zájmů pro případné soudní spory.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">III. Ochrana osobních údajů a informace o zpracování</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Na účastníky se vztahuje zákon č. 101/2000 Sb., o ochraně osobních údajů, ve znění pozdějších předpisů, a další příslušné právní předpisy.</li>
              <li>Účastník bere na vědomí, že odesláním vyplněného registračního formuláře či jiným způsobem vyjádřeným souhlasem započne zpracovávání osobních údajů správcem.</li>
              <li>Pokud účastník neposkytne své osobní údaje, není možné uzavřít smlouvu ani poskytnout služby z ní vyplývající. Osobní údaje jsou v této souvislosti nezbytné pro poskytnutí konkrétní služby či produktu.</li>
              <li>Poskytování osobních údajů je obecně smluvní a zákonný požadavek. Pro marketingové účely je od účastníka vyžadován souhlas; jeho neudělení neznamená, že by správce odmítl poskytovat své služby.</li>
              <li>Osobní údaje budou zpracovávány po dobu jednání o uzavření smlouvy, po dobu trvání smluvního vztahu či po dobu stanovenou v souhlasu.</li>
              <li>V případě uzavření smlouvy budou osobní údaje zpracovávány a uchovávány po nezbytně dlouhou dobu pro případ vzniku sporu, a to za účelem ochrany oprávněných zájmů správce.</li>
              <li>Za účelem plnění zákonné povinnosti archivace účetních dokladů na základě zákona č. 563/1991 Sb., o účetnictví, budou osobní údaje (kromě e-mailové adresy a telefonního čísla) uchovávány po dobu 10 let počínaje rokem následujícím po roce uzavření smlouvy.</li>
              <li>Po uplynutí výše uvedených lhůt správce osobní údaje zlikviduje, není-li účastníkem odsouhlaseno jinak.</li>
              <li>Účastník je povinen poskytnout pouze pravdivé a přesné osobní údaje.</li>
              <li>Správce vynaloží maximální úsilí, aby nedošlo k neoprávněnému zpracování osobních údajů.</li>
              <li>Osobní údaje účastníků nebudou předávány žádným třetím osobám, do třetí země ani jiné mezinárodní organizaci mimo partnerskou síť správce.</li>
              <li>Osobní údaje jsou a budou zpracovávány v elektronické podobě neautomatizovaným způsobem.</li>
              <li>Účastník bere na vědomí, že může docházet k ukládání cookies na jeho zařízení. Souhlas s cookies může kdykoli změnit v patičce webu.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">IV. Práva účastníka související se zpracováním</h2>
            <p className="mb-3">
              Účastník má právo svůj souhlas se zpracováním osobních údajů kdykoli odvolat. Odvoláním souhlasu není dotčena zákonnost zpracování založená na souhlasu uděleném před jeho odvoláním, ani zpracování na základě jiného právního základu (splnění smlouvy, právní povinnosti). Odvolat souhlas lze zasláním odvolání na adresu sídla správce nebo e-mailem.
            </p>
            <p className="mb-3">Účastník má dále právo:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>
                <strong>být informován</strong> o zpracování svých osobních údajů – požadovat informace o totožnosti a kontaktních údajích správce, účelech zpracování, kategoriích údajů, příjemcích, oprávněných zájmech a o možnosti obrátit se na Úřad pro ochranu osobních údajů;
              </li>
              <li>
                <strong>na přístup</strong> ke svým osobním údajům včetně poskytnutí kopie zpracovávaných údajů;
              </li>
              <li>
                <strong>na opravu</strong> nesprávných a doplnění neúplných osobních údajů;
              </li>
              <li>
                <strong>na výmaz</strong> osobních údajů ve stanovených případech – žádost podléhá individuálnímu posouzení a o jejím vyřízení bude účastník informován;
              </li>
              <li>
                <strong>na omezení zpracování</strong> – požadovat, aby byly údaje zpracovávány výhradně pro nejnutnější zákonné důvody nebo aby byly blokovány;
              </li>
              <li>
                <strong>podat stížnost</strong> u Úřadu pro ochranu osobních údajů, se sídlem Pplk. Sochora 27, 170 00 Praha 7,{" "}
                <a href="https://www.uoou.cz/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                  www.uoou.cz
                </a>
                .
              </li>
            </ul>
            <p className="mb-3">
              Domnívá-li se účastník, že správce provádí zpracování jeho osobních údajů v rozporu s ochranou jeho soukromí nebo s právními předpisy, může požádat správce o vysvětlení či odstranění takto vzniklého stavu e-mailem na adrese{" "}
              <a href="mailto:world@porozumeni.org" className="text-primary underline underline-offset-2">
                world@porozumeni.org
              </a>
              . Nevyhoví-li správce námitce, má účastník právo obrátit se přímo na Úřad pro ochranu osobních údajů.
            </p>
            <p className="mb-3">
              Účastník může svá práva uplatnit písemně na adrese Platforma porozumění, z.s., Nad Ondřejovem 9, 140 00 Praha 4, nebo elektronicky na adrese{" "}
              <a href="mailto:world@porozumeni.org" className="text-primary underline underline-offset-2">
                world@porozumeni.org
              </a>
              .
            </p>
            <p className="mb-3">
              Požádá-li účastník o informaci o rozsahu či způsobu zpracování svých osobních údajů, je mu správce povinen tuto informaci předat neprodleně, nejpozději do jednoho měsíce od obdržení žádosti. Uplatní-li účastník právo na přístup v elektronické formě, poskytne správce informace rovněž elektronicky.
            </p>
            <p>
              Správce je oprávněn v případě opakované a nedůvodné žádosti o poskytnutí fyzické kopie zpracovávaných osobních údajů účtovat přiměřený poplatek za administrativní náklady.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">V. Závěrečná ustanovení</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Veškeré právní vztahy vznikající v souvislosti se zpracováním osobních údajů se řídí právním řádem České republiky. K řešení případných sporů jsou příslušné české soudy.
              </li>
              <li>
                Účastníci, kteří prostřednictvím registračního formuláře poskytnou své osobní údaje či souhlas se zpracováním, tak činí dobrovolně a svým jménem.
              </li>
              <li>
                Znění těchto Zásad může správce změnit či doplňovat. O každé takové změně informuje účastníky e-mailem nejméně 30 dnů před nabytím účinnosti změn.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
