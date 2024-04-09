"use client";

import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import React, { useState, useRef } from 'react';
import Link from "next/link";
import SendButton from "../components/contact-form/SendButton";
import InputWrapper from "./InputWrapper";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactIconPapperclip from "../public/assets/HeroiconsPaperClipSolid.svg";
import CloseIcon from "../public/assets/IcRoundClose.svg";
import Image from 'next/image';
import QuestionsWrapper from "./QuestionsWrapper";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    attachment?: FileList;
}

const ContactLayout = () => {
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    //Zod formData schema
    const schema: ZodType<FormData> = z
    .object({
        name: z.string().min(2).max(30),
        email: z.string().email(),
        subject: z.string().min(2).max(60),
        message: z.string(),
        attachment: z.any().optional(),
    })

    //Connecting Zod(validation) with react-hook-form
    const { 
        register,
        handleSubmit,
        reset,
        formState: { errors, touchedFields }
    } = useForm<FormData>({
         resolver: zodResolver(schema),
         mode: 'onChange',
    }) 

    const submitData = async (data: FormData) => {
        console.log("Form Data:", data);

        // Manually check if attachment is a FileList
        if (data.attachment && !(data.attachment instanceof FileList)) {
            console.error("Attachment is not a FileList.");
            // Handle the error appropriately
            // For example, you might want to stop the submission or remove the attachment from data
            return; // Stop the function execution if attachment is not valid
        }
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const responseData = await response.json();
            console.log('Success:', responseData);

            // Clear the form fields
            reset(); 
            setFileName(""); // Also clear the file name state
            setShowSuccessMessage(true); // Show success message

            // Optionally, hide the success message after a few seconds
            setTimeout(() => setShowSuccessMessage(false), 5000);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            console.log("button has been clicked");
        }
    };
    
    const handleRemoveFile = () => {
        setFileName("");
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset the file input
        }
    };

  return (
    <div className="flex flex-col gap-6 w-full">
        <div className="w-full flex flex-col md:flex-row gap-0 lg:gap-8 border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-0 sm:p-6 md:p-8">
            
            <div className="flex flex-col gap-6 justify-between w-full md:w-1/2 p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:gap-6 w-full">
                    <span className="text-2xl sm:text-3xl md:text-5xl text-CustomWhite font-semibold">{t("contact-header")}</span>
                    <span className="leading-5 text-CustomWhite">{t("contact-header-text")}</span>
                </div>
                
                <div className="w-full flex justify-between gap-4 md:gap-8 text-CustomWhite">

                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-semibold">{t("contact-icon-contact")}</span>
                        <div className="flex flex-col gap-2">
                            <Link className="text-base md:text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.gmail.com">{t("contact-icon-email-link")}</Link>
                            <Link className="text-base md:text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="0706323610">{t("contact-icon-phone-link")}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(submitData)} className="overflow-hidden w-full lg:w-3/5 flex flex-col justify-start items-start gap-4 md:gap-8 p-6 md:p-8 text-CustomWhite">

                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
                    <div className="flex flex-col gap-2">
                        <span>{t("contact-title-name")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-name")}>
                        <input
                            {...register("name")}
                            className={`w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15 ${
                                errors.name ? 'border-red-500' : touchedFields.name && !errors.name ? 'border-green-500' : 'border-transparent'
                            } border`}                                                      
                            type="text"
                        />
                        </InputWrapper>
                    </div>

                    <div className="flex flex-col gap-2">    
                        <span>{t("contact-title-email")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-email")}>
                        <input
                            {...register("email")}
                            className={`w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15 ${
                                errors.email ? 'border-red-500' : touchedFields.email && !errors.email ? 'border-green-500' : 'border-transparent'
                            } border`} 
                            type="email"
                        />
                        </InputWrapper>
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <span>{t("contact-title-subject")}</span>
                        <InputWrapper placeholder={t("contact-placeholder-subject")}>
                        <input
                            {...register("subject")}
                            className={`w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15 ${
                                errors.subject ? 'border-red-500' : touchedFields.subject && !errors.subject ? 'border-green-500' : 'border-transparent'
                            } border`} 
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
                            {...register("message")}
                            className="max-h-[270px] min-h-[100px] w-full py-4 px-3 rounded-md text-CustomWhite bg-CustomWhite bg-opacity-15"
                            rows={5}
                        ></textarea>
                        </InputWrapper>
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <input
                            id="fileInput"
                            type="file"
                            {...register("attachment")}
                            className="hidden"
                        />
                        <div className="flex justify-between items-center w-full pl-2 px-4 py-2 border border-indigo-500 rounded-md">
                            <div className='flex gap-2 sm:gap-4 items-center text-sm md:text-base'>
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className="whitespace-nowrap cursor-pointer px-4 py-2 border border-transparent hover:bg-CustomWhite hover:bg-opacity-20 rounded-md bg-CustomWhite bg-opacity-10 hover:border hover:border-indigo-500"
                            >
                                {t("contact-input-file-btn")}
                            </button>
                            {fileName || t("contact-input-file")}
                            </div>
                            {fileName ? (
                            <Image
                                onClick={handleRemoveFile}
                                className="cursor-pointer w-4 h-4 sm:w-6 sm:h-6 rounded-md"
                                src={CloseIcon}
                                alt="Remove Icon"
                                style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}
                            />
                            ) : (
                            <Image
                                onClick={handleButtonClick}
                                className="cursor-pointer w-4 h-4 sm:w-6 sm:h-6 rounded-md"
                                src={ContactIconPapperclip}
                                alt="Share Icon"
                                style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}
                            />
                            )}
                        </div>
                    </div>
                    
                    <SendButton type="submit"/>
                </div>
            </form>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 text-CustomWhite">
            <Link className="text-base md:text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.facebook.com/marc.carlson/">{t("contact-icon-facebook-link")}</Link>
            <Link className="text-base md:text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.linkedin.com/marcrcarlson">{t("contact-icon-linkedin-link")}</Link>
            <Link className="text-base md:text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://github.com/Marccarlson117">{t("contact-icon-github-link")}</Link>
            <Link className="text-base md:text-xl whitespace-nowrap border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-300 font-medium" href="https://www.instagram.com/marcrcarlson">{t("contact-icon-instagram-link")}</Link>
        </div>

        {showSuccessMessage && (
            <div className="fixed bottom-3 right-3">
                <div className="relative">
                    <QuestionsWrapper>
                        <span className="whitespace-nowrap fixed bottom-3 right-3 bg-green-500 text-CustomWhite py-4 px-6 rounded-md">{t("contact-message-sent")}</span>
                    </QuestionsWrapper>
                </div>
            </div>
        )}

    </div>    
  )
}

export default ContactLayout