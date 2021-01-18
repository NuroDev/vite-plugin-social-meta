import type { Plugin } from 'vite';

export interface SocialMetaOptions {
	description: string;
	img: string;
	locale: string;
	site_name: string;
	themeColor: string;
	title: string;
	twitter_card: string;
	twitter: string;
	url: string;
};

export const ViteSocialMeta = (options: SocialMetaOptions): Plugin => {
	const meta_tags = [
		// Global
		{ name: 'apple-mobile-web-app-title', content: options.title },
		{ name: 'author', content: options.url },
		{ name: 'publisher', content: options.url },
		{ name: 'theme-color', content: options.themeColor },
	
		// Facebook / LinkedIn
		{ property: 'og:description', content: options.description },
		{ property: 'og:image', content: options.img },
		{ property: 'og:locale', content: options.locale },
		{ property: 'og:site_name', content: options.site_name },
		{ property: 'og:title', content: options.title },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: options.url },
	
		// Twitter
		{ name: 'twitter:card', content: options.twitter_card },
		{ name: 'twitter:creator', content: options.twitter },
		{ name: 'twitter:description', content: options.description },
		{ name: 'twitter:image', content: options.img },
		{ name: 'twitter:site', content: options.twitter },
		{ name: 'twitter:title', content: options.title },
	];

	return {
		name: 'vite-plugin-social-meta',
		transformIndexHtml: {
			enforce: 'post',
			transform(html: any) {
				meta_tags.forEach(tag => {
					if(tag.content == undefined && tag.content == null) return;

					if (tag.hasOwnProperty('name')) {
						html.replace(
							'</head>',
							`<meta hid="${tag.name}" name="${tag.name}" content="${tag.content}"></meta></head>`,
						);
					} else if (tag.hasOwnProperty('property')) {
						html.replace(
							'</head>',
							`<meta hid="${tag.property}" property="${tag.property}" content="${tag.content}"></meta></head>`,
						);
					}
				  });

				return html;
			},
		},
	}
};

export default ViteSocialMeta;
