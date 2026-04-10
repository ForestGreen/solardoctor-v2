"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/tracking";

const RETURNING_VISITOR_KEY = "sd_has_visited";

export function FunnelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const currentUrl =
      typeof window !== "undefined"
        ? `${window.location.pathname}${window.location.search}`
        : pathname;

    const params = Object.fromEntries(searchParams.entries());
    const hasVisitedBefore =
      typeof window !== "undefined" &&
      window.localStorage.getItem(RETURNING_VISITOR_KEY) === "true";

    trackEvent("page_view", {
      page: pathname,
      url: currentUrl,
      referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      ...params,
      is_returning_visitor: hasVisitedBefore,
    });

    if (hasVisitedBefore) {
      trackEvent("return_visit", {
        page: pathname,
        url: currentUrl,
      });
    } else if (typeof window !== "undefined") {
      window.localStorage.setItem(RETURNING_VISITOR_KEY, "true");
    }
  }, [pathname, searchParams]);

  return null;
}
