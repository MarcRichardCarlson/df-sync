"use client";

import { Hero, CookiesBanner, HomePage, Navbar, Form, Dropdown } from "@/components";
import { useState } from "react";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("Toggle");
  };

  return (
    <main className="overflow-hidden">
      <Navbar onDropdownToggle={handleDropdownToggle} />
      {dropdownOpen && <Dropdown isOpen={true} />}
      <Hero />
    </main>
  );
}
