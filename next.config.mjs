/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = withPWA({
    dest: 'public',
    register: true,
    disable: process.env.NODE_ENV === 'development',  // PWA disabled in development
});

// Move the 'images' configuration outside of 'withPWA'
export default {
    ...nextConfig,
    images: {
        domains: ['images.ctfassets.net'],
    },
};