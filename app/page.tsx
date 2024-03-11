"use client";

import { Hero, CookiesBanner, HomePage, Navbar, Form, Dropdown, Footer } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
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
      <Hero locale={"en"}/>
      <Footer onDropdownToggle={handleDropdownToggle} />
    </main>
  );
}
