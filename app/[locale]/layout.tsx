import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "./providers";
import { AppLocale } from "./locales";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookiesBanner from "@/components/CookiesBanner";
import test from "../../public/assets/icons8-logo-16.png"

export const metadata: Metadata = {
  title: "DF Sync",
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
      {/* <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons8-logo-16.png" />
      </head> */}
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
