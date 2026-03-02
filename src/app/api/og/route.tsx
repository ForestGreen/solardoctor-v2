import { ImageResponse } from "next/og";

export const runtime = "edge";

type OGImageType = "report" | "blog" | "inverter";

interface OGParams {
  type?: OGImageType;
  score?: string;
  status?: string;
  location?: string;
  lost?: string;
  title?: string;
  model?: string;
}

function getStatusColor(status: string): string {
  const statusLower = status?.toLowerCase() || "";
  if (statusLower.includes("healthy")) return "#10b981";
  if (statusLower.includes("underperforming")) return "#eab308";
  if (statusLower.includes("problem") || statusLower.includes("critical"))
    return "#ef4444";
  if (statusLower.includes("overperforming")) return "#3b82f6";
  return "#10b981";
}

function ReportOGImage(params: OGParams) {
  const score = parseInt(params.score || "0");
  const status = params.status || "Unknown";
  const location = params.location || "Your Location";
  const lost = params.lost || "";

  const statusColor = getStatusColor(status);

  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to bottom, white 70%, rgba(16, 185, 129, 0.1) 100%)",
        padding: "40px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        <span>☀️</span>
        <span>SolarDoctor</span>
      </div>

      {/* Score Circle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          backgroundColor: statusColor,
          boxShadow: `0 10px 40px ${statusColor}40`,
        }}
      >
        <div
          style={{
            fontSize: "120px",
            fontWeight: "900",
            color: "white",
            lineHeight: "1",
          }}
        >
          {score}
        </div>
      </div>

      {/* Status and Location */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#1f2937",
          }}
        >
          {status}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#6b7280",
          }}
        >
          {location}
        </div>
        {lost && (
          <div
            style={{
              fontSize: "20px",
              color: "#ef4444",
              fontWeight: "600",
            }}
          >
            Lost: ${lost} this year
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          fontSize: "20px",
          color: "#6b7280",
          textAlign: "center",
        }}
      >
        Get your free health score at getsolardoctor.com
      </div>
    </div>
  );
}

function BlogOGImage(params: OGParams) {
  const title = params.title || "Solar Blog";

  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
        padding: "60px 80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          fontSize: "36px",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        <span>☀️</span>
        <span>SolarDoctor</span>
      </div>

      {/* Blog Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "52px",
          fontWeight: "900",
          color: "#1f2937",
          textAlign: "center",
          lineHeight: "1.2",
          maxWidth: "1000px",
        }}
      >
        {title}
      </div>

      {/* Footer URL */}
      <div
        style={{
          fontSize: "24px",
          color: "#6b7280",
          fontWeight: "600",
        }}
      >
        getsolardoctor.com/blog
      </div>
    </div>
  );
}

function InverterOGImage(params: OGParams) {
  const model = params.model || "Inverter";

  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(135deg, white 0%, rgba(59, 130, 246, 0.05) 100%)",
        padding: "60px 80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.03) 10px, rgba(59, 130, 246, 0.03) 20px)",
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          fontSize: "36px",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        <span>☀️</span>
        <span>SolarDoctor</span>
      </div>

      {/* Center Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#3b82f6",
            textAlign: "center",
          }}
        >
          {model}
        </div>
        <div
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#1f2937",
            textAlign: "center",
          }}
        >
          Troubleshooting Guide
        </div>
      </div>

      {/* Footer URL */}
      <div
        style={{
          fontSize: "24px",
          color: "#6b7280",
          fontWeight: "600",
        }}
      >
        getsolardoctor.com
      </div>
    </div>
  );
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract all parameters
    const params: OGParams = {
      type: (searchParams.get("type") as OGImageType) || "report",
      score: searchParams.get("score") || undefined,
      status: searchParams.get("status") || undefined,
      location: searchParams.get("location") || undefined,
      lost: searchParams.get("lost") || undefined,
      title: searchParams.get("title") || undefined,
      model: searchParams.get("model") || undefined,
    };

    let imageComponent;

    switch (params.type) {
      case "blog":
        imageComponent = <BlogOGImage {...params} />;
        break;
      case "inverter":
        imageComponent = <InverterOGImage {...params} />;
        break;
      case "report":
      default:
        imageComponent = <ReportOGImage {...params} />;
        break;
    }

    return new ImageResponse(imageComponent, {
      width: 1200,
      height: 630,
    });
  } catch (error) {
    console.error("OG image generation error:", error);
    // Return a simple fallback image on error
    return new ImageResponse(
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          fontSize: "48px",
          fontWeight: "bold",
          color: "#1f2937",
        }}
      >
        SolarDoctor
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
