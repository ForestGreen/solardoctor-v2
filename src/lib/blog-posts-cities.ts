// Blog posts for 200+ US cities - programmatic SEO targeting local solar issues
// Each city gets a unique post addressing local climate, irradiance, and utility-specific concerns

import type { BlogPost, FaqItem } from './blog-posts';

// City data organized by region with solar characteristics
interface CityData {
  cityName: string;
  state: string;
  stateAbbr: string;
  region: string;
  avgAnnualSunHours: number;
  primaryUtility: string;
  irradianceTier: 'high' | 'medium' | 'low';
  climateZone: 'desert' | 'humid-subtropical' | 'temperate' | 'cold-snow' | 'marine-coastal' | 'tropical';
  notableFactor: string;
}

const SOUTHWEST_CITIES: CityData[] = [
  // Arizona
  { cityName: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2600, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Intense summer heat and dust storms' },
  { cityName: 'Tucson', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2700, primaryUtility: 'Tucson Electric Power (TEP)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Desert dust and extreme heat degradation' },
  { cityName: 'Mesa', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2650, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'High sun exposure with seasonal dust' },
  { cityName: 'Scottsdale', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2600, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Premium residential area with HOA considerations' },
  { cityName: 'Gilbert', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2650, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Rapid growth with high-density solar adoption' },
  { cityName: 'Chandler', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2600, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Tech hub with modern electrical infrastructure' },
  { cityName: 'Tempe', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2600, primaryUtility: 'Salt River Project (SRP)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'College town with diverse housing types' },
  { cityName: 'Peoria', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2600, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Suburban sprawl with newer systems' },
  { cityName: 'Surprise', state: 'Arizona', stateAbbr: 'AZ', region: 'Southwest', avgAnnualSunHours: 2550, primaryUtility: 'Arizona Public Service (APS)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Newer community with modern homes' },

  // Nevada
  { cityName: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV', region: 'Southwest', avgAnnualSunHours: 2700, primaryUtility: 'NV Energy', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Urban growth with grid congestion' },
  { cityName: 'Henderson', state: 'Nevada', stateAbbr: 'NV', region: 'Southwest', avgAnnualSunHours: 2700, primaryUtility: 'NV Energy', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Planned community with solar-friendly policies' },
  { cityName: 'North Las Vegas', state: 'Nevada', stateAbbr: 'NV', region: 'Southwest', avgAnnualSunHours: 2650, primaryUtility: 'NV Energy', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Industrial area with utility challenges' },
  { cityName: 'Reno', state: 'Nevada', stateAbbr: 'NV', region: 'Southwest', avgAnnualSunHours: 2500, primaryUtility: 'NV Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'High altitude with winter snow impact' },

  // New Mexico
  { cityName: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM', region: 'Southwest', avgAnnualSunHours: 2700, primaryUtility: 'Albuquerque Public Utilities', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'High elevation affects panel efficiency' },
  { cityName: 'Santa Fe', state: 'New Mexico', stateAbbr: 'NM', region: 'Southwest', avgAnnualSunHours: 2500, primaryUtility: 'Santa Fe Public Utilities', irradianceTier: 'medium', climateZone: 'cold-snow', notableFactor: 'Architectural guidelines complicate installations' },
  { cityName: 'Las Cruces', state: 'New Mexico', stateAbbr: 'NM', region: 'Southwest', avgAnnualSunHours: 2750, primaryUtility: 'Las Cruces Utilities', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Desert climate with water scarcity concerns' },

  // Utah
  { cityName: 'Salt Lake City', state: 'Utah', stateAbbr: 'UT', region: 'Southwest', avgAnnualSunHours: 2300, primaryUtility: 'Rocky Mountain Power', irradianceTier: 'medium', climateZone: 'cold-snow', notableFactor: 'Winter inversion traps pollution' },
  { cityName: 'Provo', state: 'Utah', stateAbbr: 'UT', region: 'Southwest', avgAnnualSunHours: 2400, primaryUtility: 'Rocky Mountain Power', irradianceTier: 'medium', climateZone: 'cold-snow', notableFactor: 'College town with diverse building types' },
  { cityName: 'St. George', state: 'Utah', stateAbbr: 'UT', region: 'Southwest', avgAnnualSunHours: 2600, primaryUtility: 'St. George City', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Southern Utah high desert climate' },

  // Colorado
  { cityName: 'Denver', state: 'Colorado', stateAbbr: 'CO', region: 'Southwest', avgAnnualSunHours: 2700, primaryUtility: 'Xcel Energy', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'High altitude with thin atmosphere' },
  { cityName: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO', region: 'Southwest', avgAnnualSunHours: 2650, primaryUtility: 'Colorado Springs Utilities', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Military town with growing residential sector' },
  { cityName: 'Aurora', state: 'Colorado', stateAbbr: 'CO', region: 'Southwest', avgAnnualSunHours: 2700, primaryUtility: 'Xcel Energy', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Suburban Denver with rapid growth' },
  { cityName: 'Fort Collins', state: 'Colorado', stateAbbr: 'CO', region: 'Southwest', avgAnnualSunHours: 2550, primaryUtility: 'Xcel Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'College town with high elevation' },
  { cityName: 'Boulder', state: 'Colorado', stateAbbr: 'CO', region: 'Southwest', avgAnnualSunHours: 2500, primaryUtility: 'Xcel Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Affluent area with stringent building codes' },
];

const CALIFORNIA_CITIES: CityData[] = [
  { cityName: 'Los Angeles', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2550, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Marine layer reduces summer production' },
  { cityName: 'San Diego', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2650, primaryUtility: 'San Diego Gas & Electric (SDG&E)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Coastal fog and marine layer impact' },
  { cityName: 'San Jose', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2350, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'medium', climateZone: 'marine-coastal', notableFactor: 'Silicon Valley with tech-forward homes' },
  { cityName: 'San Francisco', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2350, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'medium', climateZone: 'marine-coastal', notableFactor: 'Fog city with limited clear days' },
  { cityName: 'Fresno', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Central Valley heat and smog' },
  { cityName: 'Sacramento', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Sacramento Municipal Utility District', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Capital city with older neighborhoods' },
  { cityName: 'Long Beach', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2550, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Port city with salt air corrosion concerns' },
  { cityName: 'Oakland', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2450, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'medium', climateZone: 'marine-coastal', notableFactor: 'Bay Area with variable weather' },
  { cityName: 'Bakersfield', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2750, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Kern County heat and pollution' },
  { cityName: 'Anaheim', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Orange County with air quality issues' },
  { cityName: 'Santa Ana', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Orange County air and heat challenges' },
  { cityName: 'Riverside', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Inland Empire with intense summer heat' },
  { cityName: 'Stockton', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Central Valley with varying air quality' },
  { cityName: 'Irvine', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2650, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Planned community with advanced infrastructure' },
  { cityName: 'Chula Vista', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'San Diego Gas & Electric (SDG&E)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Border region with consistent sun' },
  { cityName: 'Santa Clarita', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'High desert foothill location' },
  { cityName: 'Fremont', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2400, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'medium', climateZone: 'marine-coastal', notableFactor: 'South Bay with tech industry presence' },
  { cityName: 'Moreno Valley', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Inland Empire heat stress' },
  { cityName: 'Fontana', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'San Bernardino Valley heat' },
  { cityName: 'Modesto', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2650, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Central Valley with agricultural area concerns' },
  { cityName: 'Glendale', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2550, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'LA area with urban heat island effect' },
  { cityName: 'Huntington Beach', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Coastal city with salt air impact' },
  { cityName: 'Santa Rosa', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2450, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'medium', climateZone: 'marine-coastal', notableFactor: 'Wine country with fire season concerns' },
  { cityName: 'Oceanside', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2650, primaryUtility: 'San Diego Gas & Electric (SDG&E)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Coastal location with marine layer' },
  { cityName: 'Rancho Cucamonga', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Inland valley with heat degradation' },
  { cityName: 'Garden Grove', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Orange County suburban area' },
  { cityName: 'Elk Grove', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Sacramento Municipal Utility District', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Sacramento suburb with growing development' },
  { cityName: 'Oxnard', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'marine-coastal', notableFactor: 'Coastal Ventura County location' },
  { cityName: 'Ontario', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Airport hub with industrial area' },
  { cityName: 'Corona', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Riverside County with summer heat' },
  { cityName: 'Lancaster', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'High desert with extreme temperature swings' },
  { cityName: 'Palmdale', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'High desert climate with occasional dust' },
  { cityName: 'Temecula', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Wine country with rolling terrain' },
  { cityName: 'Murrieta', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Riverside County growth area' },
  { cityName: 'Menifee', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Riverside County with heat challenges' },
  { cityName: 'Roseville', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2600, primaryUtility: 'Pacific Gas and Electric (PG&E)', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Sacramento suburb with newer homes' },
  { cityName: 'Visalia', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Visalia Public Utilities', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Central Valley with agricultural connections' },
  { cityName: 'San Bernardino', state: 'California', stateAbbr: 'CA', region: 'California', avgAnnualSunHours: 2700, primaryUtility: 'Southern California Edison (SCE)', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Inland Empire with air quality concerns' },
];

const TEXAS_CITIES: CityData[] = [
  { cityName: 'Houston', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2200, primaryUtility: 'CenterPoint Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Coastal humidity and cloud cover' },
  { cityName: 'San Antonio', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2500, primaryUtility: 'CPS Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Hill country with uneven terrain' },
  { cityName: 'Dallas', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'North Texas with spring severe weather' },
  { cityName: 'Austin', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2500, primaryUtility: 'Austin Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Tech hub with progressive energy policies' },
  { cityName: 'Fort Worth', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'DFW metroplex with sprawl' },
  { cityName: 'El Paso', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2800, primaryUtility: 'El Paso Electric', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Desert climate with excellent solar potential' },
  { cityName: 'Arlington', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'DFW area with urban density' },
  { cityName: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2500, primaryUtility: 'Coastal Bend Bays & Estuaries', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Coastal area with salt air corrosion' },
  { cityName: 'Plano', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'North Dallas tech corridor' },
  { cityName: 'Lubbock', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2650, primaryUtility: 'Xcel Energy', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'High plains with wind and dust' },
  { cityName: 'Frisco', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'North Dallas upscale development' },
  { cityName: 'McKinney', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'North Dallas rapid growth area' },
  { cityName: 'Laredo', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2750, primaryUtility: 'City of Laredo Public Utilities', irradianceTier: 'high', climateZone: 'desert', notableFactor: 'Border city with high heat and dust' },
  { cityName: 'Irving', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'DFW airport adjacent area' },
  { cityName: 'Amarillo', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2700, primaryUtility: 'Xcel Energy', irradianceTier: 'high', climateZone: 'temperate', notableFactor: 'Panhandle with significant wind' },
  { cityName: 'Grand Prairie', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2400, primaryUtility: 'Oncor Electric Delivery', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'DFW area with industrial presence' },
  { cityName: 'Round Rock', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2500, primaryUtility: 'Austin Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Austin suburb with tech industry' },
  { cityName: 'Sugar Land', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2200, primaryUtility: 'CenterPoint Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Houston area with high humidity' },
  { cityName: 'Georgetown', state: 'Texas', stateAbbr: 'TX', region: 'Texas', avgAnnualSunHours: 2500, primaryUtility: 'Austin Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'North Austin area with growth' },
];

const SOUTHEAST_CITIES: CityData[] = [
  // Florida
  { cityName: 'Miami', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2450, primaryUtility: 'Florida Power & Light', irradianceTier: 'medium', climateZone: 'tropical', notableFactor: 'Salt air corrosion and hurricane season' },
  { cityName: 'Jacksonville', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2500, primaryUtility: 'JEA (Jacksonville Electric Authority)', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Coastal location with humidity' },
  { cityName: 'Tampa', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2500, primaryUtility: 'Tampa Electric', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Gulf coast humidity and afternoon storms' },
  { cityName: 'Orlando', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2450, primaryUtility: 'Orlando Utilities Commission', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Central Florida heat and humidity' },
  { cityName: 'St. Petersburg', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2500, primaryUtility: 'Tampa Electric', irradianceTier: 'medium', climateZone: 'tropical', notableFactor: 'Coastal town with salt air' },
  { cityName: 'Fort Lauderdale', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2450, primaryUtility: 'Florida Power & Light', irradianceTier: 'medium', climateZone: 'tropical', notableFactor: 'South Florida coastal corrosion' },
  { cityName: 'Cape Coral', state: 'Florida', stateAbbr: 'FL', region: 'Southeast', avgAnnualSunHours: 2500, primaryUtility: 'Florida Power & Light', irradianceTier: 'medium', climateZone: 'tropical', notableFactor: 'Southwest Florida with coastal exposure' },

  // Georgia
  { cityName: 'Atlanta', state: 'Georgia', stateAbbr: 'GA', region: 'Southeast', avgAnnualSunHours: 2300, primaryUtility: 'Georgia Power', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Urban heat island and air pollution' },
  { cityName: 'Savannah', state: 'Georgia', stateAbbr: 'GA', region: 'Southeast', avgAnnualSunHours: 2450, primaryUtility: 'Savannah Electric', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Coastal humidity with oak tree shading' },

  // North Carolina
  { cityName: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC', region: 'Southeast', avgAnnualSunHours: 2350, primaryUtility: 'Duke Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Piedmont region with seasonal variation' },
  { cityName: 'Raleigh', state: 'North Carolina', stateAbbr: 'NC', region: 'Southeast', avgAnnualSunHours: 2350, primaryUtility: 'Duke Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Research Triangle with growing urban area' },
  { cityName: 'Durham', state: 'North Carolina', stateAbbr: 'NC', region: 'Southeast', avgAnnualSunHours: 2350, primaryUtility: 'Duke Energy', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Research Triangle tech hub' },

  // South Carolina
  { cityName: 'Charleston', state: 'South Carolina', stateAbbr: 'SC', region: 'Southeast', avgAnnualSunHours: 2450, primaryUtility: 'Dominion Energy South Carolina', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Historic coastal city with salt air' },
  { cityName: 'Columbia', state: 'South Carolina', stateAbbr: 'SC', region: 'Southeast', avgAnnualSunHours: 2400, primaryUtility: 'Dominion Energy South Carolina', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Capital city with hot summers' },

  // Tennessee
  { cityName: 'Nashville', state: 'Tennessee', stateAbbr: 'TN', region: 'Southeast', avgAnnualSunHours: 2200, primaryUtility: 'Nashville Electric', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Rolling terrain with weather variability' },
  { cityName: 'Memphis', state: 'Tennessee', stateAbbr: 'TN', region: 'Southeast', avgAnnualSunHours: 2250, primaryUtility: 'Memphis Light, Gas & Water', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Mississippi River town with humidity' },

  // Louisiana
  { cityName: 'New Orleans', state: 'Louisiana', stateAbbr: 'LA', region: 'Southeast', avgAnnualSunHours: 2200, primaryUtility: 'Entergy Louisiana', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Gulf coast humidity and storm season' },

  // Alabama
  { cityName: 'Birmingham', state: 'Alabama', stateAbbr: 'AL', region: 'Southeast', avgAnnualSunHours: 2250, primaryUtility: 'Alabama Power', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Appalachian foothills with humidity' },
];

const NORTHEAST_CITIES: CityData[] = [
  // New York
  { cityName: 'New York City', state: 'New York', stateAbbr: 'NY', region: 'Northeast', avgAnnualSunHours: 2250, primaryUtility: 'Con Edison', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Urban density with rooftop restrictions' },
  { cityName: 'Long Island', state: 'New York', stateAbbr: 'NY', region: 'Northeast', avgAnnualSunHours: 2300, primaryUtility: 'LIPA (Long Island Power Authority)', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Suburban sprawl with coastal weather' },
  { cityName: 'Buffalo', state: 'New York', stateAbbr: 'NY', region: 'Northeast', avgAnnualSunHours: 1900, primaryUtility: 'National Grid', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Lake effect snow and cloud cover' },

  // New Jersey
  { cityName: 'Newark', state: 'New Jersey', stateAbbr: 'NJ', region: 'Northeast', avgAnnualSunHours: 2250, primaryUtility: 'PSE&G (Public Service Electric & Gas)', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Urban industrial area' },
  { cityName: 'Jersey City', state: 'New Jersey', stateAbbr: 'NJ', region: 'Northeast', avgAnnualSunHours: 2250, primaryUtility: 'PSE&G', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Hudson River waterfront location' },

  // Pennsylvania
  { cityName: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA', region: 'Northeast', avgAnnualSunHours: 2250, primaryUtility: 'PECO (Exelon)', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Historic city with old tree coverage' },
  { cityName: 'Pittsburgh', state: 'Pennsylvania', stateAbbr: 'PA', region: 'Northeast', avgAnnualSunHours: 2050, primaryUtility: 'Duquesne Light', irradianceTier: 'low', climateZone: 'temperate', notableFactor: 'Appalachian valley with cloud cover' },

  // Massachusetts
  { cityName: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', region: 'Northeast', avgAnnualSunHours: 2150, primaryUtility: 'Eversource Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Coastal city with winter cloud cover' },
  { cityName: 'Worcester', state: 'Massachusetts', stateAbbr: 'MA', region: 'Northeast', avgAnnualSunHours: 2100, primaryUtility: 'Eversource Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Central Massachusetts with variable weather' },

  // Connecticut
  { cityName: 'Hartford', state: 'Connecticut', stateAbbr: 'CT', region: 'Northeast', avgAnnualSunHours: 2100, primaryUtility: 'Eversource Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Connecticut River valley location' },
  { cityName: 'New Haven', state: 'Connecticut', stateAbbr: 'CT', region: 'Northeast', avgAnnualSunHours: 2150, primaryUtility: 'Eversource Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'College town with coastal weather' },

  // Maine
  { cityName: 'Portland', state: 'Maine', stateAbbr: 'ME', region: 'Northeast', avgAnnualSunHours: 1900, primaryUtility: 'Central Maine Power', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Coastal Maine with significant winter cloud' },

  // Rhode Island
  { cityName: 'Providence', state: 'Rhode Island', stateAbbr: 'RI', region: 'Northeast', avgAnnualSunHours: 2150, primaryUtility: 'National Grid', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'New England weather patterns' },

  // Vermont
  { cityName: 'Burlington', state: 'Vermont', stateAbbr: 'VT', region: 'Northeast', avgAnnualSunHours: 2000, primaryUtility: 'Green Mountain Power', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Lake Champlain area with harsh winters' },

  // New Hampshire
  { cityName: 'Manchester', state: 'New Hampshire', stateAbbr: 'NH', region: 'Northeast', avgAnnualSunHours: 2050, primaryUtility: 'Eversource Energy', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'New England with significant snow' },
];

const MIDWEST_CITIES: CityData[] = [
  // Illinois
  { cityName: 'Chicago', state: 'Illinois', stateAbbr: 'IL', region: 'Midwest', avgAnnualSunHours: 2050, primaryUtility: 'ComEd', irradianceTier: 'low', climateZone: 'temperate', notableFactor: 'Lake Michigan effects and urban density' },
  { cityName: 'Springfield', state: 'Illinois', stateAbbr: 'IL', region: 'Midwest', avgAnnualSunHours: 2150, primaryUtility: 'Illinois Public Utilities', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Central Illinois weather patterns' },

  // Ohio
  { cityName: 'Columbus', state: 'Ohio', stateAbbr: 'OH', region: 'Midwest', avgAnnualSunHours: 2100, primaryUtility: 'AES Ohio', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Central Ohio with seasonal variation' },
  { cityName: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH', region: 'Midwest', avgAnnualSunHours: 2050, primaryUtility: 'Duke Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Ohio River valley location' },
  { cityName: 'Cleveland', state: 'Ohio', stateAbbr: 'OH', region: 'Midwest', avgAnnualSunHours: 1950, primaryUtility: 'FirstEnergy', irradianceTier: 'low', climateZone: 'temperate', notableFactor: 'Lake Erie effects with cloud cover' },

  // Indiana
  { cityName: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN', region: 'Midwest', avgAnnualSunHours: 2050, primaryUtility: 'Duke Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Central Midwest with moderate sun' },

  // Michigan
  { cityName: 'Detroit', state: 'Michigan', stateAbbr: 'MI', region: 'Midwest', avgAnnualSunHours: 1950, primaryUtility: 'DTE Energy', irradianceTier: 'low', climateZone: 'temperate', notableFactor: 'Great Lakes cloud effects' },
  { cityName: 'Grand Rapids', state: 'Michigan', stateAbbr: 'MI', region: 'Midwest', avgAnnualSunHours: 1950, primaryUtility: 'Consumers Energy', irradianceTier: 'low', climateZone: 'temperate', notableFactor: 'West Michigan with lake effect weather' },

  // Wisconsin
  { cityName: 'Milwaukee', state: 'Wisconsin', stateAbbr: 'WI', region: 'Midwest', avgAnnualSunHours: 1900, primaryUtility: 'We Energies', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Lake Michigan shoreline with cloud cover' },
  { cityName: 'Madison', state: 'Wisconsin', stateAbbr: 'WI', region: 'Midwest', avgAnnualSunHours: 1950, primaryUtility: 'We Energies', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Capital city with four distinct seasons' },

  // Minnesota
  { cityName: 'Minneapolis', state: 'Minnesota', stateAbbr: 'MN', region: 'Midwest', avgAnnualSunHours: 2000, primaryUtility: 'Xcel Energy', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Twin Cities with significant winter snow' },
  { cityName: 'St. Paul', state: 'Minnesota', stateAbbr: 'MN', region: 'Midwest', avgAnnualSunHours: 2000, primaryUtility: 'Xcel Energy', irradianceTier: 'low', climateZone: 'cold-snow', notableFactor: 'Twin Cities metro area' },

  // Missouri
  { cityName: 'Kansas City', state: 'Missouri', stateAbbr: 'MO', region: 'Midwest', avgAnnualSunHours: 2200, primaryUtility: 'Evergy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Missouri River valley weather' },
  { cityName: 'St. Louis', state: 'Missouri', stateAbbr: 'MO', region: 'Midwest', avgAnnualSunHours: 2150, primaryUtility: 'Ameren Missouri', irradianceTier: 'medium', climateZone: 'humid-subtropical', notableFactor: 'Mississippi River valley location' },

  // Iowa
  { cityName: 'Des Moines', state: 'Iowa', stateAbbr: 'IA', region: 'Midwest', avgAnnualSunHours: 2100, primaryUtility: 'MidAmerican Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Corn belt agriculture with variable weather' },
  { cityName: 'Cedar Rapids', state: 'Iowa', stateAbbr: 'IA', region: 'Midwest', avgAnnualSunHours: 2050, primaryUtility: 'Alliant Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Eastern Iowa with seasonal extremes' },

  // Nebraska
  { cityName: 'Omaha', state: 'Nebraska', stateAbbr: 'NE', region: 'Midwest', avgAnnualSunHours: 2250, primaryUtility: 'Omaha Public Power District', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Great Plains with wind and hail risk' },
];

const NORTHWEST_CITIES: CityData[] = [
  // Washington
  { cityName: 'Seattle', state: 'Washington', stateAbbr: 'WA', region: 'Northwest', avgAnnualSunHours: 1550, primaryUtility: 'City of Seattle', irradianceTier: 'low', climateZone: 'marine-coastal', notableFactor: 'Pacific Northwest rain and cloud' },
  { cityName: 'Spokane', state: 'Washington', stateAbbr: 'WA', region: 'Northwest', avgAnnualSunHours: 2300, primaryUtility: 'Avista', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'East Washington high desert' },
  { cityName: 'Tacoma', state: 'Washington', stateAbbr: 'WA', region: 'Northwest', avgAnnualSunHours: 1600, primaryUtility: 'City of Tacoma', irradianceTier: 'low', climateZone: 'marine-coastal', notableFactor: 'Puget Sound coastal weather' },

  // Oregon
  { cityName: 'Portland', state: 'Oregon', stateAbbr: 'OR', region: 'Northwest', avgAnnualSunHours: 1700, primaryUtility: 'Portland General Electric', irradianceTier: 'low', climateZone: 'marine-coastal', notableFactor: 'Willamette Valley with rain' },
  { cityName: 'Eugene', state: 'Oregon', stateAbbr: 'OR', region: 'Northwest', avgAnnualSunHours: 1650, primaryUtility: 'Springfield Utilities', irradianceTier: 'low', climateZone: 'marine-coastal', notableFactor: 'Southern Willamette Valley' },
  { cityName: 'Bend', state: 'Oregon', stateAbbr: 'OR', region: 'Northwest', avgAnnualSunHours: 2300, primaryUtility: 'City of Bend', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Central Oregon high desert' },

  // Idaho
  { cityName: 'Boise', state: 'Idaho', stateAbbr: 'ID', region: 'Northwest', avgAnnualSunHours: 2400, primaryUtility: 'Idaho Power', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Boise Valley with mountain effects' },
  { cityName: 'Idaho Falls', state: 'Idaho', stateAbbr: 'ID', region: 'Northwest', avgAnnualSunHours: 2200, primaryUtility: 'Idaho Falls Power', irradianceTier: 'medium', climateZone: 'cold-snow', notableFactor: 'Snake River valley with winter snow' },

  // Montana
  { cityName: 'Billings', state: 'Montana', stateAbbr: 'MT', region: 'Northwest', avgAnnualSunHours: 2400, primaryUtility: 'Northwestern Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Northern plains with wind' },
  { cityName: 'Missoula', state: 'Montana', stateAbbr: 'MT', region: 'Northwest', avgAnnualSunHours: 2100, primaryUtility: 'Northwestern Energy', irradianceTier: 'medium', climateZone: 'temperate', notableFactor: 'Rocky Mountain valley location' },
];

const HAWAII_CITIES: CityData[] = [
  { cityName: 'Honolulu', state: 'Hawaii', stateAbbr: 'HI', region: 'Hawaii', avgAnnualSunHours: 2400, primaryUtility: 'Hawaiian Electric Company', irradianceTier: 'medium', climateZone: 'tropical', notableFactor: 'Trade winds and ocean effects' },
  { cityName: 'Maui', state: 'Hawaii', stateAbbr: 'HI', region: 'Hawaii', avgAnnualSunHours: 2500, primaryUtility: 'Hawaiian Electric Company', irradianceTier: 'medium', climateZone: 'tropical', notableFactor: 'Island microclimates' },
  { cityName: 'Kailua-Kona', state: 'Hawaii', stateAbbr: 'HI', region: 'Hawaii', avgAnnualSunHours: 2600, primaryUtility: 'Hawaii Electric Light Company', irradianceTier: 'high', climateZone: 'tropical', notableFactor: 'Hawaii Big Island dry side' },
];

// Combine all city data
const ALL_CITIES = [
  ...SOUTHWEST_CITIES,
  ...CALIFORNIA_CITIES,
  ...TEXAS_CITIES,
  ...SOUTHEAST_CITIES,
  ...NORTHEAST_CITIES,
  ...MIDWEST_CITIES,
  ...NORTHWEST_CITIES,
  ...HAWAII_CITIES,
];

// Helper functions to generate template CTA blocks
function ctaBlock(customHeadline?: string): string {
  const headline = customHeadline || 'Wondering if your solar system is working properly?';
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
  const t = text || 'SolarDoctor monitors your system 24/7 and alerts you when something needs attention.';
  return `
    <div class="my-8 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
      <p class="text-green-800 font-medium mb-2">${t}</p>
      <a href="/check" class="text-green-700 font-semibold hover:text-green-900 underline">Get your free health score &rarr;</a>
    </div>
  `;
}

// Main template function to generate unique blog posts per city
function generateCityBlogPost(city: CityData, index: number): BlogPost {
  const citySlug = city.cityName.toLowerCase().replace(/\s+/g, '-');
  const slug = `solar-panels-not-working-${citySlug}-${city.stateAbbr.toLowerCase()}`;

  // Stagger dates from 2025-06-01 through 2026-02-15
  const totalDays = Math.floor((new Date('2026-02-15').getTime() - new Date('2025-06-01').getTime()) / (1000 * 60 * 60 * 24));
  const daysPerCity = Math.floor(totalDays / ALL_CITIES.length);
  const dateOffset = index * daysPerCity;
  const postDate = new Date('2025-06-01');
  postDate.setDate(postDate.getDate() + dateOffset);
  const dateStr = postDate.toISOString().split('T')[0];

  // Generate climate-specific content
  const climateContext = generateClimateContext(city);
  const localConcerns = generateLocalConcerns(city);
  const whatOwnersShouldDo = generateWhatOwnersShouldDo(city);
  const faqs = generateCityFaqs(city);

  const content = `
    <p class="text-lg text-gray-600 mb-8">If your solar panels aren't producing as expected in ${city.cityName}, ${city.state}, you're not alone. Many homeowners in this area face unique challenges that can silently reduce energy output. Here's what you need to know about solar performance in ${city.cityName} — and what to do about it.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Solar Production in ${city.cityName}</h2>
    <p class="mb-4">${city.cityName} receives approximately <strong>${city.avgAnnualSunHours} hours of sun per year</strong>, which is ${getProductionExpectation(city.irradianceTier)} for a US city. A typical 6 kW system in ${city.cityName} should produce around <strong>${estimateMonthlyProduction(city.avgAnnualSunHours, 6).toLocaleString()} kWh per month</strong> on average.</p>

    <p class="mb-4">However, this is an average. Your actual production varies significantly by season, weather patterns, and system configuration. ${climateContext}</p>

    ${inlineCta(`Don't assume your system is underperforming until you understand what's normal for ${city.cityName}.`)}

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Local Weather and Climate Factors in ${city.cityName}</h2>
    ${localConcerns}

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">${city.primaryUtility ? `Common Issues for ${city.cityName} Solar Owners with ${city.primaryUtility}` : `Common Issues for ${city.cityName} Solar Owners`}</h2>
    <p class="mb-4">In ${city.cityName}, we see several recurring problems that cost homeowners money:</p>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li><strong>Seasonal production variance.</strong> Your winter production in ${city.cityName} may be 40-60% lower than summer. If you're comparing all months equally, you might think something's broken when it's actually normal.</li>
      <li><strong>Shading from trees and buildings.</strong> As seasons change, sun angles shift. Morning or afternoon shade that isn't a problem in summer could significantly impact spring and fall production.</li>
      <li><strong>${getCommonLocalIssue(city)}</strong> This is particularly relevant in ${city.cityName} given our local climate patterns.</li>
      <li><strong>Inverter or optimizer performance degradation.</strong> Over time, hardware can develop efficiency losses. If your system is more than 5 years old, this could account for 10-15% production loss.</li>
      <li><strong>Grid voltage or utility interconnection issues.</strong> ${city.primaryUtility} occasionally implements grid protection settings that limit solar export during high-production periods.</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Is Your ${city.cityName} System Actually Underperforming?</h2>
    <p class="mb-4">Many homeowners see lower-than-expected production numbers and assume something is broken. But without a baseline for comparison, you can't really know. Here's what to check:</p>
    <ol class="list-decimal pl-6 mb-4 space-y-2">
      <li><strong>Compare to your installer's projections.</strong> Your original solar proposal should include a production estimate. Compare your actual output to the "expected production" number for your system size and location.</li>
      <li><strong>Account for seasonal variation.</strong> Don't compare January to July. Instead, compare this January to last January, or this month to the historical average for this month in ${city.cityName}.</li>
      <li><strong>Check your monitoring app regularly.</strong> Most homeowners glance at production data maybe twice a year. If a problem has been developing for 3-6 months, you won't know until your electric bill arrives.</li>
      <li><strong>Look for sudden drops, not gradual changes.</strong> A system that produces 10% less than last year might just be aging. A system that drops 30-50% overnight suggests a hardware failure.</li>
    </ol>

    ${inlineCta('SolarDoctor compares your actual production to the expected amount for your system, location, and season — giving you a simple health score so you always know if something needs attention.')}

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What ${city.cityName} Solar Owners Should Do</h2>
    ${whatOwnersShouldDo}

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Real Cost of Not Monitoring</h2>
    <p class="mb-4">A typical 8 kW system that's underperforming by 20% (due to a failed inverter, string inverter issue, or optimizer failure) costs you roughly <strong>$30-50 per month in lost production</strong>. Over a year, that's $360-600 — more than the cost of a service call.</p>
    <p class="mb-4">If the problem goes unnoticed for 18 months, you've lost over $900 in electricity production. The longer it goes, the worse it gets. This is exactly why continuous monitoring matters.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Your ${city.cityName} System Back to Healthy Production</h2>
    <p class="mb-4">If you suspect your system is underperforming:</p>
    <ol class="list-decimal pl-6 mb-4 space-y-2">
      <li>Start with SolarDoctor to get a baseline health score. It takes 2 minutes and works with any SolarEdge system.</li>
      <li>If your health score is below 75, schedule a service technician to inspect your system. Bring your SolarDoctor report — it shows the production gap clearly.</li>
      <li>Common fixes include replacing a failed power optimizer, cleaning panels, addressing loose electrical connections, or updating inverter firmware.</li>
      <li>Once repairs are made, use SolarDoctor to verify that your health score recovers to the 90-110 range.</li>
    </ol>

    ${ctaBlock(`Is your ${city.cityName} solar system working at full capacity?`)}
  `;

  return {
    slug,
    title: `Solar Panels Not Working in ${city.cityName}, ${city.state}? Here's What to Check`,
    excerpt: `Solar systems in ${city.cityName} face unique challenges. Here's how to know if your ${getStateRegion(city.state)} solar panels are underperforming and what to do about it.`,
    category: 'Local Solar Guide',
    date: dateStr,
    readTime: '7 min read',
    metaDescription: `Solar panels not working properly in ${city.cityName}, ${city.state}? Learn about common ${city.stateAbbr} solar issues, local weather factors, and how SolarDoctor helps monitor your system's health.`,
    content,
    faqs,
  };
}

function generateClimateContext(city: CityData): string {
  switch (city.climateZone) {
    case 'desert':
      return `In ${city.cityName}'s desert climate, intense summer heat can actually reduce panel efficiency. While you get more total sunlight hours, heat degradation means your panels operate at lower efficiency on the hottest days (100°F+). This is normal but important to understand when evaluating production numbers.`;
    case 'humid-subtropical':
      return `${city.cityName}'s humid subtropical climate brings afternoon thunderstorms, especially in summer, that can reduce production on otherwise sunny days. The humidity also reduces panel efficiency compared to drier climates. These are built-in factors that lower your expected production baseline.`;
    case 'temperate':
      return `${city.cityName} has moderate seasonal temperature swings. Spring and fall can produce surprising variations as the sun angle changes rapidly. Winter production drops significantly due to shorter days and lower sun angles, which is completely normal.`;
    case 'cold-snow':
      return `${city.cityName} experiences significant winter snow cover, which completely stops production when panels are covered. You might have 2-3 months where production is extremely low due to snow and short winter days. Spring and fall are your peak production periods.`;
    case 'marine-coastal':
      return `${city.cityName}'s marine layer and coastal fog frequently reduce direct sunlight, especially in morning and early afternoon hours. Summer often sees thick marine layer in the morning that burns off by afternoon. This pattern is different from inland areas and should be factored into your production expectations.`;
    case 'tropical':
      return `${city.cityName}'s tropical climate means consistent year-round sun but frequent afternoon rain and cloud cover. Trade winds and tropical storm season can impact production. The good news: seasonal variation is minimal compared to mainland US cities.`;
    default:
      return '';
  }
}

function generateLocalConcerns(city: CityData): string {
  const concerns: Record<string, string> = {
    'Phoenix, Arizona': '<p class="mb-4"><strong>Desert dust and haboobs.</strong> Dust storms in the Phoenix area can deposit fine dust on panels, reducing output by 5-15%. After a dust storm, panels self-clean with rain within a few days, but you might notice production dips during dusty seasons.</p><p class="mb-4"><strong>Extreme heat degradation.</strong> Summer temperatures exceeding 110°F reduce panel efficiency by 15-25%. Your panels produce more power in spring and fall despite slightly less sunlight, because cooler temperatures mean better efficiency. This seems counterintuitive but is absolutely normal.</p><p class="mb-4"><strong>Monsoon season weather.</strong> Summer monsoons bring sudden afternoon thunderstorms that can reduce production quickly. These are short but intense, and production recovers rapidly.</p>',
    'Los Angeles, California': '<p class="mb-4"><strong>Marine layer and marine inversion.</strong> The coastal marine layer commonly sits over LA in early mornings, reducing production until it burns off by mid-morning or afternoon. This pattern is seasonal and more pronounced in late spring and early summer.</p><p class="mb-4"><strong>Salt air corrosion.</strong> Salt spray from the Pacific Ocean accelerates corrosion on electrical connections and hardware. You might notice slight efficiency losses over 3-5 years of operation, particularly if your system isn\'t regularly cleaned.</p><p class="mb-4"><strong>Smog and air quality.</strong> High-pollution days reduce the clearness of the atmosphere, which reduces direct sunlight reaching panels. This is particularly noticeable during summer smog season.</p>',
    'Houston, Texas': '<p class="mb-4"><strong>High humidity year-round.</strong> Houston\'s tropical humidity reduces the effectiveness of solar panels by 5-10% compared to drier areas. The atmospheric water vapor blocks some solar radiation.</p><p class="mb-4"><strong>Afternoon thunderstorms and cloud cover.</strong> Almost daily summer afternoon thunderstorms can reduce production to zero for 20-60 minutes at a time. This is normal and expected, but production during the hottest part of the day is often interrupted.</p><p class="mb-4"><strong>Coastal tropical effects.</strong> Being close to the Gulf of Mexico means hurricane season (June-November) brings frequent overcast days and heavy rain that reduce production for days at a time.</p>',
    'Seattle, Washington': '<p class="mb-4"><strong>Persistent cloud cover and rain.</strong> The Pacific Northwest\'s reputation for gray skies is real. Seattle averages only 1,550 hours of sun per year, compared to 2,500+ hours in the Southwest. This means your expected production is 40% lower than the national average.</p><p class="mb-4"><strong>Winter darkness.</strong> From November through January, Seattle has very short days with low sun angles. Winter production might be 10-20% of summer production. Don\'t panic if January output looks dramatically low.</p><p class="mb-4"><strong>Moss and algae growth.</strong> The damp climate promotes moss and algae growth on panels, which reduces efficiency. Regular cleaning (1-2 times per year) is more important in Seattle than in most US locations.</p>',
    'Denver, Colorado': '<p class="mb-4"><strong>High altitude and thin atmosphere.</strong> Denver\'s 5,280-foot elevation means thinner atmosphere and actually higher solar irradiance on clear days. This is one of the few places where altitude improves solar output.</p><p class="mb-4"><strong>Spring hail and severe weather.</strong> Afternoon hail storms in spring and early summer can damage panels or reduce production temporarily. The good news: Colorado gets 270+ sunny days per year, among the highest in the nation.</p><p class="mb-4"><strong>Winter snow coverage.</strong> While Denver doesn\'t get blizzards as often as northern Colorado areas, snow coverage happens several times per winter. Panels self-clean when temperatures rise above freezing.</p>',
    'Miami, Florida': '<p class="mb-4"><strong>Salt air corrosion and tropical environment.</strong> South Florida\'s salt spray is particularly corrosive to aluminum frames and electrical connections. This accelerates degradation of your system\'s external components.</p><p class="mb-4"><strong>Hurricane season cloud cover.</strong> June through November brings tropical storm systems that can blanket the area in clouds and rain for days. Production during these months is highly variable.</p><p class="mb-4"><strong>Summer afternoon thunderstorms.</strong> Almost every summer afternoon brings thunderstorms that can reduce production from peak to nearly zero within minutes. These are usually brief but common.</p>',
    'Minneapolis, Minnesota': '<p class="mb-4"><strong>Significant winter snow coverage.</strong> Minneapolis gets 50+ inches of snow per year, and panels may be covered for weeks at a time during winter. Winter production can drop to 5-10% of summer levels.</p><p class="mb-4"><strong>Lake effect cloud cover.</strong> Lake Superior and Minnesota\'s many lakes create local cloud patterns that reduce sunny days.</p><p class="mb-4"><strong>Very short winter days.</strong> From November through January, daylight hours are severely limited (7-9 hours of daylight in December), which dramatically reduces production regardless of sun intensity.</p>',
  };

  // Check for specific city, fall back to climate zone
  if (city.cityName && concerns[`${city.cityName}, ${city.state}`]) {
    return concerns[`${city.cityName}, ${city.state}`];
  }

  switch (city.climateZone) {
    case 'desert':
      return '<p class="mb-4"><strong>Extreme heat impacts.</strong> Peak summer temperatures above 100°F reduce panel efficiency. Dust storms can temporarily reduce production. Clear skies dominate, making consistent production possible year-round.</p><p class="mb-4"><strong>Winter cold and voltage peaks.</strong> Cold mornings can cause DC voltage spikes as panel voltage increases in cold conditions.</p>';
    case 'humid-subtropical':
      return '<p class="mb-4"><strong>Afternoon thunderstorms.</strong> Summer brings frequent afternoon convection that reduces production during the hottest part of the day.</p><p class="mb-4"><strong>High humidity year-round.</strong> Atmospheric moisture reduces direct solar radiation reaching panels.</p>';
    case 'temperate':
      return '<p class="mb-4"><strong>Four distinct seasons.</strong> Winter production is 30-50% lower than summer due to lower sun angle and shorter days. This is completely normal and not a sign of malfunction.</p><p class="mb-4"><strong>Spring and fall variations.</strong> Rapid seasonal changes can create unexpected production patterns as sun angles shift quickly.</p>';
    case 'cold-snow':
      return '<p class="mb-4"><strong>Winter snow coverage.</strong> Heavy snow can completely cover panels for weeks, stopping all production. Panels self-clean as temperature rises, but you should clear heavy snow buildup manually if it persists.</p><p class="mb-4"><strong>Very short winter days.</strong> Daylight hours are severely limited in winter, reducing production regardless of weather.</p>';
    case 'marine-coastal':
      return '<p class="mb-4"><strong>Marine layer and fog.</strong> Coastal fog frequently reduces direct sunlight, especially mornings and early afternoons.</p><p class="mb-4"><strong>Salt air corrosion.</strong> Salt spray accelerates corrosion of electrical connections and aluminum components.</p>';
    case 'tropical':
      return '<p class="mb-4"><strong>Consistent year-round sun.</strong> The benefit of tropical climates is minimal seasonal variation. Your production should be relatively consistent month-to-month.</p><p class="mb-4"><strong>Afternoon rain and cloud cover.</strong> Tropical regions experience frequent afternoon rain that can temporarily interrupt production.</p>';
    default:
      return '<p class="mb-4">Local weather patterns significantly impact solar production in your area.</p>';
  }
}

function generateWhatOwnersShouldDo(city: CityData): string {
  return `<p class="mb-4">If you live in ${city.cityName} and want to ensure your solar system is performing at its best:</p>
    <ol class="list-decimal pl-6 mb-4 space-y-2">
      <li><strong>Establish a production baseline.</strong> Your first month is NOT a baseline for comparison. Use 3-6 months of data to understand your average production pattern. Once you know what's normal for ${city.cityName}, you can spot unusual drops.</li>
      <li><strong>Monitor seasonally, not monthly.</strong> Don't expect January production to match July. Instead, compare January to January, and understand that ${getSeasonalExpectation(city)} in this area.</li>
      <li><strong>Use SolarDoctor to track health over time.</strong> A simple health score that accounts for ${city.cityName}'s location, season, and system size tells you instantly if something needs attention.</li>
      <li><strong>Schedule preventative maintenance annually.</strong> Have a solar technician inspect your system once per year, preferably in spring. They can catch loose connections, degraded seals, and early warning signs before they become expensive failures.</li>
      <li><strong>Clean your panels appropriately for ${city.cityName}'s climate.</strong> ${getCleaningRecommendation(city)}</li>
    </ol>`;
}

function generateCityFaqs(city: CityData): FaqItem[] {
  return [
    {
      question: `What's normal solar production for ${city.cityName}?`,
      answer: `A typical 6 kW system in ${city.cityName} should produce approximately ${estimateMonthlyProduction(city.avgAnnualSunHours, 6).toLocaleString()} kWh per month on average. However, this varies significantly by season. Winter production in ${city.cityName} is typically 30-50% lower than summer due to lower sun angles and shorter days. Compare your production to the expected amount for your specific month and season, not against a single monthly average.`,
    },
    {
      question: `How often should I have my solar panels cleaned in ${city.cityName}?`,
      answer: `${getCleaningAdvice(city)} In ${city.cityName}, the local climate and soiling patterns mean you should evaluate cleaning needs based on actual production losses. Use SolarDoctor to track if your health score drops gradually over months — if it does, panel cleaning might recover 5-10% of lost production.`,
    },
    {
      question: `My ${city.primaryUtility} bill hasn't gone down. Is my solar system broken?`,
      answer: `Not necessarily. Several factors could explain this: (1) You might be producing at expected levels, but your electricity consumption is higher than anticipated; (2) Your utility's rates might have increased faster than your production value; (3) Your system might have a timing mismatch — producing power during low-price hours while you consume power during high-price hours. Use SolarDoctor to compare your actual production to what's expected for your system size and location in ${city.cityName}. If production is healthy, the issue is likely consumption or rate-related, not system-related.`,
    },
  ];
}

function getProductionExpectation(tier: 'high' | 'medium' | 'low'): string {
  switch (tier) {
    case 'high':
      return 'high — you have excellent solar resources';
    case 'medium':
      return 'moderate — your solar resources are average for the US';
    case 'low':
      return 'low — you have less sun than most US locations and should expect lower absolute production';
  }
}

function getCommonLocalIssue(city: CityData): string {
  switch (city.climateZone) {
    case 'desert':
      return 'Heat-related efficiency losses in summer';
    case 'humid-subtropical':
      return 'Afternoon thunderstorm production interruptions';
    case 'temperate':
      return 'Seasonal production swings from winter to summer';
    case 'cold-snow':
      return 'Winter snow coverage stopping production for days at a time';
    case 'marine-coastal':
      return 'Morning fog and marine layer reducing production';
    case 'tropical':
      return 'Frequent afternoon rain interrupting production';
    default:
      return 'Local weather patterns affecting output';
  }
}

function getStateRegion(state: string): string {
  const stateToRegion: Record<string, string> = {
    'Arizona': 'Arizona', 'Nevada': 'Nevada', 'New Mexico': 'New Mexico', 'Utah': 'Utah', 'Colorado': 'Colorado',
    'California': 'California', 'Texas': 'Texas', 'Florida': 'Florida', 'Georgia': 'Georgia',
    'North Carolina': 'Carolina', 'South Carolina': 'Carolina', 'Tennessee': 'Tennessee', 'Louisiana': 'Louisiana',
    'Alabama': 'Alabama', 'New York': 'New York', 'New Jersey': 'New Jersey', 'Pennsylvania': 'Pennsylvania',
    'Massachusetts': 'Massachusetts', 'Connecticut': 'Connecticut', 'Maine': 'Maine', 'Rhode Island': 'Rhode Island',
    'Vermont': 'Vermont', 'New Hampshire': 'New Hampshire', 'Illinois': 'Illinois', 'Ohio': 'Ohio',
    'Indiana': 'Indiana', 'Michigan': 'Michigan', 'Wisconsin': 'Wisconsin', 'Minnesota': 'Minnesota',
    'Missouri': 'Missouri', 'Iowa': 'Iowa', 'Nebraska': 'Nebraska', 'Washington': 'Washington',
    'Oregon': 'Oregon', 'Idaho': 'Idaho', 'Montana': 'Montana', 'Hawaii': 'Hawaii',
  };
  return stateToRegion[state] || state;
}

function estimateMonthlyProduction(sunHours: number, systemSizeKw: number): number {
  // Rough formula: sun hours per year / 12 * 4 kWh per kW per 1000 sun hours per year
  return Math.round((sunHours / 12) * systemSizeKw * 0.85);
}

function getSeasonalExpectation(city: CityData): string {
  switch (city.climateZone) {
    case 'desert':
      return 'summer actually produces less per day than spring/fall due to heat degradation';
    case 'humid-subtropical':
      return 'spring and fall are often more productive than summer due to thunderstorms and humidity';
    case 'temperate':
      return 'summer production should be 2-3x winter production';
    case 'cold-snow':
      return 'winter production can be 10-20% of summer production due to snow and short days';
    case 'marine-coastal':
      return 'winter and spring often surprise homeowners with relatively good production once marine layer burns off';
    case 'tropical':
      return 'production is relatively consistent year-round with minimal seasonal variation';
    default:
      return 'seasonal patterns affect production throughout the year';
  }
}

function getCleaningRecommendation(city: CityData): string {
  switch (city.climateZone) {
    case 'desert':
      return 'In desert climates with dust storms, cleaning 1-2 times per year is reasonable, especially after major dust events.';
    case 'humid-subtropical':
      return 'With frequent rain and thunderstorms, panels typically self-clean. Cleaning once per year in spring is usually sufficient.';
    case 'temperate':
      return 'Panels often self-clean with regular rain. Schedule cleaning every 18-24 months or if you notice production drops.';
    case 'cold-snow':
      return 'Winter snow cover is the main concern. Cleaning is less about dust and more about removing heavy snow buildup if needed.';
    case 'marine-coastal':
      return 'Salt spray accelerates soiling and corrosion. Cleaning 1-2 times per year is recommended to prevent salt buildup and efficiency loss.';
    case 'tropical':
      return 'Frequent rain provides natural cleaning. Annual cleaning is usually sufficient unless there\'s visible bird droppings or debris.';
    default:
      return 'Evaluate cleaning needs based on visible soiling and production drops.';
  }
}

function getCleaningAdvice(city: CityData): string {
  switch (city.climateZone) {
    case 'desert':
      return 'Desert dust and pollen are the main soiling concerns. Cleaning 1-2 times per year, especially after monsoon or dust storm season, is reasonable if you notice efficiency drops.';
    case 'humid-subtropical':
      return 'Rain typically cleans panels naturally. Professional cleaning 1-2 times per year is adequate unless you see bird droppings or heavy debris.';
    case 'temperate':
      return 'Natural rainfall keeps panels relatively clean. Clean every 18-24 months or when you notice a production drop that coincides with visible panel soiling.';
    case 'cold-snow':
      return 'Snow is the main production blocker, not dust. Manually clearing heavy snow is more important than regular cleaning. Spring cleaning helps after winter.';
    case 'marine-coastal':
      return 'Salt spray is more damaging than dust. Clean 2 times per year, especially before and after peak summer to prevent salt buildup and corrosion.';
    case 'tropical':
      return 'Rain provides frequent natural cleaning. Annual cleaning is typically sufficient. Watch for bird droppings, which should be cleaned promptly as they block sunlight completely.';
    default:
      return 'Clean 1-2 times per year based on visible soiling and production monitoring.';
  }
}

// Generate all city blog posts
export const cityBlogPosts: BlogPost[] = ALL_CITIES.map((city, index) => generateCityBlogPost(city, index));
