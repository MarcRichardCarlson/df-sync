import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "./providers";
import { AppLocale } from "./locales";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookiesBanner from "@/components/CookiesBanner";

export const metadata: Metadata = {
  title: "Digital fans sync",
  description: "An consulting application",
};

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: { locale: AppLocale };
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 background-style">
        <AppProviders locale={params.locale}>
            <Navbar />
            {children}
            <CookiesBanner />
            <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
