import Link from "next/link";
import { Sun, Bell, Shield, TrendingUp, AlertTriangle, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Sun className="h-7 w-7 text-solar-yellow" />
              <span className="text-xl font-bold text-gray-900">
                Solar<span className="text-brand-600">Doctor</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="#story" className="text-sm text-gray-600 hover:text-gray-900">
                Our Story
              </Link>
              <Link href="/auth" className="text-sm text-gray-600 hover:text-gray-900">
                Log In
              </Link>
              <Link
                href="/auth?mode=signup"
                className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-solar-yellow/10 text-solar-orange px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sun className="h-4 w-4" />
            The Doctor Is In
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Is your solar system{" "}
            <span className="text-brand-600">actually working?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Most homeowners don&apos;t know their solar panels are underperforming
            until they see their electric bill. SolarDoctor gives you a free
            health score and alerts — so you never lose money silently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth?mode=signup"
              className="inline-flex items-center justify-center bg-brand-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
            >
              Get Your Free Health Score
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-8 py-3.5 rounded-xl text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
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
            <div className="text-sm text-gray-500">efficiency loss goes unnoticed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-brand-600">Free</div>
            <div className="text-sm text-gray-500">forever for early adopters</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How SolarDoctor Works
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Three steps. Five minutes. Know exactly how your solar investment is performing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-brand-600" />
              </div>
              <div className="text-sm font-semibold text-brand-600 mb-2">Step 1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Up Free</h3>
              <p className="text-gray-600 text-sm">
                Create a free account with just your email. No credit card ever.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-solar-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sun className="h-7 w-7 text-solar-orange" />
              </div>
              <div className="text-sm font-semibold text-brand-600 mb-2">Step 2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Connect Your System</h3>
              <p className="text-gray-600 text-sm">
                Enter your SolarEdge Site ID and API Key. We&apos;ll auto-detect your
                system size, location, and panel type.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-brand-600 mb-2">Step 3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Your Health Score</h3>
              <p className="text-gray-600 text-sm">
                See exactly how your system performs vs. what it should produce —
                plus alerts when something goes wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
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
              system had been completely offline for 8 months. $2,500 in savings —
              gone.
            </p>
            <p>
              I&apos;m Rich. I&apos;ve worked in the solar industry for nearly 20 years
              and am known as the guy that was first to call out that solar farms
              nationwide were underperforming — kinda like Steve Carell in the Big
              Short. So if anyone should know better: it should be me.
            </p>
            <p>
              But here&apos;s what I discovered:{" "}
              <strong>it wasn&apos;t entirely my fault.</strong>
            </p>
            <p>
              My installer likely turned off my monitoring alerts — on purpose.
              Why? Because fewer alerts to me meant fewer warranty service calls
              for them. It&apos;s a common practice that saves installers money,
              especially during the 10-year workmanship warranty.
            </p>
            <p>
              I built SolarDoctor — first for myself, and now for you. It&apos;s a
              simple tool with a powerful purpose: to tell you not just{" "}
              <em>if</em> your system is working, but{" "}
              <em>how well</em> it&apos;s performing compared to what it should
              produce.
            </p>
            <p className="text-brand-700 font-medium">
              No one will care about your solar investment as much as you do.
              SolarDoctor is the tool that has your back.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
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
                Your inverter app shows kWh. We tell you what those kWh
                <em> mean</em>. Is 500 kWh this month good or bad? We compare
                your actual production to what your system should produce based
                on its size, location, and weather — in plain English.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Bell className="h-8 w-8 text-solar-orange mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Alerts That Actually Work
              </h3>
              <p className="text-gray-600">
                Unlike your installer (who may have disabled your alerts),
                SolarDoctor will always tell you when your system stops
                performing. No conflicts of interest. We work for you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <AlertTriangle className="h-8 w-8 text-solar-red mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Solar Orphan? We&apos;ve Got You.
              </h3>
              <p className="text-gray-600">
                If your installer went out of business (100+ bankruptcies in
                2024 alone), you&apos;re not alone. SolarDoctor becomes your
                monitoring backstop — plus we help you understand what warranties
                you still have.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Free Forever for Early Adopters
              </h3>
              <p className="text-gray-600">
                We&apos;re building this for the solar community. Sign up now
                and you&apos;ll always have free access to health scores and
                alerts. Tell your solar-owning friends and neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop losing money in silence.
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Get your free health score in under 5 minutes.
          </p>
          <Link
            href="/auth?mode=signup"
            className="inline-flex items-center bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            Sign Up Free
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Structured Data */}
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "47",
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
                name: "Sign Up Free",
                text: "Create a free account with just your email. No credit card ever.",
                url: "https://www.getsolardoctor.com/check",
              },
              {
                "@type": "HowToStep",
                name: "Connect Your System",
                text: "Enter your SolarEdge Site ID and API Key. We auto-detect your system size, location, and panel type.",
                url: "https://www.getsolardoctor.com/check",
              },
              {
                "@type": "HowToStep",
                name: "Get Your Health Score",
                text: "See exactly how your system performs vs. what it should produce — plus alerts when something goes wrong.",
                url: "https://www.getsolardoctor.com/check",
              },
            ],
            totalTime: "PT5M",
          }),
        }}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-solar-yellow" />
            <span className="text-white font-bold">SolarDoctor</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/inverters" className="hover:text-white transition-colors">Inverter Guides</Link>
            <Link href="/check" className="hover:text-white transition-colors">Free Health Score</Link>
            <Link href="mailto:hello@getsolardoctor.com" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} SolarDoctor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
