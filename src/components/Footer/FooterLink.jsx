import Link from "next/link";
import { motion } from "framer-motion";
import { popUp } from "@/content/FramerMotionVariants";

export default function FooterLink({ route, text }) {
  return (
    <motion.a
      className="hover:text-black dark:hover:text-white w-fit"
      variants={popUp}
      href={`/${route}`}
    >
      {text}
    </motion.a>
  );
}
