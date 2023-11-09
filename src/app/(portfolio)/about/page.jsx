"use client";
import { getCMSIntegration } from "@/lib/markdown";
import AnimatedDiv from "@/components/FramerMotion/AnimatedDiv";
import Image from "next/image";
import Link from "next/link";
import {
  fromLeftVariant,
  opacityVariant,
  popUpFromBottomForText,
} from "@/content/FramerMotionVariants";
import AnimatedHeading from "@/components/FramerMotion/AnimatedHeading";
import AnimatedText from "@/components/FramerMotion/AnimatedText";

export default function Home() {
  const data = getCMSIntegration("markdown");
  return (
    <main className="bg-white dark:bg-darkPrimary">
      <section className="pageTop">
        <AnimatedHeading
          variants={fromLeftVariant}
          className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200 my-4"
        >
          About me
        </AnimatedHeading>
        <AnimatedText
          variants={opacityVariant}
          className="font-medium text-lg text-gray-400 mb-10"
        >
          <p>{data.Personal[0].body}</p>
        </AnimatedText>
        <AnimatedHeading
          variants={fromLeftVariant}
          className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200 my-4"
        >
          Contact Information
        </AnimatedHeading>
        <AnimatedText
          variants={opacityVariant}
          className="font-medium text-lg text-gray-400 mb-10"
        >
          <p>{data.Personal[0].location}</p>
        </AnimatedText>
        <AnimatedHeading
          variants={fromLeftVariant}
          className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200 p-1 my-4"
        >
          Education
        </AnimatedHeading>
        <div className="flex flex-col gap-3 font-inter mb-10">
          {data.Education.map((education, index) => {
            return (
              <AnimatedDiv
                className="flex flex-col p-3 rounded-lg bg-white shadow dark:bg-darkSecondary/50"
                variants={popUpFromBottomForText}
                key={index}
              >
                <AnimatedDiv
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4  p-3 "
                  variants={popUpFromBottomForText}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <Image
                        width={40}
                        height={40}
                        src={education.institution.logo}
                        alt={education.institution.name}
                        quality={50}
                        placeholder="blur"
                        blurDataURL={education.institution.logo}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <Link
                        href=""
                        className="font-semibold hover:underline text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-200"
                      >
                        {education.level} in <span> {education.major}</span>
                      </Link>
                      <p className="text-xs text-gray-500">
                        {education.institution.name} &#x2022;{" "}
                        {education.graduationYear} &#x2022; {education.gpa} GPA
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
              </AnimatedDiv>
            );
          })}
        </div>

        <AnimatedHeading
          variants={fromLeftVariant}
          className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200 p-1 my-4"
        >
          Professional Experience
        </AnimatedHeading>
        <div className="flex flex-col gap-3 font-inter">
          {data.ProfessionalExperiences.map((experience, index) => {
            return (
              <AnimatedDiv
                className="flex flex-col p-3 rounded-lg bg-white shadow dark:bg-darkSecondary/50"
                variants={popUpFromBottomForText}
                key={index}
              >
                <AnimatedDiv
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4  p-3 "
                  variants={popUpFromBottomForText}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <Image
                        width={40}
                        height={40}
                        src={experience.organization.logo}
                        alt={experience.organization.name}
                        quality={50}
                        placeholder="blur"
                        blurDataURL={experience.organization.logo}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <Link
                        href=""
                        className="font-semibold hover:underline text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-200"
                      >
                        {experience.title}
                      </Link>
                      <p className="text-xs text-gray-500">
                        {experience.organization.name} &#x2022;{" "}
                        {experience.startDate}
                        {experience.endDate
                          ? ` - ${experience.endDate}`
                          : " - Present"}
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {experience.body.map((el, idx) => {
                  return (
                    <p key={idx} className="text-xs sm:text-sm md:text-base">
                      &#x2022; {el}
                    </p>
                  );
                })}
              </AnimatedDiv>
            );
          })}
        </div>
      </section>
    </main>
  );
}
