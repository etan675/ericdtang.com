import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/top-navbar/TopNavbar";
import Sidebar from "@/components/sidebar/Sidebar";
import PageLayout from "@/components/layouts/PageLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Tang",
  description: "Eric's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-hidden flex`}
      >
        <TopNavbar/>
        <Sidebar className="basis-[20%] shrink-0" />
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
