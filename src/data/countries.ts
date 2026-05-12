import usaImage from "@/assets/usa.jpg";
import switzerlandImage from "@/assets/switzerland.jpg";
import germanyImage from "@/assets/germany.jpg";
import australiaImage from "@/assets/australia.jpg";
import estoniaImage from "@/assets/estonia.jpg";
import japanImage from "@/assets/japan.jpg";
import newZealandImage from "@/assets/new-zealand.jpg";
import argentinaImage from "@/assets/argentina.jpg";
import ukImage from "@/assets/uk.jpg";
import irelandImage from "@/assets/ireland.jpg";

export interface CountryInfo {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  intro: [string, string];
  schoolSystem: string;
  hostFamily: string;
  activities: string;
}

export const countries: CountryInfo[] = [
  {
    slug: "usa",
    name: "USA",
    tagline: "Země neomezených možností",
    image: usaImage,
    intro: [
      "Spojené státy americké jsou vysněnou destinací mnoha studentů. Nabízejí obrovskou rozmanitost krajiny, kultury i životních stylů — od pobřeží Kalifornie přes pláně Středozápadu až po metropole východního pobřeží. Studium v USA znamená skutečné ponoření do americké kultury a každodenního života.",
      "Američané jsou známí svou otevřeností, přátelstvím a komunitním duchem. School spirit, sportovní zápasy, prom, homecoming — to vše tvoří nezapomenutelnou součást amerického studentského života. Po roce v USA si odvezeš nejen plynulou angličtinu, ale i přátele na celý život.",
    ],
    schoolSystem:
      "Americké střední školy (high schools) jsou veřejné a navštěvují je studenti ve věku 14–18 let. Studenti si volí kombinaci povinných a volitelných předmětů, díky čemuž si můžeš sestavit vlastní rozvrh — od fyziky přes kreativní psaní až po fotografii nebo divadlo. Velký důraz je kladen na mimoškolní aktivity, sport a komunitu.",
    hostFamily:
      "Studenti jsou umisťováni do dobrovolnických hostitelských rodin po celých Spojených státech — nelze si vybrat konkrétní stát ani město. Rodiny jsou pečlivě prověřeny místní organizací a koordinátor je studentovi k dispozici po celou dobu pobytu. Student je plnohodnotným členem rodiny: má vlastní pokoj nebo ho sdílí se spolubydlícím sourozencem, podílí se na běžném chodu domácnosti a respektuje pravidla rodiny.",
    activities:
      "Američtí studenti tráví hodně času ve škole i po vyučování — sportovní týmy, divadelní kroužek, debatní klub, dobrovolnictví. Doporučujeme zapojit se alespoň do jedné aktivity, je to nejrychlejší cesta k novým přátelům. Místní koordinátor pravidelně organizuje výlety a setkání s ostatními zahraničními studenty.",
  },
  {
    slug: "svycarsko",
    name: "Švýcarsko",
    tagline: "Studium v srdci Alp",
    image: switzerlandImage,
    intro: [
      "Švýcarsko je země čtyř jazyků, dechberoucích hor a vysoké životní úrovně. Spojuje precizní pořádek se srdečnou alpskou pohostinností. Studium tady ti otevře dveře k vícejazyčnému prostředí, kvalitnímu vzdělání a bezpečnému, čistému prostředí v centru Evropy.",
      "Život ve Švýcarsku je úzce spjat s přírodou — víkendy v horách, lyžování, turistika a jezerní sporty patří k běžnému rytmu místních rodin. Zároveň poznáš silně zakořeněné tradice i moderní evropský životní styl jedné z nejstabilnějších zemí světa.",
    ],
    schoolSystem:
      "Švýcarské střední školy jsou rozděleny podle jazykové oblasti — německé, francouzské nebo italské. Vzdělávání má vysoký standard a důraz na samostatnost a odpovědnost studentů. Volba předmětů je pestrá a studenti často studují tři až čtyři jazyky najednou. Výuka probíhá v jazyce dané kantonu.",
    hostFamily:
      "Hostitelské rodiny jsou vybírány v menších městech a obcích po celém Švýcarsku, převážně v německy mluvících kantonech. Rodiny jsou prověřeny partnerskou organizací a do programu se hlásí dobrovolně. Student dostává vlastní pokoj a je vítán jako součást rodiny. Důraz je kladen na vzájemný respekt, přesnost a dodržování pravidel domácnosti.",
    activities:
      "Místní organizace pořádá pro studenty pravidelná setkání, výlety do hor a lyžařské víkendy. Studenti se mohou zapojit do sportovních klubů, hudebních souborů a školních aktivit. Švýcarsko je ideální základna pro cestování po Evropě o prázdninách.",
  },
  {
    slug: "nemecko",
    name: "Německo",
    tagline: "Brána do Evropy",
    image: germanyImage,
    intro: [
      "Německo je naším největším sousedem a jedním z nejvýznamnějších studentských kulturních center Evropy. Spojuje bohatou historii, technologickou vyspělost a velmi dobrou životní úroveň. Pro českého studenta je Německo skvělým prvním krokem do zahraničí — blízko domova a s jazykem, který otevírá dveře po celé střední Evropě.",
      "Život v Německu má svůj řád, ale zároveň je plný zábavy — od cyklistiky a fotbalu přes hudební festivaly až po typické Weihnachtsmärkte. Po pobytu si odvezeš plynulou němčinu, samostatnost a evropský rozhled.",
    ],
    schoolSystem:
      "Německý vzdělávací systém se dělí na několik typů středních škol — Gymnasium, Realschule a Gesamtschule. Studenti programu nejčastěji navštěvují Gymnasium, které končí maturitou (Abitur). Vyučují se klasické předměty doplněné o cizí jazyky, přírodní vědy a umělecké obory. Atmosféra je přátelská a otevřená.",
    hostFamily:
      "Studenti jsou umisťováni do dobrovolnických rodin po celém Německu, většinou v menších a středních městech. Rodiny prochází důkladným výběrem partnerské organizace. Student má vlastní pokoj nebo ho sdílí se sourozencem, podílí se na běžném chodu domácnosti a dodržuje rodinná pravidla. Místní koordinátor je k dispozici po celou dobu pobytu.",
    activities:
      "Pro studenty jsou pořádána uvítací i závěrečná setkání, víkendové výlety a kulturní akce. Doporučujeme zapojit se do místních spolků (Vereine) — sportovních, hudebních nebo dobrovolnických — to je v Německu nejlepší způsob, jak poznat vrstevníky.",
  },
  {
    slug: "australie",
    name: "Austrálie",
    tagline: "Slunce, oceán a dobrodružství",
    image: australiaImage,
    intro: [
      "Austrálie je kontinent plný kontrastů — moderní pobřežní města, nekonečný outback, korálové útesy a unikátní příroda. Pohodový životní styl, otevření lidé a vysoká kvalita vzdělání dělají z Austrálie jednu z nejoblíbenějších destinací pro studium.",
      "Život v Austrálii znamená čas u oceánu, barbecue s rodinou, surfování i víkendové výlety do národních parků. Po pobytu si odvezeš nejen výbornou angličtinu, ale i sebevědomí a širší pohled na svět.",
    ],
    schoolSystem:
      "Australské střední školy (high schools / colleges) přijímají studenty mezi 13. a 18. rokem. Školní rok začíná v lednu a dělí se na čtyři čtvrtletí. Studenti si volí předměty podle zájmu — kromě běžných oborů mohou studovat například mořskou biologii, fotografii nebo design. Důraz je kladen na praxi, sport a osobní rozvoj.",
    hostFamily:
      "Hostitelské rodiny jsou vybírány po celé Austrálii, často v příměstských oblastech velkých měst nebo v menších městech blízko pobřeží. Konkrétní region si nelze zvolit. Rodiny prochází důkladným prověřením a je s nimi v kontaktu místní koordinátor. Student se stává plnohodnotným členem rodiny a respektuje její chod.",
    activities:
      "Studenti se mohou zapojit do sportovních týmů ve škole i mimo ni — surf, plavání, fotbal australského typu. Partnerská organizace nabízí dobrovolné výlety, například k Velkému bariérovému útesu nebo do Sydney.",
  },
  {
    slug: "estonsko",
    name: "Estonsko",
    tagline: "Digitální velmoc severní Evropy",
    image: estoniaImage,
    intro: [
      "Estonsko je malá, moderní a překvapivě inspirativní země. Patří mezi nejdigitálnější státy světa — vše od voleb po zdravotní karty zde funguje online. Spojuje severskou klidnou atmosféru s živou kulturou a dechberoucí přírodou plnou lesů, jezer a pobřeží Baltu.",
      "Pro studenta je Estonsko ideální destinací, pokud hledá něco netradičního. Poznáš jinou Evropu, naučíš se výborně anglicky a získáš nadhled nad tím, jak může moderní stát fungovat.",
    ],
    schoolSystem:
      "Estonské střední školy patří dlouhodobě k nejlepším v Evropě podle žebříčků PISA. Výuka je moderní, založená na samostatnosti a digitálních nástrojích. Hlavním vyučovacím jazykem je estonština, ale na mnoha školách probíhá výuka částečně i v angličtině. Studenti si vybírají z široké nabídky volitelných předmětů.",
    hostFamily:
      "Hostitelské rodiny pochází z různých částí Estonska — od Tallinnu po menší města. Rodiny jsou pečlivě vybrané místní partnerskou organizací. Student dostává vlastní pokoj a je vítán jako součást rodiny. Důraz je kladen na vzájemný respekt, otevřenou komunikaci a dodržování pravidel.",
    activities:
      "Místní organizace pořádá uvítací kemp, víkendové výlety i návštěvy historických míst. Estonsko je rájem pro milovníky přírody — saunování, hiking i běžky patří k běžnému životu.",
  },
  {
    slug: "japonsko",
    name: "Japonsko",
    tagline: "Země vycházejícího slunce",
    image: japanImage,
    intro: [
      "Japonsko je země nezaměnitelné kultury, kde se moderní technologie potkávají se starobylými tradicemi. Tokio, Kjóto, hora Fudži, sakury, sushi, manga — každý si tady najde něco svého. Studium v Japonsku je intenzivní zkušenost, která tě jednou provždy změní.",
      "Japonská společnost je založená na úctě, harmonii a kolektivním duchu. Naučíš se nový pohled na svět, japonské zdvořilosti a získáš schopnost komunikovat v jednom z nejzajímavějších jazyků planety.",
    ],
    schoolSystem:
      "Japonské střední školy (kókó) jsou velmi strukturované. Studenti nosí uniformy, mají dlouhé vyučovací dny a po škole pokračují v klubové činnosti (bukatsu). Hlavním jazykem výuky je japonština, ale zahraniční studenti dostávají individuální podporu. Důraz je kladen na disciplínu, snahu a respekt k učitelům i spolužákům.",
    hostFamily:
      "Studenti jsou umisťováni do dobrovolnických japonských rodin, často mimo největší metropole. Konkrétní město si nelze zvolit. Rodiny jsou pečlivě prověřeny partnerskou organizací. Student je vítán jako nový člen rodiny — má vlastní pokoj, podílí se na chodu domácnosti a respektuje japonská pravidla soužití (například přezouvání, společné jídlo, koupání).",
    activities:
      "Klubové aktivity ve škole (sport, čajový obřad, kaligrafie, hudba) jsou nejlepší způsob, jak najít přátele. Partnerská organizace pořádá uvítací orientaci v Tokiu a další setkání během roku. Doporučujeme zapojit se do místních festivalů (matsuri).",
  },
  {
    slug: "novy-zeland",
    name: "Nový Zéland",
    tagline: "Země věčného dobrodružství",
    image: newZealandImage,
    intro: [
      "Nový Zéland je země nedotčené přírody, hor, fjordů i sopečných pláží. Život tady plyne v klidnějším rytmu, lidé jsou vstřícní a aktivní, příroda je všudypřítomná. Pro studenty hledající bezpečnou anglicky mluvící zemi s vysokou kvalitou života je Nový Zéland ideální volbou.",
      "Kromě výborné angličtiny si odvezeš lásku k přírodě a outdoorovému stylu života. Hiking, surfing, ragby, mléčná čokoláda a maorská kultura — to vše tě čeká.",
    ],
    schoolSystem:
      "Novozélandské střední školy mají skvělou pověst díky individuálnímu přístupu a moderním osnovám. Školní rok začíná v lednu nebo červenci a dělí se na čtyři čtvrtletí. Studenti si volí předměty podle vlastních zájmů — od přírodních věd přes umění až po outdoorové vzdělávání. Atmosféra je přátelská a otevřená.",
    hostFamily:
      "Hostitelské rodiny jsou vybírány po celé zemi, často v menších městech a příměstských oblastech. Konkrétní region si nelze zvolit. Rodiny prochází pečlivým výběrem partnerské školy nebo organizace. Student je plně začleněn do rodinného života, dostává vlastní pokoj a respektuje pravidla rodiny.",
    activities:
      "Doporučujeme využít nabídku školních outdoorových aktivit — ragby, plavání, lyžování, hiking. Místní koordinátor pomáhá s organizací výletů a setkání s dalšími zahraničními studenty.",
  },
  {
    slug: "argentina",
    name: "Argentina",
    tagline: "Vášeň, tango a Patagonie",
    image: argentinaImage,
    intro: [
      "Argentina je země ohromných kontrastů — od pulzujícího Buenos Aires přes vinařskou Mendozu až po ledovce Patagonie. Argentinci jsou srdeční, otevření a hudba, fotbal i tango patří k jejich každodennímu životu. Pro studenta je to ideální destinace, jak poznat latinskoamerickou kulturu zevnitř.",
      "Po pobytu si odvezeš plynulou španělštinu, pravé argentinské přátele a životní zážitky, které ti jen tak něco nevezme. Asado, mate, fotbal a vřelost místních lidí — to je Argentina.",
    ],
    schoolSystem:
      "Argentinské střední školy (escuela secundaria) přijímají studenty od 12 do 18 let. Vyučovacím jazykem je španělština. Školy jsou rozděleny na veřejné a soukromé, atmosféra je rodinná a otevřená. Studenti se učí klasické předměty doplněné o sport a umění.",
    hostFamily:
      "Studenti jsou umisťováni do dobrovolnických rodin po celé Argentině — od Buenos Aires po menší města ve vnitrozemí. Konkrétní region si nelze zvolit. Rodiny prochází výběrem místní partnerské organizace. Argentinské rodiny jsou velmi srdečné a otevřené, student se stává plnohodnotným členem domácnosti.",
    activities:
      "Místní koordinátor pořádá uvítací orientaci a víkendové výlety. Doporučujeme zapojit se do fotbalového klubu nebo tanečních kurzů — je to nejrychlejší cesta k novým přátelům. Argentina je rájem cestování — od vodopádů Iguazú po ledovec Perito Moreno.",
  },
  {
    slug: "velka-britanie",
    name: "Velká Británie",
    tagline: "Tradice, kultura a rodný jazyk angličtiny",
    image: ukImage,
    intro: [
      "Velká Británie je kolébkou anglického jazyka a jednou z kulturně nejbohatších zemí Evropy. Spojuje tisíciletou historii s pulzující současností — od Londýna přes Skotskou vysočinu až po malebné vesničky Cornwallu. Pro studenty je to ideální destinace, pokud chtějí angličtinu na opravdu vysoké úrovni.",
      "Britský životní styl má své kouzlo: čaj o páté, fotbalové zápasy, country víkendy i společenské tradice. Po pobytu si odvezeš nejen výbornou angličtinu, ale i nadhled, smysl pro humor a evropský rozhled.",
    ],
    schoolSystem:
      "Britské střední školy (secondary schools / sixth form) mají dlouhou tradici a vysoký standard. Studenti programu nejčastěji navštěvují státní školy, někdy i prestižní soukromé. Vyučovacím jazykem je angličtina, studenti si volí kombinaci povinných a volitelných předmětů. Důraz je kladen na akademickou kvalitu, samostatnost a osobní rozvoj.",
    hostFamily:
      "Studenti jsou umisťováni do prověřených hostitelských rodin po celé Velké Británii — často v menších městech Anglie, Walesu nebo Skotska. Konkrétní region si nelze zvolit. Rodiny jsou pečlivě vybrány partnerskou organizací a jsou se studentem v kontaktu po celou dobu pobytu. Student dostává vlastní pokoj nebo ho sdílí se sourozencem a respektuje pravidla rodiny.",
    activities:
      "Doporučujeme zapojit se do školních klubů (sport, drama, hudba, debate club) — je to typická součást britské školní kultury. Partnerská organizace pořádá orientační setkání i víkendové výlety, například do Londýna, Edinburghu nebo na pobřeží.",
  },
  {
    slug: "irsko",
    name: "Irsko",
    tagline: "Smaragdový ostrov a srdečnost Keltů",
    image: irelandImage,
    intro: [
      "Irsko je země zelených kopců, dramatického pobřeží a jedné z nejsrdečnějších kultur Evropy. Kombinuje moderní evropskou společnost s živou keltskou tradicí — hudba, příběhy a komunita patří k irskému životu stejně jako pinta v místním pubu. Pro studenty je to bezpečná, anglicky mluvící země s rodinnou atmosférou.",
      "Irové jsou známí svou pohostinností a smyslem pro humor. Po pobytu si odvezeš výbornou angličtinu, irské přátele a lásku ke krajině, která vypadá jako z pohádky.",
    ],
    schoolSystem:
      "Irské střední školy mají vynikající pověst a osobní přístup. Studenti programu navštěvují státní nebo polostátní školy, často menších rozměrů, kde je atmosféra rodinná. Vyučovacím jazykem je angličtina. Pro zahraniční studenty je oblíbený zejména tzv. Transition Year — speciální ročník zaměřený na osobní rozvoj, projekty a stáže.",
    hostFamily:
      "Hostitelské rodiny jsou vybírány po celém Irsku — od Dublinu po menší města a venkov. Konkrétní region si nelze zvolit. Rodiny prochází pečlivým výběrem partnerské organizace a jsou se studentem v kontaktu po celou dobu pobytu. Student je vítán jako součást rodiny, dostává vlastní pokoj a respektuje pravidla domácnosti.",
    activities:
      "Irské školy nabízejí bohatou nabídku sportovních a uměleckých klubů — gaelský fotbal, hurling, ragby, tradiční hudba. Partnerská organizace pořádá uvítací orientaci a víkendové výlety, například po Wild Atlantic Way nebo do Dublinu.",
  },
];

export const getCountryBySlug = (slug: string) => countries.find((c) => c.slug === slug);

export const countrySlugByName: Record<string, string> = countries.reduce((acc, c) => {
  acc[c.name] = c.slug;
  return acc;
}, {} as Record<string, string>);