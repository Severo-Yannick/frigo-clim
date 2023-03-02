export const FR: string = "FR",
  EN: string = "EN",
  ES: string = "ES",
  SH: string = "SH";

interface Locales {
  name: string;
  flag: string;
}

export const locales: Locales[] = [
  { name: FR, flag: "🇫🇷" },
  { name: EN, flag: "🇬🇧" },
  { name: ES, flag: "🇪🇸" },
  { name: SH, flag: "🇨🇳" },
];
