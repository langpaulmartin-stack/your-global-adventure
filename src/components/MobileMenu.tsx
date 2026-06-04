import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MobileMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden h-15 w-15 [&_svg]:size-9">
          <Menu className="h-9 w-9" />
          <span className="sr-only">Otevřít menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Button
            variant="ghost"
            className="justify-between text-2xl font-semibold py-7"
            onClick={() => setProgramsOpen((v) => !v)}
          >
            <span>Studium v zahraničí</span>
            <ChevronDown className={`h-6 w-6 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
          </Button>
          {programsOpen && (
          <div className="pl-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="justify-start text-xl py-6"
              onClick={() => handleNavigation("/programs")}
            >
              Všechny programy
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-xl py-6"
              onClick={() => handleNavigation("/kratke-programy")}
            >
              Krátké programy
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-xl py-6"
              onClick={() => handleNavigation("/semestralni-programy")}
            >
              Semestrální programy
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-xl py-6"
              onClick={() => handleNavigation("/rocni-programy")}
            >
              Roční programy
            </Button>
          </div>
          )}
          <Button
            variant="ghost"
            className="justify-start text-2xl py-7"
            onClick={() => handleNavigation("/work")}
          >
            Práce v zahraničí
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-2xl py-7"
            onClick={() => handleNavigation("/kalendar")}
          >
            Kalendář
          </Button>
            <Button
              variant="ghost"
              className="justify-start text-2xl py-7"
              onClick={() => handleNavigation("/faq")}
            >
              Časté dotazy
            </Button>
          <Button
            variant="ghost"
            className="justify-start text-2xl py-7"
            onClick={() => handleNavigation("/about")}
          >
            O nás
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-2xl py-7"
            onClick={() => handleNavigation("/blog")}
          >
            Blog
          </Button>
          <Button
            className="justify-start text-2xl py-7 mt-4"
            onClick={() => handleNavigation("/apply")}
          >
            Přihláška
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
