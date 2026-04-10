"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/tracking";

interface ReportShareCardProps {
  shareUrl: string;
  shareText: string;
  score: number;
  status: string;
  lostDollars: number;
}

export function ReportShareCard({
  shareUrl,
  shareText,
  score,
  status,
  lostDollars,
}: ReportShareCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      trackEvent("report_share", {
        method: "copy_link",
        score,
        status,
        lost_dollars: lostDollars,
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function trackShare(method: string) {
    trackEvent("report_share", {
      method,
      score,
      status,
      lost_dollars: lostDollars,
    });
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        Share With Your Installer Or Neighbor
      </h3>
      <p className="text-sm text-gray-600 mb-2">
        Show the estimated savings at risk and help someone else catch a problem
        before the next electric bill.
      </p>
      <p className="text-xs text-gray-500 mb-5">
        Best use cases: send to your installer for service, post in your
        neighborhood group, or compare with a nearby solar owner.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}&quote=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShare("facebook")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Share on Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShare("x")}
          className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-600"
        >
          Share on X
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(
            "My SolarDoctor report"
          )}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`}
          onClick={() => trackShare("email")}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900"
        >
          Email Report
        </a>
      </div>
      <button
        onClick={handleCopy}
        className="mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
      >
        {copied ? "Link copied!" : "Copy link"}
      </button>
    </div>
  );
}
