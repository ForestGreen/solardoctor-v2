# Open Graph Image Generator API

Dynamic social preview image generation for SolarDoctor using Next.js ImageResponse.

## Endpoint

`GET /api/og`

## Templates

### 1. Report Template (default)

Generates a health score card with system status.

**Parameters:**
- `score` (number) - Health score 0-100
- `status` (string) - System status: "Healthy", "Underperforming", "Problem", "Critical", or "Overperforming"
- `location` (string) - System location (e.g., "Phoenix, AZ")
- `lost` (string) - Annual revenue lost in dollars (optional)

**Example:**
```
GET /api/og?score=85&status=healthy&location=Phoenix,AZ&lost=127
GET /api/og?score=42&status=underperforming&location=New York, NY
GET /api/og?score=15&status=critical&location=Los Angeles, CA&lost=1500
```

**Features:**
- Color-coded score circle based on status:
  - Green (#10b981): Healthy
  - Yellow (#eab308): Underperforming
  - Red (#ef4444): Problem/Critical
  - Blue (#3b82f6): Overperforming
- White gradient background with subtle green tint
- SolarDoctor logo (sun emoji + text)
- Large score display
- Location information
- Optional lost revenue display

---

### 2. Blog Template

Generates a blog post preview card.

**Parameters:**
- `type=blog` (required)
- `title` (string) - Blog post title

**Example:**
```
GET /api/og?type=blog&title=Is Your Solar System Working?
GET /api/og?type=blog&title=5 Tips to Maximize Solar Panel Efficiency
```

**Features:**
- Clean white background
- SolarDoctor branding
- Large bold title with center alignment
- Blog URL footer

---

### 3. Inverter Template

Generates a troubleshooting guide preview card.

**Parameters:**
- `type=inverter` (required)
- `model` (string) - Inverter model number

**Example:**
```
GET /api/og?type=inverter&model=SE7600H-US
GET /api/og?type=inverter&model=SMA-7.7-US
```

**Features:**
- Tech-inspired gradient background with repeating pattern
- SolarDoctor branding
- Inverter model display in blue
- "Troubleshooting Guide" subtitle
- Website URL footer

---

## Technical Details

- **Framework:** Next.js 14.2.20
- **Image Size:** 1200x630px (standard OG image size)
- **Runtime:** Edge Runtime for optimal performance
- **Font:** System fonts (no custom font loading required)
- **Styling:** Inline CSS via React style objects
- **Layout:** Flexbox (Satori compatible)

## Usage in Meta Tags

```html
<!-- Report Card -->
<meta property="og:image" content="https://yourdomain.com/api/og?score=85&status=healthy&location=Phoenix,AZ" />

<!-- Blog Post -->
<meta property="og:image" content="https://yourdomain.com/api/og?type=blog&title=Solar Energy Guide" />

<!-- Inverter Guide -->
<meta property="og:image" content="https://yourdomain.com/api/og?type=inverter&model=SE7600H-US" />
```

## Error Handling

If any error occurs during image generation, a fallback image with the SolarDoctor logo is returned.

## Dependencies

- `next` (^14.2.20) - Framework
- `next/og` - ImageResponse for server-side image generation

Note: `next/og` is a built-in Next.js module and does not require additional installation.
