"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React from 'react'
import Image from 'next/image';
import ContactIconPapperclip from "../public/assets/HeroiconsPaperClipSolid.svg"
import ContactIconPhone from "../public/assets/CarbonPhoneVoiceFilled.svg"
import ContactIconEmail from "../public/assets/IcBaselineAlternateEmail.svg"
import ContactIconInstagram from "../public/assets/SimpleIconsInstagram.svg"
import ContactIconFacebook from "../public/assets/FeFacebook.svg"
import ContactIconLinkedIn from "../public/assets/SimpleIconsLinkedin.svg"
import ContactIconGitHub from "../public/assets/SimpleIconsGithub.svg"
import QuestionsWrapper from "./QuestionsWrapper";
import Link from "next/link";


const ContactLayout = () => {
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");

  return (
    <div className="h-full w-full flex gap-12">
        <div className="overflow-hidden w-1/2 flex flex-col gap-16 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 px-8 py-6 text-CustomWhite">

            <div className="flex flex-col gap-2 w-full">
                <span className="text-3xl text-CustomWhite">{t("contact-header")}</span>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-header-text")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
            
            <div className="flex gap-2 w-full">
                <div className="p-2 cursor-pointer rounded-md">
                    <Image className="w-12 h-12 rounded-md" src={ContactIconPhone} alt="Phone Icon"/>
                </div>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-phone")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <div className="p-2 cursor-pointer rounded-md">
                    <Image className="w-12 h-12 rounded-md" src={ContactIconEmail} alt="Email Icon"/>
                </div>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-email")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <div className="p-2 cursor-pointer rounded-md">
                    <Image className="w-12 h-12 rounded-md" src={ContactIconInstagram} alt="Instagram Icon"/>
                </div>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-instagram")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconFacebook} alt="Facebook Icon"/>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-facebook")}</span>
                        <Link href="https://www.facebook.com/marc.carlson/"></Link>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconLinkedIn} alt="LinkedIn Icon"/>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-linkedin")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconGitHub} alt="Github Icon"/>
                <div className="relative">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-github")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
        </div>


        <div className="overflow-hidden w-1/2 flex flex-col gap-24 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 px-8 py-6 text-CustomWhite">

            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-2">
                    <span>{t("contact-title-name")}</span>
                    <div className="relative">
                        <QuestionsWrapper>
                            <input className="w-full p-3 rounded-md text-CustomBlack" type="text" placeholder={t("contact-placeholder-name")} />
                        </QuestionsWrapper>
                    </div>
                </div>

                <div className="flex flex-col gap-2">    
                    <span>{t("contact-title-email")}</span>
                    <div className="relative">
                        <QuestionsWrapper>
                            <input className="w-full p-3 rounded-md text-CustomBlack" type="email" placeholder={t("contact-placeholder-email")} />
                        </QuestionsWrapper>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span>{t("contact-title-subject")}</span>
                    <div className="relative">
                        <QuestionsWrapper>
                            <input className="w-full p-3 rounded-md text-CustomBlack" type="text" placeholder={t("contact-placeholder-subject")} />
                        </QuestionsWrapper>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 min-h-64">
                <span>{t("contact-title-textarea")}</span>
                <div className="relative">
                    <QuestionsWrapper>
                        <textarea className="w-full p-6 rounded-md text-CustomBlack" placeholder={t("contact-placeholder-textarea")} rows={5}></textarea>
                    </QuestionsWrapper>
                </div>
            </div>

            <Image className="w-12 h-12 rounded-md" src={ContactIconPapperclip} alt="Share Icon"/>
        </div>
    </div>
  )
}

export default ContactLayout