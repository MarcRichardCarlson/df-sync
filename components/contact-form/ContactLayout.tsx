"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React from 'react'
import Image from 'next/image';
import ContactIconPhone from "../public/assets/CarbonPhoneVoiceFilled.svg"
import ContactIconEmail from "../public/assets/IcBaselineAlternateEmail.svg"
import ContactIconInstagram from "../public/assets/SimpleIconsInstagram.svg"
import ContactIconFacebook from "../public/assets/FeFacebook.svg"
import ContactIconLinkedIn from "../public/assets/SimpleIconsLinkedin.svg"
import ContactIconGitHub from "../public/assets/SimpleIconsGithub.svg"
import QuestionsWrapper from "../../components/QuestionsWrapper";
import Link from "next/link";
import SendButton from "./SendButton";
import ContactInput from "./ContactInput";


const ContactLayout = () => {
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");

  return (
    <div className="h-full w-full flex gap-12 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10">
        <div className="overflow-hidden w-1/2 flex flex-col gap-16 px-8 py-6 text-CustomWhite">

            <div className="flex flex-col gap-2 w-full mb-16">
                <span className="text-3xl text-CustomWhite">{t("contact-header")}</span>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-header-text")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
            
            <div className="flex gap-4 items-center w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconPhone} alt="Phone Icon" style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}/>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-phone")}</span>
                        <Link className="whitespace-nowrap cursor-pointer text-indigo-200 hover:text-indigo-400 underline" href="0706323610">{t("contact-icon-phone-link")}</Link>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconEmail} alt="Email Icon" style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}/>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-email")}</span>
                        <Link className="cursor-pointer text-indigo-200 hover:text-indigo-400 underline" href="https://www.instagram.com/marcrcarlson">{t("contact-icon-email-link")}</Link>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconInstagram} alt="Instagram Icon" style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}/>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-instagram")}</span>
                        <Link className="cursor-pointer text-indigo-200 hover:text-indigo-400 underline" href="https://www.instagram.com/marcrcarlson">{t("contact-icon-instagram-link")}</Link>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconFacebook} alt="Facebook Icon" style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}/>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-facebook")}</span>
                        <Link className="cursor-pointer text-indigo-200 hover:text-indigo-400 underline" href="https://www.facebook.com/marc.carlson/">{t("contact-icon-facebook-link")}</Link>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconLinkedIn} alt="LinkedIn Icon" style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}/>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-linkedin")}</span>
                        <Link className="cursor-pointer text-indigo-200 hover:text-indigo-400 underline" href="https://www.linkedin.com/marcrcarlson">{t("contact-icon-linkedin-link")}</Link>
                    </QuestionsWrapper>
                </div>
            </div>
            <div className="flex gap-4 items-center w-full">
                <Image className="w-12 h-12 rounded-md" src={ContactIconGitHub} alt="Github Icon" style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}/>
                <div className="relative h-full">
                    <QuestionsWrapper>
                        <span>{t("contact-icon-github")}</span>
                        <Link className="cursor-pointer text-indigo-200 hover:text-indigo-400 underline" href="https://github.com/Marccarlson117">{t("contact-icon-github-link")}</Link>
                    </QuestionsWrapper>
                </div>
            </div>
        </div>


        <div className="overflow-hidden w-1/2 flex flex-col gap-24 px-8 py-6 text-CustomWhite">

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

            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 min-h-48">
                    <span>{t("contact-title-textarea")}</span>
                    <div className="relative">
                        <QuestionsWrapper>
                            <textarea className="w-full p-6 rounded-md text-CustomBlack" placeholder={t("contact-placeholder-textarea")} rows={5}></textarea>
                        </QuestionsWrapper>
                    </div>
                </div>

                <ContactInput />
                
                <SendButton />
            </div>

        </div>
    </div>
  )
}

export default ContactLayout