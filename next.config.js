/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www for canonical URL consistency
      {
        source: "/:path*",
        has: [{ type: "host", value: "getsolardoctor.com" }],
        destination: "https://www.getsolardoctor.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
