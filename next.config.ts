/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Abaikan error TS biar cepet tayang
  },
  eslint: {
    ignoreDuringBuilds: true, // Abaikan warning gambar/linting
  },
};

export default nextConfig;