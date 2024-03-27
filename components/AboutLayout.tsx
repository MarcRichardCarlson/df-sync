"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React from 'react'
import Image from 'next/image';
import PlaceholderImage from "../public/assets/pexels-marc-mueller-380768.jpg"
import PlaceholderImage2 from "../public/assets/pexels-cowomen-2041627.jpg"
import QuestionsWrapper from "./QuestionsWrapper";
import dynamic from 'next/dynamic'

const MarqueeScroll = dynamic(() => import('@/components/Marquee'), { ssr: false })

const AboutLayout = () => {
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");

  return (
    <div className="h-full flex flex-col gap-6 pb-36">

        <div className="flex gap-6">

            <div className="overflow-hidden min-h-48 w-2/5 flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 px-8 py-6 text-CustomWhite">
                <span className="text-3xl text-CustomWhite">{t("about-blurb-header")}</span>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("about-blurb-text")}</span>
                    </QuestionsWrapper>
                </div>
            </div>

            <div className="overflow-hidden min-h-48 w-full flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 px-8 py-6 text-CustomWhite">
                <span className="text-2xl text-CustomWhite">{t("about-overview-header")}</span>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("about-overview-text")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
        </div>
        

        <div className="flex w-full gap-6">
            <Image className="w-1/2 rounded-md" src={PlaceholderImage} alt="Share Icon"/>
            <div className="overflow-hidden w-1/2 flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 px-8 py-6 text-CustomWhite">
                <span className="flex gap-6 text-2xl text-CustomWhite">{t("about-description-header")}</span>
                <div className="relative h-1/2">
                    <QuestionsWrapper>
                        <span>{t("about-description-text")}</span>
                    </QuestionsWrapper>
                </div>
                <div className="relative h-1/2">
                    <QuestionsWrapper>
                        <span>{t("about-description-text-2")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
        </div>

        <div className="flex border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 py-6 text-CustomWhite">
            <MarqueeScroll />
        </div>

        <div className="flex gap-6">
            <div className="w-1/2 flex flex-col gap-4 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 px-8 py-6 text-CustomWhite">
                <span className="text-2xl text-CustomWhite">{t("about-description-footer-header")}</span>
                <span>{t("about-description-footer-text")}</span>
            </div>
            <Image className="w-1/2 rounded-md" src={PlaceholderImage2} alt="Share Icon"/>
        </div>
    </div>
  )
}

export default AboutLayout