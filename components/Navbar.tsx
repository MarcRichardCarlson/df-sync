import React, { useState } from 'react';
import { initialTabs as tabs } from "./nav-items";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="w-full flex items-center bg-slate-800 py-6 px-6 md:px-24 z-50">
            <nav className='w-full flex justify-between items-center'>
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Digital fans Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DF Sync</span>
                </a>
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

            <div className='cursor-pointer'>
                <AnimatePresence mode="wait">
                    <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    >
                    {selectedTab ? selectedTab.icon : ""}
                    </motion.div>
                </AnimatePresence>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;


