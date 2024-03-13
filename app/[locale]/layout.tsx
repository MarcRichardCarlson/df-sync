import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProviders from "./providers";
import { AppLocale } from "./locales";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`m-0 p-0 ${inter.className}`}>
        <AppProviders locale={params.locale}>{children}</AppProviders>
      </body>
    </html>
  );
}
