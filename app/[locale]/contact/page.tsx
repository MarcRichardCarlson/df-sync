import ContactLayout from "@/components/ContactLayout";
import { AppLocale } from "../locales";

export default function contact({ params: { locale } }: { params: { locale: AppLocale } }) {
    return (
        <div className="pb-44 md:pb-36 flex justify-center items-center px-6 xl:px-24 pt-36 lg:pt-44">
            <ContactLayout />
        </div>
    )
}