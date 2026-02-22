import "./globals.css";
import type { JSX } from "react";
import Header from "@/app/components/header/Header";
import SideNavBar from "@/app/components/sideNav/SideNavBar";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
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
