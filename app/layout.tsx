import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import NavigationBar from "@/components/NavigationBar";
import Content from "@/components/Content";
import Script from "next/script";
import ToasterProvider from "@/providers/ToasterProvider";
import Player from "@/components/Player";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Charton Experimental",
  description: "New Age Music App",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "0 0% 100%" },
        { media: "(prefers-color-scheme: dark)", color: "222.2 84% 4.9%" }
    ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        {/*<Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />*/}
    </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
          <div className={'h-full flex flex-col gap-[2px] p-0.5 box'}>

              <ToasterProvider />
              <Content>
                  {children}
              </Content>
              <NavigationBar />

          </div>
          <Player />

      </body>
    </html>
  );
}
