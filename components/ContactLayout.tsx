"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React from 'react'
import Link from "next/link";
import SendButton from "../components/contact-form/SendButton";
import ContactInput from "../components/contact-form/ContactInput";


const ContactLayout = () => {
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");

  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-0 lg:gap-8 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-0 sm:p-6 md:p-8">
        
        <div className="flex flex-col gap-8 md:gap-6 justify-between w-full md:w-1/2 p-6 md:p-8">
            <div className="flex flex-col gap-2 w-full">
                <span className="text-3xl text-CustomWhite">{t("contact-header")}</span>
                <span className="leading-5 text-CustomWhite">{t("contact-header-text")}</span>
            </div>
            
            <div className="w-full flex flex-col gap-4 md:gap-8 text-CustomWhite">
                
                <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-xs">{t("contact-icon-phone")}</span>
                    <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="0706323610">{t("contact-icon-phone-link")}</Link>
                </div>

                <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-xs">{t("contact-icon-email")}</span>
                    <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.gmail.com">{t("contact-icon-email-link")}</Link>
                </div>

                <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-xs">{t("contact-icon-instagram")}</span>
                    <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.instagram.com/marcrcarlson">{t("contact-icon-instagram-link")}</Link>
                </div>

                <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-xs">{t("contact-icon-facebook")}</span>
                    <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.facebook.com/marc.carlson/">{t("contact-icon-facebook-link")}</Link>
                </div>

                <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-xs">{t("contact-icon-linkedin")}</span>
                    <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.linkedin.com/marcrcarlson">{t("contact-icon-linkedin-link")}</Link>
                </div>

                <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-xs">{t("contact-icon-github")}</span>
                    <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://github.com/Marccarlson117">{t("contact-icon-github-link")}</Link>
                </div>
            </div>
        </div>

        <div className="overflow-hidden w-full lg:w-3/5 flex flex-col justify-center items-center gap-4 md:gap-8 p-6 md:p-8 text-CustomWhite">

            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
                <div className="flex flex-col gap-2">
                    <span>{t("contact-title-name")}</span>
                    <input className="w-full p-3 rounded-md text-CustomBlack" type="text" placeholder={t("contact-placeholder-name")} />
                </div>

                <div className="flex flex-col gap-2">    
                    <span>{t("contact-title-email")}</span>
                    <input className="w-full p-3 rounded-md text-CustomBlack" type="email" placeholder={t("contact-placeholder-email")} />
                </div>

                <div className="flex flex-col gap-2">
                    <span>{t("contact-title-subject")}</span>
                    <input className="w-full p-3 rounded-md text-CustomBlack" type="text" placeholder={t("contact-placeholder-subject")} />
                </div>
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-2 min-h-48">
                    <span>{t("contact-title-textarea")}</span>
                    <textarea className="w-full p-3 rounded-md text-CustomBlack" placeholder={t("contact-placeholder-textarea")} rows={5}></textarea>
                </div>

                <ContactInput />
                
                <SendButton />
            </div>

        </div>
    </div>
  )
}

export default ContactLayout