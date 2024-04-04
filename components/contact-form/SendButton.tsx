import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactIconSend from "../../public/assets/IconoirSend.svg";
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";

const SendButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, 'translation');

  const iconAnimation = {
    initial: { x: 0 },
    hover: { x: '800%' },
  };

  return (
    <motion.button
      className="w-56 flex justify-start gap-4 items-center border border-transparent hover:border hover:border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-3 cursor-pointer hover:bg-opacity-0 relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {t("contact-send-btn")}
      <motion.div
        className="w-4 h-4 rounded-md"
        variants={iconAnimation}
        animate={isHovered ? 'hover' : 'initial'}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src={ContactIconSend}
          alt="Send Icon"
          className='h-4 w-4'
          style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>
    </motion.button>
  );
};

export default SendButton;
