"use client";

import "./globals.css";

import { useState } from "react";
import { DarkModeProvider } from "@/context/DarkModeProvider";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import QRCodeContainer from "@/components/QRCodeContainer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function RootLayout({ children }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <DarkModeProvider>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="">
          <NavigationBar />
          {children}
          <Footer setShowQR={setShowQR} showQR={showQR} />
          <ScrollToTopButton />
          <QRCodeContainer showQR={showQR} setShowQR={setShowQR} />
        </body>
      </html>
    </DarkModeProvider>
  );
}
