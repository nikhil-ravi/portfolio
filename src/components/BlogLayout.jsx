// "use client";

// import { useState } from "react";

import ScrollProgressBar from "@/components/ScrollProgressBar";
// import TableOfContents from "@/components/TableOfContents";

export default function BlogLayout({ meta, children }) {
  // const [isTOCActive, setIsTOCActive] = useState(false);
  return (
    <section className="mt-[44px] md:mt-[60px]  relative !overflow-hidden">
      {/* TOC */}
      {/* <TableOfContents
        isTOCActive={isTOCActive}
        setIsTOCActive={setIsTOCActive}
        tableOfContents={meta.tableOfContents}
      /> */}

      {/* Blog Content */}
      <section
        className="p-5 sm:pt-10 relative font-barlow prose dark:prose-invert print:!mx-auto max-w-screen-3xl"
        //  "md:ml-[35%] lg:ml-[30%] xl:ml-[25%] 2xl:ml-[20%] 3xl:ml-[15%]" // TOC width
        style={{
          maxWidth: "1800px",
          // opacity: `${isTOCActive} && "0.3"`,
          margin: `${meta.tableOfContents.length <= 0} && "auto"`,
        }}
      >
        <ScrollProgressBar />
        <h1 className="text-3xl  font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {meta.title}
        </h1>

        <div className="flex items-start !w-full text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2 flex-wrap w-full justify-between">
            <div className="flex items-center gap-1">
              <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {meta.formattedDate}
              </div>
              <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {meta.readingTime.text}
              </div>
              <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {meta.readingTime.words} words
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full prose-sm blog-container sm:prose-base prose-pre:bg-white prose-img:mx-auto prose-img:rounded-md dark:prose-pre:bg-darkSecondary prose-pre:saturate-150 dark:prose-pre:saturate-100 marker:text-black dark:marker:text-white prose-h4:mb-6 prose-no-margin:!m-0">
          {children}
        </div>
      </section>
    </section>
  );
}
