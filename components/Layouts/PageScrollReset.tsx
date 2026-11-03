"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function PageScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}