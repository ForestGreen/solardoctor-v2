"use client";

export type TrackingProperties = Record<string, unknown>;

export async function trackEvent(
  event: string,
  properties?: TrackingProperties
): Promise<void> {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, properties }),
      keepalive: true,
    });
  } catch {
    // Tracking should never break the user experience.
  }
}
