const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.leadconnectorhq.com' },
      { protocol: 'https', hostname: 'assets.cdn.filesafe.space' },
      { protocol: 'https', hostname: 'framerusercontent.com' }
    ],
  },
};
export default nextConfig;
