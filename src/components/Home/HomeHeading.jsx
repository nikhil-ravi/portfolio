import AnimatedHeading from "@/components/FramerMotion/AnimatedHeading";
import { headingFromLeft } from "@/content/FramerMotionVariants";

export const HomeHeading = ({ title }) => {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
};
