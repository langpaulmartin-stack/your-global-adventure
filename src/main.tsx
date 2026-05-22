import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Auto dark mode on mobile devices when the OS is set to dark mode.
// Desktop and tablet stay in the regular light theme.
const applyMobileDarkMode = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", isMobile && prefersDark);
};
applyMobileDarkMode();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyMobileDarkMode);
window.matchMedia("(max-width: 767px)").addEventListener("change", applyMobileDarkMode);

createRoot(document.getElementById("root")!).render(<App />);
