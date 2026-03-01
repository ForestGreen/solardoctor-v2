import type { BlogPost, FaqItem } from './blog-posts';

export const problemBlogPosts: BlogPost[] = [
  {
    slug: 'solar-panels-not-producing-energy',
    title: 'Why Your Solar Panels Aren\'t Producing Energy: A Complete Troubleshooting Guide',
    excerpt: 'Your solar panels should be generating electricity, but your monitoring app shows zero output. Learn the most common causes and how to fix them.',
    category: 'Troubleshooting',
    date: '2025-05-15',
    readTime: '8 min',
    metaDescription: 'Solar panels producing no energy? Learn the top causes and step-by-step troubleshooting guide to get your system back online.',
    content: `<h2>Understanding Why Solar Panels Stop Producing Energy</h2>
<p>One of the most alarming experiences for solar system owners is looking at their monitoring app and seeing zero output when conditions are perfect. Before you panic and call your installer, there are several systematic checks you can perform to diagnose the problem.</p>

<h2>Step 1: Check Your Inverter</h2>
<p>The inverter is the brain of your solar system. It converts the DC electricity from your panels into AC electricity your home uses. If your inverter is off, nothing will work.</p>
<p><strong>What to look for:</strong></p>
<ul>
<li>Is the inverter powered on? Look for the main power switch and ensure it's in the ON position</li>
<li>Check the status lights. Most inverters have LED indicators showing operational status</li>
<li>Look for error codes. A flashing red light usually indicates a fault condition</li>
<li>Check your electrical panel. Did a breaker trip? This cuts power to the entire system</li>
</ul>

<h2>Step 2: Verify System Connectivity</h2>
<p>Many modern solar systems require internet connectivity for monitoring and optimal operation. Without proper networking, your system may operate in a degraded mode or not at all.</p>
<p><strong>Check these items:</strong></p>
<ul>
<li>Is your Wi-Fi router powered on and functioning?</li>
<li>Is your inverter or gateway connected to the network? Check your router's connected devices list</li>
<li>Restart your gateway device. Unplug it for 30 seconds, then plug it back in</li>
<li>For wired connections, verify the Ethernet cable is properly seated</li>
</ul>

<h2>Step 3: Assess Weather and Sunlight Conditions</h2>
<p>This seems obvious, but it's worth checking: Is the sun actually shining on your panels?</p>
<p><strong>Weather factors affecting production:</strong></p>
<ul>
<li>Heavy cloud cover dramatically reduces output—sometimes to near zero on very cloudy days</li>
<li>Rain and fog scatter light, reducing the intensity reaching your panels</li>
<li>Early morning and late evening: solar production is naturally very low at these times</li>
<li>Sunrise and sunset: your system may take 15-30 minutes to reach full operational status</li>
</ul>

<h2>Step 4: Inspect for Physical Obstructions</h2>
<p>Shading from trees, buildings, or debris can block sunlight from reaching your panels.</p>
<p><strong>What to check:</strong></p>
<ul>
<li>Walk around your property and look at your roof from multiple angles</li>
<li>Look for shadows from trees, neighboring buildings, or roof structures</li>
<li>Check for debris: leaves, branches, bird nesting material, dirt, or dust accumulation</li>
<li>In winter, snow coverage will completely block panel output</li>
<li>New construction or vegetation growth can cause sudden shading issues</li>
</ul>

<h2>Step 5: Check DC Disconnect and AC Disconnect</h2>
<p>Most solar systems have two disconnects: one on the DC side (between panels and inverter) and one on the AC side (between inverter and home).</p>
<p><strong>Disconnect locations:</strong></p>
<ul>
<li>DC disconnect: usually a red-handled switch near the inverter or on the roof in the combiner box</li>
<li>AC disconnect: a switch in your electrical panel or a separate outdoor disconnect box</li>
<li>Both should be in the ON position (switch pointing up or to the side, depending on model)</li>
<li>If either is OFF, your system cannot produce energy for your home</li>
</ul>

<h2>Step 6: Review Monitoring Data and Error Messages</h2>
<p>Your monitoring app contains diagnostic information about what went wrong.</p>
<p><strong>What to look for:</strong></p>
<ul>
<li>Inverter error codes: Search your inverter model + the specific error code for detailed explanations</li>
<li>Grid status: If your grid is down (power outage), your grid-tied system won't produce</li>
<li>Voltage or frequency faults: Utility issues can prevent grid-tied systems from operating</li>
<li>Temperature warnings: Inverters shut down if they overheat to protect themselves</li>
<li>Ground fault or arc fault indicators: These are serious safety issues requiring professional attention</li>
</ul>

<h2>When to Call a Professional</h2>
<p>If none of the above steps restore production, you need professional help. Contact your installer immediately if you see:</p>
<ul>
<li>Inverter error codes you can't resolve</li>
<li>Physical damage to panels, wiring, or equipment</li>
<li>Consistent zero production on sunny, cloudless days</li>
<li>Ground fault or arc fault warnings (these are safety hazards)</li>
<li>Tripped breakers that immediately trip again when reset</li>
<li>Smoke, burning smells, or visible damage</li>
</ul>

<h2>How This Affects Your Savings</h2>
<p>Even one day of zero production can be expensive. If your system normally produces 25 kWh daily, that's approximately $3-4 in lost solar credits. Over a month, extended downtime can cost $100+ in foregone energy savings. More importantly, identifying and fixing problems quickly protects your long-term investment and ensures you get the full value of your solar system.</p>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}

<h2>Common Questions About Zero Production</h2>`,
    faqs: [
      {
        question: 'Why does my system show zero production at 6 AM even though the sun is up?',
        answer: 'Solar inverters require sufficient light intensity to begin operation, typically 20-30% of full sunlight. In early morning and late evening, light intensity is below this threshold. This is normal. Production ramps up as the sun gets higher in the sky.'
      },
      {
        question: 'My inverter is on but there\'s a "grid fault" error. What does that mean?',
        answer: 'A grid fault means your system detects a problem with your home\'s electrical connection to the utility grid. This is a safety feature. Common causes include power outages, utility maintenance, or utility voltage issues. Contact your utility company to verify grid status.'
      },
      {
        question: 'Can I fix an inverter error code myself?',
        answer: 'Some simple resets can help: turn off the AC disconnect, wait 5 minutes, then turn it back on. If the error persists, don\'t attempt to repair the inverter internally. Inverters contain dangerous high-voltage components. Contact your installer or a licensed electrician.'
      },
      {
        question: 'My system worked fine yesterday. Why zero production today with perfect weather?',
        answer: 'Check: (1) Did a breaker trip overnight? (2) Is there a power outage in your area? (3) Did the inverter lose internet connectivity? (4) Did you or someone else flip a disconnect? (5) Check the inverter display for error messages. If you find no obvious cause, contact your installer.'
      }
    ]
  },
  {
    slug: 'solar-panels-not-working-after-power-outage',
    title: 'Solar Panels Not Working After Power Outage: Grid-Tie vs Battery Backup',
    excerpt: 'You lost power to the grid, but expected your solar panels to keep working. Here\'s why grid-tied systems shut down during outages and what you can do about it.',
    category: 'Troubleshooting',
    date: '2025-06-01',
    readTime: '8 min',
    metaDescription: 'Why won\'t your solar panels work during a power outage? Learn about anti-islanding safety features and battery backup options.',
    content: `<h2>Understanding Anti-Islanding: Why Your Solar Stops During Outages</h2>
<p>This is one of the most common and frustrating solar questions: you have unlimited sunlight on your roof, but when the power goes out, your solar system stops working. Why? The answer is a critical safety feature called anti-islanding.</p>

<h2>What is Anti-Islanding?</h2>
<p>Anti-islanding is a mandatory safety feature in all grid-tied solar systems. "Islanding" occurs when your solar system continues to produce electricity while the utility grid is down, sending live electricity back into lines where utility workers are attempting repairs.</p>

<p><strong>Why this is dangerous:</strong></p>
<ul>
<li>Utility workers believe power lines are de-energized when they begin repairs after an outage</li>
<li>If your solar system sends electricity back into the grid during repairs, workers can be electrocuted</li>
<li>This has been a real cause of death and serious injury in the utility industry</li>
<li>To prevent this tragedy, solar systems are required to stop producing the moment the grid goes down</li>
</ul>

<h2>How Anti-Islanding Protection Works</h2>
<p>Your inverter constantly monitors the utility grid voltage and frequency. The moment these parameters drop below normal operating ranges—which happens instantly during an outage—the inverter shuts down.</p>

<p><strong>The automatic shutdown sequence:</strong></p>
<ul>
<li>Outage occurs: utility grid voltage and frequency drop</li>
<li>Inverter detects fault condition within milliseconds</li>
<li>Inverter stops producing electricity within 160 milliseconds (required by code)</li>
<li>Inverter will not restart until grid power is restored and stable for several minutes</li>
<li>This happens automatically with no action required from you</li>
</ul>

<h2>Why Your Home Has No Power During an Outage</h2>
<p>Even if you have solar panels, a grid-tied system without battery backup cannot power your home during an outage. Here's why:</p>
<ul>
<li>Your solar inverter is powered by the grid. When the grid goes down, the inverter's control circuits lose power</li>
<li>Even if the inverter had battery power, anti-islanding rules require it to shut down</li>
<li>Standard grid-tied systems are designed for grid-connected operation only</li>
<li>You would need a battery backup system to have power during outages</li>
</ul>

<h2>How to Get Power During Outages: Battery Backup Solutions</h2>
<p>If you want your solar panels to power your home during outages, you need battery storage and a hybrid inverter.</p>

<p><strong>Option 1: Battery-Based Hybrid System</strong></p>
<p>A hybrid inverter (like Tesla Powerwall, Enphase IQ Battery, or SolarEdge StorEdge) can store solar energy during the day and power your home at night or during outages.</p>
<ul>
<li>Cost: typically $10,000-$20,000 installed for a usable capacity of 10-15 kWh</li>
<li>Your system can continue operating in "island mode" on the battery</li>
<li>Priority loads can be backed up during outages</li>
<li>Excess solar energy charges your battery first before exporting to the grid</li>
</ul>

<p><strong>Option 2: Backup Generator</strong></p>
<p>A natural gas or propane generator provides immediate backup power during outages.</p>
<ul>
<li>Cost: $3,000-$8,000 installed for a whole-home unit</li>
<li>Automatic activation when power is lost</li>
<li>Unlimited runtime (fuel dependent)</li>
<li>Does not reduce your dependence on the grid</li>
<li>Can be used with grid-tied solar without modification</li>
</ul>

<p><strong>Option 3: Retrofitting Battery Storage</strong></p>
<p>If you already have solar, you can add battery backup:</p>
<ul>
<li>Your existing inverter will need to be replaced with a hybrid model</li>
<li>Cost varies depending on battery capacity chosen</li>
<li>Installation complexity depends on your current system configuration</li>
<li>Many homeowners add 10-15 kWh of usable storage for critical circuits</li>
</ul>

<h2>What You Can Do Right Now During an Outage</h2>
<p>Even without batteries, you can still use solar energy during an outage with a portable solution:</p>
<ul>
<li>Portable solar generators ($500-$3,000): can power critical devices</li>
<li>Extension cords from a portable battery pack to essential outlets</li>
<li>Hand-crank or battery-powered flashlights and radios</li>
<li>These don't eliminate the problem but provide some backup capability</li>
</ul>

<h2>Is Your System Back Online After Power Returns?</h2>
<p>After a power outage, your solar system should automatically resume operation when grid power is restored and stabilized. This typically takes 2-5 minutes.</p>

<p><strong>If it doesn't restart:</strong></p>
<ul>
<li>Check that the AC disconnect switch is in the ON position</li>
<li>Check that no breakers are tripped in your electrical panel</li>
<li>Look at your inverter display for error messages</li>
<li>If you see a ground fault warning, contact your installer immediately</li>
<li>If the inverter won't restart after 10 minutes, try manually cycling the main breaker</li>
</ul>

<h2>Planning for Outage Protection</h2>
<p>If you live in an area with frequent power outages, the decision to add battery backup often makes financial sense. The investment pays for itself through:</p>
<ul>
<li>Avoided spoilage during refrigeration outages</li>
<li>Maintained home security and communication</li>
<li>Reduced stress and improved quality of life during extended outages</li>
<li>Over time, battery costs continue to decrease</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'Is it dangerous that my solar system stops during a power outage?',
        answer: 'No, it\'s actually a crucial safety feature. Anti-islanding protection prevents your solar system from sending electricity back into utility lines during repairs. This protects utility workers from electrocution. The shutdown is automatic and happens in milliseconds.'
      },
      {
        question: 'Can I manually disconnect the grid so my solar keeps working during an outage?',
        answer: 'No. You should never attempt this. Intentionally disconnecting from the grid while your solar system operates is illegal and extremely dangerous. It violates electrical code and can result in fines or criminal liability.'
      },
      {
        question: 'If I install a battery backup system, will my solar work during outages?',
        answer: 'Yes. A hybrid inverter with battery storage allows your system to operate in "island mode." During an outage, your solar panels charge the battery, and the battery powers your home. This requires a system redesign and is typically expensive ($15,000-$25,000).'
      },
      {
        question: 'How long does it take for my solar to restart after power is restored?',
        answer: 'Usually 2-5 minutes. Your inverter needs to confirm that grid voltage and frequency are stable before resuming operation. This is automatic; you don\'t need to do anything. If it takes longer than 10 minutes, check for error codes on the inverter display.'
      }
    ]
  },
  {
    slug: 'solar-panels-not-working-winter',
    title: 'Solar Panels Not Working in Winter: Snow, Short Days, and Angle Issues',
    excerpt: 'Winter reduces solar production significantly. Learn what\'s normal, how snow affects output, and what you can actually do about it.',
    category: 'Troubleshooting',
    date: '2025-07-01',
    readTime: '7 min',
    metaDescription: 'Is your solar production dropping in winter? Learn why, what\'s normal, and how to restore winter output.',
    content: `<h2>Why Winter Reduces Solar Panel Production</h2>
<p>Winter is the hardest season for solar performance. If you're seeing 30-50% lower production in winter compared to summer, that's usually normal. But understanding why helps you know when something is actually wrong.</p>

<h2>Factor 1: Shorter Days Mean Less Sunlight Hours</h2>
<p>In December, there are about 9 hours of daylight compared to 15 hours in June. That's 40% fewer hours of sunlight every day.</p>

<p><strong>Impact on production:</strong></p>
<ul>
<li>Fewer hours = proportionally less total solar production</li>
<li>The sun is lower in the sky, reducing the intensity of light hitting your panels</li>
<li>Sunrise is later, sunset is earlier—opposite of peak solar production hours</li>
<li>You can't do anything about the fundamental rotation of the Earth</li>
</ul>

<h2>Factor 2: Snow Coverage Blocks Sunlight Completely</h2>
<p>In snowy climates, snow accumulation on solar panels is the single biggest cause of winter production loss.</p>

<p><strong>How snow affects panels:</strong></p>
<ul>
<li>Even a thin layer of snow reduces output by 50-75%</li>
<li>Total snow coverage reduces output to nearly zero</li>
<li>Snow reflects light away from the panels</li>
<li>Snow insulates the panel, reducing temperature and slightly reducing efficiency paradoxically</li>
<li>Ice formation makes manual removal dangerous</li>
</ul>

<p><strong>Should you remove snow?</strong></p>
<p>This depends on several factors. Removing snow manually from a roof is dangerous. Many installers specifically advise against it due to fall risk and potential panel damage. However, heavy snow clearly reduces production.</p>

<ul>
<li>Many systems in snowy climates are designed with a tilt angle that allows snow to slide off naturally when the panel warms from sun</li>
<li>If your panels are flat-mounted, snow will accumulate longer</li>
<li>After a few days of sun, snow often melts naturally on solar panels (they're darker and absorb heat)</li>
<li>Professional removal is available but typically costs $100-$300 per cleaning</li>
</ul>

<h2>Factor 3: Winter Sun Angle Is Lower</h2>
<p>The sun is lower in the winter sky, meaning sunlight hits your panels at a steeper angle.</p>

<p><strong>Light angle effects:</strong></p>
<ul>
<li>Steeper angles are less efficient for standard panels</li>
<li>Light must travel through more atmosphere to reach your panels</li>
<li>This naturally reduces the intensity of light and production</li>
<li>Most residential systems are tilted for summer performance, which is suboptimal in winter</li>
</ul>

<h2>Factor 4: Cloud Cover and Haze Are More Common</h2>
<p>Winter weather tends to be cloudier. Overcast conditions reduce production significantly.</p>

<ul>
<li>Multiple consecutive cloudy days are common in winter months</li>
<li>Your system might only produce 10-20% of capacity on overcast days</li>
<li>Seasonal weather patterns naturally reduce winter output</li>
</ul>

<h2>Calculating What's "Normal" Winter Production</h2>
<p>Here's how to figure out if your winter production is actually abnormal:</p>

<p><strong>Step 1:</strong> Find your system's specifications. Your installer paperwork should show "Expected Annual Production" and ideally a month-by-month breakdown.</p>

<p><strong>Step 2:</strong> Calculate your winter average. Add up production from December, January, and February, then divide by three.</p>

<p><strong>Step 3:</strong> Compare to your expected production. Winter months should typically be 40-60% of your summer average, depending on your location.</p>

<p><strong>Step 4:</strong> Account for weather. A winter with heavy snow cover naturally produces less than a winter with minimal snow.</p>

<h2>When Winter Production Is Actually a Problem</h2>
<p>If your winter production is significantly below expected, investigate:</p>

<p><strong>Shading issues:</strong></p>
<ul>
<li>Trees lose leaves in fall, potentially exposing your panels to new shade</li>
<li>Tree growth since installation might now be blocking winter sun</li>
<li>Neighboring buildings cast longer shadows when the sun is lower</li>
<li>These shading issues only appear in winter if shadows weren't present in summer</li>
</ul>

<p><strong>Equipment problems:</strong></p>
<ul>
<li>Inverter faults can develop and show up as reduced production</li>
<li>String inverters may have individual string failures reducing capacity</li>
<li>Microinverter failures reduce production from individual panels</li>
<li>Faulty monitoring might show incorrect production numbers</li>
</ul>

<p><strong>Degradation:</strong></p>
<ul>
<li>Rapid panel degradation (more than 1% per year) is unusual</li>
<li>Check if your panels are cleanly visible or covered in dust/dirt</li>
<li>Bird droppings and industrial fallout reduce efficiency</li>
</ul>

<h2>Solutions for Better Winter Production</h2>

<p><strong>Keep panels clean:</strong></p>
<ul>
<li>Professional panel cleaning in fall removes dust and debris</li>
<li>Cost: typically $150-$300 for a whole system</li>
<li>ROI is often positive in snowy climates where cleaning helps snow slide off</li>
</ul>

<p><strong>Address tree shading:</strong></p>
<ul>
<li>Trimming or removing trees that cause winter shade can significantly boost winter production</li>
<li>This is often worth it if winter shading reduces production by more than 15%</li>
</ul>

<p><strong>Install heated mounting systems (expensive option):</strong></p>
<ul>
<li>Heated mounts prevent snow accumulation: cost $2,000-$5,000+</li>
<li>Only practical for very snowy climates where snow loss is extreme</li>
<li>Requires additional electrical connections</li>
</ul>

<h2>Planning Your Budget Around Seasonal Production</h2>
<p>When sizing a solar system, installers should account for winter production to ensure you meet your annual energy needs. If your system produces 80% of your summer output in winter:</p>

<ul>
<li>You'll have excellent summer production and bill credits</li>
<li>Winter will still require grid power unless you have batteries</li>
<li>Your annual energy offset is averaged across all seasons</li>
<li>This is normal and expected in cold climates</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'Is 50% lower production in winter actually normal?',
        answer: 'Yes, in most climates. Winter has fewer daylight hours, lower sun angle, more clouds, and often snow cover. A 40-50% reduction compared to summer is typical. Check your system\'s expected production specifications to confirm what\'s normal for your location.'
      },
      {
        question: 'Should I climb on my roof to remove snow from solar panels?',
        answer: 'No. Roof safety is a serious concern, and many installers explicitly advise against this due to fall risk. Snow typically melts naturally within a few days as the sun warms the panels. If snow is a persistent problem, hire professionals or contact your installer about options.'
      },
      {
        question: 'Does cold weather make solar panels less efficient?',
        answer: 'Interestingly, solar panels are actually slightly more efficient in cold weather. However, this small efficiency gain is far outweighed by winter\'s other factors: shorter days, lower sun angle, and snow cover. So while the panels themselves perform slightly better in cold, overall winter production is still much lower.'
      },
      {
        question: 'Why is my winter production much worse than expected?',
        answer: 'Check for: (1) New shading from trees or buildings, (2) Snow cover on panels, (3) Dirt or debris accumulation, (4) Equipment faults shown in your monitoring app, (5) Inverter errors. Compare to expected production from your installer. If significantly lower, contact your installer to diagnose.'
      }
    ]
  },
  {
    slug: 'solar-panels-not-working-cloudy-days',
    title: 'Solar Panels on Cloudy Days: What to Expect vs What\'s Wrong',
    excerpt: 'Clouds reduce solar production, but how much is normal? Learn realistic expectations and when cloudy-day performance indicates a problem.',
    category: 'Solar Basics',
    date: '2025-07-15',
    readTime: '6 min',
    metaDescription: 'Do solar panels work on cloudy days? Learn realistic expectations and typical production losses.',
    content: `<h2>Yes, Solar Panels Work on Cloudy Days—But How Much?</h2>
<p>Solar panels continue to generate electricity on cloudy days because they respond to diffuse light, not just direct sunlight. However, production is significantly reduced. Understanding what's normal helps you know when performance is actually problematic.</p>

<h2>How Much Do Clouds Reduce Solar Production?</h2>

<p><strong>Light cloud cover (thin, scattered clouds):</strong></p>
<ul>
<li>Production: 50-75% of clear-day capacity</li>
<li>Sunlight can still reach the panels, just scattered and diffused</li>
<li>You'll see steady production without dramatic drops</li>
</ul>

<p><strong>Moderate cloud cover (mostly cloudy, some sun breaks):</strong></p>
<ul>
<li>Production: 25-50% of clear-day capacity</li>
<li>Production fluctuates as cloud coverage changes</li>
<li>Brief sun breaks can cause sudden spikes in output</li>
</ul>

<p><strong>Heavy cloud cover (overcast, thick clouds):</strong></p>
<ul>
<li>Production: 5-25% of clear-day capacity</li>
<li>Only diffuse light reaches the panels</li>
<li>This is closer to cloudy winter conditions</li>
</ul>

<p><strong>Complete cloud cover (dark, stormy conditions):</strong></p>
<ul>
<li>Production: 0-5% of clear-day capacity</li>
<li>Virtually no useful production</li>
<li>Your system operates at barely above zero output</li>
</ul>

<h2>Why Solar Panels Still Work When Cloudy</h2>
<p>Solar cells respond to the full spectrum of light, not just direct sunlight. Even on completely cloudy days, light is reaching your panels:</p>

<ul>
<li>Clouds scatter blue light, which reaches the panels as diffuse light</li>
<li>This scattered light still excites electrons in the solar cells</li>
<li>The process is the same; the intensity is just much lower</li>
<li>Think of it like how you can see objects on a cloudy day without direct sunlight</li>
</ul>

<h2>Realistic Production Patterns on Different Cloud Days</h2>

<p><strong>Typical partly-cloudy day (50-75% production):</strong></p>
<ul>
<li>Morning: steady ramp-up as sun rises, interrupted by clouds</li>
<li>Midday: good production with dips as clouds pass over</li>
<li>Afternoon: similar to morning, with gradual decrease as sun sets</li>
<li>Day total: reasonable production, maybe 60-70% of a perfect day</li>
</ul>

<p><strong>Overcast day (25-50% production):</strong></p>
<ul>
<li>Morning: slow ramp-up, low baseline production</li>
<li>Midday peak is much lower than clear days</li>
<li>Production is relatively flat throughout the day</li>
<li>Day total: significantly reduced but still meaningful output</li>
</ul>

<p><strong>Dark, stormy day (5-25% production):</strong></p>
<ul>
<li>Constant low baseline production</li>
<li>Occasional brief dips if thunderstorms develop</li>
<li>No real peak period</li>
<li>Day total: minimal output, perhaps 10-20% of a clear day</li>
</ul>

<h2>When Cloudy-Day Performance Indicates a Problem</h2>
<p>Most solar system owners should expect certain patterns on cloudy days. Here's when something is actually wrong:</p>

<p><strong>Red flag: Zero production on a partly-cloudy day with sun breaks</strong></p>
<p>If you see moments of bright sun peeking through clouds but your system still shows zero output, something is definitely wrong. Check:</p>
<ul>
<li>Is the inverter powered on and showing operational status?</li>
<li>Are all disconnect switches in the ON position?</li>
<li>Are there error codes displayed on the inverter?</li>
<li>Contact your installer if the problem persists</li>
</ul>

<p><strong>Red flag: Production much lower than expected on a sunny-looking day</strong></p>
<p>If a day appears mostly clear but production is only 20% of expected, investigate:</p>
<ul>
<li>Shading from trees, buildings, or other obstructions</li>
<li>Dirt, dust, bird droppings on the panels</li>
<li>Equipment faults (check inverter error codes)</li>
<li>Partial string failures in your system</li>
</ul>

<p><strong>Red flag: Production dropping over multiple cloudy days</strong></p>
<p>If your system is consistently 30%+ lower than expected on cloudy days (compared to historical data), it might indicate:</p>
<ul>
<li>Accumulated dirt or dust on panels reducing light transmission</li>
<li>Failing microinverters or power optimizers</li>
<li>Gradual panel degradation (though this is usually very slow)</li>
<li>Inverter efficiency issues</li>
</ul>

<h2>Using Cloudy Days to Diagnose System Problems</h2>
<p>Interestingly, cloudy days are actually good for diagnosing certain problems:</p>

<p><strong>Why?</strong> On cloudy days, shading effects are less dramatic, so you can see baseline system performance. If one microinverter is failing, it will show up clearly on a cloudy day when other units are producing consistent low output.</p>

<p><strong>What to check:</strong></p>
<ul>
<li>On a moderate cloudyday, log into your monitoring app</li>
<li>Look at individual panel or microinverter output (if available)</li>
<li>Panels should show relatively similar production within 10-15% of each other</li>
<li>If one panel is producing 30%+ less than similar panels, it might be failing</li>
</ul>

<h2>Planning for Cloudy-Day Requirements</h2>
<p>When designing your solar system, installers account for average monthly cloud cover and solar irradiance. Your system is sized to meet your annual energy needs accounting for local climate patterns.</p>

<ul>
<li>Cloudy climates (Pacific Northwest, parts of the Northeast) require larger systems to reach the same annual production</li>
<li>Sunny climates (Southwest, parts of the South) can use smaller systems for the same result</li>
<li>Over a year, cloudy days average out and your system should still produce its expected annual total</li>
</ul>

<h2>Don't Overreact to a Few Cloudy Days</h2>
<p>If you see several cloudy days with low production, that's normal. Solar production naturally varies with weather. The system is designed to average out over time. What matters is your production over months and years, not day-to-day output on cloudy weather.</p>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'What\'s the minimum cloud cover where solar panels stop working?',
        answer: 'Solar panels never completely stop working due to clouds alone. Even under completely dark, overcast skies, panels will still produce about 1-5% of their clear-day capacity. Production becomes meaningfully low only with thick, dark storm clouds.'
      },
      {
        question: 'Do solar panels work better on cloudy days because they don\'t overheat?',
        answer: 'Solar panels are actually slightly more efficient when cooler (cold weather slightly boosts efficiency), but this tiny gain doesn\'t offset the massive loss from reduced light. A panel at 70°F producing diffuse light still outputs far less than the same panel at 120°F in direct sun.'
      },
      {
        question: 'If my system produces 30% on a cloudy day, is that normal?',
        answer: 'It depends on the type of cloudiness. Partly cloudy with sun breaks: yes, 30-40% is reasonable. Completely overcast: no, you should see much lower output (5-15%). Check your monitoring app to see what type of day it is and compare to your historical cloudy-day patterns.'
      },
      {
        question: 'Should I worry about consistently low production on cloudy days?',
        answer: 'No, unless it\'s lower than your historical average for similar cloudiness. Solar production naturally varies with weather. What matters is annual production averaged over 12 months. One month of cloudy days is normal and expected in most climates.'
      }
    ]
  },
  {
    slug: 'solar-inverter-keeps-shutting-off',
    title: 'Solar Inverter Keeps Shutting Off: Overheating, Grid Issues, and Faults',
    excerpt: 'Your inverter is the heart of your solar system. When it keeps shutting down, here\'s how to diagnose why and get it back online.',
    category: 'Troubleshooting',
    date: '2025-08-01',
    readTime: '8 min',
    metaDescription: 'Solar inverter shutting off repeatedly? Learn the top causes and how to fix overheating and fault conditions.',
    content: `<h2>Understanding Inverter Shutdowns</h2>
<p>Your solar inverter is constantly monitoring system performance and safety conditions. When it detects a problem, it automatically shuts down as a protective measure. Understanding what triggers a shutdown helps you diagnose the issue.</p>

<h2>Cause 1: Inverter Overheating</h2>
<p>Inverters are sophisticated electronic devices that generate heat during operation. If an inverter gets too hot, it will throttle performance or shut down completely to protect itself.</p>

<p><strong>Signs of thermal shutdown:</strong></p>
<ul>
<li>Inverter shuts down during the hottest parts of the day (noon to 3 PM)</li>
<li>Performance returns later in the afternoon when it cools down</li>
<li>Problem is worse on very hot days (above 90°F)</li>
<li>Monitoring app may show "temperature" or "thermal" warnings</li>
</ul>

<p><strong>Common causes of inverter overheating:</strong></p>
<ul>
<li>Blocked ventilation: debris, leaves, or insects clogging air vents</li>
<li>Inadequate airflow: inverter mounted too close to walls or in enclosed spaces</li>
<li>Dust accumulation on heatsinks (the metal fins inside and outside the inverter)</li>
<li>Faulty cooling fan (if equipped)</li>
<li>Extremely high outdoor temperatures combined with heavy solar production</li>
<li>Inverter rated for lower power than your system is producing</li>
</ul>

<p><strong>How to fix thermal shutdowns:</strong></p>
<ul>
<li>Clear any debris around the inverter's ventilation areas</li>
<li>Ensure at least 12 inches of clearance around all sides of the inverter</li>
<li>Don't mount the inverter in direct sun; shade is preferable</li>
<li>Have a professional clean the inverter's internal heatsinks if dust is visible</li>
<li>Check that any cooling fans are running (you should hear a slight hum)</li>
<li>In extreme cases, you may need to reduce the system's load or upgrade the inverter</li>
</ul>

<h2>Cause 2: Grid Faults and Utility Issues</h2>
<p>Grid-tied inverters are constantly monitoring utility voltage and frequency. If the grid is unstable, the inverter will shut down to prevent damage or dangerous conditions.</p>

<p><strong>Grid fault indicators:</strong></p>
<ul>
<li>Shutdowns happen at different times throughout the day (not just during heat peaks)</li>
<li>Shutdowns coincide with known utility maintenance or upgrades</li>
<li>Your utility has recently reported outages or issues in your area</li>
<li>Monitoring app shows "grid fault" or "frequency fault" error codes</li>
</ul>

<p><strong>Common grid-related issues:</strong></p>
<ul>
<li>Utility performing scheduled maintenance on power lines</li>
<li>Utility voltage is slightly outside normal operating ranges</li>
<li>Utility frequency fluctuation (frequency should be exactly 60 Hz in the US)</li>
<li>High voltage conditions if too many solar systems in your area feed power back simultaneously</li>
<li>Low voltage conditions during peak demand times</li>
</ul>

<p><strong>What to do about grid faults:</strong></p>
<ul>
<li>Contact your utility company and report the issue with dates and times</li>
<li>Ask if they've been performing maintenance that might affect power quality</li>
<li>Document the error codes from your inverter for your installer</li>
<li>Ask your installer if inverter settings can be adjusted (this requires a licensed electrician)</li>
<li>Some inverters have configurable voltage/frequency windows; these might need professional adjustment</li>
<li>If the issue persists, you may need a power conditioning device or inverter replacement</li>
</ul>

<h2>Cause 3: Ground Faults and Isolation Faults</h2>
<p>Ground faults occur when unintended electrical current flows to ground (earth). This is a serious safety issue and will cause your inverter to shut down immediately.</p>

<p><strong>Ground fault indicators:</strong></p>
<ul>
<li>Monitoring app shows "ground fault" or "isolation fault" error</li>
<li>Inverter will not restart even when the DC disconnect is cycled</li>
<li>The system shut down suddenly with no warning</li>
</ul>

<p><strong>What causes ground faults:</strong></p>
<ul>
<li>Water damage to wiring or connectors (rain, snow melt, hose accidents)</li>
<li>Damaged insulation on DC cables from sun exposure or poor installation</li>
<li>Corroded connectors that allow water infiltration</li>
<li>Lightning strike or power surge damage</li>
<li>Animal chewing through wiring (rodents, birds)</li>
<li>Manufacturing defect in panels or other equipment</li>
</ul>

<p><strong>Important: Ground faults require professional repair</strong></p>
<ul>
<li>Do not attempt to reset or troubleshoot a ground fault yourself</li>
<li>Ground faults involve high-voltage DC electricity and are electrocution hazards</li>
<li>Contact your installer or a licensed solar electrician immediately</li>
<li>Do not restore the system to operation until the fault is identified and repaired</li>
<li>Continuing to operate with a ground fault is a fire and safety hazard</li>
</ul>

<h2>Cause 4: Arc Faults</h2>
<p>Arc faults occur when there's unintended electrical arcing in the DC wiring. This is both dangerous and will trigger inverter shutdown.</p>

<p><strong>Arc fault indicators:</strong></p>
<ul>
<li>Monitoring app shows "arc fault" warning</li>
<li>Inverter will not restart</li>
<li>You might smell burning or see burn marks near connectors or wiring</li>
</ul>

<p><strong>Causes:</strong></p>
<ul>
<li>Loose connectors that have developed intermittent contact</li>
<li>Damaged wiring from pests or weather exposure</li>
<li>Poor installation where connections weren't properly crimped</li>
<li>Corrosion at connection points</li>
</ul>

<p><strong>What to do:</strong></p>
<ul>
<li>Do not attempt to troubleshoot arc faults yourself—they're fire hazards</li>
<li>Contact your installer or a qualified electrician immediately</li>
<li>Do not operate the system until the fault is resolved</li>
<li>If you smell burning, turn off the DC disconnect immediately</li>
</ul>

<h2>Cause 5: String Faults or Combiner Box Issues</h2>
<p>If one string of panels develops a fault, some systems will shut down completely; others may reduce output.</p>

<p><strong>String fault indicators:</strong></p>
<ul>
<li>Monitoring app shows reduced production from one or more strings</li>
<li>String inverters may display "string 1 fault" or "string 2 fault"</li>
<li>Output drops by the percentage of your system that the affected string represents</li>
<li>Issue persists across multiple days</li>
</ul>

<p><strong>Causes:</strong></p>
<ul>
<li>One or more panels in the string failing</li>
<li>Disconnected or loose wiring in the string circuit</li>
<li>Faulty string combiner box or breaker</li>
<li>Degraded solder joints in panels</li>
</ul>

<p><strong>Troubleshooting steps:</strong></p>
<ul>
<li>Check all visible wiring and connectors on the roof for damage or corrosion</li>
<li>If you have access to the combiner box, check that all breakers are in the ON position</li>
<li>Document which string is faulting (from monitoring data) and the specific error code</li>
<li>Contact your installer with this information for diagnosis</li>
<li>This is usually repairable but requires professional service</li>
</ul>

<h2>When to Call a Professional</h2>
<p>Contact your installer or a licensed solar electrician immediately if you see:</p>
<ul>
<li>Ground fault or arc fault error codes</li>
<li>Smoke, burning smells, or visible damage</li>
<li>Inverter won't restart even after troubleshooting</li>
<li>Multiple error codes on the display</li>
<li>Repeated shutdowns despite clear weather and reasonable temperatures</li>
<li>Water damage or signs of moisture in electrical components</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My inverter shuts down every afternoon at 2-3 PM. Is this a problem?',
        answer: 'It might just be thermal throttling. Check: (1) Inverter temperature is over 140°F, (2) It recovers when temperature drops, (3) Clear any debris around ventilation. If these are true, it\'s probably overheating. If not, check for grid fault codes. Persistent afternoon shutdowns need professional diagnosis.'
      },
      {
        question: 'What should I do if I see a ground fault error?',
        answer: 'Do not attempt to troubleshoot this yourself. Ground faults involve high-voltage DC and are electrocution hazards. Turn off the DC disconnect switch immediately and contact your installer or a licensed solar electrician. Do not restore the system until the fault is professionally diagnosed and repaired.'
      },
      {
        question: 'Can I fix thermal shutdowns by upgrading my inverter?',
        answer: 'Possibly, but first try: (1) Clearing ventilation areas, (2) Ensuring proper airflow, (3) Relocating the inverter to a shaded area. If it\'s oversized for your location, a new inverter might help, but this is expensive. Consult your installer about your options.'
      },
      {
        question: 'How long should my inverter shut down be repaired after a fault?',
        answer: 'This depends on the fault type. Ground and arc faults require professional service—don\'t delay. Simple resets from grid faults might take a few minutes. Thermal shutdowns may last 30-60 minutes. If the system won\'t restart after an hour, or if there are safety issues, call your installer.'
      }
    ]
  },
  {
    slug: 'solar-panel-output-dropping-over-time',
    title: 'Solar Panel Output Dropping Over Time: Degradation vs Real Problems',
    excerpt: 'All panels degrade slightly over time, but if output is dropping faster than expected, something else is wrong. Learn the difference.',
    category: 'Troubleshooting',
    date: '2025-08-15',
    readTime: '7 min',
    metaDescription: 'Why is solar production declining? Learn normal degradation rates vs signs of actual problems.',
    content: `<h2>Understanding Normal Panel Degradation</h2>
<p>Solar panels lose efficiency very slightly every year—this is normal, expected, and factored into warranty coverage. But if your production is declining faster than normal, you might have a real problem.</p>

<h2>What Is Normal Degradation?</h2>
<p>Solar panel degradation is the gradual loss of efficiency over time due to exposure to weather, UV rays, and thermal cycling.</p>

<p><strong>Typical degradation rates:</strong></p>
<ul>
<li>Year 1: 2-3% efficiency loss (initial light-induced degradation)</li>
<li>Years 2+: approximately 0.5-0.7% per year</li>
<li>After 25 years: panels typically retain 80-90% of original efficiency</li>
<li>After 40+ years: panels still produce 75-85% of original capacity</li>
</ul>

<p><strong>Why this matters:</strong></p>
<ul>
<li>A 0.5% yearly loss is barely noticeable year-to-year</li>
<li>Over 25 years, it accumulates to about 12-17% total loss</li>
<li>Modern panel warranties guarantee performance at 80% after 25 years</li>
<li>This is not a manufacturing defect—it's the nature of the materials</li>
</ul>

<h2>How to Calculate Your Expected Degradation</h2>

<p><strong>Step 1:</strong> Find your system's baseline production. Use the first full month of production data as your reference (usually the commissioning month).</p>

<p><strong>Step 2:</strong> Account for seasonal variations. Compare the same season year-over-year to eliminate seasonal factors.</p>

<p><strong>Step 3:</strong> Adjust for weather differences. A very sunny year will naturally produce more than a cloudy year. Look at multi-year averages.</p>

<p><strong>Step 4:</strong> Calculate the annual degradation:</strong></p>
<ul>
<li>If Year 1 baseline was 10,000 kWh and Year 5 (same season) was 9,700 kWh, that's 300 kWh loss over 4 years = 75 kWh per year ÷ 10,000 baseline = 0.75% annual degradation</li>
<li>0.75% per year is normal and within warranty</li>
<li>If you calculated 2-3% per year, something is wrong</li>
</ul>

<h2>When Declining Output Indicates a Real Problem</h2>

<p><strong>Red flag: More than 1% yearly decline</strong></p>
<p>If you're losing more than 1% efficiency per year, investigate these issues:</p>

<p><strong>1. Dirt and Dust Accumulation</strong></p>
<ul>
<li>Dirt blocks sunlight and can reduce output by 5-15%</li>
<li>This is reversible with professional cleaning</li>
<li>Cost: $150-$300 for a full system cleaning</li>
<li>Check if panels are visibly dirty or covered with dust</li>
</ul>

<p><strong>2. Gradual Shading Increase</strong></p>
<ul>
<li>Trees grow and cast new shadows</li>
<li>Neighbors build structures that shade your panels</li>
<li>Vegetation that didn't shade you 5 years ago now does</li>
<li>This can reduce output by 10-30% depending on shadow extent</li>
<li>Trim or remove trees if economically justified</li>
</ul>

<p><strong>3. Panel-Level Failures</strong></p>
<ul>
<li>Individual panels can fail prematurely from manufacturing defects</li>
<li>Cracked cells or delamination reduce output</li>
<li>If 1-2 panels fail (out of many), the loss is small but measurable</li>
<li>Warranty should cover replacement if this happens</li>
</ul>

<p><strong>4. Microinverter or Power Optimizer Failures</strong></p>
<ul>
<li>Enphase microinverters: typical failure rate is 0.1-0.3% annually (very low)</li>
<li>SolarEdge optimizers: similarly low failure rates</li>
<li>If multiple units fail, production drops proportionally</li>
<li>Log into monitoring; check if individual units show zero production</li>
<li>Warranty should cover replacement</li>
</ul>

<p><strong>5. Inverter Efficiency Decline</strong></p>
<ul>
<li>String inverters rarely decline in efficiency unless failing</li>
<li>If inverter is failing, you'll see error codes</li>
<li>Production drops suddenly, not gradually</li>
</ul>

<p><strong>6. Corrosion or Connector Degradation</strong></p>
<ul>
<li>Salt air, moisture, or temperature cycling can corrode connectors</li>
<li>This increases resistance, reducing current and power output</li>
<li>More common in coastal areas or wet climates</li>
<li>Gradual process that gets worse over years</li>
</ul>

<h2>Diagnosing the Cause</h2>

<p><strong>Step 1: Check panel cleanliness</strong></p>
<p>Look at your panels from a distance. Are they visibly dirty, dusty, or covered with bird droppings? This is the easiest problem to fix with a professional cleaning.</p>

<p><strong>Step 2: Look for new shading</strong></p>
<p>Compare satellite photos of your roof from 5 years ago (Google Maps historical imagery) with current photos. Has vegetation grown? Have neighbors added structures?</p>

<p><strong>Step 3: Check monitoring data for individual unit failures</strong></p>
<p>Log into your monitoring app and look at individual panels or microinverters if available. Do all units show similar output on a given day, or are some much lower?</p>

<p><strong>Step 4: Look for error codes or warnings</strong></p>
<p>Any equipment failures will show error codes in monitoring. If you see none, degradation is likely normal wear.</p>

<p><strong>Step 5: Compare to nearby systems</strong></p>
<p>If you know neighbors with solar, ask about their output trends. If they're also seeing slight declines at similar rates, it's normal. If they're stable, something is wrong with yours.</p>

<h2>When to File a Warranty Claim</h2>
<p>Your solar warranty covers two things:</p>

<p><strong>Equipment warranty (10-15 years):</strong> Covers defects in materials and workmanship. If equipment fails prematurely, it's covered.</p>

<p><strong>Performance warranty (25 years):</strong> Guarantees production will not drop below certain thresholds (usually 80% at year 25). If degradation is excessive, this covers the loss.</p>

<p><strong>To file a claim:</strong></p>
<ul>
<li>Document your production history from day 1</li>
<li>Calculate annual degradation rates and compare to expectations</li>
<li>Identify which component is failing (if known)</li>
<li>Contact your installer with this documentation</li>
<li>Warranty claims can be worth thousands for systems with major failures</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'Is 1% yearly degradation normal or a problem?',
        answer: 'It\'s slightly elevated. Normal degradation is 0.5-0.7% per year for modern panels. However, 1% per year is still within warranty limits and might reflect a combination of minor factors. If you\'re seeing 1% but no obvious problems, monitor closely for signs of specific issues.'
      },
      {
        question: 'How do I know if degradation is normal or if something failed?',
        answer: 'Normal degradation is gradual and steady (0.5-0.7% yearly). Real problems appear as sudden drops or accelerated decline. Compare same-season year-over-year data. If production dropped 10% in one year, something failed. If it dropped 0.5%, that\'s normal.'
      },
      {
        question: 'My panels are 10 years old and producing 5% less. Is this normal?',
        answer: 'Yes. 10 years at 0.5% per year is 5% total loss. This is exactly normal. You should expect to lose about 12-17% over 25 years. At this rate, your panels will easily exceed the 80% performance guarantee after 25 years.'
      },
      {
        question: 'Can I recover lost output by cleaning my panels?',
        answer: 'Yes, if dirt is the cause. Professional cleaning can restore 5-15% of output if panels are very dirty. However, if degradation is from aging components or gradual shading increase, cleaning won\'t help. Check if panels are visibly dirty before paying for cleaning.'
      }
    ]
  },
  {
    slug: 'solar-monitoring-not-showing-data',
    title: 'Solar Monitoring Not Showing Data: Gateway, Connectivity, and Firmware Issues',
    excerpt: 'No data in your monitoring app? Troubleshoot connectivity, gateway issues, and firmware problems.',
    category: 'Troubleshooting',
    date: '2025-09-01',
    readTime: '6 min',
    metaDescription: 'Solar monitoring app not working? Fix connectivity and gateway issues with this guide.',
    content: `<h2>Why Your Monitoring Stopped Showing Data</h2>
<p>A dark monitoring dashboard can mean your system is down completely, or it could just be a connectivity issue. Let's diagnose which.</p>

<h2>Step 1: Is Your System Actually Producing Power?</h2>
<p>First, verify that your solar system is actually operating, not just that monitoring is broken.</p>

<p><strong>How to check:</strong></p>
<ul>
<li>Look at your inverter's physical status lights. Is it powered on and showing normal operation?</li>
<li>Check your electrical panel. Look for production indicators if your system has them</li>
<li>If you're home and the sun is out, does your meter appear to be spinning backward (or showing net export)?</li>
<li>Check if any error codes are displayed on the inverter itself</li>
</ul>

<p><strong>If the system is running but monitoring shows nothing:</strong> This is a connectivity issue, which is usually easier to fix.</p>

<p><strong>If the system is also offline:</strong> This is a system issue, not just monitoring. See our "Solar Panels Not Producing Energy" guide.</p>

<h2>Step 2: Check Your Internet Connection</h2>
<p>Monitoring gateways require a stable internet connection. Without it, data can't be transmitted.</p>

<p><strong>Quick checks:</strong></p>
<ul>
<li>Is your home Wi-Fi working? Test on a phone or laptop</li>
<li>Can you access other internet services normally?</li>
<li>Did your internet connection recently change (ISP switch, router replacement)?</li>
<li>Check your router to see if the gateway device is listed as connected</li>
</ul>

<p><strong>If internet is down:</strong></p>
<ul>
<li>Restart your router. Unplug it for 30 seconds, then plug it back in</li>
<li>Wait 5 minutes for full restart and device reconnection</li>
<li>Check that the gateway device shows a network connection LED (usually green or blue)</li>
<li>If still disconnected, verify Wi-Fi is broadcasting (not hidden or disabled)</li>
</ul>

<h2>Step 3: Restart Your Gateway Device</h2>
<p>The monitoring gateway (also called "communications gateway" or by brand names like Envoy, Enlighten, etc.) can sometimes disconnect.</p>

<p><strong>Basic restart:</strong></p>
<ul>
<li>Locate the gateway device (usually mounted near your electrical panel or inverter)</li>
<li>Unplug the power cable from the device</li>
<li>Wait 30 seconds</li>
<li>Plug it back in</li>
<li>Wait 5-10 minutes for the device to fully restart and reconnect</li>
</ul>

<p><strong>Checking status after restart:</strong></p>
<ul>
<li>Look for LED lights on the gateway. Usually: power light (solid), Wi-Fi light (should be connected/solid), and internet light (should show connection)</li>
<li>Different manufacturers use different LED colors and meanings. Check your manual if unclear</li>
<li>After 10 minutes, your monitoring app should start receiving data again</li>
</ul>

<h2>Step 4: Check Gateway-to-Inverter Communication</h2>
<p>The gateway must communicate with your inverter(s) through power line or physical wiring.</p>

<p><strong>For systems with multiple microinverters (Enphase):</strong></p>
<ul>
<li>Check that Ethernet cable from gateway to a microinverter is properly connected</li>
<li>The connection goes to one microinverter, which daisy-chains to the others</li>
<li>Look for loose or corroded connectors</li>
<li>If the cable is disconnected, data can't flow from inverters to gateway</li>
</ul>

<p><strong>For systems with string inverters:</strong></p>
<ul>
<li>Check that Ethernet cable from gateway to inverter is properly connected and seated</li>
<li>Power line carrier (PLC) communication may also be used; ensure inverter is powered on</li>
<li>Inspect connections for corrosion or loose connectors</li>
</ul>

<p><strong>For SolarEdge systems:</strong></p>
<ul>
<li>Check the gateway's Ethernet connection to the inverter</li>
<li>Ensure RJ45 connectors are fully seated</li>
<li>If the inverter recently rebooted, give it 10 minutes to re-establish communication</li>
</ul>

<h2>Step 5: Check Your Monitoring Account</h2>
<p>Sometimes the monitoring app has issues on the server side, not your local hardware.</p>

<p><strong>To verify:</strong></p>
<ul>
<li>Log out of your monitoring app completely</li>
<li>Wait 1 minute</li>
<li>Log back in</li>
<li>Clear your browser cache if you're using a web app (not mobile app)</li>
<li>Try accessing from a different device or web browser</li>
<li>If multiple devices show no data, it's likely a server issue, not your gateway</li>
</ul>

<p><strong>Server maintenance:</strong></p>
<ul>
<li>Check your monitoring platform's status page. Enphase.com/status, SolarEdge.com/support for known issues</li>
<li>Contact support if there's confirmed server maintenance happening</li>
<li>Data may sync up when the server recovers</li>
</ul>

<h2>Step 6: Check for Firmware Updates</h2>
<p>Outdated gateway firmware can cause connectivity issues or data loss.</p>

<p><strong>How to check:</strong></p>
<ul>
<li>Log into your monitoring app and look for gateway settings or system information</li>
<li>Find the firmware version number for your gateway</li>
<li>Visit your manufacturer's website (Enphase, SolarEdge, etc.) and check for available updates</li>
<li>If updates are available, they usually install automatically, but you can force a check</li>
</ul>

<p><strong>If firmware is stuck or won't update:</strong></p>
<ul>
<li>Power cycle the gateway again (unplug for 30 seconds)</li>
<li>Wait 20 minutes for update to attempt</li>
<li>If still stuck, contact manufacturer support</li>
</ul>

<h2>Step 7: Check for DNS or Network Configuration Issues</h2>
<p>Some advanced users may need to verify network settings.</p>

<p><strong>Network issues:</strong></p>
<ul>
<li>Your gateway uses DNS to resolve monitoring server addresses</li>
<li>If DNS is misconfigured, data can't reach the cloud platform</li>
<li>Check your router's DNS settings. Try using public DNS: 8.8.8.8 and 8.8.4.4 (Google DNS)</li>
<li>Restart the gateway after DNS changes</li>
</ul>

<h2>When to Contact Support</h2>
<p>If you've tried all the above steps and monitoring still isn't working, contact your inverter manufacturer or installer with this information:</p>

<ul>
<li>Gateway model and firmware version</li>
<li>Steps you've already tried</li>
<li>Date and time monitoring last showed data</li>
<li>Any error messages displayed on the gateway or in the app</li>
<li>Internet connection type and stability</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My gateway is blinking and won\'t show a solid light. What does that mean?',
        answer: 'A blinking light usually indicates the gateway is searching for a network connection or is in the process of updating firmware. Wait 10-15 minutes. If it doesn\'t settle to a solid light, try unplugging and replugging. If still blinking after 30 minutes, contact manufacturer support.'
      },
      {
        question: 'My gateway is connected to Wi-Fi but monitoring still shows no data. What\'s wrong?',
        answer: 'The gateway might be connected to Wi-Fi but not communicating with your inverter. Check the Ethernet cable connection from gateway to inverter (or first microinverter). Ensure it\'s properly seated. If that\'s fine, restart both the gateway and inverter (30 seconds off, then back on).'
      },
      {
        question: 'I changed my Wi-Fi password. Now my gateway won\'t connect. How do I fix it?',
        answer: 'You need to reconnect the gateway to Wi-Fi with the new password. This typically requires: (1) Holding the reset button on the gateway for 10-15 seconds until lights flash, (2) Using your monitoring app or a setup tool to reconnect to Wi-Fi, (3) Entering your new Wi-Fi password. Consult your gateway manual for exact steps.'
      },
      {
        question: 'My system produces power but my monitoring app says zero production. Is my system actually working?',
        answer: 'Yes, most likely. If your inverter appears to be running normally and the sun is out, your system is producing power. The monitoring issue is just connectivity. The data may catch up once connectivity is restored, or you may just need to rebuild historical data.'
      }
    ]
  },
  {
    slug: 'solar-panels-producing-less-expected',
    title: 'Solar Panels Producing Less Than Expected: How to Diagnose Underproduction',
    excerpt: 'Your system was supposed to produce 25 kWh daily but only makes 15. Learn how to calculate expected output and find the problem.',
    category: 'Troubleshooting',
    date: '2025-09-15',
    readTime: '8 min',
    metaDescription: 'Solar system underproducing? Learn to calculate expected output and diagnose why.',
    content: `<h2>Understanding Expected vs Actual Production</h2>
<p>If your system is producing less than promised, you need to verify that the promise was realistic, then diagnose what's actually wrong.</p>

<h2>How Solar Production Is Calculated</h2>
<p>System designers use industry-standard models to predict annual production. Here's what goes into the calculation:</p>

<p><strong>Key variables:</strong></p>
<ul>
<li><strong>System size:</strong> Measured in kilowatts (kW). A 10 kW system is larger than a 5 kW system</li>
<li><strong>Location:</strong> Solar irradiance (how much sunlight hits) varies by location. Arizona gets more sun than Oregon</li>
<li><strong>Panel orientation:</strong> South-facing panels in the Northern Hemisphere get more sun than east or west-facing</li>
<li><strong>Roof angle:</strong> Optimal angle is usually your latitude (40° in Colorado, 30° in Texas)</li>
<li><strong>Shading:</strong> Trees, buildings, and structures reduce production proportionally</li>
<li><strong>Panel efficiency:</strong> Modern panels are 18-22% efficient. Older panels might be 15-17%</li>
<li><strong>Inverter efficiency:</strong> Inverters are typically 95-98% efficient</li>
<li><strong>Losses:</strong> Wiring losses, soiling (dirt), and temperature derating reduce output</li>
</ul>

<h2>Calculating Expected Daily Production</h2>

<p><strong>Simple formula:</strong></p>
<p>System Size (kW) × Peak Sun Hours × Efficiency Factor = Expected Daily Output</p>

<p><strong>Example:</strong></p>
<ul>
<li>System size: 10 kW</li>
<li>Location: Denver, Colorado (approximately 5 peak sun hours per day average)</li>
<li>Efficiency factor: 75% (accounting for inverter losses, wiring losses, soiling, and temperature derating)</li>
<li>Expected daily output: 10 kW × 5 hours × 0.75 = 37.5 kWh per day</li>
</ul>

<p><strong>Peak sun hours explained:</strong></p>
<p>"Peak sun hours" is not the same as daylight hours. It's the equivalent number of hours at peak intensity. Denver averages 5 peak sun hours daily across the year (more in summer, less in winter).</p>

<h2>Checking Your Installation Paperwork</h2>
<p>Your installer should have provided:</p>

<ul>
<li>System specification sheet with kW rating</li>
<li>Production estimate (usually "expected annual production" in kWh)</li>
<li>Month-by-month production breakdown</li>
<li>Shading assessment and losses calculation</li>
<li>Warranty documentation</li>
</ul>

<p><strong>If you have this paperwork:</strong></p>
<ul>
<li>Find the annual production estimate</li>
<li>Divide by 365 to get expected daily average (accounting for winter and summer variation)</li>
<li>Compare to your actual production over the same time period</li>
<li>If actual is 10%+ lower than expected, something is wrong</li>
</ul>

<h2>Comparing Apples to Apples: Weather-Adjusted Comparisons</h2>
<p>The single biggest variable affecting short-term production is weather. A cloudy month will produce much less than a sunny month.</p>

<p><strong>How to account for weather:</strong></p>
<ul>
<li>Use same-month year-over-year comparisons to eliminate seasonal variations</li>
<li>Use multi-month averages (average of last 3 months) instead of single-month data</li>
<li>Use annual production (January through December) as your best measure</li>
<li>Check local weather records or solar irradiance data for your location</li>
<li>Some monitoring platforms show weather-adjusted performance metrics</li>
</ul>

<h2>Common Reasons for Underproduction</h2>

<p><strong>1. Excessive Shading (Most Common)</strong></p>
<ul>
<li>Trees, buildings, or structures casting shadows on panels</li>
<li>Shadows during peak production hours (9 AM - 3 PM) have largest impact</li>
<li>Partial shading on one panel can reduce output from an entire string by 75%</li>
<li>Check your roof throughout the day. Where are the shadows?</li>
<li>If trees grew since installation, consider trimming or removal</li>
</ul>

<p><strong>2. Dirt, Dust, or Soiling (Second Most Common)</strong></p>
<ul>
<li>Accumulated dirt can reduce output by 5-20%</li>
<li>Look at your panels from a distance. Are they visibly dirty?</li>
<li>More common in dusty climates, near construction, or agricultural areas</li>
<li>Professional cleaning typically costs $150-$300 and can restore significant output</li>
<li>ROI is positive if production loss exceeds 10%</li>
</ul>

<p><strong>3. Roof Angle or Orientation Is Suboptimal</strong></p>
<ul>
<li>Panels facing north produce significantly less than south-facing</li>
<li>If your roof slopes east-west instead of north-south, production is reduced</li>
<li>Non-standard angles reduce production proportionally</li>
<li>This should have been accounted for in the design estimate</li>
<li>Fixing this would require reinstalling all panels—rarely cost-effective</li>
</ul>

<p><strong>4. Equipment Failures or Degradation</strong></p>
<ul>
<li>Individual panel failures reduce output from that panel or string</li>
<li>Microinverter or power optimizer failures reduce proportional output</li>
<li>Faulty wiring reduces current and power</li>
<li>Check monitoring for individual panel production if available</li>
<li>Look for error codes in your system</li>
</ul>

<p><strong>5. Installation Errors</strong></p>
<ul>
<li>If panels are wired in an unusual configuration, output might be limited</li>
<li>If system size is smaller than quoted, production will be lower</li>
<li>Check your installation paperwork to verify the actual system size</li>
<li>Physical panel count should match your system size</li>
</ul>

<p><strong>6. Inverter or String Limitations</strong></p>
<ul>
<li>If inverter is undersized for the panels, output is clipped on very sunny days</li>
<li>This is intentional in some designs to reduce cost, but production is affected</li>
<li>Check if clipping is occurring in your monitoring data</li>
</ul>

<h2>Step-by-Step Diagnostic Process</h2>

<p><strong>Step 1: Establish baseline</strong></p>
<p>Find your expected annual production from installer paperwork. Divide by 365 to get average daily expectation.</p>

<p><strong>Step 2: Gather actual data</strong></p>
<p>Pull 3-6 months of actual production from your monitoring app. Calculate the average across the same months from previous years if available.</p>

<p><strong>Step 3: Account for weather</strong></p>
<p>Check historical weather or solar irradiance data for your location. Compare your data month to a known-good month to see if weather explains the difference.</p>

<p><strong>Step 4: Look for obvious problems</strong></p>
<p>Check your roof for shading or visible soiling. Check your system for error codes or alerts in monitoring.</p>

<p><strong>Step 5: Contact your installer</strong></p>
<p>Provide them with: (1) Expected production from paperwork, (2) Actual production data for comparison, (3) Dates when problems began, (4) Any observations about shading or dirt, (5) Error codes if visible.</p>

<h2>What You Can Do About It</h2>

<p><strong>Easy fixes:</strong></p>
<ul>
<li>Clean the panels (professional or DIY if safe)</li>
<li>Trim trees or vegetation blocking sun</li>
<li>Clear leaves, debris, or bird nesting materials</li>
</ul>

<p><strong>Moderate fixes:</strong></p>
<ul>
<li>Add power optimizers or microinverters to reduce shading effects</li>
<li>Increase system size by adding panels if space allows</li>
<li>Replace failed components under warranty</li>
</ul>

<p><strong>When to push back on installer:</strong></p>
<ul>
<li>If production is consistently more than 10% below expectations</li>
<li>If the design was clearly flawed (known shading not accounted for)</li>
<li>If equipment has failed prematurely</li>
<li>Your installer may be able to claim under their performance guarantee</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'How much shading is acceptable before it significantly hurts production?',
        answer: 'Any shading during peak production hours (9 AM - 3 PM) reduces output. Less than 10% shading might reduce daily production by 5-15%. More than 20% shading could reduce production by 30-50%. Very heavy shading (more than 50%) can reduce output by 75%+. If shading increased since installation, talk to your installer about solutions.'
      },
      {
        question: 'Should my production match my installer\'s estimate exactly?',
        answer: 'No. Weather variation is huge. A very sunny year will exceed estimates; a cloudy year will fall short. Compare your annual production (full 12 months) to annual estimates. Monthly comparisons are too variable. If 12-month production is 10%+ below estimate, something is wrong.'
      },
      {
        question: 'My system is producing 70% of expected. Who is responsible?',
        answer: 'This depends. (1) Check if weather explains it (very cloudy year). (2) Check for obvious shading or soiling. (3) Check error codes or equipment failures. (4) Review the design estimate—was shading accounted for? If your installer failed to account for known shading or if equipment failed, they may be liable. Document everything.'
      },
      {
        question: 'Is professional panel cleaning worth it if I\'m producing 15% less?',
        answer: 'Yes. Cleaning costs $150-$300. If panels are visibly dirty and cleaning restores 10-15% production, the payback is quick. A 10% restoration on a 10 kW system is about 3-4 kWh daily production, worth $1-1.50 per day. Cleaning pays for itself in 3-6 months.'
      }
    ]
  },
  {
    slug: 'high-electric-bill-with-solar',
    title: 'High Electric Bill With Solar Panels: Why You\'re Still Paying Utilities',
    excerpt: 'You installed solar to eliminate your electric bill, but it\'s still high. Learn about net metering, TOU rates, and system underproduction.',
    category: 'Solar Basics',
    date: '2025-10-01',
    readTime: '8 min',
    metaDescription: 'Solar system installed but electric bill high? Understand net metering, TOU rates, and underproduction.',
    content: `<h2>Why Your Solar Bill Didn't Drop as Much as Expected</h2>
<p>This is a frustrating problem many solar owners face: the system was supposed to eliminate the electric bill, but you're still paying a substantial amount. Understanding why helps you know if it's a problem with the system or with your expectations.</p>

<h2>Understanding Your Electric Bill Components</h2>
<p>Most electric bills have several components, and solar doesn't eliminate all of them.</p>

<p><strong>Fixed charges:</strong></p>
<ul>
<li>Customer charge or service charge: typically $10-$20 per month</li>
<li>This is the minimum you pay regardless of consumption</li>
<li>Solar cannot eliminate this charge</li>
<li>It funds the utility's infrastructure that you still rely on at night</li>
</ul>

<p><strong>Demand charges:</strong></p>
<ul>
<li>Some utilities charge based on your peak consumption at any point</li>
<li>If you run your AC, electric heater, and dryer simultaneously, you trigger high demand charges</li>
<li>Solar reduces demand charges only if it coincides with peak usage</li>
<li>More common in commercial bills than residential</li>
</ul>

<p><strong>Net metering charges:</strong></p>
<ul>
<li>Some utilities charge a fee for net metering service itself</li>
<li>This is separate from the energy charges</li>
<li>Typically $10-$30 per month</li>
</ul>

<p><strong>Minimum bill requirements:</strong></p>
<ul>
<li>Some utilities have a minimum bill, even if you produce more than you use</li>
<li>You might owe $50 per month minimum regardless</li>
</ul>

<h2>How Net Metering Works and Why It Matters</h2>
<p>Net metering is the key to how solar systems reduce your bill. Here's the system:</p>

<p><strong>During the day when solar is producing:</strong></p>
<ul>
<li>Solar panels produce more power than your home uses</li>
<li>This excess power flows back to the grid</li>
<li>The utility meter spins backward (or goes negative)</li>
<li>You earn credits for that energy at the retail rate</li>
</ul>

<p><strong>At night and during cloudy days:</strong></p>
<ul>
<li>Your solar system can't produce power</li>
<li>You draw power from the grid</li>
<li>You use credits earned during the day</li>
<li>If you run out of credits, you pay the retail rate</li>
</ul>

<p><strong>At month's end:</strong></p>
<ul>
<li>The utility calculates net energy: exports minus imports</li>
<li>If you exported more than you imported, you have a credit</li>
<li>Credits typically roll to the next month (some utilities expire unused credits annually)</li>
<li>If you imported more than you exported, you owe the difference</li>
</ul>

<h2>Why Your Bill Might Still Be High</h2>

<p><strong>Problem 1: System Undersized for Your Usage</strong></p>
<p>Many solar systems are designed to produce 75-90% of annual consumption, not 100%. This is a deliberate choice because:</p>
<ul>
<li>100% sizing would require installing panels for the winter peak, when panels are least efficient</li>
<li>Oversizing for winter means massive oversupply in summer</li>
<li>The optimal design produces enough to offset most winter shortfalls</li>
<li>Result: you're still buying power about 3-4 months of the year</li>
</ul>

<p><strong>If this applies to you:</strong></p>
<ul>
<li>Your bill should be 50-75% lower than before solar, not zero</li>
<li>This is normal and expected</li>
<li>You can add more panels to further reduce it</li>
</ul>

<p><strong>Problem 2: Time-of-Use (TOU) Rates Changed</strong></p>
<p>Many utilities have implemented TOU rates, where electricity costs different amounts at different times.</p>

<p><strong>Typical TOU structure:</strong></p>
<ul>
<li><strong>Off-peak (evening/night):</strong> Cheapest rate, maybe $0.10/kWh</li>
<li><strong>Mid-peak (morning/evening):</strong> Medium rate, maybe $0.20/kWh</li>
<li><strong>Peak (afternoon/evening):</strong> Most expensive rate, maybe $0.35/kWh</li>
</ul>

<p><strong>Why solar underperforms with TOU:</strong></p>
<ul>
<li>Solar peaks at 1-2 PM when you export power at mid-peak rates ($0.20/kWh)</li>
<li>You use most power in evening (6-9 PM) when rates are peak ($0.35/kWh)</li>
<li>You import peak-rate power at night and earn mid-peak credits during the day</li>
<li>The net effect is you pay more per kWh imported than you earn per kWh exported</li>
<li>This "rate mismatch" can mean your bill savings are only 30-40% instead of 70-80%</li>
</ul>

<p><strong>If TOU rates apply to you:</strong></p>
<ul>
<li>Check if opting out is possible (some utilities allow this)</li>
<li>Compare the math: TOU rates vs traditional rates vs staying on TOU</li>
<li>Consider adding batteries to shift solar production to evening peak times</li>
</ul>

<p><strong>Problem 3: High Summer AC Usage Outpaces Solar</strong></p>
<p>If you live in a hot climate with substantial cooling loads:</p>
<ul>
<li>AC compressors run all day and night, consuming massive amounts of power</li>
<li>A 5-ton AC can consume 15-20 kWh daily in summer heat</li>
<li>A typical 10 kW solar system produces 40-50 kWh daily in summer</li>
<li>If usage is high, even maximum system size won't offset 100%</li>
<li>Increasing the system size is possible but expensive</li>
</ul>

<p><strong>Problem 4: Net Metering Rates Changed</strong></p>
<p>Some utilities have reduced the credit rate for exported solar energy.</p>

<p><strong>Examples of rate changes:</strong></p>
<ul>
<li>Previously: solar exports credited at full retail rate ($0.20/kWh)</li>
<li>Now: solar exports credited at lower wholesale rate ($0.05-$0.12/kWh)</li>
<li>This dramatically reduces bill savings even if production is good</li>
<li>Check with your utility if net metering rates changed</li>
</ul>

<p><strong>Problem 5: Actual Production Is Lower Than Expected</strong></p>
<p>See our "Solar Panels Producing Less Than Expected" guide for diagnostics. Shading, soiling, and equipment issues reduce savings proportionally.</p>

<h2>What You Should Actually Expect</h2>

<p><strong>Realistic goals by system type:</strong></p>
<ul>
<li><strong>Conservatively sized:</strong> 40-60% bill reduction (common approach)</li>
<li><strong>Optimally sized:</strong> 60-80% bill reduction (balances cost and benefit)</li>
<li><strong>Maximally sized:</strong> 80-100% bill reduction (requires more panels, battery storage, or both)</li>
</ul>

<p><strong>Why you'll likely always have a bill:</strong></p>
<ul>
<li>Fixed charges ($10-$30/month minimum even at zero usage)</li>
<li>Winter production is lower, and you import more power</li>
<li>Night usage is covered by imports (though you earned credits during the day)</li>
<li>TOU rates may cause you to pay peak prices for evening usage</li>
<li>If you didn't install battery backup, you're entirely dependent on the grid at night</li>
</ul>

<h2>Improving Your Situation</h2>

<p><strong>Option 1: Verify System Performance</strong></p>
<ul>
<li>Check that your system is actually producing as designed (see underproduction guide)</li>
<li>Cleaning, tree trimming, or equipment repairs can restore lost production</li>
</ul>

<p><strong>Option 2: Reduce Consumption</strong></p>
<ul>
<li>Solar reduces consumption, but reducing consumption faster creates even more savings</li>
<li>HVAC efficiency improvements, LED lighting, and smart thermostats help significantly</li>
<li>Time your high-power usage (laundry, dishwasher) to times when solar is producing</li>
</ul>

<p><strong>Option 3: Add Battery Storage</strong></p>
<ul>
<li>Batteries store solar energy produced during the day for nighttime use</li>
<li>This eliminates or drastically reduces nighttime grid imports</li>
<li>Especially effective with TOU rates (you shift solar to peak hours)</li>
<li>Cost: $10,000-$20,000 for 10-15 kWh usable capacity</li>
</ul>

<p><strong>Option 4: Expand the Solar System</strong></p>
<ul>
<li>Add more panels if roof space allows</li>
<li>Each additional kW costs $2,500-$4,000 installed</li>
<li>ROI is good if you're paying $0.15+/kWh utility rates</li>
</ul>

<p><strong>Option 5: Negotiate with Utility</strong></p>
<ul>
<li>Some utilities offer special rates for solar customers</li>
<li>Ask about demand management programs or off-peak rates</li>
<li>Consider switching to a different rate plan if available</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'Why do I still have a $50/month bill with solar?',
        answer: 'Likely because: (1) Your system was sized to offset 75-90% of usage, not 100%, (2) Fixed charges and minimum bills apply even with zero consumption, (3) Winter months have lower production, (4) TOU rates may apply, causing rate mismatches. Check with your installer on expected bill reduction.'
      },
      {
        question: 'The utility put me on TOU rates after I got solar. Is this legal?',
        answer: 'Yes, it\'s legal. However, you may have the right to opt out. Contact your utility and ask about available rate plans. Some states require utilities to maintain traditional rates for some customers. TOU rates are actually better for battery system owners but worse for grid-tied-only systems.'
      },
      {
        question: 'My bill dropped 50% but my system cost $20,000. When will it pay off?',
        answer: 'With a 50% reduction on the average US bill (~$130/month), you\'re saving about $65/month or $780/year. At $20,000 cost, payback is about 25 years. However, systems last 40+ years and there may be tax credits or incentives. Calculate ROI using your actual savings and financing terms.'
      },
      {
        question: 'Can I add more panels to completely eliminate my electric bill?',
        answer: 'Possibly, but with diminishing returns. Adding panels increases cost by ~$2.50-3.50 per watt. If your system already provides 60% reduction, going to 100% might require 60% more panels. Do the math: are 60% more panels worth the cost? Batteries often provide better ROI for reaching 100% offset.'
      }
    ]
  },
  {
    slug: 'solar-panel-cracked-or-damaged',
    title: 'Solar Panel Cracked or Damaged: What to Do and When to Replace',
    excerpt: 'You found a visible crack, dent, or damage on a solar panel. Here\'s what it means and what to do.',
    category: 'Troubleshooting',
    date: '2025-10-15',
    readTime: '6 min',
    metaDescription: 'Solar panel cracked? Learn if it\'s serious, when to replace it, and what warranty covers.',
    content: `<h2>Understanding Solar Panel Damage</h2>
<p>Solar panels are very durable, but hail, debris, animals, and accidents can damage them. Understanding what type of damage you're looking at helps determine if the panel still works or needs replacement.</p>

<h2>Types of Panel Damage and Their Impact</h2>

<p><strong>Type 1: Surface Scratches or Minor Scuffs</strong></p>
<ul>
<li>These are cosmetic and don't affect performance</li>
<li>Very common on older systems from cleaning, debris, or weathering</li>
<li>No action needed; panels continue operating normally</li>
</ul>

<p><strong>Type 2: Cracks in the Glass (Not Affecting Cells)</strong></p>
<ul>
<li>Visible cracks in the glass covering but not in the solar cells beneath</li>
<li>Usually caused by hail, impact, or thermal stress</li>
<li>These typically don't affect electrical performance significantly</li>
<li>However, they allow water infiltration, which will eventually cause failure</li>
<li>Panels with glass cracks should be replaced within 1-3 years to avoid further degradation</li>
</ul>

<p><strong>Type 3: Cracks in Solar Cells</strong></p>
<ul>
<li>Visible cracks running through the actual solar cells (dark/blue area)</li>
<li>These reduce the cell's ability to produce power</li>
<li>Impact depends on crack location and extent</li>
<li>A small hairline crack: 5-15% loss from that cell</li>
<li>A major crack splitting the cell: 50%+ loss from that cell</li>
<li>Panels with significant cell cracks should be replaced</li>
</ul>

<p><strong>Type 4: Delamination</strong></p>
<ul>
<li>The protective layers inside the panel separate from each other</li>
<li>You'll see whitish areas, discoloration, or separation of layers when looking at the edge</li>
<li>This is a serious manufacturing issue</li>
<li>Panels delaminate due to poor installation, moisture infiltration, or manufacturing defects</li>
<li>Delaminated panels will fail within months to years</li>
<li>Should be replaced under warranty immediately</li>
</ul>

<p><strong>Type 5: Burn Marks or Discoloration</strong></p>
<ul>
<li>Dark spots, burn marks, or areas of discoloration on the panel</li>
<li>This indicates a hot spot or internal arcing</li>
<li>These are serious faults that will only get worse</li>
<li>Replace immediately; these pose fire hazards</li>
</ul>

<p><strong>Type 6: Physical Dents or Deformation</strong></p>
<ul>
<li>Hail or impact causing visible denting in the panel frame or surface</li>
<li>Minor dents don't affect performance</li>
<li>Severe dents that distort the panel might affect water drainage or cause glass stress</li>
<li>Extensively damaged panels should be replaced</li>
</ul>

<h2>Diagnosing the Impact on Performance</h2>

<p><strong>One damaged panel out of many:</strong></p>
<p>If you have a 25-panel system and one has a major crack:</p>
<ul>
<li>That single panel might produce 50-75% of its normal output</li>
<li>Over 25 panels, this is a 2-4% reduction in total system output</li>
<li>If the panel is in a string, the impact might be larger (depends on system configuration)</li>
<li>You might not even notice a 2-4% reduction in monitoring</li>
</ul>

<p><strong>Multiple damaged panels:</strong></p>
<ul>
<li>Multiple failures suggest a systemic issue or poor installation</li>
<li>You should investigate the root cause</li>
<li>Contact your installer to inspect the entire system</li>
</ul>

<h2>Hail and Weather Damage</h2>

<p><strong>After a severe hailstorm, you should:</strong></p>
<ul>
<li>Inspect your roof from the ground using binoculars or a drone camera</li>
<li>Don't climb on the roof after a hailstorm; structural damage might be present</li>
<li>Look for visible cracks, dents, or discoloration on panels</li>
<li>Check if your system is still producing at expected levels</li>
<li>Document any damage with photos for insurance purposes</li>
</ul>

<p><strong>File an insurance claim if:</strong></p>
<ul>
<li>You have homeowner's insurance that covers solar panels (not all policies do)</li>
<li>Damage is visible and photographed</li>
<li>You have a professional inspection documenting the damage</li>
<li>Repair cost exceeds your insurance deductible</li>
</ul>

<p><strong>Your solar warranty vs homeowner's insurance:</strong></p>
<ul>
<li>Solar equipment warranty covers manufacturing defects, not hail damage</li>
<li>Homeowner's insurance covers weather damage (if solar is covered in your policy)</li>
<li>Make sure solar panels are specifically listed in your policy</li>
<li>You may need to add a rider to cover solar specifically</li>
</ul>

<h2>When to Replace a Panel</h2>

<p><strong>Definitely replace if:</strong></p>
<ul>
<li>Multiple cracks in solar cells reducing output by 50%+</li>
<li>Signs of delamination or internal separation</li>
<li>Burn marks or discoloration indicating hot spots</li>
<li>Water damage or rust visible on the frame</li>
<li>Complete glass breakage</li>
</ul>

<p><strong>Monitor closely if:</strong></p>
<ul>
<li>Minor hairline cracks in cells (5-15% impact)</li>
<li>Small cracks in the glass not affecting cells</li>
<li>Minor dents without other damage</li>
<li>Check the panel's output regularly; if it declines, replace it</li>
</ul>

<p><strong>No action needed for:</strong></p>
<ul>
<li>Cosmetic scratches or scuffs</li>
<li>Very minor surface cracks not reaching cells</li>
<li>Normal weathering and aging</li>
</ul>

<h2>Replacement Process and Cost</h2>

<p><strong>Panel replacement cost:</strong></p>
<ul>
<li>Single panel cost: $300-$600 depending on wattage</li>
<li>Professional installation labor: $200-$500 per panel</li>
<li>Total cost per panel: $500-$1,100</li>
<li>If the panel is under warranty, cost might be zero or just labor</li>
</ul>

<p><strong>Warranty coverage:</strong></p>
<ul>
<li>Manufacturer's defect warranty: typically 10 years</li>
<li>Performance warranty: typically 25 years</li>
<li>Hail damage: usually NOT covered by panel warranty</li>
<li>Check your specific warranty documentation</li>
</ul>

<p><strong>Insurance claim process:</strong></p>
<ul>
<li>Contact your homeowner's insurance with photos and damage documentation</li>
<li>Get a professional inspection ($300-$500; may be covered by insurance)</li>
<li>File a claim with inspection report and repair estimates</li>
<li>Insurance typically covers repair cost minus deductible</li>
<li>Deductible is often $500-$1,500 per claim</li>
</ul>

<h2>Preventing Future Damage</h2>

<p><strong>After hail damage:</strong></p>
<ul>
<li>Check that your roof is still sound and not damaged</li>
<li>Inspect gutters and drainage to ensure water flows properly</li>
<li>Monitor remaining panels closely for further degradation</li>
<li>Consider upgrading to a policy with solar coverage if you don't have it</li>
</ul>

<p><strong>Rodents and animals:</strong></p>
<ul>
<li>Install critter guards under panels to prevent nesting and chewing</li>
<li>Cost: $300-$800 for a full system</li>
<li>Prevents damage to wiring and panels from animals</li>
</ul>

<p><strong>Debris and branches:</strong></p>
<ul>
<li>Trim trees regularly to prevent branches from falling on panels</li>
<li>Remove debris from roof regularly</li>
<li>Maintain gutters to prevent debris accumulation</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'I found a small crack in one panel. Does my whole system need to be replaced?',
        answer: 'No. One damaged panel out of many produces only a 2-4% reduction in total output. You might not even notice it. However, if the crack is large, growing, or allows water infiltration, that panel should be replaced. Get a professional inspection to determine severity.'
      },
      {
        question: 'Who pays for hail damage to my solar panels?',
        answer: 'Your homeowner\'s insurance covers hail damage if solar is included in your policy (verify this). Submit a claim with photos and get a professional inspection. You\'ll pay your deductible (typically $500-$1,500), and insurance covers the rest. If not covered, warranty doesn\'t apply to weather damage.'
      },
      {
        question: 'Can I repair a cracked panel or must I replace it?',
        answer: 'Panels cannot be effectively repaired. Cracks that affect cells will only get worse. Cracks that let water in will cause internal damage. Replacement is the only reliable solution. Single panel replacement costs $500-$1,100 installed, so it\'s only worth it for valuable panels not yet under warranty.'
      },
      {
        question: 'My insurance won\'t cover solar. What are my options?',
        answer: 'Add solar coverage to your homeowner\'s policy (usually $10-$30/year for a rider). Or self-insure by budgeting for panel replacement as maintenance. With a 25-panel system and low hail probability, self-insurance might be cheaper than a rider. Evaluate your local hail risk.'
      }
    ]
  },
  {
    slug: 'solar-optimizer-not-working',
    title: 'SolarEdge Power Optimizer Not Working: Diagnosis and Replacement',
    excerpt: 'One of your SolarEdge optimizers is offline. Learn what that means, how it affects production, and how to fix it.',
    category: 'Troubleshooting',
    date: '2025-11-01',
    readTime: '6 min',
    metaDescription: 'SolarEdge power optimizer offline? Learn diagnosis, impact, and how to replace it.',
    content: `<h2>Understanding Power Optimizers</h2>
<p>SolarEdge power optimizers are small devices mounted on each panel that maximize the panel's output. When one fails or goes offline, you lose production from that panel.</p>

<h2>Signs Your Optimizer Is Failing</h2>

<p><strong>In your monitoring app:</strong></p>
<ul>
<li>The affected panel shows zero or very low production while others produce normally</li>
<li>On a sunny day, all panels should produce similar amounts (within 10-20% of each other)</li>
<li>A panel producing less than 5% of similar panels is likely offline</li>
<li>The SolarEdge app might show "offline" status for that optimizer</li>
</ul>

<p><strong>What you might see physically:</strong></p>
<ul>
<li>No red or green light on the optimizer (light should flash or be steady green)</li>
<li>A green light means operational; red or no light means a problem</li>
<li>Multiple offline optimizers suggest a wiring or communication issue</li>
</ul>

<h2>How Much Does One Failed Optimizer Affect Your System?</h2>
<ul>
<li>One failed optimizer = one panel offline</li>
<li>If you have 20 panels total: 1 ÷ 20 = 5% production loss</li>
<li>A 10 kW system with one bad optimizer loses about 500W capacity or 1-2 kWh daily</li>
<li>This equals about $30-$60 monthly in lost solar credits</li>
<li>The cost to replace is justified within 6-12 months of lost production</li>
</ul>

<h2>Diagnosing the Problem</h2>

<p><strong>Step 1: Confirm it's actually offline</strong></p>
<ul>
<li>On a cloudy day, production is low and hard to compare</li>
<li>On a sunny, clear day, compare the affected panel to nearby panels</li>
<li>A panel producing significantly less indicates optimizer failure</li>
<li>Check your SolarEdge app for specific optimizer status</li>
</ul>

<p><strong>Step 2: Check for communication issues</strong></p>
<ul>
<li>SolarEdge optimizers communicate through the panel wiring and inverter</li>
<li>If multiple optimizers are offline in the same string, it might be a wiring problem</li>
<li>Restart your SolarEdge inverter: turn off the AC disconnect for 10 minutes, then back on</li>
<li>If optimizers come back online, it was likely a communication glitch</li>
</ul>

<p><strong>Step 3: Check the LED on the optimizer</strong></p>
<ul>
<li>Locate the specific offline optimizer on your roof (check your system diagram)</li>
<li>The optimizer is a small box (about 6"x4") mounted on the panel frame</li>
<li>Does it have a light visible? What color is it?</li>
<li>Green light = working, Red light = problem, No light = power issue</li>
<li>You can see this from the ground with binoculars</li>
</ul>

<p><strong>Step 4: Check for water damage or corrosion</strong></p>
<ul>
<li>Look at the connectors. Are they corroded, green, or discolored?</li>
<li>Are there signs of moisture damage on the optimizer box?</li>
<li>Water damage often causes optimizer failure</li>
<li>Corrosion at connectors prevents power or communication</li>
</ul>

<h2>When It's a Real Failure vs Temporary Issue</h2>

<p><strong>Temporary issues (usually recoverable):</strong></p>
<ul>
<li>Inverter communication glitch (restart the inverter)</li>
<li>Loose connector (professional checking recommended)</li>
<li>Firmware issue (inverter firmware updates sometimes fix optimizer issues)</li>
</ul>

<p><strong>Real failures (require replacement):</strong></p>
<ul>
<li>Optimizer completely offline and won't reconnect after restart</li>
<li>Water damage visible on the device</li>
<li>No light ever visible on the optimizer after clearing obstructions</li>
<li>Multiple restart attempts don't restore it</li>
</ul>

<h2>Warranty and Replacement</h2>

<p><strong>SolarEdge optimizer warranty:</strong></p>
<ul>
<li>Standard warranty: 12 years for most models</li>
<li>Extended warranty available: up to 25 years on some products</li>
<li>Failure rate: extremely low, about 0.05-0.10% annually</li>
<li>If still under warranty, SolarEdge or your installer covers replacement</li>
</ul>

<p><strong>Replacement cost:</strong></p>
<ul>
<li>Single P300/P350/P370/P400 optimizer: $150-$250</li>
<li>Labor to replace: $200-$400 (requires roof access)</li>
<li>Total cost: $350-$650 if out of warranty</li>
<li>This cost is recovered in about 10-12 months of regained production</li>
</ul>

<p><strong>How to get it replaced:</strong></p>
<ul>
<li>Contact your solar installer with the offline optimizer details</li>
<li>Provide the optimizer serial number (visible on the device)</li>
<li>If under warranty, the installer claims with SolarEdge</li>
<li>SolarEdge sends a replacement device</li>
<li>Your installer installs the replacement</li>
<li>Usually takes 2-4 weeks from report to full resolution</li>
</ul>

<h2>Preventing Future Failures</h2>

<p><strong>Most common causes of optimizer failure:</strong></p>
<ul>
<li>Water infiltration from poor installation or age</li>
<li>Manufacturing defect (rare, caught in warranty period)</li>
<li>Corrosion from salt air or humid environments</li>
<li>Lightning strike or power surge (very rare with proper protection)</li>
</ul>

<p><strong>What you can do:</strong></p>
<ul>
<li>Ensure your roof is not accumulating standing water</li>
<li>Have your installer inspect connectors for corrosion annually if in a coastal area</li>
<li>Keep trees trimmed to prevent branch damage to wiring</li>
<li>Install surge protection if your area has frequent lightning</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My SolarEdge app says one optimizer is offline. Does this mean the panel isn\'t producing?',
        answer: 'Yes, that panel is producing very little or nothing. An offline optimizer means the panel cannot feed power into the system. That panel contributes less than 1% of total output while offline. Replacement is usually warranted within a few months based on lost production value.'
      },
      {
        question: 'Can I restart or reset an offline optimizer myself?',
        answer: 'You cannot reset individual optimizers directly, but you can restart the entire system: turn off the AC disconnect for 10 minutes, then back on. This sometimes restores optimizers if it was a communication glitch. If this doesn\'t work after 24 hours, the optimizer likely failed and needs replacement.'
      },
      {
        question: 'How long does it take to replace a failed optimizer?',
        answer: 'Contact your installer when you notice it\'s offline. If under warranty, SolarEdge ships a replacement (typically 1-2 weeks). Your installer then schedules replacement (another 1-2 weeks). Total time: 2-4 weeks. If out of warranty, timeline is similar but you pay for the part and labor.'
      },
      {
        question: 'Do multiple offline optimizers mean something bigger is wrong?',
        answer: 'Possibly. Multiple offline optimizers in the same string might indicate a wiring issue or inverter problem. Multiple failures across the system might indicate a power quality issue or lightning strike. Contact your installer to investigate. It\'s unlikely all failed simultaneously unless there was an external event.'
      }
    ]
  },
  {
    slug: 'microinverter-failed-enphase',
    title: 'Enphase Microinverter Failed: How to Diagnose and Replace',
    excerpt: 'One of your Enphase microinverters is offline. Learn what that means for your system and how to get it fixed.',
    category: 'Troubleshooting',
    date: '2025-11-15',
    readTime: '6 min',
    metaDescription: 'Enphase microinverter offline? Learn diagnosis and how to get it replaced under warranty.',
    content: `<h2>Understanding Microinverter Systems</h2>
<p>If you have Enphase microinverters, each panel has its own small inverter. When one goes offline, that panel can't produce power. Understanding how to diagnose and fix this is important.</p>

<h2>How to Identify a Failed Microinverter</h2>

<p><strong>Check your Enlighten monitoring app:</strong></p>
<ul>
<li>Look at your system status dashboard or device list</li>
<li>One microinverter will show "offline" status</li>
<li>Check the production view: that panel will show zero or near-zero output on a sunny day</li>
<li>On a typical sunny day, microinverters should produce 150-300W each (varies by panel size)</li>
<li>One showing 0-5W while others produce 200W+ indicates failure</li>
</ul>

<p><strong>Physical inspection:</strong></p>
<ul>
<li>Microinverters are mounted directly on the back of each panel (about 4"x6" device)</li>
<li>Look for the status indicator light (LED)</li>
<li>Steady green light = working normally</li>
<li>Blinking light = communication issue or in startup mode</li>
<li>Red light = fault condition</li>
<li>No light = power issue or complete failure</li>
</ul>

<h2>Production Loss From One Failed Microinverter</h2>

<p><strong>Impact calculation:</strong></p>
<ul>
<li>One microinverter offline = one panel offline</li>
<li>Each panel is typically 300-400W</li>
<li>In a 25-panel system: 1 ÷ 25 = 4% total system loss</li>
<li>A typical 25-panel (8.5 kW) system losing one inverter loses about 340W capacity</li>
<li>This equals about 1.5-2 kWh daily production loss</li>
<li>At typical rates, that's $30-$50 monthly in lost credits</li>
</ul>

<h2>Diagnosing the Problem</h2>

<p><strong>Step 1: Confirm it's actually offline</strong></p>
<ul>
<li>Check Enlighten app on a sunny, clear day</li>
<li>Look at the last 24-48 hours of production</li>
<li>Did the microinverter ever produce output, or is it consistently zero?</li>
<li>If zero for multiple days of sun, it's likely failed</li>
</ul>

<p><strong>Step 2: Check for communication issues</strong></p>
<ul>
<li>Microinverters communicate through the AC wiring back to the gateway</li>
<li>If one is offline, it's a local issue (not network-wide)</li>
<li>Restart your Envoy gateway: unplug for 30 seconds, then plug back in</li>
<li>Wait 10 minutes for communication to re-establish</li>
<li>Check if the microinverter comes back online in the app</li>
</ul>

<p><strong>Step 3: Restart the entire AC circuit</strong></p>
<ul>
<li>Turn off the AC disconnect switch for 10 minutes</li>
<li>Wait, then turn it back on</li>
<li>Allow 10 minutes for the system to fully restart</li>
<li>Check Enlighten to see if the microinverter is back online</li>
<li>If not, it's likely a hardware failure</li>
</ul>

<p><strong>Step 4: Physical inspection</strong></p>
<ul>
<li>Can you see the microinverter physically (perhaps with binoculars from below)?</li>
<li>Is there visible water damage, corrosion, or burn marks?</li>
<li>Does the LED show any color (even dim)?</li>
<li>Physical damage usually indicates internal failure</li>
</ul>

<h2>Real Failure vs Temporary Issue</h2>

<p><strong>Usually temporary (restart might fix):</strong></p>
<ul>
<li>Microinverter recently came offline but was working before</li>
<li>Gateway communication issue (restart gateway restores it)</li>
<li>AC circuit breaker trip (reset breaker)</li>
<li>Firmware update in progress</li>
</ul>

<p><strong>Usually permanent (replacement needed):</strong></p>
<ul>
<li>Offline for more than a few days despite restarts</li>
<li>Red light or no light showing on the device</li>
<li>Visible water damage or corrosion on the microinverter</li>
<li>Burn marks or discoloration on the casing</li>
</ul>

<h2>Warranty and Replacement</h2>

<p><strong>Enphase microinverter warranty:</strong></p>
<ul>
<li>Standard warranty: 12-15 years depending on model generation</li>
<li>IQ-series (newer): up to 15 years</li>
<li>M-series and earlier: 10-12 years</li>
<li>Check your paperwork to confirm which generation you have</li>
<li>Most residential systems are still under warranty</li>
</ul>

<p><strong>Failure rates:</strong></p>
<ul>
<li>Enphase failure rate: approximately 0.05-0.08% annually</li>
<li>This is extremely low; failures are rare</li>
<li>Most failures happen early (first year) due to manufacturing defects</li>
<li>Later failures are usually water damage or external events</li>
</ul>

<p><strong>Replacement cost:</strong></p>
<ul>
<li>IQ7 or IQ7A microinverter: $200-$300 (if out of warranty)</li>
<li>M-series (older): $150-$200</li>
<li>Labor: $200-$400 (requires roof access and electrical work)</li>
<li>Total if out of warranty: $400-$700</li>
<li>ROI is achieved in about 8-12 months of regained production</li>
</ul>

<p><strong>How replacement works:</strong></p>
<ul>
<li>Contact your installer with the offline microinverter serial number</li>
<li>Serial number is visible in Enlighten app or on the device itself</li>
<li>If under warranty, Enphase ships replacement to your installer</li>
<li>Installer schedules roof access and replacement (typically 1-2 weeks)</li>
<li>Old unit is returned to Enphase under warranty replacement program</li>
<li>Complete resolution typically takes 2-4 weeks</li>
</ul>

<h2>Preventing Future Failures</h2>

<p><strong>Common causes of microinverter failure:</strong></p>
<ul>
<li>Water infiltration (poor installation, age, or roof damage allowing water exposure)</li>
<li>Manufacturing defect (rare, usually caught in first year)</li>
<li>Corrosion from salt air or coastal environments</li>
<li>Lightning strike or power surge (extremely rare with proper protection)</li>
<li>Rodent damage to connections</li>
</ul>

<p><strong>Maintenance tips:</strong></p>
<ul>
<li>Ensure your roof is well-maintained to prevent water leaks</li>
<li>In coastal areas, have your installer inspect connections annually for corrosion</li>
<li>Install critter guards to prevent animal damage to wiring and connections</li>
<li>Keep trees trimmed to prevent branch damage</li>
<li>Have professional inspections every 3-5 years</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My Enlighten app shows one microinverter offline. Will my system still work?',
        answer: 'Yes, your system continues operating, but one panel\'s output is lost. That panel will produce almost nothing instead of its normal 300-400W. Total system output is reduced by about 4-5%. The rest of the system operates normally.'
      },
      {
        question: 'Can I fix an offline microinverter by restarting things?',
        answer: 'Maybe. Restart your Envoy gateway (unplug 30 seconds, plug back in), then restart your AC disconnect switch (off for 10 minutes, then on). Wait 10 minutes in each case. If the microinverter comes back online in the Enlighten app, it was likely a communication glitch. If not after these steps, it probably failed and needs replacement.'
      },
      {
        question: 'How old are my microinverters and when do they expire from warranty?',
        answer: 'Check your Enlighten app or installer paperwork for the model generation and install date. IQ-series (newer, post-2020): typically 15-year warranty. M-series (older): 10-12 year warranty. If installed before 2012, they\'re likely out of warranty now. Calculate: install date + warranty period = expiration date.'
      },
      {
        question: 'Is one failed microinverter a sign my whole system will fail?',
        answer: 'No. Microinverter failure rates are extremely low (~0.05% annually), and they fail independently. One failure doesn\'t predict others. However, if multiple fail within a few months, it might indicate a power quality issue or installation problem. Contact your installer to investigate.'
      }
    ]
  },
  {
    slug: 'solar-panels-making-noise',
    title: 'Solar Panels Making Noise: Clicking, Buzzing, and When It\'s Normal',
    excerpt: 'Your solar panels are making sounds. Learn what\'s normal, what\'s concerning, and when to call a professional.',
    category: 'Troubleshooting',
    date: '2025-12-01',
    readTime: '6 min',
    metaDescription: 'Solar panels making noise? Learn about normal sounds vs problems that need attention.',
    content: `<h2>Understanding Solar System Sounds</h2>
<p>Solar systems do make sounds, and most are completely normal. Learning the difference between expected noises and concerning ones helps you avoid unnecessary service calls.</p>

<h2>Normal Solar System Sounds</h2>

<p><strong>Inverter hum (60 Hz frequency)</strong></p>
<ul>
<li>A low-frequency hum coming from the inverter, similar to a refrigerator</li>
<li>This is normal and expected from the inverter's power conversion</li>
<li>More noticeable in very quiet environments</li>
<li>Not a cause for concern; this is how inverters work</li>
<li>You might hear it more on sunny days when production is high</li>
</ul>

<p><strong>Cooling fan noise</strong></p>
<ul>
<li>String inverters have cooling fans that activate when hot</li>
<li>You'll hear a fan running during peak production (typical in hot weather)</li>
<li>Sounds like a small computer fan</li>
<li>Completely normal and necessary for inverter protection</li>
<li>Fan runs intermittently, not constantly</li>
</ul>

<p><strong>Microinverter soft clicking sounds</strong></p>
<ul>
<li>Enphase microinverters may emit soft clicking sounds during startup or operation</li>
<li>This is internal relay activity, completely normal</li>
<li>Very quiet and barely noticeable</li>
<li>No cause for concern</li>
</ul>

<p><strong>Wiring and structure sounds</strong></p>
<ul>
<li>Thermal expansion and contraction of wiring and metal mounts</li>
<li>Hear soft creaks or pops, especially in early morning as sun warms the system</li>
<li>This is normal as different materials heat at different rates</li>
<li>Dissipates within an hour of operation</li>
</ul>

<h2>Concerning Sounds That Require Attention</h2>

<p><strong>Loud clicking or crackling from the roof</strong></p>
<ul>
<li>If you hear rapid clicking, popping, or crackling sounds</li>
<li>Especially if sounds are loud enough to hear from inside the house</li>
<li>This could indicate arcing (electrical arcing) in the DC wiring</li>
<li>This is a serious fire and safety hazard</li>
<li><strong>Action:</strong> Turn off the DC disconnect immediately, do not restore power, contact your installer urgently</li>
</ul>

<p><strong>Loud buzzing (different from normal hum)</strong></p>
<ul>
<li>A loud, prominent buzzing sound coming from the inverter</li>
<li>Much louder than the normal gentle hum</li>
<li>Might be accompanied by smell or smoke</li>
<li>This indicates inverter overheating or internal faults</li>
<li><strong>Action:</strong> Turn off the AC disconnect and contact your installer; do not operate until inspected</li>
</ul>

<p><strong>Intermittent popping from inverter or electrical components</strong></p>
<ul>
<li>Occasional loud pops coming from the inverter or disconnect switches</li>
<li>This could indicate arcing inside the inverter or switch</li>
<li>This is abnormal and dangerous</li>
<li><strong>Action:</strong> Turn off the system, contact your installer; do not operate until repaired</li>
</ul>

<p><strong>High-pitched whining or squealing</strong></p>
<ul>
<li>A high-frequency whining sound from the inverter</li>
<li>This is different from the normal 60 Hz hum</li>
<li>Could indicate component failure or resonance in the inverter</li>
<li><strong>Action:</strong> Document the sound (video is helpful), contact your installer to diagnose</li>
</ul>

<p><strong>Rapid buzzing from power optimizers or microinverters</strong></p>
<ul>
<li>Devices buzzing rapidly (not the normal soft clicking)</li>
<li>Could indicate internal short or component failure</li>
<li>Usually accompanied by that device showing offline or very low output</li>
<li><strong>Action:</strong> Note which device is buzzing, contact your installer for replacement</li>
</ul>

<h2>Arcing: The Most Serious Sound</h2>
<p>Electrical arcing is the most dangerous sound you can hear from a solar system.</p>

<p><strong>What arcing sounds like:</strong></p>
<ul>
<li>Loud, rapid crackling or popping, like a small campfire</li>
<li>Very distinct from normal system sounds</li>
<li>Usually loud enough to hear from inside or from a distance</li>
<li>May be intermittent, worse on very sunny days</li>
</ul>

<p><strong>What causes arcing:</strong></p>
<ul>
<li>Loose connections in DC wiring or connectors</li>
<li>Corroded connectors that have developed poor contact</li>
<li>Damaged insulation allowing current to jump across gaps</li>
<li>Water damage or moisture in connectors</li>
</ul>

<p><strong>Why it's dangerous:</strong></p>
<ul>
<li>Arcing generates extreme heat (thousands of degrees)</li>
<li>This is a fire hazard and can ignite nearby materials</li>
<li>Continued arcing damages equipment and wiring further</li>
<li>Arcing faults are serious electrical safety hazards</li>
</ul>

<p><strong>What to do if you hear arcing:</strong></p>
<ul>
<li>Immediately turn off the DC disconnect switch</li>
<li>Do not touch any exposed wiring or equipment</li>
<li>Do not restore the system to operation until inspected</li>
<li>Contact your installer or a licensed electrician immediately</li>
<li>This is a safety emergency and should be treated as such</li>
<li>Get a professional inspection before operating again</li>
</ul>

<h2>When to Call Your Installer</h2>

<p><strong>Definitely contact your installer if you hear:</strong></p>
<ul>
<li>Loud, rapid crackling or popping (possible arcing)</li>
<li>Loud buzzing much louder than normal hum</li>
<li>High-pitched squealing or whining from inverter</li>
<li>Any sound accompanied by visible damage, burn marks, or smoke</li>
<li>Burning smells</li>
<li>Any sound that persists and doesn't match normal operation patterns</li>
</ul>

<p><strong>Document your observation:</strong></p>
<ul>
<li>When does the sound occur (time of day, weather conditions)?</li>
<li>How loud is it and where does it come from?</li>
<li>Is it constant or intermittent?</li>
<li>Video of the sound (with audio) is very helpful for diagnosis</li>
<li>Provide this information to your installer</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My inverter makes a humming sound in the afternoon. Is this normal?',
        answer: 'Yes, completely normal. A gentle 60 Hz hum from the inverter during peak production is expected. It\'s the sound of the power conversion process. If it\'s louder than a refrigerator hum or accompanied by other signs of distress, contact your installer. But a normal hum is nothing to worry about.'
      },
      {
        question: 'I hear a soft clicking from my roof panels. Should I be concerned?',
        answer: 'Probably not. Soft clicking from microinverters or thermal expansion of the mounting system is normal. If it\'s barely noticeable and not accompanied by other issues, it\'s fine. If it\'s loud and accompanied by visible damage or inverter errors, that\'s different—contact your installer.'
      },
      {
        question: 'My system is making a loud crackling sound. What should I do?',
        answer: 'Stop immediately. Turn off the DC disconnect switch and do not restore power. Loud crackling sounds indicate possible electrical arcing, which is a fire hazard. Contact your installer or a licensed electrician urgently. Do not operate the system until a professional has inspected and repaired it.'
      },
      {
        question: 'The inverter cooling fan is loud. Is my system overheating?',
        answer: 'Not necessarily. Inverter fans run when the device gets hot, which is normal on very sunny days or in hot climates. If the fan runs almost constantly and you see thermal shutdown warnings in your monitoring, the inverter might be overheating. Check ventilation around the inverter; it needs clear airflow.'
      }
    ]
  },
  {
    slug: 'solar-panel-hot-spots',
    title: 'Solar Panel Hot Spots: What They Are and Why They\'re Dangerous',
    excerpt: 'Thermal imaging revealed hot spots on your panels. Learn what causes them and when they\'re a safety issue.',
    category: 'Troubleshooting',
    date: '2025-12-15',
    readTime: '6 min',
    metaDescription: 'Solar panel hot spots detected? Learn diagnosis, safety implications, and solutions.',
    content: `<h2>Understanding Hot Spots in Solar Panels</h2>
<p>Hot spots are localized areas of a solar panel that become significantly hotter than the rest of the panel. They're usually only visible with thermal imaging cameras, but they indicate internal problems.</p>

<h2>What Causes Hot Spots</h2>

<p><strong>Cause 1: Shaded or Partially Shaded Cells</strong></p>
<p>When one part of a panel is shaded while the rest is sunny, it creates a hot spot.</p>
<ul>
<li>The shaded cells stop producing power but continue conducting electricity</li>
<li>Other cells in the string try to push current through the shaded cell</li>
<li>This creates resistance and heat buildup at the shaded cell</li>
<li>Temperature can exceed 100°C (212°F) in severe cases</li>
<li>This is called "reverse bias" condition</li>
</ul>

<p><strong>Cause 2: Cracked or Damaged Cells</strong></p>
<ul>
<li>Manufacturing defects or impact damage can crack solar cells</li>
<li>A cracked cell loses efficiency but still conducts power</li>
<li>This causes localized heating at the damage site</li>
<li>More common in cheaper panels with lower quality control</li>
</ul>

<p><strong>Cause 3: Delamination or Internal Degradation</strong></p>
<ul>
<li>The panel's internal layers separate or degrade</li>
<li>This causes poor electrical contact within the panel</li>
<li>Localized resistance creates heat spots</li>
<li>Often a manufacturing defect or installation damage</li>
</ul>

<p><strong>Cause 4: Solder Joint Failure</strong></p>
<ul>
<li>Solar cells are connected by solder joints</li>
<li>Poor solder work or age can cause joint failure</li>
<li>Weak connections create resistance and heat</li>
<li>More common in older or low-quality panels</li>
</ul>

<p><strong>Cause 5: Bypass Diode Issues</strong></p>
<ul>
<li>Each panel has bypass diodes that protect against reverse bias</li>
<li>A faulty diode can fail to protect, causing hot spot formation</li>
<li>The diode itself overheats when protecting the panel</li>
</ul>

<h2>How Serious Are Hot Spots?</h2>

<p><strong>Minor hot spots (small and rare):</strong></p>
<ul>
<li>Isolated small hot spots on one panel, especially from temporary shading</li>
<li>Panel still operates and produces power</li>
<li>Hot spot disappears when shade is removed</li>
<li>This is not necessarily a defect requiring action</li>
</ul>

<p><strong>Moderate hot spots (larger or persistent):</strong></p>
<ul>
<li>Hot spots covering significant area of the panel</li>
<li>Persist even when there's no obvious shading</li>
<li>Indicate internal panel damage or defect</li>
<li>Panel will degrade and fail faster than normal</li>
<li>Should be monitored and potentially replaced</li>
</ul>

<p><strong>Severe hot spots (large and critical):</strong></p>
<ul>
<li>Very hot spots (over 100°C difference from rest of panel)</li>
<li>Multiple hot spots on same or multiple panels</li>
<li>Accompanied by visible damage or discoloration</li>
<li>These are fire hazards and immediate safety issues</li>
<li>Panels should be replaced immediately</li>
</ul>

<h2>Fire Risk and Safety Implications</h2>

<p><strong>Hot spots can cause fires if:</strong></p>
<ul>
<li>Temperature becomes very high (150°C+)</li>
<li>Nearby materials are flammable (some roof materials, insulation)</li>
<li>Wiring is close to the hot spot and can overheat</li>
<li>Bypass diode failure creates sustained, uncontrolled heat</li>
</ul>

<p><strong>Actual fire risk from hot spots is low if:</strong></p>
<ul>
<li>Hot spots are minor and from temporary shading</li>
<li>System has modern arc fault protection and safety equipment</li>
<li>Wiring and installation meet current safety codes</li>
<li>Hot spots are identified and corrected</li>
</ul>

<h2>Diagnosing Hot Spots</h2>

<p><strong>Professional thermal imaging:</strong></p>
<ul>
<li>Thermal cameras can see temperature differences on panels</li>
<li>Professional inspection cost: $300-$800</li>
<li>They can identify which panels have hot spots and severity</li>
<li>Some installers offer this as part of maintenance services</li>
</ul>

<p><strong>Visual inspection:</strong></p>
<ul>
<li>Walk around your roof and look at panels from the ground</li>
<li>Use binoculars to look for visible discoloration or burn marks</li>
<li>Look for areas that are notably darker or lighter than surrounding panel</li>
<li>This is less precise than thermal imaging but cost-free</li>
</ul>

<p><strong>Production analysis:</strong></p>
<ul>
<li>If a panel has hot spots, it usually produces less power</li>
<li>Check your monitoring for unusually low-producing panels</li>
<li>A panel with significant hot spots might produce 20-30% less than similar panels</li>
<li>This is not diagnostic proof, but combined with thermal imaging confirms the issue</li>
</ul>

<h2>What to Do About Hot Spots</h2>

<p><strong>If hot spots are from temporary shading:</strong></p>
<ul>
<li>Trim trees or remove obstructions causing shade</li>
<li>No panel replacement needed; issue resolves with shade removal</li>
</ul>

<p><strong>If hot spots are from internal panel damage:</strong></p>
<ul>
<li>The panel is defective and should be replaced under warranty</li>
<li>Contact your installer with thermal imaging results</li>
<li>Manufacturer should cover replacement if within warranty period</li>
<li>If out of warranty, replacement cost is $350-$550 per panel</li>
</ul>

<p><strong>If hot spots are severe or a fire risk:</strong></p>
<ul>
<li>Stop operating the system immediately</li>
<li>Turn off the DC disconnect switch</li>
<li>Contact your installer urgently for inspection</li>
<li>Do not restore operation until problem is resolved</li>
<li>This is a safety hazard that requires immediate attention</li>
</ul>

<h2>Preventing Hot Spots</h2>

<p><strong>During installation:</strong></p>
<ul>
<li>Ensure quality panels from reputable manufacturers</li>
<li>Verify proper installation workmanship</li>
<li>Check that bypass diodes are functional</li>
<li>Proper grounding and protection design prevents diode failures</li>
</ul>

<p><strong>During operation:</strong></p>
<ul>
<li>Prevent shading from trees, buildings, or new structures</li>
<li>Keep panels clean; dirt buildup can create localized shading</li>
<li>Annual inspection for visible damage or discoloration</li>
<li>Professional thermal imaging every 3-5 years in warranty period</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarrow;</a></div>`}`,
    faqs: [
      {
        question: 'I had thermal imaging done and found hot spots on one panel. Is this a defect?',
        answer: 'Possibly. Check the thermal image: (1) Are hot spots from shading? If so, trim shade sources. (2) Are they from panel damage or internal defects? If yes, contact your installer. Panel defects should be covered under warranty. Get professional analysis before assuming it\'s a serious problem.'
      },
      {
        question: 'Do hot spots on solar panels indicate a fire hazard?',
        answer: 'Most hot spots from shading are not a fire hazard. Internal defects creating severe hot spots are more concerning. Your system has built-in protections (bypass diodes, arc fault detection) to prevent fires. However, severe or persistent hot spots should be inspected professionally. They indicate a panel that will degrade faster than normal.'
      },
      {
        question: 'How much do thermal imaging inspections cost?',
        answer: 'Professional solar thermal imaging: typically $300-$800 depending on system size and detail of report. Some installers include it in maintenance services. It\'s a worthwhile one-time investment if you have concerns about panel condition. Some extended warranties include periodic thermal inspections.'
      },
      {
        question: 'If a panel has hot spots, will my warranty cover replacement?',
        answer: 'Yes, if hot spots result from manufacturing defects or installation issues. Your performance warranty guarantees the panel will maintain its rated output. A panel with damaging hot spots is not meeting this guarantee. Provide your thermal imaging to your installer to file a warranty claim with the manufacturer.'
      }
    ]
  },
  {
    slug: 'solar-system-tripping-breaker',
    title: 'Solar System Tripping Breaker: Overcurrent, Ground Faults, and Arc Faults',
    excerpt: 'Your solar breaker keeps tripping. Learn the causes and when it\'s a safety issue vs a configuration problem.',
    category: 'Troubleshooting',
    date: '2026-01-01',
    readTime: '7 min',
    metaDescription: 'Solar system breaker tripping? Diagnose overcurrent, ground faults, and arc faults.',
    content: `<h2>Understanding Breaker Trips</h2>
<p>Breakers are safety devices. When your solar breaker trips, it's because the system detected a fault condition. Understanding which type helps you know if it's a configuration issue or a serious safety problem.</p>

<h2>Type 1: Overcurrent/Overload Trip</h2>
<p>This is the most common type of breaker trip for solar systems.</p>

<p><strong>What it means:</strong></p>
<ul>
<li>The current flowing through the breaker exceeded its rating</li>
<li>A 30A breaker trips when more than 30A flows through it</li>
<li>This is a protective action; the breaker is working as designed</li>
</ul>

<p><strong>Common causes:</strong></p>
<ul>
<li>System oversized for the breaker: more panels than the breaker can handle</li>
<li>Installation error: wrong breaker selected for the system size</li>
<li>Damaged wiring reducing resistance, increasing current beyond normal</li>
<li>Inverter failure causing high current draw</li>
</ul>

<p><strong>Is it an emergency?</strong></p>
<ul>
<li>Not immediately dangerous, but the system can't operate with a constant breaker trip</li>
<li>Breaker tripping is the system protecting itself</li>
<li>You need to correct the problem, not just reset the breaker repeatedly</li>
</ul>

<p><strong>How to fix:</strong></p>
<ul>
<li>Contact your installer. The breaker size might need to be increased</li>
<li>Or the system size might need to be reduced (less likely)</li>
<li>The wiring might need to be checked for damage or undersizing</li>
<li>The inverter might need to be inspected for faults</li>
<li>This is not a DIY fix; it requires licensed electrical work</li>
</ul>

<h2>Type 2: Arc Fault Detection Device (AFDD) Trip</h2>
<p>Many modern solar systems include arc fault detection. These are extremely sensitive safety devices.</p>

<p><strong>What it means:</strong></p>
<ul>
<li>The AFDD detected unintended electrical arcing in the DC wiring</li>
<li>This is a serious fire hazard and the device correctly tripped</li>
<li>The problem is a real electrical fault, not an overload</li>
</ul>

<p><strong>Common causes:</strong></p>
<ul>
<li>Loose connectors developing intermittent contact</li>
<li>Damaged wiring insulation allowing arcing</li>
<li>Corroded connections from moisture or age</li>
<li>Poor installation with improper crimping or connections</li>
</ul>

<p><strong>Is it an emergency?</strong></p>
<ul>
<li>Yes. Arc faults are fire hazards</li>
<li>Do not continuously reset the breaker trying to get the system running</li>
<li>This will not solve the problem and poses a fire risk</li>
</ul>

<p><strong>What to do:</strong></p>
<ul>
<li>Turn off the DC disconnect and do not restore power</li>
<li>Contact your installer or a licensed solar electrician immediately</li>
<li>Do not operate the system until the arc fault is diagnosed and repaired</li>
<li>Have a professional inspect the DC wiring and all connections</li>
<li>This is a warranty issue if recent; may be correctable without part replacement</li>
</ul>

<h2>Type 3: Ground Fault Trip</h2>
<p>Ground faults occur when current flows unintentionally to ground.</p>

<p><strong>What it means:</strong></p>
<ul>
<li>Current is leaking to ground somewhere in the system</li>
<li>A ground fault protection device detected this and tripped</li>
<li>This is a safety feature protecting against electrical hazards</li>
</ul>

<p><strong>Common causes:</strong></p>
<ul>
<li>Water infiltration in connectors or wiring allowing current to flow to ground</li>
<li>Damaged insulation on DC cables</li>
<li>Corrosion of connectors allowing leakage</li>
<li>Lightning strike or power surge damage</li>
<li>Manufacturing defect in panels or wiring</li>
</ul>

<p><strong>Is it an emergency?</strong></p>
<ul>
<li>Yes. Ground faults are electrocution and fire hazards</li>
<li>Do not try to reset and continue operating</li>
<li>The fault is still present and dangerous</li>
</ul>

<p><strong>What to do:</strong></p>
<ul>
<li>Turn off the DC disconnect immediately</li>
<li>Contact your installer urgently for inspection</li>
<li>Do not restore the system until the fault is identified and repaired</li>
<li>Professional service is required; this is not a DIY fix</li>
<li>Likely causes: moisture damage, corroded connectors, or manufacturing defect</li>
</ul>

<h2>Troubleshooting Steps for Breaker Trips</h2>

<p><strong>Step 1: Determine the breaker type</strong></p>
<ul>
<li>Look at your electrical panel and find the solar breaker</li>
<li>Is it a standard breaker or a special combination AFDD breaker?</li>
<li>Combination breakers are labeled as "AFDD" or "arc fault protection"</li>
<li>Check your installer paperwork for breaker specifications</li>
</ul>

<p><strong>Step 2: Check the system status</strong></p>
<ul>
<li>Is your inverter showing error codes or fault indicators?</li>
<li>Check your monitoring app: is there system output or errors?</li>
<li>Look at the AC and DC disconnect switches: are they in the ON position?</li>
</ul>

<p><strong>Step 3: Document the trip pattern</strong></p>
<ul>
<li>Does it trip immediately when you reset it?</li>
<li>Does it trip only under certain conditions (full sun, high wind)?</li>
<li>Does it trip immediately at startup or after a period of operation?</li>
<li>Is this the first trip or a recurring problem?</li>
<li>This information helps your installer diagnose the issue</li>
</ul>

<p><strong>Step 4: Try one reset only</strong></p>
<ul>
<li>If the breaker tripped, reset it once and observe</li>
<li>If it trips again immediately, do NOT keep resetting it</li>
<li>Stop and contact your installer</li>
<li>Repeated attempts to bypass the breaker are dangerous and ineffective</li>
</ul>

<h2>When to Call a Professional</h2>

<p><strong>Call immediately if:</strong></p>
<ul>
<li>AFDD or ground fault breaker is tripping repeatedly</li>
<li>Breaker trips even after you reset it once</li>
<li>You smell burning or see smoke</li>
<li>You hear crackling sounds from the roof or electrical panel</li>
<li>Any combination of breaker trip with other error codes</li>
</ul>

<p><strong>Contact your installer for diagnosis if:</strong></p>
<ul>
<li>Standard breaker trips occasionally but system otherwise works</li>
<li>Breaker only trips under very high production conditions</li>
<li>Trip pattern seems related to specific weather conditions</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My solar breaker trips immediately when I reset it. Is my system broken?',
        answer: 'Not necessarily broken, but there\'s a fault present. Don\'t keep resetting it—this can be dangerous. The fault will prevent operation anyway. Contact your installer with these details: (1) Did it ever work?, (2) When did the trip start?, (3) What type of breaker is it (standard or arc fault)?. Professional diagnosis is needed.'
      },
      {
        question: 'Is it safe to tape down a solar breaker to keep it from tripping?',
        answer: 'No, absolutely not. The breaker is a safety device. Disabling it defeats the purpose. If the breaker trips, there\'s a legitimate fault. Forcing it to stay on creates a fire or electrocution hazard. Address the underlying problem instead of bypassing the safety device.'
      },
      {
        question: 'My breaker trips on very sunny days when production is high. Is this normal?',
        answer: 'Not normal. It might indicate the breaker is undersized for the system. Check if your breaker size matches your system size (ask your installer). Or there might be a fault condition triggered by high current. Either way, contact your installer. Routine trips under normal operation indicate a configuration or fault problem.'
      },
      {
        question: 'What\'s the difference between an arc fault trip and a ground fault trip?',
        answer: 'Arc faults detect unintended arcing in wiring (fire hazard). Ground faults detect current leaking to ground (electrocution hazard). Both are serious. Both require professional repair before operating the system again. If unsure which type of breaker tripped, contact your installer with your breaker specifications.'
      }
    ]
  },
  {
    slug: 'solar-panels-tree-shading',
    title: 'Solar Panels and Tree Shading: Assessing Impact and Solutions',
    excerpt: 'Trees shade your solar panels. Learn how much shading is acceptable and when trimming is worth it.',
    category: 'Troubleshooting',
    date: '2026-01-15',
    readTime: '7 min',
    metaDescription: 'Tree shading reducing solar output? Learn impact assessment and removal solutions.',
    content: `<h2>Understanding Shading Impact</h2>
<p>Tree shading is the second most common cause of solar underproduction. Knowing how much shading is affecting your system helps you decide if trimming or removal is worthwhile.</p>

<h2>How Much Do Trees Actually Shade Your System?</h2>

<p><strong>Measuring visible shading:</strong></p>
<ul>
<li>Stand at various positions and look at your roof at different times of day</li>
<li>Mark where shadows fall on panels using photos taken at the same time each day</li>
<li>Morning shadows (5-8 AM) have little impact since production is low anyway</li>
<li>Midday shadows (10 AM - 3 PM) have the greatest impact on production</li>
<li>Afternoon shadows (4-6 PM) have moderate impact</li>
</ul>

<p><strong>Calculating production impact:</strong></p>
<ul>
<li>10-20% of panel area shaded: approximately 5-15% production loss</li>
<li>20-40% of panel area shaded: approximately 15-40% production loss</li>
<li>Over 50% of panel area shaded: 50%+ production loss</li>
<li>Note: impact is not linear because string inverters can be limited by the worst-performing panel</li>
</ul>

<h2>Shading Assessment Techniques</h2>

<p><strong>Satellite imagery method:</strong></p>
<ul>
<li>Use Google Earth to view your roof from above</li>
<li>Look at historical imagery (go back 1-3 years)</li>
<li>Compare how vegetation has changed</li>
<li>This shows tree growth over time clearly</li>
</ul>

<p><strong>Professional shading analysis:</strong></p>
<ul>
<li>Solar installers use specialized software to model shading</li>
<li>They can predict production hour-by-hour accounting for shading</li>
<li>Cost: typically included in initial design assessment</li>
<li>Cost for retrofit analysis: $200-$500</li>
</ul>

<p><strong>Before and after monitoring comparison:</strong></p>
<ul>
<li>If trees were trimmed or removed, compare production before and after</li>
<li>Same month, year-over-year: this eliminates weather variability</li>
<li>Measure production gain and compare to trimming cost for ROI</li>
</ul>

<h2>Assessing Whether Trimming Is Worth It</h2>

<p><strong>Tree trimming is worth it if:</strong></p>
<ul>
<li>Shading causes 15%+ production loss</li>
<li>Tree trimming cost is less than 2 years of regained production value</li>
<li>Example: 15% production loss on 10 kW system = 1.5 kW lost = 6-8 kWh daily = $60-$100 monthly. Trimming cost of $1,500 pays for itself in 15 months</li>
</ul>

<p><strong>Tree removal is worth it if:</strong></p>
<ul>
<li>Shading causes 25%+ production loss</li>
<li>Tree is diseased or dying anyway</li>
<li>Removal cost is less than 3 years of regained production value</li>
<li>You're willing to accept loss of shade benefit for long-term solar benefit</li>
</ul>

<p><strong>Tree trimming might not be worth it if:</strong></p>
<ul>
<li>Shading is less than 10% of production</li>
<li>Trimming cost exceeds 3 years of production gain value</li>
<li>Trees provide other valuable benefits (shade, privacy, wildlife)</li>
<li>Trimming would substantially change the aesthetics of your landscape</li>
</ul>

<h2>Cost and Process of Tree Trimming</h2>

<p><strong>Professional tree trimming cost:</strong></p>
<ul>
<li>Small trees or limb removal: $300-$800</li>
<li>Medium trees, significant trimming: $800-$1,500</li>
<li>Large trees or removal: $1,500-$5,000+</li>
<li>Cost varies by tree size, health, location, and accessibility</li>
<li>Get multiple quotes before deciding</li>
</ul>

<p><strong>Tree removal cost:</strong></p>
<ul>
<li>Small trees: $400-$1,000</li>
<li>Medium trees: $1,000-$3,000</li>
<li>Large trees: $3,000-$8,000+</li>
<li>Stump removal: additional $200-$500</li>
<li>Disposal or chipping: sometimes included, sometimes additional</li>
</ul>

<p><strong>Process:</strong></p>
<ul>
<li>Get 2-3 quotes from certified arborists</li>
<li>Discuss your solar needs; specify that trimming is for solar panels</li>
<li>Ask about timing (some trees have better trimming seasons)</li>
<li>Verify they're insured and bonded</li>
<li>Compare costs and recommendations before choosing</li>
</ul>

<h2>Preventative Measures</h2>

<p><strong>Ongoing management:</strong></p>
<ul>
<li>Plan for periodic tree trimming every 3-5 years</li>
<li>Monitor tree growth and adjust as needed</li>
<li>Maintain sight lines to the south (where the sun is in Northern Hemisphere)</li>
<li>Consider tree species' mature size when planting new trees</li>
</ul>

<p><strong>If planting near solar panels:</strong></p>
<ul>
<li>Choose trees with limited height and spread</li>
<li>Consider the tree's mature size, not its current size</li>
<li>Plant to the north of panels to avoid future shading</li>
<li>Avoid fast-growing trees that will require frequent trimming</li>
</ul>

<h2>Alternative Solutions to Trimming</h2>

<p><strong>Power optimizers or microinverters:</strong></p>
<ul>
<li>If you have string inverters, individual panel optimization reduces shading impact</li>
<li>Cost: $3,000-$8,000 for retrofit</li>
<li>Benefit: each panel can perform independently of others</li>
<li>Shading of one panel doesn't drag down others' output as much</li>
</ul>

<p><strong>Add battery storage:</strong></p>
<ul>
<li>Not a solution to shading, but to its effects</li>
<li>Capture daytime production and use more during peak hours</li>
<li>Doesn't restore lost production but might change your consumption patterns</li>
</ul>

<p><strong>Expand the system:</strong></p>
<ul>
<li>Add more panels to offset shading losses</li>
<li>If feasible on unshaded areas of roof</li>
<li>Cost-effective if roof space is available</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'How much shading is too much before it\'s worth trimming a tree?',
        answer: 'If shading reduces production by more than 15%, trimming is usually worth it. Example: 15% loss on a 10 kW system is about $100/month in lost credits. Professional trimming costs $500-$1,500, so it pays for itself in 5-15 months. Anything less than 10% loss probably doesn\'t justify the cost.'
      },
      {
        question: 'Can I trim the tree myself or should I hire a professional?',
        answer: 'Hire a professional certified arborist. Tree work near your roof is dangerous—fall risks and potential damage to panels/house. Professionals are insured and know how to trim safely. Cost ($500-$1,500) is worth the safety and proper technique. Never climb on or near the roof yourself.'
      },
      {
        question: 'My system was designed accounting for a tree. Should I keep the tree or trim it?',
        answer: 'Your installer already factored the tree into your system design. Trimming would increase production beyond design expectations but isn\'t required for the system to work as intended. If you want increased production, trim it. If you value the tree\'s benefits, keep it. Both are correct choices.'
      },
      {
        question: 'If I remove a tree, how long until I see production gains?',
        answer: 'Production gains are immediate—you should see increased output on the next sunny day after removal. Compare same-month production this year vs last year (controlling for weather). You should see the full benefit after about a month (accounting for seasonal variations).'
      }
    ]
  },
  {
    slug: 'solar-system-net-metering-explained',
    title: 'Solar Net Metering Explained: Credits, TOU Rates, and How It Affects Your Bill',
    excerpt: 'Net metering is how your utility credits solar exports. Understand the process to maximize your savings.',
    category: 'Solar Basics',
    date: '2026-02-01',
    readTime: '7 min',
    metaDescription: 'How does net metering work? Learn about solar credits, TOU rates, and bill impact.',
    content: `<h2>Understanding Net Metering Basics</h2>
<p>Net metering is the program that allows solar owners to earn credits for excess energy. Understanding how it works helps you maximize savings and make better solar decisions.</p>

<h2>How Net Metering Works</h2>

<p><strong>The flow of electricity:</strong></p>
<ul>
<li>When your panels produce more power than you use (typically 10 AM - 3 PM), excess flows back to the grid</li>
<li>Your meter spins backward (net metering) or the utility records an export</li>
<li>You earn a credit for that energy at the "net metering rate"</li>
<li>Later (at night or cloudy times), you draw power and use those credits</li>
<li>Monthly settlement: if you exported more than imported, you earn money; if you imported more, you owe</li>
</ul>

<p><strong>The meter's role:</strong></p>
<ul>
<li>Net metering requires a special "net meter" that can spin both directions</li>
<li>Your utility installs this at no cost when you interconnect</li>
<li>The meter records both direction and amount of electricity flow</li>
<li>Billing is based on net flow: exports minus imports</li>
</ul>

<h2>Types of Net Metering Programs</h2>

<p><strong>1:1 Net Metering (True Net Metering)</strong></p>
<ul>
<li>Export credits valued at full retail rate: $0.15-$0.25 per kWh</li>
<li>This is the most favorable to solar owners</li>
<li>Only available in some states and regions</li>
<li>Example: you export 10 kWh at $0.20/kWh = $2.00 credit</li>
</ul>

<p><strong>Net Billing (Reduced Export Rate)</strong></p>
<ul>
<li>Exports credited at a lower rate than retail, often wholesale: $0.05-$0.12 per kWh</li>
<li>Much less favorable than 1:1 net metering</li>
<li>Increasingly common as solar penetration increases</li>
<li>Example: you export 10 kWh at $0.08/kWh = $0.80 credit (very low)</li>
</ul>

<p><strong>Net Metering Plus (Net Metering with Tiered Benefits)</strong></p>
<ul>
<li>Hybrid approach with some features of both above</li>
<li>May credit at 1:1 rate but with monthly or annual caps</li>
<li>Or credits at varying rates depending on time of year or demand</li>
<li>Structure varies by utility</li>
</ul>

<h2>Time-of-Use (TOU) Rates and Their Impact</h2>

<p><strong>What are TOU rates?</strong></p>
<p>Instead of paying a flat rate for electricity, TOU rates vary by time of day:</p>
<ul>
<li><strong>Off-peak hours (9 PM - 6 AM, typically):</strong> Cheapest rate, maybe $0.10/kWh</li>
<li><strong>Mid-peak hours (6 AM - 3 PM, 9 PM - 9 PM, typically):</strong> Medium rate, maybe $0.18/kWh</li>
<li><strong>Peak hours (3 PM - 9 PM, typically):</strong> Most expensive rate, maybe $0.30/kWh</li>
</ul>

<p><strong>Why utilities use TOU rates:</strong></p>
<ul>
<li>To encourage consumption during low-demand hours</li>
<li>To discourage consumption during peak hours (helps them avoid building more power plants)</li>
<li>The most expensive power is during peak hours when demand is highest</li>
</ul>

<p><strong>How TOU rates hurt solar owners (on traditional net metering):</strong></p>
<ul>
<li>Solar peaks at 1-2 PM (mid-peak rate zone)</li>
<li>You export power worth $0.18/kWh (mid-peak rate)</li>
<li>You use most power at 6-9 PM (peak rate zone)</li>
<li>You import power worth $0.30/kWh (peak rate)</li>
<li>Net effect: you earn $0.18 per export kWh but pay $0.30 per import kWh</li>
<li>This is worse than a flat-rate scenario</li>
</ul>

<p><strong>Example TOU impact:</strong></p>
<ul>
<li>Export 20 kWh at mid-peak rate ($0.18) = $3.60 credit</li>
<li>Import 15 kWh at peak rate ($0.30) = $4.50 cost</li>
<li>Net: -$0.90 (you owe money despite producing more than consuming)</li>
<li>With flat rates, you'd have earned: 20 × $0.24 - 15 × $0.24 = $1.20 credit</li>
<li>TOU rates cost this solar owner $2.10 more</li>
</ul>

<h2>Solar + TOU Rate Strategies</h2>

<p><strong>Option 1: Shift Your Consumption</strong></p>
<ul>
<li>Use major appliances during peak solar production (1-2 PM)</li>
<li>Run dishwasher, laundry, and water heater during midday</li>
<li>Charge batteries or electric car during the day if you have them</li>
<li>This increases mid-peak usage, matching solar production</li>
<li>Limitation: you can only shift so much consumption</li>
</ul>

<p><strong>Option 2: Add Battery Storage</strong></p>
<ul>
<li>Battery stores solar from peak production hours (1-2 PM, mid-peak rate)</li>
<li>Use battery power during evening peak hours instead of grid power</li>
<li>Shifts exports to peak-rate hours when using battery-stored power</li>
<li>This dramatically improves economics with TOU rates</li>
<li>Cost: $10,000-$20,000, but ROI is strong with TOU rates</li>
</ul>

<p><strong>Option 3: Opt Out of TOU Rates (If Available)</strong></p>
<ul>
<li>Some utilities allow customers to stay on flat rates</li>
<li>Contact your utility to ask about opting out</li>
<li>Not all utilities allow this; increasingly rare</li>
<li>Might be worth it if you're on an unfavorable TOU plan</li>
</ul>

<p><strong>Option 4: Expand System Size</strong></p>
<ul>
<li>A larger system produces even more during midday</li>
<li>More exports at mid-peak rates</li>
<li>This doesn't fix the TOU mismatch but increases overall production</li>
<li>Cost-benefit depends on your specific situation</li>
</ul>

<h2>Monthly and Annual Net Metering Settlements</h2>

<p><strong>Monthly settlement (most common):</strong></p>
<ul>
<li>Each month, utility calculates: total imports minus total exports</li>
<li>If exports > imports: you have a credit (no payment, credit rolls to next month)</li>
<li>If imports > exports: you owe the difference</li>
<li>Fixed charges still apply (usually $10-$30/month minimum)</li>
<li>Unused credits typically roll to next month (or reset annually)</li>
</ul>

<p><strong>Annual settlement:</strong></p>
<ul>
<li>Some utilities only settle annually (end of 12-month billing period)</li>
<li>You earn credits throughout the year, settle once annually</li>
<li>This is usually better for solar owners (credits don't expire as easily)</li>
<li>If you've overproduced, you get paid back or credited</li>
<li>Ask your utility about their settlement policy</li>
</ul>

<p><strong>Unused credit policies:</strong></p>
<ul>
<li>Some utilities: unused credits expire monthly (worst for solar owners)</li>
<li>Some utilities: credits roll for 12 months, then reset</li>
<li>Some utilities: carry forward indefinitely (best for solar owners)</li>
<li>Check your utility's specific policy in your service agreement</li>
</ul>

<h2>Questions to Ask Your Utility</h2>

<ul>
<li>Does my utility offer true net metering (1:1 rate) or net billing (reduced rate)?</li>
<li>If net billing, what is the export credit rate?</li>
<li>Am I on TOU rates? Can I see the rate schedule?</li>
<li>Can I opt out of TOU rates?</li>
<li>What is the net metering settlement period (monthly or annual)?</li>
<li>What happens to unused credits at month/year end?</li>
<li>Are there any fees associated with net metering service?</li>
<li>Has the net metering policy changed recently, or are changes planned?</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarrow;</a></div>`}`,
    faqs: [
      {
        question: 'Does my utility have to credit my solar exports at the retail rate?',
        answer: 'No. This varies by state and utility. Some offer true net metering (retail rate), while others offer net billing (wholesale rate). Some are moving toward time-based credits. Check your utility\'s net metering policy and rate schedule. If unfavorable, explore whether opting out or adding batteries is worthwhile.'
      },
      {
        question: 'If I have unused solar credits at the end of the month, what happens?',
        answer: 'It depends on your utility. Some utilities: credits expire monthly (you lose them). Others: credits roll 12 months then reset. Best case: credits carry indefinitely. Check your service agreement or call your utility to find out. Some solar owners deliberately oversize systems to earn excess credits.'
      },
      {
        question: 'How do TOU rates affect my solar savings?',
        answer: 'TOU rates can significantly reduce savings compared to flat rates. You export at mid-peak rates but import at peak rates, creating a mismatch. With batteries, you can shift exports to peak hours, improving economics. Without batteries, savings might be 30-50% lower on TOU vs flat rates. Calculate both scenarios before deciding.'
      },
      {
        question: 'Can I negotiate better net metering rates with my utility?',
        answer: 'Individual negotiation is unlikely. However, community advocacy and regulatory proceedings can influence utility policy. Some states have customer advocate offices that represent residential interests. Contact your state\'s Public Utilities Commission if you believe rates are unfair. Organized solar owner groups sometimes push for better terms.'
      }
    ]
  },
  {
    slug: 'how-to-read-solar-monitoring-app',
    title: 'How to Read Your Solar Monitoring App: A Beginner\'s Guide',
    excerpt: 'Your monitoring app shows confusing numbers and graphs. Learn what each metric means and what to watch for.',
    category: 'Solar Basics',
    date: '2026-02-08',
    readTime: '6 min',
    metaDescription: 'Understand your solar monitoring app. Learn what the numbers mean and when to worry.',
    content: `<h2>Understanding the Dashboard</h2>
<p>Solar monitoring apps display a lot of information. Most of it is for interest; some is critical to understand. Let's break down what you're actually looking at.</p>

<h2>The Basic Metrics</h2>

<p><strong>Current Power Output (measured in Watts or kW)</strong></p>
<ul>
<li>This is how much power your system is producing right now</li>
<li>Changes throughout the day: near zero at sunrise/sunset, peaks at midday</li>
<li>Sunny day: 8 kW system should produce 6-8 kW at peak</li>
<li>Cloudy day: same system might produce 0.5-2 kW</li>
<li>This metric is informational; fluctuations are normal</li>
</ul>

<p><strong>Daily Energy Production (measured in kilowatt-hours or kWh)</strong></p>
<ul>
<li>Total energy produced today, from sunrise to current time</li>
<li>Increases throughout the day</li>
<li>Shows how much solar "work" was done today</li>
<li>A 10 kW system on a sunny day: 40-50 kWh</li>
<li>Same system on a cloudy day: 10-20 kWh</li>
<li>This is useful for tracking daily production and weather variations</li>
</ul>

<p><strong>Monthly/Annual Energy Production</strong></p>
<ul>
<li>Cumulative energy for the month or year</li>
<li>Most important metric for tracking overall system performance</li>
<li>Compare month-to-month or year-to-year to identify problems</li>
<li>Should align with your installer's expected production estimates</li>
<li>If significantly lower, something needs investigation</li>
</ul>

<p><strong>System Status</strong></p>
<ul>
<li>"Operating", "Offline", "Standby", or specific error codes</li>
<li>"Operating" = system is working normally and producing power</li>
<li>"Offline" = system is not communicating or producing</li>
<li>"Standby" = system is ready but not producing (common at night or during low light)</li>
<li>Error codes require investigation (see below)</li>
</ul>

<h2>Understanding System Health Indicators</h2>

<p><strong>Temperature Readings</strong></p>
<ul>
<li>Shows inverter temperature (usually 40-80°C during operation)</li>
<li>High temperature (above 120°F) indicates potential cooling issues</li>
<li>Normal for inverters to be warmer on hot, sunny days</li>
<li>Persistent high temperatures might indicate poor ventilation</li>
</ul>

<p><strong>Voltage and Frequency</strong></p>
<ul>
<li>These are grid utility metrics your system must match</li>
<li>Normal range: 118-122V (±3% standard, ±6% extreme)</li>
<li>Frequency: exactly 60 Hz (in North America)</li>
<li>If voltage or frequency are out of range, the system might shut down</li>
<li>This usually indicates utility grid issues, not your system</li>
</ul>

<p><strong>Power Factor</strong></p>
<ul>
<li>Measure of how efficiently your system uses electricity (0.0 to 1.0)</li>
<li>1.0 is perfect; most solar systems aim for 0.95+</li>
<li>You rarely need to understand this—it's automatic</li>
<li>Modern inverters optimize power factor automatically</li>
</ul>

<h2>Investigating Error Codes and Warnings</h2>

<p><strong>Common error codes by manufacturer:</strong></p>
<ul>
<li><strong>Enphase:</strong> Error codes starting with E (E001, E002, etc.)</li>
<li><strong>SolarEdge:</strong> Codes like GFDI_B, Grid_Loss, or Temperature_High</li>
<li><strong>String inverters:</strong> Manufacturer-specific codes displayed on the inverter LCD</li>
</ul>

<p><strong>How to investigate an error code:</strong></p>
<ul>
<li>Write down the exact error code (don't paraphrase)</li>
<li>Search [manufacturer name] + [error code] on Google</li>
<li>Check the manufacturer's troubleshooting documentation</li>
<li>Some errors are temporary (restart the system)</li>
<li>Some errors require professional service</li>
<li>Contact your installer if you can't resolve it in 24 hours</li>
</ul>

<p><strong>Codes requiring immediate attention:</strong></p>
<ul>
<li>Ground fault or isolation fault: stop operating, contact installer</li>
<li>Arc fault: stop operating immediately, fire hazard</li>
<li>Inverter over-temperature: ensure ventilation, check shading of inverter</li>
<li>Grid loss: utility issue, not your problem (your system is working correctly to disconnect)</li>
</ul>

<h2>Individual Panel/Inverter Performance (Advanced View)</h2>

<p><strong>If your app shows individual device status:</strong></p>
<ul>
<li>Each microinverter (Enphase) or power optimizer (SolarEdge) should show similar output</li>
<li>On a sunny day, panels should produce within 10-15% of each other</li>
<li>A device producing 20%+ less than similar units is likely failing</li>
<li>A device showing "offline" status is not producing anything</li>
<li>Screenshot the data and contact your installer with details</li>
</ul>

<h2>Reading Graphs and Trends</h2>

<p><strong>Daily production graph:</strong></p>
<ul>
<li>Should show a gentle bell curve: low in morning, peak at midday, decreasing toward sunset</li>
<li>Spikes or sudden drops indicate shading or clouds passing</li>
<li>Flat baseline (not reaching zero at night) is normal; inverter still consuming small amounts</li>
<li>Completely flat line during day = system offline</li>
</ul>

<p><strong>Monthly production bar chart:</strong></p>
<ul>
<li>Compare bars month-to-month and year-to-year</li>
<li>Winter months are lower; summer months are higher</li>
<li>Extreme variations (winter month producing half the summer) might indicate a problem</li>
<li>Consistent month-to-month stability is healthy</li>
</ul>

<p><strong>Comparing to expected production:</strong></p>
<ul>
<li>Pull up your installer's design document showing "expected annual production"</li>
<li>Divide annual expectation by 12 to get monthly average</li>
<li>Compare your actual to expected</li>
<li>If actual is 10%+ below expected consistently, investigate</li>
</ul>

<h2>When Not to Worry</h2>

<p><strong>These are completely normal:</strong></p>
<ul>
<li>No production at night (system can only produce during sunlight)</li>
<li>Low production on cloudy days (expected and normal)</li>
<li>Production spikes and dips during partly-cloudy days (clouds moving)</li>
<li>Lower production in winter (fewer daylight hours)</li>
<li>System in "standby" in early morning before sun is bright enough (wait 15-30 minutes)</li>
<li>Small day-to-day variations in production (clouds, angle changes, etc.)</li>
</ul>

<p><strong>These might warrant investigation:</strong></p>
<ul>
<li>Multiple days of zero production when it's clearly sunny</li>
<li>Monthly production 15%+ below historical average</li>
<li>Persistent offline status for a device</li>
<li>Error codes that don't clear after a system restart</li>
<li>Inverter temperature consistently above 130°F</li>
</ul>

${`<div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg"><p class="text-green-800 font-medium mb-2">SolarDoctor monitors your system 24/7 and alerts you when something needs attention.</p><a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a></div>`}`,
    faqs: [
      {
        question: 'My monitoring app shows current power output of 0W on a sunny day. Should I worry?',
        answer: 'Check: (1) Is it early morning (before 8 AM)? Inverters need 20-30 minutes of bright light to start. (2) Is the system actually offline or in standby? Wait 30 minutes. (3) Is it actually sunny or is there cloud cover? If still zero after 30 minutes on a clearly sunny day, contact your installer.'
      },
      {
        question: 'How much should my system produce on an average sunny day?',
        answer: 'Multiply your system size in kW by 4-6 (peak sun hours varies by location). A 10 kW system in an average location should produce 40-60 kWh on a sunny day. In very sunny locations (Arizona): 50-70 kWh. In cloudier locations (Pacific Northwest): 30-40 kWh. Check your installer\'s design for location-specific estimates.'
      },
      {
        question: 'I see an error code in my monitoring app. Do I need to call my installer?',
        answer: 'Not always. First, try restarting the system: turn off AC disconnect, wait 10 minutes, turn it back on. Wait another 10 minutes for the system to fully restart. If the error clears, it was likely a temporary glitch. If it persists, write down the exact code and contact your installer with this information.'
      },
      {
        question: 'My production dropped from 50 kWh/day to 35 kWh/day. What\'s wrong?',
        answer: 'Compare month-to-month to rule out seasonal changes. Summer = 50 kWh, winter = 35 kWh is normal. Same seasons = a problem. Check: (1) Clouds or weather changes, (2) New shading (tree growth), (3) Dirty panels, (4) Equipment offline in your app. If you can\'t find the cause, contact your installer for diagnosis.'
      }
    ]
  },
  {
    slug: 'solar-panel-cleaning-guide',
    title: 'Solar Panel Cleaning Guide: When, How, and DIY vs Professional',
    excerpt: 'Dirty panels reduce production. Learn when cleaning is worth it and the right way to do it.',
    category: 'Solar Basics',
    date: '2026-02-15',
    readTime: '6 min',
    metaDescription: 'When should you clean solar panels? Learn DIY methods and professional cleaning cost.',
    content: `<h2>How Dirt Affects Solar Production</h2>
<p>Dust, dirt, and debris on solar panels reduce how much light reaches the cells, directly reducing energy production. Understanding when to clean helps you maximize return on investment.</p>

<h2>How Much Do Dirty Panels Reduce Production?</h2>

<p><strong>Light dust accumulation:</strong></p>
<ul>
<li>Thin dust layer: 2-5% production loss</li>
<li>Common in most climates after 2-4 weeks without rain</li>
<li>Rain naturally cleans panels, so production recovers after storms</li>
</ul>

<p><strong>Heavy dust or pollen accumulation:</strong></p>
<ul>
<li>Heavy dust or pollen: 5-15% production loss</li>
<li>Common in agricultural areas, deserts, or areas with high pollen</li>
<li>Bird droppings, tree sap, or leaves: localized significant losses</li>
</ul>

<p><strong>Extreme dirt (industrial fallout, mud, snow residue):</strong></p>
<ul>
<li>Can reduce production by 20-50% or more</li>
<li>Requires cleaning to restore performance</li>
</ul>

<h2>When Is Cleaning Worth It?</h2>

<p><strong>Clean if production loss exceeds 10%:</strong></p>
<ul>
<li>Monitor your system for 2-3 weeks without rain</li>
<li>Look at your daily production trend</li>
<li>If you notice significant decline, cleaning is probably worthwhile</li>
<li>Professional cleaning cost of $150-$300 is recovered in 2-4 months if loss is 10%+</li>
</ul>

<p><strong>Consider cleaning if:</strong></p>
<ul>
<li>You live in a dusty, desert, or agricultural area</li>
<li>You have bird nesting nearby creating droppings on panels</li>
<li>Trees nearby drop pollen or sap on panels</li>
<li>Winter snow melt leaves mineral deposits on panels</li>
<li>You have bird droppings or obvious debris on the panels</li>
</ul>

<p><strong>Probably not worth cleaning if:</strong></p>
<ul>
<li>You have moderate rainfall (20+ inches annually) that naturally cleans panels</li>
<li>Panels are on a pitch-enough roof that water runs off freely</li>
<li>You don't visually see significant dirt</li>
<li>Your location is not particularly dusty</li>
</ul>

<h2>DIY Cleaning vs Professional</h2>

<p><strong>DIY Cleaning - Safety First</strong></p>
<p>IMPORTANT: Roof safety is critical. Most installers recommend against DIY cleaning due to fall risk.</p>

<p><strong>If you must DIY:</strong></p>
<ul>
<li>Only clean ground-mounted systems (never climb on roofs)</li>
<li>Use a soft-bristled brush or microfiber cloth</li>
<li>Use deionized water (distilled water preferred)</li>
<li>Do not use high-pressure washers (can damage seals)</li>
<li>Do not use abrasive cleaners or scrapers</li>
<li>Clean early morning or late afternoon, not in midday sun</li>
<li>Never touch the panels if the system is producing power</li>
<li>Turn off the DC disconnect before cleaning</li>
</ul>

<p><strong>Professional Cleaning</strong></p>
<ul>
<li>Cost: $150-$300 for residential system (20-30 panels)</li>
<li>Time: 2-4 hours depending on system size and accessibility</li>
<li>Safety: professionals have proper equipment and insurance</li>
<li>Expertise: they know how to clean without damaging equipment</li>
<li>Better for roof-mounted systems (where fall risk is highest)</li>
</ul>

<p><strong>ROI calculation:</strong></p>
<ul>
<li>Example: 10 kW system losing 10% production to dirt = 4 kWh/day loss</li>
<li>At $0.12/kWh, that's $1.44/day or $43/month in lost credits</li>
<li>Professional cleaning cost: $200</li>
<li>Payback period: 200 ÷ 43 = 4.6 months</li>
<li>If you clean annually, cost is amortized over 12 months</li>
</ul>

<h2>Seasonal Cleaning Schedule</h2>

<p><strong>For most climates, consider:</strong></p>
<ul>
<li><strong>Spring:</strong> Clean after winter (snow melt leaves mineral residue)</li>
<li><strong>Early summer:</strong> Clean if pollen season was heavy</li>
<li><strong>Fall:</strong> Clean before winter if leaves are falling nearby</li>
<li><strong>After unusual events:</strong> Clean after dust storms, hail, or construction nearby</li>
</ul>

<p><strong>For very dusty climates (desert, agricultural areas):</strong></p>
<ul>
<li>Clean quarterly (every 3 months)</li>
<li>Or clean monthly during high-dust seasons</li>
<li>ROI is usually very strong in dusty areas</li>
</ul>

<h2>What NOT to Do When Cleaning</h2>

<ul>
<li>Never use high-pressure washers: damages seals and connectors</li>
<li>Never use abrasive cleaners or scouring pads: scratches glass and cells</li>
<li>Never use harsh chemicals: can damage frame, connectors, or wiring insulation</li>
<li>Never clean in direct midday sun: water spots form as water evaporates</li>
<li>Never touch the panels while the system is producing power</li>
<li>Never stand on panels or put weight on them</li>
<li>Never climb on the roof without proper safety equipment</li>
</ul>

<h2>Monitoring Production After Cleaning</h2>

<p><strong>After professional cleaning:</strong></p>
<ul>
<li>Monitor production for the next week</li>
<li>Compare to same day last week (controlling for weather)</li>
<li>You should see production increase by 10-20% if dirt was the problem</li>
<li>If no improvement, dirt wasn't the issue; investigate other causes</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarrow;</a></div>`}`,
    faqs: [
      {
        question: 'My panels look clean. Do I still need professional cleaning?',
        answer: 'Panels can look cleaner than they are. Even light dust reduces production 2-5%. Check your production before and after a rain storm—if it increases 10%+ after rain, you\'re losing production to dirt. If you consistently see 10%+ production loss, professional cleaning has positive ROI. Otherwise, let rain handle it.'
      },
      {
        question: 'Is it safe to climb on my roof to clean the panels myself?',
        answer: 'Most installers recommend against DIY roof cleaning due to fall risk. Roof work is dangerous. If you must clean, use a soft brush and hose from ground level for ground-mounted systems. For roof-mounted systems, hire professionals with proper equipment, ladders, and insurance. Cost ($150-300) is worth the safety benefit.'
      },
      {
        question: 'Can I use my pressure washer to clean the panels?',
        answer: 'No. High-pressure washers can damage the seals, connectors, and wiring. Use only soft brushes and low-pressure water or deionized water. If you hire professionals, verify they use gentle methods. Many solar companies offer professional cleaning specifically because DIY methods often cause damage.'
      },
      {
        question: 'How often should I clean my solar panels?',
        answer: 'For most homeowners: once or twice per year if you notice production loss. For very dusty climates: quarterly (every 3 months). For areas with good rainfall: maybe never (rain cleans them). Monitor your production and clean when production loss reaches 10%. This way you\'re cleaning based on actual need, not arbitrary schedules.'
      }
    ]
  },
  {
    slug: 'how-long-do-solar-panels-last',
    title: 'How Long Do Solar Panels Last: Lifespan, Degradation, and Replacement',
    excerpt: 'Your solar panels will outlive most roof materials. Learn what to expect over 25, 40, and 50 years.',
    category: 'Solar Basics',
    date: '2026-02-22',
    readTime: '6 min',
    metaDescription: 'How long do solar panels last? Learn degradation rates, lifespan, and when to replace.',
    content: `<h2>Understanding Solar Panel Lifespan</h2>
<p>Modern solar panels are extraordinarily durable. Understanding their lifespan helps you evaluate long-term ROI and plan for system maintenance or replacement.</p>

<h2>The Timeline</h2>

<p><strong>Year 1: First-Year Degradation</strong></p>
<ul>
<li>New panels experience 2-3% efficiency loss in the first year</li>
<li>This is called "light-induced degradation" (LID)</li>
<li>It's a one-time adjustment as the panel material stabilizes</li>
<li>All new panels experience this; it's normal and expected</li>
<li>Warranties account for this</li>
</ul>

<p><strong>Years 2-25: Normal Degradation Period</strong></p>
<ul>
<li>After the first year, panels degrade at 0.5-0.7% per year</li>
<li>Over 25 years: total degradation of about 12-17%</li>
<li>A panel producing 300W new will produce 250-265W after 25 years</li>
<li>This is why manufacturers guarantee 80% performance at year 25</li>
<li>Your system produces less each year but still produces usable power</li>
</ul>

<p><strong>Years 25-40: Extended Production</strong></p>
<ul>
<li>Panels continue operating and producing power beyond 25-year warranty</li>
<li>Degradation continues at similar 0.5-0.7% rate</li>
<li>By year 40: panels produce 75-85% of original output</li>
<li>Many systems are still worth operating at this output level</li>
<li>Degradation slows slightly as material stabilizes further</li>
</ul>

<p><strong>Years 40+: Still Producing</strong></p>
<ul>
<li>Panels from 1980s and 1990s are still producing electricity today</li>
<li>At 40-50 years old, they produce 70-80% of original output</li>
<li>Some panels from the 1970s are still operating</li>
<li>Solar panels can last 40-50+ years or longer if maintained</li>
</ul>

<h2>What Affects Lifespan</h2>

<p><strong>Factors that extend lifespan:</strong></p>
<ul>
<li>Quality manufacturing and materials (premium panels last longer)</li>
<li>Proper installation and ventilation (allows cooling)</li>
<li>Regular maintenance and cleaning (prevents corrosion)</li>
<li>Proper electrical protection (surge protection, grounding)</li>
<li>Moderate climate (less temperature cycling stress)</li>
</ul>

<p><strong>Factors that shorten lifespan:</strong></p>
<ul>
<li>Poor installation (loose connections, improper grounding)</li>
<li>Extreme temperature cycling (hot deserts and cold nights)</li>
<li>Salty air (coastal regions experience corrosion)</li>
<li>Moisture infiltration (water damage, delamination)</li>
<li>Hail and physical damage</li>
<li>Lack of maintenance</li>
</ul>

<h2>Common Questions About Panel Lifespan</h2>

<p><strong>Will my panels still work after 25 years?</strong></p>
<p>Yes. The 25-year warranty doesn't mean panels stop working after 25 years. It means they're guaranteed to produce at 80% of original capacity after 25 years. Most panels produce 75-85% of original output at year 25 and continue operating. The average lifespan is 40-50+ years.</p>

<p><strong>When should I replace my panels?</strong></p>
<p>You should consider replacement when:</p>
<ul>
<li>Panels are physically damaged and can't be repaired (cracked, delaminated)</li>
<li>Degradation is excessive (more than 1% per year, indicating a defect)</li>
<li>Your roof needs replacement and panels must be removed anyway</li>
<li>Equipment failure makes the system uneconomical to repair</li>
<li>You want to upgrade to more efficient modern panels (optional)</li>
</ul>

<p><strong>What should I do when my roof needs replacement?</strong></p>
<p>Your solar panels will likely outlive your roof (40-50 year lifespan vs 20-25 year roof lifespan). When roof replacement happens:</p>
<ul>
<li>Solar installer must remove panels, temporarily store them</li>
<li>Roofer replaces the roof</li>
<li>Solar installer reinstalls panels on the new roof</li>
<li>Cost: approximately $1,500-$3,000 labor to remove and reinstall</li>
<li>This is a good time to clean panels or upgrade if desired</li>
</ul>

<p><strong>Is it worth replacing 20-year-old panels with new ones?</strong></p>
<p>Rarely, unless they're failing. A 20-year-old panel producing 85% of original output is still working well. Replacement ROI:</p>
<ul>
<li>New panels cost $2.50-$4.00/watt installed</li>
<li>25-panel system (300W each): $22,500-$36,000</li>
<li>Benefit: maybe 5-10% more annual production</li>
<li>Annual value: $100-$300 in extra credits</li>
<li>Payback period: 75-360 years (not worth it)</li>
<li>Only worth replacing if panels have failed or degraded excessively</li>
</ul>

<h2>Warranty Coverage Details</h2>

<p><strong>Equipment warranty (10-15 years):</strong></p>
<ul>
<li>Covers manufacturing defects and workmanship</li>
<li>If a panel fails within 10-15 years, manufacturer replaces it</li>
<li>Not applicable for weather damage, impacts, or misuse</li>
</ul>

<p><strong>Performance warranty (25 years):</strong></p>
<ul>
<li>Guarantees the panel will produce at least 80% of rated output at year 25</li>
<li>If degradation exceeds this, manufacturer compensates</li>
<li>Compensation is typically replacement or credit</li>
<li>This accounts for normal aging; you don't need to worry about degradation</li>
</ul>

<p><strong>Workmanship warranty (2-10 years, installer):</strong></p>
<ul>
<li>Covers installation problems and defects</li>
<li>If connections fail or equipment is damaged due to installation errors, it's covered</li>
<li>Duration varies by installer and agreement</li>
</ul>

<h2>Planning for Replacement in the Future</h2>

<p><strong>For long-term planning:</strong></p>
<ul>
<li>Expect your panels to last 40-50 years with good maintenance</li>
<li>The inverter will likely need replacement after 15-20 years</li>
<li>Your roof will need replacement after 20-25 years</li>
<li>Wiring and electrical components may need upgrades after 25+ years</li>
</ul>

<p><strong>Maintaining resale value:</strong></p>
<ul>
<li>Keep all warranty documentation for potential buyers</li>
<li>Maintain the system with annual inspections</li>
<li>Address any issues promptly to prevent further damage</li>
<li>Solar systems can increase home value by 3-4%, or about $15,000 on a $400,000 home</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarrow;</a></div>`}`,
    faqs: [
      {
        question: 'Will my solar panels work after the 25-year warranty expires?',
        answer: 'Yes! The 25-year warranty guarantees 80% output after 25 years, but panels continue working for 40-50+ years. Most panels produce 75-85% of original output at year 25 and keep working well into their 40s. The warranty is a minimum guarantee, not an expiration date.'
      },
      {
        question: 'My panels are 20 years old and producing 85% of original output. Should I replace them?',
        answer: 'No, unless they\'re failing. A panel at 85% output is still performing well for a 20-year-old system. Replacement cost ($20,000+) won\'t be recovered for decades based on the 5-10% additional output. Only replace if panels are visibly damaged, heavily degraded, or physically failing.'
      },
      {
        question: 'What do I do when my roof needs replacement in 15 years?',
        answer: 'Contact your solar installer. They\'ll remove panels before roofing work, store them temporarily, then reinstall after the new roof is done. Cost: typically $1,500-$3,000 labor. This is normal and expected; it\'s much cheaper than replacing the panels. Plan for this in your long-term maintenance budget.'
      },
      {
        question: 'How does the 25-year performance warranty actually work?',
        answer: 'It guarantees the panel will produce at least 80% of its rated output at year 25. If testing shows degradation exceeding the warranted rate, the manufacturer either replaces the panel or compensates you. Most systems don\'t need to claim this—normal degradation is within warranty limits. Keep your warranty documents if needed.'
      }
    ]
  },
  {
    slug: 'solar-battery-vs-grid-tied',
    title: 'Solar Battery vs Grid-Tied System: Pros, Cons, and Backup Power Options',
    excerpt: 'Should you add a battery to your solar system or stay grid-tied? Understand the trade-offs.',
    category: 'Solar Basics',
    date: '2026-02-28',
    readTime: '8 min',
    metaDescription: 'Battery backup vs grid-tied solar: learn pros, cons, and when each makes sense.',
    content: `<h2>Understanding the Two Approaches</h2>
<p>Solar systems come in two primary configurations: grid-tied (no batteries) and battery-backed (with storage). Each has different benefits, costs, and use cases.</p>

<h2>Grid-Tied System (No Batteries)</h2>

<p><strong>How it works:</strong></p>
<ul>
<li>Solar panels produce during the day</li>
<li>You use the power directly for home appliances</li>
<li>Excess power flows to the grid and you earn credits</li>
<li>At night, you draw from the grid and use credits</li>
<li>If grid goes down, your system stops (safety feature)</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
<li><strong>Lower cost:</strong> No battery means much cheaper system ($10,000-$20,000 less)</li>
<li><strong>Maximum production use:</strong> All solar output is either used or credited, no waste</li>
<li><strong>Simple operation:</strong> Nothing to maintain or charge</li>
<li><strong>Long lifespan:</strong> Inverter lasts 15-20 years; no battery degradation concerns</li>
<li><strong>Best ROI for most homeowners:</strong> Fastest payback, simplest economics</li>
<li><strong>Environmentally friendly:</strong> Displaces grid electricity (which may be coal/gas)</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li><strong>No backup power:</strong> During outages, you have no electricity from your solar panels</li>
<li><strong>Weather dependent monthly bill:</strong> Winter bills can be higher if system undersized</li>
<li><strong>Net metering risk:</strong> Depends on utility maintaining favorable net metering policy</li>
<li><strong>Limited TOU optimization:</strong> Can't shift solar production to peak hours without batteries</li>
</ul>

<p><strong>Best for:</strong></p>
<ul>
<li>Most residential homeowners seeking maximum ROI</li>
<li>Areas with rare or short power outages</li>
<li>Homeowners on tight budgets</li>
<li>Anyone prioritizing payback period over backup power</li>
</ul>

<h2>Battery-Backed System (With Storage)</h2>

<p><strong>How it works:</strong></p>
<ul>
<li>Solar panels produce during the day</li>
<li>Battery charges from excess solar production</li>
<li>Evening usage draws from battery first</li>
<li>If battery depletes, grid supplies additional power</li>
<li>During outage, battery can supply power to home (if system is configured properly)</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
<li><strong>Backup power:</strong> During outages, battery supports critical circuits for hours or days</li>
<li><strong>TOU optimization:</strong> Charge during cheap midday solar, use during expensive peak hours</li>
<li><strong>Energy independence:</strong> Less dependent on grid for evening power</li>
<li><strong>Self-consumption optimization:</strong> More of your solar power is used by you, not exported</li>
<li><strong>Peak shaving:</strong> Reduce demand charges by using battery during peak periods</li>
<li><strong>Future-proofed:</strong> If net metering rates decline, you're less affected</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li><strong>Very expensive:</strong> 10-15 kWh battery storage costs $10,000-$20,000</li>
<li><strong>Long payback:</strong> ROI is typically 15-30 years (longer than solar alone)</li>
<li><strong>Battery degradation:</strong> Batteries lose capacity over time; replacement may be needed</li>
<li><strong>More complex:</strong> Requires hybrid inverter and additional maintenance</li>
<li><strong>Limited backup duration:</strong> Battery provides only hours of backup (8-48 hours depending on capacity and usage)</li>
<li><strong>Weather dependent storage:</strong> Cloudy days deplete battery; overcast weeks are problematic</li>
</ul>

<p><strong>Battery lifespan:</strong></p>
<ul>
<li>Tesla Powerwall: 70% capacity at 10 years (warranty covers this)</li>
<li>Enphase IQ Battery: similar 70% at 10 years</li>
<li>After 15-20 years: battery replacement cost is $3,000-$8,000</li>
<li>System is designed to outlast one battery cycle; plan for replacement</li>
</ul>

<p><strong>Best for:</strong></p>
<ul>
<li>Homeowners with frequent, extended outages</li>
<li>Off-grid properties or those planning off-grid future</li>
<li>Homes on unfavorable net metering or TOU rate plans</li>
<li>Homeowners prioritizing energy independence and backup power</li>
<li>Those with budget capacity for additional $10,000-$20,000</li>
</ul>

<h2>Cost Comparison</h2>

<p><strong>10 kW Grid-Tied System:</strong></p>
<ul>
<li>Solar panels: $10,000-$15,000</li>
<li>String inverter: $1,500-$3,000</li>
<li>Installation and electrical: $2,000-$4,000</li>
<li><strong>Total: $13,500-$22,000</strong></li>
<li>Payback period: 6-9 years (after tax credits)</li>
</ul>

<p><strong>10 kW Grid-Tied System with 15 kWh Battery:</strong></p>
<ul>
<li>Solar panels: $10,000-$15,000</li>
<li>Hybrid inverter: $3,000-$5,000</li>
<li>Battery storage (15 kWh): $8,000-$12,000</li>
<li>Installation and electrical: $3,000-$6,000</li>
<li><strong>Total: $24,000-$38,000</strong></p>
<li>Payback period: 15-25 years (including battery value)</li>
</ul>

<h2>Making the Decision</h2>

<p><strong>Choose grid-tied if:</strong></p>
<ul>
<li>You're budget-conscious and want maximum ROI</li>
<li>Outages are rare in your area (less than once per year)</li>
<li>Your utility offers net metering with reasonable rates</li>
<li>You don't have electric vehicle charging requirements</li>
<li>You want the fastest payback period</li>
</ul>

<p><strong>Choose battery-backed if:</strong></p>
<ul>
<li>You live in area with frequent, extended outages</li>
<li>You have critical loads you want backed up (medical equipment, HVAC)</li>
<li>You're on unfavorable TOU rates or net metering has declined</li>
<li>You want energy independence and reduced grid dependence</li>
<li>You have electric vehicle you want to charge from stored solar power</li>
<li>You value the security of backup power more than cost savings</li>
<li>You have an adequate budget and 15+ year timeframe</li>
</ul>

<p><strong>Hybrid approach (Growing option):</strong></p>
<ul>
<li>Start with grid-tied solar to maximize ROI</li>
<li>Add battery storage later when prices drop or needs change</li>
<li>Design system to allow battery addition (hybrid-ready inverter)</li>
<li>Cost: slightly higher upfront, but flexibility for future upgrade</li>
<li>This may be optimal for many homeowners: immediate savings plus future optionality</li>
</ul>

${`<div class="mt-12 bg-green-50 rounded-2xl p-8 text-center"><h3 class="text-xl font-bold text-green-900 mb-2">Wondering if your solar system is working properly?</h3><p class="text-green-700 mb-6">Get a free health score in 2 minutes. No credit card, no commitment.</p><a href="/check" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors">Check Your System Now &rarrow;</a></div>`}`,
    faqs: [
      {
        question: 'What\'s the real advantage of a battery if the grid usually stays up?',
        answer: 'If outages are rare, the ROI on battery is poor (15-25 years payback). However, other benefits include: (1) TOU optimization if you\'re on unfavorable rates, (2) peak shaving for demand charges, (3) using your own solar power at evening peak hours instead of grid peak-rate power. Calculate your specific benefits before deciding.'
      },
      {
        question: 'How long can a battery power my home during an outage?',
        answer: 'Depends on battery size and usage. A 15 kWh battery with typical evening usage (4 kWh) provides 3.75 hours of backup. With load management (turning off AC, reducing usage), it could last 12+ hours. Multiple days of backup requires a much larger battery (30+ kWh, cost $20,000+). Plan based on how long you realistically need backup.'
      },
      {
        question: 'Should I start with grid-tied and add batteries later?',
        answer: 'Yes, this is increasingly popular. Start with grid-tied solar for maximum ROI and savings. In 5-10 years when battery prices drop and your system has paid down, add batteries if you need them. Use a "battery-ready" hybrid inverter in the original install ($500 more upfront) to enable future battery addition without full system replacement.'
      },
      {
        question: 'Do batteries help with high electric bills on TOU rates?',
        answer: 'Yes! With TOU rates, battery shifts solar power from midday (cheap export) to evening (expensive import). This is where battery ROI is strongest. Example: 15 kWh battery at $15,000 cost, saving $200/month on peak-hour charges, pays for itself in 6 years. TOU rates make battery much more economical than without them.'
      }
    ]
  }
];





