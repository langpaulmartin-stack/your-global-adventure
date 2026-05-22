import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const STORAGE_KEY = "darkModeOverride";

const applyMobileDarkMode = () => {
  const override = localStorage.getItem(STORAGE_KEY);
  if (override === "off") {
    document.documentElement.classList.remove("dark");
    return;
  }
  if (override === "on") {
    document.documentElement.classList.add("dark");
    return;
  }
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", isMobile && prefersDark);
};

applyMobileDarkMode();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyMobileDarkMode);
window.matchMedia("(max-width: 767px)").addEventListener("change", applyMobileDarkMode);
window.addEventListener("darkmode-change", applyMobileDarkMode);

createRoot(document.getElementById("root")!).render(<App />);

