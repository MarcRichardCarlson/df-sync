import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from "@/i18n/client";
import { useCurrentLocale } from "@/hooks/locale";
import ContactIconPapperclip from "../../public/assets/HeroiconsPaperClipSolid.svg";
import CloseIcon from "../../public/assets/IcRoundClose.svg";

const ContactInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, "translation");

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleRemoveFile = () => {
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }
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
      <div className="flex justify-between items-center w-full pl-2 px-4 py-2 border border-indigo-500 rounded-md">
        <div className='flex gap-2 sm:gap-4 items-center text-sm md:text-base'>
          <button
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
  );
}

export default ContactInput;
