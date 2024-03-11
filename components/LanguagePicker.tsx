import React, { useState } from 'react';
import { initialTabs as tabs } from "./language-items";
import { motion, AnimatePresence } from "framer-motion";

const LanguagePicker: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-12 relative cursor-pointer">
      <ul className='flex justify-between items-center gap-8'>
        {tabs.map((item) => (
        <li
            key={item.label}
            className={`${item === selectedTab ? "selected" : ""} relative cursor-pointer hover:text-slate-400 text-lg`}
            onClick={() => setSelectedTab(item)}
        >
            {`${item.label}`}
            {item === selectedTab ? (
            <motion.div className="absolute bottom--1 left-0 right-0 h-1 w-full bg-indigo-500" layoutId="underline" />
            ) : null}
        </li>
        ))}
      </ul>
    </div>

  );
};

export default LanguagePicker;
