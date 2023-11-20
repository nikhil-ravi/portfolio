"use client";

import {
  FadeContainer,
  opacityVariant,
  popUp,
  popUpFromBottomForText,
} from "@/content/FramerMotionVariants";
import { motion } from "framer-motion";
import Graph from "@/components/HarryPotter/Graph";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid place-content-center min-h-screen"
      >
        <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
          <motion.h1
            variants={opacityVariant}
            className="text-5xl lg:text-6xl font-bold font-mono"
          >
            Chamber of Relations
          </motion.h1>
          <motion.p
            variants={popUpFromBottomForText}
            className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
          >
            A Harry Potter Network
          </motion.p>
        </div>
        <motion.div variants={popUp}>
          <Graph />
        </motion.div>
        <motion.div
          variants={{ ...opacityVariant, ...popUpFromBottomForText }}
          className="flex flex-col gap-5 items-center"
        >
          <div className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none">
            Coming Soon...
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
