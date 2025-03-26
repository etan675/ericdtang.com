import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/top-navbar/TopNavbar";
import Sidebar from "@/components/sidebar/Sidebar";
import PageLayout from "@/components/layouts/PageLayout";
import ThemeProvider from "@/context-provider/ThemeProvider";
import classNames from "classnames";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Tang - Home",
  description: "Eric Tang's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className={classNames(
            `${geistSans.variable} ${geistMono.variable}`,
            'antialiased flex w-screen h-screen overflow-y-hidden',
            'text-[var(--foreground)] bg-[var(--background)] font-[var(--font-geist-sans)]',
          )}>
            <TopNavbar />
            <Sidebar className="basis-[20%] shrink-0 max-lg:hidden" />
            <PageLayout>
              {children}
            </PageLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
