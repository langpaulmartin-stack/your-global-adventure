import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

interface SiteLogoProps {
  className?: string;
}

export const SiteLogo = ({ className = "" }: SiteLogoProps) => (
  <>
    <img
      src={logo}
      alt="Let's Go Abroad"
      className={`${className} dark:hidden`.trim()}
    />
    <img
      src={logoWhite}
      alt="Let's Go Abroad"
      className={`${className} hidden dark:block`.trim()}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  </>
);
