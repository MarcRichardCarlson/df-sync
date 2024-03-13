import { AppLocale } from "@/app/locales";

export default function contact({ params: { locale } }: { params: { locale: AppLocale } }) {
    return <div>contact: ({ locale })</div>
}