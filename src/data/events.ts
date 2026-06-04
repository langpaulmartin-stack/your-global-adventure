import usaImage from "@/assets/usa.jpg";
import campusImage from "@/assets/hero-students-campus.jpg";
import friendsImage from "@/assets/hero-friends.jpg";
import workImage from "@/assets/hero-work.jpg";
import aboutImage from "@/assets/hero-about.jpg";

export type EventTag =
  | "Studium v zahraničí"
  | "Práce v zahraničí"
  | "Dobrovolnictví"
  | "Prezentace na škole";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  tag: EventTag;
}

export const events: CalendarEvent[] = [
  {
    id: "infoschuzka-usa",
    title: "Infoschůzka o studiu v USA",
    date: "15. ledna 2026",
    time: "17:00",
    location: "Praha, kancelář Studuj v zahraničí",
    description:
      "Dozvíte se vše o ročním studijním pobytu na americké střední škole — průběh programu, ceny, termíny i podmínky přijetí.",
    image: usaImage,
    tag: "Studium v zahraničí",
  },
  {
    id: "infoschuzka-zahranici",
    title: "Infoschůzka o studiu v zahraničí",
    date: "29. ledna 2026",
    time: "17:30",
    location: "Online (Zoom)",
    description:
      "Představíme všechny destinace, programy a možnosti studia v zahraničí pro středoškoláky. Prostor pro vaše dotazy.",
    image: campusImage,
    tag: "Studium v zahraničí",
  },
  {
    id: "prezentace-voderadska",
    title: "Prezentace na Gymnáziu Voděradská",
    date: "12. února 2026",
    time: "10:00",
    location: "Gymnázium Voděradská, Praha 10",
    description:
      "Přijdeme přímo do školy a studentům představíme příležitosti pro studium v zahraničí během středoškolských let.",
    image: friendsImage,
    tag: "Prezentace na škole",
  },
  {
    id: "prace-au-pair",
    title: "Webinář: Au pair v USA krok za krokem",
    date: "26. února 2026",
    time: "18:00",
    location: "Online (Zoom)",
    description:
      "Jak se přihlásit do programu Au pair v USA, jaké jsou požadavky a co vás čeká během pobytu u hostitelské rodiny.",
    image: workImage,
    tag: "Práce v zahraničí",
  },
  {
    id: "dobrovolnictvi-info",
    title: "Infoschůzka: Dobrovolnictví v zahraničí",
    date: "12. března 2026",
    time: "17:00",
    location: "Praha, kancelář Studuj v zahraničí",
    description:
      "Možnosti dobrovolnických projektů v Evropě i mimo ni — od krátkodobých workcampů po dlouhodobé programy.",
    image: aboutImage,
    tag: "Dobrovolnictví",
  },
];

export const tagColors: Record<EventTag, string> = {
  "Studium v zahraničí": "bg-primary text-primary-foreground",
  "Práce v zahraničí": "bg-accent text-accent-foreground",
  "Dobrovolnictví": "bg-secondary text-secondary-foreground",
  "Prezentace na škole": "bg-muted text-foreground",
};