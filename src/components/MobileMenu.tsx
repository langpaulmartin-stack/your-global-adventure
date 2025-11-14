import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MobileMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
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
            className="justify-start text-lg"
            onClick={() => handleNavigation("/programs")}
          >
            Nabídka programů
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => handleNavigation("/work")}
          >
            Práce v zahraničí
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => handleNavigation("/faq")}
          >
            Časté dotazy
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => handleNavigation("/about")}
          >
            O nás
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg"
            onClick={() => handleNavigation("/blog")}
          >
            Blog
          </Button>
          <Button
            className="justify-start text-lg mt-4"
            onClick={() => handleNavigation("/apply")}
          >
            Přihláška
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
