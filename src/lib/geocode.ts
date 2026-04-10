interface ZipLookupResult {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

function normalizeCountryCode(countryCode: string): string {
  const normalized = countryCode.trim().toUpperCase();
  if (normalized === "UNITED STATES" || normalized === "UNITED STATES OF AMERICA") {
    return "US";
  }
  return normalized;
}

export async function geocodePostalCode(
  postalCode: string,
  countryCode: string = "US"
): Promise<ZipLookupResult> {
  const normalizedPostalCode = postalCode.trim();
  const normalizedCountry = normalizeCountryCode(countryCode);

  const response = await fetch(
    `https://api.zippopotam.us/${normalizedCountry}/${normalizedPostalCode}`
  );

  if (!response.ok) {
    throw new Error("Unable to locate that postal code.");
  }

  const data = await response.json();
  const place = data.places?.[0];

  if (!place) {
    throw new Error("Postal code lookup returned no results.");
  }

  return {
    latitude: Number(place.latitude),
    longitude: Number(place.longitude),
    city: place["place name"],
    state: place["state abbreviation"] || place.state,
  };
}
