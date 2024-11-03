/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: true,
async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
	env: {
		APP_ENV: process.env.REACT_APP_ENV,
		APP_DOMAIN: process.env.REACT_APP_DOMAIN,
		SITE_URL: process.env.SITE_URL,
		SERVER_URL: process.env.REACT_APP_SERVER_URL,
		GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
		IRON_PASSWORD: process.env.IRON_PASSWORD,
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${this.env.SERVER_URL}/uploads/:path*`,
				// destination: `https://back.xn--80aiifgeteakjch.xn--p1ai/uploads/:path*`,
			},
		]
	},
	experimental: {
		serverActions: true,
	},
}

module.exports = nextConfig
