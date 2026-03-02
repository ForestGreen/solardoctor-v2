// SolarEdge inverter models database for programmatic landing pages
// Used to generate individual model pages with specs, common issues, and error codes

export interface InverterModel {
  slug: string; // URL-friendly, e.g., "se7600h"
  model: string; // e.g., "SE7600H-US"
  series: string; // e.g., "HD-Wave"
  powerRating: string; // e.g., "7.6 kW"
  phase: string; // "Single" or "Three"
  commonIssues: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  errorCodes: { code: string; meaning: string; severity: "warning" | "critical" }[];
}

export const inverterModels: InverterModel[] = [
  // HD-Wave Series (Current Generation)
  {
    slug: "se3000h",
    model: "SE3000H-US",
    series: "HD-Wave",
    powerRating: "3.0 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "The inverter detects potential arc faults in the DC string and shuts down to protect the system. Common with aged wiring or loose connections.",
      },
      {
        title: "Grid Voltage Errors",
        description:
          "The inverter cannot synchronize with grid voltage due to utility fluctuations or weak grid conditions. More common in rural areas.",
      },
      {
        title: "Fan Noise During Summer",
        description:
          "Cooling fans run continuously during hot weather to dissipate heat. Normal but can be loud in silent environments.",
      },
      {
        title: "Communication Loss",
        description:
          "Loss of connection to SolarEdge monitoring app due to Wi-Fi or cellular gateway issues.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "3.0 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "15A per string" },
      { label: "Efficiency", value: "97.2%" },
      { label: "Weight", value: "27 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "7", meaning: "Residual current device (RCD) failure", severity: "critical" },
      { code: "49", meaning: "Over-temperature condition", severity: "warning" },
    ],
  },
  {
    slug: "se3800h",
    model: "SE3800H-US",
    series: "HD-Wave",
    powerRating: "3.8 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "The inverter detects potential arc faults in the DC string and shuts down to protect the system. Check wiring connections on modules.",
      },
      {
        title: "String Imbalance",
        description:
          "Uneven power output from different strings due to shading, soiling, or module mismatch. Reduces overall system efficiency.",
      },
      {
        title: "Temperature Derating",
        description:
          "In extreme heat, the inverter reduces output to prevent overheating. Performance returns to normal when temperature drops.",
      },
      {
        title: "Wi-Fi Connection Drops",
        description:
          "Intermittent loss of Wi-Fi connectivity to monitoring system, especially in homes with weak signal coverage.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "3.8 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "18A per string" },
      { label: "Efficiency", value: "97.4%" },
      { label: "Weight", value: "28 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "16", meaning: "Insulation fault detected", severity: "critical" },
      { code: "68", meaning: "Transformer primary over-temperature", severity: "warning" },
    ],
  },
  {
    slug: "se5000h",
    model: "SE5000H-US",
    series: "HD-Wave",
    powerRating: "5.0 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "Safety mechanism shuts down inverter when arc faults are detected. Most common with loose module connectors or damaged wiring.",
      },
      {
        title: "Grid Frequency Errors",
        description:
          "Inverter cannot synchronize with grid frequency (60Hz in US). Typically caused by weak grid or solar provider issues.",
      },
      {
        title: "Fan Overheating",
        description:
          "Cooling fans work overtime in extreme heat. Inverter may derate or shut down if temperature exceeds safe limits.",
      },
      {
        title: "Slow Data Transmission",
        description:
          "Monitoring data updates slower than normal due to poor network connectivity. Check router signal strength.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "5.0 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "24A per string" },
      { label: "Efficiency", value: "97.6%" },
      { label: "Weight", value: "31 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "25", meaning: "Relay failure detected", severity: "critical" },
      { code: "48", meaning: "DC component too high", severity: "warning" },
    ],
  },
  {
    slug: "se6000h",
    model: "SE6000H-US",
    series: "HD-Wave",
    powerRating: "6.0 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "Protects your system by detecting dangerous arc faults. Most common issue due to weathered wiring or poor connections.",
      },
      {
        title: "Leakage Current Threshold",
        description:
          "Inverter detects ground faults via RCD monitoring. Usually indicates degraded insulation in older systems.",
      },
      {
        title: "High Summer Performance Loss",
        description:
          "Output significantly drops in summer heat, especially above 95°F. Normal derating but worth monitoring.",
      },
      {
        title: "Communication Lag",
        description:
          "Delayed updates to SolarEdge app or monitoring dashboard. Usually a network issue, not inverter failure.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "6.0 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "28A per string" },
      { label: "Efficiency", value: "97.7%" },
      { label: "Weight", value: "33 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "7", meaning: "Residual current device (RCD) failure", severity: "critical" },
      { code: "82", meaning: "Temperature sensor failure", severity: "warning" },
    ],
  },
  {
    slug: "se7600h",
    model: "SE7600H-US",
    series: "HD-Wave",
    powerRating: "7.6 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "Most reported issue. Caused by loose connections, oxidized DC connectors, or aged wiring insulation. Check all DC connections.",
      },
      {
        title: "Grid Connection Loss",
        description:
          "Inverter disconnects from utility grid due to voltage or frequency violations. Common during peak afternoon generation.",
      },
      {
        title: "String Monitoring Faults",
        description:
          "Optimizer or string failures detected during normal operation. Usually indicates a bad module or optimizer unit.",
      },
      {
        title: "Intermittent Monitoring Data",
        description:
          "Gaps in production data or missing readings due to communication issues with SolarEdge gateway.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "7.6 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "32A per string" },
      { label: "Efficiency", value: "97.8%" },
      { label: "Weight", value: "36 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "5", meaning: "Faulty inverter detected (firmware issue)", severity: "critical" },
      { code: "49", meaning: "Over-temperature condition", severity: "warning" },
    ],
  },
  {
    slug: "se10000h",
    model: "SE10000H-US",
    series: "HD-Wave",
    powerRating: "10.0 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "High-power systems are more susceptible to AFD events. Requires immediate inspection of all DC connections and string wiring.",
      },
      {
        title: "Grid Synchronization Errors",
        description:
          "With higher output, inverter may struggle to sync with grid during high-generation periods.",
      },
      {
        title: "Heat Dissipation Issues",
        description:
          "Large unit generates significant heat. Ensure proper ventilation and that cooling fans operate freely.",
      },
      {
        title: "Multiple String Failures",
        description:
          "With more strings, probability of optimizer or string issues increases. Check each string's voltage.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "10.0 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "40A per string" },
      { label: "Efficiency", value: "97.9%" },
      { label: "Weight", value: "40 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "81", meaning: "Fan failure detected", severity: "critical" },
      { code: "68", meaning: "Transformer primary over-temperature", severity: "warning" },
    ],
  },
  {
    slug: "se11400h",
    model: "SE11400H-US",
    series: "HD-Wave",
    powerRating: "11.4 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Arc Fault Detection (AFD) Trips",
        description:
          "At this power level, AFD sensitivity is critical. Even small wiring issues trigger shutdowns. Regular maintenance essential.",
      },
      {
        title: "Thermal Management Challenges",
        description:
          "Largest single-phase inverter. Thermal derating more aggressive in summer. Adequate ventilation is critical.",
      },
      {
        title: "Complex String Monitoring",
        description:
          "More strings mean more potential failure points. String-level monitoring is essential for troubleshooting.",
      },
      {
        title: "Grid-Tie Stability",
        description:
          "High-power systems can cause grid instability. Utility may impose export limits or require additional equipment.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "11.4 kW AC" },
      { label: "Input Voltage Range", value: "150V - 480V DC" },
      { label: "Max Input Current", value: "45A per string" },
      { label: "Efficiency", value: "97.9%" },
      { label: "Weight", value: "42 lbs" },
    ],
    errorCodes: [
      {
        code: "AFD",
        meaning: "Arc Fault Detected in DC string",
        severity: "critical",
      },
      { code: "12", meaning: "Grid voltage out of range", severity: "warning" },
      { code: "81", meaning: "Fan failure detected", severity: "critical" },
      { code: "49", meaning: "Over-temperature condition", severity: "warning" },
    ],
  },

  // SetApp Series (Older Generation)
  {
    slug: "se3000a",
    model: "SE3000A-US",
    series: "SetApp",
    powerRating: "3.0 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "SetApp Configuration Loss",
        description:
          "SetApp settings may reset due to firmware issues or power surges. Reconnection to app required.",
      },
      {
        title: "Display Panel Failure",
        description:
          "Physical display panel may fail or show garbled text. Communication still works via Wi-Fi.",
      },
      {
        title: "Ground Fault Detection",
        description:
          "Older technology sometimes triggers false ground faults. Check insulation and wiring health.",
      },
      {
        title: "Network Connectivity",
        description:
          "Wi-Fi connection drops frequently. SetApp inverters rely more on network connectivity than modern units.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "3.0 kW AC" },
      { label: "Input Voltage Range", value: "125V - 450V DC" },
      { label: "Max Input Current", value: "14A per string" },
      { label: "Efficiency", value: "96.5%" },
      { label: "Weight", value: "25 lbs" },
    ],
    errorCodes: [
      { code: "E1", meaning: "DC input voltage out of range", severity: "warning" },
      { code: "E4", meaning: "Ground fault detected", severity: "critical" },
      { code: "E6", meaning: "Grid voltage failure", severity: "warning" },
      { code: "E9", meaning: "Temperature sensor failure", severity: "warning" },
    ],
  },
  {
    slug: "se5000a",
    model: "SE5000A-US",
    series: "SetApp",
    powerRating: "5.0 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "SetApp Communication Delays",
        description:
          "Slower data transmission and app updates. Normal for older generation inverters.",
      },
      {
        title: "Firmware Stability",
        description:
          "Older firmware may have bugs or compatibility issues with newer monitoring apps.",
      },
      {
        title: "Capacitor Degradation",
        description:
          "Electrolytic capacitors age over time, potentially causing efficiency loss or shutdowns.",
      },
      {
        title: "Physical Component Wear",
        description:
          "Relays and switches may wear out after years of operation, increasing failure risk.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "5.0 kW AC" },
      { label: "Input Voltage Range", value: "125V - 450V DC" },
      { label: "Max Input Current", value: "22A per string" },
      { label: "Efficiency", value: "96.8%" },
      { label: "Weight", value: "29 lbs" },
    ],
    errorCodes: [
      { code: "E1", meaning: "DC input voltage out of range", severity: "warning" },
      { code: "E4", meaning: "Ground fault detected", severity: "critical" },
      { code: "E6", meaning: "Grid voltage failure", severity: "warning" },
      { code: "E16", meaning: "Relay fault detected", severity: "critical" },
    ],
  },
  {
    slug: "se7600a",
    model: "SE7600A-US",
    series: "SetApp",
    powerRating: "7.6 kW",
    phase: "Single",
    commonIssues: [
      {
        title: "Inverter Display Errors",
        description:
          "Built-in display may malfunction but inverter continues to operate. App monitoring still available.",
      },
      {
        title: "Thermal Cycling Damage",
        description:
          "After years of thermal stress, internal components may fail. More common in inverters 8+ years old.",
      },
      {
        title: "SetApp App Compatibility",
        description:
          "Older inverters may not be fully compatible with updated SolarEdge monitoring apps.",
      },
      {
        title: "Warranty Expiration Issues",
        description:
          "Most SetApp units are out of warranty. Repairs can be expensive, replacement may be more economical.",
      },
    ],
    specs: [
      { label: "Power Rating", value: "7.6 kW AC" },
      { label: "Input Voltage Range", value: "125V - 450V DC" },
      { label: "Max Input Current", value: "28A per string" },
      { label: "Efficiency", value: "96.9%" },
      { label: "Weight", value: "33 lbs" },
    ],
    errorCodes: [
      { code: "E1", meaning: "DC input voltage out of range", severity: "warning" },
      { code: "E4", meaning: "Ground fault detected", severity: "critical" },
      { code: "E6", meaning: "Grid voltage failure", severity: "warning" },
      { code: "E17", meaning: "Internal fan failure", severity: "critical" },
    ],
  },
];

// Create a lookup map for quick access by slug
export const inverterModelsBySlug: Record<string, InverterModel> = inverterModels.reduce(
  (acc, model) => {
    acc[model.slug] = model;
    return acc;
  },
  {} as Record<string, InverterModel>
);

// Helper function to get all slugs for static generation
export function getAllInverterSlugs(): string[] {
  return inverterModels.map((model) => model.slug);
}

// Helper function to get models by series
export function getModelsBySeriesName(series: string): InverterModel[] {
  return inverterModels.filter((model) => model.series === series);
}

// Helper function to get all unique series names
export function getAllSeriesNames(): string[] {
  return Array.from(new Set(inverterModels.map((model) => model.series)));
}
