import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "darkModeOverride";

export const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(() => {
    const override = localStorage.getItem(STORAGE_KEY);
    if (override === "off") return false;
    if (override === "on") return true;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const handler = () => {
      const override = localStorage.getItem(STORAGE_KEY);
      if (override === "off") {
        setEnabled(false);
      } else if (override === "on") {
        setEnabled(true);
      } else {
        setEnabled(document.documentElement.classList.contains("dark"));
      }
    };
    window.addEventListener("darkmode-change", handler);
    return () => window.removeEventListener("darkmode-change", handler);
  }, []);

  const toggle = (checked: boolean) => {
    if (checked) {
      localStorage.setItem(STORAGE_KEY, "on");
    } else {
      localStorage.setItem(STORAGE_KEY, "off");
    }
    window.dispatchEvent(new Event("darkmode-change"));
    setEnabled(checked);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch id="dark-mode-toggle" checked={enabled} onCheckedChange={toggle} />
      <Label htmlFor="dark-mode-toggle" className="text-primary-foreground/90 cursor-pointer">
        Tmavý režim
      </Label>
    </div>
  );
};
