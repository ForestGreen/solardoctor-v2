import Link from "next/link";
import { Sun } from "lucide-react";
import { MobileNav } from "./MobileNav";

interface SiteNavProps {
  variant?: "homepage" | "default" | "minimal";
}

export function SiteNav({ variant = "default" }: SiteNavProps) {
  if (variant === "homepage") {
    return (
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Sun className="h-7 w-7 text-solar-yellow" />
              <span className="text-xl font-bold text-gray-900">
                Solar<span className="text-brand-600">Doctor</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link href="#story" className="text-sm text-gray-600 hover:text-gray-900">Our Story</Link>
              <Link href="/auth" className="text-sm text-gray-600 hover:text-gray-900">Log In</Link>
              <Link href="/check" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors">
                Free Health Check
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-solar-yellow" />
          <span className="text-lg font-bold text-green-700">SolarDoctor</span>
        </Link>
        {variant !== "minimal" && (
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <Link href="/check" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Free Health Check
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
