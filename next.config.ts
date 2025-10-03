/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: { externals: { "pdfjs-dist": string; }[]; }) => {
    config.externals.push({
      "pdfjs-dist": "commonjs pdfjs-dist",
    });
    return config;
  },
};

module.exports = nextConfig;
