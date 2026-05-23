import logo from "@/assets/logo.png";

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
      src={logo}
      alt="Let's Go Abroad"
      className={`${className} hidden dark:block`.trim()}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  </>
);
