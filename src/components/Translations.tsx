import translations from "../data/translations.json"

type Locale = {
  locale: string;
}

export const Translations = ({ locale }: Locale): JSX.Element => {
  return <>
    <p>
      {translations[`${locale}_translation_1`]}
    </p>
    <p>
      {translations[`${locale}_translation_2`]}
    </p>
    <p className="read-the-docs">
      {translations[`${locale}_translation_3`]}
    </p>
    <p>
      {translations[`${locale}_translation_4`]}
    </p>
  </>
}