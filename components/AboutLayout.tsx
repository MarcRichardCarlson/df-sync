"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React from "react";
import Image from "next/image";
import PlaceholderImage from "../public/assets/pexels-marc-mueller-380768.jpg";
import PlaceholderImage2 from "../public/assets/pexels-cowomen-2041627.jpg";
import dynamic from "next/dynamic";
import TextWrapper from "./TextWrapper";

const MarqueeScroll = dynamic(() => import("@/components/Marquee"), {
  ssr: false,
});

const AboutLayout = () => {
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, "translation");

  return (
    <div className="w-full h-full flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-4 md:gap-6 md:flex md:flex-row">
          <div className="overflow-hidden flex flex-col gap-0 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 text-CustomWhite w-full md:w-3/5 py-4 px-6 md:p-8 md:gap-4">
              <span className="text-2xl lg:text-3xl font-semibold text-CustomWhite">
                  {t("about-blurb-header")}
              </span>
              <TextWrapper>
                  <span className="text-md md:text-lg">{t("about-blurb-text")}</span>
              </TextWrapper>
          </div>

          <div className="overflow-hidden w-full flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-6 md:p-8 text-CustomWhite">
              <span className="text-2xl font-semibold text-CustomWhite">
                  {t("about-overview-header")}
              </span>
              <TextWrapper>
                <span className="text-md md:text-lg">{t("about-overview-text")}</span>
              </TextWrapper>
          </div>
      </div>

      <div className="flex flex-col w-full gap-4 md:gap-6 lg:flex-row">
          <Image
          className="w-full lg:w-1/2 rounded-md"
          src={PlaceholderImage}
          alt="Share Icon"
          style={{ objectFit: "cover"}}
          />

          <div className="overflow-hidden w-full flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-6 md:p-8 text-CustomWhite">
            <span className="flex gap-4 md:gap-6 text-2xl md:text-3xl font-semibold text-CustomWhite">
                {t("about-description-header")}
            </span>
            <div className="h-1/3">
                <TextWrapper>
                <span className="text-md md:text-lg">{t("about-description-text")}</span>
                </TextWrapper>
            </div>
            <div className="h-1/3">
                <TextWrapper>
                <span className="text-md md:text-lg">{t("about-description-text-2")}</span>
                </TextWrapper>
            </div>
            <div className="h-1/3">
                <TextWrapper>
                <span className="text-md md:text-lg">{t("about-description-text-3")}</span>
                </TextWrapper>
            </div>
          </div>
      </div>

      <div className="flex border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 py-0 md:py-6 text-CustomWhite">
        <MarqueeScroll />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row md:gap-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-6 md:p-8 text-CustomWhite">
            <span className="text-2xl md:text-3xl font-semibold text-CustomWhite">
                {t("about-additional-header")}
            </span>
            <TextWrapper>
              <span className="text-md md:text-lg">{t("about-additional-text")}</span>
            </TextWrapper>

            <span className="text-xl md:text-2xl font-semibold text-CustomWhite">
                {t("about-additional-header-2")}
            </span>
            <TextWrapper>
              <span className="text-md md:text-lg">{t("about-additional-text-2")}</span>
            </TextWrapper>
        </div>

        <Image
          className="w-full lg:w-1/2 rounded-md"
          src={PlaceholderImage2}
          alt="Share Icon"
          style={{ objectFit: "cover"}}
        />
      </div>
    </div>
  );
};

export default AboutLayout;
