import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy - SolarDoctor",
  description: "How SolarDoctor collects, uses, and protects your personal information and solar system data.",
  alternates: { canonical: "https://www.getsolardoctor.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav variant="minimal" />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 10, 2026</p>

        <h2>What We Collect</h2>
        <p>SolarDoctor collects the following information to provide our solar monitoring service:</p>
        <ul>
          <li><strong>Account information:</strong> Email address and password when you create an account.</li>
          <li><strong>Solar system credentials:</strong> Your SolarEdge Site ID and API Key, or Enphase OAuth access tokens. These are used solely to fetch your solar production data from your inverter manufacturer&apos;s API.</li>
          <li><strong>Solar production data:</strong> Monthly and daily energy production figures retrieved from your inverter&apos;s monitoring system.</li>
          <li><strong>System metadata:</strong> System capacity, location (city/state/zip), panel type, and installation date — auto-discovered from your inverter API.</li>
          <li><strong>Usage data:</strong> Pages visited, features used, and health check results (via Vercel Analytics). No personally identifiable information is included in analytics.</li>
        </ul>

        <h2>How We Use Your Data</h2>
        <ul>
          <li><strong>Health score calculation:</strong> We compare your actual production against expected output (via NREL PVWatts) to generate your health score.</li>
          <li><strong>Email alerts:</strong> If you opt in, we send health score updates and underperformance alerts to your email address.</li>
          <li><strong>Shareable reports:</strong> When you generate a report, it&apos;s stored with a unique ID so you can share it. Reports do not include your credentials.</li>
          <li><strong>Service improvement:</strong> Aggregated, anonymized data may be used to improve our algorithms and content.</li>
        </ul>

        <h2>How We Protect Your Data</h2>
        <ul>
          <li>Solar system credentials are encrypted at rest using AES-256 encryption.</li>
          <li>All data is transmitted over HTTPS (TLS 1.3).</li>
          <li>Our database (Supabase) uses row-level security — users can only access their own systems.</li>
          <li>We never share, sell, or provide your credentials or production data to third parties.</li>
          <li>Enphase OAuth tokens are stored securely and automatically refreshed — we never see your Enphase password.</li>
        </ul>

        <h2>Data Retention</h2>
        <ul>
          <li>Account data is retained as long as your account is active.</li>
          <li>Shareable reports are retained for 12 months after creation.</li>
          <li>Email subscriptions (without account) are retained until you unsubscribe.</li>
          <li>You can request deletion of all your data by emailing <a href="mailto:hello@getsolardoctor.com">hello@getsolardoctor.com</a>.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Supabase:</strong> Database and authentication (PostgreSQL, hosted in the US).</li>
          <li><strong>Vercel:</strong> Hosting and analytics.</li>
          <li><strong>Resend:</strong> Transactional email delivery.</li>
          <li><strong>NREL PVWatts:</strong> Expected solar production estimates (no personal data sent — only coordinates and system size).</li>
          <li><strong>SolarEdge / Enphase APIs:</strong> We call these on your behalf using the credentials you provide.</li>
        </ul>

        <h2>Your Rights</h2>
        <p>Under CCPA (California) and similar state privacy laws, you have the right to:</p>
        <ul>
          <li>Know what personal information we collect and how it&apos;s used.</li>
          <li>Request deletion of your personal information.</li>
          <li>Opt out of any data sharing (we don&apos;t share data, but the right applies).</li>
          <li>Non-discrimination for exercising your privacy rights.</li>
        </ul>

        <h2>Cookies</h2>
        <p>We use essential cookies for authentication (Supabase session) and Enphase OAuth flow. We use Vercel Analytics which does not use cookies and does not track individuals across sites. We do not use advertising cookies.</p>

        <h2>Children</h2>
        <p>SolarDoctor is not directed at children under 13. We do not knowingly collect information from children.</p>

        <h2>Changes</h2>
        <p>We may update this policy. Material changes will be communicated via email to registered users.</p>

        <h2>Contact</h2>
        <p>Questions about this policy: <a href="mailto:hello@getsolardoctor.com">hello@getsolardoctor.com</a></p>
      </article>
    </div>
  );
}
