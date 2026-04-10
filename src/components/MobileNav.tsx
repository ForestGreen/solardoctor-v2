"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="flex flex-col px-4 py-4 gap-3">
            <Link
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 py-2"
            >
              How It Works
            </Link>
            <Link
              href="#story"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 py-2"
            >
              Our Story
            </Link>
            <Link
              href="/auth"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 py-2"
            >
              Log In
            </Link>
            <Link
              href="/check"
              onClick={() => {
                trackEvent("home_cta_click", { placement: "mobile_nav", destination: "check" });
                setOpen(false);
              }}
              className="bg-brand-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors text-center"
            >
              Free Health Check
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
