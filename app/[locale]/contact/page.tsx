import { AppLocale } from "../locales";

export default function contact({ params: { locale } }: { params: { locale: AppLocale } }) {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <h1 className="text-CustomWhite text-6xl">Contact</h1>
        </div>
    )
}