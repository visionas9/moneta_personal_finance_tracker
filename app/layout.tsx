import "./globals.css";
import React from "react";
import Header from "@/app/components/header/Header";
import SideNavBar from "@/app/components/sideBar/SideNavBar";
import { Montserrat, Nunito, Roboto_Mono } from "next/font/google";
import ContextProvider from "./context/ContextProvider";
import Modal from "@/app/components/form/Modal";
import Footer from "./components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${montserrat.variable} ${nunito.variable} ${robotoMono.variable}`}
    >
      <body>
        <ContextProvider>
          <div className="flex flex-col h-screen overflow-hidden">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <SideNavBar />
              <div className="flex flex-col flex-1 overflow-y-auto bg-coffee-bean">
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
          <Modal />
        </ContextProvider>
      </body>
    </html>
  );
}
