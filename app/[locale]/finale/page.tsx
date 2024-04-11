import FinaleLayout from "@/components/FinaleLayout";
import { AppLocale } from "../locales";
import SplineAnimation from "@/components/SplineAnimation";


export default function contact({ params: { locale } }: { params: { locale: AppLocale } }) {
    return (
        <div className="z-0 pb-24 flex justify-center items-center md:h-screen px-6 xl:px-24 pt-36 lg:pt-44">
            <FinaleLayout />
            <SplineAnimation />
        </div>
    )
}