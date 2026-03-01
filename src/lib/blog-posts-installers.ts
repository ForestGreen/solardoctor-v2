import type { BlogPost, FaqItem } from './blog-posts';

// Helper functions for CTAs
function ctaBlock(customHeadline?: string): string {
  const headline = customHeadline || "Wondering if your solar system is working properly?";
  return `
    <div class="mt-12 bg-green-50 rounded-2xl p-8 text-center">
      <h3 class="text-xl font-bold text-green-900 mb-2">${headline}</h3>
      <p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p>
      <a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">
        Check Your System Now &rarr;
      </a>
    </div>
  `;
}

function inlineCta(text?: string): string {
  const t = text || "SolarDoctor monitors your system 24/7 and alerts you when something needs attention.";
  return `
    <div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
      <p class="text-green-800 font-medium mb-2">${t}</p>
      <a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a>
    </div>
  `;
}

export const installerBlogPosts: BlogPost[] = [
  {
    slug: "vivint-solar-system-not-working",
    title: "Vivint Solar System Not Working? Common Issues & What to Do",
    excerpt: "Vivint Solar (now SunRun) customers are reporting performance issues. Here's what's happening, why, and how to get help.",
    category: "Installer Guide",
    date: "2025-07-01",
    readTime: "9 min read",
    metaDescription: "Vivint Solar system problems? We explain common issues with Vivint Solar installations, warranty coverage, and how to get your system monitored and fixed.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Vivint Solar was once one of the fastest-growing residential solar companies in America. Founded in 2010, they installed systems across the US with aggressive sales tactics and competitive pricing. In 2020, however, Vivint Solar was acquired by SunRun, and thousands of customers have reported ongoing issues with system performance and customer support.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">About Vivint Solar Installations</h2>
      <p class="mb-4">Vivint Solar systems typically used SolarEdge inverters paired with high-efficiency panels (often REC, Canadian Solar, or SunPower brands). The combination was solid in theory, but many Vivint installations were plagued by installation quality issues and inadequate monitoring setup.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Vivint Solar Problems</h2>
      <p class="mb-4"><strong>Underperformance:</strong> The most common complaint from Vivint customers is that their systems produce far less than promised. Many report 20-40% lower production than their original sales projections. This is often due to poor site assessment during the sales process.</p>
      <p class="mb-4"><strong>Inverter Failures:</strong> SolarEdge string inverters used in many Vivint systems have experienced failure rates higher than average. When these fail, production drops to zero until replacement.</p>
      <p class="mb-4"><strong>Poor Monitoring Setup:</strong> Many Vivint customers report that their SolarEdge monitoring was never properly activated or connected. They have no visibility into their system performance.</p>
      <p class="mb-4"><strong>Unresponsive Customer Service:</strong> After the SunRun acquisition, many Vivint customers found it difficult to get support. Service requests took months, and some were never resolved.</p>

      ${inlineCta("If you have a Vivint Solar system, you need independent monitoring to catch problems before they cost you thousands.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is This a Vivint Problem or Equipment Problem?</h2>
      <p class="mb-4">Here's how to tell: Log into your SolarEdge monitoring portal and check your daily production. Compare it to the production estimate your system should generate based on your location and system size.</p>
      <p class="mb-4">If production is 20%+ lower than expected most days, it could be:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>A hardware failure (most often the SolarEdge inverter)</li>
        <li>Poor installation quality (wiring issues, panel shading from improper mounting)</li>
        <li>Suboptimal system design from the original sales process</li>
      </ul>
      <p class="mb-4">Contact SunRun (Vivint's parent company) about a warranty claim. If the inverter failed, SolarEdge covers replacement under their equipment warranty.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What If You Can't Reach SunRun?</h2>
      <p class="mb-4">Many customers report that SunRun takes weeks or months to respond to Vivint customer service requests. If you're dealing with this:</p>
      <p class="mb-4"><strong>File a warranty claim directly with SolarEdge:</strong> Go to solaredge.com/owners and register your system. You can file a warranty claim without going through your installer. SolarEdge will handle the repair.</p>
      <p class="mb-4"><strong>Contact your state's Public Utilities Commission:</strong> File a complaint against SunRun for unresponsive customer service. This escalates your case and often gets a response.</p>
      <p class="mb-4"><strong>Hire an independent service provider:</strong> You don't need SunRun to fix your system. Any licensed solar contractor can diagnose and repair Vivint installations.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How SolarDoctor Helps Vivint Customers</h2>
      <p class="mb-4">Whether your Vivint system is failing due to equipment problems or installation issues, you need to know what's happening. SolarDoctor gives you a free health score that shows exactly how your system is performing and alerts you to problems within hours of them happening.</p>
      <p class="mb-4">This is especially important for Vivint customers because you may not get fast support from SunRun. By monitoring your system independently, you catch problems early and can either file warranty claims or hire independent contractors to fix them — saving you thousands in lost production.</p>

      ${ctaBlock("Don't let your Vivint Solar system silently underperform.")}
    `,
    faqs: [
      {
        question: "What inverter does Vivint Solar use?",
        answer: "Most Vivint Solar systems use SolarEdge string inverters, typically the SE5000H or SE6000H models. Some older systems may use Enphase microinverters. Check your monitoring app or physical equipment to confirm."
      },
      {
        question: "Is my Vivint Solar system still under warranty?",
        answer: "Yes. Vivint Solar installations have 25-year panel warranties and 10-25 year inverter warranties (depending on equipment). These are with the equipment manufacturers, not Vivint. You can file claims directly with SolarEdge or your panel manufacturer without going through SunRun."
      },
      {
        question: "Can I use SolarDoctor to monitor my Vivint Solar system?",
        answer: "If you have a SolarEdge inverter, yes. SolarDoctor works with all SolarEdge systems regardless of installer. If you have Enphase microinverters, we're working on support for those systems — contact us for details."
      },
      {
        question: "What should I do if my Vivint Solar system stops producing?",
        answer: "First, check your SolarEdge monitoring app for error codes. If there's an error, file a warranty claim with SolarEdge directly at solaredge.com/owners. If you can't reach SunRun, don't wait — hire an independent contractor to diagnose the problem. Many contractors will do a free assessment."
      }
    ]
  },

  {
    slug: "sunrun-solar-system-not-working",
    title: "SunRun Solar System Not Working? Troubleshooting & Next Steps",
    excerpt: "SunRun is America's largest solar company, but that doesn't mean their systems never fail. Here's what to do when yours stops working.",
    category: "Installer Guide",
    date: "2025-07-15",
    readTime: "9 min read",
    metaDescription: "SunRun solar problems? Learn about common issues, warranty coverage, and how to get your system fixed when SunRun support is slow.",
    content: `
      <p class="text-lg text-gray-600 mb-8">SunRun is the largest residential solar company in the United States, with over 4 million customers. But size doesn't guarantee quality service or quick support. Thousands of SunRun customers report slow response times, unresolved issues, and systems that underperform.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding SunRun Systems</h2>
      <p class="mb-4">SunRun installs systems across the entire US using various equipment combinations. Most modern SunRun systems use SolarEdge inverters paired with premium panels (Canadian Solar, Silfab, REC). Older systems may have Enphase microinverters.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Top SunRun Customer Complaints</h2>
      <p class="mb-4"><strong>Slow Customer Service:</strong> Many SunRun customers report waiting 2-3 months for service calls. For a $30,000+ investment, this is unacceptable. Every day without production is money out of your pocket.</p>
      <p class="mb-4"><strong>System Underperformance:</strong> Some customers report their systems never reached projected output levels from the sales proposal. This could indicate a design issue or installation problem.</p>
      <p class="mb-4"><strong>Inverter Issues:</strong> String inverter failures are common in SunRun systems. When they fail, the entire system produces zero until replacement.</p>
      <p class="mb-4"><strong>Lack of Transparency:</strong> SunRun doesn't always provide clear monitoring data. Many customers don't know if their system is performing normally.</p>

      ${inlineCta("You shouldn't have to wait for SunRun support to know if your system is working. SolarDoctor gives you instant visibility into your system's performance.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Check Your SunRun System Performance</h2>
      <p class="mb-4">First, access your system's monitoring data. If you have SolarEdge, use the SolarEdge Owner portal. If you have Enphase, use the Enlighten app. Look for:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>Daily production trends:</strong> Should be 2-3x higher in summer than winter</li>
        <li><strong>Error codes:</strong> Any codes mean your system isn't working at full capacity</li>
        <li><strong>Sudden drops:</strong> Production dropping 30%+ from one day to the next indicates a failure</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">If Your SunRun System Is Failing</h2>
      <p class="mb-4"><strong>Step 1: Document the problem.</strong> Take screenshots of your monitoring app showing the issue. Record the dates and production numbers. This helps when you call SunRun.</p>
      <p class="mb-4"><strong>Step 2: Call SunRun and request a service appointment.</strong> Be specific: "My system produced zero on a clear day" or "My production dropped 40% this month." Don't accept vague promises — ask for a specific appointment date.</p>
      <p class="mb-4"><strong>Step 3: If SunRun is unresponsive, escalate.</strong> File a complaint with your state's Public Utilities Commission. Most states have formal complaint processes for solar companies. This usually gets a response within 2-3 weeks.</p>
      <p class="mb-4"><strong>Step 4: Consider independent contractors.</strong> You can hire any licensed solar contractor to diagnose problems on your SunRun system. Many will do free assessments. This gives you an independent assessment of whether it's truly a hardware failure.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Coverage for SunRun Systems</h2>
      <p class="mb-4">Most SunRun systems include manufacturer warranties on equipment (25 years for panels, 10-15 years for inverters). SunRun may also offer their own service agreement. Check your contract to understand what's covered.</p>
      <p class="mb-4">If an inverter fails, you can often file a warranty claim directly with the manufacturer (SolarEdge or Enphase) without waiting for SunRun to process it.</p>

      ${ctaBlock("Get independent monitoring so you don't rely on SunRun alone to tell you if your system is working.")}
    `,
    faqs: [
      {
        question: "What inverter does SunRun use in their systems?",
        answer: "SunRun uses primarily SolarEdge string inverters in modern installations, and Enphase microinverters in some systems. Check your monitoring app or the equipment label to confirm which you have."
      },
      {
        question: "How long does SunRun take to service a failed system?",
        answer: "Unfortunately, many customers report 4-12 weeks for service appointments. If your system is producing zero, call and escalate to a supervisor. You can also file a complaint with your state's PUC to speed up response times."
      },
      {
        question: "Can I get my money back if my SunRun system doesn't produce what was promised?",
        answer: "This depends on your contract. Some SunRun contracts are leases (you don't own the system), while others are PPAs (power purchase agreements) or purchases. Review your original contract or call SunRun to understand your options."
      },
      {
        question: "What should I do if SunRun keeps telling me my system is working fine but my electric bills are high?",
        answer: "Get a second opinion. Use SolarDoctor to get a health score that compares your actual production to what it should be. If SolarDoctor shows your system is underperforming, you have concrete data to take back to SunRun or use to escalate a complaint."
      }
    ]
  },

  {
    slug: "sunpower-solar-problems",
    title: "SunPower Solar Problems: Troubleshooting Common Issues",
    excerpt: "SunPower panels are premium quality, but even premium systems can have problems. Here's what to do if yours stops working.",
    category: "Installer Guide",
    date: "2025-08-01",
    readTime: "8 min read",
    metaDescription: "SunPower solar system problems and solutions. Learn about common issues with SunPower installations and how to get them fixed.",
    content: `
      <p class="text-lg text-gray-600 mb-8">SunPower is known for manufacturing the most efficient solar panels available. Their Maxeon brand panels are industry leaders in reliability. However, having great panels doesn't guarantee your system will work well — installation quality, inverter selection, and system design matter just as much.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">SunPower System Equipment Overview</h2>
      <p class="mb-4">SunPower systems typically pair Maxeon panels with one of two inverter types: SolarEdge string inverters (with power optimizers) or Enphase microinverters. Both are good options, but they have different failure modes and warranty coverage.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common SunPower System Issues</h2>
      <p class="mb-4"><strong>Power Optimizer Failures:</strong> Many SunPower systems use SolarEdge power optimizers. These are small devices on each panel. When they fail, that panel stops producing. If multiple optimizers fail, production can drop significantly.</p>
      <p class="mb-4"><strong>Inverter Problems:</strong> SolarEdge inverters in SunPower systems occasionally experience software issues or hardware failures. String inverter failures affect entire system output.</p>
      <p class="mb-4"><strong>System Underperformance:</strong> Some SunPower customers report their systems never reached promised production levels. This often indicates a design or installation issue, not a problem with the panels.</p>
      <p class="mb-4"><strong>Monitoring Disconnection:</strong> Some SunPower monitoring systems lose connection to the cloud. This doesn't affect production, but it means you can't see what's happening.</p>

      ${inlineCta("Even premium panels need monitoring. SolarDoctor works with all SunPower SolarEdge systems to catch problems early.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Diagnosing SunPower Problems</h2>
      <p class="mb-4">If you have a SunPower system with SolarEdge equipment, log into your monitoring portal and look for:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>Zero-production panels:</strong> SolarEdge monitoring shows production per optimizer. Missing production from one or more panels indicates a failed optimizer.</li>
        <li><strong>Error codes:</strong> Watch for DC voltage errors or isolation faults. These indicate power optimizer failures.</li>
        <li><strong>Production trends:</strong> Compare your current output to same-day output from previous years. Significant drops indicate problems.</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting SunPower Systems Fixed</h2>
      <p class="mb-4"><strong>For power optimizer failures:</strong> Call your installer or contact SolarEdge directly. Power optimizers are covered under SolarEdge's warranty for 12-25 years depending on when you installed. Replacement typically takes 2-4 weeks.</p>
      <p class="mb-4"><strong>For inverter problems:</strong> Contact your installer for service. If they're unresponsive, reach out to SolarEdge. Inverter replacements are typically covered under warranty.</p>
      <p class="mb-4"><strong>For system underperformance:</strong> Request a professional audit from an independent solar contractor. They can determine if the issue is a design problem (in which case you may have recourse) or normal operation.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">SunPower Warranty Coverage</h2>
      <p class="mb-4">Maxeon panels come with a 25-year comprehensive warranty. SolarEdge inverters and power optimizers have 10-25 year warranties. All of these are manufacturer warranties, not through your installer. You can file claims directly.</p>

      ${ctaBlock("Get a free health score to see exactly how your SunPower system is performing.")}
    `,
    faqs: [
      {
        question: "What inverter is used in most SunPower systems?",
        answer: "Most modern SunPower systems use SolarEdge string inverters paired with power optimizers (one optimizer per panel). Some older systems use Enphase microinverters. Check your monitoring app to see which you have."
      },
      {
        question: "What do power optimizers do and what happens when they fail?",
        answer: "Power optimizers maximize the output of each individual panel. If one fails, that panel produces zero or very little. If multiple fail, your overall production drops significantly. They're covered under SolarEdge's warranty and can be replaced."
      },
      {
        question: "How do I know if my SunPower system has a hardware failure?",
        answer: "Check your SolarEdge monitoring portal. If you see zero production from one or more panels on a sunny day, you likely have failed power optimizer(s). If you see error codes like 'DC voltage too low,' contact your installer or SolarEdge."
      },
      {
        question: "Can I file a warranty claim myself or do I need my installer?",
        answer: "You can file claims directly with SolarEdge (for inverters and optimizers) or Maxeon (for panels). Visit their websites and look for 'owner support' or 'warranty claims.' Your installer can also file on your behalf if they're still responsive."
      }
    ]
  },

  {
    slug: "tesla-solar-roof-not-working",
    title: "Tesla Solar Roof Not Working? Troubleshooting & Support Guide",
    excerpt: "Tesla Solar Roof is innovative, but also complex. If yours stopped working, here's what you need to know.",
    category: "Installer Guide",
    date: "2025-08-15",
    readTime: "8 min read",
    metaDescription: "Tesla Solar Roof problems and solutions. Learn how to troubleshoot issues and get support for your Tesla Solar Roof system.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Tesla Solar Roof is the most visually attractive solar solution available. By integrating solar directly into your roof tiles, Tesla eliminated the "panel farm" aesthetic. However, this innovation comes with complexity — and some customers are experiencing significant issues.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Tesla Solar Roof Works</h2>
      <p class="mb-4">Tesla Solar Roof combines two types of tiles: active solar tiles (which produce electricity) and inactive tiles (which look like regular roof tiles). Your Powerwall battery and Tesla's proprietary inverter integrate with these tiles to manage energy production and storage.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Tesla Solar Roof Issues</h2>
      <p class="mb-4"><strong>Installation Delays:</strong> Tesla Solar Roof installations are notorious for taking months or even years longer than quoted. Many customers waited 2-3 years after placing orders.</p>
      <p class="mb-4"><strong>Production Lower Than Promised:</strong> Some customers report their systems produce 20-30% less than Tesla's estimates. This could be due to weather conditions, system design, or shading.</p>
      <p class="mb-4"><strong>Software and Connectivity Issues:</strong> Tesla Solar Roof relies heavily on cloud connectivity. Loss of connection means you can't monitor or control your system remotely.</p>
      <p class="mb-4"><strong>Powerwall Integration Problems:</strong> The system requires a Powerwall battery. Some customers report issues with the battery not charging or discharging properly.</p>
      <p class="mb-4"><strong>Limited Third-Party Monitoring:</strong> Tesla doesn't easily allow third-party monitoring, making it harder to get independent diagnostics.</p>

      ${inlineCta("Tesla Solar Roof is proprietary, but you still deserve to know if it's working. SolarDoctor is working to expand monitoring options for Tesla systems.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">If Your Tesla Solar Roof Stops Working</h2>
      <p class="mb-4"><strong>Step 1: Check the Tesla app.</strong> Open your Tesla app and go to Energy. This shows real-time production. If it shows zero production on a sunny day, you have a problem.</p>
      <p class="mb-4"><strong>Step 2: Check for alerts.</strong> Tesla typically sends app notifications if there's a system error. Read these carefully — they often indicate specific problems.</p>
      <p class="mb-4"><strong>Step 3: Try a power cycle.</strong> Switch off your main breaker for 30 seconds, then turn it back on. This restarts the system and often clears minor issues.</p>
      <p class="mb-4"><strong>Step 4: Contact Tesla Support.</strong> Use the app or call Tesla directly. Be specific about when production stopped and what you see in the app. Tesla's support can sometimes fix issues remotely.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tesla Solar Roof Warranty</h2>
      <p class="mb-4">Tesla Solar Roof comes with a 25-year weathertightness warranty and an 80% power output warranty for 25 years (meaning your system should produce at least 80% of original capacity after 25 years). This is actually one of the best warranties in the industry.</p>
      <p class="mb-4">If your system isn't producing as expected and it's under warranty, contact Tesla with documentation (screenshots from the app, comparison to estimated output). Tesla will investigate and repair or replace if needed.</p>

      ${ctaBlock("Contact Tesla Support: Use your Tesla app or call 1-844-733-5427 for residential Solar Roof support.")}
    `,
    faqs: [
      {
        question: "How long does it take to install a Tesla Solar Roof?",
        answer: "Tesla quotes 6-8 weeks for installation, but many customers experience delays of 6-12+ months. Tesla prioritizes based on regional installation capacity. Check the Tesla app for estimated completion dates."
      },
      {
        question: "What's the difference between Tesla Solar Roof active and inactive tiles?",
        answer: "Active tiles produce electricity using Tesla's proprietary solar technology. Inactive tiles are standard roofing tiles that don't produce electricity. Tesla automatically designs your roof layout to optimize both aesthetics and energy production."
      },
      {
        question: "Do I need a Powerwall with Tesla Solar Roof?",
        answer: "A Powerwall battery isn't technically required, but Tesla's system is heavily optimized for battery storage. Many customers find the system works best with Powerwall for energy management and backup power."
      },
      {
        question: "Can I use third-party monitoring with Tesla Solar Roof?",
        answer: "Tesla doesn't provide API access for third-party monitoring yet. Your primary monitoring is through the Tesla app. Contact Tesla if you need more detailed performance data."
      }
    ]
  },

  {
    slug: "palmetto-solar-system-not-working",
    title: "Palmetto Solar System Not Working? Troubleshooting Guide",
    excerpt: "Palmetto Solar is known for customer service, but even great companies have system failures. Here's what to do.",
    category: "Installer Guide",
    date: "2025-09-01",
    readTime: "8 min read",
    metaDescription: "Palmetto Solar system problems? Learn how to troubleshoot issues and work with Palmetto to get your system fixed.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Palmetto Solar is a Charleston, SC-based company that built its reputation on transparent pricing and strong customer service. Unlike larger installers, Palmetto operates in only a handful of states and focuses on quality over volume. That said, no company is immune to equipment failures and system issues.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Palmetto Solar Installations</h2>
      <p class="mb-4">Palmetto Solar uses primarily SolarEdge string inverters with quality panels (Canadian Solar or Silfab). Some installations use Enphase microinverters. Their system designs tend to be well-executed with proper site assessment and monitoring setup from day one.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Palmetto Solar Issues</h2>
      <p class="mb-4"><strong>Rare but Serious Inverter Failures:</strong> While Palmetto's installation quality is excellent, SolarEdge inverters still occasionally fail. When they do, the entire system produces zero.</p>
      <p class="mb-4"><strong>Monitoring Issues:</strong> Some customers report monitoring connectivity problems with their SolarEdge systems. This doesn't affect production but prevents you from seeing what's happening.</p>
      <p class="mb-4"><strong>Subtle Underperformance:</strong> Some systems operate at 85-90% of expected output consistently. This could indicate a design issue, shading problem, or equipment mismatch.</p>

      ${inlineCta("Palmetto customers deserve to know their systems are working. Use independent monitoring to verify performance.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Check Your Palmetto System</h2>
      <p class="mb-4">Log into your SolarEdge monitoring portal (or Enlighten app if you have Enphase). Look for:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Daily production compared to seasonal average</li>
        <li>Any error codes (these need immediate attention)</li>
        <li>String voltage readings (should be consistent with no significant drops)</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support from Palmetto Solar</h2>
      <p class="mb-4">Palmetto's reputation for customer service is well-earned. If you contact them with a problem, they typically respond quickly. Provide specific details: dates of the problem, monitoring screenshots, and what you see in the app.</p>
      <p class="mb-4">Palmetto operates in: South Carolina, North Carolina, Florida, Georgia, and Virginia. If you're outside these areas, you may have a different installer despite the Palmetto branding.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Coverage</h2>
      <p class="mb-4">Palmetto systems include manufacturer warranties on all equipment: 25 years for panels, 10-25 years for inverters. Palmetto also offers their own service agreements in some cases. Check your paperwork to understand your coverage.</p>

      ${ctaBlock("Get a free health score to verify your Palmetto system is performing optimally.")}
    `,
    faqs: [
      {
        question: "What inverter does Palmetto Solar use?",
        answer: "Most Palmetto systems use SolarEdge string inverters. Some installations use Enphase microinverters. Check your monitoring app or the equipment on your roof to confirm."
      },
      {
        question: "How do I contact Palmetto Solar for support?",
        answer: "Visit palmettosolar.com or call their customer service line. Palmetto is known for responsive support, so you should hear back within 1-2 business days for service issues."
      },
      {
        question: "Is Palmetto Solar available in my state?",
        answer: "Palmetto currently operates in South Carolina, North Carolina, Florida, Georgia, and Virginia. They do not install in other states."
      },
      {
        question: "Can I use SolarDoctor with my Palmetto system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor works with all SolarEdge systems regardless of installer. Get your free health score at no cost."
      }
    ]
  },

  {
    slug: "freedom-solar-system-problems",
    title: "Freedom Solar System Problems: Diagnosis & Support",
    excerpt: "Freedom Solar operates across the Southwest. Here's what to do if your system isn't performing.",
    category: "Installer Guide",
    date: "2025-09-15",
    readTime: "8 min read",
    metaDescription: "Freedom Solar problems and troubleshooting. Learn about common issues and how to get support from Freedom Solar.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Freedom Solar is one of the largest independent solar installers in the Southwest, operating in Arizona, Colorado, New Mexico, and Texas. Founded in 2008, they've built a reputation for quality installations and strong local service. However, even well-established installers experience system failures.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Freedom Solar Equipment Overview</h2>
      <p class="mb-4">Freedom Solar typically uses SolarEdge string inverters or Enphase microinverters, paired with tier-1 panel manufacturers. Their system designs are generally solid, with good attention to monitoring setup and customer education.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Freedom Solar Issues</h2>
      <p class="mb-4"><strong>Inverter Failures:</strong> Like all installers, Freedom Solar systems occasionally experience inverter failures. When a string inverter fails, production drops to zero until replacement.</p>
      <p class="mb-4"><strong>Performance Below Projections:</strong> Some customers report their systems consistently produce 10-20% below the sales estimate. This could indicate a design issue or ongoing shading problem not identified during installation.</p>
      <p class="mb-4"><strong>Service Response Times:</strong> While Freedom Solar generally has good service, response times can vary by location. High-volume areas may experience delays.</p>

      ${inlineCta("Independent monitoring helps you catch issues before they become costly. Freedom Solar customers should monitor their systems closely.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Troubleshooting Your Freedom Solar System</h2>
      <p class="mb-4">Access your monitoring portal (SolarEdge or Enphase, depending on your equipment) and check:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Production trends over the last 6 months</li>
        <li>Comparison of your actual output to projected output</li>
        <li>Any error codes or alerts</li>
      </ul>
      <p class="mb-4">If production is consistently 20%+ below expectations, contact Freedom Solar and request a performance audit. They can determine if it's a design issue, equipment problem, or something else.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support from Freedom Solar</h2>
      <p class="mb-4">Freedom Solar operates primarily in Arizona (most locations), but also in Colorado, New Mexico, and Texas. Contact them through their website or by phone with specific details about your issue.</p>
      <p class="mb-4">For inverter failures or equipment warranties, you can also file claims directly with the equipment manufacturer. This often speeds up the process compared to waiting for the installer to file the claim.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty & Contract Information</h2>
      <p class="mb-4">Review your original contract to understand your service coverage. Freedom Solar systems include manufacturer warranties on equipment (25 years for panels, 10-25 years for inverters), and may include additional service agreements depending on your contract type.</p>

      ${ctaBlock("Monitor your Freedom Solar system independently to catch issues early.")}
    `,
    faqs: [
      {
        question: "Where does Freedom Solar operate?",
        answer: "Freedom Solar primarily operates in Arizona, with locations also in Colorado, New Mexico, and Texas. Check their website to confirm service in your area."
      },
      {
        question: "What inverter is used in Freedom Solar systems?",
        answer: "Freedom Solar uses primarily SolarEdge string inverters and Enphase microinverters. Check your monitoring app to confirm which you have."
      },
      {
        question: "How long does it take Freedom Solar to service a failed system?",
        answer: "Response times vary by location, but Freedom Solar generally schedules service within 1-3 weeks for urgent issues. Call and emphasize if your system is producing zero."
      },
      {
        question: "Can I use SolarDoctor with my Freedom Solar system?",
        answer: "Yes, if you have a SolarEdge system. SolarDoctor works with all SolarEdge installations regardless of installer and provides a free health score."
      }
    ]
  },

  {
    slug: "blue-raven-solar-not-working",
    title: "Blue Raven Solar Not Working? Troubleshooting & Support",
    excerpt: "Blue Raven Solar operates nationally with aggressive growth. Here's what to do when their systems have problems.",
    category: "Installer Guide",
    date: "2025-10-01",
    readTime: "8 min read",
    metaDescription: "Blue Raven Solar problems and solutions. Learn about common issues with Blue Raven installations and how to get support.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Blue Raven Solar is one of the fastest-growing residential solar companies in the US, with operations in 25+ states. Their rapid expansion has brought competitive pricing, but some customers report service gaps and system issues. If you have a Blue Raven system that's not working, here's what you need to know.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Blue Raven Solar System Equipment</h2>
      <p class="mb-4">Blue Raven uses primarily Enphase microinverters in their systems, paired with panels from Canadian Solar, Silfab, or other tier-1 manufacturers. Microinverter systems have advantages (panel-level monitoring, partial shading resilience) but also unique failure modes.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Blue Raven Solar Issues</h2>
      <p class="mb-4"><strong>Microinverter Failures:</strong> Enphase microinverters fail occasionally. When they do, that single panel stops producing, but the rest of the system keeps running. Multiple failures add up quickly.</p>
      <p class="mb-4"><strong>Monitoring Connectivity:</strong> Enphase systems rely on cloud connectivity. Some Blue Raven customers report their systems lose connection to the Enlighten app for extended periods.</p>
      <p class="mb-4"><strong>Service Delays:</strong> Blue Raven's rapid growth has created service backlogs in some regions. Response times of 4-8 weeks for service calls are not uncommon.</p>
      <p class="mb-4"><strong>Warranty Processing:</strong> Some customers report slow warranty claim processing through Blue Raven.</p>

      ${inlineCta("Blue Raven systems need careful monitoring. Watch your Enlighten app for missing panels or failed microinverters.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Diagnosing Blue Raven Problems</h2>
      <p class="mb-4">Log into your Enphase Enlighten app and check:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>Panel Status:</strong> Each panel has its own microinverter. Look for panels showing zero or very low production.</li>
        <li><strong>System Alerts:</strong> Enlighten sends alerts for communication issues or failed inverters.</li>
        <li><strong>Production Trends:</strong> Compare this month to the same month last year. Drops of 15%+ may indicate failed inverters.</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Blue Raven Support</h2>
      <p class="mb-4">Contact Blue Raven through their website or customer portal. Document the problem with screenshots from Enlighten showing which panels aren't producing.</p>
      <p class="mb-4">If Blue Raven is slow to respond, you can file a warranty claim directly with Enphase (the microinverter manufacturer) at enphase.com. Provide serial numbers of failed inverters and documentation of the failure dates.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Blue Raven Warranty Details</h2>
      <p class="mb-4">Blue Raven systems include 25-year panel warranties and 10-25 year Enphase microinverter warranties. These are with the manufacturers, not Blue Raven. You can file claims directly with Enphase if needed.</p>

      ${ctaBlock("Get independent monitoring for your Blue Raven system to track each panel's performance.")}
    `,
    faqs: [
      {
        question: "What inverter does Blue Raven Solar use?",
        answer: "Blue Raven primarily uses Enphase microinverters, with one microinverter per panel. This gives you panel-level production visibility in the Enlighten app."
      },
      {
        question: "How do I access my Blue Raven system monitoring?",
        answer: "Your system uses Enphase Enlighten monitoring. Access it through enlighten.enphaseenergy.com or the Enlighten app on your phone. You'll need your Enphase username and password."
      },
      {
        question: "What does it mean if one of my panels shows zero production?",
        answer: "If a single panel shows zero while others are producing, that panel's microinverter has likely failed. This affects only that panel, not your whole system. File a warranty claim with Enphase or contact Blue Raven."
      },
      {
        question: "How long does Blue Raven take to fix a failed microinverter?",
        answer: "Blue Raven's service times vary by region. Given their rapid growth, expect 4-8 weeks in high-demand areas. You can also file a warranty claim directly with Enphase to potentially speed up the process."
      }
    ]
  },

  {
    slug: "momentum-solar-system-problems",
    title: "Momentum Solar System Problems: Troubleshooting Guide",
    excerpt: "Momentum Solar operates in 20+ states. Here's what to do if your system fails.",
    category: "Installer Guide",
    date: "2025-10-15",
    readTime: "8 min read",
    metaDescription: "Momentum Solar problems and support. Learn about common issues and how to get your system fixed.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Momentum Solar is a national installer operating in over 20 states. They offer flexible financing options and competitive pricing, making them attractive to budget-conscious homeowners. However, rapid growth can sometimes lead to service challenges.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Momentum Solar Equipment & Design</h2>
      <p class="mb-4">Momentum Solar uses a mix of inverter technologies: SolarEdge string inverters and Enphase microinverters are both common in their installations. Panel manufacturers vary by region and availability.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Momentum Solar Issues</h2>
      <p class="mb-4"><strong>Equipment Failures:</strong> Momentum Solar systems experience the same equipment failures as all installers: inverter problems, microinverter failures, and occasional panel issues.</p>
      <p class="mb-4"><strong>Service Response:</strong> Some customers report longer wait times for service appointments. Momentum is growing rapidly, which can strain service capacity.</p>
      <p class="mb-4"><strong>Monitoring Setup:</strong> Not all Momentum customers have monitoring activated from day one. Some need to request it or reactivate their accounts.</p>

      ${inlineCta("Make sure your Momentum Solar system is being monitored. If not, request that monitoring be activated immediately.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Checking Your Momentum System</h2>
      <p class="mb-4">First, determine which inverter type you have. Check your monitoring app or look at your physical equipment:</p>
      <p class="mb-4"><strong>If you have SolarEdge:</strong> Access solaredge.com and register as an owner. You'll see daily production, inverter status, and any error codes.</p>
      <p class="mb-4"><strong>If you have Enphase:</strong> Use the Enlighten app at enlighten.enphaseenergy.com. You'll see per-panel production and any alerts.</p>
      <p class="mb-4">Compare your current production to expected output for your season and location. If you're consistently 20%+ below expected, contact Momentum.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support from Momentum Solar</h2>
      <p class="mb-4">Contact Momentum through their website or customer portal. Provide specific details: which panels/inverters are affected, screenshots of monitoring data, and when the problem started.</p>
      <p class="mb-4">If Momentum is slow to respond, file a warranty claim directly with your equipment manufacturer. For SolarEdge, go to solaredge.com/owners. For Enphase, go to enphase.com.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Coverage</h2>
      <p class="mb-4">Momentum systems include standard manufacturer warranties: 25 years for panels, 10-25 years for inverters. Service coverage depends on your contract — review your paperwork.</p>

      ${ctaBlock("Get a free health score for your Momentum Solar system to verify it's performing optimally.")}
    `,
    faqs: [
      {
        question: "What inverter types does Momentum Solar use?",
        answer: "Momentum Solar uses both SolarEdge string inverters and Enphase microinverters depending on the system design. Check your monitoring app or the equipment on your roof to confirm which you have."
      },
      {
        question: "How do I activate monitoring if it's not already set up?",
        answer: "Contact Momentum Solar and request that your monitoring account be activated. Provide your system's serial number. This should be done at no charge as part of your installation."
      },
      {
        question: "What should I do if Momentum takes too long to schedule service?",
        answer: "File a warranty claim directly with your equipment manufacturer (SolarEdge or Enphase). This often expedites repair without waiting for Momentum's service schedule."
      },
      {
        question: "Can I use SolarDoctor with my Momentum system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor works with all SolarEdge systems and provides a free health score."
      }
    ]
  },

  {
    slug: "trinity-solar-system-not-working",
    title: "Trinity Solar System Not Working? What to Do",
    excerpt: "Trinity Solar operates across the US. Here's how to troubleshoot and get support.",
    category: "Installer Guide",
    date: "2025-11-01",
    readTime: "8 min read",
    metaDescription: "Trinity Solar problems and solutions. Learn about common issues with Trinity Solar installations.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Trinity Solar is a national residential solar installer that has grown rapidly over the past decade. Operating in numerous states, they've built a reputation for competitive pricing and straightforward financing. Like all installers, Trinity Solar customers occasionally experience system failures and service issues.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Trinity Solar System Overview</h2>
      <p class="mb-4">Trinity Solar typically uses SolarEdge string inverters or Enphase microinverters, paired with mainstream panel manufacturers. Their system designs are generally sound, though quality can vary by installation location.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Trinity Solar Issues</h2>
      <p class="mb-4"><strong>Inverter Failures:</strong> Trinity systems experience the same inverter failures as other installers. String inverter failures affect entire system output.</p>
      <p class="mb-4"><strong>Monitoring Problems:</strong> Some Trinity customers report their monitoring was never properly activated or accounts are hard to access.</p>
      <p class="mb-4"><strong>Performance Below Expectations:</strong> Some customers report systems producing 15-20% below the original sales projections.</p>

      ${inlineCta("Don't wait for Trinity Solar to tell you about problems. Monitor your system independently.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Troubleshooting Steps</h2>
      <p class="mb-4">First, access your system's monitoring app (SolarEdge or Enphase). Look for:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Error codes or alerts</li>
        <li>Production significantly below seasonal average</li>
        <li>Zero production on clear sunny days</li>
      </ul>
      <p class="mb-4">If you find problems, document them with screenshots and contact Trinity Solar with specific details.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Contacting Trinity Solar</h2>
      <p class="mb-4">Reach out through Trinity's website or customer portal. If you can't get a response within a week, escalate by filing a complaint with your state's Public Utilities Commission.</p>
      <p class="mb-4">For equipment warranty claims, contact the manufacturer directly (SolarEdge or Enphase) if Trinity is unresponsive.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Information</h2>
      <p class="mb-4">Trinity Solar systems include manufacturer warranties: 25 years for panels, 10-25 years for inverters. These can be claimed directly with manufacturers if needed.</p>

      ${ctaBlock("Get independent monitoring for your Trinity Solar system.")}
    `,
    faqs: [
      {
        question: "What equipment does Trinity Solar use?",
        answer: "Trinity Solar primarily uses SolarEdge string inverters and Enphase microinverters. Check your monitoring app to see which you have."
      },
      {
        question: "How do I access my Trinity Solar monitoring?",
        answer: "Check your welcome materials for SolarEdge or Enphase account information. If you've lost access, contact Trinity Solar and request your account credentials."
      },
      {
        question: "What if my Trinity system produces nothing on a sunny day?",
        answer: "This indicates a critical failure. Contact Trinity immediately. If they can't schedule service quickly, file a warranty claim with your inverter manufacturer."
      },
      {
        question: "Can I monitor my Trinity system without the original monitoring app?",
        answer: "Yes, SolarDoctor can monitor Trinity systems that have SolarEdge inverters, providing a free health score and 24/7 alerts."
      }
    ]
  },

  {
    slug: "sunlux-solar-problems",
    title: "SunLux Solar Problems: Troubleshooting & Support",
    excerpt: "SunLux Solar operates in select states. Here's what to do if your system isn't working.",
    category: "Installer Guide",
    date: "2025-11-15",
    readTime: "8 min read",
    metaDescription: "SunLux Solar problems and solutions. Learn about common issues and how to get support.",
    content: `
      <p class="text-lg text-gray-600 mb-8">SunLux Solar is a regional installer serving customers in select states. Like all solar companies, they install systems that occasionally experience equipment failures or performance issues. If your SunLux system isn't working as expected, here's how to diagnose and fix the problem.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">SunLux Solar System Equipment</h2>
      <p class="mb-4">SunLux systems typically use SolarEdge string inverters or Enphase microinverters, paired with quality panels from mainstream manufacturers. System design quality depends on the specific installation team.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common SunLux Issues</h2>
      <p class="mb-4"><strong>Standard Equipment Failures:</strong> Like all installers, SunLux systems experience occasional inverter or microinverter failures.</p>
      <p class="mb-4"><strong>Service Availability:</strong> SunLux operates only in select states. Outside their service areas, local support may be limited.</p>
      <p class="mb-4"><strong>Monitoring Gaps:</strong> Some customers report monitoring wasn't set up properly during installation.</p>

      ${inlineCta("SunLux Solar systems need independent monitoring to catch failures early.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Checking Your System</h2>
      <p class="mb-4">Access your monitoring account (SolarEdge or Enphase) and check for:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Error codes or system alerts</li>
        <li>Production significantly lower than expected</li>
        <li>Zero production on sunny days</li>
      </ul>
      <p class="mb-4">If you find problems, contact SunLux with documentation. If monitoring isn't activated, request it immediately.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support</h2>
      <p class="mb-4">Reach out to SunLux through their website. For equipment warranty claims, contact your inverter manufacturer directly if SunLux is unresponsive.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Coverage</h2>
      <p class="mb-4">SunLux systems include standard manufacturer warranties on all equipment. You can file claims directly with manufacturers if needed.</p>

      ${ctaBlock("Monitor your SunLux system independently to ensure peak performance.")}
    `,
    faqs: [
      {
        question: "Where does SunLux Solar operate?",
        answer: "SunLux operates in select states. Check their website to confirm if they service your area."
      },
      {
        question: "What inverter does SunLux use?",
        answer: "SunLux typically uses SolarEdge string inverters or Enphase microinverters. Check your monitoring app to confirm."
      },
      {
        question: "How do I activate monitoring for my SunLux system?",
        answer: "Contact SunLux directly and request monitoring activation. Provide your system's serial number. This should be free."
      },
      {
        question: "Can I use SolarDoctor with my SunLux system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor monitors all SolarEdge systems and provides a free health score."
      }
    ]
  },

  {
    slug: "adt-solar-system-not-working",
    title: "ADT Solar System Not Working? Troubleshooting Guide",
    excerpt: "ADT Solar (formerly Sunpro) operates nationwide. Here's what to do when problems arise.",
    category: "Installer Guide",
    date: "2025-12-01",
    readTime: "8 min read",
    metaDescription: "ADT Solar system problems and solutions. Learn about common issues with ADT Solar installations.",
    content: `
      <p class="text-lg text-gray-600 mb-8">ADT Solar, formerly known as Sunpro Solar, is one of the largest solar installers in America, operating in 20+ states. In 2020, Sunpro was acquired by ADT (the home security company) and rebranded as ADT Solar. This acquisition has created some confusion and challenges for existing Sunpro customers.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">ADT Solar Equipment Overview</h2>
      <p class="mb-4">ADT Solar systems typically use SolarEdge string inverters or Enphase microinverters. Older Sunpro installations may have different equipment. System quality varies by installation location and year.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common ADT Solar Issues</h2>
      <p class="mb-4"><strong>Post-Acquisition Confusion:</strong> Many Sunpro customers are confused about warranty coverage and support after the ADT acquisition. Some are unsure who to contact for service.</p>
      <p class="mb-4"><strong>Service Continuity Issues:</strong> Transitioning from Sunpro to ADT created some service gaps. Existing customers may have trouble reaching support.</p>
      <p class="mb-4"><strong>Equipment Failures:</strong> Like all installers, ADT/Sunpro systems experience inverter failures and other hardware problems.</p>

      ${inlineCta("If you have a Sunpro or ADT Solar system, independent monitoring is critical due to service transition challenges.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Determining Your Equipment</h2>
      <p class="mb-4">Check your monitoring app (SolarEdge Owner or Enphase Enlighten) or look at your physical inverter to identify which technology you have. This determines how to get support.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Contacting ADT Solar</h2>
      <p class="mb-4">For new issues, contact ADT Solar through their website. For older Sunpro systems, the transition to ADT may have created support challenges. If ADT is unresponsive:</p>
      <p class="mb-4">1. File a warranty claim directly with your equipment manufacturer (SolarEdge or Enphase)</p>
      <p class="mb-4">2. File a complaint with your state's Public Utilities Commission</p>
      <p class="mb-4">3. Hire an independent contractor for diagnosis and repair</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Details</h2>
      <p class="mb-4">ADT Solar systems include manufacturer warranties on equipment. These exist independently of ADT and can be claimed directly with manufacturers if needed.</p>

      ${ctaBlock("Get a free health score for your ADT or Sunpro solar system.")}
    `,
    faqs: [
      {
        question: "What's the difference between Sunpro Solar and ADT Solar?",
        answer: "Sunpro Solar was acquired by ADT in 2020 and rebranded as ADT Solar. Existing Sunpro customers' systems and warranties remain the same, but support is now through ADT."
      },
      {
        question: "How do I contact ADT Solar for support if I was a Sunpro customer?",
        answer: "Contact ADT Solar through their website or customer service line. Have your account number or system serial number ready. If you can't get a response, file a complaint with your state's Public Utilities Commission."
      },
      {
        question: "What inverter does ADT/Sunpro use?",
        answer: "ADT Solar and Sunpro systems typically use SolarEdge string inverters or Enphase microinverters. Check your monitoring app to confirm which you have."
      },
      {
        question: "Can I use SolarDoctor with my ADT/Sunpro system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor works with all SolarEdge systems regardless of installer."
      }
    ]
  },

  {
    slug: "elevation-solar-system-problems",
    title: "Elevation Solar System Problems: Troubleshooting & Support",
    excerpt: "Elevation Solar operates in select states. Here's how to handle system problems.",
    category: "Installer Guide",
    date: "2025-12-15",
    readTime: "8 min read",
    metaDescription: "Elevation Solar problems and solutions. Learn about common issues with Elevation Solar installations.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Elevation Solar is a regional installer serving customers in multiple states. They focus on quality installations and customer service, but like all companies, their systems occasionally experience failures.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Elevation Solar System Equipment</h2>
      <p class="mb-4">Elevation Solar typically uses SolarEdge string inverters or Enphase microinverters, paired with quality panels. System designs are generally competent.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Elevation Solar Issues</h2>
      <p class="mb-4"><strong>Standard Equipment Failures:</strong> Elevation systems experience the same inverter failures and hardware issues as other installers.</p>
      <p class="mb-4"><strong>Performance Expectations:</strong> Some customers report systems producing below original projections. This could indicate a design or shading issue.</p>

      ${inlineCta("Independent monitoring helps you verify your Elevation Solar system is performing optimally.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Checking Your System</h2>
      <p class="mb-4">Access your monitoring account and compare current production to expected output. If you're consistently 20%+ below expectations, contact Elevation.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support</h2>
      <p class="mb-4">Reach out to Elevation through their website. For equipment claims, contact manufacturers directly if needed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Information</h2>
      <p class="mb-4">Elevation systems include standard manufacturer warranties on all equipment.</p>

      ${ctaBlock("Monitor your Elevation Solar system independently for peace of mind.")}
    `,
    faqs: [
      {
        question: "What inverter does Elevation Solar use?",
        answer: "Elevation Solar typically uses SolarEdge string inverters or Enphase microinverters. Check your monitoring app to confirm."
      },
      {
        question: "How do I contact Elevation Solar?",
        answer: "Contact Elevation Solar through their website or customer portal for support inquiries."
      },
      {
        question: "Can I use SolarDoctor with my Elevation system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor provides free health scores for all SolarEdge systems."
      },
      {
        question: "What should I do if my Elevation system stops producing?",
        answer: "Check your monitoring app for error codes. Contact Elevation immediately with documentation. If they're slow to respond, file a warranty claim with your equipment manufacturer."
      }
    ]
  },

  {
    slug: "sunnova-solar-system-not-working",
    title: "Sunnova Solar System Not Working? What You Need to Know",
    excerpt: "Sunnova is a solar provider offering leases and PPAs. Here's how to handle problems.",
    category: "Installer Guide",
    date: "2026-01-01",
    readTime: "8 min read",
    metaDescription: "Sunnova solar system problems and solutions. Learn about issues with Sunnova-installed systems and how to get support.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Sunnova is a national solar energy services company that operates both as an installer and as a solar provider offering leases and power purchase agreements (PPAs). They operate in numerous states and have millions of customers. If you have a Sunnova system that's not working, understanding your service agreement is key.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Sunnova Systems</h2>
      <p class="mb-4">Sunnova typically uses SolarEdge string inverters or Enphase microinverters. They may own your system (if you have a lease or PPA) or you may own it outright. This determines who's responsible for repairs.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Sunnova Issues</h2>
      <p class="mb-4"><strong>Lease vs. Ownership Confusion:</strong> Some customers are unclear about their service agreement. If Sunnova owns your system (lease/PPA), they're responsible for repairs. If you own it, you are.</p>
      <p class="mb-4"><strong>Slow Service Response:</strong> Some Sunnova customers report delays in scheduling service for failed equipment.</p>
      <p class="mb-4"><strong>Monitoring Problems:</strong> Some customers report issues with monitoring setup or connectivity.</p>

      ${inlineCta("Check your service agreement to understand who's responsible for repairs. Then contact the right party immediately.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is Your System Owned or Leased?</h2>
      <p class="mb-4">Review your original contract. Look for terms like:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>Solar Lease:</strong> Sunnova owns the system. They handle maintenance and repairs. You pay a fixed monthly rate.</li>
        <li><strong>PPA (Power Purchase Agreement):</strong> Sunnova owns the system. You pay for electricity produced. Sunnova handles maintenance.</li>
        <li><strong>Owned System:</strong> You own the system. You're responsible for repairs. You may have warranties from equipment manufacturers.</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">If Your System Fails</h2>
      <p class="mb-4"><strong>If Sunnova owns your system (lease/PPA):</strong> Contact Sunnova immediately. They're contractually obligated to repair or replace failed equipment. Don't wait — every day without production costs them money too.</p>
      <p class="mb-4"><strong>If you own your system:</strong> You're responsible for repairs. File warranty claims with equipment manufacturers or hire independent contractors.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty & Service Agreement Coverage</h2>
      <p class="mb-4">Your service agreement should specify what maintenance and repairs Sunnova covers. Read it carefully. If Sunnova is unresponsive, reference the specific service terms in your agreement.</p>

      ${ctaBlock("Get independent monitoring for your Sunnova system to catch failures early.")}
    `,
    faqs: [
      {
        question: "What equipment does Sunnova use in their systems?",
        answer: "Sunnova typically uses SolarEdge string inverters or Enphase microinverters, paired with quality panels. Check your monitoring app to confirm which you have."
      },
      {
        question: "Does Sunnova own my system or do I?",
        answer: "Check your contract. If you have a lease or PPA with Sunnova, they own it. If you purchased the system outright, you own it. Your contract should clearly state this."
      },
      {
        question: "Who's responsible for repairs if my Sunnova system breaks?",
        answer: "If Sunnova owns the system (lease/PPA), they handle repairs. If you own it, you're responsible. Contact Sunnova immediately if you have a lease/PPA failure."
      },
      {
        question: "What should I do if Sunnova is slow to fix my system?",
        answer: "Reference your service agreement and the specific terms about response times. Escalate through Sunnova's customer service hierarchy. File a complaint with your state's Public Utilities Commission if needed."
      }
    ]
  },

  {
    slug: "pink-energy-solar-system-not-working",
    title: "Pink Energy Solar System Not Working? What Happened & Next Steps",
    excerpt: "Pink Energy closed. If you have their system, here's how to keep it running.",
    category: "Installer Guide",
    date: "2026-01-15",
    readTime: "9 min read",
    metaDescription: "Pink Energy Solar closed. Learn what happened, what your warranty covers, and how to maintain your system independently.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Pink Energy Solar, a national installer, ceased operations in 2023, leaving thousands of customers without direct support. If you have a Pink Energy system, you're now a "solar orphan" — your system is fine, but you need to know how to maintain it independently.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happened to Pink Energy</h2>
      <p class="mb-4">Pink Energy filed for bankruptcy in 2023 after struggling with declining sales and operational challenges. The company ceased operations, leaving thousands of customers without a service provider.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pink Energy System Equipment</h2>
      <p class="mb-4">Pink Energy used primarily SolarEdge string inverters paired with quality panels. Some systems may have Enphase microinverters. Your equipment is legitimate and reliable — the manufacturer still provides warranties even though Pink Energy is gone.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Your System Still Works</h2>
      <p class="mb-4">This is the most important thing to understand: your solar panels and inverter don't need Pink Energy to keep running. They'll continue producing electricity as long as the hardware is functioning properly. Your job is now to monitor them and fix problems when they occur.</p>

      ${inlineCta("Pink Energy is gone, but your equipment warranties are still valid. You just need independent monitoring.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: Understand Your Equipment Warranties</h2>
      <p class="mb-4">Your panels and inverter have manufacturer warranties that are independent of Pink Energy:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>Panels:</strong> 25-year manufacturer warranty (with the panel maker, not Pink Energy)</li>
        <li><strong>SolarEdge Inverter:</strong> 10-25 year warranty with SolarEdge</li>
        <li><strong>Enphase Microinverters:</strong> 10-25 year warranty with Enphase</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: Set Up Independent Monitoring</h2>
      <p class="mb-4">Many Pink Energy customers relied on Pink's monitoring app. Now you need to monitor independently. If you have a SolarEdge system, register at solaredge.com/owners to access the SolarEdge Owner portal. This shows real-time production data.</p>
      <p class="mb-4">Alternatively, use SolarDoctor to get a free health score that compares your actual production to expected output.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Find a Service Provider</h2>
      <p class="mb-4">If something breaks, you don't need the original installer to fix it. Any licensed solar contractor can service Pink Energy systems. When problems occur:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Get a diagnosis from a local contractor (often free)</li>
        <li>If it's a warranty-covered failure, file a claim with the manufacturer</li>
        <li>Let the manufacturer handle the repair under warranty</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Filing Warranty Claims for Pink Energy Systems</h2>
      <p class="mb-4">You can file warranty claims directly with manufacturers without Pink Energy:</p>
      <p class="mb-4"><strong>For SolarEdge inverter failures:</strong> Visit solaredge.com/owners, register your system, and file a warranty claim. SolarEdge will handle the repair or replacement.</p>
      <p class="mb-4"><strong>For panel failures:</strong> Contact the panel manufacturer directly with your panel serial numbers and documentation of the failure.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What If You Have a Lease or PPA?</h2>
      <p class="mb-4">If you didn't own your Pink Energy system outright (you had a lease or PPA), your situation is more complex. Contact the company that owned your system (there may be bankruptcy paperwork specifying this). Your lease or PPA likely transferred to another company.</p>

      ${ctaBlock("Don't let your Pink Energy system become forgotten. Monitor it independently and stay on top of maintenance.")}
    `,
    faqs: [
      {
        question: "When did Pink Energy go out of business?",
        answer: "Pink Energy filed for bankruptcy and ceased operations in 2023, leaving thousands of customers without direct support."
      },
      {
        question: "Is my Pink Energy system still under warranty?",
        answer: "Yes. Your panels have 25-year manufacturer warranties, and your inverter (SolarEdge or Enphase) has 10-25 year warranties. These exist independently of Pink Energy and can be claimed directly with manufacturers."
      },
      {
        question: "How do I file a warranty claim for my Pink Energy system?",
        answer: "File directly with the equipment manufacturer: SolarEdge (solaredge.com/owners) for inverters, or the panel maker for panel failures. You don't need Pink Energy to process these claims."
      },
      {
        question: "Who can service my Pink Energy system now?",
        answer: "Any licensed solar contractor can work on Pink Energy systems. They don't have to be the original installer. Get multiple quotes if major work is needed."
      }
    ]
  },

  {
    slug: "titan-solar-power-system-problems",
    title: "Titan Solar Power System Problems: Troubleshooting Guide",
    excerpt: "Titan Solar Power operates regionally. Here's how to handle system issues.",
    category: "Installer Guide",
    date: "2026-01-30",
    readTime: "8 min read",
    metaDescription: "Titan Solar Power problems and solutions. Learn about common issues with Titan Solar Power installations.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Titan Solar Power is a regional installer serving customers in multiple states. They focus on quality installations and customer support, but like all solar companies, their systems can experience failures and performance issues.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Titan Solar Power Equipment Overview</h2>
      <p class="mb-4">Titan Solar Power typically uses SolarEdge string inverters or Enphase microinverters, paired with quality panels from mainstream manufacturers. System designs are generally competent.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Titan Solar Power Issues</h2>
      <p class="mb-4"><strong>Equipment Failures:</strong> Titan systems experience standard inverter failures and hardware issues common across all installers.</p>
      <p class="mb-4"><strong>Performance Discrepancies:</strong> Some customers report systems producing below original projections.</p>
      <p class="mb-4"><strong>Service Response:</strong> Depending on location, service response times vary.</p>

      ${inlineCta("Independent monitoring is essential for all solar systems, including Titan Solar Power installations.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Monitoring Your Titan System</h2>
      <p class="mb-4">Access your monitoring account (SolarEdge or Enphase) and regularly check:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>Daily production vs. seasonal average</li>
        <li>Any error codes or alerts</li>
        <li>Inverter and string performance</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support from Titan Solar Power</h2>
      <p class="mb-4">Contact Titan through their website with specific details about any issues. For equipment warranty claims, contact manufacturers directly if Titan is slow to respond.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Coverage</h2>
      <p class="mb-4">Titan Solar Power systems include manufacturer warranties on all equipment. These can be claimed directly with manufacturers if needed.</p>

      ${ctaBlock("Monitor your Titan Solar Power system independently for optimal performance.")}
    `,
    faqs: [
      {
        question: "What inverter does Titan Solar Power use?",
        answer: "Titan Solar Power typically uses SolarEdge string inverters or Enphase microinverters. Check your monitoring app to confirm which you have."
      },
      {
        question: "How do I contact Titan Solar Power for support?",
        answer: "Contact Titan Solar Power through their website or customer service portal with specific details about your issue."
      },
      {
        question: "Can I use SolarDoctor with my Titan system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor works with all SolarEdge systems and provides a free health score."
      },
      {
        question: "What should I do if my Titan system underperforms?",
        answer: "Document your production data with screenshots. Contact Titan with this documentation. If they can't resolve it, hire an independent contractor for a second assessment."
      }
    ]
  },

  {
    slug: "solar-optimum-system-not-working",
    title: "Solar Optimum System Not Working? Troubleshooting & Support",
    excerpt: "Solar Optimum operates in select regions. Here's how to handle system problems.",
    category: "Installer Guide",
    date: "2026-02-01",
    readTime: "8 min read",
    metaDescription: "Solar Optimum problems and solutions. Learn about common issues with Solar Optimum systems.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Solar Optimum is a regional solar installer serving customers in select areas. Like all installers, their systems can experience equipment failures and performance issues. Understanding what type of equipment you have and how to monitor it is essential.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Solar Optimum Equipment Overview</h2>
      <p class="mb-4">Solar Optimum systems typically use SolarEdge string inverters or Enphase microinverters, paired with quality panels. System design quality depends on individual installation expertise.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Solar Optimum Issues</h2>
      <p class="mb-4"><strong>Standard Equipment Failures:</strong> Like all installers, Solar Optimum systems experience inverter failures and other hardware issues.</p>
      <p class="mb-4"><strong>Monitoring Setup:</strong> Some customers report monitoring wasn't activated properly during installation.</p>
      <p class="mb-4"><strong>Performance Below Estimates:</strong> Some systems produce below original projections.</p>

      ${inlineCta("Ensure your Solar Optimum system has active monitoring from day one.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Checking Your System</h2>
      <p class="mb-4">Access your monitoring account and check for error codes, unusual production drops, or zero output on sunny days. If anything seems wrong, contact Solar Optimum immediately.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Support</h2>
      <p class="mb-4">Contact Solar Optimum through their website with documentation of any issues. For equipment warranty claims, contact manufacturers directly if needed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Warranty Information</h2>
      <p class="mb-4">Solar Optimum systems include standard manufacturer warranties on all equipment.</p>

      ${ctaBlock("Get independent monitoring for your Solar Optimum system.")}
    `,
    faqs: [
      {
        question: "What inverter does Solar Optimum use?",
        answer: "Solar Optimum typically uses SolarEdge string inverters or Enphase microinverters. Check your monitoring app to confirm."
      },
      {
        question: "How do I activate monitoring if it's not set up?",
        answer: "Contact Solar Optimum and request that monitoring be activated. This should be free and done during or immediately after installation."
      },
      {
        question: "Can I use SolarDoctor with my Solar Optimum system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor provides free health scores for all SolarEdge systems."
      },
      {
        question: "What should I do if my Solar Optimum system stops producing?",
        answer: "Check your monitoring app for error codes. Contact Solar Optimum immediately with screenshots showing the problem. If they're unresponsive, file a warranty claim with your equipment manufacturer."
      }
    ]
  },

  {
    slug: "posigen-solar-system-problems",
    title: "Posigen Solar System Problems: Solutions & Support",
    excerpt: "Posigen operated regionally. Here's what to do if your system has issues.",
    category: "Installer Guide",
    date: "2026-02-08",
    readTime: "8 min read",
    metaDescription: "Posigen Solar problems and solutions. Learn about common issues and how to support your system.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Posigen Solar was a regional installer that has since closed or significantly scaled back operations. If you have a Posigen system, you may be dealing with limited support options. Here's what you need to know about maintaining your system independently.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Posigen System Equipment</h2>
      <p class="mb-4">Posigen systems typically used SolarEdge string inverters or Enphase microinverters. Your equipment is legitimate and has manufacturer warranties regardless of Posigen's current status.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Posigen Issues</h2>
      <p class="mb-4"><strong>Limited Support:</strong> If Posigen is no longer operating in your area, finding support becomes challenging.</p>
      <p class="mb-4"><strong>Standard Equipment Failures:</strong> Your system can still experience inverter failures and other hardware issues.</p>

      ${inlineCta("Posigen customers should prioritize independent monitoring since company support may be limited.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessing Equipment Warranties</h2>
      <p class="mb-4">Your panels and inverter warranties are with the manufacturers, not Posigen. File claims directly:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li>SolarEdge: solaredge.com/owners</li>
        <li>Enphase: enphase.com</li>
        <li>Panel manufacturers (check your documentation)</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Finding Service Support</h2>
      <p class="mb-4">Any licensed solar contractor can service Posigen systems. When you need repair, get quotes from local contractors and work with them directly. Use equipment manufacturer warranties for parts and labor.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Monitoring Your Posigen System</h2>
      <p class="mb-4">If Posigen's monitoring service is unavailable, use manufacturer monitoring instead (SolarEdge Owner or Enphase Enlighten). Alternatively, use SolarDoctor for independent health scores.</p>

      ${ctaBlock("Keep your Posigen system monitored independently to catch failures early.")}
    `,
    faqs: [
      {
        question: "Is Posigen Solar still in business?",
        answer: "Posigen Solar has closed or significantly scaled back operations. Support may be limited or unavailable. Focus on independent monitoring and equipment manufacturer support."
      },
      {
        question: "What equipment does my Posigen system have?",
        answer: "Posigen typically used SolarEdge string inverters or Enphase microinverters. Check your monitoring app or the equipment on your roof to confirm."
      },
      {
        question: "How do I get warranty support without Posigen?",
        answer: "File warranty claims directly with equipment manufacturers: SolarEdge (solaredge.com/owners) for inverters, or panel manufacturers for panels. You don't need Posigen."
      },
      {
        question: "Can I use SolarDoctor with my Posigen system?",
        answer: "Yes, if you have a SolarEdge inverter. SolarDoctor provides free health scores for all SolarEdge systems, even if your original installer is no longer available."
      }
    ]
  },

  {
    slug: "suntuity-solar-system-not-working",
    title: "Suntuity Solar System Not Working? Troubleshooting Guide",
    excerpt: "Suntuity operated regionally. If your system needs help, here's what to do.",
    category: "Installer Guide",
    date: "2026-02-15",
    readTime: "8 min read",
    metaDescription: "Suntuity Solar problems and solutions. Learn how to maintain your system independently.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Suntuity Solar was a regional installer serving customers in select areas. While they are no longer actively installing new systems, many homeowners still have Suntuity systems that need maintenance and monitoring. Here's how to keep your Suntuity system running.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Suntuity System Equipment</h2>
      <p class="mb-4">Suntuity systems typically used SolarEdge string inverters or Enphase microinverters, paired with quality panels. Your equipment has manufacturer warranties that remain valid.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Suntuity Issues</h2>
      <p class="mb-4"><strong>Limited Company Support:</strong> Suntuity is no longer actively serving customers. You need to handle maintenance independently.</p>
      <p class="mb-4"><strong>Standard Equipment Failures:</strong> Like any solar system, yours can experience inverter or hardware failures.</p>

      ${inlineCta("Suntuity is no longer available for support. Independent monitoring is critical for your system.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Monitoring Your Suntuity System</h2>
      <p class="mb-4">Register with your equipment manufacturer's monitoring portal:</p>
      <ul class="list-disc list-inside mb-4 ml-4">
        <li><strong>SolarEdge:</strong> solaredge.com/owners</li>
        <li><strong>Enphase:</strong> enlighten.enphaseenergy.com</li>
      </ul>
      <p class="mb-4">Alternatively, use SolarDoctor for a free health score that compares your actual production to expected output.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Repairs Done</h2>
      <p class="mb-4">When your system needs service, hire any licensed solar contractor. They can diagnose problems and coordinate with equipment manufacturers for warranty repairs. Get multiple quotes if major work is needed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Equipment Warranty Coverage</h2>
      <p class="mb-4">Your panels have 25-year warranties, and inverters have 10-25 year warranties. These are manufacturer warranties that function independently of Suntuity. File claims directly with manufacturers when needed.</p>

      ${ctaBlock("Stay vigilant about monitoring your Suntuity system. Catch problems before they become expensive.")}
    `,
    faqs: [
      {
        question: "Is Suntuity Solar still in business?",
        answer: "Suntuity Solar is no longer actively serving customers. If you have a Suntuity system, you'll need to handle maintenance and monitoring independently."
      },
      {
        question: "What equipment does my Suntuity system use?",
        answer: "Suntuity systems typically used SolarEdge string inverters or Enphase microinverters. Check your monitoring app or physical equipment to confirm."
      },
      {
        question: "How do I file a warranty claim for my Suntuity system?",
        answer: "File directly with equipment manufacturers: SolarEdge (solaredge.com/owners) for inverters, or panel manufacturers for panels. Suntuity doesn't need to be involved."
      },
      {
        question: "Who can service my Suntuity system?",
        answer: "Any licensed solar contractor can work on Suntuity systems. Get multiple quotes and verify licensing before hiring. Most contractors can coordinate with equipment manufacturers for warranty work."
      }
    ]
  }
];
