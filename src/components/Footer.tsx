import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import { DarkModeToggle } from "./DarkModeToggle";
import { openCookieSettings } from "./CookieConsent";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src={logoWhite}
            alt="Studuj v zahraničí"
            className="h-56 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <p className="italic text-primary-foreground/90 mb-6">
          Vydej se neprošlapanou cestou...
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => navigate("/programs")}
          >
            Studium v zahraničí
          </Button>
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => navigate("/work")}
          >
            Práce v zahraničí
          </Button>
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => navigate("/kalendar")}
          >
            Kalendář
          </Button>
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => navigate("/about")}
          >
            O nás
          </Button>
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => navigate("/blog")}
          >
            Blog
          </Button>
        </div>
        <div className="flex justify-center mb-6">
          <DarkModeToggle />
        </div>
        <p className="text-sm text-primary-foreground/80">
          © {new Date().getFullYear()} Studuj v zahraničí. FLAG Intl. Czech Republic. EduVentures, s.r.o. Bořivojova 17, 130 00 Praha 3. Všechna práva vyhrazena.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs text-primary-foreground/60">
          <button
            type="button"
            onClick={() => navigate("/zasady-ochrany-osobnich-udaju")}
            className="hover:text-primary-foreground underline underline-offset-2"
          >
            Zásady ochrany osobních údajů
          </button>
          <button
            type="button"
            onClick={openCookieSettings}
            className="hover:text-primary-foreground underline underline-offset-2"
          >
            Nastavení cookies
          </button>
        </div>
      </div>
    </footer>
  );
};
