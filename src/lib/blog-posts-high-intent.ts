// High-intent SEO blog posts targeting bottom-of-funnel search queries
// These posts target people actively searching for solar problems and solutions
// Designed to drive conversions to the health check tool

import { BlogPost, FaqItem } from "./blog-posts";

// Helper to generate the CTA block for the end of every blog post
function ctaBlock(customHeadline?: string): string {
  const headline =
    customHeadline || "Wondering if your solar system is working properly?";
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
  const t =
    text ||
    "SolarDoctor monitors your system 24/7 and alerts you when something needs attention.";
  return `
    <div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
      <p class="text-green-800 font-medium mb-2">${t}</p>
      <a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a>
    </div>
  `;
}

export const highIntentBlogPosts: BlogPost[] = [
  // ============================================================
  // POST 1: Solar Panels Not Producing Enough Energy
  // ============================================================
  {
    slug: "solar-panels-not-producing-enough",
    title: "Solar Panels Not Producing Enough Energy? Here's Why",
    excerpt:
      "If your solar panels produce less energy than expected, it's usually one of a few common causes. Learn how to diagnose the problem and fix it.",
    category: "Troubleshooting",
    date: "2025-03-15",
    readTime: "9 min read",
    metaDescription:
      "Solar panels not producing enough? Learn the top causes (shading, dirt, inverter issues, degradation) and how to diagnose and fix underperformance.",
    content: `
      <p class="text-lg text-gray-600 mb-8">You installed solar panels with expectations of lower electric bills and energy independence. But when you check your monitoring app, the production numbers feel off. Your installer promised 25 kWh per day, but you're consistently getting 15-18 kWh. What's going wrong?</p>

      <p class="mb-4">Low solar production is one of the most frustrating issues homeowners face because there are multiple potential causes — and not all of them are obvious. The good news is that most cases of low production are fixable once you identify the root cause.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cause #1: Shading on Your Panels</h2>

      <p class="mb-4">This is the #1 cause of low solar production. Even partial shading — a tree branch, roof edge, or chimney shadow — can dramatically reduce energy output. Unlike traditional electrical systems, solar panels operate as a series circuit. If one panel is shaded and producing less current, it drags down the entire string of panels.</p>

      <p class="mb-4">Modern systems with microinverters (Enphase) or power optimizers (SolarEdge) mitigate this by allowing each panel to operate independently. But even with optimized systems, shading still reduces your production.</p>

      <p class="mb-4">How to check: Look at your roof from the ground during different times of day. Take note of any shadows falling across your array. If a tree is casting shadow, consider selective pruning. If a roof edge or chimney is the problem, unfortunately, your options are limited — relocation is usually not cost-effective.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cause #2: Dirty Panels (Soiling)</h2>

      <p class="mb-4">Dust, pollen, bird droppings, leaves, and debris can accumulate on your panels and reduce output by 5-25% depending on the amount of soiling. This is especially problematic in dry climates where rain doesn't naturally wash panels clean.</p>

      <p class="mb-4">A simple visual inspection will tell you if soiling is the issue. Look at your panels from the ground with binoculars — if you see dust or dirt buildup, that's your problem.</p>

      <p class="mb-4">The fix is straightforward: clean your panels. For roof-mounted systems, hire a professional solar cleaning company (typically $200-400). For ground-mounted systems, you can often do it yourself with a soft brush and deionized water. After cleaning, your production should noticeably improve within days.</p>

      ${inlineCta(
        "SolarDoctor tracks your production trends and can help you identify if soiling is causing gradual output loss."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cause #3: Inverter Problems or Configuration Issues</h2>

      <p class="mb-4">Your inverter is the device that converts DC electricity from your panels into AC electricity your home can use. If it's not working properly, production suffers. Common inverter issues include:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Isolation faults</strong> — electrical leakage to ground from moisture damage or degraded insulation</li>
        <li><strong>AC overvoltage</strong> — the grid voltage is too high, causing the inverter to shut down</li>
        <li><strong>Overtemperature</strong> — the inverter is running too hot and throttling output</li>
        <li><strong>Offline status</strong> — the inverter has lost connection to the grid or its monitoring system</li>
      </ul>

      <p class="mb-4">How to check: Open your inverter monitoring app and look for error codes or warnings. Even if everything looks "normal," dig deeper — check that your inverter is actually online and not in a reduced-power state.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cause #4: Panel Degradation or Internal Damage</h2>

      <p class="mb-4">Solar panels degrade at roughly 0.7-0.8% per year — this is normal and expected. However, if degradation is happening faster than normal, something might be wrong.</p>

      <p class="mb-4">Cracked panels, delamination (layers separating), or internal corrosion can all accelerate degradation and reduce output. These issues often can't be seen from the ground but will show up as progressively declining production over months.</p>

      <p class="mb-4">If you suspect panel degradation, a professional solar technician can perform an infrared scan of your array to identify damaged panels.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cause #5: Incorrect System Configuration</h2>

      <p class="mb-4">Sometimes low production is due to installation errors. Your panels might be tilted at the wrong angle for your location, wired incorrectly, or not pointing in the optimal direction.</p>

      <p class="mb-4">This typically shows up immediately after installation rather than developing over time. If your production has always been low, talk to your installer about whether the system design is right for your location.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Diagnose the Actual Problem</h2>

      <p class="mb-4">The fastest way to identify the cause of low production is to compare your actual output against what your system should theoretically produce for your location and weather conditions.</p>

      <p class="mb-4">PVWatts is a free NREL tool that estimates solar production based on system size, location, tilt angle, and panel type. But it requires you to manually input data and do the math each month.</p>

      <p class="mb-4">A better approach: use SolarDoctor. Connect your SolarEdge account and we automatically compare your actual production to what it should be, then give you a health score from 0-100. The score tells you instantly whether underperformance is a minor concern or a red flag that needs professional attention.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When to Call a Professional</h2>

      <p class="mb-4">If you've ruled out shading and soiling, and your monitoring app shows error codes, it's time to call a professional. A certified solar technician can:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Use specialized equipment to test panel output and wiring</li>
        <li>Identify isolation faults with a megohmmeter</li>
        <li>Perform an infrared scan to detect failed or damaged panels</li>
        <li>Check inverter firmware and configuration settings</li>
      </ul>

      <p class="mb-4">A typical diagnostic visit costs $300-500 but will save you thousands in lost production if it identifies a fixable problem.</p>

      ${ctaBlock("Is your system underperforming? Get a free diagnosis in minutes.")}
    `,
    faqs: [
      {
        question: "How much production loss is normal?",
        answer:
          "Solar panels degrade at about 0.7-0.8% per year, which is normal and expected. If you're losing more than 1-2% per year, something might be wrong. SolarDoctor tracks your degradation rate over time so you can spot abnormal patterns.",
      },
      {
        question: "Should I clean my solar panels?",
        answer:
          "Only if visible soiling exists and you're in a dry climate. If panels are slightly dusty but not visibly dirty, cleaning usually isn't cost-effective. However, if you see thick dust buildup or bird droppings, cleaning can recover 5-25% of lost production.",
      },
      {
        question: "Can my inverter fix itself?",
        answer:
          "Some intermittent errors like AC overvoltage can resolve on their own when grid conditions improve. However, persistent error codes indicate a real problem that won't fix itself. Address them quickly to avoid prolonged production loss.",
      },
      {
        question: "How do I know if my system is installed correctly?",
        answer:
          "Compare your actual production to PVWatts estimates for your location. If it's 20%+ below estimates, ask your installer to review the system design. If it's within 10-15%, your system is likely installed correctly.",
      },
      {
        question: "What if my inverter is showing no error codes but production is still low?",
        answer:
          "Error-free operation doesn't mean your system is producing optimally. Shading, soiling, and some types of panel degradation won't show up as inverter errors. Use SolarDoctor to compare your actual output against theoretical expectations and get a clear health score.",
      },
    ],
  },

  // ============================================================
  // POST 2: How to Check Solar Panel Performance
  // ============================================================
  {
    slug: "how-to-check-solar-panel-performance",
    title: "How to Check Solar Panel Performance: A Complete Guide",
    excerpt:
      "Your monitoring app shows you data, but how do you know if your panels are actually performing well? Here's how to run a real performance check.",
    category: "Monitoring",
    date: "2025-03-15",
    readTime: "8 min read",
    metaDescription:
      "Learn how to check if your solar panels are performing correctly. Manual checks, monitoring apps, PVWatts comparison, and SolarDoctor analysis explained.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Your SolarEdge or Enphase app tells you how many kilowatt-hours your panels produced today. But is that number good or bad? How do you know if your system is performing as expected?</p>

      <p class="mb-4">Most homeowners have no way to answer this question. Their monitoring app shows data without context. It's like getting a blood pressure reading without knowing whether those numbers are healthy. This guide teaches you how to properly evaluate your system's performance.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: Manual Visual Inspection</h2>

      <p class="mb-4">Before diving into data analysis, do a basic visual check of your system:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Check for shading.</strong> Stand in your yard at different times of day and look at your roof. Any tree shadows, chimney shadows, or roof edges blocking panels?</li>
        <li><strong>Look for visible damage.</strong> Use binoculars if your panels are on the roof. Cracks, discoloration, or bird droppings are obvious red flags.</li>
        <li><strong>Check the inverter.</strong> If you have a string inverter, verify it has power, is showing a green status light, and is not displaying error codes on its front panel.</li>
      </ul>

      <p class="mb-4">If everything looks normal visually, move to the data analysis step.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: Check Your Monitoring App for Errors</h2>

      <p class="mb-4">Open your SolarEdge or Enphase app and look for:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Alert notifications.</strong> Red or yellow warnings indicate your system isn't operating at full capacity.</li>
        <li><strong>Inverter status.</strong> It should show "producing" or "operating" on sunny days. "Night mode" is normal at night. "Offline" or "faulty" is a problem.</li>
        <li><strong>Individual optimizer/inverter status.</strong> If any power optimizers (SolarEdge) or microinverters (Enphase) show offline or low voltage, that's a clue to the problem.</li>
      </ul>

      <p class="mb-4">Error codes usually indicate a real issue — don't ignore them. However, absence of errors doesn't mean your system is performing optimally.</p>

      ${inlineCta(
        "SolarDoctor analyzes your historical production patterns to spot performance issues even when your inverter app shows no errors."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Use PVWatts to Calculate Expected Production</h2>

      <p class="mb-4">PVWatts is a free tool from NREL (National Renewable Energy Laboratory) that estimates solar production based on your system specifications and location.</p>

      <p class="mb-4">To use PVWatts:</p>

      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Go to pvwatts.nrel.gov</li>
        <li>Enter your address</li>
        <li>Enter your system size in kW (e.g., a 6.5 kW system)</li>
        <li>PVWatts will estimate monthly production for your location</li>
      </ol>

      <p class="mb-4">Now compare PVWatts estimates to your actual production from your monitoring app. How do they compare?</p>

      <p class="mb-4">If your actual production is 85-115% of PVWatts estimate, your system is performing well. Below 85% suggests underperformance that needs investigation. Above 115% is unlikely unless you have optimally positioned panels with minimal shading.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4: Analyze Production Trends Over Time</h2>

      <p class="mb-4">A single month's production doesn't tell you much — weather varies. Instead, look at trends across multiple months:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Seasonal patterns are normal.</strong> Summer production should be 2-3x higher than winter production in most US locations.</li>
        <li><strong>Watch for unexpected drops.</strong> If production this August is 30% lower than last August, something has changed (shading, soiling, or equipment failure).</li>
        <li><strong>Look for gradual decline.</strong> Slow degradation (0.7-1% per year) is normal. Faster decline suggests panel or equipment problems.</li>
      </ul>

      <p class="mb-4">Most monitoring apps let you export historical data or show charts. Graph your monthly production over 2-3 years and look for anomalies.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 5: Calculate Your System's Performance Ratio</h2>

      <p class="mb-4">Performance ratio (PR) is a standard metric that accounts for all system losses — inverter efficiency, wiring losses, soiling, and temperature effects.</p>

      <p class="mb-4">Performance Ratio = (Actual Production / Theoretical Production) × 100</p>

      <p class="mb-4">Healthy systems typically have a PR of 75-85%. Below 70% indicates significant problems.</p>

      <p class="mb-4">To calculate this accurately, you need:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Your system's actual production (from monitoring app)</li>
        <li>Solar irradiance data for your location and time period</li>
        <li>Panel specifications (efficiency, temperature coefficient)</li>
      </ul>

      <p class="mb-4">This gets complex quickly — which is why the next step is easier.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 6: Use SolarDoctor for Instant Performance Analysis</h2>

      <p class="mb-4">SolarDoctor automates steps 3-5. Connect your SolarEdge account and we instantly calculate what your system should produce based on NREL's latest weather data for your location. We then compare your actual production and give you a health score from 0-100.</p>

      <p class="mb-4">A score of 90+ means your system is performing excellently. 75-90 is good but watch for trends. Below 75 means investigate — something needs attention.</p>

      <p class="mb-4">SolarDoctor also tracks your performance ratio automatically, alerts you when production drops unexpectedly, and identifies which panels or optimizers might be underperforming.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do If You Find Problems</h2>

      <p class="mb-4">If your performance check reveals underperformance, here's the next step:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Check for obvious causes first</strong> — shading, soiling, or error codes</li>
        <li><strong>Try simple fixes</strong> — clean panels if visibly dirty, trim tree branches if shading is the issue</li>
        <li><strong>Call a professional if needed</strong> — a solar technician can do infrared scans, test panel output, and diagnose equipment failures</li>
      </ul>

      <p class="mb-4">The key is catching problems early. A 10% production loss today becomes a 1.2 MW·year loss over a month — and that's money lost forever.</p>

      ${ctaBlock(
        "Get your free performance analysis in 2 minutes. No credit card required."
      )}
    `,
    faqs: [
      {
        question: "What's a good performance ratio for solar panels?",
        answer:
          "A healthy solar system typically has a performance ratio of 75-85%. This accounts for all losses including inverter efficiency, wiring losses, temperature effects, and soiling. Below 70% indicates a problem that needs investigation.",
      },
      {
        question: "How accurate is PVWatts?",
        answer:
          "PVWatts uses 20+ years of historical weather data and is generally accurate to within 10-15% for residential systems. It's useful for comparison purposes but doesn't account for your specific shading or system configuration details.",
      },
      {
        question: "Is winter production supposed to be much lower than summer?",
        answer:
          "Yes, this is completely normal. In most US locations, summer production is 2-3x higher than winter due to longer daylight hours and higher sun angles. This variation is expected and healthy.",
      },
      {
        question: "How often should I check my system's performance?",
        answer:
          "Check your performance ratio monthly and look for year-over-year trends. Don't worry about daily fluctuations due to weather. If you see unexplained production drops compared to the same month last year, investigate immediately.",
      },
    ],
  },

  // ============================================================
  // POST 3: Solar Panel Degradation Rate
  // ============================================================
  {
    slug: "solar-panel-degradation-rate-guide",
    title: "Solar Panel Degradation Rate: What to Expect Over 25 Years",
    excerpt:
      "Solar panels lose 0.7-0.8% of efficiency annually. Understand normal degradation vs. early failures and how to measure your own panels.",
    category: "Education",
    date: "2025-03-15",
    readTime: "7 min read",
    metaDescription:
      "Solar panel degradation rates explained. Learn expected efficiency loss by panel type, LID, PID, how to measure your own degradation, and when to worry.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Here's an uncomfortable fact most solar installers don't discuss: your solar panels will never produce as much electricity 10 years from now as they do today. This inevitable decline is called degradation, and it's completely normal.</p>

      <p class="mb-4">Understanding degradation helps you know whether your system is aging normally or experiencing premature failure. It also helps you predict long-term production losses and plan maintenance before problems compound.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Solar Panel Degradation?</h2>

      <p class="mb-4">Degradation is the gradual loss of a solar panel's ability to convert sunlight into electricity. Several factors cause this:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>UV exposure</strong> damages encapsulant materials over decades</li>
        <li><strong>Moisture ingress</strong> causes corrosion of internal components</li>
        <li><strong>Thermal cycling</strong> — repeated heating and cooling — creates microcracks</li>
        <li><strong>Internal ion migration</strong> in the silicon itself reduces carrier mobility</li>
      </ul>

      <p class="mb-4">This is not a defect — it's the inevitable result of exposure to the elements over 25+ years. No panel escapes it.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Expected Degradation Rates by Panel Type</h2>

      <p class="mb-4"><strong>Monocrystalline panels (most common):</strong> 0.7-0.8% per year degradation. After 25 years, a 400W panel would produce roughly 330W — still usable but 18% less than new.</p>

      <p class="mb-4"><strong>Polycrystalline panels (older technology):</strong> 0.8-0.9% per year. Slightly worse than monocrystalline but still within warranty ranges.</p>

      <p class="mb-4"><strong>Thin-film panels (CdTe, CIGS):</strong> 1.0-2.0% per year initially, with degradation rates slowing over time. They stabilize after 3-5 years.</p>

      <p class="mb-4">The good news: manufacturers warrant panels against more than this expected degradation. Most warranties guarantee 90% output after 10 years and 80% after 25 years.</p>

      ${inlineCta(
        "SolarDoctor tracks your actual degradation rate and alerts you if it's faster than normal for your panel type."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Light-Induced Degradation (LID)</h2>

      <p class="mb-4">A quirk of older silicon panels: they lose 2-3% of their output in the first few weeks of operation under sunlight. This "light-induced degradation" or LID is well understood and factored into manufacturer ratings.</p>

      <p class="mb-4">Newer panels use hydrogen-passivation treatments that minimize LID to less than 1%. This is one of the main improvements in panel technology over the past decade.</p>

      <p class="mb-4">If you're checking your system's first-month production, expect it to be slightly below the manufacturer's rated output. That first dip is LID, not a sign of problems.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Potential Induced Degradation (PID)</h2>

      <p class="mb-4">PID is a phenomenon where high voltage in the panel system causes ions to migrate, degrading the panel faster than normal. This can happen in large systems with many panels in series (which creates high voltage) and is more common in humid climates.</p>

      <p class="mb-4">Good news: modern inverters (SolarEdge, Enphase) are designed with PID mitigation features that reverse ion migration and prevent this degradation mode. If you have a modern system with optimizers or microinverters, PID is not a concern.</p>

      <p class="mb-4">Older string inverter systems without PID mitigation might experience this. If your system is 8+ years old with a string inverter, PID could be a factor in faster-than-expected degradation.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Measure Your Own Degradation</h2>

      <p class="mb-4">You can estimate your system's degradation rate by comparing production across the same time periods in different years.</p>

      <p class="mb-4"><strong>Simple method:</strong> Compare this January's production to last January's production (accounting for weather variations). Then scale to get an annual degradation rate. This is imperfect but gives you a ballpark estimate.</p>

      <p class="mb-4"><strong>Better method:</strong> Use SolarDoctor. We track your actual production against theoretical expectations (which accounts for weather) and calculate your system's real degradation rate automatically. We flag it if degradation is faster than expected.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">When Degradation Is Too Fast</h2>

      <p class="mb-4">Degradation over 1.5-2% per year is a red flag. Causes of accelerated degradation include:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Moisture ingress</strong> from water damage, cracked panels, or failed sealants</li>
        <li><strong>Delamination</strong> — panels separating into layers</li>
        <li><strong>Snail trails</strong> — discoloration from cell interconnect corrosion (cosmetic but indicates moisture intrusion)</li>
        <li><strong>Micro-cracks</strong> from impacts, thermal stress, or manufacturing defects</li>
      </ul>

      <p class="mb-4">If you suspect faster-than-normal degradation, get a professional infrared scan of your array. Failing panels show up as hotter spots on thermal images.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>

      <p class="mb-4">0.7-0.8% annual degradation for modern monocrystalline panels is normal and expected. Your 25-year warranty accounts for this decline. If your panels are degrading faster than this, something is wrong and you may have a warranty claim.</p>

      <p class="mb-4">Don't assume your system is degrading normally without checking. Most homeowners never measure it, so they don't notice accelerated degradation until years of production have been lost.</p>

      ${ctaBlock(
        "Know your system's real degradation rate. Get your free analysis now."
      )}
    `,
    faqs: [
      {
        question: "Is 0.8% annual degradation a problem?",
        answer:
          "No, 0.8% per year is completely normal for modern monocrystalline solar panels and is factored into manufacturer warranties. Over 25 years, this amounts to roughly 18% total output loss, which warranties guarantee against.",
      },
      {
        question: "Do solar panels degrade faster in hot climates?",
        answer:
          "Yes, higher temperatures accelerate degradation slightly. Panels in hot climates may degrade at 0.9-1.0% per year vs. 0.7% in cooler climates. Temperature effects are why panel temperature coefficients matter — lower coefficients mean better performance in hot weather.",
      },
      {
        question: "What is light-induced degradation (LID)?",
        answer:
          "LID is a 2-3% efficiency loss that occurs in the first few weeks of panel operation when exposed to sunlight. Newer panels minimize this to under 1%. It's normal, not a defect, and is accounted for in manufacturer ratings.",
      },
      {
        question: "Can degradation be reversed?",
        answer:
          "Potential-induced degradation (PID) can partially reverse with proper inverter settings. However, normal degradation from UV exposure and ion migration is permanent. Modern systems with SolarEdge or Enphase inverters have PID mitigation built-in, so this isn't a concern.",
      },
    ],
  },

  // ============================================================
  // POST 4: Solar System Health Check
  // ============================================================
  {
    slug: "solar-system-health-check",
    title: "Solar System Health Check: What Should Be Inspected",
    excerpt:
      "A proper solar health check covers 10+ critical system components. Learn what gets checked, how often, and when DIY isn't enough.",
    category: "Monitoring",
    date: "2025-03-15",
    readTime: "8 min read",
    metaDescription:
      "Solar system health checks explained. What gets inspected, DIY vs. professional, recommended frequency, and what to look for.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Your car gets regular maintenance checks. Your HVAC system needs annual inspections. But what about your $25,000 solar investment? Most homeowners never perform a structured health check — and that's a costly mistake.</p>

      <p class="mb-4">A comprehensive solar health check evaluates electrical performance, physical condition, and safety. It can catch problems before they cost you thousands in lost production.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What a Professional Solar Health Check Covers</h2>

      <p class="mb-4"><strong>Electrical Performance Analysis</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Verify inverter is operating within specifications</li>
        <li>Check DC voltage and current from each string of panels</li>
        <li>Measure AC output and grid frequency synchronization</li>
        <li>Test isolation resistance (ground faults)</li>
        <li>Review error codes and alert history</li>
      </ul>

      <p class="mb-4"><strong>Physical Inspection</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Visual inspection of all panels for cracks, discoloration, or delamination</li>
        <li>Check panel mounting hardware and rails for corrosion</li>
        <li>Inspect wiring, conduit, and connections for damage or deterioration</li>
        <li>Verify junction boxes and combiner boxes are sealed and protected</li>
        <li>Check roof flashing around mounting penetrations</li>
      </ul>

      <p class="mb-4"><strong>Safety Checks</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Verify DC and AC disconnects are accessible and functioning</li>
        <li>Check breaker sizing and panel labeling</li>
        <li>Inspect grounding and bonding</li>
        <li>Verify anti-islanding relay is functioning</li>
      </ul>

      <p class="mb-4"><strong>Performance Diagnostics</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Calculate actual vs. expected production</li>
        <li>Identify underperforming panels with thermal imaging</li>
        <li>Measure system performance ratio</li>
        <li>Identify sources of loss (shading, soiling, degradation, etc.)</li>
      </ul>

      ${inlineCta(
        "SolarDoctor runs a continuous health check on your system 24/7 and alerts you instantly when something needs attention."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">DIY Health Check vs. Professional Inspection</h2>

      <p class="mb-4"><strong>What You Can Check Yourself (Free, Monthly):</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Monitoring app for error codes or offline status</li>
        <li>Visual inspection of panels from the ground for obvious damage</li>
        <li>Check breaker switches are in ON position</li>
        <li>Look for visible shading or soiling on panels</li>
      </ul>

      <p class="mb-4"><strong>What Requires a Professional ($300-600 per visit):</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Electrical testing (DC/AC voltage and current measurement)</li>
        <li>Isolation resistance testing (megohmmeter)</li>
        <li>Infrared thermal imaging to identify failed panels</li>
        <li>Panel-by-panel power output measurement</li>
        <li>Roof inspection and flashing assessment</li>
      </ul>

      <p class="mb-4">A professional health check is worth it if you haven't had one in 3+ years, or if you've noticed production decline, error codes, or are concerned about system safety.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Recommended Health Check Frequency</h2>

      <p class="mb-4"><strong>Year 1-2 (Warranty Period):</strong> Quarterly DIY checks only. Your installer is still responsible for performance issues.</p>

      <p class="mb-4"><strong>Year 3-7 (System Peak):</strong> Annual DIY checks. One professional inspection at year 3-4 as a baseline. Systems in this age range rarely fail, but you should establish baseline performance data.</p>

      <p class="mb-4"><strong>Year 8-15 (Middle Age):</strong> Annual DIY checks plus one professional inspection every 2-3 years. This is when early failures start appearing (failed inverters, microinverter degradation, mounting corrosion).</p>

      <p class="mb-4"><strong>Year 15+ (Long-term):</strong> Annual DIY checks plus annual professional inspections. Older systems need more attention. Component failures become more likely and should be caught early.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Red Flags That Require Immediate Attention</h2>

      <p class="mb-4">Don't wait for your scheduled inspection if you notice:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Zero production on sunny days</strong> — likely inverter failure or tripped breaker</li>
        <li><strong>Sudden 25%+ production drop</strong> — possible panel, optimizer, or string failure</li>
        <li><strong>Isolation fault error code</strong> — electrical safety hazard</li>
        <li><strong>Visible panel damage</strong> — cracks, discoloration, or delamination</li>
        <li><strong>Rust or corrosion on mounting hardware</strong> — structural integrity at risk</li>
        <li><strong>Water pooling around inverter or combiner boxes</strong> — moisture protection failed</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Continuous Monitoring vs. Annual Checks</h2>

      <p class="mb-4">Professional inspections are valuable for physical assessment and safety. But you can't wait 12 months to find problems.</p>

      <p class="mb-4">Continuous monitoring (like SolarDoctor) watches your system 24/7 and alerts you immediately when production drops unexpectedly or error codes appear. This way, problems are caught within days of occurring rather than months.</p>

      <p class="mb-4">The ideal approach: continuous monitoring combined with annual professional inspections. One catches performance problems early, the other ensures physical safety and component integrity.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do After a Health Check</h2>

      <p class="mb-4">A good professional inspection report will include:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Overall health rating</li>
        <li>List of issues found (categorized by severity)</li>
        <li>Repair recommendations with cost estimates</li>
        <li>Timeline (urgent, this year, long-term planning)</li>
      </ul>

      <p class="mb-4">Address any urgent issues immediately. For other issues, get repair quotes from multiple contractors before committing. Many problems are worth fixing proactively to avoid larger issues later.</p>

      ${ctaBlock(
        "Get your system's health analyzed automatically. Free analysis in 2 minutes."
      )}
    `,
    faqs: [
      {
        question: "How much does a professional solar health check cost?",
        answer:
          "Professional solar health checks typically cost $300-600 depending on system size and location. Some installers offer free inspections within the warranty period. The cost is worth it if you haven't had one in 3+ years or are concerned about system health.",
      },
      {
        question: "Can I do a complete health check myself?",
        answer:
          "You can do a basic visual and monitoring-based DIY check monthly for free. However, electrical testing (voltage measurement, isolation resistance, thermal imaging) requires specialized equipment and expertise. A professional inspection complements your DIY monitoring.",
      },
      {
        question: "How often should solar systems be inspected?",
        answer:
          "For systems under 7 years old, annual DIY monitoring plus a professional inspection every 2-3 years is sufficient. For systems 7+ years old, annual professional inspections are recommended to catch early component failures before they cause major production loss.",
      },
      {
        question: "What's the difference between a health check and maintenance?",
        answer:
          "A health check diagnoses the condition of your system and identifies problems. Maintenance performs repairs or cleaning to keep it functioning. You need both — health checks identify what maintenance is needed.",
      },
    ],
  },

  // ============================================================
  // POST 5: Solar Monitoring App Comparison
  // ============================================================
  {
    slug: "best-solar-monitoring-apps",
    title: "Best Solar Monitoring Apps: SolarEdge vs. Enphase vs. SolarDoctor",
    excerpt:
      "Not all monitoring apps are equal. Compare SolarEdge, Enphase, SolarDoctor, Solar Analytics, and Sense to find the right one for your needs.",
    category: "Comparison",
    date: "2025-03-15",
    readTime: "10 min read",
    metaDescription:
      "Solar monitoring app comparison: SolarEdge mySolarEdge vs. Enphase Enlighten vs. SolarDoctor vs. Solar Analytics. Features, costs, and which is best.",
    content: `
      <p class="text-lg text-gray-600 mb-8">You have solar panels now. You open your monitoring app and see that you produced 24 kWh today. But what does that number mean? Is 24 kWh good or bad for your system? Will you save enough money to justify the $25,000 investment?</p>

      <p class="mb-4">Most solar homeowners rely on a single monitoring app — usually the one that came with their inverter. But these apps have a fundamental limitation: they show you raw data without context. They tell you how much your system produced, but not whether that's healthy or concerning.</p>

      <p class="mb-4">Let's compare the major solar monitoring options and help you choose the right one.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">SolarEdge mySolarEdge App</h2>

      <p class="mb-4"><strong>Best for:</strong> SolarEdge customers who want detailed inverter monitoring</p>

      <p class="mb-4"><strong>What it does:</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Real-time monitoring of inverter and power optimizer output</li>
        <li>Panel-level production data (individual panel output with SolarEdge optimizers)</li>
        <li>Daily, monthly, and yearly production charts</li>
        <li>Error code alerts and notifications</li>
        <li>Energy export data to utility</li>
      </ul>

      <p class="mb-4"><strong>Cost:</strong> Free with SolarEdge system</p>

      <p class="mb-4"><strong>The limitation:</strong> Shows you raw data but never tells you if it's good. You don't know if 20 kWh today is healthy or concerning. No performance benchmarking against expected output.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Enphase Enlighten App</h2>

      <p class="mb-4"><strong>Best for:</strong> Enphase customers with microinverter systems</p>

      <p class="mb-4"><strong>What it does:</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Individual microinverter monitoring (each panel tracked separately)</li>
        <li>Real-time and historical production data</li>
        <li>Alert system for offline microinverters</li>
        <li>Energy comparison to utility rate estimates</li>
        <li>Envoy home energy gateway integration</li>
      </ul>

      <p class="mb-4"><strong>Cost:</strong> Free with Enphase system</p>

      <p class="mb-4"><strong>The limitation:</strong> Like SolarEdge, excellent data collection but minimal analysis. No built-in benchmarking to tell you if your system is underperforming.</p>

      ${inlineCta(
        "SolarDoctor bridges this gap by comparing your actual production to what your system should produce."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">SolarDoctor</h2>

      <p class="mb-4"><strong>Best for:</strong> SolarEdge homeowners who want to know if their system is actually performing</p>

      <p class="mb-4"><strong>What it does:</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Connects to your SolarEdge account (no manual data entry)</li>
        <li>Automatically calculates what your system SHOULD produce using NREL weather data</li>
        <li>Compares actual production to expected production</li>
        <li>Gives you a simple 0-100 health score</li>
        <li>Alerts you when production drops unexpectedly</li>
        <li>Identifies which panels or optimizers are underperforming</li>
        <li>Tracks degradation rate over time</li>
      </ul>

      <p class="mb-4"><strong>Cost:</strong> Free health score with basic insights</p>

      <p class="mb-4"><strong>The advantage:</strong> Solves the biggest problem with other apps — you know instantly whether your system is healthy. A health score of 95 means you're golden. A score of 65 means investigate.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Solar Analytics</h2>

      <p class="mb-4"><strong>Best for:</strong> Customers who want professional-grade analysis</p>

      <p class="mb-4"><strong>What it does:</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Works with multiple inverter brands (SolarEdge, Fronius, ABB, others)</li>
        <li>Professional-grade performance analysis and fault detection</li>
        <li>AI-powered anomaly detection</li>
        <li>Detailed performance metrics and benchmarking</li>
        <li>Degradation tracking</li>
      </ul>

      <p class="mb-4"><strong>Cost:</strong> Subscription-based (typically $15-25/month)</p>

      <p class="mb-4"><strong>The catch:</strong> Expensive for homeowners. Better suited to commercial systems or solar installers. Overkill for residential monitoring.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sense Energy Monitor</h2>

      <p class="mb-4"><strong>Best for:</strong> Homeowners who want whole-home energy monitoring</p>

      <p class="mb-4"><strong>What it does:</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Monitors both solar production AND home energy consumption</li>
        <li>Identifies which appliances use most energy</li>
        <li>Tracks net energy (solar produced minus energy consumed)</li>
        <li>Helps optimize solar self-consumption</li>
      </ul>

      <p class="mb-4"><strong>Cost:</strong> $350-400 upfront + $10/month subscription</p>

      <p class="mb-4"><strong>The difference:</strong> Complements solar monitoring. Doesn't tell you if your solar is underperforming, but tells you how much of that production you're actually using vs. exporting.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison Table</h2>

      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-gray-100 border border-gray-300">
            <th class="p-3 text-left font-bold">Feature</th>
            <th class="p-3 text-left font-bold">SolarEdge App</th>
            <th class="p-3 text-left font-bold">Enphase App</th>
            <th class="p-3 text-left font-bold">SolarDoctor</th>
            <th class="p-3 text-left font-bold">Solar Analytics</th>
            <th class="p-3 text-left font-bold">Sense</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-gray-300">
            <td class="p-3"><strong>Real-time data</strong></td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-3"><strong>Health score</strong></td>
            <td class="p-3">✗</td>
            <td class="p-3">✗</td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
            <td class="p-3">✗</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-3"><strong>Compares to expected output</strong></td>
            <td class="p-3">✗</td>
            <td class="p-3">✗</td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
            <td class="p-3">✗</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-3"><strong>Multi-brand support</strong></td>
            <td class="p-3">SolarEdge only</td>
            <td class="p-3">Enphase only</td>
            <td class="p-3">SolarEdge only</td>
            <td class="p-3">✓</td>
            <td class="p-3">✓</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-3"><strong>Home energy monitoring</strong></td>
            <td class="p-3">✗</td>
            <td class="p-3">✗</td>
            <td class="p-3">✗</td>
            <td class="p-3">✗</td>
            <td class="p-3">✓</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-3"><strong>Cost</strong></td>
            <td class="p-3">Free</td>
            <td class="p-3">Free</td>
            <td class="p-3">Free</td>
            <td class="p-3">$15-25/mo</td>
            <td class="p-3">$350 + $10/mo</td>
          </tr>
        </tbody>
      </table>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">My Recommendation: Use Both</h2>

      <p class="mb-4">Don't choose one or the other. Use them together:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Keep your SolarEdge/Enphase app</strong> for detailed real-time data and error code monitoring</li>
        <li><strong>Add SolarDoctor</strong> to know whether your production is healthy (free health score)</li>
        <li><strong>Optional: Add Sense</strong> if you want to optimize home energy consumption and maximize self-consumption</li>
      </ul>

      <p class="mb-4">This three-tier approach gives you the complete picture: detailed data from your inverter, health context from SolarDoctor, and consumption patterns from Sense (if you want it). Together, they help you optimize your solar investment.</p>

      ${ctaBlock(
        "Get your free SolarDoctor health score and see how your system actually compares."
      )}
    `,
    faqs: [
      {
        question: "Why doesn't my SolarEdge app tell me if my system is performing well?",
        answer:
          "SolarEdge's app shows raw production data without context. To know if output is healthy, you'd need to manually compare against PVWatts estimates every month and account for weather variations. SolarDoctor automates this comparison and gives you a simple health score.",
      },
      {
        question: "Do I need to pay for monitoring?",
        answer:
          "Most inverter apps (SolarEdge, Enphase, SolarDoctor) are free. Solar Analytics and Sense charge subscriptions but offer more advanced features. Start with free options — upgrading is always possible later.",
      },
      {
        question: "Can I use SolarDoctor with an Enphase system?",
        answer:
          "Currently, SolarDoctor integrates with SolarEdge systems. For Enphase, Solar Analytics is the best alternative that provides health score and performance analysis.",
      },
      {
        question: "What's the difference between monitoring and health analysis?",
        answer:
          "Monitoring shows you data (how much your system produced). Health analysis tells you whether that data is good or bad compared to expectations. Both are valuable — monitoring without analysis leaves you guessing.",
      },
    ],
  },

  // ============================================================
  // POST 6: Solar Panels Stopped Working
  // ============================================================
  {
    slug: "solar-panels-stopped-working",
    title: "Solar Panels Stopped Working? Emergency Troubleshooting Guide",
    excerpt:
      "Zero production on sunny days? This emergency troubleshooting guide walks you through diagnosis in 5 minutes, so you know whether to call a technician.",
    category: "Troubleshooting",
    date: "2025-03-15",
    readTime: "7 min read",
    metaDescription:
      "Solar panels not working? Emergency troubleshooting steps: check breakers, inverter lights, monitoring app. Common causes and when to call a technician.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Your monitoring app shows zero production on a clear sunny day. Your system has completely stopped working. This is stressful, but take a breath — most of the time, it's something simple that you can fix in 5 minutes. Let's diagnose it.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: Check Your Breakers (2 minutes)</h2>

      <p class="mb-4">The most common cause of zero production is a tripped circuit breaker. Your solar system has multiple breakers:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>DC breaker</strong> — between panels and inverter (usually mounted on or near the inverter)</li>
        <li><strong>AC breaker</strong> — between inverter and electrical panel (usually in your main panel)</li>
        <li><strong>Main panel breaker</strong> — master disconnect for your whole home</li>
      </ul>

      <p class="mb-4">Walk around your home and check that ALL solar-related breakers are in the ON position. Look for any that are switched to OFF or are in a middle position (tripped).</p>

      <p class="mb-4"><strong>If you find a tripped breaker:</strong> Switch it fully OFF, then back to ON. If it immediately trips again, there's an electrical fault and you need a technician. If it stays ON, your system should start producing again within 5 minutes.</p>

      <p class="mb-4"><strong>If all breakers are ON:</strong> Move to the next step.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: Check Your Inverter Lights (1 minute)</h2>

      <p class="mb-4">Walk to your inverter (usually mounted on your garage wall or in a utility room). Look at the status lights:</p>

      <p class="mb-4"><strong>What you should see on a sunny day:</strong> A green "Operating" or "Producing" light. You may also see a blue wireless connection indicator.</p>

      <p class="mb-4"><strong>What's concerning:</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>All lights are OFF — inverter has no power</li>
        <li>Red or yellow error light — fault condition</li>
        <li>Orange light blinking — inverter in fault recovery mode</li>
      </ul>

      <p class="mb-4"><strong>If the inverter has no power:</strong> Check the breaker again (it may have just tripped). If breaker is ON and inverter still has no power, there's an electrical issue. Call a technician.</p>

      <p class="mb-4"><strong>If there's a red/yellow error light:</strong> Note the error code. Check your monitoring app — it will show the same error code. Move to step 3.</p>

      ${inlineCta(
        "SolarDoctor can help you understand what error codes mean and whether the problem is urgent or can wait."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Check Your Monitoring App (1 minute)</h2>

      <p class="mb-4">Open your SolarEdge or Enphase app:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Inverter status</strong> — should show "Producing" or "Operating" on a sunny day. If it shows "Offline," the app can't communicate with your inverter. Try closing and reopening the app.</li>
        <li><strong>Error codes</strong> — look for any red alerts. Common critical codes: "Grid disconnected," "Isolation Fault," "Arc Detection," "DC Voltage High"</li>
        <li><strong>Power production graph</strong> — should be climbing as the sun rises. If it's flat at zero, your system isn't producing.</li>
      </ul>

      <p class="mb-4"><strong>Is your app showing "Offline" even though the inverter lights are on?</strong> You may have a WiFi or communication issue. Try these fixes:</p>

      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Restart your WiFi router</li>
        <li>Restart your inverter by turning its breaker OFF for 10 seconds, then back ON</li>
        <li>Check that the inverter is connected to your WiFi (some inverters have a WiFi connection button)</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4: Understand Critical Error Codes</h2>

      <p class="mb-4"><strong>Grid Disconnect (if your system is NOT producing):</strong> Your inverter has detected a grid outage and shut down for safety. Your solar system CANNOT produce electricity when the grid is down (anti-islanding protection). Check if your neighborhood has lost power. If you want to produce during outages, you need a battery backup system.</p>

      <p class="mb-4"><strong>Isolation Fault:</strong> Electrical current is leaking to ground. This is a safety issue that requires professional diagnosis. DO NOT keep trying to restart your system. Call an electrician.</p>

      <p class="mb-4"><strong>Arc Fault Detection:</strong> Your system detected dangerous electrical arcing (potential fire hazard). STOP operation immediately and call a technician. This is a serious safety issue.</p>

      <p class="mb-4"><strong>DC Overvoltage or DC Undervoltage:</strong> Your system may reset itself. If the error persists, there's a wiring or panel issue. Call a technician for diagnosis.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 5: When to Call a Professional</h2>

      <p class="mb-4">You can stop troubleshooting and call immediately if:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Isolation fault or Arc fault error</strong> — safety hazard</li>
        <li><strong>Multiple breakers are tripping repeatedly</strong> — electrical fault</li>
        <li><strong>Inverter has no power and breaker is ON</strong> — power supply issue</li>
        <li><strong>You see visible damage to panels, wiring, or mounting hardware</strong> — physical damage</li>
        <li><strong>An error code won't clear after restart</strong> — likely hardware failure</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Who to Call</h2>

      <p class="mb-4"><strong>If you have a warranty:</strong> Call your original installer first. They should honor warranty repairs at no cost during the warranty period.</p>

      <p class="mb-4"><strong>If your installer is out of business:</strong> Call a local solar maintenance company. Look for companies that service systems they didn't install — they're experienced with diagnostics.</p>

      <p class="mb-4"><strong>For simple electrical issues:</strong> A licensed electrician can reset breakers and test circuits. For solar-specific diagnostics, insist on a solar-trained technician.</p>

      <p class="mb-4">Typical diagnostic visits cost $300-500 but save you from guessing. Don't put off professional help if you can't fix it in 5 minutes — every day of zero production costs you money.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Prevent This in the Future</h2>

      <p class="mb-4">The best way to catch system failures early is continuous monitoring. Most homeowners don't check their monitoring app daily, so they don't notice failures until production has been zero for a week.</p>

      <p class="mb-4">SolarDoctor automatically alerts you the moment your production drops unexpectedly. Instead of waiting days to notice a problem, you get an alert within hours — fast enough to call a technician same-day and minimize downtime.</p>

      ${ctaBlock(
        "Set up alerts now so you catch failures fast. Get your free health score."
      )}
    `,
    faqs: [
      {
        question: "Can a tripped breaker fix itself?",
        answer:
          "No. A tripped breaker needs to be manually reset. If it trips immediately after you flip it back ON, there's an electrical fault. Don't keep flipping it — that's a sign to call a technician.",
      },
      {
        question: "What if my system works fine but my monitoring app is offline?",
        answer:
          "Your system can produce electricity without the app being online. However, you won't see production data. A communication issue (WiFi, gateway failure) doesn't affect physical electricity generation. Restart your WiFi router and inverter to restore connection.",
      },
      {
        question: "Why does my system stop working when the power grid goes out?",
        answer:
          "This is a safety feature called anti-islanding protection. Your inverter disconnects from the grid to prevent electricity from flowing backwards to utility lines where workers might be. To produce during outages, you need a battery system with a special hybrid inverter.",
      },
      {
        question: "How much will it cost to fix my system?",
        answer:
          "Depends on the problem. A diagnostician visit is $300-500 and often reveals quick fixes. Replacing a failed inverter costs $1,500-3,000. If your system is under warranty, repairs are free. If not, get multiple quotes before authorizing work.",
      },
      {
        question: "Should I turn off the breakers myself if my system isn't working?",
        answer:
          "Resetting breakers is safe. However, don't repeatedly flip breakers if they keep tripping — that indicates an electrical problem that needs professional assessment. Continuous flipping can damage the breaker itself.",
      },
    ],
  },

  // ============================================================
  // POST 7: Solar Panel Warranty Claim
  // ============================================================
  {
    slug: "solar-panel-warranty-claim-guide",
    title: "How to File a Solar Panel Warranty Claim: Complete Guide",
    excerpt:
      "Your installer disappeared but your warranty is still valid. Learn what's covered, how to file claims, and what to do if the manufacturer won't pay.",
    category: "Solar Orphans",
    date: "2025-03-15",
    readTime: "9 min read",
    metaDescription:
      "Solar warranty claims explained. Types of warranties (manufacturer, workmanship, production), how to file, what's covered, and what to do if installer is gone.",
    content: `
      <p class="text-lg text-gray-600 mb-8">Your installer closed down last year. Now one of your solar panels has failed — you can see it's not producing. Can you still file a warranty claim? Who do you contact? Will they actually cover it?</p>

      <p class="mb-4">The answer is yes, you can file a claim — but you need to understand how solar warranties work. The manufacturer warranty is separate from your installer, and they're legally obligated to honor it.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Solar Warranties Explained</h2>

      <p class="mb-4"><strong>Manufacturer Equipment Warranty (25 years)</strong></p>

      <p class="mb-4">The solar panel manufacturer (like SunPower, LG, Canadian Solar, Jinko) warrants their panels against defects for 25 years. If your panel fails due to manufacturing defects, cracking, delamination, or corrosion, they'll replace it. This warranty is independent of your installer.</p>

      <p class="mb-4">What's NOT covered: Normal degradation (0.7-0.8% per year), damage from impact or weather events (unless the panel was defective), and misuse.</p>

      <p class="mb-4"><strong>Inverter Warranty (10-15 years typically)</strong></p>

      <p class="mb-4">Your inverter (SolarEdge, Enphase, Fronius, etc.) has a separate warranty from the manufacturer covering defects. Inverter warranties are shorter than panel warranties because inverters are more complex electronics with shorter lifespans.</p>

      <p class="mb-4"><strong>Workmanship/Labor Warranty (1-10 years, varies by installer)</strong></p>

      <p class="mb-4">This is where installer viability matters. A workmanship warranty covers improper installation, wiring errors, and mounting issues. If your installer went out of business, you've lost this coverage (unless another local company will honor it, which is unlikely).</p>

      <p class="mb-4"><strong>Production Warranty (25 years)</strong></p>

      <p class="mb-4">Some manufacturers warrant that panels will produce at least 80-90% of their rated output after 25 years. If your system is severely underperforming and testing shows it's due to panel degradation beyond warranty limits, you may have a claim. This is rare and hard to prove.</p>

      ${inlineCta(
        "SolarDoctor tracks your panel degradation rate and can help document whether it's within normal ranges or a warranty violation."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to File a Warranty Claim</h2>

      <p class="mb-4"><strong>Step 1: Gather Your Documentation</strong></p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Original purchase agreement or invoice showing equipment and serial numbers</li>
        <li>Photos of the failed equipment and damage</li>
        <li>Monitoring app screenshots showing production (if claiming underperformance)</li>
        <li>Any error codes from the inverter</li>
      </ul>

      <p class="mb-4"><strong>Step 2: Contact the Manufacturer Directly</strong></p>

      <p class="mb-4">Do NOT go back to your installer. Contact the panel or inverter manufacturer directly. You can find contact info on the equipment label on your roof or on your monitoring app.</p>

      <p class="mb-4">For panels, look for contact info on the back of a panel (if you can access one) or go to the manufacturer's website and find the warranty support page.</p>

      <p class="mb-4"><strong>Step 3: Describe the Problem</strong></p>

      <p class="mb-4">Tell them:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Your system size and installation date</li>
        <li>The specific equipment that's failing (panel serial number, inverter model)</li>
        <li>What the problem is (cracked panel, inverter not turning on, isolation fault, etc.)</li>
        <li>What you've observed (production dropped, error codes, visual damage)</li>
      </ul>

      <p class="mb-4"><strong>Step 4: Request a Professional Inspection</strong></p>

      <p class="mb-4">The manufacturer will likely require proof that the equipment is actually defective. They'll ask you to hire a local contractor to do electrical testing or physical inspection. Some manufacturers cover this inspection cost — ask before you pay.</p>

      <p class="mb-4">Request an inspection report that specifically addresses whether the failure is a manufacturing defect (covered by warranty) or normal wear/external damage (not covered).</p>

      <p class="mb-4"><strong>Step 5: Submit Your Claim</strong></p>

      <p class="mb-4">Send the manufacturer:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Original invoice or proof of purchase</li>
        <li>Photos of equipment and damage</li>
        <li>Professional inspection report</li>
        <li>Signed claim form (provided by manufacturer)</li>
      </ul>

      <p class="mb-4">Keep copies of everything.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Expect in the Claim Process</h2>

      <p class="mb-4"><strong>Approval timeline:</strong> 30-60 days from submission. The manufacturer will review the inspection report and determine if it's a covered defect.</p>

      <p class="mb-4"><strong>What they'll cover if approved:</strong> Replacement equipment, not labor. They'll ship you a replacement panel or inverter. You need to pay a technician to install it (typically $300-500 for a panel, $1,000-1,500 for an inverter).</p>

      <p class="mb-4"><strong>What they won't cover:</strong> Normal degradation, physical damage from weather or impact, installation costs, loss of production during downtime.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">If Your Installer is Gone</h2>

      <p class="mb-4">This actually doesn't affect your equipment warranty. The manufacturer doesn't care whether your installer is still in business — they're obligated to honor their warranty.</p>

      <p class="mb-4">However, the manufacturer will ask you to provide proof of installation. Usually the original invoice or serial number on the equipment is sufficient.</p>

      <p class="mb-4">If you lost all documentation, the manufacturer may require a technician's inspection to verify the equipment is genuine and properly installed.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What If the Manufacturer Denies Your Claim?</h2>

      <p class="mb-4">If they deny the claim, ask for detailed reasoning. Common denial reasons:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Normal degradation:</strong> If your panel degradation is 0.8% per year, it's not a warranty claim</li>
        <li><strong>External damage:</strong> Impact damage or water intrusion isn't a manufacturing defect</li>
        <li><strong>Installation defect:</strong> Your installer wired it wrong (not a manufacturer problem)</li>
        <li><strong>Out of warranty:</strong> 25-year warranty has limits; they may ask for proof of install date</li>
      </ul>

      <p class="mb-4">If you disagree with the denial, request escalation to the manufacturer's warranty manager. Provide additional documentation or a second independent inspection if necessary.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What If You Suspect Accelerated Degradation?</h2>

      <p class="mb-4">If your panels are degrading faster than 1.5% per year (vs. expected 0.7-0.8%), you may have a warranty claim. However, proving this requires:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Accurate baseline output data from installation</li>
        <li>Production data from every month since installation</li>
        <li>Weather data for every month to adjust for seasonal variations</li>
        <li>Professional analysis comparing actual degradation to expected rates</li>
      </ul>

      <p class="mb-4">This is complex to prove, which is why ongoing monitoring matters. If you've been tracking your system with SolarDoctor since year one, you have the data to prove accelerated degradation if it's happening.</p>

      ${ctaBlock("Start monitoring your system now to document performance for future warranty claims.")}
    `,
    faqs: [
      {
        question: "Is my warranty valid if my installer went out of business?",
        answer:
          "Yes. Your equipment warranty is with the manufacturer (like SunPower or Enphase), not your installer. They're obligated to honor the warranty regardless of your installer's status. However, you'll need to contact them directly, not through your installer.",
      },
      {
        question: "How long does a solar panel warranty last?",
        answer:
          "Most manufacturers offer a 25-year equipment warranty for panels (guaranteeing 80-90% output retention) and a separate 25-year workmanship warranty. Inverters typically have 10-15 year warranties. Check your specific warranty document for details.",
      },
      {
        question: "Does warranty cover normal degradation?",
        answer:
          "No. Normal degradation of 0.7-0.8% per year is expected and not covered. Only abnormal degradation (above 1-1.5% per year) or manufacturing defects are covered. This is why distinguishing between normal and accelerated degradation matters.",
      },
      {
        question: "If they replace my panel, who installs it?",
        answer:
          "The manufacturer provides the replacement panel, but you pay for installation labor. Expect to pay $300-500 for a single panel installation from a local technician. The warranty covers parts, not labor.",
      },
      {
        question: "What if I lost my original paperwork?",
        answer:
          "The manufacturer will accept the serial number on your equipment as proof of warranty coverage. If you absolutely can't provide any documentation, they may require a professional inspection to confirm it's genuine and properly installed before honoring the warranty.",
      },
    ],
  },

  // ============================================================
  // POST 8: Expected Solar Production by State
  // ============================================================
  {
    slug: "expected-solar-production-by-state",
    title: "Expected Solar Production by State: How Much Should Your System Produce?",
    excerpt:
      "Production varies dramatically by state due to sunshine hours and climate. Use this state-by-state breakdown to calculate your expected monthly output.",
    category: "Education",
    date: "2025-03-15",
    readTime: "8 min read",
    metaDescription:
      "Solar production by state: expected kWh per kW installed. State-by-state breakdown, factors affecting output, and how to calculate your system's expected production.",
    content: `
      <p class="text-lg text-gray-600 mb-8">You're trying to figure out if your solar system is performing well. Your system produced 450 kWh last month. Is that good? To answer that question, you need to know what's expected for your specific location.</p>

      <p class="mb-4">Solar production varies dramatically based on geographic location. A 10 kW system in Arizona produces completely different amounts than the same size system in Maine. Understanding your state's baseline helps you identify when underperformance is a real problem vs. just normal variation.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How Geographic Location Affects Solar Production</h2>

      <p class="mb-4"><strong>Solar irradiance</strong> is the amount of sunlight hitting the Earth's surface, measured in kilowatt-hours per square meter per day (kWh/m²/day). States with higher irradiance produce more electricity.</p>

      <p class="mb-4">The sunniest states are in the Southwest (Arizona, Southern California, New Mexico, Utah). The cloudiest states are in the Pacific Northwest and Northeast. The difference is significant:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Phoenix, AZ gets ~6.5 kWh/m²/day (extremely sunny)</li>
        <li>Los Angeles, CA gets ~5.5 kWh/m²/day (very sunny)</li>
        <li>Denver, CO gets ~5.3 kWh/m²/day (sunny)</li>
        <li>Atlanta, GA gets ~4.5 kWh/m²/day (moderate)</li>
        <li>Seattle, WA gets ~3.8 kWh/m²/day (cloudy)</li>
        <li>Boston, MA gets ~4.0 kWh/m²/day (cloudy)</li>
      </ul>

      <p class="mb-4">This explains why a 10 kW system in Arizona produces roughly 50,000 kWh/year while the same size system in Seattle only produces 38,000 kWh/year. Location determines your baseline capacity.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Expected Annual Production by State</h2>

      <p class="mb-4">Here's the estimated kWh per kilowatt installed per year for each state. This assumes standard 25-year panels on a properly tilted roof with optimal orientation (south-facing in the northern hemisphere):</p>

      <table class="w-full border-collapse my-6 text-sm">
        <thead>
          <tr class="bg-green-100 border border-gray-300">
            <th class="p-2 text-left font-bold">State</th>
            <th class="p-2 text-left font-bold">kWh per kW/year</th>
            <th class="p-2 text-left font-bold">Relative Production</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>Arizona</strong></td>
            <td class="p-2">1,650</td>
            <td class="p-2">Excellent</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>California</strong></td>
            <td class="p-2">1,550</td>
            <td class="p-2">Excellent</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>New Mexico</strong></td>
            <td class="p-2">1,600</td>
            <td class="p-2">Excellent</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>Nevada</strong></td>
            <td class="p-2">1,620</td>
            <td class="p-2">Excellent</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>Utah</strong></td>
            <td class="p-2">1,550</td>
            <td class="p-2">Excellent</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>Colorado</strong></td>
            <td class="p-2">1,520</td>
            <td class="p-2">Excellent</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>Texas</strong></td>
            <td class="p-2">1,450</td>
            <td class="p-2">Very Good</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>Florida</strong></td>
            <td class="p-2">1,400</td>
            <td class="p-2">Very Good</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>North Carolina</strong></td>
            <td class="p-2">1,350</td>
            <td class="p-2">Very Good</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>Georgia</strong></td>
            <td class="p-2">1,350</td>
            <td class="p-2">Very Good</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>Illinois</strong></td>
            <td class="p-2">1,250</td>
            <td class="p-2">Good</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>New York</strong></td>
            <td class="p-2">1,200</td>
            <td class="p-2">Good</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>New Jersey</strong></td>
            <td class="p-2">1,200</td>
            <td class="p-2">Good</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>Massachusetts</strong></td>
            <td class="p-2">1,150</td>
            <td class="p-2">Good</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>Pennsylvania</strong></td>
            <td class="p-2">1,150</td>
            <td class="p-2">Good</td>
          </tr>
          <tr class="border border-gray-300 bg-gray-50">
            <td class="p-2"><strong>Washington</strong></td>
            <td class="p-2">1,050</td>
            <td class="p-2">Moderate</td>
          </tr>
          <tr class="border border-gray-300">
            <td class="p-2"><strong>Oregon</strong></td>
            <td class="p-2">1,100</td>
            <td class="p-2">Moderate</td>
          </tr>
        </tbody>
      </table>

      <p class="mb-4">These numbers represent healthy systems with good installation quality and minimal soiling.</p>

      ${inlineCta(
        "Compare your actual production against these state averages using SolarDoctor to see if your system is performing up to expectations."
      )}

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Calculate Your Expected Monthly Production</h2>

      <p class="mb-4"><strong>Formula:</strong> (System Size in kW) × (Annual kWh per kW for your state) ÷ 12 months = Average Monthly Production</p>

      <p class="mb-4"><strong>Example:</strong> You have a 6 kW system in Arizona (1,650 kWh/kW/year).</p>

      <p class="mb-4">6 kW × 1,650 kWh/kW = 9,900 kWh/year ÷ 12 months = <strong>825 kWh/month average</strong></p>

      <p class="mb-4">But remember: this is an average. Summer months will be 25-50% higher. Winter months will be 30-50% lower. A sunny July might produce 1,200 kWh while a cloudy December produces 500 kWh — both normal.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Factors That Reduce Expected Production</h2>

      <p class="mb-4">The numbers above assume optimal conditions. These factors reduce production:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Shading:</strong> 1% shadow loss per 1% of panel shading (non-linear impact with optimizers)</li>
        <li><strong>Soiling:</strong> 5-25% loss from dust, pollen, bird droppings</li>
        <li><strong>Inverter efficiency loss:</strong> 2-5% from DC-to-AC conversion</li>
        <li><strong>Wiring and connection losses:</strong> 1-3% from resistance</li>
        <li><strong>Temperature effects:</strong> 0.4-0.5% production loss per 1°C above 25°C</li>
      </ul>

      <p class="mb-4">A healthy system operates at 75-85% of theoretical maximum. This accounts for all losses above.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Your Installer's Estimate Might Be Different</h2>

      <p class="mb-4">Your installer gave you a production estimate when you bought your system. That estimate might not match the state averages above because:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>They accounted for your specific roof pitch and orientation</li>
        <li>They factored in known shading from trees on your property</li>
        <li>They used micro-climate data for your specific address (not just statewide averages)</li>
        <li>They may have used outdated data or conservative estimates</li>
      </ul>

      <p class="mb-4">If your actual production is within 10% of your installer's estimate, you're in good shape. If it's 20%+ below, investigate why.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is Your System Underperforming?</h2>

      <p class="mb-4">Compare your actual annual production to the state average for your location. If you're below 90% of the state average, investigate why. If you're between 90-110%, you're performing normally.</p>

      <p class="mb-4">Reasons for underperformance:</p>

      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Shading has developed (tree growth)</li>
        <li>Soiling is reducing output</li>
        <li>Panel or inverter failures</li>
        <li>Suboptimal installation quality</li>
      </ul>

      <p class="mb-4">A professional can identify the specific cause and recommend fixes.</p>

      ${ctaBlock(
        "See how your system compares to state averages with a free SolarDoctor analysis."
      )}
    `,
    faqs: [
      {
        question: "Why does Arizona produce so much more solar than Washington?",
        answer:
          "Solar irradiance (sunshine intensity) varies by location. Arizona receives ~6.5 kWh/m²/day while Washington gets ~3.8 kWh/m²/day due to cloud cover and latitude. A 10kW system in Arizona produces roughly 40% more electricity than the same system in Washington.",
      },
      {
        question: "Should I expect my production to exactly match the state average?",
        answer:
          "No. State averages assume optimal installation (good tilt angle, no shading, clean panels). Your actual production depends on your specific roof orientation, shading, soiling, and installation quality. Being within 85-115% of the state average is healthy.",
      },
      {
        question: "Do winter and summer production really vary that much?",
        answer:
          "Yes. In most US locations, summer production is 2-3x higher than winter due to longer daylight hours and higher sun angles. This is completely normal. In Arizona, your July production might be 30% of annual output while January is only 6%.",
      },
      {
        question: "How do I know what kWh per kW rate applies to my exact location?",
        answer:
          "Your installer may have provided location-specific estimates in your proposal. For more precision, use NREL's PVWatts tool (free) and enter your address. It provides more accurate estimates based on 20+ years of historical weather data for your specific location.",
      },
    ],
  },
];
