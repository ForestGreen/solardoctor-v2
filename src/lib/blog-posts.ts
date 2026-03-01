// Blog post data - static content for SEO
// Each post targets specific inverter fault code keywords for organic search traffic

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  metaDescription: string;
  content: string;
  faqs?: FaqItem[];
}

// Helper to generate the CTA block for the end of every blog post
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

// Inline CTA for mid-article placement
function inlineCta(text?: string): string {
  const t = text || "SolarDoctor monitors your system 24/7 and alerts you when something needs attention.";
  return `
    <div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
      <p class="text-green-800 font-medium mb-2">${t}</p>
      <a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a>
    </div>
  `;
}

export const blogPosts: BlogPost[] = [
  // ============================================================
  // EXISTING POSTS (original 6)
  // ============================================================
  {
    slug: "is-my-solar-system-working",
    title: "Is My Solar System Actually Working? 5 Signs It's Not",
    excerpt: "Most homeowners have no idea their solar panels are underperforming. Here are the warning signs you're losing money every month.",
    category: "Monitoring",
    date: "2025-03-01",
    readTime: "6 min read",
    metaDescription: "Most homeowners have no idea their solar panels are underperforming. Here are 5 warning signs you're losing money every month, and what to do about it.",
    content: `
      <p class="text-lg text-gray-600 mb-8">You spent $25,000 or more on solar panels. Your installer promised you'd save hundreds every month on electricity. But how do you actually know if that's happening?</p>
      <p class="mb-4">The uncomfortable truth is that most homeowners have no idea whether their solar system is performing well. The monitoring apps from SolarEdge and Enphase show you kilowatt-hours produced — but they never tell you if that number is <em>good</em> or <em>bad</em> for your system.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #1: Your Electric Bills Are Higher Than Expected</h2>
      <p class="mb-4">This seems obvious, but many homeowners chalk up higher bills to changing utility rates or increased usage. If your bills are consistently higher than what your installer projected, your system may be underperforming.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #2: Your Production Drops Suddenly</h2>
      <p class="mb-4">A sudden drop in production — say 30% or more from one month to the next — usually indicates a hardware failure, like a microinverter going out or a string inverter error. These failures often go unnoticed for months.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #3: Summer Production Isn't Much Higher Than Winter</h2>
      <p class="mb-4">In most of the US, solar production should be 2-3x higher in summer than winter. If your summer and winter numbers are similar, something is likely wrong — shading from new tree growth, a failed panel, or an inverter issue.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #4: Your Monitoring App Shows Error Codes</h2>
      <p class="mb-4">Most homeowners ignore the notifications from their inverter app. But error codes like "DC voltage too low" or "isolation fault" mean your system isn't producing at full capacity. Every day you ignore these alerts costs you money.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #5: Your System Produces Zero on Sunny Days</h2>
      <p class="mb-4">If your monitoring shows zero production on a clear sunny day, your system has a critical failure. This could be a tripped breaker, a failed inverter, or a wiring issue. The longer this goes unaddressed, the more money you lose.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Can You Do About It?</h2>
      <p class="mb-4">The first step is knowing whether your system is actually performing well. SolarDoctor compares your actual production against what your system <em>should</em> produce based on its size, location, and time of year. It gives you a simple health score from 0-100, so you instantly know if something needs attention.</p>
      <p class="mb-4">It's free, takes 2 minutes to set up, and works with any SolarEdge system.</p>
    `,
  },
  {
    slug: "solar-installer-went-out-of-business",
    title: "My Solar Installer Went Out of Business — Now What?",
    excerpt: "Over 100 solar companies filed for bankruptcy in 2024. If your installer is gone, here's how to keep your system running and monitored.",
    category: "Solar Orphans",
    date: "2025-02-15",
    readTime: "8 min read",
    metaDescription: "Over 100 solar companies filed for bankruptcy in 2024, leaving thousands of homeowners without support. Here's what to do if you're a solar orphan.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your solar installer went out of business, you're not alone. Over 100 solar companies filed for bankruptcy or closed in 2024 alone, leaving thousands of homeowners — sometimes called "solar orphans" — without anyone to call when something goes wrong.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Your System Still Works — Probably</h2>
      <p class="mb-4">The good news: your solar panels and inverter don't need your installer to keep running. They'll continue producing electricity as long as the hardware is functioning. The bad news: if something breaks, you need to find help on your own.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: Check Your Equipment Warranties</h2>
      <p class="mb-4">Your installer may be gone, but your equipment warranties likely aren't. Most solar panels have 25-year manufacturer warranties, and inverters typically have 12-25 year warranties. These are with the equipment manufacturer (like SunPower, LG, SolarEdge, Enphase), not your installer.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: Set Up Independent Monitoring</h2>
      <p class="mb-4">Many homeowners relied on their installer to monitor their system. Without them, you need to set up your own monitoring. If you have a SolarEdge or Enphase system, you can use SolarDoctor to get a free health score that tells you if your system is performing as expected.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Find a Local Solar Maintenance Company</h2>
      <p class="mb-4">You don't need your original installer to service your system. Any licensed solar contractor can perform maintenance, diagnose issues, and make repairs. Look for companies that specifically advertise maintenance services — they're used to working on systems they didn't install.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4: Know the Warning Signs</h2>
      <p class="mb-4">The biggest risk for solar orphans isn't that something will break — it's that something will break and you won't notice for months. A failing inverter or cracked panel can silently cost you hundreds of dollars per month in lost production. This is exactly why monitoring matters.</p>
      <p class="mb-4">SolarDoctor was built specifically to solve this problem. We give you a simple health score so you always know how your system is doing — no installer required.</p>
    `,
  },
  {
    slug: "solaredge-error-codes-explained",
    title: "SolarEdge Error Codes Explained in Plain English",
    excerpt: "A homeowner-friendly guide to every SolarEdge inverter error code, what they mean, and what to do about them.",
    category: "Troubleshooting",
    date: "2025-02-01",
    readTime: "10 min read",
    metaDescription: "A homeowner-friendly guide to every SolarEdge inverter error code, what they mean, and what to do about them. Plain English explanations with next steps.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If you've opened your SolarEdge monitoring app and seen an error code, you're probably wondering what it means and whether you should be worried. Most SolarEdge error codes look like cryptic technical jargon — but they're actually telling you something important about your system's health.</p>
      <p class="mb-4">This guide translates every common SolarEdge error code into plain English, explains what's happening with your system, and tells you exactly what to do about it.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding SolarEdge Error Code Format</h2>
      <p class="mb-4">SolarEdge uses a numbering system for its error codes. In newer firmware versions (v3.19xx and later), you'll see codes in an "18x" format. Older firmware uses simpler 2-3 digit numbers. The prefix often tells you what category of issue you're dealing with:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>1x codes</strong> — Normal status (night mode, startup)</li>
        <li><strong>2x codes</strong> — AC voltage and hardware issues</li>
        <li><strong>3x codes</strong> — DC voltage issues from your panels</li>
        <li><strong>18x codes</strong> — Hardware, safety, and critical faults</li>
        <li><strong>41x codes</strong> — Communication errors with optimizers</li>
      </ul>
      ${inlineCta("Don't wait for error codes to tell you something's wrong. SolarDoctor catches production drops before they become critical.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Normal Status Codes (No Action Needed)</h2>
      <p class="mb-4"><strong>Night Mode (1x, 01x)</strong> — Your inverter goes to sleep when there's no sunlight. This is completely normal at night and during heavy cloud cover. If you see this during a sunny day, that's when you should be concerned.</p>
      <p class="mb-4"><strong>DC Mode (04x)</strong> — Your system is operating in DC mode. Normal operation, no action needed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">AC Voltage Errors</h2>
      <p class="mb-4"><strong>AC Overvoltage (2x, 18x37)</strong> — The voltage coming from your utility grid is too high. Your inverter shuts down to protect itself. This is usually a utility issue, not a problem with your solar system. If it happens frequently, contact your power company.</p>
      <p class="mb-4"><strong>AC Undervoltage (18x38)</strong> — The grid voltage is too low. Same idea as above — typically a utility issue. Your inverter will reconnect automatically when voltage stabilizes.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">DC Voltage Errors</h2>
      <p class="mb-4"><strong>DC Overvoltage (3x, 18xD8)</strong> — The voltage from your solar panels is too high. This can happen on very cold, sunny mornings when panel efficiency peaks. It usually resolves itself as panels warm up. If persistent, your system may need a configuration check.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Critical Safety Faults — Take These Seriously</h2>
      <p class="mb-4"><strong>Isolation Fault (18x, 18x86, 03x9a)</strong> — This means there's an electrical leak to ground in your system. <strong>Do not try to power cycle your inverter.</strong> This is a safety issue that requires a professional technician. Common causes include water damage, cracked cable insulation, or a failing power optimizer.</p>
      <p class="mb-4"><strong>Arc Fault (18xC)</strong> — Your system detected dangerous electrical arcing, which is a fire hazard. <strong>Stop operation immediately</strong> and call a professional. This is one of the most serious error codes you can see.</p>
      <p class="mb-4"><strong>Ground Fault / RCD (18x3D, 33x)</strong> — Ground current detected. This is a safety hazard. Contact SolarEdge support immediately and do not reset the inverter.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Temperature Errors</h2>
      <p class="mb-4"><strong>Over-Temperature (145, 18x75)</strong> — Your inverter is too hot. Make sure nothing is blocking the ventilation around it. Clean any dust off the heatsink fins. The inverter will resume operation once it cools down. If this happens frequently, the installation location may need to be evaluated.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Communication Errors</h2>
      <p class="mb-4"><strong>Optimizer Communication Lost (41x)</strong> — Your inverter can't talk to one or more power optimizers on your roof. This could be a wiring issue, a damaged optimizer, or just a temporary glitch. If multiple optimizers drop at once, it's more likely a communication cable issue than individual optimizer failures.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Should You Do?</h2>
      <p class="mb-4">Error codes are your system asking for help. The longer they go unaddressed, the more energy production — and money — you lose. SolarDoctor monitors your system continuously and alerts you the moment something isn't right, so you can address issues before they cost you.</p>
    `,
  },
  {
    slug: "how-much-should-solar-panels-produce",
    title: "How Much Should My Solar Panels Produce Each Month?",
    excerpt: "Your system size, location, and time of year all affect production. Here's how to calculate if you're getting what you paid for.",
    category: "Education",
    date: "2025-01-15",
    readTime: "5 min read",
    metaDescription: "How much energy should your solar panels produce? Learn how system size, location, and seasons affect output and how to know if you're getting what you paid for.",
    content: `
      <p class="text-lg text-gray-600 mb-8">One of the most common questions solar homeowners ask is "how much should my system produce?" The answer depends on several factors, and understanding them helps you know if you're getting the return on investment you were promised.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Basic Formula</h2>
      <p class="mb-4">A rough rule of thumb: a 1 kW solar system produces about 4 kWh per day on average in the US. So a 6 kW system should produce roughly 24 kWh/day, or about 720 kWh/month. But this varies enormously by location and season.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Location Matters — A Lot</h2>
      <p class="mb-4">A 6 kW system in Phoenix, AZ might produce 900+ kWh/month in summer. The same system in Seattle, WA might produce 400 kWh/month. The difference comes down to solar irradiance — how much sunlight actually hits your panels.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Seasonal Swings Are Normal</h2>
      <p class="mb-4">In most US locations, your summer production will be 2-3x your winter production. This is completely normal. Don't panic if January production looks low — compare it to what's expected for January in your area.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How SolarDoctor Helps</h2>
      <p class="mb-4">SolarDoctor uses NREL's PVWatts data (the gold standard for solar production estimates) combined with your system's actual specs and location to calculate exactly what your system should produce each month. Then we compare that to what it actually produced and give you a health score from 0-100.</p>
      <p class="mb-4">A score of 90-110 means your system is healthy. Below 75 means something needs attention.</p>
    `,
  },
  {
    slug: "solar-panel-cleaning-worth-it",
    title: "Is Solar Panel Cleaning Worth It? What the Data Says",
    excerpt: "Dirty panels can lose 5-25% of their output. We break down when cleaning makes financial sense and when it doesn't.",
    category: "Maintenance",
    date: "2025-01-01",
    readTime: "4 min read",
    metaDescription: "Is solar panel cleaning worth the cost? Data shows dirty panels lose 5-25% output. Here's when cleaning makes financial sense and when it doesn't.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Solar panel cleaning is a hot topic — some companies will charge you $200-400 to clean your panels, promising huge production gains. But is it actually worth it?</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What the Research Shows</h2>
      <p class="mb-4">Studies consistently show that dirty panels produce 5-25% less electricity depending on the type and amount of soiling. Bird droppings, pollen, dust, and construction debris are the worst offenders.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When Cleaning Makes Sense</h2>
      <p class="mb-4">Cleaning is worth it if you live in a dusty area, near construction, or if birds frequently perch on or near your panels. It's also worth it if your panels are flat-mounted (no tilt), since rain won't naturally wash them clean.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When It Doesn't</h2>
      <p class="mb-4">If you live in an area with regular rainfall and your panels are tilted 15+ degrees, rain usually does a good enough job. Paying $300 to recover $50 of production doesn't make financial sense.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Know for Sure</h2>
      <p class="mb-4">The best way to know if dirty panels are costing you is to monitor your system's health score over time. If your SolarDoctor health score drops gradually over months, soiling might be the cause. Clean your panels and see if the score recovers.</p>
    `,
  },
  {
    slug: "solar-monitoring-apps-compared",
    title: "Solar Monitoring Apps Compared: SolarEdge vs Enphase vs SolarDoctor",
    excerpt: "Inverter apps show you data. SolarDoctor tells you what that data means. Here's how they differ.",
    category: "Comparison",
    date: "2024-12-15",
    readTime: "7 min read",
    metaDescription: "Compare SolarEdge, Enphase, and SolarDoctor monitoring apps. Learn which gives you the clearest picture of your solar system's health and performance.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Every solar system comes with a monitoring app — SolarEdge has mySolarEdge, Enphase has Enlighten. But these apps have a fundamental limitation: they show you data without context.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Inverter Apps Do Well</h2>
      <p class="mb-4">SolarEdge and Enphase apps show you real-time production data, historical charts, and panel-level monitoring. They're great for seeing how much energy your system produced today or this month.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Missing Piece</h2>
      <p class="mb-4">What they don't tell you is whether that production number is good or bad. If your 6kW system produced 500 kWh last month, is that healthy? You'd need to cross-reference your location's solar irradiance data, adjust for season, panel tilt, and shading — every month. Nobody does that.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How SolarDoctor Is Different</h2>
      <p class="mb-4">SolarDoctor connects to your existing SolarEdge account and automatically compares your actual production to what your system should produce. Instead of raw numbers, you get a health score from 0 to 100. Green means healthy. Yellow means watch it. Red means take action.</p>
      <p class="mb-4">Think of it this way: SolarEdge tells you your blood pressure numbers. SolarDoctor tells you whether those numbers mean you're healthy or need to see a doctor.</p>
    `,
  },

  // ============================================================
  // SOLAREDGE FAULT CODE POSTS (10 new posts)
  // ============================================================
  {
    slug: "solaredge-isolation-fault",
    title: "SolarEdge Isolation Fault: What It Means and How to Fix It",
    excerpt: "An isolation fault on your SolarEdge inverter means electricity is leaking where it shouldn't be. Here's what causes it and what to do.",
    category: "SolarEdge Errors",
    date: "2025-03-10",
    readTime: "7 min read",
    metaDescription: "SolarEdge isolation fault explained. Learn what error codes 18x, 18x86, and 03x9a mean, common causes, and step-by-step troubleshooting for homeowners.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your SolarEdge inverter is showing an isolation fault (error codes 18x, 18x86, or 03x9a), it means electrical current is leaking to ground somewhere in your system. This is one of the most common — and most serious — SolarEdge error codes.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is an Isolation Fault?</h2>
      <p class="mb-4">Your solar system's wiring is supposed to be completely insulated from the ground (the metal frames and mounting rails). An isolation fault means that insulation has broken down somewhere, allowing current to "leak" to ground. Think of it like a water pipe with a crack — the system still works, but something is escaping where it shouldn't.</p>
      <p class="mb-4">Your SolarEdge inverter constantly measures this insulation resistance. When it drops below a safe threshold, the inverter shuts down to protect you and your home.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Water and moisture</strong> are the #1 cause. After heavy rain, water can seep into cable connections, junction boxes, or damaged wire insulation. The fault often appears on rainy days and may disappear when things dry out — but that doesn't mean you should ignore it.</p>
      <p class="mb-4"><strong>Damaged cable insulation</strong> from squirrels, rubbing against mounting hardware, or UV degradation over time is another common culprit.</p>
      <p class="mb-4"><strong>A failing power optimizer</strong> can also cause isolation faults. If one optimizer's internal insulation degrades, it will drag down the isolation resistance of the entire string.</p>
      <p class="mb-4"><strong>Cracked solar panels</strong> can allow moisture into the panel's internal wiring, creating a ground fault path.</p>

      ${inlineCta("SolarDoctor catches production drops from isolation faults before they become safety hazards.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Should Do</h2>
      <p class="mb-4"><strong>Do NOT power cycle your inverter.</strong> Unlike most electronics, turning your inverter off and on won't fix an isolation fault — and can mask a real safety issue.</p>
      <p class="mb-4">Instead:</p>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Note the exact error code from your monitoring app or inverter display</li>
        <li>Check if the fault appeared after rain — this narrows down moisture as the cause</li>
        <li>Contact a certified solar technician. They'll use specialized equipment (a megohmmeter) to measure insulation resistance and pinpoint which string, panel, or optimizer is causing the issue</li>
        <li>If the fault is intermittent (comes and goes), it's still real — don't ignore it because it "fixed itself"</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Is This Costing You?</h2>
      <p class="mb-4">While your inverter is shut down with an isolation fault, your entire system produces zero electricity. For a typical 8kW system, that's roughly $5-15 per day in lost production depending on your location and utility rates. If the fault persists for weeks before you notice, that's hundreds of dollars lost.</p>

      <p class="mb-4">This is exactly why continuous monitoring matters. SolarDoctor tracks your system's health score daily and alerts you immediately when production drops — so you can catch issues like isolation faults before they cost you money.</p>
    `,
    faqs: [
      { question: "What does a SolarEdge isolation fault mean?", answer: "An isolation fault means electrical current is leaking to ground somewhere in your solar system. Your SolarEdge inverter detected that the insulation between your DC wiring and ground has degraded below safe levels, so it shut down to protect your home." },
      { question: "Can I fix a SolarEdge isolation fault myself?", answer: "No. Isolation faults involve potentially dangerous DC voltage and require a certified solar technician with specialized testing equipment (a megohmmeter) to diagnose and repair safely." },
      { question: "How much does a SolarEdge isolation fault cost to repair?", answer: "Repair costs vary from $150-$500 for a simple connector replacement to $1,000+ if a power optimizer or panel needs replacement. If your equipment is under warranty, parts may be covered." },
      { question: "Will a SolarEdge isolation fault go away on its own?", answer: "Sometimes the fault clears temporarily when moisture dries out, but the underlying issue remains. An intermittent isolation fault still indicates degraded insulation that will likely worsen over time." },
    ],
  },
  {
    slug: "solaredge-arc-fault",
    title: "SolarEdge Arc Fault Detected: What It Means and What to Do",
    excerpt: "An arc fault is one of the most serious SolarEdge errors — it means electrical arcing that could cause a fire. Here's what to do.",
    category: "SolarEdge Errors",
    date: "2025-03-09",
    readTime: "6 min read",
    metaDescription: "SolarEdge arc fault detection (error 18xC) explained. What causes electrical arcing in solar systems, why it's dangerous, and what homeowners should do immediately.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your SolarEdge inverter displays an arc fault (error code 18xC), your system has detected dangerous electrical arcing. This is the most serious error code your inverter can display, and it requires immediate attention.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is an Arc Fault?</h2>
      <p class="mb-4">An electrical arc is a spark that jumps across a gap in a circuit. In solar systems, arcs can occur at loose wire connections, corroded terminals, or cracked conductors. They generate extreme heat — hot enough to ignite roofing materials or insulation.</p>
      <p class="mb-4">SolarEdge inverters with AFCI (Arc Fault Circuit Interrupter) technology continuously monitor for the electrical signature of arcing. When detected, the inverter immediately shuts down to prevent fire.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes of Arc Faults</h2>
      <p class="mb-4"><strong>Loose connections</strong> at MC4 connectors, optimizer terminals, or the inverter's DC input are the most common cause. Over time, thermal cycling (heating and cooling) can loosen connections.</p>
      <p class="mb-4"><strong>Corroded or damaged wiring</strong> from animal chewing, UV degradation, or poor initial installation can create gaps that generate arcs.</p>
      <p class="mb-4"><strong>Water intrusion</strong> into connectors or junction boxes can cause intermittent arcing.</p>

      ${inlineCta("Catch system problems before they become safety hazards. SolarDoctor monitors your system 24/7.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Should Do Immediately</h2>
      <p class="mb-4"><strong>Do not attempt to restart your inverter.</strong> An arc fault is a potential fire hazard, and restarting could recreate dangerous conditions.</p>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Leave the system shut down</li>
        <li>Call a certified solar technician or electrician immediately</li>
        <li>Do not go on your roof to inspect — leave this to professionals</li>
        <li>The technician will inspect all connections, wiring, and optimizers to find and repair the arc source</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">False Positives Do Happen</h2>
      <p class="mb-4">SolarEdge's AFCI technology is sensitive by design — it's better to have a false alarm than miss a real arc. Some appliances, power tools, or even certain types of electrical noise can trigger false arc fault detections. A qualified technician can determine if it was a real arc or a false positive.</p>

      <p class="mb-4">Even false positives mean lost production time. SolarDoctor alerts you the moment your system stops producing, so you can get a technician out quickly — whether it's a real fault or a false alarm.</p>
    `,
    faqs: [
      { question: "What causes a SolarEdge arc fault?", answer: "Arc faults are caused by electrical arcing — sparks jumping across a gap in loose connectors, damaged wiring, or corroded contacts. The SolarEdge inverter detects the electrical signature of arcing and shuts down to prevent fire." },
      { question: "Is a SolarEdge arc fault dangerous?", answer: "Yes, arc faults can cause fires if left unaddressed. The arc fault detection system is a safety feature designed to prevent rooftop fires from electrical arcing in your solar system." },
      { question: "How do I reset a SolarEdge arc fault?", answer: "You cannot simply reset an arc fault — the underlying cause (loose connection, damaged wire, or corroded contact) must be found and repaired by a qualified solar technician before the system will operate safely." },
    ],
  },
  {
    slug: "solaredge-communication-error",
    title: "SolarEdge Communication Error: Optimizer Not Reporting",
    excerpt: "If your SolarEdge monitoring shows optimizers offline or communication errors, your system may be losing production. Here's how to fix it.",
    category: "SolarEdge Errors",
    date: "2025-03-08",
    readTime: "6 min read",
    metaDescription: "SolarEdge optimizer communication error (41x) explained. Why optimizers go offline, what it means for production, and how to troubleshoot the issue.",
    content: `
      <p class="text-lg text-gray-600 mb-8">One of the most common SolarEdge issues is the communication error (41x codes) — where one or more power optimizers stop reporting to the inverter. If you see "No Communication" next to specific optimizers in your monitoring portal, here's what's going on.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Does "Communication Error" Mean?</h2>
      <p class="mb-4">Each solar panel in a SolarEdge system has a power optimizer attached to it. These optimizers communicate with the inverter over the DC power lines. A communication error means the inverter hasn't heard from one or more optimizers.</p>
      <p class="mb-4">Important: the optimizer may still be producing power even if it's not reporting. The panel doesn't necessarily stop working — you just lose visibility into that panel's performance.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Loose DC connections</strong> between optimizers or between optimizers and panels can interrupt the communication signal.</p>
      <p class="mb-4"><strong>A single bad optimizer</strong> can disrupt communication for an entire string. Since communication travels along the DC wires, one bad link breaks the chain.</p>
      <p class="mb-4"><strong>Long wire runs</strong> between the panels and inverter can weaken the communication signal, especially in large systems.</p>
      <p class="mb-4"><strong>Electromagnetic interference (EMI)</strong> from nearby equipment can occasionally disrupt power line communication.</p>

      ${inlineCta("SolarDoctor tracks your system's overall health — even when individual components stop reporting.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Troubleshoot</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Check if it's one optimizer or many.</strong> A single optimizer offline might mean that specific optimizer failed. Multiple optimizers in the same string going offline at once usually points to a wiring or connection issue.</li>
        <li><strong>Look at the pattern.</strong> If communication drops happen at certain times of day or weather conditions, it may be an intermittent connection issue exacerbated by thermal expansion.</li>
        <li><strong>Power cycle the inverter</strong> (turn off the DC disconnect, wait 5 minutes, turn it back on). This forces the inverter to re-establish communication with all optimizers.</li>
        <li><strong>If problems persist,</strong> a technician will need to inspect the connections on your roof. They may also need to replace a failed optimizer.</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Hidden Cost</h2>
      <p class="mb-4">Communication errors are sneaky because your system may still appear to be producing power overall. But without optimizer-level data, you won't know if a panel is severely underperforming. SolarDoctor monitors your total system production against expected output — so even if an optimizer goes silent, you'll know if your overall production drops.</p>
    `,
    faqs: [
      { question: "Why is my SolarEdge inverter not communicating?", answer: "Common causes include WiFi or Ethernet connectivity issues, power optimizer communication failures, or a firmware glitch. Check your router connection first, then verify the inverter's communication LEDs." },
      { question: "How do I fix SolarEdge communication errors?", answer: "Start by checking your internet connection to the inverter. Restart your router, verify the Ethernet cable or WiFi dongle is connected, and check if the SolarEdge monitoring portal shows the inverter online. If the issue persists, contact SolarEdge support." },
      { question: "Does a SolarEdge communication error affect production?", answer: "Usually not — communication errors affect monitoring only. Your inverter likely continues producing electricity normally, but you won't see data updates in the monitoring portal until communication is restored." },
    ],
  },
  {
    slug: "solaredge-dc-overvoltage",
    title: "SolarEdge DC Overvoltage Error: Why It Happens and How to Fix It",
    excerpt: "A DC overvoltage error means the voltage from your panels is too high for your inverter. Here's what causes it and whether you should worry.",
    category: "SolarEdge Errors",
    date: "2025-03-07",
    readTime: "5 min read",
    metaDescription: "SolarEdge DC overvoltage error (3x, 18xD8) explained. Why panel voltage gets too high, when it's normal vs. concerning, and what homeowners should do.",
    content: `
      <p class="text-lg text-gray-600 mb-8">A DC overvoltage error on your SolarEdge inverter (error codes 3x or 18xD8) means the voltage coming from your solar panels exceeds the inverter's maximum input voltage. While this sounds alarming, it's often a temporary condition.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Does This Happen?</h2>
      <p class="mb-4">Solar panel voltage increases as temperature decreases. On a cold, clear winter morning, your panels can produce significantly higher voltage than on a hot summer day. If your system was designed close to the inverter's voltage limit, cold mornings can push it over.</p>
      <p class="mb-4">SolarEdge power optimizers help manage voltage, but in some configurations (especially older systems or improperly designed strings), overvoltage can still occur.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is It Dangerous?</h2>
      <p class="mb-4">The inverter protects itself by shutting down when voltage is too high — so there's no immediate safety risk. However, repeated overvoltage events mean lost production. Every time your inverter shuts down, you're generating zero electricity until the voltage drops back within range.</p>

      ${inlineCta()}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do</h2>
      <p class="mb-4"><strong>If it happens occasionally on cold mornings:</strong> This is relatively normal and the system will recover as panels warm up. Monitor the frequency.</p>
      <p class="mb-4"><strong>If it happens frequently:</strong> Your system design may need adjustment. A qualified solar installer can reconfigure your string layout to reduce voltage, or check if the optimizer firmware needs updating.</p>
      <p class="mb-4"><strong>If it's new behavior:</strong> A sudden onset of DC overvoltage errors on an older system could indicate a failing optimizer that's not properly regulating voltage. Have a technician inspect.</p>

      <p class="mb-4">SolarDoctor tracks your daily production and flags days where your health score drops. If DC overvoltage is causing repeated shutdowns, you'll see it reflected in a declining health score — giving you the data you need to justify a service call.</p>
    `,
    faqs: [
      { question: "What does DC overvoltage mean on a SolarEdge inverter?", answer: "DC overvoltage means the voltage from your solar panels exceeds the inverter's maximum input rating. This can happen when panels produce more voltage than expected, often in cold sunny conditions when panel voltage is highest." },
      { question: "Is DC overvoltage dangerous?", answer: "Yes, sustained overvoltage can damage your inverter and void its warranty. The inverter shuts down to protect itself, but repeated overvoltage events indicate a system design issue that needs professional attention." },
      { question: "What causes SolarEdge DC overvoltage?", answer: "The most common cause is too many panels wired in series on a single string, exceeding the inverter's maximum input voltage. Cold temperatures increase panel voltage, which is why this error often appears on cold sunny mornings." },
    ],
  },
  {
    slug: "solaredge-ac-voltage-error",
    title: "SolarEdge AC Voltage Too High or Too Low: Grid Voltage Errors Explained",
    excerpt: "AC voltage errors on your SolarEdge inverter usually point to a problem with your utility grid, not your solar system. Here's what to know.",
    category: "SolarEdge Errors",
    date: "2025-03-06",
    readTime: "5 min read",
    metaDescription: "SolarEdge AC voltage error codes (18x37, 18x38) explained. Why grid voltage goes too high or low, how it affects your solar system, and what you can do about it.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your SolarEdge inverter is showing AC voltage errors (codes 18x37 for high voltage or 18x38 for low voltage), the problem usually isn't your solar system — it's the electrical grid your system connects to.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What's Happening?</h2>
      <p class="mb-4">Your solar inverter must match the grid's voltage and frequency to safely export power. If the grid voltage drifts too high or too low, the inverter shuts down as a safety measure. This protects both your system and the grid.</p>
      <p class="mb-4">Think of it like trying to merge onto a highway — if traffic is moving too fast or too slow, you can't safely merge.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes of High Grid Voltage</h2>
      <p class="mb-4"><strong>Too much solar in your neighborhood.</strong> When many homes on the same transformer have solar systems all producing at peak, the local grid voltage rises. This is especially common in sunny suburban neighborhoods.</p>
      <p class="mb-4"><strong>Long distance from the transformer.</strong> Homes at the end of a power line run often experience higher voltage fluctuations.</p>
      <p class="mb-4"><strong>Utility voltage set too high.</strong> Some utilities maintain higher-than-normal voltage to compensate for long distribution lines.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Can Do</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Report it to your utility.</strong> They may need to adjust the local transformer or voltage settings.</li>
        <li><strong>Check your inverter's country settings.</strong> Make sure the grid protection parameters match your local utility's specifications.</li>
        <li><strong>A qualified installer</strong> may be able to adjust the voltage trip points within permitted ranges (with utility approval).</li>
      </ol>

      ${inlineCta("Grid voltage errors cause lost production. SolarDoctor alerts you when your health score drops so you can take action.")}

      <p class="mb-4">These errors can be frustrating because they're often outside your control. But knowing when they happen — and how much production you're losing — gives you the leverage to work with your utility to resolve the issue. SolarDoctor's health score tracking makes that impact visible.</p>
    `,
    faqs: [
      { question: "What does AC voltage error mean on SolarEdge?", answer: "An AC voltage error means the grid voltage at your home is outside the inverter's acceptable range (typically 211-264V for 240V systems). Your inverter shuts down because it cannot safely export power when grid voltage is too high or too low." },
      { question: "Why does my SolarEdge show AC voltage too high?", answer: "High grid voltage is usually caused by your utility's distribution voltage being above normal, especially during low-demand periods. It can also occur if many solar systems in your neighborhood are exporting simultaneously, pushing local voltage up." },
      { question: "Can I fix a SolarEdge AC voltage error myself?", answer: "You cannot fix grid voltage issues yourself. Contact your utility company to report high or low voltage. A licensed electrician can also check your home's electrical connections for loose or corroded wiring that might cause voltage drops." },
    ],
  },
  {
    slug: "solaredge-temperature-fault",
    title: "SolarEdge Over-Temperature Fault: Why Your Inverter Overheats",
    excerpt: "An over-temperature error means your SolarEdge inverter is running too hot. Usually it's a ventilation issue — here's how to fix it.",
    category: "SolarEdge Errors",
    date: "2025-03-05",
    readTime: "5 min read",
    metaDescription: "SolarEdge over-temperature error (code 145, 18x75) explained. Why inverters overheat, how to improve cooling, and when to call a technician.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your SolarEdge inverter is showing an over-temperature fault (error code 145 or 18x75), it means the internal temperature has exceeded the safe operating limit. The inverter shuts down to protect its components — but while it's off, you're producing zero electricity.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Inverters Overheat</h2>
      <p class="mb-4">Solar inverters convert DC electricity from your panels into AC electricity for your home. This conversion generates heat. Your inverter is designed to handle this heat with built-in heatsinks and fans — but sometimes environmental factors overwhelm the cooling system.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Direct sunlight on the inverter.</strong> If your inverter is mounted on a south-facing wall in direct sun, surface temperatures can exceed 140°F on hot days. The inverter's internal temperature adds to that.</p>
      <p class="mb-4"><strong>Blocked ventilation.</strong> Inverters need airflow around them. If they're installed in a closet, behind landscaping, or with inadequate clearance, heat builds up.</p>
      <p class="mb-4"><strong>Dusty heatsink fins.</strong> Over time, dust, spider webs, and debris accumulate on the heatsink fins, reducing cooling efficiency.</p>
      <p class="mb-4"><strong>Extreme ambient temperatures.</strong> On the hottest days of summer, even a well-installed inverter may temporarily overheat.</p>

      ${inlineCta("SolarDoctor tracks your daily production and alerts you when heat is costing you energy.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Fix It</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Clean the heatsink.</strong> Use a soft brush to remove dust and debris from the ventilation fins.</li>
        <li><strong>Check clearances.</strong> Ensure at least 6-12 inches of clear space on all sides of the inverter for airflow.</li>
        <li><strong>Add shading.</strong> If the inverter is in direct sun, consider adding a small shade structure (not directly on the inverter — maintain airflow).</li>
        <li><strong>Check the fan.</strong> Some SolarEdge models have cooling fans. If yours has one, make sure it's spinning when the inverter is warm.</li>
      </ol>

      <p class="mb-4">If over-temperature faults happen frequently despite good ventilation, it could indicate an internal hardware issue. SolarDoctor's health score helps you track the frequency and production impact of these events, giving you clear data to present to a service technician.</p>
    `,
    faqs: [
      { question: "What does a SolarEdge temperature fault mean?", answer: "A temperature fault means your SolarEdge inverter has overheated and shut down to protect its components. Inverters generate heat during operation and have built-in temperature limits to prevent damage." },
      { question: "How do I fix a SolarEdge overheating inverter?", answer: "Ensure the inverter has adequate ventilation — at least 12 inches of clearance on all sides. Check that vents aren't blocked by debris, cobwebs, or nearby objects. If the inverter is in direct sunlight, consider adding shade. It should restart automatically once it cools down." },
      { question: "At what temperature does a SolarEdge inverter shut down?", answer: "SolarEdge inverters typically begin power derating around 45°C (113°F) internal temperature and will shut down completely if internal temperatures exceed approximately 65°C (149°F). Ambient temperatures above 100°F can trigger issues." },
    ],
  },
  {
    slug: "solaredge-ground-fault",
    title: "SolarEdge Ground Fault (RCD Error): A Serious Safety Alert",
    excerpt: "A ground fault or RCD error on your SolarEdge inverter is a critical safety alert. Don't reset it — here's what to do instead.",
    category: "SolarEdge Errors",
    date: "2025-03-04",
    readTime: "5 min read",
    metaDescription: "SolarEdge ground fault and RCD error (18x3D, 33x) explained. Why ground current is dangerous, what causes it, and why you should never just reset your inverter.",
    content: `
      <p class="text-lg text-gray-600 mb-8">A ground fault error (codes 18x3D or 33x) on your SolarEdge inverter means the system has detected electrical current flowing to ground — a path it should never take. This is a critical safety alert that you should not attempt to fix yourself.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Ground Faults Are Serious</h2>
      <p class="mb-4">In a properly functioning solar system, electricity flows in a closed loop between panels, inverter, and the grid. A ground fault means electricity is "escaping" through the metal frames, mounting rails, or conduit — which can create shock and fire hazards.</p>
      <p class="mb-4">Your inverter's RCD (Residual Current Device) is specifically designed to detect this leakage and shut the system down immediately.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Damaged wire insulation</strong> allowing conductors to touch grounded metal.</p>
      <p class="mb-4"><strong>Water intrusion</strong> into junction boxes, connectors, or conduit.</p>
      <p class="mb-4"><strong>Failing solar panel</strong> with internal insulation breakdown.</p>
      <p class="mb-4"><strong>Rodent damage</strong> to cables (a surprisingly common issue).</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What NOT to Do</h2>
      <p class="mb-4"><strong>Do not reset the inverter</strong> and hope the error goes away. Ground faults are real electrical safety issues. Resetting may clear the error message but doesn't fix the underlying problem — and could be dangerous.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do Instead</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Leave the system in its shutdown state</li>
        <li>Contact SolarEdge support or a certified solar electrician</li>
        <li>The technician will test each string and component to locate the ground fault</li>
        <li>Once repaired, the system can be safely restarted</li>
      </ol>

      ${inlineCta("SolarDoctor alerts you immediately when your system stops producing — including from ground faults.")}

      <p class="mb-4">The longer a ground fault goes unaddressed, the longer your entire system sits idle. With SolarDoctor monitoring, you'll know within a day that something is wrong — not weeks later when your electric bill arrives.</p>
    `,
    faqs: [
      { question: "What is a ground fault on a SolarEdge inverter?", answer: "A ground fault means electrical current is flowing through an unintended path to ground. This is different from an isolation fault — a ground fault indicates actual current flow, while an isolation fault detects reduced insulation resistance." },
      { question: "Is a SolarEdge ground fault dangerous?", answer: "Yes, ground faults can be a fire and shock hazard. Your inverter shuts down immediately when detected. Do not attempt to restart the system — call a qualified solar technician to diagnose and repair the issue." },
      { question: "What causes ground faults in solar systems?", answer: "Common causes include water intrusion into wiring or junction boxes, damaged cable insulation from animals or weather, cracked solar panels allowing moisture in, and failing power optimizers with degraded internal insulation." },
    ],
  },
  {
    slug: "solaredge-night-mode-stuck",
    title: "SolarEdge Stuck in Night Mode: Why Your Inverter Won't Start",
    excerpt: "If your SolarEdge inverter shows 'Night Mode' during the day, something is preventing it from starting. Here are the most likely causes.",
    category: "SolarEdge Errors",
    date: "2025-03-03",
    readTime: "5 min read",
    metaDescription: "SolarEdge inverter stuck in night mode during the day? Learn the common causes — from tripped breakers to failed optimizers — and how to get your system producing again.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Night mode is normal behavior when the sun is down. But if your SolarEdge inverter still shows "Night Mode" (status code 1x) in the middle of a sunny day, your system isn't producing any electricity — and that's a problem.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Night Mode Happens During the Day</h2>
      <p class="mb-4">The inverter enters night mode when it doesn't see enough DC voltage from your panels to start converting power. During the day, this means something is preventing power from reaching the inverter.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Most Common Causes</h2>
      <p class="mb-4"><strong>Tripped DC disconnect.</strong> Check the DC disconnect switch (usually near the inverter or on the roof). If it's been tripped — perhaps during maintenance or accidentally — the inverter has no power input.</p>
      <p class="mb-4"><strong>Tripped AC breaker.</strong> If the AC breaker for your solar system has tripped, the inverter can't export power to the grid and may not start up.</p>
      <p class="mb-4"><strong>Snow or heavy debris covering all panels.</strong> If every panel is completely covered, the voltage may be too low to start the inverter.</p>
      <p class="mb-4"><strong>Failed DC wiring or connection.</strong> A severed or disconnected DC cable between the panels and inverter cuts off all power.</p>
      <p class="mb-4"><strong>Inverter hardware failure.</strong> If the inverter itself has failed, it may sit in night mode permanently.</p>

      ${inlineCta("SolarDoctor detects zero-production days immediately — so you don't lose weeks of energy.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step Troubleshooting</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Check your DC disconnect switch</strong> — make sure it's in the ON position</li>
        <li><strong>Check your AC breaker</strong> for the solar system — reset it if tripped</li>
        <li><strong>Look at the LED lights</strong> on the inverter — no lights at all may indicate no DC power</li>
        <li><strong>Check for visible obstructions</strong> on your panels (snow, debris)</li>
        <li>If none of the above resolves it, <strong>call a solar technician</strong></li>
      </ol>

      <p class="mb-4">A system stuck in night mode means zero production. On a typical 8kW system, that's $5-15 per day in lost energy. SolarDoctor's daily health score will catch this immediately and alert you, rather than waiting until your next electricity bill reveals the problem.</p>
    `,
    faqs: [
      { question: "Why is my SolarEdge inverter stuck in night mode?", answer: "If your SolarEdge inverter shows night mode during daylight hours, it's not receiving enough DC voltage from the panels to start up. This could indicate a tripped DC disconnect, blown fuse, failed optimizer, or wiring issue preventing power from reaching the inverter." },
      { question: "How do I get my SolarEdge out of night mode?", answer: "First check that the DC disconnect switch near your inverter is in the ON position. Check your breaker panel for any tripped breakers. If both are fine, the issue likely requires a technician to diagnose failed optimizers or wiring problems." },
      { question: "Does SolarEdge inverter turn off at night?", answer: "Yes, it's normal for SolarEdge inverters to enter night mode after sunset. The inverter automatically wakes up when solar panels produce enough voltage at sunrise. Night mode only during daytime indicates a problem." },
    ],
  },
  {
    slug: "solaredge-relay-fault",
    title: "SolarEdge Relay Fault: What This Hardware Error Means",
    excerpt: "A relay fault means your SolarEdge inverter has a hardware problem that prevents it from safely connecting to the grid. Here's what to know.",
    category: "SolarEdge Errors",
    date: "2025-03-02",
    readTime: "4 min read",
    metaDescription: "SolarEdge relay fault (error 18xA5) explained. What the output relay does, why it fails, and why this error requires professional service.",
    content: `
      <p class="text-lg text-gray-600 mb-8">A relay fault on your SolarEdge inverter (error code 18xA5 or similar 18xAx codes) indicates a problem with the internal relay that connects your solar system to the grid. This is a hardware failure that requires professional service.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Does the Relay Do?</h2>
      <p class="mb-4">The output relay is a safety switch inside your inverter. It physically connects and disconnects your solar system from the electrical grid. Before the inverter starts exporting power, it tests this relay to make sure it can safely disconnect if needed (like during a power outage). A relay fault means this safety test failed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why This Happens</h2>
      <p class="mb-4"><strong>Mechanical wear.</strong> Relays are electromechanical devices — they have moving parts that eventually wear out after thousands of switching cycles.</p>
      <p class="mb-4"><strong>Power surges.</strong> Lightning strikes or grid surges can damage relay contacts.</p>
      <p class="mb-4"><strong>Manufacturing defect.</strong> In rare cases, the relay may have been defective from the factory.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do</h2>
      <p class="mb-4">A relay fault cannot be fixed by power cycling or changing settings. The inverter needs to be serviced or replaced.</p>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Contact SolarEdge support with the exact error code</li>
        <li>Check if your inverter is still under warranty (most SolarEdge inverters have 12-25 year warranties)</li>
        <li>A certified technician will either repair or replace the inverter</li>
      </ol>

      ${inlineCta("Hardware failures happen. SolarDoctor makes sure you know about them the same day — not months later.")}

      <p class="mb-4">While a relay fault requires professional repair, catching it early minimizes your production losses. SolarDoctor monitors your system's health score daily, so you'll know something is wrong within 24 hours — not when your next electric bill arrives weeks later.</p>
    `,
    faqs: [
      { question: "What is a relay fault on a SolarEdge inverter?", answer: "A relay fault means the internal relay that connects your inverter to the grid has failed or is not operating correctly. The relay is a safety device that disconnects your system from the grid during power outages or faults." },
      { question: "Can a SolarEdge relay fault be repaired?", answer: "Relay faults typically require inverter repair or replacement, as the relay is an internal component. If your inverter is under warranty (typically 12-25 years), SolarEdge may replace it at no cost." },
      { question: "How much does it cost to replace a SolarEdge inverter?", answer: "A new SolarEdge inverter costs $1,000-$2,500 depending on the model and size. Installation labor adds $300-$500. Check your warranty first — most SolarEdge inverters have a 12-year standard warranty, extendable to 25 years." },
    ],
  },
  {
    slug: "solaredge-rapid-shutdown-error",
    title: "SolarEdge Rapid Shutdown Error: Troubleshooting Guide",
    excerpt: "A rapid shutdown error means your SolarEdge system's safety mechanism isn't working properly. Here's what to check.",
    category: "SolarEdge Errors",
    date: "2025-03-01",
    readTime: "5 min read",
    metaDescription: "SolarEdge rapid shutdown (RSD) error troubleshooting guide. What rapid shutdown does, why errors occur, and step-by-step instructions to resolve RSD faults.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Rapid shutdown is a safety feature required by electrical code (NEC 2017 and later) that ensures solar panel voltage drops to safe levels within seconds when the system is shut down. If your SolarEdge inverter shows an RSD error, this safety mechanism has detected a problem.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Rapid Shutdown Does</h2>
      <p class="mb-4">In a SolarEdge system, each power optimizer is responsible for rapid shutdown. When the inverter turns off, the optimizers should reduce panel voltage to less than 1 volt per panel within 30 seconds. This protects firefighters and anyone working on the roof from dangerous DC voltage.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes of RSD Errors</h2>
      <p class="mb-4"><strong>A failed power optimizer</strong> that can't complete the shutdown sequence.</p>
      <p class="mb-4"><strong>Communication issues</strong> between the inverter and optimizers that prevent the shutdown signal from reaching all devices.</p>
      <p class="mb-4"><strong>Incorrect wiring</strong> or an optimizer that wasn't properly connected during installation.</p>

      ${inlineCta()}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Troubleshooting Steps</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Turn off the inverter using the DC switch (set to 0/Off position)</li>
        <li>Wait at least 5 minutes for DC voltage to discharge</li>
        <li>Check that DC voltage has dropped below 30V (if you have a multimeter)</li>
        <li>Verify all optimizer connections are secure</li>
        <li>Turn the system back on and monitor for the error</li>
        <li>If the error returns, contact a certified SolarEdge installer</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Don't Ignore This Error</h2>
      <p class="mb-4">RSD errors affect both safety and production. Your system may continue to produce power, but the safety mechanism that protects people on your roof isn't functioning properly. Get it addressed promptly.</p>

      <p class="mb-4">SolarDoctor monitors your system's overall health and alerts you to any production anomalies. While we can't detect RSD-specific errors, our health score will flag any production drops that result from related issues.</p>
    `,
    faqs: [
      { question: "What is rapid shutdown on a SolarEdge system?", answer: "Rapid shutdown is a safety feature required by electrical code (NEC 2017/2020) that quickly reduces rooftop voltage to safe levels when the system is turned off. SolarEdge power optimizers provide module-level rapid shutdown compliance." },
      { question: "Why is my SolarEdge showing a rapid shutdown error?", answer: "A rapid shutdown error typically means one or more power optimizers are not responding to the shutdown signal. This could be caused by a failed optimizer, communication issue, or wiring problem between the inverter and optimizers." },
      { question: "Is rapid shutdown error dangerous?", answer: "The rapid shutdown system exists to protect firefighters and maintenance workers. If it's not functioning, rooftop DC voltage may remain dangerously high even when the system is turned off. Have it repaired promptly." },
    ],
  },

  // ============================================================
  // ENPHASE FAULT CODE POSTS (10 new posts)
  // ============================================================
  {
    slug: "enphase-microinverter-not-reporting",
    title: "Enphase Microinverter Not Reporting: How to Fix Communication Issues",
    excerpt: "If your Enphase monitoring shows microinverters offline, it's usually a communication problem — not a hardware failure. Here's how to fix it.",
    category: "Enphase Errors",
    date: "2025-03-10",
    readTime: "7 min read",
    metaDescription: "Enphase microinverter not reporting? Learn why communication drops happen, how power line communication works, and step-by-step troubleshooting to get your system back online.",
    content: `
      <p class="text-lg text-gray-600 mb-8">You check your Enphase Enlighten app and see one or more microinverters showing as "Not Reporting." Before you panic, here's the good news: this usually means a communication issue, not a hardware failure. Your microinverters may still be producing power — they're just not telling anyone about it.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Enphase Communication Works</h2>
      <p class="mb-4">Unlike SolarEdge (which uses dedicated communication wiring), Enphase microinverters communicate with your IQ Gateway (formerly called the Envoy) using power line communication (PLC). This means data signals travel over the same AC wires that carry electricity.</p>
      <p class="mb-4">This approach is elegant — no extra wires needed — but it's also susceptible to interference from electrical noise on your home's wiring.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes of Communication Loss</h2>
      <p class="mb-4"><strong>Electrical noise.</strong> LED light dimmers, phone chargers, switching power supplies, and certain appliances can generate electrical noise that interferes with PLC signals.</p>
      <p class="mb-4"><strong>Gateway too far from panel.</strong> If your IQ Gateway is plugged in far from the circuit breaker panel, the signal may be too weak.</p>
      <p class="mb-4"><strong>Tripped breaker.</strong> If the breaker for your solar circuit is off, the gateway can't communicate with the microinverters on that circuit.</p>
      <p class="mb-4"><strong>Gateway malfunction.</strong> The IQ Gateway itself may need a restart or replacement.</p>

      ${inlineCta("SolarDoctor monitors your total system production — so even when individual microinverters go silent, you'll know if output drops.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step Fix</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Wait 24 hours.</strong> Communication drops are often temporary. The system may restore itself.</li>
        <li><strong>Restart the IQ Gateway.</strong> Unplug it, wait 30 seconds, plug it back in. Give it 15 minutes to re-establish communication.</li>
        <li><strong>Move the Gateway closer to your panel.</strong> Plug it into an outlet near your main electrical panel.</li>
        <li><strong>Check for noise sources.</strong> Try unplugging LED dimmers, USB chargers, and other switching devices to see if communication improves.</li>
        <li><strong>Verify the breakers.</strong> Make sure all solar circuit breakers are in the ON position.</li>
        <li><strong>If nothing works,</strong> contact Enphase support or a certified installer.</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is My System Still Producing?</h2>
      <p class="mb-4">In most cases, yes. A communication issue means the microinverter can't report its data, but it's still converting sunlight to electricity. However, without communication, you can't confirm this — which is where monitoring your overall production becomes essential.</p>

      <p class="mb-4">SolarDoctor compares your system's total production against expected output, so even if individual microinverters lose communication, you'll see any real production drops reflected in your health score.</p>
    `,
    faqs: [
      { question: "Why is my Enphase microinverter not reporting?", answer: "The most common cause is a communication issue between the microinverter and your Envoy/IQ Gateway. This can be caused by power line noise, distance from the gateway, a failed microinverter, or a tripped circuit breaker." },
      { question: "Is my Enphase microinverter still producing if not reporting?", answer: "Possibly. A communication failure means the gateway can't see the microinverter, but the microinverter may still be converting DC to AC normally. However, a failed microinverter would also show as not reporting." },
      { question: "How do I fix an Enphase microinverter not reporting?", answer: "Try power cycling your Envoy/IQ Gateway first. If that doesn't work, check if the circuit breaker for the affected panels is tripped. You may need an Enphase technician to test the specific microinverter on the roof." },
    ],
  },
  {
    slug: "enphase-ac-voltage-out-of-range",
    title: "Enphase AC Voltage Out of Range: Causes and Fixes",
    excerpt: "Getting 'AC Voltage Out of Range' alerts from your Enphase system? The problem is usually your utility grid, not your solar panels.",
    category: "Enphase Errors",
    date: "2025-03-09",
    readTime: "6 min read",
    metaDescription: "Enphase AC Voltage Out of Range error explained. Why grid voltage fluctuates, how it affects your solar production, and what homeowners can do about it.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If you're getting "AC Voltage Out of Range" (ACVOOR) notifications from your Enphase Enlighten app, your microinverters are detecting grid voltage that's either too high or too low for safe operation. They temporarily shut down until the voltage normalizes.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What's Happening?</h2>
      <p class="mb-4">Your Enphase microinverters need to match the grid's voltage to safely export power. In the US, standard residential voltage is nominally 240V (split into two 120V legs). If the actual voltage deviates too far from this, the microinverter protects itself and the grid by shutting down.</p>
      <p class="mb-4">Most Enphase microinverters are set to operate between approximately 211V-264V. Outside this range, they stop producing.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Is My Grid Voltage Too High?</h2>
      <p class="mb-4"><strong>Solar saturation.</strong> In neighborhoods with many solar systems, midday voltage can rise significantly. All those systems are pushing power onto the grid simultaneously, raising voltage.</p>
      <p class="mb-4"><strong>Utility voltage regulation.</strong> Your utility may set the local transformer voltage higher than ideal, especially at the end of long distribution lines.</p>
      <p class="mb-4"><strong>Light grid load.</strong> When neighborhood electricity demand is low (midday on weekdays), grid voltage tends to creep up.</p>

      ${inlineCta("ACVOOR errors can silently steal your solar production. SolarDoctor tracks it for you.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Can Do</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Measure your voltage.</strong> If you have a multimeter, check the voltage at a nearby outlet during peak solar hours. Over 126V (on a 120V circuit) is high.</li>
        <li><strong>Contact your utility.</strong> Report persistent high-voltage readings. They may adjust the local transformer tap or voltage regulator.</li>
        <li><strong>Ask your installer</strong> about adjusting the voltage trip thresholds (where permitted by your utility).</li>
        <li><strong>Consider a grid-support inverter setting</strong> — some Enphase models can help manage voltage through reactive power (Volt-VAR).</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Production Are You Losing?</h2>
      <p class="mb-4">ACVOOR errors typically occur during peak solar hours — exactly when your system should be producing the most. Even 1-2 hours of shutdown per day during peak production can cost you 15-25% of your daily output. SolarDoctor's health score makes this impact clearly visible, giving you data to take to your utility.</p>
    `,
    faqs: [
      { question: "What does Enphase AC voltage out of range mean?", answer: "It means the grid voltage at your home is outside the safe operating range for your Enphase microinverters (typically 211-264V). The microinverters shut down to protect themselves and the grid." },
      { question: "Why is my Enphase system showing high voltage?", answer: "High grid voltage is usually caused by your utility's distribution voltage being elevated, multiple solar systems exporting on the same transformer, or loose electrical connections in your home's wiring." },
      { question: "How do I fix Enphase voltage errors?", answer: "Contact your utility company to report voltage issues. An electrician should check your home's electrical panel connections. Enphase microinverters can sometimes be re-profiled to accept a wider voltage range, but this requires Enphase support." },
    ],
  },
  {
    slug: "enphase-gfi-tripped",
    title: "Enphase GFI Tripped / Ground Fault: What to Do",
    excerpt: "A GFI (ground fault) alert on your Enphase system means electricity is leaking to ground. Here's what it means and how to address it.",
    category: "Enphase Errors",
    date: "2025-03-08",
    readTime: "5 min read",
    metaDescription: "Enphase GFI tripped or ground fault detected? Learn what causes ground faults in Enphase systems, how to clear the alert, and when to call a professional.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your Enphase system is showing a "GFI Tripped" or "Ground Fault Detected" alert, it means one or more microinverters have detected ground fault current — electricity flowing where it shouldn't. This alert requires attention, though it's not always as scary as it sounds.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a GFI (Ground Fault Interrupter)?</h2>
      <p class="mb-4">Every Enphase microinverter has a built-in GFI that monitors for electrical current leaking to ground. When it detects more than about 1 amp of leakage, it trips and shuts down the affected microinverter. This is a safety feature designed to prevent electrical shock and fire.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Moisture in connectors.</strong> Rain, condensation, or standing water can cause temporary ground faults. These often clear up when things dry out.</p>
      <p class="mb-4"><strong>Defective solar panel.</strong> A panel with degraded insulation can cause persistent GFI trips.</p>
      <p class="mb-4"><strong>Damaged wiring.</strong> Chewed, cracked, or abraded DC cables between the panel and microinverter.</p>
      <p class="mb-4"><strong>Capacitive leakage.</strong> Some panel types (especially thin-film) can cause nuisance GFI trips due to their electrical characteristics. This is a false positive, not a real safety issue.</p>

      ${inlineCta()}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Clear the Alert</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Try clearing it remotely.</strong> In the Enlighten app or through your IQ Gateway, you can send a "Clear-GFI" command to the affected microinverter.</li>
        <li><strong>If it clears and stays clear,</strong> it was likely a temporary moisture-related issue. Monitor for recurrence.</li>
        <li><strong>If it trips again immediately,</strong> there's a persistent fault. Don't keep clearing it — call a technician.</li>
        <li><strong>A technician will inspect</strong> the DC connections, panel, and microinverter to find the fault source.</li>
      </ol>

      <p class="mb-4">Ground faults shut down individual microinverters, so your system still produces power from the other panels. But each offline microinverter represents lost production. SolarDoctor's health score will reflect this drop, alerting you that your system isn't performing at full capacity.</p>
    `,
    faqs: [
      { question: "What does GFI tripped mean on Enphase?", answer: "GFI (Ground Fault Interrupter) tripped means your Enphase system detected current leaking to ground. This is a safety feature that shuts down the system to prevent shock or fire hazards." },
      { question: "How do I reset an Enphase GFI fault?", answer: "You can try resetting by power cycling your Envoy/IQ Gateway. However, if the GFI keeps tripping, there's an underlying issue — likely moisture intrusion, damaged wiring, or a failing microinverter — that needs professional diagnosis." },
      { question: "Is an Enphase GFI fault dangerous?", answer: "A GFI trip indicates current flowing where it shouldn't, which can be a shock or fire hazard. While the safety system is doing its job by shutting down, the root cause should be diagnosed and repaired by a qualified technician." },
    ],
  },
  {
    slug: "enphase-over-temperature",
    title: "Enphase Over-Temperature Error: Why Your Microinverter Runs Hot",
    excerpt: "An over-temperature alert means your Enphase microinverter is throttling output due to heat. Here's what's normal and what's not.",
    category: "Enphase Errors",
    date: "2025-03-07",
    readTime: "5 min read",
    metaDescription: "Enphase microinverter over-temperature error explained. Why microinverters overheat on hot days, how thermal derating works, and what you can do about it.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your Enphase monitoring shows an over-temperature alert, your microinverter has gotten too hot and is reducing its power output to cool down. This is called "thermal derating" — and while it's designed to protect the hardware, it means you're producing less electricity than you could be.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Thermal Derating Works</h2>
      <p class="mb-4">Unlike string inverters that are mounted on a wall with room to breathe, Enphase microinverters sit directly underneath each solar panel. They're exposed to the same heat that bakes your roof on a summer day. When internal temperatures get too high, the microinverter automatically reduces its power output to generate less heat.</p>
      <p class="mb-4">This is a gradual process — the hotter it gets, the more it throttles back. In extreme cases, it may shut down entirely until temperatures drop.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is This Normal?</h2>
      <p class="mb-4"><strong>Some thermal derating on the hottest days is normal.</strong> Microinverters are rated for extreme temperatures, but on a 110°F roof surface, even well-designed electronics struggle.</p>
      <p class="mb-4"><strong>Frequent over-temperature alerts are not normal.</strong> If you see these regularly — especially on moderately warm days — there may be a ventilation issue or hardware problem.</p>

      ${inlineCta("SolarDoctor tracks your daily production. If heat is costing you energy, you'll see it in your health score.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Can Do</h2>
      <p class="mb-4"><strong>Check mounting clearance.</strong> Microinverters need a few inches of airflow beneath the panel. If a panel is mounted flush to the roof with no gap, heat can build up dramatically.</p>
      <p class="mb-4"><strong>Verify installation.</strong> Make sure the microinverter is mounted in the correct orientation and location per Enphase's installation guide.</p>
      <p class="mb-4"><strong>Consider the bigger picture.</strong> On extremely hot days, some derating is unavoidable. But if your health score consistently drops in summer, there may be an addressable issue.</p>

      <p class="mb-4">SolarDoctor's health score accounts for weather conditions, so it can distinguish between normal seasonal variation and abnormal performance. If your summer scores are consistently low, it may be time for an inspection.</p>
    `,
    faqs: [
      { question: "What temperature do Enphase microinverters shut down?", answer: "Enphase microinverters begin derating power output around 65°C (149°F) and will shut down at approximately 85°C (185°F). Since they're mounted behind solar panels, roof temperatures directly affect them." },
      { question: "How do I cool down my Enphase microinverters?", answer: "Ensure adequate airflow under the panels — at least 3-4 inches of clearance between panels and roof. There's no way to actively cool microinverters, but they should restart automatically once they cool to safe temperatures." },
      { question: "Is Enphase over-temperature a sign of failure?", answer: "Occasional temperature shutdowns on extremely hot days are normal. However, frequent shutdowns or shutdowns on moderate days may indicate a failing microinverter, poor installation with inadequate ventilation, or unusual heat buildup." },
    ],
  },
  {
    slug: "enphase-dc-voltage-low",
    title: "Enphase DC Too Low Error: What It Means for Your System",
    excerpt: "A 'DC Too Low' error usually means low light conditions, but if it happens during sunny weather, there may be a real problem.",
    category: "Enphase Errors",
    date: "2025-03-06",
    readTime: "4 min read",
    metaDescription: "Enphase DC Too Low voltage error explained. When it's normal (sunrise/sunset) vs. when it indicates a real problem with your solar panels or wiring.",
    content: `
      <p class="text-lg text-gray-600 mb-8">A "DC Too Low" message in your Enphase Enlighten app means a microinverter is receiving less voltage from its solar panel than the minimum needed to operate. This is often normal — but not always.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When DC Too Low Is Normal</h2>
      <p class="mb-4"><strong>Sunrise and sunset.</strong> As the sun rises and sets, there's a brief period where panels produce some voltage but not enough for the microinverter to start converting power. You'll see "DC Too Low" during these transition periods every day.</p>
      <p class="mb-4"><strong>Heavy cloud cover.</strong> Very overcast days can reduce panel output enough to trigger this message temporarily.</p>
      <p class="mb-4"><strong>Snow covering.</strong> Panels covered with snow produce very little voltage.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When It's a Problem</h2>
      <p class="mb-4"><strong>During clear sunny conditions.</strong> If a microinverter shows "DC Too Low" in the middle of a sunny day, something is wrong with either the panel or the connection.</p>
      <p class="mb-4"><strong>Only on specific microinverters.</strong> If most of your system is producing normally but one or two show this error in good conditions, those specific panels or connections have an issue.</p>

      ${inlineCta()}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Possible Causes</h2>
      <p class="mb-4"><strong>Loose DC connector</strong> between the panel and microinverter, causing intermittent power loss.</p>
      <p class="mb-4"><strong>Failed solar panel.</strong> A panel with internal cell damage may produce insufficient voltage.</p>
      <p class="mb-4"><strong>Shading.</strong> New tree growth or a new structure may be shading specific panels.</p>
      <p class="mb-4"><strong>Incompatible panel.</strong> If a panel was replaced with a different model, it may not meet the microinverter's minimum voltage requirements.</p>

      <p class="mb-4">SolarDoctor monitors your system's overall health score. If "DC Too Low" errors are affecting your total production, you'll see it reflected in a declining score — helping you identify when a simple sunrise message becomes a real issue.</p>
    `,
    faqs: [
      { question: "What causes low DC voltage on Enphase microinverters?", answer: "Low DC voltage typically means the solar panel connected to that microinverter isn't producing enough power. Common causes include heavy shading, a cracked or degraded panel, dirty panels, or wiring issues between the panel and microinverter." },
      { question: "Can shading cause Enphase DC voltage low errors?", answer: "Yes. Even partial shading on a single panel can drop its voltage below the microinverter's minimum threshold. Trees, chimneys, or new construction casting shadows are common culprits." },
      { question: "How do I fix Enphase DC low voltage?", answer: "Check for obvious shading or debris on the affected panel. If the panel is clean and unshaded, the panel itself may be degraded or the wiring connections may be loose. A technician can test the panel's output with a multimeter." },
    ],
  },
  {
    slug: "enphase-dc-resistance-low",
    title: "Enphase DC Resistance Low - Power Off: What It Means",
    excerpt: "The 'DC Resistance Low - Power Off' alert is Enphase's most serious fault. Your microinverter detected dangerous insulation breakdown.",
    category: "Enphase Errors",
    date: "2025-03-05",
    readTime: "5 min read",
    metaDescription: "Enphase DC Resistance Low - Power Off error explained. What insulation resistance means, why this fault is serious, and how to reset or resolve it safely.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your Enphase system shows "DC Resistance Low - Power Off," the microinverter has detected that the insulation resistance between the solar panel's conductors and ground has fallen below a safe threshold. The microinverter stops producing power and stays off until manually reset.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why This Is Serious</h2>
      <p class="mb-4">Low insulation resistance (also called low IR) means there's a potential path for electrical current to flow to ground through the panel's frame or mounting system. This can create shock and fire hazards. That's why the microinverter won't restart on its own — it requires a deliberate manual reset to confirm the issue has been addressed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Moisture intrusion</strong> into the panel, junction box, or MC4 connectors is the most common cause. This often happens after heavy rain or in humid climates.</p>
      <p class="mb-4"><strong>Panel manufacturing defect.</strong> Internal insulation breakdown within the solar panel itself.</p>
      <p class="mb-4"><strong>Physical damage.</strong> A cracked panel, damaged backsheet, or compromised junction box seal.</p>
      <p class="mb-4"><strong>Aging.</strong> Insulation naturally degrades over time, especially in extreme climates.</p>

      ${inlineCta("SolarDoctor alerts you when microinverters go offline — so you can address DC resistance issues fast.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Reset</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Open the Enphase Enlighten app or access your IQ Gateway interface</li>
        <li>Navigate to the affected microinverter</li>
        <li>Send a "Clear DC Resistance Low" command</li>
        <li>If the microinverter restarts and stays running, the issue was likely temporary (moisture)</li>
        <li>If it immediately trips again, the panel or wiring has a persistent fault and needs professional inspection</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Don't Ignore Recurring Faults</h2>
      <p class="mb-4">If you successfully clear this fault but it comes back — especially after rain — don't keep resetting it. A persistent insulation fault is a real safety issue that needs to be properly diagnosed and repaired by a qualified solar technician.</p>

      <p class="mb-4">SolarDoctor tracks each microinverter's contribution to your overall health score. A single offline microinverter might only drop your score a few points, but it's still lost energy and a safety signal worth investigating.</p>
    `,
    faqs: [
      { question: "What does DC resistance low mean on Enphase?", answer: "Low DC resistance means the insulation between the DC wiring and ground has degraded. This is similar to an isolation fault and indicates potential current leakage that could be a safety hazard." },
      { question: "What causes low DC resistance in solar systems?", answer: "The most common cause is moisture intrusion into wiring, connectors, or the solar panel itself. Damaged cable insulation from animals, weather, or UV degradation can also reduce resistance over time." },
      { question: "Is low DC resistance dangerous?", answer: "Yes, low insulation resistance can lead to ground faults, which pose shock and fire risks. The microinverter shuts down as a safety measure. Have a qualified technician diagnose the specific panel and wiring causing the issue." },
    ],
  },
  {
    slug: "enphase-no-grid-detected",
    title: "Enphase No Grid / Grid Lost Error: Why Your System Stopped",
    excerpt: "If your Enphase system shows 'No Grid' or 'Grid Lost,' your microinverters can't detect a valid electrical grid to export power to.",
    category: "Enphase Errors",
    date: "2025-03-04",
    readTime: "5 min read",
    metaDescription: "Enphase No Grid or Grid Lost error explained. Why microinverters need grid power to operate, common causes of grid loss, and how to get your system running again.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your Enphase monitoring shows "No Grid" or "Grid Lost," your microinverters have stopped producing because they can't detect a valid AC grid connection. Without grid power, standard (non-battery) solar systems cannot operate — this is a safety feature, not a malfunction.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Solar Needs the Grid</h2>
      <p class="mb-4">Grid-tied solar systems (which is what most homes have) are required by law to shut down when the grid goes down. This is called "anti-islanding" — it prevents your solar system from feeding electricity into power lines that utility workers may be repairing. Without this protection, line workers could be electrocuted.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Power outage.</strong> If your neighborhood loses power, your solar system shuts down too. This is normal and expected.</p>
      <p class="mb-4"><strong>Tripped breaker.</strong> If the AC breaker for your solar system trips, the microinverters lose their grid reference and shut down — even though the rest of your house has power.</p>
      <p class="mb-4"><strong>Loose AC connection.</strong> A problem with the AC wiring between your microinverters and your electrical panel.</p>
      <p class="mb-4"><strong>Utility disconnect.</strong> If your utility company disconnected your meter or service for any reason.</p>

      ${inlineCta("A system producing zero power is losing you money every hour. SolarDoctor alerts you the same day.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Check if you have utility power.</strong> Are your lights and appliances working? If not, it's a grid outage — your solar will restart automatically when power returns.</li>
        <li><strong>Check your solar breaker.</strong> Look at your electrical panel for the breaker labeled "Solar" or "PV." If it's tripped, reset it.</li>
        <li><strong>Check the AC disconnect.</strong> There may be a separate AC disconnect switch near your panel or meter. Make sure it's in the ON position.</li>
        <li><strong>If all of the above looks fine,</strong> contact a solar electrician to check the AC wiring.</li>
      </ol>

      <p class="mb-4">Grid loss means zero solar production. For a typical system, every day offline costs $5-15 in lost energy. SolarDoctor's health score will drop to zero when your system isn't producing, alerting you immediately so you can investigate.</p>
    `,
    faqs: [
      { question: "Why does my Enphase say no grid detected?", answer: "This means the microinverters cannot detect a stable grid connection. Causes include a power outage, tripped breaker, blown fuse, loose wiring, or the utility performing maintenance. Without grid, the system cannot export power." },
      { question: "Can Enphase work without grid power?", answer: "Standard Enphase microinverter systems require grid power to operate and will shut down during outages. If you have an Enphase IQ Battery and Enphase System Controller, you can operate in backup mode during outages." },
      { question: "How do I fix Enphase no grid detected?", answer: "First check if your area is experiencing a power outage. Check your electrical panel for tripped breakers. If the grid is up and breakers are fine, the issue may be a loose connection at the panel or meter — call an electrician." },
    ],
  },
  {
    slug: "enphase-gateway-not-reporting",
    title: "Enphase Gateway Not Reporting: How to Get Back Online",
    excerpt: "If your Enphase Gateway (Envoy) has lost internet connection, you lose monitoring visibility — but your panels are probably still producing.",
    category: "Enphase Errors",
    date: "2025-03-03",
    readTime: "5 min read",
    metaDescription: "Enphase IQ Gateway or Envoy not reporting to Enlighten? Step-by-step guide to restoring your internet connection and getting monitoring back online.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your Enphase Enlighten app shows "Gateway Not Reporting" or your system data has gone stale, your IQ Gateway (or older Envoy) has lost its internet connection. The good news: your solar system is almost certainly still producing power. The bad news: you're flying blind without monitoring data.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What the Gateway Does</h2>
      <p class="mb-4">Your IQ Gateway is the bridge between your microinverters and the cloud. It collects production data from each microinverter over your home's electrical wiring and sends it to Enphase's servers via your home internet connection. When that internet connection breaks, the data stops flowing — but the microinverters keep working independently.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Quick Fixes</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Check the Gateway LED lights.</strong> The top-right LED (Communications) should be solid green when connected to the internet. If it's not lit or is flashing, there's a network issue.</li>
        <li><strong>Restart your router.</strong> Unplug it for 30 seconds, plug it back in, wait 5 minutes.</li>
        <li><strong>Restart the Gateway.</strong> Unplug the Gateway from the wall, wait 30 seconds, plug it back in. Give it 15 minutes to reconnect.</li>
        <li><strong>Check the ethernet cable.</strong> If your Gateway uses a wired connection, make sure the ethernet cable is firmly plugged into both the Gateway and your router.</li>
        <li><strong>Check your router settings.</strong> Make sure DHCP is enabled and no MAC filtering is blocking the Gateway.</li>
      </ol>

      ${inlineCta("SolarDoctor uses your inverter's API data directly — so even when your gateway has issues, we can often still calculate your health score.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">If Nothing Works</h2>
      <p class="mb-4">If you've restarted everything and the Gateway still won't connect, the Gateway itself may need replacement. Contact Enphase support — the Gateway has its own warranty separate from your microinverters.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Real Risk of Losing Monitoring</h2>
      <p class="mb-4">Your system produces power without monitoring. But if a microinverter fails while your Gateway is offline, you have no way of knowing. By the time monitoring is restored and you discover the issue, weeks of production may have been lost. This is why keeping your Gateway online matters — it's your window into your solar investment's health.</p>
    `,
    faqs: [
      { question: "Why is my Enphase Envoy/Gateway not reporting?", answer: "The gateway may have lost its internet connection (WiFi or Ethernet), lost power, or experienced a firmware issue. Check that the gateway has power and its LED indicators show normal status." },
      { question: "How do I reconnect my Enphase Envoy to WiFi?", answer: "Access the Envoy's local interface by connecting to its WiFi hotspot (AP mode), or connect a computer via Ethernet. Navigate to the network settings and re-enter your WiFi credentials. You can also use the Enphase Installer Toolkit app." },
      { question: "Does my Enphase system work if the gateway is offline?", answer: "Yes, your microinverters continue producing electricity even if the gateway is offline. The gateway is only needed for monitoring and communication — it doesn't control the microinverters' operation." },
    ],
  },
  {
    slug: "enphase-led-status-lights",
    title: "Enphase Microinverter LED Lights: What Every Color Means",
    excerpt: "The LED light on your Enphase microinverter tells you everything about its status. Here's how to decode green, orange, and red lights.",
    category: "Enphase Errors",
    date: "2025-03-02",
    readTime: "5 min read",
    metaDescription: "Decode your Enphase microinverter LED status lights. What solid green, flashing green, flashing orange, flashing red, and solid red all mean, with troubleshooting steps.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Every Enphase microinverter has a small LED light that tells you its current status. If you're on the roof (or can safely see the LEDs), these lights are the quickest way to diagnose what's happening with your system. Here's what each color and pattern means.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Solid Green (After Startup)</h2>
      <p class="mb-4"><strong>What it means:</strong> Normal. The microinverter has powered up successfully after receiving DC power from the solar panel. This is the first thing you should see about 6 seconds after DC power is applied.</p>
      <p class="mb-4"><strong>Action:</strong> None — everything is working.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Flashing Green</h2>
      <p class="mb-4"><strong>What it means:</strong> The microinverter is producing power normally AND communicating with the IQ Gateway. This is the ideal status — it means the grid is valid and data is being reported.</p>
      <p class="mb-4"><strong>Action:</strong> None — this is the best status you can see.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Flashing Orange</h2>
      <p class="mb-4"><strong>What it means:</strong> The microinverter is producing power (grid is valid) but is NOT communicating with the IQ Gateway. Your panel is generating electricity, but the data isn't being reported.</p>
      <p class="mb-4"><strong>Action:</strong> Check power line communication. Restart the IQ Gateway. Check for electrical noise interference from appliances.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Flashing Red</h2>
      <p class="mb-4"><strong>What it means:</strong> The AC grid is invalid — the microinverter cannot detect proper grid voltage or frequency. The microinverter is NOT producing power.</p>
      <p class="mb-4"><strong>Action:</strong> Check if you have utility power. Check the solar circuit breaker. If the grid is fine but the LED is still red, there may be an AC wiring issue.</p>

      ${inlineCta("Can't get on the roof to check LEDs? SolarDoctor monitors your system remotely and tells you when something's wrong.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Solid Red</h2>
      <p class="mb-4"><strong>What it means:</strong> A DC resistance low fault has been detected AND the AC grid is invalid. This is the most serious status.</p>
      <p class="mb-4"><strong>Action:</strong> This indicates both a safety fault and grid issue. Contact a technician immediately.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Solid Red + Flashing Green</h2>
      <p class="mb-4"><strong>What it means:</strong> A DC resistance low fault is active, but the AC grid is valid. The microinverter has shut down due to the insulation fault.</p>
      <p class="mb-4"><strong>Action:</strong> Clear the DC resistance low fault through the Enlighten app or IQ Gateway. If it returns, contact a professional.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">No Light At All</h2>
      <p class="mb-4"><strong>What it means:</strong> The microinverter has no DC power input. Either the panel isn't connected, the DC cable is damaged, or the panel itself has failed.</p>
      <p class="mb-4"><strong>Action:</strong> Check the DC connection between the panel and microinverter. If connections look good, the panel or microinverter may need replacement.</p>

      <p class="mb-4">Most homeowners can't easily check LED lights on their roof. That's why remote monitoring is essential. SolarDoctor tracks your system's overall performance and alerts you to any drops — no ladder required.</p>
    `,
    faqs: [
      { question: "What do the LED lights on my Enphase Envoy mean?", answer: "Green solid means normal operation. Green flashing means the system is producing power. Orange indicates a condition that needs attention. Red means a critical issue requiring immediate service. Check the Enphase app for detailed status." },
      { question: "Why is my Enphase Envoy flashing red?", answer: "A red LED indicates a critical fault such as a ground fault, grid voltage issue, or hardware failure. Check the Enphase Enlighten app or Installer Toolkit for the specific error code and contact a qualified technician." },
      { question: "What does orange light on Enphase mean?", answer: "An orange LED typically indicates a non-critical issue like one microinverter not communicating, a firmware update available, or a minor grid condition. The system is usually still producing but something needs attention." },
    ],
  },
  {
    slug: "enphase-ac-frequency-out-of-range",
    title: "Enphase AC Frequency Out of Range: Grid Instability Explained",
    excerpt: "An AC frequency error means your local grid's electrical frequency has drifted outside safe limits. Here's why it happens.",
    category: "Enphase Errors",
    date: "2025-03-01",
    readTime: "4 min read",
    metaDescription: "Enphase AC Frequency Out of Range (ACFOOR) error explained. What grid frequency instability means, why your microinverters shut down, and what homeowners can do.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your Enphase system shows "AC Frequency Out of Range" (ACFOOR), your microinverters have detected that the grid's electrical frequency has drifted outside the acceptable range (typically 59.3-60.5 Hz in the US). The microinverters shut down as a safety measure.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Grid Frequency?</h2>
      <p class="mb-4">The US power grid operates at 60 Hz — meaning the AC voltage cycles 60 times per second. This frequency must be precisely maintained for all connected equipment to work properly. When the grid is under stress (high demand, generator trips, or transmission problems), the frequency can waver.</p>
      <p class="mb-4">Your microinverters are required by code to disconnect when the frequency drifts too far from 60 Hz. This is an anti-islanding safety requirement.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Causes</h2>
      <p class="mb-4"><strong>Grid instability events.</strong> Brownouts, rolling blackouts, or utility equipment failures can cause frequency deviations.</p>
      <p class="mb-4"><strong>Generator interference.</strong> If you or a neighbor are running a backup generator, it may not maintain precise frequency.</p>
      <p class="mb-4"><strong>High-stress grid conditions.</strong> Extreme heat days with heavy air conditioning load can strain the grid enough to cause frequency deviations.</p>

      ${inlineCta("Grid frequency issues are out of your control — but knowing how much production you're losing isn't. SolarDoctor tracks it.")}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Can Do</h2>
      <p class="mb-4"><strong>In most cases, nothing.</strong> Grid frequency issues are a utility-side problem. Your microinverters will automatically restart when frequency returns to the normal range.</p>
      <p class="mb-4"><strong>If it's frequent,</strong> report it to your utility company. Persistent frequency issues may indicate infrastructure problems that need to be addressed.</p>
      <p class="mb-4"><strong>Check your generator.</strong> If you have a backup generator, make sure it's not running simultaneously with your solar system (unless you have an Enphase IQ8 system with Sunlight Backup).</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Often Does This Happen?</h2>
      <p class="mb-4">In areas with a stable grid, AC frequency errors are rare — maybe a few times per year during severe weather or grid events. If you're seeing them weekly or daily, there's likely a local grid issue worth reporting to your utility.</p>

      <p class="mb-4">SolarDoctor's health score helps you quantify the impact of grid issues on your solar production. If ACFOOR events are costing you significant energy, your declining health score gives you concrete data to share with your utility company.</p>
    `,
    faqs: [
      { question: "What does AC frequency out of range mean on Enphase?", answer: "It means the grid frequency has deviated from the standard 60Hz (US) or 50Hz (other regions) beyond acceptable limits. Your microinverters disconnect from the grid as a safety measure to prevent damage to appliances and the grid itself." },
      { question: "What causes grid frequency problems?", answer: "Grid frequency issues are caused by imbalances between electricity supply and demand on the utility grid. They're rare in developed grids but can occur during major grid events, storms, or equipment failures at utility substations." },
      { question: "How long does an AC frequency fault last?", answer: "Most frequency events are brief (seconds to minutes) and the microinverters automatically reconnect once frequency stabilizes. If the error persists for hours, contact your utility to report the issue." },
    ],
  },
];

// Import programmatic SEO posts
import { cityBlogPosts } from './blog-posts-cities';
import { installerBlogPosts } from './blog-posts-installers';
import { problemBlogPosts } from './blog-posts-problems';

// Merge all blog posts into a single array
export const allBlogPosts: BlogPost[] = [
  ...blogPosts,
  ...problemBlogPosts,
  ...installerBlogPosts,
  ...cityBlogPosts,
];

// Create a lookup map for quick access by slug
export const blogPostsBySlug: Record<string, BlogPost> = {};
allBlogPosts.forEach((post) => {
  blogPostsBySlug[post.slug] = post;
});

// Get all slugs for static generation
export function getAllSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}
