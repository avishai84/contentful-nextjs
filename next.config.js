/** @type {import('next').NextConfig} */
const { CONTENTFUL_SPACE_ID } = process.env

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: `/${CONTENTFUL_SPACE_ID}/**`,
          },
        ],
      },
}

module.exports = nextConfig
