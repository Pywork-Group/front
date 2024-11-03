module.exports = {
	apps: [
		{
			name: 'next-app',
			script: 'yarn',
			args: 'start',
			watch: true,
			ignore_watch: [
				'node_modules',
				'logs',
				'.next/cache',
				'.graphqlrc.yaml',
				'apollo.config.js',
				'src/__generated__',
			],
			env: {
				NODE_ENV: 'production',
				NEXT_SHARP_PATH: '/tmp/node_modules/sharp',
				REACT_APP_DOMAIN: 'xn--80aiifgeteakjch.xn--p1ai',
				SITE_URL: 'https://xn--80aiifgeteakjch.xn--p1ai',
				REACT_APP_SERVER_URL: 'https://back.xn--80aiifgeteakjch.xn--p1ai',
				GRAPHQL_SERVER_URL:
					'https://back.xn--80aiifgeteakjch.xn--p1ai/api/mygraphql',
				IRON_PASSWORD:
					'CSDdp@3UqRLkVJHTzsreNcjBZuh&vA^G)5W!y2bEKm(P4gY*78QaM%XfItF',
			},
		},
	],
}
