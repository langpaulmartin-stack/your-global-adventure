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
          className={`text-base ${isActive ? "text-primary font-medium" : ""}`}
          onMouseEnter={() => setOpen(true)}
        >
          Nabídka programů
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-56"
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuItem
          className="cursor-pointer text-sm py-2"
          onClick={() => navigate("/programs?type=short")}
        >
          Krátké programy
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm py-2"
          onClick={() => navigate("/programs?type=semester")}
        >
          Semestrální programy
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm py-2"
          onClick={() => navigate("/programs?type=year")}
        >
          Roční programy
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
