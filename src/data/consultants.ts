import martinLangpaul from "@/assets/martin-langpaul.jpg";
import kamilaSaadatian from "@/assets/kamila-saadatian.jpg";
import katerinaCasco from "@/assets/katerina-casco.jpg";

export interface Consultant {
  slug: string;
  name: string;
  role: string;
  description: string;
  initials: string;
  image: string;
  about: string;
  experience: string;
  motivation: string;
}

export const consultants: Consultant[] = [
  {
    slug: "martin-langpaul",
    name: "Martin Langpaul",
    role: "Zakladatel",
    description: "Více než 20 let zkušeností s prací a studiem v zahraničí",
    initials: "ML",
    image: martinLangpaul,
    about:
      "Jsem zakladatelem projektu Studuj v zahraničí. Studijním a pracovním pobytům v zahraničí se věnuji už více než dvacet let a za tu dobu jsem pomohl stovkám mladých lidí vyrazit za hranice. Vedu tým konzultantů a stojím za výběrem partnerských organizací, se kterými spolupracujeme.",
    experience:
      "Sám jsem vyjel do USA, kde jsem strávil školní rok na střední škole, a později jsem cestoval a pracoval v Evropě i v zámoří. Díky tomu znám obě strany — vím, jak se cítí student při odjezdu i jak fungují hostitelské rodiny a partnerské školy.",
    motivation:
      "Věřím, že zkušenost ze zahraničí dokáže změnit život. Otevírá obzory, učí samostatnosti a buduje sebevědomí. Když vidím studenty, kteří se vrací proměnění, vím, proč to dělám.",
  },
  {
    slug: "aneta-jurankova",
    name: "Aneta Juránková",
    role: "Konzultantka pro USA",
    description: "Práce v USA, J-1 programy",
    initials: "AJ",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    about:
      "Mám na starosti programy v USA — od školního roku přes semestr až po pracovní programy J-1. Studentům pomáhám s výběrem programu, přípravou na pohovor i s vyřízením víza.",
    experience:
      "Strávila jsem v USA několik letních sezón na programu Work and Travel a později jsem pracovala jako au-pair v Kalifornii. Ameriku mám projetou od východního po západní pobřeží.",
    motivation:
      "Baví mě sledovat, jak se ze studentů během pár měsíců stávají sebevědomí lidé, kteří si troufnou na cokoli. Tu jiskru v očích po návratu nic nenahradí.",
  },
  {
    slug: "ondrej-chmelir",
    name: "Ondřej Chmelíř",
    role: "Konzultant pro Oceánii",
    description: "Práce na Novém Zélandu a v Kanadě",
    initials: "OC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    about:
      "Specializuji se na programy v Oceánii a Kanadě. Pomáhám s pracovními pobyty Working Holiday i s dlouhodobým studiem na střední škole na Novém Zélandu a v Austrálii.",
    experience:
      "Sám jsem strávil rok na Novém Zélandu na pracovním vízu a později několik měsíců cestoval po Kanadě. Znám místní reálie, pracovní trh i to, jak vypadá běžný den v hostitelské rodině.",
    motivation:
      "Oceánie není jen krásná příroda — je to životní styl, který tě naučí pokoře a vděčnosti. Chci, aby tuhle zkušenost zažilo co nejvíc mladých Čechů.",
  },
  {
    slug: "kamila-saadatian",
    name: "Kamila Saadatian",
    role: "Konzultantka",
    description: "Studium a pobyty v zahraničí",
    initials: "KS",
    image: kamilaSaadatian,
    about:
      "Pracuji jako konzultantka pro studijní pobyty v Evropě a Latinské Americe. Studentům pomáhám s výběrem destinace, přípravou dokumentů i s tím, co je čeká po příletu.",
    experience:
      "Žila jsem několik let v Argentině a procestovala velkou část Jižní Ameriky. Mluvím plynně španělsky a mám zkušenost se životem v rodině i s místním školním systémem.",
    motivation:
      "Pobyt v zahraničí mi dal víc než jakákoli učebnice — jazyk, přátele a úplně nový pohled na svět. Tohle chci předávat dál.",
  },
  {
    slug: "samra-muhic",
    name: "Samra Muhić",
    role: "Konzultantka pro Japonsko a Dálný východ",
    description: "Pobyty v Japonsku a na Dálném východě",
    initials: "SM",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    about:
      "Mám na starost programy v Japonsku a dalších zemích Dálného východu. Studentům vysvětluji specifika asijské kultury a pomáhám s přípravou na úplně jiný způsob života.",
    experience:
      "Strávila jsem semestr na japonské střední škole a později jsem se do Japonska několikrát vrátila — jak studijně, tak za prací. Mluvím japonsky a mám tam široký okruh kontaktů.",
    motivation:
      "Japonsko změní každého, kdo tam vyjede. Naučí tě jinak přemýšlet, vnímat detaily a vážit si maličkostí. Chci, aby tuhle zkušenost objevili i čeští studenti.",
  },
  {
    slug: "katerina-casco",
    name: "Kateřina Casco",
    role: "Konzultantka pro Velkou Británii a Irsko",
    description: "Pobyty ve Velké Británii a Irsku",
    initials: "KC",
    image: katerinaCasco,
    about:
      "Starám se o programy ve Velké Británii a Irsku. Pomáhám rodinám s výběrem správné školy, vysvětlím rozdíly mezi britským a irským systémem a provedu vás celým procesem přihlášky.",
    experience:
      "Sama jsem studovala ve Velké Británii a několik let tam i pracovala. Britské střední školy znám zevnitř a pravidelně je navštěvuji, abych měla aktuální přehled.",
    motivation:
      "Studium ve Velké Británii nebo Irsku otevírá dveře na špičkové univerzity po celém světě. Baví mě, když studenti zjistí, že na to opravdu mají.",
  },
];

export const getConsultantBySlug = (slug: string) =>
  consultants.find((c) => c.slug === slug);