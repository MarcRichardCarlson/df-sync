import { AppLocale } from "../locales";
import MarqueeScroll from "@/components/Marquee";

export default function About(params: { locale: AppLocale }) {
  return (
    <div className="relative bottom-1">
        <MarqueeScroll />
    </div>
  );
}
