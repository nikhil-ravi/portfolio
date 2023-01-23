"use client";
import { AnimatePresence } from "framer-motion";
import Project from "@/components/Project";
import PageTop from "@/components/PageTop";
import { getProjects } from "@/lib/dataFetch";
import AnimatedDiv from "@/components/FramerMotion/AnimatedDiv";
import { FadeContainer } from "@/content/FramerMotionVariants";
import pageMeta from "@/content/meta";

export default function Home() {
  const projects = getProjects();
  return (
    <main className="bg-white dark:bg-darkPrimary">
      <section className="pageTop">
        <PageTop pageTitle="Projects">
          Here is a selected list of projects...
        </PageTop>

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          <AnimatePresence>
            {projects &&
              projects.map((project, index) => {
                if (project.name === "" && project.githubURL === "")
                  return null;
                return <Project key={index} project={project} />;
              })}
          </AnimatePresence>
        </AnimatedDiv>
      </section>
    </main>
  );
}
