"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React, { useState, ChangeEvent } from 'react';
import Link from "next/link";
import SendButton from "../components/contact-form/SendButton";
import ContactInput from "../components/contact-form/ContactInput";
import InputWrapper from "./InputWrapper";

interface ContactProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}
const ContactLayout = () => {
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");

    const [formState, setFormState] = useState<ContactProps>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
        console.log(value)
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

  return (
    <div className="flex flex-col gap-6 h-full">
        <div className="w-full flex flex-col md:flex-row gap-0 lg:gap-8 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-0 sm:p-6 md:p-8">
            
            <div className="flex flex-col gap-8 md:gap-6 justify-between w-full md:w-1/2 p-6 md:p-8">
                <div className="flex flex-col gap-6 w-full">
                    <span className="text-5xl text-CustomWhite font-semibold">{t("contact-header")}</span>
                    <span className="leading-5 text-CustomWhite">{t("contact-header-text")}</span>
                </div>
                
                <div className="w-full flex justify-between gap-4 md:gap-8 text-CustomWhite">

                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-semibold">{t("contact-icon-contact")}</span>
                        <div className="flex flex-col gap-2">
                            <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.gmail.com">{t("contact-icon-email-link")}</Link>
                            <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="0706323610">{t("contact-icon-phone-link")}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full lg:w-3/5 flex flex-col justify-start items-start gap-4 md:gap-8 p-6 md:p-8 text-CustomWhite">

                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
                    <div className="flex flex-col gap-2">
                        <span>{t("contact-title-name")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-name")}>
                        <input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15"
                            type="text"
                        />
                        </InputWrapper>
                    </div>

                    <div className="flex flex-col gap-2">    
                        <span>{t("contact-title-email")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-email")}>
                        <input
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15"
                            type="email"
                        />
                        </InputWrapper>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span>{t("contact-title-subject")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-subject")}>
                        <input
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15"
                            type="text"
                        />
                        </InputWrapper>
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-2 min-h-48">
                        <span>{t("contact-title-textarea")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-textarea")}>
                        <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            className="max-h-[270px] min-h-[100px] w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15"
                            rows={5}
                        ></textarea>
                        </InputWrapper>
                    </div>

                    <ContactInput />
                    
                    <SendButton onSubmit={handleSubmit}/>
                </div>

            </div>
        </div>
        <div className="flex items-center justify-center gap-16 text-CustomWhite">
            <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.facebook.com/marc.carlson/">{t("contact-icon-facebook-link")}</Link>
            <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.linkedin.com/marcrcarlson">{t("contact-icon-linkedin-link")}</Link>
            <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://github.com/Marccarlson117">{t("contact-icon-github-link")}</Link>
            <Link className="text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.instagram.com/marcrcarlson">{t("contact-icon-instagram-link")}</Link>
        </div>
    </div>    
  )
}

export default ContactLayout