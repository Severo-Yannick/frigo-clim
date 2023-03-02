import translations from "../data/translations.json"

type Locale = {
  locale: string;
}

type TranslationsData = {
  [key: string]: string;
}

export const Translations = ({ locale }: Locale): JSX.Element => {
  const localeTranslations: TranslationsData = translations as any;
  return <>
    <p>
      {localeTranslations[`${locale}_translation_1`]}
    </p>
    <p>
      {localeTranslations[`${locale}_translation_2`]}
    </p>
    <p className="read-the-docs">
      {localeTranslations[`${locale}_translation_3`]}
    </p>
    <p>
      {localeTranslations[`${locale}_translation_4`]}
    </p>
  </>
}