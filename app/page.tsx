import { Hero } from "@/components";
import CookiesDialogModal from "@/components/Cookies-dialog-modal";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <HomePage/>

      <CookiesDialogModal/>
    </main>
  );
}
