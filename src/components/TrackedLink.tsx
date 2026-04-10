"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

export function TrackedLink({
  href,
  placement,
  destination,
  className,
  children,
}: {
  href: string;
  placement: string;
  destination: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent("home_cta_click", { placement, destination })}
      className={className}
    >
      {children}
    </Link>
  );
}
