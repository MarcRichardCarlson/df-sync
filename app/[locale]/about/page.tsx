import AboutLayout from "@/components/AboutLayout";
import { AppLocale } from "../locales";

export default function About(params: { locale: AppLocale }) {
  return (
    <div className="overflow-y-auto pb-16 flex justify-center items-center px-6 pt-36 md:px-24 md:pt-44">
      <AboutLayout />
    </div>
  );
}
