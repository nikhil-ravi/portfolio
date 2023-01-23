import { motion } from "framer-motion";
import Link from "next/link";
import {
  hamFastFadeContainer,
  mobileNavItemSideways,
} from "@/content/FramerMotionVariants";

export default function MobileMenu({ links, handleClick }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={hamFastFadeContainer}
      className="absolute font-normal bg-white dark:bg-darkPrimary w-screen h-screen top-0 left-0 z-10 sm:hidden"
    >
      <motion.nav className="mt-28 mx-8 flex flex-col">
        {links.map((link, index) => {
          const navLink =
            link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;

          return (
            <Link href={navLink} key={`mobileNav-${index}`} passHref>
              <motion.a
                href={navLink}
                className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
                variants={mobileNavItemSideways}
                onClick={handleClick}
              >
                {link === "rss" ? link.toUpperCase() : link}
              </motion.a>
            </Link>
          );
        })}
      </motion.nav>
    </motion.div>
  );
}
