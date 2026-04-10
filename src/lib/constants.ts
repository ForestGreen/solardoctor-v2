/**
 * Shared constants used across the application.
 * Solar physics values, month names, and other magic numbers.
 */

export const MONTH_NAMES_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

export const MONTH_NAMES_FULL = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

/** Industry standard: 14% total system losses (wiring, inverter, temperature) */
export const SYSTEM_LOSS_FACTOR = 0.14;

/** Annual panel degradation rate (0.5% per year is industry standard) */
export const ANNUAL_DEGRADATION_RATE = 0.005;

/** National average electricity rate ($/kWh) — used as fallback */
export const DEFAULT_ELECTRICITY_RATE = 0.16;

/** National average annual production per kW of capacity */
export const NATIONAL_AVG_KWH_PER_KW_YEAR = 1400;

/** Monthly distribution of annual production (fraction, sums to 1.0) */
export const MONTHLY_PRODUCTION_FRACTIONS = [
  0.055, 0.065, 0.085, 0.095, 0.105, 0.110,
  0.110, 0.105, 0.090, 0.080, 0.055, 0.045,
] as const;
