import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Content from "@/components/Content";

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
