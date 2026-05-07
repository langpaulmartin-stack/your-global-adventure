import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";
import { MobileMenu } from "@/components/MobileMenu";

const countries = [
  { value: "usa", label: "USA 🇺🇸", flag: "🇺🇸" },
  { value: "switzerland", label: "Švýcarsko 🇨🇭", flag: "🇨🇭" },
  { value: "germany", label: "Německo 🇩🇪", flag: "🇩🇪" },
  { value: "australia", label: "Austrálie 🇦🇺", flag: "🇦🇺" },
  { value: "estonia", label: "Estonsko 🇪🇪", flag: "🇪🇪" },
  { value: "japan", label: "Japonsko 🇯🇵", flag: "🇯🇵" },
  { value: "new-zealand", label: "Nový Zéland 🇳🇿", flag: "🇳🇿" },
  { value: "argentina", label: "Argentina 🇦🇷", flag: "🇦🇷" },
];

const Apply = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Přihláška úspěšně odeslána! Brzy se vám ozveme.");
    setTimeout(() => navigate("/"), 2000);
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
            <img src={logo} alt="Let's Go Abroad" className="h-24 w-auto" />
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

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-card animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">Jméno</Label>
              <Input
                id="firstName"
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
            <Label htmlFor="country">Země určení</Label>
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

          <Button type="submit" size="lg" className="w-full text-lg">
            Odeslat přihlášku
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
