// Email utilities using Resend API
// Sends weekly health digest emails to subscribers

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = "SolarDoctor <alerts@getsolardoctor.com>";

interface DigestEmailData {
  recipientEmail: string;
  systemName: string;
  location: string;
  healthScore: number;
  status: string;
  currentPowerKw: number;
  estimatedLostKwh: number;
  estimatedLostDollars: number;
  topIssue?: string;
  unsubscribeUrl: string;
}

function getStatusColor(score: number): string {
  if (score >= 110) return "#2563EB"; // blue
  if (score >= 90) return "#16A34A"; // green
  if (score >= 75) return "#CA8A04"; // yellow
  if (score >= 50) return "#EA580C"; // orange
  return "#DC2626"; // red
}

function getStatusLabel(score: number): string {
  if (score >= 110) return "Overperforming";
  if (score >= 90) return "Healthy";
  if (score >= 75) return "Underperforming";
  if (score >= 50) return "Problem Detected";
  return "Critical";
}

function generateDigestHtml(data: DigestEmailData): string {
  const statusColor = getStatusColor(data.healthScore);
  const statusLabel = getStatusLabel(data.healthScore);
  const scoreRounded = Math.round(data.healthScore);
  const hasIssue = data.estimatedLostKwh > 0;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Solar Health Report</title>
</head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:24px;">
      <span style="font-size:20px;font-weight:bold;color:#15803d;">SolarDoctor</span>
      <p style="color:#6b7280;font-size:13px;margin:4px 0 0;">Weekly Health Report</p>
    </div>

    <!-- Score Card -->
    <div style="background:white;border-radius:16px;padding:32px 24px;text-align:center;border:1px solid #e5e7eb;margin-bottom:16px;">
      <p style="color:#6b7280;font-size:13px;margin:0 0 4px;">${data.systemName} · ${data.location}</p>

      <div style="display:inline-block;width:96px;height:96px;border-radius:50%;background:${statusColor}15;border:3px solid ${statusColor};line-height:96px;margin:16px 0;">
        <span style="font-size:36px;font-weight:bold;color:${statusColor};">${scoreRounded}</span>
      </div>

      <p style="font-size:14px;font-weight:600;color:${statusColor};margin:0;">${statusLabel}</p>
    </div>

    <!-- Stats Row -->
    <div style="background:white;border-radius:12px;padding:16px 20px;border:1px solid #e5e7eb;margin-bottom:16px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="text-align:center;padding:8px;">
            <p style="font-size:20px;font-weight:bold;color:#111;margin:0;">${data.currentPowerKw.toFixed(1)} kW</p>
            <p style="font-size:11px;color:#6b7280;margin:4px 0 0;">Current Output</p>
          </td>
          <td style="text-align:center;padding:8px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <p style="font-size:20px;font-weight:bold;color:${hasIssue ? '#EA580C' : '#16A34A'};margin:0;">${hasIssue ? '-' : ''}${data.estimatedLostKwh.toLocaleString()} kWh</p>
            <p style="font-size:11px;color:#6b7280;margin:4px 0 0;">Lost Production</p>
          </td>
          <td style="text-align:center;padding:8px;">
            <p style="font-size:20px;font-weight:bold;color:${hasIssue ? '#DC2626' : '#16A34A'};margin:0;">${hasIssue ? '-$' : '$'}${data.estimatedLostDollars.toLocaleString()}</p>
            <p style="font-size:11px;color:#6b7280;margin:4px 0 0;">Lost Savings</p>
          </td>
        </tr>
      </table>
    </div>

    ${hasIssue ? `
    <!-- Alert Box -->
    <div style="background:#FFF7ED;border:1px solid #FDBA74;border-radius:12px;padding:16px 20px;margin-bottom:16px;">
      <p style="font-size:14px;font-weight:600;color:#9A3412;margin:0 0 4px;">⚠️ Action Recommended</p>
      <p style="font-size:13px;color:#9A3412;margin:0;">
        Your system is producing less than expected. ${data.topIssue || 'Check your inverter for error codes and ensure panels are clean.'}
      </p>
    </div>
    ` : `
    <!-- All Good Box -->
    <div style="background:#F0FDF4;border:1px solid #86EFAC;border-radius:12px;padding:16px 20px;margin-bottom:16px;">
      <p style="font-size:14px;font-weight:600;color:#166534;margin:0 0 4px;">✅ System Healthy</p>
      <p style="font-size:13px;color:#166534;margin:0;">
        Your solar system is performing as expected. No action needed.
      </p>
    </div>
    `}

    <!-- CTA -->
    <div style="text-align:center;margin:24px 0;">
      <a href="https://www.getsolardoctor.com/check" style="display:inline-block;background:#16A34A;color:white;padding:12px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
        View Full Report →
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding-top:24px;border-top:1px solid #e5e7eb;">
      <p style="font-size:11px;color:#9ca3af;margin:0;">
        Sent by <a href="https://www.getsolardoctor.com" style="color:#16A34A;text-decoration:none;">SolarDoctor</a> · Free solar monitoring
      </p>
      <p style="font-size:11px;color:#9ca3af;margin:8px 0 0;">
        <a href="${data.unsubscribeUrl}" style="color:#9ca3af;text-decoration:underline;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendDigestEmail(data: DigestEmailData): Promise<boolean> {
  if (!RESEND_API_KEY || RESEND_API_KEY === "your-resend-key-here") {
    console.log("Resend API key not configured — skipping email");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: data.recipientEmail,
        subject: `Solar Health Score: ${Math.round(data.healthScore)} — ${getStatusLabel(data.healthScore)}`,
        html: generateDigestHtml(data),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send digest email:", error);
    return false;
  }
}

export async function sendWelcomeEmail(email: string, systemName: string): Promise<boolean> {
  if (!RESEND_API_KEY || RESEND_API_KEY === "your-resend-key-here") {
    console.log("Resend API key not configured — skipping welcome email");
    return false;
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
    <div style="text-align:center;margin-bottom:24px;">
      <span style="font-size:20px;font-weight:bold;color:#15803d;">SolarDoctor</span>
    </div>
    <div style="background:white;border-radius:16px;padding:32px 24px;border:1px solid #e5e7eb;">
      <h2 style="font-size:18px;color:#111;margin:0 0 12px;">You're all set! 🎉</h2>
      <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0 0 16px;">
        We'll send you a weekly health report for <strong>${systemName}</strong> every Monday morning. If your system's score drops significantly, we'll alert you immediately.
      </p>
      <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0 0 16px;">
        <strong>What we monitor:</strong>
      </p>
      <ul style="font-size:14px;color:#4b5563;line-height:1.8;padding-left:20px;margin:0 0 16px;">
        <li>Monthly production vs expected output</li>
        <li>Sudden drops in performance</li>
        <li>Estimated lost production and savings</li>
      </ul>
      <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0;">
        No spam, no upsells. Just your solar health score, once a week.
      </p>
    </div>
    <div style="text-align:center;padding-top:24px;">
      <p style="font-size:11px;color:#9ca3af;">
        <a href="https://www.getsolardoctor.com" style="color:#16A34A;text-decoration:none;">SolarDoctor</a> · Free solar monitoring
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: "Welcome to SolarDoctor — Your Weekly Health Reports Are Set Up",
        html,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}
