/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/Algonix" : "",
  assetPrefix: isGitHubPages ? "/Algonix/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
