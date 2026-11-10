import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProgramsDropdownProps {
  isActive?: boolean;
}

export const ProgramsDropdown = ({ isActive = false }: ProgramsDropdownProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`text-[1.3125rem] ${isActive ? "text-primary font-medium" : ""}`}
          onMouseEnter={() => setOpen(true)}
          onClick={() => {
            setOpen(false);
            navigate("/programs");
          }}
        >
          Studium v zahraničí
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-auto min-w-[16rem]"
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuItem
          className="cursor-pointer text-[1.3125rem] py-2"
          onClick={() => navigate("/kratke-programy")}
        >
          Krátké programy
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[1.3125rem] py-2"
          onClick={() => navigate("/semestralni-programy")}
        >
          Semestrální programy
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[1.3125rem] py-2"
          onClick={() => navigate("/rocni-programy")}
        >
          Roční programy
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[1.3125rem] py-2"
          onClick={() => navigate("/faq")}
        >
          Časté dotazy
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
