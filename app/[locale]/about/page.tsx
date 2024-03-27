import AboutLayout from "@/components/AboutLayout";
import { AppLocale } from "../locales";

export default function About(params: { locale: AppLocale }) {
  return (
    <div className="overflow-y-auto px-24 pt-48 pb-16 flex justify-center items-center">
        <AboutLayout />
    </div>
  );
}
