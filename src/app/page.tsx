import Link from "next/link";
import {
  Sun,
  Bell,
  Shield,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { MobileNav } from "@/components/MobileNav";

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
              <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="#story" className="text-sm text-gray-600 hover:text-gray-900">
                Our Story
              </Link>
              <Link href="/auth" className="text-sm text-gray-600 hover:text-gray-900">
                Log In
              </Link>
              <TrackedLink
                href="/check"
                placement="nav"
                destination="check"
                className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
              >
                Free Health Check
              </TrackedLink>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-solar-yellow/10 text-solar-orange px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sun className="h-4 w-4" />
            Free solar health check
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Catch solar underperformance <span className="text-brand-600">before your bill does.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Run a free health check to see whether your system is producing what it
            should, how much savings may be at risk, and when you should take action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/check"
              placement="hero_primary"
              destination="check"
              className="inline-flex items-center justify-center bg-brand-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
            >
              Run Free Health Check
              <ChevronRight className="ml-2 h-5 w-5" />
            </TrackedLink>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-8 py-3.5 rounded-xl text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">4.7M+</div>
            <div className="text-sm text-gray-500">US solar homes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-solar-red">100+</div>
            <div className="text-sm text-gray-500">installer bankruptcies in 2024</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-solar-orange">70-80%</div>
            <div className="text-sm text-gray-500">silent losses can go unnoticed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-brand-600">2 min</div>
            <div className="text-sm text-gray-500">to get a real answer</div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How SolarDoctor Works
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            One quick check. One plain-English answer. One less thing to worry about.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-brand-600" />
              </div>
              <div className="text-sm font-semibold text-brand-600 mb-2">Step 1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Run The Check</h3>
              <p className="text-gray-600 text-sm">
                Start with a free health check. No account or credit card required.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-solar-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sun className="h-7 w-7 text-solar-orange" />
              </div>
              <div className="text-sm font-semibold text-brand-600 mb-2">Step 2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Connect Your System</h3>
              <p className="text-gray-600 text-sm">
                Connect SolarEdge now, or Enphase beta if you have your access token.
                We auto-detect the system details we need.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-brand-600 mb-2">Step 3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get A Real Answer</h3>
              <p className="text-gray-600 text-sm">
                See your health score, estimated lost savings, and what to do next if
                something looks off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The $2,500 Mistake That Started It All
          </h2>

          <div className="prose prose-lg text-gray-700 space-y-5">
            <p>
              <strong>&ldquo;$2,500??&rdquo;</strong>
            </p>
            <p>
              That was my wife&apos;s reaction when we discovered our rooftop solar
              system had been completely offline for 8 months. $2,500 in savings -
              gone.
            </p>
            <p>
              I&apos;m Rich. I&apos;ve worked in the solar industry for nearly 20 years.
              If anyone should have caught it quickly, it should have been me.
            </p>
            <p>
              But the bigger lesson was this: homeowners are often the last people
              to know when their own system stops performing.
            </p>
            <p>
              I built SolarDoctor to answer one question clearly: is your system
              producing what it should, or are you quietly losing savings every month?
            </p>
            <p className="text-brand-700 font-medium">
              No one will care about your solar investment as much as you do.
              SolarDoctor is built to give you the truth fast.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-gray-200">
            <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xl">
              R
            </div>
            <div>
              <p className="font-semibold text-gray-900">Rich</p>
              <p className="text-sm text-gray-500">Founder, SolarDoctor &middot; 20 years in solar energy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes SolarDoctor Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <TrendingUp className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Health Score, Not Just Data
              </h3>
              <p className="text-gray-600">
                Your inverter app shows numbers. SolarDoctor tells you whether those
                numbers are healthy for your system, location, and season.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Bell className="h-8 w-8 text-solar-orange mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Alerts That Work For You
              </h3>
              <p className="text-gray-600">
                We store the connection needed to keep checking your system and alert
                you when savings are at risk.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <AlertTriangle className="h-8 w-8 text-solar-red mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Solar Orphan Friendly
              </h3>
              <p className="text-gray-600">
                If your installer disappeared, SolarDoctor still gives you a way to
                monitor performance and show a new service provider what&apos;s wrong.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Built For Homeowners
              </h3>
              <p className="text-gray-600">
                Not for installer dashboards. Not for utility reporting. Just a clear,
                homeowner-first answer about whether your investment is doing its job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop losing money in silence.
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Run the free check, see your score, and share it with your installer or neighbor.
          </p>
          <TrackedLink
            href="/check"
            placement="footer"
            destination="check"
            className="inline-flex items-center bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            Start Free Check
            <ChevronRight className="ml-2 h-5 w-5" />
          </TrackedLink>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SolarDoctor",
            url: "https://www.getsolardoctor.com",
            description: "Free solar panel health monitoring. Get a health score comparing your actual production to expected output.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.getsolardoctor.com/blog?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SolarDoctor",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: "https://www.getsolardoctor.com",
            description: "Free solar system health monitoring tool that compares your actual production against expected output based on system size, location, and weather.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SolarDoctor",
            url: "https://www.getsolardoctor.com",
            logo: "https://www.getsolardoctor.com/api/og?type=blog&title=SolarDoctor",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              email: "hello@getsolardoctor.com",
              contactType: "customer support",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Check Your Solar System Health",
            description: "Get a free health score for your solar system in under 5 minutes.",
            step: [
              {
                "@type": "HowToStep",
                name: "Run The Check",
                text: "Start a free health check. No account or credit card required.",
                url: "https://www.getsolardoctor.com/check",
              },
              {
                "@type": "HowToStep",
                name: "Connect Your System",
                text: "Enter your SolarEdge Site ID and API key, or use Enphase beta with an access token.",
                url: "https://www.getsolardoctor.com/check",
              },
              {
                "@type": "HowToStep",
                name: "Review Your Results",
                text: "See your health score, estimated lost savings, and what to do next.",
                url: "https://www.getsolardoctor.com/check",
              },
            ],
            totalTime: "PT5M",
          }),
        }}
      />

      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-solar-yellow" />
            <span className="text-white font-bold">SolarDoctor</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/check" className="hover:text-white transition-colors">Free Health Check</Link>
            <Link href="/tools/solar-production-calculator" className="hover:text-white transition-colors">Production Calculator</Link>
            <Link href="/guides/electric-bill-high-with-solar" className="hover:text-white transition-colors">High Electric Bill?</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/solar-orphan" className="hover:text-white transition-colors">Solar Orphans</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} SolarDoctor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

