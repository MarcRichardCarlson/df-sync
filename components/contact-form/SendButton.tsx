import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactIconSend from "../../public/assets/IconoirSend.svg";

const SendButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const iconAnimation = {
    initial: { x: 0 },
    hover: { x: '200%' },
  };

  return (
    <motion.button
      className="w-1/4 flex justify-start gap-4 items-center border border-indigo-500 rounded-md bg-CustomWhite bg-opacity-10 p-3 cursor-pointer hover:bg-opacity-30 relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      Send
      <motion.div
        className="w-8 h-8 rounded-md"
        variants={iconAnimation}
        animate={isHovered ? 'hover' : 'initial'}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src={ContactIconSend}
          alt="Send Icon"
          className='h-8 w-8'
          style={{ objectFit: "cover", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>
    </motion.button>
  );
};

export default SendButton;
