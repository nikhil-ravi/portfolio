"use client";

import "../globals.css";

import { DarkModeProvider } from "@/context/DarkModeProvider";
import NavigationBar from "@/components/HarryPotter/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="bg-white dark:bg-darkPrimary">
          {process.env.NODE_ENV === "production" && (
            <GoogleAnalytics strategy="lazyOnload" />
          )}
          <NavigationBar />
          <ProgressBar
            height="4px"
            color="#fffd00"
            options={{ showSpinner: false, speed: 800, easing: "ease" }}
            shallowRouting
            s
          />
          <main>
            <section className="pageTop min-h-screen">{children}</section>
          </main>
          <Footer />
          <ScrollToTopButton />
        </body>
      </html>
    </DarkModeProvider>
  );
}
