"use client";

import { FadeContainer, popUp } from "@/content/FramerMotionVariants";
import { navigationRoutes } from "@/content/navigationRoutes";
import { motion } from "framer-motion";
import { HiOutlineQrcode } from "react-icons/hi";
import WhenPlaying from "./Footer/WhenPlaying";
import NotPlaying from "./Footer/NotPlaying";
import FooterLink from "./Footer/FooterLink";
import socialMedia from "@/content/socialMedia";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export const revalidate = 10;

export default function Footer() {
  const { data: currentSong } = useSWR("/api/spotify/now-playing", fetcher);

  return (
    <footer className="bg-white dark:bg-darkPrimary text-gray-600 dark:text-gray-400/50 w-screen font-inter p-10 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
      >
        <div>
          {currentSong?.isPlaying ? (
            <WhenPlaying song={currentSong} />
          ) : (
            <NotPlaying />
          )}
        </div>

        <section>
          <div className="flex flex-row gap-4 capitalize justify-center mb-4">
            {navigationRoutes.map((text, index) => {
              return (
                <FooterLink key={index} id={index} route={text} text={text} />
              );
            })}
          </div>
          <div className="flex flex-row gap-4 capitalize justify-center">
            {socialMedia.map((platform, index) => {
              return (
                <motion.a
                  key={index}
                  className="hover:text-black dark:hover:text-white w-fit"
                  variants={popUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={platform.url}
                >
                  {platform.title}
                </motion.a>
              );
            })}
          </div>
        </section>
      </motion.div>
    </footer>
  );
}
