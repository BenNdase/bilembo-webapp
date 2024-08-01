/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Ajoutez ici le domaine de votre image
  },
  distDir: "build",
};

export default nextConfig;
