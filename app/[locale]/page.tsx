import { notFound } from "next/navigation";
import { AppLocale } from "./locales";
import { APP_LOCALES } from "./constants";
import Main from "./main";

export default async function Home({
  params: { locale },
}: {
  params: { locale: AppLocale };
}) {
  // in normal cases, locale should be a valid locale
  // but sometimes it's not so we should just return 404
  if (!APP_LOCALES.includes(locale)) return notFound();
  return (
    <div>
      <Main locale={locale} />
    </div>
  );
}
