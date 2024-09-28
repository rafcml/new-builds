/** @type {import('next').NextConfig} */

// Debug configuration
const nextConfig = {
  // Enable detailed logging
  logging: {
    level: "verbose",
    fetches: true,
  },
  // Enable source maps for server-side code
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      config.devtool = "source-map";
    }
    return config;
  },
  // Enable React strict mode for additional checks
  reactStrictMode: true,
  // Enable debug mode
  debug: true,
};

export default nextConfig;
