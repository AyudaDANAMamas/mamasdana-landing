import type { NextConfig } from "next";
import type {Redirect} from "next/dist/lib/load-custom-routes";

const nextConfig: NextConfig = {
    redirects: async (): Promise<Redirect[]> => {
        return [
            {
                source: '/:path*',
                destination: 'https://www.instagram.com/latribudecarla',
                permanent: false,
            },
        ];
    }
};

export default nextConfig;
