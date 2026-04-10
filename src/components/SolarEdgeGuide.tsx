"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink, Copy, Check } from "lucide-react";

export function SolarEdgeGuide({ onClose }: { onClose?: () => void }) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  function copyText(text: string, step: number) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStep(step);
      setTimeout(() => setCopiedStep(null), 2000);
    });
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-green-50 px-5 py-4 border-b border-green-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-green-900">How to Find Your SolarEdge Site ID & API Key</h3>
            <p className="text-xs text-green-700 mt-0.5">Takes about 2 minutes. You only need to do this once.</p>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-green-600 hover:text-green-800 text-sm">Hide</button>
          )}
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {/* Step 1: Go to SolarEdge Portal */}
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">Go to the SolarEdge Monitoring Portal</h4>
              <a
                href="https://monitoring.solaredge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-3"
              >
                monitoring.solaredge.com
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <p className="text-sm text-gray-600">Log in with the email and password you used when your system was installed. If you don&apos;t have an account, your installer may have set one up for you.</p>
            </div>
          </div>
        </div>

        {/* Step 2: Find Site ID */}
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">Find your Site ID in the URL</h4>
              <p className="text-sm text-gray-600 mb-3">After logging in, look at the URL in your browser&apos;s address bar. Your Site ID is the number after <code className="bg-gray-100 px-1 rounded text-xs">/site/</code>.</p>

              {/* Mock browser URL bar */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-3">
                <div className="bg-gray-100 px-3 py-1.5 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-500 font-mono">
                    monitoring.solaredge.com/solaredge-web/p/site/<span className="bg-yellow-200 text-yellow-900 font-bold px-0.5 rounded">1389112</span>/dashboard
                  </div>
                </div>
                <div className="px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
                    <span className="text-xs text-gray-600">The highlighted number is your <strong>Site ID</strong></span>
                  </div>
                  <button
                    onClick={() => copyText("1389112", 2)}
                    className="text-xs text-green-600 hover:text-green-700 flex items-center gap-1"
                  >
                    {copiedStep === 2 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copiedStep === 2 ? "Copied!" : "Copy example"}
                  </button>
                </div>
              </div>

              {/* Arrow annotation */}
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
                <span className="text-yellow-600 text-lg">&#8593;</span>
                <p className="text-xs text-yellow-800">
                  Your Site ID is a <strong>7-digit number</strong> (e.g., 1389112). Copy this and paste it into the Site ID field above.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Navigate to API Access */}
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">Navigate to API Access</h4>
              <p className="text-sm text-gray-600 mb-3">Click through these menu items in order:</p>

              {/* Mock navigation path */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 mb-3">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="bg-white border border-gray-200 rounded px-3 py-1.5 font-medium text-gray-700">Admin</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="bg-white border border-gray-200 rounded px-3 py-1.5 font-medium text-gray-700">Site Access</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="bg-green-100 border-2 border-green-500 rounded px-3 py-1.5 font-medium text-green-700 relative">
                    API Access
                    {/* Pulsing indicator */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  </span>
                </div>
              </div>

              {/* Mock portal navigation */}
              <div className="bg-gray-800 rounded-lg overflow-hidden mb-3">
                <div className="flex text-xs">
                  <div className="px-4 py-2.5 text-gray-400 hover:text-white">Dashboard</div>
                  <div className="px-4 py-2.5 text-gray-400 hover:text-white">Layout</div>
                  <div className="px-4 py-2.5 bg-gray-700 text-white font-medium border-b-2 border-green-500">Admin</div>
                  <div className="px-4 py-2.5 text-gray-400">Alerts</div>
                </div>
                <div className="bg-gray-900 px-4 py-2 flex gap-4 text-xs border-t border-gray-700">
                  <span className="text-gray-400">Users</span>
                  <span className="text-white font-medium border-b border-green-400 pb-0.5">Site Access</span>
                  <span className="text-gray-400">Settings</span>
                </div>
                <div className="bg-white px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <input type="checkbox" checked readOnly className="accent-green-600" />
                    <span className="text-xs font-medium text-gray-700">API Access</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">&#8592; Enable this</span>
                  </div>
                  <div className="text-[10px] text-gray-500 ml-6">Check this box to enable API access for your site</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <span className="text-blue-500 text-sm">&#9432;</span>
                <p className="text-xs text-blue-800">
                  If you don&apos;t see &quot;Admin&quot; in the top menu, your account may not have admin privileges. Contact your installer or SolarEdge support to request access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Copy API Key */}
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">Copy your API Key</h4>
              <p className="text-sm text-gray-600 mb-3">Once API Access is enabled, you&apos;ll see your API key. It&apos;s a long string of letters and numbers.</p>

              {/* Mock API key display */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-3">
                <div className="px-4 py-3 border-b border-gray-200">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Your API Key</span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <code className="text-sm font-mono bg-yellow-50 border border-yellow-200 rounded px-2 py-1 text-yellow-900 flex-1 overflow-hidden">
                    AEME1A9NVQ7K2L8P3R4S5T6U7V8W9X0Y
                  </code>
                  <button
                    onClick={() => copyText("AEME1A9NVQ7K2L8P3R4S5T6U7V8W9X0Y", 4)}
                    className="flex-shrink-0 bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-green-700 flex items-center gap-1"
                  >
                    {copiedStep === 4 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copiedStep === 4 ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="px-4 py-2 bg-green-50 flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
                  <span className="text-xs text-green-700">Copy this key and paste it into the API Key field above</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <span className="text-amber-500 text-sm">&#9888;</span>
                <p className="text-xs text-amber-800">
                  Your API key is <strong>read-only</strong> — it can only view your production data. It cannot change settings, turn off your system, or access personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom help */}
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Still stuck? Email <a href="mailto:hello@getsolardoctor.com" className="text-green-600 underline">hello@getsolardoctor.com</a> and we&apos;ll help you find your credentials.
        </p>
      </div>
    </div>
  );
}
