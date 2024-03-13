import { AppLocale } from "@/app/locales";

export default function about({ params: { locale } }: { params: { locale: AppLocale } }) {
    return <div>about: ({ locale })</div>
}