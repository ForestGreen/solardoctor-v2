import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = body.event || body.eventName;
    const properties = body.properties;

    if (!event) {
      return NextResponse.json({ error: "event is required" }, { status: 400 });
    }

    const supabase = createServiceRoleClient();
    const referrer = request.headers.get("referer") || "";
    const userAgent = request.headers.get("user-agent") || "";

    const { error } = await supabase.from("analytics_events").insert({
      event_name: event,
      properties: properties || {},
      referrer,
      user_agent: userAgent,
      page_url: properties?.page || properties?.url || "",
      created_at: new Date().toISOString(),
    });

    if (error) {
      if (error.code === "42P01") {
        return NextResponse.json({ ok: true, saved: false });
      }
      console.error("Track event error:", error);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
