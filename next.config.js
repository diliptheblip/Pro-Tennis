/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        appDir: true,
    },
    images: {
        domains: ['localhost', 'cdn.thinglink.me', 'agm-kroo.s3.ap-south-1.amazonaws.com']
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig