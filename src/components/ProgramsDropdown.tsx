import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`text-base gap-1 ${isActive ? "text-primary font-medium" : ""}`}
        >
          Nabídka programů
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
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
