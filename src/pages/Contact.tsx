import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { SiteLogo } from "@/components/SiteLogo";
import { MobileMenu } from "@/components/MobileMenu";
import { ProgramsDropdown } from "@/components/ProgramsDropdown";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

const schema = z.object({
  name: z.string().trim().min(1, { message: "Jméno je povinné" }).max(100),
  email: z.string().trim().email({ message: "Zadejte platný e-mail" }).max(255),
  message: z.string().trim().min(1, { message: "Napište svůj dotaz" }).max(2000),
});

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [params] = useSearchParams();
  const country = params.get("country");
  const program = params.get("program");
  const consultant = params.get("consultant");

  const subject = consultant
    ? `Zpráva pro ${consultant}`
    : country
    ? `Mám otázku k zemi ${country}`
    : program
    ? `Mám otázku k programu ${program}`
    : "Mám otázku";

  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mdajdobb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: subject }),
      });
      if (!res.ok) throw new Error("Network error");
      toast({ title: "Děkujeme za zprávu!", description: "Ozveme se ti co nejdříve." });
      setData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Něco se pokazilo", description: "Zkus to prosím znovu.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <SiteLogo className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-base">
            <ProgramsDropdown />
            <Button variant="ghost" onClick={() => navigate("/work")}>Práce v zahraničí</Button>
            <Button variant="ghost" onClick={() => navigate("/kalendar")}>Kalendář</Button>
            <Button variant="ghost" onClick={() => navigate("/faq")}>FAQ</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>O nás</Button>
            <Button variant="ghost" onClick={() => navigate("/blog")}>Blog</Button>
            <Button onClick={() => navigate("/apply")} size="sm" className="bg-primary hover:bg-primary/90">Přihlásit se</Button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold">{subject}</h1>
              <p className="text-lg text-muted-foreground">
                Napiš nám krátkou zprávu a my se ti co nejdříve ozveme.
              </p>
            </div>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno</Label>
                    <Input id="name" name="name" value={data.name} onChange={handleChange} placeholder="Tvoje jméno" />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" value={data.email} onChange={handleChange} placeholder="tvuj@email.cz" />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tvůj dotaz</Label>
                    <Textarea id="message" name="message" value={data.message} onChange={handleChange} rows={5} placeholder="Na co se chceš zeptat?" />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Odesílám..." : "Odeslat dotaz"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Odesláním formuláře vyjadřujete souhlas se zpracováním osobních údajů dle{" "}
                    <Link to="/zasady-ochrany-osobnich-udaju" className="text-primary underline hover:no-underline">
                      Zásad ochrany osobních údajů
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;