import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AuthorByline } from "@/components/AuthorByline";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Why Is My Electric Bill So High With Solar Panels? (2026 Guide) - SolarDoctor",
  description:
    "Your solar panels are installed but your electric bill is still high. Here are the 7 most common reasons — and a free tool to check if your system is underperforming.",
  alternates: { canonical: "https://www.getsolardoctor.com/guides/electric-bill-high-with-solar" },
  openGraph: {
    title: "Why Is My Electric Bill So High With Solar Panels?",
    description: "7 reasons your bill is still high after solar — and how to fix each one.",
    url: "https://www.getsolardoctor.com/guides/electric-bill-high-with-solar",
    type: "article",
  },
};

export default function ElectricBillHighPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{label: "Home", href: "/"}, {label: "Guides", href: "/blog"}, {label: "High Electric Bill With Solar"}]} />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Why Is My Electric Bill So High With Solar Panels?
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          You spent thousands on solar. Your installer promised savings. But your electric bill is still high — or barely changed. Here are the 7 most common reasons, and what to do about each one.
        </p>

        <AuthorByline />

        <div className="prose prose-gray max-w-none">
          <div className="bg-amber-50 rounded-xl p-5 not-prose mb-8">
            <p className="font-semibold text-amber-900 mb-2">The quick answer</p>
            <p className="text-sm text-amber-800">
              If your electric bill hasn&apos;t dropped after going solar, it&apos;s almost always one of two things:
              your energy usage increased since the system was sized, or your system isn&apos;t producing what it should.
              The first is a lifestyle issue. The second is a <Link href="/check" className="text-green-700 underline font-medium">problem you can diagnose in 2 minutes</Link>.
            </p>
          </div>

          <h2>1. Your System Is Underperforming (And You Don&apos;t Know It)</h2>
          <p>
            This is the reason most people miss — and the one that costs the most money. Solar systems can lose 20-40% of their output due to equipment failures, shading changes, soiling, or inverter issues, and the homeowner often has no idea because the panels still <em>look</em> fine.
          </p>
          <p>
            I learned this the hard way: my own 7.6 kW system in Honolulu was completely offline for 8 months. My installer had disabled the alerts. I only discovered it when our electric bill spiked $2,500.
          </p>
          <p>
            <strong>How to check:</strong> Compare your actual monthly production (from your SolarEdge or Enphase app) to what your system <em>should</em> produce based on its size and location. If you don&apos;t want to do the math yourself, <Link href="/check">run a free SolarDoctor health check</Link> — it takes 2 minutes and tells you exactly how much you may be losing.
          </p>

          <h2>2. Your Energy Usage Has Increased</h2>
          <p>
            Your system was sized based on your electricity usage at the time of installation. Since then, you may have added:
          </p>
          <ul>
            <li>An electric vehicle (adds 300-400 kWh/month)</li>
            <li>A home office with equipment running all day</li>
            <li>A pool heater, hot tub, or additional HVAC</li>
            <li>More people living in the household</li>
          </ul>
          <p>
            <strong>How to check:</strong> Pull up your utility bills from before solar was installed. Compare the kWh used (not the dollar amount) to your current usage. If you&apos;re using significantly more kWh now, that&apos;s your answer.
          </p>

          <h2>3. Seasonal Production Drops</h2>
          <p>
            In most of the US, solar panels produce 2-3x more electricity in summer than winter. Shorter days, lower sun angle, and more clouds mean your system generates significantly less from November through February. If you got solar in summer and are now seeing your first winter bills, this is likely what&apos;s happening.
          </p>
          <p>
            <strong>What&apos;s normal:</strong> A system that produces 1,000 kWh/month in July might only produce 400-500 kWh in December. This is expected. Use our <Link href="/tools/solar-production-calculator">production calculator</Link> to see expected monthly output for your region.
          </p>

          <h2>4. You Still Pay Fixed Utility Charges</h2>
          <p>
            Even if your panels generate 100% of your electricity, you still owe your utility company $20-50/month in fixed charges: grid connection fees, delivery charges, and infrastructure costs. This is not a solar problem — it&apos;s how utilities work. Every customer pays it, solar or not.
          </p>

          <h2>5. Your Net Metering Credits Don&apos;t Cover Night Usage</h2>
          <p>
            Your panels generate electricity during the day, but you use most power in the morning and evening. Without a battery, you export daytime excess to the grid (earning credits) and import grid power at night (paying retail rates). If your utility buys your solar at wholesale rates but charges you retail, the math doesn&apos;t break even.
          </p>
          <p>
            <strong>This is getting worse:</strong> Several states (California NEM 3.0, for example) have reduced net metering credits dramatically. If you installed under the old program, you may be grandfathered. Check with your utility.
          </p>

          <h2>6. Your Panels Are Dirty</h2>
          <p>
            A thin layer of dust, pollen, bird droppings, or leaves can reduce output by 5-25%. In dry climates without regular rain, soiling loss can be significant. Most homeowners never clean their panels.
          </p>
          <p>
            <strong>How to check:</strong> If your health score drops gradually over months (not suddenly), soiling is a likely cause. A hose rinse from the ground can help — never pressure wash or use abrasive cleaners.
          </p>

          <h2>7. Your Installer Oversold You</h2>
          <p>
            Some installers use optimistic production projections to close sales. They may have assumed optimal panel tilt and orientation (south-facing, latitude tilt) when your roof faces east or west. They may have ignored shading from trees that have since grown. Or they may have quoted savings based on utility rates that have since changed.
          </p>
          <p>
            <strong>How to verify:</strong> Find your original contract or proposal. Look for the &quot;estimated annual production&quot; number. Compare it to your actual production over the same period. If you&apos;re getting 80% or less of what was promised, you may have grounds for a warranty claim or complaint to your state&apos;s consumer protection office.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-brand-600 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Find out if your system is the problem
          </h2>
          <p className="text-brand-100 mb-6">
            Run a free health check to compare your actual production against what your system should produce. Takes 2 minutes. No account required.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            Check My System Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Related */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/tools/solar-production-calculator" className="border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors">
              <span className="text-xs text-green-700 font-medium">Calculator</span>
              <h4 className="text-sm font-semibold text-gray-900 mt-1">How Much Should My Solar Panels Produce?</h4>
            </Link>
            <Link href="/blog/is-my-solar-system-working" className="border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors">
              <span className="text-xs text-green-700 font-medium">Guide</span>
              <h4 className="text-sm font-semibold text-gray-900 mt-1">5 Signs Your Solar System Isn&apos;t Working</h4>
            </Link>
            <Link href="/blog/solar-panels-not-producing-enough" className="border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors">
              <span className="text-xs text-green-700 font-medium">Troubleshooting</span>
              <h4 className="text-sm font-semibold text-gray-900 mt-1">Solar Panels Not Producing Enough? Here&apos;s Why</h4>
            </Link>
            <Link href="/solar-orphan" className="border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors">
              <span className="text-xs text-green-700 font-medium">Support</span>
              <h4 className="text-sm font-semibold text-gray-900 mt-1">Solar Installer Went Out of Business?</h4>
            </Link>
          </div>
        </div>
      </article>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "Why Is My Electric Bill So High With Solar Panels?",
        description: "7 reasons your electric bill is still high after installing solar panels, and how to fix each one.",
        author: { "@type": "Person", name: "Rich", jobTitle: "Founder & Solar Energy Expert", description: "20-year solar industry veteran" },
        publisher: { "@type": "Organization", name: "SolarDoctor", url: "https://www.getsolardoctor.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.getsolardoctor.com/guides/electric-bill-high-with-solar" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Why is my electric bill still high after installing solar panels?", acceptedAnswer: { "@type": "Answer", text: "The most common reasons are: your system is underperforming without you knowing, your energy usage increased since installation, seasonal production drops in winter, fixed utility charges, or unfavorable net metering rates. Use a free solar health check tool to determine if your system is the problem." }},
          { "@type": "Question", name: "How do I know if my solar panels are producing enough?", acceptedAnswer: { "@type": "Answer", text: "Compare your actual monthly production (from your SolarEdge or Enphase monitoring app) to the expected output for your system size and location. A 7 kW system in the Southeast should produce about 800-1,000 kWh/month in summer. If you're consistently 15% or more below expected, something may be wrong." }},
          { "@type": "Question", name: "Should I still have an electric bill with solar panels?", acceptedAnswer: { "@type": "Answer", text: "Yes. Even with solar, you'll pay $20-50/month in fixed utility charges (grid connection, delivery fees). You'll also pay for any electricity you use beyond what your panels produce, especially at night or during cloudy periods unless you have battery storage." }},
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getsolardoctor.com" },
          { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.getsolardoctor.com/blog" },
          { "@type": "ListItem", position: 3, name: "Electric Bill High With Solar" },
        ],
      })}} />

      <SiteFooter />
    </div>
  );
}
