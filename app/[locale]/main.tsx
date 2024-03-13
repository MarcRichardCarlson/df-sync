"use client";

import { Hero, CookiesBanner, HomePage, Navbar, Form, Dropdown, Footer, Marquee } from "@/components/_index";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AppLocale } from "./locales";

interface AppLocaleProps {
  locale: AppLocale;
}

export default function Main({ locale }: AppLocaleProps) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("Toggle");
  };

  return (
    <main className="overflow-hidden">
      <Navbar/>
      <AnimatePresence>
        {dropdownOpen && <Dropdown isOpen={true} />}
      </AnimatePresence>
      <Hero locale={locale}/>
      <Marquee/>
      <Footer locale={locale} onDropdownToggle={handleDropdownToggle}/>
    </main>
  );
}
