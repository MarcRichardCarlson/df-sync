import React, { useRef } from 'react'
import Image from 'next/image';
import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import ContactIconPapperclip from "../../public/assets/HeroiconsPaperClipSolid.svg"


const ContactInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
    const locale = useCurrentLocale();
    const { t } = useTranslation(locale, "translation");

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        // Handle the file, e.g., setting state or uploading
    };
  
    return (
      <div className="flex gap-2 justify-center items-center">
        <input
          onChange={handleFileChange}
          id="fileInput"
          type="file"
          ref={fileInputRef}
          className="hidden"
        />
        <div className="flex justify-between items-center w-full px-4 py-2 border border-indigo-500 rounded-md cursor-pointer">
          <div className='flex gap-4 items-center'>
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 border border-transparent bg-CustomWhite bg-opacity-10 rounded-md hover:bg-opacity-0 hover:border hover:border-indigo-500"
            >
              {t("contact-input-file-btn")}
            </button>
            {t("contact-input-file")}
          </div>
          <Image
            onClick={handleButtonClick}
            className="w-6 h-6 rounded-md"
            src={ContactIconPapperclip}
            alt="Share Icon"
            style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>
    );
}

export default ContactInput