import ContactLayout from "@/components/ContactLayout";
import { AppLocale } from "../locales";

export default function contact({ params: { locale } }: { params: { locale: AppLocale } }) {
    return (
        <div className="pb-36 flex justify-center items-center h-screen px-6 pt-36 md:px-24 lg:pt-44">
            <ContactLayout />
        </div>
    )
}