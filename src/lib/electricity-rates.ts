// Average residential electricity rates by state (cents/kWh)
// Source: EIA Electric Power Monthly, 2024 annual averages
// https://www.eia.gov/electricity/monthly/epm_table_5_6_a.html

const STATE_RATES: Record<string, number> = {
  AL: 0.15, AK: 0.25, AZ: 0.14, AR: 0.13, CA: 0.30,
  CO: 0.15, CT: 0.27, DE: 0.16, FL: 0.15, GA: 0.14,
  HI: 0.39, ID: 0.11, IL: 0.16, IN: 0.15, IA: 0.15,
  KS: 0.14, KY: 0.13, LA: 0.12, ME: 0.24, MD: 0.16,
  MA: 0.29, MI: 0.18, MN: 0.15, MS: 0.13, MO: 0.13,
  MT: 0.12, NE: 0.12, NV: 0.15, NH: 0.24, NJ: 0.18,
  NM: 0.15, NY: 0.22, NC: 0.13, ND: 0.12, OH: 0.15,
  OK: 0.12, OR: 0.13, PA: 0.17, RI: 0.27, SC: 0.14,
  SD: 0.13, TN: 0.13, TX: 0.14, UT: 0.12, VT: 0.21,
  VA: 0.14, WA: 0.11, WV: 0.13, WI: 0.16, WY: 0.12,
  DC: 0.16,
};

const US_NATIONAL_AVERAGE = 0.16;

export function getElectricityRate(state?: string | null): number {
  if (!state) return US_NATIONAL_AVERAGE;
  const abbr = state.length === 2 ? state.toUpperCase() : stateNameToAbbr(state);
  return STATE_RATES[abbr] ?? US_NATIONAL_AVERAGE;
}

function stateNameToAbbr(name: string): string {
  const map: Record<string, string> = {
    alabama: "AL", alaska: "AK", arizona: "AZ", arkansas: "AR", california: "CA",
    colorado: "CO", connecticut: "CT", delaware: "DE", florida: "FL", georgia: "GA",
    hawaii: "HI", idaho: "ID", illinois: "IL", indiana: "IN", iowa: "IA",
    kansas: "KS", kentucky: "KY", louisiana: "LA", maine: "ME", maryland: "MD",
    massachusetts: "MA", michigan: "MI", minnesota: "MN", mississippi: "MS", missouri: "MO",
    montana: "MT", nebraska: "NE", nevada: "NV", "new hampshire": "NH", "new jersey": "NJ",
    "new mexico": "NM", "new york": "NY", "north carolina": "NC", "north dakota": "ND", ohio: "OH",
    oklahoma: "OK", oregon: "OR", pennsylvania: "PA", "rhode island": "RI", "south carolina": "SC",
    "south dakota": "SD", tennessee: "TN", texas: "TX", utah: "UT", vermont: "VT",
    virginia: "VA", washington: "WA", "west virginia": "WV", wisconsin: "WI", wyoming: "WY",
    "district of columbia": "DC",
  };
  return map[name.toLowerCase().trim()] ?? "";
}
