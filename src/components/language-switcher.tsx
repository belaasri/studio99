
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";

const languageNames: Record<Locale, string> = {
    en: "English",
    de: "German",
    es: "Spanish",
    fr: "French",
    ja: "Japanese",
    ko: "Korean",
    ar: "Arabic",
    cs: "Czech",
    el: "Greek",
    fa: "Persian",
    hi: "Hindi",
    hu: "Hungarian",
    id: "Indonesian",
    it: "Italian",
    ms: "Malay",
    nl: "Dutch",
    pl: "Polish",
    pt: "Portuguese",
    ro: "Romanian",
    ru: "Russian",
    sr: "Serbian",
    sv: "Swedish",
    th: "Thai",
    tr: "Turkish",
    vi: "Vietnamese",
    zh: "Chinese",
};


export function LanguageSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <a href={redirectedPathName(locale)}>{languageNames[locale]}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
