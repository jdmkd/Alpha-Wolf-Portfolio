/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrite(){
        return [
            {
                source: 'api/:path*',
                // destination: '/index.html',
                destination: 'http://localhost:8080/api/:path*',
            }
        ]
    }
};


export default nextConfig;
