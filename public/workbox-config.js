module.exports = {
	globDirectory: 'crew-mobil/',
	globPatterns: [
		'**/*.{json,md,js,ico,png,jpg,jpeg,svg}'
	],
	swDest: 'crew-mobil/public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};