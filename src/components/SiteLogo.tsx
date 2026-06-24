import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

interface SiteLogoProps {
  className?: string;
}

export const SiteLogo = ({ className = "" }: SiteLogoProps) => (
  <>
    <img
      src={logo}
      alt="Studuj v zahraničí"
      className={`${className} dark:hidden`.trim()}
    />
    <img
      src={logoWhite}
      alt="Studuj v zahraničí"
      className={`${className} hidden dark:block`.trim()}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  </>
);

