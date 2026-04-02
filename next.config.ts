/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengabaikan error TypeScript saat build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Mengabaikan error ESLint (seperti warning gambar) saat build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;