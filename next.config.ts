import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  sassOptions: {
		// includePaths: ["styles"],
		includePaths: [path.join(process.cwd(), 'styles')],
    silenceDeprecations: ['legacy-js-api']
	},
};

export default nextConfig;
