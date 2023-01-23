"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useWindowLocation() {
  const [currentURL, setCurrentURL] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, [router.asPath]);

  return { currentURL };
}
