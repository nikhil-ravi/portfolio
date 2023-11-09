"use client";

import {
  FadeContainer,
  opacityVariant,
  popUp,
  popUpFromBottomForText,
} from "@/content/FramerMotionVariants";
import { motion } from "framer-motion";
import OverallGraph from "@/components/HarryPotter/Graph";

export default function Home() {
  return (
    <div className="bg-white dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid place-content-center py-20  min-h-screen"
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
          <OverallGraph />
        </motion.div>
      </motion.section>
    </div>
  );
}
