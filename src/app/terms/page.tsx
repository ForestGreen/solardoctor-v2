import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Terms of Service - SolarDoctor",
  description: "Terms of Service for using SolarDoctor's free solar monitoring and health score tools.",
  alternates: { canonical: "https://www.getsolardoctor.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav variant="minimal" />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray">
        <h1>Terms of Service</h1>
        <p className="text-sm text-gray-500">Last updated: April 10, 2026</p>

        <h2>1. Acceptance</h2>
        <p>By using SolarDoctor (&quot;the Service&quot;), you agree to these Terms. If you do not agree, do not use the Service. SolarDoctor is operated by SolarDoctor (&quot;we&quot;, &quot;us&quot;).</p>

        <h2>2. What SolarDoctor Does</h2>
        <p>SolarDoctor is a free solar system monitoring tool that compares your actual solar production against expected output and provides a health score. We are not a solar installer, electrician, or licensed contractor. We provide informational estimates only.</p>

        <h2>3. No Warranty on Accuracy</h2>
        <p>Health scores, lost production estimates, and dollar amounts are <strong>estimates based on statistical models</strong> (NREL PVWatts) and data from your inverter manufacturer&apos;s API. They are not guaranteed to be accurate. Factors that affect accuracy include:</p>
        <ul>
          <li>Panel orientation and tilt (we use reasonable defaults if not specified).</li>
          <li>Local weather deviations from historical averages.</li>
          <li>System degradation over time.</li>
          <li>Inverter API data availability and accuracy.</li>
          <li>State-average electricity rates (your utility rate may differ).</li>
        </ul>
        <p><strong>Do not make financial decisions solely based on SolarDoctor estimates.</strong> Consult a qualified solar professional for system evaluation.</p>

        <h2>4. Your Credentials</h2>
        <p>When you connect your solar system, you provide API credentials (SolarEdge API key or Enphase OAuth authorization). By providing these credentials, you:</p>
        <ul>
          <li>Confirm you are the system owner or have authorization to access this data.</li>
          <li>Authorize SolarDoctor to access your production data on your behalf.</li>
          <li>Understand that credentials are stored encrypted and used solely for fetching your production data.</li>
        </ul>
        <p>You can revoke access at any time by deleting your account or revoking the API key/OAuth authorization at your inverter manufacturer&apos;s portal.</p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service to access systems you do not own or have authorization for.</li>
          <li>Attempt to reverse-engineer, scrape, or abuse the Service.</li>
          <li>Use automated tools to make excessive API calls (rate limits apply).</li>
          <li>Provide false information when creating an account.</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>SolarDoctor is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law:</p>
        <ul>
          <li>We are not liable for any damages arising from use of the Service.</li>
          <li>We are not liable for decisions made based on our health scores or estimates.</li>
          <li>We are not responsible for outages of third-party APIs (SolarEdge, Enphase, NREL).</li>
          <li>Our total liability is limited to the amount you paid for the Service (currently $0 for the free tier).</li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>The SolarDoctor name, logo, health score algorithm, and website content are owned by SolarDoctor. Blog content is provided for educational purposes. Your solar production data belongs to you.</p>

        <h2>8. Termination</h2>
        <p>We may suspend or terminate your access if you violate these Terms. You may delete your account at any time by contacting <a href="mailto:hello@getsolardoctor.com">hello@getsolardoctor.com</a>.</p>

        <h2>9. Changes</h2>
        <p>We may update these Terms. Continued use after changes constitutes acceptance. Material changes will be communicated via email to registered users.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Hawaii, without regard to conflict of law provisions.</p>

        <h2>11. Contact</h2>
        <p>Questions: <a href="mailto:hello@getsolardoctor.com">hello@getsolardoctor.com</a></p>
      </article>
    </div>
  );
}
