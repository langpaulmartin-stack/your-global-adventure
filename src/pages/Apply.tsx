import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { programs } from "./Programs";

const countries = [
  { value: "usa", label: "USA 🇺🇸", flag: "🇺🇸" },
  { value: "switzerland", label: "Švýcarsko 🇨🇭", flag: "🇨🇭" },
  { value: "germany", label: "Německo 🇩🇪", flag: "🇩🇪" },
  { value: "australia", label: "Austrálie 🇦🇺", flag: "🇦🇺" },
  { value: "estonia", label: "Estonsko 🇪🇪", flag: "🇪🇪" },
  { value: "japan", label: "Japonsko 🇯🇵", flag: "🇯🇵" },
  { value: "new-zealand", label: "Nový Zéland 🇳🇿", flag: "🇳🇿" },
  { value: "argentina", label: "Argentina 🇦🇷", flag: "🇦🇷" },
  { value: "uk", label: "Velká Británie 🇬🇧", flag: "🇬🇧" },
  { value: "ireland", label: "Irsko 🇮🇪", flag: "🇮🇪" },
];

const countryToSelectValue: Record<string, string> = {
  USA: "usa",
  Švýcarsko: "switzerland",
  Německo: "germany",
  Austrálie: "australia",
  Estonsko: "estonia",
  Japonsko: "japan",
  "Nový Zéland": "new-zealand",
  Argentina: "argentina",
  "Velká Británie": "uk",
  Irsko: "ireland",
};

const Apply = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get("program");
  const selectedProgram = useMemo(
    () => (programId ? programs.find((p) => p.id === programId) : undefined),
    [programId]
  );

  const queryCountry = searchParams.get("country") ?? "";
  const queryTitle = searchParams.get("title") ?? "";
  const queryPrice = searchParams.get("price") ?? "";

  const resolvedCountryValue = selectedProgram
    ? countryToSelectValue[selectedProgram.country] ?? ""
    : queryCountry
      ? countryToSelectValue[queryCountry] ?? (countries.some((c) => c.value === queryCountry) ? queryCountry : "")
      : "";

  const contextLabel = selectedProgram
    ? `${selectedProgram.country} – ${selectedProgram.type}`
    : queryTitle && queryCountry
      ? `${queryCountry} – ${queryTitle}`
      : queryTitle || (queryCountry || "");

  const contextMeta = selectedProgram
    ? `${selectedProgram.duration} · Termín odletu: ${selectedProgram.departure}`
    : "";

  const contextPrice = selectedProgram?.price || queryPrice;

  const showContext = Boolean(selectedProgram || queryTitle || queryCountry);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    zipCode: "",
    country: resolvedCountryValue,
    country2: "",
    duration: "",
    program: selectedProgram
      ? `${selectedProgram.country} – ${selectedProgram.type} (${selectedProgram.duration})`
      : queryTitle && queryCountry
        ? `${queryCountry} – ${queryTitle}`
        : queryTitle || "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_replyto", formData.email);
    data.append("_subject", "Nová přihláška – EduVentures");

    try {
      const response = await fetch("https://formspree.io/f/xwvzqkaq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Přihláška úspěšně odeslána! Brzy se vám ozveme.");
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("Odeslání se nezdařilo. Zkuste to prosím znovu.");
      }
    } catch {
      toast.error("Odeslání se nezdařilo. Zkuste to prosím znovu.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Zpět
          </Button>
          <div className="flex items-center gap-3">
            <SiteLogo className="h-24 w-auto" />
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* Application Form */}
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Přihlaste se dnes
          </h1>
          <p className="text-muted-foreground text-lg">
            Začněte svou cestu k nezapomenutelným zážitkům v zahraničí
          </p>
        </div>

        {showContext && (
          <div className="mb-6 rounded-2xl border border-primary/30 bg-primary/5 p-5 animate-fade-in">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">
              Vybraný program
            </p>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">
                  {contextLabel}
                </p>
                {contextMeta && (
                  <p className="text-sm text-muted-foreground">{contextMeta}</p>
                )}
              </div>
              {contextPrice && (
                <p className="text-2xl font-bold text-primary">{contextPrice}</p>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-card animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">Jméno</Label>
              <Input
                id="firstName"
                name="Jmeno"
                required
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Jan"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Příjmení</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Novák"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="jan.novak@example.com"
              />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefonní číslo</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+420 123 456 789"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Datum narození</Label>
              <Input
                id="dateOfBirth"
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresa</Label>
            <Input
              id="address"
              required
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Hlavní 123"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">Město</Label>
              <Input
                id="city"
                required
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Praha"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">PSČ</Label>
              <Input
                id="zipCode"
                required
                value={formData.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                placeholder="11000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Délka programu</Label>
            <Select value={formData.duration} onValueChange={(value) => handleChange("duration", value)} required>
              <SelectTrigger id="duration">
                <SelectValue placeholder="Vyberte délku programu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kratky">Krátký</SelectItem>
                <SelectItem value="semestralni">Semestrální</SelectItem>
                <SelectItem value="rocni">Roční</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Země (1.volba):</Label>
            <Select value={formData.country} onValueChange={(value) => handleChange("country", value)} required>
              <SelectTrigger id="country">
                <SelectValue placeholder="Vyberte zemi" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country2">Země (2.volba):</Label>
            <Select value={formData.country2} onValueChange={(value) => handleChange("country2", value)}>
              <SelectTrigger id="country2">
                <SelectValue placeholder="Vyberte zemi" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {(selectedProgram || queryTitle) && (
            <div className="space-y-2">
              <Label htmlFor="program">Vybraný program</Label>
              <Input
                id="program"
                value={formData.program}
                onChange={(e) => handleChange("program", e.target.value)}
                readOnly
                className="bg-muted"
              />
            </div>
          )}

          <Button type="submit" size="lg" className="w-full text-lg">
            Odeslat přihlášku
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Odesláním formuláře vyjadřujete souhlas se zpracováním osobních údajů dle{" "}
            <Link to="/zasady-ochrany-osobnich-udaju" className="text-primary underline hover:no-underline">
              Zásad ochrany osobních údajů
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Apply;
