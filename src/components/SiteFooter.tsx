import Link from "next/link";
import { Sun } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-solar-yellow" />
          <span className="text-white font-bold">SolarDoctor</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/check" className="hover:text-white transition-colors">Free Health Check</Link>
          <Link href="/tools/solar-production-calculator" className="hover:text-white transition-colors">Production Calculator</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/solar-orphan" className="hover:text-white transition-colors">Solar Orphans</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SolarDoctor
        </div>
      </div>
    </footer>
  );
}
