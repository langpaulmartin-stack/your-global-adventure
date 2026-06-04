import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookieConsent";
const OPEN_EVENT = "open-cookie-settings";

export type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export const getStoredConsent = (): CookiePrefs | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePrefs) : null;
  } catch {
    return null;
  }
};

export const openCookieSettings = () => {
  window.dispatchEvent(new Event(OPEN_EVENT));
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }
    const openHandler = () => {
      const s = getStoredConsent();
      if (s) {
        setAnalytics(s.analytics);
        setMarketing(s.marketing);
      }
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_EVENT, openHandler);
  }, []);

  const save = (prefs: { analytics: boolean; marketing: boolean }) => {
    const data: CookiePrefs = {
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: data }));
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Nastavení souborů cookie"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card text-card-foreground shadow-2xl">
        <div className="p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Používáme soubory cookie
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            K provozu webu používáme nezbytné cookies. S vaším souhlasem také
            analytické a marketingové cookies, které nám pomáhají web zlepšovat
            a zobrazovat relevantní obsah. Souhlas můžete kdykoli změnit nebo
            odvolat v patičce webu. Více v{" "}
            <Link
              to="/zasady-ochrany-osobnich-udaju"
              className="text-primary underline underline-offset-2"
            >
              Zásadách ochrany osobních údajů
            </Link>
            .
          </p>

          {showDetails && (
            <div className="space-y-3 mb-4 border-t border-border pt-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Label className="font-medium">Nezbytné</Label>
                  <p className="text-xs text-muted-foreground">
                    Potřebné pro fungování webu. Nelze vypnout.
                  </p>
                </div>
                <Switch checked disabled />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Label htmlFor="cc-analytics" className="font-medium">
                    Analytické
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Pomáhají nám měřit návštěvnost a vylepšovat web.
                  </p>
                </div>
                <Switch
                  id="cc-analytics"
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Label htmlFor="cc-marketing" className="font-medium">
                    Marketingové
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Slouží k zobrazování relevantních reklam a obsahu.
                  </p>
                </div>
                <Switch
                  id="cc-marketing"
                  checked={marketing}
                  onCheckedChange={setMarketing}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
            <Button
              variant="outline"
              onClick={() => save({ analytics: false, marketing: false })}
            >
              Odmítnout vše
            </Button>
            {!showDetails ? (
              <Button variant="outline" onClick={() => setShowDetails(true)}>
                Nastavení
              </Button>
            ) : (
              <Button variant="outline" onClick={() => save({ analytics, marketing })}>
                Uložit volbu
              </Button>
            )}
            <Button onClick={() => save({ analytics: true, marketing: true })}>
              Přijmout vše
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};