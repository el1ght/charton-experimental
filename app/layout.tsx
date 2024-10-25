import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Charton Experimental",
  description: "New Age Music App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
    </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
          <div className={'h-full flex flex-col gap-[2px] p-0.5'}>
              <Header />
              <Content>
                  {children}
              </Content>
          </div>
          <Sidebar />

      </body>
    </html>
  );
}
