import "./globals.css";
import type { JSX } from "react";
import Header from "@/app/components/header/Header";
import SideNavBar from "@/app/components/sideNav/SideNavBar";
import { Montserrat, Nunito, Roboto_Mono } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html
      className={`${montserrat.variable} ${nunito.variable} ${robotoMono.variable}`}
    >
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1">
            <SideNavBar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
