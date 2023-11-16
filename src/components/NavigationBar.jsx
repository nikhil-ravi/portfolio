"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FadeContainer, popUp } from "@/content/FramerMotionVariants";
import { useDarkMode } from "@/context/DarkModeProvider";
import { navigationRoutes } from "@/content/navigationRoutes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import NavItem from "./NavigationBar/NavItem";
import HamBurger from "./NavigationBar/Hamburger";
import MobileMenu from "./NavigationBar/MobileMenu";

export default function NavigationBar() {
  const router = useRouter();
  const navRef = useRef(null);

  const { isDarkMode, changeDarkMode } = useDarkMode();

  const control = useAnimation();
  const [navOpen, setNavOpen] = useState(false);

  //   Add shadow and backdrop to the navigation bar as we scroll
  const addShadow = useCallback(() => {
    if (window.scrollY > 10) {
      navRef.current.classList.add(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );
      control.start("visible");
    } else {
      navRef.current.classList.add(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );
      control.start("hidden");
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener("scroll", addShadow);
    return () => {
      window.removeEventListener("scroll", addShadow);
    };
  }, [addShadow]);

  function lockScroll() {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("lock-scroll");
  }

  function handleClick() {
    lockScroll();
    setNavOpen(!navOpen);
  }
  return (
    <div
      className="fixed w-full bg-white dark:bg-darkPrimary dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:p-4 sm:px-6 z-50 print:hidden"
      ref={navRef}
    >
      {/* Mobile Navigation Hamburger and Mobile Menu */}
      <HamBurger open={navOpen} handleClick={handleClick} />
      <AnimatePresence>
        {navOpen && (
          <MobileMenu links={navigationRoutes} handleClick={handleClick} />
        )}
      </AnimatePresence>

      {/* <Link href="/" passHref> */}
      <div className="flex gap-2 items-center cursor-pointer z-50">
        <motion.a
          initial="hidden"
          animate="visible"
          variants={popUp}
          className="relative hidden sm:inline-flex mr-3"
          href="/"
        >
          <h1 className="font-sarina text-xl">NR</h1>
        </motion.a>
        <motion.p
          initial="hidden"
          animate={control}
          variants={{
            hidden: { opacity: 0, scale: 1, display: "none" },
            visible: { opacity: 1, scale: 1, display: "inline-flex" },
          }}
          className="absolute sm:!hidden w-fit left-0 right-0 mx-auto flex justify-center  text-base font-sarina"
        >
          Nikhil Ravi
        </motion.p>
      </div>
      {/* </Link> */}

      <motion.nav className="hidden sm:flex z-10 md:absolute md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          {navigationRoutes.slice(0, 7).map((link, index) => {
            return (
              <NavItem
                key={index}
                href={`/${link}`}
                text={link}
                router={router}
              />
            );
          })}
        </motion.div>
      </motion.nav>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="cursor-pointer rounded-full z-30 transition active:scale-75"
        title="Toggle Theme"
      >
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={changeDarkMode}
          size={24}
        />
      </motion.div>
    </div>
  );
}
