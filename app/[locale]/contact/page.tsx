import ContactLayout from "@/components/ContactLayout";
import { AppLocale } from "../locales";

export default function contact({ params: { locale } }: { params: { locale: AppLocale } }) {
    return (
        <div className="overflow-y-auto px-24 pt-48 pb-16 flex justify-center items-center">
            <ContactLayout />
        </div>
    )
}